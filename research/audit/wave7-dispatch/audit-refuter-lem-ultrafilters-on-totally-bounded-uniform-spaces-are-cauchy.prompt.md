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

- high risk (6): 5 declared dependencies; 4 cited facts; boundary-sensitive language

## Target item — `lem-ultrafilters-on-totally-bounded-uniform-spaces-are-cauchy`

Normalized current SHA-256: `a5df74cdd0c9618dff90059d952a31dcdf8a50745f2e60040991daa797cdbad3`

The complete current item follows, including frontmatter:

````markdown
---
id: lem-ultrafilters-on-totally-bounded-uniform-spaces-are-cauchy
kind: lemma
title: "Every ultrafilter on a totally bounded uniform space is Cauchy"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-totally-bounded-uniform-space, def-cauchy-filter-in-a-uniform-space, def-ultrafilter, lem-ultrafilter-prime, lem-symmetric-entourages-form-a-base]
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
  references: [{title: "J. Wodzicki, Uniform Structure", url: "https://math.berkeley.edu/~wodzicki/H104.F13/UniformStructure-alt.pdf"}, {title: "Encyclopedia of Mathematics, Uniform space", url: "https://encyclopediaofmath.org/wiki/Uniform_space"}]
pipeline_run: null
---

## Statement

Every ultrafilter on a totally bounded uniform space is Cauchy.

## Facts & Assumptions

**Given:** A totally bounded uniform space $X$ and an ultrafilter $\mathcal V$ on it.

[L1] Total boundedness gives a finite cover by entourage balls ([[def-totally-bounded-uniform-space]]).

[L2] An ultrafilter containing a finite union contains one member of the union ([[lem-ultrafilter-prime]]).

[L3] Cauchyness asks for an $E$-small filter member for each entourage ([[def-cauchy-filter-in-a-uniform-space]]).

[L4] Every entourage contains a symmetric entourage whose square lies in it ([[lem-symmetric-entourages-form-a-base]]).

## Proof

**Proof technique:** direct.

1.1 Let $E$ be an entourage and choose a symmetric $D$ with $D^{-1}\circ D=D^{\circ2}\subseteq E$. [L4, choose]

1.2 Total boundedness gives finite $F$ with $X=\bigcup_{x\in F}D[x]$; since $X\in\mathcal V$, [L2] gives $D[x]\in\mathcal V$ for some $x\in F$. [L1, L2]

2.1 Any two points of $D[x]$ are $E$-related, so $D[x]\times D[x]\subseteq E$. [step 1.1, step 1.2]

3.1 This supplies an $E$-small member for every $E$, so $\mathcal V$ is Cauchy by [L3]. [step 2.1, L3] ∎
````

## Wave 7 provenance row for the target

