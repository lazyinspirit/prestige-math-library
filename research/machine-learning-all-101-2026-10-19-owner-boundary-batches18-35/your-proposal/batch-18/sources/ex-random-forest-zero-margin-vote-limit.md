---
id: ex-random-forest-zero-margin-vote-limit
kind: example
title: "A zero-margin bootstrap forest need not approach strict-margin risk"
status: draft
origin: pipeline
provenance:
  statement: ai-generated
  proof: ai-generated
dependency_level: 5
deps:
  - alg-bagged-random-forest
  - thm-infinite-forest-vote-limit
  - thm-independent-random-elements-have-product-joint-law
  - thm-dominated-convergence
generation:
  role: example
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: 'Leo Breiman, "Random Forests," Machine Learning 45 (2001), 5–32; full text hosted by the University of Chicago Macro Finance Research Program'
      url: 'https://mfm.uchicago.edu/wp-content/uploads/2020/06/Breiman-Random-Forests.pdf'
pipeline_run: machine-learning-all-101-2026-10-19
---

## Example

Use classification labels $0<1$ and the fixed training sample $D=((x_1,0),(x_2,1))$ with $x_1=(0,1)$ and $x_2=(1,0)$. Grow trees with depth cap $1$ and one uniformly selected feature at the root, along with the size-$2$ bootstrap samples in the bagged random-forest algorithm. Let $\Theta_b$ be IID tree randomizations with common law $Q$, write $p_c(x)=Q\{h(x,\Theta_b)=c\}$, and define $m(x,y)=p_y(x)-\max_{c\ne y}p_c(x)$. Let the test pair have the point-mass law at $(x^*,Y)=((1/4,1/4),1)$, and for $B$ trees let $G_B(x)$ be their majority vote with class $0$ breaking a tie and $PE_B=\mathbf1\{G_B(x^*)\ne1\}$. Then each randomized tree predicts class $1$ at $x^*$ with probability $1/2$, so $m(x^*,1)=0$ and $P\{m(X,Y)<0\}=0$. For every odd $B$, $PE_B$ has expectation $1/2$ over the tree randomizations; consequently it cannot converge almost surely to the strict-margin value $0$.

For a mixed bootstrap sample, the two possible root splits and their leaf labels are shown below. In each tree the left child is selected when the displayed feature is at most $1/2$, and the right child otherwise. The test point lies in the left child of both trees, whose labels differ. The diagram records these two CART cases; the verification derives the risk from the finite randomization counts and does not rely on the diagram.

```tikz
\begin{tikzpicture}[level distance=10mm,sibling distance=18mm]
  \node[draw] at (0,0) {$x_1\le\tfrac12$}
    child {node[draw] {$0$}}
    child {node[draw] {$1$}};
  \node[draw] at (6,0) {$x_2\le\tfrac12$}
    child {node[draw] {$1$}}
    child {node[draw] {$0$}};
\end{tikzpicture}
```

## Example references

[[alg-bagged-random-forest|Bootstrap and randomized-feature construction]]

[[thm-infinite-forest-vote-limit|Risk limit with the zero-margin hypothesis]]

[Breiman, “Random Forests,” Theorem 1.2, printed p. 7, and Appendix I, printed pp. 29–30](https://mfm.uchicago.edu/wp-content/uploads/2020/06/Breiman-Random-Forests.pdf)

## Facts & Assumptions

**Given:** The sample and test law in the Example, independent bootstrap samples of size $2$, and independent uniform one-feature choices at each tree root.

[F1] [[alg-bagged-random-forest]]: A bootstrap sample contains $N_{bi}$ copies of training observation $i$, and a node uses its independently drawn feature subset when forming split candidates.

[F2] [[thm-independent-random-elements-have-product-joint-law]]: The joint law of a finite independent family of random elements is the product of their marginal laws.

[F3] [[thm-dominated-convergence]]: Almost-everywhere convergence under a common integrable majorant implies convergence of the integrals.

[F4] [[thm-infinite-forest-vote-limit]]: The stated conditional-risk limit assumes that the zero-margin test-pair set has probability zero.

## Verification

1.1 There are four equally likely ordered bootstrap draws. The count vectors $(2,0)$ and $(0,2)$ each have probability $1/4$, and the mixed count vector $(1,1)$ has probability $1/2$. [given, F1, algebra]

2.1 With counts $(2,0)$ the only leaf predicts $0$, and with counts $(0,2)$ it predicts $1$. With mixed counts, either feature separates the two training points at $1/2$. The selected feature is uniform: feature $1$ sends $x^*$ to the class-$0$ leaf, while feature $2$ sends it to the class-$1$ leaf. Hence $Q\{h(x^*,\Theta)=1\}=1/4+(1/2)(1/2)=1/2$. [given, F1, step 1.1, algebra]

3.1 At the point-mass test pair, $p_0(x^*)=p_1(x^*)=1/2$, so $m(x^*,1)=0$ and $P\{m<0\}=0$; the zero-margin hypothesis in [F4] fails. For every odd $B$, the class-$1$ vote count has a symmetric binomial law with no tie; exactly half of its outcomes are below $B/2$. The conditional risk is the error indicator at this single test pair, so $\mathbb E_Q[PE_B]=1/2$. [given, F2, F4, step 2.1, algebra]

4.1 If $PE_{2k+1}\to0$ almost surely, then the bounded random variables $PE_{2k+1}\in[0,1]$ would have expectations tending to zero by [F3]. This is incompatible with step 3.1, so the full risk sequence cannot converge almost surely to the strict-margin value $0$. [F3, step 3.1, algebra] ∎
