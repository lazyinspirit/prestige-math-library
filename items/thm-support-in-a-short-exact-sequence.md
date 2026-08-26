---
id: thm-support-in-a-short-exact-sequence
kind: theorem
title: "Support in a short exact sequence is the union of the outer supports"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-support-of-a-module, thm-localisation-of-modules-is-exact, def-exact-and-short-exact-sequences-of-modules]
aliases: []
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-26
sources:
  scraped: []
  references:
    - title: "A. Altman and S. Kleiman, A Term of Commutative Algebra, 13th ed., (13.29)"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
    - title: "The Stacks Project, Section 10.40: Support"
      url: "https://stacks.math.columbia.edu/tag/080S"
pipeline_run: null
---

## Statement

If
$$
0 \longrightarrow M' \longrightarrow M \longrightarrow M'' \longrightarrow 0
$$
is a short exact sequence of left $R$-modules, then
$$
\operatorname{Supp}_R(M)=\operatorname{Supp}_R(M')\cup\operatorname{Supp}_R(M'').
$$

## Facts & Assumptions

**Given:** A commutative ring $R$ and a short exact sequence $0 \to M' \to M \to M'' \to 0$ of left $R$-modules.

[L1] A prime ideal $\mathfrak p$ lies in $\operatorname{Supp}_R(X)$ exactly when $X_{\mathfrak p}\neq0$ ([[def-support-of-a-module]]).

[L2] Localisation sends short exact sequences to short exact sequences ([[thm-localisation-of-modules-is-exact]]).

[L3] In a short exact sequence, the left map is injective and the right map is surjective ([[def-exact-and-short-exact-sequences-of-modules]]).

## Proof

**Proof technique:** direct.

1.1 Fix a prime ideal $\mathfrak p$. By [L2], localising the given short exact sequence at $\mathfrak p$ gives $0 \to M'_{\mathfrak p} \to M_{\mathfrak p} \to M''_{\mathfrak p} \to 0$. [L2]

2.1 In that localised sequence, $M_{\mathfrak p}=0$ holds exactly when both $M'_{\mathfrak p}=0$ and $M''_{\mathfrak p}=0$: if the middle term is zero then injectivity and surjectivity from [L3] force both outer terms to be zero, while if both outer terms are zero then exactness makes the middle term zero as well. [step 1.1, L3]

3.1 By [L1], step 2.1 says exactly that $\mathfrak p$ lies in $\operatorname{Supp}_R(M)$ if and only if it lies in $\operatorname{Supp}_R(M')$ or in $\operatorname{Supp}_R(M'')$. [L1, step 2.1]

4.1 Since this holds for every prime ideal $\mathfrak p$, the support identity follows. [step 3.1] ∎
