---
id: pthm-rpm-two-body-com-kinematics
kind: physics-theorem
title: "Complete two-body rest-frame kinematics"
status: published
origin: pipeline
domain: physics
library: physics
dependency_level: 9
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
deps:
  - def-rpm-collision-objects
  - post-rpm-isolated-collision-balance
  - pthm-rpm-system-mass-threshold
  - lem-sr-center-of-momentum-frame
  - lem-sr-future-causal-sums-and-inertial-coordinate-criterion
  - def-rpm-mechanical-momentum-and-observer-energy
dependency_roles:
  def-rpm-collision-objects: formulation-prerequisite
  post-rpm-isolated-collision-balance: physical-assumption
  pthm-rpm-system-mass-threshold: physical-result
  lem-sr-center-of-momentum-frame: mathematical-premise
  lem-sr-future-causal-sums-and-inertial-coordinate-criterion: mathematical-premise
  def-rpm-mechanical-momentum-and-observer-energy: formulation-prerequisite
physical_scope: "Exact two-product momentum-balance kinematics in the center-of-momentum frame of a timelike total in flat relativistic-particle mechanics; no interaction probability, cross section, or claim that a channel occurs."
empirical_premises: []
sources:
  references:
    - title: "David Tong, Dynamics and Relativity, Chapter 7 Special Relativity lecture notes"
      url: "https://davidtong.org/pdfs/teaching/dynamics-and-relativity/dynrel7.pdf"
    - title: "Taylor and Wheeler, Spacetime Physics, 2nd ed., Chapter 7, Momenergy"
      url: "https://phys.libretexts.org/Bookshelves/Relativity/Spacetime_Physics_%28Taylor_and_Wheeler%29/07%3A_Momenergy/7.06%3A_Conservation_of_Momenergy_and_Its_Consequences"
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

Let a finite isolated collision have future-timelike total $Q$ of invariant mass $M>0$, and set $W:=Mc^2$. Suppose the complete outgoing list consists of exactly two legs, with recorded rest masses $a,b\ge0$; by the adopted balance postulate, their four-momenta must sum to $Q$. In a center-of-momentum frame with time-axis observer $n_Q$, a nonzero two-product state with $\mathbf p_a+\mathbf p_b=0$ exists exactly when

$$W\ge(a+b)c^2\quad\hbox{if }a,b>0,\qquad W>(a+b)c^2\quad\hbox{if }a=0\hbox{ or }b=0.$$

When it exists, there are $k\ge0$ and a unit vector $\mathbf e\in n_Q^\perp$ such that $\mathbf p_a=k\mathbf e$ and $\mathbf p_b=-k\mathbf e$. The energies and momentum magnitude are

$$E_a=\frac{W^2+(a^2-b^2)c^4}{2W},\qquad E_b=\frac{W^2+(b^2-a^2)c^4}{2W},\qquad k^2=\frac{[W^2-(a+b)^2c^4][W^2-(a-b)^2c^4]}{4W^2c^2}.$$

For $a,b>0$ at threshold, $k=0$ and the direction is immaterial. If a massless product is present, the strict threshold is required because a zero momentum would be the forbidden zero four-vector. These equations describe kinematic balance only. In SI units $a,b,M$ are kilograms, $W,E_a,E_b$ are joules, and $k$ is kilogram metres per second; the norm and dot product on $n_Q^\perp$ are induced by $\eta$.

## Facts & Assumptions
**Given:** A timelike total $Q$, a center-of-momentum observer $n_Q$, two specified nonnegative rest masses $a,b$, and the adopted finite collision-balance model.

[A1] [[post-rpm-isolated-collision-balance]]: a complete isolated event balances the finite incoming and outgoing four-momentum sums.

[F1] [[def-rpm-collision-objects]]: a massive final leg is future timelike with its recorded positive mass; a massless leg is a nonzero future-null vector with recorded mass zero.

[F2] [[pthm-rpm-system-mass-threshold]]: the total mass is $M>0$, the center-of-momentum energy is $W=Mc^2$, and any final list obeys the rest-mass threshold.

[F3] [[lem-sr-center-of-momentum-frame]]: for future-timelike $Q$, a center-of-momentum frame exists with $Q=(Mc,\mathbf0)$ and its time-axis observer is $n_Q=Q/(Mc)$.

[F4] [[def-rpm-mechanical-momentum-and-observer-energy]]: relative to a future unit observer, the energy and spatial momentum are the observer decomposition of the same four-vector.

[F5] For a massive leg of recorded mass $a>0$, [[def-rpm-collision-objects]] and [[def-rpm-mechanical-momentum-and-observer-energy]] give $P=aU$ with $\eta(U,U)=-c^2$, hence $\eta(P,P)=-a^2c^2$ by bilinearity; [[lem-sr-future-causal-sums-and-inertial-coordinate-criterion]] gives the future-cone coordinate criterion in the center-of-momentum frame.

## Proof

**Proof technique:** solve the two on-shell equations in the total rest frame and verify the converse construction.

1.1 In the center-of-momentum frame from [F3], $Q=(W/c)n_Q$ has zero total spatial momentum, so balance [A1] forces $\mathbf p_b=-\mathbf p_a$. Put $k:=|\mathbf p_a|\ge0$; if $k>0$, write $\mathbf p_a=k\mathbf e$ with $|\mathbf e|=1$ in the Euclidean rest space $n_Q^\perp$. The massive and null mass shells from [F1] and [F5] give $E_a^2=a^2c^4+c^2k^2$ and $E_b^2=b^2c^4+c^2k^2$, while the time component of balance is $E_a+E_b=W$ by [F2] and [F4]. [A1, F1, F2, F3, F4, F5]

2.1 Subtracting the shell equations and using $E_a+E_b=W>0$ gives $(E_a-E_b)W=(a^2-b^2)c^4$. Solving this and $E_a+E_b=W$ yields the stated $E_a,E_b$ formulas. Substituting the formula for $E_a$ into $c^2k^2=E_a^2-a^2c^4$ and factoring gives the stated expression for $k^2$. [step 1.1, algebra]

3.1 Necessity of $W\ge(a+b)c^2$ follows from [F2]. Conversely, under this bound the second factor in $k^2$ is nonnegative because $W\ge(a+b)c^2\ge|a-b|c^2$. Also $E_a-ac^2=((W-ac^2)^2-b^2c^4)/(2W)\ge0$ and symmetrically $E_b-bc^2\ge0$, so both energies are future-directed. If $a,b>0$, equality at $W=(a+b)c^2$ gives $k=0$ and two valid massive legs. If either mass is zero, that equality gives zero momentum and zero energy for that leg, which is not an admissible nonzero null vector; hence the strict bound is necessary and sufficient in that case. [F1, F2, step 2.1, algebra]

4.1 Under the stated admissible bound, choose any unit vector $\mathbf e\in n_Q^\perp$ (this rest space is three-dimensional by [F3]) and define $P_a=(E_a/c)n_Q+k\mathbf e$, $P_b=(E_b/c)n_Q-k\mathbf e$. Their spatial sum is zero and their energies sum to $W$, so $P_a+P_b=(W/c)n_Q=Q$. Their orthogonal decompositions and the formulas for $E_a,E_b,k$ give $\eta(P_a,P_a)=-a^2c^2$ and $\eta(P_b,P_b)=-b^2c^2$; the energies are positive, and any zero-mass leg has $k>0$, so both vectors are nonzero future causal by the cone criterion in [F5]. Thus the constructed pair satisfies the balance and both mass shells. [F1, F2, F3, F4, F5, step 2.1, step 3.1, algebra] ∎
