---
id: "thm-the-canonical-pair-is-a-t-structure"
kind: "theorem"
title: "The canonical pair is a t structure"
deps: ["def-canonical-t-structure-on-a-derived-category", "lem-canonical-truncation-is-a-complex-and-has-the-claimed-cohomology", "thm-canonical-truncations-fit-a-distinguished-triangle", "prop-bounded-derived-localizations-embed-fully-faithfully"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - url: "https://www.math.fsu.edu/~aluffi/archive/paper306.pdf"
      title: "Lecture 3, section 3, definition and Main example, pp. 28–29"
provenance:
  statement: ai-altered
  proof: ai-altered
status: "draft"
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

The canonical pair is a t-structure on $D(\mathcal A)$ and on each of $D^-,D^+,D^b$ by intersection. More generally if $H^i(X)=0$ for $i>a$ and $H^j(Y)=0$ for $j<b$, then $\operatorname{Hom}_D(X,Y[n])=0$ for $n<b-a$, and naturally $\operatorname{Hom}_D(X,Y[b-a])\cong\operatorname{Hom}_{\mathcal A}(H^aX,H^bY)$.

## Facts & Assumptions

**Given:** The canonical pair is a t-structure on $D(\mathcal A)$ and on each of $D^-,D^+,D^b$ by intersection. More generally if $H^i(X)=0$ for $i>a$ and $H^j(Y)=0$ for $j<b$, then $\operatorname{Hom}_D(X,Y[n])=0$ for $n<b-a$, and naturally $\operatorname{Hom}_D(X,Y[b-a])\cong\operatorname{Hom}_{\mathcal A}(H^aX,H^bY)$.

[F1] The t-structure axioms consist of shift inclusions, orthogonality, and a decomposition triangle ([[def-canonical-t-structure-on-a-derived-category]]).

[F2] Canonical truncations preserve exactly the cohomology degrees on their retained sides ([[lem-canonical-truncation-is-a-complex-and-has-the-claimed-cohomology]]).

[F3] Canonical truncations fit distinguished triangles ([[thm-canonical-truncations-fit-a-distinguished-triangle]]).

[F4] The bounded derived localizations are fully faithful exact subcategories with the specified cohomological supports ([[prop-bounded-derived-localizations-embed-fully-faithfully]]).

## Proof

1.1 Replace $Y$ by $\tau^{\geq b}Y$ and in any left roof out of $X$ replace its vertex $L$ by $\tau^{\leq a}L$. These replacements are quasi-isomorphisms, including when all cohomology vanishes. A map $L\to Y[n]$ is zero if $n<b-a$, since every degree has either zero source or zero target. [F2, algebra]

2.1 At $n=b-a$ only degree $a$ can be nonzero. The chain-map equations say exactly that this component kills $\operatorname{im}d_L^{a-1}$ and lands in $\ker d_{Y[n]}^a$, so it is a map $H^aL\to H^bY$. Homotopies cannot alter this component: their possibly contributing terms have source above $a$ or target below $a$. A denominator induces an isomorphism on $H^a$, so roof refinements give the same map $H^aX\to H^bY$. Conversely such a map defines a chain map from $\tau^{\leq a}X$ into $(\tau^{\geq b}Y)[b-a]$ by quotient then inclusion. The two constructions are inverse, by replacing a roof vertex as in step 1.1; all maps are the specified cohomology maps, hence natural. [F2, step 1.1, algebra]

2.2 The identity $H^i(X[1])=H^{i+1}(X)$ gives the two shift inclusions. Step 1.1 with $a=0,b=1,n=0$ gives orthogonality. The triangle $\tau^{\leq0}X\to X\to\tau^{\geq1}X\to$ gives the required decomposition with the prescribed cohomology supports. These verify all axioms. [F1, F2, F3, step 1.1]

3.1 Canonical truncations preserve every one-sided or two-sided cohomological boundedness condition. The bounded embeddings are full and exact, so the same Hom vanishing and the same decomposition triangles lie in each bounded category. This proves the restricted t-structures. [F4, step 2.2] ∎
