---
id: ex-negative-drift-reflected-walk-has-a-finite-mean-small-set-hitting-time
kind: example
title: "Negative drift gives a finite mean small-set hit"
status: draft
origin: pipeline
proof_strategy: direct
deps:
  - def-axiom-of-choice
  - def-countable
  - def-hitting-return-and-visit-times
  - def-integrable-real-and-complex-functions-and-their-integrals
  - def-integral-of-a-nonnegative-simple-function
  - def-law-or-distribution-of-a-random-element
  - def-measure
  - def-measurable-function-between-measurable-spaces
  - def-measure-kernel-and-probability-kernel
  - def-nonnegative-discrete-drift-for-countable-chains
  - def-nonnegative-extended-series
  - def-nonnegative-lebesgue-integral
  - def-nonnegative-simple-measurable-function
  - def-probability-measure
  - def-transition-matrix-and-n-step-transition-probabilities
  - prop-the-nonnegative-integral-agrees-with-the-simple-integral
  - thm-dominated-convergence
  - thm-measures-on-countable-discrete-spaces-are-weighted-dirac-sums
  - thm-monotone-convergence-for-the-integral
  - thm-tonelli-for-nonnegative-double-series
  - thm-lyapunov-drift-bound-for-markov-chain-hitting-times
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
sources:
  references:
    - title: "Roch, Lecture Notes on Measure-Theoretic Probability Theory, Note 24"
      url: https://people.math.wisc.edu/~roch/grad-prob/gradprob-notes24.pdf
      locator: "§3, Example 24.9 and its full argument, printed/PDF pp. 7–8 (PDF parser lines 345–378): formula (11) bounds reflected-walk drift by E[Z1 1_{Z1>−y}], dominated convergence makes this tail expectation tend to E Z1<0, then the example selects ε and a finite threshold and applies Theorem 24.8. The source states the bound for x≥yε; starts x≤yε have T_A=0. This item separately verifies Pψ(x)<∞ for every x and uses the library Lyapunov theorem's explicit finite-action hypothesis."
---

## Example

Assume AC. Let $(Z_n)_{n\ge1}$ be i.i.d. integrable integer-valued increments
with common law $\nu$ and negative mean $m:=\int_{\mathbb Z}z\,d\nu(z)<0$;
thus $\int_{\mathbb Z}|z|\,d\nu(z)<\infty$. For $x\in\mathbb N_0$ and
$B\subseteq\mathbb N_0$, define the reflected-walk transition kernel
$$K(x,B):=\nu\bigl(\{z\in\mathbb Z:(x+z)^+\in B\}\bigr),$$
where $u^+=\max\{0,u\}$. This is the one-step law of the recursion
$X_{n+1}=(X_n+Z_{n+1})^+$ on $\mathbb N_0$. Let $\mathbb E_x$ denote the
canonical chain expectation with transition kernel $K$ and deterministic
initial state $x$, and set $T_A=\inf\{n\ge0:X_n\in A\}$. Then there exist a
finite $M\in\mathbb N_0$ and $\varepsilon>0$ such that, for
$A=\{0,1,\ldots,M\}$,
$$\mathbb E_xT_A\le\frac{x}{\varepsilon}\qquad(x\in\mathbb N_0).$$

Roch's Example 24.9 gives the tail-drift estimate and its dominated-convergence
argument. The verification below also proves that the chosen Lyapunov function
has finite kernel action at every state, as required by the library's stated
drift and hitting-time theorem.

## Verification

**Given:** AC and an i.i.d. integer-valued increment law $\nu$ with finite
absolute first moment and mean $m<0$.

[A1] AC states that every family of nonempty sets has a choice function.
([[def-axiom-of-choice]])

[F1] $\mathbb N_0$ is at most countable.
([[def-countable]])

[F2] The law of an integer-valued random element is the probability measure
$\nu(B)=\mathbb P(Z_1\in B)$ on $\mathbb Z$.
([[def-law-or-distribution-of-a-random-element]], [[def-probability-measure]])

[F3] On a countable discrete space, every measure is determined by its
singleton weights and is their weighted sum.
([[thm-measures-on-countable-discrete-spaces-are-weighted-dirac-sums]])

[F4] A probability kernel has measure rows, measurable state evaluations, and
total mass one in each row. ([[def-measure]],
[[def-measurable-function-between-measurable-spaces]],
[[def-measure-kernel-and-probability-kernel]])

[F5] The transition matrix associated with $K$ is $p(x,y)=K(x,\{y\})$.
([[def-transition-matrix-and-n-step-transition-probabilities]])

[F6] For $\phi\ge0$, the kernel action is
$P\phi(x)=\sum_{y:p(x,y)>0}p(x,y)\phi(y)$; zero transition weights are
omitted. ([[def-nonnegative-discrete-drift-for-countable-chains]])

[F7] If $\phi$ is finite-valued with $P\phi(x)<\infty$, its finite drift is
$L\phi(x)=P\phi(x)-\phi(x)$.
([[def-nonnegative-discrete-drift-for-countable-chains]])

[F8] Nonnegative extended series are defined by increasing partial sums, and
Tonelli permits interchanging two nonnegative countable sums.
([[def-nonnegative-extended-series]],
[[thm-tonelli-for-nonnegative-double-series]])

