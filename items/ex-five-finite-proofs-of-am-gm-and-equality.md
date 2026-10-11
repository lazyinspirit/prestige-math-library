---
id: ex-five-finite-proofs-of-am-gm-and-equality
kind: example
title: "Five finite AM-GM proofs, with the same sharp equality case"
status: draft
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-integer-power, lem-power-laws, lem-power-monotone, def-finite-sum, lem-finite-sum-laws, thm-induction-principle, thm-recursion, def-ordered-field, lem-of-add-order, lem-of-sign-rules, lem-of-square-positive, lem-of-zero-mult, lem-of-naturals-positive, lem-of-q-embeds, lem-of-inverse-positive, def-nat-order, thm-nat-linear-order, lem-nat-order-add-compatible, lem-nat-discrete, thm-am-gm, lem-bernoulli-inequality, thm-nth-roots-exist, prop-of-multiply-inequalities, lem-of-inverse-unique, lem-nat-add-associative, lem-nat-add-commutative]
justified_by: []
aliases: []
landmark: false
dependency_level: 5
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-11
sources:
  scraped: []
  references:
    - title: "MIT OpenCourseWare, 18.100A Fall 2020, Recitation 01"
      url: "https://ocw.mit.edu/courses/18-100a-real-analysis-fall-2020/mit18_100af20_rec1.pdf"
      locator: "Complete four-page handout; pp. 1-2, two-term base case, doubling and mean-padding AM-GM proof. The extra finite proof routes are owner-derived arguments, not claims that this handout contains them."
---

## Example

For a natural $n \ge 1$ and nonnegative reals $a_0, \dots, a_{n-1}$, put
$A = \Big(\sum_{k<n} a_k\Big)/n$ and $G = \Big(\prod_{k<n} a_k\Big)^{1/n}$,
using the unique nonnegative root ([[thm-nth-roots-exist]]). Five finite routes
verify

$$\prod_{k<n} a_k \le A^{n}, \qquad \text{equivalently} \qquad G \le A,$$

with equality exactly when every entry is the same. They are Cauchy's
forward-backward induction, ordinary induction by sum-preserving replacement,
ordinary induction by product-preserving replacement, ordinary induction from
the independently proved integer Bernoulli inequality, and binary averaging
with geometric-mean padding. The last route stops after one padding argument,
rather than the backward descent used by the first. No route invokes a
derivative, logarithm, exponential, convergence or an unproved optimization
theorem.

## Facts & Assumptions

**Given:** A natural $n \ge 1$ and reals $a_0, \dots, a_{n-1} \ge 0$, with $A := \big(\sum_{k<n} a_k\big)/n$ and $G := \big(\prod_{k<n} a_k\big)^{1/n}$; sums and products are those of [[def-finite-sum]].

[L1] Laws of finite sums and products ([[def-finite-sum]], [[lem-finite-sum-laws]]): the recursion clauses, splitting at any index, additivity, scaling, the constant sum, monotonicity, and the fact that a sum of nonnegative terms is $0$ only if every term is $0$; a product with a zero factor is $0$ ([[lem-of-zero-mult]]). The constant product is $\prod_{k<m}c = c^{m}$: at $m = 0$ both sides are $1$, and both successor clauses multiply by $c$, so induction using [L2] and [L9] proves it. Swapping any two entries leaves a sum or product unchanged: split before and after the two positions, and commute the singled-out entries past the intervening block using the commutative field operations ([[def-ordered-field]]). Two such swaps can place any chosen pair at the last two positions, licensing the replacements and deletions below.

[L2] Powers ([[def-integer-power]], [[lem-power-laws]], [[lem-power-monotone]]): $x^{0} = 1$ and $x^{j+1} = x^{j}x$; $a^{m+n} = a^{m}a^{n}$, $(a^{m})^{n} = a^{mn}$, $(ab)^{n} = a^{n}b^{n}$ for naturals; $x \ge 0$ implies $x^{j} \ge 0$ with $x^{j} > 0$ when $x > 0$; and $x \mapsto x^{j}$ is strictly increasing, hence injective, on the nonnegatives for $j \ge 1$.

