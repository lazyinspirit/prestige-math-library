---
id: ex-it-qubit-von-neumann-entropy
kind: example
title: Entropy of a diagonal qubit state
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 1
deps: [def-it-von-neumann-entropy, def-qc-density-operator, thm-non-negative-operator-characterisations, thm-natural-logarithm-laws]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "John Watrous, The Theory of Quantum Information, §5.2.1"
      url: "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf"
    - title: "Mark M. Wilde, From Classical to Quantum Shannon Theory, arXiv:1106.1445v8, §11.1"
      url: "https://arxiv.org/pdf/1106.1445v8"
---

## Example

For $p\in[0,1]$, let $\rho_p$ be the qubit state with matrix $\operatorname{diag}(p,1-p)$. Its entropy is $S(\rho_p)=-p\ln p-(1-p)\ln(1-p)$ nats, with zero terms interpreted as $0\ln0=0$. In bits it is $h_2(p):=-p\log_2p-(1-p)\log_2(1-p)$, where $\log_2u:=\ln u/\ln2$, with the same endpoint convention. Thus pure basis states have entropy $0$, and the maximally mixed qubit has entropy $\ln2$ nats, or one bit.

## Facts & Assumptions

**Given:** $p\in[0,1]$, the diagonal density operator $\rho_p$, and the entropy definition.

[F1] [[def-it-von-neumann-entropy]]: entropy is the negative sum of $\lambda\ln\lambda$ over positive eigenvalues, and entropy in bits divides by $\ln2$.

[F2] [[thm-non-negative-operator-characterisations]]: a non-negative diagonal operator has the displayed diagonal entries as its eigenvalues.

[F3] [[def-qc-density-operator]]: a density operator is non-negative and has trace one.

[F4] [[thm-natural-logarithm-laws]]: $\ln(1/2)=\ln1-\ln2=-\ln2$.

## Verification

1.1 The diagonal entries $p,1-p$ are nonnegative and sum to one, so $\rho_p$ is a density operator by [F3]. By [F2] its eigenvalues are exactly $p,1-p$. Applying [F1] gives $S(\rho_p)=-p\ln p-(1-p)\ln(1-p)$, with a zero-eigenvalue term omitted. [given, F1, F2, F3, algebra]

2.1 If $p=0$ or $p=1$, the only positive eigenvalue is $1$, so $S=0$. If $p=1/2$, [F4] gives $S=-2(\tfrac12\ln\tfrac12)=\ln2$, and [F1] gives $S_2=1$. For general $p$, the stated definition of $\log_2$ gives $S_2=h_2(p)$. [given, F1, F4, step 1.1, algebra, cases] ∎

