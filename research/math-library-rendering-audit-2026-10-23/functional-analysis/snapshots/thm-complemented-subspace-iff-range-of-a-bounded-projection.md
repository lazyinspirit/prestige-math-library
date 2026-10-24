---
id: thm-complemented-subspace-iff-range-of-a-bounded-projection
kind: theorem
title: "A closed subspace is complemented exactly when it is the range of a bounded projection"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-complemented-subspace, def-bounded-linear-operator]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-01
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Gerald Teschl, Topics in Real and Functional Analysis"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
    - title: "Haim Brezis, Functional Analysis, Sobolev Spaces and Partial Differential Equations"
      url: "https://math.jhu.edu/~sire/brezis.pdf"
pipeline_run: frontier-28
---

## Statement

Let $X$ be a normed space and let $M \le X$. Then $M$ is complemented if and
only if there is a bounded linear operator $P:X\to X$ such that

$$P^2 = P,\qquad \operatorname{ran}(P)=M.$$

## Facts & Assumptions

**Given:** A normed space $X$, a linear subspace $M \le X$, and a bounded linear operator $P:X\to X$.

[L1] If $M$ is complemented, then $X=M\oplus N$ for some closed subspace $N$ and the coordinate maps $P_M$ and $P_N$ are bounded linear operators ([[def-complemented-subspace]]).

[L2] A bounded linear operator is linear and satisfies norm estimates ([[def-bounded-linear-operator]]).

## Proof

**Proof technique:** direct.

1.1 Assume $M$ is complemented, and write $x=m+n$ with $m \in M$, $n \in N$ as in [L1]. Let $P:=P_M$. Then $P(x)=m$, so $P^2(x)=P(m)=m=P(x)$ and $\operatorname{ran}(P)=M$. Thus a complemented subspace is the range of a bounded projection. [L1]

1.2 Conversely, assume $P^2=P$ and $\operatorname{ran}(P)=M$. For every $x \in X$,

$$x = Px + (x-Px).$$

Here $Px \in M$, and $P(x-Px)=Px-P^2x=0$, so $x-Px \in \ker P$. [L2, algebra]

1.3 The kernel $\ker P$ is a closed linear subspace of $X$. It is linear because $P$ is linear by [L2]. If $x_n \in \ker P$ and $x_n \to x$, let $C$ be a bound for $P$ from [L2]. Then $\|Px\|=\|P(x-x_n)\| \le C\|x-x_n\| \to 0$, so $Px=0$ and $x \in \ker P$. [L2, choose]

2.1 The sum in step 1.2 is direct: if $z \in M \cap \ker P$, then $z=Pw$ for some $w$ and also $Pz=0$, so $z=Pz=P^2w=0$. Therefore $X=M\oplus \ker P$. [step 1.2, L2, algebra]

3.1 The coordinate projections for the direct sum $X=M\oplus\ker P$ are $P$ and $I-P$. The first is bounded by hypothesis, and the second is bounded because $\|(I-P)x\| \le \|x\|+\|Px\|$ for every $x$. Together with steps 2.1 and 1.3, this is exactly the complemented-subspace condition of [L1]. [step 2.1, step 1.3, L1, L2, algebra]

4.1 Steps 1.1 and 3.1 prove the equivalence. [step 1.1, step 3.1] ∎
