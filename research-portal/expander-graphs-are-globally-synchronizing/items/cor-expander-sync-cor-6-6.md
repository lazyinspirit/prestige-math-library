---
id: cor-expander-sync-cor-6-6
title: Counterexamples to both centered-adjacency tail bounds in Corollary 6.6
kind: corollary
domain: mathematics
status: published
origin: pipeline
deps:
  - math:def-graph-adjacency-incidence-neighbourhood-and-degree
  - math:def-finite-probability-space-and-event
  - math:def-erdos-renyi-random-graph
  - def-expander-sync-centered-matrices
  - lem-author-b785a1269d40-many-center-amplification
  - lem-author-b785a1269d40-degree-forces-centered-norm
  - lem-author-894e17bac320-small-gamma-tail-contradiction
  - math:def-real-exponential-function-and-e
  - math:cor-exponential-reciprocal-and-positivity
  - math:lem-ceiling-and-least-positive-integer-threshold
  - math:def-factorial-and-falling-factorial
  - math:def-natural-logarithm
  - math:thm-exponential-is-strictly-increasing
  - math:def-operator-norm-on-a-finite-dimensional-inner-product-space
dependency_roles:
  math:def-graph-adjacency-incidence-neighbourhood-and-degree: mathematical-premise
  math:def-finite-probability-space-and-event: mathematical-premise
  math:def-erdos-renyi-random-graph: mathematical-premise
  def-expander-sync-centered-matrices: mathematical-premise
  lem-author-b785a1269d40-many-center-amplification: mathematical-premise
  lem-author-b785a1269d40-degree-forces-centered-norm: mathematical-premise
  lem-author-894e17bac320-small-gamma-tail-contradiction: mathematical-premise
  math:def-real-exponential-function-and-e: mathematical-premise
  math:cor-exponential-reciprocal-and-positivity: mathematical-premise
  math:lem-ceiling-and-least-positive-integer-threshold: mathematical-premise
  math:def-factorial-and-falling-factorial: mathematical-premise
  math:def-natural-logarithm: mathematical-premise
  math:thm-exponential-is-strictly-increasing: mathematical-premise
  math:def-operator-norm-on-a-finite-dimensional-inner-product-space: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Expander graphs are globally synchronizing
      url: https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf
      locator: PDF p. 35, Corollary 6.6, equations (6.5), (6.6) and proof
      reading_limits: Compared the supplied original PDF images and extracted text at
        p. 35, Corollary 6.6, and p. 6, Section 1.2. This reference supports
        attribution of the displayed claims and notation only; neither bound is
        assumed true. The counterexamples use independent local suppliers. No
        underlying concentration literature was freshly read.
      statement: "Attributed assertions, not accepted premises: equation (6.5) states
        $\\mathbb P(\\|\\Delta_A\\|\\ge4\\sqrt{np(1-p)}+4+t)\\le2\\exp(-t^2/4)$;
        equation (6.6) states $\\mathbb
        P(\\|\\Delta_A\\|\\ge8\\sqrt{\\gamma\\log n})\\le2n^{-\\gamma}$."
      hypotheses: The adjacency matrix of $G(n,p)$, with $\Delta_A=A-pJ$ under Section
        1.2. For (6.5), every $p\in(0,1)$ and integer $n\ge1000$, with positive
        tail parameter $t$ (as in the preceding concentration theorem). For
        (6.6), every fixed $\gamma>0$ admits $n_0(\gamma)$, and the asserted
        bound holds for $p=\gamma\log n/n$ and every integer $n\ge n_0(\gamma)$
        in the graph probability range.
dependency_level: 5
---

## Statement

Both bounds stated in the original Corollary 6.6 are false under their complete displayed quantifiers, for the loop-free independent-edge graph and the article's centering $\Delta_A=A-pJ$.

First, the original assertion is that for every $p\in(0,1)$ and $n\ge1000$,
$$\mathbb P(\|\Delta_A\|\ge4\sqrt{np(1-p)}+4+t)\le2\exp(-t^2/4)\quad(t>0).$$
At $n=4^{146}144!$, $p=1/n$, $t=3$, its left side is at least $4/5$ and its right side is at most $8/13$.

Second, the original assertion is that for every fixed $\gamma>0$ there is $n_0(\gamma)$ such that, whenever $p=\gamma\log n/n$ and $n\ge n_0(\gamma)$,
$$\mathbb P(\|\Delta_A\|\ge8\sqrt{\gamma\log n})\le2n^{-\gamma}.$$
At the single fixed value $\gamma=10^{-6}$, every even integer $n$ with $\log n\ge2000000$ violates this inequality: the left side exceeds $1/2$, while the right side is at most $2/5$. The left side in fact tends to one through even $n\to\infty$. Thus no choice of $n_0(10^{-6})$ can make the second assertion true. Norms are Euclidean operator norms, $J$ is the all-ones matrix, and $n^{-\gamma}=\exp(-\gamma\log n)$.

## Facts & Assumptions

[F1] The random graph is the loop-free law with independent Bernoulli edges ([[math:def-erdos-renyi-random-graph]]).