[L3] Roots ([[thm-nth-roots-exist]]): every $c \ge 0$ has a unique $c^{1/n} \ge 0$ with $\big(c^{1/n}\big)^{n} = c$, positive when $c > 0$; in particular $c^{1/1} = c$ and $0^{1/n} = 0$ for $n \ge 1$.

[L4] Published AM-GM ([[thm-am-gm]]): for every natural $n \ge 1$ and nonnegative entries, $\prod_{k<n} a_k \le A^{n}$, equivalently $G \le A$, with equality exactly when all entries are equal; its proof is Cauchy's forward-backward induction.

[L5] Bernoulli's inequality ([[lem-bernoulli-inequality]]): $(1+h)^{m} \ge 1 + mh$ for $h \ge -1$ and natural $m$, with equality exactly when $m \le 1$ or $h = 0$.

[L6] Squares and signs ([[lem-of-square-positive]], [[lem-of-zero-mult]], [[lem-of-sign-rules]]): $u^{2} > 0$ for $u \ne 0$ and $0^{2} = 0$, so $u^{2} \ge 0$ with equality only at $u = 0$; a product of positive reals is positive and a product of nonnegatives is nonnegative; and $x < y$ with $c < 0$ gives $yc < xc$.

[L7] Order arithmetic ([[def-ordered-field]], [[lem-of-add-order]]): the order is total and transitive, adding constants preserves it, and strict inequalities may be added.

[L8] Multiplying inequalities of nonnegatives ([[prop-of-multiply-inequalities]]): $0 \le x \le y$ and $0 \le u \le v$ give $xu \le yv$, and the strict form holds when both inequalities are strict and all four elements are positive.

[L9] Induction and recursion ([[thm-induction-principle]], [[thm-recursion]]): a property holding at $0$ and inherited by successors holds at every natural, and recursion defines functions on $\mathbb{N}$.

[L10] Arithmetic of naturals ([[def-nat-order]], [[thm-nat-linear-order]], [[lem-nat-order-add-compatible]], [[lem-nat-discrete]], [[lem-nat-add-associative]], [[lem-nat-add-commutative]]): $\le$ is a linear order compatible with addition, $m < n$ holds exactly when $m+1 \le n$, and addition is associative and commutative.

[L11] Embedding and inverses ([[lem-of-naturals-positive]], [[lem-of-q-embeds]], [[lem-of-inverse-positive]], [[lem-of-inverse-unique]]): the canonical embedding $\iota : \mathbb{Q} \to \mathbb{R}$ is injective and order-preserving, and the real number $m$ is positive for $m \ge 1$; inverses of positive elements are positive; and inverses in a field are unique, so a product equation with a nonzero factor may be cancelled.

## Verification

**Proof technique:** direct; five independent finite routes to one statement.

1.1 For all reals $x, y$, $\big((x+y)/2\big)^{2} - xy = \big((x-y)/2\big)^{2} \ge 0$, with equality exactly when $x = y$: expanding the square and collecting terms gives the identity, [L6] gives $(x-y)^{2} \ge 0$ with equality exactly at $x = y$, and translating by the constant $xy$ in [L7] yields $xy \le \big((x+y)/2\big)^{2}$, with equality exactly when $x = y$. [L6, L7, algebra]

1.2 Doubling naturals: by [L9] there is a function $j \mapsto N_j$ on $\mathbb{N}$ with $N_0 = 1$ and $N_{j+1} = N_j + N_j$, and $N_j \ge 1$ and $N_j > j$ for every $j$: at $j = 0$ this is $1 > 0$, and if $N_j > j$ then $N_j \ge j+1$ by [L10], so $N_{j+1} = N_j + N_j \ge (j+1) + 1 > j+1$ by [L10] and [L7]. [L7, L9, L10, induction]

