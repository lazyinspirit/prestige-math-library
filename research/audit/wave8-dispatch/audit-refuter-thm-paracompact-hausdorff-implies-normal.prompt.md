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

- high risk (6): 5 declared dependencies; 4 cited facts; boundary-sensitive language

## Target item — `thm-paracompact-hausdorff-implies-normal`

Normalized current SHA-256: `da8c6cdd1609754a831803a89bd31e97f20bf9b9447ff00198b6d38444b32c67`

The complete current item follows, including frontmatter:

````markdown
---
id: thm-paracompact-hausdorff-implies-normal
kind: theorem
title: "Every paracompact Hausdorff space is normal"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-paracompact-space, lem-paracompact-hausdorff-is-regular, lem-locally-finite-unions-and-closures, def-hausdorff-space, def-normal-and-t4-spaces]
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
    - title: "Dartmouth Point-Set Topology, Lecture 25"
      url: "https://math.dartmouth.edu/~rmaguire/teaching/dartmouth_math_054_2022_summer/lectures/2022_summer_point_set_topology_lecture_25.pdf"
    - title: "R. Gardner, Notes on Munkres Section 41: Paracompactness (East Tennessee State University)"
      url: "https://faculty.etsu.edu/gardnerr/5357/notes/Munkres-41.pdf"
pipeline_run: null
---

## Statement

Every paracompact Hausdorff topological space is normal. No choice principle is
used.

## Facts & Assumptions

**Given:** A paracompact Hausdorff space $X$ and disjoint closed subsets $E,F\subseteq X$.

[L1] The space $X$ is regular ([[lem-paracompact-hausdorff-is-regular]]).

[L2] A locally finite family commutes with closure under union ([[lem-locally-finite-unions-and-closures]]).

[F1] Paracompactness supplies a locally finite open refining cover ([[def-paracompact-space]]).

[F2] Normality is separation of disjoint closed sets by disjoint open sets ([[def-normal-and-t4-spaces]]).

## Proof

**Proof technique:** direct.

1.1 For each $x\in E$, regularity supplies an open $U$ containing $x$ with $\overline U\cap F=\varnothing$; therefore the family of all such $U$, together with $X\setminus E$, is an open cover $\mathcal U$ of $X$. [L1, construct]

2.1 Take a locally finite open cover $\mathcal W$ refining $\mathcal U$, and set $H:=\bigcup\{W\in\mathcal W:W\cap E\ne\varnothing\}$. [F1, step 1.1, choose, construct]

3.1 The open set $H$ contains $E$, because a member of $\mathcal W$ containing a point of $E$ cannot lie inside $X\setminus E$. [step 1.1, step 2.1]

3.2 Every member $W$ used in $H$ lies in one of the eligible $U$ and so has $\overline W\cap F=\varnothing$; hence $\overline H=\bigcup\overline W$ is disjoint from $F$ by [L2]. [step 1.1, step 2.1, L2]

4.1 The open sets $H$ and $X\setminus\overline H$ contain $E$ and $F$ respectively and are disjoint, so [F2] proves normality. [step 3.1, step 3.2, F2] ∎
````

## Wave 8 provenance row for the target

