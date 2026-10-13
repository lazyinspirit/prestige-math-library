---
id: lem-gr-flat-time-monotonicity-and-lipschitz-graphs
kind: lemma
title: "Monotonicity of inertial time and the Lipschitz graph property for causal curves in the flat model"
status: draft
origin: session
domain: mathematics
dependency_level: 10
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
deps: [def-gr-causal-curves-and-reachability, lem-gr-causal-curve-calculus, lem-gr-maximal-geodesics-and-extension, def-gr-flat-minkowski-model-and-inertial-charts, lem-gr-flat-inertial-cone-criterion-and-sums, def-time-orientation-and-future-causal-sets, def-causal-classification-of-lorentz-vectors, thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions, thm-nonnegative-integral-zero-iff-zero-almost-everywhere, thm-linearity-of-the-lebesgue-integral-on-l-one, def-integrable-real-and-complex-functions-and-their-integrals, prop-order-and-scalar-rules-for-the-nonnegative-integral, thm-the-lebesgue-integral-respects-almost-everywhere-equality, def-countable-choice, def-dependent-choice, def-interval, def-absolutely-continuous-function, def-gr-causal-conditions-and-global-hyperbolicity]
dependency_roles:
  def-gr-causal-curves-and-reachability: mathematical-premise
  lem-gr-causal-curve-calculus: mathematical-premise
  lem-gr-maximal-geodesics-and-extension: mathematical-premise
  def-gr-flat-minkowski-model-and-inertial-charts: mathematical-premise
  lem-gr-flat-inertial-cone-criterion-and-sums: mathematical-premise
  def-time-orientation-and-future-causal-sets: mathematical-premise
  def-causal-classification-of-lorentz-vectors: mathematical-premise
  thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions: mathematical-premise
  thm-nonnegative-integral-zero-iff-zero-almost-everywhere: mathematical-premise
  thm-linearity-of-the-lebesgue-integral-on-l-one: mathematical-premise
  def-integrable-real-and-complex-functions-and-their-integrals: mathematical-premise
  prop-order-and-scalar-rules-for-the-nonnegative-integral: mathematical-premise
  thm-the-lebesgue-integral-respects-almost-everywhere-equality: mathematical-premise
  def-countable-choice: mathematical-premise
  def-dependent-choice: mathematical-premise
  def-interval: mathematical-premise
  def-absolutely-continuous-function: mathematical-premise
  def-gr-causal-conditions-and-global-hyperbolicity: mathematical-premise
sources:
  references:
    - title: "E. Minguzzi, Lorentzian causality theory, Living Reviews in Relativity 22 (2019), article 3: Minkowski spacetime as the basic model (section 1.1 printed pp. 3-6); non-decreasing functions along the causal relation (section 1.12 printed pp. 17-18) and the locally Lipschitz parametrization of continuous causal curves (section 2.5 printed pp. 32-33)"
      url: "https://inspirehep.net/files/7a575d682fd15aaad8463a778fac1609"
    - title: "E. Gourgoulhon, 3+1 Formalism and Bases of Numerical Relativity, arXiv:gr-qc/0703035 (2007): the Lorentzian metric framework and time orientation, section 2.2 printed pp. 15-19"
      url: "https://arxiv.org/pdf/gr-qc/0703035"
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997): light cones and the timelike/null/spacelike classification, printed p. 7 (PDF p. 14)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
verification:
  precheck: pass
---

## Statement

Assume the Axioms of Countable Choice and Dependent Choice
([[def-countable-choice]], [[def-dependent-choice]]). Let $(M,\eta,N)$ be the
flat model of [[def-gr-flat-minkowski-model-and-inertial-charts]], with its
global inertial chart $x=(x^0,x^1,x^2,x^3)$, written $x=(x^0,z)$ with
$z\in\mathbb R^3$ (clauses (a), (b) and (e) of that definition), and let
$\gamma:I\to M$ be a future causal curve in the class of
[[def-gr-causal-curves-and-reachability]]. Then:

**(a)** $x^0\circ\gamma:I\to\mathbb R$ is strictly increasing.

