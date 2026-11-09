---
id: lem-author-79117e1d72ed-bigraded-ring
kind: lemma
title: Natural unital bigraded motivic ring with negative zero extension
status: published
domain: mathematics
deps:
  - def-motivic-cohomology
  - def-multiplicative-filtered-spectrum
  - thm-author-79117e1d72ed-em-multiplication-c1
dependency_roles:
  def-motivic-cohomology: mathematical-premise
  def-multiplicative-filtered-spectrum: mathematical-premise
  thm-author-79117e1d72ed-em-multiplication-c1: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 10
---

## Statement
Let $k$ be any field. On qcqs $k$-schemes set $C_b(X)=\mathbb Z(b)_{\rm mot}(X)$ for $b\geq0$, and explicitly set $C_b(X)=0$ for $b<0$. Define $H^{a,b}(X)=H^a(C_b(X))$ for every pair of integers. The direct sum $H^{*,*}(X)$ is naturally an associative unital ring, with products of bidegrees $(a,b)+(c,d)=(a+c,b+d)$, unit in $(0,0)$, and $xy=(-1)^{ac}yx$. Pullbacks are contravariantly functorial unital ring homomorphisms. This extends the supplied groups without modifying their nonnegative weights.

## Facts & Assumptions
[F1] [[thm-author-79117e1d72ed-em-multiplication-c1]] supplies the natural commutative graded spectrum $G_b(X)=C_b(X)[2b]$, its unit and products; negative pieces are zero.

[F2] [[def-motivic-cohomology]] fixes the specified complexes and cohomology groups; [[def-multiplicative-filtered-spectrum]] specifies the associated graded products. A cochain complex $C$ has underlying spectrum with $H^a(C)=\pi_{-a}C$; the symmetry on $S^u\wedge S^v$ has sign $(-1)^{uv}$.

## Proof
**Given:** $k,X$ as stated, all integer bidegrees.

**Goal:** Construct and justify the ring and pullbacks.

1.1 For $b\geq0$ identify $H^{a,b}(X)=\pi_{2b-a}G_b(X)$ by [F1]. Multiplying representatives in homotopy groups with the actual graded product $G_b\wedge G_d\to G_{b+d}$ defines the stated bilinear product. If either weight is negative its group is zero; define that product to be zero. [F1, F2, construct]

2.1 The unit $\mathbb S\to G_0$ gives $1_X\in H^{0,0}(X)$. Associativity and the unit identities follow by applying homotopy groups to the coherent diagrams in [F1]. Swapping homogeneous classes contributes $(-1)^{(2b-a)(2d-c)}=(-1)^{ac}$; hence the required graded commutativity follows. Cases with a zero negative-weight factor satisfy these identities as well. Finite-support sums define the direct-sum ring. [F1, F2, step 1.1]

3.1 Each morphism of schemes induces a map of these unital graded algebra objects. Its homotopy-group maps preserve the products, unit, identities and composites. The unique maps on the zero pieces preserve these assertions for negative weights. Restriction from the prime subfield to $k$ is composition of contravariant functors, so all these claims hold for arbitrary $k$. [F1, F2, step 1.1, step 2.1] ∎
