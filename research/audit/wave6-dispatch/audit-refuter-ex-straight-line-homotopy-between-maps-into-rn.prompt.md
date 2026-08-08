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

## Target item — `ex-straight-line-homotopy-between-maps-into-rn`

Normalized current SHA-256: `b5d666ac9a20cba61d094f4f1ac1b7c38e80201e7d369b420fde7d97d6c2bf16`

The complete current item follows, including frontmatter:

````markdown
---
id: ex-straight-line-homotopy-between-maps-into-rn
kind: example
title: "The formula $H(x,t)=(1-t)f(x)+tg(x)$ gives an explicit homotopy between maps into $\\mathbb{R}^n$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-two-maps-into-a-convex-set-are-homotopic, lem-straight-line-homotopies-are-continuous]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "MIT 18.901, Introduction to Topology lecture notes"
      url: "https://math.mit.edu/~pieloch/teaching/18.901-spring-2025/18.901-spring-2025-Lecture-Notes.pdf"
    - title: "Algebraic Topology lecture notes (UC Riverside)"
      url: "https://math.ucr.edu/~jbergner/SPWM09.pdf"
pipeline_run: null
---

## Example

Let $n\ge1$, let $X$ be a topological space, and let $f,g:X\to\mathbb R^n$ be continuous. Since $\mathbb R^n$ is convex, the straight-line formula

$$H(x,t)=(1-t)f(x)+tg(x)$$

deforms $f$ to $g$.

## Facts & Assumptions

**Given:** Continuous maps $f,g:X\to\mathbb R^n$ with $n\ge1$.

[L1] The straight-line formula is continuous for maps into a convex subspace of $\mathbb R^n$ ([[lem-straight-line-homotopies-are-continuous]]).

[L2] Any two continuous maps into a nonempty convex subset of $\mathbb R^n$ are homotopic by that formula ([[thm-two-maps-into-a-convex-set-are-homotopic]]).

## Verification

**Proof technique:** direct.

1.1 For $u,v\in\mathbb R^n$ and $t\in I$, the vector $(1-t)u+tv$ lies in $\mathbb R^n$, so $\mathbb R^n$ is convex. [algebra]

1.2 The map $H$ is continuous by [L1]. [L1]

2.1 Substitution gives $H(x,0)=f(x)$ and $H(x,1)=g(x)$, so [L2] identifies $H$ as a homotopy from $f$ to $g$. [step 1.1, step 1.2, L2] ∎
````

## Proof contract for the target

```json
{
  "citations": [
    {
      "fact": "L1",
      "source": "lem-straight-line-homotopies-are-continuous",
      "source_section": "Statement",
      "quote": "Let $n\\ge1$. A subset $C\\subseteq\\mathbb R^n$ is called **convex** here when $$u,v\\in C,\\ t\\in[0,1]\\quad\\Longrightarrow\\quad(1-t)u+tv\\in C.$$ If $X$ is a topological space and $f,g:X\\to C$ are continuous, where $C$ has the subspace topology from $\\mathbb R^n$, then $$H:X\\times I\\longrightarrow C,\\qquad H(x,t)=(1-t)f(x)+tg(x),$$ is continuous.",
      "uses": [
        "1.2"
      ]
    },
    {
      "fact": "L2",
      "source": "thm-two-maps-into-a-convex-set-are-homotopic",
      "source_section": "Statement",
      "quote": "Let $n\\ge1$, let $C\\subseteq\\mathbb R^n$ be nonempty and convex in the sense stated in [[lem-straight-line-homotopies-are-continuous]], and let $f,g:X\\to C$ be continuous. Then $$H(x,t)=(1-t)f(x)+tg(x)$$ is a homotopy from $f$ to $g$.",
      "uses": [
        "2.1"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1.1",
      "claim": "For $u,v\\in\\mathbb R^n$ and $t\\in I$, the vector $(1-t)u+tv$ lies in $\\mathbb R^n$, so $\\mathbb R^n$ is convex. [algebra]",
      "step": "1.1",
      "inputs": [
        "statement hypotheses and the definitions or objects introduced in this step"
      ]
    },
    {
      "id": "step-1.2",
      "claim": "The map $H$ is continuous by [L1]. [L1]",
      "step": "1.2",
      "inputs": [
        "L1"
      ]
    },
    {
      "id": "step-2.1",
      "claim": "Substitution gives $H(x,0)=f(x)$ and $H(x,1)=g(x)$, so [L2] identifies $H$ as a homotopy from $f$ to $g$. [step 1.1, step 1.2, L2] ∎",
      "step": "2.1",
      "inputs": [
        "L2",
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
      "evidence": "statement and step 1.1: the empty-domain or empty-space instance is vacuous or formula-defined and selects no point"
    },
    {
      "case": "zero",
      "status": "not_applicable",
      "reason": "the statement assumes n>=1, so the zero-dimensional case is outside its hypotheses"
    },
    {
      "case": "one",
      "status": "checked",
      "evidence": "statement and step 1.1: the displayed Euclidean formulas remain valid for n=1"
    },
    {
      "case": "degenerate",
      "status": "checked",
      "evidence": "steps 1.1 through 2.1 include the case f=g"
    },
    {
      "case": "endpoints",
      "status": "checked",
      "evidence": "step 2.1 verifies H(x,0)=f(x) and H(x,1)=g(x)"
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
    "source": "ex-straight-line-homotopy-between-maps-into-rn",
    "sourcePage": "homotopy-and-homotopy-equivalence-examples",
    "batch": "wave6-topology",
    "target": "thm-two-maps-into-a-convex-set-are-homotopic",
    "declared_target": "thm-two-maps-into-a-convex-set-are-homotopic",
    "target_statement_provenance": null,
    "targetPage": "homotopy-and-homotopy-equivalence",
    "targetBatch": "wave6-topology",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-straight-line-homotopy-between-maps-into-rn",
    "sourcePage": "homotopy-and-homotopy-equivalence-examples",
    "batch": "wave6-topology",
    "target": "lem-straight-line-homotopies-are-continuous",
    "declared_target": "lem-straight-line-homotopies-are-continuous",
    "target_statement_provenance": null,
    "targetPage": "homotopy-and-homotopy-equivalence",
    "targetBatch": "wave6-topology",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  }
]
```

