---
id: lem-cft-character-hopf-normalization-and-fusion-diagonalization
kind: lemma
title: Character Hopf normalization and VOA fusion diagonalization
status: draft
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
proof_strategy: direct
deps:
- lem-cft-strong-rational-fixed-torus-loop-nondegeneracy
- lem-cft-rational-one-point-ward-blocks-ordinary-trace-completeness
- lem-cft-genus-one-ward-identities-modular-covariant
- lem-cft-finite-braided-rigidity-and-contragredient-duals
- thm-cft-logarithmic-pz-intertwining-correspondence
- lem-balancing-and-hopf-link-character-identity
- lem-modular-hopf-matrix-squared
- lem-multicolored-ribbon-coupon-evaluation
- thm-cft-finite-dimensional-ordinary-fusion-rules
- lem-cft-fusion-matrix-diagonalization-implies-verlinde
- thm-cft-contragredient-double-dual-isomorphism
dependency_roles:
  lem-cft-strong-rational-fixed-torus-loop-nondegeneracy: mathematical-premise
  lem-cft-rational-one-point-ward-blocks-ordinary-trace-completeness: mathematical-premise
  lem-cft-genus-one-ward-identities-modular-covariant: mathematical-premise
  lem-cft-finite-braided-rigidity-and-contragredient-duals: mathematical-premise
  thm-cft-logarithmic-pz-intertwining-correspondence: mathematical-premise
  lem-balancing-and-hopf-link-character-identity: mathematical-premise
  lem-modular-hopf-matrix-squared: mathematical-premise
  lem-multicolored-ribbon-coupon-evaluation: mathematical-premise
  thm-cft-finite-dimensional-ordinary-fusion-rules: mathematical-premise
  lem-cft-fusion-matrix-diagonalization-implies-verlinde: mathematical-premise
  thm-cft-contragredient-double-dual-isomorphism: mathematical-premise
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
  - title: Yi-Zhi Huang, Vertex operator algebras and the Verlinde conjecture
    url: https://arxiv.org/pdf/math/0406291
    locator: Sections 2 and 4, projected two-point cycle operators and Proposition4.5; the relevant displayed definitions and proofs were read, not the full paper. The normalization below is derived from actual local evaluation and sewing formulas.
dependency_level: 11
---

## Statement

Let $V$ be simple, self-contragredient, of CFT type, admissibly rational and $C_2$-cofinite. Let $S$ be the actual ordinary-character modular matrix in Huang's convention, determined by the full geometrically modified one-point trace maps. Let $s$ be the categorical Hopf matrix of its ordinary-intertwiner ribbon category and $C_{ij}=\delta_{i,j^*}$. For some nonzero scalar $\kappa$ with $\kappa^2\sum_i d_i^2=1$, one has $S=\kappa sP$, where $P$ is either the identity or $C$, determined by the retained primitive-cycle orientation; changing that orientation exchanges these two descriptions. In either convention $S$ is symmetric, $S^2=C$, $S_{0x}\ne0$, the ordinary intertwiner dimensions $N_{ij}^{\,k}$ are finite, and the fusion matrices satisfy $N_iS=S\operatorname{diag}(S_{ix}/S_{0x})$. In particular the character Verlinde formula is
$$N_{ij}^{\,k}=\sum_x\frac{S_{ix}S_{jx}S_{k^*x}}{S_{0x}}.$$
No complex conjugation is used.

## Facts & Assumptions

**Given:** Exactly the five strong-rational hypotheses and the actual full-trace modular convention in the Statement.

[F1] [[lem-cft-strong-rational-fixed-torus-loop-nondegeneracy]]: the actual strong-rational braided ribbon MTC, identity-channel torus basis, flat puncture continuation and both local cut words; its earlier nonzero scalars are sharpened below.

[F2] [[lem-cft-rational-one-point-ward-blocks-ordinary-trace-completeness]]: the globally analytic ordinary one-point trace maps and their constant-coefficient completeness, without a Hopf/character comparison.

[F3] [[lem-cft-genus-one-ward-identities-modular-covariant]]: the exact modular covariance of those full Ward maps with their geometric coordinate convention.

