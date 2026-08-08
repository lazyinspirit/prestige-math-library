## Target item — `ex-radial-deformation-retraction-of-punctured-rn`

Normalized current SHA-256: `706fa016f35c6adee19a22517b1313d9c36c8fdb5c04a1368d67377b42c2e00c`

The complete current item follows, including frontmatter:

````markdown
---
id: ex-radial-deformation-retraction-of-punctured-rn
kind: example
title: "The radial homotopy is checked explicitly on punctured Euclidean space and on the unit sphere"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-punctured-rn-deformation-retracts-onto-the-sphere, thm-radial-straight-line-map-on-punctured-rn]
aliases: []
landmark: false
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

## Example

For $P=\mathbb R^n\setminus\{0\}$ with $n\ge1$, the radial deformation retraction onto $S^{n-1}$ is

$$H(x,t)=\left((1-t)+\frac{t}{\lVert x\rVert_2}\right)x.$$

At $t=0$ it is the identity, at $t=1$ it is radial normalisation, and every point of the unit sphere remains fixed.

## Facts & Assumptions

**Given:** A natural $n\ge1$, a point $x\in P$, a parameter $t\in I$, and a point $s\in S^{n-1}$.

[L1] The radial formula is continuous on $P\times I$, is nonzero there, starts at $x$, ends at $x/\lVert x\rVert_2$, and fixes norm-one vectors ([[thm-radial-straight-line-map-on-punctured-rn]]).

[L2] This map and radial normalisation form a deformation retraction of $P$ onto $S^{n-1}$ ([[thm-punctured-rn-deformation-retracts-onto-the-sphere]]).

## Verification

**Proof technique:** direct.

1.1 Substituting $t=0$ gives $H(x,0)=x$, and substituting $t=1$ gives $H(x,1)=x/\lVert x\rVert_2$. [algebra]

1.2 If $s\in S^{n-1}$ then $\lVert s\rVert_2=1$, so $H(s,t)=((1-t)+t)s=s$ for all $t\in I$. [algebra]

2.1 Continuity and avoidance of the origin are supplied by [L1]. Thus steps 1.1 and 1.2 explicitly verify the endpoint and fixed-sphere clauses of the deformation retraction [L2]. [step 1.1, step 1.2, L1, L2] ∎
````

## Proof contract for the target

```json
{
  "citations": [
    {
      "fact": "L1",
      "source": "thm-radial-straight-line-map-on-punctured-rn",
      "source_section": "Statement",
      "quote": "For $n\\ge1$, put $P=\\mathbb R^n\\setminus\\{0\\}$ and define $$H:P\\times[0,1]\\to P,\\qquad H(x,t)=\\bigl((1-t)+t/\\lVert x\\rVert_2\\bigr)x.$$ Then $H$ is continuous, $H(x,0)=x$, $H(x,1)=x/\\lVert x\\rVert_2$, $H(s,t)=s$ for $s\\in S^{n-1}$, and $H(x,t)\\ne0$.",
      "uses": [
        "2.1"
      ]
    },
    {
      "fact": "L2",
      "source": "thm-punctured-rn-deformation-retracts-onto-the-sphere",
      "source_section": "Statement",
      "quote": "Let $n\\ge1$, put $P=\\mathbb R^n\\setminus\\{0\\}$, and let $S^{n-1}\\subseteq P$ be the unit sphere. Radial normalisation $$r:P\\to S^{n-1},\\qquad r(x)=\\frac{x}{\\lVert x\\rVert_2},$$ is a retraction, and $$H(x,t)=\\left((1-t)+\\frac{t}{\\lVert x\\rVert_2}\\right)x$$ is a deformation retraction of $P$ onto $S^{n-1}$.",
      "uses": [
        "2.1"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1.1",
      "claim": "Substituting $t=0$ gives $H(x,0)=x$, and substituting $t=1$ gives $H(x,1)=x/\\lVert x\\rVert_2$. [algebra]",
      "step": "1.1",
      "inputs": [
        "statement hypotheses and the definitions or objects introduced in this step"
      ]
    },
    {
      "id": "step-1.2",
      "claim": "If $s\\in S^{n-1}$ then $\\lVert s\\rVert_2=1$, so $H(s,t)=((1-t)+t)s=s$ for all $t\\in I$. [algebra]",
      "step": "1.2",
      "inputs": [
        "statement hypotheses and the definitions or objects introduced in this step"
      ]
    },
    {
      "id": "step-2.1",
      "claim": "Continuity and avoidance of the origin are supplied by [L1]. Thus steps 1.1 and 1.2 explicitly verify the endpoint and fixed-sphere clauses of the deformation retraction [L2]. [step 1.1, step 1.2, L1, L2] ∎",
      "step": "2.1",
      "inputs": [
        "L1",
        "1.1",
        "1.2",
        "L2"
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
      "status": "checked",
      "evidence": "step 1.1 includes the unit-sphere specialization, on which the homotopy is stationary"
    },
    {
      "case": "endpoints",
      "status": "checked",
      "evidence": "step 1.1 checks both homotopy endpoints and the fixed sphere"
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
    "source": "ex-radial-deformation-retraction-of-punctured-rn",
    "sourcePage": "homotopy-and-homotopy-equivalence-examples",
    "batch": "wave6-topology",
    "target": "thm-punctured-rn-deformation-retracts-onto-the-sphere",
    "declared_target": "thm-punctured-rn-deformation-retracts-onto-the-sphere",
    "target_statement_provenance": null,
    "targetPage": "homotopy-and-homotopy-equivalence",
    "targetBatch": "wave6-topology",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-radial-deformation-retraction-of-punctured-rn",
    "sourcePage": "homotopy-and-homotopy-equivalence-examples",
    "batch": "wave6-topology",
    "target": "thm-radial-straight-line-map-on-punctured-rn",
    "declared_target": "thm-radial-straight-line-map-on-punctured-rn",
    "target_statement_provenance": "ai-altered",
    "targetPage": "the-topology-of-euclidean-space",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  }
]
```

## Full text of every cited or declared item (2)

### `thm-punctured-rn-deformation-retracts-onto-the-sphere`

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

