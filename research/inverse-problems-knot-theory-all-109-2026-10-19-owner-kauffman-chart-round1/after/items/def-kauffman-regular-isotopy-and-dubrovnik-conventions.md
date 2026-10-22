---
id: def-kauffman-regular-isotopy-and-dubrovnik-conventions
kind: definition
title: Kauffman regular-isotopy and Dubrovnik conventions
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 1
deps:
  - def-oriented-crossing-sign-writhe-and-blackboard-framing
  - def-kauffman-bracket-smoothing-and-loop-value
  - lem-framed-kauffman-link-evaluation
justified_by:
  - lem-kauffman-dubrovnik-writhe-component-conversion
proof_strategy: not-applicable
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Louis H. Kauffman, An Invariant of Regular Isotopy, Transactions of the AMS 318(2) (1990), §§II, VI, VII, printed pp. 420–429 and 452–469"
      url: "https://homepages.math.uic.edu/~kauffman/IRH.pdf"
      locator: "Definition 2.4, PDF p. 7/printed p. 422; §VI, PDF pp. 38–50/printed pp. 453–465; §VII, PDF pp. 51–54/printed pp. 466–469"
    - title: "Frederick M. Goodman and Holly Hauschild, Affine Birman–Wenzl–Murakami Algebras and Tangles in the Solid Torus, §§2.1–2.3 and Definition 3.1"
      url: "https://arxiv.org/pdf/math/0411155"
      locator: "PDF pp. 4–8 and 15–16: framed and regular tangle conventions, local skein relations, and BMW coefficient relation"
    - title: "Loïc Poulain d’Andecy, Fusion for the Yang–Baxter Equation and the Braid Group, Winter Braids Lecture Notes 7 (2020), §2.2"
      url: "https://proceedings.centre-mersenne.org/item/10.5802/wbln.35.pdf"
      locator: "PDF pp. 14–15: BMW quotient, tangle interpretation, and cubic braid relation; the notes explicitly defer the precise tangle presentation"
---

## Definition

Let
$$R_D=\mathbb Z[a^{\pm1},z,d^{\pm1}]/(z(d-1)-(a-a^{-1})),$$
where $z$ is not inverted. A nonempty unoriented regular link diagram is a
finite generic planar projection of one or more circles with only transverse
double crossings and an over/under marking at each crossing. Use the crossing
chart in which the over-strand runs southwest to northeast. Its $D_0$
smoothing joins the left endpoints and the right endpoints (the through
pairing), and its $D_\infty$ smoothing joins the two top endpoints and the two
bottom endpoints (the cup-cap pairing). Thus $D_0$ is the orientation-preserving
smoothing when both crossing strands point downward and the displayed crossing
has positive determinant sign. These are respectively the $A$- and
$B$-smoothings in the stated bracket chart. A positive
curl is a type-I kink whose oriented crossing has determinant sign $+1$; a
negative curl has determinant sign $-1$. The sign is unchanged if the
orientation of the whole component is reversed.

The Dubrovnik regular-isotopy evaluation $P$ is normalized by
$P(\varnothing)=1$, $P(K\sqcup\bigcirc)=dP(K)$, positive and negative curl
factors $a$ and $a^{-1}$, and
$$P(D_+)-P(D_-)=z\bigl(P(D_0)-P(D_\infty)\bigr).$$
Here $D_+$ and $D_-$ differ only by switching the displayed crossing. For a
nonempty oriented link diagram $K$, let $c(K)$ be its number of components and
let $w(K)$ be the sum of the determinant crossing signs. Define
$$D_K(a,z)=d^{-1}P(K),$$
$$L_K(A,Z)=-i^{w(K)}(-1)^{c(K)}D_K(-iA,iZ),\qquad i^2=-1,$$
and
$$F_K(A,Z)=A^{-w(K)}L_K(A,Z).$$
Thus $D$ has unknot value $1$, and the universal relation defining $R_D$ is
retained even when $z$ is not invertible. These are conventions and
normalizations; ambient-isotopy invariance of $F$ is a separate theorem.

## Definition references

[[def-oriented-crossing-sign-writhe-and-blackboard-framing|Determinant crossing sign and writhe]]

[[def-kauffman-bracket-smoothing-and-loop-value|Kauffman bracket smoothing chart]]

[[lem-framed-kauffman-link-evaluation|Scalar regular-isotopy evaluation and universal coefficient relation]]

[Kauffman, *An Invariant of Regular Isotopy* (1990)](https://homepages.math.uic.edu/~kauffman/IRH.pdf)

[Goodman and Hauschild, *Affine Birman–Wenzl–Murakami Algebras and Tangles in the Solid Torus*](https://arxiv.org/pdf/math/0411155)

[Poulain d’Andecy, *Fusion for the Yang–Baxter Equation and the Braid Group* (2020)](https://proceedings.centre-mersenne.org/item/10.5802/wbln.35.pdf)
