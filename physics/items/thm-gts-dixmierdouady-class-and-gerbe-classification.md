---
id: thm-gts-dixmierdouady-class-and-gerbe-classification
kind: theorem
title: Dixmier–Douady class and gerbe classification
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
category: string-theory
dependency_level: 5
proof_strategy: direct
axiom_strength: ZF + full AC
deps:
  - lem-gts-good-cover-integral-cech-singular-comparison
  - def-gts-u-1-bundle-gerbe-with-connection-and-curving
  - def-gts-smooth-deligne-cohomology-model
  - def-singular-cohomology-ring
  - def-cech-cohomology-open-cover
  - thm-cech-to-sheaf-cohomology-comparison
  - def-gts-good-cover-singular-cech-comparison-input
  - def-axiom-of-choice
  - thm-existence-of-geodesically-convex-neighborhoods
  - thm-smooth-partitions-of-unity-exist-on-manifolds
dependency_roles:
  lem-gts-good-cover-integral-cech-singular-comparison: mathematical-premise
  def-gts-u-1-bundle-gerbe-with-connection-and-curving: mathematical-premise
  def-gts-smooth-deligne-cohomology-model: mathematical-premise
  def-singular-cohomology-ring: mathematical-premise
  def-cech-cohomology-open-cover: mathematical-premise
  thm-cech-to-sheaf-cohomology-comparison: mathematical-premise
  def-gts-good-cover-singular-cech-comparison-input: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  thm-existence-of-geodesically-convex-neighborhoods: mathematical-premise
  thm-smooth-partitions-of-unity-exist-on-manifolds: mathematical-premise
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: M. K. Murray, Bundle Gerbes, arXiv:dg-ga/9407015v1
      url: https://arxiv.org/pdf/dg-ga/9407015v1
      locator: Section 5, construction and triviality criterion, PDF pp. 9–10; Section 9, equivalence classes, PDF pp. 14–15.
    - title: Ulrich Bunke, Differential Cohomology, arXiv:1208.3961v6
      url: https://arxiv.org/pdf/1208.3961v6
      locator: Sections 3.1–3.2, exponential sequence and Deligne complex, PDF pp. 32–39.
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

Let $M$ be a finite-dimensional Hausdorff second-countable smooth manifold with a good cover satisfying [[def-gts-good-cover-singular-cech-comparison-input]], and let $(P,Y,M)$ be a $U(1)$-bundle gerbe whose submersion has local sections. Local sections of $Y\to M$ and local trivializations of the pulled-back line bundles define a natural Dixmier–Douady class $\mathrm{DD}(P)\in H^3(M;\mathbb Z)$. Its vanishing is equivalent to triviality of the underlying gerbe under the stable equivalence of [[def-gts-u-1-bundle-gerbe-with-connection-and-curving]]. Stable-equivalence classes of underlying topological gerbes are in natural bijection with $H^3(M;\mathbb Z)$; connection and curving data are forgotten in this classification. Bundle-gerbe presentations themselves are not classified by this group.

## Statement references

[[def-gts-u-1-bundle-gerbe-with-connection-and-curving]]

[[def-gts-smooth-deligne-cohomology-model]]

## Facts & Assumptions

**Given:** Full AC, a good cover of $M$, local sections of the gerbe submersion, and the associative product of [[def-gts-u-1-bundle-gerbe-with-connection-and-curving]].

[F1] [[def-gts-u-1-bundle-gerbe-with-connection-and-curving]] defines $P_{ij}$ as a smooth Hermitian line bundle with its pulled-back unitary connection, and the gerbe product as a smooth unitary line-bundle isomorphism $P_{ij}\otimes P_{jk}\to P_{ik}$ preserving that connection.

[F2] [[def-gts-smooth-deligne-cohomology-model]] specifies the smooth real and circle-valued sheaves, the exponential normalization, and the good-cover smooth contractions and subordinate locally finite smooth partition of unity. The integral connecting-map identification is proved explicitly below.

[F3] [[thm-cech-to-sheaf-cohomology-comparison]]: on an acyclic good cover, fixed-cover Cech cohomology maps naturally to sheaf cohomology; the comparison is compatible with refinement.

[F4] [[lem-gts-good-cover-integral-cech-singular-comparison]] gives the integral good-cover comparison and its coefficient, refinement and smooth-pullback naturality. Applied to the one-member cover, it also proves integral singular acyclicity of a nonempty contractible space. The Cech differential is alternating deletion and the singular coboundary is positive precomposition.

[F5] The integral Cech-to-singular isomorphisms forming part of [[def-gts-good-cover-singular-cech-comparison-input]] are supplied canonically by [F4]. They retain torsion and identify the integral Cech cocycle produced by the exponential connecting map with its singular integral cohomology class. The additional integer-sheaf and form-sheaf acyclicity conditions in that definition remain separate supplied hypotheses; [F4] does not establish them. The argument below uses the integral comparison and proves the required exponential connecting-map isomorphism directly by a partition-of-unity contraction, including on its adapted cover.

