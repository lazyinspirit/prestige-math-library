---
id: thm-gts-a-named-virtual-cycle-construction-and-invariance
kind: theorem
title: Pardon implicit atlas on stable pseudoholomorphic maps
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 12
domain: mathematics
library: physics
proof_strategy: direct
deps:
- def-axiom-of-choice
- lem-gts-compact-analytic-stable-domain-orbifold-and-universal-plumbing
- thm-gts-pardon-stable-map-moduli-compactness
- lem-gts-stable-map-stabilizing-slices-and-nodal-obstruction-thickenings
- lem-gts-weighted-nodal-cauchy-riemann-gluing-and-linear-kernel-continuity
- thm-gts-oriented-implicit-atlas-virtual-cochains-and-bordism
- def-gts-pardon-implicit-atlas-and-vfc-package
- def-gts-pardon-gromov-topology-on-stable-map-moduli
- def-gts-symplectic-and-almost-complex-curve-data
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  lem-gts-compact-analytic-stable-domain-orbifold-and-universal-plumbing: mathematical-premise
  thm-gts-pardon-stable-map-moduli-compactness: mathematical-premise
  lem-gts-stable-map-stabilizing-slices-and-nodal-obstruction-thickenings: mathematical-premise
  lem-gts-weighted-nodal-cauchy-riemann-gluing-and-linear-kernel-continuity: mathematical-premise
  thm-gts-oriented-implicit-atlas-virtual-cochains-and-bordism: mathematical-premise
  def-gts-pardon-implicit-atlas-and-vfc-package: mathematical-premise
  def-gts-pardon-gromov-topology-on-stable-map-moduli: mathematical-premise
  def-gts-symplectic-and-almost-complex-curve-data: mathematical-premise
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: John Pardon, An Algebraic Approach to Virtual Fundamental Cycles on Moduli Spaces of Pseudo-Holomorphic Curves, arXiv:1309.2370v6
    url: https://arxiv.org/pdf/1309.2370v6
    locator: §9.2 Theorem 9.2.10; full setup in §9.1; Appendix B, Theorem B.1.1 and proof.
verification:
  precheck: pending
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
axiom_use: Full AC is inherited from the actual local analytic, domain and virtual-cochain suppliers; no weaker choice assertion is made.
---

## Statement

For a smooth closed symplectic manifold $(X,\omega)$, a smooth $\omega$-tame almost-complex structure $J$, a class $\beta\in H_2(X;\mathbb Z)$, and stable $g,n$ data, the construction $A_{\mathrm{GW}}$ of Pardon's implicit atlas is an implicit atlas on the moduli $\overline{\mathcal M}^{\beta}_{g,n}(X,J)$ of stable $J$-holomorphic maps. Its virtual fundamental class belongs to Pardon's Čech-cohomology-dual package; this is not a Behrend–Fantechi Chow class or a generic Floer/boundary theory.

## Facts & Assumptions

**Given:** Full AC and exactly the data and hypotheses of the Statement.

[F1] D denotes [[lem-gts-compact-analytic-stable-domain-orbifold-and-universal-plumbing]]: compact analytic stable-domain orbifold, actual universal plumbing and finite-group charts, including all analytic domains.

[F2] C denotes [[thm-gts-pardon-stable-map-moduli-compactness]]: full varying-domain compact Hausdorff map moduli, exact integral class and energy accounting, and compact-parameter version.

[F3] S denotes [[lem-gts-stable-map-stabilizing-slices-and-nodal-obstruction-thickenings]]: actual stabilizing transverse slices, matched-node Fredholm cokernel span and smooth equivariant extensions.

[F4] G denotes [[lem-gts-weighted-nodal-cauchy-riemann-gluing-and-linear-kernel-continuity]]: actual weighted residual/right inverse/quadratic/Newton/inverse-gluing constructions over the specified local family. Formal surjectivity is the defined regular-locus condition. All source curves in this GW construction are closed. This use is the unchanged closed graph-topology branch, with the same residual, inverse, kernel and determinant assertions; no weighted label-changing moduli problem is substituted.

[F5] V denotes [[thm-gts-oriented-implicit-atlas-virtual-cochains-and-bordism]]: actual rational virtual cochains, compact Čech comparison, normalized Thom augmentation, restrictions and boundary connector, GIVEN the atlas.

