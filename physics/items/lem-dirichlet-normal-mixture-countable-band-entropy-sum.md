---
id: lem-dirichlet-normal-mixture-countable-band-entropy-sum
kind: lemma
title: "The dyadic scale bands satisfy the weighted entropy condition"
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 4
deps:
  - lem-dirichlet-normal-mixture-sieve-entropy
  - lem-hellinger-distance-controls-l1-and-total-variation
  - def-axiom-of-choice
proof_strategy: direct
axiom_use: "AC is inherited from the compact-location entropy and mixture-density interfaces used in the proof."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Subhashis Ghosal and Aad W. van der Vaart, Posterior convergence rates of Dirichlet mixtures at smooth densities, §9 proof of Theorem 1"
      url: "https://arxiv.org/pdf/0708.1885"
    - title: "Subhashis Ghosal and Aad W. van der Vaart, Fundamentals of Nonparametric Bayesian Inference, §6.3.1 proof of Theorem 6.6"
      url: "https://diamhomes.ewi.tudelft.nl/~avandervaart/books/bayesianstatistics"
---

## Statement

Fix $A\ge1$ independently of $n$. The constants in the entropy estimates
and the required fixed $M_0$ may depend on $A$. Let $0<a_2<a_1<1$,
$n^{-a_1}\lesssim\sigma_n\lesssim n^{-a_2}$, and
$\gamma>1$. Suppose $G$ is a probability measure on $(0,\infty)$ satisfying
$G((0,s])\le C e^{-\beta s^{-\gamma}}$ for all sufficiently small $s>0$.
Let $s_n\to0$ with $s_n/\sigma_n\to\infty$. For integers $j$ with
$2^j\sigma_n\le s_n$, put $\widetilde r_n:=\min\{r_n,1/4\}$ and
$$\mathcal P_{n,j}:=\{p_{F,\sigma}:F([-A,A]^c)\le\widetilde r_n^2/8, \quad 2^j\sigma_n\le\sigma<2^{j+1}\sigma_n,\quad \sigma\le s_n\},$$
and let $\pi_{n,j}$ be the prior mass of the corresponding parameter band,
so $\pi_{n,j}\le G([2^j,2^{j+1}))$. Suppose $r_n>0$ and, for some fixed
sufficiently large $M_0$ (allowed to depend on $A$) and fixed
$\eta>\gamma/[2(\gamma-1)]$,
$$r_n\ge M_0\max\{(n\sigma_n)^{-1/2}\log n, n^{-1/2}\sigma_n^{-\eta}\}.$$
With $N_{n,j}=N(r_n,\mathcal P_{n,j},h)$, one has
$$e^{-nr_n^2}\sum_{j:2^j\sigma_n\le s_n}\sqrt{N_{n,j}\pi_{n,j}}\longrightarrow0.$$
If instead $G$ is supported on a compact subset of $(0,\infty)$, the same
conclusion holds under the first rate term alone.

## Facts & Assumptions

**Given:** The fixed cutoff $A\ge1$, AC, the polynomial bounds on $\sigma_n$, the lower scale-tail bound on $G$, the dyadic scale bands, and the compact-location entropy estimate.

[A1] Assume AC for the compact-location entropy and mixture-density interfaces. [[def-axiom-of-choice]]

[F1] [[lem-dirichlet-normal-mixture-sieve-entropy]]: for compactly supported
mixing laws on $[-A,A]$, $0<u<1/4$, and $\tau\le\sigma\le2\tau$,
$$\log N(u,\{p_{F,\sigma}\},h)\le C(A/\tau\vee1)[\log(C(A/\tau\vee1)/u)]^2.$$

[F2] [[lem-hellinger-distance-controls-l1-and-total-variation]]: for probability densities, Hellinger distance is a metric and $h^2(p,q)\le\int|p-q|d\lambda$.

## Proof

**Given:** The hypotheses in the Statement.

