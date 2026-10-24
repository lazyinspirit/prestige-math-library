---
id: lem-shifted-character-multiplication-by-p-k
kind: lemma
title: "Shifted character products: exact for $p_1^\\#$ and leading terms for $p_k^\\#$"
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
proof_strategy: direct
deps: [thm-shifted-character-basis-and-weight-filtration, def-shifted-character-observables-and-profile-moments, def-partition-young-diagram-and-conjugate-partition, def-factorial-and-falling-factorial]
provenance:
  statement: literature-derived
  proof: literature-derived
sources:
  references:
    - title: "Vladimir Ivanov and Grigori Olshanski, Kerov's central limit theorem for the Plancherel measure on Young diagrams, arXiv:math/0304010; survey-paper version in Symmetric Functions 2001, NATO Science Series II 74 (2002), 93-151"
      url: "https://arxiv.org/pdf/math/0304010"
      locator: "Corollary 4.8 (of the proof of Proposition 4.7), printed p. 22 (the equality case for the degree filtration); Props. 4.11 and 4.12 with proofs, printed pp. 23-24 (the exact $p_1^\\#$ product and the leading terms for $p_k^\\#$); formula (4.1), p. 20"
    - title: "Vladimir Ivanov and Sergei Kerov, The algebra of conjugacy classes in symmetric groups and partial permutations, arXiv:math/0302203; J. Math. Sci. 107 (2001), 3871-3900"
      url: "https://arxiv.org/pdf/math/0302203v1"
      locator: "Props. 6.2-6.3 and Remark 6.4, printed pp. 5-7 (structure constants and the equality case)"
---

## Statement

For every partition $\sigma$:

(i) (exact, all orders) $p_\sigma^\#p_1^\#=p_{\sigma\cup1}^\#+|\sigma|\,p_\sigma^\#$;

(ii) for every $k\ge2$,
$$p_\sigma^\#p_k^\#=p_{\sigma\cup k}^\#+\begin{cases}k\,m_k(\sigma)\,p_{(\sigma\setminus k)\cup1^k}^\#, & m_k(\sigma)\ge1,\\[1pt]0,&m_k(\sigma)=0,\end{cases}+\langle\text{terms of strictly smaller }\deg_1\rangle,$$
where $\sigma\setminus k$ removes one part equal to $k$.

In particular, for $m\ge1$, $k\ge2$,
$$p_{(k^m)}^\#p_k^\#=p_{(k^{m+1})}^\#+km\,p_{(k^{m-1},1^k)}^\#+\langle\text{lower }\deg_1\text{ terms}\rangle,$$
which is the recurrence behind the Hermite leading-term lemma. All exponents $\sigma\cup k$, $(\sigma\setminus k)\cup1^k$ are partitions in the sense of [[def-partition-young-diagram-and-conjugate-partition]].

## Facts & Assumptions

**Given:** partitions $\sigma,\tau$ and $k\ge2$; the observables $p_\rho^\#$ ([[def-shifted-character-observables-and-profile-moments]]); the algebra $A$ with the basis $\{p_\rho^\#\}$, the structure constants $f^\rho_{\sigma\tau}$, the filtration $\deg_1(p_\rho^\#)=|\rho|+m_1(\rho)$, and the top-term rule ([[thm-shifted-character-basis-and-weight-filtration]]); $z_\rho=\prod_kk^{m_k(\rho)}m_k(\rho)!$ and the partial-permutation structure constants $g^\rho_{\sigma\tau}$.

[F1] (i) For $|\sigma|=r$ and $n\ge r+1$ one has $p_\sigma^\#(\lambda)=n^{\downarrow r}\chi^\lambda_{\sigma\cup1^{n-r}}/\dim\lambda$ and $p_{\sigma\cup1}^\#(\lambda)=n^{\downarrow(r+1)}\chi^\lambda_{\sigma\cup1^{n-r}}/\dim\lambda$ ([[def-shifted-character-observables-and-profile-moments]]); the falling factorial satisfies $n^{\downarrow r}\cdot n=n^{\downarrow(r+1)}+n^{\downarrow r}r$ ([[def-factorial-and-falling-factorial]]).

