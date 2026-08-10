# Audit proof-refuter brief — Wave 11, A6

> **NO SHELL-PERMISSION PROMPTS (owner, 2026-07-30).** You are read-only and
> tool-less. Do not ask for shell or edit permission. Everything available to
> you is reproduced in the dispatch task.

You are **DeepSeek V4 Pro** at the API's maximum reasoning setting, serving as
an independent adversarial proof-refuter. Return evidence only; Audit-Alpha
alone adjudicates and edits.

## Binding triage

- **Non-negotiable:** mathematical accuracy, logical validity, correct citation.
- **Explicitly acceptable, spend no effort:** minor citational quirks; logical
  gaps a competent reader closes within 30 seconds; other non-fatal quirks;
  imperfection at the level of the letter.

Read the target's title, complete public statement, Facts & Assumptions, every
numbered proof/refutation/verification step, and Remarks. Try to falsify every
load-bearing inference. Before alleging that a cited dependency is too weak,
compare the exact current supplied dependency: domain, hypotheses, quantifiers,
direction, conclusion, boundary cases, and conventions. Check biconditionals,
existence/uniqueness, recursion/induction, limits, index shifts, empty/zero/one/
endpoint/degenerate cases, hidden division, hidden choice, and false Remarks.
For an `ai-generated` Statement or counterexample, actively search for a
counterexample to the public claim or a failure in the witness. A false public
claim, invalid proof, missing necessary hypothesis, circularity, or materially
inaccurate load-bearing citation is fatal; a quickly closable gap is nonfatal.

Return no more than 450 words, exactly in this shape:

```text
VERDICT: CLEAN | DEFECTS
```

For each defect:

```text
FINDING 1
  location: [exact section/fact/step]
  severity: fatal | nonfatal
  claim:    [exact assertion]
  evidence: [counterexample, invalid inference, or exact source mismatch]
```

Always end with:

```text
BOUNDARY: [specific boundary/counterexample checks and disposition]
SOURCES:  [confirm every supplied cited item used by the target was inspected]
CHECKED:  [confirm title, public claim, every numbered step, and Remarks]
```


---

# This dispatch

## Selection reasons

- Wave 11 ai-generated Statement seed
- pending Wave 11 generated-risk seed (cone 1)

## Target item — `rem-integral-conventions-and-scope`

Normalized current SHA-256: `33a725fc33b746ecbeea29d58d961f93c37bfd5594b26eaf86388846e5b69616`

The complete exact-current item follows, including frontmatter:

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
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
  precheck: n/a
  audited: 2026-07-29
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
  integral remainder is an application of [[thm-integration-by-parts]], but it
  needs derivatives of order $n$, which are introduced on the page of the
  analysis track devoted to Darboux's theorem, l'Hopital's rule and Taylor
  expansion. The scaffold for this build records that it belongs there, next to
  the Lagrange and Cauchy forms, and it is deliberately absent here; that is a
  statement about where the plan puts it, not about anything the library has
  proved.
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

## Wave 11 provenance row

```json
{
  "id": "rem-integral-conventions-and-scope",
  "statement": "ai-generated",
  "proof": "not-applicable",
  "evidence": "none",
  "urls": [],
  "rationale": "This is a repository-specific convention and scope record, including reading-order statements and deliberate omissions. Its mathematical descriptions and every linked target were checked on disk; the stale Taylor-integral-remainder plan sentence is recorded separately as published-claim decay.",
  "alpha_concurred": false,
  "at": "2026-08-09"
}
```

## Exact-current proof contract

No Wave 11 proof contract is required for this target.

## Generated audit-manifest relationships

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

## Relevant current generated-risk rows

```json
[
  {
    "id": "rem-integral-conventions-and-scope",
    "file": "items/rem-integral-conventions-and-scope.md",
    "source": "provenance",
    "cone_size": 1,
    "logical_consumers": [],
    "direct_citation_consumers": [
      {
        "id": "cex-a-function-with-a-primitive-that-is-not-integrable",
        "via": [
          "wikilink"
        ]
      }
    ],
    "disposition": {
      "status": "pending",
      "by": "",
      "notes": ""
    }
  }
]
```

## Full exact-current text of every cited or declared item (22)

### `cex-a-function-with-a-primitive-that-is-not-integrable`

````markdown
---
id: cex-a-function-with-a-primitive-that-is-not-integrable
kind: counterexample
title: "A function differentiable on $[0,1]$ whose derivative is unbounded, hence not Riemann integrable"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-derivative, thm-algebra-of-derivatives, thm-chain-rule, lem-derivative-of-a-power, thm-algebra-of-continuous-functions, thm-two-sided-limit-iff-both-one-sided, def-one-sided-limits, def-function-limit, lem-limit-is-local, def-darboux-sums, def-darboux-integral, def-bounded-set, def-integer-power, lem-power-monotone, def-canonical-natural, lem-of-naturals-positive, thm-of-archimedean, cor-archimedean-reciprocal, thm-ftc-second-part, def-max-min, lem-finite-set-has-max, def-interval, def-limit-point-r, def-ordered-field, def-complete-ordered-field]
justified_by: []
aliases: []
landmark: true
short: "a primitive whose derivative is not integrable"
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Antiderivative (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Antiderivative"
    - title: "Riemann integral (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Riemann_integral"
    - title: "J. M. H. Olmsted, Counterexamples in Analysis: Differentiation"
      url: "https://people.math.sc.edu/girardi/m555/10S/diff-counterexs.pdf"
pipeline_run: null
---

## Statement refuted

**False claim:** if $G : [0,1] \to \mathbb{R}$ is differentiable at every point of
$[0,1]$ ([[def-derivative]]), then $G'$ is Riemann integrable on $[0,1]$ (so that
$\int_0^1 G' = G(1)-G(0)$ makes sense).

The claim is false. Put

$$\phi(t) \;:=\; t^{2}(1-t)^{2} \qquad (t \in \mathbb{R}),$$

a polynomial with $\phi(0)=\phi(1)=0$ and $\phi'(0)=\phi'(1)=0$, and for
$n \in \mathbb{N}$ set

$$\alpha_n := \frac{1}{\iota(n+2)}, \qquad h_n := \frac{1}{\iota(n+2)^{4}}, \qquad c_n := \frac{1}{\iota(n+2)^{2}}, \qquad \beta_n := \alpha_n + h_n, \qquad I_n := [\alpha_n,\beta_n]$$

([[def-canonical-natural]], [[def-integer-power]]). The intervals $I_n$ are
pairwise disjoint and lie in $(0,1]$, and

$$G : [0,1] \to \mathbb{R}, \qquad G(x) \;:=\; \begin{cases} c_n\,\phi\!\left(\dfrac{x-\alpha_n}{h_n}\right) & x \in I_n \text{ for some } n, \\[6pt] 0 & \text{otherwise} \end{cases}$$

is differentiable at **every** point of $[0,1]$, while

$$G'\!\left(\alpha_n + \tfrac{1}{4}h_n\right) \;=\; \frac{3}{16}\,\iota(n+2)^{2} ,$$

so $G'$ is unbounded on $[0,1]$ and therefore has no Darboux sums at all
([[def-darboux-sums]]) and is not Riemann integrable.

**The construction is entirely polynomial, and deliberately so.** The classical
witness is $x^{2}\sin(1/x^{2})$; the trigonometric functions are built on a later
page of this library, so a bump glued from a single quartic is used instead. Only
one bump is nonzero near any point of $(0,1]$, so no series converges anywhere in
the argument and no limit function is formed.

## Facts & Assumptions

**Given:** The polynomial $\phi(t) = t^{2}(1-t)^{2}$, the numbers $\alpha_n, h_n, c_n, \beta_n$ and intervals $I_n$ above, the function $G$ above, and a real $\varepsilon>0$.

[L1] Polynomial calculus: every polynomial function is differentiable at every real and continuous there, with $(t^{n})' = \iota(n)t^{\,n-1}$ for $n \ge 1$, and sums, scalar multiples and products differentiate by the usual rules ([[lem-derivative-of-a-power]], [[thm-algebra-of-derivatives]], [[thm-algebra-of-continuous-functions]], [[def-derivative]], [[def-integer-power]]).

[L2] Chain rule, and the derivative of an affine reparametrisation: $y \mapsto \psi((y-\alpha)/h)$ has derivative $\psi'((y-\alpha)/h)/h$ for $h \ne 0$ ([[thm-chain-rule]], [[thm-algebra-of-derivatives]]).

[L3] $\iota(n+2) \ge 2 > 1$, $\iota$ is increasing on $\mathbb{N}$, $\iota(m) < \iota(n)$ for $m<n$, and for every real $w$ there is a natural $n$ with $w < \iota(n+2)$; also $\iota(n)^{k} \ge \iota(n)$ for $k \ge 1$ when $\iota(n)\ge 1$ ([[def-canonical-natural]], [[lem-of-naturals-positive]], [[thm-of-archimedean]], [[cor-archimedean-reciprocal]], [[lem-power-monotone]], claims 3 and 4).

[L4] If both one-sided limits of a function at $c$ exist and are equal to $L$, the two-sided limit exists and equals $L$ ([[thm-two-sided-limit-iff-both-one-sided]], [[def-one-sided-limits]], [[def-function-limit]]).

[L5] Locality of limits: two functions on $A$ agreeing on a punctured neighbourhood of $c$ have the same limit behaviour at $c$; and a derivative survives restricting the domain provided the smaller domain still accumulates at the point ([[lem-limit-is-local]], [[def-derivative]], [[def-limit-point-r]]).

[L6] Every point of a nondegenerate interval is a limit point of it ([[def-derivative]], [[def-interval]], [[def-limit-point-r]]).

[L7] Darboux sums, and therefore Riemann integrability, require a bounded function ([[def-darboux-sums]], [[def-bounded-set]], [[def-darboux-integral]]).

[L8] A nonempty finite set of reals has a least element ([[lem-finite-set-has-max]], [[def-max-min]]).

[L9] Ordered-field arithmetic: $t(1-t) \le 1/4$ for every real $t$, since $(t - 1/2)^{2} \ge 0$; a positive real has a positive inverse; multiplying an inequality by a positive real preserves it; the order is total and transitive ([[def-ordered-field]], [[def-complete-ordered-field]], [[lem-power-monotone]], claim 1).

[L10] If $H$ is differentiable at every point of $[p,q]$ with $H'$ integrable there, then $\int_p^q H' = H(q)-H(p)$ ([[thm-ftc-second-part]]).

## Counterexample

**Proof technique:** direct.

1.1 By [L1], $\phi$ is differentiable everywhere with $\phi'(t) = 2t(1-t)^{2} - 2t^{2}(1-t) = 2t(1-t)(1-2t)$; in particular $\phi(0)=\phi(1)=0$ and $\phi'(0)=\phi'(1)=0$, and $\phi'(1/4) = 2\cdot\tfrac14\cdot\tfrac34\cdot\tfrac12 = \tfrac{3}{16}$. [L1, L9]

1.2 For $t \in [0,1]$, $0 \le \phi(t) = \bigl(t(1-t)\bigr)^{2} \le (1/4)^{2} = 1/16$, by [L9]. [L9]

1.3 Each $\alpha_n, h_n, c_n$ is a positive real, $h_n \le \alpha_n$ and $c_n \le \alpha_n$ because $\iota(n+2) > 1$, and $\alpha_n \le 1/2$; so $I_n \subseteq (0,1]$, since $\beta_n = \alpha_n + h_n \le 2\alpha_n \le 1$. [given, L3, L9]

2.1 **The $I_n$ are pairwise disjoint.** For $n \ge 1$, $\alpha_{n-1}-\alpha_n = 1/\bigl(\iota(n+1)\iota(n+2)\bigr)$ while $h_n = 1/\iota(n+2)^{4}$, and $\iota(n+2)^{4} > \iota(n+1)\iota(n+2)$ because $\iota(n+2)^{3} \ge 2\,\iota(n+2) > \iota(n+1)$ by [L3]; so $\beta_n < \alpha_{n-1}$. Since $(\alpha_n)$ is strictly decreasing, $m < n$ gives $\beta_n < \alpha_{n-1} \le \alpha_m$, and $I_n$ lies strictly below $I_m$. [step 1.3, L3, L9]

2.2 For each $n$ define the polynomial $\Phi_n(y) := c_n\,\phi\bigl((y-\alpha_n)/h_n\bigr)$ on $\mathbb{R}$. By [L1] and [L2] it is differentiable everywhere with $\Phi_n'(y) = (c_n/h_n)\,\phi'\bigl((y-\alpha_n)/h_n\bigr)$, and $\Phi_n(\alpha_n)=\Phi_n(\beta_n)=0$, $\Phi_n'(\alpha_n)=\Phi_n'(\beta_n)=0$ by step 1.1. [step 1.1, L1, L2, construct]

2.3 **Differentiability at a point of $(0,1]$ outside every $I_n$.** Let $x \in (0,1]$ with $x \notin I_m$ for every $m$. By [L3] fix $N$ with $2/x < \iota(N+2)$, so $2/\iota(N+2) < x$; for $m \ge N$, $\beta_m \le 2\alpha_m = 2/\iota(m+2) \le 2/\iota(N+2) < x$ by step 1.3 and [L3]. [step 1.3, L3, L9, choose]

3.1 So $G$ is a well-defined function on $[0,1]$, no $x$ lying in two of the $I_n$. [step 2.1, given]

3.2 **Gaps around the endpoints.** For each $n$, $(\beta_{n+1}, \alpha_n)$ meets no $I_m$: for $m \le n$ one has $\alpha_m \ge \alpha_n$ by step 2.1, and for $m \ge n+1$ one has $\beta_m \le \beta_{n+1}$, again by step 2.1. Likewise $(\beta_n, \alpha_{n-1})$ meets no $I_m$ for $n \ge 1$, and $(\beta_0, 1]$ meets none. [step 2.1, L3]

3.3 The finitely many closed intervals $I_0,\dots,I_{N-1}$ do not contain $x$, so each of the positive reals $|x-\alpha_m|$ and $|x-\beta_m|$ for $m<N$, together with $x - 2/\iota(N+2)$, forms a nonempty finite set of positive reals; let $\rho$ be its least element, which is positive by [L8]. [step 2.3, L8, L9, choose]

4.1 $G$ agrees with $\Phi_n$ on $I_n$ and with the zero function off $\bigcup_m I_m$; in particular $G(\alpha_n) = G(\beta_n) = 0$ and $G \ge 0$ everywhere. [step 3.1, step 2.2, L9]

5.1 **Differentiability at an interior point of a bump.** Let $x \in (\alpha_n,\beta_n)$. The difference quotients of $G$ and of $\Phi_n$ at $x$ agree on the punctured neighbourhood $0 < |y-x| < \min\{x-\alpha_n,\ \beta_n-x\}$ inside $[0,1]$, so by [L5] and step 2.2, $G$ is differentiable at $x$ with $G'(x) = \Phi_n'(x)$. [step 2.2, step 4.1, L5, L6, L8]

5.2 **Differentiability at a left endpoint $\alpha_n$.** On the right, $G$ agrees with $\Phi_n$ on $[\alpha_n,\beta_n]$ and $G(\alpha_n) = \Phi_n(\alpha_n)$, so the right-hand limit of the difference quotient is $\Phi_n'(\alpha_n) = 0$ by [L5] and step 2.2. On the left, $G$ vanishes on $(\beta_{n+1},\alpha_n]$ by step 3.2 and step 4.1, so the quotient is identically $0$ there and its left-hand limit is $0$. By [L4], $G'(\alpha_n) = 0$. [step 2.2, step 4.1, step 3.2, L4, L5, L6]

5.3 **Differentiability at a right endpoint $\beta_n$.** Symmetrically: on the left $G$ agrees with $\Phi_n$, giving limit $\Phi_n'(\beta_n) = 0$; on the right $G$ vanishes on $[\beta_n,\alpha_{n-1})$ when $n \ge 1$ and on $[\beta_0,1]$ when $n = 0$, by step 3.2, giving limit $0$. By [L4], $G'(\beta_n) = 0$. [step 2.2, step 4.1, step 3.2, L4, L5, L6]

5.4 Then $G$ vanishes on $(x-\rho,x+\rho)\cap[0,1]$, so its difference quotient at $x$ is identically $0$ there and $G'(x) = 0$ by [L5] and [L6]. [step 2.3, step 3.3, step 4.1, L5, L6]

5.5 **Differentiability at $0$.** For $y \in (0,1]$: if $y \notin \bigcup_m I_m$ then $G(y)/y = 0$; and if $y \in I_m$ then $0 \le G(y) \le c_m/16$ by step 1.2 and step 4.1 and $y \ge \alpha_m$, so $0 \le G(y)/y \le c_m/(16\,\alpha_m) = 1/\bigl(16\,\iota(m+2)\bigr)$. [step 1.2, step 4.1, L9]

6.1 Given $\varepsilon>0$, fix by [L3] a natural $N$ with $1/\varepsilon < \iota(N+2)$ and put $\delta := \alpha_N > 0$. If $0 < y < \delta$ and $y \in I_m$ then $\alpha_m \le y < \alpha_N$, so $\iota(N+2) < \iota(m+2)$ by [L3], and step 5.5 gives $|G(y)/y| \le 1/\bigl(16\,\iota(m+2)\bigr) < \varepsilon$; otherwise $G(y)/y = 0$. [step 5.5, L3, L9, choose]

6.2 **$G'$ is unbounded.** Put $u_n := \alpha_n + h_n/4$, an interior point of $I_n$; by step 5.1 and step 2.2, $G'(u_n) = (c_n/h_n)\phi'(1/4) = \iota(n+2)^{2}\cdot\tfrac{3}{16}$, using $c_n/h_n = \iota(n+2)^{4}/\iota(n+2)^{2} = \iota(n+2)^{2}$. Given a real $M \ge 0$, [L3] supplies $n$ with $\tfrac{16}{3}M < \iota(n+2) \le \iota(n+2)^{2}$, so $G'(u_n) > M$. [step 1.1, step 2.2, step 5.1, L3, L9]

7.1 So the difference quotient of $G$ at $0$, which is $y \mapsto G(y)/y$ on $(0,1]$, tends to $0$; hence $G$ is differentiable at $0$ with $G'(0) = 0$ by [L6]. [step 6.1, L6]

8.1 By steps 5.1, 5.2, 5.3, 5.4 and 7.1, $G$ is differentiable at every point of $[0,1]$: every $x$ is either $0$, or an interior point of some $I_n$, or an endpoint of some $I_n$, or a point of $(0,1]$ outside every $I_n$. [step 5.1, step 5.2, step 5.3, step 5.4, step 7.1, L9]

9.1 Hence $G'$ is a function on $[0,1]$ that is not bounded, so it has no Darboux sums and is not Riemann integrable on $[0,1]$ by [L7]; the claim is false, and $\int_0^1 G'$ is an undefined symbol, so [L10] gives nothing here. [step 8.1, step 6.2, L7, L10] ∎

## Remarks

- **Only one bump is active near any point of $(0,1]$, and that is what makes every step finite.** The intervals $I_n$ accumulate only at $0$, so a point of $(0,1]$ has a neighbourhood meeting at most one of them (steps 3.2 and 3.3), and the only place where infinitely many bumps are seen at once is the origin, where step 5.5 controls all of them by a single estimate. No series is summed anywhere.

- **The two exponents are what the construction turns on.** Differentiability at $0$ needs $c_n/\alpha_n \to 0$, and unboundedness of $G'$ needs $c_n/h_n \to \infty$; with $\alpha_n = 1/\iota(n+2)$ the choices $c_n = \alpha_n^{2}$ and $h_n = \alpha_n^{4}$ give $c_n/\alpha_n = \alpha_n \to 0$ and $c_n/h_n = \alpha_n^{-2} \to \infty$. Any pair of exponents with the same two properties would do; these are verified explicitly in steps 6.1 and 6.2 because the construction is only as good as those two inequalities.

- **What this refutes and what it does not.** It refutes the claim that every derivative is Riemann integrable, hence the naive reading of [[thm-ftc-second-part]] with its integrability hypothesis deleted. It says nothing about whether $G'$ has a primitive — it does, namely $G$ — and nothing about the sharp class of functions for which $\int_a^b G' = G(b)-G(a)$ holds, which this library records but does not prove ([[rem-integral-conventions-and-scope]]).
````

### `cex-an-integrable-function-with-no-primitive`

````markdown
---
id: cex-an-integrable-function-with-no-primitive
kind: counterexample
title: "The sign function is Riemann integrable on $[-1,1]$ and has no primitive there"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-ftc-first-part, thm-finitely-many-discontinuities-integrable, thm-additivity-over-subintervals, lem-changing-a-function-at-finitely-many-points, lem-integral-elementary-bounds, cor-zero-derivative-implies-constant, cor-differentiable-implies-continuous, thm-two-sided-limit-iff-both-one-sided, def-one-sided-limits, def-derivative, def-function-limit, def-the-integral-function, def-continuity-real, def-classification-of-discontinuities, def-oriented-integral, def-darboux-integral, def-abs-value, lem-of-abs-value, def-interval, def-bounded-set, def-limit-point-r, def-ordered-field, def-complete-ordered-field]
justified_by: []
aliases: []
landmark: true
short: "integrable with no primitive"
proof_strategy: contradiction
verification:
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
  precheck: pass
  audited: 2026-08-01
sources:
  scraped: []
  references:
    - title: "Sign function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Sign_function"
    - title: "Antiderivative (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Antiderivative"
    - title: "J. Lebl, Basic Analysis I, Fundamental theorem of calculus"
      url: "https://www.jirka.org/ra/html/sec_ftc.html"
    - title: "Colgate University MATH 323, Chapter 5 notes"
      url: "https://math.colgate.edu/math323/dlantz/extras/notesC5.pdf"
pipeline_run: null
---

## Statement refuted

**False claim:** every Riemann integrable function on a closed bounded interval
has a primitive there, that is, is the derivative of some function on that
interval.

Let $s : [-1,1] \to \mathbb{R}$ be the sign function,

$$s(x) \;:=\; \begin{cases} -1 & -1 \le x < 0, \\ 0 & x = 0, \\ 1 & 0 < x \le 1. \end{cases}$$

Then $s$ is Riemann integrable on $[-1,1]$ with $\int_{-1}^{1} s = 0$, and there
is **no** $G : [-1,1] \to \mathbb{R}$ differentiable at every point of $[-1,1]$
with $G' = s$.

**The integral function of $s$ is $F(x) = |x| - 1$**, which is differentiable at
every point of $[-1,1]$ except $x = 0$ — exactly the one point where $s$ is
discontinuous. That is consistent with [[thm-ftc-first-part]], which claims
$F'(c) = s(c)$ only at points of continuity of $s$, and it is what the refutation
below turns into a contradiction.

## Facts & Assumptions

**Given:** The sign function $s$ on $[-1,1]$ and its integral function $F(x) = \int_{-1}^{x} s$.

[A1] There is $G : [-1,1] \to \mathbb{R}$, differentiable at every point of $[-1,1]$ as a function on $[-1,1]$, with $G'(x) = s(x)$ for every $x \in [-1,1]$.

[L1] A bounded function on $[p,q]$ with at most finitely many discontinuities is Riemann integrable there ([[thm-finitely-many-discontinuities-integrable]], [[def-bounded-set]], [[def-darboux-integral]], [[def-classification-of-discontinuities]]).

[L2] Changing an integrable function at finitely many points changes neither its integrability nor its integral, and $\int_p^q c = c(q-p)$ for a constant ([[lem-changing-a-function-at-finitely-many-points]], [[lem-integral-elementary-bounds]]).

[L3] Additivity, in the oriented form valid for arbitrary points ([[thm-additivity-over-subintervals]], claim 3, [[def-oriented-integral]], [[def-the-integral-function]]).

[L4] If $u$ is continuous on an order-convex $I$ and differentiable with $u' = 0$ at every interior point of $I$, then $u$ is constant on $I$ ([[cor-zero-derivative-implies-constant]], [[def-interval]]).

[L5] A function differentiable at a point is continuous there, and a restriction to a subinterval still having the point as a limit point is differentiable there with the same derivative; every point of a nondegenerate interval is a limit point of it ([[cor-differentiable-implies-continuous]], [[def-derivative]], [[def-limit-point-r]], [[def-continuity-real]]).

[L6] If both one-sided limits of a function at $c$ exist and differ, the two-sided limit does not exist ([[thm-two-sided-limit-iff-both-one-sided]], [[def-one-sided-limits]], [[def-function-limit]]).

[L7] Absolute value: $|x| = x$ for $x \ge 0$ and $|x| = -x$ for $x \le 0$; $|x|/x = 1$ for $x>0$ and $= -1$ for $x<0$ ([[def-abs-value]], [[lem-of-abs-value]], [[def-ordered-field]], [[def-complete-ordered-field]]).

## Counterexample

**Proof technique:** contradiction.

1.1 $s$ is bounded, with $|s| \le 1$, and continuous at every point of $[-1,1]$ other than $0$: near a point $x \ne 0$ it is locally constant. So $s$ is integrable on $[-1,1]$, and likewise on $[-1,0]$ and on $[0,1]$, by [L1]. [given, L1]

1.2 **Assume [A1].** Then $G' = s$ everywhere on $[-1,1]$. [assume-contra, A1]

