---
id: def-cg-recursive-sortable-projection-and-cambrian-congruence
kind: definition
title: The sortable projection kernel and the c-Cambrian quotient
status: draft
origin: pipeline
pipeline_run: frontier-42-coxeter-32
dependency_level: 27
deps:
  - def-cg-initial-letter-sortable-projection
  - thm-cg-sortable-skip-basis-cover-roots-and-chamber-unions
  - def-cg-sortable-element-skip-roots-and-cone
  - def-cg-coxeter-oriented-euler-form-and-c-sorting-word
  - def-cg-left-right-weak-order-and-descents
  - thm-cg-weak-order-meet-semilattice-and-finite-lattice
  - def-cg-finite-lattice-congruence-and-interval-projections
justified_by: [thm-cg-sortable-projection-greatest-element-and-interval-fibers]
aliases: []
proof_strategy: not-applicable
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "N. Reading and D. E. Speyer, Sortable elements in infinite Coxeter groups, arXiv:0803.2722v3 (2010); Trans. Amer. Math. Soc. 363 (2011) 699-761"
      url: "https://arxiv.org/pdf/0803.2722"
    - title: "N. Reading, Sortable elements and Cambrian lattices, arXiv:math/0512339v1 (2005); Algebra Universalis 56 (2007) 35-56"
      url: "https://arxiv.org/pdf/math/0512339"
    - title: "A. Bjorner and F. Brenti, Combinatorics of Coxeter Groups, Graduate Texts in Mathematics 231, Springer 2005"
      url: "https://sites.math.washington.edu/~billey/classes/reflection.groups/references/EntireBook.pdf"
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
---

## Definition

Let $(W,S)$ be a Coxeter system of finite type, let $c$ be a Coxeter element ([[def-cg-coxeter-oriented-euler-form-and-c-sorting-word]]) and let $\pi_c\colon W\to W$ be the sortable projection of [[def-cg-initial-letter-sortable-projection]]. By [[thm-cg-sortable-skip-basis-cover-roots-and-chamber-unions]] (1), $\pi_c$ is well defined, independent of the initial-letter choices in its recursion, idempotent and order preserving, and $\pi_c(w)$ is the unique greatest $c$-sortable element below $w$ in the right weak order $\le_R$ ([[def-cg-sortable-element-skip-roots-and-cone]] (1), [[def-cg-left-right-weak-order-and-descents]]). The right weak order on the finite group $W$ is a lattice with meet $\wedge$ and join $\vee$ ([[thm-cg-weak-order-meet-semilattice-and-finite-lattice]]).

**(1) Sortable equivalence and quotient order.** Define the **sortable equivalence** $\sim_c$ on $W$ by

$$x\sim_c y:\iff \pi_c(x)=\pi_c(y),$$

write $[x]_c:=\{y\in W:\pi_c(y)=\pi_c(x)\}$ for the $\sim_c$-class of $x$ and $W/{\sim_c}:=\{[x]_c:x\in W\}$, and let $p_c\colon W\to W/{\sim_c}$, $p_c(x):=[x]_c$, be the quotient map. The **sortable quotient order** on $W/{\sim_c}$ is

$$[x]_c\le_c[y]_c:\iff \pi_c(x)\le_R\pi_c(y).$$

This is independent of the chosen representatives because each class has a single $\pi_c$-image; it is the order induced by $\le_R$ on the image of $\pi_c$.

**(2) Proposed quotient operations.** On classes define

$$[x]_c\vee[y]_c:=[x\vee y]_c,\qquad [x]_c\wedge[y]_c:=[x\wedge y]_c,$$

the **proposed quotient operations** of [[def-cg-finite-lattice-congruence-and-interval-projections]] (1) specialized to the weak-order lattice $W$.

**(3) Scope and abstentions.** The set $W/{\sim_c}$ with the order (1) and the operations (2) is the **sortable quotient** of the finite weak order; throughout this library **c-Cambrian quotient** (or **Cambrian quotient**) denotes this sortable-kernel construction and nothing else. The definition asserts only the displayed constructions: it does not assert that the proposed operations are independent of the chosen representatives (equivalently, that $\sim_c$ is a lattice congruence), that every class is an interval of $\le_R$, that $\pi_c$ preserves meets and joins, or that $p_c$ is a lattice homomorphism. Those statements are proved in [[thm-cg-sortable-meet-join-closure-and-cambrian-quotient]] and [[thm-cg-sortable-projection-greatest-element-and-interval-fibers]]; the well-definedness target of this definition recorded in its justification is the second of these. The quotient is not identified here with the separate least lattice congruence contracting the oriented rank-two cover pairs determined by the rank-two orientations induced by $c$ ([[def-cg-coxeter-oriented-euler-form-and-c-sorting-word]] (2)); that identification is not asserted. No claim about noncrossing partitions, cluster fans, associahedra or $W$-Catalan counting is made. No Choice is used.
