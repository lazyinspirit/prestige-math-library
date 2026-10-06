---
id: lem-cellular-boundary-coefficient-equals-the-morse-trajectory-count
kind: lemma
title: "Cellular boundary coefficients are the signed trajectory counts"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-supplied
deps: [def-cellular-boundary-from-three-consecutive-skeleta, lem-compactified-unstable-manifolds-give-a-cw-decomposition, def-incidence-number-of-two-cw-cells, thm-cellular-boundary-is-the-incidence-degree-matrix, def-oriented-cellular-chain-group, def-signed-morse-differential-over-the-integers, def-mod-two-morse-differential, lem-unstable-orientations-induce-trajectory-moduli-orientations, def-orientation-line-of-a-morse-critical-point, def-induced-boundary-orientation, def-product-orientation, lem-evaluation-on-a-regular-level-identifies-unparametrized-trajectories, prop-a-transverse-oriented-normal-bundle-orients-an-embedded-submanifold, cor-index-one-trajectory-moduli-spaces-are-finite, def-morse-smale-pair, def-axiom-of-choice, def-nondegenerate-critical-point-nullity-index-and-coindex]
justified_by: []
dependency_level: 7
proof_strategy: direct
sources:
  references:
    - title: "Michele Audin and Mihai Damian, Morse Theory and Floer Homology (complete author PDF of the English book, 628 pp.)"
      url: "https://audin.pages.math.unistra.fr/livres/audin-damian-en.pdf"
      locator: "Ch. 4 Sec. 4.9.c, first part: N(c,d) equals the number n(c,d) of trajectories, with the degree computation on the boundary of the cell, printed pp. 121-122, PDF pp. 131-132"
    - title: "Liviu I. Nicolaescu, An Invitation to Morse Theory, 2nd ed. (complete author PDF, 291 pp.)"
      url: "https://www3.nd.edu/~lnicolae/Morse2nd.pdf"
      locator: "Proposition 2.5.1 (Thom--Smale), read at PDF p. 74"
    - title: "Alexander F. Ritter, Part III Morse Homology (Cambridge lecture notes, complete author PDF, 115 pp.)"
      url: "https://people.maths.ox.ac.uk/ritter/morse-cambridge/combined.pdf"
      locator: "Lecture 21, Sec. 7.4 comparison remarks: for a self-indexing Morse function MC_* to C^{cell}_*, p maps to W^u(p), and the cellular intersection product, PDF p. 99"
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $(f,X)$ be as in
[[lem-compactified-unstable-manifolds-give-a-cw-decomposition]]; write
$e_p:=W^u(p)$ for the cell of a critical point $p$ and orient $e_p$ by the
orientation-line generator $or_p$ of $W^u(p)$ in the integral case
([[def-orientation-line-of-a-morse-critical-point]],
[[def-nondegenerate-critical-point-nullity-index-and-coindex]]); over
$\mathbb Z/2$ no orientation is used
([[def-morse-smale-pair]]). Then for all $p,q$ with
$\operatorname{ind}(p)=\operatorname{ind}(q)+1$ the incidence coefficient
$[e_p:e_q]$ in the chosen oriented cellular bases satisfies
$$[e_p:e_q]=\begin{cases}\#\mathcal M(p,q)\bmod 2,&\Lambda=\mathbb Z/2,\\[2pt] \varepsilon_{\operatorname{ind}(p)}\cdot n_X(p,q),&\Lambda=\mathbb Z,\end{cases}$$
where $n_X(p,q)=\sum_{\gamma\in\mathcal M(p,q)}\epsilon(\gamma)$ is the
integral Morse coefficient
([[def-signed-morse-differential-over-the-integers]]) and
$\varepsilon_{\operatorname{ind}(p)}\in\{\pm1\}$ is a sign depending only on
the cell dimension. Consequently the cellular boundary matrix of
[[def-oriented-cellular-chain-group]] equals the matrix $(n_X(p,q))$ of the
Morse differential after replacing the oriented basis element $e_p$ by
$\varepsilon'_p e_p$ for suitable signs
$\varepsilon'_p\in\{\pm1\}$ depending only on $\operatorname{ind}(p)$; over
$\mathbb Z/2$ the identity on generators is already a chain map
([[thm-cellular-boundary-is-the-incidence-degree-matrix]],
[[def-mod-two-morse-differential]]).