2.1 On $[-1,0]$ the function $s$ agrees with the constant $-1$ except at the single point $0$, so $\int_{-1}^{0} s = -1\cdot(0-(-1)) = -1$ by [L2]; on $[0,1]$ it agrees with the constant $1$ except at $0$, so $\int_0^1 s = 1$. [step 1.1, L2]

2.2 On $I_{+} := [0,1]$ the function $u_{+}(x) := G(x) - x$ is continuous, by [L5], and differentiable at every interior point $x \in (0,1)$ with $u_{+}'(x) = s(x) - 1 = 0$; so $u_{+}$ is constant on $[0,1]$ by [L4], say $G(x) = x + c_1$ there. [step 1.2, L4, L5, choose]

2.3 On $I_{-} := [-1,0]$ the function $u_{-}(x) := G(x) + x$ is continuous and differentiable at every $x \in (-1,0)$ with $u_{-}'(x) = s(x)+1 = 0$; so $G(x) = -x + c_2$ on $[-1,0]$. [step 1.2, L4, L5, choose]

3.1 By [L3], $\int_{-1}^{1} s = \int_{-1}^{0} s + \int_0^1 s = -1 + 1 = 0$. [step 2.1, L3]

3.2 By [L3] again, $F(x) = \int_{-1}^{x} s$ equals $-1 + x$ for $x \in [0,1]$ and equals $-(x-(-1)) = -x-1$ for $x \in [-1,0]$, by [L2] applied on the relevant piece; in both cases $F(x) = |x| - 1$ by [L7]. [step 2.1, L2, L3, L7]

3.3 Evaluating both formulas at $x = 0$ gives $c_1 = G(0) = c_2$; write $c$ for the common value, so $G(x) = |x| + c$ for every $x \in [-1,1]$ by [L7]. [step 2.2, step 2.3, L7]

4.1 The difference quotient of $G$ at $0$ is $x \mapsto (G(x)-G(0))/x = |x|/x$, which equals $1$ for $x > 0$ and $-1$ for $x < 0$ by [L7]; so its right-hand limit at $0$ is $1$ and its left-hand limit is $-1$. [step 3.3, L7]

5.1 By [L6] the two-sided limit of that quotient at $0$ does not exist, so $G$ is not differentiable at $0$; this contradicts [A1]. [step 4.1, A1, L6]

6.1 Hence no such $G$ exists: $s$ is integrable on $[-1,1]$ by step 1.1 and has no primitive there, so the claim is false. [step 1.1, step 3.1, step 5.1, discharge-contradiction] ∎

## Remarks

- **Darboux's theorem is not used.** The slick argument — a derivative has the intermediate value property, and $s$ does not — rests on Darboux's theorem on the intermediate value property of derivatives. The refutation above uses only [[cor-zero-derivative-implies-constant]] and the one-sided limits of a difference quotient, both already published.

- **The tension with the first fundamental theorem is only apparent.** $F$ *is* differentiable with $F' = s$ at every point of $[-1,1]$ except $0$, which is exactly what [[thm-ftc-first-part]] promises, since $s$ is continuous exactly off $0$. What fails is the existence of *any* function differentiable at $0$ too with derivative $s(0)$ there, and step 4.1 shows the obstruction is the jump of $s$ at $0$, not a defect of $F$.

- **The value $s(0)$ is irrelevant to both halves.** Changing it changes neither the integral, by [[lem-changing-a-function-at-finitely-many-points]], nor the conclusion of step 5.1, which shows $G$ is not differentiable at $0$ at all and therefore cannot have any prescribed derivative there.
````

### `cex-spikes-with-integral-one-converging-pointwise-to-zero`

````markdown
---
id: cex-spikes-with-integral-one-converging-pointwise-to-zero
kind: counterexample
title: "Continuous $f_n \\to 0$ pointwise on $[0,1]$ with $\\int_0^1 f_n = 1$ for every $n$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-continuous-implies-integrable, thm-additivity-over-subintervals, cor-primitives-of-a-continuous-function, thm-ftc-second-part, thm-linearity-of-the-integral, thm-algebra-of-continuous-functions, lem-derivative-of-a-power, thm-algebra-of-derivatives, lem-integral-elementary-bounds, def-continuity-real, def-sequence, def-real-limit, thm-of-archimedean, cor-archimedean-reciprocal, def-canonical-natural, lem-of-naturals-positive, def-integer-power, def-oriented-integral, def-darboux-integral, def-derivative, def-interval, def-ordered-field, def-complete-ordered-field]
justified_by: []
aliases: []
landmark: true
short: "spikes: pointwise limit does not pass under the integral"
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
    - title: "Riemann integral (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Riemann_integral"
    - title: "Uniform convergence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Uniform_convergence"
    - title: "UC Davis MATH 125B, Chapter 1 notes"
      url: "https://www.math.ucdavis.edu/~hunter/m125b/ch1.pdf"
pipeline_run: null
---

## Statement refuted

**False claim:** if $(f_n)$ is a sequence of Riemann integrable functions on
$[0,1]$ converging pointwise to $f$, and $f$ is integrable, then
$\int_0^1 f_n \to \int_0^1 f$.

For $n \in \mathbb{N}$ write $c_n := \iota(n+1) \ge 1$ ([[def-canonical-natural]],
[[lem-of-naturals-positive]]) and define the **tent** $f_n : [0,1] \to
\mathbb{R}$ by

$$f_n(x) \;:=\; \begin{cases} 4c_n^{2}\,x & 0 \le x \le \tfrac{1}{2c_n}, \\[3pt] 4c_n^{2}\bigl(\tfrac{1}{c_n} - x\bigr) & \tfrac{1}{2c_n} \le x \le \tfrac{1}{c_n}, \\[3pt] 0 & \tfrac{1}{c_n} \le x \le 1 . \end{cases}$$

Each $f_n$ is continuous on $[0,1]$, hence integrable, with

$$\int_0^1 f_n \;=\; 1 \qquad \text{for every } n ,$$

while $f_n(x) \to 0$ for every $x \in [0,1]$. So the pointwise limit is the zero
function, whose integral is $0$, and the integrals do not converge to it.

**The heights are unbounded**: $f_n$ attains the value $2c_n$ at
$x = 1/(2c_n)$, and $2c_n \to \infty$. That is what the example refutes and what
it does not: it refutes the interchange for **pointwise** convergence, and it
says nothing whatever about sequences that are uniformly bounded, for which no
theorem is stated on this page in any direction.

## Facts & Assumptions

**Given:** For $n \in \mathbb{N}$, $c_n = \iota(n+1)$ and the function $f_n$ above; a point $x \in [0,1]$ and a real $\varepsilon > 0$.

[L1] $\iota(n+1) \ge 1 > 0$, $\iota$ is nondecreasing on $\mathbb{N}$, and for every real $\eta>0$ there is a natural $N$ with $1/\iota(N+1) < \eta$ ([[def-canonical-natural]], [[lem-of-naturals-positive]], [[thm-of-archimedean]], [[cor-archimedean-reciprocal]]).

[L2] Every polynomial function is continuous, and a function agreeing with continuous functions on the pieces of a finite subdivision of $[0,1]$, with matching values at the shared endpoints, is continuous on $[0,1]$ ([[thm-algebra-of-continuous-functions]], claim 5, [[def-continuity-real]]).

[L3] A continuous function on a closed bounded interval with distinct endpoints is integrable there ([[thm-continuous-implies-integrable]], [[def-darboux-integral]]).

[L4] Additivity over adjacent subintervals ([[thm-additivity-over-subintervals]], [[def-oriented-integral]]).

[L5] If $H$ is differentiable at every point of $[p,q]$ with $H'$ integrable there, then $\int_p^q H' = H(q)-H(p)$; a continuous function on an interval has a primitive ([[thm-ftc-second-part]], [[cor-primitives-of-a-continuous-function]]).

[L6] For $n \ge 1$ the map $x \mapsto x^{n}$ has derivative $\iota(n)x^{\,n-1}$; sums and scalar multiples of differentiable functions are differentiable with the corresponding derivatives; and $\int_p^q c = c(q-p)$ for a constant ([[lem-derivative-of-a-power]], [[thm-algebra-of-derivatives]], [[lem-integral-elementary-bounds]], [[def-derivative]], [[def-integer-power]]).

[L7] A sequence of reals converges to $L$ when for every real $\varepsilon>0$ there is $N$ with $|a_n - L| < \varepsilon$ for all $n \ge N$ ([[def-real-limit]], [[def-sequence]]).

[L8] Ordered-field arithmetic and linearity of the integral: multiplying inequalities by positive reals, transitivity, and $\int_p^q(\lambda u) = \lambda\int_p^q u$ ([[def-ordered-field]], [[def-complete-ordered-field]], [[thm-linearity-of-the-integral]], [[def-interval]]).

## Counterexample

**Proof technique:** direct.

1.1 $c_n \ge 1$ by [L1], so $0 < 1/(2c_n) < 1/c_n \le 1$ and the three pieces of the definition subdivide $[0,1]$. [given, L1]

2.1 The three formulas agree at the shared endpoints: at $x = 1/(2c_n)$ both give $4c_n^{2}/(2c_n) = 2c_n$, and at $x = 1/c_n$ the second gives $0$, which is the third. So $f_n$ is a well-defined function and is continuous on $[0,1]$ by [L2], hence integrable by [L3]. [step 1.1, L2, L3]

2.2 On $[1/c_n, 1]$ the function $f_n$ is constantly $0$, so $\int_{1/c_n}^{1} f_n = 0$ by [L6]; when $1/c_n = 1$ this piece is degenerate and the integral is $0$ by [L4]. [step 1.1, L4, L6]

2.3 **Pointwise convergence to $0$.** At $x = 0$ every $f_n(0) = 0$. For $x > 0$, [L1] gives $N$ with $1/\iota(N+1) < x$, and for $n \ge N$ one has $c_n = \iota(n+1) \ge \iota(N+1)$, hence $1/c_n \le 1/\iota(N+1) < x$, so $x$ lies in the third piece and $f_n(x) = 0$. [step 1.1, given, L1, L8]

3.1 On $[0, 1/(2c_n)]$ the function $H(x) := 2c_n^{2}x^{2}$ has $H' (x)= 4c_n^{2}x = f_n(x)$ by [L6], so $\int_0^{1/(2c_n)} f_n = H(1/(2c_n)) - H(0) = 2c_n^{2}/(4c_n^{2}) = 1/2$ by [L5]. [step 2.1, L5, L6]

3.2 On $[1/(2c_n), 1/c_n]$ the function $H_2(x) := 4c_n^{2}\bigl(x/c_n - x^{2}/2\bigr)$ has $H_2'(x) = 4c_n^{2}(1/c_n - x) = f_n(x)$ by [L6], and $H_2(1/c_n) = 4c_n^{2}\bigl(1/c_n^{2} - 1/(2c_n^{2})\bigr) = 2$ while $H_2(1/(2c_n)) = 4c_n^{2}\bigl(1/(2c_n^{2}) - 1/(8c_n^{2})\bigr) = 3/2$; so $\int_{1/(2c_n)}^{1/c_n} f_n = 2 - 3/2 = 1/2$ by [L5]. [step 2.1, L5, L6]

3.3 Hence $|f_n(x) - 0| = 0 < \varepsilon$ for all $n \ge N$, so $f_n(x) \to 0$ for every $x \in [0,1]$ by [L7]. [step 2.3, L7]

4.1 By [L4] applied twice, $\int_0^1 f_n = 1/2 + 1/2 + 0 = 1$ for every $n$. [step 3.1, step 3.2, step 2.2, L4]

5.1 The pointwise limit is the zero function, which is integrable with integral $0$ by [L6], while $\int_0^1 f_n = 1$ for every $n$ by step 4.1; so the integrals do not converge to the integral of the limit and the claim is false. [step 4.1, step 3.3, L6, L7] ∎

## Remarks

- **What this refutes, stated exactly.** It refutes the interchange of a limit with an integral under **pointwise** convergence alone, even when every $f_n$ is continuous and the limit function is as regular as possible. It does not refute, and does not address, any statement about uniformly convergent sequences or about uniformly bounded ones; no such statement is proved on this page, and none is contradicted here.

- **Unboundedness of the heights is essential to the construction and is stated as a feature, not hidden.** $\sup_{[0,1]} f_n = 2c_n$ grows without bound, and the mass $1$ escapes into a spike of shrinking width. A reader who wants a theorem in this direction should note that the hypothesis to look for is a bound on the whole sequence, and that whichever theorem supplies it is not on this page.

- **The integral of the limit exists here.** The failure is not that the limit function is non-integrable — it is the zero function — but that the numbers $\int_0^1 f_n$ simply do not converge to $\int_0^1 0$. A separate failure, in which the pointwise limit of integrable functions is not integrable at all, is recorded as a false statement on the companion page of *The Riemann Integral*.
````

### `cor-integrability-of-absolute-values-products-and-lattice-operations`

````markdown
---
id: cor-integrability-of-absolute-values-products-and-lattice-operations
kind: corollary
title: "If $f,g$ are integrable on $[a,b]$ then so are $\\lvert f\\rvert$, $f^{2}$, $fg$, $\\max(f,g)$ and $\\min(f,g)$, and $\\bigl\\lvert\\int_a^b f\\bigr\\rvert \\le \\int_a^b\\lvert f\\rvert$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-composition-with-a-continuous-function, thm-linearity-of-the-integral, thm-monotonicity-of-the-integral, def-oriented-integral, thm-algebra-of-continuous-functions, def-continuity-real, def-abs-value, lem-of-abs-value, def-darboux-integral, def-darboux-sums, def-max-min, def-integer-power, def-bounded-set, def-interval, def-ordered-field, def-complete-ordered-field]
forward_refs: [cex-absolute-value-integrable-without-the-function]
justified_by: []
aliases: [cor-integrable-functions-form-an-algebra]
landmark: true
short: "products, moduli and lattice operations"
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
    - title: "Riemann integral (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Riemann_integral"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 6"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "Carnegie Mellon 21-269, Riemann integration notes"
      url: "https://www.math.cmu.edu/~gautam/c/2026-269/notes/rint.html"
    - title: "Encyclopedia of Mathematics, Integral calculus"
      url: "https://encyclopediaofmath.org/wiki/Integral_calculus"
pipeline_run: null
---

## Statement

Let $a < b$ be reals and let $f, g : [a,b] \to \mathbb{R}$ be integrable
([[def-darboux-integral]]). Then:

1. $|f|$, $f^{2}$ and $fg$ are integrable on $[a,b]$
   ([[def-abs-value]], [[def-integer-power]]);
2. $\max(f,g)$ and $\min(f,g)$, defined pointwise
   ([[def-max-min]]), are integrable on $[a,b]$;
3. the **triangle inequality for the integral**:
   $$\Bigl|\int_a^b f\Bigr| \;\le\; \int_a^b |f| .$$

**Claim 3 is stated with $a < b$ and is not orientation-invariant.** For $u > v$
the right-hand side is $-\int_v^u |f| \le 0$ while the left-hand side is $\ge 0$,
so the inequality as written is false there. The form valid for *every* pair
$u,v$ on which $f$ is integrable ([[def-oriented-integral]]) is

$$\Bigl|\int_u^v f\Bigr| \;\le\; \Bigl|\int_u^v |f|\,\Bigr| ,$$

and that is the form the estimates below on this page use whenever the limits
are not known to be in increasing order.

**The converse of claim 1 fails.** Integrability of $|f|$ does not give
integrability of $f$; the witness is on the companion page.

## Facts & Assumptions

**Given:** Reals $a < b$ and integrable $f, g : [a,b] \to \mathbb{R}$.

[L1] If $u$ is integrable on $[a,b]$ with values in $[m,M]$ and $\varphi$ is continuous on $[m,M]$, then $\varphi\circ u$ is integrable ([[thm-composition-with-a-continuous-function]]); an integrable function is bounded, so such $m$ and $M$ exist ([[def-darboux-sums]], [[def-bounded-set]], [[def-interval]]).

[L2] Sums and scalar multiples of integrable functions are integrable, with $\int_a^b(\lambda u + \nu w) = \lambda\int_a^b u + \nu\int_a^b w$ ([[thm-linearity-of-the-integral]]).

[L3] If $u \le w$ pointwise on $[a,b]$ and both are integrable then $\int_a^b u \le \int_a^b w$ ([[thm-monotonicity-of-the-integral]]).

[L4] The absolute value $t \mapsto |t|$, the square $t \mapsto t^{2}$ and every polynomial function are continuous on every subset of $\mathbb{R}$ ([[thm-algebra-of-continuous-functions]], claims 2 and 5, [[def-continuity-real]]).

[L5] For reals $s,t$: $\max\{s,t\} = (s + t + |s-t|)\cdot 2^{-1}$ and $\min\{s,t\} = (s + t - |s-t|)\cdot 2^{-1}$, and $st = \bigl((s+t)^{2} - (s-t)^{2}\bigr)\cdot 4^{-1}$ ([[def-max-min]], [[def-abs-value]], [[def-ordered-field]], [[def-integer-power]]).

[L6] Absolute value: $-|t| \le t \le |t|$, and $|t| \le c$ follows from $-c \le t \le c$ ([[lem-of-abs-value]], [[def-abs-value]]).

[L7] With oriented limits, $\int_v^u u = -\int_u^v u$ and $\int_u^u u = 0$ ([[def-oriented-integral]]).

[L8] Ordered-field arithmetic: adding constants and multiplying by positive reals preserve inequalities, and the order is total and transitive ([[def-ordered-field]], [[def-complete-ordered-field]]).

## Proof

**Proof technique:** direct.

1.1 $f$ is bounded, so fix reals $m \le M$ with $f[\,[a,b]\,] \subseteq [m,M]$; the same for $g$, and for $f+g$ and $f-g$, which are integrable by [L2]. [given, L1, L2, choose]

1.2 The maps $t \mapsto |t|$ and $t \mapsto t^{2}$ are continuous on any closed bounded interval, by [L4]. [L4]

2.1 By [L1] applied with $\varphi(t) = |t|$ to $f$, to $g$ and to $f-g$, the functions $|f|$, $|g|$ and $|f-g|$ are integrable. [step 1.1, step 1.2, L1]

2.2 By [L1] applied with $\varphi(t) = t^{2}$ to $f$, to $f+g$ and to $f-g$, the functions $f^{2}$, $(f+g)^{2}$ and $(f-g)^{2}$ are integrable. [step 1.1, step 1.2, L1]

3.1 By [L5], $fg = \bigl((f+g)^{2}-(f-g)^{2}\bigr)\cdot 4^{-1}$ pointwise, so $fg$ is integrable by [L2]; this completes claim 1. [step 2.1, step 2.2, L2, L5]

3.2 By [L5], $\max(f,g) = \bigl(f + g + |f-g|\bigr)\cdot 2^{-1}$ and $\min(f,g) = \bigl(f+g-|f-g|\bigr)\cdot 2^{-1}$ pointwise, so both are integrable by [L2]; this is claim 2. [step 2.1, L2, L5]

3.3 **Claim 3.** By [L6], $-|f| \le f \le |f|$ pointwise on $[a,b]$, and all three functions are integrable by step 2.1 and [L2]. [step 2.1, L2, L6]

4.1 By [L3] applied twice, $-\int_a^b|f| \le \int_a^b f \le \int_a^b |f|$, using $\int_a^b(-|f|) = -\int_a^b|f|$ from [L2]. [step 3.3, L2, L3]

5.1 Hence $\bigl|\int_a^b f\bigr| \le \int_a^b|f|$ by [L6], which is claim 3. [step 4.1, L6]

6.1 **The oriented form.** For $u = v$ both sides are $0$ by [L7]; for $u < v$ it is claim 3 on $[u,v]$; and for $u > v$ both $\int_u^v f$ and $\int_u^v |f|$ are the negatives of the corresponding integrals over $[v,u]$ by [L7], so the two absolute values are unchanged and claim 3 on $[v,u]$ gives the inequality. [step 5.1, L7, L8] ∎

## Remarks

- **Every integrability clause comes from one theorem plus linearity.** The only input that produces integrability is [[thm-composition-with-a-continuous-function]], with [[thm-linearity-of-the-integral]] recombining the pieces; claim 3 additionally uses [[thm-monotonicity-of-the-integral]], which is the one place an inequality between integrals is needed. The identities of [L5] are algebra, and they are what turns a statement about composing with $|\cdot|$ and $(\cdot)^2$ into statements about products and lattice operations. In particular no new estimate on Darboux sums is made here.

- **The polarisation identity is used, and it is why $f^2$ comes first.** There is no direct route from integrability of $f$ and of $g$ to integrability of $fg$ through the composition theorem, because $(s,t) \mapsto st$ is a function of two variables and the theorem composes with one. Writing $fg$ through squares of sums and differences reduces it to the one-variable case.

- **The inequality of claim 3 is the integral analogue of the triangle inequality**, and like it, it can be strict: for $f(x) = x$ on $[-1,1]$ the left-hand side is $0$ and the right-hand side is $1$.

- **Forward reference, orientation only.** The witness refuting the converse of claim 1 is [[cex-absolute-value-integrable-without-the-function]] on the companion page; nothing above depends on it.
````

### `def-darboux-integral`

````markdown
---
id: def-darboux-integral
kind: definition
title: "The lower and upper Darboux integrals of a bounded $f$ on $[a,b]$ as $\\sup_P L(f,P)$ and $\\inf_P U(f,P)$, Darboux integrability as their equality, and the notation $\\int_a^b f$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-darboux-sums, lem-refinement-inequalities, def-partition-and-refinement, def-bounded-set, def-complete-ordered-field, def-ordered-field, def-infimum, thm-infimum-property, lem-sup-unique, def-interval]
justified_by: []
aliases: [def-riemann-integrable, def-lower-and-upper-integral]
landmark: true
short: "Darboux integral $\\int_a^b f$"
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
    - title: "Darboux integral (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Darboux_integral"
    - title: "Riemann integral (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Riemann_integral"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 6"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, The Riemann Integral"
      url: "https://www.jirka.org/ra/html/sec_rint.html"
    - title: "J. Hunter, Chapter 11: The Riemann Integral"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/ch11.pdf"
pipeline_run: null
---

## Definition

Let $a < b$ be reals and let $f : [a,b] \to \mathbb{R}$ be bounded
([[def-bounded-set]]). Write $\mathcal{P}$ for the set of all partitions of
$[a,b]$ ([[def-partition-and-refinement]]) and put

$$\mathcal{L} \;:=\; \{\, L(f,P) \ : \ P \in \mathcal{P} \,\}, \qquad \mathcal{U} \;:=\; \{\, U(f,P) \ : \ P \in \mathcal{P} \,\}$$

for the sets of lower and of upper Darboux sums ([[def-darboux-sums]]).

### Both extrema exist

**$\mathcal{P}$ is nonempty**: the pair $(1, t)$ with $t_0 := a$ and $t_k := b$
for $k \ge 1$ is a partition of $[a,b]$, since $a < b$. So $\mathcal{L}$ and
$\mathcal{U}$ are nonempty.

**$\mathcal{L}$ is bounded above and $\mathcal{U}$ is bounded below.** Fix any
$Q \in \mathcal{P}$. By claim 2 of [[lem-refinement-inequalities]],
$L(f,P) \le U(f,Q)$ for every $P \in \mathcal{P}$, so $U(f,Q)$ is an upper bound
of $\mathcal{L}$; and $L(f,Q) \le U(f,P)$ for every $P$, so $L(f,Q)$ is a lower
bound of $\mathcal{U}$.

Hence a nonempty set bounded above has a supremum
([[def-complete-ordered-field]]) and a nonempty set bounded below has an infimum
([[thm-infimum-property]], [[def-infimum]]), each unique ([[lem-sup-unique]]).
The **lower** and **upper Darboux integrals** of $f$ over $[a,b]$ are the real
numbers

$$\underline{\int_a^b} f \;:=\; \sup \mathcal{L} \;=\; \sup_{P} L(f,P), \qquad \overline{\int_a^b} f \;:=\; \inf \mathcal{U} \;=\; \inf_{P} U(f,P) .$$

### The lower integral never exceeds the upper one

$$\underline{\int_a^b} f \;\le\; \overline{\int_a^b} f .$$

Indeed, for each fixed $Q \in \mathcal{P}$ the number $U(f,Q)$ is an upper bound
of $\mathcal{L}$, so the least upper bound satisfies
$\underline{\int_a^b} f \le U(f,Q)$. As $Q$ was arbitrary, $\underline{\int_a^b}f$
is a lower bound of $\mathcal{U}$, and the greatest lower bound satisfies
$\underline{\int_a^b} f \le \overline{\int_a^b} f$ ([[def-infimum]]).

Moreover, for **every** partition $P$,

$$L(f,P) \;\le\; \underline{\int_a^b} f \;\le\; \overline{\int_a^b} f \;\le\; U(f,P) ,$$

the outer inequalities because a member of a set is at most its supremum and at
least its infimum.

### Integrability

$f$ is **Darboux integrable on $[a,b]$**, and on this page simply
**integrable**, when

$$\underline{\int_a^b} f \;=\; \overline{\int_a^b} f ,$$

and then the common value is written

$$\int_a^b f \qquad \text{or} \qquad \int_a^b f(x)\,\mathrm{d}x ,$$

