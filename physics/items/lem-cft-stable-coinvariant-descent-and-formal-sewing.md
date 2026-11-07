---
id: lem-cft-stable-coinvariant-descent-and-formal-sewing
kind: lemma
title: Stable-curve coinvariant descent, algebraic comparison and formal sewing
status: draft
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: mathematics
proof_strategy: direct
deps:
- lem-cft-rational-top-balance-and-nodal-normalization
- thm-gts-proper-delignemumford-stack-of-stable-pointed-curves
- thm-cohomology-and-base-change
- lem-proper-flat-fp-cohomology-perfect-complex
- thm-qc-sheaf-affine-higher-cohomology-vanishes
- thm-serre-duality-curves-vector-bundles
- thm-qftx-projective-gaga-for-monad-data
- thm-qftx-gaga-analytic-local-ring-flatness
- thm-cft-conformal-block-sheaves-locally-free
- lem-cft-plumbing-positive-pole-base-change-and-logarithmic-lifts
- lem-cft-state-field-and-residue-coordinate-covariance
- lem-cft-aut-o-action-and-coordinate-covariance
- lem-cft-c2-cofinite-modules-finitely-generated
- lem-cft-cyclic-weak-module-difference-one-spanning
- def-cft-coinvariants-and-conformal-blocks
- thm-flatness-of-noetherian-completion
- thm-nakayama-lemma
- thm-proper-quasi-finite-is-finite
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: Damiolini, Gibney and Tarasca, On factorization and vector bundles of conformal
      blocks from vertex algebras
    url: https://arxiv.org/pdf/1909.04683
    locator: Equation30, Theorems7.0.1,8.4.1 and8.5.1; the auxiliary-vacuum extension
      and finite formal argument below preserve the distinction from the naive unmarked
      quotient.
dependency_roles:
  lem-cft-rational-top-balance-and-nodal-normalization: mathematical-premise
  thm-gts-proper-delignemumford-stack-of-stable-pointed-curves: mathematical-premise
  thm-cohomology-and-base-change: mathematical-premise
  lem-proper-flat-fp-cohomology-perfect-complex: mathematical-premise
  thm-qc-sheaf-affine-higher-cohomology-vanishes: mathematical-premise
  thm-serre-duality-curves-vector-bundles: mathematical-premise
  thm-qftx-projective-gaga-for-monad-data: mathematical-premise
  thm-qftx-gaga-analytic-local-ring-flatness: mathematical-premise
  thm-cft-conformal-block-sheaves-locally-free: mathematical-premise
  lem-cft-plumbing-positive-pole-base-change-and-logarithmic-lifts: mathematical-premise
  lem-cft-state-field-and-residue-coordinate-covariance: mathematical-premise
  lem-cft-aut-o-action-and-coordinate-covariance: mathematical-premise
  lem-cft-c2-cofinite-modules-finitely-generated: mathematical-premise
  lem-cft-cyclic-weak-module-difference-one-spanning: mathematical-premise
  def-cft-coinvariants-and-conformal-blocks: mathematical-premise
  thm-flatness-of-noetherian-completion: mathematical-premise
  thm-nakayama-lemma: mathematical-premise
  thm-proper-quasi-finite-is-finite: mathematical-premise
dependency_level: 10
---

## Statement

Assume full AC. Let V be rational, C2-cofinite and of CFT type. On the stack of stable complex pointed nodal curves with nonzero marked tangent vectors there is a canonical algebraic finite locally free coinvariant sheaf, natural and right exact in its grading-restricted generalized module labels. It commutes with base change. On a curve for which the complement of its marks is affine it is the residue quotient of the supplied coinvariant definition. On other curves it is the auxiliary-vacuum extension: choose additional disjoint smooth marks so that their union meets every normalization component, put V at the additional marks, form the affine-complement quotient, and identify the results by the compatible vacuum insertions. This extension includes n=0; it does not identify the naive empty tensor quotient with the stable-curve value.

