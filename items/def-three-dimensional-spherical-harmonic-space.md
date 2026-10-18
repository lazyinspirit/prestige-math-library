---
id: def-three-dimensional-spherical-harmonic-space
kind: definition
title: Degree-indexed spherical harmonic spaces in three dimensions
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 0
deps: []
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "Michael O’Neil, Integral Equations and Fast Algorithms, complete course lecture notes (2017)"
      url: "https://cims.nyu.edu/~oneil/courses/fa17-math2011/int_eq_notes_2017.pdf"
    - title: "James Demmel, Fast Hierarchical Methods for the N-body Problem, Part 2, CS267 Lecture 25 (1996)"
      url: "https://people.eecs.berkeley.edu/~demmel/cs267/lecture27/lecture27.html"
---

## Definition

Let $\mathbb S^2=\{x\in\mathbb R^3:|x|=1\}$ with its usual surface-area measure $dS$, normalized so $\int_{\mathbb S^2}dS=4\pi$. For an integer $\ell\ge0$, let $\mathcal H_\ell$ be the complex vector space of restrictions to $\mathbb S^2$ of homogeneous degree-$\ell$ polynomials $P(x_1,x_2,x_3)$ satisfying $\Delta P=0$. Give $\mathcal H_\ell$ the inner product $\langle f,g\rangle=\int_{\mathbb S^2}f\overline g\,dS$, linear in the first argument. An orthonormal basis is not fixed by this definition; the addition-theorem item proves that $\dim\mathcal H_\ell=2\ell+1$ and that such a finite basis exists.

If $Y_{\ell m}\in\mathcal H_\ell$ is later chosen from an orthonormal basis and $v\ne0$, its associated homogeneous harmonic polynomial is $H_{\ell m}(v)=|v|^\ell Y_{\ell m}(v/|v|)$. At $v=0$ use the polynomial value: $H_{00}(0)=Y_{00}$ and $H_{\ell m}(0)=0$ for $\ell>0$. This is the regular-solid-harmonic convention used in the 3D evaluator.
