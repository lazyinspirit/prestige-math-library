---
id: fs-all-norms-on-any-real-vector-space-are-equivalent
kind: false-statement
title: "FALSE: all norms on a real vector space are equivalent"
status: published
origin: session
deps: [thm-all-norms-on-rn-are-equivalent, def-norm-and-normed-space, def-equivalent-norms, def-function-space, def-vector-space, def-linear-subspace, lem-linear-subspace-criterion, def-linear-independence, def-linear-basis, def-dimension, cor-independent-set-is-no-larger-than-a-finite-spanning-set, lem-standard-basis-of-f-n, def-linear-combination-and-span, def-finite-sum, lem-finite-sum-laws, lem-finite-set-has-max, def-max-min, thm-of-archimedean, def-canonical-natural, lem-of-naturals-positive, def-countable, def-equinumerous, lem-pigeonhole, lem-of-abs-value, def-abs-value, lem-of-triangle-inequality, thm-induction-principle]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
  audited: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Norm (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Norm_(mathematics)"
    - title: "Archimedean property (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Archimedean_property"
pipeline_run: null
---

## Statement

**False claim:** any two norms on a real vector space are equivalent
([[def-norm-and-normed-space]], [[def-equivalent-norms]]).

What is true is the same statement for $\mathbb{R}^{n}$ with $n$ a natural
number, which is [[thm-all-norms-on-rn-are-equivalent]]. Dropping the hypothesis
that the space is one of the $\mathbb{R}^{n}$ makes the claim false, and the
witness below is built from published material only.

**The witness.** Let $\mathbb{R}^{\mathbb{N}}$ be the function space of all
functions $\mathbb{N} \to \mathbb{R}$ with pointwise operations
([[def-function-space]]), and let

$$V \;:=\; \bigl\{\, v \in \mathbb{R}^{\mathbb{N}} \;:\; \text{there is } K \in \mathbb{N} \text{ with } v_j = 0 \text{ for every } j \ge K \,\bigr\}$$

be the set of **finitely supported** sequences. On $V$ define

$$N_1(v) := \sum_{j<K}|v_j|, \qquad N_\infty(v) := \max\{\, |v_j| : j<K \,\},$$

for any $K \ge 1$ with $v_j = 0$ for $j \ge K$. Both are norms on $V$, both
values are independent of the admissible $K$ chosen, and **no real $C$ satisfies
$N_1 \le C\,N_\infty$ on $V$**.

## Facts & Assumptions

**Given:** The space $\mathbb{R}^{\mathbb{N}}$, the subset $V$, the functions $N_1$ and $N_\infty$ above, and, for $m \ge 1$, the vector $u^{(m)} \in V$ with $u^{(m)}_j = 1$ for $j<m$ and $u^{(m)}_j = 0$ for $j \ge m$. For $i \in \mathbb{N}$, $e_i \in \mathbb{R}^{\mathbb{N}}$ is the function with $e_i(i) = 1$ and $e_i(j) = 0$ for $j \ne i$.

[A1] The refuted claim: any two norms on a real vector space are equivalent.

[L1] $\mathbb{R}^{\mathbb{N}}$ is a vector space over $\mathbb{R}$ with pointwise operations, and a nonempty $W$ with $\lambda u + w \in W$ for all $\lambda$ and all $u,w \in W$ is a linear subspace, hence itself a vector space ([[def-function-space]], [[def-vector-space]], [[def-linear-subspace]], [[lem-linear-subspace-criterion]]).

[L2] Finite sums in a function space are pointwise, for an arbitrary index set: $\bigl(\sum_{l<q}y_l\bigr)(j) = \sum_{l<q}y_l(j)$ ([[lem-standard-basis-of-f-n]] clause 1, stated there for an arbitrary $X$; [[def-linear-combination-and-span]], [[def-finite-sum]]).

[L3] Laws of finite sums ([[lem-finite-sum-laws]], [[def-finite-sum]]): additivity, scaling, splitting, monotonicity, a sum of nonnegative terms is nonnegative, a vanishing sum of nonnegative terms has all terms $0$, and $\sum_{j<m}1 = \iota(m)$.

[L4] Maxima ([[lem-finite-set-has-max]], [[def-max-min]]): a nonempty finite set of reals has a maximum, which belongs to it and bounds it above.

[L5] Absolute value ([[def-abs-value]], [[lem-of-abs-value]], [[lem-of-triangle-inequality]]): $|t| \ge 0$; $|t| = 0$ exactly when $t = 0$; $|st| = |s||t|$; $|s+t| \le |s|+|t|$.

[L6] The Archimedean property: for every real $x$ there is a natural $m \ge 1$ with $x < \iota(m)$ ([[thm-of-archimedean]], [[def-canonical-natural]], [[lem-of-naturals-positive]]).

[L7] Dimension: if $V$ has a spanning set with $q$ elements then every linearly independent subset of $V$ is finite with at most $q$ elements; a finite-dimensional space is one with a finite basis ([[cor-independent-set-is-no-larger-than-a-finite-spanning-set]], [[def-dimension]], [[def-linear-basis]], [[def-linear-independence]], [[def-countable]], [[def-equinumerous]], [[lem-pigeonhole]]).

[L8] Norm equivalence: $M$ and $N$ are equivalent when $cM \le N \le CM$ for some reals $c,C>0$ ([[def-equivalent-norms]]); the norm axioms are (N1), (N2), (N3) ([[def-norm-and-normed-space]]); and induction ([[thm-induction-principle]]).

## Refutation

**Proof technique:** direct.

1.1 $V$ is a linear subspace of $\mathbb{R}^{\mathbb{N}}$, hence a real vector space: it contains $0$, and if $v_j = 0$ for $j \ge K$ and $w_j = 0$ for $j \ge K'$ then $(\lambda v + w)_j = 0$ for $j \ge \max\{K,K'\}$. [L1, L4]

