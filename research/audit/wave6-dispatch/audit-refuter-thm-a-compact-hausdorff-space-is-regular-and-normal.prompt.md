# Audit proof-refuter brief — Wave 6, step A6

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

## Target item — `thm-a-compact-hausdorff-space-is-regular-and-normal`

Normalized current SHA-256: `34fa67122a5cccfa503db4a310e9d31b1f8dd1ad3ec5c49ed300931464959f36`

The complete current item follows, including frontmatter:

````markdown
---
id: thm-a-compact-hausdorff-space-is-regular-and-normal
kind: theorem
title: "A compact Hausdorff space is regular and normal, hence $T_3$ and $T_4$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-compact-subset-of-a-hausdorff-space-is-closed, def-compact-space,
       thm-closed-subspace-of-a-compact-space-is-compact, def-regular-and-t3-spaces,
       def-normal-and-t4-spaces, def-t0-and-t1-spaces, def-hausdorff-space,
       lem-urysohn-sits-between-hausdorff-and-regular-plus-t1, def-topological-space]
justified_by: []
aliases: [thm-compact-hausdorff-is-normal]
landmark: true
short: "compact Hausdorff implies regular and normal"
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: claude-fable-5
    verdict: certify
    date: 2026-07-29
    scope: page
    delegated_by: owner
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Normal space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Normal_space"
    - title: "Compact space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Compact_space"
    - title: "Separation axiom (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Separation_axiom"
    - title: "A. Hatcher, Topology Notes"
      url: "https://pi.math.cornell.edu/~hatcher/Top/TopNotes.pdf"
pipeline_run: null
---

## Statement

Let $X$ be a compact ([[def-compact-space]]) Hausdorff
([[def-hausdorff-space]]) topological space. Then:

1. $X$ is **regular** ([[def-regular-and-t3-spaces]]);
2. $X$ is **normal** ([[def-normal-and-t4-spaces]]);
3. $X$ is $T_1$ ([[def-t0-and-t1-spaces]]), and hence $X$ is $T_3$ and $T_4$.

Following [[def-regular-and-t3-spaces]] and [[def-normal-and-t4-spaces]],
*regular* and *normal* name the separation conditions alone and the numerals
$T_3$ and $T_4$ name their conjunctions with $T_1$; claim 3 is what supplies the
$T_1$ half, and it is stated separately for that reason.

**Nothing stronger is claimed.** In particular it is not asserted here that a
compact Hausdorff space is completely regular
([[def-regular-and-t3-spaces]] distinguishes the two conditions), and no
continuous real-valued function is produced anywhere below.

## Facts & Assumptions

**Given:** A compact Hausdorff topological space $X$.

[A1] $X$ is regular when for every closed $C \subseteq X$ and every $x \in X \setminus C$ there are disjoint open $U \ni x$ and $V \supseteq C$; the case $C = \varnothing$ is met by $U = X$ and $V = \varnothing$, and $T_3$ is regular together with $T_1$ ([[def-regular-and-t3-spaces]], [[def-t0-and-t1-spaces]]).

[A2] $X$ is normal when for all disjoint closed $A, B \subseteq X$ there are disjoint open $U \supseteq A$ and $V \supseteq B$; the cases $A = \varnothing$ and $B = \varnothing$ are met by $\varnothing$ together with $X$, and $T_4$ is normal together with $T_1$ ([[def-normal-and-t4-spaces]], [[def-t0-and-t1-spaces]]).

[A3] $X$ is a topological space, so a subset is closed exactly when its complement is open ([[def-topological-space]]).

[L1] A closed subspace of a compact space is compact ([[thm-closed-subspace-of-a-compact-space-is-compact]], [[def-compact-space]]).

[L2] In a Hausdorff space, a point and a disjoint compact set have disjoint open neighbourhoods, and two disjoint compact sets have disjoint open neighbourhoods ([[thm-compact-subset-of-a-hausdorff-space-is-closed]], [[def-hausdorff-space]], [[def-compact-space]]).

[L3] Every Hausdorff space is $T_1$ ([[lem-urysohn-sits-between-hausdorff-and-regular-plus-t1]], claim 2, [[def-t0-and-t1-spaces]]).

## Proof

**Proof technique:** direct.

1.1 Let $C \subseteq X$ be closed and let $x \in X \setminus C$; since $X$ is compact and $C$ is closed in $X$, the subspace $C$ is compact, and $x$ does not lie in it. [A3, L1]

1.2 Let $A, B \subseteq X$ be closed with $A \cap B = \varnothing$; since $X$ is compact and both are closed in $X$, both subspaces $A$ and $B$ are compact. [A3, L1]

1.3 $X$ is $T_1$, being Hausdorff. [L3]

2.1 By [L2], applied to the point $x$ and the disjoint compact set $C$ of step 1.1, there are disjoint open $U \ni x$ and $V \supseteq C$; as $C$ and $x$ were arbitrary this is exactly the condition of [A1], so $X$ is regular, which is claim 1. [step 1.1, A1, L2]

2.2 By [L2], applied to the two disjoint compact sets $A$ and $B$ of step 1.2, there are disjoint open $U \supseteq A$ and $V \supseteq B$; as $A$ and $B$ were arbitrary this is the condition of [A2], so $X$ is normal, which is claim 2. [step 1.2, A2, L2]

3.1 By step 1.3 the space is $T_1$; with step 2.1 it is regular and $T_1$, hence $T_3$, and with step 2.2 it is normal and $T_1$, hence $T_4$. This is claim 3. [step 1.3, step 2.1, step 2.2, A1, A2]

4.1 Steps 2.1, 2.2 and 3.1 are claims 1, 2 and 3, so a compact Hausdorff space is regular, normal, $T_3$ and $T_4$. [step 2.1, step 2.2, step 3.1] ∎

## Remarks

- **The whole content is that "closed" and "compact" coincide here, in the direction that is needed.** Regularity asks a point to be separated from a closed set and normality asks two closed sets to be separated; compactness of the ambient space converts each closed set into a compact one, and the separation of compact sets in a Hausdorff space is what [[thm-compact-subset-of-a-hausdorff-space-is-closed]] supplies. No new separation argument is run.

- **Why compactness of $X$ is needed and not just of the sets separated.** The hypothesis is used only through [L1], to know that an arbitrary closed subset of $X$ is compact. A Hausdorff space in which the sets to be separated happen to be compact is separated by [L2] alone and needs no hypothesis on the ambient space at all; what compactness of $X$ buys is that *every* closed set is such a set.

- **The degenerate cases are not a gap.** If $C$, $A$ or $B$ is empty the required open sets are named outright in [A1] and [A2], so the argument does not depend on any nonemptiness hidden in the compact-separation clauses.
````

## Proof contract for the target

