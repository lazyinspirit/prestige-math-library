---
id: prop-expander-sync-regular-two-sided
title: Regular adjacency expansion supplies two-sided expansion
kind: proposition
domain: mathematics
status: draft
origin: pipeline
deps:
  - def-expander-sync-graph-notation
  - def-expander-sync-centered-matrices
  - def-expander-sync-adjacency-expander
  - def-expander-sync-two-sided-expander
  - def-expander-sync-matrix-order
  - prop-expander-prereq-selfadjoint-order-and-norm
dependency_roles:
  def-expander-sync-graph-notation: mathematical-premise
  def-expander-sync-centered-matrices: mathematical-premise
  def-expander-sync-adjacency-expander: mathematical-premise
  def-expander-sync-two-sided-expander: mathematical-premise
  def-expander-sync-matrix-order: mathematical-premise
  prop-expander-prereq-selfadjoint-order-and-norm: mathematical-premise
proof_strategy: direct
sources:
  references:
    - title: Expander graphs are globally synchronizing
      url: https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf
      locator: PDF page 8, paragraph following Definition 1.9
      statement: An $(n,d^*,\alpha)$-expander need not be regular; if it is
        $d^*$-regular, then $\Delta_L=-\Delta_A$ and it is an
        $(n,d^*,\alpha,-\alpha,\alpha)$-expander.
      hypotheses: The graph and centered matrices use the article's conventions,
        including its reference parameter $d^*$.
      reading_limits: The paragraph following Definition 1.9 was inspected in the
        supplied article text. This reference attributes the claim; the proof
        below uses the stated definitions and the norm-order supplier.
provenance:
  statement: ai-altered
  proof: ai-generated
dependency_level: 5
---

## Statement

An $(n,d^*,\alpha)$-expander need not be regular. If an $(n,d^*,\alpha)$-expander is $d^*$-regular, then $\Delta_L=-\Delta_A$ and it is an $(n,d^*,\alpha,-\alpha,\alpha)$-expander.

Here $G=(V,E)$ is a finite undirected graph with $n=|V|>0$, binary symmetric adjacency matrix $A$, degree matrix $D$ formed from row sums, and Laplacian $L=D-A$; a loop contributes once to its vertex's degree. Regularity means $D=d^*I$. With $J$ the all-ones matrix, $\Delta_A=A-(d^*/n)J$ and $\Delta_L=L-d^*I+(d^*/n)J$. An $(n,d^*,\alpha)$-expander satisfies $\|\Delta_A\|\le\alpha d^*$ in the induced Euclidean operator norm. An $(n,d^*,\alpha,c^-,c^+)$-expander additionally satisfies $c^-d^*I\preceq\Delta_L\preceq c^+d^*I$, where $B\preceq C$ means $f^*(C-B)f\ge0$ for every $f\in\mathbb C^V$.

## Statement references

[[def-expander-sync-graph-notation]]

[[def-expander-sync-centered-matrices]]

[[def-expander-sync-adjacency-expander]]

[[def-expander-sync-two-sided-expander]]

[[def-expander-sync-matrix-order]]

## Facts & Assumptions

[F1] The graph conventions give $L=D-A$ and identify regularity with constant degree row sums ([[def-expander-sync-graph-notation]]). The centered matrices satisfy $\Delta_L=(D-d^*I)-\Delta_A$ ([[def-expander-sync-centered-matrices]]).

[F2] The adjacency-expander predicate is $\|\Delta_A\|\le\alpha d^*$ ([[def-expander-sync-adjacency-expander]]). The two-sided predicate is this same condition together with $c^-d^*I\preceq\Delta_L\preceq c^+d^*I$ ([[def-expander-sync-two-sided-expander]]); the order and norm are those stated above ([[def-expander-sync-matrix-order]]).

[F3] For a real symmetric matrix $B$ and real $b\ge0$, $\|B\|\le b$ if and only if $-bI\preceq B\preceq bI$ ([[prop-expander-prereq-selfadjoint-order-and-norm]]).

## Proof

**Given:** The graph and parameters in the statement; for the conditional assertion assume also that the graph is $d^*$-regular and is an $(n,d^*,\alpha)$-expander.

**Goal:** Exhibit an irregular adjacency expander and prove the centered identity and two-sided bound in the regular case.

1.1 For the irregular example, take two vertices, one loop at the first vertex, and no other edges. Then $A=\begin{pmatrix}1&0\\0&0\end{pmatrix}$ and the degrees are $1$ and $0$. With $d^*=1$ and $\alpha=1$, the centered matrix is $B=A-J/2=\frac12\begin{pmatrix}1&-1\\-1&-1\end{pmatrix}$. Direct multiplication gives $B^*B=I/2$, so $\|Bf\|_2^2=\|f\|_2^2/2$ for every $f$ and $\|B\|=1/\sqrt2\le1=\alpha d^*$. By [F2] this is an $(2,1,1)$-expander, although its degrees differ. [F1, F2, construct, algebra]

2.1 In the regular case, $D=d^*I$ by the degree definition. Therefore [F1] gives $\Delta_L=-\Delta_A$. The matrix $\Delta_A$ is real symmetric. Its norm is nonnegative, so the assumed bound $\|\Delta_A\|\le\alpha d^*$ implies $b=\alpha d^*\ge0$. Applying [F3] gives $-bI\preceq\Delta_A\preceq bI$; negating the inequalities and using the identity gives $-\alpha d^*I\preceq\Delta_L\preceq\alpha d^*I$. Together with the assumed adjacency-expander condition, [F2] identifies this as the $(n,d^*,\alpha,-\alpha,\alpha)$-expander condition. [given, F1, F2, F3, algebra] ∎

## Source notes

The claim is attributed to the paragraph following Definition 1.9 of [Expander graphs are globally synchronizing](https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf). The example and proof above are local deductions from the stated suppliers.
