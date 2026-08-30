---
id: thm-transitivity-of-induction-for-finite-groups
kind: theorem
title: "Induction is transitive along subgroup chains"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-induced-r-linear-g-module-by-h-covariant-functions, def-subgroup]
justified_by: []
aliases: []
proof_strategy: constructive
sources:
  scraped: []
  references:
    - title: "Pavel Etingof et al., Introduction to Representation Theory, Problem 4.31"
      url: "https://ocw.mit.edu/courses/18-712-introduction-to-representation-theory-fall-2010/84358595a02a73bced2c4e363a5d66f0_MIT18_712F10_ch4.pdf"
    - title: "Peter Webb, A Course in Finite Group Representation Theory, Lemma 4.3.7"
      url: "https://www-users.math.umn.edu/~webb/RepBook/RepBookLatex.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
---

## Statement

Let $K\le H\le G$ be subgroups of a finite group $G$, and let $W$ be an
$R$-linear $K$-module over a commutative ring $R$. Then

$$
\operatorname{Ind}_H^G(\operatorname{Ind}_K^H W)\cong \operatorname{Ind}_K^G W
$$

as $R$-linear $G$-modules.

## Facts & Assumptions

**Given:** A commutative ring $R$, a finite group $G$, subgroups $K\le H\le G$,
and an $R$-linear $K$-module $W$.

[F1] For a subgroup $L\le M$, the induced module $\operatorname{Ind}_L^M$ is the
space of functions $f:M\to W$ satisfying $f(ml)=l^{-1}\cdot f(m)$, with the
left action by translation ([[def-induced-r-linear-g-module-by-h-covariant-functions]]).

[F2] The notation $K\le H\le G$ means that $K$, $H$, and $G$ are subgroup
related in the stated order ([[def-subgroup]]).

## Proof

**Proof technique:** constructive.

1.1 For $F\in \operatorname{Ind}_H^G(\operatorname{Ind}_K^H W)$, define $\Psi(F)(g):=F(g)(e)$. If $k\in K$, then since $k\in H$ as well by [F2], $\Psi(F)(gk)=F(gk)(e)=(k^{-1}\cdot F(g))(e)=F(g)(k)=k^{-1}\cdot F(g)(e)$, so $\Psi(F)\in\operatorname{Ind}_K^G W$. [F1, F2, given, construct]
2.1 For $f\in\operatorname{Ind}_K^G W$, define $\Phi(f)(g)(h):=f(gh)$ for $g\in G$ and $h\in H$. If $k\in K$, then $\Phi(f)(g)(hk)=f(ghk)=k^{-1}\cdot f(gh)$, so $\Phi(f)(g)\in\operatorname{Ind}_K^H W$; and if $h_0\in H$, then $\Phi(f)(gh_0)(h)=f(gh_0h)=\Phi(f)(g)(h_0h)$, which is the covariance condition for $\operatorname{Ind}_H^G(\operatorname{Ind}_K^H W)$. Thus $\Phi(f)$ lies in that induced module. [F1, step 1.1, construct]
3.1 For $f\in\operatorname{Ind}_K^G W$, $\Psi(\Phi(f))(g)=\Phi(f)(g)(e)=f(g)$, so $\Psi\circ\Phi=\operatorname{id}$. [step 2.1, algebra]
3.2 For $F\in \operatorname{Ind}_H^G(\operatorname{Ind}_K^H W)$ and $h\in H$, one has $\Phi(\Psi(F))(g)(h)=\Psi(F)(gh)=F(gh)(e)=(h^{-1}\cdot F(g))(e)=F(g)(h)$, so $\Phi(\Psi(F))=F$ as functions $G\to \operatorname{Ind}_K^H W$. [F1, step 1.1, step 2.1, algebra]
4.1 Steps 3.1 and 3.2 show that $\Phi$ and $\Psi$ are inverse $G$-equivariant $R$-module isomorphisms. Therefore induction is transitive along $K\le H\le G$. [step 3.1, step 3.2, discharge-construct] ∎
