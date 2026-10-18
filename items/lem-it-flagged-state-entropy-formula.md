---
id: lem-it-flagged-state-entropy-formula
kind: lemma
title: Entropy of a finite flagged state
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 1
deps:
  - def-it-von-neumann-entropy
  - def-qc-density-operator
  - thm-complex-spectral-theorem-for-normal-endomorphisms
  - thm-natural-logarithm-laws
justified_by: []
proof_strategy: direct
axiom_use: "No choice axiom is used; all spaces and sums are finite-dimensional."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "John Watrous, The Theory of Quantum Information, §5.2.1"
      url: "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf"
    - title: "Mark M. Wilde, From Classical to Quantum Shannon Theory, §11.1"
      url: "https://arxiv.org/pdf/1106.1445v8"
---
## Statement

Let $H$ be a nonzero finite-dimensional complex inner-product space, let $\tau$ be a density operator on $H$, let $e$ be a unit vector orthogonal to the data summand in $H\oplus\mathbb C e$, and let $p\in[0,1]$. With $h(p):=-p\ln p-(1-p)\ln(1-p)$ and $0\ln0:=0$, the block-diagonal state

$$\omega_p:=p\tau\oplus(1-p)|e\rangle\langle e|$$

satisfies $S(\omega_p)=h(p)+pS(\tau)$.

## Facts & Assumptions

**Given:** The finite-dimensional state, orthogonal flag, and probability $p$ in the Statement.

[F1] [[def-it-von-neumann-entropy]]: entropy is $-\sum_{\lambda>0}\lambda\ln\lambda$, and zero-eigenvalue terms contribute zero.

[F2] [[def-qc-density-operator]] and [[thm-complex-spectral-theorem-for-normal-endomorphisms]]: $\tau$ has nonnegative eigenvalues $\lambda_j$ summing to one, with an orthonormal eigenbasis.

[F3] [[thm-natural-logarithm-laws]]: $\ln(xy)=\ln x+\ln y$ for positive $x,y$, and $\ln1=0$.

## Proof

1.1 The orthogonal summands reduce $\omega_p$, so its eigenvalues, including multiplicities, are $p\lambda_j$ on $H$ and $1-p$ on the flag. For $0<p<1$, [F1]–[F3] give $S(\omega_p)=-\sum_{j:\lambda_j>0}p\lambda_j\ln(p\lambda_j)-(1-p)\ln(1-p)=h(p)+pS(\tau)$, because $\sum_j\lambda_j=1$. [F1, F2, F3, given, algebra]

2.1 At $p=0$, $\omega_p$ is the pure flag state and both sides equal zero. At $p=1$, $\omega_p=\tau$ and both sides equal $S(\tau)$. Thus the formula holds on the closed interval, including its endpoints. [F1, step 1.1, cases, algebra] ∎

