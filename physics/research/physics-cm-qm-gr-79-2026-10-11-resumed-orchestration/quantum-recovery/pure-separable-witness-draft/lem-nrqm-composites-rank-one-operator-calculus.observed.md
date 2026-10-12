---
id: lem-nrqm-composites-rank-one-operator-calculus
kind: lemma
domain: mathematics
title: "Rank-one operator calculus"
status: draft
origin: pipeline
dependency_level: 0
deps: [def-trace-class-operator, lem-finite-rank-operators-are-compact, lem-nuclear-series-characterizes-trace-norm, thm-trace-is-absolutely-convergent-and-basis-independent, thm-trace-class-is-a-two-sided-banach-operator-ideal, def-operator-norm, def-bounded-linear-operator, def-hilbert-space-adjoint, def-real-and-complex-inner-product-space, thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces, def-non-negative-and-positive-operator, def-hilbert-space, def-countable-choice]
dependency_roles:
  def-trace-class-operator: mathematical-premise
  lem-finite-rank-operators-are-compact: mathematical-premise
  lem-nuclear-series-characterizes-trace-norm: mathematical-premise
  thm-trace-is-absolutely-convergent-and-basis-independent: mathematical-premise
  thm-trace-class-is-a-two-sided-banach-operator-ideal: mathematical-premise
  def-operator-norm: mathematical-premise
  def-bounded-linear-operator: mathematical-premise
  def-hilbert-space-adjoint: mathematical-premise
  def-real-and-complex-inner-product-space: mathematical-premise
  thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces: mathematical-premise
  def-non-negative-and-positive-operator: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "A. W. Knapp, Advanced Real Analysis, Chapter II §5 (rank-one operators, trace class and the trace norm)"
      url: "https://www.math.stonybrook.edu/~aknapp/download/a2-realanal-inside.pdf"
    - title: "G. Teschl, Topics in Real and Functional Analysis (November 17, 2017), §3.6, Lemmas 3.27–3.29, printed pp. 96–98 (Hilbert-Schmidt and trace class operators)"
      url: "https://uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let $H$ be a complex Hilbert space with the pairing linear in the first argument ([[def-hilbert-space]], [[def-real-and-complex-inner-product-space]]), and for $u,v\in H$ let

$$T_{u,v}x:=\langle x,v\rangle u\qquad(x\in H).$$

Then:

(a) $T_{u,v}\in\mathcal B(H)$ with $\|T_{u,v}\|=\|u\|\,\|v\|$ ([[def-bounded-linear-operator]], [[def-operator-norm]]), and the assignment $(u,v)\mapsto T_{u,v}$ is linear in $u$ and conjugate-linear in $v$;

(b) $T_{u,v}$ is trace class ([[def-trace-class-operator]]) with $\|T_{u,v}\|_1=\|u\|\,\|v\|$ and $\operatorname{tr}(T_{u,v})=\langle u,v\rangle$;

(c) $T_{u,v}^*=T_{v,u}$ ([[def-hilbert-space-adjoint]]); $T_{x,x}\ge0$ with $\operatorname{tr}(T_{x,x})=\|x\|^2$ and $\|T_{x,x}\|_1=\|x\|^2$ ([[def-non-negative-and-positive-operator]]);

(d) for bounded $B\in\mathcal B(H)$, $BT_{u,v}=T_{Bu,v}$ and $T_{u,v}B=T_{u,B^*v}$;

(e) for trace-class $S$, $ST_{u,v}=T_{Su,v}$, $T_{u,v}S=T_{u,S^*v}$ and $\operatorname{tr}(ST_{x,y})=\langle Sx,y\rangle=\operatorname{tr}(T_{x,y}S)$;

(f) the map $(u,v)\mapsto T_{u,v}$ is continuous $H\times H\to\mathcal S_1(H)$ for the trace norm, so in particular $v\mapsto T_{v,v}$ and $v\mapsto T_{u,v}$ are trace-norm continuous for fixed $u$.

*Scope.* Only the rank-one calculus is asserted; no spectral, compactness or ideal statement beyond (b) is claimed, and no physical interpretation is attached.

## Facts & Assumptions

**Given:** A complex Hilbert space $H$ with pairing linear in the first argument; vectors $u,v,x,y,w,z\in H$; a bounded operator $B$; a trace-class operator $S$.

[F1] A compact operator $T$ is trace class when $\sum_ns_n(T)<\infty$, with trace norm $\|T\|_1=\sum_ns_n(T)$; then $\|T\|_1\ge\|T\|$, the zero operator is trace class, and every bounded finite-rank operator is compact ([[def-trace-class-operator]], [[lem-finite-rank-operators-are-compact]]).

[F2] $T$ is trace class if and only if it has a nuclear representation $Tx=\sum_j\langle x,u_j\rangle v_j$ converging in operator norm with $\sum_j\|u_j\|\,\|v_j\|<\infty$; then $\|T\|_1=\inf\sum_j\|u_j\|\,\|v_j\|$ over all such representations, the infimum being attained ([[lem-nuclear-series-characterizes-trace-norm]]).

[F3] For every nuclear representation $T=\sum_jT_{v_j,u_j}$ of a trace-class operator, the scalar series $\sum_j\langle v_j,u_j\rangle$ converges absolutely to a number $\operatorname{tr}(T)$ independent of the representation, the trace is linear in the trace-class variable, and $|\operatorname{tr}(T)|\le\|T\|_1$ ([[thm-trace-is-absolutely-convergent-and-basis-independent]]).

