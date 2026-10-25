---
id: thm-qc-standalone-global-phase-invariance
kind: theorem
title: Standalone Global Phase Leaves Pure-State POVM Probabilities Unchanged
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
deps:
  - def-qc-density-operator
  - def-qc-povm-and-outcome-law
  - def-qc-dirac-notation-conversion
  - thm-qc-unit-vector-projector-is-density
  - thm-qc-povm-probabilities-normalize
  - def-real-and-complex-inner-product-space
  - def-inner-product-norm
  - def-trace-of-an-endomorphism
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, arXiv:1907.09415v6"
      url: "https://arxiv.org/pdf/1907.09415"
    - title: "John Preskill, Quantum Computation, Chapter 2: Foundations I: States and Ensembles"
      url: "https://www.preskill.caltech.edu/ph219/chap2_15.pdf"
dependency_level: 4
---

## Statement

Let $H$ be a nonzero finite-dimensional complex inner-product space with the root pairing linear in the first argument. For nonzero $x\in H$, put $u=x/\|x\|$. If $\lambda\in\mathbb C$ has $|\lambda|=1$, then $u$ and $\lambda u$ determine the same rank-one density operator. Consequently, for every finite POVM $(E_a)_{a\in\Omega}$ on $H$, each defined outcome probability satisfies

$$\operatorname{tr}(|u\rangle\langle u|E_a)=\operatorname{tr}(|\lambda u\rangle\langle\lambda u|E_a).$$

The unnormalized vector $x$ itself gives $\operatorname{tr}(|x\rangle\langle x|)=\|x\|^2$ and is not a density operator when $\|x\|\ne1$.

## Facts & Assumptions

**Given:** The finite-dimensional space and nonzero $x$ in the Statement, a scalar $\lambda$ with $|\lambda|=1$, and a finite POVM $(E_a)_{a\in\Omega}$.

[F1] [[def-real-and-complex-inner-product-space]]: the root pairing is linear in its first argument, conjugate-linear in its second, and positive definite.

[F2] [[def-inner-product-norm]]: $\|v\|=\sqrt{\langle v,v\rangle}$.

[F3] [[def-trace-of-an-endomorphism]]: endomorphism trace is the matrix trace in any chosen basis.

[L1] [[def-qc-density-operator]]: a density operator is a non-negative endomorphism of trace one on a nonzero finite-dimensional space.

[L2] [[def-qc-povm-and-outcome-law]] defines a finite POVM and the outcome weight $p_a=\operatorname{tr}(\rho E_a)$ for a density operator. Its current draft definition body was read.

[L3] [[def-qc-dirac-notation-conversion]] defines $|v\rangle\langle w|z=\langle z,w\rangle_{\rm root}v$. Its current draft definition body was read.

[L4] [[thm-qc-unit-vector-projector-is-density]] proves directly that the outer product of every unit vector is a density operator, including its trace-one verification by Parseval.

[L5] [[thm-qc-povm-probabilities-normalize]] states nonnegativity and normalization of finite POVM weights. Its current draft proof was read; its density-definition dependency is present in its current frontmatter.

## Proof

1.1 Positive definiteness gives $\|x\|>0$, so $u$ is defined. By [F1] and [F2], $\|u\|^2=\langle x/\|x\|,x/\|x\|\rangle=\langle x,x\rangle/\|x\|^2=1$. Again using linearity in the first argument and conjugate-linearity in the second, $\|\lambda u\|^2=\langle\lambda u,\lambda u\rangle=|\lambda|^2\langle u,u\rangle=1$. Taking nonnegative square roots gives both norms equal to one. [given, F1, F2, algebra]

1.2 For every $z\in H$, the root-first conversion [L3] gives $|\lambda u\rangle\langle\lambda u|z=\langle z,\lambda u\rangle_{\rm root}\lambda u=\overline\lambda\lambda\langle z,u\rangle_{\rm root}u=|u\rangle\langle u|z$. Hence the two rank-one operators are equal. [given, F1, L3, algebra]

2.1 By [L4], the common operator is a density operator, so the outcome law [L2] defines its weight for each effect $E_a$. Since the density operator is identical for $u$ and $\lambda u$, those weights agree; [L5] proves the finite family of weights is a probability distribution. [step 1.2, L1, L2, L4, L5, algebra]

3.1 Since $x=\|x\|u$ with $\|x\|$ a nonnegative real, [F1] and [L3] give $|x\rangle\langle x|=\|x\|^2|u\rangle\langle u|$. In any basis, its matrix is therefore $\|x\|^2$ times the matrix of $|u\rangle\langle u|$; summing the diagonal entries in that basis as in [F3] gives $\operatorname{tr}(|x\rangle\langle x|)=\|x\|^2\operatorname{tr}(|u\rangle\langle u|)=\|x\|^2$ by [L4]. If $\|x\|\ne1$, it is not trace one and hence is not a density operator by [L1]. [given, F1, F3, L1, L3, L4, algebra] ∎
