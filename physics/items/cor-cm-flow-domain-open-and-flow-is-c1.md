---
id: cor-cm-flow-domain-open-and-flow-is-c1
kind: corollary
title: "The flow domain of a C¹ autonomous field is open and the flow is C¹ on it"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 2
deps: [thm-cm-smooth-dependence-and-the-variational-equation, def-cm-local-flow-of-an-autonomous-system, lem-cm-local-flow-composition-law, thm-cm-compact-continuation-for-locally-lipschitz-odes, lem-relative-compact-closed-sets-have-a-positive-distance-gap, thm-continuous-image-of-a-compact-space-is-compact, thm-extreme-value-metric, thm-heine-borel-rn, thm-compact-subset-is-closed-and-bounded, def-metric-ball, def-metric-topology, def-euclidean-inner-product, thm-cauchy-schwarz-and-the-euclidean-norm, thm-chain-rule-for-total-derivatives, thm-continuous-partial-derivatives-imply-total-differentiability, def-ck-euclidean-maps-and-diffeomorphisms]
dependency_roles:
  def-euclidean-inner-product: mathematical-premise
  thm-cauchy-schwarz-and-the-euclidean-norm: mathematical-premise
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

[F1] Throughout this proof, vector norms are Euclidean and matrix norms are the subordinate Euclidean operator norms defined, bounded and shown continuous in Facts [F10] of [[thm-cm-smooth-dependence-and-the-variational-equation]]; in particular $\|DF\|$ below means $\|DF\|_{\mathrm{op}}$. Smooth dependence on the initial condition: if $a_0\in U$, $T>0$, $R>0$ with $\overline B(a_0,R)\subseteq U$, $M=\sup_{\overline B(a_0,R)}\|F\|_2$, $L=\sup_{\overline B(a_0,R)}\|DF\|$ and $0<\rho<R-MT$, then every $a\in\overline B(a_0,\rho)$ has its maximal solution defined on $[0,T]$ with values in $\overline B(a_0,\rho+MT)\subseteq B(a_0,R)$, the estimate $\|x(t;a)-x(t;b)\|_2\le e^{Lt}\|a-b\|_2$ holds for $t\in[0,T]$, and $(t,a)\mapsto x(t,a)$ is $C^1$ on $[0,T]\times B(a_0,\rho)$ with $\partial_tx=F(x)$ and $D_ax(t;a)=Y_a(t)$ ([[thm-cm-smooth-dependence-and-the-variational-equation]]).

[F2] Composition law: $\Phi(0,a)=a$, and $\Phi(s+t,a)=\Phi(t,\Phi(s,a))$ whenever both sides are defined ([[lem-cm-local-flow-composition-law]]); every solution of $x'=F(x)$ through an initial point is a restriction of the corresponding maximal solution ([[def-cm-local-flow-of-an-autonomous-system]]).

[F3] Positive distance gap: if $K\subseteq\mathbb R^n$ is nonempty compact, $C\subseteq\mathbb R^n$ nonempty closed and $K\cap C=\emptyset$, there is $\delta>0$ with $\|k-c\|_2\ge\delta$ for all $k\in K$, $c\in C$ ([[lem-relative-compact-closed-sets-have-a-positive-distance-gap]]).

[F4] Continuous images of compact sets are compact ([[thm-continuous-image-of-a-compact-space-is-compact]]); a continuous function on a nonempty compact set attains finite extrema ([[thm-extreme-value-metric]]); closed bounded subsets of $\mathbb R^n$ are compact and compact subsets are closed and bounded ([[thm-heine-borel-rn]], [[thm-compact-subset-is-closed-and-bounded]]).

[F5] Chain rule and $C^1$ calculus: the composite of totally differentiable maps is totally differentiable with $D(g\circ f)(x)=Dg(f(x))\circ Df(x)$; a map with continuous partial derivatives is totally differentiable; and a map that is totally differentiable everywhere with continuous total derivative is $C^1$ ([[thm-chain-rule-for-total-derivatives]], [[thm-continuous-partial-derivatives-imply-total-differentiability]], [[def-ck-euclidean-maps-and-diffeomorphisms]], [[def-metric-ball]]).

