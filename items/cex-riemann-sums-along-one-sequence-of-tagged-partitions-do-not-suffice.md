---
id: cex-riemann-sums-along-one-sequence-of-tagged-partitions-do-not-suffice
kind: counterexample
title: "For the Dirichlet function every uniform partition with rational tags gives Riemann sum $1$, so the sums converge along that sequence of tagged partitions although the function is not integrable: the mesh condition of the Riemann definition quantifies over all tagged partitions and cannot be weakened to one sequence"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-tagged-partition-and-riemann-sum, thm-darboux-equals-riemann, cex-dirichlet-is-not-riemann-integrable, def-dirichlet-and-thomae-functions, def-partition-and-refinement, lem-finite-sum-laws, def-finite-sum, def-real-limit, def-sequence, lem-q-and-irrationals-dense-r, def-darboux-integral, def-interval, def-canonical-natural, lem-of-naturals-positive, cor-archimedean-reciprocal, thm-of-archimedean, def-complete-ordered-field, def-ordered-field, lem-of-add-order, lem-of-sign-rules, lem-of-abs-value]
justified_by: []
aliases: []
landmark: true
short: "one sequence of tagged partitions is not enough"
proof_strategy: direct
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
    - title: "Riemann sum (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Riemann_sum"
    - title: "Dirichlet function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Dirichlet_function"
    - title: "MIT 18.013A, Nonintegrable Functions"
      url: "https://ocw.mit.edu/ans7870/18/18.013a/textbook/HTML/chapter20/section04.html"
    - title: "J. Hunter, Chapter 11: The Riemann Integral"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/ch11.pdf"
pipeline_run: null
---

## Statement refuted

**Refuted:** that a bounded $f$ on $[a,b]$ is Riemann integrable with integral
$I$ as soon as there is **one** sequence $(P_N,\xi^N)$ of tagged partitions with
$\|P_N\| \to 0$ and $S(f,P_N,\xi^N) \to I$
([[def-tagged-partition-and-riemann-sum]], [[def-darboux-integral]]).

The witness is again the Dirichlet function on $[0,1]$
([[def-dirichlet-and-thomae-functions]]). Take $P_N := U_N$, the uniform
partition into $N \ge 1$ parts, and tag each subinterval by its left endpoint
$\xi^N_i := \iota(i)/\iota(N)$, a rational. Then

$$\|U_N\| = \frac{1}{\iota(N)} \longrightarrow 0, \qquad S(\mathbf{1}_{\mathbb{Q}}, U_N, \xi^N) = 1 \ \text{ for every } N \ge 1,$$

so the Riemann sums converge, to $1$; and yet
$\mathbf{1}_{\mathbb{Q}}$ is not Riemann integrable on $[0,1]$
([[cex-dirichlet-is-not-riemann-integrable]]).

**What this shows about [[thm-darboux-equals-riemann]].** Condition 2 there
quantifies over **every** tagged partition of mesh below $\delta$, tags included,
and the quantifier cannot be replaced by the existence of one good sequence.
Tagging the very same partition by irrationals instead gives Riemann sum $0$, so
for each $N$ the two taggings of $U_N$ give the two values $1$ and $0$; no real
number is within $1/2$ of both.

## Facts & Assumptions

**Given:** $g : [0,1] \to \mathbb{R}$ with $g(x) = 1$ for rational $x$ and $g(x) = 0$ for irrational $x$; for $N \ge 1$ the uniform partition $U_N = (N,t)$ of $[0,1]$ with $t_i = \iota(i)/\iota(N)$ and $\Delta_i = 1/\iota(N)$; and the tagging $\xi^N$ with $\xi^N_i := t_i$ for $i < N$.

[A1] The refuted claim: if some sequence of tagged partitions of $[0,1]$ has meshes tending to $0$ and Riemann sums tending to $I$, then $g$ is Riemann integrable with integral $I$.

[L1] For $U_N$: $t_i = \iota(i)/\iota(N) \in [0,1]$, $t_i < t_{i+1}$, $\Delta_i = 1/\iota(N)$, $\sum_{i<N}\Delta_i = 1$, and $\|U_N\| = 1/\iota(N)$ ([[def-partition-and-refinement]], [[def-interval]]).

[L2] $\xi^N_i := t_i \in I_i$ defines a tagging of $U_N$, and $S(g,U_N,\xi^N) = \sum_{i<N}g(\xi^N_i)\Delta_i$ ([[def-tagged-partition-and-riemann-sum]]).

[L3] Each $t_i = \iota(i)/\iota(N)$ is rational, being a quotient of canonical naturals with $\iota(N) > 0$; hence $g(t_i) = 1$ ([[def-canonical-natural]], [[lem-of-naturals-positive]], [[def-dirichlet-and-thomae-functions]]).

