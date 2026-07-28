---
id: rem-derivative-conventions
kind: remark
title: "What is fixed here and what is not: the derivative is taken at a point of the domain that is also a limit point of it, one-sided derivatives and derivatives of order above one are not introduced at this point in the reading order, and $f'(c)$ and $\\frac{df}{dx}(c)$ name the same real number"
status: published
origin: session
deps: [def-derivative, def-function-limit, def-limit-point-r, def-one-sided-limits, def-interval, thm-caratheodory-characterisation, cor-differentiable-implies-continuous, thm-algebra-of-derivatives, thm-chain-rule, thm-derivative-of-an-inverse, thm-derivative-linear-approximation-form, lem-derivative-of-a-power, thm-fermat-interior-extremum, cor-bounded-derivative-implies-lipschitz]
justified_by: []
aliases: []
landmark: false
short: "conventions for the derivative"
verification:
  audited: 2026-07-28
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
sources:
  scraped: []
  references:
    - title: "Derivative (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Derivative"
    - title: "Notation for differentiation (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Notation_for_differentiation"
    - title: "One-sided limit (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/One-sided_limit"
pipeline_run: null
---

This page fixes fewer conventions than a reader of a calculus text may expect,
and it is worth saying which, so that a later page can rely on them and so that
nothing here is read as more than it is.

**Where a derivative may be taken.** $f'(c)$ is defined only when $c$ belongs to
the domain $A$ of $f$ **and** is a limit point of $A$ ([[def-derivative]],
[[def-limit-point-r]]). At an isolated point of $A$ the symbol is not defined,
and the function is neither differentiable nor non-differentiable there: the
question is not posed. This is inherited from [[def-function-limit]], which
leaves $\lim_{x \to c}$ undefined at an isolated point for the reason recorded
there, namely that the $\varepsilon$-$\delta$ condition would be satisfied
vacuously by every real at once.

**The domain is part of the data.** "Differentiable at $c$" is a statement about
the pair $(f, A)$ and the point $c$, not about $f$ near $c$ in isolation.
Shrinking the domain preserves differentiability and the value of the derivative
whenever the smaller domain still has $c$ as a limit point
([[def-derivative]]), but enlarging it need not, and the companion page's
witness at a corner shows that it need not. Wherever a statement on this page
says "differentiable at every point of $(a,b)$" for a function on $[a,b]$, the
domain meant is $[a,b]$.

**One-sided derivatives are not introduced at this point in the reading order.**
No item up to this point in the reading order defines one, and nothing below may
be cited as though one had been. The ingredient is available:
[[def-one-sided-limits]] defines the limit of $f$ at $c$ from the right as the
limit at $c$ of the restriction of $f$ to $A \cap (c, \infty)$
([[def-interval]]), and a right derivative would be that limit applied to the
difference quotient. Nothing on this page needs it, so nothing on this page
defines it. What does occur, and should not be confused with it, is the
derivative at an **endpoint of an interval**: for $f$ on $[a,b]$ the symbol
$f'(a)$ is defined by [[def-derivative]] without any new convention, because the
domain supplies points on one side of $a$ only and the difference quotient is a
function on $(a,b]$. So the object other texts call a one-sided derivative
appears here as an ordinary derivative on a domain that happens to lie on one
side.

**Derivatives of order above one are not introduced at this point in the reading
order** either, and no item up to this point in the reading order defines one.
A later page takes them up; nothing on this page anticipates it. Doing so
requires more than iterating the definition: $f'$ is a function on the set of
points at which $f$ is differentiable, and to differentiate *that* function at a
point one needs the point to be a limit point of that set, which is a hypothesis
about $f$ and not a formality. No statement on this page mentions $f''$, and
none should be read as implying anything about it.

**Two notations, one object.** $f'(c)$ and $\frac{df}{dx}(c)$ name the same real
number. The second is a name, not a quotient: nothing in this library divides
$df$ by $dx$, no object called $df$ is introduced, and the letter $x$ in it is a
name for the argument of $f$ and not a variable that is being fixed or varied.
This page writes $f'(c)$ throughout.

**Two descriptions, one notion.** By [[thm-caratheodory-characterisation]],
"$f$ is differentiable at $c$" may be read either as the convergence of the
difference quotient or as the existence of a factorisation
$f(x) - f(c) = \varphi(x)(x-c)$ with $\varphi$ continuous at $c$. The two are
equivalent, and the factor is unique, so either may be taken as the meaning of
the word without ambiguity. **Every statement on this page is phrased in the
first**, and the two readings divide the proofs between them: the differentiation
rules use the factorisation, namely
[[cor-differentiable-implies-continuous]], [[thm-algebra-of-derivatives]],
[[thm-chain-rule]] and [[thm-derivative-of-an-inverse]], each exhibiting a factor
and reading its continuity off the algebra of continuous functions; while the
rest of the page works with the difference quotient directly, among them
[[thm-derivative-linear-approximation-form]], the base cases of
[[lem-derivative-of-a-power]], and [[thm-fermat-interior-extremum]], whose whole
mechanism is the sign of the quotient near the point.

**What is deliberately not claimed anywhere on this page.** That $f'$ is
continuous where it exists; that differentiability **alone**, with no hypothesis
on $f'$, gives any regularity beyond the continuity of
[[cor-differentiable-implies-continuous]] — a *bound* on $f'$ does give more,
and that is [[cor-bounded-derivative-implies-lipschitz]]; and that a vanishing
derivative marks a local extremum. None of the three is
addressed here, and no item on this page may be cited for any of them. What *is*
recorded, as the two false statements of this page, is that the mean value
theorem needs continuity on the closed interval and that a vanishing derivative
at a point does not prevent a function from being increasing; each carries its
own witness.
