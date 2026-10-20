---
id: thm-mcdiarmid-bounded-differences
kind: theorem
title: "McDiarmid bounded-differences inequality"
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 1
deps:
  - cor-boundedness-theorem-r
  - cor-markov-inequality-for-random-variables
  - cor-exponential-reciprocal-and-positivity
  - def-borel-sigma-algebra
  - def-conditional-expectation-as-an-ae-class
  - def-axiom-of-choice
  - def-interval
  - def-law-or-distribution-of-a-random-element
  - def-martingale-submartingale-and-supermartingale
  - def-product-sigma-algebra-and-finite-product-sigma-algebras
  - def-random-element-and-real-random-variable
  - def-real-exponential-function-and-e
  - lem-conditional-hoeffding-bound-for-bounded-martingale-differences
  - lem-doob-martingale-differences-inherit-coordinate-oscillations
  - lem-probability-measure-basic-identities
  - thm-basic-algebra-and-order-properties-of-conditional-expectation
  - thm-change-of-variables-for-expectation
  - thm-exponential-addition-formula
  - thm-exponential-is-strictly-increasing
  - thm-heine-borel-r
  - thm-independent-random-elements-have-product-joint-law
  - thm-taking-out-what-is-known
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  repair: research/machine-learning-all-101-2026-10-19-owner-step4-published-alert-repair/application/receipts/thm-mcdiarmid-bounded-differences.json
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
sources:
  references:
    - title: "John Duchi, Lecture Notes on Statistics and Information Theory, Chapter 4, §4.2.2, Proposition 4.2.5"
      url: "https://web.stanford.edu/class/stats311/lecture-notes.pdf"
    - title: "Colin McDiarmid, On the Method of Bounded Differences, Surveys in Combinatorics 1989, §1"
      url: "https://www.cambridge.org/core/books/abs/surveys-in-combinatorics-1989/on-the-method-of-bounded-differences/AABA597B562BDA7D89C6077E302694FB"
---

## Statement

