---
id: def-nrqm-approximations-framework-perturbed-family-model
aliases: [ nrqm-approximations-framework-perturbed-family-model ]
kind: definition
domain: physics
title: "The declared perturbed-family model: bounded self-adjoint perturbation,
  isolated gapped label and followed spectral cluster"
status: draft
origin: session
dependency_level: 9
deps:
  [
    lem-nrqm-approximations-finite-rank-gapped-cluster-projection,
    post-nrqm-framework-state-and-composition,
    post-nrqm-framework-observable-and-probability,
    post-nrqm-framework-autonomous-dynamics,
    def-nrqm-framework-quantities-and-units,
    def-nrqm-observables-framework-observable-and-outcome-law,
    def-nrqm-autonomous-dynamics-framework-evolution,
    def-bounded-linear-operator,
    def-operator-norm,
    def-symmetric-self-adjoint-and-essentially-self-adjoint,
    def-projection-valued-measure,
    def-resolvent-and-spectrum-of-a-closed-unbounded-operator,
    def-discrete-and-essential-spectrum-of-a-self-adjoint-operator,
    thm-kato-rellich,
    thm-nrqm-controlled-dynamics-contour-perturbation-projection,
    thm-nrqm-controlled-dynamics-simple-level-reduced-resolvent-coefficients,
    def-countable-choice,
    def-axiom-of-choice
  ]
dependency_roles:
  lem-nrqm-approximations-finite-rank-gapped-cluster-projection: mathematical-premise
  post-nrqm-framework-state-and-composition: physical-assumption
  post-nrqm-framework-observable-and-probability: physical-assumption
  post-nrqm-framework-autonomous-dynamics: physical-assumption
  def-nrqm-framework-quantities-and-units: formulation-prerequisite
  def-nrqm-observables-framework-observable-and-outcome-law: formulation-prerequisite
  def-nrqm-autonomous-dynamics-framework-evolution: formulation-prerequisite
  def-bounded-linear-operator: mathematical-premise
  def-operator-norm: mathematical-premise
  def-symmetric-self-adjoint-and-essentially-self-adjoint: mathematical-premise
  def-projection-valued-measure: mathematical-premise
  def-resolvent-and-spectrum-of-a-closed-unbounded-operator: mathematical-premise
  def-discrete-and-essential-spectrum-of-a-self-adjoint-operator: mathematical-premise
  thm-kato-rellich: mathematical-premise
  thm-nrqm-controlled-dynamics-contour-perturbation-projection: mathematical-premise
  thm-nrqm-controlled-dynamics-simple-level-reduced-resolvent-coefficients: mathematical-premise
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "The perturbed-family model of a declared system of the
  framework: a self-adjoint unperturbed energy observable H0, a bounded
  self-adjoint perturbation V with norm v, the real coupling lambda and the
  family H(lambda) = H0 + lambda V declared as the model's energy observable at
  coupling lambda, together with a fixed isolated eigenvalue E of H0 of finite
  multiplicity with gap g, its spectral projection, the first-order operator
  P0VP0 on the eigenspace, and the followed perturbed spectral cluster supplied by
  the contour construction. The definition asserts no time-dependent
  perturbation, no ramping protocol, no occupation of any branch by a
  preparation, no measurement and no laboratory identification; all statements
  are about the declared operator family."
sources:
  references:
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section 9.1
        printed pages 203-211 (PDF pages 211-219): time-independent perturbation
        theory, the first- and second-order energy shifts, the quadratic Stark
        effect and the degenerate-subspace diagonalisation of the perturbation
        (9.4)-(9.18)"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009,
        Chapter 6 printed pages 133-159 (PDF pages 145-171): relatively bounded
        operators, the Kato-Rellich theorem (Theorem 6.4) and norm resolvent
        convergence for bounded perturbations"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
verification:
  precheck: n/a
---

## Definition

**(a) Framework data.** Adopt P1, P2 and P4
([[post-nrqm-framework-state-and-composition]],
[[post-nrqm-framework-observable-and-probability]],
[[post-nrqm-framework-autonomous-dynamics]]) for a declared system, with the
state, sharp-observable and evolution readings of
[[def-nrqm-observables-framework-observable-and-outcome-law]] and
[[def-nrqm-autonomous-dynamics-framework-evolution]]; units are those of
[[def-nrqm-framework-quantities-and-units]]. Assume the Axiom of Countable
Choice and the Axiom of Choice ([[def-countable-choice]],
[[def-axiom-of-choice]]) as the choice hypotheses of the cited mathematical
suppliers.

