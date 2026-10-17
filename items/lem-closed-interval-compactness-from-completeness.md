---
id: lem-closed-interval-compactness-from-completeness
kind: lemma
title: Closed real intervals are compact by completeness
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
page: outward-rounded-interval-and-ball-arithmetic
dependency_level: 1
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-complete-ordered-real-field]
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Michael C. Colding, MIT 18.100B Real Analysis, Lecture 16"
      url: "https://ocw.mit.edu/courses/18-100b-real-analysis-spring-2025/mit18_100b_s25_lec16.pdf"
    - title: "Steven G. Krantz, Foundations of Analysis, §1.1"
      url: "https://api.pageplace.de/preview/DT0400.9781482220759_A37871115/preview-9781482220759_A37871115.pdf"
---

## Statement

If $a<b$ in a Dedekind-complete ordered field, every relative open cover of
$[a,b]$ has a finite subcover. Relative openness means openness in the
subspace topology inherited from the real line.

## Facts & Assumptions

**Given:** A complete ordered field and $a<b$.

[A1] [[def-complete-ordered-real-field]]: every nonempty bounded-above subset
has a least upper bound.

## Proof

1.1 Fix a relative open cover $\mathcal U$ of $[a,b]$. Let $S$ be the set of $x\in[a,b]$ for which $[a,x]$ has a finite subcover. A member containing $a$ contains a relative neighborhood $[a,a+\delta)$ for some $\delta>0$; choosing $\eta=\min(\delta/2,(b-a)/2)$ shows $a+\eta\in S$. Thus $S$ is nonempty and bounded above by $b$. By [A1], $c=\sup S$ exists. [given, A1, construct]

2.1 If $c<b$, a cover member containing $c$ contains $(c-\delta,c+\delta)\cap[a,b]$ for some $\delta>0$. Let $\eta=\min(\delta/2,(b-c)/2)>0$. Since $c$ is the supremum, choose $x\in S$ with $x>c-\eta$. A finite cover of $[a,x]$ together with the member covering $c$ covers $[a,c+\eta]$. This places $c+\eta$ in $S$, contradicting that $c$ is an upper bound. Hence $c=b$. [step 1.1, A1, choose, construct]

3.1 If $b\in S$, the required finite subcover already exists. Otherwise a cover member containing $b$ contains $(b-\delta,b]$ for some $\delta>0$. Because $b=\sup S$, choose $x\in S$ with $x>b-\delta$. A finite cover of $[a,x]$ and that member cover all of $[a,b]$. [step 2.1, choose, construct] ∎

