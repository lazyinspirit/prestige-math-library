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

## Assigned exact-final target — `rem-integral-conventions-and-scope`

Item path: `items/rem-integral-conventions-and-scope.md`

Normalized final-text SHA-256 at dispatch: `54eb64b2d5e3795c87caa8a763b34a8c8fe2c99dcbe928935a1c824c1d86c5b9`

Target type: `item-major-repair`

- A6 fatal repair of the stale scaffold-era Taylor integral-remainder page assignment exposed by page certification

Read the complete current item and every exact dependency needed for the changed inference or source attribution. For source work, open the exact final URL(s) with web access and compare the source claim to the current provenance rationale and public Statement.

Current generated-manifest rows (completeness checklist only):

```json
[
  {
    "source": "rem-integral-conventions-and-scope",
    "sourcePage": "properties-of-the-integral-and-the-working-ftc",
    "batch": "wave11-real-analysis",
    "target": "def-oriented-integral",
    "declared_target": "def-oriented-integral",
    "target_statement_provenance": "literature-derived",
    "targetPage": "properties-of-the-integral-and-the-working-ftc",
    "targetBatch": "wave11-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "rem-integral-conventions-and-scope",
    "sourcePage": "properties-of-the-integral-and-the-working-ftc",
    "batch": "wave11-real-analysis",
    "target": "def-darboux-integral",
    "declared_target": "def-darboux-integral",
    "target_statement_provenance": "literature-derived",
    "targetPage": "the-riemann-integral",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "rem-integral-conventions-and-scope",
    "sourcePage": "properties-of-the-integral-and-the-working-ftc",
    "batch": "wave11-real-analysis",
    "target": "thm-darboux-equals-riemann",
    "declared_target": "thm-darboux-equals-riemann",
    "target_statement_provenance": "literature-derived",
    "targetPage": "the-riemann-integral",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "rem-integral-conventions-and-scope",
    "sourcePage": "properties-of-the-integral-and-the-working-ftc",
    "batch": "wave11-real-analysis",
    "target": "thm-ftc-first-part",
    "declared_target": "thm-ftc-first-part",
    "target_statement_provenance": "literature-derived",
    "targetPage": "properties-of-the-integral-and-the-working-ftc",
    "targetBatch": "wave11-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "rem-integral-conventions-and-scope",
    "sourcePage": "properties-of-the-integral-and-the-working-ftc",
    "batch": "wave11-real-analysis",
    "target": "thm-ftc-second-part",
    "declared_target": "thm-ftc-second-part",
    "target_statement_provenance": "literature-derived",
    "targetPage": "properties-of-the-integral-and-the-working-ftc",
    "targetBatch": "wave11-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "rem-integral-conventions-and-scope",
    "sourcePage": "properties-of-the-integral-and-the-working-ftc",
    "batch": "wave11-real-analysis",
    "target": "thm-substitution",
    "declared_target": "thm-substitution",
    "target_statement_provenance": "ai-altered",
    "targetPage": "properties-of-the-integral-and-the-working-ftc",
    "targetBatch": "wave11-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "rem-integral-conventions-and-scope",
    "sourcePage": "properties-of-the-integral-and-the-working-ftc",
    "batch": "wave11-real-analysis",
    "target": "cor-integrability-of-absolute-values-products-and-lattice-operations",
    "declared_target": "cor-integrability-of-absolute-values-products-and-lattice-operations",
    "target_statement_provenance": "ai-altered",
    "targetPage": "properties-of-the-integral-and-the-working-ftc",
    "targetBatch": "wave11-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "rem-integral-conventions-and-scope",
    "sourcePage": "properties-of-the-integral-and-the-working-ftc",
    "batch": "wave11-real-analysis",
    "target": "thm-integral-test-for-series",
    "declared_target": "thm-integral-test-for-series",
    "target_statement_provenance": "ai-altered",
    "targetPage": "properties-of-the-integral-and-the-working-ftc",
    "targetBatch": "wave11-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "rem-integral-conventions-and-scope",
    "sourcePage": "properties-of-the-integral-and-the-working-ftc",
    "batch": "wave11-real-analysis",
    "target": "thm-second-mean-value-theorem-for-integrals",
    "declared_target": "thm-second-mean-value-theorem-for-integrals",
    "target_statement_provenance": "ai-altered",
    "targetPage": "properties-of-the-integral-and-the-working-ftc",
    "targetBatch": "wave11-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "rem-integral-conventions-and-scope",
    "sourcePage": "properties-of-the-integral-and-the-working-ftc",
    "batch": "wave11-real-analysis",
    "target": "def-the-integral-function",
    "declared_target": "def-the-integral-function",
    "target_statement_provenance": "literature-derived",
    "targetPage": "properties-of-the-integral-and-the-working-ftc",
    "targetBatch": "wave11-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "rem-integral-conventions-and-scope",
    "sourcePage": "properties-of-the-integral-and-the-working-ftc",
    "batch": "wave11-real-analysis",
    "target": "thm-additivity-over-subintervals",
    "declared_target": "thm-additivity-over-subintervals",
    "target_statement_provenance": "ai-altered",
    "targetPage": "properties-of-the-integral-and-the-working-ftc",
    "targetBatch": "wave11-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "rem-integral-conventions-and-scope",
    "sourcePage": "properties-of-the-integral-and-the-working-ftc",
    "batch": "wave11-real-analysis",
    "target": "cex-spikes-with-integral-one-converging-pointwise-to-zero",
    "declared_target": "cex-spikes-with-integral-one-converging-pointwise-to-zero",
    "target_statement_provenance": "ai-altered",
    "targetPage": "properties-of-the-integral-and-the-working-ftc-examples",
    "targetBatch": "wave11-real-analysis",
    "edge_type": "forward_ref",
    "kind": "forward",
    "requires_semantic_audit": true
  },
  {
    "source": "rem-integral-conventions-and-scope",
    "sourcePage": "properties-of-the-integral-and-the-working-ftc",
    "batch": "wave11-real-analysis",
    "target": "cex-an-integrable-function-with-no-primitive",
    "declared_target": "cex-an-integrable-function-with-no-primitive",
    "target_statement_provenance": "ai-altered",
    "targetPage": "properties-of-the-integral-and-the-working-ftc-examples",
    "targetBatch": "wave11-real-analysis",
    "edge_type": "forward_ref",
    "kind": "forward",
    "requires_semantic_audit": true
  },
  {
    "source": "rem-integral-conventions-and-scope",
    "sourcePage": "properties-of-the-integral-and-the-working-ftc",
    "batch": "wave11-real-analysis",
    "target": "cex-a-function-with-a-primitive-that-is-not-integrable",
    "declared_target": "cex-a-function-with-a-primitive-that-is-not-integrable",
    "target_statement_provenance": "ai-generated",
    "targetPage": "properties-of-the-integral-and-the-working-ftc-examples",
    "targetBatch": "wave11-real-analysis",
    "edge_type": "forward_ref",
    "kind": "forward",
    "requires_semantic_audit": true
  },
  {
    "source": "rem-integral-conventions-and-scope",
    "sourcePage": "properties-of-the-integral-and-the-working-ftc",
    "batch": "wave11-real-analysis",
    "target": "rem-ftc-absolutely-continuous",
    "declared_target": "rem-ftc-absolutely-continuous",
    "target_statement_provenance": null,
    "targetPage": "deferred-measure-and-integration",
    "targetBatch": null,
    "edge_type": "external_mention",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "rem-integral-conventions-and-scope",
    "sourcePage": "properties-of-the-integral-and-the-working-ftc",
    "batch": "wave11-real-analysis",
    "target": "rem-dominated-convergence-theorem",
    "declared_target": "rem-dominated-convergence-theorem",
    "target_statement_provenance": null,
    "targetPage": "deferred-measure-and-integration",
    "targetBatch": null,
    "edge_type": "external_mention",
    "kind": "published-backward",
    "requires_semantic_audit": true
  }
]
```

Current provenance row:

```json
{
  "id": "rem-integral-conventions-and-scope",
  "statement": "ai-generated",
  "proof": "not-applicable",
  "evidence": "none",
  "urls": [],
  "rationale": "This is a repository-specific convention and scope record, including reading-order statements and deliberate omissions. Alpha checked every linked target on current disk and repaired the stale scaffold-era Taylor-integral-remainder assignment: the current Taylor page explicitly excludes that form, so the ledger now records it as absent with no published destination.",
  "alpha_concurred": false,
  "at": "2026-08-10"
}
```

Exact current item at dispatch:

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
