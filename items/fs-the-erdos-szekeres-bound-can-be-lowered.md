---
id: fs-the-erdos-szekeres-bound-can-be-lowered
kind: false-statement
title: "FALSE: every list of $mn$ pairwise distinct reals has a strictly increasing sublist of length $m+1$ or a strictly decreasing sublist of length $n+1$"
status: published
origin: session
deps: [thm-erdos-szekeres, thm-the-erdos-szekeres-bound-is-sharp,
       def-a-monotone-sublist-of-a-finite-list-of-reals, def-nat-order, def-ordered-field,
       def-nat-multiplication]
justified_by: []
aliases: []
landmark: false
proof_strategy: constructive
verification:
  precheck: pass
  verified:
    model: claude-fable-5
    verdict: certify
    date: 2026-07-29
    scope: page
    delegated_by: owner
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Erdos-Szekeres theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Erd%C5%91s%E2%80%93Szekeres_theorem"
    - title: "Longest increasing subsequence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Longest_increasing_subsequence"
pipeline_run: null
---

## Statement

**FALSE.** The statement

> for all $m, n \in \mathbb{N}$, every pairwise distinct finite list of reals of
> length $mn$ has a strictly increasing sublist of length $m+1$ or a strictly
> decreasing sublist of length $n+1$
> ([[def-a-monotone-sublist-of-a-finite-list-of-reals]]).

This is [[thm-erdos-szekeres]] with the length lowered from $mn+1$ to $mn$. The
true theorem is sharp, so lowering the length by one destroys it, and it does so
at **every** pair $(m,n)$ rather than at some exceptional pair.

## Facts & Assumptions

**Given:** The naturals $m$ and $n$, and lists of reals with their sublists as in [[def-a-monotone-sublist-of-a-finite-list-of-reals]].

[L1] For all $m, n \in \mathbb{N}$ there is a pairwise distinct list of reals of length $mn$ with no strictly increasing sublist of length $m+1$ and no strictly decreasing sublist of length $n+1$ ([[thm-the-erdos-szekeres-bound-is-sharp]]).

[L2] Every pairwise distinct list of reals of length $mn+1$ has a strictly increasing sublist of length $m+1$ or a strictly decreasing sublist of length $n+1$ ([[thm-erdos-szekeres]]).

[L3] $2 \cdot 2 = 4$ ([[def-nat-multiplication]], [[def-nat-order]]), and the terms of a list are elements of the ordered field $\mathbb{R}$ ([[def-ordered-field]]).

## Refutation

**Proof technique:** constructive.

1.1 Read the displayed claim at $m = n = 2$: every pairwise distinct list of reals of length $4$ would have a strictly increasing sublist of length $3$ or a strictly decreasing sublist of length $3$. [given, L3]

1.2 By [L1] at $m = n = 2$ there is a pairwise distinct list of reals of length $2\cdot 2 = 4$ with no strictly increasing sublist of length $3$ and no strictly decreasing sublist of length $3$. [L1, L3, construct]

2.1 That list refutes the reading of step 1.1, so the displayed claim is false. The same argument runs at every pair $(m,n)$, since [L1] produces a witness for each of them; the claim therefore fails everywhere, not at an exceptional pair. [step 1.1, step 1.2, L1]

3.1 What survives is [L2]: the conclusion holds once the length is raised to $mn+1$. So the least length at which the alternative becomes unavoidable is $mn+1$, and the claim above is exactly the assertion that it is $mn$. [step 2.1, L1, L2, discharge-construct] ∎

## Remarks

- **The false statement is not weaker in one place and true in another.** The witness of [[thm-the-erdos-szekeres-bound-is-sharp]] exists for every pair of naturals, so there is no range of $m$ and $n$ in which the lowered bound holds.

- **The degenerate pairs fail too, and for a different reason.** At $m = 0$ or $n = 0$ the length $mn$ is $0$, the list is empty, and it has no sublist of any positive length; both alternatives ask for a sublist of length at least $1$. At those pairs the claim fails without any construction being needed.
