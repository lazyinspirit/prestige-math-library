---
id: thm-liouville-bounded-entire-function
kind: theorem
title: "Liouville's theorem: every bounded entire function is constant"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-cauchy-inequalities, thm-zero-complex-derivative-on-a-domain-implies-constant, cor-rn-is-polygonally-connected-and-locally-path-connected, rem-complex-plane-euclidean-dictionary, def-complex-domain]
justified_by: []
aliases: []
landmark: true
short: "bounded entire $\\Rightarrow$ constant"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-21
  audited: 2026-08-21
sources:
  scraped: []
  references:
    - title: "Lars Ahlfors, Complex Analysis, 3rd ed., Ch. 4 §2.3"
      url: "https://people.math.gatech.edu/~mccuan/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf"
    - title: "E. Stein and R. Shakarchi, Complex Analysis, Ch. 2, Corollary 4.5"
      url: "https://zr9558.com/wp-content/uploads/2013/11/complex_analysis-stein-shakarchi.pdf"
    - title: "Matthias Weber, Complex Analysis, Theorem 2.3.2"
      url: "https://scholarworks.iu.edu/dspace/bitstreams/0a384151-7cd5-460f-a06a-b6be76707024/download"
    - title: "Steven G. Krantz, A Guide to Complex Variables, §3.1.3"
      url: "https://www.math.wustl.edu/~sk/books/guide.pdf"
pipeline_run: null
---

## Statement

Every bounded entire function is constant.

More explicitly, if $f:\mathbb C\to\mathbb C$ is holomorphic and there is a real $M\ge0$ such that $|f(z)|\le M$ for every $z\in\mathbb C$, then $f$ is constant.

## Facts & Assumptions

**Given:** An entire function $f:\mathbb C\to\mathbb C$ and a real $M\ge0$ with $|f(z)|\le M$ for every $z$; the Euclidean identification of [[rem-complex-plane-euclidean-dictionary]] and the definition of complex domain in [[def-complex-domain]].

[L1] If $f$ is holomorphic on $D(a,R)$, $0<r<R$, and $|f|\le M$ on the radius-$r$ circle, then $|f^{(n)}(a)|\le n!M/r^n$ for every natural $n$ ([[cor-cauchy-inequalities]]).

[L2] A holomorphic function on a complex domain whose derivative vanishes everywhere is constant ([[thm-zero-complex-derivative-on-a-domain-implies-constant]]).

[L3] The Euclidean plane $\mathbb R^2$ is polygonally connected and connected ([[cor-rn-is-polygonally-connected-and-locally-path-connected]]).

## Proof

**Proof technique:** direct.

1.1 Fix $a\in\mathbb C$ and $r>0$. Since $f$ is holomorphic on $D(a,r+1)$ and its modulus is at most $M$ on the radius-$r$ circle, [L1] with derivative order one gives $|f'(a)|\le M/r$. [given, L1]

1.2 Under the identification in the given data, [L3] makes $\mathbb C$ connected; it is also nonempty and open in itself, so it is a complex domain. [given, L3]

2.1 If $|f'(a)|>0$, choose $r=M/|f'(a)|+1$; then $M/r<|f'(a)|$, contradicting step 1.1, so $f'(a)=0$. [step 1.1, choose, algebra]

3.1 Since $a$ was arbitrary, step 2.1 gives $f'=0$ throughout the domain of step 1.2, and [L2] makes $f$ constant; this also covers $M=0$ and every constant entire function. [step 2.1, step 1.2, L2] ∎
