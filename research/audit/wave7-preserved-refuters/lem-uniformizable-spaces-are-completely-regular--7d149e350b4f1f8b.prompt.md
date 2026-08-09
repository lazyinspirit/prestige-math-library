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

- high risk (5): 8 declared dependencies; 6 cited facts

## Target item — `lem-uniformizable-spaces-are-completely-regular`

Normalized current SHA-256: `a21488248daebd244ea31fa6ac3176fda68665b460eee622ca1ddbc6e3d81fab`

The complete current item follows, including frontmatter:

````markdown
---
id: lem-uniformizable-spaces-are-completely-regular
kind: lemma
title: "Assuming dependent choice, every uniformizable space is completely regular"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-uniformizable-space, lem-normal-sequences-of-entourages, lem-pseudometric-from-a-normal-entourage-sequence, def-completely-regular-and-tychonoff-spaces, def-dependent-choice, thm-uniformity-induces-a-topology, thm-uniformly-continuous-maps-are-continuous, lem-metric-uniformity-dictionary]
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
  references: [{title: "J. Wodzicki, Uniform Structure", url: "https://math.berkeley.edu/~wodzicki/H104.F13/UniformStructure-alt.pdf"}, {title: "M. Kunzinger, General Topology", url: "https://www.mat.univie.ac.at/~mike/teaching/ss16/general_topology.pdf"}, {title: "M. Megrelishvili, Lecture Notes in Topological Groups", url: "https://u.math.biu.ac.il/~megereli/TGrNotes070217.pdf"}]
pipeline_run: null
---

## Statement

**Assuming dependent choice,** every uniformizable topological space is completely regular.

## Facts & Assumptions

**Given:** A topology induced by a uniformity, a closed $C$, a point $x\notin C$, and dependent choice.

[L1] A normal entourage sequence yields a uniformly continuous pseudometric with controlled balls ([[lem-pseudometric-from-a-normal-entourage-sequence]]).

[L2] Complete regularity requires a continuous $[0,1]$-valued function equal to $1$ at $x$ and $0$ on $C$ ([[def-completely-regular-and-tychonoff-spaces]]).

[L3] Uniformly continuous maps are continuous for their induced topologies ([[thm-uniformly-continuous-maps-are-continuous]]), and the usual metric uniformity on $\mathbb R$ induces its usual topology ([[lem-metric-uniformity-dictionary]]).

[L4] Dependent choice produces the normal sequences used in the pseudometric construction ([[lem-normal-sequences-of-entourages]]).

[L5] Entourage balls form neighbourhood bases for the induced topology ([[thm-uniformity-induces-a-topology]]).

## Proof

**Proof technique:** constructive.

1.1 Choose an entourage $U$ with $U[x]\cap C=\varnothing$ by [L5]. Using dependent choice, take a normal sequence with $E_0=X\times X$ and $E_1\subseteq U$. [L4, L5, choose, construct]

2.1 Let $p$ be the controlled pseudometric from [L1]. Since $\{p\le1/4\}\subseteq E_1\subseteq U$, every $y\in C$ satisfies $p(x,y)>1/4$. [step 1.1, L1]

3.1 Put $g(y)=\min\{1,4p(x,y)\}$. The reverse triangle inequality for a pseudometric gives $$ |p(x,y)-p(x,z)|\le p(y,z), $$ and truncation at $1$ does not increase absolute differences. Hence, for every $\varepsilon>0$, the entourage $\{(y,z):p(y,z)<\varepsilon/4\}$ forces $|g(y)-g(z)|<\varepsilon$; $g$ is uniformly continuous. Also $g(x)=0$ and $g[C]=\{1\}$ by step 2.1, so $1-g$ has the orientation required in [L2]. [step 2.1, L1, construct]

4.1 By [L3], $1-g$ is continuous, so [L2] proves complete regularity. [step 3.1, L2, L3, discharge-construct] ∎
````

## Wave 7 provenance row for the target

