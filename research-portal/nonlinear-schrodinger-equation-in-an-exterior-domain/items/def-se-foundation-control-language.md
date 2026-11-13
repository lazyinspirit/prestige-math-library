---
id: def-se-foundation-control-language
kind: definition
domain: mathematics
title: Reachability and observation vocabulary for controlled evolutions
status: draft
deps:
  - math:def-banach-space
  - math:def-bounded-linear-operator
  - math:def-norm-and-normed-space
  - math:def-complex-norm-and-complex-normed-space
dependency_roles:
  math:def-banach-space: mathematical-premise
  math:def-bounded-linear-operator: mathematical-premise
  math:def-norm-and-normed-space: mathematical-premise
  math:def-complex-norm-and-complex-normed-space: mathematical-premise
formulation_deps:
  - math:def-banach-space
  - math:def-bounded-linear-operator
  - math:def-norm-and-normed-space
  - math:def-complex-norm-and-complex-normed-space
argument_deps:
  - math:def-banach-space
  - math:def-bounded-linear-operator
  - math:def-norm-and-normed-space
  - math:def-complex-norm-and-complex-normed-space
provenance:
  statement: ai-generated
  proof: not-applicable
dependency_level: 0
---

## Definition

Fix $T>0$. All normed spaces below are over a specified scalar field $\mathbb K\in\{\mathbb R,\mathbb C\}$; completeness is required only when stated. Let $X$ and $U$ be Banach spaces over the same scalar field, with $X$ the state space and $U$ the control space; a Banach space is a normed vector space complete in its norm metric. A specified controlled evolution supplies a set $E\subseteq X$ of admissible endpoints and a relation $\mathcal R_T\subseteq E\times U\times E$. The assertion $(x_0,h,x_1)\in\mathcal R_T$ means that an admissible solution for control $h$ starts at $x_0$ and ends at $x_1$ at time $T$. The equation, solution class, control restrictions and endpoint traces are part of the specified evolution, not consequences of this definition.

The evolution is **exactly controllable at time $T$** on $E$ if for every $x_0,x_1\in E$ there is $h\in U$ with $(x_0,h,x_1)\in\mathcal R_T$. If $0\in E$, it is **null controllable at time $T$** on $E$ if for every $x_0\in E$ there is $h\in U$ with $(x_0,h,0)\in\mathcal R_T$.

For a prescribed admissible reference solution $w$ with endpoints $w(0),w(T)\in E$, **local exact controllability near $w$ at time $T$** means that some $\delta>0$ has the following property: every $x_0,x_1\in E$ satisfying $\|x_0-w(0)\|_X<\delta$ and $\|x_1-w(T)\|_X<\delta$ admits an $h\in U$ with $(x_0,h,x_1)\in\mathcal R_T$.

When $E=X$, a **bounded linear endpoint-to-control operator** is a linear map $G:X\times X\to U$ such that $(x_0,G(x_0,x_1),x_1)\in\mathcal R_T$ for every pair and, for some $C\ge0$, $\|G(x_0,x_1)\|_U\le C(\|x_0\|_X+\|x_1\|_X)$ for every pair. Thus the product is equipped with the sum norm. This is a selection of steering controls; its existence is an additional assertion about the evolution.

For a specified adjoint evolution, let $Z$ be the normed space of its admissible initial states, let $Y$ be a normed observation space, and let $\mathcal O:Z\to Y$ send an initial state to its observation. An **observability inequality** is an estimate $\|z\|_Z\le C\|\mathcal O z\|_Y$ for every $z\in Z$, with a constant $C>0$ independent of $z$. The adjoint evolution and observation map are supplied by the application; the term alone asserts neither their existence nor a relation to controllability.

For a specified damped evolution with solutions $u(t)$ in a normed state space $X$ for all $t\ge0$, **exponential stabilization to zero** on a specified class of initial data means that there are constants $C,c>0$, uniform over that class and over $t\ge0$, such that $\|u(t)\|_X\le C e^{-ct}\|u(0)\|_X$. This terminology asserts no decay estimate for an unspecified equation and no equivalence with observability.

The following are local terminology conventions for comparison remarks, not assertions that any equation has the stated properties. For an evolution on a specified spatial set $D$ and a specified region $\omega\subseteq D$, **internal control in $\omega$** means that the actuator enters the equation as a source $f_h(t,x)$ which is zero for $x\in D\setminus\omega$; any boundary data are prescribed independently of the control $h$. The solution class specifies the meaning of equality and of localization. This definition does not assert that such a source steers any endpoints.

