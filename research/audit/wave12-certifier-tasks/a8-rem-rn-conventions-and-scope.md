# Wave 12 A8 exact-final certification

Target: `items/rem-rn-conventions-and-scope.md`

Verification-stripped normalized SHA-256: `c4a6f3fa43646cfff182b59ba8ccc3d93af468b77e361b86f2270648bfa4d95d`

The A7 rejection correctly observed that the former phrase "nonnegative base
and rational exponent" includes `0^r` for negative rational `r`, which
`def-rational-power` explicitly leaves undefined. A8 changed only that phrase
to positive bases for arbitrary rational exponents, together with `0^r` for
rational `r>0`.

Independently verify the complete exact-current Remark and the complete
`def-rational-power`, including zero, positive, and negative-exponent boundary
cases. Check that the statement about rational p-norm exponents is exact and
that no current direct or logical consumer relies on the invalid broader
wording.