[F6] On a smooth contractible open set with a specified smooth contraction, a smooth Hermitian line bundle with unitary connection has a smooth unit section: choose a unit vector over the contraction point and parallel-transport it along the contraction paths. Smooth dependence of parallel transport on the path endpoint follows from the local linear connection ODE. If a line bundle is supplied without connection, choose local unitary frames and a locally finite smooth partition of unity; the weighted sum of their flat unitary connections is a unitary connection, after which the same transport applies.

[F7] [[thm-existence-of-geodesically-convex-neighborhoods]] gives strongly geodesically convex neighborhoods inside any prescribed open neighborhood of a boundaryless Riemannian manifold, smooth dependence of their unique minimizing connectors, and stability of nonempty finite intersections, under countable choice.

[F8] [[thm-smooth-partitions-of-unity-exist-on-manifolds]] gives a smooth subordinate partition of unity for every open cover under countable choice. Full AC in the Given supplies both countable-choice hypotheses.

## Proof

1.1 First choose a good cover subordinate to the domains of local sections, rather than assuming the originally supplied cover already has such sections. Here is the required refinement construction. A subordinate partition of unity from [F8] on a coordinate cover glues the Euclidean coordinate metrics to a smooth positive Riemannian metric: each term extends by zero off its supporting chart, the sum is locally finite, and at least one positive weight occurs at every point. Second countability and relatively compact coordinate neighborhoods give a countable precompact coordinate cover. By successively covering the compact closures of its first finitely many members and of the preceding stage by finitely many further precompact neighborhoods, obtain compact sets $K_j$ with $K_j\subset\operatorname{int}K_{j+1}$ and $\bigcup_j\operatorname{int}K_j=M$; put $K_j=\varnothing$ for $j\le0$. For each compact shell $K_j\setminus\operatorname{int}K_{j-1}$, take finitely many of [F7]'s strongly convex neighborhoods covering it, each contained in $\operatorname{int}K_{j+1}\setminus K_{j-2}$, in a member of the supplied cover and in a local-section domain. Such neighborhoods exist pointwise by [F7], and compactness gives the finite selections. Their union over $j$ is countable and locally finite, since a neighborhood inside $\operatorname{int}K_l$ meets no shells' neighborhoods with $j\ge l+2$. Every nonempty finite intersection is strongly convex by [F7] and has a smooth contraction by its connector to any selected point. Full AC selects these contractions; [F8] supplies a subordinate partition of unity. The resulting cover is therefore good and subordinate to local-section domains. All uses below of integral Cech comparison require only these contractible intersections, supplied by [F4], rather than any new sheaf-acyclicity assertion for the refined cover. Comparison with any other such cover is canonical by [F4]'s arbitrary-map good-cover comparison. On this adapted cover choose local smooth sections $s_i:U_i\to Y$. Pull $P$ back along $(s_i,s_j):U_{ij}\to Y^{[2]}$ to obtain Hermitian line bundles with unitary connections $P_{ij}\to U_{ij}$. Each nonempty $U_{ij}$ has a specified smooth contraction by the good-cover convention; [F6] therefore supplies a unit section $\sigma_{ij}$, and set $\sigma_{ji}=\sigma_{ij}^{-1}$. The product defines a smooth function $g_{ijk}:U_{ijk}\to U(1)$ by $m(\sigma_{ij}\otimes\sigma_{jk})=\sigma_{ik}g_{ijk}$. Associativity on $U_{ijkl}$ gives $g_{ijk}g_{ikl}=g_{jkl}g_{ijl}$, which is exactly the Cech cocycle equation $\delta g=1$. [F1, F4, F6, F7, F8, given, choose]

