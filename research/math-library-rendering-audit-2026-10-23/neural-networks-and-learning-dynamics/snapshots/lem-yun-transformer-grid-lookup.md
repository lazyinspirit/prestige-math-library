---
id: lem-yun-transformer-grid-lookup
kind: lemma
title: "Two-head fixed-width Transformers implement finite-grid lookups"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 4
deps:
  - def-transformer-encoder-decoder-layer
  - def-positional-encoding-and-causal-mask
  - thm-transformer-permutation-equivariance-without-position
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Yun et al., Are Transformers Universal Approximators of Sequence-to-Sequence Functions?, Appendices B.4–B.6"
      url: "https://arxiv.org/pdf/1912.10077"
    - title: "Yun et al., Are Transformers Universal Approximators of Sequence-to-Sequence Functions?, Appendix C.1–C.3"
      url: "https://arxiv.org/pdf/1912.10077"
---

## Statement

Let $d\ge1$, $n\ge2$, $m\ge2$ be integers, set $\delta=1/m$ and $q=\delta^{-d}$, and assume $n\le q$. Define
$$G_\delta=\{0,\delta,\ldots,1-\delta\}^{d\times n},\qquad G_\delta^+=\{-\delta^{-nd},0,\delta,\ldots,1-\delta\}^{d\times n}.$$
Let $\widehat G_\delta$ consist of those $L\in G_\delta$ whose columns are pairwise distinct. For column-token matrices $Z\in\mathbb R^{d\times n}$, consider finite compositions of residual attention updates
$$Z\longmapsto Z+\sum_{h=1}^{2}o_h(v_h^{\mathsf T}Z)\, \operatorname{hmax}\!\left((k_h^{\mathsf T}Z)^{\mathsf T}(r_h^{\mathsf T}Z+b_h\mathbf1_n^{\mathsf T})\right)$$
and residual tokenwise updates
$$
Z\longmapsto Z+w\,\phi(v^{\mathsf T}Z+b\mathbf1_n^{\mathsf T}),
$$
where all displayed vectors and scalars are fixed across columns, $\operatorname{hmax}$ assigns equal weights to all maximizing entries in each column, and each scalar $\phi$ is piecewise affine on at most three intervals with at least one constant piece. If $A:\widehat G_\delta\to\mathbb R^{d\times n}$ satisfies $A(LP)=A(L)P$ for every column-permutation matrix $P$, then such a composition maps each $L\in\widehat G_\delta$ to $A(L)$ and each $L\in G_\delta^+\setminus\widehat G_\delta$ to $0$.

There is also a position-tagged version. For each $j=1,\ldots,n$, let
$$J_j=\{j-1,j-1+\delta,\ldots,j-\delta\}^d,\qquad G_{\delta,\mathrm{pos}}=J_1\times\cdots\times J_n,$$
where the $j$th factor specifies column $j$. For every function $A:G_{\delta,\mathrm{pos}}\to\mathbb R^{d\times n}$, with no permutation condition, a finite composition of the same updates maps each $L\in G_{\delta,\mathrm{pos}}$ to $A(L)$.

## Statement references

