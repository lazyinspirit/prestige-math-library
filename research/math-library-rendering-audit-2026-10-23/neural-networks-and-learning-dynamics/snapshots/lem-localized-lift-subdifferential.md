---
id: lem-localized-lift-subdifferential
kind: lemma
title: The localized lifted subdifferential is a pointwise constrained subdifferential
status: published
dependency_level: 3
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
deps: [def-localized-hilbert-lift, lem-lifted-energy-lipschitz-gradient, def-axiom-of-choice, def-countable-choice, thm-choice-implies-dependent-implies-countable-choice, def-feature-measure-energy, thm-fatou-lemma, thm-tonelli-theorem-for-sigma-finite-product-spaces, cor-convex-functions-on-open-convex-sets-are-continuous]
justified_by: []
proof_strategy: direct
axiom_use: "AC supplies the label-space representatives and the finite-dimensional measurable-minimum section; the latter is obtained as a limit of continuous resolvents."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Luigi Ambrosio, Gigli, and Giuseppe Savaré, Gradient Flows in Metric Spaces and in the Space of Probability Measures"
      url: "https://www2.stat.duke.edu/~sayan/ambrosio.pdf"
    - title: "Lénaïc Chizat and Francis Bach, On the Global Convergence of Gradient Descent for Over-parameterized Models using Optimal Transport"
      url: "https://arxiv.org/pdf/1805.09545"
---
## Statement

Assume AC and the hypotheses of the feature-measure energy definition. Fix any probability label space $(S,\Sigma,\sigma)$ and use the localized lift $E_r$ on $K=L^2(\sigma;\mathbb R^d)$. Separability of $K$ is not assumed or needed for the subdifferential formula and minimum-section conclusion. For a semiconvex functional $J:K\to(-\infty,+\infty]$ with coefficient $\alpha$, define
$$\partial_\alpha J(X)=\{\eta\in K:J(Y)\ge J(X)+\langle\eta,Y-X\rangle_K+\tfrac{\alpha}{2}\|Y-X\|_K^2\text{ for all }Y\in K\}.$$
The set $C_r$ is closed and convex, and $E_r$ is proper, lower semicontinuous, and lower bounded. Write $A_r=\sup_{Q_r}\|d\Phi\|$, $B_r=\operatorname{Lip}_{Q_r}(d\Phi)$, $M_r=\sup_{Q_r}\|\partial V\|$ in the bounded-selection convention, and let $L_r,N_r$ bound the Lipschitz constant and norm of $dR$ on the closed convex hull of $\Phi(Q_r)$. Let $C_r^{\rm sm}=L_rA_r^2+N_rB_r$ and $\lambda_E=\lambda_V-C_r^{\rm sm}$. For $X\in C_r$, its Hilbert subdifferential with coefficient $\lambda_E$ is exactly
$$\partial_{\lambda_E} E_r(X)=\left\{s\mapsto d\Phi_{X(s)}^*\nabla R\!\left(\int\Phi(X)d\sigma\right)+\zeta(s):\ \zeta\in K,\ \zeta(s)\in\partial_{\lambda_V}(V+\iota_{Q_r})(X(s))\text{ for }\sigma\text{-almost every }s\right\}.$$
The pointwise minimum-norm selection $u\mapsto\operatorname{argmin}\{|z|:z\in\partial_{\lambda_V}(V+\iota_{Q_r})(u)\}$ is Borel on $Q_r$ and has norm at most $M_r$; hence its composition with any $X\in C_r$ is a measurable member of $K$. More generally, for $a\in\mathcal H$ put $b_a(u)=d\Phi_u^*a$ and $S(a,u)=\operatorname{argmin}\{|z|:z\in b_a(u)+\partial_{\lambda_V}(V+\iota_{Q_r})(u)\}$. This full shifted minimum is jointly Borel in $(a,u)$, has $|S(a,u)|\le A_r\|a\|+M_r$, and the minimum-norm element of $\partial_{\lambda_E}E_r(X)$ is exactly $s\mapsto S(\nabla R(\int\Phi(X)d\sigma),X(s))$. It is generally different from the smooth gradient plus the minimum of the potential subdifferential alone.

## Statement references

[[def-feature-measure-energy]]

[[def-localized-hilbert-lift]]

[[lem-lifted-energy-lipschitz-gradient]]

