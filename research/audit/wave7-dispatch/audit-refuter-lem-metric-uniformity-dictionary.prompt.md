# Audit proof-refuter brief — Wave 7, step A6

> **NO SHELL-PERMISSION PROMPTS (owner, 2026-07-30) — binding on every current
> and future agent.** Use commands already allowed inside the workspace sandbox;
> choose non-escalated forms and never ask the owner to approve a shell command.
> If an indispensable operation has no escalation-free form, report a blocker.

You are **DeepSeek V4 Pro** at the API's maximum reasoning setting, serving as a
read-only adversarial proof-refuter for the published-page audit. You are
tool-less: you cannot open a file, run a command, browse, edit, or delegate.
Everything you may rely on is reproduced in the `This dispatch` section. Return
evidence only; Audit-Alpha alone adjudicates and edits.

## Triage — the standing rule (verbatim, binding on you)

- **Non-negotiable:** mathematical accuracy, logical validity, correct
  citation.
- **Explicitly acceptable, spend no effort:** minor citational quirks; logical
  gaps a competent reader closes **within 30 seconds**; other non-fatal quirks;
  imperfection at the level of the letter.

## Adversarial standard

Read the target's title, Statement/Definition/Example/Statement refuted, Facts &
Assumptions, every numbered proof/refutation/verification step, and Remarks.
Try to falsify the public claim and every load-bearing inference.

1. Compare every cited fact with the supplied source text before alleging that
   it is weak. Check domain, quantifiers, hypotheses, direction, conclusion,
   and whether the source licenses the exact use.
2. Check that the title and public statement assert no more than the proof
   establishes, and that every proof step uses only available premises.
3. Check both directions of biconditionals, uniqueness/existence claims,
   induction and limiting arguments, empty/zero/endpoint/degenerate cases,
   extended-real conventions, index shifts, and hidden division or choice.
4. Re-read Remarks as skeptically as a numbered step. A false mathematical
   remark is a defect even when the proof is sound.
5. When the target is marked `ai-generated`, actively search for a
   counterexample to its claim, witness, or refutation rather than merely
   checking prose consistency.
6. Treat a false public claim, logically invalid proof, missing necessary
   hypothesis, circularity, or materially inaccurate load-bearing citation as
   fatal. Do not inflate an expository omission or a gap closable within thirty
   seconds into a defect.

## Output format

Reply with exactly this structure and no preamble:

```text
VERDICT: CLEAN | DEFECTS
```

If `DEFECTS`, give one block per finding:

```text
FINDING 1
  location: [exact title, section, fact label, or numbered step]
  severity: fatal | nonfatal
  claim:    [the exact mathematical assertion]
  evidence: [counterexample, missing hypothesis, invalid inference, or exact source mismatch]
```

Then always end with:

```text
BOUNDARY: [specific boundary/counterexample checks and their disposition]
SOURCES:  [confirm every supplied cited item used by the target was inspected]
CHECKED:  [confirm the title, public claim, every numbered step, and Remarks were read]
```


---

# This dispatch

## Selection reasons

- high risk (7): 9 declared dependencies; 6 cited facts; boundary-sensitive language

## Target item — `lem-metric-uniformity-dictionary`

Normalized current SHA-256: `2c707df83ce57c5117f8d52649511f41f6ed0b20fecf7077edefc8c4ebc6ac4c`

The complete current item follows, including frontmatter:

````markdown
---
id: lem-metric-uniformity-dictionary
kind: lemma
title: "A metric on a nonempty set generates an entourage uniformity whose induced topology and uniformly continuous maps are the usual metric notions, and this uniformity is separated"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-uniform-space-by-entourages, thm-uniformity-induces-a-topology, def-separated-uniform-space, def-uniformly-continuous-map, def-metric-space, def-metric-topology, def-metric-uniform-continuity, def-filter-base, lem-filter-base-generates]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references: [{title: "J. Wodzicki, Uniform Structure", url: "https://math.berkeley.edu/~wodzicki/H104.F13/UniformStructure-alt.pdf"}, {title: "M. Megrelishvili, Lecture Notes in Topological Groups", url: "https://u.math.biu.ac.il/~megereli/TGrNotes070217.pdf"}]
pipeline_run: null
---

## Statement

For a metric space $(X,d)$ with $X\ne\varnothing$, the sets $E_\varepsilon=\{(x,y):d(x,y)<\varepsilon\}$, $\varepsilon>0$, generate a separated uniformity. Its induced topology is the metric topology, and uniform continuity to another metric uniformity is exactly metric uniform continuity.

## Facts & Assumptions

**Given:** Metric spaces $(X,d)$ and $(Y,\rho)$ with $X\ne\varnothing$ and $Y\ne\varnothing$.

[L1] A metric has symmetry and the triangle inequality, and a pseudometric is a metric exactly when zero distance separates points ([[def-metric-space]]).

[L2] Metric-open sets are those containing a positive-radius ball about each point ([[def-metric-topology]]).

[L3] Metric uniform continuity means: for every $\varepsilon>0$ there is $\delta>0$ such that $d(x,x')<\delta$ implies $\rho(f(x),f(x'))<\varepsilon$ ([[def-metric-uniform-continuity]]).

[L4] A nonempty proper downward-directed family is a filter base, whose upward closure is the least filter containing it ([[def-filter-base]], [[lem-filter-base-generates]]).

[L5] In an entourage uniformity, entourage balls form a neighbourhood base for the induced topology ([[thm-uniformity-induces-a-topology]]).

## Proof

**Proof technique:** direct.

1.1 The diagonal lies in every $E_\varepsilon$, inverses agree with $E_\varepsilon$ by symmetry, intersections contain $E_{\min(\varepsilon,\delta)}$, and $E_{\varepsilon/2}\circ E_{\varepsilon/2}\subseteq E_\varepsilon$ by the triangle inequality. [L1]

