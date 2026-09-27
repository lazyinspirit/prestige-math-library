---
id: ex-zariski-main-finite-morphism-factorization
kind: example
title: A finite algebra is its own Zariski Main factor
status: published
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-finite-type-and-module-finite-algebras, def-integral-element-and-algebraic-integer, def-integral-subalgebra-of-an-arbitrary-ring-map, thm-integrality-and-finite-module-equivalences, def-prime-and-maximal-ideals, def-principal-localisation, cor-spectrum-is-a-contravariant-topological-functor, lem-zariski-closed-set-axioms, lem-distinguished-subset-identities, thm-algebraic-zariski-main-localization, thm-quasi-finite-algebra-open-finite-factorization, def-axiom-of-choice]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Commutative Algebra, Section 10.123, Theorem 10.123.12 and Lemma 10.123.14 in the case of a finite algebra"
      url: "https://stacks.math.columbia.edu/tag/00PI"
      locator: "Section 10.123, Theorem 10.123.12 and Lemma 10.123.14"
    - title: "J. S. Milne, A Primer of Commutative Algebra, version 4.03, Corollary 17.12"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
      locator: "Section 17, Corollary 17.12"
verification:
  audited: 2026-09-27
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $R\to S$ be a ring
map such that $S$ is a finite $R$-algebra, that is module-finite over $R$
([[def-finite-type-and-module-finite-algebras]]). Then:

1. The integral closure $S'=\operatorname{Int}_R(S)$ of the image of $R$ in $S$
   ([[def-integral-subalgebra-of-an-arbitrary-ring-map]]) is all of $S$.

2. In the local form of Zariski's main theorem
   ([[thm-algebraic-zariski-main-localization]]) the element $g:=1$ witnesses
   the conclusion at every prime: $1\notin\mathfrak q$ for every
   $\mathfrak q\in\operatorname{Spec}(S)$ and
   $$ S'_1=S_1=S=S_1. $$

3. In the finite factorization theorem
   ([[thm-quasi-finite-algebra-open-finite-factorization]]) one may take
   $T:=S$: this is a finite $R$-subalgebra of $S'$ that equals $S'$, the
   contraction map $\operatorname{Spec}(S)\to\operatorname{Spec}(T)$ is the
   identity of $\operatorname{Spec}(S)$, its image $\operatorname{Spec}(S)$ is
   open, and the cover of the theorem may be the single principal open
   $D_T(1)=\operatorname{Spec}(T)$ ([[lem-distinguished-subset-identities]]).

Thus for a module-finite algebra the local element, the finite factor and the
open piece are the trivial ones: the relative integral closure is the whole
algebra, nothing needs to be inverted, and the factorization is the identity.
The Axiom of Choice is inherited from the two general theorems cited in parts
2 and 3; the direct verification below uses the finite-module criterion for
integrality and requires no choice.

## Facts & Assumptions

**Given:** A ring map $R\to S$ such that $S$ is module-finite over $R$, i.e. a finite $R$-algebra, with $A=\operatorname{Im}(R)\subseteq S$ the image of the structure map, and the Axiom of Choice.

[L1] An $R$-algebra $A$ is module-finite over $R$ when it is finitely generated as an $R$-module ([[def-finite-type-and-module-finite-algebras]]).

[L2] An element $b$ of a commutative ring $B$ is integral over a subring $A\subseteq B$ when it is a root of a monic polynomial in $A[X]$ ([[def-integral-element-and-algebraic-integer]]).

[L3] The **Axiom of Choice** (AC) is the statement that every family of nonempty sets has a choice function ([[def-axiom-of-choice]]).

[L4] Let $A\subseteq B$ be commutative rings with $A\ne0$ and $b\in B$. Then $b$ is integral over $A$ if and only if there exists a faithful $A[b]$-module that is finitely generated over $A$, faithfulness meaning that $rM=0$ implies $r=0$ for $r\in A[b]$ ([[thm-integrality-and-finite-module-equivalences]]).

[L5] For a unital ring map $R\to S$ the relative integral closure $\operatorname{Int}_R(S)$ is the subring of $S$ of elements integral over the map; it contains the image of $R$ and is exactly the integral closure of that image in $S$ ([[def-integral-subalgebra-of-an-arbitrary-ring-map]]).

[L6] A proper ideal $P\subsetneq R$ is prime when $ab\in P$ implies $a\in P$ or $b\in P$ ([[def-prime-and-maximal-ideals]]).

[L7] For $f\in R$ the principal localisation is $R_f=S_f^{-1}R$ with $S_f=\{1,f,f^2,\ldots\}$; in particular $R_1$ is canonically isomorphic to $R$ ([[def-principal-localisation]]).

