---
id: cex-weak-law-can-fail-without-tail-control
title: "A macroscopic row term defeats averaging"
kind: counterexample
status: draft
origin: pipeline
deps: ["thm-chebyshev-weak-law-for-uncorrelated-arrays", "def-convergence-in-probability", "cor-countable-independent-copies-exist"]
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Theorem 2.2.6, p. 59, direct counterexample when its variance condition fails"
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
proof_strategy: "P(|S_n/n|>1/2)=1 and normalized row variance equals one. Explicitly this is an array example, not a counterexample to an IID integrable law."
---

## Statement refuted

The assertion that independent centered rows automatically satisfy a weak law with normalization $n$ is false. Assume countable choice and dependent choice. A witness is the row of length $n$ defined by $X_{n,1}=n\epsilon_n$ and $X_{n,k}=0$ for $2\le k\le n$, where the $\epsilon_n$ are independent fair signs. With $S_n=\sum_{k=1}^nX_{n,k}$, $S_n/n$ does not converge in probability to zero.

## Facts & Assumptions

[F1] [[thm-chebyshev-weak-law-for-uncorrelated-arrays]]: For each $n\ge1$, let $X_{n,1},\ldots,X_{n,r_n}$ be square-integrable real random variables on one probability space, pairwise uncorrelated within the row, where $r_n\ge0$ is finite. Set $S_n=\sum_{k=1}^{r_n}X_{n,k}$ and let $b_n>0$ be deterministic. If $v_n:=b_n^{-2}\sum_{k=1}^{r_n}\operatorname{Var}(X_{n,k})\longrightarrow0,$ then $(S_n-\mathbb ES_n)/b_n\to0$ in $L^2$ and in probability. More precisely, its second moment is $v_n$, and its probability of absolute value at least $\varepsilon>0$ is at most $v_n/\varepsilon^2$. No independence between rows is required.

[F2] [[def-convergence-in-probability]]: For real random variables $(X_n)$ and $X$ on one probability space, write $X_n\to X$ **in probability** when, for every $\varepsilon>0$, $\mathbb P(|X_n-X|>\varepsilon)\longrightarrow0.$ This is precisely def-convergence-in-measure for the probability measure.

[F3] [[cor-countable-independent-copies-exist]]: Assume countable choice and dependent choice. Every probability measure $\nu$ on $(S,\Sigma)$ is the common law of a countable independent family of $S$-valued random elements.

## Counterexample

**Given:** The construction and assumptions above.

1.1 Under countable choice and dependent choice take IID fair signs using the countable-copy theorem. A row consisting of one random entry and constants is independent: any finite intersection of coordinate events reduces to the one nonconstant event or is empty. Each entry is centered and square-integrable. Its variance sum is $n^2$, so the row weak law has normalized variance $1$, not a quantity tending to zero. [F3, F1, given, algebra]

2.1 The sum is exactly $S_n=n\epsilon_n$. Thus $\mathbb P(|S_n/n|>1/2)=1$ for every $n\ge1$, contradicting the defining requirement for convergence in probability to zero. At $n=1$ the row has only its one random entry. This is an array witness and asserts no failure of the IID integrable weak law. [F2, step 1.1, algebra] ∎
