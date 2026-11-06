---
id: def-cft-logarithmic-intertwining-operator
kind: definition
title: "Logarithmic intertwining operator"
status: published
origin: pipeline
domain: mathematics
library: mathematics
proof_strategy: direct
deps:
  - def-vertex-algebra-module
  - def-grading-restricted-generalized-vertex-module
  - def-conformal-vertex-algebra
  - def-cft-hlz-strongly-graded-generalized-module
dependency_roles:
  "def-cft-hlz-strongly-graded-generalized-module": mathematical-premise
  "def-vertex-algebra-module": mathematical-premise
  "def-grading-restricted-generalized-vertex-module": mathematical-premise
  "def-conformal-vertex-algebra": mathematical-premise
sources:
  references:
    - title: "Huang, Lepowsky, and Zhang, Logarithmic tensor category theory, Part II, Definition 3.10 and equation (3.26)"
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
dependency_level: 1
---

## Definition

Let V be a Möbius or conformal vertex algebra and W1,W2,W3 generalized V-modules. A **logarithmic intertwining operator** of type (W3;W1,W2) is a linear map $\mathcal Y:W_1\otimes W_2\to W_3[\log x]\{x\}$, with
$$\mathcal Y(w_1,x)w_2=\sum_{n\in\mathbb C}\sum_{k\geq0}(w_1)_{n;k}w_2\,x^{-n-1}(\log x)^k,$$
where $\log x$ is a formal symbol, such that the following conditions hold. For each w1,w2 and n, $(w_1)_{n+m;k}w_2=0$ for all sufficiently large integers m, with one bound independent of k. For v∈V and w1∈W1, w2∈W2, the Jacobi identity is
$$\begin{aligned}x_0^{-1}\delta\!\left(\frac{x_1-x_2}{x_0}\right)Y_3(v,x_1)\mathcal Y(w_1,x_2)w_2&-x_0^{-1}\delta\!\left(\frac{x_2-x_1}{-x_0}\right)\mathcal Y(w_1,x_2)Y_2(v,x_1)w_2\\&=x_2^{-1}\delta\!\left(\frac{x_1-x_0}{x_2}\right)\mathcal Y(Y_1(v,x_0)w_1,x_2)w_2.\end{aligned}$$
Here Yi is the V-action on Wi, $δ(t)=Σ_{r∈Z}t^r$, and x0,x1,x2 are independent formal variables. The first delta term is expanded in nonnegative powers of x2, the second in nonnegative powers of x1, and the right-hand term in nonnegative powers of x0, using the ordinary formal binomial convention. The derivative and Möbius bracket identities are
$$\partial_x\mathcal Y(w_1,x)=\mathcal Y(L(-1)w_1,x),\qquad [L(j),\mathcal Y(w_1,x)]=\sum_{i=0}^{j+1}\binom{j+1}{i}x^i\mathcal Y(L(j-i)w_1,x),\quad j=-1,0,1.$$
For each n, the coefficient of $x^{-n-1}$ is a finite polynomial in $\log x$; no uniform degree bound over all n is imposed. In the strongly graded setting the operator is grading-compatible when coefficient degrees add. The no-log subspace consists of logarithmic intertwining operators with all coefficients for $k>0$ zero, retaining the stated integer-string truncation. It agrees with the usual ordinary intertwining-operator space over a conformal vertex algebra of CFT type when W1,W2,W3 are ordinary modules, meaning grading-restricted generalized modules with diagonalizable L(0); without that lower bound, no uniform real-part truncation is asserted.

## Facts & Assumptions

**Given:** Work over C with the formal-variable, grading, and branch conventions in the linked definitions.

