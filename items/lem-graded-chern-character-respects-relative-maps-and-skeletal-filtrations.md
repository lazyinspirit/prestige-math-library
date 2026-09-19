---
id: lem-graded-chern-character-respects-relative-maps-and-skeletal-filtrations
kind: lemma
title: The graded Chern character respects relative maps and skeletal filtrations
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-graded-chern-character-by-suspension-and-bott-periodicity, prop-reduced-and-unreduced-generalized-cohomology-theories-correspond, def-skeletal-filtration-for-generalized-cohomology, thm-complex-k-theory-is-a-two-periodic-generalized-cohomology-theory, prop-singular-cohomology-is-contravariantly-functorial, cor-singular-cohomology-is-homotopy-invariant, thm-long-exact-sequence-of-a-pair-in-singular-cohomology, thm-excision-for-singular-cohomology, def-axiom-of-choice]
proof_strategy: direct
axiom_strength: "ZF + AC; inherited from complex K-theory."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Hatcher, Vector Bundles & K-Theory, section 4.1"
      url: https://pi.math.cornell.edu/~hatcher/VBKT/VB.pdf
      locator: "Filtered and relative behaviour of the character, printed pp.109-114"
---

## Statement

Assume AC. Let $(X,A)$ be a finite CW pair and $j\in\mathbb Z$. The graded
Chern character of
[[def-graded-chern-character-by-suspension-and-bott-periodicity]] gives a map
on the relative groups
$K^j(X,A)\to\bigoplus_kH^{j+2k}(X,A;\mathbb Q)$ commuting with the connecting
maps of the pairs $(X,A)$, $(A,\varnothing)$ and $(X,\varnothing)$; and for a
finite CW complex $X$ with the skeletal filtration $F^p$ of
[[def-skeletal-filtration-for-generalized-cohomology]] it sends the K-theory
skeletal filtration into the cohomological one:
$$\operatorname{ch}\bigl(F^pK^j(X)\bigr)\subseteq F^pH^{j}(X;\mathbb Q).$$

## Facts & Assumptions

[A1] The Axiom of Choice is assumed, inherited from complex K-theory ([[def-axiom-of-choice]]).

[F1] On the based theory the character is natural for based maps and compatible with suspensions by construction ([[def-graded-chern-character-by-suspension-and-bott-periodicity]]).

[F2] Reduced and unreduced generalized cohomology theories correspond by $h^n(X,A)=\widetilde h^n(X/A)$ and $h^n(Y)=\widetilde h^n(Y_+)$, compatibly with connecting maps ([[prop-reduced-and-unreduced-generalized-cohomology-theories-correspond]]).

[F3] The K-theory skeletal filtration is $F^pK^j(X)=\ker(K^j(X)\to K^j(X^{p-1}))$, and the cohomological filtration is defined analogously ([[def-skeletal-filtration-for-generalized-cohomology]]).

[F4] Complex K-theory is a two-periodic generalized cohomology theory on finite CW pairs, with natural cofiber sequences and suspension isomorphisms ([[thm-complex-k-theory-is-a-two-periodic-generalized-cohomology-theory]]).

[F5] Singular cohomology is contravariantly functorial and homotopy invariant and has natural pair long exact sequences and excision. Its cochains turn disjoint unions into products, so these properties make $H^*(-;\mathbb Q)$ a CW-pair cohomology theory; finite direct sums of its even shifts therefore give the two-periodic theory $h^j(-)=\bigoplus_kH^{j+2k}(-;\mathbb Q)$ ([[prop-singular-cohomology-is-contravariantly-functorial]], [[cor-singular-cohomology-is-homotopy-invariant]], [[thm-long-exact-sequence-of-a-pair-in-singular-cohomology]], [[thm-excision-for-singular-cohomology]], [[prop-reduced-and-unreduced-generalized-cohomology-theories-correspond]]).

## Proof

**Proof technique:** direct.

**Given:** AC, a finite CW pair $(X,A)$ and integers $j$ and $p$.

1.1 By [F2] the relative groups of both theories are the reduced groups of the quotient: $K^j(X,A)\cong\widetilde K^j(X/A)$ and $H^j(X,A;\mathbb Q)\cong\widetilde H^j(X/A;\mathbb Q)$, compatibly with connecting maps; by [F4] the K-theory connecting maps are the cofiber connecting maps of $A\to X\to X/A$. [F2, F4]

2.1 The character is natural for based maps and compatible with suspension by [F1], so under the identifications of step 1.1 it commutes with the cofiber connecting maps; this gives the relative maps and their compatibility with the connecting maps of the three pairs. [F1, step 1.1]

2.2 Skeletal filtration: if $\alpha\in F^pK^j(X)=\ker(K^j(X)\to K^j(X^{p-1}))$, then naturality of the character [F1] gives $\operatorname{ch}(\alpha)|_{X^{p-1}}=\operatorname{ch}(\alpha|_{X^{p-1}})=\operatorname{ch}(0)=0$, so $\operatorname{ch}(\alpha)\in\ker(H^j(X;\mathbb Q)\to H^j(X^{p-1};\mathbb Q))=F^pH^j(X;\mathbb Q)$ in the sense of [F3]. [F1, F3, step 1.1]

3.1 Boundary cases. For $A=\varnothing$ the relative statement reduces to the absolute one; for $j$ negative the two-periodicity of [F4] and [F5] reduces the statement to degrees $0$ and $1$. The skeletal filtration is bounded for a finite CW complex, so $p>d$ gives both sides zero. The coefficient field $\mathbb Q$ is nonzero and no division occurs. AC enters only through [A1]. [A1, F3, F4, step 2.1, step 2.2] ∎

## Source notes

Hatcher, section 4.1, printed pp. 109-114, uses precisely this filtered and relative compatibility to compare the Chern character with the Atiyah-Hirzebruch spectral sequence: the character is natural on pairs and carries the K-theoretic skeletal filtration into the cohomological one.
