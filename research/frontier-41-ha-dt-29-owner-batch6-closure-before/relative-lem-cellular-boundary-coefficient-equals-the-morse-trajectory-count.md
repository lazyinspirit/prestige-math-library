---
id: lem-cellular-boundary-coefficient-equals-the-morse-trajectory-count
kind: lemma
title: "Cellular boundary coefficients are the signed trajectory counts"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: literature-derived
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

**Given:** The Axiom of Choice and Morse--Smale data $(f,X)$ on a closed manifold or compact cobordism triad as in [[lem-compactified-unstable-manifolds-give-a-cw-decomposition]], with critical points $p,q$ of consecutive index.

[F1] The compactified unstable manifold $\overline W{}^u(p)$ is a closed disk with interior $W^u(p)$, and its boundary is stratified as $\partial\overline W{}^u(p)=\mathcal E_p\sqcup\bigsqcup_{r}\mathcal M(p,r)\times\overline W{}^u(r)$; the attaching map of the cell $e_p$ is $\Phi_p|_{\partial\overline W{}^u(p)}$, which on the stratum $\mathcal M(p,q)\times\overline W{}^u(q)$ is the projection $(\gamma,x)\mapsto\Phi_q(x)$ onto its closed cell. Other strata may map to another cell of the same dimension as $e_q$, as well as to lower-dimensional cells or $M_0$; all of these are collapsed in the incidence map for $e_q$ ([[lem-compactified-unstable-manifolds-give-a-cw-decomposition]]).

[F2] When $\operatorname{ind}(p)\ge2$, the incidence coefficient $[e_p:e_q]$ is the degree of the map $S^{\operatorname{ind}(p)-1}\to S^{\operatorname{ind}(p)-1}$ obtained by collapsing the complement of the open cell $e_q$ in the skeleton and composing with the attaching map ([[def-incidence-number-of-two-cw-cells]], [[thm-cellular-boundary-is-the-incidence-degree-matrix]], [[def-oriented-cellular-chain-group]]). In degree one it is the coefficient of the endpoint boundary of the oriented interval, expressed in the chosen oriented vertex basis; this follows directly from the connecting-map definition of [[def-cellular-boundary-from-three-consecutive-skeleta]].

[F3] The stratum $\mathcal M(p,q)$ is finite and the projection $\mathcal M(p,q)\times\overline W{}^u(q)\to\overline W{}^u(q)$ is a homeomorphism on each summand, so the degree of [F2] is the sum over the finitely many trajectories of the local degree of the projection at that trajectory ([[cor-index-one-trajectory-moduli-spaces-are-finite]], [[lem-evaluation-on-a-regular-level-identifies-unparametrized-trajectories]], [[prop-a-transverse-oriented-normal-bundle-orients-an-embedded-submanifold]]).

[F4] The local degree at a trajectory compares the outward-normal-first boundary orientation of the closed disk $\overline W{}^u(p)$ with the product orientation of $\mathcal M(p,q)\times\overline W{}^u(q)$ and the orientation of $\overline W{}^u(q)$; the comparison is exactly the trajectory sign $\epsilon(\gamma)$ fixed by the orientation lines, up to a single sign depending only on $\operatorname{ind}(p)$ ([[lem-unstable-orientations-induce-trajectory-moduli-orientations]], [[def-induced-boundary-orientation]], [[def-product-orientation]], [[def-orientation-line-of-a-morse-critical-point]]).

[F5] Over $\mathbb Z/2$ orientations are irrelevant and the Morse coefficient is the cardinality of $\mathcal M(p,q)$ modulo two ([[def-mod-two-morse-differential]], [[def-signed-morse-differential-over-the-integers]]).

## Proof

**Proof technique:** direct.

1.1 Fix $p,q$ with $\operatorname{ind}(p)=\operatorname{ind}(q)+1$. By [F1] the attaching map of the cell $e_p$ carries the boundary stratum $\mathcal M(p,q)\times\overline W{}^u(q)$ onto the closed cell $e_q$ by the projection to the second factor, Other strata may meet other cells of index $\operatorname{ind}(p)-1$; every point outside the open cell $e_q$ is collapsed in the incidence map for $e_q$. [F1, given]

2.1 For $\operatorname{ind}(p)\ge2$, by [F2] the incidence coefficient $[e_p:e_q]$ is the degree of the composite of this attaching map with the collapse of the complement of $e_q$ in the $(\operatorname{ind}(p)-1)$-skeleton; since the complement of $e_q$ is collapsed, the only contributions come from the stratum of step 1.1, and the degree there is the sum of the local degrees of the projection at the finitely many points of $\mathcal M(p,q)$ by [F3]. [F2, F3, step 1.1]

2.2 If $\operatorname{ind}(p)=1$, its characteristic disk is an oriented interval. Its endpoint boundary gives sign $+1$ at the terminal end and $-1$ at the initial end in canonical vertex generators. The flow points outward at both ends, so its comparison with the oriented unstable interval has precisely these signs. Replacing the orientation of the normal zero-space at a minimum $q$ by its opposite reverses the Morse comparison sign; replacing its oriented cellular generator by its opposite likewise reverses the endpoint coefficient. Thus the two coefficients agree for every supplied vertex orientation, with $\varepsilon_1=1$; if both ends attach to the same vertex, both sums cancel. [F2, F4, step 1.1, algebra]

3.1 By [F4] each local degree equals the trajectory sign $\epsilon(\gamma)$ times one and the same sign $\varepsilon_{\operatorname{ind}(p)}$ determined by the dimension: the outward-normal-first orientation of the boundary sphere of the disk $\overline W{}^u(p)$ differs from the product orientation of $\mathcal M(p,q)\times\overline W{}^u(q)$ by a factor that depends only on the dimension, and the orientation comparison at the trajectory supplies exactly $\epsilon(\gamma)$. Hence the degree of step 2.1 is $\varepsilon_{\operatorname{ind}(p)}\sum_{\gamma\in\mathcal M(p,q)}\epsilon(\gamma)=\varepsilon_{\operatorname{ind}(p)}n_X(p,q)$ in the integral case. [F4, step 2.1, step 2.2, algebra]

3.2 Over $\mathbb Z/2$ all orientation signs are dropped and the same computation gives the incidence coefficient $\#\mathcal M(p,q)\bmod 2$ by [F5], so the mod-two incidence number equals the mod-two Morse coefficient and the identity on generators maps the Morse differential to the cellular differential. [F5, step 2.1, step 2.2]

4.1 For the integral case define $\varepsilon'_p:=\prod_{j=1}^{\operatorname{ind}(p)}\varepsilon_j$ with $\varepsilon_j$ the dimension sign of step 3.1. The diagonal change of basis $e_p\mapsto\varepsilon'_p e_p$ conjugates the cellular differential: the coefficient of $e_q$ in the boundary of $\varepsilon'_p e_p$ becomes $\frac{\varepsilon'_q}{\varepsilon'_p}[e_p:e_q]=\varepsilon_{\operatorname{ind}(p)}^{-1}\varepsilon_{\operatorname{ind}(p)}n_X(p,q)=n_X(p,q)$, so after this basis change the cellular boundary matrix equals the matrix $(n_X(p,q))$ of the Morse differential. [step 3.1, algebra]

5.1 Combining steps 3.2 and 4.1 with [[thm-cellular-boundary-is-the-incidence-degree-matrix]] identifies the two boundary matrices in both coefficient cases, which is the asserted coefficient comparison and the assertion that the identity (respectively the sign-normalized identity) on generators is a chain map. [step 3.2, step 4.1] ∎
