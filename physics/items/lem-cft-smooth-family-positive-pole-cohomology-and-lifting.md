---
id: lem-cft-smooth-family-positive-pole-cohomology-and-lifting
kind: lemma
title: Holomorphic sections and principal-part lifting in smooth curve families
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: mathematics
proof_strategy: direct
deps:
- def-cft-pointed-analytic-worldsheet
- thm-hodge-decomposition-for-dolbeault-forms-on-a-compact-riemann-surface
- lem-dolbeault-green-operator-is-compact-on-the-orthogonal-complement-of-the-kernel
- thm-garding-estimate-for-the-dolbeault-laplacian-on-a-compact-riemann-surface
- thm-smooth-partitions-of-unity-exist-on-manifolds
- thm-every-smooth-vector-bundle-admits-a-connection
- thm-picard-lindelof-local-existence-and-uniqueness
- lem-cauchy-transform-with-smooth-parameters
- thm-serre-duality-compact-riemann-surfaces
- thm-long-exact-sequence-sheaf-cohomology
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: Gui and Zhang, Analytic Conformal Blocks II
    url: https://arxiv.org/pdf/2411.07707v4
    locator: The relative vanishing and lifting used in1.14–1.16 and2.19; the smooth-family
      special case is proved here without invoking Grauert or a parametric Newlander–Nirenberg
      theorem.
dependency_roles:
  def-cft-pointed-analytic-worldsheet: mathematical-premise
  thm-hodge-decomposition-for-dolbeault-forms-on-a-compact-riemann-surface: mathematical-premise
  lem-dolbeault-green-operator-is-compact-on-the-orthogonal-complement-of-the-kernel: mathematical-premise
  thm-garding-estimate-for-the-dolbeault-laplacian-on-a-compact-riemann-surface: mathematical-premise
  thm-smooth-partitions-of-unity-exist-on-manifolds: mathematical-premise
  thm-every-smooth-vector-bundle-admits-a-connection: mathematical-premise
  thm-picard-lindelof-local-existence-and-uniqueness: mathematical-premise
  lem-cauchy-transform-with-smooth-parameters: mathematical-premise
  thm-serre-duality-compact-riemann-surfaces: mathematical-premise
  thm-long-exact-sequence-sheaf-cohomology: mathematical-premise
dependency_level: 1
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---


## Statement

Assume full AC. Let $\pi:C\to B$ be a proper holomorphic submersion with compact curve fibers, as in the analytic-family definition. Let $E$ be a finite-rank holomorphic vector bundle on $C$. Suppose $E|_{C_{b_0}}$ has a finite filtration by holomorphic subbundles with divisor-line-bundle quotients and $H^1(C_{b_0},E|_{C_{b_0}})=0$. After restricting to a neighborhood of $b_0$, the sheaf $\pi_*E$ is finite locally free, its fiber is canonically $H^0(C_b,E_b)$, and this identification commutes with every holomorphic base change between complex manifolds.

In particular let $D$ be the sum of disjoint marked sections meeting every fiber component. If $E$ has a holomorphic filtration whose fiber quotients are finite sums of $K_{C_b}^{r}$ tensored with fixed integer combinations of the marked points, then on a fixed neighborhood there is $k_0$ such that $H^1(C_b,E_b(kD_b))=0$ for every $b$ and $k\ge k_0$. For $\ell\ge k\ge k_0$ there is an exact sequence of holomorphic bundles on that neighborhood
$$0\longrightarrow\pi_*E(kD)\longrightarrow\pi_*E(\ell D)\longrightarrow P_{k,\ell}\longrightarrow0,$$
where $P_{k,\ell}$ is the finite bundle of principal parts of orders $k+1,\ldots,\ell$ at the marked sections. Every holomorphic principal-part section lifts locally holomorphically. These bundles, maps and local lifts obey the canonical base-change comparisons. No assertion about nodal fibers or nonreduced bases is included.

## Facts & Assumptions

**Given:** The smooth proper analytic family, finite bundle, filtration and vanishing specified above.

[F1] [[def-cft-pointed-analytic-worldsheet]] supplies a proper holomorphic submersion, complex-manifold total space and base, and disjoint product-coordinate germs at the marked sections.

[F2] [[thm-hodge-decomposition-for-dolbeault-forms-on-a-compact-riemann-surface]] and [[lem-dolbeault-green-operator-is-compact-on-the-orthogonal-complement-of-the-kernel]] give finite harmonic obstruction spaces and the bounded Green operator for a holomorphic line bundle. [[thm-garding-estimate-for-the-dolbeault-laplacian-on-a-compact-riemann-surface]] gives its higher Sobolev estimates.

[F3] [[thm-smooth-partitions-of-unity-exist-on-manifolds]] gives smooth metrics and splittings; [[thm-every-smooth-vector-bundle-admits-a-connection]] supplies a smooth bundle connection. [[thm-picard-lindelof-local-existence-and-uniqueness]] supplies the local ODE flows used below.

