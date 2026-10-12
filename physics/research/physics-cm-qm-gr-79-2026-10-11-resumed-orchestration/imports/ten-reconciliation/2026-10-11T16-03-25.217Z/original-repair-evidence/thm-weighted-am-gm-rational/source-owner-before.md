---
id: thm-weighted-am-gm-rational
kind: theorem
title: "Weighted AM-GM inequality with rational weights"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-am-gm, def-rational-power, lem-rational-power-laws, def-finite-sum, lem-finite-sum-laws, thm-induction-principle, thm-recursion, lem-rat-positive-denominator, def-rationals, def-rat-operations, def-rat-order, def-int-order, lem-nat-embeds-int, lem-of-q-embeds, def-integer-power, thm-nth-roots-exist, lem-of-naturals-positive]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-07-26
    scope: page
    delegated_by: owner
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-26
sources:
  scraped: []
  references:
    - title: "MIT 18.100A, AM-GM inequality handout"
      url: "https://ocw.mit.edu/courses/18-100a-real-analysis-fall-2020/mit18_100af20_rec1.pdf"
    - title: "Finite inequalities (Cornell University)"
      url: "https://e.math.cornell.edu/people/belk/measuretheory/Inequalities.pdf"
    - title: "AM-GM inequality (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/AM%E2%80%93GM_inequality"
    - title: "Young's inequality for products (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Young%27s_inequality_for_products"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Statement

Let $n \in \mathbb{N}$ with $n \ge 1$, let $x_0, \dots, x_{n-1} \in \mathbb{R}$
with $x_k > 0$, and let $w_0, \dots, w_{n-1} \in \mathbb{Q}$ be **rational**
weights with $w_k \ge 0$ ([[def-rat-order]]) whose images under the canonical
embedding $\iota : \mathbb{Q} \to \mathbb{R}$ ([[lem-of-q-embeds]]), written with the same symbols $w_k$ in field arithmetic, satisfy
$\sum_{k<n} w_k = 1$. Then

$$\prod_{k<n} x_k^{\,w_k} \;\le\; \sum_{k<n} w_k\, x_k,$$

where $x_k^{\,w_k}$ is the rational power of [[def-rational-power]].

**Both sums are sums in $\mathbb{R}$, and that is not a detail.** This library
defines $\sum_{k<n}$ only for a sequence $\mathbb{N} \to \mathbb{R}$
([[def-finite-sum]]); there is no finite sum of rationals and none is used here.
The weights are therefore summed after being carried into $\mathbb{R}$ by
$\iota$, and no step below sums anything outside $\mathbb{R}$. Nothing is lost by
this reading, because $\iota$ is an injective field homomorphism: for $n = 2$ the
field equality $w_0+w_1=1$ is equivalent by injectivity to the same equality in $\mathbb{Q}$, and the conclusion reads
$x_0^{\,w_0} x_1^{\,w_1} \le w_0 x_0 + w_1 x_1$. Throughout the statement and proof, a rational used as a field coefficient or a summand denotes its image under the bare inclusion $\iota$ ([[def-finite-sum]]); a rational used as an exponent retains its original rational type. Natural list lengths and index bounds also retain their natural type.

**Why the weights are rational.** The restriction is not laziness and it cannot
be relaxed here. For a real weight $w$ the symbol $x^{w}$ has no meaning in this
library at all: [[def-rational-power]] defines $x^{r}$ only for $r \in \mathbb{Q}$,
and every proof on this page is a finite chain of field operations together with
the least-upper-bound property. Real exponents require the exponential function
and its inverse, which are built much later and by different means; the closing
remark of this page records the situation in full. Taking $n = 2$ and
$w_0 = w_1 = 1/2$ recovers the two-term case $\sqrt{x_0 x_1} \le (x_0 + x_1)/2$ of
[[thm-am-gm]].

## Facts & Assumptions

**Given:** A natural $n \ge 1$, reals $x_0, \dots, x_{n-1} > 0$, and rationals $w_0, \dots, w_{n-1} \ge 0$ with $\sum_{k<n} w_k = 1$, a sum in $\mathbb{R}$.

[L1] AM-GM ([[thm-am-gm]]): for $c_0, \dots, c_{N-1} \ge 0$ with $N \ge 1$, $\big(\prod_{i<N} c_i\big)^{1/N} \le \frac{1}{N}\sum_{i<N} c_i$.

