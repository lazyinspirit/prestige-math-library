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

- critical risk (8): 5 declared dependencies; 5 cited facts; existence, choice, uniqueness, or well-definedness; boundary-sensitive language

## Target item — `lem-paracompact-hausdorff-cover-shrinking`

Normalized current SHA-256: `51ecae7021ef8d83ac64c6fbdb32a145a4124a6b7642e31de5c76a01d07bf0a8`

The complete current item follows, including frontmatter:

````markdown
---
id: lem-paracompact-hausdorff-cover-shrinking
kind: lemma
title: 'Under choice, every open cover of a paracompact Hausdorff space has locally finite open refinements $\{V_s\}$ and $\{W_s\}$ with $\overline{V_s}\subseteq W_s\subseteq\overline{W_s}\subseteq U_s$'
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [lem-paracompact-hausdorff-is-regular, lem-regularity-via-closed-neighbourhoods, lem-locally-finite-unions-and-closures, def-paracompact-space, def-axiom-of-choice]
justified_by: []
aliases: []
landmark: true
proof_strategy: constructive
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Dartmouth Point-Set Topology, Lecture 25"
      url: "https://math.dartmouth.edu/~rmaguire/teaching/dartmouth_math_054_2022_summer/lectures/2022_summer_point_set_topology_lecture_25.pdf"
    - title: "Topology 262 notes (California State University, Northridge)"
      url: "https://www.csun.edu/~ac53971/research/topology_262.pdf"
    - title: "R. Gardner, Notes on Munkres Section 41: Paracompactness (East Tennessee State University)"
      url: "https://faculty.etsu.edu/gardnerr/5357/notes/Munkres-41.pdf"
pipeline_run: null
---

## Statement

Assume the Axiom of Choice. If $X$ is paracompact and Hausdorff and
$\mathcal U$ is an open cover, there are a set $S$, a map $s\mapsto U_s$ from
$S$ into $\mathcal U$, and locally finite open covers $\{V_s\}_{s\in S}$ and
$\{W_s\}_{s\in S}$ with
$$\overline{V_s}\subseteq W_s\subseteq\overline{W_s}\subseteq U_s\quad(s\in S).$$

## Facts & Assumptions

**Given:** The Axiom of Choice, a paracompact Hausdorff space $X$, and an open cover $\mathcal U$.

[A1] Every family of nonempty sets has a choice function ([[def-axiom-of-choice]]).

[L1] The space is regular ([[lem-paracompact-hausdorff-is-regular]]).

[L3] In a regular space, $x\in O$ open gives an open $R$ with $x\in R\subseteq\overline R\subseteq O$ ([[lem-regularity-via-closed-neighbourhoods]], implication (a)$\Rightarrow$(b)).

[F1] Every open cover has a locally finite open refinement ([[def-paracompact-space]]).

[L2] Locally finite unions commute with closure ([[lem-locally-finite-unions-and-closures]]).

## Proof

**Proof technique:** constructive.

1.1 We first prove a one-shrink construction for any open cover $\mathcal C$. Let $\mathcal R$ be the family of all open $R$ for which $\overline R\subseteq C$ for some $C\in\mathcal C$. By [L1] and [L3], $\mathcal R$ covers $X$. Take a locally finite open refining cover $\mathcal A$ of $\mathcal R$ by [F1], discard its empty members, and use [A1] to assign to each $A\in\mathcal A$ sets $R(A)\in\mathcal R$ and $C(A)\in\mathcal C$ with $$A\subseteq R(A)\subseteq\overline{R(A)}\subseteq C(A).$$ Then $\overline A\subseteq\overline{R(A)}\subseteq C(A)$. [A1, L1, L3, F1, construct]

2.1 Apply step 1.1 to $\mathcal U$. This gives a locally finite open cover $\{W_s\}_{s\in S}$ and assigned $U_s\in\mathcal U$ such that $\overline{W_s}\subseteq U_s$. [step 1.1]

3.1 Apply step 1.1 again, now to the cover $\{W_s:s\in S\}$. Obtain a locally finite open cover $\{A_t\}_{t\in T}$ and a map $t\mapsto s(t)$ such that $\overline{A_t}\subseteq W_{s(t)}$. For $s\in S$ put $$V_s:=\bigcup\{A_t:s(t)=s\}.$$ The family $\{V_s\}_{s\in S}$ is an open cover. It is locally finite because any neighbourhood meeting only finitely many $A_t$ meets only the corresponding finitely many grouped unions $V_s$. [step 1.1, step 2.1, construct]

4.1 Each subfamily $\{A_t:s(t)=s\}$ is locally finite, so [L2] gives $$\overline{V_s} =\bigcup_{s(t)=s}\overline{A_t}\subseteq W_s.$$ Together with step 2.1 this yields $\overline{V_s}\subseteq W_s\subseteq\overline{W_s}\subseteq U_s$ for every $s$, with both displayed families locally finite open covers. [L2, step 2.1, step 3.1, discharge-construct] ∎

