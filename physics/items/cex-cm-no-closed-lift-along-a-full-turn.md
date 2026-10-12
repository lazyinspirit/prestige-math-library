---
id: cex-cm-no-closed-lift-along-a-full-turn
kind: counterexample
title: "A closed rotation loop with no closed lift: the full turn about an axis lifts from $1$ to $-1$"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 6
deps: [def-cm-quaternion-rotation-map-and-cover, lem-cm-quaternion-product-rule-and-conjugation-formula, thm-cm-quaternion-lift-exists-and-is-unique, prop-cm-quaternion-angular-velocity-reconstruction, def-quaternions, thm-sine-and-cosine-derivatives, cor-trigonometric-parity-and-pythagorean-identity, thm-quarter-turn-values-and-shift-formulas, def-ck-euclidean-maps-and-diffeomorphisms]
dependency_roles:
  def-cm-quaternion-rotation-map-and-cover: mathematical-premise
  lem-cm-quaternion-product-rule-and-conjugation-formula: mathematical-premise
  thm-cm-quaternion-lift-exists-and-is-unique: mathematical-premise
  prop-cm-quaternion-angular-velocity-reconstruction: mathematical-premise
  def-quaternions: mathematical-premise
  thm-sine-and-cosine-derivatives: mathematical-premise
  cor-trigonometric-parity-and-pythagorean-identity: mathematical-premise
  thm-quarter-turn-values-and-shift-formulas: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "P. Etingof, MIT 18.745 Lie Groups and Lie Algebras I (Fall 2020), Exercise 3.9(ii) and the Dirac belt-trick discussion: the full turn in SO(3) lifts to a path from a unit quaternion to its negative; pi_1(SO(3)) = Z/2, printed page 26"
      url: "https://ocw.mit.edu/courses/18-745-lie-groups-and-lie-algebras-i-fall-2020/mit18_745_f20_lec_full.pdf"
    - title: "J. Sola, Quaternion kinematics for the error-state Kalman filter (arXiv:1711.02508), Section 2.4.6: by the time the quaternion vector makes a half turn (theta = pi) the 3D rotation has completed a full turn; R{-q} = R{q}, printed page 24"
      url: "https://arxiv.org/pdf/1711.02508"
    - title: "N. Trawny and S. I. Roumeliotis, Indirect Kalman Filter for 3D Attitude Estimation (University of Minnesota, TR-2005-002), Section 1.1: the quaternion q and the quaternion -q describe a rotation to the same final coordinate system position, printed page 2"
      url: "http://mars.cs.umn.edu/tr/reports/Trawny05b.pdf"
---

## Statement refuted

In this item, a curve on $[0,1]$ is called $C^1$ when it is continuous on $[0,1]$ and its restriction to $(0,1)$ is $C^1$; no endpoint derivatives are required.

For every closed $C^1$ curve $R:[0,1]\to SO(3)$ with $R(0)=R(1)=I_3$ and every $q_0\in S^3$ with $\rho(q_0)=I_3$, there exists a $C^1$ lift $q:[0,1]\to S^3$ of $R$ with $q(0)=q(1)=q_0$.

## Facts & Assumptions

**Given:** The curve $\hat q(t):=\cos(\pi t)+\varphi(e_3)\sin(\pi t)$ on $[0,1]$, where $\varphi$ is the identification of [[def-cm-quaternion-rotation-map-and-cover]] and $e_3$ is the third standard basis vector, and the curve $\hat R(t):=\rho(\hat q(t))$.

[L1] $S^3=\{q:N(q)=1\}$, $\rho(q)(x)=qxq^{-1}$, $\rho(-q)=\rho(q)$, and $\rho(1)$ is the identity of $SO(3)$ ([[def-cm-quaternion-rotation-map-and-cover]] Definition and Remark).

