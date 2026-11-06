---
id: lem-cft-affine-current-fields-have-uniform-nilpotence
kind: lemma
title: Uniform nilpotence for root currents of positive-integral-level simple affine VOAs
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 4
domain: mathematics
library: mathematics
deps:
  - def-cft-simple-affine-voa
  - lem-cft-positive-integer-affine-highest-weight-is-integrable
  - def-universal-affine-vacuum-module
  - def-untwisted-affine-central-extension
  - def-formal-distribution-on-a-vector-space
  - def-vertex-algebra-state-field
  - def-vertex-algebra-module
  - lem-affine-current-fields-are-local
  - lem-state-field-reconstruction-from-local-generators
  - def-real-and-imaginary-kac-moody-roots
  - prop-roots-of-an-untwisted-affine-lie-algebra
  - prop-real-root-spaces-are-one-dimensional-sl2-roots
  - prop-the-weyl-group-preserves-roots-and-root-multiplicities
  - thm-finite-dimensional-representations-of-sl-two
  - thm-weyls-complete-reducibility-theorem
  - lem-finite-semisimple-cartan-root-and-string-structure
dependency_roles:
  def-cft-simple-affine-voa: mathematical-premise
  lem-cft-positive-integer-affine-highest-weight-is-integrable: mathematical-premise
  def-universal-affine-vacuum-module: mathematical-premise
  def-untwisted-affine-central-extension: mathematical-premise
  def-formal-distribution-on-a-vector-space: mathematical-premise
  def-vertex-algebra-state-field: mathematical-premise
  def-vertex-algebra-module: mathematical-premise
  lem-affine-current-fields-are-local: mathematical-premise
  lem-state-field-reconstruction-from-local-generators: mathematical-premise
  def-real-and-imaginary-kac-moody-roots: mathematical-premise
  prop-roots-of-an-untwisted-affine-lie-algebra: mathematical-premise
  prop-real-root-spaces-are-one-dimensional-sl2-roots: mathematical-premise
  prop-the-weyl-group-preserves-roots-and-root-multiplicities: mathematical-premise
  thm-finite-dimensional-representations-of-sl-two: mathematical-premise
  thm-weyls-complete-reducibility-theorem: mathematical-premise
  lem-finite-semisimple-cartan-root-and-string-structure: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
sources:
  references:
    - title: Chongying Dong, Haisheng Li, and Geoffrey Mason, Regularity of Rational Vertex Operator Algebras
      url: https://arxiv.org/pdf/q-alg/9508018v1
      locator: "§3, Lemma 3.6 and the current-mode argument in Theorem 3.7, printed pp. 6–8."
    - title: Tomoyuki Arakawa and Anne Moreau, Arc spaces and vertex algebras
      url: https://www.imo.universite-paris-saclay.fr/~anne.moreau/Arc_space-vertex_algebras-BOOK_version.pdf
      locator: "§2.5, n-th products and normal ordering; §11.1, Theorem 11.1 and affine integrability conventions, printed pp. 46–47 and 217–218."
---

## Statement

Let $\mathfrak g$ be a finite-dimensional complex simple Lie algebra, let $\ell\in\mathbb Z_{>0}$, and let $L_\ell(\mathfrak g)$ have the normalized affine currents $J^x(z)=\sum_{n\in\mathbb Z}x_nz^{-n-1}$. For fields $A(z)=\sum_nA_nz^{-n-1}$ and $B(z)$, define their normal product by $:A(z)B(z):=A_-(z)B(z)+B(z)A_+(z)$, where $A_-(z)=\sum_{n<0}A_nz^{-n-1}$ and $A_+(z)=\sum_{n\ge0}A_nz^{-n-1}$; form iterated normal products recursively. Put $m_\alpha:=\frac{2\ell}{(\alpha,\alpha)}$ for each finite root $\alpha$ and $N_\ell:=1+\max_{\alpha\in\Delta}m_\alpha$. For every root vector $x_\alpha\in\mathfrak g_\alpha$ and every weak $L_\ell(\mathfrak g)$-module $M$, the iterated normal product of $N_\ell$ copies of $J^{x_\alpha}_M(z)$ vanishes. There is a finite basis $\mathcal B$ of $\mathfrak g$, consisting of root vectors and inner conjugates of root vectors, for which this vanishing also holds for $J^a_M(z)$ for every $a\in\mathcal B$. The basis can be chosen to contain root vectors for each finite simple root and its negative, and root vectors for both signs of the highest finite root. Consequently every mode $a_n$ for $a\in\mathcal B$ is locally nilpotent on every weak module: for each $v\in M$ some positive integer $r$, depending on $a,n,v$, satisfies $a_n^rv=0$. The uniform bound $a_k^{N_\ell}v=0$ holds whenever $a_jv=0$ for all $j>k$.

