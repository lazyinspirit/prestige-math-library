---
id: prop-expander-prereq-indicator-and-cut-calculus
kind: proposition
title: Ordered edge counts and centered cut vectors
domain: mathematics
status: published
origin: pipeline
deps:
  - def-expander-prereq-loop-compatible-networks
  - def-expander-prereq-vertex-hilbert-space
  - math:def-set-difference-and-symmetric-difference
  - math:def-finite-sum-in-a-commutative-monoid
dependency_roles:
  def-expander-prereq-loop-compatible-networks: mathematical-premise
  def-expander-prereq-vertex-hilbert-space: mathematical-premise
  math:def-set-difference-and-symmetric-difference: mathematical-premise
  math:def-finite-sum-in-a-commutative-monoid: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 1
---

## Statement

Let $(V,A)$ be a network: $V$ is a nonempty finite set, $n=|V|$, and $A$ is a real symmetric nonnegative matrix indexed by $V$. Put $d(x)=\sum_{y\in V}A_{xy}$, $D=\operatorname{diag}(d(x))$, $L=D-A$, and let $J$ be the matrix all of whose entries are $1$. For $X\subseteq V$, let $X^c=V\setminus X$ and let $\mathbf1_X$ be its indicator, equal to $1$ on $X$ and $0$ elsewhere. For subsets $X,Y\subseteq V$, define the ordered weight count $e(X,Y)=\sum_{x\in X}\sum_{y\in Y}A_{xy}$; then $e(X,Y)=\mathbf1_X^TA\mathbf1_Y$.

For $f=|X^c|\mathbf1_X-|X|\mathbf1_{X^c}$, one has $f^Tf=n|X||X^c|$, $Jf=0$, and $f^TLf=n^2e(X,X^c)$. If $X\subseteq Y$, then $2e(X,Y^c)=e(X,X^c)+e(Y,Y^c)-e(Y\setminus X,(Y\setminus X)^c)$. These are ordered-pair weight counts; no diagonal entry contributes to a cut count.

## Statement references

[[def-expander-prereq-loop-compatible-networks]]

[[def-expander-prereq-vertex-hilbert-space]]

[[math:def-set-difference-and-symmetric-difference]]

[[math:def-finite-sum-in-a-commutative-monoid]]

## Facts & Assumptions

[F1] The network definition supplies symmetric $A$, its row-sum degree matrix $D$, and $L=D-A$; diagonal entries are allowed. See [[def-expander-prereq-loop-compatible-networks]].

[F2] Matrix action and the vertex pairing are finite coordinate sums. See [[def-expander-prereq-vertex-hilbert-space]] and [[math:def-finite-sum-in-a-commutative-monoid]].

[F3] Relative complements and set differences consist of the elements in the first set that are not in the second. See [[math:def-set-difference-and-symmetric-difference]].

## Proof

**Given:** A network $(V,A)$ and subsets $X,Y\subseteq V$ as in the statement.

**Goal:** Establish the displayed indicator, cut-vector and nested-cut identities.

1.1 By the coordinate definitions, $\mathbf1_X^TA\mathbf1_Y=\sum_{x\in V}\sum_{y\in V}\mathbf1_X(x)A_{xy}\mathbf1_Y(y)=e(X,Y)$. Interchanging the finite indices and using symmetry gives $e(P,Q)=e(Q,P)$ for any subsets $P,Q$. The defining sum is additive over disjoint unions in either argument. Since $X$ and $X^c$ are disjoint, a pair contributing to $e(X,X^c)$ never has equal coordinates, so no diagonal entry contributes. [F1, F2, F3]

1.2 Put $a=|X|$ and $b=|X^c|$. The sets $X$ and $X^c$ partition $V$, so $a+b=n$; the vector $f$ equals $b$ on $X$ and $-a$ on $X^c$. Hence $f^Tf=ab^2+ba^2=nab$ and $\sum_x f(x)=ab-ba=0$. Each coordinate of $Jf$ is this sum, giving $Jf=0$. [F2, F3, algebra]

2.1 Expanding the row sums in $D$ and using symmetry yields $f^TLf=\frac12\sum_{x,y\in V}A_{xy}(f(x)-f(y))^2$. The difference is zero within either part and has square $(a+b)^2=n^2$ across the partition. The two oriented crossing sums are equal, so $f^TLf=n^2e(X,X^c)$. This calculation also covers empty $X$ or $X^c$ and arbitrary diagonal weights. [F1, F2, step 1.1, step 1.2, algebra]

3.1 Suppose $X\subseteq Y$ and put $B=Y\setminus X$ and $C=Y^c$. The sets $X,B,C$ partition $V$. Additivity and symmetry give $e(X,X^c)=e(X,B)+e(X,C)$, $e(Y,Y^c)=e(X,C)+e(B,C)$, and $e(B,B^c)=e(X,B)+e(B,C)$. Substitution gives $e(X,X^c)+e(Y,Y^c)-e(B,B^c)=2e(X,C)=2e(X,Y^c)$, as required. [F3, step 1.1, algebra] ∎
