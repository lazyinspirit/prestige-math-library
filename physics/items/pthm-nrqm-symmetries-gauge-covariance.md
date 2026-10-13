---
id: pthm-nrqm-symmetries-gauge-covariance
aliases: [ nrqm-symmetries-gauge-covariance ]
kind: physics-theorem
domain: physics
title: "Gauge covariance of the prescribed-coupling model: unitary equivalence,
  the symmetry criterion and the transported propagator"
status: published
origin: session
dependency_level: 11
deps:
  [
    def-axiom-of-choice,
    def-countable-choice,
    def-nrqm-symmetries-framework-symmetry-groups-and-conservation,
    def-nrqm-magnetic-and-detection-magnetic-schrodinger-operator,
    lem-nrqm-symmetries-unitary-conjugation-and-commutation-calculus,
    post-nrqm-symmetries-prescribed-external-coupling,
    thm-nrqm-magnetic-and-detection-bounded-coefficient-magnetic-operator,
    thm-nrqm-magnetic-and-detection-gauge-h2-domain-preservation,
    thm-nrqm-magnetic-and-detection-gauge-transported-propagator
  ]
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-countable-choice: mathematical-premise
  def-nrqm-symmetries-framework-symmetry-groups-and-conservation: formulation-prerequisite
  def-nrqm-magnetic-and-detection-magnetic-schrodinger-operator: mathematical-premise
  lem-nrqm-symmetries-unitary-conjugation-and-commutation-calculus: mathematical-premise
  post-nrqm-symmetries-prescribed-external-coupling: physical-assumption
  thm-nrqm-magnetic-and-detection-bounded-coefficient-magnetic-operator: mathematical-premise
  thm-nrqm-magnetic-and-detection-gauge-h2-domain-preservation: mathematical-premise
  thm-nrqm-magnetic-and-detection-gauge-transported-propagator: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "The gauge structure of the prescribed-coupling model P5a for a
  spinless particle with admissible bounded-coefficient potentials: the
  conjugation identity transporting the minimal-coupling operator to the
  gauge-transformed potentials, the exact criterion under which the gauge
  multiplier is a symmetry of the fixed declared dynamics, the global-phase
  case, and the unitary equivalence of the transformed time-dependent model
  carrying the transported propagator. The item is conditional on the postulates
  and the cited operator analysis; it asserts no Maxwell equation, no physical
  identification of gauges, no claim about nonconstant gauges beyond the
  displayed operator criterion, and no apparatus or empirical content."
sources:
  references:
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section 3.3
        and its subsection 'Gauge transformations', printed pages 45-47 (PDF
        pages 53-55): the minimal-coupling Hamiltonian (3.31), the gauge
        transformation of the vector potential and the phase factor e^{iQ
        Lambda/hbar}, and the transport of eigenfunctions of the Hamiltonian
        (3.43)-(3.45); PDF page = printed page + 8"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
    - title: "J. Zinn-Justin and R. Guida, 'Gauge invariance', Scholarpedia 3(12):8287
        (2008), Section 2.2 'Quantum Hamiltonian in a magnetic field and gauge
        invariance', equations (13)-(19): the covariant-momentum transport U(p +
        eA(q))U^dagger = p + eA^Omega(q) and U H(A) U^dagger = H(A^Omega) for
        U=exp(i e Omega(q)/hbar), and the transported equation of motion (their
        sign convention is A^Omega = A - grad Omega with charge e)"
      url: "http://www.scholarpedia.org/article/Gauge_invariance"
verification:
  precheck: pass
---

## Statement

