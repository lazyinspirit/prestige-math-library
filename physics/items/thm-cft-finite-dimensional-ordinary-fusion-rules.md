---
id: thm-cft-finite-dimensional-ordinary-fusion-rules
kind: theorem
title: "C1-cofinite ordinary intertwining spaces are finite dimensional"
status: published
origin: pipeline
domain: mathematics
library: mathematics
proof_strategy: direct
deps:
  - lem-cft-hlz-jacobi-quotient-finite-generation
  - def-cft-c1-cofinite-module
  - def-cft-intertwining-operator-space
  - thm-cft-logarithmic-pz-intertwining-correspondence
  - def-ordinary-vertex-module
  - def-conformal-vertex-algebra
  - thm-cft-contragredient-module-well-defined
  - def-cft-quasi-finite-dimensional-module
dependency_roles:
  lem-cft-hlz-jacobi-quotient-finite-generation: mathematical-premise
  "def-cft-quasi-finite-dimensional-module": mathematical-premise
  "thm-cft-contragredient-module-well-defined": mathematical-premise
  "def-cft-c1-cofinite-module": mathematical-premise
  "def-cft-intertwining-operator-space": mathematical-premise
  "thm-cft-logarithmic-pz-intertwining-correspondence": mathematical-premise
  "def-ordinary-vertex-module": mathematical-premise
  "def-conformal-vertex-algebra": mathematical-premise
sources:
  references:
    - title: "Yi-Zhi Huang, Differential equations and intertwining operators"
      url: "https://arxiv.org/pdf/math/0206206v1"
    - title: "Huang, Lepowsky, and Zhang, Logarithmic tensor category theory, Part III"
      url: "https://arxiv.org/pdf/1012.4197v2"
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pending
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
dependency_level: 4
---

## Statement

Let V be C1-cofinite in the ungraded HLZ convention, and let W1,W2,W3 and the contragredient W3' be C1-cofinite and quasi-finite-dimensional ordinary grading-restricted V-modules. Then dim I( W3 ; W1 W2 )<∞.

## Facts & Assumptions

**Given:** Work over C with the formal-variable, grading, and branch conventions in the linked definitions.

[F1] [[def-cft-c1-cofinite-module]]: Let V be an integer-graded Möbius or conformal vertex algebra with $A=\widetilde A=\{0\}$, and W a generalized V-module. Put $V_+=\bigoplus _{n>0}V_{n}$ and $C1(W)=\operatorname{\operatorname{span}}_C\{u_{-1}w:u∈V_+, w∈W\}$. The module is C1-cofinite when dim_C(W/C1(W))<∞.

[F2] [[def-cft-intertwining-operator-space]]: For ordinary modules W1,W2,W3 of a conformal vertex algebra V, let I( W3 ; W1 W2 ) be the vector space of logarithm-free formal intertwining operators of that type, with the Jacobi, lower-truncation, and L(-1)-derivative conditions of def-cft-logarithmic-intertwining-operator and the ordinary grading convention. In a specified finite semisimple category its fusion multiplicity is dim I( Wk ; Wi Wj ) when that dimension is finite. Finite-dimensionality is a separate theorem, not part of this definition.

[F3] [[thm-cft-logarithmic-pz-intertwining-correspondence]]: Fix z∈C×, p∈Z, and ℓ_p(z)=log|z|+i arg(z)+2πip with 0≤arg(z)<2π. For strongly graded generalized V-modules W1,W2,W3, $I_{Y,p}(w1⊗w2)=Y(w1,e^{ℓ_p(z)})w2$ is a linear isomorphism from grading-compatible logarithmic intertwiners of type (W3;W1,W2) to P(z)-intertwining maps of that type. Its inverse is $Y_{I,p}(w1,x)w2=(y^{L(0)}x^{L(0)}I(y^{-L(0)}x^{-L(0)}w1⊗y^{-L(0)}x^{-L(0)}w2))|_{y=e^{-ℓ_p(z)}}$.

[F4] [[def-ordinary-vertex-module]]: An **ordinary module** for a conformal vertex algebra of CFT type is a grading-restricted generalized module in the sense of def-grading-restricted-generalized-vertex-module on which $L_M(0)$ acts semisimply. Equivalently, $M$ is a direct sum of its ordinary eigenspaces $M_h=\{m:L_M(0)m=hm\}$, each eigenspace is finite dimensional, and the real parts of the occurring weights are bounded below. Ordinary-module status is a condition on the module action; it does not assert that the category of such modules is semisimple.

