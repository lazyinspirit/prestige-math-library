---
id: lem-range-of-identity-minus-compact-is-closed
kind: lemma
title: Range of identity minus compact is closed
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-compact-linear-operator, def-bounded-linear-operator, thm-bounded-linear-operator-equivalences, def-banach-space, lem-closed-range-iff-quotient-estimate, def-quotient-seminorm, def-dependent-choice, lem-dependent-choice-implies-countable-choice, thm-sequential-characterization-of-compact-operators, def-metric-convergence, lem-metric-limits-unique, def-sequence, lem-index-map-grows]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Theo Bühler and Dietmar Salamon, Functional Analysis — §4.3, Lemma 4.39 (closed range of I minus compact)"
      url: "https://uomustansiriyah.edu.iq/media/lectures/9/9_2021_09_21!12_02_01_AM.pdf"
    - title: "Gerald Teschl, Topics in Real and Functional Analysis, version November 17, 2017 — §6.5, Riesz–Schauder theory"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
---

## Statement

Assume the Axiom of Dependent Choice ([[def-dependent-choice]]). Let $X$ be a
Banach space over $\mathbb R$ or $\mathbb C$, let $K:X\to X$ be a compact
operator ([[def-compact-linear-operator]]) and put $A:=I-K$. Then
$\operatorname{ran}A$ is a closed subspace of $X$, and there is a real $C>0$
with

$$\operatorname{dist}(x,\ker A)\le C\|Ax\|\qquad\text{for every }x\in X,$$

the distance being the quotient seminorm of [[def-quotient-seminorm]].

## Facts & Assumptions

[A1] $\operatorname{ran}A$ is closed if and only if there is a real $C>0$ with $\operatorname{dist}(x,\ker A)\le C\|Ax\|$ for every $x$, under DC for the bounded linear map $A$ between Banach spaces ([[lem-closed-range-iff-quotient-estimate]]); here $\operatorname{dist}(x,M)=\|x+M\|_{X/M}$ is the quotient seminorm ([[def-quotient-seminorm]]).

[A2] $K$ is bounded and bounded linear operators are continuous ([[def-bounded-linear-operator]], [[thm-bounded-linear-operator-equivalences]]); DC implies Countable Choice ([[lem-dependent-choice-implies-countable-choice]]), and under DC a compact operator maps bounded sequences to sequences with convergent subsequences ([[thm-sequential-characterization-of-compact-operators]], [[def-sequence]], [[lem-index-map-grows]]).

[A3] In a metric space, limits of sequences are unique ([[lem-metric-limits-unique]], [[def-metric-convergence]]); the distance to a fixed set is 1-Lipschitz, $|\operatorname{dist}(u,N)-\operatorname{dist}(v,N)|\le\|u-v\|$ ([[def-quotient-seminorm]]).

## Proof

**Proof technique:** direct.

**Given:** $\mathrm{DC}$, a Banach space $X$ over $\mathbb R$ or $\mathbb C$, a compact operator $K:X\to X$, and $A=I-K$, $N:=\ker A$.

1.1 $N$ is a closed linear subspace: $A$ is bounded hence continuous by [A2], so $x_j\in N$ with $x_j\to x$ gives $Ax_j=0\to Ax$, whence $Ax=0$ by [A3]. [A2, A3]

1.2 If the estimate of [A1] fails for every $C$, then for each fixed $n\in\mathbb N$ the set
$$W_n:=\{w:\operatorname{dist}(w,N)=1,\ \|w\|\le2,\ \|Aw\|<1/(n+1)\}$$
is nonempty: taking $C=n+1$ gives $x$ with $\operatorname{dist}(x,N)>(n+1)\|Ax\|\ge0$, so the distance is positive; choose $m\in N$ with $\|x-m\|<2\operatorname{dist}(x,N)$ by the definition of the infimum, and set $w:=(x-m)/\operatorname{dist}(x,N)$. Scaling the distance gives $\operatorname{dist}(w,N)=1$, the norm bound $\|w\|<2$ holds, and $\|Aw\|=\|Ax\|/\operatorname{dist}(x,N)<1/(n+1)$ because $Am=0$. [step 1.1, A1, A3, algebra]

2.1 Assume the estimate fails. By Countable Choice in [A2], select $w_n\in W_n$ for every $n$ as in [step 1.2], and put $M:=\{x\in X:\|x\|\le2\}$. The sequence $(w_n)$ lies in the bounded set $M$, and $K$ is compact, so by [A2] there is a strictly increasing $j$ with $Kw_{n_j}\to z$ for some $z\in X$. [step 1.2, A2]

3.1 Along that subsequence, $w_{n_j}=Aw_{n_j}+Kw_{n_j}\to z$, because $\|Aw_{n_j}\|<1/(n_j+1)\to0$ by [step 1.2] and $Kw_{n_j}\to z$ by [step 2.1]. [step 1.2, step 2.1, algebra]

4.1 The limit $z$ lies in $N$: by [step 3.1] and the continuity of $A$, $Az=\lim_jAw_{n_j}=0$. [step 3.1, A2, A3]

5.1 But this contradicts $\operatorname{dist}(w_{n_j},N)=1$: by [A3] the numbers $\operatorname{dist}(w_{n_j},N)$ converge to $\operatorname{dist}(z,N)$, so $\operatorname{dist}(z,N)=1$, whereas $z\in N$ forces $\operatorname{dist}(z,N)=0$. [step 1.2, step 3.1, step 4.1, A3]

6.1 Hence the estimate of [A1] holds for some real $C>0$, and then [A1] gives that $\operatorname{ran}A$ is closed. [step 5.1, A1] ∎
