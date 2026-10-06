---
id: lem-lefschetz-numbers-of-the-two-lifts-sum-to-twice-the-base-lefschetz-number
kind: lemma
title: "The Lefschetz numbers of the two lifts sum to twice the base Lefschetz number"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-algebraic-lefschetz-number, lem-the-derivative-lift-of-a-smooth-self-map-to-the-orientation-double-cover, lem-the-orientable-double-cover-of-a-smooth-manifold, cor-cohomology-over-a-field-is-dual-to-homology-over-that-field, def-trace-of-an-endomorphism, prop-singular-chains-and-homology-are-covariantly-functorial, prop-singular-cohomology-is-contravariantly-functorial, def-covering-map-and-evenly-covered-neighbourhoods, def-deck-transformation-and-deck-group, thm-covering-space-lifting-criterion, thm-uniqueness-of-lifts-from-a-connected-space, cor-connected-cover-of-a-simply-connected-space-is-trivial, def-standard-topological-simplex-and-its-affine-face-maps, def-singular-simplex-and-singular-chain-group-with-coefficients, def-axiom-of-choice]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  scraped: []
  references:
    - title: "Allen Hatcher, Algebraic Topology (complete book PDF)"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
      locator: "§3.G, printed pp. 321-322 (the transfer tau assigns to a simplex the sum of its lifts; pi tau=n and tau pi=1+g; Proposition 3G.1 identifies the pullback with the deck invariants)"
    - title: "Allen Hatcher, Algebraic Topology (complete book PDF)"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
      locator: "§3.3, printed pp. 234-235 (the orientable double cover and its deck group Z/2)"
dependency_level: 8
---

## Statement

Assume AC ([[def-axiom-of-choice]]). Let $M$ be a connected closed smooth
$n$-manifold, $\pi:\widetilde M\to M$ its orientation double cover with deck
transformation $\tau$
([[lem-the-orientable-double-cover-of-a-smooth-manifold]]), and let
$\widetilde f:\widetilde M\to\widetilde M$ be a continuous lift of a continuous
$f:M\to M$ commuting with $\tau$ ($\pi\circ\widetilde f=f\circ\pi$,
$\tau\circ\widetilde f=\widetilde f\circ\tau$; such a lift exists when $f$ is a
local diffeomorphism, by [[lem-the-derivative-lift-of-a-smooth-self-map-to-the-orientation-double-cover]],
and need not exist otherwise). Then
$$L(\widetilde f)+L(\tau\circ\widetilde f)=2L(f),$$
where $L$ is the algebraic Lefschetz number of
[[def-algebraic-lefschetz-number]]. Equivalently, if
$H_*(\widetilde M;\mathbb Q)=V_+\oplus V_-$ is the eigenspace decomposition of
$\tau_*$ with eigenvalues $+1$ and $-1$, then $\pi_*$ restricts to an
isomorphism $V_+\cong H_*(M;\mathbb Q)$ that conjugates
$\widetilde f_*|_{V_+}$ to $f_*$, and
$$L(\widetilde f)+L(\tau\circ\widetilde f)=2\sum_i(-1)^i\operatorname{tr}\bigl(\widetilde f_*|V_+^i\bigr)=2L(f).$$

## Facts & Assumptions

**Given:** A connected closed smooth $n$-manifold $M$, its orientation double cover $(\widetilde M,\pi,\tau)$, a continuous $f:M\to M$ and a $\tau$-commuting lift $\widetilde f$.

[F1] $\pi$ is a two-sheeted covering with deck transformation $\tau$, $\tau^2=\mathrm{id}$ and $\pi\circ\tau=\pi$ ([[def-covering-map-and-evenly-covered-neighbourhoods]], [[def-deck-transformation-and-deck-group]], [[lem-the-orientable-double-cover-of-a-smooth-manifold]]).

[F2] For a singular simplex $\sigma:\Delta^k\to M$ the set of lifts through $\pi$ has exactly two elements: the standard simplex is connected and simply connected, so the lifting criterion gives a lift once the image of a vertex is chosen, and lifts from a connected space are unique ([[thm-covering-space-lifting-criterion]], [[thm-uniqueness-of-lifts-from-a-connected-space]], [[cor-connected-cover-of-a-simply-connected-space-is-trivial]], [[def-standard-topological-simplex-and-its-affine-face-maps]], [[def-singular-simplex-and-singular-chain-group-with-coefficients]]).

