---
id: thm-cantor-set-properties
kind: theorem
title: "The Cantor set is compact, perfect, uncountable, nowhere dense and of measure zero, and it contains no interval of positive length, so its only nonempty connected subsets are single points"
status: published
origin: session
deps: [def-cantor-set, thm-cantor-set-ternary-description, thm-heine-borel-characterisation-r, def-open-cover-r, def-perfect-set-r, thm-perfect-set-uncountable-r, def-nowhere-dense-meager, def-measure-zero-and-content-zero, lem-content-zero-implies-null, lem-nondegenerate-interval-is-not-null, def-connected-r, thm-connected-subsets-of-r-are-intervals, thm-open-set-algebra-r, def-countable, def-interval, def-integer-power, lem-power-laws, def-open-and-closed-in-r, def-limit-point-r, def-neighbourhood-r, def-interior-closure-boundary-r, thm-closure-characterisations-r, thm-induction-principle, def-finite-sum, lem-finite-sum-laws, lem-series-linearity, def-series, lem-geometric-sequence-null, def-real-limit, lem-of-abs-value, def-complete-ordered-field, def-ordered-field, cor-of-one-positive, lem-of-add-order, lem-of-sign-rules]
justified_by: []
aliases: []
landmark: true
short: "$C$ compact, perfect, uncountable, null"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-27
  audited: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Cantor set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cantor_set"
    - title: "Perfect set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Perfect_set"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2 (§2.44)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Statement

Let $C$ be the Cantor set ([[def-cantor-set]]). Then:

1. $C$ is closed and bounded, hence compact
   ([[thm-heine-borel-characterisation-r]], [[def-open-cover-r]]);
2. $C$ has content zero, and therefore measure zero
   ([[def-measure-zero-and-content-zero]]);
3. $C$ is perfect ([[def-perfect-set-r]]);
4. $C$ is uncountable ([[def-countable]]);
5. $C$ contains no interval with two distinct endpoints, and is nowhere dense
   ([[def-nowhere-dense-meager]]);
6. every nonempty connected subset of $C$ ([[def-connected-r]]) is a single
   point.

Claim 6 is what the phrase "totally disconnected" names elsewhere; that phrase
is **not** used here, because no definition of total disconnectedness exists at
this point in the reading order. What is proved is exactly the displayed
statement, and it is obtained from claim 5 through
[[thm-connected-subsets-of-r-are-intervals]].

## Facts & Assumptions

**Given:** The sets $C_n$ and $C$ of [[def-cantor-set]], and the map $\Phi$ and the set $D$ of $\{0,2\}$-valued sequences of [[thm-cantor-set-ternary-description]].

[L1] $C_0 = [0,1]$, $C_{n+1} = \tfrac13 C_n \cup (\tfrac23 + \tfrac13 C_n)$, $C = \bigcap_n C_n \subseteq C_m$ for every $m$, every $C_n \subseteq [0,1]$, $0 \in C$, and $3^{-n} = (3^{-1})^n$ ([[def-cantor-set]], [[def-interval]], [[def-integer-power]], [[lem-power-laws]]).

[L2] $\Phi$ is a bijection from $D$ onto $C$, $\Phi(a) = \sum_{k \ge 0} a_k 3^{-k-1}$, and convergent series add and scale termwise ([[thm-cantor-set-ternary-description]], [[lem-series-linearity]], [[def-series]]).

[L3] $[c,d]$ is a closed set and a bounded interval, $(c,d)$ is open, $N_\varepsilon(x) = (x-\varepsilon, x+\varepsilon)$, and every open set contains a neighbourhood of each of its points ([[def-interval]], [[def-open-and-closed-in-r]], [[def-neighbourhood-r]]).

[L4] Finite unions of closed sets are closed, and an intersection of a nonempty family of closed sets is closed ([[thm-open-set-algebra-r]]).

[L5] A subset of $\mathbb{R}$ is compact exactly when it is closed and bounded ([[thm-heine-borel-characterisation-r]], [[def-open-cover-r]]).

[L6] Content zero and measure zero as in [[def-measure-zero-and-content-zero]]; a set of content zero is null ([[lem-content-zero-implies-null]]); no null set contains an interval $[u,v]$ with $u < v$ ([[lem-nondegenerate-interval-is-not-null]]).

[L7] $P$ is perfect when it is closed and no point of it is isolated in it ([[def-perfect-set-r]], [[def-limit-point-r]]); every nonempty perfect subset of $\mathbb{R}$ is uncountable ([[thm-perfect-set-uncountable-r]], [[def-countable]]).

