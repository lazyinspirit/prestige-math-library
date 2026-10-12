---
id: thm-cm-momentum-and-angular-momentum-balance
kind: theorem
title: "Total momentum and total angular momentum balances for a finite system with antisymmetric pair forces; pairwise central forces make the internal torque vanish"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 1
deps: [lem-cm-derivative-of-pairings-of-curves, def-cross-product-in-r3, lem-cross-product-is-bilinear-alternating-and-orthogonal, def-vector-valued-derivative-and-integral, def-interval, lem-finite-sum-laws, lem-finite-sum-reindexing-and-fubini]
dependency_roles:
  lem-cm-derivative-of-pairings-of-curves: mathematical-premise
  def-cross-product-in-r3: mathematical-premise
  lem-cross-product-is-bilinear-alternating-and-orthogonal: mathematical-premise
  def-vector-valued-derivative-and-integral: mathematical-premise
  def-interval: mathematical-premise
  lem-finite-sum-laws: mathematical-premise
  lem-finite-sum-reindexing-and-fubini: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "David Tong, Classical Dynamics (University of Cambridge), §1.3, Eqs. (1.11)-(1.19), printed pp. 5-7: $\\dot{\\mathbf P}=\\mathbf F^{\\rm ext}$ and $\\dot{\\mathbf L}=\\sum_i\\mathbf r_i\\times\\mathbf F_i^{\\rm ext}+\\sum_{i<j}(\\mathbf r_i-\\mathbf r_j)\\times\\mathbf F_{ij}$"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
    - title: "Richard Fitzpatrick, Classical Mechanics (University of Texas at Austin), Non-Isolated Systems, Eqs. (41)-(44): external momentum and torque balances with internal cancellation"
      url: "https://farside.ph.utexas.edu/teaching/336k/Newtonhtml/node12.html"
---

## Statement

Let $I\subseteq\mathbb R$ be an interval with at least two points ([[def-interval]]), let $N\ge1$, let $m_1,\dots,m_N>0$, and let $x_i:I\to\mathbb R^3$ be twice differentiable, i.e. differentiable with derivative $x_i'$ differentiable ([[def-vector-valued-derivative-and-integral]]). Write $p_i:=m_ix_i'$ and suppose there are maps $f_i:I\to\mathbb R^3$ and, for every ordered pair $i\ne j$ in $\{1,\dots,N\}$, maps $f_{ij}:I\to\mathbb R^3$ such that

$$f_{ij}(t)=-f_{ji}(t),\qquad p_i'(t)=f_i(t)+\sum_{j\ne i}f_{ij}(t)\qquad(t\in I).$$

Write $P:=\sum_ip_i$, $J:=\sum_ix_i\times p_i$ (cross product in $\mathbb R^3$, [[def-cross-product-in-r3]]). Then:

1. $P$ is differentiable on $I$ with $P'(t)=\sum_if_i(t)$ for all $t\in I$;
2. $J$ is differentiable on $I$ with $$J'(t)=\sum_ix_i(t)\times f_i(t)+\sum_{i<j}\bigl(x_i(t)-x_j(t)\bigr)\times f_{ij}(t)\qquad(t\in I);$$
3. if in addition, for every $i<j$, $f_{ij}$ is parallel to $x_i-x_j$ — that is, there is a real function $\lambda_{ij}$ on $I$ with $f_{ij}=\lambda_{ij}(x_i-x_j)$ — then $J'(t)=\sum_ix_i(t)\times f_i(t)$ for all $t\in I$.

## Facts & Assumptions

**Given:** An interval $I\subseteq\mathbb R$ with at least two points, $N\ge1$, positive reals $m_1,\dots,m_N$, twice differentiable curves $x_i:I\to\mathbb R^3$, velocities $v_i:=x_i'$, momenta $p_i=m_iv_i$, and maps $f_i,f_{ij}$ with $f_{ij}=-f_{ji}$ and $p_i'=f_i+\sum_{j\ne i}f_{ij}$ on $I$.

[L1] Sums and scalar multiples of curves differentiable at $t$ are differentiable at $t$ with the expected derivatives ([[def-vector-valued-derivative-and-integral]]).

[L2] Finite sums over finite sets may be reindexed along bijections and are additive over disjoint unions ([[lem-finite-sum-reindexing-and-fubini]] clauses 1 and 2); consequently, for vectors $a_{ij}$ indexed by the ordered pairs $(i,j)$ with $i\ne j$, the set of such pairs is the disjoint union over the unordered pairs $i<j$ of the two-element sets $\{(i,j),(j,i)\}$, so $\sum_i\sum_{j\ne i}a_{ij}=\sum_{i<j}(a_{ij}+a_{ji})$. Scalar factors distribute over finite sums ([[lem-finite-sum-laws]]).

[L3] For differentiable curves $u,v:I\to\mathbb R^3$ and $t\in I$, the cross product $t\mapsto u(t)\times v(t)$ is differentiable at $t$ with derivative $u'(t)\times v(t)+u(t)\times v'(t)$ ([[lem-cm-derivative-of-pairings-of-curves]]).

[L4] The cross product is bilinear and alternating, so $u\times u=0$, $u\times v=-(v\times u)$ and $u\times(v+w)=u\times v+u\times w$ for $u,v,w\in\mathbb R^3$ ([[def-cross-product-in-r3]], [[lem-cross-product-is-bilinear-alternating-and-orthogonal]]).

## Proof

**Proof technique:** direct.

1.1 Since $P$ is the finite sum of the differentiable curves $p_i$, [L1] gives $P'=\sum_ip_i'$; substituting the balance equation and using $f_{ij}=-f_{ji}$ with the reindexing rule [L2], $\sum_i\sum_{j\ne i}f_{ij}=\sum_{i<j}(f_{ij}+f_{ji})=0$, so $P'=\sum_if_i$; this is clause 1. [given, L1, L2, algebra]


2.1 Each term $x_i\times p_i$ is differentiable on $I$ with derivative $x_i'\times p_i+x_i\times p_i'$ by [L3], and [L1] makes their finite sum $J$ differentiable with $$J'=\sum_ix_i'\times p_i+\sum_ix_i\times p_i'=\sum_ix_i'\times p_i+\sum_ix_i\times f_i+\sum_i\sum_{j\ne i}x_i\times f_{ij}.$$ [step 1.1, given, L1, L3]


3.1 The first sum in step 2.1 vanishes termwise: $x_i'\times p_i=m_ix_i'\times x_i'=0$ by alternation [L4]. [step 2.1, L4, algebra]


4.1 The double sum in step 2.1 equals $\sum_{i<j}(x_i\times f_{ij}+x_j\times f_{ji})=\sum_{i<j}(x_i-x_j)\times f_{ij}$: the first equality reindexes the ordered pairs by the unordered ones [L2], and the second uses $f_{ji}=-f_{ij}$, bilinearity and $u\times(-w)=-(u\times w)$ [L4]. Combining with steps 2.1 and 3.1 gives clause 2. [step 2.1, step 3.1, L2, L4, algebra]


5.1 Under the parallelism hypothesis, $(x_i-x_j)\times f_{ij}=\lambda_{ij}(x_i-x_j)\times(x_i-x_j)=0$ for every $i<j$ by alternation [L4]; hence the double sum in clause 2 vanishes and $J'=\sum_ix_i\times f_i$, which is clause 3. [step 4.1, given, L4, algebra] ∎
