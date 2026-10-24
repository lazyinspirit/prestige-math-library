---
id: lem-ip-geometric-logarithmic-frozen-stopping-schedule
kind: lemma
title: Geometric parameters satisfy the logarithmic frozen stopping and growth conditions
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - lem-ip-logarithmic-index-conjugate-and-parameter-rates
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Barbara Kaltenbacher, Convergence rates under a range invariance condition with application to electrical impedance tomography
      url: https://arxiv.org/pdf/2403.18704
      locator: Theorem 7, equations (2.32)–(2.33), and the logarithmic parameter regime
dependency_level: 2
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
---

## Statement

Let $\nu,c,\alpha_*,\tau>0$, $0<\theta<1$ and $0<q<1$. Suppose $H$ is the conjugate of a truncated logarithmic source index with $H(u)\sim C(\log u)^{-\nu}$ as $u\to\infty$. Starting sufficiently far down the geometric sequence, relabel it as $\alpha_n=\alpha_*\theta^{n+n_0}$, $n\ge1$, and put $h_n=H(c/\alpha_n)$ and $\rho_n=\alpha_nh_n$. Then one can choose $n_0$ and $C_H>1$, fixed independently of noise, such that
$$h_n\le C_Hh_{n+1},\quad qC_H<1,\quad \frac{\rho_n}{\rho_{n+1}}\le M:=\theta^{-1}C_H\qquad(n\ge1).$$
The positive sequence $\rho_n$ decreases strictly to zero. For any positive target $w\downarrow0$, let $N(w)$ be the last index with $\rho_{N(w)}\ge\tau w$. For sufficiently small $w$ this index exists and is at least two, and
$$\tau w\le\rho_{N(w)}<M\tau w,\qquad h_{N(w)}\asymp[\log(1/w)]^{-\nu},\qquad \alpha_{N(w)}\asymp w[\log(1/w)]^\nu.$$
In particular $w=\delta^2$ gives $h_N\asymp[\log(1/\delta)]^{-\nu}$ and $\alpha_N\asymp\delta^2[\log(1/\delta)]^\nu$. The nominal endpoint target $w=\delta^2[\log(1/\delta)]^{-\nu}$ gives the same $h_N$ and $\alpha_N\asymp\delta^2$. In that endpoint case, an actual noise bound $\varepsilon_\delta^2=O(w)$ and tolerances $\eta_n\le C_\eta\rho_n$ give exactly the noise/tolerance scale required for applying a frozen recursion at this stopping index.

## Statement references

[[lem-ip-logarithmic-index-conjugate-and-parameter-rates]]

[Kaltenbacher, Theorem 7](https://arxiv.org/pdf/2403.18704)

## Facts & Assumptions

**Given:** The source index, fixed geometric sequence, contraction number and target in the Statement.

[F1] The truncated logarithmic conjugate is positive and finite at every positive argument, is nonincreasing, and has the stated asymptotic. [[lem-ip-logarithmic-index-conjugate-and-parameter-rates]]

## Proof

1.1 Positivity follows directly by testing the supremum at a sufficiently small $s>0$: the logarithmic index has $\psi(s)/s\to\infty$, so $\psi(s)-us>0$ for any fixed $u>0$. Finiteness and monotonicity follow from boundedness of $\psi$ and from its defining supremum. By [F1], $h_n\sim C[(n+n_0)|\log\theta|]^{-\nu}$, so $h_n/h_{n+1}\to1$. Fix any $C_H\in(1,1/q)$ and choose $n_0$ large enough that all ratios in the relabeled tail are at most $C_H$. Since $\alpha_n$ decreases strictly and $h_n$ is positive and nonincreasing, $\rho_n$ decreases strictly; its asymptotic is a positive constant times $\theta^{n+n_0}(n+n_0)^{-\nu}$, hence it tends to zero and its consecutive ratio is at most $M$. [F1, given, choose, algebra]

2.1 For sufficiently small $w$, $\rho_2\ge\tau w$, and strict decrease to zero gives a unique last index $N=N(w)\ge2$. It satisfies $\rho_N\ge\tau w>\rho_{N+1}$, so $\rho_N\le M\rho_{N+1}<M\tau w$. In particular $N\to\infty$ as $w\to0$. Taking logarithms in the geometric asymptotic gives $(N+n_0)|\log\theta|+\nu\log(N+n_0)=\log(1/w)+O(1)$. Since $\log N/N\to0$, it follows that $N\sim\log(1/w)/|\log\theta|$. Substituting in $h_N$ yields $h_N\asymp[\log(1/w)]^{-\nu}$, and $\alpha_N=\rho_N/h_N$ gives the asserted parameter scale. [step 1.1, given, algebra]

3.1 For $w=\delta^2$, $\log(1/w)=2\log(1/\delta)$, giving the first specialization. For $w=\delta^2[\log(1/\delta)]^{-\nu}$, $\log(1/w)=2\log(1/\delta)+\nu\log\log(1/\delta)\sim2\log(1/\delta)$, and the same formulas give $h_N\asymp[\log(1/\delta)]^{-\nu}$ and $\alpha_N\asymp\delta^2$. If $\varepsilon_\delta^2\le Cw$, use the positive noise upper bound $\sqrt{Cw}$, increasing $C$ if necessary. The stopping bracket then has fixed constants $\tau/C$ and $M$, while every earlier $\rho_n\ge\rho_N\ge\tau w$ and the stated tolerance bound is already $\eta_n\le C_\eta\alpha_nh_n$. Thus all parameter/noise/tolerance conditions hold at that upper-bound scale. [step 2.1, given, algebra] ∎
