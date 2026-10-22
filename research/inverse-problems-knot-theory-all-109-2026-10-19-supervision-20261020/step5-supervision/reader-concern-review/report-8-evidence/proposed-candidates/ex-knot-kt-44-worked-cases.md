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

For the crossingless based unknot diagram, the reduced integral cohomology is $\mathbb Z$ in cohomological degree $0$. For the based closure of the three-crossing negative two-strand braid, with the basepoint on a closure arc and cohomological degree $i=|v|-3$, the reduced integral cohomology is $\mathbb Z$ in degrees $-3,-2,0$ and zero in degree $-1$. In particular, these two specified diagrams have total reduced ranks $1$ and $3$, respectively.

The braid diagram below shows the closure convention: the two outer arcs join corresponding top and bottom endpoints, the braid strands are oriented downward, the two closure arcs are traversed from bottom to top, the three crossings are negative, and the dot marks the basepoint. The top-to-bottom braid word is $\sigma_1^{-3}$, with $\sigma_1^{-1}$ drawn as the left incoming strand passing over the right incoming strand.

```tikz
\begin{tikzpicture}[scale=0.78, every node/.style={font=\small}]
  % Three negative crossings; the left incoming strand is the overstrand.
  \draw[thick] (0.45,3) -- (0.09,2.60);
  \draw[thick] (-0.09,2.40) -- (-0.45,2);
  \draw[thick] (-0.45,3) -- (0.45,2);
  \draw[thick] (0.45,2) -- (0.09,1.60);
  \draw[thick] (-0.09,1.40) -- (-0.45,1);
  \draw[thick] (-0.45,2) -- (0.45,1);
  \draw[thick] (0.45,1) -- (0.09,0.60);
  \draw[thick] (-0.09,0.40) -- (-0.45,0);
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


**Given:** The crossingless based unknot and the based closure diagram of $\sigma_1^{-3}$ described above.

[F1] The unreduced circle algebra is $\mathcal A=\mathbb Z[X]/(X^2)$ with basis $1,X$, multiplication $m$, and comultiplication $\Delta(1)=1\otimes X+X\otimes1$, $\Delta(X)=X\otimes X$; its edge maps carry the ordered-cube signs $(-1)^{\sum_{i<j}v_i}$ ([[def-khovanov-frobenius-algebra-and-cube-of-resolutions]], Definition).

[F2] For a diagram with $n_-$ negative crossings, a state $v$ lies in cohomological degree $|v|-n_-$, and an edge from $v$ to $v+e_j$ uses $m$ for a merge and $\Delta$ for a split, with that cube sign ([[alg-khovanov-chain-complex-from-diagram]], Definition).

[F3] In the reduced quotient the based circle factor is $M=\mathbb Z\{1\}$ with $X\cdot1=0$; an unbased circle retains the factor $\mathcal A$ ([[def-reduced-khovanov-cohomology-of-a-knot]], Definition).

[F4] The signed cube maps form a cochain complex ([[lem-khovanov-cube-differential-squares-to-zero]], Statement).



1.1 The crossingless diagram has one based circle, hence its reduced state module is $M=\mathbb Z\{1\}$ in degree $0$ by [F2]–[F3]. There are no crossings and therefore no differential, so its cohomology is $\mathbb Z$ in degree $0$. [F2, F3, given, algebra]

1.2 First compute the auxiliary positive two-strand closure, whose $A$-smoothing is the identity tangle and whose $B$-smoothing is the cap-cup tangle. This is only an auxiliary raw cube; it does not change the specified negative diagram. With zero, one, two, or three cap-cup smoothings, the closure has respectively two, one, two, or three circles: composing cap-cups creates one additional internal circle each time after the first. Thus its four raw cochain degrees $0,1,2,3$ have modules $M\otimes\mathcal A$, $M^3$, $(M\otimes\mathcal A)^3$, and $M\otimes\mathcal A\otimes\mathcal A$, of ranks $2,3,6,4$. [F1, F2, F3, given, algebra]

1.3 Order crossings from top to bottom. The first differential sends $1\otimes1$ to $(1,1,1)$ and $1\otimes X$ to zero, so its image is the diagonal copy of $\mathbb Z$ and its kernel is $\mathbb Z\{1\otimes X\}$. After suppressing the common based factor $M$, the next differential is the signed incidence matrix
$$
\begin{pmatrix}-1&1&0\\-1&0&1\\0&-1&1\end{pmatrix}
$$
with each integer entry multiplying the label $X$, because each edge splits the based circle and the reduced split sends $1$ to $1\otimes X$. Its image has rank two and its kernel is the diagonal copy of $\mathbb Z$. [F1, F2, F3, step 1.2, algebra]

1.4 Label the three two-circle states in crossing order and identify the two unbased factors in the all-$B$ state from left to right. The last differential is
$$
(a,b,c)\longmapsto a\otimes X-\Delta(b)+X\otimes c.
$$
Here the first and third edges split the based circle, while the middle edge splits the unbased circle; the signs are the cube signs from [F2]. Its image is exactly the subgroup generated by $1\otimes X$, $X\otimes1$, and $X\otimes X$, and its kernel consists of triples with equal coefficients of $1$ and with coefficients of $X$ satisfying $a_X-b_X+c_X=0$. [F1, F2, F3, given, algebra]

2.1 These auxiliary raw differentials have ranks $1,2,3$. Their images are primitive subgroups of their target free groups: the first image has a coordinate $1$, the incidence matrix in step 1.3 has a $2$ by $2$ minor $1$, and the last image is the coordinate span of $1\otimes X,X\otimes1,X\otimes X$. In each case elementary integral row and column elimination therefore gives only unit nonzero diagonal entries. Hence all auxiliary homology groups are free. The kernel/image calculations in steps 1.3 and 1.4 give raw cohomology $\mathbb Z$ in degrees $0,2,3$ and zero in degree $1$. [F4, step 1.2, step 1.3, step 1.4, algebra]

2.2 Now return to the specified negative diagram. At each crossing its A-smoothing is cap-cup and its B-smoothing is through, so the state $v$ has exactly the same circles as the auxiliary positive state $w=1-v$. Put the perfect integral pairing $\langle a,b\rangle=\epsilon(ab)$ on each unbased circle, with matrix $\begin{pmatrix}0&1\\1&0\end{pmatrix}$, and pair the based module $M$ with itself by $\langle1,1\rangle=1$. Multiplication and comultiplication are adjoints for these pairings, directly on $1,X$; the reduced merge and split are adjoints too, since $m_M(1\otimes1)=1$, $m_M(X\otimes1)=0$ and $\Delta_M(1)=X\otimes1$. Use the same actual circle order on the two complementary states. For an edge in coordinate $j$, the old transposed sign is $(-1)^{j-1-\sum_{k<j}v_k}$ whereas the negative cube requires $(-1)^{\sum_{k<j}v_k}$. Multiplying vertex $v$ by $J(v)=(-1)^{\sum_j(j-1)v_j}$ corrects this ratio: across that edge its ratio is $(-1)^{j-1}$. Thus the negative raw cube is integrally isomorphic to the degree-reversed transpose of the auxiliary cube, with this explicit diagonal sign correction. No spatial reflection or change to the given negative crossing is used. [F1, F2, F3, step 1.2, step 1.3, step 1.4, construct, algebra]

3.1 The reversed transpose has ranks $4,6,3,2$ in raw degrees $0,1,2,3$, and differential ranks $3,2,1$. Transposition preserves the unit diagonal entries proved in step 2.1, as do the unimodular pairings and $J$ in step 2.2. Each image is therefore primitive; its quotient in the kernel is torsion-free because it is a subgroup of the free quotient of the whole target. Rank-nullity now gives free homology of ranks $1,1,0,1$ in raw degrees $0,1,2,3$. The negative diagram has three negative crossings, so the normalization $i=|v|-3$ gives $\mathbb Z$ exactly in degrees $-3,-2,0$, with zero in degree $-1$. Together with step 1.1 this proves all stated ranks for the actual two diagrams. [F2, F4, step 1.1, step 2.1, step 2.2, algebra] ∎
