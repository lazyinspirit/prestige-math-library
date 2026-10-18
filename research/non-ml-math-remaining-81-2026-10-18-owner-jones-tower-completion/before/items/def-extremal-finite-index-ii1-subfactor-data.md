---
id: def-extremal-finite-index-ii1-subfactor-data
kind: definition
title: "Finite-index extremal II1 subfactor data"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 0
deps:
  - def-von-neumann-algebra-and-commutant
  - def-tracial-state-and-faithful-normal-trace-on-a-von-neumann-algebra
  - def-axiom-of-choice
justified_by: []
aliases: []
axiom_use: "AC is inherited from the concrete von Neumann algebra and faithful normal trace definitions. The finite module data are part of the input; the local frame construction makes no further arbitrary choice."
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Vaughan F. R. Jones, Planar Algebras, I"
      url: "https://arxiv.org/pdf/math/9909027"
      locator: "§4.1, printed pp. 81–92: finite-index II1 inclusions, basic-construction notation, finite module bases, and the extremality convention."
    - title: "David Penneys, Exercises in Quantum Algebra"
      url: "https://people.math.osu.edu/penneys.2/archive/QuantumAlgebra.pdf"
      locator: "§3.2.1–3.2.2 and §4.2, PDF pp. 20–22 and 31–32: trace-preserving expectations, the orthogonal projection, and the finite-index tower setting."
verification:
  precheck: n/a
---

## Definition

Assume the Axiom of Choice, inherited from [[def-von-neumann-algebra-and-commutant]] and [[def-tracial-state-and-faithful-normal-trace-on-a-von-neumann-algebra]]. A **II1 factor** is an infinite-dimensional von Neumann algebra with center $\mathbb C1$, equipped with a faithful normal tracial state $\tau$ and with no nonzero minimal projections. A **II1 subfactor inclusion** is a unital inclusion $N\subseteq M$ of II1 factors; write $\tau_N=\tau|_N$.

For this local construction, a **conditional expectation** $E_N:M\to N$ means a unital positive linear projection that fixes $N$ pointwise and is $N$-bimodular: $E_N(a x b)=aE_N(x)b$ for $a,b\in N$, $x\in M$. The data require it to be normal, faithful, and $\tau$-preserving. Put $H=L^2(M,\tau)$ for the Hilbert-space completion in $\|x\|_2=\tau(x^*x)^{1/2}$. Separately, regard $M$ as a right Hilbert $N$-module $\mathcal X$ with $\langle x,y\rangle_N=E_N(x^*y)$, complete in the module norm $\|x\|_{\mathcal X}=\|E_N(x^*x)\|^{1/2}$. Here a right Hilbert $N$-module means a right $N$-module with this $N$-valued inner product that is complete in its induced norm. The **finite-index** hypothesis is a specified finite module model: for some integer $k\ge1$ there is a projection $p\in M_k(N)$ and a unitary of right Hilbert $N$-modules
$$
\mathcal X\cong pN^k.
$$
In addition, the images of $p\varepsilon_1,\ldots,p\varepsilon_k$ are required to be represented by bounded vectors $u_1,\ldots,u_k\in M$. This bounded-coordinate compatibility is part of the local data package; the projection model alone is not used to infer it. Define
$$
\lambda=[M:N]:=(\operatorname{Tr}_k\otimes\tau_N)(p)<\infty,
$$
where $\operatorname{Tr}_k$ is the unnormalized matrix trace. This fixes the index convention used below and makes the finite module model part of the stated input rather than an unproved basis assertion.

The finite right-module endomorphism algebra $\operatorname{End}_N(\mathcal X)$ is identified through $p$ with $pM_k(N)p$; it has the normalized trace $\lambda^{-1}(\operatorname{Tr}_k\otimes\tau_N)|_{pM_k(N)p}$. The inclusion is **extremal** when the restriction of this trace and the normalized trace $\tau$ agree on the relative commutant $N'\cap M$, where $N'$ is the commutant of the left $N$-action on $H$.

This is the finite-index extremal data package used in the local basic-construction theorem. The theorem constructs $e_N$, the first basic construction, and its trace from these data. Automatic production of the complete module model and bounded-coordinate compatibility, and their preservation under iteration for every finite-index extremal inclusion, are owner-level prerequisites recorded in the batch handoff.
