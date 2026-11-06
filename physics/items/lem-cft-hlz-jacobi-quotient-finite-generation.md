---
id: lem-cft-hlz-jacobi-quotient-finite-generation
kind: lemma
title: Finite generation of the multipoint Jacobi quotient
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: mathematics
proof_strategy: direct
deps:
  - thm-hilbert-basis-theorem
  - thm-noetherian-ring-quotients-and-localisations
  - lem-submodules-of-finite-modules-over-noetherian-rings-are-finite-direct
  - def-cft-c1-cofinite-module
  - def-cft-quasi-finite-dimensional-module
  - thm-cft-contragredient-module-well-defined
  - lem-cft-opposite-vertex-operator-identities
  - def-cft-logarithmic-intertwining-operator
dependency_roles:
  thm-hilbert-basis-theorem: mathematical-premise
  thm-noetherian-ring-quotients-and-localisations: mathematical-premise
  lem-submodules-of-finite-modules-over-noetherian-rings-are-finite-direct: mathematical-premise
  def-cft-c1-cofinite-module: mathematical-premise
  def-cft-quasi-finite-dimensional-module: mathematical-premise
  thm-cft-contragredient-module-well-defined: mathematical-premise
  lem-cft-opposite-vertex-operator-identities: mathematical-premise
  def-cft-logarithmic-intertwining-operator: mathematical-premise
sources:
  references:
    - title: "Yi-Zhi Huang, Differential equations and intertwining operators, §1, Proposition 1.1 and Corollary 1.2"
      url: https://arxiv.org/pdf/math/0206206v1
    - title: "Huang, Lepowsky and Zhang, Logarithmic tensor category theory, Part VII, §11.2"
      url: https://arxiv.org/pdf/1110.1929v2
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
dependency_level: 3
---

## Statement

Let $n\geq1$ and let $W_0,\ldots,W_{n+1}$ be C1-cofinite, quasi-finite-dimensional grading-restricted generalized modules with real weights over a conformal vertex algebra of CFT type. Put
$$R_n=\mathbb C[z_1^{\pm1},\ldots,z_n^{\pm1},(z_i-z_j)^{-1}:i<j],\qquad T=R_n\otimes W_0\otimes\cdots\otimes W_{n+1}.$$
The Jacobi-relation submodule $J$ defined explicitly below has the following properties: there is a real $M$ such that $T=J+R_n\otimes(\bigotimes_iW_i)_{\leq M}$, and the latter weight-cutoff space is finite dimensional. In particular $T/J$ is finitely generated over $R_n$. Every scalar coefficient of a composable product of logarithmic intertwining operators with inputs $W_1,\ldots,W_{n+1}$ and target $W_0'$ annihilates $J$, when interpreted in its formal radial expansion. For each fixed tuple of inputs and each $l=1,\ldots,n$, there are $m_l\geq1$ and $a_{k,l}\in R_n$, independent of the intertwiners, such that its scalar coefficient $\varphi$ satisfies $\partial_{z_l}^{m_l}\varphi+\sum_{k=1}^{m_l}a_{k,l}\partial_{z_l}^{m_l-k}\varphi=0$ in the formal radial expansion. No assertion of analytic convergence or regular singularities is made.

For notation write $U_i(a)$ for applying an operator $a$ to tensor factor $i$ and leaving the other factors alone; $\mathbf w=w_0\otimes\cdots\otimes w_{n+1}$. For a homogeneous $u\in V_d$, $d>0$, let $u_k^*$ be the opposite mode on any factor, equivalently the adjoint of the ordinary mode $u_k$ on its contragredient. Define the finite-on-each-vector conjugated operator
$$K_i(u_k)=e^{z_i^{-1}L(1)}(-z_i^2)^{L(0)}u_k(-z_i^{-2})^{L(0)}e^{-z_i^{-1}L(1)}.$$
The middle conjugation is multiplication of $u_k$ by the integral power $(-z_i^2)^{d-k-1}$; thus this definition uses no branch on module weights. Let $J$ be the $R_n$-span of the following vectors for all such $u,\mathbf w$ and all $i=1,\ldots,n$:
$$A_i=\sum_{k\geq0}(-1)^k(-z_i)^kU_0(u_{-1-k}^*)\mathbf w-U_i(u_{-1})\mathbf w-\sum_{j\ne i}\sum_{k\geq0}(-1)^k(-(z_i-z_j))^{-1-k}U_j(u_k)\mathbf w-\sum_{k\geq0}(-1)^k(-z_i)^{-1-k}U_{n+1}(u_k)\mathbf w,$$
$$C=U_0(u_{-1}^*)\mathbf w-\sum_{i=1}^n\sum_{k\geq0}(-1)^kz_i^{-1-k}U_i(u_k)\mathbf w-U_{n+1}(u_{-1})\mathbf w,$$
$$D=U_0(u_{-1})\mathbf w-\sum_{i=1}^n\sum_{k\geq0}(-1)^kz_i^{1+k}U_i(K_i(u_k))\mathbf w-U_{n+1}(u_{-1}^*)\mathbf w.$$

