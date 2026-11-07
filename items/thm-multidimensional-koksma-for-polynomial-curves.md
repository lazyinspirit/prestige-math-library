---
id: thm-multidimensional-koksma-for-polynomial-curves
kind: theorem
title: Multidimensional Koksma theorem with an analytic exponential coordinate and polynomial coordinates
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 4
deps:
  - def-countable-choice
  - def-uniform-distribution-mod-one-in-k-dimensions
  - def-scattered-sequence
  - def-delta-scattered-sequence
  - def-jointly-scattered-sequences
  - thm-weyl-criterion-on-the-k-torus
  - thm-metric-equidistribution-for-analytic-functions
  - lem-logarithmic-l2-decay-implies-almost-everywhere-cancellation
  - lem-exponential-family-high-derivative-separation
  - lem-van-der-corput-oscillatory-integral-estimate
  - def-real-analytic-function
  - thm-termwise-differentiation-of-a-real-power-series
  - cor-power-series-sums-are-smooth-with-coefficient-formula
  - thm-identity-theorem-for-real-analytic-functions-on-an-interval
  - cor-mean-value-theorem
  - lem-countable-sets-are-null
  - thm-finite-and-countable-subadditivity-of-measures
  - def-integrable-real-and-complex-functions-and-their-integrals
  - thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral
  - thm-lebesgue-measure-is-a-complete-measure
  - thm-lebesgue-measure-of-a-box-of-every-kind
  - thm-linearity-of-the-lebesgue-integral-on-l-one
  - thm-continuous-on-a-rectangle-is-riemann-integrable
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Vitaly Bergelson and Joel Moreira, Metric uniform distribution on analytic curves
      url: https://link.springer.com/content/pdf/10.1007/s40687-026-00647-6.pdf
      locator: "Theorem 1.10 and complete proof in §4.1, printed pp. 4–5 and 23–24"
    - title: Vitaly Bergelson and Joel Moreira, Metric uniform distribution on analytic curves (arXiv v2 author preprint)
      url: https://arxiv.org/pdf/2509.06909v2
      locator: "arXiv:2509.06909v2, Theorem 1.10 and complete proof in §4.1; full relevant passage inspected"
---

## Statement

Assume the Axiom of Countable Choice. Let $g:\mathbb R\to(1,\infty)$ be nonconstant and real analytic, let $b(n)$ be a scattered real sequence indexed by $n\ge1$ with $b(n)\to+\infty$, let $k$ be a positive integer, let $p_1,\ldots,p_k\in\mathbb R[x]$ be nonconstant polynomials, and let $a_i(n)$ be scattered real sequences indexed by $n\ge1$. For real powers use $g(x)^s=\exp(s\log g(x))$. Suppose either (i) the sequences $a_1,\ldots,a_k$ are jointly scattered, or (ii) the functions $1,p_1,\ldots,p_k$ are linearly independent over $\mathbb R$. Then for Lebesgue-almost every $x\in\mathbb R$, the sequence

$$\bigl(g(x)^{b(n)},a_1(n)p_1(x),\ldots,a_k(n)p_k(x)\bigr)_{n\ge1}$$

is uniformly distributed in $\mathbb T^{k+1}$.

## Statement references

