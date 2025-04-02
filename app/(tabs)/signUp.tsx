import { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  View, 
  Platform,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { format } from 'date-fns';
import { Theme } from './theme';

export default function SignUpScreen() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    mobileNumber: '',
    dateOfBirth: '',
  });
  
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const onChangeDate = (event: any, selectedDate?: Date) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(Platform.OS === 'ios');
    setDate(currentDate);
    setFormData({
      ...formData, 
      dateOfBirth: format(currentDate, 'dd / MM / yyyy')
    });
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    
      <View style={styles.container}>
        {/* Titre */}
        <Text style={styles.title}>New Account</Text>

        {/* Formulaire compact */}
        <View style={styles.formContainer}>
          {/* Full Name */}
          <View style={styles.formGroup}>
            <Text style={styles.label}>Full name</Text>
            <TextInput
              style={styles.input}
              value={formData.fullName}
              onChangeText={(text) => setFormData({...formData, fullName: text})}
            />
          </View>

          {/* Email */}
          <View style={styles.formGroup}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              style={styles.input}
              placeholder="   example@example.com"
              placeholderTextColor={Theme.colors.secondary}
              keyboardType="email-address"
              value={formData.email}
              onChangeText={(text) => setFormData({...formData, email: text})}
            />
          </View>

          {/* Password */}
          <View style={styles.formGroup}>
            <Text style={styles.label}>Password</Text>
            <TextInput
              style={styles.input}
              placeholder="   ********"
              placeholderTextColor={Theme.colors.secondary}
              secureTextEntry
              value={formData.password}
              onChangeText={(text) => setFormData({...formData, password: text})}
            />
          </View>

          {/* Mobile Number */}
          <View style={styles.formGroup}>
            <Text style={styles.label}>Mobile Number</Text>
            <TextInput
              style={styles.input}
              placeholder="   06********"
              placeholderTextColor={Theme.colors.secondary}
              keyboardType="phone-pad"
              value={formData.mobileNumber}
              onChangeText={(text) => setFormData({...formData, mobileNumber: text})}
            />
          </View>

          {/* Date Of Birth - Version optimisée */}
          <View style={styles.formGroup}>
            <Text style={styles.label}>Date Of Birth</Text>
            <TouchableOpacity 
              style={styles.input} 
              onPress={() => setShowDatePicker(true)}
            >
              <Text style={styles.dateText}>
                {formData.dateOfBirth || "   DD/MM/YYYY"}
              </Text>
            </TouchableOpacity>
            {showDatePicker && (
              <DateTimePicker
                value={date}
                mode="date"
                display={Platform.OS === 'ios' ? 'compact' : 'default'}
                onChange={onChangeDate}
                maximumDate={new Date()}
              />
            )}
          </View>
        </View>

        {/* Bouton Sign Up */}
        <TouchableOpacity style={styles.signUpButton}>
          <Text style={styles.signUpButtonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.colors.background,
    paddingHorizontal: Theme.paddings.xl,
    paddingTop: Theme.paddings.xxl,
  },
  formContainer: {
    flex: 1,
    justifyContent: 'center',
    marginTop: -Theme.spacing.xxl, 
  },
  title: {
    margin: Theme.paddings.xxl,
    fontSize: Theme.fontSizes.xl,
    fontFamily: Theme.fonts.bold,
    color: Theme.colors.primary,
    textAlign: 'center',
    marginBottom: Theme.spacing.xxl,
  },
  formGroup: {
    marginBottom: Theme.spacing.md,
  },
  label: {
    fontSize: Theme.fontSizes.md,
    fontFamily: Theme.fonts.medium,
    color: Theme.colors.white,
    marginBottom: Theme.spacing.xxs,
  },
  input: {
    height: Theme.heights.input,
    borderWidth: 1,
    borderRadius: Theme.radii.lg,
    borderColor: Theme.colors.white,
    justifyContent: 'center', 
    color: Theme.colors.white,
  },
  dateText: {
    color: Theme.colors.secondary,
    fontFamily: Theme.fonts.medium,
    fontSize: Theme.fontSizes.md,
  },
  signUpButton: {
    height: Theme.heights.button,
    backgroundColor: Theme.colors.primary,
    borderRadius: Theme.radii.lgx,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: Theme.spacing.md,
  },
  signUpButtonText: {
    fontSize: Theme.fontSizes.md,
    fontFamily: Theme.fonts.semiBold,
    color: Theme.colors.white,
    textTransform: 'uppercase',
    
  },
});