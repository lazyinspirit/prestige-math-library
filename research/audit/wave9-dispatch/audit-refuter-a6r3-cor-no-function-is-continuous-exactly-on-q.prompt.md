# Audit proof-refuter brief — Wave 9, A6

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
For an `ai-generated` proof, actively search for a counterexample. A false
public claim, invalid proof, missing necessary hypothesis, circularity, or
materially inaccurate load-bearing citation is fatal; a quickly closable gap is
nonfatal.

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

## Wave 9 target — `cor-no-function-is-continuous-exactly-on-q`

Selection: mandatory Wave 9 high/critical proof-bearing route.

Normalized current SHA-256: `4e0251e87ce315a0511c33802b443ed6170383ab011746e5b8296341cbf4d78c`

## Complete current target

````markdown
---
id: cor-no-function-is-continuous-exactly-on-q
kind: corollary
title: "No function $\\mathbb{R} \\to \\mathbb{R}$ is continuous at every rational and discontinuous at every irrational, because $\\mathbb{Q}$ is not $G_\\delta$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
  evidence: semantic-source
deps: [thm-discontinuity-set-is-f-sigma, def-f-sigma-g-delta, cor-q-is-meager-and-not-g-delta, def-continuity-real, lem-rat-embeds-dense]
justified_by: []
aliases: []
landmark: true
short: "nothing is continuous exactly on $\\mathbb{Q}$"
proof_strategy: contradiction
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
    - title: "Gdelta set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/G%CE%B4_set"
    - title: "Baire category theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Baire_category_theorem"
pipeline_run: null
---

## Statement

There is **no** function $f : \mathbb{R} \to \mathbb{R}$ that is continuous at
every rational and discontinuous at every irrational
([[def-continuity-real]], [[lem-rat-embeds-dense]]).

Equivalently: $\mathbb{Q}$ is not the continuity set of any function
$\mathbb{R} \to \mathbb{R}$.

**The contrast with Thomae's function is the point.** There *is* a function
continuous exactly at the irrationals, namely $t$
([[thm-dirichlet-and-thomae-continuity-sets]]), and one might expect the two
arrangements to be symmetric. They are not, because the classes $F_\sigma$ and
$G_\delta$ are exchanged by complementation while $\mathbb{Q}$ and the
irrationals are, and only one of the two sets is $G_\delta$
([[cor-q-is-meager-and-not-g-delta]]).

## Facts & Assumptions

**Given:** $\mathbb{Q}$ denotes the canonical copy of the rationals inside $\mathbb{R}$ ([[lem-rat-embeds-dense]]).

[L1] For every $f : \mathbb{R} \to \mathbb{R}$ the set of points at which $f$ is continuous is a $G_\delta$ subset of $\mathbb{R}$ ([[thm-discontinuity-set-is-f-sigma]], case $A = \mathbb{R}$, [[def-f-sigma-g-delta]]).

[L2] $\mathbb{Q}$ is **not** a $G_\delta$ subset of $\mathbb{R}$ ([[cor-q-is-meager-and-not-g-delta]], claim 3).

## Proof

**Proof technique:** contradiction.

1.1 Suppose, for contradiction, that there is $f : \mathbb{R} \to \mathbb{R}$ continuous at every rational and discontinuous at every irrational. [assume-contra]

2.1 Then the set of continuity points of $f$ is exactly $\mathbb{Q}$: it contains every rational by hypothesis, and it contains no irrational, again by hypothesis. [step 1.1]

3.1 By the $G_\delta$ theorem the set of continuity points of $f$ is a $G_\delta$ subset of $\mathbb{R}$, so $\mathbb{Q}$ is $G_\delta$. This contradicts the fact that $\mathbb{Q}$ is not $G_\delta$, so no such $f$ exists. [step 2.1, L1, L2, discharge-contradiction] ∎

## Remarks

- **Where the work actually is.** Nothing in this corollary is hard; all of it
  was done earlier. The $G_\delta$ theorem is [[thm-discontinuity-set-is-f-sigma]],
  which rests on the oscillation, and the failure of $\mathbb{Q}$ to be
  $G_\delta$ is [[cor-q-is-meager-and-not-g-delta]], which is where the Baire
  category theorem is spent. The corollary is the place where those two meet.

- **A weaker statement is true and much cheaper, and is not what is proved
  here.** That no *monotone* function is continuous exactly at the rationals
  follows from [[thm-froda]] alone, since the irrationals are uncountable. The
  statement above is about all functions and needs category.
````

## Current Wave 9 provenance determination

```json
{
  "id": "cor-no-function-is-continuous-exactly-on-q",
  "statement": "ai-altered",
  "proof": "ai-generated",
  "evidence": "semantic-source",
  "urls": [
    "https://en.wikipedia.org/wiki/G%CE%B4_set",
    "https://en.wikipedia.org/wiki/Baire_category_theorem"
  ],
  "rationale": "The sources establish that continuity sets are G-delta and that Q is not G-delta by Baire category. The item is the direct library corollary with the canonical-copy convention.",
  "alpha_concurred": false,
  "at": "2026-08-09"
}
```

## Current Wave 9 proof contract

```json
{
  "citations": [
    {
      "fact": "L1",
      "source": "thm-discontinuity-set-is-f-sigma",
      "source_section": "Statement",
      "quote": "**The statement is relative on purpose.** For a general domain $A$ the sets $D$\nand $C$ are subsets of $A$, and neither is $F_\\sigma$ or $G_\\delta$ in\n$\\mathbb{R}$ in general; what the proof produces are two subsets of $\\mathbb{R}$\nthat cut down to them. The absolute form is stated only for $A = \\mathbb{R}$,\nwhich is the case [[thm-continuity-set-realisation]] and\n[[cor-no-function-is-continuous-exactly-on-q]] use.",
      "uses": [
        "3.1"
      ]
    },
    {
      "fact": "L1",
      "source": "def-f-sigma-g-delta",
      "source_section": "Definition",
      "quote": "**The two classes are exchanged by complementation.** $A$ is $F_\\sigma$ if and\nonly if $\\mathbb{R} \\setminus A$ is $G_\\delta$. If $A = \\bigcup_n F_n$ with each\n$F_n$ closed, then $\\mathbb{R} \\setminus A = \\bigcap_n (\\mathbb{R} \\setminus F_n)$\nby De Morgan, and each $\\mathbb{R} \\setminus F_n$ is open by the definition of\nclosedness ([[def-open-and-closed-in-r]]); the converse is the same computation\nread backwards, using that the complement of an open set is closed, which is\nagain [[def-open-and-closed-in-r]].",
      "uses": [
        "3.1"
      ]
    },
    {
      "fact": "L2",
      "source": "cor-q-is-meager-and-not-g-delta",
      "source_section": "Statement",
      "quote": "Claims 1 and 2 are bookkeeping. Claim 3 is the substance and is exactly where\n[[thm-baire-category-r]] is spent: no argument from the algebra of open and\nclosed sets alone can reach it, since $\\mathbb{Q}_{\\mathbb{R}}$ and $X$ are\ninterchanged by complementation while $F_\\sigma$ and $G_\\delta$ are, so any such\nargument would prove the same thing about both sets and about neither.",
      "uses": [
        "3.1"
      ]
    }
  ],
  "derivations": [
    {
      "id": "cor-no-function-is-continuous-exactly-on-q-step-1-1",
      "claim": "Suppose, for contradiction, that there is $f : \\mathbb{R} \\to \\mathbb{R}$ continuous at every rational and discontinuous at every irrational. [assume-contra]",
      "step": "1.1",
      "inputs": [
        "given hypotheses and local construction"
      ]
    },
    {
      "id": "cor-no-function-is-continuous-exactly-on-q-step-2-1",
      "claim": "Then the set of continuity points of $f$ is exactly $\\mathbb{Q}$: it contains every rational by hypothesis, and it contains no irrational, again by hypothesis. [step 1.1]",
      "step": "2.1",
      "inputs": [
        "1.1"
      ]
    },
    {
      "id": "cor-no-function-is-continuous-exactly-on-q-step-3-1",
      "claim": "By the $G_\\delta$ theorem the set of continuity points of $f$ is a $G_\\delta$ subset of $\\mathbb{R}$, so $\\mathbb{Q}$ is $G_\\delta$. This contradicts the fact that $\\mathbb{Q}$ is not $G_\\delta$, so no such $f$ exists. [step 2.1, L1, L2, discharge-contradiction] ∎",
      "step": "3.1",
      "inputs": [
        "2.1",
        "L1",
        "L2"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "not_applicable",
      "reason": "The statement forms no empty set, empty family, or empty finite sum whose value affects the claim."
    },
    {
      "case": "zero",
      "status": "not_applicable",
      "reason": "Zero is not a distinguished parameter or exceptional value in this statement."
    },
    {
      "case": "one",
      "status": "checked",
      "evidence": "step 2.1: the unit or first-index boundary is included explicitly in the stated construction."
    },
    {
      "case": "degenerate",
      "status": "not_applicable",
      "reason": "The claim is not parametrised by an interval, finite range, or object with a degenerate case."
    },
    {
      "case": "endpoints",
      "status": "not_applicable",
      "reason": "No interval endpoint or one-sided domain boundary occurs in the statement."
    },
    {
      "case": "nonempty-choice",
      "status": "checked",
      "evidence": "step 1.1: each existential witness used here is supplied by the cited existence result or by the displayed formula/construction."
    },
    {
      "case": "iff-forward",
      "status": "checked",
      "evidence": "Statement and steps 1.1-3.1: the numbered proof explicitly establishes the stated forward implication as part of the biconditional."
    },
    {
      "case": "iff-reverse",
      "status": "checked",
      "evidence": "Statement and steps 1.1-3.1: the numbered proof explicitly establishes the converse implication as part of the biconditional."
    }
  ]
}
```