```json
{
  "citations": [
    {
      "fact": "A1",
      "source": "def-regular-and-t3-spaces",
      "source_section": "Definition",
      "quote": "- $X$ is **regular** when a point can be separated from a closed set not containing it: for every closed $C \\subseteq X$ and every $x \\in X \\setminus C$ there are $U, V \\in \\mathcal{T}$ with $$x \\in U, \\qquad C \\subseteq V, \\qquad U \\cap V = \\varnothing .$$ - $X$ is **$T_3$** when it is regular **and** $T_1$ ([[def-t0-and-t1-spaces]]).",
      "uses": [
        "2.1",
        "3.1"
      ]
    },
    {
      "fact": "A1",
      "source": "def-t0-and-t1-spaces",
      "source_section": "Definition",
      "quote": "- $X$ is **$T_0$**, or a **Kolmogorov space**, when any two distinct points are *topologically distinguishable*: for all $x, y \\in X$ with $x \\ne y$ there is an open set containing exactly one of $x$ and $y$. - $X$ is **$T_1$**, or a **Frechet space**, when each of any two distinct points has an open set containing it and missing the other: for all $x, y \\in X$ with $x \\ne y$ there are $U, V \\in \\mathcal{T}$ with",
      "uses": [
        "2.1",
        "3.1"
      ]
    },
    {
      "fact": "A2",
      "source": "def-normal-and-t4-spaces",
      "source_section": "Definition",
      "quote": "- $X$ is **normal** when any two disjoint closed sets can be separated by disjoint open sets: for all closed $A, B \\subseteq X$ with $A \\cap B = \\varnothing$ there are $U, V \\in \\mathcal{T}$ with $$A \\subseteq U, \\qquad B \\subseteq V, \\qquad U \\cap V = \\varnothing .$$ - $X$ is **$T_4$** when it is normal **and** $T_1$ ([[def-t0-and-t1-spaces]]).",
      "uses": [
        "2.2",
        "3.1"
      ]
    },
    {
      "fact": "A2",
      "source": "def-t0-and-t1-spaces",
      "source_section": "Definition",
      "quote": "- $X$ is **$T_0$**, or a **Kolmogorov space**, when any two distinct points are *topologically distinguishable*: for all $x, y \\in X$ with $x \\ne y$ there is an open set containing exactly one of $x$ and $y$. - $X$ is **$T_1$**, or a **Frechet space**, when each of any two distinct points has an open set containing it and missing the other: for all $x, y \\in X$ with $x \\ne y$ there are $U, V \\in \\mathcal{T}$ with",
      "uses": [
        "2.2",
        "3.1"
      ]
    },
    {
      "fact": "A3",
      "source": "def-topological-space",
      "source_section": "Definition",
      "quote": "The members of $\\mathcal{T}$ are the **open** sets of $(X,\\mathcal{T})$. A subset $F \\subseteq X$ is **closed** when its complement $X \\setminus F$ is open, and **clopen** when it is both open and closed. By (T1) both $\\varnothing$ and $X$ are clopen. *Open and closed are not opposites*: a set may be neither, and it may be both, so \"not open\" is never a synonym for \"closed\".",
      "uses": [
        "1.1",
        "1.2"
      ]
    },
    {
      "fact": "L1",
      "source": "thm-closed-subspace-of-a-compact-space-is-compact",
      "source_section": "Statement",
      "quote": "1. **Closed in compact is compact.** If $(X, \\mathcal{T})$ is compact and $F \\subseteq X$ is closed in $X$, then $F$ is a compact subset of $X$. 2. **Finite unions.** If $n \\in \\mathbb{N}$ and $K_0, \\dots, K_n$ are compact subsets of $X$, then $K_0 \\cup \\dots \\cup K_n$ is a compact subset of $X$. The union of the empty list is $\\varnothing$, which is a compact subset of every space.",
      "uses": [
        "1.1",
        "1.2"
      ]
    },
    {
      "fact": "L1",
      "source": "def-compact-space",
      "source_section": "Definition",
      "quote": "- An **open cover** of $(X,\\mathcal{T})$ is a family $\\mathcal{U} \\subseteq \\mathcal{T}$ of open sets with $X = \\bigcup \\mathcal{U}$, where $\\bigcup \\mathcal{U} = \\{\\, x \\in X : x \\in U \\text{ for some } U \\in \\mathcal{U} \\,\\}$. - A **subcover** of $\\mathcal{U}$ is a subfamily $\\mathcal{V} \\subseteq \\mathcal{U}$ that is itself an open cover. - A family $\\mathcal{V}$ of sets is **finite** when $\\mathcal{V} = \\varnothing$ or there are $n \\in \\mathbb{N}$ and sets $V_0, \\dots, V_n$ with $\\mathcal{V} = \\{V_0, \\dots, V_n\\}$; repetitions in the list are allowed and harmless. - $(X,\\mathcal{T})$ is **compact** when every open cover of it has a finite subcover: for every open cover $\\mathcal{U}$, either $X = \\varnothing$ and the empty subfamily covers it, or there are $n \\in \\mathbb{N}$ and $U_0, \\dots, U_n \\in \\mathcal{U}$ with $$X = U_0 \\cup \\dots \\cup U_n .$$ - A subset $A \\subseteq X$ is a **compact subset** of $X$ when the subspace $(A, \\mathcal{T}_A)$ is a compact topological space, $\\mathcal{T}_A$ being the subspace topology ([[def-subspace-topology-top]]).",
      "uses": [
        "1.1",
        "1.2"
      ]
    },
    {
      "fact": "L2",
      "source": "thm-compact-subset-of-a-hausdorff-space-is-closed",
      "source_section": "Statement",
      "quote": "Let $(X, \\mathcal{T})$ be a Hausdorff topological space ([[def-hausdorff-space]], [[def-topological-space]]), with compact subsets as in [[def-compact-space]]. Then:",
      "uses": [
        "2.1",
        "2.2"
      ]
    },
    {
      "fact": "L2",
      "source": "def-hausdorff-space",
      "source_section": "Definition",
      "quote": "A topological space $(X, \\mathcal{T})$ ([[def-topological-space]]) is **Hausdorff** when any two distinct points are separated by disjoint open sets: for all $x, y \\in X$ with $x \\ne y$ there are $U, V \\in \\mathcal{T}$ with",
      "uses": [
        "2.1",
        "2.2"
      ]
    },
    {
      "fact": "L2",
      "source": "def-compact-space",
      "source_section": "Definition",
      "quote": "- An **open cover** of $(X,\\mathcal{T})$ is a family $\\mathcal{U} \\subseteq \\mathcal{T}$ of open sets with $X = \\bigcup \\mathcal{U}$, where $\\bigcup \\mathcal{U} = \\{\\, x \\in X : x \\in U \\text{ for some } U \\in \\mathcal{U} \\,\\}$. - A **subcover** of $\\mathcal{U}$ is a subfamily $\\mathcal{V} \\subseteq \\mathcal{U}$ that is itself an open cover. - A family $\\mathcal{V}$ of sets is **finite** when $\\mathcal{V} = \\varnothing$ or there are $n \\in \\mathbb{N}$ and sets $V_0, \\dots, V_n$ with $\\mathcal{V} = \\{V_0, \\dots, V_n\\}$; repetitions in the list are allowed and harmless. - $(X,\\mathcal{T})$ is **compact** when every open cover of it has a finite subcover: for every open cover $\\mathcal{U}$, either $X = \\varnothing$ and the empty subfamily covers it, or there are $n \\in \\mathbb{N}$ and $U_0, \\dots, U_n \\in \\mathcal{U}$ with $$X = U_0 \\cup \\dots \\cup U_n .$$ - A subset $A \\subseteq X$ is a **compact subset** of $X$ when the subspace $(A, \\mathcal{T}_A)$ is a compact topological space, $\\mathcal{T}_A$ being the subspace topology ([[def-subspace-topology-top]]).",
      "uses": [
        "2.1",
        "2.2"
      ]
    },
    {
      "fact": "L3",
      "source": "lem-urysohn-sits-between-hausdorff-and-regular-plus-t1",
      "source_section": "Statement",
      "quote": "Let $(X, \\mathcal{T})$ be a topological space ([[def-topological-space]]). Then: 1. If $X$ is Urysohn ([[def-urysohn-space]]) then $X$ is Hausdorff ([[def-hausdorff-space]]). 2. If $X$ is Hausdorff then $X$ is $T_1$, and hence $T_0$ ([[def-t0-and-t1-spaces]]). 3. If $X$ is regular ([[def-regular-and-t3-spaces]]) and $T_1$ — that is, if $X$ is $T_3$ — then $X$ is Urysohn. Consequently $T_3$ implies $T_{2\\frac12}$, which implies $T_2$, which implies $T_1$, which implies $T_0$. Nothing here asserts that any of the four implications reverses; two of the failures are recorded among this page's false statements.",
      "uses": [
        "1.3"
      ]
    },
    {
      "fact": "L3",
      "source": "def-t0-and-t1-spaces",
      "source_section": "Definition",
      "quote": "- $X$ is **$T_0$**, or a **Kolmogorov space**, when any two distinct points are *topologically distinguishable*: for all $x, y \\in X$ with $x \\ne y$ there is an open set containing exactly one of $x$ and $y$. - $X$ is **$T_1$**, or a **Frechet space**, when each of any two distinct points has an open set containing it and missing the other: for all $x, y \\in X$ with $x \\ne y$ there are $U, V \\in \\mathcal{T}$ with",
      "uses": [
        "1.3"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1.1",
      "claim": "Let $C \\subseteq X$ be closed and let $x \\in X \\setminus C$; since $X$ is compact and $C$ is closed in $X$, the subspace $C$ is compact, and $x$ does not lie in it. [A3, L1]",
      "step": "1.1",
      "inputs": [
        "A3",
        "L1"
      ]
    },
    {
      "id": "step-1.2",
      "claim": "Let $A, B \\subseteq X$ be closed with $A \\cap B = \\varnothing$; since $X$ is compact and both are closed in $X$, both subspaces $A$ and $B$ are compact. [A3, L1]",
      "step": "1.2",
      "inputs": [
        "A3",
        "L1"
      ]
    },
    {
      "id": "step-1.3",
      "claim": "$X$ is $T_1$, being Hausdorff. [L3]",
      "step": "1.3",
      "inputs": [
        "L3"
      ]
    },
    {
      "id": "step-2.1",
      "claim": "By [L2], applied to the point $x$ and the disjoint compact set $C$ of step 1.1, there are disjoint open $U \\ni x$ and $V \\supseteq C$; as $C$ and $x$ were arbitrary this is exactly the condition of [A1], so $X$ is regular, which is claim 1. [step 1.1, A1, L2]",
      "step": "2.1",
      "inputs": [
        "L2",
        "1.1",
        "A1"
      ]
    },
    {
      "id": "step-2.2",
      "claim": "By [L2], applied to the two disjoint compact sets $A$ and $B$ of step 1.2, there are disjoint open $U \\supseteq A$ and $V \\supseteq B$; as $A$ and $B$ were arbitrary this is the condition of [A2], so $X$ is normal, which is claim 2. [step 1.2, A2, L2]",
      "step": "2.2",
      "inputs": [
        "L2",
        "1.2",
        "A2"
      ]
    },
    {
      "id": "step-3.1",
      "claim": "By step 1.3 the space is $T_1$; with step 2.1 it is regular and $T_1$, hence $T_3$, and with step 2.2 it is normal and $T_1$, hence $T_4$. This is claim 3. [step 1.3, step 2.1, step 2.2, A1, A2]",
      "step": "3.1",
      "inputs": [
        "1.3",
        "2.1",
        "2.2",
        "A1",
        "A2"
      ]
    },
    {
      "id": "step-4.1",
      "claim": "Steps 2.1, 2.2 and 3.1 are claims 1, 2 and 3, so a compact Hausdorff space is regular, normal, $T_3$ and $T_4$. [step 2.1, step 2.2, step 3.1] ∎",
      "step": "4.1",
      "inputs": [
        "2.1",
        "2.2",
        "3.1"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "checked",
      "evidence": "statement and step 1.1: the empty-domain or empty-space instance is vacuous or formula-defined and selects no point"
    },
    {
      "case": "zero",
      "status": "not_applicable",
      "reason": "no independently varying cardinal, dimension, norm, or scalar parameter has a separate zero case"
    },
    {
      "case": "one",
      "status": "checked",
      "evidence": "statement and step 1.1: the singleton-space or singleton-subset instance is included and all separation conditions become vacuous or immediate"
    },
    {
      "case": "degenerate",
      "status": "not_applicable",
      "reason": "the statement has no separate coincident-map, constant-map, singleton, or collapsed-parameter branch"
    },
    {
      "case": "endpoints",
      "status": "not_applicable",
      "reason": "no interval endpoint or one-sided boundary enters the statement or proof"
    },
    {
      "case": "nonempty-choice",
      "status": "not_applicable",
      "reason": "the proof uses only formula-defined maps, fixed quantified data, and cited implications; it selects from no asserted nonempty family"
    },
    {
      "case": "iff-forward",
      "status": "not_applicable",
      "reason": "the statement is not a biconditional"
    },
    {
      "case": "iff-reverse",
      "status": "not_applicable",
      "reason": "the statement is not a biconditional"
    }
  ],
  "finite_smoke": []
}
```