1.3 Degenerate cases disposed of once for all routes. If $n = 1$ then $\sum_{k<1} a_k = a_0$, $A = a_0$ and $G = a_0^{1/1} = a_0$ by [L1] and [L3], so equality holds and the constant-list condition is automatic. If $a_j = 0$ for some $j < n$ then $\prod_{k<n} a_k = 0$ and $G = 0^{1/n} = 0$ by [L1] and [L3], while $A \ge 0$ because $A$ is the sum of nonnegative terms scaled by the positive $n^{-1}$ ([L1], [L11]); hence $G = 0 \le A$ and $\prod = 0 \le A^{n}$ with equality exactly when $A = 0$ (for $A \ge 0$, $A^{n} = 0$ forces $A = 0$ by [L2]), which happens exactly when $\sum_{k<n} a_k = 0$, equivalently $a_k = 0$ for every $k$ by [L1], and since some entry is $0$ that is exactly the constant-list case; so every list with a zero entry or of length $1$ is settled, and all routes below may assume $n \ge 2$ and $a_k > 0$ for every $k < n$. [L1, L2, L3, L6, L11]

1.4 Monotonicity of finite sums and products, with strictness. If $x_k \le y_k$ for all $k < m$ then $\sum_{k<m} x_k \le \sum_{k<m} y_k$ and, when all entries are nonnegative, $\prod_{k<m} x_k \le \prod_{k<m} y_k$; if moreover $x_j < y_j$ for some $j < m$, all $x_k \ge 0$ and all $y_k > 0$, then both inequalities are strict. The nonstrict product comparison follows by induction, splitting off the last factor and applying [L8], starting from $1 \le 1$; the sum comparison is [L1]. For strict sums, split off the index $j$ and add its strict comparison to the nonstrict comparisons of the remaining sums. For strict products, if an $x_k$ is zero the lower product is zero and the upper product is positive by [L1] and [L6]. Otherwise both products of the remaining entries are positive; call them $P \le Q$. Then $x_jP < y_jP \le y_jQ$, by positive scaling and [L8]. [L1, L6, L7, L8, L9, induction]

1.5 Route 1, the published Cauchy forward-backward induction: [L4] states verbatim that for every natural $n \ge 1$ and nonnegative entries $\prod_{k<n} a_k \le A^{n}$, equivalently $G \le A$, with equality exactly when all entries are equal; its proof is the doubling inductive argument followed by the arithmetic-mean descent, so this route is the published theorem itself and needs no further work. [L4]

2.1 Route 2, sum-preserving replacement, as an induction. Claim $S(m)$: every list of $m$ strictly positive reals with sum $m$ has product at most $1$, with equality only for the constant list of ones. $S(1)$ is immediate. Assume $S(m)$ and let $b_0, \dots, b_m > 0$ have sum $m+1$; if all entries equal $1$ the product is $1$, so suppose the list is not constant; then some entry is below $1$ and some entry is above $1$, because a list all of whose entries are at least $1$, with one strictly larger, has sum strictly greater than $m+1$ by [step 1.4], while a list with all entries at most $1$, with one strictly smaller, has sum strictly less than $m+1$; pick such $u = b_i < 1 < b_j = v$ and replace the pair by $1$ and $w := u+v-1 > 0$, which preserves the sum and strictly increases the pair product since $w - uv = (1-u)(v-1) > 0$ by [L6]; dropping the new entry $1$ leaves $m$ positive entries of sum $m$, whose product is $wR$ with $R > 0$ the product of the remaining entries, so $S(m)$ gives $wR \le 1$ and the original product satisfies $uvR < wR \le 1$ by [step 1.4] and [L7]; hence every nonconstant list of sum $m+1$ has product strictly below $1$ and equality in $S(m+1)$ occurs only for the constant list, completing the induction. [step 1.4, L1, L6, L7, L9, L10, induction]

2.2 Route 3, product-preserving replacement, as an induction. Claim $T(m)$: every list of $m$ strictly positive reals with product $1$ has sum at least $m$, with equality only for the constant list of ones. $T(1)$ is immediate. Assume $T(m)$ and let $c_0, \dots, c_m > 0$ have product $1$; if the list is constant then every entry is $1$ and the sum is $m+1$ with equality, so suppose it is not constant; then some entry is below $1$ and some entry is above $1$, since a list with all entries at least $1$ and one strictly larger has product strictly greater than $1$ by [step 1.4], and a list with all entries at most $1$ and one strictly smaller has product strictly less than $1$; pick $u = c_i < 1 < c_j = v$ and replace the pair by $1$ and $uv$, which preserves the product and strictly decreases the sum because $u+v-(1+uv) = (1-u)(v-1) > 0$ by [L6]; dropping the $1$ leaves $m$ positive entries of product $uvR = 1$ (with $R > 0$ the product of the remaining entries), whose sum is at least $m$ by $T(m)$, so the replaced list has sum at least $m+1$ and the original list, whose sum is strictly larger, has sum strictly greater than $m+1$; hence equality in $T(m+1)$ occurs only for the constant list, completing the induction. [step 1.4, L1, L6, L7, L9, L10, induction]

