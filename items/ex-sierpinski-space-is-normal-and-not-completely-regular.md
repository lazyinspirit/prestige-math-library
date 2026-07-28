---
id: ex-sierpinski-space-is-normal-and-not-completely-regular
kind: example
title: "Sierpinski space is normal and not completely regular, so the $T_1$ hypothesis in the Urysohn corollary is not decoration"
status: draft
origin: session
deps: [fs-every-normal-space-is-completely-regular, cor-urysohns-lemma-closes-the-separation-chain,
       def-standard-topologies, def-normal-and-t4-spaces, def-completely-regular-and-tychonoff-spaces,
       thm-completely-regular-implies-regular, def-regular-and-t3-spaces, def-t0-and-t1-spaces]
justified_by: []
aliases: []
landmark: false
short: "Sierpinski: normal, not $T_1$, not completely regular"
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Sierpinski space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Sierpi%C5%84ski_space"
pipeline_run: null
---

## Example

Sierpinski space $S = \{a,b\}$, $a \ne b$, with
$\mathcal{T}_{\mathrm{Sier}} = \{\varnothing,\{b\},S\}$
([[def-standard-topologies]]) is normal ([[def-normal-and-t4-spaces]]) but not
completely regular ([[def-completely-regular-and-tychonoff-spaces]]), by
[[fs-every-normal-space-is-completely-regular]]. Since [[thm-completely-regular-implies-regular]]
would give regularity from complete regularity, $S$ is in particular not
regular, and it is not $T_1$: the singleton $\{b\}$ is not closed in $S$.

This is exactly why [[cor-urysohns-lemma-closes-the-separation-chain]] proves
its arrow for a normal $T_1$ space and not for a bare normal space: $S$ is a
normal space for which the corollary's conclusion — complete regularity —
genuinely fails, and the one hypothesis it lacks is $T_1$.

## Facts & Assumptions

**Given:** Sierpinski space $S$ as above.

[L1] $S$ is normal and not completely regular, with witness argument as in [[fs-every-normal-space-is-completely-regular]]. [L2] $S$ is not $T_1$ ([[def-t0-and-t1-spaces]]): the only closed sets of $S$ are $S, \{a\}, \varnothing$, so the singleton $\{b\}$ is not closed.

## Verification

**Proof technique:** direct.

1.1 By [L1], $S$ is normal and not completely regular. [L1]

1.2 By [L2], $\{b\}$ is not among the closed sets $\{S,\{a\},\varnothing\}$ of $S$, so $S$ fails $T_1$. [L2]

2.1 By steps 1.1 and 1.2: $S$ is a normal space that is not $T_1$ and not completely regular, so it does not meet the hypothesis of [[cor-urysohns-lemma-closes-the-separation-chain]] (normal *and* $T_1$), and indeed its conclusion fails for $S$; dropping $T_1$ from that corollary would make it false, with $S$ as the witness. [step 1.1, step 1.2] ∎

## Remarks

- **This is not a new computation.** Every fact used above is proved in [[fs-every-normal-space-is-completely-regular]]; this item only reads that refutation as the positive example it also is, and connects it to the hypothesis of [[cor-urysohns-lemma-closes-the-separation-chain]] by name.
