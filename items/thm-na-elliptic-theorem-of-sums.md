---
id: thm-na-elliptic-theorem-of-sums
kind: theorem
title: Elliptic theorem of sums with the full block matrix bound
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
deps:
  [
    "def-axiom-of-choice",
    "def-na-second-order-elliptic-semijets-and-closure",
    "lem-na-jensen-maximum-principle-semiconvex",
    "lem-na-sup-convolution-semiconvexity-and-jet-transfer",
    "thm-na-semiconvex-alexandrov-second-order-differentiability",
    "lem-symmetric-matrix-operator-norm-rayleigh",
    "def-operator-norm-on-a-finite-dimensional-inner-product-space",
    "cor-bolzano-weierstrass-in-rn"
  ]
justified_by: []
aliases: []
proof_strategy: direct
axiom_base: Assume the Axiom of Choice; its exact uses are identified in the
  proof and inherited supplier contracts.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Crandall, Ishii and Lions, User's guide to viscosity solutions of second
        order partial differential equations"
      url: https://arxiv.org/pdf/math/9207212
      locator: "Sections 2–3 and Appendix A, printed pp. 9–18 and 56–63."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Statement

Assume the Axiom of Choice. Let $k\ge1$, $n_i\ge1$, let $U_i\subseteq\mathbb R^{n_i}$ be open, and let $u_i:U_i\to\mathbb R$ be upper semicontinuous, meaning $\limsup_{y\to x}u_i(y)\le u_i(x)$ at each $x\in U_i$. Suppose $\phi$ is $C^2$ near $z=(z_1,\ldots,z_k)\in\prod_iU_i$ and $\sum_i u_i(x_i)-\phi(x)$ has a local maximum at $z$. Set $A=D^2\phi(z)$, and let $\|A\|$ be its Euclidean operator norm ([[def-operator-norm-on-a-finite-dimensional-inner-product-space]]). For every $\varepsilon>0$ there are $X_i\in\mathbb S^{n_i}$ such that
$$(D_i\phi(z),X_i)\in\overline J^{2,+}u_i(z_i),$$
and
$$-\left(\varepsilon^{-1}+\|A\|\right)I\ \le\ \operatorname{diag}(X_1,\ldots,X_k)\ \le\ A+\varepsilon A^2.$$
Here all jets are full Euclidean jets. In particular one may take each $U_i$ to be a space-time domain of dimension $d+1$. For a lower semicontinuous function $v$, applying the theorem to $-v$ and then negating its jet gives the corresponding closed subjet for $v$.

## Facts & Assumptions

**Given:** The data of the Statement and [[def-axiom-of-choice]].

[A1] Every family of nonempty sets has a choice function ([[def-axiom-of-choice]]).

[F1] Jets and their value-sensitive closures are defined in [[def-na-second-order-elliptic-semijets-and-closure]].

[F2] Quadratic sup convolutions of compactly restricted upper semicontinuous functions are continuous and semiconvex; an upper jet $(q,Y)$ at $\eta$ transfers, without changing $Y$, to the original function at $\eta+q/\lambda$, with original value $\widehat v(\eta)+|q|^2/(2\lambda)$ ([[lem-na-sup-convolution-semiconvexity-and-jet-transfer]]).

[F3] A finite locally semiconvex function has a second-order Peano expansion outside a Lebesgue null set, under AC ([[thm-na-semiconvex-alexandrov-second-order-differentiability]]). At a strict maximum the maximum can be perturbed by an arbitrarily small affine term to occur arbitrarily close to that point outside any specified null set ([[lem-na-jensen-maximum-principle-semiconvex]]).

[F4] For symmetric $A$, $|h^{\mathsf T}Ah|\le\|A\||h|^2$ ([[lem-symmetric-matrix-operator-norm-rayleigh]]). Every bounded finite-dimensional sequence has a convergent subsequence ([[cor-bolzano-weierstrass-in-rn]]).

## Proof

1.1 First prove the quadratic compactly localized case. Translate to $z=0$, subtract $u_i(0)$ and the affine terms $D_i\phi(0)\cdot x_i$, and suppose $u_i(0)=0$ and $w(x):=\sum_i u_i(x_i)\le x^{\mathsf T}Ax/2$ on compact neighborhoods $K_i$ of zero. Extend the restrictions by $-\infty$ off $K_i$, set $\lambda=\varepsilon^{-1}+\|A\|>0$ and $B=A+\varepsilon A^2$, and write $h=x-\xi$. The identity $|\varepsilon^{-1/2}h-\varepsilon^{1/2}A\xi|^2\ge0$ gives $x^{\mathsf T}Ax\le\xi^{\mathsf T}B\xi+\lambda|x-\xi|^2$. Define $\widehat u_i$ by [F2] and $f(\xi)=\sum_i\widehat u_i(\xi_i)$. The supremum separates over the finite compact product, so $f(\xi)=\sup_x\{w(x)-\lambda|x-\xi|^2/2\}\le\xi^{\mathsf T}B\xi/2$. Each $\widehat u_i(0)\ge0$, while $f(0)\le0$, so all are zero; also $f+\lambda|\xi|^2/2$ is convex. [F2, F4, algebra, construct]

