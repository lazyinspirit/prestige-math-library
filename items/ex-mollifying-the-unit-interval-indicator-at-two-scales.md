---
id: ex-mollifying-the-unit-interval-indicator-at-two-scales
kind: example
title: "Mollifying $\\mathbf{1}_{[0,1]}$ at two scales"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [prop-mollifier-families-are-l-one-approximate-identities, thm-convolution-with-a-mollifier-is-smooth-and-differentiates-under-the-integral-sign, def-countable-choice, thm-linear-change-of-variables-for-lebesgue-measure, thm-lebesgue-outer-measure-and-measurability-are-translation-invariant]
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: Codex
    verdict: repaired-and-locally-checked
    date: 2026-09-08
    scope: "Owner-authorized transition-width and prerequisite repair; local checks only, no independent judge"
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Richard L. Wheeden and Antoni Zygmund, Measure and Integral: An Introduction to Real Analysis"
      url: "https://djvu.online/file/u1gYJemR8hzMe"
---
## Example

Assume Countable Choice ([[def-countable-choice]]).

Let $\varphi \in C_c^\infty(\mathbb{R})$ satisfy $\int \varphi = 1$ and
$\operatorname{supp}(\varphi) \subseteq [-1,1]$. For
$f := \mathbf{1}_{[0,1]}$ and $\varepsilon > 0$,

$$ (f*\varphi_\varepsilon)(x) = \int_0^1 \varphi_\varepsilon(x-y)\,dy = \int_{(x-1)/\varepsilon}^{x/\varepsilon}\varphi(u)\,du. $$

For $\varepsilon = 1/4$ and $\varepsilon = 1/8$, the graph is $0$ outside
$[-\varepsilon,1+\varepsilon]$, equals $1$ on $[\varepsilon,1-\varepsilon]$, and
can differ from these constant pieces only in $[-\varepsilon,\varepsilon]$
and $[1-\varepsilon,1+\varepsilon]$, each of width $2\varepsilon$.
Thus the possible transition intervals have width $1/2$ at scale $1/4$ and
width $1/4$ at scale $1/8$. Actual transitions may be narrower if the kernel
has smaller support. A signed kernel need not produce monotone transitions
or values between zero and one.

## Facts & Assumptions

**Given:** Countable Choice, a unit-mass smooth bump $\varphi$ supported in
$[-1,1]$, and $f=\mathbf{1}_{[0,1]}$.

[L1] Mollifier families are approximate identities
([[prop-mollifier-families-are-l-one-approximate-identities]]).

[L2] Convolution with a mollifier is smooth
([[thm-convolution-with-a-mollifier-is-smooth-and-differentiates-under-the-integral-sign]]).

[L3] Linear change of variables and translation invariance give the affine
one-dimensional substitution used below
([[thm-linear-change-of-variables-for-lebesgue-measure]],
[[thm-lebesgue-outer-measure-and-measurability-are-translation-invariant]]).

## Verification

**Proof technique:** direct.

1.1 The substitution $u=(x-y)/\varepsilon$ has absolute Jacobian $1/\varepsilon$ and reverses the interval endpoints, giving the displayed integral by [L3]. Since the scaled kernel is supported in $[-\varepsilon,\varepsilon]$, the original integral is zero when $x\notin[-\varepsilon,1+\varepsilon]$. [L1, L3, given, algebra]

2.1 If $x\in[\varepsilon,1-\varepsilon]$, then $x/\varepsilon\ge1$ and $(x-1)/\varepsilon\le-1$. Hence the integration interval contains the whole support of $\varphi$, and the value is exactly $1$. For $0<\varepsilon<1/2$, all remaining possible variation is confined to the two disjoint intervals $[-\varepsilon,\varepsilon]$ and $[1-\varepsilon,1+\varepsilon]$, each of width $2\varepsilon$. [L1, step 1.1, algebra]

3.1 By [L2] the convolution is smooth. Substituting $\varepsilon=1/4$ and $\varepsilon=1/8$ into step 2.1 gives the claimed widths $1/2$ and $1/4$. Support containment need not be equality, and no sign condition on $\varphi$ was imposed, so the calculation asserts neither exact transition width nor monotonicity. [L2, step 2.1, given, algebra] ∎
