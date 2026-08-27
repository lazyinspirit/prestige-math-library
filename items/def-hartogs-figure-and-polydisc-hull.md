---
id: def-hartogs-figure-and-polydisc-hull
kind: definition
title: "The Hartogs figure H(r,s) and its bidisc hull"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-balls-and-polydiscs-in-complex-euclidean-space]
justified_by: []
aliases: []
landmark: false
verification:
  audited: 2026-08-27
  precheck: n/a
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

## Definition

Fix real numbers $0<r,s<1$. The **Hartogs figure**
$H(r,s)\subseteq\mathbb C^2$ is

$$H(r,s):=\{(z_1,z_2): |z_1|<1,\ |z_2|<s\} \cup \{(z_1,z_2): r<|z_1|<1,\ |z_2|<1\}.$$

Its **bidisc hull** is the full unit bidisc

$$\widehat H(r,s):=\{(z_1,z_2): |z_1|<1,\ |z_2|<1\}=\Delta_1(0)\times\Delta_1(0).$$

## Remarks

The first piece is the thin cylinder over the $z_1$-disc, and the second piece
is the thick outer shell in the $z_1$-variable with full $z_2$-disc available.
The missing core is
$\{(z_1,z_2): |z_1|\le r,\ s\le |z_2|<1\}$, and the Hartogs phenomenon is that
holomorphic functions on $H(r,s)$ do not feel that missing core.

Translated and rescaled versions are obtained by applying affine complex
coordinate changes to the bidisc description above; the later shell-extension
lemma uses exactly that coordinate model.
