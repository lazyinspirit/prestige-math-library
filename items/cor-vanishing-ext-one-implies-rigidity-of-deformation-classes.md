---
id: "cor-vanishing-ext-one-implies-rigidity-of-deformation-classes"
kind: "corollary"
title: "Vanishing of the deformation tangent space forces rigidity of deformation classes"
status: draft
origin: pipeline
pipeline_run: "frontier-40-geometry-braids-rep-27"
dependency_level: 16
justified_by: []
aliases: []
deps:
  - "def-cotangent-complex-of-a-scheme-morphism"
  - "def-ext-groups-of-the-cotangent-complex"
  - "thm-obstructions-lie-in-ext-two-cotangent-complex"
  - "def-infinitesimal-deformation-functor-over-square-zero-extension"
  - "def-square-zero-extension-and-small-extension"
  - "def-artinian-ring"
  - "def-local-ring"
  - "def-flat-morphism-schemes"
  - "def-locally-finite-presentation-morphism"
  - "def-axiom-of-choice"
  - "thm-choice-implies-dependent-implies-countable-choice"
proof_strategy: "induction"
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
verification:
  precheck: "pass"
sources:
  references:
    - title: "The Stacks Project, derived pullback and pushforward adjunction"
      url: "https://stacks.math.columbia.edu/tag/079W"
      locator: "Lemma 20.28.1 and its proof via Derived Categories Lemma 13.30.3: derived pullback is left adjoint to derived pushforward. Read 2026-10-06."
    - title: "The Stacks Project, The Cotangent Complex, complete chapter (Chapter 92)"
      url: "https://stacks.math.columbia.edu/download/cotangent.pdf"
      locator: "Lemma 92.21.1 (tag 08UZ) and Lemma 92.16.1 (tag 08SP): the lifting torsor is principal homogeneous under Ext^1, so vanishing kills all deformation classes (printed pages 25-33, read 2026-10-05)"
    - title: "Edoardo Sernesi, An overview of classical deformation theory"
      url: "http://www.mat.uniroma3.it/users/sernesi/sernesioverviewdefth.pdf"
      locator: "Sections 2a-2b (pp. 4-6): if H^1(X,Theta_X)=0 then every infinitesimal deformation of X is trivial, and P^r is rigid (read 2026-10-05)"
---

## Statement

Assume the Axiom of Choice (supplying Dependent Choice, [[def-axiom-of-choice]],
[[thm-choice-implies-dependent-implies-countable-choice]]). Let $k$ be a field
and let $X$ be a quasi-compact, separated $k$-scheme, flat and locally of finite
presentation over $k$ ([[def-flat-morphism-schemes]]), with
$$\operatorname{Ext}^1_{\mathcal O_X}(L_{X/k},\mathcal O_X)=0.$$
Then for every local Artin $k$-algebra $A$ with residue field $k$
([[def-artinian-ring]], [[def-local-ring]]) the deformation groupoid
$\operatorname{Def}_X(A)$ has exactly one isomorphism class: every deformation of
$X$ over $\operatorname{Spec}A$ is isomorphic to the trivial deformation
$X\times_k\operatorname{Spec}A$
([[def-infinitesimal-deformation-functor-over-square-zero-extension]]).
Equivalently $X$ is rigid up to isomorphism. The conclusion concerns
isomorphism classes only: the first-order infinitesimal automorphism group
is $\operatorname{Ext}^0_{\mathcal O_X}(L_{X/k},\mathcal O_X)$, which need not
vanish, so the deformation groupoid is not trivial in general (see the companion
counterexample).

## Facts & Assumptions

**Given:** a field $k$, a quasi-compact separated flat locally finitely presented $k$-scheme $X$ with $\operatorname{Ext}^1_{\mathcal O_X}(L_{X/k},\mathcal O_X)=0$, and the Axiom of Choice.

[F1] For a small extension $A'\to A$ and a specified deformation $Y$ over $A$, the relative lifts fixing the entire $A$-scheme $Y$ form, when nonempty, a torsor on isomorphism classes under $\operatorname{Ext}^1_{\mathcal O_Y}(L_{Y/A},\mathcal O_Y\otimes_AI)$. ([[def-infinitesimal-deformation-functor-over-square-zero-extension]], [[thm-obstructions-lie-in-ext-two-cotangent-complex]])

[F2] Every surjection $A'\to A$ of local Artin $k$-algebras with residue field $k$ factors as a composition of small extensions, and $\mathfrak m_{A'}^N=0$ for some $N$; the intermediate quotient rings are again local Artin $k$-algebras with residue field $k$. ([[def-square-zero-extension-and-small-extension]], [[def-artinian-ring]])

