## Selection reasons

- high risk (6): 5 declared dependencies; 4 cited facts; boundary-sensitive language

## Target item — `fs-q-is-g-delta`

Normalized current SHA-256: `80882274f55c5f663cfa02d44d07d63f518793f9f682c9076f9d25eeb9257576`

The complete current item follows, including frontmatter:

````markdown
---
id: fs-q-is-g-delta
kind: false-statement
title: "FALSE: $\\mathbb{Q}$ is a $G_\\delta$ subset of $\\mathbb{R}$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [cor-q-is-meager-and-not-g-delta, def-f-sigma-g-delta, thm-baire-category-r, lem-rat-embeds-dense, def-open-and-closed-in-r]
justified_by: []
forward_refs: [cex-irrationals-are-not-f-sigma]
aliases: []
landmark: false
proof_strategy: direct
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
    - title: "Gδ set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/G-delta_set"
    - title: "Baire category theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Baire_category_theorem"
    - title: "E. Zakon, Problems on Baire Categories and Linear Maps"
      url: "https://math.libretexts.org/Bookshelves/Analysis/Mathematical_Analysis_%28Zakon%29/06%3A_Differentiation_on_E_and_Other_Normed_Linear_Spaces/6.08%3A_Baire_Categories._More_on_Linear_Maps/6.8.E%3A_Problems_on_Baire_Categories_and_Linear_Maps"
pipeline_run: null
---

## Statement

**False claim:** $\mathbb{Q}$, that is the set $\mathbb{Q}_{\mathbb{R}}$ of
rationals inside $\mathbb{R}$ ([[lem-rat-embeds-dense]]), is a $G_\delta$ set
([[def-f-sigma-g-delta]]): there is a sequence $(V_n)$ of open subsets of
$\mathbb{R}$ with $\mathbb{Q}_{\mathbb{R}} = \bigcap_n V_n$.

The claim looks plausible by symmetry. $\mathbb{Q}_{\mathbb{R}}$ is $F_\sigma$,
being a countable union of singletons; the irrationals are $G_\delta$, being a
countable intersection of complements of singletons; and the two classes are
exchanged by complementation. So one expects each set to belong to both classes.
It does not: the symmetry between the two *classes* says nothing about a single
set, and the obstruction is the Baire category theorem.

## Facts & Assumptions

**Given:** The set $\mathbb{Q}_{\mathbb{R}} \subseteq \mathbb{R}$ of rationals.

[A1] The false claim: $\mathbb{Q}_{\mathbb{R}}$ is a $G_\delta$ subset of $\mathbb{R}$.

[L1] $\mathbb{Q}_{\mathbb{R}}$ is $F_\sigma$ and meager, the irrationals are $G_\delta$ and residual, and $\mathbb{Q}_{\mathbb{R}}$ is **not** $G_\delta$ ([[cor-q-is-meager-and-not-g-delta]], claims 1, 2 and 3).

[L2] $A$ is $G_\delta$ when it is the intersection of a sequence of open sets ([[def-f-sigma-g-delta]], [[def-open-and-closed-in-r]]).

[L3] A countable intersection of dense open subsets of $\mathbb{R}$ is dense; in particular it is nonempty ([[thm-baire-category-r]]).

## Refutation

**Proof technique:** direct.

1.1 By claim 3 of [L1], $\mathbb{Q}_{\mathbb{R}}$ is not a $G_\delta$ subset of $\mathbb{R}$, which is the direct negation of [A1]. [A1, L1, L2]

1.2 The reason, recorded here so that the refutation is not merely a pointer: were $\mathbb{Q}_{\mathbb{R}} = \bigcap_n V_n$ with each $V_n$ open, every $V_n$ would contain the dense set $\mathbb{Q}_{\mathbb{R}}$ and so be dense; adjoining the dense open sets $\mathbb{R} \setminus \{q\}$, one for each rational $q$, would produce an at most countable family of dense open sets whose intersection is $\mathbb{Q}_{\mathbb{R}}$ minus every rational, that is $\varnothing$, contradicting [L3]. [L1, L2, L3]

2.1 So [A1] is false, and the refutation is carried out in full in [L1]. [step 1.1, step 1.2, A1] ∎

## Remarks

- **What is true about $\mathbb{Q}$.** It is $F_\sigma$, meager, of measure zero,
  dense, and countable. What fails is only the $G_\delta$ property, and its
  failure is a genuine theorem about $\mathbb{R}$, resting on completeness through
  [[thm-nested-interval-property]] inside [[thm-baire-category-r]]. Inside
  $\mathbb{Q}$ itself the corresponding claim is true and trivial, $\mathbb{Q}$
  being the whole space there.

- **The dual false statement is not recorded separately**, because it is the same
  statement: the irrationals fail to be $F_\sigma$ exactly because
  $\mathbb{Q}_{\mathbb{R}}$ fails to be $G_\delta$
  ([[def-f-sigma-g-delta]]). The witness is
  [[cex-irrationals-are-not-f-sigma]].

- **Context, not a result of this library.** In classical analysis the set of
  points at which a real function is continuous is always $G_\delta$, and it is
  the false statement above that then rules out a function continuous at every
  rational and at no irrational. That classical result is not proved here, and
  continuity is not available at this point in the reading order; the connection
  is recorded as orientation and nothing on this page depends on it.
````

## Wave 8 provenance row for the target

```json
{
  "id": "fs-q-is-g-delta",
  "statement": "ai-altered",
  "proof": "ai-generated",
  "evidence": "semantic-source",
  "urls": [
    "https://math.libretexts.org/Bookshelves/Analysis/Mathematical_Analysis_%28Zakon%29/06%3A_Differentiation_on_E_and_Other_Normed_Linear_Spaces/6.08%3A_Baire_Categories._More_on_Linear_Maps/6.8.E%3A_Problems_on_Baire_Categories_and_Linear_Maps"
  ],
  "rationale": "Zakon states and proves the negation: the rationals are not a G-delta subset of the real line. The local displayed claim is the corresponding false statement, and its locally written refutation routes Zakon’s conclusion through the preceding Baire theorem.",
  "alpha_concurred": false,
  "at": "2026-08-09",
  "ledger": "wave8-real-analysis-cantor-continuity.provenance.jsonl"
}
```

