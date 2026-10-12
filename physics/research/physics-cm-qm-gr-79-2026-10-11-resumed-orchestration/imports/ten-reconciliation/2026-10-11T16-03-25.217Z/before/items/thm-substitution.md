---
id: thm-substitution
kind: theorem
title: "Substitution: if $\\varphi$ is differentiable on $[c,d]$ with $\\varphi'$ integrable and $f$ is continuous on an interval containing $\\varphi([c,d])$, then $\\int_{\\varphi(c)}^{\\varphi(d)} f = \\int_c^d (f\\circ\\varphi)\\,\\varphi'$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [cor-primitives-of-a-continuous-function, thm-ftc-second-part, thm-chain-rule, thm-composition-with-a-continuous-function, cor-integrability-of-absolute-values-products-and-lattice-operations, thm-continuous-implies-integrable, cor-continuous-image-of-an-interval-is-an-interval, def-oriented-integral, def-derivative, def-continuity-real, cor-differentiable-implies-continuous, def-interval, def-limit-point-r, def-darboux-integral, def-max-min]
forward_refs: [fs-substitution-holds-for-every-integrable-integrand]
justified_by: []
aliases: [thm-change-of-variables-one-dimensional]
landmark: true
short: "substitution"
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
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 6"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "Carnegie Mellon 21-269, Riemann integration notes"
      url: "https://www.math.cmu.edu/~gautam/c/2026-269/notes/rint.html"
    - title: "J. Lebl, Basic Analysis I, Fundamental theorem of calculus"
      url: "https://www.jirka.org/ra/html/sec_ftc.html"
pipeline_run: null
---

## Statement

Let $c < d$ be reals and let $\varphi : [c,d] \to \mathbb{R}$ be differentiable
at every point of $[c,d]$ as a function on $[c,d]$ ([[def-derivative]]), with
$\varphi'$ integrable on $[c,d]$ ([[def-darboux-integral]]). Let
$J \subseteq \mathbb{R}$ be order-convex with at least two elements
([[def-interval]]) with $\varphi[\,[c,d]\,] \subseteq J$, and let $f : J \to
\mathbb{R}$ be continuous on $J$ ([[def-continuity-real]]).

Then $(f\circ\varphi)\,\varphi'$ is integrable on $[c,d]$ and

$$\int_{\varphi(c)}^{\varphi(d)} f \;=\; \int_c^d (f\circ\varphi)\,\varphi' ,$$

the left-hand integral being the oriented one of [[def-oriented-integral]].

**Neither injectivity nor monotonicity of $\varphi$ is assumed**, and that is
exactly why the left-hand side is written with oriented limits: $\varphi(d)$ may
lie below $\varphi(c)$, and $\varphi$ may return to the same value many times.
The proof runs through a primitive of $f$ and the chain rule, and no inverse
function is ever formed.

**Continuity of $f$ is a hypothesis and cannot be weakened to integrability.**
With $f$ merely integrable the composite $f \circ \varphi$ need not be
integrable at all, so the right-hand side need not exist; that is
the false statement that weakens it on the companion page.

## Facts & Assumptions

**Given:** Reals $c < d$, a differentiable $\varphi : [c,d] \to \mathbb{R}$ with $\varphi'$ integrable, an order-convex $J$ with at least two elements containing $\varphi[\,[c,d]\,]$, and a continuous $f : J \to \mathbb{R}$.

[L1] A function differentiable at every point of $[c,d]$ is continuous there, and a continuous function on $[c,d]$ is integrable ([[cor-differentiable-implies-continuous]], [[thm-continuous-implies-integrable]], [[def-continuity-real]]).

[L2] For a continuous $u$ on $[c,d]$ with $c \le d$, $u[\,[c,d]\,] = [m,M]$ with $m = \min u[\,[c,d]\,]$ and $M = \max u[\,[c,d]\,]$ ([[cor-continuous-image-of-an-interval-is-an-interval]], claim 2, [[def-max-min]]).

[L3] A continuous function on an order-convex set with at least two elements has a primitive there, two primitives differ by a constant, and $\int_p^q f = G(q)-G(p)$ for $p<q$ in that set and any primitive $G$ ([[cor-primitives-of-a-continuous-function]]).

[L4] Chain rule: if $\psi$ is differentiable at $t$, $\psi(t)$ is a limit point of the domain of $H$ and $H$ is differentiable at $\psi(t)$, then $H\circ\psi$ is differentiable at $t$ with $(H\circ\psi)'(t) = H'(\psi(t))\psi'(t)$; every point of a nondegenerate order-convex set is a limit point of it ([[thm-chain-rule]], [[def-limit-point-r]], [[def-interval]], [[def-derivative]]).

