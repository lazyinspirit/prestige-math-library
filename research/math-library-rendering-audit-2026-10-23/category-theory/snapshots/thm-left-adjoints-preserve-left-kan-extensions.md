---
id: thm-left-adjoints-preserve-left-kan-extensions
kind: theorem
title: "Left adjoints preserve left Kan extensions"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-left-and-right-kan-extension, def-adjunct-and-transposition-under-an-adjunction]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
sources:
  scraped: []
  references:
    - title: "E. Riehl, Category Theory in Context, 2nd ed., Lemma 6.3.2"
      url: "https://emilyriehl.github.io/files/context.pdf"
    - title: "B. Richter, From Categories to Homotopy Theory, §4.3"
      url: "https://www.math.uni-hamburg.de/personen/richter/bookdraft.pdf"
pipeline_run: null
---

## Statement

Let $K:\mathcal C\to\mathcal D$ and $F:\mathcal C\to\mathcal E$ be functors,
and let $(L,\eta)$ be a left Kan extension of $F$ along $K$.

If $S:\mathcal E\to\mathcal Z$ is left adjoint to $R:\mathcal Z\to\mathcal E$,
then $(SL,S\eta)$ is a left Kan extension of $SF$ along $K$.

The right-handed dual is obtained by reversing the arrows, but it is not used
as a separate dependency on this page.

## Facts & Assumptions

**Given:** A left Kan extension $(L,\eta)$ of $F$ along $K$, and an adjunction $S\dashv R$ with unit and counit.

[L1] A left Kan extension $(L,\eta)$ of $F$ along $K$ is initial among pairs $(M,\alpha)$ with $\alpha:F\Rightarrow MK$ ([[def-left-and-right-kan-extension]]).

[F2] Under an adjunction $S\dashv R$, the right adjunct of $u:SX\to Y$ is $u^\flat=R(u)\circ\eta_X$, and the left adjunct of $v:X\to RY$ is $v^\sharp=\varepsilon_Y\circ S(v)$ ([[def-adjunct-and-transposition-under-an-adjunction]]).

## Proof

**Proof technique:** direct.

1.1 Let $\alpha:SF\Rightarrow MK$ be any natural transformation. By [F2], each component $\alpha_c:S(Fc)\to M(Kc)$ has a right adjunct $\alpha_c^\flat:Fc\to R(M(Kc))$, and these components form a natural transformation $\alpha^\flat:F\Rightarrow (RM)K$. Since $(L,\eta)$ is a left Kan extension, [L1] gives a unique natural transformation $\tau:L\Rightarrow RM$ with $\alpha^\flat=(\tau K)\circ\eta$. [F2, L1]

2.1 Let $\sigma:SL\Rightarrow M$ be the left adjunct of $\tau$. Then $(\sigma K)\circ S\eta$ has right adjunct $(\tau K)\circ\eta=\alpha^\flat$, so by uniqueness of adjuncts it equals $\alpha$. If $\sigma':SL\Rightarrow M$ also satisfied $(\sigma'K)\circ S\eta=\alpha$, then its right adjunct would satisfy the same factorization equation as $\tau$, and [L1] would force that adjunct to equal $\tau$; applying [F2] again gives $\sigma'=\sigma$. Therefore $(SL,S\eta)$ is initial among pairs $(M,\alpha)$, hence a left Kan extension of $SF$ along $K$. [F2, L1, step 1.1] ∎
