---
id: cex-sr-rindler-horizon-is-not-a-physical-boundary
kind: counterexample
title: "The Rindler causal horizon is not a boundary or singularity of spacetime"
status: draft
origin: pipeline
domain: physics
dependency_level: 17
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps: [def-sr-causal-reachability-in-affine-minkowski-space, lem-sr-future-causal-sums-and-inertial-coordinate-criterion, thm-sr-fermi-walker-and-rigid-observer-examples, def-inertial-frame-and-inertial-chart, def-sr-affine-minkowski-model, def-causal-classification-of-lorentz-vectors, def-time-orientation-and-future-causal-sets, def-sr-regular-causal-curve-and-worldline, pthm-sr-rindler-horizons-and-radar]
dependency_roles:
  def-sr-causal-reachability-in-affine-minkowski-space: mathematical-premise
  lem-sr-future-causal-sums-and-inertial-coordinate-criterion: mathematical-premise
  thm-sr-fermi-walker-and-rigid-observer-examples: mathematical-premise
  def-inertial-frame-and-inertial-chart: mathematical-premise
  def-sr-affine-minkowski-model: mathematical-premise
  def-causal-classification-of-lorentz-vectors: mathematical-premise
  def-time-orientation-and-future-causal-sets: mathematical-premise
  def-sr-regular-causal-curve-and-worldline: mathematical-premise
  pthm-sr-rindler-horizons-and-radar: physical-result
proof_strategy: direct
physical_scope: "Counterexample within the flat classical model: the full null causal-horizon plane is not a spacetime boundary or singularity; only its specified half-plane belongs to the Rindler wedge boundary, and the only horizon statement concerning it is the causal restriction of reachability of particular congruence worldlines. No physical interpretation of the witnesses beyond the model's causal reachability is asserted, and no measurement, statistical or empirical claim is made."
sources:
  references:
    - title: "B. Crowell, Special Relativity, revision 2020-12-10 (author-published undergraduate textbook, 246 PDF pages): Section 3.5.2 p. 62 and Section 7.1 p. 148 (the lightlike asymptote, the event horizon of the accelerated observer and the diagonals of the accelerated-coordinate chart); signature (+---) converted to (-+++), c = 1 formulas restored to x^0 = c t"
      url: "https://archive.org/download/sr_20220102/sr.pdf"
    - title: "M. Blau, Lecture Notes on General Relativity (University of Bern, last update October 5, 2026, 1052 PDF pages): Section 1.3 items 2-3 pp. 38-40 (the Rindler metric is ill-defined only at rho = 0 as a coordinate singularity; an inertial observer crosses eta = +infinity at finite proper time and Minkowski space continues beyond the wedge)"
      url: "http://www.blau.itp.unibe.ch/newlecturesGR.pdf"
verification:
  precheck: pass
aliases: []
---

## Statement refuted

In the oriented time-oriented affine Minkowski space with the inertial chart $x = (x^0,x^1,x^2,x^3)$, the null plane $H := \{x^1 = x^0\}$ is a boundary of the model in the following three senses: (i) no future causal curve crosses from $\{x^1 > x^0\}$ to $\{x^1 < x^0\}$; (ii) $H$ separates all causal relations, so no event of $\{x^1 > x^0\}$ is causally related to any event of $\{x^1 < x^0\}$; and (iii) the metric degenerates on $H$, so that $H$ is a singular boundary of the spacetime on which the model fails.

Here $H$ is the full causal-past boundary of the accelerated congruence; only its half-plane $\{x^1 = x^0 \ge 0\}$ belongs to the boundary of the right wedge $W = \{x^1 > |x^0|\}$.

## Facts & Assumptions

**Given:** A fixed real $c>0$; the oriented time-oriented affine Minkowski space $(A,V,\eta,C^+)$ with inertial chart $x$, $H=\{x^1=x^0\}$, and the right wedge $W=\{x^1>|x^0|\}$ with the Rindler map $\Phi$ defined in [L3].

[L1] Causal classification and orientation: a displacement $w\in V$ is timelike iff $\eta(w,w)<0$, future timelike iff $w\in C^+$, and future causal iff $w\in\bar C^+\setminus\{0\}$, where $\bar C^+:=\operatorname{cl}(C^+)$; in every inertial chart $C^+=\{w:w^0>|w_s|\}$ and $\bar C^+=\{w:w^0\ge|w_s|\}$, with $|w_s|:=\sqrt{(w^1)^2+(w^2)^2+(w^3)^2}$. For events $p,q\in A$, $p\le q$ iff $q-p\in\bar C^+$ and $p<q$ iff $q-p\in C^+$ ([[def-causal-classification-of-lorentz-vectors]], [[def-time-orientation-and-future-causal-sets]], [[lem-sr-future-causal-sums-and-inertial-coordinate-criterion]] (a),(c), [[def-sr-causal-reachability-in-affine-minkowski-space]] (a)).

[L2] The affine segment $s\mapsto p+s(q-p)$, $s\in[0,1]$, is a $C^1$ curve of the model whose tangent, including its one-sided endpoint tangents, is the constant displacement $q-p$ ([[def-sr-regular-causal-curve-and-worldline]], Definition, “Derivative and regularity of the parametrization”). A $C^1$ curve $z:I\to A$ on an interval $I\subseteq\mathbb R$ is a future timelike worldline when every tangent is future timelike (the same definition, “Worldlines”).

