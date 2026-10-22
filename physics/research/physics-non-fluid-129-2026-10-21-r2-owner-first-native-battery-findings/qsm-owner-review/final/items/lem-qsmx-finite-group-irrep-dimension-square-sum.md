---
id: lem-qsmx-finite-group-irrep-dimension-square-sum
kind: lemma
title: Finite-group irreducible dimensions sum to the group order
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: physics
dependency_level: 0
deps:
  - thm-maschkes-theorem-for-finite-groups-over-fields-whose-characteristic-does-not-divide-the-group-order
  - def-finite-dimensional-representation-of-a-group-over-a-field
  - def-subrepresentation-and-irreducible-representation
dependency_roles:
  thm-maschkes-theorem-for-finite-groups-over-fields-whose-characteristic-does-not-divide-the-group-order: mathematical-premise
  def-finite-dimensional-representation-of-a-group-over-a-field: mathematical-premise
  def-subrepresentation-and-irreducible-representation: mathematical-premise
justified_by: []
physical_scope: Pure finite-group representation theory over $\mathbb C$; no physical interpretation or empirical premise.
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Peter Webb, A Course in Finite Group Representation Theory
      url: https://www-users.cse.umn.edu/~webb/RepBook/RepBookLatex.pdf
      locator: "§3.2, Theorem 3.2.3, and §3.3, Corollary 3.3.7, printed pp. 30 and 34 (PDF pp. 37 and 41): character orthogonality, the regular character, and the sum-of-squares formula."
    - title: Pavel Etingof, Oleg Golberg, Sebastian Hensel, Tiankai Liu, Alex Schwendner, Dmitry Vaintrob, and Elena Yudovina, Introduction to Representation Theory
      url: https://ocw.mit.edu/courses/18-712-introduction-to-representation-theory-fall-2010/24d8b3fa2ce48e48ee6c2d8d5e3562f6_MIT18_712F10_replect.pdf
      locator: "§§3.5 and 3.7, Theorem 3.8 and Proposition 3.14, PDF pp. 37–40: character and matrix-coefficient orthogonality by averaging."
verification:
  precheck: pass
---

## Statement

For every finite group $H$, let $\operatorname{Irr}_{\mathbb C}(H)$ denote the set of equivalence classes of nonzero finite-dimensional irreducible complex representations of $H$, where two representations are equivalent if an invertible linear map intertwines their $H$-actions. The **character** of a representation $\pi$ is the function $\chi_\pi(h):=\operatorname{tr}(\pi(h))$. The set $\operatorname{Irr}_{\mathbb C}(H)$ is finite and

$$\sum_{[\pi]\in\operatorname{Irr}_{\mathbb C}(H)}(\dim_{\mathbb C}\pi)^2=|H|.$$

## Statement references

[[thm-maschkes-theorem-for-finite-groups-over-fields-whose-characteristic-does-not-divide-the-group-order]]

[[def-finite-dimensional-representation-of-a-group-over-a-field]]

[[def-subrepresentation-and-irreducible-representation]]