## Proof

**Proof technique:** direct; cover the reference trajectory by finitely many Picard-Lindelöf steps with radially shrinking balls and invoke the smooth dependence theorem on each step.

1.1 Let $(t_0,a_0)\in\Omega$ with $t_0>0$, and let $x:=x(\,\cdot\,;a_0)$ on $[0,t_0]$. Its image $K:=x([0,t_0])$ is nonempty compact and lies in $U$. If $\mathbb R^n\setminus U$ is nonempty, [F3] gives a separation $d>0$; choose $0<\delta<d$, so every closed $\delta$-ball centred in $K$ lies in $U$. If $U=\mathbb R^n$, choose any $\delta>0$. Define $d_K(z):=\min_{k\in K}\|z-k\|_2$: for each fixed $z$, the reverse triangle inequality makes $k\mapsto\|z-k\|_2$ continuous, so the minimum is attained by [F4]. If $k_w$ attains the minimum for $w$, then $d_K(z)\le\|z-k_w\|_2\le\|z-w\|_2+d_K(w)$; interchanging $z,w$ gives $|d_K(z)-d_K(w)|\le\|z-w\|_2$. Thus the fixed tube $H:=\{z:d_K(z)\le\delta\}$ is closed. Since compact $K$ is bounded, there is $B\ge0$ with $\|k\|_2\le B$ for $k\in K$; a minimizing $k$ for $z\in H$ gives $\|z\|_2\le B+\delta$, so $H$ is bounded and hence compact by [F4]. It lies in $U$: if the complement of $U$ is nonempty, every point in it has $d_K(z)\ge d>\delta$ by [F3]; when $U=\mathbb R^n$ inclusion is automatic. The vector norm inequalities used here are those of [[def-euclidean-inner-product]] and [[thm-cauchy-schwarz-and-the-euclidean-norm]]. Put $M:=\sup_H\|F\|_2$ and $L:=\sup_H\|DF\|$, finite by [F4] and the norm continuity in [F1], before choosing any subdivision. Choose $N\ge1$ with $h:=t_0/N$ satisfying $hM\le\delta/4$ and $hL\le1/2$, and set $x_j:=x(jh)$ for $0\le j\le N$. Every $\overline B(x_j,\delta)$ lies in $H$; thus its bounds $M_j,L_j$ satisfy $M_j\le M$, $L_j\le L$. Set $\rho:=\delta/4$. [given, F1, F3, F4, choose, algebra]

2.1 Small-step claim: for every $j$ and every $y\in\overline B(x_j,\rho)$, the maximal solution through $y$ is defined on $[0,h]$ with values in $\overline B(x_j,\delta)\subseteq U$, and $\Phi$ is $C^1$ on $[0,h]\times B(x_j,\rho)$ with $\|\Phi(t,y)-\Phi(t,x_j)\|_2\le e^{Lt}\|y-x_j\|_2$. Indeed $\rho+M_jh\le\delta/4+\delta/4<\delta$, so [F1] applies to $a_0:=x_j$, $T:=h$, $R:=\delta$ and the radius $\rho$: the bound on $[0,h]$ is $M_j\le M$, and the stated estimates are clauses 1 and 3 of [F1]. [step 1.1, F1, algebra]

