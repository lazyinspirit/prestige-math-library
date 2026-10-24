---
id: def-regular-continuation-datum-between-morse-smale-pairs
kind: definition
title: "A regular continuation datum between Morse--Smale pairs"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-morse-smale-pair, def-downward-gradient-like-vector-field, def-riemannian-gradient-of-a-smooth-function, def-time-dependent-vector-field-and-evolution-operator, def-smooth-family-of-maps-and-evaluation-map, thm-sard-smale-residual-regular-values-for-fredholm-maps, def-fredholm-maps-and-regular-values-on-countable-banach-manifolds, lem-universal-metric-trajectory-projection-is-fredholm, def-nowhere-dense-meagre-and-residual-subsets, def-parametrized-morse-trajectory-space, def-morse-trajectory-from-p-to-q, def-nondegenerate-critical-point-nullity-index-and-coindex, def-axiom-of-choice, lem-first-order-asymptotically-hyperbolic-operator-is-fredholm, thm-local-stable-unstable-manifolds-for-hyperbolic-gradient-critical-points, thm-time-dependent-vector-fields-have-local-smooth-evolution-operators, thm-transverse-fibre-product-theorem, thm-parametric-transversality, def-countable-choice]
justified_by: []
dependency_level: 0
sources:
  references:
    - title: "Alexander F. Ritter, Part III Morse Homology (Cambridge lecture notes, complete author PDF, 115 pp.)"
      url: "https://people.maths.ox.ac.uk/ritter/morse-cambridge/combined.pdf"
      locator: "Lecture 20, Sec. 6.3 (1): the continuation moduli space C(p^-,q^+), the two-end condition (*), dim C = |p^-|-|q^+|, and transversality for generic paths of metrics; PDF pp. 91-92"
    - title: "Udhav Fowdar, A Functional Analytic Approach to Morse Homology (UCL 4th-year project, complete PDF, 93 pp.)"
      url: "https://www.mathematik.hu-berlin.de/~wendl/pub/Fowdar.pdf"
      locator: "Ch. 4, Sec. 4, Definition 4.5 and the transversality setup for time-dependent trajectories, pp. 30-34"
    - title: "Michele Audin and Mihai Damian, Morse Theory and Floer Homology (complete author PDF of the English book, 628 pp.)"
      url: "https://audin.pages.math.unistra.fr/livres/audin-damian-en.pdf"
      locator: "Ch. 3 Sec. 3.4, first step: the interpolating family F, the perturbed field and the two-end condition, printed pp. 71-75, PDF pp. 81-85"
    - title: "Michael Hutchings, Math 242 Lecture 21: Invariance via continuation maps (notes by Jackson Van Dyke, complete PDF)"
      url: "https://web.ma.utexas.edu/users/vandyke/notes/242_notes/lecture21.pdf"
      locator: "Lecture 21, Sec. 1.2, Approach 2: the vector field V, the moduli spaces m^V and the dimension formula, p. 2 of the lecture"
verification:
  precheck: n/a
---

## Definition

Assume $\mathrm{AC}_\omega$ ([[def-countable-choice]]) for the smooth-bundle setup. Let $M$ be a closed manifold and let $(f^-,g^-)$ and $(f^+,g^+)$ be
Morse--Smale pairs in the metric sense
([[def-morse-smale-pair]]).

A **continuation datum** from $(f^-,g^-)$ to $(f^+,g^+)$ is a choice of
$S>0$ together with smooth families $f_s:M\to\mathbb R$ and of Riemannian
metrics $g_s$, $s\in\mathbb R$, such that
$$(f_s,g_s)=(f^-,g^-)\quad(s\le-S),\qquad (f_s,g_s)=(f^+,g^+)\quad(s\ge S).$$
Its **continuation equation** is the non-autonomous first-order equation
$$\partial_su(s)=-\nabla^{g_s}f_s(u(s)),\qquad s\in\mathbb R,$$
for smooth $u:\mathbb R\to M$, read as an equation for curves of the
time-dependent field $s\mapsto-\nabla^{g_s}f_s$
([[def-time-dependent-vector-field-and-evolution-operator]],
[[def-riemannian-gradient-of-a-smooth-function]]). Solutions are never
quotiented by time translation. The right-hand side is generally not
translation invariant; constant data are an autonomous exception, for which
the same unquotiented convention applies. For $p\in\operatorname{Crit}(f^-)$ and
$q\in\operatorname{Crit}(f^+)$ set
$$\mathcal C(p,q)=\Bigl\{u\in C^\infty(\mathbb R,M):\ \partial_su=-\nabla^{g_s}f_s(u),\ \lim_{s\to-\infty}u(s)=p,\ \lim_{s\to+\infty}u(s)=q\Bigr\}.$$