[F6] [[def-gts-pardon-implicit-atlas-and-vfc-package]] fixes the corrected relative atlas axioms and cohomology-dual VFC type; [[def-gts-pardon-gromov-topology-on-stable-map-moduli]] fixes the actual graph topology. [[def-gts-symplectic-and-almost-complex-curve-data]] fixes the smooth tame map equation.

## Proof

**Proof technique:** direct, using the explicit local constructions below.

1.1 A datum α consists exactly of a compact target codimension-two transverse slice $D_α$ with boundary; a number $r_α$ of additional intersections; an orbifold chart $M_α/Γ_α⊂Mbar_{(g,n+rα)}/S_{(rα)}$ with actual universal curve $C_α$; a finite real $Γ_α$-module E_α; and a smooth equivariant linear forcing $λ_α$ on $C_α×X$ supported away from all nodes and marked sections. Restrict to a fixed set-theoretic universe of manifolds, functions and rigidifications, so these datums form a set. D supplies the required domain chart, with no demand that $Γ_α$ act effectively on the BASE. [F1, F2, F3, F4, F5, F6, given, construct, algebra]

2.1 For finite $I, X_I$ is the set of isomorphism classes of tuples $(C,u,(φ_α,e_α)_{(α∈I)})$, where u is transverse to $D_α$ at exactly $r_α$ nonspecial preimages, $φ_α$ is an actual domain isomorphism to the corresponding fiber with those preimages as its unordered additional markings, and $\bar\partial _J u+\sum _{\alpha \in I} \lambda _\alpha (e_\alpha )(φ_\alpha ,u)=0,$ $u_*[C]=\beta .$ Take graph topology for the finite tuple of maps $(u,φ_α)$, together with the Euclidean obstruction coordinates. For I empty this is the original stable-map graph topology. The action of $Γ_I=∏Γ_α$ changes $φ_α$ and $e_α$ simultaneously; equivariance of λ makes the equation invariant. Let $s_I$ record the e coordinates. For I⊂J, on $s_{(J\setminus I)}=0$, forget those new φ,e tuples. The target is the open subset $U_{IJ}$ where the new intersection conditions hold and the additional marked domains lie in the designated charts. Every operation is an operation on the actual tuples, so the triple-forgetting and section identities are literal equalities. [F1, F2, F3, F4, F5, F6, given, construct, algebra, step 1.1]

3.1 These subsets really are open. In a fixed thickened chart, C⁰ graph convergence with bounded e gives $C^∞$ convergence on every nonspecial compact core, by the graph-Caccioppoli/epsilon/bootstrap proof in the graph-Caccioppoli argument of [F4]. Transverse intersections persist uniquely there by the ordinary inverse theorem. Outside disjoint small intersection disks the limiting map has positive distance from the compact $D_α$; at nodes, original marks and $∂D_α$ this distance is positive by the transversality convention. Graph closeness therefore prevents ANY additional intersections in those regions or in a new neck. The prescribed chart membership of the finitely recovered marked curve is open by D. Thus exactly $r_α$ intersections and chart membership persist; no unproved C¹-from-arbitrary-C⁰ assertion is used. [F1, F2, F3, F4, F5, F6, given, construct, algebra, step 2.1]

4.1 The zero-set map $s_{J\setminus I}^{-1}(0)/\Gamma _{J\setminus I} \to  U_IJ$ is a homeomorphism. Its inverse selects, for each new α, a lift of the stabilized marked domain into $M_α$; all lifts form precisely its $Γ_α$ orbit as an orbifold chart, including the actual fiber isomorphism $φ_α$. Its e coordinate is zero. This proves bijection even in the presence of finite domain automorphisms, rather than pretending lifts are unique without their group. Local inverse continuity follows by the local étale domain sheets and the continuously recovered intersection points from step 3.1. Taking the finite group quotient makes the choices independent. The forward map is the continuous forgetting map. This proves the exact zero-footprint gluing axiom. [F1, F2, F3, F4, F5, F6, given, construct, algebra, step 3.1]

