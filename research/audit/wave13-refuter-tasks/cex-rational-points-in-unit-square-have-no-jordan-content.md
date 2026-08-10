## Selection reasons

- critical risk (12): 11 declared dependencies; 5 cited facts; biconditional / both-direction claim; boundary-sensitive language; analytic limiting/completeness language
- top-20 manifest-edge consumer (11 outgoing relationships)

## Target item — `cex-rational-points-in-unit-square-have-no-jordan-content`

Normalized current SHA-256: `625f97129eec3e83d99b08ed50c25a4f88246d5734a398406c196d9b1fcf83c0`

The complete exact-current item follows, including frontmatter:

````markdown
---
id: cex-rational-points-in-unit-square-have-no-jordan-content
kind: counterexample
title: "The rational points of $[0,1]^2$ form a bounded null set that is not Jordan measurable"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-jordan-boundary-criterion, def-null-and-content-zero-in-rn, lem-null-sets-in-rn-closed-under-subsets-and-countable-unions, thm-rationals-countable, thm-n-cross-n-countable, def-countable, lem-q-and-irrationals-dense-r, def-metric-interior-closure-boundary, lem-compact-null-iff-content-zero-in-rn, thm-jordan-content-and-indicator-integrability, ex-unit-box-volume-and-integral]
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
    - title: "J. Lebl, Basic Analysis, Jordan Measurable Sets"
      url: "https://www.jirka.org/ra/html/sec_jordansets.html"
    - title: "J. Lebl, Basic Analysis, Outer Measure and Null Sets"
      url: "https://www.jirka.org/ra/html/sec_outermeasure.html"
    - title: "A. Treibergs, MATH 3225 final solutions"
      url: "https://www.math.utah.edu/~treiberg/M3225_Final_Solutions.pdf"
pipeline_run: null
---

## Statement refuted

Every bounded null subset of $\mathbb R^2$ is Jordan measurable.

## Facts & Assumptions

**Given:** $E=(\mathbb Q\cap[0,1])^2$.

[L1] $\mathbb Q$ and $\mathbb N^2$ are countable ([[thm-rationals-countable]], [[thm-n-cross-n-countable]], [[def-countable]]).

[L2] Rationals and irrationals are dense ([[lem-q-and-irrationals-dense-r]]).

[L3] Jordan measurability is equivalent to a null boundary ([[thm-jordan-boundary-criterion]]).

## Counterexample

**Proof technique:** direct.

1.1 The set $E$ is countable by [L1]. Enumerate its points and cover the $j$-th singleton by a square with volume below $\varepsilon2^{-j-1}$; countable-union closure gives nullity.   [L1, given]

1.2 By [L2], both $E$ and its complement are dense at every point of the unit square, so $\partial E=[0,1]^2$.   [L2, given]

2.1 The unit square has content $1$, by [[ex-unit-box-volume-and-integral]] and [[thm-jordan-content-and-indicator-integrability]], hence is not null ([[lem-compact-null-iff-content-zero-in-rn]]).  [step 1.2]

3.1 The boundary criterion [L3] makes $E$ non-Jordan-measurable, despite nullity.  [step 1.1, step 2.1, L3] ∎
````

## Wave 13 provenance row

```json
{
  "id": "cex-rational-points-in-unit-square-have-no-jordan-content",
  "statement": "ai-altered",
  "proof": "ai-generated",
  "evidence": "semantic-source",
  "urls": [
    "https://www.math.utah.edu/~treiberg/M3225_Final_Solutions.pdf",
    "https://www.jirka.org/ra/html/sec_outermeasure.html",
    "https://www.jirka.org/ra/html/sec_jordansets.html"
  ],
  "rationale": "The Utah notes explicitly use the rational points of the unit square as a non-Jordan set whose boundary is the whole square; the nullity source covers countable rational points. The item combines those standard facts in its local conventions.",
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
      "source": "thm-rationals-countable",
      "source_section": "Statement",
      "quote": "$\\mathbb{Q} \\approx \\mathbb{N}$ ([[def-equinumerous]]): the rationals are\ncountably infinite ([[def-countable]]).\n\n**No choice principle is used.** The one place where a reader expects a choice,\n\"pick a representative $a/b$ of each rational\", is exactly where\n[[lem-rat-positive-denominator]] applies: every rational *has* a representative\nwith positive denominator, so the map $(a,b) \\mapsto [(a,b)]$ defined on\n$\\mathbb{Z} \\times \\mathbb{Z}_{>0}$ is already **surjective** onto $\\mathbb{Q}$,\nand countability follows from a surjection without ever selecting a\nrepresentative. The same device handles $\\mathbb{Z}$, which is a surjective image\nof $\\mathbb{N} \\times \\mathbb{N}$ by construction ([[def-integers]]).",
      "quote_selection": "full-source-section",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L1",
      "source": "thm-n-cross-n-countable",
      "source_section": "Statement",
      "quote": "$\\mathbb{N} \\times \\mathbb{N} \\approx \\mathbb{N}$ ([[def-equinumerous]]): the\nplane of pairs of naturals is countably infinite ([[def-countable]]).\n\nThe bijection is exhibited, not merely asserted to exist. Define $2^m$ by\nrecursion on $m$ ([[thm-recursion]]) by $2^0 = 1$ and $2^{\\sigma(m)} = 2^m + 2^m$,\nand set\n\n$$J(m,n) = 2^m \\cdot \\sigma(n + n), \\qquad \\text{that is} \\qquad J(m,n) = 2^m(2n+1).$$\n\nThen $J$ is a bijection from $\\mathbb{N} \\times \\mathbb{N}$ onto\n$\\mathbb{N} \\setminus \\{0\\}$, and $\\sigma$ is a bijection from $\\mathbb{N}$ onto\n$\\mathbb{N} \\setminus \\{0\\}$, so $\\sigma^{-1} \\circ J$ is a bijection\n$\\mathbb{N} \\times \\mathbb{N} \\to \\mathbb{N}$. What makes $J$ bijective is the\ndecomposition of a nonzero natural into a power of two times an odd number,\nexistence and uniqueness both.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L1",
      "source": "def-countable",
      "source_section": "Definition",
      "quote": "Recall that a natural number is a von Neumann natural\n([[def-natural-numbers]]): $0 = \\varnothing$ and $\\sigma(n) = n \\cup \\{n\\}$, so\nthat\n\n$$n = \\{\\, m \\in \\mathbb{N} : m < n \\,\\} = \\{0, 1, \\dots, n-1\\}$$\n\nis itself the set of its predecessors. Here $<$ is the order of\n[[def-nat-order]], which is defined additively, so the displayed identity is a\ntheorem and not a convention: it is [[lem-nat-order-is-membership]], proved\nimmediately above. Let $A$ be a set, and let $\\approx$ be equinumerosity\n([[def-equinumerous]]).\n\n- $A$ is **finite** if $A \\approx n$ for some $n \\in \\mathbb{N}$.\n- $A$ is **countably infinite** if $A \\approx \\mathbb{N}$.\n- $A$ is **at most countable** if it is finite or countably infinite.\n- $A$ is **uncountable** if it is not at most countable.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L2",
      "source": "lem-q-and-irrationals-dense-r",
      "source_section": "Statement",
      "quote": "Write $\\mathbb{Q}_{\\mathbb{R}}$ for the image of $\\mathbb{Q}$ in $\\mathbb{R}$\nunder the canonical embedding $q \\mapsto \\hat q$ ([[lem-rat-embeds-dense]]), the\nset usually written $\\mathbb{Q}$ once the identification is made, and put\n$X := \\mathbb{R} \\setminus \\mathbb{Q}_{\\mathbb{R}}$ for the irrationals. Then:\n\n1. $\\mathbb{Q}_{\\mathbb{R}}$ is dense in $\\mathbb{R}$, that is,\n   $\\overline{\\mathbb{Q}_{\\mathbb{R}}} = \\mathbb{R}$ ([[def-limit-point-r]]);\n2. $X$ is dense in $\\mathbb{R}$;\n3. every nonempty open subset of $\\mathbb{R}$ is uncountable\n   ([[def-countable]]).\n\nClaim 2 is not a symmetry of claim 1: the rationals are dense because they are\n*constructed* to approximate, whereas the irrationals are dense because there are\ntoo many points in any interval for a countable set to exhaust it, which is why\nclaim 3 is proved alongside and used for it.",
      "quote_selection": "full-source-section",
      "uses": [
        "1.2"
      ]
    },
    {
      "fact": "L3",
      "source": "thm-jordan-boundary-criterion",
      "source_section": "Statement",
      "quote": "A metric-bounded set $E\\subseteq\\mathbb R^m$ is Jordan measurable if and only\nif its boundary $\\partial E$ is null, equivalently has content zero.",
      "quote_selection": "full-source-section",
      "uses": [
        "3.1"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1.1",
      "claim": "The set $E$ is countable by [L1]. Enumerate its points and cover the $j$-th singleton by a square with volume below $\\varepsilon2^{-j-1}$; countable-union closure gives nullity.  ",
      "step": "1.1",
      "inputs": [
        "L1"
      ]
    },
    {
      "id": "step-1.2",
      "claim": "By [L2], both $E$ and its complement are dense at every point of the unit square, so $\\partial E=[0,1]^2$.  ",
      "step": "1.2",
      "inputs": [
        "L2"
      ]
    },
    {
      "id": "step-2.1",
      "claim": "The unit square has content $1$, by [[ex-unit-box-volume-and-integral]] and [[thm-jordan-content-and-indicator-integrability]], hence is not null ([[lem-compact-null-iff-content-zero-in-rn]]). ",
      "step": "2.1",
      "inputs": [
        "step 1.2"
      ]
    },
    {
      "id": "step-3.1",
      "claim": "The boundary criterion [L3] makes $E$ non-Jordan-measurable, despite nullity. ",
      "step": "3.1",
      "inputs": [
        "L3",
        "step 1.1",
        "step 2.1"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "not_applicable",
      "reason": "cex-rational-points-in-unit-square-have-no-jordan-content: the Statement refuted fixes the displayed objects and has no conclusion depending on an unlicensed choice from an empty family: Every bounded null subset of $\\mathbb R^2$ is Jordan measurable."
    },
    {
      "case": "zero",
      "status": "not_applicable",
      "reason": "cex-rational-points-in-unit-square-have-no-jordan-content: no independent zero-parameter boundary remains after the stated hypotheses and definitions; checked against the Statement refuted: Every bounded null subset of $\\mathbb R^2$ is Jordan measurable."
    },
    {
      "case": "one",
      "status": "not_applicable",
      "reason": "cex-rational-points-in-unit-square-have-no-jordan-content: the assertion has no separate unit-size case; its quantified argument applies without a one-case split: Every bounded null subset of $\\mathbb R^2$ is Jordan measurable."
    },
    {
      "case": "degenerate",
      "status": "checked",
      "evidence": "step 1.1: the proof explicitly handles or excludes the degenerate configuration relevant to the statement."
    },
    {
      "case": "endpoints",
      "status": "checked",
      "evidence": "step 3.1: the proof explicitly treats the endpoint, boundary, or radial-limit behaviour used by the assertion."
    },
    {
      "case": "nonempty-choice",
      "status": "not_applicable",
      "reason": "cex-rational-points-in-unit-square-have-no-jordan-content: the proof uses only given objects, formulas, or universal instantiation and makes no choice from a possibly empty family; see Statement refuted: Every bounded null subset of $\\mathbb R^2$ is Jordan measurable."
    },
    {
      "case": "iff-forward",
      "status": "not_applicable",
      "reason": "cex-rational-points-in-unit-square-have-no-jordan-content: the Statement refuted is not an equivalence, so there is no forward implication obligation: Every bounded null subset of $\\mathbb R^2$ is Jordan measurable."
    },
    {
      "case": "iff-reverse",
      "status": "not_applicable",
      "reason": "cex-rational-points-in-unit-square-have-no-jordan-content: the Statement refuted is not an equivalence, so there is no reverse implication obligation: Every bounded null subset of $\\mathbb R^2$ is Jordan measurable."
    }
  ]
}
```

