---
id: cex-nrqm-kinematics-ccr-cannot-hold-for-bounded-operators
aliases: [nrqm-kinematics-ccr-cannot-hold-for-bounded-operators]
kind: counterexample
domain: mathematics
title: "No bounded operators satisfy the canonical commutation relation with a nonzero commutator"
status: draft
origin: session
dependency_level: 2
deps: [def-adjoint-of-a-densely-defined-unbounded-operator, def-axiom-of-choice, def-bounded-linear-operator, def-countable-choice, def-hilbert-space, def-operator-norm, def-symmetric-self-adjoint-and-essentially-self-adjoint, lem-mean-value-inequality-for-a-differentiable-banach-valued-curve, lem-nrqm-autonomous-dynamics-flow-calculus, lem-nrqm-autonomous-dynamics-heisenberg-flow, lem-operator-norm-is-a-norm, lem-self-adjoint-operator-generates-a-strongly-continuous-unitary-group]
dependency_roles:
  def-adjoint-of-a-densely-defined-unbounded-operator: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  def-bounded-linear-operator: mathematical-premise
  def-countable-choice: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-operator-norm: mathematical-premise
  def-symmetric-self-adjoint-and-essentially-self-adjoint: mathematical-premise
  lem-mean-value-inequality-for-a-differentiable-banach-valued-curve: mathematical-premise
  lem-nrqm-autonomous-dynamics-flow-calculus: mathematical-premise
  lem-nrqm-autonomous-dynamics-heisenberg-flow: mathematical-premise
  lem-operator-norm-is-a-norm: mathematical-premise
  lem-self-adjoint-operator-generates-a-strongly-continuous-unitary-group: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, Section 2.1, printed pages 55-58 (PDF pages 67-70): the closed graph theorem forces observables such as position and momentum to be unbounded, with only dense domains"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Box 2.2 and Sections 2.3.1-2.3.2, printed pages 25-27 (PDF pages 33-35): the integration-by-parts Hermiticity argument for the momentum operator (wavefunctions vanishing at spatial infinity) and the canonical commutator [x,p]=i hbar"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
verification:
  precheck: pass
---
## Statement refuted

Let $H\ne\{0\}$ be a complex Hilbert space and let $\hbar>0$. Then there exist
bounded linear operators $A,B\in\mathcal B(H)$ with
$$AB-BA=i\hbar I .$$

## Facts & Assumptions

**Given:** The Axiom of Countable Choice and the Axiom of Choice ([[def-countable-choice]], [[def-axiom-of-choice]]); a nonzero complex Hilbert space $H$; $\hbar>0$; a hypothetical pair $A,B\in\mathcal B(H)$ of bounded linear operators with $AB-BA=i\hbar I$; a vector $x\in H$; a real $t$.

[F1] **Heisenberg flow for a bounded operator.** Let $T$ be self-adjoint and $A\in\mathcal B(H)$ with $A\,D(T)\subseteq D(T)$; put $A(t):=U(-t)AU(t)$ for $U(t)=e^{itT}$. Then $A(t)\in\mathcal B(H)$, $\|A(t)\|=\|A\|$ for every $t$, and for every $y\in D(T)$ the map $t\mapsto A(t)y$ is differentiable with $\frac{d}{dt}A(t)y=-i\bigl(TA(t)-A(t)T\bigr)y$ ([[lem-nrqm-autonomous-dynamics-heisenberg-flow]] clauses (a),(b)).

[F2] **Flow calculus.** $U$ is a strongly continuous one-parameter unitary group with $U(t)^{*}=U(-t)$, $U(t)D(T)=D(T)$ and $TU(t)=U(t)T$ on $D(T)$; if $T$ is bounded then $D(T)=H$ and these are identities of bounded operators ([[lem-nrqm-autonomous-dynamics-flow-calculus]] clause (a), [[lem-self-adjoint-operator-generates-a-strongly-continuous-unitary-group]], [[def-symmetric-self-adjoint-and-essentially-self-adjoint]]).