[F1] [[def-vertex-algebra-module]]: Let $V$ be a vertex algebra over $\mathbb C$ in the ordinary, non-super convention of def-vertex-algebra-state-field. A **left $V$-module** is a complex vector space $M$ and a linear map $$ Y_M(-,z):V\longrightarrow \{\text{formal fields on }M\},\qquad a\longmapsto Y_M(a,z)=\sum_{n\in\mathbb Z}a^M_{(n)}z^{-n-1}, $$ with the following properties: 1. **Lower truncation.** For every $a\in V$ and $m\in M$, $a^M_{(n)}m=0$ for all sufficiently large integers $n$, so $Y_M(a,z)m\in M((z))$ in the support convention of def-formal-distribution-on-a-vector-space. 2. **Vacuum.** $Y_M(\mathbf1,z)=\operatorname{id}_M$. 3. **Module Jacobi identity.** For every $a,b\in V$, $$ z_0^{-1}\delta\!\left(\frac{z_1-z_2}{z_0}\right)Y_M(a,z_1)Y_M(b,z_2)-z_0^{-1}\delta\!\left(\frac{z_2-z_1}{-z_0}\right)Y_M(b,z_2)Y_M(a,z_1)=z_2^{-1}\delta\!\left(\frac{z_1-z_0}{z_2}\right)Y_M(Y(a,z_0)b,z_2). $$ Here $\delta(x)=\sum_{r\in\mathbb Z}x^r$; the first expansion is in nonnegative powers of $z_2$, the second in nonnegative powers of $z_1$, and the right-hand expansion is in nonnegative powers of $z_0$. They use the formal binomial conventions of def-formal-distribution-on-a-vector-space. The $Y$ inside the right-hand side is the state-field map of $V$; it is not the action map $Y_M$. A **$V$-module homomorphism** $f:M\to N$ is a linear map such that $fY_M(a,z)=Y_N(a,z)f$ for every $a\in V$. This definition does not impose a conformal grading, finite-dimensional weight spaces, semisimplicity of $L_0$, a right-module convention, or a twist by an automorphism. For a conformal vertex algebra, write $Y_M(\omega,z)=\sum_{n\in\mathbb Z}L_M(n)z^{-n-2}$ when a conformal vector $\omega$ is specified. A **$V$-submodule** of $M$ is a linear subspace stable under every mode $a^M_{(n)}$. A module is **simple** (or **irreducible**) if it is nonzero and has no proper nonzero $V$-submodule. A module is **completely reducible** (or **semisimple**) if it is an internal direct sum of simple $V$-submodules; the empty direct sum is the zero module.

[F2] [[def-grading-restricted-generalized-vertex-module]]: Let $V$ be a conformal vertex algebra of CFT type and $M$ a left $V$-module. Write $L_M(0)$ for the coefficient determined by $$ Y_M(\omega,z)=\sum_{n\in\mathbb Z}L_M(n)z^{-n-2}. $$ For $h\in\mathbb C$, define the generalized $L_M(0)$-eigenspace $$ M_{[h]}=\{m\in M:(L_M(0)-h)^N m=0\text{ for some integer }N\ge1\}. $$ The module is **grading-restricted generalized** if $M=\bigoplus_{h\in\mathbb C}M_{[h]}$, every $M_{[h]}$ is finite dimensional, and the real parts of its nonzero generalized weights are bounded below. The direct sum means each vector has only finitely many generalized-weight components. This convention explicitly adds finite-dimensionality and a lower bound to the generalized-eigenspace decomposition; those conditions are not consequences of the module Jacobi identity.

[F3] [[def-conformal-vertex-algebra]]: A **conformal vertex algebra of CFT type** is a complex vertex algebra $V$ in the sense of def-vertex-algebra-state-field, with a specified vector $\omega\in V$ and scalar $c\in\mathbb C$, such that, writing $$ Y(\omega,z)=\sum_{n\in\mathbb Z}L(n)z^{-n-2}, $$ the operators $L(n)$ and scalar central action $c$ satisfy the Virasoro relations of def-virasoro-algebra, and $L(-1)=T$. In addition, $L(0)$ is diagonalizable, $V_n:=\{v\in V:L(0)v=nv\}$ gives $V=\bigoplus_{n\ge0}V_n$, every $V_n$ is finite dimensional, and $V_0=\mathbb C\mathbf1$. Under this page's convention, this is a vertex operator algebra of CFT type. The grading and the CFT-type condition are part of the definition; they do not follow from the vertex-algebra axioms alone. The conformal weight of $v\in V_n$ is $n$. A conformal vector, a grading, and the nonnegative grading condition are additional data beyond an ordinary vertex algebra.

