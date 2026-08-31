---
id: def-restarted-gmres-m
kind: definition
title: "Restarted GMRES$(m)$ as repeated GMRES cycles on fixed-size Krylov spaces"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-gmres-iterate]
aliases: []
landmark: false
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "Yousef Saad, CSCI 8314 Set 14: Krylov subspace methods (continued); Practical variants: restarting and truncating; Hermitian case: The Lanczos algorithm; Conjugate gradients"
      url: "https://classpages.cselabs.umn.edu/Spring-2019/csci8314/FILES/LecN14.pdf"
---

## Definition

Fix a restart length $m\ge 1$. **Restarted GMRES$(m)$** produces iterates in
cycles:

1. start from $x^{(0)}=x_0$;
2. at cycle $j$, form the residual $r^{(j)}=b-Ax^{(j)}$;
3. run ordinary GMRES for exactly $m$ steps with initial guess $x^{(j)}$ and
   initial residual $r^{(j)}$;
4. call the resulting residual minimizer $x^{(j+1)}$ and restart from it.

Thus each cycle uses only the current residual and a fresh size-$m$ Krylov
space.
