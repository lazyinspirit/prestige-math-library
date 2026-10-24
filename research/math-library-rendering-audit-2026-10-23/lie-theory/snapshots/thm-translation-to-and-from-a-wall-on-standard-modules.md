---
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
    delegated_by: "owner via frontier-38-owner-30 build dispatch"
    scope: "Historical completed Step 5 full authored item reading and mathematical acceptance; exact historical raw bytes differ from current only by publication status and verification metadata. Direct prerequisite interfaces checked; no recursive audit of supplier proofs."
    evidence:
      - "research/frontier-38-owner-30-reader-7.md"
      - "research/frontier-38-owner-30-alpha-batch-7-5a.md"
      - "research/frontier-38-owner-30-step5-hash-7-post-5a.json"
    content_sha256: "5a0dcde8c9fd8decdb0ea1ecca39322f44e1d57ed7e90eb278d473c0bf69a35d"
id: thm-translation-to-and-from-a-wall-on-standard-modules
kind: theorem
title: "Translation to and from a single wall on standard modules"
status: published
origin: pipeline
deps:
  - cor-central-characters-are-dot-weyl-orbits
  - def-axiom-of-choice
  - def-dot-action-facets-and-single-wall-translation-data
  - def-integral-dominant-and-strictly-dominant-weights
  - def-translation-functor-between-o-blocks
  - def-verma-flag-and-its-multiplicities
  - lem-direct-summands-of-verma-filtered-objects-are-verma-filtered
  - lem-dominant-norm-distance-comparison
  - lem-single-wall-tensor-weight-exclusion
  - lem-tensoring-with-a-finite-dimensional-module-preserves-verma-flags
  - lem-weight-norm-bound-for-finite-dimensional-simple-modules
  - prop-highest-weight-of-the-dual-representation
  - prop-translation-functors-are-exact-and-biadjoint-across-a-wall
  - thm-category-o-decomposes-by-generalized-central-character
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Lin Chen, lecture notes (Spring 2024), Lecture 9, Theorem 3.12 and Example 3.16"
      url: https://windshower.github.io/linchen/teaching/s2024/lecture9.pdf
      locator: "§3, Theorem 3.12(1)-(2) and its sketch, printed p. 6; Example 3.16, printed p. 7 (full text read at harvest)"
    - title: "Pavel Etingof, Representations of Lie Groups (18.757, Fall 2023), Theorem 24.1 and Remark 24.2"
      url: https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf
      locator: "§24.1, Theorem 24.1 and Remark 24.2 with proofs (the two-factor filtration for the reverse functor), printed pp. 119-121 (full text read at harvest)"
    - title: "James E. Humphreys, Representations of Semisimple Lie Algebras in the BGG Category O, Sec. 7.6 and Sec. 7.12"
      locator: "§7.6 and §7.12, pp. 137-138 and 144-145 (title-only locator; argument reproduced from the fetched treatments)"
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let
$(\lambda,\mu,\alpha)$ be a single-wall translation datum with translating
weight $\nu$, wall reflection $s=s_\alpha$, and $E=L(\nu)$, and let
$T_\lambda^\mu$ and $T_\mu^\lambda$ be the translation functors of
[[def-translation-functor-between-o-blocks]]. Then:

1. $T_\lambda^\mu\Delta(w\mathbin\cdot\lambda)\cong
   \Delta(w\mathbin\cdot\mu)$ for every $w\in W$;
2. $T_\mu^\lambda\Delta(w\mathbin\cdot\mu)$ has a finite Verma flag with
   exactly two factors, $\Delta(w\mathbin\cdot\lambda)$ and
   $\Delta(w\mathbin\cdot(s\mathbin\cdot\lambda))
   =\Delta(w s\mathbin\cdot\lambda)$, each occurring with multiplicity one; in
   particular its class in the Grothendieck group is
   $[\Delta(w\mathbin\cdot\lambda)]+[\Delta(w s\mathbin\cdot\lambda)]$.

## Facts & Assumptions

**Given:** The Axiom of Choice and a single-wall translation datum $(\lambda,\mu,\alpha)$ with translating weight $\nu$, wall reflection $s$, and $E=L(\nu)$; write $\lambda_\bullet=\lambda+\rho$ and $\mu_\bullet=\mu+\rho$.

