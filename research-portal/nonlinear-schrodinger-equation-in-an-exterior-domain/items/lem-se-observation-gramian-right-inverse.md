---
id: lem-se-observation-gramian-right-inverse
kind: lemma
domain: mathematics
title: Observation lower bounds give Hilbert control right inverses
status: draft
deps:
  - math:def-hilbert-space
  - math:def-hilbert-space-adjoint
  - math:thm-hilbert-adjoint-properties
  - math:thm-lax-milgram
  - math:thm-cauchy-schwarz-in-an-inner-product-space
  - math:def-operator-norm
  - math:def-countable-choice
  - math:def-normed-vector-space-over-an-absolutely-valued-field
  - math:lem-reverse-triangle-inequality-in-a-normed-space
  - math:lem-extreme-value-theorem-from-compactness
  - math:lem-vector-operations-are-continuous-in-a-normed-space
  - math:def-bounded-linear-operator
  - math:def-metric-continuity
dependency_roles:
  math:def-hilbert-space: mathematical-premise
  math:def-hilbert-space-adjoint: mathematical-premise
  math:thm-hilbert-adjoint-properties: mathematical-premise
  math:thm-lax-milgram: mathematical-premise
  math:thm-cauchy-schwarz-in-an-inner-product-space: mathematical-premise
  math:def-operator-norm: mathematical-premise
  math:def-countable-choice: mathematical-premise
  math:def-normed-vector-space-over-an-absolutely-valued-field: mathematical-premise
  math:lem-reverse-triangle-inequality-in-a-normed-space: mathematical-premise
  math:lem-extreme-value-theorem-from-compactness: mathematical-premise
  math:lem-vector-operations-are-continuous-in-a-normed-space: mathematical-premise
  math:def-bounded-linear-operator: mathematical-premise
  math:def-metric-continuity: mathematical-premise
formulation_deps:
  - math:def-hilbert-space
  - math:def-hilbert-space-adjoint
  - math:thm-hilbert-adjoint-properties
  - math:def-operator-norm
  - math:def-countable-choice
  - math:def-normed-vector-space-over-an-absolutely-valued-field
  - math:lem-reverse-triangle-inequality-in-a-normed-space
  - math:lem-extreme-value-theorem-from-compactness
  - math:lem-vector-operations-are-continuous-in-a-normed-space
  - math:def-bounded-linear-operator
  - math:def-metric-continuity
argument_deps:
  - math:def-hilbert-space
  - math:def-hilbert-space-adjoint
  - math:thm-hilbert-adjoint-properties
  - math:thm-lax-milgram
  - math:thm-cauchy-schwarz-in-an-inner-product-space
  - math:def-operator-norm
  - math:def-countable-choice
  - math:def-normed-vector-space-over-an-absolutely-valued-field
  - math:lem-reverse-triangle-inequality-in-a-normed-space
  - math:lem-extreme-value-theorem-from-compactness
  - math:lem-vector-operations-are-continuous-in-a-normed-space
  - math:def-bounded-linear-operator
  - math:def-metric-continuity
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
dependency_level: 0
---

## Statement

Assume Countable Choice. Let $E$ and $U$ be real or complex Hilbert spaces over the same field, and let $O:E\to U$ be bounded and linear. Suppose that $\|Ox\|_U\ge c\|x\|_E$ for every $x\in E$, where $c>0$. Let $O^*:U\to E$ be the Hilbert adjoint and set $Q=O^*O$. Then $Q:E\to E$ has a bounded two-sided inverse, and $R=OQ^{-1}:E\to U$ is a bounded linear right inverse of $O^*$, meaning $O^*R=I_E$, with $\|R\|\le c^{-1}$.

For the stronger trajectory conclusion, let $Y$ be a normed space over the same field and $T>0$. Write $C([0,T];Y)$ for the continuous $Y$-valued functions with supremum norm. Suppose that a bounded linear map $J:E\to C([0,T];Y)$ and a linear map $i:C([0,T];Y)\to U$ satisfy $iJ=O$. Then $R_C=JQ^{-1}$ is bounded into $C([0,T];Y)$, $iR_C=R$, and $\|R_C\|\le\|J\|c^{-2}$. In particular, when $O$ itself has values in both spaces with the same representatives and is bounded as a map $E\to C([0,T];Y)$, one may take $J=O$ and $i$ to be the inclusion or the map to the corresponding equivalence class.

## Facts & Assumptions

