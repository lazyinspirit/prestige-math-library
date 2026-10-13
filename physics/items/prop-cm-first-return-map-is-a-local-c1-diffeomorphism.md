---
id: prop-cm-first-return-map-is-a-local-c1-diffeomorphism
kind: proposition
title: "A transversal return of a C¹ flow yields a local C¹ Poincaré map, with inverse given by the reversed crossing"
status: published
origin: pipeline
domain: mathematics
dependency_level: 3
deps: [cor-cm-flow-domain-open-and-flow-is-c1, def-cm-local-flow-of-an-autonomous-system, lem-cm-local-flow-composition-law, thm-euclidean-implicit-function-theorem, def-subspace-topology-top, def-ck-euclidean-maps-and-diffeomorphisms, def-total-derivative-in-euclidean-space, thm-chain-rule-for-total-derivatives, def-jacobian-matrix-and-gradient, def-interior-closure-boundary-top, thm-heine-borel-rn, thm-continuous-image-of-a-compact-space-is-compact, cor-mean-value-theorem]
dependency_roles:
  cor-cm-flow-domain-open-and-flow-is-c1: mathematical-premise
  def-cm-local-flow-of-an-autonomous-system: mathematical-premise
  lem-cm-local-flow-composition-law: mathematical-premise
  thm-euclidean-implicit-function-theorem: mathematical-premise
  def-subspace-topology-top: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-total-derivative-in-euclidean-space: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  def-jacobian-matrix-and-gradient: mathematical-premise
  def-interior-closure-boundary-top: mathematical-premise
  thm-heine-borel-rn: mathematical-premise
  thm-continuous-image-of-a-compact-space-is-compact: mathematical-premise
  cor-mean-value-theorem: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "G. Teschl, Ordinary Differential Equations and Dynamical Systems (AMS Graduate Studies in Mathematics 140, online edition), Section 6.4, Lemma 6.9 and the Poincare map (6.25), printed pages 197-198"
      url: "https://schecter.math.ncsu.edu/ma_732_sp13/teschl_ode.pdf"
    - title: "J. Arino, MATH 8430 Fundamental Theory of Ordinary Differential Equations (University of Manitoba), Section 1.4 and Chapter 2 (flow differentiability and section maps), printed pages 32-40 and 76-90"
      url: "https://julien-arino.github.io/assets/pdf/courses/math8430_lecture_notes.pdf"
verification:
  precheck: pass
---

## Statement

Let $n\ge1$, let $U\subseteq\mathbb R^n$ be open, let $F:U\to\mathbb R^n$ be of class $C^1$ ([[def-ck-euclidean-maps-and-diffeomorphisms]]), and let $\Phi:\Omega\to U$ be the local flow of $x'=F(x)$ ([[def-cm-local-flow-of-an-autonomous-system]]). Let $x_0\in U$ and $t_0>0$ satisfy $(t_0,x_0)\in\Omega$, and put $x_1:=\Phi(t_0,x_0)$. Let $W\subseteq\mathbb R^n$ be open with $x_0,x_1\in W$, and let $h:W\to\mathbb R$ be $C^1$ with

$$h(x_0)=h(x_1)=0,\qquad Dh(x_0)F(x_0)\ne0,\qquad Dh(x_1)F(x_1)\ne0 ;$$

thus the reference orbit meets the level set $\Sigma:=h^{-1}(0)\cap W$ transversally at $x_0$ (time $0$) and again at $x_1$ (time $t_0$). Then there are open sets $A\subseteq W$ with $x_0\in A$ and $B\subseteq W$ with $x_1\in B$, and $C^1$ functions

$$\tau:A\to\mathbb R,\qquad \sigma:B\to\mathbb R,\qquad \tau(x_0)=\sigma(x_1)=t_0,$$

such that:

1. $h\bigl(\Phi(\tau(x),x)\bigr)=0$ for every $x\in A$, and there is an open interval $J\ni t_0$ with $A\subseteq W$ such that

$$h\bigl(\Phi(t,x)\bigr)=0,\ (t,x)\in J\times A\quad\Longleftrightarrow\quad t=\tau(x);$$

