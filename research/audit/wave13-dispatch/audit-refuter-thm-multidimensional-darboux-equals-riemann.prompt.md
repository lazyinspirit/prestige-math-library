# Audit proof-refuter brief — Wave 13, A6

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
For an `ai-generated` Statement or consumer, actively search for a
counterexample or a failure in the witness or cited generated premise. A false
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

## Selection reasons

- critical risk (12): 10 declared dependencies; 8 cited facts; biconditional / both-direction claim; boundary-sensitive language; analytic limiting/completeness language
- top-20 manifest-edge consumer (10 outgoing relationships)

## Target item — `thm-multidimensional-darboux-equals-riemann`

Normalized current SHA-256: `98ff048acc7f636a2df6e516d461e8ca3f7c9a6c02f40e37744489668e4b8870`

The complete exact-current item follows, including frontmatter:

````markdown
---
id: thm-multidimensional-darboux-equals-riemann
kind: theorem
title: "The multidimensional Darboux and tagged-mesh definitions of the Riemann integral agree"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-multidimensional-tagged-partition-and-riemann-sum, def-multidimensional-darboux-integral, thm-multidimensional-riemann-criterion, lem-multidimensional-refinement-inequalities, def-multidimensional-darboux-sums, def-multidimensional-grid-partition, cor-archimedean-reciprocal, lem-sup-epsilon, lem-inf-epsilon, lem-finite-choice]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-01
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis, Riemann Integral in Several Variables"
      url: "https://www.jirka.org/ra/html/sec_rirect.html"
    - title: "J. Lebl, Basic Analysis, The Riemann-Lebesgue Criterion"
      url: "https://www.jirka.org/ra/html/sec_riemannlebesgue.html"
pipeline_run: null
---

## Statement

A bounded function on a nondegenerate rectangle is Darboux integrable with
value $I$ if and only if all tagged grid sums converge with mesh to $I$.

## Facts & Assumptions

**Given:** A bounded $f:Q\to\mathbb R$, with $|f|\le B$, on a nondegenerate rectangle $Q$.

[L1] Every tagged sum lies between its grid's Darboux sums ([[def-multidimensional-tagged-partition-and-riemann-sum]]).

[L2] Small Darboux gaps characterize integrability ([[thm-multidimensional-riemann-criterion]]).

[L3] Refining by a fixed grid changes the bounds only by the boundary-slab estimate ([[lem-multidimensional-refinement-inequalities]]).

[L4] Finite choice selects cell values within any positive distance of infima and suprema ([[lem-sup-epsilon]], [[lem-inf-epsilon]], [[lem-finite-choice]]).

[L5] Repeated equal subdivision and the Archimedean reciprocal property give grid partitions of a nondegenerate rectangle with arbitrarily small mesh ([[def-multidimensional-grid-partition]], [[cor-archimedean-reciprocal]]).

## Proof

**Proof technique:** direct.

1.1 If $f$ is Darboux integrable, choose a fixed grid $P_0$ with small gap by [L2]. For any sufficiently fine $P$, refine it with $P_0$; [L3] makes the Darboux bounds of $P$ differ from those of the refinement by arbitrarily little. Since the refined lower and upper sums trap $I$, [L1] makes every tagged sum over $P$ close to $I$.  [L1, L2, L3]

1.2 Conversely, suppose every sufficiently fine tagged sum is close to $I$. By [L5], choose one grid below the convergence mesh threshold and, using [L4], tag each cell near its supremum and then near its infimum. The two tagged sums approximate $U(f,P)$ and $L(f,P)$, so their common closeness to $I$ makes the Darboux gap arbitrarily small.   [L4, L5, given]

2.1 Apply [L2] in step 1.2. Since the near-upper and near-lower tagged sums are both arbitrarily close to $I$, the common lower/upper integral lies arbitrarily close to $I$ and therefore equals $I$. Both directions give the same value.  [step 1.1, step 1.2, L1, L2] ∎
````

## Wave 13 provenance row

```json
{
  "id": "thm-multidimensional-darboux-equals-riemann",
  "statement": "ai-altered",
  "proof": "ai-altered",
  "evidence": "semantic-source",
  "urls": [
    "https://www.jirka.org/ra/html/sec_rirect.html"
  ],
  "rationale": "The standard literature equates Darboux integrability with the universal small-mesh tagged-sum criterion. The item adapts this to coordinate grids and supplies boundary-slab and finite-choice details.",
  "alpha_concurred": false,
  "at": "2026-08-09"
}
```

## Exact-current proof contract

