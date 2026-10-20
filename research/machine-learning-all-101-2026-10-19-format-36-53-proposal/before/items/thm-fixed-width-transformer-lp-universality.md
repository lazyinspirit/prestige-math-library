---
id: thm-fixed-width-transformer-lp-universality
kind: theorem
title: "Fixed-width Transformer approximation on compact domains"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 5
deps:
  - def-transformer-encoder-decoder-layer
  - lem-yun-transformer-grid-lookup
  - thm-transformer-permutation-equivariance-without-position
  - def-countable-choice
  - thm-lebesgue-measure-is-a-complete-measure
  - thm-lebesgue-measure-of-a-box-of-every-kind
  - thm-borel-sets-are-lebesgue-measurable
  - thm-heine-cantor-metric
  - thm-continuity-from-above-for-measures
axiom_use: "Countable Choice is assumed to use the usual countably additive Lebesgue measure and its integrated Lp error. The finite-grid constructions, finite representative choices, and network parameter choices use no further choice principle."
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pending
sources:
  references:
    - title: "Yun et al., Are Transformers Universal Approximators of Sequence-to-Sequence Functions?, Theorems 2–3 and Appendices B–C"
      url: "https://arxiv.org/pdf/1912.10077"
    - title: "Tokio Kajitsuka and Issei Sato, Are Transformers with One Layer Self-Attention Using Low-Rank Weight Matrices Universal Approximators?, Proposition 1 and Appendix A.5"
      url: "https://proceedings.iclr.cc/paper_files/paper/2024/file/96ee35c170cb8720033b16259c305da9-Paper-Conference.pdf"
---

## Statement

Assume the Axiom of Countable Choice, fix integers $d\ge1$ and $n\ge2$, and fix $1\le p<\infty$. For a matrix $Y\in\mathbb R^{d\times n}$, let $\|Y\|_p=(\sum_{r=1}^d\sum_{j=1}^n|Y_{rj}|^p)^{1/p}$, and for measurable maps on $\mathbb R^{d\times n}$ define
$$
d_p(f,g)=\left(\int_{\mathbb R^{dn}}\|f(X)-g(X)\|_p^p\,dX\right)^{1/p},
$$
using $dn$-dimensional Lebesgue measure. Let $\mathcal T^{2,1,4}$ be the finite compositions of the two-head, head-size-one Yun blocks with tokenwise ReLU feedforward width four and no layer normalization. If $f:\mathbb R^{d\times n}\to\mathbb R^{d\times n}$ is continuous, has compact support, and satisfies $f(XP)=f(X)P$ for every $n\times n$ permutation matrix $P$, then for every $\varepsilon>0$ there is $g\in\mathcal T^{2,1,4}$ with $d_p(f,g)<\varepsilon$.

For every compact $K\subseteq\mathbb R^{d\times n}$ and every continuous $f:K\to\mathbb R^{d\times n}$, with no permutation condition, there are a trainable positional matrix $E\in\mathbb R^{d\times n}$ and $g\in\mathcal T^{2,1,4}$ such that
$$
\left(\int_K\|f(X)-g(X+E)\|_p^p\,dX\right)^{1/p}<\varepsilon.
$$

## Statement references

