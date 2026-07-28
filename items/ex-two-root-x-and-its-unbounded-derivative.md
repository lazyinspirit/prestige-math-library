---
id: ex-two-root-x-and-its-unbounded-derivative
kind: example
title: "$H(x) = 2\\sqrt{x}$ on $[0,1]$: $H$ is continuous, $H'$ is unbounded on $(0,1]$, and $H'$ is therefore not Riemann integrable"
status: published
origin: session
deps: [thm-ftc-second-part, def-darboux-sums, def-darboux-integral, def-bounded-set, thm-nth-roots-exist, def-rational-power, lem-rational-power-laws, thm-continuous-inverse, thm-derivative-of-an-inverse, thm-algebra-of-derivatives, thm-algebra-of-continuous-functions, thm-continuous-implies-integrable, lem-derivative-of-a-power, lem-power-monotone, def-injection-surjection-bijection, def-monotone-function, def-derivative, def-function-limit, def-continuity-real, def-oriented-integral, def-canonical-natural, lem-of-naturals-positive, thm-of-archimedean, cor-archimedean-reciprocal, def-integer-power, def-interval, def-ordered-field, def-complete-ordered-field]
justified_by: []
aliases: []
landmark: true
short: "$2\\sqrt{x}$ and its unbounded derivative"
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
    - title: "Square root (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Square_root"
    - title: "Fundamental theorem of calculus (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Fundamental_theorem_of_calculus"
pipeline_run: null
---

## Example

Write $\sqrt{x} := x^{1/2}$ for the unique nonnegative square root of $x \ge 0$
([[thm-nth-roots-exist]], [[def-rational-power]]) and put

$$H : [0,1] \to \mathbb{R}, \qquad H(x) \;:=\; 2\sqrt{x} .$$

Then:

1. $H$ is continuous on $[0,1]$;
2. $H$ is differentiable at every $x \in (0,1]$, with
   $H'(x) = 1/\sqrt{x}$, and it is **not** differentiable at $0$;
3. $H'$ is unbounded on $(0,1]$: $H'\bigl(1/\iota(n+1)^{2}\bigr) = \iota(n+1)$ for
   every $n \in \mathbb{N}$;
4. consequently **no** function on $[0,1]$ agreeing with $H'$ on $(0,1]$ is
   Riemann integrable on $[0,1]$, because Darboux sums are defined only for
   bounded functions ([[def-darboux-sums]]).

**So the second fundamental theorem does not apply on $[0,1]$**, even though $H$
is continuous there and differentiable on $(0,1]$: both hypotheses of
[[thm-ftc-second-part]] fail, differentiability at $0$ and integrability of the
derivative.

**What is available, and what is not.** On $[\eta,1]$ with $0 < \eta < 1$
everything works: $H'$ is continuous there, hence integrable, and

$$\int_{\eta}^{1} H' \;=\; H(1) - H(\eta) \;=\; 2 - 2\sqrt{\eta} .$$

The value that the right-hand side approaches as $\eta$ shrinks is **not**
computed here and is not called an integral: $\int_0^1 H'$ is undefined, and the
object that repairs it is the improper integral, which belongs to a later page.

## Facts & Assumptions

**Given:** The function $H(x) = 2x^{1/2}$ on $[0,1]$, a real $\eta$ with $0<\eta<1$, and a natural number $n$.

[L1] For $a \ge 0$ there is a unique $s \ge 0$ with $s^{2} = a$, written $a^{1/2}$; $a^{1/2}>0$ when $a>0$, and $0^{1/2}=0$ ([[thm-nth-roots-exist]], [[def-rational-power]], [[lem-rational-power-laws]]).

[L2] $q : [0,\infty) \to \mathbb{R}$, $q(x) = x^{2}$, is continuous and injective on $[0,\infty)$, and $q(x) \ge 0$ there ([[thm-algebra-of-continuous-functions]], claim 5, [[lem-power-monotone]], claim 2, [[def-injection-surjection-bijection]], [[def-integer-power]]).

[L3] A continuous injective function on an order-convex set has a continuous inverse on its image ([[thm-continuous-inverse]], claims 3 and 5, [[def-interval]], [[def-monotone-function]]).

[L4] Derivative of an inverse: with $f$ continuous and injective on an order-convex $I$ having at least two elements, $g$ its inverse, $c \in I$ and $b = f(c)$: if $f$ is differentiable at $c$ with $f'(c) \ne 0$ then $g$ is differentiable at $b$ with $g'(b) = 1/f'(c)$ ([[thm-derivative-of-an-inverse]], [[def-derivative]]).

[L5] $q'(c) = \iota(2)\,c$ for every real $c$, and a scalar multiple of a differentiable function is differentiable with the scaled derivative ([[lem-derivative-of-a-power]], claim 2, [[thm-algebra-of-derivatives]], claim 2, [[def-canonical-natural]]).

[L6] A quotient of continuous functions is continuous where the denominator does not vanish; a continuous function on a closed bounded interval with distinct endpoints is integrable there ([[thm-algebra-of-continuous-functions]], claim 4, [[thm-continuous-implies-integrable]], [[def-continuity-real]], [[def-darboux-integral]]).

[L7] If $G$ is differentiable at every point of $[p,q]$ with $G'$ integrable there, then $\int_p^q G' = G(q)-G(p)$ ([[thm-ftc-second-part]], [[def-oriented-integral]]).

