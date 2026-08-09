# Audit proof-refuter brief — Wave 8, step A6

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

- high risk (5): 5 declared dependencies; 3 cited facts; existence, choice, uniqueness, or well-definedness

## Target item — `thm-stone-metric-spaces-are-paracompact`

Normalized current SHA-256: `42180d4d972668fbba0770f780d66785bb6bb69e0f9628a8ff7d005d75223bcf`

The complete current item follows, including frontmatter:

````markdown
---
id: thm-stone-metric-spaces-are-paracompact
kind: theorem
title: "Stone's theorem, under choice: every metric space is paracompact"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [lem-metric-open-covers-have-point-finite-refinements, lem-metric-point-finite-refinements-can-be-made-locally-finite, def-paracompact-space, def-metric-space, def-axiom-of-choice]
justified_by: []
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
  references:
    - title: "D. Ornstein, A New Proof of the Paracompactness of Metric Spaces, Proc. Amer. Math. Soc. 21 (1969), 341–342"
      url: "https://www.ams.org/proc/1969-021-02/"
    - title: "C. Good, I. J. Tree and W. S. Watson, On Stone's theorem and the axiom of choice"
      url: "https://doi.org/10.1090/S0002-9939-98-04163-X"
    - title: "Topology 262 notes (California State University, Northridge)"
      url: "https://www.csun.edu/~ac53971/research/topology_262.pdf"
pipeline_run: null
---

## Statement

Assume the Axiom of Choice. Every metric space is paracompact.

## Facts & Assumptions

**Given:** The Axiom of Choice, a metric space $X$, and an arbitrary open cover $\mathcal U$ of its metric topology.

[L1] Under choice, every metric open cover has a point-finite open refinement, and Ornstein's second construction turns that point-finite cover into a locally finite open refinement ([[lem-metric-open-covers-have-point-finite-refinements]], [[lem-metric-point-finite-refinements-can-be-made-locally-finite]]).

[F1] Paracompactness means that every open cover has such a refinement ([[def-paracompact-space]]).

## Proof

**Proof technique:** direct.

1.1 Apply [L1] to the arbitrary cover $\mathcal U$. [L1]

2.1 The resulting locally finite open refinement is exactly the condition in [F1], so $X$ is paracompact. [F1, step 1.1] ∎

## Remarks

The theorem is proved here with the Axiom of Choice as a sufficient hypothesis. No assertion is made that this is its exact set-theoretic strength.
````

## Wave 8 provenance row for the target

```json
{
  "id": "thm-stone-metric-spaces-are-paracompact",
  "statement": "ai-altered",
  "proof": "ai-altered",
  "evidence": "semantic-source",
  "urls": [
    "https://www.ams.org/proc/1969-021-02/",
    "https://www.csun.edu/~ac53971/research/topology_262.pdf"
  ],
  "rationale": "The sources state Stone's theorem that every metric space is paracompact. The item states the theorem with the Choice used by its chosen Ornstein proof made explicit and derives it from the two separately recorded construction lemmas.",
  "alpha_concurred": false,
  "at": "2026-08-09",
  "ledger": "wave8-topology.provenance.jsonl"
}
```

## Proof contract for the target

