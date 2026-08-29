---
id: thm-splitting-lemma-in-an-abelian-category
kind: theorem
title: "Splitting lemma in an abelian category"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-a-short-exact-sequence-is-a-kernel-cokernel-pair,
       def-split-short-exact-sequence-in-an-abelian-category,
       def-biproduct,
       thm-on-a-biproduct-the-injections-and-projections-satisfy-the-identity-sum-relation]
justified_by: []
landmark: true
proof_strategy: constructive
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Section 12.5, Lemma 12.5.10"
      url: "https://stacks.math.columbia.edu/tag/00ZX"
    - title: "Saunders Mac Lane, Categories for the Working Mathematician, VIII.4"
      url: "https://math.mit.edu/~hrm/palestine/maclane-categories.pdf"
pipeline_run: frontier-23
---

## Statement

Let
$$0\to A\xrightarrow{i}B\xrightarrow{p}C\to 0$$
be a short exact sequence in an abelian category.

1. If $s:C\to B$ satisfies $p s = 1_C$, then there is a unique morphism
   $\pi:B\to A$ such that
   $$\pi i = 1_A,\qquad i \pi + s p = 1_B.$$
2. If $\pi:B\to A$ satisfies $\pi i = 1_A$, then there is a unique morphism
   $s:C\to B$ such that
   $$p s = 1_C,\qquad i \pi + s p = 1_B.$$

In either case the sequence is split.

## Facts & Assumptions

**Given:** The short exact sequence in the statement.

[L1] In a short exact sequence, $i$ is a kernel of $p$ and $p$ is a cokernel of
$i$
([[thm-a-short-exact-sequence-is-a-kernel-cokernel-pair]]).

[L2] A split short exact sequence is exactly one equipped with maps
$s,\pi$ satisfying
$p s = 1_C$, $\pi i = 1_A$, and $i \pi + s p = 1_B$
([[def-split-short-exact-sequence-in-an-abelian-category]]).

## Proof

**Proof technique:** constructive.

1.1 Assume $p s = 1_C$ and put $t := 1_B - s p$. Then $p t = 0$, so because $i$ is a kernel of $p$ by [L1], there is a unique $\pi:B \to A$ with $i \pi = t = 1_B - s p$. [L1, given, construct, algebra]

1.2 Conversely assume $\pi i = 1_A$ and put $u := 1_B - i \pi$. Then $u i = 0$, so because $p$ is a cokernel of $i$ by [L1], there is a unique $s:C \to B$ with $s p = u = 1_B - i \pi$. [L1, given, construct, algebra]

2.1 Composing $i \pi = 1_B - s p$ with $i$ gives $i \pi i = i - s p i = i$, because $p i = 0$ by [L1]. Since $i$ is monic, $\pi i = 1_A$, and the defining equation also yields $i \pi + s p = 1_B$. [L1, step 1.1, algebra]

2.2 Composing $s p = 1_B - i \pi$ with $p$ gives $p s p = p$, and epicity of $p$ forces $p s = 1_C$. The same equation already gives $i \pi + s p = 1_B$. [L1, step 1.2, algebra]

3.1 If $\pi'$ satisfies the same two identities, then $i \pi' = 1_B - s p = i \pi$, so monicity of $i$ gives $\pi' = \pi$. Hence the map is unique, and [L2] says the sequence is split. [L1, L2, step 1.1, step 2.1]

3.2 If $s'$ satisfies the same two identities, then $s' p = 1_B - i \pi = s p$, so epicity of $p$ gives $s' = s$. Hence the map is unique, and [L2] again says the sequence is split. [L1, L2, step 1.2, step 2.2]

4.1 Steps 1.1 to 3.1 prove claim 1, and steps 1.2 to 3.2 prove claim 2. [step 1.1, step 2.1, step 3.1, step 1.2, step 2.2, step 3.2, discharge-construct] ∎
