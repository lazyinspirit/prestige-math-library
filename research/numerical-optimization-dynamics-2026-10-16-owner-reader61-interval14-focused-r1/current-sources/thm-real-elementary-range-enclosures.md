---
id: thm-real-elementary-range-enclosures
kind: theorem
title: Certified real elementary-function evaluations enclose their ranges
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
page: outward-rounded-interval-and-ball-arithmetic
dependency_level: 10
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [alg-certified-elementary-range-evaluation, def-real-elementary-functions-and-domains, thm-outward-rounded-operations-are-isotone-and-dag-sound, lem-range-reduced-exp-log-and-arctan-series-enclosures, lem-trigonometric-identities-machin-and-range-reduction, lem-mean-value-theorem-on-closed-interval, lem-absolutely-convergent-series-cauchy-product]
sources:
  references:
    - title: "Rump, Rigorous and Portable Standard Functions, §§5–7"
      url: "https://www.tuhh.de/ti3/paper/rump/Ru01b.pdf"
    - title: "Rump, Verification methods: Rigorous results using floating-point arithmetic, §§5–8"
      url: "https://www.tuhh.de/ti3/rump/intlab/ActaNumerica2010.pdf"
---

## Statement

Every finite interval returned for a requested real output node by
[[alg-certified-elementary-range-evaluation]] on an input interval in the
domain of $\exp$, $\ln$, $\sqrt{\phantom{x}}$, $\arctan$, $\sin$, $\cos$, or
$\tan$ contains the exact range of the corresponding function on that
interval. For the same typed DAG and designated real output node, if all
input intervals are nested coordinatewise, all constant enclosures are fixed,
and both calls use the same finite dyadic format and truncation index $N$,
then, whenever both calls return finite enclosures, the canonical branch-cell
and fixed-term construction makes the smaller domain's computed enclosure a
subset of the larger one's.
An unresolved fixed branch, pole, invalid domain or overflow returns its
stated non-finite status and carries no finite success claim.

## Facts & Assumptions

**Given:** The finite algorithm in [[alg-certified-elementary-range-evaluation]], exact arithmetic enclosure in [[thm-outward-rounded-operations-are-isotone-and-dag-sound]], the series tails in [[lem-range-reduced-exp-log-and-arctan-series-enclosures]], trigonometric range reduction in [[lem-trigonometric-identities-machin-and-range-reduction]], and monotonicity deductions from [[lem-mean-value-theorem-on-closed-interval]].

[L1] [[alg-certified-elementary-range-evaluation]]: every finite elementary branch uses interval evaluation of exact rational series coefficients, a fixed truncation count, a certified remainder and a canonical finite partition; unresolved branches return `inconclusive`.

[L2] [[thm-outward-rounded-operations-are-isotone-and-dag-sound]]: every finite arithmetic interval node encloses its exact node range and is inclusion-isotone.

[L3] [[lem-range-reduced-exp-log-and-arctan-series-enclosures]]: the truncated exp, log and arctan series enclose the point values with the displayed tails.

[L4] [[lem-trigonometric-identities-machin-and-range-reduction]]: quarter-turn reduction is exact, $|\sin|,|\cos|\le1$, and the reduced sine/cosine Taylor tails are enclosed by $T_s,T_c$.

[L5] [[lem-trigonometric-identities-machin-and-range-reduction]]: arctangent is odd, $A(t)=\pi/2-A(1/t)$ for $t>0$, and $A(u)+A(v)=A((u+v)/(1-uv))$ for $u,v\ge0$, $uv<1$.

[L6] [[lem-absolutely-convergent-series-cauchy-product]]: finite repeated products of absolutely convergent power series may be grouped by total degree, and their coefficients are the corresponding finite convolution sums.

## Proof