```json
{
  "id": "lem-ultrafilters-on-totally-bounded-uniform-spaces-are-cauchy",
  "statement": "ai-altered",
  "proof": "ai-generated",
  "evidence": "established-knowledge",
  "urls": [
    "https://encyclopediaofmath.org/wiki/Uniform_space"
  ],
  "rationale": "ESCALATED TO ALPHA. This is the standard ultrafilter characterization behind precompactness, and the finite-cover proof is elementary, but the located Encyclopedia source states only the surrounding completion/precompactness theorem rather than this exact all-ultrafilter proposition. It is established, not novel. ALPHA CONCURRENCE: The finite entourage-ball cover plus ultrafilter primeness argument is the standard proof that every ultrafilter on a totally bounded uniform space is Cauchy. This familiar lemma is established mathematics extracted from the classical compactness equivalence.",
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
      "source": "def-totally-bounded-uniform-space",
      "source_section": "Definition",
      "quote": "A uniform space $X$ is **totally bounded** if, for every entourage $E$, there is a finite set $F\\subseteq X$ such that $X=\\bigcup_{x\\in F}E[x]$. Finiteness has the library meaning of [[def-finite-cardinality]].",
      "uses": [
        "1.2"
      ]
    },
    {
      "fact": "L2",
      "source": "lem-ultrafilter-prime",
      "source_section": "Statement",
      "quote": "Let $\\mathcal{U}$ be an ultrafilter on a set $X$ ([[def-ultrafilter]]) and let\n$A, B \\subseteq X$. If $A \\cup B \\in \\mathcal{U}$ then $A \\in \\mathcal{U}$ or\n$B \\in \\mathcal{U}$.",
      "uses": [
        "1.2"
      ]
    },
    {
      "fact": "L3",
      "source": "def-cauchy-filter-in-a-uniform-space",
      "source_section": "Definition",
      "quote": "A filter $\\mathcal F$ on a uniform space $(X,\\mathcal U)$ is **Cauchy** if for every entourage $E\\in\\mathcal U$ some $A\\in\\mathcal F$ satisfies $A\\times A\\subseteq E$. Such an $A$ is an $E$-small member of $\\mathcal F$.",
      "uses": [
        "3.1"
      ]
    },
    {
      "fact": "L4",
      "source": "lem-symmetric-entourages-form-a-base",
      "source_section": "Statement",
      "quote": "If $\\mathcal U$ is a uniformity on $X$, then its symmetric entourages form a filter base: for every $E\\in\\mathcal U$ there is a symmetric $D\\in\\mathcal U$ with $D\\subseteq E$. More generally, for every entourage $E$ and every integer $n\\ge 1$, there is a symmetric entourage $D$ whose $n$-fold composite satisfies $D^{\\circ n}\\subseteq E$.",
      "uses": [
        "1.1"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1.1",
      "claim": "Let $E$ be an entourage and choose a symmetric $D$ with $D^{-1}\\circ D=D^{\\circ2}\\subseteq E$. [L4, choose]",
      "step": "1.1",
      "inputs": [
        "L4"
      ]
    },
    {
      "id": "step-1.2",
      "claim": "Total boundedness gives finite $F$ with $X=\\bigcup_{x\\in F}D[x]$; since $X\\in\\mathcal V$, [L2] gives $D[x]\\in\\mathcal V$ for some $x\\in F$. [L1, L2]",
      "step": "1.2",
      "inputs": [
        "L2",
        "L1"
      ]
    },
    {
      "id": "step-2.1",
      "claim": "Any two points of $D[x]$ are $E$-related, so $D[x]\\times D[x]\\subseteq E$. [step 1.1, step 1.2]",
      "step": "2.1",
      "inputs": [
        "1.1",
        "1.2"
      ]
    },
    {
      "id": "step-3.1",
      "claim": "This supplies an $E$-small member for every $E$, so $\\mathcal V$ is Cauchy by [L3]. [step 2.1, L3] ∎",
      "step": "3.1",
      "inputs": [
        "L3",
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
    "source": "lem-ultrafilters-on-totally-bounded-uniform-spaces-are-cauchy",
    "sourcePage": "uniform-spaces",
    "batch": "wave7-topology-uniform",
    "target": "def-totally-bounded-uniform-space",
    "declared_target": "def-totally-bounded-uniform-space",
    "target_statement_provenance": "ai-altered",
    "targetPage": "uniform-spaces",
    "targetBatch": "wave7-topology-uniform",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-ultrafilters-on-totally-bounded-uniform-spaces-are-cauchy",
    "sourcePage": "uniform-spaces",
    "batch": "wave7-topology-uniform",
    "target": "def-cauchy-filter-in-a-uniform-space",
    "declared_target": "def-cauchy-filter-in-a-uniform-space",
    "target_statement_provenance": "literature-derived",
    "targetPage": "uniform-spaces",
    "targetBatch": "wave7-topology-uniform",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-ultrafilters-on-totally-bounded-uniform-spaces-are-cauchy",
    "sourcePage": "uniform-spaces",
    "batch": "wave7-topology-uniform",
    "target": "def-ultrafilter",
    "declared_target": "def-ultrafilter",
    "target_statement_provenance": "literature-derived",
    "targetPage": "filters-and-ultrafilters",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-ultrafilters-on-totally-bounded-uniform-spaces-are-cauchy",
    "sourcePage": "uniform-spaces",
    "batch": "wave7-topology-uniform",
    "target": "lem-ultrafilter-prime",
    "declared_target": "lem-ultrafilter-prime",
    "target_statement_provenance": "ai-altered",
    "targetPage": "filters-and-ultrafilters",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-ultrafilters-on-totally-bounded-uniform-spaces-are-cauchy",
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
  }
]
```

