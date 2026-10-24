---
id: thm-becks-monadicity-theorem
kind: theorem
title: "Beck's monadicity theorem in data-supplied form"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-monadic-and-strictly-monadic-functor, def-u-split-coequalizer-and-creation-of-their-coequalizers, thm-the-forgetful-functor-from-eilenberg-moore-strictly-creates-coequalizers-of-u-t-split-pairs, lem-created-canonical-presentations-give-a-quasi-inverse-to-the-comparison-functor, prop-equivalences-preserve-reflect-and-create-limits-and-colimits]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
  audited: 2026-08-24
sources:
  scraped: []
  references:
    - title: "E. Riehl, Category Theory in Context, 2nd ed., Theorem 5.5.1"
      url: "https://emilyriehl.github.io/files/context.pdf"
    - title: "D. Mehrle, Category Theory Part III, Theorem 5.16"
      url: "https://pi.math.cornell.edu/~dmehrle/notes/partiii/cattheory_partiii_notes.pdf"
pipeline_run: null
---

## Statement

Let $U:\mathcal D\to\mathcal C$ be a right adjoint.

1. If $U$ is monadic, then it creates coequalizers of $U$-split pairs.
2. Conversely, suppose $U$ creates coequalizers of $U$-split pairs and, for every algebra of the induced monad, a specific created coequalizer of its lifted canonical pair is supplied. Then $U$ is monadic.

Here monadic means that the comparison functor is an equivalence, and creation is ordinary isomorphism-invariant creation, not strict creation. The supplied family in the converse is data; it is not manufactured by global choice.

## Facts & Assumptions

**Given:** A right adjoint $U:\mathcal D\to\mathcal C$, a left adjoint $F$, the induced monad $T=UF$, and comparison functor $K:\mathcal D\to\mathcal C^T$.

[L1] The functor $U$ is monadic when its comparison functor $K$ is an equivalence of categories ([[def-monadic-and-strictly-monadic-functor]]).

[L2] The Eilenberg–Moore forgetful functor strictly creates coequalizers of $U^T$-split pairs ([[thm-the-forgetful-functor-from-eilenberg-moore-strictly-creates-coequalizers-of-u-t-split-pairs]]).

[L3] If $U$ creates coequalizers of $U$-split pairs and a created coequalizer is supplied for every lifted canonical algebra pair, those supplied presentations give a quasi-inverse to the comparison functor ([[lem-created-canonical-presentations-give-a-quasi-inverse-to-the-comparison-functor]]).

[L4] An equivalence of categories preserves, reflects, and creates existing colimits in the ordinary isomorphism-invariant sense ([[prop-equivalences-preserve-reflect-and-create-limits-and-colimits]]).

## Proof

**Proof technique:** direct.

1.1 For the forward direction, suppose $U$ is monadic. Then $K$ is an equivalence by [L1] and $U=U^TK$. Transporting the strict-creation result [L2] across $K$ by [L4] shows that $U$ creates coequalizers of $U$-split pairs in the ordinary sense. [L1, L2, L4]

1.2 For the converse, suppose $U$ creates coequalizers of $U$-split pairs and the stated family of created canonical coequalizers is supplied. By [L3], those data define a quasi-inverse to $K$. [L3, given]

2.1 A functor with a quasi-inverse and the two natural isomorphisms is an equivalence, so $K$ is an equivalence and $U$ is monadic by [L1]. [step 1.2, L1]

3.1 Step 1.1 proves the monadic-to-creation implication, while steps 1.2 and 2.1 prove the data-supplied converse. [step 1.1, step 2.1] ∎
