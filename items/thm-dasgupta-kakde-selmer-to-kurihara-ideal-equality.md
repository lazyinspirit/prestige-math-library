---
id: thm-dasgupta-kakde-selmer-to-kurihara-ideal-equality
kind: theorem
title: "Dasgupta–Kakde Selmer-to-Kurihara Fitting equality"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 26
deps:
  - def-smoothed-stickelberger-element-for-abelian-cm-extension
  - def-burns-kurihara-sano-selmer-module
  - def-minus-pontryagin-dual-class-group
  - def-sinnott-kurihara-ideal-for-a-cm-extension
  - def-fitting-ideal-of-a-finitely-presented-module
  - thm-dasgupta-kakde-selmer-module-fitting-identity
  - thm-ray-class-exact-sequence
  - thm-deligne-ribet-integrality-congruences-for-special-values
  - thm-global-artin-reciprocity-and-norm-index
  - def-axiom-of-choice
  - def-countable-choice
  - def-dependent-choice
proof_strategy: direct
axiom_use: >-
  AC, Countable Choice, and Dependent Choice are inherited from the class-field,
  Deligne–Ribet, and Selmer-module inputs; the detailed uses remain within the
  escalated proof chain.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Samit Dasgupta and Mahesh Kakde, On the Brumer–Stark Conjecture"
      url: "https://math.iisc.ac.in/~maheshkakde/brumerstark.pdf"
      locator: "Theorem 3.7 and Corollary 3.8, printed pp. 22–23; proof in §3.3."
---

## Statement

Assume AC, Countable Choice, and Dependent Choice. Let $H/F$ be a finite abelian extension of number fields such that $F$ is totally real and $H$ is a totally imaginary quadratic extension of $F$, and let $G=\operatorname{Gal}(H/F)$. Let $S_\infty$ be the infinite places of $F$, and let $S_{\mathrm{ram}}$ be the finite primes ramified in $H$. Let $T$ be a finite set of unramified finite primes such that the only root of unity in $H$ congruent to $1$ at every prime above $T$ is $1$. For an odd prime $p$, set

$$\Sigma=S_\infty\cup\{v\in S_{\mathrm{ram}}:v\mid p\}.$$

Let $\operatorname{Sel}_{T}^{\Sigma}(H)$ be the Burns–Kurihara–Sano Selmer module with smoothing set $T$. Define the $p$-modified Sinnott–Kurihara ideal by

$$\operatorname{SKu}_{p,T}(H/F):=(\Theta_{\Sigma,T}^{H/F\,#})\prod_{\substack{v\in S_{\mathrm{ram}}\\v\nmid p}}(N I_v,1-\sigma_v e_v)\subseteq\mathbb Z_p[G].$$

Then

$$\operatorname{Fitt}_{\mathbb Z_p[G]^{-}}\!\left(\operatorname{Sel}_{T}^{\Sigma}(H)^{-}_p\right)=\operatorname{SKu}_{p,T}(H/F)^{-},$$

where $\operatorname{Sel}_{T}^{\Sigma}(H)^{-}_p=\bigl(\operatorname{Sel}_{T}^{\Sigma}(H)\otimes\mathbb Z_p\bigr)^{-}$.

## Statement references

[[def-burns-kurihara-sano-selmer-module]]

[[def-smoothed-stickelberger-element-for-abelian-cm-extension]]

[[def-sinnott-kurihara-ideal-for-a-cm-extension]]

[Dasgupta and Kakde — Theorem 3.7 and Corollary 3.8, printed pp. 22–23](https://math.iisc.ac.in/~maheshkakde/brumerstark.pdf)

## Facts & Assumptions

**Given:** AC, Countable Choice, Dependent Choice, $H/F$, $T$, an odd prime $p$, and $\Sigma$ as in the Statement.

[F1] The Selmer module is the quotient by the diagonal valuation image, and specialization to $\Sigma'=T$ gives $\operatorname{Sel}_{T}^{\Sigma}(H)$. [[def-burns-kurihara-sano-selmer-module]]

[A1] The keystone identity for the auxiliary module $\operatorname{Sel}_{\Sigma'}^{\Sigma}(H)^{-}_p$, with $\Sigma'=T\cup\{v\in S_{\mathrm{ram}}:v\nmid p\}$, is stated in the current draft carrier but its proof remains escalated. [[thm-dasgupta-kakde-selmer-module-fitting-identity]]

[A2] The exact sequences and local Fitting calculations in §3.3 that remove the ramified primes away from $p$ have not been reconstructed locally. These calculations use the ray-class and ordinary-representation conventions in the cited source.

## Proof

**Given:** The Statement data, [F1], and the escalated conditional supplier [A1].

1.1 If [A1] is established, the source's exact sequence between $\operatorname{Sel}_{T}^{\Sigma}(H)$ and $\operatorname{Sel}_{\Sigma'}^{\Sigma}(H)$ permits application of the keystone identity, followed by the local two-generator Fitting factors for ramified primes away from $p$. [F1, A1, given]

2.1 The exact sequence, non-zero-divisor checks, and Fitting comparison in §3.3 are not reproduced in this carrier, and the keystone input [A1] is itself escalated. Therefore the p-adic equality remains escalated. [A1, A2, step 1.1]

## Escalation

Reconstruct §3.3, including its class-field surjection, inertia modules, injectivity of multiplication by $\tau_v-1$, and localization/cancellation of the non-zero-divisor factors, before using this p-adic equality.