[Ambrosio, Gigli, and Savaré, Proposition 10.4.2](https://www2.stat.duke.edu/~sayan/ambrosio.pdf)

[Chizat and Bach, Appendix B.2.1](https://arxiv.org/pdf/1805.09545)

## Facts & Assumptions

**Given:** AC and the localized lift and hypotheses above.

[F1] The smooth lifted term has the displayed gradient and a quadratic Taylor remainder bounded by its gradient-Lipschitz constant. [[lem-lifted-energy-lipschitz-gradient]]

[F2] For each $u\in Q_r$, $\partial_{\lambda_V}V(u)$ contains a vector of norm at most $M_r$. Such a vector also belongs to $\partial_{\lambda_V}(V+\iota_{Q_r})(u)$, so the constrained subdifferential is nonempty, closed, and convex; it need not be bounded because it can contain normal-cone vectors. [[def-feature-measure-energy]]

[F3] AC supplies Countable Choice for representatives and countable dense tests. [[def-axiom-of-choice]] [[thm-choice-implies-dependent-implies-countable-choice]] [[def-countable-choice]]

[F4] Fatou's lemma passes pointwise lower bounds for the nonnegative potential through almost-everywhere limits. [[thm-fatou-lemma]]

[F5] A nonempty convex subset of $\mathbb R^d$ has nonempty relative interior (the barycenter of a maximal affinely independent finite subset lies in it), and a finite convex function is continuous on that relative interior in its affine hull. [[cor-convex-functions-on-open-convex-sets-are-continuous]]

[F6] Tonelli's theorem permits integration of a nonnegative countable sum by summing its integrals. [[thm-tonelli-theorem-for-sigma-finite-product-spaces]]

## Proof


**Given:** AC, $r,\sigma$ and $X\in C_r$.

1.1 The set $C_r$ is convex because $Q_r$ is convex. To show it is closed, take $X_n\in C_r$ with $X_n\to X$ in $K$. Countable Choice [F3] gives a subsequence with $\|X_{n_k}-X\|_K^2\le2^{-k}$ and strongly measurable representatives; discard their countably many exceptional null sets. Tonelli [F6] implies $\sum_k|X_{n_k}(s)-X(s)|^2<\infty$ for almost every $s$, so $X_{n_k}(s)\to X(s)$ there; closedness of $Q_r$ gives $X\in C_r$. For lower semicontinuity of $E_r$, consider a sequence with finite energy liminf and pass to a subsequence of finite energies, so every term lies in $C_r$ and its limit lies there by the closure just proved. For any $u\in Q_r$, a vector $\zeta\in\partial_{\lambda_V}V(u)$ supplied by [F2] gives $V(y)\ge V(u)+\zeta\cdot(y-u)+\frac{\lambda_V}{2}|y-u|^2$ for $y\in\Omega$, proving lower semicontinuity of $V$ at $u$. Fatou [F4] makes the potential integral lower semicontinuous along this sequence, and the smooth term is continuous by [F1]. A constant $Q_r$-valued function has finite energy because $Q_r$ is nonempty and $\Phi,V$ are bounded on it, while $R,V\ge0$ make $E_r$ bounded below. Thus $E_r$ is proper, lower semicontinuous, and lower bounded. [F1, F2, F3, F4, F6, construct]

1.2 Let $f=V+\iota_{Q_r}$. Since every point of $Q_r$ has a subgradient by [F2], the supporting inequality implies that $f$ is lower semicontinuous at every point of $Q_r$. The function $g(u)=f(u)-\frac{\lambda_V}{2}|u|^2$ is proper, lower semicontinuous and convex, with $\partial g(u)=\partial_{\lambda_V}f(u)-\lambda_Vu$. For $\varepsilon>0$ small enough that $1+\varepsilon\lambda_V>0$, minimize $f(y)+|x-y|^2/(2\varepsilon)$. This is strongly convex and coercive, so it has a unique minimizer $J_\varepsilon x$. Its optimality inequality says $z_\varepsilon(x)=(x-J_\varepsilon x)/\varepsilon\in\partial_{\lambda_V}f(J_\varepsilon x)$; this follows by testing minimality at $(1-h)J_\varepsilon x+hy$, using semiconvexity of $f$, dividing by $h$, and letting $h\downarrow0$. Comparing the two optimality inequalities at $x$ and $x'$ and adding gives $\|J_\varepsilon x-J_\varepsilon x'\|\le(1+\varepsilon\lambda_V)^{-1}\|x-x'\|$, so $z_\varepsilon$ is continuous. For fixed $x\in Q_r$, comparison with $y=x$ shows $J_\varepsilon x\to x$. Monotonicity of $\partial g$ between $z_\varepsilon(x)-\lambda_VJ_\varepsilon x\in\partial g(J_\varepsilon x)$ and any $z-\lambda_Vx\in\partial g(x)$ gives $(1+\varepsilon\lambda_V)\|z_\varepsilon(x)\|^2\le\langle z,z_\varepsilon(x)\rangle$. Thus $z_\varepsilon(x)$ is bounded by every candidate norm in the limit. Passing to a limit in the defining subgradient inequalities shows the graph of $\partial g$ is closed; every convergent subsequence therefore limits to an element of $\partial_{\lambda_V}f(x)$. The norm inequality makes that limit the unique minimum-norm element. Finite-dimensional compactness gives convergence of the full sequence $\varepsilon_n\downarrow0$, so the minimum section is a pointwise limit of continuous maps and hence Borel. [F2, F3, construct]

2.1 The selected section has norm at most $M_r$ by [F2], so composition with a strongly measurable $X$ is measurable and square integrable; call it $\zeta_X\in K$. For any $Y\in C_r$, its pointwise supporting inequality integrates to $\displaystyle \int f(Y)d\sigma\ge\int f(X)d\sigma+\langle\zeta_X,Y-X\rangle_K+\frac{\lambda_V}{2}\|Y-X\|_K^2.$ Together with [F1], this proves that $\nabla G_r(X)+\zeta_X\in\partial_{\lambda_E}E_r(X)$ and establishes nonemptiness. [F1, F2, step 1.2]

3.1 Conversely, let $\eta\in\partial_{\lambda_E}E_r(X)$. Put $C=L_rA_r^2+N_rB_r$ and $\lambda_E=\lambda_V-C$. Then $E_r-\frac{\lambda_E}{2}\|\cdot\|_K^2$ is the sum of the convex integral $X\mapsto\int g(X)d\sigma$ and the differentiable convex function $G_r(X)+\frac C2\|X\|_K^2$. The latter has gradient $\nabla G_r(X)+CX$. The convex sum rule here follows directly from one-sided directional derivatives: if $q$ is convex and $h$ is differentiable convex, a supporting vector $w$ of $q+h$ satisfies $q'(X;H)\ge\langle w-\nabla h(X),H\rangle$ for every feasible direction $H$; convex secant slopes dominate $q'(X;H)$, so $w-\nabla h(X)$ supports $q$. Apply this with $w=\eta-\lambda_EX$ to conclude that $\eta-\nabla G_r(X)-\lambda_VX$ supports the convex integral. Testing with $Y=X$ off a measurable set $A$ and $Y=y$ on $A$ gives a pointwise supporting inequality for every $y$ in a countable dense subset of $Q_r$, outside a common null set by [F3]. The relative interior is nonempty by [F5]; on it, continuity [F5] extends the inequality from the dense subset. For a boundary point $y$, choose $y_0$ in the relative interior and let $B(y_0,\rho)$ be a relative ball contained in $Q_r$. For $y_n=(1-1/n)y+(1/n)y_0$, convexity gives a relative ball of radius $\rho/n$ around $y_n$ contained in $Q_r$, so $y_n$ is in the relative interior. Convexity gives $g(y_n)\le(1-1/n)g(y)+(1/n)g(y_0)$, and lower semicontinuity gives $g(y)\le\liminf_n g(y_n)$; hence $g(y_n)\to g(y)$ and the supporting inequality passes to $y$. Undoing the quadratic shift proves $\eta-\nabla G_r(X)$ is a $K$-section of $\partial_{\lambda_V}f(X(s))$, proving the reverse inclusion. [F1, F3, F5, step 2.1]

4.1 For the shifted selection, apply step 1.2 to $f_a(u)=\langle a,\Phi(u)\rangle+V(u)+\iota_{Q_r}(u)$, whose semiconvexity coefficient is $\alpha_a=\lambda_V-B_r\|a\|$. Its resolvent $J_\varepsilon^a x$ is jointly continuous in $(a,x)$ where $1+\varepsilon\alpha_a>0$: comparison of the two optimality inequalities gives $(1+\varepsilon\alpha_a)|J_\varepsilon^a x-J_\varepsilon^{a\prime}x\prime|\le |x-x\prime|+\varepsilon A_r\|a-a\prime\|$ when the coefficient is taken as a common lower bound for the two parameters. Hence $(x-J_\varepsilon^a x)/\varepsilon$ is jointly continuous there. On each bounded parameter ball, step 1.2 proves its pointwise limit at $u\in Q_r$ is the minimum of $\partial f_a(u)=b_a(u)+\partial_{\lambda_V}f(u)$; the sum formula follows by subtracting the smooth Taylor remainder in the local supporting inequality. The parameter balls exhaust $\mathcal H$, so the limit is jointly Borel. A bounded potential subgradient gives an admissible shifted vector of norm $A_r\|a\|+M_r$, proving the bound. The pointwise projection inequality $|S(a,u)|\le|z|$ for every $z$ in the shifted set integrates over labels. The exact subdifferential formula from step 3.1 therefore proves that this measurable section is the unique minimum-norm Hilbert subgradient. [F1, F2, step 1.2, step 3.1] ∎