2.3 Route 4, induction from the integer Bernoulli inequality. Assume the claim at a length $m \ge 1$, and let $c_0, \dots, c_m > 0$ be a list of length $m+1$ with mean $A$; put $B := \big(\sum_{k<m} c_k\big)/m > 0$, $c := c_m > 0$, $t := c\,B^{-1} > 0$ and $h := (t-1)/(m+1)$, so that $h > -1$ because $t > 0$ and $m+1 \ge 2$; the induction hypothesis gives $\prod_{k<m+1} c_k = \big(\prod_{k<m} c_k\big)c \le B^{m}c = B^{m+1}t$ by [L1] and [L2], while Bernoulli's inequality [L5] at $h$ and $m+1$ gives $(1+h)^{m+1} \ge 1 + (m+1)h = t$; since $B(1+h) = B + B(t-1)/(m+1) = B + (c-B)/(m+1) = \big(mB + c\big)/(m+1) = A$ by [L1], [L11] and field arithmetic, the bound continues as $B^{m+1}t \le B^{m+1}(1+h)^{m+1} = \big(B(1+h)\big)^{m+1} = A^{m+1}$, so the claim holds at length $m+1$; if $\prod_{k<m+1} c_k = A^{m+1}$ then both inequalities in the chain are equalities, and since $m+1 \ge 2$ the equality clause of [L5] gives $h = 0$, that is $t = 1$ and $c = B$, whereupon $\big(\prod_{k<m} c_k\big)B = B^{m}B$ cancels the nonzero factor $B$ through [L11] to give $\prod_{k<m} c_k = B^{m}$, so the equality clause of the induction hypothesis gives $c_0 = \dots = c_{m-1} = B = c$ and the list is constant; conversely a constant list has equality, and with step 1.3 supplying the base length $1$ this completes the induction. [step 1.3, L1, L2, L5, L7, L9, L11, induction]

2.4 Route 5a, the doubling step with its equality clause. Let $m \ge 1$ and assume $U(m)$: every nonnegative list of length $m$ has product at most the $m$-th power of its mean, with equality only when the list is constant. Let $a_0, \dots, a_{m+m-1}$ be a list of length $m+m$, which by step 1.3 may be taken strictly positive; split the sums and products at $m$ by [L1], set $X := \big(\sum_{k<m} a_k\big)/m$ and $Y := \big(\sum_{k=m}^{m+m-1} a_k\big)/m$, both positive, and let $A$ be the total mean, so that $(m+m)A = mX + mY$ and hence $A = (X+Y)/2$ by [L1] and [L11]; applying $U(m)$ to the two halves gives $\prod_{k<m+m} a_k = \big(\prod_{k<m} a_k\big)\big(\prod_{k=m}^{m+m-1} a_k\big) \le X^{m}Y^{m} = (XY)^{m} \le \big(A^{2}\big)^{m} = A^{m+m}$ by [L1], [L2] and the square identity of step 1.1; if equality holds throughout, injectivity in [L2] gives $XY = A^{2}$, hence $X = Y$ by step 1.1; furthermore each half-product must equal its bound, since a strict bound for one half, multiplied by the positive other half-product, would make the total product strictly less than $X^{m}Y^{m}$ by step 1.4; thus $U(m)$'s equality clause makes each half constant with value equal to its mean, so all $m+m$ entries are equal; conversely a constant list gives equality; zero entries and length-one lists are already covered by step 1.3, so $U(m+m)$ holds. [step 1.1, step 1.3, L1, L2, L7, L9, L10, induction]

