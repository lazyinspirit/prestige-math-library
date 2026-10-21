---
id: lem-seifert-matrix-of-reverse-mirror-is-negative-original
kind: lemma
title: "The reverse-mirror Seifert matrix is the negative original"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-reverse-mirror-of-oriented-knot
  - def-knot-seifert-pairing-and-matrix
  - def-axiom-of-choice
dependency_level: 6
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: n/a
sources:
  references:
    - title: "Arunima Ray, Slice Knots and Knot Concordance"
      url: "https://numdam.org/item/10.5802/wbln.39.pdf"
      locator: "§1.1, mirror and reverse conventions, printed p.2"
---

## Statement

Assume the full Axiom of Choice. Let $K$ be a smooth oriented knot with a Seifert surface $F$ and ordered integral basis $a_1,\ldots,a_{2g}$, using $V_{ij}=\operatorname{lk}(a_i^+,a_j)$ for the positive-push Seifert matrix. Let $K^\dagger$ be the reverse mirror defined by the fixed orientation-reversing reflection followed by reversal of the knot orientation, and use the image basis on the reflected surface. The Seifert matrix of $K^\dagger$ in that basis is $-V$.

## Statement references

[[def-reverse-mirror-of-oriented-knot|The fixed reverse-mirror convention]]

[[def-knot-seifert-pairing-and-matrix|The positive-push Seifert-matrix convention]]

[[def-axiom-of-choice|The full Axiom of Choice assumed by the knot Seifert-pairing interface]]

## Facts & Assumptions

**Given:** Full AC, the oriented surface, and the ordered basis from the statement.

[A1] [[def-axiom-of-choice]]: AC is the choice-function axiom used by the Seifert-pairing interface.

[F1] [[def-knot-seifert-pairing-and-matrix]]: The matrix entry is $V_{ij}=\operatorname{lk}(a_i^+,a_j)$, where the positive normal is determined by the ambient and surface orientations.

[F2] [[def-reverse-mirror-of-oriented-knot]]: The reverse mirror applies the fixed orientation-reversing reflection and reverses the knot orientation.

## Proof

1.1 Give the reflected surface $r(F)$ its transported orientation. Its boundary is $r(K)$ with the transported knot orientation. Therefore the Seifert surface for the specified reverse mirror is $F^\dagger=-r(F)$, with the opposite surface orientation. Let $(u,v)$ be a positive tangent frame of $F$ and let $n$ be its positive normal, so $(n,u,v)$ is ambient-positive by [F1]. A positive tangent frame for $F^\dagger$ is $(-dr(u),dr(v))$: reversing exactly one tangent reverses the surface orientation. Since $r$ reverses ambient orientation, the frame $(dr(n),-dr(u),dr(v))$ is ambient-positive. Consequently the positive normal of $F^\dagger$ is $dr(n)$, and the positive push of the image basis curve $r(a_i)$ is precisely $r(a_i^+)$. This computation includes both orientation reversals; reversing both tangent vectors instead would preserve the surface orientation. [A1, F1, F2, given, algebra]

2.1 Reflection negates linking. Indeed an oriented normal disk to an oriented curve $D$ is positive when its disk orientation follows the tangent of $D$ in the ambient orientation. The reflected disk has the opposite normal-disk orientation relative to $r(D)$, since $r$ reverses the ambient orientation. Thus $r$ takes the positive meridian class to minus the positive meridian class, and taking meridian coefficients in the complement gives $\operatorname{lk}(r(C),r(D))=-\operatorname{lk}(C,D)$. Using the actual positive pushes from step 1.1, the image-basis entries are therefore $\operatorname{lk}(r(a_i^+),r(a_j))=-\operatorname{lk}(a_i^+,a_j)=-V_{ij}$. This proves the matrix is $-V$, including the empty matrix in genus zero. [F1, F2, step 1.1, algebra] ∎

## Remarks

Reflection alone, without reversal of the knot and spanning-surface orientations, takes the positive normal to the reflected negative normal and gives the negative transpose. The reverse mirror in the fixed definition includes that additional orientation reversal and gives the negative original matrix in the transported basis. Arbitrary changes of basis remain ordinary unimodular congruences.

## Diagram

The panels label tangent frames; the normal is drawn out of the page as $\odot$. Take the orientation-reversing reflection $r(x,y,z)=(x,-y,z)$. The right frame $(-r(u),r(v))$ reverses exactly one transported tangent vector and has positive normal $r(n)$, as proved above.

```tikz
\begin{tikzpicture}[>=stealth,scale=1.05]
  \draw[thick] (-3.2,-0.7) rectangle (-0.8,0.7);
  \node at (-2,0.95) {$F$};
  \draw[->,thick] (-2,-0.15)--(-1.15,-0.15) node[right] {$u$};
  \draw[->,thick] (-2,-0.15)--(-2,0.52) node[above] {$v$};
  \node[blue] at (-1.25,0.45) {$\odot\ n$};
  \node at (0,0) {$r(x,y,z)=(x,-y,z)$};
  \draw[thick] (0.8,-0.7) rectangle (3.2,0.7);
  \node at (2,0.95) {$F^\dagger=-r(F)$};
  \node at (2,1.25) {surface orientation reversed};
  \draw[->,thick] (2, -0.15)--(1.15,-0.15) node[left] {$-r(u)$};
  \draw[->,thick] (2, -0.15)--(2,-0.52) node[below] {$r(v)$};
  \node[blue] at (2.8,-0.45) {$\odot\ r(n)$};
\end{tikzpicture}
```
