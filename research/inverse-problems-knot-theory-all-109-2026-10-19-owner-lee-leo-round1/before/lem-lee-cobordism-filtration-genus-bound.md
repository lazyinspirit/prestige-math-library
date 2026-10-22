---
id: lem-lee-cobordism-filtration-genus-bound
kind: lemma
title: "Lee cobordism maps give the genus filtration bound"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-abstract-oriented-knot-cobordism
  - def-locally-flat-proper-surface-and-concordance-collars
  - def-smooth-knot-concordance
  - def-lee-deformed-khovanov-complex
  - thm-lee-homology-of-a-knot-has-two-generators
  - thm-lee-filtered-homology-is-an-oriented-link-invariant
  - def-rasmussen-s-invariant
  - thm-adapted-excellent-morse-functions-exist-on-compact-cobordisms
  - def-generic-movie-of-an-oriented-knot-cobordism
  - def-countable-choice
dependency_level: 9
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "AC_omega supplies the finite adapted Morse and generic-movie choices; the finite Lee algebra checks are choice-free."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: n/a
sources:
  references:
    - title: "Jacob Rasmussen, Khovanov homology and the slice genus, arXiv:math/0402131v1"
      url: https://arxiv.org/pdf/math/0402131v1
      locator: "§§4.1–4.3, printed pp. 9–12; §6, printed pp. 15–19"
    - title: "Curtis T. McMullen, 4-Manifolds, Stanford lecture notes"
      url: https://web.stanford.edu/~cm5/4Mnotes.pdf
      locator: "§5.7, printed pp. 99–102"
---

## Statement

Assume the Axiom of Countable Choice. Let $S$ be a connected compact oriented smooth cobordism of genus $g$ from an oriented knot $K_0$ to an oriented knot $K_1$ in the standard three-sphere. A **finite movie** for $S$ is a finite ordered sequence of regular-level link diagrams whose changes are planar isotopies, oriented Reidemeister moves, births, saddles or deaths. Such a movie defines a map on rational Lee homology that preserves the induced decreasing filtration with degree $\chi(S)=-2g$. The map is an isomorphism; consequently
$$
|s(K_1)-s(K_0)|\le 2g.
$$

## Statement references

[[def-abstract-oriented-knot-cobordism|Compact oriented cobordism convention]]

[[def-smooth-knot-concordance|Smooth embeddings and product collars]]

[[thm-adapted-excellent-morse-functions-exist-on-compact-cobordisms|Finite adapted Morse decomposition]]

[[def-generic-movie-of-an-oriented-knot-cobordism|Generic movies and their elementary changes]]

[[def-lee-deformed-khovanov-complex|Lee saddle operations and filtration]]

