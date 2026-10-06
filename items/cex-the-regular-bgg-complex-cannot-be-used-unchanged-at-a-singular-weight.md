---
id: cex-the-regular-bgg-complex-cannot-be-used-unchanged-at-a-singular-weight
kind: counterexample
title: The BGG complex cannot be used unchanged at a singular weight
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [cor-antidominant-verma-modules-are-simple, cor-verma-irreducibility-criterion-from-shapovalov-determinants, thm-verma-homomorphism-spaces-have-dimension-at-most-one, lem-a-nonzero-verma-homomorphism-is-injective, def-bgg-differential-from-signed-verma-maps, def-bgg-bruhat-verma-sum-in-degree-k, def-weyl-vector-rho-for-a-chosen-positive-system, def-finite-weyl-root-system-lattice-and-chamber-conventions, thm-verma-module-has-a-unique-simple-quotient]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "completed-independent-mathematical-review"
    date: 2026-10-03
    scope: "Complete item claim and mathematical body read in delegated Step 5a reader; evidence: research/frontier-38-owner-30-reader-8.md; immutable carrier: research/frontier-38-owner-30-step5-hash-8-post.json; exact saved draft bytes in git d90f26208 match that carrier after exclusion of the later judge stamp. Current content matches the saved carrier except publication status and verification metadata. Source and supplier coverage is limited to the report."
    delegated_by: "owner via tools/autopilot frontier-38-owner-30 reader-8 dispatch"
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "A. Rocha-Caridi, Splitting criteria for modules induced from a subalgebra of a semisimple Lie algebra, Trans. AMS 262 (1980), Sec. 10, p. 353 (the hypothesis $\\lambda\\in P^+$ in the construction)"
      url: "https://www.ams.org/journals/tran/1980-262-02/S0002-9947-1980-0586721-0/S0002-9947-1980-0586721-0.pdf"
    - title: "Fan Zhou, The classical and the functorial BGG resolutions (Columbia thesis 2021), Part I Sec. 3.2, p. 11 (the construction requires $\\lambda\\in\\Lambda^+$)"
      url: "https://www.math.columbia.edu/~fanzhou/files/Thesis041921.pdf"
---

## Statement refuted

The BGG construction works unchanged for every weight $\lambda$: with $C_k=\bigoplus_{\ell(w)=k}M(w\circ\lambda)$ and the signed cover maps it is a complex and resolves $L(\lambda)$; in particular the hypothesis $\lambda\in\Lambda^+$ is not needed.

## Facts & Assumptions

**Given:** $\mathfrak g=\mathfrak{sl}_2$ with positive root $\alpha$, Weyl vector $\rho=\alpha/2$, $W=\{e,s\}$, and the singular (non-dominant) weight $\lambda=-\rho=-\omega$.

[F1] The dot action is $w\circ\lambda=w(\lambda+\rho)-\rho$. Here $\lambda+\rho=0$ is fixed by $W$, so $s\circ\lambda=\lambda$; consequently $C_0(\lambda)=M(\lambda)$, $C_1(\lambda)=M(s\circ\lambda)=M(\lambda)$ and $C_k(\lambda)=0$ for $k\ge2$, and the only arrow of the Bruhat graph is the cover $s\rhd e$ ([[def-bgg-bruhat-verma-sum-in-degree-k]], [[def-finite-weyl-root-system-lattice-and-chamber-conventions]], [[def-weyl-vector-rho-for-a-chosen-positive-system]]).

[F2] The mimic of the BGG differential takes for the arrow $s\to e$ the unique-up-to-scalar nonzero homomorphism $M(s\circ\lambda)\to M(e\circ\lambda)$; here this is an endomorphism of $M(\lambda)$, $\operatorname{Hom}_{\mathfrak g}(M(\lambda),M(\lambda))$ is one-dimensional and every nonzero element of it is injective, and $d_0=\pi\colon M(\lambda)\twoheadrightarrow L(\lambda)$ is the canonical surjection ([[def-bgg-differential-from-signed-verma-maps]], [[thm-verma-homomorphism-spaces-have-dimension-at-most-one]], [[lem-a-nonzero-verma-homomorphism-is-injective]], [[thm-verma-module-has-a-unique-simple-quotient]]).

[F3] $M(\lambda)$ is simple: the irreducibility criterion $\langle\lambda+\rho,\alpha^\vee\rangle\notin\mathbb Z_{>0}$ holds because $\lambda+\rho=0$; note that the strict antidominant hypothesis $\langle\lambda+\rho,\alpha^\vee\rangle<0$ of [[cor-antidominant-verma-modules-are-simple]] is not met here, so that supplier alone would not cover this weight ([[cor-verma-irreducibility-criterion-from-shapovalov-determinants]]).

## Counterexample

1.1 Because $s\circ\lambda=\lambda$, source and target of the only differential coincide: $d_1=\varepsilon(s,e)\,\iota$ for a sign $\varepsilon(s,e)=\pm1$ and a nonzero homomorphism $\iota\colon M(\lambda)\to M(\lambda)$, and $d_0=\pi$; the unaugmented chain condition $d_1\circ d_2=0$ holds vacuously since $C_2(\lambda)=0$. [F1, F2]

2.1 By [F2] the one-dimensional space $\operatorname{Hom}_{\mathfrak g}(M(\lambda),M(\lambda))$ is spanned by the identity and every nonzero element is injective; hence $\iota=c\cdot\operatorname{id}$ with $c\ne0$, so $d_1=c'\cdot\operatorname{id}$ with $c'\ne0$ and $\operatorname{im}d_1=M(\lambda)\ne0$. [F2, step 1.1]

3.1 By [F3] $M(\lambda)$ is simple, so the canonical surjection is an isomorphism and $\ker d_0=\ker\pi=0$. Therefore $\ker d_0=0\ne M(\lambda)=\operatorname{im}d_1$: the sequence fails to be exact at $C_0$, $L(\lambda)$ is not $\operatorname{coker}(d_1)$ (that cokernel is $0$), and even the augmented square condition fails because $d_0\circ d_1=c'\cdot\operatorname{id}\ne0$. [F2, F3, step 2.1]

4.1 Hence the mimic of the BGG construction at the singular weight $\lambda=-\rho$ does not resolve $L(\lambda)$, so the theorem cannot be extended unchanged to arbitrary weights. Dominant integrality implies regularity of $\lambda+\rho$; regularity alone does not imply dominant integrality. [step 3.1] ∎
