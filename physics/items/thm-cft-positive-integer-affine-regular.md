---
id: thm-cft-positive-integer-affine-regular
kind: theorem
title: Regularity of positive-integral-level affine VOAs
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 6
domain: mathematics
library: mathematics
deps:
  - thm-universal-affine-vertex-algebra
  - thm-sugawara-modes-satisfy-virasoro
  - def-cft-simple-affine-voa
  - def-conformal-vertex-algebra
  - def-cft-regular-vertex-algebra
  - def-cft-weak-voa-category-o
  - def-admissible-vertex-algebra-module
  - def-formal-distribution-on-a-vector-space
  - def-vertex-algebra-module
  - def-vertex-algebra-state-field
  - def-ordinary-vertex-module
  - def-axiom-of-choice
  - thm-primary-decomposition-for-an-endomorphism
  - thm-fundamental-theorem-of-algebra-minimum-modulus-proof
  - lem-cft-affine-current-fields-have-uniform-nilpotence
  - lem-cft-weak-affine-module-has-simple-ordinary-submodule
  - lem-cft-positive-integer-affine-admissible-semisimplicity
dependency_roles:
  thm-universal-affine-vertex-algebra: mathematical-premise
  thm-sugawara-modes-satisfy-virasoro: mathematical-premise
  def-cft-simple-affine-voa: mathematical-premise
  def-conformal-vertex-algebra: mathematical-premise
  def-cft-regular-vertex-algebra: mathematical-premise
  def-cft-weak-voa-category-o: mathematical-premise
  def-admissible-vertex-algebra-module: mathematical-premise
  def-formal-distribution-on-a-vector-space: mathematical-premise
  def-vertex-algebra-module: mathematical-premise
  def-vertex-algebra-state-field: mathematical-premise
  def-ordinary-vertex-module: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  thm-primary-decomposition-for-an-endomorphism: mathematical-premise
  thm-fundamental-theorem-of-algebra-minimum-modulus-proof: mathematical-premise
  lem-cft-affine-current-fields-have-uniform-nilpotence: mathematical-premise
  lem-cft-weak-affine-module-has-simple-ordinary-submodule: mathematical-premise
  lem-cft-positive-integer-affine-admissible-semisimplicity: mathematical-premise
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
      locator: "§3, Theorem 3.7 and its complete three-step proof, printed pp. 7–8."
    - title: Tomoyuki Arakawa and Anne Moreau, Arc spaces and vertex algebras
      url: https://www.imo.universite-paris-saclay.fr/~anne.moreau/Arc_space-vertex_algebras-BOOK_version.pdf
      locator: "§3.1, Proposition 3.1; §11.1, Theorem 11.1, printed pp. 65–68 and 217–218."
---

## Statement

For a finite-dimensional complex simple Lie algebra $\mathfrak g$ with long roots normalized to squared length $2$, and a positive integer $\ell$, the simple affine VOA $L_\ell(\mathfrak g)$ is regular in the sense of [[def-cft-regular-vertex-algebra]]: every weak module is an algebraic direct sum of simple ordinary modules. The conformal structure is its noncritical Sugawara structure. No rationality or $C_2$-cofiniteness assertion is included here.

## Statement references

[[def-cft-simple-affine-voa]]

[[def-cft-regular-vertex-algebra]]

## Facts & Assumptions

**Given:** A finite-dimensional complex simple $\mathfrak g$, the normalized invariant form, $\ell\in\mathbb Z_{>0}$, and a weak $L_\ell(\mathfrak g)$-module $M$.

[A1] Assume the Axiom of Choice. It is an explicit hypothesis of [[lem-cft-positive-integer-affine-admissible-semisimplicity]], which is used below.

[F1] [[lem-cft-positive-integer-affine-admissible-semisimplicity]] proves that every admissible module is a direct sum of simple ordinary modules and that there are only finitely many isomorphism classes of simple ordinary modules at level $\ell$.

[F2] [[lem-cft-weak-affine-module-has-simple-ordinary-submodule]] proves that each nonzero weak module contains a simple ordinary submodule.

[F3] [[def-cft-weak-voa-category-o]] defines the finite-energy-coset category by local finiteness of $L_0$ and support in finitely many nonnegative integer translates; it supplies the induced admissible grading.

[F4] [[def-cft-simple-affine-voa]] and [[def-conformal-vertex-algebra]] give the nonnegative integer conformal grading and $L(-1)=T$. [[def-vertex-algebra-module]] supplies module Jacobi, [[def-vertex-algebra-state-field]] supplies creation, and [[def-formal-distribution-on-a-vector-space]] fixes the delta/residue conventions. [[def-ordinary-vertex-module]] gives the algebraic $L_0$-eigenspace decomposition and a lower bound on real parts.

