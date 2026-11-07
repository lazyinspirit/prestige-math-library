---
id: lem-finite-two-adic-skew-fixed-line
kind: lemma
title: "A fixed primitive line kills odd-primary actions on a two-adic skew plane"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 6
deps: []
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
---

## Statement

Let p be an odd prime, let R be a finite commutative local ring with residue field k of characteristic two and nilpotent maximal ideal m, and let V be a free R-module of rank two. Suppose V carries a nondegenerate R-bilinear skew-symmetric form B, a primitive vector v, and an R-linear action of a pro-p group P by form-preserving automorphisms fixing v, with continuous action on the finite discrete module V. Then P acts trivially on V. No alternation hypothesis on B is required; rank two and nondegeneracy are explicit hypotheses.

## Facts & Assumptions

**Given:** The finite local ring, its residue field and nilpotent maximal ideal, the free rank-two module, skew-symmetric perfect form, primitive fixed vector and continuous pro-p action in the Statement.

## Proof

1.1 Reduce modulo m. The image vbar is nonzero because v is primitive, and the form remains nondegenerate because its Gram determinant is a unit. Since minus one equals one in k, its reduction is symmetric. Complete vbar to a basis (vbar,wbar), with Gram matrix [[a,b],[b,e]] and determinant ae-b² nonzero. An automorphism fixing vbar has matrix [[1,c],[0,d]] with d nonzero. Form invariance gives ac+bd=b and ac²+ed²=e. [given, choose, algebra]

1.2 The kernel of GL(V)→GL(V/mV) is a finite 2-group. Indeed, with m^N=0, its filtration by 1+M₂(m^i) has successive quotients injecting into the additive groups M₂(m^i/m^(i+1)). Those groups have characteristic two because 2 belongs to m. Each successive quotient is therefore a finite 2-group, and so is the kernel. [given, algebra]

2.1 If a=0, nondegeneracy gives b nonzero; the first equation gives d=1, and every such isometry lies in the additive group of matrices [[1,c],[0,1]], a finite 2-group. If a is nonzero, the first equation gives c=(b/a)(1-d). Substitution in the second gives (b²/a+e)(1-d²)=0. Nondegeneracy makes b²/a+e nonzero. In characteristic two, d²=1 forces d=1, then c=0. Thus in either case the stabilizer of vbar in the isometry group is a 2-group. [step 1.1, algebra]

3.1 The form-preserving stabilizer of v maps into the 2-group of step 2.1 with kernel contained in the 2-group of step 1.2; it is consequently a finite 2-group. Continuity makes the image of the pro-p group P a finite p-group. As p is odd, a finite group that is both a p-group and a 2-group is trivial. Hence P acts trivially. No division by two and no alternating-form assertion were used. [given, step 2.1, step 1.2, algebra] ∎
