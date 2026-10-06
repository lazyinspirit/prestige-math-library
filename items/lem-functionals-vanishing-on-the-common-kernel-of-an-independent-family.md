---
id: "lem-functionals-vanishing-on-the-common-kernel-of-an-independent-family"
kind: "lemma"
title: "Functionals vanishing on a common kernel are combinations of an independent family"
status: draft
origin: pipeline
pipeline_run: "frontier-39-analysis-30"
dependency_level: 0
deps:
  - "def-algebraic-dual-and-linear-functional"
  - "def-kernel-and-image-of-a-linear-map"
  - "def-linear-independence"
  - "def-linear-map"
  - "def-vector-space"
  - "def-vector-space-of-linear-maps"
  - "thm-linear-kernel-image-and-injectivity"
proof_strategy: "induction"
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2026 author manuscript; complete 392-page archived text)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "Chapter 13 Section 13.3 Constraints, printed pp. 302-305 (Theorem 13.6 and its proof; the multiplier step is the finite-dimensional duality used here)"
---

## Statement

Let $X$ be a real vector space ([[def-vector-space]]), let $m\ge1$, and let $\psi_1,\dots,\psi_m\in X^*$ be linearly independent linear functionals on $X$ ([[def-algebraic-dual-and-linear-functional]], [[def-linear-independence]]). Let $\varphi\in X^*$ satisfy $\bigcap_{i=1}^m\ker\psi_i\subseteq\ker\varphi$ ([[def-kernel-and-image-of-a-linear-map]]). Then there is a unique $\lambda\in\mathbb R^m$ with $\varphi=\sum_{i=1}^m\lambda_i\psi_i$. In particular, for $m=1$: if $\psi\ne0$ and $\ker\psi\subseteq\ker\varphi$, then $\varphi=\lambda\psi$ for a unique $\lambda\in\mathbb R$.

## Facts & Assumptions

**Given:** A real vector space $X$, an integer $m\ge1$, linearly independent linear functionals $\psi_1,\dots,\psi_m\colon X\to\mathbb R$, and a linear functional $\varphi\colon X\to\mathbb R$ with $\bigcap_{i=1}^m\ker\psi_i\subseteq\ker\varphi$.

[F1] [[def-algebraic-dual-and-linear-functional]], [[def-vector-space-of-linear-maps]]: $X^*=\mathcal L(X,\mathbb R)$ is the vector space of linear functionals on $X$ with pointwise operations, so a linear combination $x\mapsto\sum_i c_i\psi_i(x)$ of elements of $X^*$ is again an element of $X^*$, and the zero of $X^*$ is the functional vanishing identically on $X$.

[F2] [[def-kernel-and-image-of-a-linear-map]], [[thm-linear-kernel-image-and-injectivity]]: for a linear map $T$ one has $\ker T=\{x:T(x)=0\}$, and $\ker T$ is a linear subspace of the domain of $T$.

[F3] [[def-linear-independence]]: the list $\psi_1,\dots,\psi_m$ is linearly independent exactly when $\sum_{i=1}^m c_i\psi_i=0$ in $X^*$ forces $c_1=\dots=c_m=0$; in particular every $\psi_i$ is nonzero, since otherwise the list would carry the nontrivial relation with coefficient $1$ on the zero term.

[F4] [[def-linear-map]]: each $\psi_i$ and $\varphi$ satisfies $\psi_i(ax+by)=a\psi_i(x)+b\psi_i(y)$ and $\varphi(ax+by)=a\varphi(x)+b\varphi(y)$ for all $x,y\in X$ and $a,b\in\mathbb R$.

## Proof

**Proof technique:** induction on $m$.

**Given:** A real vector space $X$, an integer $m\ge1$, linearly independent functionals $\psi_1,\dots,\psi_m$ on $X$, and a functional $\varphi$ on $X$ with $\bigcap_{i=1}^m\ker\psi_i\subseteq\ker\varphi$.

