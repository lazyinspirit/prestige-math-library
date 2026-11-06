---
id: def-cft-hlz-strongly-graded-generalized-module
kind: definition
title: "Strongly graded generalized module in the HLZ setting"
status: published
origin: pipeline
domain: mathematics
library: mathematics
proof_strategy: direct
deps:
  - def-conformal-vertex-algebra
  - def-grading-restricted-generalized-vertex-module
  - def-vertex-algebra-module
  - def-vertex-algebra-state-field
dependency_roles:
  "def-vertex-algebra-state-field": mathematical-premise
  "def-conformal-vertex-algebra": mathematical-premise
  "def-grading-restricted-generalized-vertex-module": mathematical-premise
  "def-vertex-algebra-module": mathematical-premise
sources:
  references:
    - title: "Huang, Lepowsky, and Zhang, Logarithmic tensor category theory, Part I, §2, Definitions 2.2, 2.5, 2.23 and 2.25, and Remarks 2.6, 2.24 and 2.28"
      url: "https://arxiv.org/pdf/1012.4193v7"
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
dependency_level: 0
---

## Definition

Let V be an ordinary non-super vertex algebra in the sense of def-vertex-algebra-state-field. A **Möbius vertex algebra** is V with an integer grading $V=⊕_{n∈Z}V_{(n)}$ satisfying $V_{(n)}=\{v∈V:L(0)v=nv\}$, and a representation of sl(2) by L(-1), L(0), L(1), satisfying $[L(0),L(-1)]=L(-1)$, $[L(0),L(1)]=-L(1)$, and $[L(-1),L(1)]=-2L(0)$, with $L(-1)=T$ and, for every $v∈V$ and $j=-1,0,1$,
$$[L(j),Y(v,x)]=\sum_{i=0}^{j+1}\binom{j+1}{i}x^iY(L(j-i)v,x).$$
A conformal vertex algebra supplies these operators through its Virasoro field. A generalized V-module uses the left-module action of def-vertex-algebra-module: a lower-truncated field map with vacuum action and the module Jacobi identity. In the Möbius case it also has a generalized L(0)-eigenspace decomposition $W=⊕_{h∈C}W_{[h]}$, with $(L(0)-h)^Nw=0$ for each $w∈W_{[h]}$ and some N depending on w; its additional sl(2)-action is a representation with the same three Lie brackets and satisfies, for every $v∈V$ and $j=-1,0,1$,
$$[L_W(j),Y_W(v,x)]=\sum_{i=0}^{j+1}\binom{j+1}{i}x^iY_W(L(j-i)v,x),\qquad \partial_xY_W(v,x)=Y_W(L(-1)v,x).$$
In the conformal case these operators are the modes of the module action of the conformal vector, and the module and Virasoro axioms supply the same identities. Write $L(0)_s$ for the diagonal operator acting by h on $W_{[h]}$; $L(0)-L(0)_s$ acts locally nilpotently on each generalized weight space, with no uniform exponent required.

Let A be an abelian group. V has integer-weight and A-gradings with $V=⊕_{n∈Z}V_{(n)}=⊕_{α∈A}V^{(α)}$. Compatibility means $V^{(α)}_{(n)}=V_{(n)}∩V^{(α)}$ and $V^{(α)}=⊕_{n∈Z}V^{(α)}_{(n)}$, so $V=⊕_{n∈Z,α∈A}V^{(α)}_{(n)}$. Each $V^{(α)}_{(n)}$ is finite dimensional and zero for all sufficiently negative n for each fixed α, $1∈V^{(0)}_{(0)}$, $v_mV^{(β)}⊂V^{(α+β)}$ for $v∈V^{(α)}$ and $m∈Z$, and $L(j)V^{(α)}⊂V^{(α)}$ for $j=-1,0,1$. In the conformal case also require $ω∈V^{(0)}_{(2)}$.

