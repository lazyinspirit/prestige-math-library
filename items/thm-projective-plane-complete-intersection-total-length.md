---
id: thm-projective-plane-complete-intersection-total-length
kind: theorem
title: "Two coprime projective plane forms meet in total length equal to their degree product"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-axiom-of-choice, lem-complete-intersection-hilbert-series-two-plane-forms, cor-no-common-component-projective-plane-intersection-is-zero-dimensional, lem-zero-dimensional-projective-scheme-has-finite-local-charts, def-total-length-of-a-zero-dimensional-projective-scheme, lem-eventual-hilbert-function-equals-zero-dimensional-projective-length, lem-localisation-of-a-graded-ring-at-a-homogeneous-element, def-projective-scheme-from-a-homogeneous-quotient, def-graded-ring-and-graded-module, lem-projective-standard-chart-prime-and-local-ring-correspondence, def-krull-dimension-of-a-ring, thm-proper-ideal-contained-in-maximal-ideal, cor-maximal-ideals-are-prime, def-prime-and-maximal-ideals, lem-coprime-plane-forms-form-a-homogeneous-regular-sequence, def-regular-sequence-on-a-module, def-hilbert-function-and-hilbert-series, thm-universal-property-of-localisation, def-multiplicative-subset-and-localisation, def-principal-localisation, def-polynomial-ring-over-a-commutative-ring, def-monomials-multidegree-and-total-degree, def-homogeneous-polynomial-and-homogeneous-ideal]
justified_by: []
aliases: []
landmark: true
short: "plane complete intersection length de"
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "A. Gathmann, Algebraic Geometry class notes (2002), Lemma 6.1.4 and Theorem 6.2.1, pp. 93-96"
      url: "https://agag-gathmann.math.rptu.de/class/alggeom-2002/alggeom-2002.pdf"
    - title: "J. S. Milne, Algebraic Geometry v6.10, Theorem 6.37 and Remark 6.38, pp. 152-153"
      url: "https://www.jmilne.org/math/CourseNotes/AG.pdf"
pipeline_run: frontier-35-ten-categories
---

## Statement

Assume the Axiom of Choice. Let $k$ be a field, let $R=k[x_0,x_1,x_2]$ and let
$F,G\in R$ be nonzero homogeneous forms of positive degrees $d$ and $e$ that
have no common nonconstant factor. Put $S=R/(F,G)$, a standard graded
$k$-algebra with the images of the variables of degree one, and let
$X=\operatorname{Proj}S$ carry its standard charts
$D_+(x_i)=\operatorname{Spec}(A_i)$, $A_i=(S_{x_i})_0$. Then:

1. $X$ is nonempty and finite, every chart ring $A_i$ is either zero or of
   Krull dimension $0$, and the total length
   $\operatorname{len}_k(X)=\sum_{x\in X}\ell_{\mathcal O_{X,x}}(\mathcal O_{X,x})[\kappa(x):k]$
   of [[def-total-length-of-a-zero-dimensional-projective-scheme]] is a finite
   sum over the finitely many points of $X$.
2. $\operatorname{len}_k(X)=de$: the projective plane complete intersection has
   total length equal to the product of the degrees.
3. In the chart $D_+(x_i)$ the chart ring is
   $A_i\cong k[y_0,y_1]/(f_i,g_i)$, where $f_i,g_i$ are the dehomogenisations of
   $F$ and $G$ with respect to $x_i$ (the images under $x_i\mapsto1$,
   $x_j\mapsto y_j$ for $j\ne i$); consequently, for a point $x\in D_+(x_i)$
   with corresponding prime $\mathfrak p_0\subseteq A_i$, the local algebra
   $\mathcal O_{X,x}$ is the localisation of the quotient
   $k[y_0,y_1]/(f_i,g_i)$ at $\mathfrak p_0$.

The coordinate ring $S$ itself has dimension one and is not Artinian; the
statement is about the scheme $X=\operatorname{Proj}S$ and its local lengths
only, and it holds over an arbitrary field with the residue-degree weights
$[\kappa(x):k]$.

## Facts & Assumptions