2.1 The family $(E_\varepsilon)_{\varepsilon>0}$ is nonempty, none of its members is empty because $X\ne\varnothing$, and it is downward directed by step 1.1, so [L4] makes its upward closure a filter. The diagonal, inverse, and square-root properties in step 1.1 then make it a uniformity. Its $E_\varepsilon[x]$ are precisely metric balls, so its induced topology is the metric topology by [L2] and [L5]. [step 1.1, L2, L4, L5]

2.2 The intersection of all $E_\varepsilon$ is the diagonal, since $d(x,y)>0$ for $x\ne y$ and $E_{d(x,y)/2}$ excludes $(x,y)$; hence the uniformity is separated. [L1, step 1.1]

3.1 The defining entourage implication for $E_\delta$ and $E_\varepsilon$ is exactly the quantified condition of [L3], which proves the final equivalence. [L3] ∎
````

## Wave 7 provenance row for the target

```json
{
  "id": "lem-metric-uniformity-dictionary",
  "statement": "ai-altered",
  "proof": "ai-altered",
  "evidence": "semantic-source",
  "urls": [
    "https://math.berkeley.edu/~wodzicki/H104.F13/UniformStructure-alt.pdf",
    "https://u.math.biu.ac.il/~megereli/TGrNotes070217.pdf"
  ],
  "rationale": "The sources give the metric entourages, induced metric topology, separation, and epsilon-delta interpretation. The item packages these clauses. Unlike the source convention, the library permits an empty metric carrier while requiring filters proper; this creates the empty-carrier defect escalated in A3.",
  "alpha_concurred": false,
  "at": "2026-08-08",
  "ledger": "wave7-topology-uniform.provenance.jsonl"
}
```

## Proof contract for the target

```json
{
  "citations": [
    {
      "fact": "L1",
      "source": "def-metric-space",
      "source_section": "Definition",
      "quote": "of (M1). A pseudometric may therefore assign distance $0$ to two distinct\npoints. Every metric is a pseudometric, and a pseudometric is a metric exactly\nwhen $p(x,y) = 0$ forces $x = y$.",
      "uses": [
        "1.1",
        "2.2"
      ]
    },
    {
      "fact": "L2",
      "source": "def-metric-topology",
      "source_section": "Definition",
      "quote": "**A neighbourhood of a point $x$** is any open set containing $x$. The condition\nabove therefore reads: $U$ is open exactly when every point of $U$ has a ball\naround it inside $U$, and it is the balls alone that have to be tested.",
      "uses": [
        "2.1"
      ]
    },
    {
      "fact": "L3",
      "source": "def-metric-uniform-continuity",
      "source_section": "Definition",
      "quote": "**The whole content is in the quantifier order.** Continuity at a point $a$\nallows $\\delta$ to depend on $\\varepsilon$ *and on $a$*\n([[def-metric-continuity]]); uniform continuity demands one $\\delta$ that works\nfor every pair of points at once. Written with the quantifiers in order,\ncontinuity on $X$ is\n$\\forall \\varepsilon\\, \\forall a\\, \\exists \\delta\\, \\forall x$ and uniform\ncontinuity is $\\forall \\varepsilon\\, \\exists \\delta\\, \\forall a\\, \\forall x$;\nmoving $\\exists \\delta$ to the left is the entire difference, and it is a\nstrictly stronger condition.",
      "uses": [
        "3.1"
      ]
    },
    {
      "fact": "L4",
      "source": "def-filter-base",
      "source_section": "Definition",
      "quote": "This is a filter on $X$ ([[def-filter]]), indeed the smallest filter on $X$\ncontaining $\\mathcal{B}$, by [[lem-filter-base-generates]]; it is called the\n**filter generated by $\\mathcal{B}$**, and $\\mathcal{B}$ is called a **base** of\nit. The definite article is licensed by that lemma and by nothing else: the\nnotation $\\langle \\mathcal{B} \\rangle$ is used only for a family already known to\nbe a filter base.",
      "uses": [
        "2.1"
      ]
    },
    {
      "fact": "L4",
      "source": "lem-filter-base-generates",
      "source_section": "Statement",
      "quote": "Let $X$ be a set and let $\\mathcal{B}$ be a filter base on $X$\n([[def-filter-base]]), with upward closure",
      "uses": [
        "2.1"
      ]
    },
    {
      "fact": "L5",
      "source": "thm-uniformity-induces-a-topology",
      "source_section": "Statement",
      "quote": "For a uniformity $\\mathcal U$ on $X$, call $O\\subseteq X$ open when every $x\\in O$ has an entourage $E$ with $E[x]\\subseteq O$. These open sets form a topology on $X$. Its neighbourhood filter at $x$ has $\\{E[x]:E\\in\\mathcal U\\}$ as a base.",
      "uses": [
        "2.1"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1.1",
      "claim": "The diagonal lies in every $E_\\varepsilon$, inverses agree with $E_\\varepsilon$ by symmetry, intersections contain $E_{\\min(\\varepsilon,\\delta)}$, and $E_{\\varepsilon/2}\\circ E_{\\varepsilon/2}\\subseteq E_\\varepsilon$ by the triangle inequality. [L1]",
      "step": "1.1",
      "inputs": [
        "L1"
      ]
    },
    {
      "id": "step-2.1",
      "claim": "The family $(E_\\varepsilon)_{\\varepsilon>0}$ is nonempty, none of its members is empty because $X\\ne\\varnothing$, and it is downward directed by step 1.1, so [L4] makes its upward closure a filter. The diagonal, inverse, and square-root properties in step 1.1 then make it a uniformity. Its $E_\\varepsilon[x]$ are precisely metric balls, so its induced topology is the metric topology by [L2] and [L5]. [step 1.1, L2, L4, L5]",
      "step": "2.1",
      "inputs": [
        "1.1",
        "L4",
        "L2",
        "L5"
      ]
    },
    {
      "id": "step-2.2",
      "claim": "The intersection of all $E_\\varepsilon$ is the diagonal, since $d(x,y)>0$ for $x\\ne y$ and $E_{d(x,y)/2}$ excludes $(x,y)$; hence the uniformity is separated. [L1, step 1.1]",
      "step": "2.2",
      "inputs": [
        "L1",
        "1.1"
      ]
    },
    {
      "id": "step-3.1",
      "claim": "The defining entourage implication for $E_\\delta$ and $E_\\varepsilon$ is exactly the quantified condition of [L3], which proves the final equivalence. [L3] ∎",
      "step": "3.1",
      "inputs": [
        "L3"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "checked",
      "evidence": "statement: the repaired hypothesis requires a nonempty carrier, so the empty case is excluded"
    },
    {
      "case": "zero",
      "status": "checked",
      "evidence": "statement and step 1.1: zero distance, zero index, or the base-value case was inspected under the displayed inequalities and definitions"
    },
    {
      "case": "one",
      "status": "checked",
      "evidence": "statement and step 1.1: the singleton, identity, finite-one, or unit-scale case was inspected"
    },
    {
      "case": "degenerate",
      "status": "checked",
      "evidence": "statement and step 1.1: the diagonal, coincident-point, constant, minimal, or equality degeneration was checked"
    },
    {
      "case": "endpoints",
      "status": "checked",
      "evidence": "statement and step 1.1: strict entourage bounds, interval endpoints, and limiting boundary behavior were checked"
    },
    {
      "case": "nonempty-choice",
      "status": "checked",
      "evidence": "statement and step 1.1: every selection was checked for a stated nonempty source, a canonical definition, or the expressly assumed choice principle"
    },
    {
      "case": "iff-forward",
      "status": "not_applicable",
      "reason": "The statement is not a biconditional and has no forward iff direction."
    },
    {
      "case": "iff-reverse",
      "status": "not_applicable",
      "reason": "The statement is not a biconditional and has no reverse iff direction."
    }
  ],
  "finite_smoke": []
}
```

