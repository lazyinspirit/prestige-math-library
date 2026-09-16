---
id: def-banach-algebra-valued-contour-integral
kind: definition
title: Banach algebra valued contour integral
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-unital-banach-algebra, thm-banach-series-criterion, def-complex-contours-reversal-concatenation-and-closedness, def-bochner-integrable-function, thm-bochner-integrability-criterion]
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Theo Bühler and Dietmar A. Salamon, Functional Analysis — Lemmas 5.7–5.9 and Definition 5.8, printed pp. 213–216"
      url: "https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf"
    - title: "Vahid Shirbisheh, Lectures on C-star Algebras, v2 — §2.5, printed pp. 43–47"
      url: "https://arxiv.org/pdf/1211.3404"
---

## Definition

Let $A$ be a unital complex Banach algebra ([[def-unital-banach-algebra]]),
let $\gamma : [a,b] \to \mathbb C$ be a piecewise $C^1$ complex contour
([[def-complex-contours-reversal-concatenation-and-closedness]]), and let
$f : \gamma^\ast \to A$ be continuous on the trace of $\gamma$. The
**contour integral of $f$ along $\gamma$**,

$$\int_\gamma f(z)\,dz \;\in\; A,$$

is defined as follows.

Choose a partition $a = t_0 < t_1 < \cdots < t_m = b$ such that $\gamma$ is
$C^1$ on every closed interval $[t_{k-1},t_k]$ (with one-sided derivatives at
the nodes). Consider partitions
$P = \{a = s_0 < s_1 < \cdots < s_N = b\}$ refining this one, with tags
$\xi_j \in [s_{j-1},s_j]$, and form the **tagged Riemann sum**

$$S(f,\gamma,P,\xi) \;:=\; \sum_{j=1}^{N} f(\gamma(\xi_j))\, \gamma'(\xi_j)\,(s_j - s_{j-1}) ,$$

a finite sum in the Banach algebra $A$. When the interval $[s_{j-1},s_j]$
contains a node of the $C^1$ partition, the tag is read as a one-sided
derivative; the finitely many such sums contribute nothing in the limit, and
partitions are always taken to refine the $C^1$ partition.

Then $S(f,\gamma,P,\xi)$ converges in $A$ as the mesh
$\max_j(s_j - s_{j-1})$ tends to $0$; the limit, which is independent of the
refining partitions and tags, is denoted $\int_\gamma f(z)\,dz$. The construction
is the Banach-algebra case of the vector-valued integral of continuous functions
along a compact interval:

$$\int_\gamma f(z)\,dz \;=\; \int_a^b f(\gamma(t))\,\gamma'(t)\,dt ,$$

where the right-hand side is the Bochner integral
([[def-bochner-integrable-function]]) of the function
$t \mapsto f(\gamma(t))\gamma'(t)$, which is continuous on each of the finitely
many subintervals $[t_{k-1},t_k]$ and bounded on $[a,b]$. The integral satisfies

$$\left\|\int_\gamma f(z)\,dz\right\| \;\le\; L(\gamma)\, \sup_{z \in \gamma^\ast}\|f(z)\| ,$$

$L(\gamma)$ the length of $\gamma$, and it is additive over concatenation and
negates under reversal:

$$\int_{\gamma_1 \ast \gamma_2} f\,dz = \int_{\gamma_1} f\,dz + \int_{\gamma_2} f\,dz , \qquad \int_{\gamma^-} f\,dz = -\int_{\gamma} f\,dz ,$$

whenever $f$ is continuous on the relevant traces, and it is unchanged by an
increasing reparametrization of the parameter interval. Finally, for a **complex
chain** $\Gamma = \sum_{k<r}m_k\gamma_k$ with trace $\Gamma^\ast$ and a function
$f$ continuous on $\Gamma^\ast$, the **integral over the chain** is

$$\int_\Gamma f(z)\,dz \;:=\; \sum_{\substack{k<r\\ m_k \ne 0}} m_k \int_{\gamma_k} f(z)\,dz ,$$

a finite sum of elements of $A$; the empty chain integrates to $0$.

## Remarks

- **Why the sums converge, and why the value is well defined.** Write
$F(t) := f(\gamma(t))\gamma'(t)$. On each subinterval $[t_{k-1},t_k]$ both
factors are continuous, $\gamma'$ is bounded there, and $f$ is bounded on the
compact trace, so $F$ is uniformly continuous on $[t_{k-1},t_k]$; let $\omega$
be a common modulus of uniform continuity. For a partition refining the nodes
and tags inside one subinterval, the estimate
$\bigl\|\sum_j F(\xi_j)\Delta_j - \int F\bigr\| =
\bigl\|\sum_j \int_{s_{j-1}}^{s_j}(F(\xi_j)-F(t))\,dt\bigr\| \le
(b-a)\,\omega(\text{mesh})$
shows that the sums converge to the Bochner integral of $F$ and that the limit
does not depend on the refining partition or the tags. The Bochner integral
exists because $F$ is bounded and measurable (piecewise continuous), so
$\int\|F\| < \infty$ and [[thm-bochner-integrability-criterion]] applies; this
is the agreement asserted above, and it is proved here rather than assumed from
the scalar theory.

- **The norm estimate is the Riemann-sum estimate in the limit.** For every
tagged partition,
$\|S(f,\gamma,P,\xi)\| \le \sum_j \|f(\gamma(\xi_j))\|\,
|\gamma'(\xi_j)|\,\Delta_j \le \sup_{\gamma^\ast}\|f\| \cdot
\sum_j |\gamma'(\xi_j)|\Delta_j$, and the last sums converge to the length
$L(\gamma)$; passing to the limit gives the displayed bound. This is the only
estimate used when integrals are bounded in the calculus below.

- **Additivity and reversal are inherited from the parameter integral.** The
Bochner integral is additive over adjacent intervals and reverses sign under an
orientation-reversing affine change of parameter; concatenation of contours is
by definition the two affine pieces, reversal replaces $t$ by $a+b-t$, and an
increasing reparametrization is absorbed into the Riemann sums. Consequently
the chain integral is a finite linear combination of contour integrals and
inherits additivity in the chain: $\int_{\Gamma_1+\Gamma_2} = \int_{\Gamma_1} +
\int_{\Gamma_2}$ and $\int_{-\Gamma} = -\int_\Gamma$.

- **Consistency with the scalar and the complex line integral.** For
$A = \mathbb C$ the construction is the complex line integral of a continuous
scalar function over a piecewise $C^1$ contour; the limit definition agrees with
[[def-integration-and-index-of-complex-chain]], so the results about scalar
contour integrals apply to the scalar special case.
