---
id: thm-lebesgue-criterion
kind: theorem
title: "Lebesgue's criterion for Riemann integrability: a bounded $f$ on $[a,b]$ is Riemann integrable if and only if its set of discontinuities has measure zero"
status: draft
origin: session
deps: [thm-riemann-criterion, def-oscillation, thm-continuity-iff-oscillation-zero, lem-oscillation-superlevel-sets-are-closed, def-measure-zero-and-content-zero, thm-countable-union-of-null-is-null, thm-compact-null-is-content-zero, lem-content-zero-implies-null, thm-heine-borel-characterisation-r, def-open-cover-r, def-countable-choice, def-darboux-sums, def-darboux-integral, def-partition-and-refinement, lem-finite-sum-laws, def-finite-sum, cor-archimedean-reciprocal, thm-of-archimedean, def-canonical-natural, lem-of-naturals-positive, def-open-and-closed-in-r, thm-open-set-algebra-r, def-neighbourhood-r, def-bounded-set, def-interval, def-continuity-real, def-classification-of-discontinuities, def-extended-reals, def-sequence, thm-well-ordering-principle, thm-induction-principle, def-complete-ordered-field, def-ordered-field, lem-of-add-order, lem-of-sign-rules, lem-of-abs-value]
justified_by: []
aliases: [thm-lebesgue-integrability-criterion]
landmark: true
short: "Lebesgue's criterion"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
sources:
  scraped: []
  references:
    - title: "Riemann integral (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Riemann_integral"
    - title: "Lebesgue's criterion for Riemann integrability (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Riemann_integral#Integrability"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 11"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Statement

Let $a < b$ be reals, let $f : [a,b] \to \mathbb{R}$ be bounded
([[def-bounded-set]]) and let

$$D \;:=\; \{\, x \in [a,b] \ : \ f \text{ is discontinuous at } x \,\}$$

([[def-continuity-real]], [[def-classification-of-discontinuities]]). Then

$$f \text{ is Riemann integrable on } [a,b] \quad \Longleftrightarrow \quad D \text{ has measure zero}$$

([[def-darboux-integral]], [[def-measure-zero-and-content-zero]]).

**The choice cost, named.** The implication from integrability to $D$ being null
uses the Axiom of Countable Choice ([[def-countable-choice]]) exactly once,
through [[thm-countable-union-of-null-is-null]] at step 7.1: $D$ is exhibited as
the union of a sequence of null sets. The converse implication, from $D$ null to
integrability, is a theorem of ZF: it uses no choice principle at all.

**"Measure zero" here is the cover condition of
[[def-measure-zero-and-content-zero]]**, namely that for every $\varepsilon > 0$
there is a sequence of intervals covering $D$ of total length at most
$\varepsilon$. No outer measure, no measurable set and no Lebesgue integral is
used or needed; the criterion is a statement about interval covers throughout.

## Facts & Assumptions

**Given:** Reals $a < b$, a bounded $f : [a,b] \to \mathbb{R}$, a real $M_{+} > 0$ with $|f(x)| \le M_{+}$ for every $x \in [a,b]$, and $D$ as in the Statement.

[A1] The Axiom of Countable Choice, used only where [L11] is invoked ([[def-countable-choice]]).

[L1] For a partition $P = (n,t)$ of $[a,b]$: $n \ge 1$, $\Delta_i = t_{i+1}-t_i > 0$, $\sum_{i<n}\Delta_i = b-a$, $I_i = [t_i,t_{i+1}] \subseteq [a,b]$, and appending a point $y > t_n$ to a partition of $[a,t_n]$ gives a partition of $[a,y]$ whose subintervals are the old ones together with $[t_n,y]$ ([[def-partition-and-refinement]]).

[L2] $U(f,P) - L(f,P) = \sum_{i<n}(M_i-m_i)\Delta_i$, $M_i - m_i = \omega_f(I_i)$, and $0 \le M_i - m_i \le 2M_{+}$ ([[def-darboux-sums]], [[def-oscillation]]).

[L3] Riemann's criterion: a bounded $f$ is integrable if and only if for every real $\varepsilon > 0$ there is a partition $P$ with $U(f,P)-L(f,P) < \varepsilon$ ([[thm-riemann-criterion]]).

