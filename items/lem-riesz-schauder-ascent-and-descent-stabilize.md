---
id: lem-riesz-schauder-ascent-and-descent-stabilize
kind: lemma
title: Riesz Schauder ascent and descent stabilize
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-compact-linear-operator, def-bounded-linear-operator, lem-compositions-with-a-compact-operator-are-compact, lem-linear-combinations-of-compact-operators-are-compact, lem-kernel-of-identity-minus-compact-is-finite-dimensional, lem-range-of-identity-minus-compact-is-closed, lem-riesz-lemma, thm-sequential-characterization-of-compact-operators, thm-bounded-inverse-theorem, lem-closed-subspace-of-a-banach-space-is-banach, cor-finite-dimensional-subspaces-are-closed, lem-dependent-choice-implies-countable-choice, def-dependent-choice, def-banach-space, def-linear-basis, def-metric-convergence, def-quotient-seminorm, def-norm-and-normed-space]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Gerald Teschl, Topics in Real and Functional Analysis, version November 17, 2017 — §6.6 pp.191–192, Lemmas 6.32–6.33"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
    - title: "Theo Bühler and Dietmar Salamon, Functional Analysis — §5.2.3 p.226, Remark 5.23, algebraic part"
      url: "https://uomustansiriyah.edu.iq/media/lectures/9/9_2021_09_21!12_02_01_AM.pdf"
verification:
  audited: 2026-09-22
---

## Statement

Assume the Axiom of Dependent Choice ([[def-dependent-choice]]). Let $X$ be a
Banach space over $\mathbb R$ or $\mathbb C$, let $K:X\to X$ be a compact
operator ([[def-compact-linear-operator]]) and put $A:=I-K$. Then there is
$m_0\in\mathbb N$ such that for every $n\ge m_0$

$$\ker A^n=\ker A^{m_0},\qquad \operatorname{ran}A^n=\operatorname{ran}A^{m_0},$$

and for every such $m$ the following hold:

1. $X=\ker A^m\oplus\operatorname{ran}A^m$ as a direct sum of linear subspaces;
2. $\ker A^m$ is finite dimensional ([[def-linear-basis]]) and
   $\operatorname{ran}A^m$ is closed in $X$;
3. $A$ maps $\operatorname{ran}A^m$ bijectively onto itself, and the restricted
   map $\operatorname{ran}A^m\to\operatorname{ran}A^m$, $y\mapsto Ay$, is a
   bounded linear isomorphism with bounded inverse
   ([[thm-bounded-inverse-theorem]]).

## Facts & Assumptions

[A1] For every $n\ge1$ there is a compact $K_n$ with $A^n=I-K_n$: $A=I-K$, and if $A^n=I-K_n$ with $K_n$ compact then $A^{n+1}=(I-K_n)A=I-K_n-K+K_nK$, where $K_n+K-K_nK$ is compact by the ideal and linear-subspace properties ([[lem-compositions-with-a-compact-operator-are-compact]], [[lem-linear-combinations-of-compact-operators-are-compact]], [[def-compact-linear-operator]], [[def-bounded-linear-operator]]).

[A2] For compact $C$ the kernel $\ker(I-C)$ is finite dimensional ([[lem-kernel-of-identity-minus-compact-is-finite-dimensional]]) and $\operatorname{ran}(I-C)$ is closed, with $\operatorname{dist}(x,\ker(I-C))\le C_0\|(I-C)x\|$ for some real $C_0>0$ ([[lem-range-of-identity-minus-compact-is-closed]], [[def-quotient-seminorm]]).

[A3] Riesz lemma: for a proper closed subspace $M$ of a normed space and $0<\alpha<1$ there is $x$ with $\|x\|=1$ and $\operatorname{dist}(x,M)>\alpha$ ([[lem-riesz-lemma]], [[def-quotient-seminorm]], [[def-norm-and-normed-space]]).

[A4] Under DC, Countable Choice is available, and a compact operator sends bounded sequences to sequences with convergent subsequences ([[lem-dependent-choice-implies-countable-choice]], [[thm-sequential-characterization-of-compact-operators]], [[def-metric-convergence]]); a subsequence of a bounded sequence is bounded.

[A5] A closed linear subspace of a Banach space is a Banach space ([[lem-closed-subspace-of-a-banach-space-is-banach]]), and a bounded bijection between Banach spaces has a bounded inverse ([[thm-bounded-inverse-theorem]], [[def-banach-space]]).

## Proof

**Proof technique:** direct.

**Given:** $\mathrm{DC}$, a Banach space $X$ over $\mathbb R$ or $\mathbb C$, a compact $K:X\to X$, and $A=I-K$.

1.1 For every $n\ge1$ the operator $A^n$ equals $I-K_n$ with $K_n$ compact. [A1]