2. $h\bigl(\Phi(-\sigma(y),y)\bigr)=0$ for every $y\in B$, and the map

$$P:A\longrightarrow\Sigma,\qquad P(x):=\Phi\bigl(\tau(x),x\bigr),$$

is $C^1$ with $P(A\cap\Sigma)\subseteq B$, while

$$Q:B\longrightarrow\Sigma,\qquad Q(y):=\Phi\bigl(-\sigma(y),y\bigr),$$

is $C^1$ with $Q(B\cap\Sigma)\subseteq A$, $Q(P(x))=x$ for all $x\in A\cap\Sigma$, and $P(Q(y))=y$ for all $y\in B\cap\Sigma\cap Q^{-1}(A)$;

3. $P(A\cap\Sigma)=B\cap\Sigma\cap Q^{-1}(A)$ is open in the relative topology of $\Sigma$ ([[def-subspace-topology-top]]), and $P:A\cap\Sigma\to P(A\cap\Sigma)$ is a $C^1$ diffeomorphism with inverse $Q|_{P(A\cap\Sigma)}$. The map $P$ is the **local Poincaré return map** associated with the crossing at $t_0$. Here the portions of $\Sigma$ in $A$ and $B$ have the embedded $C^1$ section charts supplied below; no regularity of $\Sigma$ away from these neighbourhoods is required.

4. If, in addition, $\Phi(s,x_0)\notin\overline\Sigma^{\,U}$ for every $0<s<t_0$, where the bar denotes closure in $U$ ([[def-interior-closure-boundary-top]]), then $A,B$ can be chosen so that $\tau(x)>0$ and $\Phi(s,x)\notin\Sigma$ for $x\in A\cap\Sigma$ and $0<s<\tau(x)$. In this case $P$ is the **local first-return map** to $\Sigma$: $\tau(x)$ is its least positive hitting time. This explicit exclusion condition supplies persistence even when $\Sigma$ is not closed in $U$.

## Facts & Assumptions

**Given:** The open set $U$, the $C^1$ field $F$, its local flow $\Phi$, the reference data $(t_0,x_0)$ with $x_1=\Phi(t_0,x_0)$, and the transversal function $h$ with the displayed properties.

[F1] $\Omega$ is open in $\mathbb R\times U$ and $\Phi:\Omega\to U$ is $C^1$, with $\partial_t\Phi(t,a)=F(\Phi(t,a))$ ([[cor-cm-flow-domain-open-and-flow-is-c1]]).

[F2] Composition law and inverse time: $\Phi(0,a)=a$; if $(s,a)\in\Omega$ and $(t,\Phi(s,a))\in\Omega$ then $(s+t,a)\in\Omega$ and $\Phi(s+t,a)=\Phi(t,\Phi(s,a))$; and $(t,a)\in\Omega$ implies $(-t,\Phi(t,a))\in\Omega$ with $\Phi(-t,\Phi(t,a))=a$ ([[lem-cm-local-flow-composition-law]]).

[F3] Implicit function theorem: if $G$ is $C^1$ on an open set, $G(t_0,x_0)=0$ and the partial derivative in the scalar variable at $(t_0,x_0)$ is nonzero, then near $(t_0,x_0)$ the zero set of $G$ is the graph of a unique $C^1$ function of the remaining variables, with the stated uniqueness for all points of a product neighbourhood ([[thm-euclidean-implicit-function-theorem]]).

[F4] The chain rule gives $\partial_t\bigl(h(\Phi(t,x))\bigr)=Dh(\Phi(t,x))\bigl(\partial_t\Phi(t,x)\bigr)=Dh(\Phi(t,x))F(\Phi(t,x))$; compositions of $C^1$ maps are $C^1$; differentiability conventions are those of total derivatives and Jacobians ([[thm-chain-rule-for-total-derivatives]], [[def-jacobian-matrix-and-gradient]], [[def-total-derivative-in-euclidean-space]], [[def-ck-euclidean-maps-and-diffeomorphisms]]).

