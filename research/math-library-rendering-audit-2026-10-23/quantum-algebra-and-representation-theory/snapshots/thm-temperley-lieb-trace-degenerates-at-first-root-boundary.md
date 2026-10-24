---
id: thm-temperley-lieb-trace-degenerates-at-first-root-boundary
kind: theorem
title: "At the first root boundary the Jones trace degenerates before semisimplicity fails"
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 9
deps:
  - def-temperley-lieb-normalized-markov-trace-by-closure
  - thm-temperley-lieb-complex-semisimplicity-classification
  - lem-temperley-lieb-jones-wenzl-recursion-properties
  - lem-temperley-lieb-closure-trace-is-cyclic-and-markov
  - def-temperley-lieb-quantum-integers-and-quantum-characteristic
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "K. Iohara, G. I. Lehrer, and R. B. Zhang, The Jones Quotients of the Temperley-Lieb Algebras"
      url: "https://arxiv.org/pdf/1702.08128"
      locator: "§§1.2 and 2, printed pp. 2–3: Jones trace degeneracy at n=ℓ−1 while TL_{ℓ−1} is semisimple."
    - title: "Joshua Chen, The Temperley-Lieb Categories and Skein Modules"
      url: "https://arxiv.org/pdf/1502.06845"
      locator: "§2.3, Proposition 2.3.6, PDF pp. 23–24: closure trace of the Jones–Wenzl idempotent."
---

## Statement

Let $q^2$ have finite order $\ell\ge3$, put $\delta=q+q^{-1}$, and let $n=\ell-1$. Then $\mathrm{TL}_n(\mathbb C,\delta)$ is semisimple but the bilinear trace form $(x,y)\mapsto\tau_n(xy)$ of [[def-temperley-lieb-normalized-markov-trace-by-closure]] is degenerate.

## Facts & Assumptions

**Given:** The complex order criterion, the normalized closure trace, and the Jones–Wenzl recursion.

[F1] Since $\ell\ge3$, the complex semisimplicity theorem gives semisimplicity at rank $n=\ell-1$ ([[thm-temperley-lieb-complex-semisimplicity-classification]]).

[F2] The Jones–Wenzl idempotent $p_n$ is nonzero and primitive, and $\tau_n(p_n)=[n+1]/\delta^n$ when the required denominators are nonzero ([[lem-temperley-lieb-jones-wenzl-recursion-properties]]).

[F3] The closure trace is cyclic ([[lem-temperley-lieb-closure-trace-is-cyclic-and-markov]]).

[F4] If $q^2$ has order $\ell\ge3$, then $[r]_q\ne0$ for $1\le r<\ell$ and $[\ell]_q=0$ ([[def-temperley-lieb-quantum-integers-and-quantum-characteristic]]).

## Proof
1.1 Since $\delta\ne0$ and $[r]_q\ne0$ for $1\le r\le n=\ell-1$, [F2] supplies the nonzero primitive idempotent $p_n$ and gives $\tau_n(p_n)=[\ell]_q/\delta^n=0$ by [F4]. [F2, F4, given]

2.1 For any $x\in\mathrm{TL}_n$, cyclicity [F3] and $p_n^2=p_n$ imply $\tau_n(p_nx(1-p_n))=\tau_n((1-p_n)p_nx)=0$, so $\tau_n(p_nx)=\tau_n(p_nxp_n)$. The one-dimensional corner in [F2] gives $p_nxp_n=\lambda_xp_n$ for some $\lambda_x\in\mathbb C$. Hence $\tau_n(p_nx)=\lambda_x\tau_n(p_n)=0$ for every $x$, while $p_n\ne0$. Thus $p_n$ is a nonzero vector in the radical of the trace form, so the form is degenerate. [F2, F3, step 1.1, algebra]

3.1 Semisimplicity is the independent assertion in [F1]; combining it with step 2.1 proves that trace degeneracy occurs at rank $\ell-1$ while the algebra is still semisimple. [F1, step 2.1] ∎
