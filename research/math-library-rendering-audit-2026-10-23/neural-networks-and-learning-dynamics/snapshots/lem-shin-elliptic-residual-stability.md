---
id: lem-shin-elliptic-residual-stability
kind: lemma
title: "Elliptic residual and boundary stability from a maximum principle"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 1
deps: [def-shin-elliptic-divergence-form-operator]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: n/a
sources:
  references:
    - title: "Shin, Darbon, and Karniadakis, On the Convergence of Physics-Informed Neural Networks for Linear Second-Order Elliptic and Parabolic Type PDEs"
      url: "https://arxiv.org/pdf/2004.01806"
      locator: "Appendix D, Lemma D.2; source estimate (3.8)"
---

## Statement

Let $U\subset\mathbb R^d$ be bounded and open, and let
$$L[u]=\sum_{i,j=1}^d a_{ij}D_iD_j u+\sum_{j=1}^d\widetilde b_jD_j u+\widetilde c\,u$$
on $U$, where $a(x)$ is symmetric, $\xi^Ta(x)\xi\ge\lambda_0|\xi|^2$ for all $x\in U$ and $\xi\in\mathbb R^d$ with $\lambda_0>0$, the coefficients are continuous and bounded, and $\widetilde c\le0$. There is a constant $C_L<\infty$, depending only on $U$, $\lambda_0$, and the coefficient bounds, such that every $w\in C^2(U)\cap C^0(\bar U)$ with $L[w]\in C^0(U)$ satisfies
$$\|w\|_{C^0(U)}\le C_L\left(\|L[w]\|_{C^0(U)}+\|w\|_{C^0(\partial U)}\right).$$
In particular, for any two functions $u^*,h\in C^2(U)\cap C^0(\bar U)$,
$$\|u^*-h\|_{C^0(U)}\le C_L\left(\|L[u^*]-L[h]\|_{C^0(U)}+\|u^*-h\|_{C^0(\partial U)}\right).$$

## Statement references
[Shin et al., Appendix D, Lemma D.2: residual and boundary stability estimate](https://arxiv.org/pdf/2004.01806)

[Shin et al., Appendix D, Lemma D.2: the stability interface that this barrier proof reconstructs](https://arxiv.org/pdf/2004.01806)

## Facts & Assumptions

**Given:** The bounded domain, uniformly elliptic coefficient matrix, bounded lower-order coefficients with $\widetilde c\le0$, and $w\in C^2(U)\cap C^0(\bar U)$.

[F1] The operator expands with the positive principal part and zero-order coefficient shown in [[def-shin-elliptic-divergence-form-operator]].

[F2] A continuous function on the compact set $\bar U$ attains its maximum; a $C^2$ function at an interior maximum has zero gradient and negative-semidefinite Hessian.

## Proof

**Proof strategy:** construct a strict positive barrier and apply the weak maximum principle by perturbation.

1.1 Since $U$ is bounded, choose real numbers $a_1<b_1$ with $a_1\le x_1\le b_1$ on $\bar U$. Let $B=\|\widetilde b_1\|_{C^0(U)}$ and $C_0=\|\widetilde c\|_{C^0(U)}$. Choose $\kappa>0$ large enough that $\kappa^2\lambda_0-\kappa B-C_0\ge1$. For $\psi(x)=e^{\kappa x_1}$, [F1] gives $$L[\psi](x)=e^{\kappa x_1}\bigl(\kappa^2a_{11}(x)+\kappa\widetilde b_1(x)+\widetilde c(x)\bigr)\ge e^{\kappa a_1}>0.$$ Choose $M>e^{\kappa b_1}$ and set $\Phi=M-\psi$. Then $\Phi>0$ on $\bar U$ and $L[\Phi]=M\widetilde c-L[\psi]\le-e^{\kappa a_1}$. [given, F1, algebra, choose]

2.1 Put $R=\|L[w]\|_{C^0(U)}$, $Q=\|w\|_{C^0(\partial U)}$, and $\eta=e^{\kappa a_1}$. For $z=w-Q-(R/\eta)\Phi$, the boundary values satisfy $z\le0$. In $U$, $$L[z]=L[w]-Q\widetilde c-(R/\eta)L[\Phi]\ge -R+R=0,$$ because $-Q\widetilde c\ge0$. [given, step 1.1, algebra]

3.1 Suppose $z(x_0)>0$ at some $x_0\in U$. Since $z\le0$ on $\partial U$ and $z$ is continuous on $\bar U$, its positive maximum is attained at an interior point. For sufficiently small $\delta>0$, $z+\delta\psi$ has an interior positive maximum as well: its value at $x_0$ is at least $z(x_0)>0$, while its boundary values are at most $\delta e^{\kappa b_1}<z(x_0)$. At that interior maximum [F2] and $\widetilde c\le0$ give $L[z+\delta\psi]\le0$, contradicting $L[z+\delta\psi]>0$. Hence $z\le0$ on $U$, and therefore $$w\le Q+(R/\eta)\|\Phi\|_{C^0(\bar U)}.$$ Applying the same argument to $-w$ yields the corresponding lower bound. Taking $C_L=\max\{1,\|\Phi\|_{C^0(\bar U)}/\eta\}$ proves the first estimate; applying it to $u^*-h$ proves the second. [step 2.1, F2, algebra] ∎

