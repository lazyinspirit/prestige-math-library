## Assigned repair — `fs-evt-holds-on-every-bounded-domain`

Item path: `items/fs-evt-holds-on-every-bounded-domain.md`

Normalized final-text SHA-256 at dispatch: `1829393d8ce64fc2bf811c7477473ce2dc37e06020162bed23b74e24dc673ff7`

Split reasons: ["body text","deps"]

Provenance ledger: `wave8-real-analysis-cantor-continuity.provenance.jsonl`

The three Wave 8 findings ledgers and wave8-A3.md record the original defect and approved repair. Locate this id there before certifying.

Read the current target from disk and every dependency needed to check the repair. The generated manifest rows are supplied only as a completeness checklist:

```json
[
  {
    "source": "fs-evt-holds-on-every-bounded-domain",
    "sourcePage": "continuity-ivt-evt-and-uniform-continuity",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "thm-extreme-value-r",
    "declared_target": "thm-extreme-value-r",
    "target_statement_provenance": "literature-derived",
    "targetPage": "continuity-ivt-evt-and-uniform-continuity",
    "targetBatch": "wave8-real-analysis-cantor-continuity",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-evt-holds-on-every-bounded-domain",
    "sourcePage": "continuity-ivt-evt-and-uniform-continuity",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "thm-compactness-is-necessary-for-evt-and-uniform-continuity",
    "declared_target": "thm-compactness-is-necessary-for-evt-and-uniform-continuity",
    "target_statement_provenance": "literature-derived",
    "targetPage": "continuity-ivt-evt-and-uniform-continuity",
    "targetBatch": "wave8-real-analysis-cantor-continuity",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-evt-holds-on-every-bounded-domain",
    "sourcePage": "continuity-ivt-evt-and-uniform-continuity",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "thm-heine-borel-characterisation-r",
    "declared_target": "thm-heine-borel-characterisation-r",
    "target_statement_provenance": "literature-derived",
    "targetPage": "topology-of-r",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-evt-holds-on-every-bounded-domain",
    "sourcePage": "continuity-ivt-evt-and-uniform-continuity",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "def-continuity-real",
    "declared_target": "def-continuity-real",
    "target_statement_provenance": "ai-altered",
    "targetPage": "continuity-ivt-evt-and-uniform-continuity",
    "targetBatch": "wave8-real-analysis-cantor-continuity",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-evt-holds-on-every-bounded-domain",
    "sourcePage": "continuity-ivt-evt-and-uniform-continuity",
    "batch": "wave8-real-analysis-cantor-continuity",
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
    "source": "fs-evt-holds-on-every-bounded-domain",
    "sourcePage": "continuity-ivt-evt-and-uniform-continuity",
    "batch": "wave8-real-analysis-cantor-continuity",
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
    "source": "fs-evt-holds-on-every-bounded-domain",
    "sourcePage": "continuity-ivt-evt-and-uniform-continuity",
    "batch": "wave8-real-analysis-cantor-continuity",
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
    "source": "fs-evt-holds-on-every-bounded-domain",
    "sourcePage": "continuity-ivt-evt-and-uniform-continuity",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "lem-sup-epsilon",
    "declared_target": "lem-sup-epsilon",
    "target_statement_provenance": "ai-altered",
    "targetPage": "suprema-and-infima",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-evt-holds-on-every-bounded-domain",
    "sourcePage": "continuity-ivt-evt-and-uniform-continuity",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "def-complete-ordered-field",
    "declared_target": "def-complete-ordered-field",
    "target_statement_provenance": "literature-derived",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-evt-holds-on-every-bounded-domain",
    "sourcePage": "continuity-ivt-evt-and-uniform-continuity",
    "batch": "wave8-real-analysis-cantor-continuity",
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
    "source": "fs-evt-holds-on-every-bounded-domain",
    "sourcePage": "continuity-ivt-evt-and-uniform-continuity",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "thm-algebra-of-continuous-functions",
    "declared_target": "thm-algebra-of-continuous-functions",
    "target_statement_provenance": "ai-altered",
    "targetPage": "continuity-ivt-evt-and-uniform-continuity",
    "targetBatch": "wave8-real-analysis-cantor-continuity",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-evt-holds-on-every-bounded-domain",
    "sourcePage": "continuity-ivt-evt-and-uniform-continuity",
    "batch": "wave8-real-analysis-cantor-continuity",
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
    "source": "fs-evt-holds-on-every-bounded-domain",
    "sourcePage": "continuity-ivt-evt-and-uniform-continuity",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "cex-evt-fails-on-the-open-interval-and-on-the-half-line",
    "declared_target": "cex-evt-fails-on-the-open-interval-and-on-the-half-line",
    "target_statement_provenance": "ai-altered",
    "targetPage": "continuity-ivt-evt-and-uniform-continuity-examples",
    "targetBatch": "wave8-real-analysis-cantor-continuity",
    "edge_type": "forward_ref",
    "kind": "forward",
    "requires_semantic_audit": true
  }
]
```

For a byte-exact cross-check, the current item at dispatch was:

````markdown
---
id: fs-evt-holds-on-every-bounded-domain
kind: false-statement
title: "FALSE: a continuous real function on a bounded domain attains a greatest value"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-extreme-value-r, thm-compactness-is-necessary-for-evt-and-uniform-continuity, thm-heine-borel-characterisation-r, def-continuity-real, def-bounded-set, def-max-min, lem-finite-set-has-max, lem-sup-epsilon, def-complete-ordered-field, def-interval, thm-algebra-of-continuous-functions, def-ordered-field]
justified_by: []
aliases: []
forward_refs: [cex-evt-fails-on-the-open-interval-and-on-the-half-line]
landmark: false
short: "FALSE: EVT on every bounded domain"
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Extreme value theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Extreme_value_theorem"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 4"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §3.3"
      url: "https://www.jirka.org/ra/"
    - title: "University of Edinburgh, The Extreme Value Theorem"
      url: "https://uoe-school-of-mathematics.github.io/MATH08081_IMA/Ch4.S9.html"
pipeline_run: null
---

## Statement

**False claim:** if $E \subseteq \mathbb{R}$ is nonempty and bounded
([[def-bounded-set]]) and $f : E \to \mathbb{R}$ is continuous on $E$
([[def-continuity-real]]), then $f$ attains a greatest value on $E$: there is
$p \in E$ with $f(x) \le f(p)$ for every $x \in E$ ([[def-max-min]]).

**Why it is tempting.** The extreme value theorem is often remembered as "a
continuous function on a *bounded* interval attains its bounds", and on
$[a,b]$ that is true. The hypothesis that actually does the work is
compactness, which for a subset of $\mathbb{R}$ is closed **and** bounded
([[thm-heine-borel-characterisation-r]]); dropping closedness loses the theorem
even though the function may stay bounded.

**What is true.** [[thm-extreme-value-r]] gives the conclusion on a nonempty
**compact** domain, and the hypothesis cannot be weakened: for every noncompact
$E$ there is a bounded continuous function on $E$ whose supremum is not
attained, which is
[[thm-compactness-is-necessary-for-evt-and-uniform-continuity]]. The witness
below is that theorem's simplest instance.

## Facts & Assumptions

**Given:** The domain $E := (0,1) = \{\, x \in \mathbb{R} : 0 < x < 1 \,\}$ ([[def-interval]]) and the function $f : E \to \mathbb{R}$, $f(x) := x$.

[L1] $E$ is nonempty and bounded: $1/2 \in E$, and $0 \le x \le 1$ for every $x \in E$ ([[def-bounded-set]], [[def-interval]], [[def-ordered-field]]).

[L2] The identity is continuous on every subset of $\mathbb{R}$ ([[thm-algebra-of-continuous-functions]], [[def-continuity-real]]).

[L3] A greatest value of $f$ on $E$ is a point $p \in E$ with $f(x) \le f(p)$ for every $x \in E$; equivalently a maximum of $f[E]$ lying in $f[E]$ ([[def-max-min]]).

[L4] Ordered-field arithmetic in $\mathbb{R}$: for $0 < x < 1$ one has $x < (x+1)/2 < 1$; and $0 < 1$ ([[def-ordered-field]]).

[L5] Suprema: a nonempty set bounded above has a least upper bound, and for $u = \sup S$ every real $\varepsilon > 0$ admits $s \in S$ with $u - \varepsilon < s$ ([[def-complete-ordered-field]], [[lem-sup-epsilon]]).

## Refutation

**Proof technique:** direct.

1.1 $E$ is nonempty and bounded by [L1], and $f$ is continuous on $E$ by [L2], so the hypotheses of the claim are satisfied. [L1, L2]

2.1 Let $p \in E$ be arbitrary, so $0 < p < 1$. Put $p' := (p+1)/2$; by [L4] we have $p < p' < 1$ and $0 < p'$, so $p' \in E$ and $f(p') = p' > p = f(p)$. Hence no $p \in E$ satisfies $f(x) \le f(p)$ for every $x \in E$, and by [L3] the function $f$ attains no greatest value on $E$. [step 1.1, L3, L4]

3.1 The claim is therefore false. Note also what the failure is not: $f[E] = E$ is nonempty and bounded above by $1$, so $\sup f[E]$ exists by [L5] and equals $1$, since $1$ bounds $f[E]$ and for every real $\varepsilon > 0$ the point $x := \max\{1/2,\ 1 - \varepsilon/2\}$ lies in $E$ with $x > 1 - \varepsilon$. What fails is only that $1 \notin f[E]$. [step 2.1, L1, L4, L5] ∎

## Remarks

- **The domain is bounded and not closed, and that is exactly the gap.** The set $(0,1)$ is not closed and hence is not compact by [[thm-heine-borel-characterisation-r]], so [[thm-extreme-value-r]] does not apply. Adding the two endpoints repairs everything: on $[0,1]$ the same $f$ attains the value $1$ at the point $1$.

- **Boundedness of the function is not the issue either.** The witness above is bounded, so the failure is not a blow-up; it is the loss of the point at which the supremum would be attained. A function on the same domain that is unbounded, such as $x \mapsto 1/x$, fails the conclusion for the cruder reason that no upper bound exists at all, and both failures are catalogued together in [[cex-evt-fails-on-the-open-interval-and-on-the-half-line]] on the companion page.

- **The least value fails in the same way**, by symmetry: $f$ has no least value on $(0,1)$ either, and $\inf f[E] = 0 \notin f[E]$. The statement is written for the greatest value only because that is the form the false claim usually takes.
````