[F5] Closed bounded real intervals are compact ([[thm-heine-borel-rn]]); continuous images of compact sets are compact, and open covers of compact sets have finite subcovers ([[thm-continuous-image-of-a-compact-space-is-compact]]). A differentiable real function whose derivative has a fixed nonzero sign on an interval is strictly monotone by [[cor-mean-value-theorem]]. Closure is the smallest closed superset in the indicated subspace ([[def-interior-closure-boundary-top]]).

## Proof

**Proof technique:** direct; apply the implicit function theorem to the scalar function $(t,x)\mapsto h(\Phi(t,x))$ at both crossings of the section.

1.1 By [F1] there are an open interval $J_0\ni t_0$ and an open set $A_0\subseteq W$ with $x_0\in A_0$ with $J_0\times A_0\subseteq\Omega$ and $\Phi(J_0\times A_0)\subseteq W$ (shrink $A_0$ if necessary, using that $\Phi(t_0,x_0)=x_1\in W$ and continuity of $\Phi$). Define $G:J_0\times A_0\to\mathbb R$, $G(t,x):=h(\Phi(t,x))$; it is $C^1$ by [F1] and [F4], and $$G(t_0,x_0)=h(x_1)=0,\qquad \partial_tG(t_0,x_0)=Dh(x_1)F(x_1)\ne0 .$$ [given, F1, F4, algebra]

2.1 Apply [F3] to $G$ at $(t_0,x_0)$: there are open $J_1\subseteq J_0$ containing $t_0$, open $A_1\subseteq A_0$ containing $x_0$ and a unique $C^1$ function $\tau:A_1\to J_1$ with $\tau(x_0)=t_0$ such that for $(t,x)\in J_1\times A_1$ $$h\bigl(\Phi(t,x)\bigr)=0\quad\Longleftrightarrow\quad t=\tau(x).$$ In particular $h(\Phi(\tau(x),x))=0$ for $x\in A_1$, which is the first part of clause 1. [step 1.1, F1, F3]

2.2 Reverse-time construction. The field $-F$ is $C^1$ on $U$, and $\Psi(t,y):=\Phi(-t,y)$ is its local flow on the reflected domain, because $s\mapsto\Phi(-s,y)$ solves $y'=-F(y)$ and every solution is a restriction of the corresponding maximal solution [F2]. Apply steps 1.1-2.1 to $-F$ at the initial point $x_1$ and time $t_0$: the reversed reference solution satisfies $\Psi(t_0,x_1)=\Phi(-t_0,x_1)=x_0$ by [F2], and its crossing derivative is $\partial_t\bigl(h(\Psi(t,y))\bigr)\big|_{(t_0,x_1)}=Dh(x_0)(-F(x_0))\ne0$. Hence there are an open interval $J_2\ni t_0$, an open set $B_0\subseteq W$ with $x_1\in B_0$ and a $C^1$ function $\sigma:B_0\to J_2$ with $\sigma(x_1)=t_0$ such that $$h\bigl(\Phi(-t,y)\bigr)=0,\ (t,y)\in J_2\times B_0\quad\Longleftrightarrow\quad t=\sigma(y).$$ Define $Q:B_0\to\Sigma$, $Q(y):=\Phi(-\sigma(y),y)$; then $Q$ is $C^1$ (composition of the $C^1$ map $(t,y)\mapsto\Phi(t,y)$ with $y\mapsto(-\sigma(y),y)$, whose values lie in $\Omega$ because $\sigma(y)\in J_2$) and $h(Q(y))=0$ for every $y\in B_0$. [step 1.1, 2.1, F1, F2, F3]

3.1 Define $P(x):=\Phi(\tau(x),x)$ for $x\in A_1$. Then $P$ is $C^1$ as a composition of $C^1$ maps, and $P(x)\in\Sigma$ for every $x\in A_1$ by step 2.1. Since $P(x_0)=x_1$, continuity of $P$ gives an open set $A_2\subseteq A_1$ with $x_0\in A_2$ and $P(A_2)\subseteq W$. [step 2.1, F1, F4]