## Generated cross-batch/cross-level relationships sourced by this target

```json
[
  {
    "source": "cor-no-function-is-continuous-exactly-on-q",
    "sourcePage": "monotone-functions-and-discontinuities",
    "batch": "wave9-real-analysis",
    "target": "thm-discontinuity-set-is-f-sigma",
    "declared_target": "thm-discontinuity-set-is-f-sigma",
    "target_statement_provenance": "ai-altered",
    "targetPage": "monotone-functions-and-discontinuities",
    "targetBatch": "wave9-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "cor-no-function-is-continuous-exactly-on-q",
    "sourcePage": "monotone-functions-and-discontinuities",
    "batch": "wave9-real-analysis",
    "target": "def-f-sigma-g-delta",
    "declared_target": "def-f-sigma-g-delta",
    "target_statement_provenance": "literature-derived",
    "targetPage": "cantor-set-baire-and-measure-zero",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cor-no-function-is-continuous-exactly-on-q",
    "sourcePage": "monotone-functions-and-discontinuities",
    "batch": "wave9-real-analysis",
    "target": "cor-q-is-meager-and-not-g-delta",
    "declared_target": "cor-q-is-meager-and-not-g-delta",
    "target_statement_provenance": "ai-altered",
    "targetPage": "cantor-set-baire-and-measure-zero",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cor-no-function-is-continuous-exactly-on-q",
    "sourcePage": "monotone-functions-and-discontinuities",
    "batch": "wave9-real-analysis",
    "target": "def-continuity-real",
    "declared_target": "def-continuity-real",
    "target_statement_provenance": "ai-altered",
    "targetPage": "continuity-ivt-evt-and-uniform-continuity",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cor-no-function-is-continuous-exactly-on-q",
    "sourcePage": "monotone-functions-and-discontinuities",
    "batch": "wave9-real-analysis",
    "target": "lem-rat-embeds-dense",
    "declared_target": "lem-rat-embeds-dense",
    "target_statement_provenance": "ai-altered",
    "targetPage": "construction-of-r-via-cauchy-sequences",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  }
]
```

## Complete current text of every declared or cited item (7)

### `cor-q-is-meager-and-not-g-delta`

````markdown
---
id: cor-q-is-meager-and-not-g-delta
kind: corollary
title: "$\\mathbb{Q}$ is $F_\\sigma$, meager and not $G_\\delta$, while the irrationals are $G_\\delta$, residual and not $F_\\sigma$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-baire-category-r, def-f-sigma-g-delta, def-nowhere-dense-meager, thm-rationals-countable, lem-q-and-irrationals-dense-r, def-equinumerous, def-injection-surjection-bijection, def-open-and-closed-in-r, def-neighbourhood-r, thm-n-cross-n-countable, def-interior-closure-boundary-r, thm-closure-characterisations-r, def-limit-point-r, lem-rat-embeds-dense]
justified_by: []
forward_refs: [cex-irrationals-are-not-f-sigma, cex-meager-set-of-full-measure]
aliases: []
landmark: true
short: "$\\mathbb{Q}$ meager, not $G_\\delta$"
proof_strategy: contradiction
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-09
    scope: published-audit-targeted
    context_sha256: d66495c3278fff64c9ad999f462ae04a1e1646c19b701056c29ab6099277b243
    item_sha256: f278811ea8f0cad9b18ca8692c27b9f5982048429cb35d3f357ada4c5e527cd3
  verified:
    model: gpt-5.6-terra-codex-subscription
    verdict: certify
    date: 2026-08-09
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Gδ set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/G-delta_set"
    - title: "Baire category theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Baire_category_theorem"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3 (Exercise 22)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "E. Zakon, Problems on Baire Categories and Linear Maps"
      url: "https://math.libretexts.org/Bookshelves/Analysis/Mathematical_Analysis_%28Zakon%29/06%3A_Differentiation_on_E_and_Other_Normed_Linear_Spaces/6.08%3A_Baire_Categories._More_on_Linear_Maps/6.8.E%3A_Problems_on_Baire_Categories_and_Linear_Maps"
    - title: "E. Zakon, Mathematical Analysis, §6.8: Baire Categories"
      url: "https://math.libretexts.org/Bookshelves/Analysis/Mathematical_Analysis_%28Zakon%29/06%3A_Differentiation_on_E_and_Other_Normed_Linear_Spaces/6.08%3A_Baire_Categories._More_on_Linear_Maps"
pipeline_run: null
---

## Statement

Write $\mathbb{Q}_{\mathbb{R}}$ for the image of $\mathbb{Q}$ in $\mathbb{R}$
under the canonical embedding $q \mapsto \hat q$ ([[lem-rat-embeds-dense]]), the
set usually written $\mathbb{Q}$ once the identification is made, and put
$X := \mathbb{R} \setminus \mathbb{Q}_{\mathbb{R}}$ for the irrationals. Then:

1. $\mathbb{Q}_{\mathbb{R}}$ is an $F_\sigma$ set ([[def-f-sigma-g-delta]]) and is
   meager ([[def-nowhere-dense-meager]]);
2. $X$ is a $G_\delta$ set and is residual;
3. $\mathbb{Q}_{\mathbb{R}}$ is **not** a $G_\delta$ set, and $X$ is **not** an
   $F_\sigma$ set.

Claims 1 and 2 are bookkeeping. Claim 3 is the substance and is exactly where
[[thm-baire-category-r]] is spent: no argument from the algebra of open and
closed sets alone can reach it, since $\mathbb{Q}_{\mathbb{R}}$ and $X$ are
interchanged by complementation while $F_\sigma$ and $G_\delta$ are, so any such
argument would prove the same thing about both sets and about neither.

## Facts & Assumptions

**Given:** The complete ordered field $\mathbb{R}$, the set $\mathbb{Q}_{\mathbb{R}} \subseteq \mathbb{R}$ of rationals and its complement $X = \mathbb{R} \setminus \mathbb{Q}_{\mathbb{R}}$.

[L1] $\mathbb{Q} \approx \mathbb{N}$ ([[thm-rationals-countable]], [[def-equinumerous]]), $q \mapsto \hat q$ is injective with image $\mathbb{Q}_{\mathbb{R}}$ ([[lem-rat-embeds-dense]]), and a composition of bijections is a bijection ([[def-injection-surjection-bijection]]).

[L2] $\mathbb{Q}_{\mathbb{R}}$ is dense in $\mathbb{R}$ ([[lem-q-and-irrationals-dense-r]]); a set is dense when its closure is $\mathbb{R}$, equivalently when every $N_\varepsilon(x)$ meets it ([[def-limit-point-r]], [[thm-closure-characterisations-r]], [[def-neighbourhood-r]]); the closure operator is monotone, so a superset of a dense set is dense ([[def-interior-closure-boundary-r]]).

[L3] $U$ is open when every point of it has a neighbourhood inside it, and $F$ is closed when $\mathbb{R} \setminus F$ is open; $N_\varepsilon(x) = (x - \varepsilon, x + \varepsilon)$ and $x \in N_\varepsilon(x)$ ([[def-open-and-closed-in-r]], [[def-neighbourhood-r]]).

[L4] A closed set is nowhere dense exactly when its interior is empty; a meager set is a union of a sequence of nowhere dense sets; residual means the complement is meager ([[def-nowhere-dense-meager]], [[def-interior-closure-boundary-r]], [[thm-closure-characterisations-r]]).

[L5] $A$ is $F_\sigma$ when it is the union of a sequence of closed sets and $G_\delta$ when it is the intersection of a sequence of open sets; $A$ is $F_\sigma$ if and only if $\mathbb{R} \setminus A$ is $G_\delta$ ([[def-f-sigma-g-delta]]).

[L6] A countable intersection of dense open subsets of $\mathbb{R}$ is dense ([[thm-baire-category-r]]).

[L7] There is a bijection $J : \mathbb{N} \times \mathbb{N} \to \mathbb{N}$ ([[thm-n-cross-n-countable]]).

