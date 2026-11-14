---
id: lem-qec-author-252014cb5616-weighted-shift-amplitude-bound
kind: lemma
domain: mathematics
title: Coefficient variation controls a weighted-shift operator
status: draft
origin: session
deps:
  - def-qec-prereq-finite-operator-conventions
  - math:def-operator-norm-on-a-finite-dimensional-inner-product-space
dependency_roles:
  def-qec-prereq-finite-operator-conventions: mathematical-premise
  math:def-operator-norm-on-a-finite-dimensional-inner-product-space: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct-proof
formulation_deps:
  - def-qec-prereq-finite-operator-conventions
  - math:def-operator-norm-on-a-finite-dimensional-inner-product-space
argument_deps:
  - def-qec-prereq-finite-operator-conventions
  - math:def-operator-norm-on-a-finite-dimensional-inner-product-space
dependency_level: 1
---

## Statement

On finite orthonormal bases let $T=\sum_x a_x|p(x)\rangle\langle x|$, where $p$ is injective on the source labels with nonzero coefficients. Let $T_s=\sum_x a_x(1+e_x)|p(x)\rangle\langle x|$, with $|e_x|\leq\epsilon$. If the source basis is nonempty, then $\|T\|=\max_x|a_x|$; if it is empty, then $\|T\|=0$. In either case $\|T_s-T\|\leq\epsilon\|T\|$ in operator norm. This applies to a fixed spherical channel $(J,m)\mapsto(J-1,m+\delta)$ across finitely many source blocks, since the destinations are distinct. A zero $T$ stays zero under this multiplicative coefficient change.

## Facts & Assumptions

[F1] Matrix units and adjoints use the specified finite orthonormal-basis convention. [[def-qec-prereq-finite-operator-conventions]]

[F2] For a linear map between finite-dimensional real or complex inner-product spaces, the operator norm is zero if the domain is zero; for nonzero domain it is $\|A\|=\max_{\|v\|=1}\|Av\|$. [[math:def-operator-norm-on-a-finite-dimensional-inner-product-space]]

## Proof

**Given:** The finite injective shift and coefficient bounds. **Goal:** Establish the operator norm inequalities.

1.1 If the source basis is empty, both shifts are the zero map on the zero domain, so both norms are zero by [F2] and the claimed bound holds. Otherwise the source basis is nonempty. Put $S=\{x:a_x\ne0\}$. All terms outside $S$ vanish, and injectivity on $S$ makes the destination vectors indexed by $S$ pairwise orthogonal. Thus $\|Tv\|^2=\sum_{x\in S}|a_x|^2|v_x|^2=\sum_x|a_x|^2|v_x|^2$ for every vector in the source span, including when $S$ is empty. This is bounded by $(\max_x|a_x|)^2\|v\|^2$, and equality is attained on a source basis vector with maximal coefficient, giving $\|T\|=\max_x|a_x|$ by the operator-norm definition. The coefficients $a_xe_x$ of $T_s-T$ have support contained in $S$, so their nonzero destinations are also distinct; the same argument gives $\|T_s-T\|=\max_x|a_xe_x|$. [given, F1, F2]

2.1 For a nonempty source basis, this maximum is at most $\epsilon\max_x|a_x|$. For a fixed $\delta$, equality of two destinations $(J-1,m+\delta)$ forces both $J$ and $m$ equal, so the claimed angular-momentum application is injective. If all $a_x$ vanish, both shifts vanish. [given, step 1.1] ∎