[L4] Finite sums: scaling and $\sum_{i<N}1 \cdot \Delta_i = \sum_{i<N}\Delta_i$ ([[def-finite-sum]], [[lem-finite-sum-laws]]).

[L5] A constant sequence converges to its value; and for every real $\eta > 0$ there is $N \ge 1$ with $1/\iota(N) < \eta$, so the sequence $N \mapsto 1/\iota(N)$ converges to $0$, its terms being positive and decreasing below every positive bound ([[def-real-limit]], [[def-sequence]], [[cor-archimedean-reciprocal]], [[thm-of-archimedean]], [[lem-of-naturals-positive]], [[lem-of-abs-value]]).

[L6] $g$ is not Riemann integrable on $[0,1]$; its lower Darboux integral is $0$ and its upper Darboux integral is $1$ ([[cex-dirichlet-is-not-riemann-integrable]], [[def-darboux-integral]]).

[L7] Every nonempty open interval contains an irrational ([[lem-q-and-irrationals-dense-r]]).

[L8] The Riemann condition of [[thm-darboux-equals-riemann]] requires, for each $\varepsilon > 0$, a $\delta > 0$ such that **every** tagged partition of mesh below $\delta$ has its Riemann sum within $\varepsilon$ of the integral.

[L9] Ordered-field arithmetic: the order is total and transitive, $\iota(N) > 0$ for $N \ge 1$, and $0 \ne 1$ ([[lem-of-add-order]], [[lem-of-sign-rules]], [[def-ordered-field]], [[def-complete-ordered-field]]). These order-arithmetic facts are stated by their sources for the strict order only; the nonstrict forms used below follow by adjoining the equality case, in which the two sides coincide.

## Counterexample

**Proof technique:** direct.

1.1 For each $N \ge 1$, $(U_N,\xi^N)$ is a tagged partition of $[0,1]$ of mesh $1/\iota(N)$, by [L1] and [L2]. [given, L1, L2]

1.2 By [L3] every tag $\xi^N_i = t_i$ is rational, so $g(\xi^N_i) = 1$; hence by [L2], [L4] and [L1], $S(g,U_N,\xi^N) = \sum_{i<N}1\cdot\Delta_i = \sum_{i<N}\Delta_i = 1$. [given, L1, L2, L3, L4]

2.1 The sequence $N \mapsto \|U_N\| = 1/\iota(N)$ converges to $0$ and the sequence $N \mapsto S(g,U_N,\xi^N)$ is constantly $1$, hence converges to $1$, by [L5]. [step 1.1, step 1.2, L5]

3.1 So the hypothesis of [A1] is met with $I := 1$; but $g$ is not Riemann integrable on $[0,1]$ by [L6]. [A1] is therefore refuted. [step 2.1, A1, L6]

4.1 Moreover, for **each** $N \ge 1$ the same partition carries a tagging whose Riemann sum is $0$: by [L7] each open interval $(t_i,t_{i+1})$ contains an irrational, and choosing one in each of the $N$ subintervals is a finite selection, giving a tagging $\zeta$ of $U_N$ with $g(\zeta_i) = 0$ for every $i < N$ and hence $S(g,U_N,\zeta) = 0$ by [L2] and [L4]. So for every real $\delta > 0$ there are tagged partitions of mesh below $\delta$ with Riemann sum $1$ and others with Riemann sum $0$, and by [L9] no single real $I$ can satisfy the condition of [L8] at $\varepsilon := 2^{-1}$. [step 1.1, step 1.2, L2, L4, L5, L7, L8, L9] ∎

## Remarks

- **What survives of the naive formulation.** If $f$ **is** integrable then every sequence of tagged partitions with meshes tending to $0$ has Riemann sums tending to $\int_a^b f$, by [[thm-darboux-equals-riemann]]; the failure is only in the converse. So sequences of Riemann sums are a legitimate way to *compute* an integral once integrability is known, and no way at all to establish it.

- **The Darboux sums see the difference immediately.** For every partition $P$ of $[0,1]$ one has $L(g,P) = 0$ and $U(g,P) = 1$ ([[cex-dirichlet-is-not-riemann-integrable]]), and by [[def-tagged-partition-and-riemann-sum]] every Riemann sum over $P$ lies between them. The rational tags realise the upper end and the irrational tags the lower end; the choice of tags moves the sum across the whole gap.

- **Choosing the irrational tags costs nothing.** Step 4.1 selects one irrational in each of finitely many subintervals, which is a finite family; the same observation as in [[rem-riemann-integral-choice-ledger]] applies, and no choice principle is used.