[L8] A set is nowhere dense exactly when the interior of its closure is empty, and a closed set equals its closure ([[def-nowhere-dense-meager]], [[def-interior-closure-boundary-r]], [[thm-closure-characterisations-r]]).

[L9] A subset of $\mathbb{R}$ is connected exactly when it is order-convex ([[thm-connected-subsets-of-r-are-intervals]], [[def-connected-r]], [[def-interval]]).

[L10] $|r|^k \to 0$ for $|r| < 1$ ([[lem-geometric-sequence-null]]); convergence to $0$ is tested against rational $\varepsilon > 0$ ([[def-real-limit]]); $|z| \ge 0$, $|z| = z$ for $z \ge 0$, and $|uv| = |u||v|$ ([[lem-of-abs-value]]).

[L11] Induction on $\mathbb{N}$ ([[thm-induction-principle]]); finite sums split, scale and are monotone in their terms ([[def-finite-sum]], [[lem-finite-sum-laws]]).

[L12] Ordered-field arithmetic: $0 < 1$, so $2 > 0$, $3 > 0$, $3^{-1} > 0$ and $0 < 2 \cdot 3^{-1} < 1$; adding a constant and multiplying by a positive preserve an inequality; the order is total and transitive ([[cor-of-one-positive]], [[lem-of-add-order]], [[lem-of-sign-rules]], [[def-ordered-field]], [[def-complete-ordered-field]]). These order-arithmetic facts are stated by their sources for the strict order only; the nonstrict forms used below follow by adjoining the equality case, in which the two sides coincide.

## Proof

**Proof technique:** direct.

1.1 **$C$ is compact, claim 1.** First, for $\lambda \ne 0$ and $c \in \mathbb{R}$ the set $\lambda S + c := \{\lambda s + c : s \in S\}$ is closed whenever $S$ is: if $x \notin \lambda S + c$ then $(x - c)\lambda^{-1} \notin S$, so by [L3] there is a real $\eta > 0$ with $N_\eta((x-c)\lambda^{-1}) \cap S = \varnothing$, and every $z$ with $|z - x| < |\lambda|\eta$ satisfies $|(z-c)\lambda^{-1} - (x-c)\lambda^{-1}| = |z-x| \cdot |\lambda|^{-1} < \eta$ by [L10] and [L12], hence $(z-c)\lambda^{-1} \notin S$ and $z \notin \lambda S + c$. Now every $C_n$ is closed, by induction on $n$ ([L11]): $C_0 = [0,1]$ is closed by [L3], and $C_{n+1}$ is the union of the two closed sets $\tfrac13 C_n$ and $\tfrac23 + \tfrac13 C_n$, hence closed by [L4]. So $C = \bigcap_n C_n$ is closed by [L4], and $C \subseteq [0,1]$ is bounded by [L1] and [L3]; by [L5] it is compact. [L1, L3, L4, L5, L10, L11, L12]

1.2 **$C$ has content zero and measure zero, claim 2.** By induction on $n$ ([L11]) the following holds for every $n$: there are $m \in \mathbb{N}$ and reals $u_0 \le v_0, \dots, u_m \le v_m$ with $C_n \subseteq \bigcup_{j \le m}[u_j,v_j]$ and $\sum_{j \le m}(v_j - u_j) = (2 \cdot 3^{-1})^{n}$. At $n = 0$ take the single interval $[0,1]$, of total length $1 = (2 \cdot 3^{-1})^0$ by [L1]. Given such a list at $n$, define $2m + 2$ intervals by $[u_j 3^{-1},\, v_j 3^{-1}]$ for $j \le m$ and $[2 \cdot 3^{-1} + u_{j-m-1}3^{-1},\, 2 \cdot 3^{-1} + v_{j-m-1}3^{-1}]$ for $m < j \le 2m+1$; they cover $\tfrac13 C_n$ and $\tfrac23 + \tfrac13 C_n$ respectively, hence cover $C_{n+1}$, and their total length is $3^{-1}(2 \cdot 3^{-1})^{n} + 3^{-1}(2 \cdot 3^{-1})^{n} = (2 \cdot 3^{-1})^{n+1}$ by [L11] and [L12]. Since $0 < 2 \cdot 3^{-1} < 1$ by [L12], [L10] gives, for every real $\varepsilon > 0$, an $n$ with $(2 \cdot 3^{-1})^{n} \le \varepsilon$; as $C \subseteq C_n$ by [L1], the corresponding finite list covers $C$ with total length at most $\varepsilon$. So $C$ has content zero by [L6], and hence measure zero by [L6]. [L1, L6, L10, L11, L12]

