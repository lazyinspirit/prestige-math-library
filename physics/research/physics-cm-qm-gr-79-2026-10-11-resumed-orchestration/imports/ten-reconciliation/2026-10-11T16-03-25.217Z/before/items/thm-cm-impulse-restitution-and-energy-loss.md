---
id: thm-cm-impulse-restitution-and-energy-loss
kind: theorem
title: "Isolated reciprocal impulse in one dimension: momentum jumps $\\pm J$, conservation of total momentum, the restitution solution and the kinetic-energy change $-\\frac{1-e^2}{2}\\mu\\lVert v_2^--v_1^-\\rVert_2^2$"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 1
deps: [lem-cm-piecewise-c1-jump-derivative, thm-cm-center-of-mass-and-kinetic-splitting, def-countable-choice, def-test-function-space-d-of-an-open-set, def-ck-euclidean-maps-and-diffeomorphisms, def-euclidean-inner-product, def-interval, def-vector-valued-derivative-and-integral, def-vector-valued-functions-limits-and-continuity, lem-test-function-cutoffs-and-euclidean-localization, thm-cauchy-schwarz-and-the-euclidean-norm]
dependency_roles:
  lem-cm-piecewise-c1-jump-derivative: mathematical-premise
  thm-cm-center-of-mass-and-kinetic-splitting: mathematical-premise
  def-countable-choice: mathematical-premise
  def-test-function-space-d-of-an-open-set: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-interval: mathematical-premise
  def-vector-valued-derivative-and-integral: mathematical-premise
  def-vector-valued-functions-limits-and-continuity: mathematical-premise
  lem-test-function-cutoffs-and-euclidean-localization: mathematical-premise
  thm-cauchy-schwarz-and-the-euclidean-norm: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "David Tong, Classical Dynamics (University of Cambridge), §1.2-§1.3, printed pp. 2-8: $\\mathbf F=\\dot{\\mathbf p}$ as the primitive balance, together with the caution that the momentum balance of an open (variable-mass) system is not the closed-system statement"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
    - title: "Konstantin Likharev, Essential Graduate Physics: Classical Mechanics, §§1.2-1.3, Eqs. (1.8), (1.30)-(1.38), printed pp. 6-12: isolated-system momentum and pair reciprocity underlying impulse accounting"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
---

## Statement

Assume the Axiom of Countable Choice ($\mathrm{AC}_\omega$, [[def-countable-choice]]), inherited from the jump lemma below.
Let $I\subseteq\mathbb R$ be an open interval with at least two points ([[def-interval]]), let $t_*\in I$, let $m_1,m_2>0$, and let $x_1,x_2:I\to\mathbb R^3$ be continuous on $I$ and twice continuously differentiable on each of the two open intervals $I\cap(-\infty,t_*)$ and $I\cap(t_*,\infty)$ ([[def-vector-valued-derivative-and-integral]], [[def-ck-euclidean-maps-and-diffeomorphisms]]). Assume the one-sided limits
$$v_i^-:=\lim_{t\uparrow t_*}x_i'(t),\qquad v_i^+:=\lim_{t\downarrow t_*}x_i'(t)\qquad(i=1,2)$$
exist in $\mathbb R^3$, and write $p_i:=m_ix_i'$ on $I\setminus\{t_*\}$ ([[def-vector-valued-functions-limits-and-continuity]]). Let $F_1,F_2:I\to\mathbb R^3$ be continuous and let $J\in\mathbb R^3$. The **isolated reciprocal impulse model** at $t_*$ consists of the two requirements:

1. regular dynamics off the impulse: $m_ix_i''(t)=F_i(t)$ for every $t\in I\setminus\{t_*\}$ and $i=1,2$;
2. impulse pairing: for every $\Phi\in C_c^\infty(I;\mathbb R^3)$ — meaning every map whose three components lie in $C_c^\infty(I)$ ([[def-test-function-space-d-of-an-open-set]], [[def-ck-euclidean-maps-and-diffeomorphisms]]) — $$-\int_I\langle p_1(t),\Phi'(t)\rangle\,d\lambda(t)=\int_I\langle F_1(t),\Phi(t)\rangle\,d\lambda(t)+\langle J,\Phi(t_*)\rangle,$$ $$-\int_I\langle p_2(t),\Phi'(t)\rangle\,d\lambda(t)=\int_I\langle F_2(t),\Phi(t)\rangle\,d\lambda(t)-\langle J,\Phi(t_*)\rangle,$$ with integrals against Lebesgue measure $\lambda$ and the Euclidean inner product $\langle\cdot,\cdot\rangle$ ([[def-euclidean-inner-product]]); the value of $p_i$ at $t_*$ is irrelevant.

