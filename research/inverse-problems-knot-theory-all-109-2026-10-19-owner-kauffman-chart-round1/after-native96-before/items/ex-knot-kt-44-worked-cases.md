---
id: ex-knot-kt-44-worked-cases
kind: example
title: "Reduced Khovanov ranks of the unknot and the three-crossing two-braid"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 5
deps:
  - def-khovanov-frobenius-algebra-and-cube-of-resolutions
  - alg-khovanov-chain-complex-from-diagram
  - lem-khovanov-cube-differential-squares-to-zero
  - def-reduced-khovanov-cohomology-of-a-knot
proof_strategy: direct
axiom_use: "Both finite cube calculations are choice-free. The example computes the specified based diagrams and does not use the unresolved knot-invariance or instanton-detection suppliers."
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "P. B. Kronheimer and T. S. Mrowka, Khovanov homology is an unknot-detector, §§1 and 8.6–8.7"
      url: "https://people.math.harvard.edu/~kronheim/khovanov-unknot.pdf"
    - title: "Hongjian Yang, An Overview of Floer Homologies, §5.7"
      url: "https://web.stanford.edu/~cm5/286.pdf"
---

## Example

For the crossingless based unknot diagram, the reduced integral cohomology is $\mathbb Z$ in cohomological degree $0$. For the based closure of the three-crossing negative two-strand braid, with the basepoint on a closure arc and cohomological degree $i=|v|-3$, the reduced integral cohomology is $\mathbb Z$ in degrees $-3,-1,0$ and zero in degree $-2$. In particular, these two specified diagrams have total reduced ranks $1$ and $3$, respectively.

The braid diagram below shows the closure convention: the two outer arcs join corresponding top and bottom endpoints, the braid strands are oriented downward, the two closure arcs are traversed from bottom to top, the three crossings are negative, and the dot marks the basepoint. The top-to-bottom braid word is $\sigma_1^{-3}$, with $\sigma_1^{-1}$ drawn as the left incoming strand passing over the right incoming strand.

```tikz
\begin{tikzpicture}[scale=0.78, every node/.style={font=\small}]
  % Three negative crossings; the left incoming strand is the overstrand.
  \draw[thick] (0.45,3) -- (0.10,2.61);
  \draw[thick] (0.10,2.39) -- (-0.45,2);
  \draw[thick] (-0.45,3) -- (0.45,2);
  \draw[thick] (0.45,2) -- (0.10,1.61);
  \draw[thick] (0.10,1.39) -- (-0.45,1);
  \draw[thick] (-0.45,2) -- (0.45,1);
  \draw[thick] (0.45,1) -- (0.10,0.61);
  \draw[thick] (0.10,0.39) -- (-0.45,0);
  \draw[thick] (-0.45,1) -- (0.45,0);
  % Closure arcs.
  \draw[thick,->] (-0.45,0) .. controls (-1.05,-0.25) and (-1.05,3.25) .. (-0.45,3);
  \draw[thick,->] (0.45,0) .. controls (1.05,-0.25) and (1.05,3.25) .. (0.45,3);
  \fill (-0.88,1.25) circle (2pt);
  \node[left] at (-0.88,1.25) {$p$};
\end{tikzpicture}
```

The crossing convention in this drawing is explanatory only; the verification computes the resolution cube and does not infer any differential or homology from the picture.

## Example references

[[def-khovanov-frobenius-algebra-and-cube-of-resolutions|Integral Frobenius algebra, smoothing choices, signs, and grading]]

[[alg-khovanov-chain-complex-from-diagram|Finite signed resolution cube]]

[[lem-khovanov-cube-differential-squares-to-zero|Square-zero property]]

[[def-reduced-khovanov-cohomology-of-a-knot|Based quotient and reduced grading]]

