---
id: ex-x-cubed-is-strictly-increasing-with-a-vanishing-derivative
kind: example
title: "$x \\mapsto x^{3}$ is increasing on $\\mathbb{R}$ although its derivative vanishes at $0$, which is the witness for the false statement that a vanishing derivative forbids strict increase, and which makes its inverse non-differentiable at $0$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [fs-vanishing-derivative-forbids-strict-increase, def-derivative, lem-derivative-of-a-power, def-monotone-function, thm-monotonicity-from-the-derivative, def-integer-power, thm-derivative-of-an-inverse, thm-algebra-of-continuous-functions, def-continuity-real, def-interval, def-canonical-natural, lem-of-naturals-positive, def-injection-surjection-bijection]
justified_by: []
aliases: []
landmark: false
short: "$x^{3}$ increases with $f'(0)=0$"
proof_strategy: direct
verification:
  audited: 2026-07-28
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
sources:
  scraped: []
  references:
    - title: "Stationary point (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Stationary_point"
    - title: "Monotonic function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Monotonic_function"
    - title: "Inverse function rule (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Inverse_function_rule"
    - title: "T. Gantumur, Differentiation"
      url: "https://www.math.mcgill.ca/gantumur/math248f19/differentiation.pdf"
    - title: "J. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Example

Let $f : \mathbb{R} \to \mathbb{R}$ be $f(x) = x^{3}$ ([[def-integer-power]]),
with $\iota$ the canonical natural of [[def-canonical-natural]].

**Claim 1.** $f$ is differentiable at every $c \in \mathbb{R}$ with
$f'(c) = \iota(3)c^{2}$, and $f'(0) = 0$.

**Claim 2.** $f$ is increasing on $\mathbb{R}$, in the strict sense of
[[def-monotone-function]].

**Claim 3.** So the hypothesis "$f' > 0$ at every interior point" of claim 2 of
[[thm-monotonicity-from-the-derivative]] is **sufficient but not necessary** for
a function on an interval to be increasing; and the converse recorded there,
claim 5, which gives only $f' \ge 0$, cannot be strengthened to $f' > 0$.

**Claim 4.** $f$ is continuous and injective on $\mathbb{R}$, so it has a
continuous inverse $g$ on $f[\mathbb{R}]$
([[thm-derivative-of-an-inverse]]); and since $f'(0) = 0$, that inverse is
**not** differentiable at $f(0) = 0$.

Claims 1 and 2 are established in the refutation of
[[fs-vanishing-derivative-forbids-strict-increase]] and are quoted here; claims
3 and 4 are the two consequences worth drawing from them.

## Facts & Assumptions

**Given:** The function $f : \mathbb{R} \to \mathbb{R}$, $f(x) = x^{3}$.

[L1] The refutation of [[fs-vanishing-derivative-forbids-strict-increase]] establishes, for this $f$: that $f$ is differentiable at every real $c$ with $f'(c) = \iota(3)c^{2}$ ([[lem-derivative-of-a-power]], [[def-derivative]]); that $f'(0) = 0$; and that $f$ is increasing on $\mathbb{R}$ ([[def-monotone-function]]).

[L2] A strictly monotone function is injective ([[def-monotone-function]], [[def-injection-surjection-bijection]]).

[L3] $x \mapsto x^{n}$ is continuous at every point of its domain, for every natural $n$ ([[thm-algebra-of-continuous-functions]], claim 5, [[def-continuity-real]]).

[L4] $\mathbb{R}$ is order-convex and has at least two elements ([[def-interval]], [[lem-of-naturals-positive]]).

[L5] Derivative of an inverse ([[thm-derivative-of-an-inverse]]): for $I$ order-convex with at least two elements and $f : I \to \mathbb{R}$ continuous and injective, with inverse $g : f[I] \to I$, and for $c \in I$ at which $f$ is differentiable, if $f'(c) = 0$ then $g$ is not differentiable at $f(c)$.

[L6] Monotonicity from the derivative ([[thm-monotonicity-from-the-derivative]]): claim 2 says that $f' > 0$ at every interior point of an interval gives an increasing function, and claim 5 says that an increasing function differentiable at a limit point of the interval has $f' \ge 0$ there.

[L7] $0^{3} = 0$, since $0^{n} = 0$ for every natural $n \ge 1$ ([[def-integer-power]]).

## Verification

**Proof technique:** direct.

1.1 **Claims 1 and 2.** By [L1] the function $f$ is differentiable at every $c \in \mathbb{R}$ with $f'(c) = \iota(3)c^{2}$, its derivative at $0$ is $0$, and $f$ is increasing on $\mathbb{R}$. [L1]

2.1 $f$ is injective by [L2], being increasing; it is continuous on $\mathbb{R}$ by [L3]; and $\mathbb{R}$ is order-convex with at least two elements by [L4]. So $f$ satisfies every hypothesis of [L5] with $I := \mathbb{R}$. [step 1.1, L2, L3, L4, L5]

2.2 **Claim 3.** The hypothesis of claim 2 of [L6] fails for $f$ on $\mathbb{R}$, since $f'(0) = 0$ is not positive, and yet the conclusion holds, $f$ being increasing on $\mathbb{R}$ by step 1.1. So that hypothesis is sufficient and not necessary. Likewise the conclusion $f' \ge 0$ of claim 5 of [L6] is attained with equality at $0$ by step 1.1, so it cannot be strengthened to $f' > 0$. [step 1.1, L6]

3.1 **Claim 4.** By step 2.1 the hypotheses of [L5] hold, and by step 1.1 the function $f$ is differentiable at $0$ with $f'(0) = 0$. So [L5] gives that the inverse $g : f[\mathbb{R}] \to \mathbb{R}$ is not differentiable at $f(0)$, which is $0$ by [L7]. [step 1.1, step 2.1, L5, L7]

4.1 All four claims are verified: claims 1 and 2 by step 1.1, claim 3 by step 2.2 and claim 4 by step 3.1. [step 1.1, step 2.2, step 3.1] ∎

## Remarks

- **The set $f[\mathbb{R}]$ is not identified here, and nothing needs it to be.** [[thm-derivative-of-an-inverse]] states its conclusion about the inverse on $f[I]$, whatever that set is; that $f[\mathbb{R}] = \mathbb{R}$, so that $g$ is the cube root on the whole line, would need a surjectivity argument this item does not make and does not use.

- **Two different false readings, one witness.** That $f'(c) = 0$ forbids strict increase is refuted by claim 2; that $f'(c) = 0$ marks a local extremum is refuted by the same fact, since an increasing function has no local extremum at an interior point of its interval. The second reading is the converse of [[thm-fermat-interior-extremum]], and this page records it here rather than as a separate false statement.

- **Where the inverse fails, and why it is not surprising.** Claim 4 is not a defect of the inverse rule but a theorem: wherever the derivative of an injective continuous function vanishes, the inverse cannot be differentiable, because the chain rule would then give the identity a derivative of $0$. The cube root at $0$ is the standard picture of that, a vertical tangent, and it is proved here without any picture.
