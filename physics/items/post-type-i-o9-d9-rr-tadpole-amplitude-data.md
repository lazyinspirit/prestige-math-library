---
id: post-type-i-o9-d9-rr-tadpole-amplitude-data
kind: postulate
title: "Type I O9-D9 RR Tadpole Amplitude Data"
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 6
domain: physics
library: physics
category: string-theory
physical_scope: "Source-reported transverse-channel one-loop RR residue data and zero-tadpole consistency condition for the flat ten-dimensional O9-minus Type I model. The item supplies amplitude inputs; it does not solve for N or assert a general orientifold formula."
deps:
  - def-type-i-omega-orientifold-projection
dependency_roles:
  def-type-i-omega-orientifold-projection: formulation-prerequisite
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "C. Angelantonj and A. Sagnotti, Open Strings, hep-th/0204089v2"
      url: "https://arxiv.org/pdf/hep-th/0204089v2"
      locator: "§2.1 for the fundamental-polygon topologies; §3.2, equations (145)–(148), for the common transverse-channel normalization, RR residues, and tadpole condition."
    - title: "K. S. Gimon and J. Polchinski, Consistency Conditions for Orientifolds, hep-th/9601038v3"
      url: "https://arxiv.org/pdf/hep-th/9601038v3"
      locator: "§§2–3, PDF pp. 5–10: Chan–Paton sign, crosscap normalization, and the flat Type I tadpole condition."
verification:
  precheck: pass
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  sources_checked:
    date: 2026-11-04
    scope: Recorded source, statement and proof-status review for this postulate in conformal-field-theory-string-theory-step3-fresh-2026-11-04, within the native reports' stated reading limits. This records no proof or new empirical validation.
    by: gpt-6-luna; native-step3-independent-reader; delegated by /root under owner authorization
---

## Postulate

Use the flat ten-dimensional Type I O9-minus/D9 model defined earlier. Let $N\in\mathbb Z_{\geq0}$ be the number of space-filling D9-branes. To specify the one-loop worldsheets, take the unit square $S=[0,1]^2$: the annulus is the quotient identifying $(0,y)\sim(1,y)$ and leaving the horizontal edges as its two boundary components; the Möbius strip identifies $(0,y)\sim(1,1-y)$, so the horizontal edges form one boundary component; the Klein bottle makes both identifications $(0,y)\sim(1,y)$ and $(x,0)\sim(1-x,1)$, and has no boundary. These are the compact quotient surfaces used for the Klein-bottle, annulus, and Möbius-strip amplitudes.

In the common transverse-channel normalization of Angelantonj–Sagnotti, each amplitude is written as closed-string propagation with modulus $\ell>0$. Define its massless RR residue to be the coefficient of the common massless Ramond–Ramond propagation factor after factoring out the shared transverse-channel integration and character normalization. In this normalization, the residues are
$$r_K=16,\qquad r_A=\frac{N^2}{64},\qquad r_M=\epsilon N,\qquad \epsilon\in\{+1,-1\}.$$
Here $\epsilon$ is the Möbius-strip Chan–Paton sign and is $-1$ for the negative-charge O9-minus projection. The adopted perturbative consistency condition is vanishing of the total massless RR residue $r_K+r_A+r_M$. These are source-reported one-loop amplitude and consistency inputs; no numerical solution for $N$, compactification, or general O-plane charge formula is included here.

## Postulate references

[[def-type-i-omega-orientifold-projection]]

[Angelantonj and Sagnotti, §3.2 equations (142)–(148)](https://arxiv.org/pdf/hep-th/0204089v2)

[Gimon and Polchinski, §§2–3](https://arxiv.org/pdf/hep-th/9601038v3)
