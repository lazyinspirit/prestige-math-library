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

## Target item — `thm-punctured-rn-deformation-retracts-onto-the-sphere`

Normalized current SHA-256: `55433fb3fa9c639fcd46e19acf595b3596f499e4bea04bcd8499fd60d82eafac`

The complete current item follows, including frontmatter:

````markdown
---
id: thm-punctured-rn-deformation-retracts-onto-the-sphere
kind: theorem
title: "For $n\\ge1$, radial normalisation is a deformation retraction of $\\mathbb{R}^n\\setminus\\{0\\}$ onto $S^{n-1}$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-retraction-and-deformation-retract, thm-radial-straight-line-map-on-punctured-rn, lem-radial-normalisation-is-continuous, def-euclidean-spheres-and-closed-balls]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "A. Hatcher, Algebraic Topology, Section 0"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
    - title: "MAT 530 Topology lecture notes (Stony Brook University)"
      url: "https://www.math.stonybrook.edu/~cschnell/pdf/notes/mat530.pdf"
pipeline_run: null
---

## Statement

Let $n\ge1$, put $P=\mathbb R^n\setminus\{0\}$, and let $S^{n-1}\subseteq P$ be the unit sphere. Radial normalisation

$$r:P\to S^{n-1},\qquad r(x)=\frac{x}{\lVert x\rVert_2},$$

is a retraction, and

$$H(x,t)=\left((1-t)+\frac{t}{\lVert x\rVert_2}\right)x$$

is a deformation retraction of $P$ onto $S^{n-1}$.

## Facts & Assumptions

**Given:** A natural $n\ge1$, $P=\mathbb R^n\setminus\{0\}$ and $S^{n-1}=\{x:\lVert x\rVert_2=1\}$.

[L1] Radial normalisation $r:P\to S^{n-1}$ is continuous ([[lem-radial-normalisation-is-continuous]], [[def-euclidean-spheres-and-closed-balls]]).

[L2] The displayed $H:P\times I\to P$ is continuous, begins at $x$, ends at $r(x)$, fixes every $s\in S^{n-1}$, and never reaches $0$ ([[thm-radial-straight-line-map-on-punctured-rn]]).

[A1] A deformation retraction onto $A$ is a retraction $r$ together with a homotopy from the identity to the inclusion followed by $r$, fixed pointwise on $A$ ([[def-retraction-and-deformation-retract]]).

## Proof

**Proof technique:** direct.

1.1 If $s\in S^{n-1}$ then $\lVert s\rVert_2=1$, so $r(s)=s$. Thus the continuous map $r$ of [L1] is a retraction. [L1, algebra]

1.2 By [L2], $H$ is a continuous homotopy in $P$ from $\operatorname{id}_P$ to the inclusion followed by $r$, and $H(s,t)=s$ for every $s\in S^{n-1}$ and $t\in I$. [L2]

2.1 Steps 1.1 and 1.2 satisfy [A1], so $(r,H)$ is a deformation retraction of $P$ onto $S^{n-1}$. [step 1.1, step 1.2, A1] ∎
````

## Proof contract for the target

