# Independent repair certifier brief — Wave 11, A6

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
a source-correction task, open the exact source, compare the cited claim against
it, and state whether the final attribution and provenance class are exact.

Return exactly:

```text
ITEM: <id-or-page-path-or-source-label>
VERDICT: CERTIFIED | REFUSED | BLOCKED
CURRENT-TEXT: READ
MATHEMATICS: [concise evidence]
CITATIONS: [concise evidence]
METADATA: [provenance/dependencies/stale-verdict disposition, or n/a for page]
FINDINGS: NONE | [fatal defect or concrete blocker]
```

Do not suggest optional polishing and do not write a verification stamp.


---

# This dispatch

## Assigned repaired page summary

Page path: `library/real-analysis/properties-of-the-integral-and-the-working-ftc.md`

Full-file SHA-256 at dispatch: `42c5d0fdeb1dc814dab0b955d7bf17b529aaf249049d39d12305b25e0d76c8af`

Named repair: correct the stale claim that Taylor's integral remainder is developed on the Darboux/L'Hopital/Taylor page; both current pages explicitly exclude it.

Read the complete page and the exact current Darboux/L'Hopital/Taylor scope item before certifying. This page carries no item verification block.

````markdown
---
page: properties-of-the-integral-and-the-working-ftc
title: "Properties of the Integral and the Working FTC"
status: published
items: [def-oriented-integral, lem-integrability-on-a-subinterval,
        thm-linearity-of-the-integral, thm-monotonicity-of-the-integral,
        thm-additivity-over-subintervals,
        lem-changing-a-function-at-finitely-many-points,
        thm-composition-with-a-continuous-function,
        cor-integrability-of-absolute-values-products-and-lattice-operations,
        thm-first-mean-value-theorem-for-integrals, def-the-integral-function,
        thm-the-integral-function-is-lipschitz, thm-ftc-first-part,
        thm-ftc-second-part, cor-primitives-of-a-continuous-function,
        thm-integration-by-parts, thm-substitution,
        thm-second-mean-value-theorem-for-integrals,
        thm-nonnegative-continuous-with-zero-integral-vanishes,
        thm-integral-test-for-series, rem-integral-conventions-and-scope]
examples: []
---

**Objective.** The previous page defined the integral and settled which functions
have one. This page makes it usable: the algebra of the integral, its behaviour
under splitting the interval, and the two fundamental theorems in the form that
computes. It ends with three theorems that are applications of the machinery
rather than parts of it: Bonnet's second mean value theorem, the vanishing of a
nonnegative continuous integrand with zero integral, and the integral test for
series.

**A convention has to be minted first, and it is not decoration.**
[[def-darboux-integral]] is stated under the standing hypothesis $a<b$ of
[[def-partition-and-refinement]], so $\int_a^b f$ is an undefined symbol whenever
$a \ge b$. [[def-oriented-integral]] extends the notation by
$\int_a^a f := 0$ and $\int_b^a f := -\int_a^b f$; nothing new is integrated, and
the three clauses sit on the three cases of trichotomy so no consistency check
arises. Without it the additivity identity, the integral function and the
substitution theorem could not be stated in the generality they are proved in.
[[rem-integral-conventions-and-scope]] records the convention, the one inequality
on this page that is *not* orientation-invariant, and what the page costs in
choice.

**The algebra.** [[lem-integrability-on-a-subinterval]] restricts an integrable
function to a closed subinterval, re-indexing the partition explicitly rather
than saying "restrict". [[thm-linearity-of-the-integral]] proves closure under
sums and scalar multiples; the two halves are genuinely different, because
$\sup(f+g) \le \sup f + \sup g$ can be strict — so the sum case squeezes rather
than computes — while a negative scalar exchanges the roles of $\sup$ and $\inf$.
[[thm-monotonicity-of-the-integral]] is short, and it is what every later estimate
of an integral against a pointwise bound goes through; seven of the sixteen later
items on this page cite it. [[thm-additivity-over-subintervals]] proves the splitting in both
directions and then the oriented identity
$\int_u^v f + \int_v^w f = \int_u^w f$ for *arbitrary* $u,v,w$; that last clause
is proved by observing that the oriented integral is a difference of values of
one function of one variable, not by listing six orderings.
[[lem-changing-a-function-at-finitely-many-points]] shows the integral cannot see
a finite set, the one delicate point being that a partition point lies in two
subintervals.