## Proof contract for the target

```json
{
  "citations": [
    {
      "fact": "L1",
      "source": "cor-q-is-meager-and-not-g-delta",
      "source_section": "Statement",
      "quote": "Claims 1 and 2 are bookkeeping. Claim 3 is the substance and is exactly where [[thm-baire-category-r]] is spent: no argument from the algebra of open and closed sets alone can reach it, since $\\mathbb{Q}_{\\mathbb{R}}$ and $X$ are interchanged by complementation while $F_\\sigma$ and $G_\\delta$ are, so any such argument would prove the same thing about both sets and about neither.",
      "uses": [
        "1.1",
        "1.2",
        "2.1"
      ]
    },
    {
      "fact": "L2",
      "source": "def-f-sigma-g-delta",
      "source_section": "Definition",
      "quote": "- $A$ is an **$F_\\sigma$ set** when there is a sequence $(F_n)_{n \\in \\mathbb{N}}$ of closed subsets of $\\mathbb{R}$ with $$A \\;=\\; \\bigcup_{n \\in \\mathbb{N}} F_n .$$ - $A$ is a **$G_\\delta$ set** when there is a sequence $(V_n)_{n \\in \\mathbb{N}}$ of open subsets of $\\mathbb{R}$ with $$A \\;=\\; \\bigcap_{n \\in \\mathbb{N}} V_n .$$",
      "uses": [
        "1.1",
        "1.2"
      ]
    },
    {
      "fact": "L2",
      "source": "def-open-and-closed-in-r",
      "source_section": "Definition",
      "quote": "**The four closed forms of [[def-interval]] are closed sets.** In each case the complement is shown open directly.",
      "uses": [
        "1.1",
        "1.2"
      ]
    },
    {
      "fact": "L3",
      "source": "thm-baire-category-r",
      "source_section": "Statement",
      "quote": "Let $(U_n)_{n \\in \\mathbb{N}}$ be a sequence of subsets of $\\mathbb{R}$, each open ([[def-open-and-closed-in-r]]) and dense ([[def-limit-point-r]]). Then",
      "uses": [
        "1.2"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1-1",
      "claim": "By claim 3 of [L1], $\\mathbb{Q}_{\\mathbb{R}}$ is not a $G_\\delta$ subset of $\\mathbb{R}$, which is the direct negation of [A1].",
      "step": "1.1",
      "inputs": [
        "L1",
        "A1",
        "L2"
      ]
    },
    {
      "id": "step-1-2",
      "claim": "The reason, recorded here so that the refutation is not merely a pointer: were $\\mathbb{Q}_{\\mathbb{R}} = \\bigcap_n V_n$ with each $V_n$ open, every $V_n$ would contain the dense set $\\mathbb{Q}_{\\mathbb{R}}$ and so be dense; adjoining the dense open sets $\\ma",
      "step": "1.2",
      "inputs": [
        "L3",
        "L1",
        "L2"
      ]
    },
    {
      "id": "step-2-1",
      "claim": "So [A1] is false, and the refutation is carried out in full in [L1].",
      "step": "2.1",
      "inputs": [
        "A1",
        "L1",
        "1.1",
        "1.2"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "not_applicable",
      "reason": "The refutation/example uses a fixed nonempty witness, not a variable set whose empty case could establish or defeat the claim."
    },
    {
      "case": "zero",
      "status": "not_applicable",
      "reason": "No scalar, cardinal, index, or exponent in the Statement of `fs-q-is-g-delta` has a zero boundary requiring a separate argument."
    },
    {
      "case": "one",
      "status": "not_applicable",
      "reason": "No scalar, cardinal, index, or exponent in the Statement of `fs-q-is-g-delta` has a one boundary requiring a separate argument."
    },
    {
      "case": "degenerate",
      "status": "not_applicable",
      "reason": "The Statement of `fs-q-is-g-delta` has no coincident-point, singleton, or degenerate-interval case requiring a separate argument."
    },
    {
      "case": "endpoints",
      "status": "not_applicable",
      "reason": "The Statement of `fs-q-is-g-delta` has no interval endpoint or one-sided endpoint convention."
    },
    {
      "case": "nonempty-choice",
      "status": "not_applicable",
      "reason": "The refutation delegates to the already-proved claim that Q is not G_delta; no witness is selected."
    },
    {
      "case": "iff-forward",
      "status": "not_applicable",
      "reason": "The Statement of `fs-q-is-g-delta` is not an equivalence, so it has no forward iff direction."
    },
    {
      "case": "iff-reverse",
      "status": "not_applicable",
      "reason": "The Statement of `fs-q-is-g-delta` is not an equivalence, so it has no reverse iff direction."
    }
  ],
  "finite_smoke": [],
  "risk_review": {
    "status": "pending",
    "reviewer": "Alpha",
    "notes": "Audit-Beta captured this A2 contract by reading the item and each cited target from disk. Independent risk review occurs after A3/A4."
  }
}
```

## Generated audit-manifest relationships for the target

```json
[
  {
    "source": "fs-q-is-g-delta",
    "sourcePage": "cantor-set-baire-and-measure-zero",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "cor-q-is-meager-and-not-g-delta",
    "declared_target": "cor-q-is-meager-and-not-g-delta",
    "target_statement_provenance": "ai-altered",
    "targetPage": "cantor-set-baire-and-measure-zero",
    "targetBatch": "wave8-real-analysis-cantor-continuity",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-q-is-g-delta",
    "sourcePage": "cantor-set-baire-and-measure-zero",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "def-f-sigma-g-delta",
    "declared_target": "def-f-sigma-g-delta",
    "target_statement_provenance": "literature-derived",
    "targetPage": "cantor-set-baire-and-measure-zero",
    "targetBatch": "wave8-real-analysis-cantor-continuity",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-q-is-g-delta",
    "sourcePage": "cantor-set-baire-and-measure-zero",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "thm-baire-category-r",
    "declared_target": "thm-baire-category-r",
    "target_statement_provenance": "ai-altered",
    "targetPage": "cantor-set-baire-and-measure-zero",
    "targetBatch": "wave8-real-analysis-cantor-continuity",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-q-is-g-delta",
    "sourcePage": "cantor-set-baire-and-measure-zero",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "lem-rat-embeds-dense",
    "declared_target": "lem-rat-embeds-dense",
    "target_statement_provenance": "ai-altered",
    "targetPage": "construction-of-r-via-cauchy-sequences",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-q-is-g-delta",
    "sourcePage": "cantor-set-baire-and-measure-zero",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "def-open-and-closed-in-r",
    "declared_target": "def-open-and-closed-in-r",
    "target_statement_provenance": "ai-altered",
    "targetPage": "topology-of-r",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "fs-q-is-g-delta",
    "sourcePage": "cantor-set-baire-and-measure-zero",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "cex-irrationals-are-not-f-sigma",
    "declared_target": "cex-irrationals-are-not-f-sigma",
    "target_statement_provenance": "literature-derived",
    "targetPage": "cantor-set-baire-and-measure-zero-examples",
    "targetBatch": "wave8-real-analysis-cantor-continuity",
    "edge_type": "forward_ref",
    "kind": "forward",
    "requires_semantic_audit": true
  }
]
```