```json
{
  "citations": [
    {
      "fact": "L1",
      "source": "def-multidimensional-tagged-partition-and-riemann-sum",
      "source_section": "Definition",
      "quote": "A **tagging** of a grid $P$ assigns to every cell $Q_i$ a point $\\xi_i\\in Q_i$. The lower corner is a canonical tagging, so taggings exist without choice. The **Riemann sum** is\n$$S(f,P,\\xi):=\\sum_i f(\\xi_i)\\operatorname{vol}(Q_i),$$\nwith the iterated sum convention of [[def-multidimensional-grid-partition]].\n\nThe tagged sums **converge with mesh to $I$** if for every $\\varepsilon>0$ some $\\delta>0$ makes $|S(f,P,\\xi)-I|<\\varepsilon$ for every tagged grid with mesh below $\\delta$. Finite cellwise selections used in proofs are licensed by [[lem-finite-choice]] and [[def-choice-function]], not by countable choice.\n\nFor bounded $f$, each tag lies in its cell, so termwise inequalities and nonnegative volumes give\n$$L(f,P)\\le S(f,P,\\xi)\\le U(f,P)$$\n([[def-multidimensional-darboux-sums]], [[def-bounded-set]]).",
      "quote_selection": "full-source-section",
      "uses": [
        "1.1",
        "2.1"
      ]
    },
    {
      "fact": "L2",
      "source": "thm-multidimensional-riemann-criterion",
      "source_section": "Statement",
      "quote": "A bounded $f:Q\\to\\mathbb R$ on a nondegenerate rectangle is Riemann\nintegrable if and only if, for every $\\varepsilon>0$, some grid $P$ satisfies\n$U(f,P)-L(f,P)<\\varepsilon$.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.1",
        "2.1"
      ]
    },
    {
      "fact": "L3",
      "source": "lem-multidimensional-refinement-inequalities",
      "source_section": "Statement",
      "quote": "If $P'$ refines a grid $P$, then $L(f,P)\\le L(f,P')\\le U(f,P')\\le U(f,P)$. Moreover, for a fixed grid $P$, there is a constant $C_P$ such that refining any grid of mesh $\\delta$ by $P$ changes either Darboux sum by at most $2B C_P\\delta$, where $|f|\\le B$.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L4",
      "source": "lem-sup-epsilon",
      "source_section": "Statement",
      "quote": "Let $S \\subseteq \\mathbb{R}$ be nonempty and bounded above, and let $u$ be an\nupper bound of $S$ ([[def-complete-ordered-field]]). Then\n\n$$u = \\sup S \\quad \\Longleftrightarrow \\quad \\text{for every } \\varepsilon > 0 \\text{ there exists } s \\in S \\text{ with } u - \\varepsilon < s.$$\n\nIn words: among the upper bounds of $S$, the supremum is exactly the one that\ncannot be lowered by any positive amount and still bound $S$.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.2"
      ]
    },
    {
      "fact": "L4",
      "source": "lem-inf-epsilon",
      "source_section": "Statement",
      "quote": "Let $S \\subseteq \\mathbb{R}$ be nonempty and bounded below, and let $\\ell$ be a\nlower bound of $S$ ([[def-bounded-set]]). Then\n\n$$\\ell = \\inf S \\quad \\Longleftrightarrow \\quad \\text{for every } \\varepsilon > 0 \\text{ there exists } s \\in S \\text{ with } s < \\ell + \\varepsilon.$$\n\nIn words: among the lower bounds of $S$, the infimum is exactly the one that\ncannot be raised by any positive amount and still bound $S$ from below.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.2"
      ]
    },
    {
      "fact": "L4",
      "source": "lem-finite-choice",
      "source_section": "Statement",
      "quote": "Let $n \\in \\mathbb{N}$ and let $F$ be a function with domain $n$ all of whose\nvalues are nonempty sets. Then the family of its values,\n$\\mathcal{F} = F[n] = \\{\\, F(i) : i \\in n \\,\\}$, has a choice function\n([[def-choice-function]]).\n\nThis is a theorem of ZF: its proof uses no form of the Axiom of Choice\n([[def-axiom-of-choice]]).\n\nWhat is proved below is exactly the displayed statement, by induction on $n$. The\nnatural number $n$ serves as the index set in the von Neumann sense,\n$n = \\{0, 1, \\dots, n-1\\}$ ([[def-natural-numbers]]), so \"$F$ has domain $n$\"\nsays precisely that the members of $\\mathcal{F}$ are listed as\n$F(0), \\dots, F(n-1)$. The listing need not be injective, and $\\mathcal{F}$ is the\nset of values, so repetitions are harmless and are not counted.\n\nThe displayed statement and its proof use only a natural-number-indexed\nfunction. They do not identify an arbitrary finite family with a particular\nenumeration.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.2"
      ]
    },
    {
      "fact": "L5",
      "source": "def-multidimensional-grid-partition",
      "source_section": "Definition",
      "quote": "A **grid partition** $P$ of a nondegenerate rectangle $Q=[a,b]\\subseteq\\mathbb R^m$ is a family, one for each $j<m$, of one-dimensional partitions $a_j=t_{j,0}<\\cdots<t_{j,n_j}=b_j$ ([[def-partition-and-refinement]]). For a multi-index $i=(i_0,\\ldots,i_{m-1})$ with $i_j<n_j$, its cell is\n$$Q_i:=\\prod_{j<m}[t_{j,i_j},t_{j,i_j+1}].$$\nA sum over cells means the iterated recursive sum $\\sum_{i_0<n_0}\\cdots\\sum_{i_{m-1}<n_{m-1}}$ of [[def-finite-sum]]. The **mesh** is $\\max_{j<m,i_j<n_j}(t_{j,i_j+1}-t_{j,i_j})$, which exists by [[lem-finite-set-has-max]] and is the largest $d_\\infty$-diameter ([[def-p-norms-on-rn]], [[lem-p-norms-are-norms-and-induce-the-published-metrics]]).\n\nRefinement is coordinatewise. Coordinatewise union gives a common refinement. The cells cover $Q$ and have pairwise disjoint interiors. Repeated splitting of finite sums and induction on $m$ give\n$$\\sum_i\\operatorname{vol}(Q_i)=\\operatorname{vol}(Q).$$\nThese statements include boundary overlaps: boundaries may meet, but interiors do not, and volume splitting is algebraic.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.2"
      ]
    },
    {
      "fact": "L5",
      "source": "cor-archimedean-reciprocal",
      "source_section": "Statement",
      "quote": "Let $F$ be a complete ordered field ([[def-complete-ordered-field]]) and let\n$\\varepsilon \\in F$ with $\\varepsilon > 0$. Then there is a natural number\n$n \\ge 1$ such that\n\n$$\\frac{1}{n \\cdot 1_F} < \\varepsilon ,$$\n\nwhere $n \\cdot 1_F$ is the canonical natural of $F$ ([[thm-of-archimedean]]) and\n$1/(n \\cdot 1_F)$ is its multiplicative inverse ([[def-field]]). As is standard\nwe abbreviate $n \\cdot 1_F$ to $n$ and write the conclusion $1/n < \\varepsilon$.\n\nThis is the **reciprocal form** of the Archimedean property.\n[[thm-of-archimedean]] on its own delivers only the assertion that the canonical\nnaturals are cofinal, $x < n \\cdot 1_F$; the form actually used in analysis, that\nthe reciprocals of the naturals get below every positive bound, is the statement\nabove, and it is recorded separately so that no proof has to reconstruct the\ninversion step in passing.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.2"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1.1",
      "claim": "If $f$ is Darboux integrable, choose a fixed grid $P_0$ with small gap by [L2]. For any sufficiently fine $P$, refine it with $P_0$; [L3] makes the Darboux bounds of $P$ differ from those of the refinement by arbitrarily little. Since the refined lower and upper sums trap $I$, [L1] makes every tagged sum over $P$ close to $I$. ",
      "step": "1.1",
      "inputs": [
        "L2",
        "L3",
        "L1"
      ]
    },
    {
      "id": "step-1.2",
      "claim": "Conversely, suppose every sufficiently fine tagged sum is close to $I$. By [L5], choose one grid below the convergence mesh threshold and, using [L4], tag each cell near its supremum and then near its infimum. The two tagged sums approximate $U(f,P)$ and $L(f,P)$, so their common closeness to $I$ makes the Darboux gap arbitrarily small.  ",
      "step": "1.2",
      "inputs": [
        "L5",
        "L4"
      ]
    },
    {
      "id": "step-2.1",
      "claim": "Apply [L2] in step 1.2. Since the near-upper and near-lower tagged sums are both arbitrarily close to $I$, the common lower/upper integral lies arbitrarily close to $I$ and therefore equals $I$. Both directions give the same value. ",
      "step": "2.1",
      "inputs": [
        "L2",
        "step 1.2",
        "step 1.1",
        "L1"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "not_applicable",
      "reason": "thm-multidimensional-darboux-equals-riemann: the Statement fixes the displayed objects and has no conclusion depending on an unlicensed choice from an empty family: A bounded function on a nondegenerate rectangle is Darboux integrable with value $I$ if and only if all tagged grid sums converge with mesh to $I$."
    },
    {
      "case": "zero",
      "status": "not_applicable",
      "reason": "thm-multidimensional-darboux-equals-riemann: no independent zero-parameter boundary remains after the stated hypotheses and definitions; checked against the Statement: A bounded function on a nondegenerate rectangle is Darboux integrable with value $I$ if and only if all tagged grid sums converge with mesh to $I$."
    },
    {
      "case": "one",
      "status": "not_applicable",
      "reason": "thm-multidimensional-darboux-equals-riemann: the assertion has no separate unit-size case; its quantified argument applies without a one-case split: A bounded function on a nondegenerate rectangle is Darboux integrable with value $I$ if and only if all tagged grid sums converge with mesh to $I$."
    },
    {
      "case": "degenerate",
      "status": "checked",
      "evidence": "Statement: degeneracy is explicitly excluded or separated by the hypotheses: A bounded function on a nondegenerate rectangle is Darboux integrable with value $I$ if and only if all tagged grid sums converge with mesh to $I$."
    },
    {
      "case": "endpoints",
      "status": "not_applicable",
      "reason": "thm-multidimensional-darboux-equals-riemann: no interval or radial endpoint is part of the conclusion; checked against the Statement: A bounded function on a nondegenerate rectangle is Darboux integrable with value $I$ if and only if all tagged grid sums converge with mesh to $I$."
    },
    {
      "case": "nonempty-choice",
      "status": "checked",
      "evidence": "step 1.1: every witness selected there is drawn after the proof establishes the relevant positivity, existence, or nonemptiness condition."
    },
    {
      "case": "iff-forward",
      "status": "checked",
      "evidence": "Statement and step 1.1: the forward implication is represented among the numbered derivations beginning at this step."
    },
    {
      "case": "iff-reverse",
      "status": "checked",
      "evidence": "Statement and step 1.2: the reverse implication is represented among the numbered derivations ending at or before this step."
    }
  ]
}
```

