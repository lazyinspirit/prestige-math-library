---
id: def-null-homologous-and-homologous-complex-cycles
kind: definition
title: "Null-homologous cycles and homologous cycles in an open set"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-complex-chain-and-cycle, def-integration-and-index-of-complex-chain, thm-winding-number-chain-laws, thm-winding-number-of-a-cycle-is-integer, def-complex-domain]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "L. V. Ahlfors, Complex Analysis, 3rd ed., Ch. 4 §4.4"
      url: "https://people.math.gatech.edu/~mccuan/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf"
    - title: "J. Lebl, Complex Analysis, Ch. 4 §4.3"
      url: "https://www.jirka.org/ca/ca.pdf"
    - title: "M. Weber, Complex Analysis (Indiana University), Ch. 4 §4.1"
      url: "https://scholarworks.iu.edu/dspace/bitstreams/0a384151-7cd5-460f-a06a-b6be76707024/download"
pipeline_run: null
---

## Definition

Let $\Omega\subseteq\mathbb C$ be open and let $\Gamma$ be a complex chain which
is a cycle and whose trace lies in $\Omega$
([[def-complex-chain-and-cycle]]).

$\Gamma$ is **null-homologous in $\Omega$** when

$$n(\Gamma,p)=0\qquad\text{for every }p\in\mathbb C\setminus\Omega,$$

the index being that of [[def-integration-and-index-of-complex-chain]]; the
values are defined because $\Gamma^\ast\subseteq\Omega$, so every
$p\notin\Omega$ lies off the trace, and they are integers by
[[thm-winding-number-of-a-cycle-is-integer]].

Two cycles $\Gamma_1,\Gamma_2$ with traces in $\Omega$ are **homologous in
$\Omega$** when $\Gamma_1-\Gamma_2$ is null-homologous in $\Omega$. By
[[thm-winding-number-chain-laws]] the chain $\Gamma_1-\Gamma_2$ is again a cycle
with trace inside $\Gamma_1^\ast\cup\Gamma_2^\ast\subseteq\Omega$, and its index
at a point $p$ off that union is $n(\Gamma_1,p)-n(\Gamma_2,p)$; so the condition
says exactly that

$$n(\Gamma_1,p)=n(\Gamma_2,p)\qquad\text{for every }p\in\mathbb C\setminus\Omega.$$

## Remarks

**Both notions depend on $\Omega$, not on the cycle alone.** The same cycle can
be null-homologous in one open set and not in another: enlarging $\Omega$ removes
points from $\mathbb C\setminus\Omega$ and so weakens the requirement. Every
statement below that uses these words names the open set it uses them in, and
$\Omega$ is not omitted anywhere.

**Null-homologous does not mean equal to the empty chain.** It is a condition on
the numbers $n(\Gamma,p)$ for $p$ outside $\Omega$, and a cycle with a large
trace can satisfy it. In particular, being homologous is a relation between two
cycles and never an assertion that the two lists coincide; chains here are lists
and equality of chains is equality of lists.

**Taking $\Omega=\mathbb C$ makes the condition vacuous**, since
$\mathbb C\setminus\mathbb C$ is empty, so every cycle is null-homologous in the
plane. The content of the notion appears when $\Omega$ omits points, and it is
those omitted points that the index has to ignore. When a nonempty connected
$\Omega$ is wanted it is called a complex domain
([[def-complex-domain]]).