[F3] Singular chains and homology are covariantly functorial, and singular cohomology is contravariantly functorial ([[prop-singular-chains-and-homology-are-covariantly-functorial]], [[prop-singular-cohomology-is-contravariantly-functorial]]); $L$ is the alternating trace sum over rational homology, well defined because the rational homology of a closed manifold is finite-dimensional and vanishes above degree $n$ ([[def-algebraic-lefschetz-number]]).

[L1] Over a field, cohomology is dual to homology, and the trace of the dual endomorphism equals the trace of the original; the alternating trace may be computed in either ([[cor-cohomology-over-a-field-is-dual-to-homology-over-that-field]], [[def-trace-of-an-endomorphism]]).

## Proof

1.1 The transfer. For a singular simplex $\sigma$ let $T_\#(\sigma)$ be the sum of its two lifts through $\pi$; the sum over the full lift set is independent of any selection, so it defines a rational-linear map $T_\#:C_*(M;\mathbb Q)\to C_*(\widetilde M;\mathbb Q)$. It is a chain map: restriction to a face bijects the lift set of $\sigma$ with the lift set of its faces, since a lift of a face extends uniquely along the inclusion of the connected, simply connected simplex, so boundaries commute with $T_\#$. By [F1] and [F2], $\pi_\#T_\#=2\,\mathrm{id}$ and $T_\#\pi_\#=\mathrm{id}+\tau_\#$ on chains, hence on homology $\pi_*T_*=2\,\mathrm{id}$ and $T_*\pi_*=\mathrm{id}+\tau_*$. Also $\tau_*T_*=T_*$ because the deck involution exchanges the two summands of every transfer.  [given, F2, F3]

2.1 The invariant decomposition. Since $\tau^2=\mathrm{id}$, the involution $\tau_*$ of $H_*(\widetilde M;\mathbb Q)$ has eigenvalues $\pm1$ and splits the space as $V_+\oplus V_-$. From step 1.1, $T_*(y)/2\in V_+$ and $\pi_*(T_*(y)/2)=y$ for every $y$, so $\pi_*|_{V_+}$ is surjective; and $\pi_*|_{V_+}$ is injective, because $\pi_*x=0$ with $x\in V_+$ gives $0=T_*\pi_*x=x+\tau_*x=2x$; hence $\pi_*$ restricts to an isomorphism $V_+\to H_*(M;\mathbb Q)$. Naturality $\pi_*\widetilde f_*=f_*\pi_*$ conjugates $\widetilde f_*|_{V_+}$ to $f_*$, and because $\widetilde f$ commutes with $\tau$ the map $\widetilde f_*$ preserves each $V_\pm$. [step 1.1]

3.1 The trace identities. By step 2.1, $\operatorname{tr}(\widetilde f_*|V_+^i)=\operatorname{tr}(f_*|H_i(M;\mathbb Q))$, and $(\tau\widetilde f)_*=\tau_*\widetilde f_*$ acts as $+\widetilde f_*$ on $V_+$ and $-\widetilde f_*$ on $V_-$; hence the alternating sums satisfy $L(\widetilde f)=\sum_i(-1)^i[\operatorname{tr}(\widetilde f_*|V_+^i)+\operatorname{tr}(\widetilde f_*|V_-^i)]$ and $L(\tau\widetilde f)=\sum_i(-1)^i[\operatorname{tr}(\widetilde f_*|V_+^i)-\operatorname{tr}(\widetilde f_*|V_-^i)]$, whose sum is $2\sum_i(-1)^i\operatorname{tr}(f_*|H_i(M;\mathbb Q))=2L(f)$. The same computation may be read in cohomology by [L1], which is how the source states the transfer. AC enters only through the finiteness in [[def-algebraic-lefschetz-number]]; the transfer itself is canonical and the two-lift sums involve no selection. [step 2.1, F3, L1] ∎
