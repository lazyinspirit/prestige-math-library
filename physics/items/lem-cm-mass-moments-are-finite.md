---
id: lem-cm-mass-moments-are-finite
kind: lemma
title: "Finiteness of the moments of a bounded finite Borel measure on $\\mathbb R^3$"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 1
deps: [def-cm-mass-distribution-and-inertia-matrix, def-countable-choice, cor-continuous-functions-are-borel-measurable, def-borel-and-lebesgue-measurable-function-on-rn, thm-arithmetic-and-lattice-operations-preserve-measurability, def-integral-over-a-measurable-set, def-nonnegative-lebesgue-integral, def-integral-of-a-nonnegative-simple-function, def-integrable-real-and-complex-functions-and-their-integrals, prop-order-and-scalar-rules-for-the-nonnegative-integral, thm-integral-triangle-inequality, def-metric-ball, def-euclidean-inner-product]
dependency_roles:
  def-cm-mass-distribution-and-inertia-matrix: mathematical-premise
  def-countable-choice: mathematical-premise
  cor-continuous-functions-are-borel-measurable: mathematical-premise
  def-borel-and-lebesgue-measurable-function-on-rn: mathematical-premise
  thm-arithmetic-and-lattice-operations-preserve-measurability: mathematical-premise
  def-integral-over-a-measurable-set: mathematical-premise
  def-nonnegative-lebesgue-integral: mathematical-premise
  def-integral-of-a-nonnegative-simple-function: mathematical-premise
  def-integrable-real-and-complex-functions-and-their-integrals: mathematical-premise
  prop-order-and-scalar-rules-for-the-nonnegative-integral: mathematical-premise
  thm-integral-triangle-inequality: mathematical-premise
  def-metric-ball: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, 2015), §3.2, Eq. (3.19) and the parallel-axis discussion of §3.2.1, printed pp. 50-53: second moments of a bounded mass distribution are finite"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
    - title: "K. Likharev, Essential Graduate Physics: Classical Mechanics, Ch. 4 §4.2, Eq. (4.16): the inertia-tensor integral of a bounded density"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
---

## Statement

Assume the Axiom of Countable Choice $\mathrm{AC}_\omega$ ([[def-countable-choice]]). Let $\nu$ be a measure on $(\mathbb R^3,\mathcal B(\mathbb R^3))$ ([[def-cm-mass-distribution-and-inertia-matrix]]) that is finite and bounded: $\nu(\mathbb R^3)<+\infty$ and $\nu(\mathbb R^3\setminus\overline B_R(0))=0$ for some $R>0$ ([[def-metric-ball]]). Then:

1. for all $j,k\in\{1,2,3\}$ the functions $\rho\mapsto\rho_j$ and $\rho\mapsto\rho_j\rho_k$ are Borel measurable and $\nu$-integrable, with $\int\lvert\rho_j\rvert\,d\nu\le R\,\nu(\mathbb R^3)$ and $\int\lvert\rho_j\rho_k\rvert\,d\nu\le R^2\,\nu(\mathbb R^3)$;
2. consequently the total mass $m=\nu(\mathbb R^3)$, the first moment $\mu(\nu)$ and every entry of the inertia matrix $I(\nu)$ of the definition are well-defined finite real numbers, and $\lvert\mu(\nu)_j\rvert\le R\,\nu(\mathbb R^3)$ while $\lvert I(\nu)_{jk}\rvert\le 2R^2\,\nu(\mathbb R^3)$.

## Facts & Assumptions

**Given:** A finite Borel measure $\nu$ on $\mathbb R^3$ and a real $R>0$ with $\nu(\mathbb R^3\setminus\overline B_R(0))=0$.

[L1] Every continuous map $\mathbb R^3\to\mathbb R$ is Borel measurable, under $\mathrm{AC}_\omega$ [[cor-continuous-functions-are-borel-measurable]], [[def-borel-and-lebesgue-measurable-function-on-rn]]; and sums, scalar multiples and pointwise products of measurable real-valued functions are measurable [[thm-arithmetic-and-lattice-operations-preserve-measurability]].