2.1 The function $F(\xi)=f(\xi)-\xi^{\mathsf T}B\xi/2-|\xi|^4$ has a strict maximum at zero and is locally semiconvex, since the Hessian of the subtracted polynomial is bounded on every fixed ball. Apply [F3] outside the null set where $f$ lacks a Peano expansion: for each $n$, [A1] selects $|\xi_n|<1/n$, $|q_n|\le1/n$ so $F+q_n\cdot\xi$ has a local maximum at $\xi_n$ and $f$ has expansion $(p_n,Z_n)$ there. Restricting to lines gives $p_n=B\xi_n+4|\xi_n|^2\xi_n-q_n$ and $Z_n\le B+8\xi_n\xi_n^{\mathsf T}+4|\xi_n|^2I$; convexity of $f+\lambda|\xi|^2/2$ gives $Z_n\ge-\lambda I$. Thus $p_n\to0$ and $Z_n$ is bounded. AC supplies the countable selections and is inherited from [F3]. [A1, step 1.1, F3, algebra, choose]

3.1 Separability makes $Z_n$ block diagonal: each coordinate restriction gives the corresponding Peano expansion of $\widehat u_i$, and summing those expansions gives a second expansion of $f$ with Hessian $\operatorname{diag}(Z_{n,11},\ldots,Z_{n,kk})$. Uniqueness follows because a quadratic form that is $o(|h|^2)$ vanishes on every direction and hence by polarization. Set $X_{n,i}=Z_{n,ii}$. The transfer in [F2] gives $y_{n,i}=\xi_{n,i}+p_{n,i}/\lambda$, $(p_{n,i},X_{n,i})\in J^{2,+}u_i(y_{n,i})$, and $u_i(y_{n,i})=\widehat u_i(\xi_{n,i})+|p_{n,i}|^2/(2\lambda)$. Since $y_{n,i}\to0$, they eventually lie inside $K_i$; continuity of $\widehat u_i$ gives $u_i(y_{n,i})\to0=u_i(0)$. [step 1.1, step 2.1, F1, F2, algebra]

4.1 By [F4], extract one subsequence along which the finitely many entries of $Z_n$ converge to $Z=\operatorname{diag}(X_i)$. The inequalities in step 2.1 pass to the limit, giving $-\lambda I\le Z\le B$. The convergent jets and values from step 3.1 imply $(0,X_i)\in\overline J^{2,+}u_i(0)$ by [F1]; this proves the localized quadratic case. [step 2.1, step 3.1, F1, F4, algebra]

5.1 For the general case, translate and subtract affine functions as above. Taylor's formula gives $\phi(x)=x^{\mathsf T}Ax/2+o(|x|^2)$, so for every sufficiently small $\eta>0$ there are compact neighborhoods $K_i^\eta$ with $\sum_i u_i(x_i)\le x^{\mathsf T}(A+\eta I)x/2$. Apply the quadratic case from step 4.1 with $A_\eta=A+\eta I$; it gives closed jets $(0,X_i^\eta)$ with $-(\varepsilon^{-1}+\|A_\eta\|)I\le\operatorname{diag}(X_i^\eta)\le A_\eta+\varepsilon A_\eta^2$. Because zero is interior to each $K_i^\eta$, localization does not change these closed jets. [step 4.1, F1, algebra]

6.1 Take $\eta_n=1/n$ and, by [A1], choose for each sufficiently large $n$ one tuple of closed-jet matrices supplied by step 5.1. Use [F4] to extract a convergent subsequence of these block matrices. The limit obeys the required bounds because $\|A+\eta I\|\to\|A\|$. For each closed jet $(0,X_i^\eta)$, [A1] selects an actual approximating jet with point, value, gradient, and matrix within $1/n$; the defining value-sensitive closure [F1] then gives the limiting closed jet. Restoring the subtracted affine terms gives gradient $D_i\phi(z)$, and negating jets proves the lower-semicontinuous version. [A1, step 5.1, F1, F4, given, choose, algebra] ∎
