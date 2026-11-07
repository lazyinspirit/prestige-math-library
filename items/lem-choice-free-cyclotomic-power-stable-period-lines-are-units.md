---
id: lem-choice-free-cyclotomic-power-stable-period-lines-are-units
kind: lemma
title: Cyclotomic-power stable period lines are units without Choice
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 16
deps:
  - lem-choice-free-period-invariants-from-finite-galois-lifting
  - lem-choice-free-crystalline-logarithm-and-abstract-semistable-period-ring
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Olivier Brinon and Brian Conrad, CMI Summer School Notes on p-adic Hodge Theory
      url: https://math.stanford.edu/~conrad/papers/notes.pdf
      locator: Proposition 9.1.6; the finite-power cyclotomic special case is proved directly below
verification: {}
---

## Statement

Let $F/\mathbb Q_p$ be a GIVEN valued algebraic closure, $C=\widehat F$, a compatible primitive cyclotomic system be GIVEN, and $K\subset F$ be finite with maximal unramified subfield $K_0$. Suppose restriction $G_{\mathbb Q_p}\to\operatorname{Gal}(L/\mathbb Q_p)$ is surjective for every finite Galois $L/\mathbb Q_p$ in $F$. Let $B$ be either $B_{\mathrm{cris}}$ or $B_{\mathrm{st}}$, and let $0\ne b\in B$ span a $G_K$-stable $\mathbb Q_p$-line with character $\eta:G_K\to\mathbb Q_p^\times$. If $\eta^r=\chi^n$ for some integers $r>0$ and $n$, then $b$ is a unit of $B$. In particular this holds for finite-order $\eta$. This does not assert the stable-line property for arbitrary characters or the unqualified period-ring regularity theorem.

## Facts & Assumptions

**Given:** The valued closure, completion, cyclotomic system, finite $K$, the stated finite lifting property, and the displayed stable line and character relation.

[F1] The given finite lifting property makes both $B_{\mathrm{cris}}^{G_K}$ and $B_{\mathrm{st}}^{G_K}$ equal to $K_0$, without Choice. [[lem-choice-free-period-invariants-from-finite-galois-lifting]]

[F2] The element $t$ is invertible in both period rings and satisfies $g(t)=\chi(g)t$. [[lem-choice-free-crystalline-logarithm-and-abstract-semistable-period-ring]]

## Proof

1.1 The nonzero element $b^rt^{-n}\in B$ is fixed by $G_K$: its character is $\eta^r\chi^{-n}=1$ by the GIVEN relation and [F2]. By [F1] it belongs to $K_0^\times$. Hence $b^r=(b^rt^{-n})t^n$ is a unit of $B$. [F1, F2, given, algebra]

2.1 In a commutative ring, if $b^r$ is a unit then $b$ is a unit with inverse $b^{r-1}(b^r)^{-1}$. Applying this to step 1.1 proves the assertion. If $\eta$ has finite order, choose one positive order $r$ and take $n=0$. No claim about general stable-line characters is made. [step 1.1, given, algebra] ∎

## Source notes

The calculation is a direct special case of the stable-line criterion; it avoids Sen theory only because the cyclotomic-power character relation is an explicit hypothesis. The source's arbitrary-character regularity remains an independent proof obligation.
