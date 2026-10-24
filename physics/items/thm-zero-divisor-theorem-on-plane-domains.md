---
id: thm-zero-divisor-theorem-on-plane-domains
kind: theorem
title: "Every locally finite effective divisor on a plane domain is a holomorphic zero divisor"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-weierstrass-elementary-factor,
       lem-unit-disc-estimate-for-weierstrass-elementary-factors,
       thm-normal-convergence-of-holomorphic-products,
       def-order-of-zero-holomorphic-function,
       thm-heine-borel-rn,
       thm-extreme-value-metric,
       lem-distance-to-set-is-lipschitz,
       thm-complex-exponential-is-entire-with-derivative-itself,
       thm-complex-exponential-addition-and-real-extension,
       thm-algebra-of-complex-derivatives,
       thm-chain-rule-for-complex-derivatives,
       thm-rationals-countable,
       thm-n-cross-n-countable,
       thm-product-of-countable,
       lem-subset-of-countable,
       lem-rat-embeds-dense]
justified_by: []
forward_refs: []
aliases: []
landmark: false
proof_strategy: constructive
verification:
  precheck: pass
  repair: research/frontier-38-owner-30-step6-zero-divisor-supplier-repair.json
sources:
  scraped: []
  references:
    - title: "J. Lebl, Guide to Cultivating Complex Analysis, §8.2.3, Theorem 8.2.7, pp. 205–206; Lemma 8.2.3 and Theorem 8.2.4, pp. 200–201"
      url: "https://www.jirka.org/ca/ca.pdf"
    - title: "M. Weber, Complex Analysis, §3.3, Theorem 3.3.3, pp. 38–39 (entire-function case)"
      url: "https://scholarworks.iu.edu/dspace/bitstreams/0a384151-7cd5-460f-a06a-b6be76707024/download"
pipeline_run: null
---

## Statement

Let $\Omega\subseteq\mathbb C$ be a plane domain, let $A\subseteq\Omega$,
and assign a nonnegative integer $m(a)$ to each $a\in A$. Suppose the
positive support $S:=\{a\in A:m(a)>0\}$ is locally finite in $\Omega$:
every compact subset of $\Omega$ meets $S$ in finitely many points.
Then there is a holomorphic function $F\not\equiv0$ on $\Omega$ with
$\operatorname{ord}_a(F)=m(a)$ for each $a\in A$ and with no zeros in
$\Omega\setminus S$. In particular, $m(a)=0$ means $F(a)\ne0$.

This is the realization of the effective divisor $\sum_{a\in S}m(a)[a]$.
Its support has no accumulation point in $\Omega$; isolation of the
points of $S$ alone is insufficient. Empty and finite supports are included.

## Facts & Assumptions

**Given:** A plane domain $\Omega$, a set $A\subseteq\Omega$, and finite nonnegative integer multiplicities whose positive support $S$ satisfies the stated local finiteness condition.

[L1] The elementary factors are $E_p(w)=(1-w)\exp(w+w^2/2+\cdots+w^p/p)$, with $E_0(w)=1-w$ ([[def-weierstrass-elementary-factor]]). The exponential is entire and satisfies $\exp(u)\exp(-u)=\exp(0)=1$, so every $E_p$ has exactly one zero, simple, at $w=1$ ([[thm-complex-exponential-is-entire-with-derivative-itself]], [[thm-complex-exponential-addition-and-real-extension]]). Finite products, quotients with nonzero denominator, and compositions of holomorphic functions are holomorphic ([[thm-algebra-of-complex-derivatives]], [[thm-chain-rule-for-complex-derivatives]]).

[L2] For $|w|\le1$, $|1-E_p(w)|\le|w|^{p+1}$ ([[lem-unit-disc-estimate-for-weierstrass-elementary-factors]]).

[L3] A holomorphic product whose factors are not identically zero and whose deviations from $1$ are summable uniformly on each compact set after deleting finitely many zero-contributing factors has a holomorphic limit with exactly the factor zeros and their multiplicities ([[thm-normal-convergence-of-holomorphic-products]]).

[L4] Closed bounded sets in $\mathbb C=\mathbb R^2$ are compact, and continuous real functions on nonempty compact sets attain their minima ([[thm-heine-borel-rn]], [[thm-extreme-value-metric]]). Distance to a fixed nonempty set is $1$-Lipschitz ([[lem-distance-to-set-is-lipschitz]]).

[L5] The order at a point where a holomorphic function is nonzero is $0$ ([[def-order-of-zero-holomorphic-function]]).

[L6] The rationals are countable and dense in the reals, finite products of countable sets are countable, integer pairs have an explicit integer code, and an infinite subset of the nonnegative integers is enumerated by successively taking its least unused member; these statements use no Choice ([[thm-rationals-countable]], [[lem-rat-embeds-dense]], [[thm-product-of-countable]], [[thm-n-cross-n-countable]], [[lem-subset-of-countable]]).

## Proof

**Proof technique:** constructive.

1.1 Every point of $\Omega$ has a closed disc neighbourhood contained in $\Omega$, so local finiteness makes each point of $S$ isolated and prevents any accumulation point of $S$ in $\Omega$. By [L6], enumerate all open discs with rational centre coordinates and positive rational radius in a fixed order. For each $a\in S$, let $k(a)$ be the least index of such a disc containing $a$ and meeting $S$ only at $a$; isolation and density of the rationals ensure its existence. Distinct points have distinct indices. Thus $S$ injects into the nonnegative integers. By [L6], encode the pairs $(k(a),r)$ with $1\le r\le m(a)$ by a fixed pairing of integers, and list the resulting codes in increasing order. This gives the points of $S$ repeated exactly $m(a)$ times, without a choice principle. A compact subset contains only finitely many entries of this list. If the list is finite, $F(z)=\prod_{a\in S}(z-a)^{m(a)}$ works, with empty product $1$. Henceforth assume it is infinite. [given, L4, L6, construct, cases]

