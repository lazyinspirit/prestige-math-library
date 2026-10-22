---
id: cor-residue-theorem-circle
kind: corollary
title: "A positively oriented circle integral is the sum of the enclosed residues"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-residue-theorem-null-homologous-cycle,
       thm-winding-number-circle-traversed-k-times,
       def-admissible-cycle-for-residue-theorem,
       def-null-homologous-and-homologous-complex-cycles]
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
    - title: "E. Stein and R. Shakarchi, Complex Analysis, Ch. 3, Corollary 2.3"
      url: "https://web.archive.org/web/20260305202510if_/https://studylib.net/doc/27609666/stein-complex-analysis"
pipeline_run: null
---

## Statement

Let $C(a,r)$ be a positively oriented circle, and let $f$ be meromorphic on a
neighbourhood of the closed disc $\overline{D(a,r)}$ with no pole on the circle.
Then

$\int_{C(a,r)}f(z)\,dz=2\pi i\sum_{|b-a|<r}\operatorname{Res}(f,b),$

the sum being over the poles of $f$ inside the circle.

## Facts & Assumptions

**Given:** A positively oriented circle $C(a,r)$ and a meromorphic $f$ on a neighbourhood of $\overline{D(a,r)}$ with no pole on the circle.

[L1] The residue theorem holds for an admissible cycle ([[thm-residue-theorem-null-homologous-cycle]]).

[L2] A positively oriented circle has index $1$ at interior points and $0$ at exterior points ([[thm-winding-number-circle-traversed-k-times]]).

[L3] A cycle is null-homologous in an open set $\Omega$ exactly when its index vanishes at every point of $\mathbb C\setminus\Omega$; it is admissible for the residue theorem when it is null-homologous and its trace lies in $\Omega$ away from the poles. ([[def-null-homologous-and-homologous-complex-cycles]], [[def-admissible-cycle-for-residue-theorem]]).

## Proof

**Proof technique:** direct.

1.1 Let $\Omega$ be the open neighbourhood of $\overline{D(a,r)}$ on which $f$ is meromorphic. The circle is a cycle with trace in $\Omega$, and the hypothesis excludes poles on its trace. If $p\notin\Omega$, then $|p-a|>r$ because the whole closed disc lies in $\Omega$; hence [L2] gives $n(C(a,r),p)=0$. Thus the circle is null-homologous and admissible in $\Omega$ by [L3], so [L1] applies. [given, L1, L2, L3]

2.1 The residue theorem [L1] gives $\int_{C(a,r)}f(z)\,dz=2\pi i\sum_{b\in S}n(C(a,r),b)\operatorname{Res}(f,b)$, where $S$ is the pole set and only finitely many terms are nonzero. There is no pole on the circle. By [L2], each pole with $|b-a|<r$ has index $1$, and each pole with $|b-a|>r$ has index $0$. Substituting these indices gives exactly $\int_{C(a,r)}f(z)\,dz=2\pi i\sum_{|b-a|<r}\operatorname{Res}(f,b)$, including the empty-sum case. [given, L1, L2, step 1.1] ∎