```json
{
  "id": "lem-uniformizable-spaces-are-completely-regular",
  "statement": "ai-altered",
  "proof": "ai-altered",
  "evidence": "established-knowledge",
  "urls": [
    "https://www.mat.univie.ac.at/~mike/teaching/ss16/general_topology.pdf",
    "https://u.math.biu.ac.il/~megereli/TGrNotes070217.pdf"
  ],
  "rationale": "ESCALATED TO ALPHA. Literature proves uniformizable spaces completely regular via pseudometrics, but the item makes DC explicit as the construction principle. No source with that same foundational hypothesis surfaced. ALPHA CONCURRENCE: The pseudometric-separation proof that uniformizable spaces are completely regular is classical. DC is exposed only to build the normal entourage sequence used by that proof, so the local theorem is an established choice-calibrated version.",
  "alpha_concurred": true,
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
      "source": "lem-pseudometric-from-a-normal-entourage-sequence",
      "source_section": "Statement",
      "quote": "Given a decreasing symmetric sequence $(E_n)$ with $E_0=X\\times X$ and\n$E_{n+1}^{\\circ3}\\subseteq E_n$, there is a pseudometric $p$ on $X$ such that\n$$\nE_n\\subseteq\\{p\\le2^{-n}\\}\\subseteq E_{n-1}\n$$\nfor every $n\\ge1$. In particular, each set $\\{p<\\varepsilon\\}$ is an\nentourage, so $p$ is uniformly continuous for the original uniformity in the\nsense of [[def-gauge-of-pseudometrics]].",
      "uses": [
        "2.1",
        "3.1"
      ]
    },
    {
      "fact": "L2",
      "source": "def-completely-regular-and-tychonoff-spaces",
      "source_section": "Definition",
      "quote": "**The same condition in the vocabulary of zero sets.** With $f$ as displayed,\n$C \\subseteq Z(f)$ and $x_0 \\in \\operatorname{coz}(f)$\n([[def-zero-sets-and-cozero-sets]]), so complete regularity says: for every\nclosed $C$ and every $x_0 \\notin C$ there is a continuous $f$ whose zero set\ncontains $C$ and whose cozero set contains $x_0$. In particular\n$\\operatorname{coz}(f)$ is an open set containing $x_0$ and disjoint from $C$;\nthat alone is weaker than regularity, and the passage from the function to two\n*disjoint* open sets is the next item.",
      "uses": [
        "3.1",
        "4.1"
      ]
    },
    {
      "fact": "L3",
      "source": "thm-uniformly-continuous-maps-are-continuous",
      "source_section": "Statement",
      "quote": "Every uniformly continuous map between uniform spaces is continuous for their induced topologies.",
      "uses": [
        "4.1"
      ]
    },
    {
      "fact": "L3",
      "source": "lem-metric-uniformity-dictionary",
      "source_section": "Statement",
      "quote": "For a metric space $(X,d)$ with $X\\ne\\varnothing$, the sets $E_\\varepsilon=\\{(x,y):d(x,y)<\\varepsilon\\}$, $\\varepsilon>0$, generate a separated uniformity. Its induced topology is the metric topology, and uniform continuity to another metric uniformity is exactly metric uniform continuity.",
      "uses": [
        "4.1"
      ]
    },
    {
      "fact": "L4",
      "source": "lem-normal-sequences-of-entourages",
      "source_section": "Statement",
      "quote": "Assuming dependent choice, for every entourage $U$ there are symmetric\nentourages $(E_n)_{n\\in\\mathbb N}$ such that $E_0=X\\times X$,\n$E_1\\subseteq U$, the sequence is decreasing, and\n$E_{n+1}^{\\circ3}\\subseteq E_n$ for every $n\\in\\mathbb N$.",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L5",
      "source": "thm-uniformity-induces-a-topology",
      "source_section": "Statement",
      "quote": "For a uniformity $\\mathcal U$ on $X$, call $O\\subseteq X$ open when every $x\\in O$ has an entourage $E$ with $E[x]\\subseteq O$. These open sets form a topology on $X$. Its neighbourhood filter at $x$ has $\\{E[x]:E\\in\\mathcal U\\}$ as a base.",
      "uses": [
        "1.1"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1.1",
      "claim": "Choose an entourage $U$ with $U[x]\\cap C=\\varnothing$ by [L5]. Using dependent choice, take a normal sequence with $E_0=X\\times X$ and $E_1\\subseteq U$. [L4, L5, choose, construct]",
      "step": "1.1",
      "inputs": [
        "L5",
        "L4"
      ]
    },
    {
      "id": "step-2.1",
      "claim": "Let $p$ be the controlled pseudometric from [L1]. Since $\\{p\\le1/4\\}\\subseteq E_1\\subseteq U$, every $y\\in C$ satisfies $p(x,y)>1/4$. [step 1.1, L1]",
      "step": "2.1",
      "inputs": [
        "L1",
        "1.1"
      ]
    },
    {
      "id": "step-3.1",
      "claim": "Put $g(y)=\\min\\{1,4p(x,y)\\}$. The reverse triangle inequality for a pseudometric gives $$ |p(x,y)-p(x,z)|\\le p(y,z), $$ and truncation at $1$ does not increase absolute differences. Hence, for every $\\varepsilon>0$, the entourage $\\{(y,z):p(y,z)<\\varepsilon/4\\}$ forces $|g(y)-g(z)|<\\varepsilon$; $g$ is uniformly continuous. Also $g(x)=0$ and $g[C]=\\{1\\}$ by step 2.1, so $1-g$ has the orientation required in [L2]. [step 2.1, L1, construct]",
      "step": "3.1",
      "inputs": [
        "2.1",
        "L2",
        "L1"
      ]
    },
    {
      "id": "step-4.1",
      "claim": "By [L3], $1-g$ is continuous, so [L2] proves complete regularity. [step 3.1, L2, L3, discharge-construct] ∎",
      "step": "4.1",
      "inputs": [
        "L3",
        "L2",
        "3.1"
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
    "source": "lem-uniformizable-spaces-are-completely-regular",
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
    "source": "lem-uniformizable-spaces-are-completely-regular",
    "sourcePage": "uniform-spaces",
    "batch": "wave7-topology-uniform",
    "target": "lem-normal-sequences-of-entourages",
    "declared_target": "lem-normal-sequences-of-entourages",
    "target_statement_provenance": "ai-altered",
    "targetPage": "uniform-spaces",
    "targetBatch": "wave7-topology-uniform",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-uniformizable-spaces-are-completely-regular",
    "sourcePage": "uniform-spaces",
    "batch": "wave7-topology-uniform",
    "target": "lem-pseudometric-from-a-normal-entourage-sequence",
    "declared_target": "lem-pseudometric-from-a-normal-entourage-sequence",
    "target_statement_provenance": "literature-derived",
    "targetPage": "uniform-spaces",
    "targetBatch": "wave7-topology-uniform",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-uniformizable-spaces-are-completely-regular",
    "sourcePage": "uniform-spaces",
    "batch": "wave7-topology-uniform",
    "target": "def-completely-regular-and-tychonoff-spaces",
    "declared_target": "def-completely-regular-and-tychonoff-spaces",
    "target_statement_provenance": "literature-derived",
    "targetPage": "separation-axioms",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-uniformizable-spaces-are-completely-regular",
    "sourcePage": "uniform-spaces",
    "batch": "wave7-topology-uniform",
    "target": "def-dependent-choice",
    "declared_target": "def-dependent-choice",
    "target_statement_provenance": "ai-altered",
    "targetPage": "compactness-in-metric-spaces",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-uniformizable-spaces-are-completely-regular",
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
    "source": "lem-uniformizable-spaces-are-completely-regular",
    "sourcePage": "uniform-spaces",
    "batch": "wave7-topology-uniform",
    "target": "thm-uniformly-continuous-maps-are-continuous",
    "declared_target": "thm-uniformly-continuous-maps-are-continuous",
    "target_statement_provenance": "literature-derived",
    "targetPage": "uniform-spaces",
    "targetBatch": "wave7-topology-uniform",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-uniformizable-spaces-are-completely-regular",
    "sourcePage": "uniform-spaces",
    "batch": "wave7-topology-uniform",
    "target": "lem-metric-uniformity-dictionary",
    "declared_target": "lem-metric-uniformity-dictionary",
    "target_statement_provenance": "ai-altered",
    "targetPage": "uniform-spaces",
    "targetBatch": "wave7-topology-uniform",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  }
]
```

