---
id: cor-burns-daoud-liang-degree-zero-picard-limit-torsion
kind: corollary
title: "Degree-Zero Picard Limit Is Torsion over the Noetherian Subalgebra"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 18
deps:
  - thm-burns-daoud-liang-function-field-iwasawa-module-structure
  - def-weil-etale-class-group-and-cohomology-in-function-field-tower
  - def-burns-daoud-liang-decomposition-hypothesis
  - def-axiom-of-choice
  - def-countable-choice
  - def-dependent-choice
justified_by: []
proof_strategy: direct
axiom_use: "AC, AC_omega, and DC are inherited from the function-field tower and Weil–étale class-group interfaces."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "David Burns, Alexandre Daoud, and Dingli Liang, On Non-Noetherian Iwasawa Theory, Corollary 3.7 and §3.2.4"
      url: "https://arxiv.org/pdf/2401.02946"
    - title: "J. S. Milne, Arithmetic Duality Theorems, 2nd ed., Appendix A.7–A.13"
      url: "https://www.jmilne.org/math/Books/ADTnot.pdf"
verification: {}
---

## Statement

Assume AC, AC$_\omega$, and DC. Let $k$ be a global function field of characteristic $p$ with finite exact constant field and let $K/k$ be an abelian Galois extension with $\Gamma=\operatorname{Gal}(K/k)\cong\mathbb Z_p^{\mathbb N}\times G$, where $G$ is finite abelian and $\mathbb N=\{1,2,\ldots\}$. Fix this group isomorphism and give $\Gamma$ its product profinite topology. Assume that only finitely many places ramify in $K/k$. Let $\Sigma$ be a finite nonempty set of places containing all ramified places and no place that splits completely in $K$, where splitting completely means having trivial decomposition subgroup. For $n\ge1$ define $\Gamma(n)=\{(x_i,g)\in\mathbb Z_p^{\mathbb N}\times G:x_1=\cdots=x_n=0,\ g=1_G\}$. For a place $v$ of $k$, fix a prolongation to $K$ and let $\Gamma_v$ be its stabilizer; this subgroup is independent of the prolongation because $\Gamma$ is abelian. Assume there is $n_0\ge1$ such that $\Gamma(n_0)\cap\Gamma_v$ is not open in $\Gamma_v$ for every $v\in\Sigma$. For each finite intermediate field $L/k$ in $K/k$, let $C_L$ be its smooth proper curve over its finite exact constant field $k_L$, let $\operatorname{Pic}(C_L)$ be its divisor group modulo principal divisors, with $\deg(\sum_x n_x[x])=\sum_x n_x[\kappa(x):k_L]$, and put $\operatorname{Pic}^0(L)=\ker(\deg:\operatorname{Pic}(C_L)\to\mathbb Z)$. The norm inverse limit
$$\operatorname{Pic}^0(K)_p:=\varprojlim_{L\subset K}\bigl(\mathbb Z_p\otimes_{\mathbb Z}\operatorname{Pic}^0(L)\bigr),$$
with norm transition maps,
is a torsion module over $R=\mathbb Z_p[\![\mathbb Z_p^{\mathbb N}]\!]$, meaning its tensor product with the total quotient ring of $R$ is zero. If $\operatorname{Pic}^0(K)_p$ is finitely generated over $R$, then at most one place ramified in $K/k$ has an open decomposition subgroup in $\Gamma$; if such a place $v$ exists, then $\Gamma_v=\Gamma$.

## Statement references

[Burns, Daoud, and Liang, Corollary 3.7](https://arxiv.org/pdf/2401.02946)

[Milne, *Arithmetic Duality Theorems*, Appendix A.7–A.13](https://www.jmilne.org/math/Books/ADTnot.pdf)

## Facts & Assumptions

**Given:** The function-field tower and hypotheses in the Statement.

[F1] [[thm-burns-daoud-liang-function-field-iwasawa-module-structure]]: under the stated decomposition hypothesis, the inverse-limit Weil–étale module $M$ is asserted to be finitely presented and torsion over $A$.

[F2] [[def-weil-etale-class-group-and-cohomology-in-function-field-tower]]: $\operatorname{Pic}^0(K)_p$ and $\operatorname{Cl}(\mathcal O_K^\Sigma)_p$ are the norm inverse limits of the finite-level degree-zero Picard and $\Sigma$-class groups.

[F3] [[def-burns-daoud-liang-decomposition-hypothesis]]: $\Gamma_v$ is the stabilizer of a prolongation of $v$ and the hypothesis is the non-openness of $\Gamma(n_0)\cap\Gamma_v$.

[A1] AC, AC$_\omega$, and DC are inherited from the function-field tower and Weil–étale class-group interfaces. ([[def-axiom-of-choice]], [[def-countable-choice]], [[def-dependent-choice]])

[L1] The source proof invokes an exact sequence $0\to\operatorname{Cl}(\mathcal O_K^\Sigma)_p\to M\to\ker(\epsilon_\Sigma)\to0$ and a second exact sequence relating $\ker(\epsilon_{\Sigma_K^{\mathrm{fin}}})$, $\operatorname{Pic}^0(K)_p$, $\operatorname{Cl}(\mathcal O_K^\Sigma)_p$, and $\mathbb Z_p/(n_K)$. Here $\epsilon_{\Sigma'}$ is the source's canonical map from the finite product of completed group rings indexed by $v\in\Sigma'$ to $\mathbb Z_p$, $\Sigma_K^{\mathrm{fin}}$ consists of places of $\Sigma$ with finite residue degree in $K/k$, and $n_K$ is the source's possibly zero integer. These sequences are cited there as [8, (4)–(6)], but no local supplier proves their definitions, hypotheses, maps, or exactness in this pair.

[L2] The finite-generation conclusion uses a coherent-module lemma cited there as Glaz, *Commutative Coherent Rings*, Theorem 2.1.2; its precise local hypotheses and proof have not been supplied in this pair.

## Proof

**Given:** The data in the Statement and [F1]–[F3], subject to [L1]–[L2].

1.1 If the first exact sequence described in [L1] were locally proved, its injection of the $\Sigma$-class-group limit into $M$, together with the torsion assertion in [F1], would make that class-group limit torsion. The sequence and its hypotheses remain unresolved in [L1], so this conditional implication does not establish the corollary. [F1, F2, L1, given]

2.1 The finite-generation implication further uses the second exact sequence from §3.2.4 and the coherent-module lemma [L2] to show that two open ramified decomposition subgroups, or one proper open subgroup, contradict finite generation. Neither input has a proved local supplier in this pair. [F2, F3, L1, L2, step 1.1]

3.1 The full source corollary is retained, but the missing exact-sequence and module arguments prevent a complete local proof; the item is therefore escalated with both obligations explicit. [F1, L1, L2, step 2.1] ∎
