---
id: thm-lattice-stone-weierstrass
kind: theorem
title: "Lattice Stone–Weierstrass theorem on a compact Hausdorff space"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-two-point-interpolation-for-a-separating-real-function-lattice, lem-two-compact-cover-sweeps-for-function-lattices, def-topology-of-uniform-convergence]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-15
sources:
  scraped: []
  references:
    - title: "J. M. Erdman, A Companion to Real Analysis, Theorem 21.2.3"
      url: "https://web.pdx.edu/~erdman/CRA/COMPANION_ANALYSIS_pdf.pdf"
    - title: "M. Xu, Math 205B notes from a course by R. Mazzeo (Stanford), Theorem 9.6, with the vector-space hypothesis used by its proof"
      url: "https://math.berkeley.edu/~moorxu/oldsite/notes/205b/205bmain.pdf"
pipeline_run: null
---

## Statement

Let $X$ be a compact Hausdorff space and let $L\subseteq C(X,\mathbb R)$ be a unital point-separating real vector sublattice. Then for every $f\in C(X,\mathbb R)$ and every $\varepsilon>0$ there is $g\in L$ with $|g(x)-f(x)|<\varepsilon$ for every $x\in X$; that is, $L$ is uniformly dense in $C(X,\mathbb R)$. When $X$ is nonempty this is exactly density for the topology of uniform convergence, which [[def-topology-of-uniform-convergence]] defines only on a nonempty domain.

## Facts & Assumptions

**Given:** A compact Hausdorff space $X$, a unital point-separating real vector sublattice $L\subseteq C(X,\mathbb R)$, a target $f\in C(X,\mathbb R)$, and a real $\varepsilon>0$.

[L1] For distinct $x,y\in X$ and arbitrary $\alpha,\beta\in\mathbb R$, a unital separating real function lattice contains $h$ with $h(x)=\alpha$ and $h(y)=\beta$ ([[lem-two-point-interpolation-for-a-separating-real-function-lattice]]).

[L2] On a nonempty compact space, a family closed under pointwise maxima and minima and having the two-point duplication property relative to $f$ contains, for every positive error, a member within that error of $f$ at every point ([[lem-two-compact-cover-sweeps-for-function-lattices]]).

[L3] On nonempty $X$, the topology of uniform convergence on $C(X,\mathbb R)$ is the metric topology of the restricted uniform metric $\bar\rho(f,g)=\sup_{x\in X}\min\{|f(x)-g(x)|,1\}$ ([[def-topology-of-uniform-convergence]]).

## Proof

**Proof technique:** direct.

1.1 If $X=\varnothing$, then $C(X,\mathbb R)$ contains only the empty function, which is a constant function and hence belongs to the unital lattice $L$; the displayed approximation condition holds vacuously, there being no $x$ to test. The topological reading is not asserted here, because [L3] supplies the uniform metric only on a nonempty domain. [L3, given]

1.2 Assume $X\ne\varnothing$. For distinct $x,y$, apply [L1] with $\alpha=f(x)$ and $\beta=f(y)$; for $x=y$, the constant function with value $f(x)$ belongs to $L$. Thus $L$ has the two-point duplication property relative to $f$. [L1, given]

2.1 Apply [L2] with the positive error $\min\{\varepsilon,1\}/2$ to obtain $g\in L$ satisfying $|g(x)-f(x)|<\min\{\varepsilon,1\}/2<\varepsilon$ for every $x\in X$. [step 1.2, L2]

3.1 Suppose further that $X\ne\varnothing$, which is where [L3] defines the uniform metric. The approximant of step 2.1 then satisfies $\bar\rho(f,g)\le\min\{\varepsilon,1\}/2$, so every uniform-metric neighbourhood of every $f$ meets $L$; hence $L$ is dense in the topology of uniform convergence. [step 2.1, L3] ∎