## Generated audit-manifest relationships for the target

```json
[
  {
    "source": "thm-a-compact-hausdorff-space-is-regular-and-normal",
    "sourcePage": "hausdorff-via-the-diagonal",
    "batch": "wave6-topology",
    "target": "thm-compact-subset-of-a-hausdorff-space-is-closed",
    "declared_target": "thm-compact-subset-of-a-hausdorff-space-is-closed",
    "target_statement_provenance": "ai-altered",
    "targetPage": "compactness",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-a-compact-hausdorff-space-is-regular-and-normal",
    "sourcePage": "hausdorff-via-the-diagonal",
    "batch": "wave6-topology",
    "target": "def-compact-space",
    "declared_target": "def-compact-space",
    "target_statement_provenance": "ai-altered",
    "targetPage": "compactness",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-a-compact-hausdorff-space-is-regular-and-normal",
    "sourcePage": "hausdorff-via-the-diagonal",
    "batch": "wave6-topology",
    "target": "thm-closed-subspace-of-a-compact-space-is-compact",
    "declared_target": "thm-closed-subspace-of-a-compact-space-is-compact",
    "target_statement_provenance": "ai-altered",
    "targetPage": "compactness",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-a-compact-hausdorff-space-is-regular-and-normal",
    "sourcePage": "hausdorff-via-the-diagonal",
    "batch": "wave6-topology",
    "target": "def-regular-and-t3-spaces",
    "declared_target": "def-regular-and-t3-spaces",
    "target_statement_provenance": "literature-derived",
    "targetPage": "separation-axioms",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-a-compact-hausdorff-space-is-regular-and-normal",
    "sourcePage": "hausdorff-via-the-diagonal",
    "batch": "wave6-topology",
    "target": "def-normal-and-t4-spaces",
    "declared_target": "def-normal-and-t4-spaces",
    "target_statement_provenance": "literature-derived",
    "targetPage": "separation-axioms",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-a-compact-hausdorff-space-is-regular-and-normal",
    "sourcePage": "hausdorff-via-the-diagonal",
    "batch": "wave6-topology",
    "target": "def-t0-and-t1-spaces",
    "declared_target": "def-t0-and-t1-spaces",
    "target_statement_provenance": "literature-derived",
    "targetPage": "separation-axioms",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-a-compact-hausdorff-space-is-regular-and-normal",
    "sourcePage": "hausdorff-via-the-diagonal",
    "batch": "wave6-topology",
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
    "source": "thm-a-compact-hausdorff-space-is-regular-and-normal",
    "sourcePage": "hausdorff-via-the-diagonal",
    "batch": "wave6-topology",
    "target": "lem-urysohn-sits-between-hausdorff-and-regular-plus-t1",
    "declared_target": "lem-urysohn-sits-between-hausdorff-and-regular-plus-t1",
    "target_statement_provenance": "ai-altered",
    "targetPage": "separation-axioms",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-a-compact-hausdorff-space-is-regular-and-normal",
    "sourcePage": "hausdorff-via-the-diagonal",
    "batch": "wave6-topology",
    "target": "def-topological-space",
    "declared_target": "def-topological-space",
    "target_statement_provenance": "ai-altered",
    "targetPage": "topological-spaces-and-continuity",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  }
]
```

## Full text of every cited or declared item (9)

### `def-compact-space`

````markdown
---
id: def-compact-space
kind: definition
title: "Open cover, subcover, and compact topological space; a compact subset is a subspace that is compact in its own right"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-topological-space, def-subspace-topology-top, def-standard-topologies, def-countable, def-metric-compactness]
justified_by: []
aliases: [def-compact-topological-space, def-open-cover-top]
landmark: true
short: "open cover, compact space"
verification:
  precheck: n/a
  verified:
    model: gpt-5.6-sol-codex-subscription
    verdict: certify
    date: 2026-08-05
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Compact space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Compact_space"
    - title: "Cover (topology) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cover_(topology)"
    - title: "J. Munkres, Topology, 2nd ed., §26"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
    - title: "Stacks Project, Section 5.12: Quasi-compact spaces and maps"
      url: "https://stacks.math.columbia.edu/tag/0059"
pipeline_run: null
---
## Definition

Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]).

- An **open cover** of $(X,\mathcal{T})$ is a family
  $\mathcal{U} \subseteq \mathcal{T}$ of open sets with $X = \bigcup \mathcal{U}$,
  where $\bigcup \mathcal{U} = \{\, x \in X : x \in U \text{ for some } U \in \mathcal{U} \,\}$.
- A **subcover** of $\mathcal{U}$ is a subfamily $\mathcal{V} \subseteq \mathcal{U}$
  that is itself an open cover.
- A family $\mathcal{V}$ of sets is **finite** when $\mathcal{V} = \varnothing$ or
  there are $n \in \mathbb{N}$ and sets $V_0, \dots, V_n$ with
  $\mathcal{V} = \{V_0, \dots, V_n\}$; repetitions in the list are allowed and
  harmless.
- $(X,\mathcal{T})$ is **compact** when every open cover of it has a finite
  subcover: for every open cover $\mathcal{U}$, either $X = \varnothing$ and the
  empty subfamily covers it, or there are $n \in \mathbb{N}$ and
  $U_0, \dots, U_n \in \mathcal{U}$ with
  $$X = U_0 \cup \dots \cup U_n .$$
- A subset $A \subseteq X$ is a **compact subset** of $X$ when the subspace
  $(A, \mathcal{T}_A)$ is a compact topological space, $\mathcal{T}_A$ being the
  subspace topology ([[def-subspace-topology-top]]).

