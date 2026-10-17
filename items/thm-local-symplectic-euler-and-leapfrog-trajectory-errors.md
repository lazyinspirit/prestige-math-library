---
id: thm-local-symplectic-euler-and-leapfrog-trajectory-errors
kind: theorem
title: Local and finite-time trajectory error for symplectic Euler and leapfrog
status: published
origin: pipeline
dependency_level: 2
deps:
  - def-banach-space
  - def-norm-and-normed-space
  - lem-p-norms-are-norms-and-induce-the-published-metrics
  - thm-euclidean-space-complete
  - lem-mean-value-inequality-for-a-differentiable-banach-valued-curve
  - def-local-leapfrog-domain-on-an-open-configuration-set
  - alg-local-symplectic-euler-step
  - lem-c1-euclidean-maximal-flow-with-c2-upgrade
  - thm-chain-rule-for-total-derivatives
  - thm-multivariable-taylor-formula-with-lagrange-remainder
justified_by: []
forward_refs: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Ernst Hairer, Geometric Numerical Integration, TU München Lecture 2: Symplectic integrators"
      url: "https://www.unige.ch/~hairer/poly_geoint/week2.pdf"
      locator: "PDF pp. 1–2 and 12–13"
    - title: "Nikolaj Nordkvist and Poul G. Hjorth, Classical Mechanics and Symplectic Integration"
      url: "https://backend.orbit.dtu.dk/ws/files/2512495/lecture_notes-1.pdf"
      locator: "§3.5, PDF pp. 40–41"
---

## Statement

Let $d\ge1$, $Q\subseteq\mathbb R^d$ be open, $V\in C^3(Q)$, and $M$ symmetric positive definite. Set $H(q,p)=\tfrac12p^TM^{-1}p+V(q)$ and $F(q,p)=(M^{-1}p,-\nabla V(q))$. Fix $T>0$ and $h=T/N$ with $N\ge1$. Suppose the exact solution, numerical states, all kick/drift intermediate states, and every line segment used below lie in one compact convex tube $K\Subset Q\times\mathbb R^d$, with the derivatives of $F$ through order two bounded there. For $z_0$ in that tube, write $e_n^E$ for the error of iterated kick-then-drift symplectic Euler and $e_n^V$ for the error of iterated local leapfrog relative to the exact solution at $t_n=nh$. Write $\Psi_h^E$ and $\Psi_h^V$ for their admitted one-step maps and $\varphi_h$ for the exact flow. For sufficiently small $h$, constants $C_E,C_V,L$ independent of $h,N,n$ satisfy
$$\|\Psi_h^E(z)-\varphi_h(z)\|\le C_Eh^2,\qquad \|\Psi_h^V(z)-\varphi_h(z)\|\le C_Vh^3$$
for admitted $z\in K$, and whenever $nh\le T$,
$$e_n^E\le e^{LT}e_0+C_ETe^{LT}h,\qquad e_n^V\le e^{LT}e_0+C_VTe^{LT}h^2.$$
Thus symplectic Euler has global order one and leapfrog has global order two on the stated controlled tube. No unconditional domain-admissibility claim is made.

## Facts & Assumptions

**Given:** $V\in C^3(Q)$, SPD $M$, an exact Hamiltonian solution and numerical trajectories contained in the stated compact convex tube, with all method stages admitted.

[A1] The local map is the partial kick/drift composition; symplectic Euler uses kick then drift, while leapfrog uses half-kick, full drift, half-kick. [[def-local-leapfrog-domain-on-an-open-configuration-set]], [[alg-local-symplectic-euler-step]]

[F1] Since $M$ is symmetric positive definite, $Mx=0$ forces $x=0$, so $M$ is invertible and $(M^{-1})^T=(M^T)^{-1}=M^{-1}$. Differentiating $H(q,p)=\tfrac12p^TM^{-1}p+V(q)$ therefore gives $\nabla H=(\nabla V(q),M^{-1}p)$ and the coordinate field $F=(M^{-1}p,-\nabla V(q))$.

[F2] The exact local flow and its variational derivative exist on admitted compact trajectory segments. [[lem-c1-euclidean-maximal-flow-with-c2-upgrade]]

[F3] Total derivatives obey the chain rule. [[thm-chain-rule-for-total-derivatives]]