the **integral of $f$ over $[a,b]$**. It is a single well-determined real
number, being the common value of two numbers each of which is unique
([[lem-sup-unique]]). Without the displayed equality the symbol $\int_a^b f$ is
not defined and is never written.

**The inequality above is the whole difficulty.** By the previous paragraph
integrability is *never* a question of one integral exceeding the other, only of
the gap $\overline{\int_a^b} f - \underline{\int_a^b} f \ge 0$ being $0$; and by
[[thm-riemann-criterion]] that gap is $0$ exactly when a single partition can be
found making $U(f,P) - L(f,P)$ small. Whether that is possible is settled
completely, in terms of the discontinuities of $f$, by
[[thm-lebesgue-criterion]].

**"Riemann integrable" means the same thing here.** The definition above is
Darboux's. Riemann's own definition, in terms of tagged partitions of small
mesh, is [[def-tagged-partition-and-riemann-sum]], and the two define the same
class of functions with the same integral by [[thm-darboux-equals-riemann]].
Until that theorem is proved the two phrases are kept apart; after it they are
used interchangeably, as they are throughout the literature.

## Remarks

- **The supremum is over all partitions, and nothing is selected.** Both
  $\mathcal{L}$ and $\mathcal{U}$ are sets determined by $f$ and $[a,b]$ alone,
  and $\sup$ and $\inf$ are canonical, so no choice principle is involved in
  forming either integral. Where a choice does enter on this page is recorded in
  [[rem-riemann-integral-choice-ledger]].

- **Why the lower integral is a supremum and not an infimum.** Refining a
  partition can only increase a lower sum and decrease an upper sum
  ([[lem-refinement-inequalities]]), so the lower sums push up towards the
  integral and the upper sums push down towards it. Taking $\inf \mathcal{L}$
  would return the sum over the coarsest partition and would carry no
  information about $f$ beyond its infimum on $[a,b]$.

- **A bounded $f$ always has both integrals; only their equality can fail.** The
  Dirichlet function on $[0,1]$ has lower integral $0$ and upper integral $1$
  ([[fs-bounded-implies-riemann-integrable]]), which is the standard witness that
  the definition above is not vacuous in either direction.
````

### `def-oriented-integral`

