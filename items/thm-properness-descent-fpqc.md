---
id: thm-properness-descent-fpqc
kind: theorem
title: Properness descends through fpqc base change
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps:
  - def-axiom-of-choice
  - def-base-change-morphism-schemes
  - def-fpqc-morphism-schemes
  - def-proper-morphism
  - lem-fpqc-descent-properness-components
  - lem-proper-stable-base-change
proof_strategy: direct
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
sources:
  references:
    - title: "Stacks Project, Descent, §35.23 (tag 02YJ)"
      url: https://stacks.math.columbia.edu/tag/02YJ
    - title: "Stacks Project, Descent, Lemma 35.23.16 (tag 02L1)"
      url: https://stacks.math.columbia.edu/tag/02L1
---

## Statement

Assume the Axiom of Choice (AC). Let $p:S'\to S$ be an fpqc covering morphism
in the page-local convention, so that $p$ is flat, surjective and
quasi-compact, let $f:X\to S$ be a morphism of schemes, and let
$$f':X\times_S S'\longrightarrow S'$$
be its base change along $p$. Then $f$ is proper if and only if $f'$ is
proper.

## Facts & Assumptions

**Given:** AC, an fpqc covering morphism $p:S'\to S$ in the page-local convention, a morphism $f:X\to S$, and its base change $f':X\times_S S'\to S'$ along $p$.

[F1] A morphism of schemes is proper exactly when it is separated, of finite type, and universally closed; the definition applies to arbitrary schemes and assumes neither Noetherian nor finite-presentation hypotheses. ([[def-proper-morphism]])

[F2] On this page an fpqc covering morphism is a flat, surjective and quasi-compact morphism $p:S'\to S$, and the singleton family of such a morphism is an fpqc cover in the family convention. ([[def-fpqc-morphism-schemes]])

[F3] Assume AC. For every fpqc covering morphism $p:S'\to S$ and every morphism $f:X\to S$, each of quasi-compactness, finite type, separatedness and universal closedness holds for $f$ if and only if it holds for the base change $X\times_S S'\to S'$; in particular each of these properties descends along $p$. ([[lem-fpqc-descent-properness-components]])

[F4] Assume AC. Every base change of a proper morphism is proper. ([[lem-proper-stable-base-change]])

[F5] The base change of $f:X\to S$ along $p:S'\to S$ is the second projection $X\times_S S'\to S'$, and a property of morphisms is stable under arbitrary base change when every pullback of a morphism with that property again has it. ([[def-base-change-morphism-schemes]])

[F6] AC says that every family of nonempty sets has a choice function. ([[def-axiom-of-choice]])

**Exact AC use:** AC is used only through [F3] and [F4], each of which is stated with AC as a hypothesis. Reassembling properness from its three defining properties in steps 2.1, 2.2 and 3.1 is purely logical, and this proof selects no element from any family.



## Proof

**Proof technique:** direct.

1.1 Put $X'=X\times_S S'$ and let $f':X'\to S'$ be the second projection, so that $f'$ is the base change of $f$ along $p$ in the sense of [F5]. By [F2] the morphism $p$ is flat, surjective and quasi-compact, so it is an fpqc covering morphism in the page-local convention, and the hypotheses of [F3] and [F4] are satisfied by $p$, $f$ and $f'$. The fibre product exists for arbitrary schemes, so $f'$ is defined for every $f$ and every $p$. [F2, F5]

2.1 Suppose first that $f$ is proper. The morphism $f'$ is a base change of $f$ along the arbitrary morphism $p$, so [F4] applies with hypothesis exactly the assumed properness of $f$, and $f'$ is proper. Unfolding [F1], this says that $f'$ is separated, of finite type and universally closed. This proves the forward implication. [F1, F4, step 1.1]

2.2 Conversely, suppose that $f'$ is proper. By [F1], $f'$ is separated, of finite type and universally closed. Since $f'$ is the base change of $f$ along the fpqc covering morphism $p$ (step 1.1), [F3] applies to $p$ and $f$ and shows that $f$ likewise has each of these three properties: $f$ is separated, of finite type and universally closed. This proves the reverse implication. [F1, F3, step 1.1]

3.1 By [F1], the three properties established in step 2.2 make $f$ proper. Together with step 2.1 this shows that $f$ is proper if and only if $f'$ is proper, which is the claim. [F1, step 2.1, step 2.2]

4.1 Degenerate cases and choice accounting. If $S$ is empty then $S'$ and $X$ are empty as well, and both $f$ and $f'$ are the empty morphism, which is separated, of finite type and universally closed vacuously, hence proper by [F1]; if $X$ is empty the same holds with $X'$ empty. If $p$ is the identity of $S$, then $f'=f$ and the equivalence is tautological. None of these cases requires an extra hypothesis, and nonreduced or non-Noetherian schemes are allowed throughout because [F1] imposes no such condition. AC is declared in the statement and is used exactly through [F3] and [F4]; no other step of the argument invokes it. Both directions of the biconditional were proved, the forward one in step 2.1 and the reverse one in step 2.2. [F1, F3, F4, F6, step 2.1, step 2.2] ∎