## Generated audit-manifest relationships for the target

```json
[
  {
    "source": "lem-metric-uniformity-dictionary",
    "sourcePage": "uniform-spaces",
    "batch": "wave7-topology-uniform",
    "target": "def-uniform-space-by-entourages",
    "declared_target": "def-uniform-space-by-entourages",
    "target_statement_provenance": "literature-derived",
    "targetPage": "uniform-spaces",
    "targetBatch": "wave7-topology-uniform",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-metric-uniformity-dictionary",
    "sourcePage": "uniform-spaces",
    "batch": "wave7-topology-uniform",
    "target": "thm-uniformity-induces-a-topology",
    "declared_target": "thm-uniformity-induces-a-topology",
    "target_statement_provenance": "literature-derived",
    "targetPage": "uniform-spaces",
    "targetBatch": "wave7-topology-uniform",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-metric-uniformity-dictionary",
    "sourcePage": "uniform-spaces",
    "batch": "wave7-topology-uniform",
    "target": "def-separated-uniform-space",
    "declared_target": "def-separated-uniform-space",
    "target_statement_provenance": "literature-derived",
    "targetPage": "uniform-spaces",
    "targetBatch": "wave7-topology-uniform",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-metric-uniformity-dictionary",
    "sourcePage": "uniform-spaces",
    "batch": "wave7-topology-uniform",
    "target": "def-uniformly-continuous-map",
    "declared_target": "def-uniformly-continuous-map",
    "target_statement_provenance": "literature-derived",
    "targetPage": "uniform-spaces",
    "targetBatch": "wave7-topology-uniform",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-metric-uniformity-dictionary",
    "sourcePage": "uniform-spaces",
    "batch": "wave7-topology-uniform",
    "target": "def-metric-space",
    "declared_target": "def-metric-space",
    "target_statement_provenance": "ai-altered",
    "targetPage": "metric-spaces",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-metric-uniformity-dictionary",
    "sourcePage": "uniform-spaces",
    "batch": "wave7-topology-uniform",
    "target": "def-metric-topology",
    "declared_target": "def-metric-topology",
    "target_statement_provenance": "literature-derived",
    "targetPage": "metric-spaces",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-metric-uniformity-dictionary",
    "sourcePage": "uniform-spaces",
    "batch": "wave7-topology-uniform",
    "target": "def-metric-uniform-continuity",
    "declared_target": "def-metric-uniform-continuity",
    "target_statement_provenance": "ai-altered",
    "targetPage": "completeness-and-uniform-continuity",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-metric-uniformity-dictionary",
    "sourcePage": "uniform-spaces",
    "batch": "wave7-topology-uniform",
    "target": "def-filter-base",
    "declared_target": "def-filter-base",
    "target_statement_provenance": "ai-altered",
    "targetPage": "filters-and-ultrafilters",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-metric-uniformity-dictionary",
    "sourcePage": "uniform-spaces",
    "batch": "wave7-topology-uniform",
    "target": "lem-filter-base-generates",
    "declared_target": "lem-filter-base-generates",
    "target_statement_provenance": "ai-altered",
    "targetPage": "filters-and-ultrafilters",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  }
]
```

## Relevant pending generated-risk rows

```json
[]
```

## Full text of every cited or declared item (9)

### `def-filter-base`

````markdown
---
id: def-filter-base
kind: definition
title: "Filter base and the filter it generates"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-filter]
justified_by: [lem-filter-base-generates]
aliases: [def-filter-basis]
landmark: false
short: "filter base"
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
    date: 2026-07-26
sources:
  scraped: []
  references:
    - title: "Filter (set theory) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Filter_(set_theory)"
    - title: "N. Bourbaki, General Topology: Chapters 1-4, Ch. I §6"
      url: "https://link.springer.com/book/9783540642411"
    - title: "N. Strickland, Notes on Ultrafilters"
      url: "https://faculty.ksu.edu.sa/sites/default/files/ultra.pdf"