[F2] (ii) Structure constants: $f^\rho_{\sigma\tau}=\frac{z_\sigma z_\tau}{z_\rho}g^\rho_{\sigma\tau}$ and $f^{\sigma\cup\tau}_{\sigma\tau}=1$ ([[thm-shifted-character-basis-and-weight-filtration]]). For the degree-one equality case, IvOl Corollary 4.8 (of the proof of Proposition 4.7), with $J=\{1\}$, says no fixed point of $s_1$ or $s_2$ lies in $X_1\cap X_2$, while every point of $X_1\cap X_2$ is fixed by $s=s_1s_2$. Combined with the partial-permutation count in IK Proposition 6.2, this forces the overlap description used in step 1.2: it is a union of common nontrivial cycles of $s_1$ and $s_2^{-1}$. The structure constants and the exact Corollary 4.8 locator are recorded in the source references above.

## Proof

**Proof technique:** direct.

1.1 Exact product with $p_1^\#$: fix $\lambda\vdash n$ with $n\ge|\sigma|+1$ (for $n<|\sigma|$ both sides vanish; at $n=|\sigma|$ one has $p_{\sigma\cup1}^\#=0$ and $p_1^\#=|\sigma|$, so the identity holds directly). By [F1], $p_\sigma^\#(\lambda)p_1^\#(\lambda)=n^{\downarrow r}\chi^\lambda_{\sigma\cup1^{n-r}}/\dim\lambda\cdot n$ and $p_{\sigma\cup1}^\#(\lambda)=n^{\downarrow(r+1)}\chi^\lambda_{\sigma\cup1^{n-r}}/\dim\lambda$, so the claim reduces to $n^{\downarrow r}\cdot n=n^{\downarrow(r+1)}+n^{\downarrow r}r$, which is the defining recursion $n^{\downarrow(r+1)}=n^{\downarrow r}(n-r)$ rewritten; hence $p_\sigma^\#p_1^\#=p_{\sigma\cup1}^\#+|\sigma|p_\sigma^\#$. [given, F1, algebra]

1.2 Equality-case analysis: let $\rho$ be such that $f^\rho_{\sigma(k)}\ne0$ and $\deg_1(p_\rho^\#)=\deg_1(p_\sigma^\#)+k$, where $\tau=(k)$ and $\deg_1(p_k^\#)=k$ because $m_1((k))=0$ for $k\ge2$. By [F2] the equality case forces the overlap $X_1\cap X_2$ to consist of common nontrivial cycles of $s_1$ and $s_2^{-1}$; since $s_2$ is a single $k$-cycle, either $X_1\cap X_2=\emptyset$, giving $\rho=\sigma\cup k$ with coefficient $f^{\sigma\cup k}_{\sigma(k)}=1$, or $X_1\cap X_2$ is one common $k$-cycle, which requires $m_k(\sigma)\ge1$, gives $\rho=(\sigma\setminus k)\cup1^k$, and forces $X_2\subseteq X_1$. [given, F2, algebra]

1.3 Coefficient in the second case: in the case $\rho=(\sigma\setminus k)\cup1^k$ abbreviate $m:=m_k(\sigma)\ge1$ and $\ell:=m_1(\sigma)$; a direct computation from $z_\mu=\prod_ii^{m_i(\mu)}m_i(\mu)!$ gives $\frac{z_\rho}{z_\sigma z_{(k)}}=\frac{(k+\ell)!}{\ell!\,k^2m}$, so by [F2] the identity $f^\rho_{\sigma(k)}=km$ is equivalent to $g^\rho_{\sigma(k)}=\frac{(k+\ell)!}{\ell!\,k}$. The partial-permutation count recorded in [F2] in this case is the number of ways to choose a $k$-cycle inside the $(k+\ell)$-point fixed-point set of $w_\rho$: all other cycles of $w_\rho$ must remain unchanged: choose the $k$-point support, $\binom{k+\ell}{k}=\frac{(k+\ell)!}{k!\,\ell!}$ ways, and a $k$-cycle on it, $(k-1)!$ ways, giving $g^\rho_{\sigma(k)}=\frac{(k+\ell)!}{\ell!\,k}$ as required; hence $f^\rho_{\sigma(k)}=k\,m_k(\sigma)$, the factor $m=m_k(\sigma)$ counting the choice of which $k$-part of $\sigma$ is the common cycle. [given, F2, algebra]

2.1 Conclusion: every other contributing $\rho$ has $\deg_1(p_\rho^\#)<\deg_1(p_\sigma^\#)+k$ by the definition of the equality case in step 1.2, so the expansion takes the displayed form; specialising $\sigma=(k^m)$ gives $m_k(\sigma)=m$ and $(\sigma\setminus k)\cup1^k=(k^{m-1},1^k)$, which is the stated recurrence. No choice principle is used. [given, step 1.1, step 1.2, step 1.3] ∎ 