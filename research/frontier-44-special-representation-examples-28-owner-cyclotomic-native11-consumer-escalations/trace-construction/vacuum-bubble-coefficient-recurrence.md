# Vacuum bubble coefficient recurrence, forced by the monic first-strand relation

Run frontier-44-special-representation-examples-28; author /root/repair_klr_global_basis/cyclotomic_trace_construction. This is the polynomial-model/cup-cap interface supplied to the disjoint capoff-normalform constructor. That constructor owns the full word ideal intersection. All source crossings areκ=−τ_native; the cup/cap coefficient identity below has no crossing-sign ambiguity.

Let a_i(u)=u^λ+c_{λ-1}u^{λ-1}+...+c_0. First work over the universal graded coefficient ring, assigning c_j degree2d_i(λ-j). The standard quotient is c_j=0, and arbitrary monic polynomials over a field are later ungraded coefficient specializations.

In the formal minimal-parabolic category take the normalized first unit into E_iF_i and normalized second cap out, as given by the positive coefficient flag forms. Let h_ℓ denote the bubble with λ-1+ℓ dots whenever that dot count is nonnegative; extend it by the formal inverse-bubble coefficients when the dot count is negative. The rank-one dual-basis/Cauchy polynomial identities proved on the explicit model give h_ℓ=0 forℓ<0 and h_0=1. Its degree is2d_iℓ. These are formal rank-one relations, not an assertion about the unknown cyclotomic quotient's graded center.

The boundary first-strand relation a_i(x)F_iv_Λ=0 can be multiplied by x^{ℓ-1} and closed using the specified cup and cap. Forℓ≥1 this uses a nonnegative dot exponent. Linearity gives

h_ℓ+c_{λ-1}h_{ℓ-1}+...+c_0h_{ℓ-λ}=0.

No faithfulness of F_iv_Λ is assumed: it is simply closure of a morphism already in the defining ideal. Since h_0=1 and h_ℓ=0 below0, these recurrences uniquely determine the formal power series

H(t)=Σ_{ℓ≥0}h_ℓt^ℓ,

H(t)(1+c_{λ-1}t+...+c_0t^λ)=1.

The opposite/fake bubble family A(t) is the formal inverse of H(t), by the same Cauchy polynomial identity of the rank-one model. Therefore

A(t)=1+c_{λ-1}t+...+c_0t^λ,

Φ_i(u)=u^λA(u^{-1})=a_i(u).

Thus the polynomial bubble dictionary is forced by the ordinary monic relation plus the already proved formal rank-one cup/cap identities. Its negative-power tail vanishes; it need not be added as an unexplained extra quotient relation. Standard a_i=u^λ gives A=1, while a_i=u(u-1) gives A=1-t and Φ_i=u²-u. The inverse H is then1/(1-t), so it is false to set both oriented positive bubble sequences to0 in a deformation.

Forλ=0, a_i=1 and F_iv_Λ=0. The formal degree-zero fake-bubble coefficient remains h_0=1, all genuine closures h_ℓ forℓ≥1 vanish, and A=H=1. This is consistent with the first-strand ideal being the whole i-word corner.

The capoff constructor may now use the local residue values Res_{u=∞}Φ_i(u)P(u,x)=0 and Res_{u=∞}Φ_i(u)P(u,x)/(u-x)=a_i(x)P(x,x), provided it separately verifies that these are the actual local straight/curl cup-cap contractions in the chosen orientation. The recurrence proves the vacuum specialization, not the word-normal-form completeness by itself. All identities are integral polynomial/power-series coefficient identities and remain valid after every monic coefficient specialization; grading statements apply only before an inhomogeneous ungraded specialization.

## The same coefficients are the actual dot companion

The canonical positive rho at the H_i-annihilated vacuum identifies H_iG_iv with λ copies ofv, with columns x^kη, 0≤k<λ. Whiskering the actual monic marker a_i(x)G_iv byH_i gives a_i(H_ix)η=0. Therefore its final column is x^λη=−Σ_{k<λ}c_kx^kη. By uniqueness of the direct-sum columns these are exactly the companion coefficients, not an independently chosen monic polynomialp. Closure of these column identities gives precisely the h recurrence above. Thus the factor-ring model p=a_i, the prescribed fake-bubble coefficients and the canonical dot companion are three expressions of the same actual first-strand relation. Arbitrary H_i/G_j whiskers of that marker are handled by ordinary naturality and the separate marked-input/capoff transfer; no generic Frobenius or extra polynomial annihilator is assumed.
