---
id: lem-choice-free-semistable-comparison-reduction-to-de-rham-invariants
kind: lemma
title: Semistable comparison reduced to de Rham invariants without Choice
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 14
deps:
  - lem-cyclotomic-tilt-valuation-and-fontaine-principal-kernel
  - lem-perfect-base-witt-teichmuller-expansions-and-units
  - lem-choice-free-crystalline-logarithm-and-abstract-semistable-period-ring
  - lem-choice-free-normalized-semistable-comparison-homomorphism
  - lem-choice-free-scaled-fontaine-logarithm-not-rational
  - lem-choice-free-ramified-crystalline-comparison-injection
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Jean-Marc Fontaine, Le corps des périodes p-adiques
      url: https://www.numdam.org/item/AST_1994__223__59_0/
      locator: Section 4.3.1–4.3.3; the Kummer coordinate is replaced locally by the cyclotomic kernel reduction
verification: {}
---

## Statement

Let $F/\mathbb Q_p$ be a GIVEN valued algebraic closure, $C=\widehat F$ its ordinary completion, and a compatible primitive cyclotomic system be GIVEN. Let $\xi$ be its cyclotomic Fontaine-kernel generator, and put $y=\xi\bmod p\in\mathcal O_C^\flat$. Then the normalized comparison image of the valuation coordinate $\lambda_{\mathrm{st}}(y)$ is not in $\operatorname{Frac}(B_{\mathrm{cris}})$. If in addition $B_{\mathrm{dR}}^{G_{\mathbb Q_p}}=\mathbb Q_p$ is GIVEN, that image is transcendental over $\operatorname{Frac}(B_{\mathrm{cris}})$ and the normalized map $K\otimes_{K_0}B_{\mathrm{st}}\to B_{\mathrm{dR}}$ is injective for every finite $K\subset F$. No Choice axiom or compatible Kummer tower is used; the fixed-field identity is an explicit hypothesis, not a conclusion.

## Facts & Assumptions

**Given:** The valued algebraic closure, its ordinary completion, and the primitive cyclotomic system. The displayed de Rham fixed-field identity is a further hypothesis only for the transcendence and semistable injection conclusions.

[F1] The cyclotomic generator $\xi$ is regular and its reduction $y$ has tilt valuation one. [[lem-cyclotomic-tilt-valuation-and-fontaine-principal-kernel]]

[F2] In a perfect-base Witt ring, reduction modulo $p$ identifies the first coordinate, Teichmüller lifts are multiplicative, and an element is a unit exactly when its first coordinate is a unit. [[lem-perfect-base-witt-teichmuller-expansions-and-units]]

[F3] The crystalline logarithm is defined on tilt units; $B_{\mathrm{st}}$ is polynomial over $B_{\mathrm{cris}}$ in any nonzero-valuation coordinate, and its Galois action respects the generators. [[lem-choice-free-crystalline-logarithm-and-abstract-semistable-period-ring]]

[F4] The normalized comparison extends the crystalline embedding; its proof constructs it by $\lambda_{\mathrm{st}}(x)\mapsto L([x])$, where $L$ is the displayed normalized logarithm on de Rham units, agrees with the usual logarithm on $1+\ker\theta$, and extends the crystalline logarithm on tilt units. [[lem-choice-free-normalized-semistable-comparison-homomorphism]]

[F5] For any given Witt unit $b$, $\log(1+\xi/(pb))$ is not in $\operatorname{Frac}(B_{\mathrm{cris}})$. [[lem-choice-free-scaled-fontaine-logarithm-not-rational]]

[F6] The multiplication map $K\otimes_{K_0}B_{\mathrm{cris}}\to B_{\mathrm{dR}}$ is injective without Choice for every finite $K\subset F$. [[lem-choice-free-ramified-crystalline-comparison-injection]]

## Proof

1.1 Let $W=W(\mathcal O_C^\flat)$ and $E=\operatorname{Frac}(B_{\mathrm{cris}})$. By [F1], $v(y)=1$ and $y\ne0$. The Witt vectors $[y]$ and $p+\xi$ have the same reduction modulo $p$, so write $[y]=p+\xi+pa$ for a unique $a\in W$. Put $b=1+a$. Then $\theta(b)=y^\sharp/p$ has valuation zero, since $v(y)=1$. Thus $b\in W^\times$ by [F2]. [F1, F2, given, construct, algebra]

2.1 Write $x=b\bmod p\in(\mathcal O_C^\flat)^\times$. By [F2], $b=[x](1+pd)$ for some $d\in W$. The ordinary series $\log(1+pd)=\sum_{n\ge1}(-1)^{n+1}p^nd^n/n$ converges $p$-adically in $W[1/p]$, including $p=2$, because $n-v_p(n)\to\infty$. In the normalized logarithm construction of [F4], its finite-quotient value is the same series, while $L([x])=\lambda(x)\in B_{\mathrm{cris}}$ by [F3]. Therefore $L(b)\in B_{\mathrm{cris}}$. Since $[y]/(pb)=1+\xi/(pb)$, the homomorphism property, $L(p)=0$, and the kernel logarithm formula give $L([y])=L(b)+\log(1+\xi/(pb))$. By [F5], the second term is not in $E$, so the comparison image $u=L([y])$ is not in $E$. [F2, F3, F4, F5, step 1.1, construct, algebra]

3.1 For any $g\in G_{\mathbb Q_p}$, the quotient $g(y)/y$ has tilt valuation zero. Hence [F3]–[F4] give $g(u)-u=\lambda(g(y)/y)\in B_{\mathrm{cris}}\subset E$, and $E$ is Galois-stable. Suppose now that $B_{\mathrm{dR}}^{G_{\mathbb Q_p}}=\mathbb Q_p$ is GIVEN and that $u$ is algebraic over $E$, with monic minimal polynomial $X^d+a_{d-1}X^{d-1}+\cdots$. Applying $g$ and translating by $g(u)-u$ produces another monic polynomial of degree $d$ vanishing at $u$, so it is the same polynomial. Comparing the coefficient of $X^{d-1}$ gives $g(a_{d-1})+d(g(u)-u)=a_{d-1}$. Thus $a_{d-1}+du$ is fixed by $G_{\mathbb Q_p}$ and belongs to $\mathbb Q_p\subset E$, contradicting step 2.1. Hence $u$ is transcendental over $E$. [F3, F4, step 2.1, given, algebra]

4.1 By [F6], $K\otimes_{K_0}E$ embeds into $B_{\mathrm{dR}}$ and is a finite extension field of $E$. A transcendental element over $E$ remains transcendental over this finite algebraic extension. Since $v(y)=1$, the polynomial presentation in [F3] and the comparison formula in [F4] now give the asserted injection of $K\otimes_{K_0}B_{\mathrm{st}}$ into $B_{\mathrm{dR}}$. No automorphism extension, Kummer selection, or derivation of the given fixed-field identity is used. [F3, F4, F6, step 1.1, step 3.1, given, algebra] ∎

## Source notes

Fontaine, Section 4.3.1–4.3.3, was read in the full cached paper; the minimal-polynomial coefficient argument is reproduced above. The normalized comparison supplier's Proof steps 2.1, 3.1 and 5.1 supply the explicit $L$ construction used in [F4]; its complete source body is bound in the accompanying proof evidence. The cyclotomic valuation coordinate avoids the source's choice of a Kummer tower, but the de Rham fixed-field identity remains an explicit hypothesis.