[L8] For every ring homomorphism $\varphi:R\to A$ contraction defines a continuous map $\operatorname{Spec}(A)\to\operatorname{Spec}(R)$, and $\operatorname{Spec}$ is a contravariant functor, so the identity ring map induces the identity on spectra ([[cor-spectrum-is-a-contravariant-topological-functor]]).

[L9] The subsets $V(I)$ of $\operatorname{Spec}(R)$ contain $\operatorname{Spec}(R)$ and $\varnothing$ and define a topology on $\operatorname{Spec}(R)$ ([[lem-zariski-closed-set-axioms]]).

[L10] For $f\in R$ one has $D(0)=\varnothing$ and $D(1)=\operatorname{Spec}(R)$, and $D(fg)=D(f)\cap D(g)$ ([[lem-distinguished-subset-identities]]).

[L11] Assume the Axiom of Choice. For a finite type map $R\to S$ quasi-finite at $\mathfrak q\in\operatorname{Spec}(S)$ there is $g\in S'\setminus\mathfrak q$ with $S'\to S$ inducing an isomorphism $S'_g\cong S_g$ ([[thm-algebraic-zariski-main-localization]]).

[L12] Assume the Axiom of Choice. For a finite type map $R\to S$ quasi-finite at every prime, with $S'$ the integral closure of the image of $R$ in $S$, there are a finite $R$-subalgebra $T\subseteq S'$ and finitely many $g_1,\ldots,g_n\in T$ with the contraction map $\operatorname{Spec}(S)\to\operatorname{Spec}(T)$ a homeomorphism onto the open set $U=D_T(g_1)\cup\cdots\cup D_T(g_n)$, $T_{g_i}\cong S_{g_i}$, and $T_g\cong S_g$ whenever $D_T(g)\subseteq U$ ([[thm-quasi-finite-algebra-open-finite-factorization]]).

## Proof

**Proof technique:** direct.

1.1 We assume the Axiom of Choice as recorded in [L3]. By hypothesis $S$ is finitely generated as an $R$-module by [L1], and $A=\operatorname{Im}(R)\subseteq S$ is the image of the structure map. If $A=0$ then $1_S=\varphi(1_R)=0$, so $S=0$ and every element of $S$ is trivially integral over $R$; assume from now on that $A\ne0$. [given, L1, L3]

2.1 Fix $b\in S$. Then $S$ is an $A[b]$-module through the subalgebra $A[b]\subseteq S$, and it is finitely generated over $A$ because it is finitely generated over $R$ and $A$ is a quotient of $R$: the same finite generating set works. Moreover $S$ is a faithful $A[b]$-module, because $rS=0$ for $r\in A[b]$ forces $r=r\cdot1_S=0$. By [L4] applied to $A\subseteq S$ and the element $b$, the element $b$ is integral over $A$ in the sense of [L2]. As $b\in S$ was arbitrary, every element of $S$ is integral over the map $R\to S$, and since $S'=\operatorname{Int}_R(S)$ consists exactly of those elements by [L5], we get $S'=S$. This is part 1. [given, step 1.1, L1, L2, L4, L5]

3.1 For part 2 let $\mathfrak q\in\operatorname{Spec}(S)$. Since $\mathfrak q$ is a proper ideal by [L6] we have $1\notin\mathfrak q$; and $S'=S$ by step 2.1, so $S'_1=S_1=S=S_1$ by [L7]. Hence the triple $(S',g)=(S,1)$ satisfies the conclusion of [L11] at every prime $\mathfrak q$: the localisation $S'\to S$ at the element $1$ is an isomorphism. [given, step 2.1, L6, L7, L11]

3.2 For part 3 put $T:=S$. Then $T$ is module-finite over $R$ by [L1], that is a finite $R$-algebra, and $T=S=S'$ is a finite $R$-subalgebra of $S'$ by step 2.1. The contraction map $\operatorname{Spec}(S)\to\operatorname{Spec}(T)$ induced by the identity ring map $S\to T=S$ is the identity of $\operatorname{Spec}(S)$ by [L8], its image $\operatorname{Spec}(S)$ is open in itself by [L9], and the single principal open $D_T(1)$ equals $\operatorname{Spec}(T)$ by [L10]. Finally $T_1=T=S=S_1$ by [L7], so the data $T=S$, $n=1$, $g_1=1$, $U=\operatorname{Spec}(T)$ satisfy all the assertions (1) and (2) of [L12]. [given, step 2.1, L1, L7, L8, L9, L10, L12]

4.1 The Axiom of Choice was used only through the two general theorems cited in steps 3.1 and 3.2, namely [L11] and [L12]; the direct verification of parts 1 to 3 above (the finite-module criterion of [L4], the element $1$, the algebra $T=S$, and the identities $S'_1=S_1=S$, $D_T(1)=\operatorname{Spec}(T)$) manipulates finitely many explicit objects and selects nothing. This proves all three parts. ∎ [given, step 2.1, step 3.1, step 3.2, L3, L11, L12]
