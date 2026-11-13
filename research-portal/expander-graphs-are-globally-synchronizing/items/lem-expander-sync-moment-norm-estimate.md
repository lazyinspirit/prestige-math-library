---
id: lem-expander-sync-moment-norm-estimate
title: Expected-norm estimate from the corrected moment comparison
kind: lemma
domain: mathematics
status: published
origin: pipeline
deps:
  - def-expander-sync-centered-matrices
  - def-expander-sync-matrix-order
  - def-expander-sync-symmetrized-matrix
  - def-expander-sync-gaussian-comparator
  - lem-expander-sync-symmetrized-moments
  - lem-expander-sync-trace-comparison
  - rem-expander-sync-gaussian-norm-bound
  - math:def-axiom-of-choice
  - math:thm-logarithm-derivative-and-integral
  - math:lem-mean-value-theorem-on-closed-interval
  - math:thm-algebra-of-derivatives
  - prop-expander-prereq-ordered-angle-inequalities
dependency_roles:
  def-expander-sync-centered-matrices: mathematical-premise
  def-expander-sync-matrix-order: mathematical-premise
  def-expander-sync-symmetrized-matrix: mathematical-premise
  def-expander-sync-gaussian-comparator: mathematical-premise
  lem-expander-sync-symmetrized-moments: mathematical-premise
  lem-expander-sync-trace-comparison: mathematical-premise
  rem-expander-sync-gaussian-norm-bound: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  math:thm-logarithm-derivative-and-integral: mathematical-premise
  math:lem-mean-value-theorem-on-closed-interval: mathematical-premise
  math:thm-algebra-of-derivatives: mathematical-premise
  prop-expander-prereq-ordered-angle-inequalities: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Expander graphs are globally synchronizing
      url: https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf
      locator: PDF pp. 33–34, Proposition 6.3 and final displays of its proof
      statement: The article claims an expected-norm bound with factor sqrt(2p(1-p)),
        introduces f(alpha,n), and states that f decreases for n at least 3.
      hypotheses: The proposition uses the loop-free G(n,p) model, reference degree
        pn, sufficiently large n and 0<p<1; its moment argument uses a positive
        integer ell.
      reading_limits: Inspected the supplied article text at PDF pp. 33–34. This
        citation attributes the claims; it is not used to prove the corrected
        estimate.
dependency_level: 7
---

## Statement

Assume the Axiom of Choice. Let $n\ge1$ and $\ell\ge1$ be integers and $p\in[0,1]$. Let $A$ be the adjacency matrix of the loop-free Erdős–Rényi graph on $n$ vertices: distinct unordered edges occur independently with probability $p$. Put $\Delta_A=A-pJ$, where $J$ is the all-ones matrix, and use the Euclidean operator norm. Set $q=2p(1-p)$. Then

$$\mathbb E\|\Delta_A\|\le p+q^{1/(2\ell)}(2\sqrt n+2\sqrt{2\ell})e^{\log n/(2\ell)}.$$

For $\alpha>0$ and real $x\ge3$, define $f(\alpha,x)=2\sqrt2e^{1/(2\alpha)}(1+\sqrt{2\alpha\log x/x})$. This function is strictly decreasing in $x$. If $\ell=\alpha\log n$ is a positive integer, the moment estimate becomes

$$\mathbb E\|\Delta_A\|\le p+q^{1/(2\ell)}2\sqrt n\,e^{1/(2\alpha)}\bigl(1+\sqrt{2\alpha\log n/n}\bigr).$$

The article’s stronger displayed estimate is $\mathbb E\|\Delta_A\|\le\sqrt q(2\sqrt n+2\sqrt{2\ell})e^{\log n/(2\ell)}$; it does not hold uniformly for $p\in(0,1)$. In particular, the substitution $\ell=\alpha\log n$ is available to the integer-moment argument only when that quantity is an integer.

## Statement references

[[def-expander-sync-centered-matrices]]

[[def-expander-sync-matrix-order]]

[[def-expander-sync-symmetrized-matrix]]

[[def-expander-sync-gaussian-comparator]]

## Facts & Assumptions

[F1] For an independent copy $A'$, put $W=A-A'$. Corrected symmetrization gives $\mathbb E\|\Delta_A\|\le p+\mathbb E\|W\|$ and $\mathbb E\|W\|\le(\mathbb E\operatorname{Tr}W^{2\ell})^{1/(2\ell)}$. Here $\operatorname{Tr}$ is the sum of diagonal entries. [[lem-expander-sync-symmetrized-moments]]