2.1 **$C$ is perfect, claim 3.** $C$ is closed by step 1.1. Let $x \in C$ and let the real $\varepsilon > 0$ be given. By [L2] write $x = \Phi(a)$ with $a \in D$. By [L10] and [L12] fix $k \in \mathbb{N}$ with $2 \cdot 3^{-k-1} < \varepsilon$, and define $b \in D$ by $b_j := a_j$ for $j \ne k$ and $b_k := 2 - a_k$, so $b_k \in \{0,2\}$ and $b \ne a$. Then $\Phi(b) \in C$ and $\Phi(b) \ne \Phi(a)$ by [L2], while $\Phi(b) - \Phi(a) = \sum_{j \ge 0}(b_j - a_j)3^{-j-1} = (b_k - a_k)3^{-k-1}$ by [L2], all other terms being $0$, so $|\Phi(b) - x| = 2 \cdot 3^{-k-1} < \varepsilon$ by [L10]. Thus $N_\varepsilon(x)$ contains a point of $C$ other than $x$, for every $\varepsilon$, so $x$ is not isolated in $C$; by [L7] $C$ is perfect. [step 1.1, L2, L7, L10, L12]

2.2 **$C$ contains no nondegenerate interval and is nowhere dense, claim 5.** By step 1.2 the set $C$ is null, so by [L6] it contains no $[u,v]$ with $u < v$; in particular it contains no interval of any of the four bounded forms with distinct endpoints, since such an interval contains a closed one with distinct endpoints by [L6] and [L12]. Its interior is therefore empty: if $N_\varepsilon(x) \subseteq C$ for some real $\varepsilon > 0$, then $[x - \varepsilon \cdot 2^{-1},\, x + \varepsilon \cdot 2^{-1}] \subseteq N_\varepsilon(x) \subseteq C$ by [L3] and [L12], an interval with distinct endpoints. Since $C$ is closed by step 1.1, it equals its closure, so [L8] gives that $C$ is nowhere dense. [step 1.1, step 1.2, L3, L6, L8, L12]

3.1 **$C$ is uncountable, claim 4.** $C$ is nonempty, since $0 \in C$ by [L1], and perfect by step 2.1, so [L7] applies. [step 2.1, L1, L7]

3.2 **Connected subsets, claim 6.** Let $E \subseteq C$ be connected and nonempty. By [L9] $E$ is order-convex, so if $u, v \in E$ with $u < v$ then $[u,v] \subseteq E \subseteq C$, contradicting step 2.2. Hence no two distinct elements of $E$ exist, and $E$, being nonempty, is a single point. [step 2.2, L9, L12]

4.1 Claims 1 to 6 are steps 1.1, 1.2, 2.1, 3.1, 2.2 and 3.2 respectively, so all six hold. [step 1.1, step 1.2, step 2.1, step 2.2, step 3.1, step 3.2] ∎

## Remarks

- **Two independent proofs of uncountability.** The route above is [[thm-perfect-set-uncountable-r]] applied to a nonempty perfect set. The other is claim 3 of [[thm-cantor-set-ternary-description]]: $C$ is in bijection with $\{0,1\}^{\mathbb{N}}$, which is in bijection with the power set of $\mathbb{N}$, uncountable by [[thm-cantor-powerset]]. The two arguments share nothing, and the second is the one that makes the *size* of $C$ evident: $C$ is in bijection with the power set of $\mathbb{N}$, while having content zero. **It is deliberately not said here that $C$ has as many points as $\mathbb{R}$.** That would require a bijection between $\mathbb{R}$ and the power set of $\mathbb{N}$, and no such bijection is constructed anywhere at this point in the reading order; the two uncountability results available here are separate facts, one proved by the diagonal argument on power sets and one by nested intervals.

- **Claim 2 and claim 4 together are the point of the whole construction.** A set of measure zero may be uncountable, so nullity is not a cardinality condition; and a nowhere dense set need not be null, so it is not a category condition either ([[fs-nowhere-dense-implies-measure-zero]], [[thm-fat-cantor-set-has-positive-measure]]).

- **Why claim 5 is proved through measure and not by inspection.** The intervals making up $C_n$ have length $3^{-n}$, and one can see directly that a long interval cannot fit inside $C$. Doing that rigorously means keeping track of the $2^n$ component intervals of $C_n$ and their gaps; going through [[lem-nondegenerate-interval-is-not-null]] uses the estimate already made in step 1.2 and needs no such bookkeeping.

- **Every point of $C$ is a limit of other points of $C$, and the witnesses are explicit**: change one ternary digit far out, as step 2.1 does. This is also what shows $C$ has no isolated points without any appeal to the structure of its complement.
