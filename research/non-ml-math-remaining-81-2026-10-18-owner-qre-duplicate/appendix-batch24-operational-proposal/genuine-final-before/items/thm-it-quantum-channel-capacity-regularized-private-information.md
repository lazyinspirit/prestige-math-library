---
id: thm-it-quantum-channel-capacity-regularized-private-information
kind: theorem
title: Regularized private-information formula for quantum channel capacity
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 8
deps:
  - def-it-quantum-channel-operational-capacities
  - def-it-quantum-channel-private-information
  - lem-it-private-information-is-coherent-information-difference
  - lem-it-quantum-and-private-information-product-additivity
  - lem-it-finite-superadditive-sequence-limit
  - thm-it-hsw-classical-quantum-channel-capacity
  - def-it-finite-quantum-information-measures
  - thm-it-finite-strong-subadditivity
  - thm-it-quantum-entropy-identities
  - lem-it-quantum-entropy-maximized-at-maximally-mixed-state
  - def-it-von-neumann-entropy
  - thm-natural-logarithm-laws
  - thm-qc-channels-compose-and-tensor
  - lem-qc-tensor-product-basis-and-dimension
  - def-it-classical-quantum-state-and-holevo-information
justified_by: []
proof_strategy: direct
axiom_use: "No choice axiom is used; all spaces and sums are finite-dimensional."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Igor Devetak, The private classical capacity and quantum capacity of a quantum channel, Theorem 1, §3"
      url: "https://arxiv.org/pdf/quant-ph/0304127"
    - title: "John Watrous, The Theory of Quantum Information, Chapter 8 and Appendix A"
      url: "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf"
    - title: "Mark M. Wilde, From Classical to Quantum Shannon Theory, Chapter 23"
      url: "https://arxiv.org/pdf/1106.1445v8"
---
---
## Statement

Let $\mathcal N:A\to B$ be a finite-dimensional memoryless quantum channel. For each $n\ge1$, let

$$p_n(\mathcal N):=\sup_{\mathcal E_n} I_p(\mathcal E_n,\mathcal N^{\otimes n}),$$

where the supremum ranges over all finite ensembles of input states on $A^{\otimes n}$. Under the strong-secrecy, average-error convention in [[def-it-quantum-channel-operational-capacities]],

$$P(\mathcal N)=\lim_{n\to\infty}\frac{p_n(\mathcal N)}n=\sup_{n\ge1}\frac{p_n(\mathcal N)}n.$$

This statement is regularized and asserts no general single-letter formula.

## Facts & Assumptions

**Given:** The finite-dimensional memoryless channel and private-capacity convention in the Statement.

[F1] [[def-it-quantum-channel-private-information]] and [[lem-it-private-information-is-coherent-information-difference]]: for a finite ensemble, $I_p=\chi(X;B)-\chi(X;E)$, where $E$ is the complementary output.

[F2] [[def-it-finite-quantum-information-measures]] and [[thm-it-quantum-entropy-identities]]: for a finite classical-quantum state, $I(X;B)$ is its Holevo information.

[F3] [[thm-it-finite-strong-subadditivity]]: strong subadditivity with a one-dimensional middle register implies $I(X;E)\ge0$.

[F4] [[lem-it-quantum-and-private-information-product-additivity]]: product ensembles on tensor-product channels have additive private information.

[F5] [[lem-it-finite-superadditive-sequence-limit]]: a linearly bounded superadditive sequence $a_n$ with $a_0=0$ satisfies $\lim a_n/n=\sup_{n\ge1}a_n/n$.

[F6] [[lem-it-quantum-entropy-maximized-at-maximally-mixed-state]] and [[def-it-von-neumann-entropy]]: on a state space of dimension $D$, $S(\rho)\le\ln D$, and the eigenvalue formula gives $S(\rho)\ge0$.

[F7] [[def-it-classical-quantum-state-and-holevo-information]]: $\chi(\{p_x,\sigma_x\})=S(\sum_xp_x\sigma_x)-\sum_xp_xS(\sigma_x)$.

[F8] [[lem-qc-tensor-product-basis-and-dimension]] and [[thm-natural-logarithm-laws]]: $\dim(B^{\otimes n})=(\dim B)^n$ and $\ln(\dim(B^{\otimes n}))=n\ln(\dim B)$.

## Proof

**Proved subclaim:** The information sequence $p_n$ is nonnegative, linearly bounded, and its normalized limit exists with value $\sup_n p_n/n$.

1.1 Write $p_n=p_n(\mathcal N)$. The one-state ensemble has private information zero, so $p_n\ge0$. For any finite ensemble, [F1]–[F3] give $I_p=I(X;B^n)-I(X;E^n)\le I(X;B^n)$, since [F3] implies $I(X;E^n)\ge0$. By [F2] and [F7], $I(X;B^n)=S(B^n)-\sum_xp_xS(B_x)\le S(B^n)$ because each conditional output entropy is nonnegative by [F6]. The output dimension and logarithm identity in [F8], together with [F6], give $S(B^n)\le n\ln\dim B$. Therefore $0\le p_n\le n\ln\dim B$. [F1, F2, F3, F6, F7, F8, given, algebra]

2.1 For positive integers $m,n$, choose finite ensembles whose private informations are within an arbitrary $\delta>0$ of $p_m$ and $p_n$. Their product ensemble is finite and, by [F4], has private information equal to the sum. Thus $p_{m+n}\ge p_m+p_n-2\delta$. Letting $\delta\downarrow0$ proves superadditivity; define $p_0=0$. The linear bound in step 1.1 and [F5] now prove that $p_n/n$ converges to its supremum. [F4, F5, step 1.1, algebra, choose] ∎

## Authoring status

The steps prove existence and identify the information-sequence limit, not its equality with the operational strong-secrecy capacity. The missing direction is the private wiretap coding theorem for general quantum channels: Devetak’s direct proof uses typical and conditionally typical projectors, an operator Chernoff bound, the gentle measurement lemma, random HSW decoding, a privacy-leakage estimate, and expurgation; none of these combined coding steps is proved here. The operational converse also requires a full Fano/Holevo/secrecy argument with its finite-block error terms. The Statement remains the target, but this item is escalated until both operational directions are locally supplied.

