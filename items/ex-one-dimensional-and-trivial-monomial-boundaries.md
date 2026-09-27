---
id: ex-one-dimensional-and-trivial-monomial-boundaries
kind: example
title: "Trivial and one-dimensional monomial cases"
status: published
origin: pipeline
deps: ["def-monomial-representation-and-m-group", "def-induced-r-linear-g-module-by-h-covariant-functions", "cor-dimension-of-an-induced-finite-dimensional-representation", "def-character-of-a-complex-representation", "def-finite-dimensional-representation-of-a-group-over-a-field", "def-subrepresentation-and-irreducible-representation", "def-irreducible-complex-character", "thm-irreducible-representations-of-a-finite-abelian-group-over-a-splitting-field-are-one-dimensional", "cor-cyclotomic-field-splits-a-finite-group", "cor-the-regular-character-gives-the-sum-of-squares-formula", "def-group"]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Tammo tom Dieck, Representation Theory — §4.3, printed pp. 57–58, and §4.6, printed pp. 64–65"
      url: "https://www.uni-math.gwdg.de/tammo/d01.pdf"
    - title: "Wen-Wei Li, Yanqi Lake Lectures on Algebra I — §12.5, printed pp. 146–148"
      url: "https://www.wwli.asia/downloads/YAlg1.pdf"
verification:
  audited: 2026-09-27
---

## Example

Let $G$ be a finite group. Then:

1. every one-dimensional complex character $\lambda$ of $G$ is monomial
   ([[def-monomial-representation-and-m-group]]), namely
   $\operatorname{Ind}_G^G\lambda=\lambda$, and in particular the trivial
   character of $G$ is monomial;
2. the trivial group is an $M$-group;
3. every finite abelian group is an $M$-group, because all of its irreducible
   complex characters are one-dimensional.

The three cases are the degenerate ends of the theory: subgroups of index one,
the group of order one, and the abelian groups, whose irreducible characters
cannot be induced from any proper subgroup.

## Facts & Assumptions

**Given:** A finite group $G$ with identity element $1$ ([[def-group]]), a one-dimensional complex representation $L$ of $G$ with character $\lambda$ ([[def-character-of-a-complex-representation]]), and the trivial representation $\mathbb C$ of $G$, on which every $g\in G$ acts as the identity.

[F1] For a subgroup $H\le G$ and a complex $H$-module $W$, the induced module is $\operatorname{Ind}_H^GW=\{f:G\to W:f(gh)=h^{-1}\cdot f(g)\text{ for all }g\in G,h\in H\}$ with $(x\cdot f)(g)=f(x^{-1}g)$ and pointwise module operations. ([[def-induced-r-linear-g-module-by-h-covariant-functions]]).

[F2] A linear character of $H$ is a homomorphism $\lambda:H\to\mathbb C^\times$, equivalently the character of a one-dimensional complex representation of $H$; a character $\chi$ of $G$ is monomial if $\chi=\operatorname{Ind}_H^G\lambda$ for some $H\le G$ and linear character $\lambda$ of $H$; $G$ is an $M$-group if every irreducible complex character of $G$ is monomial; and a nonzero representation is monomial exactly when its character is. ([[def-monomial-representation-and-m-group]]).

[F3] A complex representation of $G$ is a group homomorphism $G\to\operatorname{GL}_{\mathbb C}(V)$ on a finite-dimensional complex vector space $V$, and it is irreducible exactly when $V\ne0$ and $0$ and $V$ are its only invariant subspaces. ([[def-finite-dimensional-representation-of-a-group-over-a-field]], [[def-subrepresentation-and-irreducible-representation]]).

[F4] Every irreducible representation of a finite abelian group over a splitting field has degree $1$, and $\mathbb C$ is a splitting field for every finite group. ([[thm-irreducible-representations-of-a-finite-abelian-group-over-a-splitting-field-are-one-dimensional]], [[cor-cyclotomic-field-splits-a-finite-group]]).

[F5] The irreducible complex characters $\chi_1,\dots,\chi_r$ of a finite group $G$ satisfy $\sum_{i=1}^r\chi_i(1)^2=|G|$. ([[cor-the-regular-character-gives-the-sum-of-squares-formula]]).

[F6] For a finite-dimensional $H$-representation $W$ one has $\dim_k\operatorname{Ind}_H^GW=[G:H]\dim_kW$, and the character of an irreducible representation is an irreducible character. ([[cor-dimension-of-an-induced-finite-dimensional-representation]], [[def-irreducible-complex-character]]).

