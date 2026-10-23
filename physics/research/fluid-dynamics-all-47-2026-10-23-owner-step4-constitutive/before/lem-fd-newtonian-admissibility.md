---
id: lem-fd-newtonian-admissibility
kind: lemma
title: "Newtonian/Fourier dissipation and exact coefficient conditions"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
page: fd-mf03
dependency_level: 4
proof_strategy: direct
deps:
  - lem-fd-gibbs-entropy-residual
  - lem-fd-isotropic-linear-classification
  - def-countable-choice
dependency_roles:
  lem-fd-gibbs-entropy-residual: mathematical-premise
  lem-fd-isotropic-linear-classification: mathematical-premise
  def-countable-choice: mathematical-premise
justified_by: []
aliases: []
physical_scope: null
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Kelly, Solid Mechanics Part III, Appendix 4.A, §4.A.1, pp. 406–411"
      url: "https://pkel015.connect.amazon.auckland.ac.nz/SolidMechanicsBooks/Part_IV/Chapter_1_Hyperelasticity/PDF/Elasticity_08_Appendix_Isotropic_Functions.pdf"
    - title: "Krzysztof Wilmanski, Continuum Thermodynamics, §4.2, pp. 46–50"
      url: "https://www.mech-wilmanski.de/graz2007.pdf"
    - title: "Rohan Abeyaratne, Continuum Mechanics, Volume II, Chapter 12 §12.2, Problem 12.8, printed pp. 358–360"
      url: "https://web.mit.edu/abeyaratne/Volumes/RCA_Vol_II.pdf"
verification:
  precheck: pass
---

## Statement

Assume $\mathrm{AC}_\omega$: every sequence of nonempty sets admits a choice function. At a fixed state, let $\mu,\lambda\in\mathbb R$, $K\in\mathbb R^{3\times3}$, $T>0$, $g\in\mathbb R^3$, and let $D\in\mathbb R^{3\times3}$ be symmetric. Put
$$\theta:=\operatorname{tr}D=\sum_{i=1}^3D_{ii},\qquad D_0:=D-\frac{\theta}{3}I,\qquad \zeta:=\lambda+\frac{2\mu}{3},\qquad \operatorname{sym}K:=\frac{K+K^T}{2},$$
where $I$ is the $3\times3$ identity and $|D_0|^2:=\sum_{i,j=1}^3(D_0)_{ij}^2$. Use the Newtonian stress expression $\tau:=2\mu D+\lambda\theta I$ and the Fourier flux expression $q:=-Kg$, and define the quadratic residual
$$\mathcal Q(D,g,T):=\frac{\tau:D}{T}-\frac{q\cdot g}{T^2}, \qquad \tau:D:=\sum_{i,j=1}^3\tau_{ij}D_{ij}.$$
Here $g$ represents an independently varied temperature-gradient value. The coefficient equivalence is an algebraic statement about $\mathcal Q$; its interpretation as an entropy residual is conditional on the local state and balance hypotheses of the Gibbs identity.
For these definitions the exact algebraic decomposition is
$$\mathcal Q(D,g,T)=\frac{2\mu|D_0|^2+\zeta\theta^2}{T}+\frac{g^T(\operatorname{sym}K)g}{T^2}.$$
Then $\mathcal Q(D,g,T)\ge0$ for every symmetric $D$, every $g\in\mathbb R^3$, and every $T>0$ if and only if
$$\mu\ge0,\qquad \zeta\ge0,\qquad x^T(\operatorname{sym}K)x\ge0\quad\text{for every }x\in\mathbb R^3.$$
In particular, $\lambda$ need not be nonnegative: if $\mu>0$ and $\zeta=0$, then $\lambda=-2\mu/3$ and the coefficient conditions still hold when $\operatorname{sym}K$ is positive semidefinite. This is an algebraic coefficient test for the conditional entropy residual; it neither derives a constitutive law nor assigns material coefficients. In the physical SI interpretation, $\mu,\lambda,\zeta$ have units $\mathrm{Pa\,s}$, $D$ has units $\mathrm{s^{-1}}$, $K$ has units $\mathrm{W\,m^{-1}\,K^{-1}}$, $g$ has units $\mathrm{K\,m^{-1}}$, and $T$ has units $\mathrm K$.

## Statement references