Under this model, with $M:=m_1+m_2$ and $\mu:=m_1m_2/M$:

**a.** $m_1(v_1^+-v_1^-)=J$ and $m_2(v_2^+-v_2^-)=-J$; consequently the total momentum is continuous across the impulse, $p_1(t_*^+)+p_2(t_*^+)=p_1(t_*^-)+p_2(t_*^-)$.

**b.** Let $e\in[0,1]$ satisfy the **restitution law** $v_2^+-v_1^+=-e(v_2^--v_1^-)$. Then the post-impulse velocities are uniquely determined: with $V:=\frac{m_1v_1^-+m_2v_2^-}{M}=\frac{m_1v_1^++m_2v_2^+}{M}$, $$v_1^+=V+\frac{m_2}{M}e\,(v_2^--v_1^-),\qquad v_2^+=V-\frac{m_1}{M}e\,(v_2^--v_1^-).$$

**c.** The kinetic-energy change across the impulse is $$\Delta K:=\frac{m_1\lVert v_1^+\rVert_2^2+m_2\lVert v_2^+\rVert_2^2}{2}-\frac{m_1\lVert v_1^-\rVert_2^2+m_2\lVert v_2^-\rVert_2^2}{2}=-\frac{1-e^2}{2}\,\mu\,\lVert v_2^--v_1^-\rVert_2^2\le0;$$ in particular $\Delta K=0$ for $e=1$ and $\Delta K=-\frac12\mu\lVert v_2^--v_1^-\rVert_2^2$ for $e=0$.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$; an open interval $I$, a point $t_*\in I$, masses $m_1,m_2>0$; position curves $x_1,x_2$ continuous on $I$ and twice differentiable off $t_*$ with one-sided velocity limits $v_i^\pm$; continuous $F_1,F_2$ and a vector $J$; the isolated reciprocal impulse model of the statement; and, for claims b and c, a number $e\in[0,1]$ satisfying the restitution law.

