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

- high risk (6): 6 declared dependencies; 5 cited facts; boundary-sensitive language

## Target item — `lem-uniformizable-spaces-are-regular`

Normalized current SHA-256: `7f7c08de4fbbd9c89d3c051027b70d8a94a38e403c9d966effa9e999aba42efd`

The complete current item follows, including frontmatter:

````markdown
---
id: lem-uniformizable-spaces-are-regular
kind: lemma
title: "Every uniformizable space is regular"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-uniformizable-space, def-uniform-space-by-entourages, thm-uniformity-induces-a-topology, def-regular-and-t3-spaces, lem-symmetric-entourages-form-a-base, def-interior-closure-boundary-top]
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
  references: [{title: "J. Wodzicki, Uniform Structure", url: "https://math.berkeley.edu/~wodzicki/H104.F13/UniformStructure-alt.pdf"}, {title: "M. Kunzinger, General Topology", url: "https://www.mat.univie.ac.at/~mike/teaching/ss16/general_topology.pdf"}]
pipeline_run: null
---

## Statement

Every uniformizable topological space is regular, in ZF.

## Facts & Assumptions

**Given:** A topology induced by a uniformity, a closed $C$, and $x\notin C$.

[L1] Entourage balls form neighbourhood bases and entourages have iterated square roots ([[thm-uniformity-induces-a-topology]], [[def-uniform-space-by-entourages]]).

[L2] Regularity separates a point from a closed set by disjoint open sets ([[def-regular-and-t3-spaces]]).

[L3] Symmetric entourages have square roots, and a point is outside the closure of a set when it has a neighbourhood disjoint from that set ([[lem-symmetric-entourages-form-a-base]], [[def-interior-closure-boundary-top]]).

## Proof

**Proof technique:** direct.

1.1 Since $X\setminus C$ is an open neighbourhood of $x$, choose an entourage $E$ with $E[x]\subseteq X\setminus C$, then choose a symmetric $D$ with $D^{\circ2}\subseteq E$. [L1, L3, choose]

1.2 Let $O$ be the union of all open subsets of $D[x]$ containing $x$. Then $O$ is open and $x\in O\subseteq D[x]$ because $D[x]$ is a neighbourhood. [L1, construct]

2.1 One has $\overline O\subseteq E[x]$. Indeed, if $y\notin E[x]$, then the neighbourhood $D[y]$ is disjoint from $O$: a point $z\in D[y]\cap O\subseteq D[y]\cap D[x]$ would give $(x,y)\in D^{\circ2}\subseteq E$ by symmetry. Hence $y\notin\overline O$ by [L3]. [step 1.1, step 1.2, L1, L3]

3.1 Since $E[x]\cap C=\varnothing$, step 2.1 gives $C\subseteq X\setminus\overline O$. The two open sets $O$ and $X\setminus\overline O$ are disjoint neighbourhoods of $x$ and $C$, so the space is regular by [L2]. [step 1.1, step 2.1, L2] ∎
````

## Wave 7 provenance row for the target