For an abelian group Ã containing A, a generalized module W is **strongly Ã-graded** when W has an auxiliary decomposition $W=⊕_{β∈\widetilde A}W^{(β)}$ compatible with its generalized-weight decomposition: $W^{(β)}_{[h]}:=W_{[h]}∩W^{(β)}$, $W^{(β)}=⊕_{h∈C}W^{(β)}_{[h]}$, and $W_{[h]}=⊕_{β∈\widetilde A}W^{(β)}_{[h]}$. Thus $W=⊕_{h∈C,β∈\widetilde A}W^{(β)}_{[h]}$. Each $W^{(β)}_{[h]}$ is finite dimensional, and for each fixed h,β one has $W^{(β)}_{[h+k]}=0$ for all sufficiently negative integers k. In addition, $v_mW^{(β)}⊂W^{(α+β)}$ for $v∈V^{(α)}$, L(j) preserves $W^{(β)}$ for $j=-1,0,1$, and, in the Möbius case, the action is the specified sl(2)-representation above. A morphism $f:W→U$ is a V-module map preserving each Ã-degree and generalized weight; in the Möbius case it also satisfies $fL_W(j)=L_U(j)f$ for $j=-1,0,1$. In the conformal case these last identities follow from V-linearity because the $L_W(j)$ are modes of the action of ω.

## Definition references

[[def-vertex-algebra-state-field]]

[[def-vertex-algebra-module]]

## Facts & Assumptions

**Given:** Work over C with the formal-variable, grading, and branch conventions in the linked definitions.

[F1] [[def-conformal-vertex-algebra]]: A **conformal vertex algebra of CFT type** is a complex vertex algebra $V$ in the sense of def-vertex-algebra-state-field, with a specified vector $\omega\in V$ and scalar $c\in\mathbb C$, such that, writing $$ Y(\omega,z)=\sum_{n\in\mathbb Z}L(n)z^{-n-2}, $$ the operators $L(n)$ and scalar central action $c$ satisfy the Virasoro relations of def-virasoro-algebra, and $L(-1)=T$. In addition, $L(0)$ is diagonalizable, $V_n:=\{v\in V:L(0)v=nv\}$ gives $V=\bigoplus_{n\ge0}V_n$, every $V_n$ is finite dimensional, and $V_0=\mathbb C\mathbf1$. Under this page's convention, this is a vertex operator algebra of CFT type. The grading and the CFT-type condition are part of the definition; they do not follow from the vertex-algebra axioms alone. The conformal weight of $v\in V_n$ is $n$. A conformal vector, a grading, and the nonnegative grading condition are additional data beyond an ordinary vertex algebra.

[F2] [[def-grading-restricted-generalized-vertex-module]]: Let $V$ be a conformal vertex algebra of CFT type and $M$ a left $V$-module. Write $L_M(0)$ for the coefficient determined by $$ Y_M(\omega,z)=\sum_{n\in\mathbb Z}L_M(n)z^{-n-2}. $$ For $h\in\mathbb C$, define the generalized $L_M(0)$-eigenspace $$ M_{[h]}=\{m\in M:(L_M(0)-h)^N m=0\text{ for some integer }N\ge1\}. $$ The module is **grading-restricted generalized** if $M=\bigoplus_{h\in\mathbb C}M_{[h]}$, every $M_{[h]}$ is finite dimensional, and the real parts of its nonzero generalized weights are bounded below. The direct sum means each vector has only finitely many generalized-weight components. This convention explicitly adds finite-dimensionality and a lower bound to the generalized-eigenspace decomposition; those conditions are not consequences of the module Jacobi identity.

