---
id: thm-affine-piola-differential-and-trace-moment-identities
kind: theorem
title: Affine Piola maps commute with differential operators and preserve moments
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps: [def-covariant-contravariant-piola-maps-and-hdiv-hcurl, def-sobolev-space-wkp-and-its-norm, lem-affine-pullback-weak-derivatives-and-scaling, lem-affine-simplex-gauss-green-formula, thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions, def-countable-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Jean-Luc Guermond, MATH 661 Fall 2025, Chapter 14
      url: https://people.tamu.edu/~guermond/M661_FALL_2025/chap14.pdf
      locator: "§14.4, printed pp. 162–163: contravariant Piola divergence and flux moments."
    - title: Joachim Schöberl, Numerical Methods for Partial Differential Equations, Chapter 6
      url: https://jschoeberl.github.io/iFEM/_downloads/900feda304f95ee42fd24abe742d7564/numpde.pdf
      locator: "§6.5, printed pp. 130–131: H(div) Piola and normal-flux preservation; Chapter 8 §8.3, pp. 170–172: commuting H(curl) interpolation."
verification: {judge: {model: "gpt-6-luna", verdict: pass, date: 2026-10-17}}
---

## Statement

Assume Countable Choice. Let $d=2$ or $3$ and let $F(\widehat x)=A\widehat x+b$ map a reference
simplex to an affine cell with $\det A>0$. The contravariant Piola map
$\mathcal P_F^{\mathrm{div}}\widehat v=(\det A)^{-1}A\widehat v\circ F^{-1}$
maps $H(\operatorname{div},\widehat S_d)$ into $H(\operatorname{div},K)$ and
$$\operatorname{div}(\mathcal P_F^{\mathrm{div}}\widehat v) =(\det A)^{-1}(\widehat{\operatorname{div}}\widehat v)\circ F^{-1}.$$
The covariant Piola map
$\mathcal P_F^{\mathrm{curl}}\widehat v=A^{-T}\widehat v\circ F^{-1}$
maps $H(\operatorname{curl},\widehat S_d)$ into $H(\operatorname{curl},K)$;
in $d=2$ its scalar curl is
$(\det A)^{-1}(\widehat{\operatorname{curl}}\widehat v)\circ F^{-1}$,
and in $d=3$ its vector curl is
$(\det A)^{-1}A(\widehat{\operatorname{curl}}\widehat v)\circ F^{-1}$.
For every $\widehat u\in W^{1,2}(\widehat S_d;\mathbb R)$, the scalar
pullback $u=\widehat u\circ F^{-1}$ belongs to $W^{1,2}(K;\mathbb R)$ and
its gradient satisfies
$$\nabla u=\mathcal P_F^{\mathrm{curl}}(\widehat\nabla\widehat u).$$
For smooth fields, contravariant normal fluxes satisfy
$v\cdot n\,dS=\widehat v\cdot\widehat n\,d\widehat S$; covariant tangential
pullbacks satisfy $v(F(\widehat x))\cdot A\widehat\tau=
\widehat v(\widehat x)\cdot\widehat\tau$ for every reference tangent
$\widehat\tau$. Thus edge line integrals and normal-flux moments are
preserved, and face tangential moments transform with this pullback and
the induced facet surface Jacobian. These formulas record the chosen
orientation; reversing a facet orientation reverses its signed moment.

## Facts & Assumptions

**Given:** Countable Choice, the affine map, $\det A>0$, $d\in\{2,3\}$, and the weak graph spaces and Piola maps of [[def-covariant-contravariant-piola-maps-and-hdiv-hcurl]].

[F1] Weak derivatives pull back through an affine map by the constant matrix chain rule, and affine change of variables multiplies volume by $\det A$. ([[lem-affine-pullback-weak-derivatives-and-scaling]])

[F2] The cofactor area-vector identity is $n\,dS=\det(A)A^{-T}\widehat n\,d\widehat S$, with outward orientation preserved when $\det A>0$. ([[lem-affine-simplex-gauss-green-formula]])

[F3] Lebesgue change of variables holds for nonnegative measurable integrands; apply it to positive and negative parts for integrable signed pairings. ([[thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions]])

[F4] The affine pullback and change-of-variables suppliers assume Countable Choice. ([[def-countable-choice]])

[F5] Applying the affine weak-derivative transformation to $F^{-1}$ gives
$D_{x_i}(\widehat u\circ F^{-1})=\sum_j(A^{-1})_{ji}
(D_{\widehat x_j}\widehat u)\circ F^{-1}$ for
$\widehat u\in W^{1,2}(\widehat S_d;\mathbb R)$.
([[lem-affine-pullback-weak-derivatives-and-scaling]])

## Proof

1.1 For $\widehat v\in H(\operatorname{div},\widehat S_d)$ and $\phi\in C_c^\infty(K)$, put $\widehat\phi=\phi\circ F$. Then [F1] and the determinant substitution give $$\int_K(\mathcal P_F^{\mathrm{div}}\widehat v)\cdot\nabla\phi\,dx =\int_{\widehat S_d}\widehat v\cdot\nabla\widehat\phi\,d\widehat x =-\int_{\widehat S_d}(\widehat{\operatorname{div}}\widehat v)\widehat\phi\,d\widehat x.$$ The final expression equals $-\int_K[(\det A)^{-1}\widehat{\operatorname{div}}\widehat v\circ F^{-1}]\phi\,dx$. This is the distributional divergence identity. [F1, F3, F4, given]

1.2 For smooth $\widehat v$, differentiate $v=A^{-T}\widehat v\circ F^{-1}$ componentwise. In three dimensions, write $C=A^{-1}$. For any $z\in\mathbb R^3$ and indices $m,\ell$, the scalar triple product gives $$z\cdot((C^Te_m)\times(C^Te_\ell)) =\det[z,C^Te_m,C^Te_\ell] =\det(C)\det[C^{-T}z,e_m,e_\ell] =\det(C)\,z\cdot(C^{-1}(e_m\times e_\ell)).$$ Since this holds for every $z$, comparing components yields $\epsilon_{ijk}C_{mj}C_{\ell k}=(\det A)^{-1}A_{ir}\epsilon_{rm\ell}$. The chain rule then gives $\operatorname{curl}_xv=(\det A)^{-1}A(\operatorname{curl}_{\widehat x}\widehat v)\circ F^{-1}$. In two dimensions write $A=\begin{pmatrix}a&b\\c&d\end{pmatrix}$ and $\Delta=ad-bc>0$. Then $v_1=(d\widehat v_1-c\widehat v_2)/\Delta$, $v_2=(-b\widehat v_1+a\widehat v_2)/\Delta$, $\partial_{x_1}=(d\partial_{\widehat x_1}-c\partial_{\widehat x_2})/\Delta$, and $\partial_{x_2}=(-b\partial_{\widehat x_1}+a\partial_{\widehat x_2})/\Delta$. Substituting these four expressions and cancelling the two mixed terms gives $\partial_{x_1}v_2-\partial_{x_2}v_1 =(\det A)^{-1}(\partial_{\widehat x_1}\widehat v_2- \partial_{\widehat x_2}\widehat v_1)\circ F^{-1}$. [F1, algebra]

2.1 The physical field and candidate divergence in step 1.1 lie in $L^2(K)$: affine change of variables makes their squared norms finite constant multiples of the reference squared norms, and multiplication by the fixed matrix $A/(\det A)$ preserves finiteness. The test identity in step 1.1 therefore gives membership in $H(\operatorname{div},K)$ and the asserted divergence formula. [F1, F3, F4, step 1.1, algebra]

2.2 For $d=3$, take $\psi\in C_c^\infty(K;\mathbb R^3)$ and set $\widehat\psi=A^T(\psi\circ F)$. The component calculation in step 1.2 gives $\operatorname{curl}_{\widehat x}\widehat\psi= \det(A)A^{-1}(\operatorname{curl}_x\psi)\circ F$. Change variables and use the weak curl identity on the reference cell: $$\int_Kv\cdot\operatorname{curl}\psi\,dx =\int_{\widehat S_d}\widehat v\cdot\operatorname{curl}\widehat\psi\,d\widehat x =\int_{\widehat S_d}(\widehat{\operatorname{curl}}\widehat v)\cdot\widehat\psi\,d\widehat x =\int_K[(\det A)^{-1}A(\widehat{\operatorname{curl}}\widehat v)\circ F^{-1}]\cdot\psi\,dx.$$ For $d=2$, take $\phi\in C_c^\infty(K)$ and set $\widehat\phi=\phi\circ F$. The determinant identity $\det(A)\det(A^{-T}\widehat v,A^{-T}\nabla\widehat\phi) =\det(\widehat v,\nabla\widehat\phi)$ transforms the weak scalar-curl pairing into $\int_{\widehat S_d}(\widehat v_1\partial_2\widehat\phi- \widehat v_2\partial_1\widehat\phi)$, which by the weak reference curl identity equals $\int_{\widehat S_d}(\widehat{\operatorname{curl}}\widehat v)\widehat\phi$ and hence the pairing with the asserted physical scalar curl. In both dimensions the mapped field and candidate curl lie in $L^2$ by the fixed-matrix and determinant bounds. Thus the weak definition gives the claimed $H(\operatorname{curl})$ mapping. [F1, F3, F4, step 1.2, given, algebra]

2.3 The normal flux identity follows by dotting $v=(\det A)^{-1}A\widehat v$ with the area vector [F2]: $$v\cdot n\,dS=(\det A)^{-1}A\widehat v\cdot \det(A)A^{-T}\widehat n\,d\widehat S =\widehat v\cdot\widehat n\,d\widehat S.$$ For a reference tangent $\widehat\tau$, $v(F)\cdot A\widehat\tau=(A^{-T}\widehat v)\cdot A\widehat\tau =\widehat v\cdot\widehat\tau$. Along an edge this equality is the line-form identity $v\cdot dx=\widehat v\cdot d\widehat x$. On a facet, integration against a pulled-back tangent vector and scalar weight gives $$\int_Fv\cdot(A\widehat\tau)(\widehat q\circ F^{-1})\,dS =\int_{\widehat F}(\widehat v\cdot\widehat\tau)\widehat qJ_F\,d\widehat S,$$ where $J_F$ is the affine facet surface Jacobian. The normal-flux moment with scalar weight $\widehat q$ equals $\int_{\widehat F}(\widehat v\cdot\widehat n)\widehat q\,d\widehat S$. The signs are those of the selected outward facet orientation; reversing it reverses the signed normal moment. [F2, F4, step 1.1, step 1.2, algebra]

3.1 For $\widehat u\in W^{1,2}(\widehat S_d;\mathbb R)$, apply [F5] to $F^{-1}$. For each $i$, $D_{x_i}(\widehat u\circ F^{-1})=\sum_j(A^{-1})_{ji}(D_{\widehat x_j}\widehat u)\circ F^{-1}.$ In vector notation this is $\nabla_x(\widehat u\circ F^{-1})=A^{-T}(\widehat\nabla\widehat u)\circ F^{-1}=\mathcal P_F^{\mathrm{curl}}(\widehat\nabla\widehat u),$ which proves the scalar-gradient identity. [F1, F5, algebra] ∎