[F9] A nonnegative simple function has integral equal to its weighted finite
sum; increasing nonnegative functions satisfy monotone convergence.
([[def-nonnegative-simple-measurable-function]],
[[def-integral-of-a-nonnegative-simple-function]],
[[def-nonnegative-lebesgue-integral]],
[[prop-the-nonnegative-integral-agrees-with-the-simple-integral]],
[[thm-monotone-convergence-for-the-integral]])

[F10] Integrability of a real function means $\int |f|<\infty$.
([[def-integrable-real-and-complex-functions-and-their-integrals]])

[F11] Dominated convergence applies to measurable functions converging
pointwise and dominated in absolute value by one integrable function.
([[thm-dominated-convergence]])

[F12] Under AC, for a countable-state probability kernel with finite-valued
$\psi\ge0$, finite $P\psi$ at every state, and $L\psi\le-1$ on $A^c$, the
canonical chain satisfies $\mathbb E_xT_A\le\psi(x)$ for every start.
([[thm-lyapunov-drift-bound-for-markov-chain-hitting-times]])

[F13] $T_A=\inf\{n\ge0:X_n\in A\}$, so $T_A=0$ when the initial state lies
in $A$. ([[def-hitting-return-and-visit-times]])

1.1 For each fixed $x\in\mathbb N_0$, the map $z\mapsto(x+z)^+$ is measurable between the full-power-set spaces. Its pushforward of the probability law $\nu$ is a probability measure, and every function on the discrete domain $\mathbb N_0$ is measurable. Hence $K$ is a probability kernel on the countable state space $\mathbb N_0$; by the i.i.d. assumption its rows are exactly the one-step laws of the reflected recursion. [F1, F2, F4, given]

1.2 Put $\nu_z:=\nu(\{z\})$, $h_x(z):=(x+z)^+$, and $\phi(y):=y$. For every $x\ge0$, $p(x,y)=\sum_{z:h_x(z)=y}\nu_z$ by [F3] and [F5]. For each $N$, the finite-support function $h_x\mathbf1_{[-N,N]}$ is nonnegative simple, so [F9] gives its integral as $\sum_{|z|\le N}\nu_z h_x(z)$. These functions increase to $h_x$; [F9] and [F8] therefore give $\int h_x\,d\nu=\sum_z\nu_z h_x(z)$. Regrouping the nonnegative double sum by [F8] yields $P\phi(x)=\sum_{y:p(x,y)>0}p(x,y)\phi(y)=\sum_z\nu_z h_x(z)=\int h_x\,d\nu$. [F3, F5, F6, F8, F9, given]

1.3 For each integer $x\ge0$, the integrable function $z\mapsto z\mathbf1_{\{z>-x\}}$ converges pointwise to $z$ as $x\to\infty$ and is dominated by $|z|$. By [F10] and [F11], $\int z\mathbf1_{\{z>-x\}}\,d\nu(z)\longrightarrow\int z\,d\nu(z)=m<0$. [F10, F11, given]

2.1 Since $0\le h_x(z)\le x+|z|$, step 1.2 and the finite first moment give $P\phi(x)\le x+\int|z|\,d\nu<\infty$ for every $x\in\mathbb N_0$. Thus $L\phi(x)$ is defined by [F7]. [F6, F7, F10, step 1.2, given]

2.2 Set $\varepsilon=-m/2$, so $0<\varepsilon<-m$. By step 1.3 there is $M\in\mathbb N_0$ such that $\int z\mathbf1_{\{z>-x\}}\,d\nu(z)<-\varepsilon$ for every integer $x>M$. The set of such $M$ is nonempty, so let $M$ be its least element; this selection uses only the well-ordering of $\mathbb N_0$. Put $A=\{0,1,\ldots,M\}$ and $\psi=\phi/\varepsilon$. [step 1.3, given]

3.1 For every $x\ge0$, splitting the integral at $z=-x$ gives $\int(h_x(z)-x)\,d\nu(z)=-x\nu(\{z\le-x\})+\int z\mathbf1_{\{z>-x\}}\,d\nu(z)\le\int z\mathbf1_{\{z>-x\}}\,d\nu(z)$. Since $P\phi(x)$ is finite by step 2.1 and $\psi=\phi/\varepsilon$, $P\psi(x)=P\phi(x)/\varepsilon<\infty$. By [F5]–[F8] and step 1.2, [F7] gives $L\psi(x)=\varepsilon^{-1}\int(h_x-x)\,d\nu$. Thus step 2.2 gives $L\psi(x)<-1$ for every $x\in A^c$. [F5, F6, F7, F8, step 1.2, step 2.1, step 2.2, given]

4.1 The set $A$ is finite, nonempty, and proper in $\mathbb N_0$. By [F1], [F12], and steps 2.1 and 3.1, all hypotheses of the Lyapunov theorem hold, so $\mathbb E_xT_A\le\psi(x)=x/\varepsilon$ for every start. If $x\in A$, [F13] also gives $T_A=0$, consistent with the bound. [A1, F1, F12, F13, step 2.1, step 3.1, given]

5.1 The state space is fixed as the infinite set $\mathbb N_0$, and $M\ge0$ makes $A$ nonempty; if $M=0$, the target is the singleton $\{0\}$ and the same proof applies. The exterior begins at $M+1$, while starts in $A$ hit at time zero. Deterministic negative increments and zero transition weights are covered by the same formulas. AC is used for the canonical chain law and Lyapunov theorem [F12]; the drift limit and the least-threshold selection are choice-free. This is an upper bound, not an iff statement. [A1, F12, F13, step 1.1, step 2.1, step 2.2, step 3.1, step 4.1, given] ∎
