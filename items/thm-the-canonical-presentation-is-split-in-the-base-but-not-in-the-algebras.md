---
id: thm-the-canonical-presentation-is-split-in-the-base-but-not-in-the-algebras
kind: theorem
title: "The canonical algebra presentation is split in the base, but its canonical splittings need not be algebra homomorphisms"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-every-algebra-is-the-coequalizer-of-a-canonical-pair-of-free-algebras, def-split-coequalizer, thm-the-free-monoid-monad-and-its-algebras-are-monoids]
aliases: []
landmark: false
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
    - title: "E. Riehl, Category Theory in Context, 2nd ed., Example 5.4.7"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: null
---

## Statement

For every $T$-algebra $(A,a)$, the underlying canonical presentation

$$T^2A\mathrel{\substack{\xrightarrow{T(a)}\\[-3pt]\xrightarrow[\mu_A]{}}}TA\xrightarrow{a}A$$

is a split coequalizer in $\mathcal C$, with $t=\eta_{TA}:TA\to T^2A$ and $s=\eta_A:A\to TA$. These canonical splitting maps need not be algebra homomorphisms, so the presentation need not be split in $\mathcal C^T$.

## Facts & Assumptions

**Given:** A monad $(T,\eta,\mu)$ and a $T$-algebra $(A,a)$.

[L1] Every $T$-algebra $(A,a)$ is the coequalizer in $\mathcal C^T$ of the canonical pair of free algebras $T(a),\mu_A:T^2A\rightrightarrows TA$ ([[thm-every-algebra-is-the-coequalizer-of-a-canonical-pair-of-free-algebras]]).

[L2] A split coequalizer diagram has maps $f,g:x\rightrightarrows y$, $h:y\to z$, $t:y\to x$, and $s:z\to y$ satisfying $hf=hg$, $hs=1_z$, $gt=1_y$, and $ft=sh$ ([[def-split-coequalizer]]).

[L3] The free-monoid monad inserts letters as one-letter words and flattens words of words by concatenation; its Eilenberg–Moore category is isomorphic over $\mathbf{Set}$ to the category of monoids ([[thm-the-free-monoid-monad-and-its-algebras-are-monoids]]).

## Proof

**Proof technique:** direct.

1.1 The algebra law gives $aT(a)=a\mu_A$ and $a\eta_A=1_A$. The monad unit law gives $\mu_A\eta_{TA}=1_{TA}$, while naturality of $\eta$ gives $T(a)\eta_{TA}=\eta_Aa$. These are exactly the four equations of [L2] for $t=\eta_{TA}$ and $s=\eta_A$. [L1, L2, algebra]

1.2 For the free-monoid monad, take the monoid $M=\{1,e\}$ with $e^2=e$. On the two-letter word $[e,e]$, the composite $\eta_Ma$ first multiplies and gives the one-letter word $[e]$, whereas $\mu_MT(\eta_M)$ gives the two-letter word $[e,e]$. [L3, construct]

2.1 Therefore the underlying canonical presentation is split in $\mathcal C$. [step 1.1, L2]

2.2 The equality $\eta_Ma=\mu_MT(\eta_M)$ is precisely the algebra-homomorphism equation for $\eta_M:(M,a)\to(TM,\mu_M)$, and step 1.2 shows it fails. [step 1.2, L3, algebra]

2.3 For that same algebra no algebra section exists at all. Under the isomorphism over $\mathbf{Set}$ of [L3], an algebra map $s:(M,a)\to(TM,\mu_M)$ with $as=1_M$ is a monoid homomorphism $\sigma$ from $M$ to the free monoid on the set $M$ whose composite with word evaluation is the identity. Concatenation adds word lengths, so $w^2=w$ forces $|w|=0$ and the empty word is the only idempotent of that free monoid; since $e^2=e$ in $M$, $\sigma(e)$ is the empty word and evaluates to $1\ne e$. Hence the presentation of $(M,a)$ is not split in $\mathcal C^T$. [step 1.2, L3, algebra]

3.1 Thus the canonical splittings always exist in the base by step 2.1, the canonical ones need not lift to algebra homomorphisms by step 2.2, and by step 2.3 the presentation itself need not be split in $\mathcal C^T$. No failure is asserted for every monad or every algebra. [step 2.1, step 2.2, step 2.3] ∎
