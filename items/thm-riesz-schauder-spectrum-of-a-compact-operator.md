---
id: thm-riesz-schauder-spectrum-of-a-compact-operator
kind: theorem
title: Riesz schauder spectrum of a compact operator
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-spectrum-and-resolvent-of-a-bounded-operator, def-compact-linear-operator, def-bounded-linear-operator, lem-neumann-series-and-small-perturbations-of-bounded-inverses, thm-fredholm-alternative-for-identity-minus-compact, lem-riesz-schauder-ascent-and-descent-stabilize, lem-compositions-with-a-compact-operator-are-compact, lem-linear-combinations-of-compact-operators-are-compact, thm-closed-unit-ball-compact-iff-finite-dimensional, thm-heine-borel-rn, def-complex-metric-convergence-and-continuity, thm-metric-open-set-algebra, def-metric-compactness, def-metric-ball, def-banach-space, def-axiom-of-choice, lem-ac-supplies-countable-and-dependent-choice-for-banach-integration, def-dependent-choice, thm-complete-subspace-iff-closed]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Theo Bühler and Dietmar Salamon, Functional Analysis — §5.2.3 pp.224–225, Theorem 5.21"
      url: "https://uomustansiriyah.edu.iq/media/lectures/9/9_2021_09_21!12_02_01_AM.pdf"
    - title: "Gerald Teschl, Topics in Real and Functional Analysis, version November 17, 2017 — §6.6, spectrum of a compact operator"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $X$ be a complex Banach
space, let $K:X\to X$ be a compact operator
([[def-compact-linear-operator]]) and let $\sigma(K)$ be its spectrum
([[def-spectrum-and-resolvent-of-a-bounded-operator]]). Then:

1. every $\lambda\in\sigma(K)$ with $\lambda\ne0$ is an eigenvalue of $K$ whose
   generalized eigenspace $G_\lambda(K)$ is finite dimensional, so its
   algebraic multiplicity is finite;
2. for every real $\varepsilon>0$ the set
   $\{\lambda\in\sigma(K):|\lambda|\ge\varepsilon\}$ is finite;
3. if $X$ is infinite dimensional (does not admit an ordered basis of finite
   length), then $0\in\sigma(K)$.

## Facts & Assumptions

[A1] For $\lambda\ne0$ put $A_\lambda:=I-K/\lambda$. Since $K/\lambda$ is compact, the Fredholm alternative applies to it: $A_\lambda$ is injective if and only if it is surjective, and then boundedly invertible; moreover $\lambda I-K=\lambda A_\lambda$ and, for $y\in X$, the equation $(\lambda I-K)x=y$ is solvable exactly when $\varphi(y)=0$ for every $\varphi$ in the kernel of the transpose ([[lem-linear-combinations-of-compact-operators-are-compact]], [[thm-fredholm-alternative-for-identity-minus-compact]], [[def-spectrum-and-resolvent-of-a-bounded-operator]], [[def-bounded-linear-operator]]).

[A2] For the compact operator $K/\lambda$ the stabilization lemma gives an $m$ with $\ker A_\lambda^n=\ker A_\lambda^m$ and $\operatorname{ran}A_\lambda^n =\operatorname{ran}A_\lambda^m$ for all $n\ge m$, $X=\ker A_\lambda^m\oplus \operatorname{ran}A_\lambda^m$, finite-dimensional $\ker A_\lambda^m$ and a bounded isomorphism $A_\lambda$ of $\operatorname{ran}A_\lambda^m$ onto itself ([[lem-riesz-schauder-ascent-and-descent-stabilize]], [[def-dependent-choice]]); AC supplies DC ([[lem-ac-supplies-countable-and-dependent-choice-for-banach-integration]]).

[A3] If $B\in\mathcal B(X)$ is invertible with bounded inverse and $\|(\mu-\lambda)B^{-1}\|<1$ then $B+(\mu-\lambda)I$ is invertible with bounded inverse; if $\|C\|<1$ then $I-C$ is invertible with bounded inverse ([[lem-neumann-series-and-small-perturbations-of-bounded-inverses]]); and for a nilpotent endomorphism $N$ of a vector space with $N^m=0$ the operator $I+tN$ is invertible with inverse $\sum_{j<m}(-tN)^j$ for every scalar $t$ (finite telescoping sum).

[A4] Under the identification $\mathbb C=\mathbb R^2$ the metric of $\mathbb C$ is the Euclidean metric of $\mathbb R^2$ ([[def-complex-metric-convergence-and-continuity]]); a subset of $\mathbb R^2$ is compact exactly when it is closed and bounded ([[thm-heine-borel-rn]]), and every metric open ball is open ([[def-metric-ball]], [[thm-metric-open-set-algebra]]).

[A5] If $T$ is compact and $C$ is bounded linear then $TC$ and $CT$ are compact ([[lem-compositions-with-a-compact-operator-are-compact]]); a normed space whose closed unit ball is compact admits an ordered basis of finite length ([[thm-closed-unit-ball-compact-iff-finite-dimensional]]); a closed subspace of a Banach space is Banach ([[thm-complete-subspace-iff-closed]], [[def-banach-space]]).

## Proof

