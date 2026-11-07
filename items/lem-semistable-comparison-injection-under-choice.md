---
id: lem-semistable-comparison-injection-under-choice
kind: lemma
title: Semistable comparison injection under Choice
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 13
deps:
  - def-axiom-of-choice
  - lem-cyclotomic-tate-twists-and-de-rham-invariants-under-choice
  - lem-choice-free-normalized-semistable-comparison-homomorphism
  - lem-choice-free-crystalline-logarithm-and-abstract-semistable-period-ring
  - lem-choice-free-semistable-logarithm-not-rational-over-fontaine-series
  - lem-cyclotomic-tilt-valuation-and-fontaine-principal-kernel
  - lem-fontaine-map-from-finite-witt-ghost-congruences
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Jean-Marc Fontaine, Le corps des périodes p-adiques
      url: https://www.numdam.org/item/AST_1994__223__59_0/
      locator: Section 4.3.3; the minimal-polynomial coefficient argument is reconstructed below
verification: {}
---

## Statement

Assume AC. Let $F/\mathbb Q_p$ be a GIVEN valued algebraic closure, $C=\widehat F$ its ordinary completion, and a compatible primitive cyclotomic system be GIVEN. Then the normalized comparison homomorphism $\iota_0:B_{\mathrm{st}}\to B_{\mathrm{dR}}$ is injective. This result concerns the unextended semistable ring; it does not assert injectivity after tensoring by a ramified coefficient field, crystalline invariant fields, or the corresponding statement without AC.

## Facts & Assumptions

**Given:** AC, the valued closure, its completion, and the primitive cyclotomic system.

[A1] The Axiom of Choice permits selection of a compatible sequence of roots. [[def-axiom-of-choice]]

[F1] Under AC the given de Rham period field satisfies $B_{\mathrm{dR}}^{G_{\mathbb Q_p}}=\mathbb Q_p$. [[lem-cyclotomic-tate-twists-and-de-rham-invariants-under-choice]]

[F2] The normalized comparison map is a crystalline algebra homomorphism, equivariant for $G_{\mathbb Q_p}$, whose value at an algebraic-sharp coordinate is the prescribed logarithm. [[lem-choice-free-normalized-semistable-comparison-homomorphism]]

[F3] The abstract semistable ring is polynomial in one nonzero-valuation coordinate over $B_{\mathrm{cris}}$, and $G_{\mathbb Q_p}$ preserves $B_{\mathrm{cris}}$. [[lem-choice-free-crystalline-logarithm-and-abstract-semistable-period-ring]]

[F4] For a given tilt element $y$ with $y^\sharp=p$ and $[y]-p$ generating the Fontaine kernel, $\log([y]/p)$ is not rational over $B_{\mathrm{cris}}$. [[lem-choice-free-semistable-logarithm-not-rational-over-fontaine-series]]

[F5] The tilt is a valuation domain with valuation $v(y^\sharp)$ and the cyclotomic Fontaine-kernel generator reduces to an element of valuation one. [[lem-cyclotomic-tilt-valuation-and-fontaine-principal-kernel]]

[F6] Actual compatible $p$-power sequences identify multiplicatively with tilt elements, with sharp equal to the first entry. [[lem-fontaine-map-from-finite-witt-ghost-congruences]]

[F7] The crystalline logarithm sends $\epsilon^a$ to $at$ for $a\in\mathbb Z_p$, as proved in step 4.1 of the named supplier. [[lem-choice-free-crystalline-logarithm-and-abstract-semistable-period-ring]]

## Proof

1.1 By AC choose recursively $p_0=p$ and $p_{n+1}^p=p_n$ in $F$. Each $p_n$ is integral. The actual compatible tuple defines $y$ in the tilt, with $y^\sharp=p$ by [F6], so $v(y)=1$ by [F5]. Put $\xi=[y]-p$. Its reduction modulo $p$ is $y$, and $\theta(\xi)=0$. If $\xi_0$ is the cyclotomic kernel generator, write $\xi=\xi_0 w$. Since the reductions of $\xi_0$ and $\xi$ both have tilt valuation one, the reduction of $w$ is a unit in the tilt valuation ring. The $p$-adically complete Witt ring makes $w$ a unit by geometric inversion after lifting its inverse modulo $p$. Thus $\xi$ also generates the kernel. [A1, F5, F6, given, construct, algebra]

2.1 The given primitive system identifies the compatible roots of unity with $\mathbb Z_p$. For each $g\in G_{\mathbb Q_p}$, $g(y)/y$ is such a compatible tuple, hence equals $\epsilon^{\eta(g)}$ for a unique $\eta(g)\in\mathbb Z_p$. Set $u=\log([y]/p)$. By [F2] this is the comparison image of the semistable coordinate $\lambda_{\mathrm{st}}(y)$, and [F7] gives $g(u)=u+\eta(g)t$. Put $E=\operatorname{Frac}(B_{\mathrm{cris}})$, a $G_{\mathbb Q_p}$-stable field. By [F4] and step 1.1, $u\notin E$. [F2, F3, F4, F7, step 1.1, algebra]

3.1 Suppose $u$ is algebraic over $E$, with monic minimal polynomial $P(X)=X^d+a_{d-1}X^{d-1}+\cdots+a_0$. For each $g$, the monic polynomial $g(P)(X+\eta(g)t)$ also has $u$ as a root, and has degree $d$, hence equals $P(X)$. Its coefficient of $X^{d-1}$ yields $g(a_{d-1})+d\eta(g)t=a_{d-1}$. Consequently $a_{d-1}+du$ is fixed by the entire Galois group, so belongs to $\mathbb Q_p\subset E$ by [F1]. Since $d\ne0$ in characteristic zero, this contradicts $u\notin E$. Thus $u$ is transcendental over $E$. Evaluating the polynomial presentation of [F3] at $u$ is therefore injective, proving the stated comparison injection. [F1, F3, step 2.1, algebra] ∎

## Source notes

Fontaine's full Section 4.3.3 was read; its minimal-polynomial coefficient method is reproduced explicitly above. AC is used to construct the actual root tower and by the separately scoped invariant-field supplier. No claim is made about the original unqualified comparison or the ramified scalar extension.
