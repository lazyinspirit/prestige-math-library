# Normative corrected formal faithfulness: universal monic framing at fixed physical weight

Same first pass, author `/root/repair_klr_global_basis/cyclotomic_action_construction`, run `frontier-44-special-representation-examples-28`. This is the current binding for prerequisite 2 of the cap-off proof. It **supersedes** the old-root-only independence paragraphs in `minimal-parabolic-transfer-normalform-and-boundary-pass1.md` and `minimal-parabolic-transfer-formal-normalform-pass1.md`; their raw bytes remain historical evidence. Those paragraphs incorrectly claimed coefficient ±1 in old i elementary functions. The normalized bubble series is p^rev/(c_r^rev)^2, and its first coefficient is p_1+2e_1, so the old claim fails in characteristic two. The construction below uses universal framing coefficients with unit leading coefficient, and never divides by 2 or a factorial.

## Formal relations and finite spanning, before any quotient transfer

Use κ=−τ_native for every color pair. Define the proof-tool category P_i with downward G_j for all j, upward H_i only, downward KLR relations, the model's explicitly constructed first/second rank-one adjunction maps, rho and its inverse, cyclic i dots, rank-one cross-and-cap equations and bubble inversion, and the explicit model-verified mixed cap/cup/crossing equations. Include the finite-coefficient bubble-slide equations verified algebraically below as relations of this **formal proof-tool category**. Their model verification is an input, not an assertion about the unknown actual cyclotomic action. This avoids a circular appeal to full generic faithfulness in order to derive the very bubble slides used for spanning. Adding these verified formal equations is harmless here: the faithful model still embeds the downward KLR/bubble subspace, and the cap-off ideal-intersection proof will subsequently identify the quotient with the actual word category. No native Definition is changed.

The slides are exact coefficient identities for the normalized A,H series. Across an i root x, A changes by multiplication/division by (1−xt)^2 and H by the inverse factor. Across a spectator j root y, A changes by multiplication/division by

$$q_{ij}^{\mathrm{rev}}(y,t)=t^{-a_{ij}}Q_{ij}(t^{-1},y)/t_{ij},$$

and H by its inverse. Both factors have constant coefficient1. Each coefficient of an inverse is a finite polynomial determined recursively. These identities hold on the explicit flag bimodules because adding an i root changes c_r to c_r(u−x), while adding a spectator changes p to pQ_ij/t_ij. Thus their verification uses ordinary multiplication and monic series inversion, with every Q term retained.

Here is the finite spanning reduction with these precise formal relations. Move dots to chosen component positions by cyclicity/KLR dot moves; every equal-color correction removes a crossing. Sort each i cup/cap toward a boundary or a far-left closed-component position by the specified cup/cap/cross equations. A main term moves a vertex past one of its finitely many crossing obstacles; a correction term removes an unsorted open-component extremum or an obstacle. The cross-and-cap expansion is finite at any fixed index because open dot counts are nonnegative and negative-degree bubbles vanish. The ordinary triangles remove an adjacent opposed cup/cap pair. Iterate in the lexicographic order (number of unsorted open extrema, number of their remaining crossing obstacles), applying the crossing-length induction to correction terms. The process terminates in fixed matching arcs, plus closed i components and dot polynomials.

For a closed i component, cancel excess adjacent extrema by triangles and apply the stated coefficient bubble slides until it lies at the far left. At every fixed bubble coefficient the expansion is finite, even when a reciprocal series appears. Express the opposite-orientation bubble coefficients by the inverse series. Finally apply Coxeter deletion/PBW straightening to every remaining crossing word: braid defects and dot-move corrections have shorter crossing length, and a repeated reflection is removed by its quadratic relation. This yields a finite span of chosen reduced matching diagrams, dot monomials and polynomials in far-left normalized bubble coefficients.

At all-downward boundaries each open matching connects bottom to top, so the result is exactly the PBW crossing/dot monomials times the polynomial ring in one normalized bubble family b_1,b_2,… . This establishes the surjective tensor-product spanning map; no faithfulness of a quotient has entered. For general boundaries, the specified two adjunction triangles bend every upward i endpoint to the other boundary. The chosen matching basis changes to the all-downward permutation/dot basis by the same finite straightening, with unit leading coefficients. This is a finite triangular change, so independence of the downward family suffices for all matching families.

## Independent universal coefficients, in the correct bubble series

Fix any finite set of diagrams and a **fixed physical source weight** μ; write μ_i=⟨h_i,μ⟩. Choose background spectator counts m_j≥0 and background i count r≥0. Set

$$A_{\mathrm{spect}}=\sum_{j\ne i}(-a_{ij})m_j,\qquad N=\mu_i+2r,\qquad\lambda_i=N-A_{\mathrm{spect}}.$$

Thus p_i has degree N and the physical i weight remains N−2r=μ_i. Equivalently λ_i=μ_i+2r+Σ_{j≠i}a_ij m_j. This is the exact sign with the negative Cartan off-diagonal entries. Choose auxiliary framing λ=μ+rα_i+Σ_{j≠i}m_jα_j. Only its i component must be nonnegative; no spectator H_j exists, so no dominance assumption at spectator vertices is required. One may set all background m_j=0, giving the especially simple λ_i=μ_i+2r. As r grows, both λ_i and N−r=μ_i+r grow, while μ is held fixed.

For this framing degree use the universal polynomial

$$a_i(u)=u^{\lambda_i}+z_1u^{\lambda_i-1}+\cdots+z_{\lambda_i},\qquad\deg z_a=2d_i a.$$

