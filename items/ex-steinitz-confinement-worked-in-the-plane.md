---
id: ex-steinitz-confinement-worked-in-the-plane
kind: example
title: "Steinitz's confinement bound realised on an explicit list of six unit vectors in $\\mathbb{R}^{2}$ summing to zero"
status: published
origin: session
deps: [thm-steinitz-polygonal-confinement, def-p-norms-on-rn, def-euclidean-inner-product, def-norm-and-normed-space, lem-p-norms-are-norms-and-induce-the-published-metrics, lem-standard-basis-of-f-n, thm-of-square-roots, lem-of-square-monotone, def-canonical-natural, lem-of-naturals-positive, lem-finite-sum-laws, def-finite-sum, def-linear-combination-and-span, def-injection-surjection-bijection, lem-of-inverse-positive, def-integer-power]
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
    - title: "Levy-Steinitz theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/L%C3%A9vy%E2%80%93Steinitz_theorem"
    - title: "Ernst Steinitz (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Ernst_Steinitz"
pipeline_run: null
---

## Example

Take $n = 2$ and $m = 6$, and let $a := 1/\sqrt{\iota(2)}$, so that
$u := (a,a) \in \mathbb{R}^{2}$ has $\lVert u\rVert_2 = \sqrt{a^{2}+a^{2}} = 1$.
Define $v : 6 \to \mathbb{R}^{2}$ by

$$v_0 := e_0, \quad v_1 := -e_1, \quad v_2 := u, \quad v_3 := -e_0, \quad v_4 := e_1, \quad v_5 := -u ,$$

with $e_0 = (1,0)$ and $e_1 = (0,1)$ ([[lem-standard-basis-of-f-n]]). Every
$\lVert v_i\rVert_2$ is $1$ and $\sum_{i<6}v_i = 0$, so
[[thm-steinitz-polygonal-confinement]] applies and asserts an ordering all of
whose partial sums have norm at most $\iota(2)$.

**A good ordering.** The identity ordering works: the partial sums
$s_k = \sum_{j<k}v_j$ are

$$s_0 = (0,0), \quad s_1 = (1,0), \quad s_2 = (1,-1), \quad s_3 = (1+a,\ a-1), \quad s_4 = (a,\ a-1), \quad s_5 = (a,a), \quad s_6 = (0,0),$$

with norms $0$, $1$, $\sqrt{\iota(2)}$, $\sqrt{\iota(3)}$,
$\sqrt{\iota(2)-\sqrt{\iota(2)}}$, $1$, $0$, each at most $\iota(2)$.

**A bad ordering, which exceeds the bound.** Reordering as
$e_0, e_1, u, -e_0, -e_1, -u$ gives the third partial sum $(1+a,\ 1+a)$, whose
norm squared is $\iota(3)+\iota(2)\sqrt{\iota(2)} > \iota(4)$. So that ordering
has a partial sum of norm strictly greater than $\iota(2)$, and the theorem is
saying something.

**One step of the descending construction.** With $b^{6}$ the identity of $6$ and
$\mu^{6}_j := \iota(4)/\iota(6)$ for $j<6$, the pair $(b^{6},\mu^{6})$ is
admissible at $k = 6$ in the sense of the proof of
[[thm-steinitz-polygonal-confinement]]. At the next stage the feasible set is

$$\Lambda \;=\; \Bigl\{\, \mu \in [0,1]^{6} \;:\; \sum_{j<6}\mu_j v_j = 0,\ \sum_{j<6}\mu_j = \iota(3) \,\Bigr\},$$

and $\mu := \bigl(1,\ \tfrac{1}{\iota(2)},\ 0,\ 1,\ \tfrac{1}{\iota(2)},\ 0\bigr)$
lies in it with exactly **two** coordinates strictly between $0$ and $1$, which
is the least possible. Its support is $\{0,1,3,4\}$, of size $4 \le k-1 = 5$, so
the support bound holds with room; dropping the coordinate $j_0 = 5$ gives the
admissible pair at $k = 5$ with $b^{5} = (0,1,2,3,4)$ and
$\mu^{5} = \bigl(1,\ \tfrac{1}{\iota(2)},\ 0,\ 1,\ \tfrac{1}{\iota(2)}\bigr)$.

