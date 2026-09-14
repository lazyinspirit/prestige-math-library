---
id: fs-prikry-forcing-is-ccc
kind: false-statement
title: "False: Prikry forcing is ccc"
status: published
origin: pipeline
deps:
  - lem-prikry-kappa-plus-chain-condition
  - def-prikry-forcing-and-direct-extension
  - def-lc-complete-ultrafilters-and-measurable-cardinals
  - def-kappa-closure-distributivity-and-chain-condition
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Karagila, Forcing lecture notes, Section 9.2, Definition 9.9 and Theorem 9.10(3)"
      url: https://karagila.org/files/Forcing-2023.pdf
---

## Statement refuted

Prikry forcing is ccc.

In fact, if $U$ is a normal measure on the uncountable cardinal $\kappa$,
then $\mathbb P_U$ has an antichain of size $\kappa$. This refutes ccc even
though $\mathbb P_U$ is $\kappa^+$-cc.

## Facts & Assumptions

**Given:** $U$ is a normal measure on the uncountable cardinal $\kappa$, and
$\mathbb P_U$ uses the stronger-below order.

[F1] [[lem-prikry-kappa-plus-chain-condition]]: Prikry forcing is
$\kappa^+$-cc but has an antichain of size $\kappa$ and is not ccc.

[F2] [[def-prikry-forcing-and-direct-extension]]: A condition has a finite
increasing stem and a measure-one upper part; any two conditions with the same
stem are compatible.

[F3] [[def-lc-complete-ultrafilters-and-measurable-cardinals]]: The normal
measure is nonprincipal and $\kappa$-complete.

[F4] [[def-kappa-closure-distributivity-and-chain-condition]]: ccc means that
every antichain is countable, while $\kappa^+$-cc excludes antichains of size
$\kappa^+$.

## Counterexample

1.1 For each $\alpha<\kappa$, set $A_\alpha=\{\xi<\kappa:\alpha<\xi\}$. Its complement is the intersection-complement of the singletons $\{\xi\}$ for $\xi\le\alpha$: nonprincipality puts every $\kappa\setminus\{\xi\}$ in $U$, and F3 keeps their fewer-than-$\kappa$ intersection $A_\alpha$ in $U$. [F3]

2.1 Define $p_\alpha=(\langle\alpha\rangle,A_\alpha)$. Since $\min A_\alpha=\alpha+1$, F2 makes $p_\alpha$ a condition. If $\alpha\ne\beta$ and $r$ extended both $p_\alpha$ and $p_\beta$, the stem of $r$ would end-extend both one-entry stems, so its first entry would have to equal both $\alpha$ and $\beta$. This is impossible. Therefore $$\{p_\alpha:\alpha<\kappa\}$$ is a pairwise incompatible family, and the indexing is injective, so it is an antichain of cardinality exactly $\kappa$. [F2, step 1.1]

3.1 Because $\kappa$ is uncountable, the antichain in step 2.1 is uncountable. By F4 this violates ccc, furnishing the promised witness to the failure of the refuted statement. [F4, step 2.1]

4.1 There is no conflict with the weaker positive conclusion in F1. There are only $\kappa$ finite stems, and conditions with the same stem are compatible by F2. Thus among $\kappa^+$ conditions two share a stem and are compatible, so no antichain has size $\kappa^+$. The explicit antichain from step 2.1 has size $\kappa$, which is below that forbidden size. [F1, F2, F4, step 2.1, step 3.1] ∎
