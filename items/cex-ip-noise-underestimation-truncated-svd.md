---
id: cex-ip-noise-underestimation-truncated-svd
kind: counterexample
title: Noise underestimation defeats a truncated singular-value rule
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 3
deps:
  - def-banach-space
  - def-bounded-linear-operator
  - def-compact-linear-operator
  - def-countable-choice
  - def-ip-compact-linear-inverse-model
  - def-ip-noise-level-free-parameter-rule
  - def-ip-unbounded-hilbert-moore-penrose-inverse
  - def-linear-basis
  - def-linear-map
  - def-operator-norm
  - def-square-summable-family-on-an-arbitrary-index-set
  - lem-finite-rank-operators-are-compact
  - lem-square-summable-sequences-form-a-hilbert-space
  - thm-norm-limit-of-compact-operators-is-compact
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
verification:
  precheck: pass
sources:
  references:
    - title: "Christian Clason, Regularization of Inverse Problems: Lecture Notes, Theorem 4.8"
      url: "https://imsc.uni-graz.at/clason/preprints/InverseNotes.pdf"
      locator: "Chapter 4, Theorem 4.8 and proof, PDF p. 37: the general data-only choice obstruction."
    - title: "Ferdia Sherry, Inverse Problems: Lecture Notes 2024, Theorem 3.12"
      url: "https://ferdiasherry.com/LectureNotes2024.pdf"
      locator: "Section 3.2.3, Theorem 3.12 and proof, PDF pp. 33–34: the general data-only choice obstruction."
---

## Statement refuted

**False claim.** Let $X=Y=\ell^2(\mathbb N,\mathbb R)$ with standard basis
$(e_j)_{j\ge1}$, let $Kx=(x_j/j)_{j\ge1}$, and for $\alpha>0$ define
$R_\alpha z=\sum_{k=1}^{\lfloor1/\alpha\rfloor}kz_ke_k$, with the empty sum
used when the upper limit is $0$. Define the data-only noise proxy by
$\widehat\delta(0)=1$ and $\widehat\delta(z)=\min\{1,\|z\|_2^2\}$ for $z\ne0$,
and set $\alpha(z)=\widehat\delta(z)$. The false claim is that this compact
operator, pointwise regularizing family, and deterministic noise-level-free
rule satisfy, for every exact datum $y\in D(K^\dagger)$,
$\lim_{\delta\downarrow0}\sup\{\|R_{\alpha(z)}z-K^\dagger y\|_2:z\in\ell^2(\mathbb N,\mathbb R),\ \|z-y\|_2\le\delta\}=0$.

## Statement references

[[def-ip-compact-linear-inverse-model|Compact Hilbert inverse model]]

[[def-ip-unbounded-hilbert-moore-penrose-inverse|Hilbert-space Moore–Penrose inverse and its domain]]

[[def-ip-noise-level-free-parameter-rule|Noise-level-free parameter-choice rule]]