```json
{
  "citations": [
    {
      "fact": "L1",
      "source": "lem-radial-normalisation-is-continuous",
      "source_section": "Statement",
      "quote": "For $n\\ge1$, the map $\\rho:\\mathbb R^n\\setminus\\{0\\}\\to S^{n-1}$ defined by $\\rho(x)=x/\\lVert x\\rVert_2$ is continuous.",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L1",
      "source": "def-euclidean-spheres-and-closed-balls",
      "source_section": "Definition",
      "quote": "For the unit sphere centred at the origin write $$S^{n-1}:=S_2(0,1).$$ The exponent is notation for this particular sphere, not a claim that a dimension theory has been developed here.",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L2",
      "source": "thm-radial-straight-line-map-on-punctured-rn",
      "source_section": "Statement",
      "quote": "For $n\\ge1$, put $P=\\mathbb R^n\\setminus\\{0\\}$ and define $$H:P\\times[0,1]\\to P,\\qquad H(x,t)=\\bigl((1-t)+t/\\lVert x\\rVert_2\\bigr)x.$$ Then $H$ is continuous, $H(x,0)=x$, $H(x,1)=x/\\lVert x\\rVert_2$, $H(s,t)=s$ for $s\\in S^{n-1}$, and $H(x,t)\\ne0$.",
      "uses": [
        "1.2"
      ]
    },
    {
      "fact": "A1",
      "source": "def-retraction-and-deformation-retract",
      "source_section": "Definition",
      "quote": "The subspace $A$ is a **deformation retract** of $X$ if there are a retraction $r:X\\to A$ and a homotopy",
      "uses": [
        "2.1"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1.1",
      "claim": "If $s\\in S^{n-1}$ then $\\lVert s\\rVert_2=1$, so $r(s)=s$. Thus the continuous map $r$ of [L1] is a retraction. [L1, algebra]",
      "step": "1.1",
      "inputs": [
        "L1"
      ]
    },
    {
      "id": "step-1.2",
      "claim": "By [L2], $H$ is a continuous homotopy in $P$ from $\\operatorname{id}_P$ to the inclusion followed by $r$, and $H(s,t)=s$ for every $s\\in S^{n-1}$ and $t\\in I$. [L2]",
      "step": "1.2",
      "inputs": [
        "L2"
      ]
    },
    {
      "id": "step-2.1",
      "claim": "Steps 1.1 and 1.2 satisfy [A1], so $(r,H)$ is a deformation retraction of $P$ onto $S^{n-1}$. [step 1.1, step 1.2, A1] ∎",
      "step": "2.1",
      "inputs": [
        "1.1",
        "1.2",
        "A1"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "not_applicable",
      "reason": "the statement fixes or assumes nonempty spaces or named points, so an empty carrier cannot satisfy its hypotheses"
    },
    {
      "case": "zero",
      "status": "checked",
      "evidence": "the statement excludes the origin and the cited radial formula is used only on the punctured domain"
    },
    {
      "case": "one",
      "status": "checked",
      "evidence": "statement and step 1.1: the displayed Euclidean formulas remain valid for n=1"
    },
    {
      "case": "degenerate",
      "status": "not_applicable",
      "reason": "the statement has no separate coincident-map, constant-map, singleton, or collapsed-parameter branch"
    },
    {
      "case": "endpoints",
      "status": "checked",
      "evidence": "steps 1.1, 1.2, and 2.1 verify the identity, radial-retraction, and fixed-sphere endpoint conditions"
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
    "source": "thm-punctured-rn-deformation-retracts-onto-the-sphere",
    "sourcePage": "homotopy-and-homotopy-equivalence",
    "batch": "wave6-topology",
    "target": "def-retraction-and-deformation-retract",
    "declared_target": "def-retraction-and-deformation-retract",
    "target_statement_provenance": null,
    "targetPage": "homotopy-and-homotopy-equivalence",
    "targetBatch": "wave6-topology",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-punctured-rn-deformation-retracts-onto-the-sphere",
    "sourcePage": "homotopy-and-homotopy-equivalence",
    "batch": "wave6-topology",
    "target": "thm-radial-straight-line-map-on-punctured-rn",
    "declared_target": "thm-radial-straight-line-map-on-punctured-rn",
    "target_statement_provenance": "ai-altered",
    "targetPage": "the-topology-of-euclidean-space",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-punctured-rn-deformation-retracts-onto-the-sphere",
    "sourcePage": "homotopy-and-homotopy-equivalence",
    "batch": "wave6-topology",
    "target": "lem-radial-normalisation-is-continuous",
    "declared_target": "lem-radial-normalisation-is-continuous",
    "target_statement_provenance": "ai-altered",
    "targetPage": "the-topology-of-euclidean-space",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-punctured-rn-deformation-retracts-onto-the-sphere",
    "sourcePage": "homotopy-and-homotopy-equivalence",
    "batch": "wave6-topology",
    "target": "def-euclidean-spheres-and-closed-balls",
    "declared_target": "def-euclidean-spheres-and-closed-balls",
    "target_statement_provenance": "literature-derived",
    "targetPage": "the-topology-of-euclidean-space",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  }
]
```

## Full text of every cited or declared item (4)

### `def-euclidean-spheres-and-closed-balls`

````markdown
---
id: def-euclidean-spheres-and-closed-balls
kind: definition
title: "Euclidean spheres and closed balls as subspaces of $\\mathbb{R}^n$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-norm-and-normed-space, def-subspace-topology-top, def-metric-ball, lem-metrics-on-rn]
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
  references:
    - title: "Euclidean space"
      url: "https://en.wikipedia.org/wiki/Euclidean_space"
    - title: "Sphere"
      url: "https://en.wikipedia.org/wiki/Sphere"
pipeline_run: null
---

## Definition

Let $n \in \mathbb{N}$ with $n \ge 1$. Give $\mathbb{R}^n$ its Euclidean norm $\lVert\cdot\rVert_2$ and its induced Euclidean metric $d_2$ ([[lem-metrics-on-rn]], [[def-norm-and-normed-space]]). For $c \in \mathbb{R}^n$ and $r>0$, put