## Relevant pending generated-risk rows

```json
[]
```

## Full text of every cited or declared item (8)

### `def-completely-regular-and-tychonoff-spaces`

````markdown
---
id: def-completely-regular-and-tychonoff-spaces
kind: definition
title: "Completely regular spaces and Tychonoff ($T_{3\\frac{1}{2}}$) spaces"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-zero-sets-and-cozero-sets, def-regular-and-t3-spaces, def-t0-and-t1-spaces,
       def-continuous-map-top, def-interval, def-subspace-topology-top,
       def-metrizable-space, lem-real-line-is-a-metric-space, def-topological-space,
       def-standard-topologies]
justified_by: []
aliases: [def-completely-regular-space, def-tychonoff-space, def-t3-and-a-half-space]
landmark: true
short: "completely regular, Tychonoff"
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
  audited: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Tychonoff space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Tychonoff_space"
    - title: "Separation axiom (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Separation_axiom"
    - title: "J. Munkres, Topology, 2nd ed., §33"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
    - title: "R. Gardner, Introduction to Topology, notes on Munkres Section 33: The Urysohn Lemma (East Tennessee State University)"
      url: "https://faculty.etsu.edu/gardnerr/5357/notes/Munkres-33.pdf"
pipeline_run: null
---

## Definition

Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]) and let
$[0,1] \subseteq \mathbb{R}$ carry the subspace topology of the usual topology of
$\mathbb{R}$ ([[def-interval]], [[def-subspace-topology-top]],
[[lem-real-line-is-a-metric-space]], [[def-metrizable-space]]).