[F4] [[lem-cft-finite-braided-rigidity-and-contragredient-duals]]: the actual evaluation intertwiners and their explicit nonzero lowest vacuum coefficient.

[F5] [[thm-cft-logarithmic-pz-intertwining-correspondence]]: the identification of intertwiners with P(z) maps, hence of their spaces with tensor-product Hom spaces.

[F6] [[lem-balancing-and-hopf-link-character-identity]]: symmetry, duality and unit-row identities for the Hopf matrix, and its fusion-ring character identity.

[F7] [[lem-modular-hopf-matrix-squared]]: the actual modular-category identity s squared equals D squared times duality and nonzero D squared.

[F8] [[lem-multicolored-ribbon-coupon-evaluation]]: the explicit typed ribbon opposite-cap and opposite-cup words.

[F9] [[thm-cft-finite-dimensional-ordinary-fusion-rules]]: finite ordinary intertwiner dimensions under the C1/quasi-finite hypotheses already supplied by the strong-rational category proof.

[F10] [[lem-cft-fusion-matrix-diagonalization-implies-verlinde]]: the exact algebraic deduction of the displayed character Verlinde formula from symmetric S, S squared equals duality, nonzero vacuum row and fusion diagonalization.

[F11] [[thm-cft-contragredient-double-dual-isomorphism]]: the canonical restricted double dual and its actual module compatibility.

## Proof

