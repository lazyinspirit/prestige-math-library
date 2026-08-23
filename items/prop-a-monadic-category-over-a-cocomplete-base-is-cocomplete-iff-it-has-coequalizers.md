---
id: prop-a-monadic-category-over-a-cocomplete-base-is-cocomplete-iff-it-has-coequalizers
kind: proposition
title: "Over a cocomplete base, a monadic category is cocomplete exactly when it has coequalizers"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-monadic-and-strictly-monadic-functor, def-small-finite-and-large-limits-completeness-and-cocompleteness, def-equalizers-and-coequalizers, def-free-t-algebra, thm-every-algebra-is-the-coequalizer-of-a-canonical-pair-of-free-algebras, thm-the-eilenberg-moore-adjunction-induces-the-given-monad, cor-left-adjoints-preserve-colimits, thm-small-colimits-from-coproducts-and-coequalizers, prop-equivalences-preserve-reflect-and-create-limits-and-colimits]
aliases: []
landmark: true
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
    - title: "E. Riehl, Category Theory in Context, 2nd ed., Proposition 5.6.11"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: null
---

## Statement

Let $U:\mathcal A\to\mathcal C$ be monadic and suppose $\mathcal C$ is cocomplete. Then $\mathcal A$ is cocomplete if and only if $\mathcal A$ has coequalizers.

## Facts & Assumptions

**Given:** A monadic functor $U:\mathcal A\to\mathcal C$ with cocomplete base $\mathcal C$ and induced monad $T$.

[L1] A category is cocomplete when every small diagram in it has a colimit ([[def-small-finite-and-large-limits-completeness-and-cocompleteness]]).

[L2] Once the required coproducts and a coequalizer between them exist, every small colimit is constructed by the standard coproduct-coequalizer formula ([[thm-small-colimits-from-coproducts-and-coequalizers]]).

[L3] An equivalence of categories preserves and reflects every existing colimit ([[prop-equivalences-preserve-reflect-and-create-limits-and-colimits]]).

[L4] Every $T$-algebra $(A,a)$ is the coequalizer in $\mathcal C^T$ of the canonical pair $T(a),\mu_A:T^2A\rightrightarrows TA$ ([[thm-every-algebra-is-the-coequalizer-of-a-canonical-pair-of-free-algebras]]).

[L5] The free $T$-algebra functor $F^T$ is left adjoint to the Eilenberg–Moore forgetful functor ([[thm-the-eilenberg-moore-adjunction-induces-the-given-monad]]).

[L6] Left adjoints preserve every colimit that exists ([[cor-left-adjoints-preserve-colimits]]).

## Proof

**Proof technique:** direct.

1.1 For the forward direction, if $\mathcal A$ is cocomplete then it has the colimit of every parallel pair, hence every coequalizer. [L1]

1.2 For the reverse direction, replace $\mathcal A$ across its monadic comparison equivalence by $\mathcal C^T$. Given a small family $(A_i,a_i)$, [L5] and [L6] identify the coproducts of free algebras $$P:=\coprod_iF^T(TA_i),\qquad Q:=\coprod_iF^T(A_i)$$ with free algebras on the corresponding base coproducts. If $j_i$ and $k_i$ are their coproduct injections, define $\alpha,\beta:P\rightrightarrows Q$ by $$\alpha j_i=k_iT(a_i),\qquad \beta j_i=k_i\mu_{A_i}.$$ By hypothesis this pair has a coequalizer $q:Q\to R$ in $\mathcal C^T$. The construction also applies to the empty family. [L5, L6, construct]

2.1 For every $i$, the map $qk_i$ coequalizes the canonical pair for $(A_i,a_i)$. Its universal property [L4] gives a unique algebra map $\iota_i:(A_i,a_i)\to R$ satisfying $\iota_i a_i=qk_i$. [step 1.2, L4]

3.1 Given algebra maps $r_i:(A_i,a_i)\to(D,d)$, the maps $r_ia_i:F^T(A_i)\to(D,d)$ assemble to a map $r:Q\to(D,d)$. Each coequalizes its canonical pair by [L4], so $r\alpha=r\beta$ and there is a unique $\bar r:R\to(D,d)$ with $\bar rq=r$. Then $\bar r\iota_i=r_i$ because the two maps agree after the epimorphism $a_i$, and uniqueness follows because the $qk_i=\iota_i a_i$ are jointly epimorphic. Thus $(R,(\iota_i))$ is the coproduct of the family. [step 1.2, step 2.1, L4, construct]

4.1 For the reverse direction, $\mathcal C^T$ now has all small coproducts by step 3.1 and all coequalizers by hypothesis, so [L2] constructs every small colimit. [step 3.1, L2]

5.1 For the reverse direction, transport these colimits back across the comparison equivalence by [L3]. Thus $\mathcal A$ is cocomplete. [step 4.1, L3]

6.1 Step 1.1 proves the forward implication, while steps 1.2 to 5.1 prove the reverse implication, establishing the biconditional. [step 1.1, step 5.1] ∎
