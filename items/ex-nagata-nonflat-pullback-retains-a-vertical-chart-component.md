---
id: ex-nagata-nonflat-pullback-retains-a-vertical-chart-component
kind: example
title: A nonflat pullback of a blowup chart has an extra vertical component
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
deps:
  - lem-nagata-finite-affine-blowup-chart-gluing
  - lem-nagata-constrained-closures-separated-by-blowup
  - def-flat-and-faithfully-flat-modules-and-ring-maps
  - def-quotient-ring
  - def-multiplicative-subset-and-localisation
proof_strategy: direct
axiom_use: No choice principle is used; all charts and closure kernels are computed by polynomial and localized quotient rings.
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: Pierre Deligne, Le théorème de plongement de Nagata, Kyoto Journal of Mathematics 50 (2010)
      url: https://publications.ias.edu/sites/default/files/Le%20th%C3%A9or%C3%A8me%20de%20plongement%20de%20Nagata.pdf
      locator: Corrected Lemma 0.3, printed p. 662; the coordinate example illustrates its nonflat base change, rather than quoting a source example.
---

## Example

Let $k$ be a field, $X=\operatorname{Spec}k[x,y]$, $Z=V(y)\subset X$, $F=V(x)\subset X$, $G=V(x,y)$, and $Y=Z$. Let $p:Z\hookrightarrow X$ be the closed immersion. Then $Y\cap p^{-1}(F)=p^{-1}(G)$ as closed subschemes, and $p$ is not flat. Blow up $G$ and pull the blowup back to $Z$. On the $x$-chart the pulled-back coordinate ring is
$$k[x,t]/(xt),\qquad t=y/x.$$
The closure of $Y\setminus p^{-1}(G)$ on this chart has ideal $(t)$, so the entire pulled-back chart is larger than that closure: its vertical component $V(x)$ is removed by taking the closure. On the $y$-chart, with $s=x/y$, the pulled-back ring is $k[s]$ and that closure is empty. The strict transform of $F$ is empty on the $x$-chart and has ideal $(s)$ on the $y$-chart. Hence the closure of $Y$ off the center is disjoint from the inverse image of the strict transform of $F$, exactly as in Nagata's constrained-closure separation lemma.

## Example references

[[lem-nagata-constrained-closures-separated-by-blowup]]

[[lem-nagata-finite-affine-blowup-chart-gluing]]

## Facts & Assumptions

**Given:** The field, affine schemes and subschemes in the Example.

[F1] The affine blowup of a finitely generated ideal is formed from its fraction charts, with the canonical overlap identifications; it is an isomorphism off the center. [[lem-nagata-finite-affine-blowup-chart-gluing]]

[F2] On a blowup chart, the closure of the original closed locus off the center has the kernel ideal of the map to its localized quotient. This construction allows arbitrary nonflat base change. [[lem-nagata-constrained-closures-separated-by-blowup]]

[F3] A flat module preserves injectivity after tensoring. Localization inverts the specified element and permits the zero ring; quotient rings impose the specified ideal relations. [[def-flat-and-faithfully-flat-modules-and-ring-maps]] [[def-multiplicative-subset-and-localisation]] [[def-quotient-ring]]

## Verification

1.1 Put $A=k[x,y]$ and $B=A/(y)=k[x]$. The ideals of $F$ and $G$ in $A$ are $(x)$ and $(x,y)$, and their extensions to $B$ are both $(x)$. Since $Y=Z$, this gives the claimed scheme-theoretic equality. Multiplication by $y$ is injective on $A$, as can be checked on its polynomial coefficients. After tensoring with $B$, it becomes the zero map $B\to B$ and is not injective because $B\ne0$. Criterion [F3] therefore proves that $B$ is not flat over $A$, so $p$ is not flat. [F3, given, algebra]

2.1 The two charts in [F1] are $A_x'=k[x,t]$ with $y=xt$ and $A_y'=k[y,s]$ with $x=ys$. For example $k[x,t]\to A[1/x]$ sending $t\mapsto y/x$ is injective: after inverting $x$ it is the polynomial change of variable $y=xt$, and $k[x,t]$ has no $x$-torsion. Its image is precisely $A[(x,y)/x]$. The other chart is obtained by exchanging $x,y$. Tensoring each chart with $B=A/(y)$ gives $B_x'=k[x,t]/(xt)$ and $B_y'=k[y,s]/(y)=k[s]$. [F1, F3, step 1.1, construct, algebra]

3.1 On the $x$-chart the complement of the exceptional locus is $D(x)$. Localization gives $(B_x')_x=k[x,x^{-1}]$ with $t=0$, so its kernel is exactly $(t)$: the quotient by $(t)$ is $k[x]$, which injects into $k[x,x^{-1}]$, while $x$ kills $(t)$ in $B_x'$. Thus [F2] gives the stated closure. It is a proper closed subscheme of $\operatorname{Spec}B_x'$ because $t\ne0$ in $k[x,t]/(xt)$, as reduction modulo $x$ shows. The component $V(x)$ has coordinate ring $k[t]$ and is not contained in that closure. On the $y$-chart the element $y$ is zero in $B_y'$, so localizing at $y$ gives the zero ring and [F2] makes the closure empty there. For $F$, on the $x$-chart its ideal $(x)$ becomes the unit ideal after inverting $x$, so its strict transform is empty. On the $y$-chart its ideal is $(ys)$, and the kernel of $k[y,s]\to k[y,y^{-1},s]/(s)$ is $(s)$, since $k[y]$ injects into its localization. Thus the strict transform has the asserted chart descriptions. On each chart one of the two loci is empty, proving their global disjointness. [F1, F2, F3, step 2.1, algebra] ∎
