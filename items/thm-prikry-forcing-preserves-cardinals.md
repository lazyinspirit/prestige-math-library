---
id: thm-prikry-forcing-preserves-cardinals
kind: theorem
title: Prikry forcing preserves every cardinal
status: published
origin: pipeline
deps:
  - thm-prikry-forcing-adds-no-bounded-subsets
  - lem-prikry-kappa-plus-chain-condition
  - thm-prikry-generic-sequence-changes-cofinality
  - lem-lc-complete-measures-small-fibres-and-inaccessibility
  - thm-chain-condition-preserves-cofinalities-and-cardinals
  - thm-every-infinite-cardinal-is-an-aleph
  - thm-regularity-of-the-alephs
  - cor-cardinal-absorption
  - def-aleph-and-beth-hierarchies
  - def-cardinal
  - def-axiom-of-choice
provenance:
  statement: literature-derived
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
    - title: "Karagila, Forcing lecture notes, Section 9.2, Theorem 9.10(3)"
      url: https://karagila.org/files/Forcing-2023.pdf
---

## Statement

Prikry forcing at a measurable cardinal $\kappa$ preserves every ground-model
cardinal while changing $\operatorname{cf}(\kappa)$ to $\omega$.

## Facts & Assumptions

**Given:** The forcing-theorem setting over a transitive ZFC ground model $M$,
a normal measure on $\kappa$, and a generic extension $M[G]$.

[F1] [[thm-prikry-forcing-adds-no-bounded-subsets]]: Every subset of an ordinal
below $\kappa$ appearing in the extension is already in the ground model.

[F2] [[lem-prikry-kappa-plus-chain-condition]]: Prikry forcing is
$\kappa^+$-cc.

[F3] [[lem-lc-complete-measures-small-fibres-and-inaccessibility]]: A measurable
$\kappa$ is inaccessible, hence in particular an uncountable regular limit
cardinal.

[F4] [[thm-chain-condition-preserves-cofinalities-and-cardinals]]: A
$\theta$-cc forcing for regular $\theta$ preserves all ground cardinals at
least $\theta$.

[F5] [[thm-every-infinite-cardinal-is-an-aleph]] and
[[thm-regularity-of-the-alephs]]: Under Choice, every infinite cardinal is an
aleph and every successor aleph is regular.

[F6] [[cor-cardinal-absorption]]: Products of nonzero infinite cardinals with
cardinals no larger than them are absorbed by the larger cardinal.

[F7] [[def-cardinal]] and [[def-aleph-and-beth-hierarchies]]: Cardinals are
initial ordinals, and $\lambda^+$ denotes the least cardinal strictly above
$\lambda$.

[F8] [[thm-prikry-generic-sequence-changes-cofinality]]: The generic stem union
is an omega-sequence cofinal in $\kappa$.

## Proof

1.1 Every ground cardinal $\lambda<\kappa$ remains a cardinal. Otherwise in $M[G]$ some ordinal $\alpha<\lambda$ would be bijective with $\lambda$, by F7. In $M$, cardinal absorption supplies a bijection coding $\alpha\times\lambda$ by an ordinal $\rho<\kappa$ (the finite cases are immediate and the infinite case uses F6). The graph of the alleged bijection therefore codes a new subset of $\rho$, but F1 says that subset, and hence the graph, belongs to $M$. This contradicts that $\lambda$ was a ground cardinal. Choice is used only through the ground cardinal comparisons and coding already stated in F6 and F7. [F1, F6, F7]

2.1 The ordinal $\kappa$ also remains a cardinal. If it were equinumerous in $M[G]$ with some $\alpha<\kappa$, let $\mu=|\alpha|^M<\kappa$ and obtain an injection $e:\kappa\to\mu$. Since F3 makes $\kappa$ a limit cardinal, the ground successor cardinal $\mu^+$ is still below $\kappa$; it remains a cardinal by step 1.1. Restricting $e$ to $\mu^+$ would inject that preserved successor cardinal into $\mu$, contradicting the defining minimality in F7. [F3, F7, step 1.1]

3.1 Write the infinite cardinal $\kappa$ as $\aleph_\alpha$ using F5. Then $\kappa^+=\aleph_{\alpha+1}$ by the successor convention in F7, and F5 makes $\kappa^+$ regular under Choice. F2 and F4 now imply that every ground cardinal at least $\kappa^+$ is preserved. Together with steps 1.1 and 2.1, this covers every ground cardinal. [F2, F4, F5, F7, step 1.1, step 2.1]

4.1 Cardinal preservation is not cofinality preservation at $\kappa$: F8 supplies in $M[G]$ a cofinal map from $\omega$ into the still-cardinal ordinal $\kappa$, and proves $\operatorname{cf}(\kappa)=\omega$. Thus the two promised conclusions coexist without treating the cofinality change as a collapse. [F8, step 2.1, step 3.1] ∎

