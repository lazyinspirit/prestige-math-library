# Exact native/source crossing-sign dictionary (same first pass)

Run frontier-44-special-representation-examples-28; author /root/repair_klr_global_basis/cyclotomic_trace_construction. The exact native10 Definition is the item `def-quiver-hecke-klr-algebra-for-a-symmetrizable-cartan-datum` in `research/frontier-44-special-representation-examples-28-batch-10.pages.json`. Its clauses(6)–(7) explicitly fix the positive divided difference and globally opposite source crossing sign. The previous informal statement that chronological right append made the source crossing equal to the native one was false; word order does not remove this sign. All research calculations are now to be read through this explicit dictionary.

Write κ_a for KK/Rouquier/Webster source crossings and τ_a for native crossings. For **every color pair**, not only equal colors,

κ_a=−τ_a,  x_a^source=x_a^native,  e(ν)^source=e(ν)^native,  Q^source=Q^native.

The source equal-color polynomial operator is (s_af−f)/(x_a−x_{a+1}); the native operator is (f−s_af)/(x_a−x_{a+1}). Hence source κ_ax_a−x_{a+1}κ_a=−1 and κ_ax_{a+1}−x_aκ_a=+1 translate exactly to native τ_ax_a−x_{a+1}τ_a=+1 and τ_ax_{a+1}−x_aτ_a=−1. Quadratic relations have two crossing signs, so Q is unchanged. Braid words have three signs; the native clause(7) numerator is therefore the negative of the source numerator, exactly as the actual Definition says. Distant commutativity and idempotent transport are unchanged.

For a chosen reduced wordw, κ_w=(-1)^{ell(w)}τ_w. This is a graded algebra isomorphism of the full source and native KLR presentations and preserves the first-strand monic cyclotomic ideals. No coefficient normalization ofQ is introduced.

## Consequences for the constructions in this directory

* All ∂, finite nil-Coxeter operators, σ and canonical-rho formulas in `rank-one-universal-model.md`, `endpoint-normal-form-construction.md` and `candidate-maps-and-rank-one-detection.md` are SOURCE formulas. Their matrices and finite inverses remain valid; apply the displayed global crossing substitution before interpreting them natively. The action helper owns the actual native P/Q, gamma, recurrence and rho conversion.
* The source primitive idempotent e_r=(-1)^{ell(w_r)}κ_{w_r}·staircase is exactly the native idempotent τ_{w_r}·staircase. Thus the matrix-Morita normalization, finite-projectivity factorization and formal monic quotient rank arguments do not change.
* The source same-end transfer is aκ_nb, so its actual native map is−aτ_nb. A source P with n crossings becomes (-1)^n times its corresponding native crossing product. Source equal-color g=(y−x)−(y−x)²κ becomes (y−x)+(y−x)²τ natively.
* Source κ_nx_{n+1}=x_nκ_n+1 becomes native τ_nx_{n+1}=x_nτ_n−1. If one keeps the source transfer map−τ_n in the native carrier, the source plus recurrence remains literally correct; if one instead calls the positive native crossing the transfer map, the multiplication/counit term changes sign. These two naming conventions must not be mixed.
* In the explicit spectator model, a source different-color crossing acts byπ or multiplication byQ. The native generator acts by−π or multiplication by−Q, respectively. Their quadratic composite has two minus signs, givingQ. The two sideways-mate composites likewise have two signs, so their nonzero scalars t_ij and t_ji are unchanged.
* The mixed-cap identity for a single native crossing has the corresponding one minus sign: ε̂_new((-Q)f)=−t_ij ε̂_old(f). In comparing the two native mate definitions, both crossings are changed, so their ratio and the double-mate relation are the same as in source orientation. Explicitly, from M²(κ)=rκ and κ=−τ, linearity gives M²(τ)=rτ.
* The normalized coefficient/flag cup and cap forms themselves are intrinsic polynomial pairings. Source-to-native conversion changes their crossing-product expressions through the above signs, and the already explicit global weight normalization (-1)^{h+1} is retained. It does not change the homogeneous adjunction shift t_i=−2d_i(h−1), the word trace degree−2def, or perfectness.

Therefore the final trace theorem, symmetric word rescaling and DψP≅P#{−2def} conclusion retain their degree and scalar ratios. The required faithful minimal-parabolic transfer must use this exact sign dictionary and the actual native Definition, never a claimed sign-free identification of source diagrams with native diagrams.

A concrete braid boundary check uses i>j, Q_ij(u,v)=u+v and the word(i,j,i). With native unequal operators−Q s in the descending-color direction and−s in the ascending-color direction, and native equal operator(1−s)/(x_a−x_{a+1}), acting on1 gives τ_2τ_1τ_2(1)=0 and τ_1τ_2τ_1(1)=1. The difference is−1, exactly [Q(x_1,x_2)−Q(x_3,x_2)]/(x_3−x_1). Its source image has the opposite cubic sign. This finite check confirms both unlike-color crossing signs are required; changing equal-color crossings alone would give the wrong braid normalization.
