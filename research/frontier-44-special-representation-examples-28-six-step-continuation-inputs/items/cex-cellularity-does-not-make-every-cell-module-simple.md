---
id: cex-cellularity-does-not-make-every-cell-module-simple
kind: counterexample
title: "Cellularity does not make every cell module simple"
status: draft
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-cellular-algebra-basis-and-cell-module, def-e-regular-and-e-restricted-partitions, def-quantum-characteristic-of-an-invertible-hecke-parameter, def-type-a-hecke-specht-module-and-cell-form, ex-q-schaper-for-shape-three-two-at-e-two, thm-nonzero-cell-heads-classify-the-simple-modules-of-a-cellular-algebra, thm-q-schaper-virtual-radical-layer-formula, thm-simple-type-a-hecke-modules-are-indexed-by-e-regular-partitions]
justified_by: []
aliases: []
landmark: false
dependency_level: 16
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Andrew Mathas, Hecke algebras and Schur algebras of the symmetric group, complete prepublication manuscript (1998; expanded published edition: AMS University Lecture Series 15, 1999); complete 79-page manuscript, SHA-256 8cfeb611a95a3ff25cb95ad22bfd3a68475818301c34b04d131a8480a1b997e0"
      url: "https://web.math.ucsb.edu/~bigelow/books/mathas.pdf"
      locator: "Chapter 2 and Example 5.33, printed pp. 9-16 and 54-60: a cellular algebra need not be semisimple, a cell-form quotient may vanish although the cell module is nonzero, and the reduced Weyl module W^{(3,2)} at e=2 has nonzero radical"
    - title: "Alexander Kleshchev, Representation theory of symmetric groups and related Hecke algebras, arXiv:0909.4844v1, complete 66-page survey"
      url: "https://arxiv.org/abs/0909.4844"
      locator: "Theorem 5.2 and Remark 5.5, printed pp. 22-25: the classification of the nonzero cell-form quotients and the sign-conjugate labelling of the simples"
---

## Statement refuted

A cellular algebra need not be semisimple, its cell modules need not be simple, and a labelled cell-form quotient $D^{\lambda}$ may vanish although the cell module $C^{\lambda}$ is nonzero.

(a) Abstract degenerate instance: let $F$ be a field and $A=F[x]/(x^2)$, with $\Lambda=\{2\rhd1\}$ ordered so that $2\rhd1$, cellular basis $c_{11}:=1$ in cell $1$ and $c_{22}:=x$ in cell $2$ and $i=\mathrm{id}$ ([[def-cellular-algebra-basis-and-cell-module]]). For $a+bx\in A$ one has $1(a+bx)\equiv a\cdot1\pmod{(x)}$ and $x(a+bx)=ax$, so the triangular axiom holds, and $A^{\rhd1}=(x)$, $A^{\rhd2}=0$. The cell form on $C^{2}$ has $c_{22}c_{22}=x^2=0$, so it is identically zero, $\mathrm{rad}\,C^{2}=C^{2}$ and $D^{2}=0$, while both $C^{1}$ and $C^{2}$ are one-dimensional simple modules: on either, $a+bx$ acts as the scalar $a$. In particular the Jacobson radical of $C^{2}$ is zero and its actual head is $C^{2}$, even though its cell-form radical is all of $C^{2}$ and its cell-form quotient is zero: cellularity does not force $D^{\lambda}\ne0$, and the algebra is not semisimple since $\mathrm{rad}\,A=(x)$.

(b) Hecke instance: let $F$ be a field of characteristic $2$ and $q=1$, so $e=\operatorname{char}(F)=2$ ([[def-quantum-characteristic-of-an-invertible-hecke-parameter]]); for $n=3$ and $\lambda=(1,1,1)$ the partition $(1,1,1)$ is not $2$-regular ([[def-e-regular-and-e-restricted-partitions]]), so $D^{(1,1,1)}=0$ while the page's Specht module $S^{(1,1,1)}\cong D^{(3)}$ is the nonzero trivial module (in characteristic $2$ the sign module is trivial) ([[thm-simple-type-a-hecke-modules-are-indexed-by-e-regular-partitions]], [[def-type-a-hecke-specht-module-and-cell-form]]).

(c) Reducible cell module: in the $F=\mathbb C$, $q=-1$, $e=2$ specialization of the example the q-Schur cell module $W^{(3,2)}_F$ satisfies $\sum_{i>0}[W^{(3,2)}_F(i)]=[L^{(3,1^2)}_F]+2[L^{(2^2,1)}_F]\ne0$ ([[thm-q-schaper-virtual-radical-layer-formula]], the calculation of [[ex-q-schaper-for-shape-three-two-at-e-two]]), so its radical is nonzero and $W^{(3,2)}_F$ is reducible even though it has a simple head.

