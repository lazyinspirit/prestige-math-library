---
id: thm-steinitz-polygonal-confinement
kind: theorem
title: "Steinitz's polygonal confinement theorem: finitely many vectors of norm at most $1$ summing to $0$ can be ordered so that every partial sum has norm at most $n$"
status: draft
origin: session
deps: [def-series-of-vectors-and-rearrangement, def-euclidean-inner-product, def-p-norms-on-rn, lem-p-norms-are-norms-and-induce-the-published-metrics, thm-cauchy-schwarz-and-the-euclidean-norm, lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric, def-norm-and-normed-space, cor-independent-set-is-no-larger-than-a-finite-spanning-set, def-linear-independence, def-dimension, lem-standard-basis-of-f-n, def-linear-combination-and-span, thm-well-ordering-principle, lem-finite-set-has-max, def-max-min, lem-finite-sum-laws, def-finite-sum, lem-finite-subsets-listable, def-countable, lem-pigeonhole, def-injection-surjection-bijection, def-canonical-natural, lem-of-naturals-positive, def-function-space, def-vector-space, thm-induction-principle, lem-of-inverse-positive, def-equinumerous, lem-vector-space-elementary-consequences]
justified_by: []
aliases: []
landmark: true
proof_strategy: constructive
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Levy-Steinitz theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/L%C3%A9vy%E2%80%93Steinitz_theorem"
    - title: "Ernst Steinitz (Wikipedia), for the 1913 paper in which the rearrangement lemma appears"
      url: "https://en.wikipedia.org/wiki/Ernst_Steinitz"
pipeline_run: null
---

## Statement

Let $n \in \mathbb{N}$ with $n \ge 1$, let $m \in \mathbb{N}$ and let
$v : m \to \mathbb{R}^{n}$ be a finite list of vectors with

$$\lVert v_i\rVert_2 \le 1 \ \text{ for every } i<m, \qquad \sum_{i<m} v_i = 0 .$$

Then there is a bijection $\pi : m \to m$
([[def-injection-surjection-bijection]]) such that

$$\Bigl\lVert \sum_{j<k} v_{\pi(j)} \Bigr\rVert_2 \;\le\; \iota(n) \qquad \text{for every } k \le m,$$

where $\iota$ is the canonical natural of $\mathbb{R}$
([[def-canonical-natural]]) and the sums are the finite sums of the vector space
$\mathbb{R}^{n}$ ([[def-linear-combination-and-span]]).

**The bound depends only on the dimension, not on $m$.** That is the whole
content: the triangle inequality alone gives only $\iota(k)$, which grows with
the number of vectors used.

**Which Steinitz result this is.** This is Steinitz's polygonal confinement
lemma, the rearrangement lemma of his 1913 paper on conditionally convergent
series. It is **not** the Steinitz exchange lemma of linear algebra, which is
published in this library as `thm-steinitz-exchange` and carries the alias
`lem-steinitz`. The two are unrelated results by the same author, and no item on
this page uses the bare alias.

## Facts & Assumptions

**Given:** Naturals $n \ge 1$ and $m$; a list $v : m \to \mathbb{R}^{n}$ with $\lVert v_i\rVert_2 \le 1$ for $i<m$ and $\sum_{i<m}v_i = 0$. Every finite list below is extended by $0$ beyond its range, so that the finite sums of [[def-finite-sum]] apply verbatim; a list into $\mathbb{R}^{n}$ is summed in the vector space $\mathbb{R}^{n}$ ([[def-linear-combination-and-span]]).

[L1] Norm facts: $\lVert\cdot\rVert_2$ is a norm on $\mathbb{R}^{n}$, $\lVert\lambda u\rVert_2 = |\lambda|\lVert u\rVert_2$, $\lVert u\rVert_2 \ge 0$, and the finite triangle inequality $\lVert\sum_{j<p}u_j\rVert_2 \le \sum_{j<p}\lVert u_j\rVert_2$ ([[def-norm-and-normed-space]], [[def-p-norms-on-rn]], [[lem-p-norms-are-norms-and-induce-the-published-metrics]], [[thm-cauchy-schwarz-and-the-euclidean-norm]], [[lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric]] clause 1).

