---
id: thm-slater-strong-duality-and-dual-attainment
kind: theorem
title: Slater gives zero duality gap and an attained dual certificate
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - def-convex-program-duality-and-slater-condition
  - thm-lagrangian-weak-duality
  - thm-convex-value-function-support-at-relative-interior-domain-points
  - thm-convex-functions-on-open-convex-sets-are-locally-lipschitz
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: Boyd and Vandenberghe, Convex Optimization
      url: https://web.stanford.edu/~boyd/cvxbook/bv_cvxbook.pdf
      locator: Chapter 5, Sections 5.2.3 and 5.3.2, printed pp. 226–227 and 235–236; Slater zero gap, dual attainment, and the perturbation-value proof.
    - title: "Zhiyuan Li, Convex Optimization, Lecture 5: Lagrange Multipliers and KKT"
      url: https://zhiyuanli.ttic.edu/convex-optimization-site/Lecture-5___-Lagrange-Multipliers-and-KKT/
      locator: Theorem 5.3 and its full proof, including the relative-interior perturbation domain and computation of the dual objective.
---

## Statement

Consider the finite-dimensional convex program of
[[def-convex-program-duality-and-slater-condition]]. Assume its equality
matrix has independent rows, Slater's condition holds, and the finite primal
value $p^*\in\mathbb R$ is attained at $x_*$. Then there are
$\lambda_*\ge0$ and $\nu_*$ such that
$$q(\lambda_*,\nu_*)=d^*=p^*.$$
Moreover, every inequality multiplier satisfies
$\lambda_{*,i}g_i(x_*)=0$. The Slater and attainment hypotheses do not assert
that a primal minimizer is unique.

## Facts & Assumptions

**Given:** Proper closed convex data $f_0,g_i$, independent affine
equalities $Ax=b$, a Slater point, and an attained finite primal value.

[F1] The common domain, primal and dual values, relative-interior Slater
condition, and Lagrangian are defined in
[[def-convex-program-duality-and-slater-condition]].

[F2] Every dual feasible pair satisfies $q(\lambda,\nu)\le p^*$
([[thm-lagrangian-weak-duality]]).

[F3] A proper convex value function finite at a relative-interior domain
point has a supporting affine lower bound there
([[thm-convex-value-function-support-at-relative-interior-domain-points]]).

[F4] A finite convex function on an open convex set in finite dimensions is
continuous there ([[thm-convex-functions-on-open-convex-sets-are-locally-lipschitz]]).

## Proof

1.1 For perturbations $u\in\mathbb R^m$ and $v\in\mathbb R^p$, define $ P(u,v)=\inf\{f_0(x):x\in D,\ g_i(x)\le u_i\ (1\le i\le m),\ Ax-b=v\}. $ This value function is convex. Indeed, for two perturbations with finite values, choose feasible points with objective within $\epsilon$ of their respective infima. A convex combination of those points lies in $D$, its inequalities and equality residual are bounded by the same convex combination of perturbations, and convexity of $f_0$ bounds its objective. Letting $\epsilon\downarrow0$ proves the convex inequality. If one perturbation value is $-\infty$, arbitrarily low feasible objective values and the same convex-combination argument give value $-\infty$ at each strict convex combination with another feasible perturbation. [given, F1, construct]

1.2 Let $S=\operatorname{aff}D$ and $Y=A(S)-b$. Since the Slater point $x_s$ lies in every relative-interior domain, $x_s$ has a relative neighborhood in $S$ contained in $D$. Each $g_i$ is finite and convex on its domain and continuous near $x_s$ in its affine hull by [F4]; after intersecting finitely many neighborhoods, there are a relative neighborhood $U_s\subseteq D$ of $x_s$ and $\eta>0$ with $g_i(y)<-\eta$ on $U_s$ for every $i$ (take any $\eta>0$ if $m=0$). The affine map $y\mapsto Ay-b$ from $S$ onto $Y$ has a linear right inverse on its direction space: choose preimages of a finite basis of $Y$. Consequently, its image of $U_s$ contains a relative neighborhood $W$ of $0$ in $Y$. For every $v\in W$, choose the corresponding $y\in U_s$; for every $u\in\prod_i(-\eta,\infty)$, that $y$ satisfies $g_i(y)<u_i$ and $Ay-b=v$. Thus $P(u,v)<+\infty$ on a relative neighborhood of $0$ in $Z=\mathbb R^m\times Y$. [given, F1, F4, construct]

2.1 The value $P(0,0)=p^*$ is finite. The convexity from step 1.1 and the neighborhood from step 1.2 imply that $P$ never equals $-\infty$: if $P(z)=-\infty$ for some perturbation $z$, choose a small $\theta>0$ so $-\theta z/(1-\theta)$ lies in that neighborhood. Convexity would give $P(0)\le\theta P(z)+(1-\theta)P(-\theta z/(1-\theta))=-\infty$, contrary to finiteness. Hence $P$ is proper and $0\in\operatorname{ri}(\operatorname{dom}P)$ relative to $Z$. By [F3] there is a linear functional $\ell(u,v)=a^Tu+c(v)$ on $Z$ such that $P(u,v)\ge p^*+a^Tu+c(v)$. [F1, F3, step 1.1, step 1.2, algebra]

3.1 Relaxing one inequality right-hand side cannot increase the infimum, so $P(te_i,0)\le P(0,0)=p^*$ for small $t>0$. The support inequality in step 2.1 gives $P(te_i,0)\ge p^*+t a_i$, hence $a_i\le0$. Define $\lambda_*=-a\ge0$ and extend $c$ from the finite-dimensional subspace $Y$ to a linear functional on $\mathbb R^p$ by extending a basis; write the negative of this extension as $\nu_*^T$. For any $x\in D$, the perturbation $(g(x),Ax-b)$ is feasible using $x$ itself, so $ f_0(x)\ge P(g(x),Ax-b)\ge p^*+a^Tg(x)+c(Ax-b). $ Thus $L(x,\lambda_*,\nu_*)\ge p^*$ for all $x$, and $q(\lambda_*,\nu_*)\ge p^*$. [F1, step 2.1, algebra, construct]

4.1 At the primal minimizer, weak duality [F2] and feasibility give $ p^*\le q(\lambda_*,\nu_*)\le L(x_*,\lambda_*,\nu_*)= p^*+\sum_i\lambda_{*,i}g_i(x_*)\le p^*. $ Every inequality is therefore equality. Since every summand $\lambda_{*,i}g_i(x_*)$ is nonpositive, their sum being zero forces each one to be zero. Thus $q(\lambda_*,\nu_*)=p^*=d^*$, the dual supremum is attained, and complementarity holds. [F1, F2, step 3.1, given, algebra] ∎
