---
id: cor-compact-operator-iff-approximation-numbers-tend-to-zero
kind: corollary
title: Compact operator iff approximation numbers tend to zero
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [lem-singular-values-equal-approximation-numbers, def-absolute-value-and-singular-values-of-a-compact-operator, lem-finite-rank-operators-are-compact, thm-norm-limit-of-compact-operators-is-compact, def-compact-linear-operator, def-bounded-linear-operator, def-operator-norm, def-infimum, thm-infimum-property, def-dimension, def-metric-convergence, def-hilbert-space, def-banach-space, def-countable-choice, thm-singular-value-decomposition-for-compact-operators]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-22
sources:
  references:
    - title: "Gerald Teschl, Topics in Real and Functional Analysis, version November 17, 2017 — §3.5, Lemma 3.19 and its converse (printed pp. 92–93)"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
    - title: "Anthony W. Knapp, Advanced Real Analysis — Chapter II, §5"
      url: "https://www.math.stonybrook.edu/~aknapp/download/a2-realanal-inside.pdf"
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let $H$ and
$K$ be real or complex Hilbert spaces and let $T\in\mathcal B(H,K)$ be a bounded
linear operator ([[def-bounded-linear-operator]], [[def-hilbert-space]]). Put
$a_0(T):=\|T\|$, and for $n\ge1$ put
$$a_n(T):=\inf\bigl\{\|T-F\|:\ F\in\mathcal B(H,K),\ \dim\operatorname{ran}F<n\bigr\}$$
([[def-infimum]], [[def-operator-norm]], [[def-dimension]]), where only finite-rank $F$ are admitted. The error set contains $\|T\|$ by taking $F=0$ and is bounded below by $0$, so its real infimum exists by [[thm-infimum-property]]. Thus
$(a_n(T))_{n\in\mathbb N}$ is a sequence in the library's zero-based
convention. Then $T$ is compact
([[def-compact-linear-operator]]) if and only if $a_n(T)\to0$
([[def-metric-convergence]]). If $T$ is compact, then $a_n(T)=s_n(T)$ for every
$n$, where $(s_n(T))$ is the zero-padded singular-value sequence of $T$
([[def-absolute-value-and-singular-values-of-a-compact-operator]]) for every
$n\ge1$.

## Facts & Assumptions

**Given:** Countable Choice, Hilbert spaces $H,K$, a bounded $T\in\mathcal B(H,K)$ and the approximation numbers $a_n(T)$.

[A1] **Compact case.** If $T$ is compact then $a_n(T)=s_n(T)$ for all $n$, and $s_n(T)\to0$: the sequence $(s_n(T))$ is nonincreasing with nonnegative terms, is eventually $0$ in the finite-rank case, and in the infinite-rank case consists of the positive eigenvalues of $|T|$ listed with multiplicity, which by the spectral theorem have only $0$ as accumulation point, so the nonincreasing listing tends to $0$ ([[lem-singular-values-equal-approximation-numbers]], [[def-absolute-value-and-singular-values-of-a-compact-operator]], [[thm-singular-value-decomposition-for-compact-operators]]).

[A2] **Finite-rank operators are compact.** A bounded finite-rank operator is compact; a norm limit of compact operators with Banach target is compact under $\mathrm{AC}_\omega$; a Hilbert space is a Banach space ([[lem-finite-rank-operators-are-compact]], [[thm-norm-limit-of-compact-operators-is-compact]], [[def-hilbert-space]], [[def-banach-space]]).

[A3] **Infimum and convergence.** Every nonempty bounded-below set of reals has a real infimum ([[thm-infimum-property]]). Each defining error set is nonempty because it contains the error of $F=0$, and is bounded below by $0$. For every real $\varepsilon>0$ it has an element $x<\inf+\varepsilon$: otherwise $\inf+\varepsilon$ would be a larger lower bound, contradicting the greatest-lower-bound definition; a sequence of real numbers tends to $0$ when for every $\varepsilon>0$ eventually $|a_n|<\varepsilon$ ([[def-infimum]], [[def-metric-convergence]]).

[A4] Countable Choice selects one finite-rank approximant for each $n\ge1$ by
applying it to the shifted family indexed by $\mathbb N$; assigning $F_0=0$
then gives a zero-based sequence ([[def-countable-choice]]).

## Proof

**Proof technique:** direct.

**Given:** Countable Choice, the Hilbert spaces $H,K$, the bounded operator $T$, and the numbers $a_n(T)$.

1.1 **Compact implies vanishing.** If $T$ is compact then [A1] gives $a_n(T)=s_n(T)$ for all $n\ge1$ and $s_n(T)\to0$ along the positive-indexed tail, so the zero-based sequence $(a_n(T))_{n\in\mathbb N}$ tends to $0$; its single value $a_0(T)=\|T\|$ does not affect convergence. [A1]

1.2 **Vanishing implies compact.** Assume $(a_n(T))_{n\in\mathbb N}\to0$. Since the infimum defining $a_n(T)$ is over a nonempty set, for each $n\ge1$ there is $F_n\in\mathcal B(H,K)$ with $\dim\operatorname{ran}F_n<n$ and $\|T-F_n\|<a_n(T)+1/n$, by [A3]; countable choice [A4] selects these operators, and we put $F_0=0$ to obtain a sequence indexed by $\mathbb N$. Each $F_n$ has finite rank, hence is compact, and $\|T-F_n\|\to0$ because the tail satisfies $0\le\|T-F_n\|<a_n(T)+1/n\to0$; as the target $K$ is a Banach space, [A2] makes $T$ compact. [A2, A3, A4, algebra]

2.1 **Conclusion.** Steps 1.1 and 1.2 give the equivalence; the identification $a_n(T)=s_n(T)$ in the compact case for every $n\ge1$ is [A1]. [step 1.1, step 1.2, A1] ∎