- $X$ is **completely regular** when a point can be separated from a closed set
  not containing it *by a continuous function*: for every closed $C \subseteq X$
  and every $x_0 \in X \setminus C$ there is a continuous
  $f : X \to [0,1]$ ([[def-continuous-map-top]]) with
  $$f(x_0) = 1 \qquad \text{and} \qquad f(y) = 0 \ \text{ for every } y \in C .$$
- $X$ is **Tychonoff**, also written **$T_{3\frac{1}{2}}$** and *completely
  regular Hausdorff*, when it is completely regular **and** $T_1$
  ([[def-t0-and-t1-spaces]]).

The case $C = \varnothing$ is allowed and is satisfied by the constant function
$1$, which is continuous ([[def-zero-sets-and-cozero-sets]]); so the condition
hides no nonemptiness hypothesis.

**The same condition in the vocabulary of zero sets.** With $f$ as displayed,
$C \subseteq Z(f)$ and $x_0 \in \operatorname{coz}(f)$
([[def-zero-sets-and-cozero-sets]]), so complete regularity says: for every
closed $C$ and every $x_0 \notin C$ there is a continuous $f$ whose zero set
contains $C$ and whose cozero set contains $x_0$. In particular
$\operatorname{coz}(f)$ is an open set containing $x_0$ and disjoint from $C$;
that alone is weaker than regularity, and the passage from the function to two
*disjoint* open sets is the next item.

**The values $0$ and $1$ are a normalisation, not a restriction.** If
$g : X \to \mathbb{R}$ is continuous with $g(x_0) = a$, $g[C] = \{b\}$ and
$a \ne b$, then the condition above is met by a function built from $g$ by an
affine change of variable followed by truncation into $[0,1]$; this page never
needs that construction, because every function it builds is already normalised.
The *direction* of the normalisation is a genuine convention and is fixed here as
$f(x_0) = 1$ and $f[C] = \{0\}$, following the most common usage; some texts
write the reverse, and a reader must check which is meant before quoting a
formula.

