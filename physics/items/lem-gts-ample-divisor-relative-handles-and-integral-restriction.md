---
id: lem-gts-ample-divisor-relative-handles-and-integral-restriction
kind: lemma
title: Ample divisor relative handles and primitive integral restriction
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
proof_strategy: direct
deps:
- def-axiom-of-choice
- thm-morse-sard-for-maps-from-manifolds-with-boundary
- thm-morse-lemma
- lem-local-morse-sublevel-pair-is-a-handle-pair
provenance:
  statement: literature-derived
  proof: ai-altered
dependency_level: 0
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  thm-morse-sard-for-maps-from-manifolds-with-boundary: mathematical-premise
  thm-morse-lemma: mathematical-premise
  lem-local-morse-sublevel-pair-is-a-handle-pair: mathematical-premise
verification:
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
sources:
  references:
  - title: Claire Voisin, Hodge Structures and the Topology of Algebraic Varieties (Harvard revision, 2021)
    url: https://cmsa.fas.harvard.edu/media/Voisin_HSTAVharvardrevision.pdf
    locator: Theorem 2.14 and Andreotti–Frankel discussion, printed pp. 20–21 (web fulltext lines 1401–1431); Theorem
      2.19 and exponential-sequence proof, printed p. 23 (lines 1515–1534); §3.2, printed pp. 38–41 (lines 2355–2583),
      Theorem 3.3, Corollaries 3.4–3.7, Theorem 3.8 and Proposition 3.9. These exact ranges were read through the
      web PDF fulltext; direct download returned HTTP 403. Weighted monodromy is constructed locally.
---

## Statement

Assume AC. Let Y be a smooth connected complex projective variety of complex dimension $n≥1$, and let S⊂Y be a nonempty smooth effective divisor with $O_Y(S)$ ample. Up to homotopy, the pair (Y,S) has a finite relative cell presentation with cells only in dimensions at least n. Consequently $H_j(Y,S;Z)=0$ for $j<n$; integral restriction $H^j(Y;Z)→H^j(S;Z)$ is an isomorphism for $j<n-1$ and injective with torsion-free cokernel for $j=n-1$. If $n≥3$ then π1(S)→π1(Y) is an isomorphism. For $n≥2$ the divisor S is connected. In particular for $n=3$ the map H²(Y;Z)→H²(S;Z) is primitive, while for $n≥4$ it is an isomorphism. No very-ampleness of $O_Y(S)$, Noether–Lefschetz theorem, sheaf restriction theorem, or Bogomolov inequality is assumed.

## Facts & Assumptions

**Given:** Exactly the smooth projective variety and ample smooth divisor in the Statement.

[F1] [[thm-morse-sard-for-maps-from-manifolds-with-boundary]] gives dense regular values for smooth finite-dimensional maps, with the countable-choice hypothesis implied by AC.

[F2] [[thm-morse-lemma]] gives the explicit smooth quadratic chart at a nondegenerate real critical point. [[lem-local-morse-sublevel-pair-is-a-handle-pair]] gives the corresponding rounded handle and regular collar inside a compact critical band.

[F3] A sufficiently high power of an ample line bundle embeds the projective variety. Pull back the Fubini–Study metric to that power and take its positive kth root. This gives a Hermitian metric on the original line bundle with positive curvature. The logarithmic exhaustion and finite perturbation below are constructed directly from it.

[F4] [[def-axiom-of-choice]] is the ambient choice convention. Cellular chains, compact gradient flows and the elementary fact that attaching cells of dimension at least three leaves π1 unchanged are used in their explicit forms below.

## Proof

1.1 Put $L=O_Y(S)$, let s be its defining section, and choose the positive-curvature metric of F3. On $U=Y$ minus S define $φ=-log||s||²$. In a local holomorphic frame with metric exp(−ψ), this is ψ−log|f|², so $dd^cφ=dd^cψ$ is strictly positive on U. It is a proper exhaustion, bounded below, because Y is compact and ||s|| vanishes exactly on S. This works for the ample L itself, without replacing S by a smooth member of a higher power. [given, F3, algebra]

