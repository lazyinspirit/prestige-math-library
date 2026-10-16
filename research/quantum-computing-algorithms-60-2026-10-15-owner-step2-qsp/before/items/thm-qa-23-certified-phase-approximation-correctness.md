---
id: thm-qa-23-certified-phase-approximation-correctness
kind: theorem
title: Correctness and arithmetic resource bound for buffered phase approximation
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 9
deps:
  - alg-qa-23-certified-phase-approximation
  - def-operator-norm-on-a-finite-dimensional-inner-product-space
  - def-inner-product-norm
  - thm-qc-computational-basis-orthonormal
  - def-qa-23-qsp-signal-sequence
  - thm-sine-and-cosine-parametrize-the-unit-circle
  - thm-sine-cosine-signs-monotonicity-and-ranges
  - lem-sine-positive-and-cosine-decreasing-on-zero-two
  - thm-sine-and-cosine-subtraction-formulas
  - def-sine-and-cosine-by-power-series
  - lem-sine-and-cosine-series-converge-everywhere
  - thm-principal-inverse-tangent-calculus
  - def-principal-inverse-tangent
  - thm-cofunction-supplementary-and-reflection-identities
  - thm-quarter-turn-values-and-shift-formulas
  - lem-integral-elementary-bounds
  - thm-eulers-formula
  - thm-complex-exponential-addition-and-real-extension
  - lem-complex-conjugation-and-modulus-laws
proof_strategy: direct
axiom_use: "None; the instructions use finite rational loops and charged exact algebraic comparisons."
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Gilyén et al., Quantum singular value transformation and beyond"
      url: "https://arxiv.org/pdf/1806.01838"
      locator: "Corollary 10, PDF p.14; the buffered arithmetic proof is supplied locally."
---
## Statement

Given exact algebraic reals $u,v$ with $u^2+v^2=1$ and rational $\eta>0$, let
$h=\min(\eta,1)$. In a model charging one operation for each ideal exact algebraic
field operation and order/equality comparison, the procedure [[alg-qa-23-certified-phase-approximation]] returns a certified
rational angle $t$ with $|e^{it}-(u+iv)|<h$. It requires
$O((1+\log(1/h))^2)$ rational arithmetic operations and
$O(1+\log(1/h))$ exact algebraic operations/comparisons. It does not refine an
algebraic isolator. The rational output has $O(1+\log(1/h))$ bits after a final
dyadic rounding. This is not a claim about algebraic operation implementation,
intermediate rational bit lengths, or Turing time. If $ω=e^{iφ}$, then
$\|Z(t)-Z(φ)\|_{\rm op}=|e^{it}-ω|<h$.

## Facts & Assumptions

**Given:** The algorithm [[alg-qa-23-certified-phase-approximation]], the exact unit vector and tolerance above, and access to the charged
exact-algebraic operations, including comparison with rational numbers.

[F1] [[thm-sine-and-cosine-parametrize-the-unit-circle]] and
[[thm-sine-cosine-signs-monotonicity-and-ranges]] give a unique
$\theta\in[0,\pi/2]$ with $(\cos\theta,\sin\theta)=(|u|,|v|)$.

[F2] [[lem-sine-positive-and-cosine-decreasing-on-zero-two]] gives
$\sin x\ge x/3$ for $0\le x\le2$; parity gives
$|\sin x|\ge |x|/3$ for $|x|\le2$.

[F3] [[thm-sine-and-cosine-subtraction-formulas]] gives the determinant
identity used below.

[F4] [[def-sine-and-cosine-by-power-series]] and
[[lem-sine-and-cosine-series-converge-everywhere]] supply the series.
[[thm-principal-inverse-tangent-calculus]],
[[def-principal-inverse-tangent]], and
[[thm-cofunction-supplementary-and-reflection-identities]] supply principal
arctangent, its integral and series, and $\tan(\pi/4)=1$.
[[lem-integral-elementary-bounds]] supplies Darboux integral bounds.

[F5] [[thm-eulers-formula]],
[[thm-complex-exponential-addition-and-real-extension]], and
[[lem-complex-conjugation-and-modulus-laws]] identify the complex unit scalar
and give the triangle/product modulus laws.

[F6] [[def-qa-23-qsp-signal-sequence]] defines $Z(t)$ as the diagonal with
entries $e^{it},e^{-it}$. [[def-operator-norm-on-a-finite-dimensional-inner-product-space]],
[[def-inner-product-norm]], and [[thm-qc-computational-basis-orthonormal]]
fix the operator norm and the orthonormal signal basis.

## Proof

1.1 First compute rational sine and cosine approximations at any rational
$m\in[0,2]$ to absolute error $\epsilon>0$. For each series, retain at least
the terms through index $2$ and use the recurrence of successive terms.
Subsequent absolute-term ratios are at most $1/2$ and decrease: for cosine
they are $m^2/((2k+1)(2k+2))$, and for sine they are
$m^2/((2k+2)(2k+3))$. Twice the first omitted absolute term bounds the tail.
Increment the index until this rational bound is at most $\epsilon$.
The geometric decrease gives $O(1+\log^+(1/\epsilon))$ terms and arithmetic
operations, uniformly in $m$. The returned partial sums $c,s$ therefore satisfy
$|c-\cos m|,|s-\sin m|\le\epsilon$. [F4, algebra, construct]

