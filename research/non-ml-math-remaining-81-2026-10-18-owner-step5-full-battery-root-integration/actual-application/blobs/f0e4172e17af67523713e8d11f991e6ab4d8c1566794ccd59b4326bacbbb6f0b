---
id: lem-temperley-lieb-cell-forms-detect-semisimplicity-over-c
kind: lemma
title: "Temperley–Lieb cell forms detect semisimplicity over the complex numbers"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 7
deps:
  - thm-temperley-lieb-link-state-diagram-basis-is-cellular
  - cor-temperley-lieb-nonzero-cell-forms-classify-simple-modules
  - def-cellular-algebra-basis-and-cell-module
  - thm-wedderburn-artin-theorem
  - thm-simple-modules-over-semisimple-rings
  - thm-jacobson-radical-is-nilpotent-and-the-quotient-is-semisimple
  - thm-the-complex-numbers-are-algebraically-closed
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Andrew Mathas, Hecke algebras and Schur algebras of the symmetric group, complete prepublication manuscript"
      url: "https://web.math.ucsb.edu/~bigelow/books/mathas.pdf"
      locator: "Chapter 2, §§1–2, printed pp. 9–16: cellular bases, cell-form radicals, and simple-module classification."
    - title: "David Ridout and Yvan Saint-Aubin, Standard Modules, Induction and the Structure of the Temperley-Lieb Algebra"
      url: "https://arxiv.org/pdf/1204.4505"
      locator: "§4, Corollary 4.6 and equation (2.11), PDF pp. 20–21 and 7: simple modules and the sum-of-squares dimension check."
---

## Statement

For every $n\ge0$, the complex algebra $\mathrm{TL}_n(\mathbb C,\delta)$ is semisimple if and only if every link-state cell form $\phi_{n,t}$ is nondegenerate.

## Facts & Assumptions

**Given:** A finite-dimensional complex Temperley–Lieb algebra with the cellular basis, link-state cell modules, and capping forms.

[F1] The diagram basis is cellular, and its cell modules and forms are precisely the link-state modules and capping forms ([[thm-temperley-lieb-link-state-diagram-basis-is-cellular]]).

[F2] The nonzero quotients $D_{n,t}=W_{n,t}/\operatorname{rad}\phi_{n,t}$ are a complete set of pairwise nonisomorphic simple modules; $D_{n,t}\ne0$ exactly when the cell form is not identically zero ([[cor-temperley-lieb-nonzero-cell-forms-classify-simple-modules]]).

[F3] The cellular basis has $\sum_t(\dim W_{n,t})^2$ elements because the label-$t$ basis is indexed by ordered pairs of link states ([[thm-temperley-lieb-link-state-diagram-basis-is-cellular]], [[def-cellular-algebra-basis-and-cell-module]]).

[F4] A finite-dimensional semisimple algebra is a finite product $\prod_i M_{m_i}(D_i)$ of matrix algebras over division rings. Its simple left modules are the column modules, and all its simple right modules are the corresponding row modules: identify right modules with left modules over the opposite algebra and use $M_{m_i}(D_i)^{\mathrm{op}}\cong M_{m_i}(D_i^{\mathrm{op}})$ by transpose. The right regular module is a direct sum of $m_i$ copies of each such row module ([[thm-wedderburn-artin-theorem]], [[thm-simple-modules-over-semisimple-rings]]).

[F5] For a finite-dimensional algebra $A$, its Jacobson radical $J$ is nilpotent and $A/J$ is semisimple ([[thm-jacobson-radical-is-nilpotent-and-the-quotient-is-semisimple]]). In particular, $J$ annihilates each simple right $A$-module: $SJ$ is a submodule because $J$ is a two-sided ideal; if $SJ\ne0$, simplicity gives $SJ=S$, and iteration gives $SJ^r=S$ for every $r$, contradicting nilpotence. Thus simple right $A$-modules and simple right $A/J$-modules coincide after inflation.

[F6] $\mathbb C$ is algebraically closed ([[thm-the-complex-numbers-are-algebraically-closed]]).

## Proof

**Proof technique:** Compare the dimensions of the complete simple-module list with the cellular basis.

1.1 Write $d_t=\dim_{\mathbb C}W_{n,t}$. By [F1] and [F3], $\dim\mathrm{TL}_n=\sum_t d_t^2$. By [F2], each simple module is exactly one $D_{n,t}$ with nonzero form quotient, and these modules are pairwise nonisomorphic. If $\phi_{n,t}$ is degenerate then either it is identically zero, so $\dim D_{n,t}=0<d_t$, or its radical is nonzero, so again $\dim D_{n,t}<d_t$. [F1, F2, F3]

2.1 Suppose $\mathrm{TL}_n$ is semisimple. By [F4] and [F6], each division algebra factor $D_i$ is finite-dimensional over the central copy of $\mathbb C$. For $x\in D_i$, left multiplication by $x$ has a complex eigenvalue $\lambda$, and a nonzero eigenvector gives $(x-\lambda)y=0$, which forces $x=\lambda$ in a division algebra. Thus $D_i=\mathbb C$, the right simple module for the factor $M_{m_i}(D_i)$ has dimension $m_i$, and the right regular module contains $m_i$ copies of it. Consequently $\dim\mathrm{TL}_n$ is the sum of the squares of the dimensions of its pairwise nonisomorphic simple right modules. By [F2], these are the $D_{n,t}$. If any form were degenerate, step 1.1 would make this sum strictly smaller than $\sum_t d_t^2=\dim\mathrm{TL}_n$, a contradiction. Thus all forms are nondegenerate. [F2, F3, F4, F6, step 1.1, algebra]

3.1 Conversely suppose every form is nondegenerate. Then [F2] gives $D_{n,t}=W_{n,t}\ne0$ for every allowed $t$, so these are the complete simple right-module list and [F3] says that the squares of their dimensions sum to $\dim\mathrm{TL}_n$. By [F5], the quotient by the Jacobson radical is semisimple, and its simple right modules are exactly those of $\mathrm{TL}_n$ because the radical annihilates every simple right module. In particular, this quotient is nonzero. Applying the right-module dimension formula from step 2.1 to it shows that its dimension is the sum of the squares of those same simple dimensions. Therefore the quotient has the same dimension as $\mathrm{TL}_n$, the radical has dimension zero, and $\mathrm{TL}_n$ is semisimple. [F2, F3, F4, F5, F6, step 2.1, algebra] ∎
