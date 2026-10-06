---
id: lem-admissible-square-action-has-a-distinct-leading-monomial
kind: lemma
title: "Admissible square actions have distinct leading monomials"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps:
  - cor-cohomology-over-a-field-is-dual-to-homology-over-that-field
  - thm-cartan-formula-for-steenrod-squares
  - prop-steenrod-square-normalization-instability-and-top-square
  - thm-steenrod-squares-are-well-defined-and-natural
  - lem-mod-two-cohomology-ring-of-infinite-real-projective-space
  - lem-real-projective-space-cellular-homology-and-pinch-map
  - thm-cellular-homology-computes-singular-homology
  - thm-cohomological-kunneth-cross-product-is-a-ring-isomorphism
  - prop-cup-product-is-natural-unital-and-associative
  - def-axiom-of-choice
  - def-mod-two-square-algebra-admissible-sequences-and-excess
dependency_level: 1
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Allen Hatcher, Algebraic Topology"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
      locator: "Section 4.L, printed pp. 490–491: square action on projective-space powers."
    - title: "Tom Weston, An Introduction to Cobordism Theory"
      url: "https://math.stanford.edu/~ralph/morsecourse/cobordismintro%20.pdf"
      locator: "Lemma 12.2, printed p. 23: the projective-product evaluation test. Its disjoint-support assertion is replaced by the local leading-monomial proof below."
verification:
  precheck: pass
---

## Statement

Assume AC. Let $I=(i_1,\ldots,i_k)$ be admissible, let $r\ge e(I)$, and choose $L\ge |I|+1$. On

$$X=(\mathbb{RP}^{L})^r, \qquad H^*(X;\mathbb F_2)= \mathbb F_2[x_1,\ldots,x_r]/(x_1^{L+1},\ldots,x_r^{L+1}),$$

put $P=x_1\cdots x_r$. Order monomials lexicographically by their exponent vectors, largest first. The largest monomial of $Sq^I(P)$ has coefficient one and has exponents

$$(\underbrace{2^k,\ldots,2^k}_{d_k}, \underbrace{2^{k-1},\ldots,2^{k-1}}_{d_{k-1}}, \ldots, \underbrace{2,\ldots,2}_{d_1}, \underbrace{1,\ldots,1}_{r-e(I)}).$$

For fixed total degree $|I|$, different admissible sequences have different largest monomials. The empty sequence gives $P$.

## Facts & Assumptions

**Given:** AC; an admissible sequence $I=(i_1,\ldots,i_k)$ with excess $e(I)$ and differences $d_j=i_j-2i_{j+1}$; an integer $r\ge e(I)$; an integer $L\ge|I|+1$; the space $X=(\mathbb{RP}^L)^r$ with its product cohomology ring; and $P=x_1\cdots x_r$.

[F1] The mod-two cohomology of $\mathbb{RP}^\infty$ is $\mathbb F_2[x]$, and the finite projective space $\mathbb{RP}^L$ has one cellular generator in each degree $0,\ldots,L$ with zero differential, so its cohomology is $\mathbb F_2[x]/(x^{L+1})$ ([[lem-mod-two-cohomology-ring-of-infinite-real-projective-space]], [[lem-real-projective-space-cellular-homology-and-pinch-map]], [[thm-cellular-homology-computes-singular-homology]], [[cor-cohomology-over-a-field-is-dual-to-homology-over-that-field]]).

[F2] The mod-two Künneth cross product identifies $H^*(X;\mathbb F_2)$ with the polynomial ring $\mathbb F_2[x_1,\ldots,x_r]/(x_1^{L+1},\ldots,x_r^{L+1})$, compatibly with cup products ([[thm-cohomological-kunneth-cross-product-is-a-ring-isomorphism]], [[prop-cup-product-is-natural-unital-and-associative]]).

[F3] The Cartan formula computes squares of products as sums of products of squares, and normalization gives $Sq^0x=x$, $Sq^1x=x^2$ on a degree-one class $x$; squares are natural additive operations vanishing above the class degree ([[thm-cartan-formula-for-steenrod-squares]], [[prop-steenrod-square-normalization-instability-and-top-square]], [[thm-steenrod-squares-are-well-defined-and-natural]]).

[F4] The admissible words act on cohomology through the quotient map of the square algebra, and the excess and admissibility calculus is that of the local definition ([[def-mod-two-square-algebra-admissible-sequences-and-excess]]).