[Rasmussen, *Khovanov homology and the slice genus* (2004), §§4.1–4.3 and §6](https://arxiv.org/pdf/math/0402131v1)

[McMullen, *4-Manifolds*, §5.7](https://web.stanford.edu/~cm5/4Mnotes.pdf)


## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, a connected smooth oriented cobordism between knots, and finite regular diagrams at its boundary.

[F1] An adapted excellent Morse function on a compact collared cobordism exists under $\mathrm{AC}_\omega$ and has finitely many critical points ([[thm-adapted-excellent-morse-functions-exist-on-compact-cobordisms]]).

[F2] A birth uses $\eta_L(1)=1$, a death uses $\epsilon_L(1)=0,\epsilon_L(X)=1$, and a saddle uses $m_L$ or $\Delta_L$ ([[def-lee-deformed-khovanov-complex]]).

[F3] Each oriented Reidemeister move induces a filtered chain homotopy equivalence of degree zero on Lee homology ([[thm-lee-filtered-homology-is-an-oriented-link-invariant]]).

[F4] The two canonical orientation classes form a basis of knot Lee homology ([[thm-lee-homology-of-a-knot-has-two-generators]]).

[A1] $\mathrm{AC}_\omega$ is the axiom used by the adapted-Morse and finite diagram/movie inputs ([[def-countable-choice]]).

[L1] The proof of canonical-class transport across Reidemeister III is incomplete in this carrier. In the crossing-pattern of Rasmussen Figure 8c, the source gives one of five possible outside-arc connectivity cases and says the other four, and the simultaneous reversal of all $a,b$ labels, have coefficients in $\{\pm1,\pm2,\pm\frac12\}$; it does not compute them. The isomorphism assertion in the Statement therefore remains unresolved. ([[thm-lee-filtered-homology-is-an-oriented-link-invariant]])

[L2] The adapted-Morse theorem [[thm-adapted-excellent-morse-functions-exist-on-compact-cobordisms]] proves that there are finitely many surface critical points, but this carrier has no proof that a generic one-parameter projection of the regular level links has only finitely many isolated Reidemeister events. The generic-movie definition [[def-generic-movie-of-an-oriented-knot-cobordism]] states the properties of such a movie; it does not prove that one exists. A generic-projection/Cerf-decomposition theorem is needed before every smooth cobordism can be represented by the finite movie used here.

## Proof

**Given:** The hypotheses of the Statement.

1.1 Under [A1], choose an adapted excellent Morse function by [F1]. Its critical set is finite. Away from those levels the surface is a product cobordism and yields a smooth one-parameter family of links. To obtain a finite planar movie, one still needs a generic projection theorem showing that this family meets the Reidemeister discriminant transversely in finitely many isolated events; that existence step is the unresolved prerequisite [L2]. Conditional on such a projection, the movie consists of planar isotopies, oriented Reidemeister moves, births, saddles and deaths. [A1, F1, L2, given, construct]

1.2 In the basis $a=1+X$, $b=X-1$, the local Morse maps are $\eta_L(1)=\tfrac12(a-b),\quad m_L(aa)=2a,\quad m_L(bb)=-2b,\quad m_L(ab)=m_L(ba)=0,\quad \Delta_L(a)=aa,\quad\Delta_L(b)=bb,\quad \epsilon_L(a)=\epsilon_L(b)=1.$ Thus a birth creates the two possible orientations with nonzero coefficients; a saddle sends every orientation compatible with its oriented band to a nonzero multiple of the induced output orientation and kills the incompatible labels; a death sends either compatible circle label to a nonzero scalar. Since $S$ is connected and has one incoming boundary knot, each orientation on $K_0$ extends to exactly one orientation of $S$, and at the outgoing boundary it determines one orientation of $K_1$. Therefore the composite sends each input orientation class to a nonzero multiple of the corresponding output orientation class, provided the Reidemeister III transport assertion in [L1] holds. [F2, F4, L1, algebra]

2.1 Assign to a planar isotopy the relabeling of state circles, to a Reidemeister move the filtered map of [F3], and to a Morse event the cube map induced by the corresponding Lee Frobenius operation in [F2]. The map for a birth is $\eta_L(1)=1$, whose new circle label has quantum degree $+1$. The death map sends only the $X$ term to $1$, raising quantum degree by $+1$. Each degree-preserving term of a saddle has quantum degree $-1$, while each Lee deformation term raises that saddle degree by $4$; hence a saddle map has filtration degree $-1$. If the movie has $b$ births, $s$ saddles and $d$ deaths, composition has filtered degree $b-s+d=\chi(S)$. For a connected genus-$g$ surface with two boundary components, $\chi(S)=2-2g-2=-2g$. [F2, F3, step 1.1, algebra]

3.1 If the finite movie existence gap [L2] and local checks [L1] are supplied, step 1.2 and [F4] show that the movie map is an isomorphism between two-dimensional Lee homology groups. Its forward and reverse maps both have filtered degree $-2g$ by step 2.1. Applying the forward map to a nonzero class of level $s_{\max}(K_0)$ gives $s_{\max}(K_1)\ge s_{\max}(K_0)-2g$; applying the reverse map to a class of level $s_{\max}(K_1)$ gives $s_{\max}(K_0)\ge s_{\max}(K_1)-2g$. Since $s=s_{\max}-1$, these inequalities give $|s(K_1)-s(K_0)|\le2g$. The filtration-degree calculation for a supplied movie is proved; the existence, isomorphism and genus-bound assertions remain escalated with [L1] and [L2] and are not marked ready. [A1, F3, F4, L1, L2, step 2.1, step 1.2, algebra] ∎