## Facts & Assumptions

**Given:** The positive-integral-level simple affine VOA, its current convention, and a weak module $M$.

[F1] [[lem-cft-positive-integer-affine-highest-weight-is-integrable]] identifies its affine module with the integrable highest-weight module of level $\ell$ and gives $(\ell\Lambda_0)((\delta-\alpha)^\vee)=m_\alpha$.

[F2] [[prop-roots-of-an-untwisted-affine-lie-algebra]] says $\delta-\alpha$ is a real root, and [[def-real-and-imaginary-kac-moody-roots]] describes real roots as Weyl translates of simple roots. [[prop-the-weyl-group-preserves-roots-and-root-multiplicities]] records the corresponding root-space action.

[F3] [[thm-finite-dimensional-representations-of-sl-two]] gives the finite-dimensional highest-weight string: a highest vector of weight $m\in\mathbb Z_{\ge0}$ is killed by the $(m+1)$st lowering power.

[F4] [[def-untwisted-affine-central-extension]] gives $[x_p,y_q]=[x,y]_{p+q}+p\delta_{p,-q}B(x,y)c$. For a root vector $x_\alpha$, $[x_\alpha,x_\alpha]=0$ and $B(x_\alpha,x_\alpha)=0$, so all its current modes commute.

[F5] [[lem-affine-current-fields-are-local]] gives the current-field convention and formal self-locality; [[lem-state-field-reconstruction-from-local-generators]] gives preservation of field $n$th products; [[def-formal-distribution-on-a-vector-space]] and [[def-vertex-algebra-module]] provide the residue products and module Jacobi identity.

[F6] [[thm-weyls-complete-reducibility-theorem]] applies to every finite-dimensional $\mathfrak g$-module. [[lem-finite-semisimple-cartan-root-and-string-structure]] gives finite root spaces, simple-root triples, and that the simple coroots form a basis of the Cartan subalgebra.

## Proof

1.1 Fix $\alpha\in\Delta$ and set $\gamma=\delta-\alpha$. By [F1]–[F2], $\gamma$ is a positive real root with coroot pairing $m_\alpha$. In its $\mathfrak{sl}_2(\gamma)$ triple, the highest affine vacuum $\mathbf1$ is killed by the positive-root vector $f_\alpha\otimes t$ and has $h_\gamma$-weight $m_\alpha$; the lowering vector is $e_\alpha\otimes t^{-1}=x_\alpha(-1)$ up to nonzero scale. This lowering operator is locally nilpotent on the integrable module. Indeed, each simple-root generator is locally nilpotent by [F1]. For a Weyl translate, define $T_i=\exp(F_i)\exp(-E_i)\exp(F_i)$ on the module, where $E_i,F_i$ are the simple Chevalley operators. These exponentials are finite on every vector and invertible. The finite commutator identity $\exp(F_i)X\exp(-F_i)=\exp(\operatorname{ad}F_i)X$ (and its $E_i$ version) follows by expanding the conjugation polynomial; the adjoint series terminates on each affine root vector by [F2]. Therefore $T_i$ implements the Lie automorphism in [F2], and conjugates a simple-root operator to the corresponding real-root operator. Local nilpotence is preserved by this invertible conjugation. Hence the $\mathfrak{sl}_2(\gamma)$ lowering operator is locally nilpotent, its string on $\mathbf1$ is finite-dimensional, and [F3] gives $x_\alpha(-1)^{m_\alpha+1}\mathbf1=0$. Since $N_\ell=1+\max_{\beta\in\Delta}m_\beta$, also $x_\alpha(-1)^{N_\ell}\mathbf1=0$; the maximum is finite because $\Delta$ is finite. [F1, F2, F3, given, algebra]

