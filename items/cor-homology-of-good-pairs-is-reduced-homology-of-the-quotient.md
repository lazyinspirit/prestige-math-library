---
id: cor-homology-of-good-pairs-is-reduced-homology-of-the-quotient
kind: corollary
title: "Good pairs and quotient reduced homology"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-excision-for-singular-homology, thm-long-exact-sequence-of-a-pair-in-singular-homology, def-zero-simplex-augmentation-and-reduced-singular-homology]
proof_strategy: direct
verification:
  audited: 2026-09-06
  precheck: pass
  judge: {model: "gpt-5.6-terra", verdict: pass, date: 2026-09-06}
sources:
  references:
    - title: "Allen Hatcher, Algebraic Topology, Proposition 2.22"
      url: "https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf"
pipeline_run: frontier-31a
---

## Statement

Suppose $A$ is a nonempty closed subspace of $X$ and is a deformation retract
of an open neighborhood $V$ in $X$; this is the **good-pair** hypothesis used
here. Then the quotient map gives
$H_n(X,A;G)\cong\widetilde H_n(X/A;G)$ for every $n$.

## Facts & Assumptions

**Given:** A nonempty closed subspace $A\subseteq X$ and an open neighborhood
$V$ that deformation retracts onto $A$ through a homotopy fixing $A$.

## Proof

**Proof technique:** direct.

1.1 Since $V$ deformation retracts onto $A$, $H_*(V,A;G)=0$. The quotient homotopy gives the same conclusion for $(V/A,A/A)$. The long exact sequences of the short exact chain-complex sequences $$0\to C_*(V,A;G)\to C_*(X,A;G)\to C_*(X,V;G)\to0$$ and its quotient analogue therefore give $$H_*(X,A;G)\cong H_*(X,V;G),\qquad H_*(X/A,A/A;G)\cong H_*(X/A,V/A;G).$$ [given, algebra]

2.1 Because $A$ is closed and lies in the open set $V$, excision applies to $(X,V)$ and to $(X/A,V/A)$ after removing respectively $A$ and the quotient point. The resulting removed pairs are homeomorphic, so the quotient map induces $H_*(X,V;G)\cong H_*(X/A,V/A;G)$. Combining with step 1.1 gives $H_*(X,A;G)\cong H_*(X/A,A/A;G)$. Since $A\ne\varnothing$, $A/A$ is one point, and the augmented singular complex identifies the latter groups with $\widetilde H_*(X/A;G)$, including degree zero. [step 1.1, algebra] ∎
