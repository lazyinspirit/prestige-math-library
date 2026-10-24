---
id: ex-equivariant-index-on-a-two-sphere
kind: example
title: "The de Rham index character of a rotating two-sphere"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
page: qftx-equivariant-index-examples
dependency_level: 1
deps:
  - def-equivariant-elliptic-complex-index
  - def-countable-choice
  - thm-de-rham-cohomology-of-spheres
  - thm-general-stokes-theorem
dependency_roles:
  def-equivariant-elliptic-complex-index: mathematical-premise
  def-countable-choice: mathematical-premise
  thm-de-rham-cohomology-of-spheres: mathematical-premise
  thm-general-stokes-theorem: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Zelin Yi, A Groupoid Proof of the Lefschetz fixed point formula, Theorem 1.1 (local-term convention)"
      url: "https://arxiv.org/pdf/2003.00955"
verification:
  precheck: pass
---

## Example

Assume countable choice. Give $S^2=\{(x,y,z)\in\mathbb R^3:x^2+y^2+z^2=1\}$ its outward orientation and the complexified de Rham complex $E^j=\Lambda^jT^*S^2\otimes_{\mathbb R}\mathbb C$, with differential $d_{\mathbb C}(\alpha+i\beta)=d\alpha+i\,d\beta$. Let $T=\mathbb R/\mathbb Z$ act by rotation through angle $2\pi s$ about the $z$-axis for $[s]\in T$, with section action $(g^{-1})^*$. For every nonidentity $g=[s]$, the fixed set consists of the north and south poles. At a fixed point $p$ for which $I-dg_p$ is invertible, put $A_p=(d(g^{-1})_p)^*\otimes1$ on $T_p^*S^2\otimes_{\mathbb R}\mathbb C$ and define its isolated fixed-point contribution by

$$c_p(g):=\frac{\sum_{j=0}^2(-1)^j\operatorname{tr}(\Lambda^j A_p)}{|\det_{\mathbb R}(I-dg_p)|}.$$

For every nonidentity rotation both poles satisfy this invertibility condition, $c_p(g)=1$ at each pole, and the de Rham index character satisfies $\chi_{E^\bullet}(g)=\sum_{p\in(S^2)^g}c_p(g)=2$.

## Example references

[Yi, Theorem 1.1: the isolated fixed-point quotient convention; the identity for this sphere is verified directly below](https://arxiv.org/pdf/2003.00955)

## Facts & Assumptions

**Given:** The standard two-sphere, its outward orientation, the stated rotation action, and $g=[s]\ne[0]$.

[A1] Assume countable choice, as required by the sphere cohomology and Stokes suppliers. [[def-countable-choice]]

[F1] The index character is the alternating trace on finite-dimensional cohomology representations. [[def-equivariant-elliptic-complex-index]]

[F2] Under countable choice, $H^0_{\mathrm{dR}}(S^2)=\mathbb R$, $H^1_{\mathrm{dR}}(S^2)=0$, and $H^2_{\mathrm{dR}}(S^2)=\mathbb R$. [[thm-de-rham-cohomology-of-spheres]]

[F3] For a compact oriented manifold without boundary, the integral of an exact top form is zero. [[thm-general-stokes-theorem]]

## Verification

1.1 At $x\in S^2$ and $0\ne\xi\in T_x^*S^2$, the positive-frequency principal symbol of $d_{\mathbb C}$ is $B=i\xi\wedge$. For the round metric let $\xi^\sharp\in T_xS^2$ satisfy $\langle\xi^\sharp,v\rangle=\xi(v)$ and define contraction on a $j$-form $\eta$ by $(\iota_{\xi^\sharp}\eta)(v_1,\ldots,v_{j-1})=\eta(\xi^\sharp,v_1,\ldots,v_{j-1})$, with contraction zero in degree zero. The identity $\iota_{\xi^\sharp}(\xi\wedge\eta)+\xi\wedge\iota_{\xi^\sharp}\eta=|\xi|^2\eta$ gives $Bh+hB=I$ for $h=(i|\xi|^2)^{-1}\iota_{\xi^\sharp}$. Since $B^2=0$, every $B$-closed form is $B$-exact, including the endpoint degrees, so the symbol sequence is exact. Also $d_{\mathbb C}^2=0$, and pullback by every rotation commutes with $d_{\mathbb C}$. Thus this is an equivariant elliptic complex in [F1]. Writing every complex form uniquely as $\alpha+i\beta$ identifies the complex kernel and image of $d_{\mathbb C}$ with the respective real kernel and image tensored with $\mathbb C$: closedness and exactness hold componentwise. Thus $H^j(E^\bullet)=H^j_{\mathrm{dR}}(S^2;\mathbb R)\otimes_{\mathbb R}\mathbb C$ equivariantly. The fiber action is $\rho_t(x)=\Lambda^j((dt_x^{-1})^*)\otimes1$, covering $x\mapsto t\cdot x$, and the section action is $(t^{-1})^*$. The normalized area form is $\omega=(x\,dy\wedge dz+y\,dz\wedge dx+z\,dx\wedge dy)/(4\pi)$. In spherical coordinates it is $\sin\vartheta\,d\vartheta\wedge d\varphi/(4\pi)$, so its integral over $S^2$ is $1$. It is rotation-invariant. By [F3], it cannot be exact; [F2] then makes $[\omega]$ a generator of $H^2_{\mathrm{dR}}(S^2)$. Constants generate $H^0$ and are fixed by $T$, while $H^1=0$. Thus the action on both nonzero cohomology groups is trivial and [F1] gives $\chi_{\operatorname{Ind}_T(E^\bullet)}(g)=1+1=2$. [A1, F1, F2, F3, given, algebra]

1.2 Write $\theta=2\pi s$. The equation $g(x,y,z)=(x,y,z)$ and $\theta\notin2\pi\mathbb Z$ force $x=y=0$, so $M^g=\{(0,0,1),(0,0,-1)\}$. At either pole, $dg$ on the tangent plane is the rotation matrix $R_\theta$, hence $|\det_{\mathbb R}(I-dg)|=\det(I-R_\theta)=(1-\cos\theta)^2+\sin^2\theta=2-2\cos\theta>0$. [given, algebra]

2.1 The complex graded fiber at a pole is $\Lambda^\bullet(T_p^*S^2\otimes_{\mathbb R}\mathbb C)$, with fiber action $\Lambda^j A_p$ in degree $j$. The eigenvalues of $A_p$ are $e^{i\theta}$ and $e^{-i\theta}$, so its exterior powers have traces $1$, $e^{i\theta}+e^{-i\theta}$, and $1$ in degrees zero, one, and two. Their alternating sum is $2-2\cos\theta$. Substitution into the definition of $c_p(g)$, using the positive denominator in step 1.2, gives $c_p(g)=1$ at each pole. Thus $\sum_{p\in(S^2)^g}c_p(g)=1+1=2=\chi_{E^\bullet}(g)$ by step 1.1. This proves the fixed-point identity for this example by computing its two sides independently. [given, step 1.1, step 1.2, algebra] ∎
