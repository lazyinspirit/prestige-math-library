---
id: cor-cm-flow-domain-open-and-flow-is-c1
kind: corollary
title: "The flow domain of a C¹ autonomous field is open and the flow is C¹ on it"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 2
deps: [thm-cm-smooth-dependence-and-the-variational-equation, def-cm-local-flow-of-an-autonomous-system, lem-cm-local-flow-composition-law, thm-cm-compact-continuation-for-locally-lipschitz-odes, lem-relative-compact-closed-sets-have-a-positive-distance-gap, thm-continuous-image-of-a-compact-space-is-compact, thm-extreme-value-metric, thm-heine-borel-rn, thm-compact-subset-is-closed-and-bounded, def-metric-ball, def-metric-topology, thm-chain-rule-for-total-derivatives, thm-continuous-partial-derivatives-imply-total-differentiability, def-ck-euclidean-maps-and-diffeomorphisms]
dependency_roles:
  thm-cm-smooth-dependence-and-the-variational-equation: mathematical-premise
  def-cm-local-flow-of-an-autonomous-system: mathematical-premise
  lem-cm-local-flow-composition-law: mathematical-premise
  thm-cm-compact-continuation-for-locally-lipschitz-odes: mathematical-premise
  lem-relative-compact-closed-sets-have-a-positive-distance-gap: mathematical-premise
  thm-continuous-image-of-a-compact-space-is-compact: mathematical-premise
  thm-extreme-value-metric: mathematical-premise
  thm-heine-borel-rn: mathematical-premise
  thm-compact-subset-is-closed-and-bounded: mathematical-premise
  def-metric-ball: mathematical-premise
  def-metric-topology: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  thm-continuous-partial-derivatives-imply-total-differentiability: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "G. Teschl, Ordinary Differential Equations and Dynamical Systems (AMS Graduate Studies in Mathematics 140, online edition), Section 2.4 (Theorem 2.10: the solution map is C^k in the initial condition) and Section 6.1 (the flow domain), printed pages 45-48 and 190-192"
      url: "https://schecter.math.ncsu.edu/ma_732_sp13/teschl_ode.pdf"
    - title: "J. Arino, MATH 8430 Fundamental Theory of Ordinary Differential Equations (University of Manitoba), Section 1.4 and Section 2.3 (dependence on initial data and differentiability), printed pages 32-40 and 76-82"
      url: "https://julien-arino.github.io/assets/pdf/courses/math8430_lecture_notes.pdf"
verification:
  precheck: pass
---

## Statement

Let $n\ge1$, let $U\subseteq\mathbb R^n$ be open, let $F:U\to\mathbb R^n$ be of class $C^1$ ([[def-ck-euclidean-maps-and-diffeomorphisms]]), and let $\Phi:\Omega\to U$ be the local flow of $x'=F(x)$ with maximal solutions $x(\,\cdot\,;a):I_a\to U$ ([[def-cm-local-flow-of-an-autonomous-system]]). Then $\Omega$ is open in $\mathbb R\times U$ ([[def-metric-topology]]), and $\Phi$ is of class $C^1$ on $\Omega$, with

$$\partial_t\Phi(t,a)=F\bigl(\Phi(t,a)\bigr)\qquad((t,a)\in\Omega).$$

## Facts & Assumptions

**Given:** The open set $U$, the $C^1$ field $F$ and its local flow $\Phi$.

[F1] Smooth dependence on the initial condition: if $a_0\in U$, $T>0$, $R>0$ with $\overline B(a_0,R)\subseteq U$, $M=\sup_{\overline B(a_0,R)}\|F\|_2$, $L=\sup_{\overline B(a_0,R)}\|DF\|$ and $0<\rho<R-MT$, then every $a\in\overline B(a_0,\rho)$ has its maximal solution defined on $[0,T]$ with values in $\overline B(a_0,\rho+MT)\subseteq B(a_0,R)$, the estimate $\|x(t;a)-x(t;b)\|_2\le e^{Lt}\|a-b\|_2$ holds for $t\in[0,T]$, and $(t,a)\mapsto x(t,a)$ is $C^1$ on $[0,T]\times B(a_0,\rho)$ with $\partial_tx=F(x)$ and $D_ax(t;a)=Y_a(t)$ ([[thm-cm-smooth-dependence-and-the-variational-equation]]).