## Facts & Assumptions

**Given:** The list $v : 6 \to \mathbb{R}^{2}$ above, with $a = 1/\sqrt{\iota(2)}$ and $u = (a,a)$; the partial sums $s_k = \sum_{j<k}v_j$ of the identity ordering; the vector $\mu = \bigl(1, 1/\iota(2), 0, 1, 1/\iota(2), 0\bigr)$.

[L1] $\lVert y\rVert_2 = \sqrt{y_0^{2}+y_1^{2}}$ on $\mathbb{R}^{2}$, and it is a norm ([[def-p-norms-on-rn]], [[def-euclidean-inner-product]], [[def-norm-and-normed-space]], [[lem-p-norms-are-norms-and-induce-the-published-metrics]]).

[L2] Square roots: $\sqrt{c}$ is the unique nonnegative $s$ with $s^{2} = c$; $\bigl(\sqrt{\iota(2)}\bigr)^{2} = \iota(2)$; and for $c,d \ge 0$, $c \le d$ exactly when $\sqrt{c} \le \sqrt{d}$ ([[thm-of-square-roots]], [[lem-of-square-monotone]], [[def-integer-power]]).

[L3] Canonical naturals are positive and strictly increasing and carry sums to sums and products to products ([[def-canonical-natural]], [[lem-of-naturals-positive]]); inverses of positives are positive ([[lem-of-inverse-positive]]).

[L4] Finite sums in $\mathbb{R}^{2}$ are computed pointwise, with the recursion $\sum_{j<k+1}y_j = \sum_{j<k}y_j + y_k$ ([[lem-standard-basis-of-f-n]] clause 1, [[def-linear-combination-and-span]], [[lem-finite-sum-laws]], [[def-finite-sum]]).

[L5] Steinitz's polygonal confinement theorem, its notion of an admissible pair, and its support bound ([[thm-steinitz-polygonal-confinement]], [[def-injection-surjection-bijection]]).

## Verification

**Proof technique:** direct.

1.1 $a^{2} = 1/\iota(2)$ by [L2], so $\lVert u\rVert_2^{2} = a^{2}+a^{2} = 1$ and $\lVert u\rVert_2 = 1$; also $\lVert e_0\rVert_2 = \lVert e_1\rVert_2 = 1$ and $\lVert -y\rVert_2 = \lVert y\rVert_2$. Hence $\lVert v_i\rVert_2 = 1$ for every $i<6$. [L1, L2, L3]

1.2 $\sum_{i<6}v_i = (e_0 - e_0) + (-e_1 + e_1) + (u - u) = 0$, computing coordinatewise. [L4]

1.3 For the ordering $e_0, e_1, u, -e_0, -e_1, -u$ the third partial sum is $(1+a, 1+a)$, whose norm squared is $\iota(2)(1+a)^{2} = \iota(2) + \iota(2)\iota(2)a + \iota(2)a^{2} = \iota(3) + \iota(2)\sqrt{\iota(2)}$, using $\iota(2)a = \iota(2)/\sqrt{\iota(2)} = \sqrt{\iota(2)}$. [L1, L2, L3]

1.4 The vector $\mu = \bigl(1, 1/\iota(2), 0, 1, 1/\iota(2), 0\bigr)$ lies in $\Lambda$: its values lie in $[0,1]$; $\sum_{j<6}\mu_j = 1 + 1/\iota(2) + 0 + 1 + 1/\iota(2) + 0 = \iota(3)$; and $\sum_{j<6}\mu_j v_j = (v_0 + v_3) + \bigl(1/\iota(2)\bigr)(v_1+v_4) = 0 + 0 = 0$. [L3, L4]

2.1 The partial sums of the identity ordering are as displayed, by the recursion of [L4] applied coordinatewise. [step 1.2, L4]

2.2 Since $\sqrt{\iota(2)} > 1$ and $\iota(2) > 0$, the quantity of step 1.3 exceeds $\iota(3)+\iota(2) = \iota(5) > \iota(4)$, so that partial sum has norm strictly greater than $\iota(2)$: a bad ordering really does break the bound. [step 1.3, L2, L3]

