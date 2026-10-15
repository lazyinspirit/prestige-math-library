---
id: thm-rpm-finite-future-momentum-sum
kind: theorem
title: "Finite causal sums and center-of-momentum rest observer"
status: published
origin: pipeline
domain: mathematics
library: physics
dependency_level: 0
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
deps:
  - def-sr-total-four-momentum-and-invariant-mass
  - def-sr-observed-energy-momentum-and-kinetic-energy
  - def-inertial-frame-and-inertial-chart
  - lem-sr-future-causal-sums-and-inertial-coordinate-criterion
  - lem-sr-center-of-momentum-frame
  - lem-sr-energy-momentum-observer-identities
  - thm-cauchy-schwarz-finite
dependency_roles:
  def-sr-total-four-momentum-and-invariant-mass: mathematical-premise
  def-sr-observed-energy-momentum-and-kinetic-energy: mathematical-premise
  def-inertial-frame-and-inertial-chart: mathematical-premise
  lem-sr-future-causal-sums-and-inertial-coordinate-criterion: mathematical-premise
  lem-sr-center-of-momentum-frame: mathematical-premise
  lem-sr-energy-momentum-observer-identities: mathematical-premise
  thm-cauchy-schwarz-finite: mathematical-premise
sources:
  references:
    - title: "David Tong, Dynamics and Relativity, Chapter 7 Special Relativity lecture notes"
      url: "https://davidtong.org/pdfs/teaching/dynamics-and-relativity/dynrel7.pdf"
    - title: "Taylor and Wheeler, Spacetime Physics, 2nd ed., Chapter 7, Momenergy"
      url: "https://phys.libretexts.org/Bookshelves/Relativity/Spacetime_Physics_%28Taylor_and_Wheeler%29/07%3A_Momenergy/7.03%3A_Momenergy_Components_and_Magnitude"
verification:
  verified:
    model: "gpt-6-luna, gpt-6.1-sol, and delegated Codex review/repair agents; see completed run evidence"
    verdict: "Owner accepted completed review and adjudication evidence for publication"
    date: "2026-10-15"
    scope: "Owner accepted completed delegated review and resolved adjudication evidence from research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json for publication. No new mathematical audit or source retrieval performed for publication; outside-frontier supplier limitations remain as recorded in the final report."
    evidence: "research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json"
    publication: "research/physics-td-qft-rpm-62-2026-10-14-publication-2026-10-15.json"
    delegated_by: "owner; publication instruction 2026-10-15"
  precheck: pass
---

## Statement

Let $(A,V,\eta,C^+)$ be the oriented time-oriented affine Minkowski model with $c>0$, and fix an inertial frame. For a finite nonempty list $P_1,\ldots,P_N$ of nonzero future-causal vectors in $V$, let $Q:=\sum_{i=1}^N P_i$, let $m_i:=\sqrt{-\eta(P_i,P_i)}/c$ (so $m_i=0$ exactly for a null leg), and let $M(Q)$ be the invariant mass of the total when $Q$ is timelike, as defined in [[def-sr-total-four-momentum-and-invariant-mass]].

Then $Q$ is nonzero and future causal. If at least one $P_i$ is timelike, then $Q$ is future timelike. If all $P_i$ are null, then $Q$ is null exactly when all $P_i$ lie on the same future null ray; otherwise $Q$ is future timelike. Whenever $Q$ is timelike, the center-of-momentum frame exists, its time-axis observer $n_Q=Q/(M(Q)c)$ has zero total spatial momentum and total observer energy $M(Q)c^2$, and

$$M(Q)\ge\sum_{i=1}^N m_i.$$

Equality holds exactly when every $P_i$ is massive and there is one future unit timelike vector $n$ such that $P_i=m_i c\,n$ for every $i$. A nonzero future-null total has no center-of-momentum frame.

## Facts & Assumptions
**Given:** A positive scale $c$, an inertial frame, and a finite nonempty list of nonzero future-causal vectors $P_i$ in its Lorentz vector space.

[F1] [[def-sr-total-four-momentum-and-invariant-mass]] defines the finite total $Q=\sum_iP_i$, its invariant mass $M(Q)=\sqrt{-\eta(Q,Q)}/c$ when $Q$ is future timelike, and the meaning of a center-of-momentum frame.

