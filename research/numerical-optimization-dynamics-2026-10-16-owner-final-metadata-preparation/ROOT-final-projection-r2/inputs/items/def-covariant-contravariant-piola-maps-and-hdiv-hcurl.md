---
id: def-covariant-contravariant-piola-maps-and-hdiv-hcurl
kind: definition
title: Covariant and contravariant Piola maps and H(div)/H(curl) spaces
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps: [def-matching-affine-simplicial-meshes, def-sobolev-space-wkp-and-its-norm, def-weak-derivative-of-a-locally-integrable-function, def-l-p-space-as-a-quotient-by-null-functions, def-countable-choice]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: Jean-Luc Guermond, MATH 661 Fall 2025, Chapter 14, “H(div) finite elements”
      url: https://people.tamu.edu/~guermond/M661_FALL_2025/chap14.pdf
      locator: "§14.4, printed pp. 162–163: contravariant Piola definition and degree-of-freedom transformation."
    - title: Jean-Luc Guermond, MATH 661 Fall 2025, Chapters 15–16, “H(curl) finite elements” and “Local interpolation in H(div) and H(curl)” 
      url: https://people.tamu.edu/~guermond/M661_FALL_2025/chap15.pdf
      locator: "§15.4, printed pp. 176–178: covariant Piola and tangential moments."
    - title: Joachim Schöberl, Numerical Methods for Partial Differential Equations, Chapter 6
      url: https://jschoeberl.github.io/iFEM/_downloads/900feda304f95ee42fd24abe742d7564/numpde.pdf
      locator: "§6.5, printed pp. 130–131: contravariant Piola transformation and normal-flux preservation."
verification:
  precheck: n/a
---

## Definition

Assume Countable Choice. Let $d\ge2$, take $\widehat K=\widehat S_d$ as in
[[def-matching-affine-simplicial-meshes]], and let $K=F(\widehat K)$ under an
affine cell map $F(\widehat x)=A\widehat x+b$ with $\det A>0$. Weak derivatives use the signed test identity of
[[def-weak-derivative-of-a-locally-integrable-function]]. For $d\ge2$ define
$$H(\operatorname{div},K):=\{v\in L^2(K;\mathbb R^d):\operatorname{div}v\in L^2(K)\},$$
where $\operatorname{div}v=\sum_iD_i v_i$ weakly, meaning
$\int_Kv\cdot\nabla\phi=-\int_K(\operatorname{div}v)\phi$ for every
$\phi\in C_c^\infty(K)$. For $d=2$, define the weak scalar curl by
$\int_K(\operatorname{curl}v)\phi
=\int_K(v_1\partial_2\phi-v_2\partial_1\phi)$ for every
$\phi\in C_c^\infty(K)$. For $d=3$, define the weak vector curl by
$\int_K(\operatorname{curl}v)\cdot\psi
=\int_Kv\cdot\operatorname{curl}\psi$ for every
$\psi\in C_c^\infty(K;\mathbb R^3)$. In dimensions $d=2,3$ set
$$H(\operatorname{curl},K):=\{v\in L^2(K;\mathbb R^d):\operatorname{curl}v\in L^2(K;\mathbb R^{d_*})\},$$
with $d_*=1$ for $d=2$ and $d_*=3$ for $d=3$.

The **covariant Piola pushforward** of a reference vector field is
$$ (\mathcal P_F^{\mathrm{curl}}\widehat v)(F(\widehat x)):=A^{-T}\widehat v(\widehat x),$$
and the **contravariant Piola pushforward** is
$$ (\mathcal P_F^{\mathrm{div}}\widehat v)(F(\widehat x)):=\frac{1}{\det A}A\widehat v(\widehat x).$$
The scalar pullback is $u\mapsto u\circ F$. The exact mapping properties,
weak differential identities, and oriented trace-moment transformations
are established in the corresponding affine Piola theorem below.