A control or stabilization statement is called **semi-global in the state norm** here when it holds on each prescribed bounded set of admissible states, with its stated parameters permitted to depend on that bound. More explicitly, put $E_R=\{x\in E:\|x\|_X\le R\}$ for $R>0$. For a family of controlled evolutions specified at positive times, semi-global exact controllability means that for every $R>0$ there is a time $T_R>0$ such that every $x_0,x_1\in E_R$ admits an admissible control with $(x_0,h,x_1)\in\mathcal R_{T_R}$; any asserted control estimates and their constants must also be specified on $E_R$. A semi-global stabilization statement similarly specifies its decay assertion on each bounded set of admissible initial states, with the asserted constants allowed to depend on $R$. Additional hypotheses remain those of the specified statement. No time, control bound or decay constant uniform over all $R$ is implied.

For a specified damped or feedback evolution with normed state space $X$ and solution time domain $[0,\infty)$, an **equilibrium** is a state $x_\ast\in X$ for which the constant trajectory $u(t)=x_\ast$ for all $t\ge0$ is an admissible solution of that same evolution. Admissibility includes the specified equation, boundary conditions and fixed damping or feedback law. This definition does not assert the existence of an equilibrium.

For that evolution and an equilibrium $x_\ast\in X$, **stabilization toward $x_\ast$** on an admissible class means that every solution in that class satisfies $\|u(t)-x_\ast\|_X\to0$ as $t\to\infty$. A quantitative stabilization statement must specify its decay estimate and the class over which the estimate is uniform. The exponential stabilization condition below is one such quantitative assertion when $x_\ast=0$.

For a specified equation and a specified class $\mathcal S$ of solutions on a domain $Q$, with a specified observation subset $O\subseteq Q$, a **unique-continuation implication from $O$** means $u|_O=0\Longrightarrow u=0$ on $Q$ for every $u\in\mathcal S$. The equation and solution class must specify the meaning of vanishing and restriction, including any time interval and any equivalence-class convention. This defines the implication as a property; it does not assert that it holds for an unspecified equation or solution class.

## Definition references

[[math:def-banach-space]]

[[math:def-bounded-linear-operator]]

[[math:def-norm-and-normed-space]]

[[math:def-complex-norm-and-complex-normed-space]]

## Justification

The state and control spaces are definite normed spaces with complete norm metrics by [[math:def-banach-space]]. Once the evolution specifies $E$ and $\mathcal R_T$, exact and null controllability are predicates with explicit quantifiers over those sets; the local version uses the specified reference endpoints and the norm balls in $X$. No uniqueness of solutions or choice of a solution map is required.

The sum of the two endpoint norms is a norm on $X\times X$: positivity and homogeneity follow componentwise, and the triangle inequality follows by adding the two component inequalities. Hence the displayed condition on $G$ is exactly boundedness of a linear operator for this product norm, in the sense of [[math:def-bounded-linear-operator]]. The steering condition is separately imposed and is not implied by boundedness.

The observation inequality and stabilization condition are definite predicates once their respective normed spaces, maps, solution classes and constants are specified. The general real and complex normed spaces used here and in the equilibrium and qualitative stabilization clauses are understood in the sense of [[math:def-norm-and-normed-space]] and [[math:def-complex-norm-and-complex-normed-space]], respectively; these uses impose no completeness requirement. Their inequalities make the dependence on the data and the required uniformity explicit. None of these definitions proves existence, well-posedness, a steering operator, an observation estimate, or a decay theorem.

The added internal-control and unique-continuation clauses are local definitions with their spatial sets, solution classes, sources and equality conventions supplied as data. They invoke no continuation theorem and no controllability theorem. The semi-global convention restricts the already specified endpoint relation to the explicitly defined norm-bounded subsets $E_R$; its quantifier order permits different parameters for different bounds. The equilibrium convention tests whether a specified constant trajectory is admissible for the supplied evolution on $[0,\infty)$; it needs no solution uniqueness or independent existence theorem. The qualitative stabilization convention uses the same state norm and an equilibrium in this sense. These conventions add no existence assertion or equivalence with observability.
