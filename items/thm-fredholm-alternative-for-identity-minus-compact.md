---
id: thm-fredholm-alternative-for-identity-minus-compact
kind: theorem
title: Fredholm alternative for identity minus compact
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-compact-linear-operator, def-bounded-linear-operator, def-banach-space, lem-riesz-schauder-ascent-and-descent-stabilize, lem-range-of-identity-minus-compact-is-closed, lem-elementary-kernel-range-annihilator-identities, lem-transpose-reverses-composition, def-transpose-of-a-bounded-operator, thm-rank-nullity, thm-first-isomorphism-theorem-for-vector-spaces, def-dimension, def-linear-subspace, thm-bounded-inverse-theorem, def-dependent-choice, def-axiom-of-choice, lem-ac-supplies-countable-and-dependent-choice-for-banach-integration, def-quotient-vector-space-coset-notation]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Gerald Teschl, Topics in Real and Functional Analysis, version November 17, 2017 — §6.5 p.189, Theorem 6.30"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
    - title: "Theo Bühler and Dietmar Salamon, Functional Analysis — §4.4 p.198, Remark 4.42"
      url: "https://uomustansiriyah.edu.iq/media/lectures/9/9_2021_09_21!12_02_01_AM.pdf"
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $X$ be a Banach space
over $\mathbb R$ or $\mathbb C$, let $K:X\to X$ be a compact operator
([[def-compact-linear-operator]]) and put $A:=I-K$. Then:

1. $A$ is injective if and only if it is surjective, and in that case $A$ is
   boundedly invertible;
2. for every $y\in X$ the equation $Ax=y$ has a solution if and only if
   $\varphi(y)=0$ for every $\varphi\in\ker A^*$, the transpose
   $A^*=I-K^*$ acting on $X^*$
   ([[def-transpose-of-a-bounded-operator]]);
3. $\ker A$ and the cokernel $X/\operatorname{ran}A$
   ([[def-quotient-vector-space-coset-notation]]) are finite dimensional with
   equal dimensions ([[def-dimension]]).

## Facts & Assumptions

[A1] Under DC there is $m_0$ from which the kernel and range chains stabilize; since every larger exponent has the same properties, take $m\ge\max\{m_0,1\}$. Then $\ker A^m=\ker A^n$ and $\operatorname{ran}A^m=\operatorname{ran}A^n$ for all $n\ge m$, and with $N:=\ker A^m$, $Y:=\operatorname{ran}A^m$ one has $X=N\oplus Y$, $N$ finite dimensional, $Y$ closed, $A(Y)=Y$ and $A|_Y$ a bounded isomorphism ([[lem-riesz-schauder-ascent-and-descent-stabilize]], [[def-dependent-choice]]); $\mathrm{AC}$ supplies DC ([[lem-ac-supplies-countable-and-dependent-choice-for-banach-integration]]).

[A2] $A^*=I-K^*$: the transpose of the identity is the identity and the transpose is additive ([[lem-transpose-reverses-composition]], [[def-transpose-of-a-bounded-operator]]); under DC the range of $I-K$ is closed ([[lem-range-of-identity-minus-compact-is-closed]]). For a bounded linear $T$ with closed range one has $(\operatorname{ran}T)^\perp=\ker T^*$ and $\overline{\operatorname{ran}T}={}^\perp(\ker T^*)$ ([[lem-elementary-kernel-range-annihilator-identities]]).

[A3] A bounded bijection between Banach spaces has a bounded inverse ([[thm-bounded-inverse-theorem]], [[def-banach-space]]). For a linear map $T:V\to W$ with $V$ finite dimensional, $\dim V=\dim\ker T+\dim\operatorname{ran}T$ ([[thm-rank-nullity]], [[def-dimension]]); for a linear subspace $U\le V$ the quotient $V/U$ is a vector space and a surjective linear map induces a linear isomorphism $V/\ker T\cong\operatorname{ran}T$ ([[thm-first-isomorphism-theorem-for-vector-spaces]], [[def-quotient-vector-space-coset-notation]], [[def-linear-subspace]]).