## Generated audit-manifest relationships

```json
[
  {
    "source": "cex-rational-points-in-unit-square-have-no-jordan-content",
    "sourcePage": "the-riemann-integral-in-rn-and-jordan-content-examples",
    "batch": "wave13-real-analysis",
    "target": "thm-jordan-boundary-criterion",
    "declared_target": "thm-jordan-boundary-criterion",
    "target_statement_provenance": "literature-derived",
    "targetPage": "the-riemann-integral-in-rn-and-jordan-content",
    "targetBatch": "wave13-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-rational-points-in-unit-square-have-no-jordan-content",
    "sourcePage": "the-riemann-integral-in-rn-and-jordan-content-examples",
    "batch": "wave13-real-analysis",
    "target": "def-null-and-content-zero-in-rn",
    "declared_target": "def-null-and-content-zero-in-rn",
    "target_statement_provenance": "ai-altered",
    "targetPage": "the-riemann-integral-in-rn-and-jordan-content",
    "targetBatch": "wave13-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-rational-points-in-unit-square-have-no-jordan-content",
    "sourcePage": "the-riemann-integral-in-rn-and-jordan-content-examples",
    "batch": "wave13-real-analysis",
    "target": "lem-null-sets-in-rn-closed-under-subsets-and-countable-unions",
    "declared_target": "lem-null-sets-in-rn-closed-under-subsets-and-countable-unions",
    "target_statement_provenance": "ai-altered",
    "targetPage": "the-riemann-integral-in-rn-and-jordan-content",
    "targetBatch": "wave13-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-rational-points-in-unit-square-have-no-jordan-content",
    "sourcePage": "the-riemann-integral-in-rn-and-jordan-content-examples",
    "batch": "wave13-real-analysis",
    "target": "thm-rationals-countable",
    "declared_target": "thm-rationals-countable",
    "target_statement_provenance": "ai-altered",
    "targetPage": "countability-and-uncountability",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-rational-points-in-unit-square-have-no-jordan-content",
    "sourcePage": "the-riemann-integral-in-rn-and-jordan-content-examples",
    "batch": "wave13-real-analysis",
    "target": "thm-n-cross-n-countable",
    "declared_target": "thm-n-cross-n-countable",
    "target_statement_provenance": "ai-altered",
    "targetPage": "countability-and-uncountability",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-rational-points-in-unit-square-have-no-jordan-content",
    "sourcePage": "the-riemann-integral-in-rn-and-jordan-content-examples",
    "batch": "wave13-real-analysis",
    "target": "def-countable",
    "declared_target": "def-countable",
    "target_statement_provenance": "ai-altered",
    "targetPage": "countability-and-uncountability",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-rational-points-in-unit-square-have-no-jordan-content",
    "sourcePage": "the-riemann-integral-in-rn-and-jordan-content-examples",
    "batch": "wave13-real-analysis",
    "target": "lem-q-and-irrationals-dense-r",
    "declared_target": "lem-q-and-irrationals-dense-r",
    "target_statement_provenance": "ai-altered",
    "targetPage": "topology-of-r",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-rational-points-in-unit-square-have-no-jordan-content",
    "sourcePage": "the-riemann-integral-in-rn-and-jordan-content-examples",
    "batch": "wave13-real-analysis",
    "target": "def-metric-interior-closure-boundary",
    "declared_target": "def-metric-interior-closure-boundary",
    "target_statement_provenance": "ai-altered",
    "targetPage": "metric-spaces",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-rational-points-in-unit-square-have-no-jordan-content",
    "sourcePage": "the-riemann-integral-in-rn-and-jordan-content-examples",
    "batch": "wave13-real-analysis",
    "target": "lem-compact-null-iff-content-zero-in-rn",
    "declared_target": "lem-compact-null-iff-content-zero-in-rn",
    "target_statement_provenance": "ai-altered",
    "targetPage": "the-riemann-integral-in-rn-and-jordan-content",
    "targetBatch": "wave13-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-rational-points-in-unit-square-have-no-jordan-content",
    "sourcePage": "the-riemann-integral-in-rn-and-jordan-content-examples",
    "batch": "wave13-real-analysis",
    "target": "thm-jordan-content-and-indicator-integrability",
    "declared_target": "thm-jordan-content-and-indicator-integrability",
    "target_statement_provenance": "ai-altered",
    "targetPage": "the-riemann-integral-in-rn-and-jordan-content",
    "targetBatch": "wave13-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-rational-points-in-unit-square-have-no-jordan-content",
    "sourcePage": "the-riemann-integral-in-rn-and-jordan-content-examples",
    "batch": "wave13-real-analysis",
    "target": "ex-unit-box-volume-and-integral",
    "declared_target": "ex-unit-box-volume-and-integral",
    "target_statement_provenance": "literature-derived",
    "targetPage": "the-riemann-integral-in-rn-and-jordan-content-examples",
    "targetBatch": "wave13-real-analysis",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  }
]
```

## Relevant current generated-risk rows

```json
[]
```

