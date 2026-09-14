---
id: lem-conditional-independence-splicing-over-a-standard-borel-variable
kind: lemma
title: "Conditional-independence splice lemma"
status: draft
origin: pipeline
deps: [def-axiom-of-choice, lem-conditional-independence-equivalences-and-preservation, thm-existence-of-regular-conditional-distributions-for-standard-borel-targets, lem-regular-conditional-kernels-factor-through-a-standard-borel-conditioning-variable, thm-measurability-of-integration-against-a-kernel, thm-sections-of-product-measurable-functions-are-measurable, thm-monotone-convergence-for-the-integral, thm-dynkin-pi-lambda]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Aldous-Chewi probability notes, Lecture 9"
      url: "https://www.stat.berkeley.edu/~aldous/205B/chewi_notes.pdf"
      locator: "Lemma 9.2 and proof, printed pp. 35-36"
---

## Statement

Assume Choice. Let $\mu_{12}$ on $S_1\times S_2$ and $\mu_{23}$ on
$S_2\times S_3$ be probability measures with the same $S_2$ marginal, where
all three spaces are standard Borel. There is a unique probability measure
$\mu$ on $S_1\times S_2\times S_3$ whose $(1,2)$ and $(2,3)$ marginals are
$\mu_{12}$ and $\mu_{23}$ and under which the first and third coordinates are
conditionally independent given the second.

## Facts & Assumptions

**Given:** Choice, the three standard-Borel spaces and the compatible laws in the statement. Denote their common $S_2$ marginal by $\mu_2$.

[F1] A regular conditional distribution exists for a standard-Borel target. ([[thm-existence-of-regular-conditional-distributions-for-standard-borel-targets]])

[F2] Such a conditional kernel given a standard-Borel random element factors through that element as an everywhere probability kernel. ([[lem-regular-conditional-kernels-factor-through-a-standard-borel-conditioning-variable]])

[F3] Integrating a nonnegative product-measurable function against a finite kernel produces a measurable function of the source variable. ([[thm-measurability-of-integration-against-a-kernel]])

[F4] Monotone convergence applies to nonnegative measurable integrands. ([[thm-monotone-convergence-for-the-integral]])

[F5] Conditional independence is equivalent to invariance of the conditional law of one side when the other side is adjoined to the conditioning sigma-algebra. ([[lem-conditional-independence-equivalences-and-preservation]])

[F6] Equality of two probability measures on a generating pi-system extends to the generated sigma-algebra. ([[thm-dynkin-pi-lambda]])

[F7] Sections of product-measurable functions, in particular indicators of product-measurable sets, are measurable. ([[thm-sections-of-product-measurable-functions-are-measurable]])

## Proof

1.1 Apply [F1] to the coordinate pair on [F1, F2] $(S_2\times S_3,\mu_{23})$ and then [F2]. This gives a probability kernel $Q:S_2\to S_3$ such that, for $A_2,A_3$ measurable, $$ \mu_{23}(A_2\times A_3) =\int_{A_2}Q(s_2,A_3)\,\mu_2(ds_2). $$ Choice is used precisely by [F1]--[F2] to select and factor the conditional law. [F1, F2]

2.1 Lift $Q$ to the kernel [F3, F4, F7, step 1.1] $\widetilde Q((s_1,s_2),\cdot)=Q(s_2,\cdot)$ and, for a measurable $C\subseteq S_1\times S_2\times S_3$, set $$ \mu(C)=\int_{S_1\times S_2} Q(s_2,C_{(s_1,s_2)})\,\mu_{12}(d(s_1,s_2)). $$ Each section $C_{(s_1,s_2)}$ is measurable by [F7], and the integrand is measurable by [F3], applied to $1_C$ and $\widetilde Q$. For disjoint $C_j$, their sections are disjoint and [F4] passes the increasing partial sums through the outer integral. Thus $\mu$ is countably additive; $\mu(\varnothing)=0$ and $\mu(S_1\times S_2\times S_3)=1$. Hence it is a probability measure, including when one of the displayed test sets below is empty. [F3, F4, F7, step 1.1]

3.1 Taking $C=A_1\times A_2\times S_3$ in step 2.1 gives [F6, step 1.1, step 2.1] $\mu(C)=\mu_{12}(A_1\times A_2)$. Taking $C=S_1\times A_2\times A_3$ and using step 1.1 gives $\mu(C)=\mu_{23}(A_2\times A_3)$. The rectangle pi-systems and [F6] therefore identify both required marginals on their full product sigma-algebras. [F6, step 1.1, step 2.1]

4.1 For bounded measurable $g:S_3\to\mathbb R$, write [F3, F5, step 1.1, step 2.1, step 3.1] $Qg(s_2)=\int g(s_3)Q(s_2,ds_3)$. The construction in step 2.1, first for indicators, then for simple functions, and then for positive and negative parts, shows $$ \mathbb E_\mu[g(S_3)\mid\sigma(S_1,S_2)]=Qg(S_2). $$ The $(2,3)$ marginal and step 1.1 likewise show $\mathbb E_\mu[g(S_3)\mid\sigma(S_2)]=Qg(S_2)$. Criterion [F5] now gives $S_1\perp\!\!\!\perp S_3\mid S_2$. [F3, F5, step 1.1, step 2.1, step 3.1]

5.1 Let $\nu$ be any other law with the two marginals and the stated [F5, F6, step 2.1, step 3.1] conditional independence. Its $(2,3)$ marginal makes $Qg(S_2)$ a conditional expectation of $g(S_3)$ given $S_2$; [F5] then makes it the conditional expectation given $(S_1,S_2)$. Consequently, for every measurable rectangle, $$ \nu(A_1\times A_2\times A_3) =\int 1_{A_1}(s_1)1_{A_2}(s_2)Q(s_2,A_3)\,d\mu_{12}, $$ which equals the value of $\mu$ from step 2.1. Rectangles form a pi-system containing the whole space, so [F6] gives $\nu=\mu$. [F5, F6, step 2.1, step 3.1] ∎