[L4] Oscillation: $\omega_f(S) \le \omega_f(T)$ for $S \subseteq T \subseteq [a,b]$; $0 \le \omega_f(x) \le \omega_f([a,b] \cap N_\rho(x))$ for every real $\rho > 0$ and every $x \in [a,b]$; $\omega_f(x)$ is the infimum of those values over $\rho > 0$; and since $f$ is bounded every one of these values is a real number in $[0, 2M_{+}]$ ([[def-oscillation]], [[def-extended-reals]], [[def-neighbourhood-r]]).

[L5] $f$ is continuous at $x \in [a,b]$ if and only if $\omega_f(x) = 0$; hence $D = \{x \in [a,b] : \omega_f(x) > 0\}$ ([[thm-continuity-iff-oscillation-zero]], [[def-continuity-real]]).

[L6] For every real $\sigma > 0$ there is a closed $G \subseteq \mathbb{R}$ with $\{x \in [a,b] : \omega_f(x) \ge \sigma\} = [a,b] \cap G$ ([[lem-oscillation-superlevel-sets-are-closed]]).

[L7] A subset of $\mathbb{R}$ is compact exactly when it is closed and bounded; $[a,b]$ is closed and bounded; an intersection of closed sets is closed; every open interval is an open set ([[thm-heine-borel-characterisation-r]], [[def-open-cover-r]], [[def-open-and-closed-in-r]], [[thm-open-set-algebra-r]], [[def-interval]], [[def-bounded-set]]).

[L8] $A$ has content zero when for every real $\tau > 0$ there are $m \in \mathbb{N}$ and reals $c_0 \le e_0, \dots, c_m \le e_m$ with $A \subseteq \bigcup_{j \le m}[c_j,e_j]$ and $\sum_{j \le m}(e_j - c_j) \le \tau$; $A$ has measure zero when the same holds with a sequence of intervals and every partial total length at most $\tau$; a subset of a null set is null ([[def-measure-zero-and-content-zero]]).

[L9] A set of content zero has measure zero ([[lem-content-zero-implies-null]]), and for a **compact** set the two notions coincide ([[thm-compact-null-is-content-zero]]).

[L10] For every real $\eta > 0$ there is a natural $k \ge 1$ with $1/\iota(k) < \eta$; $\iota(k) > 0$ for $k \ge 1$, $\iota$ is nonnegative and nondecreasing on $\mathbb{N}$ ([[cor-archimedean-reciprocal]], [[thm-of-archimedean]], [[def-canonical-natural]], [[lem-of-naturals-positive]]).

[L11] Assuming [A1], the union of a sequence of null subsets of $\mathbb{R}$ is null ([[thm-countable-union-of-null-is-null]], [[def-sequence]]).

[L12] Finite sums: splitting, additivity, scaling, monotonicity in the terms, and telescoping ([[def-finite-sum]], [[lem-finite-sum-laws]]). Also the interchange of two finite sums, $\sum_{i<n}\sum_{j<p}c_{i,j} = \sum_{j<p}\sum_{i<n}c_{i,j}$ for any doubly indexed family of reals; below it is applied with $p := m+1$, since $\sum_{j \le m}$ abbreviates $\sum_{j<m+1}$. That identity is **not** one of the six clauses of [[lem-finite-sum-laws]] and is therefore proved here, by induction on $p$ with $n$ held fixed ([[thm-induction-principle]]). At $p = 0$ each inner sum $\sum_{j<0}c_{i,j}$ is $0$ by the recursion clause of [[def-finite-sum]], so the left side is $\sum_{i<n}0 = 0$ by clause 2 of [[lem-finite-sum-laws]] taken with $\lambda = 0$, while the right side is an empty sum and so is $0$ as well. Passing from $p$ to $p+1$, the recursion clause and clause 1 of [[lem-finite-sum-laws]] give $\sum_{i<n}\sum_{j<p+1}c_{i,j} = \sum_{i<n}\bigl(\sum_{j<p}c_{i,j} + c_{i,p}\bigr) = \sum_{i<n}\sum_{j<p}c_{i,j} + \sum_{i<n}c_{i,p}$, which by the induction hypothesis is $\sum_{j<p}\sum_{i<n}c_{i,j} + \sum_{i<n}c_{i,p} = \sum_{j<p+1}\sum_{i<n}c_{i,j}$, again by the recursion clause.

