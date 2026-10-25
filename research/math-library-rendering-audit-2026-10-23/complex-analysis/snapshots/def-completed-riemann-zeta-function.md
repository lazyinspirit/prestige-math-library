---
id: def-completed-riemann-zeta-function
kind: definition
title: "The completed zeta function $\\Lambda(s)=\\pi^{-s/2}\\Gamma(s/2)\\zeta(s)$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-riemann-zeta-function, def-euler-gamma-function]
verification:
  audited: 2026-09-04
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  references:
    - title: "Elias M. Stein and Rami Shakarchi, Complex Analysis, Ch. 6 §2.1"
      url: "https://zr9558.com/wp-content/uploads/2013/11/complex_analysis-stein-shakarchi.pdf"
    - title: "K. Chandrasekharan, Lectures on the Riemann Zeta-Function, Lecture 13 §8"
      url: "https://mathweb.tifr.res.in/Documents/Publications/Lectures/01.pdf"
---

## Definition

For $\operatorname{Re}s>1$, define the **completed zeta function**

$$\Lambda(s):=\pi^{-s/2}\Gamma(s/2)\zeta(s).$$

At this stage both factors on the right are already defined on
$\operatorname{Re}s>1$. The later continuation theorem extends this expression
meromorphically to all complex $s$ and keeps the symbol $\Lambda$ for that
meromorphic continuation.