## Generated audit-manifest relationships

```json
[
  {
    "source": "thm-multidimensional-darboux-equals-riemann",
    "sourcePage": "the-riemann-integral-in-rn-and-jordan-content",
    "batch": "wave13-real-analysis",
    "target": "def-multidimensional-tagged-partition-and-riemann-sum",
    "declared_target": "def-multidimensional-tagged-partition-and-riemann-sum",
    "target_statement_provenance": "ai-altered",
    "targetPage": "the-riemann-integral-in-rn-and-jordan-content",
    "targetBatch": "wave13-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-multidimensional-darboux-equals-riemann",
    "sourcePage": "the-riemann-integral-in-rn-and-jordan-content",
    "batch": "wave13-real-analysis",
    "target": "def-multidimensional-darboux-integral",
    "declared_target": "def-multidimensional-darboux-integral",
    "target_statement_provenance": "ai-altered",
    "targetPage": "the-riemann-integral-in-rn-and-jordan-content",
    "targetBatch": "wave13-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-multidimensional-darboux-equals-riemann",
    "sourcePage": "the-riemann-integral-in-rn-and-jordan-content",
    "batch": "wave13-real-analysis",
    "target": "thm-multidimensional-riemann-criterion",
    "declared_target": "thm-multidimensional-riemann-criterion",
    "target_statement_provenance": "ai-altered",
    "targetPage": "the-riemann-integral-in-rn-and-jordan-content",
    "targetBatch": "wave13-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-multidimensional-darboux-equals-riemann",
    "sourcePage": "the-riemann-integral-in-rn-and-jordan-content",
    "batch": "wave13-real-analysis",
    "target": "lem-multidimensional-refinement-inequalities",
    "declared_target": "lem-multidimensional-refinement-inequalities",
    "target_statement_provenance": "ai-altered",
    "targetPage": "the-riemann-integral-in-rn-and-jordan-content",
    "targetBatch": "wave13-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-multidimensional-darboux-equals-riemann",
    "sourcePage": "the-riemann-integral-in-rn-and-jordan-content",
    "batch": "wave13-real-analysis",
    "target": "def-multidimensional-darboux-sums",
    "declared_target": "def-multidimensional-darboux-sums",
    "target_statement_provenance": "ai-altered",
    "targetPage": "the-riemann-integral-in-rn-and-jordan-content",
    "targetBatch": "wave13-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-multidimensional-darboux-equals-riemann",
    "sourcePage": "the-riemann-integral-in-rn-and-jordan-content",
    "batch": "wave13-real-analysis",
    "target": "def-multidimensional-grid-partition",
    "declared_target": "def-multidimensional-grid-partition",
    "target_statement_provenance": "ai-altered",
    "targetPage": "the-riemann-integral-in-rn-and-jordan-content",
    "targetBatch": "wave13-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-multidimensional-darboux-equals-riemann",
    "sourcePage": "the-riemann-integral-in-rn-and-jordan-content",
    "batch": "wave13-real-analysis",
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
    "source": "thm-multidimensional-darboux-equals-riemann",
    "sourcePage": "the-riemann-integral-in-rn-and-jordan-content",
    "batch": "wave13-real-analysis",
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
    "source": "thm-multidimensional-darboux-equals-riemann",
    "sourcePage": "the-riemann-integral-in-rn-and-jordan-content",
    "batch": "wave13-real-analysis",
    "target": "lem-inf-epsilon",
    "declared_target": "lem-inf-epsilon",
    "target_statement_provenance": "ai-altered",
    "targetPage": "suprema-and-infima",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-multidimensional-darboux-equals-riemann",
    "sourcePage": "the-riemann-integral-in-rn-and-jordan-content",
    "batch": "wave13-real-analysis",
    "target": "lem-finite-choice",
    "declared_target": "lem-finite-choice",
    "target_statement_provenance": "ai-altered",
    "targetPage": "order-zorn-and-the-axiom-of-choice",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  }
]
```

## Relevant current generated-risk rows

```json
[]
```

## Full exact-current text of every cited or declared item (10)

### `cor-archimedean-reciprocal`

````markdown
---
id: cor-archimedean-reciprocal
kind: corollary
title: "For every $\\varepsilon > 0$ in a complete ordered field there is a natural $n \\ge 1$ with $1/n < \\varepsilon$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-of-archimedean, lem-of-inverse-positive, def-complete-ordered-field, def-ordered-field, def-field]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-26
  audited: 2026-07-26
