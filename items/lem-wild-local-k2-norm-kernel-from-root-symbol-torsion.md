---
id: lem-wild-local-k2-norm-kernel-from-root-symbol-torsion
kind: lemma
title: "A local K2 norm kernel from the root-symbol torsion hypothesis"
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
  - lem-local-field-milnor-k2-quotient-by-the-residue-prime
  - lem-complete-discrete-valuation-extension-degree-and-tame-norm
  - thm-hilbert-90-for-finite-galois-extension
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Fesenko and Vostokov, Local Fields and Their Extensions, second edition"
      url: "https://ivanfesenko.org/wp-content/uploads/2021/10/vol.pdf"
      locator: "Chapter IX, Proposition 4.9, printed pp. 312–313. The torsion classification used there is retained here as an explicit hypothesis."
---

## Statement

Assume AC and DC. Let F be a mixed-characteristic nonarchimedean local field with finite residue field of characteristic p, and suppose F contains a primitive pth root ζ. Let E/F be a cyclic extension of degree p with generator σ. Assume explicitly the following root-symbol torsion property for this F and ζ: every element z in K₂^M(F) with pz=0 has the form {ζ,a} for some a in F×. Then the canonical Milnor norm satisfies

    ker(N_(E/F):K₂^M(E)->K₂^M(F)) = (1-σ)K₂^M(E).

The assertion includes p=2. The root-symbol property is a hypothesis, not a conclusion, and no injectivity of p on higher Milnor groups is claimed.

## Facts & Assumptions

**Given:** AC, DC, the field F, prime p, primitive ζ, cyclic extension E/F and the explicit root-symbol torsion hypothesis in the Statement.

[F1] Canonical Milnor transfer satisfies projection, norm after restriction equals extension degree, and restriction after norm is the sum of Galois conjugates. [[thm-bass-tate-kato-norm-transfer-for-milnor-k-groups]]

[F2] Every finite abelian extension of a finite-residue local field has surjective norm on K₂^M. [[lem-finite-abelian-local-milnor-k-norms-are-surjective]]

[F3] K₂^M of a finite-residue local field containing a nontrivial pth root has quotient of order p modulo p; finite extensions remain finite-residue local fields. [[lem-local-field-milnor-k2-quotient-by-the-residue-prime]] [[lem-complete-discrete-valuation-extension-degree-and-tame-norm]]

[F4] Hilbert 90 for a finite Galois field extension identifies every multiplicative 1-cocycle with a coboundary. [[thm-hilbert-90-for-finite-galois-extension]]

[F5] Milnor symbols are multilinear and field automorphisms act entrywise. [[def-milnor-k-group-of-a-field]]

## Proof

1.1 Both F and E contain ζ, and E remains a finite-residue local field by [F3]. Consequently K₂^M(F)/p and K₂^M(E)/p each have order p. The norm is onto by [F2], hence its induced homomorphism between these quotients is an isomorphism. If x lies in the norm kernel, its class modulo p therefore vanishes, so x=p y for some y in K₂^M(E). [F2, F3, given, construct, algebra]

2.1 Since N(x)=pN(y)=0, the explicit torsion hypothesis gives N(y)={ζ,a} for some a in F×. Define a 1-cocycle by c(σ^i)=ζ^(-i). By [F4] choose β in E× with σ(β)/β=ζ^(-1); consequently β/σ(β)=ζ and β^p belongs to F×. Applying restriction to N(y) and using [F1] gives sum_(i=0)^(p-1) σ^i(y)={β/σ(β),a}=(1-σ){β,a}. [F1, F4, F5, step 1.1, given, choose, construct, algebra]

3.1 In the integral group ring of the cyclic group, p-(1+σ+...+σ^(p-1)) = (1-σ) sum_(i=0)^(p-2) (p-1-i)σ^i. Combining this identity with step 2.1 yields x=p y=(1-σ)(sum_(i=0)^(p-2)(p-1-i)σ^i y+{β,a}). Thus every norm-kernel element lies in (1-σ)K₂^M(E). The reverse inclusion follows because the norm is invariant under σ, which is part of the canonical Galois transfer in [F1]. The same calculation works for p=2 without dividing by 2. [F1, step 1.1, step 2.1, algebra] ∎
