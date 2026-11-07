---
dependency_level: 18
id: lem-primitive-hecke-logarithmic-derivative-zero-sum-inequality
kind: lemma
title: A uniform real logarithmic-derivative zero-sum inequality for primitive Hecke functions
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
- lem-primitive-hecke-completed-function-is-entire-of-order-one
- lem-primitive-hecke-canonical-product-and-real-zero-sum
- lem-gamma-logarithmic-derivative-on-a-right-vertical-strip
- def-axiom-of-choice
- def-countable-choice
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
axiom_use: AC and Countable Choice are retained from the accepted number-field, unit-domain and lattice/integration
  suppliers. The original nonvanishing DC hypothesis is obtained from AC by the proved choice implication.
sources:
  references:
  - title: A. R. Weiss, The least prime ideal, §1 equations(1.3)–(1.5)
    url: https://gdz.sub.uni-goettingen.de/download/pdf/PPN243919689_0338/PPN243919689_0338.pdf
    locator: Printed58–59, actual225-page scan physical63–64; formulation only, complete argument is reconstructed
      below from proved local suppliers.
  - title: Jürgen Neukirch, Algebraic Number Theory, VII§8
    url: https://web.math.ucsb.edu/~agboola/teaching/2021/fall/225A/neukirch.pdf
    locator: Printed496–503, full unit-domain Mellin and theta-tail construction; used through the independently
      accepted local Hecke suppliers.
---

## Statement

Assume AC and Countable Choice. For a number field $K$ of degree $n=r_1+2r_2$, a primitive finite-order Hecke character $\chi$, $Q=|d_K|N\mathfrak f_0$, and $\delta_\chi\in\{0,1\}$ indicating the trivial character, use the full completion with conductor power $Q^{s/2}$ and real/complex factors $\Gamma_{\mathbb R}(s+\epsilon_i)=\pi^{-(s+\epsilon_i)/2}\Gamma((s+\epsilon_i)/2)$ and $\Gamma_{\mathbb C}(s)=2(2\pi)^{-s}\Gamma(s)$. Let $\mathcal Z_\chi$ be all zeros, with multiplicity, of $\Xi_\chi(s)=[s(s-1)]^{\delta_\chi}\Lambda(s,\chi)$. For $s=\sigma+it$ with $\sigma>1$, the following exact identity holds:
$$-\operatorname{Re}\frac{L'}L(s,\chi)=\delta_\chi\operatorname{Re}\left(\frac1s+\frac1{s-1}\right)+\frac12\log Q+\sum_{i\text{ real}}\left(\frac12\operatorname{Re}\psi\!\left(\frac{s+\epsilon_i}{2}\right)-\frac12\log\pi\right)+\sum_{j\text{ complex}}\big(\operatorname{Re}\psi(s)-\log(2\pi)\big)-\sum_{\rho\in\mathcal Z_\chi}\operatorname{Re}\frac1{s-\rho}.$$
Here $\psi=\Gamma'/\Gamma$. The zero sum converges absolutely locally uniformly, and its summands are positive. For every $1<\sigma\le2$ one therefore has the explicit field-uniform estimate
$$-\operatorname{Re}\frac{L'}L(\sigma+it,\chi)\le\delta_\chi\operatorname{Re}\frac1{\sigma+it-1}+\frac12\log\!\big(Q(|t|+3)^n\big)+3n-\sum_{\rho=\beta+i\gamma\in\mathcal Z_\chi}\frac{\sigma-\beta}{(\sigma-\beta)^2+(t-\gamma)^2}.$$
This formula includes every completed-function zero, including possible boundary zeros, and makes no family zero-free or exceptional-zero assertion.

## Facts & Assumptions

**Given:** The primitive character, normalization and AC/CC branch in the Statement.

[F1] The completed function is entire after multiplication by $[s(s-1)]^{\delta_\chi}$, has no zero at $0,1$, and all its zeros have $0\le\operatorname{Re}\rho\le1$. The full gamma normalization is the one displayed there. [[lem-primitive-hecke-completed-function-is-entire-of-order-one]]

[F2] Its real logarithmic derivative equals the absolutely locally uniformly convergent sum $\sum_\rho\operatorname{Re}(1/(s-\rho))$ without a residual exponential constant. [[lem-primitive-hecke-canonical-product-and-real-zero-sum]]

[F3] On $1/2\le\operatorname{Re}z\le2$, $\operatorname{Re}\psi(z)\le\log(|\operatorname{Im}z|+3)+3$. [[lem-gamma-logarithmic-derivative-on-a-right-vertical-strip]]

[A1] AC and CC are retained through [F1]–[F2]. [[def-axiom-of-choice]] [[def-countable-choice]]

## Proof

**Given:** The stated data.

1.1 On $\sigma>1$ there are no zeros or poles of the factors in the completion [F1]. Logarithmically differentiate that displayed finite product. The conductor contributes $\tfrac12\log Q$, the pole-clearing factor contributes $\delta_\chi(1/s+1/(s-1))$, each real gamma factor contributes $\tfrac12\psi((s+\epsilon_i)/2)-\tfrac12\log\pi$, and each complex gamma factor contributes $\psi(s)-\log(2\pi)$; its constant $2$ has derivative zero. Taking real parts and substituting [F2] proves the exact identity. [A1, F1, F2, given, algebra]

2.1 If $1<\sigma\le2$, every real gamma argument has real part in $[1/2,3/2]$ and imaginary part $t/2$, while every complex argument has real part in $[1,2]$ and imaginary part $t$. By [F3], $\log(|t|/2+3)\le\log(|t|+3)$, and $\pi>1$, the whole gamma contribution is at most $(r_1/2+r_2)\log(|t|+3)+3(r_1/2+r_2)=\tfrac n2\log(|t|+3)+\tfrac32n$. Also $0<\operatorname{Re}(1/s)\le1$ and $\delta_\chi\le1\le n$. Thus its sum with the gamma error is at most $\tfrac52n\le3n$. For every zero $\rho=\beta+i\gamma$, [F1] gives $\sigma-\beta>0$, and $\operatorname{Re}(1/(s-\rho))=(\sigma-\beta)/((\sigma-\beta)^2+(t-\gamma)^2)>0$. Substituting these bounds into step 1.1 proves the inequality with the full absolutely convergent zero sum from [F2]. [F1, F2, F3, step 1.1, algebra] ∎