sources:
  scraped: []
  references:
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1 (Thm 1.20(a) and its corollaries)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "T. Tao, Analysis I, 3rd ed., §5.4 (Prop. 5.4.12, the Archimedean property)"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "Archimedean property (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Archimedean_property"
    - title: "UTSA Mathematics: The Archimedean property"
      url: "https://mathresearch.utsa.edu/wiki/index.php?title=Real_Numbers%3AArchimedean_Property"
---

## Statement

Let $F$ be a complete ordered field ([[def-complete-ordered-field]]) and let
$\varepsilon \in F$ with $\varepsilon > 0$. Then there is a natural number
$n \ge 1$ such that

$$\frac{1}{n \cdot 1_F} < \varepsilon ,$$

where $n \cdot 1_F$ is the canonical natural of $F$ ([[thm-of-archimedean]]) and
$1/(n \cdot 1_F)$ is its multiplicative inverse ([[def-field]]). As is standard
we abbreviate $n \cdot 1_F$ to $n$ and write the conclusion $1/n < \varepsilon$.

This is the **reciprocal form** of the Archimedean property.
[[thm-of-archimedean]] on its own delivers only the assertion that the canonical
naturals are cofinal, $x < n \cdot 1_F$; the form actually used in analysis, that
the reciprocals of the naturals get below every positive bound, is the statement
above, and it is recorded separately so that no proof has to reconstruct the
inversion step in passing.

## Facts & Assumptions

**Given:** A complete ordered field $F$ and an element $\varepsilon \in F$ with $\varepsilon > 0$.

[L1] Archimedean property: for every $x \in F$ there is a natural number $n \ge 1$ with $x < n \cdot 1_F$ ([[thm-of-archimedean]], [[def-complete-ordered-field]]).

[L2] Inverses and order: if $a > 0$ then $a^{-1} > 0$, and if $0 < a < b$ then $0 < b^{-1} < a^{-1}$ ([[lem-of-inverse-positive]], [[def-ordered-field]]).

[L3] Field arithmetic: an element $a$ with $a > 0$ is nonzero by trichotomy, hence has a multiplicative inverse $a^{-1}$, and $(a^{-1})^{-1} = a$ ([[def-field]], [[def-ordered-field]]).

## Proof

**Proof technique:** direct.

1.1 Since $\varepsilon > 0$, trichotomy gives $\varepsilon \ne 0$, so $\varepsilon^{-1}$ exists, and $\varepsilon^{-1} > 0$. [given, L2, L3]

2.1 Apply [L1] to $x = \varepsilon^{-1}$: fix a natural number $n \ge 1$ with $\varepsilon^{-1} < n \cdot 1_F$. [step 1.1, L1, choose]

3.1 Chaining the two displayed inequalities gives $0 < \varepsilon^{-1} < n \cdot 1_F$; in particular $n \cdot 1_F > 0$, so $n \cdot 1_F \ne 0$ and $1/(n \cdot 1_F)$ is defined. [step 1.1, step 2.1, L3]

4.1 Apply the second claim of [L2] with $a = \varepsilon^{-1}$ and $b = n \cdot 1_F$: $0 < (n \cdot 1_F)^{-1} < (\varepsilon^{-1})^{-1}$. [step 3.1, L2]

5.1 By [L3], $(\varepsilon^{-1})^{-1} = \varepsilon$, so the natural number $n \ge 1$ fixed in step 2.1 satisfies $1/(n \cdot 1_F) < \varepsilon$, which is the assertion. [step 4.1, L3] ∎

## Remarks

- **Monotonicity gives the eventual form for free.** If $m \ge n \ge 1$ then
  $m \cdot 1_F \ge n \cdot 1_F > 0$, because $k \mapsto k \cdot 1_F$ is strictly
  increasing on the naturals $\ge 1$ ([[lem-of-naturals-positive]]), and so
  $1/(m \cdot 1_F) \le 1/(n \cdot 1_F) < \varepsilon$ by [[lem-of-inverse-positive]]
  again. So the corollary yields not merely one index but a threshold: every
  $m \ge n$ satisfies $1/m < \varepsilon$. That one extra line is what a
  convergence proof needs, and it is left to the caller rather than folded into
  the statement, because the caller usually has a threshold of its own to combine
  it with.

- **Completeness is used only through [[thm-of-archimedean]].** Nothing here
  needs the least-upper-bound property directly. The corollary therefore holds
  verbatim in any Archimedean ordered field, in particular in $\mathbb{Q}$, and
  it fails in a non-Archimedean ordered field, where an infinitesimal
  $\varepsilon > 0$ is below every $1/n$ by construction.

- The equivalence is exact: the reciprocal form implies the cofinal form back
  again, since given $x > 0$ one applies it to $\varepsilon = 1/x$. The two are
  the same property written on the two sides of the inversion, and only the
  direction proved above is used in this library.
````

### `def-multidimensional-darboux-integral`

````markdown
---
id: def-multidimensional-darboux-integral
kind: definition
title: "The lower and upper Darboux integrals over a nondegenerate rectangle in $\\mathbb{R}^m$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-multidimensional-darboux-sums, lem-multidimensional-refinement-inequalities, def-multidimensional-grid-partition, def-complete-ordered-field, def-infimum, thm-infimum-property, lem-sup-unique, def-bounded-set]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  audited: 2026-08-01
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis, Riemann Integral in Several Variables"
      url: "https://www.jirka.org/ra/html/sec_rirect.html"
    - title: "J. Lebl, Basic Analysis, The Riemann-Lebesgue Criterion"
      url: "https://www.jirka.org/ra/html/sec_riemannlebesgue.html"
pipeline_run: null
---

## Definition

For a bounded function $f:Q\to\mathbb R$ on a nondegenerate rectangle
$Q\subseteq\mathbb R^m$, define
$$\underline{\int_Q}f:=\sup_P L(f,P),\qquad \overline{\int_Q}f:=\inf_P U(f,P),$$
over all grid partitions $P$ of $Q$. The grid family is nonempty, since the endpoints in each coordinate give a one-cell grid. Every lower sum is at most every upper sum by a common refinement and [[lem-multidimensional-refinement-inequalities]], so the two sets of sums are nonempty and bounded and the extrema exist ([[def-complete-ordered-field]], [[thm-infimum-property]], [[def-infimum]], [[lem-sup-unique]]).

The function is **Riemann integrable over $Q$** when the two values agree.
Their unique common real is $\int_Q f$. No integral is defined here for a
degenerate rectangle, because the grid definition requires every coordinate
interval to have distinct endpoints. This is the multidimensional Darboux
definition; its agreement with the published one-dimensional definition is
proved separately.
````

### `def-multidimensional-darboux-sums`

