---
id: cex-the-unit-interval-indicator-has-nonintegrable-maximal-function
kind: counterexample
title: "The maximal function of $\\mathbf{1}_{[0,1]}$ is not integrable"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-countable-choice, def-centered-and-uncentered-hardy-littlewood-maximal-functions]
proof_strategy: direct
verification:
  audited: 2026-09-04
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  references:
    - title: "G. H. Hardy and J. E. Littlewood, A maximal theorem with function-theoretic applications, Section I"
      url: "https://web.archive.org/web/20240816135714if_/https://archive.ymsc.tsinghua.edu.cn/pacm_download/117/5446-11511_2006_Article_BF02547518.pdf"
---

## Statement refuted

Assume the Axiom of Countable Choice ([[def-countable-choice]]).

The centered maximal function of $\mathbf{1}_{[0,1]}$ belongs to
$L^1(\mathbb{R})$.

## Facts & Assumptions

**Given:** The Axiom of Countable Choice and the function $f=\mathbf{1}_{[0,1]}$ on $\mathbb{R}$.

[L1] The centered maximal function is $$Mf(x)=\sup_{r>0}\frac{1}{2r}\int_{x-r}^{x+r}|f(y)|\,dy.$$ ([[def-centered-and-uncentered-hardy-littlewood-maximal-functions]])

## Counterexample

**Proof technique:** direct.

1.1 Let $x\ge1$ and take the centered interval $[0,2x]$, which has centre $x$ [L1, given, algebra] and contains $[0,1]$. Then [L1] gives $$Mf(x)\ge \frac{1}{2x}\int_0^1 1\,dy=\frac{1}{2x}.$$ [L1, given, algebra]

2.1 Therefore [step 1.1, algebra] $$\int_1^R Mf(x)\,dx\ge \frac12\int_1^R\frac{dx}{x} =\frac12\log R\qquad(R>1).$$ Letting $R\to\infty$ shows $\int_1^\infty Mf(x)\,dx=+\infty$. Hence $Mf\notin L^1(\mathbb{R})$. [step 1.1, algebra]

3.1 So the displayed claim is false. [step 2.1] ∎
