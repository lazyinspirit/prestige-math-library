---
id: thm-fredholm-index-is-locally-constant
kind: theorem
title: Fredholm index is locally constant
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-fredholm-operator-cokernel-and-index, def-compact-linear-operator, def-bounded-linear-operator, def-banach-space, def-operator-norm, lem-fredholm-splitting-and-parametrix, lem-neumann-series-and-small-perturbations-of-bounded-inverses, thm-fredholm-index-is-additive, thm-rank-nullity, def-dimension, def-linear-basis, def-linear-subspace, def-quotient-vector-space-coset-notation, cor-linear-maps-with-finite-dimensional-domain-are-bounded, def-axiom-of-choice, lem-ac-supplies-countable-and-dependent-choice-for-banach-integration, def-dependent-choice, def-metric-ball]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Gerald Teschl, Topics in Real and Functional Analysis, version November 17, 2017 — §6.5 pp.186–187, Theorem 6.26"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
    - title: "Theo Bühler and Dietmar Salamon, Functional Analysis — §4.4 pp.196–198, Theorem 4.41(ii)"
      url: "https://uomustansiriyah.edu.iq/media/lectures/9/9_2021_09_21!12_02_01_AM.pdf"
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $X$ and $Y$ be Banach
spaces over the same scalar field. Then the Fredholm operators $X\to Y$
([[def-fredholm-operator-cokernel-and-index]]) form an open subset of the space
$\mathcal B(X,Y)$ of bounded linear operators with the operator norm
([[def-bounded-linear-operator]], [[def-operator-norm]]): for every Fredholm $T$
there is a real $\delta>0$ such that every bounded $A:X\to Y$ with
$\|A-T\|<\delta$ is Fredholm, and then
$\operatorname{ind}A=\operatorname{ind}T$.

## Facts & Assumptions

[A1] A Fredholm $T$ admits bounded projections splitting $X=\ker T\oplus X_1$ and $Y=\operatorname{ran}T\oplus Y_0$, with $N:=\ker T$ and $Y_0$ finite dimensional, $\dim Y_0=\dim\operatorname{coker}T$, and with $T_1:=T|_{X_1}:X_1\to\operatorname{ran}T$ a bounded isomorphism whose inverse $T_1^{-1}$ is bounded ([[lem-fredholm-splitting-and-parametrix]]).

[A2] Neumann: if $\|T_1^{-1}\|\,\|C\|<1$ then $T_1+C$ is invertible with bounded inverse ([[lem-neumann-series-and-small-perturbations-of-bounded-inverses]], [[def-operator-norm]]).

[A3] Fredholm operators are closed under composition between Banach spaces and the index is additive, $\operatorname{ind}(UT)=\operatorname{ind}U+\operatorname{ind}T$ ([[thm-fredholm-index-is-additive]], [[def-fredholm-operator-cokernel-and-index]]); an invertible bounded operator is Fredholm with index $0$, its kernel and cokernel being $\{0\}$.

[A4] A linear map defined on a finite-dimensional normed space is bounded ([[cor-linear-maps-with-finite-dimensional-domain-are-bounded]]); rank-nullity ([[thm-rank-nullity]], [[def-dimension]]); and for a block-diagonal operator $\operatorname{diag}(A_{11},S)$ on $\operatorname{ran}T\oplus Y_0$ the kernel is $\ker A_{11}\oplus\ker S$ and the cokernel is isomorphic to $\operatorname{coker}A_{11}\oplus\operatorname{coker}S$ ([[def-quotient-vector-space-coset-notation]], [[def-linear-subspace]]).

## Proof

**Proof technique:** direct.

**Given:** $\mathrm{AC}$, Banach spaces $X,Y$ over one scalar field, a Fredholm $T:X\to Y$, and the splitting $X=N\oplus X_1$, $Y=\operatorname{ran}T\oplus Y_0$ of [A1].

1.1 The projections $P_N$, $P_{X_1}$, $P_{\operatorname{ran}T}$, $P_{Y_0}$ of the two splittings are bounded; write $\kappa:=\max(1,\|P_{\operatorname{ran}T}\|,\|P_{Y_0}\|)$. [A1]

