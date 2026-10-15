---
id: lem-hh-regular-trace-criterion-in-characteristic-zero
kind: lemma
title: "A nondegenerate regular-trace pairing forces semisimplicity"
status: draft
origin: pipeline
pipeline_run: hopf-hecke-unfinished-15-2026-10-15
dependency_level: 1
deps: [def-algebra-over-a-commutative-ring, def-hh-specialization-and-regular-trace-determinant, def-semisimple-module, def-simple-module, lem-hh-finite-matrix-and-module-preliminaries]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Arun Ram, Lectures in Representation Theory, Lecture 5"
      url: "https://soimeme.org/~arunram/Notes/LIRTLecture5.html"
      locator: "Theorem 1.41 and Definition 1.44: the finite-dimensional regular trace and its Gram form; the local item supplies the complete radical argument."
    - title: "Maarten Solleveld, Affine Hecke Algebras and Their Representations"
      url: "https://www.math.ru.nl/~solleveld/surveyHecke.pdf"
      locator: "§1.1, PDF p. 5: finite-dimensional Hecke semisimplicity and the Jacobson-radical formulation; the local item proves the criterion used here."
axiom_use: "No arbitrary Choice. The finite maximal-left-ideal descent has at most dim_K(H) witness selections."
---

## Statement

Let $K$ be a field and $H=H_\phi$ a finite-dimensional field specialization from [[def-hh-specialization-and-regular-trace-determinant]]. For $x\in H$, let $L_x:H\to H$ be left multiplication and define $B(x,y):=\operatorname{Tr}_K(L_{xy})$. The pairing $B$ is **nondegenerate** if $B(x,y)=0$ for every $y\in H$ implies $x=0$. If $B$ is nondegenerate, then the left regular $H$-module is semisimple, meaning an internal direct sum of simple left submodules ([[def-semisimple-module]]). This implication holds over every field; no converse is asserted.

## Facts & Assumptions

**Given:** A field $K$, a finite-dimensional unital $K$-algebra $H=H_\phi$, and the regular-trace pairing $B(x,y)=\operatorname{Tr}_K(L_{xy})$.

[F1] $H_\phi$ is a finite-dimensional algebra with regular-trace pairing $B(x,y)=\operatorname{Tr}_K(L_{xy})$ ([[def-hh-specialization-and-regular-trace-determinant]]).

[F2] A finite-dimensional module has a maximal proper submodule when nonzero, and iterating gives a finite composition series ([[lem-hh-finite-matrix-and-module-preliminaries]]).

[F3] A submodule of a finite direct sum of simple modules is isomorphic to a direct sum of a subfamily and has a complement ([[lem-hh-finite-matrix-and-module-preliminaries]]).

[F4] A nilpotent endomorphism of a finite-dimensional vector space has trace zero ([[lem-hh-finite-matrix-and-module-preliminaries]]).

[F5] A module is semisimple when it is an internal direct sum of simple submodules ([[def-semisimple-module]]).

[F6] A simple left module is nonzero and has no proper nonzero submodule ([[def-simple-module]]).

## Proof

**Proof technique:** direct.

1.1 By [F1], $H$ is finite-dimensional and $B$ is its regular-trace pairing. Define $J:=\bigcap_S\operatorname{Ann}_H(S)$, intersecting over all simple left $H$-modules as in [F6]. This equals the intersection of all maximal left ideals: if $a$ lies in every maximal left ideal and $s\ne0$ lies in a simple module $S$, the map $H\to S$, $x\mapsto xs$, is onto and its kernel is maximal, so $as=0$; conversely, if $a$ annihilates every simple module then it kills $1+M$ in each simple quotient $H/M$, so $a\in M$ for every maximal left ideal $M$. In particular $J$ is a two-sided ideal. [given, F1, F6, algebra]

1.2 By [F2], choose a finite composition series $0=M_0\subsetneq M_1\subsetneq\cdots\subsetneq M_r=H$ of the left regular module. Since $J$ annihilates each simple factor $M_i/M_{i-1}$, $JM_i\subseteq M_{i-1}$ for every $i$. Repeating this inclusion gives $J^rH=0$, and then $J^r=0$ because $1\in H$. [given, F2, algebra]

2.1 Starting with $K_0=H$, if $K_i\ne J$ choose $x_i\in K_i\setminus J$. The equality in step 1.1 gives a maximal left ideal $N_i$ not containing $x_i$; then $K_{i+1}:=K_i\cap N_i$ contains $J$ and has strictly smaller $K$-dimension than $K_i$. Thus after at most $\dim_K H$ steps the intersection is $J$. This finite descent selects finitely many maximal left ideals and uses no arbitrary Choice. [given, step 1.1, algebra, choose]

2.2 For $j\in J$ and $b\in H$, the two-sided-ideal property gives $jb\in J$; by step 1.2, $(jb)^r=0$. Hence $L_{jb}^r=L_{(jb)^r}=0$, so [F4] gives $B(j,b)=\operatorname{Tr}_K(L_{jb})=0$ for every $b\in H$. [step 1.2, F1, F4, algebra]

3.1 The map $H/J\to\bigoplus_i H/N_i$ sending $x+J$ to $(x+N_i)_i$ is an injective $H$-module homomorphism: its kernel is $(\bigcap_iN_i)/J=0$, and each quotient $H/N_i$ is simple by [F6]. By [F3] its image is semisimple, so $H/J$ is semisimple. [step 2.1, F3, F6, algebra]

4.1 Nondegeneracy of $B$ and step 2.2 imply $j=0$ for every $j\in J$, hence $J=0$. Therefore $H\cong H/J$ is semisimple by step 3.1 and [F5]. No separable-division-algebra trace converse is used. [given, step 3.1, step 2.2, F5, algebra] ∎