## Full exact-current text of every cited or declared item (11)

### `def-countable`

````markdown
---
id: def-countable
kind: definition
title: "Finite, countably infinite, countable, uncountable"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-equinumerous, def-natural-numbers, def-nat-order, lem-nat-order-is-membership, lem-pigeonhole]
justified_by: []
aliases: [def-finite-set, def-countably-infinite, def-uncountable]
landmark: true
short: "finite, countable, uncountable"
verification:
  precheck: n/a
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
    - title: "J. K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
    - title: "J. Lebl, Basic Analysis: Introduction to Real Analysis, basic set theory"
      url: "https://www.jirka.org/ra/html/sec_basicset.html"
    - title: "Countable set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Countable_set"
    - title: "Finite set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Finite_set"
    - title: "T. Tao, Analysis I, 3rd ed., §3.6 and §8.1"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
pipeline_run: null
---

## Definition

Recall that a natural number is a von Neumann natural
([[def-natural-numbers]]): $0 = \varnothing$ and $\sigma(n) = n \cup \{n\}$, so
that

$$n = \{\, m \in \mathbb{N} : m < n \,\} = \{0, 1, \dots, n-1\}$$

is itself the set of its predecessors. Here $<$ is the order of
[[def-nat-order]], which is defined additively, so the displayed identity is a
theorem and not a convention: it is [[lem-nat-order-is-membership]], proved
immediately above. Let $A$ be a set, and let $\approx$ be equinumerosity
([[def-equinumerous]]).

- $A$ is **finite** if $A \approx n$ for some $n \in \mathbb{N}$.
- $A$ is **countably infinite** if $A \approx \mathbb{N}$.
- $A$ is **at most countable** if it is finite or countably infinite.
- $A$ is **uncountable** if it is not at most countable.

## Remarks

- **Convention: in this library "countable" alone always means "at most
  countable"**, so a finite set is countable. This is the convention of Halmos
  and of Tao, and it is the one that makes the theorems on this page read
  cleanly: subsets, products and unions of countable sets are countable, with no
  finite/infinite case split in the statement. The competing convention, used by
  Rudin among others, reserves "countable" for "countably infinite" and says
  "at most countable" for the disjunction. Under that convention every statement
  below still holds after replacing "countable" with "at most countable", but
  several would become false as literally written. Where the distinction
  matters, the long forms "countably infinite" and "at most countable" are used
  in full, and "uncountable" always means "not at most countable", on which the
  two conventions agree.

- **The three classes are exhaustive by construction**: every set is finite,
  countably infinite, or uncountable, since "uncountable" is defined as the
  negation of the disjunction. That they are also mutually exclusive, that is,
  that no set is both finite and countably infinite, is a genuine theorem
  amounting to $\mathbb{N} \not\approx n$ for every $n \in \mathbb{N}$, and it is
  proved immediately above as claim 4 of [[lem-pigeonhole]]. So a countably
  infinite set is never finite, and "$A$ is infinite", meaning not finite, is
  implied by $A \approx \mathbb{N}$. The same lemma pins down finiteness itself:
  by its claim 3 a finite set is equinumerous with exactly one natural number, so
  the number of elements of a finite set is well defined, and by its claim 5 no
  finite set is equinumerous with a proper subset of itself.

- **What the exclusivity is and is not used for below.** Nothing on this page
  needs it in order to run: the infinitude of $\mathbb{Q}$, for instance, is
  obtained by exhibiting a bijection $\mathbb{Q} \approx \mathbb{N}$ directly
  ([[thm-rationals-countable]]) rather than by ruling out finiteness. It is used
  where the two notions of infinity are compared
  ([[fs-infinite-has-countable-subset-in-zf]]) and where the continuum hypothesis
  is instantiated at $\mathbb{N}$ ([[rem-continuum-hypothesis]]), both of which
  need $\mathbb{N}$ to be infinite as a fact rather than as a convention.

- **$0$ and the empty set.** $0 = \varnothing$, and $A \approx 0$ holds exactly
  when $A = \varnothing$, so the empty set is finite. This matters in the proofs
  below, where the empty case is always separated out: a surjection
  $\mathbb{N} \to A$ cannot exist when $A = \varnothing$, which is why
  [[lem-countable-iff-surjection-from-n]] assumes $A$ nonempty.

- **Countability is a property of a set alone**, not of a set with structure. In
  particular $\mathbb{Q}$ is countable while carrying a dense order, and
  $\mathbb{R}$ is uncountable; neither statement says anything on its own about
  the order or the arithmetic those sets carry.
````

### `def-metric-interior-closure-boundary`

````markdown
---
id: def-metric-interior-closure-boundary
kind: definition
title: "Interior, closure, boundary, limit point, isolated point and dense subset of a metric space"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-metric-topology, def-metric-ball, thm-metric-open-set-algebra, def-metric-space]
justified_by: []
aliases: [def-closure, def-interior, def-boundary, def-limit-point, def-dense]
landmark: true
short: "$\\operatorname{int} A$, $\\overline{A}$, $\\partial A$"
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
    - title: "Closure (topology) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Closure_(topology)"
    - title: "Interior (topology) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Interior_(topology)"
    - title: "Limit point (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Limit_point"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "Boundary (topology) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Boundary_(topology)"
    - title: "Isolated point (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Isolated_point"
pipeline_run: null
---

## Definition

Let $(X,d)$ be a metric space ([[def-metric-space]]), let $A \subseteq X$ and let
$x \in X$. Balls are as in [[def-metric-ball]] and open sets as in
[[def-metric-topology]]; recall that a real $r$ written as a radius is always
$> 0$.

- $x$ is an **interior point** of $A$ if $B(x,r) \subseteq A$ for some $r$. The
  set of interior points is the **interior** $\operatorname{int}(A)$.
- $x$ is an **adherent point** of $A$ if $B(x,r) \cap A \ne \emptyset$ for every
  $r$. The set of adherent points is the **closure** $\overline{A}$.
- $x$ is a **limit point** (accumulation point) of $A$ if
  $B(x,r) \cap (A \setminus \{x\}) \ne \emptyset$ for every $r$. The set of limit
  points is the **derived set** $A'$.
- $x$ is an **isolated point** of $A$ if $x \in A$ and $B(x,r) \cap A = \{x\}$
  for some $r$.
- The **boundary** of $A$ is $\partial A := \overline{A} \setminus \operatorname{int}(A)$.
- $A$ is **dense** in $X$ if $\overline{A} = X$.

**The interior is open, and it is the largest open subset of $A$.** If
$x \in \operatorname{int}(A)$, fix $r$ with $B(x,r) \subseteq A$; the ball
$B(x,r)$ is itself open ([[thm-metric-open-set-algebra]]), so every
$y \in B(x,r)$ has some $s$ with $B(y,s) \subseteq B(x,r) \subseteq A$, which
puts $y$ in $\operatorname{int}(A)$. Hence $B(x,r) \subseteq \operatorname{int}(A)$
and $\operatorname{int}(A)$ is open. It is contained in $A$, since
$x \in B(x,r) \subseteq A$ for an interior point $x$; and if $V \subseteq A$ is
open then every $v \in V$ has a ball inside $V \subseteq A$, so
$V \subseteq \operatorname{int}(A)$.

**Two descriptions of the boundary agree.** $x \in \partial A$ says that every
ball around $x$ meets $A$ and that no ball around $x$ is contained in $A$; the
second half says exactly that every ball around $x$ meets $X \setminus A$. So

$$\partial A = \{\, x \in X : B(x,r) \cap A \ne \emptyset \text{ and } B(x,r) \cap (X \setminus A) \ne \emptyset \text{ for every } r \,\},$$

from which $\partial A = \partial(X \setminus A)$ is immediate.

**Elementary containments, straight from the definitions.** $A \subseteq \overline{A}$,
because $x \in A$ lies in every $B(x,r) \cap A$; $A' \subseteq \overline{A}$,
because a ball meeting $A \setminus \{x\}$ meets $A$; and
$\operatorname{int}(A) \subseteq A \subseteq \overline{A}$. A point of $A$ is
either isolated in $A$ or a limit point of $A$, and not both, according to
whether some ball meets $A$ only in $x$.

## Remarks

- **The closure is defined here by adherent points and by nothing else.** That it
  is closed, that it is the smallest closed set containing $A$, that for nonempty
  $A$ it is $\{x : d(x,A) = 0\}$, and that it consists of the limits of sequences
  from $A$, are theorems ([[thm-metric-closure-characterisation]],
  [[thm-metric-sequential-closure]]) and are proved from this definition.