[F3] **Curves with vanishing derivative.** If $w:I\to H$ is differentiable on an interval with $w'\equiv0$, then $w$ is constant: for $s,t\in I$, $\|w(t)-w(s)\|\le\sup_{\xi}\|w'(\xi)\|\,|t-s|=0$ ([[lem-mean-value-inequality-for-a-differentiable-banach-valued-curve]]).

[F4] **Norm identities.** The operator norm is a norm on $\mathcal B(H)$, so $\|S-T\|\ge\bigl|\|S\|-\|T\|\bigr|$ and $\|cS\|=|c|\,\|S\|$ for scalars $c$ ([[def-operator-norm]], [[lem-operator-norm-is-a-norm]], [[def-bounded-linear-operator]]).

## Counterexample

**Proof technique:** direct; show that the assumed bounded commutator relation would make the Heisenberg flow of $A$ under the bounded self-adjoint generator $B$ a linear-in-$t$ family with constant norm, and let $t\to\infty$ for a contradiction with the reverse triangle inequality.

**Given:** The data of the refuted statement and [F1]-[F4].

1.1 [The conjugated commutator] Suppose the pair $A,B$ exists. Since $B$ is bounded and self-adjoint, $D(B)=H$, and [F2] gives $BU(-t)=U(-t)B$ and $U(t)B=BU(t)$ as bounded-operator identities for the flow $U(t)=e^{itB}$. Hence $BA(t)=BU(-t)AU(t)=U(-t)BAU(t),\qquad A(t)B=U(-t)AU(t)B=U(-t)ABU(t),$ so $BA(t)-A(t)B=U(-t)(BA-AB)U(t)$; inserting the assumed $AB-BA=i\hbar I$, that is $BA-AB=-i\hbar I$, and using $U(-t)U(t)=I$, we obtain $BA(t)-A(t)B=-i\hbar\,I.$ [F2, given, algebra]

2.1 [The flow is affine in $t$] The product-domain hypothesis of [F1] holds for $A$ and the bounded self-adjoint $T:=B$, because $D(T)=H$; hence for every $x\in H$ the map $t\mapsto A(t)x$ is differentiable with $\frac{d}{dt}A(t)x=-i(BA(t)-A(t)B)x=-\hbar x$ by step 1.1. Therefore $w(t):=A(t)x+\hbar tx$ satisfies $w'(t)=0$ for all $t$ and is constant by [F3], with $w(0)=Ax$; hence $A(t)x=\bigl(A-\hbar tI\bigr)x\qquad(x\in H,\ t\in\mathbb R).$ [step 1.1, F1, F3, algebra]

3.1 [Norm contradiction] By [F1] applied to $A$ and $T=B$, $\|A(t)\|=\|A\|$ for every $t$; by step 2.1 the operator identity $A(t)=A-\hbar tI$ holds, so $\|A-\hbar tI\|=\|A\|$ for every $t$. But [F4] gives $\|A-\hbar tI\|\ge\hbar|t|-\|A\|$, which for $|t|>2\|A\|/\hbar$ exceeds $\|A\|$. This is a contradiction: no such pair $A,B$ exists. Consequently the displayed existential claim is refuted. [step 2.1, F1, F4, algebra] ∎

## Remarks

- **Unboundedness is not a technicality.** The refutation shows that a
  canonical commutation relation with $\hbar>0$ cannot hold as an identity of
  bounded operators; at least one of the two operators must be unbounded (or
  the relation must be stated on a core, as for the model's componentwise
  operators, or replaced by the unitary Weyl form). This is why the model
  defines position and momentum on dense domains rather than on all of the
  Hilbert space.
- **What is not refuted.** A core relation such as the canonical commutation
  relations on the Schwartz classes, and the associated one-parameter unitary
  groups, are unaffected: the operators there are unbounded. This item makes
  no statement about the Weyl form, about semiboundedness, or about any
  physical system.
