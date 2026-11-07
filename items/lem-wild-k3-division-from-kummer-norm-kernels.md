---
id: lem-wild-k3-division-from-kummer-norm-kernels
kind: lemma
title: "Wild K3 division from Kummer K2 norm kernels"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 24
deps:
  - def-axiom-of-choice
  - def-dependent-choice
  - def-milnor-k-group-of-a-field
  - lem-milnor-symbol-anticommutativity-and-repeated-entry-identities
  - thm-bass-tate-kato-norm-transfer-for-milnor-k-groups
  - lem-finite-abelian-local-milnor-k-norms-are-surjective
  - lem-all-local-roots-of-unity-annihilate-higher-milnor-classes
  - lem-complete-discrete-valuation-extension-degree-and-tame-norm
  - thm-finite-galois-extension-characterizations
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Fesenko and Vostokov, Local Fields and Their Extensions, second edition"
      url: "https://ivanfesenko.org/wp-content/uploads/2021/10/vol.pdf"
      locator: "Chapter IX, Theorem 4.11, printed pp. 313–314; this proof isolates the K3 case and keeps the K2 norm-kernel assertion explicit."
---

## Statement

Assume AC and DC. Let F be a mixed-characteristic nonarchimedean local field with finite residue field of characteristic p and μ_p⊂F. Assume explicitly that for every a∈F× with E=F(a^(1/p))≠F and any generator σ of Gal(E/F), the canonical norm on K₂^M satisfies ker(N_(E/F))=(1-σ)K₂^M(E). Then multiplication by p is an automorphism of K₃^M(F). This includes p=2. The norm-kernel hypothesis is not asserted to hold unconditionally, and no conclusion in degree above three is asserted.

## Facts & Assumptions

**Given:** F, p, the choice hypotheses and the explicit cyclic Kummer norm-kernel hypothesis in the Statement.

[F1] Canonical Milnor transfer has transitivity, Galois invariance and projection. [[thm-bass-tate-kato-norm-transfer-for-milnor-k-groups]]

[F2] Every finite abelian extension of a finite-residue local field has surjective K₂ norm, and finite extensions remain local. [[lem-finite-abelian-local-milnor-k-norms-are-surjective]] [[lem-complete-discrete-valuation-extension-degree-and-tame-norm]]

[F3] Roots of unity in such a field annihilate its Milnor K-groups in degrees at least two. [[lem-all-local-roots-of-unity-annihilate-higher-milnor-classes]]

[F4] Milnor groups have the multilinear Steinberg presentation, symbols anticommute, and finite separable splitting fields are Galois. [[def-milnor-k-group-of-a-field]] [[lem-milnor-symbol-anticommutativity-and-repeated-entry-identities]] [[thm-finite-galois-extension-characterizations]]

## Proof

1.1 For each a∈F× choose α with α^p=a and put E_a=F(α). Since μ_p⊂F and characteristic is zero, E_a/F is a cyclic Galois extension of degree one or p. Given u∈K₂^M(F), choose y∈K₂^M(E_a) with N(y)=u by [F2], and put D_a(u)=N({α}y). If E_a has degree p, the given kernel equality makes two choices of y differ by (1-σ)z. As the norm is Galois-invariant, their outputs differ by N({α/(σ^(-1)α)}z)={α/(σ^(-1)α)}N(z)=0 by [F1] and [F3]. When E_a=F, y=u is unique. Replacing α by αζ for ζ∈μ_p changes the output by {ζ}u=0. Therefore D_a is a well-defined homomorphism in u. [F1, F2, F3, F4, given, choose, construct, algebra]

2.1 The map a↦D_a(u) is multiplicative in a. For a,b∈F× choose roots α,β and let L=F(α,β). Its Galois group embeds in μ_p×μ_p, so L/F is finite abelian; choose z∈K₂^M(L) with N_(L/F)z=u by [F2]. The norm of z to E_a is a valid lift of u, so transitivity and projection give D_a(u)=N_(L/F)({α}z). The same holds for b, and αβ is a pth root of ab, giving D_(ab)(u)=N_(L/F)({αβ}z)=D_a(u)+D_b(u). This includes trivial subextensions. [F1, F2, F4, step 1.1, given, choose, construct, algebra]

3.1 Define Φ(a,b,c)=D_a({b,c}). Steps 1.1–2.1 and [F4] make Φ trilinear. If b+c=1 then {b,c}=0. If a+b=1 and E_a/F has degree p, put y={1-α,c} in K₂^M(E_a). Its norm is {N(1-α),c}={1-a,c} by projection, since the conjugates of α are ζ^iα and product_i(1-ζ^iα)=1-α^p. Thus Φ(a,1-a,c)=N({α,1-α,c})=0 by Steinberg. If E_a=F, the same product identity gives Φ(a,1-a,c)=sum_i {α,1-ζ^iα,c}; each summand equals -{ζ^i,1-ζ^iα,c} by Steinberg and is zero by [F3]. If a+c=1, anti-commutativity in K₂ gives Φ(a,b,1-a)=-Φ(a,1-a,b)=0. Thus Φ satisfies all three pairwise Steinberg relations. [F1, F3, F4, step 1.1, step 2.1, given, algebra, cases]

4.1 The Milnor presentation [F4] therefore makes Φ descend to a homomorphism D:K₃^M(F)->K₃^M(F). For a symbol, pD{a,b,c}=N({α^p}y)={a}N(y)={a,b,c} by projection. Symbols generate, so pD=id. Since D is a group homomorphism, Dp=pD=id as well. Thus multiplication by p is bijective. The calculation uses the explicit norm-kernel hypothesis in step 1.1 and does not establish it. [F1, F4, step 1.1, step 3.1, algebra] ∎