## Relevant pending generated-risk rows

```json
[]
```

## Full text of every cited or declared item (7)

### `cex-irrationals-are-not-f-sigma`

````markdown
---
id: cex-irrationals-are-not-f-sigma
kind: counterexample
title: "The irrationals form a residual $G_\\delta$ set that is not $F_\\sigma$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [fs-q-is-g-delta, cor-q-is-meager-and-not-g-delta, def-f-sigma-g-delta, thm-baire-category-r, lem-rat-embeds-dense, def-open-and-closed-in-r]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
cx_machine_verified: false
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Gδ set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/G-delta_set"
    - title: "Fσ set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/F-sigma_set"
    - title: "E. Zakon, Problems on Baire Categories and Linear Maps"
      url: "https://math.libretexts.org/Bookshelves/Analysis/Mathematical_Analysis_%28Zakon%29/06%3A_Differentiation_on_E_and_Other_Normed_Linear_Spaces/6.08%3A_Baire_Categories._More_on_Linear_Maps/6.8.E%3A_Problems_on_Baire_Categories_and_Linear_Maps"
pipeline_run: null
---

## Statement refuted

**Refuted claim:** $\mathbb{Q}$ is a $G_\delta$ subset of $\mathbb{R}$
([[fs-q-is-g-delta]]); equivalently, by complementation
([[def-f-sigma-g-delta]]), the irrationals are $F_\sigma$.

The witness is the set $X := \mathbb{R} \setminus \mathbb{Q}_{\mathbb{R}}$ of
irrationals ([[lem-rat-embeds-dense]]). It **is** $G_\delta$, being
$\bigcap_n (\mathbb{R} \setminus \{e(n)\})$ for any enumeration $e$ of the
rationals, and it **is** residual, its complement being a countable union of
singletons; but it is **not** $F_\sigma$, and that is the failure of the refuted
claim. The refutation is carried out in full in
[[cor-q-is-meager-and-not-g-delta]]; this item records the witness and the three
properties that make it the right one.

## Facts & Assumptions

**Given:** The set $\mathbb{Q}_{\mathbb{R}}$ of rationals inside $\mathbb{R}$ and its complement $X = \mathbb{R} \setminus \mathbb{Q}_{\mathbb{R}}$.

[A1] The refuted claim: $\mathbb{Q}_{\mathbb{R}}$ is $G_\delta$, equivalently $X$ is $F_\sigma$.

[L1] $\mathbb{Q}_{\mathbb{R}}$ is $F_\sigma$ and meager, $X$ is $G_\delta$ and residual, and $\mathbb{Q}_{\mathbb{R}}$ is not $G_\delta$ ([[cor-q-is-meager-and-not-g-delta]], claims 1, 2, 3).

[L2] $A$ is $F_\sigma$ if and only if $\mathbb{R} \setminus A$ is $G_\delta$ ([[def-f-sigma-g-delta]], [[def-open-and-closed-in-r]]).

## Counterexample

**Proof technique:** direct.

1.1 $X$ is $G_\delta$ and residual, by claim 2 of [L1]. [L1]

1.2 $X$ is not $F_\sigma$: were it $F_\sigma$, its complement $\mathbb{Q}_{\mathbb{R}}$ would be $G_\delta$ by [L2], which claim 3 of [L1] forbids. [L1, L2]

2.1 So $X$ is a residual $G_\delta$ set that is not $F_\sigma$, and it witnesses the failure of [A1] in both of the equivalent formulations. [step 1.1, step 1.2, A1, L2] ∎

## Remarks

- **The asymmetry is real and is not a defect of the definitions.** The two classes $F_\sigma$ and $G_\delta$ are exchanged by complementation, but a *particular* set need not lie in both: $\mathbb{Q}_{\mathbb{R}}$ is $F_\sigma$ and not $G_\delta$, and $X$ is $G_\delta$ and not $F_\sigma$. A set lying in both classes is a genuinely stronger condition, satisfied for instance by every open set and every closed set.

- **What forces it is the Baire category theorem**, through the fact that $\mathbb{R}$ is not meager ([[thm-baire-category-r]]) while $\mathbb{Q}_{\mathbb{R}}$ is. Both are dense; the rationals are countable and the irrationals are uncountable. No cardinality or density argument distinguishes them in the required way; the distinction is one of category.

- **$X$ is large in both senses.** It is residual, so it is large in category; and it is not null. For if it were, then, $\mathbb{Q}_{\mathbb{R}}$ being null ([[lem-countable-sets-are-null]]), one could interleave a cover of each with slack $\varepsilon \cdot 2^{-1}$ and obtain a cover of $\mathbb{Q}_{\mathbb{R}} \cup X = \mathbb{R}$ of total length at most $\varepsilon$, which [[lem-nondegenerate-interval-is-not-null]] forbids already for $[0,1]$. Interleaving two covers needs no choice principle, unlike the countably infinite case ([[thm-countable-union-of-null-is-null]]).
````

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
deps: [thm-baire-category-r, def-f-sigma-g-delta, def-nowhere-dense-meager, thm-rationals-countable, lem-q-and-irrationals-dense-r, def-countable, def-equinumerous, def-injection-surjection-bijection, def-open-and-closed-in-r, def-neighbourhood-r, thm-n-cross-n-countable, def-interior-closure-boundary-r, thm-closure-characterisations-r, def-limit-point-r, lem-rat-embeds-dense]
justified_by: []
forward_refs: [cex-irrationals-are-not-f-sigma, cex-meager-set-of-full-measure]
aliases: []
landmark: true
short: "$\\mathbb{Q}$ meager, not $G_\\delta$"
proof_strategy: contradiction
verification:
  precheck: pass
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

