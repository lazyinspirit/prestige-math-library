---
id: pthm-nrqm-approximations-wkb-allowed-region-error
aliases: [nrqm-approximations-wkb-allowed-region-error]
kind: physics-theorem
domain: physics
title: "WKB approximation on an allowed interval of the declared regime model: explicit Gronwall error bound away from turning points"
status: draft
origin: session
dependency_level: 11
deps: [def-nrqm-approximations-framework-wkb-regime-model, lem-nrqm-approximations-scaled-line-model-correspondence, def-nrqm-framework-quantities-and-units, thm-nrqm-controlled-dynamics-allowed-region-wkb-coefficient-equation, thm-nrqm-controlled-dynamics-wkb-explicit-error, def-countable-choice]
dependency_roles:
  def-nrqm-approximations-framework-wkb-regime-model: formulation-prerequisite
  lem-nrqm-approximations-scaled-line-model-correspondence: mathematical-premise
  def-nrqm-framework-quantities-and-units: formulation-prerequisite
  thm-nrqm-controlled-dynamics-allowed-region-wkb-coefficient-equation: mathematical-premise
  thm-nrqm-controlled-dynamics-wkb-explicit-error: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: "The finite-interval WKB error statement for the declared WKB regime model: on a closed interval on which the dimensionless potential stays strictly above the energy (no turning point), any exact solution of the model equation is compared with its leading WKB wave, with the explicit Gronwall-type error bound of the cited theorem. The statement is exact at each value of the semiclassical parameter; it asserts no asymptotic connection across a turning point, no barrier transmission formula, no wave packet and no measurement."
empirical_premises: []
sources:
  references:
    - title: "R. Fitzpatrick, Quantum Mechanics (University of Texas at Austin, author-hosted course text), Section 5.4 'WKB Approximation' printed and PDF pages 70-72 (the WKB function in the classically allowed region, the amplitude condition and the validity discussion)"
      url: "https://farside.ph.utexas.edu/teaching/qmech/qmech.pdf"
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section 11.6 printed pages 253-254 (PDF pages 261-262): the slowly varying amplitude equation d ln S/dx = -(1/2) d ln k/dx, its integral and the flux-conserving WKBJ wavefunction (11.40)"
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

[F1] **Coefficient equation.** With the data of the statement: $w_{\pm}\in C^{2}([a,b])$, $w_{\pm}''+(p^{2}/h^{2})w_{\pm}=q\,w_{\pm}$, the Wronskian is $w_{+}w_{-}'-w_{+}'w_{-}=-2i/h$, the coefficient curve obeys $c'=Bc$ with $\|B(\xi)\|_{1}=h|q(\xi)|/p(\xi)$, and $u=w_{+}c_{+}+w_{-}c_{-}$ ([[thm-nrqm-controlled-dynamics-allowed-region-wkb-coefficient-equation]] clauses (a)-(c)).

[F2] **Gronwall bounds.** Under [F1], for every $\xi\in[a,b]$: the growth bound (a), the deviation bound (b) and the pointwise error (c) hold with $|w_{\pm}(\xi)|=p(\xi)^{-1/2}$ ([[thm-nrqm-controlled-dynamics-wkb-explicit-error]] clauses (a)-(c)).

[F3] **Model instantiation.** The model's equation is $u''=(W-\lambda)u/h^{2}$, which is $u''+(p^{2}/h^{2})u=0$ with $p=\sqrt{\lambda-W}$ on the allowed interval; the model's hypothesis (W1) is exactly the pair of hypotheses on $p$ required by [F1]-[F2] ($p\in C^{2}([a,b])$, $p>0$, $h>0$), and the correspondence with the physical line model is [[lem-nrqm-approximations-scaled-line-model-correspondence]] ([[def-nrqm-approximations-framework-wkb-regime-model]] clauses (b), (c)).

## Proof

**Proof technique:** direct; read the model equation as the supplier's coefficient equation with $p=\sqrt{\lambda-W}$, then transfer the supplier's three bounds and their hypotheses.

**Given:** the data of the statement and [F1]-[F3].

1.1 [Hypothesis matching] On $[a,b]$ the function $p=\sqrt{\lambda-W}$ is $C^{2}$ and positive with $p^{2}=\lambda-W\ge\delta$, because $W$ is $C^{2}$ there and $\lambda-W\ge\delta>0$; the model equation $u''=(W-\lambda)u/h^{2}$ therefore reads $u''+(p^{2}/h^{2})u=0$, and $u\in C^{2}([a,b])$ is an exact solution in the sense of [F1]. The matrix $M$ of the statement is the matrix of [F1], and $c=M^{-1}(u,u')^{\mathsf T}$ is the coefficient curve; the Wronskian is nonzero, so $c$ is well defined. [F1, F3, given, algebra]

2.1 [Transfer of the bounds] Applying [F2] to the equation of step 1.1 and the exact solution $u$ gives, for every $\xi\in[a,b]$, the growth bound (a), the deviation bound (b) and the pointwise bound (c) with $|w_{\pm}(\xi)| =p(\xi)^{-1/2}$ exactly as displayed; all quantities $p,q,h$ are the model's dimensionless data, so no unit conversion is needed inside the estimate. [step 1.1, F2, algebra]

3.1 [Scope and degeneracy] The hypotheses used are (W1) and $W\in C^{2}$ on a neighbourhood of $[a,b]$: in particular $\lambda-W$ is bounded below by $\delta>0$ on the interval, so $p\ge\sqrt\delta>0$ and no zero of $p$ occurs in $[a,b]$; as $\delta$ decreases to $0$ the bound is not asserted to remain useful, and no turning-point connection is contained in [F2]. The estimate is an inequality at each fixed $h$, and the statement that the error is small requires the explicit factor $\exp(h\int|q|/p)-1$ to be small, which is a condition on the model's data, not a consequence of the model's axioms. The physical reading of $[a,b]$ and the units are those of clause (d) of the statement and of [[lem-nrqm-approximations-scaled-line-model-correspondence]]. This proves (d). [step 1.1, step 2.1, F2, F3, given] ∎

## Remarks

- **What "controlled approximation" means here.** The theorem does not say that the WKB wave is close to the exact solution; it gives the exact Gronwall factor by which the WKB coefficient can change, so smallness is a checkable hypothesis on $h$ and on the dimensionless ratio $|q|/p$.
- **Turning points are outside the statement.** Hypothesis (W1) is exactly the exclusion of turning points; the connection problem across a simple turning point is a separate theorem of this page.
