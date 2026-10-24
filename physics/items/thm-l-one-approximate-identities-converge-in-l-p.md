---
id: thm-l-one-approximate-identities-converge-in-l-p
kind: theorem
title: "Every $L^1$ approximate identity converges to the identity in $L^p$ for $1 \\le p < \\infty$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-l-one-approximate-identity-on-rn, thm-translation-is-continuous-in-l-p-for-one-le-p-less-infinity, thm-minkowski-integral-inequality, thm-young-convolution-inequality]
landmark: false
proof_strategy: "Write $$f*K_\\varepsilon - f = \\int K_\\varepsilon(y) (\\tau_y f - f) \\, dy$$ and estimate the $L^p$ norm with Minkowski's integral inequality. Translation continuity supplies the pointwise small factor, and the uniform $L^1$ bound on the kernels closes the limit."
verification:
  audited: 2026-09-01
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Terence Tao, An Introduction to Measure Theory"
      url: "https://terrytao.wordpress.com/wp-content/uploads/2012/12/gsm-126-tao5-measure-book.pdf"
    - title: "Richard L. Wheeden and Antoni Zygmund, Measure and Integral: An Introduction to Real Analysis"
      url: "https://djvu.online/file/u1gYJemR8hzMe"
---
## Statement

Assume the Axiom of Countable Choice.

Let $(K_\varepsilon)_{\varepsilon>0}$ be an $L^1$ approximate identity on
$\mathbb{R}^n$. If $1 \le p < \infty$ and $f \in L^p(\mathbb{R}^n)$, then

$$\|f*K_\varepsilon - f\|_p \longrightarrow 0 \qquad(\varepsilon \to 0^+).$$

## Facts & Assumptions

**Given:** The Axiom of Countable Choice, an $L^1$ approximate identity, an exponent $1 \le p < \infty$, and $f \in L^p(\mathbb{R}^n)$.

[L1] Approximate identities are defined in [[def-l-one-approximate-identity-on-rn]].

[L2] Translation is continuous in finite $L^p$ ([[thm-translation-is-continuous-in-l-p-for-one-le-p-less-infinity]]).

[L3] Minkowski's integral inequality and Young's inequality are available ([[thm-minkowski-integral-inequality]], [[thm-young-convolution-inequality]]).

## Proof

**Proof technique:** direct.

1.1 Because $\int K_\varepsilon = 1$, one may write [L1, L3, given, algebra] $$ f*K_\varepsilon - f = \int_{\mathbb{R}^n} K_\varepsilon(y)\,(\tau_y f-f)\,dy. $$ Applying [L3] gives $$ \|f*K_\varepsilon-f\|_p \le \int |K_\varepsilon(y)|\,\|\tau_y f-f\|_p\,dy. $$ [L1, L3, given, algebra]

2.1 Let $\eta > 0$ be arbitrary. If $\|f\|_p=0$, then $f=0$ in $L^p$ and step [L1, L2, L3, step 1.1, choose, algebra] 1.1 gives $\|f*K_\varepsilon-f\|_p=0<\eta$ for every $\varepsilon>0$. Assume now $\|f\|_p>0$, and put $M := \sup_\varepsilon \|K_\varepsilon\|_1 < \infty$. By [L2], choose $\delta > 0$ so that $\|\tau_y f-f\|_p < \eta/(2M)$ whenever $|y|<\delta$. By [L1], choose $\varepsilon_0>0$ so that $$ \int_{|y|\ge\delta} |K_\varepsilon(y)|\,dy < \frac{\eta}{4\|f\|_p} \qquad (0<\varepsilon<\varepsilon_0). $$ For such $\varepsilon$, split the integral from step 1.1 into $|y|<\delta$ and $|y|\ge\delta$. The near part is at most $\eta/2$. For the far part, [L3] gives $\|\tau_y f-f\|_p \le 2\|f\|_p$, so $$ \int_{|y|\ge\delta} |K_\varepsilon(y)|\,\|\tau_y f-f\|_p\,dy \le 2\|f\|_p \int_{|y|\ge\delta} |K_\varepsilon(y)|\,dy < \eta/2. $$ Hence $\|f*K_\varepsilon-f\|_p<\eta$ whenever $0<\varepsilon<\varepsilon_0$. [L1, L2, L3, step 1.1, choose, algebra]

3.1 Because $\eta>0$ was arbitrary, $\|f*K_\varepsilon-f\|_p \to 0$ as [step 2.1] $\varepsilon \to 0^+$, proving the convergence in $L^p$. [step 2.1] ∎
