---
id: lem-author-16f30f6b95cb-lowweight-weight-one-positive-picard
kind: lemma
title: The EM weight-one Picard normalization is positive identity
status: published
domain: mathematics
deps:
  - thm-author-16f30f6b95cb-lowweight-em-map-normalizations
  - thm-author-16f30f6b95cb-lowweight-determinant-one-type-input
  - lem-author-16f30f6b95cb-lowweight-zero-projection-rank
  - math:def-axiom-of-choice
dependency_roles:
  thm-author-16f30f6b95cb-lowweight-em-map-normalizations: mathematical-premise
  thm-author-16f30f6b95cb-lowweight-determinant-one-type-input: mathematical-premise
  lem-author-16f30f6b95cb-lowweight-zero-projection-rank: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 16
---

## Statement
Assume the Axiom of Choice and the fixed compatible universe and site-size bounds of the supplied constructions.

On Sm_k for any field k, write S=Ω∞Fil¹K and identify Ω∞gr¹K with $BG_m$ by the canonical EM c₁ comparison. Let κ:$BG_m$→S lift L↦[L]−1. Then the based map q₁κ:$BG_m$→$BG_m$ is identity as a map of Nisnevich stacks, hence on both the Picard classes and their automorphism units. This identifies the sign of the actual projection and not merely its target group.

## Facts & Assumptions
[A1] Assume the Axiom of Choice as formulated in [[math:def-axiom-of-choice]] and the stated universe and site-size bounds. They are inherited when applying the determinant/one-type input in [F2] at step 1.2. The stack comparison is on a universe-bounded smooth big Nisnevich site; derived sections use the compatible small sites. The Laurent-unit calculation and the integer sign test add no further choice principle.

**Given:** The normalized maps and the field hypothesis in the Statement. All maps and homotopies below are in pointed Nisnevich sheaves of spaces on $\mathrm{Sm}_k$. Assume Choice and the universe and site-size bounds in [A1].

**Goal:** Identify the chosen lift with the normalized lift, then prove the identity on the whole line-bundle stack.

[F1] [[thm-author-16f30f6b95cb-lowweight-em-map-normalizations]] supplies the particular pointed lift $a$ of $L\mapsto 1-[L]$, the canonical identification $\Omega^\infty\operatorname{gr}^1K\simeq B\mathbb G_m$, and $q_1(-a)(\mathcal O(-1))=c_1(\mathcal O(-1))$. It also fixes $\operatorname{Pic}(\mathbb P^1_k)=\mathbb Z$ with generator $c_1(\mathcal O(1))$. This fact does not assert that an arbitrary lift is $-a$.

[F2] [[thm-author-16f30f6b95cb-lowweight-determinant-one-type-input]] supplies the fully faithful classification of pointed connected one-types by sheaves of groups. In particular pointed maps $B\mathbb G_m\to B\mathbb G_m$ correspond to sheaf-group endomorphisms of $\mathbb G_m$.

[F3] [[lem-author-16f30f6b95cb-lowweight-zero-projection-rank]], including its weight-zero comparison and stage computation, identifies $q_0$ with rank and uses the actual fiber sequence $\operatorname{Fil}^1K\to K\to\operatorname{gr}^0K$. On smooth schemes the comparison of [F1] identifies the zeroth space of the last term with the locally constant integer sheaf: its positive homotopy groups are negative cohomology groups of the degree-zero constant sheaf and vanish.

## Proof
1.1 Put $T=\Omega^\infty\operatorname{gr}^0K$ and $f:B\mathbb G_m\to\Omega^\infty K$, $L\mapsto[L]-1$. By [F3], $T$ is the discrete locally constant integer sheaf and $q_0f$ is the zero map, since every line bundle has rank one. Since $\Omega^\infty$ preserves fibers, $S$ is the fiber over zero of $\Omega^\infty K\to T$. Applying the pointed mapping-space functor from $B\mathbb G_m$ identifies the space of lifts of this fixed $f$ with the space of paths from $q_0f$ to zero in $\operatorname{Map}_*(B\mathbb G_m,T)$. The latter mapping space is discrete because $T$ is zero-truncated. The path space in question is therefore contractible. [F3, given]

1.2 By [F2], $q_1\kappa$ corresponds to an endomorphism $h:\mathbb G_m\to\mathbb G_m$. The sheaf $\mathbb G_m$ is represented on $\mathrm{Sm}_k$ by $\operatorname{Spec}k[t,t^{-1}]$, so Yoneda identifies its underlying natural map with a unit of $k[t,t^{-1}]$. Every such unit is $b t^n$ for $b\in k^\times$ and $n\in\mathbb Z$: the highest and lowest exponents of a product add over a field, and a product equal to one forces both factors to have a single exponent. Preservation of the identity gives $b=1$. Hence $h(u)=u^n$, and the associated pushforward of torsors sends a line bundle $L$ to $L^{\otimes n}$. This Laurent-unit calculation uses the field hypothesis. [F2, given, A1]

2.1 Inversion in the infinite loop space sends the particular lift $a$ in [F1] to a pointed lift $-a$ of $f$. Both the specified $\kappa$ and $-a$ are thus lifts of the same fixed map. By step 1.1 they agree up to pointed homotopy over $\Omega^\infty K$. Consequently the normalized evaluation from [F1] applies to $q_1\kappa$, giving $q_1\kappa(\mathcal O(-1))=c_1(\mathcal O(-1))$. [F1, step 1.1]

3.1 Apply step 1.2 to $\mathcal O(-1)$ on $\mathbb P^1_k$. Step 2.1 says its image is $\mathcal O(-1)$, while step 1.2 gives $\mathcal O(-n)$. The specified infinite cyclic Picard group in [F1] therefore forces $n=1$. Full faithfulness in [F2] identifies the whole pointed stack map $q_1\kappa$ with the identity, including its action $u\mapsto u$ on automorphism units. The sign is inherited from the actual normalized projection $1-[\mathcal O(-1)]\mapsto+c_1(\mathcal O(1))$, rather than chosen through a new target identification. [F1, F2, step 2.1, step 1.2] ∎
