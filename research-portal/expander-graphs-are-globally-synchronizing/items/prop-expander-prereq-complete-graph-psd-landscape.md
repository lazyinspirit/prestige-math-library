---
id: prop-expander-prereq-complete-graph-psd-landscape
kind: proposition
title: A complete-graph second-order landscape application
domain: mathematics
status: published
origin: pipeline
deps:
  - def-expander-prereq-phase-torus
  - def-expander-prereq-phasor-calculus
  - prop-expander-prereq-phasor-average-rigidity
  - prop-expander-prereq-pair-potential-calculus
  - prop-expander-prereq-complex-quadratic-tests
dependency_roles:
  def-expander-prereq-phase-torus: mathematical-premise
  def-expander-prereq-phasor-calculus: mathematical-premise
  prop-expander-prereq-phasor-average-rigidity: mathematical-premise
  prop-expander-prereq-pair-potential-calculus: mathematical-premise
  prop-expander-prereq-complex-quadratic-tests: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
dependency_level: 2
---

## Statement

Let $V$ be a finite set of $n\ge1$ vertices. The unweighted complete graph has one edge between each pair of distinct vertices. A phase configuration is $\theta\in T_V=\mathbb R^V/(2\pi\mathbb Z)^V$; write $\theta_x$ also for an angular representative. Its cosine-difference energy is $U(\theta)=\sum_{\{x,y\}\subseteq V,\,x\ne y}(1-\cos(\theta_x-\theta_y))$. An equilibrium means a configuration at which the gradient of $U$ in angular coordinates vanishes. Its Hessian $H$ is the matrix of second angular partial derivatives; it is positive semidefinite if $f^THf\ge0$ for every $f\in\mathbb R^V$. Fully synchronized means that all phases coincide modulo $2\pi$.

Every equilibrium of this energy whose Hessian is positive semidefinite is fully synchronized. Common rotation means adding the same phase to every coordinate; the conclusion is invariant under this rotation. No general converse from a positive semidefinite Hessian to local minimality is asserted.

## Statement references

[[def-expander-prereq-phase-torus]]

[[def-expander-prereq-phasor-calculus]]

[[prop-expander-prereq-pair-potential-calculus]]

[[prop-expander-prereq-complex-quadratic-tests]]

## Facts & Assumptions

[F1] Angular representatives differ by integer multiples of $2\pi$, and angular chart transitions are translations. Thus the displayed gradient and Hessian conditions are independent of the chosen angular chart ([[def-expander-prereq-phase-torus]]).

[F2] For real $u,v$, $e^{iu}=\cos u+i\sin u$ has modulus one, $e^{i(u-v)}=e^{iu}\overline{e^{iv}}$, and these expressions are unchanged by adding integer multiples of $2\pi$ to angles. The derivatives of sine and cosine are cosine and minus sine, respectively ([[def-expander-prereq-phasor-calculus]]).

[F3] For a symmetric array of real weights and an even twice continuously differentiable periodic pair potential, the gradient is the sum of its first derivatives over neighbors and the Hessian quadratic form is one half the ordered sum of the second derivative times the squared coordinate difference ([[prop-expander-prereq-pair-potential-calculus]]).

[F4] For a real symmetric matrix, positive semidefiniteness on real vectors implies nonnegativity of its complex quadratic form. For a real symmetric array $b$, the complex form of $\operatorname{diag}(\sum_y b_{xy})-b$ equals $\frac12\sum_{x,y}b_{xy}|f_x-f_y|^2$ ([[prop-expander-prereq-complex-quadratic-tests]]).

[F5] A nonzero average of unit phasors can be rotated to its positive modulus by multiplying all phasors by a common unit phasor ([[prop-expander-prereq-phasor-average-rigidity]]).

## Proof

**Given:** A configuration $\theta$ on the complete graph with vanishing angular gradient and positive semidefinite Hessian $H$.

**Goal:** Show that all its phases coincide modulo $2\pi$.

1.1 Set $z_x=e^{i\theta_x}$ and $R=\sum_x z_x$. Apply [F3] with $w_{xy}=1$ for $x\ne y$, $w_{xx}=0$, and $v(t)=1-\cos t$. By [F2], the gradient component is $\sum_y\sin(\theta_x-\theta_y)=\operatorname{Im}(z_x\overline R)$, and the real Hessian is the weighted Laplacian with entries $b_{xy}=\cos(\theta_x-\theta_y)$ for $x\ne y$ and $b_{xx}=0$. Adding the harmless diagonal coefficients $b_{xx}=1$ leaves this Laplacian unchanged. Since $b_{xy}=\frac12(z_x\overline{z_y}+\overline{z_x}z_y)$, finite-sum expansion gives $\sum_{x,y}\overline{f_x}b_{xy}f_y=\frac12(|\sum_x z_x f_x|^2+|\sum_x\overline{z_x}f_x|^2)$. Expanding the complex quadratic form from [F4] therefore gives, for every $f\in\mathbb C^V$, $f^*Hf=\sum_x\operatorname{Re}(z_x\overline R)|f_x|^2-\frac12(|\sum_x z_x f_x|^2+|\sum_x\overline{z_x}f_x|^2)$. [F2, F3, F4, algebra]

2.1 If $R=0$, choose $f_x=\overline{z_x}$. By [F2], $\sum_x z_x f_x=n$ and $\sum_x\overline{z_x}f_x=\overline{\sum_x z_x^2}$. Step 1.1 gives $f^*Hf=-\frac12(n^2+|\sum_x z_x^2|^2)\le -\frac12 n^2<0$, contradicting [F4] and the assumed positive semidefiniteness. Hence $R\ne0$. [given, F2, F4, step 1.1, choose, algebra]

3.1 Put $r=|R|>0$. By [F5], a common rotation makes $R=r$; it leaves phase differences, the gradient equations and $H$ unchanged. At equilibrium, step 1.1 then gives $\operatorname{Im}z_x=0$ for every $x$. Since $|z_x|=1$, each $z_x$ is either $1$ or $-1$. If some $z_x=-1$, choose the real coordinate vector $f$ that is $1$ at $x$ and zero elsewhere. Step 1.1 gives $f^THf=-r-1<0$, contradicting positive semidefiniteness. Thus every rotated phasor equals $1$. [given, F2, F5, step 1.1, step 2.1, choose, algebra]

4.1 Therefore the original phasors are all equal. The phase-torus identification with the unit circle in [F1], together with [F2], implies that their phases agree modulo $2\pi$. This is full synchronization. The proof used only the stated equilibrium and Hessian hypotheses and makes no sufficiency claim for general semidefinite Hessians. [F1, F2, step 3.1] ∎
