---
id: thm-atkinson
kind: theorem
title: Atkinson
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-fredholm-operator-cokernel-and-index, def-compact-linear-operator, def-bounded-linear-operator, def-banach-space, lem-fredholm-splitting-and-parametrix, lem-finite-rank-operators-are-compact, lem-a-compact-remainder-estimate-forces-closed-range, thm-schauder-compact-adjoint-theorem, lem-kernel-of-identity-minus-compact-is-finite-dimensional, lem-elementary-kernel-range-annihilator-identities, thm-dual-of-a-quotient-is-the-annihilator, lem-transpose-reverses-composition, def-transpose-of-a-bounded-operator, thm-dual-norms-every-vector, cor-dual-separates-points, thm-dimension-of-a-linear-subspace, def-dimension, def-linear-basis, def-quotient-vector-space-coset-notation, def-axiom-of-choice, lem-ac-supplies-countable-and-dependent-choice-for-banach-integration, def-dependent-choice]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Gerald Teschl, Topics in Real and Functional Analysis, version November 17, 2017 — §6.5 p.188, Theorem 6.28"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
    - title: "Theo Bühler and Dietmar Salamon, Functional Analysis — §4.3 pp.192–195, Theorem 4.38"
      url: "https://uomustansiriyah.edu.iq/media/lectures/9/9_2021_09_21!12_02_01_AM.pdf"
verification:
  audited: 2026-09-22
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $X$ and $Y$ be Banach
spaces over the same scalar field and let $T:X\to Y$ be a bounded linear operator
([[def-bounded-linear-operator]]). Then $T$ is Fredholm
([[def-fredholm-operator-cokernel-and-index]]) if and only if there is a bounded
linear $S:Y\to X$ such that both $ST-I_X$ and $TS-I_Y$ are compact
([[def-compact-linear-operator]]).

## Facts & Assumptions

[A1] If $T$ is Fredholm, the splitting lemma provides a bounded $S:Y\to X$ for which $ST-I_X$ has finite-dimensional range of dimension at most $\dim\ker T$ and $TS-I_Y$ has finite-dimensional range of dimension at most $\dim\operatorname{coker}T$ ([[lem-fredholm-splitting-and-parametrix]]); a bounded finite-rank operator is compact ([[lem-finite-rank-operators-are-compact]], [[def-fredholm-operator-cokernel-and-index]]).

[A2] Under DC, if $\|x\|\le C\|Tx\|+\|Kx\|$ for a compact $K$ and some real $C>0$, then $\ker T$ is finite dimensional and $\operatorname{ran}T$ is closed ([[lem-a-compact-remainder-estimate-forces-closed-range]], [[def-dependent-choice]], [[def-banach-space]]); $\mathrm{AC}$ supplies DC ([[lem-ac-supplies-countable-and-dependent-choice-for-banach-integration]]).

[A3] Transposition is additive with $(BA)^*=A^*B^*$ and $I^*=I$ ([[lem-transpose-reverses-composition]], [[def-transpose-of-a-bounded-operator]]); a compact operator between Banach spaces has compact transpose ([[thm-schauder-compact-adjoint-theorem]]); the kernel of $I-C$ with $C$ compact is finite dimensional ([[lem-kernel-of-identity-minus-compact-is-finite-dimensional]]).

[A4] For a bounded $T$, $(\operatorname{ran}T)^\perp=\ker T^*$ and $\overline{\operatorname{ran}T}={}^\perp(\ker T^*)$ ([[lem-elementary-kernel-range-annihilator-identities]]); for closed $M\le Y$ the map $(Y/M)^*\to M^\perp$, $h\mapsto h\circ q$, is a linear isometric bijection ([[thm-dual-of-a-quotient-is-the-annihilator]], [[def-quotient-vector-space-coset-notation]]).

