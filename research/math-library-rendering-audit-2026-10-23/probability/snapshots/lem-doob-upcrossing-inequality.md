---
id: lem-doob-upcrossing-inequality
kind: lemma
title: Doob upcrossing inequality
status: published
origin: pipeline
deps: [def-upcrossing-number-of-an-interval, def-martingale-submartingale-and-supermartingale, cor-nonnegative-predictable-transforms-preserve-submartingale-gains, thm-basic-algebra-and-order-properties-of-conditional-expectation, thm-convex-functions-of-martingales-are-submartingales, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - {title: "Durrett, Probability: Theory and Examples, 5th ed., Theorem 4.2.10 (upcrossing inequality) with proof", url: "https://web.archive.org/web/20240514054731if_/https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"}
---

## Statement

Assume AC. If $X$ is an integrable submartingale and $a<b$, then for every $N$,
$$(b-a)\mathbb E U_N[a,b](X) \le \mathbb E(X_N-a)^+-\mathbb E(X_0-a)^+ \le \mathbb E(X_N-a)^+.$$

## Facts & Assumptions

**Given:** The hypotheses, objects, and conventions in the Statement.

[F1] [[def-upcrossing-number-of-an-interval]] defines $U_N$ without choosing crossing times.

[F2] [[thm-convex-functions-of-martingales-are-submartingales]] and conditional Jensen show that a convex function of a submartingale is a submartingale when the displayed variables are integrable.

[F3] [[cor-nonnegative-predictable-transforms-preserve-submartingale-gains]] gives nonnegative expected gain for bounded nonnegative predictable holdings.

[F4] [[def-axiom-of-choice]] states AC, assumed here because the submartingale and predictable-transform interfaces require it.

## Proof

1.1 Put $Y_n=a+(X_n-a)^+$. The function $x\mapsto a+(x-a)^+$ is convex and $1$-Lipschitz up to an additive constant, so $Y$ is integrable and is a submartingale by F2. Moreover $X_s\le a$ iff $Y_s=a$, and $X_t\ge b$ iff $Y_t\ge b$; therefore $U_N[a,b](Y)=U_N[a,b](X)$. [F1, F2]

1.2 Define $H_j\in\{0,1\}$ before the increment $Y_j-Y_{j-1}$: it switches from $0$ to $1$ after the first observation at level $a$, remains $1$ until an observation at least $b$, then repeats. This rule depends only on $Y_0,\ldots,Y_{j-1}$, so $H$ is predictable. Let $K_j=1-H_j$, also nonnegative and predictable. [F3]

2.1 Each completed holding interval contributes at least $b-a$ to $(H\mathbin\cdot Y)_N=\sum_{j=1}^N H_j(Y_j-Y_{j-1})$. Any final incomplete holding starts at $Y_s=a$ and contributes $Y_N-a\ge0$. Hence, pathwise, $$(b-a)U_N[a,b](Y)\le(H\mathbin\cdot Y)_N.$$ No maximizing tuple from F1 was selected. [F1, step 1.2]

3.1 Since $H+K=1$, $$Y_N-Y_0=(H\mathbin\cdot Y)_N+(K\mathbin\cdot Y)_N.$$ F3 gives $\mathbb E(K\mathbin\cdot Y)_N\ge0$, so step 2.1 yields $$(b-a)\mathbb E U_N[a,b](X) \le\mathbb E(Y_N-Y_0) =\mathbb E(X_N-a)^+-\mathbb E(X_0-a)^+.$$ The last subtracted term is nonnegative, proving the second inequality. AC is used exactly as stated in F4. [F3, F4, step 1.1, step 1.2, step 2.1] ∎
