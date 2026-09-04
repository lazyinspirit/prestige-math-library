---
id: ex-hartogs-figure-in-modulus-coordinates
kind: example
title: "The Hartogs figure in (|z1|, |z2|) coordinates"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [def-hartogs-figure-and-polydisc-hull]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-27
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "J. Lebl, Tasty Bits of Several Complex Variables, §2.1"
      url: "https://www.jirka.org/scv/scv.pdf"
pipeline_run: null
---

## Example

For $0<r,s<1$, the Hartogs figure $H(r,s)$ is the union of a thin inner cylinder
and a thick outer shell:

$$ H(r,s)=\{ |z_1|<1,\ |z_2|<s\}\cup\{ r<|z_1|<1,\ |z_2|<1\}. $$

In the $(|z_1|,|z_2|)$-plane this is exactly the region obtained by taking the
rectangle $[0,1)\times[0,s)$ together with the vertical strip
$(r,1)\times[0,1)$.

## Facts & Assumptions

**Given:** Real numbers $0<r,s<1$.

[L1] The Hartogs figure and its bidisc hull are defined by the displayed modulus
conditions in the two coordinates
([[def-hartogs-figure-and-polydisc-hull]]).

## Verification

**Proof technique:** direct.

1.1 By [L1], membership in $H(r,s)$ depends only on the two moduli $|z_1|$ and $|z_2|$, and the two defining pieces are exactly the inequalities listed in the Example. [L1]

2.1 So the picture in modulus coordinates is the union of the thin horizontal rectangle $[0,1)\times[0,s)$ with the outer vertical strip $(r,1)\times[0,1)$, while the missing core is $[0,r]\times[s,1)$. [step 1.1] ∎