1.2 The values $N_1(v)$ and $N_\infty(v)$ do not depend on the admissible $K$. If $K \le K'$ are both admissible, then splitting the sum gives $\sum_{j<K'}|v_j| = \sum_{j<K}|v_j| + \sum_{j=K}^{K'-1}|v_j|$, and the second part is a sum of zeros; and $\max\{|v_j| : j<K'\} = \max\{|v_j| : j<K\}$ because the extra entries are $0$ and the maximum over $j<K$ is $\ge |v_0| \ge 0$. [L3, L4, L5]

1.3 The hypothesis that fails is finite-dimensionality. For every $p \in \mathbb{N}$ the set $\{\, e_i : i<p \,\}$ is a subset of $V$ with $p$ elements, the map $i \mapsto e_i$ being injective because $e_i(i) = 1 \ne 0 = e_{i'}(i)$ for $i \ne i'$; and it is linearly independent, since for an injective list $l \mapsto e_{i_l}$ into it and scalars $\lambda$, evaluating $\sum_{l<q}\lambda_l e_{i_l} = 0$ at the point $i_{l_0}$ gives $\lambda_{l_0} = 0$, the list $l \mapsto \lambda_l e_{i_l}(i_{l_0})$ vanishing off the single index $l_0$. [L2, L3, L5]

2.1 $N_1$ is a norm on $V$. (N1): $N_1(v) = 0$ forces every $|v_j| = 0$ for $j<K$, hence $v = 0$; and $N_1(0) = 0$. (N2): $\lambda v$ is admissible with the same $K$ and $\sum_{j<K}|\lambda v_j| = |\lambda|\sum_{j<K}|v_j|$. (N3): with $K$ admissible for both $v$ and $w$, $\sum_{j<K}|v_j+w_j| \le \sum_{j<K}|v_j| + \sum_{j<K}|w_j|$ termwise. [step 1.2, L3, L5, L8]

2.2 $N_\infty$ is a norm on $V$. (N1): $N_\infty(v) = 0$ forces $|v_j| \le 0$ and $\ge 0$ for every $j<K$, hence $v = 0$. (N2): $\max\{|\lambda v_j|\} = |\lambda|\max\{|v_j|\}$, since $|\lambda||v_j| \le |\lambda|N_\infty(v)$ for every $j$ with equality at an index attaining the maximum. (N3): $|v_j+w_j| \le |v_j|+|w_j| \le N_\infty(v)+N_\infty(w)$ for every $j<K$, and the maximum on the left is one of those numbers. [step 1.2, L4, L5, L8]

2.3 For $m \ge 1$ the vector $u^{(m)}$ lies in $V$, and $K = m$ is admissible for it; so $N_1(u^{(m)}) = \sum_{j<m}1 = \iota(m)$ and $N_\infty(u^{(m)}) = \max\{1,\dots,1\} = 1$. [step 1.2, L3, L4, L5]

2.4 So $V$ has no finite basis: a basis $B$ with $q$ elements would span $V$, forcing every linearly independent subset to have at most $q$ elements, while step 1.3 produces one with $q+1$. Hence $V$ is infinite-dimensional, and [[thm-all-norms-on-rn-are-equivalent]], which is a statement about $\mathbb{R}^{n}$ for a natural $n$, does not apply to it. [step 1.3, L7]

3.1 Suppose $N_1$ and $N_\infty$ were equivalent, so that in particular $N_1(v) \le C\,N_\infty(v)$ for every $v \in V$ and some real $C > 0$. Then $\iota(m) \le C$ for every $m \ge 1$, by step 2.3. [step 2.3, L8]

4.1 That contradicts the Archimedean property, which supplies a natural $m \ge 1$ with $C < \iota(m)$. So $N_1$ and $N_\infty$ are **not** equivalent, and [A1] is false. [step 3.1, A1, L6]

5.1 The claim [A1] is therefore false, and the true statement in its neighbourhood is [[thm-all-norms-on-rn-are-equivalent]], whose proof spends compactness of the Euclidean unit sphere, a property step 2.4 shows $V$ has no analogue of. [step 4.1, step 2.4, A1] ∎

## Remarks

- **Nothing is claimed here about general infinite-dimensional normed spaces.** This library has not built that theory. What is exhibited is one real vector space carrying two inequivalent norms, which is all that is needed to refute the claim.

- **Where the proof of [[thm-all-norms-on-rn-are-equivalent]] breaks on $V$.** That proof takes the unit sphere of $\lVert\cdot\rVert_2$, which is closed and bounded, and concludes compactness from [[thm-heine-borel-rn]] — a theorem about $\mathbb{R}^{n}$ for a natural $n$, proved by bisecting finitely many coordinates. On $V$ there is no such theorem, and indeed [[fs-heine-borel-holds-in-every-normed-space]] refutes the corresponding claim on the same space.

- **The two norms are the honest analogues of $\lVert\cdot\rVert_1$ and $\lVert\cdot\rVert_\infty$**, and the ratio $N_1/N_\infty$ at $u^{(m)}$ is exactly $\iota(m)$, the same constant that appears in the comparison chain of [[lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric]] on $\mathbb{R}^{m}$. In finite dimensions that constant is a bound; on $V$ it grows without bound, and the Archimedean property is what turns that into a refutation.
