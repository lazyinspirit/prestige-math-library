---
id: lem-conforming-galerkin-ritz-matrix-error-is-quadratic-in-gap
kind: lemma
title: The conforming Ritz matrix differs quadratically in the eigenspace gap
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
deps:
  - def-countable-choice
  - def-eigenspace-best-approximation-gap
  - def-operator-norm
  - lem-conforming-energy-projection-is-best-approximation
  - thm-compact-coercive-form-spectrum-and-minmax
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Jean-Luc Guermond, MATH 661 Finite Element Methods, Fall 2025, Chapter 47
      url: https://people.tamu.edu/~guermond/M661_FALL_2025/chap47.pdf
      locator: "§47.2.2, Lemma 47.7 and Theorem 47.10: conforming projection, no-collapse, and quadratic eigenvalue error."
    - title: Bertrand Mercier, Topics in Finite Element Solution of Elliptic Problems, Chapter 8
      url: https://mathweb.tifr.res.in/Documents/Publications/Lectures/tifr63.pdf
      locator: "§§8.5–8.7, printed pp. 133–140: eigenspace approximation and the second-order eigenvalue error."
verification: {}
---

## Statement

Assume the compact coercive form setting and notation of
[[thm-compact-coercive-form-spectrum-and-minmax]]. Fix $m\ge1$ and a
finite-dimensional conforming subspace $V_h\subseteq V$. Let
$E_m=\operatorname{span}\{e_1,\ldots,e_m\}$, let
$\delta_h=\delta_a(E_m,V_h)$ from
[[def-eigenspace-best-approximation-gap]], and let $P_h:V\to V_h$ be the
energy projection of
[[lem-conforming-energy-projection-is-best-approximation]]. For $c\in\mathbb K^m$
write $\|c\|_2=(\sum_i|c_i|^2)^{1/2}$, and for matrices use the induced
Euclidean operator norm $\|M\|_2=\sup_{\|c\|_2=1}\|Mc\|_2$
([[def-operator-norm]]). If
$$0\le\delta_h\le\min\left\{\frac12,\sqrt{\frac{\lambda_1}{6m\lambda_m}}\right\},$$
then $P_h|_{E_m}$ is injective. Set $U_h:=P_h(E_m)$. In the energy-orthonormal
basis $p_i=P_h(e_i/\sqrt{\lambda_i})$ of $U_h$, set
$(A_h)_{ij}:=a(p_j,p_i)$ and $(B_h)_{ij}:=(Jp_j,Jp_i)_H$. With
$D_m:=\operatorname{diag}(1/\lambda_1,\ldots,1/\lambda_m)$,
$$\|A_h-I\|_2\le\delta_h^2,\qquad \|B_h-D_m\|_2\le\frac{3m}{\lambda_1}\delta_h^2,$$
and every nonzero $w_h\in U_h$ satisfies
$$\frac{a(w_h,w_h)}{\|Jw_h\|_H^2} \le\lambda_m+C_m\delta_h^2, \qquad C_m:=2\lambda_m+\frac{6m\lambda_m^2}{\lambda_1}.$$

## Facts & Assumptions

**Given:** The compact coercive form data, the first $m$ normalized
eigenvectors, the conforming finite-dimensional space $V_h$, and the small
gap bound in the statement.

[F1] The vectors $Je_i$ form an $H$-orthonormal eigenbasis and
$a(v,v)\ge\lambda_1\|Jv\|_H^2$ for $v\in V$
([[thm-compact-coercive-form-spectrum-and-minmax]]).

[F2] The energy projection is orthogonal, is the best energy approximation,
and is injective on $E_m$ whenever $\delta_h<1$
([[lem-conforming-energy-projection-is-best-approximation]]).

[F3] $\delta_h$ is the supremum of the best energy error over the energy-unit
sphere of $E_m$ ([[def-eigenspace-best-approximation-gap]]).

## Proof
**Proof technique:** direct.

**Given:** $m$, $E_m$, $V_h$, $P_h$, $\delta_h$, and the continuous
eigenpairs $(\lambda_i,e_i)$ for $1\le i\le m$.

1.1 Put $\phi_i:=e_i/\sqrt{\lambda_i}$, $p_i:=P_h\phi_i$, and $r_i:=\phi_i-p_i$. By [F1], the $\phi_i$ are $a$-orthonormal. For any coefficient vector $c\in\mathbb K^m$, linearity of $P_h$ and [F2]–[F3] give $\left\|\sum_{i=1}^m c_i r_i\right\|_a =\left\|v-P_hv\right\|_a\le\delta_h\|v\|_a =\delta_h\|c\|_2,\qquad v:=\sum_{i=1}^m c_i\phi_i.$ In particular, the error Gram matrix $G_{ij}:=a(r_j,r_i)$ is positive semidefinite and $\|G\|_2\le\delta_h^2$. [F1, F2, F3, given, algebra]

2.1 Since each $r_i$ is energy-orthogonal to $V_h$, it is orthogonal to every $p_j$. Therefore the stiffness Gram matrix $(A_h)_{ij}:=a(p_j,p_i)$ satisfies $(A_h)_{ij}=a(\phi_j-r_j,\phi_i-r_i)=\delta_{ij}-G_{ij}.$ It follows that $\|A_h-I\|_2=\|G\|_2\le\delta_h^2$. [F2, step 1.1, algebra]

2.2 Let $b(u,v):=(Ju,Jv)_H$. The eigenrelation in [F1] gives $b(\phi_j,r_i)=a(r_j,r_i)/\lambda_j$ and $b(r_j,\phi_i)=a(r_j,r_i)/\lambda_i$; in each identity, the energy orthogonality of $r_i$ or $r_j$ removes the projected component. Also [F1] implies $\|Jr_i\|_H\le\|r_i\|_a/\sqrt{\lambda_1}$. Thus every entry of the mass Gram error $(B_h-D_m)_{ij}:=b(p_j,p_i)-b(\phi_j,\phi_i)$ has absolute value at most $3\delta_h^2/\lambda_1$. For an $m\times m$ matrix, its operator norm is at most $m$ times its largest absolute entry, so $\|B_h-D_m\|_2\le3m\delta_h^2/\lambda_1$. [F1, F2, step 1.1, algebra]

3.1 The least diagonal entry of $D_m$ is $1/\lambda_m$. The assumed bound on $\delta_h$ and step 2.2 therefore give $c^*B_hc\ge\left(\frac1{\lambda_m}-\frac{3m\delta_h^2}{\lambda_1}\right)\|c\|_2^2 \ge\frac1{2\lambda_m}\|c\|_2^2.$ In particular $B_h$ is positive definite and $P_h|_{E_m}$ has $m$-dimensional image $U_h$. [F2, step 2.2, given, algebra]

4.1 Normalize $\|c\|_2=1$. The continuous quotient of $v=\sum_i c_i\phi_i$ is $R(v)=1/(c^*D_mc)\le\lambda_m$ by [F1]. The quotient of $w_h=P_hv=\sum_i c_ip_i$ is $R_h(w_h)=c^*A_hc/(c^*B_hc)$. Steps 2.1 and 2.2–2.2 give $|R_h(w_h)-R(v)| \le\frac{\delta_h^2}{1/(2\lambda_m)} +\frac{3m\delta_h^2/\lambda_1}{(1/(2\lambda_m))(1/\lambda_m)} =C_m\delta_h^2.$ Thus $R_h(w_h)\le\lambda_m+C_m\delta_h^2$. Homogeneity removes the normalization of $c$, proving the bound for every nonzero $w_h\in U_h$. [F1, step 2.1, step 2.2, step 3.1, algebra] ∎