**Compactness of a subset is defined intrinsically, and only intrinsically.**
The last clause speaks about the subspace $(A, \mathcal{T}_A)$ and its own open
sets, not about families of open subsets of the ambient $X$. The two readings do
agree, but that is a theorem and not a convention: it is
[[lem-compactness-of-a-subspace-is-ambient]], and no item of this library may use
the ambient reading without citing it. Taking the intrinsic reading makes
compactness a property of the topological space $(A, \mathcal{T}_A)$ alone.
Hence it is preserved when $A$ is embedded homeomorphically as a subspace, or
when another ambient space induces the same topology on $A$; it need not be
preserved if the induced topology changes. This is exactly the convention already fixed for
metric spaces by [[def-metric-compactness]], and the agreement of that
definition with this one is [[thm-compactness-agrees-with-metric-compactness]].

**The empty space is compact**, since the empty subfamily of any family covers
it; this is the reason the clause above is written with the two cases. Every
space listed as $\{x_0, \dots, x_n\}$ is compact too: given a cover, each $x_i$
lies in some member, and finitely many members named in this way already cover.
So every finite space is compact, whatever its topology, and in particular the
discrete topology on a finite set is compact while the discrete topology on an
infinite set is not ([[def-standard-topologies]]).

**The finiteness convention.** "Finite" above is the listing form. It agrees with
the definition of finiteness by equinumerosity with a natural number
([[def-countable]]), in both directions, and the agreement is the one already
discharged in [[def-metric-compactness]]: a nonempty set equinumerous with
$m \ge 1$ is listable, and a set listed as $\{a_0, \dots, a_n\}$ injects into
$\sigma(n)$ by sending $x$ to the least $i \le n$ with $a_i = x$. Neither
direction uses a choice principle; the second selects nothing, taking a least
index instead.

**Quasicompact is not used here.** Some authors, following Bourbaki, reserve
*compact* for a space that is both compact in the above sense and Hausdorff, and
call the open-cover condition alone *quasicompact*. This library follows the more
widely adopted convention: **compact** means the open-cover condition and nothing
more, and a Hausdorff hypothesis is always written out. The fork is recorded in
[[rem-compactness-conventions-and-choice-ledger]].

## Remarks

**Why open covers rather than covers by arbitrary sets.** Nothing in the
definition would break if $\mathcal{U}$ were allowed to consist of arbitrary
subsets of $X$, but the resulting notion would be uninteresting: every space is
covered by its singletons, and only a finite space would survive. Openness of the
members is what makes the condition a genuine restriction, and it is what
[[lem-compactness-of-a-subspace-is-ambient]] has to keep track of when the
ambient space changes.

**A warning about the word "cover".** A family may cover $A \subseteq X$ without
being a family of subsets of $A$: the members are open subsets of $X$ and their
union merely contains $A$. That is the ambient reading, and it is a different
statement from "$\mathcal{U}$ is an open cover of the space
$(A, \mathcal{T}_A)$", whose members are open subsets of $A$. Which of the two is
meant is written out everywhere on this page.
````

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

### `def-regular-and-t3-spaces`

````markdown
---
id: def-regular-and-t3-spaces
kind: definition
title: "Regular spaces and $T_3$ spaces, with the source disagreement over whether regularity includes $T_1$ stated explicitly"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-topological-space, def-t0-and-t1-spaces, def-hausdorff-space,
       def-neighbourhood-top, def-standard-topologies]
justified_by: []
aliases: [def-regular-space, def-t3-space]
landmark: true
short: "regular space, $T_3$ space"
verification:
  precheck: n/a
  verified:
    model: claude-sonnet-5
    verdict: certify
    date: 2026-08-06
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Regular space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Regular_space"
    - title: "Separation axiom (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Separation_axiom"
    - title: "J. Munkres, Topology, 2nd ed., §31"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
    - title: "R. Gardner, Introduction to Topology, notes on Munkres Section 31: The Separation Axioms (East Tennessee State University)"
      url: "https://faculty.etsu.edu/gardnerr/5357/notes/Munkres-31.pdf"
pipeline_run: null
---

## Definition

Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]).

- $X$ is **regular** when a point can be separated from a closed set not
  containing it: for every closed $C \subseteq X$ and every
  $x \in X \setminus C$ there are $U, V \in \mathcal{T}$ with
  $$x \in U, \qquad C \subseteq V, \qquad U \cap V = \varnothing .$$
- $X$ is **$T_3$** when it is regular **and** $T_1$ ([[def-t0-and-t1-spaces]]).

Since an open set containing a point is an open neighbourhood of it
([[def-neighbourhood-top]]), regularity reads: $x$ and $C$ have disjoint open
neighbourhoods. The case $C = \varnothing$ is allowed and is satisfied by
$U = X$, $V = \varnothing$, so no nonemptiness is hidden in the condition.

**The convention fork, and this library's side of it.** Textbooks disagree about
whether the word *regular* carries a $T_1$ hypothesis. Munkres builds it in,
defining a regular space to be one in which points are closed and the separation
condition above holds; Kelley, Willard and Engelking do not, and reserve $T_3$
for the conjunction. **This library takes the second side**: *regular* names the
separation condition alone, $T_3$ names regular plus $T_1$, and every statement
that needs points to be closed writes the $T_1$ hypothesis out. The reason is
that the two halves are genuinely independent and each is used alone below: the
indiscrete topology on a two-point set is regular and not $T_0$
([[def-standard-topologies]]), and the cofinite topology on an infinite set is
$T_1$ and not regular, both witnessed on the companion page.

**Regularity alone implies no other separation axiom.** It does not imply $T_0$,
$T_1$ or Hausdorff ([[def-hausdorff-space]]): in the indiscrete topology on a set
$X$ the only closed sets are $\varnothing$ and $X$, so the only pair $(C, x)$ to
be separated has $C = \varnothing$, and $U = X$, $V = \varnothing$ separates it;
yet no two distinct points are distinguished by any open set. Conversely $T_1$
does not imply regularity. It is the *conjunction* $T_3$ that sits above
Hausdorff in the hierarchy, and the proof of that is three items below.

## Remarks

- **A regular space is not required to separate two closed sets**, which is the
  stronger condition of normality defined later on this page; and a normal space
  is not required to separate a point from a closed set, since a point need not
  be closed. Normality does not imply regularity, and the witness is Sierpinski
  space on the companion page. Whether regularity implies normality is a
  question this page leaves open, and no statement here asserts an answer
  ([[def-normal-and-t4-spaces]]).

- **What regularity is really about.** The reformulation proved next — every
  point has a neighbourhood base of closed neighbourhoods — is the form in which
  regularity is used in practice, and the form in which it is verified for the
  ordinal spaces later on this page, whose basis consists of clopen sets.

- **The numeral.** Because of the fork above, "$T_3$" in the literature may mean
  either what is defined here or the bare separation condition. This library
  always writes the numeral for the conjunction and never uses it to abbreviate
  the separation condition alone ([[rem-separation-axiom-conventions]]).
````

### `def-t0-and-t1-spaces`

````markdown
---
id: def-t0-and-t1-spaces
kind: definition
title: "$T_0$ (Kolmogorov) and $T_1$ (Frechet) spaces"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-topological-space, def-neighbourhood-top, def-interior-closure-boundary-top,
       def-standard-topologies]
justified_by: []
aliases: [def-t0-space, def-t1-space, def-kolmogorov-space, def-frechet-space]
landmark: true
short: "$T_0$ and $T_1$ spaces"
verification:
  precheck: n/a
  verified:
    model: gpt-5.6-sol-codex-subscription
    verdict: certify
    date: 2026-08-03
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Kolmogorov space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Kolmogorov_space"
    - title: "T1 space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/T1_space"
    - title: "Separation axiom (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Separation_axiom"
    - title: "J. Munkres, Topology, 2nd ed., §17"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
pipeline_run: null
---

## Definition

Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]).

- $X$ is **$T_0$**, or a **Kolmogorov space**, when any two distinct points are
  *topologically distinguishable*: for all $x, y \in X$ with $x \ne y$ there is
  an open set containing exactly one of $x$ and $y$.
- $X$ is **$T_1$**, or a **Frechet space**, when each of any two distinct points
  has an open set containing it and missing the other: for all $x, y \in X$ with
  $x \ne y$ there are $U, V \in \mathcal{T}$ with

$$x \in U, \quad y \notin U, \qquad y \in V, \quad x \notin V .$$

