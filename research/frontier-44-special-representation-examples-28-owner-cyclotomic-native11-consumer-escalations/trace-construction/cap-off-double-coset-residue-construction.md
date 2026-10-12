# Cap-off kernel calculation by the two parabolic double cosets

Run frontier-44-special-representation-examples-28; author /root/repair_klr_global_basis/cyclotomic_trace_construction. This supplies the remaining local cap-off calculation for the action helper's `minimal-parabolic-transfer-normalform-and-boundary-pass1.md`. All crossing operators here are sourceκ=−τ_native; crossing-product signs are units and do not affect ideal membership. No generic cyclotomic trace/Frobenius theorem is a premise.

## Exact input boundary

Work in the formal minimal-parabolic category with the matching/dot/bubble normal form and faithful polynomial flag models proved in the action helper's note. At the chosen vacuum Λ, its bubble dictionary is the monic polynomial a_i(u) of degreeλ_i: the relevant clockwise Laurent series Φ_i(u) has leading u^{λ_i} and specializes to a_i(u); its coefficients of u^{-1},u^{-2},... vanish. The opposite bubble sequence is the formal inverse, by the coefficient identity c(u)b(u)=p(u). In the standard quotient a_i=u^{λ_i}, all positive-degree far-left bubble parameters vanish; in the monic quotient the lower coefficients are prescribed by a_i, while its negative-power tail still vanishes. This dictionary is part of the formal vacuum specialization already required in the transfer interface, not an assertion that arbitrary positive bubbles may be set to0 in a deformation.

The following proves the cap-off intersection under that exact dictionary. To use it for a quotient generated solely by H_iv_Λ and a_j(x_1)G_jv_Λ, the dictionary itself must be obtained from those generators by the rank-one coefficient/bubble recurrence, or explicitly included in the formal quotient and then shown redundant. The calculation below does not silently assume that redundancy.

## The two local closure values

Let u be the dot on the added leftmost i strand, x the dot on the first original strand, and P(u,x) any polynomial, with possible spectator coefficients. The actual coefficient/dual-basis cup/cap maps give the following local cap-off table after bubble specialization:

straight added strand: Res_{u=∞}(a_i(u)P(u,x))=0;

one equal-color left curl: ε_sign Res_{u=∞}(a_i(u)P(u,x)/(u-x))=ε_sign a_i(x)P(x,x),

where Res is coefficient of u^{-1} and ε_sign is the fixed source/native orientation unit±1. Only ideal membership is used here, so its value is immaterial; a sign is not dropped from a claimed scalar identity. The first value is0 because its numerator is polynomial. For the second, expand1/(u-x)=Σ_{q≥0}x^qu^{-q-1}; for any polynomialF(u,x), coefficient u^{-1} inF/(u-x) isF(x,x). This identity is integral and works in every characteristic.

To identify this residue table with the actual diagram cap-off, use the literal leftward-curl expansion verified by the rank-one coefficient/dual-basis model and displayed in Webster Figure2 (PDF page9): it is a unit sign times Σ_{a+b=−1}x^a B_b. In the vacuum dictionary, B_{−λ_i−1+m}=A_m, and terms below that bubble index have negative degree and vanish. Since a≥0, only0≤m≤λ_i survive; the result isΣ_{m=0}^{λ_i}A_mx^{λ_i-m}=a_i(x). This avoids the provisional two-root-collision typing entirely. For a dot on the added strand, sourceκu=xκ−1 (nativeτu=xτ+1) gives the decorated-curl recurrence C(uP)=xC(P) plus a straight-bubble correction. The correction is A_{λ_i+1+r}=0 for r≥0 because A=a_i^rev has degreeλ_i, so C(uP)=xC(P). Dots on the original strand already multiply byx. Induction proves C(P)=unit·a_i(x)P(x,x), the displayed residue table. The un-crossed closure is the same zero genuine-clockwise-bubble tail. These are the actual formal cup/cap relations computed by the independent flag model; no arbitrary natural-transformation equality is inferred from rank-one object detection.

A dot-decorated left curl therefore factors through a_i(x) on the first original i strand. Spectator Q multipliers only change the polynomialP, so the whole Q family is retained.

