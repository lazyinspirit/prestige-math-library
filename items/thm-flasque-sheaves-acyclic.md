---
id: "thm-flasque-sheaves-acyclic"
kind: "theorem"
title: "Flasque abelian sheaves are Γ-acyclic"
status: published
origin: pipeline
deps: [def-acyclic-sheaf-global-sections, def-flasque-sheaf, lem-injective-sheaves-flasque, lem-flasque-kernel-lifts-quotient-sections, thm-long-exact-sequence-sheaf-cohomology, thm-abelian-sheaves-have-enough-injectives, def-axiom-of-choice, prop-positive-right-derived-functors-vanish-on-injective-objects, thm-zero-sheaf-cohomology-global-sections, def-sheaf-cohomology-derived-global-sections, def-injective-object, thm-choice-implies-dependent-implies-countable-choice, thm-abelian-sheaves-form-abelian-category, thm-exactness-of-sheaves-stalkwise, def-exact-sequence-sheaves, lem-sheaf-section-over-empty-set-terminal]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  audited: 2026-09-27
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
sources:
  references:
    - title: "The Stacks Project, Cohomology of Sheaves"
      url: https://stacks.math.columbia.edu/download/cohomology.pdf
---

## Statement

Assume the Axiom of Choice, let $X$ be a topological space and let
$\mathcal F$ be a flasque sheaf of abelian groups on $X$
([[def-flasque-sheaf]]). Then for every open subspace $U\subseteq X$ and every
integer $q>0$,
$$H^q(U,\mathcal F|_U)=0,$$
where $H^q(U,-)$ denotes sheaf cohomology on the space $U$
([[def-sheaf-cohomology-derived-global-sections]]) computed with the global
sections functor of $U$, and $\mathcal F|_U$ is the restriction of $\mathcal F$
to $U$. Equivalently, every restriction $\mathcal F|_U$ is $\Gamma$-acyclic
([[def-acyclic-sheaf-global-sections]]).

## Facts & Assumptions

[F1] An injective object of $\mathrm{Ab}(X)$ is flasque ([[lem-injective-sheaves-flasque]]).

[F2] If $0\to\mathcal F\to\mathcal G\to\mathcal H\to0$ is short exact and $\mathcal F$ is flasque, then $\mathcal G(V)\to\mathcal H(V)$ is surjective for every open $V$; if moreover $\mathcal G$ is flasque then so is $\mathcal H$ ([[lem-flasque-kernel-lifts-quotient-sections]]).

[F3] Every short exact sequence of abelian sheaves on a space $X$ gives a natural long exact sequence of sheaf cohomology groups on $X$ ([[thm-long-exact-sequence-sheaf-cohomology]]).

[F4] For an injective object $J$ and every $n>0$ one has $R_I^nF(J)=0$ relative to any supplied injective resolution datum $I$ ([[prop-positive-right-derived-functors-vanish-on-injective-objects]]).

[F5] Assuming AC, $\mathrm{Ab}(X)$ has enough injectives and the embeddings supply one functorial injective resolution datum on the whole category, so every abelian sheaf on $X$ carries a specific injective resolution $0\to\mathcal F\to I^0\to I^1\to\cdots$ ([[thm-abelian-sheaves-have-enough-injectives]], [[def-sheaf-cohomology-derived-global-sections]]).

[F6] In ZF the Axiom of Choice implies the Axiom of Dependent Choice ([[thm-choice-implies-dependent-implies-countable-choice]]), which is the hypothesis under which the comparison and vanishing theorems for right derived functors are stated.

[F7] $H^0(U,\mathcal E)$ is canonically isomorphic to $\Gamma(U,\mathcal E)$ for every abelian sheaf $\mathcal E$ on a space $U$ ([[thm-zero-sheaf-cohomology-global-sections]], [[def-sheaf-cohomology-derived-global-sections]]).

[F8] In the abelian category $\mathrm{Ab}(U)$ of abelian sheaves on a space $U$ a monomorphism $e:\mathcal A\rightarrowtail\mathcal I$ sits in a short exact sequence $0\to\mathcal A\to\mathcal I\to\operatorname{coker}(e)\to0$ ([[thm-abelian-sheaves-form-abelian-category]], [[def-exact-sequence-sheaves]]).