## Full text of every cited or declared item (2)

### `lem-straight-line-homotopies-are-continuous`

````markdown
---
id: lem-straight-line-homotopies-are-continuous
kind: lemma
title: "For continuous maps into a convex subset of $\\mathbb{R}^n$, the straight-line formula defines a continuous homotopy"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-product-universal-property, thm-componentwise-limits-and-continuity, def-subspace-topology-top, thm-continuity-characterisations-top, lem-product-topology-on-rn]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "MIT 18.901, Introduction to Topology lecture notes"
      url: "https://math.mit.edu/~pieloch/teaching/18.901-spring-2025/18.901-spring-2025-Lecture-Notes.pdf"
    - title: "Algebraic Topology lecture notes (UC Riverside)"
      url: "https://math.ucr.edu/~jbergner/SPWM09.pdf"
pipeline_run: null
---

## Statement

Let $n\ge1$. A subset $C\subseteq\mathbb R^n$ is called **convex** here when

$$u,v\in C,\ t\in[0,1]\quad\Longrightarrow\quad(1-t)u+tv\in C.$$

If $X$ is a topological space and $f,g:X\to C$ are continuous, where $C$ has the subspace topology from $\mathbb R^n$, then

$$H:X\times I\longrightarrow C,\qquad H(x,t)=(1-t)f(x)+tg(x),$$

is continuous.

## Facts & Assumptions

**Given:** A natural $n\ge1$, a convex subspace $C\subseteq\mathbb R^n$, a topological space $X$, and continuous maps $f,g:X\to C$.

[A1] Convexity is the displayed condition in the Statement.

[L1] Product projections are continuous, and a map into a product is continuous exactly when all component maps are continuous ([[thm-product-universal-property]]).

[L2] The product topology on $\mathbb R^m$ agrees with its Euclidean metric topology for every $m\ge1$ ([[lem-product-topology-on-rn]]).

[L3] For maps from a metric space into $\mathbb R^m$, continuity is componentwise; sums and scalar multiples of continuous vector-valued maps and inner products of two such maps are continuous ([[thm-componentwise-limits-and-continuity]], clauses 1 and 3).

[L4] A map into a subspace is continuous exactly when its composite with the ambient inclusion is continuous ([[def-subspace-topology-top]]).

[L5] A map is continuous exactly when preimages of open sets are open ([[thm-continuity-characterisations-top]], condition (b)).

## Proof

**Proof technique:** direct.

