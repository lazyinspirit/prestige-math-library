---
id: thm-residue-theorem-null-homologous-cycle
kind: theorem
title: "The residue theorem for a null-homologous cycle"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-admissible-cycle-for-residue-theorem,
       lem-finiteness-support-residue-sum,
       cor-residue-contour-integral-formula,
       cor-contour-integrals-homologous-cycles,
       thm-winding-number-circle-traversed-k-times]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "L. V. Ahlfors, Complex Analysis, 3rd ed., Ch. 4 §5.1, Theorem 17"
      url: "https://people.math.gatech.edu/~mccuan/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf"
    - title: "E. Stein and R. Shakarchi, Complex Analysis, Ch. 3 §2"
      url: "https://web.archive.org/web/20260305202510if_/https://studylib.net/doc/27609666/stein-complex-analysis"
pipeline_run: null
---

## Statement

Let $\Omega\subseteq\mathbb C$ be open, let $f$ be meromorphic on $\Omega$ with
pole set $S$, and let $\Gamma$ be admissible for the residue theorem in
$\Omega$. Then

$\int_\Gamma f(z)\,dz=2\pi i\sum_{a\in S}n(\Gamma,a)\operatorname{Res}(f,a),$

where only finitely many terms are nonzero.

## Facts & Assumptions

**Given:** An open set $\Omega$, a meromorphic function $f$ on $\Omega$ with pole set $S$, and an admissible cycle $\Gamma$ in $\Omega$.

[L1] Only finitely many poles have nonzero index with respect to $\Gamma$ ([[lem-finiteness-support-residue-sum]]).

[L2] For a sufficiently small positively oriented circle $C(a,r)$ around an isolated singularity $a$, the integral of $f$ on that circle is $2\pi i\,\operatorname{Res}(f,a)$ ([[cor-residue-contour-integral-formula]]).

[L3] If two cycles are homologous in an open set on which a function is holomorphic, then their contour integrals agree ([[cor-contour-integrals-homologous-cycles]]).

[L4] A positively oriented circle around $a$ has index $1$ inside and $0$ outside ([[thm-winding-number-circle-traversed-k-times]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], the set $A:=\{a\in S:n(\Gamma,a)\ne0\}$ is finite. For each $a\in A$ choose $r_a>0$ so small that the closed discs $\overline{D(a,r_a)}$ are pairwise disjoint, lie in $\Omega$, meet no pole other than $a$, and are disjoint from $\Gamma^\ast$. Let $C_a$ be the positively oriented circle $|\zeta-a|=r_a$. [given, L1, choose]

2.1 Put [step 1.1, L4] $\Delta:=\sum_{a\in A}n(\Gamma,a)C_a.$ For every $p\in\mathbb C\setminus(\Omega\setminus A)$ one has $n(\Gamma,p)=n(\Delta,p)$. Indeed, if $p\notin\Omega$ then admissibility makes $n(\Gamma,p)=0$, and every $C_a$ lies in $\Omega$, so gives $n(\Delta,p)=0$ as well. If $p=a\in A$, then [L4] gives $n(C_a,a)=1$ and $n(C_b,a)=0$ for $b\ne a$, so $n(\Delta,a)=n(\Gamma,a)$. Therefore $\Gamma$ and $\Delta$ are homologous in $\Omega\setminus A$. [L4]

3.1 The function $f$ is holomorphic on $\Omega\setminus A$, so [L3] applied to step 2.1 yields $\int_\Gamma f(z)\,dz=\int_\Delta f(z)\,dz=\sum_{a\in A}n(\Gamma,a)\int_{C_a}f(z)\,dz.$ [step 2.1, L3]

4.1 Each $C_a$ encloses only the pole $a$, so [L2] gives $\int_{C_a}f(z)\,dz=2\pi i\,\operatorname{Res}(f,a).$ Substituting this into step 3.1 proves the displayed formula. Since the set $A$ is finite, the residue sum has only finitely many nonzero terms. [step 3.1, L2] ∎