[Yun et al., Theorems 2–3: fixed-length permutation-equivariant and position-encoded approximation](https://arxiv.org/pdf/1912.10077)

[Kajitsuka and Sato, Proposition 1 and Appendix A.5: an independent, wider one-head universality construction](https://proceedings.iclr.cc/paper_files/paper/2024/file/96ee35c170cb8720033b16259c305da9-Paper-Conference.pdf)

## Facts & Assumptions

**Given:** Countable Choice, fixed $d,n,p$, the target maps in the Statement, and $\varepsilon>0$.

[F1] Each block in $\mathcal T^{2,1,4}$ has two unmasked heads of size one, residual attention, a shared tokenwise ReLU feedforward sublayer of width four, and no layer normalization; a scalar query bias is allowed ([[def-transformer-encoder-decoder-layer]]).

[F2] The column-token Yun block and every unpositioned composition of it are permutation equivariant ([[thm-transformer-permutation-equivariance-without-position]]).

[F3] A two-head, head-size-one modified network with piecewise-affine scalar gates performs exact finite lookup on the distinct-column grid and on position-tagged grids; the first version returns zero on duplicate-column and sentinel grid points ([[lem-yun-transformer-grid-lookup]]).

[F4] A continuous map from a compact metric space to a metric space is uniformly continuous ([[thm-heine-cantor-metric]]).

[F5] Under Countable Choice, Lebesgue measure is a complete countably additive measure extending box volume, and compact subsets of Euclidean space are measurable ([[thm-lebesgue-measure-is-a-complete-measure]], [[thm-lebesgue-measure-of-a-box-of-every-kind]], [[thm-borel-sets-are-lebesgue-measurable]]).

[F6] For decreasing measurable sets of finite measure, the measure of their intersection is the limit of their measures ([[thm-continuity-from-above-for-measures]]).

## Proof

1.1 First consider the compactly supported equivariant map. If $f=0$, the zero Transformer suffices. Otherwise its support $K$ is a nonempty compact permutation-invariant set. Compactness bounds all scalar entries of matrices in $K$; choose real $a<b$ with every entry in $[a,b]$. Since a nonzero continuous function is nonzero on an open set, $K$ has positive measure and the bounds can be chosen with $a<b$. The common affine map $T(X)=(X-a\mathbf1)/(b-a)$ sends $K$ into $[0,1]^{d\times n}$ and commutes with column permutations. A residual width-four ReLU sublayer implements $z\mapsto\alpha z+\beta$ on every feature by
$$
z+(\alpha-1)\bigl(\operatorname{ReLU}(z)-\operatorname{ReLU}(-z)\bigr)+\beta=\alpha z+\beta;
$$
two hidden units handle one feature and finitely many layers handle all $d$ features. Thus $T$ can be inserted in the Yun architecture. [given, F1, F2, algebra]

1.2 Choose $\delta=1/m$ with integer $m$ large enough that $n\le\delta^{-d}$, the duplicate-cell bound below is small, and $M=\delta^{-nd}>d+1+\log(n)/\lambda$ for a fixed $\lambda>0$. Partition the normalized cube into half-open grid cells of side $\delta$. Their preimages under $T$ have side $h=(b-a)\delta$. By [F4], the oscillation of $f$ between two points of $K$ at distance at most $\sqrt{dn}\,h$ tends to zero with $\delta$. For each orbit of distinct-column grid matrices $L$ under column permutations, if the closed preimage cell meets $K$, choose one representative $X_L$ in that intersection and put $A(L)=f(X_L)$; transport the choice by permutations and set $A(L)=0$ on orbits whose cells miss $K$. This is a finite choice and gives $A(LP)=A(L)P$. Apply the first assertion of [F3] to this table. [step 1.1, F3, F4, construct, choose]

1.3 The table network agrees with $f$ on every point of $K$ in a distinct-column cell up to the oscillation in step 1.2. The union of cells whose grid matrices have duplicate columns has measure at most
$$
\binom n2\,m^{d(n-1)}h^{dn}=\binom n2(b-a)^{dn}\delta^d,
$$
because for each pair of columns, equality leaves only $m^{d(n-1)}$ grid matrices. The table is zero on cells not meeting $K$; cells meeting $K$ but lying partly outside it are contained in the $\sqrt{dn}\,h$-neighborhood of $K$. Intersect these neighborhoods with one fixed bounded box containing $K$. Along any sequence $h_j\downarrow0$, the resulting closed neighborhoods decrease to $K$ and have finite measure; [F5]–[F6] imply that their excess measure over $K$ tends to zero. The table values are bounded because $f$ is continuous on compact $K$. Outside the normalized cube the sentinel branch of [F3] returns zero, as does $f$. Therefore the integrated $L_p$ error of the modified lookup tends to zero as $\delta\downarrow0$. [step 1.2, F3, F5, F6, algebra]

2.1 Now consider continuous $f$ on compact $K$ without symmetry. If $K$ has zero Lebesgue measure, the integral is zero for any network. Otherwise let $a,b$ be the minimum and maximum of its scalar entries; again $a<b$. Put $\alpha=(b-a)^{-1}$ and choose
$$
E_{rj}=(b-a)(j-1)-a\qquad(1\le r\le d,\ 1\le j\le n).
$$
The first residual width-four sublayers scale $X+E$ by $\alpha$, producing entries $(X_{rj}-a)/(b-a)+(j-1)$. Partition each normalized feature interval $[0,1]$ into grid intervals of width $\delta=1/m$. The resulting quantized matrices lie in $G_{\delta,\mathrm{pos}}$ from [F3], where position offsets make every column distinct. For each grid cell meeting $K$, choose a representative $X_L\in K$ and set $A(L)=f(X_L)$; set arbitrary values, for example zero, on cells disjoint from $K$. The position-tagged assertion of [F3] realizes this finite table exactly. [given, F1, F3, construct, choose]

2.2 By [F4], for sufficiently small $\delta$ every point of $K$ and the representative in its grid cell have outputs within any prescribed tolerance. The cell diameter in the original coordinates is at most $\sqrt{dn}(b-a)\delta$, and $K$ has finite measure because it is compact and bounded. Thus the integrated $L_p(K)$ error of the modified position-tagged lookup can be made arbitrarily small. [step 2.1, F4, F5, algebra]

3.1 It remains to replace the modified gates and uniform hardmax in [F3] by the standard ReLU and softmax of $\mathcal T^{2,1,4}$. For a three-piece scalar map
$$
\phi(t)=
\begin{cases}
b_1,&t<c_1,\\
a_2t+b_2,&c_1\le t<c_2,\\
a_3t+b_3,&t\ge c_2,
\end{cases}
$$
replace each jump by a linear ramp of width $\rho>0$. The resulting continuous piecewise-affine map is a sum of a constant and four ReLUs: its first two ReLU coefficients are $A_1=(a_2c_1+b_2-b_1)/\rho$ and $a_2-A_1$, and its last two are $A_2-a_2$ and $a_3-A_2$, where $A_2=(a_3c_2+b_3-a_2(c_2-\rho)-b_2)/\rho$. Direct substitution shows it agrees with $\phi$ outside the two ramp intervals. A width-four ReLU sublayer realizes this formula. For any finite score vector $s$, softmax of $\lambda s$ converges as $\lambda\to\infty$ to equal weights on its maximizing coordinates and zero elsewhere; hence it converges to the uniform hardmax used in [F3]. [F1, F3, algebra]

3.2 To control the unbounded input domain in the first assertion, insert an exact sentinel gate before simulating the lookup. For a quantized matrix $Z$, put $s_j=\sum_{r=1}^d Z_{rj}$ and
$$
w_j=\frac{e^{-\lambda s_j}}{\sum_{k=1}^n e^{-\lambda s_k}},\qquad \bar s=\sum_{j=1}^n w_js_j.
$$
A size-one softmax head with constant query $1$, key $-\lambda s_j$, value $s_j$, and output vector $\mathbf1_d$ sends $Z$ to $Z+\bar s\mathbf1_{d\times n}$. If all entries of $Z$ are in $[0,1]$, then every $s_j\ge0$, so every shifted entry is nonnegative. If any entry is the sentinel $-M$, then $\min_j s_j\le -M+d-1$. The entropy identity
$$
-\sum_jw_j\log w_j=\lambda\bar s+\log\sum_je^{-\lambda s_j}
$$
and the bounds $-\sum_jw_j\log w_j\le\log n$ and $\sum_je^{-\lambda s_j}\ge e^{-\lambda\min_j s_j}$ imply $\bar s\le\min_j s_j+(\log n)/\lambda<-1$, by the choice in step 1.2. Since every entry of $Z$ is at most $1$, every shifted entry is then negative. Apply coordinatewise ReLU, implemented by the residual update $z_r\mapsto z_r-\operatorname{ReLU}(-z_r)$ one feature at a time. It leaves every valid grid matrix unchanged and sends every sentinel matrix to zero. A second size-one softmax head exactly inverts the shift on nonnegative states: the shifted column sums are $s_j+d\bar s$, so their weights remain $w_j$ and their weighted mean is $(d+1)\bar s$; add $-(d+1)^{-1}$ times this mean to each feature. This restores $Z$, and sends the zero state to zero. These two attention updates and the coordinatewise clipping are ordinary blocks in $\mathcal T^{2,1,4}$. [given, F1, step 1.2, algebra]

3.3 Outside strips of width $\rho$ around the finitely many scalar quantizer thresholds, four-ReLU ramps from step 3.1 equal the exact quantizer: each coordinate becomes either a grid value or the sentinel $-M$. By step 3.2, every state with any exact sentinel is sent to zero, independently of the other coordinates; the modified lookup and its ReLU simulation keep zero exactly zero because all valid lookup codes are positive and attention values at zero vanish. If there is no exact sentinel, every raw input coordinate lies in a bounded neighborhood of $[0,1]$, so the union of the threshold strips there has finite measure tending to zero with $\rho$. All network states on that bounded set are bounded, hence its integrated $L_p$ contribution tends to zero. On the remaining inputs the state before grid lookup is in the finite set $G_\delta\cup\{0\}$. Scaled softmax converges to uniform hardmax on each of its finitely many score vectors, and every gate input on those states has positive distance from each breakpoint: grid sweeps use half-grid thresholds, while lookup pulses have width $\delta/3$ and distinct codes are at least $\delta$ apart. Choose softmax scales large and ReLU ramp widths small, successively through the finite network, to approximate the modified lookup uniformly on this finite set while fixing zero exactly. Combining this simulation error with steps 1.3 and 2.2, choosing the grid and transition-strip errors small enough, and assigning each remaining error below $\varepsilon/3$ (with the fixed affine scale included) proves both assertions for ordinary Yun blocks. [step 1.3, step 2.2, step 3.1, step 3.2, F1, F3, algebra, choose] ∎
