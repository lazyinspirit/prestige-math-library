---
id: lem-changing-a-function-at-finitely-many-points
kind: lemma
title: "Changing an integrable function at finitely many points changes neither its integrability nor its integral"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-linearity-of-the-integral, thm-riemann-criterion, lem-integral-elementary-bounds, def-darboux-sums, def-partition-and-refinement, def-darboux-integral, lem-finite-sum-laws, def-finite-sum, thm-induction-principle, def-countable, def-equinumerous, thm-of-archimedean, cor-archimedean-reciprocal, def-canonical-natural, lem-of-naturals-positive, def-bounded-set, def-interval, def-ordered-field, def-complete-ordered-field]
forward_refs: [fs-the-integral-function-is-always-a-primitive]
justified_by: []
aliases: []
landmark: false
short: "finitely many values do not matter"
proof_strategy: induction
verification:
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
  precheck: pass
  audited: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Riemann integral (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Riemann_integral"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 6"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, Properties of the Riemann integral"
      url: "https://www.jirka.org/ra/html/sec_rintprop.html"
pipeline_run: null
---

## Statement

Let $a < b$ be reals, let $f : [a,b] \to \mathbb{R}$ be integrable
([[def-darboux-integral]]), let $E \subseteq [a,b]$ be finite
([[def-countable]], [[def-equinumerous]]), and let $g : [a,b] \to \mathbb{R}$
satisfy

$$g(x) \;=\; f(x) \qquad \text{for every } x \in [a,b] \setminus E .$$

Then $g$ is integrable on $[a,b]$ and

$$\int_a^b g \;=\; \int_a^b f .$$

In particular the values of an integrand at the endpoints of the interval, and at
any finite set of points, are irrelevant to both questions.

## Facts & Assumptions

**Given:** Reals $a < b$, an integrable $f : [a,b] \to \mathbb{R}$, a finite $E \subseteq [a,b]$, and $g : [a,b] \to \mathbb{R}$ agreeing with $f$ off $E$. Finite means: there are $r \in \mathbb{N}$ and a bijection $e$ from $\{\, j \in \mathbb{N} : j < r \,\}$ onto $E$ ([[def-countable]], [[def-equinumerous]]).

[L1] Riemann's criterion ([[thm-riemann-criterion]]), and: an integrable function is bounded, since Darboux sums are defined only for bounded functions ([[def-darboux-sums]], [[def-bounded-set]]).

[L2] For a partition $R = (n,t)$ and a bounded function $h$ on the interval: $L(h,R) = \sum_{i<n}m_i\Delta_i$, $U(h,R) = \sum_{i<n}M_i\Delta_i$ with $m_i = \inf h[I_i] \le M_i = \sup h[I_i]$, and $L(h,R) \le \underline{\int_a^b} h \le \overline{\int_a^b} h \le U(h,R)$ ([[def-darboux-sums]], [[def-darboux-integral]]).

[L3] The uniform partition $U_N$ of $[a,b]$ into $N \ge 1$ parts has $n = N$ and every $\Delta_i$ equal to $(b-a)/\iota(N)$, and its subintervals cover $[a,b]$; the index list $t$ is strictly increasing on indices $\le N$, hence injective there ([[def-partition-and-refinement]], [[def-canonical-natural]], [[def-interval]]).

[L4] Finite sums: monotonicity in the terms, scaling, additivity, and splitting; consequently, if $x_i = 0$ for every $i < n$ except $i = j$, then $\sum_{i<n}x_i = x_j$, by splitting at $j$ and at $j+1$ and $\sum 0 = 0$ ([[def-finite-sum]], [[lem-finite-sum-laws]], clauses 1 to 4).

[L5] Sums and scalar multiples of integrable functions are integrable, with the corresponding identity for the integrals ([[thm-linearity-of-the-integral]]); and the constant function $0$ is integrable with integral $0$ ([[lem-integral-elementary-bounds]]).

[L6] For every real $\eta > 0$ there is a natural $N \ge 1$ with $1/\iota(N) < \eta$, and $\iota(N) > 0$ for $N \ge 1$ ([[cor-archimedean-reciprocal]], [[thm-of-archimedean]], [[lem-of-naturals-positive]]).

[L7] Induction on $\mathbb{N}$ ([[thm-induction-principle]]).

[L8] Ordered-field arithmetic: multiplying an inequality by a nonnegative quantity and adding constants preserve it, the order is total and transitive, and a real of absolute value below every positive real is $0$ ([[def-ordered-field]], [[def-complete-ordered-field]]).

## Proof

**Proof technique:** induction.

1.1 **The one-point case is proved first, for a function called $w$ so that no symbol is reused.** Let $p \in [a,b]$ and let $w : [a,b] \to \mathbb{R}$ satisfy $w(x) = 0$ for every $x \ne p$; put $K := |w(p)|$, so $|w(x)| \le K$ for every $x$ and $w$ is bounded. [given, L1]

1.2 Fix $N \ge 1$ and write $U_N = (N,t)$ with subintervals $I_i$ and lengths $\Delta_i = (b-a)/\iota(N)$. Define $\theta_i := 1$ if $p \in I_i$ and $\theta_i := 0$ otherwise, for $i < N$. [L3, construct]

1.3 **Setting up the induction.** Put $h := g - f$, so that $h(x) = 0$ for every $x \notin E$, and for $j < r$ define $h_j : [a,b] \to \mathbb{R}$ by $h_j(x) := h(x)$ if $x = e(j)$ and $h_j(x) := 0$ otherwise. Each $h_j$ vanishes off the single point $e(j)$. [given, construct]

2.1 At most two indices $i < N$ have $\theta_i = 1$, and they are consecutive: if $p \in I_i \cap I_j$ with $i < j$ then $t_j \le p \le t_{i+1}$ and $t_{i+1} \le t_j$, so $t_{i+1} = t_j$ and $j = i+1$ by injectivity of $t$. Also some index has $\theta_i = 1$, since the subintervals cover $[a,b]$; let $i_0$ be the least such. [step 1.2, L3, choose]

2.2 For every $x \in [a,b]$ and every $k \le r$, $\sum_{j<k} h_j(x) = h(x)$ when $x = e(j_0)$ for some $j_0 < k$, and $\sum_{j<k}h_j(x) = 0$ otherwise: in the first case all terms with $j \ne j_0$ vanish, because $e$ is injective, and [L4] evaluates the sum; in the second every term is $0$. [step 1.3, L4]

3.1 For every $i < N$: if $\theta_i = 0$ then $w$ vanishes on $I_i$, so $m_i = M_i = 0$, where $m_i$ and $M_i$ are the extreme values of $w$ on $I_i$; and always $-K\theta_i \le m_i \le M_i \le K\theta_i$. [step 1.2, step 2.1, L2, L8]

3.2 Define $y_i := \Delta_i$ for $i = i_0$ and $y_i := 0$ otherwise, and $z_i := \Delta_i$ for $i = i_0+1$ with $i_0 + 1 < N$, and $z_i := 0$ otherwise. Then $\theta_i\Delta_i \le y_i + z_i$ for every $i < N$ by step 2.1, and $\sum_{i<N}(y_i+z_i) \le 2(b-a)/\iota(N)$ by [L4] and [L3]. [step 1.2, step 2.1, L3, L4, construct]

3.3 Let $Q(k)$, for $k \le r$, be the statement that the function $H_k : x \mapsto \sum_{j<k}h_j(x)$ is integrable on $[a,b]$ with $\int_a^b H_k = 0$. [step 2.2, construct]

4.1 By step 3.1 and monotonicity of finite sums, $U(w,U_N) - L(w,U_N) = \sum_{i<N}(M_i-m_i)\Delta_i \le \sum_{i<N}2K\theta_i\Delta_i \le 4K(b-a)/\iota(N)$, and likewise $-2K(b-a)/\iota(N) \le L(w,U_N)$ and $U(w,U_N) \le 2K(b-a)/\iota(N)$. [step 3.1, step 3.2, L2, L4, L8]

4.2 **Base.** $H_0$ is the constant function $0$, integrable with integral $0$ by [L5], so $Q(0)$ holds. [base, step 3.3, L5]

4.3 **Induction hypothesis.** Fix $k < r$ and assume $Q(k)$. [ih, step 3.3]

5.1 Given a real $\eta > 0$, [L6] supplies $N$ with $4K(b-a)/\iota(N) < \eta$, so $w$ satisfies Riemann's criterion and is integrable by [L1]. [step 4.1, L1, L6, L8]

5.2 Moreover $|\int_a^b w| \le 2K(b-a)/\iota(N)$ for every $N \ge 1$ by step 4.1 and [L2], and the right-hand side is below every positive real by [L6]; hence $\int_a^b w = 0$. Steps 1.1 to 5.2 therefore prove: every function on $[a,b]$ vanishing off a single point is integrable with integral $0$. [step 4.1, L2, L6, L8]

6.1 $H_{k+1} = H_k + h_k$ pointwise by [L4], and $h_k$ is integrable with integral $0$ by steps 5.1 and 5.2 applied to $w := h_k$ and $p := e(k)$; so $H_{k+1}$ is integrable with $\int_a^b H_{k+1} = 0 + 0 = 0$ by [L5], which is $Q(k+1)$. [step 5.1, step 5.2, step 1.3, step 4.3, L4, L5]

7.1 By [L7] with steps 4.2 and 6.1, $Q(k)$ holds for every $k \le r$; at $k = r$, and by step 2.2, $H_r = h$, so $h$ is integrable with $\int_a^b h = 0$. [step 2.2, step 4.2, step 4.3, step 6.1, L7]

8.1 Hence $g = f + h$ is integrable with $\int_a^b g = \int_a^b f + 0 = \int_a^b f$ by [L5]. [step 7.1, L5, discharge-induction] ∎

## Remarks

- **The subtle point is that a partition point lies in two subintervals.** The subintervals of a partition are closed and overlap at their shared endpoints ([[def-partition-and-refinement]]), so the exceptional point $p$ may belong to two of them; step 2.1 proves that it belongs to at most two and that they are consecutive, and step 3.2 is what pays for that possibility, with the factor $2$ that survives into step 4.1.

- **Nothing here is an index-subset sum.** The indicator sequence $\theta$ of step 1.2 is a genuine sequence on $\{\,i : i<N\,\}$, and every estimate is applied term by term and then summed by the monotonicity clause of [[lem-finite-sum-laws]], whose clauses are stated for $\sum_{i<n}$; no sum over a subset of the index range is used.

- **The contrast with the derivative is the point of the lemma.** Changing a function at one point can destroy differentiability at that point, and changes nothing at any other point, since a limit at $x \ne p$ may be taken over a neighbourhood excluding $p$; it changes no integral at all. This is also why the integral function of an integrable $f$ cannot detect a change of $f$ at a point, which is what [[fs-the-integral-function-is-always-a-primitive]] on the companion page turns into a refutation.
