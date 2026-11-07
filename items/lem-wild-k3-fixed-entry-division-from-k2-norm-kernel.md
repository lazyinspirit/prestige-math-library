---
id: lem-wild-k3-fixed-entry-division-from-k2-norm-kernel
kind: lemma
title: "A fixed-entry K3 division map from a K2 norm kernel"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 23
deps:
  - def-axiom-of-choice
  - def-dependent-choice
  - def-milnor-k-group-of-a-field
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
      locator: "Chapter IX, Theorem 4.11, printed pp. 313–314; fixed-entry construction and choice independence only."
---

## Statement

Assume AC and DC. Let F be a mixed-characteristic nonarchimedean local field with finite residue field of characteristic p, assume μ_p⊂F, and fix a∈F×. Choose α with α^p=a and put E=F(α). If E≠F, assume explicitly that for a generator σ of Gal(E/F), the canonical norm satisfies ker(N:K₂^M(E)->K₂^M(F))=(1-σ)K₂^M(E). Then there is a canonical homomorphism D_a:K₂^M(F)->K₃^M(F) such that

    p D_a(u) = {a}·u

for every u∈K₂^M(F). It is given by D_a(u)=N_(E/F)({α}·y), where N_(E/F)y=u. The value is independent of the chosen α and y. When E=F, N is the identity. This is a fixed-entry construction: it does not assert that D_a is multilinear in a, that it respects cross-entry Steinberg relations, or that multiplication by p on K₃^M(F) is injective.

## Facts & Assumptions

**Given:** The fields, p, a, root α, choice hypotheses and explicit norm-kernel assumption in the Statement.

[F1] The canonical Milnor norm is transitive, Galois-invariant and satisfies projection and the field norm in degree one. [[thm-bass-tate-kato-norm-transfer-for-milnor-k-groups]]

[F2] Finite abelian local extensions have surjective K₂ norm, and finite local extensions remain finite-residue local fields. [[lem-finite-abelian-local-milnor-k-norms-are-surjective]] [[lem-complete-discrete-valuation-extension-degree-and-tame-norm]]

[F3] Every root of unity in a finite-residue local field annihilates its Milnor groups in degree at least two. [[lem-all-local-roots-of-unity-annihilate-higher-milnor-classes]]

[F4] Milnor symbols are multilinear, and a finite separable splitting field is Galois. [[def-milnor-k-group-of-a-field]] [[thm-finite-galois-extension-characterizations]]

## Proof

1.1 All roots of X^p-a lie in E because μ_p⊂F, and the polynomial is separable in characteristic zero. Thus E/F is finite Galois by [F4]. The map τ↦τ(α)/α injects its Galois group into μ_p, so the extension has degree one or p and is cyclic. By [F2], every u∈K₂^M(F) has a norm preimage y in K₂^M(E). Define D_a(u)=N({α}·y). [F2, F4, given, construct, algebra]

2.1 Suppose E≠F and replace y by another norm preimage y'. The hypothesis gives y-y'=(1-σ)z. Galois invariance of the norm and entrywise action yield N({α}(1-σ)z)=N({α/(σ^(-1)α)}z). The ratio is a pth root of unity in F, so projection and [F3] make this {α/(σ^(-1)α)}·N(z)=0 in K₃^M(F). Thus the result is independent of y. For E=F the preimage is unique. [F1, F3, step 1.1, given, algebra]

3.1 Any other pth root of a is αζ with ζ∈μ_p⊂F and generates the same E. Its output differs by N({ζ}y)={ζ}N(y), which vanishes by [F1] and [F3]. Hence D_a is independent of α as well. If u,u' have preimages y,y', then y+y' is a preimage of u+u', so the already proved independence makes D_a additive. [F1, F3, step 1.1, step 2.1, given, algebra]

4.1 Multiplying the defining expression by p and using p{α}={α^p}={a} gives pD_a(u)=N(res{a}·y)={a}·N(y)={a}·u by projection. This remains valid when E=F and p=2. The construction does not compare different choices of a, so no global inverse of p or cross-entry relation is inferred. [F1, F4, step 1.1, step 3.1, given, algebra] ∎
