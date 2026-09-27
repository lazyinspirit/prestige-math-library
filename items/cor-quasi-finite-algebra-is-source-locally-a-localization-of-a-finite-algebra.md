---
id: cor-quasi-finite-algebra-is-source-locally-a-localization-of-a-finite-algebra
kind: corollary
title: Quasi-finite algebras are source locally localizations of finite algebras
status: draft
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-quasi-finite-at-a-prime-for-finite-type-algebras, def-finite-type-and-module-finite-algebras, def-integral-subalgebra-of-an-arbitrary-ring-map, thm-quasi-finite-algebra-open-finite-factorization, def-principal-localisation, def-axiom-of-choice]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Commutative Algebra, Section 10.123, Lemma 10.123.14 (1) and (2)"
      url: "https://stacks.math.columbia.edu/tag/00PI"
      locator: "Section 10.123, Lemma 10.123.14"
    - title: "J. S. Milne, A Primer of Commutative Algebra, version 4.03, Corollary 17.12"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
      locator: "Section 17, Corollary 17.12"
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $R\to S$ be a ring
map of finite type ([[def-finite-type-and-module-finite-algebras]]) that is
quasi-finite at every prime of $S$
([[def-quasi-finite-at-a-prime-for-finite-type-algebras]]), and let
$S'\subseteq S$ be the integral closure of the image of $R$ in $S$
([[def-integral-subalgebra-of-an-arbitrary-ring-map]]). Then for every prime
$\mathfrak q\in\operatorname{Spec}(S)$ there are a finite $R$-subalgebra
$T\subseteq S'$, module-finite over $R$, and an element $g\in T$ with
$g\notin\mathfrak q$ such that the inclusion $T\to S$ induces an isomorphism
$$ T_g\xrightarrow{\ \cong\ }S_g $$
of principal localisations ([[def-principal-localisation]]).

In other words, on the source every point of a quasi-finite finite-type
algebra has an open neighbourhood, the principal open $D_S(g)$, on which the
algebra is a principal localisation of a finite algebra, and this already
happens inside the relative integral closure. The element $g$ lies in the
finite intermediate algebra $T$ and need not be the image of an element of
$R$: the corollary is a statement about the source, and it makes no
base-principal or globally finite claim. The Axiom of Choice is inherited from
the factorization theorem
[[thm-quasi-finite-algebra-open-finite-factorization]] used in the proof, whose
finite cover it reuses.

## Facts & Assumptions

**Given:** A ring map $R\to S$ of finite type that is quasi-finite at every prime of $S$, the relative integral closure $S'=\operatorname{Int}_R(S)\subseteq S$ of the image of $R$ in $S$, a prime $\mathfrak q\in\operatorname{Spec}(S)$, and the Axiom of Choice.

[L1] The map $R\to S$ is quasi-finite when it is of finite type and quasi-finite at every prime of $S$, where quasi-finiteness at $\mathfrak q$ is finiteness of $S_{\mathfrak q}/\mathfrak pS_{\mathfrak q}$ over $\kappa(\mathfrak p)$ ([[def-quasi-finite-at-a-prime-for-finite-type-algebras]]).

[L2] An $R$-algebra $A$ is of finite type over $R$ when $A=R[a_1,\ldots,a_n]$ for finitely many elements, and module-finite over $R$ when it is finitely generated as an $R$-module ([[def-finite-type-and-module-finite-algebras]]).

[L3] For a unital ring map $R\to S$ the relative integral closure $\operatorname{Int}_R(S)$ is an $R$-subalgebra of $S$ containing the image of $R$, namely the set of elements integral over the map ([[def-integral-subalgebra-of-an-arbitrary-ring-map]]).

[L4] Assume the Axiom of Choice. If $R\to S$ is of finite type and quasi-finite at every prime of $S$ and $S'$ is the integral closure of the image of $R$ in $S$, then there are a finite $R$-subalgebra $T\subseteq S'$, module-finite over $R$, and finitely many elements $g_1,\ldots,g_n\in T$ such that $U=D_T(g_1)\cup\cdots\cup D_T(g_n)$ is open in $\operatorname{Spec}(T)$, the contraction map $\operatorname{Spec}(S)\to\operatorname{Spec}(T)$ is a homeomorphism onto $U$, $T_{g_i}\cong S_{g_i}$ for every $i$, and for every $g\in T$ with $D_T(g)\subseteq U$ the inclusion induces an isomorphism $T_g\to S_g$ ([[thm-quasi-finite-algebra-open-finite-factorization]]).

[L5] For $f$ in a commutative ring $R$ the principal localisation is $R_f=S_f^{-1}R$ with $S_f=\{1,f,f^2,\ldots\}$, and its elements may be written $r/f^n$ ([[def-principal-localisation]]).

[L6] The **Axiom of Choice** (AC) is the statement that every family of nonempty sets has a choice function ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

1.1 We assume the Axiom of Choice as recorded in [L6]. The hypothesis on $R\to S$ together with [L2] says that $S$ is a finitely generated $R$-algebra and that the quasi-finiteness condition of [L1] holds at every prime of $S$, so the factorization theorem [L4] applies; the relative integral closure $S'$ is an $R$-subalgebra of $S$ by [L3]. [given, L1, L2, L3, L4, L6]

2.1 Fix $\mathfrak q\in\operatorname{Spec}(S)$. By step 1.1 and [L4] there are a finite $R$-subalgebra $T\subseteq S'$, module-finite over $R$, and finitely many elements $g_1,\ldots,g_n\in T$ such that $U=D_T(g_1)\cup\cdots\cup D_T(g_n)$ is an open subset of $\operatorname{Spec}(T)$ onto which the contraction map $\operatorname{Spec}(S)\to\operatorname{Spec}(T)$ is a homeomorphism, and $T_{g_i}\cong S_{g_i}$ for every $i$. [given, step 1.1, L4]

3.1 The image $\mathfrak p:=\mathfrak q\cap T$ of $\mathfrak q$ under the contraction map lies in the image of that homeomorphism, namely $U$; hence $\mathfrak p\in D_T(g_i)$ for some index $i$, that is $g_i\notin\mathfrak p=\mathfrak q\cap T$. Since $g_i\in T\subseteq S$, this means $g_i\notin\mathfrak q$. [given, step 2.1, L4]

4.1 For this index $i$ the inclusion $T\subseteq S$ induces an isomorphism $T_{g_i}\to S_{g_i}$. Indeed $D_T(g_i)\subseteq U$ because $U$ is the union of the $D_T(g_j)$, and $T_{g_i}\cong S_{g_i}$ is also one of the conclusions of step 2.1; either form of the factorization theorem gives the isomorphism, the first by its local form and the second by its cover statement. [given, step 2.1, step 3.1, L4]

5.1 Taking $g:=g_i\in T$ we have produced a finite $R$-subalgebra $T\subseteq S'$ that is module-finite over $R$ and an element $g\in T$ with $g\notin\mathfrak q$ such that $T_g\cong S_g$; by [L5] these are principal localisations, so the source principal open $D_S(g)$ has algebra $S_g\cong T_g$ over $R$. No step uses that $g$ lies in the image of $R$, and none asserts finiteness of $S$ or of $T_g$ over $R$ beyond the module-finiteness of $T$, so no base-principal or globally finite statement is claimed. [given, step 1.1, step 3.1, step 4.1, L5]

6.1 The Axiom of Choice was used only in step 2.1, through the factorization theorem [L4]; the only other selections are the single index $i$ of step 3.1 and the single element $g$ of step 5.1. This proves the corollary. ∎ [given, step 2.1, step 5.1, L4, L6]