**(b)** For all $a<b$ in $I$,
$$\bigl|z(\gamma(b))-z(\gamma(a))\bigr|\le x^0(\gamma(b))-x^0(\gamma(a)),$$
and consequently $\gamma$ is injective and its image is a $1$-Lipschitz graph
over the interval $(x^0\circ\gamma)(I)$.

**(c)** If $\gamma$ is future-inextendible then
$\sup\,(x^0\circ\gamma)(I)=+\infty$; if $\gamma$ is past-inextendible then
$\inf\,(x^0\circ\gamma)(I)=-\infty$. Hence if $\gamma$ is inextendible then
$x^0\circ\gamma$ is a strictly increasing surjection onto $\mathbb R$, and
for every $c\in\mathbb R$ the parameter set
$\{t\in I:x^0(\gamma(t))=c\}$ is a singleton.

**(d)** The coordinate function $u:=x^0$ is a temporal function of the flat
model in the sense of [[def-gr-causal-conditions-and-global-hyperbolicity]]
clause (e): its gradient is the vector field $\nabla u=-\partial_0$ on all of
$M$, with $\eta(\nabla u,\nabla u)=-1<0$ and $du(\partial_0)=1>0$
everywhere.

## Facts & Assumptions

**Given:** Countable Choice, Dependent Choice, the flat model of [[def-gr-flat-minkowski-model-and-inertial-charts]], its global inertial chart $x=(x^0,z)$, a future causal curve $\gamma:I\to M$ and real numbers $a<b$ in $I$.

[L1] At almost every $t\in I$ the velocity $\gamma'(t)$ exists and is nonzero future causal; the coordinate path $t\mapsto x(\gamma(t))$ of the global inertial chart $x$ is locally absolutely continuous, with coordinate derivative equal to the coordinates of $\gamma'(t)$ at almost every $t$ ([[def-gr-causal-curves-and-reachability]] clause (b), [[lem-gr-causal-curve-calculus]] clauses (b) and (c)).

[L2] Cone criterion for the flat model in the coordinates of the inertial chart $x$: a nonzero vector $v\in T_pM$ is future causal exactly when $v^0\ge|v_s|$, future timelike exactly when $v^0>|v_s|$, and every nonzero future causal $v$ has $v^0>0$ ([[lem-gr-flat-inertial-cone-criterion-and-sums]] clauses (a) and (b), [[def-gr-flat-minkowski-model-and-inertial-charts]] clause (f), [[def-time-orientation-and-future-causal-sets]], [[def-causal-classification-of-lorentz-vectors]]).

[L3] Fundamental theorem of calculus for absolutely continuous functions, with its countable and dependent choice assumptions: for an absolutely continuous $F$ on $[a,b]$, $F'$ exists almost everywhere, $F'\in L^1$, and $F(b)-F(a)=\int_a^bF'$ ([[thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions]], [[def-absolutely-continuous-function]]).

[L4] A nonnegative function with vanishing integral is zero almost everywhere ([[thm-nonnegative-integral-zero-iff-zero-almost-everywhere]]). For componentwise Lebesgue-integrable $w:[a,b]\to\mathbb R^3$ and integrable $f$ with $f\ge|w|_{\mathrm e}$ almost everywhere, $|\int_a^b w|_{\mathrm e}\le\int_a^b f$. To prove this, put $v:=\int_a^b w$, componentwise. If $v\ne0$, put $e:=v/|v|_{\mathrm e}$; the inequality $e\cdot w\le|w|_{\mathrm e}$ follows from $|w-(e\cdot w)e|_{\mathrm e}^2=|w|_{\mathrm e}^2-(e\cdot w)^2\ge0$. The integrable function $f-e\cdot w$ is nonnegative after modification on a null set, so its integral is nonnegative; linearity gives $\int f\ge e\cdot v=|v|_{\mathrm e}$. If $v=0$, use $f\ge0$. These are Lebesgue statements, using [[thm-linearity-of-the-lebesgue-integral-on-l-one]], [[def-integrable-real-and-complex-functions-and-their-integrals]], [[prop-order-and-scalar-rules-for-the-nonnegative-integral]] and [[thm-the-lebesgue-integral-respects-almost-everywhere-equality]].

[L5] Future-inextendibility means absence of a point limit at the upper parameter end, whether finite or infinite; the dual holds at the lower end ([[def-gr-causal-curves-and-reachability]] clause (d)). This no-limit definition is sufficient below; no parameter-preserving extension at an infinite end is asserted.

