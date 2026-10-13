---
id: pthm-cm03-angular-momentum-balance
kind: physics-theorem
title: "Angular momentum balance about a fixed or moving reference point, the internal torque sum, and the centrality case"
status: draft
origin: session
domain: physics
dependency_level: 11
deps: [def-cm03-centre-of-mass-and-momenta, post-cm02-force-superposition, post-cm02-interactions, def-cm02-newtonian-flow, lem-cm-derivative-of-pairings-of-curves, def-cross-product-in-r3, lem-cross-product-is-bilinear-alternating-and-orthogonal, lem-finite-sum-reindexing-and-fubini, lem-finite-sum-laws, cor-zero-derivative-implies-constant, def-vector-valued-derivative-and-integral, def-interval]
dependency_roles:
  def-cm03-centre-of-mass-and-momenta: formulation-prerequisite
  post-cm02-force-superposition: physical-assumption
  post-cm02-interactions: physical-assumption
  def-cm02-newtonian-flow: formulation-prerequisite
  lem-cm-derivative-of-pairings-of-curves: mathematical-premise
  def-cross-product-in-r3: mathematical-premise
  lem-cross-product-is-bilinear-alternating-and-orthogonal: mathematical-premise
  lem-finite-sum-reindexing-and-fubini: mathematical-premise
  lem-finite-sum-laws: mathematical-premise
  cor-zero-derivative-implies-constant: mathematical-premise
  def-vector-valued-derivative-and-integral: mathematical-premise
  def-interval: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "The angular momentum balance of a model that declares the external-plus-pair presentation with antisymmetric pair forces: the internal torque sum is independent of the reference point and the balance about a possibly moving reference point carries the correction minus odot cross P; when the evaluated pair forces are central the internal torque sum vanishes; about a fixed point with central evaluated pair forces and vanishing external torque the angular momentum is constant. The result is conditional on the declared pair structure and centrality where invoked; it asserts no necessity of centrality and no measured value."
sources:
  references:
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, January 2015 printing), Section 1.3, Eqs. (1.17)-(1.19), printed pages 6-7 (PDF pages 12-13): Ldot = sum_i r_i x F_i^ext + sum_{i<j}(r_i - r_j) x F_ij, with the internal term vanishing when F_ij is parallel to r_i - r_j"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
    - title: "K. K. Likharev, Essential Graduate Physics, Part CM: Classical Mechanics (title page last edited September 1, 2026), Section 1.3, Eqs. (1.31)-(1.38), chapter pages 8-10 (PDF pages 12-14): L = r x p, Ldot = tau, the total angular momentum, and the cancellation of the internal torque pairs when the mutual forces are central, with the external-torque balance"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
    - title: "R. Fitzpatrick, Classical Mechanics (University of Texas at Austin), Non-Isolated Systems, Eqs. (42)-(44): the total angular momentum equation with the net external torque and the internal-torque cancellation"
      url: "https://farside.ph.utexas.edu/teaching/336k/Newtonhtml/node12.html"
verification:
  precheck: pass
---

## Statement

Adopt the force model and one inertial frame of
[[def-cm03-centre-of-mass-and-momenta]], and suppose that the model invokes
the external-plus-pair presentation of clause (i) of [[post-cm02-interactions]]
with the antisymmetry clause (ii)1 (as in the momentum balance of this page).
Let $x:J\to Q$ be a motion on an interval $J$ with nonempty interior and let
$o:J\to\mathbb R^{3}$ be a $C^{1}$ reference curve, with $J_{o}$,
$T_{o}$, $T_{o}^{\mathrm{ext}}$, $I$ and $P$ as in the definition. Then:

1. **Internal torque identity.** For every $t\in J$,
   $$\sum_{i}\bigl(x_{i}(t)-o(t)\bigr)\times\sum_{j\ne i}F_{ij}\bigl(t,x_{i}(t),x_{j}(t),w_{i}(t),w_{j}(t)\bigr)=I(t),\qquad\text{so}\qquad T_{o}(t)=T_{o}^{\mathrm{ext}}(t)+I(t);$$
2. **Balance.** $J_{o}$ is differentiable on $J$ and
   $$J_{o}'(t)=T_{o}^{\mathrm{ext}}(t)+I(t)-o'(t)\times P(t)=T_{o}(t)-o'(t)\times P(t)\qquad(t\in J);$$
