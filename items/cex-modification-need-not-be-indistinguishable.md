---
id: cex-modification-need-not-be-indistinguishable
kind: counterexample
title: "A modification need not be indistinguishable"
status: published
origin: pipeline
deps: [def-law-modification-and-indistinguishability-of-processes, thm-lebesgue-measure-of-a-box-of-every-kind]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  audited: 2026-09-06
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Biskup, MATH 275D notes, Section 2.3"
      url: "https://math.ucla.edu/~biskup/275d.1.25f/PDFs/ch2.pdf"
---

## Statement refuted

A modification of a process must be indistinguishable from it.

## Counterexample

Let $U$ be uniform on $[0,1]$, let $X_t\equiv0$, and let $Y_t=\mathbf1_{\{U=t\}}$ for $t\in[0,1]$.

**Given:** Lebesgue probability on $[0,1]$ and its coordinate map $U$.

1.1 For fixed $t$, $\{X_t\ne Y_t\}=\{U=t\}$ is measurable and has Lebesgue probability $0$, so $Y$ is a modification of $X$ under the stated diagonal convention. [given]

2.1 For every outcome $u$, choosing $t=u$ gives $Y_t(u)=1\ne0=X_t(u)$. Thus the equality-for-all-times event is empty, not probability one, and the processes are not indistinguishable. [step 1.1] ∎
