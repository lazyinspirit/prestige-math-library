---
id: thm-cauchy-root-grid-matvec-numerical-cost
kind: theorem
title: Numerical Cauchy products on a root grid with explicit accuracy scale
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 0
deps: []
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Gu, Goel, and Ré, Efficiently Modeling Long Sequences with Structured State Spaces, Appendix C.3, Proposition 5"
      url: "https://arxiv.org/pdf/2111.00396"
    - title: "Pan, Fast Approximate Computations with Cauchy Matrices and Polynomials, §6.1 and §§6.2–6.4"
      url: "https://arxiv.org/pdf/1506.02285"
---

## Statement

Let $n\ge0$, $M=2^q\ge1$, $z_k=\exp(2\pi i k/M)$, and let $a_j,\mu_j\in\mathbb C$ satisfy $|z_k-\mu_j|\ge d>0$ for every $j,k$. Repeated poles are allowed. Let $A\ge\sum_j|a_j|$ and $s=\max(1,A/d)$. For $0<\eta\le1/2$, the products $y_k=\sum_j a_j/(z_k-\mu_j)$ have numerical approximations satisfying
$$ \max_k|\widehat y_k-y_k|\le\eta s $$
using $O((n+M)\log(2+M)\log(1/\eta))$ scalar operations and $O(n+M)$ scalar words. Consequently absolute error $\delta$, for $0<\delta\le1/2$, costs $O((n+M)\log(2+M)\log(s/\delta))$ operations with the same word space.

The model is variable-precision arithmetic with unrestricted exponent range, supplied certified approximations to the inputs, roots and arc-center constants, and certified bounds for the finite computation specified in the proof. Each real comparison, word access and scalar arithmetic operation has unit cost; the latter has absolute rounding error at most $u$. A word stores one scalar at the selected precision. Input approximation, working precision and word lengths may depend on $n,M,d,A,\eta$ and intermediate magnitudes. This is neither a bit-complexity bound nor a bound at fixed word length. All preprocessing, geometric routing and numerical summation operations are included; computing the supplied constants or certificates from other representations is excluded.

Here is a sufficient explicit precision certificate. For the selected finite rational summation circuit, include its input constants among its exact intermediates, let $T$ bound its arithmetic gates, let $V\ge1$ bound their moduli, and let $0<D\le1$ bound below the modulus of every divisor. Set $K=64(V+1)^2/D^2$. With $\tau=\eta s/2$, it suffices to take
$$ u\le\frac{\min(1,D/2,\tau)}{2K^{T+1}}. $$
The geometric decisions additionally use certified interval enclosures narrow enough to choose between the overlapping near and far tests described below. Such enclosures require only finite precision, including at threshold equalities. These certificate assumptions hold for each particular noncollision input, but have no uniform bound as pole/root separation tends to zero.

## Statement references