[L2] Laws of finite sums of reals ([[lem-finite-sum-laws]], [[def-finite-sum]]): additivity, scaling, splitting $\sum_{i<r}b_i = \sum_{i<q}b_i + \sum_{i=q}^{r-1}b_i$ for $q \le r$ with $\sum_{i=q}^{r-1}b_i = \sum_{l<r-q}b_{q+l}$, monotonicity, $\sum_{j<p}\lambda = \iota(p)\lambda$, and the fact that a single term of a sum of nonnegative terms is at most the sum.

[L3] Finite sums in $\mathbb{R}^{n}$ are computed pointwise: $\bigl(\sum_{j<p}u_j\bigr)(t) = \sum_{j<p}u_j(t)$ for $t<n$ ([[lem-standard-basis-of-f-n]] clause 1), so every identity between real finite sums yields the corresponding identity between $\mathbb{R}^{n}$-valued ones; and two elements of $\mathbb{R}^{n}$ are equal exactly when all their coordinates are ([[def-function-space]], [[def-vector-space]], [[lem-vector-space-elementary-consequences]]).

[L4] The induction principle ([[thm-induction-principle]]) and the well-ordering principle: every nonempty subset of $\mathbb{N}$ has a least element ([[thm-well-ordering-principle]]).

[L5] A nonempty finite set of reals has a maximum and a minimum, each an element of the set ([[lem-finite-set-has-max]], [[def-max-min]], [[lem-finite-subsets-listable]]).

[L6] Dimension count: $\mathbb{R}^{n+1}$ has a basis with $n+1$ elements ([[lem-standard-basis-of-f-n]] clauses 2 and 4, [[def-dimension]]), so every linearly independent subset of $\mathbb{R}^{n+1}$ is finite with at most $n+1$ elements ([[cor-independent-set-is-no-larger-than-a-finite-spanning-set]], [[def-linear-independence]], [[def-countable]], [[def-equinumerous]], [[lem-pigeonhole]]).

[L7] The canonical natural ([[def-canonical-natural]], [[lem-of-naturals-positive]]): $\iota(0) = 0$ by the recursion clause, $\iota(p+q) = \iota(p)+\iota(q)$ for $p,q \ge 1$ by claim 3 there and trivially when $p = 0$ or $q = 0$, $\iota$ is strictly increasing, and $\iota(p) > 0$ for $p \ge 1$.

[L8] Order arithmetic: $u>0$ gives $u^{-1}>0$; an inequality may be multiplied by a nonnegative real; and trichotomy ([[lem-of-inverse-positive]]).

## Proof

**Proof technique:** constructive.

1.1 **Deleting one entry from a finite sum.** Let $b : \mathbb{N} \to \mathbb{R}$, let $r \ge 1$, let $q<r$, and let $b^{\wedge q}$ be the list with $b^{\wedge q}_i := b_i$ for $i<q$ and $b^{\wedge q}_i := b_{i+1}$ for $q \le i < r-1$. Then $\sum_{i<r}b_i = \sum_{i<r-1}b^{\wedge q}_i + b_q$: splitting the left side at $q$ and again at $q+1$ gives $\sum_{i<q}b_i + b_q + \sum_{l<r-1-q}b_{q+1+l}$, and splitting the right side at $q$ gives $\sum_{i<q}b_i + \sum_{l<r-1-q}b_{q+l+1}$, and the two agree. [L2]