[F4] [[lem-cauchy-transform-with-smooth-parameters]] gives the one-variable Cauchy–Green right inverse with smooth parameters, preserving holomorphic dependence on the remaining parameters.

[F5] [[thm-serre-duality-compact-riemann-surfaces]] gives line-bundle $H^1$ vanishing above the canonical degree, and [[thm-long-exact-sequence-sheaf-cohomology]] gives the finite-filtration and principal-part exact sequences.

## Proof

1.1 Shrink the base to a coordinate ball with relatively compact closure. A smooth metric splits the real tangent sequence of the submersion. Lift the straight real segment from $b_0$ to $b$ by this horizontal splitting. Properness makes the inverse image of the closed ball compact; finitely many ODE charts therefore give a uniform existence interval for these lifts when $b$ is sufficiently close to $b_0$. Their time-one maps identify $C_{b_0}$ smoothly with $C_b$, with inverse the lift of the reversed segment. Smooth dependence follows by differentiating the flow integral equation: first derivatives satisfy its linear variational equation, and higher derivatives satisfy the same linear equation with previously determined smooth inhomogeneous terms. Picard iteration and its uniqueness give these derivatives inductively. Parallel transport in the smooth connection on $E$ gives a smooth trivialization of its underlying bundle along these paths. This constructs the required $C^\infty$ family trivializations by finite-dimensional ODEs; no holomorphic or integrable horizontal trivialization is asserted. [F1, F3, algebra]

1.2 On the central fiber, the line Green operator gives a continuous right inverse of $\bar\partial$ on its closed range, bounded $H^s\to H^{s+1}$ for every integer $s\ge0$, and a finite-dimensional obstruction projection. For clarity this extends to a filtered bundle without a vector-bundle Hodge theorem. In a smooth splitting of $0\to E_1\to E\to L\to0$, its operator has matrix $\left(\begin{smallmatrix}D_1&\beta\\0&D_L\end{smallmatrix}\right)$, with $\beta$ smooth of order zero. Given $(a_1,a_L)$, first solve $D_Lu_L=a_L$ modulo the finite harmonic obstruction. The remaining obstruction is the class of $a_1-\beta u_L$ in $H^1(E_1)$, modulo the image of the finite connecting map $H^0(L)\to H^1(E_1)$. A fixed linear inverse on that image chooses a holomorphic correction to $u_L$, after which the subbundle right inverse solves the remaining equation. Induction supplies a continuous solution on the exact range and finitely many continuous obstruction coordinates. Its bounds follow from the line bounds and finitely many fixed smooth coefficients and finite-dimensional maps. The vanishing $H^1(E_{b_0})=0$ makes its range all degree-one forms. Denote the resulting bounded right inverse by $R_0$. [F2, F5, algebra]

2.1 Using step 1.1, identify the fiber operators with $D_b:H^{s+1}(E_0)\to H^s(\Lambda^{0,1}E_0)$ on fixed Sobolev spaces. Smoothness of the family makes $D_b-D_0$ small in this operator norm. Thus, after shrinking, $$R_b=R_0\bigl[I+(D_b-D_0)R_0\bigr]^{-1},\qquad D_bR_b=I.$$ The inverse is its norm-convergent Neumann series and depends smoothly on $b$. Consequently $P_b=I-R_bD_b$ is a smoothly varying bounded projection onto $\ker D_b$. Since $P_b$ is close to $P_0$, the two kernel spaces have the same finite dimension: restriction of one close projection to the other's image is invertible, with inverse obtained from the same Neumann argument. Applying $P_b$ to a basis of $\ker D_0$ gives a smooth frame for the kernel bundle. [F2, step 1.1, step 1.2, algebra]

3.1 These kernel sections are smooth on the total family, not merely Sobolev. In every total holomorphic coordinate and bundle frame the vertical equation is the scalar Cauchy–Riemann equation in each component. The localized first-order estimate of F2 applies componentwise; smooth changes between finitely many frames add bounded lower-order matrix terms. Differentiating the equation in base parameters and then localizing gives the same estimates for mixed derivatives, with the already controlled lower derivatives on the right. Induction and the higher estimates give smoothness in all fiber and base variables. This also proves that a smooth section with $D_bs_b=0$ is the same object as a smooth family of fiber-holomorphic sections. [F2, step 2.1, algebra]

4.1 This finite-dimensional smooth kernel bundle $H$ has a canonical integrable $(0,1)$-connection. For a smooth base $(0,1)$ vector field choose any total $(0,1)$ lift and apply the holomorphic bundle operator $\bar\partial_E$ to a fiber-holomorphic section. The result is again fiber holomorphic: commute with a vertical $(0,1)$ field and use $\bar\partial_E^2=0$; the commutator is vertical of type $(0,1)$ and kills the section. A different lift differs by such a vertical field, so the result is independent of the lift. The same commutator argument for two base fields gives zero $(0,2)$ curvature. In a smooth frame this is $\bar\partial_H=\bar\partial+\sum_j B_jd\bar t_j$, with smooth finite matrices satisfying $\partial_{\bar t_i}B_j-\partial_{\bar t_j}B_i+[B_i,B_j]=0$. [F1, step 3.1, algebra]

