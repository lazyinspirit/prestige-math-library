---
id: lem-power-series-coefficients-are-determined-by-real-values
kind: lemma
title: Banach-valued power series are determined by their real values
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 0
deps: [def-series-and-absolute-convergence-in-a-normed-space, def-norm-and-normed-space, rem-real-and-complex-normed-space-convention]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Klaus-Jochen Engel and Rainer Nagel, One-Parameter Semigroups for Linear Evolution Equations, Graduate Texts in Mathematics 194 (complete author-hosted monograph)"
      url: "https://www.math.uni-tuebingen.de/de/forschung/agfa/members/engel-nagel_one-parameter-semigroups.pdf/%40%40download/file/engel-nagel_one-parameter-semigroups.pdf"
      locator: 'Chapter II Section 4.a, the power-series extension and identity argument in Theorem 4.6, (c)$\Rightarrow$(a), printed pp. 104-105'
    - title: "Roland Schnaubelt, Evolution Equations, Karlsruhe Institute of Technology (2023/24 course, complete lecture notes)"
      url: "https://iana.math.kit.edu/downloads/iana3/schnaubelt/Skripten/evgl-skript.pdf"
      locator: 'Chapter 2 Section 2.3, the identity theorem for holomorphic functions quoted in Theorem 2.25, step 5, printed p. 64'
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Let $Y$ be a complex normed vector space
([[rem-real-and-complex-normed-space-convention]]), let $z_0\in\mathbb R$,
$r>0$, and let $(a_n)_{n\ge0},(b_n)_{n\ge0}\subseteq Y$ be such that both
series $\sum_{n\ge0}a_n(z-z_0)^n$ and $\sum_{n\ge0}b_n(z-z_0)^n$ converge in
$Y$ for every complex $z$ with $|z-z_0|<r$
([[def-series-and-absolute-convergence-in-a-normed-space]]). If
$$\sum_{n\ge0}a_n(t-z_0)^n=\sum_{n\ge0}b_n(t-z_0)^n$$
for every real $t$ with $|t-z_0|<r$, then $a_n=b_n$ for every $n$, and
consequently the two sums agree on the whole disc $|z-z_0|<r$. No choice
principle is used.

## Facts & Assumptions

**Given:** A complex normed vector space $Y$, a real centre $z_0$, a radius $r>0$, sequences $(a_n)_{n\ge0}$ and $(b_n)_{n\ge0}$ in $Y$ whose series converge on the disc $|z-z_0|<r$, the equality of the two sums at every real point $t$ of that disc, and the coefficient differences $d_n:=a_n-b_n$; powers are read with the convention $h^0=1$.

[L1] A series $\sum_{n=0}^\infty x_n$ in a normed space $V$ converges exactly when its partial sums $s_m=\sum_{n<m}x_n$ converge, and its sum is then $\lim_m s_m$; if $\sum_n x_n$ and $\sum_n y_n$ converge, then $\sum_n(x_n-y_n)$ converges to the difference of their sums, because its partial sums are the differences of the two partial sums ([[def-series-and-absolute-convergence-in-a-normed-space]]).

[L2] In a normed space $\|u+v\|\le\|u\|+\|v\|$ and $\|\lambda v\|=|\lambda|\,\|v\|$, and $\|w\|\ge0$ with $\|w\|=0$ only for $w=0$; consequently $|\|u\|-\|v\||\le\|u-v\|$ ([[def-norm-and-normed-space]]).

[L3] A complex normed space is a complex vector space with a norm satisfying the same separation and triangle clauses, absolute homogeneity being read with the complex modulus; every estimate that uses only these clauses is valid over either scalar field ([[rem-real-and-complex-normed-space-convention]]).

## Proof

**Proof technique:** direct.

1.1 For every real $h$ with $|h|<r$ the series $\sum_{n\ge0}d_nh^n$ converges in $Y$ and has sum $0$: at the point $z=z_0+h$ both given series converge, and the partial sums of the difference series are the differences of the corresponding partial sums of the two given series, so they converge to the difference of the two sums, which the hypothesis makes $0$. [L1, given, algebra]

1.2 Continuity at the centre. Let $(c_j)_{j\ge0}\subseteq Y$ and $\rho>0$ be such that $\sum_{j\ge0}c_jh^j$ converges for every real $h$ with $|h|<\rho$. Then its sum $S(h)$ satisfies $S(h)\to c_0$ as $h\to0$. Indeed, put $q:=\rho/2$. Convergence at $h=q$ makes the partial sums Cauchy, so their successive differences $c_jq^j$ tend to $0$; a sequence in a normed space that tends to $0$ is bounded, so there is $M<\infty$ with $\|c_j\|q^j\le M$ for all $j$. For $|h|\le q/2$ and every $N$ the tail bound $\|\sum_{j>N}c_jh^j\|\le\sum_{j>N}\|c_j\|\,|h|^j\le M\sum_{j>N}2^{-j}$ holds: the tail is the limit of its partial sums, the norm is continuous by [L2], and each partial sum is estimated by the triangle inequality. The finite part $\sum_{j\le N}c_jh^j$ tends to $c_0$ as $h\to0$, and $S(0)=c_0$. Hence for $\varepsilon>0$ one chooses $N$ with $M\sum_{j>N}2^{-j}<\varepsilon/2$ and then $h$ so small that $\|\sum_{j\le N}c_jh^j-c_0\|<\varepsilon/2$, giving $\|S(h)-c_0\|<\varepsilon$. [L1, L2, L3, algebra]

2.1 For every $n\ge0$: if $d_0=\cdots=d_{n-1}=0$, then $d_n=0$. Indeed, the series $T_n(h):=\sum_{j\ge0}d_{n+j}h^j$ converges at $h=0$ with sum $d_n$, and for $0<|h|<r$ the vanishing of the initial coefficients makes the partial sums of $\sum_{k\ge0}d_kh^k$ equal to $h^n$ times the partial sums of $T_n(h)$, so that $\sum_{k\ge0}d_kh^k=h^nT_n(h)$; by [step 1.1] the left side converges to $0$, hence $T_n(h)=0$ for $0<|h|<r$ and the series $T_n(h)$ converges for every real $|h|<r$. Applying [step 1.2] with $c_j:=d_{n+j}$ and any $\rho\in(0,r)$ gives $d_n=T_n(0)=\lim_{h\to0}T_n(h)=0$. [step 1.1, step 1.2, L1, algebra]

3.1 Induction on $n$: [step 2.1] says that the vanishing of $d_0,\dots,d_{n-1}$ forces the vanishing of $d_n$ for every $n$, so the set of indices with $d_n=0$ contains $0$ and is closed under successors; it is therefore all of $\mathbb N$. Hence $a_n=b_n$ for every $n$. [step 2.1, given]

4.1 For every complex $z$ with $|z-z_0|<r$ the two series are termwise identical, hence, both being convergent there, they have the same sum; this proves the agreement on the whole disc, and the argument used only limits, norm estimates and induction, so no choice principle was used. [step 3.1, given] ∎ 