---
id: cex-critical-sobolev-embedding-is-not-compact
kind: counterexample
title: "The critical Sobolev embedding is not compact"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 4
deps: [cor-subcritical-compactness-for-w-one-p-zero-on-arbitrary-bounded-open-sets, def-wkp-zero-as-a-sobolev-closure, def-sobolev-space-wkp-and-its-norm, cor-positive-negative-part-and-truncation-calculus-in-w-one-p, thm-sobolev-chain-rule-for-globally-lipschitz-scalar-functions, thm-linear-change-of-variables-for-lebesgue-measure, lem-euclidean-balls-have-positive-finite-lebesgue-measure, thm-kernel-of-the-trace-is-w-one-p-zero, lem-sobolev-trace-agrees-with-continuous-boundary-values, cor-l-p-convergent-sequences-have-almost-everywhere-convergent-subsequences, def-l-p-space-as-a-quotient-by-null-functions, def-axiom-of-choice, thm-dominated-convergence, lem-classical-derivatives-are-weak-derivatives]
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
    - title: "Juha Kinnunen, Sobolev Spaces (Aalto University, 2026, complete graduate lecture notes)"
      url: "https://math.aalto.fi/~jkkinnun/files/sobolev_spaces.pdf"
      locator: "Example 3.46 and its moral, printed pp. 89-90"
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (archived 2025 author manuscript)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "Examples 9.13 and 9.14, printed pp. 218-219"
    - title: "John K. Hunter, Notes on Partial Differential Equations (UC Davis, revised 18 June 2014, complete 242-page two-quarter notes)"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "Example 3.47, printed p. 74"
---

## Statement refuted

**Refuted claim.** The continuous critical embedding
$W^{1,p}_0(\Omega)\hookrightarrow L^{p^{*}}(\Omega)$,
$p^{*}=\frac{np}{n-p}$, is compact.

The witness is the standard concentrating cone: one fixed profile rescaled so
that its $L^{p^{*}}$ norm is constant while its support shrinks to a point.

## Facts & Assumptions

**Given:** the Axiom of Choice, $n\ge2$, $\Omega=B(0,1)\subset\mathbb R^n$, $1\le p<n$, $p^{*}=\frac{np}{n-p}$, and $u_k(x):=k^{(n-p)/p}\max\{0,1-k|x|\}$ for $k\ge1$.

[F1] *Scaling.* For measurable nonnegative $h$ and $k>0$, $\int h(kx)k^n\,dx=\int h(y)\,dy$. ([[thm-linear-change-of-variables-for-lebesgue-measure]], [[lem-euclidean-balls-have-positive-finite-lebesgue-measure]])

[F2] *Membership in $W^{1,p}_0(\Omega)$.* Each $u_k$ is Lipschitz on $\overline\Omega$ and vanishes on $\partial\Omega$. Its Sobolev trace is therefore zero, because the trace agrees with boundary values for continuous Sobolev functions; the trace-kernel theorem then gives $u_k\in W^{1,p}_0(\Omega)$. To establish the missing premise for that chain rule, on the ball put $r_\varepsilon(x)=\sqrt{|x|^2+\varepsilon^2}$. These smooth functions converge uniformly to $|x|$, and $\partial_i r_\varepsilon=x_i/r_\varepsilon$ converges almost everywhere to $x_i/|x|$, with modulus at most $1$. Dominated convergence passes their weak test identities to the limit, proving $|x|\in W^{1,p}(\Omega)$ with that weak gradient for finite $p$. The scalar truncation chain rule then gives the cone gradient and membership. ([[thm-dominated-convergence]], [[lem-classical-derivatives-are-weak-derivatives]]) ([[thm-sobolev-chain-rule-for-globally-lipschitz-scalar-functions]], [[cor-positive-negative-part-and-truncation-calculus-in-w-one-p]], [[lem-sobolev-trace-agrees-with-continuous-boundary-values]], [[thm-kernel-of-the-trace-is-w-one-p-zero]], [[def-wkp-zero-as-a-sobolev-closure]], [[def-sobolev-space-wkp-and-its-norm]])

[F3] *Almost-everywhere subsequences.* An $L^{p^*}$-convergent sequence has a subsequence converging almost everywhere to a representative of its limit ($1<p^*<\infty$). ([[cor-l-p-convergent-sequences-have-almost-everywhere-convergent-subsequences]], [[def-l-p-space-as-a-quotient-by-null-functions]])

## Counterexample

**Proof technique:** direct.

1.1 By [F1], $\|u_k\|_{L^{p^*}}^{p^*}=k^{(n-p)p^*/p}k^{-n}\|u_1\|_{L^{p^*}}^{p^*}=\|u_1\|_{L^{p^*}}^{p^*}>0$ because $(n-p)p^*/p=n$, and $\|Du_k\|_{L^p}=k^{(n-p)/p+1}k^{-n/p}\|Du_1\|_{L^p}=\|Du_1\|_{L^p}$, while $\|u_k\|_{L^p}=k^{(n-p)/p}k^{-n/p}\|u_1\|_{L^p}=k^{-1}\|u_1\|_{L^p}\to0$; by [F2] all $u_k$ lie in $W^{1,p}_0(\Omega)$, so the sequence is bounded in $W^{1,p}_0(\Omega)$ and converges to $0$ almost everywhere and in $L^p(\Omega)$. [F1, F2, given]

2.1 Suppose a subsequence converged in $L^{p^*}(\Omega)$ to some $w$. Then $\|w\|_{L^{p^*}}=\|u_1\|_{L^{p^*}}>0$ by continuity of the norm, while [F3] provides a further subsequence converging almost everywhere to a representative of $w$; since $u_k(x)\to0$ for every $x\ne0$, that representative vanishes almost everywhere, forcing $w=0$ and contradicting the positive norm. Hence no subsequence converges in $L^{p^*}(\Omega)$ and the refuted compactness claim is false; the companion subcritical statement [[cor-subcritical-compactness-for-w-one-p-zero-on-arbitrary-bounded-open-sets]] shows that the strict inequality $q<p^*$ cannot be relaxed. The Axiom of Choice is inherited through [F2]. [F2, F3, step 1.1] ∎ 