- **Limit point of a set is not the same notion as subsequential limit of a
  sequence** ([[def-subsequential-limit]]), which this library deliberately keeps
  under a different name: the constant sequence $x_k = 0$ has $0$ as a
  subsequential limit, while its set of values $\{0\}$ has no limit point at all.
- **Dense is relative to the ambient space**, and the ambient space is part of
  the data: $A$ is dense in $X$ when $\overline{A} = X$, with $\overline{A}$
  computed in $(X,d)$. The same $A$ inside a larger space is a different
  question.
````

### `def-null-and-content-zero-in-rn`

````markdown
---
id: def-null-and-content-zero-in-rn
kind: definition
title: "Measure zero and content zero in $\\mathbb{R}^m$ by countable and finite cube covers"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-multidimensional-rectangle-and-volume, def-series, thm-nonnegative-series-bounded-partial-sums, def-finite-sum, lem-finite-sum-laws, def-countable, def-complete-ordered-field]
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
    - title: "J. Lebl, Basic Analysis, Outer Measure and Null Sets"
      url: "https://www.jirka.org/ra/html/sec_outermeasure.html"
pipeline_run: null
---

## Definition

Fix $m\ge1$. A **closed cube** is a rectangle $\prod_{j<m}[a_j,a_j+\ell]$ with $\ell\ge0$; its volume is $\ell^m$. A set $E\subseteq\mathbb R^m$ is **null** when, for every $\varepsilon>0$, it is covered by a sequence of closed cubes whose nonnegative volume series converges with sum at most $\varepsilon$. It has **content zero** when such a cover can be finite.

The series and finite sums are [[def-series]] and [[def-finite-sum]], and their nonnegative bounds use [[thm-nonnegative-series-bounded-partial-sums]] and [[lem-finite-sum-laws]]. Both properties pass to subsets. Padding a finite cover with degenerate zero-volume cubes proves that content zero implies null. This terminology defines only cover-nullity; it does not define a measure on arbitrary sets.
````

### `ex-unit-box-volume-and-integral`

````markdown
---
id: ex-unit-box-volume-and-integral
kind: example
title: "The unit box in $\\mathbb{R}^m$ has volume $1$, and the integral of a constant $c$ over it is $c$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-multidimensional-rectangle-and-volume, def-multidimensional-grid-partition, def-multidimensional-darboux-sums, def-multidimensional-darboux-integral, lem-finite-sum-laws, def-finite-sum]
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
    - title: "J. Lebl, Basic Analysis, Jordan Measurable Sets"
      url: "https://www.jirka.org/ra/html/sec_jordansets.html"
    - title: "J. Lebl, Basic Analysis, Outer Measure and Null Sets"
      url: "https://www.jirka.org/ra/html/sec_outermeasure.html"
    - title: "J. Lebl, Basic Analysis, Riemann Integral in Several Variables"
      url: "https://www.jirka.org/ra/html/sec_rirect.html"
pipeline_run: null
---

## Example

For $Q=[0,1]^m$, $\operatorname{vol}(Q)=1$, and for every constant $c$, $\int_Qc=c$.

## Facts & Assumptions

**Given:** $m\ge1$ and constant $c$.

[L1] Rectangle volume is the finite product of side lengths ([[def-multidimensional-rectangle-and-volume]]).

[L2] Darboux sums and the integral are [[def-multidimensional-darboux-sums]] and [[def-multidimensional-darboux-integral]].

## Verification

**Proof technique:** direct.

1.1 Every side has length $1$, so the finite product volume is $1$.   [L1, given]

1.2 On every cell, both infimum and supremum of the constant function are $c$. Thus both sums are $c\sum_i\operatorname{vol}(Q_i)=c$.   [L2, given]

2.1 Lower and upper integrals therefore both equal $c$.  [step 1.2, L2] ∎
````

### `lem-compact-null-iff-content-zero-in-rn`

````markdown
---
id: lem-compact-null-iff-content-zero-in-rn
kind: lemma
title: "For compact subsets of $\\mathbb{R}^m$, measure zero and content zero coincide"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-null-and-content-zero-in-rn, thm-heine-borel-rn, def-metric-compactness, lem-compactness-is-intrinsic, def-metric-topology, def-multidimensional-rectangle-and-volume, thm-geometric-series, def-finite-sum, lem-finite-sum-laws]
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
    - title: "J. Lebl, Basic Analysis, Outer Measure and Null Sets"
      url: "https://www.jirka.org/ra/html/sec_outermeasure.html"
pipeline_run: null
---

## Statement

A compact subset of $\mathbb R^m$ is null if and only if it has content zero.

## Facts & Assumptions

**Given:** A compact $K\subseteq\mathbb R^m$.

[L1] Content zero implies nullity by finite-cover padding ([[def-null-and-content-zero-in-rn]]).

[L2] Compactness is intrinsic, so every ambient-open cover of a compact subset has a finite subcover ([[def-metric-compactness]], [[lem-compactness-is-intrinsic]], [[def-metric-topology]]).

## Proof

**Proof technique:** direct.

1.1 One implication is [L1]. For the other, fix $\varepsilon>0$ and choose a countable closed-cube cover of $K$ with total volume below $\varepsilon/2$.  [L1, given]

2.1 Enlarge the $j$-th cube to a larger closed cube whose interior contains it, choosing the added volume below $\varepsilon2^{-j-2}$. The interiors form an open cover and the total volumes of their closed containing cubes are below $\varepsilon$.   [step 1.1, given, choose]

3.1 Compactness selects finitely many of those interiors. The corresponding finite family of closed enlarged cubes still covers $K$, and its volume sum is at most the entire nonnegative series, hence below $\varepsilon$.   [step 2.1, L2, given]

4.1 Thus $K$ has content zero.  [step 3.1] ∎
````

### `lem-null-sets-in-rn-closed-under-subsets-and-countable-unions`

````markdown
---
id: lem-null-sets-in-rn-closed-under-subsets-and-countable-unions
kind: lemma
title: "Subsets and countable unions of null subsets of $\\mathbb{R}^m$ are null"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-null-and-content-zero-in-rn, def-countable-choice, thm-n-cross-n-countable, thm-geometric-series, def-series, thm-nonnegative-series-bounded-partial-sums, def-finite-sum, lem-finite-sum-laws, def-integer-power]
justified_by: []
aliases: []
landmark: false
proof_strategy: constructive
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
    - title: "J. Lebl, Basic Analysis, Outer Measure and Null Sets"
      url: "https://www.jirka.org/ra/html/sec_outermeasure.html"
pipeline_run: null
---

## Statement

Every subset of a null subset of $\mathbb R^m$ is null. Assuming countable choice, every countable union of null subsets of $\mathbb R^m$ is null.

## Facts & Assumptions

**Given:** Null sets $E_j$, $j\in\mathbb N$.

[L1] Nullity is the cube-cover condition of [[def-null-and-content-zero-in-rn]].

[L2] Countable choice selects one cover for each $E_j$ ([[def-countable-choice]]), and $\mathbb N^2$ is countable ([[thm-n-cross-n-countable]]).

[L3] $\sum_{j\ge0}2^{-j-1}=1$ ([[thm-geometric-series]]).

[L4] A nonnegative series converges with sum at most $M$ whenever all of its finite partial sums are at most $M$ ([[thm-nonnegative-series-bounded-partial-sums]], [[def-series]]).

## Proof

**Proof technique:** constructive.

1.1 Subset closure follows because any cover of a set covers every subset.  [L1]

1.2 Given $\varepsilon>0$, choose for each $j$ a cube cover of $E_j$ with total volume at most $\varepsilon2^{-j-1}$. This simultaneous selection uses [L2].  [L1, L2, L3, construct]

2.1 Enumerate the doubly indexed cubes through a bijection $\mathbb N\to\mathbb N^2$. Every finite partial sum is contained in a finite rectangle of indices and is at most $\sum_j\varepsilon2^{-j-1}\le\varepsilon$.   [step 1.2, L2, L3, given]

3.1 By [L4], the enumerated nonnegative volume series converges with sum at most $\varepsilon$. The cubes cover $\bigcup_jE_j$, proving nullity.  [step 2.1, L1, L4, discharge-construct] ∎
````

### `lem-q-and-irrationals-dense-r`