## Remarks

The Axiom of Choice is used to retain the assignments to cover members through the two locally finite refinements. This is a sufficient hypothesis for this construction; no claim is made that it is the exact choice strength.
````

## Wave 8 provenance row for the target

```json
{
  "id": "lem-paracompact-hausdorff-cover-shrinking",
  "statement": "ai-altered",
  "proof": "ai-altered",
  "evidence": "semantic-source",
  "urls": [
    "https://www.csun.edu/~ac53971/research/topology_262.pdf",
    "https://faculty.etsu.edu/gardnerr/5357/notes/Munkres-41.pdf"
  ],
  "rationale": "The sources give the shrinking lemma and the iterated chain of locally finite covers with closure containment. The item exposes the normally implicit Choice used to retain cover assignments and reindexes the two applications, so it is a faithful semantic alteration rather than an exact transcription.",
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
      "fact": "A1",
      "source": "def-axiom-of-choice",
      "source_section": "Definition",
      "quote": "The **Axiom of Choice** (AC) is the following statement.\n\n> Every family of nonempty sets has a choice function\n> ([[def-choice-function]]).\n\nWritten out: for every set $\\mathcal{F}$ all of whose members are nonempty,\nthere exists a function $g$ with domain $\\mathcal{F}$ satisfying $g(S) \\in S$ for\nall $S \\in \\mathcal{F}$.\n\nAn equivalent formulation is that a product of nonempty sets is nonempty: if\n$X_i \\ne \\emptyset$ for every $i \\in I$, then $\\prod_{i \\in I} X_i \\ne \\emptyset$.\nHere $\\prod_{i \\in I} X_i$ is the set of functions $f$ with domain $I$ such that\n$f(i) \\in X_i$ for every $i \\in I$; when a family of nonempty sets is indexed by\nitself, such an $f$ is precisely a choice function for it.",
      "uses": [
        "1.1"
      ]
    },
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
      "fact": "L3",
      "source": "lem-regularity-via-closed-neighbourhoods",
      "source_section": "Statement",
      "quote": "Let $(X, \\mathcal{T})$ be a topological space ([[def-topological-space]]), with\nclosures as in [[def-interior-closure-boundary-top]] and neighbourhoods as in\n[[def-neighbourhood-top]], so that a neighbourhood need not be open. The\nfollowing three conditions are equivalent.\n\n- **(a)** $X$ is regular ([[def-regular-and-t3-spaces]]).\n- **(b)** For every $x \\in X$ and every open $U$ with $x \\in U$ there is an open\n  $V$ with\n  $$x \\in V \\subseteq \\overline{V} \\subseteq U .$$\n- **(c)** Every point of $X$ has a neighbourhood base consisting of **closed**\n  neighbourhoods: for every $x \\in X$ and every neighbourhood $N$ of $x$ there is\n  a closed neighbourhood $K$ of $x$ with $K \\subseteq N$.",
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
        "1.1"
      ]
    },
    {
      "fact": "L2",
      "source": "lem-locally-finite-unions-and-closures",
      "source_section": "Statement",
      "quote": "Let $\\{A_i\\}_{i\\in I}$ be a locally finite family of subsets of a topological\nspace $X$. Then $\\{\\overline{A_i}\\}_{i\\in I}$ is locally finite and\n$$\\overline{\\bigcup_{i\\in I}A_i}=\\bigcup_{i\\in I}\\overline{A_i}.$$\nConsequently, a locally finite union of closed subsets of $X$ is closed.",
      "uses": [
        "4.1"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1-1",
      "claim": "We first prove a one-shrink construction for any open cover $\\mathcal C$. Let $\\mathcal R$ be the family of all open $R$ for which $\\overline R\\subseteq C$ for some $C\\in\\mathcal C$. By [L1] and [L3], $\\mathcal R$ covers $X$. Take a locally finite open refining cover $\\mathcal A$ of $\\mathcal R$ by [F1], discard its empty members, and use [A1] to assign to each $A\\in\\mathcal A$ sets $R(A)\\in\\mathcal R$ and $C(A)\\in\\mathcal C$ with $$A\\subseteq R(A)\\subseteq\\overline{R(A)}\\subseteq C(A).$$ Then $\\overline A\\subseteq\\overline{R(A)}\\subseteq C(A)$. [A1, L1, L3, F1, construct]",
      "step": "1.1",
      "inputs": [
        "L1",
        "L3",
        "F1",
        "A1",
        "construct"
      ]
    },
    {
      "id": "step-2-1",
      "claim": "Apply step 1.1 to $\\mathcal U$. This gives a locally finite open cover $\\{W_s\\}_{s\\in S}$ and assigned $U_s\\in\\mathcal U$ such that $\\overline{W_s}\\subseteq U_s$. [step 1.1]",
      "step": "2.1",
      "inputs": [
        "1.1"
      ]
    },
    {
      "id": "step-3-1",
      "claim": "Apply step 1.1 again, now to the cover $\\{W_s:s\\in S\\}$. Obtain a locally finite open cover $\\{A_t\\}_{t\\in T}$ and a map $t\\mapsto s(t)$ such that $\\overline{A_t}\\subseteq W_{s(t)}$. For $s\\in S$ put $$V_s:=\\bigcup\\{A_t:s(t)=s\\}.$$ The family $\\{V_s\\}_{s\\in S}$ is an open cover. It is locally finite because any neighbourhood meeting only finitely many $A_t$ meets only the corresponding finitely many grouped unions $V_s$. [step 1.1, step 2.1, construct]",
      "step": "3.1",
      "inputs": [
        "1.1",
        "2.1",
        "construct"
      ]
    },
    {
      "id": "step-4-1",
      "claim": "Each subfamily $\\{A_t:s(t)=s\\}$ is locally finite, so [L2] gives $$\\overline{V_s} =\\bigcup_{s(t)=s}\\overline{A_t}\\subseteq W_s.$$ Together with step 2.1 this yields $\\overline{V_s}\\subseteq W_s\\subseteq\\overline{W_s}\\subseteq U_s$ for every $s$, with both displayed families locally finite open covers. [L2, step 2.1, step 3.1, discharge-construct]",
      "step": "4.1",
      "inputs": [
        "L2",
        "2.1",
        "3.1",
        "discharge-construct"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "checked",
      "evidence": "Statement and steps 1.1--4.1 include X empty and the empty cover/refinement."
    },
    {
      "case": "zero",
      "status": "checked",
      "evidence": "Steps 1.1 and 3.1 permit zero surviving members after empty members are discarded."
    },
    {
      "case": "one",
      "status": "checked",
      "evidence": "Steps 2.1--4.1 specialize to singleton covers."
    },
    {
      "case": "degenerate",
      "status": "checked",
      "evidence": "Steps 1.1--4.1 explicitly discard empty refinement members and allow repeated assigned cover members."
    },
    {
      "case": "endpoints",
      "status": "not_applicable",
      "reason": "No ordered interval endpoint occurs."
    },
    {
      "case": "nonempty-choice",
      "status": "checked",
      "evidence": "Step 1.1 invokes A1 only after the eligible containing sets R(A) and C(A) are nonempty by refinement and definition."
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
    "source": "lem-paracompact-hausdorff-cover-shrinking",
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
    "source": "lem-paracompact-hausdorff-cover-shrinking",
    "sourcePage": "partitions-of-unity-and-paracompactness",
    "batch": "wave8-topology",
    "target": "lem-regularity-via-closed-neighbourhoods",
    "declared_target": "lem-regularity-via-closed-neighbourhoods",
    "target_statement_provenance": "ai-altered",
    "targetPage": "separation-axioms",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-paracompact-hausdorff-cover-shrinking",
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
    "source": "lem-paracompact-hausdorff-cover-shrinking",
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
    "source": "lem-paracompact-hausdorff-cover-shrinking",
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

### `lem-regularity-via-closed-neighbourhoods`

````markdown
---
id: lem-regularity-via-closed-neighbourhoods
kind: lemma
title: "A space is regular if and only if every point has a neighbourhood base of closed neighbourhoods, if and only if $x \\in U$ open gives an open $V$ with $x \\in V \\subseteq \\overline{V} \\subseteq U$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-regular-and-t3-spaces, def-neighbourhood-top,
       def-interior-closure-boundary-top, thm-closure-characterisation-top,
       def-topological-space]
justified_by: []
aliases: []
landmark: true
short: "regularity by closed neighbourhoods"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
  audited: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Regular space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Regular_space"
    - title: "J. Munkres, Topology, 2nd ed., §31"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
    - title: "R. Gardner, Introduction to Topology, notes on Munkres Section 31: The Separation Axioms (East Tennessee State University)"
      url: "https://faculty.etsu.edu/gardnerr/5357/notes/Munkres-31.pdf"
pipeline_run: null
---

## Statement

Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]), with
closures as in [[def-interior-closure-boundary-top]] and neighbourhoods as in
[[def-neighbourhood-top]], so that a neighbourhood need not be open. The
following three conditions are equivalent.

- **(a)** $X$ is regular ([[def-regular-and-t3-spaces]]).
- **(b)** For every $x \in X$ and every open $U$ with $x \in U$ there is an open
  $V$ with
  $$x \in V \subseteq \overline{V} \subseteq U .$$
- **(c)** Every point of $X$ has a neighbourhood base consisting of **closed**
  neighbourhoods: for every $x \in X$ and every neighbourhood $N$ of $x$ there is
  a closed neighbourhood $K$ of $x$ with $K \subseteq N$.

## Facts & Assumptions

**Given:** A topological space $(X,\mathcal{T})$, a point $x \in X$, an open set $U$ with $x \in U$, a neighbourhood $N$ of $x$, and a closed set $C$ with $x \notin C$.

[A1] $X$ is regular when for every closed $C$ and every $x \notin C$ there are disjoint open $U_0 \ni x$ and $V_0 \supseteq C$ ([[def-regular-and-t3-spaces]]).

[L1] $N$ is a neighbourhood of $x$ exactly when some open $W$ satisfies $x \in W \subseteq N$; a set is open exactly when it is a neighbourhood of each of its points ([[def-neighbourhood-top]]).

[L2] $\overline{V}$ is the smallest closed superset of $V$: it is closed, contains $V$, and is contained in every closed set containing $V$ ([[thm-closure-characterisation-top]], claim 2, [[def-interior-closure-boundary-top]]).

[L3] $\operatorname{int}(K)$ is the largest open subset of $K$, and $x \in \operatorname{int}(K)$ exactly when $K$ is a neighbourhood of $x$ ([[def-interior-closure-boundary-top]]).

[L4] A set is closed exactly when its complement is open ([[def-topological-space]]).

## Proof

**Proof technique:** direct.

1.1 Assume (a) and let $U$ be open with $x \in U$; then $C := X \setminus U$ is closed by [L4] and $x \notin C$, so [A1] gives disjoint open $V \ni x$ and $W \supseteq C$. [A1, L4, assume-hyp]

1.2 Assume (b) and let $N$ be a neighbourhood of $x$; fix an open $U$ with $x \in U \subseteq N$ by [L1], and let $V$ be as in (b), so $x \in V \subseteq \overline{V} \subseteq U \subseteq N$. [L1, assume-hyp]

1.3 Assume (c) and let $C$ be closed with $x \notin C$; then $X \setminus C$ is open by [L4] and contains $x$, hence is a neighbourhood of $x$ by [L1], so (c) gives a closed neighbourhood $K$ of $x$ with $K \subseteq X \setminus C$. [L1, L4, assume-hyp]

2.1 Under step 1.1: $V \subseteq X \setminus W$, since $V$ and $W$ are disjoint, and $X \setminus W$ is closed by [L4], so $\overline{V} \subseteq X \setminus W$ by [L2]; and $X \setminus W \subseteq X \setminus C = U$ because $C \subseteq W$. [step 1.1, L2, L4]

2.2 Under step 1.2: $\overline{V}$ is a closed set containing the open $V \ni x$, so it is a neighbourhood of $x$ by [L1], and it is a closed neighbourhood of $x$ contained in $N$. [step 1.2, L1, L2]

2.3 Under step 1.3: put $V_0 := \operatorname{int}(K)$, which is open and contains $x$ by [L3] since $K$ is a neighbourhood of $x$; and put $W_0 := X \setminus K$, which is open by [L4] since $K$ is closed. [step 1.3, L3, L4]

3.1 Step 2.1 gives $x \in V \subseteq \overline{V} \subseteq U$ with $V$ open, so (a) implies (b). [step 2.1]

3.2 Step 2.2 gives, for every neighbourhood $N$ of $x$, a closed neighbourhood of $x$ inside $N$, so (b) implies (c). [step 2.2]

3.3 Under step 2.3: $V_0 \cap W_0 = \operatorname{int}(K) \cap (X \setminus K) = \varnothing$ because $\operatorname{int}(K) \subseteq K$ by [L3], and $C \subseteq X \setminus K = W_0$ because $K \subseteq X \setminus C$; so $V_0$ and $W_0$ are disjoint open sets containing $x$ and $C$ respectively, and (c) implies (a). [step 2.3, A1, L3]

4.1 By steps 3.1, 3.2 and 3.3 the three conditions (a), (b) and (c) are equivalent. [step 3.1, step 3.2, step 3.3] ∎

## Remarks

- **Clause (b) is the working form.** Every application of regularity below uses it in the shape "shrink an open set around a point so that even its closure stays inside", which is what makes regularity behave like a one-sided version of the normality shrinking lemma proved later on this page.

- **Clause (c) is what makes a clopen basis decisive.** If a space has a basis of clopen sets then the basic sets containing a point are closed neighbourhoods of it and form a neighbourhood base ([[def-neighbourhood-top]]), so (c) holds and the space is regular with no further work. That is exactly the route by which the ordinal spaces later on this page are shown to be regular.

- **No separation hypothesis is used anywhere above.** Points need not be closed, and the lemma is a statement about regularity alone; combining it with $T_1$ is the separate step that produces $T_3$.
````