## Statement references

[[def-cft-c1-cofinite-module]]

[[def-cft-quasi-finite-dimensional-module]]

[[thm-cft-contragredient-module-well-defined]]

[[lem-cft-opposite-vertex-operator-identities]]

[[def-cft-logarithmic-intertwining-operator]]

[[thm-hilbert-basis-theorem]]

[[thm-noetherian-ring-quotients-and-localisations]]

[[lem-submodules-of-finite-modules-over-noetherian-rings-are-finite-direct]]

## Facts & Assumptions

**Given:** The modules, tensor product, ring and relations in the statement, with the trivial auxiliary group grading.

[F1] [[def-cft-c1-cofinite-module]] and [[def-cft-quasi-finite-dimensional-module]] supply finite-dimensional positive-state (-1)-mode quotients and finite real weight cutoffs.

[F2] [[lem-cft-opposite-vertex-operator-identities]] supplies the opposite modes, their weight shift $k+1-d$, and coordinate inversion; [[thm-cft-contragredient-module-well-defined]] identifies the opposite action as the transpose on restricted duals.

[F3] [[def-cft-logarithmic-intertwining-operator]] supplies Jacobi and the derivative property of each operator in the product.

[F4] [[thm-hilbert-basis-theorem]], [[thm-noetherian-ring-quotients-and-localisations]] and [[lem-submodules-of-finite-modules-over-noetherian-rings-are-finite-direct]] supply respectively polynomial Noetherianity, localization Noetherianity, and finite generation of submodules of finite modules over a Noetherian ring.

## Proof

1.1 Every displayed sum is finite on $\mathbf w$. For ordinary $u_k$ this is module truncation; for $u_{-1-k}^*$ it is upper truncation of the opposite field. The operator $L(1)$ is locally nilpotent on each module because it lowers real weight by one and the weights are bounded below. Hence both exponentials in $K_i$ are finite on the vector where they act, and the $k$ sum is finite after the right exponential is expanded. Expanding $K_i$ gives Laurent-polynomial scalar coefficients: a term $L(1)^a u_k L(1)^b$ has weight shift $d-k-1-a-b$. Thus the three families are actual elements of $T$. [given, F1, F2, algebra]

1.2 Choose finite homogeneous representatives $P_i\subset W_i$ for $W_i/C_1(W_i)$. They exist because $C_1(W_i)$ is graded and the quotient is finite dimensional. Choose $M$ at least the largest sum of weights in $P_0\otimes\cdots\otimes P_{n+1}$. Decompose each factor as a representative plus a sum of $u_{-1}w$ terms. Consequently every homogeneous tensor of weight $s>M$ is a sum of tensors with at least one such factor; any term with all representative factors has weight at most $M$ and hence cannot occur in its weight-$s$ component. [F1, algebra]

2.1 Reduce a factor $u_{-1}w_i$ with $1\leq i\leq n$ by $A_i$, the last factor by $C$, or factor zero by $D$. The designated term has total weight $\sigma+d$, where $\sigma$ is the weight before insertion. Every other term of $A_i$ or $C$ has weight either $\sigma-d-k$ or $\sigma+d-k-1$, hence strictly less. In $D$, step 1.1 shows that every finite-factor term has weight $\sigma+d-k-1-a-b<\sigma+d$ and its last term has weight $\sigma-d$. All changes are integral, and all tensor weights have a common real lower bound. Thus each sequence of reductions terminates after finitely many strict integer weight decreases. Applying step 1.2 at each remaining weight above $M$ proves $T=J+R_n\otimes(\bigotimes_iW_i)_{\leq M}$. This argument needs no induction over a nondiscrete ordering of real numbers. [F1, F2, step 1.1, step 1.2, algebra]

