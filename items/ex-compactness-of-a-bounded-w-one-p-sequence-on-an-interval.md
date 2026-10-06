---
id: ex-compactness-of-a-bounded-w-one-p-sequence-on-an-interval
kind: example
title: "Compactness of a bounded $W^{1,p}$ sequence on an interval"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 0
deps: [cor-one-dimensional-w-one-p-functions-have-absolutely-continuous-representatives, thm-holder-inequality-for-integrals, thm-arzela-ascoli-for-real-ck, def-sobolev-space-wkp-and-its-norm, def-l-p-space-as-a-quotient-by-null-functions, def-absolute-continuity-on-almost-every-coordinate-line, def-continuous-real-functions-on-a-compact-metric-space, def-countable-choice, def-dependent-choice, def-axiom-of-choice]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (archived 2025 author manuscript)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "Theorem 9.31 and Corollary 9.32, printed pp. 218-219"
    - title: "John K. Hunter, Notes on Partial Differential Equations (UC Davis, revised 18 June 2014, complete 242-page two-quarter notes)"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "Theorem 3.48, printed p. 75 (Morrey plus Arzela--Ascoli); the interval argument is derived locally from the absolutely continuous representative theorem"
---

## Example

Assume the Axiom of Choice. Let $I=(0,1)$ and $1<p\le\infty$, with the understanding
$1-1/p=0$ for $p=1$ excluded and $1-1/\infty=1$. Every bounded sequence
$(u_j)$ in $W^{1,p}(I)$ admits a subsequence that converges uniformly on
$[0,1]$ and hence in $L^q(I)$ for every finite $q$: the absolutely continuous
representatives are uniformly bounded and share one H\"older modulus of
continuity.

**At $p=1$ the representative argument fails.** The estimates below still give
$\|u^*\|_\infty\le C(\|u\|_1+\|Du\|_1)$ and
$|u^*(x)-u^*(y)|\le\|Du\|_{L^1}$ for every bounded $(u_j)$ in $W^{1,1}(I)$,
but that second bound is not a continuity modulus, and equicontinuity can fail:
$u_j(t):=\min\{jt,1\}$ has $u_j(0)=0$, $u_j(1)=1$ for every $j\ge1$, is
bounded in $W^{1,1}(I)$, and is not equicontinuous, so its representatives have
no uniformly convergent subsequence. The example claims uniform convergence
only for $1<p\le\infty$; the compactness of $W^{1,1}(I)\hookrightarrow L^1(I)$
itself is delivered on the A page by the Rellich theorems.

## Facts & Assumptions

**Given:** the Axiom of Choice, $I=(0,1)$, $1<p\le\infty$, and a sequence $(u_j)$ bounded in $W^{1,p}(I)$, with $M:=\sup_j\|u_j\|_{W^{1,p}(I)}<\infty$. For each $j$ let $u_j^*$ be the continuous absolutely continuous representative of [[cor-one-dimensional-w-one-p-functions-have-absolutely-continuous-representatives]].

[F1] *One-dimensional ACL representatives.* There is exactly one continuous representative $u_j^*$ of $u_j$ that is absolutely continuous on $[0,1]$, and $u_j^*(x)-u_j^*(y)=\int_y^xDu_j$ for all $x,y\in[0,1]$. ([[cor-one-dimensional-w-one-p-functions-have-absolutely-continuous-representatives]], [[def-absolute-continuity-on-almost-every-coordinate-line]])

[F2] *H\"older's inequality on an interval.* For $1<p<\infty$, $\bigl|\int_y^xDu_j\bigr|\le|x-y|^{1-1/p}\|Du_j\|_{L^p(I)}$; for $p=\infty$, $\bigl|\int_y^xDu_j\bigr|\le|x-y|\|Du_j\|_{L^\infty(I)}$. ([[thm-holder-inequality-for-integrals]])

[F3] *The sup bound.* Because $I$ has measure $1$, some point $x_0\in I$ has $|u_j^*(x_0)|\le\|u_j\|_{L^p(I)}$, and then [F1] and [F2] give $\|u_j^*\|_\infty\le\|u_j\|_{L^p(I)}+\|Du_j\|_{L^p(I)}$. ([[def-sobolev-space-wkp-and-its-norm]], [[def-l-p-space-as-a-quotient-by-null-functions]])

[F4] *Arzel\`a--Ascoli.* A uniformly bounded equicontinuous family of real functions on a compact metric space has a uniformly convergent subsequence; for a complex-valued family apply this to the real and imaginary parts. ([[thm-arzela-ascoli-for-real-ck]], [[def-continuous-real-functions-on-a-compact-metric-space]])

[F5] *Uniform convergence gives $L^q$ convergence.* If $g_j\to g$ uniformly on the finite-measure set $I$, then $\|g_j-g\|_{L^q(I)}\le\|g_j-g\|_\infty|I|^{1/q}\to0$ for every finite $q$. ([[thm-holder-inequality-for-integrals]], [[def-l-p-space-as-a-quotient-by-null-functions]])

## Verification

**Proof technique:** direct.

1.1 By [F1] and [F2] every pair $x,y\in[0,1]$ satisfies $|u_j^*(x)-u_j^*(y)|\le M|x-y|^{1-1/p}$ (with exponent $1$ when $p=\infty$), a modulus independent of $j$; by [F3] also $\|u_j^*\|_\infty\le2M$. Hence $\{u_j^*\}$ is uniformly bounded and equicontinuous, and for $1<p\le\infty$ the exponent $1-1/p$ is positive, so the modulus tends to $0$ with $|x-y|$. [F1, F2, F3, given]

2.1 By [F4] applied on the compact interval $[0,1]$ to the real and imaginary parts, some subsequence of $(u_j^*)$ converges uniformly on $[0,1]$; by [F5] that same subsequence converges in $L^q(I)$ for every finite $q$. The Axiom of Choice is inherited through the representative theorem [F1]. [F4, F5, step 1.1]

3.1 To verify the stated failure at $p=1$, write $w_j(t):=\min\{jt,1\}$ and take any subsequence $(w_{j_k})$ with $j_k\to\infty$. At $x=0$ every term is $0$; for each fixed $x\in(0,1]$, eventually $j_kx\ge1$, so $w_{j_k}(x)=1$. Thus every such subsequence converges pointwise to $w(0)=0$ and $w(x)=1$ for $x\in(0,1]$, which is discontinuous at $0$. Since every $w_{j_k}$ is continuous, a uniformly convergent subsequence would have a continuous limit, contradicting this pointwise limit. [given, algebra] ∎
