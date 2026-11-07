---
id: lem-fermat-cubic-surface-is-fano-with-rational-line
kind: lemma
title: "A Fermat cubic surface is Fano and contains a rational line with standard height"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 4
deps:
  - def-smooth-fano-variety-over-number-field
  - def-adelic-metrization-and-anticanonical-height
  - def-absolute-multiplicative-weil-height-on-projective-space-over-a-number-field
  - thm-product-formula-for-number-fields
  - ex-projective-line-height-is-maximum-of-primitive-coordinates
  - def-degree-projective-hypersurface
  - lem-projective-hypersurface-affine-pieces
  - lem-projective-hypersurface-cohomology-sequence
  - lem-smooth-closed-immersion-regular-conormal-sequence
  - lem-smooth-closed-subvariety-dualizing-line-bundle-adjunction
  - def-smooth-projective-dualizing-line-bundle-and-trace
  - thm-jacobian-criterion-smooth-morphism
  - lem-finite-variable-polynomial-rings-over-fields-are-ufds
  - lem-gauss-lemma-over-a-ufd
  - lem-twisting-sheaf-projective-space-ample
  - def-very-ample-invertible-sheaf-relative
  - lem-very-ample-implies-ample
  - def-axiom-of-choice
justified_by: []
proof_strategy: direct
axiom_use: >-
  AC is assumed through the relative Jacobian criterion, projective hypersurface
  sequence, regular-immersion, and adjunction suppliers; no further choice is
  used in the explicit calculations.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Emmanuel Peyre, Points de hauteur bornée, topologie adélique et mesures de Tamagawa, §3.3"
      url: "https://www.numdam.org/item/JTNB_2003__15_1_319_0.pdf"
    - title: "Tim Browning and Daniel Loughran, Varieties with too many rational points, §1 and cubic-surface discussion"
      url: "https://pure.manchester.ac.uk/ws/portalfiles/portal/51264698/Heights.pdf"
    - title: "Jakob Glas, Counting rational points over function fields, PhD thesis, §2.3 (2024)"
      url: "https://research-explorer.ista.ac.at/download/18132/18140/example-phd.pdf"
      locator: "Chapter 2, §2.3, printed pp. 10–11 / PDF pp. 21–22: Manin–Peyre conjecture, alpha-beta-tau factors, thin sets, and accumulating lines on cubic surfaces."
verification: {}
---

## Statement

Assume the Axiom of Choice. Let $X\subset\mathbb P^3_{\mathbb Q}$ be the projective surface
$$
x_0^3+x_1^3+x_2^3+x_3^3=0,
$$
and let $L\subset X$ be the line parametrized by $\ell([u:v])=[u:-u:v:-v]$. Then $X$ is a smooth geometrically integral Fano surface with $-K_X\cong\mathcal O_X(1)$; the line $L$ is defined over $\mathbb Q$, and equip $\mathcal O_{\mathbb P^3}(1)$ with the metric induced at finite places by the model $\mathbb P^3_{\mathbb Z}$ and its line bundle $\mathcal O(1)$, and at the real place by the continuous maximum metric. On the chart $x_i\ne0$ the standard maximum metric is defined by $\|s_i(P)\|_v:=|x_i|_v/\max_j|x_j|_v$, where $s_i$ is its coordinate section and $P=[x_0:x_1:x_2:x_3]$. Transport this metric to $-K_X$ through the displayed isomorphism. Then every $P\in X(\mathbb Q)$ has the standard projective height of the same point in $\mathbb P^3$, and every $[u:v]\in\mathbb P^1(\mathbb Q)$ satisfies $H_{-K_X}(\ell([u:v]))=\max\{|u|,|v|\}$ for coprime integer coordinates $u,v$.

## Statement references

[[def-smooth-fano-variety-over-number-field]]

[[def-adelic-metrization-and-anticanonical-height]]

[[def-absolute-multiplicative-weil-height-on-projective-space-over-a-number-field]]

[[ex-projective-line-height-is-maximum-of-primitive-coordinates]]

## Facts & Assumptions

**Given:** AC, the Fermat cubic hypersurface $X/\mathbb Q$, and the map $\ell:\mathbb P^1\to\mathbb P^3$ given by $[u:v]\mapsto[u:-u:v:-v]$.

[A1] AC is required in the cited hypersurface, Jacobian, conormal, and adjunction suppliers. ([[def-axiom-of-choice]])

[F1] The standard chart $x_i\ne0$ of projective space is affine $3$-space, and the hypersurface equation on it is obtained by setting $x_i=1$. ([[lem-projective-hypersurface-affine-pieces]])

[F2] For a hypersurface presentation locally of finite presentation, an invertible $1\times1$ Jacobian minor gives a smooth chart of relative dimension $3-1=2$. ([[thm-jacobian-criterion-smooth-morphism]])

[F3] A polynomial ring in finitely many variables over a field is a UFD, its irreducibles are prime, and a primitive polynomial is irreducible over that UFD exactly when it is irreducible over the fraction field. ([[lem-finite-variable-polynomial-rings-over-fields-are-ufds]], [[lem-gauss-lemma-over-a-ufd]])

[F4] The degree-$3$ projective hypersurface has ideal sequence $0\to\mathcal O_{\mathbb P^3}(-3)\xrightarrow{\cdot F}\mathcal O_{\mathbb P^3}\to i_*\mathcal O_X\to0$. ([[lem-projective-hypersurface-cohomology-sequence]])

