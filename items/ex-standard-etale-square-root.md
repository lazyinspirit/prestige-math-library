---
id: ex-standard-etale-square-root
kind: example
title: "The square-root standard etale chart"
status: draft
origin: pipeline
deps:
  - def-standard-etale-algebra
  - def-etale-morphism-schemes
  - def-principal-localisation
  - def-finitely-presented-module-and-algebra
  - def-locally-finite-presentation-morphism
  - prop-units-in-a-localisation
  - cor-tensor-product-with-a-quotient-ring
  - def-polynomial-ring-on-a-family-of-indeterminates
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "The Stacks Project, Algebra, Section 10.143 and Morphisms of Schemes, Section 29.36 (standard etale and the square-root chart)"
      url: https://stacks.math.columbia.edu/download/algebra.pdf
    - title: "Ravi Vakil, The Rising Sea, 29 August 2022 public draft, Chapter 26 (the T^2-a square-root chart)"
      url: https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf
---

## Statement

Let $A$ be a commutative ring and $a\in A$, and put
$$B=\bigl(A[T]/(T^{2}-a)\bigr)_{2T},$$
the localisation of $A[T]/(T^{2}-a)$ at the powers of the image of $2T$
([[def-principal-localisation]], [[def-polynomial-ring-on-a-family-of-indeterminates]]).

1. $B$ is standard \'etale over $A$, and $B$ is a finitely presented
   $A$-algebra; hence $\operatorname{Spec}B\to\operatorname{Spec}A$ is \'etale
   ([[def-standard-etale-algebra]], [[def-etale-morphism-schemes]]). The
   presentation is the one-term presentation with $P=T^{2}-a$, whose formal
   derivative $P'=2T$ is inverted by construction, and $A[T]/(P)$ is free over
   $A$ with basis $1,T$ before the localisation.
2. If $\mathfrak p\in\operatorname{Spec}A$ satisfies $2a\notin\mathfrak p$,
   then $B_{\mathfrak p}\cong A_{\mathfrak p}[T]/(T^{2}-a)$ is a free
   $A_{\mathfrak p}$-module of rank $2$, and the fibre
   $B\otimes_A\kappa(\mathfrak p)\cong\kappa(\mathfrak p)[T]/(T^{2}-\bar a)$
   is finite \'etale of degree $2$ over $\kappa(\mathfrak p)$
   ([[cor-tensor-product-with-a-quotient-ring]]). So over the open locus
   $D(2a)$ the chart is a finite \'etale cover of degree two.
3. If $2=0$ in $A$, then $2T=0$ and $B=0$ is the zero ring: the displayed chart
   is empty for every $a$, and $\operatorname{Spec}B\to\operatorname{Spec}A$ is
   the empty morphism, which is \'etale vacuously. Thus the degree-two cover of
   statement 2 exists exactly over the locus where $2a$ is invertible.

The example is choice-free: no Axiom of Choice is assumed or used.

## Facts & Assumptions

**Given:** The data and hypotheses displayed in the Statement, with the conventions fixed there.

[F1] If $P\in A[T]$ is monic and the image of $P'$ is a unit of $(A[T]/(P))_g$, then $(A[T]/(P))_g$ is standard \'etale over $A$; a monic $P$ makes $A[T]/(P)$ a free $A$-module with basis $1,T,\dots,T^{\deg P-1}$ by division with remainder, the presentation is part of the data, and a standard \'etale algebra is \'etale over $A$ when the structure map is finitely presented, localisation preserving finite presentation ([[def-standard-etale-algebra]], [[def-finitely-presented-module-and-algebra]], [[def-locally-finite-presentation-morphism]]).

[F2] In a localisation $B_g$ the image of $g$ is a unit, and $B_g=0$ if and only if $g$ is nilpotent... more precisely $B_g$ is the zero ring when $g=0$; localising at an element that is already a unit changes nothing ([[def-principal-localisation]], [[prop-units-in-a-localisation]]).

[F3] For an ideal $I\subseteq R$ and an $R$-module $M$ there is a natural isomorphism $M\otimes_R(R/I)\cong M/IM$; applied over $A_{\mathfrak p}$ with ideal $\mathfrak pA_{\mathfrak p}$ it identifies the fibre $B\otimes_A\kappa(\mathfrak p)$ with $(B\otimes_AA_{\mathfrak p})/\mathfrak p(B\otimes_AA_{\mathfrak p})$, because $A_{\mathfrak p}/\mathfrak pA_{\mathfrak p}=\kappa(\mathfrak p)$ ([[cor-tensor-product-with-a-quotient-ring]]).

