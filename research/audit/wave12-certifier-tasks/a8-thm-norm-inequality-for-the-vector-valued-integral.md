# Wave 12 A8 exact-final certification

Target: `items/thm-norm-inequality-for-the-vector-valued-integral.md`

Verification-stripped normalized SHA-256: `49b54b1bc91e3bdaf73ee7d5fe7ffd0e00f9d3175cf222d2c5423812123c7710`

The A7 rejection correctly observed that the former theorem assumed `f` was
integrable while allowing `a=b`, although vector integrability is defined only
for `a<b`; the oriented convention merely assigns the equal-limit integral
value. A8 made the integrability hypothesis conditional on `a<b`, retained the
equal-limit `0 <= 0` case, and qualified L1's componentwise integrability claim
the same way. No proof estimate or nondegenerate case changed.

Independently verify the complete exact-current theorem and every dependency
needed for the boundary and proof, especially
`def-vector-valued-derivative-and-integral`, `def-oriented-integral`,
`def-darboux-integral`, and the exact contract. Confirm that all current
consumers remain licensed: the load-bearing integral consumers use `a<b`; the
other citations are explanatory only. Also verify the prior proof-order repair
remains sound and no quantity is used before definition.