pipeline_run: null
---

## Definition

Let $X$ be a set. A family $\mathcal{B} \subseteq \mathcal{P}(X)$ is a
**filter base on $X$** when it satisfies:

- **(B1)** *nonemptiness*: $\mathcal{B} \neq \emptyset$;
- **(B2)** *properness*: $\emptyset \notin \mathcal{B}$;
- **(B3)** *downward directedness*: for all $B_1, B_2 \in \mathcal{B}$ there is
  $B_3 \in \mathcal{B}$ with $B_3 \subseteq B_1 \cap B_2$.

The **upward closure** of $\mathcal{B}$ in $X$ is

$$\langle \mathcal{B} \rangle := \{\, A \subseteq X \;:\; B \subseteq A \text{ for some } B \in \mathcal{B} \,\}.$$

This is a filter on $X$ ([[def-filter]]), indeed the smallest filter on $X$
containing $\mathcal{B}$, by [[lem-filter-base-generates]]; it is called the
**filter generated by $\mathcal{B}$**, and $\mathcal{B}$ is called a **base** of
it. The definite article is licensed by that lemma and by nothing else: the
notation $\langle \mathcal{B} \rangle$ is used only for a family already known to
be a filter base.

## Remarks

- **(B3) does not ask that $B_1 \cap B_2$ itself belong to $\mathcal{B}$**, only
  that some member of $\mathcal{B}$ sit inside it. That is what makes a base
  usable: a family described by a shape, for instance the open discs of the plane
  that contain the origin, is generally not closed under intersection, since the
  intersection of two such discs is not a disc, yet it always contains a smaller
  such disc. Families that *are* closed under pairwise intersection, such as the
  tails $\{n \in \mathbb{N} : N \leq n\}$ of $\mathbb{N}$, are the special case
  $B_3 = B_1 \cap B_2$ of (B3).
- **Every filter is a filter base, and it generates itself.** A filter satisfies
  (B1) because it contains $X$, satisfies (B2) by (F2), and satisfies (B3) with
  $B_3 = B_1 \cap B_2$ by (F3). Both halves are proved in
  [[lem-filter-base-generates]], so "base" is a way of presenting a filter, never
  a different kind of object.
- **When a subfamily is a base for the filter it sits in.** If $\mathcal{B} \subseteq \mathcal{F}$ and every
  member of $\mathcal{F}$ contains a member of $\mathcal{B}$, then $\mathcal{B}$
  is a filter base and $\langle \mathcal{B} \rangle = \mathcal{F}$: (B1) holds
  because $X \in \mathcal{F}$ contains some member of $\mathcal{B}$, (B2) because
  $\mathcal{B} \subseteq \mathcal{F}$, and (B3) because $B_1 \cap B_2 \in
  \mathcal{F}$ contains some member of $\mathcal{B}$. So a base is a
  presentation, not an invariant. What is determined is the generated filter,
  which is why every statement below is about $\langle \mathcal{B} \rangle$ and
  never about $\mathcal{B}$ itself. The criterion is sufficient, and it is not a
  claim that a filter has *many* bases: any base of $\mathcal{F}$ is a subfamily
  of it, so the filter $\{X\}$ on $X$ has exactly one base, namely $\{X\}$.
- (B2) is exactly the properness of the generated filter, and it is not
  automatic: dropping it would allow $\emptyset \in \mathcal{B}$ and then
  $\langle \mathcal{B} \rangle = \mathcal{P}(X)$, the improper filter excluded by
  the convention recorded in [[def-filter]].
````

### `def-metric-space`

````markdown
---
id: def-metric-space
kind: definition
title: "Metric space: $d(x,y) = 0$ iff $x = y$, symmetry, and the triangle inequality; pseudometric and ultrametric"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-real-numbers, def-real-order, def-complete-ordered-field, def-ordered-field,
       def-max-min, lem-finite-set-has-max]
justified_by: []
aliases: [def-metric, def-pseudometric, def-ultrametric]
landmark: true
short: "metric space $(X,d)$"
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
    - title: "Metric space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Metric_space"
    - title: "Ultrametric space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Ultrametric_space"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "T. Tao, Analysis II, 3rd ed., Ch. 1"
      url: "https://terrytao.wordpress.com/books/analysis-ii/"
    - title: "Pseudometric space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Pseudometric_space"
    - title: "R. Gardner, Introduction to Topology, notes on Munkres Section 20: The Metric Topology (East Tennessee State University)"
      url: "https://faculty.etsu.edu/gardnerr/5357/notes/Munkres-20.pdf"
pipeline_run: null
---

## Definition

Throughout, $\mathbb{R}$ is the complete ordered field
([[def-complete-ordered-field]], [[def-ordered-field]]) constructed in this
library ([[def-real-numbers]]) and carrying its order ([[def-real-order]]).

Let $X$ be a set. A **metric** on $X$ is a function
$d : X \times X \to \mathbb{R}$ such that for all $x, y, z \in X$:

- **(M1) Separation.** $d(x,y) = 0$ if and only if $x = y$.
- **(M2) Symmetry.** $d(x,y) = d(y,x)$.
- **(M3) Triangle inequality.** $d(x,z) \le d(x,y) + d(y,z)$.

A **metric space** is a pair $(X,d)$ consisting of a set $X$ and a metric $d$ on
it. The elements of $X$ are its **points** and $d(x,y)$ is the **distance** from
$x$ to $y$. When only one metric is in play we write $X$ for $(X,d)$; when
several are, the metric is always named.

**The values of a metric are real numbers.** The codomain is $\mathbb{R}$, so
$d(x,y)$ is an honest element of the complete ordered field and every
inequality above is an inequality there. No infinite value is permitted;
[[rem-metric-axiom-conventions]] records why extended metrics are not treated in
this library.

