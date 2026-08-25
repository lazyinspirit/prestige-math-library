---
id: lem-transitivity-of-module-finiteness
kind: lemma
title: "Module finiteness is transitive along a tower of algebras"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-finite-type-and-module-finite-algebras, def-algebra-over-a-commutative-ring, def-left-and-right-modules, lem-generated-submodule-as-finite-linear-combinations]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: "M. Hochster, Introduction to Commutative Algebra, Math 614, Lemma 5.4"
      url: "http://web.archive.org/web/20230308152844if_/https://dept.math.lsa.umich.edu/~hochster/615W22/614Lx.pdf"
    - title: "A. Altman and S. Kleiman, A Term of Commutative Algebra, 13th ed., (16.21)"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
pipeline_run: null
---

## Statement

Let $\varphi\colon A\to B$ be a homomorphism of commutative rings, so that $B$ is
an $A$-algebra ([[def-algebra-over-a-commutative-ring]]) and every $B$-module
becomes an $A$-module through $a\cdot z:=\varphi(a)z$. Suppose $B$ is generated
as an $A$-module by $b_1,\ldots,b_m$ with $m\in\mathbb N$, and let $M$ be a
$B$-module generated as a $B$-module by $u_1,\ldots,u_n$ with $n\in\mathbb N$.
Then the $mn$ products $b_iu_j$ generate $M$ as an $A$-module.

In particular, if $\psi\colon B\to C$ is a homomorphism of commutative rings
making $C$ module-finite over $B$, and $B$ is module-finite over $A$, then $C$
is module-finite over $A$ ([[def-finite-type-and-module-finite-algebras]]): the
products $\psi(b_i)c_j$ of a finite $A$-generating list of $B$ with a finite
$B$-generating list of $C$ generate $C$ over $A$.

## Facts & Assumptions

**Given:** Commutative rings $A$ and $B$, a ring homomorphism $\varphi\colon A\to B$, a finite $A$-module generating list $b_1,\ldots,b_m$ of $B$, a $B$-module $M$ and a finite $B$-module generating list $u_1,\ldots,u_n$ of $M$.

[L1] An **$R$-algebra** is a unital ring $A$ with a unital ring homomorphism $\eta_A\colon R\to A$ of central image, and the induced scalar action $ra:=\eta_A(r)a$ makes $A$ an $R$-module ([[def-algebra-over-a-commutative-ring]]).

[L2] $A$ is **module-finite over $R$** when it is finitely generated as an $R$-module ([[def-finite-type-and-module-finite-algebras]]).

[L3] A left $R$-module is an abelian group with an action satisfying $r(m+n)=rm+rn$, $(r+s)m=rm+sm$, $(rs)m=r(sm)$ and $1_Rm=m$ ([[def-left-and-right-modules]]).

[L4] For a ring $R$, a left $R$-module $M$ and $S\subseteq M$, the submodule $\langle S\rangle_R$ is the set of finite sums $\sum_{i=1}^{k}r_is_i$ with $k\in\mathbb N$, $r_i\in R$ and $s_i\in S$, the term with $k=0$ being $0_M$ ([[lem-generated-submodule-as-finite-linear-combinations]]).

## Proof

**Proof technique:** direct.

1.1 The $A$-action on $M$ is $a\cdot z=\varphi(a)z$, computed in the $B$-module $M$; it satisfies the module axioms because $\varphi$ is a ring homomorphism and $M$ is a $B$-module. Each product $b_iu_j$ is an element of $M$. [L1, L3, given]

2.1 Let $z\in M$. Since $u_1,\ldots,u_n$ generate $M$ over $B$, the finite-sum description gives $\beta_1,\ldots,\beta_n\in B$ with $z=\sum_{j=1}^{n}\beta_ju_j$. Since $b_1,\ldots,b_m$ generate $B$ over $A$, the same description gives, for each $j$, elements $\alpha_{1j},\ldots,\alpha_{mj}\in A$ with $\beta_j=\sum_{i=1}^{m}\varphi(\alpha_{ij})b_i$. [L4, step 1.1]

3.1 Substituting and using the $B$-module axioms, $z=\sum_{j=1}^{n}\big(\sum_{i=1}^{m}\varphi(\alpha_{ij})b_i\big)u_j=\sum_{i=1}^{m}\sum_{j=1}^{n}\varphi(\alpha_{ij})(b_iu_j)=\sum_{i,j}\alpha_{ij}\cdot(b_iu_j)$, an $A$-linear combination of the $mn$ products. As $z$ was arbitrary, those products generate $M$ as an $A$-module. Taking $M=C$ with its $B$-module structure gives the transitivity statement. [L2, L3, L4, step 2.1, algebra] ∎

## Remarks

- **Both degenerate cases collapse rather than fail.** If $m=0$ then $B$ is generated over $A$ by the empty list, so $B=0$ and $1_B=0_B$; every $B$-module then satisfies $z=1_Bz=0$, so $M=0$ and the empty set of products generates it. If $n=0$ then $M=0$ directly. The count $mn$ is $0$ in both cases, which is the correct answer.

- **The products need not be distinct or independent.** The list $b_iu_j$ may repeat entries and may be far from minimal; only the finiteness of the count is used.
