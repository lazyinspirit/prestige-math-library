---
id: pthm-nrqm-driven-dynamics-common-domain-propagator
aliases: [ nrqm-driven-dynamics-common-domain-propagator ]
kind: physics-theorem
domain: physics
title: "The common-domain driven model: strong propagator with domain
  invariance, and the driven oscillator as its declared instance"
status: draft
origin: session
dependency_level: 10
deps:
  [
    def-nrqm-driven-dynamics-framework-driven-model,
    post-nrqm-framework-state-and-composition,
    post-nrqm-framework-observable-and-probability,
    def-nrqm-framework-quantities-and-units,
    thm-nrqm-controlled-dynamics-common-domain-nonautonomous-evolution,
    thm-nrqm-controlled-dynamics-driven-oscillator-common-domain,
    def-nrqm-oscillator-framework-quadratic-potential-model,
    def-hilbert-space,
    def-bounded-linear-operator,
    def-operator-norm,
    def-symmetric-self-adjoint-and-essentially-self-adjoint,
    def-sobolev-space-wkp-and-its-norm,
    def-countable-choice,
    def-axiom-of-choice
  ]
dependency_roles:
  def-nrqm-driven-dynamics-framework-driven-model: formulation-prerequisite
  post-nrqm-framework-state-and-composition: physical-assumption
  post-nrqm-framework-observable-and-probability: physical-assumption
  def-nrqm-framework-quantities-and-units: formulation-prerequisite
  thm-nrqm-controlled-dynamics-common-domain-nonautonomous-evolution: mathematical-premise
  thm-nrqm-controlled-dynamics-driven-oscillator-common-domain: mathematical-premise
  def-nrqm-oscillator-framework-quadratic-potential-model: formulation-prerequisite
  def-hilbert-space: mathematical-premise
  def-bounded-linear-operator: mathematical-premise
  def-operator-norm: mathematical-premise
  def-symmetric-self-adjoint-and-essentially-self-adjoint: mathematical-premise
  def-sobolev-space-wkp-and-its-norm: mathematical-premise
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: "The common-domain driven model of the declared system:
  existence and uniqueness of a strong two-time propagator for a C^1 family of
  self-adjoint operators on a fixed dense domain Y, invariance of Y with a
  uniform graph bound, the strong Schroedinger equation on Y, the reverse and
  adjoint equations, and the admissibility of the declared driven oscillator
  family H(t) = H_osc - f(t) Q as an instance. The theorem is conditional on the
  common-domain regularity class; it asserts no laboratory realization, no
  measurement, no long-time or asymptotic statement and no empirical result."
empirical_premises: []
sources:
  references:
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009,
        Section 5.1 printed pages 123-126 (PDF pages 135-138):
        autonomous unitary evolution and Stone's theorem; the nonautonomous
        common-domain construction is supplied by the local mathematics"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
    - title: "B. Zwiebach, MIT 8.05 Quantum Physics II (Fall 2013), Chapter 6 'Quantum
        Dynamics', Section 4.3-4.5 printed pages 30-39 (PDF pages 30-39): free
        coherent-state evolution and uncertainties; the forced common-domain
        oscillator construction is supplied by the local mathematics"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/79a8091ef4f\
        18d8e3ff76a097e8db33c_MIT8_05F13_Chap_06.pdf"
verification:
  precheck: pass
---

## Statement

