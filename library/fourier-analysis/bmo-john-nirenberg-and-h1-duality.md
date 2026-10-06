---
page: bmo-john-nirenberg-and-h1-duality
title: "BMO, John-Nirenberg, and H1 Duality"
status: draft
requires: [calderon-zygmund-decomposition-and-singular-integrals, real-hardy-spaces-maximal-functions-and-atoms, the-baire-principles-of-functional-analysis, orthonormal-bases-parseval-and-fourier-series]
items:
  - def-bmo-seminorm-and-quotient-by-constants
  - lem-hilbert-and-riesz-transforms-are-calderon-zygmund-operators
  - cor-linfinity-embeds-continuously-into-bmo
  - lem-bmo-averages-on-nested-cubes-grow-at-most-logarithmically
  - lem-bmo-functions-pair-uniformly-with-hone-atoms
  - lem-john-nirenberg-stopping-cubes-have-geometric-decay
  - lem-range-truncations-preserve-bmo-seminorm
  - thm-calderon-zygmund-operators-map-linfinity-to-bmo
  - cor-hilbert-and-riesz-transforms-map-linfinity-to-bmo
  - thm-john-nirenberg-exponential-inequality
  - cor-bmo-lp-oscillation-norms-are-equivalent
  - lem-ltwo-atoms-have-uniform-hone-quasinorm
  - lem-mean-zero-ltwo-functions-on-a-cube-embed-continuously-in-hone
  - lem-finite-atomic-sums-are-dense-in-hone
  - lem-hone-functional-has-compatible-local-ltwo-representatives
  - lem-linfinity-bmo-functions-dualise-hone-boundedly
  - lem-the-dual-representative-has-uniform-bmo-oscillation
  - thm-bmo-defines-a-bounded-functional-on-hone
  - lem-bmo-classes-are-determined-by-their-atom-pairings
  - thm-real-hone-bmo-duality
examples: []
---

This page develops the space $\mathrm{BMO}(\mathbb R^n)$ of bounded mean
oscillation modulo constants, the John-Nirenberg exponential inequality, and
the duality $(H^1(\mathbb R^n))^*\cong\mathrm{BMO}(\mathbb R^n)/\mathbb C$ of
the real Hardy space $H^1$ of the companion FR-9 page. The definition fixes
the cube-based seminorm and the quotient by the constants, with the mean
recorded as the optimal constant up to the factor $2$; the zero seminorm is
exactly the class of the constants. Two elementary tools are developed first:
nested-cube averages grow at most logarithmically, and range truncations
preserve the seminorm up to the constants $3/2$, $9/4$ and $9/2$ that the
Banach-Alaoglu step needs.

The John-Nirenberg theory is proved by recursive stopping on the
all-generations dyadic grid at a fixed height $s>\|b\|_{\mathrm{BMO}}$: the
generation-$k$ cubes decay geometrically in measure, and off them the
oscillation is at most $k2^ns$, which integrates to the exponential tail bound
and, through layer cake, to the equivalence of the $L^q$ oscillation norms for
every $1\le q<\infty$. A separate local/far kernel decomposition, together with the $L^2$ bound,
proves the endpoint result at the other end of the scale: every Calderon-Zygmund operator
with a standard Holder kernel maps $L^\infty$ into $\mathrm{BMO}$ modulo
constants, and the Hilbert and Riesz transforms are verified to be such
operators, closing the $L^\infty$ endpoint left open by the preceding pages.

The second half of the page proves the duality. Atoms pair boundedly with BMO
functions, $L^2$-normalised atoms and mean-zero $L^2$ functions on a cube embed
continuously into $H^1$, and finite atomic sums are dense. A bounded functional
on $H^1$ is then represented on each local mean-zero $L^2$ space by Riesz
representation, the local representatives glue to a BMO function, and their
uniform oscillation bound gives surjectivity; injectivity of the atom pairing
gives uniqueness of the class. Hence $(H^1)^*$ is isomorphic to
$\mathrm{BMO}/\mathbb C$ with equivalent norms. The proof assumes the Axiom of
Choice, used for the weak-star cluster point of the truncated
functionals in the dual of $H^1$, and implying the Countable Choice assumptions
of its suppliers; the earlier items assume only Countable
Choice or none. The companion page carries the logarithm example, the
strictness of the $L^\infty$ inclusion, the failure of global integrability,
the worked tail integration, and a recorded two-grid dyadic result.
