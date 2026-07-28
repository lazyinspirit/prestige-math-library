---
id: cor-integrability-of-absolute-values-products-and-lattice-operations
kind: corollary
title: "If $f,g$ are integrable on $[a,b]$ then so are $\\lvert f\\rvert$, $f^{2}$, $fg$, $\\max(f,g)$ and $\\min(f,g)$, and $\\bigl\\lvert\\int_a^b f\\bigr\\rvert \\le \\int_a^b\\lvert f\\rvert$"
status: published
origin: session
deps: [thm-composition-with-a-continuous-function, thm-linearity-of-the-integral, thm-monotonicity-of-the-integral, def-oriented-integral, thm-algebra-of-continuous-functions, def-continuity-real, def-abs-value, lem-of-abs-value, def-darboux-integral, def-darboux-sums, def-max-min, def-integer-power, def-bounded-set, def-interval, def-ordered-field, def-complete-ordered-field]
forward_refs: [cex-absolute-value-integrable-without-the-function]
justified_by: []
aliases: [cor-integrable-functions-form-an-algebra]
landmark: true
short: "products, moduli and lattice operations"
proof_strategy: direct
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
pipeline_run: null
---

## Statement

Let $a < b$ be reals and let $f, g : [a,b] \to \mathbb{R}$ be integrable
([[def-darboux-integral]]). Then:

1. $|f|$, $f^{2}$ and $fg$ are integrable on $[a,b]$
   ([[def-abs-value]], [[def-integer-power]]);
2. $\max(f,g)$ and $\min(f,g)$, defined pointwise
   ([[def-max-min]]), are integrable on $[a,b]$;
3. the **triangle inequality for the integral**:
   $$\Bigl|\int_a^b f\Bigr| \;\le\; \int_a^b |f| .$$

**Claim 3 is stated with $a < b$ and is not orientation-invariant.** For $u > v$
the right-hand side is $-\int_v^u |f| \le 0$ while the left-hand side is $\ge 0$,
so the inequality as written is false there. The form valid for *every* pair
$u,v$ on which $f$ is integrable ([[def-oriented-integral]]) is

$$\Bigl|\int_u^v f\Bigr| \;\le\; \Bigl|\int_u^v |f|\,\Bigr| ,$$

and that is the form the estimates below on this page use whenever the limits
are not known to be in increasing order.

**The converse of claim 1 fails.** Integrability of $|f|$ does not give
integrability of $f$; the witness is on the companion page.

## Facts & Assumptions

**Given:** Reals $a < b$ and integrable $f, g : [a,b] \to \mathbb{R}$.

[L1] If $u$ is integrable on $[a,b]$ with values in $[m,M]$ and $\varphi$ is continuous on $[m,M]$, then $\varphi\circ u$ is integrable ([[thm-composition-with-a-continuous-function]]); an integrable function is bounded, so such $m$ and $M$ exist ([[def-darboux-sums]], [[def-bounded-set]], [[def-interval]]).

[L2] Sums and scalar multiples of integrable functions are integrable, with $\int_a^b(\lambda u + \nu w) = \lambda\int_a^b u + \nu\int_a^b w$ ([[thm-linearity-of-the-integral]]).

[L3] If $u \le w$ pointwise on $[a,b]$ and both are integrable then $\int_a^b u \le \int_a^b w$ ([[thm-monotonicity-of-the-integral]]).

[L4] The absolute value $t \mapsto |t|$, the square $t \mapsto t^{2}$ and every polynomial function are continuous on every subset of $\mathbb{R}$ ([[thm-algebra-of-continuous-functions]], claims 2 and 5, [[def-continuity-real]]).

[L5] For reals $s,t$: $\max\{s,t\} = (s + t + |s-t|)\cdot 2^{-1}$ and $\min\{s,t\} = (s + t - |s-t|)\cdot 2^{-1}$, and $st = \bigl((s+t)^{2} - (s-t)^{2}\bigr)\cdot 4^{-1}$ ([[def-max-min]], [[def-abs-value]], [[def-ordered-field]], [[def-integer-power]]).

[L6] Absolute value: $-|t| \le t \le |t|$, and $|t| \le c$ follows from $-c \le t \le c$ ([[lem-of-abs-value]], [[def-abs-value]]).

