---
id: ex-supg-convection-boundary-layer-coarse-mesh
kind: example
title: "A two-cell SUPG mesh misses the interior shape of an outflow layer"
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 3
deps: [def-supg-one-dimensional-convection-diffusion-model, def-supg-one-dimensional-residual-form, lem-supg-one-dimensional-optimal-parameter]
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pass
sources:
  references:
    - title: "Volker John, Numerical Methods for Convection-Dominated Problems, lecture notes, Chapter 5"
      url: "https://www.wias-berlin.de/people/john/LEHRE/NUM_KONV_PROB_13_14/num_conv_dom.pdf"
      locator: "Example 5.16, printed pp. 55–56, and Example 5.30, printed p. 64: exact one-dimensional nodal fitting and unresolved boundary layers."
    - title: "Hans Petter Langtangen, INF5620: Numerical Methods for Partial Differential Equations, lecture slides"
      url: "https://hplgit.github.io/INF5620/doc/web/literature/slides5620_12_8.pdf"
      locator: "Slides 79–80, PDF p. 9: the one-dimensional optimal parameter and nodal exactness."
---

## Example

Take $b>0$, $\epsilon>0$, $f=0$, and endpoint data $u(0)=0$, $u(1)=1$. On the two-cell mesh $h=1/2$, the exact-parameter P1 SUPG solution has the exact nodal value at $x=1/2$. Nevertheless, at a fixed point inside the outflow cell its error tends to $0.98$ as $\epsilon\downarrow0$. The example separates nodal fitting from resolution of the layer inside an element.

## Facts & Assumptions

**Given:** The model on $(0,1)$ with $b>0$, $\epsilon>0$, $f=0$, endpoint values $0,1$, two equal cells, and the exact parameter $\tau$ from the one-dimensional SUPG form.

[F1] [[def-supg-one-dimensional-convection-diffusion-model]]: the equation is $-\epsilon u''+bu'=f$, the two-cell P1 trial function is continuous with the prescribed endpoint values, and $\mathrm{Pe}=bh/(2\epsilon)$ for $b>0$.

[F2] [[def-supg-one-dimensional-residual-form]]: $a_h(w_h,v_h)=\epsilon(w_h',v_h')+b(w_h',v_h)+\tau b^2(w_h',v_h')$, with the corresponding residual-weighted load, and $\tau=h(2b)^{-1}(\coth(\mathrm{Pe})-\mathrm{Pe}^{-1})$ for $b>0$.

[F3] [[lem-supg-one-dimensional-optimal-parameter]]: the reference parameter $\tau$ is strictly positive.

## Verification

1.1 Put $r=b/\epsilon$. The function $u(x)=(e^{rx}-1)/(e^r-1)$ has endpoint values $0,1$, and $-\epsilon u''+bu'=(-\epsilon r^2+br)e^{rx}/(e^r-1)=0$. Hence it is the exact solution. [F1, given, algebra]

2.1 Let $\phi$ be the P1 hat function at $x=h=1/2$, let $\chi_h\in S_h(0,1)$ have nodal values $(0,0,1)$, and write $u_h=U\phi+\chi_h$. Put $D=\epsilon+\tau b^2>0$ by [F3]. Since $\phi'=1/h$ on the left cell and $-1/h$ on the right, $\int_0^1(\phi')^2dx=2/h$ and $\int_0^1\phi'\phi\,dx=\frac12[\phi^2]_0^1=0$, so $a_h(\phi,\phi)=2D/h$. Also $\chi_h'=0$ on the left and $1/h$ on the right, giving $D\int\chi_h'\phi'=-D/h$ and $b\int\chi_h'\phi=b/h\int_h^1\phi=b/2$. Thus $a_h(\chi_h,\phi)=-D/h+b/2$ and the one interior equation is $D(2U-1)/h+b/2=0$. By [F2] and the Péclet formula in [F1], $D=\epsilon+(bh/2)(\coth(\mathrm{Pe})-1/\mathrm{Pe})=(bh/2)\coth(\mathrm{Pe})$, so $U=(1-\tanh(\mathrm{Pe}))/2=1/(e^{2\mathrm{Pe}}+1)$. The exact value $u(h)=(e^{bh/\epsilon}-1)/(e^{2bh/\epsilon}-1)$ is the same number because $2\mathrm{Pe}=bh/\epsilon$. [F1, F2, F3, step 1.1, algebra]

3.1 At $x=0.99$, the piecewise-linear value is $u_h(0.99)=0.98+0.02U$, which tends to $0.98$ as $\epsilon\downarrow0$. The exact value is $(e^{0.99b/\epsilon}-1)/(e^{b/\epsilon}-1)$, which tends to zero because $b>0$ and $0.99<1$. Therefore the pointwise error tends to $0.98$. The exact midpoint node does not resolve the exponential layer inside the final cell. [step 1.1, step 2.1, algebra] ∎