1.2 **The easy case $m \le n$.** Take $\pi$ to be the identity of $m$, a bijection. For $k \le m$ the finite triangle inequality and $\lVert v_j\rVert_2 \le 1$ give $\lVert\sum_{j<k}v_j\rVert_2 \le \sum_{j<k}\lVert v_j\rVert_2 \le \sum_{j<k}1 = \iota(k) \le \iota(n)$, since $k \le m \le n$ and $\iota$ is increasing. So the theorem holds in this case, and we assume $m>n$ from here on. [construct, L1, L2, L7]

1.3 **Stage data.** For $n \le k \le m$ call a pair $(b,\mu)$ **admissible at $k$** when $b : k \to m$ is injective, $\mu : \mathbb{N} \to \mathbb{R}$ vanishes at every $j \ge k$, satisfies $0 \le \mu_j \le 1$ for $j<k$, and satisfies $\sum_{j<k}\mu_j v_{b(j)} = 0$ and $\sum_{j<k}\mu_j = \iota(k-n)$. [construct]

1.4 **Stage $m$ is admissible.** Take $b^{m} :=$ the identity of $m$ and $\mu^{m}_j := \iota(m-n)/\iota(m)$ for $j<m$, $\mu^m_j := 0$ for $j \ge m$; here $\iota(m) > 0$ because $m > n \ge 1$, and $0 \le \iota(m-n) \le \iota(m)$ gives $0 \le \mu^m_j \le 1$. Then $\sum_{j<m}\mu^m_j v_j = \bigl(\iota(m-n)/\iota(m)\bigr)\sum_{j<m}v_j = 0$ and $\sum_{j<m}\mu^m_j = \iota(m)\cdot\iota(m-n)/\iota(m) = \iota(m-n)$. [construct, L2, L7, L8]

1.5 **The estimate for $k<n$, for an arbitrary ordering.** For every bijection $\rho : m \to m$ and every $k<n$, the finite triangle inequality gives $\bigl\lVert\sum_{j<k}v_{\rho(j)}\bigr\rVert_2 \le \sum_{j<k}\lVert v_{\rho(j)}\rVert_2 \le \sum_{j<k}1 = \iota(k) \le \iota(n)$. [L1, L2, L7]

2.1 **The reindexing identity.** For every $k \in \mathbb{N}$, every $r \in \mathbb{N}$, every injective $f : r \to k$ and every $c : \mathbb{N} \to \mathbb{R}$ vanishing at every $j<k$ outside the image of $f$, one has $\sum_{j<k}c_j = \sum_{i<r}c_{f(i)}$. This is proved by induction on $k$, with $r$, $f$ and $c$ universally quantified. At $k=0$ the only injective $f : r \to 0$ has $r = 0$ and both sums are empty. At $k+1$, write $\sum_{j<k+1}c_j = \sum_{j<k}c_j + c_k$: if $k$ is not in the image of $f$ then $c_k = 0$ and $f$ maps into $k$, so the inductive hypothesis applies directly; and if $k = f(q)$ for the unique such $q<r$, then $r \ge 1$ and the list $g := f^{\wedge q}$ of step 1.1 is an injective map $r-1 \to k$ off whose image $c$ vanishes on $\{j : j<k\}$, so the inductive hypothesis gives $\sum_{j<k}c_j = \sum_{i<r-1}c_{g(i)}$, while step 1.1 applied to $b_i := c_{f(i)}$ gives $\sum_{i<r}c_{f(i)} = \sum_{i<r-1}c_{g(i)} + c_{f(q)}$; adding $c_k = c_{f(q)}$ to the first identity yields the claim. [step 1.1, L2, L4]

2.2 **The feasible set at $k-1$ is nonempty.** Let $(b,\mu)$ be admissible at $k$ with $n<k\le m$, and let $\Lambda$ be the set of all $\mu' : \mathbb{N} \to \mathbb{R}$ vanishing at every $j\ge k$, with $0 \le \mu'_j \le 1$ for $j<k$, $\sum_{j<k}\mu'_j v_{b(j)} = 0$ and $\sum_{j<k}\mu'_j = \iota(k-1-n)$. The scalar $\rho := \iota(k-1-n)/\iota(k-n)$ is defined and lies in $[0,1]$, since $\iota(k-n)>0$ and $0 \le \iota(k-1-n) \le \iota(k-n)$; and $\rho\mu$ lies in $\Lambda$. [step 1.3, L2, L7, L8]

