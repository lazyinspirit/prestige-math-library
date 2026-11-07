---
id: thm-gelbart-jacquet-symmetric-square-automorphy
kind: theorem
title: "Gelbart–Jacquet Symmetric-Square Automorphy for a Holomorphic GL2 Form"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 7
deps:
  - def-normalized-full-level-holomorphic-hecke-eigenform
  - thm-standard-gl2-l-function-analytic-continuation-and-functional-equation
  - thm-cogdell-global-adjacent-rank-analytic-continuation-and-functional-equation
  - def-adelic-gln-automorphic-representation
  - def-unitary-cuspidal-generic-gln-representation
  - def-standard-and-rankin-selberg-l-functions-on-gln
  - def-unramified-satake-parameter-for-gln
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: "Stephen Gelbart and Hervé Jacquet, A relation between automorphic representations of GL(2) and GL(3)"
      url: "https://www.math.columbia.edu/~hj/Forms%20on%20GL%282%29%20and%20GL%283%29.pdf"
      locator: "Ann. Sci. É.N.S. 11 (1978), §9, Theorem 9.3 and proof, printed pp. 534–541; the theorem assumes no nontrivial character self-twist."
    - title: "R. Holowinsky and K. Soundararajan, Mass Equidistribution for Hecke Eigenforms"
      url: "https://arxiv.org/pdf/0809.1636v1"
      locator: "§2, printed p. 7: use of the Gelbart–Jacquet lift for a full-level holomorphic Hecke eigenform."
---

## Statement

Let $k\ge2$ be even and let $f(z)=\sum_{n\ge1}a_f(n)e^{2\pi inz}$ be a normalized full-level holomorphic Hecke cusp eigenform of weight $k$, with $a_f(1)=1$ and $T_nf=a_f(n)f$. Put $\lambda_f(n)=a_f(n)n^{-(k-1)/2}$. For each prime $p$, let $\alpha_p,\beta_p$ be the roots, with multiplicity, of $X^2-\lambda_f(p)X+1$. Then there is a cuspidal automorphic representation $\Pi_f$ of $\mathrm{GL}_3(\mathbb A_{\mathbb Q})$ that is unramified at every finite prime and whose standard Euler factor at $p$ is
$$
L_p(s,\Pi_f)=\frac{1}{(1-\alpha_p^2p^{-s})(1-p^{-s})(1-\beta_p^2p^{-s})}.
$$

## Statement references

[[def-normalized-full-level-holomorphic-hecke-eigenform]]

[[thm-standard-gl2-l-function-analytic-continuation-and-functional-equation]]

[[thm-cogdell-global-adjacent-rank-analytic-continuation-and-functional-equation]]

[[def-adelic-gln-automorphic-representation]]

[[def-unitary-cuspidal-generic-gln-representation]]

[[def-standard-and-rankin-selberg-l-functions-on-gln]]

[[def-unramified-satake-parameter-for-gln]]

[Gelbart–Jacquet, *A relation between automorphic representations of GL(2) and GL(3)*, §9](https://www.math.columbia.edu/~hj/Forms%20on%20GL%282%29%20and%20GL%283%29.pdf)

[Holowinsky–Soundararajan, *Mass Equidistribution for Hecke Eigenforms*, §2](https://arxiv.org/pdf/0809.1636v1)

## Proof status

No local proof is supplied. Gelbart–Jacquet’s Theorem 9.3 assumes a unitary cuspidal GL(2) representation with no nontrivial character self-twist. For this full-level classical form, a proof still needs the classical-to-adelic representation interface and a derivation that its representation has no nontrivial self-twist. The declared global Rankin–Selberg supplier is present but its proof is not supplied; neither the Statement nor the citation completes these obligations.