$$\overline B_2(c,r):=\{x\in\mathbb{R}^n:\lVert x-c\rVert_2\le r\},\qquad S_2(c,r):=\{x\in\mathbb{R}^n:\lVert x-c\rVert_2=r\}.$$

These are respectively the **Euclidean closed ball** and **Euclidean sphere** with centre $c$ and radius $r$. They carry the subspace topology inherited from $\mathbb{R}^n$ ([[def-subspace-topology-top]]). Since $d_2(c,x)=\lVert x-c\rVert_2$, they are precisely the closed ball and sphere $\bar B(c,r)$ and $S(c,r)$ of the metric-space definition ([[def-metric-ball]]).

For the unit sphere centred at the origin write

$$S^{n-1}:=S_2(0,1).$$

The exponent is notation for this particular sphere, not a claim that a dimension theory has been developed here.
````

### `def-retraction-and-deformation-retract`

````markdown
---
id: def-retraction-and-deformation-retract
kind: definition
title: "Retractions and deformation retracts, with a deformation retraction required to fix the retract pointwise"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-homotopy-relative-and-path-homotopy, def-continuous-map-top, def-subspace-topology-top]
aliases: []
landmark: true
verification:
  precheck: n/a
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "A. Hatcher, Algebraic Topology, Section 0"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
pipeline_run: null
---

## Definition

Let $A\subseteq X$ carry the subspace topology, and let $i:A\hookrightarrow X$ be the inclusion ([[def-subspace-topology-top]]).

A continuous map $r:X\to A$ is a **retraction of $X$ onto $A$** if

$$r\circ i=\operatorname{id}_A,$$

equivalently, if $r(a)=a$ for every $a\in A$. When such an $r$ exists, $A$ is a **retract** of $X$.

The subspace $A$ is a **deformation retract** of $X$ if there are a retraction $r:X\to A$ and a homotopy

$$H:\operatorname{id}_X\simeq_A i\circ r.$$

Thus $H(x,0)=x$, $H(x,1)=i(r(x))$, and $H(a,t)=a$ for all $a\in A$ and $t\in I$ ([[def-homotopy-relative-and-path-homotopy]]). The pair $(r,H)$ is a **deformation retraction**.

Some sources call the pointwise-fixed condition a *strong deformation retract*. In this library the word *deformation retract* always includes it.
````

### `lem-radial-normalisation-is-continuous`

````markdown
---
id: lem-radial-normalisation-is-continuous
kind: lemma
title: "Radial normalisation $x\\mapsto x/\\lVert x\\rVert_2$ is continuous on $\\mathbb{R}^n\\setminus\\{0\\}$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-vector-valued-functions-limits-and-continuity, thm-componentwise-limits-and-continuity, lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric, def-euclidean-spheres-and-closed-balls, def-subspace-topology-top]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: claude-sonnet-5
    verdict: certify
    date: 2026-08-06
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Sphere"
      url: "https://en.wikipedia.org/wiki/Sphere"
    - title: "Deformation retract"
      url: "https://en.wikipedia.org/wiki/Deformation_retract"
pipeline_run: null
---

## Statement

For $n\ge1$, the map $\rho:\mathbb R^n\setminus\{0\}\to S^{n-1}$ defined by $\rho(x)=x/\lVert x\rVert_2$ is continuous.

## Facts & Assumptions

**Given:** $n\ge1$, the Euclidean norm, and a nonzero point $a\in\mathbb R^n$.

[L1] The Euclidean norm is continuous and satisfies $|\lVert u\rVert_2-\lVert v\rVert_2|\le\lVert u-v\rVert_2$ ([[lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric]]).

[L2] Componentwise continuity gives continuity into $\mathbb R^n$ ([[thm-componentwise-limits-and-continuity]], [[def-vector-valued-functions-limits-and-continuity]]); and a map into a subspace is continuous exactly when its composite with the ambient inclusion is continuous, so a continuous map whose image lies in the subspace is continuous into it ([[def-subspace-topology-top]]).

[L3] The unit sphere is the set of vectors with Euclidean norm $1$ ([[def-euclidean-spheres-and-closed-balls]]).

## Proof

**Proof technique:** direct.

1.1 Put $d:=\lVert a\rVert_2>0$. If $\lVert x-a\rVert_2<d/2$, then [L1] gives $\lVert x\rVert_2>d/2$. [L1]

1.2 For such $x$, $\lVert\rho(x)-\rho(a)\rVert_2\le\lVert x-a\rVert_2/\lVert x\rVert_2+\lVert a\rVert_2|1/\lVert x\rVert_2-1/\lVert a\rVert_2|\le4\lVert x-a\rVert_2/d$. [L1]

