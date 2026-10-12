---
id: lem-nrqm-composites-rank-one-operator-calculus
kind: lemma
domain: mathematics
title: Rank-one operator calculus on Hilbert spaces
status: draft
origin: pipeline
dependency_level: 0
deps: [def-hilbert-space, def-real-and-complex-inner-product-space, def-bounded-linear-operator, def-operator-norm, def-hilbert-space-adjoint, thm-cauchy-schwarz-in-an-inner-product-space, lem-finite-rank-operators-are-compact, lem-nuclear-series-characterizes-trace-norm, thm-trace-class-is-a-two-sided-banach-operator-ideal, thm-trace-is-absolutely-convergent-and-basis-independent, def-trace-class-operator, def-trace-of-a-trace-class-operator, def-countable-choice]
dependency_roles:
  def-hilbert-space: mathematical-premise
  def-real-and-complex-inner-product-space: mathematical-premise
  def-bounded-linear-operator: mathematical-premise
  def-operator-norm: mathematical-premise
  def-hilbert-space-adjoint: mathematical-premise
  thm-cauchy-schwarz-in-an-inner-product-space: mathematical-premise
  lem-finite-rank-operators-are-compact: mathematical-premise
  lem-nuclear-series-characterizes-trace-norm: mathematical-premise
  thm-trace-class-is-a-two-sided-banach-operator-ideal: mathematical-premise
  thm-trace-is-absolutely-convergent-and-basis-independent: mathematical-premise
  def-trace-class-operator: mathematical-premise
  def-trace-of-a-trace-class-operator: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "G. Teschl, Topics in Real and Functional Analysis (November 17, 2017), §3.6, Lemmas 3.27–3.29, printed pp. 96–98; specialization of the nuclear representation to one term, with pairing convention translated"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
---

## Statement

Assume Countable Choice ([[def-countable-choice]]). Let $H$ be a real or complex Hilbert space, with its inner product linear in the first argument ([[def-hilbert-space]], [[def-real-and-complex-inner-product-space]]), and let $u,v\in H$. Define $T_{u,v}x:=\langle x,v\rangle u$. Then $T_{u,v}$ is a bounded operator of rank at most one and is trace class, with

$$T_{u,v}^*=T_{v,u},\qquad \|T_{u,v}\|=\|T_{u,v}\|_1=\|u\|\,\|v\|,\qquad \operatorname{tr}(T_{u,v})=\langle u,v\rangle.$$

For every bounded $B$ on $H$,

$$BT_{u,v}=T_{Bu,v},\qquad T_{u,v}B=T_{u,B^*v},\qquad \operatorname{tr}(BT_{u,v})=\operatorname{tr}(T_{u,v}B)=\langle Bu,v\rangle.$$

Furthermore $T_{u,u}\ge0$, and $\|u\|=1$ makes $T_{u,u}$ the orthogonal projection onto the span of $u$. The map $(u,v)\mapsto T_{u,v}$ is continuous in trace norm: for $u',v'\in H$,

$$\|T_{u,v}-T_{u',v'}\|_1\le\|u-u'\|\,\|v\|+\|u'\|\,\|v-v'\|.$$

These conclusions include $H=\{0\}$ and zero vectors, and require neither separability nor a supplied Hilbert basis.

## Facts & Assumptions

**Given:** Countable Choice; the real or complex Hilbert space $H$ with the stated pairing convention; vectors $u,v,u',v'$; and a bounded operator $B$.

[F1] Cauchy–Schwarz gives $|\langle x,y\rangle|\le\|x\|\|y\|$; the operator norm is the supremum over the unit ball, and the adjoint satisfies $\langle Bx,y\rangle=\langle x,B^*y\rangle$ ([[thm-cauchy-schwarz-in-an-inner-product-space]], [[def-operator-norm]], [[def-bounded-linear-operator]], [[def-hilbert-space-adjoint]]).

[F2] Every bounded finite-rank operator is compact. For a compact operator, a positive-integer-indexed nuclear representation with summable products of vector norms makes it trace class, with trace norm at most that sum ([[lem-finite-rank-operators-are-compact]], [[lem-nuclear-series-characterizes-trace-norm]], [[def-trace-class-operator]]).

[F3] For trace-class $S$, $\|S\|\le\|S\|_1$, and the trace norm satisfies the triangle inequality. For every nuclear representation $S=\sum_j\langle\cdot,a_j\rangle b_j$, $\operatorname{tr}S=\sum_j\langle b_j,a_j\rangle$ ([[thm-trace-class-is-a-two-sided-banach-operator-ideal]], [[thm-trace-is-absolutely-convergent-and-basis-independent]], [[def-trace-of-a-trace-class-operator]]).

## Proof

1.1 The defining map is linear by first-variable linearity, and $\|T_{u,v}x\|\le\|u\|\|v\|\|x\|$ by [F1]. Hence it is bounded and $\|T_{u,v}\|\le\|u\|\|v\|$. If $v\ne0$, testing $x=v/\|v\|$ gives equality; if $v=0$, both sides vanish. Its range lies in the span of $u$, so its rank is at most one. [given, F1, algebra]

1.2 The bounded candidate $T_{v,u}$ satisfies $\langle T_{u,v}x,y\rangle=\langle x,v\rangle\langle u,y\rangle=\langle x,T_{v,u}y\rangle$ by conjugate symmetry and conjugate-linearity in the second variable, so it is the adjoint. Direct evaluation on $x$ gives $BT_{u,v}=T_{Bu,v}$ and $T_{u,v}B=T_{u,B^*v}$. [step 1.1, F1, algebra]

2.1 By step 1.1 and [F2], $T_{u,v}$ is compact. Put $a_1=v$, $b_1=u$, and $a_j=b_j=0$ for $j\ge2$. The zero-based partial sums $R_0=0$, $R_m=\sum_{j=1}^m\langle\cdot,a_j\rangle b_j$ equal $T_{u,v}$ for every $m\ge1$ and converge in operator norm; their nuclear sum is $\|u\|\|v\|$. Thus [F2] gives trace class and $\|T_{u,v}\|_1\le\|u\|\|v\|$. Combining [F3] with step 1.1 gives equality. The same nuclear representation and [F3] give $\operatorname{tr}(T_{u,v})=\langle u,v\rangle$, including zero-vector cases. [step 1.1, F2, F3, construct, algebra]

2.2 Step 1.2 and step 2.1 give $\operatorname{tr}(BT_{u,v})=\langle Bu,v\rangle$ and $\operatorname{tr}(T_{u,v}B)=\langle u,B^*v\rangle=\langle Bu,v\rangle$. Also $\langle T_{u,u}x,x\rangle=|\langle x,u\rangle|^2\ge0$; for unit $u$ the identity $T_{u,u}^2=T_{u,u}$ and the adjoint formula show it is the orthogonal projection onto its range, the span of $u$. [step 1.2, step 2.1, F1, algebra]

3.1 By linearity in the first vector and conjugate-linearity in the second, $T_{u,v}-T_{u',v'}=T_{u-u',v}+T_{u',v-v'}$. The triangle inequality [F3] and the trace-norm formula in step 2.1 give the claimed continuity estimate. All other assertions are steps 1.1–2.2, and no basis was introduced. Countable Choice is used only through the cited compact nuclear/trace suppliers; the finite formulas introduce no further choice. [step 1.1, step 1.2, step 2.1, step 2.2, F3, algebra] ∎