**Nonnegativity is deliberately absent from the axiom list.** Many texts add a
fourth axiom $d(x,y) \ge 0$. It is redundant: (M1), (M2) and (M3) already force
it, as [[lem-metric-nonnegativity]] proves. Nothing below assumes it before that
lemma is available.

**Pseudometric.** A **pseudometric** on $X$ is a function
$p : X \times X \to \mathbb{R}$ satisfying (M2), (M3) and the weakening

- **(M1') Reflexivity.** $p(x,x) = 0$ for every $x \in X$

of (M1). A pseudometric may therefore assign distance $0$ to two distinct
points. Every metric is a pseudometric, and a pseudometric is a metric exactly
when $p(x,y) = 0$ forces $x = y$.

**Ultrametric.** An **ultrametric** on $X$ is a metric $d$ that in addition
satisfies

- **(M3') Strong triangle inequality.** $d(x,z) \le \max\{d(x,y), d(y,z)\}$

for all $x, y, z \in X$, where the maximum is that of a two-element subset of
$\mathbb{R}$, which exists and is one of the two elements
([[def-max-min]], [[lem-finite-set-has-max]]). An **ultrametric space** is a pair
$(X,d)$ with $d$ an ultrametric.

## Remarks

- **(M3') is a genuine strengthening of (M3), not an independent axiom on top of
  it.** A function satisfying (M1), (M2) and (M3') automatically satisfies (M3):
  by [[lem-metric-nonnegativity]] such a function is nonnegative, and for
  nonnegative reals $a, b$ one has $\max\{a,b\} \le a + b$, since the maximum is
  one of $a, b$ and the other summand is $\ge 0$. So "a metric satisfying (M3')"
  and "a function satisfying (M1), (M2), (M3')" describe the same objects, and
  the definition above may be read either way.

- **Why the biconditional form of (M1).** Splitting (M1) into "$d(x,x) = 0$" and
  "$d(x,y) = 0 \Rightarrow x = y$" gives the same notion; the split form is what
  makes the pseudometric weakening above a matter of deleting one clause. The
  naming fork between *pseudometric* and *semimetric*, which is live in the
  literature, is settled for this library in
  [[rem-metric-axiom-conventions]].

- **The metric is part of the data.** Two different metrics on the same set are
  two different metric spaces, even when they have the same open sets. That is
  why [[def-equivalent-metrics]] compares metrics at three separate strengths
  rather than one, and why a property can be invariant under one of them and not
  under another ([[fs-boundedness-is-a-topological-property]]).
````

### `def-metric-topology`

````markdown
---
id: def-metric-topology
kind: definition
title: "The metric topology: a set is open when every one of its points has a ball around it inside the set; closed means open complement"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-metric-ball, def-metric-space]
justified_by: []
aliases: [def-open-set-metric, def-closed-set-metric]
landmark: true
short: "metric topology"
verification:
  precheck: n/a
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-08-02
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Open set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Open_set"
    - title: "Metric space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Metric_space"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "R. Gardner, Introduction to Topology, notes on Munkres Section 20: The Metric Topology (East Tennessee State University)"
      url: "https://faculty.etsu.edu/gardnerr/5357/notes/Munkres-20.pdf"
pipeline_run: null
---

## Definition

Let $(X,d)$ be a metric space ([[def-metric-space]]).

A subset $U \subseteq X$ is **open in $(X,d)$** if for every $x \in U$ there is a
real $r > 0$ with $B(x,r) \subseteq U$ ([[def-metric-ball]]). A subset
$F \subseteq X$ is **closed in $(X,d)$** if its complement $X \setminus F$ is
open.

The collection

$$\mathcal{T}_d := \{\, U \subseteq X : U \text{ is open in } (X,d) \,\}$$

of all open subsets is the **metric topology** of $d$ on $X$. A subset of $X$
that is both open and closed is called **clopen**.

**Two sets are open for trivial reasons.** $\emptyset$ is open, because the
defining condition quantifies over no points; and $X$ is open, because
$B(x,r) \subseteq X$ for every $x$ and every $r > 0$. Consequently $X$ and
$\emptyset$ are also closed, and both are clopen.

**A neighbourhood of a point $x$** is any open set containing $x$. The condition
above therefore reads: $U$ is open exactly when every point of $U$ has a ball
around it inside $U$, and it is the balls alone that have to be tested.

**The metric, not the set, determines $\mathcal{T}_d$.** Two metrics on the same
set may have different metric topologies, and two different metrics may have the
same one; the systematic comparison is [[def-equivalent-metrics]].

## Remarks

- **What "topology" means here.** $\mathcal{T}_d$ is defined above as a
  collection of subsets of $X$; the abstract notion of a topological space, a
  collection of subsets closed under arbitrary unions and finite intersections
  taken as primitive data, is introduced on a later page and is not used
  here. What is proved
  here is that $\mathcal{T}_d$ has exactly those closure properties
  ([[thm-metric-open-set-algebra]]), which is what licenses the word.
- **Open and closed are not opposites.** A set may be neither ($[0,1)$ inside
  $\mathbb{R}$, once the usual metric is available from
  [[lem-real-line-is-a-metric-space]]) or both ($\emptyset$ and $X$ always, and
  in some spaces every subset at once, as the discrete metric on the companion
  page shows). "Not open" is never a synonym for "closed".
- **Closedness is complementation, and nothing else, at this stage.** The
  description of closed sets by limits of sequences, and the description of the
  closure as an infimum of distances, are theorems proved later on this page
  ([[thm-metric-closure-characterisation]], [[thm-metric-sequential-closure]]),
  not part of the definition.
````

### `def-metric-uniform-continuity`

````markdown
---
id: def-metric-uniform-continuity
kind: definition
title: "Uniform continuity of a map of metric spaces: one $\\delta$ serving every point"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-metric-continuity, def-metric-space, def-equivalent-metrics,
       def-metric-ball]
justified_by: []
forward_refs: [cex-continuous-map-destroying-cauchyness]
aliases: []
landmark: true
short: "uniform continuity"
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
    - title: "Uniform continuity (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Uniform_continuity"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 4"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Definition

Let $(X,d_X)$ and $(Y,d_Y)$ be metric spaces ([[def-metric-space]]) and let
$f : X \to Y$ be a function.

$f$ is **uniformly continuous** if for every real $\varepsilon > 0$ there is a
real $\delta > 0$ such that

$$d_X(x,x') < \delta \;\Longrightarrow\; d_Y\big(f(x), f(x')\big) < \varepsilon \qquad \text{for all } x, x' \in X .$$

**The whole content is in the quantifier order.** Continuity at a point $a$
allows $\delta$ to depend on $\varepsilon$ *and on $a$*
([[def-metric-continuity]]); uniform continuity demands one $\delta$ that works
for every pair of points at once. Written with the quantifiers in order,
continuity on $X$ is
$\forall \varepsilon\, \forall a\, \exists \delta\, \forall x$ and uniform
continuity is $\forall \varepsilon\, \exists \delta\, \forall a\, \forall x$;
moving $\exists \delta$ to the left is the entire difference, and it is a
strictly stronger condition.

**Uniform continuity is a property of the triple $(d_X, d_Y, f)$.** Both metrics
are named, and neither may be replaced by a merely topologically equivalent one
without changing the notion.

**This definition was promised earlier and is now discharged.**
[[def-metric-continuity]] records that uniform continuity is not defined there,
and [[def-equivalent-metrics]] writes the condition out in full for the identity
maps of two metrics on one set rather than naming it. With the definition above,
*uniform equivalence* of $d$ and $d'$ says exactly that
$\mathrm{id} : (X,d) \to (X,d')$ and $\mathrm{id} : (X,d') \to (X,d)$ are both
uniformly continuous, which is how that condition is read from here on.

## Remarks

- **Uniform continuity implies continuity, and the converse fails.** The
  implication is immediate, since a $\delta$ serving every point serves each
  point; it is recorded with the rest of the hierarchy in
  [[thm-metric-regularity-hierarchy]]. The failure of the converse is witnessed
  by $x \mapsto 1/x$ on $(0,1)$
  ([[cex-continuous-map-destroying-cauchyness]]).
- **The condition is symmetric in $x$ and $x'$** and says nothing about a
  distinguished point, which is why it is stated with two free variables and no
  base point. In ball language it reads: for every $\varepsilon > 0$ there is
  $\delta > 0$ with $f[B_X(x,\delta)] \subseteq B_Y(f(x),\varepsilon)$ for
  **every** $x \in X$ simultaneously ([[def-metric-ball]]).
- **What uniform continuity buys.** It transports Cauchy sequences
  ([[thm-uniform-continuity-preserves-cauchy]]), which ordinary continuity does
  not, and that single property is what makes extension from a dense subspace
  possible ([[thm-uniformly-continuous-extension-from-dense]]) and what makes
  completion functorial enough to be unique
  ([[thm-metric-completion-unique]]).
````

### `def-separated-uniform-space`

````markdown
---
id: def-separated-uniform-space
kind: definition
title: "Separated uniformity: the intersection of all entourages is the diagonal"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-uniform-space-by-entourages, def-the-diagonal-of-a-space]
aliases: []
landmark: true
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-31
  audited: 2026-07-31