5.1 We explicitly construct a holomorphic frame for this nonabelian operator. On a small first-coordinate disk choose its Cauchy–Green operator $T_1$ with cutoff equal to one on a smaller disk. Its supremum norm is at most a constant times the disk radius, by integrating $|z-\zeta|^{-1}$. Shrink until $\|T_1B_1\|<1/3$. The equation $G_1=I-T_1(B_1G_1)$ has a norm-convergent Neumann solution with $\|G_1-I\|<1/2$, hence invertible. It solves $\partial_{\bar t_1}G_1=-B_1G_1$ on the smaller disk. Differentiating the contraction equation proves smooth dependence on the other parameters in the continuous-function norm. In $t_1$, the equation first has a continuous, hence locally L2, solution with an L2 dbar derivative; the localized first-order estimate in F2 gives H1 regularity. Explicitly, multiply each matrix coefficient by a compactly supported cutoff $\eta$ in the smaller disk and mollify to $g_\epsilon=(\eta G_1)*\rho_\epsilon$. Integration by parts for the constant-coefficient Cauchy–Riemann operator gives $\|\nabla g_\epsilon\|_2^2=4\|\partial_{\bar t_1}g_\epsilon\|_2^2$; the right side is uniformly bounded by the L2 norm of $\eta\partial_{\bar t_1}G_1+(\partial_{\bar t_1}\eta)G_1$. Passing to distributional derivatives and their Hilbert-space representatives yields $\eta G_1\in H^1$. Differentiating that equation and repeating the estimate gives all higher Sobolev orders, hence smoothness. Applying the same argument to the parameter derivatives proves joint smoothness of $G_1$. In the new frame $B'_1=0$; integrability gives $\partial_{\bar t_1}B'_j=0$ for $j>1$. [F2, F4, step 4.1, algebra]

6.1 Solve the second-coordinate equation by the same small-disk contraction, treating $t_1$ as a holomorphic parameter. Its Cauchy operator and cutoff act only in $t_2$, so every Neumann term is holomorphic in $t_1$, and its locally uniform limit is too. The second gauge therefore kills $B'_2$ without reviving $B'_1$. Integrability now makes the remaining matrices holomorphic in both earlier coordinates. Repeat through the finitely many base coordinates, shrinking the product polydisc finitely many times. This gives an invertible smooth gauge $G$ satisfying $\bar\partial G=-BG$. Its frame sections have both vertical and horizontal $\bar\partial_E$ equal to zero, so they are actual holomorphic sections of $E$ on the total family. This proves the needed holomorphic frame without an unnamed integrable-gauge theorem. [F4, step 5.1, algebra]

7.1 The sections of step 6.1 form a basis of $H^0(C_b,E_b)$ at every point. Any holomorphic section over the inverse image of an open base set has smooth coefficient functions in that frame, by the finite kernel trivialization. Applying total $\bar\partial_E$ and using the fiberwise linear independence shows that these coefficients are holomorphic. Thus these sections freely generate $\pi_*E$. Their evaluation gives its asserted fiber identification. For a holomorphic map $B'\to B$, their pullbacks remain holomorphic and form a basis on every pulled-back fiber. Apply the same coefficient argument to any section on the pulled-back family; its coefficients are holomorphic on $B'$. Hence the canonical base-change map is an isomorphism. This proves base change on sections and sheaves, rather than only equality of dimensions. [step 6.1, algebra]

8.1 For the pole assertion, the smooth trivialization fixes the genera, marked-point counts on components and degrees of the filtration lines. Since every component meets $D_b$, the degree of each line quotient of $E_b(kD_b)$ eventually exceeds the degree of its canonical bundle, with one $k_0$ on the neighborhood. F5 and the finite filtration give $H^1(E_b(kD_b))=0$ for all $b$ and $k\ge k_0$. Apply steps 1.1–4.1 at every base point and glue their canonical section descriptions. This gives the holomorphic bundles $\pi_*E(kD)$ on the same neighborhood for every such $k$; a single common frame for their infinitely many different ranks is neither needed nor asserted. [F5, step 7.1, algebra]

9.1 The principal-part map from $\pi_*E(\ell D)$ to $P_{k,\ell}$ is holomorphic in the product coordinates at the marked sections. The fiber long exact sequence and $H^1(E_b(kD_b))=0$ make it surjective on every fiber. A nonzero maximal minor gives a local holomorphic right inverse, so it is a sheaf epimorphism. Its kernel consists exactly of sections with the smaller pole bound, namely $\pi_*E(kD)$. This proves the displayed exact sequence and local holomorphic lifting. All maps are restriction or principal-part maps in the original family, so the section-level base-change identification of step 7.1 carries them to those in every pulled-back family. [F1, F5, step 7.1, step 8.1, algebra] ∎
