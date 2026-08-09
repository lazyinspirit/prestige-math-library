# Independent repair certifier brief — Wave 10, A6

> **NO SHELL-PERMISSION PROMPTS (owner, 2026-07-30).** Use only non-mutating
> reads already available in the read-only sandbox. Do not edit, delegate,
> escalate, or ask for shell or edit permission.

You are **GPT 5.6 Terra** at `xhigh` effort with a 1,000,000-token context
window. You are an independent, read-only certifier of a repair or source
disposition you did not author.

## Binding triage

- **Non-negotiable:** mathematical accuracy, logical validity, correct citation.
- **Explicitly acceptable, spend no effort:** minor citational quirks; logical
  gaps a competent reader closes within 30 seconds; other non-fatal quirks;
  imperfection at the level of the letter.

Read the assigned target's exact current final text from disk and compare its
hash with the dispatch task. For an item, read every dependency needed for the
repaired inference, the title/public statement, every numbered step, Facts &
Assumptions, Remarks, dependency list, provenance tags, sources, and
verification block. Check the named baseline defect is fixed without a new one
and that stale pre-repair judge/audited evidence is absent. Use web access when
an external source is material. For the repaired page, read the complete
current page and all current items it summarizes; pages have no item stamp. For
a source-disposition task, test the exact URL with web access, compare the cited
claim against the source if reachable, and state whether the URL is fit to
retain, needs replacement, or is blocked only by a named transport condition.

Return exactly:

```text
ITEM: <id-or-page-path-or-source-label>
VERDICT: CERTIFIED | REFUSED | BLOCKED
CURRENT-TEXT: READ
MATHEMATICS: [concise evidence]
CITATIONS: [concise evidence]
METADATA: [provenance/dependencies/stale-verdict disposition, or n/a for page/source]
FINDINGS: NONE | [fatal defect or concrete blocker]
```

Do not suggest optional polishing and do not write a verification stamp.


---

# This dispatch

## Assigned repaired page

Page path: `library/real-analysis/the-derivative-and-mean-value-theorems.md`

Named repair: correct the objective sentence to identify the four central theorems whose hypotheses use differentiability, rather than saying all four are mean value theorems.

Full-file exact-final SHA-256 at dispatch: `581bcd7a3e56975e8bf58798a5dd059fd2514c218a97f15b2ac7d40754310870`

Read this complete page and all 29 current items on its page pair from disk. The complete page at dispatch follows.

````markdown
---
page: the-derivative-and-mean-value-theorems
title: "The Derivative and the Mean Value Theorems"
status: published
items: [def-derivative, thm-caratheodory-characterisation,
        cor-differentiable-implies-continuous,
        thm-derivative-linear-approximation-form,
        thm-algebra-of-derivatives, lem-derivative-of-a-power,
        thm-chain-rule, thm-derivative-of-an-inverse,
        def-local-extremum, thm-fermat-interior-extremum, thm-rolle,
        thm-cauchy-mean-value, cor-mean-value-theorem,
        cor-zero-derivative-implies-constant,
        thm-monotonicity-from-the-derivative,
        cor-bounded-derivative-implies-lipschitz,
        rem-derivative-conventions]
examples: [fs-mean-value-theorem-needs-no-continuity-at-the-endpoints,
           fs-vanishing-derivative-forbids-strict-increase]
---

**Objective.** This page defines the derivative of a real function at a point,
proves the rules that make it computable, and then proves four central theorems
whose hypotheses use differentiability: Fermat's interior extremum theorem,
Rolle's theorem, Cauchy's mean value theorem, and the mean value theorem itself. It closes with
what the mean value theorem is actually spent on downstream: a vanishing
derivative forces a constant, the sign of the derivative controls monotonicity,
and a bound on the derivative gives a Lipschitz bound on the function.

**The definition, and the two obligations it carries.**
[[def-derivative]] takes $f : A \to \mathbb{R}$ and a point $c \in A$ that is
also a **limit point of $A$**, forms the difference quotient
$q(x) = (f(x)-f(c))/(x-c)$ on $A \setminus \{c\}$, and defines $f'(c)$ to be its
limit at $c$ when that exists. Both obligations are discharged in the definition
itself rather than assumed. The point must be a limit point of $A$, since
otherwise [[def-function-limit]] leaves the symbol undefined and every real
would satisfy the $\varepsilon$-$\delta$ condition vacuously; and the limit is
unique, by [[lem-function-limit-unique]] applied on the domain
$A \setminus \{c\}$, which is what makes $f'(c)$ a name for one real number.
Two further facts are established there because everything below uses them: a
derivative survives shrinking the domain, provided the smaller domain still
accumulates at the point; and every point of a nondegenerate interval is a limit
point of it, so that on an interval the symbol $f'(c)$ is meaningful at every
point, endpoints included.

**Carathéodory, and why every rule on this page is one line.**
[[thm-caratheodory-characterisation]] replaces the quotient by an algebraic
identity: $f$ is differentiable at $c$ exactly when some
$\varphi : A \to \mathbb{R}$, continuous at $c$, satisfies
$f(x) - f(c) = \varphi(x)(x-c)$ throughout $A$, and then $\varphi$ is unique with
$\varphi(c) = f'(c)$. That reformulation is what carries the whole toolkit.
[[cor-differentiable-implies-continuous]] becomes a product of two continuous
factors; [[thm-algebra-of-derivatives]] becomes four rearrangements of an
increment, each followed by a reading of
[[thm-algebra-of-continuous-functions]]; and [[thm-chain-rule]] becomes a single
substitution, with none of the case analysis that a difference-quotient proof
needs where the inner increment vanishes.
[[thm-derivative-linear-approximation-form]] records the other standard
reformulation, that $f'(c)$ is the unique slope for which the affine
approximation has remainder small compared with the increment.

