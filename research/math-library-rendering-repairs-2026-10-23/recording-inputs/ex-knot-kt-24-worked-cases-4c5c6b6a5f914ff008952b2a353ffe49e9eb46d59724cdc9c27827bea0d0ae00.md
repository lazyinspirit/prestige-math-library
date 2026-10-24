---
id: ex-knot-kt-24-worked-cases
kind: example
title: The square knot has a nontrivial character vanishing on a linking metabolizer
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 9
deps:
  - def-bounding-chain-torsion-linking-pairing
  - def-finite-linking-form-and-metabolizer
  - def-finite-order-character-of-a-branched-cover
  - lem-positive-hopf-plumbing-has-trefoil-seifert-matrix
  - lem-seifert-pairing-well-defined
  - lem-branched-cover-surgery-presentation-from-seifert-surface
  - lem-cyclic-cover-linking-form-inverse-matrix
  - lem-general-knot-reverse-mirror-sum-is-ribbon
  - def-knot-seifert-pairing-and-matrix
  - def-reverse-mirror-of-oriented-knot
  - def-knot-connected-sum-and-prime-knot
  - def-smooth-and-topological-slice-genus
  - def-axiom-of-choice
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Charles Livingston and Swatee Naik, Introduction to Knot Concordance
      url: https://chuck-livingston.github.io/math/Concordance_Book.pdf
      locator: Chapter 3, §3.1, pp. 44–51, and Chapter 7, §§7.4, 7.6, complete cited passages read
    - title: Dale Rolfsen, Knots and Links
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/rolfsen.pdf
      locator: Chapter 8.D, printed pp. 212–215; trefoil double-cover matrix calculation read
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
---
## Example

Assume AC. For the square knot $K=T\#T^\dagger$, where $T$ is the positive trefoil and $T^\dagger$ is its reverse mirror, the double branched cover has $H_1\cong\mathbb Z/3\oplus\mathbb Z/3$ with linking form $\operatorname{diag}(1/3,-1/3)$. Its diagonal subgroup is a metabolizer, and the order-three character $\chi(a,b)=(a-b)/3\bmod\mathbb Z$ vanishes on it. The knot is smoothly slice.

## Example references

[[lem-general-knot-reverse-mirror-sum-is-ribbon|A knot plus its reverse mirror is ribbon]]

[[lem-branched-cover-surgery-presentation-from-seifert-surface|The branched-cover surgery presentation]]

[[lem-cyclic-cover-linking-form-inverse-matrix|The surgery-matrix linking-form formula]]

