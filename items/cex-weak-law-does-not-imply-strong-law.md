---
id: cex-weak-law-does-not-imply-strong-law
kind: counterexample
title: Weak law does not imply strong law
deps: ["cor-countable-independent-copies-exist", "cor-second-borel-cantelli-lemma-under-pairwise-independence", "def-convergence-in-probability", "def-strong-law-of-large-numbers-for-a-sequence", "def-axiom-of-choice", "lem-measurable-functions-preserve-independence", "thm-lebesgue-measure-of-a-box-of-every-kind", "def-countable-choice", "def-dependent-choice", "thm-recursion"]
sources:
  references:
    - title: Durrett, §§2.4–2.5, pp. 76–87
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
status: draft
origin: pipeline
proof_strategy: direct
---

## Statement refuted

A weak sample-mean law need not be a centered strong law. Assuming AC, there are integrable real $(X_n)$ with $S_n/n\to0$ in probability but $(S_n-\mathbb ES_n)/n$ not tending to zero almost surely.

## Facts & Assumptions

[F1] [[thm-recursion]]: Let $(N,0,\sigma)$ be a Peano system (def-peano-system), in particular the natural numbers $\mathbb{N}$ (def-natural-numbers). For any set $A$, any element $a \in A$, and any function $f : A \to A$, there is a unique function $g : N \to A$ such that $g(0) = a$ and $g(\sigma(n)) = f(g(n))$ for all $n \in N$.

[F2] [[thm-lebesgue-measure-of-a-box-of-every-kind]]: Let $n \ge 1$, **assume the Axiom of Countable Choice**
(def-countable-choice), and let $a_i \le b_i$ be reals for $i<n$. Write

$$R^{\circ} := \{\, x \in \mathbb{R}^n : a_i < x_i < b_i \text{ for every } i<n \,\}, \qquad \overline{R} := [a,b] = \{\, x \in \mathbb{R}^n : a_i \le x_i \le b_i \text{ for every } i<n \,\}$$

(def-multidimensional-rectangle-and-volume). Then $R^{\circ}$ is open and
$\overline{R}$ is closed, so both are Borel and Lebesgue measurable, and **every**
set $R$ with $R^{\circ} \subseteq R \subseteq \overline{R}$ is Lebesgue
measurable with

$$\lambda_n(R) \;=\; \prod_{i<n}(b_i-a_i).$$

In particular this covers the four one-dimensional face conventions in each
coordinate — the open box, the closed box $[a,b]$, the half-open box
$B(a,b) = \prod_{i<n}(a_i,b_i]$ of def-half-open-box, and every mixture of
them, in any combination of coordinates — and it gives measure $0$ to all of them
whenever $a_i = b_i$ for some $i<n$. For a half-open box with infinite
parameters the value is already
$\lambda_n(B) = \operatorname{vol}(B)$ (thm-lebesgue-measure-is-a-complete-measure).

[F3] [[cor-countable-independent-copies-exist]]: Assume countable choice and dependent choice. Every probability measure $\nu$
on $(S,\Sigma)$ is the common law of a countable independent family of
$S$-valued random elements.

[F4] [[lem-measurable-functions-preserve-independence]]: Let $(X_i)_{i\in I}$ be an independent family of random elements
$X_i:(\Omega,\mathcal F,\mathbb P)\to(S_i,\Sigma_i)$. For each $i$, let
$g_i:(S_i,\Sigma_i)\to(T_i,\mathcal T_i)$ be measurable. Then the family
$(g_i\circ X_i)_{i\in I}$ is independent.

[F5] [[cor-second-borel-cantelli-lemma-under-pairwise-independence]]: Let $(A_n)_{n\in\mathbb N}$ be pairwise independent events with
$$\sum_{n=0}^\infty \mathbb P(A_n)=+\infty.$$
Then
$$\mathbb P(A_n\ \mathrm{i.o.})=1.$$

## Counterexample

**Given:** The objects, hypotheses and definitions in the statement. Its conclusions are to be established below.

1.1 AC restricted to a countable family gives CC; choosing a successor for each point of an entire relation and using F1 gives DC. On $((0,1),\mathcal B,\lambda)$ the identity U has $P(U\le t)=t$ for 0<$t<1$ by F2. F3 supplies IID copies $U_n$. Let $B_n=\mathbf1_{\{U_n\le1/(n+1)\}}$, which are independent by F4. [F1, F2, F3, F4]

1.2 Set $B_0$=0 and $X_n=nB_n-(n-1)B_{n-1}$. These finite-valued variables are integrable; telescoping gives $S_n=nB_n$. Thus $P(|S_n/n|>\varepsilon)\le1/(n+1)\to0$ for every $\varepsilon$>0, and $\mathbb ES_n/n=1/(n+1)\to0$. [given, algebra]

2.1 The sum of $1/(n+1)$ diverges: each block $2^j\le n+1<2^{j+1}$ contributes at least 1/2. The complementary probabilities n/(n+1) also have divergent sum. Apply F5 to the independent events $B_n$=1 and separately to $B_n$=0. Both occur infinitely often on a common conull event. Hence the centered averages $B_n-1/(n+1)$ have limsup 1 and liminf 0 there, refuting the centered strong law while step 1.2 establishes the weak law. [F5, step 1.2] ∎
