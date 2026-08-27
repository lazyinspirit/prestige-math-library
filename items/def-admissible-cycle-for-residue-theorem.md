---
id: def-admissible-cycle-for-residue-theorem
kind: definition
title: "Admissible cycles for the residue theorem"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-complex-chain-and-cycle,
       def-null-homologous-and-homologous-complex-cycles,
       def-meromorphic-function-complex-domain,
       thm-poles-meromorphic-function-are-discrete-and-countable]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "L. V. Ahlfors, Complex Analysis, 3rd ed., Ch. 4 §5.1"
      url: "https://people.math.gatech.edu/~mccuan/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf"
pipeline_run: null
---

## Definition

Let $\Omega\subseteq\mathbb C$ be open, let $f$ be meromorphic on $\Omega$ in the
sense of [[def-meromorphic-function-complex-domain]], and let $S\subseteq\Omega$
be its pole set. By
[[thm-poles-meromorphic-function-are-discrete-and-countable]], $S$ is closed and
discrete in $\Omega$.

A complex cycle $\Gamma$ is **admissible for the residue theorem in $\Omega$**
when

- $\Gamma^\ast\subseteq\Omega\setminus S$,
- $\Gamma$ is null-homologous in $\Omega$ in the sense of
  [[def-null-homologous-and-homologous-complex-cycles]].

For such a pair $(\Gamma,f)$ the candidate residue sum is

$\sum_{a\in S}n(\Gamma,a)\operatorname{Res}(f,a).$

Only points with nonzero index can contribute, and the next lemma shows that
there are only finitely many of them.
