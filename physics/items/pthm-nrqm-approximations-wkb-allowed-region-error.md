---
id: pthm-nrqm-approximations-wkb-allowed-region-error
aliases: [ nrqm-approximations-wkb-allowed-region-error ]
kind: physics-theorem
domain: physics
title: "WKB approximation on an allowed interval of the declared regime model:
  explicit Gronwall error bound away from turning points"
status: published
origin: session
dependency_level: 12
deps:
  - def-nrqm-approximations-framework-wkb-regime-model
  - lem-nrqm-approximations-scaled-line-model-correspondence
  - def-nrqm-framework-quantities-and-units
  - thm-nrqm-controlled-dynamics-allowed-region-wkb-coefficient-equation
  - thm-nrqm-controlled-dynamics-wkb-explicit-error
  - def-countable-choice
  - lem-fundamental-theorem-of-calculus-for-banach-valued-continuous-curves
  - def-bochner-integrable-function
dependency_roles:
  def-nrqm-approximations-framework-wkb-regime-model: formulation-prerequisite
  lem-nrqm-approximations-scaled-line-model-correspondence: mathematical-premise
  def-nrqm-framework-quantities-and-units: formulation-prerequisite
  thm-nrqm-controlled-dynamics-allowed-region-wkb-coefficient-equation: mathematical-premise
  thm-nrqm-controlled-dynamics-wkb-explicit-error: mathematical-premise
  def-countable-choice: mathematical-premise
  lem-fundamental-theorem-of-calculus-for-banach-valued-continuous-curves: mathematical-premise
  def-bochner-integrable-function: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: "The finite-interval WKB error statement for the declared WKB
  regime model: on a closed interval on which the dimensionless potential stays
  strictly below the energy (no turning point), any exact solution of the model
  equation is compared with its leading WKB wave, with the explicit
  Gronwall-type error bound of the cited theorem. The statement is exact at each
  value of the semiclassical parameter; it asserts no asymptotic connection
  across a turning point, no barrier transmission formula, no wave packet and no
  measurement."
empirical_premises: []
sources:
  references:
    - title: "R. Fitzpatrick, Quantum Mechanics (University of Texas at Austin,
        author-hosted course text), Section 5.4 'WKB Approximation' printed and
        PDF pages 70-72 (the WKB function in the classically allowed region, the
        amplitude condition and the validity discussion)"
      url: "https://farside.ph.utexas.edu/teaching/qmech/qmech.pdf"
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section 11.6
        printed pages 253-254 (PDF pages 261-262): the slowly varying amplitude
        equation d ln S/dx = -(1/2) d ln k/dx, its integral and the
        flux-conserving WKBJ wavefunction (11.40)"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
verification:
  precheck: pass
---

## Statement