[A5] For nonzero $z$ in a normed space $Z$ there is $h\in Z^*$ with $\|h\|=1$ and $h(z)=\|z\|$ ([[thm-dual-norms-every-vector]]), so the dual separates points ([[cor-dual-separates-points]]); a subspace of a finite-dimensional space is finite dimensional ([[thm-dimension-of-a-linear-subspace]], [[def-dimension]]), and a linear bijection carries an ordered basis to an ordered basis ([[def-linear-basis]]).

## Proof

**Proof technique:** direct.

**Given:** $\mathrm{AC}$, Banach spaces $X,Y$ over one scalar field, and a bounded linear $T:X\to Y$.

1.1 If $T$ is Fredholm, then the operator $S$ of [A1] satisfies: $ST-I_X$ and $TS-I_Y$ have finite-dimensional ranges, hence are compact. [A1]

1.2 Conversely assume there is a bounded $S:Y\to X$ with $F:=ST-I_X$ and $G:=TS-I_Y$ compact. By boundedness choose a real $b\ge0$ such that $\|Sy\|\le b\|y\|$ for every $y\in Y$, and put $C:=\max(b,1)>0$. [assume-hyp]

2.1 For every $x\in X$ one has $x=STx-Fx$, hence $\|x\|\le\|STx\|+\|Fx\|\le b\|Tx\|+\|Fx\|\le C\|Tx\|+\|Fx\|$. [step 1.2, algebra]

2.2 By [A3] the transpose of $G=TS-I_Y$ is $G^*=S^*T^*-I_{Y^*}$, so $S^*T^*=I_{Y^*}+G^*=I_{Y^*}-(-G^*)$; for $g\in Y^*$ with $T^*g=0$ one has $S^*T^*g=S^*(T^*g)=0$ by linearity of $S^*$, hence $(I_{Y^*}-(-G^*))g=S^*T^*g=0$ and $\ker T^*\subseteq\ker(I_{Y^*}-(-G^*))$. [step 1.2, A3]

3.1 Under the hypothesis of [step 1.2], $\ker T$ is finite dimensional and $\operatorname{ran}T$ is closed, by [A2] applied to the estimate of [step 2.1] with the compact operator $F$. [step 2.1, A2]

3.2 Under the hypothesis of [step 1.2] the operator $G:=TS-I_Y$ is compact, so its transpose $G^*$ is compact by [A3]; the negative $-G^*$ is compact as well, because the image of a bounded set under $-G^*$ is the negative of its image under $G^*$ and negating a set preserves the compactness of its closure. So [A3] applies to the compact operator $-G^*$ and makes $\ker(I_{Y^*}-(-G^*))$ finite dimensional; by [step 2.2] the subspace $\ker T^*$ is finite dimensional. [step 1.2, step 2.2, A3]

4.1 Under the hypothesis of [step 1.2], the dual of the cokernel is finite dimensional: since $\operatorname{ran}T$ is closed by [step 3.1], [A4] gives $(\operatorname{coker}T)^*=(Y/\operatorname{ran}T)^*\cong(\operatorname{ran}T)^\perp=\ker T^*$, which is finite dimensional by [step 3.2]. [step 3.1, step 3.2, A4]

5.1 Under the hypothesis of [step 1.2], the cokernel is finite dimensional: if $Z$ is a normed space whose dual has ordered basis $h_1,\dots,h_n$, then $\Psi(z):=(h_1(z),\dots,h_n(z))$ is linear and injective, because a nonzero $z$ has by [A5] a norm-one functional $h$, and $h=\sum_ic_ih_i$ forces $\Psi(z)\ne0$; the inverse bijection carries an ordered basis of the finite-dimensional image $\Psi(Z)$ to an ordered basis of $Z$ by [A5]. [step 4.1, A5]

6.1 Under the hypothesis of [step 1.2] the operator $T$ is Fredholm, since its kernel is finite dimensional by [step 3.1], its range is closed by [step 3.1] and its cokernel is finite dimensional by [step 5.1]; with [step 1.1] this is the asserted equivalence. [step 1.1, step 3.1, step 5.1] ∎
