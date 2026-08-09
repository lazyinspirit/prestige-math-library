## Assigned repair — `ex-rational-function-field-order`

Item path: `items/ex-rational-function-field-order.md`

Normalized final-text SHA-256 at dispatch: `9cdd2dabbcf8367cedd558f4fd65d2f6f98bf138c6791387583408e50625683c`

Split reasons: ["body text"]

Provenance ledger: `wave7-real-analysis-completeness-limits.provenance.jsonl`

The four Wave 7 findings ledgers on disk record the original defect and Beta's repair. Locate this id there before certifying.

Read the current target from disk and every dependency needed to check the repair. The generated manifest rows are supplied only as a completeness checklist:

```json
[
  {
    "source": "ex-rational-function-field-order",
    "sourcePage": "equivalent-forms-of-completeness-examples",
    "batch": "wave7-real-analysis-completeness-limits",
    "target": "cex-ordered-field-not-archimedean",
    "declared_target": "cex-ordered-field-not-archimedean",
    "target_statement_provenance": "literature-derived",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-rational-function-field-order",
    "sourcePage": "equivalent-forms-of-completeness-examples",
    "batch": "wave7-real-analysis-completeness-limits",
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
    "source": "ex-rational-function-field-order",
    "sourcePage": "equivalent-forms-of-completeness-examples",
    "batch": "wave7-real-analysis-completeness-limits",
    "target": "def-field",
    "declared_target": "def-field",
    "target_statement_provenance": "ai-altered",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-rational-function-field-order",
    "sourcePage": "equivalent-forms-of-completeness-examples",
    "batch": "wave7-real-analysis-completeness-limits",
    "target": "def-archimedean-field",
    "declared_target": "def-archimedean-field",
    "target_statement_provenance": "ai-altered",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-rational-function-field-order",
    "sourcePage": "equivalent-forms-of-completeness-examples",
    "batch": "wave7-real-analysis-completeness-limits",
    "target": "lem-of-square-positive",
    "declared_target": "lem-of-square-positive",
    "target_statement_provenance": "literature-derived",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-rational-function-field-order",
    "sourcePage": "equivalent-forms-of-completeness-examples",
    "batch": "wave7-real-analysis-completeness-limits",
    "target": "lem-of-sign-rules",
    "declared_target": "lem-of-sign-rules",
    "target_statement_provenance": "ai-altered",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-rational-function-field-order",
    "sourcePage": "equivalent-forms-of-completeness-examples",
    "batch": "wave7-real-analysis-completeness-limits",
    "target": "lem-of-inverse-positive",
    "declared_target": "lem-of-inverse-positive",
    "target_statement_provenance": "ai-altered",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-rational-function-field-order",
    "sourcePage": "equivalent-forms-of-completeness-examples",
    "batch": "wave7-real-analysis-completeness-limits",
    "target": "lem-of-q-embeds",
    "declared_target": "lem-of-q-embeds",
    "target_statement_provenance": "ai-altered",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-rational-function-field-order",
    "sourcePage": "equivalent-forms-of-completeness-examples",
    "batch": "wave7-real-analysis-completeness-limits",
    "target": "thm-reals-ordered-field",
    "declared_target": "thm-reals-ordered-field",
    "target_statement_provenance": "ai-altered",
    "targetPage": "construction-of-r-via-cauchy-sequences",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  }
]
```

For a byte-exact cross-check, the current item at dispatch was:

````markdown
---
id: ex-rational-function-field-order
kind: example
title: "The rational function field $\\mathbb{R}(t)$ ordered by the eventual sign is an ordered field, worked out"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [cex-ordered-field-not-archimedean, def-ordered-field, def-field, def-archimedean-field, lem-of-square-positive, lem-of-sign-rules, lem-of-inverse-positive, lem-of-q-embeds, thm-reals-ordered-field]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "D. J. Eck, Axioms for the Real Numbers"
      url: "https://math.hws.edu/eck/math331/guide2020/04-axioms-for-R.html"
    - title: "Ordered field (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Ordered_field"
    - title: "Field of fractions (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Field_of_fractions"
    - title: "Archimedean property (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Archimedean_property"
pipeline_run: null
---

## Example

Let $\mathbb{R}(t)$ be the field of fractions of the polynomial ring
$\mathbb{R}[t]$, and let

$$P \;=\; \{\, f \in \mathbb{R}(t) : f \ne 0 \text{ and } f(x) > 0 \text{ for all sufficiently large real } x \,\}.$$

[[cex-ordered-field-not-archimedean]] proves that $(\mathbb{R}(t), P)$ is an
ordered field and that it is not Archimedean. This example works the order out
in usable form. Three things are established below:

1. **A computation rule.** For $f = p/q$ with $p, q \in \mathbb{R}[t]$ nonzero,
   $f \in P$ exactly when $\operatorname{lc}(p)\operatorname{lc}(q) > 0$, where
   $\operatorname{lc}$ is the leading coefficient. So comparing two rational
   functions is comparing one product of two real numbers.
2. **That the rule is independent of the representative** $p/q$ chosen, which is
   what makes it a definition of a function on $\mathbb{R}(t)$ and not merely on
   pairs.
3. **The two elements that make the field interesting**: $t$, which exceeds
   every canonical natural, and $1/t$, which is positive and lies below every
   positive rational. An element of the second kind is called an
   *infinitesimal*, and its existence is exactly the failure of the Archimedean
   property ([[def-archimedean-field]]).

## Facts & Assumptions