Assume AC. Let $n\ge1$, let $Z_i:(\Omega,\mathcal F,\mathbb P)\to(S_i,\Sigma_i)$ be independent random elements, meaning measurable maps (Random elements and real random variables), with laws $\mu_i$ given by pushforward (Law or distribution of a random element). Put $\mu=\bigotimes_{i=1}^n\mu_i$ on the finite product sigma-algebra (The product sigma-algebra and its finite iterates). Let $f:\prod_{i=1}^nS_i\to\mathbb R$ be product-measurable with $\int|f|\,d\mu<\infty$. Suppose finite deterministic constants $c_i\ge0$ satisfy
$$|f(z_1,\ldots,z_i,\ldots,z_n)-f(z_1,\ldots,z_i',\ldots,z_n)|\le c_i$$
for every fixed setting of the other coordinates and every $z_i,z_i'$. The independent product-law theorem identifies the law of $Z=(Z_1,\ldots,Z_n)$ as $\mu$. Applying change of variables for expectation first to $|f|$ and then to $f$ makes $f(Z)$ integrable and gives $\mathbb E f(Z)=\int f\,d\mu$. Put $V=\sum_{i=1}^n c_i^2$. For $t>0$, if $V>0$ then
$$\mathbb P\bigl(f(Z_1,\ldots,Z_n)-\mathbb E f(Z_1,\ldots,Z_n)\ge t\bigr)\le\exp\!\left(-\frac{2t^2}{V}\right),$$
and if $V=0$ this probability is $0$. The same bound holds for the lower tail, so the two-sided probability is at most $2e^{-2t^2/V}$ when $V>0$.

## Statement references

[[def-random-element-and-real-random-variable]]

[[def-law-or-distribution-of-a-random-element]]

[[def-product-sigma-algebra-and-finite-product-sigma-algebras]]

## Facts & Assumptions

**Given:** AC, independent random elements $Z_i$, an integrable measurable real function of them, and the deterministic coordinate oscillation bounds in the Statement.

[A1] Assume AC, the Axiom of Choice. It is used for the conditional-expectation and conditional-Hoeffding suppliers ([[def-axiom-of-choice]]).

[F1] The product-integral construction gives integrable adapted $M_i$, with $M_n=f(Z)$, $M_0=\int f\,d\mu$, event-integral-zero differences, and predictable endpoints of width at most $c_i$ ([[lem-doob-martingale-differences-inherit-coordinate-oscillations]]).

[F2] Conditional expectation is the almost-sure class of integrable measurable versions satisfying all event-integral identities ([[def-conditional-expectation-as-an-ae-class]]).

[F3] Under AC, an integrable adapted process is a martingale when $\mathbb E[M_i\mid\mathcal F_{i-1}]=M_{i-1}$ almost surely ([[def-martingale-submartingale-and-supermartingale]]).

[F4] If a martingale difference has predictable finite endpoints of deterministic width $c_i$, its conditional exponential moment is at most $e^{\lambda^2c_i^2/8}$ ([[lem-conditional-hoeffding-bound-for-bounded-martingale-differences]]).

[F5] Conditional expectation preserves the unconditional expectation ([[thm-basic-algebra-and-order-properties-of-conditional-expectation]]).

[F6] A bounded measurable factor known under $\mathcal F_{i-1}$ can be taken outside conditional expectation ([[thm-taking-out-what-is-known]]).

[F7] For $Y\ge0$ and $r>0$, $\mathbb P(Y\ge r)\le\mathbb E[Y]/r$ ([[cor-markov-inequality-for-random-variables]]).

[F8] Probability is subadditive on finite unions ([[lem-probability-measure-basic-identities]]).

[F9] The joint law of independent random elements is the product of their marginal laws; for measurable $f$ with $\int|f|\,d\mu<\infty$, change of variables applied to $|f|$ gives $f(Z)\in L^1$ and applied to $f$ gives $\mathbb E f(Z)=\int f\,d\mu$ ([[thm-independent-random-elements-have-product-joint-law]], [[thm-change-of-variables-for-expectation]]).

[F10] The real exponential is continuous and strictly increasing, positive, and satisfies $e^{-x}=1/e^x$ and $e^{x+y}=e^xe^y$ ([[thm-exponential-is-strictly-increasing]], [[cor-exponential-reciprocal-and-positivity]], [[thm-exponential-addition-formula]]).

[F11] Every closed bounded interval $[a,b]$ with $a\le b$ is compact ([[thm-heine-borel-r]]).

[F12] A continuous real function is bounded on a compact subset of $\mathbb R$ ([[cor-boundedness-theorem-r]]).

## Proof

1.1 By [F9], the joint law of $Z=(Z_1,\ldots,Z_n)$ is $\mu$, so the product integral in the statement is $\mathbb E f(Z)$. By [F1], take the product-integral sequence $M_i$ and its differences $D_i=M_i-M_{i-1}$. For every $A\in\mathcal F_{i-1}$, [F1] gives $\int_A M_i\,d\mathbb P=\int_A M_{i-1}\,d\mathbb P$. By [F2] and AC, $M_{i-1}$ is a version of $\mathbb E[M_i\mid\mathcal F_{i-1}]$, so [F3] makes $(M_i,\mathcal F_i)$ a martingale. The same lemma gives finite predictable endpoints $A_i\le D_i\le B_i$ with $A_i\le0\le B_i$ and $B_i-A_i\le c_i$. [A1, F1, F2, F3, F9, given]

2.1 The event-integral identity of [F1] and [F2] give $\mathbb E[D_i\mid\mathcal F_{i-1}]=0$. Applying [F4] to these martingale differences and their endpoints gives $\mathbb E[e^{\lambda D_i}\mid\mathcal F_{i-1}]\le e^{\lambda^2c_i^2/8}$ for every real $\lambda$. Since the endpoints contain zero and have width at most $c_i$, $|D_i|\le c_i$ almost surely. [A1, F1, F2, F4, step 1.1]

3.1 Put $S_k=M_k-M_0=\sum_{i=1}^kD_i$ and $S_0=0$. Step 2.1 bounds each difference by $c_i$, hence $S_{k-1}\in[-C,C]$ for $C:=\sum_{i<k}c_i$. This closed bounded interval is compact by [F11], and $x\mapsto e^{\lambda x}$ is continuous by [F10] and continuity of scalar multiplication, so [F12] makes $e^{\lambda S_{k-1}}$ bounded. Also $x\mapsto e^{\lambda x}$ is Borel: its open-set preimages are open, and the class of Borel sets whose preimages are Borel is a sigma-algebra containing the opens, hence contains the Borel sigma-algebra ([[def-borel-sigma-algebra]]). For each Borel $B$, the preimage of $B$ under $e^{\lambda S_{k-1}}$ is $S_{k-1}^{-1}((x\mapsto e^{\lambda x})^{-1}(B))$, so this factor is $\mathcal F_{k-1}$-measurable. By the addition formula in [F10], $e^{\lambda S_k}=e^{\lambda S_{k-1}}e^{\lambda D_k}$; conditional expectation preservation [F5] and taking out the known factor [F6] give $\mathbb E e^{\lambda S_k}\le e^{\lambda^2c_k^2/8}\mathbb E e^{\lambda S_{k-1}}$. Finite induction yields $\mathbb E e^{\lambda S_n}\le e^{\lambda^2V/8}$. [F5, F6, F10, F11, F12, step 2.1, algebra, construct]

4.1 If $V=0$, all $c_i=0$, so step 2.1 gives $D_i=0$ almost surely and $S_n=0$. If $V>0$ and $\lambda>0$, then $e^{\lambda S_n}$ is nonnegative and $S_n\ge t$ implies $e^{\lambda S_n}\ge e^{\lambda t}>0$ by [F10]. Markov [F7] and step 3.1 give $\mathbb P(S_n\ge t)\le e^{\lambda^2V/8}/e^{\lambda t}=e^{-\lambda t+\lambda^2V/8}$ by the reciprocal and addition formulas in [F10]. Choosing $\lambda=4t/V$ gives the stated upper-tail bound. [F7, F10, step 2.1, step 3.1, algebra]

5.1 Apply the same argument to $-f$ for the lower-tail bound. For $V>0$, [F8] combines the two tails; step 4.1 handles $V=0$. [A1, F8, step 4.1, algebra] ∎

