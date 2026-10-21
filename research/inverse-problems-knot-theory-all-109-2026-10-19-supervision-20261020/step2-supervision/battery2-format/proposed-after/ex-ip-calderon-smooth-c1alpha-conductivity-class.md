---
id: ex-ip-calderon-smooth-c1alpha-conductivity-class
kind: example
title: A compactly supported smooth conductivity in the higher-dimensional class
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 3
deps:
  - def-ip-calderon-admissible-conductivity-class
  - lem-smooth-bump-between-concentric-euclidean-balls
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Maarten V. de Hoop, Nikola B. Kovachki, Matti Lassas and Nicholas H. Nelsen, Extension and neural operator approximation of the electrical impedance tomography inverse map"
      url: "https://arxiv.org/pdf/2511.20361"
      locator: "Section 2.3, equations (2.10)–(2.13), printed pp. 9–11: the higher-dimensional $C^{1,\alpha}$ conductivity class."
---

## Example

Fix $d\ge3$, $\alpha\in(0,1)$, $x_0=(1/2,\ldots,1/2)$, $a=1/4$, $D=B(x_0,a)\subset(0,1)^d$, and $D'=B(x_0,a/2)$. Choose a nonzero $\psi\in C_c^\infty(B(0,1))$ that equals one on $\overline B(0,1/2)$, put $N_\alpha=\|\psi\|_{C^{1,\alpha}(\mathbb R^d)}$, and set $\phi=\psi/\max\{1,N_\alpha\}$. Here the $C^{1,\alpha}$ norm is the maximum of the suprema of the function, its first derivatives, and the $\alpha$-Hölder seminorms of its first derivatives. Let $r=a/4$, $\varepsilon=\min\{1/4,r^{1+\alpha}/8\}$, and $\gamma(x)=1+\varepsilon\phi((x-x_0)/r)$ on $D$. For $m=1/2$, $M=3/2$, and $R=2$, this coefficient belongs to $X_d(2)$.

## Example references

[[def-ip-calderon-admissible-conductivity-class|The higher-dimensional class $X_d(R)$ and its $C^{1,\alpha}$ norm.]]

[[lem-smooth-bump-between-concentric-euclidean-balls|Existence of a smooth bump supported in the unit ball.]]

## Facts & Assumptions

**Given:** $d\ge3$, $\alpha\in(0,1)$, $D=B(x_0,1/4)$, $D'=B(x_0,1/8)$, the bump $\psi$ from the statement, its norm $N_\alpha$, the normalized function $\phi$, $r=1/16$, $\varepsilon=\min\{1/4,r^{1+\alpha}/8\}$, and $\gamma=1+\varepsilon\phi((x-x_0)/r)$.

[F1] In dimensions $d\ge3$, membership in $X_d(R)$ requires $m\le\gamma\le M$, equality to $1$ outside $D'$, and $\|\gamma\|_{C^{1,\alpha}(\overline D)}\le R$ with the norm stated in the class definition. ([[def-ip-calderon-admissible-conductivity-class]])

[F2] For $0<s<t$, a smooth function exists that equals one on $\overline B(0,s)$ and has support contained in $B(0,t)$. ([[lem-smooth-bump-between-concentric-euclidean-balls]])

## Verification

**Proof technique:** direct.

1.1 By [F2] with radii $1/2<1$, a bump $\psi$ as in the Example exists; it is nonzero since it equals one on $B(0,1/2)$. Its first and second derivatives are bounded because it is smooth with compact support. If $|x-y|\le1$, the mean-value estimate gives $|\nabla\psi(x)-\nabla\psi(y)|\le\|D^2\psi\|_\infty|x-y|\le\|D^2\psi\|_\infty|x-y|^\alpha$; if $|x-y|\ge1$, the quotient is at most $2\|\nabla\psi\|_\infty$. Thus $0<N_\alpha<\infty$ and the normalization yields $0\ne\phi$ with $\|\phi\|_{C^{1,\alpha}}\le1$. [F2, given, algebra]

2.1 The support of $x\mapsto\phi((x-x_0)/r)$ lies in $B(x_0,r)\subset D'$, so $\gamma=1$ on $D\setminus D'$. Since $|\phi|\le1$ and $\varepsilon\le1/4$, its values lie in $[3/4,5/4]\subset[1/2,3/2]$. [F1, step 1.1, given, algebra]

3.1 The sup norm of the perturbation is at most $\varepsilon\le1/4$. Its first derivative suprema are at most $\varepsilon/r\le r^\alpha/8\le1/8$, and the $\alpha$-Hölder seminorm of each first derivative is at most $\varepsilon r^{-1-\alpha}[\nabla\phi]_{C^\alpha}\le1/8$ by scaling the Hölder quotient. The derivatives of the constant background vanish, so $\|\gamma\|_{C^{1,\alpha}(\overline D)}\le5/4<2$. All conditions in [F1] hold, hence $\gamma\in X_d(2)$. [F1, step 1.1, step 2.1, algebra] ∎