**The convention fork over $T_1$ is the same one as for regularity.** *Completely
regular* names the function-separation condition alone, and Tychonoff names the
conjunction with $T_1$ ([[def-regular-and-t3-spaces]]). The indiscrete topology
on a two-point set ([[def-standard-topologies]]) is completely regular, its only
closed set disjoint from a point being $\varnothing$, and it is not $T_0$; so the
two halves are independent here as well.

## Remarks

- **Complete regularity is a strong hypothesis in disguise.** It asserts the
  existence of many continuous real-valued functions, and a space may have almost
  none; producing such functions is what Urysohn's lemma does for normal $T_1$
  spaces, and that lemma is not available at this point in the reading order
  ([[rem-separation-axiom-conventions]]).

- **Why the numeral is $3\frac12$.** Complete regularity implies regularity, as
  the next item proves, and every normal $T_1$ space is completely regular, which
  this page does **not** prove; so the axiom sits between $T_3$ and $T_4$, and
  the fractional numeral records that position and nothing more.

- **Both names are in use for the conjunction.** *Tychonoff*, *completely regular
  Hausdorff* and *$T_{3\frac12}$* denote the same class; this library writes
  Tychonoff.
````

### `def-dependent-choice`

````markdown
---
id: def-dependent-choice
kind: definition
title: "The axiom of dependent choice: a relation in which every element is related to something admits an $\\mathbb{N}$-indexed chain"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-choice-function, def-axiom-of-choice, def-countable-choice, def-sequence, def-natural-numbers]
justified_by: []
aliases: [def-dc]
landmark: true
short: "dependent choice (DC)"
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
    - title: "Axiom of dependent choice (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Axiom_of_dependent_choice"
    - title: "Axiom of countable choice (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Axiom_of_countable_choice"
    - title: "H. Herrlich, Axiom of Choice, Lecture Notes in Mathematics 1876, Springer 2006"
      url: "https://link.springer.com/book/10.1007/11601562"
pipeline_run: null
---

## Definition

Let $X$ be a set and let $R \subseteq X \times X$ be a binary relation on $X$.
Call $R$ **entire on $X$** when

$$\text{for every } x \in X \text{ there is } y \in X \text{ with } x \mathbin{R} y .$$

The **Axiom of Dependent Choice**, written $\mathrm{DC}$, is the following
statement.

> For every nonempty set $X$, every relation $R$ entire on $X$, and every
> $a \in X$, there is a sequence $x : \mathbb{N} \to X$ ([[def-sequence]],
> [[def-natural-numbers]]) with
> $$x_0 = a \qquad \text{and} \qquad x_n \mathbin{R} x_{n+1} \ \text{ for every } n \in \mathbb{N}.$$

As everywhere in this library $\mathbb{N}$ contains $0$, and the sequence is
indexed from $0$; the term $x_0$ is the prescribed starting point $a$ and every
later term is related to its predecessor.

**What DC adds to what came before.** [[def-choice-function]] and
[[def-axiom-of-choice]] select one element from each member of a family that is
fixed in advance, and [[def-countable-choice]] does the same for a family indexed
by $\mathbb{N}$. In both, the family is given before any selection is made. DC is
the principle needed when the $n$-th set to select from is not known until the
first $n$ selections have been made: here the admissible values of $x_{n+1}$ are
exactly the $R$-successors of $x_n$, so the family being chosen from is built
along the choosing. That is precisely the situation $\mathrm{AC}_\omega$ does not
cover, and it is why a construction "pick $x_{n+1}$ depending on $x_n$, for every
$n$ at once" is not licensed by countable choice.

**The starting point may be dropped.** The formally weaker statement obtained by
deleting the clause $x_0 = a$ — for every nonempty $X$ and every entire $R$ there
is a sequence with $x_n \mathbin{R} x_{n+1}$ for all $n$ — is an immediate
consequence of the form above, since $X$ is nonempty and any of its elements may
be taken as $a$. The reverse derivation is standard and is not needed anywhere in
this library, so it is not carried out; every use below prescribes $x_0$.

