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

- high risk (6): 4 declared dependencies; 3 cited facts; biconditional / both-direction claim

## Target item — `thm-uniformizable-iff-completely-regular`

Normalized current SHA-256: `dccd58b925d3439023bf282e404e0e076df6ee29157e1a14c3c2308cb2cef3f2`

The complete current item follows, including frontmatter:

````markdown
---
id: thm-uniformizable-iff-completely-regular
kind: theorem
title: "Assuming dependent choice, a nonempty topological space is uniformizable if and only if it is completely regular"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [lem-uniformizable-spaces-are-completely-regular, lem-completely-regular-topologies-come-from-continuous-pseudometrics, def-uniformizable-space, def-dependent-choice]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references: [{title: "J. Wodzicki, Uniform Structure", url: "https://math.berkeley.edu/~wodzicki/H104.F13/UniformStructure-alt.pdf"}, {title: "M. Kunzinger, General Topology", url: "https://www.mat.univie.ac.at/~mike/teaching/ss16/general_topology.pdf"}, {title: "M. Megrelishvili, Lecture Notes in Topological Groups", url: "https://u.math.biu.ac.il/~megereli/TGrNotes070217.pdf"}]
pipeline_run: null
---

## Statement

**Assuming dependent choice,** a nonempty topological space is uniformizable if and only if it is completely regular.

## Facts & Assumptions

**Given:** A nonempty topological space and dependent choice.

[L1] Under dependent choice, uniformizable spaces are completely regular ([[lem-uniformizable-spaces-are-completely-regular]]).

[L2] A completely regular topology is induced by its gauge of continuous pseudometrics ([[lem-completely-regular-topologies-come-from-continuous-pseudometrics]]).

[L3] Uniformizable means induced by some uniformity ([[def-uniformizable-space]]).

## Proof

**Proof technique:** direct.

1.1 The forward implication is [L1]. [L1]

1.2 The gauge supplied by [L2] is a uniformity inducing the given topology, so the reverse implication is [L2] and [L3]. [L2, L3]

2.1 The two implications prove the equivalence under dependent choice. [step 1.1, step 1.2] ∎
````

## Wave 7 provenance row for the target

```json
{
  "id": "thm-uniformizable-iff-completely-regular",
  "statement": "ai-altered",
  "proof": "ai-altered",
  "evidence": "established-knowledge",
  "urls": [
    "https://www.mat.univie.ac.at/~mike/teaching/ss16/general_topology.pdf",
    "https://u.math.biu.ac.il/~megereli/TGrNotes070217.pdf"
  ],
  "rationale": "ESCALATED TO ALPHA. The uniformization theorem is standard, but the biconditional asserts DC suffices and the local definition admits empty completely regular space while proper filters exclude it. No source matches both conventions and hypothesis. ALPHA CONCURRENCE: Uniformizability iff complete regularity under the separation-free convention is a classical theorem. The current nonempty hypothesis resolves the library's proper-filter edge case, and the explicit DC hypothesis records the standard construction's choice cost rather than adding new content.",
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
      "source": "lem-uniformizable-spaces-are-completely-regular",
      "source_section": "Statement",
      "quote": "**Assuming dependent choice,** every uniformizable topological space is completely regular.",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L2",
      "source": "lem-completely-regular-topologies-come-from-continuous-pseudometrics",
      "source_section": "Statement",
      "quote": "The topology of a nonempty completely regular space is induced by the gauge of pseudometrics $p_f(x,y)=|f(x)-f(y)|$, where $f:X\\to[0,1]$ ranges over continuous maps.",
      "uses": [
        "1.2"
      ]
    },
    {
      "fact": "L3",
      "source": "def-uniformizable-space",
      "source_section": "Definition",
      "quote": "A topological space is **uniformizable** if its topology is induced by some uniformity ([[thm-uniformity-induces-a-topology]]). It is **separated-uniformizable** if it is induced by a separated uniformity ([[def-separated-uniform-space]]).",
      "uses": [
        "1.2"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1.1",
      "claim": "The forward implication is [L1]. [L1]",
      "step": "1.1",
      "inputs": [
        "L1"
      ]
    },
    {
      "id": "step-1.2",
      "claim": "The gauge supplied by [L2] is a uniformity inducing the given topology, so the reverse implication is [L2] and [L3]. [L2, L3]",
      "step": "1.2",
      "inputs": [
        "L2",
        "L3"
      ]
    },
    {
      "id": "step-2.1",
      "claim": "The two implications prove the equivalence under dependent choice. [step 1.1, step 1.2] ∎",
      "step": "2.1",
      "inputs": [
        "1.1",
        "1.2"
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
      "status": "checked",
      "evidence": "statement and step 1.1: the forward implication was traced through its cited inputs"
    },
    {
      "case": "iff-reverse",
      "status": "checked",
      "evidence": "statement and step 2.1: the reverse implication was traced separately through its cited inputs"
    }
  ],
  "finite_smoke": []
}
```