````markdown
---
id: def-multidimensional-darboux-sums
kind: definition
title: "Lower and upper Darboux sums over a grid partition in $\\mathbb{R}^m$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-multidimensional-grid-partition, def-multidimensional-rectangle-and-volume, def-bounded-set, def-complete-ordered-field, def-infimum, thm-infimum-property, lem-sup-unique, lem-finite-sum-laws]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  audited: 2026-08-01
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis, Riemann Integral in Several Variables"
      url: "https://www.jirka.org/ra/html/sec_rirect.html"
    - title: "J. Lebl, Basic Analysis, The Riemann-Lebesgue Criterion"
      url: "https://www.jirka.org/ra/html/sec_riemannlebesgue.html"
pipeline_run: null
---

## Definition

Let $f:Q\to\mathbb R$ be bounded on a nondegenerate rectangle and let $P$ be a grid. For each cell $Q_i$, put
$$m_i:=\inf f[Q_i],\quad M_i:=\sup f[Q_i],\quad L(f,P):=\sum_i m_i\operatorname{vol}(Q_i),\quad U(f,P):=\sum_i M_i\operatorname{vol}(Q_i).$$
The extrema exist as finite reals because each nonempty image is bounded ([[def-bounded-set]], [[def-complete-ordered-field]], [[thm-infimum-property]], [[def-infimum]], [[lem-sup-unique]]), and the sums use the iterated convention of [[def-multidimensional-grid-partition]].

Since $m_i\le M_i$ and cell volumes are nonnegative, $L(f,P)\le U(f,P)$. Moreover
$$U(f,P)-L(f,P)=\sum_i(M_i-m_i)\operatorname{vol}(Q_i),$$
the sum of cell oscillations weighted by volume ([[lem-finite-sum-laws]]).
````

### `def-multidimensional-grid-partition`

````markdown
---
id: def-multidimensional-grid-partition
kind: definition
title: "Grid partitions of a rectangle in $\\mathbb{R}^m$, their cells, refinements and mesh"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-multidimensional-rectangle-and-volume, def-partition-and-refinement, thm-induction-principle, def-finite-sum, lem-finite-sum-laws, def-p-norms-on-rn, lem-p-norms-are-norms-and-induce-the-published-metrics, lem-finite-set-has-max, def-max-min]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  audited: 2026-08-01
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis, Riemann Integral in Several Variables"
      url: "https://www.jirka.org/ra/html/sec_rirect.html"
    - title: "J. Lebl, Basic Analysis, The Riemann-Lebesgue Criterion"
      url: "https://www.jirka.org/ra/html/sec_riemannlebesgue.html"
pipeline_run: null
---

## Definition

A **grid partition** $P$ of a nondegenerate rectangle $Q=[a,b]\subseteq\mathbb R^m$ is a family, one for each $j<m$, of one-dimensional partitions $a_j=t_{j,0}<\cdots<t_{j,n_j}=b_j$ ([[def-partition-and-refinement]]). For a multi-index $i=(i_0,\ldots,i_{m-1})$ with $i_j<n_j$, its cell is
$$Q_i:=\prod_{j<m}[t_{j,i_j},t_{j,i_j+1}].$$
A sum over cells means the iterated recursive sum $\sum_{i_0<n_0}\cdots\sum_{i_{m-1}<n_{m-1}}$ of [[def-finite-sum]]. The **mesh** is $\max_{j<m,i_j<n_j}(t_{j,i_j+1}-t_{j,i_j})$, which exists by [[lem-finite-set-has-max]] and is the largest $d_\infty$-diameter ([[def-p-norms-on-rn]], [[lem-p-norms-are-norms-and-induce-the-published-metrics]]).

Refinement is coordinatewise. Coordinatewise union gives a common refinement. The cells cover $Q$ and have pairwise disjoint interiors. Repeated splitting of finite sums and induction on $m$ give
$$\sum_i\operatorname{vol}(Q_i)=\operatorname{vol}(Q).$$
These statements include boundary overlaps: boundaries may meet, but interiors do not, and volume splitting is algebraic.
````

### `def-multidimensional-tagged-partition-and-riemann-sum`

````markdown
---
id: def-multidimensional-tagged-partition-and-riemann-sum
kind: definition
title: "Tagged grid partitions and Riemann sums in $\\mathbb{R}^m$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-multidimensional-grid-partition, def-multidimensional-darboux-sums, def-multidimensional-rectangle-and-volume, lem-finite-choice, def-choice-function, def-bounded-set]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  audited: 2026-08-01
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis, Riemann Integral in Several Variables"
      url: "https://www.jirka.org/ra/html/sec_rirect.html"
    - title: "J. Lebl, Basic Analysis, The Riemann-Lebesgue Criterion"
      url: "https://www.jirka.org/ra/html/sec_riemannlebesgue.html"
pipeline_run: null
---

## Definition

A **tagging** of a grid $P$ assigns to every cell $Q_i$ a point $\xi_i\in Q_i$. The lower corner is a canonical tagging, so taggings exist without choice. The **Riemann sum** is
$$S(f,P,\xi):=\sum_i f(\xi_i)\operatorname{vol}(Q_i),$$
with the iterated sum convention of [[def-multidimensional-grid-partition]].

The tagged sums **converge with mesh to $I$** if for every $\varepsilon>0$ some $\delta>0$ makes $|S(f,P,\xi)-I|<\varepsilon$ for every tagged grid with mesh below $\delta$. Finite cellwise selections used in proofs are licensed by [[lem-finite-choice]] and [[def-choice-function]], not by countable choice.

For bounded $f$, each tag lies in its cell, so termwise inequalities and nonnegative volumes give
$$L(f,P)\le S(f,P,\xi)\le U(f,P)$$
([[def-multidimensional-darboux-sums]], [[def-bounded-set]]).
````

### `lem-finite-choice`

