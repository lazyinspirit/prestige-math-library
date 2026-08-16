---
id: def-unital-separating-real-function-algebra-general
kind: definition
title: "Unital, point-separating, and nowhere-vanishing real function algebras on a compact Hausdorff space"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-ring-of-functions, def-function-space, def-continuous-map-top, def-compact-space, def-hausdorff-space, def-topology-of-uniform-convergence]
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
    - title: "J. M. Erdman, A Companion to Real Analysis, Section 21.2"
      url: "https://web.pdx.edu/~erdman/CRA/COMPANION_ANALYSIS_pdf.pdf"
    - title: "E. Carlen, Notes on Topology and the Stone-Weierstrass Theorem, Theorem 1.26"
      url: "https://sites.math.rutgers.edu/~carlen/502S13/Topology502.pdf"
pipeline_run: null
---

## Definition

Let $X$ be a compact Hausdorff space ([[def-compact-space]], [[def-hausdorff-space]]). A subset $A\subseteq C(X,\mathbb R)$ is a **real function algebra** when it is a real vector subspace under the pointwise operations of [[def-function-space]] and is closed under the pointwise multiplication of [[def-ring-of-functions]]. Every member is continuous in the sense of [[def-continuous-map-top]].

The algebra $A$ is:

- **unital** when it contains every constant real-valued function;
- **point-separating** when for every distinct $x,y\in X$ there is $f\in A$ with $f(x)\ne f(y)$;
- **nowhere-vanishing** when for every $x\in X$ there is $f\in A$ with $f(x)\ne0$.

Unitality implies nowhere-vanishing when $X$ is nonempty, but nowhere-vanishing does not assume that the constant-one function belongs to $A$.

**Uniform approximation on this page.** For $F\subseteq C(X,\mathbb R)$ and $f\in C(X,\mathbb R)$, *$f$ is uniformly approximable by members of $F$* means that for every $\varepsilon>0$ there is $g\in F$ with $|f(x)-g(x)|<\varepsilon$ for every $x\in X$; the **uniform closure** of $F$ is the set of members of $C(X,\mathbb R)$ uniformly approximable by members of $F$, and $F$ is **uniformly dense** when that closure is all of $C(X,\mathbb R)$. Stated this way the notion is available for every $X$, the empty space included. For nonempty $X$ it is exactly density for the topology of uniform convergence of [[def-topology-of-uniform-convergence]], whose uniform metric is defined only on a nonempty domain.
