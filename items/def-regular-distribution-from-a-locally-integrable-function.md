---
id: "def-regular-distribution-from-a-locally-integrable-function"
kind: "definition"
title: "Regular distribution from a locally integrable function"
deps: ["def-test-function-space-d-of-an-open-set", "def-locally-integrable-function-on-r-n"]
provenance:
  statement: "ai-altered"
  proof: "not-applicable"
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - url: "https://math.mit.edu/~dyatlov/18.155/155-notes.pdf"
      title: "Semyon Dyatlov, Lecture notes for 18.155 (2022)"
status: published
origin: "pipeline"
---

## Definition

For open $\Omega\subseteq\mathbb R^n$, write $f\in L^1_{\mathrm{loc}}(\Omega)$ when $f:\Omega\to\mathbb C$ is Lebesgue measurable and $\int_K|f|<\infty$ for every compact $K\subseteq\Omega$. This extends [[def-locally-integrable-function-on-r-n]]: equivalently, require integrability on every ball whose closure is a compact subset of $\Omega$. Such balls finitely cover each compact $K$, and conversely their closures are compact; on all of $\mathbb R^n$, any ball lies in a larger compact closed ball.

For a test $\varphi$ as in [[def-test-function-space-d-of-an-open-set]], define the **regular functional**

$$\langle u_f,\varphi\rangle=\int_\Omega f(x)\varphi(x)\,dx.$$

This is well-defined since $|\int f\varphi|\le\sup_K|\varphi|\int_K|f|$ for $K=\operatorname{supp}\varphi$. It is complex-linear in $f$ and in $\varphi$ and depends only on the almost-everywhere class of $f$. For an empty support the integral is zero. The subsequent embedding theorem establishes continuity, so that this is a distribution, and injectivity modulo almost-everywhere equality. That theorem states the Countable Choice cost of its injectivity proof; no choice is needed to define the displayed pairing.
