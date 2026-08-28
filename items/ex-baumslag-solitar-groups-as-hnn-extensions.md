---
id: ex-baumslag-solitar-groups-as-hnn-extensions
kind: example
title: "Baumslag-Solitar groups as HNN extensions"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-ascending-hnn-extension, def-hnn-extension-and-stable-letter, prop-normal-form-for-an-ascending-hnn-extension]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-28
sources:
  scraped: []
  references:
    - title: "Roger C. Lyndon and Paul E. Schupp, Combinatorial Group Theory"
      url: "https://www.scribd.com/document/384118619/CombinatorialGroupTheory"
---

## Example

For nonzero integers $m,n$, the Baumslag-Solitar group

$$BS(m,n)=\langle a,t\mid ta^m t^{-1}=a^n\rangle$$

is an HNN extension of $\mathbb Z$, and it is ascending exactly in the cases
$|m|=1$ or $|n|=1$.

## Facts & Assumptions

**Given:** Nonzero integers $m,n$.

[L1] A general HNN extension adjoins a stable letter conjugating one embedded subgroup onto another. ([[def-hnn-extension-and-stable-letter]])

[L2] An ascending HNN extension is the case in which one associated subgroup is the whole base group. ([[def-ascending-hnn-extension]])

[L3] Ascending HNN extensions admit one-sided normal forms. ([[prop-normal-form-for-an-ascending-hnn-extension]])

## Verification

**Proof technique:** direct.

1.1 In the base group $A=\langle a\rangle\cong\mathbb Z$, the subgroups $\langle a^m\rangle$ and $\langle a^n\rangle$ are isomorphic and the displayed presentation is exactly of the HNN form from [L1]. [L1, given]

2.1 If $|m|=1$, then $\langle a^m\rangle=A$ and [L2] makes $BS(m,n)$ an ascending HNN extension; similarly if $|n|=1$ after reversing the stable letter. In those cases [L3] gives the one-sided normal form. When both $|m|$ and $|n|$ exceed $1$, both associated subgroups are proper, so the extension is not ascending. [L2, L3, step 1.1, algebra] ∎
