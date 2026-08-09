---
id: lem-deleted-tychonoff-plank-is-regular-and-nonnormal
kind: lemma
title: "Assuming countable choice, the deleted Tychonoff plank is a regular nonnormal open subspace of a compact Hausdorff normal space"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-order-topology-on-an-ordinal, lem-ordinal-order-topology-is-t3, thm-positive-heredity-of-separation-axioms, thm-positive-productivity-of-separation-axioms, thm-finite-products-of-compact-spaces, thm-a-compact-hausdorff-space-is-regular-and-normal, thm-countable-subsets-of-omega-one-are-bounded, thm-ordinal-spaces-and-compactness, def-ordinal-addition, def-normal-and-t4-spaces, def-countable-choice]
aliases: []
landmark: true
proof_strategy: contradiction
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-31
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "L. A. Steen and J. A. Seebach, Counterexamples in Topology, deleted Tychonoff plank"
      url: "https://web.math.ucsb.edu/~bigelow/books/counterexamples.pdf"
    - title: "Tychonoff plank (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Tychonoff_plank"
pipeline_run: null
---

## Statement

Assume the Axiom of Countable Choice. Let $P=(\omega_1+1)\times(\omega+1)$ with the product of its ordinal order topologies, let $p=(\omega_1,\omega)$, and let $T=P\setminus\{p\}$. Then $P$ is compact, Hausdorff, and normal, while $T$ is an open regular subspace that is not normal.

## Facts & Assumptions

**Given:** The Axiom of Countable Choice and the ordinal product $P$ above.

[A1] The Axiom of Countable Choice, under which every at most countable subset of $\omega_1$ is bounded below $\omega_1$ ([[def-countable-choice]], [[thm-countable-subsets-of-omega-one-are-bounded]]).

[L1] Ordinal spaces have clopen bases and are $T_3$; every successor ordinal is compact ([[lem-ordinal-order-topology-is-t3]], [[thm-ordinal-spaces-and-compactness]], [[def-ordinal-addition]]).

[L2] Finite products of compact spaces are compact, compact Hausdorff spaces are normal, and the positive preservation theorems preserve regularity, Hausdorffness, and regularity under subspaces ([[thm-finite-products-of-compact-spaces]], [[thm-a-compact-hausdorff-space-is-regular-and-normal]], [[thm-positive-productivity-of-separation-axioms]], [[thm-positive-heredity-of-separation-axioms]]).

[F1] Normality separates disjoint closed subsets by disjoint open sets ([[def-normal-and-t4-spaces]]).

[F2] The ordinal order-topology basis gives neighbourhoods $(\alpha,\omega_1]$ of $\omega_1$, singleton neighbourhoods $\{n\}$ of $n<\omega$, and neighbourhoods $(m,\omega]$ of $\omega$ ([[def-order-topology-on-an-ordinal]], [[lem-ordinal-order-topology-is-t3]]).

## Proof

**Proof technique:** contradiction.

1.1 The factors $\omega_1+1$ and $\omega+1$ are compact and $T_3$ by [L1], so [L2] makes $P$ compact, Hausdorff, regular, and normal. [L1, L2]

1.2 Since $P$ is $T_1$, $\{p\}$ is closed; hence $T$ is open. Its regularity follows from the hereditary regularity conclusion in [L2]. [L2]

1.3 Put $E=\{\omega_1\}\times\omega$ and $F=\omega_1\times\{\omega\}$, regarded as subsets of $T$. The clopen ordinal basis shows that they are disjoint closed subsets of $T$. [F2]

2.1 Suppose, for a contradiction, that $T$ is normal. Choose disjoint open $U,V\subseteq T$ with $E\subseteq U$ and $F\subseteq V$. [F1, step 1.3, assume-contra]

3.1 For $n<\omega$, let $C_n=\{\xi<\omega_1:(\xi,\omega_1]\times\{n\}\subseteq U\}$. By [F2] each $C_n$ is nonempty; [A1] chooses $\alpha_n\in C_n$ simultaneously. The countable set $\{\alpha_n:n<\omega\}$ is bounded by some $\alpha<\omega_1$. [A1, F2, step 2.1]

3.2 Put $\beta=\alpha+1<\omega_1$. Since $(\beta,\omega)\in V$, [F2] gives $\gamma<\beta$ and $m<\omega$ with $(\gamma,\beta]\times(m,\omega]\subseteq V$. [F2, step 2.1]

4.1 The point $(\beta,m+1)$ lies in $V$ by step 3.2 and in $U$ by step 3.1, because $\beta>\alpha\ge\alpha_{m+1}$. This contradicts $U\cap V=\varnothing$, so $T$ is not normal; together with steps 1.1 and 1.2 this proves all the stated properties. [step 1.1, step 1.2, step 3.1, step 3.2, discharge-contradiction] ∎
