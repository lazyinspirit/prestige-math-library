---
id: "cex-arbitrary-ltwo-boundary-data-need-not-have-an-h-one-lifting"
kind: "counterexample"
title: "Arbitrary $L^2$ boundary data need not have an $H^1$ lifting"
status: draft
origin: pipeline
pipeline_run: "frontier-39-analysis-30"
dependency_level: 0
deps:
  - "def-axiom-of-choice"
  - "def-bounded-c-k-domain-and-boundary-charts"
  - "def-countable-choice"
  - "def-fractional-slobodeckij-space-on-euclidean-space"
  - "def-fractional-sobolev-space-on-a-compact-c-one-boundary"
  - "def-l-p-space-as-a-quotient-by-null-functions"
  - "def-surface-integral-on-a-compact-c-one-hypersurface"
  - "lem-fractional-boundary-norm-is-independent-of-atlas"
  - "thm-lp-trace-operator-on-a-bounded-c-one-domain"
  - "thm-sharp-trace-theorem-for-w-one-p"
  - "thm-tonelli-and-fubini-for-completed-product-measures"
proof_strategy: "direct"
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "John K. Hunter, Notes on Partial Differential Equations (UC Davis, revised 18 June 2014, complete 242-page two-quarter notes)"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "Section 3.9, Theorem 3.44 and the paragraph following its proof, printed pp. 72–73: the p>1 trace range is a proper fractional/Besov subspace of Lp."
    - title: "John K. Hunter, Notes on Partial Differential Equations (UC Davis, revised 18 June 2014, complete 242-page two-quarter notes)"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "Section 3.9, printed pp. 72–73, trace background only. The indicator jump and its divergent Slobodeckij seminorm are computed in the local proof; no jump example is claimed on p. 72."
    - title: "Emilio Gagliardo, Caratterizzazioni delle tracce sulla frontiera relative ad alcune classi di funzioni in $n$ variabili, Rend. Sem. Mat. Univ. Padova 27 (1957), 284–305"
      url: "https://www.numdam.org/item/RSMUP_1957__27__284_0.pdf"
      locator: "Teorema [1.I], printed p. 289: the trace class is a strict subspace of $L^p(\\Gamma)$"
    - title: "Haim Brezis, Functional Analysis, Sobolev Spaces and Partial Differential Equations (Springer Universitext, 2011, complete 614-page text)"
      url: "https://www.math.toronto.edu/almut/Brezis.pdf"
      locator: "§9.4–9.5, the trace space of $W^{1,p}$ is strictly smaller than $L^p(\\partial\\Omega)$, printed pp. 287–298"
---

## Statement refuted

Assume the Axiom of Choice. Let $\Omega\subset\mathbb R^2$ be a bounded $C^1$ domain, let a boundary chart contain the closed straight segment $[0,1]$ strictly inside its patch, and let $g:=\mathbf 1_{(0,1)}$ on that segment, extended by zero. Then $g\in L^2(\partial\Omega)$, but $g\notin H^{1/2}(\partial\Omega)=W^{1/2,2}(\partial\Omega)$: the Slobodeckij seminorm of the line jump at exponent $\theta=1-1/2$ diverges logarithmically, and by the sharp trace theorem the trace range of $W^{1,2}(\Omega)$ is exactly $W^{1/2,2}(\partial\Omega)$. Consequently no $u\in H^1(\Omega)$ has $Tu=g$, so the boundary-value problem with this $L^2$ datum is not solvable in $H^1$: the lifting hypothesis of the weak Dirichlet formulation cannot be relaxed to arbitrary $L^2$ boundary data. No claim is made about the range $1<p<2$, where the same jump function does lie in the trace space.

## Facts & Assumptions

**Given:** The Axiom of Choice together with Countable Choice; a bounded $C^1$ domain $\Omega\subset\mathbb R^2$ with a boundary chart containing the closed straight segment $[0,1]$ strictly inside its patch; the jump function $g=\mathbf 1_{(0,1)}$ on that segment, extended by zero; the surface measure on $\partial\Omega$; and the exponent $\theta=1-1/2=1/2$, so that $q:=p\theta=1$ at $p=2$. ([[def-bounded-c-k-domain-and-boundary-charts]], [[def-surface-integral-on-a-compact-c-one-hypersurface]], [[def-axiom-of-choice]], [[def-countable-choice]])

