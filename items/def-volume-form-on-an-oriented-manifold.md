---
id: def-volume-form-on-an-oriented-manifold
title: "Positive volume form on an oriented manifold"
kind: definition
status: published
origin: pipeline
deps: ["def-oriented-smooth-manifold-and-oriented-chart", "thm-orientability-is-equivalent-to-a-nowhere-vanishing-top-form"]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Nicolaescu §3.4.2 orientation-isomorphism paragraph p.120; Lee Proposition 16.6(c)"
      url: "https://www3.nd.edu/~lnicolae/Lectures_WS_3rd.pdf"
---
## Definition

On an oriented smooth $n$-manifold, a **positive volume form** is a nowhere-vanishing smooth top form $\mu$ that evaluates positively on the chosen determinant ray. In a signed chart $\mu=\rho\,dx^1\wedge\cdots\wedge dx^n$ this means $\sigma_\phi\rho>0$. In dimension zero it means $\varepsilon(p)\mu(p)>0$. No metric is part of the data. Under $\mathrm{AC}_\omega$ such a form exists by [[thm-orientability-is-equivalent-to-a-nowhere-vanishing-top-form]]: adjust the sign on each component to match the specified orientation.
