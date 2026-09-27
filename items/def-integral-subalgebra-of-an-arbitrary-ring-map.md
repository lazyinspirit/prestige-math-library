---
id: def-integral-subalgebra-of-an-arbitrary-ring-map
kind: definition
title: Integral elements subalgebra of an arbitrary ring map
status: draft
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-integral-element-and-algebraic-integer, def-integral-ring-extension, cor-integral-elements-form-a-subring, def-subring, def-algebra-over-a-commutative-ring, def-integral-closure-and-integrally-closed-domain, thm-integrality-commutes-with-localisation]
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Commutative Algebra, Section 10.123, Situation 10.123.4 and its uses"
      url: "https://stacks.math.columbia.edu/tag/00PI"
    - title: "J. S. Milne, A Primer of Commutative Algebra, version 4.03, Section 17"
      url: "https://www.jmilne.org/xnotes/CA.pdf"
verification:
  precheck: n/a
---

## Definition

Let $R\to S$ be a unital ring map of commutative rings, with $\varphi$ its
underlying map, and let $\varphi(R)\subseteq S$ be its image. An element
$s\in S$ is **integral over the ring map** $R\to S$ when $s$ is a root of a
monic polynomial with coefficients in the image of $R$
([[def-integral-element-and-algebraic-integer]]): that is, when

$$ s^{d}+\varphi(a_{d-1})s^{d-1}+\cdots+\varphi(a_{1})s+\varphi(a_{0})=0 $$

for some $d\ge 1$ and some $a_{0},\dots,a_{d-1}\in R$. This is integrality of the element $s$ over $\varphi(R)$. The ring map $R\to S$ is integral in the sense of [[def-integral-ring-extension]] precisely when every element $s\in S$ satisfies such an equation.

Write

$$ \operatorname{Int}_{R}(S)=\{s\in S : s \text{ is integral over } R\to S\} $$

for this set. Then $\operatorname{Int}_{R}(S)$ is a **subring** of $S$
([[def-subring]]) containing $\varphi(R)$, hence an $R$-**subalgebra** of $S$
for the restricted structure map ([[def-algebra-over-a-commutative-ring]]); it
is called the **integral closure of the image of $R$ in $S$**, and in this page
the notation $S'\subseteq S$ always denotes this relative integral closure.
The reason is [[cor-integral-elements-form-a-subring]]: if $\varphi(R)\ne0$ the
published statement applies to the inclusion $\varphi(R)\subseteq S$, whose
integral elements over $\varphi(R)$ are exactly the elements listed above; if
$\varphi(R)=0$ then $1_{S}=\varphi(1_{R})=0$, so $S=0$ and
$\operatorname{Int}_{R}(S)=\{0\}=S$ is again a subring.

**Conventions kept here.** (i) No hypothesis of injectivity is imposed: the map
$R\to S$ may have a kernel, and $\operatorname{Int}_{R}(S)$ is a subring of
$S$ containing the image, not of $R$. (ii) No hypothesis excluding zero
divisors or nilpotents is imposed, and all arguments below proceed in $S$
itself; in particular [[thm-integrality-commutes-with-localisation]] may be
applied through the structure map without assuming that $R\to S$ is injective.
(iii) When $R\subseteq S$ are domains in the sense of
[[def-integral-closure-and-integrally-closed-domain]], this set is the integral
closure of $R$ in $S$, so the present definition specialises to the published
one, which is not assumed here.
