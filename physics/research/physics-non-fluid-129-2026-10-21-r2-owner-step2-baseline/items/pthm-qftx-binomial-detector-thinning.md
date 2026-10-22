---
id: pthm-qftx-binomial-detector-thinning
kind: physics-theorem
domain: physics
library: physics
title: "Ideal independent loss preserves normalized factorial correlation"
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
dependency_level: 4
deps:
  - pthm-qftx-mode-g-two
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
dependency_roles:
  pthm-qftx-mode-g-two: physical-result
  thm-tonelli-theorem-for-sigma-finite-product-spaces: mathematical-premise
physical_scope: "A selected mode with a finite positive ideal mean is sent through an explicitly assumed independent, constant-efficiency counting channel with no background or dark counts. The theorem does not model detector dead time, mode dependence, correlated loss, or actual measured data."
empirical_premises: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Daniel A. Steck, Quantum and Atom Optics, revision 0.16.7 (13 March 2026)"
      url: "https://atomoptics.uoregon.edu/~dsteck/teaching/quantum-optics/quantum-optics-notes.pdf"
      locator: "Author-hosted complete course text, Chapter 16 §§16.2–16.4.1, PDF pp. 687–690, for lossless beam-splitter mode transformations and the binomial output law for photons in one input. The theorem explicitly assumes independent fixed-efficiency thinning and proves its moment identities locally."
    - title: "Roy J. Glauber, The Quantum Theory of Optical Coherence, Physical Review 130, 2529–2539 (1963)"
      url: "https://journals.aps.org/pr/pdf/10.1103/PhysRev.130.2529"
      locator: "§II equations (2.16)–(2.18), printed pp. 2531–2532, for coincidence-count correlation functions. No loss or efficiency law is imported from this paper."
verification:
  precheck: pending
---

## Statement

Assume the ideal selected-mode count law has probabilities $p_n$, finite positive mean $\mu=\sum_n np_n$, and finite second factorial moment $F_2=\sum_n n(n-1)p_n$. Let $0<\eta\le1$ be a dimensionless fixed efficiency. Assume each of the $n$ incoming photons is recorded independently with probability $\eta$, conditional on the incoming count $N=n$, and there are no background counts or dark counts. If $K$ is the recorded count, then
$$\mathbb E K=\eta\mu,\qquad \mathbb E[K(K-1)]=\eta^2F_2.$$
Consequently the normalized zero-delay factorial correlation is unchanged:
$$g_K^{(2)}(0)=\frac{\mathbb E[K(K-1)]}{(\mathbb E K)^2}=\frac{F_2}{\mu^2}=g_N^{(2)}(0).$$
This is a model deduction conditional on independent constant-efficiency thinning; it is not a universal property of real detectors.

## Statement references

[[pthm-qftx-mode-g-two]]

[[thm-tonelli-theorem-for-sigma-finite-product-spaces]]

[Steck, Quantum and Atom Optics](https://atomoptics.uoregon.edu/~dsteck/teaching/quantum-optics/quantum-optics-notes.pdf)

[Glauber (1963)](https://journals.aps.org/pr/pdf/10.1103/PhysRev.130.2529)

## Facts & Assumptions

**Given:** The count distribution $(p_n)$ of the ideal mode model, its finite moments $\mu>0$ and $F_2$, a fixed efficiency $0<\eta\le1$, and conditionally independent Bernoulli recording of each incoming photon.

[A1] Conditional on $N=n$, write $K=\sum_{j=1}^{n}X_j$, where $X_j\in\{0,1\}$ are independent with $\mathbb P(X_j=1\mid N=n)=\eta$. This is the explicitly assumed thinning channel, not an empirical detector law.

[F1] The selected-mode distribution and normalized factorial correlation are those of the ideal wavepacket counting model. [[pthm-qftx-mode-g-two]]

[F2] Nonnegative countable sums may be averaged and regrouped by Tonelli's theorem. [[thm-tonelli-theorem-for-sigma-finite-product-spaces]]

## Proof

1.1 Fix $n\in\mathbb N_0$. From [A1], $\mathbb E[K\mid N=n]=\sum_{j=1}^n\mathbb E[X_j\mid N=n]=n\eta$. Also $K(K-1)=\sum_{i\ne j}X_iX_j$, since $X_j^2=X_j$; independence gives $\mathbb E[X_iX_j\mid N=n]=\eta^2$ for $i\ne j$, so $\mathbb E[K(K-1)\mid N=n]=n(n-1)\eta^2$. For $n=0$ or $n=1$ the relevant sums are empty and the same formulas hold. [A1, algebra]

2.1 Averaging the conditional identities over $p_n$ and using [F2] to sum the nonnegative terms yields $\mathbb E K=\sum_np_n n\eta=\eta\mu$ and $\mathbb E[K(K-1)]=\sum_np_n n(n-1)\eta^2=\eta^2F_2$. Both moments are finite by the hypotheses. Since $\eta\mu>0$, division gives $g_K^{(2)}(0)=\eta^2F_2/(\eta\mu)^2=F_2/\mu^2=g_N^{(2)}(0)$ by [F1]. [A1, F1, F2, step 1.1, algebra] ∎
