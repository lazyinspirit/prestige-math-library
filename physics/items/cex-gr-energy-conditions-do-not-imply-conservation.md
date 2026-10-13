---
id: cex-gr-energy-conditions-do-not-imply-conservation
kind: counterexample
title: "The weak energy condition does not imply conservation of a prescribed stress-energy tensor"
status: draft
origin: session
domain: physics
dependency_level: 8
physical_scope: "Pointwise algebraic statement about a prescribed smooth symmetric stress-energy tensor field on an open region of the flat classical spacetime model: the weak energy condition is a pointwise positivity condition on the tensor and carries no conservation content. No dynamical model, no solution of the field equation, no measurement and no claim about nature is asserted; the example shows only that the named condition is not by itself the conservation identity."
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-gr-energy-conditions, def-gr-stress-energy-tensor-field, def-gr-smooth-lorentzian-objects, def-gr-smooth-covariant-two-tensor-field, def-gr-metric-selected-connection, thm-gr-nondegenerate-levi-civita-and-tensor-derivative, def-gr-inverse-metric-and-musical-isomorphisms, def-gr-si-unit-and-coordinate-conventions, def-causal-classification-of-lorentz-vectors, prop-an-open-subset-of-a-smooth-manifold-has-a-canonical-restricted-smooth-structure, def-c-r-and-smooth-maps-between-smooth-manifolds]
dependency_roles:
  def-gr-energy-conditions: formulation-prerequisite
  def-gr-stress-energy-tensor-field: formulation-prerequisite
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-gr-smooth-covariant-two-tensor-field: mathematical-premise
  def-gr-metric-selected-connection: mathematical-premise
  thm-gr-nondegenerate-levi-civita-and-tensor-derivative: mathematical-premise
  def-gr-inverse-metric-and-musical-isomorphisms: mathematical-premise
  def-gr-si-unit-and-coordinate-conventions: formulation-prerequisite
  def-causal-classification-of-lorentz-vectors: mathematical-premise
  prop-an-open-subset-of-a-smooth-manifold-has-a-canonical-restricted-smooth-structure: mathematical-premise
  def-c-r-and-smooth-maps-between-smooth-manifolds: mathematical-premise
sources:
  references:
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 4: the definition of the Weak Energy Condition (4.72), printed p. 117 (PDF p. 124); the nonimplication is proved locally in this item"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "D. Tong, General Relativity (Cambridge Part III Mathematical Tripos, Michaelmas 2019), section 4.5.7: the Weak Energy Condition and its pointwise timelike-vector inequality, (4.60), printed p. 195 (PDF p. 202)"
      url: "https://www.damtp.cam.ac.uk/user/tong/gr/gr.pdf"
verification:
  precheck: pass
---

## Statement refuted

Statement refuted: "Let $M=\mathbb R^4$ carry the flat metric
$g=\operatorname{diag}(-1,1,1,1)$ and the identity chart, and let $U$ be an
open subset. Let $T$ be a smooth symmetric covariant $2$-tensor field on $U$
which satisfies the weak energy condition of [[def-gr-energy-conditions]]:
$T_p(v,v)\ge0$ for every timelike $v\in T_pM$ and every $p\in U$
([[def-causal-classification-of-lorentz-vectors]]). Then $T$ is conserved,
$\nabla^aT_{ab}=0$ on $U$."

## Facts & Assumptions

**Given:** The flat Lorentzian four-manifold $(\mathbb R^4,g)$ with identity chart, $g=\operatorname{diag}(-1,1,1,1)$, time orientation $N=\partial_0$, metric-selected connection $\nabla$; length coordinates $x^a$ in metres ($x^0=ct$), fixed constants $L>0$ in $\mathrm m$ and $E_*>0$ in $\mathrm J\,\mathrm m^{-3}$, the open set $U:=\{x\in\mathbb R^4:|x^1|<L\}$; and the smooth symmetric covariant $2$-tensor field $T$ on $U$ with components $$T_{00}=3E_*,\qquad T_{01}=T_{10}=E_*x^1/L,\qquad T_{ij}=0\ \text{otherwise}.$$

