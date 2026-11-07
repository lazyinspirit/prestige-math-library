---
dependency_level: 9
id: thm-effective-real-zero-gap-for-quadratic-dedekind-zeta-functions
kind: theorem
title: An effective absolute real-zero gap for every quadratic Dedekind zeta function
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
proof_strategy: direct
deps:
- lem-quadratic-discriminant-character-and-class-number-normalization
- lem-quadratic-character-small-integer-counts-and-euler-sum-bound
- lem-real-dirichlet-zero-gap-from-positive-mellin-euler-sum
- def-natural-logarithm
- def-real-exponential-function-and-e
- lem-exponential-series-has-infinite-radius
- thm-natural-logarithm-laws
- thm-logarithm-derivative-and-integral
- thm-monotonicity-of-the-integral
- def-axiom-of-choice
- def-countable-choice
- thm-choice-implies-dependent-implies-countable-choice
- def-dependent-choice
- thm-riemann-zeta-continuation-to-the-right-half-plane
- thm-weierstrass-convergence-holomorphic-functions
- thm-identity-theorem-holomorphic-functions
justified_by: []
axiom_use: AC+CC from exact quadratic class-number/unit/count providers and the accepted
  eta interface. AC supplies inherited DC. The generic analytic deduction adds no
  choice.
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
  - title: W. Haneke, Über die reellen Nullstellen der Dirichletschen L-Reihen
    url: https://www.impan.pl/shop/publication/transaction/download/product/98676?download.pdf
    locator: Acta Arithmetica22(1973),391–421, complete scanned article visually read.
      Arithmetic reduced-form counts and positive Mellin/Euler estimates reconstructed
      locally; no theorem imported.
  - title: W. Haneke, Corrigendum
    url: https://www.impan.pl/shop/publication/transaction/download/product/101046?download.pdf
    locator: Acta Arithmetica31(1976),99–100, full two-page correction visually read;
      the ramified-prime reciprocal sum is retained.
---

## Statement

Assume AC and Countable Choice. Put $C_G=121(25/6)^6$, $C_A=1000+100C_G$ and $c_Q=e^{-400}/(540C_A)>0$. For every quadratic number field $F/\mathbb Q$ of absolute discriminant $q$, and every real $\beta\in(0,1)$ with $\zeta_F(\beta)=0$, one has
$$1-\beta>\frac{c_Q}{\sqrt q}.$$
In particular the full closed real interval $[1-c_Q/\sqrt q,1)$ is zero-free. The constant is absolute and effectively computable, both signatures and all zero multiplicities are covered, and no simplicity or uniqueness hypothesis is imposed. This is only a quadratic-over-$\mathbb Q$ estimate, not a general-field Stark descent or a relative Artin–Hecke identification.

## Facts & Assumptions

**Given:** The data and AC+CC hypotheses in the Statement.

[F1] For every quadratic field the full factorization is $\zeta_F=\zeta_{\mathbb Q}L(s,\chi_d)$ on the right half-plane, with primitive real nonprincipal $\chi_d$ modulo $q\ge3$ and $H=\sqrt q L(1,\chi_d)\ge1/3$. [[lem-quadratic-discriminant-character-and-class-number-normalization]]

[F2] The corrected finite Euler sum obeys $S_q\le3\log\log(H+3)+400$. Every real zero of $L(s,\chi_d)$ in $(0,1)$ has gap at least $C_A^{-1}\min\{1/\log q,L(1,\chi_d)e^{-S_q}\}$. [[lem-quadratic-character-small-integer-counts-and-euler-sum-bound]] [[lem-real-dirichlet-zero-gap-from-positive-mellin-euler-sum]]

[F3] The right-half-plane rational zeta continuation has only a simple pole at one. Locally uniform holomorphic limits are holomorphic, and identity extends equality. These public interfaces suffice for the eta argument replayed below. [[thm-riemann-zeta-continuation-to-the-right-half-plane]] [[thm-weierstrass-convergence-holomorphic-functions]] [[thm-identity-theorem-holomorphic-functions]]

[F4] Real exponentials have their convergent series, and logarithms their product and integral laws with order preservation. [[def-natural-logarithm]] [[def-real-exponential-function-and-e]] [[lem-exponential-series-has-infinite-radius]] [[thm-natural-logarithm-laws]] [[thm-logarithm-derivative-and-integral]] [[thm-monotonicity-of-the-integral]]

[A1] Full AC and CC are retained at the literal local supplier interfaces. AC implies DC and hence covers inherited DC requirements; no necessity or choice-free refinement is asserted. [[def-axiom-of-choice]] [[def-countable-choice]] [[thm-choice-implies-dependent-implies-countable-choice]] [[def-dependent-choice]]

## Proof

**Given:** The stated data.

1.1 Define $\eta(s)=\sum_{j\ge1}(-1)^{j-1}j^{-s}$. On a compact subset of $\operatorname{Re}s>0$, write $\delta_0>0$ for its minimum real part and $M_0$ for its maximum modulus. Finite partial summation, since alternating partial sums have modulus at most one and $(x^{-s})'=-sx^{-s-1}$, bounds every tail starting at $N$ by $N^{-\delta_0}(1+M_0/\delta_0)$. Thus the entire partial sums converge locally uniformly, so [F3] makes $\eta$ holomorphic. Absolute summation on $\operatorname{Re}s>1$ gives $\eta(s)=(1-2^{1-s})\zeta_{\mathbb Q}(s)$. Its right side is holomorphic on the right half-plane because the factor cancels the sole simple pole at one; identity [F3] extends the equality. For real $0<s<1$, the paired series $\sum_{j\ge1}((2j-1)^{-s}-(2j)^{-s})$ is positive, its first term strictly so; hence $\eta(s)>0$. The factor $1-2^{1-s}<0$, so $\zeta_{\mathbb Q}(s)<0$ and has no zero there. This replays the direct eta argument using the public inputs, rather than attributing this conclusion to an unrelated public cutoff Statement. [F3, F4, A1, construct, algebra]

2.1 A real zero $\beta\in(0,1)$ of $\zeta_F$ is therefore a zero of $L(s,\chi_d)$ by [F1] and step 1.1. Put $\tau=H+3$. Since $H\ge1/3$, $\tau\le10H$, and the exponential series gives $(\log x)^3/x\le27$ for $x\ge1$ (even the bound six follows from $e^u\ge u^3/6$). Thus $H/\log^3\tau\ge1/270$. Also $\log q=\int_1^qdt/t\le2\sqrt q$ by [F4]. Consequently $1/\log q\ge1/(2\sqrt q)$ and $L(1,\chi_d)e^{-S_q}\ge e^{-400}/(270\sqrt q)$ by [F1] and [F2]. Their minimum is at least the latter quantity. The zero-gap bound [F2] now yields $1-\beta\ge e^{-400}/(270C_A\sqrt q)>c_Q/\sqrt q$. The strict last inequality provides the full closed zero-free endpoint and does not use any simplicity, uniqueness, signature or relative-field assumption. [F1, F2, F4, step 1.1, algebra] ∎