On a boundary chart with parameters $q_e$ and constant normalizing family, insertion at each node of
$$\sum_i\sum_{d\ge0}q_e^d\operatorname{coev}_{(S_i)_d},\qquad (S_i)_d=(S_i)_{h_i+d},$$
induces the canonical formal sewing isomorphism from the completed nodal-family coinvariants to the direct sum of the normalizing coinvariants with paired labels $(S_i,S_i')$, extended over the power-series ring. Its reduction at all $q_e=0$ is the top-coevaluation normalization map, and it is equivariant under permitted changes of the external coordinates. This statement is about sheaves and normalized formal powers; its compatibility with a logarithmic connection is separate.

## Facts & Assumptions

**Given:** The VOA, stable families, tangent data and source-compatible auxiliary-vacuum convention above.

[F1] [[thm-gts-proper-delignemumford-stack-of-stable-pointed-curves]] supplies the smooth Deligne–Mumford stack, universal curve and normal-crossings boundary. The local node equation is $xy=q$.

[F2] [[lem-proper-flat-fp-cohomology-perfect-complex]] supplies finite complexes computing the cohomology of a proper flat coherent family after every base change. [[thm-cohomology-and-base-change]] supplies its finite-free and base-change consequences. [[thm-qc-sheaf-affine-higher-cohomology-vanishes]] supplies base-affine lifting of extensions. [[thm-flatness-of-noetherian-completion]] supplies faithful flatness for local completion, and [[thm-nakayama-lemma]] supplies the finite-module criterion used below. [[thm-serre-duality-curves-vector-bundles]] supplies the normalization-fiber vanishing.

[F3] [[thm-qftx-projective-gaga-for-monad-data]] supplies full coherent algebraic/analytic comparison on projective spaces of dimensions two and three and the relative comparison when both finite direct images have base change. [[thm-qftx-gaga-analytic-local-ring-flatness]] supplies faithful flatness at finite-type complex local rings. These are used with their exact stated scopes.

[F4] [[lem-cft-aut-o-action-and-coordinate-covariance]] and [[lem-cft-state-field-and-residue-coordinate-covariance]] supply actual finite-jet state transitions and full residue covariance. [[lem-cft-plumbing-positive-pole-base-change-and-logarithmic-lifts]] supplies the explicit node frames and the proved analytic positive-pole comparison. [[thm-cft-conformal-block-sheaves-locally-free]] supplies smooth-family analytic local freeness.

[F5] [[lem-cft-c2-cofinite-modules-finitely-generated]] and [[lem-cft-cyclic-weak-module-difference-one-spanning]] supply finite-piece strict-mode reduction. [[lem-cft-rational-top-balance-and-nodal-normalization]] supplies rational finite semisimplicity, the actual nodal-fiber top-coevaluation isomorphism and compatible fixed-fiber vacuum propagation.

[F6] [[def-cft-coinvariants-and-conformal-blocks]] defines the residue quotient. Its integral-module and smooth-curve carrier is extended below by the tangent-rigidified, nodal and auxiliary-vacuum constructions; those extensions are proved rather than read into that definition.

## Proof

1.1 On a chart with specified vertical formal coordinates, form finite state bundles as in F4. At a node use $x^{L(0)}v$, $y^{L(0)}Jv$ and $dx/x=-dy/y$. These frames glue algebraically, not just analytically. For a change of node coordinates $x'=xu(x,y)$, $y'=yv(x,y)$, with uv a base unit, the centered coordinate change in scaled frames is $$s\longmapsto(1+s)\frac{u(x(1+s),y/(1+s))}{u(x,y)}-1.$$ Its coefficients are regular in the node ring, its linear coefficient is a unit after restricting the chart, and every finite-state operator uses only finitely many of these coefficients. This proves regularity across $x=y=0$ of the frame transition. F4's composition identity proves its cocycle condition. Away from the nodes use its usual centered coordinate transitions. Étale coordinates give the same construction after étale pullback; the cocycle therefore descends the finite bundles. The weight filtration has line quotients $\omega^{1-r}$ for current bundles. [F1, F4, construct]

1.2 For an ordinary label with lowest weight h, positive $L(m)$ lower its integer degree by m and are locally nilpotent. Hence $\exp(\sum_{m>0}a_mL(m))$ is finite on every vector and polynomial in finitely many coefficients. It defines the actual algebraic action of $\operatorname{Aut}_+\mathcal O$, the formal coordinate changes with first derivative one. A nonzero tangent vector fixes that derivative and makes the remaining coordinate choices precisely this torsor. The associated label sheaf and residue action consequently descend to tangent data for every ordinary label, including fractional h. Finite sums give all labels by F5. There is no exponentiation of fractional $L(0)$ and no substitution of an auxiliary grading for the conformal dilation. Any finite set of vectors uses one finite jet quotient; thus the construction is algebraic on each finite presentation used below. [F4, F5, algebra]

1.3 We specify the absolute comparison needed for finite current bundles. Every projective complex nodal curve embeds in $\mathbb P^3$. Start with any projective embedding. The union of its secant lines and limits of tangent lines has dimension at most three, including the two tangent branches at nodes. A generic linear center of codimension four misses it, by the incidence dimension count; projection to $\mathbb P^3$ separates points and tangent directions. It is proper with finite fibers, hence finite by [[thm-proper-quasi-finite-is-finite]], and is a closed immersion: on local finite rings the residue fields agree and the cotangent map is surjective; Nakayama first gives $\mathfrak m_B=\mathfrak m_AB$ and then $B/A=\mathfrak m_A(B/A)=0$. Push a finite coherent curve bundle forward along this closed immersion. F3's projective-space cohomology comparison then gives the curve comparison in every degree; closed-immersion pushforward is exact and preserves sections, both algebraically and analytically, as follows in local quotient rings. This uses no unprovided general GAGA theorem. [F3, algebra]

2.1 Let D be a divisor of auxiliary and original marks meeting every normalization component of a central fiber. For a finite current bundle E its normalization filtration and line duality make both $H^1(\nu^*E(kD))$ and $H^1(\nu^*E(kD)(-Z))$ vanish for large k, where Z consists of node branches. Evaluation at Z is then surjective. The exact sequence $0\to E\to\nu_*\nu^*E\to\bigoplus E_{\rm node}\to0$ gives $H^1(E(kD))=0$. F2 represents this family by a finite free cohomology complex; elementary cancellation of the differential at the central fiber, followed by inversion of its nonzero minors, makes degree-one cohomology zero on a neighborhood and gives a finite locally free degree-zero kernel commuting with every base change. This is also F2's base-change criterion with the vanishing obstruction. The exact principal-part sequence shows that the same neighborhood works for every larger pole order: the degree-one obstruction can only be a quotient of the one already zero. Thus $\pi_*E(\ell D)$ is a finite bundle for every $\ell\ge k$, with exact principal-part maps having the fixed kernel $\pi_*E(kD)$. On an affine base those maps are surjective on global sections by F2. [F1, F2, step 1.1, algebra]

2.2 We describe the formal boundary chart needed for sewing. For a nodal curve, the first-order deformation calculation is the Čech gluing calculation for its normalization with the branch pairs. On a smooth chart deformations are locally trivial; on $xy=0$ the only extra local deformation is $xy=q$. On overlaps, discrepancies are derivations; their obstruction is in degree two of the curve's Čech complex, or degree one of the skyscraper spaces at nodes, both zero. Consequently the deformation parameters consist of normalization deformations with its branch marks and one q per node; there are no higher obstructions. This gives the familiar completed ring $R_0\llbracket q_e\rrbracket$ on an étale stable-curve atlas of F1. To see existence without an algebraization assertion, glue over each quotient by $(q_e)^N$: the node rings are $R[x,y]/(xy-q_e)$, and on x or y invertible they are the corresponding Laurent chart. Étale neighborhood identifications lift uniquely over nilpotent ideals: for an étale finite presentation the inverse Jacobian solves the lift successively by the linear Taylor equation, with uniqueness at each square-zero step. Attach the constant normalization complement through these Laurent charts. The resulting finite gluing is flat, has the specified nodal charts, and is proper because its reduction is proper and nilpotent thickenings preserve the valuative criterion. The constructions are compatible in N. The tangent calculation makes its map to the completed atlas an isomorphism: its inverse is obtained degree by degree from its invertible linear coefficient matrix. Thus calculations on this constant-normalization formal plumbing suffice at every boundary point. No arbitrary formal family is assumed algebraizable. [F1, step 1.1, construct]

3.1 Apply step 2.1 to the single finite state cutoff containing F5's finite C2 representative set. Its common-kernel principal-part lifting gives, for every arbitrarily large l, a global current with prescribed leading term $a t_i^{-l}dt_i$ at one incoming point and bounded error poles at the others. The strict-index reduction in F5 then lowers every sufficiently high module degree to a fixed finite window G. Thus the residue quotient over the affine base is generated by $G\otimes R$. It is a finite R-module, and hence finitely presented because the base is Noetherian. Its formation commutes with every base change: present its Ward image by the direct sum, over all finite state cutoffs and sufficiently positive twists, of the actual finite direct-image bundles tensored with the label tensor space. Each direct image has the canonical base change of step 2.1, and direct sums, tensor products and cokernels commute with pullback. This proves the actual specialization quotient, not merely agreement of dimensions. [F2, F4, F5, step 2.1, algebra]

4.1 On the smooth locus this algebraic quotient analytifies to the already proved analytic quotient. Indeed step 1.3 compares every finite current bundle on every fiber; step 2.1 and F4 give the corresponding algebraic and analytic finite direct-image bundles and their fiber identifications. Their canonical comparison is therefore an isomorphism, using a nonzero matrix minor in analytic frames. Apply exact analytification from F3 to the presentation in step 3.1. Its cokernel is the analytic coinvariant sheaf, which is finite locally free by F4. Faithful flatness in F3 now makes the algebraic quotient locally free: choose a minimal local generating set, tensor its surjection with the faithfully flat analytic local ring, and use the equality of its residue dimension and its analytic rank to make the tensored matrix an isomorphism; the kernel is then zero by faithful flatness. The same argument also identifies the algebraic dual block sheaf with the analytic block sheaf. [F3, F4, step 1.3, step 3.1, algebra]

5.1 Fix one node first, writing R for $R_0\llbracket q\rrbracket$. The normalizing coinvariant sheaves with paired simple labels are finite locally free over $R_0$ by step 4.1; the normalization is a smooth proper family. Put $H_i=L(0)-h_i$ on the simple S_i, so its nonnegative integer degree spaces are $(S_i)_d$. Form the normalized tensor $\sum_{d\ge0}q^d\operatorname{coev}_{(S_i)_d}$. Every coefficient is finite. Its node Ward identity follows directly from the opposite-field formula: conjugation by $q^{H_i}$ has the same effect on every mode as conjugation by $q^{L(0)}$, since the scalar $q^{-h_i}$ cancels. Thus the two node-frame fields have equal tensors after $y=q/x$; their dualizing signs cancel. Expanding a total node current, each q coefficient has finite Laurent pole order. Hence finite coefficient contraction proves that insertion of this tensor gives a well-defined R-linear map $$\Psi:C_{C/R}(W)\longrightarrow\bigoplus_i C_{\widehat C/R_0}(W\otimes S_i\otimes S_i')\otimes_{R_0}R.$$ This is the precise normalized formal map; no convergence or fractional power is used. [F4, F5, step 3.1, step 2.2, construct]

6.1 Its reduction modulo q is the top-coevaluation map, which is an isomorphism by F5 on each fiber of $R_0$. Both reduction modules are finite, and the normalizing side is locally free. Over the reduced smooth base $R_0$, a finite presentation and the constant fiber rank argument make the reduced nodal module locally free and the reduction map invertible. Explicitly choose generators lifting a basis at one point; their images under the displayed map have a nonzero maximal minor, so they give a split surjection to a free module nearby. A remaining kernel has zero fiber at every closed point; as a coherent submodule of that finite module its support is closed, and Nakayama at any point of its support contradicts zero fibers. Thus the kernel is zero. For the complete R-module map itself, Nakayama gives surjectivity because its cokernel is finite and zero modulo q. The free target splits that surjection. Its kernel K is finite; tensoring the split sequence with R/q gives $K/qK=0$ since the reduction map is invertible. The Jacobson-ideal version of Nakayama gives K=0. Hence Psi is an isomorphism and the completed nodal module is free. This argument does not infer injectivity from surjectivity alone. [F2, F5, step 3.1, step 5.1, algebra]

7.1 For multiple nodes repeat with their distinct coordinate parameters and independent finite identity tensors. The top maps and all reductions commute because their factors occupy different marked slots. Finite sums over simple labels and finite coefficient contractions therefore give the same isomorphism in every order; iterate step 6.1, or apply it with the ideal generated by all q's. The source's completed module is the completion of the finite algebraic module of step 3.1: its finite current presentation is compatible with the finite-order base changes already proved there. Faithful flatness of Noetherian local completion, proved by the same finite-free base-change suppliers used in F2 and the local completion comparison in F3, descends the resulting free basis to the algebraic local ring. For the needed finite-module faithfulness, a finite module killed by completion has zero residue quotient, since both local rings have the same residue field; Nakayama then makes it zero. Applying this to the kernel and cokernel of a lifted basis proves the assertion directly. Thus the algebraic sheaf is finite locally free across the boundary. Its base-change assertion is still the actual cokernel comparison from step 3.1. [F2, F3, step 6.1, algebra]

8.1 Vacuum insertion is an isomorphism of these family sheaves. On smooth fibers this is F4's propagation, and on nodal fibers it is F5's compatible normalization calculation. The insertion map is algebraic because its vector is the fixed vacuum and its residues obey the creation and Jacobi identities. Both sheaves are finite locally free by the preceding steps, with their actual fibers by step 3.1. Its fiberwise isomorphism therefore gives an algebraic local inverse by a nonzero determinant. For several auxiliary marks the maps commute on tensor representatives; their inverses then commute as well. Two disjoint admissible auxiliary configurations are compared by their union. If two configurations meet, choose a third one disjoint from both and meeting every normalization component; compare each to it through their disjoint unions. A fourth common configuration and commuting insertions show independence of this comparison. Auxiliary coordinate changes fix the vacuum. Thus the resulting quotient and all restriction maps are independent up to their unique compatible isomorphism. This proves the auxiliary-vacuum extension, including unmarked smooth curves and nodal components lacking original marks. It makes no assertion that their naive unmarked tensor quotient is equal to that extension. [F4, F5, step 3.1, step 7.1, algebra]

9.1 All constructions are functorial under étale changes of curve charts and base changes. The finite-state transitions satisfy the actual cocycle in step 1.1. A finite generating window and its finite relation matrix involve only finitely many coordinate jets, so the algebraic coordinate-torsor descent is effective: on a trivializing cover glue the finite presentations by those invertible transition matrices; the cocycle glues their kernels and quotients, and the resulting module restricts to the original quotient. The same procedure on an étale atlas of the stable-curve stack and its double and triple overlaps gives the claimed stack sheaf. The formal sewing map is equivariant under external coordinate changes because those operators act only in the external slots and commute with the internal finite coevaluations. Rational finite semisimplicity makes every label exact sequence split, so these additive finite functors are right exact in their labels. This proves the full Statement. [F1, F4, F5, step 1.2, step 3.1, step 8.1, algebra] ∎
