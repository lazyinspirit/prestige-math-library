---
id: ex-em-residual-lorenz-example
kind: example
title: "A homogeneous-wave gauge generator changes Lorenz potentials without changing their fields"
domain: physics
status: draft
origin: pipeline
dependency_level: 18
deps: [pthm-em-lorenz-gauge-wave-form, pthm-em-gauge-invariance, def-em-gauge-transformation, def-em-potential-gauge-and-field-conventions, def-em-complex-plane-wave, def-laplacian-of-a-c2-function, def-wave-equation-cauchy-data-and-wave-speed, def-euclidean-inner-product, thm-sine-and-cosine-derivatives, thm-chain-rule-for-total-derivatives, thm-algebra-of-derivatives, def-directional-and-partial-derivatives, def-ck-euclidean-maps-and-diffeomorphisms, thm-eulers-formula]
dependency_roles:
  pthm-em-lorenz-gauge-wave-form: physical-result
  pthm-em-gauge-invariance: physical-result
  def-em-gauge-transformation: formulation-prerequisite
  def-em-potential-gauge-and-field-conventions: mathematical-premise
  def-em-complex-plane-wave: mathematical-premise
  def-laplacian-of-a-c2-function: mathematical-premise
  def-wave-equation-cauchy-data-and-wave-speed: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  thm-sine-and-cosine-derivatives: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  def-directional-and-partial-derivatives: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  thm-eulers-formula: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "An example on the free-space branch of the framework's gauge structure: a cosinusoidal gauge generator satisfying the homogeneous wave equation changes a Lorenz potential pair while preserving the Lorenz condition and the field pair. It asserts no bounded-domain or prescribed-data gauge statement and no empirical claim."
sources:
  references:
    - title: "David Tong, Electromagnetism, University of Cambridge Part II Mathematical Tripos lecture notes (2026 printing, 236 pp.)"
      url: "https://davidtong.org/pdfs/teaching/electromagnetism/electro.pdf"
      locator: "§6.1 printed pp. 134-135: the gauge transformation of the potential and the wave equation square-box chi = f whose homogeneous case leaves the gauge condition and the fields unchanged"
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2025 archived author manuscript, AMS Graduate Studies in Mathematics)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "§7.1 printed pp. 167-170, eqs. (7.1)-(7.4): the plane-wave solutions of the homogeneous wave equation and the dispersion relation underlying |k| = omega/c"
verification:
  precheck: pass
---

## Example

Let $c>0$, let $k\in\mathbb R^3\setminus\{0\}$, put $\omega:=c\lVert k\rVert_2>0$ ([[def-euclidean-inner-product]]), and let

$$\chi(x,t):=\cos(k\cdot x-\omega t),$$

the real part, by $\exp(i\theta)=\cos\theta+i\sin\theta$ of [[thm-eulers-formula]], of the complex plane wave $e^{i(k\cdot x-\omega t)}$ of [[def-em-complex-plane-wave]] with wave vector $k$ and frequency $\omega=c\lVert k\rVert_2$. For the SI interpretation, use numerical components $x$ in m, $t$ in s, $k$ in m$^{-1}$ and $\omega$ in s$^{-1}$, so the phase is dimensionless, and give this gauge generator amplitude one V s as in [[def-em-gauge-transformation]]; the displayed $\chi$ is its numerical value in V s. Then $\chi$ is of class $C^\infty$ on $\mathbb R^3\times\mathbb R$ and $W\chi=0$, where $W=c^{-2}\partial_t^2-\Delta$ is the wave expression of [[def-em-potential-gauge-and-field-conventions]] (the normalization $W=c^{-2}\Box_c$ of the wave operator of [[def-wave-equation-cauchy-data-and-wave-speed]], [[def-laplacian-of-a-c2-function]]); indeed $\partial_t^2\chi=-\omega^2\chi$, $\Delta\chi=-\lVert k\rVert_2^2\chi$ and $\omega^2=c^2\lVert k\rVert_2^2$, so $W\chi=c^{-2}(-c^2\lVert k\rVert_2^2\chi)+\lVert k\rVert_2^2\chi=0$ ([[thm-sine-and-cosine-derivatives]], [[thm-chain-rule-for-total-derivatives]], [[thm-algebra-of-derivatives]]).

Consequently, for every potential pair $(\varphi,A)$ of class $C^2$ jointly on $\mathbb R^3\times\mathbb R$ ([[def-em-potential-gauge-and-field-conventions]]), the gauge-transformed pair satisfies

$$G(T_\chi(\varphi,A))=G(\varphi,A)\qquad\text{and}\qquad E(T_\chi(\varphi,A))=E(\varphi,A),\quad B(T_\chi(\varphi,A))=B(\varphi,A)$$