## Proof

**Proof technique:** contradiction.

1.1 For $c \in \mathbb{R}$ the singleton $\{c\}$ is closed and nowhere dense: its complement is open, since $x \ne c$ gives $N_{|x-c|}(x) \subseteq \mathbb{R} \setminus \{c\}$ by [L3]; and its interior is empty, since for every real $\varepsilon > 0$ the point $c + \varepsilon \cdot 2^{-1}$ lies in $N_\varepsilon(c)$ and differs from $c$, so no neighbourhood is contained in $\{c\}$, whence $\{c\}$ is a closed set with empty interior and [L4] applies. [L3, L4]

1.2 By [L1] fix a bijection $\beta : \mathbb{N} \to \mathbb{Q}$ and put $e := \iota \circ \beta$ with $\iota(q) = \hat q$, a bijection from $\mathbb{N}$ onto $\mathbb{Q}_{\mathbb{R}}$. [L1, choose]

2.1 $\mathbb{Q}_{\mathbb{R}} = \bigcup_{n \in \mathbb{N}} \{e(n)\}$, since $e$ is onto $\mathbb{Q}_{\mathbb{R}}$; the sets $\{e(n)\}$ are closed and nowhere dense by step 1.1, so $\mathbb{Q}_{\mathbb{R}}$ is $F_\sigma$ by [L5] and meager by [L4]. This is claim 1. [step 1.1, step 1.2, L4, L5]

3.1 Put $W_n := \mathbb{R} \setminus \{e(n)\}$, an open set by step 1.1 and [L3]. A real $x$ lies in $\bigcap_n W_n$ exactly when $x \ne e(n)$ for every $n$, that is, exactly when $x \notin \mathbb{Q}_{\mathbb{R}}$, so $X = \bigcap_n W_n$ and $X$ is $G_\delta$ by [L5]; and $\mathbb{R} \setminus X = \mathbb{Q}_{\mathbb{R}}$ is meager by step 2.1, so $X$ is residual by [L4]. This is claim 2. Each $W_n$ is also dense, since every $N_\varepsilon(x)$ contains two distinct points and so meets $\mathbb{R} \setminus \{e(n)\}$, by [L2] and [L3]. [step 1.1, step 1.2, step 2.1, L2, L3, L4, L5]

4.1 Suppose, for contradiction, that $\mathbb{Q}_{\mathbb{R}}$ is $G_\delta$, and by [L5] fix a sequence $(V_n)$ of open sets with $\mathbb{Q}_{\mathbb{R}} = \bigcap_n V_n$. Each $V_n$ contains $\mathbb{Q}_{\mathbb{R}}$, which is dense by [L2], so each $V_n$ is dense by [L2]; and each $W_n$ of step 3.1 is open and dense. [assume-contra, step 3.1, L2, L5, choose]

5.1 By [L7] fix a bijection $J : \mathbb{N} \times \mathbb{N} \to \mathbb{N}$ and define a sequence $(D_j)$ by $D_{J(m,n)} := V_n$ when $m = 0$ and $D_{J(m,n)} := W_n$ when $m \ne 0$; this is total because $J$ is a bijection, and every $D_j$ is open and dense by step 4.1. Moreover $\bigcap_j D_j = \big(\bigcap_n V_n\big) \cap \big(\bigcap_n W_n\big) = \mathbb{Q}_{\mathbb{R}} \cap X = \varnothing$, since every $V_n$ and every $W_n$ occurs among the $D_j$ and every $D_j$ is one of them. [step 3.1, step 4.1, L7]

6.1 By [L6] the set $\bigcap_j D_j$ is dense, hence nonempty by [L2] and [L3], contradicting step 5.1. The assumption of step 4.1 is therefore untenable: $\mathbb{Q}_{\mathbb{R}}$ is not $G_\delta$; and $X$ is not $F_\sigma$, since $\mathbb{R} \setminus X = \mathbb{Q}_{\mathbb{R}}$ would then be $G_\delta$ by [L5]. This is claim 3. [step 4.1, step 5.1, L2, L3, L5, L6, discharge-contradiction] ∎

## Remarks

- **Where the two halves of the argument part company.** Claim 1 is a listing argument: step 1.2 lists $\mathbb{Q}_{\mathbb{R}}$, and step 1.1 shows that each real singleton is nowhere dense; claim 3 uses the completeness of $\mathbb{R}$ through [[thm-nested-interval-property]], inside [[thm-baire-category-r]]. Indeed $\mathbb{Q}$ is a $G_\delta$ subset of itself, being the whole space, so no argument that ignores the ambient completeness can possibly give claim 3.

- **The irrationals are also uncountable** ([[cor-irrationals-uncountable]]), by a different and much cheaper argument that needs only the countability of $\mathbb{Q}$ and the uncountability of $\mathbb{R}$. Uncountability and being residual are independent properties: $\mathbb{Q}$ is meager and countable, the Cantor set is meager and uncountable ([[thm-cantor-set-properties]]), and $X$ is residual and uncountable.

- **The named witness for claim 3** is [[cex-irrationals-are-not-f-sigma]], and the false statement it refutes is [[fs-q-is-g-delta]]; the refutation is carried out here.

- **Meagre and measure zero are not the same smallness.** $\mathbb{Q}_{\mathbb{R}}$ is both, but the two notions diverge as soon as one leaves the countable case: [[cex-meager-set-of-full-measure]] writes $\mathbb{R}$ as a meager set together with a set of measure zero, and the set of measure zero there is residual. So being residual, which is what claim 2 gives for $X$, carries no information at all about size in measure.
````

### `def-continuity-real`

````markdown
---
id: def-continuity-real
kind: definition
title: "Continuity of $f : A \\to \\mathbb{R}$ at a point of $A$ and on $A$: the $\\varepsilon$-$\\delta$ condition, its agreement with $\\lim_{x \\to c} f(x) = f(c)$ at a limit point, and continuity at an isolated point"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-function-limit, def-limit-point-r, def-neighbourhood-r, def-open-and-closed-in-r, def-interval, lem-of-abs-value, def-complete-ordered-field]
justified_by: []
aliases: [def-continuity-at-a-point-r]
forward_refs: [cex-dirichlet-is-nowhere-continuous]
landmark: true
short: "continuity of a real function"
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-27
  audited: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Continuous function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Continuous_function"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 4"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §3.2"
      url: "https://www.jirka.org/ra/"
    - title: "E. Zakon, Mathematical Analysis, §4.1: Basic Definitions"
      url: "https://math.libretexts.org/Bookshelves/Analysis/Mathematical_Analysis_%28Zakon%29/04%3A_Function_Limits_and_Continuity/4.01%3A_Basic_Definitions"
pipeline_run: null
---

## Definition

Throughout, $\mathbb{R}$ is the complete ordered field with its order and
absolute value ([[def-complete-ordered-field]], [[lem-of-abs-value]]), and
neighbourhoods are those of [[def-neighbourhood-r]].

Let $A \subseteq \mathbb{R}$, let $f : A \to \mathbb{R}$ and let $c \in A$. Then
$f$ is **continuous at $c$** when

$$(\forall \varepsilon > 0)\ (\exists \delta > 0)\ (\forall x \in A)\ \bigl[\ |x - c| < \delta \ \Longrightarrow\ |f(x) - f(c)| < \varepsilon\ \bigr],$$

with $\varepsilon$ and $\delta$ ranging over the **positive reals**. In the
language of neighbourhoods: for every real $\varepsilon > 0$ there is a real
$\delta > 0$ with

$$f\bigl(A \cap N_{\delta}(c)\bigr) \;\subseteq\; N_{\varepsilon}\bigl(f(c)\bigr).$$

$f$ is **continuous on $A$** when it is continuous at every point of $A$.

**The point $c$ is required to lie in $A$, and the condition is unpunctured.**
Both differ from [[def-function-limit]], and deliberately. There the quantifier
runs over $0 < |x - c| < \delta$, which removes $x = c$; here $x = c$ is allowed,
and at $x = c$ the implication reads $|f(c) - f(c)| = 0 < \varepsilon$, which is
automatic. So allowing $x = c$ costs nothing, and it is what lets the definition
be stated at every point of $A$, including the points where no limit exists.

**Three clauses, and all three are part of the definition.**

1. **At a limit point.** Suppose $c \in A$ is a limit point of $A$
   ([[def-limit-point-r]]). Then $f$ is continuous at $c$ if and only if the
   limit of $f$ at $c$ exists and
   $$\lim_{x \to c} f(x) \;=\; f(c)$$
   ([[def-function-limit]]). Indeed, for a given $\varepsilon > 0$ a $\delta$
   witnessing continuity witnesses the limit condition, because the limit
   condition quantifies over a subset of the points continuity quantifies over;
   and conversely a $\delta$ witnessing $\lim_{x \to c} f(x) = f(c)$ witnesses
   continuity, because the one point it omits, $x = c$, satisfies
   $|f(c) - f(c)| < \varepsilon$ anyway.