[Kelly, Solid Mechanics Part III, Appendix 4.A “Isotropic Functions,” pp. 406–411](https://pkel015.connect.amazon.auckland.ac.nz/SolidMechanicsBooks/Part_IV/Chapter_1_Hyperelasticity/PDF/Elasticity_08_Appendix_Isotropic_Functions.pdf)

[Krzysztof Wilmanski, Continuum Thermodynamics, §4.2 “Isotropy,” pp. 46–50](https://www.mech-wilmanski.de/graz2007.pdf)

[Rohan Abeyaratne, Continuum Mechanics, Volume II, Chapter 12 §12.2, Problem 12.8, printed pp. 358–360](https://web.mit.edu/abeyaratne/Volumes/RCA_Vol_II.pdf)

## Facts & Assumptions

**Given:** The coefficients, temperature, matrix, vectors, quadratic residual, and the countable-choice assumption in the Statement.

[F1] [[lem-fd-gibbs-entropy-residual]]: under its displayed state, contact, smooth-motion, continuity, integral-balance, and $\mathrm{AC}_\omega$ hypotheses, the entropy residual is $\tau:D/T-q\cdot\nabla T/T^2$. The Gibbs interpretation retains all displayed state, balance, contact and choice hypotheses.

[F2] [[lem-fd-isotropic-linear-classification]]: if $L:\operatorname{Sym}(3)\to\operatorname{Sym}(3)$ is real-linear and satisfies $L(QDQ^T)=QL(D)Q^T$ for every $Q\in\operatorname{SO}(3)$ and $D\in\operatorname{Sym}(3)$, then unique $\lambda,\mu\in\mathbb R$ give $L(D)=2\mu D+\lambda(\operatorname{tr}D)I$; conversely every map of this form is real-linear and satisfies that equivariance. This is a classification under those hypotheses, not a derivation of a material response law.

[F3] [[def-countable-choice]]: $\mathrm{AC}_\omega$ says every sequence of nonempty sets admits a choice function. It is carried because [F1]'s current local-balance supplier explicitly assumes $\mathrm{AC}_\omega$; no full Axiom of Choice is assumed.

[A1] The matrices $D,\tau,K$ and vector $g$ are evaluated at one fixed state, and $D$ and $g$ range independently over all stated values.

[A2] Assume $\mathrm{AC}_\omega$ exactly as stated in the Statement; no full Axiom of Choice is assumed.

## Proof


1.1 Under the conditional Gibbs identity [F1] and the countable-choice premise [A2, F3], substituting the stress and flux expressions assumed in the Statement, with $g=\nabla T$, identifies $\mathcal Q$ with the entropy residual. The stress expression is a member of the linear isotropic family classified by [F2]; that classification imposes no sign condition on its coefficients. The trace of $D_0$ is $\theta-\frac{\theta}{3}\operatorname{tr}I=0$, and $D=D_0+\frac{\theta}{3}I$. [A1, A2, F1, F2, F3, given, algebra]

2.1 Since $D_0:I=\operatorname{tr}D_0=0$ and $I:I=3$, contraction gives $\tau:D=2\mu|D_0|^2+\left(\lambda+\frac{2\mu}{3}\right)\theta^2=2\mu|D_0|^2+\zeta\theta^2$. Also $-q\cdot g=g^TKg=g^T(\operatorname{sym}K)g$: the scalar $g^T(K-K^T)g$ equals its transpose $g^T(K^T-K)g$, so it is zero. Hence $\mathcal Q(D,g,T)=(2\mu|D_0|^2+\zeta\theta^2)/T+g^T(\operatorname{sym}K)g/T^2$. [A1, step 1.1, algebra]

3.1 If $\mu\ge0$, $\zeta\ge0$, and $\operatorname{sym}K$ is positive semidefinite, every term in step 2.1 is nonnegative for all $D,g,T>0$. This proves sufficiency. [A1, step 2.1, algebra]

3.2 For necessity, take $T=1$, $g=0$, and $D=\operatorname{diag}(1,-1,0)$. Then $\theta=0$, $D_0=D$, and $|D_0|^2=2$, so step 2.1 gives $\mathcal Q=4\mu\ge0$ and hence $\mu\ge0$. [A1, step 2.1, given, algebra]

3.3 Take $T=1$, $g=0$, and $D=I/3$. Then $\theta=1$ and $D_0=0$, so $\mathcal Q=\zeta\ge0$. [A1, step 2.1, given, algebra]

3.4 Take $T=1$, $D=0$, and arbitrary $g\in\mathbb R^3$. Then $\mathcal Q=g^T(\operatorname{sym}K)g\ge0$ for every $g$, which is exactly positive semidefiniteness of $\operatorname{sym}K$. [A1, step 2.1, given, algebra]

4.1 If $\mu>0$ and $\zeta=0$, then $\lambda=-2\mu/3<0$, while step 3.1 still gives nonnegative residual whenever $\operatorname{sym}K$ is positive semidefinite. Thus nonnegativity of $\lambda$ is not necessary. [step 3.1, algebra] ∎

## Remarks

The algebra in steps 2.1–3.4 is pointwise and needs $D$ and $g$ to vary independently. The identification of $\mathcal Q$ with a fluid entropy residual is conditional on [F1]; experiments or material observations do not prove these mathematical coefficient conditions.