## Proof

**Proof technique:** direct.

**Given:** $\mathrm{AC}$, a Banach space $X$ over $\mathbb R$ or $\mathbb C$, a compact $K:X\to X$, $A=I-K$; and $m$, $N=\ker A^m$, $Y=\operatorname{ran}A^m$ as in [A1].

1.1 $N$ is finite dimensional, $Y$ is closed, $A|_Y$ is a bounded isomorphism of $Y$ onto $Y$, and $X=N\oplus Y$. [A1]

2.1 $\ker A\subseteq N$ and $\ker A=\ker(A|_N)$: if $Ax=0$ then $A^mx=0$, so $x\in N$; conversely $x\in N$ with $Ax=0$ means $x\in\ker A$. [step 1.1]

2.2 $\operatorname{ran}A=A(N)+Y$: because $A$ is linear, $X=N+Y$ and $A(Y)=Y$. [step 1.1]

2.3 $A(N)\ne N$ whenever $N\ne\{0\}$: $A^m$ vanishes on $N$, and if $A(N)=N$ then $A|_N$ is a surjective linear endomorphism of the finite-dimensional space $N$, hence also injective, so $A^m|_N=A|_N^{\,m}$ would be injective while $A^m|_N=0$ and $N\ne\{0\}$, a contradiction. [step 1.1, A3]

3.1 $A^*=I-K^*$, and $\operatorname{ran}A$ is closed by [A2], so $(\operatorname{ran}A)^\perp=\ker A^*$ and $\overline{\operatorname{ran}A}={}^\perp(\ker A^*)$ with the closure equal to $\operatorname{ran}A$ itself. [step 2.2, A2]

3.2 The inclusion $N\hookrightarrow X$ induces a linear isomorphism $N/A(N)\cong X/\operatorname{ran}A$: the map $\varphi(n)=n+\operatorname{ran}A$ has kernel $N\cap\operatorname{ran}A=N\cap(A(N)+Y)=A(N)+(N\cap Y)=A(N)$, and it is surjective because every coset $x+\operatorname{ran}A$ with $x=n+y$ equals $n+\operatorname{ran}A$. [step 1.1, step 2.2, A3]

3.3 The following are equivalent: $A$ injective, $\ker A=\{0\}$, $N=\{0\}$, $A$ surjective. Indeed $\ker A=\{0\}$ is $A$ injective; $N=\{0\}$ gives $\ker A=\{0\}$ by [step 2.1], and conversely $N\ne\{0\}$ makes $A|_N$ non-injective by [step 2.3], so $\ker A\ne\{0\}$; finally $N=\{0\}$ gives $X=Y=\operatorname{ran}A$ so $A$ is surjective, while if $N\ne\{0\}$ and $A$ is surjective then $N=N\cap\operatorname{ran}A=A(N)+(N\cap Y)=A(N)$, contradicting [step 2.3]. [step 1.1, step 2.1, step 2.3]

4.1 If $A$ is injective, hence bijective by [step 3.3], then $A^{-1}$ is bounded by [A3]. [step 3.3, A3]

4.2 For $y\in X$ the equation $Ax=y$ is solvable if and only if $y\in\operatorname{ran}A$ if and only if $\varphi(y)=0$ for every $\varphi\in\ker A^*$, by [step 3.1]. [step 3.1, A2]

4.3 $\dim\ker A=\dim N-\dim A(N)$ and $\dim(X/\operatorname{ran}A)=\dim(N/A(N))=\dim N-\dim A(N)$: the first is rank-nullity for $A|_N:N\to N$ together with [step 2.1], the second is rank-nullity for the quotient map $N\to N/A(N)$ together with [step 3.2], whose kernel is $A(N)$. [step 2.1, step 3.2, A3]

5.1 Collecting: [step 3.3] and [step 4.1] give claim 1, [step 4.2] gives claim 2, and [step 4.3] gives finite dimensionality and equality of the dimensions of kernel and cokernel, claim 3. [step 3.3, step 4.1, step 4.2, step 4.3] ∎