on $\mathbb R^3\times\mathbb R$ ([[pthm-em-lorenz-gauge-wave-form]], [[pthm-em-gauge-invariance]], [[def-em-gauge-transformation]]); in particular, if $(\varphi,A)$ is in Lorenz gauge then $T_\chi(\varphi,A)$ is again in Lorenz gauge with the same field pair. Explicitly $\partial_t\chi=\omega\sin(k\cdot x-\omega t)$ and $\nabla\chi=-k\sin(k\cdot x-\omega t)$, so $\varphi'=\varphi-\omega\sin(k\cdot x-\omega t)$ and $A'=A-k\sin(k\cdot x-\omega t)$. The zero pair is in Lorenz gauge, and its transform $(-\omega\sin(k\cdot x-\omega t),\ -k\sin(k\cdot x-\omega t))$ is a nonzero pair that remains in Lorenz gauge and still represents the zero field pair: it is nonzero because otherwise $\partial_t\chi$ would vanish identically, forcing $\partial_t^2\chi=0$, whereas $\partial_t^2\chi(0,0)=-\omega^2\ne0$. Thus the Lorenz condition does not determine the potential pair. The example is the residual generator $W\chi=0$ of [[pthm-em-lorenz-gauge-wave-form]] on the free-space branch; on a bounded domain with prescribed gauge boundary data the admissible generators are restricted, and no such data-dependent claim is made here.

## Facts & Assumptions

**Given:** A constant $c>0$, a vector $k\in\mathbb R^3\setminus\{0\}$, the frequency $\omega:=c\lVert k\rVert_2>0$, the function $\chi(x,t)=\cos(k\cdot x-\omega t)$ on $\mathbb R^3\times\mathbb R$, an arbitrary potential pair $(\varphi,A)$ of class $C^2$ jointly on $\mathbb R^3\times\mathbb R$, and the zero potential pair.

[F1] Wave vocabulary: for a $C^2$ function $u$ one has $Wu=c^{-2}\partial_t^2u-\Delta u$, the normalization $W=c^{-2}\Box_c$ of the wave operator $\Box_c=\partial_t^2-c^2\Delta$ of speed $c$; for a potential pair $G=\operatorname{div}A+c^{-2}\partial_t\varphi$, the pair is in Lorenz gauge when $G=0$, and a class $C^m$ generator acts by $T_\chi(\varphi,A)=(\varphi-\partial_t\chi,\ A+\nabla\chi)$ on a class $C^m$ pair with $m\ge2$, giving a class $C^{m-1}$ pair ([[def-em-potential-gauge-and-field-conventions]], [[def-wave-equation-cauchy-data-and-wave-speed]], [[def-laplacian-of-a-c2-function]]).

[F2] Plane-wave vocabulary: for $k\in\mathbb R^3$ and a real parameter $\omega$ the phase is $\theta(x,t)=\langle k,x\rangle-\omega t$ and the complex plane wave is $\exp(i\theta(x,t))$, with $\langle\cdot,\cdot\rangle$ the Euclidean inner product and the norm $\lVert x\rVert_2=\sqrt{\langle x,x\rangle}$ ([[def-em-complex-plane-wave]], [[def-euclidean-inner-product]]); Euler's formula $\exp(i\theta)=\cos\theta+i\sin\theta$ identifies $\chi$ with the real part ([[thm-eulers-formula]]).

[F3] Sine and cosine: $(\sin u)'=\cos u$ and $(\cos u)'=-\sin u$ on $\mathbb R$, with $\sin0=0$ and $\cos0=1$; differentiating the two formulas repeatedly exhibits every higher derivative as $\pm\sin$ or $\pm\cos$, which are continuous, so both functions are $C^\infty$ ([[thm-sine-and-cosine-derivatives]]).

[F4] Chain rule and algebra of derivatives: composition of $C^m$ maps is $C^m$, the chain rule computes $D(g\circ f)(a)=Dg(f(a))\circ Df(a)$, and partial derivatives are the one-variable derivatives along coordinate lines and obey the sum and scalar rules ([[thm-chain-rule-for-total-derivatives]], [[thm-algebra-of-derivatives]], [[def-directional-and-partial-derivatives]], [[def-ck-euclidean-maps-and-diffeomorphisms]]).

[F5] Gauge shift of the Lorenz divergence: if $(\varphi,A)$ is a potential pair of class $C^2$ jointly and $\chi$ a gauge function of class $C^2$ jointly, then $G(T_\chi(\varphi,A))=G(\varphi,A)-W\chi$ on the region of definition ([[pthm-em-lorenz-gauge-wave-form]]).

[F6] Gauge invariance: for a potential pair and a gauge function of class $C^k$ jointly with $k\ge2$, the transform $T_\chi(\varphi,A)$ is a potential pair of class $C^{k-1}$ with the same field pair as $(\varphi,A)$ ([[pthm-em-gauge-invariance]], [[def-em-gauge-transformation]]).

## Verification

**Proof technique:** direct; compute the first and second derivatives of the cosinusoidal generator, conclude $W\chi=0$ from the dispersion relation $\omega=c\lVert k\rVert_2$, apply the gauge-shift and gauge-invariance theorems, and instantiate at the zero pair with an explicit nonzero witness.

