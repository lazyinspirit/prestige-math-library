---
id: lem-it-finite-mixture-entropy-bounds
kind: lemma
title: Entropy bounds for a finite mixture of states
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 7
deps:
- def-it-von-neumann-entropy
- def-it-finite-dimensional-quantum-relative-entropy
- def-qa-35-finite-probability-entropy-and-stochastic-matrices
- thm-it-quantum-relative-entropy-nonnegative-equality
- thm-qc-schmidt-decomposition
- def-trace-of-an-endomorphism
- thm-non-negative-operator-characterisations
- thm-natural-logarithm-laws
justified_by: []
proof_strategy: direct
axiom_use: No choice axiom is used; all probabilistic selections are finite, and the stated real/finite-dimensional completeness suppliers suffice.
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pending
sources:
  references:
  - title: John Watrous, The Theory of Quantum Information
    url: https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf
    locator: Sections 5.2 and 8.1–8.2; complete relevant proofs inspected in owner construction evidence.
  - title: Igor Devetak, The private classical capacity and quantum capacity of a quantum channel
    url: https://arxiv.org/pdf/quant-ph/0304127
    locator: Theorems 1 and 5; complete private coding proof and channel reduction inspected.
---

## Statement

For states $\rho_i$ and finite probabilities $p_i$, put $\bar\rho=\sum_i p_i\rho_i$. Then
$$0\le S(\bar\rho)-\sum_i p_iS(\rho_i)\le H(p).$$

## Facts & Assumptions

**Given:** A common nonzero finite-dimensional space $H$, a finite probability vector $(p_i)$, and density operators $\rho_i$ on $H$. The Shannon entropy is in nats: $H(p):=-\sum_{i:p_i>0}p_i\ln p_i$, with $0\ln0:=0$.

[F1] [[def-it-von-neumann-entropy]]: Finite-dimensional von Neumann entropy.

[F2] [[thm-it-quantum-relative-entropy-nonnegative-equality]]: Nonnegativity and equality for finite quantum relative entropy.

[F3] [[thm-qc-schmidt-decomposition]]: Schmidt decomposition.

[F4] [[def-trace-of-an-endomorphism]]: 'The basis-independent trace of an endomorphism of a finite-dimensional vector space'.

[F5] [[thm-non-negative-operator-characterisations]]: if $T$ is non-negative and $\langle Tv,v\rangle=0$, then $Tv=0$.

[F6] [[def-it-finite-dimensional-quantum-relative-entropy]] and [[thm-natural-logarithm-laws]]: on support inclusion, $D(\alpha\|\beta)=\operatorname{tr}(\alpha\ln\alpha)-\operatorname{tr}(\alpha\ln\beta)$, and $\ln(xy)=\ln x+\ln y$ for positive $x,y$.

## Proof

1.1 Omit zero weights. For each $i$ with $p_i>0$, $\bar\rho-p_i\rho_i=\sum_{j\ne i}p_j\rho_j$ is non-negative. If $v\in\ker\bar\rho$, its quadratic form under this sum is zero; every summand is nonnegative, so $\langle\rho_i v,v\rangle=0$ and [F5] gives $\rho_i v=0$. Hence $\operatorname{supp}\rho_i\subseteq\operatorname{supp}\bar\rho$ and every $D(\rho_i\|\bar\rho)$ is finite. The trace formula [F6], linearity of trace [F4], and $\bar\rho=\sum_i p_i\rho_i$ give $$\sum_i p_iD(\rho_i\Vert\bar\rho)=S(\bar\rho)-\sum_i p_iS(\rho_i)\ge0$$ by [F2]. [F1, F2, F4, F5, F6, given, algebra, construct]

2.1 For the upper bound, diagonalize each $\rho_i=\sum_j\lambda_{ij}|v_{ij}\rangle\langle v_{ij}|$, omitting zero weights and eigenvalues, and purify the mixture as $|v\rangle=\sum_{ij}\sqrt{p_i\lambda_{ij}}|v_{ij}\rangle\otimes|i,j\rangle$. Its label marginal $G$ is a state with diagonal $q_{ij}=p_i\lambda_{ij}$ and has the same nonzero eigenvalues as $\bar\rho$ by Schmidt decomposition. The logarithm product law in [F6] gives $H(q)=H(p)+\sum_i p_iS(\rho_i)$. [F1, F2, F3, F4, F6, given, algebra, construct, step 1.1]

3.1 For $\Delta=\operatorname{diag}(q)$, its kernel is spanned by coordinate labels with $q_{ij}=0$. Each such basis vector $e_{ij}$ has $\langle Ge_{ij},e_{ij}\rangle=q_{ij}=0$, so [F5] gives $Ge_{ij}=0$. Hence $G$ annihilates $\ker\Delta$ and $\operatorname{supp}G\subseteq\operatorname{supp}\Delta$. The formula [F6] now gives $$0\le D(G\Vert\Delta)=H(q)-S(G)=H(p)+\sum_i p_iS(\rho_i)-S(\bar\rho).$$ This proves both bounds, including singleton/zero-weight cases. [F1, F2, F3, F4, F5, F6, given, algebra, construct, step 2.1] ∎