[L7] With oriented limits, $\int_v^u u = -\int_u^v u$ and $\int_u^u u = 0$ ([[def-oriented-integral]]).

[L8] Ordered-field arithmetic: adding constants and multiplying by positive reals preserve inequalities, and the order is total and transitive ([[def-ordered-field]], [[def-complete-ordered-field]]).

## Proof

**Proof technique:** direct.

1.1 $f$ is bounded, so fix reals $m \le M$ with $f[\,[a,b]\,] \subseteq [m,M]$; the same for $g$, and for $f+g$ and $f-g$, which are integrable by [L2]. [given, L1, L2, choose]

1.2 The maps $t \mapsto |t|$ and $t \mapsto t^{2}$ are continuous on any closed bounded interval, by [L4]. [L4]

2.1 By [L1] applied with $\varphi(t) = |t|$ to $f$, to $g$ and to $f-g$, the functions $|f|$, $|g|$ and $|f-g|$ are integrable. [step 1.1, step 1.2, L1]

2.2 By [L1] applied with $\varphi(t) = t^{2}$ to $f$, to $f+g$ and to $f-g$, the functions $f^{2}$, $(f+g)^{2}$ and $(f-g)^{2}$ are integrable. [step 1.1, step 1.2, L1]

3.1 By [L5], $fg = \bigl((f+g)^{2}-(f-g)^{2}\bigr)\cdot 4^{-1}$ pointwise, so $fg$ is integrable by [L2]; this completes claim 1. [step 2.1, step 2.2, L2, L5]

3.2 By [L5], $\max(f,g) = \bigl(f + g + |f-g|\bigr)\cdot 2^{-1}$ and $\min(f,g) = \bigl(f+g-|f-g|\bigr)\cdot 2^{-1}$ pointwise, so both are integrable by [L2]; this is claim 2. [step 2.1, L2, L5]

3.3 **Claim 3.** By [L6], $-|f| \le f \le |f|$ pointwise on $[a,b]$, and all three functions are integrable by step 2.1 and [L2]. [step 2.1, L2, L6]

4.1 By [L3] applied twice, $-\int_a^b|f| \le \int_a^b f \le \int_a^b |f|$, using $\int_a^b(-|f|) = -\int_a^b|f|$ from [L2]. [step 3.3, L2, L3]

5.1 Hence $\bigl|\int_a^b f\bigr| \le \int_a^b|f|$ by [L6], which is claim 3. [step 4.1, L6]

6.1 **The oriented form.** For $u = v$ both sides are $0$ by [L7]; for $u < v$ it is claim 3 on $[u,v]$; and for $u > v$ both $\int_u^v f$ and $\int_u^v |f|$ are the negatives of the corresponding integrals over $[v,u]$ by [L7], so the two absolute values are unchanged and claim 3 on $[v,u]$ gives the inequality. [step 5.1, L7, L8] ∎

## Remarks

- **Every integrability clause comes from one theorem plus linearity.** The only input that produces integrability is [[thm-composition-with-a-continuous-function]], with [[thm-linearity-of-the-integral]] recombining the pieces; claim 3 additionally uses [[thm-monotonicity-of-the-integral]], which is the one place an inequality between integrals is needed. The identities of [L5] are algebra, and they are what turns a statement about composing with $|\cdot|$ and $(\cdot)^2$ into statements about products and lattice operations. In particular no new estimate on Darboux sums is made here.

- **The polarisation identity is used, and it is why $f^2$ comes first.** There is no direct route from integrability of $f$ and of $g$ to integrability of $fg$ through the composition theorem, because $(s,t) \mapsto st$ is a function of two variables and the theorem composes with one. Writing $fg$ through squares of sums and differences reduces it to the one-variable case.

- **The inequality of claim 3 is the integral analogue of the triangle inequality**, and like it, it can be strict: for $f(x) = x$ on $[-1,1]$ the left-hand side is $0$ and the right-hand side is $1$.

- **Forward reference, orientation only.** The witness refuting the converse of claim 1 is [[cex-absolute-value-integrable-without-the-function]] on the companion page; nothing above depends on it.
