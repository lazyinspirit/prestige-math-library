---
id: lem-aep-implies-fixed-rate-lossless-coding
kind: lemma
title: "AEP criterion for fixed-rate lossless coding"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 2
deps:
  - def-finite-block-information-and-entropy
  - def-finite-block-source-code
justified_by: []
proof_strategy: direct
axiom_use: "No choice axiom is used; finite-alphabet sums and code constructions are explicit, and cited measure-theoretic results retain their stated hypotheses."
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Thomas M. Cover and Joy A. Thomas, Elements of Information Theory, 2nd ed."
      url: "https://pages.hmc.edu/ruye/book2/ElementsofInformationTheory.pdf"
      locator: "Chapter 13 §§13.4–13.5, printed pp.440–456: LZ78 parsing, Ziv inequality, finite-state bound, and recurrence-time coding."
---
## Statement

For any finite-alphabet source with -n^{-1}log2 P(X^n) converging in probability to h, proves vanishing block error is achievable for R>h and impossible for R<h.

## Facts & Assumptions

**Given:** Finite block laws $p_n$ on $\mathcal A^n$, entropy-rate candidate $h$, a target rate $R\ge0$, and normalized self-information $I_n(X^n)/n$ from [[def-finite-block-information-and-entropy]]. Assume $I_n(X^n)/n\to h$ in probability.

[F1] [[def-finite-block-information-and-entropy]]: $I_n(x)=-\log_2p_n(x)$ on positive-probability blocks.

[F2] [[def-finite-block-source-code]]: a rate-$R$ code has message set $M\subseteq\{0,1\}^{\lfloor nR\rfloor}$, encoder $e:\mathcal A^n\to M$, decoder $d:M\to\mathcal A^n$, and $e$ injective on its success set.

## Proof

**Given:** The AEP convergence and finite-block coding convention [F1]–[F2].

1.1 If $h<0$, then the nonnegative variable $I_n(X^n)/n$ stays at distance at least $-h$ from $h$, contradicting convergence in probability; hence $h\ge0$. Let $R>h$ and choose $\epsilon>0$ with $h+\epsilon<R$. Define $T_n=\{x:p_n(x)>0,\ I_n(x)\le n(h+\epsilon)\}$. On $T_n$, each word has probability at least $2^{-n(h+\epsilon)}$, so $|T_n|\le2^{n(h+\epsilon)}$. The AEP gives $P(X^n\in T_n)\to1$. [F1, given, algebra]

2.1 For all sufficiently large $n$, $|T_n|\le2^{\lfloor nR\rfloor}$, since $R-h-\epsilon>0$. Fix an enumeration of the finite alphabet $\mathcal A$ once, and let $a_0$ be its first symbol. For each such $n$, order $T_n$ lexicographically, take $M_n=\{0,1\}^{\lfloor nR\rfloor}$ in lexicographic order, and map the $j$th typical block to the $j$th binary word. Define $e_n$ by this assignment on $T_n$ and by $e_n(x)=0^{\lfloor nR\rfloor}$ otherwise. Define $d_n$ to return each typical block on its assigned message and $a_0^n$ on all remaining messages. This is a rate-$R$ code in the sense of [F2], and every block in $T_n$ is decoded correctly. Its error is at most $P(X^n\notin T_n)\to0$. For the finitely many earlier $n$, take $e_n$ constant at the all-zero message and $d_n$ constant at $a_0^n$. [F2, step 1.1, algebra]

3.1 Let $0\le R<h$ and choose $\epsilon>0$ with $R+\epsilon<h$. For any rate-$R$ code, its success set $S_n$ has at most $2^{\lfloor nR\rfloor}$ words by [F2]. Split it according to whether $I_n(x)>n(R+\epsilon)$. The probability of successful words in that part is at most $2^{nR}2^{-n(R+\epsilon)}=2^{-n\epsilon}$, while the other part has total probability tending to zero by the AEP. Thus success probability tends to zero. At $R=h$ neither conclusion is asserted. [F1, F2, given, algebra] ∎
