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

- critical risk (9): 10 declared dependencies; 10 cited facts; existence, choice, uniqueness, or well-definedness; analytic limiting/completeness language

## Target item — `thm-normality-is-not-productive`

Normalized current SHA-256: `5f0a83dc864307bf09157e1d09efc313f6bc3af1b6632e49a1bc28831032af6a`

The complete current item follows, including frontmatter:

````markdown
---
id: thm-normality-is-not-productive
kind: theorem
title: "Assuming choice, normality is not productive: the normal lower-limit line has a nonnormal square"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-axiom-of-choice, def-countable-choice, cor-lower-limit-line-is-normal, lem-jones-normal-density-discrete-bound, lem-lower-limit-plane-antidiagonal, thm-cardinal-power-set-and-cantor, thm-schroder-bernstein, thm-cantor-set-ternary-description, thm-rationals-countable, lem-of-q-dense]
aliases: []
landmark: true
proof_strategy: contradiction
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
    - title: "G. Gruenhage, General Topology Course Notes, Sorgenfrey plane and Jones's lemma"
      url: "https://webhome.auburn.edu/~gruengf/papers/Topology_Course_Notes.pdf"
    - title: "Sorgenfrey topology (Encyclopedia of Mathematics)"
      url: "https://encyclopediaofmath.org/wiki/Sorgenfrey_topology"
    - title: "Sorgenfrey plane (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Sorgenfrey_plane"
pipeline_run: null
---

## Statement

Assuming the Axiom of Choice, the lower-limit line is normal but its square is not normal. Hence normality is not productive, even for a product of two factors.

## Facts & Assumptions

**Given:** The Axiom of Choice and the lower-limit line $L$.

[A1] The Axiom of Choice supplies a choice function for every family of nonempty sets, hence for every countably indexed family, which is the Axiom of Countable Choice ([[def-axiom-of-choice]], [[def-countable-choice]]).

[F1] Under the Axiom of Countable Choice, the lower-limit line is normal ([[cor-lower-limit-line-is-normal]]).

[L1] Jones's lemma injects $\mathcal P(D)$ into $\mathcal P(E)$ when a normal space has closed discrete $D$ and dense $E$ ([[lem-jones-normal-density-discrete-bound]]).

[L2] The plane $L^2$ has $E=\mathbb Q^2$ at most countable and $D=\{(x,-x):x\in\mathbb R\}$ closed discrete with $D\approx\mathbb R$ ([[lem-lower-limit-plane-antidiagonal]]).

[L3] Cantor's theorem gives no injection $\mathcal P(\mathcal P(\mathbb N))\to\mathcal P(\mathbb N)$, and Schröder-Bernstein turns injections both ways into a bijection ([[thm-cardinal-power-set-and-cantor]], [[thm-schroder-bernstein]]).

[L4] The ternary Cantor-set coding injects $\mathcal P(\mathbb N)$ into $\mathbb R$, while $x\mapsto\{q\in\mathbb Q:q<x\}$ injects $\mathbb R$ into $\mathcal P(\mathbb Q)$; a rational between distinct reals makes the latter map injective, and $\mathbb Q\approx\mathbb N$ ([[thm-cantor-set-ternary-description]], [[lem-of-q-dense]], [[thm-rationals-countable]]).

## Proof

**Proof technique:** contradiction.

1.1 By [A1] and [F1], $L$ is normal. Suppose, for a contradiction, that $L^2$ is normal. [A1, F1, assume-contra]

1.2 Jones's lemma applied to the $D,E$ of [L2] injects $\mathcal P(D)$ into $\mathcal P(E)$. [L1, L2]

1.3 The two injections of [L4], with the fixed bijection $\mathbb Q\approx\mathbb N$, give $\mathbb R\approx\mathcal P(\mathbb N)$ by Schröder-Bernstein. Therefore $D\approx\mathcal P(\mathbb N)$, while $E\preceq\mathbb N$. [L2, L3, L4]

2.1 Taking direct images under these injections turns step 1.2 into an injection $\mathcal P(\mathcal P(\mathbb N))\to\mathcal P(\mathbb N)$. [step 1.2, step 1.3]

3.1 This contradicts Cantor's theorem in [L3]. Therefore $L^2$ is not normal, while $L$ is normal, proving nonproductivity. [L3, step 1.1, step 2.1, discharge-contradiction] ∎
````

## Wave 7 provenance row for the target

