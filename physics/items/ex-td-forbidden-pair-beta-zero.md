---
id: "ex-td-forbidden-pair-beta-zero"
kind: "example"
title: "Hard-core exclusion retained at zero inverse temperature"
status: "published"
origin: "pipeline"
domain: "physics"
library: "physics"
physical_scope: "A finite-volume positional hard-core model under the explicitly defined retained-admissibility beta-zero continuation; no universal infinite-temperature claim is made."
deps: [def-td-stable-tempered-continuum-preparation, post-td-classical-indistinguishable-particle-measure, def-td-retained-hard-core-zero-beta-preparation]
dependency_roles:
  def-td-stable-tempered-continuum-preparation: formulation-prerequisite
  post-td-classical-indistinguishable-particle-measure: physical-assumption
  def-td-retained-hard-core-zero-beta-preparation: formulation-prerequisite
aliases: []
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
proof_strategy: direct
dependency_level: 6
verification:
  verified:
    model: "gpt-6-luna, gpt-6.1-sol, and delegated Codex review/repair agents; see completed run evidence"
    verdict: "Owner accepted completed review and adjudication evidence for publication"
    date: "2026-10-15"
    scope: "Owner accepted completed delegated review and resolved adjudication evidence from research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json for publication. No new mathematical audit or source retrieval performed for publication; outside-frontier supplier limitations remain as recorded in the final report."
    evidence: "research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json"
    publication: "research/physics-td-qft-rpm-62-2026-10-14-publication-2026-10-15.json"
    delegated_by: "owner; publication instruction 2026-10-15"
---

## Example

In the dimensionless coordinates of [[def-td-stable-tempered-continuum-preparation]], take $d=1$, an interval $\Lambda=[0,L]$, and a hard-core exclusion distance $a$ with $0<a<L$. Both $L$ and $a$ are dimensionless; the physical interval length and exclusion distance are $\ell_0L$ and $\ell_0a$ in metres. Set $\varphi(r)=+\infty$ for $|r|<a$ and $0$ otherwise. Under the retained-admissibility zero-inverse-temperature preparation at $z>0$, the two-particle weight is zero on $|x_1-x_2|<a$ and equals $z^2$ on $|x_1-x_2|\geq a$. Hence the retained grand law is not the unrestricted Poisson activity law, which assigns positive mass to the forbidden two-particle band. The conclusion concerns the finite positional continuation defined on the A page.

## Facts & Assumptions

[F1] [[def-td-retained-hard-core-zero-beta-preparation]]: at $\beta=0$ the adopted weight is $z^N\mathbf 1_{\{H_N<\infty\}}$.

[F2] [[post-td-classical-indistinguishable-particle-measure]]: the two-particle reference measure is $\frac12dx_1dx_2$.

[A1] The hard-core potential forbids exactly the pairs with $|x_1-x_2|<a$.

## Verification

**Given:** $0<a<L$, the finite interval, and the retained-admissibility convention.

1.1 By [F1] and [A1], every pair in the open band $|x_1-x_2|<a$ has zero retained weight, while every admissible pair has weight $z^2$. [given, F1, A1]

2.1 The band has positive dimensionless Lebesgue area $L^2-(L-a)^2=2aL-a^2>0$; its collision diagonal has area zero. The unrestricted grand normalizer is $\sum_{N\geq0}(zL)^N/N!=e^{zL}$, so its probability of this two-particle band is $e^{-zL}z^2(2aL-a^2)/2>0$. The retained grand normalizer is between $1$ (the vacuum contribution) and $e^{zL}$, so its law is defined and gives that band probability zero. Therefore the two probability laws differ. [given, F1, F2, step 1.1, algebra] ∎
