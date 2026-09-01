---
id: thm-faithful-flatness-detected-by-nonzero-modules-and-fibres
kind: theorem
title: "For a flat module, faithful flatness is equivalent to detecting nonzero modules and residue fields"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-flat-and-faithfully-flat-modules-and-ring-maps, thm-flatness-criteria-by-injections-and-ideals]
aliases: []
proof_strategy: direct
verification:
  audited: 2026-09-01
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Stacks Project, Lemmas 10.39.14 and 10.39.15"
      url: "https://stacks.math.columbia.edu/tag/00H9"
    - title: "Allen B. Altman and Steven L. Kleiman, A Term of Commutative Algebra, Exercise (9.10)"
      url: "https://web.mit.edu/18.705/www/12Nts.pdf"
---

## Statement

Assume the Axiom of Choice for the maximal-ideal detection step.

Let $R$ be a commutative ring and let $M$ be a flat $R$-module. The following
are equivalent:

1. $M$ is faithfully flat.
2. For every nonzero $R$-module $N$, one has $N\otimes_R M\neq0$.
3. For every prime ideal $\mathfrak p\subset R$,
   $$
   \kappa(\mathfrak p)\otimes_R M\neq0.
   $$
4. For every maximal ideal $\mathfrak m\subset R$,
   $$
   R/\mathfrak m\otimes_R M=M/\mathfrak m M\neq0.
   $$

## Facts & Assumptions

**Given:** A commutative ring $R$ and a flat $R$-module $M$.

[L1] Faithful flatness means that tensoring with $M$ reflects exactness
([[def-flat-and-faithfully-flat-modules-and-ring-maps]]).

[L2] Flatness preserves injections, hence tensoring a monomorphism with $M$
remains injective ([[thm-flatness-criteria-by-injections-and-ideals]]).

## Proof

**Proof technique:** direct.


1.1 If $M$ is faithfully flat and $N\neq0$, then the map $0\to N$ is nonzero. If $N\otimes_R M$ were zero, tensoring would turn the nonzero map $0\to N$ into the zero map, contradicting exactness reflection in [L1]. Thus 1 implies 2. [L1, given]


1.2 Condition 2 implies 3 by taking $N=\kappa(\mathfrak p)$, and 3 implies 4 by restricting to maximal primes. [given]


1.3 Assume 4. Let $N\neq0$ and choose $0\neq x\in N$. The cyclic submodule $Rx\cong R/\operatorname{Ann}(x)$ injects into $N$. Choose a maximal ideal $\mathfrak m$ containing $\operatorname{Ann}(x)$. Then there is a surjection $ R/\operatorname{Ann}(x)\twoheadrightarrow R/\mathfrak m. $ Tensoring with $M$ preserves the injection by [L2], and the target tensor is nonzero by 4. Hence $ N\otimes_R M\neq0. $ So 4 implies 2. [L2, given, choose]


1.4 Assume 2 and let $ N_1\to N_2\to N_3 $ be a complex whose tensor with $M$ is exact. Since $M$ is flat, it is enough to prove exactness at $N_2$. If $x\in\ker(N_2\to N_3)$ is not in the image of $N_1\to N_2$, then it defines a nonzero element of the quotient $ Q:=\ker(N_2\to N_3)/\operatorname{im}(N_1\to N_2). $ But tensoring with $M$ kills $Q$, because the tensor complex is exact. This contradicts 2. Hence $Q=0$, and the original complex is exact. Therefore $M$ is faithfully flat. [L1, algebra]


2.1 The four conditions are equivalent. [algebra] ∎
