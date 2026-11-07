---
id: def-p-adic-artin-l-element-for-admissible-extension
kind: definition
title: p-Adic Artin L-Element of an Admissible Extension
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 27
deps:
  - def-admissible-one-dimensional-p-adic-lie-extension
  - lem-finite-by-zp-profinite-group-splits
  - def-iwasawa-algebra-of-profinite-group
  - thm-deligne-ribet-p-adic-measure-interpolation
  - thm-primitive-hecke-l-analytic-continuation-and-functional-equation
  - thm-abelian-artin-l-series-equals-hecke-l-series
  - def-axiom-of-choice
  - def-countable-choice
  - def-dependent-choice
justified_by: []
proof_strategy: not-applicable
axiom_use: AC, Countable Choice, and Dependent Choice are inherited through the current Deligne–Ribet and Artin–Hecke interfaces.
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: Johnston and Nickel, An Unconditional Proof of the Abelian Equivariant Iwasawa Main Conjecture and Applications
      url: https://arxiv.org/pdf/2010.03186
      locator: §§5.3–5.6, especially equations (5.3)–(5.6), printed pp. 15–16.
verification: {}
---

## Definition

Assume AC, Countable Choice, and Dependent Choice. Let $p$ be odd, let $K$ be totally real, let $L/K$ be an admissible one-dimensional $p$-adic Lie extension, put $G=\operatorname{Gal}(L/K)$, and let $S$ contain the places ramified in $L/K$ and the infinite places of $K$. The $p$-adic Artin $L$-element $\Phi_S(L/K)$ is the central element of the total quotient algebra of $\Lambda(G)$ characterized by its values on irreducible $p$-adic characters: for a topological generator $\gamma_K$ of $\operatorname{Gal}(K_\infty/K)$, write $u=\chi_{\mathrm{cyc}}(\gamma_K)$ and use the normalized $p$-adic Artin $L$-value
$$L_{p,S}(1-s,\chi)=\frac{G_{\chi,S}(u^s-1)}{H_\chi(u^s-1)},\qquad H_\chi(T)=\begin{cases}\chi(\gamma_K)(1+T)-1,&H\subseteq\ker\chi,\\1,&H\not\subseteq\ker\chi,\end{cases}$$
where $G_{\chi,S}$ is obtained from the Deligne–Ribet power series on one-dimensional characters by Brauer induction. The element is characterized by $j_\chi(\Phi_S)=G_{\chi,S}(\gamma_K-1)/H_\chi(\gamma_K-1)$ for every irreducible character $\chi$.

## Definition references

[Johnston and Nickel, §§5.3–5.6](https://arxiv.org/pdf/2010.03186)

[[lem-finite-by-zp-profinite-group-splits]]

[P. Deligne and K. A. Ribet, §8](https://math.berkeley.edu/~ribet/Articles/deligne-ribet.pdf)
