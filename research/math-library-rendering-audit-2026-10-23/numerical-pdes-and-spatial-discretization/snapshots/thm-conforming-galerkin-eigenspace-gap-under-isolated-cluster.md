---
id: thm-conforming-galerkin-eigenspace-gap-under-isolated-cluster
kind: theorem
title: Conforming Galerkin invariant subspaces converge across an isolated cluster
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 6
deps:
  - def-countable-choice
  - def-eigenspace-best-approximation-gap
  - def-compact-linear-operator
  - def-operator-norm
  - thm-heine-borel-rn
  - lem-compact-self-adjoint-residual-controls-invariant-subspace-gap
  - lem-conforming-energy-projection-is-best-approximation
  - lem-finite-dimensional-galerkin-minmax
  - thm-compact-coercive-form-spectrum-and-minmax
  - thm-conforming-galerkin-eigenvalue-upper-bound-quadratic-gap-error
  - thm-riesz-representation-for-hilbert-space
  - thm-cauchy-schwarz-in-an-inner-product-space
  - lem-compactness-is-intrinsic
  - thm-compact-subset-is-closed-and-bounded
  - lem-closed-subset-of-a-compact-space-is-compact
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Bertrand Mercier, Topics in Finite Element Solution of Elliptic Problems, Chapter 8
      url: https://mathweb.tifr.res.in/Documents/Publications/Lectures/tifr63.pdf
      locator: "§§8.5–8.6, printed pp. 132–136: spectral projections, equal multiplicity, and eigenspace approximation."
    - title: Jean-Luc Guermond, MATH 661 Finite Element Methods, Fall 2025, Chapter 47
      url: https://people.tamu.edu/~guermond/M661_FALL_2025/chap47.pdf
      locator: "§47.2.3 and Remark 47.16, simple and multiple eigenvalues with invariant-subspace comparison."
verification: {judge: {model: "gpt-6-luna", verdict: pass, date: 2026-10-17}}
---

## Statement

Assume Countable Choice and the compact coercive form setting of
[[thm-compact-coercive-form-spectrum-and-minmax]]. Suppose a continuous
eigenvalue $\lambda$ occupies the isolated cluster of indices
$r,\ldots,s$, so $\lambda_r=\cdots=\lambda_s=\lambda$ and
$\lambda_{s+1}>\lambda$, with $\lambda_{r-1}<\lambda$ when $r>1$. Let
$E:=\operatorname{span}\{e_r,\ldots,e_s\}$,
$E_s:=\operatorname{span}\{e_1,\ldots,e_s\}$, and let
$V_h\subseteq V$ be conforming with $\dim V_h\ge s$. Put
$\delta_s:=\delta_a(E_s,V_h)$ using
[[def-eigenspace-best-approximation-gap]]. If $\delta_s$ is sufficiently
small that the eigenvalue theorem
[[thm-conforming-galerkin-eigenvalue-upper-bound-quadratic-gap-error]] applies
at index $s$ and, when $r>1$, at index $r-1$, and
$C_s\delta_s^2<\tfrac12(\lambda_{s+1}-\lambda)$ and, when $r>1$,
$C_{r-1}\delta_s^2<\tfrac12(\lambda-\lambda_{r-1})$, then
the discrete Ritz eigenspace $E_h$ associated with indices $r,\ldots,s$ has
dimension $s-r+1$ and
$$\delta_a(E,E_h)\le C_{r,s,\lambda}\,\delta_s.$$
This compares the invariant subspaces across the whole repeated eigenvalue;
it does not select individual eigenvectors inside the cluster.

## Facts & Assumptions

**Given:** Countable Choice, the compact coercive form pair $(V,H,a,J)$, the isolated repeated eigenvalue $\lambda$, the indices $r\le s$, the conforming finite-dimensional subspace $V_h$, and the small best-approximation gap $\delta_s$.

[F1] The continuous eigenvectors form an $H$-orthonormal basis and their energy-normalized versions form an $a$-orthonormal basis; the Ritz quotient has the continuous min–max principle ([[thm-compact-coercive-form-spectrum-and-minmax]]).

[F2] Discrete Ritz eigenvalues satisfy min–max, and the conforming eigenvalue theorem gives $\lambda_j\le\lambda_{h,j}\le\lambda_j+C_j\delta_j^2$ when $\delta_j$ is sufficiently small ([[lem-finite-dimensional-galerkin-minmax]], [[thm-conforming-galerkin-eigenvalue-upper-bound-quadratic-gap-error]]).

