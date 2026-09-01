---
id: def-syzygy-and-cosyzygy-relative-to-a-resolution
kind: definition
title: "Syzygies and cosyzygies relative to a chosen resolution"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-projective-resolution-in-an-abelian-category, def-injective-resolution-in-an-abelian-category, def-deleted-resolution, def-length-of-a-resolution]
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-01
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, An Introduction to Homological Algebra"
      url: "https://djvu.online/file/WrPctxOTQCdBj"
    - title: "Romyar Sharifi, Homological Algebra"
      url: "https://math.ucla.edu/~sharifi/homalg.pdf"
pipeline_run: frontier-28
---
## Definition

Fix a projective resolution $$\cdots \to P_2\xrightarrow{d_2}P_1\xrightarrow{d_1}P_0\xrightarrow{\varepsilon}A\to0.$$ Its **first syzygy relative to this resolution** is $$\Omega^1_P(A):=\ker(\varepsilon),$$ and for $n\ge2$ its **$n$th syzygy relative to this resolution** is $$\Omega^n_P(A):=\ker(d_{n-1}).$$

Dually, for an injective resolution $$0\to A\xrightarrow{\eta}I^0\xrightarrow{d^0}I^1\xrightarrow{d^1}I^2\to\cdots,$$ its **first cosyzygy relative to this resolution** is $$\Sigma^1_I(A):=\operatorname{coker}(\eta),$$ and for $n\ge2$ its **$n$th cosyzygy relative to this resolution** is $$\Sigma^n_I(A):=\operatorname{coker}(d^{n-2}).$$

These objects are attached to the displayed resolution. No canonical-object claim is made without further comparison data.
