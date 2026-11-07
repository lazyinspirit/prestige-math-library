---
dependency_level: 0
id: lem-deligne-weight-zero-matrix-trace-and-dual-identities
kind: lemma
title: "Weight-zero matrix traces, contragredients and spectral bounds"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - thm-trace-is-sum-of-eigenvalues
  - cor-endomorphisms-over-an-algebraically-closed-field-are-triangularisable
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Fouvry, Kowalski and Michel, Trace functions over finite fields and applications, Dec3 2014 draft"
      url: "https://people.math.ethz.ch/~kowalski/elements.pdf"
      locator: "Sections3.4,3.6 and4.1; lisse-locus matrix calculation only"
---

## Statement

Let $E$ be algebraically closed with an embedding $\iota:E\hookrightarrow\mathbb C$. For a finite-dimensional endomorphism $T$ with every eigenvalue $\beta$ satisfying $|\iota(\beta)|\le R$, where $R\ge0$, one has $|\iota(\operatorname{Tr}T)|\le(\dim T)R$. If $A,B$ are invertible and all eigenvalues have absolute value one, then
$$\iota(\operatorname{Tr}((B^{-1})^{\mathsf t}))=\overline{\iota(\operatorname{Tr}B)},\qquad \iota(\operatorname{Tr}(A\otimes(B^{-1})^{\mathsf t}))=\iota(\operatorname{Tr}A)\overline{\iota(\operatorname{Tr}B)}.$$
This is a matrix identity for given stalk automorphisms; it does not identify the boundary stalk of a middle extension of a dual with the dual of a boundary invariant stalk.

## Facts & Assumptions

**Given:** The field, embedding, finite-dimensional operators and spectral bounds in the Statement.

[F1] The trace is the sum of eigenvalues with multiplicity. [[thm-trace-is-sum-of-eigenvalues]]

[F2] An endomorphism over an algebraically closed field is triangularisable. [[cor-endomorphisms-over-an-algebraically-closed-field-are-triangularisable]]

## Proof

1.1 By [F2], the characteristic polynomial splits; [F1] expresses the trace as the sum of its eigenvalues. Applying the ordinary complex triangle inequality gives the bound. It also gives trace zero in dimension zero, so that case is included. [given, F1, F2, algebra]

2.1 Triangularise $B$. The inverse transpose has the inverse eigenvalues $\beta^{-1}$ with the same multiplicities. Their images satisfy $\iota(\beta^{-1})=\overline{\iota(\beta)}$, since $|\iota(\beta)|=1$. Summing by [F1] proves the dual trace identity without any diagonalisability premise. In product bases, the diagonal entries of $A\otimes C$ are $a_{ii}c_{jj}$; summing gives $\operatorname{Tr}(A\otimes C)=\operatorname{Tr}A\operatorname{Tr}C$. Substitute $C=(B^{-1})^{\mathsf t}$ to prove the second identity. This also covers a zero-dimensional factor. [given, F1, F2, step 1.1, algebra] ∎