**$R$ need not be an order and the terms need not be distinct.** What DC delivers
is a sequence, that is a function $\mathbb{N} \to X$, not a chain in the
order-theoretic sense ([[def-chain]]). The relation may be symmetric, and the
sequence may repeat a value or be constant; all that is asserted is
$x_n \mathbin{R} x_{n+1}$ at every index.

## Remarks

**Where DC sits among the choice principles.** It is a standard fact, proved in
the references and **not** in this library, that

$$\mathrm{AC} \;\Longrightarrow\; \mathrm{DC} \;\Longrightarrow\; \mathrm{AC}_\omega ,$$

and that neither implication reverses. The non-reversals are relative-consistency
results: what they establish is that ZF, if consistent, does not prove the
missing implications, never that those implications are false. This library
contains neither forcing nor permutation models and proves no independence
result, so all of that is quoted from the references and used nowhere.

**Nothing in this library proves DC, and nothing assumes it silently.** Like
[[def-axiom-of-choice]] and [[def-countable-choice]], DC is a statement that may
be assumed or not. Every theorem whose proof uses it says so in its own
statement, and the accounting for the compactness page is collected in
[[rem-compactness-choice-ledger-metric]].

**An upper bound, never a lower one.** When a later item records that its proof
uses DC, the claim made is that the argument given here is carried out in
$\mathrm{ZF} + \mathrm{DC}$. No item claims that DC is *necessary* for the
statement proved, because establishing necessity means separating the statement
from ZF, and that is an independence result of exactly the kind this library does
not prove.
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

### `lem-metric-uniformity-dictionary`

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

### `lem-normal-sequences-of-entourages`

````markdown
---
id: lem-normal-sequences-of-entourages
kind: lemma
title: "Assuming dependent choice, every entourage admits a normal symmetric sequence subordinate to it"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-uniform-space-by-entourages, lem-symmetric-entourages-form-a-base, def-dependent-choice]
aliases: []
landmark: false
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
  references: [{title: "J. Wodzicki, Uniform Structure", url: "https://math.berkeley.edu/~wodzicki/H104.F13/UniformStructure-alt.pdf"}, {title: "M. Kunzinger, General Topology", url: "https://www.mat.univie.ac.at/~mike/teaching/ss16/general_topology.pdf"}]
pipeline_run: null
---

## Statement

Assuming dependent choice, for every entourage $U$ there are symmetric
entourages $(E_n)_{n\in\mathbb N}$ such that $E_0=X\times X$,
$E_1\subseteq U$, the sequence is decreasing, and
$E_{n+1}^{\circ3}\subseteq E_n$ for every $n\in\mathbb N$.

## Facts & Assumptions

**Given:** A uniformity $\mathcal U$, an entourage $U$, and dependent choice.

[L1] Every entourage has a symmetric square root ([[lem-symmetric-entourages-form-a-base]]).

[L2] Dependent choice produces a sequence following any serial relation ([[def-dependent-choice]]).

## Proof

**Proof technique:** constructive.

1.1 Given a symmetric entourage $E$, choose a symmetric $R$ with $R^{\circ2}\subseteq E$, and then a symmetric $D$ with $D^{\circ2}\subseteq R$. Since every entourage contains the diagonal, $D\subseteq R$, and hence $$ D^{\circ3}\subseteq R^{\circ2}\subseteq E. $$ Thus there exists a symmetric $D\subseteq E$ with $D^{\circ3}\subseteq E$. [L1, construct]

2.1 The relation $E\mathrel R D$ meaning that $D$ is symmetric, $D\subseteq E$, and $D\circ D\circ D\subseteq E$ is serial by step 1.1. [step 1.1]

3.1 Choose a symmetric entourage $E_1\subseteq U$ using [L1]. Dependent choice applied to the serial relation of step 2.1 starting at $E_1$ gives $E_1,E_2,\ldots$. Adjoin $E_0=X\times X$; then $E_1^{\circ3}\subseteq X\times X=E_0$, and all the required properties hold. [step 2.1, L1, L2, discharge-construct] ∎
````

### `lem-pseudometric-from-a-normal-entourage-sequence`

