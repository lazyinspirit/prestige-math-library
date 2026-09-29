---
id: thm-flat-families-fibre-dimension-locally-constant
kind: theorem
title: "Fibre dimension of proper flat finitely presented families"
status: published
origin: pipeline
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
deps:
  - def-axiom-of-choice
  - def-scheme-theoretic-fibre
  - lem-flat-fp-fibre-dimension-lower-semicont
  - lem-fibre-dimension-upper-semicont-proper
  - thm-flat-finite-presentation-is-open
  - thm-proper-morphism-closed-image
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
sources:
  references:
    - title: "The Stacks Project, More on Morphisms, Section 37.30 (dimension of fibres)"
      url: https://stacks.math.columbia.edu/tag/05F6
---

## Statement

Assume the Axiom of Choice. If $f:X\to S$ is proper, flat, and of finite
presentation, then the function
$$s\longmapsto\dim X_s\in\{-\infty\}\cup\mathbb N$$
is locally constant on $S$, where $X_s$ is the scheme-theoretic fibre and
$\dim\varnothing=-\infty$ ([[def-scheme-theoretic-fibre]]). In particular
the empty-fibre locus is open and closed. No assertion is made for arbitrary
flat families.


## Facts & Assumptions

**Given:** The morphism and fibre convention of the Statement.

[F1] For a flat finitely presented morphism, the set
$L_n=\{s:\dim X_s\ge n\}$ is open for each $n\ge0$; as proved in the local library item
([[lem-flat-fp-fibre-dimension-lower-semicont]]).

[F2] For a proper morphism, the same set $C_n=\{s:\dim X_s\ge n\}$ is
closed for each $n\ge0$ ([[lem-fibre-dimension-upper-semicont-proper]]).

[F3] A flat locally finitely presented morphism is open
([[thm-flat-finite-presentation-is-open]]), and a proper morphism is closed
([[thm-proper-morphism-closed-image]]).

[F4] AC is the choice-function axiom ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

1.1 Properness makes every fibre a finite-type scheme over its residue field, hence quasi-compact and of finite Krull dimension when nonempty. Thus the function in the Statement takes only values in $\{-\infty\}\cup\mathbb N$. For every $m\ge0$ its level set is $$\{s:\dim X_s=m\}=L_m\cap(S\smallsetminus C_{m+1}).$$ The first set is open by [F1]; the second is open by [F2]. Therefore every finite-valued level set is open. [F1, F2]

1.2 The nonempty-fibre locus is exactly $f(X)$. It is open by [F3], because $f$ is flat and locally finitely presented, and closed by [F3], because $f$ is proper. Hence its complement $S\smallsetminus f(X)$, which is precisely the level set with value $-\infty$, is open and closed. [F3]

2.1 Every point of $S$ belongs to the open level set of its value by steps 1.1 and 1.2, so the fibre-dimension function is locally constant. If $X=\varnothing$, the whole base is the $-\infty$ level set. The dimension zero case uses $L_0\cap(S\smallsetminus C_1)$, and no connectedness or surjectivity hypothesis is needed. AC is inherited through [F1] and [F2]; the set operations use no further choice. [F1, F2, F3, F4, step 1.1, step 1.2] ∎
