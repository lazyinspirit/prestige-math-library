---
id: thm-realized-grid-whitney-classes-have-the-full-relative-grading-formula
kind: theorem
title: "Realized grid Whitney classes satisfy the full relative grading formula"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-countable-choice
  - def-grid-diagram-for-an-oriented-knot
  - lem-grid-alexander-grading-integral
  - lem-grid-empty-rectangle-and-annulus-classes-have-explicit-indices
  - lem-equal-whitney-domains-have-equal-boundary-windings-and-fredholm-index
  - lem-continuous-whitney-classes-admit-relative-smooth-fixed-end-models
sources:
  references:
    - title: "Manolescu, Ozsvath and Sarkar, A combinatorial description of knot Floer homology"
      url: "https://arxiv.org/abs/math/0607691"
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
---

## Statement

Assume Countable Choice. Let $G$ be an oriented knot grid of size $n\ge2$, with its actual flat torus and product generator end charts. Write $M_O,M_X$ and $A_G=(M_O-M_X)/2-(n-1)/2$ for the grid grading functions. For every actual continuous Whitney class $\phi:x\to y$ in $\operatorname{Sym}^n(T)$, define its domain and marked multiplicities by the relative point-divisor degrees of any smooth model. Its actual fixed-end Fredholm index $\mu(\phi)$, before source translation, satisfies
$$\mu(\phi)=M_O(x)-M_O(y)+2\sum_{i=1}^n n_{O_i}(\phi),$$
and
$$A_G(x)-A_G(y)=\sum_{i=1}^n n_{X_i}(\phi)-\sum_{i=1}^n n_{O_i}(\phi).$$
These identities hold for all realized classes, with positive, zero or negative marked multiplicities. In particular no condition $n_X=0$ is imposed. They remain valid for the actual linearized index of a smooth finite-energy holomorphic strip with generator ends and the protected product end data, under the auxiliary complex-structure homotopies in the suppliers.

Consequently, an actual index-one holomorphic strip counted with weight $\prod_i U_i^{n_{O_i}}$, if all its marked multiplicities are nonnegative, lowers $M_O$ by one and drops the $A_G$ filtration by exactly $\sum_i n_{X_i}$, when $U_i$ has bidegree $(-2,-1)$. This is the full filtered relative grading assertion, rather than only its zero-$X$ associated graded specialization. It does not assert existence or finiteness of counts, square-zero, move invariance, a grid-to-analytic equivalence, or identification of an absolute analytic grading normalization.

## Statement references

[[def-grid-diagram-for-an-oriented-knot]]

[[lem-grid-alexander-grading-integral]]

## Facts & Assumptions

**Given:** The actual grid, actual Whitney class and product end data in the Statement.

[F1] The grid formulas give integer $M_O,M_X,A_G$. For a rectangle $R:x\to y$ with empty state interior, $$M_P(x)-M_P(y)=1-2n_P(R),\qquad P=O,X.$$ Every unit row and column contains exactly one mark of each type. ([[lem-grid-alexander-grading-integral]], [[def-grid-diagram-for-an-oriented-knot]])

[F2] Every such rectangle is an actual class of index $1$; every unit row and column annulus is an actual loop class of index $2$ at any chosen generator. Their reversals and concatenations are actual classes with additive domains and indices. ([[lem-grid-empty-rectangle-and-annulus-classes-have-explicit-indices]])

[F3] For any two smooth same-end Whitney models their domain difference has boundary a sum of full attaching circles. Equal realized domains have equal actual Fredholm indices, including all positive marked multiplicities. The sphere calculation applies to the torus's explicit one-square oriented polygon, with no additional geometric supplier required. ([[lem-equal-whitney-domains-have-equal-boundary-windings-and-fredholm-index]])

[F4] Every continuous Whitney class admits a smooth fixed-end representative with an invariant, additive actual Fredholm index. The actual index of a finite-energy holomorphic strip with generator ends equals the index of its continuously compactified class. ([[lem-continuous-whitney-classes-admit-relative-smooth-fixed-end-models]])

## Proof