Adopt the framework data and the declared driven model of [[def-nrqm-driven-dynamics-framework-driven-model]] in the **common-domain class** of clause (b)(iii): $\mathfrak H$ is the model's state space ([[def-hilbert-space]]), $Y\subseteq\mathfrak H$ is a dense linear subspace that is itself a Hilbert space continuously embedded in $\mathfrak H$, $D(H(t))=Y$ for every $t\in I=[a,b]$, every $H(t)$ is self-adjoint as an operator on $\mathfrak H$ ([[def-symmetric-self-adjoint-and-essentially-self-adjoint]]), and $t\mapsto H(t)$ is of class $C^{1}(I;\mathcal B(Y,\mathfrak H))$ ([[def-bounded-linear-operator]], [[def-operator-norm]]); put $A(t):=H(t)/\hbar$ and, when $a<b$, $L:=\sup_{t\in I}\|H'(t)\|_{\mathcal B(Y,\mathfrak H)}<\infty$; for $a=b$ set $L:=0$. Assume the Axiom of Countable Choice and the Axiom of Choice ([[def-countable-choice]], [[def-axiom-of-choice]]). Then (all differential assertions below apply only when $a<b$, with one-sided derivatives at endpoints; for $a=b$ only $U(a,a)=I$ and the domain, norm and algebraic assertions are claimed):

(a) *Well-posedness of the declared model.* There is a family $U(t,s)$, $a\le s\le t\le b$ on $I$, of unitary operators on $\mathfrak H$ with $U(s,s)=I$, the cocycle $U(t,r)=U(t,s)U(s,r)$, joint strong continuity in $(t,s)$, and:
$$U(t,s)Y=Y,\qquad \|U(t,s)y\|_Y\le C_{I}\|y\|_Y\quad(y\in Y), \qquad i\hbar\,\partial_{t}U(t,s)y=H(t)U(t,s)y\quad(y\in Y),$$
where the derivative is in $\mathfrak H$ and $C_{I}<\infty$ is independent of the endpoints and depends on the actual graph equivalence of $Y$ with $D(H(t)/\hbar)$ as well as $I$ and $L/\hbar$; this family is unique among bounded families with the same strong equation on $Y$, $U(s,s)=I$ and locally bounded strong orbits. The model's clause (c)(iii) declaration therefore has exactly one solution.

(b) *Reverse and adjoint equations.* With $U(s,t):=U(t,s)^{-1}$ one has $U(t,s)^{*}=U(s,t)$ and $i\hbar\partial_{s}U(t,s)y=-U(t,s)H(s)y$ for $y\in Y$; equivalently $i\hbar\partial_{s}U(s,t)y=H(s)U(s,t)y$. The domain maps $(t,s)\mapsto U(t,s)|_{Y}$ are jointly strongly continuous in $\mathcal B(Y)$.

(c) *Declared instance: the driven oscillator.* Let $m,\omega,\hbar>0$ and let $(H_{\mathrm{osc}},Q)$ be the energy and position observables of the one-dimensional oscillator model of [[def-nrqm-oscillator-framework-quadratic-potential-model]] clauses (b), (c) on $L^{2}(\mathbb R,dx)$, with $Y=D(H_{\mathrm{osc}})$ carrying the graph norm, and let $f\in C^{1}(I;\mathbb R)$. Declare, as a further model assumption of the pair, the **driven oscillator family**
$$H(t):=H_{\mathrm{osc}}-f(t)Q\qquad(t\in I),$$
read as the system's energy at time $t$, with $f(t)Q$ in joules for $f(t)$ in $\mathrm{J\,m^{-1}}$. Then for every $t$ the operator $H(t)$ is self-adjoint on the single domain $Y$, the family belongs to $C^{1}(I;\mathcal B(Y,L^{2}))$ with derivative $-f'(t)Q$, and the hypotheses of clause (a) are satisfied with $\mathfrak H=L^{2}(\mathbb R,dx)$; consequently the driven oscillator has a unique strong propagator preserving $D(H_{\mathrm{osc}})$ and satisfying $i\hbar\partial_{t}U(t,s)y=H(t)U(t,s)y$ for $y\in D(H_{\mathrm{osc}})$.

(d) *Scope.* The theorem is conditional on the common-domain regularity class and on the cited oscillator construction; it asserts no existence statement outside that class, no explicit solution, no long-time or adiabatic statement, no measurement and no empirical comparison.

## Facts & Assumptions


