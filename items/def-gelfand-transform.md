---
id: def-gelfand-transform
kind: definition
title: Gelfand transform
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-character-and-maximal-ideal-space, def-unital-banach-algebra, thm-maximal-ideal-space-is-compact-hausdorff, def-axiom-of-choice]
justified_by: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Vahid Shirbisheh, Lectures on C-star Algebras, v2 — Definition 3.1.17, printed pp. 61–62"
      url: "https://arxiv.org/pdf/1211.3404"
    - title: "Theo Bühler and Dietmar A. Salamon, Functional Analysis — Definition 5.59 and §5.5.1, printed pp. 259–262"
      url: "https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf"
    - title: "Dana P. Williams, Lecture Notes on the Spectral Theorem — Definition 3.2 and §3, printed pp. 7–9"
      url: "https://www.math.dartmouth.edu/~dana/bookspapers/ln-spec-thm.pdf"
---

## Definition

Let $A$ be a commutative unital complex algebra and let $\Delta(A)$ be its
character space with the pointwise-evaluation topology
([[def-character-and-maximal-ideal-space]]). For $a \in A$ define its **Gelfand
transform** $\hat a : \Delta(A) \to \mathbb C$ by

$$\hat a(\chi) \;:=\; \chi(a) \qquad (\chi \in \Delta(A)),$$

and define the **Gelfand transform** of $A$ as the map

$$\Gamma_A : A \longrightarrow \mathbb C^{\Delta(A)}, \qquad \Gamma_A(a) := \hat a .$$

Each $\hat a$ is continuous for the pointwise-evaluation topology, because that
topology is by definition the coarsest one making every evaluation
$\chi \mapsto \chi(b)$ continuous and $\hat a$ is the evaluation at $a$; the
codomain is written $\mathbb C^{\Delta(A)}$ with the product topology, and the
image of $\Gamma_A$ therefore lies in the algebra $C(\Delta(A))$ of continuous
functions.  No supremum norm or compactness is asserted for a general $A$.
If $A$ is in addition a nonzero unital commutative Banach algebra and the Axiom
of Choice is assumed ([[def-axiom-of-choice]]), then
[[thm-maximal-ideal-space-is-compact-hausdorff]] makes $\Delta(A)$ compact and
$C(\Delta(A))$ carries its supremum norm.

Two qualifications are part of the definition:

- the notation is introduced for **unital commutative** algebras here; the
  nonunital version with target $C_0(\Delta(A))$ is a theorem proved later
  ([[thm-nonunital-commutative-gelfand-naimark]]) and is not smuggled into the
  definition;
- no injectivity, surjectivity, isometry or *-preservation is claimed at this
  point. Those properties are theorems, valid under progressively stronger
  hypotheses, and the map $\Gamma_A$ is defined for every commutative unital
  complex algebra.

## Remarks

- **Notation.** We write $\hat a$ for $\Gamma_A(a)$ and drop the subscript
  $\Gamma = \Gamma_A$ when the algebra is clear; the algebra, not the element,
  is what $\Gamma$ encodes.
- **Values are character values.** With the definition in hand, the identity
  $\sigma_A(a) = \{\chi(a) : \chi \in \Delta(A)\}$ of
  [[thm-spectrum-as-character-values]] reads
  $\operatorname{ran}(\hat a) = \sigma_A(a)$, which is the form in which the
  spectrum will be computed from the transform.
