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

- high risk (7): 4 declared dependencies; 4 cited facts; 6 numbered proof steps; boundary-sensitive language

## Target item — `thm-uniformity-induces-a-topology`

Normalized current SHA-256: `650c916d774525108f5205b5f7504d9f35b087e4f43348b6f2859000f8cef6de`

The complete current item follows, including frontmatter:

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

## Wave 7 provenance row for the target

```json
{
  "id": "thm-uniformity-induces-a-topology",
  "statement": "literature-derived",
  "proof": "ai-altered",
  "evidence": "exact-source",
  "urls": [
    "https://math.berkeley.edu/~wodzicki/H104.F13/UniformStructure-alt.pdf"
  ],
  "rationale": "Wodzicki defines the uniform topology by exactly the entourage-ball neighborhood condition and proves it is a topology; the item changes notation only.",
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
      "fact": "A1",
      "source": "def-uniform-space-by-entourages",
      "source_section": "Definition",
      "quote": "Let $X$ be a set and write $\\Delta_X=\\{(x,x):x\\in X\\}$ for its diagonal ([[def-the-diagonal-of-a-space]]). For $E\\subseteq X\\times X$, put $E[x]:=\\{y\\in X:(x,y)\\in E\\}$, $E^{-1}:=\\{(y,x):(x,y)\\in E\\}$, and $E\\circ F:=\\{(x,z):\\text{some }y\\text{ has }(x,y)\\in E,(y,z)\\in F\\}$.",
      "uses": [
        "1.1",
        "1.2",
        "1.3",
        "3.1"
      ]
    },
    {
      "fact": "A1",
      "source": "lem-symmetric-entourages-form-a-base",
      "source_section": "Statement",
      "quote": "If $\\mathcal U$ is a uniformity on $X$, then its symmetric entourages form a filter base: for every $E\\in\\mathcal U$ there is a symmetric $D\\in\\mathcal U$ with $D\\subseteq E$. More generally, for every entourage $E$ and every integer $n\\ge 1$, there is a symmetric entourage $D$ whose $n$-fold composite satisfies $D^{\\circ n}\\subseteq E$.",
      "uses": [
        "1.1",
        "1.2",
        "1.3",
        "3.1"
      ]
    },
    {
      "fact": "L1",
      "source": "def-topological-space",
      "source_section": "Definition",
      "quote": "The members of $\\mathcal{T}$ are the **open** sets of $(X,\\mathcal{T})$. A subset\n$F \\subseteq X$ is **closed** when its complement $X \\setminus F$ is open, and\n**clopen** when it is both open and closed. By (T1) both $\\varnothing$ and $X$\nare clopen. *Open and closed are not opposites*: a set may be neither, and it may\nbe both, so \"not open\" is never a synonym for \"closed\".",
      "uses": [
        "2.1"
      ]
    },
    {
      "fact": "L2",
      "source": "def-neighbourhood-top",
      "source_section": "Definition",
      "quote": "A family $\\mathcal{B}_x \\subseteq \\mathcal{N}(x)$ is a **neighbourhood base at\n$x$** if every neighbourhood of $x$ contains a member of $\\mathcal{B}_x$: for\nevery $N \\in \\mathcal{N}(x)$ there is $B \\in \\mathcal{B}_x$ with $B \\subseteq N$.",
      "uses": [
        "4.1"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1.1",
      "claim": "The sets $\\varnothing$ and $X$ are open: the first has no points to test, and for $x\\in X$ every entourage ball is contained in $X$. [A1]",
      "step": "1.1",
      "inputs": [
        "A1"
      ]
    },
    {
      "id": "step-1.2",
      "claim": "An arbitrary union of open sets is open, because a point in the union lies in one member and retains that member's entourage ball. [A1]",
      "step": "1.2",
      "inputs": [
        "A1"
      ]
    },
    {
      "id": "step-1.3",
      "claim": "If $x\\in O\\cap P$, choose entourage balls $E[x]\\subseteq O$ and $F[x]\\subseteq P$; then $(E\\cap F)[x]\\subseteq O\\cap P$, so binary intersections are open. [A1]",
      "step": "1.3",
      "inputs": [
        "A1"
      ]
    },
    {
      "id": "step-2.1",
      "claim": "By steps 1.1 to 1.3, the open sets form a topology by [L1]. [step 1.1, step 1.2, step 1.3, L1]",
      "step": "2.1",
      "inputs": [
        "1.1",
        "1.3",
        "L1",
        "1.2"
      ]
    },
    {
      "id": "step-3.1",
      "claim": "Let $E$ be an entourage and define $$ O_E=\\{y\\in E[x]:F[y]\\subseteq E[x]\\text{ for some }F\\in\\mathcal U\\}. $$ This set is open. Indeed, given $y\\in O_E$, choose $F$ as displayed and then a symmetric $G$ with $G\\circ G\\subseteq F$. If $z\\in G[y]$, symmetry gives $G[z]\\subseteq(G\\circ G)[y]\\subseteq F[y]\\subseteq E[x]$, so $z\\in O_E$; hence $G[y]\\subseteq O_E$. Now choose a symmetric $D$ with $D\\circ D\\subseteq E$. If $y\\in D[x]$, then $D[y]\\subseteq E[x]$, so $y\\in O_E$. Thus $x\\in D[x]\\subseteq O_E\\subseteq E[x]$, proving that $E[x]$ is a neighbourhood of $x$. [A1, step 2.1]",
      "step": "3.1",
      "inputs": [
        "A1",
        "2.1"
      ]
    },
    {
      "id": "step-4.1",
      "claim": "Conversely, if $N$ is a neighbourhood of $x$, it contains an open set $O$ with $x\\in O$; the definition of the topology supplies an entourage $E$ with $E[x]\\subseteq O\\subseteq N$. Thus the entourage balls refine every neighbourhood, and by step 3.1 they are themselves neighbourhoods. They form a neighbourhood base by [L2]. [step 2.1, step 3.1, L2] ∎",
      "step": "4.1",
      "inputs": [
        "3.1",
        "L2",
        "2.1"
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
      "status": "checked",
      "evidence": "statement and step 1.1: the diagonal, coincident-point, constant, minimal, or equality degeneration was checked"
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
    "source": "thm-uniformity-induces-a-topology",
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
    "source": "thm-uniformity-induces-a-topology",
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
    "source": "thm-uniformity-induces-a-topology",
    "sourcePage": "uniform-spaces",
    "batch": "wave7-topology-uniform",
    "target": "def-topological-space",
    "declared_target": "def-topological-space",
    "target_statement_provenance": "ai-altered",
    "targetPage": "topological-spaces-and-continuity",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-uniformity-induces-a-topology",
    "sourcePage": "uniform-spaces",
    "batch": "wave7-topology-uniform",
    "target": "def-neighbourhood-top",
    "declared_target": "def-neighbourhood-top",
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

## Full text of every cited or declared item (4)

### `def-neighbourhood-top`

````markdown
---
id: def-neighbourhood-top
kind: definition
title: "Neighbourhood of a point and neighbourhood base, with this library's convention that a neighbourhood need not be open"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-topological-space, def-topology-basis-subbasis]
justified_by: []
aliases: [def-neighbourhood-base-top]
landmark: false
short: "neighbourhood, neighbourhood base"
verification:
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-03
    scope: published-audit-targeted
    context_sha256: bdc41ee3553c62ad7ffa23eb8a9315579cc671c9836708c819eafe237b79eec7
    item_sha256: 4458190d9dd13e026a4be25d56858bc99377b2d4ccf6729c349381630a633343
  verified:
    model: gpt-5.6-sol-codex-subscription
    verdict: certify
    date: 2026-08-03
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Neighbourhood (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Neighbourhood_(mathematics)"
    - title: "Neighbourhood system (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Neighbourhood_system"
    - title: "J. Munkres, Topology, 2nd ed., §12"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
pipeline_run: null
---

## Definition

Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]) and let
$x \in X$.

A set $N \subseteq X$ is a **neighbourhood of $x$** if there is an open
$U \in \mathcal{T}$ with $x \in U \subseteq N$. The family of all neighbourhoods
of $x$ is written $\mathcal{N}(x)$ and called the **neighbourhood filter** at
$x$. A neighbourhood that is itself open is an **open neighbourhood**.

**Convention, and it is a live fork: in this library a neighbourhood need not be
open.** The competing convention, used by Munkres among others, defines a
neighbourhood of $x$ to be an *open* set containing $x$. Both are in current use;
this library follows the one above and writes "open neighbourhood" in full
whenever openness is wanted, so that no statement here depends on which
convention a reader brings.

A family $\mathcal{B}_x \subseteq \mathcal{N}(x)$ is a **neighbourhood base at
$x$** if every neighbourhood of $x$ contains a member of $\mathcal{B}_x$: for
every $N \in \mathcal{N}(x)$ there is $B \in \mathcal{B}_x$ with $B \subseteq N$.

**Four immediate consequences, established here because they are used
constantly.**

1. *$X$ is a neighbourhood of each of its points*, since $x \in X \subseteq X$
   and $X$ is open by (T1); so $\mathcal{N}(x) \ne \varnothing$ and every point
   has at least one neighbourhood base, namely $\mathcal{N}(x)$ itself.
2. *A superset of a neighbourhood of $x$ is a neighbourhood of $x$*: if
   $x \in U \subseteq N \subseteq M$ with $U$ open then $x \in U \subseteq M$.
3. *The intersection of two neighbourhoods of $x$ is a neighbourhood of $x$*: if
   $x \in U \subseteq N$ and $x \in V \subseteq M$ with $U, V$ open, then
   $U \cap V$ is open by (T3) and $x \in U \cap V \subseteq N \cap M$. By
   iteration the same holds for any intersection of finitely many
   neighbourhoods of $x$.
4. *A set is open exactly when it is a neighbourhood of each of its points.* If
   $U$ is open and $x \in U$ then $x \in U \subseteq U$. Conversely, if $N$ is a
   neighbourhood of each of its points, choose for each $x \in N$ an open $U_x$
   with $x \in U_x \subseteq N$; then $N = \bigcup_{x \in N} U_x$ is open by (T2).
   No choice principle is involved: $U_x$ may be taken to be the union of *all*
   open subsets of $N$ containing $x$, which is determined by $x$ and $N$, and is
   open by (T2).

**Basic sets give neighbourhood bases.** If $\mathcal{B}$ is a basis for
$\mathcal{T}$ ([[def-topology-basis-subbasis]]) then
$\mathcal{B}_x := \{\, B \in \mathcal{B} : x \in B \,\}$ is a neighbourhood base
at $x$ consisting of open sets. Each such $B$ is open and contains $x$, hence is
a neighbourhood of $x$; and if $N \in \mathcal{N}(x)$, fix open $U$ with
$x \in U \subseteq N$ and then $B \in \mathcal{B}$ with $x \in B \subseteq U$,
which gives $B \in \mathcal{B}_x$ with $B \subseteq N$. A member of
$\mathcal{B}_x$ is called a **basic neighbourhood** of $x$.

## Remarks

- **The convention costs nothing and buys one thing.** Every statement of the
  form "for every neighbourhood $N$ of $x$ ... " whose predicate is preserved
  when $N$ is enlarged is equivalent to the statement with $N$ restricted to
  open neighbourhoods: every neighbourhood contains an open one, and the
  predicate then passes to the larger set. Eventual-membership and the usual
  local-existence tests have this form; an arbitrary predicate need not. What
  the wider notion buys is that $\mathcal{N}(x)$ is a filter on $X$ in the sense
  of [[def-filter]]: consequence 1 is (F1), consequence 3 is (F3), consequence 2
  is (F4), and (F2) holds because $x \in U \subseteq \varnothing$ is impossible,
  so $\varnothing$ is a neighbourhood of no point. Under the narrower convention
  the family of open sets containing $x$ fails (F4) as soon as some non-open set
  contains an open set around $x$, so the name "neighbourhood filter" would not
  be available.

- **A neighbourhood base is not required to be closed under intersection**, and
  the bases used below usually are not; what is required is only that its members
  be cofinal downwards among neighbourhoods.
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