5.1 Define $X_I^{reg}$ by actual vertical augmented CR surjectivity at the fixed nodal domain and trivial automorphism of the FULL tuple. Use matched $H^k$ sections, k≥6, and the normalized $H^{(k−1)}$ target. The derivative includes the derivative of each recovered auxiliary intersection and its induced domain isomorphism. These are finite-rank core terms, and the operator is real CR plus finite-rank terms. Regularity is independent of the sufficiently high integer realization: the weak regularity and matched node argument in S/G promote every preimage and identify the cokernels. This is geometric thickened-equation regularity. It asserts no transversality of $s_I$ to zero. [F1, F2, F3, F4, F5, F6, given, construct, algebra, step 4.1]

6.1 To apply G, add a MINIMAL ordered set of new stabilizing points, chosen on the unstable underlying domain components at transverse target slice intersections. Such points exist: for I nonempty, any α already makes the domain stable after adding its transverse intersections, so every unstable component has an immersion point. For I empty, nonconstancy and holomorphicity give it as in S. On a rational component with s≤2 old special points take precisely 3−s points, and on an unmarked elliptic component precisely one. Put ℓ equal to their total and choose their local incidence slices. Remaining α-intersections may coincide with one another across different α; they are recovered as separate labeled intersection lists, not incorrectly declared disjoint domain markings. [F1, F2, F3, F4, F5, F6, given, construct, algebra, step 5.1]

7.1 The infinitesimal reparametrization fields preserving the old special points have complex dimension 3−s on those rational components and one on that elliptic component. Evaluation at the chosen minimal points is an isomorphism onto their tangent lines: a rational field with three prescribed zeros is zero, and a nonzero elliptic field has no zero. The actual marked tangent-line index and zero count from the adopted smooth-domain slice proof give exactly these dimensions. At the transverse incidence points, du followed by the normal quotient of the chosen slice is a real isomorphism. Thus these fields correct any prescribed normal incidence values. [F1, F2, F3, F4, F5, F6, given, construct, algebra, step 6.1]

8.1 Their induced variations lie in the kernel of the actual vertical thickened equation. Indeed the whole tuple equation is invariant under a source reparametrization; pulling back u also moves every recovered intersection and composes every $φ_α$. Differentiate this exact identity. It gives zero derivative with e fixed. Consequently, given any preimage for the original unconstrained regular derivative, subtract the unique such infinitesimal reparametrization which corrects its incidence normal values. The derivative remains the same, and the section now satisfies G's fixed-incidence condition. Therefore original vertical surjectivity implies the precise incidence-constrained surjectivity used in G. Without MINIMAL stabilization this conclusion would not follow; this is the necessary gauge correction. [F1, F2, F3, F4, F5, F6, given, construct, algebra, step 7.1]

9.1 In this gauge the domain chart has real dimension 6g−6+2(n+ℓ). G gives a topological regular chart of dimension $6g-6+2(n+\ell )+2m(1-g)+2c_1(\beta )+\operatorname{dim} E_I-2\ell $ $    = d+\operatorname{dim} E_I,$ where $\operatorname{dim}_R X=2m$ and $d=6g−6+2n+2m(1−g)+2c1(β)$. The full-tuple triviality removes the residual finite isotropy in this local model. G's inverse-gluing proof gives precisely its graph topology, not just a formal zero-set model. Its uniform right inverses and local coordinates prove $X_I^{reg}$ open. [F1, F2, F3, F4, F5, F6, given, construct, algebra, step 8.1]

10.1 For I⊂J over a point in $ψ_{IJ}^{−1}(X_I^{reg})$, the new obstruction coordinates are zero. At such a point the derivative of $λ_α(e_α)$ through its recovered intersections is zero for α∈J\I, since $e_α=0$. The derivative restricted to sections plus $E_I$ is therefore exactly the lower regular derivative. The same gauge argument applies. Use G with $E=E_J$ and $E'=E_I$. Its exact coordinate formula makes $s_{(J\setminus I)}$ locally the projection $R^{(d+\operatorname{dim} E_I)}×E_{(J\setminus I)}→E_{(J\setminus I)}$. This proves ONLY the required relative projection model over the lower regular locus; it does not impose globally transverse $s_J$. [F1, F2, F3, F4, F5, F6, given, construct, algebra, step 9.1]

