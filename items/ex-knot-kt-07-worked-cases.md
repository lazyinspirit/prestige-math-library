---
id: ex-knot-kt-07-worked-cases
kind: example
title: "Trefoil and figure-eight Alexander polynomials from Seifert matrices"
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 13
deps:
  - def-knot-seifert-pairing-and-matrix
  - def-oriented-seifert-surface
  - def-knot-connected-sum-and-prime-knot
  - lem-finite-chart-surface-normal-forms-supply-jordan-disks-and-torsion-free-groups
  - prop-the-first-hurewicz-map-in-degree-one-is-abelianization
  - lem-seifert-matrix-skew-part-is-surface-intersection
  - def-one-variable-alexander-module-of-an-oriented-link
  - thm-seifert-matrix-presents-knot-alexander-module
  - lem-seifert-matrix-s-equivalence-under-isotopy
  - def-alexander-polynomial-from-the-first-elementary-ideal
  - thm-the-alexander-polynomial-is-an-oriented-link-invariant
  - lem-square-seifert-presentation-and-alexander-normalization
  - thm-seifert-determinant-is-the-knot-alexander-polynomial
  - cor-knot-alexander-normalization-symmetry-and-genus-bound
  - cor-alexander-polynomial-multiplies-under-connected-sum
  - def-axiom-of-choice
  - def-countable-choice
  - thm-choice-implies-dependent-implies-countable-choice
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Dale Rolfsen, Knots and Links"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/rolfsen.pdf"
      locator: "Chapter 8.A–8.C, printed pp. 200–211"
    - title: "Alessia Cattabriga and Stefano Francaviglia, Knot Theory and Applications: Lecture Notes"
      url: "https://www.dm.unibo.it/~francavi/did/21-22/knot.pdf"
      locator: "§6.2.3, Example 6.2.11 and Proposition 6.2.12, printed pp. 44–47"
    - title: "Knot Theory Lecture Notes, Chapter 7: Seifert Matrices and Derived Invariants"
      url: "https://www2.math.kyushu-u.ac.jp/~saeki/Lee-Lectures.pdf"
      locator: "Examples 7.4–7.5, printed pp. 78–79; alternate ordered-core sign convention"
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
---

## Example

Assume the full Axiom of Choice. Let $T$ and $E$ be the oriented boundaries of the standard one-boundary square plumbings of two positive Hopf bands and of one positive with one negative Hopf band, respectively; these are the right-handed trefoil and the figure-eight knot. A positive Hopf band is an oriented annulus with unknotted core whose induced boundary components have linking number $+1$; its core, the central simple closed curve, has self-pairing $-1$. A negative Hopf band also has unknotted core and has boundary linking number $-1$ and core self-pairing $+1$. A square plumbing identifies a square in the boundary collars of the two annuli so that its edges alternate between them, then smooths the corners; use the gluing for which the resulting boundary is one component. Order the two cores $a,b$ with the positive Hopf core first, orient them so $a\cdot_F b=+1$, and use the standard plumbing side for which $a^+$ bounds a disk disjoint from $b$. In the positive-push convention $V_{ij}=\operatorname{lk}(a_i^+,a_j)$, their Seifert matrices are

$$V_T=\begin{pmatrix}-1&0\\-1&-1\end{pmatrix},\qquad V_E=\begin{pmatrix}-1&0\\-1&1\end{pmatrix}.$$

Their determinant representatives are $\Delta_T(t)=1-t+t^2$ and $\Delta_E(t)=-1+3t-t^2$. They both evaluate to $1$ at $t=1$; at $t=-1$ the displayed representatives evaluate to $3$ and $-5$, so the unit-invariant absolute values are $3$ and $5$. These determinant classes are unchanged up to units by oriented ambient isotopy and integral basis changes. The connected sum satisfies