3.1 Put $\rho_0:=\rho e^{-Lt_0}$ and, for $0\le j\le N$, $\rho_j:=\rho e^{-L(t_0-jh)}$, so that $\rho_N=\rho$, $\rho_j\le\rho$ for $j<N$, and $\rho_{j+1}=e^{Lh}\rho_j$. I claim, by induction on $j$, that $\Phi(jh,\,\cdot\,)$ is $C^1$ on $W:=B(a_0,\rho_0)$ and $\Phi(jh,W)\subseteq B(x_j,\rho_j)$. For $j=0$ this says $\Phi(0,a)=a\in B(a_0,\rho_0)$ and is [F2]. If it holds for $j$, then for $a\in W$ the point $y:=\Phi(jh,a)$ lies in $B(x_j,\rho_j)\subseteq B(x_j,\rho)$, so the small-step claim of step 2.1 gives that $\Phi(h,y)$ is defined and $\Phi((j+1)h,a)=\Phi(h,\Phi(jh,a))$; moreover $\|\Phi(h,y)-x_{j+1}\|_2=\|\Phi(h,y)-\Phi(h,x_j)\|_2\le e^{Lh}\|y-x_j\|_2<e^{Lh}\rho_j=\rho_{j+1}$, so $\Phi((j+1)h,W)\subseteq B(x_{j+1},\rho_{j+1})$, and $\Phi((j+1)h,\,\cdot\,)$ is a composite of $C^1$ maps on the relevant open sets by [F5]. This proves the claim; in particular $\Phi(t_0,\,\cdot\,)$ is $C^1$ on $W$. [step 2.1, F2, F5, algebra]

4.1 The endpoint regularity in [F1] means regularity of a local extension to an open time neighbourhood, as its proof establishes. For $(t_0,a_0)$ choose the last step, writing $t_0=(N-1)h+h$. By step 3.1, $g(a):=\Phi((N-1)h,a)$ is $C^1$ on $W$ and $g(a_0)=x_{N-1}$. By step 2.1 and [F1], the small-step flow is defined and $C^1$ on an open neighbourhood $V$ of $(h,x_{N-1})$. Continuity of $(t,a)\mapsto(t-(N-1)h,g(a))$ gives a product neighbourhood $J\times W'$ of $(t_0,a_0)$, with $W'\subseteq W$, whose image lies in $V$. On it [F2] gives $\Phi(t,a)=\Phi(t-(N-1)h,g(a))$, so the flow is defined and $C^1$ by [F5]. This proves openness and regularity near every positive-time point without requiring any seam assertion. [step 2.1, 3.1, F1, F2, F5]

5.1 For a point $(0,a_0)$ choose $R>0$ with $\overline B(a_0,R)\subseteq U$, put $M:=\sup_{\overline B(a_0,R)}\|F\|_2$, and choose $\rho=R/2$ and $h>0$ with $Mh<R/2$. Apply [F1] to both $F$ and $-F$ on $[0,h]\times B(a_0,\rho)$. Time reversal and uniqueness [F2] identify the second flow with $\Phi(-s,a)$, so $(-h,h)\times B(a_0,\rho)\subseteq\Omega$. The state derivatives are continuous on both sides and equal $I_n$ at $0$, while the time derivative on the whole interval is $F(\Phi(t,a))$ by the maximal-solution equation. The two continuous pieces agree at $0$, so [F5] gives $C^1$ regularity on this open product. For $t_0<0$, apply steps 1.1-4.1 to $-F$ at $(-t_0,a_0)$ and reverse time; uniqueness identifies its maximal interval with $-I_a$ (a proper extension would reverse to an extension of the original maximal solution). Thus every point of $\Omega$ has an open neighbourhood on which $\Phi$ is defined and $C^1$. On all these neighbourhoods $\partial_t\Phi(t,a)=F(\Phi(t,a))$, proving the statement. [step 1.1, 2.1, 3.1, 4.1, F1, F2, F5, choose] ∎

## Remarks

- The proof uses only finitely many Picard-Lindelöf steps, so no countable or dependent choice is invoked; the positive gap of [F3] is the published choice-free separation statement. The corollary is the tool that lets the Poincaré return map of [[prop-cm-first-return-map-is-a-local-c1-diffeomorphism]] be built from the implicit function theorem without extra hypotheses on the flow.

- The conclusion is local in nature: $\Omega$ is open but need not be all of $\mathbb R\times U$, and the corollary does not assert completeness of $F$, boundedness of $\Phi$, or any uniformity of the $C^1$ estimate over all of $\Omega$.
