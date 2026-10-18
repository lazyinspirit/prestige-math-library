---
id: def-bessel-complementary-recurrence-solution
kind: definition
title: Complementary solution for the integer Bessel recurrence
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-integer-order-bessel-series]
justified_by: []
forward_refs: []
aliases: []
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: DLMF, §3.6(iii), Miller's Algorithm
      url: https://dlmf.nist.gov/3.6
    - title: N. M. Temme, “Numerical aspects of special functions,” Acta Numerica 17 (2008), §§2 and 4
      url: https://ir.cwi.nl/pub/11612/11612C.pdf
dependency_level: 1
---

## Definition

Fix real $x>0$. Let $D_0(x)=-J_1(x)$ and $D_1(x)=J_0(x)$, and for every integer
$j\ge1$ define

$$D_{j+1}(x)=\frac{2j}{x}D_j(x)-D_{j-1}(x).$$

Thus $D$ is the second sequence obtained from the same order recurrence as
$J_j(x)$. It is a local auxiliary solution, not the Bessel function of the
second kind.