2.1 For fields $A(z)=\sum_nA_nz^{-n-1}$ and $B(z)$, the state-field map preserves the $(-1)$-product [F5], whose formal-residue definition [F5] is $\operatorname{Res}_x(\iota_{x,z}(x-z)^{-1}A(x)B(z)-\iota_{z,x}(x-z)^{-1}B(z)A(x))$. Expanding the two binomials gives $A_-(z)B(z)+B(z)A_+(z)$, the stated normal product; module Jacobi gives the same identity on every weak module. For a root vector, its modes commute by [F4], so this normal product agrees coefficientwise with the ordinary product whenever the coefficient sums are finite on the vector. The state $x_\alpha(-1)^{N_\ell}\mathbf1=0$ from step 1.1 therefore has zero field on $V$ and on every weak module. [F4, F5, step 1.1, algebra]

3.1 Fix a weak module $M$, a root vector $x_\alpha$, and $v\in M$; abbreviate its commuting modes by $X_j$. Choose an integer $k$ with $X_jv=0$ for all $j>k$. Let $C$ be the span of all finite products of the $X_j$ applied to $v$, including the empty product. Commutativity makes $C$ invariant and gives $X_jC=0$ for $j>k$. In any coefficient of $J^{x_\alpha}_M(z)^{N_\ell}$ on $C$, discard tuples containing an index above $k$; a fixed total index then bounds each remaining index below, so only finitely many tuples remain. The coefficient with total index $N_\ell k$ is $X_k^{N_\ell}$, hence it vanishes on $C$ by step 2.1. Descend through the integers $n\le k$. Suppose for $n<k$ that positive integers $r_j$ satisfy $X_j^{r_j}C=0$ for $n<j\le k$. In the coefficient with total index $N_\ell n$, the only tuple with all indices at most $n$ is $(n,\ldots,n)$. Thus the zero-field identity gives $X_n^{N_\ell}=-Q$ on $C$, where $Q$ is a finite sum of commuting mode monomials, each containing some $X_j$ with $n<j\le k$. Put $R=1+\sum_{j=n+1}^k(r_j-1)$. Every monomial in $Q^R$ contains at least $R$ such higher-index factors, so some $X_j$ occurs at least $r_j$ times; hence $Q^RC=0$ and $X_n^{N_\ell R}C=0$. Finite downward induction reaches every specified integer $n$; modes above $k$ already vanish on $v$. This proves local nilpotence and the exponent $N_\ell$ at a truncation index. [F4, F5, step 2.1, algebra]

4.1 For each finite simple root choose $a_i=\exp(\operatorname{ad}e_i)f_i=f_i+h_i-e_i$. Its current modes are conjugate to those of $f_i$ by the invertible finite exponential $\exp(e_i(0))$: step 3.1 makes $e_i(0)$ locally nilpotent on the VOA and every weak module; the zero-mode Jacobi identity gives $[e_i(0),x_n]=[e_i,x]_n$, and the rank-one commutators make the Baker–Campbell–Hausdorff expansion finite. Thus the iterated normal product of $N_\ell$ copies of $J^{a_i}(z)$ vanishes on every weak module, as the same conjugation carries the zero product for $f_i$. The element $a_i$ has $[a_i,a_i]=0$ and $B(a_i,a_i)=0$ because it is an inner conjugate of the isotropic root vector $f_i$ and the automorphism preserves the invariant form; hence its current modes commute. The root vectors together with the $a_i$ span $\mathfrak g$, since $a_i-(f_i-e_i)=h_i$ and the simple coroots span the Cartan. Choose a basis from this spanning set containing both $e_i$ and $f_i$ for each finite simple root and both $e_\theta$ and $f_\theta$ for the highest finite root, counting any rank-one duplicates once. [F1, F4, F5, F6, step 3.1, algebra]

5.1 For each conjugate basis vector its modes commute and its iterated normal product vanishes by step 4.1. The cyclic-space coefficient argument of step 3.1 therefore applies to it, giving local nilpotence of every mode and the exponent $N_\ell$ at a truncation index. The basis contains the finite simple-root generators and both highest-root vectors, so every affine simple raising and lowering generator, including $f_\theta(1)$ and $e_\theta(-1)$, acts locally nilpotently. [F4, F5, F6, step 3.1, step 4.1] ∎