2. **At an isolated point.** Suppose $c \in A$ is an isolated point of $A$
   ([[def-limit-point-r]]), so that $N_{\eta}(c) \cap A = \{c\}$ for some real
   $\eta > 0$. Then **every** $f : A \to \mathbb{R}$ is continuous at $c$: take
   $\delta := \eta$, so that the only $x \in A$ with $|x - c| < \delta$ is $c$
   itself, and $|f(c) - f(c)| = 0 < \varepsilon$.

3. **On a set.** Continuity on $A$ is continuity at each point of $A$, and
   nothing more. It is not a condition relating $f$ to points outside $A$.

Every point of $A$ is either a limit point of $A$ or an isolated point of $A$,
and never both ([[def-limit-point-r]]), so clauses 1 and 2 between them describe
continuity at every point of $A$.

**This is not the raw $\varepsilon$-$\delta$ formula of
[[fs-limit-unique-at-every-point-of-the-domain]].** That item records what goes
wrong when the *punctured* formula of [[def-function-limit]] is written down at
an arbitrary point of the domain: at an isolated point it is satisfied
vacuously by every real $L$ at once, so it defines nothing, and this library
therefore leaves $\lim_{x \to c} f(x)$ **undefined** at an isolated point.
Continuity at an isolated point is a different matter: the formula above is not
vacuous — it is a genuine condition on $f(c)$, satisfied because $f(c)$ is the
only value being compared with itself — and it names a single, well-defined
property. The limit is undefined there; the continuity is defined, and is
automatic. Clause 1 is the only place where the two notions meet, and it is
stated only where the limit exists as a notion.

**Where the distinction disappears.** If $A$ is an open subset of $\mathbb{R}$
([[def-open-and-closed-in-r]]), then every $c \in A$ has some
$N_{\eta}(c) \subseteq A$, and a punctured neighbourhood is never empty
([[def-neighbourhood-r]]), so every point of $A$ is a limit point of $A$ and
clause 1 covers the whole of $A$. The same holds when $A$ is a nondegenerate
interval ([[def-interval]]). Isolated points are what force clause 2 to exist at
all, and they occur as soon as $A$ is allowed to be an arbitrary subset of
$\mathbb{R}$, as in $A = \{0\} \cup [1,2]$.

## Remarks

- **Continuity is local.** If $\eta > 0$ and $g : A \to \mathbb{R}$ agrees with
  $f$ on $A \cap N_{\eta}(c)$, then $f$ is continuous at $c$ if and only if $g$
  is: any $\delta$ may be replaced by $\min\{\delta, \eta\}$, after which the
  condition only ever evaluates the two functions where they agree. So
  continuity at $c$ sees only an arbitrarily small neighbourhood of $c$, exactly
  as the limit does ([[lem-limit-is-local]]).

- **Continuity passes to subsets of the domain.** If $B \subseteq A$ and
  $c \in B$, then continuity of $f$ at $c$ gives continuity of the restriction
  $f|_B$ at $c$, with the same $\delta$: the condition on $f|_B$ quantifies over
  fewer points. The converse fails, and the standard witness is the indicator of
  $\mathbb{Q}$ restricted to $\mathbb{Q}$, which is constant and hence
  continuous, while the indicator itself is continuous nowhere
  ([[cex-dirichlet-is-nowhere-continuous]]).

- **The radius is a real number.** As in [[def-neighbourhood-r]], $\varepsilon$
  and $\delta$ range over the positive reals here. Restricting either quantifier
  to the positive rationals defines the same relation, by the passage recorded
  in [[def-function-limit]]: below every positive real lies a positive rational
  ([[lem-rat-embeds-dense]]), and a real $\delta$ may be shrunk to a rational
  one below it.

- **The word *continuous* is used for two things in this library, and they
  agree.** [[def-metric-continuity]] defines continuity of a map between metric
  spaces, and $A \subseteq \mathbb{R}$ carries the metric $d(x,y) = |x-y|$. The
  two notions coincide, and that is proved, not assumed:
  [[lem-real-and-metric-notions-agree]] is the dictionary, and it is stated on
  this page precisely so that no later item has to guess.
````

### `def-f-sigma-g-delta`

````markdown
---
id: def-f-sigma-g-delta
kind: definition
title: "$F_\\sigma$ and $G_\\delta$ subsets of $\\mathbb{R}$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-open-and-closed-in-r, def-countable, thm-open-set-algebra-r]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-27
  audited: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Fσ set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/F-sigma_set"
    - title: "Gδ set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/G-delta_set"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2 and Ch. 11"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "Borel set (Encyclopedia of Mathematics)"
      url: "https://encyclopediaofmath.org/wiki/Borel_set"
pipeline_run: null
---

## Definition

Let $A \subseteq \mathbb{R}$, with open and closed sets as in
[[def-open-and-closed-in-r]].

- $A$ is an **$F_\sigma$ set** when there is a sequence $(F_n)_{n \in \mathbb{N}}$
  of closed subsets of $\mathbb{R}$ with
  $$A \;=\; \bigcup_{n \in \mathbb{N}} F_n .$$
- $A$ is a **$G_\delta$ set** when there is a sequence $(V_n)_{n \in \mathbb{N}}$
  of open subsets of $\mathbb{R}$ with
  $$A \;=\; \bigcap_{n \in \mathbb{N}} V_n .$$

The letters are the traditional ones: $F$ for *fermé* with $\sigma$ for *somme*,
$G$ for *Gebiet* with $\delta$ for *Durchschnitt*.

**The two classes are exchanged by complementation.** $A$ is $F_\sigma$ if and
only if $\mathbb{R} \setminus A$ is $G_\delta$. If $A = \bigcup_n F_n$ with each
$F_n$ closed, then $\mathbb{R} \setminus A = \bigcap_n (\mathbb{R} \setminus F_n)$
by De Morgan, and each $\mathbb{R} \setminus F_n$ is open by the definition of
closedness ([[def-open-and-closed-in-r]]); the converse is the same computation
read backwards, using that the complement of an open set is closed, which is
again [[def-open-and-closed-in-r]].

**Every closed set is $F_\sigma$ and every open set is $G_\delta$**, by the
constant sequence $F_n := A$, respectively $V_n := A$. As with
[[def-nowhere-dense-meager]], an at most countable family ([[def-countable]]) may
always be presented as a sequence: a finite list $F_0, \dots, F_m$ of closed sets
is extended by $F_n := F_m$ for $n > m$, and a finite list of open sets likewise,
so nothing is lost by indexing over $\mathbb{N}$.

## Remarks

- **The classes are genuinely larger than the closed and the open sets.**
  $\mathbb{Q}$ is $F_\sigma$ and is neither open nor closed, and the irrationals
  are $G_\delta$ and neither open nor closed; both computations are in
  [[cor-q-is-meager-and-not-g-delta]]. That $\mathbb{Q}$ is not also $G_\delta$
  is the first genuinely hard fact about these classes and needs the Baire
  category theorem ([[thm-baire-category-r]]).

- **Why the algebra of open sets is not enough.** [[thm-open-set-algebra-r]]
  gives that a *finite* intersection of open sets is open and a *finite* union of
  closed sets is closed. The definitions above are exactly what one gets by
  relaxing "finite" to "countable" once, and the point of the whole notion is
  that the relaxation is proper: a countable intersection of open sets need not
  be open, which is [[cex-intersection-of-shrinking-intervals-not-open]].

- **Nothing here is a measure-theoretic notion.** $F_\sigma$ and $G_\delta$ are
  defined from the topology of $\mathbb{R}$ alone and are used on this page to
  say precisely how far $\mathbb{Q}$ and its complement sit from being closed or
  open. They cut across [[def-measure-zero-and-content-zero]] completely:
  $\mathbb{Q}$ is $F_\sigma$ and has measure zero
  ([[lem-countable-sets-are-null]]), while the Smith-Volterra-Cantor set is
  closed, hence $F_\sigma$, and does not
  ([[thm-fat-cantor-set-has-positive-measure]]).
````

### `lem-rat-embeds-dense`

````markdown
---
id: lem-rat-embeds-dense
kind: lemma
title: "The rationals embed densely in the reals"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-real-numbers, def-real-order, thm-reals-ordered-field, thm-reals-field, def-rational-cauchy-sequence, thm-rat-ordered-field, thm-rat-field]
aliases: []
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-08-02
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "T. Tao, Analysis I, 3rd ed., §5.4"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "Dense set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Dense_set"
pipeline_run: null
---

## Statement

The map $q \mapsto \hat q$ ([[def-real-numbers]]) is an embedding of ordered
fields. Every real is approximated by rationals: for $x \in \mathbb{R}$ and
rational $\varepsilon > 0$ there is $q \in \mathbb{Q}$ with
$|x - \hat q| < \hat\varepsilon$. Consequently, strictly between any two
reals lies a rational.

