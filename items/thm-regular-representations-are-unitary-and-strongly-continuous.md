---
id: thm-regular-representations-are-unitary-and-strongly-continuous
kind: theorem
title: "The regular representations are unitary, strongly continuous, and the left one is faithful"
status: published
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-left-and-right-regular-unitary-representations, lem-haar-translations-are-strongly-continuous-on-lp-one-and-two, thm-the-modular-function-is-a-continuous-homomorphism, lem-haar-measure-is-positive-on-nonempty-open-sets-and-finite-on-compact-sets, def-complex-haar-lp-spaces-and-compactly-supported-functions, def-hilbert-space, def-compact-support-c-c-and-c-zero-on-an-lch-space, lem-lch-urysohn-cutoff-for-a-compact-set-inside-an-open-set, def-dependent-choice, def-axiom-of-choice, lem-complex-haar-l1-and-l2-are-complete-and-cc-dense, def-continuous-and-unitary-representation-of-a-compact-lie-group]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Bekka, de la Harpe and Valette, Kazhdan’s Property (T), Appendix A §§A.3–A.4"
      url: "https://perso.univ-rennes1.fr/bachir.bekka/KazhdanTotal.pdf"
      locator: "Appendix A §§A.3–A.4, printed pp. 316–323"
    - title: "Emmanuel Kowalski, Representation Theory of Groups, §§5.2–5.3"
      url: "https://people.math.ethz.ch/~kowalski/representation-theory.pdf"
      locator: "§§5.2–5.3 and Lemma 5.5.2, printed pp. 212–230, 238–239"
verification:
  audited: 2026-09-27
  precheck: pass
---

## Statement

Assume AC. Let $G$ be an LCH group with a fixed left Haar measure $\mu$, and let
$\lambda,\rho$ be the left and right regular representations on $L^2(G)$
([[def-left-and-right-regular-unitary-representations]]). Then $\lambda$ and
$\rho$ are strongly continuous unitary representations of $G$ on the Hilbert
space $L^2(G)$, and $\lambda$ is faithful: $\lambda(g)=\mathrm{id}$ implies
$g=e$.

## Facts & Assumptions

**Given:** An LCH group $G$ with fixed left Haar measure $\mu$, its modular function $\Delta_G$, the Hilbert space $L^2(G)$, the maps $\lambda,\rho$, and AC.

[F1] $\lambda(g)\xi(x)=\xi(g^{-1}x)$ and $\rho(g)\xi(x)=\Delta_G(g)^{1/2}\xi(xg)$ define complex-linear isometries of $L^2(G)$, with $\lambda(g)^{-1}=\lambda(g^{-1})$, $\rho(g)^{-1}=\rho(g^{-1})$, and group laws $\lambda(gh)=\lambda(g)\lambda(h)$, $\rho(gh)=\rho(g)\rho(h)$ ([[def-left-and-right-regular-unitary-representations]]).

[F2] Strong continuity: for $\xi\in L^2(G)$ and $\epsilon>0$ there is a neighbourhood $V$ of $e$ with $\|\lambda(g)\xi-\xi\|_2<\epsilon$ and $\|\rho(g)\xi-\xi\|_2<\epsilon$ for all $g\in V$; and at every point $g_0$ of $G$ ([[lem-haar-translations-are-strongly-continuous-on-lp-one-and-two]]).

[F3] $L^2(G)$ is a Hilbert space with inner product $\langle\xi,\eta\rangle=\int_G\xi\overline{\eta}\,d\mu$, whose induced norm is $\|\cdot\|_2$, and $C_c(G)=C_c(G;\mathbb C)$ is dense in it ([[def-hilbert-space]], [[def-complex-haar-lp-spaces-and-compactly-supported-functions]], [[lem-complex-haar-l1-and-l2-are-complete-and-cc-dense]], [[def-compact-support-c-c-and-c-zero-on-an-lch-space]]).

[F4] In the terminology of the cited definition a representation is unitary when it takes values in the group of unitary operators, and strongly continuous when $g\mapsto\pi(g)\xi$ is continuous for every $\xi$ ([[def-continuous-and-unitary-representation-of-a-compact-lie-group]]).

[F5] If $h\in L^2(G)$ vanishes a.e. then $h=0$: the set where a continuous representative is nonzero is open and thus has positive measure when nonempty, and a class vanishing a.e. has the zero class as its only continuous representative ([[lem-haar-measure-is-positive-on-nonempty-open-sets-and-finite-on-compact-sets]]).