````markdown
---
id: lem-q-and-irrationals-dense-r
kind: lemma
title: "Both $\\mathbb{Q}$ and $\\mathbb{R} \\setminus \\mathbb{Q}$ are dense in $\\mathbb{R}$, and every nonempty open subset of $\\mathbb{R}$ is uncountable"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [lem-rat-embeds-dense, def-limit-point-r, def-open-and-closed-in-r, def-interval, def-neighbourhood-r, thm-closure-characterisations-r, cor-interval-uncountable, lem-subset-of-countable, def-countable, thm-rationals-countable, def-equinumerous, def-injection-surjection-bijection]
justified_by: []
forward_refs: [ex-closure-interior-boundary-of-q]
aliases: []
landmark: false
short: "$\\mathbb{Q}$ and its complement are dense"
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
    - title: "Dense set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Dense_set"
    - title: "Countable set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Countable_set"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1 and Ch. 2"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §1.2"
      url: "https://www.jirka.org/ra/"
    - title: "J. K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Statement

Write $\mathbb{Q}_{\mathbb{R}}$ for the image of $\mathbb{Q}$ in $\mathbb{R}$
under the canonical embedding $q \mapsto \hat q$ ([[lem-rat-embeds-dense]]), the
set usually written $\mathbb{Q}$ once the identification is made, and put
$X := \mathbb{R} \setminus \mathbb{Q}_{\mathbb{R}}$ for the irrationals. Then:

1. $\mathbb{Q}_{\mathbb{R}}$ is dense in $\mathbb{R}$, that is,
   $\overline{\mathbb{Q}_{\mathbb{R}}} = \mathbb{R}$ ([[def-limit-point-r]]);
2. $X$ is dense in $\mathbb{R}$;
3. every nonempty open subset of $\mathbb{R}$ is uncountable
   ([[def-countable]]).

Claim 2 is not a symmetry of claim 1: the rationals are dense because they are
*constructed* to approximate, whereas the irrationals are dense because there are
too many points in any interval for a countable set to exhaust it, which is why
claim 3 is proved alongside and used for it.

## Facts & Assumptions

**Given:** The canonical embedding $q \mapsto \hat q$ of $\mathbb{Q}$ into $\mathbb{R}$, its image $\mathbb{Q}_{\mathbb{R}}$, and the complement $X = \mathbb{R} \setminus \mathbb{Q}_{\mathbb{R}}$.

[L1] $\overline{A}$ is the set of points every neighbourhood of which meets $A$; $A$ is dense in $\mathbb{R}$ when $\overline{A} = \mathbb{R}$ ([[thm-closure-characterisations-r]], [[def-limit-point-r]]).

[L2] $N_\varepsilon(x) = (x - \varepsilon, x + \varepsilon)$ for real $\varepsilon > 0$, and $x - \varepsilon < x + \varepsilon$ ([[def-neighbourhood-r]], [[def-interval]]).

[L3] $U$ is open when every $x \in U$ admits $\varepsilon > 0$ with $N_\varepsilon(x) \subseteq U$ ([[def-open-and-closed-in-r]]).

[L4] Strictly between any two reals lies an element of $\mathbb{Q}_{\mathbb{R}}$, and $q \mapsto \hat q$ is injective ([[lem-rat-embeds-dense]]).

[L5] $\mathbb{Q} \approx \mathbb{N}$ ([[thm-rationals-countable]]); an injection is a bijection onto its image, and $\approx$ is symmetric and transitive ([[def-injection-surjection-bijection]], [[def-equinumerous]]).

[L6] Every subset of an at most countable set is at most countable, and uncountable means not at most countable ([[lem-subset-of-countable]], [[def-countable]]).

[L7] For $a < b$ the interval $(a,b)$ is uncountable ([[cor-interval-uncountable]]).

## Proof

**Proof technique:** direct.

1.1 $\mathbb{Q}_{\mathbb{R}}$ is dense: let $x \in \mathbb{R}$ and let $\varepsilon > 0$ be real; by [L2] one has $x - \varepsilon < x + \varepsilon$, so [L4] supplies $\hat q$ with $x - \varepsilon < \hat q < x + \varepsilon$, that is $\hat q \in N_\varepsilon(x) \cap \mathbb{Q}_{\mathbb{R}}$. Every real is therefore an adherent point of $\mathbb{Q}_{\mathbb{R}}$ and claim 1 follows from [L1]. [L1, L2, L4]

1.2 $\mathbb{Q}_{\mathbb{R}}$ is at most countable: the embedding is an injection of $\mathbb{Q}$ with image $\mathbb{Q}_{\mathbb{R}}$, hence a bijection onto it, so $\mathbb{Q}_{\mathbb{R}} \approx \mathbb{Q} \approx \mathbb{N}$. [L4, L5]

1.3 For all reals $a < b$ the interval $(a,b)$ is uncountable. [L7]

2.1 For all reals $a < b$ the interval $(a,b)$ contains an irrational: if it did not, then $(a,b) \subseteq \mathbb{Q}_{\mathbb{R}}$, so $(a,b)$ would be a subset of an at most countable set by step 1.2 and hence at most countable by [L6], contradicting step 1.3. So some $z \in (a,b)$ lies in $X$. [step 1.2, step 1.3, L6]

2.2 Every nonempty open $U \subseteq \mathbb{R}$ is uncountable: fix $x \in U$ and, by [L3], a real $\varepsilon > 0$ with $N_\varepsilon(x) \subseteq U$; by [L2] the set $N_\varepsilon(x)$ is the interval $(x - \varepsilon, x + \varepsilon)$ with $x - \varepsilon < x + \varepsilon$, hence uncountable by step 1.3. Were $U$ at most countable, its subset $N_\varepsilon(x)$ would be at most countable by [L6], which it is not; so $U$ is uncountable, which is claim 3. [step 1.3, L2, L3, L6, choose]

3.1 $X$ is dense: let $x \in \mathbb{R}$ and let $\varepsilon > 0$ be real; applying step 2.1 with $a = x - \varepsilon$ and $b = x + \varepsilon$ gives $z \in (x - \varepsilon, x + \varepsilon) \cap X$, which is $N_\varepsilon(x) \cap X$ by [L2]. Every real is therefore an adherent point of $X$, so $\overline{X} = \mathbb{R}$ by [L1], which is claim 2. [step 2.1, L1, L2]

4.1 Claims 1, 2 and 3 are steps 1.1, 3.1 and 2.2, so both $\mathbb{Q}_{\mathbb{R}}$ and its complement are dense in $\mathbb{R}$ and every nonempty open subset of $\mathbb{R}$ is uncountable. [step 1.1, step 2.2, step 3.1] ∎

## Remarks

- **Two dense sets can be disjoint.** $\mathbb{Q}_{\mathbb{R}}$ and $X$ partition
  $\mathbb{R}$ and both are dense, so density says nothing about size: one of
  them is countable and the other is not
  ([[cor-irrationals-uncountable]]). What density does say is that neither has
  interior: a set whose complement is dense has empty interior, which is the
  computation carried out for $\mathbb{Q}$ in
  [[ex-closure-interior-boundary-of-q]].

- **Claim 3 is a statement about open sets, not about intervals.** It follows
  from the uncountability of intervals ([[cor-interval-uncountable]]) only
  because openness supplies an interval inside the set at each of its points.
  A nonempty set with empty interior can perfectly well be countable, as
  $\mathbb{Q}_{\mathbb{R}}$ shows.

- **An explicit irrational is not produced here.** Step 2.1 is a counting
  argument and exhibits nothing. The library does exhibit one separately,
  $\sqrt 2$ ([[thm-of-square-roots]], [[fs-sqrt2-rational]]), and an explicit
  irrational in a given interval $(a,b)$ can be built from it as
  $q_1 + (q_2 - q_1)/\sqrt 2$ for suitable rationals $q_1 < q_2$ in the
  interval; that route is longer and is not the one taken above.
````

### `thm-jordan-boundary-criterion`

````markdown
---
id: thm-jordan-boundary-criterion
kind: theorem
title: "A bounded set in $\\mathbb{R}^m$ is Jordan measurable iff its boundary is null, equivalently of content zero"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-jordan-content-and-indicator-integrability, thm-lebesgue-criterion-in-rn, def-metric-interior-closure-boundary, thm-metric-closure-characterisation, def-metric-topology, def-metric-bounded-diameter, thm-heine-borel-rn, lem-compact-null-iff-content-zero-in-rn, def-null-and-content-zero-in-rn, def-jordan-inner-and-outer-content]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis, Jordan Measurable Sets"
      url: "https://www.jirka.org/ra/html/sec_jordansets.html"
    - title: "J. Lebl, Basic Analysis, Outer Measure and Null Sets"
      url: "https://www.jirka.org/ra/html/sec_outermeasure.html"
pipeline_run: null
---

## Statement

