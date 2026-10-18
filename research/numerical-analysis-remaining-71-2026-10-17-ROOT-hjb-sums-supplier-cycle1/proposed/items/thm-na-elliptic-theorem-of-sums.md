---
id: thm-na-elliptic-theorem-of-sums
kind: theorem
title: Elliptic theorem of sums with the full block matrix bound
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
deps: ["def-axiom-of-choice", "def-na-second-order-elliptic-semijets-and-closure", "lem-na-jensen-maximum-principle-semiconvex", "lem-na-sup-convolution-semiconvexity-and-jet-transfer", "thm-na-semiconvex-alexandrov-second-order-differentiability", "lem-symmetric-matrix-operator-norm-rayleigh", "cor-bolzano-weierstrass-in-rn"]
justified_by: []
aliases: []
proof_strategy: direct
axiom_base: Assume the Axiom of Choice; its exact uses are identified in the proof and inherited supplier contracts.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Crandall, Ishii and Lions, User's guide to viscosity solutions of second order partial differential equations"
      url: https://arxiv.org/pdf/math/9207212
      locator: "Sections 2–3 and Appendix A, printed pp. 9–18 and 56–63."
---

## Statement

Assume the Axiom of Choice. Let $k\ge1$, $n_i\ge1$, let $U_i\subseteq\mathbb R^{n_i}$ be open, and let $u_i:U_i\to\mathbb R$ be upper semicontinuous. Suppose $\phi$ is $C^2$ near $z=(z_1,\ldots,z_k)\in\prod_iU_i$ and $\sum_i u_i(x_i)-\phi(x)$ has a local maximum at $z$. Set $A=D^2\phi(z)$, and let $\|A\|$ be its Euclidean operator norm. For every $\varepsilon>0$ there are $X_i\in\mathbb S^{n_i}$ such that
$$(D_i\phi(z),X_i)\in\overline J^{2,+}u_i(z_i),$$
and
$$-\left(\varepsilon^{-1}+\|A\|\right)I\ \le\ \operatorname{diag}(X_1,\ldots,X_k)\ \le\ A+\varepsilon A^2.$$
Here all jets are full Euclidean jets. In particular one may take each $U_i$ to be a space-time domain of dimension $d+1$. For a lower semicontinuous function $v$, applying the theorem to $-v$ and then negating its jet gives the corresponding closed subjet for $v$.

## Facts & Assumptions

**Given:** The data of the Statement and [[def-axiom-of-choice]].

[F1] Jets and their value-sensitive closures are defined in [[def-na-second-order-elliptic-semijets-and-closure]].

[F2] Quadratic sup convolutions of compactly restricted upper semicontinuous functions are continuous and semiconvex; an upper jet $(q,Y)$ at $\eta$ transfers, without changing $Y$, to the original function at $\eta+q/\lambda$, with original value $\widehat v(\eta)+|q|^2/(2\lambda)$ ([[lem-na-sup-convolution-semiconvexity-and-jet-transfer]]).

[F3] A finite locally semiconvex function has a second-order Peano expansion outside a Lebesgue null set, under AC ([[thm-na-semiconvex-alexandrov-second-order-differentiability]]). At a strict maximum the maximum can be perturbed by an arbitrarily small affine term to occur arbitrarily close to that point outside any specified null set ([[lem-na-jensen-maximum-principle-semiconvex]]).

[F4] For symmetric $A$, $|h^{\mathsf T}Ah|\le\|A\||h|^2$ ([[lem-symmetric-matrix-operator-norm-rayleigh]]). Every bounded finite-dimensional sequence has a convergent subsequence ([[cor-bolzano-weierstrass-in-rn]]).

## Proof

1.1 First prove a quadratic, compactly localized case. Translate to $z=0$, subtract $u_i(0)$ and the affine functions $D_i\phi(0)\cdot x_i$, and suppose that $u_i(0)=0$ and, on a product of compact neighborhoods $K_i$ of zero,
$$w(x):=\sum_i u_i(x_i)\le\tfrac12 x^{\mathsf T}Ax.$$
Extend each restriction by $-\infty$ off $K_i$. Put $\lambda=\varepsilon^{-1}+\|A\|>0$ and $B=A+\varepsilon A^2$. For $h=x-\xi$, expanding $x^{\mathsf T}Ax$ and using $2h\cdot A\xi\le\varepsilon^{-1}|h|^2+\varepsilon|A\xi|^2$ (the nonnegativity of $|\varepsilon^{-1/2}h-\varepsilon^{1/2}A\xi|^2$) gives
$$x^{\mathsf T}Ax\le\xi^{\mathsf T}B\xi+\lambda|x-\xi|^2.$$
Define $\widehat u_i$ by [F2] and $f(\xi)=\sum_i\widehat u_i(\xi_i)$. Maximization separates over the finite compact product, so $f(\xi)=\sup_x\{w(x)-\lambda|x-\xi|^2/2\}\le\xi^{\mathsf T}B\xi/2$. Since every $\widehat u_i(0)\ge u_i(0)=0$, equality holds at zero and each $\widehat u_i(0)=0$. Also $f+\lambda|\xi|^2/2$ is convex. [F2, F4, algebra, construct]

