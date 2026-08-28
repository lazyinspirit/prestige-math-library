---
id: thm-isotypic-decomposition-of-a-completely-reducible-representation-is-unique
kind: theorem
title: "The isotypic decomposition of a completely reducible representation is unique"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-isotypic-component-of-a-completely-reducible-representation, cor-schurs-lemma-for-irreducible-representations, def-completely-reducible-representation]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-28
sources:
  scraped: []
  references:
    - title: "Peter Webb, A Course in Finite Group Representation Theory, Corollary 1.2.7"
      url: "https://www-users.cse.umn.edu/~webb/RepBook/RepBookLatex.pdf"
    - title: "Pavel Etingof et al., Introduction to Representation Theory, Proposition 2.2"
      url: "https://ocw.mit.edu/courses/18-712-introduction-to-representation-theory-fall-2010/24d8b3fa2ce48e48ee6c2d8d5e3562f6_MIT18_712F10_replect.pdf"
pipeline_run: null
---

## Statement

Let $V$ be a completely reducible representation of a group $G$ over a field
$k$. If $S_1,\ldots,S_r$ represent the distinct equivalence classes of
irreducible subrepresentations occurring in $V$, then

$$V=V_{(S_1)}\oplus\cdots\oplus V_{(S_r)}.$$

Moreover each summand $V_{(S_i)}$ depends only on the equivalence class of
$S_i$, so this isotypic decomposition is independent of the chosen
decomposition of $V$ into irreducible summands.

## Facts & Assumptions

**Given:** A completely reducible representation $V$ of a group $G$ over a field $k$.

[L1] For an irreducible representation $S$, the isotypic component $V_{(S)}$ is the sum of all irreducible subrepresentations of $V$ equivalent to $S$ ([[def-isotypic-component-of-a-completely-reducible-representation]]).

[L2] A nonzero intertwiner between irreducible representations is an isomorphism. In particular, if two irreducible representations are not equivalent, every intertwiner between them is zero ([[cor-schurs-lemma-for-irreducible-representations]]).

[L3] A completely reducible representation is an internal direct sum of irreducible subrepresentations ([[def-completely-reducible-representation]]).

## Proof

**Proof technique:** direct.

1.1 By [L3], choose irreducible subrepresentations $U_1,\ldots,U_n$ with $$V=U_1\oplus\cdots\oplus U_n.$$ Group these summands by equivalence class: for each class represented by $S_i$, let $W_i$ be the direct sum of those $U_j$ equivalent to $S_i$. Then $$V=W_1\oplus\cdots\oplus W_r,$$ and each $W_i$ is contained in $V_{(S_i)}$ by [L1]. [L1, L3, given, choose]

2.1 Fix $i$ and let $U \le V$ be any irreducible subrepresentation equivalent to $S_i$. Write $\pi_j:V \to U_j$ for the projection attached to step 1.1. If $U_j$ is not equivalent to $S_i$, then $\pi_j|_U:U \to U_j$ is an intertwiner between non-equivalent irreducibles, so [L2] makes it zero. Hence the projection of $U$ onto $\bigoplus_{j:\,U_j \not\cong S_i} U_j$ is zero, and therefore $U \le W_i$. Since this holds for every such $U$, the defining sum [L1] satisfies $V_{(S_i)} \le W_i$. Together with step 1.1, this gives $V_{(S_i)}=W_i$. [L1, L2, step 1.1, given, algebra]

3.1 Step 2.1 shows that each grouped block $W_i$ is exactly the isotypic component $V_{(S_i)}$, so it depends only on the equivalence class of $S_i$, not on the chosen irreducible splitting. Since the $W_i$ already form a direct sum in step 1.1, the displayed isotypic decomposition is unique. [step 1.1, step 2.1] ∎
