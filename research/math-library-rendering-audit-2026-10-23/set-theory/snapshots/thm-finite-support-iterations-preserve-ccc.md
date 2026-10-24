---
id: thm-finite-support-iterations-preserve-ccc
kind: theorem
title: Finite-support iterations of ccc forcing are ccc
status: published
origin: pipeline
deps: [def-finite-support-forcing-iteration, lem-iteration-restrictions-and-complete-embeddings, thm-two-step-generic-factorization-and-ccc, thm-regular-uncountable-finite-delta-system, def-axiom-of-choice]
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
    - {title: "Karagila, Forcing & Symmetric Extensions, Theorem 6.14", url: "https://karagila.org/files/Forcing-2023.pdf"}
---

## Statement

In ZFC, if every $P_\alpha$ forces $\dot Q_\alpha$ ccc, then every $P_\beta$ of the finite-support iteration is ccc.

## Facts & Assumptions

**Given:** AC and the stated finite-support iteration.

[F1] [[thm-two-step-generic-factorization-and-ccc]] proves the successor step.

[F2] [[lem-iteration-restrictions-and-complete-embeddings]] supplies restriction maps and complete top-padding embeddings. Normalization of off-support names and disjoint-tail amalgamation at limits are verified directly from the iteration order below; F2 makes no claim about arbitrary restrictions.

[F3] [[thm-regular-uncountable-finite-delta-system]] thins uncountable finite supports.

## Proof

1.1 First normalize any $p\in P_\beta$ without changing its forcing condition up to equivalence. At every $\xi\notin\operatorname{supp}(p)$ replace $p(\xi)$ by the distinguished literal top name $\dot1_\xi$; retain $p(\xi)$ on its finite support. Induction on $\xi\le\beta$ shows that the original and normalized prefixes force each other below themselves. At an off-support coordinate the original prefix forces $p(\xi)=\dot1_\xi$ by the definition of support, and forcing-equivalent prefixes preserve that assertion; at a support coordinate the names coincide. Consequently the normalized function is a valid condition with the same support and is equivalent to $p$ in both order directions. If its support lies below $\alpha<\beta$, it is *literally* the top-padding of its $P_\alpha$ restriction. Replacing members of an antichain by equivalent normalized conditions preserves incompatibility. This normalization uses the supplied top names of the finite-support definition, not a property claimed by F2. [F2, given]

2.1 Induct on $\beta$. The trivial initial stage is ccc and F1 gives every successor step. If $\operatorname{cf}(\beta)=\omega$, write $\beta=\sup_n\beta_n$. Normalize an alleged $\omega_1$-antichain by step 1.1. Every finite support is contained in some $\beta_n$, so one $n$ captures uncountably many normalized members. They are literal top-paddings of $P_{\beta_n}$-conditions. Induction makes two compatible in $P_{\beta_n}$, and F2 carries that compatibility to their paddings in $P_\beta$, contradicting the antichain. [F1, F2, step 1.1]

3.1 At a limit of uncountable cofinality, normalize an alleged $\omega_1$-antichain by step 1.1. If one finite support occurs uncountably often, choose $\alpha<\beta$ above it; the corresponding normalized conditions are literal paddings from $P_\alpha$, contradicting induction and F2. Otherwise thin to uncountably many distinct supports and apply F3 to obtain a delta system with finite root $r$. Choose $\alpha<\beta$ above $r$. By induction two restrictions to $\alpha$ are compatible. Their support petals above $\alpha$ are disjoint. Let $s\in P_\alpha$ extend both restrictions and form the function whose prefix is $s$, whose coordinates above $\alpha$ on the two disjoint petals are those of the respective normalized conditions, and whose other coordinates are literal top names. At a tail coordinate belonging to one petal, the new prefix extends that condition's original prefix, so its forced iterand membership and order comparison persist by monotonicity; at coordinates of $s$, validity is already checked in $P_\alpha$. Hence this finite-support function is a valid condition extending both normalized conditions. The disjoint-tail amalgamation is proved from the iteration order; F2 is used only for the literal padded prefix. This contradicts the antichain, and equivalence transfers the contradiction to the original conditions. AC is used for thinning. [F2, F3, step 1.1, step 2.1] ∎
