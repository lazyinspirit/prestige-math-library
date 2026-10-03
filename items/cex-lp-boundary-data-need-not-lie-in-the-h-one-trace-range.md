---
id: cex-lp-boundary-data-need-not-lie-in-the-h-one-trace-range
kind: counterexample
title: "A jump boundary datum is outside the trace range for $p\\ge2$"
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [thm-sharp-trace-theorem-for-w-one-p, def-fractional-slobodeckij-space-on-euclidean-space, def-fractional-sobolev-space-on-a-compact-c-one-boundary, thm-tonelli-and-fubini-for-completed-product-measures, def-l-p-space-as-a-quotient-by-null-functions, def-countable-choice, def-axiom-of-choice, lem-fractional-boundary-norm-is-independent-of-atlas]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "John K. Hunter, Notes on Partial Differential Equations (revised 18 June 2014, UC Davis, complete 242-page two-quarter notes)"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "Chapter 3, Section 3.9, printed p. 73: for $1<p<\\infty$ the trace range is the Besov space $B^{1-1/p,p}$, which is not all of $L^p$."
    - title: "Emilio Gagliardo, Caratterizzazioni delle tracce sulla frontiera relative ad alcune classi di funzioni in $n$ variabili, Rend. Sem. Mat. Univ. Padova 27 (1957), 284-305"
      url: "https://www.numdam.org/item/RSMUP_1957__27__284_0.pdf"
      locator: "Teorema [1.I], printed p. 289: the necessary and sufficient condition identifies the trace class with a strict subspace of $L^p(\\Gamma)$ for $p>1$."
    - title: "Armin Schikorra, Partial Differential Equations (University of Pittsburgh, version 4 December 2019)"
      url: "https://sites.pitt.edu/~armin/pde1_2019/pde_script.pdf"
      locator: "Chapter V, Section V.2, printed pp. 97-98: the boundary space has $1-1/p$ derivatives; $L^p$ boundary data are not automatically in it."
---

## Statement refuted

Assume the Axiom of Choice. The claim that for $p\ge2$ every boundary datum
$g\in L^p(\partial\Omega)$ on a bounded $C^1$ domain $\Omega\subset\mathbb R^2$
is the trace of some $u\in W^{1,p}(\Omega)$ is false. Let a boundary chart
containing the closed straight segment $[0,1]$ strictly inside its patch be given and let $g=\mathbf 1_{(0,1)}$
be the jump function on that segment, extended by zero. Then
$g\in L^p(\partial\Omega)$ for every $p$, but for every $2\le p<\infty$ one has
$g\notin W^{1-1/p,p}(\partial\Omega)$: the chart computation gives a divergent
Slobodeckij seminorm, and by
[[thm-sharp-trace-theorem-for-w-one-p]] no $u\in W^{1,p}(\Omega)$ has $Tu=g$.
In particular the Dirichlet datum is not arbitrary in $L^p(\partial\Omega)$,
and the trace range depends on $p$: for $1<p<2$ the same jump function does
belong to $W^{1-1/p,p}(\partial\Omega)$ because $1-1/p<1/p$.

## Facts & Assumptions

**Given:** The Axiom of Choice; a bounded $C^1$ domain $\Omega\subset\mathbb R^2$ with a boundary chart containing $[0,1]$ strictly inside a straight patch; the jump function $g=\mathbf 1_{(0,1)}$ on that segment, extended by zero; and $1<p<\infty$ with $\theta=1-1/p$.

[F1] On a straight chart the boundary norm is that of the Euclidean Slobodeckij space on $\mathbb R$: $[g]_{\theta,p}^p=\int_{\mathbb R}\int_{\mathbb R}|g(x)-g(y)|^p|x-y|^{-1-p\theta}dx\,dy$, an extended nonnegative integral, and the boundary space is the set of $L^p$ classes with finite norm. ([[def-fractional-slobodeckij-space-on-euclidean-space]], [[def-fractional-sobolev-space-on-a-compact-c-one-boundary]])

[F2] Assume Countable Choice. For nonnegative measurable functions on a product of sigma-finite spaces the double integral equals the iterated integrals. ([[thm-tonelli-and-fubini-for-completed-product-measures]], [[def-countable-choice]])

[F3] The trace range of $T:W^{1,p}(\Omega)\to L^p(\partial\Omega)$ is exactly $W^{\theta,p}(\partial\Omega)$ for $1<p<\infty$. ([[thm-sharp-trace-theorem-for-w-one-p]])

[F4] $L^p(\partial\Omega)$ is the quotient of the boundary-measurable functions by the almost-everywhere zero functions, so a bounded function supported in a finite-measure boundary is an $L^p$ class. ([[def-l-p-space-as-a-quotient-by-null-functions]])

## Counterexample

1.1 The full seminorm of the line jump. Let $g=\mathbf1_{(0,1)}$ on $\mathbb R$ and put $q=p\theta>0$. Symmetry and Tonelli give $[g]_{\theta,p}^p=2\int_0^1(\int_{-\infty}^0(x-y)^{-1-q}dy+\int_1^\infty(y-x)^{-1-q}dy)dx=(2/q)\int_0^1(x^{-q}+(1-x)^{-q})dx=(4/q)\int_0^1x^{-q}dx$. Thus it is finite exactly when $q<1$, and infinite when $q\ge1$; at $q=1$ the logarithmic divergence is explicit. Since $q=p-1$, the threshold is exactly $p=2$. [F1, F2, algebra, given]

2.1 Transfer to the boundary and conclusion. Because $\partial\Omega$ has finite surface measure and the straight chart has bounded density, $g\in L^p(\partial\Omega)$ is a bounded function on a finite-measure boundary, hence an $L^p$ class by [F4]; choose a subordinate cutoff equal to one near the closed segment. In that atlas its representation is exactly the line jump from step 1.1, while all other localised representations are bounded Lipschitz multiples and coordinate transforms of it. The multiplier and atlas estimates of [[lem-fractional-boundary-norm-is-independent-of-atlas]] therefore make the norm finite when $p<2$ and infinite when $p\ge2$, independently of the atlas. By [F3] the trace range equals the boundary space, so for $p\ge2$ there is no $u\in W^{1,p}(\Omega)$ with $Tu=g$. For $1<p<2$, step 1.1 gives $p\theta<1$ and $[g]_{\theta,p}<+\infty$, so $g$ is in the trace range in that exponent range: the range genuinely depends on $p$. [F1, F3, F4, step 1.1, algebra] ∎

## Source notes

Hunter's Section 3.9 (printed p. 73) identifies the trace range for $1<p<\infty$ with the Besov space $B^{1-1/p,p}$, which is not all of $L^p$; Gagliardo's Teorema [1.I] (printed p. 289) states the two-sided condition whose boundary class is a strict subspace of $L^p$, and Schikorra's Section V.2 (printed pp. 97-98) records the derivative loss. The computation above is elementary and separates the cases $p<2$ and $p\ge2$ explicitly.
