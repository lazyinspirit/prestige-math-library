---
id: thm-completion-is-exact-on-finite-modules
kind: theorem
title: "Adic completion is exact on finite modules over a Noetherian ring"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-adic-completion-of-a-module, thm-exactness-of-inverse-limits-under-mittag-leffler, def-noetherian-ring, thm-artin-rees-lemma, cor-induced-and-intrinsic-adic-filtrations-are-equivalent]
aliases: []
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "A. Altman and S. Kleiman, A Term of Commutative Algebra, 13th ed., Theorem 22.17"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
    - title: "J. S. Milne, A Primer of Commutative Algebra, Proposition 24.4"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
    - title: "The Stacks Project, Lemma 10.97.1"
      url: "https://stacks.math.columbia.edu/tag/0BNH"
pipeline_run: null
---

## Statement

Assume the Axiom of Choice.

Let $R$ be a Noetherian commutative ring, let $I \subseteq R$ be an ideal, and let
$$
0 \to M' \to M \to M'' \to 0
$$
be a short exact sequence of finitely generated $R$-modules. Then the induced
sequence of $I$-adic completions
$$
0 \to \widehat{M'} \to \widehat M \to \widehat{M''} \to 0
$$
is exact.

## Facts & Assumptions

**Given:** A Noetherian commutative ring $R$, an ideal $I \subseteq R$, and a short exact sequence $0 \to M' \to M \to M'' \to 0$ of finitely generated $R$-modules.

[L1] Countable inverse limits preserve short exact sequences whenever the left system is Mittag-Leffler ([[thm-exactness-of-inverse-limits-under-mittag-leffler]]).

[L2] The $I$-adic completion is the inverse limit of the quotients by the powers of $I$ ([[def-adic-completion-of-a-module]]).

## Proof

**Proof technique:** direct.

1.1 For each $n \ge 0$, the given short exact sequence induces an exact sequence $$0 \to M'/(M'\cap I^nM) \to M/I^nM \to M''/I^nM'' \to 0.$$ The first map is injective because its kernel is $(M'\cap I^nM)/(M'\cap I^nM)$, and the second map is surjective because every class in $M''/I^nM''$ lifts to a class in $M/I^nM$. [given, algebra]

2.1 The left inverse system $$M'/(M'\cap I^nM)$$ has surjective transition maps, hence is Mittag-Leffler. Indeed, if $n \ge m$ and $x \in M'$, then the class of $x$ in $$M'/(M'\cap I^mM)$$ is the image of the class of the same $x$ in $$M'/(M'\cap I^nM).$$ Therefore every transition map $$M'/(M'\cap I^nM) \to M'/(M'\cap I^mM)$$ is surjective. [step 1.1, algebra]

3.1 Taking inverse limits in the sequences of step 1.1 and using [L1] yields an exact sequence $$0 \to \varprojlim M'/(M'\cap I^nM) \to \varprojlim M/I^nM \to \varprojlim M''/I^nM'' \to 0.$$ [L1, step 2.1]

4.1 By [L2], the middle and right inverse limits are $\widehat M$ and $\widehat{M''}$. For the left inverse limit, the induced filtration $M'\cap I^nM$ on $M'$ is equivalent to the intrinsic $I$-adic filtration $I^nM'$ by [[cor-induced-and-intrinsic-adic-filtrations-are-equivalent]], so its completion is $\widehat{M'}$. [L2, step 3.1]

5.1 Substituting these identifications into step 3.1 gives $$0 \to \widehat{M'} \to \widehat M \to \widehat{M''} \to 0,$$ which is the claimed exactness. [step 4.1] ∎
