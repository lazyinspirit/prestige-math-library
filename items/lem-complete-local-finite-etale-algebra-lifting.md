---
id: lem-complete-local-finite-etale-algebra-lifting
kind: lemma
title: "Finite étale algebras over a complete local ring are determined by reduction"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps:
  - def-axiom-of-choice
  - thm-finite-etale-algebras-invariant-under-nilpotent-thickening
  - lem-finite-etale-algebra-module-presentation-and-rank
  - cor-nakayama-generators-modulo-an-ideal
  - lem-differentials-base-change
  - thm-completion-as-extension-of-scalars
  - thm-krull-intersection-theorem
proof_strategy: direct
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
    scope: "historical complete Step5 reader; item lem-complete-local-finite-etale-algebra-lifting; evidence research/frontier-38-owner-30-reader-30.md, research/frontier-38-owner-30-reader-findings-30.json. Original reports retain their scope and source limitations; no recursive audit of all published prerequisites or complete bibliography is claimed. Restored from completed 2026-10-03 evidence; no new audit performed."
    delegated_by: "tools/autopilot frontier-38-owner-30 historical dispatched reader/repair lane"
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "SGA 1, Exposé I §8 and Exposé IX §1; étale lifting through nilpotent ideals"
      url: https://arxiv.org/pdf/math/0206203
    - title: "Stacks Project, Étale Morphisms §15, Theorems 15.1–15.2; alternate separability proof expanded here"
      url: https://stacks.math.columbia.edu/download/etale.pdf
---

## Statement

Assume AC. Let $(A,\mathfrak m)$ be a Noetherian local ring complete and separated for an ideal $I\subseteq\mathfrak m$. Reduction is an equivalence between finite étale $A$-algebras and finite étale $A/I$-algebras. In particular this applies to $I=\mathfrak m$, or to a parameter ideal $(f)$ when $A$ is complete local and regular. This is an affine lifting statement.

## Facts & Assumptions

**Given:** AC, $(A,\mathfrak m)$ and $I$ in the Statement, and a finite étale $A/I$-algebra $D_1$.

[F1] Finite étale algebras lift with all maps uniquely through nilpotent ideals ([[thm-finite-etale-algebras-invariant-under-nilpotent-thickening]]). Over a local ring their finite projective modules are finite free ([[lem-finite-etale-algebra-module-presentation-and-rank]]).

[F2] Differentials commute with base change and Nakayama detects zero finite modules ([[lem-differentials-base-change]], [[cor-nakayama-generators-modulo-an-ideal]]). AC is inherited through [F1]–[F2] ([[def-axiom-of-choice]]).

[F3] Finite modules over a complete Noetherian local ring are complete by [[thm-completion-as-extension-of-scalars]], and their ideal-adic intersections vanish when that ideal is in the maximal ideal by [[thm-krull-intersection-theorem]].

## Proof

1.1 By [F1] construct compatible finite étale algebras $D_n$ over $A/I^n$. Each is free of the same finite rank $r$: its residue-field dimension is constant under reduction. Choose a basis of $D_1$ and lift it successively to $D_{n+1}$. Nakayama makes each lifted list a basis, since the source and target are free of the same rank and its determinant reduces to a unit. Thus these identifications respect the transition maps, and $D=\varprojlim D_n$ is $A^r$ as a module. The compatible multiplication tables and units define a commutative associative unital algebra structure on it. Its reduction modulo $I^n$ is $D_n$. [F1, F2, construct]

2.1 The algebra $D$ is finite free, hence flat and finitely presented as an algebra by [F1]. Its finite module of differentials has reduction modulo $I$ equal to zero by [F2], and Nakayama makes it zero. Thus $D$ is finite étale. Given two finite étale $A$-algebras and a map between their reductions, [F1] gives compatible maps modulo all $I^n$. Their matrices have a unique limit because finite free modules are complete and separated. The limit preserves multiplication and unit, since these identities hold modulo every $I^n$; conversely any map is determined by all those reductions. This proves the equivalence. [F1, F2, step 1.1, algebra]

3.1 If $A$ is initially complete for its maximal ideal, it is complete for every ideal $I\subseteq\mathfrak m$. Choose representatives for a compatible system modulo $I^n$. They form a maximal-adic Cauchy sequence since $I^n\subseteq\mathfrak m^n$, and hence have a limit in $A$. Each $I^n$ is closed in the maximal-adic topology, because $A/I^n$ is a complete separated finite module by [F3]; consequently the limit has every prescribed residue modulo $I^n$. Injectivity follows from $\bigcap I^n\subseteq\bigcap\mathfrak m^n=0$. This proves the parameter-ideal application in the Statement without an additional completeness assumption. [F3, step 2.1, algebra] ∎
