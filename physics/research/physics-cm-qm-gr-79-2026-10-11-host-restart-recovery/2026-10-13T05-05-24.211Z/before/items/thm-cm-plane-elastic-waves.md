---
id: thm-cm-plane-elastic-waves
kind: theorem
title: "Exact plane-wave solutions of the isotropic linear elastic model, with longitudinal and transverse speeds"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 2
deps: [def-cm-linear-elastic-constitutive-law, def-cm-euclidean-spatial-calculus, def-ck-euclidean-maps-and-diffeomorphisms, def-euclidean-inner-product, thm-total-derivative-computes-directional-and-partial-derivatives, thm-algebra-of-derivatives, thm-sine-and-cosine-derivatives, def-sine-and-cosine-by-power-series, def-matrix-space, def-matrix-product-and-identity-matrix, def-trace-of-a-square-matrix]
dependency_roles:
  def-cm-linear-elastic-constitutive-law: mathematical-premise
  def-cm-euclidean-spatial-calculus: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  thm-total-derivative-computes-directional-and-partial-derivatives: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  thm-sine-and-cosine-derivatives: mathematical-premise
  def-sine-and-cosine-by-power-series: mathematical-premise
  def-matrix-space: mathematical-premise
  def-matrix-product-and-identity-matrix: mathematical-premise
  def-trace-of-a-square-matrix: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "R. Abeyaratne, Continuum Mechanics, Volume II of Lecture Notes on the Mechanics of Solids (MIT, 1988, revised 2020), Section 11.2 (the isotropic linearized elastic field equations)"
      url: "https://web.mit.edu/abeyaratne/Volumes/RCA_Vol_II.pdf"
    - title: "K. Likharev, Essential Graduate Physics, Classical Mechanics (September 1, 2026 complete volume), Section 7.7 (3D acoustic waves: plane longitudinal and transverse waves and their speeds)"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"

  precheck: pass
---

## Statement

Let $\rho_0>0$ and Lam\'e parameters $\lambda,\mu\in\mathbb R$ with $\mu>0$ and $\lambda+\frac{2\mu}{3}>0$, let $a,k\in\mathbb R^3$ and $\omega\in\mathbb R\setminus\{0\}$, and define the **plane wave**

$$\xi:\mathbb R\times\mathbb R^3\to\mathbb R^3,\qquad \xi(t,x):=a\cos\bigl(\langle k,x\rangle_2-\omega t\bigr),$$

with the Euclidean inner product $\langle\cdot,\cdot\rangle_2$ ([[def-euclidean-inner-product]]). For each fixed $t$, the spatial displacement map is $\xi_t(x):=\xi(t,x)$. Define the strain and stress fields using the spatial derivative at fixed time:

$$e(t,x):=\frac12\bigl(D_x\xi(t,x)+(D_x\xi(t,x))^{\mathsf T}\bigr),\qquad \sigma(t,x):=\lambda(\operatorname{tr}e(t,x))I_3+2\mu e(t,x).$$

These are the pointwise constitutive formulas of the isotropic linear elastic model ([[def-cm-linear-elastic-constitutive-law]]); in particular $D_x\xi$ is the total derivative of $x\mapsto\xi_t(x)$, not the derivative of the full spacetime map.

Then the componentwise identity

$$\rho_0\,\partial_t^2\xi_i=\sum_{j=1}^{3}\partial_j\sigma_{ij}\qquad(i=1,2,3)$$

holds on all of $\mathbb R\times\mathbb R^3$ if and only if

$$\rho_0\omega^2a=\mu|k|_2^2\,a+(\lambda+\mu)\,\langle k,a\rangle_2\,k . \tag{D}$$

When (D) holds and $a,k$ are nonzero, define the phase speed by $c_{\rm ph}:=|\omega|/|k|_2$. If $a=\alpha k$ for some $\alpha\ne0$ (**longitudinal** polarization), then $\rho_0\omega^2=(\lambda+2\mu)|k|_2^2$ and $c_{\rm ph}^2=(\lambda+2\mu)/\rho_0$. If $\langle k,a\rangle_2=0$ (**transverse** polarization), then $\rho_0\omega^2=\mu|k|_2^2$ and $c_{\rm ph}^2=\mu/\rho_0$. The constitutive positivity hypotheses imply $\lambda+2\mu=(\lambda+2\mu/3)+4\mu/3>0$ and $\mu>0$, so both branch phase speeds are real and positive. (When $k=0$, (D) has no solution with $a\ne0$ and $\omega\ne0$.)

## Facts & Assumptions

**Given:** The parameters $\rho_0,\lambda,\mu$, the vectors $a,k$, the frequency $\omega\ne0$, and the field $\xi$ as constructed.