3.2 Shrinking the two neighbourhoods. Choose an open set $A\subseteq A_2$ with $x_0\in A$, $\tau(A)\subseteq J_2$ and $P(A)\subseteq B_0$; this is possible because $\tau(x_0)=t_0\in J_2$, $P(x_0)=x_1\in B_0$ and $\tau,P$ are continuous. Define $$B:=B_0\cap\sigma^{-1}(J_1)\cap Q^{-1}(A).$$ Then $B$ is open (preimages of open sets under the continuous maps $\sigma,Q$) and contains $x_1$: $\sigma(x_1)=t_0\in J_1$ and $Q(x_1)=\Phi(-t_0,x_1)=x_0\in A$ by [F2]. By construction $Q(B)\subseteq A$ and $\sigma(B)\subseteq J_1$, so restricting $\tau$ to $A$ and $\sigma$ to $B$ gives the $C^1$ functions of clauses 1 and 2, with $P:A\to\Sigma$ and $Q:B\to\Sigma$ both $C^1$ and mapping into $\Sigma$ (steps 2.1 and 2.2). [step 2.1, 3.1, 2.2, F1, F2, F4]

3.3 First inverse identity. Let $x\in A\cap\Sigma$ and put $y:=P(x)\in B_0$ and $s:=\tau(x)\in J_2$. Since $h(x)=0$ and $\Phi(-s,y)=\Phi(-\tau(x),\Phi(\tau(x),x))=x$ by [F2], we have $h(\Phi(-s,y))=0$; the equivalence of step 2.2 with the pair $(s,y)\in J_2\times B_0$ therefore gives $\sigma(y)=s=\tau(x)$. Hence $\sigma(y)=\tau(x)\in J_1$, so $y\in\sigma^{-1}(J_1)$, and $Q(y)=\Phi(-\sigma(y),y)=\Phi(-\tau(x),y)=x\in A$, so $y\in Q^{-1}(A)$; therefore $y\in B$. Thus $P(A\cap\Sigma)\subseteq B$, and $Q(P(x))=\Phi(-\sigma(y),y)=x$ for every $x\in A\cap\Sigma$. [step 2.1, 3.1, 2.2, 3.2, F2, F3]

3.4 Second inverse identity. Let $y\in B\cap\Sigma\cap Q^{-1}(A)$ and put $x:=Q(y)\in A\cap\Sigma$ (the value lies in $\Sigma$ by step 2.2). By [F2], $\Phi(\sigma(y),x)=\Phi(\sigma(y),\Phi(-\sigma(y),y))=y$, and $h(y)=0$ because $y\in\Sigma$; the equivalence of step 2.1 with the pair $(\sigma(y),x)\in J_1\times A_1$ therefore gives $\sigma(y)=\tau(x)$. Hence $P(Q(y))=\Phi(\tau(x),x)=\Phi(\sigma(y),x)=y$. [step 2.1, 2.2, 3.2, F2, F3]

3.5 Assume the additional exclusion in clause 4. Choose $\varepsilon>0$ with $3\varepsilon<t_0$ sufficiently small that the reference paths for $0\le s\le\varepsilon$ and $t_0-2\varepsilon\le s\le t_0+2\varepsilon$ lie in $W$, and $Dh(\Phi(s,x_0))F(\Phi(s,x_0))$ has a fixed nonzero sign on each of these two intervals. Continuity and compactness give an open neighbourhood $A_3$ of $x_0$ such that all these paths for $x\in A_3$ remain in $W$ with the same respective signs. The compact middle path $K=\{\Phi(s,x_0):\varepsilon\le s\le t_0-\varepsilon\}$ lies in the open set $U\setminus\overline\Sigma^{\,U}$ by the additional hypothesis. By openness of $\Omega$, continuity of $\Phi$ and finite product-neighbourhood covers of the compact time intervals, further shrink $A_3$ so that $[0,t_0+2\varepsilon]\times A_3\subseteq\Omega$ and $\Phi([\varepsilon,t_0-\varepsilon]\times A_3)\subseteq U\setminus\overline\Sigma^{\,U}$. Also shrink it so that $|\tau(x)-t_0|<\varepsilon$. [given, F1, F4, F5, step 2.1, choose]