Adopt the declared WKB regime model of
[[def-nrqm-approximations-framework-wkb-regime-model]] and let its data
$V,m,\hbar,\ell,E_\star,E,W,\lambda,h$ be as in that model, with
hypothesis (W1) on a closed interval $[a,b]\subset\mathbb R$: $W$ is $C^{2}$
on a neighbourhood of $[a,b]$ and $\lambda-W(\xi)\ge\delta>0$ for some
$\delta>0$ and all $\xi\in[a,b]$. Put
$$p(\xi):=\sqrt{\lambda-W(\xi)}>0,\qquad \theta(\xi):=\int_{a}^{\xi}p(s)\,ds,\qquad q(\xi):=\frac{3p'(\xi)^{2}}{4p(\xi)^{2}}-\frac{p''(\xi)}{2p(\xi)},$$
and
$$w_{\pm}(\xi):=p(\xi)^{-1/2}e^{\pm i\theta(\xi)/h},\qquad M(\xi):=\begin{pmatrix}w_{+}(\xi)&w_{-}(\xi)\\ w_{+}'(\xi)&w_{-}'(\xi)\end{pmatrix}.$$
Let $u\in C^{2}([a,b];\mathbb C)$ be an exact solution of the dimensionless
model equation $u''=(W-\lambda)u/h^{2}$ on $[a,b]$, and let
$$c(\xi)=M(\xi)^{-1}\begin{pmatrix}u(\xi)\\ u'(\xi)\end{pmatrix}$$
be its coefficient curve. Then, with $\|\cdot\|_{1}$ the $\ell^{1}$ norm on
$\mathbb C^{2}$ and all quantities read in the model's units:

(a) $\|c(\xi)\|_{1}\le\|c(a)\|_{1}\exp\bigl(h\int_{a}^{\xi}|q(s)|/p(s)\,ds\bigr)$
for every $\xi\in[a,b]$;

(b) $\|c(\xi)-c(a)\|_{1}\le\|c(a)\|_{1}\bigl(\exp\bigl(h\int_{a}^{\xi}|q(s)|/p(s)\,ds\bigr)-1\bigr)$;

(c) *pointwise wavefunction error.* With $\Psi(\xi):=c_{+}(a)w_{+}(\xi)+
c_{-}(a)w_{-}(\xi)$ the leading WKB wave,
$$|u(\xi)-\Psi(\xi)|\le p(\xi)^{-1/2}\|c(a)\|_{1} \Bigl(\exp\Bigl(h\int_{a}^{\xi}\frac{|q(s)|}{p(s)}\,ds\Bigr)-1\Bigr);$$

(d) the estimate is exact at each fixed $h$; it degenerates as
$p(\xi)\to0$ and therefore excludes turning points by hypothesis (W1). It
asserts nothing about connecting asymptotics across a turning point, about
barrier transmission or reflection, about packets or detectors, and it makes
no claim that the right-hand side is small unless the dimensionless quantity
$h\int_{a}^{b}|q|/p$ is actually small. The estimate is an error bound of
Gronwall type, not an asymptotic expansion, and the physical reading of the
interval $[a,b]$ is $[x_{a},x_{b}]=\ell[a,b]$ in the line model with potential
$V(\ell\xi)=E_\star W(\xi)$ and energy $E_\star\lambda$.

## Facts & Assumptions

**Given:** the WKB regime model with its scales and data; hypothesis (W1) on $[a,b]$; the functions $p,\theta,q,w_{\pm},M$; an exact solution $u\in C^{2}([a,b])$ and its coefficient curve $c$; the Axiom of Countable Choice.

[F1] **Coefficient representation.** The Wronskian and smoothness statements for $w_{\pm}$, and the coefficient definition $M c=(u,u')^{\mathsf T}$, are those of [[thm-nrqm-controlled-dynamics-allowed-region-wkb-coefficient-equation]] clauses (a)-(c). In particular $M$ is invertible and $u=w_{+}c_{+}+w_{-}c_{-}$, $u'=w_{+}'c_{+}+w_{-}'c_{-}$.

[F2] **Integral and norm facts.** A continuously differentiable finite-dimensional vector curve satisfies $c(x)-c(a)=\int_a^x c'(s)\,ds$, and the induced matrix norm satisfies $\|Bc\|_1\le\|B\|_1\|c\|_1$; these are the fundamental theorem of calculus and the definition of the induced $\ell^1$ norm ([[lem-fundamental-theorem-of-calculus-for-banach-valued-continuous-curves]], [[def-bochner-integrable-function]]).

[F3] **Model instantiation.** The model's equation is $u''=(W-\lambda)u/h^{2}$, which is $u''+(p^{2}/h^{2})u=0$ with $p=\sqrt{\lambda-W}$ on the allowed interval; hypothesis (W1) gives $p\in C^{2}([a,b])$, $p>0$, and $h>0$. The correspondence with the physical line model is [[lem-nrqm-approximations-scaled-line-model-correspondence]] ([[def-nrqm-approximations-framework-wkb-regime-model]] clauses (b), (c)).

## Proof

**Proof technique:** direct; derive both coefficient equations from the defining $2\times2$ system, obtain growth and deviation by integration, and then convert the coefficient deviation to a pointwise wavefunction error.

**Given:** the data of the statement and [F1]-[F3].

1.1 [Both coefficient relations and their matrix equation] By [F1], $M\in C^{1}$ is invertible and $(u,u')^{\mathsf T}\in C^{1}$, so $c=M^{-1}(u,u')^{\mathsf T}$ is $C^{1}$ and satisfies $Mc=(u,u')^{\mathsf T}$. Differentiating the first component of this identity and comparing it with the second gives $w_{+}c_{+}'+w_{-}c_{-}'=0$. Differentiating the second component, using $u''=-(p^{2}/h^{2})u$ and $w_{\pm}''+(p^{2}/h^{2})w_{\pm}=q w_{\pm}$, gives $w_{+}'c_{+}'+w_{-}'c_{-}'=-q u$. Thus $Mc'=(0,-qu)^{\mathsf T}$ and, since the Wronskian $W_0=-2i/h$, $c'=-q u M^{-1}(0,1)^{\mathsf T}=\frac{q}{W_0}\begin{pmatrix}w_{+}w_{-}&w_{-}^{2}\\-w_{+}^{2}&-w_{+}w_{-}\end{pmatrix}c=:Bc.$ Each entry of $B$ has modulus $h|q|/(2p)$ because $|w_{+}|=|w_{-}|=p^{-1/2}$ and $|W_0|=2/h$; the induced $\ell^{1}$ matrix norm is the largest column sum, hence $\|B\|_{1}=h|q|/p$. [F1, F3, given, algebra]

2.1 [Growth bound] Put $v(s):=\|B(s)\|_{1}=h|q(s)|/p(s)$ and $U(x):=\|c(a)\|_{1}+\int_a^x v(s)\|c(s)\|_{1}\,ds$. By [F2] and step 1.1, $\|c(x)\|_{1}\le U(x)$ and $U'(x)=v(x)\|c(x)\|_{1}\le v(x)U(x)$. Therefore $\frac{d}{dx}\bigl(e^{-\int_a^xv}U(x)\bigr)\le0$, so $\|c(x)\|_{1}\le U(x)\le\|c(a)\|_{1}e^{\int_a^xv}$, which is clause (a). [step 1.1, F2, algebra]

3.1 [Deviation bound by integration] Again by [F2] and step 1.1, $\|c(x)-c(a)\|_{1}\le\int_a^x v(s)\|c(s)\|_{1}\,ds\le\|c(a)\|_{1}\int_a^x v(s)e^{\int_a^s v(t)\,dt}\,ds.$ The last integral is $e^{\int_a^xv}-1$ by the fundamental theorem of calculus applied to $s\mapsto e^{\int_a^s v}$; this proves clause (b), including the case $c(a)=0$. This derives the deviation estimate from the growth estimate without subtracting two growth bounds or treating $c-c(a)$ as a homogeneous solution. [step 1.1, step 2.1, F2, algebra]

4.1 [Pointwise wavefunction error] The coefficient representation in [F1] gives $u(x)-\Psi(x)=w_{+}(x)(c_{+}(x)-c_{+}(a))+w_{-}(x)(c_{-}(x)-c_{-}(a)).$ Since $|w_{\pm}(x)|=p(x)^{-1/2}$, its absolute value is at most $p(x)^{-1/2}\|c(x)-c(a)\|_{1}$; substituting step 3.1 gives exactly clause (c). [F1, step 3.1, algebra]

5.1 [Scope and degeneracy] The hypotheses used are (W1) and $W\in C^{2}$ on a neighbourhood of $[a,b]$: in particular $\lambda-W\ge\delta>0$, so $p\ge\sqrt\delta$ and no turning point occurs on the interval. The displayed estimate is exact at each fixed $h$; its error is small only when the displayed factor $\exp(h\int_a^x|q|/p)-1$ is small, which is an additional condition on the model data. The line-model units and physical interval $[\ell a,\ell b]$ are those of [[def-nrqm-approximations-framework-wkb-regime-model]] and [[lem-nrqm-approximations-scaled-line-model-correspondence]]. This proves clause (d), without asserting a connection across a turning point or a measured quantity. [step 1.1, step 2.1, step 3.1, step 4.1, F3, given] ∎

## Remarks

- **What "controlled approximation" means here.** The theorem does not say that the WKB wave is close to the exact solution; it gives the exact Gronwall factor by which the WKB coefficient can change, so smallness is a checkable hypothesis on $h$ and on the dimensionless ratio $|q|/p$.
- **Turning points are outside the statement.** Hypothesis (W1) is exactly the exclusion of turning points; the connection problem across a simple turning point is a separate theorem of this page.
