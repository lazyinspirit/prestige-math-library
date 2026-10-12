---
id: rem-cm-quaternion-lift-scope-and-sign
kind: remark
title: "Scope of the quaternion lift: the global sign ambiguity, closed loops, and the absence of a physical spin claim"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 6
deps: [def-cm-quaternion-rotation-map-and-cover, thm-cm-quaternion-lift-exists-and-is-unique]
dependency_roles:
  def-cm-quaternion-rotation-map-and-cover: mathematical-premise
  thm-cm-quaternion-lift-exists-and-is-unique: mathematical-premise
forward_refs: [cex-cm-no-closed-lift-along-a-full-turn]
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "J. Sola, Quaternion kinematics for the error-state Kalman filter (arXiv:1711.02508), Section 2.4.6 (the double cover of SO(3): a full 2pi turn of the rotation corresponds to a half turn of the quaternion vector, so q and -q encode the same rotation), printed page 24"
      url: "https://arxiv.org/pdf/1711.02508"
    - title: "P. Etingof, MIT 18.745 Lie Groups and Lie Algebras I (Fall 2020), Exercise 3.9(ii) (SU(2) -> SO(3) is a universal covering; pi_1(SO(3)) = Z/2; the Dirac belt trick), printed page 26"
      url: "https://ocw.mit.edu/courses/18-745-lie-groups-and-lie-algebras-i-fall-2020/mit18_745_f20_lec_full.pdf"
verification:
  precheck: pass
---

## Statement

The following qualifications are part of what the preceding items do and do not claim.

1. **Two lifts and one rotation.** Let $I\subseteq\mathbb R$ be a nondegenerate open interval and let $R:I\to SO(3)$ be of class $C^1$. By [[thm-cm-quaternion-lift-exists-and-is-unique]], $R$ has exactly two $C^1$ quaternion lifts, namely $q$ and $-q$ for any one lift $q$, both solve $q'=\tfrac12q\,\varphi(\omega_R(t))$ for the same body angular velocity $\omega_R$, and $\rho(q)=\rho(-q)=R$. By the scaling recorded in [[def-cm-quaternion-rotation-map-and-cover]], $\rho(\hat\lambda q)=\rho(q)$ for every nonzero real $\lambda$, so a rotation is represented by the antipodal pair $\pm q$ of unit quaternions and by no other data of the quaternion itself.

2. **No globally continuous sign choice.** The sign of a lift is not determined by $R$, and the two signs cannot always be glued continuously along closed motion. The companion examples page exhibits a loop $R:[0,1]\to SO(3)$, continuous on $[0,1]$ and $C^1$ on $(0,1)$, with $R(0)=R(1)=I_3$, whose explicit lift from $1$ ends at $-1$. By uniqueness on the interior and continuity at the endpoints, this loop admits no closed lift through $1$ with that regularity; the explicit counterexample is linked in the Remarks below. In this sense the sign ambiguity is intrinsic and not an artifact of the formula $\rho(q)(x)=qxq^{-1}$.

3. **No physical claim.** Every statement on this page concerns curves into $S^3$ and into the matrix group $SO(3)$ and the differential equation $q'=\tfrac12q\,\varphi(\omega(t))$. No quantum-mechanical spin, relativistic, or half-integer-angular-momentum interpretation is asserted, no measurement is reported, and no empirical precision is claimed anywhere.

## Explanations

- **What "double cover" means here.** The map $q\mapsto\rho(q)$ from $S^3$ onto $SO(3)$ is two-to-one with fibres $\{q,-q\}$ and is a covering homomorphism; this is the content of the published canonical item `ex-su-two-to-so-three-as-a-covering-homomorphism`, restated in [[def-cm-quaternion-rotation-map-and-cover]] and linked from the page summary of this pair. Its countable-choice cost is part of that supplier's statement and is carried by every item that uses the kernel $\{1,-1\}$.

- **What is done locally.** The items of this page add the differential-equation content: for a continuous body angular velocity $\omega$ the lift equation has a unique solution in $S^3$ on the whole interval, the resulting rotation path has body angular velocity $\omega$, and conversely the body angular velocity of any $C^1$ rotation path is read from any lift by $\omega=2\varphi^{-1}(q^{-1}q')$, where $\varphi^{-1}$ is applied to the imaginary quaternion $q^{-1}q'$. None of these arguments re-proves the covering statement, which is taken from the published supplier.

- **Half-angle parametrization.** The factor $\tfrac12$ in the lift equation is the algebraic half-angle relation of the quaternion parametrization: for a rotation of angle $\theta$ about a fixed axis the lift carries the angle $\theta/2$, as the examples on the companion page verify on explicit curves. This is an identity about the map $\rho$, not a statement about any physical process.

## Remarks

- The explicit closed-loop counterexample of clause 2 is [[cex-cm-no-closed-lift-along-a-full-turn]], on the companion examples page of this pair; it is a forward reference from this page and is declared as such in the frontmatter of this item.
