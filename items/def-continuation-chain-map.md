---
id: def-continuation-chain-map
kind: definition
title: "The continuation chain map"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-regular-continuation-datum-between-morse-smale-pairs, thm-continuation-trajectories-are-compact-up-to-breaking, lem-orientation-lines-orient-continuation-moduli-spaces, def-mod-two-morse-chain-group, def-signed-morse-differential-over-the-integers, def-orientation-line-of-a-morse-critical-point, cor-a-morse-function-on-a-compact-manifold-has-finitely-many-critical-points, def-axiom-of-choice, def-integers, def-integers-modulo-n, def-left-and-right-modules, def-morse-smale-pair, def-nondegenerate-critical-point-nullity-index-and-coindex, lem-metric-morse-smale-end-counts-form-chain-complexes]
justified_by: []
dependency_level: 8
sources:
  references:
    - title: "Alexander F. Ritter, Part III Morse Homology (Cambridge lecture notes, complete author PDF, 115 pp.)"
      url: "https://people.maths.ox.ac.uk/ritter/morse-cambridge/combined.pdf"
      locator: "Lecture 20, Sec. 6.3 (1): definition of phi(p^-) = sum #C(p^-,q^+) q^+, PDF pp. 91-92"
    - title: "Michael Hutchings, Math 242 Lecture 21: Invariance via continuation maps (notes by Jackson Van Dyke, complete PDF)"
      url: "https://web.ma.utexas.edu/users/vandyke/notes/242_notes/lecture21.pdf"
      locator: "Lecture 21, Sec. 1.2: definition of psi counting m^V(p_1,p_0) with signs or modulo two, p. 2 of the lecture"
    - title: "Udhav Fowdar, A Functional Analytic Approach to Morse Homology (UCL 4th-year project, complete PDF, 93 pp.)"
      url: "https://www.mathematik.hu-berlin.de/~wendl/pub/Fowdar.pdf"
      locator: "Ch. 8, Definition 8.2 and the preceding definition of the pairing via characteristic signs, pp. 69-71"
verification:
  precheck: n/a
---

## Definition

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $(f_s,g_s)$ be a regular continuation datum from $(f^-,g^-)$ to
$(f^+,g^+)$ on a closed manifold $M$
([[def-regular-continuation-datum-between-morse-smale-pairs]],
[[def-morse-smale-pair]]).

Over $\mathbb Z/2$, for every $k$ define
$$\Phi_k:CM_k(f^-,g^-;\mathbb Z/2)\to CM_k(f^+,g^+;\mathbb Z/2),\qquad \Phi_k(p)=\!\!\sum_{q\in\operatorname{Crit}_k(f^+)}\!\!\#\mathcal C(p,q)\cdot q,$$
extended linearly ([[def-mod-two-morse-chain-group]]). The coefficient sum is
finite because for $\operatorname{ind}(p)=\operatorname{ind}(q)$ the moduli
space $\mathcal C(p,q)$ is compact and zero-dimensional, hence finite
([[thm-continuation-trajectories-are-compact-up-to-breaking]], part 3), and
each critical set is finite
([[cor-a-morse-function-on-a-compact-manifold-has-finitely-many-critical-points]],
[[def-nondegenerate-critical-point-nullity-index-and-coindex]]). Only index-matched pairs are counted: negative index difference gives an
empty space, while positive index difference may give a nonempty
positive-dimensional space, which has no zero-dimensional count in this
definition. Thus $\Phi_k$ preserves degree by its displayed formula.

Over $\mathbb Z$ fix
an orientation (a positive ray in the orientation line) at every critical point of both pairs
([[def-orientation-line-of-a-morse-critical-point]]). Define, with the signs
$\tau$ of [[lem-orientation-lines-orient-continuation-moduli-spaces]],
$$\Phi_k:CM_k(f^-,g^-;\mathbb Z)\to CM_k(f^+,g^+;\mathbb Z),\qquad \Phi_k(p)=\!\!\sum_{q\in\operatorname{Crit}_k(f^+)}\Bigl(\sum_{u\in\mathcal C(p,q)}\tau(u)\Bigr)q,$$
extended linearly ([[def-signed-morse-differential-over-the-integers]]). Here
too the inner sum is finite by compactness and the dimension formula, and the
outer sum is finite by finiteness of the critical set. The modules are over
$\mathbb Z$ with the scalar action of [[def-integers]] and over
$\mathbb Z/2=\mathbb Z/2\mathbb Z$ with the scalar action of
[[def-integers-modulo-n]] ([[def-left-and-right-modules]]).

In both cases $\Phi=(\Phi_k)_k$ is a well-defined homomorphism of graded
modules, called the **continuation map** of the datum. It records the datum,
not only its two ends, and it is not induced by a time-translation quotient.
The continuation equation is generally not translation invariant; for constant
data it is autonomous, and the same unquotiented counting convention applies. That $\Phi$ is a
chain map is proved separately on this page
([[lem-orientation-lines-orient-continuation-moduli-spaces]] is used only for
the signs in the integral branch).

The metric-end complexes in these formulas are supplied by
[[lem-metric-morse-smale-end-counts-form-chain-complexes]]. That lemma extends
the same finite count and ordered sign conventions to arbitrary metric ends;
it does not assume a normalized Morse-coordinate form for their gradients.
