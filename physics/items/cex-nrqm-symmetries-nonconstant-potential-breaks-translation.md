---
id: cex-nrqm-symmetries-nonconstant-potential-breaks-translation
aliases: [ nrqm-symmetries-nonconstant-potential-breaks-translation ]
kind: counterexample
domain: physics
title: "A bounded nonconstant potential with no nontrivial translational symmetry"
status: draft
origin: session
dependency_level: 12
deps:
  [
    def-axiom-of-choice,
    def-countable-choice,
    def-dependent-choice,
    def-euclidean-inner-product,
    def-metric-ball,
    def-measure-null-set-and-almost-everywhere,
    def-nrqm-framework-quantities-and-units,
    def-nrqm-kinematics-framework-massive-spin-s-model,
    def-nrqm-symmetries-framework-symmetry-groups-and-conservation,
    lem-euclidean-balls-have-positive-finite-lebesgue-measure,
    lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric,
    lem-nrqm-kinematics-componentwise-position-and-momentum,
    post-nrqm-framework-autonomous-dynamics,
    post-nrqm-framework-identical-particles-and-spin,
    post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle,
    post-nrqm-framework-observable-and-probability,
    post-nrqm-framework-state-and-composition,
    pthm-nrqm-symmetries-translation-invariance-and-momentum-conservation,
    thm-lebesgue-measure-is-a-complete-measure,
    thm-lebesgue-outer-measure-is-an-outer-measure-agreeing-with-volume,
    thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators
  ]
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-countable-choice: mathematical-premise
  def-dependent-choice: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-metric-ball: mathematical-premise
  def-measure-null-set-and-almost-everywhere: mathematical-premise
  def-nrqm-framework-quantities-and-units: formulation-prerequisite
  def-nrqm-kinematics-framework-massive-spin-s-model: formulation-prerequisite
  def-nrqm-symmetries-framework-symmetry-groups-and-conservation: formulation-prerequisite
  lem-euclidean-balls-have-positive-finite-lebesgue-measure: mathematical-premise
  lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric: mathematical-premise
  lem-nrqm-kinematics-componentwise-position-and-momentum: mathematical-premise
  post-nrqm-framework-autonomous-dynamics: physical-assumption
  post-nrqm-framework-identical-particles-and-spin: physical-assumption
  post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle: physical-assumption
  post-nrqm-framework-observable-and-probability: physical-assumption
  post-nrqm-framework-state-and-composition: physical-assumption
  pthm-nrqm-symmetries-translation-invariance-and-momentum-conservation: physical-result
  thm-lebesgue-measure-is-a-complete-measure: mathematical-premise
  thm-lebesgue-outer-measure-is-an-outer-measure-agreeing-with-volume: mathematical-premise
  thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "A counterexample inside the declared massive model with a
  bounded measurable potential energy: a positive energy scale times the
  indicator of the ball of radius one metre has no nontrivial
  translational symmetry, so no nonzero translation commutes with its
  bounded-potential energy operator, while the potential itself is bounded and
  measurable and its model is self-adjoint on W^{2,2}. The item refutes a
  universal claim about translations of bounded nonconstant potentials; it
  asserts nothing about the physics of a laboratory potential and records no
  measurement."
sources:
  references:
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section 4.3,
        printed pages 68-70 (PDF pages 76-78): translational invariance of a
        potential as the condition for momentum conservation"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009,
        Section 8.1, printed pages 173-175 (PDF pages 185-187): momentum
        conservation for potentials invariant under translations"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
verification:
  precheck: pass
---

## Statement refuted

Let $V:\mathbb R^{3}\to\mathbb R$ be any real, bounded, measurable, nonconstant
potential energy, expressed in joules. Then for every nonzero $a\in\mathbb R^{3}\setminus\{0\}$ the
translation $T_{a}$ is a symmetry of the declared bounded-potential dynamics
with energy $H_{V}$.

## Facts & Assumptions

**Given:** The postulates P1, P2, P4, P5, P6 in the readings of
[[def-nrqm-kinematics-framework-massive-spin-s-model]],
[[def-nrqm-symmetries-framework-symmetry-groups-and-conservation]] and the
postulate items of those readings; the Axioms of Countable Choice and of
Choice and Dependent Choice ([[def-countable-choice]], [[def-axiom-of-choice]],
[[def-dependent-choice]]); the declared
particle of mass $m>0$ and spin label $s$ with state space
$H_{s}=L^{2}(\mathbb R^{3};\mathbb C^{r})$, $r=2s+1$, and translations $T_{a}$
([[lem-nrqm-kinematics-componentwise-position-and-momentum]] clause (c)); the
positive model energy scale $E_{*}>0$ in J and length $R:=1\,\mathrm m$; the
potential $V_{0}:=E_{*}1_{B(0,R)}$ and its shift
$V_{0,a}(x):=V_{0}(x-a)$; a vector $a\in\mathbb R^{3}\setminus\{0\}$.

[F1] **Model.** For a real bounded measurable $V$ the operator
$H_{V}=\frac{1}{2m}\sum_{k}P_{k}^{2}+M_{V}$ is self-adjoint with domain
$D(H_{V})=W^{2,2}(\mathbb R^{3};\mathbb C^{r})$, and $T_{a}$ is a symmetry of
$H_{V}$ in the sense of
[[def-nrqm-symmetries-framework-symmetry-groups-and-conservation]] clause (b)
if and only if $V_{a}=V$ almost everywhere, where $V_{a}(x)=V(x-a)$; in fact
$T_{a}H_{V}T_{a}^{-1}=H_{V_{a}}$
([[thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators]]
clause (c), [[pthm-nrqm-symmetries-translation-invariance-and-momentum-conservation]]
clause (a)).

