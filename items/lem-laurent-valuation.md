---
id: lem-laurent-valuation
kind: lemma
title: "Valuation and leading coefficient in $\\mathbb{R}((t^{-1}))$: $v(fg) = v(f) + v(g)$, and the behaviour of $v$ under sums"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-formal-laurent-series, lem-laurent-series-ring, def-field, thm-reals-ordered-field, thm-int-ordered-ring, def-int-order]
aliases: []
landmark: false
short: "$v(fg) = v(f)+v(g)$"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-26
  audited: 2026-07-26
sources:
  scraped: []
  references:
    - title: "Valuation (algebra) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Valuation_(algebra)"
    - title: "Hahn series (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Hahn_series"
    - title: "B. Sambale, An invitation to formal power series"
      url: "https://link.springer.com/article/10.1365/s13291-022-00256-6"
    - title: "Laurent series (Encyclopedia of Mathematics)"
      url: "https://encyclopediaofmath.org/wiki/Laurent_series"
    - title: "H. G. Dales, Norming infinitesimals of large fields"
      url: "https://eprints.lancs.ac.uk/id/eprint/78955/1/Norminginfinitesimalsfinal.pdf"
pipeline_run: null
---

## Statement

Let $K = \mathbb{R}((t^{-1}))$ with its valuation $v$ and leading coefficient
$\operatorname{lc}$ ([[def-formal-laurent-series]]), and let $f, g \in K$ with
$f \ne 0_K$ and $g \ne 0_K$. Then:

1. **(Products.)** $fg \ne 0_K$, and
   $$v(fg) = v(f) + v(g), \qquad \operatorname{lc}(fg) = \operatorname{lc}(f)\operatorname{lc}(g).$$
   In particular $K$ has no zero divisors.
2. **(Negatives.)** $-f \ne 0_K$, $v(-f) = v(f)$ and
   $\operatorname{lc}(-f) = -\operatorname{lc}(f)$.
3. **(Unequal valuations.)** If $v(f) < v(g)$ then $f + g \ne 0_K$,
   $v(f+g) = v(f)$ and $\operatorname{lc}(f+g) = \operatorname{lc}(f)$.
4. **(Equal valuations, no cancellation.)** If $v(f) = v(g) = q$ and
   $\operatorname{lc}(f) + \operatorname{lc}(g) \ne 0$, then $f + g \ne 0_K$,
   $v(f+g) = q$ and
   $\operatorname{lc}(f+g) = \operatorname{lc}(f) + \operatorname{lc}(g)$.
5. **(Sums in general.)** If $f + g \ne 0_K$ then
   $v(f+g) \ge \min\{v(f), v(g)\}$.

## Facts & Assumptions

**Given:** $f, g \in K$ with $f \ne 0_K$ and $g \ne 0_K$; write $p := v(f)$ and $q := v(g)$.

[L1] For a nonzero $h \in K$ one has $h(k) = 0$ for every $k < v(h)$ and $h(v(h)) = \operatorname{lc}(h) \ne 0$; conversely, if $h(k) = 0$ for all $k < r$ and $h(r) \ne 0$ then $h \ne 0_K$, $v(h) = r$ and $\operatorname{lc}(h) = h(r)$ ([[def-formal-laurent-series]]).

[L2] $(f+g)(k) = f(k) + g(k)$ and $(fg)(k) = \sum_{i+j=k} f(i)g(j)$, a finite sum; if $f$ vanishes at every index below $m$ and $g$ at every index below $n$, then $fg$ vanishes at every index below $m+n$ ([[lem-laurent-series-ring]], [[def-formal-laurent-series]]).

[L3] $\mathbb{R}$ is a field, so a product of two nonzero reals is nonzero, and $-x = 0$ only for $x = 0$ ([[def-field]], [[thm-reals-ordered-field]]).

[L4] The order on $\mathbb{Z}$ is total and compatible with addition ([[thm-int-ordered-ring]], [[def-int-order]]).

## Proof

**Proof technique:** direct.

1.1 By [L1] $f$ vanishes at every index below $p$ and $g$ at every index below $q$, so by [L2] $(fg)(k) = 0$ for every $k < p + q$. [L1, L2]

1.2 If $(i,j)$ satisfies $i + j = p+q$ and $f(i)g(j) \ne 0$ then $i \ge p$ and $j \ge q$ by [L1], and $i + j = p + q$ then forces $i = p$ and $j = q$; hence $(fg)(p+q) = f(p)g(q) = \operatorname{lc}(f)\operatorname{lc}(g)$, which is nonzero by [L3]. [L1, L2, L3, L4]

1.3 $(-f)(k) = -f(k)$ for every $k$, so $-f$ vanishes exactly where $f$ does; by [L1] and [L3] this gives $-f \ne 0_K$, $v(-f) = p$ and $\operatorname{lc}(-f) = -\operatorname{lc}(f) \ne 0$. [L1, L2, L3]

1.4 Suppose $p < q$. For $k < p$ both $f(k) = 0$ and $g(k) = 0$, so $(f+g)(k) = 0$; and $g(p) = 0$ because $p < q$, so $(f+g)(p) = \operatorname{lc}(f) \ne 0$. By [L1], $f + g \ne 0_K$ with $v(f+g) = p$ and $\operatorname{lc}(f+g) = \operatorname{lc}(f)$. [L1, L2, L4]

1.5 Suppose $p = q$ and $\operatorname{lc}(f) + \operatorname{lc}(g) \ne 0$. For $k < p$ both terms vanish, so $(f+g)(k) = 0$; and $(f+g)(p) = \operatorname{lc}(f) + \operatorname{lc}(g) \ne 0$. By [L1], $f+g \ne 0_K$, $v(f+g) = p$ and $\operatorname{lc}(f+g) = \operatorname{lc}(f) + \operatorname{lc}(g)$. [L1, L2]

1.6 For $k < \min\{p,q\}$ one has $f(k) = g(k) = 0$, hence $(f+g)(k) = 0$; so if $f + g \ne 0_K$ then its valuation, being the least index at which it is nonzero, satisfies $v(f+g) \ge \min\{p,q\}$. [L1, L2, L4]

2.1 By [step 1.1] $fg$ vanishes at every index below $p+q$ and by [step 1.2] it is nonzero at $p+q$; so by [L1] $fg \ne 0_K$, $v(fg) = p + q$ and $\operatorname{lc}(fg) = \operatorname{lc}(f)\operatorname{lc}(g)$. Since $f$ and $g$ were arbitrary nonzero elements, no product of nonzero elements of $K$ is zero. [step 1.1, step 1.2, L1]

3.1 Clause 1 is [step 2.1], clause 2 is [step 1.3], clause 3 is [step 1.4], clause 4 is [step 1.5] and clause 5 is [step 1.6]. [step 1.3, step 1.4, step 1.5, step 1.6, step 2.1] ∎
