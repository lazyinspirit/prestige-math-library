---
id: thm-the-compact-square-form-of-enriched-naturality
kind: theorem
title: "The lozenge and compact-square forms of enriched naturality are equivalent"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-enriched-natural-transformation]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "G. M. Kelly, Basic Concepts of Enriched Category Theory, equation (1.39) and Section 1.8"
      url: "https://www.scribd.com/document/891660167/tr10"
    - title: "Emily Riehl, Categorical Homotopy Theory, Section 3.5"
      url: "https://emilyriehl.github.io/files/cathtpy.pdf"
---

## Statement

Let $T,S:\mathcal A\to\mathcal B$ be $\mathcal V$-functors and let
$\alpha_A:\mathbf 1\to\mathcal B(TA,SA)$ be a family of components. Then the
lozenge equation of [[def-enriched-natural-transformation]] is equivalent to the
commutativity, for every $A,B$, of the square

$$\begin{matrix} \mathcal A(A,B) & \xrightarrow{T_{A,B}} & \mathcal B(TA,TB) \\ \downarrow S_{A,B} && \downarrow \mathcal B(1,\alpha_B) \\ \mathcal B(SA,SB) & \xrightarrow{\mathcal B(\alpha_A,1)} & \mathcal B(TA,SB), \end{matrix}$$

where $\mathcal B(1,\alpha_B)$ and $\mathcal B(\alpha_A,1)$ are the canonical
maps induced by composition with the components of $\alpha$.

## Facts & Assumptions

**Given:** $\mathcal V$-functors $T,S:\mathcal A\to\mathcal B$ and a family $\alpha_A:\mathbf 1\to\mathcal B(TA,SA)$.

[L1] A $\mathcal V$-natural transformation is exactly such a family satisfying the lozenge equation against every hom-object ([[def-enriched-natural-transformation]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], the lozenge compares two composites from $\mathcal A(A,B)$ to $\mathcal B(TA,SB)$ obtained by first applying $S_{A,B}$ or $T_{A,B}$ and then composing with the component of $\alpha$ at the source or target. The canonical maps $\mathcal B(\alpha_A,1)$ and $\mathcal B(1,\alpha_B)$ are precisely those postcomposition and precomposition maps written without the unitors. [L1, given]

2.1 After identifying $\mathbf 1\otimes\mathcal A(A,B)$ and $\mathcal A(A,B)\otimes\mathbf 1$ with $\mathcal A(A,B)$ by the unitors, the two composites in the lozenge become exactly $\mathcal B(\alpha_A,1)\circ S_{A,B}$ and $\mathcal B(1,\alpha_B)\circ T_{A,B}$. Hence the lozenge equation holds if and only if those two morphisms are equal, which is exactly the commutativity of the displayed square. [L1, step 1.1, algebra]

3.1 Therefore the lozenge and compact-square formulations are equivalent. [step 2.1] ∎