````markdown
---
id: def-oriented-integral
kind: definition
title: "The integral with oriented limits: $\\int_a^a f := 0$ and $\\int_b^a f := -\\int_a^b f$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-darboux-integral, def-partition-and-refinement, def-darboux-sums, def-bounded-set, def-interval]
justified_by: []
aliases: [def-oriented-limits-of-integration]
landmark: true
short: "oriented limits $\\int_b^a f = -\\int_a^b f$"
verification:
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
  precheck: n/a
  audited: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Riemann integral (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Riemann_integral"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 6"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "Encyclopedia of Mathematics, Integral calculus"
      url: "https://encyclopediaofmath.org/wiki/Integral_calculus"
pipeline_run: null
---

## Definition

**Why this item is first.** The published definition of the integral does not
cover this page. [[def-darboux-integral]] is stated for reals $a < b$, because
the partitions it quantifies over are those of [[def-partition-and-refinement]],
whose standing hypothesis is $a < b$: with $a = b$ the chain
$a = t_0 < \dots < t_n = b$ is unsatisfiable. So $\int_a^b f$ is an undefined
symbol whenever $a \ge b$, and every additivity statement below would be
ill-formed as it is usually written. This item extends the notation, and nothing
else: the object it names is still the Darboux integral of
[[def-darboux-integral]].

Let $u, v \in \mathbb{R}$ and write

$$[u \wedge v,\ u \vee v] \;:=\; \text{the closed interval with endpoints } u \text{ and } v$$

([[def-interval]]). Let $f$ be a real-valued function whose domain contains that
interval. Say that **$f$ is integrable between $u$ and $v$** when either $u = v$,
or $u \ne v$ and the restriction of $f$ to $[u \wedge v,\ u \vee v]$ is bounded
([[def-bounded-set]]) and Darboux integrable there ([[def-darboux-integral]],
[[def-darboux-sums]]). For such $f$ define

$$\int_u^v f \;:=\; \begin{cases} \text{the Darboux integral of } f \text{ over } [u,v] & \text{if } u < v, \\[2pt] 0 & \text{if } u = v, \\[2pt] -\displaystyle\int_v^u f & \text{if } u > v. \end{cases}$$

**There is nothing to check for consistency.** The three clauses are indexed by
the three cases of trichotomy, $u < v$, $u = v$ and $u > v$, which are mutually
exclusive and exhaustive; no pair of them ever applies to the same $(u,v)$. In
particular the first clause is untouched, so on $u < v$ this is the published
integral verbatim and every published theorem about it applies unchanged.

**The middle clause is a stipulation, not a computation.** It is *not* claimed
that $0$ is a value forced by the $u < v$ definition in any limiting sense; that
definition simply says nothing at $u = v$, and $\int_u^u f := 0$ is what is
written there. It is also unconditional: no hypothesis on $f$ beyond being
defined at $u$ is asked for, since the case $u = v$ never refers to a partition.

### The two consequences used throughout the page

**Antisymmetry, for every pair.** For all reals $u, v$ with $f$ integrable
between them,

$$\int_u^v f \;=\; -\int_v^u f .$$

Indeed if $u < v$ then $v > u$ and the third clause reads
$\int_v^u f = -\int_u^v f$, which rearranges to the display; if $u = v$ both
sides are $0$; and if $u > v$ the third clause is the display itself.

**Absolute values agree.** Consequently
$\bigl|\int_u^v f\bigr| = \bigl|\int_v^u f\bigr|$ for every such pair.

**An obligation recorded here and discharged elsewhere.** With this convention
the additivity identity

$$\int_u^v f \;+\; \int_v^w f \;=\; \int_u^w f$$

holds for **every** arrangement of $u, v, w$ in an interval on which $f$ is
integrable, not only for $u < v < w$. That is a theorem and not part of this
definition; it is proved as the last clause of
[[thm-additivity-over-subintervals]], and nothing on this page uses it before it
is proved there.

## Remarks

- **This is notation, and it is a real notation.** Without it the substitution
  theorem could not be stated with the limits $\varphi(c)$ and $\varphi(d)$ in
  the order the map produces them, since a differentiable $\varphi$ need be
  neither injective nor monotone; and the integral function $x \mapsto \int_a^x f$
  would be undefined at $x = a$.

- **One published inequality is not orientation-invariant, and that is a trap.**
  The estimate $\bigl|\int_u^v f\bigr| \le \int_u^v |f|$ is guaranteed only
  for $u \le v$: at $u > v$ the right-hand side is $-\int_v^u |f| \le 0$ while
  the left-hand side is $\ge 0$, so the inequality fails whenever
  $\int_v^u |f| > 0$. The form valid for every pair is
  $\bigl|\int_u^v f\bigr| \le \bigl|\int_u^v |f|\bigr|$, and this is stated where
  it is proved ([[cor-integrability-of-absolute-values-products-and-lattice-operations]]).

- **Integrability is a property of the unordered pair.** By construction, $f$ is
  integrable between $u$ and $v$ if and only if it is integrable between $v$ and
  $u$, since both refer to the same closed interval; only the sign of the value
  remembers the order.
````

### `def-the-integral-function`

````markdown
---
id: def-the-integral-function
kind: definition
title: "The integral function $F(x) := \\int_a^x f$ of an integrable $f$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [lem-integrability-on-a-subinterval, thm-additivity-over-subintervals, def-oriented-integral, def-darboux-integral, def-interval, def-bounded-set]
forward_refs: [cex-an-integrable-function-with-no-primitive, fs-the-integral-function-is-always-a-primitive]
justified_by: []
aliases: [def-integral-function]
landmark: true
short: "integral function $F(x) = \\int_a^x f$"
verification:
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
  precheck: n/a
  audited: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Fundamental theorem of calculus (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Fundamental_theorem_of_calculus"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 6"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "Encyclopedia of Mathematics, Integral calculus"
      url: "https://encyclopediaofmath.org/wiki/Integral_calculus"
    - title: "J. Lebl, Basic Analysis I, Fundamental theorem of calculus"
      url: "https://www.jirka.org/ra/html/sec_ftc.html"
pipeline_run: null
---

## Definition

Let $a < b$ be reals and let $f : [a,b] \to \mathbb{R}$ be integrable
([[def-darboux-integral]]). The **integral function of $f$ with base point $a$**
is

$$F : [a,b] \to \mathbb{R}, \qquad F(x) \;:=\; \int_a^x f .$$

**It is a genuine function, and that has to be checked.** For $x \in (a,b]$ the
restriction of $f$ to $[a,x]$ is integrable, by
[[lem-integrability-on-a-subinterval]] applied with $c := a$ and $d := x$, so
$\int_a^x f$ names a single real number ([[def-darboux-integral]]). For $x = a$
the symbol $\int_a^a f$ is $0$ by [[def-oriented-integral]]. So $F(x)$ is defined
at every point of $[a,b]$ and

$$F(a) \;=\; 0 .$$

More generally, for any base point $c \in [a,b]$ the function
$x \mapsto \int_c^x f$ is defined on the whole of $[a,b]$, the integral being the
oriented one of [[def-oriented-integral]] when $x < c$; the case $c = a$ is
written $F$ above and is the one used unless another base point is named.

### The two identities used throughout

**Increments are integrals.** For all $x, y \in [a,b]$, in either order,

$$F(y) - F(x) \;=\; \int_x^y f .$$

This is claim 3 of [[thm-additivity-over-subintervals]] applied to the three
points $a$, $x$, $y$: it gives $\int_a^x f + \int_x^y f = \int_a^y f$, that is
$F(x) + \int_x^y f = F(y)$. No ordering of $x$ and $y$ is assumed, and the
degenerate cases $x = y$, $x = a$ and $y = a$ are included, since claim 3 is
stated for arbitrary points.

**Changing the base point changes $F$ by a constant.** If $c \in [a,b]$ and
$F_c(x) := \int_c^x f$, then for every $x \in [a,b]$

$$F_c(x) \;=\; F(x) - F(c) ,$$

again by claim 3 of [[thm-additivity-over-subintervals]] at the points $a$, $c$,
$x$. So the family of integral functions of $f$ is one function up to an
additive constant.

## Remarks

- **$F$ exists for every integrable $f$, whether or not $f$ has a primitive.**
  Nothing in the definition asks $f$ to be continuous anywhere, and nothing here
  claims $F' = f$. The two statements about $F'$ that this page does prove are: $F$ is
  always Lipschitz ([[thm-the-integral-function-is-lipschitz]]), and $F'(c) = f(c)$
  at every point $c$ where $f$ is continuous ([[thm-ftc-first-part]]).

- **$F$ need not be a primitive of $f$.** At a discontinuity of $f$ the
  derivative $F'$ may fail to exist, or may exist and differ from $f$; both
  possibilities are exhibited on the companion page, by
  [[cex-an-integrable-function-with-no-primitive]] and
  [[fs-the-integral-function-is-always-a-primitive]]. That is the honest content
  of the phrase "the integral function", and it is why it is not called "the
  primitive" here.

- **Why the base point is part of the data and the notation suppresses it.** The
  symbol $F$ hides its dependence on $a$, as is customary; the identity
  $F_c = F - F(c)$ above is what makes the suppression harmless, since every
  statement below about $F$ is about its increments, which do not see the base
  point at all.
````

### `rem-dominated-convergence-theorem`

````markdown
---
id: rem-dominated-convergence-theorem
kind: remark
title: "Dominated convergence theorem"
status: published
origin: session
proved_here: false
deps: [rem-lebesgue-measure-and-integral, rem-fatou-lemma]
justified_by: []
forward_refs: []
aliases: [rem-dct]
landmark: true
short: "A single integrable dominating function licenses passage to the limit"
verification:
  precheck: n/a
  sources_checked:
    date: 2026-07-26
    scope: citations
    by: session-audit
sources:
  scraped: []
  references:
    - title: "Dominated convergence theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Dominated_convergence_theorem"
    - title: "Fatou's lemma (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Fatou%27s_lemma"
    - title: "T. Tao, An Introduction to Measure Theory, Ch. 1"
      url: "https://terrytao.wordpress.com/books/an-introduction-to-measure-theory/"
pipeline_run: null
---

## Statement

Let $(X, \mathcal{A}, \mu)$ be a measure space, let $f_n : X \to \mathbb{R}$ be
measurable with $f_n \to f$ pointwise almost everywhere, and suppose there is a
single $g \in L^{1}(\mu)$ with $|f_n| \le g$ almost everywhere for every $n$.
Then $f$ and every $f_n$ are integrable,

$$\lim_{n \to \infty} \int_X |f_n - f| \, d\mu = 0, \qquad \text{hence} \qquad \lim_{n \to \infty} \int_X f_n \, d\mu = \int_X f \, d\mu.$$

The domination hypothesis cannot be dropped:
$f_n = n\,\mathbf{1}_{(0,1/n)}$ on $[0,1]$ converges pointwise to $0$ while
$\int f_n \, d\lambda = 1$, and the least function dominating all $f_n$ is
$1/x$, which is not integrable on $(0,1)$.

## Remarks

**Not proved in this library.** It is recorded with citations and used in no
proof here.

**What would prove it.** Fatou's lemma ([[rem-fatou-lemma]]) applied to the
nonnegative sequences $g + f_n$ and $g - f_n$, whose liminfs are $g + f$ and
$g - f$; the two resulting inequalities squeeze $\int f_n$ to $\int f$. The
convergence in $L^{1}$ comes from the same argument applied to
$2g - |f_n - f| \ge 0$. So the three convergence theorems form one block: the
monotone convergence theorem is proved from the construction of the integral,
Fatou from monotone convergence, and this from Fatou.

**Which page it serves.** It is the endpoint of the Riemann integral page and of
the uniform convergence page. Uniform convergence on a bounded interval is what
this library can offer for interchanging a limit and an integral, and it is a
much heavier hypothesis than pointwise convergence with a dominating function.

**The Riemann-level substitute that is in scope.** Arzela's bounded convergence
theorem, that a uniformly bounded sequence of Riemann integrable functions on
$[a,b]$ converging pointwise to a Riemann integrable limit may be integrated
term by term, is a theorem about the Riemann integral and is not deferred. It
needs the limit function's Riemann integrability as a hypothesis, which is
exactly the weakness the Lebesgue theory removes.
````

### `rem-ftc-absolutely-continuous`

````markdown
---
id: rem-ftc-absolutely-continuous
kind: remark
title: "The sharp fundamental theorem of calculus (absolute continuity)"
status: published
origin: session
proved_here: false
deps: [rem-lebesgue-measure-and-integral, rem-absolutely-continuous-function, rem-lebesgue-monotone-differentiation]
justified_by: []
forward_refs: []
aliases: [rem-ftc-sharp]
landmark: true
short: "F is AC iff F' exists a.e., lies in L^1, and integrates back to F on every subinterval"
verification:
  precheck: n/a
  sources_checked:
    date: 2026-07-26
    scope: citations
    by: session-audit
sources:
  scraped: []
  references:
    - title: "Fundamental theorem of calculus, Lebesgue integral form (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Fundamental_theorem_of_calculus"
    - title: "Absolute continuity (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Absolute_continuity"
    - title: "C. Heil, Absolute continuity and the Banach-Zaretsky theorem"
      url: "https://heil.math.gatech.edu/papers/abscont_typosmarked.pdf"
pipeline_run: null
---

## Statement

Let $F : [a,b] \to \mathbb{R}$. The following are equivalent.

1. $F$ is absolutely continuous on $[a,b]$.
2. $F$ is differentiable almost everywhere on $[a,b]$, $F' \in L^{1}[a,b]$, and

$$F(x) = F(a) + \int_a^x F' \, d\lambda \qquad \text{for every } x \in [a,b].$$

3. There exists $g \in L^{1}[a,b]$ with $F(x) = F(a) + \int_a^x g \, d\lambda$
   for every $x \in [a,b]$; and then $g = F'$ almost everywhere.

In particular, for $F \in AC[a,b]$ the Newton-Leibniz formula
$F(b) - F(a) = \int_a^b F' \, d\lambda$ holds, and $AC[a,b]$ is exactly the
class of functions for which it holds in this sense.

**The identity must be required at every $x$, not only at $x = b$.** The endpoint
identity alone does not characterise absolute continuity. Let $c$ be the Cantor
function and set $F(x) = c(2x)$ on $[0, 1/2]$ and $F(x) = c(2 - 2x)$ on
$[1/2, 1]$. Then $F$ is continuous, $F' = 0$ almost everywhere, $F' \in L^1$, and

$$\int_0^1 F' \, d\lambda = 0 = F(1) - F(0),$$

yet $F$ is not absolutely continuous, since it is not constant while carrying all
its variation on a null set. The identity fails at $x = 1/2$, where the left side
is $1$ and the right side is $0$.

## Remarks

**Not proved in this library.** It is recorded with citations and used in no
proof here.

**What would prove it.** The implication from 3 to 1 is absolute continuity of
the indefinite Lebesgue integral, which follows from the dominated convergence
theorem ([[rem-dominated-convergence-theorem]]). The implication from 3 to
$g = F'$ almost everywhere is the Lebesgue differentiation theorem
([[rem-lebesgue-differentiation-theorem]]). The hard direction, from 1 to 2, uses
that $F \in AC$ is of bounded variation, hence differentiable almost everywhere
by [[rem-lebesgue-monotone-differentiation]], that $F' \in L^{1}$ with
$\int_a^x F' \le F(x) - F(a)$ for increasing $F$, and then a Vitali covering
argument to upgrade the inequality to equality using the $\delta$ from absolute
continuity. Every step is measure-theoretic.

**Which page it serves.** This is the natural endpoint of the fundamental
theorems of calculus page, and the reason that page's results are called the
working FTC rather than the FTC. That page proves: if $f$ is Riemann integrable
on $[a,b]$ and $F$ is any antiderivative of $f$ on $[a,b]$, then
$\int_a^b f = F(b) - F(a)$; and if $f$ is continuous then $x \mapsto \int_a^x f$
is an antiderivative. Both statements carry hypotheses that the theorem above
deletes. The library states the sharp version here so that no reader concludes
the working FTC is the last word, and so that the counterexamples on that page
(a derivative that is not Riemann integrable, the Cantor function, Volterra's
function) have a stated theorem to be counterexamples to.

**What this page's other items add.** [[rem-banach-zarecki]] characterises the
same class without mentioning an integral at all, and
[[rem-henstock-kurzweil-vs-lebesgue]] records the integral for which the
Newton-Leibniz formula holds for every everywhere-differentiable $F$, with no
integrability hypothesis on $F'$ whatsoever.
````

### `rem-riemann-integral-choice-ledger`

````markdown
---
id: rem-riemann-integral-choice-ledger
kind: remark
title: "What this page costs in choice: Riemann's criterion, the Darboux-Riemann equivalence and integrability of a monotone function are theorems of ZF; integrability of a continuous function inherits the single use of countable choice inside Heine-Cantor; and only the forward half of the Lebesgue criterion spends countable choice, once, at the countable union of null sets"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: not-applicable
deps: [thm-lebesgue-criterion, thm-countable-union-of-null-is-null, def-countable-choice, thm-riemann-criterion, thm-darboux-equals-riemann, thm-continuous-implies-integrable, thm-monotone-implies-integrable, thm-finitely-many-discontinuities-integrable, cor-countably-many-discontinuities-integrable, thm-heine-cantor-r, rem-heine-criterion-choice-cost, thm-compact-iff-sequentially-compact-r, lem-finite-choice, lem-countable-sets-are-null, thm-compact-null-is-content-zero, lem-content-zero-implies-null, thm-heine-borel-characterisation-r, lem-oscillation-superlevel-sets-are-closed, def-tagged-partition-and-riemann-sum]
justified_by: []
aliases: []
landmark: false
short: "choice ledger for the Riemann integral"
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
    - title: "Axiom of countable choice (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Axiom_of_countable_choice"
    - title: "Riemann integral (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Riemann_integral"
pipeline_run: null
---

This page develops the Riemann integral over ZF except at the points recorded
below. The only choice principle that appears anywhere on it is the Axiom of
Countable Choice ([[def-countable-choice]]); the full Axiom of Choice is never
used, and no claim is made anywhere that a use recorded here is *necessary*.

## The ledger, item by item

| item | choice used | where it enters |
|---|---|---|
| [[def-partition-and-refinement]] | none | recursion only, over a totally defined map |
| [[def-darboux-sums]] | none | suprema and infima are canonical |
| [[lem-refinement-inequalities]] | none | one induction on the coarse index |
| [[def-darboux-integral]] | none | $\sup$ and $\inf$ over a set of partitions |
| [[lem-integral-elementary-bounds]] | none | — |
| [[thm-riemann-criterion]] | none | finitely many existential instantiations |
| [[def-tagged-partition-and-riemann-sum]] | none | a tagging is exhibited by a formula |
| [[thm-darboux-equals-riemann]] | none | see the note on finite choice below |
| [[thm-continuous-implies-integrable]] | $\mathrm{AC}_\omega$, once | inherited from [[thm-heine-cantor-r]] |
| [[thm-monotone-implies-integrable]] | none | the partition is a formula in $N$ |
| [[thm-finitely-many-discontinuities-integrable]] | $\mathrm{AC}_\omega$, once | inherited from [[thm-heine-cantor-r]] |
| [[thm-lebesgue-criterion]] | $\mathrm{AC}_\omega$, once, in the forward half only | [[thm-countable-union-of-null-is-null]] |
| [[cor-countably-many-discontinuities-integrable]] | none | see below |
| [[fs-bounded-implies-riemann-integrable]] | none | — |
| [[fs-integrability-is-equivalent-to-a-nowhere-dense-discontinuity-set]] | none | refuted from the interval-cover bound directly, not through the criterion |
| [[fs-nonnegative-integrable-with-zero-integral-vanishes]] | none | rests on the corollary, which is choice-free |
| [[fs-pointwise-limit-of-riemann-integrable-is-integrable]] | $\mathrm{AC}_\omega$, once | inherited through [[thm-finitely-many-discontinuities-integrable]] |

## The four entries that are easy to get wrong

**Selecting a tag in every subinterval is not countable choice.**
[[thm-darboux-equals-riemann]] picks, for a *single fixed* partition, one point
in each of its $n$ subintervals subject to a supremum condition. That family is
listed by the index $i < n$, and a family of nonempty sets listed by a natural
number has a choice function outright, by
[[lem-finite-choice]], which is a theorem of ZF proved by induction. (That
lemma is careful to state only the listed form, since no definition of
finiteness is available where it is proved; the listed form is what is used
here.) The
temptation to read this as a choice principle comes from the phrase "for each
$i$ pick a point"; the number of picks is what matters, and it is finite.

**"For each $n$ pick a partition" would be countable choice, and the page never
does it.** Both directions of [[thm-riemann-criterion]] and the whole of
[[thm-darboux-equals-riemann]] instantiate an existential a fixed, finite number
of times, once per $\varepsilon$ under consideration; no proof on this page ever
forms a sequence of partitions indexed by $\mathbb{N}$ and reasons about it. The
one place where a sequence of sets does appear is step 7.1 of
[[thm-lebesgue-criterion]], and that is exactly where the ledger records a cost.

**Only the forward half of [[thm-lebesgue-criterion]] costs anything.** The
implication "integrable $\Rightarrow$ the discontinuity set is null" exhibits
that set as $\bigcup_k E_{1/(k+1)}$ and applies
[[thm-countable-union-of-null-is-null]], which assumes $\mathrm{AC}_\omega$ and
names its own single use. The converse, "null $\Rightarrow$ integrable", is a
theorem of ZF: [[lem-oscillation-superlevel-sets-are-closed]] and
[[thm-heine-borel-characterisation-r]] are choice-free,
[[thm-compact-null-is-content-zero]] and [[lem-content-zero-implies-null]] are
choice-free, and the partition is built by Cousin's supremum construction, which
uses the completeness of $\mathbb{R}$ and nothing else. This asymmetry is why
[[cor-countably-many-discontinuities-integrable]] appears in the table with no
cost at all: it uses the converse half only, together with
[[lem-countable-sets-are-null]], whose own statement records that no choice
principle is used there.

**Heine-Cantor is the page's other source, and it is a single use.**
[[thm-heine-cantor-r]] states that its proof invokes $\mathrm{AC}_\omega$ exactly
once, to select one bad pair of points from each of countably many nonempty sets,
and that the implication it borrows from
[[thm-compact-iff-sequentially-compact-r]] — compact implies sequentially
compact — spends nothing. So [[thm-continuous-implies-integrable]] and
[[thm-finitely-many-discontinuities-integrable]] each inherit that one use and
add none of their own. The neighbouring ledger for the same expenditure on the
continuity page is [[rem-heine-criterion-choice-cost]].

## What is deliberately not claimed

Nothing here says that $\mathrm{AC}_\omega$ is **necessary** for any of the three
theorems that use it. The independence questions for the Heine-Cantor theorem
and for the countable additivity of nullity over $\mathbb{R}$ are not settled in
this library, and no item on this page asserts anything about them. What the
table records is what the proofs on disk actually spend, and it is meant to be
checked against them rather than believed.

The one further caution is that a *later* proof of a result stated here could
spend less. The direct argument for [[thm-monotone-implies-integrable]] is kept
alongside the shorter route through
[[cor-countably-many-discontinuities-integrable]] precisely for that reason: the
direct one is elementary and quantitative, and both are choice-free, so nothing
is lost by keeping the pair.
````

### `thm-additivity-over-subintervals`

````markdown
---
id: thm-additivity-over-subintervals
kind: theorem
title: "For $a<c<b$: $f$ is integrable on $[a,b]$ if and only if it is integrable on $[a,c]$ and on $[c,b]$, and then $\\int_a^b f = \\int_a^c f + \\int_c^b f$; with the oriented form for arbitrary $a,b,c$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [lem-integrability-on-a-subinterval, def-oriented-integral, def-darboux-integral, def-darboux-sums, thm-riemann-criterion, def-partition-and-refinement, lem-finite-sum-laws, def-finite-sum, def-bounded-set, def-interval, def-ordered-field, def-complete-ordered-field]
justified_by: []
aliases: [thm-integral-additive-in-the-interval]
landmark: true
short: "additivity over subintervals"
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Riemann integral (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Riemann_integral"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 6"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, Properties of the Riemann integral"
      url: "https://www.jirka.org/ra/html/sec_rintprop.html"
    - title: "Encyclopedia of Mathematics, Integral calculus"
      url: "https://encyclopediaofmath.org/wiki/Integral_calculus"
pipeline_run: null
---

## Statement

Let $a < c < b$ be reals and let $f : [a,b] \to \mathbb{R}$ be bounded
([[def-bounded-set]]). Then:

1. $f$ is integrable on $[a,b]$ ([[def-darboux-integral]]) **if and only if** its
   restrictions to $[a,c]$ and to $[c,b]$ are integrable;
2. and in that case
   $$\int_a^b f \;=\; \int_a^c f \;+\; \int_c^b f .$$
3. **Oriented form.** Let $\alpha < \beta$ be reals, let $f : [\alpha,\beta] \to
   \mathbb{R}$ be integrable, and let $u, v, w \in [\alpha,\beta]$ be arbitrary.
   Then, with the convention of [[def-oriented-integral]],
   $$\int_u^v f \;+\; \int_v^w f \;=\; \int_u^w f .$$

Claim 3 is where [[def-oriented-integral]] earns its place: it holds for every
arrangement of the three points, including the degenerate ones, and it is the
form used everywhere below.

## Facts & Assumptions

**Given:** Reals $a < c < b$ and a bounded $f : [a,b] \to \mathbb{R}$; and, for claim 3, reals $\alpha < \beta$, an integrable $f : [\alpha,\beta] \to \mathbb{R}$ and points $u,v,w \in [\alpha,\beta]$. Let a real $\varepsilon > 0$ be given.

[L1] Riemann's criterion on any closed bounded interval with distinct endpoints ([[thm-riemann-criterion]]).

[L2] A function integrable on $[p,q]$ is integrable on every $[p',q'] \subseteq [p,q]$ with $p' < q'$ ([[lem-integrability-on-a-subinterval]]).

[L3] For a partition $R = (n,t)$ and bounded $h$: $L(h,R) = \sum_{i<n}m_i\Delta_i$, $U(h,R) = \sum_{i<n}M_i\Delta_i$, and $L(h,R) \le \underline{\int} h \le \overline{\int} h \le U(h,R)$, the integral being the common value of the two when they agree ([[def-darboux-sums]], [[def-darboux-integral]]).

[L4] A partition of $[p,q]$ is a pair $(n,t)$ with $n \ge 1$, $t_0 = p$, $t_i < t_{i+1}$ for $i < n$ and $t_k = q$ for $k \ge n$; its subintervals are $[t_i,t_{i+1}]$ for $i<n$ ([[def-partition-and-refinement]], [[def-interval]]).

[L5] Finite sums split at an intermediate index, with $\sum_{k=p}^{q-1}x_k = \sum_{j<q-p}x_{p+j}$ ([[def-finite-sum]], [[lem-finite-sum-laws]], clause 3).

[L6] With oriented limits, $\int_v^u h = -\int_u^v h$ and $\int_u^u h = 0$ ([[def-oriented-integral]]).

[L7] Ordered-field arithmetic: adding a constant preserves an inequality, the order is total and transitive, and a real of absolute value below every positive real is $0$ ([[def-ordered-field]], [[def-complete-ordered-field]]).

## Proof

**Proof technique:** direct.

1.1 **Claim 1, forward.** If $f$ is integrable on $[a,b]$ then, since $a < c$ and $c < b$, [L2] gives integrability on $[a,c]$ and on $[c,b]$. [L2]

1.2 **The splice.** Let $P_1 = (n_1,t^1)$ be a partition of $[a,c]$ and $P_2 = (n_2,t^2)$ one of $[c,b]$. Define $P := (n_1+n_2,\ t)$ by $t_i := t^1_i$ for $i \le n_1$, $t_{n_1+j} := t^2_j$ for $j \le n_2$, and $t_k := b$ for $k \ge n_1+n_2$. The two prescriptions agree at $i = n_1$, where $t^1_{n_1} = c = t^2_0$; and $t_0 = a$, $t_{n_1+n_2} = t^2_{n_2} = b$, with $t_i < t_{i+1}$ for every $i < n_1+n_2$. So $P$ is a partition of $[a,b]$. [L4, construct]

1.3 **Claim 1, converse.** Suppose $f$ is integrable on $[a,c]$ and on $[c,b]$, and use [L1] on each to fix $P_1$ with $U(f,P_1)-L(f,P_1) < \varepsilon\cdot 2^{-1}$ and $P_2$ with $U(f,P_2)-L(f,P_2) < \varepsilon\cdot 2^{-1}$. [L1, choose]

2.1 The first $n_1$ subintervals of $P$ are those of $P_1$ and the last $n_2$ are those of $P_2$, with the matching lengths, so by [L3] and the splitting law [L5], $L(f,P) = L(f,P_1) + L(f,P_2)$ and $U(f,P) = U(f,P_1) + U(f,P_2)$. [step 1.2, L3, L4, L5]

3.1 For the splice $P$ of those two, step 2.1 gives $U(f,P) - L(f,P) < \varepsilon$; as $\varepsilon > 0$ was arbitrary and $f$ is bounded, [L1] makes $f$ integrable on $[a,b]$. [step 1.2, step 2.1, step 1.3, L1, L7]

4.1 **Claim 2.** With $P_1$, $P_2$ and $P$ as above, [L3] puts $\int_a^b f$ between $L(f,P)$ and $U(f,P)$, that is between $L(f,P_1)+L(f,P_2)$ and $U(f,P_1)+U(f,P_2)$ by step 2.1; and [L3] applied on $[a,c]$ and on $[c,b]$ puts $\int_a^c f + \int_c^b f$ between the same two numbers. [step 2.1, step 1.3, step 3.1, L3]

5.1 Those two numbers differ by less than $\varepsilon$ by step 1.3, so $\bigl|\int_a^b f - \int_a^c f - \int_c^b f\bigr| < \varepsilon$; as $\varepsilon > 0$ was arbitrary the difference is $0$, which is claim 2. [step 1.3, step 4.1, L7]

6.1 **Claim 3, first the sorted case.** Let $x \le y$ in $[\alpha,\beta]$. Then $\int_\alpha^y f = \int_\alpha^x f + \int_x^y f$. Indeed if $\alpha < x < y$ this is claim 2 applied on $[\alpha,y]$, where $f$ is integrable by [L2]; if $x = \alpha$ the middle term is $0$ by [L6] and the identity is trivial; and if $x = y$ the last term is $0$ by [L6] and the identity is again trivial. [step 5.1, L2, L6]

7.1 Put $F(x) := \int_\alpha^x f$ for $x \in [\alpha,\beta]$, which is defined by [L2] and [L6]. Then $\int_x^y f = F(y) - F(x)$ for **all** $x,y \in [\alpha,\beta]$: for $x < y$ this is step 6.1 rearranged; for $x = y$ both sides are $0$ by [L6]; and for $x > y$ the case already proved gives $\int_y^x f = F(x)-F(y)$, and [L6] negates both sides. [step 6.1, L2, L6, construct]

8.1 **Claim 3.** For arbitrary $u,v,w \in [\alpha,\beta]$, step 7.1 gives $\int_u^v f + \int_v^w f = \bigl(F(v)-F(u)\bigr) + \bigl(F(w)-F(v)\bigr) = F(w)-F(u) = \int_u^w f$. [step 7.1, algebra] ∎

## Remarks

- **The oriented form is not proved by listing six orderings.** Step 7.1 shows that the oriented integral between two points is a *difference of values of one function of one variable*, after which claim 3 is the cancellation $(F(v)-F(u))+(F(w)-F(v)) = F(w)-F(u)$, valid however the three points are arranged and however many of them coincide. The case analysis is confined to the two lines of step 7.1, and no appeal to symmetry is made anywhere.

- **The function $F$ of step 7.1 is the integral function**, and it is given its own item, [[def-the-integral-function]], because the rest of the page is about it. Nothing there re-proves step 7.1; it cites this theorem.

- **Boundedness on the whole of $[a,b]$ is a hypothesis of claim 1 in both directions.** Boundedness on $[a,c]$ and on $[c,b]$ separately does give boundedness on the union, so the converse could be stated with the hypothesis split; it is stated globally because [[def-darboux-sums]] needs it globally to make $U(f,P)$ meaningful for a partition of $[a,b]$.
````

### `thm-composition-with-a-continuous-function`

````markdown
---
id: thm-composition-with-a-continuous-function
kind: theorem
title: "If $f$ is integrable on $[a,b]$ with values in $[m,M]$ and $\\varphi$ is continuous on $[m,M]$, then $\\varphi \\circ f$ is integrable"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-riemann-criterion, def-darboux-sums, def-darboux-integral, def-partition-and-refinement, def-continuity-real, thm-heine-cantor-r, cor-boundedness-theorem-r, def-uniform-continuity-real, thm-heine-borel-r, def-open-cover-r, lem-finite-sum-laws, def-finite-sum, def-oscillation, def-bounded-set, def-interval, def-ordered-field, def-complete-ordered-field, lem-of-abs-value, thm-of-archimedean, cor-archimedean-reciprocal]
forward_refs: [cex-a-composition-of-integrable-functions-that-is-not-integrable]
justified_by: []
aliases: [thm-continuous-after-integrable]
landmark: true
short: "continuous after integrable is integrable"
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
    - title: "Riemann integral (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Riemann_integral"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 6"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "Springer article on compositions of Riemann-integrable functions"
      url: "https://link.springer.com/article/10.1007/s00591-022-00318-x"
pipeline_run: null
---

## Statement

Let $a < b$ and $m \le M$ be reals, let $f : [a,b] \to \mathbb{R}$ be integrable
([[def-darboux-integral]]) with

$$m \;\le\; f(x) \;\le\; M \qquad \text{for every } x \in [a,b],$$

and let $\varphi : [m,M] \to \mathbb{R}$ be continuous on $[m,M]$
([[def-continuity-real]]). Then the composite
$\varphi \circ f : [a,b] \to \mathbb{R}$ is integrable on $[a,b]$.

**The order of the hypotheses is the whole content, and it does not reverse.**
What is assumed is *continuous after integrable*: the outer function is the
continuous one. Weakening the outer function to a merely integrable $\varphi$
makes the statement **false**, and the witness is on the companion page. The
remaining variant — $\varphi$ merely integrable with $f$ *continuous* — is
neither proved nor refuted anywhere on this page, and the companion page's
witness does not bear on it, its inner function being discontinuous at every
rational. Nothing here asserts anything about that variant.

## Facts & Assumptions

**Given:** Reals $a < b$ and $m \le M$, an integrable $f : [a,b] \to \mathbb{R}$ with values in $[m,M]$, a continuous $\varphi : [m,M] \to \mathbb{R}$, and a real $\varepsilon > 0$. Write $h := \varphi \circ f$.

[L1] Riemann's criterion: a bounded $u$ on $[a,b]$ is integrable if and only if for every real $\eta > 0$ there is a partition $P$ with $U(u,P) - L(u,P) < \eta$ ([[thm-riemann-criterion]], [[def-darboux-integral]]).

[L2] For a partition $P = (n,t)$ of $[a,b]$ and bounded $u$: $U(u,P) - L(u,P) = \sum_{i<n}\bigl(M_i(u) - m_i(u)\bigr)\Delta_i$ with $\Delta_i > 0$ and $\sum_{i<n}\Delta_i = b - a$, and $M_i(u) - m_i(u) = \omega_u(I_i) = \sup\{\,|u(x)-u(y)| : x,y \in I_i\,\}$ ([[def-darboux-sums]], [[def-oscillation]], [[def-partition-and-refinement]], [[def-finite-sum]], [[lem-finite-sum-laws]]).

[L3] $[m,M]$ with $m \le M$ and $[a,b]$ are closed bounded intervals, hence compact ([[thm-heine-borel-r]], [[def-open-cover-r]], [[def-interval]]).

[L4] A continuous real function on a compact subset of $\mathbb{R}$ is bounded there ([[cor-boundedness-theorem-r]], [[def-bounded-set]]).

[L5] Heine-Cantor: a continuous real function on a compact $K \subseteq \mathbb{R}$ is uniformly continuous on $K$, so for every real $\eta > 0$ there is a real $\delta_0 > 0$ with $|\varphi(s)-\varphi(t)| < \eta$ for all $s,t \in K$ with $|s-t| < \delta_0$ ([[thm-heine-cantor-r]], [[def-uniform-continuity-real]]).

[L6] Finite sums: additivity, scaling and monotonicity in the terms ([[def-finite-sum]], [[lem-finite-sum-laws]], clauses 1, 2 and 4).

[L7] Ordered-field arithmetic and the absolute value: multiplying an inequality by a nonnegative quantity and adding constants preserve it, the order is total and transitive, a positive real has a positive inverse, and $|u| \le c$ follows from $-c \le u \le c$ ([[def-ordered-field]], [[def-complete-ordered-field]], [[lem-of-abs-value]]). The nonstrict forms follow from the strict ones by adjoining the case of equality.

[L8] For every real $\eta > 0$ there is a real $\eta' > 0$ with $\eta' < \eta$, for instance $\eta' = \eta \cdot 2^{-1}$; and the Archimedean property in reciprocal form ([[cor-archimedean-reciprocal]], [[thm-of-archimedean]]).

## Proof

**Proof technique:** direct.

1.1 $[m,M]$ is compact, so $\varphi$ is bounded there: fix a real $K \ge 0$ with $|\varphi(s)| \le K$ for every $s \in [m,M]$. Hence $|h(x)| \le K$ for every $x \in [a,b]$ and $h$ is bounded. [given, L3, L4, choose]

1.2 By [L5] applied on the compact $[m,M]$ with $\eta := \varepsilon$, fix a real $\delta_0 > 0$ with $|\varphi(s)-\varphi(t)| < \varepsilon$ whenever $s,t \in [m,M]$ and $|s-t| < \delta_0$; then put $\delta := \min\{\delta_0 \cdot 2^{-1},\ \varepsilon \cdot 2^{-1}\}$, a positive real with $\delta < \delta_0$ and $\delta < \varepsilon$. [given, L3, L5, L7, L8, choose]

2.1 So $|\varphi(s)-\varphi(t)| \le \varepsilon$ whenever $s,t \in [m,M]$ satisfy $|s-t| \le \delta$, since $\delta < \delta_0$. [step 1.2, L7]

2.2 Since $\delta > 0$, so is $\delta^{2}$, and [L1] supplies a partition $P = (n,t)$ of $[a,b]$ with $U(f,P) - L(f,P) < \delta^{2}$. [step 1.2, given, L1, L7, choose]

3.1 Fix $i < n$ and write $\Omega_i := M_i(f) - m_i(f) \ge 0$. If $\Omega_i \le \delta$ then any $x,y \in I_i$ have $|f(x)-f(y)| \le \Omega_i \le \delta$ with $f(x),f(y) \in [m,M]$, so $|h(x)-h(y)| \le \varepsilon$ by step 2.1, whence $M_i(h) - m_i(h) \le \varepsilon$ by [L2]. [step 2.1, step 2.2, L2, L7]

3.2 If instead $\Omega_i > \delta$ then $\Omega_i/\delta > 1$, while $M_i(h) - m_i(h) \le 2K$ always, by [L2] and step 1.1. [step 1.1, step 2.2, L2, L7]

4.1 In both cases $\bigl(M_i(h)-m_i(h)\bigr)\Delta_i \le \varepsilon\,\Delta_i + \bigl(2K/\delta\bigr)\Omega_i\Delta_i$: in the first case the second summand is nonnegative and the first alone dominates, and in the second case $(2K/\delta)\Omega_i\Delta_i \ge 2K\Delta_i$ dominates by itself. [step 3.1, step 3.2, L7]

5.1 Summing over $i < n$ with [L6] and using $\sum_{i<n}\Delta_i = b-a$ and [L2] gives $U(h,P)-L(h,P) \le \varepsilon(b-a) + (2K/\delta)\bigl(U(f,P)-L(f,P)\bigr)$. [step 4.1, L2, L6, L7]

6.1 By step 2.2 the second summand is below $(2K/\delta)\delta^{2} = 2K\delta$, and $\delta < \varepsilon$ by step 1.2, so $U(h,P)-L(h,P) < \varepsilon\,(b-a+2K)$. [step 2.2, step 5.1, L7]

7.1 Let a real $\eta > 0$ be given. Running steps 1.2 to 6.1 with $\varepsilon := \eta/(b-a+2K+1)$, a positive real since $b-a+2K+1 > 0$, produces a partition $P$ with $U(h,P)-L(h,P) < \eta\,(b-a+2K)/(b-a+2K+1) < \eta$. [step 6.1, L7, L8]

8.1 As $\eta > 0$ was arbitrary and $h$ is bounded by step 1.1, [L1] makes $h = \varphi\circ f$ integrable on $[a,b]$. [step 1.1, step 7.1, L1] ∎

## Remarks

- **Step 4.1 is what replaces the usual split of the index range.** The classical proof separates the indices into a good set $G$ and a bad set $B$ and sums over each; the finite-sum toolkit used here is that of [[lem-finite-sum-laws]], stated for $\sum_{i<n}$ and carrying no clause that splits a range into a subset and its complement, so the split is carried instead by a single inequality valid at *every* index, whose two summands are exactly the two contributions. The bound obtained is the same one.

- **The hypothesis $f[\,[a,b]\,] \subseteq [m,M]$ is what makes $\varphi\circ f$ defined at all**, and $m,M$ exist because an integrable $f$ is bounded ([[def-darboux-sums]]). Taking $[m,M]$ to be any interval containing the range of $f$ is legitimate and changes nothing, since a continuous function on a larger compact interval restricts to a continuous one.

- **What the theorem does not say.** It does not say that $\varphi\circ f$ is integrable when $\varphi$ is merely integrable, and it does not say that $\int_a^b \varphi\circ f$ can be computed from $\int_a^b f$. The first is refuted on the companion page. For the second, take $\varphi(t) = t^{2}$ on $[0,1]$ with $f$ the constant $1/2$ and with $g$ the indicator of $[0,1/2]$: both are integrable with integral $1/2$, while $\int_0^1 \varphi\circ f = 1/4$ and $\int_0^1 \varphi\circ g = 1/2$, so $\int_a^b \varphi\circ f$ is not a function of $\int_a^b f$.

- **Forward reference, orientation only.** The reversal refuted on the companion page is [[cex-a-composition-of-integrable-functions-that-is-not-integrable]]; nothing above depends on it.
````

### `thm-continuous-implies-integrable`

````markdown
---
id: thm-continuous-implies-integrable
kind: theorem
title: "A continuous function on $[a,b]$ is Riemann integrable, by Heine-Cantor and Riemann's criterion"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-riemann-criterion, thm-heine-cantor-r, def-uniform-continuity-real, thm-heine-borel-characterisation-r, def-open-cover-r, def-open-and-closed-in-r, def-continuity-real, cor-boundedness-theorem-r, def-partition-and-refinement, def-darboux-sums, def-darboux-integral, lem-finite-sum-laws, def-finite-sum, cor-archimedean-reciprocal, thm-of-archimedean, def-canonical-natural, lem-of-naturals-positive, def-interval, def-bounded-set, lem-of-abs-value, def-complete-ordered-field, def-ordered-field, lem-of-add-order, lem-of-sign-rules]
justified_by: []
aliases: []
landmark: true
short: "continuous $\\Rightarrow$ integrable"
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
    - title: "Riemann integral (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Riemann_integral"
    - title: "Heine-Cantor theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Heine%E2%80%93Cantor_theorem"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 6"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, The Riemann Integral"
      url: "https://www.jirka.org/ra/html/sec_rint.html"
    - title: "J. Hunter, Chapter 11: The Riemann Integral"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/ch11.pdf"
pipeline_run: null
---

## Statement

Let $a < b$ be reals and let $f : [a,b] \to \mathbb{R}$ be continuous on $[a,b]$
([[def-continuity-real]]). Then $f$ is bounded ([[def-bounded-set]]) and Riemann
integrable on $[a,b]$ ([[def-darboux-integral]]).

**The proof gives more than integrability: it gives a partition that works.** For
every real $\varepsilon > 0$ the uniform partition into $N$ parts already
satisfies $U(f,P) - L(f,P) < \varepsilon$, as soon as $N$ is large enough that
$(b-a)/\iota(N)$ is below the $\delta$ that uniform continuity supplies for
$\varepsilon/\bigl(2(b-a)\bigr)$. Uniform continuity is exactly what makes one
$\delta$ serve all $N$ subintervals at once, and it is the only place where the
compactness of $[a,b]$ is used.

## Facts & Assumptions

**Given:** Reals $a < b$ and a function $f : [a,b] \to \mathbb{R}$ continuous on $[a,b]$.

[L1] $[a,b]$ is closed and bounded, hence compact ([[def-interval]], [[def-open-and-closed-in-r]], [[def-bounded-set]], [[thm-heine-borel-characterisation-r]], [[def-open-cover-r]]).

[L2] A continuous real function on a compact subset of $\mathbb{R}$ is bounded there ([[cor-boundedness-theorem-r]]).

[L3] Heine-Cantor: a continuous real function on a compact subset $K$ of $\mathbb{R}$ is uniformly continuous on $K$, that is, for every real $\eta > 0$ there is a real $\delta > 0$ with $|f(x) - f(y)| < \eta$ for all $x, y \in K$ with $|x - y| < \delta$ ([[thm-heine-cantor-r]], [[def-uniform-continuity-real]]).

[L4] For a partition $P = (n,t)$ of $[a,b]$: $\Delta_i = t_{i+1} - t_i > 0$, $\sum_{i<n}\Delta_i = b-a$, and the uniform partition $U_N$ into $N \ge 1$ parts has every $\Delta_i$ equal to $(b-a)/\iota(N)$ ([[def-partition-and-refinement]]).

[L5] $U(f,P) - L(f,P) = \sum_{i<n}(M_i - m_i)\Delta_i$ and $M_i - m_i = \sup\{|f(x)-f(y)| : x, y \in I_i\}$ for bounded $f$ ([[def-darboux-sums]], [[lem-finite-sum-laws]]).

[L6] Riemann's criterion: a bounded $f$ is integrable if and only if for every real $\varepsilon > 0$ there is a partition $P$ with $U(f,P) - L(f,P) < \varepsilon$ ([[thm-riemann-criterion]]).

[L7] For every real $\eta > 0$ there is a natural $N \ge 1$ with $1/\iota(N) < \eta$, and $\iota(N) > 0$ for $N \ge 1$ ([[cor-archimedean-reciprocal]], [[thm-of-archimedean]], [[def-canonical-natural]], [[lem-of-naturals-positive]]).

[L8] Finite sums: scaling and monotonicity in the terms ([[def-finite-sum]], [[lem-finite-sum-laws]]).

[L9] Ordered-field arithmetic and the absolute value: adding a constant and multiplying by a positive quantity preserve an inequality; the order is total and transitive; $x, y \in [c,d]$ gives $|x - y| \le d - c$ ([[lem-of-abs-value]], [[lem-of-add-order]], [[lem-of-sign-rules]], [[def-ordered-field]], [[def-complete-ordered-field]], [[def-interval]]). These order-arithmetic facts are stated by their sources for the strict order only; the nonstrict forms used below follow by adjoining the equality case, in which the two sides coincide.

## Proof

**Proof technique:** direct.

1.1 $[a,b]$ is compact by [L1], so $f$ is bounded on $[a,b]$ by [L2] and its Darboux sums and integrals are defined. [given, L1, L2]

1.2 Let a real $\varepsilon > 0$ be given and put $\eta := \varepsilon \cdot \bigl(2(b-a)\bigr)^{-1}$, a positive real by [L9] since $b - a > 0$. [given, L9]

2.1 By [L3] applied to the compact set $[a,b]$ with this $\eta$, fix a real $\delta > 0$ such that $|f(x) - f(y)| < \eta$ for all $x, y \in [a,b]$ with $|x - y| < \delta$. [step 1.1, step 1.2, L1, L3, choose]

3.1 By [L7] fix a natural $N \ge 1$ with $1/\iota(N) < \delta \cdot (b-a)^{-1}$, and put $P := U_N = (N,t)$, the uniform partition of $[a,b]$ into $N$ parts. Then every $\Delta_i$ equals $(b-a)/\iota(N) < \delta$ by [L4] and [L9]. [step 2.1, L4, L7, L9, choose]

4.1 For each $i < N$ and all $x, y \in I_i = [t_i, t_{i+1}]$ one has $|x-y| \le \Delta_i < \delta$ by [L9], hence $|f(x) - f(y)| < \eta$ by step 2.1. So $\eta$ is an upper bound of the set $\{|f(x)-f(y)| : x,y \in I_i\}$, and therefore $M_i - m_i \le \eta$ by [L5]. [step 2.1, step 3.1, L5, L9]

5.1 Consequently $U(f,P) - L(f,P) = \sum_{i<N}(M_i - m_i)\Delta_i \le \sum_{i<N}\eta\,\Delta_i = \eta\,(b-a) = \varepsilon \cdot 2^{-1} < \varepsilon$, using [L5], step 4.1, $\Delta_i > 0$, [L8], [L4] and [L9]. [step 4.1, L4, L5, L8, L9]

6.1 Since the real $\varepsilon > 0$ of step 1.2 was arbitrary and step 5.1 produced a partition with $U(f,P) - L(f,P) < \varepsilon$, criterion [L6] applies and $f$ is Riemann integrable on $[a,b]$; it is bounded by step 1.1. [step 1.1, step 1.2, step 5.1, L6] ∎

## Remarks

- **Continuity is sufficient and very far from necessary.** A monotone function may have infinitely many discontinuities and is still integrable ([[thm-monotone-implies-integrable]]); Thomae's function is discontinuous at every rational and integrable ([[cor-countably-many-discontinuities-integrable]]); and the indicator of the Cantor set is discontinuous at uncountably many points and integrable. The exact frontier is [[thm-lebesgue-criterion]].

- **Where compactness enters, and what it buys.** Only through [L1], and then twice: [[cor-boundedness-theorem-r]] to know that the Darboux sums exist at all, and [[thm-heine-cantor-r]] to get one $\delta$ for the whole interval. On a non-compact interval both can fail: $x \mapsto 1/x$ is continuous on $(0,1)$ and unbounded there, so it has no Darboux sums at all.

- **The choice cost is inherited, not incurred.** Nothing in the proof above selects anything from an infinite family; the single use of countable choice behind this theorem sits inside [[thm-heine-cantor-r]], which names it in its own statement. See [[rem-riemann-integral-choice-ledger]].
````

### `thm-darboux-equals-riemann`

````markdown
---
id: thm-darboux-equals-riemann
kind: theorem
title: "The Darboux and Riemann definitions agree: a bounded $f$ on $[a,b]$ is Darboux integrable with integral $I$ if and only if for every real $\\varepsilon > 0$ there is a real $\\delta > 0$ such that $|S(f,P,\\xi) - I| < \\varepsilon$ for every tagged partition of mesh below $\\delta$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-partition-and-refinement, def-darboux-sums, def-darboux-integral, def-tagged-partition-and-riemann-sum, thm-riemann-criterion, lem-refinement-inequalities, lem-sup-epsilon, lem-inf-epsilon, lem-finite-sum-laws, def-finite-sum, def-bounded-set, cor-archimedean-reciprocal, thm-of-archimedean, def-canonical-natural, lem-of-naturals-positive, lem-finite-choice, def-choice-function, lem-of-abs-value, def-interval, def-complete-ordered-field, def-ordered-field, lem-of-add-order, lem-of-sign-rules, cor-of-one-positive]
justified_by: []
aliases: [thm-riemann-and-darboux-integrals-agree]
landmark: true
short: "Darboux $=$ Riemann"
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
    - title: "Darboux integral (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Darboux_integral"
    - title: "Riemann integral (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Riemann_integral"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 6"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Hunter, Chapter 11: The Riemann Integral"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/ch11.pdf"
pipeline_run: null
---

## Statement

Let $a < b$ be reals, let $f : [a,b] \to \mathbb{R}$ be bounded
([[def-bounded-set]]) and let $I \in \mathbb{R}$. The following are equivalent.

1. **(Darboux)** $f$ is Darboux integrable on $[a,b]$ with
   $\int_a^b f = I$ ([[def-darboux-integral]]).
2. **(Riemann)** For every real $\varepsilon > 0$ there is a real $\delta > 0$
   such that
   $$\bigl|\,S(f,P,\xi) - I\,\bigr| \;<\; \varepsilon$$
   for **every** tagged partition $(P,\xi)$ of $[a,b]$ with $\|P\| < \delta$
   ([[def-tagged-partition-and-riemann-sum]], [[def-partition-and-refinement]]).

**The quantifier over tagged partitions is universal, and that is the content.**
Condition 2 constrains every tagged partition of small mesh at once, tags
included; it is not a statement about one sequence of tagged partitions, and it
cannot be weakened to one. The companion page of this pair exhibits a
non-integrable function whose Riemann sums are constant along such a sequence.

**Boundedness is a hypothesis of both conditions as stated here.** Condition 1
presupposes it, since the Darboux sums of an unbounded function do not exist
([[def-darboux-sums]]); condition 2 makes sense for unbounded $f$ as well, and
in fact implies boundedness, but that implication is not proved here and is not
used: every application on this page starts from a bounded $f$.

## Facts & Assumptions

**Given:** Reals $a < b$, a bounded $f : [a,b] \to \mathbb{R}$, a real $M \ge 0$ with $|f(x)| \le M$ for every $x \in [a,b]$, and a real $I$. Put $M_{+} := M + 1$, so $M_{+} > 0$ and $|f(x)| \le M_{+}$ for every $x$.

[L1] For a partition $P = (n,t)$ of $[a,b]$: $n \ge 1$, the subintervals $I_i = [t_i,t_{i+1}]$ are nonempty, $\Delta_i = t_{i+1} - t_i > 0$, $\sum_{i<n}\Delta_i = b-a$, and $\|P\| = \max\{\Delta_i : i < n\}$. The uniform partition $U_N$ into $N \ge 1$ parts has $\|U_N\| = (b-a)/\iota(N)$. The common refinement $P \vee P_0$ refines both, and $n_{P \vee P_0} \le n_P + n_{P_0} - 1$ ([[def-partition-and-refinement]], [[def-interval]]).

[L2] $L(f,P) = \sum_{i<n}m_i\Delta_i$ and $U(f,P) = \sum_{i<n}M_i\Delta_i$ with $m_i = \inf f[I_i]$ and $M_i = \sup f[I_i]$; $L(f,P) \le \underline{\int_a^b} f \le \overline{\int_a^b} f \le U(f,P)$; $f$ is integrable exactly when the two integrals coincide, and then $\int_a^b f$ is their common value ([[def-darboux-sums]], [[def-darboux-integral]]).

[L3] $S(f,P,\xi) = \sum_{i<n}f(\xi_i)\Delta_i$ for a tagging $\xi$ of $P$, and $L(f,P) \le S(f,P,\xi) \le U(f,P)$ when $f$ is bounded ([[def-tagged-partition-and-riemann-sum]]).

[L4] Riemann's criterion: a bounded $f$ is integrable if and only if for every real $\varepsilon > 0$ there is a partition $P$ with $U(f,P) - L(f,P) < \varepsilon$ ([[thm-riemann-criterion]]).

[L5] If $P'$ refines $P$ then $L(f,P) \le L(f,P')$, $U(f,P') \le U(f,P)$, and moreover $U(f,P) - U(f,P') \le 2M_{+}\,\iota(n'-n)\,\|P\|$ and $L(f,P') - L(f,P) \le 2M_{+}\,\iota(n'-n)\,\|P\|$ ([[lem-refinement-inequalities]]).

[L6] $\varepsilon$-characterisations: if $u = \sup S$ with $S$ nonempty then for every real $\eta > 0$ there is $s \in S$ with $s > u - \eta$; dually for the infimum ([[lem-sup-epsilon]], [[lem-inf-epsilon]]).

[L7] A family of nonempty sets **indexed by a natural number** $n$ has a choice function, and this is a theorem of ZF; the family used below is indexed by $i < n$, which is exactly that listed form. [[lem-finite-choice]] states it in that form and expressly declines to identify it with "every finite family of nonempty sets has a choice function", no definition of finiteness being available where it is proved ([[lem-finite-choice]], [[def-choice-function]]).

[L8] For every real $\eta > 0$ there is a natural $N \ge 1$ with $1/\iota(N) < \eta$; $\iota$ is nonnegative, additive and nondecreasing on $\mathbb{N}$, and $\iota(N) > 0$ for $N \ge 1$ ([[cor-archimedean-reciprocal]], [[thm-of-archimedean]], [[def-canonical-natural]], [[lem-of-naturals-positive]]).

[L9] Finite sums: additivity, scaling, monotonicity in the terms ([[def-finite-sum]], [[lem-finite-sum-laws]]).

[L10] Ordered-field arithmetic and the absolute value: adding a constant and multiplying by a positive quantity preserve an inequality; the order is total and transitive; $|x| < c$ exactly when $-c < x < c$ for $c > 0$ ([[lem-of-abs-value]], [[lem-of-add-order]], [[lem-of-sign-rules]], [[cor-of-one-positive]], [[def-ordered-field]], [[def-complete-ordered-field]]). These order-arithmetic facts are stated by their sources for the strict order only; the nonstrict forms used below follow by adjoining the equality case, in which the two sides coincide.

## Proof

**Proof technique:** direct.

1.1 **Condition 2 implies condition 1.** Assume condition 2 and let a real $\varepsilon > 0$ be given. Fix $\delta > 0$ as in condition 2 for this $\varepsilon$, and put $\theta := \varepsilon/(b-a) > 0$ by [L10]. [given, L10, choose]

1.2 **Condition 1 implies condition 2; this half of the proof is steps 1.2, 2.2, 2.3, 3.3, 4.2, 5.2 and 6.2, and its symbols are its own.** Assume $f$ is integrable with $\int_a^b f = I$ and let a real $\eta > 0$ be given. By [L4] fix a partition $P_0 = (n_0, t^0)$ with $U(f,P_0) - L(f,P_0) < \eta \cdot 2^{-1}$. [given, L4, L10, choose]

2.1 A partition of mesh below $\delta$ exists: by [L8] fix $N \ge 1$ with $1/\iota(N) < \delta/(b-a)$ and take $P := U_N$, so $\|P\| = (b-a)/\iota(N) < \delta$ by [L1] and [L10]. Write $P = (n,t)$. [step 1.1, L1, L8, L10, choose]

2.2 By [L2] and integrability, $L(f,P_0) \le \underline{\int_a^b} f = I = \overline{\int_a^b} f \le U(f,P_0)$. Hence $U(f,P_0) - I \le U(f,P_0) - L(f,P_0) < \eta \cdot 2^{-1}$ and $I - L(f,P_0) \le U(f,P_0) - L(f,P_0) < \eta \cdot 2^{-1}$, that is $U(f,P_0) < I + \eta \cdot 2^{-1}$ and $L(f,P_0) > I - \eta \cdot 2^{-1}$. [step 1.2, L2, L10]

2.3 Put $\delta_0 := \eta \cdot \bigl(8\,M_{+}\,\iota(n_0)\bigr)^{-1}$, a positive real since $M_{+} > 0$ and $\iota(n_0) > 0$ by [L8] and $n_0 \ge 1$ by [L1]. [step 1.2, L1, L8, L10, construct]

3.1 For each $i < n$ the set $X_i := \{\, x \in I_i : f(x) > M_i - \theta \,\}$ is nonempty by [L6], since $M_i = \sup f[I_i]$ and $f[I_i]$ is nonempty by [L1]. By [L7] the finite family $\{X_i : i < n\}$ has a choice function $g$; put $\xi_i := g(X_i)$ for $i < n$ and $\xi_k := b$ for $k \ge n$, a tagging of $P$. [step 2.1, L1, L2, L6, L7, choose]

3.2 Likewise the sets $Y_i := \{\, x \in I_i : f(x) < m_i + \theta \,\}$ are nonempty by [L6], and [L7] supplies a tagging $\zeta$ of $P$ with $\zeta_i \in Y_i$ for $i < n$. [step 2.1, L1, L2, L6, L7, choose]

3.3 Let $(Q,\upsilon)$ be any tagged partition of $[a,b]$ with $\|Q\| < \delta_0$, and write $Q = (n_Q,u)$ and $R := Q \vee P_0$, with $R = (n_R, r)$. By [L1], $R$ refines both $Q$ and $P_0$, and $n_R - n_Q \le n_0 - 1$, so $\iota(n_R - n_Q) \le \iota(n_0)$ by [L8]. [step 2.3, L1, L8, given]

4.1 $S(f,P,\xi) \ge U(f,P) - \varepsilon$: by step 3.1, $f(\xi_i) \ge M_i - \theta$ for $i < n$, so multiplying by $\Delta_i > 0$ and summing gives $S(f,P,\xi) \ge \sum_{i<n}(M_i - \theta)\Delta_i = U(f,P) - \theta\sum_{i<n}\Delta_i = U(f,P) - \theta(b-a) = U(f,P) - \varepsilon$, by [L9], [L1] and [L3]. Symmetrically $S(f,P,\zeta) \le L(f,P) + \varepsilon$. [step 3.1, step 3.2, L1, L3, L9, L10]

4.2 By [L5] applied to the refinement $R$ of $Q$, $U(f,Q) - U(f,R) \le 2M_{+}\iota(n_R-n_Q)\|Q\| \le 2M_{+}\iota(n_0)\delta_0 = \eta \cdot 4^{-1}$, and likewise $L(f,R) - L(f,Q) \le \eta \cdot 4^{-1}$. [step 2.3, step 3.3, L5, L8, L10]

5.1 By condition 2 both $|S(f,P,\xi) - I| < \varepsilon$ and $|S(f,P,\zeta) - I| < \varepsilon$, since $\|P\| < \delta$. Hence $U(f,P) \le S(f,P,\xi) + \varepsilon < I + 2\varepsilon$ and $L(f,P) \ge S(f,P,\zeta) - \varepsilon > I - 2\varepsilon$, by step 4.1 and [L10]. [step 1.1, step 2.1, step 4.1, L10]

5.2 By [L5] applied to the refinement $R$ of $P_0$, $U(f,R) \le U(f,P_0)$ and $L(f,R) \ge L(f,P_0)$. Combining with step 4.2 and step 2.2: $U(f,Q) \le U(f,R) + \eta \cdot 4^{-1} \le U(f,P_0) + \eta \cdot 4^{-1} < I + \eta \cdot 2^{-1} + \eta \cdot 4^{-1}$, and symmetrically $L(f,Q) > I - \eta \cdot 2^{-1} - \eta \cdot 4^{-1}$. [step 2.2, step 3.3, step 4.2, L5, L10]

6.1 By [L2], $\overline{\int_a^b} f \le U(f,P) < I + 2\varepsilon$ and $\underline{\int_a^b} f \ge L(f,P) > I - 2\varepsilon$, and since $\underline{\int_a^b} f \le \overline{\int_a^b} f$ by [L2], both integrals lie strictly between $I - 2\varepsilon$ and $I + 2\varepsilon$; in particular $\bigl|\overline{\int_a^b} f - I\bigr| \le 2\varepsilon$ and $\bigl|\underline{\int_a^b} f - I\bigr| \le 2\varepsilon$. [step 5.1, L2, L10]

6.2 By [L3], $L(f,Q) \le S(f,Q,\upsilon) \le U(f,Q)$, so step 5.2 gives $I - \eta \cdot 2^{-1} - \eta \cdot 4^{-1} < S(f,Q,\upsilon) < I + \eta \cdot 2^{-1} + \eta \cdot 4^{-1}$, whence $|S(f,Q,\upsilon) - I| < \eta \cdot 2^{-1} + \eta \cdot 4^{-1} < \eta$ by [L10]. Since $(Q,\upsilon)$ was an arbitrary tagged partition of mesh below $\delta_0$, condition 2 holds with this $\delta_0$. [step 5.2, L3, L10]

7.1 Step 6.1 holds for **every** real $\varepsilon > 0$. If $\overline{\int_a^b} f \ne I$, taking $\varepsilon := \bigl|\overline{\int_a^b} f - I\bigr| \cdot 4^{-1} > 0$ would give $\bigl|\overline{\int_a^b} f - I\bigr| \le \bigl|\overline{\int_a^b} f - I\bigr| \cdot 2^{-1}$, which is false for a positive quantity; so $\overline{\int_a^b} f = I$, and the same argument gives $\underline{\int_a^b} f = I$. Hence $f$ is integrable with $\int_a^b f = I$ by [L2], which is condition 1. [step 6.1, L2, L10]

8.1 Steps 1.1, 2.1, 3.1, 3.2, 4.1, 5.1, 6.1 and 7.1 prove that condition 2 implies condition 1; steps 1.2, 2.2, 2.3, 3.3, 4.2, 5.2 and 6.2 prove the converse. The two halves share no symbol, the first working with $\varepsilon, \delta, P, \xi, \zeta, \theta$ and the second with $\eta, \delta_0, P_0, Q, \upsilon, R$, and together they give the stated equivalence. [step 7.1, step 6.2] ∎

## Remarks

- **What the Riemann condition costs in choice: nothing beyond ZF.** The only selection made anywhere above is in steps 3.1 and 3.2, where a tag is picked in each of the $n$ subintervals of one fixed partition. That family is listed by the index $i < n$, and a family of nonempty sets listed by a natural number has a choice function outright ([[lem-finite-choice]]), with no appeal to any choice axiom. Every other existential in the proof is instantiated once. This is recorded in [[rem-riemann-integral-choice-ledger]].

- **Why the mesh of the coarse partition is the right quantity.** Step 4.2 is the only place where the mesh hypothesis is spent, and it is spent through the quantitative clause of [[lem-refinement-inequalities]]. The symbols there are those of the second half: adding the at most $n_0 - 1$ interior points of $P_0$ to the arbitrary partition $Q$ can change each Darboux sum by at most $2M_{+}$ times the total length of the affected subintervals, and each of those has length below $\delta_0$, the mesh bound imposed on $Q$. The number $n_0$ is fixed **before** $\delta_0$ is chosen, in step 1.2 against step 2.3, which is why the argument is not circular.

- **The two conditions are not symmetric in what they presuppose.** Condition 1 names the integral as a supremum and an infimum and needs the completeness of $\mathbb{R}$ to make sense; condition 2 names it as a limit of sums and could be stated over any ordered field. What the theorem says is that on $\mathbb{R}$ the two coincide, so the numerical picture and the order-theoretic one describe the same object.

- **The value $I$ is not a free parameter after the fact.** If condition 2 holds for $I$ and for $I'$ then $|I - I'| < 2\varepsilon$ for every $\varepsilon > 0$, by evaluating both at one tagged partition of small enough mesh, so $I = I'$. The integral is therefore determined by condition 2 alone, as it is by condition 1.
````

### `thm-ftc-first-part`

````markdown
---
id: thm-ftc-first-part
kind: theorem
title: "The first fundamental theorem: if $f$ is integrable on $[a,b]$ and continuous at $c$, then $F'(c) = f(c)$; in particular a continuous $f$ has $F$ as a primitive"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-the-integral-function, thm-linearity-of-the-integral, thm-monotonicity-of-the-integral, cor-integrability-of-absolute-values-products-and-lattice-operations, lem-integral-elementary-bounds, lem-integrability-on-a-subinterval, thm-additivity-over-subintervals, def-oriented-integral, def-derivative, def-function-limit, def-continuity-real, def-interval, def-darboux-integral, lem-of-abs-value, def-abs-value, def-ordered-field, def-complete-ordered-field, thm-of-archimedean, cor-archimedean-reciprocal]
forward_refs: [cex-an-integrable-function-with-no-primitive, fs-the-integral-function-is-always-a-primitive]
justified_by: []
aliases: [thm-fundamental-theorem-of-calculus-first-part]
landmark: true
short: "first fundamental theorem"
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
    - title: "Fundamental theorem of calculus (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Fundamental_theorem_of_calculus"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 6"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "Carnegie Mellon 21-269, Riemann integration notes"
      url: "https://www.math.cmu.edu/~gautam/c/2026-269/notes/rint.html"
    - title: "J. Lebl, Basic Analysis I, Fundamental theorem of calculus"
      url: "https://www.jirka.org/ra/html/sec_ftc.html"