[F2] Composition law: $\Phi(0,a)=a$, and $\Phi(s+t,a)=\Phi(t,\Phi(s,a))$ whenever both sides are defined ([[lem-cm-local-flow-composition-law]]); every solution of $x'=F(x)$ through an initial point is a restriction of the corresponding maximal solution ([[def-cm-local-flow-of-an-autonomous-system]]).

[F3] Positive distance gap: if $K\subseteq\mathbb R^n$ is nonempty compact, $C\subseteq\mathbb R^n$ nonempty closed and $K\cap C=\emptyset$, there is $\delta>0$ with $\|k-c\|_2\ge\delta$ for all $k\in K$, $c\in C$ ([[lem-relative-compact-closed-sets-have-a-positive-distance-gap]]).

[F4] Continuous images of compact sets are compact ([[thm-continuous-image-of-a-compact-space-is-compact]]); a continuous function on a nonempty compact set attains finite extrema ([[thm-extreme-value-metric]]); closed bounded subsets of $\mathbb R^n$ are compact and compact subsets are closed and bounded ([[thm-heine-borel-rn]], [[thm-compact-subset-is-closed-and-bounded]]).

[F5] Chain rule and $C^1$ calculus: the composite of totally differentiable maps is totally differentiable with $D(g\circ f)(x)=Dg(f(x))\circ Df(x)$; a map with continuous partial derivatives is totally differentiable; and a map that is totally differentiable everywhere with continuous total derivative is $C^1$ ([[thm-chain-rule-for-total-derivatives]], [[thm-continuous-partial-derivatives-imply-total-differentiability]], [[def-ck-euclidean-maps-and-diffeomorphisms]], [[def-metric-ball]]).

## Proof

**Proof technique:** direct; cover the reference trajectory by finitely many Picard-Lindelöf steps with radially shrinking balls and invoke the smooth dependence theorem on each step.

1.1 Let $(t_0,a_0)\in\Omega$ with $t_0>0$, and let $x:=x(\,\cdot\,;a_0)$ on $[0,t_0]$. The image $K:=x([0,t_0])$ is compact and lies in $U$, so [F3] applied to $K$ and the closed set $\mathbb R^n\setminus U$ gives $\delta>0$ with $\overline B(y,\delta)\subseteq U$ for every $y\in K$. Choose an integer $N\ge1$ and set $h:=t_0/N$, $x_j:=x(jh)$ for $0\le j\le N$; then $x_j\in K$. For each $j$ put $M_j:=\sup_{\overline B(x_j,\delta)}\|F\|_2$ and $L_j:=\sup_{\overline B(x_j,\delta)}\|DF\|$, finite by [F4]; let $M:=\max_jM_j$ and $L:=\max_jL_j$ over the finitely many $j$, and choose $N$ large enough that $$hM\le\delta/4,\qquad hL\le1/2 .$$ Set $\rho:=\delta/4$. [given, F3, F4, algebra]

2.1 Small-step claim: for every $j$ and every $y\in\overline B(x_j,\rho)$, the maximal solution through $y$ is defined on $[0,h]$ with values in $\overline B(x_j,\delta)\subseteq U$, and $\Phi$ is $C^1$ on $[0,h]\times B(x_j,\rho)$ with $\|\Phi(t,y)-\Phi(t,x_j)\|_2\le e^{Lt}\|y-x_j\|_2$. Indeed $\rho+M_jh\le\delta/4+\delta/4<\delta$, so [F1] applies to $a_0:=x_j$, $T:=h$, $R:=\delta$ and the radius $\rho$: the bound on $[0,h]$ is $M_j\le M$, and the stated estimates are clauses 1 and 3 of [F1]. [step 1.1, F1, algebra]