```json
{
  "id": "thm-normality-is-not-productive",
  "statement": "ai-altered",
  "proof": "ai-altered",
  "evidence": "semantic-source",
  "urls": [
    "https://encyclopediaofmath.org/wiki/Sorgenfrey_topology",
    "https://en.wikipedia.org/wiki/Sorgenfrey_plane"
  ],
  "rationale": "The sources state that the Sorgenfrey line is normal/perfectly normal while its square is not normal; the library exposes the cardinal proof and AC hypothesis.",
  "alpha_concurred": false,
  "at": "2026-08-08",
  "ledger": "wave7-topology-separation-urysohn.provenance.jsonl"
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
      "fact": "A1",
      "source": "def-countable-choice",
      "source_section": "Definition",
      "quote": "The **Axiom of Countable Choice**, written $\\mathrm{AC}_\\omega$, is the following\nstatement.\n\n> For every family $(X_n)_{n \\in \\mathbb{N}}$ of nonempty sets indexed by\n> $\\mathbb{N}$ there is a function $f$ with domain $\\mathbb{N}$ such that\n> $f(n) \\in X_n$ for every $n \\in \\mathbb{N}$.\n\nEquivalently, in the vocabulary of [[def-choice-function]]: every at most\ncountable family of nonempty sets ([[def-countable]]) has a choice function.",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "F1",
      "source": "cor-lower-limit-line-is-normal",
      "source_section": "Statement",
      "quote": "Assuming the Axiom of Countable Choice, the lower-limit line is normal.",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L1",
      "source": "lem-jones-normal-density-discrete-bound",
      "source_section": "Statement",
      "quote": "Assume the Axiom of Choice. If $D$ is a closed discrete subspace of a normal space $X$ and $E\\subseteq X$ is dense, then there is an injection $\\mathcal P(D)\\to\\mathcal P(E)$. In cardinal notation, $2^{|D|}\\le 2^{|E|}$.",
      "uses": [
        "1.2"
      ]
    },
    {
      "fact": "L2",
      "source": "lem-lower-limit-plane-antidiagonal",
      "source_section": "Statement",
      "quote": "In the square of the lower-limit line, $\\mathbb Q\\times\\mathbb Q$ is a countable dense subset, while $D=\\{(x,-x):x\\in\\mathbb R\\}$ is closed and discrete and has the same cardinality as $\\mathbb R$.",
      "uses": [
        "1.2",
        "1.3"
      ]
    },
    {
      "fact": "L3",
      "source": "thm-cardinal-power-set-and-cantor",
      "source_section": "Statement",
      "quote": "**Assume the Axiom of Choice** ([[def-axiom-of-choice]]), so that every set has a\ncardinality ([[thm-well-ordering-theorem]],\n[[lem-cardinality-of-a-well-orderable-set]]). Let $\\kappa$ be a cardinal\n([[def-cardinal]]) and read $2 = \\{0,1\\}$ as a cardinal. Then:\n\n**(a)** $2^{\\kappa} = \\lvert \\mathcal{P}(\\kappa) \\rvert$\n([[def-cardinal-arithmetic]]), and more generally\n$2^{\\lvert A \\rvert} = \\lvert \\mathcal{P}(A) \\rvert$ for every set $A$;\n\n**(b)** $\\kappa < 2^{\\kappa}$.\n\nClause (b) is [[thm-cantor-powerset]] transcribed into cardinal arithmetic. The\nunderlying combinatorial fact — that there is no surjection $A \\to \\mathcal{P}(A)$\n— is a theorem of ZF and needs no choice at all; what the Axiom of Choice buys\nhere is only the right to write $\\lvert \\mathcal{P}(A) \\rvert$ and $2^{\\kappa}$\nas cardinals in the first place.",
      "uses": [
        "1.3",
        "3.1"
      ]
    },
    {
      "fact": "L3",
      "source": "thm-schroder-bernstein",
      "source_section": "Statement",
      "quote": "Let $A$ and $B$ be sets with $A \\preceq B$ and $B \\preceq A$\n([[def-equinumerous]]). Then $A \\approx B$.\n\nEquivalently: if there is an injection $A \\to B$ and an injection $B \\to A$, then\nthere is a bijection $A \\to B$ ([[def-injection-surjection-bijection]]).\n\n**The proof uses no choice principle.** The bijection is written down explicitly\nfrom the two given injections, and the only \"selections\" it makes are of the\nunique preimage of a point under an injection, which is determined, not chosen.\nThe single infinite construction is an application of the recursion theorem\n([[thm-recursion]]), whose data are a set, a starting point and one function.",
      "uses": [
        "1.3",
        "3.1"
      ]
    },
    {
      "fact": "L4",
      "source": "thm-cantor-set-ternary-description",
      "source_section": "Statement",
      "quote": "Let $D$ be the set of sequences $a : \\mathbb{N} \\to \\{0,2\\}$\n([[def-sequence]]), the two values being the real numbers $0$ and $2$. For\n$a \\in D$ the series $\\sum_{k \\ge 0} a_k 3^{-k-1}$ converges ([[def-series]]);\nwrite\n\n$$\\Phi(a) \\;:=\\; \\sum_{k=0}^{\\infty} a_k 3^{-k-1} .$$\n\nThen, with $C$ and $(C_n)$ as in [[def-cantor-set]]:\n\n1. $\\Phi(a) \\in [0,1]$ for every $a \\in D$, and $C = \\{\\, \\Phi(a) : a \\in D \\,\\}$;\n2. $\\Phi$ is injective, so $\\Phi$ is a bijection from $D$ onto $C$\n   ([[def-injection-surjection-bijection]]);\n3. consequently $b \\mapsto \\Phi\\big((2 b_k)_k\\big)$ is a bijection from\n   $\\{0,1\\}^{\\mathbb{N}}$, the set of sequences with values in $\\{0,1\\}$, onto\n   $C$;\n4. $C = \\tfrac13 C \\cup \\big(\\tfrac23 + \\tfrac13 C\\big)$, and the two sets on the\n   right are disjoint.\n\n**On the indexing.** The digit $a_k$ carries the weight $3^{-k-1}$, so the\nseries starts at $k = 0$ with the term $a_0/3$; written with the classical\n$1$-based index it reads $\\sum_{k \\ge 1} a_k 3^{-k}$, which is the form in the\ntitle. Sequences in this library are functions on $\\mathbb{N}$ and $\\mathbb{N}$\ncontains $0$ ([[def-sequence]]), so the $0$-based form is the one used\nthroughout the proof.",
      "uses": [
        "1.3"
      ]
    },
    {
      "fact": "L4",
      "source": "lem-of-q-dense",
      "source_section": "Statement",
      "quote": "Let $F$ be an Archimedean ordered field ([[def-archimedean-field]]) and let\n$\\iota : \\mathbb{Q} \\to F$ be the canonical embedding ([[lem-of-q-embeds]]). Then\n$\\iota(\\mathbb{Q})$ is dense in $F$: for any $x < y$ in $F$ there is a rational\n$q$ with $x < \\iota(q) < y$.",
      "uses": [
        "1.3"
      ]
    },
    {
      "fact": "L4",
      "source": "thm-rationals-countable",
      "source_section": "Statement",
      "quote": "$\\mathbb{Q} \\approx \\mathbb{N}$ ([[def-equinumerous]]): the rationals are\ncountably infinite ([[def-countable]]).\n\n**No choice principle is used.** The one place where a reader expects a choice,\n\"pick a representative $a/b$ of each rational\", is exactly where\n[[lem-rat-positive-denominator]] applies: every rational *has* a representative\nwith positive denominator, so the map $(a,b) \\mapsto [(a,b)]$ defined on\n$\\mathbb{Z} \\times \\mathbb{Z}_{>0}$ is already **surjective** onto $\\mathbb{Q}$,\nand countability follows from a surjection without ever selecting a\nrepresentative. The same device handles $\\mathbb{Z}$, which is a surjective image\nof $\\mathbb{N} \\times \\mathbb{N}$ by construction ([[def-integers]]).",
      "uses": [
        "1.3"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1.1",
      "claim": "By [A1] and [F1], $L$ is normal. Suppose, for a contradiction, that $L^2$ is normal. [A1, F1, assume-contra]",
      "step": "1.1",
      "inputs": [
        "A1",
        "F1",
        "assume-contra"
      ]
    },
    {
      "id": "step-1.2",
      "claim": "Jones's lemma applied to the $D,E$ of [L2] injects $\\mathcal P(D)$ into $\\mathcal P(E)$. [L1, L2]",
      "step": "1.2",
      "inputs": [
        "L1",
        "L2"
      ]
    },
    {
      "id": "step-1.3",
      "claim": "The two injections of [L4], with the fixed bijection $\\mathbb Q\\approx\\mathbb N$, give $\\mathbb R\\approx\\mathcal P(\\mathbb N)$ by Schröder-Bernstein. Therefore $D\\approx\\mathcal P(\\mathbb N)$, while $E\\preceq\\mathbb N$. [L2, L3, L4]",
      "step": "1.3",
      "inputs": [
        "L2",
        "L3",
        "L4"
      ]
    },
    {
      "id": "step-2.1",
      "claim": "Taking direct images under these injections turns step 1.2 into an injection $\\mathcal P(\\mathcal P(\\mathbb N))\\to\\mathcal P(\\mathbb N)$. [step 1.2, step 1.3]",
      "step": "2.1",
      "inputs": [
        "step 1.2",
        "step 1.3",
        "1.2",
        "1.3"
      ]
    },
    {
      "id": "step-3.1",
      "claim": "This contradicts Cantor's theorem in [L3]. Therefore $L^2$ is not normal, while $L$ is normal, proving nonproductivity. [L3, step 1.1, step 2.1, discharge-contradiction] ∎",
      "step": "3.1",
      "inputs": [
        "L3",
        "step 1.1",
        "step 2.1",
        "discharge-contradiction",
        "1.1",
        "2.1"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "not_applicable",
      "reason": "The statement has no distinguished empty-set or empty-family case parameter or case."
    },
    {
      "case": "zero",
      "status": "not_applicable",
      "reason": "The statement has no distinguished zero or base-value case parameter or case."
    },
    {
      "case": "one",
      "status": "checked",
      "evidence": "statement and step 1.1: unit, singleton, or one-term case was inspected"
    },
    {
      "case": "degenerate",
      "status": "not_applicable",
      "reason": "The statement has no distinguished degenerate or equality case parameter or case."
    },
    {
      "case": "endpoints",
      "status": "not_applicable",
      "reason": "The statement has no distinguished endpoint and codomain-boundary behavior parameter or case."
    },
    {
      "case": "nonempty-choice",
      "status": "checked",
      "evidence": "statement: nonempty-choice obligations were checked against the stated hypothesis or explicit construction"
    },
    {
      "case": "iff-forward",
      "status": "not_applicable",
      "reason": "The statement is not an equivalence and has no forward iff direction."
    },
    {
      "case": "iff-reverse",
      "status": "not_applicable",
      "reason": "The statement is not an equivalence and has no reverse iff direction."
    }
  ],
  "finite_smoke": []
}
```

## Generated audit-manifest relationships for the target

