---
id: thm-module-finite-algebra-over-a-noetherian-ring-is-noetherian
kind: theorem
title: "A module-finite algebra over a Noetherian ring is a Noetherian ring, and so is every ring between the two"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [thm-noetherian-ring-ideal-characterisations, def-finite-type-and-module-finite-algebras, thm-finitely-generated-modules-over-noetherian-rings-are-noetherian, def-noetherian-module, def-submodule, lem-transitivity-of-module-finiteness, def-algebra-over-a-commutative-ring, thm-generated-ideal-description-in-a-commutative-ring, def-subring]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
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
    - title: "A. Altman and S. Kleiman, A Term of Commutative Algebra, 13th ed., (16.19) and (16.21)"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
    - title: "J. S. Milne, A Primer of Commutative Algebra, v4.03, §3"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
pipeline_run: null
---

## Statement

Let $A$ be a Noetherian commutative ring and let $B$ be a commutative
$A$-algebra that is module-finite over $A$
([[def-finite-type-and-module-finite-algebras]]). Then:

1. $B$ is a Noetherian ring;
2. if in addition the $A$-algebra structure map is the inclusion of $A$ as a
   subring of $B$ ([[def-subring]]), then every subring $C$ of $B$ with
   $A\subseteq C\subseteq B$ is module-finite over $A$ and is a Noetherian ring;
3. every finitely generated $B$-module is finitely generated as an $A$-module,
   and hence is a Noetherian $A$-module.

## Facts & Assumptions

**Given:** A Noetherian commutative ring $A$, a commutative $A$-algebra $B$ with structure map $\eta_B\colon A\to B$ that is module-finite over $A$, and, for the second clause, the additional hypotheses that $\eta_B$ is the inclusion of $A$ as a subring of $B$ and that $C$ is a subring of $B$ with $A\subseteq C\subseteq B$ ([[def-subring]]).

[L1] $B$ is **module-finite over $A$** when it is finitely generated as an $A$-module ([[def-finite-type-and-module-finite-algebras]]).

[L2] An **$A$-algebra** is a unital ring $B$ with a unital ring homomorphism $\eta_B\colon A\to B$ of central image, and the induced scalar action $ab:=\eta_B(a)b$ makes $B$ an $A$-module ([[def-algebra-over-a-commutative-ring]]).

[L3] Every finitely generated left module over a left Noetherian ring is Noetherian ([[thm-finitely-generated-modules-over-noetherian-rings-are-noetherian]]).

[L4] In a commutative ring, $(S)$ consists of finite sums $\sum r_is_i$, and $(a)=Ra$ ([[thm-generated-ideal-description-in-a-commutative-ring]]).

[L5] A left $R$-module is **Noetherian** when every submodule of it is finitely generated ([[def-noetherian-module]]).

[L6] For a commutative ring, being Noetherian is equivalent to every ideal being finitely generated ([[thm-noetherian-ring-ideal-characterisations]]).

[L7] A subset $N\subseteq M$ of a left $R$-module is a **submodule** when it is a subgroup of the additive group of $M$ and is closed under scalars ([[def-submodule]]).

[L8] If $B$ is generated as an $A$-module by $b_1,\ldots,b_m$ and a $B$-module $M$ is generated as a $B$-module by $u_1,\ldots,u_n$, then the $mn$ products $b_iu_j$ generate $M$ as an $A$-module ([[lem-transitivity-of-module-finiteness]]).

## Proof

**Proof technique:** direct.

1.1 Let $B'$ be any commutative $A$-algebra that is module-finite over $A$. Then $B'$ is a finitely generated module over the Noetherian ring $A$, hence a Noetherian $A$-module: every $A$-submodule of $B'$ is finitely generated over $A$. This applies in particular to $B'=B$. [L1, L2, L3, L5, given]

2.1 First clause. Let $\mathfrak b$ be an ideal of $B'$. It is an additive subgroup of $B'$ closed under the $A$-action, since $a\cdot x=\eta_{B'}(a)x\in\mathfrak b$ for $x\in\mathfrak b$, so it is an $A$-submodule and therefore generated over $A$ by finitely many $x_1,\ldots,x_k\in\mathfrak b$. Every element of $\mathfrak b$ is then $\sum_i\eta_{B'}(a_i)x_i$, which lies in the ideal $(x_1,\ldots,x_k)$ of $B'$; and that ideal is contained in $\mathfrak b$ because each $x_i$ lies in $\mathfrak b$. So $\mathfrak b=(x_1,\ldots,x_k)$ is finitely generated as an ideal, and $B'$ is a Noetherian ring. Taking $B'=B$ gives the first clause. [L4, L5, L6, L7, step 1.1]

2.2 Second clause, first half. Suppose the $A$-algebra structure map is the inclusion $A\subseteq B$ and $C$ is a subring of $B$ with $A\subseteq C\subseteq B$. Then $C$ is an additive subgroup of $B$ closed under the $A$-action, because $a\cdot x=ax$ is a product of two elements of $C$; so $C$ is an $A$-submodule of the Noetherian $A$-module $B$ and is therefore finitely generated as an $A$-module, that is, module-finite over $A$. [L5, L7, step 1.1, given]

2.3 Third clause. Let $M$ be a finitely generated $B$-module, say generated over $B$ by $u_1,\ldots,u_n$, and let $b_1,\ldots,b_m$ generate $B$ over $A$. The $mn$ products $b_iu_j$ generate $M$ as an $A$-module, so $M$ is a finitely generated $A$-module and hence a Noetherian $A$-module. [L1, L3, L8, step 1.1]

3.1 Step 2.2 makes $C$ a commutative $A$-algebra, through the inclusion $A\subseteq C$, that is module-finite over $A$; steps 1.1 and 2.1 were proved for an arbitrary such algebra, so applying them with $B'=C$ makes $C$ a Noetherian ring. With steps 2.1 and 2.3 this establishes all three clauses. [step 2.1, step 2.2, step 2.3] ∎

## Remarks

- **The intermediate-ring clause is the one that gets used.** It says nothing about $C$ being of finite type over $A$ as an algebra, only that it is module-finite, which is stronger; the Artin–Tate lemma is what handles the situation where only $C$ sits between $A$ and a finite-type algebra without $B$ being module-finite over $A$.

- **Module-finite is strictly stronger than finite type here.** A finite-type algebra over a Noetherian ring is Noetherian as well, but its ideals need not be finitely generated over the base ring, and the argument of step 2.1 would not run.

- **The hypothesis that $A$ is a subring is used only in the second clause.** Clauses 1 and 3 need no injectivity of $\eta_B$.
