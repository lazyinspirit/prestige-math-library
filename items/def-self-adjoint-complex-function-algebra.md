---
id: def-self-adjoint-complex-function-algebra
kind: definition
title: "Self-adjoint complex function algebras, unitality, and point separation"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-ring-of-functions, def-function-space, def-continuous-map-top, def-compact-space, def-hausdorff-space, def-complex-numbers-and-arithmetic, thm-complex-numbers-form-a-field, def-complex-conjugate-real-imaginary-part-and-modulus, lem-complex-conjugation-and-modulus-laws, def-complex-metric-convergence-and-continuity, def-topology-of-uniform-convergence]
aliases: []
landmark: true
verification:
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-15
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "J. M. Erdman, A Companion to Real Analysis, Definition 21.2.13"
      url: "https://web.pdx.edu/~erdman/CRA/COMPANION_ANALYSIS_pdf.pdf"
    - title: "E. Carlen, Notes on Topology and the Stone-Weierstrass Theorem, definition preceding Theorem 1.29"
      url: "https://sites.math.rutgers.edu/~carlen/502S13/Topology502.pdf"
pipeline_run: null
---

## Definition

Let $X$ be a compact Hausdorff space ([[def-compact-space]], [[def-hausdorff-space]]), and let $\mathbb C$ be the published complex field ([[def-complex-numbers-and-arithmetic]], [[thm-complex-numbers-form-a-field]]) with conjugation and modulus as in [[def-complex-conjugate-real-imaginary-part-and-modulus]] and [[lem-complex-conjugation-and-modulus-laws]]. The space $C(X,\mathbb C)$ consists of the continuous maps from $X$ to $\mathbb C$ ([[def-continuous-map-top]]), where $\mathbb C$ carries the metric $d_{\mathbb C}(z,w)=|z-w|$ of [[def-complex-metric-convergence-and-continuity]]. That metric is a metric on $\mathbb C$, not on $C(X,\mathbb C)$.

**Uniform approximation on this page.** For $F,G\subseteq C(X,\mathbb C)$ and $f\in C(X,\mathbb C)$, *$f$ is uniformly approximable by members of $F$* means that for every $\varepsilon>0$ there is $g\in F$ with $d_{\mathbb C}(f(x),g(x))<\varepsilon$ for every $x\in X$; the **uniform closure** of $F$ is the set of members of $C(X,\mathbb C)$ uniformly approximable by members of $F$, and $F$ is **uniformly dense** when that closure is all of $C(X,\mathbb C)$. This reading is stated in terms of $d_{\mathbb C}$ alone and is therefore available for every $X$, the empty space included. For nonempty $X$ it is exactly density for the topology of uniform convergence of [[def-topology-of-uniform-convergence]] applied to the metric $d_{\mathbb C}$, whose uniform metric $\bar\rho$ that item defines only on a nonempty domain.

A subset $A\subseteq C(X,\mathbb C)$ is a **complex function algebra** when it is a complex vector subspace under the pointwise operations of [[def-function-space]] and is closed under the pointwise multiplication of [[def-ring-of-functions]]. It is **self-adjoint** when
$$f\in A\quad\Longrightarrow\quad\overline f\in A,$$
where $\overline f(x):=\overline{f(x)}$.

The algebra is **unital** when it contains every constant complex-valued function, **point-separating** when every distinct $x,y\in X$ admit $f\in A$ with $f(x)\ne f(y)$, and **nowhere-vanishing** when every $x\in X$ admits $f\in A$ with $f(x)\ne0$.