A metric-bounded set $E\subseteq\mathbb R^m$ is Jordan measurable if and only
if its boundary $\partial E$ is null, equivalently has content zero.

## Facts & Assumptions

**Given:** Metric-bounded $E$ in the sense of [[def-metric-bounded-diameter]].

[L1] If $Q$ is a nondegenerate rectangle with $\overline E\subseteq\operatorname{int}Q$, then the relative-domain indicator $1_E:Q\to\mathbb R$ is discontinuous exactly at the ambient boundary $\partial E$. At a boundary point every sufficiently small ambient ball lies in $Q$ and meets both $E$ and its ambient complement, while away from the boundary the indicator is locally constant ([[def-metric-interior-closure-boundary]]).

[L2] Indicator integrability is Jordan measurability ([[thm-jordan-content-and-indicator-integrability]]), and integrability is equivalent to a null discontinuity set ([[thm-lebesgue-criterion-in-rn]]).

[L3] The boundary is closed: it is the intersection of the closed set $\overline E$ with the complement of the open set $\operatorname{int}E$ ([[def-metric-interior-closure-boundary]], [[thm-metric-closure-characterisation]], [[def-metric-topology]]). By [[def-jordan-inner-and-outer-content]], metric boundedness places $E$ in a closed bounding rectangle $Q$. Since $Q$ is closed and contains $E$, the smallest-closed-superset property gives $\partial E\subseteq\overline E\subseteq Q$. Thus $\partial E$ is closed and bounded, hence compact by [[thm-heine-borel-rn]], and compact nullity is equivalent to content zero ([[lem-compact-null-iff-content-zero-in-rn]]).

## Proof

**Proof technique:** direct.

1.1 By [L3], choose a closed bounding rectangle $Q_0$ for $E$ and enlarge every coordinate interval by a fixed positive margin to obtain a nondegenerate rectangle $Q$ with $\overline E\subseteq Q_0\subseteq\operatorname{int}Q$. By [L1] and [L2], $E$ is Jordan measurable exactly when $\partial E$ is null. [L1, L2, L3, given, choose]

1.2 By [L3], nullity of this compact boundary is equivalent to content zero.   [L3, given]

2.1 Combining the equivalences proves the criterion.   [step 1.1, step 1.2, given] ∎
````

### `thm-jordan-content-and-indicator-integrability`

````markdown
---
id: thm-jordan-content-and-indicator-integrability
kind: theorem
title: "A bounded set is Jordan measurable iff its indicator is Riemann integrable, and the integral is its Jordan content"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-jordan-inner-and-outer-content, def-multidimensional-darboux-integral, def-multidimensional-darboux-sums, thm-multidimensional-riemann-criterion, def-multidimensional-grid-partition, lem-multidimensional-refinement-inequalities, lem-finite-cube-covers-admit-grid-control, def-multidimensional-rectangle-and-volume, def-metric-bounded-diameter]
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
    - title: "J. Lebl, Basic Analysis, Jordan Measurable Sets"
      url: "https://www.jirka.org/ra/html/sec_jordansets.html"
    - title: "J. Lebl, Basic Analysis, Outer Measure and Null Sets"
      url: "https://www.jirka.org/ra/html/sec_outermeasure.html"
pipeline_run: null
---

## Statement

A metric-bounded set $E\subseteq\mathbb R^m$ is Jordan measurable if and only
if its indicator $1_E$ is Riemann integrable on a fixed nondegenerate bounding
rectangle $Q$. In that case
$$\int_Q1_E=\operatorname{cont}(E).$$

## Facts & Assumptions

**Given:** Metric-bounded $E\subseteq Q$ in the sense of [[def-metric-bounded-diameter]], where $Q$ is a nondegenerate bounding rectangle.

[L1] Jordan inner and outer content are [[def-jordan-inner-and-outer-content]].

[L2] Multidimensional Darboux sums and integrability are [[def-multidimensional-darboux-sums]], [[def-multidimensional-darboux-integral]], and [[thm-multidimensional-riemann-criterion]].

[L3] A finite rectangle cover can be converted to grid cells meeting $E$ with arbitrarily small excess volume ([[lem-finite-cube-covers-admit-grid-control]]), and rectangles are finite coordinate products ([[def-multidimensional-rectangle-and-volume]]).

## Proof

**Proof technique:** direct.

1.1 On a grid cell, the infimum of $1_E$ is $1$ exactly when the cell is contained in $E$, while its supremum is $1$ exactly when the cell meets $E$. Thus lower and upper sums are inscribed and covering grid approximations.  [L1, L2]

2.1 Apply [L3] to each finite outer rectangle approximation to obtain a grid whose cells meeting $E$ have arbitrarily small excess volume. For an inner approximation, shrink each nondegenerate inscribed rectangle by an arbitrarily small volume, insert the shrunken endpoints, and retain the grid cells inside it. Degenerate rectangles contribute zero. Splitting along the aligned endpoints shows that arbitrary Jordan approximations and grid approximations have the same infimum and supremum. [step 1.1, L3, given]

3.1 Equality of Jordan contents is therefore equality of the lower and upper integrals on the fixed bounding rectangle, and their common value is $\operatorname{cont}(E)$.   [step 2.1, L1, L2, given] ∎
````

### `thm-n-cross-n-countable`

````markdown
---
id: thm-n-cross-n-countable
kind: theorem
title: "$\\mathbb{N} \\times \\mathbb{N} \\approx \\mathbb{N}$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-countable, def-equinumerous, def-injection-surjection-bijection, lem-nat-no-zero-divisors, thm-strong-induction, thm-recursion, thm-induction-principle, thm-omega-is-peano-system, lem-nat-nonzero-is-successor, def-nat-addition, def-nat-multiplication, def-nat-order, def-natural-numbers, lem-nat-add-commutative, lem-nat-add-associative, lem-nat-add-cancellative, lem-nat-add-identity, lem-nat-add-successor-left, lem-nat-mult-commutative, lem-nat-mult-associative, lem-nat-mult-distributive, lem-nat-mult-identity, lem-nat-mult-cancellative, lem-nat-order-add-compatible, lem-nat-trichotomy, thm-nat-linear-order, lem-nat-discrete]
justified_by: []
aliases: [pairing-bijection]
landmark: false
short: "$(m,n)\\mapsto 2^m(2n+1)$ is a bijection"
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
    - title: "J. K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
    - title: "J. Lebl, Basic Analysis: Introduction to Real Analysis, basic set theory"
      url: "https://www.jirka.org/ra/html/sec_basicset.html"
    - title: "Pairing function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Pairing_function"
    - title: "Countable set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Countable_set"
pipeline_run: null
---

## Statement

$\mathbb{N} \times \mathbb{N} \approx \mathbb{N}$ ([[def-equinumerous]]): the
plane of pairs of naturals is countably infinite ([[def-countable]]).

The bijection is exhibited, not merely asserted to exist. Define $2^m$ by
recursion on $m$ ([[thm-recursion]]) by $2^0 = 1$ and $2^{\sigma(m)} = 2^m + 2^m$,
and set

$$J(m,n) = 2^m \cdot \sigma(n + n), \qquad \text{that is} \qquad J(m,n) = 2^m(2n+1).$$

Then $J$ is a bijection from $\mathbb{N} \times \mathbb{N}$ onto
$\mathbb{N} \setminus \{0\}$, and $\sigma$ is a bijection from $\mathbb{N}$ onto
$\mathbb{N} \setminus \{0\}$, so $\sigma^{-1} \circ J$ is a bijection
$\mathbb{N} \times \mathbb{N} \to \mathbb{N}$. What makes $J$ bijective is the
decomposition of a nonzero natural into a power of two times an odd number,
existence and uniqueness both.

## Facts & Assumptions

**Given:** Addition and multiplication on $\mathbb{N}$ with $m + 0 = m$, $m + \sigma(k) = \sigma(m + k)$, $m \cdot 0 = 0$ and $m \cdot \sigma(k) = m \cdot k + m$ ([[def-nat-addition]], [[def-nat-multiplication]]); $1 := \sigma(0)$. Call $k \in \mathbb{N}$ **even** if $k = j + j$ for some $j$ and **odd** if $k = \sigma(j + j)$ for some $j$.

[L1] Recursion: for a set $X$, $x_0 \in X$ and $F : X \to X$ there is $h : \mathbb{N} \to X$ with $h(0) = x_0$ and $h(\sigma(m)) = F(h(m))$ ([[thm-recursion]]).

[L2] Peano: $\sigma(k) \ne 0$ and $\sigma$ is injective ([[thm-omega-is-peano-system]]); every nonzero natural is a successor ([[lem-nat-nonzero-is-successor]]).