sources:
  scraped: []
  references: [{title: "J. Wodzicki, Uniform Structure", url: "https://math.berkeley.edu/~wodzicki/H104.F13/UniformStructure-alt.pdf"}, {title: "Encyclopedia of Mathematics, Uniform space", url: "https://encyclopediaofmath.org/wiki/Uniform_space"}]
pipeline_run: null
---

## Definition

A uniformity $\mathcal U$ on $X$ is **separated** when $\bigcap_{E\in\mathcal U}E=\Delta_X$ ([[def-the-diagonal-of-a-space]]). Equivalently, whenever $x\ne y$, some entourage $E$ satisfies $(x,y)\notin E$. Separation is a property of the uniformity, not an additional convention in the meaning of uniform space.
````

### `def-uniform-space-by-entourages`

````markdown
---
id: def-uniform-space-by-entourages
kind: definition
title: "Uniform space in the entourage formulation"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-filter, def-the-diagonal-of-a-space]
aliases: []
landmark: true
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-31
  audited: 2026-07-31
sources:
  scraped: []
  references: [{title: "J. Wodzicki, Uniform Structure", url: "https://math.berkeley.edu/~wodzicki/H104.F13/UniformStructure-alt.pdf"}, {title: "Encyclopedia of Mathematics, Uniform space", url: "https://encyclopediaofmath.org/wiki/Uniform_space"}]
pipeline_run: null
---

## Definition

Let $X$ be a set and write $\Delta_X=\{(x,x):x\in X\}$ for its diagonal ([[def-the-diagonal-of-a-space]]). For $E\subseteq X\times X$, put $E[x]:=\{y\in X:(x,y)\in E\}$, $E^{-1}:=\{(y,x):(x,y)\in E\}$, and $E\circ F:=\{(x,z):\text{some }y\text{ has }(x,y)\in E,(y,z)\in F\}$.

A **uniformity** on $X$ is a filter $\mathcal U$ on $X\times X$ ([[def-filter]]) such that:

- every $E\in\mathcal U$ contains $\Delta_X$;
- $E\in\mathcal U$ implies $E^{-1}\in\mathcal U$;
- for every $E\in\mathcal U$ there is $D\in\mathcal U$ with $D\circ D\subseteq E$.

Its members are **entourages**. A **uniform space** is a set equipped with a uniformity. The induced topology and its neighbourhoods are constructed in [[thm-uniformity-induces-a-topology]].
````

### `def-uniformly-continuous-map`

````markdown
---
id: def-uniformly-continuous-map
kind: definition
title: "Uniformly continuous map between uniform spaces"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-uniform-space-by-entourages]
aliases: []
landmark: true
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-31
  audited: 2026-07-31
