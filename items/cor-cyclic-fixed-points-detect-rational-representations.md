---
id: cor-cyclic-fixed-points-detect-rational-representations
kind: corollary
title: "Cyclic fixed-space dimensions detect rational virtual characters"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-rational-character-ring, thm-artin-induction-for-rational-characters, cor-frobenius-reciprocity-for-complex-characters, lem-averaging-operator-projects-onto-the-fixed-subspace, def-g-fixed-subspace-of-a-representation, def-standard-inner-product-on-complex-class-functions, lem-cyclic-generator-class-functions-by-moebius-inversion, thm-transitivity-of-induction-for-finite-groups, thm-frobenius-formula-for-induced-characters]
justified_by: []
aliases: []
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Tammo tom Dieck, Representation Theory, Theorem (4.5.3)"
      url: "https://www.uni-math.gwdg.de/tammo/d01.pdf"
    - title: "Tammo tom Dieck, Representation Theory, Section 4.5"
      url: "https://www.uni-math.gwdg.de/tammo/d01.pdf"
---

## Statement

For each cyclic subgroup $C\le G$, define

$$m_C(x):=\langle \operatorname{Res}_C^Gx,1_C\rangle_C \qquad (x\in R_{\mathbb Q}(G)).$$

Then the family $(m_C(x))_{(C)}$, indexed by conjugacy classes of cyclic
subgroups of $G$, determines $x$ uniquely. In particular, the map

$$R_{\mathbb Q}(G)\longrightarrow \prod_{(C)}\mathbb Q,\qquad x\longmapsto (m_C(x))_{(C)}$$

is injective. For an honest $\mathbb Q$-representation $V$, one has
$m_C(\chi_V)=\dim V^C$.

## Facts & Assumptions

**Given:** A finite group $G$, an element $x\in R_{\mathbb Q}(G)$, and a cyclic subgroup $C\le G$.

[F1] The standard inner product on class functions is Hermitian, with linearity in the first argument and conjugate-linearity in the second, and it is positive definite. On rational-valued class functions its restriction is symmetric and $\mathbb Q$-bilinear ([[def-standard-inner-product-on-complex-class-functions]]).

[F2] Frobenius reciprocity gives $$\langle \operatorname{Ind}_H^G\chi,\psi\rangle_G= \langle \chi,\operatorname{Res}_H^G\psi\rangle_H$$ ([[cor-frobenius-reciprocity-for-complex-characters]]).

[F3] For an honest finite-dimensional complex representation $V$, $\langle \operatorname{Res}_C^G\chi_V,1_C\rangle_C=\dim V^C$ ([[lem-averaging-operator-projects-onto-the-fixed-subspace]], [[def-g-fixed-subspace-of-a-representation]]).

[F4] For a finite cyclic group $D$, the generator-indicator class function $\eta_D$ is an integral linear combination of permutation characters induced from subgroups of $D$ ([[lem-cyclic-generator-class-functions-by-moebius-inversion]]).

[F5] Induction is transitive along subgroup chains ([[thm-transitivity-of-induction-for-finite-groups]]).

[F6] Frobenius' formula computes induced character values ([[thm-frobenius-formula-for-induced-characters]]).

[F7] Every element of $R_{\mathbb Q}(G)$ is a rational linear combination of characters induced from cyclic subgroups ([[thm-artin-induction-for-rational-characters]]).

## Proof

**Proof technique:** direct.

