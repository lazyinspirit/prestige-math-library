---
id: lem-author-fc0d6c95270f-isolated-vertex-before-onset
kind: lemma
title: An isolated vertex before three quarters of the connectivity scale
domain: mathematics
status: draft
origin: pipeline
deps:
  - def-expander-prereq-edge-order-process-coupling
  - def-expander-prereq-asymptotic-quantifiers
  - math:def-finite-probability-space-and-event
  - math:thm-natural-logarithm-laws
  - math:cor-integral-logarithm-agrees-with-natural-logarithm
  - math:def-integral-logarithm
  - lem-author-fc0d6c95270f-exponential-process-transfer
  - math:def-expectation-on-a-finite-probability-space
dependency_roles:
  def-expander-prereq-edge-order-process-coupling: mathematical-premise
  def-expander-prereq-asymptotic-quantifiers: mathematical-premise
  math:def-finite-probability-space-and-event: mathematical-premise
  math:thm-natural-logarithm-laws: mathematical-premise
  math:cor-integral-logarithm-agrees-with-natural-logarithm: mathematical-premise
  math:def-integral-logarithm: mathematical-premise
  lem-author-fc0d6c95270f-exponential-process-transfer: mathematical-premise
  math:def-expectation-on-a-finite-probability-space: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 2
---

## Statement

Assume countable choice. In the independent-label process on $n\ge2$ vertices, use its exponential-clock form $H_t=G_{p(t)}$, where $p(t)=1-e^{-t}$ for $t\ge0$, and define its connectivity clock time by $s_\tau=\min\{t\ge0:H_t\text{ is connected}\}$. Put $p_0=3\log n/(4n)$ for sufficiently large $n$ that $0<p_0<1$. With probability tending to one, $G_{p_0}$ has an isolated vertex and is therefore disconnected. Consequently $s_\tau$ is strictly later than $t_0=-\log(1-p_0)$ on the same event.

## Facts & Assumptions

[F1] At each fixed threshold $p$, the possible edges are independent Bernoulli variables of parameter $p$; connectivity persists as the threshold grows ([[def-expander-prereq-edge-order-process-coupling]]).

[F2] A finite probability law consists of nonnegative outcome weights summing to one, and event probabilities are sums of those weights ([[math:def-finite-probability-space-and-event]]). For a real function $Y$ on that finite space, its expectation is $\mathbb EY=\sum_\omega Y(\omega)w(\omega)$ ([[math:def-expectation-on-a-finite-probability-space]]).

[F3] The conventions for tending to zero and high probability are those of [[def-expander-prereq-asymptotic-quantifiers]].

[F4] The natural logarithm has the usual inverse and product laws, and $\log x=\int_1^x du/u$ for $x>0$ ([[math:thm-natural-logarithm-laws]], [[math:cor-integral-logarithm-agrees-with-natural-logarithm]], [[math:def-integral-logarithm]]).

[F5] The clocks $T_e=-\log(1-U_e)$ are finite and satisfy $H_t=G_{p(t)}$ with $p(t)=1-e^{-t}$. Almost surely their strict ordering is the uniform edge ordering, and the first connected clock time is $s_\tau$, the arrival time of the edge with connectivity index $\tau$ ([[lem-author-fc0d6c95270f-exponential-process-transfer]]).

## Proof

**Given:** The objects and hypotheses in the statement.

**Goal:** Establish all stated claims.

1.1 Fix $p=p_0$ and let $E$ be the set of possible edges, with $N=|E|=\binom n2$. On the finite configuration space $\Omega_p=\{0,1\}^{E}$, put $w_p(\omega)=\prod_{e\in E}p^{\omega_e}(1-p)^{1-\omega_e}$. These weights are nonnegative and sum to $\prod_{e\in E}(p+(1-p))=1$ by finite distributivity. By independence, the label-process indicator vector $(\mathbf1_{\{U_e\le p\}})_{e\in E}$ equals each configuration $\omega$ with probability $w_p(\omega)$; summing these disjoint configuration probabilities shows that every graph event has the same probability in the two models. All expectations below are the finite weighted sums on $(\Omega_p,w_p)$. [given, F1, F2, algebra]

2.1 On this finite space, let $I_v$ indicate that vertex $v$ is isolated and put $X=\sum_v I_v$. Then $q:=\mathbb P(I_v=1)=(1-p)^{n-1}$, and for distinct $u,v$ one has $\mathbb P(I_u=I_v=1)=(1-p)^{2n-3}$, since there are $2n-3$ distinct edges incident to at least one of them. Expanding the finite sums defining expectation, and using $I_v^2=I_v$, gives $\mathbb E X=nq$ and $\mathbb E X^2=nq+n(n-1)(1-p)^{2n-3}$. [F1, F2, step 1.1, algebra]

3.1 Define $\operatorname{Var}X=\mathbb E(X-\mathbb EX)^2$. Dividing the preceding expressions yields $\operatorname{Var}X/(\mathbb EX)^2=1/(nq)+(n-1)/(n(1-p))-1\le1/(nq)+p/(1-p)$. On $\{X=0\}$, the squared difference equals $(\mathbb EX)^2$, so summing nonnegative weights gives $\mathbb P(X=0)\le\operatorname{Var}X/(\mathbb EX)^2$. [step 2.1, F2, algebra]

4.1 The integral identity gives $-\log(1-p)=\int_{1-p}^1du/u\le p/(1-p)$. Also $\log n\le2\sqrt n$ follows by integrating $1/u\le1/\sqrt u$ from $1$ to $n$, so $p\to0$. Eventually $p\le1/7$, and hence $\log(nq)=\log n+(n-1)\log(1-p)\ge\log n-(n-1)p/(1-p)\ge(1/8)\log n$. Thus $nq\ge n^{1/8}$ and step 3.1 bounds $\mathbb P(X=0)$ by $n^{-1/8}+p/(1-p)\to0$. [given, F3, F4, step 3.1, algebra]

5.1 By the agreement of graph-event probabilities in step 1.1, the label-process graph $G_{p_0}$ has an isolated vertex with probability tending to one. On this event it is disconnected, since $n\ge2$ and an isolated vertex has no path to any other vertex. The finite clocks ensure that the complete graph is attained at a finite time, and the first connected time is a minimum, since the graph changes only at finitely many clock values. The inverse laws give $p(t_0)=p_0$, so $H_{t_0}=G_{p_0}$ is disconnected. Connectivity persists under edge addition, so its first connected time $s_\tau$ must exceed $t_0$. This proves all claims on the same high-probability event. [given, F1, F3, F4, F5, step 1.1, step 4.1] ∎
