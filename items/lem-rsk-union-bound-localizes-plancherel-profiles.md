---
id: lem-rsk-union-bound-localizes-plancherel-profiles
kind: lemma
title: "The RSK union bound localizes Plancherel profiles"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
proof_strategy: direct
deps: [thm-rsk-shape-of-a-uniform-random-permutation-has-plancherel-law, thm-schensted-longest-increasing-and-decreasing-subsequence-theorem, lem-probability-measure-basic-identities, def-binomial-coefficient, thm-exponential-definition-equivalence, def-finite-probability-space-and-event, def-uniform-finite-probability-space, def-russian-profile-and-sqrt-n-scaling-of-a-young-diagram, thm-binomial-closed-formula]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Vladimir Ivanov and Grigori Olshanski, Kerov's central limit theorem for the Plancherel measure on Young diagrams, arXiv:math/0304010; survey-paper version in Symmetric Functions 2001, NATO Science Series II 74 (2002), 93-151"
      url: "https://arxiv.org/pdf/math/0304010"
      locator: "Lemma 5.6 and its proof, printed p. 28 (the source cites Hammersley's theorem; the union bound proved here is the local replacement)"
    - title: "Dan Romik, The Surprising Mathematics of Longest Increasing Subsequences, Cambridge University Press 2015; author-hosted manuscript of 20 August 2014 (363 pp.)"
      url: "https://danromik.com/resources/books/the-surprising-mathematics-of-longest-increasing-subsequences.pdf"
      locator: "§1.4-§1.6, printed pp. 10-20 (elementary first bounds and RSK for longest increasing subsequences)"
---

## Statement