Nothing is asserted about a pair of equal points, so a space with at most one
point satisfies both conditions vacuously.

Since an open set containing a point is an open neighbourhood of it
([[def-neighbourhood-top]]), both conditions may be read with "open
neighbourhood" in place of "open set"; and by the same equivalence recorded in
[[def-neighbourhood-top]] they may be read with arbitrary neighbourhoods, since
a neighbourhood of $x$ contains an open one and an open neighbourhood is a
neighbourhood.

**Every $T_1$ space is $T_0$, and this is discharged here** rather than left to
the reader, because it is the bottom arrow of the whole hierarchy on this page.
Let $x \ne y$ and take $U, V$ as in the $T_1$ condition. Then $U$ is an open set
containing $x$ and not $y$, so it contains exactly one of the two points, which
is the $T_0$ condition. Only the first half of the $T_1$ condition is used, so
the implication does not reverse formally, and it does not reverse in fact:
Sierpinski space is a witness, recorded on the companion page.

**The two conditions differ exactly in symmetry.** $T_0$ asks for *one* open set
that tells the pair apart, with no control over which of the two it contains;
$T_1$ asks for *both* separations at once. In Sierpinski space
$(\{a,b\}, \{\varnothing, \{b\}, \{a,b\}\})$ of [[def-standard-topologies]] the
open set $\{b\}$ contains $b$ and not $a$, so the space is $T_0$; but the only
open set containing $a$ is the whole space, which also contains $b$, so it is
not $T_1$.

**Neither condition is a property of a set alone.** Both are properties of the
pair $(X, \mathcal{T})$, and both are inherited upwards along the comparison
order of [[def-topological-space]]: if $\mathcal{T}_1 \subseteq \mathcal{T}_2$
and $(X,\mathcal{T}_1)$ is $T_0$, respectively $T_1$, then so is
$(X,\mathcal{T}_2)$, since the separating open sets of the coarser topology lie
in the finer one. In particular the discrete topology satisfies both, and the
indiscrete topology on a set with at least two points satisfies neither.

## Remarks

- **The names.** The numbering $T_0, T_1, T_2, \dots$ is Alexandroff and Hopf's
  *Trennungsaxiome*; the individual names honour Kolmogorov and Frechet. This
  page fixes each axiom by its condition and treats the numeral as an
  abbreviation, because the numerals above $T_3$ are used inconsistently in the
  literature ([[rem-separation-axiom-conventions]]).

- **What $T_1$ says about closures.** $T_1$ is equivalent to the closedness of
  every singleton, and hence to $\overline{\{x\}} = \{x\}$ for every point
  ([[def-interior-closure-boundary-top]]); that equivalence is the next item and
  is a theorem, not a restatement. The corresponding characterisation of $T_0$,
  that distinct points have distinct closures, is not needed on this page and is
  not proved here.

- **No separation is built into the word *space*.** [[def-topological-space]]
  assumes none; every separation property on this page is a hypothesis written
  out where it is used.
````

### `def-topological-space`

````markdown
---
id: def-topological-space
kind: definition
title: "Topology on a set, open and closed sets, clopen sets, the closed-set axiomatisation, and the coarser/finer comparison"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-partial-order]
justified_by: []
aliases: [def-topology, def-open-set-top, def-closed-set-top]
landmark: true
short: "topology, open, closed, clopen"
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
    - title: "Topological space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Topological_space"
    - title: "Comparison of topologies (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Comparison_of_topologies"
    - title: "J. Munkres, Topology, 2nd ed., §12"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
pipeline_run: null
---

## Definition

Let $X$ be a set and write $\mathcal{P}(X)$ for its power set. A **topology** on
$X$ is a family $\mathcal{T} \subseteq \mathcal{P}(X)$ such that

- **(T1)** $\varnothing \in \mathcal{T}$ and $X \in \mathcal{T}$;
- **(T2)** $\bigcup \mathcal{S} \in \mathcal{T}$ for every $\mathcal{S} \subseteq \mathcal{T}$;
- **(T3)** $U \cap V \in \mathcal{T}$ for all $U, V \in \mathcal{T}$.

A **topological space** is a pair $(X, \mathcal{T})$ consisting of a set $X$ and
a topology $\mathcal{T}$ on it; the elements of $X$ are its **points**. When only
one topology is in play we write $X$ for the pair; when several are, the topology
is always named.

The members of $\mathcal{T}$ are the **open** sets of $(X,\mathcal{T})$. A subset
$F \subseteq X$ is **closed** when its complement $X \setminus F$ is open, and
**clopen** when it is both open and closed. By (T1) both $\varnothing$ and $X$
are clopen. *Open and closed are not opposites*: a set may be neither, and it may
be both, so "not open" is never a synonym for "closed".

**Finite intersections, and the empty one.** Axiom (T3) is stated for two sets
because that is all that is ever needed: if $n \ge 1$ and
$U_1, \dots, U_n \in \mathcal{T}$, then $U_1 \cap \dots \cap U_n \in \mathcal{T}$
follows by iterating (T3) $n-1$ times. The intersection of the **empty** family
of subsets of $X$ is $X$, since the condition "lies in every member of the empty
family" is vacuous; that case is covered by (T1) rather than by (T3), which is
one of the two reasons $X \in \mathcal{T}$ is demanded outright. The other is
that (T2) alone gives only $\bigcup \varnothing = \varnothing$.

**The closed sets, and the dual axiomatisation.** Put
$\mathcal{C} := \{\, X \setminus U : U \in \mathcal{T} \,\}$, the family of closed
sets. Then

- **(C1)** $\varnothing \in \mathcal{C}$ and $X \in \mathcal{C}$;
- **(C2)** $\bigcap \mathcal{D} \in \mathcal{C}$ for every **nonempty**
  $\mathcal{D} \subseteq \mathcal{C}$;
- **(C3)** $C \cup D \in \mathcal{C}$ for all $C, D \in \mathcal{C}$.

Conversely, if a family $\mathcal{C} \subseteq \mathcal{P}(X)$ satisfies (C1),
(C2) and (C3), then $\mathcal{T} := \{\, X \setminus C : C \in \mathcal{C} \,\}$
is a topology on $X$ whose closed sets are exactly the members of $\mathcal{C}$.
So a topology may be presented equally well by its open sets or by its closed
sets, and this library uses whichever is shorter.

*Both directions are one computation, and it is carried out here rather than
assumed.* The map $U \mapsto X \setminus U$ is an involution of
$\mathcal{P}(X)$, hence a bijection, and it carries the two De Morgan identities

$$X \setminus \bigcup_{i \in I} A_i = \bigcap_{i \in I} (X \setminus A_i) \quad (I \ne \varnothing), \qquad X \setminus \bigcap_{i \in I} A_i = \bigcup_{i \in I} (X \setminus A_i) \quad (I \ne \varnothing)$$

term by term into each other. Given (T1)–(T3): $\varnothing = X \setminus X$ and
$X = X \setminus \varnothing$ lie in $\mathcal{C}$, which is (C1); for nonempty
$\mathcal{D} \subseteq \mathcal{C}$ the family
$\mathcal{S} = \{\, X \setminus C : C \in \mathcal{D} \,\}$ lies in $\mathcal{T}$
and $\bigcap \mathcal{D} = X \setminus \bigcup \mathcal{S}$ is closed by (T2),
which is (C2); and $C \cup D = X \setminus ((X \setminus C) \cap (X \setminus D))$
is closed by (T3), which is (C3). Given (C1)–(C3) the same three lines run
backwards, the empty-union case $\bigcup \varnothing = \varnothing$ being supplied
by (C1) rather than by (C2); and $\{\, X \setminus C : C \in \mathcal{C} \,\}$ has
$\mathcal{C}$ as its family of complements because complementation is an
involution.

**Comparison of topologies.** If $\mathcal{T}_1$ and $\mathcal{T}_2$ are
topologies on the same set $X$ and $\mathcal{T}_1 \subseteq \mathcal{T}_2$, then
$\mathcal{T}_1$ is **coarser** than $\mathcal{T}_2$ and $\mathcal{T}_2$ is
**finer** than $\mathcal{T}_1$; the comparison is **strict** when the inclusion
is. Inclusion is a partial order on the set of topologies on $X$
([[def-partial-order]]), and it is not a total one: two topologies on the same
set may be incomparable.

## Remarks

- **The topology is part of the data.** Two different topologies on one set are
  two different topological spaces, exactly as two different metrics on one set
  are two different metric spaces. Every statement below that says "the space
  $X$" has a topology fixed in advance.