2.2 For completeness the annihilation assertion uses actual Jacobi residues rather than an arbitrary quotient. Insert the current $Y(u,t)$ into the formal product of intertwiners. Apply intertwiner Jacobi successively across each insertion; it equates the expansion at infinity paired with $w_0$ with the sum of residues at $t=z_i$ and $t=0$. Take the residue with multiplier $(t-z_i)^{-1}$. At infinity its expansion is $\sum_{k\geq0}z_i^kt^{-1-k}$; at $z_j$, $j\ne i$, its expansion is $\sum_{k\geq0}(-1)^k(z_j-z_i)^{-1-k}(t-z_j)^k$; at zero it is $\sum_{k\geq0}(-1)^k(-z_i)^{-1-k}t^k$. At $z_i$ the residue is $u_{-1}$. Pairing the infinity expansion transposes ordinary modes to $u_{-1-k}^*$ on $W_0$. These four contributions are precisely $A_i$, since $(-1)^k(-z_i)^k=z_i^k$. Taking multiplier $t^{-1}$ instead gives $C$, by the expansion $t^{-1}=\sum_{k\geq0}(-1)^kz_i^{-1-k}(t-z_i)^k$ at $z_i$. All equalities are formal residues of Jacobi with the displayed binomial expansions, so no analytic contour deformation is assumed. [F2, F3, step 1.1, algebra]

3.1 If $B_i$ is a lower weight bound for $W_i$, each factor of a tensor of total weight at most $M$ has weight at most $M-\sum_{j\ne i}B_j$. Its span is therefore contained in the tensor product of finitely many finite cutoff spaces, finite dimensional by F1 (use a strict cutoff larger by one). Choose a finite basis of that subspace. Its image generates $T/J$ over $R_n$, proving finite generation. [F1, step 2.1, algebra]

3.2 Apply the same $t^{-1}$ residue after changing the global coordinate to $t^{-1}$, interchanging zero and infinity. The finite insertion coordinates become $z_i^{-1}$; their state transformation is $A(z_i)$ and its inverse. F2 gives the exact conjugation of the local $u_k$ action as $K_i(u_k)$; the coefficient $(-1)^k(z_i^{-1})^{-1-k}$ is $(-1)^kz_i^{1+k}$. The infinity and zero terms are respectively $u_{-1}$ on $W_0$ and $u_{-1}^*$ on $W_{n+1}$. Thus this residue is exactly $D$. Steps 2.2 and 3.2 prove annihilation of every generator, and $R_n$-linearity in its specified radial expansion proves annihilation of $J$. [F2, F3, step 2.2, algebra]

4.1 The field $\mathbb C$ is Noetherian, since its only ideals are zero and itself. Iterating the polynomial result and localizing at the multiplicative system of coordinates and their differences makes $R_n$ Noetherian. For fixed $l$ set $b_j=[w_0\otimes\cdots\otimes L(-1)^jw_l\otimes\cdots\otimes w_{n+1}]\in T/J$. Its $R_n$-span is a submodule of the finite module in step 3.1, hence is finitely generated. Express finitely many generators as finite combinations of the $b_j$, and let $m_l-1$ be at least every index that occurs. Thus $b_0,\ldots,b_{m_l-1}$ generate that span and $b_{m_l}+\sum_{k=1}^{m_l}a_{k,l}b_{m_l-k}=0$ for some $a_{k,l}\in R_n$. Applying the coefficient map from steps 2.2–2.2 and using the derivative identity of each intertwiner turns $b_j$ into $\partial_{z_l}^j\varphi$. This proves the claimed scalar differential equations as formal identities. It gives no pole-order estimate for their coefficients at a boundary divisor. [F3, F4, step 3.1, step 3.2, algebra] ∎
