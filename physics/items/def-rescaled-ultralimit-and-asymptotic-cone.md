---
id: "def-rescaled-ultralimit-and-asymptotic-cone"
kind: "definition"
title: "Rescaled ultralimits and asymptotic cones"
status: published
origin: "pipeline"
deps: ["def-metric-space", "def-ultrafilter"]
provenance:
  statement: "ai-altered"
  proof: "not-applicable"
verification:
  audited: 2026-09-10
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  scraped: []
  references:
    - title: "Drutu–Kapovich, Geometric Group Theory — §10.4 opening construction; §10.6 opening cone definition, PDF p.372"
      url: "https://www.math.ucdavis.edu/~kapovich/EPR/ggt.pdf"
pipeline_run: "phase-2-hg-prerequisite"
justified_by: ["lem-bounded-real-ultralimits-and-free-tail-extension", "lem-rescaled-ultradistance-is-a-quotient-metric"]
---

## Definition

Fix a free ultrafilter $\omega$ on the library's natural numbers $\mathbb N$, which contain $0$, in the sense of [[def-ultrafilter]]. A set in $\omega$ is called **large**. For a real sequence, $\lim_\omega a_n=a$ means that $\{n:|a_n-a|<\varepsilon\}$ is large for every $\varepsilon>0$.

Let $(X_n,d_n,e_n)$ be pointed metric spaces ([[def-metric-space]]) and $\lambda_n>0$. Put

$$\mathcal B=\{(x_n)\in\prod_nX_n:\sup_n\lambda_nd_n(x_n,e_n)<\infty\},\qquad D(x,y)=\lim_\omega\lambda_nd_n(x_n,y_n).$$

Declare $x\sim y$ when $D(x,y)=0$. The **rescaled ultralimit** is $\mathcal B/\!\sim$, with distance $d_\omega([x],[y])=D(x,y)$ and basepoint $[e]$. These formulas are provisional until the two results in `justified_by` establish existence of the real limit and the quotient metric.

For one fixed space $X_n=X$ and positive scales $\lambda_n\to0$ in the ordinary sense, write $\operatorname{Cone}_\omega(X,e,\lambda)$ and call it an **asymptotic cone**. Basepoints $e_n$ may vary arbitrarily. A sequence bounded only on a large set is interpreted by replacing its other coordinates with $e_n$; the quotient-metric lemma proves independence of that replacement.