````markdown
---
id: lem-pseudometric-from-a-normal-entourage-sequence
kind: lemma
title: "A normal sequence of entourages yields a uniformly continuous pseudometric with controlled dyadic balls"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-metric-space, def-rational-power, def-integer-power, def-infimum, def-finite-sum, def-gauge-of-pseudometrics, lem-geometric-sequence-null, thm-infimum-property, lem-inf-epsilon, lem-finite-sum-laws, lem-rational-power-laws, lem-rational-power-monotone, def-uniform-space-by-entourages, def-filter, thm-strong-induction]
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
  references: [{title: "J. Wodzicki, Uniform Structure", url: "https://math.berkeley.edu/~wodzicki/H104.F13/UniformStructure-alt.pdf"}, {title: "M. Kunzinger, General Topology", url: "https://www.mat.univie.ac.at/~mike/teaching/ss16/general_topology.pdf"}]
pipeline_run: null
---

## Statement

Given a decreasing symmetric sequence $(E_n)$ with $E_0=X\times X$ and
$E_{n+1}^{\circ3}\subseteq E_n$, there is a pseudometric $p$ on $X$ such that
$$
E_n\subseteq\{p\le2^{-n}\}\subseteq E_{n-1}
$$
for every $n\ge1$. In particular, each set $\{p<\varepsilon\}$ is an
entourage, so $p$ is uniformly continuous for the original uniformity in the
sense of [[def-gauge-of-pseudometrics]].

## Facts & Assumptions

**Given:** A normal sequence $(E_n)$ of symmetric entourages on $X$.

[A1] The given sequence satisfies $E_0=X\times X$, is decreasing, and has $E_{n+1}^{\circ3}\subseteq E_n$.

[A2] Every entourage contains the diagonal, and every superset of an entourage is again an entourage because a uniformity is an upward-closed filter ([[def-uniform-space-by-entourages]], [[def-filter]]).

[L1] A pseudometric satisfies symmetry, the triangle inequality, and $p(x,x)=0$ ([[def-metric-space]]).

[L2] Every nonempty set of reals bounded below has an infimum, which is a lower bound and is approached from above within every positive epsilon ([[thm-infimum-property]], [[lem-inf-epsilon]], [[def-infimum]]).

[L3] Finite sums split under concatenation and are nonnegative when their terms are nonnegative; a nonempty finite sum of positive terms is positive ([[def-finite-sum]], [[lem-finite-sum-laws]], claims 3 and 4).

[L4] The dyadic weights $2^{-n}=(1/2)^n$ are positive, satisfy the rational power laws, strictly decrease with $n$, and tend to $0$ ([[lem-rational-power-laws]], claims 1 and 2, [[lem-rational-power-monotone]], claim 1, and [[lem-geometric-sequence-null]], claim 1).

[L5] Strong induction may assume a claim for every smaller natural number ([[thm-strong-induction]]).

## Proof

**Proof technique:** constructive.

1.1 For $x,y\in X$, let $W(x,y)$ be the set of sums $\sum_{i<k}2^{-n_i}$ over all finite chains $x=x_0,\ldots,x_k=y$ with $(x_{i-1},x_i)\in E_{n_i}$. This set is nonempty because the one-edge $E_0=X\times X$ chain has weight $1$. Every dyadic term is positive by [L4], so every such finite sum is nonnegative by [L3]; hence $0$ is a lower bound. By [L2], the infimum exists; define $p(x,y):=\inf W(x,y)$. [A1, L2, L3, L4, construct]

1.2 We prove by strong induction on the number $k$ of edges, simultaneously for every $n$, that a $k$-edge chain of total weight less than $2^{-n}$ has $E_n$-related endpoints. For $k=0$ the endpoints coincide and hence are $E_n$-related by [A2]. Now let $k\ge1$ and assume the claim for every shorter chain. Its total weight $w$ is positive by [L3] and [L4]. Take the first edge for which the cumulative weight through that edge exceeds $w/2$. The subchain before it has weight at most $w/2$, and the subchain after it has weight less than $w/2$; because $w<2^{-n}$, both are less than $2^{-(n+1)}$. They have fewer than $k$ edges, so the induction hypothesis makes both endpoint pairs $E_{n+1}$-related. The middle edge has weight $2^{-m}\le w<2^{-n}$; strict decrease of the dyadic weights gives $m\ge n+1$, and decreasingness of $(E_j)$ puts that edge in $E_{n+1}$. Thus the endpoints lie in $E_{n+1}^{\circ3}\subseteq E_n$. Strong induction proves the claim for every finite chain. [A1, A2, L3, L4, L5]

