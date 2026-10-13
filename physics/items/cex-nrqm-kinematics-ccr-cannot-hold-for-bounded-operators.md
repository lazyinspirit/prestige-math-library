---
id: cex-nrqm-kinematics-ccr-cannot-hold-for-bounded-operators
aliases: [ nrqm-kinematics-ccr-cannot-hold-for-bounded-operators ]
kind: counterexample
domain: mathematics
title: "No bounded operators satisfy the canonical commutation relation with a
  nonzero commutator"
status: published
origin: session
dependency_level: 0
deps:
  [
    def-bounded-linear-operator,
    def-hilbert-space,
    def-operator-norm,
    lem-operator-norm-is-a-norm
  ]
dependency_roles:
  def-bounded-linear-operator: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-operator-norm: mathematical-premise
  lem-operator-norm-is-a-norm: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009,
        Section 2.1, printed pages 55-58 (PDF pages 67-70): the closed graph
        theorem forces observables such as position and momentum to be
        unbounded, with only dense domains"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Box 2.2 and
        Sections 2.3.1-2.3.2, printed pages 25-27 (PDF pages 33-35): the
        integration-by-parts Hermiticity argument for the momentum operator
        (wavefunctions vanishing at spatial infinity) and the canonical
        commutator [x,p]=i hbar"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
verification:
  precheck: pass
---
## Statement refuted

Let $H\ne\{0\}$ be a complex Hilbert space and let $\hbar>0$. Then there exist
bounded linear operators $A,B\in\mathcal B(H)$ with
$$AB-BA=i\hbar I .$$

## Facts & Assumptions

**Given:** A nonzero complex Hilbert space $H$; $\hbar>0$; a hypothetical pair $A,B\in\mathcal B(H)$ of bounded linear operators with $AB-BA=i\hbar I$.

[F1] **Operator-norm estimates.** For bounded operators $S,T$ on $H$, $\|ST\|\le\|S\|\,\|T\|$: for every $\|x\|\le1$, $\|STx\|\le\|S\|\,\|Tx\|\le\|S\|\,\|T\|$, and taking the supremum gives the claim ([[def-operator-norm]]). Consequently $\|T^{n}\|\le\|T\|^{n}$ for every integer $n\ge1$. Since $H\ne\{0\}$, $\|I\|=1$.

[F2] **Norm identities.** The operator norm is a norm on $\mathcal B(H)$, so it is homogeneous and satisfies the triangle and reverse-triangle inequalities ([[def-operator-norm]], [[lem-operator-norm-is-a-norm]]).

## Counterexample

**Proof technique:** direct; iterate the bounded commutator identity to obtain a factorial lower bound for $\|B^{n}\|$, then contradict the geometric upper bound for powers of a bounded operator.

**Given:** The data of the refuted statement and [F1]-[F2].

1.1 [The hypothetical operators are nonzero] Suppose $A,B\in\mathcal B(H)$ satisfy $AB-BA=i\hbar I$. Since $H\ne\{0\}$, $I\ne0$ and $\|I\|=1$ by [F1]. Because $\hbar>0$, the commutator is nonzero; hence neither $A$ nor $B$ is zero. [F1, given, algebra]

2.1 [Commutators with powers] For every integer $n\ge1$, [step 1.1, algebra]
$$[A,B^{n}]=n i\hbar B^{n-1}.$$
The case $n=1$ is the assumed relation. If it holds for $n$, then $[A,B^{n+1}]=[A,B^{n}]B+B^{n}[A,B]=(n+1)i\hbar B^{n}$, proving it by induction. No power $B^{n}$ can be zero: if one were zero, this identity would force $B^{n-1}=0$, and iteration would give $I=B^{0}=0$, contradicting [F1]. [step 1.1, algebra]

3.1 [Factorial lower bound] By step 2.1 and [F1]-[F2], for every $n\ge1$, [step 1.1, step 2.1, F1, F2, algebra]
$$n\hbar\|B^{n-1}\|=\|[A,B^{n}]\|\le\|AB^{n}\|+\|B^{n}A\|\le2\|A\|\,\|B^{n}\|.$$
Put $c:=\hbar/(2\|A\|)>0$. Iterating the resulting inequalities $\|B^{n}\|\ge nc\|B^{n-1}\|$ from $\|B^{0}\|=\|I\|=1$ gives $\|B^{n}\|\ge c^{n}n!$ for every $n\ge1$. [step 1.1, step 2.1, F1, F2, algebra]

4.1 [Contradiction] By [F1], $\|B^{n}\|\le\|B\|^{n}$. Let $K:=\|B\|/c$ and choose an integer $M>K$. For $n\ge M$, $n!\ge M!M^{n-M}$, so [step 3.1, F1, algebra]
$$\frac{c^{n}n!}{\|B\|^{n}}\ge\frac{M!}{M^{M}}\left(\frac{M}{K}\right)^{n},$$
which tends to $+\infty$ because $M/K>1$. This contradicts the simultaneous lower and upper bounds on $\|B^{n}\|$. Thus no bounded pair $A,B$ satisfies the commutator relation, and the displayed existential claim is refuted. [step 3.1, F1, algebra] ∎

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