## Facts & Assumptions

**Given:** A real $x = [(a_n)]$ and a rational $\varepsilon > 0$.

[L1] The orders of $\mathbb{Q}$ and $\mathbb{R}$; ordered-field arithmetic ([[thm-rat-ordered-field]], [[thm-reals-ordered-field]]).

[L2] Field arithmetic in $\mathbb{Q}$: $\varepsilon/2, \delta/4$ are positive rationals, and every nonzero rational $q$ has a reciprocal $1/q$ with $q \cdot (1/q) = 1$ ([[thm-rat-field]]).

[L3] Cauchy definition ([[def-rational-cauchy-sequence]]).

[L4] Real positivity via eventual rational lower bounds ([[def-real-order]]).

[L5] $\mathbb{R} = \mathcal{C}/\mathcal{N}$ is a field ([[thm-reals-field]]), and $0_{\mathbb{R}} = \hat 0$, $1_{\mathbb{R}} = \hat 1$ are the classes of the constant sequences ([[def-real-numbers]]). A multiplicative inverse there is unique: if $ab = 1_{\mathbb{R}} = ac$ then $b = b(ac) = (ba)c = c$.

## Proof

**Proof technique:** direct.

1.1 Embedding: constant sequences are Cauchy; $\hat q = \hat r$ iff the constant $q - r$ is null iff $q = r$; operations match termwise; and $q < r$ gives the constant lower bound $r - q > 0$, so $\hat q < \hat r$ and order is preserved and reflected. [L1, L4]

1.2 Fix $N$ with $|a_m - a_n| < \varepsilon/2$ for all $m, n \ge N$, and set $q = a_N$. [L3, L2]

2.1 The difference $\hat q - x$ has representative $(a_N - a_n)$ with $|a_N - a_n| < \varepsilon/2$ for $n \ge N$; hence both $\hat\varepsilon - (x - \hat q)$ and $\hat\varepsilon - (\hat q - x)$ have representatives eventually $> \varepsilon/2$, so both are positive: $|x - \hat q| < \hat\varepsilon$. [step 1.2, L4, L1]

2.2 Inverses: let $q$ be a nonzero rational. Then $\hat q \ne \hat 0 = 0_{\mathbb{R}}$ by the injectivity of step 1.1, and $1/q$ exists in $\mathbb{Q}$ by [L2]; since the operations match termwise (step 1.1), $\hat q \cdot \widehat{1/q} = \widehat{q \cdot (1/q)} = \hat 1 = 1_{\mathbb{R}}$. Inverses in $\mathbb{R}$ are unique by [L5], so $(\hat q)^{-1} = \widehat{1/q}$: the embedding preserves reciprocals. [step 1.1, L2, L5]

3.1 Density: let $x < y$; pick $\delta > 0$ rational and $N$ with the representative of $y - x$ eventually $> \delta$; set $\varepsilon = \delta/4$ and pick $q$ with $|x - \hat q| < \hat\varepsilon$; then $q' = q + 2\varepsilon$ satisfies $\hat q' - x \ge -\hat\varepsilon + 2\hat\varepsilon = \hat\varepsilon > 0$ and $y - \hat q' \ge \hat\delta - \hat\varepsilon - 2\hat\varepsilon = \hat\delta/4 > 0$, so $x < \hat q' < y$. [step 2.1, L4, L1, L2]

4.1 The rationals embed as an ordered subfield — injectively, preserving the order in both directions, the ring operations, and reciprocals — and they approximate every real arbitrarily well and separate any two reals. [step 1.1, step 2.2, step 3.1] ∎
````

### `thm-dirichlet-and-thomae-continuity-sets`

````markdown
---
id: thm-dirichlet-and-thomae-continuity-sets
kind: theorem
title: "The Dirichlet function is continuous at no point of $\\mathbb{R}$, and Thomae's function is continuous at every irrational and at no rational, so its set of continuity points is exactly the set of irrationals and its oscillation at $c$ equals $t(c)$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
  evidence: exact-source
deps: [def-dirichlet-and-thomae-functions, def-continuity-real, lem-q-and-irrationals-dense-r, def-oscillation, thm-continuity-iff-oscillation-zero, cor-archimedean-reciprocal, lem-integer-part, def-canonical-natural, lem-of-naturals-positive, lem-finite-set-has-max, def-max-min, lem-of-abs-value, def-neighbourhood-r, thm-closure-characterisations-r, lem-rat-embeds-dense, def-extended-reals, lem-extended-reals-complete]
justified_by: []
aliases: [thm-thomae-continuity-set]
landmark: true
short: "Thomae is continuous exactly at the irrationals"
proof_strategy: cases
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
    - title: "Thomae's function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Thomae%27s_function"
    - title: "Dirichlet function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Dirichlet_function"
pipeline_run: null
---

## Statement

Let $\mathbf{1}_{\mathbb{Q}}$ and $t$ be the Dirichlet and Thomae functions
([[def-dirichlet-and-thomae-functions]]), and write $q(x)$ for the least
denominator of a rational $x$, so that $t(x) = 1/\iota(q(x))$ there and
$t(x) = 0$ at every irrational $x$. Then:

1. $\mathbf{1}_{\mathbb{Q}}$ is continuous at **no** point of $\mathbb{R}$
   ([[def-continuity-real]]);
2. $\omega_{t}(c) = t(c)$ for **every** real $c$ ([[def-oscillation]]);
3. $t$ is continuous at every irrational and discontinuous at every rational, so
   its set of continuity points is exactly $\mathbb{R} \setminus \mathbb{Q}$.

**Claim 1 restates, on this page, what
[[cex-dirichlet-is-nowhere-continuous]] already proves.** That item is homed on
the examples page of *Continuity, the intermediate and extreme value theorems,
and uniform continuity*, and an examples page is a leaf of this library: nothing
outside it may depend on an item that lives there. The claim is needed here, and
on later pages, as a citable statement, so it is proved again rather than
quoted. The two statements are the same statement, and neither is stronger than
the other; the proof below is the same argument, and no originality is claimed
for it. This is the pattern
[[ex-distance-to-the-integers-is-1-lipschitz]] follows.

## Facts & Assumptions

**Given:** The Dirichlet function $\mathbf{1}_{\mathbb{Q}}$ and Thomae's function $t$, and a real $c$; $\mathbb{N} \subseteq \mathbb{Z} \subseteq \mathbb{Q} \subseteq \mathbb{R}$ are the canonical copies and $\iota(q) = q \cdot 1_{\mathbb{R}}$.

[A1] $\mathbf{1}_{\mathbb{Q}}(x) = 1$ for $x \in \mathbb{Q}$ and $0$ otherwise; $t(x) = 1/\iota(q(x)) \in (0,1]$ for $x \in \mathbb{Q}$ and $t(x) = 0$ otherwise, where $q(x) = \min\{q \ge 1 : \iota(q)x \in \mathbb{Z}\}$ ([[def-dirichlet-and-thomae-functions]]).

[L1] Both $\mathbb{Q}$ and $\mathbb{R} \setminus \mathbb{Q}$ are dense in $\mathbb{R}$, so every $N_\delta(y)$ contains a rational and an irrational ([[lem-q-and-irrationals-dense-r]], [[thm-closure-characterisations-r]], [[def-neighbourhood-r]], [[lem-rat-embeds-dense]]).

[L2] For every real $x$ there is exactly one integer $m$ with $m \le x < m+1$, written $\lfloor x \rfloor$ ([[lem-integer-part]]); consequently no integer lies strictly between two consecutive integers.

[L3] For every real $\eta > 0$ there is a natural $N \ge 1$ with $1/\iota(N) < \eta$; and $\iota$ is positive and strictly increasing on the naturals $\ge 1$, so $1 \le q \le N$ gives $\iota(q) \le \iota(N)$ and $1/\iota(N) \le 1/\iota(q)$ ([[cor-archimedean-reciprocal]], [[def-canonical-natural]], [[lem-of-naturals-positive]]).

[L4] A nonempty finite set of reals presented as $\{a_{0}, \dots, a_{n}\}$ has a minimum ([[lem-finite-set-has-max]], [[def-max-min]]).

[L5] $\omega_{f}(S) = \sup\{|f(x)-f(y)| : x,y \in S\}$ and $\omega_{f}(c) = \inf\{\omega_{f}(N_\delta(c)) : \delta > 0\}$ for $f$ defined on all of $\mathbb{R}$, both computed in $\overline{\mathbb{R}}$, where every set has a supremum and an infimum; $f$ is continuous at $c$ if and only if $\omega_{f}(c) = 0$ ([[def-oscillation]], [[def-extended-reals]], [[lem-extended-reals-complete]], [[thm-continuity-iff-oscillation-zero]]).