```json
[
  {
    "source": "thm-normality-is-not-productive",
    "sourcePage": "hereditary-and-productive-separation",
    "batch": "wave7-topology-separation-urysohn",
    "target": "def-axiom-of-choice",
    "declared_target": "def-axiom-of-choice",
    "target_statement_provenance": "literature-derived",
    "targetPage": "relations-functions-and-quotients",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-normality-is-not-productive",
    "sourcePage": "hereditary-and-productive-separation",
    "batch": "wave7-topology-separation-urysohn",
    "target": "def-countable-choice",
    "declared_target": "def-countable-choice",
    "target_statement_provenance": "ai-altered",
    "targetPage": "countability-and-uncountability",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-normality-is-not-productive",
    "sourcePage": "hereditary-and-productive-separation",
    "batch": "wave7-topology-separation-urysohn",
    "target": "cor-lower-limit-line-is-normal",
    "declared_target": "cor-lower-limit-line-is-normal",
    "target_statement_provenance": "ai-altered",
    "targetPage": "hereditary-and-productive-separation",
    "targetBatch": "wave7-topology-separation-urysohn",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-normality-is-not-productive",
    "sourcePage": "hereditary-and-productive-separation",
    "batch": "wave7-topology-separation-urysohn",
    "target": "lem-jones-normal-density-discrete-bound",
    "declared_target": "lem-jones-normal-density-discrete-bound",
    "target_statement_provenance": "ai-altered",
    "targetPage": "hereditary-and-productive-separation",
    "targetBatch": "wave7-topology-separation-urysohn",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-normality-is-not-productive",
    "sourcePage": "hereditary-and-productive-separation",
    "batch": "wave7-topology-separation-urysohn",
    "target": "lem-lower-limit-plane-antidiagonal",
    "declared_target": "lem-lower-limit-plane-antidiagonal",
    "target_statement_provenance": "ai-altered",
    "targetPage": "hereditary-and-productive-separation",
    "targetBatch": "wave7-topology-separation-urysohn",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-normality-is-not-productive",
    "sourcePage": "hereditary-and-productive-separation",
    "batch": "wave7-topology-separation-urysohn",
    "target": "thm-cardinal-power-set-and-cantor",
    "declared_target": "thm-cardinal-power-set-and-cantor",
    "target_statement_provenance": "ai-altered",
    "targetPage": "cardinal-arithmetic-and-cofinality",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-normality-is-not-productive",
    "sourcePage": "hereditary-and-productive-separation",
    "batch": "wave7-topology-separation-urysohn",
    "target": "thm-schroder-bernstein",
    "declared_target": "thm-schroder-bernstein",
    "target_statement_provenance": "ai-altered",
    "targetPage": "countability-and-uncountability",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-normality-is-not-productive",
    "sourcePage": "hereditary-and-productive-separation",
    "batch": "wave7-topology-separation-urysohn",
    "target": "thm-cantor-set-ternary-description",
    "declared_target": "thm-cantor-set-ternary-description",
    "target_statement_provenance": null,
    "targetPage": "cantor-set-baire-and-measure-zero",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-normality-is-not-productive",
    "sourcePage": "hereditary-and-productive-separation",
    "batch": "wave7-topology-separation-urysohn",
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
    "source": "thm-normality-is-not-productive",
    "sourcePage": "hereditary-and-productive-separation",
    "batch": "wave7-topology-separation-urysohn",
    "target": "lem-of-q-dense",
    "declared_target": "lem-of-q-dense",
    "target_statement_provenance": "literature-derived",
    "targetPage": "foundations-of-the-real-numbers",
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

## Full text of every cited or declared item (10)

### `cor-lower-limit-line-is-normal`

````markdown
---
id: cor-lower-limit-line-is-normal
kind: corollary
title: "Assuming countable choice, the lower-limit line is normal"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [lem-lower-limit-line-is-regular-and-lindelof, lem-regular-lindelof-spaces-are-normal]
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
    - title: "L. A. Steen and J. A. Seebach, Counterexamples in Topology, Sorgenfrey line"
      url: "https://web.math.ucsb.edu/~bigelow/books/counterexamples.pdf"
    - title: "Sorgenfrey topology (Encyclopedia of Mathematics)"
      url: "https://encyclopediaofmath.org/wiki/Sorgenfrey_topology"
pipeline_run: null
---

## Statement

Assuming the Axiom of Countable Choice, the lower-limit line is normal.

## Facts & Assumptions

**Given:** The Axiom of Countable Choice.

[L1] Under countable choice, the lower-limit line is regular and Lindelöf ([[lem-lower-limit-line-is-regular-and-lindelof]]).

[L2] Every regular Lindelöf space is normal ([[lem-regular-lindelof-spaces-are-normal]]).

## Proof

**Proof technique:** direct.

1.1 Under the stated hypothesis, [L1] supplies a regular Lindelöf lower-limit line. [L1]

2.1 Applying [L2] gives its normality. [L1, L2] ∎
````

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

### `def-countable-choice`

````markdown
---
id: def-countable-choice
kind: definition
title: "The Axiom of Countable Choice ($\\mathrm{AC}_\\omega$)"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-choice-function, def-axiom-of-choice, def-countable, thm-well-ordering-principle, lem-countable-iff-surjection-from-n]
justified_by: []
external_refs: [rem-feferman-levy-model, rem-cohen-first-model]
aliases: [def-ac-omega, axiom-of-countable-choice]
landmark: false
short: "$\\mathrm{AC}_\\omega$"
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
    - title: "D. H. Fremlin, Measure Theory, Chapter 56"
      url: "https://www1.essex.ac.uk/maths/people/fremlin/chap56.pdf"
    - title: "Axiom of countable choice (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Axiom_of_countable_choice"
    - title: "Axiom of dependent choice (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Axiom_of_dependent_choice"
    - title: "Axiom of choice (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Axiom_of_choice"
pipeline_run: null
---

## Definition

The **Axiom of Countable Choice**, written $\mathrm{AC}_\omega$, is the following
statement.

> For every family $(X_n)_{n \in \mathbb{N}}$ of nonempty sets indexed by
> $\mathbb{N}$ there is a function $f$ with domain $\mathbb{N}$ such that
> $f(n) \in X_n$ for every $n \in \mathbb{N}$.

Equivalently, in the vocabulary of [[def-choice-function]]: every at most
countable family of nonempty sets ([[def-countable]]) has a choice function.

## Remarks

- **The two formulations are equivalent, and the passage between them uses no
  choice.** Given an at most countable family $\mathcal{F}$ of nonempty sets,
  either $\mathcal{F} = \varnothing$, where the empty function is a choice
  function, or a surjection $s : \mathbb{N} \to \mathcal{F}$ exists
  ([[lem-countable-iff-surjection-from-n]]); applying the indexed form to
  $X_n := s(n)$ gives $f$ with $f(n) \in s(n)$, and
  $g(S) := f(\min\{\, n : s(n) = S \,\})$ is a choice function for $\mathcal{F}$,
  the minimum being canonical by [[thm-well-ordering-principle]]. Conversely a
  choice function $g$ on the at most countable family $\{\, X_n : n \in \mathbb{N} \,\}$
  gives $f(n) := g(X_n)$.

- **$\mathrm{AC}_\omega$ is strictly weaker than the Axiom of Choice**
  ([[def-axiom-of-choice]]): AC implies it immediately, since AC applies to every
  family, while it is consistent with ZF that $\mathrm{AC}_\omega$ holds and AC
  fails. **It is also strictly stronger than what ZF proves**: it is consistent
  with ZF that $\mathrm{AC}_\omega$ fails, as Cohen's first model shows, since an
  infinite set of reals with no countably infinite subset
  ([[rem-cohen-first-model]]) is already a failure of $\mathrm{AC}_\omega$; the
  Feferman-Levy model ([[rem-feferman-levy-model]]) is a second witness. Both
  statements are conditional on the consistency of ZF and are external results,
  established by forcing and by permutation models; they are recorded here with
  references and are **not** proved in this library, which contains neither
  technique. Of the two, only the failure of $\mathrm{AC}_\omega$ is recorded in
  this library's catalogue of unproved results; the separation of
  $\mathrm{AC}_\omega$ from AC in the other direction is quoted from the
  references alone.

- **Dependent choice sits between them.** The Axiom of Dependent Choice
  (DC) says that if $R$ is a relation on a nonempty set $X$ such that every
  $x \in X$ has some $y$ with $x \mathbin{R} y$, then there is a sequence
  $(x_n)_{n \in \mathbb{N}}$ with $x_n \mathbin{R} x_{n+1}$ for all $n$. In ZF,
  $\mathrm{AC} \Rightarrow \mathrm{DC} \Rightarrow \mathrm{AC}_\omega$; both
  implications are theorems of ZF, and neither is proved here. That neither
  reverses is a pair of relative-consistency results of the same kind as in the
  previous bullet: if ZF is consistent, then so are ZF + DC + (not AC) and
  ZF + $\mathrm{AC}_\omega$ + (not DC). Both are established by forcing and by
  permutation models, are quoted here from the references rather than proved, and
  cannot be stated without the consistency hypothesis; so "DC is *strictly*
  between AC and $\mathrm{AC}_\omega$" is shorthand for those two conditional
  statements and is never used here as a standalone assertion. DC is the
  principle that legitimises "choose $x_0$, then choose $x_1$ depending on
  $x_0$, and so on"; $\mathrm{AC}_\omega$ only legitimises countably many
  *independent* choices made at once.

- **Being an axiom, $\mathrm{AC}_\omega$ carries no well-definedness obligation**,
  which is why this item has no `justified_by`. Its role in this library is
  bookkeeping: [[thm-countable-union-of-countable]] assumes it and flags the exact
  step that spends it, and [[fs-countable-union-theorem-of-zf]] records that the
  assumption cannot be removed.

- Every result *proved* on this page other than
  [[thm-countable-union-of-countable]] is a theorem of ZF alone. In particular
  [[lem-subset-of-countable]], [[lem-countable-iff-surjection-from-n]],
  [[thm-schroder-bernstein]], [[thm-rationals-countable]], [[thm-cantor-powerset]]
  and [[thm-r-uncountable]] are choice free, and each says so. The false
  statements at the end of the page are not all of that kind, and the claim above
  does not cover them: two of the three refute a ZF-provability claim only under
  the hypothesis that ZF is consistent, quoting an external independence result
  rather than proving it, and they say so in their own Facts.
````

### `lem-jones-normal-density-discrete-bound`

````markdown
---
id: lem-jones-normal-density-discrete-bound
kind: lemma
title: "Jones's bound: under choice, a closed discrete subspace of a normal space cannot have more subsets than a dense set has subsets"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-normal-and-t4-spaces, def-dense-top, def-subspace-topology-top, def-axiom-of-choice, def-cardinal-arithmetic, thm-cardinal-power-set-and-cantor]
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
    - title: "G. Gruenhage, General Topology Course Notes, Jones's lemma"
      url: "https://webhome.auburn.edu/~gruengf/papers/Topology_Course_Notes.pdf"
    - title: "Samuel Gomes da Silva, Closed discrete subsets of separable spaces and relative versions of normality, countable paracompactness and property (a)"
      url: "https://dml.cz/bitstream/handle/10338.dmlcz/141614/CommentatMathUnivCarolRetro_52-2011-3_10.pdf"
pipeline_run: null
---

## Statement

Assume the Axiom of Choice. If $D$ is a closed discrete subspace of a normal space $X$ and $E\subseteq X$ is dense, then there is an injection $\mathcal P(D)\to\mathcal P(E)$. In cardinal notation, $2^{|D|}\le 2^{|E|}$.

## Facts & Assumptions

**Given:** A normal space $X$, a closed discrete $D\subseteq X$, and a dense $E\subseteq X$.

[A1] The Axiom of Choice supplies a choice function for every family of nonempty sets ([[def-axiom-of-choice]]).

[F1] Every subset of a discrete subspace is closed in that subspace; because $D$ is closed in $X$, each subset of $D$ is closed in $X$ ([[def-subspace-topology-top]]).

[F2] Normality separates disjoint closed sets by disjoint open sets, and every nonempty open set meets a dense subset ([[def-normal-and-t4-spaces]], [[def-dense-top]]).

[F3] Under choice, $2^{\kappa}=|\mathcal P(\kappa)|$ for every cardinal $\kappa$ ([[def-cardinal-arithmetic]], [[thm-cardinal-power-set-and-cantor]]).

## Proof

**Proof technique:** direct.

1.1 For every $A\subseteq D$, the sets $A$ and $D\setminus A$ are disjoint closed subsets of $X$. By normality there is an open $U_A$ containing $A$ and an open $V_A$ containing $D\setminus A$ with $U_A\cap V_A=\varnothing$. [F1, F2]

2.1 Apply [A1] to choose one such pair $(U_A,V_A)$ for every $A\subseteq D$, and define $\Phi(A)=U_A\cap E\subseteq E$. [A1, step 1.1]

3.1 If $A\ne B$, take $d\in A\setminus B$ after interchanging them if necessary. Then $d\in U_A\cap V_B$, a nonempty open set meeting $E$; a point of $E\cap U_A\cap V_B$ lies in $\Phi(A)$ and not in $\Phi(B)$. [F2, step 2.1]

4.1 Thus $\Phi$ is injective. By [F3], this is the asserted cardinal inequality. [F3, step 3.1] ∎
````

### `lem-lower-limit-plane-antidiagonal`

````markdown
---
id: lem-lower-limit-plane-antidiagonal
kind: lemma
title: "The lower-limit plane has a countable dense set and a closed discrete antidiagonal of size $|\\mathbb{R}|$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-lower-limit-topology, def-product-topology, def-dense-top, def-subspace-topology-top, thm-rationals-countable, lem-rat-embeds-dense, thm-product-of-countable, thm-r-uncountable]
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
    - title: "G. Gruenhage, General Topology Course Notes, Sorgenfrey plane"
      url: "https://webhome.auburn.edu/~gruengf/papers/Topology_Course_Notes.pdf"
    - title: "Sorgenfrey plane (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Sorgenfrey_plane"
    - title: "Sorgenfrey topology (Encyclopedia of Mathematics)"
      url: "https://encyclopediaofmath.org/wiki/Sorgenfrey_topology"
pipeline_run: null
---

## Statement

In the square of the lower-limit line, $\mathbb Q\times\mathbb Q$ is a countable dense subset, while $D=\{(x,-x):x\in\mathbb R\}$ is closed and discrete and has the same cardinality as $\mathbb R$.

## Facts & Assumptions

**Given:** The lower-limit plane and its basic rectangles $[a,b)\times[c,d)$.

[F1] Basic product-open sets restrict finitely many coordinates; for this binary product they are the basic rectangles ([[def-product-topology]], [[def-lower-limit-topology]]).

[F2] A subset is dense iff it meets every nonempty basic open set, the rational numbers are countably infinite, and a rational lies strictly between any two distinct reals ([[def-dense-top]], [[thm-rationals-countable]], [[lem-rat-embeds-dense]]).

[L1] A product of two at most countable sets is at most countable, and $\mathbb R$ is uncountable ([[thm-product-of-countable]], [[thm-r-uncountable]]).

## Proof

**Proof technique:** direct.

1.1 Every nonempty $[a,b)\times[c,d)$ contains a point of $\mathbb Q\times\mathbb Q$: choose rationals $p\in[a,b)$ and $q\in[c,d)$. Hence $\mathbb Q\times\mathbb Q$ is dense, and it is at most countable by [L1]. [F1, F2, L1]

1.2 The map $x\mapsto(x,-x)$ is a bijection from $\mathbb R$ onto $D$, so $D$ has cardinality $|\mathbb R|$ and is uncountable. [L1]

1.3 For $(x,-x)\in D$, the rectangle $[x,x+1)\times[-x,-x+1)$ meets $D$ only at $(x,-x)$, so $D$ is discrete in its subspace topology. [F1]

1.4 If $(u,v)\notin D$ and $u+v>0$, every sufficiently small lower-limit rectangle at $(u,v)$ has positive coordinate sum; if $u+v<0$, choose its two right endpoints so that their total increment is less than $-(u+v)$. In either case the rectangle misses $D$, so the complement of $D$ is open. [F1]

2.1 Therefore $D$ is closed discrete, with the stated cardinality, and the plane has the stated countable dense subset. [step 1.1, step 1.2, step 1.3, step 1.4] ∎
````

### `lem-of-q-dense`

````markdown
---
id: lem-of-q-dense
kind: lemma
title: "ℚ is dense in every Archimedean ordered field"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-archimedean-field, lem-of-q-embeds, lem-of-naturals-positive, lem-of-inverse-positive, lem-of-sign-rules, thm-well-ordering-principle, lem-nat-embeds-int, def-int-order]
aliases: []
landmark: false
short: "ℚ dense"
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-07-25
sources:
  scraped: []
  references:
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "T. Tao, Analysis I, 3rd ed."
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "University of Pennsylvania Math 360 notes: Ordered fields"
      url: "https://www2.math.upenn.edu/~zhaotwei/math_360_fall_2012/math_360_fall_2012_description.pdf"
pipeline_run: null
---

## Statement

Let $F$ be an Archimedean ordered field ([[def-archimedean-field]]) and let
$\iota : \mathbb{Q} \to F$ be the canonical embedding ([[lem-of-q-embeds]]). Then
$\iota(\mathbb{Q})$ is dense in $F$: for any $x < y$ in $F$ there is a rational
$q$ with $x < \iota(q) < y$.

## Facts & Assumptions

**Given:** An Archimedean ordered field $F$ with canonical embedding $\iota : \mathbb{Q} \to F$, and elements $x < y$ of $F$.

[L1] Archimedean property: for every $w \in F$ there is $n \ge 1$ with $w < n \cdot 1_F$ ([[def-archimedean-field]]).

[L2] $\iota$ is an order-preserving field homomorphism with $\iota(m/n) = \iota(m)\,(n \cdot 1_F)^{-1}$ for $n \ge 1$ ([[lem-of-q-embeds]]).

[L3] Canonical naturals: $n \cdot 1_F > 0$ for $n \ge 1$, and $(m+n) \cdot 1_F = m \cdot 1_F + n \cdot 1_F$ ([[lem-of-naturals-positive]]).

[L4] If $a > 0$ then $a^{-1} > 0$ ([[lem-of-inverse-positive]]).

[L5] Sign rules: for $c > 0$ one has $a < b$ iff $ac < bc$, and products of positives are positive ([[lem-of-sign-rules]]).

[L6] Every nonempty $T \subseteq \mathbb{Z}$ that is bounded below has a least element: if $k > -M$ for every $k \in T$ then $\{k + M : k \in T\}$ is a nonempty set of naturals, which has a least element, and subtracting $M$ returns the least element of $T$ ([[thm-well-ordering-principle]], [[lem-nat-embeds-int]], [[def-int-order]]).

## Proof

**Proof technique:** direct.

1.1 Since $x < y$, the element $y - x > 0$, so it is nonzero and its inverse $(y - x)^{-1}$ exists in the field $F$; by the Archimedean property applied to $(y - x)^{-1}$, choose $n \ge 1$ with $(y - x)^{-1} < n \cdot 1_F$. [L1, L4, choose]

1.2 By [L1] applied to $(n \cdot 1_F)\,x$ there is a natural $N$ with $(n \cdot 1_F)\,x < N \cdot 1_F$, so the set $T = \{\, k \in \mathbb{Z} : k \cdot 1_F > (n \cdot 1_F)\,x \,\}$ is nonempty ($N \in T$); by [L1] applied to $-(n \cdot 1_F)\,x$ there is a natural $M$ with $-(n \cdot 1_F)\,x < M \cdot 1_F$, so every $k \in T$ satisfies $k \cdot 1_F > (n \cdot 1_F)\,x > -M \cdot 1_F$, hence $k > -M$ (were $k \le -M$, monotonicity of $k \mapsto k \cdot 1_F = \iota(k)$ on $\mathbb{Z}$, which is [L2], would force $k \cdot 1_F \le -M \cdot 1_F$, against $k \cdot 1_F > -M \cdot 1_F$), so $T$ is bounded below by $-M$, and therefore has a least element $m$. [L1, L2, L3, L6, choose]

2.1 Multiplying $(y - x)^{-1} < n \cdot 1_F$ by the positive $(n \cdot 1_F)^{-1}(y - x)$ gives $(n \cdot 1_F)^{-1} < y - x$. [step 1.1, L4, L5]

2.2 By minimality of $m$, $(m-1) \cdot 1_F \le (n \cdot 1_F)\,x < m \cdot 1_F$. [step 1.2]

3.1 Set $q = m/n \in \mathbb{Q}$, so $\iota(q) = \iota(m)(n \cdot 1_F)^{-1}$; dividing $(n \cdot 1_F)\,x < m \cdot 1_F$ by the positive $n \cdot 1_F$ gives $x < \iota(m)(n \cdot 1_F)^{-1} = \iota(q)$. [step 2.2, L2, L4, L5]

3.2 From $(m-1) \cdot 1_F = m \cdot 1_F - 1_F \le (n \cdot 1_F)\,x$, dividing by the positive $n \cdot 1_F$ gives $\iota(q) - (n \cdot 1_F)^{-1} \le x$, that is $\iota(q) \le x + (n \cdot 1_F)^{-1}$. [step 2.2, L3, L4, L5]

4.1 Combining with 2.1, $\iota(q) \le x + (n \cdot 1_F)^{-1} < x + (y - x) = y$. [step 3.2, step 2.1]

5.1 Therefore $x < \iota(q) < y$ with $q = m/n \in \mathbb{Q}$, so $\iota(\mathbb{Q})$ is dense in $F$. [step 3.1, step 4.1] ∎
````

### `thm-cantor-set-ternary-description`

````markdown
---
id: thm-cantor-set-ternary-description
kind: theorem
title: "The Cantor set is exactly the set of $\\sum_{k \\ge 1} a_k 3^{-k}$ with every $a_k \\in \\{0,2\\}$, and this gives a bijection with $\\{0,1\\}^{\\mathbb{N}}$"
status: published
origin: session
deps: [def-cantor-set, def-series, thm-geometric-series, def-injection-surjection-bijection, def-integer-power, lem-power-laws, thm-nonnegative-series-bounded-partial-sums, def-interval, lem-series-linearity, thm-recursion, thm-induction-principle, thm-well-ordering-principle, lem-geometric-sequence-null, def-real-limit, lem-limit-unique, def-sequence, def-complete-ordered-field, def-ordered-field, cor-of-one-positive, lem-of-add-order, lem-of-sign-rules, lem-of-abs-value]
justified_by: []
forward_refs: [cex-cantor-point-that-is-not-an-endpoint]
aliases: []
landmark: true
short: "$C$ = ternary digits in $\\{0,2\\}$"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-27
  audited: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Cantor set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cantor_set"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2 (§2.44)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Statement

Let $D$ be the set of sequences $a : \mathbb{N} \to \{0,2\}$
([[def-sequence]]), the two values being the real numbers $0$ and $2$. For
$a \in D$ the series $\sum_{k \ge 0} a_k 3^{-k-1}$ converges ([[def-series]]);
write

$$\Phi(a) \;:=\; \sum_{k=0}^{\infty} a_k 3^{-k-1} .$$

Then, with $C$ and $(C_n)$ as in [[def-cantor-set]]:

1. $\Phi(a) \in [0,1]$ for every $a \in D$, and $C = \{\, \Phi(a) : a \in D \,\}$;
2. $\Phi$ is injective, so $\Phi$ is a bijection from $D$ onto $C$
   ([[def-injection-surjection-bijection]]);
3. consequently $b \mapsto \Phi\big((2 b_k)_k\big)$ is a bijection from
   $\{0,1\}^{\mathbb{N}}$, the set of sequences with values in $\{0,1\}$, onto
   $C$;
4. $C = \tfrac13 C \cup \big(\tfrac23 + \tfrac13 C\big)$, and the two sets on the
   right are disjoint.

**On the indexing.** The digit $a_k$ carries the weight $3^{-k-1}$, so the
series starts at $k = 0$ with the term $a_0/3$; written with the classical
$1$-based index it reads $\sum_{k \ge 1} a_k 3^{-k}$, which is the form in the
title. Sequences in this library are functions on $\mathbb{N}$ and $\mathbb{N}$
contains $0$ ([[def-sequence]]), so the $0$-based form is the one used
throughout the proof.

## Facts & Assumptions

**Given:** The sets $C_n$ and $C$ of [[def-cantor-set]], the set $D$ of sequences with values in $\{0,2\}$, and for $a \in D$ the shifted sequence $\sigma a$ defined by $(\sigma a)_k := a_{k+1}$, which again lies in $D$.

[L1] The Cantor set: $C_0 = [0,1]$, $C_{n+1} = \tfrac13 C_n \cup (\tfrac23 + \tfrac13 C_n)$, $C = \bigcap_n C_n = \bigcap_n C_{n+1}$, every $C_n \subseteq [0,1]$, the two halves of $C_{n+1}$ lie in $[0,\tfrac13]$ and in $[\tfrac23,1]$ respectively and are disjoint, and $3^{-n}$ denotes $(3^{-1})^n$ ([[def-cantor-set]], [[def-interval]]).

[L2] Series: partial sums $s_n = \sum_{k<n} t_k$, convergence of $(s_n)$, the sum as its limit, the tail clause $\sum_{k \ge m} t_k$ and the identity $\sum_{k<n+1} t_k = t_0 + \sum_{j<n} t_{j+1}$ ([[def-series]], [[def-sequence]]).

[L3] A series of nonnegative terms converges exactly when its partial sums are bounded above, its sum is then their supremum, every partial sum is at most the sum, and a convergent series of nonnegative terms has sum $\ge 0$ ([[thm-nonnegative-series-bounded-partial-sums]]).

[L4] $\sum_{k=0}^{\infty} 3^{-k} = 1/(1 - 3^{-1}) = 3 \cdot 2^{-1}$ ([[thm-geometric-series]], [[def-integer-power]], [[lem-power-laws]]).

[L5] Convergent series add and scale termwise ([[lem-series-linearity]]).

[L6] Recursion and induction on $\mathbb{N}$ ([[thm-recursion]], [[thm-induction-principle]]).

[L7] Every nonempty subset of $\mathbb{N}$ has a least element ([[thm-well-ordering-principle]]).

[L8] $3^{-n} \to 0$ ([[lem-geometric-sequence-null]]); convergence is tested against rational $\varepsilon > 0$ and a convergent sequence has exactly one limit ([[def-real-limit]], [[lem-limit-unique]]); $|z| \ge 0$ and $|z| = z$ for $z \ge 0$ ([[lem-of-abs-value]]).

[L9] Ordered-field arithmetic: $0 < 1$, so $2 > 0$ and $3 > 0$ and $3^{-1} > 0$, and $3^{-1} < 2 \cdot 3^{-1}$; adding a constant and multiplying by a positive preserve an inequality; the order is total and transitive ([[cor-of-one-positive]], [[lem-of-add-order]], [[lem-of-sign-rules]], [[def-ordered-field]], [[def-complete-ordered-field]]). These order-arithmetic facts are stated by their sources for the strict order only; the nonstrict forms used below follow by adjoining the equality case, in which the two sides coincide.

## Proof

**Proof technique:** direct.

1.1 **$\Phi$ is well defined and takes values in $[0,1]$.** For $a \in D$ every term $a_k 3^{-k-1}$ is $\ge 0$ by [L1] and [L9], and for every $n$ the partial sum satisfies $\sum_{k<n} a_k 3^{-k-1} \le \sum_{k<n} 2 \cdot 3^{-1} \cdot 3^{-k} = 2 \cdot 3^{-1} \sum_{k<n} 3^{-k} \le 2 \cdot 3^{-1} \cdot 3 \cdot 2^{-1} = 1$, by [L3], [L4] and [L9]. So by [L3] the series converges, its sum $\Phi(a)$ satisfies $0 \le \Phi(a) \le 1$, and $\Phi(a) \in [0,1]$ by [L1]. [given, L1, L3, L4, L9]

1.2 **Shift identity:** $\Phi(a) = a_0 \cdot 3^{-1} + 3^{-1}\Phi(\sigma a)$ for every $a \in D$. Indeed by [L2] the partial sums satisfy $\sum_{k<n+1} a_k 3^{-k-1} = a_0 3^{-1} + \sum_{j<n} a_{j+1} 3^{-j-2} = a_0 3^{-1} + 3^{-1}\sum_{j<n} a_{j+1}3^{-j-1}$, using $3^{-j-2} = 3^{-1}\cdot 3^{-j-1}$ from [L1] and [L9]; letting $n$ grow and using [L5] and [L2] gives the identity. [given, L1, L2, L5, L9]

1.3 **Self-similarity of $C$**, claim 4. If $y \in C$ then $y \in C_n$ for every $n$, so $y \cdot 3^{-1} \in \tfrac13 C_n \subseteq C_{n+1}$ and $2 \cdot 3^{-1} + y \cdot 3^{-1} \in \tfrac23 + \tfrac13 C_n \subseteq C_{n+1}$ for every $n$, whence both lie in $\bigcap_n C_{n+1} = C$ by [L1]; this gives the inclusion $\supseteq$. Conversely let $x \in C$, so $x \in C_{n+1}$ for every $n$. By [L1] the first half of $C_{n+1}$ lies in $[0,\tfrac13]$ and the second in $[\tfrac23,1]$, and $\tfrac13 < \tfrac23$ by [L9]. If $x \le \tfrac13$ then $x \notin [\tfrac23,1]$, so for every $n$ one has $x \in \tfrac13 C_n$, that is $3x \in C_n$; hence $3x \in C$ and $x \in \tfrac13 C$. If $x > \tfrac13$ then $x \notin [0,\tfrac13]$, so for every $n$ one has $x \in \tfrac23 + \tfrac13 C_n$, that is $3x - 2 \in C_n$; hence $3x - 2 \in C$ and $x \in \tfrac23 + \tfrac13 C$. Disjointness is [L1] and [L9], since $\tfrac13 C \subseteq [0,\tfrac13]$ and $\tfrac23 + \tfrac13 C \subseteq [\tfrac23,1]$. [L1, L9]

2.1 **$\Phi(a) \in C$ for every $a \in D$.** By induction on $n$ ([L6]) the statement "for every $a \in D$, $\Phi(a) \in C_n$" holds for every $n$: at $n = 0$ it is step 1.1 and [L1]; and if it holds at $n$, then for $a \in D$ the value $a_0$ is $0$ or $2$, so step 1.2 gives $\Phi(a) = 3^{-1}\Phi(\sigma a) \in \tfrac13 C_n$ in the first case and $\Phi(a) = 2 \cdot 3^{-1} + 3^{-1}\Phi(\sigma a) \in \tfrac23 + \tfrac13 C_n$ in the second, so $\Phi(a) \in C_{n+1}$ by [L1]. Hence $\Phi(a) \in \bigcap_n C_n = C$. [step 1.1, step 1.2, L1, L6]

2.2 **The digit recursion.** Fix $x \in C$ and let $T : \mathbb{R} \to \mathbb{R}$ be $T(y) := 3y$ for $y \le 3^{-1}$ and $T(y) := 3y - 2$ for $y > 3^{-1}$, a definition by cases on the total order ([L9]) and so a genuine function. By [L6] there is $y : \mathbb{N} \to \mathbb{R}$ with $y_0 = x$ and $y_{n+1} = T(y_n)$; put $a_n := 0$ when $y_n \le 3^{-1}$ and $a_n := 2$ otherwise, so that $a \in D$ and $y_{n+1} = 3 y_n - a_n$ for every $n$. Every $y_n$ lies in $C$, by induction on $n$: $y_0 = x \in C$; and if $y_n \in C$ then, by step 1.3, either $y_n \in \tfrac13 C \subseteq [0,\tfrac13]$ or $y_n \in \tfrac23 + \tfrac13 C \subseteq [\tfrac23,1]$, and these two cases are exactly $y_n \le \tfrac13$ and $y_n > \tfrac13$ by [L9]; in the first $y_n = z \cdot 3^{-1}$ with $z \in C$ and $y_{n+1} = 3y_n = z \in C$, in the second $y_n = 2 \cdot 3^{-1} + z \cdot 3^{-1}$ with $z \in C$ and $y_{n+1} = 3y_n - 2 = z \in C$. [step 1.3, L1, L6, L9]

2.3 **$\Phi$ is injective.** Let $a, b \in D$ with $a \ne b$; the set of $k$ with $a_k \ne b_k$ is a nonempty subset of $\mathbb{N}$, so by [L7] it has a least element $k$, and by symmetry we may take $a_k = 0$ and $b_k = 2$. By [L5], $\Phi(b) - \Phi(a) = \sum_{j \ge 0}(b_j - a_j)3^{-j-1}$, and the terms with $j < k$ vanish, so by [L2] this equals $2 \cdot 3^{-k-1} + R$ with $R := \sum_{j \ge k+1}(b_j - a_j)3^{-j-1}$. Every $b_j - a_j$ is at least $-2$, so the series $\sum_{j \ge k+1}\big((b_j - a_j) + 2\big)3^{-j-1}$ has nonnegative terms and hence nonnegative sum by [L3], giving $R \ge -\sum_{j \ge k+1} 2 \cdot 3^{-j-1} = -2 \cdot 3^{-k-2} \cdot 3 \cdot 2^{-1} = -3^{-k-1}$ by [L2], [L4], [L5] and [L9]. Therefore $\Phi(b) - \Phi(a) \ge 2 \cdot 3^{-k-1} - 3^{-k-1} = 3^{-k-1} > 0$ and $\Phi(a) \ne \Phi(b)$. [step 1.1, L2, L3, L4, L5, L7, L9]

3.1 **The value is recovered from the digits.** With $x$, $(y_n)$ and $a$ as in step 2.2, put $s_n := \sum_{k<n} a_k 3^{-k-1}$. Then $x = s_n + 3^{-n} y_n$ for every $n$, by induction on $n$ ([L6]): at $n = 0$ both sides are $x$, since $s_0 = 0$ by [L2] and $3^{0} = 1$; and if $x = s_n + 3^{-n}y_n$ then $s_{n+1} + 3^{-n-1}y_{n+1} = s_n + a_n 3^{-n-1} + 3^{-n-1}(3y_n - a_n) = s_n + 3^{-n}y_n = x$, using [L1], [L2] and [L9]. [step 2.2, L1, L2, L6, L9]

4.1 **Hence $x = \Phi(a)$, so $C \subseteq \Phi[D]$.** Every $y_n$ lies in $C \subseteq [0,1]$ by step 2.2 and [L1], so $0 \le x - s_n = 3^{-n}y_n \le 3^{-n}$ by step 3.1 and [L9]. Given a rational $\varepsilon > 0$, [L8] supplies $N$ with $3^{-n} < \varepsilon$ for all $n \ge N$, and then $|s_n - x| = x - s_n \le 3^{-n} < \varepsilon$ by [L8]; so $s_n \to x$. But $s_n \to \Phi(a)$ by [L2], since $(s_n)$ is the sequence of partial sums of the series defining $\Phi(a)$, and limits are unique by [L8]; therefore $x = \Phi(a)$ with $a \in D$. [step 2.2, step 3.1, L1, L2, L8, L9]

5.1 By steps 2.1 and 4.1 the image of $D$ under $\Phi$ is exactly $C$, which with step 1.1 is claim 1; step 2.3 is claim 2, so $\Phi$ is a surjection from $D$ onto $C$ that is injective, that is, a bijection ([[def-injection-surjection-bijection]]); the map $b \mapsto (2b_k)_k$ is a bijection from $\{0,1\}^{\mathbb{N}}$ onto $D$, with inverse $a \mapsto (a_k \cdot 2^{-1})_k$ by [L9], and a composition of bijections is a bijection, which is claim 3; and step 1.3 is claim 4. [step 1.1, step 1.3, step 2.1, step 2.3, step 4.1, L9] ∎

## Remarks

- **The endpoints are the digit sequences that are eventually constant.** For
  instance $0 = \Phi(0,0,0,\dots)$, $1 = \Phi(2,2,2,\dots)$,
  $\tfrac13 = \Phi(0,2,2,2,\dots)$ and $\tfrac23 = \Phi(2,0,0,0,\dots)$, the
  first two by [[thm-geometric-series]] and the last two by the shift identity of
  step 1.2. That the eventually constant sequences do **not** exhaust $C$ is the
  content of [[cex-cantor-point-that-is-not-an-endpoint]], where $1/4$ is
  computed to be $\Phi(0,2,0,2,\dots)$.

- **No digit is ever $1$, and that is the whole point.** A real of $[0,1]$ with a
  ternary expansion using the digit $1$ at some place and not representable
  without it lies in one of the removed middle thirds. The theorem does not
  assert that every real has a ternary expansion, and it does not need to: the
  map $\Phi$ is constructed from the digits, and the converse direction extracts
  digits from a point of $C$ by the canonical recursion of step 2.2, never by
  invoking a general expansion theorem.

- **Where the choice-freeness lies.** The digit extraction is a definition by
  cases on a total order fed to [[thm-recursion]], so the whole passage from a
  point of $C$ to its digit sequence is a single function, not a sequence of
  selections. The same discipline governs [[thm-perfect-set-uncountable-r]] and
  [[thm-baire-category-r]].

- **Claim 3 is what makes $C$ uncountable.** $\{0,1\}^{\mathbb{N}}$ is in
  bijection with the power set of $\mathbb{N}$, which is uncountable by
  [[thm-cantor-powerset]]; that route and the perfect-set route are both recorded
  in [[thm-cantor-set-properties]].
````

### `thm-cardinal-power-set-and-cantor`

````markdown
---
id: thm-cardinal-power-set-and-cantor
kind: theorem
title: "Assuming the Axiom of Choice, $2^{\\kappa} = \\lvert \\mathcal{P}(\\kappa) \\rvert$, and Cantor's theorem in cardinal form: $\\kappa < 2^{\\kappa}$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-cardinal-arithmetic, thm-cantor-powerset, def-equinumerous, lem-cardinality-of-a-well-orderable-set, lem-cardinal-operations-are-well-defined, def-injection-surjection-bijection, lem-cardinal-arithmetic-basic-laws, def-cardinal, def-axiom-of-choice, thm-well-ordering-theorem, lem-ordinal-trichotomy]
justified_by: []
aliases: []
landmark: true
short: "$\\kappa < 2^{\\kappa} = \\lvert\\mathcal{P}(\\kappa)\\rvert$"
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-5.6-sol-codex-subscription
    verdict: certify
    date: 2026-08-05
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "P. Koellner, Set Theory: The Independence Phenomenon, Ch. 3"
      url: "https://people.math.harvard.edu/~wboney/fall16/settheory.pdf"
    - title: "Cantor's theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cantor%27s_theorem"
    - title: "Cardinal number — cardinal arithmetic (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cardinal_number#Cardinal_arithmetic"
pipeline_run: null
---

## Statement

**Assume the Axiom of Choice** ([[def-axiom-of-choice]]), so that every set has a
cardinality ([[thm-well-ordering-theorem]],
[[lem-cardinality-of-a-well-orderable-set]]). Let $\kappa$ be a cardinal
([[def-cardinal]]) and read $2 = \{0,1\}$ as a cardinal. Then:

**(a)** $2^{\kappa} = \lvert \mathcal{P}(\kappa) \rvert$
([[def-cardinal-arithmetic]]), and more generally
$2^{\lvert A \rvert} = \lvert \mathcal{P}(A) \rvert$ for every set $A$;

**(b)** $\kappa < 2^{\kappa}$.

Clause (b) is [[thm-cantor-powerset]] transcribed into cardinal arithmetic. The
underlying combinatorial fact — that there is no surjection $A \to \mathcal{P}(A)$
— is a theorem of ZF and needs no choice at all; what the Axiom of Choice buys
here is only the right to write $\lvert \mathcal{P}(A) \rvert$ and $2^{\kappa}$
as cardinals in the first place.

## Facts & Assumptions

**Given:** The Axiom of Choice, a cardinal $\kappa$, and a set $A$.

[L1] $\kappa^{\lambda} = \lvert {}^{\lambda}\kappa \rvert$, where ${}^{\lambda}\kappa$ is the set of functions $\lambda \to \kappa$ ([[def-cardinal-arithmetic]]).

[L2] There is no surjection $A \to \mathcal{P}(A)$, and $A \prec \mathcal{P}(A)$, that is $A \preceq \mathcal{P}(A)$ and $A \not\approx \mathcal{P}(A)$ ([[thm-cantor-powerset]], [[def-equinumerous]]).

[L3] For a well-orderable $X$, $X \approx \lvert X \rvert$, the value is a cardinal, and equinumerous sets receive the same one ([[lem-cardinality-of-a-well-orderable-set]]).

[L4] $A \approx B$ implies $\mathcal{P}(A) \approx \mathcal{P}(B)$ (claim (b) of [[lem-cardinal-operations-are-well-defined]]).

[L5] For cardinals, $\kappa \le \lambda$ if and only if $\kappa \preceq \lambda$; and $A \preceq B$ with both well-orderable gives $\lvert A \rvert \le \lvert B \rvert$ (claim (a) of [[lem-cardinal-arithmetic-basic-laws]]).

[L6] Assuming the Axiom of Choice every set is well-orderable, hence has a cardinality ([[def-axiom-of-choice]], [[thm-well-ordering-theorem]]).

[L7] Ordinals satisfy trichotomy, and a map with a two-sided inverse is a bijection ([[lem-ordinal-trichotomy]], [[def-injection-surjection-bijection]]).

## Proof

**Proof technique:** direct.

1.1 The map $\chi : \mathcal{P}(\kappa) \to {}^{\kappa}2$ sending $S$ to its characteristic function, $\chi_S(\xi) = 1$ for $\xi \in S$ and $\chi_S(\xi) = 0$ otherwise, has the two-sided inverse $h \mapsto h^{-1}[\{1\}]$, so it is a bijection and $\mathcal{P}(\kappa) \approx {}^{\kappa}2$. [L7]

1.2 By [L2], $\kappa \preceq \mathcal{P}(\kappa)$ and $\kappa \not\approx \mathcal{P}(\kappa)$. [L2]

2.1 Claim (a): by [L6] both $\mathcal{P}(\kappa)$ and ${}^{\kappa}2$ have cardinalities, equal by step 1.1 and [L3], so $\lvert \mathcal{P}(\kappa)\rvert = \lvert {}^{\kappa}2\rvert = 2^{\kappa}$ by [L1]; and for an arbitrary set $A$, $A \approx \lvert A \rvert$ by [L3] gives $\mathcal{P}(A) \approx \mathcal{P}(\lvert A \rvert)$ by [L4], hence $\lvert \mathcal{P}(A)\rvert = 2^{\lvert A \rvert}$. [step 1.1, L1, L3, L4, L6]

2.2 By [L5] applied to step 1.2, $\kappa = \lvert \kappa \rvert \le \lvert \mathcal{P}(\kappa)\rvert$; and $\kappa \ne \lvert \mathcal{P}(\kappa)\rvert$, since otherwise $\kappa \approx \lvert \mathcal{P}(\kappa)\rvert \approx \mathcal{P}(\kappa)$ by [L3], contradicting step 1.2. [step 1.2, L3, L5, L6]

3.1 Therefore $\kappa < \lvert \mathcal{P}(\kappa)\rvert = 2^{\kappa}$ by trichotomy, which with step 2.1 is claim (b). [step 2.1, step 2.2, L7] ∎

## Remarks

**Why $2$ and not some other base.** The characteristic function of a subset takes two values, so the power set is the function space with base $2$; that is the whole content of step 1.1, and it is why $2^{\kappa}$ rather than $\mathcal{P}$ is the object cardinal arithmetic manipulates. For infinite $\kappa$, any base $\mu$ with $2 \le \mu$ gives the same value once $\mu \le 2^{\kappa}$, by monotonicity, the second exponent law and [[thm-hessenberg]], and the companion page computes one such case; for finite $\kappa$ the bases genuinely differ, $3^{2} = 9 \ne 4 = 2^{2}$.

**No fixed point.** Clause (b) holds for **every** cardinal, so no cardinal satisfies $2^{\kappa} = \kappa$ and the hierarchy of cardinals never terminates. The corresponding statement one level up — that $\alpha \mapsto \aleph_\alpha$ has no fixed point — is **false**, and the companion page exhibits one; the two operations behave quite differently, and it is the power operation, not the successor operation, that is unboundedly expansive.

**Where the Axiom of Choice is and is not spent.** [[thm-cantor-powerset]] is choice free, and so is step 1.1. The hypothesis is used only to know that a set has a cardinality: at $\mathcal{P}(\kappa)$ and at ${}^{\kappa}2$ for clause (b), and again at $A$ and $\mathcal{P}(A)$ in the general form of clause (a). In ZF alone, $\mathcal{P}(\omega)$ may fail to be well-orderable, and then $2^{\aleph_0}$ is not an ordinal and the inequality of clause (b) has no cardinal to compare $\kappa$ with — while the underlying statement "there is no surjection $\omega \to \mathcal{P}(\omega)$" remains a theorem.
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

### `thm-schroder-bernstein`

````markdown
---
id: thm-schroder-bernstein
kind: theorem
title: "The Schröder-Bernstein theorem"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-injection-surjection-bijection, def-equinumerous, thm-recursion, def-natural-numbers, lem-nat-nonzero-is-successor]
justified_by: []
aliases: [thm-cantor-schroder-bernstein, schroeder-bernstein]
landmark: true
short: "$A\\preceq B$ and $B\\preceq A$ give $A\\approx B$"
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
    - title: "Schröder-Bernstein theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Schr%C3%B6der%E2%80%93Bernstein_theorem"
    - title: "Countable set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Countable_set"
pipeline_run: null
---

## Statement

Let $A$ and $B$ be sets with $A \preceq B$ and $B \preceq A$
([[def-equinumerous]]). Then $A \approx B$.

Equivalently: if there is an injection $A \to B$ and an injection $B \to A$, then
there is a bijection $A \to B$ ([[def-injection-surjection-bijection]]).

**The proof uses no choice principle.** The bijection is written down explicitly
from the two given injections, and the only "selections" it makes are of the
unique preimage of a point under an injection, which is determined, not chosen.
The single infinite construction is an application of the recursion theorem
([[thm-recursion]]), whose data are a set, a starting point and one function.

## Facts & Assumptions

**Given:** Sets $A$ and $B$ together with injections $f : A \to B$ and $g : B \to A$. For $S \subseteq A$ write $f[S]$ for its image, and similarly for $g$.

[L1] Injection, surjection, bijection, image and preimage, and the fact that an injective $g$ has, for each $x \in g[B]$, exactly one $b \in B$ with $g(b) = x$ ([[def-injection-surjection-bijection]]).

[L2] $A \approx B$ means precisely that some bijection $A \to B$ exists ([[def-equinumerous]]).

[L3] Recursion theorem: for any set $X$, any $x_0 \in X$ and any $F : X \to X$ there is a (unique) function $h : \mathbb{N} \to X$ with $h(0) = x_0$ and $h(\sigma(n)) = F(h(n))$ for all $n \in \mathbb{N}$ ([[thm-recursion]], [[def-natural-numbers]]).

[L4] Every nonzero natural number is a successor: $n \ne 0$ implies $n = \sigma(m)$ for some $m \in \mathbb{N}$ ([[lem-nat-nonzero-is-successor]]).

## Proof

**Proof technique:** direct.

1.1 Apply [L3] with $X = \mathcal{P}(A)$ (a set by the Power Set axiom), with $x_0 = A \setminus g[B]$, and with $F : \mathcal{P}(A) \to \mathcal{P}(A)$ defined by $F(S) = g[f[S]]$: this yields a function $n \mapsto C_n$ from $\mathbb{N}$ to $\mathcal{P}(A)$ with $C_0 = A \setminus g[B]$ and $C_{\sigma(n)} = g[f[C_n]]$ for every $n$. [L3, given, construct]

2.1 Put $C = \bigcup_{n \in \mathbb{N}} C_n$, a subset of $A$ (a set by Replacement and Union applied to the function of step 1.1); thus $x \in C$ if and only if $x \in C_n$ for some $n \in \mathbb{N}$, and $C_{\sigma(n)} \subseteq C$ for every $n$. [step 1.1, construct]

3.1 Let $x \in A \setminus C$. Then $x \notin C_0 = A \setminus g[B]$, so $x \in g[B]$, and since $g$ is injective there is exactly one $b \in B$ with $g(b) = x$; write $b = g^{-1}(x)$, a value determined by $x$ alone. [step 2.1, L1, given]

4.1 Define $h : A \to B$ by $h(x) = f(x)$ for $x \in C$ and $h(x) = g^{-1}(x)$ for $x \in A \setminus C$; the two clauses have disjoint domains whose union is $A$, and each assigns exactly one value, by step 3.1 for the second, so $h$ is a well-defined function. [step 3.1, construct]

5.1 If $x, y \in C$ and $h(x) = h(y)$ then $f(x) = f(y)$, so $x = y$ because $f$ is injective; if $x, y \in A \setminus C$ and $h(x) = h(y) = b$ then $x = g(b) = y$ by step 3.1. [step 4.1, given, L1]

5.2 The remaining case cannot occur: if $x \in C$ and $y \in A \setminus C$ had $h(x) = h(y)$, then $x \in C_n$ for some $n$, and $h(y) = g^{-1}(y)$ gives $y = g(h(y)) = g(f(x)) \in g[f[C_n]] = C_{\sigma(n)} \subseteq C$, contradicting $y \notin C$; hence $h$ is injective. [step 1.1, step 2.1, step 4.1]

5.3 $h$ is surjective: let $b \in B$ and consider $g(b) \in A$. If $g(b) \notin C$ then $h(g(b)) = g^{-1}(g(b)) = b$. If $g(b) \in C$ then $g(b) \in C_n$ for some $n$; here $n \ne 0$, since $g(b) \in g[B]$ while $C_0 = A \setminus g[B]$, so $n = \sigma(m)$ by [L4] and $g(b) \in C_{\sigma(m)} = g[f[C_m]]$, that is, $g(b) = g(f(x))$ for some $x \in C_m \subseteq C$; injectivity of $g$ gives $b = f(x) = h(x)$. Either way $b$ is a value of $h$. [step 1.1, step 2.1, step 4.1, L1, L4, given]

6.1 Thus $h : A \to B$ is injective and surjective, hence a bijection, and therefore $A \approx B$. [step 5.1, step 5.2, step 5.3, L1, L2] ∎

## Remarks

- The set $C$ is exactly the set of points of $A$ reachable from the "unmatched" part $A \setminus g[B]$ by applying $g \circ f$ finitely often. On $C$ the bijection follows $f$ forwards; off $C$ it runs $g$ backwards. Both halves are forced: a point outside $g[B]$ cannot be an image of $g$, and once one point is handled by $f$ its $g \circ f$ image must be handled by $f$ too.

- **Why the choice-freeness is worth stating.** Many textbook proofs phrase the construction as "follow the chain of preimages backwards until it stops", which sounds like an infinite sequence of selections. It is not: the preimage under an injection is unique when it exists, and the recursion above is a single application of [[thm-recursion]] to one explicitly given function $S \mapsto g[f[S]]$. The theorem is a theorem of ZF.

- With this theorem, $\preceq$ behaves like an order on equinumerosity classes: $A \preceq B$ and $B \preceq A$ give $A \approx B$. Comparability, that $A \preceq B$ or $B \preceq A$ holds for any two sets, is a different matter entirely: over ZF it is equivalent to the Axiom of Choice ([[def-axiom-of-choice]]), a classical result quoted here and proved nowhere on this page, the harder half of it going back to Hartogs. Nothing on this page uses comparability.
````

