---
id: thm-bounded-alternation-qbf-is-level-complete
kind: theorem
title: "Bounded alternation qbf is level complete"
status: published
origin: pipeline
deps: [def-polynomial-hierarchy-levels, lem-ph-circuit-matrix-final-block-encoding, def-polynomial-time-many-one-reduction]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Arora–Barak, Computational Complexity, 2007 draft; §5.2.2 Example5.9, pp93–94."
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
---

## Statement

For every fixed $k\ge1$, truth of prenex Boolean formulas with $k$ alternating blocks beginning existentially is $\Sigma_k^p$-complete under polynomial-time many-one reductions. The universally starting version is $\Pi_k^p$-complete. The matrix is a general Boolean formula, empty blocks are allowed, and malformed encodings are rejected.

## Facts & Assumptions

**Given:** the objects and hypotheses in the statement above.

[F1] All languages are subsets of $\{0,1\}^*$. Put $\Sigma_0^p=\Pi_0^p=P$ as in the stated convention. For a fixed integer $k\ge1$, $L\in\Sigma_k^p$ means that a deterministic polynomial-time predicate $R$ and polynomially bounded, polynomial-time computable lengths $p_1,\ldots,p_k$ satisfy $$x\in L\iff \exists y_1\in\{0,1\}^{p_1(|x|)}\ \forall y_2\in\{0,1\}^{p_2(|x|)}\cdots Q_k y_k\in\{0,1\}^{p_k(|x|)}\ R(x,y_1,\ldots,y_k).$$ Here $Q_j$ is existential for odd $j$ and universal for even $j$. Starting universally defines $\Pi_k^p$. Write $\mathrm{PH}=\bigcup_{k\ge0}\Sigma_k^p$. The level and all polynomials are fixed for a language, not part of the input. Length zero allows the single empty string. Variable-length witnesses can be encoded with a length field and padding; every padded string decodes to a bounded-length string, so universal blocks introduce no invalid-witness exception. ([[def-polynomial-hierarchy-levels]]).

[F2] For a fixed polynomial-time Boolean predicate $R(x,y)$, and a polynomial bound on $|y|$ in $|x|$, one can construct in time polynomial in $|x|$ formulas $F_\exists(x;y,z)$ in 3CNF and $F_\forall(x;y,z)$ in 3DNF such that, for every allowed $y$, $$R(x,y)\iff\exists z\,F_\exists(x;y,z)\iff\forall z\,F_\forall(x;y,z).$$ Here clauses or terms have at most three literals. Both formula length and $|z|$ are polynomially bounded. ([[lem-ph-circuit-matrix-final-block-encoding]]).

[F3] Let $A\subseteq\Sigma^*$ and $B\subseteq\Gamma^*$ be languages over finite alphabets. A **polynomial-time many-one reduction** from $A$ to $B$ is a total function $$ f:\Sigma^*\to\Gamma^* $$ such that: - $f$ is computable by a deterministic Turing machine in polynomial time, and - for every $x\in\Sigma^*$, $$ x\in A\iff f(x)\in B. $$ When such an $f$ exists, write $$ A\le_p B. $$ ([[def-polynomial-time-many-one-reduction]]).


## Proof

1.1 Parse the encoding deterministically; reject a malformed word. For a well-formed formula, quantify one polynomial-length assignment string per block and evaluate the matrix in polynomial time. Make the parsing test a conjunction in the matrix, so rejection remains valid for either starting polarity. This proves membership even when blocks have length zero. [F1]

1.2 Given a language at the desired level, take its fixed defining predicate. For each input $x$, apply the pointwise encoding to the whole tuple of quantified strings. If its last block is existential, use $F_\exists$ and merge $z$ into that block. If it is universal, use $F_\forall$ instead. For every assignment to earlier blocks the replacement has exactly the original truth value, so iterating the outer quantifiers preserves truth in both directions. [F2]

2.1 There are still $k$ blocks and polynomially many symbols; compilation is polynomial-time. It outputs a well-formed instance on every input, with membership equivalent to the original language, which is exactly the required reduction. The construction applies separately to both starting polarities, including $k=1$. [F3, step 1.2] ∎