3.1 Both identities hold verbatim for lists with values in $\mathbb{R}^{n}$, since a vector identity is the conjunction of its $n$ coordinate identities and the coordinates of a vector finite sum are the real finite sums of the coordinates. [step 1.1, step 2.1, L3]

3.2 **The minimal number of fractional coordinates.** Call $\mu' \in \Lambda$ **$r$-simple** when there is an injective $f : r \to k$ with $\mu'_j \in \{0,1\}$ for every $j<k$ outside the image of $f$. The set $R := \{\, r \in \mathbb{N} : \text{some } \mu' \in \Lambda \text{ is } r\text{-simple} \,\}$ contains $k$, taking $f$ to be the identity of $k$, so $R$ is a nonempty set of naturals and has a least element $r_0$; fix $\mu \in \Lambda$ and an injective $f : r_0 \to k$ witnessing it. [step 2.2, L4]

4.1 **Two consequences used repeatedly.** Taking $k = r$ and $f$ a bijection of $k$ in step 2.1 gives $\sum_{j<k}c_{f(j)} = \sum_{j<k}c_j$ for every $c$; and taking $c$ to vanish off the image of an injective $f : r \to k$ gives $\sum_{j<k}c_j = \sum_{i<r}c_{f(i)}$, both in $\mathbb{R}$ and in $\mathbb{R}^{n}$. [step 2.1, step 3.1]

4.2 **Every marked coordinate is strictly fractional.** For every $i<r_0$ one has $0 < \mu_{f(i)} < 1$: otherwise $\mu_{f(i)} \in \{0,1\}$, and then $f^{\wedge i}$, an injective map $r_0-1 \to k$ off whose image $\mu$ takes values in $\{0,1\}$, would witness that $\mu$ is $(r_0-1)$-simple, contradicting minimality of $r_0$. [step 1.1, step 3.2]

4.3 **Suppose $r_0 \ge n+2$, towards a contradiction.** Define $w : r_0 \to \mathbb{R}^{n+1}$ by $w_i(t) := \bigl(v_{b(f(i))}\bigr)(t)$ for $t<n$ and $w_i(n) := 1$. [step 3.2]

5.1 **The list $w$ is linearly dependent:** there is $\lambda : r_0 \to \mathbb{R}$, not identically $0$, with $\sum_{i<r_0}\lambda_i w_i = 0$. If $w$ is not injective, say $w_{i_1} = w_{i_2}$ with $i_1 \ne i_2$, take $\lambda_{i_1} := 1$, $\lambda_{i_2} := -1$ and $\lambda_i := 0$ otherwise; the list $i \mapsto \lambda_i w_i$ then vanishes off $\{i_1,i_2\}$ and sums to $w_{i_1} - w_{i_2} = 0$ by step 4.1. If $w$ is injective, its image is a subset of $\mathbb{R}^{n+1}$ equinumerous with $r_0 \ge n+2$, hence not linearly independent by [L6]; so some injective list $h : p \to \operatorname{im}(w)$ is linearly dependent, giving $\nu : p \to \mathbb{R}$ not identically $0$ with $\sum_{l<p}\nu_l h(l) = 0$, and setting $\lambda_{i} := \nu_l$ when $w_i = h(l)$ and $\lambda_i := 0$ otherwise turns that into $\sum_{i<r_0}\lambda_i w_i = 0$ by step 4.1, the list $i \mapsto \lambda_i w_i$ vanishing off the image of the injective map $l \mapsto$ the unique $i$ with $w_i = h(l)$. [step 4.3, L6]

5.2 **The step length.** Let $i_0$ be the least $i<r_0$ with $\lambda_i \ne 0$, which exists because $\lambda$ is not identically $0$. Define $s : r_0 \to \mathbb{R}$ by $s_i := (1-\mu_{f(i)})/\lambda_i$ if $\lambda_i>0$, by $s_i := \mu_{f(i)}/(-\lambda_i)$ if $\lambda_i<0$, and by $s_i := s_{i_0}$ if $\lambda_i = 0$; every $s_i$ is a positive real by step 4.2. Put $t^{*} := \min\{s_0,\dots,s_{r_0-1}\}$, a minimum over a nonempty finite set of reals, so $t^{*}>0$ and $t^{*} = s_{i}$ for some $i<r_0$; choosing that $i$ if $\lambda_i \ne 0$ and $i_0$ otherwise, there is $i^{*}<r_0$ with $\lambda_{i^{*}} \ne 0$ and $t^{*} = s_{i^{*}}$. [step 4.2, L4, L5, L8]

6.1 **Reading the coordinates of step 5.1.** The coordinate $n$ gives $\sum_{i<r_0}\lambda_i = 0$, and the coordinates $t<n$ give $\sum_{i<r_0}\lambda_i v_{b(f(i))} = 0$ in $\mathbb{R}^{n}$. [step 4.3, step 5.1, L3]

6.2 **The moved point.** Define $\mu' : \mathbb{N} \to \mathbb{R}$ by $\mu'_j := \mu_j + t^{*}\lambda_i$ if $j = f(i)$ for the unique $i<r_0$ with that property, and $\mu'_j := \mu_j$ otherwise. Then $0 \le \mu'_j \le 1$ for every $j<k$: outside the image of $f$ nothing changes; at $j = f(i)$ with $\lambda_i>0$ one has $\mu_{f(i)} < \mu'_j \le \mu_{f(i)} + s_i\lambda_i = 1$; with $\lambda_i<0$ one has $0 = \mu_{f(i)} + s_i\lambda_i \le \mu'_j < \mu_{f(i)}$; and with $\lambda_i = 0$ the value is unchanged. [step 4.2, step 5.2, L8]

7.1 **The moved point is feasible.** The list $j \mapsto \mu'_j - \mu_j$ vanishes at every $j<k$ off the image of $f$ and takes the value $t^{*}\lambda_i$ at $f(i)$, so step 4.1 gives $\sum_{j<k}(\mu'_j-\mu_j) = \sum_{i<r_0}t^{*}\lambda_i = t^{*}\cdot 0 = 0$; likewise the $\mathbb{R}^{n}$-valued list $j \mapsto (\mu'_j-\mu_j)v_{b(j)}$ vanishes off that image and takes the value $t^{*}\lambda_i v_{b(f(i))}$ at $f(i)$, so $\sum_{j<k}(\mu'_j-\mu_j)v_{b(j)} = t^{*}\sum_{i<r_0}\lambda_i v_{b(f(i))} = 0$. Hence $\sum_{j<k}\mu'_j = \iota(k-1-n)$ and $\sum_{j<k}\mu'_j v_{b(j)} = 0$, so $\mu' \in \Lambda$. [step 4.1, step 6.1, step 6.2, L2, L3]