[F1] Sine and cosine have the usual derivatives, $\sin'=\cos$, $\cos'=-\sin$, and $\sin(0)=0$, $\cos(0)=1$; compositions with affine maps are differentiable by the chain rule ([[thm-sine-and-cosine-derivatives]], [[def-sine-and-cosine-by-power-series]], [[thm-algebra-of-derivatives]], [[thm-total-derivative-computes-directional-and-partial-derivatives]], [[def-ck-euclidean-maps-and-diffeomorphisms]]).

[F2] The strain and stress are computed from the partial derivatives of $\xi$ as in the constitutive definition; $\operatorname{tr}$ and the identity matrix are those of [[def-trace-of-a-square-matrix]] and [[def-matrix-product-and-identity-matrix]] ([[def-cm-linear-elastic-constitutive-law]], [[def-matrix-space]]).

## Proof

**Proof technique:** direct computation; compare the coefficients of the single scalar factor $\cos(\langle k,x\rangle_2-\omega t)$.

1.1 Put $\theta(t,x):=\langle k,x\rangle_2-\omega t$. Then $\partial_t\theta=-\omega$ and $\partial_j\theta=k_j$, so by [F1] and the chain rule $$\partial_t\xi_i=a_i\omega\sin\theta,\qquad \partial_j\xi_i=-a_ik_j\sin\theta,\qquad \partial_t^2\xi_i=-a_i\omega^2\cos\theta .$$ [given, F1, algebra]

2.1 From step 1.1, $e_{ij}=\frac12(\partial_j\xi_i+\partial_i\xi_j)=-\frac12(a_ik_j+a_jk_i)\sin\theta$ and $\operatorname{tr}e=-\langle k,a\rangle_2\sin\theta$. Hence $$\sigma_{ij}=-\sin\theta\Bigl(\lambda\langle k,a\rangle_2\,\delta_{ij}+\mu\bigl(a_ik_j+a_jk_i\bigr)\Bigr) .$$ [step 1.1, F2, algebra]

3.1 Differentiate step 2.1 and use [F1]: $$\sum_j\partial_j\sigma_{ij}=-\cos\theta\sum_jk_j\Bigl(\lambda\langle k,a\rangle_2\delta_{ij}+\mu(a_ik_j+a_jk_i)\Bigr)=-\cos\theta\Bigl(\mu|k|_2^2a_i+(\lambda+\mu)\langle k,a\rangle_2k_i\Bigr),$$ where $\sum_jk_j\delta_{ij}=k_i$, $\sum_jk_j^2=|k|_2^2$ and $\sum_jk_ja_j=\langle k,a\rangle_2$. [step 2.1, F1, algebra]

4.1 The identity $\rho_0\partial_t^2\xi_i=\sum_j\partial_j\sigma_{ij}$ for all $(t,x)$ reads, by steps 1.1 and 3.1, $$\cos\theta\Bigl(\rho_0\omega^2a_i-\mu|k|_2^2a_i-(\lambda+\mu)\langle k,a\rangle_2k_i\Bigr)=0$$ for all $(t,x)$. Choosing $t=0$, $x=0$ gives $\cos\theta=1$, so the bracket vanishes; conversely vanishing of the bracket makes the identity hold everywhere. This is exactly (D). [step 1.1, step 3.1, algebra]

5.1 Assume (D) and $a,k\ne0$. If $a=\alpha k$ with $\alpha\ne0$, then (D) reads $\rho_0\omega^2\alpha k=\mu|k|_2^2\alpha k+(\lambda+\mu)\alpha|k|_2^2k=\alpha|k|_2^2(\lambda+2\mu)k$, so $\rho_0\omega^2=(\lambda+2\mu)|k|_2^2$. If $\langle k,a\rangle_2=0$, then (D) reads $\rho_0\omega^2a=\mu|k|_2^2a$, so $\rho_0\omega^2=\mu|k|_2^2$. Dividing by $\rho_0|k|_2^2$ gives the phase-speed formulas. Positivity follows from $\lambda+2\mu=(\lambda+2\mu/3)+4\mu/3>0$ and $\mu>0$. [step 4.1, given, algebra] ∎

## Remarks

- The theorem verifies exact solutions of the *adopted* constant-coefficient PDE; it does not assert that every solution of the elastic model is a plane wave, that a wave packet propagates unchanged, or that any material realises the model. General initial-value problems for the elastic system are not solved here.

- The identity (D) is the dispersion relation of the plane-wave ansatz. The two eigenvalue branches computed in the last step are the longitudinal and transverse speeds; they require $\mu>0$ and $\lambda+2\mu>0$ respectively, and no claim is made about $\lambda$ alone.
