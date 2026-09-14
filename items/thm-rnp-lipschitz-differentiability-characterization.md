---
id: thm-rnp-lipschitz-differentiability-characterization
kind: theorem
title: "RNP and almost-everywhere differentiability of Lipschitz curves"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-axiom-of-choice, lem-ac-supplies-countable-and-dependent-choice-for-banach-integration, lem-rnp-may-be-tested-on-the-lebesgue-interval, lem-lipschitz-curves-and-dominated-interval-vector-measures, lem-bounded-variation-of-a-vector-measure-is-a-finite-measure, lem-bochner-density-defines-an-absolutely-continuous-vector-measure, thm-radon-nikodym-density-exists-and-is-unique-up-to-almost-everywhere-equality, thm-lebesgue-differentiation-theorem-for-locally-integrable-functions-on-r-n, thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions, thm-c1-lipschitz-ac-bv-hierarchy, thm-countable-union-of-null-is-null, cor-dual-separates-points, def-strongly-measurable-banach-valued-function, def-bochner-integrable-function, thm-bochner-integrability-criterion, thm-bochner-dominated-convergence, thm-bounded-linear-maps-commute-with-bochner-integration]
justified_by: []
forward_refs: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  scraped: []
  references:
    - title: "Jeff Cheeger and Bruce Kleiner, On the differentiability of Lipschitz maps from metric measure spaces to Banach spaces"
      url: "https://math.nyu.edu/~bkleiner/bspace.pdf"
      locator: "Introduction subsection 'The Radon-Nikodym property', complete relevant passage, printed pp. 2--3"
    - title: "Gilles Pisier, Martingales in Banach Spaces"
      url: "https://webusers.imj-prg.fr/~gilles.pisier/ihp-pisier.pdf"
      locator: "Chapter 2, Corollary 2.10, printed p. 41"
pipeline_run: phase-2-next-18
---

## Statement

Assume the Axiom of Choice. A Banach space $X$ has the Radon--Nikodym
property if and only if every Lipschitz map $F:[0,1]\to X$ is norm
differentiable at Lebesgue-almost every $t\in(0,1)$; that is, for almost every
such $t$ there is an $F'(t)\in X$ for which

$$\lim_{h\to0}\left\|\frac{F(t+h)-F(t)}h-F'(t)\right\|=0.$$

## Facts & Assumptions

[A1] The Axiom of Choice holds ([[def-axiom-of-choice]]).

[L1] In ZF, AC implies Dependent Choice and Countable Choice
([[lem-ac-supplies-countable-and-dependent-choice-for-banach-integration]]).

[L2] Under Countable Choice, based Lipschitz curves correspond to interval
vector measures dominated in variation by Lebesgue measure
([[lem-lipschitz-curves-and-dominated-interval-vector-measures]]).

[L3] Under AC, RNP is equivalent to the Bochner-density property for
bounded-variation vector measures on the Lebesgue interval
([[lem-rnp-may-be-tested-on-the-lebesgue-interval]]).

[L4] Bochner integrability is $L^1$ approximation by integrable simple
functions ([[def-bochner-integrable-function]]), and for strongly measurable
functions it is equivalent to integrability of the norm
([[thm-bochner-integrability-criterion]],
[[def-strongly-measurable-banach-valued-function]]).

[L5] Scalar $L^1_{\mathrm{loc}}$ functions are recovered almost everywhere by
small interval averages, and countable unions of Lebesgue-null sets are null
under Countable Choice
([[thm-lebesgue-differentiation-theorem-for-locally-integrable-functions-on-r-n]],
[[thm-countable-union-of-null-is-null]]).

[L6] A Bochner density induces a vector measure whose variation is the
integral of its norm
([[lem-bochner-density-defines-an-absolutely-continuous-vector-measure]]).

[L7] Bounded linear maps commute with Bochner integration
([[thm-bounded-linear-maps-commute-with-bochner-integration]]).

[L8] The variation of a bounded-variation vector measure is a finite positive
measure ([[lem-bounded-variation-of-a-vector-measure-is-a-finite-measure]]),
and under AC a finite absolutely continuous scalar measure has an integrable
Radon--Nikodym density
([[thm-radon-nikodym-density-exists-and-is-unique-up-to-almost-everywhere-equality]]).

[L9] Real Lipschitz functions are absolutely continuous, and under Countable
Choice and Dependent Choice the scalar FTC recovers an absolutely continuous
function from its derivative
([[thm-c1-lipschitz-ac-bv-hierarchy]],
[[thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions]]).

[L10] The continuous dual separates distinct vectors
([[cor-dual-separates-points]]).

