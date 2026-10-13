---
id: pthm-nrqm-bell-tsirelson-bound-for-arrangements
aliases: [ nrqm-bell-tsirelson-bound-for-arrangements ]
kind: physics-theorem
domain: physics
title: "Tsirelson bound for every declared spin correlation arrangement of the
  framework"
status: published
origin: session
dependency_level: 15
deps:
  [
    def-nrqm-bell-declared-spin-arrangement,
    def-nrqm-bell-binary-correlation-models,
    texp-nrqm-bell-singlet-arrangement-contrast,
    thm-nrqm-orbital-and-spin-tsirelson-bound,
    prop-nrqm-orbital-and-spin-finite-spin-matrices,
    lem-nrqm-composites-bounded-tensor-maps,
    lem-nrqm-composites-density-and-scalar-spectral-probability,
    def-trace-class-operator,
    thm-trace-class-is-a-two-sided-banach-operator-ideal,
    thm-trace-is-absolutely-convergent-and-basis-independent,
    def-countable-choice,
    def-axiom-of-choice
  ]
dependency_roles:
  def-nrqm-bell-declared-spin-arrangement: formulation-prerequisite
  def-nrqm-bell-binary-correlation-models: mathematical-premise
  texp-nrqm-bell-singlet-arrangement-contrast: physical-result
  thm-nrqm-orbital-and-spin-tsirelson-bound: mathematical-premise
  prop-nrqm-orbital-and-spin-finite-spin-matrices: mathematical-premise
  lem-nrqm-composites-bounded-tensor-maps: mathematical-premise
  lem-nrqm-composites-density-and-scalar-spectral-probability: mathematical-premise
  def-trace-class-operator: mathematical-premise
  thm-trace-class-is-a-two-sided-banach-operator-ideal: mathematical-premise
  thm-trace-is-absolutely-convergent-and-basis-independent: mathematical-premise
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: "A conditional bound on the CHSH functional of every declared
  spin correlation arrangement of the framework: for any declared composite
  preparation of the two spin-half factors and any two unit directions per
  station the absolute value of the CHSH functional of the arrangement's sign
  tables is at most 2 sqrt 2, and the bound is attained by the singlet
  preparation at the directions displayed on this page. The statement is a model
  theorem under the framework's composite, observable, measurement and spin
  readings; it asserts no measured value, no apparatus, no detection efficiency
  and no empirical fact."
sources:
  references:
    - title: "N. Brunner, D. Cavalcanti, S. Pironio, V. Scarani and S. Wehner, 'Bell
        nonlocality', Reviews of Modern Physics 86 (2014) 419, Section II.C.1.a,
        PDF pages 12-13: the Bell operator of a Bell expression, the CHSH
        operator, the identity S^2 = 4 + [A1,A2][B1,B2], the conclusion ||S|| <=
        2 sqrt 2 and the attainment by the singlet"
      url: "https://arxiv.org/pdf/1303.2849"
    - title: "L. J. Landau, 'On the violation of Bell's inequality in quantum theory',
        Physics Letters A 120 (1987) 54-56, as reported in the review above: the
        operator derivation of the CHSH quantum bound used here is verified
        directly from the operator identity in the proof"
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section
        6.1.4, printed pages 111-115 (PDF pages 119-123): the singlet
        correlation -a.b and the contrast with the bound of a
        setting-independent response model"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
verification:
  precheck: pass
---

## Statement

Let $(V\widehat\otimes V,\rho,a_{0},a_{1},b_{0},b_{1})$ be a declared spin
correlation arrangement of the two declared spin-half factors in the sense of
[[def-nrqm-bell-declared-spin-arrangement]], with a preparation
$\rho\in D(V\widehat\otimes V)$, unit directions
$a_{i},b_{j}\in\mathbb R^{3}$, outcome laws
$\nu^{\rho}_{ij}(\varepsilon,\delta)$ and CHSH functional
$S(\nu^{\rho})$ as in clauses (d) of that definition and (d) of
[[def-nrqm-bell-binary-correlation-models]]. Assume the Axiom of Countable
Choice ([[def-countable-choice]]) and the Axiom of Choice
([[def-axiom-of-choice]]), the hypotheses of the cited mathematical
suppliers. Then:

(a) $\bigl|S(\nu^{\rho})\bigr|\le2\sqrt2$ for every preparation $\rho$ and all
unit directions $a_{0},a_{1},b_{0},b_{1}$;

(b) the bound is attained: with $\Psi:=\frac1{\sqrt2}(\kappa(e_{+}\otimes e_{-})-\kappa(e_{-}\otimes e_{+}))$
and the singlet preparation $\rho_{\Psi}=T_{\Psi,\Psi}$, for the directions
$a_{0}=(0,0,1)$, $a_{1}=(1,0,0)$, $b_{0}=(1,0,1)/\sqrt2$,
$b_{1}=(-1,0,1)/\sqrt2$ one has
$S(\nu^{\rho_{\Psi}})=-2\sqrt2$, so
$\bigl|S(\nu^{\rho_{\Psi}})\bigr|=2\sqrt2$.

The statement is a conditional theorem about the declared arrangement model; it
asserts no measured value and no apparatus realization.

## Facts & Assumptions

**Given:** A declared spin correlation arrangement with preparation $\rho$ and directions $a_{0},a_{1},b_{0},b_{1}$; the outcome laws $\nu^{\rho}_{ij}$ and their CHSH functional; the Axiom of Countable Choice and the Axiom of Choice.

[F1] The arrangement's outcome law is $\nu^{\rho}_{ij}(\varepsilon,\delta)=\operatorname{tr}(\rho(P_{a_{i},\varepsilon}\otimes P_{b_{j},\delta}))$ with $P_{a,\varepsilon}=\tfrac12(I+\varepsilon a\cdot\sigma)$; the correlations are $E_{ij}(\nu^{\rho})=\sum_{\varepsilon,\delta}\varepsilon\delta\,\nu^{\rho}_{ij}(\varepsilon,\delta)$ and $S(\nu^{\rho})=E_{00}+E_{01}+E_{10}-E_{11}$ ([[def-nrqm-bell-declared-spin-arrangement]] clauses (a), (d), [[def-nrqm-bell-binary-correlation-models]] clause (d)).

[F2] The Pauli matrix $\sigma_{a}=\sum_{i}a_{i}\sigma_{i}$ for unit $a$ is a self-adjoint involution, $\sigma_{a}^{2}=I$, and $P_{a,+}-P_{a,-}=\sigma_{a}$ ([[prop-nrqm-orbital-and-spin-finite-spin-matrices]] clause (e), [[def-nrqm-bell-declared-spin-arrangement]] clause (a)).

[F3] The completed tensor product $V\widehat\otimes V$ carries the bounded tensor calculus: $(S\otimes T)(S'\otimes T')=(SS')\otimes(TT')$, $(S\otimes T)^{*}=S^{*}\otimes T^{*}$, $\|S\otimes T\|\le\|S\|\,\|T\|$, and the assignment is linear in each argument ([[lem-nrqm-composites-bounded-tensor-maps]] clauses (a), (b), (c)).

[F4] A density operator $\rho$ is self-adjoint, positive and trace class with $\operatorname{tr}\rho=1$ and $\|\rho\|_{1}=1$ ([[lem-nrqm-composites-density-and-scalar-spectral-probability]] clause (a), [[def-trace-class-operator]]).

[F5] Trace class is a two-sided Banach operator ideal: for trace-class $T$ and bounded $A,B$ one has $ATB$ trace class with $\|ATB\|_{1}\le\|A\|\,\|T\|_{1}\|B\|$, and $\|T\|\le\|T\|_{1}$ ([[thm-trace-class-is-a-two-sided-banach-operator-ideal]] clauses 1, 2); the trace is linear on the trace class and $|\operatorname{tr}T|\le\|T\|_{1}$ ([[thm-trace-is-absolutely-convergent-and-basis-independent]]).

[F6] For bounded self-adjoint involutions $A_{0},A_{1}$ on a Hilbert space $H$ and $B_{0},B_{1}$ on a Hilbert space $K$, the operator $C:=A_{0}\otimes(B_{0}+B_{1})+A_{1}\otimes(B_{0}-B_{1})$ on $H\widehat\otimes K$ is self-adjoint with $\|C\|\le2\sqrt2$; equivalently, for every unit vector $\psi$ the CHSH combination of the expectations $\langle(A_{i}\otimes B_{j})\psi,\psi\rangle$ is at most $2\sqrt2$ in absolute value ([[thm-nrqm-orbital-and-spin-tsirelson-bound]] clauses (a), (b), (c)).