3.1 Conclusion of Route 2. Let $a_0, \dots, a_{n-1} > 0$ with $n \ge 2$ and mean $A > 0$; the normalized entries $b_k := a_k A^{-1}$ are positive and have sum $\big(\sum_{k<n} a_k\big)A^{-1} = nA\,A^{-1} = n$ by [L1] and [L11], so $S(n)$ of step 2.1 gives $\prod_{k<n} b_k \le 1$ with equality only when every $b_k = 1$; since $\prod_{k<n} b_k = \big(\prod_{k<n} a_k\big)A^{-n}$ by [L1] and [L2], multiplying by the positive $A^{n}$ recovers $\prod_{k<n} a_k \le A^{n}$, with equality exactly when every $a_k = A$, that is exactly when the list is constant; and since $G^{n} = \prod_{k<n} a_k$ with $G, A \ge 0$, the comparison is equivalent to $G \le A$ with the same equality case by [L2] and [L3]. [step 2.1, L1, L2, L3, L11]

3.2 Conclusion of Route 3. Let $a_0, \dots, a_{n-1} > 0$ with $n \ge 2$ and geometric mean $G > 0$; the entries $c_k := a_k G^{-1}$ are positive with product $\big(\prod_{k<n} a_k\big)G^{-n} = G^{n}G^{-n} = 1$ by [L1] and [L2], so $T(n)$ of step 2.2 gives $\sum_{k<n} c_k \ge n$ with equality only when every $c_k = 1$, that is $\big(\sum_{k<n} a_k\big)G^{-1} \ge n$ by [L1]; multiplying by the positive $G$ gives $\sum_{k<n} a_k \ge nG$, hence $A \ge G$, with equality exactly when every $a_k = G$, the constant-list case, and a constant list plainly attains equality. [step 2.2, L1, L2, L3, L7, L11]

3.3 Conclusion of Route 4. Step 1.3 disposes of the base length $1$, and step 2.3 derives the claim at length $m+1$ from length $m$ for every $m \ge 1$; hence by [L9] the statement $\prod_{k<n} a_k \le A^{n}$ with equality exactly for constant lists holds at every natural $n \ge 1$ by this route alone, which uses the integer Bernoulli inequality [L5] and never the arithmetic-geometric mean theorem. [step 1.3, step 2.3, L9]

3.4 Conclusion of Route 5. Let $a_0, \dots, a_{n-1} > 0$; step 1.2 supplies a doubling length $N := N_n$ with $N \ge n$, and we pad with the geometric mean by setting $b_k := a_k$ for $k < n$ and $b_k := G$ for $n \le k < N$, so that $\prod_{k<N} b_k = \big(\prod_{k<n} a_k\big)G^{N-n} = G^{n}G^{N-n} = G^{N}$ and $\sum_{k<N} b_k = \sum_{k<n} a_k + (N-n)G$ by [L1] and [L2]; steps 1.1, 1.2 and 2.4 give $U(N)$, so $G^{N} = \prod_{k<N} b_k \le \Big(\big(\sum_{k<n} a_k + (N-n)G\big)/N\Big)^{N}$ and hence $G \le \big(\sum_{k<n} a_k + (N-n)G\big)/N$ by [L2]; multiplying by $N$ and subtracting the constant $(N-n)G$ in [L7] gives $nG \le \sum_{k<n} a_k$, that is $G \le A$; equality $G = A$ holds exactly when the padded list is constant by $U(N)$'s equality clause and [L2], and the padded list is constant exactly when all original entries equal $G$, which is the constant-list case. [step 1.1, step 1.2, step 2.4, L1, L2, L3, L7, L10]

4.1 The comparison of the five routes. Route 1 is the published Cauchy forward-backward proof quoted as [L4] in step 1.5; Route 2 is the normalized sum-preserving induction of step 2.1 with its translation in step 3.1; Route 3 is the normalized product-preserving induction of step 2.2 with its translation in step 3.2; Route 4 is the Bernoulli induction of step 2.3 with its base-and-induction assembly in step 3.3; Route 5 is the square identity of step 1.1, the doubling induction of step 2.4 and the geometric-mean padding of step 3.4, with no backward descent; each route establishes $\prod_{k<n} a_k \le A^{n}$, equivalently $G \le A$, with equality exactly for constant lists, and none of them uses a derivative, logarithm, exponential function, convergence or an optimization theorem. [step 1.5, step 3.1, step 3.2, step 3.3, step 3.4, L4] ∎
