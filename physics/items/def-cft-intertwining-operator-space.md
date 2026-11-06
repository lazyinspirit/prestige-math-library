---
id: def-cft-intertwining-operator-space
kind: definition
title: "Intertwining-operator space and fusion multiplicity"
status: published
origin: pipeline
domain: mathematics
library: mathematics
proof_strategy: direct
deps:
  - def-vertex-algebra-module
  - def-ordinary-vertex-module
  - def-grading-restricted-generalized-vertex-module
  - def-cft-logarithmic-intertwining-operator
dependency_roles:
  "def-vertex-algebra-module": mathematical-premise
  "def-ordinary-vertex-module": mathematical-premise
  "def-grading-restricted-generalized-vertex-module": mathematical-premise
  "def-cft-logarithmic-intertwining-operator": mathematical-premise
sources:
  references:
    - title: "Huang, Lepowsky, and Zhang, Logarithmic tensor category theory, Part II"
      url: "https://arxiv.org/pdf/1012.4196v2"
    - title: "Christophe Nozaradan, Introduction to Vertex Algebras"
      url: "https://arxiv.org/pdf/0809.1380v3"
    - title: "Tomoyuki Arakawa and Anne Moreau, Arc spaces and vertex algebras"
      url: "https://www.imo.universite-paris-saclay.fr/~anne.moreau/Arc_space-vertex_algebras-BOOK_version.pdf"
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pending
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
dependency_level: 2
---

## Definition

For ordinary modules W1,W2,W3 of a conformal vertex algebra V, let I( W3 ; W1 W2 ) be the vector space of logarithm-free formal intertwining operators of that type, with the Jacobi, lower-truncation, and L(-1)-derivative conditions of [[def-cft-logarithmic-intertwining-operator]] and the ordinary grading convention. In a specified finite semisimple category its fusion multiplicity is dim I( Wk ; Wi Wj ) when that dimension is finite. Finite-dimensionality is a separate theorem, not part of this definition.

## Facts & Assumptions

**Given:** Work over C with the formal-variable, grading, and branch conventions in the linked definitions.

[F1] [[def-vertex-algebra-module]]: Let $V$ be a vertex algebra over $\mathbb C$ in the ordinary, non-super convention of def-vertex-algebra-state-field. A **left $V$-module** is a complex vector space $M$ and a linear map $$ Y_M(-,z):V\longrightarrow \{\text{formal fields on }M\},\qquad a\longmapsto Y_M(a,z)=\sum_{n\in\mathbb Z}a^M_{(n)}z^{-n-1}, $$ with the following properties: 1. **Lower truncation.** For every $a\in V$ and $m\in M$, $a^M_{(n)}m=0$ for all sufficiently large integers $n$, so $Y_M(a,z)m\in M((z))$ in the support convention of def-formal-distribution-on-a-vector-space. 2. **Vacuum.** $Y_M(\mathbf1,z)=\operatorname{id}_M$. 3. **Module Jacobi identity.** For every $a,b\in V$, $$ z_0^{-1}\delta\!\left(\frac{z_1-z_2}{z_0}\right)Y_M(a,z_1)Y_M(b,z_2)-z_0^{-1}\delta\!\left(\frac{z_2-z_1}{-z_0}\right)Y_M(b,z_2)Y_M(a,z_1)=z_2^{-1}\delta\!\left(\frac{z_1-z_0}{z_2}\right)Y_M(Y(a,z_0)b,z_2). $$ Here $\delta(x)=\sum_{r\in\mathbb Z}x^r$; the first expansion is in nonnegative powers of $z_2$, the second in nonnegative powers of $z_1$, and the right-hand expansion is in nonnegative powers of $z_0$. They use the formal binomial conventions of def-formal-distribution-on-a-vector-space. The $Y$ inside the right-hand side is the state-field map of $V$; it is not the action map $Y_M$. A **$V$-module homomorphism** $f:M\to N$ is a linear map such that $fY_M(a,z)=Y_N(a,z)f$ for every $a\in V$. This definition does not impose a conformal grading, finite-dimensional weight spaces, semisimplicity of $L_0$, a right-module convention, or a twist by an automorphism. For a conformal vertex algebra, write $Y_M(\omega,z)=\sum_{n\in\mathbb Z}L_M(n)z^{-n-2}$ when a conformal vector $\omega$ is specified. A **$V$-submodule** of $M$ is a linear subspace stable under every mode $a^M_{(n)}$. A module is **simple** (or **irreducible**) if it is nonzero and has no proper nonzero $V$-submodule. A module is **completely reducible** (or **semisimple**) if it is an internal direct sum of simple $V$-submodules; the empty direct sum is the zero module.

