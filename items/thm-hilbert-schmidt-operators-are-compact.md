---
id: thm-hilbert-schmidt-operators-are-compact
kind: theorem
title: Hilbert–Schmidt operators are compact
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-hilbert-schmidt-operator, def-hilbert-space, def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis, def-square-summable-family-on-an-arbitrary-index-set, thm-hilbert-space-fourier-expansion, lem-finite-bessel-inequality, def-countable-choice, def-compact-linear-operator, def-bounded-linear-operator, def-operator-norm, def-banach-space, thm-bounded-linear-operator-equivalences, thm-closed-unit-ball-compact-iff-finite-dimensional, thm-compactness-under-continuous-maps, thm-closed-subspace-of-a-compact-space-is-compact, thm-norm-limit-of-compact-operators-is-compact, def-linear-basis, def-linear-combination-and-span, def-countable]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Gerald Teschl, Topics in Real and Functional Analysis, version November 17, 2017 — §3.6, Lemma 3.23, printed pp. 93–94"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
    - title: "John Roe, Lectures on Analysis — Lecture 13, Exercise 13.4 after Proposition 13.3, printed p. 68"
      url: "https://bpb-us-e1.wpmucdn.com/sites.psu.edu/dist/1/4020/files/2017/12/analysis-slides-278829v.pdf"
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let $H$ and
$K$ be real or complex Hilbert spaces ([[def-hilbert-space]]), let
$T\in\mathcal B(H,K)$ be a bounded linear operator
([[def-bounded-linear-operator]], [[def-operator-norm]]), let $E$ be a Hilbert
basis of $H$
([[def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis]]), and
assume that $T$ is Hilbert–Schmidt relative to $E$
([[def-hilbert-schmidt-operator]]), that is,
$s_E(T)=\sum_{e\in E}\|Te\|^2<+\infty$ in the finite-subset-supremum convention
of [[def-square-summable-family-on-an-arbitrary-index-set]]. For finite
$F\subseteq E$ let $P_Fx:=\sum_{e\in F}\langle x,e\rangle e$ be the coordinate
projection ([[lem-finite-bessel-inequality]]). Then:

1. **(finite-rank pieces)** $P_F$ is a bounded linear operator on $H$ with
   $\|P_F\|\le1$, its range lies in the finite-dimensional subspace
   $\operatorname{span}\{e:e\in F\}$, and $TP_F$ is compact
   ([[def-compact-linear-operator]]);
2. **(norm estimate)** $\|T-TP_F\|\le\bigl(\sum_{e\in E\setminus F}\|Te\|^2\bigr)^{1/2}$
   for every finite $F\subseteq E$, and the right-hand side is arbitrarily
   small for suitable finite $F$;
3. **(compactness)** $T$ is a compact operator.

## Facts & Assumptions

**Given:** Countable Choice, bounded $T:H\to K$, a Hilbert basis $E$ of $H$ with $s_E(T)<+\infty$, and finite sets $F\subseteq G\subseteq E$.

[F1] $T$ is compact exactly when $\overline{T(\overline B_H)}$ is a compact subset of $K$, where $\overline B_H=\{x\in H:\|x\|\le1\}$ ([[def-compact-linear-operator]]).

[F2] For finite $F\subseteq E$ the vector $P_Fx=\sum_{e\in F}\langle x,e\rangle e$ lies in the span of $\{e:e\in F\}$, $\|P_Fx\|^2=\sum_{e\in F}|\langle x,e\rangle|^2$, the residual $x-P_Fx$ is orthogonal to every $e\in F$, and $\|x-P_Fx\|^2=\|x\|^2-\sum_{e\in F}|\langle x,e\rangle|^2\le\|x\|^2$ ([[lem-finite-bessel-inequality]]).

[F3] The finite-subset net $(P_Gx)$ over the finite subsets $G\subseteq E$, directed by inclusion, converges to $x$ for every $x\in H$ ([[thm-hilbert-space-fourier-expansion]], [[def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis]]).

[F4] Since $s_E(T)<+\infty$, for every real $\varepsilon>0$ there is a finite $F\subseteq E$ with $\sum_{e\in E\setminus F}\|Te\|^2<\varepsilon$; for finite $F\subseteq G$ the finite subsum over $G\setminus F$ is at most the sum over $E\setminus F$ ([[def-square-summable-family-on-an-arbitrary-index-set]]).

[F5] A finite set $F$ satisfies $F\approx n$ for some $n\in\mathbb N$ ([[def-countable]]); an orthonormal family is linearly independent, so the image of any enumeration of $F$ is a basis of $\operatorname{span}\{e:e\in F\}$; a normed space that admits an ordered basis of finite length has compact closed unit ball ([[def-linear-basis]], [[def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis]], [[def-linear-combination-and-span]], [[thm-closed-unit-ball-compact-iff-finite-dimensional]]).

[F6] A continuous image of a compact set is compact, and a closed subset of a compact metric space is compact ([[thm-compactness-under-continuous-maps]], [[thm-closed-subspace-of-a-compact-space-is-compact]]).

[F7] A bounded linear operator is continuous, so its restriction to any normed subspace is continuous, and every $TP_F$ is bounded and linear ([[thm-bounded-linear-operator-equivalences]], [[def-bounded-linear-operator]], [[def-operator-norm]]).