## Relevant pending generated-risk rows

```json
[]
```

## Full text of every cited or declared item (5)

### `def-cauchy-filter-in-a-uniform-space`

````markdown
---
id: def-cauchy-filter-in-a-uniform-space
kind: definition
title: "Cauchy filter in a uniform space"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-uniform-space-by-entourages, def-filter]
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

A filter $\mathcal F$ on a uniform space $(X,\mathcal U)$ is **Cauchy** if for every entourage $E\in\mathcal U$ some $A\in\mathcal F$ satisfies $A\times A\subseteq E$. Such an $A$ is an $E$-small member of $\mathcal F$.
````

### `def-totally-bounded-uniform-space`

````markdown
---
id: def-totally-bounded-uniform-space
kind: definition
title: "Totally bounded uniform space"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-uniform-space-by-entourages, def-finite-cardinality]
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

A uniform space $X$ is **totally bounded** if, for every entourage $E$, there is a finite set $F\subseteq X$ such that $X=\bigcup_{x\in F}E[x]$. Finiteness has the library meaning of [[def-finite-cardinality]].
````

### `def-ultrafilter`

````markdown
---
id: def-ultrafilter
kind: definition
title: "Ultrafilter"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-filter, def-maximal-element, def-partial-order]
justified_by: []
external_refs: [rem-feferman-no-free-ultrafilter-in-zf, rem-blass-model-without-ultrafilters]
aliases: [def-maximal-filter]
landmark: true
short: "maximal filter"
verification:
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-03
    scope: published-audit-targeted
    context_sha256: 14bec335264427502af0c3869f304eaf18b212e2cdbd5bab9f097529081c8dcb
    item_sha256: 9dfe08a5d70b6b14bb2f4371e9f7e81b17f9cc556cec5d32564e98a8cda9682b
  verified:
    model: gpt-5.6-sol-codex-subscription
    verdict: certify
    date: 2026-08-04
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Ultrafilter (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Ultrafilter"
    - title: "Ultrafilter (set theory) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Ultrafilter_(set_theory)"
pipeline_run: null
---

## Definition

Let $X$ be a set and let $\mathrm{Filt}(X)$ be the set of all filters on $X$
([[def-filter]]). Since every filter is a subset of $\mathcal{P}(X)$, the family
$\mathrm{Filt}(X)$ is a subset of $\mathcal{P}(\mathcal{P}(X))$ and is therefore a
set, carved out by Separation. Inclusion is a partial order on it
([[def-partial-order]]): $\subseteq$ is reflexive, antisymmetric by
extensionality, and transitive.

An **ultrafilter on $X$** is a filter on $X$ that is a **maximal element** of
$(\mathrm{Filt}(X), \subseteq)$ ([[def-maximal-element]]): a filter $\mathcal{U}$
on $X$ such that no filter on $X$ strictly contains $\mathcal{U}$, equivalently
such that every filter $\mathcal{G}$ on $X$ with $\mathcal{U} \subseteq
\mathcal{G}$ satisfies $\mathcal{G} = \mathcal{U}$.

An ultrafilter is **principal** if it is of the form
$\{\, A \subseteq X : x \in A \,\}$ for some $x \in X$, and **free**, or
**non-principal**, otherwise.

## Remarks

- **Maximal is not greatest, and here the distinction is not academic.** A
  greatest element of $(\mathrm{Filt}(X), \subseteq)$ would be a filter containing
  every filter, and as soon as $X$ has two distinct points $x \neq y$ no such
  filter exists: it would contain the principal filters at $x$ and at $y$, hence
  both $\{x\}$ and $\{y\}$, hence their intersection $\emptyset$, which
  properness forbids ([[def-filter]]). So on such an $X$ there is no **greatest**
  filter, and reading "maximal" as "greatest" is the error recorded in
  [[fs-maximal-is-greatest]]. Note what that argument does and does not deliver.
  It says nothing whatever about which filters are **maximal**, nor that any is:
  the absence of a greatest element is compatible with there being no maximal
  element at all. What does follow, from maximality itself and not from the
  argument above, is that two distinct ultrafilters are never comparable, since
  $\mathcal{U} \subseteq \mathcal{V}$ with $\mathcal{U}$ maximal forces
  $\mathcal{V} = \mathcal{U}$. How many ultrafilters there are is a separate
  question again, which the argument above does not touch and which this library
  does not answer at all: the ultrafilter lemma gives EXISTENCE (every filter
  extends to an ultrafilter), never a count, and [[thm-ultrafilter-lemma]] says so
  in its own remarks. See the existence bullet below.
- **Maximality is a negative condition**, which is what makes it usable: it says
  nothing can be added, not that everything is already there. The positive
  reformulation, that $\mathcal{U}$ decides every subset by containing either $A$
  or its complement, is [[thm-ultrafilter-characterisation]], and it is the form
  used in practice.
- **Existence is free; extension and freeness are not.** Ultrafilters exist on
  every nonempty set with no choice principle at all: the principal filter at a
  point is one, as the next bullet verifies outright. Two stronger existence
  statements are what cost something. That **every** filter is contained in an
  ultrafilter is [[thm-ultrafilter-lemma]], proved here from Zorn's lemma
  ([[thm-zorn]]); and that some ultrafilter is **free** is what the ultrafilter
  lemma buys, since extending the filter of cofinite subsets of $\mathbb{N}$
  produces a non-principal one. Neither is a theorem of ZF alone: if ZF is
  consistent, ZF does not prove that a free ultrafilter on $\mathbb{N}$ exists
  (Feferman 1965, [[rem-feferman-no-free-ultrafilter-in-zf]]), and hence does not
  prove the ultrafilter lemma either. That external result is recorded, not
  proved, in this library, and the strength the lemma costs is set out in
  [[rem-choice-strengths]]. So on $\mathbb{N}$ the principal ultrafilters are the
  only ones ZF alone can be relied on to produce. The same conclusion for
  **every** set at once does not follow from Feferman's model, which concerns
  $\mathbb{N}$; it is the separate and stronger external result
  [[rem-blass-model-without-ultrafilters]], likewise recorded and not proved
  here. Once the ultrafilter lemma is available -- and this library proves
  it from the Axiom of Choice ([[thm-ultrafilter-lemma]]) -- the principal
  ultrafilters are nevertheless not all of them
  ([[fs-every-ultrafilter-principal]]); in ZF alone that cannot be concluded.
- Principal ultrafilters really are ultrafilters: $\{A \subseteq X : x \in A\}$
  is a filter, and if a filter $\mathcal{G}$ contains it then any $B \in
  \mathcal{G}$ must meet $\{x\}$, since otherwise $B \cap \{x\} = \emptyset$ lies
  in $\mathcal{G}$, so $x \in B$ and $\mathcal{G}$ is contained in the principal
  filter at $x$. This is the one family of examples available without any choice
  principle.
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

### `lem-ultrafilter-prime`

````markdown
---
id: lem-ultrafilter-prime
kind: lemma
title: "Ultrafilters are prime: a union in $\\mathcal{U}$ has a member in $\\mathcal{U}$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-ultrafilter-characterisation, def-ultrafilter, def-filter, def-natural-numbers, thm-induction-principle]
justified_by: []
aliases: []
landmark: false
short: "$A\\cup B\\in\\mathcal{U}\\Rightarrow A\\in\\mathcal{U}$ or $B\\in\\mathcal{U}$"
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
    model: openai/gpt-5.4
    verdict: pass
    date: 2026-07-25
sources:
  scraped: []
  references:
    - title: "Ultrafilter (set theory) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Ultrafilter_(set_theory)"
    - title: "Boolean prime ideal theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Boolean_prime_ideal_theorem"
    - title: "Ultrafilter (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Ultrafilter"
pipeline_run: null
---

## Statement

Let $\mathcal{U}$ be an ultrafilter on a set $X$ ([[def-ultrafilter]]) and let
$A, B \subseteq X$. If $A \cup B \in \mathcal{U}$ then $A \in \mathcal{U}$ or
$B \in \mathcal{U}$.

More generally, for every $n \in \mathbb{N}$ and every finite list
$s : n \to \mathcal{P}(X)$ ([[def-natural-numbers]]), writing
$\bigcup_{i \in n} s(i) = \{\, x \in X : x \in s(i) \text{ for some } i \in n \,\}$,
which is $\emptyset$ when $n = 0$: if $\bigcup_{i \in n} s(i) \in \mathcal{U}$ then
$s(i) \in \mathcal{U}$ for some $i \in n$.

## Facts & Assumptions

**Given:** A set $X$, an ultrafilter $\mathcal{U}$ on $X$, and subsets $A, B \subseteq X$ with $A \cup B \in \mathcal{U}$.

[A1] $\mathcal{U}$ is a filter on $X$: $X \in \mathcal{U}$, $\emptyset \notin \mathcal{U}$, $\mathcal{U}$ is closed under pairwise intersection, and closed upward in $X$ ([[def-filter]], [[def-ultrafilter]]).

[L1] For every $C \subseteq X$, exactly one of $C \in \mathcal{U}$ and $X \setminus C \in \mathcal{U}$ holds ([[thm-ultrafilter-characterisation]]).

[L2] Induction on $\mathbb{N}$: a property holding at $0$ and passing from $n$ to $\sigma(n)$ holds for every natural number; and $\sigma(n) = n \cup \{n\}$ ([[thm-induction-principle]], [[def-natural-numbers]]).

## Proof

**Proof technique:** direct.

1.1 Suppose $A \notin \mathcal{U}$; then $X \setminus A \in \mathcal{U}$. [L1, assume-hyp]

1.2 As sets, $(A \cup B) \cap (X \setminus A) = B \cap (X \setminus A) \subseteq B \subseteq X$. [given]

2.1 Both $A \cup B$ and $X \setminus A$ lie in $\mathcal{U}$, hence so does their intersection. [step 1.1, given, A1]

3.1 Upward closure applied to $(A \cup B) \cap (X \setminus A) \subseteq B$ gives $B \in \mathcal{U}$; so $A \in \mathcal{U}$ or $B \in \mathcal{U}$. [step 2.1, step 1.2, A1]

4.1 The finite case follows by induction on $n$: for $n = 0$ the union is empty and $\emptyset \notin \mathcal{U}$, so the hypothesis never holds and the claim is vacuous; and if the claim holds for lists of length $n$, then for $s : \sigma(n) \to \mathcal{P}(X)$ one has $\bigcup_{i \in \sigma(n)} s(i) = \left(\bigcup_{i \in n} s(i)\right) \cup s(n)$, so the binary case puts either $s(n)$ or $\bigcup_{i \in n} s(i)$ in $\mathcal{U}$, and in the second alternative the claim for $n$ supplies an $i \in n$ with $s(i) \in \mathcal{U}$. [step 3.1, A1, L2]

5.1 So an ultrafilter is prime: it contains a member of every finite union it contains. [step 3.1, step 4.1] ∎

## Remarks

- **The converse holds too**, and is worth stating even though it is not needed below: a filter $\mathcal{U}$ with the property that $A \cup B \in \mathcal{U}$ implies $A \in \mathcal{U}$ or $B \in \mathcal{U}$ is an ultrafilter, because $A \cup (X \setminus A) = X \in \mathcal{U}$ forces one of $A$ and $X \setminus A$ into $\mathcal{U}$, which is [[thm-ultrafilter-characterisation]]. Primeness and maximality are therefore the same condition, which is why the ultrafilter lemma is a form of the Boolean prime ideal theorem ([[rem-choice-strengths]]).
- The finite case does not extend to infinite unions. On $\mathbb{N}$ an ultrafilter containing every tail contains $\mathbb{N} = \bigcup_{x \in \mathbb{N}} \{x\}$ but no singleton ([[fs-every-ultrafilter-principal]]), so a union of infinitely many sets can lie in $\mathcal{U}$ with no single member of the union doing so.
- Read through the two-valued measure of [[thm-ultrafilter-characterisation]], primeness says that a union of finitely many null sets is null, the complementary form of closure under finite intersection.
````

