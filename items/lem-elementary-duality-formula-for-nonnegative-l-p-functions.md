---
id: lem-elementary-duality-formula-for-nonnegative-l-p-functions
kind: lemma
title: "For $1 < p < \\infty$, the $L^p$ norm of a nonnegative function is the supremum of its pairings with $L^q$ unit vectors"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-conjugate-exponents, thm-holder-inequality-for-integrals, def-l-p-space-as-a-quotient-by-null-functions, thm-the-l-p-norm-descends-to-the-quotient-and-makes-l-p-a-normed-space]
landmark: false
proof_strategy: "Use Holder for the upper bound, and for the lower bound write down the explicit extremizer $$g = F^{p-1}/\\|F\\|_p^{p/q}.$$ This is the exact half of duality that Minkowski's integral inequality is allowed to consume before MT-16."
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "John K. Hunter, Measure Theory"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf"
---
## Statement

Let $1 < p < \infty$ and let $q$ be the conjugate exponent. If
$F \in L^p(\mu)$ is nonnegative, then

$$ \|F\|_p = \sup\left\{ \int Fg\,d\mu : g \ge 0,\ \|g\|_q \le 1 \right\}. $$

## Facts & Assumptions

**Given:** $1 < p < \infty$ and a nonnegative function $F \in L^p(\mu)$.

[L1] Conjugate exponents are defined in [[def-conjugate-exponents]].

[L2] Holder's inequality holds for the pairing
([[thm-holder-inequality-for-integrals]]).

[L3] The $L^p$ norm is the norm on the quotient space
([[def-l-p-space-as-a-quotient-by-null-functions]],
[[thm-the-l-p-norm-descends-to-the-quotient-and-makes-l-p-a-normed-space]]).

## Proof

**Proof technique:** direct.

1.1 For every $g \ge 0$ with $\|g\|_q \le 1$, [L2] gives [L2, L3, given, algebra]
$$ \int Fg\,d\mu \le \|F\|_p\|g\|_q \le \|F\|_p. $$
So the displayed supremum is at most $\|F\|_p$. [L2, L3, given, algebra]
2.1 If $\|F\|_p = 0$, then $F=0$ almost everywhere and the supremum is also $0$. [L1, L3, step 1.1, algebra, construct]
Otherwise define
$$ g := \frac{F^{p-1}}{\|F\|_p^{p/q}}. $$
Because $(p-1)q = p$, one has
$$ \|g\|_q^q = \frac{\int F^{(p-1)q}\,d\mu}{\|F\|_p^p} = 1, $$
so $\|g\|_q=1$, and
$$ \int Fg\,d\mu = \frac{\int F^p\,d\mu}{\|F\|_p^{p/q}} = \|F\|_p. $$ [L1, L3, step 1.1, algebra, construct]
3.1 Step 1.1 gives the upper bound and step 2.1 attains it, so the supremum [step 1.1, step 2.1]
equals $\|F\|_p$. [step 1.1, step 2.1] ∎