[L3] Metric and chart: the matrix of $\eta$ in every inertial chart is the constant $\operatorname{diag}(-1,1,1,1)$, and $\Phi(\theta,\rho,y,z)=(\rho\sinh\theta,\rho\cosh\theta,y,z)$ with $\theta\in\mathbb R$, $\rho>0$ is a smooth bijection onto $W$ with smooth inverse ([[def-inertial-frame-and-inertial-chart]], [[def-sr-affine-minkowski-model]], [[thm-sr-fermi-walker-and-rigid-observer-examples]] (b)).

[L4] Rindler causal criteria: define $U(q):=x^0(q)+x^1(q)$ and $V(q):=x^0(q)-x^1(q)$ for $q\in A$. For fixed $\rho_1>0$ and $y_1,z_1\in\mathbb R$, the congruence worldline is $O_1(\theta):=x^{-1}(\Phi(\theta,\rho_1,y_1,z_1))$, $\theta\in\mathbb R$. An event $q$ reaches this worldline, meaning $q\le O_1(\theta)$ for some $\theta$, iff $V(q)<0$; it is reached by this worldline, meaning $O_1(\theta)\le q$ for some $\theta$, iff $U(q)>0$ ([[pthm-sr-rindler-horizons-and-radar]] (ii)).

## Counterexample

Steps 1.1–1.3 use events with exact rational inertial coordinates; step 1.4 supplies an inertial worldline. The failed conclusions (i)-(iii) are refuted in the order stated.

1.1 (The segment and the crossing.) With $p=x^{-1}(-1,0,0,0)$, $q=x^{-1}(3,1,0,0)$ and $y(s)=p+s(q-p)$, the tangent is the constant displacement $(4,1,0,0)$ by [L2] and [L3]; its $\eta$-square is $-16+1=-15<0$ with time component $4>0$, so every tangent is future timelike by [L1] and $y$ is a future timelike curve; the coordinate $x^0-x^1$ equals $-1+3s$ along $y$, which is $-1$ at $s=0$, $2$ at $s=1$, and vanishes exactly at $s=1/3$, giving the crossing event $x^{-1}(1/3,1/3,0,0)\in H$. [L1, L2, L3, algebra]

1.2 (Causal relations across and on $H$.) By [L1], $p\le q$ because $(4,1,0,0)\in C^+$; $r=x^{-1}(0,1,0,0)<x^{-1}(1,1,0,0)$ because the displacement $(1,0,0,0)$ is future timelike; and $x^{-1}(1,1,0,0)<x^{-1}(2,3/2,0,0)$ because $(1,1/2,0,0)$ has $\eta$-square $-1+1/4<0$ and positive time component; the middle event lies on $H$, the first and third do not. [L1, L3, algebra]

1.3 (Nondegeneracy and the map domain.) By [L3] the metric is the constant nondegenerate $\operatorname{diag}(-1,1,1,1)$ everywhere, in particular on $H$ and at the crossing event $x^{-1}(1/3,1/3,0,0)$; the Rindler map is a bijection onto $W$ with domain $\rho>0$, so its coordinate domain omits $\rho=0$ and its image omits the full plane $H$, whose half-plane $x^1=x^0\ge0$ is one part of the wedge boundary $x^1=|x^0|\ge0$. [L3]

1.4 (A second crossing by an inertial worldline.) The worldline $z:\mathbb R\to A$, $z(t)=x^{-1}(ct,0,0,0)$, is $C^\infty$ and future timelike: its tangent is $c e_0$ with $\eta=-c^2<0$ and time component $c>0$ in the chosen chart, so by [L1] and [L2] it is regular and future timelike; $z(0)$ lies on $H$, $x^1>x^0$ for $t<0$ and $x^1<x^0$ for $t>0$, so $z$ crosses $H$ while remaining defined for every $t$, refuting (i) again. [L1, L2, L3, algebra]

2.1 (Refutation of (i) and (ii).) Step 1.1 exhibits a future timelike curve crossing $H$ and a pair of causally related events on opposite sides of $H$, refuting both the no-crossing claim (i) and the separation claim (ii); step 1.2 exhibits causal relations between events of $H$ and events of each side, refuting the reading of $H$ as causally isolating. [L1, step 1.1, step 1.2]

2.2 (Refutation of (iii) and what remains true.) Step 1.3 shows the metric is everywhere nondegenerate on the model, so the degeneracy claim (iii) is false and the failure of the Rindler map at $\rho=0$ is a property of the coordinate map alone; by [L4] the surviving correct statement is the conditional causal restriction of reachability of the congruence worldlines (events with $V\ge0$ cannot reach them), which is not a statement about a boundary or singularity of the spacetime. [L3, L4, step 1.3]

3.1 (Scope.) The witnesses are explicit affine-model events, segments and worldlines with computed $\eta$-signs; no physical interpretation, measurement or empirical claim is made, and no choice principle was used. [L1, L2, step 2.1, step 2.2] ∎