[A1] Countable Choice means that every countable family of nonempty sets admits a choice function; it is assumed for the adjoint and Lax–Milgram interfaces below ([[math:def-countable-choice]]).

[F1] A Hilbert space is a complete inner-product space. The inner products here are linear in the first variable; the bounded Hilbert adjoint is characterized by $\langle Ox,u\rangle_U=\langle x,O^*u\rangle_E$ ([[math:def-hilbert-space]], [[math:def-hilbert-space-adjoint]], [[math:thm-hilbert-adjoint-properties]]).

[F2] Cauchy–Schwarz gives $|\langle x,y\rangle|\le\|x\|\|y\|$, and the norm of a bounded operator is the supremum of its output norm on the unit ball ([[math:thm-cauchy-schwarz-in-an-inner-product-space]], [[math:def-operator-norm]]).

[F3] Under Countable Choice, Lax–Milgram gives a unique solution $z$ to $a(z,v)=F(v)$ for all $v$ when $a$ is a bounded coercive real bilinear or complex sesquilinear form and $F$ is a bounded functional conjugate-linear in the test variable. If the coercivity constant is $\alpha$, then $\|z\|\le\alpha^{-1}\|F\|$ ([[math:thm-lax-milgram]], [[math:def-countable-choice]]).

[F4] A norm on a vector space over $\mathbb R$ or $\mathbb C$ is nonnegative, separates zero, is absolutely homogeneous, and satisfies the triangle inequality; its metric is $d(y,z)=\|y-z\|_Y$ ([[math:def-normed-vector-space-over-an-absolutely-valued-field]]), using the usual absolute value or complex modulus.

[F5] In a real or complex normed space, vector addition and scalar multiplication are continuous, and $|\|y\|_Y-\|z\|_Y|\le\|y-z\|_Y$, so the norm map is continuous ([[math:lem-vector-operations-are-continuous-in-a-normed-space]], [[math:lem-reverse-triangle-inequality-in-a-normed-space]]). For a complex space, the reverse-triangle estimate also follows on its underlying real normed space, with the same metric and norm.

[F6] Every continuous real-valued function on a closed real interval $[a,b]$, $a\le b$, is bounded and attains its maximum and minimum ([[math:lem-extreme-value-theorem-from-compactness]]).

[F7] A linear map $A:X\to Z$ between normed spaces over the same real or complex field is bounded when there is a real $M\ge0$ such that $\|Ax\|_Z\le M\|x\|_X$ for every $x\in X$ ([[math:def-bounded-linear-operator]]).

[F8] A map $g:(X,d_X)\to(Z,d_Z)$ is continuous at $x_0$ when for every $\varepsilon>0$ there is $\delta>0$ such that $d_X(x,x_0)<\delta$ implies $d_Z(g(x),g(x_0))<\varepsilon$; it is continuous when this holds at every point ([[math:def-metric-continuity]]). For the trajectories here, $[0,T]$ carries the metric $|t-r|$ and $Y$ carries $\|y-z\|_Y$; real-valued norm functions use the usual absolute-value metric.

## Proof

[A1] Countable Choice means that every countable family of nonempty sets admits a choice function; it is assumed for the adjoint and Lax–Milgram interfaces below ([[math:def-countable-choice]]).

[F1] A Hilbert space is a complete inner-product space. The inner products here are linear in the first variable; the bounded Hilbert adjoint is characterized by $\langle Ox,u\rangle_U=\langle x,O^*u\rangle_E$ ([[math:def-hilbert-space]], [[math:def-hilbert-space-adjoint]], [[math:thm-hilbert-adjoint-properties]]).

[F2] Cauchy–Schwarz gives $|\langle x,y\rangle|\le\|x\|\|y\|$, and the norm of a bounded operator is the supremum of its output norm on the unit ball ([[math:thm-cauchy-schwarz-in-an-inner-product-space]], [[math:def-operator-norm]]).

[F3] Under Countable Choice, Lax–Milgram gives a unique solution $z$ to $a(z,v)=F(v)$ for all $v$ when $a$ is a bounded coercive real bilinear or complex sesquilinear form and $F$ is a bounded functional conjugate-linear in the test variable. If the coercivity constant is $\alpha$, then $\|z\|\le\alpha^{-1}\|F\|$ ([[math:thm-lax-milgram]], [[math:def-countable-choice]]).



**Given:** The spaces, maps and lower bound in the statement, with Countable Choice.