[L11] Under Countable Choice, dominated pointwise convergence implies
$L^1$ and integral convergence for strongly measurable Banach-valued functions
([[thm-bochner-dominated-convergence]]).

## Proof

**Proof technique:** direct.

**Given:** A Banach space $X$ and AC.

1.1 Make the inherited choice assumptions explicit. [given, A1, L1]
By [L1], [A1] supplies both Countable Choice and Dependent Choice. Countable
Choice is used in [L2], [L5], and [L11]; both principles are hypotheses of the
scalar FTC in [L9].

1.2 Associate a dominated vector measure to a Lipschitz curve. [given, L2, construct]
Suppose first that $X$ has RNP, let $F:[0,1]\to X$ be $L$-Lipschitz, and put
$G(t)=F(t)-F(0)$. Then $G(0)=0$ and [L2] gives a vector measure $\nu_G$ with
$|\nu_G|\leq L\lambda$ and
$\nu_G((a,b])=G(b)-G(a)$.

1.3 Reduce an arbitrary interval vector measure to bounded-density levels. [given, A1, L8, construct]
For the converse direction, let $\nu$ be a bounded-variation vector measure on
$[0,1]$ with $\nu\ll\lambda$. If $\lambda(E)=0$, every member of every finite
partition of $E$ is null and has $\nu$-value zero, so $|\nu|(E)=0$. Thus
$|\nu|\ll\lambda$. By [L8] and AC there is an integrable scalar density
$g$ with $|\nu|(E)=\int_Eg\,d\lambda$. Positivity of $|\nu|$ makes $g\geq0$
almost everywhere: applying the representation to
$\{g\leq-1/m\}$ for each $m\geq1$ makes each such set null. Replace $g$ by
zero on their null union. Put
$A_n=\{n-1\leq g<n\}$ for $n\geq1$ and $Z=\{g=+\infty\}$. The $A_n$ are
disjoint, $Z$ is null, and they cover $[0,1]\setminus Z$. Define
$\nu_n(E)=\nu(E\cap A_n)$. Directly from finite partitions,
$|\nu_n|(E)=|\nu|(E\cap A_n)\leq n\lambda(E)$.

2.1 Obtain a Bochner density in the RNP-to-differentiability direction. [A1, L3, step 1.1, step 1.2]
The interval test [L3] applied to $\nu_G$ supplies a Bochner-integrable
$f:[0,1]\to X$ with $\nu_G(E)=\int_Ef\,d\lambda$. Hence
$G(b)-G(a)=\int_{(a,b]}f\,d\lambda$ for every $a<b$.

2.2 Turn each bounded level measure into a Lipschitz curve. [L2, step 1.1, step 1.3]
For each $n$, set $F_n(t)=\nu_n((0,t])$. The converse part of [L2] and the
bound in step 1.3 show that $F_n(0)=0$ and that $F_n$ is $n$-Lipschitz.

3.1 Prepare a common set of vector Lebesgue points. [L4, L5, step 2.1, choose]
Choose integrable simple $s_m$ with $\int\|f-s_m\|\to0$ as in [L4]. Passing
to a subsequence if necessary, the scalar errors
$e_m=\|f-s_m\|$ converge to zero almost everywhere: choose least indices with
$L^1$ errors below $2^{-2m}$, and the sets where the corresponding pointwise
error exceeds $2^{-m}$ have summable measures, so their tail unions decrease
to a null set. Extend $e_m$ and the finitely many indicator functions of the
level sets of $s_m$ by zero outside $[0,1]$. Apply [L5] to every one of this
countable family and remove the union of their exceptional null sets. At each
remaining interior point $t$, every $e_m$ differentiates by interval averages,
$e_m(t)\to0$, and

$$\lim_{r\to0^+}\frac1{2r}\int_{t-r}^{t+r}\|s_m(u)-s_m(t)\|\,du=0$$

for every $m$; the last equality follows by writing the finite-valued $s_m$ on
its level sets and differentiating their indicators.

3.2 Construct measurable derivative fields for the bounded level curves. [L4, step 2.2, construct]
By the assumed differentiability property, for each $n$ there is a measurable
null set $N_n$ off which $F_n'$ exists in norm. For $k\geq2$ put
$q_{n,k}(t)=k(F_n(t+1/k)-F_n(t))$ when $t\leq1-1/k$, and put it equal to zero
on the remaining interval. On the first piece $q_{n,k}$ is $2nk$-Lipschitz;
a finite interval partition of sufficiently small mesh, together with the
constant-zero last piece, therefore gives a measurable simple function within
$1/k$ uniformly of $q_{n,k}$. These simple functions converge to $F_n'$ off
$N_n$. Define $f_n=F_n'$ there and $f_n=0$ on $N_n$. This proves strong
measurability in the sense of [L4]. Difference quotients give
$\|f_n\|\leq n$ off $N_n$, so [L4] makes $f_n$ Bochner integrable.

