---
id: cex-internal-and-homological-shifts-are-not-interchangeable
kind: counterexample
title: "The internal and homological shifts are not interchangeable"
status: published
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-bounded-projective-homotopy-category-for-a-m, def-triangulated-k-zero-of-khovanov-seidel-projectives, lem-homological-and-internal-shifts-on-khovanov-seidel-k-zero, def-graded-khovanov-seidel-module-category-and-projectives, def-graded-ring-module-bimodule-and-internal-shift, lem-the-khovanov-seidel-algebra-has-the-four-m-plus-one-path-basis]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Mikhail Khovanov and Paul Seidel, Quivers, Floer Cohomology, and Braid Group Actions, §2c, printed pp. 10-11"
      url: "https://arxiv.org/pdf/math/0006056"
    - title: "The Stacks Project, Derived Categories, section 28, K-groups (tag 0FCM), Definition 13.28.1"
      url: "https://stacks.math.columbia.edu/tag/0FCM"
verification:
  audited: 2026-09-27
  precheck: pass
---

## Statement refuted

Let $m\ge1$ and let $C_m=K^b(\operatorname{proj}^{gr}A_m)$ be the bounded
homotopy category of finite graded projective left $A_m$-modules of
[[def-bounded-projective-homotopy-category-for-a-m]], carrying the internal
shift $\{r\}$ of
[[def-graded-ring-module-bimodule-and-internal-shift]] and the homological shift
$[1]$. The following over-generalisation is **false**:

> **Refuted claim.** The functors $\{1\}$ and $[1]$ on $C_m$ are naturally
> isomorphic, so that shifting a complex internally by one degree and shifting
> it homologically by one degree give the same object up to a natural
> identification.

It is not so. For $1\le i\le m$ take the vertex projective $P_i=A_me_i$ of
[[def-graded-khovanov-seidel-module-category-and-projectives]], concentrated in
homological degree $0$. Then $P_i\{1\}$ has its only nonzero term in homological
degree $0$, namely $P_i\{1\}$, while $P_i[1]$ has its only nonzero term in
homological degree $-1$, namely $P_i$; since a morphism of complexes has
components in each homological degree, there is not even a nonzero degree-zero
chain map $P_i\{1\}\to P_i[1]$, let alone an isomorphism, whereas a natural
isomorphism $\{1\}\cong[1]$ would give one for every object. The two shifts are
therefore different functors, and the internal shift leaves homological
placement fixed while the homological shift lowers it by one in the indexing of
this page. The comparison in $K_0(C_m)$ is kept quantitative rather than
identifying the shifts: $[X[1]]=-[X]$ by
[[lem-homological-and-internal-shifts-on-khovanov-seidel-k-zero]] and
$[X\{1\}]=q[X]$ with $q$ invertible, so the two shift functors act on
$K_0(C_m)$ by $-1$ and by $q$ respectively.

## Facts & Assumptions

**Given:** An integer $m\ge1$, the algebra $A_m$ with its vertex projectives $P_i=A_me_i$ for $0\le i\le m$, the category $C_m=K^b(\operatorname{proj}^{gr}A_m)$ with its homological shift $[1]$, its internal shift $\{r\}$ and its group $K_0(C_m)$.

[L1] Objects of $C_m$ are bounded complexes $X=(X^n,d_X^n)$ of finitely generated graded projective left $A_m$-modules with degree-zero differentials, and a morphism $f:X\to Y$ is a homotopy class of chain maps, each represented by a family of degree-zero $A_m$-linear maps $f^n:X^n\to Y^n$ with $f^{n+1}d_X^n=d_Y^nf^n$; the homological shift is $(X[1])^n=X^{n+1}$ with $d_{X[1]}=-d_X$, and the internal shift is $(X\{r\})^n=X^n\{r\}$ with $d_{X\{r\}}=d_X$ ([[def-bounded-projective-homotopy-category-for-a-m]], [[def-graded-ring-module-bimodule-and-internal-shift]]).

[L2] $P_i=A_me_i$ is a finitely generated graded projective left $A_m$-module and $P_i\ne0$ for every $0\le i\le m$, since $e_i$ is one of the $4m+1$ $\mathbb Z$-linearly independent basis classes of $A_m$ ([[def-graded-khovanov-seidel-module-category-and-projectives]], [[lem-the-khovanov-seidel-algebra-has-the-four-m-plus-one-path-basis]]).

