---
id: prop-plancherel-expectations-of-shifted-character-observables
kind: proposition
title: "Plancherel expectations of the shifted character observables"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
proof_strategy: direct
deps: [def-shifted-character-observables-and-profile-moments, def-plancherel-measure-on-partitions, prop-plancherel-weights-sum-to-one, thm-character-of-the-regular-representation, thm-finitely-many-irreducibles-occur-in-the-regular-representation-with-multiplicity-equal-to-their-degree, thm-complex-irreducibles-of-symmetric-groups-are-specht-modules, def-factorial-and-falling-factorial]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Vladimir Ivanov and Grigori Olshanski, Kerov's central limit theorem for the Plancherel measure on Young diagrams, arXiv:math/0304010; survey-paper version in Symmetric Functions 2001, NATO Science Series II 74 (2002), 93-151"
      url: "https://arxiv.org/pdf/math/0304010"
      locator: "Prop. 5.1 and its proof, printed pp. 24-25 (the regular character computation)"
---

## Statement

For every partition $\rho$ with $r=|\rho|$ and every $n\ge0$,
$$\mathbb E_{P_n}\bigl[p_\rho^\#\bigr]=\begin{cases}n^{\downarrow r},&\rho=(1^r),\\0,&\rho\ne(1^r),\end{cases}$$
where the case $n<r$ is included: then $p_\rho^\#\equiv0$ on $Y_n$ and $n^{\downarrow r}=0$. In particular $\mathbb E_{P_n}[p_\rho^\#]=O(n^{|\rho|})$ uniformly in $n$, and if $m_1(\rho)=0$ and $\rho\ne\emptyset$ then $\mathbb E_{P_n}[p_\rho^\#]=0$ for every $n$.

## Facts & Assumptions

**Given:** a partition $\rho$ with $r=|\rho|$; the shifted observables $p_\rho^\#(\lambda)=n^{\downarrow r}\chi^\lambda_{\rho\cup1^{n-r}}/\dim_{\mathbb C}S^\lambda$ for $\lambda\vdash n$, $n\ge r$, and $p_\rho^\#(\lambda)=0$ for $n<r$ ([[def-shifted-character-observables-and-profile-moments]]); the Plancherel weights $P_n(\lambda)=(f^\lambda)^2/n!$ with $f^\lambda=\dim_{\mathbb C}S^\lambda=\chi^\lambda_{(1^n)}$ ([[def-plancherel-measure-on-partitions]]).

[F1] For every $\lambda\vdash n$, $\dim_{\mathbb C}S^\lambda=\chi^\lambda_{(1^n)}=f^\lambda>0$ ([[def-shifted-character-observables-and-profile-moments]]).

[F2] $\mathbb C[S_n]\cong\bigoplus_{\lambda\vdash n}(S^\lambda)^{\oplus f^\lambda}$ as $\mathbb C[S_n]$-modules, the irreducibles being the Specht modules up to equivalence ([[thm-finitely-many-irreducibles-occur-in-the-regular-representation-with-multiplicity-equal-to-their-degree]], [[thm-complex-irreducibles-of-symmetric-groups-are-specht-modules]]).

[F3] The character of the regular representation is $\chi_{\mathrm{reg}}(g)=n!$ for $g=e$ and $\chi_{\mathrm{reg}}(g)=0$ for $g\ne e$ ([[thm-character-of-the-regular-representation]]).

[F4] The sum of the Plancherel weights is one; equivalently $\sum_{\lambda\vdash n}(f^\lambda)^2=n!$ ([[prop-plancherel-weights-sum-to-one]], [[def-factorial-and-falling-factorial]]).

## Proof
**Proof technique:** direct.

1.1 Expectation by characters: for $n\ge r$, expanding the expectation against the Plancherel weights and inserting the definition of $p_\rho^\#$ gives $\mathbb E_{P_n}[p_\rho^\#]=\sum_{\lambda\vdash n}\frac{n^{\downarrow r}\chi^\lambda_{\rho\cup1^{n-r}}}{f^\lambda}\cdot\frac{(f^\lambda)^2}{n!}=\frac{n^{\downarrow r}}{n!}\sum_{\lambda\vdash n}\chi^\lambda_{\rho\cup1^{n-r}}\,f^\lambda ;$ for $n<r$ both $p_\rho^\#$ and $n^{\downarrow r}$ vanish, so the formula also gives $0$ there. All quantities are finite, and $n!>0$. [given, F1, F4, algebra]

1.2 The class sum: by [F2] the character of $\mathbb C[S_n]$ is the class function $\chi_{\mathrm{reg}}=\sum_{\lambda\vdash n}f^\lambda\chi^\lambda$; evaluated at a permutation of cycle type $\mu\vdash n$ and compared with [F3] this gives $\sum_{\lambda\vdash n}f^\lambda\chi^\lambda_\mu=\chi_{\mathrm{reg}}(\mu)=\begin{cases}n!,&\mu=(1^n),\\0,&\mu\ne(1^n),\end{cases}$ the class $(1^n)$ being exactly the identity class. [given, F2, F3, algebra]

2.1 Case evaluation: applying step 1.2 with $\mu=\rho\cup1^{n-r}\vdash n$ in step 1.1, the sum is $n!$ precisely when $\rho\cup1^{n-r}=(1^n)$, i.e. when $\rho=(1^r)$, and is $0$ otherwise; dividing by $n!$ and multiplying by $n^{\downarrow r}$ gives $\mathbb E_{P_n}[p_\rho^\#]=n^{\downarrow r}$ for $\rho=(1^r)$ and $0$ otherwise, including $n<r$ by step 1.1. [given, step 1.1, step 1.2, algebra]

3.1 Consequences: $n^{\downarrow r}=n(n-1)\cdots(n-r+1)$ is $0$ for $n<r$ and of modulus at most $n^r$ for $n\ge r$, so $\mathbb E_{P_n}[p_\rho^\#]=O(n^{|\rho|})$ uniformly in $n$; and if $m_1(\rho)=0$ with $\rho\ne\emptyset$ then $\rho\ne(1^r)$, so the expectation vanishes for every $n$, as asserted. [given, step 2.1, algebra] ∎ 