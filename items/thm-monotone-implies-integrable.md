---
id: thm-monotone-implies-integrable
kind: theorem
title: "A monotone function on $[a,b]$ is Riemann integrable: for the uniform partition into $N$ parts the upper minus lower sum telescopes to $|f(b) - f(a)|\\,(b-a)/\\iota(N)$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-riemann-criterion, def-monotone-function, def-partition-and-refinement, def-darboux-sums, def-darboux-integral, lem-finite-sum-laws, def-finite-sum, def-bounded-set, cor-archimedean-reciprocal, thm-of-archimedean, def-canonical-natural, lem-of-naturals-positive, def-interval, def-max-min, def-infimum, lem-of-abs-value, def-complete-ordered-field, def-ordered-field, lem-of-add-order, lem-of-sign-rules]
justified_by: []
aliases: []
landmark: true
short: "monotone $\\Rightarrow$ integrable"
proof_strategy: cases
verification:
  audited: 2026-07-28
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
    - title: "Monotonic function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Monotonic_function"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 6"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, The Riemann Integral"
      url: "https://www.jirka.org/ra/html/sec_rint.html"
    - title: "J. Hunter, MAT 125B Lecture Notes"
      url: "https://www.math.ucdavis.edu/~hunter/m125b/125bLectureNotes_5-26-11.pdf"
pipeline_run: null
---

## Statement

Let $a < b$ be reals and let $f : [a,b] \to \mathbb{R}$ be monotone, that is
nondecreasing or nonincreasing on $[a,b]$ ([[def-monotone-function]]). Then $f$
is bounded ([[def-bounded-set]]) and Riemann integrable on $[a,b]$
([[def-darboux-integral]]).

Moreover, for the uniform partition $U_N$ of $[a,b]$ into $N \ge 1$ parts
([[def-partition-and-refinement]]),

$$U(f,U_N) - L(f,U_N) \;=\; \bigl|f(b) - f(a)\bigr| \cdot \frac{b-a}{\iota(N)} ,$$

where $\iota(N)$ is the canonical natural of $N$ in $\mathbb{R}$
([[def-canonical-natural]]). The right-hand side is an **equality**, not an
estimate: the sum $\sum_{i<N}(M_i - m_i)$ telescopes exactly, because on each
subinterval a monotone function attains its extremes at the two endpoints.

No continuity is assumed, and none holds in general: a nondecreasing function may
be discontinuous at every rational
([[thm-monotone-with-prescribed-discontinuity-set]]), and the companion page of
this pair works out the integral of the floor function, the simplest
discontinuous monotone integrand.

## Facts & Assumptions

**Given:** Reals $a < b$ and a monotone $f : [a,b] \to \mathbb{R}$. Let $N \ge 1$ be a natural number and let $U_N = (N,t)$ be the uniform partition of $[a,b]$ into $N$ parts, with subintervals $I_i = [t_i,t_{i+1}]$ and lengths $\Delta_i = (b-a)/\iota(N)$ for $i < N$.

[L1] $f$ is nondecreasing, meaning $f(x) \le f(y)$ whenever $x \le y$ in $[a,b]$, or nonincreasing, meaning $f(x) \ge f(y)$ whenever $x \le y$; these two cases are what "monotone" means and they exhaust it ([[def-monotone-function]]).

[L2] For the uniform partition: $t_0 = a$, $t_N = b$, $t_i < t_{i+1}$, every $\Delta_i = (b-a)/\iota(N) > 0$, and $\sum_{i<N}\Delta_i = b-a$ ([[def-partition-and-refinement]]).

[L3] If a nonempty set $S \subseteq \mathbb{R}$ has a greatest element then that element is $\sup S$, and if it has a least element then that element is $\inf S$ ([[def-max-min]], [[def-infimum]], [[def-complete-ordered-field]]).

[L4] $M_i = \sup f[I_i]$, $m_i = \inf f[I_i]$, $U(f,P) - L(f,P) = \sum_{i<n}(M_i-m_i)\Delta_i$ ([[def-darboux-sums]], [[lem-finite-sum-laws]]).

[L5] Finite sums: scaling and telescoping, $\sum_{i<N}(c_{i+1}-c_i) = c_N - c_0$ ([[def-finite-sum]], [[lem-finite-sum-laws]]).

[L6] Riemann's criterion: a bounded $f$ is integrable if and only if for every real $\varepsilon > 0$ there is a partition $P$ with $U(f,P) - L(f,P) < \varepsilon$ ([[thm-riemann-criterion]]).

[L7] For every real $\eta > 0$ there is a natural $N \ge 1$ with $1/\iota(N) < \eta$, and $\iota(N) > 0$ for $N \ge 1$ ([[cor-archimedean-reciprocal]], [[thm-of-archimedean]], [[def-canonical-natural]], [[lem-of-naturals-positive]]).

[L8] Ordered-field arithmetic and the absolute value: adding a constant and multiplying by a positive quantity preserve an inequality; the order is total and transitive; $|x| = x$ for $x \ge 0$ and $|x| = -x$ for $x \le 0$ ([[lem-of-abs-value]], [[lem-of-add-order]], [[lem-of-sign-rules]], [[def-ordered-field]], [[def-complete-ordered-field]], [[def-interval]]). These order-arithmetic facts are stated by their sources for the strict order only; the nonstrict forms used below follow by adjoining the equality case, in which the two sides coincide.

