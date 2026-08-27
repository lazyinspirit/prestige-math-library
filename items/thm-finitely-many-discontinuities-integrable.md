---
id: thm-finitely-many-discontinuities-integrable
kind: theorem
title: "A bounded function on $[a,b]$ that is continuous except at finitely many points is Riemann integrable"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-riemann-criterion, def-continuity-real, def-classification-of-discontinuities, def-partition-and-refinement, def-darboux-sums, def-darboux-integral, lem-finite-sum-laws, def-finite-sum, def-bounded-set, thm-heine-cantor-r, def-uniform-continuity-real, thm-heine-borel-characterisation-r, def-open-cover-r, def-open-and-closed-in-r, thm-open-set-algebra-r, thm-closure-characterisations-r, def-interior-closure-boundary-r, def-neighbourhood-r, thm-well-ordering-principle, thm-induction-principle, cor-archimedean-reciprocal, thm-of-archimedean, def-canonical-natural, lem-of-naturals-positive, def-interval, lem-of-abs-value, def-complete-ordered-field, def-ordered-field, lem-of-add-order, lem-of-sign-rules]
justified_by: []
aliases: []
landmark: true
short: "finitely many discontinuities $\\Rightarrow$ integrable"
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-5
    verdict: certify
    date: 2026-08-27
    scope: published-dependency-repair
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Riemann integral (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Riemann_integral"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 6"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "Functions with finitely many discontinuities (University of Pennsylvania)"
      url: "https://www2.math.upenn.edu/~gressman/analysis/07-integrationfuncs.html"
pipeline_run: null
---

## Statement

Let $a < b$ be reals and let $f : [a,b] \to \mathbb{R}$ be bounded
([[def-bounded-set]]). Suppose there are $r \in \mathbb{N}$ and points
$d_0, \dots, d_{r-1} \in [a,b]$ such that $f$ is continuous
([[def-continuity-real]]) at every point of $[a,b]$ other than
$d_0, \dots, d_{r-1}$; that is, every discontinuity of $f$
([[def-classification-of-discontinuities]]) occurs among those $r$ listed
points. Then $f$ is Riemann integrable on $[a,b]$ ([[def-darboux-integral]]).

For $r = 0$ the hypothesis says $f$ is continuous on $[a,b]$, so this reduces
to the usual continuous-case integrability statement; the argument below covers
that case without a separate treatment. Repetitions in the list are allowed and
harmless, and no claim is made that the listed points **are**
discontinuities: the hypothesis is one-sided, so a finite superset of the
discontinuity set is enough.

**Nothing is said about the kind of the discontinuities.** They may be
removable, jumps, or essential ([[def-classification-of-discontinuities]]); only
their number matters. Boundedness is a genuine hypothesis, since an unbounded
function has no Darboux sums at all ([[def-darboux-sums]]).

## Facts & Assumptions

**Given:** Reals $a < b$; a bounded $f : [a,b] \to \mathbb{R}$; a real $M_{+} > 0$ with $|f(x)| \le M_{+}$ for every $x \in [a,b]$; and $r \in \mathbb{N}$ with points $d_0, \dots, d_{r-1} \in [a,b]$ such that $f$ is continuous at every $x \in [a,b]$ with $x \ne d_k$ for all $k < r$.

[L1] For a partition $P = (n,t)$ of $[a,b]$: $n \ge 1$, $\Delta_i = t_{i+1}-t_i > 0$, $\sum_{i<n}\Delta_i = b-a$, $\Delta_i \le \|P\|$, no $t_j$ with $j \le n$ lies strictly between $t_i$ and $t_{i+1}$, inserting a point does not increase the mesh and adds that point to $\operatorname{pts}(P)$, and the uniform partition $U_N$ has mesh $(b-a)/\iota(N)$ ([[def-partition-and-refinement]]).

[L2] $U(f,P) - L(f,P) = \sum_{i<n}(M_i-m_i)\Delta_i$, $M_i - m_i = \sup\{|f(x)-f(y)| : x,y \in I_i\}$, and $0 \le M_i - m_i \le 2M_{+}$ ([[def-darboux-sums]]).

[L3] Riemann's criterion: a bounded $f$ is integrable if and only if for every real $\varepsilon > 0$ there is a partition $P$ with $U(f,P)-L(f,P) < \varepsilon$ ([[thm-riemann-criterion]]).

[L4] A closed bounded subset of $\mathbb{R}$ is compact, and a continuous real function on a compact subset $K$ of $\mathbb{R}$ is uniformly continuous on $K$: for every real $\eta > 0$ there is a real $\delta > 0$ with $|g(x)-g(y)| < \eta$ for all $x,y \in K$ with $|x-y| < \delta$. This holds for $K = \varnothing$ as well, the condition being vacuous there ([[thm-heine-borel-characterisation-r]], [[def-open-cover-r]], [[thm-heine-cantor-r]], [[def-uniform-continuity-real]]).

[L5] Every open interval is an open set, an arbitrary union of open sets is open, a complement of an open set is closed, an intersection of closed sets is closed, and $[a,b]$ is closed and bounded ([[def-interval]], [[def-open-and-closed-in-r]], [[thm-open-set-algebra-r]], [[def-neighbourhood-r]], [[def-bounded-set]]).

[L6] For $u < v$ the endpoints $u$ and $v$ are adherent to $(u,v)$, so every closed set containing $(u,v)$ contains $[u,v]$ ([[thm-closure-characterisations-r]], [[def-interior-closure-boundary-r]], [[def-neighbourhood-r]], [[def-interval]]).

[L7] If $g : A \to \mathbb{R}$ is continuous at $c \in A$ and $c \in B \subseteq A$, then the restriction $g|_B$ is continuous at $c$ as a function on $B$: the same $\delta$ works, the condition quantifying over fewer points ([[def-continuity-real]]).

[L8] Finite sums: splitting, additivity, scaling, monotonicity in the terms, and telescoping ([[def-finite-sum]], [[lem-finite-sum-laws]]). Also the interchange of two finite sums, $\sum_{i<n}\sum_{k<r}c_{i,k} = \sum_{k<r}\sum_{i<n}c_{i,k}$ for any doubly indexed family of reals. That identity is **not** one of the six clauses of [[lem-finite-sum-laws]] and is therefore proved here, by induction on $r$ ([[thm-induction-principle]]). At $r = 0$ each inner sum $\sum_{k<0}c_{i,k}$ is $0$ by the recursion clause of [[def-finite-sum]], so the left side is $\sum_{i<n}0 = 0$ by clause 2 of [[lem-finite-sum-laws]] taken with $\lambda = 0$, while the right side is an empty sum and so is $0$ as well. Passing from $r$ to $r+1$, the recursion clause and clause 1 of [[lem-finite-sum-laws]] give $\sum_{i<n}\sum_{k<r+1}c_{i,k} = \sum_{i<n}\bigl(\sum_{k<r}c_{i,k} + c_{i,r}\bigr) = \sum_{i<n}\sum_{k<r}c_{i,k} + \sum_{i<n}c_{i,r}$, which by the induction hypothesis is $\sum_{k<r}\sum_{i<n}c_{i,k} + \sum_{i<n}c_{i,r} = \sum_{k<r+1}\sum_{i<n}c_{i,k}$, again by the recursion clause. Note that $n$ is fixed throughout the induction and only $r$ varies.

[L9] Every nonempty subset of $\mathbb{N}$ has a least element ([[thm-well-ordering-principle]]).

[L10] For every real $\eta > 0$ there is a natural $N \ge 1$ with $1/\iota(N) < \eta$; $\iota(N) > 0$ for $N \ge 1$ and $\iota(r) \ge 0$ ([[cor-archimedean-reciprocal]], [[thm-of-archimedean]], [[def-canonical-natural]], [[lem-of-naturals-positive]]).

[L11] Ordered-field arithmetic and the absolute value: adding a constant and multiplying by a positive quantity preserve an inequality; the order is total and transitive; $x,y \in [c,d]$ gives $|x-y| \le d-c$ ([[lem-of-abs-value]], [[lem-of-add-order]], [[lem-of-sign-rules]], [[def-ordered-field]], [[def-complete-ordered-field]], [[def-interval]]). These order-arithmetic facts are stated by their sources for the strict order only; the nonstrict forms used below follow by adjoining the equality case, in which the two sides coincide.

## Proof

**Proof technique:** direct.

1.1 Let a real $\varepsilon > 0$ be given. Put $\theta := \varepsilon \cdot \bigl(4(b-a)\bigr)^{-1}$ and $\eta := \varepsilon \cdot \bigl(16\,M_{+}(\iota(r)+1)\bigr)^{-1}$, both positive reals by [L10] and [L11]. [given, L10, L11]

2.1 Put $V := \bigcup_{k<r}\,(d_k - \eta,\ d_k + \eta)$, an open set by [L5], and $K := [a,b] \setminus V = [a,b] \cap (\mathbb{R}\setminus V)$, an intersection of two closed sets, hence closed by [L5], and bounded since $K \subseteq [a,b]$; so $K$ is compact by [L4]. [step 1.1, L4, L5, construct]

3.1 $f$ is continuous at every point of $K$: a point $x \in K$ is not any $d_k$, since $d_k \in (d_k-\eta, d_k+\eta) \subseteq V$ and $K$ misses $V$. Hence the restriction $f|_K$ is continuous on $K$ by [L7]. [step 2.1, given, L7, L11]

4.1 By [L4] applied to $f|_K$ on the compact set $K$ with the value $\theta$, fix a real $\delta > 0$ such that $|f(x)-f(y)| < \theta$ for all $x,y \in K$ with $|x-y| < \delta$. [step 2.1, step 3.1, L4, choose]

5.1 By [L10] fix a natural $N \ge 1$ with $1/\iota(N) < \delta \cdot (b-a)^{-1}$, so that the uniform partition $U_N$ has mesh $(b-a)/\iota(N) < \delta$ by [L1] and [L11]. Let $P = (n,t)$ be the partition obtained from $U_N$ by inserting, one after another, those of the $2r$ points $d_k - \eta$ and $d_k + \eta$ with $k < r$ that lie in $[a,b]$. By [L1] each insertion leaves the mesh no larger, so $\|P\| < \delta$, and $\operatorname{pts}(P)$ contains every one of those points that lies in $[a,b]$. [step 4.1, L1, L10, L11, choose, construct]

6.1 **A dichotomy for each subinterval and each $k$.** Fix $i < n$ and $k < r$, and write $c^{-} := d_k - \eta$ and $c^{+} := d_k + \eta$. Neither $c^{-}$ nor $c^{+}$ lies in the open interval $(t_i,t_{i+1})$: if such a point lies in $[a,b]$ it is a member of $\operatorname{pts}(P)$ by step 5.1, hence is some $t_j$ with $j \le n$, and no $t_j$ lies strictly between $t_i$ and $t_{i+1}$ by [L1]; and if it lies outside $[a,b]$ it is outside $[t_i,t_{i+1}]$ altogether. [step 5.1, L1, L11]

7.1 Consequently either $(t_i,t_{i+1}) \cap (c^{-},c^{+}) = \varnothing$, or $I_i \subseteq [c^{-},c^{+}]$. Suppose the intersection contains a point $z$ and let $w \in (t_i,t_{i+1})$. If $w \le c^{-}$ then $c^{-}$ lies between $w$ and $z$, both in the order-convex set $(t_i,t_{i+1})$, so $c^{-} \in (t_i,t_{i+1})$, contradicting step 6.1; likewise $w \ge c^{+}$ is impossible. So $(t_i,t_{i+1}) \subseteq (c^{-},c^{+})$. Then $c^{-} < z < t_{i+1}$ with $c^{-} \notin (t_i,t_{i+1})$ forces $c^{-} \le t_i$, and symmetrically $c^{+} \ge t_{i+1}$, that is $I_i \subseteq [c^{-},c^{+}]$. [step 6.1, L11, given]

8.1 Call $i < n$ **bad** when $I_i \subseteq [d_k-\eta, d_k+\eta]$ for some $k < r$, and **good** otherwise. If $i$ is good then by step 7.1 the open interval $(t_i,t_{i+1})$ meets no $(d_k-\eta,d_k+\eta)$, hence $(t_i,t_{i+1}) \subseteq K$; since $K$ is closed, [L6] gives $I_i = [t_i,t_{i+1}] \subseteq K$. [step 2.1, step 7.1, L6]

9.1 For a good $i$: all $x,y \in I_i$ lie in $K$ and satisfy $|x-y| \le \Delta_i \le \|P\| < \delta$ by [L1] and [L11], so $|f(x)-f(y)| < \theta$ by step 4.1; therefore $\theta$ bounds the set whose supremum is $M_i - m_i$, and $M_i - m_i \le \theta$ by [L2]. [step 4.1, step 5.1, step 8.1, L1, L2, L11]

9.2 **Bounding the bad lengths.** For $k < r$ put $J_k := \{\, i < n : d_k - \eta \le t_i \text{ and } t_{i+1} \le d_k + \eta \,\}$, so that $i$ is bad exactly when $i \in J_k$ for some $k < r$, and put $h^{k}_i := \Delta_i$ for $i \in J_k$ and $h^{k}_i := 0$ otherwise. Each $J_k$ is a set of consecutive indices: if $i < i' < i''$ with $i, i'' \in J_k$ then $d_k - \eta \le t_i \le t_{i'}$ and $t_{i'+1} \le t_{i''+1} \le d_k + \eta$, so $i' \in J_k$. [step 8.1, L1, L11, construct]

10.1 $\sum_{i<n} h^{k}_i \le 2\eta$ for each $k < r$. If $J_k = \varnothing$ the sum is $0$. Otherwise let $p := \min J_k$ and let $q$ be the least natural with $q > p$ and $q \notin J_k$, which exists by [L9] because $n \notin J_k$; by step 9.2 then $J_k = \{\, i : p \le i < q \,\}$, since an $i \in J_k$ with $i \ge q$ together with $p \in J_k$ and $p < q \le i$ would put $q \in J_k$. Splitting the sum at $p$ and at $q$ and discarding the vanishing outer parts ([L8]) gives $\sum_{i<n}h^{k}_i = \sum_{i=p}^{q-1}\Delta_i = t_q - t_p$ by telescoping, and $p \in J_k$, $q-1 \in J_k$ give $t_p \ge d_k-\eta$ and $t_q \le d_k+\eta$, whence $t_q - t_p \le 2\eta$. [step 9.2, L8, L9, L11]

11.1 Put $\beta_i := \Delta_i$ for $i$ bad and $\beta_i := 0$ for $i$ good. Then $\beta_i \le \sum_{k<r}h^{k}_i$ for every $i < n$, all terms being nonnegative and a bad $i$ lying in some $J_k$; so by [L8], $\sum_{i<n}\beta_i \le \sum_{i<n}\sum_{k<r}h^{k}_i = \sum_{k<r}\sum_{i<n}h^{k}_i \le \sum_{k<r}2\eta = 2\eta\,\iota(r)$, using step 10.1. [step 9.2, step 10.1, L8, L11]

12.1 For every $i < n$ one has $(M_i - m_i)\Delta_i \le \theta\,\Delta_i + 2M_{+}\,\beta_i$: for good $i$ this is step 9.1 together with $\beta_i \ge 0$, and for bad $i$ it follows from $M_i - m_i \le 2M_{+}$ in [L2] and $\beta_i = \Delta_i$, together with $\theta\Delta_i \ge 0$. [step 9.1, step 11.1, L2, L11]

13.1 Summing step 12.1 over $i < n$ and using [L8], [L1] and step 11.1: $U(f,P) - L(f,P) \le \theta\sum_{i<n}\Delta_i + 2M_{+}\sum_{i<n}\beta_i \le \theta(b-a) + 4M_{+}\eta\,\iota(r) \le \varepsilon\cdot 4^{-1} + \varepsilon\cdot 4^{-1} < \varepsilon$, the last estimate because $4M_{+}\eta\,\iota(r) \le 4M_{+}\eta(\iota(r)+1) = \varepsilon\cdot 4^{-1}$ by step 1.1. [step 1.1, step 11.1, step 12.1, L1, L2, L8, L10, L11]

14.1 The real $\varepsilon > 0$ of step 1.1 was arbitrary and step 13.1 produced a partition $P$ with $U(f,P) - L(f,P) < \varepsilon$, so [L3] applies and $f$ is Riemann integrable on $[a,b]$. [step 1.1, step 13.1, L3] ∎

## Remarks

- **Where the two budgets go.** The $\varepsilon/4$ of step 13.1 that is spent on the good subintervals buys uniform continuity away from the bad points; the $\varepsilon/4$ spent on the bad ones buys nothing but their total length, and it is affordable only because there are finitely many of them and $\eta$ may be chosen after $r$ is known. Both halves survive verbatim when "finitely many points" is replaced by "a set of measure zero", and that replacement is [[thm-lebesgue-criterion]].

- **The listing form of the hypothesis is deliberate.** Saying "the set of discontinuities is finite" would require a notion of finiteness and a listing theorem to use it; saying "every discontinuity is among $d_0,\dots,d_{r-1}$" is what the proof consumes and is what every application supplies. The same device is used by [[lem-finite-set-has-max]].

- **The result is genuinely weaker than what is true.** Thomae's function has infinitely many discontinuities and is integrable, and so is the indicator of the Cantor set, whose discontinuity set is uncountable. What survives is that a *finite* discontinuity set never obstructs integrability, whatever the function does at those points.

- **Choice.** The proof selects nothing from an infinite family; the only countable choice behind it is the single use inside [[thm-heine-cantor-r]], invoked at step 4.1. See [[rem-riemann-integral-choice-ledger]].