[L6] $|u| \ge 0$, $|u - v| \le |u| + |v|$, and if $0 \le u \le M$ and $0 \le v \le M$ then $|u - v| \le M$ ([[lem-of-abs-value]]).

## Proof

**Proof technique:** cases.

1.1 Claim 1. Let $c$ be real and let $\delta > 0$ be real. The neighbourhood $N_\delta(c)$ contains a rational $u$ and an irrational $v$, and $\mathbf{1}_{\mathbb{Q}}(u) - \mathbf{1}_{\mathbb{Q}}(v) = 1 - 0 = 1$; since $\mathbf{1}_{\mathbb{Q}}(c)$ is $0$ or $1$, one of $|\mathbf{1}_{\mathbb{Q}}(u) - \mathbf{1}_{\mathbb{Q}}(c)|$ and $|\mathbf{1}_{\mathbb{Q}}(v) - \mathbf{1}_{\mathbb{Q}}(c)|$ equals $1$. So the continuity condition at $c$ fails for $\varepsilon = 1$, no $\delta$ witnessing it, and $\mathbf{1}_{\mathbb{Q}}$ is continuous at no point. [A1, L1]

1.2 **A separation estimate.** For a real $c$ and a natural $q \ge 1$ put $m := \lfloor \iota(q)c \rfloor$ and define $d_{q}(c) := 1/\iota(q)$ if $\iota(q)c = m$, and $d_{q}(c) := \min\{\iota(q)c - m,\ m + 1 - \iota(q)c\}/\iota(q)$ otherwise. In both cases $d_{q}(c) > 0$. [L2, L3, construct]

1.3 **A lower bound.** For every real $\delta > 0$ the neighbourhood $N_\delta(c)$ contains an irrational $v$, and $c \in N_\delta(c)$, so $\omega_{t}(N_\delta(c)) \ge |t(c) - t(v)| = t(c)$; taking the infimum over $\delta$ gives $\omega_{t}(c) \ge t(c)$. [A1, L1, L5]

2.1 With $d_{q}(c)$ as in step 1.2: for every integer $p$ with $p/\iota(q) \ne c$ one has $|c - p/\iota(q)| \ge d_{q}(c)$. If $\iota(q)c = m$ then $p \ne m$, so $|\iota(q)c - p| = |m - p| \ge 1$; otherwise $m < \iota(q)c < m+1$, and $p \le m$ gives $\iota(q)c - p \ge \iota(q)c - m$ while $p \ge m+1$ gives $p - \iota(q)c \ge m+1-\iota(q)c$. Dividing by $\iota(q) > 0$ gives the claim. [step 1.2, L2, L3]

2.2 For a real $c$ and a natural $N \ge 1$ put $\delta_{N}(c) := \min\{d_{1}(c), \dots, d_{N}(c)\}$, the minimum of a nonempty finite set of positive reals, so $\delta_{N}(c) > 0$. [step 1.2, L4, construct]

3.1 If $x$ is rational with $0 < |x - c| < \delta_{N}(c)$ then $q(x) > N$ and hence $t(x) < 1/\iota(N)$. Indeed $x = p/\iota(q)$ with $q := q(x)$ and $p := \iota(q)x$; if $q \le N$ then $p/\iota(q) = x \ne c$, so step 2.1 gives $|c - x| \ge d_{q}(c) \ge \delta_{N}(c)$, contrary to the hypothesis. So $q(x) > N$, and $t(x) = 1/\iota(q(x)) < 1/\iota(N)$ because $\iota$ is strictly increasing. [step 2.1, step 2.2, A1, L3]

4.1 **An upper bound for $t$ near $c$.** Let $\varepsilon > 0$ be real, take $N \ge 1$ with $1/\iota(N) < \varepsilon$ and put $\delta := \delta_{N}(c)$. Every $x \in N_\delta(c)$ satisfies $0 \le t(x) \le M$ where $M := \max\{t(c), \varepsilon\}$: for $x = c$ this is $t(c) \le M$; for $x \ne c$ rational it is $t(x) < 1/\iota(N) < \varepsilon \le M$ by step 3.1; and for $x$ irrational it is $t(x) = 0$. [step 3.1, A1, L3, L6]

5.1 Hence $\omega_{t}(N_\delta(c)) \le M$ with $\delta$ and $M$ as in step 4.1, since $|t(x) - t(y)| \le M$ for all $x, y \in N_\delta(c)$, so $M$ is an upper bound of the set whose supremum $\omega_{t}(N_\delta(c))$ is; and therefore $\omega_{t}(c) \le M = \max\{t(c), \varepsilon\}$. [step 4.1, L5, L6]

6.1 Claim 2 now follows in the two cases of the value $t(c)$, which are exactly the two cases of the position of $c$. If $c$ is rational then $t(c) > 0$, and applying step 5.1 with the admissible choice $\varepsilon := t(c)$ gives $\omega_{t}(c) \le \max\{t(c), t(c)\} = t(c)$; with step 1.3 this gives $\omega_{t}(c) = t(c)$. [step 5.1, step 1.3, A1, assume-case rat]

6.2 If $c$ is irrational then $t(c) = 0$, and step 5.1 gives $\omega_{t}(c) \le \max\{0, \varepsilon\} = \varepsilon$ for every real $\varepsilon > 0$; since also $\omega_{t}(c) \ge 0$, an extended real that is $\le \varepsilon$ for every positive real $\varepsilon$ and $\ge 0$ must be $0$, so $\omega_{t}(c) = 0 = t(c)$. [step 5.1, step 1.3, A1, L5, assume-case irr]

7.1 Every real is rational or irrational and not both, so steps 6.1 and 6.2 establish claim 2 for every real $c$. [step 6.1, step 6.2, cases-exhaustive]

8.1 Claim 3 follows from claim 2: $t$ is continuous at $c$ exactly when $\omega_{t}(c) = 0$, that is exactly when $t(c) = 0$, that is exactly when $c$ is irrational. So the continuity set of $t$ is $\mathbb{R} \setminus \mathbb{Q}$ and its discontinuity set is $\mathbb{Q}$. [step 7.1, A1, L5] ∎

## Remarks

- **What claim 2 adds beyond claim 3.** Continuity at a point is the vanishing of the oscillation there, so claim 3 is the special case of claim 2 recording where the value is $0$. The value itself is used on the companion page, where the oscillation of $t$ is computed at particular points, and it shows that the failure of continuity at a rational is exactly as large as the value of $t$ there: small denominators are the bad points.

- **The continuity set of $t$ is $G_\delta$, as it must be.** The irrationals form a $G_\delta$ set ([[cor-q-is-meager-and-not-g-delta]]), in agreement with [[thm-discontinuity-set-is-f-sigma]]. The reverse arrangement is impossible: no function is continuous at every rational and discontinuous at every irrational, because $\mathbb{Q}$ is not $G_\delta$ ([[cor-no-function-is-continuous-exactly-on-q]]).

- **No choice principle is spent.** The separation estimate of step 1.2 is written down from $\lfloor \iota(q)c \rfloor$, the minimum of step 2.1 is the minimum of an explicitly listed finite set, and the least denominator $q(x)$ is a least element. Density supplies points, and it is used only in the form "every neighbourhood meets the set", never to build a sequence.
````

### `thm-discontinuity-set-is-f-sigma`

````markdown
---
id: thm-discontinuity-set-is-f-sigma
kind: theorem
title: "For $f : A \\to \\mathbb{R}$ the set of points of $A$ at which $f$ is discontinuous is the intersection with $A$ of an $F_\\sigma$ subset of $\\mathbb{R}$, and the set of points at which $f$ is continuous is the intersection with $A$ of a $G_\\delta$ subset; for $A = \\mathbb{R}$ the two sets are $F_\\sigma$ and $G_\\delta$ outright"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
  evidence: semantic-source
deps: [def-oscillation, thm-continuity-iff-oscillation-zero, lem-oscillation-superlevel-sets-are-closed, def-f-sigma-g-delta, def-open-and-closed-in-r, cor-archimedean-reciprocal, def-continuity-real, def-extended-reals, def-canonical-natural, lem-of-naturals-positive, def-classification-of-discontinuities]
justified_by: []
aliases: [thm-continuity-set-is-g-delta]
landmark: true
short: "discontinuity set is $F_\\sigma$"
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
    - title: "Classification of discontinuities (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Classification_of_discontinuities"
    - title: "Gdelta set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/G%CE%B4_set"
pipeline_run: null
---

## Statement

Let $A \subseteq \mathbb{R}$ and let $f : A \to \mathbb{R}$. Write

$$D \;:=\; \{\, x \in A : f \text{ is discontinuous at } x \,\}, \qquad C \;:=\; A \setminus D$$

([[def-continuity-real]], [[def-classification-of-discontinuities]]). Then:

1. **Pointwise exhaustion.** $D = \{\, x \in A : \omega_f(x) > 0 \,\}$
   ([[def-oscillation]]), and $D$ is the union of the increasing sequence of
   superlevel sets
   $$D \;=\; \bigcup_{n \in \mathbb{N}} \{\, x \in A : \omega_f(x) \ge 1/\iota(n+1) \,\}$$
   ([[def-canonical-natural]]), whose thresholds are $1, 1/2, 1/3, \dots$.
2. **Descriptive form.** There is an $F_\sigma$ set $F \subseteq \mathbb{R}$ and
   a $G_\delta$ set $V \subseteq \mathbb{R}$ ([[def-f-sigma-g-delta]]) with
   $$D \;=\; A \cap F, \qquad C \;=\; A \cap V, \qquad V = \mathbb{R} \setminus F ,$$
   and $F$ may be taken to be $\bigcup_{n \in \mathbb{N}} G_n$ with each $G_n$ a
   closed subset of $\mathbb{R}$ cutting down on $A$ to the $n$-th set of
   claim 1 ([[lem-oscillation-superlevel-sets-are-closed]]).

In particular, when $A = \mathbb{R}$ the discontinuity set $D$ is an $F_\sigma$
subset of $\mathbb{R}$ and the continuity set $C$ is a $G_\delta$ subset, and
claim 1 reads $D = \bigcup_{n} \{\, x \in \mathbb{R} : \omega_f(x) \ge 1/\iota(n+1) \,\}$.

**Claim 1 is stated separately because it is what is cited downstream.** The
exhaustion of $D$ by the superlevel sets $\{\omega_f \ge 1/\iota(n+1)\}$ is used
directly wherever a property has to be established one threshold at a time —
[[thm-baire-one-continuity-points]] shows each superlevel set nowhere dense and
concludes that $D$ is meager — and that use needs the identity itself, not only
the descriptive conclusion of claim 2.

**The statement is relative on purpose.** For a general domain $A$ the sets $D$
and $C$ are subsets of $A$, and neither is $F_\sigma$ or $G_\delta$ in
$\mathbb{R}$ in general; what the proof produces are two subsets of $\mathbb{R}$
that cut down to them. The absolute form is stated only for $A = \mathbb{R}$,
which is the case [[thm-continuity-set-realisation]] and
[[cor-no-function-is-continuous-exactly-on-q]] use.

## Facts & Assumptions

**Given:** $A \subseteq \mathbb{R}$ and a function $f : A \to \mathbb{R}$.

[L1] $f$ is continuous at $c \in A$ if and only if $\omega_f(c) = 0$; and $\omega_f(c) \ge 0$ for every $c \in A$ ([[thm-continuity-iff-oscillation-zero]], [[def-oscillation]], [[def-extended-reals]]).

[L2] For every real $\varepsilon > 0$ there is a closed $G \subseteq \mathbb{R}$ with $\{x \in A : \omega_f(x) \ge \varepsilon\} = A \cap G$ ([[lem-oscillation-superlevel-sets-are-closed]]).

[L3] For every real $\eta > 0$ there is a natural $m \ge 1$ with $1/\iota(m) < \eta$, where $\iota(m)$ is the canonical natural of $m$ in $\mathbb{R}$; and $\iota$ is strictly increasing and positive on the naturals $\ge 1$ ([[cor-archimedean-reciprocal]], [[def-canonical-natural]], [[lem-of-naturals-positive]]).

[L4] A subset of $\mathbb{R}$ is $F_\sigma$ when it is the union of a sequence of closed sets and $G_\delta$ when it is the intersection of a sequence of open sets; $S$ is $F_\sigma$ if and only if $\mathbb{R} \setminus S$ is $G_\delta$ ([[def-f-sigma-g-delta]], [[def-open-and-closed-in-r]]).

## Proof

**Proof technique:** direct.

1.1 For each $n \in \mathbb{N}$ put $\varepsilon_n := 1/\iota(n+1)$, a positive real since $n + 1 \ge 1$, and let $G_n \subseteq \mathbb{R}$ be closed with $\{x \in A : \omega_f(x) \ge \varepsilon_n\} = A \cap G_n$. [L2, L3, construct]

1.2 $D = \{\, x \in A : \omega_f(x) > 0 \,\}$: a point $x \in A$ is a discontinuity exactly when $\omega_f(x) \ne 0$, and $\omega_f(x) \ge 0$ always, so exactly when $\omega_f(x) > 0$. [L1]

2.1 $D \subseteq \bigcup_{n \in \mathbb{N}} (A \cap G_n)$. Let $x \in D$, so $\omega_f(x) > 0$. If $\omega_f(x) \ge \varepsilon_0 = 1$ then $x \in A \cap G_0$. Otherwise $0 < \omega_f(x) < 1$, so $\omega_f(x)$ is a positive real, and there is a natural $m \ge 1$ with $1/\iota(m) < \omega_f(x)$; writing $m = n + 1$ with $n \in \mathbb{N}$ gives $\omega_f(x) > \varepsilon_n$, hence $x \in A \cap G_n$. [step 1.1, step 1.2, L3]

2.2 Conversely $\bigcup_{n \in \mathbb{N}} (A \cap G_n) \subseteq D$: if $x \in A \cap G_n$ then $\omega_f(x) \ge \varepsilon_n > 0$, so $x \in D$. [step 1.1, step 1.2, L3]

3.1 Put $F := \bigcup_{n \in \mathbb{N}} G_n$, an $F_\sigma$ subset of $\mathbb{R}$ since each $G_n$ is closed and the family is indexed by $\mathbb{N}$. Then $A \cap F = \bigcup_{n} (A \cap G_n) = D$. [step 1.1, step 2.1, step 2.2, L4]

3.2 Claim 1 is proved: $D = \{x \in A : \omega_f(x) > 0\}$ by step 1.2, and $D = \bigcup_{n \in \mathbb{N}} \{x \in A : \omega_f(x) \ge \varepsilon_n\}$ by steps 2.1 and 2.2, since $A \cap G_n$ is by step 1.1 exactly the set $\{x \in A : \omega_f(x) \ge \varepsilon_n\}$ with $\varepsilon_n = 1/\iota(n+1)$. The union is increasing, since $n \le m$ gives $\iota(n+1) \le \iota(m+1)$ and hence $\varepsilon_m \le \varepsilon_n$. [step 1.1, step 1.2, step 2.1, step 2.2, L3]

4.1 Put $V := \mathbb{R} \setminus F$, a $G_\delta$ subset of $\mathbb{R}$. Then $A \cap V = A \setminus (A \cap F) = A \setminus D = C$. [step 3.1, L4]

5.1 Claim 2 is proved by steps 3.1 and 4.1; and for $A = \mathbb{R}$ the two identities read $D = F$ and $C = V$, so $D$ is $F_\sigma$ and $C$ is $G_\delta$ outright. [step 3.1, step 3.2, step 4.1] ∎

## Remarks

- **The exhaustion is indexed from $0$ and the thresholds are $1/\iota(n+1)$.** $\mathbb{N}$ contains $0$, so the sequence of thresholds is $1, 1/2, 1/3, \dots$ and never $1/\iota(0)$, which is not defined. Writing the union as $\bigcup_{n \ge 1} \{\omega_f \ge 1/\iota(n)\}$ names the same family; the form above is used because a sequence in this library is a function on $\mathbb{N}$.

- **The converse holds and is proved separately.** Every $G_\delta$ subset of $\mathbb{R}$ is the continuity set of some function $\mathbb{R} \to \mathbb{R}$ ([[thm-continuity-set-realisation]]), so the two classes coincide exactly. What the present theorem contributes is the direction that constrains: no function can have a continuity set that fails to be $G_\delta$, and [[cor-no-function-is-continuous-exactly-on-q]] spends that on $\mathbb{Q}$.
````

### `thm-froda`

````markdown
---
id: thm-froda
kind: theorem
title: "Froda's theorem: the set of discontinuities of a monotone function on an interval is at most countable, the injection into $\\mathbb{N}$ being built from one fixed enumeration of the rationals by least index, so no choice principle is used"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
  evidence: exact-source
deps: [def-monotone-function, thm-monotone-discontinuities-are-jumps, thm-monotone-one-sided-limits-exist, def-classification-of-discontinuities, def-countable, thm-rationals-countable, lem-rat-embeds-dense, lem-subset-of-countable, thm-well-ordering-principle, def-interval, def-injection-surjection-bijection, def-equinumerous, def-continuity-real]
justified_by: []
aliases: [thm-froda-countable-discontinuities]
landmark: true
short: "Froda: countably many discontinuities"
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
    - title: "Froda's theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Froda%27s_theorem"
    - title: "Classification of discontinuities (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Classification_of_discontinuities"
    - title: "Discontinuities of monotone functions (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Discontinuities_of_monotone_functions"
pipeline_run: null
---

## Statement

