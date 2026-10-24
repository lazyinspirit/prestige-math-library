---
id: fs-every-exact-couple-is-a-long-exact-sequence-with-no-extra-grading-data
kind: false-statement
title: Every exact couple is a long exact sequence with no extra grading data
status: published
origin: pipeline
pipeline_run: phase-2-next-20
deps: ["def-exact-couple", "lem-abelian-group-model-for-spectral-sequence-computations"]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Weibel, An Introduction to Homological Algebra, Chapter 5"
      url: "https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf"
    - title: "The Stacks Project, Homological Algebra"
      url: "https://stacks.math.columbia.edu/download/homology.pdf"
verification:
  audited: 2026-09-12
---

## Statement

**False:** An ungraded long exact sequence, without additional grading and repeated-object data, determines the specified homological exact-couple spectral sequence.

## Facts & Assumptions

[F1] [[def-exact-couple]] requires the bigraded objects and degrees $\deg i=(1,-1)$, $\deg j=(0,0)$, $\deg k=(-1,0)$ in an initial couple, in addition to three exactness conditions.

[F2] [[lem-abelian-group-model-for-spectral-sequence-computations]] proves that multiplication by $2$ on $\mathbb Z$ is injective, with image $2\mathbb Z$ and cokernel $\mathbb Z/2$.

## Refutation

**Given:** The ungraded long exact sequence with nonzero terms $L_0=\mathbb Z$, $L_1=\mathbb Z$, $L_2=\mathbb Z/2$, maps $L_0\to L_1$ multiplication by $2$ and $L_1\to L_2$ reduction modulo $2$, and $L_n=0$ for every other integer $n$. All other maps are zero.

1.1 This sequence is exact: multiplication by $2$ is injective, its image is the kernel of reduction, and reduction is surjective. Exactness at every zero term is equality of zero subgroups. [F2]

2.1 For each $c\in\{0,1\}$ define $D^{(c)}_{p,q}=\mathbb Z$ and $E^{(c)}_{p,q}=\mathbb Z/2$ when $p+q=c$, and zero otherwise. Let $i$ be multiplication by $2$ on supported components, $j$ reduction on supported components, and $k$ the zero map to its prescribed target $D^{(c)}_{p-1,q}$. All off-support maps are zero. The shift $(1,-1)$ preserves support, and $j$ has degree $(0,0)$. At supported $D$, $\operatorname{im}i=2\mathbb Z=\ker j$ and $\operatorname{im}k=0=\ker i$; at supported $E$, $\operatorname{im}j=E=\ker k$. At off-support targets each required image and kernel is zero, including any zero map from a supported source. Thus these are initial exact couples with exactly the degrees in [F1]. [F1, F2, step 1.1]

3.1 To specify the underlying long exact sequences without dropping zero terms, fix any integer $a$. Following $i,j,k$ in the $c$-couple gives, for every integer $m$, the consecutive terms $D^{(c)}_{a,c-a-m}\xrightarrow{i}D^{(c)}_{a+1,c-a-m-1}\xrightarrow{j}E^{(c)}_{a+1,c-a-m-1}\xrightarrow{k}D^{(c)}_{a,c-a-m-1}$. The last term is the first term for $m+1$. Assign the first three terms sequence positions $3m,3m+1,3m+2$. Their total bidegree is $c-m$, so they are nonzero exactly when $m=0$. Forgetting bidegrees therefore gives exactly the sequence $L$ of step 1.1, for both $c=0$ and $c=1$, for every $a$. In particular the zero target of each supported $k$ remains a zero term. No sum of the indexed families is being taken. [step 1.1, step 2.1]

4.1 The two $E^1$ pages differ: $E^{(0)}_{0,0}=\mathbb Z/2$ whereas $E^{(1)}_{0,0}=0$. Hence they cannot be isomorphic by bidegree-zero maps. Even the displayed collection of underlying long exact sequences is identical in the two constructions, while their specified first spectral pages are different. Thus the ungraded sequence does not determine the specified homological exact-couple spectral sequence; bidegree allocation is essential extra data. This asserts neither failure of ungraded exactness nor a convergence statement, and uses no choice. [F1, F2, step 3.1] ∎
