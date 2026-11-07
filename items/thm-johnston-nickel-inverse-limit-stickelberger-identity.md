---
id: thm-johnston-nickel-inverse-limit-stickelberger-identity
kind: theorem
title: Johnston–Nickel Inverse-Limit Stickelberger Identity
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 28
deps:
  - def-admissible-one-dimensional-p-adic-lie-extension
  - def-iwasawa-algebra-of-profinite-group
  - def-smoothed-stickelberger-element-at-nonpositive-integer
  - thm-siegel-rationality-of-equivariant-stickelberger-special-values
  - def-johnston-nickel-p-adic-artin-element-for-cm-cyclotomic-tower
  - thm-johnston-nickel-cyclotomic-twist-character-evaluation
  - thm-johnston-nickel-finite-layer-character-decomposition
  - thm-deligne-ribet-p-adic-measure-interpolation
  - thm-primitive-hecke-l-analytic-continuation-and-functional-equation
  - thm-abelian-artin-l-series-equals-hecke-l-series
  - def-axiom-of-choice
  - def-countable-choice
  - def-dependent-choice
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: Henri Johnston and Andreas Nickel, An Unconditional Proof of the Abelian Equivariant Iwasawa Main Conjecture and Applications
      url: https://arxiv.org/pdf/2010.03186
      locator: Proposition 8.1 and proof, printed pp. 22–23; equations (8.1)–(8.3).
verification: {}
---

## Statement

Assume AC, Countable Choice, and Dependent Choice. Let $p$ be odd, let $K$ be totally real, and let $L/K$ be a finite abelian CM extension with $\zeta_p\in L$. Let $L_\infty/L$ be its cyclotomic $\mathbb Z_p$-extension, put $G=\operatorname{Gal}(L_\infty/K)$, and let $G_n=\operatorname{Gal}(L_n/K)$ be the finite layers. Let $\pi_n:\Lambda(G)=\mathbb Z_p[[G]]\to\mathbb Z_p[G_n]$ be the layer projection. Define $\Upsilon$ as the multiplicative set of $x\in\Lambda(G)$ such that every $\pi_n(x)$ is a non-zero-divisor in $\mathbb Z_p[G_n]$, and extend $\pi_n$ to $\Upsilon^{-1}\Lambda(G)\to\mathbb Q_p[G_n]$. Let $\chi_{\mathrm{cyc}}$ be the $p$-adic cyclotomic character and let $t^a_{\mathrm{cyc}}$ be induced by $g\mapsto\chi_{\mathrm{cyc}}(g)^a g$. Let $\Phi_S$ be the Johnston–Nickel p-adic Artin element defined by its normalized character values, and put $\Psi_{S,T}=t^1_{\mathrm{cyc}}(\Phi_S)\prod_{v\in T}(1-\chi_{\mathrm{cyc}}(\operatorname{Frob}_v)\operatorname{Frob}_v)$, using arithmetic Frobenius at each $v\in T$. Let $\#(g)=g^{-1}$. For $r\le0$, let $\Theta_{S,T}(L_n/K,r)$ be the rational central finite-layer element whose irreducible-character coordinate at $\chi$ is the $S$-truncated Artin $L$-value for $\chi^{-1}$ at $r$, multiplied by the $T$-Euler factor; view it in $\mathbb Q_p[G_n]$ via $\mathbb Q\hookrightarrow\mathbb Q_p$. Then for all sufficiently large $n$,
$$\pi_n\!\left(t^r_{\mathrm{cyc}}(\Psi_{S,T}^{\#})\right)=\Theta_{S,T}(L_n/K,r),$$
where the rational special value on the right is viewed in $\mathbb Q_p[G_n]$ through $\mathbb Q\hookrightarrow\mathbb Q_p$.

## Statement references

[Johnston and Nickel, Proposition 8.1](https://arxiv.org/pdf/2010.03186)

[[def-smoothed-stickelberger-element-at-nonpositive-integer]]

[[thm-siegel-rationality-of-equivariant-stickelberger-special-values]]

[[def-p-adic-artin-l-element-for-admissible-extension]]

## Proof status

The earlier source-reading record reports inspection of the full source proof. Its route uses the character decomposition (8.1), the local Euler-factor calculation (8.3), and the specialization identity of Johnston–Nickel 2019, Lemma 6.1, together with the Artin $L$-value interpolation equations (5.3)–(5.6). Local proofs of the character decomposition and twist identity have since been authored in [[thm-johnston-nickel-finite-layer-character-decomposition]] and [[thm-johnston-nickel-cyclotomic-twist-character-evaluation]]; their recorded authoring completion is not a proof review of this theorem. The CM-tower Artin-element construction still leaves character-evaluation independence and passage into the layerwise localization unresolved. Deligne–Ribet interpolation, the Euler-factor and special-value calculation for this identity, and the rationality supplier also remain local proof obligations. No complete proof of the displayed identity is supplied here, and the theorem remains escalated.