2.1 For every $n\ge1$ the kernel $\ker A^n$ is finite dimensional with $\ker A^n\subseteq\ker A^{n+1}$, and the range $\operatorname{ran}A^n$ is closed with $\operatorname{ran}A^{n+1}\subseteq\operatorname{ran}A^n$. [step 1.1, A2]

3.1 For every $n$ with $\ker A^n\ne\ker A^{n+1}$, the finite-dimensional subspace $\ker A^n$ is closed in the normed space $\ker A^{n+1}$, so Riesz's lemma gives $x\in\ker A^{n+1}$ with $\|x\|=1$ and $\operatorname{dist}(x,\ker A^n)>1/2$ ([[cor-finite-dimensional-subspaces-are-closed]]). [step 2.1, A3]

3.2 For every $n$ with $\operatorname{ran}A^n\ne\operatorname{ran}A^{n+1}$ there is $x\in\operatorname{ran}A^n$ with $\|x\|=1$ and $\operatorname{dist}(x,\operatorname{ran}A^{n+1})>1/2$, the distance being computed in $X$. [step 2.1, A3]

4.1 The chain $\ker A^n$ stabilizes: if $\ker A^n\ne\ker A^{n+1}$ for every $n$, Countable Choice in [A4] applied to [step 3.1] gives unit vectors $x_n\in\ker A^{n+1}$ with $\operatorname{dist}(x_n,\ker A^n)>1/2$; for $m<n$ one has $x_m\in\ker A^n$, $Ax_m\in\ker A^n$ and $Ax_n\in\ker A^n$, so $Kx_n-Kx_m=x_n-(x_m+Ax_n-Ax_m)$ is at distance $>1/2$ from $0$, and the bounded sequence $(Kx_n)$ has no convergent subsequence, contradicting [A4]. [step 3.1, A4]

4.2 The chain $\operatorname{ran}A^n$ stabilizes: if $\operatorname{ran}A^n\ne\operatorname{ran}A^{n+1}$ for every $n$, Countable Choice in [A4] applied to [step 3.2] gives unit vectors $x_n\in\operatorname{ran}A^n$ with $\operatorname{dist}(x_n,\operatorname{ran}A^{n+1})>1/2$; for $m>n$ one has $x_m\in\operatorname{ran}A^{n+1}$, $Ax_n\in\operatorname{ran}A^{n+1}$ and $Ax_m\in\operatorname{ran}A^{n+1}$, so $Kx_n-Kx_m=x_n-(x_m+Ax_n-Ax_m)$ has norm $>1/2$, and the bounded sequence $(Kx_n)$ has no convergent subsequence, contradicting [A4]. [step 3.2, A4]

5.1 Choose $m$ so that both chains are constant from $m$ onward by [step 4.1] and [step 4.2], and put $N:=\ker A^m$, $Y:=\operatorname{ran}A^m$. Then $X=N+Y$: for $x\in X$ the element $A^mx$ lies in $Y=\operatorname{ran}A^{2m}$, so $A^mx=A^{2m}y$ for some $y\in X$, and $x-A^my\in N$. [step 4.1, step 4.2]

6.1 Under the choice of [step 5.1] one has $N\cap Y=\{0\}$: if $x\in N\cap Y$, say $x=A^my$ with $A^mx=0$, then $A^{2m}y=0$, so $y\in\ker A^{2m}=\ker A^m$ by [step 4.1] and $x=A^my=0$. [step 5.1]

6.2 Under the choice of [step 5.1], $A(Y)=Y$: $A(Y)=A(A^mX)=A^{m+1}X=Y$ by the stabilization of [step 4.2]. [step 5.1]

7.1 Under the choice of [step 5.1], $X=N\oplus Y$, and $N$ is finite dimensional and $Y$ is closed by [step 2.1]. [step 5.1, step 6.1, step 2.1]

8.1 Under the choice of [step 5.1], the restriction $A|_Y$ is injective: if $Ay=0$ with $y=A^mz\in Y$, then $A^{m+1}z=0$, so $z\in\ker A^{m+1}=\ker A^m$ by [step 4.1] and $y=A^mz=0$. [step 7.1]

9.1 Under the choice of [step 5.1], $A|_Y:Y\to Y$ is a bounded bijection by [step 6.2] and [step 8.1], and $Y$ is a Banach space by [step 7.1] and [A5], so the inverse $(A|_Y)^{-1}$ is bounded by [A5]. [step 7.1, step 6.2, step 8.1, A5]

10.1 Taking $m_0:=m$ from [step 5.1] gives the stabilization, and [step 7.1], [step 6.2] and [step 9.1] give the decomposition, the finite-dimensional kernel, the closed range and the bounded isomorphism on that range; every larger $m$ works as well because the chains are constant from $m_0$ onward. [step 5.1, step 7.1, step 6.2, step 9.1] ∎
