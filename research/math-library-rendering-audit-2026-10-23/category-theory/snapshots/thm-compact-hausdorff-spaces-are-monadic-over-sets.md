---
id: thm-compact-hausdorff-spaces-are-monadic-over-sets
kind: theorem
title: "Under the ultrafilter lemma, compact Hausdorff spaces are monadic over sets"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-the-compact-hausdorff-and-ultrafilter-algebra-constructions-are-inverse, thm-the-eilenberg-moore-adjunction-induces-the-given-monad, def-monadic-and-strictly-monadic-functor, thm-the-ultrafilter-monad-is-a-monad, def-ultrafilter-extension-principle]
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
    - title: "E. Riehl, Category Theory in Context, 2nd ed., Corollary 5.5.6"
      url: "https://emilyriehl.github.io/files/context.pdf"
    - title: "J. Goubault-Larrecq, Algebras of filter-related monads: I. Ultrafilters and Manes' theorem"
      url: "https://topology.lmf.cnrs.fr/algebras-of-the-filter-related-monads-i-ultrafilters-and-manes-theorem/"
pipeline_run: null
---

## Statement

Assume UL/BPI. The underlying-set functor $U:\mathbf{CompHaus}\to\mathbf{Set}$ is monadic. Its induced monad is the ultrafilter monad, and its comparison with the Eilenberg–Moore category of ultrafilter algebras is an equivalence, in fact an isomorphism over $\mathbf{Set}$.

## Facts & Assumptions

**Given:** UL/BPI and the ultrafilter monad $\beta$ on $\mathbf{Set}$.

[L1] Compact Hausdorff spaces and ultrafilter algebras are recovered by inverse object and morphism constructions over $\mathbf{Set}$ ([[thm-the-compact-hausdorff-and-ultrafilter-algebra-constructions-are-inverse]]).

[L2] The Eilenberg–Moore adjunction of a monad induces that monad on the nose ([[thm-the-eilenberg-moore-adjunction-induces-the-given-monad]]).

[L3] A right adjoint is monadic when its comparison functor is an equivalence of categories ([[def-monadic-and-strictly-monadic-functor]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], the category $\mathbf{CompHaus}$ with its underlying-set functor is isomorphic over $\mathbf{Set}$ to the Eilenberg–Moore category $\mathbf{Set}^{\beta}$. [L1]

2.1 Transport the Eilenberg–Moore free-forgetful adjunction across this isomorphism. Its right adjoint is the compact-Hausdorff underlying-set functor. [step 1.1, L2]

3.1 By [L2], the monad induced by this adjunction is the ultrafilter monad on the nose. [step 2.1, L2]

4.1 The comparison is the isomorphism of [L1], hence an equivalence. Therefore the underlying-set functor is monadic by [L3], with UL/BPI as the only choice assumption used in [L1]. [step 1.1, step 3.1, L3] ∎
