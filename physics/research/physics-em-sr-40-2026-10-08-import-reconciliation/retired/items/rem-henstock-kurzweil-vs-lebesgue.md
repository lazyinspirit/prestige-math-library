---
id: rem-henstock-kurzweil-vs-lebesgue
kind: remark
title: "Henstock-Kurzweil versus Lebesgue: $f$ is Lebesgue integrable iff $f$ and $|f|$ are both HK integrable"
status: published
origin: session
proved_here: false
deps: [rem-lebesgue-measure-and-integral]
justified_by: []
forward_refs: []
aliases: [rem-hk-vs-lebesgue]
landmark: false
short: "HK is a non-absolute integral; adding absolute integrability of |f| recovers exactly L^1"
verification:
  precheck: n/a
  sources_checked:
    date: 2026-07-26
    scope: citations
    by: session-audit
sources:
  scraped: []
  references:
    - title: "Henstock-Kurzweil integral (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Henstock%E2%80%93Kurzweil_integral"
    - title: "Perron-Stieltjes integral (Encyclopedia of Mathematics)"
      url: "https://encyclopediaofmath.org/wiki/Perron-Stieltjes_integral"
pipeline_run: null
---

## Statement

Let $f : [a,b] \to \mathbb{R}$. Then $f$ is Lebesgue integrable on $[a,b]$ if and
only if both $f$ and $|f|$ are Henstock-Kurzweil integrable on $[a,b]$, and in
that case the two integrals of $f$ agree.

Equivalently: the Henstock-Kurzweil integral is a **non-absolute** integral, and
$L^{1}[a,b]$ is exactly its absolutely integrable part. The inclusion is strict.
The function $F(x) = x^2 \sin(1/x^2)$ for $x \ne 0$, $F(0) = 0$, is
differentiable everywhere on $[0,1]$ and $F'$ is HK integrable with
$\int_0^1 F' = F(1) - F(0)$, but $|F'|$ is not integrable in any sense, so $F'$
is not Lebesgue integrable. This is the point of the HK integral: it integrates
every derivative, and the Newton-Leibniz formula
$\int_a^b F' = F(b) - F(a)$ holds for every everywhere-differentiable $F$, with
no hypothesis on $F'$ at all.

## Remarks

**Not proved in this library.** The comparison is recorded here; the HK integral
itself is not deferred and is planned as ordinary content.

**What would prove it.** In one direction, a Lebesgue integrable $f$ is HK
integrable with the same integral, and so is $|f|$, by the Vitali covering
argument that produces gauges from measurable approximations. In the other, if
$f$ and $|f|$ are both HK integrable then the indefinite HK integral of $|f|$ is
absolutely continuous and monotone, and its derivative recovers $|f|$ almost
everywhere, so $f \in L^1$. Both directions quantify over Lebesgue integrability
([[rem-lebesgue-measure-and-integral]]) and use the differentiation theory
([[rem-lebesgue-monotone-differentiation]],
[[rem-ftc-absolutely-continuous]]), which is why only the comparison is deferred.

**Which page it serves.** A Henstock-Kurzweil page in the integration track,
which this library intends to build: the gauge integral needs only tagged
partitions, a gauge $\delta : [a,b] \to (0,\infty)$, and Cousin's lemma, all of
which are elementary and in scope. That page can prove the full Newton-Leibniz
theorem for the HK integral, and then must record here what its relationship to
$L^1$ is.

**Why the comparison is the deferred part.** The theorem is a statement about two
integrals, one of which does not exist in this library. Stating it as a theorem
would require the Lebesgue integral in the hypothesis and in the conclusion. The
HK side loses nothing by the deferral: the improper integrals page and the
fundamental theorems of calculus page can both use the gauge integral without
mentioning measure at all.