## Proof

**Proof technique:** direct.

1.1 (Almost-everywhere cone inequality.) Write $c(t):=x(\gamma(t))=(c^0(t),c_s(t))$. By [L1], $c$ is locally absolutely continuous and at almost every $t$ its derivative $c'(t)$ exists and equals the coordinates of the nonzero future causal velocity, so by [L2] $c^0{}'(t)\ge|c_s'(t)|_{\mathrm e}$ and $c^0{}'(t)>0$. This proves nothing yet but fixes the a.e. information used below. [given, L1, L2, algebra]

2.1 (Monotonicity and the Lipschitz bound.) Let $a<b$ in $I$. By [L3] applied to the absolutely continuous functions $c^0$ and the components of $c_s$ on $[a,b]$, and by [L4], $$c^0(b)-c^0(a)=\int_a^bc^0{}'(t)\,dt\ge\left|\int_a^bc_s'(t)\,dt\right|_{\mathrm e}=|c_s(b)-c_s(a)|_{\mathrm e}\ge0.$$ This is (b). If $c^0(b)=c^0(a)$, then $\int_a^bc^0{}'=0$ with $c^0{}'\ge0$ almost everywhere, so [L4] gives $c^0{}'=0$ almost everywhere on $[a,b]$, contradicting $c^0{}'>0$ on the full-measure set of step 1.1; hence $c^0(b)>c^0(a)$, which is the strict monotonicity of (a). Moreover $c(a)=c(b)$ would give $c_s(a)=c_s(b)$ by the displayed inequality, hence $\gamma(a)=\gamma(b)$, and strict increase of $c^0$ forbids $a<b$; so $\gamma$ is injective, and its spatial coordinates are $1$-Lipschitz in $c^0$ again by the displayed inequality. [step 1.1, L3, L4, algebra]

3.1 (Unboundedness at inextendible ends.) Suppose $\gamma$ is future-inextendible and let $T:=\sup\,(x^0\circ\gamma)(I)$. If $T<+\infty$, then for $t,t'\to\sup I$ the spatial coordinates satisfy $|c_s(t)-c_s(t')|_{\mathrm e}\le|c^0(t)-c^0(t')|\to0$ by step 2.1, so $(c^0,c_s)$ has a limit $q=(T,z_\infty)\in\mathbb R^4$; that is, $\gamma$ converges to the event with coordinates $q$ as $t\to\sup I$. This point limit directly contradicts the no-limit definition of future-inextendibility [L5]. Hence $T=+\infty$; the past statement is the time reverse. With both statements, an inextendible $\gamma$ has range all of $\mathbb R$, and step 2.1 makes $x^0\circ\gamma$ a strictly increasing surjection onto $\mathbb R$, so each level set is attained at exactly one parameter. This proves (c). [step 2.1, L5, algebra]

4.1 (The time coordinate is temporal, and conclusion.) In the coordinates of the global inertial chart, $\eta=\operatorname{diag}(-1,1,1,1)$, and the vector field $w:=-\partial_0$ satisfies $\eta(w,\partial_0)=1$ and $\eta(w,\partial_i)=0$ for $i=1,2,3$; hence $\eta(w,X)=X^0=du(X)$ for every vector $X$, so $w$ is the gradient $\nabla u$ of $u=x^0$. It satisfies $\eta(w,w)=-1<0$ and $du(\partial_0)=1>0$, so $u$ is a temporal function as claimed in (d). With steps 2.1 and 3.1 this completes the proof. [step 2.1, step 3.1, given, algebra] ∎

## Remarks

- **Coordinate and chart dependence.** The coordinate $x^0$ depends on the choice of inertial chart, and the monotonicity statement is for the one global inertial chart $x$; the cone criterion used holds in every inertial chart ([[lem-gr-flat-inertial-cone-criterion-and-sums]]), and no claim is made here about how different inertial charts are related. The physical reading of $x^0$ as a time coordinate requires the framework postulates and is not part of this lemma.
- **Sharpness.** The Lipschitz bound is the cone bound integrated; it is attained by null straight paths, for which the inequality is an equality on every subinterval.