[F4] [[def-cft-hlz-strongly-graded-generalized-module]]: Let V be an ordinary non-super vertex algebra in the sense of def-vertex-algebra-state-field. A **Möbius vertex algebra** has $V=⊕_{n∈Z}V_{n}$ with $V_{n}={v∈V:L(0)v=nv}$, and operators L(-1),L(0),L(1) representing sl(2), with L(-1) equal to translation, and satisfying $[L(j),Y(v,x)]=Σ_{i=0}^{j+1}$ $\operatorname{binom}(j+1,i)x^iY(L(j-i)v,x)$ for $j=-1,0,1$. A Möbius module has the corresponding sl(2)-action and field commutator identities. A conformal vertex algebra supplies these operators through its Virasoro field. For a generalized module write L(0)_s for the diagonal operator acting by h on $W_[h]$; the nilpotent part is L(0)-L(0)_s. Let A be an abelian group and suppose V has compatible integer-weight and A-gradings $V=⊕_{n∈Z,α∈A}V^{α}_{n}$, each component finite dimensional and lower truncated in n for each α, $1∈V^{0}_{0}$, $v_{m}V^{β}⊂V^{α+β}$, and $L(j)V^{α}⊂V^{α}$ for $j=-1,0,1$. In the conformal case require $ω∈V^{0}_{2}$. For an abelian group Ã⊃A, a generalized module $W=⊕_{h∈C,β∈\widetilde A}W^{β}_[h]$ is strongly Ã-graded when $W^{β}_[h]=W_[h]∩W^{β}$, $W^{β}=⊕_{h}$ $W^{β}_[h]$ and $W_[h]=⊕_β$ $W^{β}_[h]$, each $W^{β}_[h]$ is finite dimensional, $W^{β}_[h+k]=0$ for all sufficiently negative integers k for each h,β, $v_{m}W^{β}⊂W^{α+β}$, and $L(j)W^{β}⊂W^{β}$ for $j=-1,0,1$. Morphisms preserve both gradings and the V-action.

## Proof

1.1 The coefficient convention specifies complex powers and coefficientwise finite log polynomials, while the lower-truncation bound is independent of the log degree. [given, F1, F2, algebra]

2.1 Write $\mathcal Y_k(w_1,x)w_2=\sum_{n\in\mathbb C}(w_1)_{n;k}w_2x^{-n-1}$ for $k\geq0$. The formal derivative acts by $\partial_x(x^a(\log x)^k)=ax^{a-1}(\log x)^k+kx^{a-1}(\log x)^{k-1}$, with the second term zero when $k=0$. Taking log-degree zero in the derivative axiom gives $\mathcal Y_0(L(-1)w_1,x)=\partial_x\mathcal Y_0(w_1,x)+x^{-1}\mathcal Y_1(w_1,x)$; projection to log-degree zero need not preserve that axiom. Instead, restrict to operators already satisfying $\mathcal Y_k=0$ for every $k>0$. Their defining Jacobi, derivative and three $\mathfrak{sl}_2$ identities are precisely the corresponding no-log identities. They form a vector subspace since the identities are linear and finite sums retain integer-string truncation by taking the maximum of the bounds. For ordinary-module inputs $w_1,w_2$ of weights $h_1,h_2$, the $L(0)$ bracket and derivative identity give $L_3(0)((w_1)_{n;0}w_2)=(h_1+h_2-n-1)(w_1)_{n;0}w_2$. If output weights have real parts at least $B$, this coefficient vanishes for $\operatorname{Re}n>\operatorname{Re}(h_1+h_2)-1-B$. Finite homogeneous support of arbitrary inputs gives one bound for each pair. Conversely, ordinary real-part truncation implies integer-string truncation, so the two spaces agree under the stated ordinary-module hypotheses. No uniform real-part truncation is asserted for unrestricted generalized modules. [given, F1, F2, F3, F4, step 1.1, algebra] ∎