## Verification

**Proof technique:** direct.

1.1 Evaluation at the identity, $\Phi:\operatorname{Ind}_G^GL\to L$, $\Phi(f):=f(1)$, is a $\mathbb C$-linear map of $G$-modules. It is $\mathbb C$-linear because the module operations on $\operatorname{Ind}_G^GL$ are pointwise by [F1]; and for $f\in\operatorname{Ind}_G^GL$ and $x\in G$ one has $\Phi(x\cdot f)=(x\cdot f)(1)=f(x^{-1})=x\cdot f(1)=x\cdot\Phi(f)$, where the covariance law of [F1] with $g=1$ and $h=x^{-1}$ gives $f(x^{-1})=f(1\cdot x^{-1})=(x^{-1})^{-1}\cdot f(1)=x\cdot f(1)$. [F1, given]

2.1 The map $\Phi$ is bijective. For $v\in L$ define $f_v:G\to L$ by $f_v(g):=g^{-1}\cdot v$; then $f_v(gh)=(gh)^{-1}\cdot v=h^{-1}\cdot(g^{-1}\cdot v)=h^{-1}\cdot f_v(g)$ for all $g\in G$ and $h\in H=G$, so $f_v\in\operatorname{Ind}_G^GL$ by [F1], and $\Psi(v):=f_v$ is $\mathbb C$-linear and $G$-equivariant because $f_{x\cdot v}(g)=g^{-1}\cdot(x\cdot v)=(x\cdot f_v)(g)$. Moreover $\Phi(\Psi(v))=f_v(1)=v$, and for $f\in\operatorname{Ind}_G^GL$ the same covariance law with $g=1$, $h=g$ gives $f(g)=f(1\cdot g)=g^{-1}\cdot f(1)=f_{f(1)}(g)$, that is $\Psi(\Phi(f))=f$. Hence $\Psi=\Phi^{-1}$ and $\operatorname{Ind}_G^GL\cong L$ as $G$-modules, so their characters agree: $\operatorname{Ind}_G^G\lambda=\lambda$. The degrees match, since $\dim_{\mathbb C}\operatorname{Ind}_G^GL=[G:G]\dim_{\mathbb C}L=1$ by [F6]. [F1, F6, step 1.1, construct]

3.1 By step 2.1 every one-dimensional complex character $\lambda$ of $G$ is monomial in the sense of [F2], with $H=G$ and $\operatorname{Ind}_G^G\lambda=\lambda$. In particular the trivial character $1_G$, the character of the trivial representation $\mathbb C$ of $G$, is one-dimensional and hence monomial; the trivial representation is irreducible because a one-dimensional space has no nonzero proper subspace, so $0$ and $\mathbb C$ are its only invariant subspaces by [F3]. [F2, F3, step 2.1]

4.1 For the trivial group $G=\{1\}$ one has $|G|=1$, so $\sum_i\chi_i(1)^2=1$ over the irreducible complex characters by [F5]; each term $\chi_i(1)^2$ is a positive integer, so the sum has exactly one term and $\chi_1(1)=1$. Hence $\{1\}$ has exactly one irreducible complex character, of degree one, and it is monomial by step 3.1; by [F2] the trivial group is an $M$-group. [F2, F5, step 3.1]

5.1 For a finite abelian group $A$, the field $\mathbb C$ is a splitting field for $A$ by [F4], so every irreducible complex representation of $A$ has degree $1$ by [F4]; hence every irreducible complex character of $A$ is a one-dimensional character and is monomial by step 3.1, so $A$ is an $M$-group by [F2]. Moreover [F5] now evaluates to $|A|=\sum_i1=|{\operatorname{Irr}}(A)|$, so a finite abelian group has exactly $|A|$ irreducible characters, all of them linear and monomial; the cases $|A|=1$ and $|A|=2$ are the extremes, the former being step 4.1. [F2, F4, F5, step 3.1, algebra]

6.1 All three assertions hold: every one-dimensional character of a finite group is induced from the group itself and is monomial, the trivial group is an $M$-group, and every finite abelian group is an $M$-group. The construction involves no proper subgroup and no choice: for $H=G$ the module $\operatorname{Ind}_G^GL$ is explicitly identified with $L$ by evaluation at $1$, with inverse $v\mapsto f_v$, and the only groups used have a specified single irreducible character or are handled by the degree count $\sum_i\chi_i(1)^2=|A|$ of [F5]. [F5, step 1.1, step 2.1, step 3.1, step 4.1, step 5.1] ∎