2.3 The pair $(b^{6},\mu^{6})$ with $b^{6}$ the identity of $6$ and $\mu^{6}_j = \iota(4)/\iota(6)$ is admissible at $6$: the values lie in $[0,1]$, $\sum_{j<6}\mu^{6}_j v_j = \bigl(\iota(4)/\iota(6)\bigr)\sum_{j<6}v_j = 0$, and $\sum_{j<6}\mu^{6}_j = \iota(6)\cdot\iota(4)/\iota(6) = \iota(4)$. [step 1.2, L3, L4, L5]

2.4 No element of $\Lambda$ has fewer than two strictly fractional coordinates. If none were fractional, $\mu$ would be a $\{0,1\}$-vector with $\sum_j\mu_j = \iota(3)$, hence with support of size $3$, and $\sum_{j \in \operatorname{supp}}v_j = 0$; the support cannot contain a pair $\{0,3\}$, $\{1,4\}$ or $\{2,5\}$, since the remaining single vector would then have to be $0$ while all six are nonzero, so it contains exactly one index from each pair and the sum is $\pm e_0 \pm e_1 \pm u$, whose second coordinate is $\pm 1 \pm a$ and whose first is $\pm 1 \pm a$, and $|{\pm}1 \pm a| \ne 0$ because $a \ne 1$ (indeed $a^{2} = 1/\iota(2) \ne 1$). If exactly one coordinate were fractional, say with value $t$, then $\sum_j \mu_j$ would be $t$ plus a canonical natural and could not equal $\iota(3)$. [step 1.4, L1, L2, L3]

3.1 Their norms squared are $0$, $1$, $\iota(2)$, $(1+a)^{2}+(a-1)^{2} = \iota(2)+\iota(2)a^{2} = \iota(3)$, $a^{2}+(a-1)^{2} = \iota(2) - \iota(2)a$, $\iota(2)a^{2} = 1$ and $0$. [step 2.1, L1, L2, L3]

3.2 So $\mu$ of step 1.4 is a minimiser, its support is $\{0,1,3,4\}$ of size $4$, and $4 \le 5 = k-1$ at $k = 6$: the support bound of [L5] holds, and a coordinate with value $0$ exists, for instance $j_0 = 5$. [step 1.4, step 2.4, L5]

4.1 Each of these is at most $\iota(4)$: the largest is $\iota(3)$, and $\iota(2)-\iota(2)a \le \iota(2)$ because $a > 0$. So every partial sum of the identity ordering has norm at most $\sqrt{\iota(4)} = \iota(2)$, and the identity ordering realises the bound of [L5]. [step 3.1, L2, L3, L5]

4.2 Deleting position $5$ gives $b^{5} = (0,1,2,3,4)$ and $\mu^{5} = \bigl(1, 1/\iota(2), 0, 1, 1/\iota(2)\bigr)$, with $\sum_{j<5}\mu^{5}_j = \iota(3)$ and $\sum_{j<5}\mu^{5}_j v_{b^{5}(j)} = 0$: an admissible pair at $k = 5$. [step 1.4, step 3.2, L4, L5]

5.1 Steps 4.1, 2.2 and 4.2 give, in turn, an ordering realising the bound, an ordering violating it, and one traced step of the descending construction with its support bound checked. [step 4.1, step 2.2, step 4.2] ∎

## Remarks

- **The bound $\iota(n)$ is not attained here.** The largest partial-sum norm of the good ordering is $\sqrt{\iota(3)}$, comfortably below $\iota(2)$. The theorem asserts existence of an ordering below $\iota(n)$ and claims no sharpness, and this example makes no claim about the optimal constant either.

- **What the bad ordering shows.** Without the theorem there is no reason to expect any ordering to stay bounded independently of $m$: the third partial sum of the bad ordering already exceeds $\iota(2)$, and lists of many unit vectors summing to $0$ can be ordered so that a partial sum has norm of order $m$.

- **Why one step of the construction is traced.** An example that only asserted the bound would say nothing about how it is obtained. The step above exhibits the object the proof actually manipulates — a feasible vector of coefficients with as few fractional coordinates as possible — and checks the support bound $\#\operatorname{supp} \le k-1$ that the descending construction turns on.
