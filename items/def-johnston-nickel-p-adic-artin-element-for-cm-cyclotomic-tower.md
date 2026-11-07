---
id: def-johnston-nickel-p-adic-artin-element-for-cm-cyclotomic-tower
kind: definition
title: Johnston–Nickel p-Adic Artin Element for a CM Cyclotomic Tower
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 27
deps:
  - def-iwasawa-algebra-of-profinite-group
  - lem-finite-by-zp-profinite-group-splits
  - thm-deligne-ribet-p-adic-measure-interpolation
  - thm-brauer-induction
  - def-axiom-of-choice
  - def-countable-choice
  - def-dependent-choice
proof_strategy: not-applicable
axiom_use: AC, Countable Choice, and Dependent Choice are carried through the Deligne–Ribet measure and class-field interfaces; no necessity claim is made.
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: Henri Johnston and Andreas Nickel, An Unconditional Proof of the Abelian Equivariant Iwasawa Main Conjecture and Applications
      url: https://arxiv.org/pdf/2010.03186
      locator: §§5.3–5.5 and §8, printed pp. 14–16 and 22–23.
verification: {}
---

## Definition

Assume AC, Countable Choice, and Dependent Choice. Let $p$ be odd, let $K$ be totally real, and let $L/K$ be a finite abelian CM extension containing $\zeta_p$. Let $L_\infty/L$ be the cyclotomic $\mathbb Z_p$-extension, put $K_\infty=K(\mu_{p^\infty})^{\langle c\rangle}$, and set $G=\operatorname{Gal}(L_\infty/K)=H\times\Gamma$ with $H=\operatorname{Gal}(L_\infty/K_\infty)$ and $\Gamma\cong\mathbb Z_p$. Let $S$ contain the places above $p$, all places ramified in $L_\infty/K$, and all infinite places. For a topological generator $\gamma_K$ of $\Gamma$, put $u=\chi_{\mathrm{cyc}}(\gamma_K)$. For each irreducible $\mathbb Q_p^c$-valued character $\chi$ of $G$, let $G_{\chi,S}(T)$ be the Deligne–Ribet power series extended to $\chi$ by Brauer induction, and put
$$H_\chi(T)=\begin{cases}\chi(\gamma_K)(1+T)-1,&H\subseteq\ker\chi,\\1,&H\not\subseteq\ker\chi.\end{cases}$$
The Johnston–Nickel p-adic Artin element $\Phi_S(L_\infty/K)$ is the source-defined central element whose character evaluation $j_\chi$ satisfies
$$j_\chi(\Phi_S)=\frac{G_{\chi,S}(\gamma_K-1)}{H_\chi(\gamma_K-1)}.$$
Here $j_\chi$ is evaluation of a central element on the character representation. The source uses this element in the localization at the multiplicative set of layerwise regular elements of $\mathbb Z_p[[G]]$.

## Definition references

[Johnston and Nickel, §§5.3–5.5 and §8](https://arxiv.org/pdf/2010.03186)

[[def-iwasawa-algebra-of-profinite-group]]

[[lem-finite-by-zp-profinite-group-splits]]

[[thm-deligne-ribet-p-adic-measure-interpolation]]

[[thm-brauer-induction]]

## Proof status

This records the p-adic Artin element used for the finite CM cyclotomic tower in §8. The earlier local p-adic Artin definition concerns totally real admissible extensions and does not by itself certify this CM-tower convention. The source construction, character-evaluation independence, and passage into the layerwise localization are not reconstructed locally; the Deligne–Ribet measure supplier also remains incomplete.
