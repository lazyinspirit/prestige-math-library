## Assigned repaired page summary

Page path: `library/real-analysis/properties-of-the-integral-and-the-working-ftc.md`

Full-file SHA-256 at dispatch: `42c5d0fdeb1dc814dab0b955d7bf17b529aaf249049d39d12305b25e0d76c8af`

Named repair: correct the stale claim that Taylor's integral remainder is developed on the Darboux/L'Hopital/Taylor page; both current pages explicitly exclude it.

Read the complete page and the exact current integral scope ledger below before certifying. This page carries no item verification block.

## Complete repaired page

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

## Exact current integral scope ledger

````markdown
---
id: rem-integral-conventions-and-scope
kind: remark
title: "Conventions of this page, and which sharpenings of the integral are taken up later in the reading order"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: not-applicable
deps: [def-oriented-integral, def-darboux-integral, thm-darboux-equals-riemann, thm-ftc-first-part, thm-ftc-second-part, thm-substitution, cor-integrability-of-absolute-values-products-and-lattice-operations, thm-integral-test-for-series, thm-second-mean-value-theorem-for-integrals, def-the-integral-function, thm-additivity-over-subintervals]
external_refs: [rem-ftc-absolutely-continuous, rem-dominated-convergence-theorem]
forward_refs: [cex-spikes-with-integral-one-converging-pointwise-to-zero, cex-an-integrable-function-with-no-primitive, cex-a-function-with-a-primitive-that-is-not-integrable]
justified_by: []
aliases: []
landmark: false
short: "conventions and scope of this page"
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Riemann integral (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Riemann_integral"
    - title: "Fundamental theorem of calculus (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Fundamental_theorem_of_calculus"
pipeline_run: null
---

This item is the ledger of the page: what "integrable" means here, what the
orientation convention costs, what the page spends in choice, and which
sharpenings of the integral belong to later pages rather than to this one. It
establishes nothing and is cited by nothing.

## 1. One integral, under two names

"Integrable" on this page means **Darboux integrable** in the sense of
[[def-darboux-integral]], and $\int_a^b f$ is the common value of the lower and
upper Darboux integrals. By [[thm-darboux-equals-riemann]] that is the same class
of functions with the same value as Riemann's own definition by tagged partitions
of small mesh, so the two words are used interchangeably, as they are in the
literature. No other integral appears anywhere on this page or its companion.

## 2. The orientation convention, and the statements whose form depends on it

[[def-oriented-integral]] extends the notation by $\int_u^u f := 0$ and
$\int_u^v f := -\int_v^u f$ for $u > v$. It is notation, not a new integral: the
published definition is stated under the standing hypothesis $a < b$ and simply
says nothing outside it.

Several statements on this page take their shape from that convention; three are worth naming, and no claim is made that they are the only ones.

- **Additivity holds for every arrangement of three points.** Claim 3 of
  [[thm-additivity-over-subintervals]] is $\int_u^v f + \int_v^w f = \int_u^w f$
  with no ordering assumed, and it is what makes
  [[def-the-integral-function]]'s identity $F(y)-F(x) = \int_x^y f$ available in
  either order.
- **Substitution keeps the limits in the order the map produces them.**
  [[thm-substitution]] writes $\int_{\varphi(c)}^{\varphi(d)} f$ without assuming
  $\varphi$ monotone or injective, and $\varphi(d) < \varphi(c)$ is allowed.
- **One inequality is not orientation-invariant, and that is a trap.** The
  estimate $\bigl|\int_u^v f\bigr| \le \int_u^v |f|$ of
  [[cor-integrability-of-absolute-values-products-and-lattice-operations]] is
  guaranteed only for $u \le v$; at $u > v$ its right-hand side is $\le 0$ while
  its left-hand side is $\ge 0$. The form valid
  for every pair is $\bigl|\int_u^v f\bigr| \le \bigl|\int_u^v |f|\,\bigr|$, and
  that item states both.

## 3. What the page spends in choice

**Nothing on this page introduces a new use of a choice principle.** Every step
that instantiates an existential statement does so finitely many times, which is
ordinary first-order reasoning. The one place where a reader might expect a
selection is [[thm-ftc-second-part]]: the classical proof picks a mean-value
point $\xi_i$ in each subinterval of a partition and assembles a Riemann sum, and
the proof given here does not, deriving instead the per-index inequality
$m_i\Delta_i \le G(t_{i+1})-G(t_i) \le M_i\Delta_i$ and summing it. The same
discipline is followed in [[thm-second-mean-value-theorem-for-integrals]], where
the approximating sums are built from the values of the integral function at the
partition points and no tags are chosen.

Choice does enter through published items that name their own cost, and those
costs are inherited unchanged, not added to: [[thm-heine-cantor-r]] spends
countable choice once, and every item here that rests on
[[thm-continuous-implies-integrable]] or on
[[thm-composition-with-a-continuous-function]] inherits that single use.
[[thm-lebesgue-criterion]] spends countable choice once in the half that goes
from integrability to the discontinuity set being null, and the companion page
uses that half; that use too is inherited and not new. The choice ledger of the
previous page, [[rem-riemann-integral-choice-ledger]], records the costs of the
published items themselves.

## 4. Index conventions

$\mathbb{N}$ contains $0$; a sequence is a function on $\mathbb{N}$; and a
partition of $[a,b]$ is indexed from $i = 0$, its first subinterval being
$[t_0,t_1]$. Consequently [[thm-integral-test-for-series]] is stated with both
the sum and the integral beginning at $0$, and its bracket carries the term
$f(0)$; the classical form beginning at $1$ is a statement about a tail, and this
page does not silently substitute one for the other. A natural number multiplying
or dividing a real always stands for its canonical natural.

## 5. What is taken up later in the reading order

Stated as reading order, and as no claim at all about what this library
currently proves.

- **Higher derivatives, and Taylor's theorem with the integral remainder.** The
  integral remainder is an application of [[thm-integration-by-parts]] and needs
  derivatives of order $n$. The later Darboux/L'Hopital/Taylor page proves the
  Peano, Lagrange, Cauchy and Schlomilch-Roche forms but explicitly excludes the
  integral remainder. It is therefore absent from the current library, with no
  later published page assigned to it; this is a statement about the present
  reading order, not a theorem about Taylor remainders.
- **Bounded variation and the Riemann-Stieltjes integral.** The integrator
  $\mathrm{d}\alpha$ generalises everything on this page, and the sharpened
  second mean value theorem belongs with it. That is a later page of the same
  track, and it is not built.
- **Improper integrals.** $\int_0^{\infty} f$ is not defined anywhere in this
  library at this point in the reading order, which is why
  [[thm-integral-test-for-series]] concludes with the boundedness of the sequence
  $\bigl(\int_0^N f\bigr)_N$ instead. Identifying the two is what that later
  page is for.
- **Interchanging a limit with an integral.** Pointwise convergence licenses
  nothing: the companion page's
  [[cex-spikes-with-integral-one-converging-pointwise-to-zero]] exhibits
  continuous $f_n \to 0$ pointwise on $[0,1]$ with $\int_0^1 f_n = 1$ for every
  $n$. What repairs it — uniform convergence, or a domination hypothesis — is not
  proved on this page and nothing here asserts any version of it.

## 6. Two results a reader will want next, which this library records but does not prove

Both are recorded elsewhere as results the library does **not** establish, and
they are mentioned here for orientation only; nothing on this page or its
companion rests on either.

- [[rem-ftc-absolutely-continuous]] — the sharp form of the fundamental theorem,
  in which the class of functions $G$ with $\int_a^b G' = G(b)-G(a)$ is
  identified exactly. The two counterexamples on the companion page,
  [[cex-an-integrable-function-with-no-primitive]] and
  [[cex-a-function-with-a-primitive-that-is-not-integrable]], are precisely the
  two ways the naive form fails, and that sharp form is the answer.
- [[rem-dominated-convergence-theorem]] — the theorem that licenses interchanging
  a limit with an integral under a domination hypothesis, and the natural sequel
  to the spike counterexample above.
````