[F1] The datum gives integral dot-antidominant $\lambda,\mu$ with $\lambda_\bullet$ regular and $\operatorname{Stab}_W(\mu_\bullet)=\{1,s\}$; the functors are $T_\lambda^\mu=\operatorname{pr}_{\chi_\mu}\circ(E\otimes-)\circ\operatorname{incl}_{\chi_\lambda}$ and $T_\mu^\lambda=\operatorname{pr}_{\chi_\lambda}\circ(E^*\otimes-)\circ\operatorname{incl}_{\chi_\mu}$ with $E^*=L(\nu)^*=L(-w_0\nu)$ finite-dimensional and $\mathfrak h$-semisimple; central characters satisfy $\chi_\eta=\chi_{\eta'}$ exactly when $\eta'\in W\mathbin\cdot\eta$ ([[def-dot-action-facets-and-single-wall-translation-data]], [[def-translation-functor-between-o-blocks]], [[prop-highest-weight-of-the-dual-representation]], [[cor-central-characters-are-dot-weyl-orbits]]).

[F2] For every weight $\lambda'$ the tensor $E\otimes\Delta(\lambda')$ and $E^*\otimes\Delta(\lambda')$ have finite Verma flags with $(E\otimes\Delta(\lambda'):\Delta(\eta))=\dim E_{\eta-\lambda'}$ and $(E^*\otimes\Delta(\lambda'):\Delta(\eta))=\dim E^*_{\eta-\lambda'}=\dim E_{\lambda'-\eta}$; weights of $E=L(\nu)$ satisfy $\lvert\gamma\rvert\le\lvert\nu\rvert$ with equality exactly for $\gamma\in W\nu$, and every weight of $W\nu$ has multiplicity one ([[lem-tensoring-with-a-finite-dimensional-module-preserves-verma-flags]], [[lem-weight-norm-bound-for-finite-dimensional-simple-modules]]).

[F3] For dominant $\xi,\eta$ in the real span of the roots, $\lvert\xi-w\eta\rvert\ge\lvert\xi-\eta\rvert$ with equality exactly when $w\eta\in\operatorname{Stab}_W(\xi)\eta$ ([[lem-dominant-norm-distance-comparison]], [[def-integral-dominant-and-strictly-dominant-weights]]).

[F4] The central-character projections are exact ([[thm-category-o-decomposes-by-generalized-central-character]]). The center preserves a Verma module’s one-dimensional highest line and commutes with its cyclic generator action, so it acts by the highest weight central character on the whole Verma module. Thus applying $\operatorname{pr}_\chi$ to a Verma flag keeps exactly its factors with character $\chi$ and sends the other factors to zero. Deleting repetitions gives a Verma flag of the projection. A one-factor flag identifies its object with that Verma module ([[def-verma-flag-and-its-multiplicities]]).

[F5] If $(\lambda,\mu,\alpha)$ is a single-wall datum with translating weight $\nu$ and $E=L(\nu)$, then $w'\mathbin\cdot\mu=w\mathbin\cdot\lambda+\gamma$ for a weight $\gamma$ of $E$ implies $w'\mathbin\cdot\mu=w\mathbin\cdot\mu$ and $\gamma=w(\mu-\lambda)$, so among labels of central character $\chi_\mu$ only $\Delta(w\mathbin\cdot\mu)$ occurs in the flag of $E\otimes\Delta(w\mathbin\cdot\lambda)$, once ([[lem-single-wall-tensor-weight-exclusion]]).

[F6] The functors $T_\lambda^\mu$, $T_\mu^\lambda$ are exact ([[prop-translation-functors-are-exact-and-biadjoint-across-a-wall]]).

## Proof

**Proof technique:** direct: compute the Verma flags of the two tensors, keep the factors with the target central character, and read off the surviving factors.

1.1 Claim (1). Let $\eta=w'\mathbin\cdot\mu$ be a label in the dot orbit of $\mu$ with $\dim E_{\eta-w\cdot\lambda}\ne0$, and put $\gamma:=\eta-w\mathbin\cdot\lambda$; then $w'\mathbin\cdot\mu=w\mathbin\cdot\lambda+\gamma$ and $\gamma$ is a weight of $E$, so [F5] gives $\eta=w'\mathbin\cdot\mu=w\mathbin\cdot\mu$ and $\gamma=w(\mu-\lambda)$, which occurs in $E$ with multiplicity one. Hence in the flag of $E\otimes\Delta(w\mathbin\cdot\lambda)$ supplied by [F2], the only label of central character $\chi_\mu$ (equivalently, the only label in the dot orbit of $\mu$, by [F1]) is $\eta=w\mathbin\cdot\mu$, with multiplicity one. [F1, F2, F5, algebra]