Adopt the postulates P1, P2 and P4 in the reading of
[[def-nrqm-symmetries-framework-symmetry-groups-and-conservation]] clause (a),
for a **declared isolated system** whose energy operator is the
prescribed-coupling minimal-coupling operator of
[[post-nrqm-symmetries-prescribed-external-coupling]]: a declared spinless
particle of mass parameter $m>0$ and charge parameter $q\in\mathbb R$, with
admissible prescribed potentials $(\mathbf A_{\rm ext},\Phi_{\rm ext})$ and
energy operator $K_{\mathbf A_{\rm ext},\Phi_{\rm ext}}$ on the domain
$W^{2,2}(\mathbb R^{3};\mathbb C)$
([[def-nrqm-magnetic-and-detection-magnetic-schrodinger-operator]]).
Assume the Axiom of Countable Choice and the Axiom of Choice
([[def-countable-choice]], [[def-axiom-of-choice]]). Let $I\subseteq\mathbb R$
be an open interval and let $\chi:\mathbb R^{3}\times I\to\mathbb R$ be a real
gauge function satisfying the two regularity hypotheses of
[[thm-nrqm-magnetic-and-detection-gauge-h2-domain-preservation]]
(for every $t$, $\chi(\cdot,t)$ is $C^{2}$ with bounded first and second
spatial derivatives, uniformly in $t$; and $t\mapsto\chi(x,t)$ is
differentiable with bounded $\partial_{t}\chi$). Put
$$\theta(x,t):=\frac{q}{\hbar}\chi(x,t),\qquad A'_{j}(\cdot,t):=A_{j}+D_{j}\chi(\cdot,t),\qquad \Phi'(\cdot,t):=\Phi_{\rm ext}-\partial_{t}\chi(\cdot,t),$$
let $G(t)$ be multiplication by $e^{i\theta(\cdot,t)}$, and put
$K:=K_{\mathbf A_{\rm ext},\Phi_{\rm ext}}$,
$H'(t):=K_{\mathbf A'(t),\Phi'(t)}$ and $U(\tau):=e^{-i\tau K/\hbar}$. Then:

(a) **Gauge conjugation and unitary equivalence.** If $\chi$ does not depend
on $t$, then $G:=G(t)$ is independent of $t$, is unitary with
$G\,W^{2,2}(\mathbb R^{3};\mathbb C)=W^{2,2}(\mathbb R^{3};\mathbb C)$, and
$$G\,K\,G^{-1}=K_{\mathbf A_{\rm ext}+\nabla\chi,\Phi_{\rm ext}},\qquad e^{-itK_{\mathbf A_{\rm ext}+\nabla\chi,\Phi_{\rm ext}}/\hbar}=G\,e^{-itK/\hbar}\,G^{-1}\quad(t\in\mathbb R):$$
the two prescribed-coupling models are related by the fixed unitary $G$.

