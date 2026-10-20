---
id: ex-postprocessing-private-noisy-count
kind: example
title: Thresholding a private noisy count
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 4
deps:
  - def-differential-privacy-and-adjacency
  - def-global-l1-sensitivity
  - alg-laplace-mechanism
  - thm-laplace-mechanism-privacy
  - thm-dp-postprocessing
  - def-countable-choice
  - def-borel-sigma-algebra
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: Countable Choice is inherited from the real Laplace law; the threshold map and postprocessing argument are choice-free.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Cynthia Dwork and Aaron Roth, The Algorithmic Foundations of Differential Privacy"
      url: https://privacytools.seas.harvard.edu/resource/thealgorithmicfoundationsofdifferentialprivacypdf
    - title: "Salil Vadhan, The Complexity of Differential Privacy, 2017 manuscript"
      url: https://salil.seas.harvard.edu/sites/g/files/omnuum4266/files/salil/files/manuscript_2017.pdf
---

## Example

Let $U$ be a nonempty record universe and let databases be finite-support count functions $D:U\to\mathbb N_0$, with neighbors formed by adding or removing one occurrence. Let $P:U\to\{0,1\}$ be a predicate satisfied by at least one record, let $f(D)$ count the occurrences satisfying $P$, let $\varepsilon>0$, and fix $c\in\mathbb R$. Release $X=f(D)+Z$ with $Z\sim\operatorname{Lap}(1/\varepsilon)$, then output $1$ exactly when $X\ge c$ and output $0$ otherwise. The threshold decision is a data-independent deterministic postprocessing and retains the $(\varepsilon,0)$ guarantee of the noisy count.

## Example references

[[alg-laplace-mechanism|The scalar Laplace mechanism]]

[[thm-laplace-mechanism-privacy|Privacy of a sensitivity-one Laplace release]]

[[thm-dp-postprocessing|Randomized and deterministic postprocessing preserves privacy]]

[Dwork and Roth, *The Algorithmic Foundations of Differential Privacy*, Proposition 2.1 and Example 3.1, printed pp. 19 and 32–33.](https://privacytools.seas.harvard.edu/resource/thealgorithmicfoundationsofdifferentialprivacypdf)

[Vadhan, *The Complexity of Differential Privacy*, §1.5, Theorem 1.3, and §2.1, Lemma 2.1.](https://salil.seas.harvard.edu/sites/g/files/omnuum4266/files/salil/files/manuscript_2017.pdf)

## Facts & Assumptions

**Given:** A predicate $P$ satisfied by some record $u_0$, $\varepsilon>0$, and threshold $c\in\mathbb R$.

[A1] [[def-countable-choice|Countable Choice]] is inherited from the Laplace probability law; no stronger choice principle is used.

[F1] [[def-differential-privacy-and-adjacency|Neighboring databases]] differ by adding or removing one occurrence.

[F2] [[def-global-l1-sensitivity|Sensitivity]] is the attained maximum over neighboring query differences.

[F3] [[thm-laplace-mechanism-privacy|Laplace privacy theorem]] gives $(\varepsilon,0)$-DP for a scalar query of sensitivity one and $\varepsilon>0$.

[F4] [[def-borel-sigma-algebra|The Borel sigma-algebra]] contains closed and open intervals, including $[c,+\infty)$ and $(-\infty,c)$.

[F5] [[thm-dp-postprocessing|Postprocessing theorem]] preserves the same differential-privacy parameters under any data-independent probability kernel.

## Verification

1.1 Adding or removing a record $u$ changes $f(D)$ by $P(u)\in\{0,1\}$ in absolute value. Every neighboring difference is at most one, and the empty database versus the singleton database containing $u_0$ attains one. Thus $\Delta_1f=1$ by [F1] and [F2], and [A1, F3] gives the corresponding Laplace law, so the noisy count has noise scale $1/\varepsilon$ and is $(\varepsilon,0)$-DP. [A1, F1, F2, F3, given, algebra]

2.1 Define $\phi(x)=\mathbf1_{\{x\ge c\}}$. Its preimages of $\{1\}$ and $\{0\}$ are $[c,+\infty)$ and $(-\infty,c)$, respectively, so [F4] makes $\phi$ Borel measurable. The deterministic kernel $L(x,B)=\mathbf1_B(\phi(x))$ on $\{0,1\}$ is a probability kernel and is independent of the database. Applying [F5] to the noisy-count release proves that the threshold output retains the same $(\varepsilon,0)$ guarantee. [F4, F5, step 1.1, given, construct] ∎