**Proof technique:** direct.

**Given:** $\mathrm{AC}$, a complex Banach space $X$, a compact $K:X\to X$, and for $\lambda\ne0$ the operator $A_\lambda=I-K/\lambda$.

1.1 For $\lambda\ne0$, $\lambda\notin\sigma(K)$ if and only if $\ker(\lambda I-K)=\{0\}$: the operator $\lambda I-K$ is bijective exactly when it is injective, by the injective-iff-surjective part of [A1] applied to $A_\lambda$. [A1]

1.2 For $\lambda\ne0$ the generalized eigenspace satisfies $G_\lambda(K)=\bigcup_{n\ge1}\ker(A_\lambda^n)=\ker(A_\lambda^{m})$ for an $m$ given by [A2], hence $G_\lambda(K)$ is finite dimensional whenever it is nonzero, and it is nonzero exactly when $\lambda$ is an eigenvalue. [A1, A2]

1.3 The resolvent set $\rho(K)$ is open: if $\lambda\in\rho(K)$ and $B:=\lambda I-K$ with inverse $B^{-1}$, then for every scalar $\mu$ with $|\mu-\lambda|\,\|B^{-1}\|<1$ the operator $\mu I-K=B+(\mu-\lambda)I$ is invertible with bounded inverse by [A3], so such $\mu$ lie in $\rho(K)$. [A3]

1.4 $\sigma(K)\subseteq\{\lambda:|\lambda|\le\|K\|\}$: if $|\lambda|>\|K\|$ then $\|K/\lambda\|<1$ and $\lambda I-K=\lambda(I-K/\lambda)$ is invertible with bounded inverse by [A3], so $\lambda\in\rho(K)$. [A3]

1.5 If $X$ is infinite dimensional then $0\in\sigma(K)$: if $0\in\rho(K)$ then $-K=0I-K$ has a bounded inverse $S$, and $I=(-K)S=K(-S)$ is compact by [A5]; then the closed unit ball of $X$, the image of itself under $I$, is compact, so $X$ admits an ordered basis of finite length by [A5], a contradiction. [A5]

2.1 If $\lambda\in\sigma(K)$ and $\lambda\ne0$, then with $N:=G_\lambda(K)=\ker(A_\lambda^m)$ and $Y:=\operatorname{ran}A_\lambda^m$ from [A2] one has $X=N\oplus Y$, $A_\lambda^m$ vanishes on $N$, and $\lambda I-K$ restricted to $Y$ is invertible with bounded inverse; for every scalar $\mu\ne\lambda$ the operator $\mu I-K$ is invertible on $N$, because on $N$ it equals $(\mu-\lambda)\bigl(I+(\lambda/(\mu-\lambda))A_\lambda\bigr)$ and $A_\lambda|_N$ is nilpotent. [step 1.2, A2, A3]

2.2 Claim 1: if $\lambda\in\sigma(K)$ and $\lambda\ne0$, then $\lambda$ is an eigenvalue with finite-dimensional generalized eigenspace: by [step 1.1] the kernel $\ker(\lambda I-K)$ is nonzero, and by [step 1.2] the generalized eigenspace is finite dimensional. [step 1.1, step 1.2]

2.3 For real $\varepsilon>0$ the set $S_\varepsilon:=\{\lambda\in\sigma(K):|\lambda|\ge\varepsilon\}$ is compact in $\mathbb C$: it is bounded by [step 1.4] and closed because $\rho(K)$ is open by [step 1.3], so under $\mathbb C=\mathbb R^2$ it is a closed and bounded subset of $\mathbb R^2$, hence compact by [A4]. [step 1.3, step 1.4, A4]

3.1 If $\lambda\in\sigma(K)$ and $\lambda\ne0$, there is a real $\delta>0$ with $\mu\in\rho(K)$ for every $\mu$ with $0<|\mu-\lambda|<\delta$: choose $\delta>0$ with $\delta\,\|((\lambda I-K)|_Y)^{-1}\|<1$ for the $Y$ of [step 2.1]; then for such $\mu$ the restriction of $\mu I-K$ to $Y$ is invertible by [A3] and its restriction to $N$ is invertible by [step 2.1], and invertibility on both summands of $X=N\oplus Y$ gives invertibility on $X$. [step 2.1, A2, A3]

4.1 Claim 2: $S_\varepsilon$ is finite. Every point of $S_\varepsilon$ lies in $\sigma(K)$ and is nonzero, so by [step 3.1] each $\lambda\in S_\varepsilon$ has a ball $B(\lambda,\delta_\lambda)$ meeting $\sigma(K)$ only in $\lambda$; the sets $S_\varepsilon\cap B(\lambda,\delta_\lambda)$, $\lambda\in S_\varepsilon$, form an open cover of the compact set $S_\varepsilon$ by [step 2.3], and each member contains only the single point $\lambda$, so a finite subcover exhibits $S_\varepsilon$ as a finite set. [step 3.1, step 2.3, A4]

5.1 Claim 3 is [step 1.5], and claims 1, 2, 3 are respectively [step 2.2], [step 4.1] and [step 1.5]; the statement is proved. [step 1.5, step 2.2, step 4.1] ∎