[F5] [[thm-primary-decomposition-for-an-endomorphism]] decomposes a finite-dimensional complex endomorphism into its generalized eigenspaces after factoring its minimal polynomial; [[thm-fundamental-theorem-of-algebra-minimum-modulus-proof]] makes the irreducible complex factors linear.

## Proof

1.1 Let $W\subseteq M$ be the sum of all simple ordinary submodules. Taking $\operatorname{Res}_{z_0}$ in module Jacobi and then the coefficient residues in $z_1,z_2$ gives the mode commutator formula $[u^M_{(m)},a^M_{(n)}]=\sum_{j\ge0}\binom mj (u_{(j)}a)^M_{(m+n-j)}$. For homogeneous $a$ of conformal weight $r$, take $u=\omega$ and $m=1$: because $\omega_{(0)}a=Ta$ and $\omega_{(1)}a=ra$, this gives $[L_M(0),a^M_{(n)}]=(Ta)^M_{(n+1)}+r a^M_{(n)}$. Creation gives $Ta=a_{(-2)}\mathbf1$. The module Jacobi iterate with $(a,\mathbf1)$ and $Y_M(\mathbf1,z)=I$ gives $Y_M(Ta,z)=\operatorname{Res}_x(\iota_{x,z}-\iota_{z,x})(x-z)^{-2}Y_M(a,x)=\partial_zY_M(a,z)$ by the formal delta/residue identity in [F4]. Hence $(Ta)^M_{(n+1)}=-(n+1)a^M_{(n)}$, so every homogeneous state mode shifts $L_0$ eigenvalues by the integer $r-n-1$. For each simple ordinary submodule $S=\bigoplus_{h\in\mathbb C}S_h$, the sum $\bigoplus_{h\in\xi}S_h$ over any coset $\xi\in\mathbb C/\mathbb Z$ is a submodule, so simplicity leaves exactly one nonzero coset. Its eigenvalues have real parts bounded below by [F4], so the corresponding integer-indexed subset has a least element $h_S$ and the spectrum is contained in $h_S+\mathbb Z_{\ge0}$. By [F1], only finitely many isomorphism classes of simple ordinary modules occur at this level, and isomorphic modules have the same $L_0$ spectrum. Hence the spectrum of $W$ lies in finitely many such cosets. Every vector of $W$ is a finite sum of vectors from ordinary modules, each a finite sum of $L_0$ eigenvectors; therefore $L_0$ is locally finite on $W$, and $W$ is the direct sum of its generalized eigenspaces. Choosing one lowest representative for each distinct coset shows that $W$ satisfies [F3] and belongs to VOA category $\mathcal O$. [F1, F3, F4, given, algebra]

2.1 Suppose $M/W\ne0$. It is a weak module, so [F2] supplies a simple ordinary submodule $S\subseteq M/W$. Let $M_1$ be its preimage in $M$, giving $0\to W\to M_1\to S\to0$. For any $m\in M_1$, its image in $S$ is a finite sum of $L_0$ eigenvectors; choose a monic polynomial $p$ annihilating that image. Then $p(L_0)m=w\in W$. Since $L_0$ is locally finite on $W$, the span $W_m=\operatorname{span}\{L_0^q w:q\ge0\}$ is finite-dimensional and invariant. If $d=\deg p$, the finite-dimensional space $W_m+\operatorname{span}\{m,L_0m,\ldots,L_0^{d-1}m\}$ is $L_0$-invariant by the monic recurrence $p(L_0)m=w$ (for $d=0$, $m=w\in W$). Thus $L_0$ is locally finite on $M_1$. Every vector therefore lies in a finite-dimensional invariant subspace, and [F5] decomposes each such subspace into generalized eigenspaces; these give the algebraic generalized-eigenspace decomposition of $M_1$. Every generalized eigenvalue of $M_1$ lies in the support of $W$ or $S$: a generalized eigenvector either maps to a nonzero generalized eigenvector in $S$ with the same eigenvalue or lies in $W$. Their supports occupy finitely many integer cosets bounded below, so $M_1$ is in VOA category $\mathcal O$ by [F3]. [F2, F3, F5, step 1.1, algebra]

3.1 The induced grading in [F3] makes $M_1$ admissible. By [F1], $M_1$ is a direct sum of simple ordinary submodules. Each is also a simple ordinary submodule of $M$ and hence is contained in $W$ by its definition. This forces $M_1=W$, contradicting $M_1/W=S\ne0$. Therefore $M=W$, so $M$ is a sum of simple ordinary submodules. [F1, F3, step 2.1]

4.1 By step 3.1, $M=W$, and step 1.1 puts $W$ in VOA category $\mathcal O$. Its induced grading in [F3] makes $M$ admissible. With the Axiom of Choice [A1] required by [F1], the admissible-module decomposition in [F1] expresses $M$ as an algebraic direct sum of simple ordinary modules. By [[def-cft-regular-vertex-algebra]], this is regularity. [A1, F1, F3, step 1.1, step 3.1] ∎

