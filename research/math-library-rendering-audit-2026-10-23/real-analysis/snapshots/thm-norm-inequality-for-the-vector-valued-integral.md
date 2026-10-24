---
id: thm-norm-inequality-for-the-vector-valued-integral
kind: theorem
title: "For $a \\le b$ and $f : [a,b] \\to \\mathbb{R}^m$ integrable when $a<b$, $\\bigl\\lVert\\int_a^b f\\bigr\\rVert_2 \\le \\int_a^b \\lVert f\\rVert_2$; for $a<b$, $\\lVert f\\rVert_2$ is integrable"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-vector-valued-derivative-and-integral, def-vector-valued-functions-limits-and-continuity, def-euclidean-inner-product, thm-cauchy-schwarz-and-the-euclidean-norm, def-p-norms-on-rn, def-norm-and-normed-space, thm-linearity-of-the-integral, thm-monotonicity-of-the-integral, cor-integrability-of-absolute-values-products-and-lattice-operations, thm-composition-with-a-continuous-function, def-oriented-integral, def-darboux-integral, thm-of-square-roots, thm-continuous-inverse, def-continuity-real, lem-of-inverse-positive, lem-finite-sum-laws, def-finite-sum, thm-induction-principle, def-bounded-set, lem-of-square-monotone, def-interval, thm-algebra-of-continuous-functions, lem-of-abs-value]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-5.6-terra-codex-subscription
    verdict: certify
    date: 2026-08-10
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Riemann integral (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Riemann_integral"
    - title: "Cauchy-Schwarz inequality (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cauchy%E2%80%93Schwarz_inequality"
    - title: "Stephen Semmes, Some Basic Topics in Analysis, Sections 8.1.2–8.1.3"
      url: "https://math.rice.edu/~semmes/math322.pdf"
    - title: "Robert Gressman, Advanced Analysis, Integrating Vector-Valued Functions; Jensen's Inequality"
      url: "https://www2.math.upenn.edu/~gressman/analysis/13-jensen.html"
pipeline_run: null
---

## Statement

Let $m \in \mathbb{N}$ with $m \ge 1$, let $a, b \in \mathbb{R}$ with $a \le b$
and let $f : [a,b] \to \mathbb{R}^{m}$. If $a<b$, assume that $f$ is integrable
([[def-vector-valued-derivative-and-integral]]). Then:

1. if $a < b$, the real-valued function $t \mapsto \lVert f(t)\rVert_2$ is
   integrable on $[a,b]$ ([[def-darboux-integral]], [[def-p-norms-on-rn]]);
2. $$\Bigl\lVert \int_a^b f \Bigr\rVert_2 \;\le\; \int_a^b \lVert f\rVert_2 .$$

**The hypothesis $a \le b$ is not decoration.** With the orientation convention
of [[def-oriented-integral]] and
[[def-vector-valued-derivative-and-integral]], interchanging the limits changes
the sign of the right-hand side but not of the left, so for $b < a$ the correct
statement is $\bigl\lVert\int_a^b f\bigr\rVert_2 \le \bigl|\int_a^b \lVert f\rVert_2\bigr|$;
the displayed inequality as written is false in that case. This is the same trap
the scalar inequality of
[[cor-integrability-of-absolute-values-products-and-lattice-operations]] carries.

**Clause 1 is a genuine obligation and is discharged before the estimate.** That
each $f_i$ is integrable does not by itself say that
$\sqrt{\sum_{i<m} f_i^{2}}$ is; the square root has to be brought in through
[[thm-composition-with-a-continuous-function]].

## Facts & Assumptions

**Given:** A natural $m \ge 1$, reals $a \le b$, a function $f : [a,b] \to \mathbb{R}^{m}$ that is integrable when $a<b$, with components $f_0,\dots,f_{m-1}$, and the vector $v := \int_a^b f \in \mathbb{R}^{m}$; write $g(t) := \sum_{i<m} f_i(t)^{2}$, so that $\lVert f(t)\rVert_2 = \sqrt{g(t)}$ ([[def-euclidean-inner-product]], [[def-p-norms-on-rn]]).

[L1] The vector-valued integral is componentwise: when $a<b$, $f$ is integrable exactly when every $f_i$ is bounded and Darboux integrable, and then $\bigl(\int_a^b f\bigr)_i = \int_a^b f_i$; $\int_a^a f = 0$ ([[def-vector-valued-derivative-and-integral]], [[def-darboux-integral]], [[def-oriented-integral]], [[def-bounded-set]]).

[L2] Linearity of the integral: integrable functions on $[a,b]$ are closed under sums and scalar multiples, and $\int_a^b(\lambda u + \mu w) = \lambda\int_a^b u + \mu\int_a^b w$ ([[thm-linearity-of-the-integral]]).

[L3] Monotonicity of the integral: for $a<b$ and integrable $u \le w$ on $[a,b]$, $\int_a^b u \le \int_a^b w$; and an integrable $u \ge 0$ has $\int_a^b u \ge 0$ ([[thm-monotonicity-of-the-integral]]).

[L4] Products and squares: if $u,w$ are integrable on $[a,b]$ then so are $|u|$, $u^{2}$ and $uw$ ([[cor-integrability-of-absolute-values-products-and-lattice-operations]]).

[L5] Composition: if $u$ is integrable on $[a,b]$ with values in $[\alpha,\beta]$ and $\varphi$ is continuous on $[\alpha,\beta]$, then $\varphi\circ u$ is integrable on $[a,b]$ ([[thm-composition-with-a-continuous-function]], [[def-continuity-real]]).

[L6] Square roots ([[thm-of-square-roots]], [[lem-of-square-monotone]]): every $c \ge 0$ has a unique $\sqrt{c} \ge 0$ with $(\sqrt c)^{2} = c$, and $s \mapsto s^{2}$ is strictly increasing on the nonnegatives, hence injective there.

[L7] Continuous inverse theorem: a continuous injective function on an order-convex subset of $\mathbb{R}$ is a bijection onto its order-convex image, whose inverse is continuous ([[thm-continuous-inverse]], [[def-interval]]); and $s \mapsto s^{2}$ is continuous ([[thm-algebra-of-continuous-functions]]).

[L8] Cauchy-Schwarz and the inner product: $\langle u,w\rangle = \sum_{i<m}u_iw_i$ is bilinear and symmetric, $\lVert u\rVert_2 = \sqrt{\langle u,u\rangle}$, $\lVert u\rVert_2 \ge 0$, and $|\langle u,w\rangle| \le \lVert u\rVert_2\lVert w\rVert_2$ ([[def-euclidean-inner-product]], [[thm-cauchy-schwarz-and-the-euclidean-norm]], [[def-norm-and-normed-space]]).

[L9] Laws of finite sums and induction ([[lem-finite-sum-laws]], [[def-finite-sum]], [[thm-induction-principle]]).

[L10] Order arithmetic: $u > 0$ gives $u^{-1} > 0$, a product of nonnegatives is nonnegative, and $t \le |t|$ ([[lem-of-inverse-positive]], [[lem-of-abs-value]]).

## Proof

**Proof technique:** direct.

1.1 If $a = b$ then $\int_a^b f = 0$ and $\int_a^b\lVert f\rVert_2 = 0$ by the oriented convention, so clause 2 reads $0 \le 0$ and holds, while clause 1 says nothing in that case; assume $a < b$ from here on. [L1]

1.2 Each component $f_i$ is bounded and integrable on $[a,b]$, so each $f_i^{2}$ is integrable. [L1, L4]

1.3 Pointwise, $\langle v, f(t)\rangle \le \bigl|\langle v,f(t)\rangle\bigr| \le \lVert v\rVert_2\,\lVert f(t)\rVert_2$ by Cauchy-Schwarz. [L8, L10]

2.1 By induction on $p \le m$, every finite sum $\sum_{i<p} f_i^{2}$ is integrable, the empty sum being the constant $0$ and each successor step adding one integrable function. Hence $g = \sum_{i<m}f_i^{2}$ is integrable. [step 1.2, L2, L9]

2.2 The real-valued function $t \mapsto \langle v, f(t)\rangle = \sum_{i<m}v_i f_i(t)$ is integrable, being a finite sum of scalar multiples of the integrable $f_i$, and by linearity applied $m$ times $\int_a^b \langle v,f\rangle = \sum_{i<m} v_i\int_a^b f_i = \sum_{i<m}v_i\,v_i = \langle v,v\rangle = \lVert v\rVert_2^{2}$. [step 1.2, L1, L2, L8, L9]

3.1 $g(t) \ge 0$ for every $t$, being a finite sum of squares, and $g$ is bounded above: each $|f_i|$ is bounded by some $B_i$, so $g(t) \le \sum_{i<m}B_i^{2} =: K$. Thus $g$ takes its values in $[0,K]$. [step 2.1, L1, L9, L10]

4.1 The map $s \mapsto s^{2}$ is continuous and injective on the order-convex set $[0,\sqrt K]$, with image $[0,K]$; by the continuous inverse theorem its inverse $\varphi : [0,K] \to [0,\sqrt K]$, $\varphi(u) = \sqrt u$, is continuous on $[0,K]$. [step 3.1, L6, L7]

5.1 $\lVert f(t)\rVert_2 = \sqrt{g(t)} = \varphi(g(t))$ for every $t \in [a,b]$, so $\lVert f\rVert_2 = \varphi \circ g$ is integrable on $[a,b]$; this is clause 1. [step 2.1, step 3.1, step 4.1, L5, L8]

6.1 Both sides of step 1.3 are integrable on $[a,b]$, so monotonicity and linearity give $\lVert v\rVert_2^{2} = \int_a^b\langle v,f\rangle \le \int_a^b \lVert v\rVert_2\lVert f\rVert_2 = \lVert v\rVert_2\int_a^b\lVert f\rVert_2$. [step 5.1, step 2.2, step 1.3, L2, L3]

6.2 If $v = 0$ then $\lVert v\rVert_2 = 0$, while $\int_a^b\lVert f\rVert_2 \ge 0$ because $\lVert f\rVert_2 \ge 0$ pointwise and $a<b$; so clause 2 holds in this case. [step 5.1, L3, L8]

7.1 If $v \ne 0$ then $\lVert v\rVert_2 > 0$, so multiplying the inequality of step 6.1 by the positive $1/\lVert v\rVert_2$ gives $\lVert v\rVert_2 \le \int_a^b\lVert f\rVert_2$, which is clause 2 in this case. [step 6.1, L8, L10]

8.1 The two cases of steps 6.2 and 7.1 exhaust the possibilities for $v$, so clause 2 holds; with step 5.1 both clauses are proved. [step 5.1, step 6.2, step 7.1] ∎

## Remarks

- **The case split at $v = 0$ is mandatory.** Step 6.1 delivers only $\lVert v\rVert_2^{2} \le \lVert v\rVert_2 \int_a^b\lVert f\rVert_2$, and dividing by $\lVert v\rVert_2$ is illegitimate when that number is $0$. Many textbook presentations divide without comment; the missing case is genuinely separate, and it is the one where the right-hand side has to be shown nonnegative on its own.

- **Why the inner-product route rather than a componentwise estimate.** Bounding each coordinate of $\int_a^b f$ separately and reassembling gives a constant depending on $m$; the argument above gives the sharp inequality with no constant, and it uses only bilinearity, Cauchy-Schwarz and monotonicity of the integral. The companion page checks the inequality numerically on an explicit curve and shows it is strict there.

- **Clause 1 is where the hypotheses of [[thm-composition-with-a-continuous-function]] are checked, one by one:** $g$ is integrable, its values lie in a closed bounded interval, and the outer function is continuous on that interval. The order of that theorem's hypotheses matters — continuous **after** integrable — and it is respected here.