````markdown
---
id: lem-finite-choice
kind: lemma
title: "Every natural-number-indexed list of nonempty sets has a choice function on its family of values"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-choice-function, thm-induction-principle, def-natural-numbers, def-nat-addition, def-axiom-of-choice]
justified_by: []
forward_refs: [def-countable, ex-finite-choice-by-induction, ex-russells-socks]
aliases: []
landmark: false
proof_strategy: induction
verification:
  precheck: pass
  verified:
    model: gpt-5.6-sol-codex-subscription
    verdict: certify
    date: 2026-08-03
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Axiom of choice (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Axiom_of_choice"
    - title: "Choice function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Choice_function"
pipeline_run: null
---

## Statement

Let $n \in \mathbb{N}$ and let $F$ be a function with domain $n$ all of whose
values are nonempty sets. Then the family of its values,
$\mathcal{F} = F[n] = \{\, F(i) : i \in n \,\}$, has a choice function
([[def-choice-function]]).

This is a theorem of ZF: its proof uses no form of the Axiom of Choice
([[def-axiom-of-choice]]).

What is proved below is exactly the displayed statement, by induction on $n$. The
natural number $n$ serves as the index set in the von Neumann sense,
$n = \{0, 1, \dots, n-1\}$ ([[def-natural-numbers]]), so "$F$ has domain $n$"
says precisely that the members of $\mathcal{F}$ are listed as
$F(0), \dots, F(n-1)$. The listing need not be injective, and $\mathcal{F}$ is the
set of values, so repetitions are harmless and are not counted.

The displayed statement and its proof use only a natural-number-indexed
function. They do not identify an arbitrary finite family with a particular
enumeration.

## Facts & Assumptions

**Given:** A natural number $n$, used as the index set $n = \{0, \dots, n-1\}$, and a function $F$ with domain $n$ such that $F(i) \ne \emptyset$ for every $i \in n$; write $F[n] = \{F(i) : i \in n\}$ for the family of values of $F$.

[A1] $P(n)$ denotes the statement: for every function $F$ with domain $n$ all of whose values are nonempty sets, the family $F[n]$ has a choice function.

[L1] Induction principle: if $P(0)$ holds and $P(n)$ implies $P(n+1)$ for every $n \in \mathbb{N}$, then $P(n)$ holds for every $n \in \mathbb{N}$, where $n + 1$ denotes the successor $\sigma(n)$ ([[thm-induction-principle]], [[def-nat-addition]]).

[L2] A choice function for a family $\mathcal{F}$ is a function $g$ with domain $\mathcal{F}$ such that $g(S) \in S$ for every $S \in \mathcal{F}$ ([[def-choice-function]]).

[L3] $0=\emptyset$ and $\sigma(n)=n\cup\{n\}$, so $n\subseteq\sigma(n)$ ([[def-natural-numbers]]). Thus a function $F$ with domain $\sigma(n)$ restricts to a function with domain $n$; moreover, directly from the definition of image, $y\in F[\sigma(n)]$ iff $y=F(i)$ for some $i\in n$ or $y=F(n)$, so $F[\sigma(n)]=F[n]\cup\{F(n)\}$.

## Proof

**Proof technique:** induction.

1.1 Base case: $0 = \emptyset$, so the only function with domain $0$ is the empty function, its family of values is $F[0] = \emptyset$, and the empty function has domain $\emptyset$ and satisfies the defining condition vacuously, so it is a choice function for $F[0]$; hence $P(0)$ holds. [base, A1, L2, L3]

1.2 Inductive hypothesis: fix $n \in \mathbb{N}$ and assume $P(n)$, that every function with domain $n$ whose values are all nonempty has a choice function for its family of values. [ih, A1]

1.3 Let $F$ be an arbitrary function with domain $\sigma(n) = n \cup \{n\}$ all of whose values are nonempty sets; write $S = F(n)$ and $\mathcal{G} = F[n]$, the family of values of the restriction $F \restriction n$, so that $F[\sigma(n)] = \mathcal{G} \cup \{S\}$. [given, L3]

2.1 The restriction $F \restriction n$ is a function with domain $n$, and every value of it is a value of $F$, hence nonempty; so the inductive hypothesis applies to it and supplies a choice function $h$ for $\mathcal{G}$, a function with domain $\mathcal{G}$ satisfying $h(T) \in T$ for every $T \in \mathcal{G}$. [step 1.3, step 1.2, L2, L3]

2.2 The set $S = F(n)$ is one of the values of $F$, hence nonempty, so there exists an element of $S$; fix one and call it $a$. [step 1.3, choose]

3.1 Define $g = (h \restriction (\mathcal{G} \setminus \{S\})) \cup \{(S, a)\}$; its two pieces are functions with the disjoint domains $\mathcal{G} \setminus \{S\}$ and $\{S\}$, so $g$ is a function, and its domain is $(\mathcal{G} \setminus \{S\}) \cup \{S\} = \mathcal{G} \cup \{S\} = F[\sigma(n)]$. [step 2.1, step 2.2, step 1.3, construct]

4.1 Every $T \in F[\sigma(n)]$ is either $S$ or a member of $\mathcal{G} \setminus \{S\}$; in the first case $g(S) = a \in S$, and in the second $g(T) = h(T) \in T$ because $h$ is a choice function for $\mathcal{G}$. So $g(T) \in T$ throughout. [step 3.1, step 2.1, step 2.2]

5.1 Hence $g$ is a choice function for $F[\sigma(n)]$, and since $F$ was an arbitrary function with domain $\sigma(n)$ with nonempty values, $P(n)$ implies $P(n+1)$. [step 4.1, step 3.1, step 1.3, L2, A1]

6.1 By the induction principle, $P(n)$ holds for every $n \in \mathbb{N}$: the family of values of any function whose domain is a natural number and whose values are nonempty has a choice function. [step 1.1, step 5.1, L1, discharge-induction] ∎

## Remarks

- **Later finiteness terminology.** A finite set is defined later as one
  equinumerous with a natural number ([[def-countable]]). That terminology is
  not used in the proof above, which keeps its exact indexed-family scope.
- **Where the Axiom of Choice would be needed, and why it is not needed here.** Step 2.2 picks one element out of one nonempty set. That is a single existential instantiation, licensed by first-order logic alone. The induction performs one such instantiation per stage, and the stages are indexed by a natural number, so the process terminates. ZF cannot in general turn an arbitrary infinite family of nonempty sets into a simultaneous choice function; that is the gap [[def-axiom-of-choice]] fills. An infinite family with a distinguished element in each member may still have an explicit choice function in ZF, as [[ex-russells-socks]] shows.
- **Why the family is presented as an indexed one.** Stated over "a family of exactly $n$ sets", the successor step would have to assert that deleting one member of a family of $n+1$ sets leaves exactly $n$, which is a claim about cardinality and needs a theory of finiteness this page does not have. Indexed by $n$, the same step is the restriction $F \restriction n$ of a function, which is immediate from $n \subseteq \sigma(n)$ and costs nothing. Nothing else in the argument changes.
- The listing may repeat, and the argument is arranged so that repetition needs no separate treatment: $g$ is built by overwriting rather than by adjoining, so it is a function whether or not $S$ already occurs among $F(0), \dots, F(n-1)$. In particular $\mathcal{F}$ may have strictly fewer than $n$ members.
- The lemma is not a special case of the Axiom of Choice that happens to be provable; it is the precise boundary of what is free. [[ex-russells-socks]] makes the boundary concrete, and [[ex-finite-choice-by-induction]] works this induction out on a small family.
````

### `lem-inf-epsilon`

````markdown
---
id: lem-inf-epsilon
kind: lemma
title: "Epsilon characterisation of the infimum"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [lem-sup-epsilon, thm-infimum-property, lem-reflection, def-bounded-set,
       lem-of-add-order, lem-of-inverse-unique, def-field]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-07-26
    scope: page
    delegated_by: owner
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-25
sources:
  scraped: []
  references:
    - title: "Infimum and supremum (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Infimum_and_supremum"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "John K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Statement

Let $S \subseteq \mathbb{R}$ be nonempty and bounded below, and let $\ell$ be a
lower bound of $S$ ([[def-bounded-set]]). Then

$$\ell = \inf S \quad \Longleftrightarrow \quad \text{for every } \varepsilon > 0 \text{ there exists } s \in S \text{ with } s < \ell + \varepsilon.$$

In words: among the lower bounds of $S$, the infimum is exactly the one that
cannot be raised by any positive amount and still bound $S$ from below.

## Facts & Assumptions

**Given:** A nonempty $S \subseteq \mathbb{R}$ that is bounded below, a lower bound $\ell$ of $S$, and the reflection $T := -S = \{-s : s \in S\}$.

[L1] Reflection, at the level of sets: $S$ is nonempty exactly when $T$ is; $\ell$ is a lower bound of $S$ exactly when $-\ell$ is an upper bound of $T$; and $S$ is bounded below exactly when $T$ is bounded above ([[lem-reflection]]). Elementwise, negation reverses the order: $-(-a) = a$, because $(-a) + a = 0$ and additive inverses are unique ([[def-field]], [[lem-of-inverse-unique]]); and $a < b$ exactly when $-b < -a$, because translation invariance applied with the constant $-a - b$ turns $a < b$ into $-b < -a$ and, applied with the constant $a + b$, turns it back ([[lem-of-add-order]]).

[L2] Every nonempty $S \subseteq \mathbb{R}$ bounded below has an infimum, and $\inf S = -\sup(-S) = -\sup T$ ([[thm-infimum-property]]).

[L3] Epsilon characterisation of the supremum: for a nonempty $X \subseteq \mathbb{R}$ bounded above and an upper bound $v$ of $X$, one has $v = \sup X$ if and only if for every $\varepsilon > 0$ there is $x \in X$ with $v - \varepsilon < x$ ([[lem-sup-epsilon]]).

## Proof

**Proof technique:** direct.

1.1 Since $S$ is nonempty and bounded below and $\ell$ is a lower bound of $S$, the set $T$ is nonempty and $-\ell$ is an upper bound of $T$, so $T$ is nonempty and bounded above. [given, L1]

1.2 For $s \in \mathbb{R}$ and $\varepsilon > 0$, negation turns the inequality $(-\ell) - \varepsilon < -s$ into $s < \ell + \varepsilon$ and back, because $-(-s) = s$ and $-\big((-\ell) - \varepsilon\big) = \ell + \varepsilon$. [L1, algebra]

2.1 By [L2] the infimum of $S$ exists and equals $-\sup T$; hence $\ell = \inf S$ holds if and only if $\ell = -\sup T$, which by negating both sides holds if and only if $-\ell = \sup T$. [step 1.1, L2, L1]

3.1 Applying [L3] to the nonempty bounded-above set $T$ and its upper bound $-\ell$: $-\ell = \sup T$ if and only if for every $\varepsilon > 0$ there is $t \in T$ with $(-\ell) - \varepsilon < t$. [step 1.1, step 2.1, L3]

4.1 The elements of $T$ are exactly the $-s$ with $s \in S$, so by 1.2 the condition "there is $t \in T$ with $(-\ell) - \varepsilon < t$" is equivalent to "there is $s \in S$ with $s < \ell + \varepsilon$". [step 1.2, step 3.1, L1]

5.1 Chaining the equivalences, $\ell = \inf S$ if and only if for every $\varepsilon > 0$ there is $s \in S$ with $s < \ell + \varepsilon$. [step 2.1, step 3.1, step 4.1] ∎
````

### `lem-multidimensional-refinement-inequalities`

````markdown
---
id: lem-multidimensional-refinement-inequalities
kind: lemma
title: "Refinement raises multidimensional lower sums and lowers upper sums, with a quantitative boundary-slab estimate"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-multidimensional-darboux-sums, def-multidimensional-grid-partition, def-multidimensional-rectangle-and-volume, def-finite-sum, lem-finite-sum-laws, thm-induction-principle, def-canonical-natural]
justified_by: []
aliases: []
landmark: false
proof_strategy: induction
verification:
  precheck: pass
  audited: 2026-08-01
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis, Riemann Integral in Several Variables"
      url: "https://www.jirka.org/ra/html/sec_rirect.html"
    - title: "J. Lebl, Basic Analysis, The Riemann-Lebesgue Criterion"
      url: "https://www.jirka.org/ra/html/sec_riemannlebesgue.html"