[Gu, Goel, and Ré, “Efficiently Modeling Long Sequences with Structured State Spaces,” Appendix C.3, Proposition 5](https://arxiv.org/pdf/2111.00396)

[Pan, “Fast Approximate Computations with Cauchy Matrices and Polynomials,” §6.1 and §§6.2–6.4](https://arxiv.org/pdf/1506.02285)

## Facts & Assumptions

**Given:** The finite data, certified separation, magnitude bound and variable-precision model in the Statement. Supplied constants may be requested at any specified finite absolute accuracy. The precision and routing certificates are part of the numerical input interface, not claims of bounded bit cost.

[A1] Every pole/root denominator is nonzero and has modulus at least $d$.

[A2] Each scalar gate and each supplied scalar constant can be evaluated with absolute error at most the selected $u$, with no overflow or underflow.



## Proof

1.1 If $n=0$, return zero; if $M=1$, sum the $n$ nonzero-denominator fractions directly, using $O(n+1)$ operations and space, and use the rounding argument below. Otherwise construct a binary tree on consecutive root indices. Its root covers all roots, with center $0$ and radius $1$. At depth $\ell\ge1$, a node contains $m=M/2^\ell$ consecutive roots starting at index $b$; its center is $c=\exp(2\pi i(b+(m-1)/2)/M)$ and its covering radius is $R=2\sin(\pi(m-1)/(2M))\le\pi 2^{-\ell}$. These disks contain their roots because the largest angular distance from the arc midpoint is $\pi(m-1)/M$. Singleton leaves have radius zero. For each pole start at the root: at a nonleaf stop at a far node if $|c-\mu_j|\ge3R/2$, or descend into both children if $|c-\mu_j|\le2R$. In the overlap either choice is valid. A singleton is evaluated directly if reached. Certified interval tests terminate: for $R>0$, the two thresholds have a positive gap $R/2$, so enclosures of width less than $R/4$ distinguish at least one admissible choice, even when one threshold is an equality. Squared-distance comparisons implement the same test with a positive gap and finitely accurate supplied coordinates. [given, A1, construct, algebra]

2.1 At a fixed depth put $J=2^\ell$. The $J$ arc centers are equally spaced on the unit circle and have mutual distance at least $2\sin(\pi/J)\ge4/J$ for $J\ge2$, by concavity of sine on $[0,\pi/2]$. Every near center lies within $2\pi/J$ of its pole. Disks of radius $2/J$ about these centers have disjoint interiors and lie in the disk of radius $(2\pi+2)/J$ about that pole. Comparing their areas bounds the number of near centers by $(\pi+1)^2<18$. Thus there are fewer than $36$ candidate children per pole at the next depth, including all far stops. The root contributes one candidate. The $q+1$ depths therefore contain $O(n\log(2+M))$ pole/node pairs. Each root follows exactly one stopped or singleton node for each pole, so these pairs partition all pole/root interactions without duplication. Repeated poles obey the same argument separately. [step 1.1, algebra]

3.1 For a stopped pair put $t=-(z-c)/(c-\mu_j)$. Its targets satisfy $|t|\le2/3$. The finite geometric identity gives $1/(z-\mu_j)=\sum_{h=0}^{p-1}(-(z-c))^h/(c-\mu_j)^{h+1}+t^p/(z-\mu_j)$. Therefore the error in this pair is at most $(2/3)^p|a_j|/|z-\mu_j|$. Summing the partition from step 2.1 gives error at each root at most $(2/3)^p\sum_j|a_j|/|z-\mu_j|\le(2/3)^p A/d$. Choose $p\ge1$ with $(2/3)^p\le\eta/2$; then $p=O(\log(1/\eta))$ and the truncation error is at most $\eta s/2$. Direct singleton interactions have zero truncation error. [A1, step 1.1, step 2.1, algebra]

4.1 Process depths successively, keeping the bounded near list per pole for the next depth and the bounded far list for the current depth. At a fixed depth, store $v_{j,I}=1/(c_I-\mu_j)$ and initially $w_{j,I}=a_jv_{j,I}$ for each far pair. Initialize one target power $t_k=1$ per root. For degrees $h=0,\ldots,p-1$, clear one coefficient $g_I$ per current-depth node, add every current $w_{j,I}$ to its node's $g_I$, and add $g_{I(k)}t_k$ to each target accumulator, where $I(k)$ is its unique ancestor at this depth. Update $w_{j,I}\leftarrow w_{j,I}v_{j,I}$ and $t_k\leftarrow-(z_k-c_{I(k)})t_k$. A node without stopped pairs has coefficient zero. Discard the depth's arrays before advancing; at leaves add all direct pairs. The sums are exactly the polynomials in step 3.1. Each depth/degree uses $O(n+M)$ operations and words by step 2.1; the near/far lists, current coefficients, powers and output arrays occupy $O(n+M)$ words. No array of $p$ moments and no list across all depths is stored. The binary root tree has fewer than $2M$ nodes, so its supplied constants and routing data also occupy $O(M)$ words. Routing costs $O(n\log(2+M)+M)$ operations; fixed-width certified interval arithmetic for each overlapping test has constant scalar cost at its supplied sufficient precision. Total cost is $O((n+M)\log(2+M)p)$, with $O(n+M)$ words independently of $p$. [step 1.1, step 2.1, step 3.1, construct, algebra]

5.1 Fix the certified routing and the exact truncated rational circuit just constructed. Nonleaf far denominators are nonzero by their distance test; leaf denominators are nonzero by [A1]. Its finite exact intermediates and denominators admit the stated $V,D$. Suppose all already formed operands have error at most $e\le\min(1,D/2)$. Addition or subtraction increases error by at most $2e+u$. Multiplication increases it by at most $(2V+1)e+u$. For division, writing exact operands as $x,y$, approximate operands as $x',y'$, and $|y|\ge D$, gives $|y'|\ge D/2$ and $|x'/y'-x/y|\le2e/D+2Ve/D^2$; the final rounding adds $u$. Conjugation and changing signs do not increase error. All these bounds are at most $Ke+u$ for the stated $K\ge2$. Input constant error is at most $u$. Induction over the $T$ gates bounds every operand error by $2uK^{T+1}$: more precisely after $t$ gates the maximum error is at most $u(1+K+\cdots+K^t)\le2uK^t$. The stated choice of $u$ keeps this within $\min(1,D/2,\tau)$, so every division remains defined and the output rounding error is at most $\tau$. Root and pole approximation errors are included as input errors in this recurrence. The certified routing uses exact admissible inequalities, so rounding cannot route a pair outside its valid geometric estimate; the positive overlapping gap in step 1.1 permits finite enclosures, whose sufficient precision can be selected together with this $u$. [A1, A2, step 1.1, step 4.1, algebra]

6.1 Combine the truncation and rounding errors to obtain $\max_k|\widehat y_k-y_k|\le\eta s$. For absolute error $\delta$ apply the construction with $\eta=\delta/s\le1/2$, obtaining $p=O(\log(s/\delta))$. These substitutions do not change the memory argument. The elementary example $y=1/(z-\mu)$ changes by $h/((z-\mu)(z-\mu-h))$ when $\mu$ changes to $\mu+h$, showing why separation-dependent precision cannot be omitted from an absolute-error statement. The count in step 4.1 measures scalar words and operations at the required precision and supplies no bound on their bit lengths or bit cost. [step 3.1, step 4.1, step 5.1, algebra] ∎
