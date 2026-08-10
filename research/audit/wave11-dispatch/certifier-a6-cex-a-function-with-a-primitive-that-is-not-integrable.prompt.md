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

## Assigned exact-final target — `cex-a-function-with-a-primitive-that-is-not-integrable`

Item path: `items/cex-a-function-with-a-primitive-that-is-not-integrable.md`

Normalized final-text SHA-256 at dispatch: `584d5df7391f997c9c491a73e856b94feed33651d87655427359e679acc5c0b3`

Target type: `item-source-repair`

- A6 generated-risk retag to source-backed ai-altered/semantic-source

Read the complete current item and every exact dependency needed for the changed inference or source attribution. For source work, open the exact final URL(s) with web access and compare the source claim to the current provenance rationale and public Statement.

Current generated-manifest rows (completeness checklist only):

```json
[
  {
    "source": "cex-a-function-with-a-primitive-that-is-not-integrable",
    "sourcePage": "properties-of-the-integral-and-the-working-ftc-examples",
    "batch": "wave11-real-analysis",
    "target": "def-derivative",
    "declared_target": "def-derivative",
    "target_statement_provenance": "ai-altered",
    "targetPage": "the-derivative-and-mean-value-theorems",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-a-function-with-a-primitive-that-is-not-integrable",
    "sourcePage": "properties-of-the-integral-and-the-working-ftc-examples",
    "batch": "wave11-real-analysis",
    "target": "thm-algebra-of-derivatives",
    "declared_target": "thm-algebra-of-derivatives",
    "target_statement_provenance": "literature-derived",
    "targetPage": "the-derivative-and-mean-value-theorems",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-a-function-with-a-primitive-that-is-not-integrable",
    "sourcePage": "properties-of-the-integral-and-the-working-ftc-examples",
    "batch": "wave11-real-analysis",
    "target": "thm-chain-rule",
    "declared_target": "thm-chain-rule",
    "target_statement_provenance": "literature-derived",
    "targetPage": "the-derivative-and-mean-value-theorems",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-a-function-with-a-primitive-that-is-not-integrable",
    "sourcePage": "properties-of-the-integral-and-the-working-ftc-examples",
    "batch": "wave11-real-analysis",
    "target": "lem-derivative-of-a-power",
    "declared_target": "lem-derivative-of-a-power",
    "target_statement_provenance": "ai-altered",
    "targetPage": "the-derivative-and-mean-value-theorems",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-a-function-with-a-primitive-that-is-not-integrable",
    "sourcePage": "properties-of-the-integral-and-the-working-ftc-examples",
    "batch": "wave11-real-analysis",
    "target": "thm-algebra-of-continuous-functions",
    "declared_target": "thm-algebra-of-continuous-functions",
    "target_statement_provenance": "ai-altered",
    "targetPage": "continuity-ivt-evt-and-uniform-continuity",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-a-function-with-a-primitive-that-is-not-integrable",
    "sourcePage": "properties-of-the-integral-and-the-working-ftc-examples",
    "batch": "wave11-real-analysis",
    "target": "thm-two-sided-limit-iff-both-one-sided",
    "declared_target": "thm-two-sided-limit-iff-both-one-sided",
    "target_statement_provenance": "literature-derived",
    "targetPage": "limits-of-real-functions",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-a-function-with-a-primitive-that-is-not-integrable",
    "sourcePage": "properties-of-the-integral-and-the-working-ftc-examples",
    "batch": "wave11-real-analysis",
    "target": "def-one-sided-limits",
    "declared_target": "def-one-sided-limits",
    "target_statement_provenance": "ai-altered",
    "targetPage": "limits-of-real-functions",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-a-function-with-a-primitive-that-is-not-integrable",
    "sourcePage": "properties-of-the-integral-and-the-working-ftc-examples",
    "batch": "wave11-real-analysis",
    "target": "def-function-limit",
    "declared_target": "def-function-limit",
    "target_statement_provenance": "literature-derived",
    "targetPage": "limits-of-real-functions",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-a-function-with-a-primitive-that-is-not-integrable",
    "sourcePage": "properties-of-the-integral-and-the-working-ftc-examples",
    "batch": "wave11-real-analysis",
    "target": "lem-limit-is-local",
    "declared_target": "lem-limit-is-local",
    "target_statement_provenance": "ai-altered",
    "targetPage": "limits-of-real-functions",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-a-function-with-a-primitive-that-is-not-integrable",
    "sourcePage": "properties-of-the-integral-and-the-working-ftc-examples",
    "batch": "wave11-real-analysis",
    "target": "def-darboux-sums",
    "declared_target": "def-darboux-sums",
    "target_statement_provenance": "ai-altered",
    "targetPage": "the-riemann-integral",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-a-function-with-a-primitive-that-is-not-integrable",
    "sourcePage": "properties-of-the-integral-and-the-working-ftc-examples",
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
    "source": "cex-a-function-with-a-primitive-that-is-not-integrable",
    "sourcePage": "properties-of-the-integral-and-the-working-ftc-examples",
    "batch": "wave11-real-analysis",
    "target": "def-bounded-set",
    "declared_target": "def-bounded-set",
    "target_statement_provenance": "literature-derived",
    "targetPage": "suprema-and-infima",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-a-function-with-a-primitive-that-is-not-integrable",
    "sourcePage": "properties-of-the-integral-and-the-working-ftc-examples",
    "batch": "wave11-real-analysis",
    "target": "def-integer-power",
    "declared_target": "def-integer-power",
    "target_statement_provenance": "ai-altered",
    "targetPage": "roots-and-rational-powers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-a-function-with-a-primitive-that-is-not-integrable",
    "sourcePage": "properties-of-the-integral-and-the-working-ftc-examples",
    "batch": "wave11-real-analysis",
    "target": "lem-power-monotone",
    "declared_target": "lem-power-monotone",
    "target_statement_provenance": "ai-altered",
    "targetPage": "roots-and-rational-powers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-a-function-with-a-primitive-that-is-not-integrable",
    "sourcePage": "properties-of-the-integral-and-the-working-ftc-examples",
    "batch": "wave11-real-analysis",
    "target": "def-canonical-natural",
    "declared_target": "def-canonical-natural",
    "target_statement_provenance": "ai-altered",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-a-function-with-a-primitive-that-is-not-integrable",
    "sourcePage": "properties-of-the-integral-and-the-working-ftc-examples",
    "batch": "wave11-real-analysis",
    "target": "lem-of-naturals-positive",
    "declared_target": "lem-of-naturals-positive",
    "target_statement_provenance": "ai-altered",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-a-function-with-a-primitive-that-is-not-integrable",
    "sourcePage": "properties-of-the-integral-and-the-working-ftc-examples",
    "batch": "wave11-real-analysis",
    "target": "thm-of-archimedean",
    "declared_target": "thm-of-archimedean",
    "target_statement_provenance": "literature-derived",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-a-function-with-a-primitive-that-is-not-integrable",
    "sourcePage": "properties-of-the-integral-and-the-working-ftc-examples",
    "batch": "wave11-real-analysis",
    "target": "cor-archimedean-reciprocal",
    "declared_target": "cor-archimedean-reciprocal",
    "target_statement_provenance": "ai-altered",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-a-function-with-a-primitive-that-is-not-integrable",
    "sourcePage": "properties-of-the-integral-and-the-working-ftc-examples",
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
    "source": "cex-a-function-with-a-primitive-that-is-not-integrable",
    "sourcePage": "properties-of-the-integral-and-the-working-ftc-examples",
    "batch": "wave11-real-analysis",
    "target": "def-max-min",
    "declared_target": "def-max-min",
    "target_statement_provenance": "ai-altered",
    "targetPage": "suprema-and-infima",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-a-function-with-a-primitive-that-is-not-integrable",
    "sourcePage": "properties-of-the-integral-and-the-working-ftc-examples",
    "batch": "wave11-real-analysis",
    "target": "lem-finite-set-has-max",
    "declared_target": "lem-finite-set-has-max",
    "target_statement_provenance": "ai-altered",
    "targetPage": "suprema-and-infima",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-a-function-with-a-primitive-that-is-not-integrable",
    "sourcePage": "properties-of-the-integral-and-the-working-ftc-examples",
    "batch": "wave11-real-analysis",
    "target": "def-interval",
    "declared_target": "def-interval",
    "target_statement_provenance": "ai-altered",
    "targetPage": "monotone-sequences-and-cauchy-completeness",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-a-function-with-a-primitive-that-is-not-integrable",
    "sourcePage": "properties-of-the-integral-and-the-working-ftc-examples",
    "batch": "wave11-real-analysis",
    "target": "def-limit-point-r",
    "declared_target": "def-limit-point-r",
    "target_statement_provenance": "ai-altered",
    "targetPage": "topology-of-r",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-a-function-with-a-primitive-that-is-not-integrable",
    "sourcePage": "properties-of-the-integral-and-the-working-ftc-examples",
    "batch": "wave11-real-analysis",
    "target": "def-ordered-field",
    "declared_target": "def-ordered-field",
    "target_statement_provenance": "ai-altered",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-a-function-with-a-primitive-that-is-not-integrable",
    "sourcePage": "properties-of-the-integral-and-the-working-ftc-examples",
    "batch": "wave11-real-analysis",
    "target": "def-complete-ordered-field",
    "declared_target": "def-complete-ordered-field",
    "target_statement_provenance": "literature-derived",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  }
]
```

Current provenance row:

```json
{
  "id": "cex-a-function-with-a-primitive-that-is-not-integrable",
  "statement": "ai-altered",
  "proof": "ai-generated",
  "evidence": "semantic-source",
  "urls": [
    "https://people.math.sc.edu/girardi/m555/10S/diff-counterexs.pdf"
  ],
  "rationale": "Olmsted's university-hosted differentiation counterexamples give the classical function x^2 sin(1/x^2), differentiable on a closed interval with an explicitly unbounded derivative. The published item names that classical witness and replaces its trigonometric oscillations by disjoint quartic bumps because trigonometric functions occur later in the library. The exact polynomial realization and its seam proof are local, but the mathematical counterexample is a recoverable source-backed alteration rather than an invented proposition.",
  "alpha_concurred": false,
  "at": "2026-08-10"
}
```

Exact current item at dispatch:

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
