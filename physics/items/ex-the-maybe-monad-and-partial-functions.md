---
id: ex-the-maybe-monad-and-partial-functions
kind: example
title: "The Kleisli category of the maybe monad is the category of sets and partial functions"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-kleisli-category, def-monad]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-sonnet-5"
    verdict: pass
    date: 2026-08-17
  audited: 2026-08-17
sources:
  scraped: []
  references:
    - title: "E. Riehl, Category Theory in Context, 2nd ed., Examples 5.1.4(i) and 5.2.11(i)"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: null
---

## Example

Let $T(Y)=Y\sqcup\{\bot\}$. With insertion as unit and multiplication that collapses either occurrence of $\bot$, this is the **maybe monad**. Its Kleisli arrows are precisely partial functions.

## Facts & Assumptions

**Given:** The assignment $T(Y)=Y\sqcup\{\bot\}$ on sets.

[L1] A monad has natural unit and multiplication satisfying two unit laws and associativity ([[def-monad]]).

[L2] A Kleisli arrow $X\to Y$ is an ordinary arrow $X\to T(Y)$, and its composition uses the monad multiplication ([[def-kleisli-category]]).

## Verification

**Proof technique:** direct.

1.1 Define $T(f)$ to act by $f$ on $Y$ and fix $\bot$, let $\eta_Y$ be the inclusion of $Y$, and let $\mu_Y:T(TY)\to TY$ fix elements of $Y$ and send both the inner and outer undefined values to $\bot$. Direct inspection of the defined and undefined cases proves the unit and associativity laws in [L1]. [L1]

2.1 A function $u:X\to Y\sqcup\{\bot\}$ determines the partial function with domain $D_u=\{x:u(x)\in Y\}$ and value $u(x)$ there. Conversely, a partial function on $D\subseteq X$ extends uniquely by assigning $\bot$ outside $D$. [L2, step 1.1]

3.1 These constructions are inverse. Expanding Kleisli composition shows that $v\star u$ is defined exactly where $u$ is defined and $v$ is defined at $u(x)$, with value $v(u(x))$; this is the usual maximal-domain composition of partial functions. [L2, step 2.1] ∎