[L3] Arithmetic laws: $+$ and $\cdot$ are commutative and associative, $1 \cdot n = n = n \cdot 1$, $0 + n = n$, $a(b + c) = ab + ac$ and $\sigma(a) + n = \sigma(a + n)$ ([[lem-nat-add-commutative]], [[lem-nat-add-associative]], [[lem-nat-add-identity]], [[lem-nat-mult-commutative]], [[lem-nat-mult-associative]], [[lem-nat-mult-identity]], [[lem-nat-mult-distributive]], [[lem-nat-add-successor-left]]).

[L4] Order laws: exactly one of $a < b$, $a = b$, $b < a$ holds ([[lem-nat-trichotomy]]); $\le$ is reflexive, antisymmetric, transitive and total ([[thm-nat-linear-order]]), so $<$ is transitive and mixes with $\le$, in the sense that each of $a < b < c$, $a \le b < c$ and $a < b \le c$ gives $a < c$: transitivity of $\le$ gives $a \le c$ in every case, while $a = c$ would force $b = c$ or $a = b$ by antisymmetry, contradicting whichever of the two hypotheses is strict; and $<$ is irreflexive, because $a < a$ would demand $a \ne a$ ([[def-nat-order]]); $a \le b \iff a + k \le b + k$ and $a < b \iff a + k < b + k$ ([[lem-nat-order-add-compatible]]); $a < b \iff \sigma(a) \le b$, so $a < \sigma(a)$ ([[lem-nat-discrete]]); and $a \le b$ means $a + c = b$ for some $c$ ([[def-nat-order]]), where moreover $a < b$ holds exactly when that $c$ is nonzero, since $c = 0$ gives $b = a$, while $c \ne 0$ with $a = b$ would give $c + a = a + c = a = 0 + a$ and hence $c = 0$ by additive cancellation ([[lem-nat-add-cancellative]], [[lem-nat-add-commutative]], [[lem-nat-add-identity]]).

[L5] Cancellation: $a \cdot k = b \cdot k$ with $k \ne 0$ gives $a = b$ ([[lem-nat-mult-cancellative]]); and $a \cdot b = 0$ forces $a = 0$ or $b = 0$ ([[lem-nat-no-zero-divisors]]).

[L6] Induction ([[thm-induction-principle]]) and strong induction ([[thm-strong-induction]]).

[L7] Bijections, injections, surjections, composition and inverses ([[def-injection-surjection-bijection]]); $A \approx B$ means a bijection $A \to B$ exists ([[def-equinumerous]]).

## Proof

**Proof technique:** direct.

1.1 Apply [L1] with $X = \mathbb{N}$, $x_0 = 1$ and $F(x) = x + x$: this defines $m \mapsto 2^m$ with $2^0 = 1$ and $2^{\sigma(m)} = 2^m + 2^m$ for all $m$. [L1, construct]

1.2 Every natural is even or odd: by induction, $0 = 0 + 0$ is even; and if $k = j + j$ is even then $\sigma(k) = \sigma(j + j)$ is odd, while if $k = \sigma(j + j)$ is odd then $\sigma(k) = \sigma(\sigma(j+j)) = \sigma(\sigma(j) + j) = \sigma(j) + \sigma(j)$ is even, using $\sigma(j) + j = \sigma(j + j)$ and $x + \sigma(y) = \sigma(x + y)$. [L3, L6, given]

1.3 No natural is both even and odd, that is $j + j \ne \sigma(i + i)$ for all $i, j$: if $j \le i$ then $j + j \le i + j = j + i \le i + i < \sigma(i + i)$; if $i < j$ then $\sigma(i) \le j$, so $\sigma(i+i) < \sigma(\sigma(i+i)) = \sigma(\sigma(i) + i) = \sigma(i) + \sigma(i) \le j + j$; in both cases the two sides differ by irreflexivity of $<$. [L3, L4, given]

1.4 $\sigma$ is a bijection from $\mathbb{N}$ onto $\mathbb{N} \setminus \{0\}$: it is injective by [L2], its values are nonzero by [L2], and every nonzero natural is a value of $\sigma$ by [L2]. [L2, L7]

2.1 $2^m \ne 0$ for every $m$: by induction, $2^0 = \sigma(0) \ne 0$; and if $2^m \ne 0$ then $2^m = \sigma(a)$ for some $a$ by [L2], so $2^{\sigma(m)} = 2^m + 2^m = 2^m + \sigma(a) = \sigma(2^m + a) \ne 0$. [step 1.1, L2, L6, given]

2.2 $2^{m + d} = 2^m \cdot 2^d$ for all $m, d$: by induction on $d$, at $d = 0$ both sides are $2^m$ since $m + 0 = m$ and $2^m \cdot 1 = 2^m$; and if $2^{m+d} = 2^m \cdot 2^d$ then $2^{m + \sigma(d)} = 2^{\sigma(m+d)} = 2^{m+d} + 2^{m+d} = 2^m 2^d + 2^m 2^d = 2^m (2^d + 2^d) = 2^m \cdot 2^{\sigma(d)}$. [step 1.1, L3, L6, given]

3.1 Define $J : \mathbb{N} \times \mathbb{N} \to \mathbb{N}$ by $J(m,n) = 2^m \cdot \sigma(n+n)$. Its values are nonzero: $2^m \ne 0$ by step 2.1 and $\sigma(n+n) \ne 0$ by [L2], so $J(m,n) \ne 0$ by [L5]. Thus $J$ maps into $\mathbb{N} \setminus \{0\}$. [step 1.1, step 2.1, L2, L5, construct]

4.1 $J$ is injective. Suppose $2^m \sigma(n+n) = 2^{m'} \sigma(n'+n')$; by [L4] we may assume $m \le m'$, the other case being symmetric, and write $m' = m + d$. By step 2.2 the right side is $2^m (2^d \sigma(n'+n'))$, so cancelling the nonzero factor $2^m$ with [L5] and [L3] gives $\sigma(n+n) = 2^d \cdot \sigma(n'+n')$. If $d \ne 0$ then $d = \sigma(e)$ by [L2] and $2^d = 2^e + 2^e$, so the right side equals $w + w$ with $w = 2^e \sigma(n'+n')$, by [L3]; that would make $\sigma(n+n)$ both odd and even, contradicting step 1.3. Hence $d = 0$ and $m' = m$, and then $\sigma(n+n) = \sigma(n'+n')$ gives $n + n = n' + n'$ by injectivity of $\sigma$, whence $n = n'$ because $n < n'$ would force $n + n < n' + n = n + n' < n' + n'$ by [L4] and [L3], and symmetrically for $n' < n$. [step 1.1, step 1.3, step 2.1, step 2.2, step 3.1, L2, L3, L4, L5]

4.2 $J$ is surjective onto $\mathbb{N} \setminus \{0\}$: by strong induction [L6] we show every $k$ is $0$ or a value of $J$. Let $k \ne 0$ and assume the claim for all $j < k$. By step 1.2, $k$ is odd or even. If $k = \sigma(j+j)$ then $k = 1 \cdot \sigma(j+j) = 2^0 \sigma(j+j) = J(0,j)$ by [L3]. If $k = j + j$ then $j \ne 0$, since $j = 0$ would give $k = 0$; also $j < j + j = k$ by [L4], because $j + j = k$ with $j \ne 0$; so the hypothesis at $j$ and $j \ne 0$ give $j = 2^m \sigma(n+n)$ for some $m, n$, and then $k = j + j = 2^m \sigma(n+n) + 2^m \sigma(n+n) = (2^m + 2^m) \sigma(n+n) = 2^{\sigma(m)} \sigma(n+n) = J(\sigma(m), n)$ by [L3] and step 1.1. [step 1.1, step 1.2, step 3.1, L3, L4, L6]

5.1 Therefore $J$ is a bijection from $\mathbb{N} \times \mathbb{N}$ onto $\mathbb{N} \setminus \{0\}$, and composing with the inverse of the bijection $\sigma$ of step 1.4 yields the bijection $\sigma^{-1} \circ J : \mathbb{N} \times \mathbb{N} \to \mathbb{N}$; hence $\mathbb{N} \times \mathbb{N} \approx \mathbb{N}$ and $\mathbb{N} \times \mathbb{N}$ is countably infinite. [step 1.4, step 4.1, step 4.2, L7] ∎

## Remarks

- Written out, $\sigma^{-1}(J(m,n)) = 2^m(2n+1) - 1$, the standard bijection. The detour through $\mathbb{N} \setminus \{0\}$ avoids subtraction, which the naturals do not have as a total operation.

- The proof is a proof of unique factorisation into a power of two times an odd number: step 4.2 is existence and step 4.1 is uniqueness. Nothing weaker would do, and no appeal to a picture of the diagonal enumeration is made anywhere. Nothing here uses any choice principle.

- The Cantor pairing polynomial $(m,n) \mapsto \tfrac{(m+n)(m+n+1)}{2} + n$ is an alternative bijection. It is not used because halving is not available in $\mathbb{N}$ without first developing division with remainder, whereas doubling, which is all $2^m$ needs, is immediate from addition.
````

### `thm-rationals-countable`

````markdown
---
id: thm-rationals-countable
kind: theorem
title: "$\\mathbb{Q}$ is countably infinite"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-n-cross-n-countable, thm-product-of-countable, def-rationals, lem-rat-positive-denominator, def-countable, lem-subset-of-countable, def-integers, lem-countable-iff-surjection-from-n, thm-schroder-bernstein, def-equinumerous, def-injection-surjection-bijection, lem-nat-embeds-int, lem-int-embeds-rat, def-int-order, thm-int-ordered-ring, thm-omega-is-peano-system, lem-nat-order-is-membership]
justified_by: []
aliases: []
landmark: true
short: "$\\mathbb{Q}\\approx\\mathbb{N}$"
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
    - title: "J. K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
    - title: "J. Lebl, Basic Analysis: Introduction to Real Analysis, basic set theory"
      url: "https://www.jirka.org/ra/html/sec_basicset.html"
    - title: "Countable set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Countable_set"
    - title: "Rational number (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Rational_number"
    - title: "T. Tao, Analysis I, 3rd ed., §8.1"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
