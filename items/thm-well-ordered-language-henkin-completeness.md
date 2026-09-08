---
id: thm-well-ordered-language-henkin-completeness
kind: theorem
title: "Well-ordered language completeness with a size bound"
status: published
origin: pipeline
deps: [lem-fresh-henkin-axiom-preserves-consistency, lem-consistent-sentence-decision, lem-derivation-finite-support-and-concatenation, thm-henkin-closed-term-truth-lemma, thm-transfinite-recursion, thm-well-ordering-theorem, cor-cardinal-absorption, def-axiom-of-choice, lem-proof-fresh-constant-elimination, thm-set-language-first-order-soundness]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-09
sources:
  references:
    - title: "Moschovakis, Lemmas 1I.4–1I.5 pp40–43 and Remark 1J.6 p46; full local cardinal-length adaptation, not a proof credited to the remark."
      url: https://www.math.ucla.edu/~ynm/lectures/lnl.pdf
proof_strategy: direct
---

## Statement

In ZFC, if $\kappa$ is an infinite cardinal and a finite-arity set signature $L$ has size at most $\kappa$, every consistent $L$-sentence theory has a nonempty model of size at most $\kappa$. If every finite subset of a sentence theory has a model, it likewise has a model of size at most $\kappa$. This is an explicitly choice-assuming size theorem.

## Facts & Assumptions

**Given:** AC, an infinite cardinal $\kappa$, a signature $|L|\le\kappa$ and a sentence theory $T$.

[F1] Fresh witness axioms preserve consistency. ([[lem-fresh-henkin-axiom-preserves-consistency]])

[F2] A consistent theory can decide one sentence, choosing the positive side if consistent. ([[lem-consistent-sentence-decision]])

[F3] Finite support, proof composition and increasing consistent unions are valid. ([[lem-derivation-finite-support-and-concatenation]])

[F4] Any complete consistent deductively closed Henkin theory has its closed-term quotient as a model. ([[thm-henkin-closed-term-truth-lemma]])

[F5] Definable transfinite recursion along a well-order gives a unique sequence of sets. ([[thm-transfinite-recursion]])

[F6] Under AC every set can be well ordered. ([[thm-well-ordering-theorem]])

[F7] Infinite-cardinal sums and nonzero products below $\kappa$ are absorbed by $\kappa$. ([[cor-cardinal-absorption]])

[F8] Pure constant expansions are conservative. ([[lem-proof-fresh-constant-elimination]])

[F9] A theory with a model is consistent. ([[thm-set-language-first-order-soundness]])

[A1] The Axiom of Choice is assumed. ([[def-axiom-of-choice]])

## Proof

1.1 Use A1 and F6 to fix a well-order of the original alphabet and enough coding bijections. An alphabet of size at most $\kappa$ has at most $\kappa$ finite words: for each positive finite $r$, iterate $\kappa\cdot\kappa=\kappa$ from F7 to bound words of length $r$, include the one empty word, then use $\omega\cdot\kappa=\kappa$ from F7 for their union. One can fix one pairing bijection of $\kappa^2$ with $\kappa$ and iterate it, with a length tag, so all these bounds are uniform. The countable variables and finite punctuation are absorbed as well. Reserve constants $c_*$ and $c_{n,\alpha}$ for $n<\omega$, $\alpha<\kappa$. Their total set has size at most $\kappa$ by F7 and is disjoint from $L$. [F6, F7, A1]

2.1 Begin with the seed expansion and $T_0=T$. For round $n$, let $L_n$ contain $L$, the seed and the earlier constant layers. Use the fixed word codes to enumerate its sentences in a $\kappa$-sequence: at a code that is not a sentence use the fixed sentence $\exists x(x=x)$. Every sentence occurs. In $L_{n+1}$ start with $U_0=T_n$; at each $\alpha<\kappa$ decide the enumerated $\sigma_\alpha$ by F2, then, if it is existential, add its implication witness axiom with $c_{n,\alpha}$. The constant is absent from the current assumptions: all decisions are in $L_n$ and earlier witness axioms use only earlier indices. F1 and F8 preserve consistency in the full $L_{n+1}$. At each nonzero limit $\lambda\le\kappa$ take the union of the earlier theories; F3 gives consistency. Set $T_{n+1}=U_\kappa$. [F1, F2, F3, F8, step 1.1]

3.1 Each successor decision is determined by the predicate of syntactic consistency on a set of proof codes, and each limit is a specified union. F5 therefore supplies the inner $\kappa$-recursion, and then the outer $\omega$-recursion. These are definable operations; extend them arbitrarily on invalid histories to make a total recursion rule. Every language and theory is a set of words in the fixed potential alphabet of step 1.1, so the required set bounds hold. No regularity of $\kappa$ is required: a finite proof at any limit draws its support from one earlier stage of that increasing chain. [F3, F5, step 1.1, step 2.1]

4.1 Let $U=\bigcup_n T_n$ in $L_\infty=\bigcup_nL_n$. By F8 each earlier theory is consistent in this final constant expansion; F3 therefore gives consistency of $U$. Every final sentence lies in some $L_n$, since it uses finitely many constant layers, and is decided in that round. Every final existential sentence likewise has its witness axiom there. Take all sentence consequences of $U$ as $H$. If $H$ proved bottom, F3 would replace the finitely many used sentence consequences by their $U$-proofs, contradicting consistency. The same argument proves deductive closure. Thus $H$ has all the hypotheses of F4, and its quotient satisfies $H$ and hence, on reduct, $T$. [F3, F4, F8, step 3.1]

5.1 All closed terms inject into the word-code set of size $\kappa$. Assign each quotient class its least ordinal term code; this is defined for every nonempty class and is injective, just as equal least codes identify the same term. Thus the model has size at most $\kappa$ and is nonempty by the seed. Finally, finite satisfiability rules out a finite-support proof of bottom by F9; hence it gives consistency and the preceding construction applies. AC was assumed in step 1.1 to fix well-orders/coding data, and is retained as an explicit hypothesis of the theorem; this does not assert an arbitrary-language compactness theorem over ZF alone. [F3, F9, step 1.1, step 4.1] ∎