3. **Centrality.** Suppose that for every $i<j$ and every $t\in J$ the
   evaluated pair force is parallel to $x_{i}(t)-x_{j}(t)$, that is, there is
   a real $\lambda_{ij}(t)$ with
   $$F_{ij}\bigl(t,x_{i}(t),x_{j}(t),w_{i}(t),w_{j}(t)\bigr)=\lambda_{ij}(t)\,\bigl(x_{i}(t)-x_{j}(t)\bigr).$$
   Then $I\equiv0$ on $J$, so
   $$J_{o}'(t)=T_{o}^{\mathrm{ext}}(t)-o'(t)\times P(t)\qquad(t\in J);$$
   if moreover $o$ is constant, then $J_{o}'=T_{o}^{\mathrm{ext}}$;
4. **Conservation.** If $o$ is constant and $T_{o}\equiv0$ on $J$ —
   equivalently $T_{o}^{\mathrm{ext}}\equiv-I$ there, by clause 1 — then
   $J_{o}$ is constant on $J$. In particular, if the evaluated pair forces
   are central (clause 3) and $T_{o}^{\mathrm{ext}}\equiv0$ on $J$ — the case
   of a model with no external forces — then $T_{o}\equiv0$ and $J_{o}$ is
   constant on $J$.

Clause 3 allows cancellation: the vanishing of $I$ is a hypothesis on the
evaluated pair forces and does not require centrality in general; the
companion page exhibits antisymmetric non-central pair forces whose internal
torque sum vanishes identically. No empirical content is claimed.

## Facts & Assumptions

**Given:** A force model of [[post-cm02-force-superposition]] that invokes the external-plus-pair presentation of [[post-cm02-interactions]] with the antisymmetry clause, one inertial frame, a motion $x:J\to Q$ and a $C^{1}$ reference curve $o:J\to\mathbb R^{3}$.

[L1] Notation and notions ([[def-cm03-centre-of-mass-and-momenta]], [[def-cm02-newtonian-flow]]): $p_{i}=m_{i}w_{i}$, $P=\sum_{i}p_{i}$, $J_{o}=\sum_{i}(x_{i}-o)\times p_{i}$, $T_{o}^{\mathrm{ext}}=\sum_{i}(x_{i}-o)\times F_{i}^{\mathrm{ext}}$, $I=\sum_{i<j}(x_{i}-x_{j})\times F_{ij}$ (all evaluated along the motion), $T_{o}=\sum_{i}(x_{i}-o)\times F_{i}$; the equation of motion is $m_{i}\ddot x_{i}=F_{i}(t,x,w)$; the presentation writes $F_{i}=F_{i}^{\mathrm{ext}}+\sum_{j\ne i}F_{ij}$ and its pair maps satisfy $F_{ji}=-F_{ij}$.

[L2] Product rule ([[lem-cm-derivative-of-pairings-of-curves]] clause 3): if $u,v:I\to\mathbb R^{3}$ are differentiable at $t_{0}$, then $u\times v$ is differentiable at $t_{0}$ with derivative $u'(t_{0})\times v(t_{0})+u(t_{0})\times v'(t_{0})$; sums and scalar multiples of differentiable curves are differentiable with the expected derivatives (clause 1 of the same lemma, [[def-vector-valued-derivative-and-integral]]).

[L3] Cross-product algebra ([[def-cross-product-in-r3]], [[lem-cross-product-is-bilinear-alternating-and-orthogonal]]): the cross product is bilinear, so $a\times(u+v)=a\times u+a\times v$ and $a\times(\lambda u)=\lambda(a\times u)$; it is alternating, so $u\times u=0$ and $u\times v=-(v\times u)$. These identities distribute the force sums in step 1.1 and cancel each term in step 3.1.

[L4] Reindexing ([[lem-finite-sum-reindexing-and-fubini]] clause 2): the ordered pairs $(i,j)$ with $i\ne j$ are the disjoint union of the pairs $\{(i,j),(j,i)\}$ over $i<j$, so $\sum_{i}\sum_{j\ne i}a_{ij}=\sum_{i<j}(a_{ij}+a_{ji})$ for vectors $a_{ij}$; finite sums are linear ([[lem-finite-sum-laws]], [L3]).

[L5] A continuous real-valued function on an interval with zero derivative at every interior point is constant ([[cor-zero-derivative-implies-constant]]); the interval $J$ has nonempty interior ([[def-interval]]).

## Proof

**Proof technique:** direct; reindex the internal pair sums using antisymmetry, differentiate the angular momentum by the product rule, and apply the centrality and vanishing-torque hypotheses.