[F1] The boundary norm of [[def-fractional-sobolev-space-on-a-compact-c-one-boundary]] is a sum over a finite boundary atlas of the Euclidean Slobodeckij norms of the localised representations $(\chi_jg)\circ\Psi_j^{-1}$, where $\chi_j$ is a subordinate finite ambient partition; the Euclidean norm is that of [[def-fractional-slobodeckij-space-on-euclidean-space]], the sum of the $L^p$ norm and the extended seminorm $[h]_{s,p}=\bigl(\int\int|h(x)-h(y)|^p|x-y|^{-1-sp}dx\,dy\bigr)^{1/p}$, and the set $W^{s,p}(\partial\Omega)$ and its topology are independent of the atlas ([[lem-fractional-boundary-norm-is-independent-of-atlas]]).

[F2] Assume Countable Choice. For nonnegative measurable functions on a product of sigma-finite measure spaces the double integral equals the iterated integrals. ([[thm-tonelli-and-fubini-for-completed-product-measures]], [[def-countable-choice]])

[F3] A bounded measurable function supported in a set of finite surface measure is an $L^p(\partial\Omega)$ class for every $p$. ([[def-l-p-space-as-a-quotient-by-null-functions]], [[def-surface-integral-on-a-compact-c-one-hypersurface]])

[F4] Sharp trace theorem: for $1<p<\infty$ the trace operator $T:W^{1,p}(\Omega)\to L^p(\partial\Omega)$ of [[thm-lp-trace-operator-on-a-bounded-c-one-domain]] has range exactly $W^{1-1/p,p}(\partial\Omega)$ ([[thm-sharp-trace-theorem-for-w-one-p]], [[def-fractional-sobolev-space-on-a-compact-c-one-boundary]]).



## Proof

1.1 The datum is an $L^2$ class: the indicator of the straight segment $(0,1)$ is bounded and is supported in a set of finite surface measure, so by [F3] it is an $L^p(\partial\Omega)$ class for every $p$, in particular $g\in L^2(\partial\Omega)$. At $p=2$ the exponent is $\theta=1/2$ and $q=p\theta=1$. [F3, given]

1.2 The line-jump seminorm: for $h=\mathbf 1_{(0,1)}$ on $\mathbb R$ and $q=p\theta>0$ the integrand $|h(x)-h(y)|^p$ is nonzero exactly when one of $x,y$ lies in $(0,1)$ and the other does not. By symmetry and [F2] the double integral equals twice its part with $x\in(0,1)$, $y\notin(0,1)$, and the elementary antiderivative $\int u^{-1-q}du=-u^{-q}/q$ gives $$\int_{-\infty}^{0}(x-y)^{-1-q}dy+\int_1^{\infty}(y-x)^{-1-q}dy=\frac{x^{-q}+(1-x)^{-q}}{q}$$ for $x\in(0,1)$. Hence $$[h]_{\theta,p}^p=\frac{2}{q}\int_0^1\bigl(x^{-q}+(1-x)^{-q}\bigr)dx=\frac{4}{q}\int_0^1x^{-q}dx,$$ which is finite exactly when $q<1$; translating and scaling the interval $(0,1)$ to another interval $(a,b)$ changes this value by the finite factor $(b-a)^{1-q}$, so finiteness is intrinsic to the interval indicator. [F1, F2, algebra]

2.1 Divergence at $p=2$: at $q=1$ the integral in step 1.2 is $\int_0^1x^{-1}dx=+\infty$, diverging logarithmically at the endpoint $x=0$, so $[h]_{1/2,2}=+\infty$. [step 1.2, algebra]

3.1 The boundary norm is infinite: fix the finite atlas of [F1] so that it contains the given straight chart with a cutoff equal to one on the closed segment — possible because the segment lies strictly inside the patch — so that this chart's localised representation is the interval indicator $h$ of step 1.2. Then the corresponding summand of the boundary norm is $+\infty$ while every other summand is nonnegative, so $\|g\|_{W^{1/2,2}(\partial\Omega)}=+\infty$; by the atlas independence in [F1] the space $W^{1/2,2}(\partial\Omega)$ is the same set for every atlas, so $g\notin W^{1/2,2}(\partial\Omega)=H^{1/2}(\partial\Omega)$. [F1, step 2.1]

4.1 No $H^1$ lifting: at $p=2$ the sharp trace theorem identifies the range of $T:W^{1,2}(\Omega)=H^1(\Omega)\to L^2(\partial\Omega)$ with $W^{1/2,2}(\partial\Omega)$; since $g$ lies outside this range, no $u\in H^1(\Omega)$ satisfies $Tu=g$, and the inhomogeneous problem with this $L^2$ datum is not solvable in $H^1$. [F4, step 3.1] ∎