[Yun et al., Appendix B.4: scalar quantization by tokenwise layers](https://arxiv.org/pdf/1912.10077)

[Yun et al., Appendices B.5–B.6: contextual codes and finite tokenwise value lookup](https://arxiv.org/pdf/1912.10077)

[Yun et al., Appendix C.1–C.3: the position-tagged lookup construction](https://arxiv.org/pdf/1912.10077)

## Facts & Assumptions

**Given:** The integer grids and finite tables in the Statement.

[F1] The Yun expressivity block has two heads of size one, shared query/key/value and output maps, a shared scalar query bias, residual attention, and a tokenwise ReLU feedforward sublayer of width four; it has no layer normalization ([[def-transformer-encoder-decoder-layer]]).

[F2] Every finite composition of the unmasked Yun attention and shared tokenwise maps is permutation equivariant ([[thm-transformer-permutation-equivariance-without-position]]).

[F3] Positional encodings are added columnwise to the token matrix before the position-aware stack ([[def-positional-encoding-and-causal-mask]]).

## Proof

For the unpositioned equivariance used below, let $P$ be any column-permutation matrix. In a shared Yun head, $v^{\mathsf T}ZP=(v^{\mathsf T}Z)P$ and the query and key projections transform the same way, so its score matrix satisfies $S(ZP)=P^{\mathsf T}S(Z)P$. Equal-weight hardmax acts columnwise and commutes with row and column permutations, giving $\operatorname{hmax}(S(ZP))=P^{\mathsf T}\operatorname{hmax}(S(Z))P$. Multiplication by the permuted value row then gives the permuted attention output, and residual addition preserves this identity. A shared tokenwise update also commutes with column permutations because $\mathbf1_n^{\mathsf T}P=\mathbf1_n^{\mathsf T}$ and its coordinatewise activation is applied identically in every column. Thus every modified Yun attention or tokenwise update, and every finite composition of them, is permutation equivariant. This is the unnormalized, hardmax version of the supplier calculation in [thm-transformer-permutation-equivariance-without-position].

1.1 Put $u=(1,\delta^{-1},\ldots,\delta^{-d+1})$. For a grid column $x=(a_1\delta,\ldots,a_d\delta)$, where $a_i\in\{0,\ldots,m-1\}$, its scalar code is $$\ell(x)=u^{\mathsf T}x,\qquad \ell(x)/\delta=a_1+a_2m+\cdots+a_dm^{d-1}.$$ Thus the valid column codes are distinct multiples of $\delta$ in $[0,B]$, where $B=\delta(q-1)$. If a column has a sentinel coordinate $-\delta^{-nd}$, the sum of all its other coordinate contributions is at most $\delta^{-d+1}-1$, so its code is at most $-\delta^{-nd}+\delta^{-d+1}-1<0$. [given, algebra]

1.2 For a scalar threshold $b$, the single-head update $$ \psi(Z;b)=e_1(u^{\mathsf T}Z)\operatorname{hmax}\!\left((u^{\mathsf T}Z)^{\mathsf T}(u^{\mathsf T}Z-b\mathbf1_n^{\mathsf T})\right) $$ is an allowed attention update contribution: its key and value projections are $u$, its query projection is $u$ with bias $-b$, and its output vector is $e_1$. In query column $j$, if $\ell_j>b$ it returns the largest current scalar code, and if $\ell_j<b$ it returns the smallest. If $\ell_j=b$, all query scores are zero and equal-weight hardmax returns the mean $\bar\ell=n^{-1}\sum_k\ell_k$. Thus, writing $\ell_{\max}=\max_k\ell_k$ and $\ell_{\min}=\min_k\ell_k$, the contribution $\psi(Z;b)-\psi(Z;b')$ for $b<b'$ is $\ell_{\max}-\ell_{\min}$ in the first coordinate when $b<\ell_j<b'$, $\bar\ell-\ell_{\min}$ when $\ell_j=b$, $\ell_{\max}-\bar\ell$ when $\ell_j=b'$, and zero when $\ell_j<b$ or $\ell_j>b'$. In particular, if no current code equals either threshold, it shifts exactly the columns strictly between them by $\ell_{\max}-\ell_{\min}$. [given, F1, algebra]

2.1 Sweep the valid scalar codes $0,\delta,\ldots,B$ in increasing order, using the two-head update $\;Z\mapsto Z+q(\psi(Z;\ell-\delta/2)-\psi(Z;\ell+\delta/2))\;$ at code $\ell$. All initial codes, including sentinel codes, are multiples of $\delta$: every grid coordinate lies in $\delta\mathbb Z$ and every entry of $u$ is an integer. Since $q=m^d$ is an integer, each strict selective shift preserves this lattice; inductively no current code can equal any half-grid threshold $\ell\pm\delta/2$. This also applies to duplicate-column inputs and to the position-tagged lattice. For $L\in\widehat G_\delta$, order its distinct column codes as $\ell_1<\cdots<\ell_n$. The first sweep shifts only $\ell_1$ to $\widetilde\ell_1=\ell_1+q(\ell_n-\ell_1)>B$, since $\ell_n-\ell_1\ge\delta$ and $q\delta=B+\delta$. Each later sweep shifts the next unmodified code and gives $$ \widetilde\ell_j=\ell_j+q(\widetilde\ell_{j-1}-\ell_j)>\widetilde\ell_{j-1}\qquad(2\le j\le n). $$ Thus shifted columns leave all later threshold intervals, and the final scalar codes satisfy $0<\widetilde\ell_1<\cdots<\widetilde\ell_n$. [step 1.1, step 1.2, construct, algebra]

3.1 Write $g_j=\ell_{j+1}-\ell_j\ge\delta$. Unrolling the recurrence in step 2.1 gives $$ t:=\widetilde\ell_n=\ell_n+\sum_{j=1}^{n-1}(q^n-q^{n-j})g_j. $$ Consequently $$\delta q^{n-1}(q-1)\le t\le \delta q^n(q-1)-\delta(q-1)^2.$$ The lower bound follows from the $j=1$ term; the upper bound follows from $\ell_n\le B$ and $\sum_jg_j\le B$. The map $(\ell_1,\ldots,\ell_n)\mapsto t$ is injective: if two ordered tuples give the same $t$, put $a_j=(\ell_j-\ell'_j)/\delta\in\mathbb Z$, so $|a_j|\le q-1$. The difference equation is $$ a_n+q(a_{n-1}-a_n)+\cdots+q^{n-1}(a_1-a_2)+q^n(a_n-a_1)=0. $$ Reduction modulo $q$ first gives $a_n=0$; division by $q$ and repeated reduction modulo $q$ then gives $a_{n-1}=0,\ldots,a_1=0$. Hence distinct unordered column multisets have distinct $t$ values, separated by at least $\delta$. [step 2.1, algebra]

4.1 Apply one final single-head update $Z\mapsto Z+K\psi(Z;0)$, with a positive integer $K$. For valid $L$, all $\widetilde\ell_j>0$, so it adds $Kt$ to every first coordinate and changes the scalar codes to $$ c_{L,j}=Kt+\widetilde\ell_j. $$ For different column multisets, their $t$ values differ by at least $\delta$, while $0<\widetilde\ell_j\le t$. Choose $K$ so that $K\delta>\max t$ over the finite valid grid. The intervals $[Kt,Kt+t]$ for different multisets are disjoint, and codes within one multiset are distinct by step 2.1. All resulting codes are multiples of $\delta$, hence distinct codes are at least $\delta$ apart. [step 2.1, step 3.1, F2, choose, algebra]

5.1 If $L$ has duplicate columns but no sentinel, its scalar codes have only $r<n$ distinct levels. The same sweep shifts these $r$ levels, and its largest value is at most $\delta q^r(q-1)-\delta(q-1)^2\le\delta q^{n-1}(q-1)-\delta(q-1)^2$, strictly below the lower bound for valid $t$ in step 3.1. A sentinel column has a negative code by step 1.1 and remains the minimum throughout the sweep. If all codes are negative, the final update in step 4.1 shifts every code further negative. If some codes are nonnegative, the first nonnegative code is shifted by at least $q(q^n-B)>\delta q^{n+1}$; the later positive codes are shifted by still larger amounts. This exceeds every valid $t$ in step 3.1. Thus, after the final update, each invalid scalar code has one of three forms: below every valid code, above every valid code, or negative. Since there are finitely many grid inputs and all codes are multiples of $\delta$, choose $K$ large enough that every invalid code lies at least $\delta$ outside the interval from the least to the greatest valid code. [step 1.1, step 3.1, step 4.1, algebra, choose]

6.1 The preceding construction gives a finite scalar code for each token of each valid context; these codes are all distinct, and column permutations carry each code and its token to the corresponding permuted token by [F2]. Let $\lambda_-$ and $\lambda_+$ be the least and greatest valid codes. Because the table $A$ and grid are finite, enlarge $K$ so that $|u^{\mathsf T}A(L)_{:,j}|<\lambda_- -\delta/3$ for every valid $L,j$. A three-piece constant activation that is zero on $[\lambda_- -\delta/3,\lambda_+ +\delta/3]$ and one outside this interval detects exactly the invalid codes. Subtracting a constant larger than the maximum absolute coordinate of every encoded grid state makes every invalid state strictly negative; for each coordinate $r$, the allowed residual update $Z\mapsto Z+e_r\operatorname{ReLU}(-e_r^{\mathsf T}Z)$ replaces that coordinate by $z_r+\max(0,-z_r)=\max(0,z_r)$. These $d$ updates send every invalid state to zero and leave every valid, coordinatewise nonnegative state unchanged. For each valid code $c_{L,j}$, a three-piece pulse equal to one on $[-\delta/3,\delta/3]$ and zero outside, applied to $u^{\mathsf T}Z-c_{L,j}$, selects exactly its token. Add the vector $A(L)_{:,j}-Z_{:,j}$ at that token. The updated token has scalar value $u^{\mathsf T}A(L)_{:,j}$ below every code, so later pulses cannot select it; the remaining tokens retain their codes until selected. Equivariance of $A$ makes each update correct for every permutation of $L$. This yields $A(L)$ on $\widehat G_\delta$ and zero on every other point of $G_\delta^+$. [step 4.1, step 5.1, F2, construct, choose, algebra]

7.1 For the position-tagged grid, the scalar code of column $j$ has the form $$ \ell_j=(j-1)S+r_j,\qquad S=\sum_{k=0}^{d-1}\delta^{-k},\quad 0\le r_j\le B,\quad r_j\in\delta\mathbb Z. $$ Since $S-B\ge\delta$, codes in a matrix satisfy $\ell_1<\cdots<\ell_n$ and each individual code identifies its column vector. Choose an integer $Q\ge q$ with $Q\delta>(n-1)S+B$. Sweep all possible position-tagged scalar codes in increasing order, replacing the shift multiplier $q$ in step 2.1 by $Q$. All codes remain in $\delta\mathbb Z$, so none equals a half-grid threshold. Since distinct initial codes differ by at least $\delta$, the first shifted code exceeds the largest possible initial code, and each subsequent shifted code exceeds its predecessor. Thus the recurrence of step 2.1 holds with $Q$ in place of $q$, and different matrices give different ordered tuples $(\ell_1,\ldots,\ell_n)$. The divisibility argument in step 3.1 applies modulo $Q$: for each fixed position, the offsets $(j-1)S$ cancel and the difference of two $r_j$ values divided by $\delta$ has magnitude at most $q-1<Q$. Thus the final maxima $t$ distinguish all position-tagged matrices, and the codes $Kt+\widetilde\ell_j$ distinguish every token in every matrix when $K\delta>\max t$. Choose $K$ still larger so these positive codes exceed all finitely many target values $|u^{\mathsf T}A(L)_{:,j}|+\delta/3$. The pulse layers of step 6.1 then implement the arbitrary table $A$; no permutation condition is needed because the position offsets distinguish columns. [given, step 1.2, step 2.1, step 3.1, step 6.1, F3, choose, algebra]

8.1 Each update used above is either a two-head attention update, a single-head attention update with the second head set to zero, or a tokenwise scalar piecewise-affine update; an unused attention or feedforward sublayer is made the identity by setting its output weights to zero. Therefore the finite constructions are compositions of the modified Yun blocks specified in the Statement, proving both lookup assertions. [step 1.2, step 6.1, step 7.1, F1, algebra] ∎
