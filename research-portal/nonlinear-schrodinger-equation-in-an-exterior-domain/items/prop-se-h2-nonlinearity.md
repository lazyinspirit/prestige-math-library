---
id: prop-se-h2-nonlinearity
kind: proposition
domain: mathematics
title: Exterior H2 algebra and polynomial nonlinear estimates
status: draft
deps:
  - prop-se-scale-identifications
  - def-se-internal-systems
  - lem-se-exterior-h2-uniform-algebra
  - def-se-foundation-integer-sobolev-notation
  - def-se-foundation-time-function-spaces
  - math:def-axiom-of-choice
  - math:thm-lp-trace-operator-on-a-bounded-c-one-domain
  - math:thm-kernel-of-the-trace-is-w-one-p-zero
  - math:lem-trace-commutes-with-smooth-boundary-cutoffs-and-charts
  - math:lem-test-function-cutoffs-and-euclidean-localization
  - math:lem-weak-leibniz-rule-with-a-smooth-factor
  - math:thm-dominated-convergence
  - math:thm-open-connected-subsets-of-rn-are-polygonally-connected
  - math:thm-sobolev-spaces-are-banach-spaces
dependency_roles:
  prop-se-scale-identifications: mathematical-premise
  def-se-internal-systems: mathematical-premise
  lem-se-exterior-h2-uniform-algebra: mathematical-premise
  def-se-foundation-integer-sobolev-notation: mathematical-premise
  def-se-foundation-time-function-spaces: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  math:thm-lp-trace-operator-on-a-bounded-c-one-domain: mathematical-premise
  math:thm-kernel-of-the-trace-is-w-one-p-zero: mathematical-premise
  math:lem-trace-commutes-with-smooth-boundary-cutoffs-and-charts: mathematical-premise
  math:lem-test-function-cutoffs-and-euclidean-localization: mathematical-premise
  math:lem-weak-leibniz-rule-with-a-smooth-factor: mathematical-premise
  math:thm-dominated-convergence: mathematical-premise
  math:thm-open-connected-subsets-of-rn-are-polygonally-connected: mathematical-premise
  math:thm-sobolev-spaces-are-banach-spaces: mathematical-premise
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
sources:
  references:
    - title: Nonlinear Schrödinger equation in an exterior domain, v2
      url: https://arxiv.org/abs/2610.11968
dependency_level: 12
---

## Statement

Assume the Axiom of Choice. Let $n\in\{2,3\}$, let $\Theta\subset\mathbb R^n$ be nonempty and compact with smooth boundary, and suppose its exterior $\Omega=\mathbb R^n\setminus\Theta$ is connected. Let $H^2(\Omega)$ be the complex weak-derivative Sobolev space and $H^1_0(\Omega)$ the $H^1$ closure of $C_c^\infty(\Omega)$. Let $H_D^2(\Omega)=D(I-\Delta_D)$ have its spectral graph norm. Then $H_D^2(\Omega)=H^2(\Omega)\cap H^1_0(\Omega)$ with equivalent norms, and $H^2(\Omega)$ is an algebra continuously contained in $L^\infty(\Omega)$.

For $m\in\{3,5\}$ and $\lambda\in\mathbb R\setminus\{0\}$, put $g(z)=\lambda|z|^{m-1}z$. There is a constant $C$, depending on the fixed domain, $m$ and $\lambda$, such that $g$ maps $H_D^2(\Omega)$ to itself and, for all $u,v\in H_D^2(\Omega)$, $$\|g(v)\|_{H_D^2}\le C\|v\|_{H_D^2}^{m},\qquad \|g(v)-g(u)\|_{H_D^2}\le C\bigl(\|v\|_{H_D^2}^{m-1}+\|u\|_{H_D^2}^{m-1}\bigr)\|v-u\|_{H_D^2}.$$

For $T>0$, put $X_T=C([0,T];H_D^2(\Omega))$ with the supremum norm. If $u,v\in X_T$, then $g(u),g(v)\in L^1(0,T;H_D^2(\Omega))$ and the same two estimates hold with the left sides replaced by their $L^1(0,T;H_D^2)$ norms, the right-side state norms replaced by $X_T$ norms, and an additional factor $T$ on the right.

## Statement references

[[prop-se-scale-identifications]]

[[def-se-internal-systems]]