**(b) The perturbed family.** As an additional model assumption of the pair,
fix a self-adjoint operator $H_{0}:D(H_{0})\subseteq\mathfrak H\to\mathfrak H$
on the declared state space, **declare** $(H_{0},\mathrm J)$ to be the
unperturbed sharp energy observable,
fix a bounded self-adjoint operator $V\in\mathcal B(\mathfrak H)$
([[def-bounded-linear-operator]]) with
$$v:=\|V\|<\infty$$
([[def-operator-norm]]) and fix a real **coupling** $\lambda$ (dimensionless:
$\lambda V$ is read in joules). Declare the **perturbed family**
$$H(\lambda):=H_{0}+\lambda V,\qquad D(H(\lambda)):=D(H_{0}),$$
to be the model's sharp energy observable at coupling $\lambda$. Since $V$ is
$H_{0}$-bounded with $H_{0}$-bound $0\le a<1$ (the bound inequality holds with
$a=0$ and $b=v$), the Kato-Rellich theorem applies and $H(\lambda)$ is
self-adjoint on $D(H_{0})$ for every real $\lambda$
([[thm-kato-rellich]], [[def-symmetric-self-adjoint-and-essentially-self-adjoint]]).
This self-adjointness is a supplied theorem about the declared operators; the
reading of the family as the system's energy is the model assumption.

**(c) The gapped label.** Fix an isolated eigenvalue $E\in\mathbb R$ of $H_{0}$
of finite multiplicity $r\ge1$ with gap
$$\operatorname{dist}\bigl(E,\sigma(H_{0})\setminus\{E\}\bigr)\ge g>0,$$
and put $P_{0}:=E_{H_{0}}(\{E\})$ and $Q_{0}:=I-P_{0}$
([[def-discrete-and-essential-spectrum-of-a-self-adjoint-operator]],
[[def-projection-valued-measure]],
[[def-resolvent-and-spectrum-of-a-closed-unbounded-operator]]). The
definitions used by the pair are those of the cited suppliers:

(i) for real $\lambda$ with $2|\lambda|v/g<1$, the **followed spectral cluster** is the spectrum of $H(\lambda)$ inside $|z-E|<g/2$, and
$$P_\lambda:=\frac{1}{2\pi i}\oint_{|z-E|=g/2}(z-H(\lambda))^{-1}\,dz$$
(counterclockwise) is its rank-$r$ orthogonal spectral projection, by [[lem-nrqm-approximations-finite-rank-gapped-cluster-projection]]. The cluster is a nonempty finite set and is exactly the spectrum of the restriction to $P_\lambda\mathfrak H$. In the simple case $r=1$ only, write $E_\lambda$ for its unique spectral value; this scalar is the followed perturbed label of [[thm-nrqm-controlled-dynamics-contour-perturbation-projection]] and is analytic on the valid coupling disk. For $r>1$ no unique scalar label, branch ordering or individual scalar holomorphy is presumed. At $\lambda=0$ the cluster is $\{E\}$ and its projection is $P_0$. If $v=0$, these data are constant for all real couplings, with no radius involving division by $v$.

(ii) the **first-order operator** is the Hermitian operator
$$V_{E}:=\bigl(P_{0}VP_{0}\bigr)\big|_{P_{0}\mathfrak H}$$
on the finite-dimensional eigenspace $P_{0}\mathfrak H$, whose spectrum
$\operatorname{spec}(V_{E})\subseteq[-v,v]$ is the model's first-order shift
data (joules per unit coupling);

(iii) the **complementary reduced inverse**
$$S:=\iota_{Q_{0}}\bigl(H_{0}|_{D(H_{0})\cap Q_{0}\mathfrak H}-E\bigr)^{-1}Q_{0}$$
is a bounded operator with the displayed exact complementary-domain inverse. For every finite multiplicity $r\ge1$, including $v=0$, its existence follows by applying part (c) of [[lem-nrqm-approximations-finite-rank-gapped-cluster-projection]] at coupling $\lambda=0$ and $w=E$: since the cluster projection is then $P_0$, the restriction of $E-H_0$ to $D(H_0)\cap Q_0\mathfrak H$ has a bounded two-sided inverse $R_Q(E):Q_0\mathfrak H\to D(H_0)\cap Q_0\mathfrak H$, and $S=-\iota_{Q_0}R_Q(E)Q_0$. For $r=1$ the same operator is supplied by [[thm-nrqm-controlled-dynamics-simple-level-reduced-resolvent-coefficients]]. Its role is to record that the **whole** complementary spectral subspace, continuum included, contributes to the second-order data.

**(d) Scope.** Clauses (a)-(c) cover bounded perturbations of a self-adjoint
operator and a fixed isolated finite-multiplicity label only. The definition
asserts no time-dependent perturbation, no adiabatic ramping of $\lambda$, no
statement that a preparation occupies the branch of $E_{\lambda}$ or of any
eigenvalue of $V_{E}$, no branch-population or relaxation statement, no
measurement and no identification of the model with a laboratory system; the
labels $E_{\lambda}$ are spectral data of the declared family.
