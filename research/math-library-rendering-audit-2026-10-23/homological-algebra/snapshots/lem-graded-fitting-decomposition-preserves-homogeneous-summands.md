---
id: lem-graded-fitting-decomposition-preserves-homogeneous-summands
kind: lemma
title: "Graded Fitting decomposition for degree-zero endomorphisms"
status: published
origin: pipeline
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
deps:
  - lem-graded-module-kernels-cokernels-and-biproducts-are-degreewise
  - thm-rank-nullity
  - def-endomorphism-ring-of-a-module
  - prop-endomorphisms-form-a-ring
  - def-left-right-and-two-sided-ideal
justified_by: []
forward_refs: []
aliases: []
landmark: false
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
sources:
  scraped: []
  references:
    - title: "Tom Leinster, The bijection between projective indecomposable and simple modules, arXiv:1410.3671v1, §3, Lemma 3.1 and Corollary 3.2 (ungraded finite-dimensional Fitting lemma and indecomposable endomorphism criterion; the degree-zero graded adaptation is proved here)"
      url: "https://arxiv.org/pdf/1410.3671"
    - title: "Alexander Kleshchev, Representation Theory of Symmetric Groups and Related Hecke Algebras, §2.2 (graded module conventions only)"
      url: "https://arxiv.org/pdf/0909.4844"
pipeline_run: frontier-36-complete
---

## Statement

Let $A$ be a finite-dimensional $\mathbb Z$-graded algebra over a field $k$,
$M$ a finite-dimensional graded left $A$-module, and $f\colon M\to M$ a
degree-zero endomorphism. There is an $n\ge1$ for which $\ker(f^n)$ and
$\operatorname{im}(f^n)$ are graded submodules and
$M=\ker(f^n)\oplus\operatorname{im}(f^n)$. Moreover, if $M$ is nonzero and
graded-indecomposable (it has no decomposition into two nonzero graded
submodules), then every degree-zero endomorphism of $M$ is invertible or
nilpotent. The nonunits of $\operatorname{End}_{A,0}(M)$ form a proper two-sided
ideal, hence the unique maximal left and right ideal of this possibly
noncommutative ring.

## Facts & Assumptions

**Given:** The field, graded algebra, module, and map in the Statement. The indecomposable and endomorphism-ring conclusions additionally assume that $M\ne0$ and has no nontrivial graded direct-sum decomposition. No axiom of choice is used; the only selection is one stabilization index for two specific finite-dimensional chains.

**Source relation:** Leinster's ungraded finite-dimensional Fitting lemma and indecomposable-endomorphism corollary supply the base result; the preservation of grading and the nonunit-ideal conclusion are established here. Kleshchev supplies only the grading conventions.

[L1] For degree-zero maps of graded modules, kernels and images are computed in each homogeneous degree ([[lem-graded-module-kernels-cokernels-and-biproducts-are-degreewise]]).

[L2] If $T\colon V\to W$ is linear and $V$ is finite-dimensional, then $\dim V=\dim\ker T+\dim\operatorname{im}T$ ([[thm-rank-nullity]]).

[L3] The endomorphism ring uses pointwise addition and composition as multiplication, with the identity map as its unit ([[def-endomorphism-ring-of-a-module]]).

[L4] These operations make the endomorphisms of a module a unital ring ([[prop-endomorphisms-form-a-ring]]).

[L5] A two-sided ideal is an additive subgroup closed under multiplication by arbitrary ring elements on both the left and the right ([[def-left-right-and-two-sided-ideal]]).

## Proof

**Proof technique:** direct.

1.1 The degree-zero endomorphisms of $M$ are closed under pointwise addition, additive inverses, and composition, and contain $1_M$, because each such map preserves every $M_d$. Thus $R:=\operatorname{End}_{A,0}(M)$ is a unital subring of $\operatorname{End}_A(M)$, whose ring operations are those of [L3] and [L4]. [L3, L4, given, algebra]

1.2 The kernels $\ker(f^m)$ form an increasing sequence of subspaces and the images $\operatorname{im}(f^m)$ form a decreasing sequence. Finite-dimensionality makes both sequences stabilize; choose $n\ge1$ after stabilization, so $\ker(f^n)=\ker(f^{2n})$ and $\operatorname{im}(f^n)=\operatorname{im}(f^{n+1})$. Since each $f^n$ is degree-zero, [L1] makes these stabilized subspaces graded $A$-submodules. [L1, given]

2.1 If $x\in\ker(f^n)\cap\operatorname{im}(f^n)$, write $x=f^n(y)$. Then $f^{2n}(y)=f^n(x)=0$, so stabilization gives $y\in\ker(f^{2n})=\ker(f^n)$ and hence $x=0$. By [L2] applied to $f^n$, the two submodules have dimensions summing to $\dim_k M$; their zero intersection therefore gives $M=\ker(f^n)\oplus\operatorname{im}(f^n)$. For $M=0$ this reads $0=0\oplus0$; for $f=0$ it reads $M=M\oplus0$, and for invertible $f$ it reads $M=0\oplus M$. [L2, step 1.2, algebra]

2.2 Now suppose $M\ne0$ and let $N$ be the set of nonunits of $R$. It contains $0$, and $-a\in N$ whenever $a\in N$. If $ra$ were invertible, $a$ would be injective; if $ar$ were invertible, $a$ would be surjective. Since $M$ is finite-dimensional, either property makes $a$ bijective, with degree-zero $A$-linear inverse. Thus $N$ absorbs multiplication on both sides by every $r\in R$. [step 1.1, given, algebra]

3.1 Suppose in addition that $M$ is graded-indecomposable. The decomposition in step 2.1 forces $\ker(f^n)=0$ or $\operatorname{im}(f^n)=0$. In the first case $f$ is injective, hence bijective by finite-dimensionality; its inverse is again degree-zero and $A$-linear. In the second case $f^n=0$. Thus $f$ is invertible or nilpotent, and every nonunit is nilpotent. This includes the zero endomorphism in the nilpotent case. If $\dim_k M=1$, nonzero indecomposability is automatic because two nonzero graded direct summands would have total dimension at least two. [step 2.1, given, algebra, cases]

4.1 If $f$ is a nonunit and $f^m=0$, then $1-f$ has two-sided inverse $1+f+\cdots+f^{m-1}$. Hence for each $f\in R$, at least one of $f$ and $1-f$ is invertible. [step 3.1, algebra]

5.1 If $a,b\in N$ but $u=a+b$ were invertible, then $x=u^{-1}a$ and $1-x=u^{-1}b$ would both be nonunits: otherwise $a=ux$ or $b=u(1-x)$ would be invertible. This contradicts step 4.1. Therefore $N$ is closed under addition; together with step 2.2 and [L5], it is a two-sided ideal. It is proper because $1_M$ is a unit. Every proper left or right ideal contains no unit and is therefore contained in $N$, so $N$ is the unique maximal left ideal and the unique maximal right ideal. [L5, step 4.1, step 2.2, algebra] ∎