```json
{
  "id": "lem-uniformizable-spaces-are-regular",
  "statement": "literature-derived",
  "proof": "ai-altered",
  "evidence": "exact-source",
  "urls": [
    "https://math.berkeley.edu/~wodzicki/H104.F13/UniformStructure-alt.pdf",
    "https://www.mat.univie.ac.at/~mike/teaching/ss16/general_topology.pdf"
  ],
  "rationale": "The sources state the regularity consequence of a compatible uniformity with the same non-T1 convention. The proof is the standard entourage-shrinking argument.",
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
      "source": "thm-uniformity-induces-a-topology",
      "source_section": "Statement",
      "quote": "For a uniformity $\\mathcal U$ on $X$, call $O\\subseteq X$ open when every $x\\in O$ has an entourage $E$ with $E[x]\\subseteq O$. These open sets form a topology on $X$. Its neighbourhood filter at $x$ has $\\{E[x]:E\\in\\mathcal U\\}$ as a base.",
      "uses": [
        "1.1",
        "1.2",
        "2.1"
      ]
    },
    {
      "fact": "L1",
      "source": "def-uniform-space-by-entourages",
      "source_section": "Definition",
      "quote": "Its members are **entourages**. A **uniform space** is a set equipped with a uniformity. The induced topology and its neighbourhoods are constructed in [[thm-uniformity-induces-a-topology]].",
      "uses": [
        "1.1",
        "1.2",
        "2.1"
      ]
    },
    {
      "fact": "L2",
      "source": "def-regular-and-t3-spaces",
      "source_section": "Definition",
      "quote": "**Regularity alone implies no other separation axiom.** It does not imply $T_0$,\n$T_1$ or Hausdorff ([[def-hausdorff-space]]): in the indiscrete topology on a set\n$X$ the only closed sets are $\\varnothing$ and $X$, so the only pair $(C, x)$ to\nbe separated has $C = \\varnothing$, and $U = X$, $V = \\varnothing$ separates it;\nyet no two distinct points are distinguished by any open set. Conversely $T_1$\ndoes not imply regularity. It is the *conjunction* $T_3$ that sits above\nHausdorff in the hierarchy, and the proof of that is three items below.",
      "uses": [
        "3.1"
      ]
    },
    {
      "fact": "L3",
      "source": "lem-symmetric-entourages-form-a-base",
      "source_section": "Statement",
      "quote": "If $\\mathcal U$ is a uniformity on $X$, then its symmetric entourages form a filter base: for every $E\\in\\mathcal U$ there is a symmetric $D\\in\\mathcal U$ with $D\\subseteq E$. More generally, for every entourage $E$ and every integer $n\\ge 1$, there is a symmetric entourage $D$ whose $n$-fold composite satisfies $D^{\\circ n}\\subseteq E$.",
      "uses": [
        "1.1",
        "2.1"
      ]
    },
    {
      "fact": "L3",
      "source": "def-interior-closure-boundary-top",
      "source_section": "Definition",
      "quote": "- The **interior** of $A$ is\n  $\\operatorname{int}(A) := \\bigcup \\{\\, U \\in \\mathcal{T} : U \\subseteq A \\,\\}$.\n- The **closure** of $A$ is\n  $\\overline{A} := \\bigcap \\{\\, F \\subseteq X : F \\text{ closed and } A \\subseteq F \\,\\}$.\n- The **exterior** of $A$ is $\\operatorname{ext}(A) := \\operatorname{int}(X \\setminus A)$.\n- The **boundary** of $A$ is $\\partial A := \\overline{A} \\setminus \\operatorname{int}(A)$.\n- $x$ is a **limit point** (accumulation point) of $A$ if every neighbourhood $N$\n  of $x$ satisfies $N \\cap (A \\setminus \\{x\\}) \\ne \\varnothing$. The set of limit\n  points of $A$ is the **derived set** $A'$.\n- $x$ is an **isolated point of $A$** if $x \\in A$ and some neighbourhood $N$ of\n  $x$ satisfies $N \\cap A = \\{x\\}$.",
      "uses": [
        "1.1",
        "2.1"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1.1",
      "claim": "Since $X\\setminus C$ is an open neighbourhood of $x$, choose an entourage $E$ with $E[x]\\subseteq X\\setminus C$, then choose a symmetric $D$ with $D^{\\circ2}\\subseteq E$. [L1, L3, choose]",
      "step": "1.1",
      "inputs": [
        "L1",
        "L3"
      ]
    },
    {
      "id": "step-1.2",
      "claim": "Let $O$ be the union of all open subsets of $D[x]$ containing $x$. Then $O$ is open and $x\\in O\\subseteq D[x]$ because $D[x]$ is a neighbourhood. [L1, construct]",
      "step": "1.2",
      "inputs": [
        "L1"
      ]
    },
    {
      "id": "step-2.1",
      "claim": "One has $\\overline O\\subseteq E[x]$. Indeed, if $y\\notin E[x]$, then the neighbourhood $D[y]$ is disjoint from $O$: a point $z\\in D[y]\\cap O\\subseteq D[y]\\cap D[x]$ would give $(x,y)\\in D^{\\circ2}\\subseteq E$ by symmetry. Hence $y\\notin\\overline O$ by [L3]. [step 1.1, step 1.2, L1, L3]",
      "step": "2.1",
      "inputs": [
        "L3",
        "1.1",
        "1.2",
        "L1"
      ]
    },
    {
      "id": "step-3.1",
      "claim": "Since $E[x]\\cap C=\\varnothing$, step 2.1 gives $C\\subseteq X\\setminus\\overline O$. The two open sets $O$ and $X\\setminus\\overline O$ are disjoint neighbourhoods of $x$ and $C$, so the space is regular by [L2]. [step 1.1, step 2.1, L2] ∎",
      "step": "3.1",
      "inputs": [
        "2.1",
        "L2",
        "1.1"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "checked",
      "evidence": "statement and step 1.1: any given uniform space has nonempty carrier under the library's proper-filter convention, and a topological group contains its identity"
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
      "status": "not_applicable",
      "reason": "The statement has no separate coincident-point, constant-map, or collapsed-parameter branch."
    },
    {
      "case": "endpoints",
      "status": "not_applicable",
      "reason": "No interval endpoint, one-sided limit, or strict-versus-weak boundary enters the claim."
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
    "source": "lem-uniformizable-spaces-are-regular",
    "sourcePage": "uniform-spaces",
    "batch": "wave7-topology-uniform",
    "target": "def-uniformizable-space",
    "declared_target": "def-uniformizable-space",
    "target_statement_provenance": "literature-derived",
    "targetPage": "uniform-spaces",
    "targetBatch": "wave7-topology-uniform",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-uniformizable-spaces-are-regular",
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
    "source": "lem-uniformizable-spaces-are-regular",
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
    "source": "lem-uniformizable-spaces-are-regular",
    "sourcePage": "uniform-spaces",
    "batch": "wave7-topology-uniform",
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
    "source": "lem-uniformizable-spaces-are-regular",
    "sourcePage": "uniform-spaces",
    "batch": "wave7-topology-uniform",
    "target": "lem-symmetric-entourages-form-a-base",
    "declared_target": "lem-symmetric-entourages-form-a-base",
    "target_statement_provenance": "ai-altered",
    "targetPage": "uniform-spaces",
    "targetBatch": "wave7-topology-uniform",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-uniformizable-spaces-are-regular",
    "sourcePage": "uniform-spaces",
    "batch": "wave7-topology-uniform",
    "target": "def-interior-closure-boundary-top",
    "declared_target": "def-interior-closure-boundary-top",
    "target_statement_provenance": "ai-altered",
    "targetPage": "topological-spaces-and-continuity",
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

## Full text of every cited or declared item (6)

### `def-interior-closure-boundary-top`

````markdown
---
id: def-interior-closure-boundary-top
kind: definition
title: "Interior, closure, boundary, exterior, derived set and isolated point in a topological space"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-topological-space, def-neighbourhood-top]
justified_by: []
aliases: [def-closure-top, def-interior-top, def-boundary-top, def-derived-set-top]
landmark: true
short: "interior, closure, boundary, derived set"
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
    - title: "Interior (topology) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Interior_(topology)"
    - title: "Closure (topology) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Closure_(topology)"
    - title: "Boundary (topology) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Boundary_(topology)"
    - title: "J. Munkres, Topology, 2nd ed., §17"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
pipeline_run: null
---

## Definition

Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]), let
$A \subseteq X$ and let $x \in X$. Neighbourhoods are as in
[[def-neighbourhood-top]], so a neighbourhood need not be open.

- The **interior** of $A$ is
  $\operatorname{int}(A) := \bigcup \{\, U \in \mathcal{T} : U \subseteq A \,\}$.
- The **closure** of $A$ is
  $\overline{A} := \bigcap \{\, F \subseteq X : F \text{ closed and } A \subseteq F \,\}$.
- The **exterior** of $A$ is $\operatorname{ext}(A) := \operatorname{int}(X \setminus A)$.
- The **boundary** of $A$ is $\partial A := \overline{A} \setminus \operatorname{int}(A)$.
- $x$ is a **limit point** (accumulation point) of $A$ if every neighbourhood $N$
  of $x$ satisfies $N \cap (A \setminus \{x\}) \ne \varnothing$. The set of limit
  points of $A$ is the **derived set** $A'$.
- $x$ is an **isolated point of $A$** if $x \in A$ and some neighbourhood $N$ of
  $x$ satisfies $N \cap A = \{x\}$.

**Both operators are well posed, and the two names are justified rather than
asserted.** The interior is a union of open sets, hence open by (T2), it is
contained in $A$, and it contains every open $U \subseteq A$: so
$\operatorname{int}(A)$ is *the largest open subset of $A$*. The family being
intersected in the definition of $\overline{A}$ is nonempty, since $X$ is closed
and contains $A$, so the intersection is a set; it is closed by (C2) of
[[def-topological-space]], it contains $A$, and it is contained in every closed
$F \supseteq A$: so $\overline{A}$ is *the smallest closed superset of $A$*. In
particular

$$\operatorname{int}(A) \subseteq A \subseteq \overline{A},$$

and $A$ is open if and only if $A = \operatorname{int}(A)$, and closed if and
only if $A = \overline{A}$, in each case because one inclusion is automatic and
the other says exactly that $A$ belongs to the family in question.

**Interior and closure are exchanged by complementation.** For every
$A \subseteq X$,

$$X \setminus \operatorname{int}(A) = \overline{X \setminus A}, \qquad X \setminus \overline{A} = \operatorname{int}(X \setminus A) = \operatorname{ext}(A).$$

Indeed $U \mapsto X \setminus U$ is a bijection between the open subsets of $A$
and the closed supersets of $X \setminus A$, and it turns unions into
intersections ([[def-topological-space]]); applying complementation to the first
identity gives the second. So $\operatorname{ext}(A) = X \setminus \overline{A}$,
and every statement about interiors has a mirror statement about closures.

**The pointwise description of the interior.** $x \in \operatorname{int}(A)$ if
and only if $A$ is a neighbourhood of $x$. If $x \in \operatorname{int}(A)$ then
$\operatorname{int}(A)$ is an open set with $x \in \operatorname{int}(A) \subseteq A$;
conversely a neighbourhood relation $x \in U \subseteq A$ with $U$ open puts $x$
in the union defining $\operatorname{int}(A)$. The corresponding description of
the closure is proved as the next item, because it is the statement that does the
work in every later proof.

**$X$ is the disjoint union of the three regions.** Since
$\operatorname{int}(A) \subseteq \overline{A}$, the three sets
$\operatorname{int}(A)$, $\partial A = \overline{A} \setminus \operatorname{int}(A)$
and $\operatorname{ext}(A) = X \setminus \overline{A}$ are pairwise disjoint and
their union is $X$. This is recorded again, with the identities for interior and
closure of unions and intersections, in the lemma two items below.

## Remarks

- **The boundary is symmetric in $A$ and its complement**:
  $\partial A = \overline{A} \cap \overline{X \setminus A}$, because
  $\overline{A} \setminus \operatorname{int}(A) = \overline{A} \cap (X \setminus \operatorname{int}(A)) = \overline{A} \cap \overline{X \setminus A}$
  by the complementation identity above. Hence $\partial A = \partial(X \setminus A)$,
  and $\partial A$ is closed, being an intersection of two closed sets.

- **A limit point of $A$ need not lie in $A$, and a point of $A$ need not be a
  limit point of $A$.** The points of $A$ that are not limit points of $A$ are
  exactly its isolated points, directly from the two definitions. The relation
  $\overline{A} = A \cup A'$ is a theorem, proved next, not a restatement.

- **These are the metric notions when the topology is a metric topology.** For a
  metric space the definitions of [[def-metric-interior-closure-boundary]] are
  stated with balls in place of neighbourhoods, and the balls around $x$ are a
  neighbourhood base at $x$; the identification is carried out where metrizable
  spaces are defined, later on this page, and it is what allows metric examples
  to be quoted here without reproof.
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

### `def-uniformizable-space`

````markdown
---
id: def-uniformizable-space
kind: definition
title: "Uniformizable and separated-uniformizable topological spaces"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [thm-uniformity-induces-a-topology, def-separated-uniform-space, def-topological-space]
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
  references: [{title: "J. Wodzicki, Uniform Structure", url: "https://math.berkeley.edu/~wodzicki/H104.F13/UniformStructure-alt.pdf"}, {title: "M. Kunzinger, General Topology", url: "https://www.mat.univie.ac.at/~mike/teaching/ss16/general_topology.pdf"}]
pipeline_run: null
---

## Definition

A topological space is **uniformizable** if its topology is induced by some uniformity ([[thm-uniformity-induces-a-topology]]). It is **separated-uniformizable** if it is induced by a separated uniformity ([[def-separated-uniform-space]]).
````

### `lem-symmetric-entourages-form-a-base`

````markdown
---
id: lem-symmetric-entourages-form-a-base
kind: lemma
title: "Every uniformity has a base of symmetric entourages"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-uniform-space-by-entourages, def-filter-base]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references: [{title: "J. Wodzicki, Uniform Structure", url: "https://math.berkeley.edu/~wodzicki/H104.F13/UniformStructure-alt.pdf"}]
pipeline_run: null
---

## Statement

If $\mathcal U$ is a uniformity on $X$, then its symmetric entourages form a filter base: for every $E\in\mathcal U$ there is a symmetric $D\in\mathcal U$ with $D\subseteq E$. More generally, for every entourage $E$ and every integer $n\ge 1$, there is a symmetric entourage $D$ whose $n$-fold composite satisfies $D^{\circ n}\subseteq E$.

## Facts & Assumptions

**Given:** A uniformity $\mathcal U$ on $X$, an entourage $E\in\mathcal U$, and an integer $n\ge 1$.

[A1] A uniformity is a filter whose members are closed under inverse and admit square roots ([[def-uniform-space-by-entourages]]).

[L1] A nonempty, proper family that refines every pair of its members is a filter base ([[def-filter-base]]).

## Proof

**Proof technique:** direct.

1.1 Choose $R\in\mathcal U$ with $R\circ R\subseteq E$, and put $S:=R\cap R^{-1}$. [A1, choose]

1.2 Put $E_0:=E$. By finitely iterating the square-root axiom, choose entourages $E_1,\ldots,E_n$ such that $E_{k+1}\circ E_{k+1}\subseteq E_k$ for $0\le k<n$, and put $D:=E_n\cap E_n^{-1}$. [A1, choose]

2.1 The set $S$ is an entourage, since $R,R^{-1}\in\mathcal U$ and a filter is closed under intersections; also $S=S^{-1}$ and $S\subseteq R\circ R\subseteq E$, because every entourage contains the diagonal. [step 1.1, A1]

2.2 The entourage $D$ is symmetric and $D\subseteq E_n$. Induction on $k$ gives $D^{\circ 2^k}\subseteq E_{n-k}$ for $0\le k\le n$, hence $D^{\circ 2^n}\subseteq E$. Since every entourage contains the diagonal and $n\le 2^n$, one may insert diagonal factors to obtain $D^{\circ n}\subseteq D^{\circ 2^n}\subseteq E$. [step 1.2, A1, algebra]

3.1 Thus symmetric entourages refine every entourage; their intersections are symmetric entourages and none is empty because each contains the diagonal, so they form a filter base by [L1]. [step 2.1, L1]

4.1 Therefore symmetric entourages form a base and admit the asserted finite-composite control. [step 3.1, step 2.2] ∎
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

