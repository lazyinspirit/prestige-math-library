---
id: lem-multiplicative-type-groups-are-linearly-reductive
kind: lemma
title: Groups of multiplicative type are linearly reductive
dependency_level: 5
deps:
  - def-axiom-of-choice
  - def-group-of-multiplicative-type-and-torus
  - def-linear-subspace
  - def-rational-representation-and-comodule-of-an-affine-group-scheme
  - def-semilinear-galois-action-on-a-scalar-extended-algebra
  - lem-galois-fixed-points-recover-a-finite-dimensional-scalar-extension
  - lem-multiplicative-type-groups-split-separably
  - lem-representations-of-diagonalizable-groups-are-sums-of-eigenspaces
  - thm-multiplicative-type-groups-and-galois-character-modules
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
status: published
origin: pipeline
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: J. S. Milne, Algebraic Groups (corrected 2022 printing, Cambridge University Press)
      url: https://www.jmilne.org/math/Books/iAG2022.pdf
      locator: Theorem 12.30 and its proof, printed pp. 241-242
    - title: Florian Herzig, Linear Algebraic Groups (University of Toronto lecture notes, 2013)
      url: https://www.math.toronto.edu/~herzig/lin-alg-groups13.pdf
      locator: Section 2.2, Proposition 45, pp. 20-21
---
## Statement

Assume the Axiom of Choice. Let $k$ be a field and let $G$ be a finite-type group scheme of multiplicative type over $k$ ([[def-group-of-multiplicative-type-and-torus]]). Then every rational representation of $G$ ([[def-rational-representation-and-comodule-of-an-affine-group-scheme]]) is a direct sum of simple representations, and the simple representations are classified by the $\Gamma_k$-orbits of the character group $X^*(G)$: $G$ is linearly reductive.

## Facts & Assumptions
**Given:** The Axiom of Choice, a field $k$, and a finite-type group $G$ of multiplicative type over $k$.

[F1] Assume AC. Every finite-type group of multiplicative type splits over a finite Galois extension $K/k$: there is a finite Galois $K/k$ with $G_K$ diagonalizable, $O(G_K)=K[M]$, where $M=X^*(G_K)$ is a finitely generated abelian group with continuous $\Gamma_k$-action, and $G\mapsto X^*(G)$ is a contravariant equivalence between finite-type groups of multiplicative type over $k$ and finitely generated abelian groups with continuous $\Gamma_k$-action. ([[lem-multiplicative-type-groups-split-separably]], [[thm-multiplicative-type-groups-and-galois-character-modules]])

[F2] Assume AC. For a finite Galois extension $E/F$ with group $\Gamma$, the functor $V\mapsto E\otimes_FV$ is an equivalence between finite-dimensional $F$-vector spaces and finite-dimensional semilinear $\Gamma$-spaces, with inverse $W\mapsto W^\Gamma$. ([[lem-galois-fixed-points-recover-a-finite-dimensional-scalar-extension]], [[def-semilinear-galois-action-on-a-scalar-extended-algebra]])

[F3] Over a field $K$ in which $G_K$ is diagonalizable with character group $M$, every rational representation $W$ of $G_K$ decomposes as $W=\bigoplus_{\chi\in M}W_\chi$ into eigenspaces for the distinct characters. ([[lem-representations-of-diagonalizable-groups-are-sums-of-eigenspaces]], [[def-rational-representation-and-comodule-of-an-affine-group-scheme]])

## Proof

**Given:** The Axiom of Choice, a field $k$, a finite-type group $G$ of multiplicative type over $k$, and a rational representation $V$ of $G$ that is finite-dimensional over $k$.

1.1 By [F1] choose a finite Galois extension $K/k$ with group $\Gamma=\operatorname{Gal}(K/k)$ such that $G_K$ is diagonalizable with $O(G_K)=K[M]$, $M=X^*(G_K)$ finitely generated, and the $\Gamma$-action permutes the characters with $\sigma(e_\chi)=e_{\sigma\chi}$. The base change $V_K=V\otimes_kK$ is a representation of $G_K$ equipped with a semilinear $\Gamma$-action compatible with the comodule structure, and by [F2] the passage $V\mapsto V_K$ is an equivalence with the corresponding category of finite-dimensional semilinear $\Gamma$-equivariant $G_K$-representations, with inverse $W\mapsto W^\Gamma$. [F1, F2]

2.1 By [F3] the representation $V_K$ decomposes as a direct sum $V_K=\bigoplus_{\chi\in M}(V_K)_\chi$ of eigenspaces for the distinct characters, and the $\Gamma$-equivariance of the comodule structure gives $\sigma((V_K)_\chi)=(V_K)_{\sigma\chi}$ for $\sigma\in\Gamma$, so the decomposition is permuted by $\Gamma$. For each $\Gamma$-orbit $O\subseteq M$ put $W_O=\bigoplus_{\chi\in O}(V_K)_\chi$; then $W_O$ is a $\Gamma$-stable $G_K$-subrepresentation and $V_K=\bigoplus_OW_O$ is a sum over the finitely many orbits. [F3, step 1.1]

3.1 Fix an orbit $O$, choose $\chi\in O$, and put $\Gamma_\chi=\{\sigma:\sigma\chi=\chi\}$ and $K_\chi=K^{\Gamma_\chi}$. The weight space $(V_K)_\chi$ has a semilinear $\Gamma_\chi$-action. Galois descent [F2] identifies it with $K\otimes_{K_\chi}E$ for the $K_\chi$-space $E=((V_K)_\chi)^{\Gamma_\chi}$. Choose a basis of $E$. Each basis vector defines a $\Gamma_\chi$-stable $K$-line in $(V_K)_\chi$. Translate that line by representatives of $\Gamma/\Gamma_\chi$ and take their direct sum across the weights in $O$; the result is a $\Gamma$-stable $G_K$-subrepresentation with one-dimensional weight spaces, and it is independent of the choice of representatives because the initial line is $\Gamma_\chi$-stable. These orbit subrepresentations, one for each basis vector, decompose $W_O$. Each descends by [F2] to a simple $G$-module: a submodule after scalar extension is a sum of some of its distinct one-dimensional weight spaces, and $\Gamma$-stability and transitivity on $O$ force either none or all. Thus the whole isotypic block need not be simple, but is a direct sum of copies of one simple module indexed by $O$. [F2, F3, step 1.1, step 2.1]

4.1 Every finite-dimensional representation is therefore a direct sum of simple modules. For each orbit $O$ the construction with a one-dimensional $K_\chi$-space gives a simple module, and any simple module must have a single orbit and multiplicity one by step 3.1; different orbits have different scalar-extended weights. This gives the asserted classification. For an arbitrary rational $V$, project its coaction onto the direct sum of weight-coalgebra blocks for each Galois orbit; these finite-dimensional blocks descend from the spans of $e_\chi$, $\chi\in O$, and counit and coassociativity give a direct decomposition $V=\bigoplus_OV_O$. Finite Galois descent also holds for arbitrary semilinear spaces: for each vector, its finite orbit under the Galois group spans a finite-dimensional stable subspace, to which [F2] applies. This proves surjectivity of the canonical map from the scalar extension of invariants; a finite relation among invariant vectors lies in such a finite stable subspace, and finite-dimensional descent proves injectivity. Apply this argument to each weight space and its stabilizer subgroup. In each block choose a basis of the descended possibly infinite-dimensional space $E$ under AC; the construction of step3.1 then decomposes $V_O$ into copies of its orbit simple. Hence every rational representation is a direct sum of simples and $G$ is linearly reductive. [F1, F2, F3, step 3.1] ∎