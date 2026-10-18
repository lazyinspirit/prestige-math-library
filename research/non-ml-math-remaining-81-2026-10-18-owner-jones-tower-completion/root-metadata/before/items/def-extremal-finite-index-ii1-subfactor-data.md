---
id: def-extremal-finite-index-ii1-subfactor-data
kind: definition
title: Finite-index extremal II1 subfactor data
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 0
deps:
- def-von-neumann-algebra-and-commutant
- def-tracial-state-and-faithful-normal-trace-on-a-von-neumann-algebra
- def-axiom-of-choice
- lem-tracial-standard-form-and-normal-functional-vectors
- lem-tracial-hilbert-module-dimension-and-finite-corners
justified_by: []
aliases: []
axiom_use: AC supplies Hilbert adjoints, maximal orthogonal module decompositions, projection comparison and compactness selections through the declared foundational suppliers. No bounded frame is assumed.
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
  - title: Vaughan F. R. Jones, Planar Algebras, I
    url: https://arxiv.org/pdf/math/9909027
    locator: '§4.1, printed pp. 81–92: finite-index II1 inclusions, basic-construction notation, finite module bases, and the extremality convention.'
  - title: David Penneys, Exercises in Quantum Algebra
    url: https://people.math.osu.edu/penneys.2/archive/QuantumAlgebra.pdf
    locator: '§3.2.1–3.2.2 and §4.2, PDF pp. 20–22 and 31–32: trace-preserving expectations, the orthogonal projection, and the finite-index tower setting.'
verification:
  precheck: n/a
---

## Definition

Assume AC. A **II1 factor** is a von Neumann algebra $A$ with center $\mathbb C1$, no nonzero minimal projections, and a faithful normal normalized trace $\tau_A$, with the operator and trace conventions of [[def-von-neumann-algebra-and-commutant]] and [[def-tracial-state-and-faithful-normal-trace-on-a-von-neumann-algebra]]. A **II1 subfactor inclusion** is a unital inclusion $N\subseteq M$ of II1 factors, with $\tau_N=\tau_M|_N$. Its trace-preserving normal faithful conditional expectation $E_N:M\to N$ is the unique expectation constructed in [[lem-tracial-standard-form-and-normal-functional-vectors]]; it is positive, unital, $N$-bimodular, and the restriction of the orthogonal projection $e_N:L^2(M)\to L^2(N)$.

A **normal right Hilbert-space $N$-module** is a Hilbert space with a unital star representation of $N^{\mathrm{op}}$ that is WOT-continuous on the operator-norm unit ball. This is the topological normality convention of the trace definition above. Right multiplication is $R_a(x)=xa$, so $R_aR_b=R_{ba}$. The amplification theorem [[lem-tracial-hilbert-module-dimension-and-finite-corners]] constructs a right-module unitary $H\cong P(\ell^2(I)\otimes L^2(N))$ and its model-independent canonical semifinite trace on $\operatorname{End}_N(H)$, given in that model by $\operatorname{Tr}_H(T)=\sum_{i\in I}\tau_N(T_{ii})$ for positive $T$. Define $\dim_N H=\operatorname{Tr}_H(1)$; in particular $\dim_N L^2(N)=1$. The **ordinary Jones index** of the inclusion is
$$[M:N]=\dim_N L^2(M,\tau_M)=:\lambda.$$
The inclusion has **finite index** when $\lambda<\infty$. No finite bounded frame or complete $N$-valued module model is part of this hypothesis.

For finite index, put $B=\operatorname{End}_N L^2(M)$ and $\tau_B=\lambda^{-1}\operatorname{Tr}_{L^2(M)}$. Let $J(x)=x^*$ on $L^2(M)$, so $R_a=JL_{a^*}J$. The inclusion is **extremal** when
$$\tau_B(R_a)=\tau_M(a)\qquad(a\in N'\cap M).$$
Here $N'\cap M=\{a\in M:an=na\text{ for every }n\in N\}$, and $R_a$ belongs to $B$ for these $a$. Equivalently, the normalized trace on the commutant of the left $N$ action and $\tau_M$ agree on $N'\cap M$, transported by $J$. This specifies the right-action trace: the normalized trace of $B$ on the left action of $M$ agrees automatically with $\tau_M$ and does not define extremality.

For later calculations write $\mathcal X=M$ with $N$-valued inner product $\langle x,y\rangle_N=E_N(x^*y)$ and norm $\|x\|_{\mathcal X}=\|E_N(x^*x)\|^{1/2}$. Its completeness, finite projection model $\mathcal X\cong pN^k$, and bounded coordinate frame are consequences proved below from ordinary finite index; they are not additional assumptions. No separability or irreducibility hypothesis is imposed.
