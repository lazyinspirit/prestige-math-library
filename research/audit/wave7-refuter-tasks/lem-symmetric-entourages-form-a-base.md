## Selection reasons

- high risk (6): 2 cited facts; 6 numbered proof steps; boundary-sensitive language; induction, recursion, or minimality

## Target item — `lem-symmetric-entourages-form-a-base`

Normalized current SHA-256: `d07ad65bc816462992ebbf0f468b085996ad6d2f30b2a3823ba92ac6ec2de220`

The complete current item follows, including frontmatter:

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
  verified:
    model: gpt-5.6-terra-codex-subscription
    verdict: certify
    date: 2026-08-09
    scope: published-audit
    delegated_by: owner
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

## Wave 7 provenance row for the target

```json
{
  "id": "lem-symmetric-entourages-form-a-base",
  "statement": "ai-altered",
  "proof": "ai-altered",
  "evidence": "semantic-source",
  "urls": [
    "https://math.berkeley.edu/~wodzicki/H104.F13/UniformStructure-alt.pdf"
  ],
  "rationale": "Wodzicki states that symmetric entourages form a base, and Exercise 23 gives arbitrary finite-composite control. The A4-recovery repair packages those source-backed clauses into one Statement and expands the finite square-root derivation, so the materially repaired Statement is ai-altered and semantically sourced.",
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
      "quote": "A **uniformity** on $X$ is a filter $\\mathcal U$ on $X\\times X$ ([[def-filter]]) such that:\n\n- every $E\\in\\mathcal U$ contains $\\Delta_X$;\n- $E\\in\\mathcal U$ implies $E^{-1}\\in\\mathcal U$;\n- for every $E\\in\\mathcal U$ there is $D\\in\\mathcal U$ with $D\\circ D\\subseteq E$.",
      "uses": [
        "1.1",
        "1.2",
        "2.1",
        "2.2"
      ]
    },
    {
      "fact": "L1",
      "source": "def-filter-base",
      "source_section": "Definition",
      "quote": "Let $X$ be a set. A family $\\mathcal{B} \\subseteq \\mathcal{P}(X)$ is a\n**filter base on $X$** when it satisfies:",
      "uses": [
        "3.1"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1.1",
      "claim": "Choose $R\\in\\mathcal U$ with $R\\circ R\\subseteq E$, and put $S:=R\\cap R^{-1}$. [A1, choose]",
      "step": "1.1",
      "inputs": [
        "A1"
      ]
    },
    {
      "id": "step-1.2",
      "claim": "Put $E_0:=E$. By finitely iterating the square-root axiom, choose entourages $E_1,\\ldots,E_n$ such that $E_{k+1}\\circ E_{k+1}\\subseteq E_k$ for $0\\le k<n$, and put $D:=E_n\\cap E_n^{-1}$. [A1, choose]",
      "step": "1.2",
      "inputs": [
        "A1"
      ]
    },
    {
      "id": "step-2.1",
      "claim": "The set $S$ is an entourage, since $R,R^{-1}\\in\\mathcal U$ and a filter is closed under intersections; also $S=S^{-1}$ and $S\\subseteq R\\circ R\\subseteq E$, because every entourage contains the diagonal. [step 1.1, A1]",
      "step": "2.1",
      "inputs": [
        "1.1",
        "A1"
      ]
    },
    {
      "id": "step-2.2",
      "claim": "The entourage $D$ is symmetric and $D\\subseteq E_n$. Induction on $k$ gives $D^{\\circ 2^k}\\subseteq E_{n-k}$ for $0\\le k\\le n$, hence $D^{\\circ 2^n}\\subseteq E$. Since every entourage contains the diagonal and $n\\le 2^n$, one may insert diagonal factors to obtain $D^{\\circ n}\\subseteq D^{\\circ 2^n}\\subseteq E$. [step 1.2, A1, algebra]",
      "step": "2.2",
      "inputs": [
        "1.2",
        "A1",
        "algebra"
      ]
    },
    {
      "id": "step-3.1",
      "claim": "Thus symmetric entourages refine every entourage; their intersections are symmetric entourages and none is empty because each contains the diagonal, so they form a filter base by [L1]. [step 2.1, L1]",
      "step": "3.1",
      "inputs": [
        "2.1",
        "L1"
      ]
    },
    {
      "id": "step-4.1",
      "claim": "Therefore symmetric entourages form a base and admit the asserted finite-composite control. [step 3.1, step 2.2] ∎",
      "step": "4.1",
      "inputs": [
        "3.1",
        "2.2"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "checked",
      "evidence": "statement and step 1.1: the explicit empty-set or empty-family branch was checked against the displayed definitions"
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
  "finite_smoke": [],
  "risk_review": {
    "status": "complete",
    "reviewer": "Audit-Alpha wave 7 (owner-delegated); DeepSeek V4 Pro audit-refuter",
    "notes": "high risk (6): 2 cited facts; 6 numbered proof steps; boundary-sensitive language; induction, recursion, or minimality, routed by risk-report.mjs. The read-only DeepSeek V4 Pro audit-refuter received the complete target and every cited dependency and returned CLEAN. Boundary evidence: Checked: empty set / degenerate uniformity (no proper uniformity exists on ∅; for nonempty X the proof uses diagonal and properness without issue). n=1 base case (construction works, induction and diagonal-step give D⊆E). Trivial uniformity and diagonal-only entourage (square-root axiom forces D=Δ, compatible). All finite choices are from nonempty collections (no choice axiom needed). Induction on k up to n is well-founded. The “insert diagonal factors” inference reduces to Δ⊆D ⇒ D^{∘n}⊆D^{∘2^n} (valid for all entourages). No counterexample found. Checked surface: Read the title, the public Statement, all numbered proof steps (1.1, 1.2, 2.1, 2.2, 3.1, 4.1), and the Remarks sections of the cited definitions (the target item itself contains no Remarks). ``` Alpha adjudicated the return against the current item and cited dependencies on disk and found no fatal mathematical or dependency-citation defect. Evidence: research/audit/wave7-preserved-refuters/lem-symmetric-entourages-form-a-base--01a1deb9e7f921b3.result.json."
  }
}
```

## Generated audit-manifest relationships for the target

```json
[
  {
    "source": "lem-symmetric-entourages-form-a-base",
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
    "source": "lem-symmetric-entourages-form-a-base",
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
  }
]
```

## Relevant pending generated-risk rows

```json
[]
```

## Full text of every cited or declared item (2)

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