These z_a are independent polynomial variables over the original field k. Keep the admissible Q coefficients unchanged. Let c_r(u)=∏_{a=1}^r(u−x_a), q_spec=∏_{j≠i,y∈Y_j}Q_ij(u,y)/t_ij, and p_i=a_i q_spec. The model's correct normalized series is

$$\mathcal B(t)=\frac{p_i^{\mathrm{rev}}(t)}{(c_r^{\mathrm{rev}}(t))^2}=a_i^{\mathrm{rev}}(t)\frac{q_{\mathrm{spec}}^{\mathrm{rev}}(t)}{(c_r^{\mathrm{rev}}(t))^2}.$$

Write U(t)=q_spec^rev/(c_r^rev)^2, with U_0=1. For a≤λ_i,

$$\mathcal B_a=z_a+\sum_{1\le\ell<a}z_\ell U_{a-\ell}+U_a.$$

This is a unit triangular polynomial change from z_1,…,z_D to mathcal B_1,…,mathcal B_D, over the background root/spectator ring whenever λ_i≥D. Its leading coefficient is **1 in a framing variable**, regardless of characteristic. The reciprocal normalized bubble family has coefficient −z_a plus terms involving lower framing indices, also a unit triangular change. Hence choosing the other positive family when μ_i is negative causes no loss of independence. This repairs both the squared-root normalization and characteristic-two defect.

No old-root coefficient is claimed to be a unit: for example mathcal B_1=z_1+(spectator term)+2e_1. The old-root term may vanish in characteristic two, but z_1 remains independent. Arbitrary finite nonzero polynomials in the formal bubble generators therefore remain nonzero after substitution into these universal framing coefficients, before the high-degree factor-ring relations.

## PBW witness and exact degree bound

Let f be a nonzero finite linear combination in the downward PBW/bubble span. Let D be the largest bubble coefficient index appearing in f. After the above triangular substitution (λ_i≥D), f is a nonzero PBW combination over the polynomial domain in the framing, background and dot variables. In the untruncated polynomial realization, each κ_w has its distinct leading permutation with nonzero polynomial multiplier; equal-color divided differences have the same property in the fraction field. Select a maximal nonzero PBW permutation term and a polynomial test vector witnessing a nonzero output, clearing denominators if necessary. This is possible by the proved generic KLR polynomial/PBW supplier over the polynomial coefficient domain; no geometric theorem is used.

Let B be the maximum actual internal degree of all terms in that polynomial test vector and its nonzero output, after the framing/bubble substitution. It is a finite nonnegative integer. Let L be the number of i flags added by the boundary words used in this test, bounded also by their total length. Background spectator appends can only increase the monic i degree; each i append reduces N−r by1. Therefore every monic flag relation and every factor-ring coefficient relation encountered has degree at least

$$2d_i\bigl(N-r-L+1\bigr)=2d_i\bigl(\mu_i+r-L+1\bigr).$$

Indeed a flag adjoining its next distinguished i root has monic degree N_current−r_current. Before at most L i appends that number is at least N−r−L+1. A vertex factor relation is a coefficient above N_current−r_current and hence has degree at least one index higher. All universal z_a have the specified nonnegative degrees, all elementary root/spectator coefficients have nonnegative degrees, and every dot has positive degree; weighted homogeneity of Q makes its reverse coefficients homogeneous of the corresponding index degree.

Choose r with all of

$$r\ge0,\qquad\lambda_i=\mu_i+2r-A_{\mathrm{spect}}\ge D,\qquad 2d_i(\mu_i+r-L+1)>B.$$

One can also impose r≥D if the polynomial witness uses that many background elementary functions. These inequalities have a solution because μ_i, A_spect, D, L and B are fixed. Thus at the **same physical μ** there is an auxiliary universal framing model with arbitrarily high truncation threshold. Its rings have the explicit presentation as polynomial flag rings modulo the just-bounded homogeneous monic/factor relations, with root-append elementary functions eliminated by their defining finite recursions. An ideal generated in degrees >B in this nonnegatively graded polynomial ring has zero intersection with degrees ≤B. Hence the chosen nonzero output survives in the actual flag model.

This is an exact degree argument. It neither says the family is flat under arbitrary ungraded specialization nor derives quotient faithfulness from unquotiented faithfulness. The universal graded framing parameters are only witness parameters for the formal category. The eventual actual a_i(u)=u^{λ_i}, or inhomogeneous monic field specialization, is handled afterward by the separate explicit kernel calculation.

It follows that the formal downward PBW/bubble spanning map is injective. Its coefficients are a polynomial ring with no hidden ordinary KLR relation. The bending/triangular change already supplied then proves independence for the general matching family too. In particular evaluating the formal boundary bubble variables at the prescribed coefficients affects only that tensor factor in the downward sector; it does not manufacture a relation in the KLR factor.

## Current integration consequence

This corrected prerequisite 2 now supports the cap-off constructor's bubble-slide and corner-intersection argument. The current cap-off proof also retains the explicit negative-weight EF retract (iota=rho^{-1}j_EF, pi=p_EF rho) and the marked-input companion calculation, so object decompositions at negative weight are actual split morphisms. Combining this formal normal form, the trace model's verified maps/series/local equations, the cap-off ideal-intersection proof, and the algebraic P/Q quotient induction gives a complete construction route for actual minimal-parabolic transfer. Parent focused mathematical acceptance remains distinct from that construction claim. None of the older incorrect ±1-in-old-root claims is current evidence.