- **Nothing is assumed beyond (T1)–(T3).** In particular no separation property
  is built into the word *space* here: distinct points need not lie in disjoint
  open sets, singletons need not be closed, and both failures occur in the
  standard topologies defined on the next item. Where a separation property is
  used it is stated as a hypothesis.

- **This library always writes *coarser* and *finer*.** The synonyms
  *smaller/larger* are unambiguous, but *weaker/stronger* is used in both
  directions in the literature and is avoided here entirely.

- **Why "arbitrary unions, finite intersections" and not the reverse.** The
  asymmetry is not a convention: it is what makes the metric notion of open set
  ([[def-metric-topology]]) an instance, and an arbitrary intersection of open
  sets genuinely need not be open. The failure is recorded on this page as a
  false statement, with witnesses in two different spaces.
````

### `lem-urysohn-sits-between-hausdorff-and-regular-plus-t1`

````markdown
---
id: lem-urysohn-sits-between-hausdorff-and-regular-plus-t1
kind: lemma
title: "Every Urysohn space is Hausdorff, every Hausdorff space is $T_1$ and hence $T_0$, and every regular $T_1$ space is Urysohn"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-urysohn-space, def-hausdorff-space, def-regular-and-t3-spaces,
       lem-regularity-via-closed-neighbourhoods, def-t0-and-t1-spaces,
       thm-t1-iff-singletons-are-closed, def-interior-closure-boundary-top,
       def-topological-space]
justified_by: []
aliases: []
landmark: true
short: "$T_3 \\Rightarrow T_{2\\frac12} \\Rightarrow T_2 \\Rightarrow T_1 \\Rightarrow T_0$"
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
    - title: "Urysohn and completely Hausdorff spaces (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Urysohn_and_completely_Hausdorff_spaces"
    - title: "Regular space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Regular_space"
    - title: "J. Munkres, Topology, 2nd ed., §31"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
    - title: "Separation axiom (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Separation_axiom"
pipeline_run: null
---

## Statement

Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]). Then:

1. If $X$ is Urysohn ([[def-urysohn-space]]) then $X$ is Hausdorff
   ([[def-hausdorff-space]]).
2. If $X$ is Hausdorff then $X$ is $T_1$, and hence $T_0$
   ([[def-t0-and-t1-spaces]]).
3. If $X$ is regular ([[def-regular-and-t3-spaces]]) and $T_1$ — that is, if $X$
   is $T_3$ — then $X$ is Urysohn.

Consequently $T_3$ implies $T_{2\frac12}$, which implies $T_2$, which implies
$T_1$, which implies $T_0$. Nothing here asserts that any of the four
implications reverses; two of the failures are recorded among this page's false
statements.

## Facts & Assumptions

**Given:** A topological space $(X,\mathcal{T})$ and points $x, y \in X$ with $x \ne y$.

[A1] $X$ is Urysohn when distinct points have open neighbourhoods with disjoint closures ([[def-urysohn-space]]).

[A2] $X$ is Hausdorff when distinct points have disjoint open neighbourhoods ([[def-hausdorff-space]]).

[A3] $X$ is $T_1$ when for distinct $x, y$ there are open $U \ni x$ with $y \notin U$ and open $V \ni y$ with $x \notin V$; every $T_1$ space is $T_0$ ([[def-t0-and-t1-spaces]]).

[L1] In a $T_1$ space every singleton is closed ([[thm-t1-iff-singletons-are-closed]], clause (b)).

[L2] $X$ is regular exactly when for every $x$ and every open $U \ni x$ there is an open $V$ with $x \in V \subseteq \overline{V} \subseteq U$ ([[lem-regularity-via-closed-neighbourhoods]], clause (b)).

[L3] $A \subseteq \overline{A}$ for every $A \subseteq X$, and a set is closed exactly when its complement is open ([[def-interior-closure-boundary-top]], [[def-topological-space]]).

## Proof

**Proof technique:** direct.

1.1 Assume $X$ is Urysohn and let $x \ne y$; [A1] gives open $U \ni x$ and $V \ni y$ with $\overline{U} \cap \overline{V} = \varnothing$. [A1, assume-hyp]

1.2 Assume $X$ is Hausdorff and let $x \ne y$; [A2] gives disjoint open $U \ni x$ and $V \ni y$. [A2, assume-hyp]

1.3 Assume $X$ is regular and $T_1$ and let $x \ne y$; by [L1] the set $\{y\}$ is closed, so $U_0 := X \setminus \{y\}$ is open by [L3] and contains $x$. [L1, L3, assume-hyp]

2.1 Under step 1.1: $U \cap V \subseteq \overline{U} \cap \overline{V} = \varnothing$ by [L3], so $U$ and $V$ are disjoint open neighbourhoods of $x$ and $y$ and $X$ is Hausdorff, which is claim 1. [step 1.1, A2, L3]

2.2 Under step 1.2: $y \notin U$ and $x \notin V$, since $U \cap V = \varnothing$ with $y \in V$ and $x \in U$; so $U$ and $V$ witness the $T_1$ condition and $X$ is $T_1$, hence $T_0$, which is claim 2. [step 1.2, A3]

2.3 Under step 1.3: [L2] applied to $x \in U_0$ gives an open $U$ with $x \in U \subseteq \overline{U} \subseteq U_0 = X \setminus \{y\}$, so $y \notin \overline{U}$. [step 1.3, L2]

3.1 Under step 2.3: $X \setminus \overline{U}$ is open by [L3] and contains $y$, so [L2] applied to it gives an open $V$ with $y \in V \subseteq \overline{V} \subseteq X \setminus \overline{U}$. [step 2.3, L2, L3]

4.1 Under step 3.1: $\overline{U} \cap \overline{V} = \varnothing$, since $\overline{V} \subseteq X \setminus \overline{U}$; so $U$ and $V$ witness the Urysohn condition at the pair $x, y$ and $X$ is Urysohn, which is claim 3. [step 3.1, A1]

5.1 Claims 1, 2 and 3 are steps 2.1, 2.2 and 4.1, and composing them gives the chain $T_3 \Rightarrow T_{2\frac12} \Rightarrow T_2 \Rightarrow T_1 \Rightarrow T_0$. [step 2.1, step 2.2, step 4.1] ∎

## Remarks

- **Claim 3 is where the $T_1$ hypothesis earns its place.** Regularity separates a point from a *closed* set, and the closed set used in the proof is the singleton $\{y\}$; without $T_1$ that singleton need not be closed and the argument has nothing to start from. The indiscrete topology on two points is regular and not Urysohn, which shows the hypothesis cannot simply be dropped.

- **Regularity is applied twice, and the second application is the whole point.** The first shrink puts $y$ outside $\overline{U}$; the second separates $y$ from the closed set $\overline{U}$, which is what upgrades disjointness of the sets to disjointness of their closures.

- **Claim 2 explains why the Hausdorff condition alone is often quoted as "points are closed".** By [[thm-t1-iff-singletons-are-closed]] the two are not the same condition; $T_1$ is strictly weaker, and the cofinite topology on an infinite set separates them.
````

### `thm-closed-subspace-of-a-compact-space-is-compact`

````markdown
---
id: thm-closed-subspace-of-a-compact-space-is-compact
kind: theorem
title: "A closed subspace of a compact space is compact, and a finite union of compact subspaces is compact"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-compact-space, lem-compactness-of-a-subspace-is-ambient, def-topological-space, def-subspace-topology-top, lem-finite-choice]
justified_by: []
aliases: [thm-closed-subset-of-a-compact-space-is-compact-top]
landmark: true
short: "closed in compact is compact"
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: claude-fable-5
    verdict: certify
    date: 2026-07-29
    scope: page
    delegated_by: owner
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Compact space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Compact_space"
    - title: "J. Munkres, Topology, 2nd ed., §26"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
    - title: "Stacks Project, Tag 0059"
      url: "https://stacks.math.columbia.edu/tag/0059"
pipeline_run: null
---
## Statement

Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]), with
subspaces as in [[def-subspace-topology-top]] and compactness as in
[[def-compact-space]]. Then:

1. **Closed in compact is compact.** If $(X, \mathcal{T})$ is compact and
   $F \subseteq X$ is closed in $X$, then $F$ is a compact subset of $X$.
2. **Finite unions.** If $n \in \mathbb{N}$ and $K_0, \dots, K_n$ are compact
   subsets of $X$, then $K_0 \cup \dots \cup K_n$ is a compact subset of $X$. The
   union of the empty list is $\varnothing$, which is a compact subset of every
   space.