**Given:** The Axiom of Choice, a field $k$, the polynomial ring
$R=k[x_0,x_1,x_2]$, nonzero homogeneous forms $F,G\in R$ of positive degrees
$d,e$ without common nonconstant factor, the standard graded quotient
$S=R/(F,G)$, its standard charts $D_+(x_i)=\operatorname{Spec}(A_i)$ with
$A_i=(S_{x_i})_0$, and $X=\operatorname{Proj}S$.

[L1] $X\ne\varnothing$, each standard chart $D_+(x_i)$ is empty or of Krull
dimension $0$ ([[def-krull-dimension-of-a-ring]]), and $\dim S=1$, so $S$ is
not Artinian ([[cor-no-common-component-projective-plane-intersection-is-zero-dimensional]]).
The spectrum of a ring is empty exactly for the zero ring: the zero ring has no
prime ideal, while every nonzero commutative ring has a maximal ideal, which is
prime ([[def-prime-and-maximal-ideals]],
[[thm-proper-ideal-contained-in-maximal-ideal]],
[[cor-maximal-ideals-are-prime]]); hence the chartwise zero-dimensionality
hypothesis "every $A_i$ is zero or of Krull dimension $0$" holds.

[L2] Assume AC. For such $X$: $X$ has finitely many points, each local ring
$\mathcal O_{X,x}$ is a finite-dimensional local $k$-algebra with finite length
and finite residue degree, and $X$ is the finite disjoint union of the spectra
$\operatorname{Spec}(\mathcal O_{X,x})$ of its local rings
([[lem-zero-dimensional-projective-scheme-has-finite-local-charts]]).

[L3] Assume AC. The total length of the zero-dimensional $X$ is
$\operatorname{len}_k(X)=\sum_{x\in X}\ell_{\mathcal O_{X,x}}(\mathcal O_{X,x})[\kappa(x):k]$,
a finite sum over the points of $X$, with $\operatorname{len}_k(\varnothing)=0$
([[def-total-length-of-a-zero-dimensional-projective-scheme]]).

[L4] $(F,G)$ is an $R$-regular sequence, because $F,G$ are homogeneous of
positive degree and share no nonconstant factor
([[lem-coprime-plane-forms-form-a-homogeneous-regular-sequence]],
[[def-regular-sequence-on-a-module]]).

[L5] For an $R$-regular pair $(F,G)$ of positive degrees $d,e$ the Hilbert
function of $S=R/(F,G)$ is constantly equal to $de$ in every degree
$n\ge d+e-2$ ([[lem-complete-intersection-hilbert-series-two-plane-forms]],
[[def-hilbert-function-and-hilbert-series]]).

[L6] Assume AC. For a homogeneous ideal $I\subseteq R$ whose standard chart
rings are zero or of Krull dimension $0$, the eventual value of the Hilbert
function of $R/I$ equals the total length:
$\dim_k(R/I)_m=\operatorname{len}_k(\operatorname{Proj}(R/I))$ for all
sufficiently large $m$
([[lem-eventual-hilbert-function-equals-zero-dimensional-projective-length]]).

[L7] If $x\in D_+(x_i)$ corresponds to the prime
$\mathfrak p_0\subseteq A_i$, then
$\mathcal O_{X,x}\cong(A_i)_{\mathfrak p_0}$ is a localisation of the chart ring
$A_i$ ([[lem-projective-standard-chart-prime-and-local-ring-correspondence]]).

[L8] Localisation at a homogeneous element $t$ of degree $\delta\ge1$ of a
nonnegatively graded ring is graded by
$(R_t)_n=\{r/t^m:r\in R_{n+m\delta}\}$ with degree-preserving localisation map,
and for $t$ of degree one and an ideal $J=(a_1,\ldots,a_k)$ generated by
homogeneous elements one has
$((R/J)_t)_0\cong(R_t)_0/(a_1/t^{\deg a_1},\ldots,a_k/t^{\deg a_k})$
([[lem-localisation-of-a-graded-ring-at-a-homogeneous-element]],
[[def-graded-ring-and-graded-module]]). Moreover, if $\varphi:R\to B$ is a
unital ring homomorphism with $\varphi(x_i)$ a unit, then $\varphi$ extends
uniquely to $R_{x_i}$
([[thm-universal-property-of-localisation]],
[[def-multiplicative-subset-and-localisation]],
[[def-principal-localisation]]); in the polynomial ring $R$ every element is a
finite $k$-linear combination of monomials $x^a$ of total degree $|a|$
([[def-polynomial-ring-over-a-commutative-ring]],
[[def-monomials-multidegree-and-total-degree]],
[[def-homogeneous-polynomial-and-homogeneous-ideal]]).