[F2] [[def-sr-observed-energy-momentum-and-kinetic-energy]] defines $E_n(P)=-c\eta(P,n)$, $q_n(P)=P+\eta(P,n)n$, and the nonnegative invariant mass $m(P)=\sqrt{-\eta(P,P)}/c$ for a nonzero future-causal vector.

[F3] [[def-inertial-frame-and-inertial-chart]] supplies a future orthonormal basis; [[lem-sr-future-causal-sums-and-inertial-coordinate-criterion]] says the future closed cone has coordinate form $v^0\ge|v_s|$ and is closed under finite sums, with a strictly future-timelike sum when at least one summand is timelike.

[F4] [[lem-sr-center-of-momentum-frame]]: for future-timelike $Q$, $n_Q=Q/(M(Q)c)$ is a future unit observer, a frame with time vector $n_Q$ exists, and $q_{n_Q}(Q)=0$, $E_{n_Q}(Q)=M(Q)c^2$.

[F5] [[lem-sr-energy-momentum-observer-identities]]: for every nonzero future-causal $P$ and future unit observer $n$, $E_n(P)>0$ and $q_n(P)\in n^\perp$; the mass shell is $E_n(P)^2=m(P)^2c^4+c^2|q_n(P)|^2$ for a timelike $P$, while $E_n(P)=c|q_n(P)|$ for a null $P$.

[F6] [[thm-cauchy-schwarz-finite]]: for finite Euclidean vectors, $|\sum_i u_i\cdot v_i|\le(\sum_i|u_i|^2)^{1/2}(\sum_i|v_i|^2)^{1/2}$, with equality only for proportional coordinate lists.

## Proof

**Proof technique:** use the future-cone sum rule, then decompose in the total rest frame.

1.1 By [F3], applying the finite-sum cone rule to the nonzero future-causal $P_i$ shows that $Q$ is future causal. In the fixed inertial frame each nonzero future-causal summand has positive time component, so the time component of $Q$ is a finite sum of positive numbers and $Q\ne0$. If one summand is timelike, [F3] gives that $Q$ is future timelike. [F3, given]

1.2 Suppose every $P_i$ is null. Write its coordinates as $P_i=(a_i,u_i)$ in the fixed frame. By [F3], $a_i=|u_i|>0$. Then $Q$ is null exactly when $|\sum_i u_i|=\sum_i|u_i|$. Squaring both sides, this equality is equivalent to $\sum_{i<j}(|u_i||u_j|-u_i\cdot u_j)=0$. For each pair, apply [F6] to singleton coordinate lists to get $u_i\cdot u_j\le|u_i||u_j|$; therefore every summand is nonnegative. Equality of the sum forces equality for every pair, and equality with positive dot product forces each pair to be positively proportional. Thus all $P_i$ lie on one future null ray. Conversely, positive multiples of one future-null vector sum to a future-null vector. If the directions are not all the same, the inequality is strict, so the already future-causal $Q$ is timelike. [F3, F6, algebra]

1.3 Let $Q$ be future timelike and use the center-of-momentum frame of [F4]. The total spatial momentum is zero and $E_{n_Q}(Q)=M(Q)c^2$. By linearity of $E_{n_Q}$, $M(Q)c^2=\sum_i E_{n_Q}(P_i)$. Each term satisfies $E_{n_Q}(P_i)\ge m_i c^2$ by the mass-shell identities in [F5], proving $M(Q)\ge\sum_i m_i$. [F1, F4, F5, algebra]

2.1 Equality in step 1.3 requires equality in every nonnegative term $E_{n_Q}(P_i)-m_i c^2$. A nonzero null $P_i$ has $m_i=0$ but $E_{n_Q}(P_i)>0$ by [F5], so equality excludes null legs. For a timelike leg, [F5] gives $E_{n_Q}(P_i)=m_i c^2$ exactly when $q_{n_Q}(P_i)=0$; then its observer decomposition is $P_i=(E_{n_Q}(P_i)/c)n_Q=m_i c n_Q$. Conversely, if every leg has the form $P_i=m_i c n$ with one common future unit timelike $n$, then $Q=c(\sum_i m_i)n$, so $M(Q)=\sum_i m_i$ directly. [F2, F4, F5, step 1.3] ∎