[Kronheimer–Mrowka, *Khovanov homology is an unknot-detector* (2011), §§1 and 8.6–8.7](https://people.math.harvard.edu/~kronheim/khovanov-unknot.pdf)

[Yang, *An Overview of Floer Homologies* (2025), §5.7](https://web.stanford.edu/~cm5/286.pdf)

## Facts & Assumptions

**Given:** The crossingless based unknot and the based closure diagram of $\sigma_1^{-3}$ described above.

[F1] The unreduced circle algebra is $\mathcal A=\mathbb Z[X]/(X^2)$ with basis $1,X$, multiplication $m$, and comultiplication $\Delta(1)=1\otimes X+X\otimes1$, $\Delta(X)=X\otimes X$; its edge maps carry the ordered-cube signs $(-1)^{\sum_{i<j}v_i}$ ([[def-khovanov-frobenius-algebra-and-cube-of-resolutions]], Definition).

[F2] For a diagram with $n_-$ negative crossings, a state $v$ lies in cohomological degree $|v|-n_-$, and an edge from $v$ to $v+e_j$ uses $m$ for a merge and $\Delta$ for a split, with that cube sign ([[alg-khovanov-chain-complex-from-diagram]], Definition).

[F3] In the reduced quotient the based circle factor is $M=\mathbb Z\{1\}$ with $X\cdot1=0$; an unbased circle retains the factor $\mathcal A$ ([[def-reduced-khovanov-cohomology-of-a-knot]], Definition).

[F4] The signed cube maps form a cochain complex ([[lem-khovanov-cube-differential-squares-to-zero]], Statement).

## Verification

1.1 The crossingless diagram has one based circle, hence its reduced state module is $M=\mathbb Z\{1\}$ in degree $0$ by [F2]–[F3]. There are no crossings and therefore no differential, so its cohomology is $\mathbb Z$ in degree $0$. [F2, F3, given, algebra]

2.1 In the two-strand closure, the $A$-smoothing is the identity tangle and the $B$-smoothing is the cap-cup tangle. With zero, one, two, or three cap-cup smoothings, the closure has respectively two, one, two, or three circles: composing cap-cups creates one additional internal circle each time after the first. Thus the four normalized cochain degrees $-3,-2,-1,0$ have modules $M\otimes\mathcal A$, $M^3$, $(M\otimes\mathcal A)^3$, and $M\otimes\mathcal A\otimes\mathcal A$, of ranks $2,3,6,4$. [F1, F2, F3, given, algebra]

2.2 Order crossings from top to bottom. The first differential sends $1\otimes1$ to $(1,1,1)$ and $1\otimes X$ to zero, so its image is the diagonal copy of $\mathbb Z$ and its kernel is $\mathbb Z\{1\otimes X\}$. After suppressing the common based factor $M$, the next differential is the signed incidence matrix
$$
\begin{pmatrix}-1&1&0\\-1&0&1\\0&-1&1\end{pmatrix}
$$
with each integer entry multiplying the label $X$, because each edge splits the based circle and the reduced split sends $1$ to $1\otimes X$. Its image has rank two and its kernel is the diagonal copy of $\mathbb Z$. [F1, F2, F3, step 2.1, algebra]

2.3 Label the three two-circle states in crossing order and identify the two unbased factors in the all-$B$ state from left to right. The last differential is
$$
(a,b,c)\longmapsto a\otimes X-\Delta(b)+X\otimes c.
$$
Here the first and third edges split the based circle, while the middle edge splits the unbased circle; the signs are the cube signs from [F2]. Its image is exactly the subgroup generated by $1\otimes X$, $X\otimes1$, and $X\otimes X$, and its kernel consists of triples with equal coefficients of $1$ and with coefficients of $X$ satisfying $a_X-b_X+c_X=0$. [F1, F2, F3, given, algebra]

3.1 The kernel of the first map gives $H^{-3}\cong\mathbb Z$. The diagonal kernel of the second map equals the image of the first, so $H^{-2}=0$. In the kernel of the last map, the $X$-coefficient triples are exactly the image of the middle map, leaving one free diagonal $1$-coefficient; hence $H^{-1}\cong\mathbb Z$. The final cokernel is generated freely by $1\otimes1$, so $H^0\cong\mathbb Z$. These computations give total rank three and include all four state degrees. [F4, step 2.1, step 2.2, step 2.3, algebra] ∎