2.1 Replacing $\sigma_{ij}$ by $\sigma'_{ij}=\sigma_{ij}q_{ij}$ for a smooth $U(1)$-valued one-cochain changes $g$ by the Cech coboundary $\delta q$. If the local sections change to $s_i'$, then over each contractible $U_i$ choose a unit section $\tau_i$ of the line $P_{s_i,s_i'}$. The gerbe product compares $\tau_i\sigma'_{ij}$ with $\sigma_{ij}\tau_j$ by a smooth function $q_{ij}$; associativity on quadruple overlaps gives $g'/g=\delta q$. Thus the class is independent of sections, and common-cover refinement gives independence of the cover; these constructions commute with pullback. The exponential map here is $e(r)=\exp(2\pi i r)$, with kernel the locally constant integer functions. On each nonempty good-cover intersection $U_J$, it is surjective on smooth functions. Indeed choose a smooth contraction $H:U_J\times[0,1]\to U_J$ from a point $x_0$ to the identity and choose $r_0\in\mathbb R$ with $e(r_0)=g(x_0)$. For $g\in C^\infty(U_J,U(1))$, put $g_t(x)=g(H(x,t))$ and $$r(x)=r_0+\frac1{2\pi i}\int_0^1g_t(x)^{-1}\partial_tg_t(x)\,dt.$$ The integrand divided by $i$ is real because $|g_t|=1$, and integration over the compact parameter interval gives a smooth real function. Defining $r_t$ by the same integral up to time $t$, differentiation gives $\partial_t(e(-r_t)g_t)=0$, with initial value one. Hence $e(r)=g$. Full AC permits these choices simultaneously over all cover intersections. Thus the ordered Cech cochain complexes form a degreewise short exact sequence $$0\longrightarrow C^*(\mathcal U;\underline{\mathbb Z})\longrightarrow C^*(\mathcal U;C^\infty(-,\mathbb R))\xrightarrow{e}C^*(\mathcal U;C^\infty(-,U(1)))\longrightarrow0.$$ The real-function middle complex has zero positive cohomology: if $(\rho_i)$ is the subordinate locally finite smooth partition of unity, the alternating homotopy $(hc)_{i_0\ldots i_{p-1}}=\sum_i\rho_i c_{i,i_0,\ldots,i_{p-1}}$ is smooth after extension by zero, and alternating deletion gives $\delta h+h\delta=1$ in positive degrees. For a circle-valued Cech two-cocycle $g$, choose a real Cech two-cochain $r$ lifting it. Then $\delta r$ is an integer Cech three-cocycle. Another lift changes it by an integer coboundary. If $g$ changes by a circle-valued coboundary, lift the latter's one-cochain by the same surjectivity; this again changes $\delta r$ by an integer coboundary. The map $[g]\mapsto[\delta r]$ is an isomorphism: if its image vanishes, alter $r$ by an integer cochain to make it a real two-cocycle, then use the middle-complex acyclicity to write it as a real coboundary; conversely an integer three-cocycle is a real coboundary by that same acyclicity, and exponentiating a chosen real two-cochain gives a circle-valued two-cocycle mapping to it. Restriction and pullback commute with the exponential, integer inclusion and Cech differential, so the connecting map is natural and independent of all choices. Composing this isomorphism $\check H^2(\mathcal U;C^\infty(-,U(1)))\cong\check H^3(\mathcal U;\underline{\mathbb Z})$ with the integral comparison in F4 gives the singular integral class. Define $\mathrm{DD}(P)$ as the resulting image of $[g]$. [F1, F2, F4, F5, step 1.1]

2.2 If the gerbe is trivial, $P\cong\operatorname{pr}_1^*Q^*\otimes\operatorname{pr}_2^*Q$ for a smooth Hermitian line bundle $Q\to Y$. Since each $U_i$ is smoothly contractible, give $Q$ any unitary connection as in [F6] and parallel-transport a unit vector to obtain a unit section of $s_i^*Q$. These sections induce product-compatible unit sections of every $P_{ij}$, so the product cocycle is identically $1$ and $\mathrm{DD}(P)=0$. [F1, F4, F6, step 1.1]

3.1 Conversely, if $\mathrm{DD}(P)=0$, then $[g]=0$ under the Cech-to-integral isomorphism of step 2.1. Choose a one-cochain $q_{ij}$ with $g=\delta q$ and replace $\sigma_{ij}$ by $\sigma_{ij}q_{ij}^{-1}$; the new transition cocycle is $1$. Over $Y_i=\pi^{-1}(U_i)$ define a line $Q_i$ at $y$ by $(Q_i)_y=P_{s_i(\pi(y)),y}$. The adjusted $\sigma_{ij}$ and the gerbe product give an isomorphism $Q_i|_{Y_i\cap Y_j}\to Q_j|_{Y_i\cap Y_j}$; the identity cocycle makes the triple-overlap composites agree, so these lines glue to $Q\to Y$. For $y_1,y_2$ over the same point $x$, the product $P_{y_1,s_i(x)}\otimes P_{s_i(x),y_2}\to P_{y_1,y_2}$ identifies $Q_{y_1}^*\otimes Q_{y_2}$ with $P_{y_1,y_2}$. Associativity makes this identification independent of $i$. Hence $P\cong\operatorname{pr}_1^*Q^*\otimes\operatorname{pr}_2^*Q$, so the gerbe is trivial. [F1, step 1.1, step 2.1]

4.1 For any Cech two-cocycle $g$ with values in $\mathcal U(1)$, take $Y=\coprod_i U_i\to M$, put a trivial line over each $U_{ij}$, and define the product on triple overlaps by multiplication by $g_{ijk}$. The cocycle equation is exactly associativity; the unit and inverse are the canonical diagonal and dual identifications. Thus every class in $\check H^2(\mathcal U,\mathcal U(1))$ is realized by a gerbe, and every gerbe gives such a class by step 1.1. Coboundary changes correspond to tensoring with trivial line-gerbe data, hence to stable equivalence. If two gerbes have the same class, their quotient cocycle is a coboundary, so the quotient gerbe has zero DD class and is trivial by step 3.1; this is exactly stable equivalence. Conversely a stable equivalence changes the cocycle by a coboundary and leaves the class fixed. Therefore stable-equivalence classes of underlying gerbes are precisely $\check H^2(\mathcal U,\mathcal U(1))\cong H^3(M;\mathbb Z)$. [F1, F2, F3, step 1.1, step 2.1, step 3.1, algebra] ∎

## Remarks

Connection and curving data refine the Cech cocycle to a Deligne class with curvature and surface holonomy. The integral Dixmier–Douady class forgets those differential data; no equality of curvature or holonomy follows from equality of $\mathrm{DD}$ alone.
