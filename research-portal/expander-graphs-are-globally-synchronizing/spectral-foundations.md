---
title: Spectral estimates and phase landscapes
description: Supply graph and matrix conventions, centered cut estimates,
  angular and numerical controls, and graph-specific and vector-spin landscape
  applications.
status: draft
dependency_level: 1
---

**Purpose:** Supply graph and matrix conventions, centered cut estimates, angular and numerical controls, and graph-specific and vector-spin landscape applications.

## Finite symmetric networks and loop removal

[Open item](item-def-expander-prereq-loop-compatible-networks) · level 0


### Definition

A **network** consists of a nonempty finite vertex set $V$ and a real matrix $A=(A_{xy})_{x,y\in V}$ that is symmetric and entrywise nonnegative. A diagonal entry $A_{xx}$ is a loop weight. Its **loop-free part** is $W=A-\operatorname{diag}(A_{xx})$, where the diagonal matrix has entries $A_{xx}$ and all off-diagonal entries zero. The **support graph** has vertex set $V$ and edge set $\{\{x,y\}:x\ne y,\ W_{xy}>0\}$. Define the degree $d(x)=\sum_{y\in V}A_{xy}$, counting the diagonal entry once, and put $D=\operatorname{diag}(d(x))$. The network Laplacian is $D-A$.

The matrix $D-A$ is also the weighted Laplacian of $W$: $D-A=\operatorname{diag}(\sum_y W_{xy})-W$. A simple unweighted graph is represented by the special case $A_{xx}=0$ and $A_{xy}\in\{0,1\}$ for all $x,y$; its edges are precisely the pairs with $A_{xy}=1$.

### Facts & Assumptions

