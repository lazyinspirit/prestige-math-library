---
id: lem-finite-right-n-module-frame-from-projection-model
kind: lemma
title: "A finite projection model supplies a finite right-N Parseval frame"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 1
deps:
  - def-extremal-finite-index-ii1-subfactor-data
justified_by: []
aliases: []
verification:
  precheck: pass
proof_strategy: direct
axiom_use: "AC is inherited from the concrete von Neumann algebra setup. The construction below uses only the finite coordinate list of the specified projection model."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Vaughan F. R. Jones, Planar Algebras, I"
      url: "https://arxiv.org/pdf/math/9909027"
      locator: "§4.1, printed pp. 81–82: finite right-module bases and their frame identities. This item proves the coordinate-frame construction directly from the stated projection model."
    - title: "David Penneys, Exercises in Quantum Algebra"
      url: "https://people.math.osu.edu/penneys.2/archive/QuantumAlgebra.pdf"
      locator: "§3.2.1, PDF pp. 20–21: the right-N Hilbert-space inner product and the trace-preserving projection convention."
---

## Statement

Let $(N\subseteq M,\tau,E_N,\mathcal X,p,k,\lambda)$ be finite-index II1 subfactor data as in [[def-extremal-finite-index-ii1-subfactor-data]], with $\mathcal X\cong pN^k$ and bounded coordinate representatives $u_j\in M$. Then $(u_1,\ldots,u_k)$ is a finite right-$N$ Parseval frame and satisfies
$$\xi=\sum_{j=1}^k u_j\langle u_j,\xi\rangle_N\quad(\xi\in\mathcal X),\qquad \sum_{j=1}^k\tau_N(\langle u_j,u_j\rangle_N)=\lambda.$$
Here $\langle x,y\rangle_N=E_N(x^*y)$ on $M$ and the coordinate model uses $\langle x,y\rangle_N=\sum_{r=1}^k x_r^*y_r$ on $pN^k$.

## Facts & Assumptions

**Given:** The finite projection model $\mathcal X\cong pN^k$, the bounded coordinate representatives, and index $\lambda=(\operatorname{Tr}_k\otimes\tau_N)(p)$.

[F1] The data definition identifies $\mathcal X$ with the range of the self-adjoint projection $p\in M_k(N)$ on $N^k$, identifies each coordinate vector $p\varepsilon_j$ with a bounded vector $u_j\in M$, and defines $\lambda$ by the unnormalized matrix trace. ([[def-extremal-finite-index-ii1-subfactor-data]])

## Proof

**Given:** The projection $p=p^*=p^2$ of [F1] and its specified module identification.

1.1 Let $\varepsilon_1,\ldots,\varepsilon_k$ be the standard coordinate vectors in $N^k$. For $\xi\in pN^k$, $p\xi=\xi$ and the $j$th coordinate is $\langle p\varepsilon_j,\xi\rangle_N$: indeed $\langle p\varepsilon_j,\xi\rangle_N=\varepsilon_j^*p\xi=\varepsilon_j^*\xi=\xi_j$. Therefore $\sum_j(p\varepsilon_j)\langle p\varepsilon_j,\xi\rangle_N=p(\xi_1,\ldots,\xi_k)=p\xi=\xi$. Transporting this identity to $\mathcal X$ gives $x=\sum_j u_jE_N(u_j^*x)$ for every $x\in M$. [F1, given, construct]

2.1 For each coordinate vector, $\langle p\varepsilon_j,p\varepsilon_j\rangle_N=\varepsilon_j^*p^*p\varepsilon_j=\varepsilon_j^*p\varepsilon_j=p_{jj}$. Summing the normalized traces of these diagonal entries gives $\sum_j\tau_N(p_{jj})=(\operatorname{Tr}_k\otimes\tau_N)(p)=\lambda$ by [F1]. Thus the displayed finite family is a Parseval frame with the required module dimension, and the construction uses only the specified finite coordinate basis. [F1, step 1.1, algebra] ∎
