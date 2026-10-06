---
id: lem-profile-moment-generators-and-shifted-character-basis
kind: lemma
title: "The profile-moment generators in the shifted-character basis"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
proof_strategy: direct
deps: [thm-shifted-character-basis-and-weight-filtration, def-shifted-character-observables-and-profile-moments, def-partition-young-diagram-and-conjugate-partition, def-monic-probabilists-hermite-polynomials]
provenance:
  statement: literature-derived
  proof: literature-derived
sources:
  references:
    - title: "Vladimir Ivanov and Grigori Olshanski, Kerov's central limit theorem for the Plancherel measure on Young diagrams, arXiv:math/0304010; survey-paper version in Symmetric Functions 2001, NATO Science Series II 74 (2002), 93-151"
      url: "https://arxiv.org/pdf/math/0304010"
      locator: "Props. 3.4-3.7, printed pp. 17-19, and Cor. 2.8, p. 14 (top components and the Lagrange-inversion formula); Prop. 4.9-4.10, pp. 22-23 (top-term multiplication and the weight filtration)"
---

## Statement

Let $B(u):=1+\sum_{j\ge2}p_{j-1}^\#u^j$ be the formal power series with coefficients in $A$. Then for every $k\ge2$
$$\tilde p_k=[u^k]\bigl(B(u)^k\bigr)+\langle\text{terms of weight }\le k-1\rangle ,$$
the top weight component of $\tilde p_k$ being exactly the weight-$k$ component of the coefficient of $u^k$ in $B(u)^k$, on which $p_{k-1}^\#$ occurs with coefficient $k$. Consequently the linear functionals
$$L_k\bigl(p_\rho^\#\bigr):=\begin{cases}1,&k\ \text{even and}\ \rho=(1^{k/2}),\\0,&\text{otherwise,}\end{cases}$$
defined by linear extension on the full basis of $A$ (with $L_0(1)=1$), then restricted to weight-homogeneous elements of weight $k$, are multiplicative: if $f$ and $g$ are weight-homogeneous of weights $k'$ and $k-k'$, then $L_k(fg)=L_{k'}(f)L_{k-k'}(g)$; and
$$L_{2m}(\tilde p_{2m})=\binom{2m}{m},\qquad L_k(\tilde p_k)=0\ (k\ \text{odd}).$$

## Facts & Assumptions

**Given:** the algebra $A=\mathbb R[\tilde p_2,\tilde p_3,\dots]$ with the observables $p_\rho^\#$ and the profile moments $\tilde p_k=k(k-1)\int x^{k-2}\sigma_\omega\,dx$ of [[def-shifted-character-observables-and-profile-moments]], and the formal series $B(u)=1+\sum_{j\ge2}p_{j-1}^\#u^j$.

[F1] (IvOl Prop. 3.7, imported with the locator above.) For every $k\ge2$, $\tilde p_k=[u^k]\{B(u)^k\}$ plus a polynomial in $p_1^\#,\dots,p_{k-2}^\#$ of total weight at most $k-1$; this is the inversion of the top-weight relation of IvOl Prop. 3.5, obtained there by Lagrange inversion.

[F2] The weight filtration and top-term rule: the weights $\operatorname{wt}(p_\rho^\#)=|\rho|+\ell(\rho)$ define an algebra filtration coinciding with $\operatorname{wt}(\tilde p_k)=k$, and $p_\sigma^\#p_\tau^\#=p_{\sigma\cup\tau}^\#+(\text{lower weight})$ ([[thm-shifted-character-basis-and-weight-filtration]]).

[F3] $\deg_1(p_\rho^\#)=|\rho|+m_1(\rho)\le\operatorname{wt}(p_\rho^\#)$, and $\deg_1$ is compatible with multiplication ([[thm-shifted-character-basis-and-weight-filtration]]). The top-term rule applied repeatedly also gives $(p_1^\#)^m=p_{(1^m)}^\#+(\text{lower weight})$.

## Proof

**Proof technique:** direct.

1.1 Expansion: by [F1], $\tilde p_k=[u^k]\{B(u)^k\}+\text{(terms of weight }\le k-1\text{)}$. Every product appearing in $[u^k]\{B(u)^k\}$ has the form $p_{j_1-1}^\#\cdots p_{j_i-1}^\#$ with $j_1+\cdots+j_i=k$ and total weight $j_1+\cdots+j_i=k$, and by the top-term rule of [F2] its weight-$k$ component is $p_{(j_1-1)\cup\cdots\cup(j_i-1)}^\#$ with coefficient $1$; in particular the term with a single factor ($i=1$, $j_1=k$) contributes $k\,p_{k-1}^\#$, so $p_{k-1}^\#$ occurs in the top weight component of $\tilde p_k$ with coefficient $k$. Hence the top weight component of $\tilde p_k$ is exactly the weight-$k$ component of $[u^k]\{B(u)^k\}$. [given, F1, F2, F3]

2.1 Multiplicativity of $L_k$: if $k$ is odd, $L_k=0$ and at least one of $L_{k'}$, $L_{k-k'}$ is zero, proving the identity. Suppose $k$ is even; let $f,g$ be weight-homogeneous of weights $k'$ and $k-k'$ and expand them in the basis $\{p_\sigma^\#\}$, which is possible by [[thm-shifted-character-basis-and-weight-filtration]](i). Since the weight filtration has level $r$ spanned by the $p_\sigma^\#$ with $\operatorname{wt}(p_\sigma^\#)\le r$ ([F2]), only $\sigma$ with $\operatorname{wt}(p_\sigma^\#)\le k'$ and $\tau$ with $\operatorname{wt}(p_\tau^\#)\le k-k'$ occur. The coefficient of $p_{(1^{k/2})}^\#$ in $fg$ is $\sum_{\sigma,\tau}f_\sigma g_\tau f^{(1^{k/2})}_{\sigma\tau}$; by [F3] and [F2], $f^\rho_{\sigma\tau}\ne0$ forces $\deg_1(p_\rho^\#)\le\deg_1(p_\sigma^\#)+\deg_1(p_\tau^\#)\le\operatorname{wt}(p_\sigma^\#)+\operatorname{wt}(p_\tau^\#)\le k$, so a nonzero contribution to $\rho=(1^{k/2})$, where $\deg_1(p_\rho^\#)=k$, forces equalities $\deg_1(p_\sigma^\#)=\operatorname{wt}(p_\sigma^\#)=k'$ and $\deg_1(p_\tau^\#)=\operatorname{wt}(p_\tau^\#)=k-k'$; as $\deg_1\le\operatorname{wt}$ with equality only for columns, this forces $\sigma=(1^{k'/2})$ and $\tau=(1^{(k-k')/2)}$, so $k$ and $k'$ are even and the coefficient is $f_\sigma g_\tau\cdot1$ (the top coefficient being $1$ by [F2]). Summing gives $L_k(fg)=L_{k'}(f)L_{k-k'}(g)$; when $k$ or $k'$ is odd, no such pair exists and both sides are $0$. [given, F2, F3, step 1.1, algebra]

2.2 Values on the generators: expand $[u^{2m}]B(u)^{2m}$ as a finite sum of products $p_{j_1-1}^\#\cdots p_{j_i-1}^\#$ with $j_l\ge2$ and $\sum_lj_l=2m$. By [F2], the only weight-$2m$ partition in such a product is $(j_1-1)\cup\cdots\cup(j_i-1)$, with coefficient one; lower-weight terms cannot contribute to $L_{2m}$. This partition is $(1^m)$ precisely when $i=m$ and all $j_l=2$. There are $\binom{2m}{m}$ ways to select the $m$ factors supplying $p_1^\#u^2$ among the $2m$ factors of $B(u)^{2m}$. Consequently $L_{2m}(\tilde p_{2m})=\binom{2m}{m}$ by step 1.1. For odd $k$, $L_k$ is zero by definition. [given, F2, step 1.1, algebra]

3.1 Conclusion: step 1.1 gives the stated expansion with its equivalent form and the description of the top weight component; step 2.1 gives multiplicativity of $L_k$; step 2.2 evaluates $L$ on the generators $\tilde p_k$ as the central binomial coefficients for even $k$ and $0$ for odd $k$. No choice principle is used: the imported IvOl statements are algebraic. [given, step 1.1, step 2.1, step 2.2] ∎ 