[L1] $\mathbb{Q} \approx \mathbb{N}$ ([[thm-rationals-countable]], [[def-equinumerous]]), $q \mapsto \hat q$ is injective with image $\mathbb{Q}_{\mathbb{R}}$ ([[lem-rat-embeds-dense]]), and a composition of bijections is a bijection ([[def-injection-surjection-bijection]]); an at most countable family may be presented as a sequence indexed by $\mathbb{N}$ ([[def-countable]]).

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

- **Where the two halves of the argument part company.** Claim 1 is a listing argument and would work equally in $\mathbb{Q}$ or in any countable space; claim 3 uses the completeness of $\mathbb{R}$ through [[thm-nested-interval-property]], inside [[thm-baire-category-r]]. Indeed $\mathbb{Q}$ is a $G_\delta$ subset of itself, being the whole space, so no argument that ignores the ambient completeness can possibly give claim 3.

- **The irrationals are also uncountable** ([[cor-irrationals-uncountable]]), by a different and much cheaper argument that needs only the countability of $\mathbb{Q}$ and the uncountability of $\mathbb{R}$. Uncountability and being residual are independent properties: $\mathbb{Q}$ is meager and countable, the Cantor set is meager and uncountable ([[thm-cantor-set-properties]]), and $X$ is residual and uncountable.

- **The named witness for claim 3** is [[cex-irrationals-are-not-f-sigma]], and the false statement it refutes is [[fs-q-is-g-delta]]; the refutation is carried out here.

- **Meagre and measure zero are not the same smallness.** $\mathbb{Q}_{\mathbb{R}}$ is both, but the two notions diverge as soon as one leaves the countable case: [[cex-meager-set-of-full-measure]] writes $\mathbb{R}$ as a meager set together with a set of measure zero, and the set of measure zero there is residual. So being residual, which is what claim 2 gives for $X$, carries no information at all about size in measure.
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

### `def-open-and-closed-in-r`

````markdown
---
id: def-open-and-closed-in-r
kind: definition
title: "Open subset of $\\mathbb{R}$ (every point has a neighbourhood inside it), closed subset (complement open), and clopen"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-neighbourhood-r, def-interval, def-complete-ordered-field, def-ordered-field, def-real-order, lem-finite-set-has-max, def-max-min]
justified_by: []
aliases: []
landmark: true
short: "open, closed, clopen in $\\mathbb{R}$"
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-26
  audited: 2026-07-26
sources:
  scraped: []
  references:
    - title: "Open set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Open_set"
    - title: "Closed set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Closed_set"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2 (Def. 2.18)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §7.2"
      url: "https://www.jirka.org/ra/"
    - title: "J. K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Definition

Let $U, F \subseteq \mathbb{R}$, with neighbourhoods as in
[[def-neighbourhood-r]].

- $U$ is **open** when for every $x \in U$ there is a real $\varepsilon > 0$
  with $N_\varepsilon(x) \subseteq U$.
- $F$ is **closed** when its complement $\mathbb{R} \setminus F$ is open.
- A set is **clopen** when it is both open and closed.

The whole of the topology of $\mathbb{R}$ developed on this page rests on this
one definition: closedness is *defined* as openness of the complement, and every
other description of a closed set on this page is a theorem
([[thm-closure-characterisations-r]], [[lem-sequential-characterisation-of-closure-r]]).

**$\varnothing$ and $\mathbb{R}$ are clopen.** The condition defining openness
quantifies over the elements of the set, so it holds vacuously for
$\varnothing$; and for $x \in \mathbb{R}$ one has $N_1(x) \subseteq \mathbb{R}$,
so $\mathbb{R}$ is open. Since each of the two is the complement of the other,
each is also closed.

**Every neighbourhood is open.** Let $y \in N_\varepsilon(x)$ and put
$\delta := \varepsilon - |y - x|$, which is $> 0$ because
$y \in N_\varepsilon(x)$. The nesting property of [[def-neighbourhood-r]] gives
$N_\delta(y) \subseteq N_\varepsilon(x)$. So every point of $N_\varepsilon(x)$
has a neighbourhood inside it.

**The four open forms of [[def-interval]] are open sets.** Let $a, b \in
\mathbb{R}$.

- $(a,b)$: for $x$ with $a < x < b$, both $x - a > 0$ and $b - x > 0$, so
  $\delta := \min\{x - a,\ b - x\}$ is a positive real (the minimum of a
  two-element set of reals exists, [[lem-finite-set-has-max]], [[def-max-min]]).
  If $|y - x| < \delta$ then $y > x - \delta \ge x - (x - a) = a$ and
  $y < x + \delta \le x + (b - x) = b$, so $y \in (a,b)$; hence
  $N_\delta(x) \subseteq (a,b)$.
- $(a,\infty)$: for $x > a$ take $\delta := x - a > 0$; then $|y - x| < \delta$
  gives $y > x - \delta = a$.
- $(-\infty,b)$: for $x < b$ take $\delta := b - x > 0$; then $|y - x| < \delta$
  gives $y < x + \delta = b$.
- $(-\infty,\infty) = \mathbb{R}$: already treated above.

**The four closed forms of [[def-interval]] are closed sets.** In each case the
complement is shown open directly.

- $[a,b]$: if $x \notin [a,b]$ then $x < a$ or $x > b$ by trichotomy
  ([[def-ordered-field]]). If $x < a$, take $\delta := a - x > 0$; every
  $y \in N_\delta(x)$ has $y < x + \delta = a$, hence $y \notin [a,b]$. If
  $x > b$, take $\delta := x - b > 0$; every $y \in N_\delta(x)$ has
  $y > x - \delta = b$, hence $y \notin [a,b]$. So
  $\mathbb{R} \setminus [a,b]$ is open.
- $[a,\infty)$: its complement is $(-\infty,a)$, which is open by the previous
  paragraph.