pipeline_run: null
---

## Statement

Let $a < b$ be reals, let $f : [a,b] \to \mathbb{R}$ be integrable
([[def-darboux-integral]]), let $F$ be its integral function
([[def-the-integral-function]]), and let $c \in [a,b]$ be a point at which $f$ is
continuous ([[def-continuity-real]]). Then $F$ is differentiable at $c$ as a
function on $[a,b]$ ([[def-derivative]]) and

$$F'(c) \;=\; f(c) .$$

At $c = a$ and $c = b$ this is the one-sided statement, which is what
[[def-derivative]] means at those points: every point of a nondegenerate interval
is a limit point of it, so $F'(c)$ is a meaningful symbol at every $c \in [a,b]$,
and the difference quotient is taken over $[a,b] \setminus \{c\}$.

**Consequently, if $f$ is continuous on the whole of $[a,b]$, then $F$ is a
primitive of $f$ there**: $F' = f$ at every point of $[a,b]$.

**Continuity at $c$ is a hypothesis and it cannot be dropped.** For an integrable
$f$ that is discontinuous at $c$, $F'(c)$ may fail to exist, and it may exist and
differ from $f(c)$; both are exhibited on the companion page, by
an integrable function with no primitive and by a false
statement about the integral function.

## Facts & Assumptions

**Given:** Reals $a < b$, an integrable $f : [a,b] \to \mathbb{R}$, its integral function $F(x) = \int_a^x f$, a point $c \in [a,b]$ at which $f$ is continuous, and a real $\varepsilon > 0$.

[L1] $F(x) - F(c) = \int_c^x f$ for all $x, c \in [a,b]$, in either order ([[def-the-integral-function]], [[thm-additivity-over-subintervals]]).

[L2] Continuity at $c$: for every real $\eta > 0$ there is a real $\delta > 0$ such that every $t \in [a,b]$ with $|t - c| < \delta$ satisfies $|f(t) - f(c)| < \eta$ ([[def-continuity-real]]).

[L3] Every point of a nondegenerate interval is a limit point of it, so $F'(c) = \lim_{x\to c} \bigl(F(x)-F(c)\bigr)/(x-c)$ is a meaningful symbol, the limit being taken over $[a,b]\setminus\{c\}$ ([[def-derivative]], [[def-function-limit]], [[def-interval]]).

[L4] For $p < q$ in $[a,b]$: $f$ and $|f|$ and every constant are integrable on $[p,q]$; $\int_p^q \lambda = \lambda(q-p)$; sums and scalar multiples of integrable functions are integrable with the corresponding identity; and $\bigl|\int_p^q u\bigr| \le \int_p^q |u|$ ([[lem-integrability-on-a-subinterval]], [[lem-integral-elementary-bounds]], [[thm-linearity-of-the-integral]], [[cor-integrability-of-absolute-values-products-and-lattice-operations]]).

[L5] If $u \le w$ pointwise on $[p,q]$ and both are integrable then $\int_p^q u \le \int_p^q w$ ([[thm-monotonicity-of-the-integral]]).

[L6] With oriented limits, $\int_q^p u = -\int_p^q u$ and $\int_p^p u = 0$ ([[def-oriented-integral]]).

[L7] Absolute value and ordered-field arithmetic: $|{-t}| = |t|$, $|t\,s| = |t||s|$, $|t| \le c$ follows from $-c \le t \le c$, a positive real has a positive inverse, and the order is total and transitive ([[lem-of-abs-value]], [[def-abs-value]], [[def-ordered-field]], [[def-complete-ordered-field]]). The nonstrict forms of the order facts follow from the strict ones by adjoining equality.

[L8] For every real $\eta > 0$ there is a real $\eta' > 0$ with $\eta' < \eta$ ([[cor-archimedean-reciprocal]], [[thm-of-archimedean]]).

## Proof

**Proof technique:** direct.

1.1 By [L2] with $\eta := \varepsilon \cdot 2^{-1}$, fix a real $\delta > 0$ such that $|f(t)-f(c)| < \varepsilon\cdot 2^{-1}$ for every $t \in [a,b]$ with $|t-c| < \delta$. [given, L2, L7, L8, choose]

1.2 For $x \in [a,b]$ with $x \ne c$, [L1] and [L4] give $F(x) - F(c) - f(c)(x-c) = \int_c^x f - \int_c^x f(c) = \int_c^x \bigl(f(t) - f(c)\bigr)\,\mathrm{d}t$, the constant $f(c)$ having integral $f(c)(x-c)$ over the oriented interval from $c$ to $x$ by [L4] and [L6]. [L1, L4, L6]

2.1 **The estimate for $c < x < c+\delta$.** Every $t \in [c,x]$ has $|t-c| < \delta$, so $-\varepsilon\cdot2^{-1} \le f(t)-f(c) \le \varepsilon\cdot 2^{-1}$ there by step 1.1, whence $\bigl|\int_c^x (f - f(c))\bigr| \le \varepsilon\cdot2^{-1}\,(x-c)$ by [L4] and [L5]. [step 1.1, step 1.2, L4, L5, L7]

