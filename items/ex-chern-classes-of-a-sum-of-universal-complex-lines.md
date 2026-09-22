---
id: ex-chern-classes-of-a-sum-of-universal-complex-lines
kind: example
title: Chern classes of a sum of universal complex lines
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: ["thm-naturality-normalization-and-whitney-sum-for-chern-classes", "thm-cohomological-kunneth-cross-product-is-a-ring-isomorphism", "lem-cohomology-ring-of-infinite-complex-projective-space", "def-whitney-sum-tensor-dual-hom-and-exterior-power-bundles", "def-axiom-of-choice", "lem-universal-complex-flag-bundle-is-bt-n", "thm-schubert-cells-give-the-stable-grassmannian-cw-structure", "def-schubert-cells-in-real-and-complex-grassmannians"]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Miller, MIT 18.906 Algebraic Topology II, Lecture 35"
      url: https://ocw.mit.edu/courses/18-906-algebraic-topology-ii-spring-2020/e8a061a73ca1a451df8809c7a7fbc846_MIT18_906S20_notes.pdf
      locator: "Elementary symmetric functions and Chern classes, printed pp.130-132"
---

## Example

Assume AC and let $n\ge0$ be an integer. On $(\mathbb{CP}^\infty)^n$ let $L_i$ be the pullback of the
universal complex line along the $i$-th projection, let $x_i=c_1(L_i)\in H^2((\mathbb{CP}^\infty)^n;\mathbb Z)$, and let
$E=L_1\oplus\cdots\oplus L_n$. Then
$$c(E)=\prod_{i=1}^n(1+x_i),\qquad c_k(E)=e_k(x_1,\dots,x_n),$$
the $k$-th elementary symmetric polynomial for $k\ge0$, with $e_0=1$, in
$H^*((\mathbb{CP}^\infty)^n;\mathbb Z)=\mathbb Z[x_1,\dots,x_n]$.

## Facts & Assumptions

**Given:** AC, the projections $p_i:(\mathbb{CP}^\infty)^n\to\mathbb{CP}^\infty$ and the pulled-back universal lines $L_i=p_i^*\gamma$.

[A1] The Axiom of Choice is assumed, exactly as inherited from the Chern-class and Kunneth suppliers ([[def-axiom-of-choice]]).

[F1] Chern classes are natural and multiplicative over Whitney sums, and on a line $c(L)=1+c_1(L)$ ([[thm-naturality-normalization-and-whitney-sum-for-chern-classes]]).

[F2] $H^*(\mathbb{CP}^\infty;\mathbb Z)=\mathbb Z[u]$ where $u=e(\gamma_{\mathbb R})$, with free finitely generated homology in each degree, and the Kunneth cross product is a ring isomorphism for products of such spaces over a PID ([[lem-cohomology-ring-of-infinite-complex-projective-space]], [[thm-cohomological-kunneth-cross-product-is-a-ring-isomorphism]]).

[F3] Direct sums of complex line bundles are formed fiberwise and are compatible with pullback ([[def-whitney-sum-tensor-dual-hom-and-exterior-power-bundles]]).

[F4] The product of the standard circle classifying bundles models $BT^n=(\mathbb{CP}^\infty)^n$, with the coordinate universal lines ([[lem-universal-complex-flag-bundle-is-bt-n]]).

[F5] The Schubert structures make $\mathbb{CP}^\infty$ a countable CW complex, with one cell in each even dimension: for rank one the symbols are the integers $a_1\ge1$ with cell dimension $2(a_1-1)$ ([[thm-schubert-cells-give-the-stable-grassmannian-cw-structure]], [[def-schubert-cells-in-real-and-complex-grassmannians]]).

## Verification

**Proof technique:** direct.

