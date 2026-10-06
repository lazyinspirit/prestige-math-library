---
id: lem-semisimplicity-and-trace-form-for-the-finite-spherical-hecke-algebra
kind: lemma
title: "The finite spherical Hecke algebra is semisimple with nondegenerate trace form"
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
deps:
  - thm-finite-hecke-algebra-as-convolution-corner-and-endomorphisms
  - def-bruhat-double-coset-basis-of-the-finite-hecke-algebra
  - lem-trace-form-nondegeneracy-characterizes-semisimple-finite-dimensional-algebras
  - def-semisimple-module
  - thm-simple-modules-over-semisimple-rings
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Ivan Losev, Lecture 8: Representations of GL_n(F_q) - Section 2.1: 'this algebra is manifestly semisimple'; Section 2.3, semisimplicity of $H_{\\mathbb C,q}(n)$, PDF pp. 4-5"
      url: "https://ivanloseu.github.io/RT/RT8.pdf"
    - title: "Jay Taylor, Finite Reductive Groups - Proposition 5.16 ($H_1\\cong\\mathbb C W^F$ and $H_q\\cong H(G,B)$ are both semisimple), printed pp. 44-45"
      url: "https://pages.uoregon.edu/belias/WARTHOG/DLtheory/TaylorReductiveGroups.pdf"
    - title: "Olivier Dudas and Jean Michel, Lectures on Finite Reductive Groups and Their Representations - Section 11.1 (the corner of the semisimple group algebra), printed pp. 45-46"
      url: "https://webusers.imj-prg.fr/~jean.michel/papiers/lectures_beijing_2015.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

The finite Hecke algebra $H=e_B\mathbb C[G]e_B$ of
$G=\operatorname{GL}_n(\mathbb F_q)$ is a semisimple finite-dimensional
$\mathbb C$-algebra of dimension $n!$, and its trace form
$(x,y)\mapsto\operatorname{tr}(L_{xy})$ is nondegenerate. Consequently $H$ is
isomorphic to a product of matrix algebras, and every finite-dimensional
semisimple representation is determined up to isomorphism by the multiplicities
of its simple modules. No choice
principle is used.

## Facts & Assumptions

**Given:** $G=\operatorname{GL}_n(\mathbb F_q)$ with Borel $B$, the idempotent $e_B$, the finite Hecke algebra $H=e_B\mathbb C[G]e_B$ with its trace form $(\cdot,\cdot)$ and standard basis $T_w$, $w\in S_n$.

[F1] $H$ is a corner of the group algebra, a unital finite-dimensional $\mathbb C$-algebra, and it is semisimple ([[thm-finite-hecke-algebra-as-convolution-corner-and-endomorphisms]]).

[F2] The elements $T_w=q^{\ell(w)}e_B\dot we_B$, $w\in S_n$, form a $\mathbb C$-basis of $H$, so $\dim_{\mathbb C}H=n!$ ([[def-bruhat-double-coset-basis-of-the-finite-hecke-algebra]]).

[F3] For any finite-dimensional associative unital $\mathbb C$-algebra $A$ the trace form $(a,b)=\operatorname{tr}(L_{ab})$ is symmetric and associative, it is nondegenerate if and only if $A$ is semisimple, and a nonzero semisimple such $A$ is isomorphic to $\prod_{i=1}^r\operatorname M_{d_i}(\mathbb C)$ with simple left modules the natural $d_i$-dimensional modules of the factors ([[lem-trace-form-nondegeneracy-characterizes-semisimple-finite-dimensional-algebras]]).

[F4] A left $R$-module is semisimple when it is an internal direct sum of simple submodules ([[def-semisimple-module]]).

[F5] For $R=\prod_{i=1}^r\operatorname M_{n_i}(\mathbb C)$ every simple left $R$-module is supported on exactly one factor and is isomorphic to that factor's column module $\mathbb C^{n_i}$, and these column modules give all simple isomorphism classes, one for each factor ([[thm-simple-modules-over-semisimple-rings]]).



## Proof

**Proof technique:** direct.

1.1 $H=e_B\mathbb C[G]e_B$ is closed under multiplication because $e_B^2=e_B$, and it contains $e_B$, which acts as its identity; it is finite-dimensional over $\mathbb C$, and it is semisimple by [F1]. By [F2] its standard basis has $n!$ elements, so $\dim_{\mathbb C}H=n!$. [F1, F2]

1.2 The trace form $(\cdot,\cdot)$ of $H$ is the symmetric associative bilinear form $(x,y)=\operatorname{tr}(L_{xy})$ of [F3], with $L_c$ the left multiplication operator on the finite-dimensional $\mathbb C$-vector space $H$. [F3]

1.3 Since $H$ is semisimple, the characterization of [F3] gives that $(\cdot,\cdot)$ is nondegenerate, and the structure statement of [F3] gives an isomorphism $H\cong\prod_{i=1}^r\operatorname M_{d_i}(\mathbb C)$ for some $r\ge1$ and $d_i\ge1$; by [F5] the simple left $H$-modules are exactly the column modules $V_i=\mathbb C^{d_i}$ of the factors, one isomorphism class per factor. [F3, F5]

2.1 Let $M$ be a finite-dimensional semisimple left $H$-module. By [F4] $M$ is an internal direct sum of simple submodules, each isomorphic to some $V_i$ by step 1.3, so $M\cong\bigoplus_iV_i^{m_i}$ for multiplicities $m_i\ge0$. Writing $e_i\in H$ for the central idempotent of the $i$-th matrix factor one has $M=\bigoplus_ie_iM$ and each $e_iM$ is a module for the factor $\operatorname M_{d_i}(\mathbb C)$ whose simple submodules are copies of $V_i$, so $e_iM\cong V_i^{m_i}$ and $m_i=\dim_{\mathbb C}(e_iM)/d_i$ is determined by $M$; conversely the displayed isomorphism shows that $(m_1,\dots,m_r)$ determines $M$ up to isomorphism. Thus the simple modules are a complete set of invariants of the semisimple representations. [F3, F4, F5, step 1.3, algebra]

3.1 Steps 1.1 and 1.3 give the semisimplicity, the dimension $n!$, the nondegeneracy of the trace form and the product-of-matrix-algebras structure of $H$, and step 2.1 gives the invariant statement; all objects are finite-dimensional over $\mathbb C$ and no selection or choice principle is used. [step 1.1, step 1.3, step 2.1] ∎ 