[F5] [[def-conformal-vertex-algebra]]: A **conformal vertex algebra of CFT type** is a complex vertex algebra $V$ in the sense of def-vertex-algebra-state-field, with a specified vector $\omega\in V$ and scalar $c\in\mathbb C$, such that, writing $$ Y(\omega,z)=\sum_{n\in\mathbb Z}L(n)z^{-n-2}, $$ the operators $L(n)$ and scalar central action $c$ satisfy the Virasoro relations of def-virasoro-algebra, and $L(-1)=T$. In addition, $L(0)$ is diagonalizable, $V_n:=\{v\in V:L(0)v=nv\}$ gives $V=\bigoplus_{n\ge0}V_n$, every $V_n$ is finite dimensional, and $V_0=\mathbb C\mathbf1$. Under this page's convention, this is a vertex operator algebra of CFT type. The grading and the CFT-type condition are part of the definition; they do not follow from the vertex-algebra axioms alone. The conformal weight of $v\in V_n$ is $n$. A conformal vector, a grading, and the nonnegative grading condition are additional data beyond an ordinary vertex algebra.

[F6] [[thm-cft-contragredient-module-well-defined]]: For every grading-restricted generalized module M over a conformal vertex algebra V of CFT type, the opposite-field restricted dual M' is a grading-restricted generalized module, and componentwise evaluation M→M'' is a V-module isomorphism.

[F7] [[def-cft-quasi-finite-dimensional-module]]: Let $W=\bigoplus _{h∈R}W_[h]$ be a generalized V-module with real generalized L(0)-weights. It is quasi-finite-dimensional if for every real N the strict cutoff sum $\bigoplus _{h<N}W_[h]$ is finite dimensional.

[F8] [[lem-cft-hlz-jacobi-quotient-finite-generation]] defines the exact multipoint Ward/Jacobi relations and proves that the quotient is finitely generated and that intertwiner products annihilate the relations.

## Proof

1.1 Apply F8 with $n=2$, factors $W_3',V,W_1,W_2$ and $R=\mathbb C[z_1^{\pm1},z_2^{\pm1},(z_1-z_2)^{-1}]$. Its hypotheses hold for $V$ too: its nonnegative integral grading and finite graded pieces imply quasi-finiteness. The quotient $T/J$ is finitely generated, with one fixed finite set of generators independent of the intertwiner. [given, F1, F4, F5, F6, F7, F8, algebra]

1.2 We justify evaluation here without assuming the unresolved general convergence theorem. For homogeneous $v\in V$, $a\in W_1$, $b\in W_2$, $c'\in W_3'$, and an ordinary intertwiner $\mathcal Y$, the scalar expression $$\langle c',Y_{W_3}(v,z_1)\mathcal Y(a,z_2)b\rangle$$ is $z_2^{\Delta}$ times the radial expansion of a rational function with poles only at $z_1=0,z_2=0,z_1=z_2$, where $\Delta=\mathrm{wt}(c')-\mathrm{wt}(v)-\mathrm{wt}(a)-\mathrm{wt}(b)$. Indeed choose $N$ with $v_ka=0$ for $k\geq N$. The intertwiner Jacobi commutator gives locality after multiplication by $(z_1-z_2)^N$, equating this product with $\langle c',\mathcal Y(a,z_2)Y_{W_2}(v,z_1)b\rangle$. In the latter expression, truncation on $b$ bounds the negative $z_1$ powers. In the former, transpose to the grading-restricted $W_3'$ bounds the positive $z_1$ powers. The weight equation fixes the remaining $z_2$ exponent; after factoring $z_2^{\Delta}$ the common series has finitely many $z_1$ powers and is a Laurent polynomial. Cancelling $(z_1-z_2)^N$ proves the assertion. The binomial expansion of this rational function converges absolutely in $|z_1|>|z_2|>0$. Finite sums handle nonhomogeneous inputs. [F2, F4, F6, algebra]

2.1 Fix $z_1^0,z_2^0$ with $|z_1^0|>|z_2^0|>0$ and a logarithm of $z_2^0$. Step 1.2 defines actual scalar values for all elements of $T$, giving an $R$-linear functional when $R$ acts on $\mathbb C$ by evaluation. F8 shows its formal value on every relation in $J$ is zero; the convergent rational expressions of step 1.2 therefore show its evaluated value is zero too. It factors through $Q=(T/J)\otimes_{R}\mathbb C$, a finite-dimensional space by step 1.1. The construction is linear in $\mathcal Y$. [F8, step 1.1, step 1.2, algebra]

3.1 If the functional on $Q$ is zero, take $v=\mathbf1$. It follows that every matrix coefficient $\langle c',\mathcal Y(a,z_2^0)b\rangle$ vanishes. For homogeneous $a,b,c'$, ordinary grading and absence of logarithms make this coefficient a single scalar times $(z_2^0)^{\mathrm{wt}(c')-\mathrm{wt}(a)-\mathrm{wt}(b)}$. The latter factor is nonzero, so that scalar vanishes. Restricted-dual functionals separate each homogeneous coefficient, hence $\mathcal Y=0$. Thus the intertwining space injects into the finite-dimensional $Q^*$, proving its finite dimension. This also gives an explicit one-point injectivity argument rather than requiring analytic uniqueness or a missing supplier. [F2, F4, F6, step 2.1, algebra] ∎
