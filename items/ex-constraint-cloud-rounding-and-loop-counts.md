---
id: ex-constraint-cloud-rounding-and-loop-counts
kind: example
title: "Constraint cloud rounding and loop counts"
status: published
origin: pipeline
deps: [lem-regularization-preserves-value-quantitatively, lem-constraint-expander-overlay]
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
    - title: "Irit Dinur, The PCP theorem by gap amplification; §4 Lemmas4.1–4.2, pp12–15; smallest nonempty instance."
      url: "https://www.wisdom.weizmann.ac.il/~dinuri/mypapers/combpcp.pdf"
---

## Example

Take two vertices joined by one edge carrying the empty relation over a nonempty alphabet. The cloud graph has two ports and $129$ ordinary edges; the full preprocessing graph has $387$ ordinary edges. Their optimal UNSAT values are respectively $1/129$ and $1/387$, whereas the original UNSAT is one.

## Facts & Assumptions

**Given:** the objects and hypotheses in the statement above.

[F1] Let $G$ have $m=|E|>0$ ordinary edges, with the fixed nonempty alphabet and paired-loop convention. Its cloud graph $G_1$ is degree $129$, has $2m$ vertices and $129m$ ordinary edges, and is constructible in polynomial time without changing the alphabet. Put $K=\max(1,2/h_0)=20/7$ and $c=1/(129K)$. Then $$c\operatorname{UNSAT}(G)\le\operatorname{UNSAT}(G_1)\le\operatorname{UNSAT}(G)/129.$$ For every labeling $\tau$ of $G_1$, plurality decoding $D\tau$ satisfies $\operatorname{UNSAT}_{D\tau}(G)\le129K\operatorname{UNSAT}_\tau(G_1)$. For an edgeless input use the empty output convention and UNSAT zero. ([[lem-regularization-preserves-value-quantitatively]]).

[F2] For $G$ with $m>0$ edges, the full preprocessing graph $G_2$ has $2m$ vertices, degree $387$, and $387m$ ordinary edges over the same alphabet. It has loops at every vertex and $$\alpha(G_2)\le\rho_2:=\frac{259+128\rho_0}{387}<1.$$ With $K=20/7$ and $c=1/(129K)$, $$\frac{129c}{387}\operatorname{UNSAT}(G)\le\operatorname{UNSAT}(G_2)\le\frac{\operatorname{UNSAT}(G)}{387}.$$ For every port labeling $\tau$, $\operatorname{UNSAT}_\tau(G_2)=(129/387)\operatorname{UNSAT}_\tau(G_1)$ and $\operatorname{UNSAT}_{D\tau}(G)\le387K\operatorname{UNSAT}_\tau(G_2)$. Construction and plurality decoding take polynomial time. The edgeless convention has UNSAT zero. ([[lem-constraint-expander-overlay]]).


## Verification

1.1 Each original vertex has a singleton cloud. Its degree-$128$ internal graph consists of $64$ ordinary equality loops. There are therefore $128$ internal loops and one external empty-relation edge, totaling $129$. Every loop is satisfied and the external edge always fails, so every labeling has violation fraction $1/129$. This matches the cloud construction's two-port count. [F1]

2.1 The degree-$128$ overlay on two vertices adds $128$ ordinary tautological edges, and the $65$ additional loops per port add $130$ more. Thus the total is $129+128+130=387$. Only the empty-relation edge fails for every labeling, yielding $1/387$, exactly the overlay factor. This shows the quantitative UNSAT statement does not mean exact preservation of value. A one-symbol alphabet suffices for the example. [F2, step 1.1] ∎