[L9] Assume AC (declared for consumers). [[def-axiom-of-choice]]



## Proof

**Proof technique:** direct.

1.1 For each $i$ let $\varphi_i:R\to k[y_0,y_1]$ be the substitution $x_i\mapsto1$, $x_j\mapsto y_j$ for $j\ne i$, with unique extension $\Phi_i:R_{x_i}\to k[y_0,y_1]$, and let $\psi_i:k[y_0,y_1]\to(R_{x_i})_0$, $y_j\mapsto x_j/x_i$; then $\Phi_i\psi_i=\mathrm{id}$, so $\psi_i$ is injective with inverse $\Phi_i$ on the degree-zero part, and $\psi_i$ is surjective because a degree-zero element is $r/x_i^m$ with $r\in R_m$, a $k$-linear combination of monomials $x^a$ of degree $m$, and $x^a/x_i^m=\prod_{j\ne i}(x_j/x_i)^{a_j}=\psi_i(y^a)$; hence $\psi_i$ is an isomorphism. [L8, given]

1.2 By [L1] $X\ne\varnothing$, the charts are empty or of dimension $0$, hence each $A_i$ is zero or of Krull dimension $0$, and $\dim S=1$; so the hypothesis of [L6] is met, and by [L2] and [L3] the set $X$ is finite with local rings of finite length and the total length is the displayed finite sum $\operatorname{len}_k(X)=\sum_{x\in X}\ell_{\mathcal O_{X,x}}(\mathcal O_{X,x})[\kappa(x):k]$. [L1, L2, L3]

1.3 By [L4] the pair $(F,G)$ is $R$-regular and $d,e\ge1$, so by [L5] $\dim_kS_n=de$ for every $n\ge d+e-2$. [L4, L5]

2.1 The quotient $S=R/(F,G)$ is standard graded with degree-preserving quotient map, so by [L8] applied with $t=x_i$ (degree one) and $J=(F,G)$ the chart ring is $A_i=(S_{x_i})_0\cong(R_{x_i})_0/(F/x_i^d,G/x_i^e)$; under the isomorphism $\psi_i$ of step 1.1 the two generators correspond to $\Phi_i(F/x_i^d)=F(x_i\mapsto1)=f_i$ and $\Phi_i(G/x_i^e)=G(x_i\mapsto1)=g_i$, the dehomogenisations; hence $A_i\cong k[y_0,y_1]/(f_i,g_i)$, which is claim 3 in the charts, and by [L7] the local algebra at $x\in D_+(x_i)$ is the localisation of this quotient at the corresponding prime. [L7, L8, step 1.1]

2.2 By [L6] applied to the homogeneous ideal $I=(F,G)\subseteq R$, whose chart rings are zero or of dimension $0$ by step 1.2 and whose quotient is $S$, there is $m_0$ with $\dim_kS_m=\operatorname{len}_k(X)$ for every $m\ge m_0$. [L6, step 1.2]

3.1 Taking any $m\ge\max(m_0,d+e-2)$, which exists, step 1.3 gives $\dim_kS_m=de$ and step 2.2 gives $\dim_kS_m=\operatorname{len}_k(X)$; hence $\operatorname{len}_k(X)=de$, which is claim 2. [step 1.3, step 2.2]

4.1 Claims 1 and 3 hold by steps 1.2 and 2.1, and claim 2 by step 3.1; the Axiom of Choice enters through the nonempty zero-dimensional intersection and prime-existence suppliers of [L1], the finite-support and total-length suppliers of [L2] and [L3], and the eventual-value supplier of [L6], the coordinate ring $S$ is not claimed to be Artinian by the dimension statement of [L1], the Axiom of Choice is the standing assumption [L9] declared for consumers, and no saturation or closedness of $k$ is used. [L1, L2, L3, L5, L6, L9, step 1.2, step 2.1, step 3.1, given] ∎