[[lem-se-exterior-h2-uniform-algebra]]

[[def-se-foundation-integer-sobolev-notation]]

[[def-se-foundation-time-function-spaces]]

[[math:def-axiom-of-choice]]

## Facts & Assumptions

[F1] Under the stated geometry and Choice, [[prop-se-scale-identifications]] identifies $H_D^2$ with $H^2\cap H^1_0$ and gives equivalence of the spectral and ordinary $H^2$ norms. The full Choice assumption is inherited from that supplier and [[lem-se-exterior-h2-uniform-algebra]]; it is recorded by [[math:def-axiom-of-choice]].

[F2] Under the same geometry, [[lem-se-exterior-h2-uniform-algebra]] supplies the $H^2$ algebra and $L^\infty$ embedding, the polynomial power estimate and the difference estimate with factor $(\|u\|_{H^2}+\|v\|_{H^2})^{m-1}$. It applies to complex functions and the displayed odd-power nonlinearity. It also proves preservation of zero obstacle trace, defined as the obstacle component of the bounded-collar $H^1$ trace.

[F3] In [[def-se-foundation-integer-sobolev-notation]], $H^1_0$ is the $H^1$ closure of complex $C_c^\infty$ functions, and $H^2$ has the weak-derivative norm. The nonlinearity $g$ is the one in [[def-se-internal-systems]].

[F4] [[def-se-foundation-time-function-spaces]] defines norm-continuous paths, the supremum norm and Bochner $L^1$; its integrability criterion applies to strongly measurable maps with integrable norm.

[F5] Under Choice, [[math:thm-lp-trace-operator-on-a-bounded-c-one-domain]] gives a bounded complex $H^1$ trace on each bounded $C^1$ domain, agreeing with continuous boundary values. For $p=2$ and complex scalars, [[math:thm-kernel-of-the-trace-is-w-one-p-zero]] identifies its kernel with $H^1_0$ on that bounded domain. [[math:lem-trace-commutes-with-smooth-boundary-cutoffs-and-charts]] gives cutoff commutation and locality. These statements are used only on bounded smooth collars, not directly on the unbounded exterior.

[F6] [[math:lem-test-function-cutoffs-and-euclidean-localization]] supplies a smooth $\chi$ with $0\le\chi\le1$, equal to one near $\overline{B_1}$ and supported in $B_2$. [[math:lem-weak-leibniz-rule-with-a-smooth-factor]] gives $\nabla(\eta w)=\eta\nabla w+w\nabla\eta$ and bounded smooth multiplication on complex $H^1$. [[math:thm-dominated-convergence]] applies to measurable squared errors dominated by an integrable function.

[F7] [[math:thm-open-connected-subsets-of-rn-are-polygonally-connected]] gives paths between points of the connected open exterior. [[math:thm-sobolev-spaces-are-banach-spaces]] gives completeness of complex $H^2(\Omega)$ for its weak-derivative norm under Choice. The Choice assumption already in the Statement covers this supplier and the trace suppliers, as well as the selection of approximation sequences from the closure definition.

## Proof

**Given:** The hypotheses and data in the Statement.

**Goal:** Prove the spatial and time-integrated estimates and preservation of the Dirichlet space.

1.1 The algebra and embedding assertions follow from F2. For $v\in H_D^2$, F1 gives $v\in H^2\cap H^1_0$. Fix $R\ge1$ large enough that $\Theta\subset B_R$ and set $G_R=\Omega\cap B_{3R}$. Its boundary is the disjoint union of the smooth obstacle boundary and sphere. It is connected: by F7 a point inside $B_{2R}$ can be joined in $\Omega$ to a point outside $B_{3R}$, and the part of that path up to its first encounter with the sphere of radius $2R$ stays inside $G_R$; points in the obstacle-free annulus $R<|x|<3R$ can be joined within that annulus since $n\ge2$. Thus $G_R$ is a bounded smooth domain. Approximate $v$ by $v_j\in C_c^\infty(\Omega;\mathbb C)$ in $H^1(\Omega)$ using F3 and Choice. Their restrictions converge in $H^1(G_R)$, and every restriction has zero trace on $\partial\Theta$. The bounded trace in F5 therefore gives zero obstacle trace for $v$. F2 now gives $w:=g(v)\in H^2(\Omega)$ with zero obstacle trace. [F1, F2, F3, F5, F7, given, construct]

