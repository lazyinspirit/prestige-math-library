---
id: def-complex-haar-l-infinity-space
kind: definition
title: Complex $L^\infty$ space of a locally compact group
status: published
origin: pipeline
dependency_level: 0
deps:
  - def-complex-haar-lp-spaces-and-compactly-supported-functions
  - def-essential-supremum-with-respect-to-a-measure
  - def-measure-null-set-and-almost-everywhere
  - def-measure-space
  - def-complex-conjugate-real-imaginary-part-and-modulus
  - lem-complex-conjugation-and-modulus-laws
  - prop-closure-properties-of-measurable-functions-used-by-the-integral
  - def-left-haar-integral-and-left-haar-measure
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: "2026-10-08"
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
sources:
  references:
    - title: "Sheldon Axler, Measure, Integration & Real Analysis"
      url: "https://measure.axler.net/MIRA.pdf"
      locator: "§7A, Definitions 7.1 and 7.3 (printed pp. 194–195); §7B, Definitions 7.15–7.18 (printed pp. 202–204)"
---

## Definition

Let $G$ be a locally compact Hausdorff group with fixed left Haar measure $\mu$
([[def-left-haar-integral-and-left-haar-measure]]). Use the complex-valued
measurability convention and modulus from
[[def-complex-haar-lp-spaces-and-compactly-supported-functions]]. For a Borel
measurable $f:G\to\mathbb C$, set
$$\|f\|_{\infty,\mu}:=\inf\{t>0:\mu(\{x\in G:|f(x)|>t\})=0\},$$
with infimum $+\infty$ when the set of such $t$ is empty. Let
$\mathcal L^\infty(G,\mu;\mathbb C)$ be the complex measurable functions with
finite $\|f\|_{\infty,\mu}$, identify $f\sim g$ when $f=g$ $\mu$-almost
everywhere, and write
$$L^\infty(G,\mu;\mathbb C):=\{[f]:f\in\mathcal L^\infty(G,\mu;\mathbb C)\}.$$
Addition and complex scalar multiplication are $[f]+[g]=[f+g]$ and
$\alpha[f]=[\alpha f]$, and the norm is $\|[f]\|_\infty:=\|f\|_{\infty,\mu}$.
This is the complex $L^\infty$ space used on the amenability page; its
functions are equivalence classes, not chosen representatives.

## Facts & Assumptions

**Given:** A locally compact Hausdorff group $G$ with a fixed left Haar measure $\mu$.

[F1] A complex measurable function is measurable exactly when its real and imaginary parts are measurable, and its modulus is measurable ([[def-complex-haar-lp-spaces-and-compactly-supported-functions]]).

[F2] The essential supremum is the infimum of the almost-everywhere upper bounds and does not change when a function is changed on a null set ([[def-essential-supremum-with-respect-to-a-measure]]).

[F3] Equality almost everywhere means equality outside a measurable null set; countable unions of null sets are null by countable subadditivity ([[def-measure-null-set-and-almost-everywhere]], [[def-measure-space]]).

[F4] The complex modulus satisfies $|zw|=|z||w|$ and $|z+w|\le|z|+|w|$ ([[lem-complex-conjugation-and-modulus-laws]]).

[F5] Sums and real scalar multiples of real measurable functions are measurable ([[prop-closure-properties-of-measurable-functions-used-by-the-integral]]).

## Proof

**Proof technique:** direct.

1.1 If $f\sim f'$ and $g\sim g'$, then outside the union of their two null exceptional sets, $f+g=f'+g'$ and $\alpha f=\alpha f'$ for every $\alpha\in\mathbb C$. The real and imaginary parts of these sums and scalar multiples are real linear combinations of measurable functions, so [F5] shows that they remain complex measurable; therefore the displayed operations are well-defined on classes. [F1, F3, F5]

2.1 The essential-supremum norm is independent of the representative by [F2] and $|f|=|g|$ wherever $f=g$. Because the set of almost-everywhere bounds is upward closed, each threshold $\|f\|_{\infty,\mu}+\varepsilon$ and $\|g\|_{\infty,\mu}+\varepsilon$ exceeds its infimum and is itself an almost-everywhere bound. Outside the union of their null exceptional sets, [F4] gives $|f+g|\le\|f\|_{\infty,\mu}+\|g\|_{\infty,\mu}+2\varepsilon$. Also $\|\alpha f\|_{\infty,\mu}=|\alpha|\|f\|_{\infty,\mu}$ by [F4] and scaling the threshold set (and directly when $\alpha=0$). Letting $\varepsilon\downarrow0$ gives the triangle inequality and homogeneity, so these operations preserve the finite-essential-supremum classes. [F1, F2, F3, F4, step 1.1, algebra]

3.1 If $\|[f]\|_\infty=0$, the upward-closed set of almost-everywhere bounds contains every $1/n>0$. Thus each measurable set $E_n=\{x:|f(x)|>1/n\}$ is null. Their countable union is null by [F3], and outside it $|f(x)|\le1/n$ for every $n$, hence $f=0$ almost everywhere and $[f]=0$. The essential-supremum norm is therefore definite, so $L^\infty(G,\mu;\mathbb C)$ is a complex normed vector space. [F2, F3, step 2.1] ∎
