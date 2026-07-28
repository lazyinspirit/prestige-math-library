---
id: fs-substitution-holds-for-every-integrable-integrand
kind: false-statement
title: "FALSE: in the substitution theorem the continuity of $f$ may be weakened to integrability, $f\\circ\\varphi$ still being integrable"
status: published
origin: session
deps: [thm-substitution, thm-ftc-first-part, thm-nonnegative-continuous-with-zero-integral-vanishes, thm-monotonicity-of-the-integral, lem-integral-elementary-bounds, thm-additivity-over-subintervals, def-the-integral-function, def-oriented-integral, def-fat-cantor-set, thm-fat-cantor-set-has-positive-measure, def-nowhere-dense-meager, def-interior-closure-boundary-r, lem-distance-to-set-is-lipschitz, def-metric-bounded-diameter, lem-real-line-is-a-metric-space, lem-real-and-metric-notions-agree, def-open-and-closed-in-r, thm-continuous-implies-integrable, thm-continuous-image-of-a-compact-set-r, thm-heine-borel-characterisation-r, def-open-cover-r, thm-lebesgue-criterion, def-measure-zero-and-content-zero, lem-content-zero-implies-null, def-finite-sum, lem-finite-sum-laws, def-canonical-natural, lem-of-naturals-positive, cor-archimedean-reciprocal, thm-of-archimedean, def-continuity-real, def-darboux-integral, def-bounded-set, def-infimum, def-complete-ordered-field, def-ordered-field, def-interval, def-injection-surjection-bijection]
justified_by: []
aliases: []
landmark: true
short: "FALSE: substitution with a merely integrable integrand"
proof_strategy: direct
verification:
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
  precheck: pass
  audited: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Integration by substitution (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Integration_by_substitution"
    - title: "Smith–Volterra–Cantor set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Smith%E2%80%93Volterra%E2%80%93Cantor_set"
pipeline_run: null
---

## Statement

**False claim:** let $c<d$ be reals, let $\varphi : [c,d] \to \mathbb{R}$ be
differentiable at every point of $[c,d]$ with $\varphi'$ integrable, and let $f$
be Riemann integrable on an interval $J$ containing $\varphi[\,[c,d]\,]$. Then
$f\circ\varphi$ is Riemann integrable on $[c,d]$ — so the hypothesis "$f$ is
continuous" in [[thm-substitution]] may be weakened to "$f$ is integrable"
without the right-hand side $\int_c^d (f\circ\varphi)\varphi'$ losing its
meaning.

The claim is false. Let $S \subseteq [0,1]$ be the Smith-Volterra-Cantor set
([[def-fat-cantor-set]]), which is compact, nowhere dense and **not** null
([[thm-fat-cantor-set-has-positive-measure]]), and let

$$d_S(u) \;:=\; \inf\{\, |u-s| \ : \ s \in S \,\} , \qquad \varphi(x) \;:=\; \int_0^x d_S \quad (x \in [0,1]) .$$

Then $\varphi$ is differentiable at every point of $[0,1]$ with
$\varphi' = d_S$ continuous, hence integrable; $\varphi$ is strictly increasing;
and $\varphi[S]$ has measure zero. Taking

$$f \;:=\; \mathbf{1}_{\varphi[S]} \quad \text{on } J := \bigl[0,\ \varphi(1)\bigr]$$

gives an integrable $f$, because its discontinuity set is contained in the null
closed set $\varphi[S]$, while

$$f\circ\varphi \;=\; \mathbf{1}_{S} \quad \text{on } [0,1] ,$$

whose discontinuity set is exactly $S$ and is **not** null. So $f\circ\varphi$ is
not Riemann integrable.

**What this does and does not show.** It shows that continuity of $f$ in
[[thm-substitution]] cannot simply be weakened to integrability: the composite in
the right-hand side need not be integrable. It does **not** exhibit a pair for
which both sides of the substitution identity exist and differ, and no such pair
is claimed here.

## Facts & Assumptions

**Given:** The Smith-Volterra-Cantor set $S \subseteq [0,1]$, the function $d_S$ and the function $\varphi$ above, a real $\varepsilon>0$ and a natural number $N \ge 1$.

[L1] $S$ is a compact, nowhere dense subset of $[0,1]$; it is nonempty; and no cover of $S$ by intervals has total length below $2^{-1}$, so $S$ does not have measure zero ([[def-fat-cantor-set]], [[thm-fat-cantor-set-has-positive-measure]], [[def-nowhere-dense-meager]], [[def-measure-zero-and-content-zero]], [[thm-heine-borel-characterisation-r]], [[def-open-cover-r]]).

[L2] Nowhere dense plus closed means empty interior: no nonempty open interval is contained in $S$ ([[def-nowhere-dense-meager]], [[def-interior-closure-boundary-r]], [[def-open-and-closed-in-r]]).

[L3] $u \mapsto d_S(u)$ is defined for every real (the set is nonempty and bounded below by $0$) and is $1$-Lipschitz, hence continuous ([[lem-distance-to-set-is-lipschitz]], [[def-metric-bounded-diameter]], [[lem-real-line-is-a-metric-space]], [[lem-real-and-metric-notions-agree]], clauses 3 and 6, [[def-infimum]], [[def-continuity-real]]).

[L4] A continuous function on a closed bounded interval with distinct endpoints is integrable there ([[thm-continuous-implies-integrable]], [[def-darboux-integral]]).

[L5] First fundamental theorem: for $u$ integrable on $[p,q]$ and continuous at every point, $x \mapsto \int_p^x u$ is differentiable with derivative $u$ ([[thm-ftc-first-part]], [[def-the-integral-function]], [[thm-additivity-over-subintervals]], [[def-oriented-integral]]).

[L6] A continuous $w \ge 0$ on $[p,q]$ with $p<q$ and $\int_p^q w = 0$ vanishes identically ([[thm-nonnegative-continuous-with-zero-integral-vanishes]]).

[L7] If $\kappa \le w \le \mu$ on $[p,q]$ with $w$ integrable then $\kappa(q-p) \le \int_p^q w \le \mu(q-p)$ ([[thm-monotonicity-of-the-integral]], [[lem-integral-elementary-bounds]]).

[L8] The continuous image of a compact set is compact, and a compact subset of $\mathbb{R}$ is closed and bounded ([[thm-continuous-image-of-a-compact-set-r]], [[thm-heine-borel-characterisation-r]]).

[L9] Lebesgue's criterion: a bounded function on $[p,q]$ is integrable if and only if its discontinuity set has measure zero; a set of content zero has measure zero ([[thm-lebesgue-criterion]], [[lem-content-zero-implies-null]], [[def-measure-zero-and-content-zero]], [[def-bounded-set]]).

[L10] Finite sums: monotonicity in the terms and $\sum_{i<N}\lambda = \iota(N)\lambda$ ([[def-finite-sum]], [[lem-finite-sum-laws]], clauses 2 and 4); $\iota(N) \ge 1 > 0$ for $N \ge 1$, and for every real $\eta>0$ there is $N \ge 1$ with $1/\iota(N)<\eta$ ([[def-canonical-natural]], [[lem-of-naturals-positive]], [[cor-archimedean-reciprocal]], [[thm-of-archimedean]]).

[L11] Ordered-field arithmetic and suprema: a nonempty bounded set has a supremum and an infimum; $\min\{s,t\}$ is at most the average of $s$ and $t$ when $s+t$ is fixed; multiplying inequalities by positive reals preserves them; the order is total and transitive ([[def-complete-ordered-field]], [[def-ordered-field]], [[def-infimum]], [[def-interval]], [[def-injection-surjection-bijection]]).

## Refutation

**Proof technique:** direct.

1.1 $d_S \ge 0$ everywhere, $d_S(u) = 0$ for $u \in S$, and $d_S(u) > 0$ for $u \notin S$: $S$ is closed by [L1], so some $\rho>0$ has $(u-\rho,u+\rho)\cap S = \varnothing$, whence $|u-s| \ge \rho$ for every $s \in S$ and $d_S(u) \ge \rho$. [given, L1, L3, L11]

2.1 $d_S$ is continuous by [L3], hence integrable on every $[0,x]$ with $x>0$ by [L4]; so $\varphi$ is defined on $[0,1]$, and by [L5] it is differentiable at every point of $[0,1]$ with $\varphi' = d_S$, which is integrable by [L4]. [step 1.1, L3, L4, L5]

3.1 **$\varphi$ is strictly increasing, hence injective.** For $0 \le x < y \le 1$, $\varphi(y)-\varphi(x) = \int_x^y d_S \ge 0$ by [L5] and [L7]; if it were $0$ then [L6] would force $d_S \equiv 0$ on $[x,y]$, so $[x,y] \subseteq S$ by step 1.1, contradicting [L2]. Hence $\varphi(x)<\varphi(y)$. In particular $\varphi(0)=0<\varphi(1)$. [step 1.1, step 2.1, L2, L5, L6, L7]

3.2 **A quadratic contraction on $S$.** Let $x<y$ both lie in $S$. For $u \in [x,y]$ one has $d_S(u) \le \min\{u-x,\ y-u\} \le (y-x)\cdot 2^{-1}$, since $x,y \in S$; so by [L5] and [L7], $0 \le \varphi(y)-\varphi(x) = \int_x^y d_S \le (y-x)^{2}\cdot 2^{-1}$. [step 2.1, L5, L7, L11]

4.1 **$\varphi[S]$ has content zero.** Fix $N \ge 1$ and for $i<N$ put $J_i := [\iota(i)/\iota(N),\ \iota(i+1)/\iota(N)]$, so the $J_i$ cover $[0,1]$ and each has length $1/\iota(N)$. If $S \cap J_i \ne \varnothing$ let $E_i := \varphi[S \cap J_i]$, a nonempty bounded set, and put $a_i := \inf E_i$, $b_i := \sup E_i$; otherwise put $a_i := b_i := 0$. [step 3.2, L10, L11, construct]

5.1 For $z,w \in E_i$ one has $|z-w| \le \bigl(1/\iota(N)\bigr)^{2}\cdot 2^{-1}$ by step 3.2, the two preimages lying in $S \cap J_i$; hence $b_i \le a_i + \bigl(1/\iota(N)\bigr)^{2}\cdot 2^{-1}$, since every $z \in E_i$ is at most $w + (1/\iota(N))^{2}2^{-1}$ for each fixed $w$, and then $w \ge b_i - (1/\iota(N))^{2}2^{-1}$ for every $w$. [step 3.2, step 4.1, L11]

6.1 Every point of $\varphi[S]$ lies in some $[a_i,b_i]$, because every point of $S$ lies in some $J_i$; and $\sum_{i<N}(b_i-a_i) \le \iota(N)\cdot \bigl(1/\iota(N)\bigr)^{2}\cdot 2^{-1} = 1/\bigl(2\,\iota(N)\bigr)$ by [L10]. [step 4.1, step 5.1, L10]

7.1 Given $\varepsilon>0$, [L10] supplies $N \ge 1$ with $1/(2\iota(N)) \le \varepsilon$; so $\varphi[S]$ has content zero and therefore measure zero by [L9]. [step 6.1, L9, L10]

8.1 **$f := \mathbf{1}_{\varphi[S]}$ is integrable on $J = [0,\varphi(1)]$.** It is bounded, with values in $\{0,1\}$. $S$ is compact by [L1] and $\varphi$ is continuous by [L5] and [L3], so $\varphi[S]$ is compact, hence closed, by [L8]; therefore at every $z \in J \setminus \varphi[S]$ some neighbourhood misses $\varphi[S]$ and $f$ vanishes on it, so $f$ is continuous there. The discontinuity set of $f$ is thus contained in $\varphi[S]$, which is null by step 7.1, so $f$ is integrable by [L9]. [step 2.1, step 7.1, L1, L3, L8, L9]

9.1 **$f\circ\varphi = \mathbf{1}_{S}$ on $[0,1]$.** For $x \in [0,1]$: if $x \in S$ then $\varphi(x) \in \varphi[S]$ and $f(\varphi(x)) = 1$; if $x \notin S$ then $\varphi(x) \notin \varphi[S]$, since $\varphi$ is injective by step 3.1, and $f(\varphi(x)) = 0$. Also $\varphi[\,[0,1]\,] \subseteq J$ by step 3.1. [step 3.1, step 8.1]

10.1 **$\mathbf{1}_{S}$ is discontinuous at every point of $S$.** Let $x \in S$ and $\rho>0$; the set $(x-\rho,x+\rho)\cap(0,1)$ contains a nonempty open interval, which by [L2] is not contained in $S$, so some $y$ in it has $\mathbf{1}_S(y) = 0$ while $\mathbf{1}_S(x)=1$; no $\delta$ works for $\varepsilon = 2^{-1}$. At $x \notin S$ the function vanishes on a neighbourhood, $S$ being closed, so it is continuous there. [step 9.1, L1, L2, L11]

11.1 The discontinuity set of $f\circ\varphi$ on $[0,1]$ is therefore exactly $S$, which is not null by [L1]; so $f\circ\varphi$ is bounded and **not** Riemann integrable, by [L9]. [step 9.1, step 10.1, L1, L9]

12.1 So $\varphi$ is differentiable on $[0,1]$ with $\varphi'$ integrable, $f$ is integrable on an interval containing $\varphi[\,[0,1]\,]$, and $f\circ\varphi$ is not integrable: the claim is false, and the continuity hypothesis on $f$ in [[thm-substitution]] cannot be weakened to integrability. [step 2.1, step 8.1, step 9.1, step 11.1] ∎

## Remarks

- **Why $\varphi$ has to be built and cannot be a familiar function.** The set on which $f\circ\varphi$ misbehaves is $\varphi^{-1}$ of a null set, and for a Lipschitz $\varphi$ with $\varphi'$ bounded away from $0$ that preimage is again null. What makes the witness work is that $\varphi' = d_S$ vanishes on the whole of $S$, so $\varphi$ crushes a set of positive measure onto a null set while remaining injective; step 3.2 is the quantitative form of that crushing.

- **The substitution identity itself is not refuted here, and that is stated rather than glossed over.** For this very pair one has $(f\circ\varphi)\varphi' = \mathbf{1}_S \cdot d_S$, which is the zero function because $d_S$ vanishes on $S$; so the right-hand side of the substitution formula does exist for this pair and equals $0$, as does the left-hand side. What fails is the intermediate claim that the composite $f\circ\varphi$ is integrable, which is what a proof of the identity with $f$ merely integrable would have to establish, and which is what [[thm-substitution]]'s continuity hypothesis delivers through [[thm-composition-with-a-continuous-function]]. No pair with both sides defined and unequal is exhibited anywhere on this page.

- **The fat Cantor set is doing exactly one job.** It supplies a closed set with empty interior that is not null. Any such set would serve; $S$ is the published one, and [[thm-fat-cantor-set-has-positive-measure]] is what supplies all three properties without reproving them.
