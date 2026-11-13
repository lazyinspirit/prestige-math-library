---
title: Well-defined strip norm and the action of a common endpoint operator
status: draft
research_item: lem-se-author-ccbb64dfef2c-strip-model-well-defined
dependency_level: 0
sources:
  references:
    - title: "J. C. Bellido and G. García-Sáez, Bessel Potential Spaces and Complex
        Interpolation: Continuous embeddings, arXiv:2503.04310v6"
      url: https://arxiv.org/pdf/2503.04310v6
      locator: PDF pp.4–6, §2 before §2.1 (compatible couples, admissible operators,
        retractions); §2.2, PDF pp.9–10 (closed-strip class, Banach boundary
        norm, vector-valued strip maximum inequality and exact operator bound).
      statement: For compatible complex Banach couples, the decaying closed-strip
        class with its maximum boundary norm is Banach. Bounded continuous
        Banach-valued functions holomorphic inside the strip satisfy the
        boundary-maximum bound. The complex interpolation functor is exact of
        exponent s for 0<s<1 and common bounded endpoint operators. An
        admissible operator is one linear map between the sums with bounded
        restrictions to the corresponding endpoints; a retraction pair consists
        of two such maps whose composition is the identity on the retracted sum.
      hypotheses: Each couple consists of complex Banach spaces continuously linearly
        injected into its own common Hausdorff topological vector space. Strip
        functions are bounded and sum-continuous on the closed strip,
        norm-holomorphic inside, with endpoint-norm continuous boundary values
        decaying at imaginary infinity. The parameter satisfies 0<s<1. Operator
        and retraction maps are single complex-linear maps on the sums with
        finite corresponding endpoint bounds; for the retraction conclusion
        their composition is the identity on the retracted sum.
      reading_limits: Inspected the relevant v6 PDF passages on pp.4–6 and §2.2,
        pp.9–10, for the compatible-couple, admissible-operator and retraction
        conventions, strip-class Banach property, vector maximum inequality and
        exact interpolation statement. These abstract facts are imported, not
        reconstructed. No reading of the cited original interpolation books or
        proof reconstruction is claimed. Whole-space Bessel, Bochner and
        exterior-extension assertions are not imported by this lemma.
---

## Prerequisites

- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [math:def-banach-space](https://alphabetamath.cc/item/def-banach-space)
- [math:def-bounded-linear-operator](https://alphabetamath.cc/item/def-bounded-linear-operator)
- [math:thm-quotient-of-banach-by-closed-subspace-is-banach](https://alphabetamath.cc/item/thm-quotient-of-banach-by-closed-subspace-is-banach)
- [math:def-topological-vector-space-for-local-convexity](https://alphabetamath.cc/item/def-topological-vector-space-for-local-convexity)
- [` J. C. Bellido and G. García-Sáez, Bessel Potential Spaces and Complex Interpolation: Continuous embeddings, arXiv:2503.04310v6 · PDF pp.4–6, §2 before §2.1 (compatible couples, admissible operators, retractions); §2.2, PDF pp.9–10 (closed-strip class, Banach boundary norm, vector-valued strip maximum inequality and exact operator bound). `](https://arxiv.org/pdf/2503.04310v6)


## Statement

Assume AC. Let $(X_0,X_1)$ and $(Y_0,Y_1)$ be compatible complex Banach couples: the two members of each couple are continuously linearly injected into a common Hausdorff topological vector space, with possibly different ambient spaces for the two couples. Give $X_0+X_1$ the sum norm $\inf_{x=x_0+x_1}(\|x_0\|_{X_0}+\|x_1\|_{X_1})$, and give $Y_0+Y_1$ the analogous sum norm.

On the closed strip $0\le\operatorname{Re}z\le1$, let $\mathcal F(X_0,X_1)$ consist of bounded sum-continuous functions, norm-holomorphic inside, with continuous $X_j$ boundary values tending to zero as $|\operatorname{Im}z|\to\infty$, and give it the maximum of the two boundary suprema. For $0<s<1$, the space of values $f(s)$, with the infimum of this boundary norm, is a well-defined Banach space $[X_0,X_1]_s$. The same construction and conclusions apply to $(Y_0,Y_1)$.

Let $T:X_0+X_1\to Y_0+Y_1$ be one complex-linear map, with $T(X_j)\subseteq Y_j$ and finite bounds $M_j\ge0$ satisfying $\|Tx\|_{Y_j}\le M_j\|x\|_{X_j}$ for $x\in X_j$, $j=0,1$. Then $f\mapsto T\circ f$ maps $\mathcal F(X_0,X_1)$ into $\mathcal F(Y_0,Y_1)$, and the same map $T$ restricts to a bounded operator satisfying
$$\|T\|_{[X_0,X_1]_s\to[Y_0,Y_1]_s}\le M_0^{1-s}M_1^s.$$

In particular, let $E:X_0+X_1\to Y_0+Y_1$ and $P:Y_0+Y_1\to X_0+X_1$ be single complex-linear maps with $E(X_j)\subseteq Y_j$, $P(Y_j)\subseteq X_j$ and finite bounds $a_j,b_j\ge0$ such that $\|Ex\|_{Y_j}\le a_j\|x\|_{X_j}$ and $\|Py\|_{X_j}\le b_j\|y\|_{Y_j}$ for every $x\in X_j$, $y\in Y_j$, $j=0,1$. If $PE=I_{X_0+X_1}$, their restrictions give bounded maps $E:[X_0,X_1]_s\to[Y_0,Y_1]_s$ and $P:[Y_0,Y_1]_s\to[X_0,X_1]_s$ with $PE=I_{[X_0,X_1]_s}$. Thus this endpoint retraction/coretraction pair remains such a pair after interpolation.

## External input

Reference 0, §2 before §2.1 (PDF pp.4–6), supplies the compatible-couple, admissible-operator and retraction conventions. Its §2.2 (PDF pp.9–10) states that the specified strip-function class is Banach in its maximum boundary norm, gives the vector-valued strip maximum inequality, and states the exact interpolation theorem for admissible maps between two compatible couples. These abstract facts are imported; the sum and evaluation quotient arguments and the applications to the specified common maps below are local compositions. No exterior extension result is included in this input.

## Facts & Assumptions

**Given:** The hypotheses of the Statement and the independently cited external contracts.

[F1] Assume the Axiom of Choice [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice); in particular its countable and dependent instances are available.

[F2] [math:def-banach-space](https://alphabetamath.cc/item/def-banach-space) fixes complex Banach completeness; [math:def-bounded-linear-operator](https://alphabetamath.cc/item/def-bounded-linear-operator) fixes a common complex-linear map and its endpoint bounds.

[F3] [math:thm-quotient-of-banach-by-closed-subspace-is-banach](https://alphabetamath.cc/item/thm-quotient-of-banach-by-closed-subspace-is-banach) applies to a closed kernel in a Banach space; AC supplies its Countable Choice hypothesis.

[F4] Reference 0, §2 before §2.1 (PDF pp.4–6), supplies the compatible-couple, admissible-operator and retraction conventions. Its §2.2 (PDF pp.9–10) states that the specified strip-function class is Banach in its maximum boundary norm, gives the vector-valued strip maximum inequality, and states the exact interpolation theorem for admissible maps between two compatible couples. These abstract facts are imported; the sum and evaluation quotient arguments and the applications to the specified common maps below are local compositions. No exterior extension result is included in this input.

[F5] [math:def-topological-vector-space-for-local-convexity](https://alphabetamath.cc/item/def-topological-vector-space-for-local-convexity) defines the ambient topological vector spaces, the continuity of addition and scalar multiplication, and the separate Hausdorff hypothesis used for each compatible couple.

## Proof

**Given:** The hypotheses and data in the Statement.

**Goal:** Prove the conclusions in the statement under its stated hypotheses.

1.1 The finite product $X_0\oplus_1X_1$ is Banach: a Cauchy sequence has Cauchy coordinates and coordinate limits, and the sum of their distances tends to zero. In the ambient topological vector space the map $(x_0,x_1)\mapsto x_0+x_1$ is continuous by continuity of the injections and addition. Hausdorffness makes $\{0\}$ closed, so its inverse image, the kernel of this map, is closed. The quotient theorem therefore makes the stated sum norm a genuine complete norm on the algebraic sum. The endpoint injections into the sum are contractive. Applying the same argument to $(Y_0,Y_1)$ gives its Banach sum and contractive endpoint injections. [F1, F2, F3, F5, given]

2.1 The imported strip theorem makes $\mathcal F(X_0,X_1)$ Banach. Its vector strip maximum inequality, applied in the sum norm, gives $\|f(s)\|_{X_0+X_1}\le\|f\|_{\mathcal F(X_0,X_1)}$ because endpoint injections into the sum are contractive. Thus evaluation has closed kernel. The quotient theorem applied to this kernel proves that its image with the infimum norm is Banach, independent of the choice of interpolating strip function, and the displayed evaluation bound makes its injection into the sum continuous and definite. This verifies the asserted definition rather than assuming its infimum is automatically a norm. The identical argument for $(Y_0,Y_1)$ establishes its interpolation space and continuous injection into its sum. [F1, F3, F4, step 1.1]

3.1 The specified common endpoint operator is bounded on the sums: for each decomposition $x=x_0+x_1$, $\|Tx\|_{Y_0+Y_1}\le M_0\|x_0\|_{X_0}+M_1\|x_1\|_{X_1}$, so infimizing gives a bound $\max(M_0,M_1)$ on the sum. It therefore maps a strip function to a bounded sum-continuous norm-holomorphic function, since bounded linear maps preserve norm limits and difference quotients. Endpoint continuity and decay are preserved by the endpoint bounds. For positive bounds $M_0,M_1$ apply this to $g(z)=(M_0/M_1)^{z-s}Tf(z)$. Both boundary norms are at most $M_0^{1-s}M_1^s\|f\|_{\mathcal F(X_0,X_1)}$, while $g(s)=Tf(s)$. Taking the infimum over $f$ proves the bound. If one bound is zero, use $M_j+\varepsilon$ and let $\varepsilon\downarrow0$. [F2, F4, step 2.1, algebra]

4.1 Apply step 3.1 to the maps $E:X_0+X_1\to Y_0+Y_1$ and $P:Y_0+Y_1\to X_0+X_1$ from the Statement, using their respective endpoint bounds $a_j$ and $b_j$ and swapping source and target couples for $P$. Their restrictions are bounded on the asserted interpolation spaces. For every $x\in[X_0,X_1]_s\subseteq X_0+X_1$, the assumed sum identity gives $P(Ex)=x$. Because these are the same maps restricted to the interpolation spaces, this is exactly $PE=I_{[X_0,X_1]_s}$. This proves the retraction assertion without replacing either endpoint map. [F2, step 2.1, step 3.1, algebra] ∎

## Source notes

The abstract strip Banach/maximal inequality is the explicit external input in reference 0. The quotient and common-operator applications are locally composed; no source proof reconstruction is claimed.
