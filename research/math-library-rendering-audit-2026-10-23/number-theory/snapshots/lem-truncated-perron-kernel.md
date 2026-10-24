---
id: lem-truncated-perron-kernel
kind: lemma
title: "The truncated Perron kernel"
status: published
origin: pipeline
deps: [lem-perron-kernel]
proof_strategy: contour
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Kiran S. Kedlaya, Analytic Number Theory, Lemma 10.2"
      url: "https://kskedlaya.org/ant/chapter-10.html"
---

## Statement

Let $I(y,T)=(2\pi i)^{-1}\int_{c-iT}^{c+iT}y^sds/s$ and let $\delta(y)$ be
the three-valued kernel of [[lem-perron-kernel]].  For $c,y,T>0$,
$$ |I(y,T)-\delta(y)|<\begin{cases}y^c\min\{1,(T|\log y|)^{-1}\},&y\ne1,\\c/T,&y=1.\end{cases} $$

## Proof

**Given:** $c,y,T>0$ and the symmetric kernel value $\delta(y)$.

1.1 For $0<y<1$, move the finite segment rightward and then let the new real part tend to infinity; its two horizontal tails have modulus at most $y^c/(T|\log y|)$.  A circular arc gives the independent bound $y^c$.  The leftward contours give the same two bounds for $y>1$, after subtracting the residue $1$. [given, cases]

2.1 For $y=1$, integration of $ds/s$ on the two omitted tails gives $|I(1,T)-1/2|<c/T$.  Taking the smaller of the two preceding bounds proves the stated estimate. [step 1.1, algebra] ∎
