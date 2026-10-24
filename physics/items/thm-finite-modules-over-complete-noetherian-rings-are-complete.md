---
id: thm-finite-modules-over-complete-noetherian-rings-are-complete
kind: theorem
title: "Finite modules over complete Noetherian rings are complete"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-separated-and-complete-filtered-module, def-adic-completion-of-a-module, thm-completion-as-extension-of-scalars]
aliases: []
proof_strategy: direct
verification:
  audited: 2026-09-01
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-01
sources:
  scraped: []
  references:
    - title: "A. Altman and S. Kleiman, A Term of Commutative Algebra, 13th ed., Lemma 22.27"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
    - title: "The Stacks Project, Lemma 10.96.11"
      url: "https://stacks.math.columbia.edu/tag/00M9"
pipeline_run: null
---

## Statement

Assume the Axiom of Choice.

Let $R$ be a Noetherian commutative ring, let $I \subseteq R$ be an ideal, and assume that
$R$ is $I$-adically complete. Then every finitely generated $R$-module $M$ is
$I$-adically complete.

## Facts & Assumptions

**Given:** A Noetherian commutative ring $R$, an ideal $I \subseteq R$, and a finitely generated $R$-module $M$, with $R$ $I$-adically complete.

[L1] Completion of a finite module is extension of scalars: $$ M \otimes_R \widehat R \xrightarrow{\sim} \widehat M $$ ([[thm-completion-as-extension-of-scalars]]).

[L2] An $I$-adically complete ring is identified with its own completion ([[def-separated-and-complete-filtered-module]], [[def-adic-completion-of-a-module]]).

## Proof

**Proof technique:** direct.

1.1 Since $R$ is $I$-adically complete, [L2] gives an isomorphism $$\kappa_R \colon R \xrightarrow{\sim} \widehat R.$$ Tensoring with the finite module $M$ yields an isomorphism $$M \otimes_R R \xrightarrow{\sim} M \otimes_R \widehat R.$$ Using the unit isomorphism $M \otimes_R R \cong M$, we get an isomorphism $$M \xrightarrow{\sim} M \otimes_R \widehat R.$$ [L2, algebra]

2.1 Composing the isomorphism of step 1.1 with [L1] gives an isomorphism $$M \xrightarrow{\sim} \widehat M.$$ By construction this composite sends $m$ to the compatible residue class system $(m \bmod I^nM)_n$, so it is exactly the completion map $\kappa_M$. Therefore $\kappa_M$ is an isomorphism and $M$ is $I$-adically complete. [L1, step 1.1] ∎
