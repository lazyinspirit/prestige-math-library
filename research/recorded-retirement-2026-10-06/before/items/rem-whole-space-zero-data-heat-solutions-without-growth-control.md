---
id: rem-whole-space-zero-data-heat-solutions-without-growth-control
kind: remark
title: "Tychonoff nonuniqueness: zero-data heat solutions without growth control (recorded, not proved here)"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 5
deps:
  - thm-whole-space-heat-uniqueness-under-gaussian-growth
proved_here: false
provenance:
  statement: literature-derived
  proof: not-supplied
external_dependency:
  source_url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
  exact_statement: "Hunter, Example 5.7: for u_t = u_xx the formal series u(x,t) = sum_{m>=0} g^{(m)}(t) x^{2m}/(2m)! formally solves the heat equation for smooth g, and choosing g(t) = exp(-1/t^2) for t > 0, g = 0 for t <= 0, gives a nonzero smooth solution with zero initial data growing very rapidly as |x| -> infinity; Teschl, Example 6.4 records the same one-dimensional construction and Corollary 6.19 records uniqueness under the Gaussian growth bound |u| <= A e^{a|x|^2}."
  local_proof_attempt: "Not reconstructed here. No local proof of convergence of the series or of the rapid growth is supplied on this page; the construction is recorded as an external existence result, consistent with the item being a leaf that no item of this page depends on."
  necessity: "Records the exact scope of the uniqueness theorem: uniqueness in the Gaussian growth class cannot be upgraded to unconditional uniqueness for the whole-space zero-data Cauchy problem, so consumers must state the growth hypothesis explicitly."
verification:
  precheck: n/a
sources:
  references:
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2025 archived author manuscript, AMS Graduate Studies in Mathematics)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.math.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "§6.4, printed p. 160, Example 6.4 (Tikhonov's nontrivial solutions vanishing at $t=0$) and Corollary 6.19 (uniqueness under $|u|\\le Ae^{a|x|^2}$)"
    - title: "John K. Hunter, Notes on Partial Differential Equations (revised 18 June 2014, UC Davis)"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "Chapter 5, §5.1.4, printed p. 133, Example 5.7 ($g(t)=\\exp(-1/t^2)$ gives a nonzero solution with zero initial data)"
---

## Remark

**Recorded orientation, not proved here.** The growth hypothesis in
[[thm-whole-space-heat-uniqueness-under-gaussian-growth]] cannot be dropped: for
the one-dimensional heat equation $u_t=u_{xx}$ there exist nonzero smooth
solutions on $\mathbb R\times(0,\infty)$ with $u(0,x)=0$ for all $x$. Teschl's
Example 6.4 writes
$$u(t,x)=\sum_{m\ge0}\frac{\varphi^{(m)}(t)\,x^{2m}}{(2m)!},\qquad \varphi(t)=\begin{cases}e^{-1/t^2},&t>0,\\ 0,&t\le0,\end{cases}$$
and the series converges for every $x$ to a smooth solution of the heat equation
with vanishing initial data; Hunter's Example 5.7 records the same construction
and notes that the resulting solution grows very rapidly as $|x|\to\infty$.
Such solutions are therefore outside every Gaussian growth class and do not
contradict the uniqueness theorem above; the statement of the recorded result is
not proved on this page.
