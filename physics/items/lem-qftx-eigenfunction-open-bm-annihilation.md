---
id: lem-qftx-eigenfunction-open-bm-annihilation
kind: lemma
title: Nonzero eigenfunctions annihilate equivariant BM on their nonvanishing loci
status: draft
origin: pipeline
pipeline_run: advanced-qft-supersymmetry-build-2026-10-23
dependency_level: 2
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
deps:
  - def-qftx-localized-equivariant-borel-moore-data
  - def-euler-class-by-zero-section-pullback-of-the-thom-class
  - lem-complex-oriented-diagonal-thom-class-realizes-the-six-functor-exchange-on-supports
dependency_roles:
  def-qftx-localized-equivariant-borel-moore-data: mathematical-premise
  def-euler-class-by-zero-section-pullback-of-the-thom-class: mathematical-premise
  lem-complex-oriented-diagonal-thom-class-realizes-the-six-functor-exchange-on-supports: mathematical-premise
justified_by: []
axiom_strength: ZF + AC inherited through the equivariant Borel–Moore supplier
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Dan Edidin and William Graham, Localization in equivariant intersection theory and the Bott residue formula
      url: https://arxiv.org/pdf/alg-geom/9508001
      locator: Section 3, character-class annihilation and the localization proof.
    - title: Victor Ginzburg, Geometric Methods in Representation Theory of Hecke Algebras and Quantum Groups
      url: https://arxiv.org/pdf/math/9802004
      locator: Section 1, Borel–Moore homology and the diagonal intersection pairing.
landmark: false
---

## Statement

Let $T=(\mathbb C^\times)^r$ act algebraically on a separated finite-type complex variety $X$ with a finite invariant affine open cover. Let $U$ be one affine chart, let $f\in\mathcal O(U)$ be regular with a nontrivial character $\chi:T\to\mathbb C^\times$, and fix the convention $f(t\cdot x)=\chi(t)f(x)$. If $D(f)=\{x\in U:f(x)\neq0\}$ is nonempty, then the equivariant character class $u_\chi=c_1(L_{\chi|_K})$ acts by zero on every group $H^{\mathrm{BM},T}_j(D(f);\mathbb Q)$. It also acts by zero on every such group for a further $T$-invariant open subvariety $V\subseteq D(f)$. Consequently $S_T^{-1}H^{\mathrm{BM},T}_j(D(f);\mathbb Q)=S_T^{-1}H^{\mathrm{BM},T}_j(V;\mathbb Q)=0$ for all $j$.

## Statement references

[Character-class annihilation in an equivariant theory] [Edidin–Graham, Section 3](https://arxiv.org/pdf/alg-geom/9508001)

[Borel–Moore homology, proper pushforward, and intersection operations] [Ginzburg, Section 1](https://arxiv.org/pdf/math/9802004)

## Facts & Assumptions

**Given:** The algebraic torus action, the invariant affine chart $U$, the nontrivial character eigenfunction $f$, and the Borel–Moore convention of the preceding definition.

[F1] The character line $L_\chi$, its Chern class $u_\chi$, the Borel cap action on equivariant Borel–Moore homology, and the multiplicative set $S_T$ are defined by the localized Borel–Moore data. [[def-qftx-localized-equivariant-borel-moore-data]]

[F2] For a complex line bundle, the Euler class is the first Chern class; the class is the zero-section pullback of its normalized Thom class. [[def-euler-class-by-zero-section-pullback-of-the-thom-class]]

[F3] The six-functor and Thom construction identifies the Borel cap action with cap product by the associated line class on each finite Borel approximation. [[lem-complex-oriented-diagonal-thom-class-realizes-the-six-functor-exchange-on-supports]]

[A1] The Axiom of Choice is inherited through the Borel–Moore and Thom suppliers. [[def-qftx-localized-equivariant-borel-moore-data]] [[lem-complex-oriented-diagonal-thom-class-realizes-the-six-functor-exchange-on-supports]]

## Proof

**Given:** The data in the Statement.

1.1 The set $D(f)$ is $T$-invariant because $f(t\cdot x)=\chi(t)f(x)$. On its Borel construction, define $s([e,x])=[e,f(x)]$ in the associated character line. This is well-defined: replacing $(e,x)$ by $(e\cdot t,t^{-1}\cdot x)$ replaces $f(x)$ by $f(t^{-1}\cdot x)=\chi(t)^{-1}f(x)$, exactly the right equivalence $(e,z)\cdot t=(e\cdot t,\chi(t)^{-1}z)$. Since $f$ never vanishes on $D(f)$, $s$ is a nowhere-zero section and trivializes that line bundle. The same formula trivializes its restriction to every $T$-invariant open $V\subseteq D(f)$. [A1, F1, construct]

2.1 On each finite Borel approximation, the first Chern class of the trivialized line is zero. By [F2] this is the Euler class of the line, and by [F3] its cap action on the approximating Borel–Moore groups is zero. The stable comparison in [F1] therefore gives $u_\chi\cap\beta=0$ for every $\beta\in H^{\mathrm{BM},T}_j(D(f);\mathbb Q)$, and the identical argument holds on $V$. [F1, F2, F3, step 1.1]

3.1 Since $\chi$ is nontrivial, $u_\chi\in S_T$ is invertible after localization. For any class $\beta$, its localized image satisfies $\beta/1=(u_\chi\cap\beta)/u_\chi=0$ by step 2.1. The localized groups on both $D(f)$ and $V$ consequently vanish. If the opposite character convention is used, the class is $-u_\chi$, which is also in $S_T$ up to the unit $-1$ and has the same annihilation consequence. [F1, step 2.1, algebra] ∎
