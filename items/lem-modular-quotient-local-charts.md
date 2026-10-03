---
id: lem-modular-quotient-local-charts
kind: lemma
title: "Local charts and the Riemann surface structure of a modular quotient"
status: draft
origin: pipeline
deps:
  - def-modular-group-action-on-the-upper-half-plane
  - thm-standard-fundamental-domain-for-the-modular-group
  - lem-modular-group-reduction-to-the-standard-domain
  - def-quotient-topology
  - thm-quotient-universal-property
  - thm-continuity-characterisations-top
  - def-continuous-map-top
  - def-homeomorphism-and-open-maps
  - lem-homeomorphism-criteria
  - def-holomorphic-and-meromorphic-map-of-riemann-surfaces
  - def-riemann-surface-and-holomorphic-atlas
  - thm-local-normal-form-holomorphic-map
  - lem-nonzero-derivative-gives-local-biholomorphism
  - def-biholomorphic-map
  - thm-classification-mobius-transformations
  - thm-subgroups-of-cyclic-groups-are-cyclic
  - def-group-action
  - thm-taylor-expansion-holomorphic-function
  - cor-injective-holomorphic-derivative-nonzero
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "C. T. McMullen, Advanced Complex Analysis, Math 213a course notes (Harvard, 2010)"
      url: "https://people.math.harvard.edu/~ctm/home/text/class/harvard/213a/10/html/home/course/course.pdf"
      locator: "Section 5.3, Theorem 5.26 and the level-two discussion, printed pp. 93–96: orbifold background; the full chart proof is local."
    - title: "J. S. Milne, Modular Functions and Modular Forms (v1.31, 2017)"
      url: "https://www.jmilne.org/math/CourseNotes/MF.pdf"
      locator: "Proposition 2.5, Corollary 2.6 and Proposition 2.7, printed pp. 27–28; Examples 2.19–2.20 and the quotient charts, pp. 35–37."
---

## Statement

Let $\Gamma\le PSL_2(\mathbb Z)$ have finite index, with quotient map $p:\mathfrak H\to\Gamma\backslash\mathfrak H$.
(a) For every $\tau$ there is an open neighbourhood $U$ of $\tau$ such that $\{\gamma\in\Gamma:\gamma U\cap U\ne\varnothing\}=\operatorname{Stab}_\Gamma(\tau)$; stabilisers are finite cyclic, distinct orbits have disjoint invariant neighbourhoods, and $p$ is open with Hausdorff quotient.
(b) $\Gamma\backslash\mathfrak H$ carries a Riemann surface structure for which $p$ is holomorphic and which is unique with that property: at a point with trivial stabiliser the local inverse of $p$ is a chart; at an elliptic point, in a local coordinate $z$ centred at it in which a generator of the stabiliser acts by $z\mapsto e^{2\pi i/\nu}z$, the $\nu$-th power $z^\nu$ descends to a chart on the quotient.

## Facts & Assumptions

**Given:** A finite-index subgroup $\Gamma\le G:=PSL_2(\mathbb Z)$ acting on $\mathfrak H$ by biholomorphisms ([[def-modular-group-action-on-the-upper-half-plane]], [[def-group-action]]).

[F1] Every point of $\mathfrak H$ is $G$-equivalent to a point of $\overline D=\{\tau:|\Re\tau|\le1/2,|\tau|\ge1\}$, and the only points of $\overline D$ with nontrivial $G$-stabiliser are $i,\omega,\omega+1$, with stabilisers cyclic of orders $2,3,3$; $G$ acts faithfully ([[thm-standard-fundamental-domain-for-the-modular-group]], [[def-modular-group-action-on-the-upper-half-plane]]).

[F2] For fixed $\tau$ and $N>0$ only finitely many pairs $(c,d)\in\mathbb Z^2$ satisfy $|c\tau+d|\le N$ ([[lem-modular-group-reduction-to-the-standard-domain]]).

[F3] A nonidentity Möbius transformation with two fixed points is conjugate to $z\mapsto\lambda z$, $\lambda\ne0,1$ ([[thm-classification-mobius-transformations]]); in a coordinate centred at a fixed point of an element of finite order $\nu$, that element acts as $z\mapsto\zeta z$ with $\zeta$ a primitive $\nu$-th root of unity, and Möbius transformations are biholomorphisms ([[def-biholomorphic-map]]).

[F4] If $f$ is holomorphic near $a$ with $f'(a)\ne0$, then $f$ is biholomorphic between suitable neighbourhoods of $a$ and $f(a)$ ([[lem-nonzero-derivative-gives-local-biholomorphism]]); a nonconstant holomorphic function has the local normal form $\phi(z)^m$ ([[thm-local-normal-form-holomorphic-map]]).

[F5] The quotient topology makes $p$ continuous and satisfies the universal property: a map out of $\Gamma\backslash\mathfrak H$ is continuous exactly when its composite with $p$ is ([[def-quotient-topology]], [[thm-quotient-universal-property]], [[thm-continuity-characterisations-top]], [[def-continuous-map-top]]). Riemann surface structures, holomorphic maps and biholomorphisms are defined by atlases and charts ([[def-riemann-surface-and-holomorphic-atlas]], [[def-holomorphic-and-meromorphic-map-of-riemann-surfaces]], [[def-homeomorphism-and-open-maps]], [[lem-homeomorphism-criteria]]).

[F7] Holomorphic functions admit convergent Taylor series; injective holomorphic functions have nonzero derivative ([[thm-taylor-expansion-holomorphic-function]], [[cor-injective-holomorphic-derivative-nonzero]]).