sources:
  scraped: []
  references: [{title: "J. Wodzicki, Uniform Structure", url: "https://math.berkeley.edu/~wodzicki/H104.F13/UniformStructure-alt.pdf"}, {title: "M. Megrelishvili, Lecture Notes in Topological Groups", url: "https://u.math.biu.ac.il/~megereli/TGrNotes070217.pdf"}]
pipeline_run: null
---

## Definition

For uniform spaces $(X,\mathcal U_X)$ and $(Y,\mathcal U_Y)$, a map $f:X\to Y$ is **uniformly continuous** if for every $V\in\mathcal U_Y$ there is $U\in\mathcal U_X$ such that $(x,x')\in U$ implies $(f(x),f(x'))\in V$. The controlling entourage $U$ is independent of the point $x$.
````

### `lem-filter-base-generates`

````markdown
---
id: lem-filter-base-generates
kind: lemma
title: "The upward closure of a filter base is the smallest filter containing it"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-filter-base, def-filter]
justified_by: []
aliases: []
landmark: false
short: "$\\langle\\mathcal{B}\\rangle$ is the smallest filter $\\supseteq\\mathcal{B}$"
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
    model: openai/gpt-5.4
    verdict: pass
    date: 2026-07-25
sources:
  scraped: []
  references:
    - title: "Filter (set theory) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Filter_(set_theory)"
    - title: "N. Bourbaki, General Topology: Chapters 1-4, Ch. I §6"
      url: "https://link.springer.com/book/9783540642411"
    - title: "N. Strickland, Notes on Ultrafilters"
      url: "https://faculty.ksu.edu.sa/sites/default/files/ultra.pdf"
    - title: "B. Kaya, Ultrafilters and How to Use Them"
      url: "https://users.metu.edu.tr/burakk/lecturenotes/village2019lecturenotes.pdf"
pipeline_run: null
---

## Statement

Let $X$ be a set and let $\mathcal{B}$ be a filter base on $X$
([[def-filter-base]]), with upward closure

$$\langle \mathcal{B} \rangle = \{\, A \subseteq X \;:\; B \subseteq A \text{ for some } B \in \mathcal{B} \,\}.$$

Then:

1. $\langle \mathcal{B} \rangle$ is a filter on $X$ ([[def-filter]]);
2. $\mathcal{B} \subseteq \langle \mathcal{B} \rangle$, and
   $\langle \mathcal{B} \rangle \subseteq \mathcal{F}$ for every filter
   $\mathcal{F}$ on $X$ with $\mathcal{B} \subseteq \mathcal{F}$, so
   $\langle \mathcal{B} \rangle$ is the smallest filter on $X$ containing
   $\mathcal{B}$;
3. every filter $\mathcal{F}$ on $X$ is itself a filter base, and it generates
   itself: $\langle \mathcal{F} \rangle = \mathcal{F}$.

## Facts & Assumptions

**Given:** A set $X$, a filter base $\mathcal{B} \subseteq \mathcal{P}(X)$, and $\langle \mathcal{B} \rangle$ as displayed in the statement.

[A1] $\mathcal{B} \neq \emptyset$, $\emptyset \notin \mathcal{B}$, and for all $B_1, B_2 \in \mathcal{B}$ there is $B_3 \in \mathcal{B}$ with $B_3 \subseteq B_1 \cap B_2$ ([[def-filter-base]]).

[L1] A filter on $X$ is a family $\mathcal{F} \subseteq \mathcal{P}(X)$ with $X \in \mathcal{F}$, $\emptyset \notin \mathcal{F}$, $A \cap B \in \mathcal{F}$ whenever $A, B \in \mathcal{F}$, and $B \in \mathcal{F}$ whenever $A \in \mathcal{F}$ and $A \subseteq B \subseteq X$ ([[def-filter]]).

[L2] A filter base on $X$ is a nonempty family of subsets of $X$ that omits $\emptyset$ and is downward directed, the three conditions listed in [A1] ([[def-filter-base]]).

## Proof

**Proof technique:** direct.

1.1 Every member of $\langle \mathcal{B} \rangle$ is a subset of $X$ by definition, so $\langle \mathcal{B} \rangle \subseteq \mathcal{P}(X)$; and $X \in \langle \mathcal{B} \rangle$, since $\mathcal{B}$ has a member $B$ and $B \subseteq X$. [given, A1]

1.2 $\emptyset \notin \langle \mathcal{B} \rangle$: if $B \subseteq \emptyset$ for some $B \in \mathcal{B}$ then $B = \emptyset$, and $\emptyset \notin \mathcal{B}$. [given, A1]

1.3 $\langle \mathcal{B} \rangle$ is closed upward in $X$: if $A \in \langle \mathcal{B} \rangle$, say $B \subseteq A$ with $B \in \mathcal{B}$, and $A \subseteq A' \subseteq X$, then $B \subseteq A'$, so $A' \in \langle \mathcal{B} \rangle$. [given]

1.4 $\langle \mathcal{B} \rangle$ is closed under pairwise intersection: given $A_1, A_2 \in \langle \mathcal{B} \rangle$ pick $B_1, B_2 \in \mathcal{B}$ with $B_i \subseteq A_i$, and then $B_3 \in \mathcal{B}$ with $B_3 \subseteq B_1 \cap B_2 \subseteq A_1 \cap A_2 \subseteq X$, so $A_1 \cap A_2 \in \langle \mathcal{B} \rangle$. [given, A1]

1.5 $\mathcal{B} \subseteq \langle \mathcal{B} \rangle$, because $B \subseteq B$ and $B \subseteq X$ for every $B \in \mathcal{B}$. [given]

