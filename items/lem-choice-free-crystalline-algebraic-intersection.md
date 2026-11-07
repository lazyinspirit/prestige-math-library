---
id: lem-choice-free-crystalline-algebraic-intersection
kind: lemma
title: Algebraic elements of the crystalline fraction field without Choice
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 14
deps:
  - lem-choice-free-ramified-crystalline-comparison-injection
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Olivier Brinon and Brian Conrad, CMI Summer School Notes on p-adic Hodge Theory
      url: https://math.stanford.edu/~conrad/papers/notes.pdf
      locator: Theorem 9.1.5 and the algebraic-intersection argument following Proposition 9.1.6; deduction written out locally
verification: {}
---

## Statement

Let $F/\mathbb Q_p$ be a GIVEN valued algebraic closure, $C=\widehat F$ its ordinary completion, and a compatible primitive cyclotomic system be GIVEN. Regard $F$ and $E=\operatorname{Frac}(B_{\mathrm{cris}})$ inside $B_{\mathrm{dR}}$. For every finite $K\subset F$ with maximal unramified subfield $K_0$, one has $K\cap E=K_0$. Consequently $F\cap E$ is exactly the union of the finite unramified subextensions of $F/\mathbb Q_p$. These assertions use no Choice axiom and do not assert the de Rham or crystalline Galois invariant fields.

## Facts & Assumptions

**Given:** The valued algebraic closure, its ordinary completion, and the primitive cyclotomic system.

[F1] For every finite $K\subset F$, the natural map $K\otimes_{K_0}B_{\mathrm{cris}}\to B_{\mathrm{dR}}$ is injective, with its canonical $K_0$-coefficient embeddings. [[lem-choice-free-ramified-crystalline-comparison-injection]]

## Proof

1.1 Localizing [F1] at the nonzero elements of the domain $B_{\mathrm{cris}}$ gives an injection $K\otimes_{K_0}E\hookrightarrow B_{\mathrm{dR}}$. If $a\in K\cap E$ were outside $K_0$, the element $a\otimes1-1\otimes a$ would be nonzero in this tensor product: extend the independent pair $1,a$ to one finite $K_0$-basis of $K$ and apply a linear functional taking $1$ to $0$ and $a$ to $1$. Its image in $B_{\mathrm{dR}}$ is zero, a contradiction. The reverse inclusion $K_0\subset K\cap E$ follows from the coefficient embeddings in [F1]. Thus $K\cap E=K_0$. [F1, given, algebra]

2.1 If $a\in F\cap E$, the field $K=\mathbb Q_p(a)$ is finite because $F/\mathbb Q_p$ is algebraic, and step 1.1 gives $a\in K_0$, an unramified subextension. Conversely, if $a$ belongs to one finite unramified subextension $K$ of $F$, then $K=K_0$ and step 1.1 puts $a$ in $E$. This proves the union identity. The argument chooses only a finite basis for one finite field and uses no infinite selection or Galois fixed-field claim. [F1, step 1.1, given, algebra] ∎

## Source notes

The finite-field intersection is the direct tensor-algebra consequence of the newly constructed ramified crystalline injection. The cited Brinon–Conrad passage was read, but no result is imported in place of the proof above.
