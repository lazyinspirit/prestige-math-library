---
id: lem-eventual-flatness-noetherian-local-approximation
kind: lemma
title: Flatness over a local filtered colimit appears at a Noetherian stage
status: published
origin: pipeline
pipeline_run: frontier-36-complete
deps:
  - def-axiom-of-choice
  - lem-noetherian-approximation-fp-algebra-module-system
  - lem-noetherian-local-flatness-tor-killing-base-change
  - thm-flatness-criteria-by-injections-and-ideals
  - thm-long-exact-tor-sequence-in-the-right-module-variable
  - thm-right-exactness-of-tensor-products
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
sources:
  references:
    - title: "The Stacks Project, Algebra, Lemma 10.128.3 (tag 00R6), eventual flatness"
      url: https://stacks.math.columbia.edu/tag/00R6
    - title: "The Stacks Project, Algebra, Lemma 10.127.13 (tag 00QX), local approximation"
      url: https://stacks.math.columbia.edu/tag/00QX
---

## Statement

Assume the Axiom of Choice. Let $(R_i\to S_i,M_i)$ be a directed
system of Noetherian local ring maps and finite $S_i$-modules. For
$i\le j$, suppose $S_i\otimes_{R_i}R_j\to S_j$ is a localization
and $M_i\otimes_{S_i}S_j\to M_j$ is an isomorphism. Write
$R=\varinjlim R_i$, $S=\varinjlim S_i$, and $M=\varinjlim M_i$.
If $M$ is flat over $R$, then $M_j$ is flat over $R_j$ at some stage
$j$. In particular this applies to the localized approximation
system of [[lem-noetherian-approximation-fp-algebra-module-system]].

## Facts & Assumptions

**Given:** The directed local system and the flat colimit module.

[F1] The kernel of $J\otimes_RM\to M$ is $\operatorname{Tor}_1^R(R/J,M)$, and flatness makes this kernel zero ([[thm-long-exact-tor-sequence-in-the-right-module-variable]], [[thm-flatness-criteria-by-injections-and-ideals]]).

[F2] Tensor products and finite presentations commute with filtered colimits. In the localized finite-presentation system the transition maps have exactly the localization and module base-change forms in the Statement ([[thm-right-exactness-of-tensor-products]], [[lem-noetherian-approximation-fp-algebra-module-system]]).

[F3] The Tor-killing local criterion applies to a square of Noetherian local maps whose target transition is a localization of the scalar extension. A flat closed quotient and a zero first-Tor map make the later finite target module flat ([[lem-noetherian-local-flatness-tor-killing-base-change]]).

## Proof

**Proof technique:** kill finitely many generators of the first Tor obstruction at a finite stage, then use the local flatness criterion.

1.1 Fix a stage $i$ and write $\mathfrak m_i$ for the maximal ideal of $R_i$. Since $R_i$ is Noetherian, $\mathfrak m_i$ is finite. The $S_i$-module $\mathfrak m_i\otimes_{R_i}M_i$ is finite, as it is a quotient of a finite direct sum of copies of $M_i$. Its submodule $$T_i=\ker(\mathfrak m_i\otimes_{R_i}M_i\to M_i) =\operatorname{Tor}_1^{R_i}(R_i/\mathfrak m_i,M_i)$$ is finite because $S_i$ is Noetherian. Choose finitely many $S_i$-generators $\xi_1,\ldots,\xi_r$ of $T_i$. [F1]

2.1 Consider, for $j\ge i$, the ideal $J_j=\mathfrak m_iR_j$. Its colimit is the ideal $J=\mathfrak m_iR\subseteq R$. A fixed finite generating set for $\mathfrak m_i$ presents each $J_j$ as a quotient of a finite free $R_j$-module. Every finite relation among those generators in $R$ already vanishes at a later stage; hence the natural map $$\varinjlim_{j\ge i}(J_j\otimes_{R_j}M_j) \longrightarrow J\otimes_RM$$ is an isomorphism. Equivalently, this follows by filtered-colimit exactness applied to the finite generating sequence and then by right exactness of tensor. Since $M$ is $R$-flat, [F1] makes $J\otimes_RM\to M$ injective. Every $\xi_a$ has zero product in $M_i$ and thus has zero image in $J\otimes_RM$. [F1, F2, step 1.1]

3.1 By the colimit description in step 2.1, each $\xi_a$ maps to zero in $J_j\otimes_{R_j}M_j$ at some stage $j\ge i$. Directedness and finiteness of the chosen generators give one common stage $j$ where all vanish. Since the natural map $$T_i\longrightarrow \operatorname{Tor}_1^{R_j}(R_j/J_j,M_j) =\ker(J_j\otimes_{R_j}M_j\to M_j)$$ is $S_i$-linear, it is zero on all of $T_i$. This is the precise Tor-killing hypothesis for [F3]; merely observing vanishing in the colimit would not suffice without this finite-stage argument. [F1, F2, step 1.1, step 2.1]

4.1 The quotient $M_i/\mathfrak m_iM_i$ is a vector space over the field $R_i/\mathfrak m_i$, hence flat. Apply [F3] to the square $R_i\to S_i$, $R_j\to S_j$, the proper ideal $I=\mathfrak m_i$, and $M_i$. Its target-transition hypothesis is part of the Statement, its closed-quotient hypothesis is the vector-space flatness, and its Tor hypothesis is step 3.1. Therefore $M_j$ is flat over $R_j$. This proves the eventual flatness assertion. [F3, step 3.1]

5.1 The final assertion follows by applying the argument to the localized system supplied by [F2]. No assertion is made that every stage becomes flat; the proof constructs one later flat stage. The Axiom of Choice covers the finite generator selections and the published Tor boundary. [F2, step 4.1] $\square$
