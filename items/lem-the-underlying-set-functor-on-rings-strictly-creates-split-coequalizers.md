---
id: lem-the-underlying-set-functor-on-rings-strictly-creates-split-coequalizers
kind: lemma
title: "The underlying-set functor on unital rings strictly creates split coequalizers"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-split-coequalizer, def-u-split-coequalizer-and-creation-of-their-coequalizers, def-ring, def-ring-homomorphism, prop-rings-and-homomorphisms-form-category-ring, thm-a-split-coequalizer-is-a-coequalizer-and-is-absolute]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
sources:
  scraped: []
  references:
    - title: "D. Mehrle, Category Theory Part III, Example 5.20(b)"
      url: "https://pi.math.cornell.edu/~dmehrle/notes/partiii/cattheory_partiii_notes.pdf"
    - title: "E. Riehl, Category Theory in Context, 2nd ed., Corollary 5.5.3"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: null
---

## Statement

The underlying-set functor $U:\mathbf{Ring}\to\mathbf{Set}$ strictly creates coequalizers of $U$-split pairs of unital ring homomorphisms.

## Facts & Assumptions

**Given:** Ring homomorphisms $f,g:A\rightrightarrows B$ and a supplied split coequalizer $q:UB\to Q$ of their underlying functions.

[L1] A split coequalizer has splitting maps satisfying $qf=qg$, $qs=1_Q$, $gt=1_B$, and $ft=sq$ ([[def-split-coequalizer]]).

[L2] A ring has associative and commutative addition, associative multiplication, two-sided additive and multiplicative identities, additive inverses, and multiplication distributing over addition on both sides ([[def-ring]]).

[L3] A ring homomorphism preserves addition, multiplication, and the multiplicative identity ([[def-ring-homomorphism]]).

[L4] Every split coequalizer is a coequalizer and is preserved by every functor ([[thm-a-split-coequalizer-is-a-coequalizer-and-is-absolute]]).

## Proof

**Proof technique:** direct.

1.1 By [L4], each finite Cartesian power $q^n$ is the coequalizer of $f^n,g^n$. [L1, L4, given]

2.1 Each basic ring operation on $B$, followed by $q$, coequalizes the appropriate finite powers of $f$ and $g$. It therefore descends uniquely to $Q$; explicitly $0_Q=q(0_B)$, $1_Q=q(1_B)$, and negation, addition, and multiplication are the unique operations making $q$ preserve them. [step 1.1, construct]

3.1 Each ring axiom in [L2] becomes true after precomposition with the relevant surjection $q^n$, because it then becomes the corresponding axiom in $B$. Hence the descended operations make $Q$ a unital ring, including the zero-ring case. [step 2.1, L2, algebra]

4.1 By construction $q$ preserves addition, multiplication, and one, so it is a ring homomorphism by [L3]. [step 2.1, step 3.1, L3]

5.1 If a ring homomorphism $r:B\to C$ coequalizes $f,g$, the set coequalizer gives a unique $u:Q\to UC$ with $uq=r$. Precomposing the preservation equations for $u$ with the appropriate $q^n$ reduces them to those for $r$, so $u$ is a ring homomorphism and is the unique algebraic factor. [step 4.1, L3]

6.1 The descended operations are uniquely forced by the requirement that the supplied $q$ be a ring homomorphism. Thus the lift has exactly the same apex and legs and is unique, which is strict creation. [step 2.1, step 5.1] ∎
