---
id: lem-erfcx-continued-fraction-enclosure
kind: lemma
title: Finite continued-fraction enclosure for erfcx
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [lem-erfcx-moment-recurrence]
justified_by: []
forward_refs: []
aliases: []
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: DLMF, §7.9, continued fractions for erfc
      url: https://dlmf.nist.gov/7.9
    - title: N. M. Temme, “Numerical aspects of special functions,” Acta Numerica 17 (2008), §§3 and 5
      url: https://ir.cwi.nl/pub/11612/11612C.pdf
dependency_level: 3
---

## Statement

Fix real $x>0$ and integer $N\ge0$. Set
$I_N=[0,(N+1)/(2x)]$, and for $k=N-1,\ldots,0$ define

$$I_k=\left[\frac{k+1}{2(x+\sup I_{k+1})}, \frac{k+1}{2(x+\inf I_{k+1})}\right].$$

Then $r_k\in I_k$ for every $0\le k\le N$, where $r_k$ is the moment ratio
from [[lem-erfcx-moment-recurrence]]. Therefore

$$\operatorname{erfcx}(x)\in \left[\frac1{\sqrt\pi(x+\sup I_0)}, \frac1{\sqrt\pi(x+\inf I_0)}\right].$$

Each finite depth gives a valid enclosure; no convergence or shrinking-width
claim as $N$ grows is made.

## Facts & Assumptions

**Given:** $x>0$, integer $N\ge0$, and the intervals $I_k$ defined above.

[F1] [[lem-erfcx-moment-recurrence]]:
$r_k=(k+1)/(2(x+r_{k+1}))$ and $0<r_N<(N+1)/(2x)$.

[F2] [[lem-erfcx-moment-recurrence]]:
$\operatorname{erfcx}(x)=1/(\sqrt\pi(x+r_0))$.

## Proof
1.1 The upper bound in [F1] puts $r_N$ in $I_N$. The map $f_k(t)=(k+1)/(2(x+t))$ is positive and decreasing for $t\ge0$. Hence, if $r_{k+1}\in I_{k+1}$, then $f_k(\sup I_{k+1})\le f_k(r_{k+1})\le f_k(\inf I_{k+1})$; by [F1] the middle term is $r_k$. Backward induction gives $r_k\in I_k$ down to $k=0$. [given, F1, algebra, induction]

2.1 The function $t\mapsto1/(\sqrt\pi(x+t))$ is positive and decreasing on $t\ge0$. Applying it to the interval $I_0$ and using [F2] gives the stated erfcx enclosure. Every step used a finite number of inclusions, so the enclosure is valid at this $N$ regardless of whether its width decreases with larger $N$. [step 1.1, F2, algebra] ∎