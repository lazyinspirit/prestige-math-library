---
id: lem-finite-projective-modules-and-etale-algebras-patch-on-milnor-squares
kind: lemma
title: Finite algebra patching on Milnor squares
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps: []
justified_by: []
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
  - title: The Stacks Project, tag 0D2G
    url: https://stacks.math.columbia.edu/tag/0D2G
    locator: Section15.6, Lemma15.6.9 full displayed proof read; linked15.6.7–8 not read here. Local finite stabilization proof is bound separately.
proof_strategy: direct
axiom_use: Finite algebraic stabilization and gluing only; no choice axiom is assumed.
---

## Statement

For a fibre product R=B×_C D with B→C surjective, finite projective modules and finite-etale algebras are equivalent to their two base changes with overlap isomorphism. Neither map out of R is required flat.

## Facts & Assumptions

**Given:** The rings, maps, finite presentations, specified elements, witnesses and other data quantified in the Statement. All displayed factor maps preserve the specified target map.



## Proof

**Proof technique:** finite equations, the specified local constructions and the explicit supplier interfaces.

1.1 Fix finite complements `Q_B,Q_D` with `P_B direct_sum Q_B=B^a` and `P_D direct_sum Q_D=D^b`. There is a complementary patching triple with modules `Q_B direct_sum B^b` and `D^a direct_sum Q_D`. On `C` its identification is the composite `Q_B,C direct_sum (P_D,C direct_sum Q_D,C)` `-> (Q_B,C direct_sum P_B,C) direct_sum Q_D,C` `-> C^a direct_sum Q_D,C`, using `phi^(-1)` and the fixed complement decompositions. Adding this triple to the original one makes both modules free of the same rank `N=a+b`. In these specified free frames its gluing is a matrix `g in GL_N(C)`. [given, construct, algebra]

2.1 Add the free triple glued by `g^(-1)`. The total gluing matrix is `diag(g,g^(-1))`. The identity `diag(g,g^(-1)) = [1 g;0 1] [1 0;-g^(-1) 1] [1 g;0 1] [0 -1;1 0]` is verified by multiplying the four block matrices. Because `B -> C` is surjective, lift the finitely many entries of `g` and `g^(-1)` to `B`. Each of the four resulting block matrices over `B` is invertible, even though the chosen lifts of `g` and `g^(-1)` individually need not be invertible. Their product lifts the displayed diagonal matrix. Changing the `B`-frame by this product makes the total gluing the identity. Its fibre-product module is therefore `R^(2N)`. [step 1.1, given, construct, algebra]

3.1 The projection onto the original triple is a compatible idempotent on this free patched triple. It therefore gives an idempotent matrix over `R`: entries are exactly pairs of matrix entries over `B,D` having the same image in `C`. Its image is the original fibre-product module `P`, so `P` is finite projective. Base change of a split idempotent preserves its image; thus the natural maps `B tensor_R P -> P_B` and `D tensor_R P -> P_D` are isomorphisms. This proves effectiveness without invoking locality at arbitrary maximal ideals or descent for a nonflat cover. [step 2.1, given, construct, algebra]

4.1 Conversely the sequence `0 -> R -> B direct_sum D -> C -> 0` is exact, the final surjectivity following from `B -> C`. A finite projective module, being the image of a split finite idempotent, preserves this kernel calculation under tensor product. It is therefore recovered as the fibre product of its base changes. Compatible pairs of maps act on the fibre products, and the same idempotent calculation shows that all maps are recovered uniquely. This gives the stated category equivalence, not merely existence of some projective module. [step 3.1, given, construct, algebra]

5.1 Suppose the triple is one of commutative unital algebras. Its fibre product `E` is a commutative unital `R`-algebra under componentwise operations. Steps 1.1–3.1 make its module finite projective and gives algebra isomorphisms after both base changes. A finite projective algebra is finitely presented as an algebra: choose finite module generators and their finite presentation, impose the finitely many multiplication constants and unit equation, reduce every monomial by these equations, and use the module presentation for the remaining linear relations. Thus its differentials are finite and commute with base change. [step 4.1, given, construct, algebra]

6.1 The two base changes are jointly conservative on **all modules**, by an explicit ideal calculation. Write `K=ker(B -> C)`, identified with `ker(R -> D)` via `k -> (k,0)`. It is a `B`-module. If an `R`-module `Q` has `B tensor_R Q=0`, then `K tensor_R Q = K tensor_B (B tensor_R Q)=0`, so `KQ=0`. If also `D tensor_R Q=Q/KQ=0`, then `Q=0`. Here `R -> D` is surjective because `B -> C` is. No flatness is used. [step 5.1, given, construct, algebra]

7.1 If `E_B,E_D` are finite etale, base change of `Omega_(E/R)` to each side is zero. It is zero by step 6.1. Together with finite projectivity and finite presentation this proves that `E` is finite etale. Its multiplication and unit are the actual componentwise ones, and all algebra maps descend by step 4.1. Conversely a finite etale algebra is recovered by step 4.1 and its two base changes remain finite etale. This proves the finite-etale equivalence. [step 6.1, given, construct, algebra]

8.1 For an injection `R -> B` and a common ideal `K` of `R` and `B`, there is an exact conductor square `R = B x_(B/K) (R/K)`. Indeed a pair whose residues agree is `b=r+k`, with `k in K subset R`, so comes from `R`; injectivity gives uniqueness. Thus steps 1.1–7.1 patch finite etale algebras on a finite normalization and its conductor subscheme once those objects and the overlap isomorphism have actually been constructed. [step 7.1, given, construct, algebra] ∎

## Source and authoring record

This is a local reconstruction from the exact source parts recorded in `native146-helper-carriers-v1/author-source-map.json`. The cited Stacks locators document the construction; no external theorem is imported. Earlier partial-status research files and all frozen histories remain unchanged. Completion and readiness are tracked in the run’s item record.