[F3] $\operatorname{Ext}^1_{\mathcal O_X}(L_{X/k},\mathcal O_X\otimes_kI)\cong\operatorname{Ext}^1_{\mathcal O_X}(L_{X/k},\mathcal O_X)\otimes_kI=0$ for a finite-dimensional $k$-vector space $I$: tensoring a complex with a finite-dimensional vector space is a finite direct sum, and Ext commutes with finite direct sums. ([[def-infinitesimal-deformation-functor-over-square-zero-extension]], [[thm-obstructions-lie-in-ext-two-cotangent-complex]])

[F4] For $A=k$ the only deformation of $X$ over $\operatorname{Spec}k$ is $X$ itself, so $\operatorname{Def}_X(k)$ has exactly one isomorphism class, and the trivial deformation over any $A$ exists. ([[def-infinitesimal-deformation-functor-over-square-zero-extension]])

## Proof

**Proof technique:** induct on the length of $A$ using the factorization into small extensions; at each step the fibre over the trivial class is a nonempty torsor under a vanishing Ext^1 group.

1.1 Base case. For $A=k$ a deformation of $X$ over $\operatorname{Spec}k$ is a scheme $X'$ flat and locally finitely presented over $k$ isomorphic to $X$; hence $\operatorname{Def}_X(k)$ has exactly one isomorphism class, the trivial one. [F4, given] [base]

1.2 Inductive hypothesis. Let $n\ge1$ and assume that for every local Artin $k$-algebra $B$ with residue field $k$ and length $n$, every deformation of $X$ over $B$ is isomorphic to the trivial deformation. [F2, given] [ih]

2.1 Inductive step. Let $A'$ have length $n+1>1$. Its maximal ideal $\mathfrak m$ is nonzero and nilpotent by [F2]. Choose the last nonzero power $\mathfrak m^r$ and a nonzero $v\in\mathfrak m^r$; then $\mathfrak m v=0$, so $I=kv$ is an ideal of $A'$ of length one. Since $I\subseteq\mathfrak m$ and $\mathfrak m I=0$, also $I^2=0$. The quotient $A=A'/I$ has length $n$, and $A'\to A$ is a small extension. The reduction $\bar\xi$ of a deformation $\xi$ over $A'$ is trivial by step 1.2. Fix an isomorphism of this reduction with $X\times_k\operatorname{Spec}A$. The trivial deformation over $A'$ is one relative lift of that specified $A$-deformation, so the set of relative lifts fixing it is nonempty. For the trivial family $Y=X\times_k\operatorname{Spec}A$, flat base change gives $L_{Y/A}\simeq L_{X/k}\otimes_kA$ ([[def-cotangent-complex-of-a-scheme-morphism]]). The coefficient sheaf is the pushforward of $\mathcal O_X\otimes_kI$ from the closed special fibre $i:X\to Y$. The derived pullback/pushforward adjunction, Stacks tag 079W, gives $\operatorname{Ext}^q_Y(L_{Y/A},i_*M)\cong\operatorname{Ext}^q_X(Li^*L_{Y/A},M)$ for every $q$. Here $Ri_*M=i_*M$ because the closed special fibre has the same underlying topological space as $Y$, so $i_*$ is exact restriction of scalars. Also $Li^*L_{Y/A}\simeq L_{X/k}$ by the flat-base-change identification and its special-fibre restriction. This uses the derived adjunction; exactness of $i_*$ alone does not imply that it preserves injectives. Therefore the isomorphism classes in this relative lift fibre form a torsor under $\operatorname{Ext}^1_{\mathcal O_X}(L_{X/k},\mathcal O_X\otimes_kI)=0$ by [F3], and hence have a single element. Forgetting the chosen reduction isomorphism shows that $\xi$ is trivial. This proves the inductive step. [F1, F2, F3, step 1.2, choose]

3.1 Conclusion of the induction. Steps 1.1 and 2.1 show that the statement holds for local Artin $k$-algebras of residue field $k$ and every positive length $n$, hence for every local Artin $k$-algebra $A$ with residue field $k$: all deformations of $X$ over $\operatorname{Spec}A$ are isomorphic to the trivial deformation. The conclusion is about isomorphism classes; the first-order infinitesimal automorphism group is $\operatorname{Ext}^0$, which is not assumed to vanish, so the groupoid itself need not be trivial. The Axiom of Choice is used only through the declared deformation-theoretic supplier. [F1, F4, step 2.1] [discharge-induction] ∎