[L13] Every nonempty subset of $\mathbb{N}$ has a least element ([[thm-well-ordering-principle]]); every nonempty subset of $\mathbb{R}$ bounded above has a supremum ([[def-complete-ordered-field]]).

[L14] Ordered-field arithmetic and the absolute value: adding a constant and multiplying by a positive quantity preserve an inequality; the order is total and transitive; an open interval is order-convex ([[lem-of-abs-value]], [[lem-of-add-order]], [[lem-of-sign-rules]], [[def-ordered-field]], [[def-complete-ordered-field]], [[def-interval]]). These order-arithmetic facts are stated by their sources for the strict order only; the nonstrict forms used below follow by adjoining the equality case, in which the two sides coincide.

## Proof

**Proof technique:** direct.

1.1 For a real $\sigma > 0$ put $E_\sigma := \{\, x \in [a,b] : \omega_f(x) \ge \sigma \,\}$. By [L5], $E_\sigma \subseteq D$ for every $\sigma > 0$. [L4, L5, construct]

2.1 **Each $E_\sigma$ has content zero, assuming $f$ integrable.** Let $\sigma > 0$ and $\tau > 0$ be real. By [L3] fix a partition $P = (n,t)$ with $U(f,P) - L(f,P) < \sigma\tau \cdot 2^{-1}$. Let $B := \{\, i < n : (t_i,t_{i+1}) \cap E_\sigma \ne \varnothing \,\}$ and put $\chi_i := 1$ for $i \in B$ and $\chi_i := 0$ otherwise. [step 1.1, L3, L14, choose, construct]

2.2 **The exhaustion of $D$.** Put $\sigma_k := 1/\iota(k+1)$ for $k \in \mathbb{N}$, a positive real by [L10]. Then $D = \bigcup_{k \in \mathbb{N}} E_{\sigma_k}$. For the inclusion from left to right, let $x \in D$, so $\omega_f(x) > 0$ by [L5] and $\omega_f(x)$ is a real by [L4]; if $\omega_f(x) \ge 1 = \sigma_0$ then $x \in E_{\sigma_0}$, and otherwise [L10] gives a natural $k+1 \ge 1$ with $1/\iota(k+1) < \omega_f(x)$, so $x \in E_{\sigma_k}$. For the reverse inclusion, $x \in E_{\sigma_k}$ gives $\omega_f(x) \ge \sigma_k > 0$, hence $x \in D$ by [L5]. [step 1.1, L4, L5, L10, L14]