1.1 Addition and multiplication $\mathbb R^2\to\mathbb R$ are continuous. Indeed the coordinate projections are continuous by [L1], and by [L2] may be read as continuous scalar functions on the Euclidean metric space $\mathbb R^2$. The identity map $z\mapsto z$ and the constant map $z\mapsto(1,1)$ are continuous, so [L3] makes their inner product $z_0+z_1$ continuous. The maps $z\mapsto(z_0,0)$ and $z\mapsto(z_1,0)$ are continuous by the componentwise part of [L3], and their inner product $z_0z_1$ is continuous by its algebra part. [L1, L2, L3]

2.1 Consequently, if $a,b:Z\to\mathbb R$ are continuous on an arbitrary topological space $Z$, then $a+b$ and $ab$ are continuous: the pair $(a,b):Z\to\mathbb R^2$ is continuous by [L1] and [L2], and composing it with the two maps of step 1.1 is continuous because the preimage of an open set under a composite is an iterated preimage, which is open by [L5]. Constant functions and additive inverses are continuous by the same argument, using a constant component and the continuous scalar multiple supplied by [L3]. [step 1.1, L1, L2, L3, L5]

3.1 Let $\iota:C\hookrightarrow\mathbb R^n$ be the inclusion and put $F=\iota\circ f$, $G=\iota\circ g$. These ambient maps are continuous by [L4]. For $Z=X\times I$, let $p_X:Z\to X$ and $\tau:Z\to I\subseteq\mathbb R$ be the projections. Each scalar coordinate $F_k\circ p_X$ and $G_k\circ p_X$ is continuous: coordinate projections on $\mathbb R^n$ are continuous by [L1] and [L2], and composites preserve continuity by the preimage calculation of step 2.1. The scalar map $\tau$ is continuous, also as a map into $\mathbb R$, by [L1] and [L4]. [L1, L2, L4, L5]

4.1 By step 2.1, for every $k<n$ the function $(x,t)\mapsto(1-t)F_k(x)+tG_k(x)$ is continuous on $Z$. Therefore the ambient map $\widetilde H:Z\to\mathbb R^n$ with these coordinates is continuous by [L1] and [L2]. [step 2.1, step 3.1, L1, L2]

5.1 Convexity [A1] gives $\widetilde H(x,t)\in C$ for every $(x,t)\in Z$. Since the composite of $H:Z\to C$ with the inclusion $\iota$ is $\widetilde H$, [L4] makes $H$ continuous into $C$. [step 4.1, A1, L4] ∎

## Remarks

The continuity argument uses only products, subspaces and ordinary Euclidean continuity. Convexity is used solely to ensure that the straight-line formula takes values in $C$.
````

### `thm-two-maps-into-a-convex-set-are-homotopic`

````markdown
---
id: thm-two-maps-into-a-convex-set-are-homotopic
kind: theorem
title: "Any two continuous maps into a nonempty convex subset of $\\mathbb{R}^n$ are homotopic by straight lines"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-straight-line-homotopies-are-continuous, def-homotopy-relative-and-path-homotopy]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "MIT 18.901, Introduction to Topology lecture notes"
      url: "https://math.mit.edu/~pieloch/teaching/18.901-spring-2025/18.901-spring-2025-Lecture-Notes.pdf"
    - title: "Algebraic Topology lecture notes (UC Riverside)"
      url: "https://math.ucr.edu/~jbergner/SPWM09.pdf"
pipeline_run: null
---

## Statement

Let $n\ge1$, let $C\subseteq\mathbb R^n$ be nonempty and convex in the sense stated in [[lem-straight-line-homotopies-are-continuous]], and let $f,g:X\to C$ be continuous. Then

$$H(x,t)=(1-t)f(x)+tg(x)$$

is a homotopy from $f$ to $g$.

## Facts & Assumptions

**Given:** A nonempty convex $C\subseteq\mathbb R^n$ with $n\ge1$ and continuous maps $f,g:X\to C$.

[L1] The straight-line formula defines a continuous map $H:X\times I\to C$ ([[lem-straight-line-homotopies-are-continuous]]).

[A1] A homotopy from $f$ to $g$ is a continuous $H:X\times I\to C$ with $H(x,0)=f(x)$ and $H(x,1)=g(x)$ ([[def-homotopy-relative-and-path-homotopy]]).

## Proof

**Proof technique:** direct.

1.1 The map $H(x,t)=(1-t)f(x)+tg(x)$ is continuous by [L1]. [L1]

1.2 Substitution gives $H(x,0)=f(x)$ and $H(x,1)=g(x)$ for every $x\in X$. [algebra]

2.1 Thus $H$ satisfies the continuity and endpoint conditions of [A1], so it is a homotopy from $f$ to $g$. [step 1.1, step 1.2, A1] ∎
````

