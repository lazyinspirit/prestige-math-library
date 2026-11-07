---
dependency_level: 20
id: lem-dedekind-zeta-sharp-exceptional-zero-rectangle
kind: lemma
title: The sharp small-height exceptional-zero rectangle for a Dedekind zeta function
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
- lem-primitive-hecke-logarithmic-derivative-zero-sum-inequality
- lem-primitive-hecke-completed-function-is-entire-of-order-one
- lem-primitive-hecke-analytic-landau-page-family-core
- lem-ray-character-euler-product-positivity-inequalities
- thm-gamma-weierstrass-product
- cor-logarithmic-derivative-of-a-normally-convergent-product
- thm-weierstrass-convergence-holomorphic-functions
- cor-gamma-function-has-no-zeros
- thm-gamma-meromorphic-continuation
- thm-euler-mascheroni-constant-and-harmonic-asymptotic
- thm-minkowski-bound-for-ideal-classes
- lem-qa-13-pi-rational-bounds
- thm-number-field-discriminant-is-well-defined-and-nonzero
- def-absolute-norm-of-an-ideal
- lem-nonzero-number-field-ideal-has-finite-quotient
- def-number-field
- thm-logarithm-derivative-and-integral
- thm-monotonicity-of-the-integral
- thm-additivity-over-subintervals
- thm-natural-logarithm-laws
- def-axiom-of-choice
- def-countable-choice
justified_by: []
proof_strategy: direct
axiom_use: Full AC and Countable Choice are retained from the actual Minkowski, number-field and accepted
  Hecke analytic interfaces. AC supplies any inherited DC. The finite rational bounds and Gamma differentiation
  add no further choice; no global class-field or Stark theorem is used.
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
  - title: H. M. Stark, Some Effective Cases of the Brauer–Siegel Theorem
    url: https://gdz.sub.uni-goettingen.de/download/pdf/PPN356556735_0023/PPN356556735_0023.pdf
    locator: Lemma3, printed139–140 (physical146–147 of the353-page scan). Full article135–152 visually
      read. The complete local proof below uses the already reconstructed exact Hecke identity, not an
      imported Stark theorem.
---

## Statement

Assume the Axiom of Choice and Countable Choice. Let $K\ne\mathbb Q$ be a number field, let $n=[K:\mathbb Q]$, and put $D=|d_K|$. Then $D\ge3$ and $\zeta_K(s)$ has at most one zero occurrence, counted with its function-theoretic multiplicity, in the full closed rectangle
$$\operatorname{Re}s\ge1-\frac1{4\log D},\qquad |\operatorname{Im}s|\le\frac1{4\log D}.$$
If such a zero exists, it is real and simple. Both horizontal endpoints and the left boundary are included. No exceptional-zero lower bound or quadratic-field identification is asserted.

## Facts & Assumptions

**Given:** The stated number field and AC/CC branch.

[F1] For the trivial primitive character, the exact real logarithmic-derivative identity uses $Q=D$, all real parities zero, and the completed function $\Xi(s)=s(s-1)D^{s/2}\Gamma_{\mathbb R}(s)^{r_1}\Gamma_{\mathbb C}(s)^{r_2}\zeta_K(s)$. Its zero sum is absolutely locally uniformly convergent. The completion is nonzero at $0,1$; the separately proved boundary corollary puts all its zeros in $0<\operatorname{Re}s<1$. Gamma is holomorphic and nonzero on the right half-plane, so those are exactly the zeta zeros there, with multiplicity; the point $1$ is a pole rather than a zero. Conjugation preserves these zeros and their multiplicities. [[lem-primitive-hecke-logarithmic-derivative-zero-sum-inequality]] [[lem-primitive-hecke-completed-function-is-entire-of-order-one]] [[lem-primitive-hecke-analytic-landau-page-family-core]] [[thm-gamma-meromorphic-continuation]] [[cor-gamma-function-has-no-zeros]]

[F2] At every real $\sigma>1$, the full trivial Euler product gives $-\zeta_K'(\sigma)/\zeta_K(\sigma)\ge0$. [[lem-ray-character-euler-product-positivity-inequalities]]

[F3] The reciprocal-Gamma product is $\Gamma(z)^{-1}=ze^{\gamma z}\prod_{j\ge1}(1+z/j)e^{-z/j}$. Normal product convergence permits logarithmic differentiation off the zeros, and locally uniform holomorphic convergence permits termwise derivative convergence. [[thm-gamma-weierstrass-product]] [[cor-logarithmic-derivative-of-a-normally-convergent-product]] [[thm-weierstrass-convergence-holomorphic-functions]]

[F4] The decreasing harmonic sequence $H_m-\log m$ is bounded below by $1-\log2$ and converges to $\gamma$, so $\gamma\ge1-\log2>0$. [[thm-euler-mascheroni-constant-and-harmonic-asymptotic]]

[F5] Under AC the Minkowski bound gives a nonzero integral ideal in each ideal class of norm at most $(4/\pi)^{r_2}n!n^{-n}\sqrt D$. The discriminant and nonzero integral ideal norms are positive integers in absolute value, and the actual rational bounds give $3<\pi<22/7<4$. A number field is a finite extension of $\mathbb Q$, so degree one would mean $K=\mathbb Q$. [[thm-minkowski-bound-for-ideal-classes]] [[thm-number-field-discriminant-is-well-defined-and-nonzero]] [[def-absolute-norm-of-an-ideal]] [[lem-nonzero-number-field-ideal-has-finite-quotient]] [[lem-qa-13-pi-rational-bounds]] [[def-number-field]]