1.2 If $X_1=\{0\}$, then $\operatorname{ran}T=\{0\}$, so $X=N$ and $Y=Y_0$ are finite dimensional, $T=0$, and for every bounded $A:X\to Y$ rank-nullity gives $\operatorname{ind}A=\dim\ker A-\dim\operatorname{coker}A=\dim X-\dim Y=\operatorname{ind}T$; so the claim holds with any $\delta>0$ in this case. [A1, A4]

2.1 Assume $X_1\ne\{0\}$, so $\operatorname{ran}T\ne\{0\}$ and $\|T_1^{-1}\|>0$, and put $\delta:=1/(2\kappa\|T_1^{-1}\|)>0$. For every bounded $A$ with $\|A-T\|<\delta$, writing $A_{11}=P_{\operatorname{ran}T}A|_{X_1}$ and $T_{11}=T_1$ one has $\|A_{11}-T_1\|\le\kappa\|A-T\|$, so $\|T_1^{-1}(A_{11}-T_1)\|<1/2<1$ and $A_{11}=T_1\bigl(I+T_1^{-1}(A_{11}-T_1)\bigr)$ is invertible with bounded inverse by [A2]. [step 1.1, A1, A2, algebra]

3.1 Under the hypothesis of [step 2.1], reorder the domain splitting as $X=X_1\oplus N$ and keep the codomain splitting $Y=\operatorname{ran}T\oplus Y_0$. Let $U:Y\to Y$ and $V:X\to X$ be the bounded operators whose block matrices in these stated orders are $U=\begin{pmatrix}I_{\operatorname{ran}T}&0\\-A_{21}A_{11}^{-1}&I_{Y_0}\end{pmatrix}$ and $V=\begin{pmatrix}I_{X_1}&-A_{11}^{-1}A_{12}\\0&I_N\end{pmatrix}$, where $A_{12}=P_{\operatorname{ran}T}A|_N$, $A_{21}=P_{Y_0}A|_{X_1}$ and $A_{22}=P_{Y_0}A|_N$; then $UAV=\operatorname{diag}(A_{11},S)$ with $S:=A_{22}-A_{21}A_{11}^{-1}A_{12}$, and $U,V$ are invertible with bounded inverses given by the same matrices with the off-diagonal signs reversed. [step 1.1, step 2.1, A1, algebra]

4.1 Under the hypothesis of [step 2.1], $UAV=\operatorname{diag}(A_{11},S)$ is Fredholm with index $\operatorname{ind}(UAV)=\operatorname{ind}A_{11}+\operatorname{ind}S=\operatorname{ind}S$, because $A_{11}$ is an isomorphism of $X_1$ onto $\operatorname{ran}T$ and $S$ maps the finite-dimensional space $N$ boundedly into the finite-dimensional space $Y_0$; by [A4] its index is $\operatorname{ind}S=\dim\ker S-\dim\operatorname{coker}S=\dim\ker S+\dim\operatorname{im}S-\dim Y_0=\dim N-\dim Y_0$. [step 3.1, A4]

5.1 Under the hypothesis of [step 2.1], $A$ is Fredholm with $\operatorname{ind}A=\dim N-\dim Y_0=\operatorname{ind}T$: since $U,V$ and their inverses are invertible hence Fredholm of index $0$, [A3] gives first that $A=U^{-1}(UAV)V^{-1}$ is Fredholm, and then $\operatorname{ind}A=\operatorname{ind}(U^{-1})+\operatorname{ind}(UAV)+\operatorname{ind}(V^{-1})=\operatorname{ind}(UAV)$. [step 3.1, step 4.1, A3]

6.1 In the case of [step 1.2] and in the case of [step 5.1] every bounded $A$ with $\|A-T\|$ below the corresponding $\delta$ (any positive number in the first case, the $\delta$ of [step 2.1] in the second) is Fredholm of index $\operatorname{ind}T$, so the Fredholm operators are open in $\mathcal B(X,Y)$ and the index is locally constant at $T$. [step 1.2, step 5.1] ∎