[L2] The globally defined curve $\hat q$ is $C^1$ and $N(s+\varphi(w))=s^2+\|w\|_2^2$; the Pythagorean identity gives $N(\hat q(t))=1$, and the quarter-turn values give $\hat q(1)=-1$ ([[def-quaternions]], [[thm-sine-and-cosine-derivatives]], [[cor-trigonometric-parity-and-pythagorean-identity]], [[thm-quarter-turn-values-and-shift-formulas]], [[def-ck-euclidean-maps-and-diffeomorphisms]]).

[L3] For a $C^1$ path in $S^3$ on an open interval containing $[0,1]$ the associated path $\rho\circ q$ is $C^1$ ([[prop-cm-quaternion-angular-velocity-reconstruction]] clause 2, [[lem-cm-quaternion-product-rule-and-conjugation-formula]] clause 1).

[L4] For a $C^1$ rotation path on an open interval and a prescribed unit quaternion over its initial value the $C^1$ lift is unique; moreover every lift of that path is $\pm q$ for any one of them ([[thm-cm-quaternion-lift-exists-and-is-unique]] clauses 1-2).

## Counterexample

**Proof technique:** direct; exhibit the explicit full-turn loop and use the uniqueness of lifts with prescribed initial value.

1.1 $\hat q$ is $C^1$ with $N(\hat q(t))=\cos^2(\pi t)+\sin^2(\pi t)=1$, so $\hat q(t)\in S^3$ for every $t$; also $\hat q(0)=1$ and $\hat q(1)=-1$ by [L2]. [L1, L2]

2.1 The path $\hat R=\rho\circ\hat q$ is $C^1$ on $[0,1]$ by [L3] (applied after extending $\hat q$ to an open interval around $[0,1]$); $\hat R(0)=\rho(1)$ and $\hat R(1)=\rho(-1)$ are both the identity of $SO(3)$ by [L1]. [step 1.1, L1, L3]

3.1 Take $q_0=1$ and let $q:[0,1]\to S^3$ be a $C^1$ lift of $\hat R$ with $q(0)=q(1)=1$. On the nondegenerate open interval $(0,1)$ the hypothesis of [L4] is satisfied by the restriction of $\hat R$, and $q|_{(0,1)}$ is a $C^1$ lift with prescribed value $q(1/2)$ at the interior time $1/2$; hence it is the unique such lift, and every $C^1$ lift of $\hat R|_{(0,1)}$ is $\pm q|_{(0,1)}$ by [L4], in particular $\hat q|_{(0,1)}=q|_{(0,1)}$ or $\hat q|_{(0,1)}=-q|_{(0,1)}$. In the first case $q(1)=\lim_{t\uparrow1}q(t)=\lim_{t\uparrow1}\hat q(t)=\hat q(1)=-1$, contradicting $q(1)=1$; in the second case $q(0)=\lim_{t\downarrow0}q(t)=-\lim_{t\downarrow0}\hat q(t)=-\hat q(0)=-1$, contradicting $q(0)=1$. Hence $\hat R$ is a closed $C^1$ loop with no closed $C^1$ lift through $1$; for $q_0=-1$ the same argument applied to $-q$, using $\rho(-q)=\rho(q)$ from [L1], gives the same contradiction, so the statement is refuted for both preimages of the identity. [step 1.1, step 2.1, L1, L4, algebra] ∎

## Remarks

- The loop $\hat R|_{[0,1]}$ is the full turn about the axis $e_3$; its lift $\hat q$ runs from $1$ to $-1$, a half turn of the quaternion sphere. This is the standard local demonstration that the two-sheeted cover of $SO(3)$ by $S^3$ is nontrivial along loops; no claim about fundamental groups is made here, and no physical spin interpretation is asserted.

- The counterexample refutes only the displayed closed-lift statement. It does not assert that every closed rotation loop fails to have a closed lift, nor that some lift with a different initial value could not be closed; the statement refuted is the universal closed-lift claim for the prescribed initial value, and it is false already at the full turn.