[F4] The Hilbert adjoint is characterised by $\langle Bx,y\rangle=\langle x,B^*y\rangle$ for all $x,y$ and is unique; the pairing is linear in the first argument and conjugate-linear in the second with $\langle x,y\rangle=\overline{\langle y,x\rangle}$, and $|\langle x,y\rangle|\le\|x\|\,\|y\|$ ([[def-hilbert-space-adjoint]], [[def-real-and-complex-inner-product-space]], [[thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces]]).

[F5] On the trace-class operators $\|\cdot\|_1$ is a norm, they form a Banach space, and $\|T\|\le\|T\|_1$ and $\|ATB\|_1\le\|A\|\,\|T\|_1\|B\|$ ([[thm-trace-class-is-a-two-sided-banach-operator-ideal]]).

[F6] The operator norm is $\|B\|=\sup_{\|x\|\le1}\|Bx\|$ for bounded $B$; an operator is non-negative when $\langle Tx,x\rangle\ge0$ for all $x$ ([[def-operator-norm]], [[def-bounded-linear-operator]], [[def-non-negative-and-positive-operator]]).

## Proof

1.1 [Boundedness, norm and linearity] $T_{u,v}$ is linear and $\|T_{u,v}x\|=|\langle x,v\rangle|\,\|u\|\le\|x\|\,\|v\|\,\|u\|$ by [F4], so $\|T_{u,v}\|\le\|u\|\,\|v\|$ [F6]; if $u\ne0$ and $v\ne0$, taking $x=v/\|v\|$ gives $T_{u,v}x=\|v\|u$ and hence $\|T_{u,v}\|\ge\|u\|\,\|v\|$, while for $u=0$ or $v=0$ the operator vanishes and both sides are $0$. Linearity in $u$ and conjugate-linearity in $v$ are immediate from the definition and the pairing conventions [F4]. [given, F4, F6, algebra]

2.1 [Trace class and trace norm] The range of $T_{u,v}$ is contained in $\mathbb Cu$, so $T_{u,v}$ has rank at most one, is finite rank, compact [F1]; its one-term nuclear representation is $T_{u,v}=\sum_jT_{v_j,u_j}$ with $v_1=u$, $u_1=v$ and the remaining terms zero, so $\sum_j\|u_j\|\,\|v_j\|=\|v\|\,\|u\|$ and [F2] first establishes trace class and gives $\|T_{u,v}\|_1\le\|u\|\,\|v\|$, while $\|T_{u,v}\|_1\ge\|T_{u,v}\|=\|u\|\,\|v\|$ by [F5] and step 1.1. Hence $\|T_{u,v}\|_1=\|u\|\,\|v\|$. [step 1.1, F1, F2, F5, algebra]

3.1 [The trace] Applying [F3] to the one-term nuclear representation of step 2.1 gives $\operatorname{tr}(T_{u,v})=\sum_j\langle v_j,u_j\rangle=\langle u,v\rangle$. In particular $\operatorname{tr}(T_{x,x})=\langle x,x\rangle=\|x\|^2$ and, with step 2.1, $\|T_{x,x}\|_1=\|x\|^2$. [step 2.1, F3, algebra]

3.2 [Adjoint, positivity and one-sided products] For all $x,y$, $\langle T_{u,v}x,y\rangle=\langle x,v\rangle\langle u,y\rangle=\langle x,\langle y,u\rangle v\rangle$ by [F4], so $T_{u,v}^*=T_{v,u}$; also $\langle T_{x,x}y,y\rangle=|\langle y,x\rangle|^2\ge0$, so $T_{x,x}\ge0$ by [F6]. For bounded $B$: $(BT_{u,v})x=B(\langle x,v\rangle u)=\langle x,v\rangle Bu=T_{Bu,v}x$ and $(T_{u,v}B)x=\langle Bx,v\rangle u=\langle x,B^*v\rangle u=T_{u,B^*v}x$, using the defining property of the adjoint [F4]. [step 1.1, step 2.1, F4, F6, algebra]

3.3 [Trace-norm continuity] By the bilinearity of step 1.1, $T_{u,v}-T_{u',v'}=T_{u-u',v}+T_{u',v-v'}$; by [F5] and the estimates of steps 1.1 and 2.1, $\|T_{u,v}-T_{u',v'}\|_1\le\|u-u'\|\,\|v\|+\|u'\|\,\|v-v'\|$, which tends to $0$ whenever $(u',v')\to(u,v)$ in $H\times H$; hence $(u,v)\mapsto T_{u,v}$ is continuous into $\mathcal S_1(H)$, and fixing one slot gives the stated continuity. This is (f). [step 1.1, step 2.1, F5, algebra]

4.1 [Products with trace-class operators] If $S$ is trace class then $(ST_{u,v})x=\langle x,v\rangle Su=T_{Su,v}x$ and $(T_{u,v}S)x=\langle Sx,v\rangle u=\langle x,S^*v\rangle u=T_{u,S^*v}x$, so $ST_{u,v}=T_{Su,v}$ and $T_{u,v}S=T_{u,S^*v}$ [F4]; applying step 3.1 to the rank-one operators $T_{Su,v}$ and $T_{u,S^*v}$ gives $\operatorname{tr}(ST_{x,y})=\langle Sx,y\rangle$ and $\operatorname{tr}(T_{x,y}S)=\langle x,S^*y\rangle=\langle Sx,y\rangle$. This is (e); (a)-(d) are steps 1.1, 2.1, 3.1 and 3.2, and the scope remark records that nothing beyond the rank-one calculus is asserted. [step 3.1, step 3.2, F3, F4, algebra] ∎