8.1 **The contradiction.** By step 5.2, $\mu'_{f(i^{*})} = \mu_{f(i^{*})} + t^{*}\lambda_{i^{*}} \in \{0,1\}$. So $f^{\wedge i^{*}}$, an injective map $r_0-1 \to k$, witnesses that $\mu'$ is $(r_0-1)$-simple: off the image of $f$ the value $\mu'_j = \mu_j$ lies in $\{0,1\}$, and at $f(i^{*})$ it lies in $\{0,1\}$ as just shown. This contradicts the minimality of $r_0$, so the supposition of step 4.3 is untenable and $r_0 \le n+1$. [step 1.1, step 3.2, step 5.2, step 6.2, step 7.1]

9.1 **The support bound.** There is $j_0<k$ with $\mu_{j_0} = 0$. Suppose instead that $\mu_j>0$ for every $j<k$; then off the image of $f$ the value $\mu_j$ lies in $\{0,1\}$ and is positive, hence equals $1$. Put $\nu_j := 1-\mu_j$ for $j<k$ and $\nu_j := 0$ for $j \ge k$, so $\nu$ vanishes at every $j<k$ off the image of $f$ and satisfies $0<\nu_{f(i)}<1$ for $i<r_0$ by step 4.2, while $\sum_{j<k}\nu_j = \iota(k)-\iota(k-1-n) = \iota(n+1)$ by [L7]. [step 4.2, step 8.1, L2, L7]