```json
{
  "id": "thm-paracompact-hausdorff-implies-normal",
  "statement": "literature-derived",
  "proof": "ai-altered",
  "evidence": "exact-source",
  "urls": [
    "https://faculty.etsu.edu/gardnerr/5357/notes/Munkres-41.pdf"
  ],
  "rationale": "Munkres §41, Theorem 41.1, states exactly that every paracompact Hausdorff space is normal. The proof is a standard closed-set separation argument adapted to the library's separate regularity lemma.",
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
      "source": "lem-paracompact-hausdorff-is-regular",
      "source_section": "Statement",
      "quote": "Every paracompact Hausdorff topological space is regular. No choice principle is\nused.",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L2",
      "source": "lem-locally-finite-unions-and-closures",
      "source_section": "Statement",
      "quote": "Let $\\{A_i\\}_{i\\in I}$ be a locally finite family of subsets of a topological\nspace $X$. Then $\\{\\overline{A_i}\\}_{i\\in I}$ is locally finite and\n$$\\overline{\\bigcup_{i\\in I}A_i}=\\bigcup_{i\\in I}\\overline{A_i}.$$\nConsequently, a locally finite union of closed subsets of $X$ is closed.",
      "uses": [
        "3.2"
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
    },
    {
      "fact": "F2",
      "source": "def-normal-and-t4-spaces",
      "source_section": "Definition",
      "quote": "Let $(X, \\mathcal{T})$ be a topological space ([[def-topological-space]]).\n\n- $X$ is **normal** when any two disjoint closed sets can be separated by\n  disjoint open sets: for all closed $A, B \\subseteq X$ with\n  $A \\cap B = \\varnothing$ there are $U, V \\in \\mathcal{T}$ with\n  $$A \\subseteq U, \\qquad B \\subseteq V, \\qquad U \\cap V = \\varnothing .$$\n- $X$ is **$T_4$** when it is normal **and** $T_1$ ([[def-t0-and-t1-spaces]]).\n\nEither of $A$, $B$ may be empty, and those cases are met by $U = \\varnothing$ or\n$V = \\varnothing$ together with $X$; so the condition hides no nonemptiness\nhypothesis. As with regularity, \"disjoint open sets\" may equivalently be read as\n\"disjoint open neighbourhoods of the two sets\" ([[def-neighbourhood-top]]).\n\n**Normality is the special case of complete normality at a disjoint closed\npair.** Disjoint closed sets are separated in the sense of\n[[def-separated-sets]], since the closure of a closed set is itself; so a space\nin which every *separated* pair can be put into disjoint open sets is in\nparticular normal. That stronger condition is defined later on this page, and the\nimplication is proved there.\n\n**The convention fork, and this library's side of it.** Exactly as for\nregularity, textbooks disagree about whether *normal* carries a $T_1$ hypothesis.\nMunkres builds it in; Kelley, Willard and Engelking do not. **This library takes\nthe second side**: *normal* names the separation condition alone, $T_4$ names\nnormal plus $T_1$, and the $T_1$ hypothesis is written out wherever it is used.\nThe reason is again that the two halves are independent, and here the point is\nsharp: **normality without $T_1$ implies nothing at all** in the hierarchy. The\nindiscrete topology on a two-point set ([[def-standard-topologies]]) is normal,\nits only closed sets being $\\varnothing$ and the whole space, and it is not even\n$T_0$; Sierpinski space is normal, $T_0$ and not regular. Both are recorded on\nthis page, the first as a false statement and both on the companion page.",
      "uses": [
        "4.1"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1-1",
      "claim": "For each $x\\in E$, regularity supplies an open $U$ containing $x$ with $\\overline U\\cap F=\\varnothing$; therefore the family of all such $U$, together with $X\\setminus E$, is an open cover $\\mathcal U$ of $X$. [L1, construct]",
      "step": "1.1",
      "inputs": [
        "L1",
        "construct"
      ]
    },
    {
      "id": "step-2-1",
      "claim": "Take a locally finite open cover $\\mathcal W$ refining $\\mathcal U$, and set $H:=\\bigcup\\{W\\in\\mathcal W:W\\cap E\\ne\\varnothing\\}$. [F1, step 1.1, choose, construct]",
      "step": "2.1",
      "inputs": [
        "F1",
        "1.1",
        "choose",
        "construct"
      ]
    },
    {
      "id": "step-3-1",
      "claim": "The open set $H$ contains $E$, because a member of $\\mathcal W$ containing a point of $E$ cannot lie inside $X\\setminus E$. [step 1.1, step 2.1]",
      "step": "3.1",
      "inputs": [
        "1.1",
        "2.1"
      ]
    },
    {
      "id": "step-3-2",
      "claim": "Every member $W$ used in $H$ lies in one of the eligible $U$ and so has $\\overline W\\cap F=\\varnothing$; hence $\\overline H=\\bigcup\\overline W$ is disjoint from $F$ by [L2]. [step 1.1, step 2.1, L2]",
      "step": "3.2",
      "inputs": [
        "L2",
        "1.1",
        "2.1"
      ]
    },
    {
      "id": "step-4-1",
      "claim": "The open sets $H$ and $X\\setminus\\overline H$ contain $E$ and $F$ respectively and are disjoint, so [F2] proves normality. [step 3.1, step 3.2, F2]",
      "step": "4.1",
      "inputs": [
        "F2",
        "3.1",
        "3.2"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "checked",
      "evidence": "Statement and steps 1.1--4.1 include E or F empty; if X is empty the universal separation assertion is vacuous."
    },
    {
      "case": "zero",
      "status": "not_applicable",
      "reason": "No numerical zero or zero-length construction occurs."
    },
    {
      "case": "one",
      "status": "checked",
      "evidence": "Steps 1.1--4.1 specialize to singleton closed sets."
    },
    {
      "case": "degenerate",
      "status": "checked",
      "evidence": "Steps 1.1--4.1 include E empty, F empty, and H empty."
    },
    {
      "case": "endpoints",
      "status": "not_applicable",
      "reason": "No interval endpoint occurs."
    },
    {
      "case": "nonempty-choice",
      "status": "checked",
      "evidence": "Step 2.1 takes the refinement supplied by paracompactness; step 1.1 uses all eligible neighbourhoods and makes no unsupported simultaneous choice."
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
    "source": "thm-paracompact-hausdorff-implies-normal",
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
    "source": "thm-paracompact-hausdorff-implies-normal",
    "sourcePage": "partitions-of-unity-and-paracompactness",
    "batch": "wave8-topology",
    "target": "lem-paracompact-hausdorff-is-regular",
    "declared_target": "lem-paracompact-hausdorff-is-regular",
    "target_statement_provenance": "literature-derived",
    "targetPage": "partitions-of-unity-and-paracompactness",
    "targetBatch": "wave8-topology",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-paracompact-hausdorff-implies-normal",
    "sourcePage": "partitions-of-unity-and-paracompactness",
    "batch": "wave8-topology",
    "target": "lem-locally-finite-unions-and-closures",
    "declared_target": "lem-locally-finite-unions-and-closures",
    "target_statement_provenance": "literature-derived",
    "targetPage": "partitions-of-unity-and-paracompactness",
    "targetBatch": "wave8-topology",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-paracompact-hausdorff-implies-normal",
    "sourcePage": "partitions-of-unity-and-paracompactness",
    "batch": "wave8-topology",
    "target": "def-hausdorff-space",
    "declared_target": "def-hausdorff-space",
    "target_statement_provenance": "ai-altered",
    "targetPage": "subspaces-products-and-quotients",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-paracompact-hausdorff-implies-normal",
    "sourcePage": "partitions-of-unity-and-paracompactness",
    "batch": "wave8-topology",
    "target": "def-normal-and-t4-spaces",
    "declared_target": "def-normal-and-t4-spaces",
    "target_statement_provenance": "literature-derived",
    "targetPage": "separation-axioms",
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

### `def-hausdorff-space`

````markdown
---
id: def-hausdorff-space
kind: definition
title: "Hausdorff space: distinct points have disjoint open neighbourhoods; every metrizable space is Hausdorff and the indiscrete topology on two points is not"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-topological-space, def-neighbourhood-top, def-standard-topologies,
       def-metrizable-space, thm-metric-hausdorff-separation,
       def-homeomorphism-and-open-maps]
justified_by: []
aliases: [def-hausdorff, def-t2-space]
landmark: true
short: "Hausdorff space"
verification:
  precheck: n/a
  verified:
    model: gpt-5.6-sol-codex-subscription
    verdict: certify
    date: 2026-08-04
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Hausdorff space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Hausdorff_space"
    - title: "Separation axiom (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Separation_axiom"
    - title: "J. Munkres, Topology, 2nd ed., §17"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
pipeline_run: null
---

## Definition

A topological space $(X, \mathcal{T})$ ([[def-topological-space]]) is
**Hausdorff** when any two distinct points are separated by disjoint open sets:
for all $x, y \in X$ with $x \ne y$ there are $U, V \in \mathcal{T}$ with

$$x \in U, \qquad y \in V, \qquad U \cap V = \varnothing .$$

Since an open set containing a point is an open neighbourhood of it
([[def-neighbourhood-top]]), the condition reads: distinct points have disjoint
open neighbourhoods. Nothing is asserted about points that are equal, and the
condition is vacuous for a space with at most one point, so every such space is
Hausdorff.

**Every metrizable space is Hausdorff.** This is not proved here, because it is
already discharged: [[def-metrizable-space]] records it among the two things
every metrizable space has, deriving it from
[[thm-metric-hausdorff-separation]], which separates $p \ne q$ in a metric space
by the disjoint open balls $B(p,r)$ and $B(q,r)$ with $r = d(p,q)/2 > 0$. In
particular $\mathbb{R}$ with its usual topology, every $\mathbb{R}^n$, and every
subspace of a metrizable space are Hausdorff.

**Not every space is Hausdorff.** The indiscrete topology
$\mathcal{T}_{\mathrm{ind}} = \{\varnothing, X\}$ on a set $X = \{a,b\}$ with
$a \ne b$ ([[def-standard-topologies]]) is not: the only open set containing $a$
is $X$, the only one containing $b$ is $X$, and $X \cap X = X \ne \varnothing$.
This is the same two-point space that [[def-metrizable-space]] uses to exhibit a
topology induced by no metric, and the reason is the same one: failure of the
Hausdorff condition is an obstruction to metrizability.

**Being Hausdorff is a topological property** ([[def-homeomorphism-and-open-maps]]).
If $h : X \to Z$ is a homeomorphism and $X$ is Hausdorff, then for $z \ne z'$ in
$Z$ the points $h^{-1}(z)$ and $h^{-1}(z')$ are distinct, so they have disjoint
open $U, V$; the images $h[U]$ and $h[V]$ are open, disjoint, and contain $z$ and
$z'$ respectively, a homeomorphism carrying the open sets of one space
bijectively onto those of the other. So no space homeomorphic to a Hausdorff
space fails the condition.

**Scope of this item.** Only the definition, the metrizable case and the
two-point failure are recorded here, because that is all this page uses. The
Hausdorff condition is one of a graded family of separation axioms; that family,
its ordering, and the questions of which of its members are hereditary or
preserved by products, are not available at this point in the reading order and
nothing here anticipates them. What this page does use is a single negative
result: a quotient of a Hausdorff space need not be Hausdorff, which is recorded
below as a false statement and witnessed on the companion page.

## Remarks

- **Hausdorff spaces have closed singletons.** Fix $x \in X$ and take the union
  of all open subsets of $X$ that avoid $x$. Every $y \ne x$ belongs to one of
  them, by Hausdorff separation of $x$ and $y$, while $x$ belongs to none. The
  union is therefore exactly $X \setminus \{x\}$, so $\{x\}$ is closed.
  Thus the Hausdorff property implies the singleton-closed ($T_1$) property.
  The converse fails: closed singletons need not give disjoint neighbourhoods
  of distinct points.

- **What the Hausdorff condition buys, in the one place this page needs it.**
  Separation of distinct points by disjoint open sets is exactly what a quotient
  map can destroy: identifying points of a Hausdorff space can leave two classes
  every pair of whose open neighbourhoods meet, and the companion page exhibits
  such a quotient of a metrizable space. Nothing weaker than an explicit witness
  settles that, since the condition is a statement about all pairs of open sets.

- **The name.** Hausdorff's own 1914 axiom system for a topological space
  included this condition, so "topological space" once meant what is now called a
  Hausdorff space; this library follows the modern convention in which
  [[def-topological-space]] assumes no separation at all and every separation
  hypothesis is stated where it is used.
````

### `def-normal-and-t4-spaces`

````markdown
---
id: def-normal-and-t4-spaces
kind: definition
title: "Normal spaces and $T_4$ spaces, with the source disagreement over whether normality includes $T_1$ stated explicitly"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-topological-space, def-t0-and-t1-spaces, def-separated-sets,
       def-standard-topologies, def-neighbourhood-top]
justified_by: []
aliases: [def-normal-space, def-t4-space]
landmark: true
short: "normal space, $T_4$ space"
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
    - title: "Normal space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Normal_space"
    - title: "Separation axiom (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Separation_axiom"
    - title: "J. Munkres, Topology, 2nd ed., §32"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
    - title: "R. Gardner, Introduction to Topology, notes on Munkres Section 31: The Separation Axioms (East Tennessee State University)"
      url: "https://faculty.etsu.edu/gardnerr/5357/notes/Munkres-31.pdf"
pipeline_run: null
---

## Definition

Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]).

- $X$ is **normal** when any two disjoint closed sets can be separated by
  disjoint open sets: for all closed $A, B \subseteq X$ with
  $A \cap B = \varnothing$ there are $U, V \in \mathcal{T}$ with
  $$A \subseteq U, \qquad B \subseteq V, \qquad U \cap V = \varnothing .$$
- $X$ is **$T_4$** when it is normal **and** $T_1$ ([[def-t0-and-t1-spaces]]).

Either of $A$, $B$ may be empty, and those cases are met by $U = \varnothing$ or
$V = \varnothing$ together with $X$; so the condition hides no nonemptiness
hypothesis. As with regularity, "disjoint open sets" may equivalently be read as
"disjoint open neighbourhoods of the two sets" ([[def-neighbourhood-top]]).

**Normality is the special case of complete normality at a disjoint closed
pair.** Disjoint closed sets are separated in the sense of
[[def-separated-sets]], since the closure of a closed set is itself; so a space
in which every *separated* pair can be put into disjoint open sets is in
particular normal. That stronger condition is defined later on this page, and the
implication is proved there.

**The convention fork, and this library's side of it.** Exactly as for
regularity, textbooks disagree about whether *normal* carries a $T_1$ hypothesis.
Munkres builds it in; Kelley, Willard and Engelking do not. **This library takes
the second side**: *normal* names the separation condition alone, $T_4$ names
normal plus $T_1$, and the $T_1$ hypothesis is written out wherever it is used.
The reason is again that the two halves are independent, and here the point is
sharp: **normality without $T_1$ implies nothing at all** in the hierarchy. The
indiscrete topology on a two-point set ([[def-standard-topologies]]) is normal,
its only closed sets being $\varnothing$ and the whole space, and it is not even
$T_0$; Sierpinski space is normal, $T_0$ and not regular. Both are recorded on
this page, the first as a false statement and both on the companion page.

## Remarks

- **Normality does not imply regularity**, and the failure is witnessed by
  Sierpinski space on the companion page, which is normal and not regular.
  Whether *regularity* implies normality is a question this page leaves open: any
  witness reachable from the material here would need cardinal arithmetic or the
  hereditary behaviour of regularity. This page's own prerequisites still supply
  neither: cardinal arithmetic and cofinality is now built, but *below* this
  one, and nothing here draws on it; the hereditary and productive behaviour of
  the separation axioms is developed later in the reading order. So nothing above
  asserts an answer and no false statement asserting
  one is planted here ([[rem-separation-axiom-conventions]]).

- **Normality is the axiom that behaves worst**, and the companion page shows
  one symptom: the deleted Tychonoff plank, a subspace of a product of two
  ordinal spaces each of which is $T_3$, is Hausdorff and not normal. Whether
  normality is inherited by subspaces or preserved by products is a question this
  page does not answer, and nothing here asserts an answer; the plank is
  presented only as a Hausdorff space that fails normality.

- **What the definition does *not* say.** It says nothing about separating a
  point from a closed set, because a point need not be closed; that is the
  content of the $T_1$ hypothesis in $T_4$, and the theorem two items below is
  where it is spent.
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

### `lem-locally-finite-unions-and-closures`

````markdown
---
id: lem-locally-finite-unions-and-closures
kind: lemma
title: "Locally finite families remain locally finite after taking closures, closure commutes with their union, and a locally finite union of closed sets is closed"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-cover-refinement-and-local-finiteness, thm-closure-characterisation-top, def-topological-space]
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
    - title: "J. Robbin, Partitions of Unity"
      url: "https://people.math.wisc.edu/~jwrobbin/partitions_of_unity.pdf"
    - title: "S. Semmes, Topology notes, Sections 5.13–5.14 (Rice University)"
      url: "https://math.rice.edu/~semmes/math443b.pdf"
pipeline_run: null
---

## Statement

Let $\{A_i\}_{i\in I}$ be a locally finite family of subsets of a topological
space $X$. Then $\{\overline{A_i}\}_{i\in I}$ is locally finite and
$$\overline{\bigcup_{i\in I}A_i}=\bigcup_{i\in I}\overline{A_i}.$$
Consequently, a locally finite union of closed subsets of $X$ is closed.

## Facts & Assumptions

**Given:** A locally finite family $\{A_i\}_{i\in I}$ in a topological space $X$.

[F1] Local finiteness says that each point has a neighbourhood meeting only finitely many $A_i$ ([[def-cover-refinement-and-local-finiteness]]).

[L1] A point belongs to $\overline A$ exactly when every neighbourhood of it meets $A$, and $\overline A$ is the smallest closed superset of $A$ ([[thm-closure-characterisation-top]]).

## Proof

**Proof technique:** direct.

1.1 Fix $x\in X$ and a neighbourhood $N$ of $x$ meeting only $A_{i_1},\ldots,A_{i_n}$. Choose an open neighbourhood $O$ of $x$ with $O\subseteq N$. If $O\cap\overline{A_j}\ne\varnothing$, choose $y\in O\cap\overline{A_j}$; the open neighbourhood $O$ of $y$ then meets $A_j$, so $N$ meets $A_j$ and $j\in\{i_1,\ldots,i_n\}$. [F1, L1]

1.2 The inclusion $\bigcup_i\overline{A_i}\subseteq\overline{\bigcup_iA_i}$ holds because each $\overline{A_i}$ is contained in every closed set containing $A_i$, in particular in $\overline{\bigcup_iA_i}$. [L1]

2.1 Thus $O$ meets only $\overline{A_{i_1}},\ldots,\overline{A_{i_n}}$, so the closed family is locally finite. [step 1.1, F1]

2.2 Let $x\in\overline{\bigcup_iA_i}$ and take $N$ as in step 1.1; if $x\notin\bigcup_i\overline{A_i}$, then for each $i_k$ an open neighbourhood of $x$ misses $A_{i_k}$, and its finite intersection with an open neighbourhood inside $N$ misses every $A_i$, contradicting the closure criterion. [step 1.1, L1]

3.1 Hence $\overline{\bigcup_iA_i}=\bigcup_i\overline{A_i}$ by steps 1.2 and 2.2; if every $A_i$ is closed, the right-hand side is $\bigcup_iA_i$, so that union is closed. [step 1.2, step 2.2, L1] ∎
````

### `lem-paracompact-hausdorff-is-regular`

````markdown
---
id: lem-paracompact-hausdorff-is-regular
kind: lemma
title: "Every paracompact Hausdorff space is regular"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-paracompact-space, def-cover-refinement-and-local-finiteness, lem-locally-finite-unions-and-closures, def-hausdorff-space, def-regular-and-t3-spaces]
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
    - title: "Dartmouth Point-Set Topology, Lecture 25"
      url: "https://math.dartmouth.edu/~rmaguire/teaching/dartmouth_math_054_2022_summer/lectures/2022_summer_point_set_topology_lecture_25.pdf"
    - title: "Topology 262 notes (California State University, Northridge)"
      url: "https://www.csun.edu/~ac53971/research/topology_262.pdf"
pipeline_run: null
---

## Statement

Every paracompact Hausdorff topological space is regular. No choice principle is
used.

## Facts & Assumptions

**Given:** A paracompact Hausdorff space $X$, a closed set $F\subseteq X$, and a point $p\in X\setminus F$.

[F1] Distinct points in a Hausdorff space have disjoint open neighbourhoods ([[def-hausdorff-space]]).

[F2] A paracompact space gives every open cover a locally finite open refining cover ([[def-paracompact-space]]).

[L1] For a locally finite family, closure commutes with union ([[lem-locally-finite-unions-and-closures]]).

[F3] Regularity is separation of a point from a disjoint closed set by disjoint open sets ([[def-regular-and-t3-spaces]]).

## Proof

**Proof technique:** direct.

1.1 For every $x\in F$, Hausdorffness gives disjoint open sets $U,V$ with $x\in U$ and $p\in V$; hence $p\notin\overline U$, since $X\setminus V$ is closed and contains $U$. Thus the family of all open $U$ with $U\cap F\ne\varnothing$ and $p\notin\overline U$, together with $X\setminus F$, is an open cover $\mathcal U$ of $X$. [F1, construct]

2.1 Take a locally finite open cover $\mathcal W$ refining $\mathcal U$, and put $H:=\bigcup\{W\in\mathcal W:W\cap F\ne\varnothing\}$. [F2, step 1.1, choose, construct]

3.1 The set $H$ is open and contains $F$: a member of $\mathcal W$ containing a point of $F$ cannot refine $X\setminus F$, so it occurs in the defining union. [step 1.1, step 2.1]

3.2 Every $W$ occurring in $H$ lies in an eligible $U$ of step 1.1, so $p\notin\overline W$; local finiteness and [L1] give $\overline H=\bigcup\overline W$, whence $p\notin\overline H$. [step 1.1, step 2.1, L1]

4.1 The open sets $X\setminus\overline H$ and $H$ contain $p$ and $F$ respectively and are disjoint. By [F3], $X$ is regular. [step 3.1, step 3.2, F3] ∎
````