**The rules, and the index trap inside the power rule.**
[[lem-derivative-of-a-power]] proves that $x \mapsto x^{n}$ has derivative
$\iota(n)x^{\,n-1}$ for every natural $n \ge 1$, that $x \mapsto x^{0}$ is the
constant $1$ with derivative $0$, and that $x \mapsto x^{-n}$ has derivative
$-\iota(n)x^{-n-1}$ away from $0$; the case $n = 0$ is stated separately and not
folded into the general formula, because $\iota(0)c^{-1}$ is not defined at
$c = 0$. Polynomial functions follow by induction along the recursion defining
finite sums. [[thm-derivative-of-an-inverse]] closes the toolkit: at a point $f(c)$ where
$f$ is differentiable, the inverse is differentiable exactly when $f'(c)$ does
not vanish, with the reciprocal derivative, and is **not** differentiable when
it does; nothing is asserted at a point of $f[I]$ where $f$ itself has no
derivative. Both halves rest on
[[thm-continuous-inverse]], which supplies the inverse and its continuity, and
the second half is a one-line use of the chain rule against the identity.

**Extrema, and the theorem that needs an interior point.**
[[def-local-extremum]] fixes local maxima and minima, their strict forms, and
what it means for a point to be interior to the domain; it also proves the two
facts the theorems below need, that an interior point of a set is a limit point
of it, which is what Fermat's theorem consumes, and that a global extremum is a
local one, which is what Rolle's theorem consumes.
[[thm-fermat-interior-extremum]] then shows that a derivative at an interior
local extremum vanishes, by keeping the difference quotient on the sign of its
limit ([[lem-sign-preservation-near-a-limit]]) and reading it on both sides of
the point. The interiority hypothesis is exactly what places points of the
domain on both sides, and it is not decoration: the companion page exhibits a
function on $[0,1]$ with extrema at both endpoints and derivative $1$ at each.

**Rolle, Cauchy, and the mean value theorem.** [[thm-rolle]] combines Fermat
with [[thm-extreme-value-r]]: a continuous function on $[a,b]$ attains a
greatest and a least value, and if neither is attained inside then the
hypothesis $f(a) = f(b)$ makes the function constant, so any interior point
serves. [[thm-cauchy-mean-value]] is one application of Rolle to
$\lambda g - \mu f$ with $\lambda = f(b)-f(a)$ and $\mu = g(b)-g(a)$, and it is
stated as a **product** identity, $\bigl(f(b)-f(a)\bigr)g'(c) =
\bigl(g(b)-g(a)\bigr)f'(c)$, with no hypothesis on $g'$; the familiar quotient
form is not equivalent, and the companion page shows a pair for which it is
meaningless while the product form holds. [[cor-mean-value-theorem]] is the case
$g(x) = x$.

**What the mean value theorem buys.** Three consequences, each with the interval
hypothesis doing real work. [[cor-zero-derivative-implies-constant]]: a function
continuous on an interval with vanishing derivative at every interior point is
constant, so two functions with the same derivative differ by a constant.
[[thm-monotonicity-from-the-derivative]]: the four sign conditions on $f'$ give
the four monotonicity conditions of [[def-monotone-function]], and conversely a
nondecreasing function has $f' \ge 0$ wherever it is differentiable. That
converse is **non-strict**, and no strict form holds.
[[cor-bounded-derivative-implies-lipschitz]]: a bound $|f'| \le M$ at every
interior point gives $|f(x)-f(y)| \le M|x-y|$ throughout, so the function is
Lipschitz with constant $M$ and, through
[[lem-real-and-metric-notions-agree]] and
[[thm-metric-regularity-hierarchy]], uniformly continuous.

**Two false statements, both with witnesses.**
[[fs-mean-value-theorem-needs-no-continuity-at-the-endpoints]] deletes the
continuity hypothesis from the mean value theorem and is refuted by $f(x) = x$
on $[0,1)$ with $f(1) = 0$, which is differentiable at every interior point with
derivative $1$ while $f(1)-f(0) = 0$; the same witness kills Rolle's theorem
under the same weakening. [[fs-vanishing-derivative-forbids-strict-increase]]
reads the monotonicity theorem backwards and is refuted by $x \mapsto x^{3}$,
which is increasing on $\mathbb{R}$ with $f'(0) = 0$.

**What this page does not fix.** No one-sided derivative and no derivative of
order above one is defined here, and no item on this page says anything about
the continuity of $f'$ or about the existence of an antiderivative. **Darboux's
theorem is not proved here either**, so nothing below says that $f'$ has the
intermediate value property of [[def-intermediate-value-property]]. The
monotone-functions page names that theorem as the classical source of
discontinuous functions with the intermediate value property and builds its own
witness by hand instead; this page does not discharge it, and no item here may
be cited for it. Nothing on either page depends on it.
[[rem-derivative-conventions]] records exactly what is settled and what is left
open, including that $f'(c)$ and $\frac{df}{dx}(c)$ name the same real number and
that the second is a name and not a quotient.
````