$$\Delta_{T\#E}(t)\doteq(1-t+t^2)(-1+3t-t^2)=-t^4+4t^3-5t^2+4t-1.$$

This displayed representative has values $1$ at $t=1$ and $-15$ at $t=-1$.

## Example references

[[def-knot-seifert-pairing-and-matrix|Positive-push Seifert matrix entries]]

[[def-oriented-seifert-surface|Connected compact oriented spanning surfaces and the genus formula]]

[[def-one-variable-alexander-module-of-an-oriented-link|The positive-meridian Alexander module]]

[[def-alexander-polynomial-from-the-first-elementary-ideal|The polynomial generator and unit convention]]

[[def-knot-connected-sum-and-prime-knot|The oriented connected-sum operation]]

[[lem-seifert-matrix-skew-part-is-surface-intersection|The skew part records the oriented surface intersection]]

[[thm-seifert-determinant-is-the-knot-alexander-polynomial|The determinant formula]]

[[cor-knot-alexander-normalization-symmetry-and-genus-bound|Evaluation, reciprocity, and Laurent width]]

[[cor-alexander-polynomial-multiplies-under-connected-sum|Connected-sum multiplicativity]]

[Knot Theory Lecture Notes, Chapter 7, Examples 7.4–7.5; alternate ordered-core sign convention](https://www2.math.kyushu-u.ac.jp/~saeki/Lee-Lectures.pdf)

## Facts & Assumptions

**Given:** Full AC and the specified positive-positive and positive-negative Hopf-band plumbings with one boundary component.

[A1] Full AC is the choice-function axiom assumed by the Alexander-module and Seifert-matrix definitions. ([[def-axiom-of-choice]])

[F1] The positive-push matrix is $V_{ij}=\operatorname{lk}(a_i^+,a_j)$. ([[def-knot-seifert-pairing-and-matrix]])

[F2] For every ordered integral homology basis, $V-V^T=J_F$, and the surface intersection matrix $J_F$ is unimodular. ([[lem-seifert-matrix-skew-part-is-surface-intersection]])

[F3] A Seifert surface is connected, compact, smooth, oriented and embedded with its given knot as oriented boundary; a connected compact surface with one boundary has free fundamental group of rank $2g(F)$, and its first homology is the free abelianization. For genus one, this gives a free rank-two group. ([[def-oriented-seifert-surface]], [[lem-finite-chart-surface-normal-forms-supply-jordan-disks-and-torsion-free-groups]], [[prop-the-first-hurewicz-map-in-degree-one-is-abelianization]])

[F4] The positive-meridian module is presented by $V-tV^T$, its $E_0$ ideal is generated by the determinant, and that determinant is associated to the polynomial generator. ([[def-one-variable-alexander-module-of-an-oriented-link]], [[def-alexander-polynomial-from-the-first-elementary-ideal]], [[thm-seifert-matrix-presents-knot-alexander-module]], [[lem-square-seifert-presentation-and-alexander-normalization]], [[thm-seifert-determinant-is-the-knot-alexander-polynomial]])

[F5] The exponent-width convention gives $\Delta_K(1)=\pm1$ and reciprocal symmetry up to units. ([[cor-knot-alexander-normalization-symmetry-and-genus-bound]])

[F6] For oriented knots $K,J$, $\Delta_{K\#J}\doteq\Delta_K\Delta_J$. ([[cor-alexander-polynomial-multiplies-under-connected-sum]])

[F7] The connected sum uses the fixed oriented gluing convention and represents a one-component knot. ([[def-knot-connected-sum-and-prime-knot]])

[F8] Full AC implies the Axiom of Countable Choice, the surface-normal-form hypothesis. ([[thm-choice-implies-dependent-implies-countable-choice]], [[def-countable-choice]])

[F9] Ambient isotopy transports a Seifert matrix by unimodular congruence and preserves the Alexander polynomial up to a unit. ([[lem-seifert-matrix-s-equivalence-under-isotopy]], [[thm-the-alexander-polynomial-is-an-oriented-link-invariant]])

## Verification

1.1 Each plumbing has Euler characteristic $0+0-1=-1$, using a cell structure respecting the common square, since each annulus has Euler characteristic $0$ and the square has Euler characteristic $1$. Its boundary is one circle by the stipulated gluing, so $\chi=1-2g$ gives genus one. By [F3], $H_1(F;\mathbb Z)$ is free of rank two. Choose any ordered basis $u,v$; [F2] makes its intersection matrix $J_0$ skew-symmetric and unimodular, hence $\det J_0=1$. Write the two core classes $a,b$ in this basis as the columns of an integer matrix $P$. The plumbing gives $a\cdot_F b=1$, so their intersection matrix is $J=\begin{pmatrix}0&1\\-1&0\end{pmatrix}=P^TJ_0P$. Taking determinants gives $1=(\det P)^2$, hence $\det P=\pm1$; therefore $a,b$ is an integral basis. [A1, F2, F3, F8, given, algebra]

2.1 Equally oriented parallel cores of an annulus transport to its two induced boundary orientations with one reversed, so their linking is minus the boundary linking. Returning a small positive normal push in the complement of the other parallel core shows that each Hopf core self-pairing is minus its boundary linking. Thus the Hopf-band signs give $V_{11}=V_{22}=-1$ for $T$ and $V_{11}=-1,V_{22}=1$ for $E$. The specified disk bounded by $a^+$ is disjoint from $b$, so its class vanishes in the complement of $b$ and the linking definition gives $V_{12}=0$. Now that $a,b$ is a basis, [F2] yields $V_{12}-V_{21}=a\cdot_F b=1$, hence $V_{21}=-1$. This proves the displayed matrices. [A1, F1, F2, step 1.1, given, algebra]

3.1 For $V_T$, the matrix $V_T-tV_T^T$ is $\begin{pmatrix}t-1&t\\-1&t-1\end{pmatrix}$, with determinant $(1-t)^2+t=1-t+t^2$. For $V_E$, the matrix $V_E-tV_E^T$ is $\begin{pmatrix}t-1&t\\-1&1-t\end{pmatrix}$, with determinant $(t-1)(1-t)+t=-1+3t-t^2$. By [F4], these determinants represent $\Delta_T$ and $\Delta_E$ up to units. Substitution gives the stated values at $1$ and $-1$; every unit is $\pm t^k$, so the absolute values at both substitutions are independent of the representative. Their values $1$ at $1$ agree with [F5]. [A1, F4, F5, step 2.1, algebra]

4.1 By [F7], $T\#E$ is the connected sum in the fixed oriented convention. Apply [F6] to obtain $\Delta_{T\#E}\doteq\Delta_T\Delta_E$. Multiplying the two displayed quadratics gives $-t^4+4t^3-5t^2+4t-1$; substituting $1$ and $-1$ gives $1$ and $-15$. [A1, F6, F7, step 3.1, algebra]

5.1 By [F9], orientation-preserving ambient isotopy preserves the polynomial class, and an integral basis change is a unimodular congruence of the matrix. Its determinant changes by $(\det P)^2=1$, so the determinant class and the displayed unit-invariant evaluations are unchanged. [A1, F9, step 3.1, algebra] ∎

## Diagram

The panels show the local square-plumbing charts: the horizontal and vertical core arcs cross transversely once in the shaded common square and continue outside the displayed neighborhoods to close. The labels $+,+$ and $+,-$ give the Hopf-band signs for the trefoil and figure-eight surfaces; the local charts do not depict their twists. Orient each square so the ordered rightward and upward tangents are positive; the arrows then give $a\cdot_F b=+1$. This schematic records the local construction; the proof computes the matrix entries in words.

~~~tikz
\begin{tikzpicture}[scale=0.85]
  % Trefoil: positive horizontal and vertical Hopf bands.
  \draw[fill=blue!10,thick] (-4.5,-0.4) rectangle (-0.6,0.4);
  \draw[fill=orange!10,thick] (-2.9,-1.8) rectangle (-2.1,1.8);
  \fill[gray!40] (-2.9,-0.4) rectangle (-2.1,0.4);
  \draw[thick,->,blue] (-4.1,0) -- (-0.95,0);
  \draw[thick,->,orange] (-2.5,-1.45) -- (-2.5,1.45);
  \node at (-2.5,2.2) {$T:\ +,+$};
  \node[blue] at (-3.8,0.75) {$a$-band};
  \node[orange] at (-1.2,1.5) {$b$-band};
  \node at (-2.5,-2.2) {$a\cdot_F b=+1$};

  % Figure-eight: positive horizontal and negative vertical Hopf bands.
  \draw[fill=blue!10,thick] (0.6,-0.4) rectangle (4.5,0.4);
  \draw[fill=orange!10,thick] (2.1,-1.8) rectangle (2.9,1.8);
  \fill[gray!40] (2.1,-0.4) rectangle (2.9,0.4);
  \draw[thick,->,blue] (0.95,0) -- (4.1,0);
  \draw[thick,->,orange] (2.5,-1.45) -- (2.5,1.45);
  \node at (2.5,2.2) {$E:\ +,-$};
  \node[blue] at (1.2,0.75) {$a$-band};
  \node[orange] at (3.8,1.5) {$b$-band};
  \node at (2.5,-2.2) {$a\cdot_F b=+1$};
\end{tikzpicture}
~~~