1.1 The ordinary finite product base is a path-connected CW complex. To verify the topology qualification, exhaust two countable CW factors by increasing finite subcomplexes $X_j,Y_j$. Their product cells have finite closures. If $W$ is open in the product cell topology and $(a,b)\in W$, choose compact product neighborhoods $K_1\times M_1\subset W$ in the first finite stages containing the point. Given $K_j\times M_j\subset W$, compactness of $M_j$ gives for each $x\in K_j$ compact neighborhoods $K_x$ of $x$ and $M_x$ of $M_j$ in the next finite stages with $K_x\times M_x\subset W$. A finite collection of the interiors of $K_x$ covers $K_j$; take their union for $K_{j+1}$ and the intersection of the corresponding $M_x$ for $M_{j+1}$. The unions of the relative interiors of $K_j$ and $M_j$ are open in the weak CW topologies: on each finite stage their tails are an increasing union of open sets. Their product lies in $W$. Thus the ordinary product and cell topologies agree. Product characteristic maps give the CW structure (a product of two disks is a disk with its product boundary), and the resulting product still has countably many cells. Induction proves the assertion using [F5]. Path connectivity follows coordinatewise. [F5]

2.1 For $n\ge1$, step 1.1 supplies the CW base. The coordinate universal circle bundles of [F4] are numerable; their associated complex lines and their pullbacks are numerable by pulling back the same local partitions. Thus the hypotheses of [F1] hold; a finite sum remains numerable by multiplying the finitely many local partition functions. Each $L_i$ is a complex line bundle and $E=\bigoplus_iL_i$ by [F3]; by multiplicativity and line normalization [F1], $c(E)=\prod_ic(L_i)=\prod_i(1+x_i)$. [F1, F3, F4, step 1.1, given]

3.1 Each $x_i$ has cohomological degree two, so the degree-$2k$ component of the product is $c_k(E)=\sum_{1\le i_1<\cdots<i_k\le n}x_{i_1}\cdots x_{i_k}=e_k(x_1,\ldots,x_n)$. The empty product for $k=0$ is $1$ and the empty sum for $k>n$ is $0$. Equivalently these are the coefficients of $z^k$ in the formal polynomial $\prod_i(1+x_i z)$; polynomial degree in $z$ is distinct from cohomological degree. [step 2.1, algebra]

4.1 By naturality and line normalization in [F1], $x_i=p_i^*u$, for the specific generator $u=e(\gamma_{\mathbb R})$ of [F2]. Apply the Kunneth ring isomorphism repeatedly, taking one new $\mathbb{CP}^\infty$ factor each time: that factor has finite free integral homology in every degree, which suffices for the supplier even though the full cohomology is not finitely generated. The cross product sends its coordinate generators to the $p_i^*u=x_i$. Every generator has even degree, so all graded tensor signs are $+1$. This identifies the ring with $\mathbb Z[x_1,\ldots,x_n]$, with no relations among the $x_i$. [F1, F2, step 3.1]

5.1 Boundary cases. For $n=0$ the base is a point, $E$ is the rank-zero bundle, the empty product is $1$, and the ring is $\mathbb Z$ with no variables; [F1] gives exactly these Chern conventions. For $n=1$ the product is $1+x_1$ and $E=L_1$; for $k>n$ the elementary symmetric polynomial $e_k$ vanishes, matching the rank cutoff. If a line is replaced by a trivial summand, its first class is zero and its factor is $1$ by [F1]; this is a specialization, not a claim that one of the given universal coordinate lines is trivial. The coefficient ring $\mathbb Z$ is nonzero and the product is finite, so no convergence question arises. AC is used only through [A1]. [A1, F1, step 3.1] ∎

## Source notes

This is the elementary-symmetric computation of Miller's Lecture 35: the Chern classes of a sum of lines are the elementary symmetric functions of the line classes, which is also the mechanism behind $H^*(B\mathbb U(n);\mathbb Z)=\mathbb Z[c_1,\dots,c_n]$.

The ordinary product topology in step 1.1 agrees with the product CW topology because each factor has countably many cells; see Hatcher, *Algebraic Topology*, Appendix Theorem A.6, printed p.524: https://pi.math.cornell.edu/~hatcher/AT/AT.pdf .