- $(-\infty,b]$: its complement is $(b,\infty)$, which is open.
- $(-\infty,\infty) = \mathbb{R}$: its complement is $\varnothing$, which is
  open.

## Remarks

- **Open and closed are not opposites, and not exhaustive.** A set may be
  neither: the half-open interval $[0,1)$ is neither open nor closed
  ([[fs-every-set-is-open-or-closed]]). A set may be both: $\varnothing$ and
  $\mathbb{R}$ are clopen. The words are inherited from the interval terminology
  of [[def-interval]], and the agreement between the two usages is exactly the
  two lists verified above: an interval called open there is an open set here,
  and an interval called closed there is a closed set here.

- **A clopen set is a disconnection waiting to happen.** If $A$ is clopen and
  both $A$ and $\mathbb{R} \setminus A$ are nonempty, then each of the two is
  its own closure, so the two are separated in the sense of
  [[def-connected-r]] and $\mathbb{R} = A \cup (\mathbb{R} \setminus A)$ is a
  disconnection. Since $\mathbb{R}$ is order-convex it is connected
  ([[thm-connected-subsets-of-r-are-intervals]]), so no such $A$ exists:
  $\varnothing$ and $\mathbb{R}$ are the only clopen subsets of $\mathbb{R}$.

- **The half-open forms are the ones the two lists omit**, and deliberately so:
  $[a,b)$ and $(a,b]$ with $a < b$ are neither open nor closed as subsets of
  $\mathbb{R}$.

- **The radius depends on the point.** Openness asks for *some* $\varepsilon$
  at each point, and that $\varepsilon$ may shrink to nothing as the point
  approaches the edge of the set, as the computation for $(a,b)$ shows: there
  $\delta = \min\{x - a,\ b - x\}$ tends to $0$ as $x$ tends to either endpoint.
  Asking instead for a single $\varepsilon$ that works simultaneously at every
  point of the set is a strictly stronger condition, and it is not what is
  defined here; nothing on this page uses it.
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

### `thm-baire-category-r`

````markdown
---
id: thm-baire-category-r
kind: theorem
title: "Baire category in $\\mathbb{R}$, by nested intervals with canonically chosen rational endpoints: a countable intersection of dense open sets is dense, so $\\mathbb{R}$ is not a countable union of nowhere dense sets"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-nowhere-dense-meager, thm-nested-interval-property, def-interval, def-open-and-closed-in-r, def-limit-point-r, thm-closure-characterisations-r, def-interior-closure-boundary-r, def-countable, def-equinumerous, def-injection-surjection-bijection, thm-rationals-countable, lem-rat-embeds-dense, thm-well-ordering-principle, thm-recursion, thm-open-set-algebra-r, def-neighbourhood-r]
justified_by: []
forward_refs: [ex-baire-reproves-r-uncountable, cex-meager-set-of-full-measure]
aliases: []
landmark: true
short: "countable intersection of dense open sets is dense"
proof_strategy: constructive
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
    - title: "Baire category theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Baire_category_theorem"
    - title: "Nested intervals (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Nested_intervals"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3 (Exercise 22) and Ch. 2"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "Baire theorem (Encyclopedia of Mathematics)"
      url: "https://encyclopediaofmath.org/wiki/Baire_theorem"
    - title: "E. Zakon, Mathematical Analysis, §6.8: Baire Categories"
      url: "https://math.libretexts.org/Bookshelves/Analysis/Mathematical_Analysis_%28Zakon%29/06%3A_Differentiation_on_E_and_Other_Normed_Linear_Spaces/6.08%3A_Baire_Categories._More_on_Linear_Maps"
pipeline_run: null
---

## Statement

Let $(U_n)_{n \in \mathbb{N}}$ be a sequence of subsets of $\mathbb{R}$, each
open ([[def-open-and-closed-in-r]]) and dense ([[def-limit-point-r]]). Then

$$\bigcap_{n \in \mathbb{N}} U_n \quad \text{is dense in } \mathbb{R}.$$

Consequently, if $(A_n)_{n \in \mathbb{N}}$ is a sequence of nowhere dense
subsets of $\mathbb{R}$ ([[def-nowhere-dense-meager]]), then
$\bigcup_{n \in \mathbb{N}} A_n \ne \mathbb{R}$: no meager subset of
$\mathbb{R}$ exhausts $\mathbb{R}$, so $\mathbb{R}$ is of the second category in
itself.

**The selection is canonical, and the proof spends no choice principle.** The
textbook argument picks a nested interval at every stage in terms of the one
before it, which is the axiom of dependent choice ([[def-dependent-choice]]). The construction below
instead fixes one enumeration $e$ of the rationals ([[thm-rationals-countable]],
[[lem-rat-embeds-dense]]) and, at every stage, takes the interval whose two
rational endpoints have **least index** among those meeting the requirements.
The requirements are met by some rational-endpoint interval, which is what the
refinement claim of the proof establishes, and the least such index is
determined by [[thm-well-ordering-principle]]; so the whole recursion is a
single application of [[thm-recursion]] to one total map. This is the device of
[[thm-perfect-set-uncountable-r]], transplanted from perfect sets to dense open
sets. What it does **not** settle is the strength of the theorem for general
complete metric spaces, which is recorded separately in
[[rem-baire-in-r-is-choice-free]].

## Facts & Assumptions

**Given:** A sequence $(U_n)_{n \in \mathbb{N}}$ of dense open subsets of $\mathbb{R}$. Write $\mathbb{Q}_{\mathbb{R}}$ for the image of $\mathbb{Q}$ in $\mathbb{R}$ under $q \mapsto \hat q$. A pair $(p,q) \in \mathbb{Q}_{\mathbb{R}} \times \mathbb{Q}_{\mathbb{R}}$ is called **good** when $p < q$, and $G$ denotes the set of good pairs.

[A1] Each $U_n$ is open and dense in $\mathbb{R}$.

[L1] $A \subseteq \mathbb{R}$ is dense when $\overline{A} = \mathbb{R}$, and $\overline{A}$ is exactly the set of points every neighbourhood of which meets $A$; so $A$ is dense if and only if $N_\varepsilon(x) \cap A \ne \varnothing$ for every $x \in \mathbb{R}$ and every real $\varepsilon > 0$ ([[def-limit-point-r]], [[thm-closure-characterisations-r]], [[def-neighbourhood-r]]).

