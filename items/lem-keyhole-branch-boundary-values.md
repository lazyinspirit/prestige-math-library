---
id: lem-keyhole-branch-boundary-values
kind: lemma
title: "A keyhole contour sees the two boundary values of z^(alpha-1)"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-standard-residue-contours,
       def-complex-logarithms-principal-logarithm-and-complex-powers,
       cor-principal-logarithm-is-holomorphic-on-the-slit-plane]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "R. Howell and J. Mathews, Complex Analysis, Ch. 8 §8.6"
      url: "https://complexanalysis.org/web/ch_residue.html"
pipeline_run: null
---

## Statement

Fix $\alpha\in\mathbb C$, and on the slit plane
$\mathbb C\setminus[0,\infty)$ define

$z^{\alpha-1}:=\exp((\alpha-1)\operatorname{Log} z)$

with $\operatorname{Arg} z\in(0,2\pi)$. Then for every $x>0$ the two boundary values on the
positive axis satisfy

$\lim_{y\downarrow0}(x+iy)^{\alpha-1}=x^{\alpha-1},\qquad \lim_{y\downarrow0}(x-iy)^{\alpha-1}=e^{2\pi i\alpha}x^{\alpha-1}.$

## Facts & Assumptions

**Given:** A complex exponent $\alpha$ and the branch $z^{\alpha-1}=\exp((\alpha-1)\operatorname{Log} z)$ with $\operatorname{Arg} z\in(0,2\pi)$.

## Proof

**Proof technique:** direct.

1.1 On the upper lip of the slit one has $\operatorname{Arg}(x+i0)=0$, so $\operatorname{Log}(x+i0)=\log x$ and therefore $\lim_{y\downarrow0}(x+iy)^{\alpha-1} =\exp((\alpha-1)\log x)=x^{\alpha-1}.$ [given, algebra]

2.1 On the lower lip one has $\operatorname{Arg}(x-i0)=2\pi$, so $\operatorname{Log}(x-i0)=\log x+2\pi i.$ Hence $\lim_{y\downarrow0}(x-iy)^{\alpha-1} =\exp((\alpha-1)(\log x+2\pi i)) =e^{2\pi i(\alpha-1)}x^{\alpha-1} =e^{2\pi i\alpha}x^{\alpha-1}.$ [step 1.1, algebra] ∎
