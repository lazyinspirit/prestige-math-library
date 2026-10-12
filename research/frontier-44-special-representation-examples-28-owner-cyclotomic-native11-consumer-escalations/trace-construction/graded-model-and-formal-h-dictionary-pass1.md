# Exact graded polynomial-model dictionary (same first pass)

Run frontier-44-special-representation-examples-28; author /root/repair_klr_global_basis/cyclotomic_trace_construction. This corrects the earlier unshifted spectator-functor description. That description gave the right underlying rings/operators but did not make both different-color crossings homogeneous of their required degree. The shifts below are now part of the model, not an optional inference from ungraded faithfulness. Sourceκ=−τ_native for all color pairs remains normative.

## Ordered word shifts

Choose a total order on the finite color set with the fixed parabolic colori last. Let m=(m_j), let b_jk=d_j a_jk=b_kj and d_j>0. Give each raw downward model functor G_j the internal shift

s_j(m)=−2d_jm_j+Σ_{ℓ>j}(−b_jℓ)m_ℓ.

For i last this is s_i(m)=−2d_i r, r=m_i, exactly the already-checked i flag shift. For j≠i its underlying flag is the outer-extension C_m^j=L_m[y]; the actual graded bimodule is C_m^j{s_j(m)}. The diagonal term is the staircase primitive-row Morita normalization in that color; spectator-spectator ordering terms and the term (−b_ji)r are retained explicitly. No upward H_j is required at spectator colors.

For a chronological word ν=(j_1,...,j_L), the image is its underlying flag tensor product shifted by

S_ν(m)=Σ_{a=1}^L s_{j_a}(m+Σ_{t<a}e_{j_t}).

A homogeneous underlying map of degreeD from source shifted byS to target shifted byT has actual degreeD+T−S. This sign rule uses the repository convention M{r}_d=M_{d-r}.

## Verification for every downward crossing

For distinct j<k, the increasing boundary word(j,k) is G_kG_j. The source polynomial crossing is the switch/quotientπ of underlying degree0, with target word(k,j)=G_jG_k. Its unit-shift difference is

[s_k(m)+s_j(m+e_k)]−[s_j(m)+s_k(m+e_j)]=−b_jk.

Hence its actual degree is−b_jk, as required. The reverse source crossing multiplies byQ_jk and switches, of underlying degree−2b_jk; its unit-shift difference is+b_jk, so it too has degree−b_jk. Native crossings are the negatives of these source maps and have the same degrees. The two quadratic composites have degree−2b_jk and valueQ. For repeated colorj, the two words have identical total shift and the divided difference has degree−2d_j=−b_jj. Distant/three-strand compositions add these degrees, so the full downward Q1–Q4 action is graded in the exact native/source presentation.

In particular, for j<i, D_1 (j theni)=G_iG_j carries quotientπ to D_0 (i thenj)=G_jG_i. Their shift difference is−b_ij=d_i A_ij, so π is not degree0 as a map between the actual shifted word functors. Multiplication byQ on the reverse word has degree2d_iA_ij before shifts and degree d_iA_ij after the opposite shift difference. This is the missing boundary correction in the old model.

## Basic restriction and normalized formal H are distinct

For an i flag r→r+1, the basic functors are

F_i^basic=B_m{−2d_i r} tensor−,

E_i^basic=B_m tensor−,

with the reversed ring actions forE. Their first adjunction is degree0 using the target coefficient trace τ_new and its dual bases; the second is E_i^basic{t_i(m)}⊣F_i^basic with t_i(m)=−2d_i(h_m−1), h_m=N−2r. These are exactly the already-proved flag maps; they are not redefined here.

At input vertexm, the formal upward generator used in Rouquier/Webster's graded minimal-parabolic presentation is instead

H_i(m)=E_i^proj(m)=E_i^basic(m){−d_i(1+h_m)}.

Its underlying flag is B_{m-i}, and the displayed shift depends on the INPUT weight. Write M_R=−h_m for the source/Rouquier integer weight. Thus formal G_i is basic induction, and formal H_i is normalized projective restriction. They are adjoint up to the indicated homogeneous diagram cup/cap degrees; one must not label their first adjunction degree0 by identifying H_i with basicE.

At vertexm, the first unit id→H_iG_i has degree d_i(1-h_m)=d_i(1+M_R), because H_i is evaluated at inputm+i, of weight h_m−2. The first counit G_iH_i→id has degree d_i(1+h_m)=d_i(1-M_R). The second unit id→G_iH_i has degree d_i(1+h_m); the second counit H_iG_i→id has degree d_i(1-h_m). The two triangle composites have degree0 because the adjacent input weight changes by2. These are the precise source graded cup/cap degrees. Removing the H normalization recovers the basic second-adjunction degree t_i stated above.

## Mixed restriction shifts and canonical rho

For j≠i, h(m+e_j)=h_m+A_ij and s_j(m-e_i)=s_j(m)+b_ij. The underlying polynomial mixed map between E_i^basicG_j and G_jE_i^basic is the switch identity. Its target unit-shift minus source is b_ij. Consequently

E_i^basicG_j ≅ (G_jE_i^basic){−b_ij}

as degree0 shifted functors; an unshifted assertion for basicE would be false in this convention.

For normalizedH, source total shift is

s_j(m)−d_i(1+h_m+A_ij),

while target total shift is

−d_i(1+h_m)+s_j(m-e_i)=−d_i(1+h_m)+s_j(m)+b_ij.

Since b_ij=−d_iA_ij, they agree. Thus the formal mixed commutator H_iG_j≅G_jH_i is genuinely unshifted, with its model switch map degree0. The source/native crossing minus signs affect its scalar expression but not this equality of degrees.

Likewise, at vertexm the shifts of the underlying H_iG_i and G_iH_i flags both equal−2d_i r+d_i(1-h_m). In the basic canonical rho, the transfer is a same-color crossing of degree−2d_i, and its FE term therefore comes with shift−2d_i. Restoring the normalizedH turns that into a degree0 formal σ. In positive h, the basic EF identity columns have shifts2d_i k, k=0,...,h−1; after H normalization their shifts become d_i(1-h+2k), the symmetric quantum integer [h]_i. The negative branch follows with the same input-weight normalization from its stated basic q_i^{-2j-2} components. Hence formal rho/cups/mixed maps and raw basic EF/FE statements use consistent but distinct dictionaries.

## Bubble and cap-off grading boundary

At the vacuum h=λ_i, closing the first unit with the second cap and λ_i−1+ℓ dots has degree2d_iℓ. Closing the second unit with the first cap and b dots has degree2d_i(λ_i+1+b). These give exactly the fake-bubble indices used in the cap-off proof: b=−λ_i−1+m has degree2d_i m; genuine clockwise b≥0 lies in the vanished tail m≥λ_i+1 after monic specialization. Thus the corrected formal H alias does not change the actual bubble recurrence or curl ideal-membership calculation.

The spectator word shifts also do not change the cap-off first-strand ideal: exterior diagrams and their model maps receive their homogeneous word shifts, but the local curl still has degree2d_iλ_i and value a_i(x_1) times its polynomial decoration, with the exact κ=−τ sign dictionary. General monic coefficient specialization preserves all underlying identities; homogeneous degree claims apply to the universal graded coefficient ring or the standard homogeneous quotient.

The action helper's faithful formal-model proof must use this corrected graded dictionary. Underlying polynomial bounded-degree witnesses may be checked before applying the overall word shifts; generator degrees have been verified separately above, so that faithfulness can no longer be mistaken for an unproved grading assertion.