[F6] For $x>0$, $\log x=\int_1^xdt/t$, integrals are additive on adjacent intervals and preserve inequalities, and $\log(xy)=\log x+\log y$. [[thm-logarithm-derivative-and-integral]] [[thm-monotonicity-of-the-integral]] [[thm-additivity-over-subintervals]] [[thm-natural-logarithm-laws]]

[A1] AC and CC are the actual arithmetic and analytic supplier hypotheses. [[def-axiom-of-choice]] [[def-countable-choice]]

## Proof

**Given:** The data above, with $n=r_1+2r_2\ge2$.

1.1 Suppose $D\le2$ and put $C_n=(4/\pi)^{r_2}n!/n^n$. If $n=2$, then $C_n\le2/\pi<2/3$. If $n\ge3$, pair $j$ with $n+1-j$ to obtain $n!\le((n+1)/2)^n$, including the single middle factor when $n$ is odd. Therefore $n!/n^n\le(3/4)^n$, and [F5] gives $C_n\le(4/3)^{n/2}(3/4)^n=(\sqrt3/2)^n\le(\sqrt3/2)^3<2/3$; the last comparison is $243<256$ after squaring. In either case $C_n\sqrt D<(2/3)(3/2)=1$, contrary to the positive integer ideal norm supplied by [F5]. Thus $D\ge3$. Partitioning $[1,3]$ at $j/4$, $4\le j\le12$, [F6] gives $\log3\ge\sum_{j=5}^{12}1/j=28271/27720>1$. The same integral representation makes $\log$ strictly increasing, so $\ell=\log D\ge\log3>1$ and $\log\pi>\log3>1$. [A1, F5, F6, given, algebra]

2.1 On each compact subset of $\operatorname{Re}z>0$, the tail factors in [F3] differ from $1$ by $O(j^{-2})$ uniformly, so they form a normally convergent product. Its logarithmic derivative, followed by the locally uniform derivative rule in [F3], yields $$\psi(x)=-\gamma-\frac1x+\sum_{j\ge1}\left(\frac1j-\frac1{j+x}\right),\qquad \psi'(x)=\frac1{x^2}+\sum_{j\ge1}\frac1{(j+x)^2}>0\quad(x>0).$$ The tails of both series have a uniform $O(j^{-2})$ majorant on compact positive intervals. Telescoping gives $\psi(1)=-\gamma$ and $\psi(2)=1-\gamma$. For $1<\sigma<2$, each trivial real gamma factor therefore contributes $(\psi(\sigma/2)-\log\pi)/2<-\tfrac12\log\pi$, and each complex gamma factor contributes $\psi(\sigma)-\log(2\pi)<1-\gamma-\log(2\pi)\le-\log\pi$ by [F4] and [F6]. Every contribution is negative; since $n\ge2$, either $r_1\ge2$ or $r_2\ge1$, so their total is less than $-\log\pi<-1$ by step 1.1. Consequently $1/\sigma$ plus the total gamma contribution is strictly negative. [F1, F3, F4, F6, step 1.1, algebra]

3.1 Specialize the exact identity [F1] to the trivial primitive character at real $1<\sigma<2$, retaining its $1/\sigma$ term and the exact gamma derivatives. Rearranging it and using Euler positivity [F2] together with step 2.1 gives $$\sum_{\rho\in\mathcal Z}\operatorname{Re}\frac1{\sigma-\rho}<\frac1{\sigma-1}+\frac12\log D,$$ where $\mathcal Z$ is the full completed-zero multiset from [F1]. Each summand is positive because $\sigma>1>\operatorname{Re}\rho$, so any chosen finite subset can be retained for a lower bound. No relaxed field-dependent gamma error or Stark estimate has been used. [F1, F2, step 2.1, algebra]

4.1 Put $\sigma=1+1/\ell\in(1,2)$ by step 1.1; the right side of step 3.1 is $3\ell/2$. The rectangle lies in $\operatorname{Re}s>0$ because $\ell>1$, so [F1] identifies all its zeta zeros with members of $\mathcal Z$, each having real part less than $1$. If a zero $\rho=\beta+i\gamma$ there has $\gamma\ne0$, [F1] supplies its distinct conjugate with the same multiplicity. Set $x=(\sigma-\beta)\ell\in[1,5/4]$ and $y=|\gamma|\ell\in(0,1/4]$. Their pair contributes $$\frac{2(\sigma-\beta)}{(\sigma-\beta)^2+\gamma^2}=\frac{2\ell x}{x^2+y^2}\ge\frac{20}{13}\ell>\frac32\ell.$$ Indeed $x/(x^2+y^2)$ decreases in $x$ when $x>|y|$ and decreases in $y\ge0$, as its two partial derivatives show; its minimum on the stated closed parameter ranges is attained at $x=5/4,y=1/4$. This contradicts step 3.1. Thus every zero in the rectangle is real, including the horizontal and left endpoints. [F1, step 1.1, step 3.1, choose, algebra]

5.1 If there were two real zero occurrences in the rectangle, including multiplicity two at one point, each would have $\sigma-\beta\le5/(4\ell)$ with the same $\sigma$ as step 4.1. Their combined contribution to step 3.1 would be at least $2/(5/(4\ell))=8\ell/5>3\ell/2$, again a contradiction. Therefore at most one occurrence is possible, and if present it is real by step 4.1 and simple by this multiplicity argument. The comparisons allowed equality at every rectangle boundary. This proves the full Statement without an exceptional-zero lower bound or a class-field premise. [F1, step 3.1, step 4.1, algebra] ∎