pipeline_run: null
---

## Statement

If $P'$ refines a grid $P$, then $L(f,P)\le L(f,P')\le U(f,P')\le U(f,P)$. Moreover, for a fixed grid $P$, there is a constant $C_P$ such that refining any grid of mesh $\delta$ by $P$ changes either Darboux sum by at most $2B C_P\delta$, where $|f|\le B$.

## Facts & Assumptions

**Given:** The grids, bounded $f$, and bound $B$.

[L1] Darboux sums and iterated cell sums are [[def-multidimensional-darboux-sums]] and [[def-multidimensional-grid-partition]].

[L2] Finite sums split and multiplication distributes ([[def-finite-sum]], [[lem-finite-sum-laws]]).

## Proof

**Proof technique:** induction.

1.1 Insert one coordinate hyperplane. Every new cell lies in one old cell, so its infimum is no smaller and its supremum no larger. Splitting the affected coordinate sum proves the four inequalities.  [base, L1, L2]

1.2 Only fine cells meeting an interior hyperplane of $P$ can cross a coarse-cell boundary. For a hyperplane perpendicular to coordinate $j$, those cells lie in a slab of thickness at most $2\delta$; repeated product distributivity bounds their total volume by $2\delta\prod_{r\ne j}(b_r-a_r)$.   [L1, L2, given]

2.1 Iterating over the finitely many inserted hyperplanes and coordinates proves refinement monotonicity.   [ih, step 1.1, given]

2.2 Sum this bound over the finitely many fixed interior hyperplanes to define $C_P$. On all other cells refinement changes no coarse bound, while on boundary cells each contribution changes by at most $2B$ times its volume.   [step 1.2, L2, given]

3.1 This yields the quantitative estimate and completes both assertions.  [step 2.1, step 2.2, discharge-induction] ∎
````

### `lem-sup-epsilon`

````markdown
---
id: lem-sup-epsilon
kind: lemma
title: "Epsilon characterisation of the supremum"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-complete-ordered-field, lem-sup-unique, def-ordered-field]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-07-26
    scope: page
    delegated_by: owner
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-25
sources:
  scraped: []
  references:
    - title: "Infimum and supremum (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Infimum_and_supremum"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "T. Tao, Analysis I, 3rd ed."
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "David H. Ernst, An Introduction to Proof via Inquiry-Based Learning, Section 5.1"
      url: "https://math.libretexts.org/Bookshelves/Mathematical_Logic_and_Proof/An_Introduction_to_Proof_via_Inquiry-Based_Learning_%28Ernst%29/05%253A_New_Page/5.01%253A_New_Page"
    - title: "John K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Statement

