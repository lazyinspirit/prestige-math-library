---
id: def-whitehead-torsion-of-a-finite-cw-homotopy-equivalence
kind: definition
title: "Whitehead torsion of a finite CW homotopy equivalence"
status: published
origin: pipeline
pipeline_run: frontier-35-ten-categories
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-k-one-of-a-ring-and-the-whitehead-group-of-a-discrete-group, def-finite-based-free-chain-complex-and-its-contraction-torsion, lem-elementary-basis-changes-orientations-and-deck-lift-changes-die-in-the-whitehead-group, lem-a-lifted-cellular-homotopy-equivalence-has-a-contractible-algebraic-mapping-cone, def-mapping-cone-of-a-chain-map, lem-universal-cover-cellular-boundary-and-lifted-maps-are-right-group-ring-linear, lem-group-rings-have-invariant-basis-number-via-augmentation, lem-contraction-torsion-is-independent-of-the-contracting-homotopy, def-chain-homotopy-equivalence, def-based-cellular-chain-complex-of-a-universal-cover, def-homotopy-equivalence, thm-cellular-approximation-for-maps-of-cw-pairs]
verification:
  audited: 2026-09-27
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Lück, Definition 2.13, pp.30–31"
      url: "https://him-lueck.uni-bonn.de/data/ictp.pdf"
      locator: "Definition 2.13, pp.30–31"
    - title: "Cohen, §22, pp.72–75"
      url: "https://math.uchicago.edu/~shmuel/tom-readings/Cohen%2C%20simple-htpy-thry.pdf"
      locator: "§22, pp.72–75"
---
## Definition

Let $f:X\to Y$ be a homotopy equivalence of finite CW complexes. Choose a vertex $x\in X$ and, after taking a cellular representative still denoted $f$, put $y=f(x)$, a vertex of $Y$; set $\pi=\pi_1(Y,y)$. Then the based induced map $f_*:\pi_1(X,x)\to\pi$ is an isomorphism ([[def-homotopy-equivalence]]). Other basepoints are compared by supplied paths in the independence theorem. Choose

- a cellular representative of $f$, again written $f:X\to Y$, and homotopies ensuring that the cellular representative is a homotopy equivalence ([[thm-cellular-approximation-for-maps-of-cw-pairs]]);
- universal covers $p:\widetilde X\to X$ and $q:\widetilde Y\to Y$, chosen points $\widetilde x,\widetilde y$ above $x,y$, and the compatible lift $\widetilde f:\widetilde X\to\widetilde Y$ with $\widetilde f(\widetilde x)=\widetilde y$ of the cellular representative ([[def-based-cellular-chain-complex-of-a-universal-cover]]);
- the based cellular chains of [[def-based-cellular-chain-complex-of-a-universal-cover]], with one oriented lift chosen for every cell of $X$ and of $Y$.

**Coefficient transport.** Transport the right $\mathbb Z[\pi_1(X,x)]$-module structure on $C_*(\widetilde X)$ along the ring isomorphism $\mathbb Z[f_*]:\mathbb Z[\pi_1(X,x)]\to\mathbb Z[\pi]$, so that $c\cdot\lambda:=c\cdot f_*^{-1}(\lambda)$ for $\lambda\in\mathbb Z[\pi]$. By [[lem-universal-cover-cellular-boundary-and-lifted-maps-are-right-group-ring-linear]] the transported boundary and the chain map $C_*(\widetilde f)$ are right $\mathbb Z[\pi]$-linear, and by [[lem-a-lifted-cellular-homotopy-equivalence-has-a-contractible-algebraic-mapping-cone]] $C_*(\widetilde f)$ is a chain homotopy equivalence of bounded complexes of finite based free right $\mathbb Z[\pi]$-modules.

**The class.** Form the algebraic mapping cone with the differential recorded in [[def-mapping-cone-of-a-chain-map]],
$$\operatorname{Cone}(C_*(\widetilde f))_n=C_n(\widetilde Y)\oplus C_{n-1}(\widetilde X),\qquad d(y,x)=\bigl(d^{\widetilde Y}y+C_{n-1}(\widetilde f)x,\,-d^{\widetilde X}x\bigr),$$
carrying in each degree the displayed basis of $C_n(\widetilde Y)$ followed by that of $C_{n-1}(\widetilde X)$, so that the target summands come first. This complex is bounded, finite based free and contractible, and $\mathbb Z[\pi]$ has invariant basis number, so the contraction torsion of [[def-finite-based-free-chain-complex-and-its-contraction-torsion]] is defined for it, is independent of the chosen contraction by [[lem-contraction-torsion-is-independent-of-the-contracting-homotopy]], and lands in $\tilde K_1(\mathbb Z[\pi])$. Define
$$\tau(f):=\text{image of }\tau\bigl(\operatorname{Cone}(C_*(\widetilde f))\bigr)\text{ in }\mathrm{Wh}(\pi)=K_1(\mathbb Z[\pi])/\langle[\pm\gamma]:\gamma\in\pi\rangle,$$
using the quotient map of [[def-k-one-of-a-ring-and-the-whitehead-group-of-a-discrete-group]]. Equivalently, $\tau(f)$ is the image of the reduced class $[\,(d+s)_{\mathrm{odd}}\,]\in\tilde K_1(\mathbb Z[\pi])$ for any contraction $s$ of the cone.

**Disconnected complexes.** If $Y$ has components $D$, write $\pi_1D$ for the fundamental group of a component at a chosen basepoint; every component of a finite CW complex has the homotopy type of a connected finite CW complex and contains a vertex, so this is defined. Since $f$ is a homotopy equivalence it maps components of $X$ bijectively onto components of $Y$, and the data above are chosen componentwise; the class
$$\tau(f)\in\bigoplus_{D\in\pi_0(Y)}\mathrm{Wh}(\pi_1D)$$
has as its $D$-component the torsion of the restriction to the component of $Y$ corresponding to $D$, computed with a basepoint in that component and its chosen lift. For connected $Y$ this is the single class defined above.

**Status.** This is a definition by chosen data: the contraction, the cellular representative, the basepoint paths, the lifts, the orientations and the order of the cells are all auxiliary. The next theorem proves that the resulting class in $\mathrm{Wh}$ does not depend on them; until then $\tau(f)$ denotes the class attached to the displayed choices. No further quotient and no further choice principle is used, the cellular representative exists choice-free for finite complexes, and all choices made here are finite except the (finite) choice of cell lifts.