[F6] Under Dependent Choice, if $K$ is compact and contained in an open $U$, there is $f\in C_c(G)$ with $\mathbf 1_K\le f\le\mathbf 1_U$; AC implies Dependent Choice. Taking $K=\{e\}$ gives a nonzero $f$ which vanishes off $U$ ([[lem-lch-urysohn-cutoff-for-a-compact-set-inside-an-open-set]], [[def-dependent-choice]]).

[A1] AC is assumed, in the choice-function form of the cited definition; it is used in step 2.2 through the cutoff function of [F6] ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

1.1 The group laws already hold by [F1]: $\lambda(gh)=\lambda(g)\lambda(h)$, $\rho(gh)=\rho(g)\rho(h)$ and $\lambda(e)=\rho(e)=\mathrm{id}$, and the inverses are $\lambda(g^{-1})$, $\rho(g^{-1})$. [F1]

1.2 Each $\lambda(g)$ and $\rho(g)$ is a bijective complex-linear isometry of $L^2(G)$: it is complex-linear and isometric by [F1], and surjective because the displayed inverse is a two-sided inverse. In the Hilbert-space setting this makes each of them a unitary operator, in the sense recalled in [F4] and in the definition [F1]. [F1, F4]

1.3 Strong continuity. By [F2] the maps $g\mapsto\lambda(g)\xi$ and $g\mapsto\rho(g)\xi$ are continuous at $e$ for every $\xi\in L^2(G)$; continuity at an arbitrary $g_0\in G$ follows because $\|\lambda(g)\xi-\lambda(g_0)\xi\|_2=\|\lambda(g_0^{-1}g)\xi-\xi\|_2\to0$ as $g\to g_0$ and likewise for $\rho$, using the group laws and isometry of [F1]. Hence $\lambda$ and $\rho$ are strongly continuous in the sense of [F4]. [F1, F2, F4]

2.1 Unitarity of the two homomorphisms. By steps 1.1 and 1.2, $\lambda$ and $\rho$ are group homomorphisms $G\to U(L^2(G))$; by step 1.3 they are strongly continuous. Thus both are strongly continuous unitary representations of $G$ on the Hilbert space $L^2(G)$. [F4, step 1.1, step 1.2, step 1.3]

2.2 Faithfulness of $\lambda$. Suppose $g\ne e$ and $\lambda(g)=\mathrm{id}$. Since $G$ is Hausdorff, choose an open neighbourhood $W$ of $e$ with $g\notin W$. The map $q(x,y)=xy^{-1}$ is continuous and $q(e,e)=e$, so there are open neighbourhoods $V_1,V_2$ of $e$ with $V_1V_2^{-1}\subseteq W$; their intersection $V_0=V_1\cap V_2$ satisfies $V_0V_0^{-1}\subseteq W$. By local compactness choose a compact neighbourhood $C$ of $e$ and an open neighbourhood $O$ with $e\in O\subseteq C$. The set $C$ is closed because $G$ is Hausdorff, so $U:=V_0\cap O$ is an open neighbourhood of $e$ with compact closure contained in $C$. Since $UU^{-1}\subseteq W$ and $g\notin W$, one has $U\cap gU=\varnothing$. By [F6], under the Dependent Choice derived from [A1], choose $f\in C_c(G)$ with $\mathbf 1_{\{e\}}\le f\le\mathbf 1_U$. Then $f(e)\ge1$, $f$ vanishes off $U$, and $f\in L^2(G)$ by [F3]. The class $\lambda(g)f-f$ is zero since $\lambda(g)=\mathrm{id}$. But $\{x:f(x)>0\}$ is a nonempty open set; for each such $x$ we have $x\in U$ and $x\notin gU$, so $g^{-1}x\notin U$ and $(\lambda(g)f)(x)=f(g^{-1}x)=0$. Thus $\lambda(g)f-f=-f$ on this nonempty open set, so it is not the zero class by [F5], a contradiction. Hence $\lambda$ is faithful. [A1, F3, F5, F6, step 1.1]

3.1 Combining the steps: $\lambda$ and $\rho$ are strongly continuous unitary representations by step 2.1, and $\lambda$ is faithful by step 2.2. ∎ [step 2.1, step 2.2]

## Remarks

- **Why the left representation is the faithful one.** Both $\lambda$ and $\rho$ are faithful as well whenever $G$ is such that $\rho(g)=\mathrm{id}$ forces $g=e$; the statement records faithfulness only for $\lambda$, because that is the case the proof above establishes directly using left translates.
- **Choice cost.** [A1] is used only in step 2.2, for the cutoff function supported in a neighbourhood disjoint from its translate; the unitarity and strong continuity statements use only the fixed measure and its modular function.