1.6 If $\mathcal{F}$ is a filter on $X$ with $\mathcal{B} \subseteq \mathcal{F}$ and $A \in \langle \mathcal{B} \rangle$, say $B \subseteq A \subseteq X$ with $B \in \mathcal{B} \subseteq \mathcal{F}$, then upward closure of $\mathcal{F}$ gives $A \in \mathcal{F}$; hence $\langle \mathcal{B} \rangle \subseteq \mathcal{F}$. [given, L1]

1.7 Every filter $\mathcal{F}$ on $X$ is a filter base: $X \in \mathcal{F}$ gives $\mathcal{F} \neq \emptyset$, properness gives $\emptyset \notin \mathcal{F}$, and for $B_1, B_2 \in \mathcal{F}$ the member $B_3 = B_1 \cap B_2$ of $\mathcal{F}$ satisfies $B_3 \subseteq B_1 \cap B_2$. [L1, L2]

2.1 $\langle \mathcal{B} \rangle$ satisfies all four filter axioms, so it is a filter on $X$. [step 1.1, step 1.2, step 1.3, step 1.4, L1]

2.2 For a filter $\mathcal{F}$ on $X$, applying step 1.5 and step 1.6 to the filter base $\mathcal{F}$ gives $\mathcal{F} \subseteq \langle \mathcal{F} \rangle$ and $\langle \mathcal{F} \rangle \subseteq \mathcal{F}$, that is $\langle \mathcal{F} \rangle = \mathcal{F}$. [step 1.7, step 1.5, step 1.6]

3.1 So $\langle \mathcal{B} \rangle$ is a filter containing $\mathcal{B}$ and contained in every filter that contains $\mathcal{B}$, hence the smallest such filter, and every filter is a filter base generating itself. [step 2.1, step 2.2, step 1.5, step 1.6] ∎

## Remarks

- The only place directedness (B3) is used is step 1.4, the intersection axiom. Drop it and the upward closure of $\mathcal{B}$ is still closed upward and still proper, but it need not be closed under intersection: on $X = \{0, 1\}$ the family $\mathcal{B} = \{\{0\}, \{1\}\}$ has upward closure $\{\{0\}, \{1\}, X\}$, which does not contain $\{0\} \cap \{1\} = \emptyset$ and is not a filter.
- Part 3 is what licenses the phrase "the filter generated by" being applied to a filter: generation is idempotent, so nothing is gained by generating twice.
- Smallest is meant in the inclusion order on $\mathrm{Filt}(X)$ and is a genuine least element of the set of filters containing $\mathcal{B}$, not merely a minimal one, since part 2 compares $\langle \mathcal{B} \rangle$ with every such filter. This is the opposite situation to [[def-ultrafilter]], where only maximality is available.
````

### `thm-uniformity-induces-a-topology`

````markdown
---
id: thm-uniformity-induces-a-topology
kind: theorem
title: "The sets containing an entourage ball about each of their points form a topology"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-uniform-space-by-entourages, lem-symmetric-entourages-form-a-base, def-topological-space, def-neighbourhood-top]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-31
  audited: 2026-07-31
sources:
  scraped: []
  references: [{title: "J. Wodzicki, Uniform Structure", url: "https://math.berkeley.edu/~wodzicki/H104.F13/UniformStructure-alt.pdf"}]
pipeline_run: null
---

## Statement

For a uniformity $\mathcal U$ on $X$, call $O\subseteq X$ open when every $x\in O$ has an entourage $E$ with $E[x]\subseteq O$. These open sets form a topology on $X$. Its neighbourhood filter at $x$ has $\{E[x]:E\in\mathcal U\}$ as a base.

## Facts & Assumptions

**Given:** A uniform space $(X,\mathcal U)$.

[A1] Entourages contain the diagonal, are closed under finite intersection, and have symmetric square roots ([[def-uniform-space-by-entourages]], [[lem-symmetric-entourages-form-a-base]]).

[L1] A topology contains $\varnothing,X$, is closed under arbitrary unions, and under binary intersections ([[def-topological-space]]).

[L2] A neighbourhood base at $x$ refines every neighbourhood of $x$ ([[def-neighbourhood-top]]).

## Proof

**Proof technique:** direct.

1.1 The sets $\varnothing$ and $X$ are open: the first has no points to test, and for $x\in X$ every entourage ball is contained in $X$. [A1]

1.2 An arbitrary union of open sets is open, because a point in the union lies in one member and retains that member's entourage ball. [A1]

1.3 If $x\in O\cap P$, choose entourage balls $E[x]\subseteq O$ and $F[x]\subseteq P$; then $(E\cap F)[x]\subseteq O\cap P$, so binary intersections are open. [A1]

2.1 By steps 1.1 to 1.3, the open sets form a topology by [L1]. [step 1.1, step 1.2, step 1.3, L1]

3.1 Let $E$ be an entourage and define $$ O_E=\{y\in E[x]:F[y]\subseteq E[x]\text{ for some }F\in\mathcal U\}. $$ This set is open. Indeed, given $y\in O_E$, choose $F$ as displayed and then a symmetric $G$ with $G\circ G\subseteq F$. If $z\in G[y]$, symmetry gives $G[z]\subseteq(G\circ G)[y]\subseteq F[y]\subseteq E[x]$, so $z\in O_E$; hence $G[y]\subseteq O_E$. Now choose a symmetric $D$ with $D\circ D\subseteq E$. If $y\in D[x]$, then $D[y]\subseteq E[x]$, so $y\in O_E$. Thus $x\in D[x]\subseteq O_E\subseteq E[x]$, proving that $E[x]$ is a neighbourhood of $x$. [A1, step 2.1]

4.1 Conversely, if $N$ is a neighbourhood of $x$, it contains an open set $O$ with $x\in O$; the definition of the topology supplies an entourage $E$ with $E[x]\subseteq O\subseteq N$. Thus the entourage balls refine every neighbourhood, and by step 3.1 they are themselves neighbourhoods. They form a neighbourhood base by [L2]. [step 2.1, step 3.1, L2] ∎
````

