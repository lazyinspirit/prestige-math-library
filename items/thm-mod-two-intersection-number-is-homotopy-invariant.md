---
id: thm-mod-two-intersection-number-is-homotopy-invariant
kind: theorem
title: "The mod 2 intersection number is homotopy invariant"
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [def-transverse-complementary-dimensional-intersection-set, lem-compact-transverse-complementary-intersections-are-finite, def-mod-two-intersection-number, lem-boundary-of-a-compact-one-manifold-has-even-cardinality, thm-transverse-preimage-for-manifolds-with-boundary, def-smooth-family-of-maps-and-evaluation-map, prop-products-of-smooth-manifolds-have-a-canonical-product-smooth-structure, thm-transversality-homotopy-theorem, thm-relative-whitney-approximation-for-manifold-valued-maps, def-countable-choice, def-integers-modulo-n, lem-a-tubular-target-produces-a-submersive-finite-dimensional-perturbation-family, thm-parametric-transversality]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "Victor Guillemin and Alan Pollack, Differential Topology (Prentice-Hall, 1974; complete 236-page PDF)"
      url: https://www.math.auckland.ac.nz/~hekmati/Books/GP.pdf
      locator: "Ch. 2 §4, printed pp. 78–79 (Theorem: homotopic maps have equal $I_2$, proved by counting the boundary of a compact 1-manifold; Corollary: well-definedness for arbitrary maps)"
    - title: "John Milnor, Topology from the Differentiable Viewpoint (Princeton University Press; complete 76-page PDF, including the appendix Classifying 1-manifolds)"
      url: https://people.math.osu.edu/davis.12/courses/7851/milnortop.pdf
      locator: "§4, printed pp. 20–25 (Homotopy Lemma: $\\#f^{-1}(y)+\\#g^{-1}(y)$ is even, and the extension of $\\deg_2$)"
---

## Statement

Assume $\mathrm{AC}_\omega$. Let $X$ be a compact smooth manifold without boundary, $M$ a smooth $n$-manifold, $Z\subseteq M$ a closed embedded submanifold, and $F:[0,1]\times X\to M$ a smooth family with $\dim X+\dim Z=n$. Assume $F$ is transverse to $Z$, including on the boundary faces $\{0\}\times X$ and $\{1\}\times X$ in the sense of [[thm-transverse-preimage-for-manifolds-with-boundary]]. Then the slice maps $F_0=F(0,\cdot)$ and $F_1=F(1,\cdot)$ are transverse to $Z$, $F^{-1}(Z)$ is a compact $1$-manifold with boundary $$\partial F^{-1}(Z)=F_0^{-1}(Z)\sqcup F_1^{-1}(Z),$$ and $$\#F_0^{-1}(Z)\equiv\#F_1^{-1}(Z)\pmod 2,\qquad\text{that is, } I_2(F_0,Z)=I_2(F_1,Z).$$ Consequently $I_2$ of arbitrary smooth maps is well defined and homotopy invariant, and for transverse representatives the geometric parity of the intersection is the invariant.

## Facts & Assumptions

**Given:** A compact boundaryless $X$, a closed embedded $Z\subseteq M$ with $\dim X+\dim Z=\dim M$, and a smooth family $F:[0,1]\times X\to M$ transverse to $Z$ including on the faces.

[F1] $[0,1]\times X$ is a smooth manifold with boundary $\{0\}\times X\sqcup\{1\}\times X$, and $F$ is a smooth family in the sense of the evaluation map ([[prop-products-of-smooth-manifolds-have-a-canonical-product-smooth-structure]], [[def-smooth-family-of-maps-and-evaluation-map]]).

[F2] Under these hypotheses $F^{-1}(Z)$ is an embedded submanifold with boundary of $[0,1]\times X$, neat, of dimension $\dim X+1+\dim Z-\dim M=1$, with boundary $F_0^{-1}(Z)\sqcup F_1^{-1}(Z)$ and $T_pF^{-1}(Z)=\{v:dF_p(v)\in T_{F(p)}Z\}$ ([[thm-transverse-preimage-for-manifolds-with-boundary]]).

