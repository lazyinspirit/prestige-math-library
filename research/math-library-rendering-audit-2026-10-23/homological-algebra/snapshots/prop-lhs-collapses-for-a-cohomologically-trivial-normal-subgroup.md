---
id: "prop-lhs-collapses-for-a-cohomologically-trivial-normal-subgroup"
kind: "proposition"
title: "LHS collapse for a cohomologically trivial normal subgroup"
deps: ["thm-lyndon-hochschild-serre-spectral-sequence", "cor-derived-composition-isomorphism-under-total-acyclicity", "def-dependent-choice"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: "Weibel, 6.8.2"
      url: "https://math.mit.edu/~hrm/palestine/weibel/06-group_homology_and_cohomology.pdf"
status: published
origin: "pipeline"
pipeline_run: "phase-2-next-17"
proof_strategy: "direct"
---

## Statement

In the LHS setup with its DC or fully supplied-comparison convention, if $H^q(N,M)=0$ for every $q>0$, then inflation gives natural isomorphisms $H^n(Q,M^N)\cong H^n(G,M)$ for every $n\ge0$.

## Facts & Assumptions

**Given:** The LHS hypotheses and the stated positive-degree vanishing for this coefficient module.

[F1] LHS has page $H^p(Q,H^q(N,M))$ with finite normalized filtration ([[thm-lyndon-hochschild-serre-spectral-sequence]]).

[F2] Vanishing of the positive inner derived functors makes the lower composite edge an isomorphism ([[cor-derived-composition-isomorphism-under-total-acyclicity]]).

## Proof

1.1 All $E_2^{p,q}$ with $q>0$ are zero, while $E_2^{p,0}=H^p(Q,M^N)$. For $r\ge2$, a differential out of this bottom row has negative second coordinate, and one into it starts in a zero row. Induction over pages therefore gives $E_2=E_\infty$. [F1]

2.1 In degree $n$, the only possible quotient is at filtration index $n$. The zero quotients before it imply $F^0H^n=\cdots=F^nH^n$, and $F^{n+1}H^n=0$, so this quotient is the whole target; this is also the lower-edge isomorphism of F2. To identify its map, use the morphism of extensions $(N,G,Q)\to(1,Q,Q)$ given by $N\to1$, $\pi:G\to Q$, and $\operatorname{id}_Q$, together with the $G$-linear inclusion from the inflation of $M^N$ into $M$. By F1's contravariant map-of-extensions naturality, it induces a map from the trivial-kernel LHS sequence for $M^N$ to the given sequence. The source sequence has only its $q=0$ row and its lower edge is the identity on $H^n(Q,M^N)$. The induced map on the target is the usual restriction/coefficient map along $\pi$, namely inflation, while the map on the bottom $E_2$ row is the identity because taking $N$-invariants of $M^N\hookrightarrow M$ recovers $M^N$. Commutativity of the edge square therefore identifies the lower edge above with inflation. At $n=0$ it is $(M^N)^Q=M^G$; for $M=0$ or a zero surviving quotient the finite filtration gives zero. The trivial normal group satisfies the vanishing automatically. All comparisons retain F1's precise DC or supplied-data convention. [F1, F2, step 1.1] ∎