(b) **Symmetry criterion and the global-phase case.** For every $t\in I$ the
operator $G(t)$ is unitary, preserves $W^{2,2}$, and is a symmetry of the
declared dynamics with energy $K$ in the sense of
[[def-nrqm-symmetries-framework-symmetry-groups-and-conservation]] clause (b)
**if and only if**
$$K_{\mathbf A'(t),\Phi_{\rm ext}}=K_{\mathbf A_{\rm ext},\Phi_{\rm ext}},$$
that is, if and only if transporting the vector potential while keeping the
original scalar potential reproduces the original operator. In particular, if
$\chi$ is constant, then $\mathbf A'(t)=\mathbf A_{\rm ext}$,
$\Phi'(t)=\Phi_{\rm ext}$ and $G(t)=e^{i\theta}I$ for the constant
$\theta=q\chi/\hbar$, so that every $G(t)$ is a symmetry of the declared
dynamics (a global phase). No claim is made in the nonconstant case beyond the
displayed criterion.

(c) **Transported propagator and the time-dependent model.** For the general
gauge function of the statement and every $u_{0}\in W^{2,2}$ and $s\in I$, the
curve
$$u(t):=G(t)\,U(t-s)\,G(s)^{-1}u_{0}\qquad(t\in I)$$
lies in $W^{2,2}$, is differentiable into $L^{2}$ on $I$, satisfies
$u(s)=u_{0}$ and $i\hbar\,u'(t)=H'(t)u(t)$ for every $t$, and is the unique
such curve; the two-parameter family $U'(t,s):=G(t)U(t-s)G(s)^{-1}$ consists of
unitaries mapping $W^{2,2}$ onto $W^{2,2}$, with $U'(t,t)=I$ and
$U'(t,r)U'(r,s)=U'(t,s)$. Moreover
$$H'(t)=G(t)\,K\,G(t)^{-1}-q\,\partial_{t}\chi(\cdot,t),$$
so the family $G(t)$ relates the autonomous model with energy $K$ to the
transformed model whose generator is $G(t)KG(t)^{-1}-q\partial_{t}\chi$; a
genuinely time-dependent family $G(t)$ is a family of unitaries indexed by
time and is not claimed to be a symmetry of the autonomous dynamics except at
those $t$ where the operator identity of (b) holds.

(d) **Scope.** The statement concerns the prescribed spinless
minimal-coupling model with admissible bounded-coefficient potentials and the
stated gauge regularity, and is conditional on P1, P2, P4 and P5a and the
cited operator analysis. It asserts no Maxwell equation, no source or
back-reaction model, no identification of the two coefficient pairs as
descriptions of one physical situation (that reading is part of P5a), no
statement about singular or unbounded potentials, and no apparatus or
empirical result; the gauge multipliers are unitary transformations between
coefficient classes and are symmetries of the fixed dynamics exactly under the
criterion displayed in (b).

## Facts & Assumptions

**Given:** The postulates P1, P2, P4 and P5a in the stated readings; the
Axioms of Countable Choice and of Choice; the potentials
$(\mathbf A_{\rm ext},\Phi_{\rm ext})$, $m>0$, $q\in\mathbb R$, the interval
$I$ and the gauge function $\chi$; the operators $K$, $H'(t)$, the multipliers
$G(t)$, the flow $U(\tau)$; times $s,t\in I$, $\tau\in\mathbb R$; a vector
$u_{0}\in W^{2,2}$.

[F1] **Declared model.** The declared system's energy operator is $K$, a
self-adjoint operator with domain $D(K)=W^{2,2}(\mathbb R^{3};\mathbb C)$ that
generates the strongly continuous unitary group $U(\tau)=e^{-i\tau K/\hbar}$
([[post-nrqm-symmetries-prescribed-external-coupling]] clauses (i)-(iii),
[[thm-nrqm-magnetic-and-detection-bounded-coefficient-magnetic-operator]]
clause (c), [[def-nrqm-magnetic-and-detection-magnetic-schrodinger-operator]]);
a symmetry of the declared dynamics is a unitary $S$ with
$S\,D(K)=D(K)$ and $S\,K=K\,S$ on $D(K)$, and a unitary symmetry group is a
group of such symmetries ([[def-nrqm-symmetries-framework-symmetry-groups-and-conservation]]
clauses (b),(c)).

[F2] **Gauge multipliers and covariance.** For every $t\in I$ the operator
$G(t)$ is unitary with $G(t)W^{k,2}(\mathbb R^{3};\mathbb C)=W^{k,2}(\mathbb R^{3};\mathbb C)$
for $k=1,2$; for every $u\in W^{1,2}$ one has
$\bigl(P_{j}-qA'_{j}(\cdot,t)\bigr)G(t)u=G(t)\bigl(P_{j}-qA_{j}\bigr)u$; and
$t\mapsto G(t)h$ is continuous with
$\frac{d}{dt}G(t)h=\frac{iq}{\hbar}\partial_{t}\chi(\cdot,t)G(t)h$ for every
$h\in L^{2}$ ([[thm-nrqm-magnetic-and-detection-gauge-h2-domain-preservation]]
clauses (a),(c),(d)). In particular
$G(t)\,W^{2,2}(\mathbb R^{3};\mathbb C)=W^{2,2}(\mathbb R^{3};\mathbb C)$, so
$G(t)D(K)=D(K)$ by [F1].

[F3] **Transported operator and propagator.** With
$A'_{j}(\cdot,t)=A_{j}+D_{j}\chi(\cdot,t)$ and
$\Phi'(\cdot,t)=\Phi_{\rm ext}-\partial_{t}\chi(\cdot,t)$ the pair
$(\mathbf A'(t),\Phi'(t))$ is admissible and $H'(t)=K_{\mathbf A'(t),\Phi'(t)}$
is self-adjoint with domain $W^{2,2}$
([[thm-nrqm-magnetic-and-detection-bounded-coefficient-magnetic-operator]],
[[def-nrqm-magnetic-and-detection-magnetic-schrodinger-operator]]); on
$W^{2,2}$ one has the operator identities
$G(t)\,K\,G(t)^{-1}=K_{\mathbf A'(t),\Phi_{\rm ext}}$ and
$H'(t)=G(t)\,K\,G(t)^{-1}-q\,\partial_{t}\chi(\cdot,t)$
([[thm-nrqm-magnetic-and-detection-gauge-transported-propagator]] clause (a));
and for every $u_{0}\in W^{2,2}$ and $s\in I$ the curve
$u(t)=G(t)U(t-s)G(s)^{-1}u_{0}$ is a pointwise $W^{2,2}$-valued,
$L^{2}$-differentiable solution of $i\hbar u'(t)=H'(t)u(t)$ with $u(s)=u_{0}$,
while $U'(t,s)=G(t)U(t-s)G(s)^{-1}$ is unitary, maps $W^{2,2}$ onto $W^{2,2}$
and satisfies the composition law
([[thm-nrqm-magnetic-and-detection-gauge-transported-propagator]] clauses
(b),(c)); uniqueness in this pointwise-domain class is established locally
in proof step 1.2, without invoking the supplier's additional
$W^{2,2}$-continuity condition.

[F4] **Conjugation calculus.** For a unitary $W$ and a self-adjoint $K$ the
operator $WKW^{-1}$ with domain $WD(K)$ is self-adjoint, and its flow satisfies
$e^{-itWKW^{-1}/\hbar}=We^{-itK/\hbar}W^{-1}$ for every $t$
([[lem-nrqm-symmetries-unitary-conjugation-and-commutation-calculus]]
clause (a)).

## Proof

**Proof technique:** direct; read the transported operator identity and the
domain preservation off the gauge suppliers, turn the symmetry definition into
the operator equality, obtain the flow identity from the conjugation calculus,
and quote the transported propagator for the general time-dependent case.

**Given:** The data of the statement and [F1]-[F4].

1.1 [Transported operator identity and domain preservation] Fix $t\in I$. By [F2] $G(t)$ is unitary and $G(t)W^{2,2}=W^{2,2}$, so $G(t)D(K)=D(K)$ by [F1]; and by [F3] $G(t)KG(t)^{-1}=K_{\mathbf A'(t),\Phi_{\rm ext}}$ as an identity of self-adjoint operators with domain $W^{2,2}$. If $\chi$ does not depend on $t$, then $A'_{j}(\cdot,t)=A_{j}+D_{j}\chi$ is independent of $t$ and $\Phi'(t)=\Phi_{\rm ext}$, and $G(t)$ is independent of $t$; hence in that case $GKG^{-1}=K_{\mathbf A_{\rm ext}+\nabla\chi,\Phi_{\rm ext}}$ with domain $W^{2,2}$. [F1, F2, F3, given, algebra]

1.2 [Uniqueness in the stated solution class] Let $u_1,u_2:I\to L^2(\mathbb R^3;\mathbb C)$ be any two curves differentiable into $L^2$, taking values in $W^{2,2}$ at every $t$, solving $i\hbar u_j'(t)=H'(t)u_j(t)$ for every $t$, and agreeing at $s$. Put $w:=u_1-u_2$. Then $w(t)\in W^{2,2}$, $w(s)=0$, and $w'(t)=-\frac{i}{\hbar}H'(t)w(t)$. By [F3], for each $t$ the operator $H'(t)$ is self-adjoint on $W^{2,2}$, so $\langle H'(t)w(t),w(t)\rangle$ is real. Differentiability into $L^2$ and the first-linear inner-product convention give $$\frac{d}{dt}\|w(t)\|_2^2=2\operatorname{Re}\langle w'(t),w(t)\rangle=2\operatorname{Re}\left(-\frac{i}{\hbar}\langle H'(t)w(t),w(t)\rangle\right)=0.$$ Hence $\|w(t)\|_2=\|w(s)\|_2=0$ for every $t\in I$, so $u_1=u_2$. This proves uniqueness without requiring continuity into $W^{2,2}$. [F3, given, algebra]

2.1 [Symmetry criterion] By [F1] the unitary $G(t)$ is a symmetry of the declared dynamics with energy $K$ exactly when $G(t)D(K)=D(K)$ and $G(t)KG(t)^{-1}=K$ on $D(K)$; the domain condition holds by step 1.1, and the operator identity holds exactly when $K_{\mathbf A'(t),\Phi_{\rm ext}}=K$, again by step 1.1. This is the criterion of (b). If $\chi$ is constant, then $D_{j}\chi=0$ as a weak derivative and $\partial_{t}\chi=0$, so $\mathbf A'(t)=\mathbf A_{\rm ext}$, $\Phi'(t)=\Phi_{\rm ext}$ and $K_{\mathbf A'(t),\Phi_{\rm ext}}=K$; moreover $G(t)=e^{i\theta}I$ with the constant $\theta=q\chi/\hbar$, so $G(t)$ is unitary and commutes with $K$, hence is a symmetry. [step 1.1, F1, F2, given, algebra]

2.2 [Flow identity for static gauges] Let $\chi$ be independent of $t$ and put $G:=G(t)$. By step 1.1, $GKG^{-1}=K_{\mathbf A_{\rm ext}+\nabla\chi,\Phi_{\rm ext}}$; applying the flow identity of [F4] to the unitary $G$ and the self-adjoint $K$ gives $e^{-itGKG^{-1}/\hbar}=Ge^{-itK/\hbar}G^{-1}$, which is the second display of (a). Together with step 1.1 this proves (a). [step 1.1, F4, given, algebra]

3.1 [Transported propagator] Supplier [F3] gives the curve $u(t)=G(t)U(t-s)G(s)^{-1}u_{0}$, its pointwise membership in $W^{2,2}$, its $L^{2}$ differentiability and equation, the composition law for $U'(t,s)$, and preservation of $W^{2,2}$. Its uniqueness proof uses the stronger class of curves continuous into $W^{2,2}$; the uniqueness in the class stated here is proved in step 1.2. The operator identity $H'(t)=G(t)KG(t)^{-1}-q\partial_{t}\chi(\cdot,t)$ is also [F3]. By step 2.1 the unitary $G(t)$ is a symmetry of the autonomous dynamics at the times $t$ at which $K_{\mathbf A'(t),\Phi_{\rm ext}}=K$, and no symmetry statement is made outside those times; this is (c). [step 2.1, F3, given, step 1.2]

4.1 [Assembly and scope] Steps 1.1 and 2.1 prove the transported operator identity, steps 2.1 and 2.2 prove (a) and (b), and steps 3.1 and 1.2 prove (c); clause (d) records that the statement is conditional on P1, P2, P4 and P5a, that the gauge multipliers are unitary equivalences or symmetries exactly under the displayed operator criterion, and that no field equation, physical identification, apparatus or empirical claim is made. [step 1.1, step 2.1, step 2.2, step 3.1, step 1.2] ∎

## Remarks

- **Gauge transformation is not automatically a symmetry.** A gauge
  transformation replaces the coefficient pair; the multiplier is a symmetry
  of the fixed dynamics only when the transported magnetic operator with the
  original scalar potential coincides with the original operator. Constant
  gauges give the global phase, which is a symmetry; the nonconstant case is
  left to the criterion, and no general classification of the pairs for which
  the criterion holds is attempted here.
- **Two readings distinguished.** The theorem proves the operator identities;
  the further reading that the gauge-related coefficient pairs describe the
  same physical situation is part of the adopted postulate P5a and is not a
  mathematical consequence of the identities proved here.
