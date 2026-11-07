---
id: thm-metric-equidistribution-for-analytic-functions
kind: theorem
title: Metric torus equidistribution along analytic functions
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 3
deps:
  - def-countable-choice
  - def-uniform-distribution-mod-one-in-k-dimensions
  - def-real-analytic-function
  - def-scattered-sequence
  - def-delta-scattered-sequence
  - def-jointly-scattered-sequences
  - thm-weyl-criterion-on-the-k-torus
  - lem-logarithmic-l2-decay-implies-almost-everywhere-cancellation
  - lem-analytic-exponential-integrals-decay-for-independent-functions
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
      locator: "Theorem 1.7 and complete proofs of Theorems 3.1 and 3.2, §§1 and 3.1–3.2"
    - title: Vitaly Bergelson and Joel Moreira, Metric uniform distribution on analytic curves (arXiv v2 author preprint)
      url: https://arxiv.org/pdf/2509.06909v2
      locator: "arXiv:2509.06909v2, Theorem 1.7 and complete proofs of Theorems 3.1 and 3.2, §§1 and 3.1–3.2; full relevant passage inspected"
---

## Statement

Assume the Axiom of Countable Choice. Let $k$ be a positive integer, let $f_1,\ldots,f_k:\mathbb R\to\mathbb R$ be nonconstant real-analytic functions, and let $a_1(n),\ldots,a_k(n)$ be scattered real sequences indexed by $n\ge1$. Suppose either (i) the sequences are jointly scattered, or (ii) the functions $1,f_1,\ldots,f_k$ are linearly independent over $\mathbb R$. Then for Lebesgue-almost every $x\in\mathbb R$, the sequence

$$\bigl(a_1(n)f_1(x),\ldots,a_k(n)f_k(x)\bigr)_{n\ge1}$$

is uniformly distributed in $\mathbb T^k$.

## Statement references