pipeline_run: null
---

## Statement

$\mathbb{Q} \approx \mathbb{N}$ ([[def-equinumerous]]): the rationals are
countably infinite ([[def-countable]]).

**No choice principle is used.** The one place where a reader expects a choice,
"pick a representative $a/b$ of each rational", is exactly where
[[lem-rat-positive-denominator]] applies: every rational *has* a representative
with positive denominator, so the map $(a,b) \mapsto [(a,b)]$ defined on
$\mathbb{Z} \times \mathbb{Z}_{>0}$ is already **surjective** onto $\mathbb{Q}$,
and countability follows from a surjection without ever selecting a
representative. The same device handles $\mathbb{Z}$, which is a surjective image
of $\mathbb{N} \times \mathbb{N}$ by construction ([[def-integers]]).

## Facts & Assumptions

**Given:** $\mathbb{Z} = (\mathbb{N} \times \mathbb{N})/\sim$ with quotient map $(a,b) \mapsto [(a,b)]$ ([[def-integers]]), and $\mathbb{Q}$ the set of classes $[(a,b)]$ of pairs of integers with $b \ne 0$ ([[def-rationals]]). Write $\mathbb{Z}_{>0} = \{\, b \in \mathbb{Z} : b > 0 \,\}$ ([[def-int-order]]).

[L1] Finite, countably infinite, at most countable, uncountable ([[def-countable]]).

[L2] Bijections, injections, surjections, composition; $\approx$ and $\preceq$ ([[def-injection-surjection-bijection]], [[def-equinumerous]]).

[L3] A nonempty $X$ is at most countable iff there is a surjection $\mathbb{N} \to X$; and from such a surjection $s$ the map $x \mapsto \min\{\, k : s(k) = x \,\}$ is an injection $X \to \mathbb{N}$ ([[lem-countable-iff-surjection-from-n]]).

[L4] There is a bijection $\beta : \mathbb{N} \to \mathbb{N} \times \mathbb{N}$ ([[thm-n-cross-n-countable]]).

[L5] A product of two at most countable sets is at most countable ([[thm-product-of-countable]]); a subset of an at most countable set is at most countable ([[lem-subset-of-countable]]).

[L6] Every rational is $[(a,b)]$ for some integers $a$ and $b$ with $b > 0$ ([[lem-rat-positive-denominator]]).

[L7] $\mathbb{N}$ embeds injectively in $\mathbb{Z}$ by $n \mapsto [(n,0)]$ ([[lem-nat-embeds-int]]) and $\mathbb{Z}$ embeds injectively in $\mathbb{Q}$ by $k \mapsto [(k,1)]$ ([[lem-int-embeds-rat]]).

[L8] $\preceq$ in both directions gives $\approx$ ([[thm-schroder-bernstein]]).

[L9] The relation of [[def-int-order]] is a total order on $\mathbb{Z}$ compatible with the ring structure ([[thm-int-ordered-ring]]), and $\mathbb{Z}_{>0} \ne \varnothing$: on representatives $0 < [(a,b)]$ holds exactly when $b < a$ in $\mathbb{N}$ ([[def-int-order]]), and $0 < 1$ in $\mathbb{N}$, since $1 = \sigma(0) \ne 0$ ([[thm-omega-is-peano-system]]) while $0 < n$ for every nonzero natural $n$ (claim 4 of [[lem-nat-order-is-membership]]); so the integer $[(1,0)]$ is positive.

## Proof

**Proof technique:** direct.

1.1 The quotient map $\pi : \mathbb{N} \times \mathbb{N} \to \mathbb{Z}$, $\pi(a,b) = [(a,b)]$, is surjective, since every integer is by definition such a class; hence $\pi \circ \beta : \mathbb{N} \to \mathbb{Z}$ is a surjection, and $\mathbb{Z} \ne \varnothing$, so $\mathbb{Z}$ is at most countable by [L3]. [given, L2, L3, L4]

1.2 The composite $\iota : \mathbb{N} \to \mathbb{Q}$, $n \mapsto [([(n,0)],1)]$, of the two embeddings of [L7] is injective, so $\mathbb{N} \preceq \mathbb{Q}$. [L2, L7]

2.1 $\mathbb{Z}_{>0}$ is a subset of $\mathbb{Z}$, hence at most countable by [L5], and it is nonempty by [L9]; therefore $\mathbb{Z} \times \mathbb{Z}_{>0}$ is at most countable by [L5] and nonempty, so [L3] provides a surjection $u : \mathbb{N} \to \mathbb{Z} \times \mathbb{Z}_{>0}$. [step 1.1, L3, L5, L9]

3.1 The map $\rho : \mathbb{Z} \times \mathbb{Z}_{>0} \to \mathbb{Q}$, $\rho(a,b) = [(a,b)]$, is well defined because $b > 0$ gives $b \ne 0$, and it is surjective by [L6]; hence $\rho \circ u : \mathbb{N} \to \mathbb{Q}$ is a surjection, $\mathbb{Q}$ is at most countable, and [L3] turns that surjection into an injection $j : \mathbb{Q} \to \mathbb{N}$, so $\mathbb{Q} \preceq \mathbb{N}$. [step 2.1, given, L2, L3, L6]

4.1 From $\mathbb{N} \preceq \mathbb{Q}$ and $\mathbb{Q} \preceq \mathbb{N}$, the Schröder-Bernstein theorem [L8] yields a bijection $\mathbb{Q} \to \mathbb{N}$; hence $\mathbb{Q} \approx \mathbb{N}$ and $\mathbb{Q}$ is countably infinite. [step 1.2, step 3.1, L1, L8] ∎

## Remarks

- **Why Schröder-Bernstein rather than a count.** The usual last line is "countable, and infinite because $\mathbb{N}$ injects into it". Turning that into a proof requires knowing that a set containing an injective copy of $\mathbb{N}$ is not finite, which is the pigeonhole principle, [[lem-pigeonhole]], proved earlier on this page. That route is now available, but it is a detour: [[thm-schroder-bernstein]] gets the bijection directly from the two injections already in hand, and it is choice free, so nothing is lost.

- **Lowest terms are not needed and are not available.** A frequent presentation injects $\mathbb{Q}$ into $\mathbb{Z} \times \mathbb{N}$ by sending each rational to its representative in lowest terms. That map needs greatest common divisors, which this library has not developed. Working with a surjection instead of an injection avoids the issue entirely: repetitions in an enumeration are harmless ([[lem-countable-iff-surjection-from-n]]).

- The proof shows in passing that $\mathbb{Z} \approx \mathbb{N}$, by the same two-injection argument applied to [L7] and step 1.1, and that $\mathbb{Q} \times \mathbb{Q}$, $\mathbb{Q}^3$ and so on are countable ([[thm-product-of-countable]]). The contrast with [[thm-r-uncountable]] is the point of the page: adding all limits of rational approximations to $\mathbb{Q}$ changes the size of the set, not merely its arithmetic.
````

