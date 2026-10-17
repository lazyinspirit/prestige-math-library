---
id: pthm-tgr-radiation-local-properties
kind: physics-theorem
title: "Radiation entropy balance and causal linear sound"
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 7
proof_strategy: direct
deps:
  - post-tgr-radiation-fluid-model
  - lem-tgr-radiation-state-balance
  - def-countable-choice
dependency_roles:
  post-tgr-radiation-fluid-model: physical-assumption
  lem-tgr-radiation-state-balance: mathematical-premise
  def-countable-choice: mathematical-premise
physical_scope: "Conditional deductions for the adopted entropy-only radiation perfect-fluid branch: local entropy-current conservation on smooth solutions and the frozen uniform-rest Minkowski acoustic characteristics. No particle-number current, quantum coefficient, nonlinear evolution theorem, or empirical realization is inferred."
empirical_premises: []
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Éric Gourgoulhon, An Introduction to Relativistic Hydrodynamics, arXiv:gr-qc/0603009v1 (2006), §§4.2–4.3 and 5.2–5.3"
      url: "https://arxiv.org/pdf/gr-qc/0603009"
      locator: "Full 37-page lecture notes; PDF pp. 14–18, equations (4.4), (4.10)–(4.14), and (5.4)–(5.9): perfect-fluid stress and the energy projection of its balance. Its particle-number and first-law conventions are comparison context only."
    - title: "Nicolas Borghini, Elements of Hydrodynamics, University of Bielefeld lecture notes (2022), §§X.3.1–X.3.2 and XI.2.1"
      url: "https://www.physik.uni-bielefeld.de/~borghini/Teaching/Hydrodynamics22/Hydrodynamics2022.pdf"
      locator: "Full 202-page notes; PDF pp. 157–160 and 177–178: perfect-fluid entropy context and the zero-charge ultrarelativistic p=epsilon/3, epsilon proportional to T^4, s proportional to T^3 scaling. The notes do not set a_R."
---

## Statement

Assume $\mathrm{AC}_\omega$. On an open region $O$ of a smooth four-manifold without boundary, let $(g,u,T)$ and the entropy-only equation of state and source-free perfect-stress balance be as in [[post-tgr-radiation-fluid-model]]. For every such smooth solution,

$$\nabla_a(su^a)=0.$$

This is a conditional local model deduction; it assumes no particle-number current. In the additional submodel $M=\mathbb R^4$ with Minkowski coordinates $(x^0,x^1,x^2,x^3)=(ct,x)$, constant reference temperature $T_*>0$, and uniform rest observer $u_*=(1,0,0,0)$, the frozen linearized system for $r:=\delta\varepsilon$ and $w^i:=\delta u^i$ has two transverse zero characteristic speeds and longitudinal speeds $\pm c/\sqrt3$. Thus its linear acoustic speed is $c/\sqrt3<c$. This is a conditional prediction of the adopted model, not an observed speed or a claim of global nonlinear evolution. The parameter $a_R$ remains an adopted positive coefficient; no quantum blackbody calibration is supplied.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, a smooth time-oriented Lorentzian four-manifold without boundary with signature $(-,+,+,+)$ and its metric-selected connection, a smooth future unit observer $u$ with $g(u,u)=-1$, a smooth $T>0$, and the radiation model and balance of [[post-tgr-radiation-fluid-model]]. For the linear statement, additionally use the uniform Minkowski rest state and length-coordinate convention stated above.

[A1] [[post-tgr-radiation-fluid-model]]: $\varepsilon=a_RT^4$, $p=\varepsilon/3$, $s=4a_RT^3/3$, $h=\varepsilon+p$, $\mathsf T^{ab}=h u^au^b+p g^{ab}$, and $\nabla_a\mathsf T^{ab}=0$; no conserved particle-number or chemical-potential coordinate is assumed.

[F1] [[lem-tgr-radiation-state-balance]]: with $\mathrm{AC}_\omega$, the specified state maps, a smooth metric-compatible Levi-Civita derivative, and a vector field $U$ normalized by $g(U,U)=-c^2$, its Statement gives $\nabla_a(sU^a)=0$ under $\nabla_a[(h/c^2)U^aU^b+p g^{ab}]=0$. This is a current draft mathematical carrier; its exact proof status remains draft.

[F2] [[lem-tgr-radiation-state-balance]]: on Minkowski space the same Statement gives the frozen rest linear system $r_t+c h_*\operatorname{div}w=0$, $w_t+(c/(3h_*))\nabla r=0$ after the specified linearization about $T=T_*>0$, $U=(c,0,0,0)$.

[F3] [[lem-tgr-radiation-state-balance]]: the principal matrix of that frozen system has characteristic eigenvalues $0$ (multiplicity two) and $\pm c/\sqrt3$ in every unit spatial direction.

[F4] [[def-countable-choice]]: $\mathrm{AC}_\omega$ means that every countable family of nonempty sets has a choice function; no stronger choice principle is assumed here.

## Proof

1.1 Put $U^a:=c u^a$. Since $c>0$ is constant and $g(u,u)=-1$, $g(U,U)=-c^2$; moreover $(h/c^2)U^aU^b+p g^{ab}=h u^a u^b+p g^{ab}=\mathsf T^{ab}$. The temperature maps and stress balance in [A1] therefore match the hypotheses of [F1] exactly, under the $\mathrm{AC}_\omega$ assumption defined in [F4]. [given, A1, F1, F4, algebra]

2.1 Applying the local conclusion of [F1] gives $\nabla_a(sU^a)=0$. By the Leibniz rule and constancy of $c$, $\nabla_a(sU^a)=\nabla_a(csu^a)=c\nabla_a(su^a)$; division by $c>0$ proves $\nabla_a(su^a)=0$. The deduction uses no particle-number current and remains conditional on the adopted stress balance and state maps. [given, F1, step 1.1, algebra]

2.2 In the Minkowski rest submodel, $U_*=cu_*=(c,0,0,0)$, so the normalization and coordinates agree with the linearization in [F2]. The state maps give $h_*=4a_RT_*^4/3>0$ and $\delta p=(dp/d\varepsilon)\delta\varepsilon=r/3$. The resulting frozen system is $r_t+c h_*\operatorname{div}w=0$ and $w_t+(c/(3h_*))\nabla r=0$, with $w^i=\delta U^i/c=\delta u^i$. [given, A1, F2, F4, step 1.1, algebra]

3.1 For a unit spatial vector $\nu$, the system's principal matrix is $A(\nu)=c\begin{pmatrix}0&h_*\nu^{\mathsf T}\\(1/(3h_*))\nu&0_{3\times3}\end{pmatrix}$. It annihilates the two-dimensional transverse subspace $(0,w)$ with $\nu\cdot w=0$. On the scalar-longitudinal subspace spanned by $(1,0)$ and $(0,\nu)$ its matrix is $\begin{pmatrix}0&c h_*\\c/(3h_*)&0\end{pmatrix}$, whose characteristic polynomial is $\lambda^2-c^2/3$. Hence the two longitudinal speeds are $\pm c/\sqrt3$ and the transverse speeds are zero; since $\sqrt3>1$ and $c>0$, $c/\sqrt3<c$. [given, F3, step 2.2, algebra] ∎