[F5] A smooth closed subscheme of pure codimension one has conormal line bundle $\mathcal I/\mathcal I^2$ and adjunction $\omega_X\cong i^*\omega_{\mathbb P^3}\otimes\det((\mathcal I/\mathcal I^2)^\vee)$. ([[lem-smooth-closed-immersion-regular-conormal-sequence]], [[lem-smooth-closed-subvariety-dualizing-line-bundle-adjunction]])

[F6] $\omega_{\mathbb P^3}\cong\mathcal O_{\mathbb P^3}(-4)$, and $\mathcal O_{\mathbb P^3}(1)$ is very ample, hence ample. ([[def-smooth-projective-dualizing-line-bundle-and-trace]], [[def-very-ample-invertible-sheaf-relative]], [[lem-very-ample-implies-ample]])

[F7] For primitive integer coordinates, the standard absolute height on $\mathbb P^1(\mathbb Q)$ is $\max\{|u|,|v|\}$. ([[ex-projective-line-height-is-maximum-of-primitive-coordinates]])

[F8] The absolute multiplicative height on projective space is the normalized product of local coordinate maxima, and for primitive integer coordinates over $\mathbb Q$ its finite ideal factor is $1$. ([[def-absolute-multiplicative-weil-height-on-projective-space-over-a-number-field]])

[F9] For every $a\in\mathbb Q^\times$, the normalized absolute values satisfy $\prod_v|a|_v=1$. ([[thm-product-formula-for-number-fields]])

## Proof

1.1 Put $F=x_0^3+x_1^3+x_2^3+x_3^3$. Over $\overline{\mathbb Q}$ its partial derivatives are $3x_i^2$, which have no common projective zero. Also $F$ is square-free: if an irreducible factor $h$ occurred twice, $h$ would divide every partial derivative, hence divide each $x_i^2$, impossible because the four variables have no common nonconstant factor. Thus the projective hypersurface is reduced and has degree $3$. [F1, given, algebra]

1.2 On any standard chart, a point has some coordinate $x_i=1$. If all three derivatives of the dehomogenized equation vanished there, the three corresponding homogeneous partials would vanish; Euler's identity $\sum_jx_jF_{x_j}=3F=0$ on $X$ would force the fourth partial to vanish too, contradicting step 1.1. Hence at every point a $1\times1$ Jacobian minor is invertible on a neighborhood. By [F2] each chart is smooth of relative dimension two, so $X_{\overline{\mathbb Q}}$ is smooth and pure of dimension two. [A1, F1, F2, step 1.1, algebra]

2.1 Write $g=x_1^3+x_2^3+x_3^3$ and $A=\overline{\mathbb Q}[x_1,x_2,x_3]$. The same partial-derivative argument as in step 1.1 shows that $g$ is square-free. It is nonconstant, so by [F3] it has an irreducible factor with exponent one. In the fraction field $E=\overline{\mathbb Q}(x_1,x_2,x_3)$, the valuation at that factor is $1$, whereas every cube has valuation divisible by $3$; hence neither $g$ nor $-g$ is a cube in $E$. [F3, step 1.1, algebra]

2.2 The cubic polynomial $T^3+g\in E[T]$ would have a linear factor if reducible, because a reducible cubic over a field has a degree-one factor; such a factor would give a root and make $-g$ a cube. Thus $T^3+g$ is irreducible in $E[T]$. It is monic, hence primitive over the UFD $A$, so [F3] (Gauss's lemma) makes it irreducible in $A[T]=\overline{\mathbb Q}[x_0,x_1,x_2,x_3]$. Its homogeneous ideal is prime, and therefore $X_{\overline{\mathbb Q}}$ is integral. Together with step 1.2 this proves geometric integrality and smoothness. [F3, step 1.2, step 2.1, algebra]

3.1 The closed immersion $i:X\hookrightarrow\mathbb P^3$ is a smooth hypersurface of pure codimension one by step 1.2. By [F4], its ideal sheaf is $\mathcal O_{\mathbb P^3}(-3)$; restricting to $X$ identifies $\mathcal I/\mathcal I^2$ with $\mathcal O_X(-3)$. Consequently the normal line bundle is $\mathcal O_X(3)$. Applying adjunction [F5] and [F6] gives $\omega_X\cong\mathcal O_X(-4)\otimes\mathcal O_X(3)=\mathcal O_X(-1)$, so $-K_X\cong\mathcal O_X(1)$. Since this is the restriction of the very ample hyperplane bundle under a closed immersion, it is very ample and hence ample; thus $X$ is Fano. [A1, F4, F5, F6, step 1.2, algebra]

4.1 Substitution gives $u^3+(-u)^3+v^3+(-v)^3=0$, so $\ell$ maps $\mathbb P^1$ into $X$ and defines a rational line. For any $P=[x_0:x_1:x_2:x_3]\in X(\mathbb Q)$ choose $i$ with $x_i\ne0$. The local height factor from $s_i$ is $\max_j|x_j|_v/|x_i|_v$; multiplying over $v$ and applying [F9] gives the product of local maxima, which is the standard projective height by [F8]. On the line, the maximum of the four absolute coordinate values at $[u:-u:v:-v]$ is $\max\{|u|,|v|\}$, so [F7] gives the stated height for primitive integer coordinates. [given, A1, F7, F8, F9, step 3.1, algebra] ∎