## Generated audit-manifest relationships for the target

```json
[
  {
    "source": "thm-uniformizable-iff-completely-regular",
    "sourcePage": "uniform-spaces",
    "batch": "wave7-topology-uniform",
    "target": "lem-uniformizable-spaces-are-completely-regular",
    "declared_target": "lem-uniformizable-spaces-are-completely-regular",
    "target_statement_provenance": "ai-altered",
    "targetPage": "uniform-spaces",
    "targetBatch": "wave7-topology-uniform",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-uniformizable-iff-completely-regular",
    "sourcePage": "uniform-spaces",
    "batch": "wave7-topology-uniform",
    "target": "lem-completely-regular-topologies-come-from-continuous-pseudometrics",
    "declared_target": "lem-completely-regular-topologies-come-from-continuous-pseudometrics",
    "target_statement_provenance": "ai-altered",
    "targetPage": "uniform-spaces",
    "targetBatch": "wave7-topology-uniform",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-uniformizable-iff-completely-regular",
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
    "source": "thm-uniformizable-iff-completely-regular",
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
  }
]
```

## Relevant pending generated-risk rows

```json
[]
```

## Full text of every cited or declared item (4)

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

### `lem-completely-regular-topologies-come-from-continuous-pseudometrics`

````markdown
---
id: lem-completely-regular-topologies-come-from-continuous-pseudometrics
kind: lemma
title: "The topology of a nonempty completely regular space is induced by the gauge of its continuous $[0,1]$-valued pseudometrics"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-completely-regular-and-tychonoff-spaces, def-gauge-of-pseudometrics, def-continuous-map-top, def-interval, lem-of-abs-value, lem-of-triangle-inequality]
aliases: []
landmark: true
proof_strategy: constructive
verification:
  precheck: pass
sources:
  scraped: []
  references: [{title: "J. Wodzicki, Uniform Structure", url: "https://math.berkeley.edu/~wodzicki/H104.F13/UniformStructure-alt.pdf"}, {title: "M. Kunzinger, General Topology", url: "https://www.mat.univie.ac.at/~mike/teaching/ss16/general_topology.pdf"}, {title: "M. Megrelishvili, Lecture Notes in Topological Groups", url: "https://u.math.biu.ac.il/~megereli/TGrNotes070217.pdf"}]
pipeline_run: null
---

## Statement

The topology of a nonempty completely regular space is induced by the gauge of pseudometrics $p_f(x,y)=|f(x)-f(y)|$, where $f:X\to[0,1]$ ranges over continuous maps.

## Facts & Assumptions

**Given:** A nonempty completely regular space $X$.

[L1] Complete regularity separates a point from a closed set by a continuous $[0,1]$-valued function ([[def-completely-regular-and-tychonoff-spaces]], [[def-interval]]).

[L2] Such functions are continuous in the neighbourhood sense ([[def-continuous-map-top]]).

[L3] A gauge generates a uniformity from finite simultaneous pseudometric balls ([[def-gauge-of-pseudometrics]]).

[L4] Absolute value is nonnegative, vanishes only at zero and is even ([[lem-of-abs-value]]), and it satisfies $|u+v|\le |u|+|v|$ ([[lem-of-triangle-inequality]]).

## Proof

**Proof technique:** constructive.

1.1 For each continuous $f:X\to[0,1]$, direct substitution in [L4] shows that $p_f(x,y)=|f(x)-f(y)|$ is nonnegative, symmetric, zero on the diagonal and satisfies the triangle inequality, so it is a pseudometric; its balls about $x$ are original-open by [L2]. [L2, L4, construct]

1.2 Conversely, if $x\in U$ is original-open, apply [L1] to the closed set $X\setminus U$ to obtain $f$ with $f(x)=1$ and $f[X\setminus U]=\{0\}$; then the $p_f$-ball of radius $1/2$ about $x$ lies in $U$. [L1, L3, choose]

2.1 Hence every gauge-open set is original-open. [step 1.1, L3]

3.1 Thus original-open and gauge-open sets contain one another, so the two topologies agree. [step 2.1, step 1.2, discharge-construct] ∎
````

### `lem-uniformizable-spaces-are-completely-regular`

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