2.1 Step 1.2 gives the epsilon-delta condition at $a$, so $\rho$ is continuous on the punctured space. Also $\lVert\rho(x)\rVert_2=1$, so its image lies in $S^{n-1}$ and [L2] gives continuity with that codomain. [L2, L3, step 1.2] ∎
````

### `thm-radial-straight-line-map-on-punctured-rn`

````markdown
---
id: thm-radial-straight-line-map-on-punctured-rn
kind: theorem
title: "For $n\\ge1$, the map $H(x,t)=((1-t)+t/\\lVert x\\rVert_2)x$ is continuous on $(\\mathbb{R}^n\\setminus\\{0\\})\\times[0,1]$, starts at $x$, ends at radial normalisation, fixes the unit sphere, and never reaches $0$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [lem-radial-normalisation-is-continuous, thm-product-universal-property, thm-componentwise-limits-and-continuity, def-product-topology, def-euclidean-spheres-and-closed-balls, lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric, thm-algebra-of-continuous-functions, lem-continuity-is-local-and-pastes, def-subspace-topology-top]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: claude-sonnet-5
    verdict: certify
    date: 2026-08-06
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Deformation retract"
      url: "https://en.wikipedia.org/wiki/Deformation_retract"
pipeline_run: null
---

## Statement

For $n\ge1$, put $P=\mathbb R^n\setminus\{0\}$ and define

$$H:P\times[0,1]\to P,\qquad H(x,t)=\bigl((1-t)+t/\lVert x\rVert_2\bigr)x.$$

Then $H$ is continuous, $H(x,0)=x$, $H(x,1)=x/\lVert x\rVert_2$, $H(s,t)=s$ for $s\in S^{n-1}$, and $H(x,t)\ne0$.

## Facts & Assumptions

**Given:** $x\in P$ and $t\in[0,1]$.

[L1] Radial normalisation is continuous on $P$ ([[lem-radial-normalisation-is-continuous]]).

[L2] Coordinate projections and the map into a product are continuous as stated by the product universal property ([[thm-product-universal-property]], [[def-product-topology]]).

[L3] The Euclidean norm is continuous for the Euclidean metric and is positive away from $0$, and the unit sphere consists of its norm-one points ([[lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric]], [[def-euclidean-spheres-and-closed-balls]]).

[L4] For maps on a subset of a metric space, sums, scalar multiples and pointwise products of continuous real-valued functions are continuous, and a vector-valued map is continuous exactly when its coordinate functions are continuous ([[thm-componentwise-limits-and-continuity]], clauses 1 and 3, the product being the case $m = 1$ of the inner product); composites of continuous maps are continuous ([[lem-continuity-is-local-and-pastes]]); and $u \mapsto 1/u$ is continuous on $\mathbb{R} \setminus \{0\}$, this being clause 4 of ([[thm-algebra-of-continuous-functions]]) with $A = \mathbb{R}$, numerator $1$ and denominator the identity.

[L5] A map into a subspace is continuous exactly when its composite with the ambient inclusion is continuous ([[def-subspace-topology-top]]).

## Proof

**Proof technique:** direct.

1.1 The scalar $c(x,t):=(1-t)+t/\lVert x\rVert_2$ is positive, since $1-t\ge0$, $t\ge0$, and $\lVert x\rVert_2>0$. [L3]

1.2 The coordinate projections on $P\times[0,1]$ are continuous by [L2]. By [L3] the map $x\mapsto\lVert x\rVert_2$ is continuous on $P$ and never $0$ there, so composing it with $u\mapsto 1/u$ gives a continuous $x\mapsto 1/\lVert x\rVert_2$ by [L4]; hence $c(x,t)=(1-t)+t/\lVert x\rVert_2$ is continuous, being built from continuous functions by sums, scalar multiples and products as in [L4], and each coordinate $H_i(x,t)=c(x,t)x_i$ is continuous. Componentwise continuity in [L4] makes $H$ continuous as a map into $\mathbb R^n$. [L1, L2, L3, L4]

1.3 Substituting $t=0$ and $t=1$ gives $H(x,0)=x$ and $H(x,1)=x/\lVert x\rVert_2$. If $s\in S^{n-1}$, then $\lVert s\rVert_2=1$ and $H(s,t)=s$. [L3]

2.1 Since $c(x,t)>0$ and $x\ne0$, $H(x,t)\ne0$. Hence $H$ takes values in $P$, and [L5] makes it continuous as a map $P\times[0,1]\to P$. [step 1.1, step 1.2, L5]

3.1 These identities and step 2.1 prove the statement. [step 2.1, step 1.3] ∎
````

