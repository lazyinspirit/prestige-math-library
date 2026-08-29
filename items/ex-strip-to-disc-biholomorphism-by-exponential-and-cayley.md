---
id: ex-strip-to-disc-biholomorphism-by-exponential-and-cayley
kind: example
title: "A horizontal strip is mapped biholomorphically to the disc by an exponential and a Cayley transform"
status: published
origin: pipeline
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [thm-principal-exponential-biholomorphism-from-principal-strip, thm-upper-half-plane-automorphisms-are-real-mobius-maps]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-29
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Lars V. Ahlfors, Complex Analysis, 3rd ed., Ch. 3 §4.2"
      url: "https://people.math.gatech.edu/~mccuan/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf"
    - title: "Elias M. Stein and Rami Shakarchi, Complex Analysis, Ch. 8 §1"
      url: "https://zr9558.com/wp-content/uploads/2013/11/complex_analysis-stein-shakarchi.pdf"
---

## Example

Let

$$S:=\{\,z\in\mathbb C:0<\operatorname{Im}z<\pi\,\}.$$

The map

$$\Phi(z):=\frac{e^z-i}{e^z+i}$$

is a biholomorphism from $S$ onto the unit disc $\mathbb D$.

## Facts & Assumptions

**Given:** The strip $S$ and the map $\Phi$ above.

[F1] The exponential is holomorphic on $\mathbb C$, and in particular on $S$
([[thm-principal-exponential-biholomorphism-from-principal-strip]]).

[F2] The upper half-plane is the domain
$$\mathbb H=\{\,w\in\mathbb C:\operatorname{Im}w>0\,\},$$
and Möbius maps with real coefficients give its automorphisms
([[thm-upper-half-plane-automorphisms-are-real-mobius-maps]]).

## Verification

1.1 If $z=x+iy\in S$, then $0<y<\pi$, so $e^z=e^x(\cos y+i\sin y)$ has imaginary part $e^x\sin y>0$; hence $e^z\in\mathbb H$. [F1, given]

2.1 For $w=u+iv\in\mathbb H$ one has $|w-i|^2=u^2+(v-1)^2<u^2+(v+1)^2=|w+i|^2$, so $C(w):=(w-i)/(w+i)$ satisfies $|C(w)|<1$ and maps $\mathbb H$ into $\mathbb D$. [step 1.1, algebra]

3.1 The inverse Möbius map is $C^{-1}(\zeta)=i(1+\zeta)/(1-\zeta)$; for $|\zeta|<1$, the identity $\operatorname{Im}\!\left(i\frac{1+\zeta}{1-\zeta}\right)=\frac{1-|\zeta|^2}{|1-\zeta|^2}>0$ shows $C^{-1}(\zeta)\in\mathbb H$, so [F2] confirms that this Cayley map is exactly the standard upper-half-plane automorphism sending $\mathbb H$ biholomorphically to $\mathbb D$. Together with step 1.1, this makes $\Phi=C\circ e^z:S\to\mathbb D$ biholomorphic. [F2, step 2.1, algebra] ∎