[F3] The slice preimages $F_0^{-1}(Z)$ and $F_1^{-1}(Z)$ are finite, and $I_2(f,Z)=\#f^{-1}(Z)\bmod 2$ for a transverse $f$ ([[lem-compact-transverse-complementary-intersections-are-finite]], [[def-mod-two-intersection-number]]).

[F4] The boundary of a compact $1$-manifold has even cardinality ([[lem-boundary-of-a-compact-one-manifold-has-even-cardinality]]).

[F5] Congruence modulo $2$ is additive: equalities of integers may be reduced termwise ([[def-integers-modulo-n]]).

[F6] Under $\mathrm{AC}_\omega$, [[thm-transversality-homotopy-theorem]] supplies transverse representatives and [[thm-relative-whitney-approximation-for-manifold-valued-maps]] smooths a continuous homotopy fixed near its ends. For a smooth map on the boundaryless extension $\mathbb R\times X$, [[lem-a-tubular-target-produces-a-submersive-finite-dimensional-perturbation-family]] supplies a parameter ball centred at $0$ whose parameter maps are submersions; [[thm-parametric-transversality]] makes the bad-slice parameters a null set. A positive-dimensional ball is not null; in dimension zero a null subset is empty. These suppliers and the classification in [F4] assume [[def-countable-choice]].

## Proof

**Proof technique:** direct, by counting the boundary of the compact trace.

1.1 By [F1] and [F2] the trace $W:=F^{-1}(Z)$ is a compact embedded submanifold with boundary of $[0,1]\times X$ of dimension $1$, with $\partial W=F_0^{-1}(Z)\sqcup F_1^{-1}(Z)$; compactness follows because $W$ is closed in the compact product $[0,1]\times X$. In particular the two slice preimages are finite by [F3]. [F1, F2, F3, given]

2.1 By [F4] the boundary of the compact $1$-manifold $W$ has even cardinality, so $\#\partial W=\#F_0^{-1}(Z)+\#F_1^{-1}(Z)$ is even. Reducing modulo two and using [F5] gives $\#F_0^{-1}(Z)\equiv\#F_1^{-1}(Z)\pmod 2$, that is, $I_2(F_0,Z)=I_2(F_1,Z)$ by [F3]. [F3, F4, F5, step 1.1, algebra]

3.1 Given a continuous homotopy between transverse endpoints, reparametrize by a smooth function constant in end collars, extend constantly to $\mathbb R\times X$, and smooth it fixed on smaller closed end regions by [F6]. Call the smooth result $H$; it is constant at its transverse endpoints for $t\le\delta$ and $t\ge1-\delta$, for some $0<\delta<1/2$. Take the submersive parameter family $\mathcal H$ for $H$ from [F6], with centred ball $B$. Choose a smooth $\lambda:\mathbb R\to[0,1]$ equal to $0$ outside $(\delta/2,1-\delta/2)$ and positive inside, and set $G((t,x),a)=\mathcal H((t,x),\lambda(t)^2a)$. Where $\lambda>0$ the parameter derivative is surjective; where $\lambda=0$, $d(\lambda^2)=0$ and the source derivative is that of the already transverse endpoint map. Thus $G$ is transverse to $Z$. By parametric transversality choose a good $a\in B$ (also when $B$ is zero-dimensional); its slice, restricted to $[0,1]\times X$, is transverse and has the original endpoints. Applying 2.1 to this fixed-endpoint transverse homotopy proves equality of the parities of any homotopic transverse representatives. Representatives exist by [F6], so $I_2$ is well defined and homotopy invariant. For two compact-source maps, product homotopies and the diagonal definition give invariance under deformation of either or both factors. Countable Choice is inherited from the classification and approximation suppliers; the finite parity computation adds no choice. [F3, F4, F6, step 2.1, construct, choose, algebra] ∎
