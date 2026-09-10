---
id: lem-sequence-spaces-continuously-inject-into-the-real-line
kind: lemma
title: "Continuous injections of sequence spaces into the real line"
status: published
verification:
  audited: 2026-09-10
origin: pipeline
deps: ["lem-cantor-and-baire-sequence-coding", "thm-cantor-set-ternary-description", "def-continuous-map-top"]
justified_by: []
forward_refs: []
landmark: false
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: "direct"
sources:
  scraped: []
  references:
    - title: "Definition 1.7 and Exercise 1.11, pp4–5, sequence-space coding context; ternary-series calculation is the explicit local argument from thm-cantor-set-ternary-description, not a claimed Marker theorem"
      url: "https://homepages.math.uic.edu/~marker/math512/dst.pdf"
---
## Statement

In ZF the map

$$j:2^{\mathbb N}\to\mathbb R,\qquad j(b)=\sum_{k=0}^\infty2b(k)3^{-k-1}$$

is a continuous injection. If $h:\mathbb N^{\mathbb N}\to2^{\mathbb N}$ is the block-coding map, then $e=j\circ h$ is a continuous injection of Baire space into $\mathbb R$.

## Facts & Assumptions

[F1] [[thm-cantor-set-ternary-description]] supplies convergence and injectivity for these zero-based ternary series.

[F2] [[lem-cantor-and-baire-sequence-coding]] supplies the continuous injective block coding and the cylinder topologies.

[F3] [[def-continuous-map-top]] gives the open-neighbourhood criterion for continuity.

## Proof

**Given:** The two explicit series and block maps, with no choice assumption.

1.1 Each digit $2b(k)$ is zero or two, so F1 applies to give a convergent series and injectivity of j. If b,c agree in their first n coordinates, subtraction of their convergent series and the geometric tail bound give [F1, F2]

$$|j(b)-j(c)|\leq\sum_{k=n}^\infty2\,3^{-k-1}=3^{-n}.$$

The equality follows from the finite geometric sum and its limit. Since $3^n\geq n+1$, these tails tend to zero. Given an open neighbourhood O of j(b), take a radius $\epsilon>0$ ball contained in it and n with $3^{-n}<\epsilon$. The cylinder $N_{b\upharpoonright n}$ then maps into O by the inequality. Thus j is continuous by F3 and F2. [F1, F2, F3]

2.1 By F2 h is injective and continuous. If $e(x)=e(y)$, injectivity of j gives $h(x)=h(y)$ and injectivity of h gives x=y. For a real open O, $e^{-1}[O]=h^{-1}[j^{-1}[O]]$ is open by continuity of both maps, proving continuity of e. In particular j sends the zero sequence to zero and the all-one sequence to one, as the same geometric sum shows. QED. [F2, F3, step 1.1]
