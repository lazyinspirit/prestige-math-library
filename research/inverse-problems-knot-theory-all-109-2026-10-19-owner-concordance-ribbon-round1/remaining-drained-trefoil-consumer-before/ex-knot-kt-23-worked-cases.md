---
id: ex-knot-kt-23-worked-cases
kind: example
title: "The square-knot Seifert form is metabolic"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 12
deps:
  - def-axiom-of-choice
  - def-countable-choice
  - def-knot-connected-sum-and-prime-knot
  - def-knot-seifert-pairing-and-matrix
  - def-reverse-mirror-of-oriented-knot
  - lem-general-knot-reverse-mirror-sum-is-ribbon
  - lem-knot-connected-sum-well-defined
  - lem-positive-hopf-plumbing-has-trefoil-seifert-matrix
  - thm-choice-implies-dependent-implies-countable-choice
  - thm-seifert-determinant-is-the-knot-alexander-polynomial
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Dale Rolfsen, Knots and Links"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/rolfsen.pdf"
      locator: "Chapter 8.A, printed pp. 200–202: the trefoil Seifert matrix and positive-push convention."
    - title: "Arunima Ray, Slice Knots and Knot Concordance"
      url: "https://aru-ray.github.io/documents/slicenotes.pdf"
      locator: "§1.1, Proposition 1.6, printed p. 3: the reverse-mirror connected sum is ribbon (stated there as an exercise)."
    - title: "Charles Livingston, A Survey of Classical Knot Concordance"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/living.pdf"
      locator: "§2.1, printed p. 323: the inverse knot is the reverse mirror and its sum with the original is slice."
---

## Example

Assume full AC. Let $T$ be the right-handed trefoil obtained by plumbing two positive Hopf bands, with positive-push Seifert matrix $V=\begin{pmatrix}1&0\\-1&1\end{pmatrix}$. Let $T^\dagger$ be its reverse mirror and set $S=T\#T^\dagger$. Then $S$ bounds a smooth proper disk in $B^4$ for which the squared radial function has only index-$0$ and index-$1$ interior critical points. A Seifert matrix for $S$ is $W=\operatorname{diag}(V,-V^T)$, the rank-$2$ direct summand $M=\langle e_1+e_4,e_2+e_3\rangle\subset\mathbb Z^4$ is a metabolizer for $W$, and $\Delta_S(t)\doteq (t^2-t+1)^2$. In particular, with $f(t)=t^2-t+1$, the determinant is a Laurent-unit multiple of $f(t)f(t^{-1})$.

## Example references

[[lem-positive-hopf-plumbing-has-trefoil-seifert-matrix|The positive-push matrix of the right-handed trefoil]]

[[def-reverse-mirror-of-oriented-knot|The reverse-mirror convention]]

[[def-knot-connected-sum-and-prime-knot|The fixed oriented connected-sum convention]]

[[lem-general-knot-reverse-mirror-sum-is-ribbon|The explicit ribbon disk for a reverse-mirror sum]]

[[thm-seifert-determinant-is-the-knot-alexander-polynomial|The determinant normalization of $\Delta_S$]]

## Facts & Assumptions

**Given:** Full AC, the positive Hopf-plumbed trefoil $T$, its reverse mirror $T^\dagger$, and the connected sum $S=T\#T^\dagger$.

[A1] Full AC is the family-of-nonempty-sets choice axiom used by the Seifert-pairing convention. [[def-axiom-of-choice]]

[F1] Full AC implies the Axiom of Countable Choice required by the ribbon-disk supplier. [[thm-choice-implies-dependent-implies-countable-choice]], [[def-countable-choice]]

[F2] In the stated positive-push basis, the trefoil matrix is $V=\begin{pmatrix}1&0\\-1&1\end{pmatrix}$. [[lem-positive-hopf-plumbing-has-trefoil-seifert-matrix]]

[F3] The reverse mirror is obtained by the fixed orientation-reversing reflection and reversal of the knot orientation. [[def-reverse-mirror-of-oriented-knot]]

[F4] The connected sum uses the fixed oriented ball-gluing convention, independent of the allowed local choices. [[def-knot-connected-sum-and-prime-knot]], [[lem-knot-connected-sum-well-defined]]

[F5] Every smooth knot $K$ has a smooth proper disk for $K\#K^\dagger$ with only index-$0$ and index-$1$ interior radial critical points, under $\mathrm{AC}_\omega$. [[lem-general-knot-reverse-mirror-sum-is-ribbon]]

[F6] The Alexander polynomial satisfies $\Delta_S(t)\doteq\det(W-tW^T)$ for this positive-push matrix. [[thm-seifert-determinant-is-the-knot-alexander-polynomial]]

## Verification

1.1 By [F1], the stated full-AC hypothesis supplies $\mathrm{AC}_\omega$. Apply [F5] to $T$; its conclusion gives the required smooth proper disk for $S=T\#T^\dagger$ and the stated radial critical-point indices. [A1, F1, F5, given, construct]

1.2 Let $a_1,a_2$ be the ordered Hopf-core basis for $T$. The surface for the reverse mirror is the oppositely oriented reflected surface. Reflection reverses linking number, and the positive normal for the reverse-mirror surface is the reflected negative normal of the original. Thus its matrix entries are $-\operatorname{lk}(a_i^-,a_j)$. The identity $\operatorname{lk}(a_i^-,a_j)=\operatorname{lk}(a_j^+,a_i)$ follows by symmetry of linking and pushing the two curves to the common positive side without crossing; hence the reverse-mirror matrix is $-V^T$. [F2, F3, algebra]

2.1 Form the boundary-connected-sum Seifert surface in the two summand balls. Cycles from different summands have zero linking because each bounds a $2$-chain in its own ball, disjoint from the other summand. The combined basis therefore has matrix $W=\operatorname{diag}(V,-V^T)$. [F2, F4, step 1.2, construct]

3.1 Let $P=\begin{pmatrix}0&1\\1&0\end{pmatrix}$. Direct multiplication gives $P^TV^TP=V$. The graph $M=\{(x,Px):x\in\mathbb Z^2\}$ is spanned by $e_1+e_4$ and $e_2+e_3$; projection onto the first factor identifies it with $\mathbb Z^2$, so it is a rank-$2$ direct summand. For any $x,y\in\mathbb Z^2$, $(x,Px)^TW(y,Py)=x^T(V-P^TV^TP)y=0$. Thus $M$ is a metabolizer. [F2, step 2.1, algebra]

4.1 The two blocks give $\det(V-tV^T)=(1-t)^2+t=t^2-t+1$ and $\det(-V^T+tV)=(t-1)^2+t=t^2-t+1$. Hence $\det(W-tW^T)=(t^2-t+1)^2$. For $f(t)=t^2-t+1$, one has $f(t^{-1})=t^{-2}f(t)$, so $\det(W-tW^T)=t^2f(t)f(t^{-1})$. By [F6], this is the claimed Fox–Milnor norm factorization of $\Delta_S$. [F2, F6, step 2.1, algebra] ∎