3.1 Put $\rho_0:=\rho e^{-Lt_0}$ and, for $0\le j\le N$, $\rho_j:=\rho e^{-L(t_0-jh)}$, so that $\rho_N=\rho$, $\rho_j<\rho$ for $j<N$, and $\rho_{j+1}=e^{Lh}\rho_j$. I claim, by induction on $j$, that $\Phi(jh,\,\cdot\,)$ is $C^1$ on $W:=B(a_0,\rho_0)$ and $\Phi(jh,W)\subseteq B(x_j,\rho_j)$. For $j=0$ this says $\Phi(0,a)=a\in B(a_0,\rho_0)$ and is [F2]. If it holds for $j$, then for $a\in W$ the point $y:=\Phi(jh,a)$ lies in $B(x_j,\rho_j)\subseteq B(x_j,\rho)$, so the small-step claim of step 2.1 gives that $\Phi(h,y)$ is defined and $\Phi((j+1)h,a)=\Phi(h,\Phi(jh,a))$; moreover $\|\Phi(h,y)-x_{j+1}\|_2=\|\Phi(h,y)-\Phi(h,x_j)\|_2\le e^{Lh}\|y-x_j\|_2<e^{Lh}\rho_j=\rho_{j+1}$, so $\Phi((j+1)h,W)\subseteq B(x_{j+1},\rho_{j+1})$, and $\Phi((j+1)h,\,\cdot\,)$ is a composite of $C^1$ maps on the relevant open sets by [F5]. This proves the claim; in particular $\Phi(t_0,\,\cdot\,)$ is $C^1$ on $W$. [step 2.1, F2, F5, algebra]

4.1 $\Phi$ is $C^1$ on a neighbourhood of $(t_0,a_0)$ in $\mathbb R\times U$. Since $I_{a_0}$ is open there is $t_1\in I_{a_0}$ with $t_1>t_0$; applying steps 1.1-3.1 with $t_1$ in place of $t_0$ (and possibly a different $N$, $h$, $\rho$) produces a ball $W_1=B(a_0,\rho_{0,1})$ and the $C^1$ map $\Phi(t_1,\cdot)$ on it. For $a\in W_1$ and $t\le t_1$ the solution $\Phi(t,a)$ exists by step 3.1 applied to $t_1$, and for $t$ in one finite step of the subdivision, $t=jh+s$ with $0\le s\le h$, the composition law [F2] gives $\Phi(t,a)=\Phi(s,\Phi(jh,a))$; here $\Phi(jh,\cdot)$ is $C^1$ on $W_1$ into $B(x_j,\rho_j)$, and $(s,y)\mapsto\Phi(s,y)$ is $C^1$ near every such pair by step 2.1, so [F5] makes $(t,a)\mapsto\Phi(t,a)$ $C^1$ on a neighbourhood of $(t_0,a_0)$ contained in $[0,t_1]\times W_1$. At a subdivision time $t=jh$ the two adjacent representations agree on their overlap, and on each piece the partial derivatives are the continuous functions $(t,a)\mapsto F(\Phi(t,a))$ and $(t,a)\mapsto Y_a(t)$ supplied by [F1] (clauses 1 and 3, the latter for the variational solution on the relevant small interval); hence the derivative is continuous at the seam as well. [step 2.1, 3.1, F2, F5, algebra]

5.1 The point $(t_0,a_0)$ is an interior point of $\Omega$ and a $C^1$ point of $\Phi$: steps 1.1-4.1 exhibit a product neighbourhood $J\times W_1$ with $J$ an interval around $t_0$ contained in $[0,t_1]$ such that $\Phi$ is defined and $C^1$ on $J\times W_1$. Finally, for $t_0=0$ the same argument applies with any small positive $t_1\in I_{a_0}$ and step 2.1 at $j=0$ gives $C^1$-ness on $[0,h]\times W$ directly; for $t_0<0$ apply the argument to the $C^1$ field $-F$, whose maximal solutions are $t\mapsto x(-t;a)$ by uniqueness [F2], and read the conclusion back for $\Phi$. In every case $\partial_t\Phi(t,a)=F(\Phi(t,a))$ because $t\mapsto\Phi(t,a)$ solves the autonomous equation on its open domain. This proves the statement. [step 1.1, 2.1, 3.1, 4.1, F1, F2, F5] ∎

## Remarks

- The proof uses only finitely many Picard-Lindelöf steps, so no countable or dependent choice is invoked; the positive gap of [F3] is the published choice-free separation statement. The corollary is the tool that lets the Poincaré return map of [[prop-cm-first-return-map-is-a-local-c1-diffeomorphism]] be built from the implicit function theorem without extra hypotheses on the flow.

- The conclusion is local in nature: $\Omega$ is open but need not be all of $\mathbb R\times U$, and the corollary does not assert completeness of $F$, boundedness of $\Phi$, or any uniformity of the $C^1$ estimate over all of $\Omega$.