[L3] The internal shift of graded modules satisfies $(M\{r\})_d=M_{d-r}$ and has the same underlying ungraded abelian group as $M$, so $M\{r\}\ne0$ whenever $M\ne0$ ([[def-graded-ring-module-bimodule-and-internal-shift]]).

[L4] In $K_0(C_m)$ one has $[X[1]]=-[X]$ for every object, and the internal shift induces an automorphism $q$ with $[X\{r\}]=q^r[X]$, so $q$ is invertible in the endomorphism ring of $K_0(C_m)$ ([[lem-homological-and-internal-shifts-on-khovanov-seidel-k-zero]], [[def-triangulated-k-zero-of-khovanov-seidel-projectives]]).




## Proof

**Proof technique:** direct.

1.1 *The witness is nonzero.* By [L2] the module $P_i=A_me_i$ is a nonzero finitely generated graded projective left $A_m$-module for each $0\le i\le m$, in particular for $1\le i\le m$; let $\underline{P_i}$ denote the complex with $\underline{P_i}^{0}=P_i$ and $\underline{P_i}^{n}=0$ for $n\ne0$, an object of $C_m$ by [L1]. [L1, L2]

2.1 *The two shifted complexes.* By [L1] the internal shift acts termwise, so $\bigl(\underline{P_i}\{1\}\bigr)^n=\underline{P_i}^n\{1\}$ is nonzero exactly for $n=0$, where it equals $P_i\{1\}$, and its differentials are those of $\underline{P_i}$, all zero; the homological shift reindexes, so $\bigl(\underline{P_i}[1]\bigr)^n=\underline{P_i}^{n+1}$ is nonzero exactly for $n=-1$, where it equals $P_i$, and again all differentials vanish. In particular $\bigl(\underline{P_i}\{1\}\bigr)^{0}=P_i\{1\}\ne0$ by [L3] while $\bigl(\underline{P_i}[1]\bigr)^{0}=0$. [step 1.1, L1, L3]

3.1 *No morphism, hence no isomorphism.* Let $f:\underline{P_i}\{1\}\to\underline{P_i}[1]$ be a morphism in $C_m$ represented by a chain map. By [L1] its degree-$0$ component is a degree-zero $A_m$-linear map $f^{0}:P_i\{1\}\to0$, which must be the zero map; every other component of $f$ has either zero source or zero target by step 2.1, so $f=0$ and the only morphism between the two objects is the zero morphism. The identity of the one-term nonzero complex $\underline{P_i}\{1\}$ is nonzero in $C_m$: with both differentials zero, a homotopy cannot make its degree-$0$ identity map null. As its Hom group to $\underline{P_i}[1]$ is zero, the two objects are not isomorphic in $C_m$; consequently there is no natural isomorphism between the functors $\{1\}$ and $[1]$, because such a natural isomorphism would supply an isomorphism $\underline{P_i}\{1\}\cong\underline{P_i}[1]$ for this particular object. [step 2.1, L1]

4.1 *The $K_0$ comparison.* By [L4] one has $[\underline{P_i}[1]]=-[\underline{P_i}]$ and $[\underline{P_i}\{1\}]=q[\underline{P_i}]$ with $q$ an invertible endomorphism of $K_0(C_m)$; the two shift functors therefore act on the class of the witness by the operators $-1$ and $q$. The displayed classes are not asserted to be unequal: deciding that would require the additional input that $[\underline{P_i}]$ is not annihilated by $q+1$, that is, a basis computation in $K_0(C_m)$, which this counterexample does not use. The non-isomorphism of step 3.1 is a homological-support statement and needs no such computation. [step 3.1, L4]

5.1 *Conclusion.* For every $1\le i\le m$ the objects $\underline{P_i}\{1\}$ and $\underline{P_i}[1]$ of $C_m$ have nonzero terms in the distinct homological degrees $0$ and $-1$ by step 2.1, there is no nonzero morphism between them by step 3.1, and consequently the internal shift $\{1\}$ and the homological shift $[1]$ are not naturally isomorphic functors on $C_m$; the refuted claim fails already on a single vertex projective concentrated in degree $0$. The internal shift moves internal degrees and leaves homological placement fixed, the homological shift reindexes without touching internal degrees, and the two are compared in $K_0(C_m)$ by the operators $q$ and $-1$ of step 4.1 rather than identified. No choice principle is used, and the witness is the single module $P_i$ in one homological degree. [step 2.1, step 3.1, step 4.1] ∎