1.1 Label the grid rows and columns cyclically by $0,\ldots,n-1$. A state is its permutation of columns along the rows. Any two permutations are joined by finitely many swaps of consecutive rows: move the column wanted in row zero there by successive adjacent swaps, then do the same in row one without changing row zero, and continue. At each swap use the row band between those consecutive circles and the positively directed column interval from the lower point's column to the upper point's column. Its width is strictly between zero and $n$ because state columns are distinct. Its southwest and northeast corners are the two old points, so it is an oriented rectangle from the old state to the swapped state. Its height is one row band, with no other state points inside. Thus [F2] supplies a finite concatenation $r:x\to y$ of actual empty-state rectangles, with actual domain $D_0$ and additive index. This proves connectivity by actual represented classes, not by declaring arbitrary region chains realizable. [F2, given, construct, algebra]

2.1 Choose an actual smooth model for $\phi$ by [F4], and for $r$ by [F2]. Put $P=D(\phi)-D_0$. By [F3], $\partial P$ is a sum of whole alpha and beta circles. Write $P_{ij}$ for the coefficient on the cell in row band $i$ and column band $j$. The jump across a vertical edge is independent of its row, because it is the coefficient of one whole beta circle. Thus $$P_{ij}-P_{i,j-1}=P_{0j}-P_{0,j-1}$$ for every cyclic pair of neighboring columns. Telescoping from column zero gives $$P_{ij}=a_i+b_j,\qquad a_i=P_{i0},\quad b_j=P_{0j}-P_{00}.$$ This includes the wraparound edges, since the original coefficients are cyclic. It is an explicit integer identity, requiring neither a homology-basis assertion nor realization of a formal periodic chain. Hence $P$ is the sum of $a_i$ times the unit row annulus $i$ and $b_j$ times the unit column annulus $j$. [F2, F3, F4, step 1.1, construct, algebra]

3.1 At the final generator $y$ append the actual row and column loop classes of [F2], with these integer multiplicities, using reversals for negative integers and no factor for zero. There are finitely many factors. This produces an actual class $r':x\to y$ with domain $D_0+P=D(\phi)$. Its index is the sum of the rectangle indices plus $2\sum_i a_i+2\sum_j b_j$. Apply [F3] to actual smooth models of $r'$ and $\phi$: their domains are equal, so their actual indices are equal. No claim that their relative homotopy classes coincide is needed; a zero-domain sphere difference has zero index by that supplier. [F2, F3, F4, step 1.1, step 2.1, construct, algebra]

4.1 For an actual class $q:v\to w$ put $$H(q)=M_O(v)-M_O(w)+2\sum_i n_{O_i}(q).$$ Domain degrees add under concatenation, so $H$ adds by cancellation of the intermediate $M_O$ values, and it negates under reversal. On every rectangle in step1.1 it equals $1$ by [F1]. On each annulus loop it equals $2$, because the endpoint values agree and exactly one $O$ mark lies in that unit band. Therefore $H(r')$ equals the actual index sum in step3.1. Since $r'$ and $\phi$ have the same endpoints and domain, $H(\phi)=H(r')=\mu(\phi)$, proving the full Maslov identity. The nonunique decomposition obtained by adding a constant to all $a_i$ and subtracting it from all $b_j$ gives the same sum, since there are $n$ rows and $n$ columns; no consistency obstruction is hidden in the chosen decomposition. [F1, F2, step 1.1, step 2.1, step 3.1, construct, algebra]

4.2 The rectangle formulas for $P=O,X$ in [F1] give $$A_G(v)-A_G(w)=n_X(R)-n_O(R).$$ This relation adds along the actual rectangle path. A unit row or column loop has one $X$ and one $O$, so both sides of the claimed Alexander relation vanish on that loop and on its reversal. It consequently holds on the actual concatenation $r'$. Equal endpoints and equal domains transfer it to $\phi$ exactly as in step4.1. Negative, zero and positive domain coefficients all obey these integer identities. [F1, F2, step 1.1, step 2.1, step 3.1, construct, algebra]

5.1 For an actual holomorphic strip [F4] identifies its actual linearized index with the class index just computed. If its index is one, the Maslov identity rearranges to $$M_O(y)-2\sum_i n_{O_i}=M_O(x)-1.$$ With the prescribed variable degrees this is precisely the Maslov degree of its weighted output. The Alexander identity likewise gives $$A_G(y)-\sum_i n_{O_i}=A_G(x)-\sum_i n_{X_i}.$$ Nonnegativity of the actual marked multiplicities therefore gives filtration preservation and the stated exact drop, without imposing $n_X=0$. No existence, compactification, count cancellation or grading normalization independent of the grid was used to obtain these relative formulas; those remain separate obligations. [F1, F4, step 4.1, step 4.2, construct, algebra] ∎
