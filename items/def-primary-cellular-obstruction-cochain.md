---
id: def-primary-cellular-obstruction-cochain
kind: definition
title: Primary cellular obstruction cochain
status: published
origin: pipeline
deps: ["lem-extending-a-map-over-one-cell-is-equivalent-to-nullhomotoping-its-attaching-sphere", "def-homotopy-group-local-system-along-a-cellular-map", "def-singular-and-cellular-chain-complexes-with-local-coefficients"]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: James Davis and Paul Kirk, Lecture Notes in Algebraic Topology
      url: https://www.maths.gla.ac.uk/~mpowell/Davis_Kirk_Lecture%20notes%20in%20algebraic%20topology.pdf
      locator: Chapter 7, Sections 7.2--7.3, printed pages 168--173
    - title: Haynes Miller, MIT 18.906 Algebraic Topology II lecture notes
      url: https://ocw.mit.edu/courses/18-906-algebraic-topology-ii-spring-2020/e8a061a73ca1a451df8809c7a7fbc846_MIT18_906S20_notes.pdf
      locator: Lecture 15, printed pages 48--49
---

## Definition

Let $n\geq1$, let $(X,A)$ be a CW pair, and let
$f:X^n\cup A\to Y$. Assume either $n\geq2$, with a fixed extension
$\mathcal P$ to $X$ of the local system $f^*\Pi_nY$ on $X^n\cup A$, or
$n=1$, with the abelian trivial-conjugation coefficient system specified in
the preceding definition.

Supply cellular coefficient coordinates: an orientation and lift of every
relative $(n+1)$-cell and the corresponding whisker from its attaching-sphere
basepoint to the chosen component coordinate. If
$\Phi_e:(D^{n+1},S^n)\to(X^{n+1}\cup A,X^n\cup A)$ is the resulting based
characteristic map, define

$$ \theta(f)(e)=\text{the transport to the chosen cell coordinate of }[f\Phi_e|_{S^n}]\in\pi_n(Y,f(\Phi_e(*))). $$

This assignment is the **primary cellular obstruction cochain**

$$ \theta(f)\in C^{n+1}_{\mathrm{cell}}(X,A;\mathcal P). $$

Reversing the cell orientation negates both its cellular generator and its
coordinate value. Changing a lift by a deck transformation changes the
generator and the coefficient by the matching monodromy action, exactly as
required by the equivariant-Hom rule
$\varphi(c\cdot g)=g^{-1}\varphi(c)$. Thus the cochain is independent of the
display coordinates after the canonical basis identification.

By the one-cell extension lemma, $\theta(f)(e)=0$ exactly when $f$ extends
over that particular characteristic disk while its map on
$X^n\cup A$ is kept fixed. The cocycle and global-choice statements are not
part of this definition; they are proved below.