1.1 For an exponential input interval, the fixed scale gives the exact interval $U=2^{-s}X\subset(-1/2,1/2)$ before any storage rounding. The point bound [L3] with $|u|$ replaced by the interval's largest absolute endpoint gives a uniform tail enclosure. Exact rational interval evaluation of the polynomial and tail encloses every point; final outward conversion preserves that enclosure by [L2]. The tail radius increases with the largest absolute input, and each repeated interval square preserves inclusion by [L2]. To justify the scaling identity, put $d=2^s$. Repeated applications of [L6] to the absolutely convergent series for $\exp u$ show that the coefficient of $u^k$ in $(\exp u)^d$ is $$\sum_{n_1+\cdots+n_d=k}\frac1{n_1!\cdots n_d!} =\frac{d^k}{k!},$$ where the equality is the multinomial theorem. Thus $(\exp u)^d=\exp(du)$; set $u=x/d$. Each interval squaring preserves the resulting enclosure by [L2]. [given, L1, L2, L3, L6, algebra]

1.2 The outward cell interval built from $P_N$ contains each exact canonical cell, since $\pi\in P_N$; thus its intersection hull $X_k$ contains every input point assigned to that cell, and $X_k-kP_N/2$ contains the exact residual $r=x-k\pi/2$. The algorithm certifies this residual inside the Taylor range. By [L4], exact sine and cosine values are the stated signed swaps of $\sin r$ and $\cos r$. The polynomial interval evaluation contains each truncated value by [L2], and adding the symmetric tail interval from [L4] contains the omitted remainder. Taking the hull over all intersected cells therefore contains the full range. If the input width is at least $2\sup(P_N)$, it is at least $2\pi$, so [L4] gives the safe range $[-1,1]$. The algorithm rounds the endpoints of this exact interval outward; if the result is finite, [L2] ensures that it contains $[-1,1]$. For nested inputs, each fixed canonical cell intersection enlarges and its fixed-term interval evaluation is isotone by [L2]; the hull is therefore nested on the reduced branch. Exact rational interval polynomial and tail operations are inclusion-isotone, and the final directed endpoint conversions are nondecreasing. Intersecting with $[-1,1]$ preserves containment and nesting. A narrower cell result has endpoints $\operatorname{rd}(a),\operatorname{ru}(b)$ with $a\ge-1$ and $b\le1$; monotonicity gives $\operatorname{rd}(-1)\le\operatorname{rd}(a)$ and $\operatorname{ru}(b)\le\operatorname{ru}(1)$, so the outward-rounded wide-input result contains it. [given, L1, L2, L4, algebra]

2.1 On each positive logarithm bin, every $y$ maps to $v=(y-1)/(y+1)\in[0,1/3]$. The interval series and uniform tail from [L3] contain $\ln y$; [L3] also proves the exact logarithm scaling identity used by the algorithm. Each interval transform and sum preserves inclusion by [L2]. The fixed bin partition ensures that enlarging the input only enlarges the intersection with each bin, so its interval-series enclosure and the final hull also enlarge. The arctangent transformations follow from [L5]; on each fixed branch the rational interval maps and fixed series are isotone, and the tail radius is nondecreasing in the largest absolute transformed endpoint. [step 1.1, given, L1, L2, L3, L5, algebra]

2.2 Tangent is defined only where cosine is nonzero. On a piece whose cosine enclosure excludes zero, division is sound by [L2] and contains every $\sin x/\cos x$. If cosine may vanish, the algorithm returns a split or non-finite status, so no unsound finite value is reported. The same argument applies to square root using the bisection supplier in [L2]. [step 1.2, L1, L2]

3.1 Evaluate the finite expression DAG in topological order. Every primitive node encloses its exact value by steps 1.1, 2.1, 1.2, and 2.2; induction over the finite node order then encloses every exact intermediate and every requested output range. Each primitive's canonical partition and fixed truncation are nested on common finite branches, so the same induction preserves inclusion for nested inputs evaluated with the same format and truncation index. [step 1.1, step 2.1, step 1.2, step 2.2, induction] ∎