[F5] AC is inherited from the field-evaluation duality in [F1], the additive Künneth isomorphism in [F2], and the square-operation and square-algebra suppliers in [F3]–[F4]; the finite doubling-schedule argument below makes no further choices ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

1.1 The published projective-space lemma gives the polynomial ring of $\mathbb{RP}^\infty$ and skeletal restriction isomorphisms through degree $L$. Finite projective space has one mod-two cellular generator in every degree $0,\ldots,L$, zero cellular differential, and no cells above $L$; the cellular comparison gives degreewise finite-free homology, and field evaluation duality makes cohomology vanish above $L$. Thus restriction computes its ring as $\mathbb F_2[x]/(x^{L+1})$, and iterative application of the published finite-free Künneth theorem gives the displayed product ring. Its distinct surviving monomials are linearly independent. [given, F1, F2, F5]

2.1 For a degree-one generator, normalization gives $Sq(x)=x+x^2$. Cartan on a product of $m$ copies gives, by the finite binomial expansion, $$Sq^a(x^m)=\binom ma x^{m+a}.$$ In particular, for $m=2^h$ the polynomial identity $(1+t)^{2^h}=1+t^{2^h}$ over $\mathbb F_2$ gives $Sq^0(x^{2^h})=x^{2^h}$, $Sq^{2^h}(x^{2^h})=x^{2^{h+1}}$, and $Sq^a(x^{2^h})=0$ for all other nonnegative $a$. [step 1.1, F3, algebra]

3.1 Consequently every term in an iterated action on $P$ arises by a finite schedule of doublings. At the step labelled $i_j$, a set of variables is doubled whose current exponents sum to $i_j$. Different schedules may give the same final monomial, so their parity must be considered; their supports are not disjoint. [step 2.1, F3, algebra]

4.1 We prove the largest-monomial assertion by induction on $k$. For $k=1$, exactly $i_1$ of the variables are doubled. Since $r\ge e(I)=i_1$, the largest term doubles the first $i_1$ variables, uniquely. It has coefficient one. [step 3.1, F3, algebra]

5.1 For $k>1$, a variable reaches exponent $2^k$ only if it is doubled at **every** one of the $k$ steps. The first step to act is $i_k$, when all exponents equal one; hence at most $i_k=d_k$ variables can reach $2^k$. Achieving $i_k$ such variables exhausts that first-step budget, and their later costs are forced to be $2^{k-j}i_k$ at step $j$. Subtract those costs from the earlier budgets and discard the now exhausted final step. The remaining sequence is $$I'=(i_1-2^{k-1}i_k,\ i_2-2^{k-2}i_k, \ldots,\ i_{k-1}-2i_k).$$ All its entries are nonnegative by admissibility, and its successive admissibility differences are $d_1,\ldots,d_{k-1}$. Remove any terminal zeros. Its excess is $e(I)-i_k$, and $r-i_k\ge e(I')$. Thus the induction hypothesis constructs the largest remaining term on the remaining variables. Taking the first $i_k$ variables for the full doubling chains constructs a nonzero term with the stated exponent vector. [step 4.1, F3, algebra]

6.1 A monomial with fewer than $i_k$ variables of exponent $2^k$ is lexicographically smaller than that term after placing its exponents in decreasing order. Symmetry of $P$ and of its square action ensures that arranging exponents in decreasing order maximizes lexicographic order. If precisely $i_k$ variables attain exponent $2^k$, their forced all-step chains consume exactly the costs above, so comparison of the remaining exponents is the induction problem for $I'$. Therefore none is larger. For the specified leading monomial, its first $i_k$ variables have uniquely forced chains and the residual leading term has coefficient one by induction; hence the full coefficient is one, not an unproved parity assertion. No displayed term is truncated: a variable's exponent cannot exceed $1+|I|$, because every doubling cost contributes to the total increase $|I|$. Thus $L\ge|I|+1$ suffices. Finally the multiplicities $d_j$ recover the sequence by the backward recursion $i_j=d_j+2i_{j+1}$. Since a normalized sequence has $d_k=i_k>0$, the largest exponent also recovers its length. Distinct admissible sequences therefore have distinct leading monomials. Empty sequences and $r=0$ give the identity action on the unit. [step 5.1, F3, algebra]

7.1 On $P=xyz$, $$Sq^3(P)=x^2y^2z^2,\qquad Sq^2Sq^1(P)=x^4yz+xy^4z+xyz^4+x^2y^2z^2.$$ Both composites are admissible and their supports overlap. Their leading monomials differ, which is exactly the property needed for independence. [step 6.1, F3, F4] ∎
