---
id: rem-hahn-banach-discontinuous-additive-open
kind: remark
title: "Hahn-Banach and discontinuous additive maps: a recorded question"
status: published
origin: session
proved_here: false
deps: []
justified_by: []
forward_refs: [def-axiom-of-choice]
aliases: []
landmark: false
short: "Recorded question about Hahn-Banach and discontinuous additive maps"
sources:
  scraped: []
  references:
    - title: "P. Howard and J. E. Rubin, Consequences of the Axiom of Choice, Mathematical Surveys and Monographs 59, AMS 1998"
      url: "https://www.ams.org/surv/059"
    - title: "P. Larson and S. Shelah, Discontinuous homomorphisms without Hamel bases (arXiv:2606.08384)"
      url: "https://arxiv.org/abs/2606.08384"
    - title: "Cauchy's functional equation (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cauchy%27s_functional_equation"
    - title: "A. Karagila, Zornian Functional Analysis, or How I Learned to Stop Worrying and Love the Axiom of Choice (arXiv:2010.15632); Theorem 23, Theorem 27 and Theorem 38"
      url: "https://arxiv.org/abs/2010.15632"
    - title: "S. Shelah, Can you take Solovay's inaccessible away?, Israel Journal of Mathematics 48 (1984) 1-47"
      url: "https://link.springer.com/article/10.1007/BF02760522"
pipeline_run: null
verification:
  precheck: n/a
  sources_checked:
    date: '2026-09-24'
    scope: Cited statement and missing local prerequisite examined; no proof-completion
      verdict. See /home/lazyinspirit/Projects/prestige-math-library/research/ap-131-sol-repair/agent-08-receipts.jsonl
    by: agent-08 (owner-delegated GPT-6-Sol xhigh)
---

## Statement

Work in ZF. Write **HB** for the Hahn–Banach extension principle and consider
the following implication:

> If HB holds, must there exist a discontinuous additive function
> $f:\mathbb R\to\mathbb R$?

An additive function satisfies $f(x+y)=f(x)+f(y)$ for all real $x,y$; it is
discontinuous exactly when it is not of the form $f(x)=cx$. The historical
Howard–Rubin catalogue (1998) is the cited source for this question. This item
records the question and does not assert its status as of 2026. The exact
catalogue form and current implication status have not been independently
verified here.

## Remarks

This library develops functional analysis, including the HB theorem under the
Axiom of Choice ([[def-axiom-of-choice]]). AC also gives a discontinuous
additive function: a Hamel basis of $\mathbb R$ over $\mathbb Q$ permits a
$\mathbb Q$-linear map that is not scalar multiplication. This establishes the
implication under AC, but does not settle what HB alone entails over ZF.

Larson and Shelah, *Discontinuous homomorphisms without Hamel bases*
(arXiv:2606.08384, 2026), Theorem 3.3, construct a model of ZF + DC with a
discontinuous additive endomorphism of $\mathbb R$ and no Hamel basis for
$\mathbb R$. That separates the two existence principles in that model; it
does not by itself decide the HB implication above.