1.1 Base case $m=1$. Let $\psi\ne0$ and $\ker\psi\subseteq\ker\varphi$. As $\psi\ne0$ there is $y\in X$ with $\psi(y)\ne0$, and $x_1:=y/\psi(y)$ satisfies $\psi(x_1)=1$ by homogeneity [F4]; for arbitrary $x\in X$ the vector $x-\psi(x)x_1$ lies in $\ker\psi\subseteq\ker\varphi$, so $0=\varphi(x)-\psi(x)\varphi(x_1)$ by linearity of $\varphi$ [F4], that is, $\varphi=\varphi(x_1)\psi$; conversely if $\lambda\psi=\lambda'\psi$ with $\psi\ne0$, then $(\lambda-\lambda')\psi=0$ is the zero functional, so evaluating at $y$ gives $\lambda=\lambda'$. [base, given, F1, F3, F4, algebra]

1.2 Induction step setup. Let $P(m)$ denote the assertion of the statement for the fixed integer $m$ and an arbitrary real vector space, and suppose $m\ge2$ while $P(m-1)$ is known as the induction hypothesis; the goal is to prove $P(m)$. [ih, assume-hyp]

2.1 Put $V:=\ker\psi_m$, a linear subspace of $X$ [F2], and let $\rho_i:=\psi_i|_V$ for $1\le i\le m-1$; each $\rho_i$ is a linear functional on $V$ [F1, F2]. The list $\rho_1,\dots,\rho_{m-1}$ is linearly independent: if $\sum_{i<m}c_i\rho_i=0$, then the functional $\sigma:=\sum_{i<m}c_i\psi_i\in X^*$ vanishes on $V=\ker\psi_m$, so $\ker\psi_m\subseteq\ker\sigma$ and the base case of step 1.1 gives $\sigma=\lambda\psi_m$ for some $\lambda\in\mathbb R$; subtracting yields $\sum_{i<m}c_i\psi_i-\lambda\psi_m=0$ in $X^*$, whence $c_1=\dots=c_{m-1}=0$ and $\lambda=0$ by independence of $\psi_1,\dots,\psi_m$ [F1, F3]. [step 1.1, F1, F2, F3, algebra]

3.1 The inclusion hypothesis transfers: if $v\in\bigcap_{i<m}\ker\rho_i$, then $v\in V=\ker\psi_m$ and $\psi_i(v)=0$ for all $i<m$, so $v\in\bigcap_{i\le m}\ker\psi_i\subseteq\ker\varphi$; hence $\bigcap_{i<m}\ker\rho_i\subseteq\ker(\varphi|_V)$, and $\varphi|_V$ is a linear functional on $V$ [F1, F4]. The induction hypothesis $P(m-1)$ applied to the real vector space $V$ and the linearly independent list $\rho_1,\dots,\rho_{m-1}$ of step 2.1 therefore provides $\mu_1,\dots,\mu_{m-1}\in\mathbb R$ with $\varphi|_V=\sum_{i<m}\mu_i\rho_i$, that is, with $\varphi-\sum_{i<m}\mu_i\psi_i$ vanishing on $V$. [step 1.2, step 2.1, F1, F2, algebra]

4.1 Let $\tau:=\varphi-\sum_{i<m}\mu_i\psi_i\in X^*$, a functional vanishing on $V=\ker\psi_m$ by step 3.1, so that $\ker\psi_m\subseteq\ker\tau$; since $\psi_m\ne0$ [F3], the base case of step 1.1 yields $\tau=\mu_m\psi_m$ for some $\mu_m\in\mathbb R$; setting $\lambda_i:=\mu_i$ for $i<m$ gives $\varphi=\sum_{i=1}^m\lambda_i\psi_i$ by [F1]. [step 1.1, step 3.1, F1, F3, algebra]

5.1 Uniqueness and discharge of the induction. If $\sum_{i=1}^m\lambda_i\psi_i=\sum_{i=1}^m\lambda'_i\psi_i$, then $\sum_{i=1}^m(\lambda_i-\lambda'_i)\psi_i$ is the zero element of $X^*$ [F1], so $\lambda_i=\lambda'_i$ for every $i$ by linear independence [F3]. Thus $P(m-1)$ implies $P(m)$, and with the base case of step 1.1 the principle of induction gives $P(m)$ for every $m\ge1$, which is the assertion, including the stated uniqueness. [step 4.1, F1, F3, discharge-induction] ∎

