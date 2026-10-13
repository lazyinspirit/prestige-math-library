---
id: pthm-cm03-momentum-balance
kind: physics-theorem
title: "Total momentum balance and centre-of-mass equation for a model with antisymmetric pair forces"
status: draft
origin: session
domain: physics
dependency_level: 12
deps: [def-cm03-centre-of-mass-and-momenta, pthm-cm03-centre-of-mass-and-kinetic-splitting, post-cm02-force-superposition, post-cm02-interactions, def-cm02-newtonian-flow, thm-cm-momentum-and-angular-momentum-balance, cor-zero-derivative-implies-constant, def-vector-valued-derivative-and-integral, def-interval, lem-finite-sum-laws]
dependency_roles:
  def-cm03-centre-of-mass-and-momenta: formulation-prerequisite
  pthm-cm03-centre-of-mass-and-kinetic-splitting: physical-result
  post-cm02-force-superposition: physical-assumption
  post-cm02-interactions: physical-assumption
  def-cm02-newtonian-flow: formulation-prerequisite
  thm-cm-momentum-and-angular-momentum-balance: mathematical-premise
  cor-zero-derivative-implies-constant: mathematical-premise
  def-vector-valued-derivative-and-integral: mathematical-premise
  def-interval: mathematical-premise
  lem-finite-sum-laws: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "The momentum balance of a model that declares the external-plus-pair force presentation with antisymmetric pair forces: along every motion the total momentum changes at the rate of the total external force, it is constant on an interval exactly when the total external force vanishes there, and the centre of mass obeys the single-particle equation with the total mass and the total external force. The result is a conditional deduction from the adopted force and interaction posts; it asserts no conservation for models without the antisymmetry presentation and no measured value."
sources:
  references:
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, January 2015 printing), Section 1.3, Eqs. (1.12)-(1.16), printed pages 5-6 (PDF pages 11-12): F_i = sum_j F_ij + F_i^ext with F_ij = -F_ji, the cancellation of internal forces, Pdot = F^ext and M Rddot = F^ext"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
    - title: "K. K. Likharev, Essential Graduate Physics, Part CM: Classical Mechanics (title page last edited September 1, 2026), Section 1.3, Eqs. (1.29)-(1.30), chapter pages 8-9 (PDF pages 12-13): the decomposition F_k = sum F_kk' + F_k^(ext) and Pdot = F^(ext) after internal cancellation by the third law, valid in an inertial frame"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
    - title: "R. Fitzpatrick, Classical Mechanics (University of Texas at Austin), Non-Isolated Systems, Eqs. (38)-(44): the internal-plus-external force decomposition, the summed balance and the cancellation of internal forces in pairs"
      url: "https://farside.ph.utexas.edu/teaching/336k/Newtonhtml/node12.html"
verification:
  precheck: pass
---

## Statement

Adopt the force model and one inertial frame of
[[def-cm03-centre-of-mass-and-momenta]], and suppose in addition that the
model invokes the external-plus-pair presentation of clause (i) of
[[post-cm02-interactions]],
$$F_{i}(t,z)=F_{i}^{\mathrm{ext}}(t,x_{i},v_{i})+\sum_{j\ne i}F_{ij}(t,x_{i},x_{j},v_{i},v_{j}),$$
with the antisymmetry clause (ii)1 of that postulate,
$F_{ij}(t,x_{i},x_{j},v_{i},v_{j})=-F_{ji}(t,x_{j},x_{i},v_{j},v_{i})$ on the
common domain. Let $x:J\to Q$ be a motion of the model on an interval $J$ with
nonempty interior, with quantities $M$, $P$, $X$, $V$ as in the definition,
and write
$$\sigma(t):=\sum_{i}F_{i}^{\mathrm{ext}}\bigl(t,x_{i}(t),w_{i}(t)\bigr)\qquad(t\in J)$$
for the **total external force along the motion**. Then:

1. $P$ is of class $C^{1}$ on $J$ and
   $$\dot P(t)=\sigma(t)\qquad(t\in J):$$
   the total momentum changes at the rate of the total external force, the
   internal pair forces cancelling in the sum;
2. if $\sigma\equiv0$ on $J$, then $P$ is constant on $J$ and $V=M^{-1}P$ is
   constant on $J$;
3. $X$ is of class $C^{2}$ on $J$ and
   $$M\,X''(t)=\sigma(t)\qquad(t\in J):$$
   the centre of mass obeys the equation of a single particle of mass $M$
   under the total external force.

The statement assumes the pair presentation and its antisymmetry; for a model
whose force map is not presented through such pairs it asserts nothing, and
the pair forces of the presentation need not be central (centrality is used
only in the angular-momentum balance of this page). No empirical content is
claimed.

## Facts & Assumptions

**Given:** A force model of [[post-cm02-force-superposition]] that invokes the external-plus-pair presentation of [[post-cm02-interactions]] with the antisymmetry clause, one inertial frame, and a motion $x:J\to Q$.