[F9] The hypothesis of the theorem is that $\mathcal F$ is flasque on $X$, that is, every restriction map $\mathcal F(W')\to\mathcal F(W)$ for open $W\subseteq W'\subseteq X$ is surjective ([[def-flasque-sheaf]]).

## Proof

**Given:** The Axiom of Choice, a topological space $X$, a flasque abelian sheaf $\mathcal F$ on $X$, and an open subspace $U\subseteq X$.

1.1 Write $\mathcal F_U:=\mathcal F|_U$ for the restriction of $\mathcal F$ to the open subspace $U$. Then $\mathcal F_U$ is flasque on $U$: for open $W\subseteq W'\subseteq U$ one has $\mathcal F_U(W)=\mathcal F(W)$ and $\mathcal F_U(W')=\mathcal F(W')$ with the same restriction map, which is surjective because $\mathcal F$ is flasque; and $\mathcal F_U$ is a sheaf of abelian groups on $U$. [F9, given]

2.1 By [F6] the Axiom of Choice gives DC, and by [F5] the category $\mathrm{Ab}(U)$ has enough injectives with a supplied functorial injective resolution datum $I_U$; apply the datum to $\mathcal F_U$ to get a specific injective resolution $0\to\mathcal F_U\xrightarrow{\ \eta\ }\mathcal I^0\xrightarrow{\ d\ }\mathcal I^1\to\cdots$ on $U$, whose cokernel we write $\mathcal Q:=\operatorname{coker}(\eta)=\mathcal I^0/\mathcal F_U$. By [F8] the sequence $0\to\mathcal F_U\to\mathcal I^0\to\mathcal Q\to0$ is short exact; by [F1] the sheaf $\mathcal I^0$ is flasque, so [F2] applies to this sequence and shows that $\mathcal I^0(W)\to\mathcal Q(W)$ is surjective for every open $W\subseteq U$, and that $\mathcal Q$ is flasque. [F1, F2, F5, F6, F8, step 1.1] [F1, F2, F5, F6, F8]

3.1 Using [F3] on the short exact sequence of step 2.1 gives an exact sequence $H^0(U,\mathcal I^0)\to H^0(U,\mathcal Q)\to H^1(U,\mathcal F_U)\to H^1(U,\mathcal I^0)$; here $H^1(U,\mathcal I^0)=0$ by [F4] applied to the injective object $\mathcal I^0$ and the datum $I_U$, and the first map is surjective because by [F7] it is, up to the canonical identification $H^0=\Gamma$, the map $\mathcal I^0(W)\to\mathcal Q(W)$ with $W=U$, which step 2.1 shows to be surjective. Hence $H^1(U,\mathcal F_U)=0$. [F3, F4, F7, step 2.1] [F3, F4, F7]

3.2 For $q\ge1$ the same long exact sequence is, around degree $q+1$, $H^q(U,\mathcal I^0)\to H^q(U,\mathcal Q)\xrightarrow{\ \partial\ }H^{q+1}(U,\mathcal F_U)\to H^{q+1}(U,\mathcal I^0)$, and both outer groups vanish by [F4] because $\mathcal I^0$ is injective [F5]. Hence for every $q\ge1$ the connecting map is an isomorphism $H^q(U,\mathcal Q)\xrightarrow{\ \sim\ }H^{q+1}(U,\mathcal F_U)$; for $q\ge1$ this is a dimension shift from the flasque quotient $\mathcal Q$ found in step 2.1. [F3, F4, F5, step 2.1] [F3, F4, F5]

4.1 I claim that $H^q(U,\mathcal E)=0$ for every $q>0$ and every flasque abelian sheaf $\mathcal E$ on $U$. The case $q=1$ is step 3.1, applied to $\mathcal E$ in place of $\mathcal F_U$ (the argument of step 2.1 and step 3.1 uses only the flasqueness of $\mathcal E$, the existence of a supplied injective resolution and the lifting property [F2]). For $q>1$ apply the same construction to $\mathcal E$: with $0\to\mathcal E\to\mathcal I^0\to\mathcal Q_\mathcal E\to0$ and $\mathcal Q_\mathcal E$ flasque, [F2], step 3.2 applied to $\mathcal E$ give $H^q(U,\mathcal E)\cong H^{q-1}(U,\mathcal Q_\mathcal E)$, and $H^{q-1}(U,\mathcal Q_\mathcal E)=0$ because $q-1\ge1$ and $\mathcal Q_\mathcal E$ is flasque, by induction on $q$. This proves the claim. [F1, F2, F3, F4, F5, F6, F7, step 2.1, step 3.1, step 3.2] [F1, F2, F3, F4, F5, F6, F7]

5.1 Applying the claim of step 4.1 to the flasque sheaf $\mathcal F_U=\mathcal F|_U$ on $U$ gives $H^q(U,\mathcal F|_U)=0$ for every $q>0$; since $U\subseteq X$ was an arbitrary open subspace, this is the statement. [step 1.1, step 4.1] ∎ [F4] ∎
