---
id: thm-three-dimensional-variational-assimilation-tracking-under-contraction
kind: theorem
title: 3DVAR tracking error under a global contraction and bounded observation error
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 4
deps:
  - alg-three-dimensional-variational-assimilation
  - def-data-assimilation-problem
  - thm-cholesky-factorisation-exists-iff-hermitian-positive-definite-and-is-unique
proof_strategy: direct
axiom_use: No choice principle is used.
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "K. J. H. Law, A. M. Stuart, and K. C. Zygalakis, Data Assimilation: A Mathematical Introduction, Chapter 4 §4.4.2, Theorem 4.10 and proof"
      url: "https://arxiv.org/pdf/1506.07825v1"
    - title: "Geir Evensen, Femke C. Vossepoel, and Peter Jan van Leeuwen, Data Assimilation Fundamentals, Chapter 6 §6.2"
      url: "https://link.springer.com/content/pdf/10.1007/978-3-030-96709-3.pdf"
---

## Statement

Let $\Psi:\mathbb R^d\to\mathbb R^d$, $H\in\mathbb R^{p\times d}$, and fixed symmetric positive-definite $B\in\mathbb R^{d\times d}$, $\Gamma\in\mathbb R^{p\times p}$. Define $S=HBH^T+\Gamma$, $K=BH^TS^{-1}$, and $F=(I-KH)\circ\Psi$. Suppose $F$ is globally Lipschitz with constant $a$ in a norm $\|\cdot\|$ on $\mathbb R^d$, where $0\le a<1$. Let the true path satisfy $v^\dagger_{j+1}=\Psi(v^\dagger_j)$, let $y_{j+1}=Hv^\dagger_{j+1}+\epsilon_j$, and assume $\sup_{j\ge0}\|\epsilon_j\|_2\le\epsilon<\infty$. Starting from any $m_0\in\mathbb R^d$, run the 3DVAR update
$$m_{j+1}=(I-KH)\Psi(m_j)+Ky_{j+1}.$$
Let $e_1,\ldots,e_p$ be the standard basis of $\mathbb R^p$ and set $\kappa:=\sum_{r=1}^p\|Ke_r\|<\infty$. Then
$$\limsup_{j\to\infty}\|m_j-v^\dagger_j\|\le\frac{\kappa}{1-a}\,\epsilon.$$

## Facts & Assumptions

**Given:** The model, positive-definite covariances, data-error bound, and global contraction hypothesis in the Statement.

[F1] The 3DVAR analysis update has $m_{j+1}=(I-KH)\Psi(m_j)+Ky_{j+1}$ with the fixed gain $K$. [[alg-three-dimensional-variational-assimilation]]

[F2] For $z=(z_1,\ldots,z_p)$, linearity and $|z_r|\le\|z\|_2$ give $\|Kz\|=\|\sum_rz_rKe_r\|\le\sum_r|z_r|\|Ke_r\|\le\kappa\|z\|_2$.

[A1] The map $F=(I-KH)\circ\Psi$ is globally Lipschitz with constant $0\le a<1$.

[A2] The observation errors satisfy $\|\epsilon_j\|_2\le\epsilon$ for all $j\ge0$.

## Proof

**Given:** The hypotheses in the Statement.

1.1 Set $e_j=m_j-v_j^\dagger$. By [F1], the observation equation, and $v_{j+1}^\dagger=\Psi(v_j^\dagger)$, $e_{j+1}=F(m_j)-F(v_j^\dagger)+K\epsilon_j.$ The contraction bound [A1], triangle inequality, and [F2] give $\|e_{j+1}\|\le a\|e_j\|+\kappa\epsilon.$ [A1, A2, F1, F2, given, algebra]

2.1 Put $c=\kappa\epsilon$. Repeated substitution in step 1.1 gives, for each $n\ge1$, $\|e_n\|\le a^n\|e_0\|+c\sum_{r=0}^{n-1}a^r=a^n\|e_0\|+c\frac{1-a^n}{1-a}.$ For $a=0$ the finite sum is $1$ and the same expression holds for every $n\ge1$. Since $0\le a<1$, $a^n\to0$, so taking the limit superior proves the bound. [step 1.1, given, algebra] ∎