11.1 The $Γ_{(J\setminus I)}$ action over that locus is free. If g fixes the isomorphism class of a J-tuple, there is a tuple isomorphism ι of its domain undoing g. On forgetting the new factors, ι is an automorphism of its I-tuple, so lower regularity gives ι=id. Then $g_α φ_α=φ_α$ for every new α. The isotropy of the faithful orbifold domain chart acts on the actual universal curve by its domain automorphism; equality of these fiber isomorphisms forces $g_α=\operatorname{id}$. This argument allows ineffective BASE actions (for example a hyperelliptic involution acts nontrivially on its curve). No freeness of the entire $Γ_J$ action on all $X_J$ is claimed. [F1, F2, F3, F4, F5, F6, given, construct, algebra, step 10.1]

12.1 For an original stable J-holomorphic map, apply S to obtain one transverse D stabilizing the domain, with r intersections. Select its chart in D. On the matched closed-surface linearization, S explicitly proves that smooth forcings supported away from nodes and markings span its finite cokernel; this is the point-supported $H^{(−2)}$ annihilator proof, not the false assertion of density in H². Choose a finite spanning space $E_0$, extend its forms over the actual local family×X with compact core support, and induce $E=R[Γ]⊗E_0$. The identity summand retains cokernel surjectivity. At $e=0$ the derivative contributions from moving the auxiliary intersections in λ(e) vanish, so the selected obstruction augmentation is exactly the actual thickened derivative. The full φ tuple has trivial automorphism because φ is an isomorphism. This point is regular and maps to the given original map. Thus the regular-zero footprints cover the entire base. Compactness C allows selection of the finite subatlases required by V; existence of a regular lift was proved pointwise first and is not inferred from compactness. [F1, F2, F3, F4, F5, F6, given, construct, algebra, step 11.1]

13.1 On the smooth-domain regular locus the real CR determinant has its canonical complex-symbol orientation: deform its real zeroth-order terms to a complex-linear operator in the affine space of such terms. Adjoining $E_I$ contributes $o_{(E_I)}$. The local gauge incidence normals are canonically identified by du with the complex source tangent lines at those points, so their orientation factors cancel the extra domain-mark parameters. Here du need not be complex linear for a nonzero thickening; its transverse normal map is a real isomorphism and transports the source orientation continuously. The orientation extension through nodes is local here, rather than a conclusion supplied by G: its charts have independent complex smoothing coordinates, so the locus with every node smoothed is the complement of finitely many coordinate real-codimension-two subspaces. In a sufficiently small product chart that complement is connected and dense. The orientation local system of the whole topological manifold chart is constant; the smooth-locus orientation is therefore one constant sign on this connected complement and extends uniquely over the chart. On overlaps the extensions agree on the dense smooth-domain locus, hence everywhere. The same uniqueness makes them equivariant and compatible with forgetting. This proves the extension without assuming a bordered determinant orientation theorem. Hence $o_{(X_I^{reg})}$ is canonically $o_{(E_I)}$, compatibly with group actions and forgetting. This is the required trivial virtual orientation on the base, not an assumed global orientability of every chosen target slice. [F1, F2, F3, F4, F5, F6, given, construct, algebra, step 12.1]

14.1 C supplies the compact Hausdorff base. Sections, group actions, footprint identities, open prescribed regular loci, relative local projections, relative free actions, orientations and coverage have now ALL been proved from the actual constructions. Therefore this is precisely Pardon's $A_{GW}$ implicit atlas, at the full original closed tame target and stable (g,n,β) scope. Apply V to it to get the rational functional $[Mbar^\beta _{g,n}(X,J)]^vir \in  Hom_Q(\check H^d(Mbar^\beta _{g,n}(X,J);Q),Q).$ The normalized DNC faces and augmentation in V retain the correct 1/|isotropy| factors. No ordinary global transverse perturbation is asserted, and no map Q→F₂ is involved. [F1, F2, F3, F4, F5, F6, given, construct, algebra, step 13.1] ∎

## Remarks

The original Statement is retained exactly. The proof supplies the actual A1–A5 construction at its full closed tame target scope. The separately attached parameterized-atlas lemma supplies the bordism used by GW; no boundary/Floer or full Kontsevich–Manin package is asserted.
