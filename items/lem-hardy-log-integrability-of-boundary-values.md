---
id: lem-hardy-log-integrability-of-boundary-values
kind: lemma
title: "Log-integrability of the boundary values of a Hardy function"
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [def-countable-choice, def-analytic-hardy-space-disc, def-nevanlinna-class-on-the-disc, lem-nevanlinna-sup-mean-criterion, thm-nevanlinna-boundary-values-and-log-integrability, thm-fatou-lemma, def-the-one-dimensional-torus-and-normalized-haar-integral]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "R. K. Srivastava, Lecture Notes on Hardy Spaces (MA650, IIT Guwahati), §5.7"
      url: "https://fac.iitg.ac.in/rksri/MA650%20Advanced%20Hardy%20Spaces%20Notes.pdf"
      locator: "The boundary uniqueness theorem, Corollary 5.14, printed pp. 34-35: $\\log|g|\\in L^1$ for $g\\in H^1$ and the positive-measure vanishing criterion."
    - title: "J. B. Garnett, Bounded Analytic Functions, revised first edition, Chapter II §4-§5"
      url: "https://dokumen.pub/bounded-analytic-functions-0387336214-9780387336213.html"
      locator: "printed pp. 62-66: $\\log|f^*|\\in L^1$ for $f\\in H^p$, via the zero-free factor and its root."
---

## Statement

Let $0<p\le\infty$ and $f\in H^p(\mathbb D)$ with $f\not\equiv0$, with its nontangential boundary
function $f^*$ supplied by [[thm-nevanlinna-boundary-values-and-log-integrability]]. Then
$\log|f^*|\in L^1(\mathbb T,m)$; equivalently
$\int_{\mathbb T}\log|f^*|\,dm>-\infty$. In particular $f^*\ne0$ $m$-almost
everywhere, and if $f^*=0$ on a set of positive $m$-measure then $f\equiv0$.

## Facts & Assumptions

**Given:** Countable choice, $0<p\le\infty$ and a nonzero $f\in H^p(\mathbb D)$.

[F1] Hardy membership bounds the radial p-means for finite p and the interior supremum for p infinity. On the probability circle, $\log^+ t\le t^p/p$ for $p>0$. Uniformly bounded radial logarithmic means are equivalent to Nevanlinna membership under countable choice. ([[def-analytic-hardy-space-disc]], [[def-nevanlinna-class-on-the-disc]], [[lem-nevanlinna-sup-mean-criterion]], [[def-the-one-dimensional-torus-and-normalized-haar-integral]], [[def-countable-choice]])

[F2] Under countable choice every nonzero Nevanlinna function has finite nonzero nontangential boundary values almost everywhere and an integrable boundary logarithm. ([[thm-nevanlinna-boundary-values-and-log-integrability]])

[F3] Fatou's lemma bounds the integral of a nonnegative pointwise limit by the limit inferior of the integrals. ([[thm-fatou-lemma]])

## Proof

1.1 If $p<\infty$, [F1] gives $\sup_r\int\log^+|f_r|dm\le\|f\|_{H^p}^p/p<\infty$. If $p=\infty$, $\log^+|f|\le\log^+\|f\|_\infty$, a constant harmonic majorant. In both cases $f\in N(\mathbb D)$ by [F1], including functions with origin zeros or no zeros; no zero enumeration or general Hardy boundary theorem is used. [F1, given, algebra]

2.1 Apply [F2] to the nonzero f. It gives the finite nontangential boundary function $f^*$ and $\log|f^*|\in L^1$. For finite p, [F3] applied along radii to $|f_r|^p$ also gives $\int|f^*|^pdm\le\|f\|_{H^p}^p$; for p infinity, limits preserve the bound $|f^*|\le\|f\|_\infty$. Thus the same boundary function is in the asserted Lp class under CC alone. [step 1.1, F2, F3, algebra]

3.1 The positive boundary logarithmic part is integrable by the Lp bound and $\log^+ t\le t^p/p$ (or the uniform bound at infinity). Hence finiteness of the lower logarithmic integral is equivalent to integrability of its negative part, and so to absolute logarithmic integrability. Both are given by step 2.1. [step 2.1, F1, algebra]

4.1 An integrable real logarithm is finite almost everywhere, so $f^*\ne0$ almost everywhere. If the boundary function of a Hardy function vanishes on a positive-measure set, it cannot be nonzero by step 2.1; it must therefore be the zero function. This proves all original logarithmic and uniqueness claims under the existing CC class conventions. [step 2.1, step 3.1, algebra] ∎