```json
{
  "citations": [
    {
      "fact": "L1",
      "source": "lem-metric-open-covers-have-point-finite-refinements",
      "source_section": "Statement",
      "quote": "Assume the Axiom of Choice. Every open cover of a metric space has a point-finite\nopen refinement.",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L1",
      "source": "lem-metric-point-finite-refinements-can-be-made-locally-finite",
      "source_section": "Statement",
      "quote": "Assume the Axiom of Choice. Every point-finite open cover of a metric space has\na locally finite open refinement. Consequently every metric open cover has a\nlocally finite open refinement.",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "F1",
      "source": "def-paracompact-space",
      "source_section": "Definition",
      "quote": "A topological space $X$ is **paracompact** when every open cover $\\mathcal U$\nof $X$ has an open refinement $\\mathcal V$ which covers $X$ and is locally\nfinite. In symbols, for every open cover $\\mathcal U$ there is a locally finite\nopen cover $\\mathcal V$ such that every $V\\in\\mathcal V$ lies in some\n$U\\in\\mathcal U$.\n\nNo separation axiom is included in this definition. Some sources reserve the\nword *paracompact* for the conjunction of this covering property with\nHausdorffness. Here the covering property is named by itself, and any use of\nHausdorffness is stated explicitly.",
      "uses": [
        "2.1"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1-1",
      "claim": "Apply [L1] to the arbitrary cover $\\mathcal U$. [L1]",
      "step": "1.1",
      "inputs": [
        "L1"
      ]
    },
    {
      "id": "step-2-1",
      "claim": "The resulting locally finite open refinement is exactly the condition in [F1], so $X$ is paracompact. [F1, step 1.1]",
      "step": "2.1",
      "inputs": [
        "F1",
        "1.1"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "checked",
      "evidence": "Statement and steps 1.1--2.1 include the empty metric space and empty open cover."
    },
    {
      "case": "zero",
      "status": "not_applicable",
      "reason": "No numerical zero boundary enters this corollary."
    },
    {
      "case": "one",
      "status": "checked",
      "evidence": "Steps 1.1--2.1 include one-member covers."
    },
    {
      "case": "degenerate",
      "status": "checked",
      "evidence": "Steps 1.1--2.1 allow repeated or empty cover members through the cited refinements."
    },
    {
      "case": "endpoints",
      "status": "not_applicable",
      "reason": "No interval or threshold endpoint occurs in this proof."
    },
    {
      "case": "nonempty-choice",
      "status": "checked",
      "evidence": "Step 1.1 invokes the two refinement lemmas under the stated Axiom of Choice."
    },
    {
      "case": "iff-forward",
      "status": "not_applicable",
      "reason": "The statement is one directional."
    },
    {
      "case": "iff-reverse",
      "status": "not_applicable",
      "reason": "The statement is one directional."
    }
  ],
  "finite_smoke": []
}
```

## Generated audit-manifest relationships for the target