Let $S \subseteq \mathbb{R}$ be nonempty and bounded above, and let $u$ be an
upper bound of $S$ ([[def-complete-ordered-field]]). Then

$$u = \sup S \quad \Longleftrightarrow \quad \text{for every } \varepsilon > 0 \text{ there exists } s \in S \text{ with } u - \varepsilon < s.$$

In words: among the upper bounds of $S$, the supremum is exactly the one that
cannot be lowered by any positive amount and still bound $S$.

## Facts & Assumptions

**Given:** A nonempty $S \subseteq \mathbb{R}$ that is bounded above, and an upper bound $u$ of $S$; since $S$ is nonempty and bounded above, $\sup S$ exists.

[L1] Supremum: $u = \sup S$ exactly when $u$ is an upper bound of $S$ and $u \le u'$ for every upper bound $u'$ of $S$; and every nonempty subset of $\mathbb{R}$ that is bounded above has such a least upper bound ([[def-complete-ordered-field]]).

[L2] The least upper bound is unique, so the equation $u = \sup S$ says precisely that $u$ is a least upper bound of $S$ ([[lem-sup-unique]]).

[L3] The order is total: for $a, b \in \mathbb{R}$ exactly one of $a < b$, $a = b$, $b < a$ holds, so the negation of $a \le b$ is $b < a$; and $a < b$ holds exactly when $b - a > 0$ ([[def-complete-ordered-field]], [[def-ordered-field]]). (Translation invariance follows in one line from that last equivalence, since $(b + c) - (a + c) = b - a$, but no step below uses it and it is not claimed here as a quoted result.)

## Proof

**Proof technique:** direct.

1.1 For the forward implication assume $u = \sup S$, that is, $u$ is an upper bound of $S$ that is $\le$ every upper bound of $S$, and let $\varepsilon > 0$ be arbitrary. [assume-hyp, L1, L2]

1.2 For the converse implication assume that $u$ is an upper bound of $S$ such that for every $\varepsilon > 0$ there exists $s \in S$ with $u - \varepsilon < s$, and let $u'$ be an arbitrary upper bound of $S$. [assume-hyp]

2.1 Since $u - (u - \varepsilon) = \varepsilon > 0$, we have $u - \varepsilon < u$. [step 1.1, L3, algebra]

2.2 By totality either $u \le u'$ or $u' < u$; in the second case put $\varepsilon_0 := u - u'$, so that $\varepsilon_0 > 0$ and $u - \varepsilon_0 = u'$. [step 1.2, L3, algebra]

3.1 The element $u - \varepsilon$ is not an upper bound of $S$: if it were, the leastness of $u$ among upper bounds would give $u \le u - \varepsilon$, which contradicts $u - \varepsilon < u$ by trichotomy. [step 2.1, step 1.1, L1, L3]

3.2 In that second case the hypothesis applied to $\varepsilon_0$ yields $s_0 \in S$ with $u' = u - \varepsilon_0 < s_0$, so $s_0 \le u'$ fails, contradicting that $u'$ is an upper bound of $S$; the second case is therefore impossible and $u \le u'$. [step 2.2, step 1.2, L3]

4.1 Failing to be an upper bound of $S$ means precisely that some $s \in S$ does not satisfy $s \le u - \varepsilon$, and by totality that says $u - \varepsilon < s$; since $\varepsilon > 0$ was arbitrary, the forward implication is proved. [step 3.1, L3]

4.2 Since $u'$ was an arbitrary upper bound of $S$, we get $u \le u'$ for every upper bound $u'$; as $u$ is itself an upper bound, $u$ is a least upper bound of $S$, hence $u = \sup S$ by uniqueness, which proves the converse implication. [step 3.2, step 1.2, L1, L2]

5.1 Both implications hold, so for an upper bound $u$ of a nonempty set $S$ bounded above, $u = \sup S$ if and only if for every $\varepsilon > 0$ there is $s \in S$ with $u - \varepsilon < s$. [step 4.1, step 4.2] ∎
````

### `thm-multidimensional-riemann-criterion`

````markdown
---
id: thm-multidimensional-riemann-criterion
kind: theorem
title: "Riemann's criterion on a nondegenerate rectangle in $\\mathbb{R}^m$: integrability is equivalent to arbitrarily small Darboux gaps"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-multidimensional-darboux-integral, def-multidimensional-darboux-sums, lem-multidimensional-refinement-inequalities, def-multidimensional-grid-partition, lem-sup-epsilon, lem-inf-epsilon]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-01
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis, Riemann Integral in Several Variables"
      url: "https://www.jirka.org/ra/html/sec_rirect.html"
    - title: "J. Lebl, Basic Analysis, The Riemann-Lebesgue Criterion"
      url: "https://www.jirka.org/ra/html/sec_riemannlebesgue.html"
pipeline_run: null
---

## Statement

A bounded $f:Q\to\mathbb R$ on a nondegenerate rectangle is Riemann
integrable if and only if, for every $\varepsilon>0$, some grid $P$ satisfies
$U(f,P)-L(f,P)<\varepsilon$.

## Facts & Assumptions

**Given:** A bounded function on a nondegenerate rectangle.

[L1] The lower and upper integrals are the supremum and infimum in [[def-multidimensional-darboux-integral]].

[L2] Near-supremum and near-infimum elements exist ([[lem-sup-epsilon]], [[lem-inf-epsilon]]).

[L3] Common refinements improve both sums ([[lem-multidimensional-refinement-inequalities]], [[def-multidimensional-grid-partition]]).

## Proof

**Proof technique:** direct.

1.1 If the two integrals equal $I$, choose $P_-$ with $L(f,P_-)>I-\varepsilon/2$ and $P_+$ with $U(f,P_+)<I+\varepsilon/2$. A common refinement $P$ has gap below $\varepsilon$.  [L1, L2, L3]

1.2 Conversely, a common refinement shows every lower sum is at most every upper sum, so for every $P$, $0\le\overline{\int_Q}f-\underline{\int_Q}f\le U(f,P)-L(f,P)$. Arbitrarily small gaps force the integral difference to be $0$.   [L1, L3, given]

2.1 Thus the conditions are equivalent.  [step 1.1, step 1.2] ∎
````

