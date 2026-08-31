---
id: thm-support-of-a-convolution-lies-in-the-closure-of-the-support-sumset
kind: theorem
title: "The support of a convolution lies in the closure of the support sumset"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-l-one-convolution-exists-almost-everywhere-and-obeys-the-l-one-bound, def-support-and-compactly-supported-riemann-integral-in-rn, def-convolution-of-two-functions-on-rn]
landmark: false
proof_strategy: "If $x$ lies outside the closure of $\\operatorname{supp} f + \\operatorname{supp} g$, then nearby pairs $(x-y,y)$ never meet both supports at once, so the convolution integral is identically $0$ on an open neighborhood of $x$. Extending by $0$ on the exceptional set gives the stated support inclusion for an actual representative."
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "Walter Rudin, Real and Complex Analysis, 3rd ed."
      url: "https://perso.telecom-paristech.fr/decreuse/_downloads/c22155fef582344beb326c1f44f437d2/rudin.pdf"
---
## Statement

Let $f,g \in L^1(\mathbb{R}^n)$ be represented by Borel functions still
denoted $f,g$. For any complex-valued function $u$ on $\mathbb R^n$, use the
support convention

$$\operatorname{supp}(u):=\overline{\{x\in\mathbb R^n:u(x)\ne0\}},$$

which extends the real-valued definition of
[[def-support-and-compactly-supported-riemann-integral-in-rn]]. Define
$$ h(x) := \begin{cases} \int_{\mathbb{R}^n} f(x-y)g(y)\,dy,& \text{if the integral exists},\\ 0,& \text{otherwise}. \end{cases} $$
Then

$$ \operatorname{supp}(h) \subseteq \overline{\operatorname{supp}(f) + \operatorname{supp}(g)}. $$

## Facts & Assumptions

**Given:** Borel representatives $f,g \in L^1(\mathbb{R}^n)$ and the function $h$ defined above.

[L1] $L^1$ convolution exists almost everywhere ([[thm-l-one-convolution-exists-almost-everywhere-and-obeys-the-l-one-bound]], [[def-convolution-of-two-functions-on-rn]]).

[L2] Support is defined by the closure of the nonzero set ([[def-support-and-compactly-supported-riemann-integral-in-rn]]).

## Proof

**Proof technique:** direct.

1.1 Let [L1, L2, given, choose] $x \notin \overline{\operatorname{supp}(f) + \operatorname{supp}(g)}$. Choose an open neighborhood $U$ of $x$ disjoint from that closure. For $z \in U$ and $y \in \operatorname{supp}(g)$, one has $z-y \notin \operatorname{supp}(f)$, so $f(z-y)=0$; and if $y \notin \operatorname{supp}(g)$ then $g(y)=0$. Hence $f(z-y)g(y)=0$ for every $y$ and every $z \in U$. [L1, L2, given, choose]

2.1 Therefore $h(z)=0$ for every $z \in U$: by step 1.1 the integrand [L1, L2, step 1.1] vanishes for every $y$, so the convolution integral exists and equals $0$ at each such $z$. So $x$ lies outside the support of $h$ in the sense of [L2]. [L1, L2, step 1.1]

3.1 Since every point outside [step 2.1] $\overline{\operatorname{supp}(f)+\operatorname{supp}(g)}$ lies outside $\operatorname{supp}(h)$, the support inclusion follows. [step 2.1] ∎
