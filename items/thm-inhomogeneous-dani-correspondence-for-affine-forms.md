---
id: thm-inhomogeneous-dani-correspondence-for-affine-forms
kind: theorem
title: "Inhomogeneous Dani correspondence for badly approximable affine forms"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 3
provenance:
  statement: literature-derived
  proof: ai-generated
deps:
  - def-rational-affine-form-system
  - def-badly-approximable-affine-form-system
  - def-free-unimodular-affine-lattice-space-and-diagonal-flow
proof_strategy: direct
sources:
  references:
    - title: "Kleinbock 1999"
      url: "https://arxiv.org/pdf/math/9808057v2"
      locator: "§§1–4.7: affine Dani criterion, mixing, horospherical avoidance and thickness"
    - title: "Kleinbock–Margulis 1998"
      url: "https://arxiv.org/pdf/math/9810036v1"
      locator: "§2: diagonal lattice-flow conventions"
---

## Statement

Kleinbock's irrational inhomogeneous Dani criterion is the following.

Let $m,n\ge1$ and let $(A,b)$ be irrational, so $Aq+b+p\ne0$ for every $q\in\mathbb Z^n$ and $p\in\mathbb Z^m$. Then $(A,b)$ is badly approximable if and only if there is $\varepsilon>0$ such that
$$\|g_t(L_Av+(b,0))\|_\infty\ge\varepsilon\qquad(t\ge0,\ v=(p,q)\in\mathbb Z^{m+n}).$$
The irrationality hypothesis is essential to this stated correspondence; rational affine systems are not covered.

Here badly approximable means $\liminf_{\|q\|_\infty\to\infty}(\min_{p\in\mathbb Z^m}\|Aq+b+p\|_\infty)^m\|q\|_\infty^n>0.

## Statement references

[Kleinbock 1999](https://arxiv.org/pdf/math/9808057v2) — §§1–4.7: affine Dani criterion, mixing, horospherical avoidance and thickness.

[Kleinbock–Margulis 1998](https://arxiv.org/pdf/math/9810036v1) — §2: diagonal lattice-flow conventions.


## Facts & Assumptions

**Given:** The displayed irrational affine system and $m,n\ge1$.

[F1] Irrationality excludes every exact integer solution $Aq+b+p=0$. [[def-rational-affine-form-system]]

[F2] Bad approximability is positivity of the affine liminf as $\|q\|_\infty\to\infty$. [[def-badly-approximable-affine-form-system]]

[F3] Its associated orbit is $g_t(L_A\mathbb Z^{m+n}+(b,0))$. [[def-free-unimodular-affine-lattice-space-and-diagonal-flow]]

## Proof

1.1 If $(A,b)$ is badly approximable, the liminf gives a positive lower bound for $\|Aq+b+p\|_\infty^m\|q\|_\infty^n$ outside a finite set of $q$. On each exceptional nonzero $q$, the minimum over $p$ is positive by irrationality, so finitely many exceptions preserve a positive lower bound. For $q=0$, irrationality gives $\min_p\|b+p\|_\infty>0$. [given, F1, F2, algebra]

2.1 For $q\ne0$, write $Q=\|q\|_\infty$ and $E=\|Aq+b+p\|_\infty$. If $E>Q$, the first block of the orbit vector has norm $>1$. If $0<E\le Q$, choose $t=\frac{mn}{m+n}\log(Q/E)$; the two block norms then equal $(E^mQ^n)^{1/(m+n)}$. For every time $t$, the maximum of the two scaled block norms is at least $(E^mQ^n)^{1/(m+n)}$, since their weighted product has cancelling exponential factors. The product bound from step 1.1 therefore gives a uniform positive lower bound. For $q=0$, the first block is $e^{t/m}(p+b)$, bounded below by the positive distance of $b$ from $\mathbb Z^m$. [step 1.1, F3, algebra]

3.1 Conversely, suppose every orbit point in the statement has norm at least $\varepsilon>0$. For every $q\ne0$ and $p$, irrationality gives $E>0$ by F1. If $E\le Q$, the balancing time from step 2.1 gives $E^mQ^n\ge\varepsilon^{m+n}$. If $E>Q$, then $E^mQ^n>Q^{m+n}\ge1$; reducing $\varepsilon$ to at most $1$ preserves the hypothesis. Thus the defining liminf is positive. [step 2.1, F1, F2, algebra] ∎