[L1] Jump lemma: for a real function $p$ on $I$ that is continuous and $C^1$ off $t_*$ and whose one-sided limits $p(t_*^\pm)$ and $p'(t_*^\pm)$ exist, the regular distributions of $p$ and of its off-$t_*$ derivative satisfy $(u_p)'=u_{p'_{\mathrm{reg}}}+[p]\delta_{t_*}$ with $[p]=p(t_*^+)-p(t_*^-)$ ([[lem-cm-piecewise-c1-jump-derivative]], [[def-countable-choice]]).

[L2] Two-body kinetic identity: for all vectors $u,w\in\mathbb R^3$ and $V:=\frac{m_1u+m_2w}{M}$, $$m_1\lVert u\rVert_2^2+m_2\lVert w\rVert_2^2=M\lVert V\rVert_2^2+\mu\lVert u-w\rVert_2^2;$$ this is the two-body case of the kinetic splitting identity, whose proof is the algebraic expansion of the right-hand side ([[thm-cm-center-of-mass-and-kinetic-splitting]], [[def-euclidean-inner-product]]). The Euclidean norm is a norm on $\mathbb R^3$, hence homogeneous: $\lVert cw\rVert_2=|c|\,\lVert w\rVert_2$ for real $c$ ([[thm-cauchy-schwarz-and-the-euclidean-norm]]).

[L3] Test-function cutoffs: for compact $K\subseteq\Omega$ with $\Omega\subseteq\mathbb R^m$ open there is a smooth compactly supported $\chi\in C_c^\infty(\Omega)$ with $0\le\chi\le1$ and $\chi=1$ on a neighbourhood of $K$; in particular some $\chi\in C_c^\infty(I)$ has $\chi(t_*)=1$ ([[lem-test-function-cutoffs-and-euclidean-localization]], [[def-test-function-space-d-of-an-open-set]], [[def-ck-euclidean-maps-and-diffeomorphisms]]). The Euclidean inner product is bilinear and symmetric ([[def-euclidean-inner-product]]).

## Proof

**Proof technique:** direct.

1.1 Fix a coordinate $k\in\{0,1,2\}$ and a real-valued $\varphi\in C_c^\infty(I)$; the vector test function $\Phi:=\varphi\,e_k$ has components $(\varphi e_k)_l=\delta_{kl}\varphi$ and lies in $C_c^\infty(I;\mathbb R^3)$. Reading the impulse pairing of the model for this $\Phi$ gives $$-\int_Ip_{1,k}(t)\varphi'(t)\,d\lambda(t)=\int_IF_{1,k}(t)\varphi(t)\,d\lambda(t)+J_k\varphi(t_*),\qquad -\int_Ip_{2,k}(t)\varphi'(t)\,d\lambda(t)=\int_IF_{2,k}(t)\varphi(t)\,d\lambda(t)-J_k\varphi(t_*).$$ [given, L3, algebra]


2.1 Each component $p_{i,k}$ satisfies the hypotheses of the jump lemma [L1]: it is continuous and $C^1$ off $t_*$, its one-sided limits exist, and its one-sided derivative limits exist too, because off $t_*$ one has $p_{i,k}'=m_ix_{i,k}''=F_{i,k}$ by the regular-dynamics requirement of the model and $F_{i,k}$ is continuous on $I$. Moreover the off-$t_*$ derivative of $p_{i,k}$ is $F_{i,k}$, so $(p_{i,k})'_{\mathrm{reg}}=F_{i,k}$. Hence [L1] gives, for every real $\varphi\in C_c^\infty(I)$, $$-\int_Ip_{i,k}\varphi'\,d\lambda=\int_IF_{i,k}\varphi\,d\lambda+[p_{i,k}]\,\varphi(t_*).$$ [step 1.1, given, L1]


3.1 Comparing the identity of step 2.1 with the model identity of step 1.1 for the same $\varphi$, the terms $\int_IF_{i,k}\varphi\,d\lambda$ cancel and leave $([p_{1,k}]-J_k)\varphi(t_*)=0$ and $([p_{2,k}]+J_k)\varphi(t_*)=0$ for every $\varphi\in C_c^\infty(I)$; choosing by [L3] a $\varphi$ with $\varphi(t_*)=1$ gives $[p_{1,k}]=J_k$ and $[p_{2,k}]=-J_k$. As $k$ is arbitrary, $m_1(v_1^+-v_1^-)=J$ and $m_2(v_2^+-v_2^-)=-J$, and adding these two vector equations gives $p_1(t_*^+)+p_2(t_*^+)=p_1(t_*^-)+p_2(t_*^-)$; this is claim a. [step 2.1, given, L3, algebra]


4.1 For claim b, let $V:=\frac{m_1v_1^-+m_2v_2^-}{M}$ and $d:=v_2^--v_1^-$. By step 3.1, $V=\frac{m_1v_1^++m_2v_2^+}{M}$ as well. The restitution law reads $v_2^+-v_1^+=-ed$. Writing $d^+:=v_2^+-v_1^+$ and solving the pair of linear equations ($v_2^+=v_1^++d^+$ and $m_1v_1^++m_2v_2^+=MV$) gives $v_1^+=V-\frac{m_2}{M}d^+=V+\frac{m_2}{M}ed$ and $v_2^+=V+\frac{m_1}{M}d^+=V-\frac{m_1}{M}ed$; conversely these displayed vectors satisfy both equations, so they are the unique solution and claim b holds. [step 3.1, given, algebra]


5.1 For claim c, apply the kinetic identity [L2] to the pairs $(v_1^-,v_2^-)$ and $(v_1^+,v_2^+)$, whose centre-of-mass velocities are both $V$: $$\frac{m_1\lVert v_1^\pm\rVert_2^2+m_2\lVert v_2^\pm\rVert_2^2}{2}=\frac{M\lVert V\rVert_2^2}{2}+\frac{\mu\lVert v_2^\pm-v_1^\pm\rVert_2^2}{2}.$$ Subtracting the minus identity from the plus identity cancels the centre-of-mass term, and the restitution law gives $\lVert v_2^+-v_1^+\rVert_2^2=e^2\lVert v_2^--v_1^-\rVert_2^2$ by homogeneity of the norm [L2], so $\Delta K=\frac{\mu}{2}(e^2-1)\lVert v_2^--v_1^-\rVert_2^2=-\frac{1-e^2}{2}\mu\lVert v_2^--v_1^-\rVert_2^2\le0$ because $0\le e\le1$; the cases $e=1$ and $e=0$ are the stated substitutions. This is claim c. [step 4.1, given, L2, algebra] ∎