Fix a smooth torsion-free background connection, for example the
Levi--Civita connection of $g^-$. Along a solution, put
$E_u=C^1_0(\mathbb R,u^*TM)$ and $F_u=C^0_0(\mathbb R,u^*TM)$, with
supremum norms; the subscript means that the section (and its covariant
first derivative in $E_u$) tends to zero at both ends. The linearization is
$$D_u\xi=\nabla_s\xi+\nabla_\xi(\nabla^{g_s}f_s).$$
The datum is **regular at $(p,q)$** if $D_u:E_u\to F_u$ is onto for every
$u\in\mathcal C(p,q)$; it is **regular** if this holds for every critical
pair. Empty solution spaces satisfy this condition vacuously.

Here is the finite-dimensional description and index calculation. Let
$\Psi_{S,-S}$ be evolution across the compact window. Local smooth evolution
and compactness of $M$ extend it across every finite time interval: finitely
many coordinate neighbourhoods give a common positive local existence time,
which can be iterated; backward evolution is its inverse
([[thm-time-dependent-vector-fields-have-local-smooth-evolution-operators]]).
Evaluation at $-S$ identifies $\mathcal C(p,q)$ with the fibre product
$$\{(x,y)\in W^u_-(p)\times W^s_+(q):\Psi_{S,-S}(x)=y\}.$$
The end stable/unstable disks and their transported tangent spaces have the
expected dimensions and exponentially decaying variations
([[thm-local-stable-unstable-manifolds-for-hyperbolic-gradient-critical-points]]).
For smooth data the disks are smooth: differentiate the supplier's contraction
fixed-point equation repeatedly in its finite-dimensional initial parameter;
at every order the unknown derivative has the same linear contraction
operator, while its forcing involves already obtained lower derivatives and
bounded derivatives of the cut-off smooth vector field. Its Neumann series
therefore gives a continuous derivative of each order. Finite-time smooth
flow transport gives smooth global immersion charts.
In a frame converging on both autonomous tails, $D_u$ becomes a first-order
matrix operator with invertible self-adjoint limits. The whole-line operator
lemma gives index $\operatorname{ind}(p)-\operatorname{ind}(q)$ and says
that surjectivity is equivalent to the two transported decaying initial-value
spaces spanning $T_yM$
([[lem-first-order-asymptotically-hyperbolic-operator-is-fredholm]]).
These spaces are exactly $d\Psi_{S,-S}(T_xW^u_-(p))$ and $T_yW^s_+(q)$.
Thus regularity is transversality of this fibre product; it makes
$\mathcal C(p,q)$ a smooth manifold of dimension
$\operatorname{ind}(p)-\operatorname{ind}(q)$, empty for negative dimension
([[thm-transverse-fibre-product-theorem]]). No translation quotient is taken,
even for the constant datum, for which translations happen to be symmetries.

**Existence and its qualification.** Assume the Axiom of Choice
([[def-axiom-of-choice]]) for the following genericity assertion. Allow both
$f_s$ and $g_s$ to vary, with the two ends fixed. Regular data form a residual
set in the smooth path space and can be obtained by arbitrarily small
perturbations supported inside $(-S,S)\times M$. To see the required
transversality, choose finitely many smooth functions $\phi_j$ whose gradients
span every tangent space (coordinate functions times cutoffs on a finite
chart cover), and perturb $f_s$ by
$\sum_j a_j\beta(s)\phi_j$, where $\beta$ is a nonnegative unit-integral
bump supported very near some $s_0\in(-S,S)$. Differentiating evolution
with respect to $a_j$ gives the integral of the transported vector
$-\beta(s)\nabla^{g_s}\phi_j$. As the support shrinks, these vectors
converge uniformly in the initial point to
$-d\Psi_{S,s_0}\nabla^{g_{s_0}}\phi_j$; hence they span $T_yM$ for a
sufficiently narrow bump. The universal endpoint map is therefore a
submersion. Apply finite-dimensional parametric transversality to its fibre
products with the stable/unstable immersion charts
([[thm-parametric-transversality]]). Their countable chart covers and the
finitely many critical pairs leave a null exceptional parameter set, so
arbitrarily small good parameters exist. Transversality on each compact
piece of a countable chart exhaustion is open and dense; intersecting these
sets gives the residual assertion. This argument permits function variations,
including along constant solutions.

For an arbitrary fixed function path, metric variations alone need not give
regularity: a point critical for every $f_s$ remains a constant solution for
every metric path. If its two end indices have negative difference, the
linearization there has negative index and cannot be onto. The generic-metric
statement in the autonomous distinct-end supplier
[[lem-universal-metric-trajectory-projection-is-fredholm]] does not cover this
obstruction. Regularity of a specified datum is a hypothesis below, rather
than a consequence of that supplier.