## Verification

**Proof technique:** direct.

1.1 The chart is standard \'etale. Take $P=T^{2}-a\in A[T]$, which is monic of degree $2$ with formal derivative $P'=2T$, and take $g=2T$ in the presentation $B=(A[T]/(P))_{2T}$. In $B$ the image of $P'$ is the inverted element $2T$, hence a unit, so $B$ is standard \'etale over $A$ by [F1]; the presentation is a quotient of $A[T]$ by the principal ideal $(P)$ followed by a localisation, so $B$ is a finitely presented $A$-algebra, and therefore $\operatorname{Spec}B\to\operatorname{Spec}A$ is \'etale by [F1]. By [F1] again, $A[T]/(P)$ is free over $A$ with basis $1,T$ before the localisation. This proves claim 1. [F1]

1.2 The degree-two locus. Let $\mathfrak p\in\operatorname{Spec}A$ with $2a\notin\mathfrak p$. Then $2\notin\mathfrak p$ and $a\notin\mathfrak p$, so $2$ and $a$ are units of $A_{\mathfrak p}$; in the ring $A_{\mathfrak p}[T]/(T^{2}-a)$ the relation $T\cdot(Ta^{-1})=1$ makes $T$ a unit, hence $2T$ is a unit, and localising at a unit does not change the ring by [F2]. Therefore $B_{\mathfrak p}\cong A_{\mathfrak p}[T]/(T^{2}-a)$, which is free of rank $2$ over $A_{\mathfrak p}$ with basis $1,T$ by [F1]. For the fibre, [F3] applied over $A_{\mathfrak p}$ gives $B\otimes_A\kappa(\mathfrak p)\cong B_{\mathfrak p}/\mathfrak pA_{\mathfrak p}B_{\mathfrak p}\cong\kappa(\mathfrak p)[T]/(T^{2}-\bar a)$, where $\bar a\neq0$ and $2\neq0$ in the field $\kappa(\mathfrak p)$; in this ring $T$ is a unit (with inverse $T\bar a^{-1}$), so the image of the derivative $2T$ of the monic polynomial $T^{2}-\bar a$ is a unit and [F1] makes $\kappa(\mathfrak p)[T]/(T^{2}-\bar a)$ a standard \'etale, hence finite \'etale, $\kappa(\mathfrak p)$-algebra of rank $2$. This proves claim 2. [F1, F2, F3]

1.3 The characteristic two boundary. If $2=0$ in $A$, then $2T=0$, so the localisation of $A[T]/(T^{2}-a)$ at the powers of $0$ is the zero ring $B=0$ by [F2]; its spectrum is empty, and the structure morphism from the empty scheme to $\operatorname{Spec}A$ has no point at which \'etaleness could fail, so it is \'etale vacuously. In particular, for a field $k$ of characteristic two the chart $\operatorname{Spec}(k[T]/(T^{2}-a))_{2T}$ is empty for every $a$. [F1, F2]

2.1 The chart is supported over $D(2a)$. In $B$, the element $2T$ is a unit, so $4a=(2T)^2$ is a unit. Since $4a=2(2a)$, the factor $2a$ is a unit in $B$ as well. Hence $\operatorname{Spec}B\to\operatorname{Spec}A$ factors through $D(2a)$. On $D(2a)$, both $2$ and $a$ are units; the relation $T\cdot(Ta^{-1})=1$ makes $T$ a unit, so localising at $2T$ changes nothing. Thus the restricted algebra is $A_{2a}[T]/(T^{2}-a)$, finite free of rank $2$ and \'etale by the derivative calculation of step 1.2. This proves that the rank-two cover occurs exactly over $D(2a)$. [F1, F2, step 1.2]

3.1 Conclusion and choice accounting. Claims 1, 2 and 3 follow from step 1.1, step 1.2, step 1.3 and step 2.1. The standard \'etale presentation, the free basis from monic division, the unit computations in a localisation and the fibre computation used above are all choice-free, and no Axiom of Choice is assumed or used in this example. [F1, F2, F3, step 1.1, step 1.2, step 1.3, step 2.1]

$\square$
