---
id: lem-cft-local-mode-algebra-representation-on-module
kind: lemma
title: The completed local mode algebra acts on conformal modules
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 4
domain: mathematics
library: mathematics
deps:
  - def-cft-local-mode-algebra
  - def-conformal-vertex-algebra
  - def-vertex-algebra-module
  - def-vertex-algebra-state-field
  - def-formal-distribution-on-a-vector-space
  - lem-state-field-reconstruction-from-local-generators
  - lem-cft-chiral-operation-well-defined
dependency_roles:
  def-cft-local-mode-algebra: mathematical-premise
  def-conformal-vertex-algebra: mathematical-premise
  def-vertex-algebra-module: mathematical-premise
  def-vertex-algebra-state-field: mathematical-premise
  def-formal-distribution-on-a-vector-space: mathematical-premise
  lem-state-field-reconstruction-from-local-generators: mathematical-premise
  lem-cft-chiral-operation-well-defined: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pending
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
sources:
  references:
    - title: Beilinson and Drinfeld, Chiral Algebras, preliminary Chapter 4, §§4.4.4–4.4.5
      url: https://math.uchicago.edu/~drinfeld/langlands/chiral/cha_ch4.pdf
      locator: Residue action of the global Lie algebra on tensor products of modules.
    - title: Bin Gui, Lectures on Vertex Operator Algebras and Conformal Blocks, arXiv:2305.03822v1, §§11.10–11.18
      url: https://arxiv.org/pdf/2305.03822v1
      locator: Local mode residues and algebraic coinvariants.
---

## Statement

Let $V$ be a conformal vertex algebra of CFT type and $M$ a lower-truncated $V$-module. The bracket $[a\otimes fdt,b\otimes gdt]=\sum_{j\ge0}(a_{(j)}b)\otimes f^{(j)}g\,dt/j!$ on the quotient $\widehat{\mathfrak L}_t(V)=\mathscr L_t(V)dt/D_t(\mathscr L_t(V)dt)$ makes it a Lie algebra, and the residue formula defines a representation on $M$. For each completed element and $m\in M$, its action is a finite sum; no topology on $M$ or completion of $M$ is used.

## Statement references

[[def-cft-local-mode-algebra]]

## Facts & Assumptions

**Given:** The local mode algebra and residue action in [[def-cft-local-mode-algebra]], the module Jacobi identity in [[def-vertex-algebra-module]], and formal residues in [[def-formal-distribution-on-a-vector-space]].

[F1] [[def-cft-local-mode-algebra]]: the bracket of $a\otimes fdt$ and $b\otimes gdt$ is $\sum_{j\ge0}(a_{(j)}b)\otimes f^{(j)}g\,dt/j!$, and exact representatives are $Ta\otimes fdt+a\otimes f'dt$.

[F2] [[def-vertex-algebra-module]]: the module Jacobi identity implies the mode commutator identity, with $Y_M(a,z)=\sum_{m\in\mathbb Z}a_{(m)}^Mz^{-m-1}$ and lower truncation on each fixed module vector.

[F3] [[def-formal-distribution-on-a-vector-space]]: $\operatorname{Res}_z z^mY_M(a,z)=a_{(m)}^M$ and formal residue is coefficient extraction.

[F4] [[def-conformal-vertex-algebra]]: every conformal-weight space $V_d$ is finite dimensional, so $V_{\le N}$ is finite dimensional for each $N$.

[F5] [[lem-cft-chiral-operation-well-defined]]: the local residue bracket is skew-symmetric and satisfies the chiral Jacobi identity.

[F6] [[lem-state-field-reconstruction-from-local-generators]]: the creative state determines a translation-covariant local field uniquely; the $n$th-product field has creative state $A_{(n)}b$.

## Proof

1.1 For monomials $f=t^m$ and $g=t^n$, the bracket in [F1] is $\sum_{j\ge0}\binom mj(a_{(j)}b)\otimes t^{m+n-j}dt$. Applying the module Jacobi identity and taking the two mode residues gives $[a_{(m)}^M,b_{(n)}^M]=\sum_{j\ge0}\binom mj(a_{(j)}b)_{(m+n-j)}^M$, exactly the image of this bracket under the residue action. The sum is finite because $a_{(j)}b=0$ for all sufficiently large $j$. [F1, F2, F3, algebra]

1.2 The exact representative in [F1] acts by $\operatorname{Res}_t(fY_M(Ta,t)+f'Y_M(a,t))dt=\operatorname{Res}_t\partial_t(fY_M(a,t))dt=0$, since a formal derivative has zero residue; the module derivative identity follows by taking the $L_M(-1)$ residue in its Jacobi axiom. For the bracket, translation covariance and the uniqueness of creative state in [F6] give $(Ta)_{(0)}b=0$ and $(Ta)_{(j)}b=-j a_{(j-1)}b$ for $j\ge1$. Hence $[D_t(a\otimes fdt),b\otimes gdt]$ is the sum $-\sum_{j\ge1}(a_{(j-1)}b)\otimes f^{(j)}g\,dt/(j-1)!+\sum_{j\ge0}(a_{(j)}b)\otimes f^{(j+1)}g\,dt/j!=0$, by reindexing. Thus exact representatives form a left bracket ideal; skew-symmetry in [F5] gives the right ideal property. For a completed element, its coefficient states lie in one finite-dimensional $V_{\le N}$; choose a basis of that space. Lower truncation kills all sufficiently high modes of each basis vector on the fixed input $m$, and the maximum of the finitely many bounds shows the completed action is finite. [F1, F2, F3, F4, F5, F6, algebra]

2.1 The chiral Jacobi identity in [F5], after taking residues in the three formal variables, gives $[x,[y,z]]+[y,[z,x]]+[z,[x,y]]=0$ for monomial representatives. Every nested bracket is finite because each pair of states has finite truncation order. For Laurent-series representatives each fixed coefficient is a finite sum, since their exponents are bounded below and their state coefficients lie in finite-dimensional weight truncations. Thus the bracket is a Lie bracket on the completed derivative quotient. [F1, F3, F5, step 1.2, algebra]

3.1 The representation identity on monomials from step 1.1 is exactly the Lie bracket relation. The pointwise finiteness in step 1.2 extends both sides to completed elements; equality of their finite coefficient sums proves that the completed action is a representation. [F1, F2, F3, F4, step 1.1, step 1.2] ∎