```json
[
  {
    "source": "thm-stone-metric-spaces-are-paracompact",
    "sourcePage": "partitions-of-unity-and-paracompactness",
    "batch": "wave8-topology",
    "target": "lem-metric-open-covers-have-point-finite-refinements",
    "declared_target": "lem-metric-open-covers-have-point-finite-refinements",
    "target_statement_provenance": "ai-altered",
    "targetPage": "partitions-of-unity-and-paracompactness",
    "targetBatch": "wave8-topology",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-stone-metric-spaces-are-paracompact",
    "sourcePage": "partitions-of-unity-and-paracompactness",
    "batch": "wave8-topology",
    "target": "lem-metric-point-finite-refinements-can-be-made-locally-finite",
    "declared_target": "lem-metric-point-finite-refinements-can-be-made-locally-finite",
    "target_statement_provenance": "ai-altered",
    "targetPage": "partitions-of-unity-and-paracompactness",
    "targetBatch": "wave8-topology",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-stone-metric-spaces-are-paracompact",
    "sourcePage": "partitions-of-unity-and-paracompactness",
    "batch": "wave8-topology",
    "target": "def-paracompact-space",
    "declared_target": "def-paracompact-space",
    "target_statement_provenance": "literature-derived",
    "targetPage": "partitions-of-unity-and-paracompactness",
    "targetBatch": "wave8-topology",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-stone-metric-spaces-are-paracompact",
    "sourcePage": "partitions-of-unity-and-paracompactness",
    "batch": "wave8-topology",
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
    "source": "thm-stone-metric-spaces-are-paracompact",
    "sourcePage": "partitions-of-unity-and-paracompactness",
    "batch": "wave8-topology",
    "target": "def-axiom-of-choice",
    "declared_target": "def-axiom-of-choice",
    "target_statement_provenance": "literature-derived",
    "targetPage": "relations-functions-and-quotients",
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

## Full text of every cited or declared item (5)

### `def-axiom-of-choice`

````markdown
---
id: def-axiom-of-choice
kind: definition
title: "The Axiom of Choice"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-choice-function]
justified_by: []
forward_refs: [ex-russells-socks, rem-choice-strengths, fs-zorn-provable-in-zf,
               lem-finite-choice, rem-choice-ledger]
external_refs: [rem-godel-constructible-universe, rem-cohen-forcing-ac-independent]
aliases: [def-ac]
landmark: true
short: "axiom of choice"
verification:
  precheck: n/a
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-08-06
    scope: published-rehoming-repair
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "I. Khatchatourian, The Axiom of Choice (University of Toronto MAT327 notes)"
      url: "https://www.math.utoronto.ca/ivan/mat327/docs/notes/11-choice.pdf"
    - title: "Axiom of choice (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Axiom_of_choice"
    - title: "Choice function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Choice_function"
pipeline_run: null
---

## Definition

The **Axiom of Choice** (AC) is the following statement.

> Every family of nonempty sets has a choice function
> ([[def-choice-function]]).

Written out: for every set $\mathcal{F}$ all of whose members are nonempty,
there exists a function $g$ with domain $\mathcal{F}$ satisfying $g(S) \in S$ for
all $S \in \mathcal{F}$.

An equivalent formulation is that a product of nonempty sets is nonempty: if
$X_i \ne \emptyset$ for every $i \in I$, then $\prod_{i \in I} X_i \ne \emptyset$.
Here $\prod_{i \in I} X_i$ is the set of functions $f$ with domain $I$ such that
$f(i) \in X_i$ for every $i \in I$; when a family of nonempty sets is indexed by
itself, such an $f$ is precisely a choice function for it.

## Remarks

- **This is an axiom, not a theorem, and it is deliberately not derived here.**
  **Assume ZF is consistent.** Then AC is independent of the axioms of
  Zermelo–Fraenkel set theory: Gödel (1938) showed that ZF, if consistent, cannot
  refute it ([[rem-godel-constructible-universe]]), and Cohen (1963) showed that
  ZF, if consistent, cannot prove it ([[rem-cohen-forcing-ac-independent]]). The
  consistency hypothesis is not decoration and cannot be dropped: an inconsistent
  ZF proves everything, AC included, so both halves of the independence would
  fail. Nor can the hypothesis be discharged inside ZF. Both directions also
  require machinery (the constructible universe and forcing) that this library
  does not yet contain, so both are recorded with references rather than proved.
  [[fs-zorn-provable-in-zf]] carries the same consistency assumption explicitly
  in its Given; [[rem-choice-ledger]] records the weaker choice principles.
- Being an axiom, AC carries no well-definedness obligation, which is why this
  item has no `justified_by`.
- The case of a family listed by a natural number, which is the finite case once
  finiteness is defined, is a theorem of ZF and needs no axiom
  ([[lem-finite-choice]]). AC is exactly the extension of that theorem to
  arbitrary index sets, and the gap between the two is not a matter of degree:
  [[ex-russells-socks]] exhibits the difference concretely.
- "ZFC" abbreviates ZF together with AC. A result that invokes AC should say so
  where it is stated, so that a reader can tell which theorems are choice-free;
  that bookkeeping is the purpose of [[rem-choice-ledger]].
  [[rem-choice-strengths]] carries the narrower question of what the ultrafilter
  lemma costs, and on cited authority, and under the hypothesis that ZF is
  consistent, places that principle strictly between ZF and AC.
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

### `def-paracompact-space`

````markdown
---
id: def-paracompact-space
kind: definition
title: "Paracompactness: every open cover has a locally finite open refinement, with no separation axiom built into the word"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-cover-refinement-and-local-finiteness, def-compact-space]
justified_by: []
aliases: [def-paracompactness]
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
  references:
    - title: "Dartmouth Point-Set Topology, Lecture 25"
      url: "https://math.dartmouth.edu/~rmaguire/teaching/dartmouth_math_054_2022_summer/lectures/2022_summer_point_set_topology_lecture_25.pdf"
    - title: "R. Gardner, Notes on Munkres Section 41: Paracompactness (East Tennessee State University)"
      url: "https://faculty.etsu.edu/gardnerr/5357/notes/Munkres-41.pdf"
pipeline_run: null
---

## Definition

A topological space $X$ is **paracompact** when every open cover $\mathcal U$
of $X$ has an open refinement $\mathcal V$ which covers $X$ and is locally
finite. In symbols, for every open cover $\mathcal U$ there is a locally finite
open cover $\mathcal V$ such that every $V\in\mathcal V$ lies in some
$U\in\mathcal U$.

No separation axiom is included in this definition. Some sources reserve the
word *paracompact* for the conjunction of this covering property with
Hausdorffness. Here the covering property is named by itself, and any use of
Hausdorffness is stated explicitly.

## Remarks

The finite-subcover condition defining compactness is recalled in
[[def-compact-space]]. A finite family is locally finite, but compactness and
paracompactness remain distinct definitions because their conclusions quantify
over different refinements of a cover.
````

### `lem-metric-open-covers-have-point-finite-refinements`

````markdown
---
id: lem-metric-open-covers-have-point-finite-refinements
kind: lemma
title: "Under choice, every open cover of a metric space has a point-finite open refinement"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-cover-refinement-and-local-finiteness, def-metric-topology, def-axiom-of-choice, thm-well-ordering-theorem, lem-geometric-sequence-null]
justified_by: []
aliases: []
landmark: true
proof_strategy: constructive
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-31
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "D. Ornstein, A New Proof of the Paracompactness of Metric Spaces, Proc. Amer. Math. Soc. 21 (1969), 341–342"
      url: "https://www.ams.org/proc/1969-021-02/"
pipeline_run: null
---

## Statement

Assume the Axiom of Choice. Every open cover of a metric space has a point-finite
open refinement.

## Facts & Assumptions

**Given:** Choice, a metric space $X$, and an open cover $\{C_\alpha\}_{\alpha\in A}$.

[A1] Every set can be well ordered under the Axiom of Choice ([[def-axiom-of-choice]], [[thm-well-ordering-theorem]]).

[F1] Metric balls are open and each point of an open set has a ball contained in that set ([[def-metric-topology]]).

[F2] A point-finite open refining cover is as in [[def-cover-refinement-and-local-finiteness]].

[L1] The dyadic radii $2^{-n}$ tend to $0$ ([[lem-geometric-sequence-null]], claim 1 with ratio $1/2$).

## Proof

**Proof technique:** constructive.

1.1 Well order $\{C_\alpha\}$ by [A1], and write $R(x,n)=B(x,2^{-n})$. A ball $R(z,n+1)$ is *chosen for* $C_\alpha$ when $n$ is the least natural number with $R(z,n)\subseteq C_\alpha$ and, in addition, $R(z,n)\subseteq C_\beta$ for some $\beta<\alpha$. Let $\mathcal G_\alpha$ be the union of all balls chosen for $C_\alpha$. [A1, F1, L1, construct]

2.1 Put $C'_\alpha:=C_\alpha\setminus\overline{\mathcal G_\alpha}$. Each $C'_\alpha$ is open and refines $C_\alpha$. [step 1.1, construct]

3.1 The $C'_\alpha$ cover. Otherwise let $C_\alpha$ be the first original member containing an omitted point $x$. Then $x\in\overline{\mathcal G_\alpha}$. By [L1], choose $N$ with $B(x,3\cdot2^{-N})\subseteq C_\alpha$, and put $\delta=2^{-(N+2)}$. Some chosen ball $R(z,n_z+1)$ meets $B(x,\delta)$; write its radius as $r=2^{-(n_z+1)}$. If $r>\delta$, then $d(x,z)<r+\delta<2r$, so its expanded ball $R(z,n_z)$ contains $x$. If $r\le\delta$, then $d(x,z)<r+\delta\le2\delta<2^{-N}$, so $R(z,N)\subseteq C_\alpha$ and minimality gives $n_z\le N$; hence $r\ge2^{-(N+1)}=2\delta$, a contradiction. Thus in every case an expanded chosen ball contains $x$. That expanded ball lies in some $C_\beta$ with $\beta<\alpha$, contradicting the choice of $\alpha$. [step 1.1, step 2.1, F1, L1]

3.2 If $x\in C'_\alpha$ and $n$ is least with $R(x,n)\subseteq C_\alpha$ (which exists by [L1]), then $C_\alpha$ is the first cover member containing $R(x,n)$: otherwise $R(x,n+1)$ would be chosen for $C_\alpha$ and would contain $x$, contrary to $x\notin\overline{\mathcal G_\alpha}$. For each $n$ there is at most one such first member, and as $n$ increases their ordinal indices are nonincreasing. Infinitely many distinct indices would therefore give an infinite strictly descending sequence of ordinals, impossible because its range has a least member. Thus only finitely many $C'_\alpha$ contain $x$. [step 1.1, step 2.1, L1]

4.1 Thus $\{C'_\alpha\}$ is the point-finite open refinement required by [F2]. [F2, step 3.1, step 3.2, discharge-construct] ∎

## Remarks

This is part (A), pages 341–342, of Ornstein's primary proof. Its chosen dyadic-ball construction supplies the point-finite refinement to which the controlled-radius construction in part (B) is then applied.
````

### `lem-metric-point-finite-refinements-can-be-made-locally-finite`

````markdown
---
id: lem-metric-point-finite-refinements-can-be-made-locally-finite
kind: lemma
title: "Under choice, Ornstein's second construction turns a point-finite metric open cover into a locally finite open refinement"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [lem-metric-open-covers-have-point-finite-refinements, def-cover-refinement-and-local-finiteness, def-metric-topology, def-axiom-of-choice, thm-well-ordering-theorem]
justified_by: []
aliases: []
landmark: true
proof_strategy: constructive
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-31
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "D. Ornstein, A New Proof of the Paracompactness of Metric Spaces, Proc. Amer. Math. Soc. 21 (1969), 341–342"
      url: "https://www.ams.org/proc/1969-021-02/"
pipeline_run: null
---

## Statement

Assume the Axiom of Choice. Every point-finite open cover of a metric space has
a locally finite open refinement. Consequently every metric open cover has a
locally finite open refinement.

## Facts & Assumptions

**Given:** Choice, a metric space $X$, and a point-finite open cover $\{C_\alpha\}_{\alpha\in A}$.

[A1] The Axiom of Choice permits the cover to be well ordered and used to select its first eligible member ([[def-axiom-of-choice]], [[thm-well-ordering-theorem]]).

[F1] Metric balls are open, and every point has a positive-radius ball inside some cover member ([[def-metric-topology]]).

[F2] A locally finite open refinement is the paracompactness refinement of [[def-cover-refinement-and-local-finiteness]].

[L1] Under choice every metric open cover has a point-finite open refinement ([[lem-metric-open-covers-have-point-finite-refinements]]).

## Proof

**Proof technique:** constructive.

1.1 Well order the point-finite cover. For $x\in X$ let $$\rho_x=\sup\{r>0:B(x,r)\subseteq C_\alpha \text{ for some }\alpha\}.$$ Put $m_x=\min\{1,\rho_x/4\}$ when $\rho_x<\infty$, and $m_x=1$ otherwise. Then $0<m_x\le1$ and $B(x,2m_x)$ lies in some cover member: its radius is strictly below $\rho_x$. Assign $x$ to the first $C_\alpha$ containing $B(x,2m_x)$, and let $C'_\alpha$ be the union of all $B(x,m_x)$ assigned to $\alpha$. [A1, F1, construct]

2.1 The selected smaller balls cover $X$ and each lies in its assigned $C_\alpha$, so $\{C'_\alpha\}$ is an open refining cover. [step 1.1]

2.2 Fix $x$. If $C'_\alpha$ meets $B(x,m_x/8)$, choose a ball $B(y,m_y)\subseteq C'_\alpha$ meeting it. We claim $x\in C_\alpha$. Otherwise $x\notin B(y,2m_y)$, while intersection gives $d(x,y)<m_y+m_x/8$; hence $m_y<m_x/8\le1/8$. Thus the truncation in step 1.1 is inactive at $y$ and $\rho_y=4m_y$. But $$B(y,5m_y)\subseteq B(x,2m_x),$$ because $d(x,y)+5m_y<6m_y+m_x/8<7m_x/8$; the right-hand ball lies in some cover member by step 1.1. This contradicts the definition of $\rho_y$. Thus $x\in C_\alpha$. [step 1.1]

3.1 The input cover is point-finite, so $x$ belongs to only finitely many $C_\alpha$. Step 2.2 shows that $B(x,m_x/8)$ meets only the corresponding finitely many $C'_\alpha$; hence the new cover is locally finite. [step 2.2, F2]

4.1 Hence $\{C'_\alpha\}$ is a locally finite open refinement of the point-finite cover. For an arbitrary metric open cover, first apply [L1] and then this construction; refinement is transitive, so the result refines the original cover. [L1, F2, step 2.1, step 3.1, discharge-construct] ∎

## Remarks

In the primary paper, part (B) is applied to the point-finite cover obtained in part (A), with that cover renamed $\{C_\alpha\}$. Its local-finiteness test concludes that every new set meeting a fixed small ball has an index $\alpha$ for which $x\in C_\alpha$; point-finiteness of the input is exactly what turns this conclusion into finiteness. Thus part (B) upgrades part (A) rather than restarting from the original arbitrary cover.
````

