---
id: def-convex-entropy-entropy-flux-pair
kind: definition
title: Convex entropy--entropy flux pairs
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 1
justified_by: []
aliases: []
deps: [def-scalar-conservation-law-and-flux, def-convex-and-strictly-convex-functions-on-euclidean-sets, cor-primitives-of-a-continuous-function, thm-ftc-second-part, def-distribution, def-distributional-derivative, thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions, def-countable-choice, def-dependent-choice]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "S. N. Kruzhkov, “First order quasilinear equations in several independent variables,” Mat. USSR-Sbornik 10 (1970), 217–243, complete English translation"
      url: "https://www.mathnet.ru/links/c11e6b0d0e3edba28696e58d4e1fd4db/sm3372_eng.pdf"
      locator: "§2, Definition 1, pp. 220--221; §4, entropy passage, pp. 236--237"
    - title: "Alberto Bressan, “Hyperbolic Conservation Laws: An Illustrated Tutorial,” 2009, complete lecture notes"
      url: "https://yulia-petrova.github.io/teaching/shocks/Bressan-tutorial.pdf"
      locator: "§2.3, Definition 5, p. 16"
    - title: "G. A. Chechkin and A. Yu. Goritsky (translated by B. Andreianov), “S. N. Kruzhkov’s lectures on first-order quasilinear PDEs,” in Analytical and Numerical Aspects of PDEs, de Gruyter 2009, complete lecture-notes text"
      url: "https://www.math.ntnu.no/conservation/2009/011.pdf"
      locator: "§5.5, (5.41)--(5.42), pp. 48--49"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Definition

Let $n\ge1$, let $f\colon\mathbb R\to\mathbb R^n$ be $C^1$, and let
$\eta\colon\mathbb R\to\mathbb R$ be a finite convex locally Lipschitz function
([[def-convex-and-strictly-convex-functions-on-euclidean-sets]]).
An **entropy flux** is specified by the coordinatewise formula
$$q_i(s)=C_i+\int_0^s\eta'(r)f_i'(r)\,dr.$$
One may use the left derivative of $\eta$ in this formula. Convex secant
inequalities show that it is bounded and nondecreasing on compact intervals,
and that it equals the ordinary derivative except at at most countably many
points: assign a distinct rational to each nonempty gap between left and right
slopes. A bounded monotone function is Riemann integrable, since the difference
of upper and lower sums on an equal mesh is at most the mesh size times its
total increase. The same holds after multiplication by the continuous $f_i'$:
uniform continuity controls the additional oscillation in the product sums.
Thus the displayed integrals exist and give locally Lipschitz $q$.
The convex secant bounds also squeeze the telescoping sum
$\eta(b)-\eta(a)$ between the left and right derivative sums, proving
$\eta(b)-\eta(a)=\int_a^b\eta'$ without a choice principle.
At every continuity point of $\eta'$, averaging the integrand over a
shrinking interval gives $q'(s)=\eta'(s)f'(s)$; the exceptional
points are countable. This includes nonsmooth entropies such as $|s-k|$.
The constants $C_i$ are the only normalization freedom in this construction.
For $\eta\in C^1$, ordinary FTC makes $q\in C^1$
([[cor-primitives-of-a-continuous-function]], [[thm-ftc-second-part]]);
second-derivative identities require $\eta\in C^2$ with $\eta''\ge0$.
Conversely, under Countable Choice and Dependent Choice, any locally Lipschitz
$q$ satisfying $q'=\eta' f'$ almost everywhere has this formula,
by the fundamental theorem for absolutely continuous functions
([[thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions]],
[[def-countable-choice]], [[def-dependent-choice]]). This converse analytic
interface is separate from defining the explicit integral pairs used here.

Such a pair $(\eta,q)$ is an **entropy--entropy flux pair**. For bounded
measurable $u$ its **entropy inequality** is
$$\partial_t\eta(u)+\operatorname{div}_xq(u)\le0\quad\text{in }\mathcal D'(\Pi_T),$$
equivalently $\int_{\Pi_T}(\eta(u)\varphi_t+q(u)\cdot\nabla\varphi)\ge0$
for every nonnegative $\varphi\in C_c^\infty(\Pi_T)$
([[def-distribution]], [[def-distributional-derivative]]).
All compositions are locally integrable on this bounded range.
Adding a constant vector to $q$ leaves the inequality unchanged.
The weak conservation law implies equality for the affine pairs
$(\eta,q)=(s,f(s))$ and $(-s,-f(s))$; conversely their two entropy
inequalities together imply that equality. The inequality for $(s,f(s))$
alone does not imply the weak equation ([[def-scalar-conservation-law-and-flux]]).
