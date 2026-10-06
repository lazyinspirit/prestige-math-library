---
id: def-chern-character-and-todd-class
kind: definition
title: "The Chern character and the Todd class"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 16
deps:
  - def-axiom-of-choice
  - def-chern-classes-of-a-vector-bundle
  - def-grothendieck-group-of-coherent-sheaves-and-vector-bundles-on-a-scheme
  - def-sheaf-relative-differentials
  - def-smooth-morphism-schemes
  - lem-chern-class-naturality-additivity-and-splitting
  - lem-k-zero-vector-bundles-versus-coherent-sheaves
  - thm-differentials-smooth-locally-free
  - thm-intersection-product-and-chow-ring-of-a-smooth-scheme
justified_by: []
landmark: true
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "The Stacks Project, Chow Homology and Chern Classes, Section 42.45 (Chern character, tag 02UM) and Section 42.65 (Todd classes, tag 02UN)"
      url: "https://stacks.math.columbia.edu/download/chow.pdf"
      locator: "Chapter 42, Section 42.45 (Chern character and tensor products) and Section 42.65 (Todd classes)"
    - title: "Borel and Serre, Le theoreme de Riemann-Roch (1958), §6-§7"
      url: "https://www.numdam.org/item/?id=BSMF_1958__86__97_0"
      locator: "Sections 6-7: Chern classes and the Todd class T(X) as an element of A(X) tensor Q"
---

## Definition

Assume the Axiom of Choice ([[def-axiom-of-choice]]) inherited from the finite
coherent-resolution and cohomological suppliers. Let $k$ be a field and let $X$
be a smooth equidimensional $k$-scheme of finite type
([[def-smooth-morphism-schemes]]), with Chow ring $A^*(X)$
([[thm-intersection-product-and-chow-ring-of-a-smooth-scheme]]) and
vector-bundle group $K^0(X)$
([[def-grothendieck-group-of-coherent-sheaves-and-vector-bundles-on-a-scheme]]).
When $X$ is additionally quasi-projective,
[[lem-k-zero-vector-bundles-versus-coherent-sheaves]] identifies this group with
coherent $K_0(X)$; that extra hypothesis is required for the coherent-group
extension. Write $A^*(X)_{\mathbb Q}:=A^*(X)\otimes_{\mathbb Z}\mathbb Q$. If $n=\dim X$,
$A^i(X)=A_{n-i}(X)=0$ for $i>n$, since there are no negative-dimensional
integral cycles. Every series below is evaluated only through degree $n$;
in particular positive-codimension elements are nilpotent. For the rank-zero
bundle the empty root list gives $\operatorname{ch}(0)=0$ and
$\operatorname{td}(0)=1$.

**Chern roots.** The **Chern roots** of a finite locally free
$\mathcal O_X$-module $\mathcal E$ of rank $r$ are formal symbols
$x_1,\dots,x_r$ with the property that the elementary symmetric functions in the
$x_i$ are the Chern classes: $e_i(x_1,\dots,x_r)=c_i(\mathcal E)$
([[def-chern-classes-of-a-vector-bundle]]); by the splitting principle every
symmetric polynomial expression in the $x_i$ with rational coefficients defines
a well-defined element of $A^*(X)_{\mathbb Q}$
([[lem-chern-class-naturality-additivity-and-splitting]]).

**Chern character.** Define
$$\operatorname{ch}(\mathcal E):=\sum_{j=1}^{r}e^{x_j}=\sum_{m\ge0}\frac{1}{m!}\,p_m(c_1,\dots,c_m)\in A^*(X)_{\mathbb Q},$$
where the second expression expands the power sums in the Chern classes;
explicitly
$\operatorname{ch}=r+c_1+\tfrac12(c_1^2-2c_2)+\tfrac16(c_1^3-3c_1c_2+3c_3)+\cdots$
(the denominators are why we tensor with $\mathbb Q$).

**Todd class.** Define
$$\operatorname{td}(\mathcal E):=\prod_{j=1}^{r}\frac{x_j}{1-e^{-x_j}}\in A^*(X)_{\mathbb Q};$$
explicitly
$\operatorname{td}(\mathcal E)=1+\tfrac12c_1+\tfrac1{12}(c_1^2+c_2)+\tfrac1{24}c_1c_2+\cdots$.
For a smooth $X$ the **Todd class of $X$** is $\operatorname{td}(T_X)$ for the
tangent bundle $T_X=\operatorname{Hom}(\Omega^1_{X/k},\mathcal O_X)$
([[def-sheaf-relative-differentials]],
[[thm-differentials-smooth-locally-free]]).

**Line bundles.** For an invertible sheaf $\mathcal L$ with
$x=c_1(\mathcal L)$: $\operatorname{ch}(\mathcal L)=e^{x}$ and
$\operatorname{td}(\mathcal L)=x/(1-e^{-x})=1+\tfrac12x+\tfrac1{12}x^2-\cdots$.

**Well-definedness.** After truncation at degree $n$, both expressions are symmetric polynomials with rational
coefficients in the Chern roots, hence polynomial expressions in the
elementary symmetric functions; by the splitting principle of
[[lem-chern-class-naturality-additivity-and-splitting]] their values in
$A^*(X)_{\mathbb Q}$ depend only on the Chern classes of $\mathcal E$ and not on
the choice of flag bundle or filtration, because any two filtrations with
invertible quotients give the same symmetric expression in the roots, the
symmetric polynomials being the Chern classes by
[[def-chern-classes-of-a-vector-bundle]]. Rational coefficients are needed for
the exponential and geometric expansions, which is why the target is
$A^*(X)\otimes_{\mathbb Z}\mathbb Q$. The tangent bundle is finite locally free
of rank $\dim X$ by [[thm-differentials-smooth-locally-free]], so its Chern
roots and Todd class are defined; the Todd class is multiplicative in exact sequences, whereas the Chern
character is additive, and the
identification of $K^0(X)$ with $K_0(X)$ on a quasi-projective $X$ lets the
character be evaluated on coherent classes through the finite locally free
resolutions of [[lem-k-zero-vector-bundles-versus-coherent-sheaves]].
