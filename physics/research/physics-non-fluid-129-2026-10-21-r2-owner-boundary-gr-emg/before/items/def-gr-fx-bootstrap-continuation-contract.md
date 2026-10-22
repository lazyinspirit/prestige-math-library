---
id: def-gr-fx-bootstrap-continuation-contract
kind: definition
title: "A quantitative continuation and bootstrap contract"
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: physics
dependency_level: 2
deps:
  - thm-gr-fx-finite-slab-stability
  - def-gr-fx-fixed-gauge-data-topology
dependency_roles:
  thm-gr-fx-finite-slab-stability: mathematical-premise
  def-gr-fx-fixed-gauge-data-topology: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: pending
sources:
  references:
    - title: "G. Métivier, The Mathematics of Nonlinear Optics (2009), Chapter 3, §§3.3–3.5, PDF pp. 23–29: symmetric-hyperbolic existence, stability, continuation and a bootstrap-continuation implication"
      url: "https://www.math.u-bordeaux.fr/~gmetivie/NLO2008.pdf"
    - title: "Qian Wang, Lectures on Nonlinear Wave Equations (2015), §6.3, proof of Theorem 22, PDF pp. 174–186: continuity method, decay estimates and continuation"
      url: "https://people.maths.ox.ac.uk/wangq1/Lecture_notes/nonlinear_wave_9.pdf"
    - title: "S. Klainerman and J. Szeftel, Kerr stability for small angular momentum, arXiv:2104.11857v1 (2021), abstract and §1.2.1, PDF pp. 2 and 22–24"
      url: "https://arxiv.org/pdf/2104.11857"
    - title: "J. L. Jaramillo, J. A. Valiente Kroon and E. Gourgoulhon, From Geometry to Numerics: interdisciplinary aspects in mathematical and numerical relativity, arXiv:0712.2332v2 (2008), §§1.2.1 and 2.2, PDF pp. 2–3 and 11–12"
      url: "https://arxiv.org/pdf/0712.2332"

---

## Definition

Fix one evolution problem, its state space and its declared classical solution class. For the general-relativity application here, use one fixed periodic symmetric-hyperbolic system on $\mathbb T^3_{2\pi}$ with integer regularity $s\ge5$, a fixed gauge, smooth coefficient maps on an open state domain, symmetric principal matrices and a positive time matrix. On each compact time slab, its normalized state $u$ belongs to $L^\infty H^s\cap C^0H^{s-1}$ and has $\partial_tu\in L^\infty H^{s-1}$, with the fixed-gauge data and coefficient bounds specified in the references below.

A forward solution on $[0,T_{\max})$ is **maximal** in this solution class when no solution on $[0,T_{\max}+\rho)$, for any $\rho>0$, agrees with it on $[0,T_{\max})$. Let $E_{\rm raw}$ be a specified nonnegative scalar functional of the solution, continuous on every compact subinterval of $[0,T_{\max})$. If $E_{\rm raw}$ has units, choose a fixed positive scale $E_*$ with the same units and set $E=E_{\rm raw}/E_*$. In the general-relativity convention the time coordinate is $x^0=ct_{\rm phys}$ in metres; choose a fixed length scale $L_*>0$ and use the dimensionless time $t=x^0/L_*$. Thus $E$ and $t$ are dimensionless. The constants $A$, $\epsilon$ and $\eta$ below are dimensionless as well. In a purely mathematical application, take these variables as real scalars without a physical interpretation.

Specify a finite list of dimensionless margin functions $m_j:[0,T_{\max})\to\mathbb R$ and thresholds $\mu_j>0$. Write $\mathcal M(T)$ when $m_j(t)\ge\mu_j$ for every listed $j$ and every $0\le t<T$. The **continuation criterion** is a separate result for the chosen evolution problem: if a solution has a finite right endpoint $T$ with $E(t)\le\eta$ for every $0\le t<T$ and $\mathcal M(T)$, then it extends past $T$ in the same solution class.

For constants $A>0$, $\epsilon>0$ and $\eta>0$ with $2A\epsilon^2<\eta$, a **bootstrap estimate** is the implication, required on every finite $T<T_{\max}$,

$$\left[ E(t)\le2A\epsilon^2\text{ for all }0\le t\le T\right]\quad\Longrightarrow\quad\left[ E(t)\le A\epsilon^2\text{ for all }0\le t\le T\right].$$

This contract records the continuity and continuation inputs needed by an application. It does not itself prove the bootstrap estimate, the margin bounds, or any Einstein evolution estimate.

## Definition references

[[def-gr-fx-fixed-gauge-data-topology]]

[[thm-gr-fx-finite-slab-stability]]

[Metivier, Chapter 3, §§3.3–3.5](https://www.math.u-bordeaux.fr/~gmetivie/NLO2008.pdf)

[Wang, §6.3](https://people.maths.ox.ac.uk/wangq1/Lecture_notes/nonlinear_wave_9.pdf)

[Klainerman and Szeftel, abstract and §1.2.1](https://arxiv.org/pdf/2104.11857)

[Jaramillo, Valiente Kroon and Gourgoulhon, §§1.2.1 and 2.2](https://arxiv.org/pdf/0712.2332)

## Remarks

The fixed-gauge context is the one in [[def-gr-fx-fixed-gauge-data-topology]]. The finite-slab supplier [[thm-gr-fx-finite-slab-stability]] assumes Countable Choice and Dependent Choice and proves only the stated fixed-gauge finite-time comparison and neighborhood results under its compact-state, regularity, constraint, matter, gauge and reconstruction hypotheses. It does not supply the improvement implication or continuation margins in this definition, and its proof is not uniform as the finite slab length tends to infinity.