[L2] $U$ is open when every $x \in U$ admits a real $\varepsilon > 0$ with $N_\varepsilon(x) \subseteq U$; $N_\varepsilon(x) = (x - \varepsilon, x + \varepsilon)$; every open interval $(p,q)$ is an open set, and $[p,q]$ is a closed bounded interval, nonempty when $p \le q$ ([[def-open-and-closed-in-r]], [[def-neighbourhood-r]], [[def-interval]]).

[L3] The intersection of two open subsets of $\mathbb{R}$ is open, and the complement of a closed set is open ([[thm-open-set-algebra-r]], [[def-open-and-closed-in-r]]).

[L4] $\mathbb{Q} \approx \mathbb{N}$ ([[thm-rationals-countable]], [[def-equinumerous]]); $q \mapsto \hat q$ is injective with image $\mathbb{Q}_{\mathbb{R}}$, and strictly between any two reals lies an element of $\mathbb{Q}_{\mathbb{R}}$ ([[lem-rat-embeds-dense]]); a composition of bijections is a bijection ([[def-injection-surjection-bijection]]).

[L5] Every nonempty subset of $\mathbb{N}$ has a least element ([[thm-well-ordering-principle]]).

[L6] Recursion: for a set $Y$, an element $y_0 \in Y$ and a function $T : Y \to Y$ there is $h : \mathbb{N} \to Y$ with $h(0) = y_0$ and $h(\sigma(k)) = T(h(k))$ ([[thm-recursion]]).

[L7] Nested interval property: for nonempty closed bounded intervals $I_k = [a_k,b_k]$ with $I_{k+1} \subseteq I_k$, the intersection $\bigcap_k I_k$ is nonempty ([[thm-nested-interval-property]]).

[L8] $A$ is nowhere dense exactly when $\mathbb{R} \setminus \overline{A}$ is dense; $\overline{A}$ is a closed set containing $A$ ([[def-nowhere-dense-meager]], [[def-interior-closure-boundary-r]], [[thm-closure-characterisations-r]]).

[L9] An at most countable family may always be presented as a sequence indexed by $\mathbb{N}$ ([[def-countable]], [[def-nowhere-dense-meager]]).

## Proof

**Proof technique:** constructive.

1.1 Fix $x_0 \in \mathbb{R}$ and a real $\varepsilon_0 > 0$; by [L1] it suffices to produce a point of $\bigcap_n U_n$ lying in $N_{\varepsilon_0}(x_0)$, since $x_0$ and $\varepsilon_0$ are then arbitrary. [given, L1, suffices: one point in each neighbourhood]

1.2 By [L4] fix a bijection $\beta : \mathbb{N} \to \mathbb{Q}$ and put $e := \iota \circ \beta$, where $\iota(q) = \hat q$, so that $e$ is a bijection from $\mathbb{N}$ onto $\mathbb{Q}_{\mathbb{R}}$. [L4, choose]

1.3 Recall the terminology of the Given: a pair $(p,q)$ of elements of $\mathbb{Q}_{\mathbb{R}}$ is good when $p < q$, and $G$ is the set of good pairs. [given, construct]

2.1 **Refinement claim.** For every good $(p,q)$ and every $n \in \mathbb{N}$ there is a good $(p',q')$ with $[p',q'] \subseteq (p,q) \cap U_n$. To see it, note first that $(p,q)$ is nonempty, since [L4] supplies an element of $\mathbb{Q}_{\mathbb{R}}$ strictly between $p$ and $q$, and that $(p,q)$ is open by [L2]; fix $y_1 \in (p,q)$ and, by [L2], a real $\rho_1 > 0$ with $N_{\rho_1}(y_1) \subseteq (p,q)$. Since $U_n$ is dense, [A1] and [L1] give $y \in N_{\rho_1}(y_1) \cap U_n$, so $y \in (p,q) \cap U_n$, and that set is open by [A1], [L2] and [L3], so there is a real $\rho > 0$ with $N_\rho(y) \subseteq (p,q) \cap U_n$. By [L4] fix $p', q' \in \mathbb{Q}_{\mathbb{R}}$ with $y - \rho < p' < y < q' < y + \rho$. Then $p' < q'$, so $(p',q')$ is good, and every $t \in [p',q']$ satisfies $y - \rho < p' \le t \le q' < y + \rho$, whence $|t - y| < \rho$ and $t \in N_\rho(y)$; thus $[p',q'] \subseteq N_\rho(y) \subseteq (p,q) \cap U_n$. [step 1.3, A1, L1, L2, L3, L4, choose]

3.1 **Successor rule.** For $(k, (p,q)) \in \mathbb{N} \times G$ let $m$ be the least natural for which some natural $j$ makes $(e(m), e(j))$ good with $[e(m), e(j)] \subseteq (p,q) \cap U_k$, and let $j$ be the least natural with that property for that $m$; put $T(k,(p,q)) := (\sigma(k), (e(m), e(j)))$. The set of eligible $m$ is nonempty by step 2.1 applied with $n = k$, since $e$ is onto $\mathbb{Q}_{\mathbb{R}}$ by step 1.2, so both minima exist by [L5] and $T : \mathbb{N} \times G \to \mathbb{N} \times G$ is a total function defined without any selection. [step 1.2, step 2.1, L4, L5, construct]

4.1 **The recursion.** By [L4] fix $p_0, q_0 \in \mathbb{Q}_{\mathbb{R}}$ with $x_0 - \varepsilon_0 < p_0 < x_0 < q_0 < x_0 + \varepsilon_0$; then $(p_0,q_0)$ is good and, as in step 2.1, $[p_0,q_0] \subseteq N_{\varepsilon_0}(x_0)$ by [L2]. Apply [L6] with $Y = \mathbb{N} \times G$, seed $(0,(p_0,q_0))$ and map $T$ to get $h : \mathbb{N} \to \mathbb{N} \times G$ with $h(0) = (0,(p_0,q_0))$ and $h(\sigma(k)) = T(h(k))$; an induction on $k$ shows that the first coordinate of $h(k)$ is $k$, so write $h(k) = (k,(p_k,q_k))$, every $(p_k,q_k)$ being good. [step 1.1, step 1.3, step 3.1, L2, L4, L6, construct]