[Peter Webb, *A Course in Finite Group Representation Theory*, §§3.2–3.3](https://www-users.cse.umn.edu/~webb/RepBook/RepBookLatex.pdf)

[Pavel Etingof et al., *Introduction to Representation Theory*, §§3.5–3.7](https://ocw.mit.edu/courses/18-712-introduction-to-representation-theory-fall-2010/24d8b3fa2ce48e48ee6c2d8d5e3562f6_MIT18_712F10_replect.pdf)

## Facts & Assumptions

**Given:** A finite group $H$ and representations over the field $\mathbb C$.

[F1] [[thm-maschkes-theorem-for-finite-groups-over-fields-whose-characteristic-does-not-divide-the-group-order]]: for a finite group over a field whose characteristic does not divide its order, every subrepresentation of a finite-dimensional representation has an invariant complement. Here $\operatorname{char}\mathbb C=0$.

[F2] [[def-finite-dimensional-representation-of-a-group-over-a-field]]: a finite-dimensional representation is a finite-dimensional vector space with a group homomorphism into its group of invertible linear maps.

[F3] [[def-subrepresentation-and-irreducible-representation]]: a subrepresentation is an invariant linear subspace, and irreducible means nonzero with no subrepresentations other than zero and the whole space.

## Proof

1.1 On the group basis of $\mathbb C[H]$, define $\lambda(h)|x\rangle=|hx\rangle$. Then $\lambda(h)\lambda(k)|x\rangle=|hkx\rangle=\lambda(hk)|x\rangle$ and $\lambda(e)=I$, so [F2] makes this a finite-dimensional representation. The regular representation is nonzero because $e\in H$. For any nonzero finite-dimensional representation, if it has no nonzero proper invariant subspace, [F3] says it is irreducible; otherwise choose such a subspace $W$ and [F1] supplies an invariant complement $U$. Both $W$ and $U$ are nonzero and have smaller dimension, so induction decomposes them into irreducibles. Applying this induction to $\mathbb C[H]$ proves that it is a finite direct sum of irreducible representations. [given, F1, F2, F3, induction]

2.1 Let $\pi:H\to\operatorname{GL}(V)$ be any irreducible representation and choose $0\ne v\in V$. Define the linear map $\Phi:\mathbb C[H]\to V$ by $\Phi(\sum_h a_h h)=\sum_h a_h\pi(h)v$. For $k\in H$, $\Phi(k\sum_h a_hh)=\sum_h a_h\pi(kh)v=\pi(k)\Phi(\sum_h a_hh)$, so $\Phi$ is equivariant. Its image contains $v=\Phi(e)$, is invariant, and therefore equals $V$ by irreducibility. By [F1], $\ker\Phi$ has an invariant complement $W$ in $\mathbb C[H]$; then $\Phi|_W$ is onto and injective, so $W\cong V$ is an irreducible summand of $\mathbb C[H]$. Consequently every irreducible representation occurs among the finitely many summands in step 1.1. [given, F1, F2, F3, step 1.1, construct]

2.2 For each irreducible representation $\pi$, choose any positive-definite inner product and average it as $\langle v,w\rangle_H:=\sum_{h\in H}\langle\pi(h)v,\pi(h)w\rangle$. This is positive definite and is $H$-invariant by reindexing the finite sum, so $\pi(h)$ is unitary and $\chi_\pi(h^{-1})=\overline{\chi_\pi(h)}$. For two irreducibles $\pi,\sigma$, define $P(T):=|H|^{-1}\sum_{h\in H}\sigma(h)T\pi(h^{-1})$ on $\operatorname{Hom}_{\mathbb C}(V_\pi,V_\sigma)$. Reindexing gives $\sigma(k)P(T)\pi(k^{-1})=P(T)$ for every $k$, so $P(T)$ intertwines the group actions; if $T$ already intertwines, every summand equals $T$. Hence $P$ is a projection with image exactly $\operatorname{Hom}_H(V_\pi,V_\sigma)$. [given, F2, step 1.1, construct, algebra]

3.1 The trace of $T\mapsto\sigma(h)T\pi(h^{-1})$ on $\operatorname{Hom}(V_\pi,V_\sigma)\cong V_\sigma\otimes V_\pi^*$ is $\chi_\sigma(h)\overline{\chi_\pi(h)}$, so $\operatorname{tr}P=|H|^{-1}\sum_h\chi_\sigma(h)\overline{\chi_\pi(h)}$; because $P$ is a projection on a finite-dimensional space, this trace equals $\dim\operatorname{im}P$. An intertwiner between irreducibles is either zero or an isomorphism because its kernel and image are invariant. An endomorphism of an irreducible complex representation is scalar: it has an eigenvalue $\alpha$, and $T-\alpha I$ has nonzero invariant kernel, so irreducibility forces $T-\alpha I=0$. Thus $\dim\operatorname{im}P$ is $1$ if $\pi\cong\sigma$ and $0$ otherwise, proving character orthogonality by the averaging calculation. [given, F2, F3, step 2.2, algebra]

4.1 The character of $\lambda$ is $\chi_\lambda(e)=|H|$ and $\chi_\lambda(h)=0$ for $h\ne e$, since left multiplication by $h\ne e$ fixes no group-basis element. Define $\langle\alpha,\beta\rangle:=|H|^{-1}\sum_h\overline{\alpha(h)}\beta(h)$. If $\lambda\cong\bigoplus_\pi m_\pi\pi$ as in step 1.1, then character additivity and the orthogonality from step 3.1 give $m_\pi=\langle\chi_\pi,\chi_\lambda\rangle=|H|^{-1}\sum_h\overline{\chi_\pi(h)}\chi_\lambda(h)=\dim\pi$. [given, F2, step 1.1, step 3.1, algebra]

5.1 Taking dimensions of the regular decomposition yields $|H|=\dim\mathbb C[H]=\sum_\pi m_\pi\dim\pi=\sum_\pi(\dim\pi)^2$. This proves the stated formula and finiteness. [given, step 1.1, step 2.1, step 4.1, algebra] ∎