1.2 Claim (2). Let $\eta=w'\mathbin\cdot\lambda$ be a label in the dot orbit of $\lambda$ with $\dim E^*_{\eta-w\cdot\mu}\ne0$, and set $\gamma:=w\mathbin\cdot\mu-\eta$; by [F2] the weight $\gamma$ is a weight of $E$ and $\lvert\gamma\rvert\le\lvert\nu\rvert$. Since $w'\mathbin\cdot\lambda=w'(\lambda_\bullet)-\rho$ and $w\mathbin\cdot\mu=w(\mu_\bullet)-\rho$, setting $x=(w')^{-1}w$ gives $(w')^{-1}(-\gamma)=\lambda_\bullet-x\mu_\bullet$, so $\lvert\lambda_\bullet-x\mu_\bullet\rvert=\lvert\gamma\rvert$. By [F2] $\lvert\nu\rvert=\lvert\mu_\bullet-\lambda_\bullet\rvert$, while [F3] applied to the dominant weights $\xi=-\lambda_\bullet$ and $\eta'=-\mu_\bullet$ gives $\lvert\mu_\bullet-\lambda_\bullet\rvert\le\lvert\lambda_\bullet-x\mu_\bullet\rvert$. Hence equality holds throughout, and the equality case of [F3] gives $x\eta'\in\operatorname{Stab}_W(\xi)\eta'$, and regularity of $\lambda_\bullet$ makes $\operatorname{Stab}_W(\xi)=\{1\}$. Consequently $x\mu_\bullet=\mu_\bullet$, and the datum $\operatorname{Stab}_W(\mu_\bullet)=\{1,s\}$ forces $x\in\{1,s\}$. Therefore $\eta=w'\mathbin\cdot\lambda=w x^{-1}\mathbin\cdot\lambda$ equals $w\mathbin\cdot\lambda$ or $w s\mathbin\cdot\lambda$, and in both cases $(w')^{-1}(-\gamma)=\lambda_\bullet-\mu_\bullet$ (using $s\mu_\bullet=\mu_\bullet$ when $x=s$), so $-\gamma=w'(\lambda_\bullet-\mu_\bullet)$ and $\gamma=w'(\mu-\lambda)$ lies in $W(\mu-\lambda)=W\nu$; by [F2] it occurs in $E$ with multiplicity one. Conversely, taking $w'=w$ or $w'=ws$ gives $\gamma=w'(\mu-\lambda)\in W\nu$, so both proposed factors occur once; their labels are distinct because $\lambda_\bullet$ is regular. [F1, F2, F3, algebra]

2.1 For claim (1), the object $T_\lambda^\mu\Delta(w\mathbin\cdot\lambda)=\operatorname{pr}_{\chi_\mu}(E\otimes\Delta(w\mathbin\cdot\lambda))$ is Verma-filtered by [F4], and by step 1.1 its only nonzero multiplicity is $(T_\lambda^\mu\Delta(w\mathbin\cdot\lambda):\Delta(w\mathbin\cdot\mu))=1$; by [F4] it is therefore isomorphic to $\Delta(w\mathbin\cdot\mu)$. [F4, step 1.1]

2.2 For claim (2), the object $T_\mu^\lambda\Delta(w\mathbin\cdot\mu)=\operatorname{pr}_{\chi_\lambda}(E^*\otimes\Delta(w\mathbin\cdot\mu))$ is Verma-filtered by [F4]; by step 1.2 its nonzero multiplicities among labels of central character $\chi_\lambda$ are exactly one at $\Delta(w\mathbin\cdot\lambda)$ and one at $\Delta(w s\mathbin\cdot\lambda)$, and all other multiplicity vanish because their labels have different central character. Hence it has a finite Verma flag with exactly these two factors, each once, and its class in the Grothendieck group is $[\Delta(w\mathbin\cdot\lambda)]+[\Delta(w s\mathbin\cdot\lambda)]$. [F4, step 1.2]

3.1 Steps 2.1 and 2.2 prove the two claims of the statement; with [F6] recording that the two translation functors are exact, the theorem follows. [F6, step 2.1, step 2.2] ∎