1.1 Internal torque identity. Using [L4] and the antisymmetry of the pair maps, $$\sum_{i}\bigl(x_{i}-o\bigr)\times\sum_{j\ne i}F_{ij}=\sum_{i<j}\Bigl[\bigl(x_{i}-o\bigr)\times F_{ij}+\bigl(x_{j}-o\bigr)\times F_{ji}\Bigr]=\sum_{i<j}\bigl(x_{i}-x_{j}\bigr)\times F_{ij}=I,$$ because $F_{ji}=-F_{ij}$ and the cross product is bilinear by [L3]; the first equality also shows $I$ does not depend on $o$. Adding $T_{o}^{\mathrm{ext}}=\sum_{i}(x_{i}-o)\times F_{i}^{\mathrm{ext}}$ and substituting the presentation $F_{i}=F_{i}^{\mathrm{ext}}+\sum_{j\ne i}F_{ij}$ gives $T_{o}=T_{o}^{\mathrm{ext}}+I$, completing clause 1. [given, L1, L3, L4]

2.1 Balance. Each summand $(x_{i}-o)\times p_{i}$ of $J_{o}$ is a cross product of curves differentiable on $J$ (since $x_{i}$ is $C^{2}$ and $o$ is $C^{1}$), so by [L2] $J_{o}$ is differentiable on $J$ with $$J_{o}'=\sum_{i}\bigl(w_{i}-o'\bigr)\times p_{i}+\sum_{i}\bigl(x_{i}-o\bigr)\times p_{i}'.$$ In the first sum, $\sum_{i}w_{i}\times p_{i}=\sum_{i}m_{i}\,w_{i}\times w_{i}=0$ by alternation [L3], so it equals $-o'\times P$; in the second sum, substitute $p_{i}'=m_{i}\ddot x_{i}=F_{i}(t,x,w)$ from the equation of motion, which gives $\sum_{i}(x_{i}-o)\times F_{i}=T_{o}=T_{o}^{\mathrm{ext}}+I$ by clause 1. Therefore $J_{o}'=T_{o}^{\mathrm{ext}}+I-o'\times P$, which is clause 2. [step 1.1, given, L1, L2, L3, algebra]

3.1 Centrality. Under the hypothesis of clause 3, for each $i<j$ $$\bigl(x_{i}-x_{j}\bigr)\times F_{ij}=\lambda_{ij}\,\bigl(x_{i}-x_{j}\bigr)\times\bigl(x_{i}-x_{j}\bigr)=0$$ by alternation and bilinearity [L3]; hence $I=0$ and step 2.1 gives $J_{o}'=T_{o}^{\mathrm{ext}}-o'\times P$. If $o$ is constant then $o'=0$ and $J_{o}'=T_{o}^{\mathrm{ext}}$. [step 2.1, given, L3, algebra]

4.1 Conservation. Let $o$ be constant and $T_{o}\equiv0$ on $J$. Then $o'=0$ and step 2.1 gives $J_{o}'=T_{o}^{\mathrm{ext}}+I=T_{o}=0$ at every interior point of $J$. $J_{o}$ is continuous on $J$, being a finite sum of products of continuous curves; [L5] gives that $J_{o}$ is constant on $J$. In the particular case, step 3.1 gives $T_{o}=T_{o}^{\mathrm{ext}}+I=T_{o}^{\mathrm{ext}}\equiv0$ when the evaluated pair forces are central and the external torque vanishes; this includes a model with no external forces. [step 2.1, step 3.1, L1, L5] ∎

## Remarks

- **The moving-origin correction.** For a fixed origin the balance reads $J_{o}'=T_{o}$; for a moving reference curve the extra term $-o'\times P$ appears. The exact conservation condition is $T_{o}^{\mathrm{ext}}+I=o'\times P$ along the motion. When the pair torque vanishes and the external torque is also zero, this reduces to $o'\times P=0$; the companion page checks the correction on explicit data.

- **Centrality is sufficient, not necessary.** Clause 3 is one sufficient condition for $I\equiv0$; clause 4 records that the conservation conclusion holds whenever the total torque about the fixed reference point vanishes, which can happen without centrality by cancellation among the pair torques. The companion counterexample makes this explicit.

- **No claim about nature.** The pair structure, antisymmetry and centrality are properties a model may or may not declare; this item is a conditional deduction from them, and the framework's [[post-cm02-interactions]] clause (i) records that an arbitrary force map need not admit such a presentation.