[F2] **The indicator potential energy.** $B(0,R)=\{x\in\mathbb R^{3}:|x|<R\}$ is the
Euclidean ball of radius $R$ ([[def-euclidean-inner-product]], [[def-metric-ball]]),
with spatial coordinates and $R$ expressed in metres. The function
$V_{0}=E_{*}1_{B(0,R)}$ is real and measurable, has energy unit J and
$0\le V_{0}\le E_{*}$, and is nonconstant since $V_{0}(0)=E_{*}>0$
and $V_{0}(2Re_{1})=0$. For every $x$,
$$V_{0,a}(x)=E_{*}\iff x-a\in B(0,R)\iff |x-a|<R,$$
so $\{x:V_{0}(x)\ne V_{0,a}(x)\}=\{x:|x|<R\le|x-a|\}\cup\{x:|x-a|<R\le|x|\}$.

[F3] **Norm geometry.** The Euclidean norm satisfies the triangle inequality
$|y-a|\ge|x-a|-|y-x|$ and $|y|\le|x|+|y-x|$ for all $x,y,a\in\mathbb R^{3}$
([[lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric]] clause 1,
[[def-euclidean-inner-product]]).

[F4] **Lebesgue measure.** A Euclidean ball $B(x,r)$ with $r>0$ is Lebesgue
measurable with $0<\lambda(B(x,r))<\infty$
([[lem-euclidean-balls-have-positive-finite-lebesgue-measure]]); Lebesgue
measure is the restriction of Lebesgue outer measure to the measurable sets,
and $\lambda^{*}$ is monotone
([[thm-lebesgue-measure-is-a-complete-measure]],
[[thm-lebesgue-outer-measure-is-an-outer-measure-agreeing-with-volume]],
[[def-measure-null-set-and-almost-everywhere]]); a property holds almost
everywhere exactly when its exceptional set is contained in a measurable set
of measure zero ([[def-measure-null-set-and-almost-everywhere]]).

## Counterexample

**Proof technique:** direct; take a positive energy scale times the indicator of the ball of radius $R$, exhibit a
point where the shifted potential differs, show that a whole ball lies in the
difference set, and use the positivity of Lebesgue measure of balls to
conclude that the potentials are not equal almost everywhere, so that the
symmetry criterion fails.

**Given:** The data of the refuted statement and [F1]-[F4].

1.1 [A point where the shifted potential differs] Put $u:=a/|a|$, a unit vector, and $\delta:=\min\{|a|/2,R/2\}>0$, and set $x_{0}:=-(R-\delta)u$. Then $|x_{0}|=R-\delta<R$, so $V_{0}(x_{0})=E_{*}$; and $x_{0}-a=-(R-\delta+|a|)u$, so $|x_{0}-a|=R-\delta+|a|>R$ because $|a|>\delta$ for $\delta\le|a|/2$, whence $V_{0,a}(x_{0})=0$. Thus $x_{0}$ lies in the difference set $\{V_{0}\ne V_{0,a}\}$ of [F2]. [F2, F3, given, algebra]

2.1 [A ball inside the difference set] Let $y\in\mathbb R^{3}$ with $|y-x_{0}|<\delta/2$ and put $r:=\delta/2$. Then $|y|\le|x_{0}|+|y-x_{0}|<R-\delta+\delta/2<R$, so $V_{0}(y)=E_{*}$; and $|y-a|\ge|x_{0}-a|-|y-x_{0}|>R-\delta+|a|-\delta/2=R+|a|-3\delta/2>R$, the last inequality because $\delta\le|a|/2$ gives $3\delta/2\le3|a|/4<|a|$; hence $V_{0,a}(y)=0$. Therefore $B(x_{0},r)\subseteq\{V_{0}\ne V_{0,a}\}$. [step 1.1, F2, F3, given, algebra]

3.1 [The difference set has positive measure] By [F4] the ball $B(x_{0},r)$ is measurable with $\lambda(B(x_{0},r))>0$. If $V_{0,a}=V_{0}$ almost everywhere, then the difference set $\{V_{0}\ne V_{0,a}\}$ is contained in a measurable null set $N$, and step 2.1 gives $B(x_{0},r)\subseteq N$; monotonicity of the outer measure [F4] then yields $\lambda(B(x_{0},r))=\lambda^{*}(B(x_{0},r))\le\lambda^{*}(N)=\lambda(N)=0$, contradicting $\lambda(B(x_{0},r))>0$. Hence $V_{0,a}=V_{0}$ does not hold almost everywhere: their difference set has positive measure. [step 2.1, F4, given, algebra]

4.1 [The refutation] By step 3.1 and the symmetry criterion of [F1], $T_{a}$ is not a symmetry of $H_{V_{0}}$ for the displayed nonzero $a$. Since $a\in\mathbb R^{3}\setminus\{0\}$ was arbitrary and $V_{0}$ is real, bounded, measurable and nonconstant by [F2], the universally quantified statement is refuted: a bounded nonconstant potential need not have any nontrivial translational symmetry. [step 3.1, F1, F2, given] ∎

## Remarks

- **Where the failure comes from.** The criterion [F1] is an almost-everywhere
  identity of the shifted potential classes, and the example realizes the
  failure on a set of positive measure. Boundedness and measurability suffice
  for the model to be well posed; they do not produce any translation
  symmetry.
- **What is not claimed.** The counterexample refutes one universal statement
  about bounded nonconstant potentials; it does not claim that every bounded
  nonconstant potential has no nontrivial translational symmetry (potentials
  constant along a direction do have the corresponding translations as
  symmetries), and it makes no statement about any laboratory potential or
  measurement.