4.1 Differentiate the indefinite Bochner integral in norm. [L5, step 2.1, step 3.1]
At a point $t$ retained in step 3.1, for fixed $m$ the triangle inequality gives

$$\limsup_{r\to0^+}\frac1{2r}\int_{t-r}^{t+r}\|f(u)-f(t)\|\,du\leq2e_m(t).$$

Indeed the three terms are the average of $e_m(u)$, the average of
$\|s_m(u)-s_m(t)\|$, and $e_m(t)$. Letting $m\to\infty$ makes the right side
zero. For nonzero $h$ small enough that $t+h\in[0,1]$, step 2.1 now yields

$$\left\|\frac{F(t+h)-F(t)}h-f(t)\right\|\leq\frac1{|h|}\int_{\min(t,t+h)}^{\max(t,t+h)}\|f(u)-f(t)\|\,du,$$

which is at most twice the corresponding centred average and tends to zero.
Thus $F'(t)=f(t)$ at almost every $t\in(0,1)$.

4.2 Show that each derivative field represents its level measure. [L2, L6, L7, L9, L10, step 1.1, step 2.2, step 3.2]
Fix $n$ and $x^*\in X^*$. The real-valued function $x^*F_n$ in the real
case, and its real and imaginary parts in the complex case, are Lipschitz and
hence absolutely continuous by [L9]. Their derivatives agree almost everywhere
with the corresponding scalar parts of $x^*f_n$. The scalar FTC, whose choice
hypotheses were supplied in step 1.1, and commutation in [L7] give

$$x^*(F_n(b)-F_n(a))=x^*\!\left(\int_{(a,b]}f_n\,d\lambda\right).$$

By [L10], $\nu_n((a,b])=\int_{(a,b]}f_n\,d\lambda$. The measure induced by
$f_n$ has variation at most $n\lambda$ by [L6], so uniqueness in [L2] makes it
equal to $\nu_n$ on every Lebesgue set. Finally put
$h_n=\mathbf1_{A_n}f_n$. Restricting simple approximants shows
$\int_Eh_n=\int_{E\cap A_n}f_n=\nu_n(E)$, so $h_n$ is another density of
$\nu_n$, now supported on $A_n$.

5.1 Complete the forward implication, including its boundary cases. [step 1.2, step 2.1, step 4.1]
Step 4.1 proves almost-everywhere norm differentiability of every Lipschitz
curve when $X$ has RNP. Adding the constant $F(0)$ does not affect difference
quotients. If $L=0$, the curve is constant and has derivative zero everywhere;
the endpoints are excluded from the derivative assertion and have measure
zero. The zero Banach space and the one-point interval cause no exception.

5.2 Paste the bounded derivative fields into one density. [L4, L5, L11, step 1.1, step 1.3, step 4.2]
Define $h(t)=h_n(t)$ on $A_n$ and $h=0$ on $Z$. The explicit simple
approximants from step 3.2, multiplied by $\mathbf1_{A_n}$ and summed for
$n\leq k$, form a simple sequence converging to $h$ off the countable union of
the $N_n$ and $Z$; [L5] makes that union null. Hence $h$ is strongly
measurable. Moreover
$\|h\|\leq\sum_{n\geq1}n\mathbf1_{A_n}\leq g+1$, so [L4] makes $h$ Bochner
integrable. Let $H_N=\sum_{n=1}^Nh_n$. Then $H_N\to h$ pointwise and
$\|H_N\|\leq g+1$. Applying [L11] to $\mathbf1_EH_N$ for any measurable $E$
gives $\int_EH_N\to\int_Eh$. Finite linearity follows by combining the simple
approximations in [L4], so step 4.2 gives
$\int_EH_N=\sum_{n=1}^N\nu(E\cap A_n)$. Norm countable additivity of $\nu$ and
$\nu(E\cap Z)=0$ make the latter sums converge to $\nu(E)$. Thus $h$ is a
Bochner density of $\nu$.

6.1 Conclude the equivalence and record the exact AC use. [A1, L3, step 5.1, step 5.2]
Step 5.1 proves RNP implies almost-everywhere differentiability. Conversely,
step 5.2 gives a density for every vector measure in the interval test [L3],
so $X$ has RNP. AC is used by the scalar Radon--Nikodym theorem, the interval
RNP test, and through step 1.1 for countable null-set, dominated-convergence,
and scalar-FTC suppliers. Empty and zero measures give the zero density, and
both directions of the equivalence have been proved. [A1, L3, step 5.1, step 5.2] ∎