## PBW double-coset decomposition: exactly one local curl

Let W=S_{n+1} and W_P=S_{\{2,...,n+1\}}, the parabolic subgroup fixing position1. Its double cosets are precisely W_P and W_Ps_1W_P: either w fixes1 or it moves1. Every permutation in the second double coset has a length-additive expressionw=u s_1v withu,v∈W_P. This follows from the usual insertion/removal of the first value: first use a minimal right coset representative to move its original position to2, interchange positions1 and2 once, then permute only positions2,...,n+1 to obtainw. Equivalently choose minimal representatives of W_P/(W_P∩s_1W_Ps_1); their lengths add, and the remaining parabolic permutation isv. Thus a PBW reduced expression can be chosen with s_1 at most once.

Expand any added-strand downward morphism between (i,μ) and(i,ν) in PBW form, choosing these reduced words and placing its polynomial coefficientP on a fixed side. A term with noκ_1 has all crossings on the lastn original strands; they pull past the left cup/cap, and the added strand closes as the first, straight-bubble case, hence gives0.

A term with oneκ_1 is a product Aκ_1 B, whereA,B have crossings only among the lastn strands and polynomial dots. After applyingB, the color at position1 is stilli. BecauseA also fixes that position and the final added color is i, the strand at position2 in the middleκ_1 must be i as well. Hence the sole crossing at the boundary is equal-color; unlike-color κ_1 cases cannot occur in this corner. PullA,B past the left closure; the middle piece is exactly the equal-color curl in the residue table. Its value is a unit sign times a_i(x_1)P(x_1,x_1) on the first original i strand, followed and preceded by the two ordinary downward word morphisms. Therefore each such term lies in

R(β)a_i(x_1)e(i,β−α_i)R(β).

This is why one must use parabolic double cosets rather than merely say “there is some nonzero closing”: the factor a_i occurs at the first strand, before the exterior ordinary word maps. Crossing it to another position without these exterior maps would not by itself prove first-strand ideal membership.

PBW braid corrections cause no problem. They have fewer crossings and polynomial coefficients, and are treated by the same two-double-coset expansion. Dots on the added strand produce arbitraryP(u,x), already covered by the integral residue table. Thus cap-off of every downward added-i-strand morphism lies in the ordinary first-strand cyclotomic ideal.

## Closure under existing first-strand ideal insertions

The same calculation preserves an already present first-strand ideal. If its a_i factor is on the added strand, the straight closure is still polynomial residue0, and a curl has residue a_i(x)^2P(x,x), still in the ideal. If its factor is on the original strand meetingκ_1, it remains a_i(x) in the local result. If it is on another color/strand, it belongs to one of the exterior downward word maps and remains an ordinary two-sided ideal factor. Repeated reductions can therefore be performed from innermost cap to outermost without creating an extra downward kernel generator.

## Consequence for the full ideal intersection, with the dictionary boundary explicit

A diagram factoring through A H_i v_Λ is bent using the actual formal adjunction into a downward diagram with the added leftmost i strand followed by the above cap-off. The two-coset calculation puts its result in the ordinary cyclotomic ideal. Terms generated by a_j(x_1) remain in that ideal by the preceding stability argument. Conversely that ideal is contained in the formal vacuum ideal by its defining first-strand generators. Hence, provided the stated bubble dictionary is the actual one induced by the vacuum relations,

J∩e(ν)R(β)e(μ)=e(ν)[Σ_j R(β)a_j(x_1)e(j,β−α_j)R(β)]e(μ).

Together with the action helper's already-proved negative word generators and surjective corner map, this gives injectivity and the desired equivalence to actual R^Λ word projectives. Coherent mixed-mate identities then transfer from the explicit minimal-parabolic model without a one-dimensional Hom premise.

The remaining verification is sharply scoped: bind the now-authored formal vacuum bubble recurrence in `vacuum-bubble-coefficient-recurrence.md` and the exact Figure2 curl relation to the complete marked-input/word-normal-form transfer. The provisional two-root-collision argument is no longer used. Those are explicit interfaces; this note does not stamp the whole generic theorem accepted merely because the cap-off residue is a polynomial multiple ofa_i.