1.2 The integral formula and $\arctan1=\pi/4$ in [F4] give
$1/2<\pi/4<1$: on the two cells of the partition $0,1/2,1$, the decreasing
integrand has lower sum $\tfrac12(4/5+1/2)=13/20>1/2$ and upper sum
$\tfrac12(1+4/5)=9/10<1$. Thus $2<\pi<4$. First check the coordinates
for exact zero; an axis input takes instruction 2 of the algorithm. Otherwise
set $a=|u|$, $b=|v|$ by exact comparisons and signs, and initialize
$[L,U]=[0,2]$. It contains $\theta$ by [F1] and $\pi/2<2$. While its width
$w=U-L$ exceeds $h/8$, set $m=(L+U)/2$, $\epsilon=w/96$, and compute $c,s$
as in step 1.1. Form the exact algebraic number $q=bc-as$.
If $q>2\epsilon$, replace $L$ by $m$. If $q<-2\epsilon$, replace $U$ by
$m$. Otherwise replace the bracket by
$[L,U]\cap[m-12\epsilon,m+12\epsilon]$.
These are two exact comparisons against rational buffers; equality belongs
to the third branch. No comparison with an exact transcendental value is made.
[F1, F4, step 1.1, algebra, construct]

2.1 Let $D=b\cos m-a\sin m=\sin(\theta-m)$ by [F3]. Since
$a,b\in[0,1]$, $|D-q|\le(a+b)\epsilon\le2\epsilon$. Also
$|\theta-m|\le2$ because $\theta,m\in[0,2]$. By [F2], the sign of $D$
is the sign of $\theta-m$, and $|\theta-m|\le3|D|$.
Thus either definite comparison in step 1.2 retains $\theta$ and halves the
bracket. In the third branch, $|D|\le4\epsilon$ implies
$|\theta-m|\le12\epsilon$, so the intersection also retains $\theta$ and
has width at most $24\epsilon=w/4$. It is nonempty. Every iteration contracts
by at least a factor $1/2$, independently of how close the unknown phase is
to a midpoint. [F2, F3, step 1.1, step 1.2, algebra]

2.2 The loop terminates in $O(1+\log(1/h))$ iterations, returning rational
$L,U$ containing $\theta$ with $U-L\le h/8$. Its comparison count is linear
in the number of iterations. In an iteration with width $w>h/8$, step 1.1
needs $O(1+\log(1/h))$ rational operations. The total is therefore
$O((1+\log(1/h))^2)$. The exact algebraic numbers compared are only rational
linear combinations of the fixed coordinates $a,b$. No algebraic-coordinate
approximation, root isolation, normalized-vector division, or sensitivity
bound occurs in these instructions. [step 1.1, step 1.2, step 2.1, algebra]

3.1 Obtain a rational enclosure $I_\pi$ for $\pi$ of width at most $h/8$ by
Machin's identity $\pi=16\arctan(1/5)-4\arctan(1/239)$. For completeness,
put $\alpha=\arctan(1/5)$, $\beta=\arctan(1/239)$. The integral in [F4]
gives $0<\beta<\alpha<1/5$, so
$0<4\alpha-\beta<4/5<1<\pi/2$ by step 1.2. Sine/cosine addition and their quotient give
$\tan(2\alpha)=5/12$, $\tan(4\alpha)=120/119$, and
$\tan(4\alpha-\beta)=(120\cdot239-119)/(119\cdot239+120)=1$.
Injectivity of the principal tangent gives $4\alpha-\beta=\pi/4$.
For each arctangent, consecutive alternating partial sums enclose its value,
and their separation is at most $5^{-(2N+1)}$ after the first $N$ terms.
Choose $N$ by incrementing until $20\cdot5^{-(2N+1)}\le h/8$ and take the
outward linear combination of the two enclosures. This uses
$O(1+\log(1/h))$ rational operations. All displayed denominators are positive;
all angles in these tangent identities are in its nonsingular principal range.
[F3, F4, step 1.2, algebra, construct]

3.2 On an axis, the explicit OP0 branches build $J$ as follows: if $v=0,u>0$,
use $[0,0]$; if $v=0,u<0$, use $I_\pi$; if $u=0,v>0$, use $I_\pi/2$;
if $u=0,v<0$, use $-I_\pi/2$. The zero vector is excluded by the unit promise
(the general atan2 procedure returns INVALID there). No angular bisection is
needed on an axis. Otherwise use the exact signs of $u,v$ to build a rational
interval $J$ for a phase $\phi$ of $u+iv$: if $u>0,v>0$ use $[L,U]$; if $u<0,v>0$ use
$I_\pi-[L,U]$; if $u<0,v<0$ use $-I_\pi+[L,U]$; if $u\ge0,v<0$ use
$-[L,U]$. Reflection, quarter-turn and parity identities give
$u+iv=e^{i\phi}$, and $\operatorname{width}(J)\le h/4$.
Let $t_0$ be its rational midpoint. Choose the least nonnegative integer $k$
with $2^{-k}\le h/16$ by repeated halving, and round $t_0$ to a multiple of
$2^{-k}$, obtaining $t$ with $|t-t_0|\le h/16$. Thus
$|t-\phi|\le3h/16\le3/16$. The exponential series and [F5] imply
$|e^{it}-e^{i\phi}|\le\sum_{n\ge1}|t-\phi|^n/n!
\le |t-\phi|/(1-|t-\phi|)\le3h/13<h$.
The phase lies in a fixed bounded interval, so this dyadic $t$ has
$O(1+\log(1/h))$ bits. The constructed interval $J$ and rounding bound are
the certificate. [F1, F4, F5, step 2.2, step 3.1, algebra, construct]

4.1 Put $z=e^{it}-ω$. By [F5] and [F6], $Z(t)-Z(φ)$ has diagonal entries
$z,\overline z$. On a vector with orthonormal coordinates $x_0,x_1$,
its squared output norm is $|z|^2(|x_0|^2+|x_1|^2)$. Thus every unit vector
has output norm $|z|$, and the operator norm is exactly $|z|<h$. Together
with the operation counts and termination above, this proves all claims.
[F5, F6, step 2.2, step 3.1, step 3.2, algebra] ∎