1.1 Fix the ribbon left cup b_X:1->X tensor X' and ribbon right cap r_X:X tensor X'->1. Their composite is d_X. The actual vacuum-channel insertion is precomposition with r_X, and its inverse-channel projection uses b_X/d_X. Thus PC=1. These are genuine three-point conformal blocks: each category morphism is represented by an ordinary intertwiner through the actual P(z) representing property. The choices therefore need not start with an unnormalized opposite-field pairing. Use the global nonvanishing differential dz on the fixed torus for the moving-point frames, and the same small starting/ending pair disk in both primitive-cycle constructions. The cup and cap at these endpoints are identical in the two constructions. All translations have derivative1. Any fixed conversion from those analytic endpoint frames to the ribbon left/right cup/cap is a label-only nonzero scalar eta_X, and it occurs in both calculations. No further framing twist occurs along either translation path. Changing the chosen endpoint frames changes this common eta_X, not its equality between the two calculations. In the spatial calculation, the local cut word is the pivotal partial closure of the double braiding with the projector factor 1/d_X. Consequently B_X(e_i)=(eta_X/d_X)(s_Xi/d_i)e_i.                     (1) In the longitudinal calculation on the vacuum channel, the identical endpoint cup and cap and identical projector factor remain; after the seam change, the internal word is the ribbon snake rather than its closed trace. It is the identity on X or X' according to the orientation. Consequently A_X(e_0)=(eta_X/d_X)e_(X').                            (2) Here the bent cup is the ribbon-induced opposite cup, with no unknown pivotal scalar. To verify this directly, let X have lowest weight h. The actual evaluation construction gives intertwiners E_X of type (V;X,X') and E_(X') of type (V;X',X''), using the canonical restricted-double-dual map delta_X:X->X''. For lowest vectors x and x' the coefficient paired with the vacuum is <E_X(x,z)x',1>=exp(pi i h) z^(-2h)<x',x>, <E_(X')(x',z)delta_X(x),1>=exp(pi i h) z^(-2h)<x',x>. The actual braiding skew transform is Omega_0. Thus Omega_0(E_(X')) on these inputs has vacuum coefficient exp(pi i h)exp(-2 pi i h) z^(-2h)<x',x>. Composing with theta_X on its X input multiplies it by exp(2 pi i h), restoring exactly the first coefficient. Both are ordinary intertwiners of type (V;X,X'). That space is one dimensional by the now proved rigidity and P(z) representing property, and the displayed coefficient is nonzero. Hence equality of that coefficient proves the full intertwiner identity E_X=Omega_0(E_(X'))(theta_X tensor1_(X')). This is not a leading-order approximation: one dimensionality propagates the calculated scalar to the whole intertwiner. Choose the same scalar normalization for the evaluations of X and its actual restricted dual. The identity is precisely the ribbon right-cap formula r_X=e_X c_(X,X') (theta_X tensor1_(X')). It is unchanged under simultaneous rescaling. The local coordinate turn of the cup is then its right-duality cup, since transporting the two left snakes gives the right snakes and a cup for a fixed evaluation is unique (insert the two snakes into the comparison composite). Equivalently its word is (1_(X') tensor theta_X^(-1)) c_(X',X)^(-1) b_X. Consequently the bent cups/caps in (1) and (2) are exactly the canonical ribbon ones, with only the same original endpoint-frame scalar eta_X. There is no independent cap normalization in one of the two cycle cuts. [given, F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, F11, algebra]

2.1 Choose the orientation conventions so that the square-torus rotation exchanges these operations with the dual label retained. Its conjugation gives, with the convention of the existing loop proof, R_(i,X')=(r_i0/d_i)s_Xi. The common factor eta_X/d_X has canceled. Set K_ii=r_i0/d_i. The preceding nondegeneracy proof gives r_i0!=0, so K is invertible. In matrix form R=K s C,                                               (3) where C is the dual-label permutation. Choosing the other primitive-cycle orientation removes the final C; all conclusions below, including the Verlinde sum, are unchanged by that column permutation. [step 1.1, F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, F11, algebra]

3.1 The geometric half-turn squares the quarter rotation. On the identity-channel coend basis its action exchanges the two sewn sphere legs and restricted-transposes the channel endomorphism. Thus R^2=C. This is an exact identity on the e_i basis: the finite homogeneous identity pairing transposes to the identity pairing on the restricted dual, the two opposite-field state substitutions are inverse, and each term has the same q^L factor. The common q^(-c/24) changes neither side. The identification is not a statement about equality of scalar characters, which may coincide. It is the identity of the full one-point conformal blocks with their coordinate action. [step 2.1, F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, F11, algebra]

4.1 Use the actual published categorical suppliers `lem-balancing-and-hopf-link-character-identity` and `lem-modular-hopf-matrix-squared` after, and only after, modularity has been proved. They give symmetry of s, sC=Cs, s_0i=d_i, and s^2=D^2C with D^2!=0. From R^2=C, R commutes with C. Equation (3) and invertibility of sC then imply KC=CK. Consequently R^2=K s K s=C, and K s K = C s^(-1)=s/D^2.                               (4) The (0,i) entry, with s_0i=d_i!=0, is k_0 k_i=1/D^2. At i=0 it gives k_0^2=1/D^2, so every k_i=k_0=:kappa. Hence R=kappa s C,        kappa^2 D^2=1.                    (5) [step 3.1, F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, F11, algebra]

5.1 The same fixed torus rotation is the modular substitution tau->-1/tau at tau=i, with its actual coordinate factor -1/tau=i. The geometrically modified ordinary traces are the e_i sewn blocks; raw q^L and shifted q^(L-c/24) differ by the same nonzero scalar for every i at this fixed tau, which cancels in the comparison. Ordinary trace completeness gives a constant modular matrix on the global Ward trace maps. Evaluating that transformation at tau=i yields precisely the pullback R on the block fiber. Fixed coend factorization makes the e_i linearly independent at this fiber, so the global constant matrix is determined by this evaluation even when some scalar characters coincide. Depending on the column/row convention it is R transposed; equation(5) is symmetric since s and C commute. Thus the actual character matrix is kappa s, or kappa s C for the alternative orientation, with no independent diagonal gauge left. In particular this actual character matrix S is symmetric, S^2=C, and S_0x=kappa d_x!=0 (with x replaced by x' if the columns use C). The Hopf character identity gives sum_k N_ij^k S_kx = (S_ix/S_0x) S_jx. Column permutation by C preserves this equation. P(z) representability identifies N_ij^k=dim Hom(M_k,M_i tensor M_j) with the actual ordinary intertwiner dimension. These are finite by the existing fusion supplier. The actual algebraic reduction `lem-cft-fusion-matrix-diagonalization-implies-verlinde` now gives the original character formula with the contragredient k* and no complex conjugation. This completes the character/Hopf normalization and the original VOA-specific matrix input; it does not assert the Cardy condition for arbitrary Virasoro-gluing boundary data. [step 4.1, F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, F11, algebra] ∎