1.2 The function $F(\xi)=f(\xi)-\xi^{\mathsf T}B\xi/2-|\xi|^4$ has a strict maximum at zero. It is locally semiconvex: on any fixed ball the Hessian of the subtracted polynomial is bounded in norm, so adding a sufficiently large quadratic makes its negative convex; along each segment this follows by integrating its nonnegative second derivative. Use [F3] with the exceptional null set where $f$ lacks a Peano expansion. For every $n$ obtain $\xi_n,q_n$ with $|\xi_n|<1/n$, $|q_n|\le1/n$, such that $F+q_n\cdot\xi$ has a local maximum at $\xi_n$ and $f$ has expansion $(p_n,Z_n)$ there. Restricting this expansion to lines and using the local maximum shows
$$p_n=B\xi_n+4|\xi_n|^2\xi_n-q_n,\qquad Z_n\le B+8\xi_n\xi_n^{\mathsf T}+4|\xi_n|^2I.$$
Convexity of $f+\lambda|\xi|^2/2$ and symmetric increments imply $Z_n\ge-\lambda I$. Thus $p_n\to0$ and $Z_n$ is bounded. AC is used to select these countably many perturbations, and [F3] inherits the explicit AC cost of its differentiability supplier. [step 1.1, F3, algebra, choose]

1.3 Separability makes $Z_n$ block diagonal. Indeed, restriction to the $i$th coordinate gives an expansion of $\widehat u_i$ at $\xi_{n,i}$ with gradient $p_{n,i}$ and diagonal Hessian block $Z_{n,ii}$. Summing these individual expansions gives a second expansion of $f$ with Hessian $\operatorname{diag}(Z_{n,11},\ldots,Z_{n,kk})$. Uniqueness of a quadratic expansion follows by substituting $h=te$ for each direction $e$: a quadratic form which is $o(|h|^2)$ vanishes on all directions and hence is zero by polarization. Therefore the two Hessians agree. Set $X_{n,i}=Z_{n,ii}$. Apply [F2] to these upper jets to obtain points $y_{n,i}=\xi_{n,i}+p_{n,i}/\lambda$ and
$$(p_{n,i},X_{n,i})\in J^{2,+}u_i(y_{n,i}),\qquad u_i(y_{n,i})=\widehat u_i(\xi_{n,i})+\frac{|p_{n,i}|^2}{2\lambda}.$$
The points tend to zero, so eventually lie in the interior of $K_i$ and the jets are those of the original functions. Continuity of $\widehat u_i$ gives $u_i(y_{n,i})\to0=u_i(0)$. [step 1.1, step 1.2, F1, F2, algebra]

1.4 Extract a single subsequence along which the finitely many matrix entries of $Z_n$ converge to $Z=\operatorname{diag}(X_i)$ using [F4]. The bounds in step 1.2 pass to the limit as quadratic-form inequalities, giving $-\lambda I\le Z\le B$. The convergent jets and values in step 1.3 imply $(0,X_i)\in\overline J^{2,+}u_i(0)$ for every $i$. This proves the localized quadratic case. [step 1.2, step 1.3, F1, F4, algebra]

2.1 For the general case perform the same translations and affine subtractions. Taylor's formula gives $\phi(x)=x^{\mathsf T}Ax/2+o(|x|^2)$ after its constant and linear parts are removed. For each $\eta>0$ sufficiently small there is a product of compact neighborhoods $K_i^\eta$ on which $\sum_i u_i(x_i)\le x^{\mathsf T}(A+\eta I)x/2$. Apply the quadratic case with $A_\eta=A+\eta I$ and the same fixed $\varepsilon$. It gives closed jets $(0,X_i^\eta)$ and the bounds
$$-(\varepsilon^{-1}+\|A_\eta\|)I\le\operatorname{diag}(X_i^\eta)\le A_\eta+\varepsilon A_\eta^2.$$
Localization causes no change in these closed jets: approximating points converge to zero, which is interior to each $K_i^\eta$, and original and restricted functions agree there. [step 1.4, F1, algebra]

2.2 Take $\eta=1/n$ and use [F4] to extract a convergent subsequence of the resulting finite block matrices. Its limit satisfies the desired bounds because $\|A+\eta I\|\to\|A\|$ by the operator-norm triangle inequality. Closed jets are closed also under limits of their matrix entries at a fixed base point with fixed gradient: for the $n$th closed jet, choose an actual approximating jet with point, value, gradient and matrix each within $1/n$ of that closed-jet data. These choices are allowed by AC and the defining convergence in [F1]; the resulting diagonal sequence converges to the limiting matrix and original base value. Restore the subtracted affine functions to recover $D_i\phi(z)$ as the exact gradient. This gives all the asserted inequalities and memberships. The sign reversal for a lower semicontinuous $v$ is exactly the subjet definition. [step 2.1, F1, F4, given, choose, algebra] ∎
