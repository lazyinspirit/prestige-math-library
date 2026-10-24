---
verification:
  repair: research/math-library-rendering-repairs-2026-10-23/receipts/ex-green-hall-square-and-coproduct-for-finite-vector-spaces.json
  precheck: pass
id: ex-green-hall-square-and-coproduct-for-finite-vector-spaces
kind: example
title: "A one-vertex Green coproduct and twisted Hall square"
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 3
deps:
  - lem-finite-acyclic-quiver-hall-category-is-hereditary-finitary
  - def-untwisted-hall-algebra
  - lem-hall-sequence-count-equals-aut-weighted-subobject-count
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Olivier Schiffmann, Lectures on Hall Algebras, arXiv:math/0611617v2"
      url: "https://arxiv.org/pdf/math/0611617v2"
      locator: "§3.3, PDF p. 37, Example 3.14: finite-dimensional vector-space Hall products; §1.4, Green coproduct normalization."
    - title: "Claus Michael Ringel, The Hall Algebra Approach to Quantum Groups, E.L.A.M. Lectures (1993)"
      url: "https://www.math.uni-bielefeld.de/~ringel/opus/elam.pdf"
      locator: "§2: the one-vertex Hall algebra and extension-count normalization."

---

## Statement

For the one-vertex zero-arrow quiver, with simple $S$ and
$R=S\oplus S$, compute
$$ [S]\star[S]=\nu(q+1)[R],\qquad \Delta'([S])=[S]\otimes[0]+[0]\otimes[S], $$
and
$$ \Delta'([R])=[R]\otimes[0]+[0]\otimes[R] +\nu^{-1}[S]\otimes[S]. $$

For this example, $\Delta'$ means the coefficient formula
$\Delta'([T])=\sum_{A,B}\nu^{\dim A\dim B}P^T_{A,B}a_T^{-1}[A]\otimes[B]$;
it is the one-vertex specialization of Green’s definition. The product is
$[A]\star[B]=\nu^{\dim A\dim B}[A]*[B]$.

```tikz
\begin{tikzpicture}
\node[draw,circle] (v) {$1$};
\end{tikzpicture}
```

This is the quiver with one vertex and no arrows.

## Facts & Assumptions

**Given:** $k=\mathbb F_q$, $\nu=\sqrt q>1$, and $S=k$ as a vector-space
representation.

[F1] The category of finite-dimensional vector spaces is a finite-field
hereditary Hall category ([[lem-finite-acyclic-quiver-hall-category-is-hereditary-finitary]]).

[F2] The untwisted Hall coefficient counts subspaces and the twisted scalar
in this semisimple category is $\nu^{\dim A\dim B}$
([[def-untwisted-hall-algebra]]).

[F3] $P^R_{M,N}=a_Ma_Ng^R_{M,N}$
([[lem-hall-sequence-count-equals-aut-weighted-subobject-count]]).

## Proof

**Proof technique:** count subspaces and endpoint-labelled sequences.

1.1 Here $\operatorname{Hom}(S,S)\cong k$ and $\operatorname{YExt}^1(S,S)=0$, so $\langle S,S\rangle=1$. The subobjects of $R=k^2$ isomorphic to $S$ are its $q+1$ lines. Thus $g^R_{S,S}=q+1$, and the twisted product is $[S]\star[S]=\nu(q+1)[R]$. The same count with $S$ as middle object gives $\Delta'([S])=[S]\otimes[0]+[0]\otimes[S]$. [F1, F2, algebra]

1.2 For the mixed coefficient of $[S]\otimes[S]$ in $\Delta'([R])$, an endpoint-labelled exact sequence is an injection $i:k\to k^2$ and a surjection $p:k^2\to k$ with $pi=0$. There are $q^2-1$ choices for $i$; for each, the quotient $k^2/\operatorname{im}(i)$ is one-dimensional and has $q-1$ isomorphisms to the fixed endpoint $k$. Hence $P^R_{S,S}=(q^2-1)(q-1)$. Also $a_R=|\operatorname{GL}_2(k)|=(q^2-1)(q^2-q)$, so $P^R_{S,S}/a_R=1/q$. [F1, F3, construct]

2.1 The mixed coproduct coefficient is $\nu^{\langle S,S\rangle}/q=\nu/q=\nu^{-1}$ because $q=\nu^2$. The only other possible endpoint pairs are $(R,0)$ and $(0,R)$; each contributes coefficient one. This proves the displayed coproduct. [F2, step 1.2, algebra] ∎
