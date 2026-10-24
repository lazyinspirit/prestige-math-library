---
id: thm-faithfully-flat-descent-vanishing
kind: theorem
title: "Descent of vanishing along a faithfully flat morphism"
status: published
origin: pipeline
deps:
  - def-faithfully-flat-morphism-schemes
  - def-morphism-of-schemes
  - def-pullback-module-ringed-spaces
  - lem-stalk-inverse-image-sheaf
  - lem-stalk-tensor-product
  - thm-stalk-structure-sheaf-prime-localization
  - def-localisation-at-a-prime-ideal
  - thm-flatness-criteria-by-injections-and-ideals
  - thm-right-exactness-of-tensor-products
  - thm-sheaf-morphism-isomorphism-stalkwise
  - def-sheaf-on-topological-space
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "The Stacks Project, Morphisms of Schemes, Section 29.26 (flat morphisms, descent)"
      url: https://stacks.math.columbia.edu/tag/01U2
    - title: "The Stacks Project, Commutative Algebra, Section 10.40 (faithfully flat descent)"
      url: https://stacks.math.columbia.edu/download/algebra.pdf
    - title: "The Stacks Project, Commutative Algebra, Section 10.108 (generic flatness)"
      url: https://stacks.math.columbia.edu/download/algebra.pdf
verification:
  precheck: pass
  audited: 2026-09-30
---

## Statement

Let $f:X\to S$ be an fpqc morphism
([[def-faithfully-flat-morphism-schemes]]) and let $\mathcal F$ be any
$\mathcal O_S$-module, with pullback $f^*\mathcal F$
([[def-pullback-module-ringed-spaces]]). If $f^*\mathcal F=0$, then
$\mathcal F=0$. No quasi-coherence assumption on $\mathcal F$ is made and no
finiteness is imposed on $X$ beyond the quasi-compactness contained in the fpqc
convention. The proof is choice-free: it divides by the point $s$ and never
selects points over all $s$ simultaneously.

## Facts & Assumptions


**Given:** The data and hypotheses displayed in the Statement, with the conventions fixed there.

[F1] $f$ is faithfully flat when it is flat and its underlying map is surjective; it is fpqc when in addition it is quasi-compact. As a scheme morphism, $f$ induces local homomorphisms on stalks ([[def-faithfully-flat-morphism-schemes]], [[def-morphism-of-schemes]]).

[F2] The pullback of an $\mathcal O_S$-module is $f^*\mathcal F=\mathcal O_X\otimes_{f^{-1}\mathcal O_S}f^{-1}\mathcal F$ ([[def-pullback-module-ringed-spaces]]).

[F3] For a continuous map $f:X\to S$, a sheaf $\mathcal G$ on $S$ and $x\in X$ there is a canonical isomorphism $(f^{-1}\mathcal G)_x\cong\mathcal G_{f(x)}$ ([[lem-stalk-inverse-image-sheaf]]).

[F4] Stalks of tensor products of $\mathcal O_X$-modules are tensor products of stalks: $(\mathcal M\otimes_{\mathcal O_X}\mathcal N)_x\cong\mathcal M_x\otimes_{\mathcal O_{X,x}}\mathcal N_x$ ([[lem-stalk-tensor-product]]).

[F5] On an affine neighbourhood $\operatorname{Spec}R$ of a scheme point $s=\mathfrak p$, the stalk $\mathcal O_{S,s}$ is $R_{\mathfrak p}$. Every fraction whose numerator lies outside $\mathfrak p$ is a unit, so every proper ideal of $R_{\mathfrak p}$ lies in $\mathfrak pR_{\mathfrak p}$ ([[thm-stalk-structure-sheaf-prime-localization]], [[def-localisation-at-a-prime-ideal]]).

[F6] Tensoring with a flat module preserves injections, and tensoring the quotient $A/I$ with an $A$-algebra $B$ gives $B/IB$ by right exactness ([[thm-flatness-criteria-by-injections-and-ideals]], [[thm-right-exactness-of-tensor-products]]).

[F7] A morphism of sheaves of sets on a space is an isomorphism if and only if it is an isomorphism on every stalk; in particular a sheaf of abelian groups is zero if and only if all its stalks are zero ([[thm-sheaf-morphism-isomorphism-stalkwise]], [[def-sheaf-on-topological-space]]).

## Proof

**Proof technique:** direct.

1.1 Let $s\in S$ be arbitrary. Since $f$ is surjective by [F1], the set $f^{-1}(s)$ is nonempty; the argument that follows is uniform in $s$ and produces no simultaneous choice over $S$. [F1]

1.2 Fix $x\in X$ with $f(x)=s$. By [F2], [F3] and [F4] the stalk of the pullback at $x$ is $(f^*\mathcal F)_x\cong\mathcal F_s\otimes_{\mathcal O_{S,s}}\mathcal O_{X,x}$. [F2, F3, F4]

1.3 Put $A=\mathcal O_{S,s}$, $B=\mathcal O_{X,x}$, and let $\mathfrak m,\mathfrak n$ be their maximal ideals. The map $A\to B$ is local and $B$ is flat over $A$, because $f$ is flat at $x$. For any proper ideal $I\subset A$, [F5] gives $I\subseteq\mathfrak m$; locality gives $IB\subseteq\mathfrak n$, so $B/IB\ne0$. This uses the explicit localization at the fixed point $s$, with no maximal-ideal existence choice. [F1, F5]

2.1 Suppose $\mathcal F_s\ne0$ and fix $0\ne v\in\mathcal F_s$. Its annihilator $I=\operatorname{Ann}_A(v)$ is proper, and the cyclic submodule $Av\cong A/I$ injects into $\mathcal F_s$. By [F6] and flatness in step 1.3, $B/IB\cong(Av)\otimes_AB$ injects into $\mathcal F_s\otimes_AB$. The source is nonzero by step 1.3, so $(f^*\mathcal F)_x\ne0$ by step 1.2. Hence $f^*\mathcal F=0$ forces $\mathcal F_s=0$. Since $s$ was arbitrary and only one $x$ over that fixed $s$ was used, every stalk of $\mathcal F$ vanishes. [F6, step 1.2, step 1.3]

3.1 The zero morphism $0\to\mathcal F$ of $\mathcal O_S$-modules has stalk maps $0\to\mathcal F_s$ at every $s\in S$, which are isomorphisms because $\mathcal F_s=0$ by step 2.1. By [F7] the zero morphism is an isomorphism, that is, $\mathcal F=0$. Nothing in steps 1.1-2.1 used quasi-coherence of $\mathcal F$ or finiteness of $X$, and the only selection made is one point of one nonempty fibre at a time, so the proof is choice-free. [F7, step 2.1] $\square$
