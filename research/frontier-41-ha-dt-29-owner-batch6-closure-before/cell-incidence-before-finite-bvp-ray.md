---
id: lem-cellular-boundary-coefficient-equals-the-morse-trajectory-count
kind: lemma
title: "Cellular boundary coefficients are the signed trajectory counts"
status: draft
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-cellular-boundary-from-three-consecutive-skeleta, lem-compactified-unstable-manifolds-give-a-cw-decomposition, def-incidence-number-of-two-cw-cells, thm-cellular-boundary-is-the-incidence-degree-matrix, def-oriented-cellular-chain-group, def-signed-morse-differential-over-the-integers, def-mod-two-morse-differential, lem-unstable-orientations-induce-trajectory-moduli-orientations, def-orientation-line-of-a-morse-critical-point, def-induced-boundary-orientation, def-product-orientation, lem-evaluation-on-a-regular-level-identifies-unparametrized-trajectories, prop-a-transverse-oriented-normal-bundle-orients-an-embedded-submanifold, cor-index-one-trajectory-moduli-spaces-are-finite, def-morse-smale-pair, def-axiom-of-choice, def-nondegenerate-critical-point-nullity-index-and-coindex, lem-metric-end-flow-matching-gives-local-broken-charts, lem-orientation-lines-orient-continuation-moduli-spaces]
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

With the stated kernel-then-normal, flow-first and outward-normal-first orders,
the proof gives $\varepsilon_k=+1$ for every $k$; the displayed possible
dimension normalization is therefore trivial for these precise conventions.

## Facts & Assumptions

**Given:** The Axiom of Choice, the characteristic disks of the closed or adapted relative data, and the specified unstable critical rays in the integer case.

[F1] The abstract compactified unstable disks have continuous characteristic maps, with first-break faces projecting to the lower unstable disk and exits projecting to $M_0$. They give the actual relative CW core and its handle comparison ([[lem-compactified-unstable-manifolds-give-a-cw-decomposition]]).

[F2] Cellular coefficients are incidence degrees in positive target dimension and signed interval endpoint coefficients in degree one, in the chosen oriented cell bases ([[thm-cellular-boundary-is-the-incidence-degree-matrix]], [[def-cellular-boundary-from-three-consecutive-skeleta]], [[def-oriented-cellular-chain-group]]).

[F3] The trajectory sign is the ordered transverse-normal sign with the positive flow ray first. The finite matching passage normal blocks are positive and its neck outward ray is a positive multiple of the long-time direction ([[lem-unstable-orientations-induce-trajectory-moduli-orientations]], [[lem-orientation-lines-orient-continuation-moduli-spaces]], [[lem-metric-end-flow-matching-gives-local-broken-charts]], [[def-induced-boundary-orientation]], [[def-product-orientation]]).

## Proof

**Proof technique:** direct, by the ordered local projection degree.

1.1 Fix consecutive indices $\operatorname{ind}(p)=k$, $\operatorname{ind}(q)=k-1$. The relative trajectories between these interior critical points lie in a compact slab with height between $f(q)$ and $f(p)$, disjoint from the boundary. Its normalized height estimate, critical splitting and local exact matching are the interior arguments of [F1]; transversality gives zero orbit dimension and permits no broken index-drop-one limit. Thus the relevant orbit set is finite, in either the closed or relative case. The inverse image of the open cell $W^u(q)$ under the characteristic boundary map is precisely the disjoint union of the first-break sheets $\{\gamma\}\times W^u(q)$. All other boundary sheets map to other cells or to $M_0$, and the incidence collapse kills them. [F1, F2, given]

2.1 At a sheet near its lower critical centre, use the incoming cylinder normal coordinates from the disk construction of [F1]. The incoming unstable orientation has the ordered ray $or_p=\epsilon(\gamma)[X,or_q]$ by [F3]. The old cylinder goes backwards from its lower entry section into the disk, so its inward vertical ray is $-X$ and its outward bottom ray is $+X$. Outward-normal-first therefore gives the bottom normal disk the ray $\epsilon(\gamma)or_q$. The critical-crossing homeomorphism sends a small bottom disk radially and positively onto the lower unstable disk; its higher fixed cap preserves the original unstable orientation. Hence the local projection $(\gamma,x)\mapsto x$ has degree $\epsilon(\gamma)$. Equivalently, in the exact free-endpoint matching chart the ordered tangent variables are the outward long-time direction and the lower unstable variables; the passage normal block is positive by [F3], giving the identical ray comparison. Connectedness of the open lower disk keeps this sign constant throughout the sheet. No dimension-dependent permutation occurs because the outward ray was already first. [F1, F3, step 1.1, algebra]

3.1 For $k\ge2$, [F2] expresses the incidence degree as the sum of the finitely many local projection degrees of step 2.1. It is therefore $\sum_\gamma\epsilon(\gamma)=n_X(p,q)$ over the integers and the orbit cardinality modulo two. For $k=1$ the characteristic disk is an interval; the outward flow ray at each endpoint compares with its oriented tangent by terminal-minus-initial signs. Expressing the endpoint in the chosen vertex generator gives the same $\epsilon(\gamma)$ comparison of step 2.1. In particular reversing a zero-dimensional critical ray reverses both its chosen vertex generator and the Morse normal comparison; no canonical positive vertex basis is silently imposed. This proves $\varepsilon_k=1$ for every degree with the stated orders. [F2, F3, step 1.1, step 2.1, algebra]

4.1 The matrices therefore agree directly in the chosen oriented critical-cell bases. In the notation of the retained statement all normalization factors $\varepsilon'_p=\prod_{j\le\operatorname{ind}(p)}\varepsilon_j$ are one; more generally its displayed diagonal formula follows from $a_k\varepsilon_k=a_{k-1}$ for dimension signs. Equality on the finite basis gives equality of the differentials, hence the claimed chain map and cellular coefficient comparison in both coefficient cases. [F2, step 3.1, algebra] ∎
