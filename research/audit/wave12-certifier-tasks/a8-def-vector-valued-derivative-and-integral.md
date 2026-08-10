# Wave 12 A8 exact-final certification

Target: `items/def-vector-valued-derivative-and-integral.md`

Verification-stripped normalized SHA-256: `41ce0e22244d94c3f826b55ab7a5da07eb104dd2132f7809633a4d59599bd908`

The A7 rejection correctly observed that the former restriction clause said an
integrable vector-valued function on `[a,b]`, with `a<b`, was integrable on
"every closed subinterval". The only published vector integrability notion and
the cited scalar restriction lemma require a nondegenerate interval. A8 changed
only that clause to `a <= c < d <= b` and called the interval nondegenerate.

Independently verify the full exact-current item, especially
`def-darboux-integral`, `lem-integrability-on-a-subinterval`,
`def-oriented-integral`, and the distinction between integrability on `c<d`
and merely assigning an oriented equal-limit integral value. Check that the
derivative half and all other integral clauses remain exact. The complete
current 62-item public consumer cone was read by Alpha; its uses either concern
the derivative half or already instantiate nondegenerate intervals, so no
consumer was edited.