**Given:** the declared driven model in the common-domain class with data $Y$, $H(t)$, $L$, $A=H/\hbar$; where clause (c) applies, the oscillator data $m,\omega,\hbar$, $H_{\mathrm{osc}}$, $Q$, and $f\in C^{1}(I;\mathbb R)$; the Axiom of Countable Choice and the Axiom of Choice.

[F1] **Common-domain supplier.** Under the hypotheses of the Statement with a generator family $A(t)$ of class $C^{1}([0,T];\mathcal B(Y,H))$ and $L=\sup_{t}\|A'(t)\|_{\mathcal B(Y,H)}$, there is a family $U(t,s)$ for $0\le s\le t\le T$ of unitary operators on $H$ with $U(s,s)=I$, the cocycle, joint strong continuity on $\{s\le t\}$ for each $\xi\in H$, $U(t,s)Y=Y$ with $\|U(t,s)y\|_Y\le C_T\|y\|_Y$ for a constant independent of $(s,t)$, and $t\mapsto U(t,s)y$ of class $C^1$ in $H$ with $i\partial_tU(t,s)y=A(t)U(t,s)y$ for $y\in Y$; the family is unique among bounded families with the same strong equation, $U(s,s)=I$ and bounded strong orbits; $U(s,t):=U(t,s)^{-1}$ satisfies $i\partial_sU(s,t)y=A(s)U(s,t)y$ and $U(t,s)^{*}=U(s,t)$, and the domain maps are jointly strongly continuous in $Y$ ([[thm-nrqm-controlled-dynamics-common-domain-nonautonomous-evolution]] clauses (a)-(c)).

[F2] **Driven-oscillator instance.** For $m,\omega,\hbar>0$, length $\ell=\sqrt{\hbar/(m\omega)}$, the oscillator energy $H_{\mathrm{osc}}=\hbar\omega(N_\psi+\frac12I)$ with domain $Y=D(N_\psi)$, position and momentum $Q,P$ of the model, and $f\in C^{1}([a,b];\mathbb R)$: for every $\psi\in Y$ one has $\|Q\psi\|\le\eta\|H_{\mathrm{osc}}\psi\|+b_\eta\|\psi\|$ for every $\eta>0$ (so $Q$ is $H_{\mathrm{osc}}$-bounded with relative bound $0$), for every $t$ the operator $H(t)=H_{\mathrm{osc}}-f(t)Q$ is self-adjoint on the single domain $Y$, and $t\mapsto H(t)$ is of class $C^{1}([a,b];\mathcal B(Y,L^{2}))$ with derivative $-f'(t)Q$ ([[thm-nrqm-controlled-dynamics-driven-oscillator-common-domain]] clauses (b), (c)).

[F3] **Model readings.** The model declares the class-(iii) family as its energy and clause (c)(iii) as its evolution demand ([[def-nrqm-driven-dynamics-framework-driven-model]] clauses (b)(iii), (c)(iii), (d)); the oscillator model supplies the assigned energy observable $(H_{\mathrm{osc}},\mathrm J)$, the position observable $(Q,\mathrm m)$ with unit $\mathrm m$, and the flow generated by $H_{\mathrm{osc}}$ ([[def-nrqm-oscillator-framework-quadratic-potential-model]] clauses (b), (c); [[post-nrqm-framework-state-and-composition]]; [[post-nrqm-framework-observable-and-probability]]; [[def-nrqm-framework-quantities-and-units]]).

## Proof

**Proof technique:** direct; instantiate the common-domain supplier at the model's generator family and check the oscillator family against its hypotheses.

**Given:** the data of the Statement and [F1]-[F3].