5.1 Write $I_k := [p_k, q_k]$, a nonempty closed bounded interval by [L2]. The rule of step 3.1 gives, for every $k \in \mathbb{N}$, that $I_{k+1} \subseteq (p_k,q_k) \cap U_k \subseteq I_k$; in particular the family $(I_k)$ is nested and $I_{k+1} \subseteq U_k$. [step 3.1, step 4.1, L2]

6.1 By [L7] applied to the nested family $(I_k)$ of nonempty closed bounded intervals, $\bigcap_{k} I_k \ne \varnothing$; fix $x$ in it. [step 5.1, L7, choose]

7.1 For every $n \in \mathbb{N}$ one has $x \in I_{n+1} \subseteq U_n$ by steps 5.1 and 6.1, so $x \in \bigcap_n U_n$; and $x \in I_0 \subseteq N_{\varepsilon_0}(x_0)$ by steps 4.1 and 6.1. So $N_{\varepsilon_0}(x_0)$ meets $\bigcap_n U_n$. [step 4.1, step 5.1, step 6.1]

8.1 Since $x_0 \in \mathbb{R}$ and the real $\varepsilon_0 > 0$ were arbitrary, every neighbourhood of every point of $\mathbb{R}$ meets $\bigcap_n U_n$, so that set is dense by [L1]. [step 1.1, step 7.1, L1]

9.1 For the consequence, let $(A_n)$ be a sequence of nowhere dense sets and put $U_n := \mathbb{R} \setminus \overline{A_n}$, which is open by [L3] and [L8] and dense by [L8]; by step 8.1 the set $\bigcap_n U_n$ is dense, hence nonempty, and any $x$ in it lies outside every $\overline{A_n}$ and so outside every $A_n$, giving $x \notin \bigcup_n A_n$ and therefore $\bigcup_n A_n \ne \mathbb{R}$. By [L9] the same conclusion covers a union of an at most countable family of nowhere dense sets, so no meager set is all of $\mathbb{R}$. [step 8.1, L1, L3, L8, L9, discharge-construct] ∎

## Remarks

- **What "dense" is doing at each end.** Density of the $U_n$ is used exactly once, in the refinement claim, to find a point of $U_n$ inside a given open interval; openness is used exactly once, immediately after, to fit a whole closed interval with rational endpoints around that point. Neither hypothesis can be dropped. Without openness the conclusion fails: the family consisting of $\mathbb{Q}$ together with all the sets $\mathbb{R} \setminus \{q\}$ for $q \in \mathbb{Q}$ is an at most countable family of dense sets, all but the first of them open, and its intersection is empty. Without density it fails too, for the constant sequence $U_n := (0,1)$ has intersection $(0,1)$, which is not dense in $\mathbb{R}$.

- **Only nonemptiness of the nested intersection is used.** The construction does not force the interval lengths to $0$ and does not need to: claim 1 of [[thm-nested-interval-property]] already produces a point, and one point is all the argument wants. That is why no Archimedean step appears anywhere above.

- **The consequence is the form used downstream.** Applying it to the sequence of singletons $\{x_n\}$ of a supposed enumeration of $\mathbb{R}$ reproves that $\mathbb{R}$ is uncountable ([[ex-baire-reproves-r-uncountable]]); applying it to a supposed presentation of $\mathbb{Q}$ as a $G_\delta$ set is what shows that no such presentation exists ([[cor-q-is-meager-and-not-g-delta]]).

- **Category is not measure.** The intersection produced above is dense but may be very small in the sense of [[def-measure-zero-and-content-zero]]; indeed $\mathbb{R}$ decomposes as a meager set together with a set of measure zero ([[cex-meager-set-of-full-measure]]), so this theorem says nothing whatever about size in measure.
````

### `thm-nested-interval-property`

````markdown
---
id: thm-nested-interval-property
kind: theorem
title: "A nested sequence of nonempty closed bounded intervals has nonempty intersection, and the intersection is a single point exactly when the lengths tend to $0$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-interval, def-monotone-sequence, thm-monotone-convergence, def-complete-ordered-field, lem-sup-unique, thm-infimum-property, def-bounded-set, def-real-limit, def-sequence, thm-algebra-of-limits, lem-limit-unique, def-nat-order, thm-nat-linear-order]
justified_by: []
forward_refs: [ex-nested-intervals-single-point, cex-nested-open-intervals-empty, cex-nested-unbounded-closed-empty]
aliases: []
landmark: true
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
    - title: "Nested intervals (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Nested_intervals"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2 (Thm 2.38)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "T. Tao, Analysis I, 3rd ed., §6.4"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "J. Lebl, Basic Analysis I, §1.4"
      url: "https://www.jirka.org/ra/"
---

## Statement

For each $k \in \mathbb{N}$ let $I_k = [a_k, b_k]$ be a closed bounded interval
with $a_k \le b_k$ ([[def-interval]]), and suppose the family is **nested**:

$$I_{k+1} \subseteq I_k \qquad (k \in \mathbb{N}).$$

Write $\ell_k = b_k - a_k \ge 0$ for the length of $I_k$. Then:

1. $\displaystyle\bigcap_{k \in \mathbb{N}} I_k$ is **nonempty**. More precisely,
   with $a = \sup\{a_k : k \in \mathbb{N}\}$ and
   $b = \inf\{b_k : k \in \mathbb{N}\}$, both of which exist, one has $a \le b$
   and $$\bigcap_{k \in \mathbb{N}} I_k = [a, b].$$
2. $\displaystyle\bigcap_{k \in \mathbb{N}} I_k$ is a **single point** if and only
   if $\ell_k \to 0$ ([[def-real-limit]]).

Every hypothesis is load bearing. Dropping closedness makes the intersection
empty; dropping boundedness does the same; and dropping nonemptiness of the
individual intervals is vacuously fatal.

## Facts & Assumptions

**Given:** Closed bounded intervals $I_k = [a_k, b_k]$ with $a_k \le b_k$ for every $k \in \mathbb{N}$ and $I_{k+1} \subseteq I_k$ for every $k$; the sequences $(a_k)$ and $(b_k)$ of reals ([[def-sequence]]); their ranges $A = \{a_k : k \in \mathbb{N}\}$ and $B = \{b_k : k \in \mathbb{N}\}$, both nonempty; and $\ell_k = b_k - a_k$.