[Clason, Regularization of Inverse Problems, Theorem 4.8](https://imsc.uni-graz.at/clason/preprints/InverseNotes.pdf)

[Sherry, Inverse Problems: Lecture Notes 2024, Theorem 3.12](https://ferdiasherry.com/LectureNotes2024.pdf)

## Facts & Assumptions

**Given:** $\mathbb N=\{1,2,\ldots\}$, the real sequence space $\ell^2(\mathbb N,\mathbb R)$, $Kx=(x_j/j)_{j\ge1}$, its coordinate truncations $K_Nx=(x_1,x_2/2,\ldots,x_N/N,0,\ldots)$, the family $R_\alpha z=\sum_{k=1}^{\lfloor1/\alpha\rfloor}kz_ke_k$, and the rule $\alpha(0)=1$, $\alpha(z)=\min\{1,\|z\|_2^2\}$ for $z\ne0$.

[A1] [[def-countable-choice]]: For every family $(X_n)_{n\in\mathbb N}$ of nonempty sets indexed by $\mathbb N$, there is a function $f$ with domain $\mathbb N$ such that $f(n)\in X_n$ for every $n$.

[F1] [[def-square-summable-family-on-an-arbitrary-index-set]]: For $x\in\ell^2(\mathbb N,\mathbb R)$, $\|x\|_2^2=\sum_{j\ge1}|x_j|^2$.

[F14] [[def-square-summable-family-on-an-arbitrary-index-set]]: The coordinate vector $e_j$ has value $1$ in coordinate $j$ and $0$ elsewhere.

[F2] [[lem-square-summable-sequences-form-a-hilbert-space]]: The real sequence space $\ell^2(\mathbb N,\mathbb R)$ with its canonical inner product and norm is complete and is a real Hilbert space.

[F3] [[def-bounded-linear-operator]]: A linear map $T$ between normed spaces is bounded when some real $C\ge0$ satisfies $\|Tx\|\le C\|x\|$ for every $x$.

[F4] [[def-operator-norm]]: For a bounded linear map $T$, $\|T\|=\sup\{\|Tx\|:\|x\|\le1\}$.

[F5] [[def-linear-basis]]: An ordered basis of a vector space is an injective finite list whose image is a basis.

[F6] [[lem-finite-rank-operators-are-compact]]: A bounded linear operator whose range has a finite ordered basis is compact.

[F7] [[def-banach-space]]: A normed space is Banach when it is complete in its norm metric.

[F8] [[thm-norm-limit-of-compact-operators-is-compact]]: Assuming Countable Choice, a norm limit of compact operators into a Banach space is compact.

[F9] [[def-compact-linear-operator]]: A linear map is compact when every bounded input set has image with compact closure.

[F10] [[def-ip-compact-linear-inverse-model]]: The compact inverse model has real or complex Hilbert parameter and data spaces over one field and a compact linear forward map.

[F11] [[def-ip-unbounded-hilbert-moore-penrose-inverse]]: $D(K^\dagger)=R(K)\oplus R(K)^\perp$, and on $r+z$ with $r\in R(K)$ and $z\in R(K)^\perp$, $K^\dagger(r+z)$ is the unique minimum-norm preimage of $r$.

[F12] [[def-ip-noise-level-free-parameter-rule]]: A noise-level-free parameter is a function of the observed datum and fixed operator/family only; it does not take an exact datum or noise bound as input.

[F13] [[def-linear-map]]: A function $T:V\to W$ over one field is linear when $T(au+bv)=aT(u)+bT(v)$ for all scalars $a,b$ and vectors $u,v$.

## Counterexample

1.1 Coordinatewise linearity gives $K$ and every $K_N$ as linear maps by [F13]. For every $x\in\ell^2$, [F1] gives $\|Kx\|_2^2=\sum_{j\ge1}j^{-2}|x_j|^2\le\|x\|_2^2$ and $\|K_Nx\|_2^2\le\|x\|_2^2$, so [F3] makes both bounded linear operators. For $\|x\|_2\le1$, [F1] also gives $\|(K-K_N)x\|_2^2=\sum_{j>N}j^{-2}|x_j|^2\le(N+1)^{-2}$. Hence [F4] gives $\|K-K_N\|\le1/(N+1)$. The range of $K_N$ is exactly the span of $e_1,\ldots,e_N$: its outputs are supported in these coordinates, and $K_N(je_j)=e_j$ for each $j\le N$ by [F14]. These vectors form an ordered basis by [F5], so each $K_N$ has finite rank. [F1, F3, F4, F5, F13, F14]

2.1 By [F6], every $K_N$ is compact in the sense of [F9]. By [F2] and [F7], the codomain $\ell^2$ is Banach; [A1] supplies the Countable Choice hypothesis of [F8]. Since $\|K-K_N\|\to0$ by step 1.1, [F8] implies that $K$ is compact and hence satisfies the compact-model interface [F10]. [A1, step 1.1, F2, F6, F7, F8, F9, F10]

3.1 The coordinate formula makes $K$ injective. If $y=Kx$, then $x_j=jy_j$ and $(jy_j)_{j\ge1}\in\ell^2$; conversely, whenever $(jy_j)_{j\ge1}\in\ell^2$, taking $x_j=jy_j$ gives $Kx=y$. Thus $R(K)=\{y:(jy_j)_{j\ge1}\in\ell^2\}$. Each $e_j/j=K e_j$ lies in $R(K)$, and these vectors are linearly independent because they have distinct nonzero coordinates by [F14]; hence $R(K)$ is infinite-dimensional. Any vector in $R(K)^\perp$ has every coordinate zero, so $R(K)^\perp=\{0\}$ and $D(K^\dagger)=R(K)$. By [F11], $K^\dagger y=(jy_j)_{j\ge1}$. For each fixed $\alpha>0$, $R_\alpha$ is bounded since its sum has finitely many terms and $\|R_\alpha y\|_2^2\le\lfloor1/\alpha\rfloor^2\|y\|_2^2$. For $y\in D(K^\dagger)$, $R_\alpha y$ is the initial truncation of the square-summable sequence $K^\dagger y$, so as $\alpha\downarrow0$ these truncations converge in $\ell^2$ to $K^\dagger y$. The stated family is therefore pointwise regularizing. [step 2.1, F1, F11, F14, algebra]

4.1 The rule $\alpha$ is positive and depends only on $z$, so it is noise-level-free by [F12]. Take exact datum $y=0$ and noisy datum $z_j=e_j/j=K e_j$. By [F1] and [F14], $\delta_j=\|z_j-y\|_2=1/j\to0$, while $\alpha(z_j)=1/j^2$ and $\lfloor1/\alpha(z_j)\rfloor=j^2$. Therefore $R_{\alpha(z_j)}z_j=e_j$, whereas $K^\dagger y=0$, and the reconstruction error is $1$ for every $j$. The claimed worst-case limit fails at $y=0$, since its supremum is at least $1$ along the null sequence $\delta_j$. [given, F1, F11, F12, F14, step 3.1, construct, algebra] ∎