[L2] For a nonnegative simple function the nonnegative Lebesgue integral equals the simple integral; in particular the constant function $R$ on $\mathbb R^3$ has $\int R\,d\nu=R\,\nu(\mathbb R^3)$ [[def-nonnegative-lebesgue-integral]], [[def-integral-of-a-nonnegative-simple-function]].

[L3] The nonnegative integral is monotone and homogeneous for nonnegative scalars: if $0\le f\le g$ then $\int f\,d\nu\le\int g\,d\nu$, and $\int cf\,d\nu=c\int f\,d\nu$ for $c\ge0$ [[prop-order-and-scalar-rules-for-the-nonnegative-integral]].

[L4] A real measurable function $f$ with $\int\lvert f\rvert\,d\nu<+\infty$ is integrable, and then $\lvert\int f\,d\nu\rvert\le\int\lvert f\rvert\,d\nu$ [[def-integrable-real-and-complex-functions-and-their-integrals]], [[thm-integral-triangle-inequality]].

[L5] $\rho=\rho_1e_1+\rho_2e_2+\rho_3e_3$ satisfies $\lvert\rho_j\rvert\le\lVert\rho\rVert_2$ for each $j$ and $\lVert\rho\rVert_2\le R$ exactly on $\overline B_R(0)$ ([[def-euclidean-inner-product]], [[def-metric-ball]]).

## Proof

**Proof technique:** direct.

1.1 Each coordinate function $\rho\mapsto\rho_j$ is continuous, hence Borel measurable by [L1]; the products $\rho\mapsto\rho_j\rho_k$ are then measurable by the product clause of [L1]. [given, L1]

2.1 Let $N:=\mathbb R^3\setminus\overline B_R(0)$, with $\nu(N)=0$. We justify the almost-everywhere comparison from the definition of the nonnegative integral: if a nonnegative measurable $f$ satisfies $f\le B$ on $N^c$ for a finite constant $B\ge0$, every nonnegative simple minorant $s\le f$ has the same simple integral as $s\mathbf1_{N^c}$. Indeed, in a finite disjoint level-set representation of $s$, the contribution of each intersection with $N$ is zero, while $\nu(A)=\nu(A\setminus N)$ for every measurable level set $A$. Pointwise $s\mathbf1_{N^c}\le B$, so [L2] and [L3] give $\int s\,d\nu\le B\nu(\mathbb R^3)$; taking the supremum over simple minorants gives $\int f\,d\nu\le B\nu(\mathbb R^3)$ by [[def-nonnegative-lebesgue-integral]]. Apply this with $f=|\rho_j|$, $B=R$, and with $f=|\rho_j\rho_k|$, $B=R^2$: measurability follows from step 1.1 and [L1], and [L5] gives the bounds on $N^c$. Thus $\int|\rho_j|\,d\nu\le R\nu(\mathbb R^3)$ and $\int|\rho_j\rho_k|\,d\nu\le R^2\nu(\mathbb R^3)$. [step 1.1, given, L1, L2, L3, L5, algebra]

3.1 The bounds of step 2.1 are finite because $\nu$ is finite, so each of the functions $\rho_j$ and $\rho_j\rho_k$ has finite integral of its modulus, hence is $\nu$-integrable by [L4]. [step 2.1, given, L4]

4.1 Each first-moment integrand is integrable by step 3.1. Each inertia integrand $g_{jk}(\rho):=\|\rho\|_2^2\delta_{jk}-\rho_j\rho_k$ is measurable by [L1], and on $N^c$ its modulus is at most $2R^2$ by [L5]. The simple-minorant comparison proved in step 2.1 therefore gives $\int|g_{jk}|\,d\nu\le2R^2\nu(\mathbb R^3)<\infty$, so [L4] makes $g_{jk}$ integrable and gives $|I(\nu)_{jk}|\le2R^2\nu(\mathbb R^3)$. Likewise [L4] and step 2.1 give $|\mu(\nu)_j|\le R\nu(\mathbb R^3)$. The finite mass and these finite integrals are precisely the objects in the definition, establishing clause 2. [step 2.1, 3.1, given, L1, L4, L5, algebra] ∎
