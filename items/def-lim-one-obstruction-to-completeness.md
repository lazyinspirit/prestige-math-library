---
id: def-lim-one-obstruction-to-completeness
kind: definition
title: Lim one obstruction to completeness
status: draft
origin: pipeline
pipeline_run: phase-2-next-20
deps: ["lem-abelian-group-model-for-spectral-sequence-computations", "def-exhaustive-separated-bounded-and-finite-filtration", "def-limit-and-colimit-of-a-diagram"]
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: "Weibel, An Introduction to Homological Algebra, Chapter 5"
      url: "https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf"
    - title: "The Stacks Project, Homological Algebra"
      url: "https://stacks.math.columbia.edu/download/homology.pdf"
---

## Definition

Let $M_0\xleftarrow{u_0}M_1\xleftarrow{u_1}M_2\leftarrow\cdots$ be a countable tower of abelian groups and homomorphisms. The product $P=\prod_{m\ge0}M_m$ has coordinatewise addition, zero and negatives; these operations satisfy the group laws coordinatewise. It contains the all-zero tuple without any choice assumption. Define
$$\Delta:P\longrightarrow P,\qquad \Delta(x)_m=x_m-u_m(x_{m+1}).$$
Additivity of each $u_m$ gives $\Delta(x+y)_m=\Delta(x)_m+\Delta(y)_m$, so this is a homomorphism. Using the subgroup kernels and coset cokernels of [[lem-abelian-group-model-for-spectral-sequence-computations]], set
$$\varprojlim M_m=\ker\Delta,\qquad \varprojlim{}^{1} M_m=\operatorname{coker}\Delta=P/\Delta(P).$$
The first consists precisely of tuples satisfying $x_m=u_m(x_{m+1})$ for every $m$. A cone of homomorphisms $f_m:T\to M_m$ factors uniquely by $t\mapsto(f_m(t))_m$, which belongs to that subgroup exactly by cone compatibility. Thus it is the categorical limit of [[def-limit-and-colimit-of-a-diagram]]. The notation $\varprojlim{}^1$ here names this particular cokernel; no unproved identification with general derived functors is included.

For an increasing filtration on an abelian group $A$ as in [[def-exhaustive-separated-bounded-and-finite-filtration]], put $G_m=F_{-m}A$ with inclusion transitions. The term $\varprojlim{}^1G_m$ will measure the failure of surjectivity of $A\to\varprojlim_m A/G_m$ through the following completion exact sequence. This is a claim about this subgroup tower, not an assertion that every unrelated tower measures completeness of $A$. The present definitions and coordinate formulas require no AC. They also apply to modules over a fixed ring with coordinate scalar multiplication; $\Delta$ is then linear. Zero groups and zero or identity transitions are allowed.