**Goal:** Prove the invertibility, right-inverse identity and bounds, including the conditional trajectory lift.

1.1 Define $a(z,v)=\langle Oz,Ov\rangle_U$. It is linear in $z$ and conjugate-linear in $v$ (bilinear in the real case). By Cauchy–Schwarz and boundedness of $O$, $|a(z,v)|\le\|O\|^2\|z\|_E\|v\|_E$, while $\operatorname{Re}a(z,z)=\|Oz\|_U^2\ge c^2\|z\|_E^2$. For each $f\in E$, the functional $F_f(v)=\langle f,v\rangle_E$ is bounded and conjugate-linear, with $\|F_f\|\le\|f\|_E$. Lax–Milgram therefore gives a unique $z\in E$ with $a(z,v)=\langle f,v\rangle_E$ for all $v$, and $\|z\|_E\le c^{-2}\|f\|_E$. [given, A1, F1, F2, F3, F7]

1.2 Under the trajectory hypotheses, give $C([0,T];Y)$ pointwise addition and scalar multiplication. The zero function is continuous. For continuous $g,h$ and a fixed scalar $a$, the continuity of the vector operations gives continuity of $g+h$ and $ag$. Explicitly, at $t_0$ the increments satisfy $\|(g+h)(t)-(g+h)(t_0)\|_Y\le\|g(t)-g(t_0)\|_Y+\|h(t)-h(t_0)\|_Y$ and $\|ag(t)-ag(t_0)\|_Y=|a|\|g(t)-g(t_0)\|_Y$, which tend to zero as $t\to t_0$ within $[0,T]$. All vector-space identities hold pointwise, so this is a vector space over the same field. [given, F4, F5, F8]

2.1 The adjoint identity and conjugate symmetry give $a(z,v)=\langle O^*Oz,v\rangle_E=\langle Qz,v\rangle_E$. Thus the solution in step 1.1 satisfies $Qz=f$, since an inner product with every $v$ vanishes only for the zero vector. Uniqueness also gives injectivity of $Q$. Hence $Q$ is bijective; its inverse is linear because $Q$ is linear, and the estimate in step 1.1 gives $\|Q^{-1}\|\le c^{-2}$. [step 1.1, F1, F2, F7]

2.2 For $g\in C([0,T];Y)$, the reverse triangle inequality gives $|\|g(t)\|_Y-\|g(t_0)\|_Y|\le\|g(t)-g(t_0)\|_Y$, so $t\mapsto\|g(t)\|_Y$ is continuous. The extreme value theorem on $[0,T]$ makes $\|g\|_\infty=\sup_{0\le t\le T}\|g(t)\|_Y$ a finite nonnegative real number, attained at some $t$. This quantity vanishes exactly for the zero function. Pointwise absolute homogeneity gives $\|ag\|_\infty=|a|\|g\|_\infty$, including $a=0$; the pointwise triangle inequality gives $\|g+h\|_\infty\le\|g\|_\infty+\|h\|_\infty$. Thus the stated supremum norm makes $C([0,T];Y)$ a normed space, without any completeness assumption on $Y$. [given, F4, F5, F6, step 1.2, F8]

3.1 Set $R=OQ^{-1}$. It is bounded and linear, and $O^*R=QQ^{-1}=I_E$. For $f\in E$ put $z=Q^{-1}f$. Then $\|Rf\|_U^2=\langle Qz,z\rangle_E=\langle f,z\rangle_E\le\|f\|_E\|z\|_E$, while $c\|z\|_E\le\|Rf\|_U$. If $Rf=0$ the desired estimate is immediate; otherwise combine the two inequalities and divide by $\|Rf\|_U$ to obtain $\|Rf\|_U\le c^{-1}\|f\|_E$. Taking the unit-ball supremum proves $\|R\|\le c^{-1}$. [given, F1, F2, step 2.1, F7]

4.1 Under the additional trajectory hypotheses, define $R_C=JQ^{-1}$. For every $f\in E$, $iR_Cf=iJQ^{-1}f=OQ^{-1}f=Rf$. Also $\|R_Cf\|_{C([0,T];Y)}\le\|J\|\|Q^{-1}f\|_E\le\|J\|c^{-2}\|f\|_E$, which gives the asserted operator bound. No identification of $O^*$ with an evolution endpoint map is used. [given, F2, step 2.1, step 3.1, step 2.2, F7] ∎