1.1 Let $C\le G$ be cyclic, and let $y\in R_{\mathbb Q}(C)$. By [[def-rational-character-ring]], $y$ is an integral linear combination of characters of finite-dimensional $\mathbb Q$-representations of $C$, so it is enough to prove the next claim for one such character and then extend by linearity. Let $\rho:C\to\operatorname{GL}(V)$ be a finite-dimensional $\mathbb Q$-representation with character $y$, let $D\le C$, and let $d,d'$ be generators of $D$. Then $d'=d^u$ for some integer $u$ coprime to $|D|$. Because $d^{|D|}=1$, the matrix $\rho(d)$ has rational entries and satisfies $\rho(d)^{|D|}=I$, so over $\mathbb C$ it is diagonalizable with eigenvalues among the $|D|$-th roots of unity. Because the characteristic polynomial of $\rho(d)$ lies in $\mathbb Q[t]$, those eigenvalues occur with multiplicities stable under the Galois automorphism $\zeta\mapsto\zeta^u$ of the cyclotomic field. Thus the multisets of eigenvalues of $\rho(d)$ and $\rho(d')=\rho(d)^u$ agree, so $y(d')=\operatorname{tr}\rho(d')=\operatorname{tr}\rho(d)=y(d)$. Therefore every $y\in R_{\mathbb Q}(C)$ is constant on the set of generators of each subgroup of $C$. [[def-rational-character-ring]] [given, algebra]

2.1 For each subgroup $D\le C$, choose a generator $d_D$ of $D$ when $D\ne1$ and put $d_1=e$. Writing $b_D:=y(d_D)\in\mathbb Q$, step 1.1 gives $$ |C|y=\sum_{D\le C} b_D\,\widetilde\eta_D, $$ where $\widetilde\eta_D(c)=|C|$ when $\langle c\rangle=D$ and $\widetilde\eta_D(c)=0$ otherwise. [step 1.1, given, choose, construct]

3.1 For each $D\le C$, one has $\widetilde\eta_D=\operatorname{Ind}_D^C\eta_D$. Indeed, if $c\in C$ generates $D$, then $c\in D$ and $C$ is abelian, so [F6] gives $\operatorname{Ind}_D^C\eta_D(c)=|C|$; if $\langle c\rangle\ne D$, then either $c\notin D$ or $c$ does not generate $D$, and the induced value is $0$. Using [F4] inside $D$ and [F5] to induce further to $C$, each $\widetilde\eta_D$ is therefore an integral linear combination of the permutation characters $U_E^C:=\operatorname{Ind}_E^C1_E$ with $E\le D$. Thus every $y\in R_{\mathbb Q}(C)$ is a rational linear combination of the $U_E^C$. [F4, F5, F6, step 2.1, algebra]

4.1 Suppose now that $m_D(x)=0$ for every cyclic subgroup $D\le G$. Let $C\le G$ be cyclic. For each subgroup $E\le C$, the class functions $\operatorname{Res}_C^Gx$ and $U_E^C$ are rational-valued, so [F1] makes their inner product symmetric. Using that symmetry and then Frobenius reciprocity [F2], we get $$ \langle \operatorname{Res}_C^Gx,U_E^C\rangle_C =\langle U_E^C,\operatorname{Res}_C^Gx\rangle_C =\langle 1_E,\operatorname{Res}_E^Gx\rangle_E =\langle \operatorname{Res}_E^Gx,1_E\rangle_E =m_E(x)=0. $$ [F1, F2, step 3.1, given, algebra]

5.1 By step 3.1, every $y\in R_{\mathbb Q}(C)$ is a rational linear combination of the class functions $U_E^C$, and both $\operatorname{Res}_C^Gx$ and $y$ are rational-valued by [[def-rational-character-ring]]. Thus the $\mathbb Q$-bilinearity of [F1] on rational-valued class functions combines with step 4.1 to give $\langle \operatorname{Res}_C^Gx,y\rangle_C=0$ for every $y\in R_{\mathbb Q}(C)$. Applying [F2] again, we get $\langle \operatorname{Ind}_C^Gy,x\rangle_G=0$ for every cyclic subgroup $C\le G$ and every $y\in R_{\mathbb Q}(C)$. [F1, F2, step 3.1, step 4.1, algebra]

6.1 By [F7], the rational virtual character $x$ is itself a rational linear combination of the induced characters $\operatorname{Ind}_C^Gy$ from step 5.1. Linearity of [F1] in the first argument and step 5.1 therefore give $\langle x,x\rangle_G=0$. The positive definiteness in [F1] forces $x=0$. Therefore the map $x\mapsto(m_C(x))_{(C)}$ is injective. [F1, F7, step 5.1, algebra]

7.1 For an honest $\mathbb Q$-representation $V$, the equality $m_C(\chi_V)=\dim V^C$ is exactly [F3]. [F3, step 6.1] ∎