2.2 **The estimate for $c-\delta < x < c$.** By [L6], $\int_c^x (f-f(c)) = -\int_x^c (f-f(c))$, and every $t \in [x,c]$ has $|t-c| < \delta$, so the same argument gives $\bigl|\int_c^x (f-f(c))\bigr| \le \varepsilon\cdot 2^{-1}\,(c-x)$. [step 1.1, step 1.2, L4, L5, L6, L7]

3.1 In both cases $\bigl|\int_c^x(f-f(c))\bigr| \le \varepsilon\cdot 2^{-1}\,|x-c|$, so dividing by the nonzero $|x-c|$ and using step 1.2 gives $\Bigl|\dfrac{F(x)-F(c)}{x-c} - f(c)\Bigr| \le \varepsilon\cdot 2^{-1} < \varepsilon$ for every $x \in [a,b]$ with $0 < |x-c| < \delta$. [step 1.2, step 2.1, step 2.2, L7]

4.1 Since $\varepsilon > 0$ was arbitrary, the limit of the difference quotient of $F$ at $c$ exists and equals $f(c)$ by [L3]; that is, $F'(c) = f(c)$. [step 1.1, step 3.1, L3]

5.1 If $f$ is continuous at every point of $[a,b]$ then step 4.1 applies at every $c \in [a,b]$, so $F' = f$ on $[a,b]$ and $F$ is a primitive of $f$. [step 4.1, L3] ∎

## Remarks

- **The estimate is written out for $x < c$ as well, and that is not redundancy.** For $x < c$ the factor $1/(x-c)$ is negative and the naive chain $m(x-c) \le \int_c^x \le M(x-c)$ reverses; what makes the argument uniform is taking absolute values *before* dividing, which is what steps 2.1, 2.2 and 3.1 do. This is the single most common error in this proof.

- **The route is the definition of the derivative, not the mean value theorem for integrals.** Deducing $F'(c) = f(c)$ from [[thm-first-mean-value-theorem-for-integrals]] would need $f$ continuous on a whole subinterval around $c$, which is a strictly stronger hypothesis than continuity at the single point $c$. The theorem as stated is the sharp one.

- **What is proved at a point is proved at a point.** Nothing here says $F$ is differentiable anywhere else, and nothing says $F' = f$ off the continuity set of $f$. Where $f$ is merely integrable, all that survives is [[thm-the-integral-function-is-lipschitz]].

- **Forward references, orientation only.** The two failures at a discontinuity are worked out on the companion page as [[cex-an-integrable-function-with-no-primitive]] and [[fs-the-integral-function-is-always-a-primitive]]; nothing above depends on either.
````

### `thm-ftc-second-part`

````markdown
---
id: thm-ftc-second-part
kind: theorem
title: "The second fundamental theorem: if $G$ is differentiable on $[a,b]$ with $G' = f$ and $f$ is integrable, then $\\int_a^b f = G(b)-G(a)$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-darboux-integral, def-partition-and-refinement, def-darboux-sums, cor-mean-value-theorem, def-derivative, cor-differentiable-implies-continuous, lem-finite-sum-laws, def-finite-sum, def-interval, def-continuity-real, def-bounded-set, def-ordered-field, def-complete-ordered-field]
forward_refs: [cex-a-function-with-a-primitive-that-is-not-integrable, cex-an-integrable-function-with-no-primitive]
justified_by: []
aliases: [thm-fundamental-theorem-of-calculus-second-part, thm-newton-leibniz]
landmark: true
short: "second fundamental theorem"
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Fundamental theorem of calculus (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Fundamental_theorem_of_calculus"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 6"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "Carnegie Mellon 21-269, Riemann integration notes"
      url: "https://www.math.cmu.edu/~gautam/c/2026-269/notes/rint.html"
    - title: "J. Lebl, Basic Analysis I, Fundamental theorem of calculus"
      url: "https://www.jirka.org/ra/html/sec_ftc.html"
pipeline_run: null
---

## Statement

Let $a < b$ be reals, let $G : [a,b] \to \mathbb{R}$ be differentiable at every
point of $[a,b]$ as a function on $[a,b]$ ([[def-derivative]]; at $a$ and $b$
this is the one-sided derivative), let $f := G'$, and suppose $f$ is integrable
on $[a,b]$ ([[def-darboux-integral]]). Then

$$\int_a^b f \;=\; G(b) - G(a) .$$

**Both hypotheses are needed and neither is removable.** A function may be
differentiable everywhere with $G'$ not integrable — then the left-hand side does
not exist (an everywhere differentiable function with unbounded derivative) — and an
integrable $f$ need not be the derivative of anything
(the sign function); both witnesses are on the
companion page.

**No continuity of $f$ is assumed**, which is what makes this the working form:
the theorem evaluates $\int_a^b f$ for every integrable derivative, not only for
continuous integrands.

## Facts & Assumptions

**Given:** Reals $a < b$, a function $G : [a,b] \to \mathbb{R}$ differentiable at every point of $[a,b]$, $f := G'$ integrable on $[a,b]$, and a partition $P = (n,t)$ of $[a,b]$.

[L1] For a partition $P = (n,t)$ of $[a,b]$: $t_0 = a$, $t_n = b$, $t_i < t_{i+1}$ for $i < n$, $\Delta_i = t_{i+1}-t_i > 0$, and $I_i = [t_i,t_{i+1}] \subseteq [a,b]$ ([[def-partition-and-refinement]], [[def-interval]]).

[L2] $L(f,P) = \sum_{i<n}m_i\Delta_i$ and $U(f,P) = \sum_{i<n}M_i\Delta_i$ with $m_i = \inf f[I_i]$ and $M_i = \sup f[I_i]$, so $m_i \le f(\xi) \le M_i$ for every $\xi \in I_i$ ([[def-darboux-sums]], [[def-bounded-set]]).

[L3] $\underline{\int_a^b} f = \sup_P L(f,P)$ and $\overline{\int_a^b} f = \inf_P U(f,P)$, and $f$ integrable means the two agree, their common value being $\int_a^b f$ ([[def-darboux-integral]]).

[L4] Mean value theorem: if $u$ is continuous on $[p,q]$ with $p<q$ and differentiable at every point of $(p,q)$, there is $\xi \in (p,q)$ with $u(q)-u(p) = u'(\xi)(q-p)$ ([[cor-mean-value-theorem]]).

[L5] A function differentiable at a point is continuous there, and the restriction of a differentiable function to a subinterval is differentiable with the same derivative at every point of that subinterval which is a limit point of it ([[cor-differentiable-implies-continuous]], [[def-derivative]], [[def-continuity-real]]).

[L6] Finite sums: telescoping $\sum_{i<n}(c_{i+1}-c_i) = c_n - c_0$, and monotonicity in the terms ([[def-finite-sum]], [[lem-finite-sum-laws]], clauses 4 and 5).

[L7] Ordered-field arithmetic: multiplying an inequality by a positive real preserves it, the order is total and transitive, and a number that is an upper bound of a set and also a lower bound of another set lies between their supremum and infimum ([[def-ordered-field]], [[def-complete-ordered-field]]).

## Proof

**Proof technique:** direct.

1.1 Let $P = (n,t)$ be an arbitrary partition of $[a,b]$ and let $i < n$. The restriction of $G$ to $I_i = [t_i,t_{i+1}]$ is continuous on $I_i$ and differentiable at every point of $(t_i,t_{i+1})$, with the same derivative $f$ there, by [L5] and [L1]. [given, L1, L5]

2.1 By [L4] applied on $I_i$ there is $\xi_i \in (t_i,t_{i+1})$ with $G(t_{i+1}) - G(t_i) = f(\xi_i)\,\Delta_i$; since $\xi_i \in I_i$ and $\Delta_i > 0$, [L2] gives $m_i\Delta_i \le G(t_{i+1})-G(t_i) \le M_i\Delta_i$. [step 1.1, L1, L2, L4, L7]

3.1 Step 2.1 holds for every $i < n$, so monotonicity of finite sums applies to the three families and gives $\sum_{i<n}m_i\Delta_i \le \sum_{i<n}\bigl(G(t_{i+1})-G(t_i)\bigr) \le \sum_{i<n}M_i\Delta_i$. [step 2.1, L6]

4.1 The middle sum telescopes to $G(t_n) - G(t_0) = G(b) - G(a)$ by [L6] and [L1], so $L(f,P) \le G(b)-G(a) \le U(f,P)$ by [L2]. [step 3.1, L1, L2, L6]

5.1 Step 4.1 holds for **every** partition $P$, so $G(b)-G(a)$ is an upper bound of the set of lower sums and a lower bound of the set of upper sums; hence $\underline{\int_a^b} f \le G(b)-G(a) \le \overline{\int_a^b} f$ by [L3] and [L7]. [step 4.1, L3, L7]

6.1 Since $f$ is integrable the two integrals coincide with $\int_a^b f$, so $\int_a^b f = G(b)-G(a)$. [step 5.1, L3] ∎

## Remarks

- **No choice principle is spent, and no sequence of tags is ever formed.** The usual proof selects one $\xi_i$ per subinterval and assembles the Riemann sum $\sum_i f(\xi_i)\Delta_i$, which is a choice from finitely many nonempty sets. The proof above never forms that family: step 2.1 proves, for an arbitrary fixed $i$, the *inequality* $m_i\Delta_i \le G(t_{i+1})-G(t_i) \le M_i\Delta_i$, which is a universally quantified statement about $i$ and needs no selection, and step 3.1 then sums the inequality. The telescoping identity supplies the middle term without any tags at all.

- **The hypothesis is differentiability at every point of the closed interval.** It is not enough to be differentiable on $(a,b)$ and continuous on $[a,b]$ in the argument as written, because step 2.1 uses the derivative only on open subintervals but the definition $f = G'$ has to name a function on all of $[a,b]$ for $\int_a^b f$ to mean anything. Changing $f$ at the two endpoints changes neither its integrability nor its integral ([[lem-changing-a-function-at-finitely-many-points]]), so the reader who prefers the weaker hypothesis loses nothing.

- **This is the half of the fundamental theorem that computes.** The other half, [[thm-ftc-first-part]], produces a primitive; this one evaluates an integral once a primitive is known, and it is the tool the companion page reaches for whenever a primitive is available. Where no primitive is at hand the companion page computes instead by splitting at a jump and using the integral of a constant; no claim is made here about how many of its computations take which route.

- **Forward references, orientation only.** The two witnesses showing neither hypothesis is removable are [[cex-a-function-with-a-primitive-that-is-not-integrable]] and [[cex-an-integrable-function-with-no-primitive]] on the companion page; nothing above depends on either.
````

### `thm-heine-cantor-r`

````markdown
---
id: thm-heine-cantor-r
kind: theorem
title: "Heine-Cantor in $\\mathbb{R}$: a continuous real function on a compact subset of $\\mathbb{R}$ is uniformly continuous, proved $\\mathbb{R}$-natively from sequential compactness"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-uniform-continuity-real, def-continuity-real, lem-real-and-metric-notions-agree, thm-sequential-criterion-for-continuity, thm-compact-iff-sequentially-compact-r, def-open-cover-r, def-real-limit, def-sequence, lem-index-map-grows, def-countable-choice, cor-archimedean-reciprocal, thm-of-archimedean, lem-of-inverse-positive, lem-of-triangle-inequality, lem-of-abs-value, lem-rat-embeds-dense, def-ordered-field]
justified_by: []
aliases: [thm-uniform-continuity-on-compact-r]
forward_refs: [cex-one-over-x-is-not-uniformly-continuous-on-the-unit-interval, cex-x-squared-is-not-uniformly-continuous-on-r]
landmark: true
short: "Heine-Cantor in R"
proof_strategy: contradiction
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-27
  audited: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Heine-Cantor theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Heine%E2%80%93Cantor_theorem"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 4 (Thm 4.19)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §3.4"
      url: "https://www.jirka.org/ra/"
    - title: "W. Trench, Introduction to Real Analysis, Ch. 8: Metric Spaces"
      url: "https://math.libretexts.org/Bookshelves/Analysis/Introduction_to_Real_Analysis_%28Trench%29/08%3A_Metric_Spaces/8.00%3A_Introduction_to_Metric_Spaces"
    - title: "J. Lebl, Basic Analysis I, §3.3: Uniform continuity"
      url: "https://www.jirka.org/ra/html/sec_unifcont.html"
pipeline_run: null
---

## Statement

Let $K \subseteq \mathbb{R}$ be compact ([[def-open-cover-r]]) and let
$f : K \to \mathbb{R}$ be continuous on $K$ ([[def-continuity-real]]). Then $f$
is uniformly continuous on $K$ ([[def-uniform-continuity-real]]).

**This theorem is stated twice in this library, on purpose.** Its metric-space
twin is [[thm-heine-cantor-metric]], proved there from the cover machinery of
metric spaces; the proof below is $\mathbb{R}$-native and runs through
[[thm-compact-iff-sequentially-compact-r]], which is order-based. That the two
statements are the same statement in two vocabularies is
[[lem-real-and-metric-notions-agree]], clauses 1, 2 and 5, immediately above.

**The choice cost, named.** The proof invokes the axiom of countable choice
([[def-countable-choice]]) exactly once, at step 3.1, to select one bad pair of
points from each of countably many nonempty sets. The backward implication of
[[thm-compact-iff-sequentially-compact-r]] also spends countable choice, and
that item names its own uses; the forward implication used here, from compact to
sequentially compact, does not. No claim is made that the axiom is necessary
for either.

## Facts & Assumptions

**Given:** A compact set $K \subseteq \mathbb{R}$ and a function $f : K \to \mathbb{R}$ continuous on $K$.

[L1] Uniform continuity on $K$: for every real $\varepsilon > 0$ there is a real $\delta > 0$ such that all $x, x' \in K$ with $|x - x'| < \delta$ satisfy $|f(x) - f(x')| < \varepsilon$. Its negation: there is a real $\varepsilon_0 > 0$ such that for every real $\delta > 0$ some pair $x, x' \in K$ has $|x - x'| < \delta$ and $|f(x) - f(x')| \ge \varepsilon_0$ ([[def-uniform-continuity-real]], [[def-ordered-field]]).

[L2] A compact subset of $\mathbb{R}$ is sequentially compact: every sequence with all terms in $K$ has a subsequence converging to a point of $K$ ([[thm-compact-iff-sequentially-compact-r]], [[def-open-cover-r]], [[def-sequence]], [[def-real-limit]]).

[L3] Countable choice: for a family $(P_k)_{k \in \mathbb{N}}$ of nonempty sets there is a function on $\mathbb{N}$ picking an element of each ([[def-countable-choice]]).

[L4] A strictly increasing index map satisfies $n_j \ge j$ ([[lem-index-map-grows]], [[def-sequence]]).

[L5] Archimedean property in reciprocal form: for every real $\eta > 0$ there is a natural $n \ge 1$ with $1/n < \eta$; and $0 < s \le t$ implies $1/t \le 1/s$ ([[cor-archimedean-reciprocal]], [[thm-of-archimedean]], [[lem-of-inverse-positive]]).

[L6] Sequential criterion, the choice-free direction: if $f$ is continuous at $p \in K$ and $(z_j)$ has terms in $K$ with $z_j \to p$, then $f(z_j) \to f(p)$ ([[thm-sequential-criterion-for-continuity]], [[def-continuity-real]]).

[L7] Triangle inequality and absolute value: $|u + v| \le |u| + |v|$, $|{-u}| = |u|$, $|u| \ge 0$ ([[lem-of-triangle-inequality]], [[lem-of-abs-value]]).

[L8] Convergence of real sequences is tested at rational $\varepsilon > 0$, and below every positive real lies a positive rational, so the test may equally be run at every real $\varepsilon > 0$ ([[def-real-limit]], [[lem-rat-embeds-dense]]).

## Proof

**Proof technique:** contradiction.