[F8] A Hilbert space is a Banach space ([[def-hilbert-space]], [[def-banach-space]]), and under Countable Choice a norm limit of compact operators into a Banach space is compact ([[thm-norm-limit-of-compact-operators-is-compact]]).

[F9] Countable Choice allows one witness to be selected from each of countably many nonempty sets ([[def-countable-choice]]).

## Proof

**Proof technique:** direct.

**Given:** Countable Choice, bounded $T:H\to K$, a Hilbert basis $E$ of $H$ with $s_E(T)<+\infty$, and a finite $F\subseteq E$.

1.1 For every $x\in H$, [F2] gives $\|P_Fx\|^2=\sum_{e\in F}|\langle x,e\rangle|^2\le\|x\|^2$ and $P_Fx\in\operatorname{span}\{e:e\in F\}$; thus $P_F$ is linear by construction, bounded with $\|P_F\|\le1$, and its range lies in $\operatorname{span}\{e:e\in F\}$. [F2, algebra]

1.2 Since $F$ is finite, [F5] fixes $n\in\mathbb N$ and a bijection $\sigma$ from $n$ onto $F$; the list $e_{\sigma(0)},\dots,e_{\sigma(n-1)}$ is injective because the family is orthonormal, and its image spans $Z:=\operatorname{span}\{e:e\in F\}$, so it is an ordered basis of $Z$ of finite length; therefore $\overline B_Z$ is compact by [F5]. [F5]

2.1 The set $P_F(\overline B_H)$ is contained in $\overline B_Z$ by [step 1.1], since $\|P_Fx\|\le\|x\|\le1$ and $P_Fx\in Z$; the restriction of $T$ to $Z$ is continuous by [F7], so $T(\overline B_Z)$ is compact by [step 1.2] and [F6]; as $TP_F(\overline B_H)=T(P_F(\overline B_H))\subseteq T(\overline B_Z)$, its closure is a closed subset of the compact set $T(\overline B_Z)$, hence compact by [F6], and $TP_F$ is compact by [F1]. [step 1.1, step 1.2, F1, F6, F7]

2.2 For finite $F\subseteq G\subseteq E$ and $x\in H$ we have $P_FP_Gx=P_Fx$, because $\langle P_Gx,e\rangle=\langle x,e\rangle$ for $e\in G$; hence $(I-P_F)P_Gx=P_Gx-P_Fx=\sum_{e\in G\setminus F}\langle x,e\rangle e$ and, by linearity of $T$, $T(I-P_F)P_Gx=\sum_{e\in G\setminus F}\langle x,e\rangle Te$; the triangle inequality and the finite Cauchy–Schwarz inequality give $\|T(I-P_F)P_Gx\|\le\bigl(\sum_{e\in G\setminus F}|\langle x,e\rangle|^2\bigr)^{1/2}\bigl(\sum_{e\in G\setminus F}\|Te\|^2\bigr)^{1/2}\le\|x\|\bigl(\sum_{e\in E\setminus F}\|Te\|^2\bigr)^{1/2}$, where the last step uses [F2] for the coefficient factor and [F4] for the tail factor. [step 1.1, F2, F4, algebra]

3.1 As $G$ runs over the finite subsets of $E$ containing $F$, the net $(I-P_F)P_Gx=(P_Gx-P_Fx)$ converges to $(I-P_F)x$, by [F3] and the boundedness of $P_F$ from [step 1.1]; the continuous operator $T$ of [F7] therefore carries this net to a net converging to $T(I-P_F)x=(T-TP_F)x$, while [step 2.2] bounds every term of that net by $\|x\|\bigl(\sum_{e\in E\setminus F}\|Te\|^2\bigr)^{1/2}$; the norm being continuous, the limit obeys the same bound, and taking the supremum over $\|x\|\le1$ gives $\|T-TP_F\|\le\bigl(\sum_{e\in E\setminus F}\|Te\|^2\bigr)^{1/2}$. [step 1.1, step 2.2, F3, F7, algebra]

4.1 Given a real $\varepsilon>0$, [F4] provides a finite $F\subseteq E$ with $\sum_{e\in E\setminus F}\|Te\|^2<\varepsilon^2$; then $\|T-TP_F\|<\varepsilon$ by [step 3.1], and $TP_F$ is compact by [step 2.1], so for every positive tolerance there is a compact operator $TP_F$ within that tolerance of $T$. [step 2.1, step 3.1, F4]

4.2 By [F9] applied to the countably many nonempty sets of finite $F\subseteq E$ satisfying $\sum_{e\in E\setminus F}\|Te\|^2<(n+1)^{-2}$ for $n\in\mathbb N$ — each nonempty by [F4] — there is a sequence $(F_n)$ of finite subsets of $E$ with these tails; then $\|T-TP_{F_n}\|\le(n+1)^{-1}\to0$ by [step 3.1], and each $TP_{F_n}$ is compact by [step 2.1]. [step 2.1, step 3.1, F4, F9, choose]

5.1 The target $K$ is a Banach space by [F8], so the norm limit $T$ of the compact operators $TP_{F_n}$ is compact by [F8]; this proves claim 3, while claims 1 and 2 are [step 1.1] with [step 2.1] and [step 3.1] with [step 4.1]. [step 2.1, step 3.1, step 4.2, F8] ∎