[F3] The energy projection $P_h$ is best approximation and is orthogonal ([[lem-conforming-energy-projection-is-best-approximation]]).

[F4] If a compact self-adjoint operator has a spectral cluster separated from its remaining spectrum by $\Delta>0$, an $\varepsilon$ residual on an invariant subspace bounds the directed subspace gap by $\varepsilon/\Delta$ ([[lem-compact-self-adjoint-residual-controls-invariant-subspace-gap]]).

[F5] On a Hilbert space, every bounded linear functional has a unique Riesz representative and the representative has the same norm as the functional ([[thm-riesz-representation-for-hilbert-space]], [[def-operator-norm]]); Cauchy--Schwarz holds for every real or complex inner product ([[thm-cauchy-schwarz-in-an-inner-product-space]]).

[F6] Orthogonality of the energy projection gives $\|P_hv\|_a^2+\|v-P_hv\|_a^2=\|v\|_a^2$, so $\|P_h\|\le1$. A bounded operator with range in the finite-dimensional space $V_h$ has a compact closure of its unit-ball image: choose a finite orthonormal basis of $V_h$ by finite Gram--Schmidt, use its real ($\mathbb R^d$ or $\mathbb R^{2d}$) coordinates, and apply Heine--Borel to the closed bounded coordinate closure. The inclusion of that compact set into $V$ is isometric; its ambient closure is a closed subset of this compact set and is compact. The compact-operator definition then gives compactness ([[lem-conforming-energy-projection-is-best-approximation]], [[def-compact-linear-operator]], [[thm-heine-borel-rn]], [[lem-compactness-is-intrinsic]], [[thm-compact-subset-is-closed-and-bounded]], [[lem-closed-subset-of-a-compact-space-is-compact]]).

## Proof
**Proof technique:** direct.

**Given:** The continuous eigenpairs $(\lambda_j,e_j)$, the isolated cluster $\lambda_r=\cdots=\lambda_s=\lambda$, $V_h$, and $\delta_s$.

1.1 Since $E_{r-1}\subseteq E_s$ when $r>1$, its directed best-approximation gap is at most $\delta_s$. Choose $\delta_s$ below the smallness thresholds for the upper eigenvalue theorem at $s$ and, if $r>1$, at $r-1$. At index $s$, [F2] gives $\lambda_{h,s}\le\lambda+C_s\delta_s^2$. For $r\le j\le s$, Ritz ordering gives $\lambda_{h,j}\le\lambda_{h,s}$, while the conforming lower bound in [F2] gives $\lambda_{h,j}\ge\lambda_j=\lambda$. Hence $\lambda\le\lambda_{h,j}\le\lambda+C_s\delta_s^2$. When $r>1$, Ritz ordering and the upper bound at $r-1$ give $\lambda_{h,j}\le\lambda_{r-1}+C_{r-1}\delta_s^2<\lambda-\tfrac12(\lambda-\lambda_{r-1})$ for $j<r$. For each discrete index $j>s$ that exists, [F2] gives $\lambda_{h,j}\ge\lambda_j\ge\lambda_{s+1}>\lambda$. Thus exactly the $s-r+1$ indexed Ritz eigenvalues in the cluster are separated from all other discrete Ritz eigenvalues. [F2, given, choose]

1.2 Boundedness and coercivity give $\alpha\|v\|_V^2\le a(v,v)\le M\|v\|_V^2$, so the energy norm is equivalent to the Hilbert norm of $V$ and $V$ is complete in the energy norm. Thus $(V,a)$ is a Hilbert space. For fixed $u$, the map $v\mapsto\overline{(Ju,Jv)_H}=(Jv,Ju)_H$ is a bounded linear functional on $(V,a)$. By [F5] there is a unique $Ku\in V$ with $a(v,Ku)=(Jv,Ju)_H$ for every $v$; conjugating gives $a(Ku,v)=(Ju,Jv)_H$. Uniqueness in this identity makes $K$ linear. If $C_J=\|J\|_{V\to H}$, then coercivity and Cauchy–Schwarz give $|a(Ku,v)|=|(Ju,Jv)_H|\le(C_J^2/\alpha)\|u\|_a\|v\|_a$. Taking the supremum over $\|v\|_a=1$ and using Riesz norm equality yields $\|Ku\|_a\le(C_J^2/\alpha)\|u\|_a$. Hermitian symmetry shows that $K$ is self-adjoint. The continuous eigenrelation in [F1] gives $Ke_j=\lambda_j^{-1}e_j$ and $K(e_j/\sqrt{\lambda_j})=\lambda_j^{-1}(e_j/\sqrt{\lambda_j})$. In particular, on $E$ the operator $K$ acts as $\mu I$ for $\mu:=1/\lambda$. [F1, F5, given, construct]

