---
id: lem-fredholm-splitting-and-parametrix
kind: lemma
title: Fredholm splitting and parametrix
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-fredholm-operator-cokernel-and-index, def-bounded-linear-operator, def-banach-space, def-linear-subspace, def-complemented-subspace, cor-finite-dimensional-subspaces-are-complemented, cor-finite-codimensional-subspaces-are-complemented, thm-bounded-inverse-theorem, lem-closed-subspace-of-a-banach-space-is-banach, def-quotient-vector-space-coset-notation, def-linear-basis, def-dimension, lem-finite-choice, def-linear-map, def-axiom-of-choice, lem-ac-supplies-countable-and-dependent-choice-for-banach-integration, def-dependent-choice]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-22
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-22
sources:
  references:
    - title: "Gerald Teschl, Topics in Real and Functional Analysis, version November 17, 2017 — §6.5 p.186, equations (6.65)–(6.67)"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
    - title: "Theo Bühler and Dietmar Salamon, Functional Analysis — §4.3, splitting of a Fredholm operator"
      url: "https://uomustansiriyah.edu.iq/media/lectures/9/9_2021_09_21!12_02_01_AM.pdf"
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $X$ and $Y$ be Banach
spaces over the same scalar field and let $T:X\to Y$ be a Fredholm operator
([[def-fredholm-operator-cokernel-and-index]],
[[def-bounded-linear-operator]]). Then there are a closed linear subspace
$X_1\le X$ and a finite-dimensional closed linear subspace $Y_0\le Y$ with

$$X=\ker T\oplus X_1,\qquad Y=\operatorname{ran}T\oplus Y_0,$$

the coordinate projections of both decompositions being bounded
([[def-complemented-subspace]]), with $\dim Y_0=\dim\operatorname{coker}T$
([[def-dimension]]), and such that with $U:=(T|_{X_1})^{-1}:\operatorname{ran}T
\to X_1$, which is bounded, the operator

$$S:\ Y\longrightarrow X,\qquad S(y):=U(y_1)\quad\text{for }y=y_1+y_0,\ y_1\in\operatorname{ran}T,\ y_0\in Y_0,$$

is bounded and satisfies: $ST-I_X$ has finite-dimensional range of dimension at
most $\dim\ker T$, and $TS-I_Y$ has finite-dimensional range of dimension at
most $\dim Y_0$.

## Facts & Assumptions

[A1] A finite-dimensional linear subspace of a normed space is complemented, and a closed finite-codimensional linear subspace is complemented; a complemented subspace has a closed complement with bounded coordinate projections ([[cor-finite-dimensional-subspaces-are-complemented]], [[cor-finite-codimensional-subspaces-are-complemented]], [[def-complemented-subspace]], [[def-linear-subspace]]).

[A2] A closed linear subspace of a Banach space is a Banach space ([[lem-closed-subspace-of-a-banach-space-is-banach]], [[def-banach-space]]), and by the bounded inverse theorem, under DC, a bounded bijection between Banach spaces has a bounded inverse ([[thm-bounded-inverse-theorem]]); $\mathrm{AC}$ supplies DC ([[lem-ac-supplies-countable-and-dependent-choice-for-banach-integration]], [[def-dependent-choice]]).

[A3] If $q:Z\to Z/W$ is the quotient map and a linear bijection $Z_0\to Z/W$ is given, then choosing preimages of a finite basis is a finite selection ([[lem-finite-choice]], [[def-linear-basis]], [[def-quotient-vector-space-coset-notation]], [[def-linear-map]]): a linearly independent spanning list pulls back to a linearly independent spanning list, because a linear bijection preserves the vanishing of finite linear combinations in both directions.

## Proof

**Proof technique:** direct.

**Given:** $\mathrm{AC}$, Banach spaces $X,Y$ over one scalar field, a Fredholm operator $T:X\to Y$ with $N:=\ker T$ finite dimensional and $\operatorname{ran}T$ closed with finite-dimensional cokernel.

1.1 There is a closed subspace $X_1\le X$ with $X=N\oplus X_1$ and bounded projections. [A1]

1.2 There is a closed subspace $Y_0\le Y$ with $Y=\operatorname{ran}T\oplus Y_0$ and bounded projections; the quotient map $q:Y\to\operatorname{coker}T=Y/\operatorname{ran}T$ restricts to a linear bijection $q|_{Y_0}:Y_0\to\operatorname{coker}T$, which is injective because $Y_0\cap\operatorname{ran}T=\{0\}$ and surjective because $y=y_1+y_0$ gives $q(y)=q(y_0)$. [A1]

2.1 The restriction $T_1:=T|_{X_1}:X_1\to\operatorname{ran}T$ is a bounded linear bijection: it is injective because $X_1\cap\ker T=\{0\}$, and surjective because $T(X)=T(N+X_1)=T(X_1)$. [step 1.1]

2.2 The subspace $Y_0$ is finite dimensional with $\dim Y_0=\dim\operatorname{coker}T$: pulling back an ordered basis of the finite-dimensional quotient $\operatorname{coker}T$ along the bijection $q|_{Y_0}$ of [step 1.2] gives an ordered basis of $Y_0$, by the finite selection and independence argument of [A3]. [step 1.2, A3]

3.1 The spaces $X_1$ and $\operatorname{ran}T$ are Banach, so $U:=T_1^{-1}$ is bounded by [A2]. [step 2.1, A2]

4.1 The operator $S:Y\to X$ that equals $U$ on $\operatorname{ran}T$ and $0$ on $Y_0$ is $U\circ P$ for the bounded projection $P:Y\to\operatorname{ran}T$ of [step 1.2], hence bounded as a composite of bounded operators. [step 1.2, step 3.1]

4.2 For $x=n+x_1$ with $n\in N$, $x_1\in X_1$ one has $STx=S(Tx_1)=U(T_1x_1)=x_1$, so $ST$ is the bounded projection $P_{X_1}$ onto $X_1$ along $N$ and $ST-I_X=-P_N$ has range $N$, of dimension $\dim\ker T$. [step 1.1, step 3.1]

4.3 For $y=y_1+y_0$ one has $TSy=T(Uy_1)=y_1$, so $TS$ is the bounded projection $P$ onto $\operatorname{ran}T$ along $Y_0$ and $TS-I_Y$ has range $Y_0$, of dimension $\dim Y_0$. [step 1.2, step 3.1, step 2.2]

5.1 The decompositions, the boundedness of $U$ and $S$ and the two finite-rank defects are exactly the assertions, with $\dim Y_0=\dim\operatorname{coker}T$ from [step 2.2]. [step 4.1, step 4.2, step 2.2, step 4.3] ∎