[F3] [[def-vertex-algebra-module]]: Let $V$ be a vertex algebra over $\mathbb C$ in the ordinary, non-super convention of def-vertex-algebra-state-field. A **left $V$-module** is a complex vector space $M$ and a linear map $$ Y_M(-,z):V\longrightarrow \{\text{formal fields on }M\},\qquad a\longmapsto Y_M(a,z)=\sum_{n\in\mathbb Z}a^M_{(n)}z^{-n-1}, $$ with the following properties: 1. **Lower truncation.** For every $a\in V$ and $m\in M$, $a^M_{(n)}m=0$ for all sufficiently large integers $n$, so $Y_M(a,z)m\in M((z))$ in the support convention of def-formal-distribution-on-a-vector-space. 2. **Vacuum.** $Y_M(\mathbf1,z)=\operatorname{id}_M$. 3. **Module Jacobi identity.** For every $a,b\in V$, $$ z_0^{-1}\delta\!\left(\frac{z_1-z_2}{z_0}\right)Y_M(a,z_1)Y_M(b,z_2)-z_0^{-1}\delta\!\left(\frac{z_2-z_1}{-z_0}\right)Y_M(b,z_2)Y_M(a,z_1)=z_2^{-1}\delta\!\left(\frac{z_1-z_0}{z_2}\right)Y_M(Y(a,z_0)b,z_2). $$ Here $\delta(x)=\sum_{r\in\mathbb Z}x^r$; the first expansion is in nonnegative powers of $z_2$, the second in nonnegative powers of $z_1$, and the right-hand expansion is in nonnegative powers of $z_0$. They use the formal binomial conventions of def-formal-distribution-on-a-vector-space. The $Y$ inside the right-hand side is the state-field map of $V$; it is not the action map $Y_M$. A **$V$-module homomorphism** $f:M\to N$ is a linear map such that $fY_M(a,z)=Y_N(a,z)f$ for every $a\in V$. This definition does not impose a conformal grading, finite-dimensional weight spaces, semisimplicity of $L_0$, a right-module convention, or a twist by an automorphism. For a conformal vertex algebra, write $Y_M(\omega,z)=\sum_{n\in\mathbb Z}L_M(n)z^{-n-2}$ when a conformal vector $\omega$ is specified. A **$V$-submodule** of $M$ is a linear subspace stable under every mode $a^M_{(n)}$. A module is **simple** (or **irreducible**) if it is nonzero and has no proper nonzero $V$-submodule. A module is **completely reducible** (or **semisimple**) if it is an internal direct sum of simple $V$-submodules; the empty direct sum is the zero module.

[F4] [[def-vertex-algebra-state-field]]: A (non-super) **vertex algebra** over $\mathbb C$ is a complex vector space $V$ equipped with a nonzero vector $\mathbf1\in V$, a linear operator $T:V\to V$, and a linear **state–field map** $$Y(-,z):V\longrightarrow (\operatorname{End}_{\mathbb C}(V))^{\mathbb Z},\qquad a\longmapsto Y(a,z)=\sum_{n\in\mathbb Z}a_{(n)}z^{-n-1},$$ where the codomain denotes all endomorphism-valued coefficient families indexed by $\mathbb Z$. satisfying the following axioms. 1. **Field and truncation.** For each $a,v\in V$, there is an integer $N(a,v)$ such that $a_{(n)}v=0$ for all $n\ge N(a,v)$. Thus $Y(a,z)v\in V((z))$ in the lower-bounded support sense of def-formal-laurent-series-and-residue. 2. **Vacuum and creation.** $Y(\mathbf1,z)=\operatorname{id}_V$, $T\mathbf1=0$, and $$Y(a,z)\mathbf1=e^{zT}a:=\sum_{r\ge0}\frac{z^rT^r a}{r!}.$$ This is a formal power series; no analytic convergence is asserted. 3. **Translation covariance.** For every $a\in V$, $$[T,Y(a,z)]=\partial_zY(a,z).$$ 4. **Locality.** For every $a,b\in V$, some integer $N\ge0$ satisfies $$(z-w)^N[Y(a,z),Y(b,w)]=0.$$ The coefficient $a_{(n)}b$ is called the $n$th product of the states $a,b$. The mode and formal-distribution conventions in def-formal-distribution-on-a-vector-space are in force. The axioms are algebraic and do not impose a grading, conformal vector, simplicity, unitarity, or analytic OPE convergence.

## Proof

1.1 If $v∈V^{(α)}_{(n)}$, then $L(0)L(j)v=(n-j)L(j)v$ by the sl(2) brackets, and L(j) preserves α. Thus $L(j)V^{(α)}_{(n)}⊂V^{(α)}_{(n-j)}$. The fixed-α lower cutoff makes $L(1)^k v=0$ for sufficiently large k. Every state has finite homogeneous support, so L(1) is locally nilpotent on V. [given, F1, F2, F3, F4, algebra]

2.1 For $v∈V_{(n)}$, the $j=0$ module commutator and derivative identity give $[L_W(0),v_m]=(n-m-1)v_m$. Hence $(L_W(0)-(h+n-m-1))^N v_m w=v_m(L_W(0)-h)^Nw$, which vanishes for some N whenever $w∈W_{[h]}$. Together with auxiliary-degree compatibility this gives $v_mW^{(β)}_{[h]}⊂W^{(α+β)}_{[h+n-m-1]}$ for $v∈V^{(α)}_{(n)}$. These are the required integer and auxiliary grading compatibilities; no uniform nilpotence exponent on W is imposed. [given, F1, F2, F3, F4, step 1.1, algebra] ∎
