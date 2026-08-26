---
id: thm-trace-form-is-nondegenerate-iff-separable
kind: theorem
title: "The trace form of a finite extension is nondegenerate exactly when the extension is separable"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-trace-form-of-a-finite-extension, def-matrix-radicals-rank-and-nondegeneracy-of-a-bilinear-form, thm-field-norm-and-trace-by-embeddings, thm-dedekind-linear-independence-of-characters, def-separable-elements-and-separable-extensions]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-26
sources:
  scraped: []
  references:
    - title: "B. Conrad, Norm and trace, Theorem 2.5"
      url: "https://virtualmath1.stanford.edu/~conrad/248APage/handouts/normtrace.pdf"
    - title: "J. S. Milne, Fields and Galois Theory, v5.10, Theorem 5.47"
      url: "https://www.jmilne.org/math/CourseNotes/FT.pdf"
pipeline_run: null
---

## Statement

Let $K/F$ be a finite field extension and let

$$T_{K/F}(x,y)=\operatorname{Tr}_{K/F}(xy)$$

be its trace form ([[def-trace-form-of-a-finite-extension]]). Then
$T_{K/F}$ is nondegenerate
([[def-matrix-radicals-rank-and-nondegeneracy-of-a-bilinear-form]])
if and only if $K/F$ is separable
([[def-separable-elements-and-separable-extensions]]).

## Facts & Assumptions
**Given:** A finite extension $K/F$, its trace form $T_{K/F}$, and an $F$-basis $e_1,\dots,e_n$ of $K$.

[F1] The trace form is the symmetric bilinear form $(x,y)\mapsto \operatorname{Tr}_{K/F}(xy)$ ([[def-trace-form-of-a-finite-extension]]).

[F2] A bilinear form on a finite-dimensional space is nondegenerate exactly when its matrix in one, hence every, basis is invertible ([[def-matrix-radicals-rank-and-nondegeneracy-of-a-bilinear-form]]).

[L1] The trace is the sum of the conjugates in the separable case and is identically zero in the inseparable case ([[thm-field-norm-and-trace-by-embeddings]]).

[L2] Distinct embeddings are linearly independent, so their evaluation matrix on a suitable basis is invertible ([[thm-dedekind-linear-independence-of-characters]]).

## Proof

**Proof technique:** direct.

1.1 For the forward implication from inseparability to degeneracy, suppose $K/F$ is not separable. Then [L1] makes $\operatorname{Tr}_{K/F}$ identically zero, so $$T_{K/F}(x,y)=\operatorname{Tr}_{K/F}(xy)=0$$ for every $x,y\in K$. Thus every vector lies in both radicals, and the form is degenerate. [F1, L1]

1.2 For the converse direction, suppose $K/F$ is separable and let $\sigma_1,\dots,\sigma_n\colon K\to\Omega$ be its distinct $F$-embeddings into an algebraic closure. Form the evaluation matrix $A=(\sigma_i(e_j))_{i,j}$. By [L2], $A$ is invertible. [L2, choose]

2.1 The matrix of $T_{K/F}$ in the basis $e_1,\dots,e_n$ is $B=(\operatorname{Tr}_{K/F}(e_ie_j))_{i,j}$. Because $K/F$ is separable, [L1] gives $$\operatorname{Tr}_{K/F}(e_ie_j)=\sum_{r=1}^n \sigma_r(e_i)\sigma_r(e_j),$$ so $$B=A^{\mathsf T}A.$$ [F1, L1, step 1.2, algebra]

3.1 Since $A$ is invertible, the matrix $B=A^{\mathsf T}A$ is invertible. Therefore [F2] makes the trace form nondegenerate. [F2, step 2.1, algebra]

4.1 Steps 1.1 and 3.1 prove the equivalence. [step 1.1, step 3.1] ∎

## Remarks




- **The inseparable case is not a small defect but a total collapse.** The trace itself vanishes, so the whole bilinear form vanishes.