4.1 Since $Dh(x_i)F(x_i)\ne0$, one has $Dh(x_i)\ne0$ at each $x_i$ ($i=0,1$). For $n\ge2$, after permuting coordinates, [F3] makes $\Sigma$ near $x_i$ the graph $x_n=f_i(x_1,\ldots,x_{n-1})$ of a $C^1$ function; its graph parametrization and coordinate projection are an embedded section chart. For $n=1$, continuity of $h'$ and $h'(x_i)\ne0$ give an interval on which $h'$ has a fixed nonzero sign; the mean value theorem [F5] makes $h$ strictly monotone there, so $\Sigma$ in that interval is the singleton $\{x_i\}$, a zero-dimensional section chart. Shrink $A$ into the chart near $x_0$ and shrink $B_0$ into the target chart near $x_1$; by continuity of $P$ shrink $A$ further so $P(A)\subseteq B_0$, then repeat the construction of $B$ in step 3.2. In dimensions $n\ge2$, the chart coordinates of $P:A\to\Sigma$ and $Q:B\to\Sigma$ are ambient coordinate projections composed with ambient $C^1$ maps, so both are $C^1$; for $n=1$ these maps are locally constant into the singleton charts. Their restrictions to the sections are therefore $C^1$ in the same charts. The inverse identities of steps 3.3--3.4 remain valid after these neighbourhood restrictions. [given, F3, F4, F5, step 3.2]

5.1 By steps 3.3 and 3.4, $P(A\cap\Sigma)=B\cap\Sigma\cap Q^{-1}(A)$: if $y=P(x)$ with $x\in A\cap\Sigma$, then $y\in B$, $y\in\Sigma$ and $Q(y)=x\in A$; conversely, if $y\in B\cap\Sigma\cap Q^{-1}(A)$, then $x:=Q(y)\in A\cap\Sigma$ and step 3.4 gives $P(x)=y$. Since $B$ and $Q^{-1}(A)$ are open in $\mathbb R^n$, the set $B\cap\Sigma\cap Q^{-1}(A)$ is open in the relative topology of $\Sigma$. On $P(A\cap\Sigma)$ the maps $P$ and $Q$ are inverse to each other by steps 3.3 and 3.4, and both are $C^1$ in the charts of step 4.1, so $P:A\cap\Sigma\to P(A\cap\Sigma)$ is a $C^1$ diffeomorphism with inverse $Q|_{P(A\cap\Sigma)}$. This proves clauses 2 and 3. [step 3.1, 3.2, 3.3, 3.4, 4.1, F1, F4]



6.1 Repeat step 3.2 with $A\subseteq A_3$, retaining its inverse identities and charts. For $x\in A\cap\Sigma$, the scalar function $s\mapsto h(\Phi(s,x))$ is strictly monotone on $[0,\varepsilon]$ and vanishes at $0$, hence has no zero for $0<s\le\varepsilon$. The middle interval has no $\Sigma$-hits by step 3.5. On $[t_0-2\varepsilon,t_0+2\varepsilon]$ the scalar function is strictly monotone and has its unique zero at $\tau(x)$; thus it has no zero on $[t_0-\varepsilon,\tau(x))$. These intervals cover $(0,\tau(x))$, and $\tau(x)>t_0-\varepsilon>0$. This proves the first-return conclusion of clause 4, together with clauses 1-3 already proved. [step 3.5, 3.2, 3.3, 3.4, 5.1, F4, F5] ∎

## Remarks

- The two transversality hypotheses are exactly what the two applications of the implicit function theorem use: $Dh(x_1)F(x_1)\ne0$ at the forward crossing and $Dh(x_0)F(x_0)\ne0$ at the crossing of the reversed reference orbit. If only the forward crossing were transversal, the return time $\tau$ would still exist as a $C^1$ function, but the construction of the inverse and hence of the local conjugacy of $P$ with the reversed flow would not be available.

- No periodicity of the reference orbit is assumed: $x_1$ need not equal $x_0$. When $x_0$ is periodic of period $t_0$ and the section is transversal at $x_0$, the map $P$ above is a local return map; it is a first-return map when the exclusion hypothesis of clause 4 holds, and every fixed point of $P$ corresponds to a periodic orbit of the flow through the section in the usual way; that correspondence is not needed in this batch.