**Given:** The field $\mathbb{R}(t)$ of fractions of $\mathbb{R}[t]$, whose elements are written $p/q$ with $p, q \in \mathbb{R}[t]$ and $q \ne 0$, with $p/q = p'/q'$ exactly when $pq' = p'q$; and the set $P$ above. For a nonzero $p \in \mathbb{R}[t]$, $\operatorname{lc}(p)$ denotes its leading coefficient.

[L1] $(\mathbb{R}(t), P)$ is an ordered field, and $n \cdot 1 < t$ for every natural $n$, so it is not Archimedean ([[cex-ordered-field-not-archimedean]], [[def-ordered-field]], [[def-archimedean-field]]).

[L2] A nonzero real polynomial has finitely many real roots, and beyond all of them its values have the constant sign of its leading coefficient; $\mathbb{R}[t]$ is an integral domain, so $\operatorname{lc}(pq) = \operatorname{lc}(p)\operatorname{lc}(q)$ and a product of nonzero polynomials is nonzero ([[cex-ordered-field-not-archimedean]], [[thm-reals-ordered-field]], [[def-field]]).

[L3] In $\mathbb{R}$, a nonzero square is positive ([[lem-of-square-positive]]); a product of two nonzero reals is positive exactly when both are positive or both are negative ([[lem-of-sign-rules]]).

[L4] In an ordered field, $f < g$ means $g - f \in P$; a positive element has a positive inverse ([[lem-of-inverse-positive]], [[def-ordered-field]]).

[L5] The canonical embedding of $\mathbb{Q}$ into an ordered field is an order embedding, so a rational $q > 0$ names a positive element $q \cdot 1$ of $\mathbb{R}(t)$ ([[lem-of-q-embeds]]).

## Verification

**Proof technique:** direct.

1.1 For nonzero $p, q \in \mathbb{R}[t]$ there is a real $X$ beyond which neither $p$ nor $q$ vanishes, so $f = p/q$ has a value $f(x) = p(x)/q(x)$ for every $x > X$, and the sign of that value is the sign of $\operatorname{lc}(p)\operatorname{lc}(q)$; hence $f \in P$ exactly when $\operatorname{lc}(p)\operatorname{lc}(q) > 0$. [L2, L3]

1.2 If $p/q = p'/q'$ then $pq' = p'q$, so $\operatorname{lc}(p)\operatorname{lc}(q') = \operatorname{lc}(p')\operatorname{lc}(q)$; multiplying both sides by $\operatorname{lc}(q)\operatorname{lc}(q')$ gives $\operatorname{lc}(p)\operatorname{lc}(q)\cdot\operatorname{lc}(q')^2 = \operatorname{lc}(p')\operatorname{lc}(q')\cdot \operatorname{lc}(q)^2$, and both squares are positive, so $\operatorname{lc}(p)\operatorname{lc}(q)$ and $\operatorname{lc}(p')\operatorname{lc}(q')$ have the same sign. [L2, L3]

2.1 The rule of step 1.1 is therefore independent of the representative and computes membership in $P$; combined with [L1] it computes the order: $p/q < p'/q'$ exactly when the numerator and denominator of $p'/q' - p/q$, written in any representative, have leading coefficients of positive product. [step 1.1, step 1.2, L1, L4]

2.2 $1/t \in P$, since $\operatorname{lc}(1)\operatorname{lc}(t) = 1 > 0$; equivalently, $t \in P$ and inverses of positives are positive. [step 1.1, L3, L4]

3.1 For every rational $q > 0$: $q \cdot 1 - 1/t = (qt - 1)/t$, whose leading coefficients have product $q \cdot 1 = q > 0$, so $1/t < q \cdot 1$. Together with step 2.2, $0 < 1/t < q\cdot 1$ for every positive rational $q$. [step 1.1, step 2.1, step 2.2, L3, L5]

3.2 For every natural $n$: $t - n \cdot 1$ has leading coefficients with product $1 > 0$, so $n \cdot 1 < t$; and $t^2 - t = t(t-1)$ likewise gives $t < t^2$. [step 1.1, step 2.1, L2, L3]

4.1 So $\mathbb{R}(t)$ is an ordered field, computed by a single product of leading coefficients, in which $t$ is larger than every canonical natural and $1/t$ is a positive infinitesimal. [step 2.1, step 3.1, step 3.2, L1] ∎

## Remarks

- **Why the eventual sign, and not the sign at a point.** Evaluating at a fixed real $x_0$ is not even a function on all of $\mathbb{R}(t)$, since a rational function may have a pole at $x_0$; and even where evaluation is defined, its sign cannot give a positive cone on the field, because the nonzero rational function $t-x_0$ evaluates to $0$, so trichotomy fails. The behaviour at $+\infty$ is one representative-independent, multiplicative choice, and step 1.1 is exactly that statement.

- **What this field is and is not good for.** It is the library's cheapest witness that an ordered field need not be Archimedean, and [[cex-q-not-dense-in-an-ordered-field]] uses the infinitesimal $1/t$ found above to show $\mathbb{Q}$ need not be dense. It is **not** a witness for the completeness failures of [[fs-nested-intervals-implies-lub]] or [[fs-cauchy-complete-implies-lub]]: nothing in this library proves that $\mathbb{R}(t)$ is Cauchy complete or that it has any nested interval property, and in fact it is neither. Those two need the larger field $\mathbb{R}((t^{-1}))$, which is why that field was built ([[ex-cauchy-complete-not-complete-field]]).

- **The order is the one induced from $\mathbb{R}((t^{-1}))$ in spirit but not by any embedding proved here.** Both fields order an element by its behaviour at infinity, and in both the comparison looks at a single coefficient. This library constructs no embedding of one into the other and never uses one.
````