10.1 By step 4.1, $\sum_{j<k}\nu_j = \sum_{i<r_0}\nu_{f(i)}$. If $r_0 = 0$ this is the empty sum $0$, contradicting $\iota(n+1)>0$. If $r_0 \ge 1$ then every term of $\sum_{i<r_0}(1-\nu_{f(i)})$ is positive, so that sum is at least its term at index $0$ and hence positive, whence $\sum_{i<r_0}\nu_{f(i)} = \iota(r_0) - \sum_{i<r_0}(1-\nu_{f(i)}) < \iota(r_0) \le \iota(n+1)$ using step 8.1. Either way $\iota(n+1) < \iota(n+1)$ or $\iota(n+1) = 0$, both impossible; so some $\mu_{j_0}$ is $0$. [step 4.1, step 8.1, step 9.1, L2, L7, L8]

11.1 **Descending one stage.** With $j_0$ as in step 9.1, put $b' := b^{\wedge j_0} : k-1 \to m$ and $\mu'' := \mu^{\wedge j_0}$, extended by $0$ beyond $k-1$. Then $b'$ is injective with image $\operatorname{im}(b)\setminus\{b(j_0)\}$, $0 \le \mu''_j \le 1$ for $j<k-1$, and by step 1.1 in both its real and its vector form, $\sum_{j<k-1}\mu''_j = \sum_{j<k}\mu_j - \mu_{j_0} = \iota(k-1-n)$ and $\sum_{j<k-1}\mu''_j v_{b'(j)} = \sum_{j<k}\mu_j v_{b(j)} - \mu_{j_0}v_{b(j_0)} = 0$. So $(b',\mu'')$ is admissible at $k-1$. [construct, step 1.1, step 3.1, step 3.2, step 10.1]

12.1 **Iterating.** Starting from the admissible pair of step 1.4 at $k = m$ and applying step 11.1 once for each $k$ from $m$ down to $n+1$, one obtains admissible pairs $(b^{k},\mu^{k})$ for every $k$ with $n \le k \le m$, with $\operatorname{im}(b^{k-1}) \subseteq \operatorname{im}(b^{k})$ and $\operatorname{im}(b^{k})\setminus\operatorname{im}(b^{k-1})$ a single element. This is a recursion of length $m-n$, each stage determined by the previous one together with finitely many determinations (a least natural, a minimum of a finite set of reals), so no choice principle is involved. [construct, step 1.4, step 11.1, L4, L5]

13.1 **The ordering.** Define $\pi : m \to m$ by $\pi(j) := b^{n}(j)$ for $j<n$ and, for each $k$ with $n<k\le m$, $\pi(k-1) := $ the unique element of $\operatorname{im}(b^{k})\setminus\operatorname{im}(b^{k-1})$. The images $\operatorname{im}(b^{k})$ increase from $\operatorname{im}(b^{n})$, of size $n$, to $\operatorname{im}(b^{m}) = m$, gaining exactly one element at each stage, so $\pi$ is injective with image $m$, that is a bijection, and for every $k$ with $n \le k \le m$ the set $\{\pi(j) : j<k\}$ is exactly $\operatorname{im}(b^{k})$. [construct, step 12.1, L4, L6]