[L1] On the identity chart $\Gamma\equiv0$, so $\nabla$ is the coordinate connection and $\nabla^aT_{ab}=g^{ac}\partial_cT_{ab}=\eta^{ac}\partial_cT_{ab}$ with $\eta=\operatorname{diag}(-1,1,1,1)$ ([[def-gr-metric-selected-connection]], [[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]], [[def-gr-inverse-metric-and-musical-isomorphisms]]).

[L2] The weak energy condition at $p$ is $T_p(v,v)\ge0$ for every timelike $v\in T_pM$; a vector $v=(v^0,v^1,v^2,v^3)$ is timelike exactly when $-(v^0)^2+(v^1)^2+(v^2)^2+(v^3)^2<0$, which implies $|v^1|<|v^0|$ ([[def-gr-energy-conditions]], [[def-causal-classification-of-lorentz-vectors]]).

[L3] $U$ is an open subset of the smooth manifold $\mathbb R^4$, hence carries a restricted smooth structure and the field with the displayed components is a smooth symmetric covariant $2$-tensor field on $U$ ([[prop-an-open-subset-of-a-smooth-manifold-has-a-canonical-restricted-smooth-structure]], [[def-gr-smooth-covariant-two-tensor-field]], [[def-c-r-and-smooth-maps-between-smooth-manifolds]]).

## Counterexample

1.1 (Weak energy condition.) Let $p\in U$ and let $v=(v^0,v^1,v^2,v^3)$ be timelike. By [L2], $|v^1|<|v^0|$, so in particular $v\neq0$ and $v^0\neq0$. By the components of $T$, $$T_p(v,v)=E_*[3(v^0)^2+2(x^1/L)v^0v^1]\ge E_*[3(v^0)^2-2(|x^1|/L)|v^0||v^1|]\ge E_*(3-2|x^1|/L)(v^0)^2>E_*(v^0)^2>0,$$ using $|v^1|<|v^0|$ and $|x^1|/L<1$ on $U$, with $E_*>0$. Thus the weak energy condition of [L2] holds at every point of $U$. [L2, L3, algebra]

1.2 (Nonconservation.) By [L1] and the components of $T$ (which are independent of $x^0$), $$\nabla^aT_{a0}=\eta^{00}\partial_0T_{00}+\eta^{11}\partial_1T_{10}=(-1)\cdot0+1\cdot(E_*/L)=E_*/L\neq0 .$$ Hence $T$ is not conserved on $U$. [L1, algebra]

2.1 (Conclusion.) The tensor field $T$ of the Facts satisfies the weak energy condition on $U$ by step 1.1 and is not conserved by step 1.2, so the displayed statement is refuted: the weak energy condition is a pointwise positivity condition and does not imply the conservation identity. [step 1.1, step 1.2, algebra] ∎

## Remarks

- **Source scope.** Carroll (4.72) and Tong section 4.5.7 supply the weak-energy-condition definition. The prescribed tensor and its nonconservation are established by the local calculation above; no source passage is cited as asserting this counterexample or the nonimplication.

- **No field-equation claim.** The counterexample does not assert that $T$ solves the Einstein equation with the flat metric; a model whose field law holds must additionally satisfy the conservation derived in [[pthm-gr-einstein-consistency-and-energy-conditions]], which this $T$ fails. The point is exactly that the energy condition alone does not supply that consistency.

- **Sign conventions.** The condition $T(v,v)\ge0$ is evaluated with the metric convention $g=\operatorname{diag}(-1,1,1,1)$; the inequality $|v^1|<|v^0|$ used in the proof is the timelike condition of [[def-causal-classification-of-lorentz-vectors]] for this convention.

- **No empirical content.** No measurement or material realization is asserted. The constants $E_*$ and $L$ set the units of the prescribed test field: every displayed tensor entry has energy-density units, and its nonzero divergence has units $\mathrm J\,\mathrm m^{-4}$. No numerical measured values are assigned ([[def-gr-si-unit-and-coordinate-conventions]]).
