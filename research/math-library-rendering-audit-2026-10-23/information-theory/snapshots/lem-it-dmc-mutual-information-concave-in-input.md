---
id: lem-it-dmc-mutual-information-concave-in-input
kind: lemma
title: Finite-channel mutual information is concave in the input law
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 3
deps: [def-it-finite-mutual-information, def-discrete-memoryless-channel, def-qa-35-finite-probability-entropy-and-stochastic-matrices, thm-logarithm-derivative-and-integral, thm-algebra-of-derivatives, thm-logarithm-slower-than-every-positive-power, cor-mean-value-theorem]
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: No choice axiom is used; all alphabets and sums are finite.
provenance:
  statement: literature-derived
  proof: ai-generated
proof_obligations:
  - Derive the output-entropy minus conditional-entropy formula from finite mutual information.
  - Prove entropy concavity including probability vectors with zero coordinates.
  - Deduce concavity of mutual information from the affine output law and linear conditional entropy.
sources:
  references:
    - title: "Robert M. Gray, Entropy and Information Theory, corrected first edition"
      url: https://ee.stanford.edu/~gray/it.pdf
      locator: Chapter 2, §2.5; mutual information as output entropy minus conditional entropy and concavity in the input distribution.
    - title: "Yury Polyanskiy and Yihong Wu, Information Theory: From Coding to Learning, author prepublication"
      url: https://people.lids.mit.edu/yp/homepage/data/itbook-export.pdf
      locator: Chapter 3, §3.1 and Chapter 19, §19.1; finite mutual-information identities and input concavity for a fixed channel.
---

## Statement

Let $\mathcal X,\mathcal Y$ be finite nonempty sets and let $V(y\mid x)$ be a row-stochastic channel. For an input probability vector $P$, write $I_P(V)$ for the mutual information under the joint law $P(x)V(y\mid x)$. Then $P\mapsto I_P(V)$ is concave: for input laws $P_0,P_1$ and $\lambda\in[0,1]$,
$$I_{\lambda P_0+(1-\lambda)P_1}(V)\ge\lambda I_{P_0}(V)+(1-\lambda)I_{P_1}(V).$$

## Facts & Assumptions

**Given:** Finite nonempty input and output alphabets, a row-stochastic channel $V$, two input laws $P_0,P_1$, and $\lambda\in[0,1]$.

[F1] [[def-it-finite-mutual-information]] and [[def-qa-35-finite-probability-entropy-and-stochastic-matrices]]: $I(X;Y)=D(P_{XY}\|P_X\otimes P_Y)$ and $H(q)=-\sum_{y:q_y>0}q_y\ln q_y$, with $0\ln0=0$.

[F2] [[def-discrete-memoryless-channel]]: each row $V(\cdot\mid x)$ is a probability vector and the output law is $PV$.

[F3] [[thm-logarithm-derivative-and-integral]] and [[thm-algebra-of-derivatives]]: on $(0,1]$, $g(t)=-t\ln t$ has derivative $g'(t)=-\ln t-1$.

[F4] [[cor-mean-value-theorem]]: if a function is continuous on $[a,b]$ and differentiable on $(a,b)$, its secant slope equals its derivative at some interior point.

[F5] [[thm-logarithm-slower-than-every-positive-power]]: $t\ln t\to0$ as $t\downarrow0$, so $g$ extends continuously by $g(0)=0$.

## Proof

1.1 Expanding the finite KL sum in [F1] under $P(x)V(y\mid x)$ and grouping the finite terms gives
$$I_P(V)=H(PV)-\sum_xP(x)H(V(\cdot\mid x)).$$
Indeed, the logarithm of the joint-to-product ratio is $\ln V(y\mid x)-\ln(PV)(y)$ on positive joint support; summing the first term gives the negative conditional entropy and summing the second gives the output entropy. Zero-mass coordinates contribute zero by [F1]. [F1, F2, algebra]

1.2 For $0<s<t\le1$, [F3] gives $g'(s)=-\ln s-1> -\ln t-1=g'(t)$, since $\ln$ is strictly increasing by its positive derivative and the mean value theorem. If $0<u<v<w\le1$, apply [F4] to $g$ on $[u,v]$ and $[v,w]$. The resulting derivative points satisfy $\xi_1<\xi_2$, so the left secant slope is at least the right secant slope; rearranging is the concavity inequality for $g$ at $v$. Thus $g$ is concave on $(0,1]$. [F3, F4]

2.1 For $u,w\in[0,1]$ with one endpoint zero, replace that endpoint by a positive sequence tending to zero in the inequality of step 1.2 and use continuity from [F5]. Therefore $g$ is concave on $[0,1]$. Summing the scalar concavity inequalities over coordinates proves that finite entropy $H(q)=\sum_y g(q_y)$ is concave on each probability simplex. [F1, F5, step 1.2, algebra]

3.1 Put $P_\lambda=\lambda P_0+(1-\lambda)P_1$. The output law satisfies $P_\lambda V=\lambda(P_0V)+(1-\lambda)(P_1V)$, so step 2.1 gives $H(P_\lambda V)\ge\lambda H(P_0V)+(1-\lambda)H(P_1V)$. The conditional-entropy term in step 1.1 is linear in $P$. Subtracting that linear term yields $I_{P_\lambda}(V)\ge\lambda I_{P_0}(V)+(1-\lambda)I_{P_1}(V)$, as claimed. [step 1.1, step 2.1, given, algebra] ∎
