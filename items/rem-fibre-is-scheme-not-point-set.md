---
id: "rem-fibre-is-scheme-not-point-set"
kind: "remark"
title: "What the underlying fibre set forgets"
status: published
origin: "pipeline"
deps: ["lem-points-of-fibre-primes-over-point", "lem-scheme-fibre-stalk-quotient", "lem-points-of-scheme-fibre-product-residue-tensors"]
provenance:
  statement: "literature-derived"
  proof: "not-applicable"
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Vakil 10.1.2 and 10.3.3; Stacks 26.18.5–6"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGmar3111public.pdf"
---

## Discussion

By [[lem-points-of-fibre-primes-over-point]], the underlying space of $X_s$ is the ordinary inverse image of $s$ with its subspace topology. Its local rings, however, are the quotients in [[lem-scheme-fibre-stalk-quotient]], not a structure determined just by that set. Nilpotents and the residue fields remain mathematical data. For example $k[\epsilon]/(\epsilon^2)$ has one prime and residue field $k$, yet $\epsilon$ is a nonzero nilpotent, unlike the one-point reduced ring $k$.

For a general product $X\times_S Y$, even the underlying set requires more than a compatible pair $(x,y)$. By [[lem-points-of-scheme-fibre-product-residue-tensors]], the missing datum is a prime of $\kappa(x)\otimes_{\kappa(s)}\kappa(y)$. Thus ordinary fibre topology and general fibre-product points must be kept distinct.