Let $n\ge1$, let $\sigma$ be uniform on $S_n$ and let $\lambda=\operatorname{sh}(\sigma)\vdash n$. For every integer $L$ with $1\le L\le n$,
$$\mathbb P(\lambda_1\ge L)\le\frac{\binom nL}{L!}\le\Bigl(\frac{e^2n}{L^2}\Bigr)^{L},$$
and the same two inequalities hold for $\lambda'_1$. Consequently, for every constant $C>e$ there is $n_0$ such that for all $n\ge n_0$
$$\mathbb P\bigl(\lambda_1\le C\sqrt n\ \text{ and }\ \lambda'_1\le C\sqrt n\bigr)\ge1-2\Bigl(\frac{e^2}{C^2}\Bigr)^{\lfloor C\sqrt n\rfloor-1}\longrightarrow1,$$
and on the event in question the function $x\mapsto\bar\lambda(x)-|x|$ is supported in the fixed compact interval $[-C,C]$.

## Facts & Assumptions

**Given:** $n\ge1$; $\sigma$ uniformly distributed on the permutations of $\{1,\dots,n\}$; $\lambda=\operatorname{sh}(\sigma)$ the Robinson-Schensted shape, a random variable with law $P_n$ ([[thm-rsk-shape-of-a-uniform-random-permutation-has-plancherel-law]]); an integer $L$ with $1\le L\le n$.

[F1] The length of a longest increasing subsequence of $\sigma$ is $\lambda_1$ and the length of a longest decreasing subsequence is $\lambda'_1$ ([[thm-schensted-longest-increasing-and-decreasing-subsequence-theorem]]); the uniform probability on $S_n$ gives every permutation weight $1/n!$ ([[def-uniform-finite-probability-space]], [[def-finite-probability-space-and-event]]).

[F2] Probability is subadditive: $\mathbb P(\bigcup_jA_j)\le\sum_j\mathbb P(A_j)$ for finitely many events ([[lem-probability-measure-basic-identities]]).

[F3] $\binom nL=\frac{n(n-1)\cdots(n-L+1)}{L!}\le\frac{n^L}{L!}$ for $0\le L\le n$ ([[thm-binomial-closed-formula]]); and for real $x\ge0$ one has $e^x=\sum_{j\ge0}x^j/j!$, so $e^L\ge L^L/L!$ and hence $L!\ge(L/e)^L$ ([[thm-exponential-definition-equivalence]]).

[F4] For a partition $\lambda\vdash n$ the support of $\sigma_\lambda$ is contained in $[-\lambda'_1,\lambda_1]$, and for the $\sqrt n$-scaled profile $\bar\lambda$ one has $\sigma_{\bar\lambda}(x)=n^{-1/2}\sigma_\lambda(\sqrt n\,x)$ ([[def-russian-profile-and-sqrt-n-scaling-of-a-young-diagram]]).

## Proof
**Proof technique:** direct.

1.1 Union bound: by [F1] the event $\{\lambda_1\ge L\}$ is contained in the union, over the $\binom nL$ subsets $I\subseteq\{1,\dots,n\}$ of cardinality $L$, of the event $A_I$ that the values $(\sigma_i)_{i\in I}$ are increasing in the order of $I$. For a fixed $I$, the relative order of the $L$ distinct values $(\sigma_i)_{i\in I}$ is uniform over the $L!$ orders, by symmetry of the uniform permutation (each ordering of the values on $I$ is realised by exactly $n!/L!$ permutations); hence $\mathbb P(A_I)=1/L!$, and [F2] gives $\mathbb P(\lambda_1\ge L)\le\binom nL/L!$. Replacing $\sigma$ by the reversed word, whose uniform law is again uniform on $S_n$ and whose longest increasing subsequences are exactly the reversed longest decreasing subsequences of $\sigma$, the same computation with [F1] gives $\mathbb P(\lambda'_1\ge L)\le\binom nL/L!$. [given, F1, F2, algebra]

1.2 Support: by [F4] the support of $\sigma_\lambda$ lies in $[-\lambda'_1,\lambda_1]$, and $\sigma_{\bar\lambda}(x)=n^{-1/2}\sigma_\lambda(\sqrt n\,x)$; hence if $\lambda_1\le C\sqrt n$ and $\lambda'_1\le C\sqrt n$, then $\sigma_{\bar\lambda}$ is supported in $[-C,C]$, and so is $x\mapsto\bar\lambda(x)-|x|=2\sigma_{\bar\lambda}(x)$. [given, F4, algebra]

2.1 Arithmetic bound: by [F3], $\binom nL/L!\le n^L/(L!)^2\le n^L/(L/e)^{2L}=(e^2n/L^2)^L$; combined with step 1.1 this proves both displayed inequalities. [given, F3, step 1.1, algebra]

3.1 Localization: let $C>e$ and put $L_n:=\lfloor C\sqrt n\rfloor+1$, so $L_n>C\sqrt n\ge1$; for all sufficiently large $n$ one has $L_n\le n$. Since $\{ \lambda_1>C\sqrt n\}\subseteq\{\lambda_1\ge L_n\}$, steps 1.1 and 2.1 give $\mathbb P(\lambda_1>C\sqrt n)\le(e^2n/L_n^2)^{L_n}\le(e^2/C^2)^{L_n}\le(e^2/C^2)^{\lfloor C\sqrt n\rfloor-1}$, where $e^2n/L_n^2\le e^2/C^2$ uses $L_n>C\sqrt n$ and the last inequality uses $0<e^2/C^2<1$ and $L_n\ge\lfloor C\sqrt n\rfloor-1$; the same bound holds with $\lambda'_1$ in place of $\lambda_1$. By [F2], $\mathbb P(\lambda_1>C\sqrt n\text{ or }\lambda'_1>C\sqrt n)\le2(e^2/C^2)^{\lfloor C\sqrt n\rfloor-1}$, so the probability of the complementary event $\{\lambda_1\le C\sqrt n$ and $\lambda'_1\le C\sqrt n\}$ is at least $1-2(e^2/C^2)^{\lfloor C\sqrt n\rfloor-1}$; since $0<e^2/C^2<1$, this lower bound tends to $1$. [given, F2, step 1.1, step 2.1, algebra]

4.1 Conclusion: on the event $\{\lambda_1\le C\sqrt n$ and $\lambda'_1\le C\sqrt n\}$ step 1.2 shows that $x\mapsto\bar\lambda(x)-|x|$ is supported in the fixed compact interval $[-C,C]$, and step 3.1 shows that this event has probability at least $1-2(e^2/C^2)^{\lfloor C\sqrt n\rfloor-1}\to1$. [given, step 1.2, step 3.1, algebra] ∎ 