[L8] Darboux sums, and therefore Riemann integrability, are defined only for bounded functions ([[def-darboux-sums]], [[def-bounded-set]], [[def-darboux-integral]]).

[L9] $\iota(n+1) \ge 1 > 0$, and for every real $w$ there is a natural $n$ with $w < \iota(n+1)$ ([[def-canonical-natural]], [[lem-of-naturals-positive]], [[thm-of-archimedean]], [[cor-archimedean-reciprocal]]).

[L10] Ordered-field arithmetic: a positive real has a positive inverse, the order is total and transitive, and multiplying an inequality by a positive real preserves it ([[def-ordered-field]], [[def-complete-ordered-field]], [[def-function-limit]]).

## Verification

**Proof technique:** direct.

1.1 By [L2] the map $q(x)=x^{2}$ is continuous and injective on the order-convex $[0,\infty)$, and its image is exactly $[0,\infty)$: every value is $\ge 0$, and every $a \ge 0$ is $q(a^{1/2})$ by [L1]. [L1, L2]

2.1 By [L3] the inverse $g : [0,\infty) \to [0,\infty)$ of $q$ is continuous, and $g(a) = a^{1/2}$ by the uniqueness in [L1]. Hence $H = 2g$ restricted to $[0,1]$ is continuous, which is claim 1. [step 1.1, L1, L3]

2.2 Let $x \in (0,1]$ and put $c := x^{1/2} > 0$ by [L1]. By [L5], $q$ is differentiable at $c$ with $q'(c) = \iota(2)c = 2c \ne 0$; so [L4] gives $g$ differentiable at $x = q(c)$ with $g'(x) = 1/(2c) = 1/(2\sqrt{x})$. [step 1.1, L1, L4, L5, L10]

3.1 Hence $H = 2g$ is differentiable at every $x \in (0,1]$ with $H'(x) = 2/(2\sqrt{x}) = 1/\sqrt{x}$, by [L5]. [step 2.2, L5]

4.1 **Claim 3.** For $n \in \mathbb{N}$ put $x_n := 1/\iota(n+1)^{2}$, a real in $(0,1]$ by [L9]. Then $\sqrt{x_n} = 1/\iota(n+1)$, since that number is positive with square $x_n$ and [L1] gives uniqueness; so $H'(x_n) = \iota(n+1)$ by step 3.1. [step 3.1, L1, L9, L10]

5.1 $H'$ is unbounded on $(0,1]$: given a real $M \ge 0$, [L9] supplies $n$ with $M < \iota(n+1) = H'(x_n)$. [step 4.1, L9]

5.2 **$H$ is not differentiable at $0$.** The difference quotient of $H$ at $0$ is $x \mapsto 2\sqrt{x}/x = 2/\sqrt{x}$ for $x \in (0,1]$, by [L1] and [L10]; at $x_n$ it takes the value $2\iota(n+1)$, which exceeds every real by [L9]. So no real $L$ can satisfy the $\varepsilon$-$\delta$ condition with $\varepsilon = 1$: any $\delta>0$ admits some $x_n < \delta$, again by [L9], at which the quotient exceeds $L+1$. [step 4.1, L1, L9, L10]

6.1 **Claim 4.** Let $u : [0,1] \to \mathbb{R}$ agree with $H'$ on $(0,1]$. By step 5.1, $u$ is unbounded on $[0,1]$, so it has no Darboux sums and is not Riemann integrable there, by [L8]. [step 5.1, L8]

7.1 **The hypotheses of the second fundamental theorem both fail on $[0,1]$**, by step 5.2 and step 6.1; so [L7] gives nothing there, and $\int_0^1 H'$ is an undefined symbol. [step 5.2, step 6.1, L7, L8]

8.1 **On $[\eta,1]$ everything works.** There $\sqrt{\cdot}$ is continuous and does not vanish, so $H' = 1/\sqrt{\cdot}$ is continuous on $[\eta,1]$ by [L6] and integrable there; $H$ is differentiable at every point of $[\eta,1]$ by step 3.1; so [L7] gives $\int_{\eta}^{1}H' = H(1)-H(\eta) = 2 - 2\sqrt{\eta}$. [step 2.1, step 3.1, L1, L6, L7] ∎

## Remarks

- **Boundedness, not continuity, is what fails.** $H'$ is continuous at every point of $(0,1]$; what defeats Riemann integrability on $[0,1]$ is that [[def-darboux-sums]] takes a supremum of $f$ over each subinterval and the subinterval containing $0$ has none. No choice of value at $0$ repairs this, which is why claim 4 quantifies over *every* extension of $H'$.

- **This is the standard motivation for the improper integral, and it is left standing here.** The numbers $2 - 2\sqrt{\eta}$ of step 8.1 approach $2$ as $\eta$ shrinks, and a later page defines an object whose value is $2$. Calling that object $\int_0^1 H'$ before it has been defined would be the error this item exists to avoid; nothing above computes it.

- **The square root is obtained from published material and not assumed.** Existence and uniqueness of the nonnegative $n$-th root is [[thm-nth-roots-exist]]; continuity of $x \mapsto \sqrt{x}$ comes from [[thm-continuous-inverse]] applied to $x \mapsto x^{2}$ on $[0,\infty)$; and the derivative comes from [[thm-derivative-of-an-inverse]], whose second clause also explains the failure at $0$: there $q'(0) = 0$, so the inverse is not differentiable at $q(0) = 0$.