[F4] Apply the scalar Taylor theorem coordinatewise on the compact convex tube; finitely many coordinate remainder bounds combine into a Euclidean bound. The same argument applies to the entries of $\nabla^2V$. [[thm-multivariable-taylor-formula-with-lagrange-remainder]]

[F5] The Euclidean $p=2$ norm on $\mathbb R^{2d}$ induces $d_2$, and $(\mathbb R^{2d},d_2)$ is complete; hence this normed space is Banach. A continuous differentiable curve in it with derivative norm bounded by $C$ changes by at most $C$ times the interval length. [[def-banach-space]], [[def-norm-and-normed-space]], [[lem-p-norms-are-norms-and-induce-the-published-metrics]], [[thm-euclidean-space-complete]], [[lem-mean-value-inequality-for-a-differentiable-banach-valued-curve]]

## Proof

**Proof technique:** Taylor defect, one-step stability, and a finite geometric recurrence.

1.1 By [F1]–[F3], the exact solution satisfies $z'=F(z)$ and $z''=DF(z)F(z)$. Since $D^2F$ is bounded on $K$, [F4] gives uniformly $\varphi_h(z)=z+hF(z)+\tfrac12h^2DF(z)F(z)+R(z,h),\qquad \|R(z,h)\|\le C_0h^3.$ [A1, F1, F2, F3, F4, given]

1.2 The kick derivative is $I+hA_K(q)$ with $A_K=\begin{pmatrix}0&0\\-\nabla^2V(q)&0\end{pmatrix}$ and the drift derivative is $I+hA_D$ with $A_D=\begin{pmatrix}0&M^{-1}\\0&0\end{pmatrix}$. Their sum is $DF(q,p)$. For kick-then-drift, the derivative product is $(I+hA_D)(I+hA_K)=I+hDF+O(h^2)$. For leapfrog it is $(I+(h/2)A_K(q_1))(I+hA_D)(I+(h/2)A_K(q))=I+hDF+O(h^2)$; since $q_1-q=O(h)$ and $D^3V$ is bounded, [F4] applied to each Hessian entry gives $\nabla^2V(q_1)-\nabla^2V(q)=O(h)$. The remainders are uniform on $K$, so $\|D\Psi_h\|\le1+Lh$ for a fixed $L$ and small $h$. The vector-valued mean-value inequality [F5] on the stipulated convex segments gives the same one-step Lipschitz bound for pairs of compared states. [A1, F1, F4, F5, algebra]

2.1 Kick-then-drift Euler gives $p^E=p-h\nabla V(q)$ and $q^E=q+hM^{-1}p^E$. Thus $p^E=p-h\nabla V(q)$ and $q^E=q+hM^{-1}p-h^2M^{-1}\nabla V(q)$. Comparing with the two coordinate components of step 1.1 gives a uniform one-step defect at most $C_Eh^2$. [A1, F1, step 1.1, algebra]

2.2 For leapfrog, the intermediate momentum is $p_{1/2}=p-(h/2)\nabla V(q)$ and the new position is $q_1=q+hM^{-1}p_{1/2}=q+hM^{-1}p-(h^2/2)M^{-1}\nabla V(q)$. Taylor expansion of $\nabla V(q_1)$, using bounded third derivatives of $V$, gives $p_1=p-\tfrac h2\nabla V(q)-\tfrac h2\nabla V(q_1)=p-h\nabla V(q)-\tfrac{h^2}{2}\nabla^2V(q)M^{-1}p+O(h^3).$ These are exactly the terms through degree two in step 1.1, so the leapfrog one-step defect is at most $C_Vh^3$. [A1, F1, F4, step 1.1, algebra]

3.1 For either method, if its local defect is $Ch^{s+1}$, steps 1.2, 2.1, and 2.2 give $e_{n+1}\le(1+Lh)e_n+Ch^{s+1}$. Iterating this inequality and using $(1+Lh)^j\le e^{LT}$ and $n\le T/h$ yields $e_n\le e^{LT}e_0+CTe^{LT}h^s$. [A1, step 1.2, step 2.1, step 2.2, algebra]

4.1 Substitution of $s=1,C=C_E$ for symplectic Euler and $s=2,C=C_V$ for leapfrog in step 3.1 gives the two stated bounds. [step 3.1, algebra] ∎