[Bergelson–Moreira, Theorem 1.7](https://link.springer.com/content/pdf/10.1007/s40687-026-00647-6.pdf)

[Bergelson–Moreira, arXiv:2509.06909v2](https://arxiv.org/pdf/2509.06909v2)

## Facts & Assumptions

**Given:** The Axiom of Countable Choice, the integer $k$, nonconstant real-analytic functions $f_i$, scattered real sequences $a_i$, and one of the two alternatives in the statement.

[F1] A sequence in $\mathbb T^k$ is uniformly distributed if and only if each nonzero integer-character average tends to zero ([[thm-weyl-criterion-on-the-k-torus]]).

[F2] Scatteredness supplies, for every $0<\tau\le1$, an exponent $\eta>0$ and an eventual bound on $N^{-2}\sum_{m<n}w_\tau(a(n)-a(m))$ ([[def-scattered-sequence]], [[def-delta-scattered-sequence]]).

[F3] Joint scatteredness says every nonzero real linear combination of the sequences is scattered ([[def-jointly-scattered-sequences]]).

[F4] If $1,g_1,\ldots,g_d$ are linearly independent real-analytic functions on a compact interval, their oscillatory integrals satisfy a uniform power bound in every nonzero real coefficient vector ([[lem-analytic-exponential-integrals-decay-for-independent-functions]]).

[F5] If unit-modulus averages have squared L2 norm $O((\log N)^{-1-\eta})$ on a probability space, they tend to zero almost everywhere ([[lem-logarithmic-l2-decay-implies-almost-everywhere-cancellation]]).

[F6] A countable union of measurable null sets has measure zero by countable subadditivity ([[thm-finite-and-countable-subadditivity-of-measures]]).

[F7] Real analytic means locally represented by a convergent real power series ([[def-real-analytic-function]]).

[F8] Uniform distribution modulo one in $k$ dimensions means convergence of all half-open box frequencies to product volume ([[def-uniform-distribution-mod-one-in-k-dimensions]]).

[F9] The Axiom of Countable Choice, denoted $\mathrm{AC}_\omega$, says every countable family of nonempty sets has a choice function ([[def-countable-choice]]).

[F10] Under $\mathrm{AC}_\omega$, $\lambda_1$ is the complete one-dimensional Lebesgue measure and $\lambda_1([a,b])=b-a$ for real $a\le b$; hence if $I=[a,b]$ with $a<b$, then $\lambda_1(I)=|I|>0$ and $\lambda_1$ restricted to $I$, divided by $|I|$, is a probability measure ([[thm-lebesgue-measure-is-a-complete-measure]], [[thm-lebesgue-measure-of-a-box-of-every-kind]]).

[F11] Every continuous real function on a closed nondegenerate interval is Riemann integrable, and every bounded Riemann-integrable real function has the same Lebesgue and Riemann integrals under $\mathrm{AC}_\omega$; for a continuous complex function apply these statements to its real and imaginary parts and define its Lebesgue integral componentwise ([[thm-continuous-on-a-rectangle-is-riemann-integrable]], [[thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral]], [[def-integrable-real-and-complex-functions-and-their-integrals]]).

[F12] The Lebesgue integral is complex-linear on $L^1(\lambda_1)$ ([[thm-linearity-of-the-lebesgue-integral-on-l-one]]).

## Proof

1.1 Fix $v=(v_1,\ldots,v_k)\in\mathbb Z^k\setminus\{0\}$ and a compact interval $I$ of positive length. Define $\phi_n(x)=\sum_i v_i a_i(n)f_i(x)$ and $F_N(x)=N^{-1}\sum_{n=1}^Ne(\phi_n(x))$. By [F1], it suffices to prove $F_N(x)\to0$ almost everywhere on $I$ for each fixed $v$ and each such $I$. [F1, given]

1.2 Suppose instead alternative (i) holds. Greedily choose a basis $1,g_1,\ldots,g_d$ of the finite-dimensional span of $1,f_1,\ldots,f_k$, with each $g_j$ chosen from the $f_i$. Write $f_i=c_{i0}+\sum_{j=1}^d c_{ij}g_j$ and $b_j(n)=\sum_i v_i c_{ij}a_i(n)$. Since $v\ne0$, some $v_i\ne0$; since that $f_i$ is nonconstant, some $c_{ij}\ne0$ for $j\ge1$. For this $j$, the coefficient vector $(v_i c_{ij})_i$ is nonzero, so [F3] says $b_j$ is scattered. The constant term in $\phi_n-\phi_m$ is $b_0(n)-b_0(m)$; its exponential contributes only a unit factor and does not affect the modulus of the integral. [F3, given, construct, algebra]

2.1 Suppose alternative (ii) holds and choose $j$ with $v_j\ne0$. For $m<n$ put $\lambda_{n,m}=(v_i(a_i(n)-a_i(m)))_{i=1}^k$. Since $v_j$ is a nonzero integer, $|v_j|\ge1$. If $|a_j(n)-a_j(m)|\ge1$, then $\|\lambda_{n,m}\|\ge|v_j||a_j(n)-a_j(m)|\ge|a_j(n)-a_j(m)|$; [F4] bounds the corresponding oscillatory integral by a constant times $|a_j(n)-a_j(m)|^{-\tau}$, where $\tau=\min\{\delta,1\}$ and $\delta>0$ is the decay exponent in [F4]. If the difference has modulus below $1$, including zero, the trivial bound $|I|$ applies. Thus a constant $C_{v,I}$ gives $\left|\int_I e(\phi_n(x)-\phi_m(x))\,dx\right|\le C_{v,I}w_\tau(a_j(n)-a_j(m))$. [F2, F4, step 1.1, algebra]

2.2 For $m<n$, apply [F4] to the independent family $1,g_1,\ldots,g_d$ with coefficient vector $(b_j(n)-b_j(m))_{j=1}^d$. Its norm is at least $|b_j(n)-b_j(m)|$. If this difference has modulus at least $1$, [F4] bounds the integral by a constant times its negative $\delta$th power; if its modulus is below $1$, including zero, the trivial bound applies. Thus [F2] and the weight definition give $\left|\int_I e(\phi_n(x)-\phi_m(x))\,dx\right|\le C_{v,I}w_\tau(b_j(n)-b_j(m))$ for $\tau=\min\{\delta,1\}>0$ and a constant independent of $m,n,N$. [F2, F4, step 1.2, algebra]

3.1 Expand $|F_N|^2$ using the complex linearity [F12]. Each off-diagonal character $e(\phi_n-\phi_m)$ is continuous, so [F11] identifies its Lebesgue integral with the ordinary Riemann integral bounded in step 2.1; [F10] gives the diagonal integral $\int_I1\,d\lambda_1=|I|$. Using [F2] for $a_j$ therefore gives some $\eta>0$ and $C_{v,I}$ such that $\int_I|F_N(x)|^2\,d\lambda_1(x)\le |I|/N+C_{v,I}(\log N)^{-1-\eta}=O((\log N)^{-1-\eta})$. The two off-diagonal triangles contribute twice the defining scattered pair sum. [F2, F10, F11, F12, step 2.1, algebra]

4.1 Expand $|F_N|^2$ using [F12] and identify each continuous off-diagonal Lebesgue integral with its Riemann integral by [F11]; [F10] gives the diagonal contribution $|I|/N$. Applying [F2] to the scattered sequence $b_j$ yields $\int_I|F_N(x)|^2\,d\lambda_1(x)=O((\log N)^{-1-\eta})$ for some $\eta>0$, since the two off-diagonal triangles are controlled by its scattered pair sum. [F2, F10, F11, F12, step 2.2, algebra]

5.1 In either alternative, [F10] makes $\mathbb P_I(A):=\lambda_1(A)/|I|$ a probability measure on Lebesgue-measurable subsets of $I$. The functions $e(\phi_n)$ are continuous and have modulus one, and the bounds in steps 3.1 and 4.1 give the required logarithmic $L^2(\mathbb P_I)$ estimate after division by $|I|$. Apply [F5] to conclude $F_N\to0$ almost everywhere on $I$. [F5, F10, step 3.1, step 4.1, given]

6.1 Cover $\mathbb R$ by the countable intervals $[-r,r]$, $r\ge1$, and use the countability of $\mathbb Z^k\setminus\{0\}$. For each frequency $v$ and interval $I=[-r,r]$, the set $E_{v,I}:=\{x\in I:F_N(x)\not\to0\}$ is Borel, since every $F_N$ is continuous and convergence to zero is expressed by countable $\varepsilon$-$N$ conditions; it is null by step 5.1. Their countable union is null by [F6], and outside it every nonzero character average tends to zero. Applying [F1] proves uniform distribution for almost every $x\in\mathbb R$. [F1, F6, step 5.1]

## Remarks

Real analyticity cannot generally be weakened to $C^\infty$: the source exhibits a nonconstant smooth function equal to $2$ on a positive-measure set; with $a(n)=n$, the values $n f(x)$ are integers on that set and hence are not uniformly distributed modulo one there.

## Remarks references

[Bergelson–Moreira, Remark 1.8 and §2.6](https://link.springer.com/content/pdf/10.1007/s40687-026-00647-6.pdf)

[Bergelson–Moreira, arXiv:2509.06909v2](https://arxiv.org/pdf/2509.06909v2)
