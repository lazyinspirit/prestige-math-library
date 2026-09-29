---
id: def-borel-character-equivariant-line-bundle
kind: definition
title: The equivariant line bundle associated to a Borel character
status: draft
origin: pipeline
landmark: false
deps:
  - def-complex-semisimple-algebraic-group-borel-and-flag-variety
  - lem-semisimple-borel-root-factorization
  - lem-semisimple-flag-torsor-zariski-charts
  - lem-semisimple-minimal-parabolic-root-subgroup
  - def-axiom-of-choice
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
sources:
  references:
    - title: "J. S. Milne, Algebraic Groups"
      url: https://www.jmilne.org/math/Books/iAG2022.pdf
      locator: "Chapters 7, 17, 20-23, especially 21.68-21.91 and 23.59"
    - title: "Michel Brion, Lectures on the Geometry of Flag Varieties"
      url: https://www-fourier.univ-grenoble-alpes.fr/~mbrion/lecturesrev.pdf
      locator: "§1.3 (line bundles on G/B, the Borel-Weil setting) and §2.1"
---

## Definition

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $G$ be the connected
simply connected complex semisimple affine algebraic group with Borel subgroup
$B=T\ltimes U$ and opposite unipotent subgroup $U^-$ of
[[def-complex-semisimple-algebraic-group-borel-and-flag-variety]] and
[[lem-semisimple-borel-root-factorization]], and let
$X=G/B$ be the flag variety with its quotient structure and its
$B$-torsor $G\to X$ of [[lem-semisimple-flag-torsor-zariski-charts]].

**Characters of the Borel.** By clause (iv) of
[[lem-semisimple-borel-root-factorization]] the restriction of characters is an
isomorphism $X^*(B)\to X^*(T)$, so a character $\lambda\in X^*(T)$ of the
maximal torus extends uniquely to a character of $B$, trivial on the unipotent
radical $U$, which is also written $\lambda$; in these notes the group law of
the character group $X^*(T)$ is written additively, so $-\lambda$ denotes the
inverse character $b\mapsto\lambda(b)^{-1}$.

**The line bundle.** Let $\mathbb C_{-\lambda}$ be the one-dimensional
$B$-module on which $b\in B$ acts by the character $-\lambda$, that is
$b\cdot v=\lambda(b)^{-1}v$. Define the associated bundle
$$\mathcal L_\lambda\;=\;G\times^B\mathbb C_{-\lambda}\;=\;(G\times\mathbb C)\big/\sim, \qquad (gb,v)\sim(g,b\cdot v),\quad g\in G,\ b\in B,\ v\in\mathbb C,$$
with the projection $\mathcal L_\lambda\to X$ induced by $(g,v)\mapsto gB$ and
the left $G$-action $g'\cdot[g,v]=[g'g,v]$. The sign convention is fixed once
and for all by this formula: the fibre of $\mathcal L_\lambda$ over a point
$gB$ is $\{[g,v]:v\in\mathbb C\}\cong\mathbb C$, on which $B$ acts through
$-\lambda$ when the point is $eB$, and the left action of $G$ commutes with
this right $B$-action, so $\mathcal L_\lambda$ is a $G$-equivariant line
bundle on $X$ with
$H^0$ and all cohomological statements attached to it computed in this
convention. In particular $\mathcal L_0=\mathcal O_X$ is the structure sheaf,
$\mathcal L_\lambda\otimes\mathcal L_\mu\cong\mathcal L_{\lambda+\mu}$ and
$\mathcal L_\lambda^\vee\cong\mathcal L_{-\lambda}$ by the corresponding
identities of one-dimensional $B$-modules.

**Example: the rank-one case.** For the simple root $\alpha$ with minimal
parabolic $P_\alpha\supseteq B$ of
[[lem-semisimple-minimal-parabolic-root-subgroup]], the fibre of the projection
$X=G/B\to G/P_\alpha$ at the point $P_\alpha$ is $P_\alpha/B\cong\mathbb P^1$,
and the restriction of $\mathcal L_\lambda$ to this projective line is computed
in [[lem-flag-line-bundle-degree-on-minimal-parabolic-fibre]]; the sign in
$\mathbb C_{-\lambda}$ is chosen so that this degree is the signed coroot
pairing $\langle\lambda,\alpha^\vee\rangle$ for the identification of
$P_\alpha/B$ with $\mathbb P^1$ fixed there. The construction of the quotient
$\mathcal L_\lambda$ above uses the local sections and local triviality of
$G\to X$ supplied by [[lem-semisimple-flag-torsor-zariski-charts]]. The Axiom of Choice is assumed
in the first sentence and is inherited from the suppliers named above; no
choice is made in the definition itself.
