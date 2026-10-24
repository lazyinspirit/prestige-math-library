---
id: ex-biquadratic-quartic-has-galois-group-v-four
kind: example
title: "$x^4-10x^2+1$ has Galois group $V_4$ over $\\mathbb Q$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [ex-biquadratic-galois-correspondence-lattice, prop-resolvent-cubic-formula-and-discriminant, thm-galois-group-of-an-irreducible-quartic-by-its-resolvent]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
  audited: 2026-08-24
sources:
  scraped: []
  references:
    - title: "K. Conrad, The Galois Correspondence, biquadratic examples"
      url: "https://kconrad.math.uconn.edu/blurbs/galoistheory/galoiscorr.pdf"
    - title: "K. Conrad, Galois Groups of Cubics and Quartics, Section 3"
      url: "https://kconrad.math.uconn.edu/blurbs/galoistheory/cubicquartic.pdf"
pipeline_run: null
---

## Example

The polynomial $x^4-10x^2+1$ has Galois group $V_4$ over $\mathbb Q$.

## Facts & Assumptions

**Given:** The quartic resolvent formula ([[prop-resolvent-cubic-formula-and-discriminant]]) and the fully split resolvent row of [[thm-galois-group-of-an-irreducible-quartic-by-its-resolvent]].

[L1] $\mathbb Q(\sqrt2,\sqrt3)/\mathbb Q$ is Galois with group $V_4$ ([[ex-biquadratic-galois-correspondence-lattice]]).

## Verification

**Proof technique:** direct.

1.1 Put $\alpha=\sqrt2+\sqrt3$. Then $(\alpha^2-5)^2=24$, so $\alpha^4-10\alpha^2+1=0$. Since $\alpha^{-1}=\sqrt3-\sqrt2$, one recovers $\sqrt2=(\alpha-\alpha^{-1})/2$ and $\sqrt3=(\alpha+\alpha^{-1})/2$, so $\mathbb Q(\alpha)=\mathbb Q(\sqrt2,\sqrt3)$ and the polynomial is the degree-four minimal polynomial of $\alpha$. [algebra]

2.1 Its four distinct conjugates are $\sqrt2+\sqrt3$, $\sqrt2-\sqrt3$, $-\sqrt2+\sqrt3$, and $-\sqrt2-\sqrt3$, all in the biquadratic field. Thus this is the splitting field and [L1] gives Galois group $V_4$. [step 1.1, L1]

3.1 The resolvent is $y^3+10y^2-4y-40=(y+10)(y-2)(y+2)$, so it splits completely over $\mathbb Q$, agreeing with the $V_4$ row. [step 2.1, given, algebra] ∎
