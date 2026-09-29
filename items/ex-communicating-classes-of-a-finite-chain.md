---
id: ex-communicating-classes-of-a-finite-chain
kind: example
title: "Communicating classes in a four-state chain"
status: draft
origin: pipeline
deps:
  - def-accessibility-communication-and-irreducibility
  - def-transition-matrix-and-n-step-transition-probabilities
  - lem-matrix-chapman-kolmogorov-equations
  - def-hitting-return-and-visit-times
  - lem-communication-is-an-equivalence-relation
  - def-recurrent-and-transient-state
proof_strategy: direct
landmark: false
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
sources:
  references:
    - title: "Durrett, Probability: Theory and Examples, fifth edition"
      url: "https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"
      locator: "§5.3, Example 5.3.4, printed pp. 283–284 (PDF pp. 291–292): a different seven-state chain illustrates graph-based recurrence classification."
    - title: "Levin, Peres and Wilmer, Markov Chains and Mixing Times, second edition"
      url: "https://pages.uoregon.edu/dlevin/MARKOV/mcmt2e.pdf"
      locator: "§1.7, accessibility and communicating classes, printed pp. 15–16 (PDF pp. 31–32); finite-state setting."
provenance:
  statement: ai-altered
  proof: ai-altered
---

## Example

On $E=\{0,1,2,3\}$ take the transition matrix, with rows and columns in this
order, to be
$$
P=\begin{pmatrix}1&0&0&0\\0&0&1&0\\0&1&0&0\\\tfrac12&0&0&\tfrac12\end{pmatrix}.
$$
Its communicating classes are $\{0\}$, $\{1,2\}$, and $\{3\}$. States $0,1,2$
are recurrent, while state $3$ is transient.

## Facts & Assumptions

**Given:** The four-state transition matrix displayed above and, for each
initial state $x$, its deterministic-start chain law $\mathbb P_x$.

[F1] The $n$-step transition probability is
$p^{(n)}(x,y)=K^n(x,\{y\})$, with $p^{(0)}(x,y)=\mathbf 1_{\{x=y\}}$.
([[def-transition-matrix-and-n-step-transition-probabilities]])

[F2] Accessibility means $x\to y$ iff $p^{(n)}(x,y)>0$ for some
$n\in\mathbb N_0$, and communication means mutual accessibility.
([[def-accessibility-communication-and-irreducibility]])

[F3] Communication is an equivalence relation, and its equivalence classes
partition the state space. ([[lem-communication-is-an-equivalence-relation]])

[F4] The matrix Chapman–Kolmogorov identity is
$p^{(m+n)}(x,y)=\sum_{z\in E}p^{(m)}(x,z)p^{(n)}(z,y)$.
([[lem-matrix-chapman-kolmogorov-equations]])

[F5] The positive return time is $T_x^+=\inf\{n\ge1:X_n=x\}$.
([[def-hitting-return-and-visit-times]])

[F6] State $x$ is recurrent when
$\mathbb P_x(T_x^+<\infty)=1$.
([[def-recurrent-and-transient-state]])

[F7] State $x$ is transient when
$\mathbb P_x(T_x^+<\infty)<1$.
([[def-recurrent-and-transient-state]])

## Proof

**Proof technique:** compute the finite transition graph and return events.

1.1 The four displayed rows are nonnegative and each sums to one. Because $P$ is a transition matrix, every unlisted entry in each row must therefore be zero; the matrix is fully specified as displayed. [given]

2.1 By induction using [F4], for every $n\ge0$ the row $p^{(n)}(0,\cdot)$ is concentrated at $0$, while the rows from $1$ and $2$ alternate deterministically between those two states. Thus $0$ reaches neither $1,2,3$, and $1,2$ reach neither $0$ nor $3$. Since $p(1,2)=p(2,1)=1$, states $1,2$ communicate. State $3$ communicates with itself, and it reaches $0$, but $0$ cannot reach $3$; its rows also show it reaches neither $1$ nor $2$. Hence the communication classes are exactly $\{0\}$, $\{1,2\}$, and $\{3\}$. [F1, F2, F3, F4, step 1.1, given]

2.2 From state $0$ the chain stays at $0$, so $T_0^+=1$ almost surely. From states $1$ and $2$ it alternates deterministically, so $T_1^+=T_2^+=2$ almost surely. In all three cases the positive return probability is one, so $0,1,2$ are recurrent by [F6]. [F5, F6, step 1.1, given]

2.3 From state $3$, the first step is a return to $3$ with probability $p(3,3)=1/2$. With the remaining probability $1/2$ the chain moves to $0$ and then stays there forever, so there is no later return to $3$. Therefore $\mathbb P_3(T_3^+<\infty)=1/2<1$, and state $3$ is transient by [F7]. [F5, F7, step 1.1, given]

3.1 The example fixes a four-state space, so the empty-space and one-state cases do not arise. Zero entries are forced by row normalization and are used in the access calculation; the deterministic rows and absorbing state are covered directly. Accessibility includes the zero-step identity, whereas $T_x^+$ starts at time one. All calculations are finite and choice-free. This example gives a state classification, not an iff theorem. [F1, F2, F5, step 1.1, step 2.1, step 2.2, step 2.3, given] ∎

## Source notes

LPW, §1.7, printed pp. 15–16 (PDF pp. 31–32), defines finite-state
accessibility and communicating classes and treats communication as an
equivalence relation. Durrett, §5.3, Example 5.3.4, printed pp. 283–284 (PDF
pp. 291–292), works through a different seven-state chain using its positive
transition graph and recurrence arguments. These passages support the
classification method but do not state this four-state matrix or its
calculation; those are derived directly above. The cited LPW section is finite
state, matching this example's domain.