[L5] If $w$ is integrable on $[c,d]$ with values in $[m,M]$ and $g$ is continuous on $[m,M]$ then $g\circ w$ is integrable ([[thm-composition-with-a-continuous-function]]); a restriction of a continuous function is continuous ([[def-continuity-real]]).

[L6] A product of two integrable functions on $[c,d]$ is integrable ([[cor-integrability-of-absolute-values-products-and-lattice-operations]], claim 1).

[L7] If $H$ is differentiable at every point of $[c,d]$ with $H'$ integrable there, then $\int_c^d H' = H(d)-H(c)$ ([[thm-ftc-second-part]]).

[L8] With oriented limits, $\int_q^p f = -\int_p^q f$ and $\int_p^p f = 0$ ([[def-oriented-integral]]).

## Proof

**Proof technique:** direct.

1.1 $\varphi$ is continuous on $[c,d]$ and integrable there by [L1]. [given, L1]

1.2 By [L3] fix a primitive $F : J \to \mathbb{R}$ of $f$, so $F$ is differentiable at every point of $J$ with $F' = f$ there. [given, L3, choose]

2.1 By [L2], $\varphi[\,[c,d]\,] = [m,M]$ with $m \le M$, and $[m,M] \subseteq J$ by hypothesis. [step 1.1, given, L2]

2.2 **The left-hand side is the same increment.** If $\varphi(c) < \varphi(d)$ then both lie in $J$, so $[\varphi(c),\varphi(d)] \subseteq J$ and [L3] gives $\int_{\varphi(c)}^{\varphi(d)} f = F(\varphi(d))-F(\varphi(c))$. If $\varphi(c) = \varphi(d)$ both sides are $0$ by [L8]. If $\varphi(c) > \varphi(d)$ then the case already treated gives $\int_{\varphi(d)}^{\varphi(c)} f = F(\varphi(c))-F(\varphi(d))$, and [L8] negates both sides. [step 1.2, L3, L8]

3.1 For every $t \in [c,d]$ the point $\varphi(t)$ lies in $J$, which is a nondegenerate order-convex set, so $\varphi(t)$ is a limit point of $J$ and [L4] applies: $F\circ\varphi$ is differentiable at $t$ with $(F\circ\varphi)'(t) = F'(\varphi(t))\varphi'(t) = f(\varphi(t))\,\varphi'(t)$. [step 2.1, step 1.2, given, L4]

3.2 $f$ restricted to $[m,M]$ is continuous, so by [L5] applied to $w := \varphi$ the composite $f\circ\varphi$ is integrable on $[c,d]$. [step 1.1, step 2.1, given, L5]

4.1 Hence $(f\circ\varphi)\varphi'$ is integrable on $[c,d]$ by [L6], $\varphi'$ being integrable by hypothesis. [step 3.2, given, L6]

5.1 By [L7] applied to $H := F\circ\varphi$, whose derivative is $(f\circ\varphi)\varphi'$ by step 3.1 and is integrable by step 4.1, $\int_c^d (f\circ\varphi)\varphi' = F(\varphi(d)) - F(\varphi(c))$. [step 3.1, step 4.1, L7]

6.1 Comparing steps 5.1 and 2.2 gives $\int_{\varphi(c)}^{\varphi(d)} f = \int_c^d (f\circ\varphi)\varphi'$. [step 5.1, step 2.2] ∎

## Remarks

- **[[def-oriented-integral]] is what makes step 2.2 legal.** Without the orientation convention the symbol $\int_{\varphi(c)}^{\varphi(d)} f$ would be undefined whenever $\varphi(d) \le \varphi(c)$, and the theorem would have to carry a monotonicity hypothesis it does not need.

- **Two integrability facts are checked, not assumed.** That $f\circ\varphi$ is integrable is [[thm-composition-with-a-continuous-function]] with the hypotheses in the order that theorem requires — the continuous function is the outer one — and that the product with $\varphi'$ is integrable is the product clause of [[cor-integrability-of-absolute-values-products-and-lattice-operations]]. Neither is automatic, and the companion page's false statement is exactly the claim that the first of them survives weakening $f$ to an integrable function.

- **Where the more familiar hypotheses sit.** If $\varphi$ is continuously differentiable then $\varphi'$ is integrable automatically, and if $\varphi$ is in addition strictly monotone then the substitution can be read in either direction; neither refinement is needed above, and neither is claimed.

- **Forward reference, orientation only.** The false statement that weakens the continuity of $f$ to integrability is [[fs-substitution-holds-for-every-integrable-integrand]] on the companion page; nothing above depends on it.
