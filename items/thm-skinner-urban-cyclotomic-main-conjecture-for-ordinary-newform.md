---
id: thm-skinner-urban-cyclotomic-main-conjecture-for-ordinary-newform
kind: theorem
title: "Skinner–Urban Cyclotomic Main Conjecture for Ordinary Newforms"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 18
deps:
  - def-cyclotomic-p-adic-l-function-of-an-ordinary-newform
  - def-greenberg-selmer-group-of-an-ordinary-newform
  - def-axiom-of-choice
  - thm-kato-iwasawa-torsion-of-ordinary-greenberg-selmer-group
justified_by: []
provenance:
  statement: literature-derived
  proof: not-supplied
proof_strategy: not-supplied
sources:
  references:
    - title: "Christopher Skinner and Eric Urban, The Iwasawa Main Conjectures for GL2"
      url: "https://www.math.columbia.edu/~urban/eurp/MC.pdf"
      locator: "§§3.3–3.6, especially Definitions 3.3.6, 3.4.4 and Theorem 3.6.4."
    - title: "M. Longo and S. Vigni, The Tamagawa Number Conjecture and Kolyvagin’s Conjecture for Motives of Modular Forms, published version"
      url: "https://link.springer.com/content/pdf/10.1007/s40687-026-00646-7.pdf"
      locator: "§§2.6–2.20, 2.36–2.56, 4.14–4.15, 5.4–5.9; definitions, conjectures, and Theorems 5.24, 5.29, 5.37 and 5.42."
---

## Statement

Let $f\in S_k(\Gamma_0(Np^r),\chi;L)$ be a $p$-ordinary cuspidal eigenform of weight $k\ge2$, with $L/\mathbb Q_p$ finite. Assume $\chi=1$, $k\equiv2\pmod{p-1}$, the residual representation $\bar\rho_f$ is irreducible, the two characters in the ordinary filtration are distinct modulo the maximal ideal, and there is a prime $q\ne p$ with $q\parallel N_f$ at which $\bar\rho_f$ is ramified. Also assume $p\nmid N_f$. Then for every finite set of primes $\Sigma$ the cyclotomic Greenberg characteristic ideal satisfies
$$\operatorname{Ch}^{\Sigma}_{\mathbb Q_\infty,L}(f)=(L^\Sigma_f)$$
in $\Lambda_{\mathbb Q,\mathcal O_L}\otimes_{\mathbb Z_p}\mathbb Q_p$. If there is an $\mathcal O_L$-basis of the chosen lattice $T_f$ for which the image of $\rho_f$ contains $\mathrm{SL}_2(\mathbb Z_p)$, the equality holds in $\Lambda_{\mathbb Q,\mathcal O_L}$.

## Statement references

[Christopher Skinner and Eric Urban, The Iwasawa Main Conjectures for GL2](https://www.math.columbia.edu/~urban/eurp/MC.pdf)

[M. Longo and S. Vigni, The Tamagawa Number Conjecture and Kolyvagin’s Conjecture for Motives of Modular Forms, published version](https://link.springer.com/content/pdf/10.1007/s40687-026-00646-7.pdf)

## Facts & Assumptions

**Given:** An ordinary newform, its p-adic L-function, and Greenberg’s cyclotomic Selmer module.

[F1] [[def-cyclotomic-p-adic-l-function-of-an-ordinary-newform]]: the analytic side is the bounded measure interpolating the source-normalized critical values.

[F2] [[def-greenberg-selmer-group-of-an-ordinary-newform]]: the algebraic side is the characteristic ideal of the Pontryagin dual of the Greenberg Selmer group.

[A1] [[def-axiom-of-choice]]: the attached Galois representation supplier declares AC for the cohomological eigenspace construction.

[F3] [[thm-kato-iwasawa-torsion-of-ordinary-greenberg-selmer-group]]: the dual Greenberg Selmer module is torsion, so its characteristic ideal is defined.

## Escalation

This is Skinner–Urban Theorem 3.6.4 with its full residual, ordinary, ramification, weight-congruence, and integral-basis hypotheses. The proof uses Kato’s Euler-system divisibility, Hida-family congruences, and the full §§2–13 commutative-algebra argument. The local Kato torsion supplier above has no proof, and the remaining proof chain is not reconstructed; this item is escalated.