[L1] Closed bounded intervals: $[a,b] = \{x \in \mathbb{R} : a \le x \le b\}$; it is nonempty exactly when $a \le b$, it is the singleton $\{a\}$ when $a = b$, it has two distinct elements $a$ and $b$ when $a < b$, and its length is $b - a$ ([[def-interval]]).

[L2] Least-upper-bound property and uniqueness: a nonempty subset of $\mathbb{R}$ bounded above has a unique supremum; the supremum is an upper bound and is $\le$ every upper bound ([[def-complete-ordered-field]], [[lem-sup-unique]]).

[L3] Greatest-lower-bound property and uniqueness: a nonempty subset of $\mathbb{R}$ bounded below has a unique infimum; the infimum is a lower bound and is $\ge$ every lower bound ([[thm-infimum-property]], [[lem-sup-unique]]).

[L4] Monotone sequences, and the fact that consecutive comparisons suffice: $x_k \le x_{k+1}$ for all $k$ makes $(x_k)$ nondecreasing, and $x_{k+1} \le x_k$ for all $k$ makes it nonincreasing ([[def-monotone-sequence]]).

[L5] Monotone convergence: a nondecreasing sequence whose range is bounded above converges to the supremum of its range, and a nonincreasing sequence whose range is bounded below converges to the infimum ([[thm-monotone-convergence]]).

[L6] Algebra of limits: if $u_k \to u$ and $v_k \to v$ then $u_k - v_k \to u - v$ ([[thm-algebra-of-limits]]).

[L7] A sequence of reals has at most one limit ([[lem-limit-unique]]).

[L8] Bounded above and bounded below, for a subset of $\mathbb{R}$ ([[def-bounded-set]]).

[L9] The order on $\mathbb{N}$ is total and transitive, so any two indices $k, l$ admit an index $m$ with $k \le m$ and $l \le m$, namely the larger of the two ([[def-nat-order]], [[thm-nat-linear-order]]).

## Proof

**Proof technique:** direct.

1.1 Nestedness read on the endpoints: since $a_{k+1} \le b_{k+1}$, both $a_{k+1}$ and $b_{k+1}$ lie in $I_{k+1} \subseteq I_k$, so $a_k \le a_{k+1}$ and $b_{k+1} \le b_k$ for every $k$. [given, L1]

2.1 Hence $(a_k)$ is nondecreasing and $(b_k)$ is nonincreasing. [step 1.1, L4]

3.1 For all indices $k$ and $l$: choosing $m$ with $k \le m$ and $l \le m$ gives $a_k \le a_m \le b_m \le b_l$, so $a_k \le b_l$. [step 2.1, given, L9]

4.1 Every $b_l$ is therefore an upper bound of $A$ and every $a_k$ a lower bound of $B$; both sets are nonempty, so $a := \sup A$ and $b := \inf B$ exist and are unique. [step 3.1, L2, L3, L8]

5.1 $a \le b$: each $b_l$ is an upper bound of $A$, so $a \le b_l$ for every $l$ by leastness of the supremum; thus $a$ is a lower bound of $B$, and $a \le b$ by greatestness of the infimum. [step 4.1, L2, L3]

5.2 By monotone convergence, $a_k \to a$ and $b_k \to b$. [step 2.1, step 4.1, L5]

5.3 The intersection is exactly $[a,b]$: a real $x$ lies in every $I_k$ exactly when $a_k \le x \le b_k$ for every $k$, that is exactly when $x$ is an upper bound of $A$ and a lower bound of $B$, and by leastness of $a$ and greatestness of $b$ that holds exactly when $a \le x \le b$. [step 4.1, L1, L2, L3]

6.1 $\ell_k = b_k - a_k \to b - a$ by the algebra of limits. [step 5.2, L6]

6.2 Since $a \le b$, the interval $[a,b]$ is nonempty, so the intersection is nonempty; together with step 5.3 this is claim 1. [step 5.1, step 5.3, L1]

7.1 If $\ell_k \to 0$ then $b - a = 0$ by uniqueness of limits, so $a = b$ and the intersection is $[a,a] = \{a\}$, a single point. [step 5.3, step 6.1, L1, L7]

7.2 Conversely, if the intersection is a single point then $a = b$: it equals $[a,b]$ with $a \le b$, and $a < b$ would give the two distinct elements $a$ and $b$. Hence $b - a = 0$ and $\ell_k \to 0$ by step 6.1. [step 5.1, step 5.3, step 6.1, L1]

8.1 Claim 1 is step 6.2 and claim 2 is the pair of implications in steps 7.1 and 7.2, so a nested sequence of nonempty closed bounded intervals has nonempty intersection, equal to $[a,b]$, and that intersection is a single point exactly when the lengths tend to $0$. [step 6.2, step 7.1, step 7.2] ∎

## Remarks

- **No Archimedean input is needed.** The lengths are handled entirely by the
  algebra of limits and the uniqueness of limits: $\ell_k$ always converges, to
  $b - a$, and the two directions of claim 2 are then the two directions of
  "$b - a = 0$". A proof that instead argues "if $b - a > 0$ then some $\ell_k$
  is smaller" does need the Archimedean property
  ([[cor-archimedean-reciprocal]]), and it is avoidable, so it is avoided.

- **Nestedness gives more than it is usually stated to give.** The intersection
  is not merely nonempty; it is the closed interval $[a,b]$, and $a$ and $b$ are
  the limits of the endpoint sequences. The single-point case is exactly the case
  in which those two limits agree, and that is what makes the nested interval
  property usable as a *construction* of a real number, as in
  [[ex-nested-intervals-single-point]].

- **This is one of the standard equivalents of completeness.** Nested intervals
  together with the Archimedean property imply the least-upper-bound property, so
  the implication proved here is not reversible for free: it is half of an
  equivalence whose other half needs the Archimedean hypothesis separately.
  [[rem-completeness-routes]] records where this library stands on those routes.

- **The witnesses for the two deleted hypotheses** are
  [[cex-nested-open-intervals-empty]], which keeps boundedness and drops
  closedness, and [[cex-nested-unbounded-closed-empty]], which keeps closedness
  and drops boundedness. Neither is used above; each shows that the corresponding
  hypothesis cannot be removed.
````