[Bergelson–Moreira, Theorem 1.10](https://link.springer.com/content/pdf/10.1007/s40687-026-00647-6.pdf)

[Bergelson–Moreira, arXiv:2509.06909v2](https://arxiv.org/pdf/2509.06909v2)

## Facts & Assumptions

**Given:** The Axiom of Countable Choice, a nonconstant real-analytic $g:\mathbb R\to(1,\infty)$, a scattered sequence $b(n)\to+\infty$, nonconstant real polynomials $p_i$, scattered sequences $a_i$, and one of the two alternatives in the statement.

[F1] The $(k+1)$-torus Weyl criterion reduces uniform distribution to every nonzero integer character average ([[thm-weyl-criterion-on-the-k-torus]]).

[F2] Scatteredness controls the normalized sums of $w_\delta(a(n)-a(m))$ for every $0<\delta\le1$ ([[def-scattered-sequence]], [[def-delta-scattered-sequence]]).

[F3] Joint scatteredness is inherited by a subfamily, since its coefficient vector extends by zeros ([[def-jointly-scattered-sequences]]).

[F4] The preceding analytic metric theorem applies whenever the active functions are nonconstant analytic and either jointly scattered sequences or linear independence of $1$ and the functions is available ([[thm-metric-equidistribution-for-analytic-functions]]).

[F5] For $g>1$ with $g'\ne0$ on a compact interval and an integer $d\ge1$, the $d$th $x$-derivative of $g(x)^s$ separates any two exponents $s,t$ beyond a fixed threshold by at least a constant times $|s-t|$ ([[lem-exponential-family-high-derivative-separation]]).

[F6] If a real phase has $|\phi^{(d)}|\ge L\ge1$ on a bounded interval for $d\ge2$, the oscillatory integral is bounded by $C_dL^{-1/d}$; the pure-phase estimate follows from the proved higher-derivative estimate ([[lem-van-der-corput-oscillatory-integral-estimate]], proof step 2.2).

[F7] A logarithmic squared-L2 bound for unit-modulus averages implies almost-everywhere cancellation ([[lem-logarithmic-l2-decay-implies-almost-everywhere-cancellation]]).

[F8] A real-analytic function with zeros accumulating in an open interval vanishes throughout that interval ([[thm-identity-theorem-for-real-analytic-functions-on-an-interval]]).

[F9] A real function with zero derivative throughout an interval is constant there, by the mean value theorem ([[cor-mean-value-theorem]]).

[F10] Every at most countable subset of $\mathbb R$ has measure zero by an explicit interval cover ([[lem-countable-sets-are-null]]); a countable union of measurable null sets remains null by countable subadditivity ([[thm-finite-and-countable-subadditivity-of-measures]]).

[F11] A real-analytic function is locally a convergent power series and its derived series remains a power series on the same open radius ([[def-real-analytic-function]], [[thm-termwise-differentiation-of-a-real-power-series]]).

[F12] Uniform distribution in $\mathbb T^{k+1}$ means convergence of every half-open box frequency to product volume ([[def-uniform-distribution-mod-one-in-k-dimensions]]).

[F13] A positive real power is defined by $g^s=\exp(s\log g)$ ([[lem-exponential-family-high-derivative-separation]]).

[F14] The Axiom of Countable Choice, denoted $\mathrm{AC}_\omega$, says every countable family of nonempty sets has a choice function ([[def-countable-choice]]).

[F15] Under $\mathrm{AC}_\omega$, $\lambda_1$ is the complete one-dimensional Lebesgue measure and $\lambda_1([a,b])=b-a$ for real $a\le b$; hence if $I=[a,b]$ with $a<b$, then $\lambda_1(I)=|I|>0$ and $\lambda_1$ restricted to $I$, divided by $|I|$, is a probability measure ([[thm-lebesgue-measure-is-a-complete-measure]], [[thm-lebesgue-measure-of-a-box-of-every-kind]]).

[F16] Every continuous real function on a closed nondegenerate interval is Riemann integrable, and every bounded Riemann-integrable real function has the same Lebesgue and Riemann integrals under $\mathrm{AC}_\omega$; for a continuous complex function apply these statements to its real and imaginary parts and define its Lebesgue integral componentwise ([[thm-continuous-on-a-rectangle-is-riemann-integrable]], [[thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral]], [[def-integrable-real-and-complex-functions-and-their-integrals]]).

[F17] The Lebesgue integral is complex-linear on $L^1(\lambda_1)$ ([[thm-linearity-of-the-lebesgue-integral-on-l-one]]).

## Proof

1.1 Fix a nonzero integer frequency $v=(v_0,v_1,\ldots,v_k)\in\mathbb Z^{k+1}$ and set $F_N^v(x)=N^{-1}\sum_{n=1}^Ne\!\left(v_0g(x)^{b(n)}+\sum_{i=1}^kv_i a_i(n)p_i(x)\right)$. By [F1], it suffices to prove $F_N^v(x)\to0$ almost everywhere for each $v$. [F1, given]

1.2 Suppose $v_0\ne0$. The derivative $g'$ is real analytic by [F11]. It is not identically zero, because [F9] would otherwise make $g$ constant. By [F8], its zeros have no accumulation point in $\mathbb R$; they are therefore isolated and countable (assign to each zero the first rational interval in a fixed enumeration that contains it and no other zero). The complement can be covered by the countable family of compact intervals with rational endpoints on which $g'$ never vanishes. Fix one such interval $I$ of positive length. [F8, F9, F11, given, construct]

2.1 Suppose $v_0=0$ and let $J=\{i:v_i\ne0\}$, which is nonempty. If alternative (i) holds, the subfamily $(a_i)_{i\in J}$ is jointly scattered by [F3], and each function $v_i p_i$ is nonconstant and analytic. If alternative (ii) holds, the family $1,(v_i p_i)_{i\in J}$ is linearly independent: any relation among it would give one among $1,p_1,\ldots,p_k$. In either case [F4] applied to the active functions $v_i p_i$ and sequences $a_i$ gives their vector sequence uniform distribution almost everywhere. Its character with all active coordinates equal to $1$ is exactly $F_N^v$, so $F_N^v\to0$ almost everywhere. [F3, F4, step 1.1, algebra]

2.2 Put $d=1+\max_i\deg p_i$, so $d\ge2$. On $I$, [F5] supplies $B,C>0$ for this $g,d$. Since $b(n)\to+\infty$, choose $n_0$ with $b(n)\ge B$ for all $n\ge n_0$. For $n,m\ge n_0$ define $\Psi_{n,m}(x)=v_0(g(x)^{b(n)}-g(x)^{b(m)})+\sum_i v_i(a_i(n)-a_i(m))p_i(x)$. The $d$th derivative annihilates every polynomial term, hence [F5] gives $|\Psi_{n,m}^{(d)}(x)|\ge |v_0|C|b(n)-b(m)|$ for every $x\in I$. [F5, step 1.2, algebra]

3.1 Let $T=\max\{1,(|v_0|C)^{-1}\}$. If $|b(n)-b(m)|\ge T$, [F6] bounds $|\int_Ie(\Psi_{n,m}(x))dx|$ by a constant times $|b(n)-b(m)|^{-1/d}$. If the difference has modulus below $1$, the trivial bound is $|I|w_{1/d}(b(n)-b(m))$; if its modulus lies in $[1,T)$, then $w_{1/d}(b(n)-b(m))\ge T^{-1/d}$, so the trivial bound is again a constant multiple of that weight. Thus a constant $C_{v,I}$ gives $|\int_Ie(\Psi_{n,m}(x))dx|\le C_{v,I}w_{1/d}(b(n)-b(m))$ in every case. Since $d\ge2$, $1/d\in(0,1]$ is within the scatteredness range. [F2, F6, step 2.2, algebra]

4.1 Expand $|F_N^v|^2$ using [F17] and identify each continuous off-diagonal Lebesgue integral with its ordinary Riemann integral by [F16]; [F15] gives the diagonal integral $|I|$. Taking absolute values, at most $2n_0N$ off-diagonal pairs have an index below $n_0$ and contribute $O(1/N)$ by the trivial integral bound. For all remaining pairs use step 3.1 and [F2] for the scattered sequence $b$. For some $\eta>0$ this gives $\int_I|F_N^v(x)|^2\,d\lambda_1(x)\le C_{v,I}/N+C_{v,I}(\log N)^{-1-\eta}=O((\log N)^{-1-\eta})$. [F2, F15, F16, F17, step 3.1, algebra]

5.1 By [F15], $\mathbb P_I(A):=\lambda_1(A)/|I|$ is a probability measure on the Lebesgue-measurable subsets of $I$. The summands defining $F_N^v$ are continuous and have modulus one, and step 4.1 gives the required logarithmic $L^2(\mathbb P_I)$ bound after division by $|I|$. Thus [F7] proves $F_N^v\to0$ almost everywhere on $I$. [F7, F15, step 4.1, given]

6.1 The zero set of $g'$ is countable by step 1.2. The rational intervals in that step are countable, and the integer frequencies $v$ are countable. For each frequency and each such interval, the set where $F_N^v$ fails to converge to zero is Borel, since every $F_N^v$ is continuous and convergence to zero is expressed by countable $\varepsilon$-$N$ conditions; it is null by step 2.1 or step 5.1. By [F10], [F15] and countable subadditivity, these bad sets together with the zero set of $g'$ have null union. Outside this union, every nonzero character average tends to zero. [F1, F10, F15, step 2.1, step 1.2, step 5.1] ∎

## Remarks

This theorem treats one analytic exponential coordinate together with polynomial coordinates. Replacing those polynomials by general analytic functions is the separate open problem stated on this page.

## Remarks references

[[op-multidimensional-analytic-koksma-extension]]

[Bergelson–Moreira, Conjecture 1.11](https://link.springer.com/content/pdf/10.1007/s40687-026-00647-6.pdf)

[Bergelson–Moreira, arXiv:2509.06909v2](https://arxiv.org/pdf/2509.06909v2)