2.1 Near S choose a holomorphic normal coordinate t. The function is −log|t|² plus a smooth function. Its derivative in the radial normal direction is −2/r+O(1), uniformly along the compact S, so it has no critical point in a sufficiently small punctured tube. Its sufficiently large levels are smooth normal circle bundles, by the implicit-function theorem on each normal ray; their compact complements are Y minus an open tubular neighbourhood of S. All possible critical points lie in one compact interior region. [given, F3, step 1.1, algebra]

3.1 Choose finitely many smooth bump-coordinate functions $b_j$ on that compact region so that their differentials span every cotangent space on a neighbourhood of the possible critical set. For $φ_a=φ+Σa_j$ $b_j$, the map $(x,a)→dφ_a(x)$ is transverse to the zero section, because its parameter derivative spans that cotangent fibre. Apply Sard to the projection of its zero locus to a. A generic sufficiently small a makes $dφ_a$ transverse to zero, hence every critical point nondegenerate. Outside that region the original gradient is bounded away from zero on the compact transition collar and is unchanged nearer S, so a small perturbation introduces no other critical points. Its C² norm can also be made small enough to preserve the positive Levi form. The critical set is now discrete and compact, hence finite. [given, F1, F2, F3, step 2.1, construct]

4.1 The real Morse index at each critical point is at most n. If its negative Hessian subspace had dimension greater than n in the real 2n-dimensional tangent space, it would meet its J-translate. For a nonzero v in that intersection both v and Jv would be negative, whereas Hess(v,v)+Hess(Jv,Jv) is the strictly positive Levi trace. This is impossible. No numerical inequality for sheaves is involved. [given, F2, F3, step 3.1, algebra]

5.1 Choose a large regular value c above all critical values and put M={φ_a≤c}. It is compact with boundary and is the complement of the tubular neighbourhood from step2.1. Between consecutive critical values the vector field grad φ_a divided by ||grad φ_a||² has derivative one on φ_a. Its flow exists uniformly on each compact regular band and identifies it with a collar. At a critical point F2 identifies the band change with a rounded handle of its Morse index. Small disjoint critical bands also handle coincident critical values. Starting below the minimum, this gives a finite handle presentation of M with all indices at most n. [given, F2, step 2.1, step 3.1, step 4.1, construct]

6.1 Turn that handle presentation upside down, relative to its top boundary ∂M. In a quadratic chart c−|u|²+|v|² the reverse function has negative coordinates v, so the complementary index is 2n−dim(u)≥n. The same regular-band flows give the reverse collars. Thus M, relative to ∂M, is obtained by handles of indices at least n. Glue back its tubular complement N(S); the latter retracts onto S. Collapsing each handle to its core, in the relative handle order, gives a relative cell presentation of (Y,S) with precisely those dimensions. This is the asserted finite relative presentation. [given, F2, step 5.1, construct]

7.1 Its relative cellular chain groups vanish in degrees less than n, so $H_j(Y,S;Z)=0$ there. Its relative cochain groups also vanish in those degrees. Moreover $H^n(Y,S;Z)$ is the kernel of the cellular differential out of $C^n$, since $C^{n-1}=0$; it is therefore a subgroup of a finite-rank free abelian group, hence torsion-free. The cohomology long exact sequence now gives isomorphism of restriction below n−1 and injectivity with torsion-free cokernel in degree n−1. This proves primitivity over Z, not just over Q. [given, F4, step 6.1, algebra]

8.1 If $n≥2$ no relative zero- or one-cells occur, so the number of connected components of S equals that of Y, which is one. If $n≥3$ no relative two-cells occur either. Attaching a cell of dimension at least three leaves the fundamental group unchanged: its attaching sphere has dimension at least two, and van Kampen on a collar of that sphere and the simply connected cell gives the same π1. Iteration over the relative cells proves π1(S)≅π1(Y). Finally step7.1 with $j=2$ gives the claimed primitive restriction for $n=3$ and isomorphism for $n≥4$. [given, F4, step 6.1, step 7.1, algebra] ∎