Claim 1 needs $X$ to be compact and claim 2 does not; no hypothesis of any kind
is placed on $X$ in claim 2. **No choice principle is used**: claim 1 selects
nothing, taking a least index where a selection would be natural, and claim 2
makes finitely many selections through [[lem-finite-choice]], a theorem of ZF.

## Facts & Assumptions

**Given:** A topological space $(X, \mathcal{T})$.

[L1] $(X, \mathcal{T})$ is compact exactly when every family of open subsets of $X$ with union $X$ has a finite subfamily with union $X$; a subset $A \subseteq X$ is a compact subset when the subspace $(A, \mathcal{T}_A)$ is compact; and a family is finite when it is empty or listable as $\{V_0, \dots, V_n\}$ for some $n \in \mathbb{N}$, repetitions allowed ([[def-compact-space]], [[def-subspace-topology-top]]).

[L2] $A \subseteq X$ is a compact subset of $X$ exactly when for every family $\mathcal{U}$ of open subsets of $X$ with $A \subseteq \bigcup \mathcal{U}$ there are $n \in \mathbb{N}$ and $U_0, \dots, U_n \in \mathcal{U}$ with $A \subseteq U_0 \cup \dots \cup U_n$, or else $A = \varnothing$ ([[lem-compactness-of-a-subspace-is-ambient]], claim 1).

[L3] $F \subseteq X$ is closed exactly when $X \setminus F$ is open ([[def-topological-space]]).

[L4] A function with domain a natural number all of whose values are nonempty sets has a choice function, and this is a theorem of ZF ([[lem-finite-choice]]).

## Proof

**Proof technique:** direct.

1.1 For claim 1, let $(X, \mathcal{T})$ be compact, let $F \subseteq X$ be closed and let $\mathcal{U}$ be a family of open subsets of $X$ with $F \subseteq \bigcup \mathcal{U}$; put $\mathcal{W} := \mathcal{U} \cup \{\, X \setminus F \,\}$, a family of open subsets of $X$ with $\bigcup \mathcal{W} = X$, since every point outside $F$ lies in $X \setminus F$ and every point of $F$ lies in some member of $\mathcal{U}$. [L2, L3, construct]

1.2 For claim 2, let $n \in \mathbb{N}$, let $K_0, \dots, K_n$ be compact subsets of $X$, put $K := K_0 \cup \dots \cup K_n$ and let $\mathcal{U}$ be a family of open subsets of $X$ with $K \subseteq \bigcup \mathcal{U}$; then $K_m \subseteq \bigcup \mathcal{U}$ for every $m \le n$, so by [L2] the set $T_m$ of finite subfamilies of $\mathcal{U}$ whose union contains $K_m$ is nonempty, the empty subfamily belonging to it when $K_m = \varnothing$. [L1, L2, construct]

2.1 If $X = \varnothing$ then $F = \varnothing$ and the second alternative of [L2] holds for $F$; otherwise compactness of $X$ applied to $\mathcal{W}$ gives $n \in \mathbb{N}$ and $W_0, \dots, W_n \in \mathcal{W}$ with $X = W_0 \cup \dots \cup W_n$. [L1, step 1.1]

2.2 The assignment $m \mapsto T_m$ is a function with domain the natural number $\sigma(n)$ all of whose values are nonempty, so a choice function for its values supplies finite subfamilies $\mathcal{V}_0, \dots, \mathcal{V}_n$ of $\mathcal{U}$ with $K_m \subseteq \bigcup \mathcal{V}_m$ for every $m \le n$. [L4, step 1.2]

3.1 Assume $F \ne \varnothing$, the case $F = \varnothing$ being settled at step 2.1, and fix $x \in F$; then $x \in W_j$ for some $j \le n$, and $x \notin X \setminus F$, so that $W_j \ne X \setminus F$ and hence $W_j \in \mathcal{U}$. Let $j_0$ be the least $j \le n$ with $W_j \in \mathcal{U}$, which exists by the previous sentence, and put $V_j := W_j$ when $W_j \in \mathcal{U}$ and $V_j := W_{j_0}$ otherwise; then $V_0, \dots, V_n \in \mathcal{U}$, and nothing has been selected, $j_0$ being the least admissible index. [step 2.1, construct]

3.2 The family $\mathcal{V} := \mathcal{V}_0 \cup \dots \cup \mathcal{V}_n$ is a subfamily of $\mathcal{U}$; it is finite, a union of finitely many listable families being listed by concatenating their lists; and $K = K_0 \cup \dots \cup K_n \subseteq \bigcup \mathcal{V}$, since each $K_m$ lies inside $\bigcup \mathcal{V}_m \subseteq \bigcup \mathcal{V}$. So $\mathcal{V}$ is empty, in which case $K = \varnothing$, or listable as $\{U_0, \dots, U_p\}$ with $K \subseteq U_0 \cup \dots \cup U_p$; by [L2] the set $K$ is a compact subset of $X$, which is claim 2. [L1, L2, algebra, step 2.2]

4.1 $F \subseteq V_0 \cup \dots \cup V_n$: given $y \in F$ there is $j \le n$ with $y \in W_j$, and $y \in F$ forces $W_j \ne X \setminus F$, hence $W_j \in \mathcal{U}$ and $V_j = W_j \ni y$. Since $V_0, \dots, V_n$ are members of $\mathcal{U}$, [L2] gives that $F$ is a compact subset of $X$, the case $F = \varnothing$ having been settled at step 2.1. [L2, step 2.1, step 3.1]

5.1 Claim 1 is step 4.1 and claim 2 is step 3.2, and the final sentence of claim 2 is the compactness of the empty space, which holds because the empty subfamily of any family covers it. [L1, step 3.2, step 4.1] ∎

## Remarks

**Claim 1 is where the two hypotheses do different work.** Compactness of $X$ supplies a finite subcover of $X$; closedness of $F$ is what makes $X \setminus F$ available as one more open set, so that a cover of $F$ can be enlarged to a cover of $X$ by adding a single member. Neither hypothesis can be dropped: an open subspace of a compact space need not be compact, and without compactness of $X$ there is nothing to thin.

**The converse of claim 1 fails, and that is the subject of the next item.** A compact subset of an arbitrary space need not be closed; it is closed as soon as the ambient space is Hausdorff ([[thm-compact-subset-of-a-hausdorff-space-is-closed]]), and [[fs-a-compact-subset-is-closed-in-every-space]] records the failure without that hypothesis.

**The metric special case is [[lem-closed-subset-of-a-compact-space-is-compact]].** It is stated there for a closed subset of a compact metric space and is not used above; by [[thm-compactness-agrees-with-metric-compactness]] it is claim 1 applied to a metric topology. The general theorem is proved from the general definitions and borrows nothing from the metric development, which is why the metric statement does not appear among its dependencies.
````

### `thm-compact-subset-of-a-hausdorff-space-is-closed`

````markdown
---
id: thm-compact-subset-of-a-hausdorff-space-is-closed
kind: theorem
title: "In a Hausdorff space a point and a disjoint compact set, and two disjoint compact sets, have disjoint open neighbourhoods; hence every compact subset is closed, and in a compact Hausdorff space the compact subsets are exactly the closed ones"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-compact-space, lem-compactness-of-a-subspace-is-ambient, def-hausdorff-space, def-topological-space, def-subspace-topology-top, thm-closed-subspace-of-a-compact-space-is-compact, lem-finite-choice]
justified_by: []
aliases: [thm-compact-hausdorff-separation]
landmark: true
short: "compact sets separate in a Hausdorff space"
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: claude-fable-5
    verdict: certify
    date: 2026-07-29
    scope: page
    delegated_by: owner
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Hausdorff space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Hausdorff_space"
    - title: "Compact space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Compact_space"
    - title: "J. Munkres, Topology, 2nd ed., §26"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
    - title: "Stacks Project, Tag 0059"
      url: "https://stacks.math.columbia.edu/tag/0059"
pipeline_run: null
---
## Statement

Let $(X, \mathcal{T})$ be a Hausdorff topological space
([[def-hausdorff-space]], [[def-topological-space]]), with compact subsets as in
[[def-compact-space]]. Then:

1. **A point and a disjoint compact set are separated.** If $K \subseteq X$ is
   compact and $x \in X \setminus K$, there are $U, V \in \mathcal{T}$ with
   $$x \in U, \qquad K \subseteq V, \qquad U \cap V = \varnothing .$$
2. **Two disjoint compact sets are separated.** If $K, L \subseteq X$ are compact
   and $K \cap L = \varnothing$, there are $U, V \in \mathcal{T}$ with
   $$L \subseteq U, \qquad K \subseteq V, \qquad U \cap V = \varnothing .$$