## Facts & Assumptions

**Given:** The three settings above: the algebra $A=F[x]/(x^2)$, the Hecke algebra $H_{F,q}(S_3)$ in characteristic $2$ at $q=1$, and the q-Schur Weyl module $W^{(3,2)}_F$ over $F=\mathbb C$, $q=-1$, at $e=2$.

[F1] ([[def-cellular-algebra-basis-and-cell-module]], [[thm-nonzero-cell-heads-classify-the-simple-modules-of-a-cellular-algebra]]) For a cellular basis, products of two elements of the smaller cell vanish modulo the larger cell exactly when the corresponding form entry vanishes; $D^{\lambda}=C^{\lambda}/\mathrm{rad}\,C^{\lambda}$ is zero if and only if the cell form is identically zero, and only in the nonzero case is $\mathrm{rad}\,C^{\lambda}$ the module-theoretic Jacobson radical and the head quotient.

[F2] ([[def-e-regular-and-e-restricted-partitions]], [[thm-simple-type-a-hecke-modules-are-indexed-by-e-regular-partitions]]) For $F$ of characteristic $2$ and $q=1$ the quantum characteristic is $e=2$, $(1,1,1)$ is not $2$-regular, and $D^{\lambda}\ne0$ exactly for the $e$-regular $\lambda$.

[F3] ([[thm-q-schaper-virtual-radical-layer-formula]], [[ex-q-schaper-for-shape-three-two-at-e-two]]) For the specified $F=\mathbb C$, $q=-1$ lift with $e=2$, the positive Jantzen submodule sum for $W^{(3,2)}_F$ is $[L^{(3,1^2)}_F]+2[L^{(2^2,1)}_F]\ne0$.




## Counterexample

1.1 The abstract instance: in $A=F[x]/(x^2)$ with $c_{11}=1$, $c_{22}=x$ and $2\rhd1$, the product $c_{22}c_{22}=x^2=0$ is congruent to $0\cdot c_{22}$ modulo $A^{\rhd2}=0$, so the axiom holds with zero form value; the products $c_{11}(a+bx)=a+bx\equiv a\,c_{11}\pmod{(x)}$ and $c_{22}(a+bx)=ax=a\,c_{22}$ confirm the triangularity. Hence $C^{2}$ has identically zero form, $\mathrm{rad}\,C^{2}=C^{2}$ and $D^{2}=0$; the module $C^{2}$ itself is one-dimensional with $a+bx$ acting as $a$, hence simple with zero Jacobson radical and head $C^{2}\ne0$. Moreover $x\in A$ is a nonzero nilpotent, so $\mathrm{rad}\,A=(x)\ne0$ and $A$ is not semisimple. [given, F1]

1.2 The Hecke instance: for $F$ of characteristic $2$ and $q=1$ the sign module is the trivial module, so the Murphy cell module $S^{(3)}_{\mathrm M}$ and its theta-pullback $S^{(1,1,1)}=(S^{(3)}_{\mathrm M})^\theta$ are the trivial module; the label $(1,1,1)$ is not $2$-regular, so by [F2] $D^{(1,1,1)}=0$ while $S^{(1,1,1)}\ne0$. [given, F2]

1.3 The reducible Weyl module. In the precise lift of [F3], the sum of the positive filtration-submodule classes is $[L^{(3,1^2)}]+2[L^{(2,2,1)}]\ne0$. At least one of these submodules is nonzero. Since all are contained in the first reduced submodule $W_F(1)=\operatorname{rad}_{\rm form}W_F$, that radical is nonzero. The Schur cell form has nonzero simple head, so its form radical is its unique maximal proper submodule. Consequently $W_F^{(3,2)}$ is reducible, despite having simple head $L^{(3,2)}$. The reduced form radical is not identified with $F\otimes_R$ the generic radical: specialization need not commute with this kernel, and the lifted generic form here is nondegenerate. [given, F1, F3]

2.1 Conclusion: the three instances refute the claims that cellularity forces semisimplicity, forces every cell module to be simple, or forces every labelled cell-form quotient to be nonzero; each is an application of the classification of cell-form quotients [F1] together with the explicit degenerate data. [step 1.1, step 1.2, step 1.3, F1] ∎