Let $I \subseteq \mathbb{R}$ be order-convex ([[def-interval]]) and let
$f : I \to \mathbb{R}$ be monotone ([[def-monotone-function]]). Then the set

$$D \;:=\; \{\, c \in I : f \text{ is discontinuous at } c \,\}$$

([[def-classification-of-discontinuities]]) is **at most countable**
([[def-countable]]).

More precisely, the proof exhibits an injection $J : D \to \mathbb{N}$
([[def-injection-surjection-bijection]]) built from one fixed enumeration of the
rationals: at a discontinuity $c$ interior to $I$ the value $J(c)$ is read off
the **least index** of a rational lying in the gap
$\bigl(\lim_{x \to c^{-}} f(x),\ \lim_{x \to c^{+}} f(x)\bigr)$, which is a
nonempty open interval by [[thm-monotone-discontinuities-are-jumps]]. The map
$J$ is therefore determined by $f$ and by the fixed enumeration, and **no choice
principle is used**: least indices are canonical by
[[thm-well-ordering-principle]], and nothing anywhere in the proof is selected
without being determined.

## Facts & Assumptions

**Given:** An order-convex $I \subseteq \mathbb{R}$ and a monotone $f : I \to \mathbb{R}$; and $\mathbb{Q}$ denotes the canonical copy of the rationals inside $\mathbb{R}$.

[A1] $I$ is order-convex: $x, y \in I$ and $x \le z \le y$ imply $z \in I$ ([[def-interval]]).

[L1] A nondecreasing $f$ on an order-convex $I$ has, at every $c \in I$, each well-posed one-sided limit; and if both $I^{-} = I \cap (-\infty,c)$ and $I^{+} = I \cap (c,\infty)$ are nonempty then $\lim_{x \to c^{-}} f(x) = \sup\{f(x) : x \in I, x < c\}$ and $\lim_{x \to c^{+}} f(x) = \inf\{f(x) : x \in I, x > c\}$ ([[thm-monotone-one-sided-limits-exist]]).

[L2] For a nondecreasing $f$ on an order-convex $I$ and a point $c$ with both $I^{-}$ and $I^{+}$ nonempty, $f$ is discontinuous at $c$ if and only if $\lim_{x \to c^{-}} f(x) < \lim_{x \to c^{+}} f(x)$ ([[thm-monotone-discontinuities-are-jumps]]).

[L3] $\mathbb{Q} \approx \mathbb{N}$ ([[thm-rationals-countable]]) and the map $q \mapsto \hat q$ embeds $\mathbb{Q}$ in $\mathbb{R}$ injectively ([[lem-rat-embeds-dense]]), so composing a bijection $\mathbb{N} \to \mathbb{Q}$ with that embedding gives a bijection $e : \mathbb{N} \to \mathbb{Q}_{\mathbb{R}}$ onto the canonical copy of the rationals inside $\mathbb{R}$; and strictly between any two distinct reals there lies a point of $\mathbb{Q}_{\mathbb{R}}$ ([[lem-rat-embeds-dense]], [[def-equinumerous]], [[def-injection-surjection-bijection]]).

[L4] Every nonempty subset of $\mathbb{N}$ has a least element ([[thm-well-ordering-principle]]).

[L5] Every subset of $\mathbb{N}$ is at most countable, and a set in bijection with an at most countable set is at most countable ([[lem-subset-of-countable]], [[def-countable]], [[def-equinumerous]], [[def-injection-surjection-bijection]]).

[L6] $f$ is discontinuous at $c$ exactly when it is not continuous there, and $|(-f)(x) - (-f)(c)| = |f(x) - f(c)|$, so $f$ and $-f$ have exactly the same points of discontinuity ([[def-continuity-real]], [[def-monotone-function]]).

## Proof

**Proof technique:** direct.

1.1 It is enough to treat a nondecreasing $f$: if $f$ is nonincreasing then $-f$ is nondecreasing and has the same discontinuity set, so the conclusion for $-f$ is the conclusion for $f$. Assume from here on that $f$ is nondecreasing. [L6]

1.2 Fix once and for all a bijection $e : \mathbb{N} \to \mathbb{Q}_{\mathbb{R}}$; everything below is defined in terms of $f$, $I$ and this one function. [L3, choose]

1.3 Call $c \in I$ **interior** when both $I^{-}$ and $I^{+}$ are nonempty, and write $D_{0}$ for the set of interior points of $I$ at which $f$ is discontinuous. A point of $I$ that is not interior has $I^{-} = \varnothing$, and is then a least element of $I$, or $I^{+} = \varnothing$, and is then a greatest element of $I$; a subset of $\mathbb{R}$ has at most one least and at most one greatest element, so $D \setminus D_{0}$ has at most two elements. [A1]

2.1 For $c \in D_{0}$ put $L^{-}(c) := \lim_{x \to c^{-}} f(x)$ and $L^{+}(c) := \lim_{x \to c^{+}} f(x)$, both of which exist, and note $L^{-}(c) < L^{+}(c)$. [step 1.3, L1, L2]

2.2 Let $c, c' \in D_{0}$ with $c < c'$. Take $t := e(k)$ for the least $k$ with $c < e(k) < c'$, which exists because a point of $\mathbb{Q}_{\mathbb{R}}$ lies strictly between $c$ and $c'$; then $t \in I$, since $c, c' \in I$ and $I$ is order-convex. [step 1.3, A1, L3, L4]

3.1 For $c \in D_{0}$ the set $K(c) := \{\, k \in \mathbb{N} : L^{-}(c) < e(k) < L^{+}(c) \,\}$ is nonempty, since a point of $\mathbb{Q}_{\mathbb{R}}$ lies strictly between the two distinct reals $L^{-}(c)$ and $L^{+}(c)$ and $e$ is onto $\mathbb{Q}_{\mathbb{R}}$; so $j(c) := \min K(c)$ is a well-defined natural number, determined by $c$, $f$ and $e$ alone. [step 2.1, L3, L4]

3.2 With $c < t < c'$ as in step 2.2: $L^{+}(c) = \inf\{f(x) : x \in I, x > c\} \le f(t)$ because $t$ is one of the points in that set, and $f(t) \le \sup\{f(x) : x \in I, x < c'\} = L^{-}(c')$ for the same reason on the other side. Hence $L^{+}(c) \le L^{-}(c')$. [step 2.2, L1]

4.1 The two open intervals $(L^{-}(c), L^{+}(c))$ and $(L^{-}(c'), L^{+}(c'))$ are therefore disjoint, so no point of $\mathbb{Q}_{\mathbb{R}}$ lies in both, so $e(j(c)) \ne e(j(c'))$ and hence $j(c) \ne j(c')$. Since $c < c'$ was an arbitrary pair of distinct elements of $D_{0}$, the map $j : D_{0} \to \mathbb{N}$ is injective. [step 3.1, step 3.2]

5.1 Define $J : D \to \mathbb{N}$ by $J(c) := 2\,j(c) + 1$ for $c \in D_{0}$; $J(c) := 0$ if $c \in D \setminus D_{0}$ is a least element of $I$; and $J(c) := 2$ if $c \in D \setminus D_{0}$ is a greatest element of $I$ and not a least one. Then $J$ is injective: it is injective on $D_{0}$ by step 4.1, it separates the at most two points of $D \setminus D_{0}$ from each other, and its values on $D_{0}$ are odd while its values off $D_{0}$ are even. [step 1.3, step 4.1, construct]

6.1 Consequently $J$ is a bijection from $D$ onto the subset $J[D] \subseteq \mathbb{N}$, which is at most countable; countability transfers along that bijection, so $D$ is at most countable. [step 5.1, L5] ∎

## Remarks

- **The bound is attained.** Froda's theorem gives no better bound than *at most countable*, and none is available: for every at most countable $E \subseteq \mathbb{R}$ there is a bounded nondecreasing function on $\mathbb{R}$ whose discontinuity set is exactly $E$ ([[thm-monotone-with-prescribed-discontinuity-set]]). Taking $E = \mathbb{Q}$ gives a nondecreasing function discontinuous at every rational and continuous at every irrational.

- **What the choice-freedom rests on.** Two canonical selections, and nothing else: one fixed bijection $e : \mathbb{N} \to \mathbb{Q}$, produced by [[thm-rationals-countable]], whose own proof spends no choice principle; and the least element of a nonempty set of naturals ([[thm-well-ordering-principle]]). Replacing "least index" by "some index" would turn step 3.1 into an application of a choice principle over the possibly uncountable index set $D_{0}$.

- **Monotonicity is doing all the work, not continuity of anything.** The only property of $f$ used after step 1.1 is the inequality $L^{+}(c) \le L^{-}(c')$ of step 3.2, which says that the gaps opened by distinct discontinuities are laid out in the same order as the discontinuities themselves and therefore do not overlap. A function that is not monotone can be discontinuous everywhere ([[thm-dirichlet-and-thomae-continuity-sets]]).
````

