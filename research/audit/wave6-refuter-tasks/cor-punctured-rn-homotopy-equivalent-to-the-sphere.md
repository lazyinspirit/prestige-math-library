## Target item — `cor-punctured-rn-homotopy-equivalent-to-the-sphere`

Normalized current SHA-256: `1aa389ae684a87bd538de5b1dc40f8298ae7d0a38e99560e8a81f9a0f288545d`

The complete current item follows, including frontmatter:

````markdown
---
id: cor-punctured-rn-homotopy-equivalent-to-the-sphere
kind: corollary
title: "For $n\\ge1$, the punctured Euclidean space $\\mathbb{R}^n\\setminus\\{0\\}$ is homotopy equivalent to $S^{n-1}$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-punctured-rn-deformation-retracts-onto-the-sphere, thm-a-deformation-retract-is-a-homotopy-equivalence]
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

## Statement

For every $n\ge1$, the punctured Euclidean space $\mathbb R^n\setminus\{0\}$ and the unit sphere $S^{n-1}$ have the same homotopy type.

## Facts & Assumptions

**Given:** A natural $n\ge1$.

[L1] The unit sphere is a deformation retract of $\mathbb R^n\setminus\{0\}$ ([[thm-punctured-rn-deformation-retracts-onto-the-sphere]]).

[L2] The inclusion of a deformation retract is a homotopy equivalence ([[thm-a-deformation-retract-is-a-homotopy-equivalence]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], $S^{n-1}$ is a deformation retract of $\mathbb R^n\setminus\{0\}$. [L1]

2.1 By [L2], its inclusion is a homotopy equivalence, so the two spaces have the same homotopy type. [step 1.1, L2] ∎
````

## Proof contract for the target

```json
{
  "citations": [
    {
      "fact": "L1",
      "source": "thm-punctured-rn-deformation-retracts-onto-the-sphere",
      "source_section": "Statement",
      "quote": "Let $n\\ge1$, put $P=\\mathbb R^n\\setminus\\{0\\}$, and let $S^{n-1}\\subseteq P$ be the unit sphere. Radial normalisation $$r:P\\to S^{n-1},\\qquad r(x)=\\frac{x}{\\lVert x\\rVert_2},$$ is a retraction, and $$H(x,t)=\\left((1-t)+\\frac{t}{\\lVert x\\rVert_2}\\right)x$$ is a deformation retraction of $P$ onto $S^{n-1}$.",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L2",
      "source": "thm-a-deformation-retract-is-a-homotopy-equivalence",
      "source_section": "Statement",
      "quote": "If $A$ is a deformation retract of $X$, with inclusion $i:A\\hookrightarrow X$ and retraction $r:X\\to A$, then $i$ is a homotopy equivalence and $r$ is a homotopy inverse of $i$.",
      "uses": [
        "2.1"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1.1",
      "claim": "By [L1], $S^{n-1}$ is a deformation retract of $\\mathbb R^n\\setminus\\{0\\}$. [L1]",
      "step": "1.1",
      "inputs": [
        "L1"
      ]
    },
    {
      "id": "step-2.1",
      "claim": "By [L2], its inclusion is a homotopy equivalence, so the two spaces have the same homotopy type. [step 1.1, L2] ∎",
      "step": "2.1",
      "inputs": [
        "L2",
        "1.1"
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
      "evidence": "steps 1.1 and 2.1 invoke the endpoint-checked deformation retraction"
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
    "source": "cor-punctured-rn-homotopy-equivalent-to-the-sphere",
    "sourcePage": "homotopy-and-homotopy-equivalence",
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
    "source": "cor-punctured-rn-homotopy-equivalent-to-the-sphere",
    "sourcePage": "homotopy-and-homotopy-equivalence",
    "batch": "wave6-topology",
    "target": "thm-a-deformation-retract-is-a-homotopy-equivalence",
    "declared_target": "thm-a-deformation-retract-is-a-homotopy-equivalence",
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

### `thm-a-deformation-retract-is-a-homotopy-equivalence`

````markdown
---
id: thm-a-deformation-retract-is-a-homotopy-equivalence
kind: theorem
title: "The inclusion of a deformation retract is a homotopy equivalence with the retraction as homotopy inverse"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-retraction-and-deformation-retract, def-homotopy-equivalence]
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
pipeline_run: null
---

## Statement

If $A$ is a deformation retract of $X$, with inclusion $i:A\hookrightarrow X$ and retraction $r:X\to A$, then $i$ is a homotopy equivalence and $r$ is a homotopy inverse of $i$.

## Facts & Assumptions

**Given:** A deformation retraction $(r,H)$ of $X$ onto $A$, with inclusion $i:A\hookrightarrow X$.

[A1] Retraction gives $r\circ i=\operatorname{id}_A$, and deformation retraction gives $i\circ r\simeq_A\operatorname{id}_X$ ([[def-retraction-and-deformation-retract]]).

[A2] A continuous map is a homotopy equivalence when it has a continuous map whose composites with it are homotopic to the identity maps ([[def-homotopy-equivalence]]).

## Proof

**Proof technique:** direct.

1.1 The equality $r\circ i=\operatorname{id}_A$ is in particular a homotopy $r\circ i\simeq\operatorname{id}_A$, while $i\circ r\simeq_A\operatorname{id}_X$ is in particular an ordinary homotopy. [A1]

2.1 Hence $r$ satisfies both homotopy-inverse conditions for $i$, so $i$ is a homotopy equivalence with homotopy inverse $r$. [step 1.1, A2] ∎
````

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