2.1 The empty chain has weight $0$, while all weights are nonnegative, so $p(x,x)=0$. Reversing a chain preserves its weight because each $E_n$ is symmetric, so $p(x,y)=p(y,x)$. For the triangle inequality, suppose instead that $p(x,z)>p(x,y)+p(y,z)$ and put $\delta=(p(x,z)-p(x,y)-p(y,z))/3>0$. By [L2], choose an $x$-to-$y$ chain of weight $a<p(x,y)+\delta$ and a $y$-to-$z$ chain of weight $b<p(y,z)+\delta$. Their concatenation has weight $a+b<p(x,y)+p(y,z)+2\delta<p(x,z)$ by [L3], contradicting that $p(x,z)$ is a lower bound of $W(x,z)$. Thus the triangle inequality holds, and $p$ is a pseudometric by [L1]. [step 1.1, L1, L2, L3]

2.2 A one-edge $E_n$-chain has weight $2^{-n}$, so $E_n\subseteq\{p\le2^{-n}\}$. [step 1.1]

2.3 If $p(x,y)\le2^{-n}$ with $n\ge1$, then [L4] gives $p(x,y)\le2^{-n}<2^{-(n-1)}$. Apply the epsilon property in [L2] with $\varepsilon=2^{-(n-1)}-p(x,y)>0$ to obtain a chain of weight less than $2^{-(n-1)}$. Step 1.2 gives $(x,y)\in E_{n-1}$. Thus $\{p\le2^{-n}\}\subseteq E_{n-1}$. [step 1.1, step 1.2, L2, L4]

3.1 Given $\varepsilon>0$, choose $n$ with $2^{-n}<\varepsilon$ by [L4]. Then $E_n\subseteq\{p\le2^{-n}\}\subseteq\{p<\varepsilon\}$, so the latter set is an entourage by upward closure. By [[def-gauge-of-pseudometrics]], $p$ is uniformly continuous for the original uniformity. [A2, step 2.2, L4, discharge-construct] ∎
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

### `thm-uniformly-continuous-maps-are-continuous`

````markdown
---
id: thm-uniformly-continuous-maps-are-continuous
kind: theorem
title: "Every uniformly continuous map is continuous for the induced topologies"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-uniformly-continuous-map, thm-uniformity-induces-a-topology, def-continuous-map-top]
aliases: []
landmark: false
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

Every uniformly continuous map between uniform spaces is continuous for their induced topologies.

## Facts & Assumptions

**Given:** A uniformly continuous map $f:X\to Y$ and a point $x\in X$.

[A1] Uniform continuity sends one source entourage into each prescribed target entourage ([[def-uniformly-continuous-map]]).

[L1] Entourage balls are neighbourhood bases for the induced topologies ([[thm-uniformity-induces-a-topology]]).

[L2] A map is continuous at $x$ when every neighbourhood of $f(x)$ has a neighbourhood of $x$ mapped into it ([[def-continuous-map-top]]).

## Proof

**Proof technique:** direct.

1.1 Let $N$ be a neighbourhood of $f(x)$ and choose a target entourage $V$ with $V[f(x)]\subseteq N$. [L1, choose]

2.1 Uniform continuity supplies a source entourage $U$ whose pairs map into $V$, so $f[U[x]]\subseteq V[f(x)]\subseteq N$. [A1, step 1.1]

3.1 Since $U[x]$ is a neighbourhood of $x$, [L2] gives continuity at $x$; as $x$ was arbitrary, $f$ is continuous. [step 2.1, L1, L2] ∎
````

