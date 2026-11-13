---
id: rem-expander-sync-rem-3-5
title: Cheeger lower bound — Remark 3.5
kind: remark
domain: mathematics
status: draft
origin: pipeline
deps:
  - def-expander-sync-two-sided-expander
  - def-expander-sync-edge-count
  - def-expander-sync-cheeger-constant
  - lem-expander-sync-lem-3-4
  - rem-expander-sync-connected-expander
  - math:def-connected-graph-and-connected-component
  - prop-expander-prereq-selfadjoint-order-and-norm
dependency_roles:
  def-expander-sync-two-sided-expander: mathematical-premise
  def-expander-sync-edge-count: mathematical-premise
  def-expander-sync-cheeger-constant: mathematical-premise
  lem-expander-sync-lem-3-4: mathematical-premise
  rem-expander-sync-connected-expander: mathematical-premise
  math:def-connected-graph-and-connected-component: mathematical-premise
  prop-expander-prereq-selfadjoint-order-and-norm: mathematical-premise
proof_strategy: direct
sources:
  references:
    - title: Expander graphs are globally synchronizing
      url: https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf
      locator: PDF p. 20, Remark 3.5
      statement: The article states the lower bound $(1+c^-)d^*/2$ for the isometric,
        or Cheeger, constant and relates $c^->-1$ to connectivity.
      hypotheses: An $(n,d^*,\alpha,c^-,c^+)$-expander in the article's sense.
      reading_limits: Remark 3.5 and the immediately preceding cut estimate were
        inspected in the supplied article text. This reference attributes the
        claim; the argument below uses the declared mathematical suppliers.
provenance:
  statement: ai-altered
  proof: ai-generated
dependency_level: 6
---

## Statement

Let $G=(V,E)$ be an $(n,d^*,\alpha,c^-,c^+)$-expander with $n\ge2$. Its unnormalized edge isoperimetric constant, also called its Cheeger constant, is $h(G)=\min_{0<|X|\le n/2}e(X,X^c)/|X|$, where $X\subseteq V$, $X^c=V\setminus X$, and $e(X,X^c)$ counts each edge crossing the cut once. Then

$$h(G)\ge\frac{(1+c^-)d^*}{2}.$$

Here $G$ is called connected when the graph on $V$ obtained by deleting all self-loops is connected, meaning that every two vertices are joined by a path.

If $d^*>0$ and $c^->-1$, then $G$ is connected. Conversely, a connected graph admits a choice of expander parameters with $c^->-1$, but connectivity does not force every admissible prescribed lower parameter to exceed $-1$.

## Statement references

[[def-expander-sync-two-sided-expander]]

[[def-expander-sync-edge-count]]

[[def-expander-sync-cheeger-constant]]

[[math:def-connected-graph-and-connected-component]]

## Facts & Assumptions

[F1] For every $X\subseteq V$, the cut estimate gives $e(X,X^c)\ge(1+c^-)(d^*/n)|X||X^c|$ ([[lem-expander-sync-lem-3-4]]).

[F2] The cut count is nonnegative, and for $n\ge2$ the Cheeger constant is the minimum of the displayed quotients over the nonempty family of admissible subsets ([[def-expander-sync-edge-count]], [[def-expander-sync-cheeger-constant]]).

[F3] For an expander with $n\ge2$ and a positive reference parameter, $c^->-1$ implies connectivity. Conversely, if such an expander is connected, it admits a choice of expander parameters whose lower parameter exceeds $-1$. An arbitrary prescribed admissible lower parameter need not exceed $-1$, as shown by the $K_2$ example. [[rem-expander-sync-connected-expander]]

[F4] Connectedness in the loop-free graph means that every two vertices are joined by a path; this is the connectedness convention used for $G$ after deleting its self-loops. [[math:def-connected-graph-and-connected-component]]

[F5] For every finite real symmetric matrix $B$, its induced operator norm is finite and nonnegative, and $-\|B\|I\preceq B\preceq\|B\|I$. [[prop-expander-prereq-selfadjoint-order-and-norm]]

## Proof

**Given:** An expander $G$ with $n\ge2$, and, for the connectivity implication, $d^*>0$.

**Goal:** Prove the Cheeger lower bound and the qualified connectivity statements.

1.1 Put $t=(1+c^-)d^*$. If $t\ge0$, take any admissible $X$. Since $|X^c|/n=1-|X|/n\ge1/2$, [F1] gives $e(X,X^c)/|X|\ge t|X^c|/n\ge t/2$. Taking the minimum using [F2] yields $h(G)\ge t/2$. [F1, F2, algebra]

1.2 If the given representation has $d^*>0$ and $c^->-1$, the positive-reference implication of [F3] gives connectivity in the convention of [F4]. [given, F3, F4]

1.3 Conversely, suppose $G$ is connected. In the notation of the expander definition, $A$ and $L$ are finite real symmetric matrices, as are $I$ and $J$. Choose $\widetilde d^*=1$, put $\alpha_0=\|A-J/n\|$ and $b=\|L-I+J/n\|$, and set $c_0^-=-b$, $c_0^+=b$. These are finite real parameters by [F5]. The adjacency norm inequality holds with equality, and [F5] gives $-bI\preceq L-I+J/n\preceq bI$. Thus $G$ is an $(n,1,\alpha_0,c_0^-,c_0^+)$-expander with positive reference parameter, independently of its original $d^*$ ([[def-expander-sync-two-sided-expander]]). [given, F4, F5, choose, algebra]

2.1 If $t<0$, every admissible quotient is nonnegative by [F2], so $h(G)\ge0>t/2$. Together with step 1.1 this proves the bound without an additional sign assumption on $t$. [F2, step 1.1, algebra]

3.1 Apply the converse in [F3] to the connected positive-reference expander constructed in step 1.3. All its stated hypotheses now hold, so it provides a choice of expander parameters with lower parameter greater than $-1$, as claimed. The $K_2$ example in [F3] supplies the limitation for arbitrary prescribed lower parameters. [F3, F4, step 1.3] ∎

## Source notes

Remark 3.5 of [Expander graphs are globally synchronizing](https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf) states the Cheeger bound and describes $c^->-1$ as equivalent to connectivity. The qualification above accounts for nonoptimal admissible lower parameters; the cited article supplies attribution, not the proof.
