---
id: lem-constraint-expander-overlay
kind: lemma
title: "Constraint expander overlay"
status: published
origin: pipeline
deps: [lem-regularization-preserves-value-quantitatively]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Irit Dinur, The PCP theorem by gap amplification; §4 Lemma4.2 and Corollary4.3, pp14–15."
      url: "https://www.wisdom.weizmann.ac.il/~dinuri/mypapers/combpcp.pdf"
---

## Statement

For $G$ with $m>0$ edges, the full preprocessing graph $G_2$ has $2m$ vertices, degree $387$, and $387m$ ordinary edges over the same alphabet. It has loops at every vertex and
$$\alpha(G_2)\le\rho_2:=\frac{259+128\rho_0}{387}<1.$$
With $K=20/7$ and $c=1/(129K)$,
$$\frac{129c}{387}\operatorname{UNSAT}(G)\le\operatorname{UNSAT}(G_2)\le\frac{\operatorname{UNSAT}(G)}{387}.$$
For every port labeling $\tau$, $\operatorname{UNSAT}_\tau(G_2)=(129/387)\operatorname{UNSAT}_\tau(G_1)$ and $\operatorname{UNSAT}_{D\tau}(G)\le387K\operatorname{UNSAT}_\tau(G_2)$. Construction and plurality decoding take polynomial time. The edgeless convention has UNSAT zero.

## Facts & Assumptions

**Given:** the objects and hypotheses in the statement above.

[F1] Let $G$ have $m=|E|>0$ ordinary edges, with the fixed nonempty alphabet and paired-loop convention. Its cloud graph $G_1$ is degree $129$, has $2m$ vertices and $129m$ ordinary edges, and is constructible in polynomial time without changing the alphabet. Put $K=\max(1,2/h_0)=20/7$ and $c=1/(129K)$. Then $$c\operatorname{UNSAT}(G)\le\operatorname{UNSAT}(G_1)\le\operatorname{UNSAT}(G)/129.$$ For every labeling $\tau$ of $G_1$, plurality decoding $D\tau$ satisfies $\operatorname{UNSAT}_{D\tau}(G)\le129K\operatorname{UNSAT}_\tau(G_1)$. For an edgeless input use the empty output convention and UNSAT zero. ([[lem-regularization-preserves-value-quantitatively]]).


## Proof

1.1 The prescribed overlay adds $128$ slots and $130$ loop slots per vertex to the $129$-regular cloud graph. Thus its normalized matrix is $(129M_1+128M_H+130I)/387$, and ordinary edge count is $387m$. For unit mean-zero $f$, its Rayleigh quotient is at most $(129+128\rho_0+130)/387$ and at least $(-129-128\rho_0+130)/387$. The absolute value of the lower endpoint is no larger than the positive upper endpoint. The finite-dimensional symmetric spectral decomposition therefore gives $\alpha\le\rho_2<1$. [F1, algebra]

2.1 All added relations are tautological, so for the same labeling the number of bad edges is unchanged while the denominator changes from $129m$ to $387m$. This proves the exact assignment-level factor, hence also its equality after minimizing over the unchanged set of labelings. Combine with the cloud bounds to obtain the displayed two inequalities. [F1, step 1.1]

3.1 Substitute the exact factor into the cloud decoder inequality to get $\operatorname{UNSAT}_{D\tau}(G)\le387K\operatorname{UNSAT}_\tau(G_2)$. Counting label frequencies in each finite cloud implements fixed plurality tie breaking in polynomial time; isolated original vertices get the first alphabet symbol. The overlay generator and relation copying are polynomial. For no original edges use the stipulated empty graph instead of a positive-degree assertion. [F1, step 2.1] ∎