[F2] [[def-ordinary-vertex-module]]: An **ordinary module** for a conformal vertex algebra of CFT type is a grading-restricted generalized module in the sense of def-grading-restricted-generalized-vertex-module on which $L_M(0)$ acts semisimply. Equivalently, $M$ is a direct sum of its ordinary eigenspaces $M_h=\{m:L_M(0)m=hm\}$, each eigenspace is finite dimensional, and the real parts of the occurring weights are bounded below. Ordinary-module status is a condition on the module action; it does not assert that the category of such modules is semisimple.

[F3] [[def-grading-restricted-generalized-vertex-module]]: Let $V$ be a conformal vertex algebra of CFT type and $M$ a left $V$-module. Write $L_M(0)$ for the coefficient determined by $$ Y_M(\omega,z)=\sum_{n\in\mathbb Z}L_M(n)z^{-n-2}. $$ For $h\in\mathbb C$, define the generalized $L_M(0)$-eigenspace $$ M_{[h]}=\{m\in M:(L_M(0)-h)^N m=0\text{ for some integer }N\ge1\}. $$ The module is **grading-restricted generalized** if $M=\bigoplus_{h\in\mathbb C}M_{[h]}$, every $M_{[h]}$ is finite dimensional, and the real parts of its nonzero generalized weights are bounded below. The direct sum means each vector has only finitely many generalized-weight components. This convention explicitly adds finite-dimensionality and a lower bound to the generalized-eigenspace decomposition; those conditions are not consequences of the module Jacobi identity.

[F4] [[def-cft-logarithmic-intertwining-operator]]: Let V be a Möbius or conformal vertex algebra and W1,W2,W3 generalized V-modules. A logarithmic intertwining operator of type (W3;W1,W2) is a linear map Y(·,x)·:W1⊗W2→W3[log x]{x}, written $Y(w1,x)w2=\sum _{n∈C}\sum _{k≥0}(w1)_{n;k}w2 x^{-n-1}(\log  x)^{k}$, satisfying: for each w1,w2,n, $(w1)_{n+m;k}w2=0$ for all sufficiently large integers m, with the bound independent of k; the intertwining Jacobi identity; $∂_{x}Y(w1,x)=Y(L(-1)w1,x)$; and $[L(j),Y(w1,x)]=\sum _{i=0}^{j+1}\binom{j+1}{i}x^{i}Y(L(j-i)w1,x)$ for $j=-1,0,1$. Each coefficient of $x^{-n-1}$ is a finite polynomial in log x; no uniform degree bound over all n is imposed. In the strongly graded setting it is grading-compatible when coefficient degrees add. The no-log subspace consists of logarithmic intertwining operators with all coefficients for $k>0$ zero, retaining the stated integer-string truncation. It agrees with the usual ordinary intertwining-operator space over a conformal vertex algebra of CFT type when W1,W2,W3 are ordinary modules, meaning grading-restricted generalized modules with diagonalizable L(0); without that lower bound, no uniform real-part truncation is asserted.

## Proof

1.1 The no-log subspace consists exactly of maps satisfying the ordinary Jacobi, truncation, and derivative conditions. [given, F1, F2, F3, F4, algebra]

2.1 The conditions are linear in the map, so this is a vector space. Its dimension is a finite fusion multiplicity only when a separate finiteness result applies. [given, F1, F2, F3, F4, step 1.1, algebra] ∎