2.1 Let $P_h$ be the energy projection from [F3] and set $K_h:=P_hKP_h:V\to V$. It is self-adjoint because $P_h$ is an orthogonal projection and $K$ is self-adjoint. It is bounded as a composition of bounded operators, and its range lies in the finite-dimensional space $V_h$. To check compactness under the actual compact-closure definition, the image $K_h(\overline B_V)$ is bounded in $V_h$. Choose a finite $a$-orthonormal basis of $V_h$ by finite Gram--Schmidt and identify its real coordinates with $\mathbb R^d$ or $\mathbb R^{2d}$. The closure of this image in $V_h$ is closed and bounded in those coordinates, hence compact by Heine--Borel. Its inclusion into $V$ is isometric, so it is compact and closed in $V$; therefore the ambient closure of $K_h(\overline B_V)$ is a closed subset of this compact set and is compact. The compact-operator definition now makes $K_h$ compact [F6]. It is positive because $a(K_hu,u)=a(KP_hu,P_hu)=\|JP_hu\|_H^2\ge0$. For $u_h,v_h\in V_h$, $a(K_hu_h,v_h)=a(Ku_h,v_h)=(Ju_h,Jv_h)_H.$ If $K_hu_h=0$, taking $v_h=u_h$ gives $\|Ju_h\|_H^2=0$, so injectivity of $J$ gives $u_h=0$. Thus $K_h|_{V_h}$ is positive definite. Moreover, $K_hu_h=\mu_hu_h$ is equivalent by the displayed identity to $b(u_h,v_h)=\mu_h a(u_h,v_h)$ for every $v_h\in V_h$, the Ritz equation with $\lambda_{h,j}=1/\mu_h$. Conversely, the same identity and nondegeneracy of $a$ on $V_h$ show that every Ritz eigenvector is an eigenvector of $K_h$. Its positive eigenspaces are therefore exactly the conforming Ritz eigenspaces. Put $\mu:=1/\lambda$. If $r>1$, set $\gamma_-:=\lambda-\lambda_{r-1}$; set $\Delta_+:=1/\lambda-1/\lambda_{s+1}>0$. When $r>1$, put $\Delta_-:=1/(\lambda-\gamma_-/2)-1/\lambda>0$. Step 1.1 and smallness give a positive distance from $\mu$ to all eigenvalues outside the $r,\ldots,s$ Ritz cluster: lower-index reciprocal eigenvalues are at least $1/(\lambda-\gamma_-/2)$ when $r>1$, higher-index reciprocals are at most $1/\lambda_{s+1}$ when present, and zero is separated by $\mu$. Define $\Delta_{r,s,\lambda}:=\min\{\mu,\Delta_+\}$ if $r=1$ and $\Delta_{r,s,\lambda}:=\min\{\mu,\Delta_+,\Delta_-\}$ if $r>1$. The cluster subspace $E_h$ of $K_h$ has dimension $s-r+1$ and this positive spectral separation from its complement. [F2, F3, F5, F6, step 1.1, given, algebra]

3.1 For $u\in E$, the inclusion $E\subseteq E_s$ and [F3] give $\|P_hu-u\|_a\le\delta_s\|u\|_a$. Since $Ku=\mu u$, $K_hu-\mu u=P_hK(P_hu-u)+\mu(P_hu-u).$ The orthogonal projection $P_h$ has norm at most one, so $\|(K_h-\mu I)u\|_a\le(\|K\|+\mu)\delta_s\|u\|_a.$ The constant $\Delta_{r,s,\lambda}$ from step 2.1 is therefore independent of $\delta_s$ under the chosen smallness bound. [F1, F3, step 2.1, given, algebra]

4.1 Apply the residual subspace estimate [F4] to $K_h$, its separated cluster $E_h$, and the residual bound from step 3.1. It yields $\delta_a(E,E_h)\le \frac{\|K\|+\mu}{\Delta_{r,s,\lambda}}\,\delta_s,$ where $\Delta_{r,s,\lambda}>0$ is the uniform spectral separation obtained in step 2.1. This is the claimed invariant-subspace estimate, including the case of multiplicity greater than one. [F4, step 2.1, step 3.1, given, algebra] ∎