## Proof

**Proof technique:** cases.

1.1 By [L1] there are two cases, $f$ nondecreasing and $f$ nonincreasing, and they exhaust the hypothesis. Every $x \in [a,b]$ satisfies $a \le x \le b$ ([[def-interval]]). [given, L1, cases]

1.2 **Case: $f$ is nondecreasing.** Then $f(a) \le f(x) \le f(b)$ for every $x \in [a,b]$, so $f$ is bounded by [L8]; and for $i < N$ and $x \in I_i$ one has $t_i \le x \le t_{i+1}$, hence $f(t_i) \le f(x) \le f(t_{i+1})$. Since $f(t_i)$ and $f(t_{i+1})$ themselves lie in $f[I_i]$, they are its least and greatest elements, so $m_i = f(t_i)$ and $M_i = f(t_{i+1})$ by [L3]. [assume-case up, given, L2, L3, L8]

1.3 **Case: $f$ is nonincreasing.** Then $f(b) \le f(x) \le f(a)$ for every $x \in [a,b]$, so $f$ is bounded; and for $i < N$ and $x \in I_i$ one has $f(t_{i+1}) \le f(x) \le f(t_i)$, so $m_i = f(t_{i+1})$ and $M_i = f(t_i)$ by [L3]. [assume-case down, given, L2, L3, L8]

2.1 In the nondecreasing case, $M_i - m_i = f(t_{i+1}) - f(t_i)$, so by [L4], [L2] and [L5], $U(f,U_N) - L(f,U_N) = \sum_{i<N}\bigl(f(t_{i+1}) - f(t_i)\bigr)\frac{b-a}{\iota(N)} = \frac{b-a}{\iota(N)}\bigl(f(t_N) - f(t_0)\bigr) = \frac{b-a}{\iota(N)}\bigl(f(b) - f(a)\bigr)$, and $f(b) - f(a) \ge 0$, so this equals $|f(b)-f(a)|(b-a)/\iota(N)$ by [L8]. [step 1.2, L2, L4, L5, L8]

2.2 In the nonincreasing case the same computation gives $U(f,U_N) - L(f,U_N) = \frac{b-a}{\iota(N)}\bigl(f(a) - f(b)\bigr)$ with $f(a) - f(b) \ge 0$, which is again $|f(b)-f(a)|(b-a)/\iota(N)$ by [L8]. The two cases of step 1.1 exhaust the hypothesis, so the displayed identity holds for every monotone $f$, which is also bounded. [step 1.3, L2, L4, L5, L8, cases-exhaustive]

3.1 Let a real $\varepsilon > 0$ be given and put $\eta := \varepsilon \cdot \bigl((|f(b)-f(a)| + 1)(b-a)\bigr)^{-1}$, a positive real by [L8]. By [L7] fix a natural $N \ge 1$ with $1/\iota(N) < \eta$. [step 2.2, L7, L8, choose]

4.1 Then $U(f,U_N) - L(f,U_N) = |f(b)-f(a)|\,(b-a)/\iota(N) \le (|f(b)-f(a)|+1)(b-a)/\iota(N) < (|f(b)-f(a)|+1)(b-a)\,\eta = \varepsilon$: the first inequality because $(b-a)/\iota(N) > 0$ and $|f(b)-f(a)| \le |f(b)-f(a)|+1$, and the second because $(|f(b)-f(a)|+1)(b-a) > 0$ and $1/\iota(N) < \eta$. So $U(f,U_N) - L(f,U_N) < \varepsilon$. [step 2.1, step 2.2, step 3.1, L8]

5.1 Since the real $\varepsilon > 0$ was arbitrary and step 4.1 produced a partition with $U - L < \varepsilon$, criterion [L6] applies: $f$ is bounded by steps 1.2 and 1.3 and Riemann integrable on $[a,b]$. [step 1.2, step 1.3, step 4.1, L6] ∎

## Remarks

- **The telescoping is exact, and that is what makes the proof short.** No estimate of $M_i - m_i$ is needed subinterval by subinterval: the whole sum of the gaps is the total rise of $f$, however wildly the rise is distributed. This is why a monotone function with infinitely many jumps is no harder than a continuous one here, and it is the same telescoping that [[def-partition-and-refinement]] uses for the lengths.

- **Uniformity of the partition is a convenience, not a necessity.** For an arbitrary partition $P$ the same identification of $m_i$ and $M_i$ gives $U(f,P) - L(f,P) \le \|P\| \cdot |f(b)-f(a)|$, by bounding each $\Delta_i$ by the mesh before telescoping. The uniform partition is used above only so that $\Delta_i$ can be pulled out of the sum as a constant.

- **No choice principle is used.** The partition is given by a formula in $N$, and $N$ is obtained from one instance of the Archimedean property. See [[rem-riemann-integral-choice-ledger]].

- **Monotone is strictly weaker than continuous here.** The floor function is nondecreasing with jumps at every integer and is integrable (the companion page of this pair); and a monotone function has at most countably many discontinuities ([[thm-froda]]), so this theorem is also a special case of [[cor-countably-many-discontinuities-integrable]] once that is available. The direct proof is kept because it is elementary and quantitative, and because it costs no choice at all.