1.2 The space $H_D^2$ is Banach for the norm used here. Indeed, if $(z_j)$ is Cauchy in that norm, F1 makes it Cauchy in $H^2$, so F7 gives a limit $z\in H^2$. The weak-derivative norm satisfies $\|f\|_{H^1}\le\|f\|_{H^2}$, hence $z_j\to z$ in $H^1$. Each $z_j$ lies in the closed subspace $H^1_0$ by F1 and F3, so $z\in H^1_0$. Thus F1 puts $z$ in $H_D^2$, and its other norm inequality makes $z_j\to z$ in the spectral norm. This verifies the Banach-target hypothesis of F4 without changing the stated space. [F1, F3, F4, F7, construct]

2.1 Put $\chi_R(x)=\chi(x/R)$ with $\chi$ from F6 and $w_R=\chi_Rw$. The multiplier rule places $w_R$ in $H^1(\Omega)$. On $G_R$ its trace is zero on $\partial\Theta$ by cutoff commutation and step 1.1, and zero on the outer sphere because $w_R$ vanishes for $|x|\ge2R$; locality in F5 justifies this last assertion. The bounded-domain trace-kernel theorem in F5 therefore gives $w_R|_{G_R}\in H^1_0(G_R)$. Choose compactly supported smooth approximants there and extend them by zero to $\Omega$. They belong to $C_c^\infty(\Omega)$. The function $w_R|_{G_R}$ has a gap to the artificial sphere, so its zero extension is $w_R$, with weak derivatives extended by zero: for a test function on $\Omega$, multiply it by a smooth cutoff supported in $B_{3R}$ and equal to one on a neighborhood of $\overline{B_{2R}}$ before using the weak test identity on $G_R$. Each approximant likewise has its compact support separated from that sphere. Consequently the $H^1(\Omega)$ error of their zero extensions equals their $H^1(G_R)$ error, proving $w_R\in H^1_0(\Omega)$. [F3, F5, F6, F7, step 1.1, construct]

3.1 Along integers $R\to\infty$, $\chi_R\to1$ pointwise, $0\le\chi_R\le1$, and $\|\nabla\chi_R\|_\infty\le C/R$. The identity $\nabla(w_R-w)=(\chi_R-1)\nabla w+w\nabla\chi_R$ follows from F6. Dominated convergence applied to $|(\chi_R-1)w|^2$ and $|(\chi_R-1)\nabla w|^2$, dominated respectively by $|w|^2$ and $|\nabla w|^2$, makes their integrals tend to zero; moreover $\|w\nabla\chi_R\|_2\le(C/R)\|w\|_2\to0$. Hence $w_R\to w$ in $H^1(\Omega)$. Since $H^1_0$ is a closed subspace by its closure definition, step 2.1 gives $w\in H^1_0(\Omega)$. Combining this with $w\in H^2$ and F1 proves $g(v)\in H_D^2$. This argument uses only bounded-domain trace kernels and does not assume a complex Sobolev composition theorem. [F1, F3, F6, step 1.1, step 2.1, algebra]

4.1 Apply F2 to $u$ and $v$ and use the norm equivalence in F1. The elementary inequality $(a+b)^{m-1}\le 2^{m-2}(a^{m-1}+b^{m-1})$ for $a,b\ge0$ gives the stated difference estimate; the power estimate follows in the same way. [F1, F2, step 3.1, algebra]

5.1 By step 4.1, $g:H_D^2\to H_D^2$ is continuous. Hence $t\mapsto g(v(t))$ and $t\mapsto g(u(t))$ are norm-continuous. Uniform continuity on the compact interval $[0,T]$ makes each a uniform limit of finite-range measurable step functions obtained from uniform time partitions, hence strongly measurable. Step 4.1 bounds their norms, so they and their difference are Bochner integrable by F4 with the Banach target established in step 1.2. Integrating the pointwise estimates over $[0,T]$ and bounding each state norm by its supremum gives the two time estimates with factor $T$. [F4, step 4.1, step 1.2, given] ∎

## Source notes

The article is cited for attribution of the estimates used in the proof of Proposition 3.10. The argument above uses the separately supplied exterior algebra and scale identification; it does not use the article as a proof of those prerequisites.