3. **Compact implies closed.** Every compact subset of $X$ is closed in $X$.
4. **In a compact Hausdorff space the two classes coincide.** If in addition
   $(X, \mathcal{T})$ is compact, then a subset of $X$ is compact if and only if
   it is closed.

**The proof is written choice-free, and that is not a stylistic preference.** The
textbook argument says "for each $y \in K$ choose disjoint open $U_y, V_y$",
which is a selection over an arbitrary index set and therefore an appeal to the
full Axiom of Choice. What is done below instead is to take the family of **all**
open $V$ that admit some open $U \ni x$ disjoint from them — a family cut out by
a formula, with nothing selected — extract a finite subcover from it, and only
then make finitely many selections, which [[lem-finite-choice]] supplies as a
theorem of ZF.

## Facts & Assumptions

**Given:** A Hausdorff topological space $(X, \mathcal{T})$.

[A1] For all $x, y \in X$ with $x \ne y$ there are $U, V \in \mathcal{T}$ with $x \in U$, $y \in V$ and $U \cap V = \varnothing$ ([[def-hausdorff-space]]).

[L1] $\varnothing$ and $X$ are open, an arbitrary union of open sets is open, the intersection of finitely many open sets is open when at least one is taken, and a subset is closed exactly when its complement is open ([[def-topological-space]]).

[L2] A subset $A \subseteq X$ is a compact subset of $X$ exactly when for every family $\mathcal{U}$ of open subsets of $X$ with $A \subseteq \bigcup \mathcal{U}$ there are $n \in \mathbb{N}$ and $U_0, \dots, U_n \in \mathcal{U}$ with $A \subseteq U_0 \cup \dots \cup U_n$, or else $A = \varnothing$ ([[lem-compactness-of-a-subspace-is-ambient]], claim 1; [[def-compact-space]], [[def-subspace-topology-top]]).

[L3] A function with domain a natural number all of whose values are nonempty sets has a choice function, and this is a theorem of ZF ([[lem-finite-choice]]).

[L4] A closed subset of a compact space is a compact subset of it ([[thm-closed-subspace-of-a-compact-space-is-compact]], claim 1).

## Proof

**Proof technique:** direct.

1.1 For claim 1 fix a compact $K \subseteq X$ and a point $x \in X \setminus K$, and put $\mathcal{V} := \{\, V \in \mathcal{T} : U \cap V = \varnothing \text{ for some } U \in \mathcal{T} \text{ with } x \in U \,\}$, a family cut out by a property of $V$ alone and not by any selection. [construct]

2.1 $K \subseteq \bigcup \mathcal{V}$: given $y \in K$ we have $y \ne x$, since $x \notin K$, so [A1] provides $U, V \in \mathcal{T}$ with $x \in U$, $y \in V$ and $U \cap V = \varnothing$; that $V$ belongs to $\mathcal{V}$ and contains $y$. [A1, step 1.1]

3.1 If $K = \varnothing$ then $U := X$ and $V := \varnothing$ satisfy claim 1; otherwise [L2] applied to the family $\mathcal{V}$ gives $n \in \mathbb{N}$ and $V_0, \dots, V_n \in \mathcal{V}$ with $K \subseteq V_0 \cup \dots \cup V_n$. [L1, L2, step 1.1, step 2.1]

4.1 For each $j \le n$ the set $S_j := \{\, U \in \mathcal{T} : x \in U \text{ and } U \cap V_j = \varnothing \,\}$ is nonempty, because $V_j \in \mathcal{V}$; and $j \mapsto S_j$ is a function with domain the natural number $\sigma(n)$, so a choice function for its values supplies $U_0, \dots, U_n \in \mathcal{T}$ with $x \in U_j$ and $U_j \cap V_j = \varnothing$ for every $j \le n$. [L3, step 3.1]

5.1 Put $U := U_0 \cap \dots \cap U_n$ and $V := V_0 \cup \dots \cup V_n$; both are open by [L1], $x \in U$ because $x \in U_j$ for every $j$, $K \subseteq V$ by step 3.1, and $U \cap V = \varnothing$ because a point of $U \cap V$ would lie in some $V_j$ and in $U \subseteq U_j$, contradicting $U_j \cap V_j = \varnothing$. So claim 1 holds. [L1, step 3.1, step 4.1]

6.1 For claim 3 let $K \subseteq X$ be compact and put $G := \bigcup \{\, W \in \mathcal{T} : W \cap K = \varnothing \,\}$, which is open by [L1]. Every member of the union misses $K$, so $G \subseteq X \setminus K$; conversely for $x \in X \setminus K$ claim 1, proved at step 5.1, gives disjoint open $U \ni x$ and $V \supseteq K$, whence $U \cap K = \varnothing$ and $x \in U \subseteq G$. So $G = X \setminus K$ is open, $K$ is closed, and claim 3 holds. [L1, step 5.1]

6.2 For claim 2 let $K, L \subseteq X$ be compact with $K \cap L = \varnothing$, and put $\mathcal{W} := \{\, W \in \mathcal{T} : V \cap W = \varnothing \text{ for some } V \in \mathcal{T} \text{ with } K \subseteq V \,\}$, again cut out by a property. Then $L \subseteq \bigcup \mathcal{W}$: for $y \in L$ we have $y \notin K$, so claim 1, proved at step 5.1, gives disjoint open $U \ni y$ and $V \supseteq K$, and that $U$ lies in $\mathcal{W}$ and contains $y$. [step 5.1, construct]

7.1 If $L = \varnothing$ then $U := \varnothing$ and $V := X$ satisfy claim 2; otherwise [L2] applied to $\mathcal{W}$ gives $m \in \mathbb{N}$ and $W_0, \dots, W_m \in \mathcal{W}$ with $L \subseteq W_0 \cup \dots \cup W_m$. [L1, L2, step 6.2]

8.1 For each $j \le m$ the set $T_j := \{\, V \in \mathcal{T} : K \subseteq V \text{ and } V \cap W_j = \varnothing \,\}$ is nonempty, because $W_j \in \mathcal{W}$; and $j \mapsto T_j$ is a function with domain the natural number $\sigma(m)$, so a choice function for its values supplies $V_0, \dots, V_m \in \mathcal{T}$ with $K \subseteq V_j$ and $V_j \cap W_j = \varnothing$ for every $j \le m$. [L3, step 7.1]

9.1 Put $U := W_0 \cup \dots \cup W_m$ and $V := V_0 \cap \dots \cap V_m$; both are open by [L1], $L \subseteq U$ by step 7.1, $K \subseteq V$ because $K \subseteq V_j$ for every $j$, and $U \cap V = \varnothing$ because a point of $U \cap V$ would lie in some $W_j$ and in $V \subseteq V_j$, contradicting $V_j \cap W_j = \varnothing$. So claim 2 holds. [L1, step 7.1, step 8.1]

10.1 For claim 4 assume $(X, \mathcal{T})$ is also compact: a compact subset of $X$ is closed by step 6.1, and a closed subset of $X$ is compact by [L4], so the two classes of subsets coincide; with claims 1, 2 and 3 settled at steps 5.1, 9.1 and 6.1 the theorem is proved. [L4, step 6.1, step 9.1] ∎

## Remarks

**Where each hypothesis is spent.** The Hausdorff condition is used exactly once, at step 2.1, to know that the family $\mathcal{V}$ covers $K$; compactness of $K$ is used exactly once, at step 3.1, to cut that cover down to finitely many members. Claim 2 then reuses claim 1 in the same shape, with the roles of point and compact set played by a point of $L$ and the compact set $K$.

**Why the family is defined and not chosen.** For each $y \in K$ the Hausdorff condition asserts that *some* pair $(U, V)$ exists; it provides no rule for naming one. A proof that writes $U_y$ and $V_y$ has selected a pair for every $y \in K$ at once, and for an arbitrary compact $K$ that is the Axiom of Choice. Collecting instead every $V$ that works for *some* $U$ replaces the selection by a formula, and the only selection left is over the finite index set $\sigma(n)$, where [[lem-finite-choice]] applies.

**Claim 3 fails without the Hausdorff hypothesis**, and [[fs-a-compact-subset-is-closed-in-every-space]] records the failure with a witness. Claim 4 is the converse pairing: closedness is enough for compactness only when the ambient space is compact ([[thm-closed-subspace-of-a-compact-space-is-compact]]), and compactness is enough for closedness only when it is Hausdorff.
````