1.1 [Well-posedness] If $a=b$, set $U(a,a)=I$; the domain, norm and continuity assertions hold with $C_I=1$, and no derivative is asserted under the model's singleton convention. For $a<b$, the generator family $A(t)=H(t)/\hbar$ has $D(A(t))=Y$ for every $t$, is self-adjoint on $H$ as a scalar multiple of $H(t)$, and belongs to $C^{1}(I;\mathcal B(Y,H))$ with $A'(t)=H'(t)/\hbar$ and $\sup_t\|A'(t)\|_{\mathcal B(Y,H)}=L/\hbar<\infty$; these are exactly the hypotheses of [F1] with $T=b-a$ and the time reparametrisation $t\mapsto t-a$, so [F1] supplies the family $U$ with all displayed properties and identifies it with the model's clause (c)(iii). For explicit dependence, put $K(t)=A(t)-i:Y\to\mathfrak H$, $M=\sup_t\|K(t)^{-1}\|_{\mathfrak H\to Y}$, $N=\sup_t\|K(t)\|_{Y\to\mathfrak H}$, and $L_A=L/\hbar$. The bounded inverse and local Neumann construction in [F1], shows $M,N<\infty$ on compact $I$, without a further hypothesis. Its frozen-product construction bounds the frozen products and limiting evolution in $Y$ by a uniform constant controlled by $MN e^{L_A M(b-a)}$, with the endpoint graph conversions described there. Thus the genuine family-dependent graph constants, rather than $I,L$ alone, control $C_I$. This is clause (a). [F1, F3, given]

2.1 [Reverse and adjoint equations] For $a=b$, clause (b) reduces to the identity and continuity of $U(a,a)=I$. For $a<b$, the second and third assertions of [F1] give $U(t,s)^{*}=U(s,t)$ and $i\hbar\partial_{s}U(t,s)y=-U(t,s)H(s)y$ for $y\in Y$ after multiplying by $\hbar$, together with the joint strong continuity of the domain maps in the graph norm of $Y$. This is clause (b). [step 1.1, F1, given]

2.2 [The driven oscillator is an instance] By [F2], $H(t)=H_{\mathrm{osc}}-f(t)Q$ is self-adjoint on the single domain $Y$ for every $t$ and the family is of class $C^{1}(I;\mathcal B(Y,L^{2}))$ with derivative $-f'(t)Q$; this is precisely the common-domain class hypothesis of the model's clause (b)(iii) with $\mathfrak H=L^{2}(\mathbb R,dx)$ and the declared reading of $H(t)$ as the energy by [F3], and the factor $f(t)Q$ carries the unit $\mathrm{J\,m^{-1}}\cdot\mathrm m=\mathrm J$ by [F3]. Applying clause (a) with $H(t)/\hbar$ gives the unique strong propagator with the strong equation on $D(H_{\mathrm{osc}})$ and domain invariance. This is clause (c). [step 1.1, F1, F2, F3, given, algebra]

3.1 [Scope] Only the common-domain class, the regularity $C^{1}(Y,H)$ and the oscillator's relative-boundedness structure were used; no explicit solution, no asymptotic, adiabatic or long-time statement, no measurement and no empirical comparison was formed, which is clause (d). [step 1.1, step 2.1, step 2.2, given] ∎

## Remarks

- **Why the common domain matters.** The class-(iii) hypothesis gives what the bounded-control class of the mild theorem does not: invariance of the domain $Y$ and a genuine strong Schroedinger equation on $Y$. The price is the stronger regularity assumption, $C^{1}$ in the graph norm rather than mere strong continuity of a bounded control.
- **The unbounded position coupling and constant drives.** With the reference energy $H_0=H_{\mathrm{osc}}$, the perturbation $-f(t)Q$ is unbounded whenever $f(t)\ne0$, so general drives are treated here by the common-domain construction and relative bound of [F2]. A constant drive $f(t)\equiv f_0$ can instead be absorbed into the fixed self-adjoint energy $H_0=H_{\mathrm{osc}}-f_0Q$ on $Y$ by [F2], with bounded control $V(t)=0$; in particular $f_0=0$ gives the free oscillator. Thus the regularity classes need not be disjoint. The explicit oscillator propagator is a separate result used by the page's example.