14.1 **Both enumerations give the same partial sum.** Fix $k$ with $n \le k \le m$ and let $c : \mathbb{N} \to \mathbb{R}^{n}$ be $c_i := v_i$ for $i \in \operatorname{im}(b^{k})$ and $c_i := 0$ otherwise. Then $c$ vanishes at every $i<m$ off the image of the injective list $j \mapsto \pi(j)$ on $k$, and also off the image of $b^{k}$, so step 4.1 applied twice gives $\sum_{j<k}v_{\pi(j)} = \sum_{i<m}c_i = \sum_{j<k}v_{b^{k}(j)}$. [step 4.1, step 13.1]

15.1 **The estimate for $n \le k \le m$.** Since $\sum_{j<k}\mu^{k}_j v_{b^{k}(j)} = 0$, additivity gives $\sum_{j<k}v_{b^{k}(j)} = \sum_{j<k}\bigl(1-\mu^{k}_j\bigr)v_{b^{k}(j)}$; each coefficient $1-\mu^{k}_j$ is nonnegative, so the finite triangle inequality and $\lVert v_i\rVert_2 \le 1$ give $\bigl\lVert\sum_{j<k}v_{b^{k}(j)}\bigr\rVert_2 \le \sum_{j<k}\bigl(1-\mu^{k}_j\bigr)\lVert v_{b^{k}(j)}\rVert_2 \le \sum_{j<k}\bigl(1-\mu^{k}_j\bigr) = \iota(k)-\iota(k-n) = \iota(n)$. [step 12.1, step 14.1, L1, L2, L7]

16.1 By steps 14.1 and 15.1 the bound $\lVert\sum_{j<k}v_{\pi(j)}\rVert_2 \le \iota(n)$ holds for $n \le k \le m$, and by step 1.5 it holds for $k<n$; together with the case $m \le n$ of step 1.2, the required bijection $\pi$ has been exhibited in every case. [step 1.2, step 13.1, step 14.1, step 15.1, step 1.5, discharge-construct] ∎

## Remarks

- **The support bound of step 6 is the step most write-ups omit.** From $r_0 \le n+1$ one gets only that the support of $\mu$ has at most $(k-1-n)+(n+1) = k$ elements, which is no information at all. What rules out equality is that the fractional coordinates would then have to sum to $0$ while each of them is strictly positive; that is exactly the computation in steps 6.1 and 6.2, and without it the descending construction does not start.

- **Where the dimension enters, and only there.** The single place the number $n$ is used is step 5.1, where $n+2$ vectors in $\mathbb{R}^{n+1}$ are linearly dependent. The extra coordinate constantly $1$ is what converts the constraint $\sum_i \lambda_i = 0$ into a linear condition, so that one dependence delivers both identities of step 6.1 at once.

- **No choice principle is used.** The construction is a recursion of length $m-n$; at each stage the objects produced are a least natural number ([[thm-well-ordering-principle]]) and a minimum of a nonempty finite set of reals ([[lem-finite-set-has-max]]), both determined rather than selected, and the pair $(\mu, f)$ of step 3.2 is a single selection from a nonempty set at each of finitely many stages.

- **The reindexing identity of step 2.1 is proved here rather than cited**, because this library has no lemma on sums over a finite index set at this point in the reading order: [[lem-finite-sum-laws]] is stated for sums $\sum_{k<n}a_k$ over an initial segment of $\mathbb{N}$ and carries no invariance clause. Step 2.1 contains permutation invariance as the special case $r = k$ with $f$ a bijection.

- **The constant $\iota(n)$ is not claimed to be optimal.** What is proved is that some ordering keeps every partial sum inside the ball of radius $\iota(n)$; the companion page realises the bound on an explicit list of six unit vectors in $\mathbb{R}^{2}$ and exhibits an ordering that violates it, so the theorem is seen to say something.
