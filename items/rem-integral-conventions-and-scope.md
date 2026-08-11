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
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-09
    scope: published-audit-targeted
    context_sha256: bae50918b2cd1f67bb94ad0168c7c29f51bcae3af7e6f7473d78b016f34050f9
    item_sha256: e9d21277062eff21152f0b567aed7ab9d15c13298b8ef70a1c6be4debc48b2f8
  verified:
    model: gpt-5.6-terra-codex-subscription
    verdict: certify
    date: 2026-08-10
    scope: published-audit
    delegated_by: owner
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
establishes no theorem and serves only as a conventions and reading-order
ledger.

## 1. One integral, under two names

"Integrable" on this page means **Darboux integrable** in the sense of
[[def-darboux-integral]], and $\int_a^b f$ is the common value of the lower and
upper Darboux integrals. By [[thm-darboux-equals-riemann]] that is the same class
of functions with the same value as Riemann's own definition by tagged partitions
of small mesh, so the two words are used interchangeably, as they are in the
literature. No other integral is defined or used by a proof on this page or its
companion.

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
- **Bounded variation and the Riemann–Stieltjes integral.** The later
  bounded-variation page builds total variation, Jordan decomposition and the
  Riemann–Stieltjes integral. None is available at this point in the reading
  order, so nothing on the present page uses it.
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

- [[rem-ftc-absolutely-continuous]] — the sharp form of the fundamental theorem:
  the absolutely continuous functions are exactly those for which $G'$ exists
  almost everywhere, $G'\in L^1$, and
  $G(x)=G(a)+\int_a^x G'$ for every $x\in[a,b]$. The two counterexamples on the companion page,
  [[cex-an-integrable-function-with-no-primitive]] and
  [[cex-a-function-with-a-primitive-that-is-not-integrable]], are precisely the
  two ways the naive form fails, and that sharp form is the answer.
- [[rem-dominated-convergence-theorem]] — the theorem that licenses interchanging
  a limit with an integral under a domination hypothesis, and the natural sequel
  to the spike counterexample above.