[Charles Livingston and Swatee Naik, *Introduction to Knot Concordance*, §3.1, pp. 44–51](https://chuck-livingston.github.io/math/Concordance_Book.pdf)

[[def-axiom-of-choice|Axiom of Choice]]

[Rolfsen, *Knots and Links*, Chapter 8.D, pp. 212–215](https://webhomes.maths.ed.ac.uk/~v1ranick/papers/rolfsen.pdf)

[[def-bounding-chain-torsion-linking-pairing|The oriented bounding-chain linking convention]]

[[def-finite-order-character-of-a-branched-cover|Finite-order characters]]

[[def-knot-connected-sum-and-prime-knot|The oriented connected-sum convention]]

[[def-smooth-and-topological-slice-genus|The smooth sliceness convention]]

## Facts & Assumptions

**Given:** The positive trefoil $T$, its reverse mirror $T^\dagger$, their boundary-connected-sum Seifert surface, the positive-push convention, and the double branched cover.

[A1] Full AC is assumed wherever the cover and orientation conventions use the choice axiom. [[def-axiom-of-choice]]

[F1] A positive trefoil Seifert matrix is $V=\begin{pmatrix}-1&0\\-1&-1\end{pmatrix}$. [[lem-positive-hopf-plumbing-has-trefoil-seifert-matrix]]

[F2] The reverse-mirror surface is $-r(F)$; its positive normal is the reflected positive normal because the two orientation reversals cancel. Reflection negates linking, so the transported basis has positive-push matrix $-V$. [[def-knot-seifert-pairing-and-matrix]] [[lem-seifert-pairing-well-defined]] [[def-reverse-mirror-of-oriented-knot]]

[F3] For $q=2$, a Seifert matrix $U$ gives a surgery presentation of the double branched cover with symmetric matrix $U+U^T$. [[lem-branched-cover-surgery-presentation-from-seifert-surface]]

[F4] For a nonsingular integral surgery matrix $A$, the first homology is $\mathbb Z^n/A\mathbb Z^n$ and the oriented linking form is $-A^{-1}\bmod\mathbb Z$. [[lem-cyclic-cover-linking-form-inverse-matrix]]

[F5] Every knot plus its reverse mirror bounds a smooth ribbon disk. [[lem-general-knot-reverse-mirror-sum-is-ribbon]]

[F6] In a finite nonsingular linking form, an isotropic subgroup of square-root order is a metabolizer. [[def-finite-linking-form-and-metabolizer]]

[F7] For integral $1$-cycles $a,b$ representing the two torsion classes and an integral $2$-chain $C$ with $\partial C=na$, $n>0$, the oriented torsion linking pairing is $(C\cdot b)/n\bmod\mathbb Z$, with $C$ transverse to $b$. [[def-bounding-chain-torsion-linking-pairing]]

[F8] A finite-order character is a homomorphism to $\mathbb Q/\mathbb Z$, with order measured in the character group. [[def-finite-order-character-of-a-branched-cover]]

[F9] The oriented connected sum joins the oriented knot arcs in the fixed two-ball model; the boundary-connected-sum surface in the Given therefore represents $T\#T^\dagger$. [[def-knot-connected-sum-and-prime-knot]]

[F10] A knot bounding a smooth proper disk in $B^4$ is smoothly slice. [[def-smooth-and-topological-slice-genus]]

## Verification

1.1 The boundary-connected-sum surface for $K$ has block-diagonal Seifert matrix $U=V\oplus(-V)$: curves in the two summands are disjoint, so mixed linking entries vanish. Hence $U+U^T=A\oplus(-A)$, where
$$A=V+V^T=\begin{pmatrix}-2&-1\\-1&-2\end{pmatrix}.$$
[F1, F2, F9, given, construct, A1]

2.1 The double-cover surgery presentation [F3] gives the linking group as $\operatorname{coker}(A)\oplus\operatorname{coker}(-A)$. Unimodular row and column operations reduce $A$ to $\operatorname{diag}(1,3)$, so each cokernel is $\mathbb Z/3$. [F3, step 1.1, construct, algebra]

2.2 Since $A^{-1}=-\frac13\begin{pmatrix}2&-1\\-1&2\end{pmatrix}$, [F4] gives self-linking $2/3\equiv-1/3$ on a generator of the original-trefoil block. The reverse-mirror block has matrix $-A$, and therefore generator self-linking $-2/3\equiv1/3$. Choose the coordinates $(a,b)$ with the reverse-mirror block first and the original-trefoil block second. The mixed terms vanish, so in these explicitly ordered coordinates the linking form is $\operatorname{diag}(1/3,-1/3)$, as asserted. [F4, F7, step 1.1, algebra]

3.1 The diagonal subgroup $P=\{(a,a):a\in\mathbb Z/3\}$ has order $3$ and $\lambda((a,a),(b,b))=ab/3-ab/3=0$. The ambient group has order $9$, so $|P|^2=9$ and [F6] makes $P$ a metabolizer. By [F8], the map $\chi(a,b)=(a-b)/3\bmod\mathbb Z$ is a character of order $3$ and vanishes on $P$. [F6, F8, given, step 2.2, algebra]

4.1 By [F5], $T\#T^\dagger$ bounds a smooth ribbon disk and is smoothly slice by [F10]. This establishes sliceness independently of the homology and character calculation. [F5, F10, given] ∎

## Diagram

The following is the positive trefoil as the closure of the two-strand braid $\sigma_1^3$. Here $\sigma_1$ means the strand entering from the left passes under the strand entering from the right; the closure arcs connect endpoints in equal horizontal positions. Three crossings exchange the two endpoints, so the closure has one component. The proof uses the Seifert-matrix calculations above and does not rely on the drawing.

```tikz
\begin{tikzpicture}[x=0.9cm,y=0.9cm,baseline=(current bounding box.center)]
  \draw[thick] (-1,3)--(1,2)--(-1,1)--(1,0);
  \draw[thick] (1,3)--(-1,2)--(1,1)--(-1,0);
  \fill[white] (0,2.5) circle (2.5pt);
  \draw[thick] (-0.28,2.36)--(0.28,2.64);
  \fill[white] (0,1.5) circle (2.5pt);
  \draw[thick] (-0.28,1.36)--(0.28,1.64);
  \fill[white] (0,0.5) circle (2.5pt);
  \draw[thick] (-0.28,0.36)--(0.28,0.64);
  \draw[thick] (-1,0)..controls(-1.7,0)and(-1.7,3)..(-1,3);
  \draw[thick] (1,0)..controls(1.7,0)and(1.7,3)..(1,3);
\end{tikzpicture}
```

The reverse mirror factor is obtained by reflecting the diagram and reversing its orientation; the square knot is their connected sum. The diagram only records the braid convention used to name $T$.