For $\operatorname{ind}(p)\ge2$ this coefficient is the oriented incidence
number of [[def-incidence-number-of-two-cw-cells]]. In degree one, write the
boundary of the oriented characteristic interval as terminal point minus
initial point, and express those points in the chosen vertex generators of
[[def-oriented-cellular-chain-group]]. Thus if a vertex generator is the
negative of its canonical point class, its coefficient changes sign. The
unsigned-vertex formula in the incidence definition uses canonical point
generators and must be adjusted for this orientation convention.

## Facts & Assumptions

**Given:** The Axiom of Choice and the retained relative or closed Morse--Smale data. The compactified characteristic disks and their ordered boundary orientation comparison remain unproved prerequisites.

[F1] For an existing oriented CW structure, cellular coefficients in degree at least two are incidence degrees; in degree one they are interval endpoint coefficients in the chosen oriented vertex basis ([[thm-cellular-boundary-is-the-incidence-degree-matrix]], [[def-cellular-boundary-from-three-consecutive-skeleta]], [[def-oriented-cellular-chain-group]]).

[F2] The trajectory signs use the ordered transverse-normal sequence and the flow-first quotient convention ([[lem-unstable-orientations-induce-trajectory-moduli-orientations]]).

## Proof

**Proof technique:** direct (partial proof attempt).

1.1 Suppose, in addition to the given data, that the unproved characteristic-disk theorem supplies an attaching map whose inverse image of the open target cell $e_q$ is the disjoint union of the sheets $\{\gamma\}\times W^u(q)$, one per rigid trajectory, and restricts on each sheet to projection onto $W^u(q)$. Then the incidence collapse kills every other stratum, including other cells of the target dimension. By [F1] its degree is the sum of the local projection degrees on these sheets. Modulo two, each degree is one, so this conditional argument gives the trajectory cardinality modulo two. [F1, given]

1.2 Suppose further that the ordered boundary-to-transverse comparison gives a common dimension sign $\varepsilon_k$ times the trajectory sign on every such sheet. Then $[e_p:e_q]=\varepsilon_k n_X(p,q)$ for $k=\operatorname{ind}(p)$. Put $a_k=\prod_{j=1}^k\varepsilon_j$, $a_0=1$, and send $p$ to $a_k e_p$. For a consecutive-index pair, $a_k\varepsilon_k=a_{k-1}$ since each sign squares to one, so the coefficient of $e_q$ in $\partial(a_k e_p)$ equals $a_{k-1}n_X(p,q)$, exactly its coefficient in the image of the Morse boundary. Thus these additional supplies would yield the claimed chain isomorphism. This proves the normalization algebra only, not the missing geometric or sign premises. [F1, F2, step 1.1, algebra] ∎

The exact missing supplies are the relative characteristic-disk theorem described in [[lem-compactified-unstable-manifolds-give-a-cw-decomposition]], including the local projection interface above, and its ordered local boundary-orientation lemma. The latter must compare the outward normal, the unstable orientation at $p$, the transported unstable normal at $q$, and the flow-first trajectory ray, and prove that its discrepancy depends only on the cell dimension. The autonomous index-two moduli boundary calculation proves a different comparison. Audin–Damian printed pp.121–122 gives the closed unsigned local-degree argument, conditional on the separate disk construction; it does not supply this relative ordered orientation interface. In degree one the endpoint coefficients must be expressed in the chosen signed vertex basis, rather than assuming canonical positive point generators. The full retained comparison remains not supplied.