[L1] Notions and notation ([[def-cm03-centre-of-mass-and-momenta]], [[def-cm02-newtonian-flow]]): $w_{i}=x_{i}'$, $p_{i}=m_{i}w_{i}$, $P=\sum_{i}p_{i}$, $M=\sum_{i}m_{i}$, $X=M^{-1}\sum_{i}m_{i}x_{i}$, $V=X'$; a motion satisfies $m_{i}\ddot x_{i}(t)=F_{i}(t,x(t),w(t))$ for all $i$ and $t\in J$; the external-plus-pair presentation is an identity for $F_{i}$ on its declared domain, and its pair maps satisfy the antisymmetry of clause (ii)1.

[L2] Mathematical supplier ([[thm-cm-momentum-and-angular-momentum-balance]] clause 1): if $x_{i}:I\to\mathbb R^{3}$ are twice differentiable, $p_{i}=m_{i}x_{i}'$ and there are maps $f_{i},f_{ij}:I\to\mathbb R^{3}$ with $f_{ij}=-f_{ji}$ and $p_{i}'=f_{i}+\sum_{j\ne i}f_{ij}$, then $P=\sum_{i}p_{i}$ is differentiable on $I$ with $P'=\sum_{i}f_{i}$.

[L3] A continuous real function on an interval whose derivative vanishes at every interior point is constant ([[cor-zero-derivative-implies-constant]]). Differentiability, sums and scalar multiples of curves behave as in [[def-vector-valued-derivative-and-integral]]; finite sums are linear ([[lem-finite-sum-laws]]).

## Proof

**Proof technique:** direct; evaluate the model's pair presentation along the motion and apply the mathematical balance identity.

1.1 Define, for $t\in J$, $$f_{i}(t):=F_{i}^{\mathrm{ext}}\bigl(t,x_{i}(t),w_{i}(t)\bigr),\qquad f_{ij}(t):=F_{ij}\bigl(t,x_{i}(t),x_{j}(t),w_{i}(t),w_{j}(t)\bigr)\quad(i\ne j).$$ These are well-defined functions $J\to\mathbb R^{3}$: the evaluated arguments lie in the stated domains of the pair presentation and of the model's state domain, and the presentation is an identity for $F_{i}$ there. By the antisymmetry clause, $f_{ij}(t)=-f_{ji}(t)$ for all $i\ne j$ and $t\in J$. [given, L1]

2.1 Each $p_{i}=m_{i}w_{i}$ is differentiable on $J$ with $p_{i}'=m_{i}\ddot x_{i}$; by the equation of motion and the presentation this equals $$F_{i}\bigl(t,x(t),w(t)\bigr)=f_{i}(t)+\sum_{j\ne i}f_{ij}(t)\qquad(t\in J).$$ Thus the data of [L2] are met on the interval $J$ with the maps $f_{i}$, $f_{ij}$ of step 1.1, and [L2] yields that $P$ is differentiable on $J$ with $$P'(t)=\sum_{i}f_{i}(t)=\sigma(t);$$ $P'$ is continuous because the $f_{i}$ are continuous, so $P$ is $C^{1}$ on $J$, and clause 1 is proved. [step 1.1, L1, L2, algebra]

3.1 Clause 2: if $\sigma\equiv0$ on $J$, then $P'=0$ at every interior point of $J$ by step 2.1, and $P$ is continuous on $J$; [L3] gives that $P$ is constant on $J$; then $V=M^{-1}P$ is constant on $J$ as a constant multiple. [step 2.1, L3, algebra]

4.1 Clause 3: by clause 1 of [[pthm-cm03-centre-of-mass-and-kinetic-splitting]] applied to the motion (which is a $C^{2}$ curve family), $X$ is differentiable on $J$ with $X'=M^{-1}P$; since $P$ is $C^{1}$ by step 2.1, $X'$ is $C^{1}$, so $X$ is $C^{2}$ with $$X''=M^{-1}P'=M^{-1}\sigma,$$ that is $MX''=\sigma$, which is clause 3. [step 2.1, L1, algebra] ∎

## Remarks

- **The hypothesis is the presentation, not the physics.** The cancellation $\sum_{i}\sum_{j\ne i}f_{ij}=0$ is a consequence of the declared antisymmetry of the model's pair maps; a force map for which no such presentation is declared has no momentum balance of this form. In particular, the framework does not claim that every interaction admits an antisymmetric pair presentation ([[post-cm02-interactions]] clause (i)).

- **Open systems.** For a proper subsystem, forces to labels outside the declared set appear among the $F_{i}^{\mathrm{ext}}$ and need satisfy no antisymmetry; the subsystem's momentum may be exchanged with the environment. Clause 1 is a balance, and clause 2 gives conservation when the evaluated total external force vanishes. This is the open-system boundary recorded in [[rem-cm02-open-system-warning]].

- **No centrality is used.** The balance of this item holds for velocity- and position-dependent antisymmetric pair forces alike; centrality is required only for the internal-torque statement of [[pthm-cm03-angular-momentum-balance]], and is sufficient but not necessary there.
