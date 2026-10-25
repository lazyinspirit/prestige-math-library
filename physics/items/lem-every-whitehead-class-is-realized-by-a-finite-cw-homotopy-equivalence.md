---
id: lem-every-whitehead-class-is-realized-by-a-finite-cw-homotopy-equivalence
kind: lemma
title: "Every Whitehead class is realized by a finite CW homotopy equivalence"
status: published
origin: pipeline
pipeline_run: frontier-35-ten-categories
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-k-one-of-a-ring-and-the-whitehead-group-of-a-discrete-group, def-whitehead-torsion-of-a-finite-cw-homotopy-equivalence, lem-two-relative-cell-layers-have-free-group-ring-homotopy-bases, lem-relative-hurewicz-comparison-through-a-choice-free-weak-model, thm-cellular-homology-computes-singular-homology, thm-whitehead-theorem, thm-covering-space-lifting-criterion, thm-composition-and-sum-formulas-for-whitehead-torsion, lem-high-relative-cells-do-not-change-lower-homotopy]
proof_strategy: direct
verification:
  audited: 2026-09-27
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Lück, Lemma 2.18(2), printed pp.35–36"
      url: "https://him-lueck.uni-bonn.de/data/ictp.pdf"
      locator: "Lemma 2.18(2), printed pp.35–36"
    - title: "Lurie, Remark 6, printed p.2"
      url: "https://people.math.harvard.edu/~lurie/281notes/Lecture4-Whitehead2.pdf"
      locator: "Remark 6, printed p.2"
---
## Statement

For a connected finite CW complex $X$, $\pi=\pi_1X$ and
$\eta\in\operatorname{Wh}(\pi)$, there is a finite CW complex $Y\supset X$
such that $i:X\hookrightarrow Y$ is a homotopy equivalence and
$i_*^{-1}\tau(i)=\eta$. Only relative cells in two consecutive degrees
$n,n+1$, with even $n\ge\max(4,\dim X+1)$, are needed. For a disconnected
finite $X$, a prescribed class on each of its finitely many components is
realized componentwise.

## Facts & Assumptions

**Given:** A connected finite $X$ and a Whitehead class $\eta$.

[F1] Each Whitehead class has a representative $A\in GL_m(\mathbb Z[\pi])$, with finite $m$; a zero class may be represented by an identity matrix ([[def-k-one-of-a-ring-and-the-whitehead-group-of-a-discrete-group]]).

[F2] The relative boundary of a two-high-layer pair is the matrix of the triple homotopy boundary in oriented lifted-cell bases ([[lem-two-relative-cell-layers-have-free-group-ring-homotopy-bases]]).

[F3] For a simply connected $(k-1)$-connected CW pair with nonempty simply connected base, the relative Hurewicz map $\pi_k\to H_k$ is an isomorphism without any choice principle ([[lem-relative-hurewicz-comparison-through-a-choice-free-weak-model]]).

[F4] The cellular complex of a CW pair computes its relative singular homology ([[thm-cellular-homology-computes-singular-homology]]).

[F5] A weak homotopy equivalence between **finite** CW complexes is a homotopy equivalence without any choice principle ([[thm-whitehead-theorem]]).

[F6] Attaching cells of dimension at least three preserves components and fundamental groups ([[lem-high-relative-cells-do-not-change-lower-homotopy]]); based maps from simply connected spheres lift to universal covers ([[thm-covering-space-lifting-criterion]]).

[F7] Inclusion torsion is the torsion of its based relative universal-cover complex, with two-term sign $(-1)^{q+1}$ when the upper cells have degree $q$ ([[def-whitehead-torsion-of-a-finite-cw-homotopy-equivalence]], [[thm-composition-and-sum-formulas-for-whitehead-torsion]]).

## Proof

**Proof technique:** direct.

1.1 Choose $A=(a_{ij})\in GL_m(R)$ with $R=\mathbb Z[\pi]$ representing $\eta$, allowing $m=1$ and $A=I$ for $\eta=0$. Choose an even integer $n\ge\max(4,\dim X+1)$. Attach $m$ $n$-cells by constant maps at the chosen base vertex to form $X_n=X\vee\bigvee_{j=1}^mS_j^n$. By [F6], $\pi_1X_n=\pi$ and no lower relative homotopy is introduced. [F1, F6, given]

2.1 Each $a_{ij}$ is a finite integral sum of elements of $\pi$. The $j$th wedge sphere, preceded by a based whisker representing a group element and repeated by signed pinch maps, realizes its coefficient in $\pi_n(X_n)$. Since $n\ge2$, this is an abelian group and finite sums of these maps are represented by based maps $S^n\to X_n$. For each column $j$ choose one such map $f_j$ whose relative coordinates are $(a_{1j},\ldots,a_{mj})^{\mathsf T}$; only finitely many explicit choices are needed. Attach $m$ $(n+1)$-cells along the $f_j$ to form finite $Y$. The right-module column convention and [F2] make the relative cellular differential exactly $A$. [F1, F2, step 1.1]

3.1 By [F6] the map $i:X\hookrightarrow Y$ induces a component bijection and an isomorphism on $\pi_1$. The inverse image $\widetilde X$ of $X$ in the universal cover $\widetilde Y$ is the connected universal cover of $X$: the $\pi_1$-isomorphism makes the restricted cover connected, and a loop in it maps to a null loop in $Y$ and hence is null in $X$. Both $\widetilde X$ and $\widetilde Y$ are simply connected. Their relative cellular chain complex is $0\to R^m\xrightarrow{A}R^m\to0$ in degrees $n+1,n$, so it has zero homology in every degree because $A$ is invertible. By [F4], $H_k(\widetilde Y,\widetilde X;\mathbb Z)=0$ for every $k$. [F4, F6, step 2.1]

4.1 Suppose some $\pi_k(\widetilde Y,\widetilde X)$ were nonzero and take the least such $k$. Since the pair has no relative cells below $n\ge4$, it is at least $3$-connected and $k\ge n\ge4$; its base $\widetilde X$ is simply connected. The choice-free comparison [F3] gives $\pi_k(\widetilde Y,\widetilde X)\cong H_k(\widetilde Y,\widetilde X;\mathbb Z)=0$, a contradiction. Hence all relative homotopy groups vanish. Coverings induce isomorphisms on higher homotopy groups by lifting spheres and homotopies; together with the $\pi_1$-isomorphism of step 3.1, $i$ is a weak homotopy equivalence. [F3, F6, step 3.1]

5.1 Both $X$ and $Y$ are finite, so the finite choice-free clause [F5] makes $i$ a homotopy equivalence. Its relative complex has upper degree $q=n+1$, and $n$ is even, so $(-1)^{q+1}=(-1)^{n+2}=+1$. Therefore [F7] gives $i_*^{-1}\tau(i)=[A]=\eta$. For finitely many connected components, repeat the construction separately on each component and take their finite disjoint union; no component transport or infinite choice is involved. ∎ [F5, F7, step 2.1, step 4.1]