[F7] Under the Axiom of Countable Choice and the Axiom of Choice, the singlet preparation and displayed directions satisfy $S(\nu^{\rho_{\Psi}})=-2\sqrt2$ ([[texp-nrqm-bell-singlet-arrangement-contrast]] clause (b)); that supplier states both hypotheses.

## Proof

**Proof technique:** direct; write the CHSH functional as the trace of the preparation against the CHSH operator, apply the operator-norm bound of the finite-dimensional Tsirelson theorem, and bound the trace by the ideal and trace inequalities.

**Given:** The data of the statement and [F1]-[F7].

1.1 [CHSH functional as an operator trace] Put $C:=\sigma_{a_{0}}\otimes(\sigma_{b_{0}}+\sigma_{b_{1}})+\sigma_{a_{1}}\otimes(\sigma_{b_{0}}-\sigma_{b_{1}})$, a bounded operator on $V\widehat\otimes V$ by [F3]. For each $(i,j)$, [F2] gives $\sigma_{a_{i}}\otimes\sigma_{b_{j}}=(P_{a_{i},+}-P_{a_{i},-})\otimes(P_{b_{j},+}-P_{b_{j},-})=\sum_{\varepsilon,\delta}\varepsilon\delta\,P_{a_{i},\varepsilon}\otimes P_{b_{j},\delta}$, a finite sum, so by [F1], the linearity of the finite sum and the linearity of the trace [F5], $E_{ij}(\nu^{\rho})=\sum_{\varepsilon,\delta}\varepsilon\delta\operatorname{tr}(\rho(P_{a_{i},\varepsilon}\otimes P_{b_{j},\delta}))=\operatorname{tr}\bigl(\rho\sum_{\varepsilon,\delta}\varepsilon\delta(P_{a_{i},\varepsilon}\otimes P_{b_{j},\delta})\bigr)=\operatorname{tr}(\rho(\sigma_{a_{i}}\otimes\sigma_{b_{j}}))$. Summing the four terms with the CHSH signs and using [F3] and the linearity of the trace gives $S(\nu^{\rho})=\operatorname{tr}(\rho\,C)$. [given, F1, F2, F3, F5, algebra]

1.2 [Operator norm bound] By [F2] the matrices $\sigma_{a_{i}},\sigma_{b_{j}}$ are self-adjoint involutions, so [F6] applies and gives $\|C\|\le2\sqrt2$. [given, F2, F6]

2.1 [Trace bound] By [F4] $\rho$ is trace class with $\|\rho\|_{1}=1$, so [F5] makes $\rho C$ trace class with $\|\rho C\|_{1}\le\|\rho\|_{1}\|C\|=\|C\|$, and the trace bound of [F5] gives $|\operatorname{tr}(\rho C)|\le\|\rho C\|_{1}\le\|C\|\le2\sqrt2$. With step 1.1 this is $\bigl|S(\nu^{\rho})\bigr|\le2\sqrt2$, which is (a). [step 1.1, step 1.2, F4, F5, algebra]

3.1 [Attainment; the Axiom of Choice enters through F7 here] Clause (b) is exactly [F7] for the singlet preparation and the displayed directions, and step 2.1 shows that no value larger than $2\sqrt2$ occurs. The Axiom of Choice is required at this proof step to invoke the attainment result with its stated hypotheses; the operator-norm derivation of (a) uses the Countable Choice hypothesis of its mathematical suppliers. [F7, step 2.1] ∎

## Remarks

- **Sharpness within the declared class.** The bound cannot be lowered for the
  declared arrangement model, because the singlet at the displayed directions
  attains it (clause (b)). This is a statement about the declared binary sign
  measurements of the arrangement; it is not an optimality statement for other
  functionals, for more settings, for unsharp measurements or for other
  systems.
- **Where the bound is used.** The bound is one half of the contrast of this
  page: the CHSH functional of any representable model is at most $2$ in
  absolute value ([[thm-nrqm-bell-local-representations-satisfy-chsh]]), while
  the declared arrangement permits $2\sqrt2$; the gap is not a numerical
  coincidence of the singlet but a property of the framework's binary sharp
  readouts of self-adjoint involutions.