1.1 Write $x_n=nr_n^2$ and $J_n=\max\{j:2^j\sigma_n\le s_n\}$. Since $s_n\to0$ and $\sigma_n\ge c n^{-a_1}$, $J_n=O(\log n)$. Put $u_n:=\min\{r_n/2,1/8\}$. If $r_n\le1/4$, truncate a mixing law to $[-A,A]$ and normalize it there; the removed mass is at most $r_n^2/8$, so its mixture changes by $L^1$ at most $r_n^2/4$ and by Hellinger at most $r_n/2$ using [F2]. The compact cover at radius $u_n=r_n/2$ then covers $\mathcal P_{n,j}$ at radius $r_n$. If $r_n>1/4$, the sieve tail is at most $1/128$, so truncation changes Hellinger distance by at most $1/8$; the compact cover at radius $u_n=1/8$ then covers the class at radius at most $1/4<r_n$. Thus in both cases $N_{n,j}\le N(u_n,\mathcal P_{A,2^j\sigma_n},h)$. The rate lower bound implies $\log(1/u_n)\le C\log n$ and $x_n\ge M_0^2\sigma_n^{-1}(\log n)^2, \qquad x_n\ge M_0^2\sigma_n^{-2\eta}.$ For $0\le j\le J_n$, [F1] bounds $\log N_{n,j}\le C\sigma_n^{-1}(\log n)^2$, because the band lower scale is at least $\sigma_n$. Since $\pi_{n,j}\le1$, these terms contribute at most $C\log n\exp\{C\sigma_n^{-1}(\log n)^2/2-x_n\},$ which tends to zero for sufficiently large $M_0$. [A1, F1, F2, given, algebra]

1.2 For negative indices write $j=-k$, $k\ge1$. For all sufficiently large $k$, the scale-tail premise gives $\pi_{n,-k}\le C\exp(-c2^{\gamma k})$. Also [F1] and $u_n\ge c n^{-1/2}\log n$ imply $\log N_{n,-k}\le C\sigma_n^{-1}2^k(\log n+k)^2.$ Choose $\theta>0$ and $\gamma_0<\gamma$ sufficiently close to $0$ and $\gamma$, respectively, so $q:=1+\theta<\gamma_0$ and $\rho:=\gamma_0/(\gamma_0-q)<2\eta$. Since $(\log n+k)^2\le C_\theta(\log n)^2 2^{\theta k}$ and $e^{-c2^{\gamma k}}\le e^{-c'2^{\gamma_0 k}}$, the logarithm of each summand is at most $C K_n2^{qk}-c'2^{\gamma_0k},\qquad K_n:=\sigma_n^{-1}(\log n)^2.$ Enlarging $C$ handles the finitely many smaller $k$. [A1, F1, given, algebra]

2.1 Put $p=\gamma_0/q>1$. As a function of $v=2^{qk}\ge1$, the exponent $CK_nv-c'v^p$ has maximum at most $C'K_n^{p/(p-1)}=C'K_n^\rho$, by differentiation. The maximizing scale is a constant multiple of $K_n^{1/(p-1)}$, so there are $O(\log K_n)$ indices up to any fixed multiple of that scale; their sum has logarithm at most $C''K_n^\rho$. Choose a fixed multiple $L$ large enough that for $v\ge L K_n^{1/(p-1)}$ the negative term is at least twice the positive term. Grouping the subsequent dyadic $v$ values gives a convergent geometric tail, also bounded by $\exp(C''K_n^\rho)$. Therefore $\log\sum_{k\ge1}\sqrt{N_{n,-k}\pi_{n,-k}} \le C''\sigma_n^{-\rho}(\log n)^{2\rho}.$ Because $\rho<2\eta$ and $\sigma_n\le C n^{-a_2}$, this is $o(\sigma_n^{-2\eta})=o(x_n)$. The negative-index contribution therefore vanishes after multiplication by $e^{-x_n}$. [step 1.2, given, algebra]

3.1 If $G$ is supported on $[g_-,g_+]$ with $g_->0$, only a fixed finite number of dyadic indices have positive mass. Their lower scales are at least $g_-\sigma_n/2$, so [F1] at radius $u_n$ bounds each log covering number by $C\sigma_n^{-1}(\log n)^2$. The first rate term gives $x_n\ge M_0^2\sigma_n^{-1}(\log n)^2$, and the finite weighted sum tends to zero for sufficiently large $M_0$. [A1, F1, step 1.1, given, algebra] ∎