2.3 **The converse; this half of the proof is steps 2.3, 3.2, 4.2, 5.2, 6.2, 7.2, 8.1, 9.1, 10.1, 11.1, 12.1 and 13.1, and its symbols are its own.** Assume $D$ null and let a real $\varepsilon > 0$ be given. Put $\sigma' := \varepsilon \cdot \bigl(2(b-a)\bigr)^{-1}$ and $\tau' := \varepsilon \cdot \bigl(8M_{+}\bigr)^{-1}$, both positive by [L14]. By step 1.1 and [L8], $E_{\sigma'} \subseteq D$ is null. [step 1.1, given, L8, L14]

3.1 For $i \in B$ one has $M_i - m_i \ge \sigma$: fix $x \in (t_i,t_{i+1}) \cap E_\sigma$; since $(t_i,t_{i+1})$ is open there is a real $\rho > 0$ with $N_\rho(x) \subseteq (t_i,t_{i+1})$, so $[a,b] \cap N_\rho(x) \subseteq I_i$ and [L4] gives $\sigma \le \omega_f(x) \le \omega_f([a,b] \cap N_\rho(x)) \le \omega_f(I_i) = M_i - m_i$ by [L2]. [step 2.1, L1, L2, L4, L7, choose]

3.2 $E_{\sigma'}$ is compact: by [L6] there is a closed $G$ with $E_{\sigma'} = [a,b] \cap G$, an intersection of two closed sets, hence closed; and $E_{\sigma'} \subseteq [a,b]$ is bounded. So [L7] applies. [step 2.3, L6, L7]

4.1 Hence $\sigma\chi_i\Delta_i \le (M_i - m_i)\Delta_i$ for every $i < n$, the case $i \notin B$ because both $M_i - m_i \ge 0$ and $\Delta_i > 0$. Summing and using [L12] and [L2]: $\sigma \sum_{i<n}\chi_i\Delta_i \le U(f,P) - L(f,P) < \sigma\tau \cdot 2^{-1}$, so $\lambda := \sum_{i<n}\chi_i\Delta_i < \tau \cdot 2^{-1}$. [step 2.1, step 3.1, L2, L12, L14]

4.2 By [L9] applied to the compact null set $E_{\sigma'}$, it has content zero, so by [L8] there are $m \in \mathbb{N}$ and reals $c_0 \le e_0, \dots, c_m \le e_m$ with $E_{\sigma'} \subseteq \bigcup_{j \le m}[c_j,e_j]$ and $\sum_{j\le m}(e_j-c_j) \le \tau' \cdot 2^{-1}$. Put $\mu := \tau' \cdot \bigl(4(\iota(m)+1)\bigr)^{-1} > 0$ and $O_j := (c_j - \mu,\ e_j + \mu)$, an open interval containing $[c_j,e_j]$, of length $(e_j - c_j) + 2\mu$. Then $\sum_{j\le m}\bigl((e_j-c_j)+2\mu\bigr) \le \tau' \cdot 2^{-1} + 2\mu(\iota(m)+1) = \tau' \cdot 2^{-1} + \tau' \cdot 2^{-1} = \tau'$, by [L12] and [L10]. [step 2.3, step 3.2, L8, L9, L10, L12, L14, construct]

5.1 $E_\sigma$ is covered by the finite list of $2n+1$ closed intervals $[p_j,q_j]$, $j \le 2n$, defined by $[p_j,q_j] := [t_j,t_{j+1}]$ for $j < n$ with $j \in B$, $[p_j,q_j] := [a,a]$ for $j < n$ with $j \notin B$, and $[p_j,q_j] := [t_{j-n},t_{j-n}]$ for $n \le j \le 2n$: indeed a point of $E_\sigma$ lies in $[a,b]$, hence is one of $t_0,\dots,t_n$ or lies in some $(t_i,t_{i+1})$, and in the latter case $i \in B$. Its total length is $\sum_{j \le 2n}(q_j - p_j) = \sum_{i<n}\chi_i\Delta_i + 0 = \lambda < \tau$, by splitting the sum at $n$ ([L12]). [step 2.1, step 4.1, L1, L12, L14, construct]

5.2 **The family of good intervals.** Let $\mathcal{W}$ be the set of all open intervals $(u,v)$ with $u < v$ such that either $(u,v) \subseteq O_j$ for some $j \le m$, or $\omega_f([a,b]\cap(u,v)) < \sigma'$. Every $x \in [a,b]$ lies in a member: if $x \in E_{\sigma'}$ then $x \in [c_j,e_j] \subseteq O_j$ for some $j \le m$ by step 4.2, and $O_j$ is itself a member; and if $x \notin E_{\sigma'}$ then $\omega_f(x) < \sigma'$, so by [L4] some real $\rho > 0$ has $\omega_f([a,b]\cap N_\rho(x)) < \sigma'$, and $N_\rho(x) = (x-\rho,x+\rho)$ is a member containing $x$. [step 4.2, L4, L7, L14, construct]

6.1 As $\tau > 0$ was arbitrary, $E_\sigma$ has content zero by [L8], hence measure zero by [L9]; this used only that $f$ is integrable. [step 2.1, step 5.1, L8, L9]

6.2 **Cousin's construction: a partition each of whose subintervals lies in a member of $\mathcal{W}$.** Let $S$ be the set of $y \in (a,b]$ such that some partition of $[a,y]$ has every subinterval contained in a member of $\mathcal{W}$. $S$ is nonempty: by step 5.2 fix $(\alpha,\beta) \in \mathcal{W}$ with $a \in (\alpha,\beta)$ and put $y_0 := \min\{(a+b)\cdot 2^{-1},\ (a+\beta)\cdot 2^{-1}\}$, so $a < y_0 \le b$, $y_0 < \beta$ and $\alpha < a$; the one-subinterval partition of $[a,y_0]$ has $[a,y_0] \subseteq (\alpha,\beta)$, so $y_0 \in S$. Also $S$ is bounded above by $b$, so $s := \sup S$ exists by [L13] and $a < y_0 \le s \le b$. [step 5.2, L1, L13, L14, choose]

7.1 **Integrability implies $D$ null.** Assume $f$ integrable. By step 6.1 each $E_{\sigma_k}$ is null, and $k \mapsto E_{\sigma_k}$ is a sequence of subsets of $\mathbb{R}$, so [L11] applies and $\bigcup_k E_{\sigma_k} = D$ is null by step 2.2. This is the only use of [A1] in the proof. [step 6.1, step 2.2, A1, L11]

7.2 $s = b$. By step 5.2 fix $(\alpha',\beta') \in \mathcal{W}$ with $s \in (\alpha',\beta')$. Since $\sup S = s > \alpha'$ there is $x \in S$ with $x > \alpha'$, and $x \le s$. Suppose $s < b$ and choose a real $y$ with $s < y < \min\{b, \beta'\}$, possible because $s < b$ and $s < \beta'$. Then $\alpha' < x \le s < y < \beta'$, so $[x,y] \subseteq (\alpha',\beta')$, and appending $y$ to a partition of $[a,x]$ witnessing $x \in S$ gives one for $[a,y]$ by [L1]; hence $y \in S$ with $y > \sup S$, which is impossible. [step 6.2, L1, L13, L14, choose]

8.1 $b \in S$. By step 5.2 fix $(\alpha'',\beta'') \in \mathcal{W}$ with $b \in (\alpha'',\beta'')$. Since $\sup S = b > \alpha''$ there is $x \in S$ with $x > \alpha''$ and $x \le b$. If $x = b$ there is nothing to prove; otherwise $\alpha'' < x < b < \beta''$ gives $[x,b] \subseteq (\alpha'',\beta'')$, and appending $b$ as in step 7.2 puts $b$ in $S$. So there is a partition $P' = (n',t')$ of $[a,b]$, with subintervals $I'_i$ and lengths $\Delta'_i$ for $i < n'$, every subinterval of which lies in a member of $\mathcal{W}$. [step 5.2, step 7.2, L1, L13, L14, choose]

9.1 **Good and bad subintervals.** Write $M'_i := \sup f[I'_i]$ and $m'_i := \inf f[I'_i]$. Call $i < n'$ **good** when $I'_i \subseteq W$ for some $W = (u,v) \in \mathcal{W}$ with $\omega_f([a,b]\cap(u,v)) < \sigma'$, and **bad** otherwise. For a good $i$, $I'_i \subseteq [a,b] \cap W$, so $M'_i - m'_i = \omega_f(I'_i) \le \omega_f([a,b]\cap W) < \sigma'$ by [L2] and [L4]. For a bad $i$, step 8.1 supplies a member containing $I'_i$, and it is not of the second kind, so $I'_i \subseteq O_j$ for some $j \le m$. [step 8.1, L1, L2, L4]

10.1 **Bounding the bad lengths.** For $j \le m$ put $J_j := \{\, i < n' : c_j - \mu \le t'_i \text{ and } t'_{i+1} \le e_j + \mu \,\}$ and $h^{j}_i := \Delta'_i$ for $i \in J_j$, $h^{j}_i := 0$ otherwise; a bad $i$ lies in some $J_j$ by step 9.1. Each $J_j$ consists of consecutive indices, since $i < i^{\dagger} < i^{\ddagger}$ with $i,i^{\ddagger} \in J_j$ gives $c_j - \mu \le t'_i \le t'_{i^{\dagger}}$ and $t'_{i^{\dagger}+1} \le t'_{i^{\ddagger}+1} \le e_j + \mu$. [step 9.1, L1, L14, construct]

11.1 $\sum_{i<n'}h^{j}_i \le (e_j - c_j) + 2\mu$ for each $j \le m$: the sum is $0$ when $J_j = \varnothing$; otherwise let $p := \min J_j$ and let $q$ be the least natural with $q > p$ and $q \notin J_j$, which exists by [L13] since $n' \notin J_j$, so that $J_j = \{\, i : p \le i < q \,\}$ by step 10.1. Splitting the sum at $p$ and at $q$ and discarding the vanishing outer parts, then telescoping ([L12]), gives $\sum_{i<n'}h^{j}_i = \sum_{i=p}^{q-1}\Delta'_i = t'_q - t'_p \le (e_j+\mu) - (c_j-\mu)$, using $p \in J_j$ and $q-1 \in J_j$. [step 10.1, L12, L13, L14]

12.1 Put $\beta_i := \Delta'_i$ for bad $i$ and $\beta_i := 0$ for good $i$. Then $\beta_i \le \sum_{j \le m}h^{j}_i$ pointwise by step 10.1, all terms being nonnegative, so by [L12] and step 11.1, $\sum_{i<n'}\beta_i \le \sum_{j\le m}\sum_{i<n'}h^{j}_i \le \sum_{j\le m}\bigl((e_j-c_j)+2\mu\bigr) \le \tau'$, the last step by step 4.2. [step 4.2, step 10.1, step 11.1, L12, L14]

13.1 For every $i < n'$, $(M'_i-m'_i)\Delta'_i \le \sigma'\Delta'_i + 2M_{+}\beta_i$: for good $i$ by step 9.1 and $\beta_i \ge 0$, for bad $i$ by $M'_i - m'_i \le 2M_{+}$ from [L2] and $\beta_i = \Delta'_i$. Summing over $i < n'$ and using [L12], [L1] and step 12.1: $U(f,P')-L(f,P') \le \sigma'(b-a) + 2M_{+}\tau' = \varepsilon\cdot 2^{-1} + \varepsilon \cdot 4^{-1} < \varepsilon$. [step 2.3, step 9.1, step 12.1, L1, L2, L12, L14]

14.1 The real $\varepsilon > 0$ of step 2.3 was arbitrary and step 13.1 produced a partition with $U - L < \varepsilon$, so $f$ is integrable by [L3]. With step 7.1 this proves both implications, and the criterion is established; the forward half is steps 1.1, 2.1, 2.2, 3.1, 4.1, 5.1, 6.1 and 7.1, working with $\sigma, \tau, P, B, \chi, \lambda$, and the converse half is the steps named in step 2.3, working with $\sigma', \tau', P', \mathcal{W}, S$. [step 7.1, step 2.3, step 13.1, L3] ∎

## Remarks

- **What the two halves cost.** The forward half is a single application of Riemann's criterion for each threshold $\sigma$, plus the countable union; the backward half is where all the work is, and it is entirely a covering argument: the bad set is compact and null, hence of content zero, hence coverable by finitely many open intervals of small total length, and the rest of $[a,b]$ is chopped up by Cousin's construction into pieces of oscillation below $\sigma$.

- **Why Cousin's construction and not a Lebesgue number.** Step 6.2 to step 8.1 build the partition directly from the completeness of $\mathbb{R}$: the set of right endpoints reachable by a good partition is nonempty and bounded, and its supremum is shown to be $b$ and to be attained. This uses no sequence, no subsequence and no choice, whereas the usual Lebesgue-number argument selects a bad interval for each $n$ and then extracts a convergent subsequence, which costs countable choice. Since the whole point of this item's choice ledger is that the backward implication is a ZF theorem, the choice-free route is the one taken.

- **The superlevel sets, not the discontinuity set, are what is covered.** $D$ itself is in general not closed, so [[thm-compact-null-is-content-zero]] does not apply to it; each $E_\sigma$ **is** closed in $[a,b]$ ([[lem-oscillation-superlevel-sets-are-closed]]) and bounded, and that is exactly the hypothesis needed. The passage back from the $E_{\sigma_k}$ to $D$ is step 2.2, and it is where the countable union appears.

- **The exhaustion $D = \bigcup_k E_{1/\iota(k+1)}$ is derived here, and it is also claim 1 of [[thm-discontinuity-set-is-f-sigma]].** When this proof was written that theorem stated only the descriptive form — $D$ as the trace on the domain of an $F_\sigma$ subset of $\mathbb{R}$ — which is not the pointwise identity step 2.2 needs, so the identity was derived inline from [[thm-continuity-iff-oscillation-zero]] and the Archimedean property. The exhaustion has since been stated there as claim 1, precisely because several items were quoting it from a theorem that did not assert it. The inline derivation is retained because it is three lines and keeps this item's choice ledger readable in one place; citing claim 1 instead would be equally correct.

- **Both directions are sharp in the obvious sense.** The indicator of the Cantor set is discontinuous on an uncountable null set and is integrable; the indicator of the Smith-Volterra-Cantor set is discontinuous on a nowhere dense set that is not null and is not integrable ([[fs-integrability-is-equivalent-to-a-nowhere-dense-discontinuity-set]]). So neither cardinality nor category decides integrability; only measure does.
