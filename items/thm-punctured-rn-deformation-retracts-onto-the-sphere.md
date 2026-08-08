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