[F1] A finite simple graph has edges that are two-element subsets of its vertex set; its adjacency matrix has entry one exactly at adjacent distinct vertices. See [math:def-finite-simple-graph](https://alphabetamath.cc/item/def-finite-simple-graph) and [math:def-adjacency-matrix-of-a-finite-simple-graph](https://alphabetamath.cc/item/def-adjacency-matrix-of-a-finite-simple-graph).

[F2] For a finite symmetric nonnegative matrix with zero diagonal, the weighted Laplacian is the diagonal matrix of row sums minus that matrix, and its support graph has an edge exactly at a positive entry. See [math:def-finite-weighted-graph-laplacian](https://alphabetamath.cc/item/def-finite-weighted-graph-laplacian).

[F3] A finite square matrix over $\mathbb R$ is a function on a finite square index set; a listing of $V$ identifies a $V$-indexed real array with such a matrix. See [math:def-matrices-over-a-commutative-ring](https://alphabetamath.cc/item/def-matrices-over-a-commutative-ring).

[F4] A sum of real numbers indexed by a finite set is the sum in the additive commutative monoid of $\mathbb R$, computed using any enumeration; its value is independent of that enumeration. See [math:def-finite-sum-in-a-commutative-monoid](https://alphabetamath.cc/item/def-finite-sum-in-a-commutative-monoid).

### Justification

**Given:** A network $(V,A)$ as defined above.

**Goal:** Verify the support-graph and Laplacian constructions and the simple-graph special case.

1.1 Choose a listing $V=\{v_1,\ldots,v_n\}$, where $n=|V|\ge1$. The array $A$ becomes the square real matrix with entries $A_{v_i v_j}$; diagonal matrices and matrix differences here are formed entrywise. The row sums in this listing agree with the sums indexed by $V$ and do not depend on the listing. The matrix $W$ is symmetric and nonnegative, has zero diagonal, and has $W_{xy}=A_{xy}$ for $x\ne y$. Thus its positive off-diagonal entries define an unordered set of two-element subsets of $V$, and the support graph is a finite simple graph. After any listing of $V$, $W$ satisfies the hypotheses of the weighted-Laplacian definition. [given, F1, F2, F3, F4]

2.1 For each $x$, $\sum_y W_{xy}=d(x)-A_{xx}$. Consequently $D=\operatorname{diag}(\sum_y W_{xy})+\operatorname{diag}(A_{xx})$ and $A=W+\operatorname{diag}(A_{xx})$, so the diagonal terms cancel in $D-A$. If $A$ has zero diagonal and entries in $\{0,1\}$, its support graph has adjacency matrix $A$ in any chosen vertex order; conversely every finite simple graph on nonempty $V$ gives such a matrix. This also shows that the degree $d(x)$ retains a loop weight even though the Laplacian does not. [step 1.1, F1, F2, F3, F4, algebra] ∎


## Finite vertex Hilbert space in the article convention

[Open item](item-def-expander-prereq-vertex-hilbert-space) · level 0


### Definition

Let $V$ be a finite set. The complex vector space $\mathbb C^V$ consists of all functions $f:V\to\mathbb C$, with addition and scalar multiplication defined pointwise. Its vertex inner product, linear in the second argument, and its induced norm are

$$\langle f,g\rangle=\sum_{x\in V}\overline{f(x)}g(x),\qquad \|f\|_2=\sqrt{\langle f,f\rangle}.$$

Thus $f$ and $g$ are orthogonal when $\langle f,g\rangle=0$. This is a complex Hilbert space: its induced norm metric is complete, meaning that every Cauchy sequence converges in $\mathbb C^V$.

A complex $V\times V$ matrix is an array $A=(A_{xy})_{x,y\in V}$. It acts on $\mathbb C^V$ by $(Af)(x)=\sum_{y\in V}A_{xy}f(y)$. Its conjugate transpose is the matrix $A^*$ with $(A^*)_{xy}=\overline{A_{yx}}$. An adjoint of this action is a linear map $T$ satisfying $\langle Af,g\rangle=\langle f,Tg\rangle$ for all $f,g$; here it is the action of $A^*$. The matrix is self-adjoint, or Hermitian, when $A=A^*$; in particular every real symmetric matrix, one satisfying $A_{xy}=A_{yx}\in\mathbb R$, is self-adjoint.

For comparison with the library's linear-first convention, put $(f,g)_{\mathrm{lib}}=\sum_{x\in V}f(x)\overline{g(x)}=\overline{\langle f,g\rangle}$. The two conventions have the same norm and orthogonality. The adjoint and self-adjoint matrices are also the same in both conventions. For self-adjoint $A$, the quadratic values $\langle f,Af\rangle$ and $(f,Af)_{\mathrm{lib}}$ coincide and are real. Consequently a linear-first Cauchy–Schwarz bound transfers by taking absolute values, and a linear-first self-adjoint spectral statement transfers with the same operator, eigenvectors and real eigenvalues, subject to the hypotheses of the statement used.

### Definition references

[math:def-inner-product-space](https://alphabetamath.cc/item/def-inner-product-space)

[math:def-inner-product-norm](https://alphabetamath.cc/item/def-inner-product-norm)

[math:def-matrices-over-a-commutative-ring](https://alphabetamath.cc/item/def-matrices-over-a-commutative-ring)

[math:def-finite-sum-in-a-commutative-monoid](https://alphabetamath.cc/item/def-finite-sum-in-a-commutative-monoid)

[math:def-hilbert-space](https://alphabetamath.cc/item/def-hilbert-space)

[math:def-adjoint-of-a-linear-map-between-inner-product-spaces](https://alphabetamath.cc/item/def-adjoint-of-a-linear-map-between-inner-product-spaces)

[math:def-linear-map](https://alphabetamath.cc/item/def-linear-map)

[math:def-linear-basis](https://alphabetamath.cc/item/def-linear-basis)

[math:def-eigenvalue-eigenvector-eigenspace-and-spectrum](https://alphabetamath.cc/item/def-eigenvalue-eigenvector-eigenspace-and-spectrum)

[math:def-vector-space](https://alphabetamath.cc/item/def-vector-space)

[math:def-complex-conjugate-real-imaginary-part-and-modulus](https://alphabetamath.cc/item/def-complex-conjugate-real-imaginary-part-and-modulus)

[math:lem-complex-conjugation-and-modulus-laws](https://alphabetamath.cc/item/lem-complex-conjugation-and-modulus-laws)

### Justification

The finite sums are independent of enumeration and include the empty sum ([math:def-finite-sum-in-a-commutative-monoid](https://alphabetamath.cc/item/def-finite-sum-in-a-commutative-monoid)). Pointwise operations make $\mathbb C^V$ a complex vector space in the sense of [math:def-vector-space](https://alphabetamath.cc/item/def-vector-space). Direct expansion using [math:def-complex-conjugate-real-imaginary-part-and-modulus](https://alphabetamath.cc/item/def-complex-conjugate-real-imaginary-part-and-modulus) and [math:lem-complex-conjugation-and-modulus-laws](https://alphabetamath.cc/item/lem-complex-conjugation-and-modulus-laws) shows that $(f,g)_{\mathrm{lib}}$ is linear in $f$, conjugate symmetric and has diagonal $\sum_x|f(x)|^2$, which is nonnegative and vanishes only when $f=0$; it is therefore an inner product in the library convention ([math:def-inner-product-space](https://alphabetamath.cc/item/def-inner-product-space)). Its conjugate is the displayed second-linear pairing. Both have the same diagonal and hence the same induced norm ([math:def-inner-product-norm](https://alphabetamath.cc/item/def-inner-product-norm)), which is a norm by [math:cor-inner-product-induces-a-norm](https://alphabetamath.cc/item/cor-inner-product-induces-a-norm).

Choose an enumeration of the finite set $V$. The indicator functions of its singletons form an ordered basis in the sense of [math:def-linear-basis](https://alphabetamath.cc/item/def-linear-basis): they span each function by its finite coordinate expansion, and evaluating a linear combination at each vertex proves independence. This includes the empty basis when $V=\varnothing$. Thus [math:cor-finite-dimensional-normed-spaces-are-banach](https://alphabetamath.cc/item/cor-finite-dimensional-normed-spaces-are-banach) makes the induced norm complete, and [math:def-hilbert-space](https://alphabetamath.cc/item/def-hilbert-space) gives the Hilbert-space designation.

An enumeration identifies the array with a finite square matrix as in [math:def-matrices-over-a-commutative-ring](https://alphabetamath.cc/item/def-matrices-over-a-commutative-ring); the displayed action is linear by distributivity, in the sense of [math:def-linear-map](https://alphabetamath.cc/item/def-linear-map). Interchanging the two finite sums gives $\langle Af,g\rangle=\sum_y\overline{f(y)}\sum_x\overline{A_{xy}}g(x)=\langle f,A^*g\rangle$. The action of $A^*$ is linear, so it is an adjoint under the stated convention; it is unique because pairing the difference of two candidates with every $f$, including the difference itself, forces that difference to vanish. Conjugating the adjoint identity gives the defining linear-first identity of [math:def-adjoint-of-a-linear-map-between-inner-product-spaces](https://alphabetamath.cc/item/def-adjoint-of-a-linear-map-between-inner-product-spaces), so the same adjoint works there.

Conjugation preserves zero and absolute value ([math:lem-complex-conjugation-and-modulus-laws](https://alphabetamath.cc/item/lem-complex-conjugation-and-modulus-laws)), proving the orthogonality and Cauchy–Schwarz transfers. If $A=A^*$, the adjoint identity and conjugate symmetry give $\langle f,Af\rangle=\overline{\langle f,Af\rangle}$; the value is real and hence equals its conjugate, the library-convention value. The eigenvector equation $Af=\lambda f$ with $f\ne0$, as in [math:def-eigenvalue-eigenvector-eigenspace-and-spectrum](https://alphabetamath.cc/item/def-eigenvalue-eigenvector-eigenspace-and-spectrum), does not involve a pairing, and self-adjointness is unchanged, so a spectral theorem in the library convention applies to the same operator and vectors whenever its own hypotheses hold.


## Angular order and elementary inverse-trigonometric bounds

[Open item](item-prop-expander-prereq-ordered-angle-inequalities) · level 0


### Statement

Cosine is strictly decreasing on $[0,\pi]$, and sine is nonnegative there. The principal inverse sine $\arcsin:[-1,1]\to[-\pi/2,\pi/2]$ maps $[0,1]$ into $[0,\pi/2]$. For $0\le x\le1$, $\arcsin x\le\pi x/2$, with equality precisely at $x=0$ and $x=1$. For $0\le x\le1/4$, $\arcsin x\le1.05x$, with equality precisely at $x=0$. Here $\log$ denotes the natural logarithm. For $x\ge0$, $\log(1+x)\ge2x/(2+x)$, with equality precisely at $x=0$.

### Facts & Assumptions

[F1] Sine is strictly increasing on $[-\pi/2,\pi/2]$ and strictly decreasing on $[\pi/2,3\pi/2]$; cosine is strictly decreasing on $[0,\pi]$. Also $\sin0=\sin\pi=0$ and $\sin(\pi/2)=1$ ([math:thm-sine-cosine-signs-monotonicity-and-ranges](https://alphabetamath.cc/item/thm-sine-cosine-signs-monotonicity-and-ranges), [math:thm-sine-cosine-zero-sets-and-fundamental-period](https://alphabetamath.cc/item/thm-sine-cosine-zero-sets-and-fundamental-period), [math:thm-quarter-turn-values-and-shift-formulas](https://alphabetamath.cc/item/thm-quarter-turn-values-and-shift-formulas)).

[F2] The principal inverse sine is the continuous inverse of sine restricted to $[-\pi/2,\pi/2]$, and its derivative at $-1<y<1$ is $1/\sqrt{1-y^2}$ ([math:def-principal-inverse-sine-and-cosine](https://alphabetamath.cc/item/def-principal-inverse-sine-and-cosine), [math:thm-principal-inverse-sine-and-cosine-derivatives](https://alphabetamath.cc/item/thm-principal-inverse-sine-and-cosine-derivatives)).

[F3] The natural logarithm is the inverse of the real exponential on positive arguments; it is continuous there, has value $0$ at $1$, and has derivative $1/t$ at $t>0$ ([math:def-natural-logarithm](https://alphabetamath.cc/item/def-natural-logarithm), [math:thm-natural-logarithm-laws](https://alphabetamath.cc/item/thm-natural-logarithm-laws), [math:thm-logarithm-derivative-and-integral](https://alphabetamath.cc/item/thm-logarithm-derivative-and-integral)).

[F4] The mean value theorem applies to a function continuous on a closed interval and differentiable in its interior. The usual sum, quotient and chain rules apply where their denominators are nonzero; every nonnegative real has a unique nonnegative square root ([math:cor-mean-value-theorem](https://alphabetamath.cc/item/cor-mean-value-theorem), [math:lem-derivative-algebra-and-chain-rules](https://alphabetamath.cc/item/lem-derivative-algebra-and-chain-rules), [math:thm-of-square-roots](https://alphabetamath.cc/item/thm-of-square-roots)).

### Proof

**Given:** The real variables in the intervals stated above.

**Goal:** Establish the stated order, bounds and equality cases.

1.1 The cosine assertion is immediate from [F1]. On $[0,\pi/2]$ sine increases from $0$ to $1$, and on $[\pi/2,\pi]$ it decreases from $1$ to $0$, so it is nonnegative on the whole interval. By the inverse definition and these endpoint values, $\arcsin0=0$, $\arcsin1=\pi/2$, and $\arcsin$ maps $[0,1]$ into $[0,\pi/2]$. [F1, F2]

2.1 Put $f(t)=\arcsin t$. Its derivative $f'(t)=1/\sqrt{1-t^2}$ is strictly increasing on $[0,1)$: for $0\le s<t<1$, the positive square roots satisfy $\sqrt{1-s^2}>\sqrt{1-t^2}$. For $0<x<1$, apply the mean value theorem on $[0,x]$ and $[x,1]$. The resulting interior points $a<x<b$ give $f(x)/x=f'(a)<f'(b)=(f(1)-f(x))/(1-x)$, and hence $f(x)<x f(1)=\pi x/2$. Equality holds at both endpoints by step 1.1. [F2, F4, step 1.1, algebra]

2.2 If $0<x\le1/4$, the mean value theorem on $[0,x]$ gives $f(x)=x/\sqrt{1-c^2}$ for some $0<c<x$. Thus $f(x)\le4x/\sqrt{15}<21x/20=1.05x$: the strict numerical comparison follows by squaring the positive sides, since $1600<1653$. At $x=0$ equality holds. [F2, F4, step 1.1, algebra]

3.1 Let $g(x)=\log(1+x)-2x/(2+x)$ for $x\ge0$. It is continuous on every closed interval $[0,x]$, differentiable inside, and $g(0)=0$. The derivative rules give $g'(t)=1/(1+t)-4/(2+t)^2=t^2/((1+t)(2+t)^2)$ for $t>0$. This derivative is positive, so the mean value theorem gives $g(x)>0$ for $x>0$; at $x=0$ it is zero. These results establish all the claims. [F3, F4, step 1.1, step 2.1, step 2.2, algebra] ∎


## Geometric growth, truncation and total decrement budgets

[Open item](item-prop-expander-prereq-geometric-growth-budget) · level 0


### Statement

Let $q>1$ and $b>0$. For every integer $k\ge 0$, $\sum_{j=k}^{\infty}bq^{-j}=bq^{-k}q/(q-1)$.

Let $M>0$ and let $(a_j)_{j\ge 0}$ be a positive real sequence satisfying $a_{j+1}\ge\min\{qa_j,M\}$ for every $j\ge0$. Reaching the cap means having $a_j\ge M$; the sequence may overshoot it. For every $j$, $a_j\ge\min\{q^ja_0,M\}$, and before the first cap crossing $a_j\ge q^ja_0$. If $0<a_0<M$, the cap is reached in at most $\lceil\log(M/a_0)/\log q\rceil$ updates, where $\lceil x\rceil$ is the least integer at least $x$. If $a_0\ge M$, it is already reached.

A geometric stage beginning at an index $k$ is a consecutive finite or infinite collection of indices $j\ge k$ for which $a_j\ge a_kq^{j-k}$. If nonnegative angle decrements $d_j$ on such a stage satisfy $d_j\le b/a_j$, their total is at most $bq/(a_k(q-1))$; for an infinite stage the total denotes the convergent series of decrements.

### Statement references

[math:thm-geometric-series](https://alphabetamath.cc/item/thm-geometric-series)

[math:thm-natural-logarithm-laws](https://alphabetamath.cc/item/thm-natural-logarithm-laws)

[math:lem-integer-part](https://alphabetamath.cc/item/lem-integer-part)

[math:thm-induction-principle](https://alphabetamath.cc/item/thm-induction-principle)

[math:lem-power-laws](https://alphabetamath.cc/item/lem-power-laws)

[math:thm-monotone-convergence](https://alphabetamath.cc/item/thm-monotone-convergence)

[math:def-sequence](https://alphabetamath.cc/item/def-sequence)

[math:def-integer-power](https://alphabetamath.cc/item/def-integer-power)

[math:def-finite-sum](https://alphabetamath.cc/item/def-finite-sum)

[math:def-series](https://alphabetamath.cc/item/def-series)

### Facts & Assumptions

[F1] For $|r|<1$, the geometric series has sum $\sum_{h=0}^{\infty}r^h=1/(1-r)$ ([math:thm-geometric-series](https://alphabetamath.cc/item/thm-geometric-series)).

[F2] The logarithm is strictly increasing on the positive reals, $\log 1=0$, and $\log(xy)=\log x+\log y$ for positive $x,y$ ([math:thm-natural-logarithm-laws](https://alphabetamath.cc/item/thm-natural-logarithm-laws)).

[F3] Every real $x$ has an integer part $m$ with $m\le x<m+1$; consequently the least integer at least $x$ exists ([math:lem-integer-part](https://alphabetamath.cc/item/lem-integer-part)).

[F4] A property of natural numbers holding at zero and preserved by the successor step holds for every natural number ([math:thm-induction-principle](https://alphabetamath.cc/item/thm-induction-principle)).

[F5] Integer powers of a nonzero real obey $q^{m+n}=q^mq^n$ and $q^{-m}=1/q^m$; in particular $q^{j+1}=q^jq$ ([math:lem-power-laws](https://alphabetamath.cc/item/lem-power-laws)).

[F6] Every nondecreasing real sequence bounded above converges to its supremum ([math:thm-monotone-convergence](https://alphabetamath.cc/item/thm-monotone-convergence)).

### Proof

**Given:** The positive numbers $q-1$, $b$, $M$ and the sequence $(a_j)$ satisfy the stated hypotheses.

**Goal:** Establish the tail identity, growth and stopping bounds, and the decrement budget.

1.1 Set $r=1/q$, so $0<r<1$. By the power laws, $q^{-(k+h)}=q^{-k}r^h$. Factoring $bq^{-k}$ from the partial sums and applying the geometric-series formula gives $\sum_{j=k}^{\infty}bq^{-j}=bq^{-k}/(1-1/q)=bq^{-k}q/(q-1)$. [given, F1, F5, algebra]

1.2 Induct on $j$ to show $a_j\ge\min\{q^ja_0,M\}$. At $j=0$ this is immediate. If it holds at $j$, then $qa_j\ge\min\{q^{j+1}a_0,qM\}$; since $qM>M$, the recurrence yields $a_{j+1}\ge\min\{q^{j+1}a_0,M\}$. Thus the claim holds for every $j$. If $a_j<M$, the minimum cannot equal $M$, so $a_j\ge q^ja_0$. [given, F4, F5, algebra]

2.1 Suppose $a_0<M$ and set $x=\log(M/a_0)/\log q$ and $N=\lceil x\rceil$. Since $M/a_0>1$ and $q>1$, strict logarithmic monotonicity gives $x>0$; the integer-part property gives a finite positive integer $N\ge x$. Repeated use of the logarithm product law gives $\log(q^N)=N\log q\ge\log(M/a_0)$, so strict monotonicity gives $q^Na_0\ge M$. Step 1.2 then gives $a_N\ge M$. If $a_0\ge M$, the cap is reached at index zero. [given, F2, F3, F4, F5, step 1.2, algebra]

3.1 On a geometric stage beginning at $k$, positivity and the stage bound give $0\le d_{k+h}\le(b/a_k)q^{-h}$ for each included index. Every finite partial total is therefore bounded above by the corresponding finite geometric sum, hence by $bq/(a_k(q-1))$ from step 1.1 with $k=0$. For an infinite stage these partial totals are nondecreasing and bounded, so they converge by F6, and their limit has the same upper bound. This proves all the stated bounds. [given, F5, F6, step 1.1, algebra] ∎


## Root and sign certificates for parameter-dependent polynomials

[Open item](item-def-expander-prereq-polynomial-root-certificates) · level 0


### Definition

Let $p$ be a real polynomial in two formal indeterminates $X,T$, understood as a finite coefficient family. For real $x,a$, define $p(x,a)$ as the image of $p$ under the evaluation homomorphism $\operatorname{ev}_{x,a}:\mathbb{R}[X,T]\to\mathbb{R}$ that fixes real constants and sends $X$ to $x$ and $T$ to $a$. Let $A=[a_-,a_+]$ and $I=[u,v]$ be nonempty closed bounded real intervals, with $u<v$.

A **sign certificate** for $p$ on $I\times A$ is a proof of a stated sign inequality for every $(x,a)\in I\times A$, or a proof of an enclosure $p(x,a)\in[L,U]$ for every such pair. An enclosure proves $p>0$ if $L>0$, and proves $p<0$ if $U<0$; non-strict endpoint inequalities give the corresponding non-strict signs.

A **root certificate** on $I$ over $A$ consists of proofs that, for every $a\in A$, the function $x\mapsto p(x,a)$ is continuous on $I$, its endpoint values have strictly opposite signs, and it is strictly monotone on $I$. Strict monotonicity means either $p(x,a)<p(y,a)$ for every $u\le x<y\le v$, or $p(x,a)>p(y,a)$ for every such pair; the direction may depend on $a$. To certify uniqueness on a larger specified real set $I\subseteq D\subseteq\mathbb{R}$, the certificate also contains a proof that $p(x,a)\ne0$ for every $x\in D\setminus I$ and every $a\in A$.

For a cubic $b_3x^3+b_2x^2+b_1x+b_0$ with $b_3\ne0$, its **discriminant** is $\Delta=b_2^2b_1^2-4b_3b_1^3-4b_2^3b_0-27b_3^2b_0^2+18b_3b_2b_1b_0$. A discriminant-based certificate must state the applicable root-count theorem and verify its hypotheses separately in the cases $\Delta<0$, $\Delta=0$, and $\Delta>0$ that occur in the parameter range, including parameter endpoints. This definition itself asserts no root count from the discriminant.

### Definition references

[math:def-polynomial-ring-on-a-family-of-indeterminates](https://alphabetamath.cc/item/def-polynomial-ring-on-a-family-of-indeterminates)

[math:thm-universal-property-of-a-polynomial-ring-on-a-family](https://alphabetamath.cc/item/thm-universal-property-of-a-polynomial-ring-on-a-family)

[math:def-interval](https://alphabetamath.cc/item/def-interval)

[math:def-continuity-real](https://alphabetamath.cc/item/def-continuity-real)

### Justification

The evaluation homomorphism exists uniquely by [math:thm-universal-property-of-a-polynomial-ring-on-a-family](https://alphabetamath.cc/item/thm-universal-property-of-a-polynomial-ring-on-a-family), applied with both coefficient and target ring equal to $\mathbb{R}$, the coefficient homomorphism the identity, and the two assigned values $x,a$. The closed intervals are those of [math:def-interval](https://alphabetamath.cc/item/def-interval), and continuity on $I$ means continuity at every point of $I$ as in [math:def-continuity-real](https://alphabetamath.cc/item/def-continuity-real).

For each fixed $a\in A$, the continuity and opposite-sign conditions give a zero in $[u,v]$ by [math:thm-intermediate-value](https://alphabetamath.cc/item/thm-intermediate-value). Strict monotonicity gives at most one zero there: two distinct zeros would have strictly ordered values. The additional exclusion gives uniqueness throughout $D$. A derivative-sign proof of strict monotonicity may use [math:thm-monotonicity-from-the-derivative](https://alphabetamath.cc/item/thm-monotonicity-from-the-derivative) only after checking continuity on the interval, differentiability at its interior points, and a strictly positive or strictly negative derivative throughout those points.

A finite outward-rounded interval calculation may establish an enclosure only under the domain and finite-result conditions of [math:lem-real-interval-arithmetic-preserves-enclosure](https://alphabetamath.cc/item/lem-real-interval-arithmetic-preserves-enclosure); an inconclusive enclosure does not establish a sign. Multiplication of an inequality by a denominator requires a proof of its sign on the relevant domain: a positive denominator preserves the inequality, a negative one reverses it, by [math:lem-of-sign-rules](https://alphabetamath.cc/item/lem-of-sign-rules); equality is preserved by either multiplication, so the same rules apply to non-strict inequalities. Division requires the denominator to be nonzero. These certificates are proof obligations for the particular polynomial and parameter range; they do not themselves establish a sign or root count for any article polynomial.


## Pairings, simple-graph conditioning and model transfer

[Open item](item-def-expander-prereq-regular-pairing-conditioning) · level 0


### Definition

Let $n$ be a positive integer and $d$ a nonnegative integer with $nd=2m$ even. Put $V=\{1,\ldots,n\}$ and attach to each vertex $v$ the $d$ labelled half-edges $(v,1),\ldots,(v,d)$. A pairing is a partition of these $2m$ distinct half-edges into unordered two-element blocks; equivalently, it is a perfect matching of the complete simple graph on the half-edges. The empty set has one pairing. Choose a pairing uniformly from the finite set of all pairings.

Collapse each block to an edge between its two incident vertices. The result is a multigraph: different blocks may give the same unordered endpoints, and a block with both half-edges at one vertex gives a loop. Its degree at a vertex is the number of incident half-edges, so a loop contributes two and every vertex has degree $d$. Let $S$ be the event that the result has neither loops nor repeated edges; on $S$ the result is a simple graph. A labelled simple $d$-regular graph on $V$ is a set of two-element subsets of $V$ in which each vertex belongs to exactly $d$ edges.

If $S$ is nonempty, condition on $S$. The resulting simple graph is uniform over all labelled simple $d$-regular graphs on $V$. Each such graph has exactly $(d!)^n$ pairing realizations. There are $(2m)!/(2^m m!)$ pairings in all. For any event $A$ of pairings, $P(A^c\mid S)\leq P(A^c)/P(S)$, where $A^c$ is the complement of $A$ in the pairing space. Thus along any sequence with $P(S)>0$ and $P(A^c)/P(S)\to0$, the conditional probability of $A$ tends to one. In particular, a uniform positive lower bound on $P(S)$ suffices when $P(A^c)\to0$. No lower bound on $P(S)$ is asserted here.

The degree convention counts a loop twice. This differs from a matrix convention that puts a single unit in a diagonal entry for a loop: the corresponding row sum counts that loop once.

### Facts & Assumptions

[F1] The complete simple graph on a finite set has all two-element subsets of that set as edges, including when the set is empty ([math:def-standard-complete-bipartite-path-and-cycle-graphs](https://alphabetamath.cc/item/def-standard-complete-bipartite-path-and-cycle-graphs)). A perfect matching consists of disjoint edges saturating every vertex; a simple graph has edges that are two-element subsets of its vertex set ([math:def-matching-maximum-perfect-and-matching-number](https://alphabetamath.cc/item/def-matching-maximum-perfect-and-matching-number), [math:def-finite-simple-graph](https://alphabetamath.cc/item/def-finite-simple-graph)).

[F2] In a nonempty finite uniform probability space each outcome has the same weight, and an event has probability equal to its cardinality divided by the cardinality of the outcome set ([math:def-uniform-finite-probability-space](https://alphabetamath.cc/item/def-uniform-finite-probability-space), [math:def-finite-probability-space-and-event](https://alphabetamath.cc/item/def-finite-probability-space-and-event)).

[F3] For events $B,C$ with $P(C)>0$, conditional probability is $P(B\mid C)=P(B\cap C)/P(C)$ ([math:def-conditional-probability](https://alphabetamath.cc/item/def-conditional-probability)).

[F4] The factorial satisfies $0!=1$ and $k!=k(k-1)!$ for positive integers $k$ ([math:def-factorial-and-falling-factorial](https://alphabetamath.cc/item/def-factorial-and-falling-factorial)).

### Justification

**Given:** The labelled half-edges and integers specified in the definition; for conditioning assume additionally that $S$ is nonempty.

**Goal:** Establish that the construction and probabilities are well defined, count the pairings and graph realizations, and prove the conditional transfer bound.

1.1 The half-edge set is finite with even cardinality. Listing its elements and pairing successive elements constructs a pairing; for $m=0$ the empty partition is the unique pairing. Hence the uniform law exists by [F2]. Each half-edge occurs in exactly one block, so collapsing blocks produces exactly $d$ incidences at each vertex, counting both ends of a loop. The event $S$ is a subset of the finite pairing space and its outcomes collapse to simple $d$-regular graphs by [F1]. [F1, F2, construct]

1.2 Fix a labelled simple $d$-regular graph on $V$. At each vertex choose a bijection from its $d$ labelled half-edges to its $d$ incident edges. For every graph edge, pair the two half-edges assigned to it at its endpoints. This constructs a pairing yielding the graph. Conversely, every pairing yielding it gives exactly those vertexwise bijections, since the graph has no repeated edges. There are $d!$ choices at each vertex by successive choices and [F4], including the unique empty bijection when $d=0$; hence there are $(d!)^n$ realizations. [F1, F4, construct]

2.1 Order all $2m$ half-edges in $(2m)!$ ways, using successive choices and [F4]. Consecutive entries define a pairing. Each pairing arises from exactly $2^m m!$ such orders: choose one of two orders within each block and an order of the $m$ blocks. Thus the number of pairings is $(2m)!/(2^m m!)$, including $m=0$. [F4, step 1.1, algebra]

3.1 By [F2], every pairing has the same positive probability. Since $S$ is nonempty, [F3] applies, and step 1.2 shows that each simple $d$-regular graph has the same conditional probability; the conditional graph law is therefore uniform. Also $P(A^c\cap S)\leq P(A^c)$ by summing nonnegative outcome weights, so [F3] gives the stated bound. If its right-hand side tends to zero, the conditional probability of $A$ tends to one; a fixed positive lower bound for $P(S)$ gives the stated sufficient special case. [F2, F3, step 1.2, algebra] ∎



## Signed vector-spin objectives and low-rank Gram factors

[Open item](item-def-expander-prereq-vector-spin-landscapes) · level 0


### Definition

Let $n,r\ge 1$ be integers and let $B=(B_{ij})$ be a real symmetric $n\times n$ matrix. A vector-spin configuration is a matrix $Y\in\mathbb R^{n\times r}$ whose rows $u_1,\ldots,u_n\in\mathbb R^r$ are unit vectors for the Euclidean inner product: $u_i\cdot u_i=1$. Its signed vector-spin objective is $F_B(Y)=\operatorname{Tr}(Y^TBY)$. The entries of $B$ may have either sign.

The Gram matrix of the configuration is $X=YY^T$, with $X_{ij}=u_i\cdot u_j$. A real symmetric matrix $X$ is positive semidefinite if $c^TXc\ge 0$ for every $c\in\mathbb R^n$. The factor $Y$ has at most $r$ columns; using $X=YY^T$ with unit rows of $Y$ as a parametrization of a positive semidefinite matrix variable with diagonal entries one is a Burer–Monteiro factorization. It imposes the rank bound $\operatorname{rank}X\le r$.

Identify matrices with $\mathbb R^{nr}$ by listing their entries. The feasible set is $M_{n,r}=\{Y\in\mathbb R^{n\times r}:u_i\cdot u_i=1\text{ for every }i\}$, with the relative Euclidean topology and the smooth structure of the regular level set of $Q:\mathbb R^{nr}\to\mathbb R^n$, $Q(Y)=(u_i\cdot u_i)_{i=1}^n$, at $(1,\ldots,1)$. Its dimension is $n(r-1)$ and its tangent space is $T_YM_{n,r}=\{V=(v_i)_{i=1}^n:u_i\cdot v_i=0\text{ for every }i\}$. The objective is smooth in this structure.

A feasible $Y$ is a local minimum of $F_B$ when there is $\varepsilon>0$ such that $F_B(Y)\le F_B(Z)$ for every feasible $Z$ with $\sum_{i=1}^n\sum_{a=1}^r(Z_{ia}-Y_{ia})^2<\varepsilon^2$. A local maximum reverses the inequality; a local extremum is either. A critical point is a feasible $Y$ for which the differential $d(F_B)_Y:T_YM_{n,r}\to\mathbb R$ is the zero linear functional. For $r=1$, $M_{n,1}=\{-1,1\}^n$ is discrete with zero-dimensional tangent spaces: every configuration is critical and is both a local minimum and a local maximum.

### Definition references

[math:def-euclidean-inner-product](https://alphabetamath.cc/item/def-euclidean-inner-product)

[math:def-gram-matrix-and-gram-determinant](https://alphabetamath.cc/item/def-gram-matrix-and-gram-determinant)

[math:def-matrix-product-and-identity-matrix](https://alphabetamath.cc/item/def-matrix-product-and-identity-matrix)

[math:def-row-space-column-space-nullspace-and-matrix-ranks](https://alphabetamath.cc/item/def-row-space-column-space-nullspace-and-matrix-ranks)

[math:def-trace-of-a-square-matrix](https://alphabetamath.cc/item/def-trace-of-a-square-matrix)

[math:def-transpose-of-a-matrix](https://alphabetamath.cc/item/def-transpose-of-a-matrix)

[math:def-metric-topology](https://alphabetamath.cc/item/def-metric-topology)

[math:def-subspace-topology-top](https://alphabetamath.cc/item/def-subspace-topology-top)

[math:def-embedded-submanifold-and-slice-chart](https://alphabetamath.cc/item/def-embedded-submanifold-and-slice-chart)

[math:thm-a-regular-level-set-is-an-embedded-submanifold](https://alphabetamath.cc/item/thm-a-regular-level-set-is-an-embedded-submanifold)

[math:lem-slice-chart-restrictions-form-a-smooth-atlas](https://alphabetamath.cc/item/lem-slice-chart-restrictions-form-a-smooth-atlas)

[math:def-tangent-space-to-a-regular-level-set](https://alphabetamath.cc/item/def-tangent-space-to-a-regular-level-set)

[math:def-c-r-and-smooth-maps-between-smooth-manifolds](https://alphabetamath.cc/item/def-c-r-and-smooth-maps-between-smooth-manifolds)

[math:def-ck-and-multi-index-notation-in-several-variables](https://alphabetamath.cc/item/def-ck-and-multi-index-notation-in-several-variables)

[math:thm-continuous-partial-derivatives-imply-total-differentiability](https://alphabetamath.cc/item/thm-continuous-partial-derivatives-imply-total-differentiability)

[math:prop-identity-maps-and-composites-of-smooth-maps-are-smooth](https://alphabetamath.cc/item/prop-identity-maps-and-composites-of-smooth-maps-are-smooth)

[math:def-critical-point-and-critical-value-of-a-smooth-function](https://alphabetamath.cc/item/def-critical-point-and-critical-value-of-a-smooth-function)

[math:def-differential-of-a-smooth-real-valued-function](https://alphabetamath.cc/item/def-differential-of-a-smooth-real-valued-function)

[math:prop-tangent-space-of-a-regular-level-set-is-the-kernel](https://alphabetamath.cc/item/prop-tangent-space-of-a-regular-level-set-is-the-kernel)

[math:ex-the-tangent-space-of-euclidean-space](https://alphabetamath.cc/item/ex-the-tangent-space-of-euclidean-space)

[math:thm-coordinate-formula-for-the-differential](https://alphabetamath.cc/item/thm-coordinate-formula-for-the-differential)

### Facts & Assumptions

**Given:** The integers $n,r$, symmetric matrix $B$, unit-row matrix $Y$, and $X=YY^T$ in the Definition.

[F1] Matrix multiplication is defined by finite sums of products of entries, and the trace is the sum of diagonal entries ([math:def-matrix-product-and-identity-matrix](https://alphabetamath.cc/item/def-matrix-product-and-identity-matrix), [math:def-trace-of-a-square-matrix](https://alphabetamath.cc/item/def-trace-of-a-square-matrix)). Finite sums are additive and admit scalar factors ([math:lem-finite-sum-laws](https://alphabetamath.cc/item/lem-finite-sum-laws)). For finite sets $S,T$ and a real-valued array $a:S\times T\to\mathbb R$, $\sum_{i\in S}\sum_{j\in T}a_{ij}=\sum_{j\in T}\sum_{i\in S}a_{ij}$ ([math:lem-a-double-sum-over-finite-index-sets-may-be-interchanged](https://alphabetamath.cc/item/lem-a-double-sum-over-finite-index-sets-may-be-interchanged)).

[F2] The Euclidean dot product is the sum of coordinate products and is nonnegative on a vector paired with itself; the Gram matrix records pairwise inner products ([math:def-euclidean-inner-product](https://alphabetamath.cc/item/def-euclidean-inner-product), [math:def-gram-matrix-and-gram-determinant](https://alphabetamath.cc/item/def-gram-matrix-and-gram-determinant)).

[F3] Matrix rank is row-space dimension; row rank equals column rank. A subspace has dimension at most that of its finite-dimensional ambient space, and $\mathbb R^r$ has dimension $r$ ([math:def-row-space-column-space-nullspace-and-matrix-ranks](https://alphabetamath.cc/item/def-row-space-column-space-nullspace-and-matrix-ranks), [math:thm-row-rank-equals-column-rank](https://alphabetamath.cc/item/thm-row-rank-equals-column-rank), [math:thm-dimension-of-a-linear-subspace](https://alphabetamath.cc/item/thm-dimension-of-a-linear-subspace), [math:lem-standard-basis-of-f-n](https://alphabetamath.cc/item/lem-standard-basis-of-f-n)).

[F4] For an $m\times k$ matrix $A$, its transpose $A^T$ has shape $k\times m$ and entries $(A^T)_{ji}=A_{ij}$ ([math:def-transpose-of-a-matrix](https://alphabetamath.cc/item/def-transpose-of-a-matrix)).

[F5] The Euclidean metric topology has balls as neighbourhoods, and the relative topology consists of intersections with ambient open sets ([math:def-metric-topology](https://alphabetamath.cc/item/def-metric-topology), [math:def-subspace-topology-top](https://alphabetamath.cc/item/def-subspace-topology-top)).

[F6] Euclidean $C^k$ regularity means existence and continuity of the iterated coordinate partial derivatives; smoothness means this for every finite $k$, componentwise in Euclidean coordinates and in charts ([math:def-ck-and-multi-index-notation-in-several-variables](https://alphabetamath.cc/item/def-ck-and-multi-index-notation-in-several-variables), [math:def-c-r-and-smooth-maps-between-smooth-manifolds](https://alphabetamath.cc/item/def-c-r-and-smooth-maps-between-smooth-manifolds)). Continuous partial derivatives give the total derivative with the Jacobian matrix ([math:thm-continuous-partial-derivatives-imply-total-differentiability](https://alphabetamath.cc/item/thm-continuous-partial-derivatives-imply-total-differentiability)). Composites of smooth maps are smooth ([math:prop-identity-maps-and-composites-of-smooth-maps-are-smooth](https://alphabetamath.cc/item/prop-identity-maps-and-composites-of-smooth-maps-are-smooth)).

[F7] A nonempty regular fibre of a smooth map from an $m$-manifold to a $k$-manifold is an embedded manifold of dimension $m-k$ ([math:thm-a-regular-level-set-is-an-embedded-submanifold](https://alphabetamath.cc/item/thm-a-regular-level-set-is-an-embedded-submanifold)). Embedded submanifolds carry the relative topology and the smooth atlas obtained by restricting slice charts ([math:def-embedded-submanifold-and-slice-chart](https://alphabetamath.cc/item/def-embedded-submanifold-and-slice-chart), [math:lem-slice-chart-restrictions-form-a-smooth-atlas](https://alphabetamath.cc/item/lem-slice-chart-restrictions-form-a-smooth-atlas)). For a regular fibre in Euclidean space its tangent space is the kernel of the constraint derivative ([math:def-tangent-space-to-a-regular-level-set](https://alphabetamath.cc/item/def-tangent-space-to-a-regular-level-set)).

[F8] For a smooth real-valued function, the differential at a point is a linear functional on its tangent space, and the point is critical when that functional is zero ([math:def-differential-of-a-smooth-real-valued-function](https://alphabetamath.cc/item/def-differential-of-a-smooth-real-valued-function), [math:def-critical-point-and-critical-value-of-a-smooth-function](https://alphabetamath.cc/item/def-critical-point-and-critical-value-of-a-smooth-function)).

[F9] If $F:M\to N$ is smooth, $q$ is a regular value and $p\in F^{-1}(q)$, the intrinsic tangent space of the embedded fibre is identified with $\ker dF_p$ in $T_pM$ ([math:prop-tangent-space-of-a-regular-level-set-is-the-kernel](https://alphabetamath.cc/item/prop-tangent-space-of-a-regular-level-set-is-the-kernel)). At $a\in\mathbb R^k$, the canonical identification $T_a\mathbb R^k\cong\mathbb R^k$ sends $w$ to the derivation $[g]\mapsto\sum_jw_j\partial_jg(a)$ ([math:ex-the-tangent-space-of-euclidean-space](https://alphabetamath.cc/item/ex-the-tangent-space-of-euclidean-space)). In coordinate tangent bases the differential of a smooth map is represented by the Jacobian of its coordinate expression ([math:thm-coordinate-formula-for-the-differential](https://alphabetamath.cc/item/thm-coordinate-formula-for-the-differential)).

### Justification

**Given:** The data and facts above.

**Goal:** Establish the stated Gram properties, objective identity, feasible smooth structure and rank-one boundary case.

1.1 Entrywise multiplication gives $X_{ij}=\sum_{a=1}^rY_{ia}Y_{ja}=u_i\cdot u_j$, so $X$ is symmetric and $X_{ii}=1$. For any $c\in\mathbb R^n$, $c^TXc=\sum_{a=1}^r(\sum_{i=1}^n c_iY_{ia})^2\ge0$; hence $X$ is positive semidefinite. [given, F1, F2, F4, algebra]

1.2 Each row of $X=Y(Y^T)$ is a linear combination of the $r$ rows of $Y^T$. The row space of $X$ is therefore a subspace of the row space of $Y^T$. By equality of row and column ranks, the latter has dimension equal to the dimension of the column space of $Y^T$, a subspace of $\mathbb R^r$; its dimension is at most $r$. Thus $\operatorname{rank}X\le r$. [given, F1, F3, F4, algebra]

1.3 Each component $Q_i(Y)=\sum_aY_{ia}^2$ is smooth: its first coordinate partials are $2Y_{ia}$ in row $i$ and zero in other rows, its second partials are constants, and all partials of order at least three vanish. These functions are continuous. Its total derivative is consequently $DQ(Y)V=(2u_i\cdot v_i)_{i=1}^n$. The fibre over $(1,\ldots,1)$ is exactly $M_{n,r}$ and is nonempty, since every row can be $(1,0,\ldots,0)$. At a point of this fibre and for any $b\in\mathbb R^n$, the choice $v_i=(b_i/2)u_i$ gives $DQ(Y)V=b$. By the Euclidean identifications and coordinate differential formula in [F9], $dQ_Y$ is consequently surjective at every point of this fibre. Thus this is a regular fibre. [given, F2, F6, F9, algebra, construct]

2.1 Expanding the trace and rearranging the finite sums yields $\operatorname{Tr}(Y^TBY)=\sum_{a=1}^r\sum_{i,j=1}^nY_{ia}B_{ij}Y_{ja}=\sum_{i,j=1}^nB_{ij}(u_i\cdot u_j)$. This proves the objective identity and the stated Gram properties. [given, F1, F2, F4, step 1.1, step 1.2, algebra]

2.2 By the regular-fibre theorem, $M_{n,r}$ is an embedded smooth manifold of dimension $nr-n=n(r-1)$, with the relative Euclidean topology and the restricted slice-chart atlas. Apply [F9] to the smooth map $Q:\mathbb R^{nr}\to\mathbb R^n$ and its regular value $(1,\ldots,1)$ established in step 1.3: the intrinsic tangent space of this embedded fibre is identified with $\ker dQ_Y$. Under the canonical Euclidean tangent identifications, the coordinate formula in [F9] represents $dQ_Y$ by the already computed $DQ(Y)$, so this intrinsic tangent space is represented by exactly the matrices $V$ with $u_i\cdot v_i=0$ for every $i$. This also identifies it with the ambient constraint-kernel definition in [F7]. The squared Euclidean distance of the listed entries is $\sum_{i,a}(Z_{ia}-Y_{ia})^2$, so the local-extremum definitions use neighbourhoods in precisely this relative topology. [F2, F5, F7, F9, step 1.3, algebra]

3.1 On the ambient matrix space, $\operatorname{Tr}(Z^TBZ)$ is a quadratic polynomial in the entries of $Z$, by the same expansion as step 2.1; its coordinate partials of order at least three vanish and its lower partials are continuous. It is therefore smooth. In a restricted slice chart of $M_{n,r}$ its coordinate expression is the composite of this ambient polynomial with the smooth inverse ambient chart and the linear slice inclusion $x\mapsto(x,0)$. This composite is smooth, so $F_B$ is smooth on $M_{n,r}$ and the critical-point definition in [F8] applies. [F1, F4, F6, F7, F8, step 2.1, step 2.2, algebra]

4.1 When $r=1$, the row equations are $u_i^2=1$, hence $u_i\in\{-1,1\}$. Distinct configurations have squared Euclidean distance at least $4$, so the relative ball of radius $1$ about any configuration contains only that configuration. Both local-extremum inequalities thus hold there. The tangent equations $u_iv_i=0$ force every $v_i=0$; the differential on this zero vector space is necessarily zero. Thus every rank-one configuration is critical as asserted. [given, F2, F5, F8, step 2.2, step 3.1, algebra] ∎

### Remarks

A landscape is the behavior of an objective on its feasible configurations, including its local extrema and critical points in the topology and smooth structure specified above. This definition alone makes no assertion about those points or about statistical recovery. Such assertions require a separately specified model and hypotheses; signed weights do not automatically satisfy inequalities proved for nonnegative weights.


## Rational sine enclosures from a finite factorial sum

[Open item](item-lem-author-2e2d9953c21a-sine-enclosures) · level 0


### Statement

For an integer $N\ge0$ and rational $x$, put $S_N(x)=\sum_{k=0}^N(-1)^kx^{2k+1}/(2k+1)!$, $q=x^2/((2N+4)(2N+5))$ and $R_N(x)=|x|^{2N+3}/((2N+3)!(1-q))$. If $q<1$, then $\sin x\in[S_N(x)-R_N(x),S_N(x)+R_N(x)]$. For $0\le x\le1$, also $x-x^3/6\le\sin x\le x$.

### Facts & Assumptions

**Given:** The rational $x$, integer $N$ and $q<1$ above.

[F1] [math:def-sine-and-cosine-by-power-series](https://alphabetamath.cc/item/def-sine-and-cosine-by-power-series) defines sine by its factorial series, absolutely convergent by [math:lem-sine-and-cosine-series-converge-everywhere](https://alphabetamath.cc/item/lem-sine-and-cosine-series-converge-everywhere).

[F2] [math:def-factorial-and-falling-factorial](https://alphabetamath.cc/item/def-factorial-and-falling-factorial) defines $0!=1$ and $(n+1)!=(n+1)n!$ for integers $n\ge0$, and establishes that these factorials are positive and agree with their real-valued products.

### Proof

**Given:** The rational $x$, integer $N$ and $q<1$ above.

**Goal:** Prove the stated rational sine enclosures and elementary bounds.

1.1 Put $a_j=|x|^{2N+3+2j}/(2N+3+2j)!$ for integers $j\ge0$ and $u=a_0$. Factorial recursion gives $a_{j+1}=a_jx^2/((2N+4+2j)(2N+5+2j))\le q a_j$, including when $x=0$. Since $0\le q<1$, induction gives $a_j\le u q^j$. For every integer $m\ge0$, the finite geometric identity $(1-q)\sum_{j=0}^m q^j=1-q^{m+1}\le1$ therefore gives $\sum_{j=0}^m a_j\le u/(1-q)$. Absolute convergence permits passage to the limit and gives $|\sin x-S_N(x)|\le\sum_{j=0}^{\infty}a_j\le u/(1-q)=R_N(x)$. Hence $\sin x$ lies in the stated interval. Its endpoints are rational: factorial denominators and $1-q$ are positive, and all the displayed finite operations on the rational $x$ are exact rational operations. [given, F1, F2, algebra]

2.1 If $0\le x\le1$, put $v_k=x^{2k+1}/(2k+1)!$ for integers $k\ge0$. Then $v_k\ge0$ and factorial recursion gives $v_{k+1}=v_kx^2/((2k+2)(2k+3))\le v_k$, including at $x=0$. In every even-length finite tail after $x-x^3/6$, the consecutive pairs $v_{2j}-v_{2j+1}$ for $j\ge1$ are nonnegative; in every even-length finite tail after $x$, the pairs $-v_{2j+1}+v_{2j+2}$ for $j\ge0$ are nonpositive. Taking limits of these finite tails using the absolutely convergent sine series preserves the two signs. Thus $x-x^3/6\le\sin x\le x$, including $x=0$. [given, F1, F2, algebra] ∎


## Rational logarithm and pi enclosures after range reduction

[Open item](item-lem-author-2e2d9953c21a-logarithm-and-pi) · level 0


### Statement

For a positive rational $x$, choose an integer $j$ with $y=2^{-j}x\in[1,2]$. With $v=(y-1)/(y+1)$, enclose $\log y$ by $L_N(v)\pm E_N(v)$, where $L_N(v)=2\sum_{k=0}^Nv^{2k+1}/(2k+1)$ and $E_N(v)=2|v|^{2N+3}/((2N+3)(1-v^2))$, for $N\ge1$. The same formula at $y=2$ encloses $\log2$; interval addition in $\log x=j\log2+\log y$ gives an enclosure for every positive rational $x$. For $|t|\le1/2$, put $A_N(t)=\sum_{k=0}^N(-1)^kt^{2k+1}/(2k+1)$ and $B_N(t)=|t|^{2N+3}/((2N+3)(1-t^2))$. Then $\pi$ belongs to $16[A_N(1/5)\pm B_N(1/5)]-4[A_N(1/239)\pm B_N(1/239)]$.

### Facts & Assumptions

**Given:** Positive rational $x$ and integer $N\ge1$. The notation $[c\pm e]$ means $[c-e,c+e]$ for $e\ge0$; interval addition and scalar multiplication mean the exact set operations $I+J=\{s+r:s\in I,\ r\in J\}$ and $\lambda I=\{\lambda s:s\in I\}$, without rounding.

[F1] [math:lem-range-reduced-exp-log-and-arctan-series-enclosures](https://alphabetamath.cc/item/lem-range-reduced-exp-log-and-arctan-series-enclosures) supplies the stated finite-sum remainder estimates for $y\in[1,2]$, $|t|\le1/2$ and integer $N\ge1$, and the identity $\ln(2^j y)=j\ln2+\ln y$ for integer $j$ and $y>0$. In that supplier, $\ln y=\int_1^y ds/s$ and its arctangent is $\int_0^t ds/(1+s^2)$.

[F2] [math:ex-machin-formula](https://alphabetamath.cc/item/ex-machin-formula) gives $\pi=16\arctan(1/5)-4\arctan(1/239)$ for the principal inverse tangent.

[F3] [math:thm-natural-logarithm-laws](https://alphabetamath.cc/item/thm-natural-logarithm-laws) fixes $\log$ as the inverse of the real exponential. [math:thm-logarithm-derivative-and-integral](https://alphabetamath.cc/item/thm-logarithm-derivative-and-integral) identifies it with $\int_1^y ds/s$ for every $y>0$, so the logarithm estimates and identity in [F1] apply to this $\log$.

[F4] [math:thm-principal-inverse-tangent-calculus](https://alphabetamath.cc/item/thm-principal-inverse-tangent-calculus) identifies the principal inverse tangent with $\int_0^t ds/(1+s^2)$ for every real $t$, so [F1] bounds the same arctangents as [F2].

[F5] [math:lem-archimedean-property-from-completeness](https://alphabetamath.cc/item/lem-archimedean-property-from-completeness) gives the unboundedness of the natural numbers in the complete ordered real field.

### Proof

**Given:** Positive rational $x$ and integer $N\ge1$. The notation $[c\pm e]$ means $[c-e,c+e]$ for $e\ge0$; interval addition and scalar multiplication mean the exact set operations $I+J=\{s+r:s\in I,\ r\in J\}$ and $\lambda I=\{\lambda s:s\in I\}$, without rounding.

**Goal:** Prove the stated logarithm and pi enclosures.

1.1 By induction, $2^n\ge n+1$ for every integer $n\ge0$: the base case is equality and $2(n+1)\ge n+2$ advances the induction. By [F5], choose a natural number $M>\max\{x,x^{-1},1\}$. Then $2^M>x$ and $2^M>x^{-1}$, hence $2^{-M}<x$. The finite set of integers $k\in\{-M,\ldots,M\}$ with $2^k\le x$ is nonempty and has a largest member $j$. Since $2^M>x$, we have $j<M$, and maximality gives $2^j\le x<2^{j+1}$. Thus the rational number $y=2^{-j}x$ satisfies $1\le y<2$. [given, F5, induction, choose, algebra]

1.2 For $s\in[a,b]$ and $r\in[c,d]$, adding the endpoint inequalities gives $a+c\le s+r\le b+d$. Multiplication of $a\le s\le b$ by $\lambda\ge0$ gives $\lambda a\le\lambda s\le\lambda b$; for $\lambda<0$ it gives $\lambda b\le\lambda s\le\lambda a$. These elementary order bounds justify the interval compositions below, including reversal under negative scalar multiplication, for arbitrary real endpoints and therefore for exact rational endpoints. [given, algebra]

2.1 For the $y$ from step 1.1, $v=(y-1)/(y+1)$ lies in $[0,1/3]$. Apply [F1] and the logarithm identification [F3] to $y$ and to $2$, obtaining $\log y\in I_y:=[L_N(v)\pm E_N(v)]$ and $\log2\in I_2:=[L_N(1/3)\pm E_N(1/3)]$. The error radii are nonnegative and their denominators are positive because $N\ge1$ and $|v|\le1/3<1$. The identity from [F1], transferred by [F3], is $\log x=j\log2+\log y$. Hence $\log x\in jI_2+I_y$, with the endpoint rule from step 1.2 reversing the $jI_2$ endpoints when $j<0$. [given, F1, F3, step 1.1, step 1.2, algebra]

3.1 Both $1/5$ and $1/239$ lie in $[-1/2,1/2]$, so [F1] and [F4] enclose their principal arctangents in $[A_N(t)\pm B_N(t)]$. These radii are nonnegative with positive denominators because $N\ge1$ and $t^2\le1/4<1$. Apply step 1.2 with scalars $16$ and $-4$, and then [F2], to obtain exactly the asserted enclosure for $\pi$. For the arguments $y$, $2$, $1/5$ and $1/239$ used here, step 1.1 and finite rational arithmetic make the sums, radii and composed endpoint bounds rational. [given, F1, F2, F4, step 1.1, step 1.2, algebra] ∎


## Self-adjoint order, norm bounds and diagonal tests

[Open item](item-prop-expander-prereq-selfadjoint-order-and-norm) · level 1


### Statement

Let $V$ be a finite set and let matrices act on $\mathbb C^V$ with the vertex inner product and induced norm of [def-expander-prereq-vertex-hilbert-space](item-def-expander-prereq-vertex-hilbert-space). A matrix $B$ is Hermitian, or self-adjoint, when $B=B^*$, where $B^*$ is its conjugate transpose. A Hermitian matrix $B$ is positive semidefinite if $\langle f,Bf\rangle=f^*Bf\ge0$ for every $f\in\mathbb C^V$. For Hermitian matrices of the same size, write $B\preceq C$ when $C-B$ is positive semidefinite. Let $I$ be the identity matrix and let $\|B\|$ denote the induced operator norm.

For every real symmetric matrix $B$ and real $b\ge0$, $\|B\|\le b$ if and only if $-bI\preceq B\preceq bI$. If $B$ is Hermitian and $aI\preceq B\preceq bI$ for real $a,b$, then $a\le B_{xx}\le b$ for every $x\in V$. Order inequalities can be added: $B\preceq C$ and $D\preceq E$ imply $B+D\preceq C+E$. They can also be restricted to a subspace $W\subseteq\mathbb C^V$: $B\preceq C$ implies $\langle w,Bw\rangle\le\langle w,Cw\rangle$ for every $w\in W$. Equivalently, their compressions to $W$ are ordered, where the compression of $B$ is the map $w\mapsto P_WBw$ and $P_W$ is orthogonal projection onto $W$. None of these statements requires a graph to be regular.

### Facts & Assumptions

[F1] The vertex space has inner product $\langle f,g\rangle=\sum_{x\in V}\overline{f(x)}g(x)$, and conjugate transpose represents the adjoint. A self-adjoint matrix has real quadratic values in this convention ([def-expander-prereq-vertex-hilbert-space](item-def-expander-prereq-vertex-hilbert-space)).

[F2] A normal endomorphism of a finite-dimensional complex inner product space has an orthonormal eigenbasis ([math:thm-complex-spectral-theorem-for-normal-endomorphisms](https://alphabetamath.cc/item/thm-complex-spectral-theorem-for-normal-endomorphisms)).

[F3] The operator norm is zero on the zero space and otherwise is the maximum of $\|Bf\|_2$ over unit vectors $f$ ([math:def-operator-norm-on-a-finite-dimensional-inner-product-space](https://alphabetamath.cc/item/def-operator-norm-on-a-finite-dimensional-inner-product-space)).

[F4] For a subspace $W$ of a finite-dimensional inner product space, every $z$ has a unique decomposition $z=P_Wz+r$ with $P_Wz\in W$ and $r$ orthogonal to every vector of $W$; this defines orthogonal projection ([math:def-orthogonal-projection](https://alphabetamath.cc/item/def-orthogonal-projection)). Orthogonality is unchanged by the convention transfer in [F1].

### Proof

**Given:** A finite set $V$, Hermitian matrices of the indicated sizes, and real bounds as in the statement.

**Goal:** Prove the norm-order equivalence, diagonal bounds, addition and restriction rules.

1.1 A Hermitian matrix $B$ is normal because $BB^*=B^*B$. By [F2] and the convention transfer in [F1], it has an orthonormal eigenbasis $u_1,\ldots,u_n$. Each eigenvalue $\lambda_j$ is real: $\lambda_j=\langle u_j,Bu_j\rangle$ is real by [F1]. For $f=\sum_j c_j u_j$, orthonormality gives $\langle f,Bf\rangle=\sum_j\lambda_j|c_j|^2$ and $\|Bf\|_2^2=\sum_j\lambda_j^2|c_j|^2$. Thus, when $n>0$, [F3] gives $\|B\|=\max_j|\lambda_j|$: the upper bound follows from the latter sum for unit $f$, and an eigenvector attaining the maximum gives equality. [F1, F2, F3, algebra]

1.2 For each $x\in V$, let $e_x$ be the function equal to $1$ at $x$ and $0$ elsewhere. By [F1], $\langle e_x,e_x\rangle=1$ and $\langle e_x,Be_x\rangle=B_{xx}$. Testing $B-aI$ and $bI-B$ at $e_x$ proves $a\le B_{xx}\le b$. [F1, algebra]

1.3 If $B\preceq C$ and $D\preceq E$, their defining quadratic forms are nonnegative, and their sum is the quadratic form of $(C+E)-(B+D)$; this proves addition. Restriction follows by testing the original inequality only on vectors $w\in W$. [F1, algebra]

1.4 The vertex space is finite-dimensional by [F1], so [F4] applies to every subspace $W$, with the same orthogonality in the article convention. For $z,t\in\mathbb C^V$ and scalars $\alpha,\beta$, the vector $\alpha P_Wz+\beta P_Wt$ belongs to $W$, and its difference from $\alpha z+\beta t$ is orthogonal to $W$: pairing with any $w\in W$ gives a linear combination of two zero pairings. Uniqueness in [F4] therefore gives $P_W(\alpha z+\beta t)=\alpha P_Wz+\beta P_Wt$, so $P_W$ is linear. For $w\in W$, the orthogonality of $z-P_Wz$ gives $\langle w,P_Wz\rangle=\langle w,z\rangle$. [F1, F4, algebra]

2.1 For real symmetric $B$, [F1] makes $B$ Hermitian. By step 1.1, $\|B\|\le b$ is equivalent, for $n>0$, to $-b\le\lambda_j\le b$ for all $j$. The displayed quadratic-form formula in step 1.1 shows that these inequalities imply $\langle f,(B+bI)f\rangle\ge0$ and $\langle f,(bI-B)f\rangle\ge0$ for every $f$. Conversely, testing those two forms at each $u_j$ gives $-b\le\lambda_j\le b$. Hence the two matrix-order inequalities are equivalent to the norm bound. If $V$ is empty, the norm is zero by [F3] and both quadratic-form inequalities hold on the zero space, so the equivalence also holds. [F1, F3, step 1.1, algebra]

3.1 For Hermitian $B$ and $u,v\in W$, step 1.4 and conjugate symmetry give $\langle u,P_WBv\rangle=\langle u,Bv\rangle=\langle Bu,v\rangle=\langle P_WBu,v\rangle$. Thus the linear compression $w\mapsto P_WBw$ is self-adjoint on $W$. Therefore $\langle w,P_WBw\rangle=\langle w,Bw\rangle$, and the same holds for $C$. The order of the compressions is consequently equivalent to the restricted quadratic-form inequality in step 1.3, including $W=\{0\}$. These arguments involve only matrices and the stated inner product, so no graph regularity assumption is used. This proves all assertions. [F1, step 1.3, step 1.4, algebra] ∎


## The constant projection and centering decomposition

[Open item](item-prop-expander-prereq-constant-projection) · level 1


### Statement

Let $V$ be a finite nonempty set, $n=|V|$, and let $\mathbb C^V$ have the inner product $\langle f,g\rangle=\sum_{x\in V}\overline{f(x)}g(x)$. Write $\mathbf1$ for the function identically equal to $1$, $I$ for the identity operator, $J=\mathbf1\mathbf1^*$, $P=J/n$, and $Q=I-P$. Here $\mathbf1^*f=\sum_{x\in V}f(x)$. The constant subspace is $C=\{c\mathbf1:c\in\mathbb C\}$, and $\mathbf1^\perp=\{f:\langle\mathbf1,f\rangle=0\}$.

Then $P$ is the orthogonal projection onto $C$ and $Q$ is the orthogonal projection onto $\mathbf1^\perp$. For every $f\in\mathbb C^V$, $f=Pf+Qf$ and $f^*Jf=|\sum_{x\in V}f(x)|^2$.

If a linear operator $A$ is self-adjoint and satisfies $A\mathbf1=d\mathbf1$ for some $d\in\mathbb C$, both $C$ and $\mathbf1^\perp$ are invariant under $A$, meaning that $A$ maps each subspace into itself, and $A-dP$ vanishes on $C$. For a nonregular operator, meaning here one for which $A\mathbf1$ is not a scalar multiple of $\mathbf1$, such invariance is not assumed.

### Statement references

[def-expander-prereq-vertex-hilbert-space](item-def-expander-prereq-vertex-hilbert-space)

[math:def-orthogonal-projection](https://alphabetamath.cc/item/def-orthogonal-projection)

### Facts & Assumptions

[F1] On $\mathbb C^V$, the stated inner product is conjugate-linear in its first argument and linear in its second; the conjugate transpose gives the adjoint, so a self-adjoint $A$ satisfies $\langle u,Av\rangle=\langle Au,v\rangle$ ([def-expander-prereq-vertex-hilbert-space](item-def-expander-prereq-vertex-hilbert-space)).

[F2] In a finite-dimensional inner product space, the orthogonal projection onto a subspace $W$ assigns to each vector its unique $W$ component in a decomposition with the other component in $W^\perp$ ([math:def-orthogonal-projection](https://alphabetamath.cc/item/def-orthogonal-projection)).

### Proof

**Given:** A finite nonempty $V$, the operators and subspaces in the statement, and, for the final assertion, a self-adjoint $A$ with $A\mathbf1=d\mathbf1$.

**Goal:** Establish the projection, quadratic-form and invariance assertions.

1.1 For $f\in\mathbb C^V$, put $s=\sum_{x\in V}f(x)$. Matrix multiplication gives $Jf=s\mathbf1$ and $Pf=(s/n)\mathbf1\in C$. Since $\langle\mathbf1,\mathbf1\rangle=n$, we have $\langle\mathbf1,f-Pf\rangle=s-(s/n)n=0$. Thus $Qf=f-Pf\in\mathbf1^\perp$ and $f=Pf+Qf$. Moreover $C^\perp=\mathbf1^\perp$, since $\langle c\mathbf1,g\rangle=\overline c\langle\mathbf1,g\rangle$. The decomposition therefore identifies $P$ as the orthogonal projection onto $C$. [F1, F2, given, algebra]

2.1 The same decomposition identifies $Q$ as the orthogonal projection onto $\mathbf1^\perp$: its remainder $f-Qf=Pf$ lies in $C$, which is orthogonal to $\mathbf1^\perp$. Also $f^*Jf=\langle f,Jf\rangle=\overline{s}s=|s|^2$. [F1, F2, step 1.1, algebra]

3.1 If $c\in\mathbb C$, then $A(c\mathbf1)=cd\mathbf1\in C$. If $f\in\mathbf1^\perp$, self-adjointness gives $\langle\mathbf1,Af\rangle=\langle A\mathbf1,f\rangle=\overline d\langle\mathbf1,f\rangle=0$; hence $Af\in\mathbf1^\perp$. Finally $P(c\mathbf1)=c\mathbf1$, so $(A-dP)(c\mathbf1)=0$. These deductions use the stated eigenvector and self-adjoint hypotheses; no invariance is asserted for nonregular operators. [F1, step 1.1, given, algebra] ∎

## Support connectivity and the unnormalized Laplacian kernel

[Open item](item-prop-expander-prereq-laplacian-support-kernel) · level 1


### Statement

Let $(V,A)$ be a network: $V$ is nonempty and finite, $n=|V|$, and $A$ is real, symmetric and entrywise nonnegative. Put $d(x)=\sum_y A_{xy}$, $D=\operatorname{diag}(d(x))$ and $L=D-A$. The loop-free support graph has an edge $\{x,y\}$ exactly when $x\ne y$ and $A_{xy}>0$. For every $f\in\mathbb C^V$,

$$f^*Lf=\frac12\sum_{x,y\in V}A_{xy}|f(x)-f(y)|^2.$$

The kernel of $L$ consists exactly of functions constant on each connected component of the support graph. In particular, for $n\ge2$ the support graph is connected if and only if zero is a simple eigenvalue of $L$, meaning that it occurs once in an eigenvalue list counted with multiplicity. If some $\eta>0$ satisfies $f^*Lf\ge\eta\|f\|_2^2$ for every $f\in\mathbf1^\perp$, then the support graph is connected. Connectivity alone does not imply such a bound for an arbitrarily prescribed positive $\eta$.

Here $\mathbf1$ is the constant-one function and $\mathbf1^\perp=\{f:\sum_x f(x)=0\}$, with the vertex inner product and norm.

### Statement references

[def-expander-prereq-loop-compatible-networks](item-def-expander-prereq-loop-compatible-networks)

[def-expander-prereq-vertex-hilbert-space](item-def-expander-prereq-vertex-hilbert-space)

[math:def-connected-graph-and-connected-component](https://alphabetamath.cc/item/def-connected-graph-and-connected-component)

[math:def-eigenvalue-eigenvector-eigenspace-and-spectrum](https://alphabetamath.cc/item/def-eigenvalue-eigenvector-eigenspace-and-spectrum)

### Facts & Assumptions

[F1] The network definition gives $W=A-\operatorname{diag}(A_{xx})$, a symmetric nonnegative zero-diagonal matrix with the same support graph, and $L=\operatorname{diag}(\sum_y W_{xy})-W$. [def-expander-prereq-loop-compatible-networks](item-def-expander-prereq-loop-compatible-networks)

[F2] For a symmetric nonnegative zero-diagonal weight matrix on a nonempty finite vertex set, its weighted Laplacian has real quadratic form $u^TLu=\frac12\sum_{x,y}W_{xy}(u(x)-u(y))^2$; its real kernel consists of functions constant on each support component. [math:lem-weighted-graph-laplacian-quadratic-form-and-kernel](https://alphabetamath.cc/item/lem-weighted-graph-laplacian-quadratic-form-and-kernel)

[F3] Components consist of vertices joined by paths, and a nonempty graph is connected exactly when all its vertices lie in one component. [math:def-connected-graph-and-connected-component](https://alphabetamath.cc/item/def-connected-graph-and-connected-component)

[F4] The vertex space has inner product $\langle f,g\rangle=\sum_x\overline{f(x)}g(x)$, norm $\|f\|_2^2=\langle f,f\rangle$, and matrix action by finite sums; real symmetric matrices are self-adjoint. [def-expander-prereq-vertex-hilbert-space](item-def-expander-prereq-vertex-hilbert-space)

[F5] An endomorphism $T$ is normal when $TT^*=T^*T$; a self-adjoint endomorphism is normal since $TT^*=T^2=T^*T$. [math:def-self-adjoint-and-normal-endomorphism](https://alphabetamath.cc/item/def-self-adjoint-and-normal-endomorphism) A normal endomorphism of a finite-dimensional complex inner product space has an orthonormal eigenbasis. [math:thm-complex-spectral-theorem-for-normal-endomorphisms](https://alphabetamath.cc/item/thm-complex-spectral-theorem-for-normal-endomorphisms)

[F6] An eigenvector of an endomorphism $T$ is a nonzero vector $v$ with $Tv=\lambda v$ for some scalar $\lambda$, its eigenvalue; the corresponding eigenspace is $\ker(T-\lambda I)$. [math:def-eigenvalue-eigenvector-eigenspace-and-spectrum](https://alphabetamath.cc/item/def-eigenvalue-eigenvector-eigenspace-and-spectrum)

### Proof

**Given:** A network $(V,A)$ with the stated matrices and support graph.

**Goal:** Establish the quadratic identity, kernel characterization, connectivity equivalence and the stated limits on a numerical lower bound.

1.1 Write $f=u+iv$ with real functions $u,v$. By [F1], $L$ is real symmetric and is the weighted Laplacian of $W$. Expanding with [F4], the imaginary cross terms cancel, so $f^*Lf=u^TLu+v^TLv$. Applying [F2] to $u$ and $v$ gives $f^*Lf=\frac12\sum_{x,y}W_{xy}(|u(x)-u(y)|^2+|v(x)-v(y)|^2)$. The diagonal terms vanish and $W_{xy}=A_{xy}$ off the diagonal, proving the displayed identity. [given, F1, F2, F4, algebra]

2.1 Since $L$ is real, $Lf=0$ exactly when $Lu=Lv=0$. By [F2], this holds exactly when both $u$ and $v$ are constant on each component, equivalently when $f$ is. The component indicators form a basis of this kernel: they span all componentwise constant functions and are independent by evaluation at a vertex in each component. In particular $\mathbf1\in\ker L$, and the kernel dimension equals the number of components. [F2, F3, step 1.1, algebra]

3.1 By [F4], $L$ is self-adjoint; the normality identity in [F5] therefore holds, and its spectral theorem supplies an orthonormal eigenbasis. By [F6], in that basis its matrix is diagonal with the eigenvalues on the diagonal; the number of zero entries, equivalently the multiplicity of zero in the eigenvalue list, is $\dim\ker L$. Thus [F3] and step 2.1 show that the nonempty support graph is connected exactly when zero is simple. This applies in particular for $n\ge2$. [F3, F4, F5, F6, step 2.1, algebra]

3.2 If the graph is disconnected, choose a nonempty proper component $C$ and put $f=\mathbf1_C-(|C|/n)\mathbf1$. This function is componentwise constant, is nonzero, and has coordinate sum zero. By step 2.1 it belongs to $\ker L\cap\mathbf1^\perp$, so a lower bound with $\eta>0$ would give $0\ge\eta\|f\|_2^2>0$, a contradiction. Hence the stated lower bound implies connectivity. [F3, F4, step 2.1, algebra, construct]

4.1 For the converse limitation, take two vertices, zero diagonal and $A_{12}=A_{21}=1/4$. The support graph is connected. For $f=(1,-1)\in\mathbf1^\perp$, step 1.1 gives $f^*Lf=1$ while $\|f\|_2^2=2$, so the bound fails for the prescribed value $\eta=1$. This completes all assertions. [F3, F4, step 1.1, algebra] ∎


## A bilinear centered-adjacency estimate without regularity

[Open item](item-prop-expander-prereq-centered-bilinear-estimate) · level 1


### Statement

Let $V$ be a finite set of $n>0$ vertices, and let $A=(A_{xy})_{x,y\in V}$ be a complex self-adjoint matrix, meaning $A_{xy}=\overline{A_{yx}}$. Let $J$ be the matrix whose entries are all $1$, let $d^*>0$ and $\alpha\geq 0$, and put $B=A-(d^*/n)J$. Use the vertex norm $\|f\|_2=(\sum_{x\in V}|f(x)|^2)^{1/2}$ and the induced operator norm $\|B\|$. If $\|B\|\leq\alpha d^*$, then for all $f,g\in\mathbb C^V$,

$$|f^*Bg|\leq\alpha d^*\|f\|_2\|g\|_2.$$

For subsets $X,Y\subseteq V$, define the ordered matrix-entry sum $e(X,Y)=\sum_{x\in X}\sum_{y\in Y}A_{xy}$. Then

$$|e(X,Y)-(d^*/n)|X||Y||\leq\alpha d^*\sqrt{|X||Y|}.$$

For the graph interpretation, let $A$ be the symmetric binary adjacency matrix of a finite undirected graph on $V$ with possible self-loops: $A_{xy}=1$ exactly when $x$ and $y$ are joined by an edge, including $x=y$ for a loop, and $A_{xy}=0$ otherwise. Then $e(X,Y)$ counts ordered adjacency entries, including each diagonal entry once. The estimate permits $X$ and $Y$ to overlap and permits loop entries. It does not assert a multiplicative lower bound for every pair of small disjoint sets.

### Statement references

[def-expander-prereq-loop-compatible-networks](item-def-expander-prereq-loop-compatible-networks)

[def-expander-prereq-vertex-hilbert-space](item-def-expander-prereq-vertex-hilbert-space)

[math:def-operator-norm-on-a-finite-dimensional-inner-product-space](https://alphabetamath.cc/item/def-operator-norm-on-a-finite-dimensional-inner-product-space)

### Facts & Assumptions

**Given:** The set $V$, matrices $A,J,B$, parameters $d^*,\alpha$, and vectors and subsets are as in the statement, and $\|B\|\leq\alpha d^*$.

[F1] The vertex pairing is $\langle u,v\rangle=\sum_{x\in V}\overline{u(x)}v(x)$, and matrix action is $(Bv)(x)=\sum_{y\in V}B_{xy}v(y)$; its norm is $\|v\|_2$ ([def-expander-prereq-vertex-hilbert-space](item-def-expander-prereq-vertex-hilbert-space)).

[F2] For a linear map on this finite-dimensional inner-product space, the operator norm is the maximum of $\|Bv\|_2$ over unit vectors ([math:def-operator-norm-on-a-finite-dimensional-inner-product-space](https://alphabetamath.cc/item/def-operator-norm-on-a-finite-dimensional-inner-product-space)).

[F3] Cauchy–Schwarz gives $|\langle u,v\rangle|\leq\|u\|_2\|v\|_2$; the vertex-space convention transfers the cited linear-first version by conjugation ([math:thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces](https://alphabetamath.cc/item/thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces), [def-expander-prereq-vertex-hilbert-space](item-def-expander-prereq-vertex-hilbert-space)).

[F4] A finite symmetric nonnegative matrix defines a network whose positive off-diagonal entries specify support edges and whose diagonal entries are loop weights ([def-expander-prereq-loop-compatible-networks](item-def-expander-prereq-loop-compatible-networks)). In the binary graph case specified in the statement, an entry equal to $1$ records the corresponding edge or loop.

### Proof

**Given:** The hypotheses and notation of the statement.

**Goal:** Prove the bilinear estimate and its ordered-entry specialization.

**Proof technique:** direct.

1.1 If $g=0$, then $Bg=0$ and $\|Bg\|_2\leq\|B\|\|g\|_2$. Otherwise $g/\|g\|_2$ is a unit vector, so the definition of operator norm and homogeneity give $\|Bg\|_2=\|g\|_2\|B(g/\|g\|_2)\|_2\leq\|B\|\|g\|_2$. [F1, F2]

1.2 Let $1_X$ and $1_Y$ be the indicator functions, equal to $1$ on their respective sets and $0$ elsewhere. Directly summing the entries gives $1_X^*A1_Y=e(X,Y)$ and $1_X^*J1_Y=|X||Y|$; also $\|1_X\|_2=\sqrt{|X|}$ and $\|1_Y\|_2=\sqrt{|Y|}$. These identities include diagonal entries and do not require disjointness. In the binary graph case, each summand $A_{xy}$ is the indicator of the corresponding adjacency entry, and a loop contributes once when its vertex lies in $X\cap Y$. [given, F1, F4, algebra]

2.1 The matrix pairing identity gives $f^*Bg=\langle f,Bg\rangle$. Applying Cauchy–Schwarz and step 1.1, then the assumed norm bound, yields $|f^*Bg|\leq\|f\|_2\|Bg\|_2\leq\alpha d^*\|f\|_2\|g\|_2$. [given, F1, F3, step 1.1]

3.1 Substitute the indicators into step 2.1 and use $B=A-(d^*/n)J$ and step 1.2 to obtain the stated ordered-entry bound. No regularity hypothesis was used, and the additive estimate alone makes no asserted multiplicative lower bound for small disjoint sets. [given, step 2.1, step 1.2, algebra] ∎


## Ordered edge counts and centered cut vectors

[Open item](item-prop-expander-prereq-indicator-and-cut-calculus) · level 1


### Statement

Let $(V,A)$ be a network: $V$ is a nonempty finite set, $n=|V|$, and $A$ is a real symmetric nonnegative matrix indexed by $V$. Put $d(x)=\sum_{y\in V}A_{xy}$, $D=\operatorname{diag}(d(x))$, $L=D-A$, and let $J$ be the matrix all of whose entries are $1$. For $X\subseteq V$, let $X^c=V\setminus X$ and let $\mathbf1_X$ be its indicator, equal to $1$ on $X$ and $0$ elsewhere. For subsets $X,Y\subseteq V$, define the ordered weight count $e(X,Y)=\sum_{x\in X}\sum_{y\in Y}A_{xy}$; then $e(X,Y)=\mathbf1_X^TA\mathbf1_Y$.

For $f=|X^c|\mathbf1_X-|X|\mathbf1_{X^c}$, one has $f^Tf=n|X||X^c|$, $Jf=0$, and $f^TLf=n^2e(X,X^c)$. If $X\subseteq Y$, then $2e(X,Y^c)=e(X,X^c)+e(Y,Y^c)-e(Y\setminus X,(Y\setminus X)^c)$. These are ordered-pair weight counts; no diagonal entry contributes to a cut count.

### Statement references

[def-expander-prereq-loop-compatible-networks](item-def-expander-prereq-loop-compatible-networks)

[def-expander-prereq-vertex-hilbert-space](item-def-expander-prereq-vertex-hilbert-space)

[math:def-set-difference-and-symmetric-difference](https://alphabetamath.cc/item/def-set-difference-and-symmetric-difference)

[math:def-finite-sum-in-a-commutative-monoid](https://alphabetamath.cc/item/def-finite-sum-in-a-commutative-monoid)

### Facts & Assumptions

[F1] The network definition supplies symmetric $A$, its row-sum degree matrix $D$, and $L=D-A$; diagonal entries are allowed. See [def-expander-prereq-loop-compatible-networks](item-def-expander-prereq-loop-compatible-networks).

[F2] Matrix action and the vertex pairing are finite coordinate sums. See [def-expander-prereq-vertex-hilbert-space](item-def-expander-prereq-vertex-hilbert-space) and [math:def-finite-sum-in-a-commutative-monoid](https://alphabetamath.cc/item/def-finite-sum-in-a-commutative-monoid).

[F3] Relative complements and set differences consist of the elements in the first set that are not in the second. See [math:def-set-difference-and-symmetric-difference](https://alphabetamath.cc/item/def-set-difference-and-symmetric-difference).

### Proof

**Given:** A network $(V,A)$ and subsets $X,Y\subseteq V$ as in the statement.

**Goal:** Establish the displayed indicator, cut-vector and nested-cut identities.

1.1 By the coordinate definitions, $\mathbf1_X^TA\mathbf1_Y=\sum_{x\in V}\sum_{y\in V}\mathbf1_X(x)A_{xy}\mathbf1_Y(y)=e(X,Y)$. Interchanging the finite indices and using symmetry gives $e(P,Q)=e(Q,P)$ for any subsets $P,Q$. The defining sum is additive over disjoint unions in either argument. Since $X$ and $X^c$ are disjoint, a pair contributing to $e(X,X^c)$ never has equal coordinates, so no diagonal entry contributes. [F1, F2, F3]

1.2 Put $a=|X|$ and $b=|X^c|$. The sets $X$ and $X^c$ partition $V$, so $a+b=n$; the vector $f$ equals $b$ on $X$ and $-a$ on $X^c$. Hence $f^Tf=ab^2+ba^2=nab$ and $\sum_x f(x)=ab-ba=0$. Each coordinate of $Jf$ is this sum, giving $Jf=0$. [F2, F3, algebra]

2.1 Expanding the row sums in $D$ and using symmetry yields $f^TLf=\frac12\sum_{x,y\in V}A_{xy}(f(x)-f(y))^2$. The difference is zero within either part and has square $(a+b)^2=n^2$ across the partition. The two oriented crossing sums are equal, so $f^TLf=n^2e(X,X^c)$. This calculation also covers empty $X$ or $X^c$ and arbitrary diagonal weights. [F1, F2, step 1.1, step 1.2, algebra]

3.1 Suppose $X\subseteq Y$ and put $B=Y\setminus X$ and $C=Y^c$. The sets $X,B,C$ partition $V$. Additivity and symmetry give $e(X,X^c)=e(X,B)+e(X,C)$, $e(Y,Y^c)=e(X,C)+e(B,C)$, and $e(B,B^c)=e(X,B)+e(B,C)$. Substitution gives $e(X,X^c)+e(Y,Y^c)-e(B,B^c)=2e(X,C)=2e(X,Y^c)$, as required. [F3, step 1.1, algebra] ∎


## Regular adjacency spectra and normalized expansion

[Open item](item-prop-expander-prereq-regular-mean-zero-spectrum) · level 1


### Statement

Let $V$ be a finite set with $n=|V|\ge1$, and let $A=(A_{xy})_{x,y\in V}$ be a real symmetric matrix with nonnegative entries and every row sum equal to $d>0$. Write $\mathbf1$ for the constant-one vector, $J$ for the all-ones matrix, and $\mathbf1^\perp=\{f:\sum_x f(x)=0\}$. Use the Euclidean operator norm induced by $\|f\|_2^2=\sum_x|f(x)|^2$. Then $A\mathbf1=d\mathbf1$, $\mathbf1^\perp$ is invariant under $A$, and

$$\left\|A-\frac dnJ\right\|_{\mathrm{op}}=\left\|A\big|_{\mathbf1^\perp}\right\|_{\mathrm{op}}.$$

The norm of an operator on the zero space is zero. For $n\ge2$, choose an orthonormal real eigenbasis of $A$ whose first vector is $\mathbf1/\sqrt n$, and denote the corresponding eigenvalues by $d=\lambda_1,\lambda_2,\ldots,\lambda_n$, with multiplicity. Then both norms equal $\max_{i\ge2}|\lambda_i|$. A further eigenvector with eigenvalue $d$, or an eigenvector with eigenvalue $-d$, is included in this maximum. For $n=1$ both norms are zero and the maximum over $i\ge2$ is not used.

Put $M=A/d$. Its restriction to $\mathbf1^\perp$ has norm $\alpha=\|A-(d/n)J\|_{\mathrm{op}}/d$. If $A$ is specifically the integer adjacency-slot matrix of a finite $d$-regular graph in the convention of [math:def-regular-multigraph-and-normalized-adjacency](https://alphabetamath.cc/item/def-regular-multigraph-and-normalized-adjacency), then for subsets $S,T\subseteq V$, with $e(S,T)=\sum_{x\in S,y\in T}A_{xy}$ counting ordered slots, the expander mixing estimate is

$$\left|e(S,T)-\frac{d|S||T|}{n}\right|\le d\alpha\sqrt{|S|(1-|S|/n)\,|T|(1-|T|/n)}.$$

Here diagonal entries count loop slots; overlap between $S$ and $T$ is allowed. For a disconnected slot graph, another eigenvector of $A$ with eigenvalue $d$ exists. For a connected slot graph whose positive slots join opposite parts of a bipartition, $-d$ is an eigenvalue. In either case the corresponding eigenvalue is retained in the mean-zero spectrum.

### Facts & Assumptions

**Given:** The matrix and, where invoked, the adjacency-slot graph described in the statement.

**Goal:** Prove the centered norm identity, its normalized form, and the stated graph consequences.

[F1] The vertex space has the stated Euclidean inner product and matrix action; a real symmetric matrix acts self-adjointly ([def-expander-prereq-vertex-hilbert-space](item-def-expander-prereq-vertex-hilbert-space)).

[F2] A self-adjoint endomorphism of a finite-dimensional real inner product space has an orthonormal eigenbasis ([math:cor-real-spectral-theorem-for-self-adjoint-endomorphisms](https://alphabetamath.cc/item/cor-real-spectral-theorem-for-self-adjoint-endomorphisms)).

[F3] For a symmetric real square matrix of positive order, its Euclidean operator norm is the largest absolute value of its eigenvalues ([math:lem-symmetric-matrix-operator-norm-rayleigh](https://alphabetamath.cc/item/lem-symmetric-matrix-operator-norm-rayleigh)).

[F4] Orthogonal projection onto a subspace sends each vector to its component in that subspace along its orthogonal complement ([math:def-orthogonal-projection](https://alphabetamath.cc/item/def-orthogonal-projection)).

[F5] In the adjacency-slot convention, $A$ is a symmetric nonnegative integer matrix with row sum the positive integer $d$; $A_{xy}$ counts slots, diagonal entries count loop slots, and normalized adjacency is $M=A/d$ ([math:def-regular-multigraph-and-normalized-adjacency](https://alphabetamath.cc/item/def-regular-multigraph-and-normalized-adjacency)). The normalized spectral parameter is $\alpha=\|M|_{\mathbf1^\perp}\|$, with $\alpha=0$ for $n=1$ ([math:def-spectral-edge-and-vertex-expansion](https://alphabetamath.cc/item/def-spectral-edge-and-vertex-expansion)).

[F6] For such a slot graph the multiplicity of eigenvalue $1$ of $M$ is the number of connected components. For a connected graph, $-1$ is an eigenvalue exactly when its positive slots join opposite parts of a bipartition ([math:lem-constant-vector-is-a-top-eigenvector](https://alphabetamath.cc/item/lem-constant-vector-is-a-top-eigenvector)).

[F7] The expander mixing lemma gives the displayed ordered-slot estimate for the conventions and parameter in [F5], including loops and overlapping subsets ([math:thm-expander-mixing-lemma](https://alphabetamath.cc/item/thm-expander-mixing-lemma)).

[F8] For a linear map $T:E\to F$ between finite-dimensional real or complex inner product spaces, its operator norm is $\max_{\|v\|=1}\|Tv\|$ when $E\ne\{0\}$ and is zero when $E=\{0\}$ ([math:def-operator-norm-on-a-finite-dimensional-inner-product-space](https://alphabetamath.cc/item/def-operator-norm-on-a-finite-dimensional-inner-product-space)).

### Proof

1.1 The row-sum condition gives $A\mathbf1=d\mathbf1$. For any $f$, self-adjointness gives $\langle\mathbf1,Af\rangle=\langle A\mathbf1,f\rangle=d\langle\mathbf1,f\rangle$; hence $A$ preserves $\mathbf1^\perp$. The vector $(n^{-1}\sum_x f(x))\mathbf1$ lies in the constant subspace and its difference from $f$ is mean zero. By [F4], $P=J/n$ is the orthogonal projection onto the constants. Thus $A-(d/n)J=A-dP$ is zero on constants and agrees with $A$ on $\mathbf1^\perp$. [F1, F4, algebra]

2.1 The restriction of $A$ to the real mean-zero subspace is self-adjoint. If $n\ge2$, apply [F2] to that restriction and adjoin $\mathbf1/\sqrt n$ to obtain the stated eigenbasis. In this basis $A-dP$ has eigenvalues $0,\lambda_2,\ldots,\lambda_n$. By [F3], its norm is $\max_{i\ge2}|\lambda_i|$; the same calculation on the restriction gives the same norm. A real eigenbasis also computes the complex operator norm: expanding a complex vector in this basis gives the same upper bound, attained at a real maximizing eigenvector. When $n=1$, $P=I$ and the mean-zero space is zero, so both norms are zero. [F2, F3, F8, step 1.1, algebra]

3.1 A second independent $d$-eigenvector can be made orthogonal to $\mathbf1$ by subtracting its constant projection, leaving a nonzero $d$-eigenvector. A $-d$-eigenvector is orthogonal to $\mathbf1$ because self-adjointness and $d>0$ give $-d\langle\mathbf1,v\rangle=d\langle\mathbf1,v\rangle$. Thus neither is discarded when the first constant vector is removed. Division by $d$ gives $\|M|_{\mathbf1^\perp}\|=\|A-(d/n)J\|_{\mathrm{op}}/d$, including the zero-space case. [F1, F8, step 1.1, step 2.1, algebra]

4.1 Under the additional integer slot hypotheses, [F5] identifies this normalized norm with the mixing lemma's $\alpha$, and [F7] gives the displayed estimate with precisely its ordered-slot, loop and overlap conventions. By [F6], disconnectedness supplies a second $1$-eigenvector of $M$, while the stated connected bipartition supplies a $-1$-eigenvector. Multiplication by $d$ and step 3.1 give the final assertions. This proves all claims. [F5, F6, F7, step 3.1, algebra] ∎


## Real symmetric quadratic forms tested on phasors

[Open item](item-prop-expander-prereq-complex-quadratic-tests) · level 1


### Statement

Let $V$ be a finite set and $B=(B_{xy})_{x,y\in V}$ a real symmetric matrix, meaning $B_{xy}=B_{yx}\in\mathbb R$. For $f=u+iv\in\mathbb C^V$ with $u,v\in\mathbb R^V$, write $f^*Bf=\sum_{x,y\in V}\overline{f_x}B_{xy}f_y$ and $u^TBu=\sum_{x,y\in V}u_xB_{xy}u_y$. Then $f^*Bf=u^TBu+v^TBv$.

Thus $B$ is positive semidefinite on real vectors, meaning $u^TBu\geq 0$ for every $u\in\mathbb R^V$, if and only if $f^*Bf\geq 0$ for every $f\in\mathbb C^V$. Likewise, $u^TBu>0$ for every nonzero real $u$ if and only if $f^*Bf>0$ for every nonzero complex $f$.

For any real symmetric array $b=(b_{xy})_{x,y\in V}$, let $L=\operatorname{diag}(\sum_y b_{xy})-b$, so that $L_{xy}=\delta_{xy}\sum_z b_{xz}-b_{xy}$, with $\delta_{xy}=1$ when $x=y$ and $0$ otherwise. Then $f^*Lf=\frac12\sum_{x,y\in V}b_{xy}|f_x-f_y|^2$. This identity allows signed coefficients $b_{xy}$; nonnegativity of the form requires a separate positive-semidefiniteness premise.

### Statement references

[Finite vertex Hilbert space in the article convention](item-def-expander-prereq-vertex-hilbert-space)

[Complex conjugation and modulus laws](https://alphabetamath.cc/item/lem-complex-conjugation-and-modulus-laws)

### Facts & Assumptions

[F1] On a finite vertex set, matrix action and the second-linear inner product are given by finite sums, and a real symmetric matrix is self-adjoint ([def-expander-prereq-vertex-hilbert-space](item-def-expander-prereq-vertex-hilbert-space)).

[F2] Complex conjugation preserves sums and products, fixes real numbers, and satisfies $z\overline z=|z|^2$ ([math:lem-complex-conjugation-and-modulus-laws](https://alphabetamath.cc/item/lem-complex-conjugation-and-modulus-laws)).

### Proof

**Given:** A finite set $V$, a real symmetric matrix $B$, a vector $f=u+iv$ with real $u,v$, and a real symmetric array $b$.

**Goal:** Prove the quadratic-form decomposition, the two positivity equivalences, and the signed-weight identity.

1.1 Expanding the finite sums using [F1] and [F2] gives $f^*Bf=u^TBu+v^TBv+i(u^TBv-v^TBu)$. Interchanging $x$ and $y$ in the finite sum and using $B_{xy}=B_{yx}$ gives $v^TBu=u^TBv$. The imaginary term therefore vanishes, proving the decomposition. [F1, F2, algebra]

2.1 If $u^TBu\geq0$ for all real $u$, the decomposition makes $f^*Bf\geq0$ for all complex $f$; the converse follows by taking $v=0$. If the real form is strictly positive on nonzero vectors, then a nonzero $f=u+iv$ has at least one nonzero component vector, and the decomposition is strictly positive because the other term is nonnegative. The converse again follows by taking $v=0$. [step 1.1, algebra]

3.1 By [F2], $|f_x-f_y|^2=|f_x|^2+|f_y|^2-\overline{f_x}f_y-\overline{f_y}f_x$. Since $b_{xy}=b_{yx}$, interchanging the indices in the second diagonal sum and in the last cross term yields $\frac12\sum_{x,y}b_{xy}|f_x-f_y|^2=\sum_x(\sum_yb_{xy})|f_x|^2-\sum_{x,y}b_{xy}\overline{f_x}f_y=f^*Lf$, by the matrix action in [F1]. No sign condition on $b$ was used. If $L$ is positive semidefinite on real vectors, step 2.1 gives nonnegativity on complex vectors. [F1, F2, step 2.1, algebra] ∎


## A scoped interacting-particle transformer connection

[Open item](item-rem-expander-prereq-transformer-context-input) · level 1


### Statement

Geshkovski, Letrouit, Polyanskiy and Rigollet study an idealized continuous-time transformer model in which tokens, represented by particles, interact on a unit sphere through self-attention. Here self-attention means that each particle forms a weighted average of the particle vectors, with weights determined by their current inner products and normalized separately for each particle. The authors study long-time clustering, meaning particles gathering into groups as time grows, under model-specific hypotheses.

For their identity-parameter model, let $n\geq1$, $d\geq2$, $\beta>0$ and $x_i(t)\in S^{d-1}\subset\mathbb R^d$. Write $P_x^\perp y=y-(x\cdot y)x$. Their normalized dynamics are $\dot x_i=P_{x_i}^\perp\left(Z_i^{-1}\sum_{j=1}^n e^{\beta x_i\cdot x_j}x_j\right)$, where $Z_i=\sum_{k=1}^n e^{\beta x_i\cdot x_k}$. The sum includes the self-interaction term.

For a separately specified unnormalized surrogate on $S^1$, writing $x_i=(\cos\theta_i,\sin\theta_i)$ gives $\dot\theta_i=-n^{-1}\sum_{j=1}^n e^{\beta\cos(\theta_i-\theta_j)}\sin(\theta_i-\theta_j)$. For $\beta>0$ this is gradient ascent, with the normalization $n\nabla$, for $E_\beta(\theta)=(2\beta n^2)^{-1}\sum_{i,j=1}^n e^{\beta\cos(\theta_i-\theta_j)}$. At $\beta=0$ the angular equation becomes the all-to-all homogeneous Kuramoto equation with coupling one and zero intrinsic frequencies.

### Statement references

[def-expander-prereq-sphere-vector-configurations](item-def-expander-prereq-sphere-vector-configurations)

### External input

The model equations, the circle surrogate, its energy and the stated special-case Kuramoto identification are imported from the cited source. The normalized model and the unnormalized surrogate are distinct dynamics. This input does not assert equivalence with the homogeneous Kuramoto flow on an arbitrary graph, transfer expansion constants, or import a clustering theorem.

### Source notes

The cited source's Sections 4–6 contain clustering results under specific hypotheses; their proofs are outside this input. Its Section 7.2 discusses the graph-weighted Kuramoto variant separately. A comparison with a particular graph flow requires matching interaction weights, normalization and hypotheses.


## Scoped independent low-rank landscape reports

[Open item](item-rem-expander-prereq-low-rank-progress-context) · level 1


### Statement

For integers $n\ge1$ and $r\ge2$, a sphere configuration consists of $n$ unit vectors in $\mathbb R^r$; their Gram matrix has entries given by their pairwise inner products. A Burer–Monteiro factorization represents a positive semidefinite matrix with unit diagonal and rank at most $r$ by such a Gram matrix $YY^T$, with $Y$ having $r$ columns. Here a landscape means the behavior of an objective on its feasible configurations, including its local extrema and critical points. On the feasible smooth manifold $M_{n,r}$ of unit-row matrices, let $f:M_{n,r}\to\mathbb R$ be a smooth objective. A second-order critical point is a feasible $Y$ with $df_Y=0$ and $\operatorname{Hess}_Y(f)(V,V)\ge0$ for every $V\in T_YM_{n,r}$. Here $\operatorname{Hess}_Y(f)$ is the intrinsic Hessian at a critical point, defined by the second derivatives in any smooth chart; the second variation in direction $V$ means its quadratic value $\operatorname{Hess}_Y(f)(V,V)$. A global minimizer has objective value no larger than every feasible point.

McRae, Abdalla, Bandeira and Boumal report near-threshold asymptotic guarantees for three specified binary synchronization and clustering models with sufficiently large finite rank. Rakoto Endor and Waldspurger report a Laplacian-conditioning criterion for global optimality of every second-order critical point in their low-rank semidefinite-program setting. McRae subsequently reports results for every $r\ge2$ in several specified asymptotic recovery models and an extension of the conditioning criterion using diagonal preconditioning, together with results for random signed oscillator networks.

### Statement references

[def-expander-prereq-sphere-vector-configurations](item-def-expander-prereq-sphere-vector-configurations)

[def-expander-prereq-vector-spin-landscapes](item-def-expander-prereq-vector-spin-landscapes)

[math:def-hessian-of-a-function-at-a-critical-point](https://alphabetamath.cc/item/def-hessian-of-a-function-at-a-critical-point)

### External input

The three reports above are imported only at the level of their authors' abstracts. Their exact inequalities, model parameters and proofs are not supplied here, and these reports alone are not an unqualified circle-rank exact-recovery theorem or a theorem applicable to arbitrary graphs. An application requires the relevant full theorem and verification of its hypotheses.


## Rational inverse-sine brackets on the principal branch

[Open item](item-lem-author-2e2d9953c21a-inverse-brackets) · level 1


### Statement

Let $N\ge0$ be an integer and let $z,a,b$ be rational with $0\le z\le1$ and $0\le a\le b\le\pi/2$. For $x\in\{a,b\}$ put $q_N(x)=x^2/((2N+4)(2N+5))$ and assume $q_N(x)<1$. Let $S_N,R_N$ be the finite sums and tails in the sine-enclosure lemma. If $S_N(a)+R_N(a)\le z$ and $S_N(b)-R_N(b)\ge z$, then $a\le\arcsin z\le b$. A rational search may certify its final endpoints using these two inequalities under the stated enclosure conditions; it need not assign a value when a trial enclosure straddles $z$.

### Facts & Assumptions

**Given:** The integer $N$, rational inputs, enclosure conditions and endpoint inequalities in the Statement.

[F1] [math:def-principal-inverse-sine-and-cosine](https://alphabetamath.cc/item/def-principal-inverse-sine-and-cosine) defines $\arcsin$ as the inverse of strictly increasing sine on $[-\pi/2,\pi/2]$.

[F2] [lem-author-2e2d9953c21a-sine-enclosures](item-lem-author-2e2d9953c21a-sine-enclosures) gives $S_N(x)-R_N(x)\le\sin x\le S_N(x)+R_N(x)$ for rational $x$, an integer $N\ge0$ and $q_N(x)<1$.

### Proof

**Given:** The integer $N$, rational inputs, enclosure conditions and endpoint inequalities in the Statement.

**Goal:** Prove the inverse-sine bracketing rule.

1.1 The integer $N\ge0$, rational endpoints $a,b$ and inequalities $q_N(a)<1$, $q_N(b)<1$ meet the hypotheses of [F2] at both endpoints. Its enclosures and the endpoint tests give $\sin a\le S_N(a)+R_N(a)\le z\le S_N(b)-R_N(b)\le\sin b$. By [F1], $\sin(\arcsin z)=z$, and all three arguments $a,\arcsin z,b$ lie in $[-\pi/2,\pi/2]$. [given, F1, F2]

2.1 Applying strict monotonicity to the two comparisons yields $a\le\arcsin z\le b$. In particular, a search whose final endpoints pass these exact rational tests yields a certificate regardless of how its trials were selected; an unclassified trial is not evidence. [step 1.1, F1] ∎


## A uniform inverse-sine majorant and geometric angular tail

[Open item](item-lem-author-2e2d9953c21a-geometric-tail) · level 1


### Statement

Put $h=3.168$, $t=3.326$, $r=t/h$ and $q=2.1274$, with these decimals interpreted as exact rationals. For $0\le x\le1/4$, $\arcsin x\le rx$. Consequently, for every real $C\ge63.295$, the series $\sum_{k=0}^{\infty}\arcsin(h/(Cq^k))$ converges and its sum is at most $t/(C(1-1/q))$. For every integer $m\ge0$, the tail series also converges and satisfies $0\le\sum_{k=m}^{\infty}\arcsin(h/(Cq^k))\le t/(Cq^m(1-1/q))$.

### Facts & Assumptions

[F1] [lem-author-2e2d9953c21a-sine-enclosures](item-lem-author-2e2d9953c21a-sine-enclosures) gives $y-y^3/6\le\sin y\le y$ for rational $y$ with $0\le y\le1$; in particular $\sin0=0$.

[F2] [math:def-principal-inverse-sine-and-cosine](https://alphabetamath.cc/item/def-principal-inverse-sine-and-cosine) supplies sine continuity and strict increase on $[-\pi/2,\pi/2]$, and its principal inverse.

[F3] [lem-author-2e2d9953c21a-logarithm-and-pi](item-lem-author-2e2d9953c21a-logarithm-and-pi) supplies a rational enclosure of $\pi$; its $N=1$ Machin bound gives $\pi>3$.

[F4] [math:def-series](https://alphabetamath.cc/item/def-series) defines a series sum as the limit of its partial sums and defines the tail starting at an integer $m\ge0$ as the series with terms $a_{m+j}$ for integers $j\ge0$.

[F5] [math:thm-nonnegative-series-bounded-partial-sums](https://alphabetamath.cc/item/thm-nonnegative-series-bounded-partial-sums) states that a real series with nonnegative terms converges if its partial sums are bounded above, and its sum is then the supremum of those partial sums.

[F6] [math:lem-rat-embeds-dense](https://alphabetamath.cc/item/lem-rat-embeds-dense) states that strictly between any two distinct real numbers lies a rational number.

### Proof

**Given:** The exact rational constants above, and real $C\ge63.295$ and integer $m\ge0$ for the series and tail claims.

**Goal:** Prove the stated inverse-sine and geometric-tail estimates.

1.1 We first extend the lower bound in [F1] to all real $y\in[0,1]$. Put $p(y)=y-y^3/6$. For $y,z\in[0,1]$, factorization gives $|p(z)-p(y)|=|z-y|\,|1-(z^2+zy+y^2)/6|\le(3/2)|z-y|$. The endpoints $y=0,1$ are rational, so [F1] applies there. Fix real $0<y<1$ and $\varepsilon>0$. By [F3], $[0,1]\subset[-\pi/2,\pi/2]$, and continuity in [F2] gives $\delta>0$ such that $|\sin z-\sin y|<\varepsilon/2$ for branch points $z$ with $|z-y|<\delta$. Set $\eta=\min\{\delta,\varepsilon/3,y,1-y\}>0$. By [F6], choose a rational $z$ strictly between $y-\eta$ and $y+\eta$. Then $0<z<1$, $|p(z)-p(y)|<\varepsilon/2$, and [F1] gives $p(z)\le\sin z$. Therefore $p(y)<p(z)+\varepsilon/2\le\sin z+\varepsilon/2<\sin y+\varepsilon$. Since this holds for every $\varepsilon>0$, $p(y)\le\sin y$: a positive difference would violate it at half that difference. Thus $y-y^3/6\le\sin y$ for every real $0\le y\le1$. [given, F1, F2, F3, F6, choose, algebra]

2.1 Exact rational arithmetic gives $1<r<21/20$ and $r-r^3/96>1$. For $0\le x\le1/4$, $0\le rx\le21/80<1<\pi/2$, and step 1.1 yields $\sin(rx)\ge rx-r^3x^3/6\ge x(r-r^3/96)\ge x$. By increasing-branch inversion, $\arcsin x\le rx$. Since $\sin0=0$, the same branch inversion gives $\arcsin0=0$ and $\arcsin x\ge0$ for $x\ge0$ in this interval. At $x=0$ equality holds. [given, F1, F2, F3, step 1.1, algebra]

3.1 Since $h/63.295<1/4$ and $q>1$, for every integer $k\ge0$ the argument $h/(Cq^k)$ lies in $[0,1/4]$. Set $a_k=\arcsin(h/(Cq^k))$. Step 2.1 gives $0\le a_k\le t/(Cq^k)$. Thus these are well-defined nonnegative real terms. [given, step 2.1, algebra]

4.1 Put $\rho=1/q$, so $0<\rho<1$. For integers $m,n\ge0$, let $P_{m,n}=\sum_{j=0}^{n-1}a_{m+j}$ and $G_n=\sum_{j=0}^{n-1}\rho^j$, with both sums zero when $n=0$. The finite telescoping identity $(1-\rho)G_n=\sum_{j=0}^{n-1}(\rho^j-\rho^{j+1})=1-\rho^n$ holds also at $n=0$. Since $0<\rho^n\le1$, it gives $0\le G_n\le1/(1-\rho)$. Termwise finite summation of step 3.1 therefore gives $0\le P_{m,n}\le(t/(Cq^m))G_n\le B_m$, where $B_m=t/(Cq^m(1-1/q))$ is positive and independent of $n$. [given, F4, step 3.1, algebra]

5.1 Fix any integer $m\ge0$. By [F4], $P_{m,n}$ are precisely the partial sums of the tail series with terms $a_{m+j}$. These terms are nonnegative by step 3.1, and their partial sums are bounded above by $B_m$ by step 4.1. Hence [F5] proves convergence and identifies the tail sum with the supremum of these partial sums, which lies in $[0,B_m]$. This proves the stated tail bound for every integer $m\ge0$; taking $m=0$ gives convergence and the bound for the full series. [given, F4, F5, step 3.1, step 4.1] ∎



## A complete-graph second-order landscape application

[Open item](item-prop-expander-prereq-complete-graph-psd-landscape) · level 2


### Statement

Let $V$ be a finite set of $n\ge1$ vertices. The unweighted complete graph has one edge between each pair of distinct vertices. A phase configuration is $\theta\in T_V=\mathbb R^V/(2\pi\mathbb Z)^V$; write $\theta_x$ also for an angular representative. Its cosine-difference energy is $U(\theta)=\sum_{\{x,y\}\subseteq V,\,x\ne y}(1-\cos(\theta_x-\theta_y))$. An equilibrium means a configuration at which the gradient of $U$ in angular coordinates vanishes. Its Hessian $H$ is the matrix of second angular partial derivatives; it is positive semidefinite if $f^THf\ge0$ for every $f\in\mathbb R^V$. Fully synchronized means that all phases coincide modulo $2\pi$.

Every equilibrium of this energy whose Hessian is positive semidefinite is fully synchronized. Common rotation means adding the same phase to every coordinate; the conclusion is invariant under this rotation. No general converse from a positive semidefinite Hessian to local minimality is asserted.

### Statement references

[def-expander-prereq-phase-torus](item-def-expander-prereq-phase-torus)

[def-expander-prereq-phasor-calculus](item-def-expander-prereq-phasor-calculus)

[prop-expander-prereq-pair-potential-calculus](item-prop-expander-prereq-pair-potential-calculus)

[prop-expander-prereq-complex-quadratic-tests](item-prop-expander-prereq-complex-quadratic-tests)

### Facts & Assumptions

[F1] Angular representatives differ by integer multiples of $2\pi$, and angular chart transitions are translations. Thus the displayed gradient and Hessian conditions are independent of the chosen angular chart ([def-expander-prereq-phase-torus](item-def-expander-prereq-phase-torus)).

[F2] For real $u,v$, $e^{iu}=\cos u+i\sin u$ has modulus one, $e^{i(u-v)}=e^{iu}\overline{e^{iv}}$, and these expressions are unchanged by adding integer multiples of $2\pi$ to angles. The derivatives of sine and cosine are cosine and minus sine, respectively ([def-expander-prereq-phasor-calculus](item-def-expander-prereq-phasor-calculus)).

[F3] For a symmetric array of real weights and an even twice continuously differentiable periodic pair potential, the gradient is the sum of its first derivatives over neighbors and the Hessian quadratic form is one half the ordered sum of the second derivative times the squared coordinate difference ([prop-expander-prereq-pair-potential-calculus](item-prop-expander-prereq-pair-potential-calculus)).

[F4] For a real symmetric matrix, positive semidefiniteness on real vectors implies nonnegativity of its complex quadratic form. For a real symmetric array $b$, the complex form of $\operatorname{diag}(\sum_y b_{xy})-b$ equals $\frac12\sum_{x,y}b_{xy}|f_x-f_y|^2$ ([prop-expander-prereq-complex-quadratic-tests](item-prop-expander-prereq-complex-quadratic-tests)).

[F5] A nonzero average of unit phasors can be rotated to its positive modulus by multiplying all phasors by a common unit phasor ([prop-expander-prereq-phasor-average-rigidity](item-prop-expander-prereq-phasor-average-rigidity)).

### Proof

**Given:** A configuration $\theta$ on the complete graph with vanishing angular gradient and positive semidefinite Hessian $H$.

**Goal:** Show that all its phases coincide modulo $2\pi$.

1.1 Set $z_x=e^{i\theta_x}$ and $R=\sum_x z_x$. Apply [F3] with $w_{xy}=1$ for $x\ne y$, $w_{xx}=0$, and $v(t)=1-\cos t$. By [F2], the gradient component is $\sum_y\sin(\theta_x-\theta_y)=\operatorname{Im}(z_x\overline R)$, and the real Hessian is the weighted Laplacian with entries $b_{xy}=\cos(\theta_x-\theta_y)$ for $x\ne y$ and $b_{xx}=0$. Adding the harmless diagonal coefficients $b_{xx}=1$ leaves this Laplacian unchanged. Since $b_{xy}=\frac12(z_x\overline{z_y}+\overline{z_x}z_y)$, finite-sum expansion gives $\sum_{x,y}\overline{f_x}b_{xy}f_y=\frac12(|\sum_x z_x f_x|^2+|\sum_x\overline{z_x}f_x|^2)$. Expanding the complex quadratic form from [F4] therefore gives, for every $f\in\mathbb C^V$, $f^*Hf=\sum_x\operatorname{Re}(z_x\overline R)|f_x|^2-\frac12(|\sum_x z_x f_x|^2+|\sum_x\overline{z_x}f_x|^2)$. [F2, F3, F4, algebra]

2.1 If $R=0$, choose $f_x=\overline{z_x}$. By [F2], $\sum_x z_x f_x=n$ and $\sum_x\overline{z_x}f_x=\overline{\sum_x z_x^2}$. Step 1.1 gives $f^*Hf=-\frac12(n^2+|\sum_x z_x^2|^2)\le -\frac12 n^2<0$, contradicting [F4] and the assumed positive semidefiniteness. Hence $R\ne0$. [given, F2, F4, step 1.1, choose, algebra]

3.1 Put $r=|R|>0$. By [F5], a common rotation makes $R=r$; it leaves phase differences, the gradient equations and $H$ unchanged. At equilibrium, step 1.1 then gives $\operatorname{Im}z_x=0$ for every $x$. Since $|z_x|=1$, each $z_x$ is either $1$ or $-1$. If some $z_x=-1$, choose the real coordinate vector $f$ that is $1$ at $x$ and zero elsewhere. Step 1.1 gives $f^THf=-r-1<0$, contradicting positive semidefiniteness. Thus every rotated phasor equals $1$. [given, F2, F5, step 1.1, step 2.1, choose, algebra]

4.1 Therefore the original phasors are all equal. The phase-torus identification with the unit circle in [F1], together with [F2], implies that their phases agree modulo $2\pi$. This is full synchronization. The proof used only the stated equilibrium and Hessian hypotheses and makes no sufficiency claim for general semidefinite Hessians. [F1, F2, step 3.1] ∎


## One-vertex composition of phase-difference landscapes

[Open item](item-prop-expander-prereq-one-vertex-landscape-composition) · level 2


### Statement

Let $G_1=(V_1,E_1)$ and $G_2=(V_2,E_2)$ be finite undirected networks whose vertex sets meet exactly at $v$. Here $V_i$ is nonempty and finite, and $E_i$ is a set of unordered pairs $\{x,y\}$ with $x,y\in V_i$; the case $x=y$ denotes a loop. Thus repeated edges are excluded and loops are allowed. Equivalently, the symmetric binary matrix $A_i$ has $(A_i)_{xy}=1$ exactly when $\{x,y\}\in E_i$, including on the diagonal; this is a finite symmetric network. The loop-free support graph has vertex set $V_i$ and edges $\{\{x,y\}\in E_i:x\ne y\}$. Assume it is connected: every two vertices are joined by a path, with the length-zero path allowed at a single vertex. On the phase torus $T_{V_i}=\mathbb R^{V_i}/(2\pi\mathbb Z)^{V_i}$, let $U_i$ be a real-valued $C^2$ energy depending only on phase differences. Thus its value is unchanged by adding one common phase to every coordinate. A configuration is synchronized when all its vertex phases agree. A critical point has all first angular partial derivatives zero; a negative Hessian direction at a critical point is a real tangent vector $h$ with $h^T\nabla^2U_i h<0$. A local minimum is a point whose energy is no greater than the energy at every point in some neighborhood.

Suppose that, for each $i$, every local minimum of $U_i$ is synchronized and every critical point that is not a local minimum has a negative Hessian direction. On the glued network with vertex set $V=V_1\cup V_2$ and edge set $E_1\cup E_2$, define $U(\theta)=U_1(\theta|_{V_1})+U_2(\theta|_{V_2})$. Then every local minimum of $U$ is synchronized, and every critical point of $U$ that is not a local minimum has a negative Hessian direction. Fixing the shared phase gives independent relative-phase coordinates for the two factors. This conclusion uses the one-vertex product structure; it does not assert a general edge-addition monotonicity theorem.

### Statement references

[def-expander-prereq-loop-compatible-networks](item-def-expander-prereq-loop-compatible-networks)

[math:def-connected-graph-and-connected-component](https://alphabetamath.cc/item/def-connected-graph-and-connected-component)

[def-expander-prereq-phase-torus](item-def-expander-prereq-phase-torus)

[def-expander-prereq-rotation-reduction](item-def-expander-prereq-rotation-reduction)

[prop-expander-prereq-second-variation-test](item-prop-expander-prereq-second-variation-test)

### Facts & Assumptions

[F1] The phase torus has angular charts with locally translational transitions, and coordinatewise addition and subtraction of phases are represented in these charts by addition and subtraction of real lifts ([def-expander-prereq-phase-torus](item-def-expander-prereq-phase-torus)).

[F2] Fixing one vertex gives a relative-phase coordinate for each diagonal rotation orbit; every phase-difference function is constant on these orbits ([def-expander-prereq-rotation-reduction](item-def-expander-prereq-rotation-reduction)).

[F3] A local minimum of a $C^2$ function in Euclidean coordinates is critical and has nonnegative Hessian quadratic form ([prop-expander-prereq-second-variation-test](item-prop-expander-prereq-second-variation-test)).

[F4] A symmetric nonnegative matrix on a nonempty finite vertex set is a network; its positive off-diagonal entries define its loop-free support graph. The binary case represents the unordered edges in the Statement, with diagonal entries representing loops ([def-expander-prereq-loop-compatible-networks](item-def-expander-prereq-loop-compatible-networks)). Connectedness of that support graph means that every two vertices are joined by a path; a one-vertex graph is connected ([math:def-connected-graph-and-connected-component](https://alphabetamath.cc/item/def-connected-graph-and-connected-component)).

[F5] For composable maps between open Euclidean sets, total differentiability of the inner map at a point and of the outer map at its image gives $D(g\circ f)(a)=Dg(f(a))\circ Df(a)$ ([math:thm-chain-rule-for-total-derivatives](https://alphabetamath.cc/item/thm-chain-rule-for-total-derivatives)).

[F6] In a finite product of topological spaces, products of open factor neighborhoods form a neighborhood basis. The empty product is a one-point space ([math:def-product-topology](https://alphabetamath.cc/item/def-product-topology)).

[A1] The two networks and energies satisfy the hypotheses of the Statement.

### Proof

**Given:** The networks, energies and hypotheses in the Statement.

**Goal:** Prove the two landscape properties for $U$ and establish the relative-phase product structure.

1.1 Every edge of $E_1\cup E_2$ has endpoints in $V=V_1\cup V_2$, so the glued network has the same unordered-edge convention, with any common loop at $v$ occurring once in the edge union. Its energy is the displayed sum by definition. Write $W_i=V_i\setminus\{v\}$. The map sending $\theta$ to $(c,z_1,z_2)$, where $c=\theta_v$ and $z_i=(\theta_x-\theta_v)_{x\in W_i}$, has inverse $\theta_v=c$ and $\theta_x=c+(z_i)_x$ for $x\in W_i$. The sets $W_1,W_2$ are disjoint and cover $V\setminus\{v\}$, so these formulas are mutually inverse. In angular charts both maps are represented locally by linear maps, hence are smooth with smooth inverses. If $W_i$ is empty, its factor is the one-point empty product. Thus the shared phase and the two relative-phase factors give a product diffeomorphism. [A1, F1, F2, F4, algebra]

2.1 Let $u_i(z_i)$ be $U_i$ evaluated with phase $0$ at $v$ and phases $z_i$ on $W_i$. Rotation invariance gives $U(c,z_1,z_2)=u_1(z_1)+u_2(z_2)$, independently of $c$. To transfer derivatives, take any local affine map $B(y)=My+b$ between the angular-coordinate open sets and any $C^2$ scalar function $f$. Applying [F5] gives $\partial_j(f\circ B)(y)=\sum_r M_{rj}(\partial_r f)(B(y))$. Applying [F5] again to each $\partial_r f$ gives $\partial_k\partial_j(f\circ B)(y)=\sum_{r,s}M_{rj}M_{sk}(\partial_s\partial_r f)(B(y))$. Thus the composition is $C^2$, and $\nabla(f\circ B)=M^T(\nabla f)\circ B$ and $\nabla^2(f\circ B)=M^T((\nabla^2 f)\circ B)M$. These formulas apply to the component sections defining $u_i$ and to the inverse coordinate maps in step 1.1; all domains can be restricted to angular-chart open neighborhoods. When $M$ is invertible, the gradient vanishes in one coordinate system exactly when it vanishes in the other, and the Hessian quadratic form on $k$ in the new coordinates equals the old form on $Mk$. Empty relative-phase factors have no derivatives, and the same formulas use empty sums. For the displayed sum, the relative-factor derivatives are those of $u_i$ and the $c$ derivative is zero. Consequently a point is critical for $U$ exactly when both $z_i$ are critical for $u_i$; applying the invertible component coordinate map also makes this equivalent to criticality of each corresponding $U_i$. [A1, F1, F2, F5, step 1.1, algebra]

3.1 A point is a local minimum of $U$ exactly when both $z_i$ are local minima of their $u_i$. Indeed, by [F6] a neighborhood witnessing a minimum contains a product $N_c\times N_1\times N_2$ of open neighborhoods of its coordinates. Fixing $c$ and the other relative factor in the energy inequality shows $u_i(z_i)\leq u_i(w_i)$ for every $w_i\in N_i$, proving necessity. Conversely, choose open neighborhoods witnessing the two factor minima and any open neighborhood of $c$. Their product is a neighborhood by [F6], and adding the factor inequalities proves the minimum property for $U$. Applying the same argument to the component coordinates $(\theta_v,z_i)$ shows that a minimum of $u_i$ is exactly a minimum of $U_i$ at the corresponding configuration. The diffeomorphisms in step 1.1 carry these neighborhoods to neighborhoods in the original phase tori. This also covers a one-point relative factor. Consequently every minimum of $U$ restricts to synchronized configurations on both components. Their common phase at $v$ is the same, so the whole glued configuration is synchronized. [A1, F2, F6, step 1.1, step 2.1]

4.1 At a critical point of $U$ that is not a local minimum, step 3.1 gives a factor that is not a local minimum. By step 2.1 its corresponding component configuration is critical, so [A1] gives a tangent direction $h$ with strictly negative component Hessian quadratic form. Let $L_i$ be the invertible derivative of the inverse component coordinate map $(c,z_i)\mapsto\theta|_{V_i}$, and write $L_i^{-1}h=(a,b)$. The Hessian formula in step 2.1 shows that the component form in these coordinates on $(a,b)$ is the same negative number. Since $U_i$ is independent of $c$, its quadratic form on $(a,b)$ equals that on $(0,b)$. Extend $(0,b)$ to the glued product by taking zero velocity in the other relative-phase factor and in $c$. The sum in step 2.1 has block-diagonal second derivatives, so its quadratic form on this extended direction is the same negative number. Applying the inverse glued coordinate derivative to that direction and using the same Hessian formula gives a negative direction in the original angular coordinates of $U$. The coordinate maps are locally affine, so their second derivatives vanish and no additional term occurs. This proves the remaining assertion. [A1, F1, F5, step 1.1, step 2.1, step 3.1, algebra] ∎

### Remarks

The argument applies to the displayed sum of phase-difference energies. It makes no claim about adding an edge between vertices already in a network.


## Twisted cycle equilibria and transverse positivity

[Open item](item-prop-expander-prereq-cycle-twisted-states) · level 2


### Statement

Let $n\ge5$ be an integer and let $V=\{0,\ldots,n-1\}$, with indices read modulo $n$. The unweighted cycle has an edge between $j$ and $j+1$ for each $j\in V$. On the phase torus $T_V=\mathbb R^V/(2\pi\mathbb Z)^V$, consider the homogeneous cosine-difference potential $U(\theta)=\sum_{j=0}^{n-1}(1-\cos(\theta_{j+1}-\theta_j))$ and its negative-gradient system $\dot\theta=-\nabla U(\theta)$. An equilibrium is a configuration at which this vector field vanishes. Let $L$ be the cycle Laplacian, $(Lf)_j=2f_j-f_{j-1}-f_{j+1}$.

The winding-one configuration $\theta^*_j=2\pi j/n$ modulo $2\pi$ is an equilibrium. Its Hessian is $\nabla^2U(\theta^*)=\cos(2\pi/n)L$ and is positive definite on $\mathbf1^\perp=\{f\in\mathbb R^V:\sum_j f_j=0\}$, the orthogonal complement of the common rotation direction $\mathbf1=(1,\ldots,1)$. The rotation class of $\theta^*$ is a strict local minimum of the induced potential in relative-phase coordinates. This is a local-landscape assertion; it does not assert positive-volume point attraction.

### Facts & Assumptions

[F1] The phase torus has angular charts given by local real representatives. A function depending only on phase differences descends to the rotation quotient, which is homeomorphic to the relative-phase torus via $\theta\mapsto(\theta_j-\theta_0)_{j\ne0}$ ([def-expander-prereq-phase-torus](item-def-expander-prereq-phase-torus), [def-expander-prereq-rotation-reduction](item-def-expander-prereq-rotation-reduction)).

[F2] Sine and cosine are $2\pi$-periodic, $\cos'=-\sin$, and $\sin'=\cos$ ([def-expander-prereq-phasor-calculus](item-def-expander-prereq-phasor-calculus)). Cosine is even and sine is odd, as follows from the phasor identity $e^{-it}=\overline{e^{it}}$ and its real and imaginary parts in the same supplier.

[F3] For symmetric weights and an even twice continuously differentiable periodic pair potential $v$, the gradient and Hessian quadratic form are the finite sums stated in [prop-expander-prereq-pair-potential-calculus](item-prop-expander-prereq-pair-potential-calculus).

[F4] For a connected nonnegatively weighted support graph, the Laplacian quadratic form is the sum of weighted squared edge differences and its kernel consists of the constant functions ([prop-expander-prereq-laplacian-support-kernel](item-prop-expander-prereq-laplacian-support-kernel)).

[F5] Cosine is strictly decreasing on $[0,\pi]$ and $\cos(\pi/2)=0$ ([math:thm-sine-cosine-signs-monotonicity-and-ranges](https://alphabetamath.cc/item/thm-sine-cosine-signs-monotonicity-and-ranges), [math:thm-quarter-turn-values-and-shift-formulas](https://alphabetamath.cc/item/thm-quarter-turn-values-and-shift-formulas)).

[F6] The Cauchy–Schwarz inequality bounds the square of a finite sum by the number of terms times the sum of their squares ([math:thm-cauchy-schwarz-and-the-euclidean-norm](https://alphabetamath.cc/item/thm-cauchy-schwarz-and-the-euclidean-norm)). For a $C^2$ scalar field, the second-order Taylor formula has remainder $o(\|h\|^2)$ ([math:cor-second-order-taylor-expansion-with-the-hessian](https://alphabetamath.cc/item/cor-second-order-taylor-expansion-with-the-hessian)).

### Proof

**Given:** An integer $n\ge5$, the cycle and the configuration in the Statement.

**Goal:** Prove equilibrium, the Hessian identity and transverse positivity, and strict minimality modulo common rotation.

1.1 Set $\delta=2\pi/n$ and $v(t)=1-\cos t$. By [F2], $v$ is even and periodic, with $v'(t)=\sin t$ and $v''(t)=\cos t$; it is $C^2$ by those derivative formulas. Use weight one on each cycle edge and zero otherwise. Since $n\ge5$, the two neighbors of each vertex are distinct and the pair-potential expression in [F3] counts each edge once. At $\theta^*$ the two incident differences at vertex $j$ are congruent to $\delta$ and $-\delta$ modulo $2\pi$, including across the edge from $n-1$ to $0$. Thus [F2] and [F3] give $(\nabla U(\theta^*))_j=\sin\delta+\sin(-\delta)=0$. Therefore the negative-gradient vector field vanishes. [given, F2, F3, algebra]

1.2 Use the relative-coordinate section with vertex $0$ fixed. For a sufficiently small relative-coordinate displacement $h=(h_1,\ldots,h_{n-1})$, put $h_0=0$ and represent the nearby class by $\theta^*+h$. The descended potential in this chart is $C^2$ by [F1] and [F2]. For each $j$, telescoping along the path from $0$ to $j$ and [F6] give $h_j^2\le n\sum_{k=0}^{n-1}(h_{k+1}-h_k)^2$, with indices modulo $n$. Summing over $j$ yields $\|h\|^2\le n^2\sum_k(h_{k+1}-h_k)^2$. [F1, F2, F6, algebra]

2.1 At every edge, the cosine of the phase difference is $c=\cos\delta$. For every real $f$, [F3] gives $f^T\nabla^2U(\theta^*)f=c\sum_j(f_{j+1}-f_j)^2$. The cycle is connected because consecutive edges give a path between any two vertices; [F4] identifies the sum as $f^TLf$. Both matrices are symmetric, so equality of their quadratic forms for every $f$ implies equality of matrices by evaluating on coordinate vectors and their pairwise sums. Hence $\nabla^2U(\theta^*)=cL$. [F2, F3, F4, step 1.1, algebra]

3.1 Since $n\ge5$, $0<\delta<\pi/2$; [F5] therefore gives $c>0$. By [F4], the connected cycle Laplacian has nonnegative quadratic form and kernel consisting of constants. Consequently $f^T\nabla^2U(\theta^*)f>0$ for each nonzero $f\in\mathbf1^\perp$, since a constant vector with zero coordinate sum is zero. [F4, F5, step 2.1, algebra]

4.1 The first-order Taylor term vanishes by step 1.1. Combining [F6], steps 2.1 and 1.2 gives $U(\theta^*+h)-U(\theta^*)\ge c\|h\|^2/(2n^2)+o(\|h\|^2)$. Because $c>0$, the right side is positive for all sufficiently small nonzero $h$. The relative-coordinate homeomorphism in [F1] identifies these displacements with nearby distinct rotation classes, proving strict local minimality. The argument establishes no basin or measure assertion. [F1, F6, step 1.1, step 2.1, step 3.1, step 1.2, algebra] ∎



## Exact rational replay of the regular amplification constants

[Open item](item-lem-author-2e2d9953c21a-regular-numerical-replay) · level 2


### Statement

All decimals below are exact rationals. Set $\alpha=0.0816$, $a=2.4093$, $q=2.1274$, $h=3.168$, $t=3.326$, $u=\arcsin(0.3272)$, $c_i=a^i$ for $0\le i\le3$, and $c_{3+k}=a^3q^k$ for $k\ge0$. Set $\beta_i=\pi/2-iu$ for $0\le i\le3$, and $\beta_{i+1}=\beta_i-\arcsin(h/c_i)$ for $i\ge3$. The displayed lower bounds for $(\beta_1,\ldots,\beta_5)$ are $(1.237,0.904,0.570,0.342,0.235)$ and those for $(c_1,\ldots,c_5)$ are $(2.409,5.804,13.985,29.752,63.295)$. Every later angle exceeds $0.1356$, hence exceeds $0.132$ and $0.131$. In particular,

$$0.570-\arcsin(3.168/13.985)-\arcsin(3.168/(13.985\cdot2.1274))-\frac{3.326}{63.295(1-1/2.1274)}>0.1356.$$

The scalar parameter inequalities are $2(1+0.38)\alpha/(1-\alpha-0.23)<0.3272$, $1+0.23/(2\alpha)>a$, $0.38\alpha>0.031$, $2(1+2\alpha)/(1-\alpha-0.184)<h$, and $1+0.184/(2\alpha)>q$. The cap comparisons are $0.031\sin^2(0.570)>5\alpha^2/4$ and $\sin^2(0.131)>5\alpha^2/2$. Moreover, $4(600-1)/600^2<0.0816^2$. For $z=0.0068$ and for $z=0.006830635$, one has $32z(1+7z)\log((1+2z)/(2z))<(1-z)^2$; also $0.0068^2<4(85730-1)/85730^2<0.006830635^2$.

### Facts & Assumptions

**Given:** The exact rational constants and recurrences in the Statement. These are scalar inequalities; no graph or stability conclusion is assumed.

[F1] [lem-author-2e2d9953c21a-sine-enclosures](item-lem-author-2e2d9953c21a-sine-enclosures) gives rational sine enclosures. [lem-author-2e2d9953c21a-inverse-brackets](item-lem-author-2e2d9953c21a-inverse-brackets) turns endpoint sine comparisons into principal inverse-sine brackets.

[F2] [lem-author-2e2d9953c21a-logarithm-and-pi](item-lem-author-2e2d9953c21a-logarithm-and-pi) supplies logarithm and $\pi$ enclosures.

[F3] [lem-author-2e2d9953c21a-geometric-tail](item-lem-author-2e2d9953c21a-geometric-tail) bounds the entire remaining geometric inverse-sine tail.

### Proof

**Given:** The exact rational constants and recurrences in the Statement. These are scalar inequalities; no graph or stability conclusion is assumed.

**Goal:** Verify the stated numerical inequalities using the cited enclosures.

1.1 All interval endpoints below are exact rational numbers. If $s\in[l,u]$ and $r\in[v,w]$, adding endpoint inequalities gives $l+v\le s+r\le u+w$ and subtracting gives $l-w\le s-r\le u-v$. For an exact rational scalar $\lambda\ge0$, multiplication gives $\lambda l\le\lambda s\le\lambda u$; for $\lambda<0$, it gives $\lambda u\le\lambda s\le\lambda l$. If $0\le l\le s\le u$, then $l^2\le s^2\le u^2$, since $s^2-l^2=(s-l)(s+l)\ge0$ and $u^2-s^2=(u-s)(u+s)\ge0$. Induction on the finite number of these operations preserves containment, even when an intermediate value is reused. These are all the operations on uncertain quantities used below; divisions in the finite sums, error bounds and scalar constants are exact rational divisions with positive denominators. All resulting rational endpoint comparisons can therefore be checked by clearing positive denominators. [given, algebra, induction]

1.2 Exact multiplication gives $c_3=13.985327532357$, $c_4=29.7523857923362818$ and $c_5=63.29522553461620590132$; $c_1=2.4093$ and $c_2=5.80472649$. Each exceeds its stated lower bound. In particular $c_4\ge13.985q$ and $c_5\ge63.295$. Do not reset this recurrence at a rounded displayed entry: $13.985q=29.751689<29.752$ and $13.985q^2=63.2937431786<63.295$. The parameter inequalities in the Statement follow by clearing positive rational denominators; both $1-\alpha-0.23$ and $1-\alpha-0.184$ are positive, and $0.031<0.38\alpha<1/2$. [given, algebra]

2.1 Use $N=12$ in [F1] and [F2]. For inverse sines choose adjacent endpoints on the grid $10^{-12}\mathbb Z$, both in $[0,1]$, whose upper sine enclosure at the lower endpoint is below the input and whose lower sine enclosure at the upper endpoint is above it. All following endpoint inequalities are finite rational comparisons using the displayed formulas, so multiplication by their positive factorial and power denominators verifies them exactly. They give $3.141592653589<\pi<3.141592653590$, $0.228511966349<\arcsin(h/13.985)<0.228511966350$ and $0.106683602516<\arcsin(h/(13.985q))<0.106683602517$. For the recurrence, the same procedure gives $\beta_1\in[1.237457381343,1.237457381345]$, $\beta_2\in[0.904118435892,0.904118435895]$, $\beta_3\in[0.570779490441,0.570779490445]$, $\beta_4\in[0.342272970911,0.342272970916]$, and $\beta_5\in[0.235591876415,0.235591876421]$. Thus all five angular lower bounds hold. [given, F1, F2, step 1.1, algebra]

2.2 The sine bounds [F1] at $0.570$ and $0.131$ give $\sin^2(0.570)\in[0.291202748020,0.291202748021]$ and $\sin^2(0.131)\in[0.017063057702,0.017063057703]$. Comparing their lower endpoints to $5\alpha^2/4=0.0083232$ after multiplication by $0.031$, and to $5\alpha^2/2=0.0166464$, proves both cap comparisons. Clearing the positive denominator $600^2$ proves the degree-600 inequality. For integers $d\ge600$, $(d-1)/d^2$ decreases: its difference between successive integers has numerator $d^2-d-1>0$. Thus the same degree bound holds for all such $d$. [F1, step 1.1, algebra]

3.1 Monotonicity of inverse sine, step 1.2 and [F3] show that all angles from $\beta_5$ onward are bounded below by the displayed two-inverse-sine expression minus the infinite tail. Here $t/(63.295(1-1/q))=35378662/356793915$. Substitution of the upper inverse-sine bounds from step 2.1 gives an exact rational lower endpoint greater than $0.135647297245$; using the lower bounds gives an upper endpoint less than $0.135647297248$. The expression therefore exceeds $0.1356>0.132>0.131$. Earlier angles exceed $0.235$, so the same $0.1356$ lower bound applies to them as well. This bounds an infinite recurrence through a proved remainder, rather than a finite sample. [F1, F3, step 1.1, step 2.1, step 1.2, algebra]

4.1 For $z=0.0068$, [F2] with $N=12$ bounds the required logarithm by $[4.311193836264,4.311193836265]$. For $z=0.006830635$, it gives $[4.306759253085,4.306759253086]$. Substitute each upper endpoint in $32z(1+7z)\log((1+2z)/(2z))$ and clear positive denominators to obtain the two strict inequalities. Exact rational comparison gives $0.0068^2<4\cdot85729/85730^2<0.006830635^2$. The same decreasing-degree calculation as in step 2.2 extends the latter upper bound to every integer $d\ge85730$. This verifies that degree bound directly at the larger spectral parameter; it does not infer it from $0.0068$ alone. [F2, step 1.1, step 2.2, algebra] ∎


## Simple spinning graphs and cluster-constant equilibria

[Open item](item-def-author-4f905b3f6478-spinning) · level 2


### Definition

Let a weighted network mean a finite simple graph on an ordered nonempty vertex set $V$ with positive integer edge weights $w_{uv}$. Fix a positive integer $k\ge\max w_{uv}$, with maximum zero if there are no edges. Write $\mathbb Z_k=\mathbb Z/k$ for integers modulo $k$, with addition of residue classes; $i+r$ means $i+[r]_k$. Its spinning graph $S_k$ has vertex set $V\times\mathbb Z_k$. Each cluster $\{u\}\times\mathbb Z_k$ is a clique, meaning that every unordered pair of distinct vertices within it is an edge. For every edge with $u<v$, add the undirected edges $\{(u,i),(v,i+r)\}$ for $i\in\mathbb Z_k$ and integer offsets $0\le r<w_{uv}$. Fixing this orientation once is part of the construction; the reverse adjacency is the transpose relation. All edges have unit weight and there are no loops. For phases $\theta_u$ modulo $2\pi$, the cluster-constant lift is $\Theta_{u,i}=\theta_u$.

For either graph, set $w_{uv}=w_{vu}$ equal to its edge weight on edges and zero on nonedges and on the diagonal; in the spinning graph the edge weights are one. Indices in the following formulas run over the vertex set of the graph in question, and unordered-pair sums run over its edges. Its Kuramoto equation is $\dot\theta_u=\sum_vw_{uv}\sin(\theta_v-\theta_u)$ and its potential is $U(\theta)=\sum_{\{u,v\}}w_{uv}(1-\cos(\theta_u-\theta_v))$. An equilibrium has zero right-hand side at every vertex. At a phase configuration its Hessian has off-diagonal entries $-w_{uv}\cos(\theta_u-\theta_v)$ and diagonal entries the sums of the corresponding edge coefficients. The quadratic form is $\sum_{\{u,v\}}w_{uv}\cos(\theta_u-\theta_v)(x_u-x_v)^2$.

### Facts & Assumptions

[F1] Finite simple weighted networks and their adjacency conventions are supplied by [def-expander-prereq-loop-compatible-networks](item-def-expander-prereq-loop-compatible-networks).

[F2] For an even, twice continuously differentiable, $2\pi$-periodic real function and symmetric real weights, [prop-expander-prereq-pair-potential-calculus](item-prop-expander-prereq-pair-potential-calculus) supplies the gradient and Hessian formulas. We apply it to $v(t)=1-\cos t$ after verifying these hypotheses.

[F3] Residue classes and their representative-independent addition are supplied by [math:def-integers-modulo-n](https://alphabetamath.cc/item/def-integers-modulo-n) and [math:def-addition-and-multiplication-modulo-n](https://alphabetamath.cc/item/def-addition-and-multiplication-modulo-n). Since $k$ is positive, [math:thm-standard-representatives-modulo-n](https://alphabetamath.cc/item/thm-standard-representatives-modulo-n) gives exactly $k$ classes, uniquely represented by $0,\ldots,k-1$.

[F4] For real $t$, $\sin(-t)=-\sin t$ and $\cos(-t)=\cos t$ by [math:cor-trigonometric-parity-and-pythagorean-identity](https://alphabetamath.cc/item/cor-trigonometric-parity-and-pythagorean-identity). Both functions are $2\pi$-periodic by [math:thm-sine-cosine-zero-sets-and-fundamental-period](https://alphabetamath.cc/item/thm-sine-cosine-zero-sets-and-fundamental-period). They are differentiable with $(\sin t)'=\cos t$ and $(\cos t)'=-\sin t$, and $\sin0=0$, by [math:thm-sine-and-cosine-derivatives](https://alphabetamath.cc/item/thm-sine-and-cosine-derivatives).

[F5] Differentiability implies continuity, and differentiable real functions obey the sum and product rules, by [math:lem-derivative-algebra-and-chain-rules](https://alphabetamath.cc/item/lem-derivative-algebra-and-chain-rules). Constant functions have derivative zero directly from their difference quotients; the product rule therefore gives the scalar multiplication rule.

### Justification

**Given:** The finite weighted graph, its ordering and the positive integer $k$ in the Definition.

**Goal:** Verify simplicity, degree, and equilibrium lifting.

1.1 By [F3], each cluster is nonempty and has $k$ vertices. For fixed $i\in\mathbb Z_k$, equality $i+[r]_k=i+[s]_k$ implies $k\mid(r-s)$; for $0\le r,s<w_{uv}\le k$ this forces $r=s$. Thus distinct offsets give distinct neighbours on the forward side of each cross block. On the transpose side the neighbours are indexed by $j-[r]_k$ for fixed $j$, and the same divisibility argument gives exactly $w_{uv}$ distinct neighbours there too. The orientation is fixed once per base edge, preventing accidental union with a second, reverse offset convention. Within-cluster edges join all distinct pairs and are disjoint from cross edges. Thus the construction is finite and simple. Each vertex of cluster $u$ has $k-1+\sum_vw_{uv}$ neighbours. [F1, F3, given, construct, algebra]

1.2 By [F4], $v(t)=1-\cos t$ is even and $2\pi$-periodic. The derivative rules in [F5] and identities in [F4] give $v'(t)=\sin t$ and $v''(t)=\cos t$. Since sine and cosine are differentiable on $\mathbb R$ by [F4], they are continuous by [F5]. Thus $v$ is twice continuously differentiable and satisfies every function hypothesis of [F2]. With the symmetric zero-extended weights from the Definition, each unordered edge appears twice in the ordered-pair sum, so its half-sum potential is exactly $U$. The gradient formula in [F2] and sine oddness in [F4] give the negative-gradient equations in the Definition. Differentiating the gradient component using [F5] and [F4] gives the stated off-diagonal and diagonal Hessian entries; [F2]'s quadratic-form identity, with $v''=\cos$ and the same double counting of edges, gives the stated quadratic form. [F1, F2, F4, F5, given, algebra]

2.1 At the lifted phase, within-cluster sine terms vanish because $\sin0=0$ by [F4]. Every neighbour cluster $v$ supplies exactly $w_{uv}\sin(\theta_v-\theta_u)$ at each vertex in cluster $u$, by step 1.1. Thus the lifted right-hand side at each vertex of cluster $u$ equals the base right-hand side at $u$. Since each cluster is nonempty, the lifted configuration is an equilibrium exactly when the original one is. [F4, step 1.1, step 1.2, algebra] ∎

This gives an explicitly oriented version of Canale §II.A, p. 4, and the direct calculation of Proposition 1, p. 7. The local justification uses the declared network, residue-arithmetic, trigonometric and differentiation suppliers. It does not assert a blanket stability transfer for arbitrary $k$.

### Source notes

This gives an explicitly oriented version of Canale §II.A, p. 4, and the direct calculation of Proposition 1, p. 7. The local justification uses the declared network, residue-arithmetic, trigonometric and differentiation suppliers. It does not assert a blanket stability transfer for arbitrary $k$.


## A positive transverse Hessian gives an open nonsynchronous basin

[Open item](item-lem-author-4f905b3f6478-positive-transverse-basin) · level 2


### Statement

Assume countable choice. Let $U$ be a smooth real potential on a finite flat phase torus $T_V$, invariant under simultaneous rotations, and let $q$ be an equilibrium of its negative gradient flow. If its Hessian is positive on $\mathbf1^\perp$ and its rotation orbit contains no all-equal phase configuration, that orbit attracts a nonempty open set of initial phases. This set has positive normalized phase volume. Therefore the flow does not converge to the synchronous set for almost every initial phase. Positive transverse Hessian means $x^THx>0$ for every nonzero real $x$ with $\sum_vx_v=0$.

### Facts & Assumptions

[F1] Smooth negative gradient trajectories on the phase torus exist uniquely for all real times under countable choice, by [def-expander-prereq-gradient-trajectories](item-def-expander-prereq-gradient-trajectories) and [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice).

[F2] Rotation and relative phase conventions are those of [def-expander-prereq-rotation-reduction](item-def-expander-prereq-rotation-reduction).

[F3] Every nonempty open phase set has positive phase volume, and almost-everywhere assertions mean outside a phase-null set, by [def-expander-prereq-phase-volume](item-def-expander-prereq-phase-volume).

[F4] In angular Euclidean charts the Hessian is the matrix of second partial derivatives, and a critical point has zero gradient ([math:def-hessian-and-euclidean-critical-point](https://alphabetamath.cc/item/def-hessian-and-euclidean-critical-point)). Continuous second partial derivatives commute, so the Hessian of the smooth potential is symmetric at every chart point, without a local-minimum assumption ([math:thm-clairaut-schwarz-mixed-partials](https://alphabetamath.cc/item/thm-clairaut-schwarz-mixed-partials)).

[F5] A self-adjoint endomorphism of a finite-dimensional real inner product space has an orthonormal eigenbasis ([math:cor-real-spectral-theorem-for-self-adjoint-endomorphisms](https://alphabetamath.cc/item/cor-real-spectral-theorem-for-self-adjoint-endomorphisms)).

[F6] Continuous partial derivatives give total differentiability with the Jacobian as derivative ([math:thm-continuous-partial-derivatives-imply-total-differentiability](https://alphabetamath.cc/item/thm-continuous-partial-derivatives-imply-total-differentiability)); total derivatives obey the chain rule ([math:thm-chain-rule-for-total-derivatives](https://alphabetamath.cc/item/thm-chain-rule-for-total-derivatives)). Scalar sums, products, powers and compositions obey the usual derivative rules ([math:lem-derivative-algebra-and-chain-rules](https://alphabetamath.cc/item/lem-derivative-algebra-and-chain-rules)).

[F7] For a continuously differentiable scalar function on an open interval containing $[a,b]$, $f(b)-f(a)=\int_a^b f'(s)\,ds$ ([math:lem-fundamental-theorem-and-integration-by-parts](https://alphabetamath.cc/item/lem-fundamental-theorem-and-integration-by-parts)). Pointwise bounds on an integrable function bound its integral by the same constants times $b-a$ for $a<b$ ([math:thm-monotonicity-of-the-integral](https://alphabetamath.cc/item/thm-monotonicity-of-the-integral)).

[F8] The exponential is smooth with derivative itself ([math:thm-derivative-of-exponential](https://alphabetamath.cc/item/thm-derivative-of-exponential)), is positive with $e^{-x}=1/e^x$ ([math:cor-exponential-reciprocal-and-positivity](https://alphabetamath.cc/item/cor-exponential-reciprocal-and-positivity)), and tends to zero as its argument tends to negative infinity ([math:thm-exponential-limits-and-range](https://alphabetamath.cc/item/thm-exponential-limits-and-range)).

### Proof

**Given:** The torus, invariant potential and nonsynchronous equilibrium $q$ with a positive transverse Hessian.

**Goal:** Produce an open positive-volume set converging to nonsynchronous rotations of $q$.

1.1 Choose real representatives of $q$ in an angular chart and put $n=|V|$ and $E=\mathbf1^\perp$. Differentiating $U(\theta+c\mathbf1)=U(\theta)$ in $c$ and in the coordinates of $\theta$, using [F6], gives $\mathbf1^T\nabla U(\theta)=0$ and $\nabla U(\theta+c\mathbf1)=\nabla U(\theta)$. Differentiating the latter identity in $c$ gives $H\mathbf1=0$. By [F4], $H$ is symmetric, so $\mathbf1^THx=(H\mathbf1)^Tx=0$ for $x\in E$: its restriction to $E$ is a self-adjoint endomorphism. The nonsynchrony hypothesis excludes $n=1$, so $E$ has positive dimension. By [F5], choose an orthonormal eigenbasis of this restriction. Every eigenvalue is positive by the assumed positive quadratic form; let $m>0$ be their minimum. Expansion in this basis gives $x^THx\ge m\|x\|^2$ for $x\in E$. [given, F1, F2, F4, F5, F6, algebra]

2.1 Continuity of the Hessian gives $r>0$ such that for $\|z\|\le r$, all entries of $A(z)=\nabla^2U(q+z)-H$ have absolute value less than $m/(2n)$ and these points lie in the chosen chart. Indeed, $|x^TA(z)x|\le\max_{i,j}|A(z)_{ij}|(\sum_i|x_i|)^2\le n\max_{i,j}|A(z)_{ij}|\|x\|^2$; the last inequality follows by expanding $\sum_{i<j}(|x_i|-|x_j|)^2\ge0$. Thus $x^T\nabla^2U(q+z)x\ge(m/2)\|x\|^2$ for $x\in E$. For $y\in E$ with $\|y\|<r$, the scalar function $s\mapsto y^T\nabla U(q+sy)$ is continuously differentiable on an open interval containing $[0,1]$, by smoothness and [F6]. Its derivative is $y^T\nabla^2U(q+sy)y$, and its value at zero is zero because $q$ is an equilibrium. Applying both parts of [F7] yields $y^T\nabla U(q+y)=\int_0^1 y^T\nabla^2U(q+sy)y\,ds\ge(m/2)\|y\|^2$. [given, F4, F6, F7, step 1.1, algebra]

3.1 Shrink $r$ if necessary and choose $\delta>0$ so that the closed cylinder $q+c\mathbf1+y$, $|c|\le\delta$, $y\in E$, $\|y\|\le r$, lies inside the angular chart. A solution initially $q+c\mathbf1+y_0$ with $|c|<\delta$ and $\|y_0\|<r$ has constant mean coordinate $c$ and satisfies $\dot y=-\nabla U(q+y)$ by the rotation identities in step 1.1. As long as it stays in the ball, step 2.1 and [F6] give $d\|y\|^2/dt\le-m\|y\|^2$. By [F6] and [F8], $g(t)=e^{mt}\|y(t)\|^2$ has $g'(t)\le0$. On any such interval $[0,t]$, [F7] gives $g(t)-g(0)=\int_0^t g'(s)\,ds\le0$; hence $\|y(t)\|^2\le e^{-mt}\|y_0\|^2$. Since $e^{mt}$ has positive derivative and $e^0=1$ (the reciprocal identity at zero and positivity in [F8]), [F7] also gives $e^{mt}\ge1$ for $t\ge0$. Thus the estimate prevents a first exit from the ball by continuity. The closed cylinder stays inside the chart, and the complete flow in [F1] continues this estimate for all positive times. Finally [F8] gives $y(t)\to0$, so the trajectory converges to $R_cq$. [F1, F2, F6, F7, F8, step 1.1, step 2.1, algebra]

4.1 Allowing $c$ to range over $(-\delta,\delta)$ and $y_0$ over a smaller open ball in $E$ gives a nonempty open set in the angular chart: $\mathbb R\mathbf1\oplus E=\mathbb R^V$, with continuous inverse coordinates $c=n^{-1}\sum_v(\theta_v-q_v)$ and $y=\theta-q-c\mathbf1$. Step 3.1 makes each such solution converge to a rotation of $q$. No such limit is synchronous by hypothesis. The synchronous set is closed, being the zero fibre of the continuous relative-phase map in [F2]; an open metric ball about each nonsynchronous limit is therefore disjoint from that set. Convergence to this limit prevents the solution from approaching the synchronous set. By [F3] the open initial set has positive phase volume and cannot be contained in a phase-null exception set. This rules out almost-everywhere synchronous convergence. [F2, F3, step 3.1, construct] ∎

### Source notes

This locally proves the dynamical implication invoked in [Canale, Section II.B, p. 6](https://arxiv.org/pdf/2209.06362v3). The source supplies attribution for the Kuramoto case; the smooth-potential attraction argument here uses the declared mathematical suppliers. It establishes an open basin for the rotation orbit, rather than for one prescribed equilibrium point.


## Certificates for finite transcendental inequalities

[Open item](item-def-expander-prereq-certified-numerical-contract) · level 3


### Definition

A finite numerical certificate specifies rational input intervals, exact decimal constants as rationals, outward interval operations, and rigorous enclosures for each occurrence of $\sin$, $\arcsin$ and $\log$. A strict inequality is certified only when the resulting closed intervals are disjoint in the asserted direction. Sine is the smooth real sine function, inverse sine takes its principal values in $[-\pi/2,\pi/2]$, and $\log$ is the natural logarithm. The certificate records every denominator's nonvanishing and each inverse function's domain. For an infinite geometric tail, it uses an exact finite expression and a proved remainder bound; a printed decimal table alone is not a certificate. Rounded entries used as lower bounds do not replace exact recurrence values.

The admitted elementary certificates are rational sine sums and tails, principal-branch endpoint tests, range-reduced logarithm and Machin enclosures, and an infinite-tail bound. Their combination supplies a separate scalar replay at $\alpha=0.0816$, including every displayed lower bound and both cap comparisons; no graph-theoretic conclusion is part of this definition.

For storage, choose and record a dyadic floating-point format with precision $p\ge2$ and finite exponent limits $e_{\min}\le e_{\max}$. Convert every rational interval $[a,b]$ to $[\operatorname{rd}(a),\operatorname{ru}(b)]$, and every exact rational constant $c$ to $[\operatorname{rd}(c),\operatorname{ru}(c)]$. Use exact integer comparisons for this conversion and directed rounding after each endpoint calculation. Every stored interval must be finite. Overflow or a failed domain check supplies no successful certificate; refinement may use a different recorded format. An inconclusive endpoint test establishes no tested inequality, although a separately justified fallback enclosure may still be used. The finite expression graph is a directed acyclic graph whose shared nodes reuse the same exact intermediate value. Arithmetic nodes use the real addition, subtraction, multiplication, division away from zero, and square operations.

The following interval extensions apply at transcendental nodes to the entire stored predecessor interval $X=[l,u]$, including irrational admissible values inside it. All auxiliary endpoints below are exact rationals before outward conversion to storage. Sine point enclosures use an integer $N\ge0$ and the finite factorial sums and remainder $S_N(x)\pm R_N(x)$, only when $q_N(x)=x^2/((2N+4)(2N+5))<1$. At a sine node, set $m=(l+u)/2$ and $r=(u-l)/2$. If $[s_-,s_+]$ encloses $\sin m$ by that point rule, output the outward conversion of $[s_--r,s_++r]$. At a logarithm node require $l>0$. Obtain point enclosures $\log l\in[L_l,U_l]$ and $\log u\in[L_u,U_u]$ from the range-reduced rule with integer $N\ge1$, and output the outward conversion of $[L_l,U_u]$.

At an inverse-sine node require $-1\le l\le u\le1$. Record a Machin enclosure $0<P_-\le\pi\le P_+$. Start with the rational lower and upper bounds $A=-P_+/2$ and $B=P_+/2$. One may replace $A$ by a rational $a$ satisfying $|a|\le P_-/2$ if a valid sine point enclosure has upper endpoint at most $l$; one may replace $B$ by a rational $b$ satisfying $|b|\le P_-/2$ if a valid sine point enclosure has lower endpoint at least $u$. Output the outward conversion of $[A,B]$. The two optional tests are independent, apply to signed endpoints, and need not succeed. The initial bounds handle $l=-1$, $u=1$, and any inconclusive test. For nonnegative rational point inputs, the original principal-branch endpoint rule is also admitted under its stated hypotheses. No search termination or guaranteed separation at a fixed precision is asserted.

### Definition references

[math:lem-real-interval-arithmetic-preserves-enclosure](https://alphabetamath.cc/item/lem-real-interval-arithmetic-preserves-enclosure)

[math:def-principal-inverse-sine-and-cosine](https://alphabetamath.cc/item/def-principal-inverse-sine-and-cosine)

[math:thm-natural-logarithm-laws](https://alphabetamath.cc/item/thm-natural-logarithm-laws)

[math:thm-sine-and-cosine-derivatives](https://alphabetamath.cc/item/thm-sine-and-cosine-derivatives)

[lem-author-2e2d9953c21a-sine-enclosures](item-lem-author-2e2d9953c21a-sine-enclosures)

[lem-author-2e2d9953c21a-inverse-brackets](item-lem-author-2e2d9953c21a-inverse-brackets)

[lem-author-2e2d9953c21a-logarithm-and-pi](item-lem-author-2e2d9953c21a-logarithm-and-pi)

[lem-author-2e2d9953c21a-geometric-tail](item-lem-author-2e2d9953c21a-geometric-tail)

[lem-author-2e2d9953c21a-regular-numerical-replay](item-lem-author-2e2d9953c21a-regular-numerical-replay)

[math:def-intervals-rectangles-and-complex-balls](https://alphabetamath.cc/item/def-intervals-rectangles-and-complex-balls)

[math:def-outward-rounded-interval-and-ball-operations](https://alphabetamath.cc/item/def-outward-rounded-interval-and-ball-operations)

[math:def-dyadic-floating-point-format-and-directed-rounding](https://alphabetamath.cc/item/def-dyadic-floating-point-format-and-directed-rounding)

[math:lem-directed-dyadic-rounding-enclosure-and-error](https://alphabetamath.cc/item/lem-directed-dyadic-rounding-enclosure-and-error)

[math:cor-trigonometric-parity-and-pythagorean-identity](https://alphabetamath.cc/item/cor-trigonometric-parity-and-pythagorean-identity)

[math:cor-differentiable-implies-continuous](https://alphabetamath.cc/item/cor-differentiable-implies-continuous)

[math:lem-mean-value-theorem-on-closed-interval](https://alphabetamath.cc/item/lem-mean-value-theorem-on-closed-interval)

### Facts & Assumptions

**Given:** A finite expression directed acyclic graph, rational input intervals and exact rational constants, a recorded dyadic format, and the domain and enclosure checks in the Definition; or a geometric expression with its separately stated tail estimate.

[F1] [math:def-intervals-rectangles-and-complex-balls](https://alphabetamath.cc/item/def-intervals-rectangles-and-complex-balls) defines the stored intervals and expression graph. [math:def-outward-rounded-interval-and-ball-operations](https://alphabetamath.cc/item/def-outward-rounded-interval-and-ball-operations) specifies the arithmetic operations, and [math:lem-real-interval-arithmetic-preserves-enclosure](https://alphabetamath.cc/item/lem-real-interval-arithmetic-preserves-enclosure) encloses their finite results on finite dyadic predecessor intervals with valid operation domains.

[F2] [math:def-principal-inverse-sine-and-cosine](https://alphabetamath.cc/item/def-principal-inverse-sine-and-cosine) gives the increasing sine branch, its endpoint values, and its principal inverse on $[-1,1]$. [math:thm-natural-logarithm-laws](https://alphabetamath.cc/item/thm-natural-logarithm-laws) gives the increasing real logarithm on $(0,\infty)$. [math:thm-sine-and-cosine-derivatives](https://alphabetamath.cc/item/thm-sine-and-cosine-derivatives) gives the smooth sine convention and $\sin'=\cos$.

[F3] [lem-author-2e2d9953c21a-sine-enclosures](item-lem-author-2e2d9953c21a-sine-enclosures) encloses sine at any rational point with $N\ge0$ and $q_N<1$. [lem-author-2e2d9953c21a-inverse-brackets](item-lem-author-2e2d9953c21a-inverse-brackets) gives the stated nonnegative principal-branch endpoint test. [lem-author-2e2d9953c21a-logarithm-and-pi](item-lem-author-2e2d9953c21a-logarithm-and-pi) encloses logarithms at positive rational points and $\pi$ using $N\ge1$. [lem-author-2e2d9953c21a-geometric-tail](item-lem-author-2e2d9953c21a-geometric-tail) proves its inverse-sine series and tail bounds under its stated hypotheses.

[F4] [lem-author-2e2d9953c21a-regular-numerical-replay](item-lem-author-2e2d9953c21a-regular-numerical-replay) gives the exact rational regular-parameter replay independently of any graph claim.

[F5] [math:def-dyadic-floating-point-format-and-directed-rounding](https://alphabetamath.cc/item/def-dyadic-floating-point-format-and-directed-rounding) defines the recorded format and exact-rational conversion by integer comparisons. [math:lem-directed-dyadic-rounding-enclosure-and-error](https://alphabetamath.cc/item/lem-directed-dyadic-rounding-enclosure-and-error) gives $\operatorname{rd}(x)\le x\le\operatorname{ru}(x)$ for endpoints within its finite range, and explicitly reports overflow otherwise.

[F6] [math:cor-trigonometric-parity-and-pythagorean-identity](https://alphabetamath.cc/item/cor-trigonometric-parity-and-pythagorean-identity) gives $|\cos x|\le1$ for every real $x$.

[F7] [math:cor-differentiable-implies-continuous](https://alphabetamath.cc/item/cor-differentiable-implies-continuous) makes the everywhere differentiable sine continuous. [math:lem-mean-value-theorem-on-closed-interval](https://alphabetamath.cc/item/lem-mean-value-theorem-on-closed-interval) applies to a function continuous on a closed interval and differentiable in its interior.

### Justification

1.1 For rational $a\le b$ within the recorded format's finite range, [F5] gives $\operatorname{rd}(a)\le a\le b\le\operatorname{ru}(b)$. Thus outward conversion contains the whole rational-endpoint input set, not only its endpoints. The same argument with $a=b=c$ encloses an exact rational constant, and applies after every auxiliary rational enclosure. Each successful conversion returns the finite dyadic intervals required by [F1]. Overflow and all invalid operation domains are excluded from a successful certificate. [given, F1, F5, algebra]

2.1 For any real $x,m$, apply [F7] to sine on the interval with endpoints $x,m$ when they differ. It is continuous on that closed interval by [F2] and [F7], differentiable in the interior by [F2], and its derivative has absolute value at most $1$ by [F6]. The mean value identity therefore gives $|\sin x-\sin m|\le|x-m|$; when $x=m$ the same inequality is equality. For $x\in[l,u]$ this gives $|\sin x-\sin m|\le r$, so $s_--r\le\sin x\le s_++r$. Here $m$ is rational, the point enclosure is valid by [F3] with its checked $q_N(m)<1$, and the output conversion preserves containment by step 1.1. This proves the sine extension on every finite stored interval without a monotonicity assumption on sine there. [given, F2, F3, F6, F7, step 1.1, algebra]

2.2 At a logarithm node, every $x\in[l,u]$ is positive because $l>0$. Its endpoints are rational, so [F3] supplies the two point enclosures with their range-reduction and $N\ge1$ hypotheses. Monotonicity in [F2] gives $L_l\le\log l\le\log x\le\log u\le U_u$. Step 1.1 then proves that the stored output encloses $\log x$ for every such $x$, including irrational ones. [given, F2, F3, step 1.1]

2.3 On $[-1,1]$ the inverse in [F2] is increasing: an inequality between two inverse values in the opposite direction would, by strict increase of sine on the branch, reverse the inequality between their inputs. Thus $\arcsin l\le\arcsin x\le\arcsin u$ for all $x\in[l,u]$. The initial bounds enclose the whole branch because $P_+\ge\pi$. If the optional lower test succeeds, $|a|\le P_-/2\le\pi/2$ puts $a$ on the branch, and [F3] gives $\sin a\le l=\sin(\arcsin l)$; strict increase gives $a\le\arcsin l$. The upper test similarly gives $\sin b\ge u=\sin(\arcsin u)$ and $b\ge\arcsin u$. These arguments use rational point sine enclosures valid for either sign, rather than applying the nonnegative-input supplier outside its hypotheses. Hence $A\le\arcsin x\le B$ whether either test succeeds or not, including inputs $-1$ and $1$. The separately admitted nonnegative point rule is exactly [F3]'s inverse-bracket rule under its own hypotheses. Step 1.1 preserves all these enclosures on storage conversion. [given, F2, F3, step 1.1, algebra]

3.1 Traverse the finite acyclic graph in dependency order. Each exact input or constant belongs to its stored interval by step 1.1. If the exact predecessor values belong to their computed intervals, an arithmetic node encloses its exact output by [F1], and a transcendental node does so by steps 2.1, 2.2 or 2.3 with its checked domain. Induction reaches every root for each admissible assignment; shared nodes cause no change because the same exact value is used at every occurrence. If the entire left root interval lies strictly below the right root interval, their exact values obey that strict inequality. Overlap makes no strict-comparison claim. For an infinite geometric expression, add its separately proved omitted-tail interval before the endpoint comparison; [F3] supplies such an interval for its inverse-sine tail under its stated hypotheses. This imports no arbitrary infinite sum into a finite expression graph. [given, F1, F3, step 1.1, step 2.1, step 2.2, step 2.3, induction]

4.1 In particular [F4] proves that $0.570-\arcsin(3.168/13.985)-\arcsin(3.168/(13.985\cdot2.1274))-3.326/(63.295(1-1/2.1274))>0.1356>0.131$. Its recurrence retains $c_3=(2.4093)^3$ before rounding, and its cap checks use the exact $5(0.0816)^2/4=0.0083232$. This is a completed rational certificate for the scalar assertions. Each consumer must still establish the hypotheses of its graph-theoretic or asymptotic application. [F4, step 3.1] ∎


## An explicit eight-phase weighted stability certificate

[Open item](item-lem-author-4f905b3f6478-eight-phase-certificate) · level 3


### Statement

Use vertices $0,\ldots,7$, with indices reduced modulo eight, and four disjoint edge sets $E_a=\{\{0,1\},\{2,3\},\{4,5\},\{6,7\}\}$, $E_c=\{\{1,2\},\{3,4\},\{5,6\},\{7,0\}\}$, $E_d=\{\{0,5\},\{1,4\},\{2,7\},\{3,6\}\}$, and $E_b=\{\{j,j+2\}:0\le j<8\}$. Give them weights $a,c,d,b$, respectively, where $a,b,c,d$ are positive integers, $a>d$ and $c^2>2ad$. Let $\alpha\in(0,\pi/2)$ satisfy $\tan\alpha=c/(a-d)$, and put $\theta_{2r}=r\pi/2$, $\theta_{2r+1}=r\pi/2+\alpha$ for $0\le r<4$. This is a nonsynchronous equilibrium. Its potential Hessian is positive on $\mathbf1^\perp=\{x:\sum_jx_j=0\}$, and its kernel is exactly the constant vectors.

### Facts & Assumptions

[F1] The weighted graph, potential and Hessian conventions are those of [def-author-4f905b3f6478-spinning](item-def-author-4f905b3f6478-spinning).

[F2] Real symmetric matrices have an orthonormal eigenbasis by [math:cor-real-spectral-theorem-for-self-adjoint-endomorphisms](https://alphabetamath.cc/item/cor-real-spectral-theorem-for-self-adjoint-endomorphisms). In that basis their quadratic forms are the eigenvalue-weighted sums of squared coordinates, by orthonormality, as also computed in [prop-expander-prereq-selfadjoint-order-and-norm](item-prop-expander-prereq-selfadjoint-order-and-norm) (Proof step 1.1).

[F3] The unit-phasor, phase-difference and conjugation identities in [def-expander-prereq-phasor-calculus](item-def-expander-prereq-phasor-calculus) give sine and cosine addition identities by taking real and imaginary parts. For every real $x$, the identities $\sin(x+\pi/2)=\cos x$, $\cos(x+\pi/2)=-\sin x$, $\sin(\pi/2)=1$ and $\cos(\pi/2)=0$ are supplied by [math:thm-quarter-turn-values-and-shift-formulas](https://alphabetamath.cc/item/thm-quarter-turn-values-and-shift-formulas). Cosine is strictly decreasing on $[0,\pi]$ by [prop-expander-prereq-ordered-angle-inequalities](item-prop-expander-prereq-ordered-angle-inequalities), so $\cos\alpha>\cos(\pi/2)=0$ for $0<\alpha<\pi/2$. In this interval $\tan\alpha=\sin\alpha/\cos\alpha$.

### Proof

**Given:** The graph, parameters and phases in the Statement.

**Goal:** Verify equilibrium and strict transverse positivity.

1.1 Every vertex has one incident edge of each of types $a,c,d$ and two of type $b$. At an even vertex the sine sum is $a\sin\alpha-c\cos\alpha-d\sin\alpha$; at an odd vertex it is its negative. The two $b$ edges have differences $\pi/2$ and $-\pi/2$ and cancel. Since $(a-d)\sin\alpha=c\cos\alpha$, these sums vanish. Vertices $0$ and $2$ differ by $\pi/2$, proving nonsynchrony. [given, F1, F3, algebra]

2.1 Put $A=a\cos\alpha$, $C=c\sin\alpha$, $D=d\cos\alpha$ and $h=A+C-D$. The Hessian edge coefficients are $A,C,-D,0$ on the four types $a,c,d,b$. Pair vertices as $(2r,2r+1)$ with $r\in\mathbb Z_4$. For each $z\in\{1,-1,i,-i\}$ the two-dimensional complex subspace with even coordinates $uz^r$ and odd coordinates $vz^r$ is invariant. Substitution into the Hessian gives the Hermitian block with diagonal entries $h$ and off-diagonal entries $-(A+Cz^{-1}-Dz^2)$ and its conjugate. These four subspaces span the whole complex vertex space: the four sequences $z^r$ are pairwise orthogonal since each nontrivial fourth root has geometric sum zero. Each block therefore has eigenvalues $h\pm|A+Cz^{-1}-Dz^2|$. [F1, F2, F3, step 1.1, algebra]

3.1 For $z=1$, the eigenvalues are $0,2h$; for $z=-1$, they are $2C,2(A-D)$; for $z=\pm i$, they are $h\pm\sqrt{(A+D)^2+C^2}$. Here $A-D=(a-d)\cos\alpha>0$, $C=c^2\cos\alpha/(a-d)>0$ and $h>0$. Moreover $h^2-((A+D)^2+C^2)=2C(A-D)-4AD=2\cos^2\alpha(c^2-2ad)>0$. Thus all eigenvalues except the single zero are strictly positive. The zero vector mode has equal coordinates in both components and corresponds to constants; [F2] now gives the claimed positivity on the real subspace $\mathbf1^\perp$. [given, F2, F3, step 2.1, algebra] ∎

### Source notes

The cyclic two-component calculation is a concise local version of Canale §V, Lemma 1, pp. 12–14 and its displayed scaled Hessian on p. 14. We specify all edges explicitly rather than repeat the overlapping printed edge sets on p. 11, and use $\tan\alpha=c/(a-d)$, the equation derived on p. 12, rather than its following printed arctangent denominator $a-c$. In this numbering the nonzero signed off-diagonal entries agree with the p. 14 matrix. The proof above verifies the chosen graph directly; its validity does not depend on assigning a unique intended meaning to those misprints.


## Transverse positivity for the special spinning family

[Open item](item-lem-author-4f905b3f6478-spinning-transverse-certificate) · level 4


### Statement

For an integer $k\ge3$, put $d_k=\lceil k/2\rceil-1$, and use the eight-vertex weighted graph and equilibrium of the eight-phase certificate with $a=b=c=k$ and $d=d_k$. Form its simple spinning graph using the fixed-order convention, and lift its equilibrium. The lifted Hessian is positive on the orthogonal complement of the global constant vector. In particular its only zero eigenvalue comes from simultaneous phase rotation.

### Facts & Assumptions

[F1] The construction and Hessian are given by [def-author-4f905b3f6478-spinning](item-def-author-4f905b3f6478-spinning).

[F2] The weighted equilibrium and its positive Hessian on the complement of constants are given by [lem-author-4f905b3f6478-eight-phase-certificate](item-lem-author-4f905b3f6478-eight-phase-certificate) whenever its parameter inequalities hold.

[F3] Use the self-adjoint decomposition and quadratic-form convention of [prop-expander-prereq-selfadjoint-order-and-norm](item-prop-expander-prereq-selfadjoint-order-and-norm).

### Proof

**Given:** An integer $k\ge3$, $d=d_k$, and the construction in the Statement.

**Goal:** Establish the complete lifted stability certificate without a large-$k$ weight hypothesis.

1.1 The integer $d$ satisfies $1\le d<k/2$; also $k^2>2kd$. Thus the weighted hypotheses in [F2] hold. The subspace $P$ of vectors constant on each cluster is invariant under the lifted Hessian: clique terms vanish, and each cross block has constant row sum equal to its weight, so the induced action is exactly the weighted Hessian. The lifted Hessian is real symmetric, hence $W=P^\perp$, the subspace with zero sum in every cluster, is invariant too. These spaces are orthogonal and exhaust all vectors. [given, F1, F2, F3, algebra]

2.1 Write $\alpha$ for the phase parameter. On $W$ each clique contributes $kI$. The $a$ and $c$ blocks are complete bipartite graphs because their weights equal $k$; their cross actions vanish on cluster-zero sums, leaving the diagonal contribution $k\cos\alpha+k\sin\alpha$. The $b$ coefficients vanish because their phase differences are $\pi/2$. The $d$ blocks have signed coefficient $-\cos\alpha$ and each vertex has $d$ such neighbours. Let $B$ denote the unsigned adjacency matrix of just these blocks. Thus the restriction is $H|_W=(k+k\cos\alpha+k\sin\alpha-d\cos\alpha)I+\cos\alpha B|_W$. The symmetry of $B$ and $2|x_ux_v|\le x_u^2+x_v^2$ give $|x^TBx|\le d\|x\|^2$ by summing over its edges. [F1, step 1.1, algebra]

3.1 Consequently $x^THx\ge[k+k\sin\alpha+(k-2d)\cos\alpha]\|x\|^2>0$ for nonzero $x\in W$. On $P$, [F2] gives positivity except for the global constant mode. The orthogonal invariant splitting in step 1.1 eliminates cross terms, proving positivity on the full complement of constants and showing that there are no other zero modes. [F2, F3, step 1.1, step 2.1, algebra] ∎

### Source notes

This follows the invariant-subspace method of Canale Proposition 2, pp. 8–10, specialized as in Theorem 2, p. 15. The quadratic estimate replaces its maximal-coordinate estimate. No use is made of Proposition 2's sufficient general hypothesis $k>2w(G)$, which this family does not satisfy.


## A simple nonsynchronizing family approaching eleven sixteenths

[Open item](item-prop-author-4f905b3f6478-critical-density-family) · level 5


### Statement

Assume countable choice. For every integer $k\ge3$, take the explicit eight-vertex weighted graph of the eight-phase certificate with $a=b=c=k$ and $d=\lceil k/2\rceil-1$, and form its spinning graph $F_k$. It is a simple unweighted graph with $8k$ vertices and common degree $5k+\lceil k/2\rceil-2$. It has a nonsynchronous equilibrium whose Hessian is positive transverse to simultaneous rotation, and is not globally synchronizing, where global synchronization means convergence to all-equal phases for almost every initial phase. Its loop-free minimum-degree density is

$$\mu_k=\frac{5k+\lceil k/2\rceil-2}{8k-1}<\frac{11}{16},\qquad\lim_{k\to\infty}\mu_k=\frac{11}{16}.$$

### Facts & Assumptions

[F1] Use the network and spinning definitions of [def-expander-prereq-loop-compatible-networks](item-def-expander-prereq-loop-compatible-networks) and [def-author-4f905b3f6478-spinning](item-def-author-4f905b3f6478-spinning).

[F2] The explicit weighted equilibrium is given by [lem-author-4f905b3f6478-eight-phase-certificate](item-lem-author-4f905b3f6478-eight-phase-certificate), and its lifted strict transverse stability by [lem-author-4f905b3f6478-spinning-transverse-certificate](item-lem-author-4f905b3f6478-spinning-transverse-certificate).

[F3] Under [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice), positive transverse stability of a nonsynchronous equilibrium obstructs almost-everywhere synchronous convergence, by [lem-author-4f905b3f6478-positive-transverse-basin](item-lem-author-4f905b3f6478-positive-transverse-basin), with the phase measure of [def-expander-prereq-phase-volume](item-def-expander-prereq-phase-volume).

### Proof

**Given:** An integer $k\ge3$ and the construction in the Statement.

**Goal:** Establish size, exact density and the nonsynchronization certificate.

1.1 Each base vertex has weighted degree $a+2b+c+d=4k+d$. The spinning construction has eight clusters of $k$ vertices, and [F1] gives degree $k-1+4k+d=5k+\lceil k/2\rceil-2$. Its simplicity and unit edge weights are part of the justified construction. Therefore division by the number $8k-1$ of other vertices gives the displayed loop-free density. [F1, given, algebra]

2.1 By [F2] the cluster-constant equilibrium is nonsynchronous and its Hessian is positive on the complement of global constants. The potential is a finite sum of smooth functions of phase differences and is therefore smooth and rotation invariant. Apply [F3] to obtain an open set of positive phase volume converging to nonsynchronous rotations. Thus $F_k$ is not globally synchronizing. [F1, F2, F3, step 1.1]

3.1 For even $k$, $11(8k-1)-16(5k+k/2-2)=21$; for odd $k$ it equals $13$. Both are positive, proving the strict upper inequality. Since $\lceil k/2\rceil/k\to1/2$, division of numerator and denominator by $k$ proves the limit $11/16$. Thus the approach is from below under the loop-free density convention as well as under the source's degree-over-order convention. [step 1.1, algebra] ∎

### Source notes

The parameters and special stability argument follow Canale Theorem 2, p. 15. The explicit base edge convention and local Fourier certificate are stated in the earlier helpers. We use degree divided by $8k-1$, required by the loop-free strong-density definition on Canale p. 4; the displayed calculations on pp. 14–15 instead divide by $8k$. Both tend to $11/16$, so this correction preserves the reported limiting bound.


## Independent inputs for the critical-density bounds

[Open item](item-rem-expander-prereq-critical-density-background) · level 6


### Statement

The independent sources establish an upper critical-density bound $3/4$ for homogeneous attractive unit-coupling networks, and Canale constructs nonsynchronizing graph families approaching density $11/16=0.6875$ from the stated side. The lower example uses positive stability transverse to rotation; its graph construction is not a consequence of expansion alone.

### Facts & Assumptions

[F1] We assume [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice). A graph here has a nonempty finite vertex set $V$, symmetric binary adjacency $A=(A_{xy})$, and possible self-loops, counted once in the degree $d(x)=\sum_y A_{xy}$, as in [def-expander-prereq-loop-compatible-networks](item-def-expander-prereq-loop-compatible-networks). Put $n=|V|$ and $d_{\min}=\min_x d(x)$. For a loop-free graph with $n\ge2$, write $\delta=d_{\min}$ and $\mu=\delta/(n-1)$. The rotating-frame system and its trajectories are specified in External input. Global synchronization means convergence to an all-equal phase state for every initial phase outside a phase-null set, with the normalized measure of [def-expander-prereq-phase-volume](item-def-expander-prereq-phase-volume).

[F2] The exact nonsynchronizing family, its sequence of loop-free densities and its strict transverse stability certificate are supplied by [prop-author-4f905b3f6478-critical-density-family](item-prop-author-4f905b3f6478-critical-density-family). In particular, failure of global synchronization is part of that proposition's statement.

[F3] The independent Kassabov–Strogatz–Townsend result specified in External input supplies global synchronization when $\widetilde\mu>3/4$, with the model, loop and measure conventions in [F1].

[F4] To specify the threshold used here, let $T$ be the set of real numbers $a$ with the following property: for every real $\mu>a$ there is an integer $N=N(\mu)\ge2$ such that every graph in [F1] on $n\ge N$ vertices with $d_{\min}\ge\mu(n-1)$ globally synchronizes. The cutoff depends on $\mu$, not on the graph. The critical connectivity threshold $\mu_c$ is the smallest member of $T$; its existence is established below. This definition permits loops, and uses an eventual cutoff in graph order.

[F5] Every nonempty set of real numbers bounded above has a supremum ([math:thm-dedekind-complete](https://alphabetamath.cc/item/thm-dedekind-complete)).

### External input

Use the independent source's rotating-frame homogeneous attractive unit-coupling system on $T_V=\mathbb R^V/(2\pi\mathbb Z)^V$:

$$\dot\theta_x=-\sum_{y\in V}A_{xy}\sin(\theta_x-\theta_y),\qquad x\in V.$$

Here a forward trajectory from $u\in T_V$ is a curve $\theta^u:[0,\infty)\to T_V$ with $\theta^u(0)=u$, differentiable in local real angular lifts and satisfying the displayed equation in those lifts. The equation is Eq. (1) of Kassabov–Strogatz–Townsend, Section I, p. 1, with the sine arguments reversed and the corresponding minus sign. Its phases are already in the rotating frame of the common intrinsic frequency. Global synchronization is point convergence of these trajectories to an all-equal phase state, which may depend on $u$, outside a set of initial phases of Lebesgue measure zero. The phase-null convention in [F1] is the same convention after normalizing the finite phase volume.

Import the following theorem for this system: with symmetric binary adjacency, a loop at every vertex and $\widetilde\mu>3/4$, the network globally synchronizes. The source's Theorem 5 states uniqueness of the all-in-phase stable equilibrium up to simultaneous rotation, and the paragraph immediately following its proof gives the global-synchronization conclusion; that full implication is imported. Section II, Eq. (2), gives $\widetilde\mu=(\delta+1)/n$ after adding loops to a loop-free graph of minimum degree $\delta$. A loop term is zero because $\sin(\theta_x-\theta_x)=0$, so adding or deleting loops changes neither the equation nor its trajectories. This is an external theorem input, not a local reconstruction of its global-flow proof. Its strict inequality concerns $\widetilde\mu$, not a critical equality case.

### Proof

**Given:** The graph, dynamics, phase-volume and threshold conventions in [F1], [F3] and [F4], the family in [F2], and completeness in [F5].

**Goal:** Establish the graphwise upper bound and $11/16\le\mu_c\le3/4$ for the specified threshold.

1.1 For a loop-free graph on $n\ge2$ vertices with $\mu\ge3/4$, adding a loop at every vertex gives $\widetilde\mu=(\mu(n-1)+1)/n\ge3/4+1/(4n)>3/4$. The imported theorem supplies global synchronization, and loop invariance transfers it to the original graph. Thus every simple loop-free graph with $\delta\ge3(n-1)/4$ globally synchronizes. The one-vertex graph is already synchronous. [F1, F3, algebra]

1.2 By [F2], for every integer $k\ge3$ there is a simple graph on $8k$ vertices of density $\mu_k=(5k+\lceil k/2\rceil-2)/(8k-1)<11/16$, with a nonsynchronous equilibrium having positive transverse Hessian, and the graph fails global synchronization. These densities tend to $11/16$ from below. Given any $a<11/16$, choose a real $\mu$ with $a<\mu<11/16$. For every sufficiently large $k$, $\mu_k>\mu$, and the orders $8k$ are unbounded. Thus for every integer cutoff $N$ there is a nonsynchronizing member of this family with $8k\ge N$ and minimum degree greater than $\mu(8k-1)$. This contradicts the property required for $a\in T$, so $a\notin T$. This certificate uses the explicit weighted precursor and its spinning construction, not expansion alone. [F1, F2, F4, algebra]

2.1 Fix any real $\mu>3/4$ and choose an integer $N\ge2$ with $(\mu-3/4)(N-1)\ge1$. If a graph on $n\ge N$ vertices satisfies $d_{\min}\ge\mu(n-1)$, deleting its loops decreases each degree by at most one. The resulting simple graph has minimum degree at least $\mu(n-1)-1\ge3(n-1)/4$, so step 1.1 gives global synchronization. Its trajectories and those of the original graph coincide. Consequently $3/4\in T$. [F1, F3, F4, step 1.1, algebra]

3.1 Step 2.1 makes $T$ nonempty, while step 1.2 shows that every member of $T$ is at least $11/16$. Hence $\{-a:a\in T\}$ is nonempty and bounded above, and [F5] supplies its supremum $r$. Put $s=-r$. Then $s\le a$ for every $a\in T$; and for each $\mu>s$ there is $a\in T$ with $a<\mu$, since otherwise $-\mu<r$ would be an upper bound for all $-a$, contradicting leastness of $r$. Apply the defining property of this $a$ at the parameter $\mu$ to obtain the cutoff required for $s\in T$. Thus $s$ is the smallest member of $T$, proving existence of $\mu_c=s$ in [F4]. Steps 2.1 and 1.2 now give $11/16\le\mu_c\le3/4$. [F4, F5, step 2.1, step 1.2, algebra] ∎

### Source notes

The lower construction is attributed to Canale, Section V, Theorem 2, printed p. 15. Its explicit edge and phase conventions and special transverse-stability argument are supplied by [F2]. Canale defines strong density as degree divided by order minus one on p. 4, whereas the displayed finite density calculations on pp. 14–15 divide by $8k$. The local family uses $8k-1$ and still approaches $11/16$ from below. No general weighted-network stability-transfer theorem is used. The upper global-synchronization result is the precisely limited independent input above; the threshold argument is local. The article under study supplies no premise for this prerequisite.