[L2] Finite sums and products, defined ONLY for sequences $\mathbb{N} \to \mathbb{R}$ ([[def-finite-sum]], [[lem-finite-sum-laws]]): the recursion clauses $\sum_{k<0} a_k = 0$ and $\sum_{k<j+1} a_k = \sum_{k<j} a_k + a_j$; splitting of sums and products at any index $m \le m'$, $\sum_{k<m'} a_k = \sum_{k<m} a_k + \sum_{k=m}^{m'-1} a_k$, where the tail $\sum_{k=m}^{m'-1} a_k$ is by definition the shifted sum $\sum_{t<m'-m} a_{m+t}$ ([[def-finite-sum]]), and likewise for products; scaling $\sum_{k<m} \lambda a_k = \lambda \sum_{k<m} a_k$; and the constant sum $\sum_{i<m}\lambda = m\lambda$. Every $\sum$ and $\prod$ written below is therefore a sum or product in $\mathbb{R}$.

[L3] Constant product: $\prod_{i<m}\lambda = \lambda^{m}$, by induction on $m$ from the recursion clauses $\prod_{i<m+1}\lambda = \big(\prod_{i<m}\lambda\big)\lambda$ and $\lambda^{m+1} = \lambda^{m}\lambda$, with both sides equal to $1$ at $m = 0$ ([[def-finite-sum]], [[def-integer-power]], [[thm-induction-principle]]).

[L4] Rational power laws ([[lem-rational-power-laws]], [[def-rational-power]], [[thm-nth-roots-exist]]): for $u, v > 0$ and rationals $r, s$: $u^{r} > 0$, $(uv)^{r} = u^{r}v^{r}$ (hence, by induction on the number of factors, $\big(\prod_{j<n} u_j\big)^{r} = \prod_{j<n} u_j^{\,r}$, using also the constant product for the empty case), and $\big(u^{r}\big)^{s} = u^{rs}$.

[L5] Rational arithmetic, the order on $\mathbb{Q}$ and the embedding ([[lem-rat-positive-denominator]], [[def-rationals]], [[def-rat-operations]], [[def-rat-order]], [[lem-of-q-embeds]], [[lem-of-naturals-positive]]): on a representative with positive denominator, $m/N \ge 0$ holds exactly when $m \ge 0$ in $\mathbb{Z}$ ([[def-rat-order]], with the order on $\mathbb{Z}$ as in [[def-int-order]]); a nonnegative integer is the image of a unique natural and a positive integer the image of a unique natural $\ge 1$ ([[lem-nat-embeds-int]]), which is the step that licenses reading such an $m$, and such a denominator, as a natural number; every single rational has a representative with positive denominator ([[lem-rat-positive-denominator]] states exactly this, for one rational; the passage to a common denominator for finitely many is NOT quoted from it and is carried out by the induction inside step 1.1); $\iota : \mathbb{Q} \to \mathbb{R}$ is an injective order-preserving field homomorphism and therefore preserves zero, addition, products and inverses. Rational symbols in real sums and scalar products below denote their images through this map. On an integer the embedding is $m\mapsto m\cdot1_{\mathbb{R}}$; its image is positive for natural $m\ge1$, and this map is injective on all of $\mathbb{N}$, including zero. Injectivity is used to pass from equality of field images to equality of natural numerator sums.

[L6] Induction principle ([[thm-induction-principle]]), used for the routine inductions on the number of terms below, and the recursion theorem ([[thm-recursion]]), which is what defines a function on $\mathbb{N}$ by a recursion clause.

## Proof

**Proof technique:** direct.

1.1 Common denominator, by an induction written out rather than asserted. The claim at $j$ is: any rationals $v_0, \dots, v_{j-1}$ admit a natural $N \ge 1$ and integers $p_0, \dots, p_{j-1}$ with $v_k = p_k/N$ for every $k < j$. At $j = 0$ take $N = 1$, there being no $p_k$ to produce. Assume the claim at $j$ and let $v_0, \dots, v_j$ be given: applying it to $v_0, \dots, v_{j-1}$ yields a natural $N' \ge 1$ and integers $p'_k$ with $v_k = p'_k/N'$, and $v_j$ has a representative $v_j = a/b$ with $b > 0$, hence with $b$ a natural $\ge 1$; then $N := N'b$ is a natural $\ge 1$, and the integers $p_k := p'_k b$ for $k < j$ and $p_j := a N'$ satisfy $p_k/N = (p'_k b)/(N' b) = p'_k/N' = v_k$ and $p_j/N = (aN')/(bN') = a/b = v_j$, since $(x, y) \sim (xc, yc)$ for $c \ne 0$. The claim at $j = n$, applied to $w_0, \dots, w_{n-1}$, fixes a natural $N \ge 1$ and integers $m_0, \dots, m_{n-1}$ with $w_k = m_k/N$. Finally each $m_k$ is a natural: $w_k \ge 0$ read on the positive-denominator representative $m_k/N$ gives $m_k \ge 0$ in $\mathbb{Z}$, and a nonnegative integer is the image of a unique natural. [L5, L6]

2.1 The numerators sum to $N$ in $\mathbb{R}$: applying scaling to the real sequence $k \mapsto w_k$ multiplies the hypothesis $\sum_{k<n} w_k = 1$ by $N$ to give $\sum_{k<n} Nw_k = N$, and $Nw_k=m_k$ in the field by multiplicativity of the embedding applied to the rational identity $Nw_k=m_k$, so $\sum_{k<n} m_k = N$. [step 1.1, L2, L5]

2.2 The partial sums of the numerators, inside $\mathbb{N}$: define $M : \mathbb{N} \to \mathbb{N}$ by recursion, $M_0:=0$ and $M_{j+1}:=M_j+m_j$ for $j<n$ (and $M_{j+1}:=M_j$ for $j\ge n$), so each $M_j$ is natural and $M_j\le M_{j+1}$. Its canonical field image is $M_j\cdot1_{\mathbb{R}}=\sum_{k<j}m_k$ for $j\le n$, the sum being real under the convention in [L5]. Indeed the identity holds at zero; additivity of the embedding gives $(M_j+m_j)\cdot1_{\mathbb{R}}=M_j\cdot1_{\mathbb{R}}+m_j\cdot1_{\mathbb{R}}$, and the real finite-sum recursion then gives the successor identity. [step 1.1, L2, L5, L6, construct]

3.1 Hence $M_n=N$ as natural numbers: steps 2.1 and 2.2 give $M_n\cdot1_{\mathbb{R}}=\sum_{k<n}m_k=N\cdot1_{\mathbb{R}}$, and the map $m\mapsto m\cdot1_{\mathbb{R}}$ is injective on $\mathbb{N}$. This licenses the natural list length N in the next step; it is not an identification of arbitrary reals with indices. [step 2.1, step 2.2, L5]

4.1 The expanded list: define $c : \mathbb{N} \to \mathbb{R}$ by $c_i := x_j$ whenever $M_j \le i < M_{j+1}$ for some $j < n$, and $c_i := 1$ for $i \ge N$; this covers every $i \in \mathbb{N}$ exactly once, because the blocks $[M_j, M_{j+1})$ for $j < n$ partition $[0, M_n) = [0, N)$ by step 3.1, and every $c_i$ with $i < N$ is positive since each $x_j > 0$. [step 1.1, step 2.2, step 3.1, L5, construct]

5.1 Its sum and product, by a second induction written out rather than asserted. The claim at $j \le n$ is $\sum_{i<M_j} c_i = \sum_{k<j} m_k x_k$ and $\prod_{i<M_j} c_i = \prod_{k<j} x_k^{\,m_k}$. At $j = 0$ we have $M_0 = 0$ and all four expressions are the empty sum $0$ or the empty product $1$. Assume the claim at $j < n$. Since $M_j \le M_{j+1}$, splitting gives $\sum_{i<M_{j+1}} c_i = \sum_{i<M_j} c_i + \sum_{i=M_j}^{M_{j+1}-1} c_i$, and the tail is by definition $\sum_{t<m_j} c_{M_j+t}$, since $M_{j+1} - M_j = m_j$; every one of its terms equals $x_j$, because $M_j \le M_j + t < M_{j+1}$ for $t < m_j$, so the constant sum evaluates it as $m_jx_j$, and therefore $\sum_{i<M_{j+1}} c_i = \sum_{k<j} m_kx_k + m_jx_j = \sum_{k<j+1} m_kx_k$ by the recursion clause for finite sums. The same computation with products in place of sums, the constant product in place of the constant sum, gives $\prod_{i<M_{j+1}} c_i = \big(\prod_{k<j} x_k^{\,m_k}\big) x_j^{\,m_j} = \prod_{k<j+1} x_k^{\,m_k}$. At $j = n$, where $M_n = N$ by step 3.1, this reads $\sum_{i<N} c_i = \sum_{j<n} m_j x_j$ and $\prod_{i<N} c_i = \prod_{j<n} x_j^{\,m_j}$. [step 3.1, step 4.1, L2, L3, L6]

6.1 Applying AM-GM to $c_0, \dots, c_{N-1}$ and substituting: $\Big(\prod_{j<n} x_j^{\,m_j}\Big)^{1/N} = \Big(\prod_{i<N} c_i\Big)^{1/N} \le \frac{1}{N}\sum_{i<N} c_i = N^{-1}\sum_{j<n} m_j x_j = \sum_{j<n} w_j x_j$, the last equality by scaling together with $N^{-1}m_j = (m_j/N) = w_j$. [step 4.1, step 5.1, L1, L2, L5]

6.2 Rewriting the left-hand side with the rational power laws: $\Big(\prod_{j<n} x_j^{\,m_j}\Big)^{1/N} = \prod_{j<n} \Big(x_j^{\,m_j}\Big)^{1/N} = \prod_{j<n} x_j^{\,m_j/N} = \prod_{j<n} x_j^{\,w_j}$, each $x_j^{\,m_j}$ being positive. [step 5.1, L4, L6]

7.1 Combining the two displays gives $\prod_{j<n} x_j^{\,w_j} \le \sum_{j<n} w_j x_j$, which is the assertion. [step 6.1, step 6.2] ∎