1.1 Suppose $f$ is not uniformly continuous on $K$. By [L1] fix a real $\varepsilon_0 > 0$ such that for every real $\delta > 0$ there are $x, x' \in K$ with $|x - x'| < \delta$ and $|f(x) - f(x')| \ge \varepsilon_0$. [L1, assume-contra]

2.1 For $k \in \mathbb{N}$ put $P_k := \{\, (x,x') \in K \times K \ : \ |x - x'| < 1/(k+1) \text{ and } |f(x) - f(x')| \ge \varepsilon_0 \,\}$. Since $1/(k+1) > 0$, step 1.1 makes every $P_k$ nonempty. [step 1.1, L5]

3.1 By [L3] applied to the family $(P_k)_{k \in \mathbb{N}}$ fix a function $k \mapsto (x_k, x'_k)$ with $(x_k, x'_k) \in P_k$ for every $k$. **This is the single use of countable choice in this proof.** [step 2.1, L3, choose]

4.1 $(x_k)$ is a sequence of reals with all terms in $K$, so by [L2] there are a strictly increasing $n : \mathbb{N} \to \mathbb{N}$ and $p \in K$ with $x_{n_j} \to p$. [step 3.1, L2, choose]

5.1 **The second sequence converges to $p$ as well.** Let a rational $\varepsilon > 0$ be given. By [L5] and [L8] fix $J_1$ with $1/(j+1) < \varepsilon/2$ for every $j \ge J_1$, and by step 4.1 fix $J_2$ with $|x_{n_j} - p| < \varepsilon/2$ for every $j \ge J_2$. For $j \ge \max\{J_1, J_2\}$, using $(x_{n_j}, x'_{n_j}) \in P_{n_j}$ and $n_j \ge j$ from [L4], we get $|x'_{n_j} - x_{n_j}| < 1/(n_j+1) \le 1/(j+1) < \varepsilon/2$, hence $|x'_{n_j} - p| \le |x'_{n_j} - x_{n_j}| + |x_{n_j} - p| < \varepsilon$ by [L7]. So $x'_{n_j} \to p$. [step 3.1, step 4.1, L4, L5, L7, L8]

6.1 The point $p$ lies in $K$ and $f$ is continuous at $p$, so [L6] applied to the two sequences of steps 4.1 and 5.1, both with terms in $K$, gives $f(x_{n_j}) \to f(p)$ and $f(x'_{n_j}) \to f(p)$. [step 4.1, step 5.1, L6]

7.1 By [L8] fix a rational $\varepsilon$ with $0 < \varepsilon < \varepsilon_0/2$, and by step 6.1 fix $J$ with $|f(x_{n_j}) - f(p)| < \varepsilon$ and $|f(x'_{n_j}) - f(p)| < \varepsilon$ for every $j \ge J$. For such $j$, [L7] gives $|f(x_{n_j}) - f(x'_{n_j})| \le |f(x_{n_j}) - f(p)| + |f(p) - f(x'_{n_j})| < 2\varepsilon < \varepsilon_0$. [step 6.1, L7, L8, choose]

8.1 But $(x_{n_j}, x'_{n_j}) \in P_{n_j}$ gives $|f(x_{n_j}) - f(x'_{n_j})| \ge \varepsilon_0$ for every $j$, which contradicts step 7.1. The assumption of step 1.1 is therefore false, and $f$ is uniformly continuous on $K$. [step 3.1, step 7.1, discharge-contradiction] ∎

## Remarks

- **Where compactness is used, and where continuity is used.** Compactness is used once, in step 4.1, to extract a convergent subsequence; continuity is used once, in step 6.1, at the single point $p$ that the extraction produces. Neither can be weakened: $x \mapsto 1/x$ on $(0,1)$ is continuous on a bounded non-closed set and not uniformly continuous ([[cex-one-over-x-is-not-uniformly-continuous-on-the-unit-interval]]), and $x \mapsto x^{2}$ on $\mathbb{R}$ is continuous on a closed unbounded set and not uniformly continuous ([[cex-x-squared-is-not-uniformly-continuous-on-r]]).

- **The converse is sharp.** For every noncompact $E \subseteq \mathbb{R}$ that is bounded there is a continuous function on $E$ that is not uniformly continuous, and for every noncompact $E$ there is an unbounded continuous function and a bounded continuous one with no greatest value. That is [[thm-compactness-is-necessary-for-evt-and-uniform-continuity]], later on this page, and together with this theorem it says that compactness is exactly the hypothesis these results need.

- **The pairs, not the points, are what is chosen.** A common presentation selects two sequences separately and then extracts twice. Selecting the pair once, as above, keeps the count of choice applications at one and makes the second sequence's convergence a consequence rather than a second extraction.
````

### `thm-integral-test-for-series`

````markdown
---
id: thm-integral-test-for-series
kind: theorem
title: "The integral test: for $f \\ge 0$ nonincreasing on $[0,\\infty)$, $\\sum_k f(k)$ converges if and only if the sequence $\\bigl(\\int_0^N f\\bigr)_N$ is bounded, with $\\int_0^N f \\le \\sum_{k<N} f(k) \\le f(0) + \\int_0^N f$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-monotonicity-of-the-integral, thm-additivity-over-subintervals, lem-integral-elementary-bounds, thm-monotone-implies-integrable, lem-integrability-on-a-subinterval, def-monotone-function, def-series, thm-nonnegative-series-bounded-partial-sums, lem-finite-sum-laws, def-finite-sum, def-sequence, def-canonical-natural, lem-of-naturals-positive, def-oriented-integral, def-bounded-set, def-interval, def-darboux-integral, def-ordered-field, def-complete-ordered-field]
justified_by: []
aliases: [thm-cauchy-integral-test]
landmark: true
short: "integral test for series"
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
    - title: "Integral test for convergence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Integral_test_for_convergence"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, Improper Riemann integrals"
      url: "https://www.jirka.org/ra/html/sec_impropriemann.html"
pipeline_run: null
---

## Statement

Let $f : [0,\infty) \to \mathbb{R}$ be nonincreasing ([[def-monotone-function]])
with $f(t) \ge 0$ for every $t \ge 0$. For $N \in \mathbb{N}$ write

$$J_N \;:=\; \int_0^{N} f ,$$

which is defined for every $N$: for $N \ge 1$ the restriction of $f$ to $[0,N]$
is monotone, hence bounded and integrable ([[thm-monotone-implies-integrable]]),
and $J_0 = \int_0^0 f = 0$ ([[def-oriented-integral]]). Here $N$ inside the
integral means the canonical natural $\iota(N) \in \mathbb{R}$
([[def-canonical-natural]]), as everywhere in this library. Let
$s_N := \sum_{k<N} f(k)$ be the partial sums of $\sum_k f(k)$
([[def-series]], [[def-finite-sum]]), the index $k$ ranging over $\mathbb{N}$,
which **contains $0$**. Then:

1. **The bracket.** For every $N \in \mathbb{N}$,
   $$J_N \;\le\; s_N \;\le\; f(0) + J_N .$$
2. **The test.** $(J_N)_{N\in\mathbb{N}}$ is nondecreasing, and $\sum_k f(k)$
   converges **if and only if** the set $\{\,J_N : N \in \mathbb{N}\,\}$ is
   bounded above ([[def-bounded-set]]).

**The conclusion is about a sequence of proper integrals, and that is
deliberate.** This library has not defined $\int_0^{\infty} f$ at this point in
the reading order — improper integrals are developed on a later page — so the
statement that a reader may expect, "$\sum_k f(k)$ converges if and only if
$\int_0^{\infty} f$ converges", is not available and is not made. What is proved
is the statement above, which is what that one abbreviates; the later page is
where the two are identified.

**The index starts at $0$.** Both the sum and the integral begin at $0$, because
$\mathbb{N}$ contains $0$ and a sequence is a function on $\mathbb{N}$
([[def-sequence]]). The classical statement, which starts at $1$, is the
statement about the first tail of $\sum_k f(k)$ and is not the statement above.

## Facts & Assumptions

**Given:** A nonincreasing $f : [0,\infty) \to \mathbb{R}$ with $f \ge 0$, and the notation $J_N = \int_0^N f$, $s_N = \sum_{k<N} f(k)$ for $N \in \mathbb{N}$.

[L1] A monotone function on a closed bounded interval with distinct endpoints is bounded and integrable there, as is its restriction to any closed subinterval with distinct endpoints ([[thm-monotone-implies-integrable]], [[lem-integrability-on-a-subinterval]], [[def-monotone-function]], [[def-darboux-integral]]).

[L2] If $\kappa \le u \le \mu$ on $[p,q]$ with $p<q$ and $u$ is integrable there, then $\kappa(q-p) \le \int_p^q u \le \mu(q-p)$ ([[thm-monotonicity-of-the-integral]], [[lem-integral-elementary-bounds]]).

[L3] Additivity over adjacent intervals, in the oriented form valid for arbitrary points ([[thm-additivity-over-subintervals]], claim 3, [[def-oriented-integral]]).

[L4] Finite sums: telescoping $\sum_{k<n}(c_{k+1}-c_k) = c_n - c_0$, splitting, additivity, and monotonicity in the terms ([[def-finite-sum]], [[lem-finite-sum-laws]]).

[L5] For a sequence $(a_k)$ of nonnegative reals, the partial sums are nondecreasing and $\sum a_k$ converges if and only if the set of partial sums is bounded above ([[thm-nonnegative-series-bounded-partial-sums]], [[def-series]], [[def-sequence]]).

[L6] $\iota(0) = 0$, $\iota(N+1) = \iota(N)+1$, and $\iota$ is nondecreasing on $\mathbb{N}$ ([[def-canonical-natural]], [[lem-of-naturals-positive]]).

[L7] Ordered-field arithmetic: the order is total and transitive, and adding constants preserves inequalities ([[def-ordered-field]], [[def-complete-ordered-field]], [[def-interval]]).

## Proof

**Proof technique:** direct.

1.1 For $k \in \mathbb{N}$ the interval $[\iota(k), \iota(k+1)]$ is nondegenerate of length $1$ by [L6], $f$ is integrable on it by [L1], and $f(k+1) \le f(t) \le f(k)$ for every $t$ in it, $f$ being nonincreasing. [given, L1, L6]

1.2 By [L3] and [L4], $J_N = \int_0^N f = \sum_{k<N}\int_k^{k+1} f$ for every $N \in \mathbb{N}$: writing $\Phi(x) := \int_0^x f$, each summand is $\Phi(k+1)-\Phi(k)$ and the sum telescopes to $\Phi(N) - \Phi(0) = J_N$. [L1, L3, L4, L6]

1.3 By [L4], $\sum_{k<N}f(k+1) = s_{N+1} - f(0)$, since splitting $s_{N+1} = \sum_{k<N+1}f(k)$ at index $1$ gives $f(0) + \sum_{j<N}f(1+j)$. [L4]

2.1 Hence $f(k+1) \le \int_{k}^{k+1} f \le f(k)$ for every $k \in \mathbb{N}$, by [L2] with $q - p = 1$. [step 1.1, L2]

3.1 Summing step 2.1 over $k < N$ with [L4] gives $\sum_{k<N} f(k+1) \;\le\; J_N \;\le\; \sum_{k<N} f(k) \;=\; s_N$, which is the left half of claim 1. [step 2.1, step 1.2, L4]

3.2 $(J_N)$ is nondecreasing: $J_{N+1} - J_N = \int_N^{N+1} f \ge 0$ by step 1.2 and [L2], since $f \ge 0$. [step 2.1, step 1.2, given, L2, L7]

4.1 So $s_{N+1} \le f(0) + J_N$ by step 3.1 and step 1.3; and $s_N \le s_{N+1}$ because $f(N) \ge 0$, so $s_N \le f(0) + J_N$, which is the right half of claim 1. [step 3.1, step 1.3, given, L4, L7]

4.2 **If $\sum_k f(k)$ converges**, then by [L5] the partial sums are bounded above, say $s_N \le S$ for every $N$, and step 3.1 gives $J_N \le s_N \le S$; so the set of $J_N$ is bounded above. [step 3.1, given, L5, L7]

5.1 **If the set of $J_N$ is bounded above**, say by a real $B$, then $s_N \le f(0) + B$ for every $N$ by step 4.1, so the partial sums are bounded above and $\sum_k f(k)$ converges by [L5], the terms $f(k)$ being nonnegative. [step 4.1, given, L5, L7]

6.1 Steps 5.1 and 4.2 are the two implications of claim 2, and step 3.2 is its first clause; claim 1 is steps 3.1 and 4.1. [step 3.1, step 4.1, step 3.2, step 5.1, step 4.2] ∎

## Remarks

- **Why the bracket is stated with $f(0)$ and not with a tail.** The two sums in step 3.1 differ by exactly the first term $f(0)$ and the last term $f(N)$; the clean two-sided statement that survives at every $N \ge 0$, including $N = 0$ where it reads $0 \le 0 \le f(0)$, is the one displayed in claim 1.

- **The version beginning at $k = 1$ is a statement about a tail.** For the family $(f(k))_{k \ge 1}$ the same argument on $[1,N]$ gives $\int_1^N f \le \sum_{k=1}^{N-1} f(k) \le f(1) + \int_1^N f$, and convergence of the two series is equivalent by [[lem-series-tail-invariance]]. Nothing above silently starts at $1$, and a reader comparing with a classical text should check which convention that text uses for $\mathbb{N}$.

- **Monotonicity of $f$ is used exactly twice**, in step 1.1, to bracket $f$ on a unit interval by its two endpoint values, and through [[thm-monotone-implies-integrable]] to know that $f$ is integrable on $[0,N]$ at all. Nonnegativity is used in three named places: to make $(J_N)$ nondecreasing in step 3.2, to pass from $s_{N+1}$ to $s_N$ in step 4.1, and to apply [[thm-nonnegative-series-bounded-partial-sums]], whose own hypothesis is that the terms are nonnegative. No claim is made here about what happens to the test if that hypothesis is dropped.
````

### `thm-integration-by-parts`

````markdown
---
id: thm-integration-by-parts
kind: theorem
title: "If $u,v$ are differentiable on $[a,b]$ with $u',v'$ integrable, then $\\int_a^b u v' = u(b)v(b)-u(a)v(a) - \\int_a^b u'v$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-ftc-second-part, thm-algebra-of-derivatives, cor-differentiable-implies-continuous, thm-continuous-implies-integrable, cor-integrability-of-absolute-values-products-and-lattice-operations, thm-linearity-of-the-integral, def-derivative, def-continuity-real, def-darboux-integral, def-interval, def-limit-point-r]
forward_refs: [fs-integration-by-parts-needs-no-integrability-hypothesis]
justified_by: []
aliases: []
landmark: true
short: "integration by parts"
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Integration by parts (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Integration_by_parts"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 6"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "Carnegie Mellon 21-269, Riemann integration notes"
      url: "https://www.math.cmu.edu/~gautam/c/2026-269/notes/rint.html"
    - title: "J. Lebl, Basic Analysis I, Fundamental theorem of calculus"
      url: "https://www.jirka.org/ra/html/sec_ftc.html"
pipeline_run: null
---

## Statement

Let $a < b$ be reals and let $u, v : [a,b] \to \mathbb{R}$ be differentiable at
every point of $[a,b]$ as functions on $[a,b]$ ([[def-derivative]]). Suppose
$u'$ and $v'$ are integrable on $[a,b]$ ([[def-darboux-integral]]). Then $uv'$
and $u'v$ are integrable and

$$\int_a^b u\,v' \;=\; u(b)v(b) - u(a)v(a) \;-\; \int_a^b u'\,v .$$

**The integrability of $u'$ and $v'$ is a hypothesis, not a formality.** Without
it the two integrals in the display need not exist at all, and the identity is
then not false but ill-formed; that is
the false statement that deletes it on the companion
page. The hypothesis is automatic when $u$ and $v$ are continuously
differentiable, since a continuous function on $[a,b]$ is integrable
([[thm-continuous-implies-integrable]]).

## Facts & Assumptions

**Given:** Reals $a < b$ and functions $u, v : [a,b] \to \mathbb{R}$, differentiable at every point of $[a,b]$, with $u'$ and $v'$ integrable on $[a,b]$.

[L1] Product rule: if $u$ and $v$ are differentiable at $c$ then so is $uv$, with $(uv)'(c) = u'(c)v(c) + u(c)v'(c)$ ([[thm-algebra-of-derivatives]], claim 3); every point of $[a,b]$ is a limit point of it, so the rule applies at every point ([[def-limit-point-r]], [[def-interval]], [[def-derivative]]).

[L2] A function differentiable at every point of $[a,b]$ is continuous there ([[cor-differentiable-implies-continuous]], [[def-continuity-real]]).

[L3] A continuous function on $[a,b]$ is integrable there ([[thm-continuous-implies-integrable]]).

[L4] A product of two integrable functions on $[a,b]$ is integrable ([[cor-integrability-of-absolute-values-products-and-lattice-operations]], claim 1).

[L5] Sums of integrable functions are integrable, and $\int_a^b(w_1+w_2) = \int_a^b w_1 + \int_a^b w_2$ ([[thm-linearity-of-the-integral]]).

[L6] If $H$ is differentiable at every point of $[a,b]$ with $H'$ integrable there, then $\int_a^b H' = H(b)-H(a)$ ([[thm-ftc-second-part]]).

## Proof

**Proof technique:** direct.

1.1 $u$ and $v$ are continuous on $[a,b]$ by [L2], hence integrable there by [L3]. [given, L2, L3]

1.2 $uv$ is differentiable at every point of $[a,b]$ with $(uv)' = u'v + uv'$ by [L1]. [given, L1]

2.1 $u'v$ and $uv'$ are integrable on $[a,b]$ by [L4], being products of the integrable $u'$ with $v$ and of $u$ with the integrable $v'$. [step 1.1, given, L4]

3.1 Hence $(uv)' = u'v + uv'$ is integrable by [L5], and $\int_a^b (uv)' = \int_a^b u'v + \int_a^b uv'$. [step 1.2, step 2.1, L5]

4.1 By [L6] applied to $H := uv$, $\int_a^b (uv)' = u(b)v(b) - u(a)v(a)$. [step 1.2, step 3.1, L6]

5.1 Comparing steps 3.1 and 4.1 and subtracting $\int_a^b u'v$ gives $\int_a^b uv' = u(b)v(b)-u(a)v(a) - \int_a^b u'v$. [step 3.1, step 4.1, algebra] ∎

## Remarks

- **Step 2.1 is the step usually skipped, and it is why the hypotheses are what they are.** The identity is an application of the second fundamental theorem to $uv$, and that theorem needs $(uv)'$ to be integrable. Integrability of $u'$ and $v'$ plus continuity of $u$ and $v$ delivers it, through the product clause of [[cor-integrability-of-absolute-values-products-and-lattice-operations]]; nothing weaker is used, and nothing weaker is claimed to suffice.

- **The boundary term is exactly the increment of $uv$.** Writing the identity as $\int_a^b uv' + \int_a^b u'v = (uv)(b) - (uv)(a)$ makes the symmetry in $u$ and $v$ visible and is the form worth remembering.

- **Discrete counterpart.** Abel's summation by parts ([[lem-abel-summation-by-parts]]) is the same manipulation for finite sums, and it is what [[thm-second-mean-value-theorem-for-integrals]] below uses in place of this theorem, precisely because that theorem assumes no differentiability.

- **Forward reference, orientation only.** The false statement that deletes the integrability hypothesis is [[fs-integration-by-parts-needs-no-integrability-hypothesis]] on the companion page; nothing above depends on it.
````

### `thm-lebesgue-criterion`

````markdown
---
id: thm-lebesgue-criterion
kind: theorem
title: "Lebesgue's criterion for Riemann integrability: a bounded $f$ on $[a,b]$ is Riemann integrable if and only if its set of discontinuities has measure zero"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-riemann-criterion, def-oscillation, thm-continuity-iff-oscillation-zero, lem-oscillation-superlevel-sets-are-closed, def-measure-zero-and-content-zero, thm-countable-union-of-null-is-null, thm-compact-null-is-content-zero, lem-content-zero-implies-null, thm-heine-borel-characterisation-r, def-open-cover-r, def-countable-choice, def-darboux-sums, def-darboux-integral, def-partition-and-refinement, lem-finite-sum-laws, def-finite-sum, cor-archimedean-reciprocal, thm-of-archimedean, def-canonical-natural, lem-of-naturals-positive, def-open-and-closed-in-r, thm-open-set-algebra-r, def-neighbourhood-r, def-bounded-set, def-interval, def-continuity-real, def-classification-of-discontinuities, def-extended-reals, def-sequence, thm-well-ordering-principle, thm-induction-principle, def-complete-ordered-field, def-ordered-field, lem-of-add-order, lem-of-sign-rules, lem-of-abs-value]
justified_by: []
aliases: [thm-lebesgue-integrability-criterion]
landmark: true
short: "Lebesgue's criterion"
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
    - title: "Riemann integral (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Riemann_integral"
    - title: "Lebesgue's criterion for Riemann integrability (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Riemann_integral#Integrability"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 11"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Hunter, Chapter 11: The Riemann Integral"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/ch11.pdf"
    - title: "M. Wodzicki, The Riemann Integral"
      url: "https://math.berkeley.edu/~wodzicki/H104.F10/Integral.pdf"
pipeline_run: null
---

## Statement

Let $a < b$ be reals, let $f : [a,b] \to \mathbb{R}$ be bounded
([[def-bounded-set]]) and let

$$D \;:=\; \{\, x \in [a,b] \ : \ f \text{ is discontinuous at } x \,\}$$

([[def-continuity-real]], [[def-classification-of-discontinuities]]). Then

$$f \text{ is Riemann integrable on } [a,b] \quad \Longleftrightarrow \quad D \text{ has measure zero}$$

([[def-darboux-integral]], [[def-measure-zero-and-content-zero]]).

**The choice cost, named.** The implication from integrability to $D$ being null
uses the Axiom of Countable Choice ([[def-countable-choice]]) exactly once,
through [[thm-countable-union-of-null-is-null]] at step 7.1: $D$ is exhibited as
the union of a sequence of null sets. The converse implication, from $D$ null to
integrability, is a theorem of ZF: it uses no choice principle at all.

**"Measure zero" here is the cover condition of
[[def-measure-zero-and-content-zero]]**, namely that for every $\varepsilon > 0$
there is a sequence of intervals covering $D$ of total length at most
$\varepsilon$. No outer measure, no measurable set and no Lebesgue integral is
used or needed; the criterion is a statement about interval covers throughout.

## Facts & Assumptions

**Given:** Reals $a < b$, a bounded $f : [a,b] \to \mathbb{R}$, a real $M_{+} > 0$ with $|f(x)| \le M_{+}$ for every $x \in [a,b]$, and $D$ as in the Statement.

[A1] The Axiom of Countable Choice, used only where [L11] is invoked ([[def-countable-choice]]).

[L1] For a partition $P = (n,t)$ of $[a,b]$: $n \ge 1$, $\Delta_i = t_{i+1}-t_i > 0$, $\sum_{i<n}\Delta_i = b-a$, $I_i = [t_i,t_{i+1}] \subseteq [a,b]$, and appending a point $y > t_n$ to a partition of $[a,t_n]$ gives a partition of $[a,y]$ whose subintervals are the old ones together with $[t_n,y]$ ([[def-partition-and-refinement]]).

[L2] $U(f,P) - L(f,P) = \sum_{i<n}(M_i-m_i)\Delta_i$, $M_i - m_i = \omega_f(I_i)$, and $0 \le M_i - m_i \le 2M_{+}$ ([[def-darboux-sums]], [[def-oscillation]]).

[L3] Riemann's criterion: a bounded $f$ is integrable if and only if for every real $\varepsilon > 0$ there is a partition $P$ with $U(f,P)-L(f,P) < \varepsilon$ ([[thm-riemann-criterion]]).

[L4] Oscillation: $\omega_f(S) \le \omega_f(T)$ for $S \subseteq T \subseteq [a,b]$; $0 \le \omega_f(x) \le \omega_f([a,b] \cap N_\rho(x))$ for every real $\rho > 0$ and every $x \in [a,b]$; $\omega_f(x)$ is the infimum of those values over $\rho > 0$; and since $f$ is bounded every one of these values is a real number in $[0, 2M_{+}]$ ([[def-oscillation]], [[def-extended-reals]], [[def-neighbourhood-r]]).

[L5] $f$ is continuous at $x \in [a,b]$ if and only if $\omega_f(x) = 0$; hence $D = \{x \in [a,b] : \omega_f(x) > 0\}$ ([[thm-continuity-iff-oscillation-zero]], [[def-continuity-real]]).

[L6] For every real $\sigma > 0$ there is a closed $G \subseteq \mathbb{R}$ with $\{x \in [a,b] : \omega_f(x) \ge \sigma\} = [a,b] \cap G$ ([[lem-oscillation-superlevel-sets-are-closed]]).

[L7] A subset of $\mathbb{R}$ is compact exactly when it is closed and bounded; $[a,b]$ is closed and bounded; an intersection of closed sets is closed; every open interval is an open set ([[thm-heine-borel-characterisation-r]], [[def-open-cover-r]], [[def-open-and-closed-in-r]], [[thm-open-set-algebra-r]], [[def-interval]], [[def-bounded-set]]).

[L8] $A$ has content zero when for every real $\tau > 0$ there are $m \in \mathbb{N}$ and reals $c_0 \le e_0, \dots, c_m \le e_m$ with $A \subseteq \bigcup_{j \le m}[c_j,e_j]$ and $\sum_{j \le m}(e_j - c_j) \le \tau$; $A$ has measure zero when the same holds with a sequence of intervals and every partial total length at most $\tau$; a subset of a null set is null ([[def-measure-zero-and-content-zero]]).

[L9] A set of content zero has measure zero ([[lem-content-zero-implies-null]]), and for a **compact** set the two notions coincide ([[thm-compact-null-is-content-zero]]).

[L10] For every real $\eta > 0$ there is a natural $k \ge 1$ with $1/\iota(k) < \eta$; $\iota(k) > 0$ for $k \ge 1$, $\iota$ is nonnegative and nondecreasing on $\mathbb{N}$ ([[cor-archimedean-reciprocal]], [[thm-of-archimedean]], [[def-canonical-natural]], [[lem-of-naturals-positive]]).

[L11] Assuming [A1], the union of a sequence of null subsets of $\mathbb{R}$ is null ([[thm-countable-union-of-null-is-null]], [[def-sequence]]).

[L12] Finite sums: splitting, additivity, scaling, monotonicity in the terms, and telescoping ([[def-finite-sum]], [[lem-finite-sum-laws]]). Also the interchange of two finite sums, $\sum_{i<n}\sum_{j<p}c_{i,j} = \sum_{j<p}\sum_{i<n}c_{i,j}$ for any doubly indexed family of reals; below it is applied with $p := m+1$, since $\sum_{j \le m}$ abbreviates $\sum_{j<m+1}$. That identity is **not** one of the six clauses of [[lem-finite-sum-laws]] and is therefore proved here, by induction on $p$ with $n$ held fixed ([[thm-induction-principle]]). At $p = 0$ each inner sum $\sum_{j<0}c_{i,j}$ is $0$ by the recursion clause of [[def-finite-sum]], so the left side is $\sum_{i<n}0 = 0$ by clause 2 of [[lem-finite-sum-laws]] taken with $\lambda = 0$, while the right side is an empty sum and so is $0$ as well. Passing from $p$ to $p+1$, the recursion clause and clause 1 of [[lem-finite-sum-laws]] give $\sum_{i<n}\sum_{j<p+1}c_{i,j} = \sum_{i<n}\bigl(\sum_{j<p}c_{i,j} + c_{i,p}\bigr) = \sum_{i<n}\sum_{j<p}c_{i,j} + \sum_{i<n}c_{i,p}$, which by the induction hypothesis is $\sum_{j<p}\sum_{i<n}c_{i,j} + \sum_{i<n}c_{i,p} = \sum_{j<p+1}\sum_{i<n}c_{i,j}$, again by the recursion clause.

[L13] Every nonempty subset of $\mathbb{N}$ has a least element ([[thm-well-ordering-principle]]); every nonempty subset of $\mathbb{R}$ bounded above has a supremum ([[def-complete-ordered-field]]).

[L14] Ordered-field arithmetic and the absolute value: adding a constant and multiplying by a positive quantity preserve an inequality; the order is total and transitive; an open interval is order-convex ([[lem-of-abs-value]], [[lem-of-add-order]], [[lem-of-sign-rules]], [[def-ordered-field]], [[def-complete-ordered-field]], [[def-interval]]). These order-arithmetic facts are stated by their sources for the strict order only; the nonstrict forms used below follow by adjoining the equality case, in which the two sides coincide.

## Proof

**Proof technique:** direct.

1.1 For a real $\sigma > 0$ put $E_\sigma := \{\, x \in [a,b] : \omega_f(x) \ge \sigma \,\}$. By [L5], $E_\sigma \subseteq D$ for every $\sigma > 0$. [L4, L5, construct]

2.1 **Each $E_\sigma$ has content zero, assuming $f$ integrable.** Let $\sigma > 0$ and $\tau > 0$ be real. By [L3] fix a partition $P = (n,t)$ with $U(f,P) - L(f,P) < \sigma\tau \cdot 2^{-1}$. Let $B := \{\, i < n : (t_i,t_{i+1}) \cap E_\sigma \ne \varnothing \,\}$ and put $\chi_i := 1$ for $i \in B$ and $\chi_i := 0$ otherwise. [step 1.1, L3, L14, choose, construct]

2.2 **The exhaustion of $D$.** Put $\sigma_k := 1/\iota(k+1)$ for $k \in \mathbb{N}$, a positive real by [L10]. Then $D = \bigcup_{k \in \mathbb{N}} E_{\sigma_k}$. For the inclusion from left to right, let $x \in D$, so $\omega_f(x) > 0$ by [L5] and $\omega_f(x)$ is a real by [L4]; if $\omega_f(x) \ge 1 = \sigma_0$ then $x \in E_{\sigma_0}$, and otherwise [L10] gives a natural $k+1 \ge 1$ with $1/\iota(k+1) < \omega_f(x)$, so $x \in E_{\sigma_k}$. For the reverse inclusion, $x \in E_{\sigma_k}$ gives $\omega_f(x) \ge \sigma_k > 0$, hence $x \in D$ by [L5]. [step 1.1, L4, L5, L10, L14]

2.3 **The converse; this half of the proof is steps 2.3, 3.2, 4.2, 5.2, 6.2, 7.2, 8.1, 9.1, 10.1, 11.1, 12.1 and 13.1, and its symbols are its own.** Assume $D$ null and let a real $\varepsilon > 0$ be given. Put $\sigma' := \varepsilon \cdot \bigl(2(b-a)\bigr)^{-1}$ and $\tau' := \varepsilon \cdot \bigl(8M_{+}\bigr)^{-1}$, both positive by [L14]. By step 1.1 and [L8], $E_{\sigma'} \subseteq D$ is null. [step 1.1, given, L8, L14]

3.1 For $i \in B$ one has $M_i - m_i \ge \sigma$: fix $x \in (t_i,t_{i+1}) \cap E_\sigma$; since $(t_i,t_{i+1})$ is open there is a real $\rho > 0$ with $N_\rho(x) \subseteq (t_i,t_{i+1})$, so $[a,b] \cap N_\rho(x) \subseteq I_i$ and [L4] gives $\sigma \le \omega_f(x) \le \omega_f([a,b] \cap N_\rho(x)) \le \omega_f(I_i) = M_i - m_i$ by [L2]. [step 2.1, L1, L2, L4, L7, choose]

3.2 $E_{\sigma'}$ is compact: by [L6] there is a closed $G$ with $E_{\sigma'} = [a,b] \cap G$, an intersection of two closed sets, hence closed; and $E_{\sigma'} \subseteq [a,b]$ is bounded. So [L7] applies. [step 2.3, L6, L7]

4.1 Hence $\sigma\chi_i\Delta_i \le (M_i - m_i)\Delta_i$ for every $i < n$, the case $i \notin B$ because both $M_i - m_i \ge 0$ and $\Delta_i > 0$. Summing and using [L12] and [L2]: $\sigma \sum_{i<n}\chi_i\Delta_i \le U(f,P) - L(f,P) < \sigma\tau \cdot 2^{-1}$, so $\lambda := \sum_{i<n}\chi_i\Delta_i < \tau \cdot 2^{-1}$. [step 2.1, step 3.1, L2, L12, L14]

4.2 By [L9] applied to the compact null set $E_{\sigma'}$, it has content zero, so by [L8] there are $m \in \mathbb{N}$ and reals $c_0 \le e_0, \dots, c_m \le e_m$ with $E_{\sigma'} \subseteq \bigcup_{j \le m}[c_j,e_j]$ and $\sum_{j\le m}(e_j-c_j) \le \tau' \cdot 2^{-1}$. Put $\mu := \tau' \cdot \bigl(4(\iota(m)+1)\bigr)^{-1} > 0$ and $O_j := (c_j - \mu,\ e_j + \mu)$, an open interval containing $[c_j,e_j]$, of length $(e_j - c_j) + 2\mu$. Then $\sum_{j\le m}\bigl((e_j-c_j)+2\mu\bigr) \le \tau' \cdot 2^{-1} + 2\mu(\iota(m)+1) = \tau' \cdot 2^{-1} + \tau' \cdot 2^{-1} = \tau'$, by [L12] and [L10]. [step 2.3, step 3.2, L8, L9, L10, L12, L14, construct]

5.1 $E_\sigma$ is covered by the finite list of $2n+1$ closed intervals $[p_j,q_j]$, $j \le 2n$, defined by $[p_j,q_j] := [t_j,t_{j+1}]$ for $j < n$ with $j \in B$, $[p_j,q_j] := [a,a]$ for $j < n$ with $j \notin B$, and $[p_j,q_j] := [t_{j-n},t_{j-n}]$ for $n \le j \le 2n$: indeed a point of $E_\sigma$ lies in $[a,b]$, hence is one of $t_0,\dots,t_n$ or lies in some $(t_i,t_{i+1})$, and in the latter case $i \in B$. Its total length is $\sum_{j \le 2n}(q_j - p_j) = \sum_{i<n}\chi_i\Delta_i + 0 = \lambda < \tau$, by splitting the sum at $n$ ([L12]). [step 2.1, step 4.1, L1, L12, L14, construct]

5.2 **The family of good intervals.** Let $\mathcal{W}$ be the set of all open intervals $(u,v)$ with $u < v$ such that either $(u,v) \subseteq O_j$ for some $j \le m$, or $\omega_f([a,b]\cap(u,v)) < \sigma'$. Every $x \in [a,b]$ lies in a member: if $x \in E_{\sigma'}$ then $x \in [c_j,e_j] \subseteq O_j$ for some $j \le m$ by step 4.2, and $O_j$ is itself a member; and if $x \notin E_{\sigma'}$ then $\omega_f(x) < \sigma'$, so by [L4] some real $\rho > 0$ has $\omega_f([a,b]\cap N_\rho(x)) < \sigma'$, and $N_\rho(x) = (x-\rho,x+\rho)$ is a member containing $x$. [step 4.2, L4, L7, L14, construct]

6.1 As $\tau > 0$ was arbitrary, $E_\sigma$ has content zero by [L8], hence measure zero by [L9]; this used only that $f$ is integrable. [step 2.1, step 5.1, L8, L9]

6.2 **Cousin's construction: a partition each of whose subintervals lies in a member of $\mathcal{W}$.** Let $S$ be the set of $y \in (a,b]$ such that some partition of $[a,y]$ has every subinterval contained in a member of $\mathcal{W}$. $S$ is nonempty: by step 5.2 fix $(\alpha,\beta) \in \mathcal{W}$ with $a \in (\alpha,\beta)$ and put $y_0 := \min\{(a+b)\cdot 2^{-1},\ (a+\beta)\cdot 2^{-1}\}$, so $a < y_0 \le b$, $y_0 < \beta$ and $\alpha < a$; the one-subinterval partition of $[a,y_0]$ has $[a,y_0] \subseteq (\alpha,\beta)$, so $y_0 \in S$. Also $S$ is bounded above by $b$, so $s := \sup S$ exists by [L13] and $a < y_0 \le s \le b$. [step 5.2, L1, L13, L14, choose]

7.1 **Integrability implies $D$ null.** Assume $f$ integrable. By step 6.1 each $E_{\sigma_k}$ is null, and $k \mapsto E_{\sigma_k}$ is a sequence of subsets of $\mathbb{R}$, so [L11] applies and $\bigcup_k E_{\sigma_k} = D$ is null by step 2.2. This is the only use of [A1] in the proof. [step 6.1, step 2.2, A1, L11]

7.2 $s = b$. By step 5.2 fix $(\alpha',\beta') \in \mathcal{W}$ with $s \in (\alpha',\beta')$. Since $\sup S = s > \alpha'$ there is $x \in S$ with $x > \alpha'$, and $x \le s$. Suppose $s < b$ and choose a real $y$ with $s < y < \min\{b, \beta'\}$, possible because $s < b$ and $s < \beta'$. Then $\alpha' < x \le s < y < \beta'$, so $[x,y] \subseteq (\alpha',\beta')$, and appending $y$ to a partition of $[a,x]$ witnessing $x \in S$ gives one for $[a,y]$ by [L1]; hence $y \in S$ with $y > \sup S$, which is impossible. [step 6.2, L1, L13, L14, choose]

8.1 $b \in S$. By step 5.2 fix $(\alpha'',\beta'') \in \mathcal{W}$ with $b \in (\alpha'',\beta'')$. Since $\sup S = b > \alpha''$ there is $x \in S$ with $x > \alpha''$ and $x \le b$. If $x = b$ there is nothing to prove; otherwise $\alpha'' < x < b < \beta''$ gives $[x,b] \subseteq (\alpha'',\beta'')$, and appending $b$ as in step 7.2 puts $b$ in $S$. So there is a partition $P' = (n',t')$ of $[a,b]$, with subintervals $I'_i$ and lengths $\Delta'_i$ for $i < n'$, every subinterval of which lies in a member of $\mathcal{W}$. [step 5.2, step 7.2, L1, L13, L14, choose]

9.1 **Good and bad subintervals.** Write $M'_i := \sup f[I'_i]$ and $m'_i := \inf f[I'_i]$. Call $i < n'$ **good** when $I'_i \subseteq W$ for some $W = (u,v) \in \mathcal{W}$ with $\omega_f([a,b]\cap(u,v)) < \sigma'$, and **bad** otherwise. For a good $i$, $I'_i \subseteq [a,b] \cap W$, so $M'_i - m'_i = \omega_f(I'_i) \le \omega_f([a,b]\cap W) < \sigma'$ by [L2] and [L4]. For a bad $i$, step 8.1 supplies a member containing $I'_i$, and it is not of the second kind, so $I'_i \subseteq O_j$ for some $j \le m$. [step 8.1, L1, L2, L4]

10.1 **Bounding the bad lengths.** For $j \le m$ put $J_j := \{\, i < n' : c_j - \mu \le t'_i \text{ and } t'_{i+1} \le e_j + \mu \,\}$ and $h^{j}_i := \Delta'_i$ for $i \in J_j$, $h^{j}_i := 0$ otherwise; a bad $i$ lies in some $J_j$ by step 9.1. Each $J_j$ consists of consecutive indices, since $i < i^{\dagger} < i^{\ddagger}$ with $i,i^{\ddagger} \in J_j$ gives $c_j - \mu \le t'_i \le t'_{i^{\dagger}}$ and $t'_{i^{\dagger}+1} \le t'_{i^{\ddagger}+1} \le e_j + \mu$. [step 9.1, L1, L14, construct]

11.1 $\sum_{i<n'}h^{j}_i \le (e_j - c_j) + 2\mu$ for each $j \le m$: the sum is $0$ when $J_j = \varnothing$; otherwise let $p := \min J_j$ and let $q$ be the least natural with $q > p$ and $q \notin J_j$, which exists by [L13] since $n' \notin J_j$, so that $J_j = \{\, i : p \le i < q \,\}$ by step 10.1. Splitting the sum at $p$ and at $q$ and discarding the vanishing outer parts, then telescoping ([L12]), gives $\sum_{i<n'}h^{j}_i = \sum_{i=p}^{q-1}\Delta'_i = t'_q - t'_p \le (e_j+\mu) - (c_j-\mu)$, using $p \in J_j$ and $q-1 \in J_j$. [step 10.1, L12, L13, L14]

12.1 Put $\beta_i := \Delta'_i$ for bad $i$ and $\beta_i := 0$ for good $i$. Then $\beta_i \le \sum_{j \le m}h^{j}_i$ pointwise by step 10.1, all terms being nonnegative, so by [L12] and step 11.1, $\sum_{i<n'}\beta_i \le \sum_{j\le m}\sum_{i<n'}h^{j}_i \le \sum_{j\le m}\bigl((e_j-c_j)+2\mu\bigr) \le \tau'$, the last step by step 4.2. [step 4.2, step 10.1, step 11.1, L12, L14]

13.1 For every $i < n'$, $(M'_i-m'_i)\Delta'_i \le \sigma'\Delta'_i + 2M_{+}\beta_i$: for good $i$ by step 9.1 and $\beta_i \ge 0$, for bad $i$ by $M'_i - m'_i \le 2M_{+}$ from [L2] and $\beta_i = \Delta'_i$. Summing over $i < n'$ and using [L12], [L1] and step 12.1: $U(f,P')-L(f,P') \le \sigma'(b-a) + 2M_{+}\tau' = \varepsilon\cdot 2^{-1} + \varepsilon \cdot 4^{-1} < \varepsilon$. [step 2.3, step 9.1, step 12.1, L1, L2, L12, L14]

14.1 The real $\varepsilon > 0$ of step 2.3 was arbitrary and step 13.1 produced a partition with $U - L < \varepsilon$, so $f$ is integrable by [L3]. With step 7.1 this proves both implications, and the criterion is established; the forward half is steps 1.1, 2.1, 2.2, 3.1, 4.1, 5.1, 6.1 and 7.1, working with $\sigma, \tau, P, B, \chi, \lambda$, and the converse half is the steps named in step 2.3, working with $\sigma', \tau', P', \mathcal{W}, S$. [step 7.1, step 2.3, step 13.1, L3] ∎

## Remarks

- **What the two halves cost.** The forward half is a single application of Riemann's criterion for each threshold $\sigma$, plus the countable union; the backward half is where all the work is, and it is entirely a covering argument: the bad set is compact and null, hence of content zero, hence coverable by finitely many open intervals of small total length, and the rest of $[a,b]$ is chopped up by Cousin's construction into pieces of oscillation below $\sigma$.

- **Why Cousin's construction and not a Lebesgue number.** Step 6.2 to step 8.1 build the partition directly from the completeness of $\mathbb{R}$: the set of right endpoints reachable by a good partition is nonempty and bounded, and its supremum is shown to be $b$ and to be attained. This uses no sequence, no subsequence and no choice, whereas the usual Lebesgue-number argument selects a bad interval for each $n$ and then extracts a convergent subsequence, which costs countable choice. Since the whole point of this item's choice ledger is that the backward implication is a ZF theorem, the choice-free route is the one taken.

- **The superlevel sets, not the discontinuity set, are what is covered.** $D$ itself is in general not closed, so [[thm-compact-null-is-content-zero]] does not apply to it; each $E_\sigma$ **is** closed in $[a,b]$ ([[lem-oscillation-superlevel-sets-are-closed]]) and bounded, and that is exactly the hypothesis needed. The passage back from the $E_{\sigma_k}$ to $D$ is step 2.2, and it is where the countable union appears.

- **The exhaustion $D = \bigcup_k E_{1/\iota(k+1)}$ is derived here, and it is also claim 1 of [[thm-discontinuity-set-is-f-sigma]].** When this proof was written that theorem stated only the descriptive form — $D$ as the trace on the domain of an $F_\sigma$ subset of $\mathbb{R}$ — which is not the pointwise identity step 2.2 needs, so the identity was derived inline from [[thm-continuity-iff-oscillation-zero]] and the Archimedean property. The exhaustion has since been stated there as claim 1, precisely because several items were quoting it from a theorem that did not assert it. The inline derivation is retained because it is three lines and keeps this item's choice ledger readable in one place; citing claim 1 instead would be equally correct.

- **Both directions are sharp in the obvious sense.** The indicator of the Cantor set is discontinuous on an uncountable null set and is integrable; the indicator of the Smith-Volterra-Cantor set is discontinuous on a nowhere dense set that is not null and is not integrable ([[fs-integrability-is-equivalent-to-a-nowhere-dense-discontinuity-set]]). So neither cardinality nor category decides integrability; only measure does.
````

### `thm-second-mean-value-theorem-for-integrals`

````markdown
---
id: thm-second-mean-value-theorem-for-integrals
kind: theorem
title: "Bonnet's second mean value theorem: for $f$ monotone and $g$ integrable on $[a,b]$ there is $\\xi\\in[a,b]$ with $\\int_a^b fg = f(a)\\int_a^\\xi g + f(b)\\int_\\xi^b g$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-monotone-implies-integrable, cor-integrability-of-absolute-values-products-and-lattice-operations, thm-the-integral-function-is-lipschitz, def-the-integral-function, lem-abel-summation-by-parts, thm-riemann-criterion, thm-extreme-value-r, thm-heine-borel-r, def-open-cover-r, cor-continuous-image-of-an-interval-is-an-interval, thm-additivity-over-subintervals, thm-linearity-of-the-integral, thm-monotonicity-of-the-integral, lem-integral-elementary-bounds, def-monotone-function, lem-finite-sum-laws, def-finite-sum, def-series, def-oriented-integral, def-partition-and-refinement, def-darboux-sums, def-darboux-integral, def-continuity-real, def-max-min, def-interval, def-bounded-set, lem-of-abs-value, def-abs-value, def-ordered-field, def-complete-ordered-field]
justified_by: []
aliases: [thm-bonnet-second-mean-value-theorem]
landmark: true
short: "second mean value theorem (Bonnet)"
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
    - title: "Mean value theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Mean_value_theorem"
    - title: "Summation by parts (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Summation_by_parts"
    - title: "Encyclopedia of Mathematics, Lebesgue integral"
      url: "https://encyclopediaofmath.org/wiki/Lebesgue_integral"
pipeline_run: null
---

## Statement

Let $a < b$ be reals, let $f : [a,b] \to \mathbb{R}$ be monotone, that is
nondecreasing or nonincreasing ([[def-monotone-function]]), and let
$g : [a,b] \to \mathbb{R}$ be integrable ([[def-darboux-integral]]). Then $fg$ is
integrable and there is $\xi \in [a,b]$ with

$$\int_a^b f\,g \;=\; f(a)\int_a^{\xi} g \;+\; f(b)\int_{\xi}^{b} g .$$

**No differentiability and no continuity of $f$ is assumed.** A monotone function
may be discontinuous at infinitely many points and is still integrable
([[thm-monotone-implies-integrable]]), and the proof below uses only that its
increments over the subintervals of a partition all have the same sign. This is
the general form; the version usually proved by integration by parts needs $f$
continuously differentiable, which is a strictly stronger hypothesis.

## Facts & Assumptions

**Given:** Reals $a<b$, a monotone $f : [a,b] \to \mathbb{R}$, an integrable $g : [a,b] \to \mathbb{R}$, and a real $\varepsilon > 0$. Write $G(x) := \int_a^x g$ for the integral function of $g$, and fix a real $K \ge 0$ with $|g(t)| \le K$ for every $t \in [a,b]$.

[L1] A monotone function on $[a,b]$ is bounded and integrable there ([[thm-monotone-implies-integrable]], [[def-monotone-function]], [[def-bounded-set]]); an integrable function is bounded, so $K$ exists ([[def-darboux-sums]]).

[L2] Products of integrable functions are integrable, as are absolute values, and $\bigl|\int_p^q u\bigr| \le \int_p^q |u|$ for $p \le q$ ([[cor-integrability-of-absolute-values-products-and-lattice-operations]]).

[L3] $G$ is defined on $[a,b]$, $G(a) = 0$, $G(y)-G(x) = \int_x^y g$ for all $x,y \in [a,b]$ in either order, and $G$ is continuous on $[a,b]$ ([[def-the-integral-function]], [[thm-the-integral-function-is-lipschitz]], [[thm-additivity-over-subintervals]], [[def-oriented-integral]], [[def-continuity-real]]).

[L4] $[a,b]$ is compact and nonempty, so a continuous real function on it attains a minimum and a maximum, and its image is exactly the closed interval between them ([[thm-heine-borel-r]], [[def-open-cover-r]], [[thm-extreme-value-r]], [[cor-continuous-image-of-an-interval-is-an-interval]], [[def-max-min]], [[def-interval]]).

[L5] Abel summation by parts: with $A_j = \sum_{k<j}\alpha_k$, for every $n \ge 1$ one has $\sum_{k<n}\alpha_k\beta_k = A_n\beta_{n-1} - \sum_{k<n-1}A_{k+1}(\beta_{k+1}-\beta_k)$ ([[lem-abel-summation-by-parts]], [[def-series]]).

[L6] Finite sums: additivity, scaling, splitting with the shift $\sum_{k=p}^{q-1}x_k = \sum_{j<q-p}x_{p+j}$, monotonicity in the terms, and telescoping $\sum_{k<n}(c_{k+1}-c_k) = c_n - c_0$ ([[def-finite-sum]], [[lem-finite-sum-laws]]).

[L7] For a partition $P = (n,t)$ of $[a,b]$: $n \ge 1$, $t_0 = a$, $t_k = b$ for $k \ge n$, $\Delta_i = t_{i+1}-t_i > 0$ for $i<n$, $I_i = [t_i,t_{i+1}] \subseteq [a,b]$, and $U(f,P)-L(f,P) = \sum_{i<n}(M_i-m_i)\Delta_i$ with $m_i \le f(x) \le M_i$ for $x \in I_i$ ([[def-partition-and-refinement]], [[def-darboux-sums]]).

[L8] Riemann's criterion for the integrable $f$: for every real $\eta>0$ there is a partition $P$ with $U(f,P)-L(f,P) < \eta$ ([[thm-riemann-criterion]]).

[L9] Linearity and monotonicity of the integral, and $\int_p^q c = c(q-p)$ for a constant ([[thm-linearity-of-the-integral]], [[thm-monotonicity-of-the-integral]], [[lem-integral-elementary-bounds]]).

[L10] Absolute value and ordered-field arithmetic: $-c \le x \le c$ is equivalent to $|x| \le c$, multiplying an inequality by a positive real preserves it and by a negative real reverses it, the order is total and transitive, and a real that is $\le M + \eta$ for every real $\eta>0$ is $\le M$ ([[lem-of-abs-value]], [[def-abs-value]], [[def-ordered-field]], [[def-complete-ordered-field]]).

## Proof

**Proof technique:** direct.

1.1 $f$ is bounded and integrable by [L1], so $fg$ is integrable by [L2]; put $\Psi(x) := \int_a^x fg$, so $\Psi(b) = \int_a^b fg$ and $\Psi(y)-\Psi(x) = \int_x^y fg$ by [L3] applied to $fg$. [given, L1, L2, L3]

1.2 $G$ is continuous on $[a,b]$, so by [L4] there are $m \le M$ with $G[\,[a,b]\,] = [m,M]$, $m = \min G[\,[a,b]\,]$ and $M = \max G[\,[a,b]\,]$. [L3, L4, choose]

1.3 Put $C := f(b) - f(a)$ and, for a partition $P=(n,t)$ of $[a,b]$, put $d_j := f(t_{j+1}) - f(t_j)$ for $j < n$. By [L6], $\sum_{j<n} d_j = f(t_n)-f(t_0) = C$; and all the $d_j$ are $\ge 0$ when $f$ is nondecreasing and all are $\le 0$ when $f$ is nonincreasing, by [L7] and [[def-monotone-function]]. [given, L6, L7, construct]

2.1 **The case $C = 0$.** Then $f(a) = f(b)$, and monotonicity forces $f(x) = f(a)$ for every $x \in [a,b]$, since $f(x)$ lies between $f(a)$ and $f(b)$; so $\int_a^b fg = f(a)\int_a^b g$ by [L9], while the right-hand side at $\xi := a$ is $f(a)\cdot 0 + f(b)\int_a^b g = f(a)\int_a^b g$ by [L3]. The theorem holds with $\xi = a$. [step 1.1, step 1.3, L3, L9, L10]

2.2 **Abel summation on a partition.** Let $P = (n,t)$ be any partition of $[a,b]$. Apply [L5] with $\alpha_k := G(t_{k+1})-G(t_k)$ and $\beta_k := f(t_{k+1})$, noting $t_k \in [a,b]$ for every $k \in \mathbb{N}$ by [L7]. By [L6], $A_j = \sum_{k<j}\bigl(G(t_{k+1})-G(t_k)\bigr) = G(t_j) - G(t_0) = G(t_j)$, since $G(a) = 0$. [step 1.2, L3, L5, L6, L7]

2.3 **$S(P)$ approximates $\int_a^b fg$.** For $k<n$ one has $G(t_{k+1})-G(t_k) = \int_{t_k}^{t_{k+1}}g$ by [L3], so by [L9] the $k$-th term of $\Psi(t_{k+1})-\Psi(t_k) - f(t_{k+1})\bigl(G(t_{k+1})-G(t_k)\bigr)$ equals $\int_{t_k}^{t_{k+1}}\bigl(f - f(t_{k+1})\bigr)g$. [step 1.1, L3, L9]

3.1 So, writing $S(P) := \sum_{k<n}\bigl(G(t_{k+1})-G(t_k)\bigr)f(t_{k+1})$, [L5] gives $S(P) = G(t_n)f(t_n) - \sum_{k<n-1}G(t_{k+1})\bigl(f(t_{k+2})-f(t_{k+1})\bigr) = G(b)f(b) - \sum_{k<n-1}x_{k+1}$, where $x_j := G(t_j)\,d_j$. [step 2.2, L5, L7, construct]

3.2 For $x \in I_k$ both $f(x)$ and $f(t_{k+1})$ lie in $[m_k,M_k]$, so $\bigl|\bigl(f(x)-f(t_{k+1})\bigr)g(x)\bigr| \le K\,(M_k-m_k)$; hence by [L2] and [L9], $-K(M_k-m_k)\Delta_k \le \int_{t_k}^{t_{k+1}}\bigl(f-f(t_{k+1})\bigr)g \le K(M_k-m_k)\Delta_k$. [step 2.3, given, L2, L7, L9, L10]

4.1 By [L6], $\sum_{j<n}x_j = x_0 + \sum_{k<n-1}x_{k+1}$, and $x_0 = G(t_0)d_0 = G(a)d_0 = 0$; so, putting $T(P) := \sum_{j<n}G(t_j)\,d_j$, step 3.1 reads $S(P) = G(b)f(b) - T(P)$. [step 3.1, L3, L6, construct]

4.2 Summing over $k<n$ with [L6], and telescoping $\sum_{k<n}\bigl(\Psi(t_{k+1})-\Psi(t_k)\bigr) = \Psi(b)-\Psi(a) = \int_a^b fg$, gives $\bigl|\int_a^b fg - S(P)\bigr| \le K\bigl(U(f,P)-L(f,P)\bigr)$. [step 1.1, step 2.3, step 3.2, L6, L7, L10]

5.1 **$T(P)$ is $\lambda_P C$ for some $\lambda_P \in [m,M]$, when $C \ne 0$.** By step 1.2, $m \le G(t_j) \le M$ for every $j$. If $f$ is nondecreasing then $d_j \ge 0$, so $m\,d_j \le G(t_j)d_j \le M\,d_j$, and summing with [L6] and step 1.3 gives $mC \le T(P) \le MC$ with $C \ge 0$; if $f$ is nonincreasing then $d_j \le 0$, so $M\,d_j \le G(t_j)d_j \le m\,d_j$, and summing gives $MC \le T(P) \le mC$ with $C \le 0$. Dividing by $C$ in the first case, and by the negative $C$ with the inequalities reversed in the second, gives $m \le T(P)/C \le M$ in both. [step 1.2, step 1.3, step 4.1, L6, L10, construct]

6.1 **The case $C \ne 0$.** Put $\lambda := \bigl(G(b)f(b) - \int_a^b fg\bigr)/C$. By step 4.1, $\int_a^b fg - S(P) = \int_a^b fg - G(b)f(b) + T(P) = \bigl(\lambda_P - \lambda\bigr)C$ for every partition $P$, where $\lambda_P = T(P)/C$. [step 4.1, step 5.1, L10, construct]

7.1 By [L8] fix a partition $P$ with $U(f,P)-L(f,P) < \varepsilon\,|C|/(K+1)$, a positive real; then step 4.2 and step 6.1 give $|\lambda_P - \lambda|\,|C| \le K\bigl(U(f,P)-L(f,P)\bigr) < \varepsilon|C|$, so $|\lambda_P - \lambda| < \varepsilon$. [step 4.2, step 6.1, L8, L10, choose]

8.1 Since $m \le \lambda_P \le M$ by step 5.1, it follows that $m - \varepsilon < \lambda < M + \varepsilon$; as $\varepsilon > 0$ was arbitrary, $m \le \lambda \le M$. [step 5.1, step 7.1, L10]

9.1 By step 1.2, $G[\,[a,b]\,] = [m,M]$, so there is $\xi \in [a,b]$ with $G(\xi) = \lambda$. [step 1.2, step 8.1, L4, choose]

10.1 Then $\int_a^b fg = G(b)f(b) - \lambda C = f(b)G(b) - G(\xi)\bigl(f(b)-f(a)\bigr) = f(a)G(\xi) + f(b)\bigl(G(b)-G(\xi)\bigr)$, and $G(\xi) = \int_a^{\xi}g$ with $G(b)-G(\xi) = \int_{\xi}^{b} g$ by [L3]; this is the stated identity. [step 6.1, step 9.1, L3, algebra]

11.1 The cases $C = 0$ and $C \ne 0$ are exhaustive, so the theorem holds in both. [step 2.1, step 10.1, L10] ∎

## Remarks

- **The published summation-by-parts lemma was matched to its own indexing before it was used.** [[lem-abel-summation-by-parts]] reads $\sum_{k<n}\alpha_k\beta_k = A_n\beta_{n-1} - \sum_{k<n-1}A_{k+1}(\beta_{k+1}-\beta_k)$ with $A_j = \sum_{k<j}\alpha_k$, so $A_0 = 0$ and the boundary value is $\beta_{n-1}$, not $\beta_n$. Taking $\beta_k := f(t_{k+1})$ rather than $f(t_k)$ is what makes that boundary value $f(t_n) = f(b)$; and the shifted sum on the right is a sum over $j = 1, \dots, n-1$ whose missing $j = 0$ term is $G(t_0)d_0 = 0$, because the integral function vanishes at its base point. Both observations are step 3.1 and step 4.1, and the theorem would be off by a term without either.

- **The passage to the limit is an estimate, not a Riemann-sum convergence theorem.** Step 4.2 bounds $\bigl|\int_a^b fg - S(P)\bigr|$ by $K\bigl(U(f,P)-L(f,P)\bigr)$ for *every* partition, and the integrability of $f$ alone drives the right-hand side to $0$. No tagged partition, no mesh condition and no appeal to [[thm-darboux-equals-riemann]] is involved, and the approximating sums are not Riemann sums of $fg$.

- **What is not proved here.** Nothing is claimed about $\xi$ lying in the open interval, and nothing about the sharper form in which $f$ is assumed nonnegative and nonincreasing, where the conclusion becomes $\int_a^b fg = f(a)\int_a^{\xi}g$. That refinement needs the one-sided normalisation of $f$ at $a$ and is not used anywhere on this page.
````

### `thm-substitution`

````markdown
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
````