2.1 If $C:=\mathbb C\setminus\Omega$ is empty, put all entries into a list $(c_j)$ and leave the list $(b_j)$ empty. If $C$ is nonempty, set $\delta(z):=\operatorname{dist}(z,C)$ and split the repeated list, preserving its order, according to $D:=\{z\in\Omega:\delta(z)<1/(|z|+1)\}$: $(b_j)$ contains the entries in $D$, and $(c_j)$ those outside $D$. Either sublist may be empty, finite, or infinite. The closedness of $C$ and openness of $\Omega$ imply $\delta(z)>0$ on $\Omega$, and [L4] makes $\delta$ continuous. [step 1.1, L4, construct, cases]

3.1 Suppose $(b_j)$ is infinite. For each $\varepsilon>0$, an entry $b_j$ with $\delta(b_j)\ge\varepsilon$ satisfies $|b_j|<1/\varepsilon$. Such entries lie in the closed bounded set $\{z:|z|\le1/\varepsilon,\ \delta(z)\ge\varepsilon\}$, contained in $\Omega$ and compact by [L4]. Step 1.1 makes their number finite. Thus $\delta(b_j)\to0$. To specify a nearest boundary point without simultaneous choices, consider the compact nonempty set $C\cap\overline B(b_j,\delta(b_j)+1)$. The minimum of $|b_j-p|$ on it is $\delta(b_j)$: points outside it have distance greater than $\delta(b_j)+1$, and the definition of the infimum supplies points inside it with distance arbitrarily close to $\delta(b_j)$. The nearest-point set is therefore nonempty compact. First minimize $\operatorname{Re}p$ on that set, then minimize $\operatorname{Im}p$ on the minimizers. This specifies a unique $p_j\in C$ with $|b_j-p_j|=\delta(b_j)$. [step 1.1, step 2.1, L4, construct]

3.2 Suppose $(c_j)$ is infinite. If $C=\varnothing$, every closed disc is compact in $\Omega=\mathbb C$, so step 1.1 shows that only finitely many entries have modulus at most any fixed $R$. If $C\ne\varnothing$, entries with $|c_j|\le R$ satisfy $\delta(c_j)\ge1/(R+1)$; they lie in the compact subset $\{z:|z|\le R,\ \delta(z)\ge1/(R+1)\}$ of $\Omega$, which again contains only finitely many entries. In either case $|c_j|\to\infty$. Let $m_0$ be the finite number of zero entries and enumerate the nonzero entries as $(d_j)$. Then $|d_j|\to\infty$. [step 1.1, step 2.1, L4, construct, cases]

4.1 For infinite $(b_j)$ define $Q_j(z):=E_j((b_j-p_j)/(z-p_j))$. Its denominator is nonzero on $\Omega$, so [L1] makes it holomorphic. Its only zero is $b_j$, and that zero is simple because $1-(b_j-p_j)/(z-p_j)=(z-b_j)/(z-p_j)$ and the exponential factor never vanishes. For a nonempty compact $K\subseteq\Omega$, [L4] gives $d_K:=\min_{z\in K}\delta(z)>0$. Since $p_j\in C$, $\sup_{z\in K}|(b_j-p_j)/(z-p_j)|\le\delta(b_j)/d_K\le1/2$ for all sufficiently large $j$. These tail factors have no zeros on $K$, and [L2] gives $\sup_K|1-Q_j|\le2^{-j-1}$. Hence [L3] yields a holomorphic function $F_1:=\prod_{j\ge1}Q_j$ with precisely the listed $b_j$ zeros and their multiplicities. If $(b_j)$ is finite, take its finite polynomial instead, and if it is empty take $F_1=1$. [step 3.1, L1, L2, L3, L4, construct, cases]

4.2 On each disc $|z|\le R$, eventually $|d_j|>2R$, so $E_j(z/d_j)$ is zero-free there and [L2] gives $\sup_{|z|\le R}|1-E_j(z/d_j)|\le2^{-j-1}$. By [L1] and [L3], $H(z):=\prod_{j\ge1}E_j(z/d_j)$ is entire with exactly the listed nonzero zeros and their multiplicities; $H(0)=1$ since every partial product equals $1$ there. Thus $F_2(z):=z^{m_0}H(z)$ contributes the listed $c_j$ zeros, with $z^0=1$ contributing no zero at $0$. If $(c_j)$ is finite, take its finite polynomial instead, and if it is empty take $F_2=1$. [step 3.2, L1, L2, L3, construct, cases]

5.1 Set $F:=F_1F_2$. It is holomorphic by [L1], and steps 4.1 and 4.2 show that its zero set is exactly $S$, with order $m(a)$ at each $a\in S$: at a given point the orders of the finitely many contributing factors add and the remaining local product is nonzero. Every point of $\Omega$ has a disc meeting $S$ in finitely many points, and that disc contains a point outside this finite set, so $F$ is not identically zero. It is nonzero at each point of $\Omega\setminus S$, and [L5] gives order $0$ there, including each $a\in A$ with $m(a)=0$. This proves the stated realization. [step 1.1, step 4.1, step 4.2, L1, L5, discharge-construct] ∎