[F2] The article centers it as $\Delta_A=A-pJ$ ([[def-expander-sync-centered-matrices]]).

[F3] At $n=4^{k+2}k!$ and $p=1/n$, a vertex of degree at least $k$ occurs with probability at least $4/5$ ([[lem-author-b785a1269d40-many-center-amplification]]).

[F4] A degree of at least $k$ gives $\|A-J/n\|\ge\sqrt k-1$ ([[lem-author-b785a1269d40-degree-forces-centered-norm]]).

[F5] For $\gamma=10^{-6}$ and every even $n$ with $\log n\ge2000000$, the logarithmic tail probability exceeds $1/2>2/5\ge2n^{-\gamma}$ and tends to one ([[lem-author-894e17bac320-small-gamma-tail-contradiction]]).

[F6] The exponential series gives $\exp(x)\ge1+x$ for $x\ge0$ ([[math:def-real-exponential-function-and-e]]).

[F7] The exponential is positive and $\exp(-x)=1/\exp(x)$ ([[math:cor-exponential-reciprocal-and-positivity]]).

[F8] Every real number has an integer ceiling at least as large as itself ([[math:lem-ceiling-and-least-positive-integer-threshold]]).

[F9] The factorial $k!$ is the product of the integers from 1 to $k$ ([[math:def-factorial-and-falling-factorial]]).

[F10] The logarithm is inverse to the exponential ([[math:def-natural-logarithm]]).

[F11] The exponential is strictly increasing ([[math:thm-exponential-is-strictly-increasing]]).

[F12] For a matrix $B$ acting on $\mathbb R^n$ with its Euclidean inner product, $\|B\|=\max_{\|v\|_2=1}\|Bv\|_2$ ([[math:def-operator-norm-on-a-finite-dimensional-inner-product-space]]).

[F13] On a finite probability space $(\Omega,w)$, each outcome weight $w(\omega)$ is nonnegative and every subset $E\subseteq\Omega$ is an event with probability $\mathbb P(E)=\sum_{\omega\in E}w(\omega)$ ([[math:def-finite-probability-space-and-event]]).

[F14] In a finite simple graph, the degree of a vertex is the number of its neighbors, and the maximum degree is the largest of these numbers when the vertex set is nonempty ([[math:def-graph-adjacency-incidence-neighbourhood-and-degree]]).

## Proof

**Given:** The objects and hypotheses in the Statement.

**Goal:** Prove the asserted conclusions.

1.1 For the first inequality take $k=144$, $n=4^{146}144!$, $p=1/n$, $t=3$. These satisfy $n\ge1000$, $0<p<1$ and $t>0$. Let $E$ be the event that some vertex has degree at least $144$, and let $T$ be the norm event in the first displayed inequality. By [F14], having at least $144$ neighbors is exactly having degree at least $144$, so [F3] gives $\mathbb P(E)\ge4/5$. On $E$, [F4] gives $\|\Delta_A\|\ge11$, while the asserted threshold equals $4\sqrt{1-1/n}+7<11$, so $E\subseteq T$. By [F13], $\mathbb P(T)=\mathbb P(E)+\sum_{\omega\in T\setminus E}w(\omega)\ge\mathbb P(E)$ because all outcome weights are nonnegative. Thus the event in the first displayed inequality has probability at least $4/5$. By [F6] and [F7], its proposed bound $2\exp(-9/4)$ is at most $2/(1+9/4)=8/13<4/5$. This is a concrete counterexample to equation (6.5). [F1, F2, F3, F4, F6, F7, F9, F12, F13, F14, given, algebra]

2.1 For the second inequality fix $\gamma=10^{-6}$ once and for all. Apply [F5] at every even integer $n$ with $\log n\ge2000000$. These are applicable counterexamples with valid graph probabilities. Given any proposed cutoff $n_0(10^{-6})$, put $B=\max\{1,n_0(10^{-6}),\exp(2000000)\}$ and choose $n=2\lceil B/2\rceil+2$. By [F8] this is an even positive integer greater than $B$. By [F10] and [F11], $\log n>2000000$. Increasing $B$ gives arbitrarily large such integers. The contradiction therefore persists beyond every cutoff. The limit in [F5] also proves the stated asymptotic behavior, rather than merely failure at a bounded set of sizes. [F1, F2, F5, F8, F10, F11, F12, given, construct] ∎

## Source notes

The original PDF p. 35, Corollary 6.6, states (6.5) “For any $p\in(0,1)$ and $n\ge1000$” and (6.6) “for every $\gamma>0$, there is $n_0(\gamma)$”. Both complete claims are retained above and refuted separately. The original page image and extracted text were inspected, together with Section 1.2, PDF p. 6, fixing the centering and norm. The sparse-degree and logarithmic-tail lemmas supply independent local counterexamples. No concentration theorem or expected-norm claim is used as a premise. This result refutes the unrestricted $\gamma>0$ statement, not every possible larger-$\gamma$ variant, and it does not by itself refute the article's main synchronization statements, which impose other parameter ranges.
