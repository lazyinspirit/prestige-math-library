---
id: def-two-parameter-continuation-homotopy
kind: definition
title: "A regular two-parameter continuation datum"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-regular-continuation-datum-between-morse-smale-pairs, def-smooth-family-of-maps-and-evaluation-map, thm-parametric-transversality, thm-morse-sard-for-smooth-manifolds, thm-sard-smale-residual-regular-values-for-fredholm-maps, def-fredholm-maps-and-regular-values-on-countable-banach-manifolds, def-morse-smale-pair, def-nowhere-dense-meagre-and-residual-subsets, def-axiom-of-choice, def-countable-choice]
justified_by: []
dependency_level: 8
sources:
  references:
    - title: "Alexander F. Ritter, Part III Morse Homology (Cambridge lecture notes, complete author PDF, 115 pp.)"
      url: "https://people.maths.ox.ac.uk/ritter/morse-cambridge/combined.pdf"
      locator: "Lecture 20, Sec. 6.3 (4) with the key ideas (3): the homotopy (f^lambda_s,g^lambda_s), the parametrized space P(p^-,q^+), the warning that each fixed member need not be transverse, the finitely many exceptional parameters and the rogue trajectories, PDF pp. 95-96"
    - title: "Michael Hutchings, Math 242 Lecture 21: Invariance via continuation maps (notes by Jackson Van Dyke, complete PDF)"
      url: "https://web.ma.utexas.edu/users/vandyke/notes/242_notes/lecture21.pdf"
      locator: "Lecture 21, Sec. 1.2, Lemma 2: a generic homotopy of paths and the parametrized moduli spaces m^W(p_1,p_0) of dimension ind(p_1)-ind(p_0)+1, pp. 3-4"
    - title: "Udhav Fowdar, A Functional Analytic Approach to Morse Homology (UCL 4th-year project, complete PDF, 93 pp.)"
      url: "https://www.mathematik.hu-berlin.de/~wendl/pub/Fowdar.pdf"
      locator: "Ch. 7: the lambda-parametrised trajectories and their Fredholm setup; Ch. 8, Lemma 8.2, pp. 64-77"
verification:
  precheck: n/a
---

## Definition

Assume $\mathrm{AC}_\omega$ ([[def-countable-choice]]) for the smooth-bundle setup. Let $(f^0_s,g^0_s)$ and $(f^1_s,g^1_s)$ be two regular continuation data from
the same Morse--Smale pair $(f^-,g^-)$ to the same pair $(f^+,g^+)$ on a
closed manifold $M$ ([[def-regular-continuation-datum-between-morse-smale-pairs]],
[[def-morse-smale-pair]]).

A **two-parameter continuation datum** between them is a smooth family
$$\bigl(f^\lambda_s,\ g^\lambda_s\bigr)_{(\lambda,s)\in[0,1]\times\mathbb R}$$
such that for each $\lambda$ the pair $(f^\lambda_s,g^\lambda_s)_{s\in\mathbb R}$
is a continuation datum from $(f^-,g^-)$ to $(f^+,g^+)$, the family is
independent of $\lambda$ near $\lambda=0$ and $\lambda=1$ (where it equals the
two given data), and there is one $S>0$ such that all members equal the same ends
$(f^\pm,g^\pm)$ for $s\le-S$ and $s\ge S$
([[def-smooth-family-of-maps-and-evaluation-map]]). Its **parametrized moduli
space** is
$$\mathcal P(p,q)=\bigl\{(\lambda,u):\ \lambda\in[0,1],\ u\in\mathcal C^\lambda(p,q)\bigr\}\subset[0,1]\times C^\infty(\mathbb R,M),$$
where $\mathcal C^\lambda(p,q)$ is the continuation moduli space of the
$\lambda$-member.

The datum is **regular** if at every solution $(\lambda,u)$ the augmented
linearization
$$\mathbb R\oplus E_u\longrightarrow F_u,\qquad (a,\xi)\longmapsto D^\lambda_u\xi+a\,\partial_\lambda(\nabla^{g^\lambda_s}f^\lambda_s)(u)$$
is surjective, with the spaces and connection convention of
[[def-regular-continuation-datum-between-morse-smale-pairs]]. At the parameter
endpoints the vertical linearization is onto because the family equals a
given regular datum near each endpoint. The augmented operator has index
$\operatorname{ind}(p)-\operatorname{ind}(q)+1$: adding one domain dimension
increases the index by one, and its parameter term has finite rank. The
finite-dimensional endpoint fibre product, now with the parameter included,
therefore gives $\mathcal P(p,q)$ the structure of a smooth manifold with
boundary of that dimension. Its parameter boundary is
$\mathcal C^0(p,q)\sqcup\mathcal C^1(p,q)$; negative dimension means empty.

Regularity is a property of the specified family, not of an unspecified
perturbation. Under the Axiom of Choice ([[def-axiom-of-choice]]), a family
can be perturbed arbitrarily little in the interior, fixing both parameter
ends and the common autonomous tails, to become regular: the function
perturbations and endpoint-map transversality argument in
[[def-regular-continuation-datum-between-morse-smale-pairs]] apply with an
additional bump in $\lambda$, on countably many interior parameter charts.
Parametric transversality gives dense good parameters, and compact chart
exhaustions give residuality
([[thm-parametric-transversality]],
[[def-nowhere-dense-meagre-and-residual-subsets]]).

Under the same choice hypothesis, for a regular family Sard's theorem applied to the projections
$\mathcal P(p,q)\to[0,1]$ gives a null set of parameter values at which a
vertical linearization fails to be onto
([[thm-morse-sard-for-smooth-manifolds]]). It does not imply that this set is
finite. In particular a solution with
$\operatorname{ind}(p)-\operatorname{ind}(q)=-1$ is a **rogue trajectory**:
its fixed-parameter operator cannot be onto, but the augmented operator can
be, giving a zero-dimensional parametrized moduli space. Parametrized
compactness, gluing and orientation of these augmented operators are separate
requirements for the chain-homotopy argument; they are not supplied by
regularity of the individual members or by the fixed-datum orientation lemma.
