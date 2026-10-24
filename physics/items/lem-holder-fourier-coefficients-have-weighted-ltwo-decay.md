---
id: lem-holder-fourier-coefficients-have-weighted-ltwo-decay
kind: lemma
title: "Hölder Fourier coefficients have subcritical weighted ell-2 decay"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-dyadic-fourier-coefficient-square-sum-bound-for-holder-functions]
proof_strategy: direct
verification:
  audited: 2026-09-06
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Loukas Grafakos, Classical Fourier Analysis, proof of Theorem 3.3.16"
      url: "https://www.math.stonybrook.edu/~bishop/classes/math638.F20/Grafakos_Classical_Fourier_Analysis.pdf"
---

## Statement

If $f\in C^\alpha(\mathbb T)$ with $0<\alpha\le1$, then for every $0<s<\alpha$,
$$\sum_{k\in\mathbb Z}(1+|k|)^{2s}|\widehat f(k)|^2<\infty.$$

## Facts & Assumptions

**Given:** $f\in C^\alpha(\mathbb T)$ and $0<s<\alpha$.

[L1] Every dyadic block has square mass $O(N^{-2\alpha})$ ([[lem-dyadic-fourier-coefficient-square-sum-bound-for-holder-functions]]).

## Proof

**Proof technique:** direct.

1.1 On $2^j\le|k|<2^{j+1}$, $(1+|k|)^{2s}\le3^{2s}2^{2js}$; [L1] therefore bounds that weighted block by $O(2^{-2j(\alpha-s)})$. [L1, algebra]

2.1 Since $\alpha-s>0$, these bounds form a convergent geometric series. The $k=0$ term is finite because $f$ is bounded and integrable. [step 1.1, algebra] ∎