1.1 The generator is smooth with the displayed first derivatives. The phase $\theta(x,t)=\langle k,x\rangle-\omega t$ is an affine function of $(x,t)$, hence $C^\infty$; the cosine is $C^\infty$ by [F3], and the composition $\chi=\cos\circ\theta$ is $C^\infty$ on $\mathbb R^3\times\mathbb R$ by [F4]. The chain rule of [F4] gives $\partial_t\chi=-\sin\theta\cdot\partial_t\theta=\omega\sin\theta$ and $\partial_i\chi=-\sin\theta\cdot\partial_i\theta=-k_i\sin\theta$ for $i=0,1,2$ in the cited Euclidean coordinate convention, because $\partial_t\theta=-\omega$ and $\partial_i\theta=k_i$; in vector form $\partial_t\chi=\omega\sin(k\cdot x-\omega t)$ and $\nabla\chi=-k\sin(k\cdot x-\omega t)$, the inner product and coordinates being those of [F2]. [given, F2, F3, F4]

2.1 The generator satisfies the homogeneous wave equation. Differentiating the first derivatives of step 1.1 by the chain rule [F4] gives $\partial_t^2\chi=\omega\cos\theta\cdot(-\omega)=-\omega^2\cos\theta=-\omega^2\chi$ and, for each $i$, $\partial_i\partial_i\chi=-k_i\cos\theta\cdot k_i=-k_i^2\cos\theta$, so summing over $i$ and using $\langle k,k\rangle=\lVert k\rVert_2^2=\sum_ik_i^2$ [F2] gives $\Delta\chi=-\lVert k\rVert_2^2\cos\theta=-\lVert k\rVert_2^2\chi$ by the definition of the Laplacian [F1]. Substituting into $W$ [F1] and using $\omega^2=c^2\lVert k\rVert_2^2$, $W\chi=c^{-2}(-\omega^2\chi)-(-\lVert k\rVert_2^2\chi)=(-\omega^2c^{-2}+\lVert k\rVert_2^2)\chi=0$ on $\mathbb R^3\times\mathbb R$. [step 1.1, F1, F2, F3, F4]

3.1 The gauge shift preserves the Lorenz divergence and the field pair. The pair $(\varphi,A)$ and the generator $\chi$ are of class $C^2$ (indeed $\chi$ is $C^\infty$ by step 1.1), so by [F5] $G(T_\chi(\varphi,A))=G(\varphi,A)-W\chi=G(\varphi,A)$ by step 2.1, and by [F6] with $k=2$ the transformed pair is a class $C^1$ potential pair with the same field pair as $(\varphi,A)$. In particular, if $G(\varphi,A)=0$ then $G(T_\chi(\varphi,A))=0$, so a pair in Lorenz gauge is transformed into a pair in Lorenz gauge with unchanged fields. [step 2.1, F5, F6]

4.1 The zero-pair instance and its nonvanishing. The zero pair $(0,0)$ is a $C^2$ potential pair with $G(0,0)=\operatorname{div}0+c^{-2}\partial_t0=0$ by [F1], so it is in Lorenz gauge; by step 3.1 its transform is in Lorenz gauge with the zero field pair, and by step 1.1 it is $(\varphi',A')=(-\partial_t\chi,\nabla\chi)=(-\omega\sin\theta,\ -k\sin\theta)$ with $\theta(x,t)=k\cdot x-\omega t$. This pair is not the zero pair: if it were, then $\varphi'=-\partial_t\chi$ would vanish identically, hence $\partial_t^2\chi$ would vanish identically, whereas the computation of step 2.1 gives $\partial_t^2\chi(0,0)=-\omega^2\cos0=-\omega^2\ne0$ because $\omega>0$ and $\cos0=1$ [F3]. Hence the zero field pair has two distinct Lorenz-gauge representatives, the zero pair and its transform, and the Lorenz condition does not determine the potential pair. [step 1.1, step 2.1, step 3.1, F1, F3]

5.1 Conclusion and scope. Steps 1.1 and 2.1 verify that the cosinusoidal generator solves $W\chi=0$ on all of $\mathbb R^3\times\mathbb R$; step 3.1 records that such a generator shifts the Lorenz divergence by $-W\chi=0$ and preserves the field pair; and step 4.1 exhibits the explicit nonzero transform of the zero pair, a pair with the zero field pair that is still in Lorenz gauge. The construction uses no boundary condition, no choice principle, no Maxwell equation and no empirical premise; it is the free-space branch, and bounded domains with prescribed gauge data are outside its scope. [step 1.1, step 2.1, step 3.1, step 4.1, F1] ∎

## Remarks

- **Why this is the residual freedom.** The gauge-reachability theorem solves $W\chi=G$ to reach Lorenz gauge; a generator with $W\chi=0$ changes a Lorenz pair without leaving Lorenz gauge, so the gauge condition alone cannot pin down the representation. The example realises the homogeneous equation by the elementary plane-wave dispersion relation $\omega=c\lVert k\rVert_2$.
