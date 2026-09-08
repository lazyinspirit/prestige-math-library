---
id: thm-countable-lindenbaum-henkin-completion
kind: theorem
title: "Canonical countable Lindenbaum–Henkin construction"
status: draft
origin: pipeline
deps: [lem-countable-henkin-syntax-coding, lem-fresh-henkin-axiom-preserves-consistency, lem-consistent-sentence-decision, lem-derivation-finite-support-and-concatenation, thm-recursion, lem-proof-fresh-constant-elimination]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  references:
    - title: "Moschovakis, Lemma 1I.4 and both sublemmas, printed pp40–41; explicit two-round-index witness-axiom adaptation."
      url: https://www.math.ucla.edu/~ynm/lectures/lnl.pdf
proof_strategy: direct
---

## Statement

In classical ZF, given an explicit injection of a set signature $L$ into $\omega$ and a consistent $L$-sentence theory $T$, there is a countable constant expansion $L_\infty$ and a consistent, deductively closed, syntactically complete Henkin sentence theory $H\supseteq T$ in it. A seed constant is included. Countability here means an injection into $\omega$; no effective decision algorithm is asserted.

## Facts & Assumptions

**Given:** The explicit signature injection and consistency of $T$.

[F1] The potential staged alphabet and its finite syntax have uniform natural-number codes and exhaustive sentence sequences. ([[lem-countable-henkin-syntax-coding]])

[F2] A fresh witness axiom preserves consistency, and a seed constant alone is conservative. ([[lem-fresh-henkin-axiom-preserves-consistency]])

[F3] A consistent theory can decide a sentence, taking its positive side if consistent and its negative side otherwise. ([[lem-consistent-sentence-decision]])

[F4] Finite support, proof composition and consistency of increasing unions hold. ([[lem-derivation-finite-support-and-concatenation]])

[F5] A specified successor operation on a set with an initial state has a unique natural-number recursion. ([[thm-recursion]])

[F6] Arbitrary pure constant expansions are conservative for original sentences. ([[lem-proof-fresh-constant-elimination]])

## Proof

1.1 Start with $L_0=L\cup\{c_*\}$ and $T_0=T$, consistent in $L_0$ by F2. For each round $n$, F1 provides a fixed exhaustive sequence $(\sigma_{n,k})_{k<\omega}$ of $L_n$-sentences. Reserve a distinct constant $c_{n,k}$ for each index $k$, disjoint from $L_n$. Let $L_{n+1}$ include all these constants, and regard $T_n$ in this pure expansion; it remains consistent by F6. [F1, F2, F6]

2.1 In round $n$ put $U_0=T_n$. At index $k$ put $V_k=U_k\cup\{\sigma_{n,k}\}$ if this is consistent, and $V_k=U_k\cup\{\neg\sigma_{n,k}\}$ otherwise. F3 makes $V_k$ consistent. If $\sigma_{n,k}=\exists x\phi$, put $U_{k+1}=V_k\cup\{\exists x\phi\to\phi[c_{n,k}/x]\}$; otherwise put $U_{k+1}=V_k$. The new constant occurs in neither $V_k$ nor the matrix, since only earlier indices have been used and every enumerated sentence belongs to $L_n$. F2 gives consistency in the one-constant extension, and F6 gives it in the whole $L_{n+1}$. Thus each $U_k$ is consistent. [F2, F3, F6, step 1.1]

3.1 The test “has no finite proof of bottom” is a set-theoretic predicate, so the successor rule in step 2.1 is a definable function, even when not computable. Encode its state by the index and the current subset of the potential sentence set; define any unused malformed-state transition to a fixed state. F5 then supplies the inner sequence, and F4 makes $T_{n+1}=\bigcup_k U_k$ consistent. The outer round operation is likewise definable on a set of language/theory states, so F5 supplies all rounds. No arbitrary choice of enumerations or of consistent sides is made. [F1, F4, F5, step 2.1]

4.1 Put $L_\infty=\bigcup_nL_n$ and $U=\bigcup_nT_n$. Each $T_n$ remains consistent in $L_\infty$ by F6, so F4 gives consistency of $U$. Every finite formula in $L_\infty$ lies in some $L_n$ by F1. Round $n$ therefore decides each such sentence and supplies a witness axiom for every such existential sentence. Repeated enumeration entries do no harm: each index has its own fresh constant. [F1, F4, F6, step 3.1]

5.1 Let $H=\{\sigma\in\operatorname{Sent}(L_\infty):U\vdash\sigma\}$. This is a set by Separation. If $H$ proved bottom, finite support would use finitely many members of $H$; replace them by their finite $U$-proofs using F4 to contradict consistency of $U$. The same composition shows that every sentence consequence of $H$ already belongs to $H$. It contains $U$, all decisions and all witness axioms from step 4.1, and the seed is a closed term. F1 injects the union alphabet and syntax into $\omega$. Thus $H$ has every asserted property in ZF. [F1, F4, step 4.1] ∎