[F6] A subgroup of a cyclic group is cyclic ([[thm-subgroups-of-cyclic-groups-are-cyclic]]).

## Proof

1.1 For compact sets $K,L\subset\mathfrak H$, only finitely many $\gamma\in\Gamma$ satisfy $\gamma K\cap L\ne\varnothing$. Write $z\in K$, $w=\gamma z\in L$; if $y_K\le\Im z\le Y_K$, $\Im w\ge y_L>0$ and $|\Re z|\le X_K$, the height formula gives $|cz+d|^2\le Y_K/y_L$. Thus $|c|\le\sqrt{Y_K/y_L}/y_K$ and $|d|\le\sqrt{Y_K/y_L}+|c|X_K$, leaving finitely many integer bottom rows. For any fixed bottom row, all determinant-one top rows are $(a_0,b_0)+k(c,d)$, so the corresponding maps are $\gamma_0 z+k$; the real parts of $\gamma_0(K)$ and $L$ are bounded, leaving finitely many $k$. Apply this to a closed small disc about $\tau$. The stabiliser is finite cyclic: conjugation into $\overline D$ and [F1, F6] identify it with a subgroup of a cyclic group of order $1,2$ or $3$. For each of the finitely many non-stabilising maps meeting that disc, disjointness of its image of $\tau$ and $\tau$ permits shrinking the neighbourhood. Intersect its images under the finite stabiliser to obtain an invariant open $U$ with $\gamma U\cap U\ne\varnothing$ exactly for stabiliser elements. [F1, F2, F6, given, algebra]

2.1 If $q,q'\in\Gamma\backslash\mathfrak H$ are distinct, choose $\tau,\tau'$ with $p(\tau)=q$, $p(\tau')=q'$; the set $\{\gamma\in\Gamma:\gamma B(\tau,\delta)\cap B(\tau',\delta)\ne\varnothing\}$ is finite for small $\delta$ by the same boundedness argument as in 1.1, and no element of it carries $\tau$ to $\tau'$ because $q\ne q'$; shrinking $\delta$ therefore gives disjoint open neighbourhoods $U,U'$ of $\tau,\tau'$ with $\gamma U\cap U'=\varnothing$ for all $\gamma\in\Gamma$. Then $\Gamma U$ and $\Gamma U'$ are disjoint $\Gamma$-invariant open sets, so $q,q'$ have disjoint neighbourhoods and the quotient is Hausdorff. The map $p$ is open: for open $V\subseteq\mathfrak H$, the preimage $p^{-1}(p(V))=\bigcup_{\gamma\in\Gamma}\gamma V$ is open, so $p(V)$ is open by definition of the quotient topology. [F5, step 1.1, given, algebra]

3.1 Construction of charts. If $\operatorname{Stab}_\Gamma(\tau)=\{1\}$, take $U$ as in 1.1; then $p|_U$ is injective, $p(U)$ is open by 2.1, and $p|_U^{-1}$ is a homeomorphism onto its image by [F5]; declare it a chart, and $p$ is the identity map in these coordinates. If $\operatorname{Stab}_\Gamma(\tau)=\langle\gamma_0\rangle$ has order $\nu>1$, then $\nu\in\{2,3\}$ by 1.1; by [F3] there is a biholomorphic coordinate $z$ on a disc $\Delta$ centred at $\tau$, $z(\tau)=0$, in which $\gamma_0$ acts by $z\mapsto\zeta z$ with $\zeta$ a primitive $\nu$-th root of unity. Choose $\Delta$ so that $\{\gamma:\gamma\Delta\cap\Delta\ne\varnothing\}=\langle\gamma_0\rangle$; then $z_1^\nu=z_2^\nu$ for $z_1,z_2\in\Delta$ exactly when $z_2=\zeta^kz_1$ for some $k$ (both are $\nu$-th roots of the same number), so $\psi:=z^\nu$ induces a bijection $\Delta/\langle\gamma_0\rangle\to\Delta'$ onto a disc $\Delta'$ and this bijection is a homeomorphism by [F5]; since $p(\Delta)=\Delta/\langle\gamma_0\rangle$, the induced map $p(\Delta)\to\Delta\prime$ is a chart on the quotient. In these coordinates $p$ is the holomorphic map $z\mapsto z^\nu$, so $p$ is holomorphic for the atlas. [F3, F4, F5, step 2.1, given, algebra]

4.1 Transition maps are holomorphic away from elliptic centres by the local inverse theorem [F4]. At a centre of order $\nu$, a quotient-coordinate function pulled back to the uniformising coordinate has a holomorphic Taylor series $h(z)$ invariant under $z\mapsto\zeta z$; coefficient comparison gives $h(z)=\sum_{m\ge0}a_{m\nu}z^{m\nu}=g(z^\nu)$, with $g$ holomorphic. Indeed its power series converges for $|z^\nu|<r^\nu$ whenever $h$ converges for $|z|<r$. This proves transition holomorphy also at the centre. Any other surface structure making $p$ holomorphic has the same property for the pullback of each of its charts, so its charts are holomorphic functions of our quotient charts. These functions are injective, since both charts are homeomorphisms; their derivatives are therefore nonzero and their inverses are holomorphic. The two maximal atlases agree, proving uniqueness. The quotient is second countable: images under the open map $p$ of a countable disc basis of $\mathfrak H$ form a basis; it is connected as the continuous image of $\mathfrak H$. Thus the atlas defines a Riemann surface with all the topological hypotheses. [F4, F5, F7, step 3.1, algebra] ∎