[F2] If $G$ is symmetric with independent standard normal entries on and above the diagonal, reflected below it, the corrected comparison is $\mathbb E\operatorname{Tr}W^{2\ell}\le q\,\mathbb E\operatorname{Tr}G^{2\ell}$. [[lem-expander-sync-trace-comparison]], [[def-expander-sync-gaussian-comparator]]

[F3] For that same Gaussian convention, $(\mathbb E\operatorname{Tr}G^{2\ell})^{1/(2\ell)}\le n^{1/(2\ell)}(2\sqrt n+2\sqrt{2\ell})$. The Gaussian construction assumes Choice. [[rem-expander-sync-gaussian-norm-bound]], [[math:def-axiom-of-choice]]

[F4] The derivative of $\log x$ is $1/x$ on $(0,\infty)$, and the mean-value theorem gives strict decrease on an interval when the derivative is everywhere negative. [[math:thm-logarithm-derivative-and-integral]], [[math:lem-mean-value-theorem-on-closed-interval]]

[F5] If real functions $u,v$ are differentiable at $x$ and $v(x)\ne0$, then $(u/v)'(x)=(u'(x)v(x)-u(x)v'(x))/v(x)^2$. [[math:thm-algebra-of-derivatives]]

[F6] For $t\ge0$, $\log(1+t)\ge2t/(2+t)$, with equality precisely at $t=0$ ([[prop-expander-prereq-ordered-angle-inequalities]]).

## Proof

**Given:** The parameters, graph and Choice assumption in the Statement.

**Goal:** Prove the corrected estimate, the coefficient’s monotonicity, and the failure of the stronger displayed estimate.

1.1 Apply [F1] and [F2], then take nonnegative $2\ell$-th roots and use [F3]. This yields $\mathbb E\|\Delta_A\|\le p+q^{1/(2\ell)}n^{1/(2\ell)}(2\sqrt n+2\sqrt{2\ell})$. Since $n^{1/(2\ell)}=e^{\log n/(2\ell)}$, this is the first estimate, including $q=0$. [F1, F2, F3, given, algebra]

1.2 The identity function has derivative one by its difference quotient. Apply the quotient rule [F5] to $u(x)=\log x$ and $v(x)=x$ on $(0,\infty)$: [F4] supplies $u'(x)=1/x$, and $v(x)>0$. The strict equality case in [F6], applied at $t=2>0$, gives $\log3>1$. The positive logarithm derivative in [F4] and its mean-value theorem give $\log x\ge\log3>1$ for $x\ge3$. Thus the derivative of $\log x/x$ is $(1-\log x)/x^2<0$ there. By [F4], $\log x/x$ is strictly decreasing on $[3,\infty)$. The square-root function is strictly increasing on positive arguments: if $0<a<b$ and $\sqrt a\ge\sqrt b$, squaring would contradict $a<b$. The remaining factors in $f$ are positive and independent of $x$, so $f(\alpha,x)$ strictly decreases on $[3,\infty)$. [F4, F5, F6, given, algebra]

2.1 When $\ell=\alpha\log n$, substitute this equality into step 1.1 and use $2\sqrt n+2\sqrt{2\ell}=2\sqrt n(1+\sqrt{2\ell/n})$. This gives the stated specialized estimate with factor $2\sqrt n$. The moment comparison requires integer $\ell$, so the substitution has that stated restriction. [step 1.1, given, algebra]

3.1 For fixed $n\ge2$ and integer $\ell\ge1$, every diagonal entry of $\Delta_A$ is $-p$; applying it to a standard unit vector gives $\|\Delta_A\|\ge p$. As $p\uparrow1$, the article’s proposed right-hand side $\sqrt{2p(1-p)}(2\sqrt n+2\sqrt{2\ell})e^{\log n/(2\ell)}$ tends to zero, while $\mathbb E\|\Delta_A\|\ge p\to1$. Therefore the proposed inequality fails for all sufficiently large $p<1$, for every fixed $n$ and $\ell$ in this range. [given, algebra] ∎

## Source notes

The original article displays the stronger estimate and the coefficient $f$ at PDF p. 34. Its moment comparison uses $q^\ell$ where the completed comparison supplies $q$, and its symmetrization omits the $p$ term. The article citation is attribution only. The completed suppliers, rather than that display, provide the premises used above.
