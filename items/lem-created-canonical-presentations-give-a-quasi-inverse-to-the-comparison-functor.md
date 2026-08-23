---
id: lem-created-canonical-presentations-give-a-quasi-inverse-to-the-comparison-functor
kind: lemma
title: "Supplied created canonical presentations give a quasi-inverse to the comparison functor"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-u-split-coequalizer-and-creation-of-their-coequalizers, thm-the-canonical-presentation-is-split-in-the-base-but-not-in-the-algebras, thm-every-algebra-is-the-coequalizer-of-a-canonical-pair-of-free-algebras, thm-the-comparison-functor-exists-and-is-unique, thm-the-forgetful-functor-from-eilenberg-moore-strictly-creates-coequalizers-of-u-t-split-pairs, def-eilenberg-moore-category, def-equalizers-and-coequalizers]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-24
sources:
  scraped: []
  references:
    - title: "E. Riehl, Category Theory in Context, 2nd ed., proof of Theorem 5.5.1"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: null
---

## Statement

Let $F:\mathcal C\rightleftarrows\mathcal D:U$ be an adjunction inducing the monad $T=UF$, and let $K:\mathcal D\to\mathcal C^T$ be its comparison functor. Suppose $U$ creates coequalizers of $U$-split pairs and, for every $T$-algebra $(A,a)$, a specific created coequalizer of its lifted canonical pair is supplied. Then these supplied coequalizers define a functor $H:\mathcal C^T\to\mathcal D$ and natural isomorphisms

$$KH\cong1_{\mathcal C^T},\qquad HK\cong1_{\mathcal D}.$$

Thus $H$ is a quasi-inverse to $K$.

## Facts & Assumptions

**Given:** An adjunction $F\dashv U$ inducing $T$ on the nose, with $U$ creating coequalizers of $U$-split pairs.

[L1] The comparison functor is $K(d)=(Ud,U\varepsilon_d)$ and $K(h)=U(h)$ ([[thm-the-comparison-functor-exists-and-is-unique]]).

[L2] The canonical presentation of every algebra is split in the base category ([[thm-the-canonical-presentation-is-split-in-the-base-but-not-in-the-algebras]]).

[L3] A parallel pair is $U$-split when its image under $U$ extends to a split coequalizer diagram, and ordinary creation supplies and reflects the corresponding lifted coequalizer up to isomorphism ([[def-u-split-coequalizer-and-creation-of-their-coequalizers]]).

[L4] The Eilenberg–Moore forgetful functor strictly creates coequalizers of its split pairs ([[thm-the-forgetful-functor-from-eilenberg-moore-strictly-creates-coequalizers-of-u-t-split-pairs]]).

[L5] Every $T$-algebra is the coequalizer in $\mathcal C^T$ of its canonical pair of free algebras ([[thm-every-algebra-is-the-coequalizer-of-a-canonical-pair-of-free-algebras]]).

## Proof

**Proof technique:** direct.

1.1 For a $T$-algebra $(A,a)$, the pair $F(TA)\rightrightarrows F(A)$ with arrows $F(a)$ and $\varepsilon_{FA}$ has under $U$ the canonical pair $T(a),\mu_A:T^2A\rightrightarrows TA$. By [L2] and [L3] it is $U$-split. [L2, L3]

2.1 Let $q_A:F(A)\to H(A,a)$ be the created coequalizer supplied for $(A,a)$. Its image is isomorphic to the canonical base coequalizer from step 1.1, and the universal property fixes the resulting comparisons. [step 1.1, L3, given]

3.1 An algebra homomorphism $r:(A,a)\to(B,b)$ carries the canonical pair for $A$ to that for $B$. The two coequalizer universal properties therefore define a unique morphism $H(r):H(A,a)\to H(B,b)$, and uniqueness proves preservation of identities and composition. [step 2.1, construct]

3.2 For $d\in\mathcal D$, the counit fork $F(TUd)\rightrightarrows F(Ud)\xrightarrow{\varepsilon_d}d$ maps under $U$ to the canonical split presentation of $K(d)$. Creation reflects the lifted coequalizer, so comparison with $q_{K(d)}$ yields an isomorphism $HK(d)\cong d$. [step 2.1, L1, L2]

3.3 The underlying fork of $K(q_A)$ is a split coequalizer, transported from the canonical split fork along the isomorphism supplied by ordinary creation. Since $K(q_A)$ is a lift of that fork, [L4] makes it a coequalizer in $\mathcal C^T$. The map $a:TA\to A$ is the other canonical algebra coequalizer by [L5], so their universal properties produce a unique isomorphism $KH(A,a)\cong(A,a)$. [step 2.1, L1, L2, L4, L5]

4.1 The defining equations for the comparisons in steps 3.3 and 3.2 commute with every algebra homomorphism and every morphism of $\mathcal D$. Uniqueness of maps out of the coequalizers therefore makes both families natural, proving the two displayed natural isomorphisms. [step 3.3, step 3.2, algebra] ∎