**Composition, and the order of the hypotheses.**
[[thm-composition-with-a-continuous-function]] is the one place where the classical argument does not transfer:
if $f$ is integrable with values in $[m,M]$ and $\varphi$ is continuous on
$[m,M]$, then $\varphi\circ f$ is integrable. The classical proof splits the
index range into good and bad indices; the finite-sum laws available here are
stated for $\sum_{i<n}$ and none of them splits a range into a subset and its
complement, so the split is carried instead by one inequality valid at every
index. **The order matters**: *continuous after integrable* is the hypothesis,
and the reversal is refuted on the companion page.
[[cor-integrability-of-absolute-values-products-and-lattice-operations]] reads off
$|f|$, $f^2$, $fg$, $\max(f,g)$, $\min(f,g)$ and the triangle inequality for the
integral, using the polarisation identity to reduce a two-variable operation to
the one-variable theorem.

**The integral function and the two fundamental theorems.**
[[def-the-integral-function]] introduces $F(x) = \int_a^x f$ and discharges its
own well-definedness. [[thm-the-integral-function-is-lipschitz]] shows $F$ is
Lipschitz for *every* integrable $f$, with no continuity assumed, which is what
makes the hypotheses of the next theorem visible as hypotheses.
[[thm-ftc-first-part]] proves $F'(c) = f(c)$ at each point of continuity of $f$,
from the definition of the derivative and not from a mean value theorem, with the
estimate written out on both sides of $c$ because the factor $1/(x-c)$ changes
sign. [[thm-ftc-second-part]] is the working half: if $G$ is differentiable on
$[a,b]$ with $G'=f$ integrable, then $\int_a^b f = G(b)-G(a)$, and no continuity
of $f$ is needed. Its proof selects no mean-value points and spends no choice.
[[cor-primitives-of-a-continuous-function]] assembles the two and
[[cor-zero-derivative-implies-constant]] into existence, uniqueness up to a
constant, and evaluation.

**The two computational rules.** [[thm-integration-by-parts]] and
[[thm-substitution]] follow from the second fundamental theorem applied to $uv$
and to $F\circ\varphi$. Both check integrability of the products explicitly —
that is the step usually skipped, and it is why the hypotheses are what they are.
Substitution assumes neither injectivity nor monotonicity of $\varphi$, which is
exactly why its limits are written with the orientation convention.

**Three applications.**
[[thm-second-mean-value-theorem-for-integrals]] proves Bonnet's theorem in the
**general monotone form**: $f$ monotone and $g$ integrable, with no
differentiability and no continuity of $f$. The route is Abel summation by parts
([[lem-abel-summation-by-parts]]) on the values of the integral function at the
partition points, followed by an estimate that is driven to zero by the
integrability of $f$ alone; no tagged partition and no mesh condition appears.
[[thm-nonnegative-continuous-with-zero-integral-vanishes]] is the exact repair of
a published false statement, now provable because additivity is available.
[[thm-integral-test-for-series]] is stated with **proper integrals only**: its
conclusion is that the sequence $\bigl(\int_0^N f\bigr)_N$ is bounded, not that
an improper integral converges, because improper integrals are not defined at
this point in the reading order — and both its sum and its integral begin at $0$,
since $\mathbb{N}$ contains $0$.

**What is deliberately absent.** Taylor's integral remainder needs higher
derivatives and is not developed on this page. The current
Darboux/L'Hopital/Taylor page also explicitly excludes the integral remainder.
Bounded variation with
the Riemann-Stieltjes integral, and improper integrals, are each a later page of
this track; the sharp form of the fundamental theorem is not a planned page at
all but a recorded-not-proved result, [[rem-ftc-absolutely-continuous]]. Arzelà's bounded
convergence theorem is not here: it is a genuine theorem about the Riemann
integral, but no complete proof route was certifiable at scaffold time, and the
counterexample that motivates it —
[[cex-spikes-with-integral-one-converging-pointwise-to-zero]] on the companion
page — stands on its own without asserting anything about the bounded case.
[[rem-integral-conventions-and-scope]] lists all of this as reading order and
makes no claim about what the library proves.

**Twenty items**, of which two are definitions, one is the page ledger, and the
rest are the lemmas, theorems and corollaries above. The companion page works
thirteen examples, counterexamples and false statements against them.
````
