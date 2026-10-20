---
id: lem-characteristics-unique-and-stable
kind: lemma
title: One-sided semiconvex characteristics give W2 uniqueness and stability
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
deps: [def-wasserstein-gradient-flow-for-feature-energy, lem-localized-lift-subdifferential, thm-superposition-for-finite-action-continuity-equations, def-wasserstein-two-space-and-couplings, thm-wasserstein-two-is-a-metric, thm-disintegration-of-a-joint-law-on-standard-borel-spaces, def-standard-borel-space, lem-finite-products-of-standard-borel-spaces-are-standard-borel, def-measure-kernel-and-probability-kernel, thm-measurability-of-integration-against-a-kernel, def-product-measure-on-sigma-finite-spaces, thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique, thm-chain-rule-for-total-derivatives, thm-ftc-second-part, def-axiom-of-choice, def-feature-measure-energy, thm-heine-borel-rn, cor-arzela-ascoli-subsequence-theorem-for-proper-metric-targets, thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions, thm-lipschitz-characterisation-within-absolutely-continuous-functions]
justified_by: []
proof_strategy: direct
axiom_use: "AC supplies the path superposition and the joint coupling of two path laws conditional on their initial points; disintegration uses full AC."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Lénaïc Chizat and Francis Bach, On the Global Convergence of Gradient Descent for Over-parameterized Models using Optimal Transport"
      url: "https://arxiv.org/pdf/1805.09545"
    - title: "Luigi Ambrosio, Gigli, and Giuseppe Savaré, Gradient Flows in Metric Spaces and in the Space of Probability Measures"
      url: "https://www2.stat.duke.edu/~sayan/ambrosio.pdf"
---
## Statement

Assume AC and the feature-measure energy hypotheses. Fix $r>0$ and a nonempty closed convex constraint $D\subseteq\Omega$. For every continuous moment path $m:[0,T]\to\mathcal H$, the nonautonomous inclusion
$$\dot X(t)\in-\partial_{\lambda_V}(V+\iota_D)(X(t))-d\Phi_{X(t)}^*\nabla R(m(t))$$
has a unique forward solution from each $X(0)\in D\cap Q_r$; its characteristic map is jointly continuous in $(t,X(0))$ and locally Lipschitz in the initial point on each $Q_r$. Let $\mu_t$ and $\nu_t$ be two finite-action solutions on $[0,T]$ of the continuity equation with laws concentrated on $D\cap Q_r$ and velocities
$$v_t^\alpha(x)=-\operatorname{argmin}\{|q|:q\in d\Phi_x^*\nabla R(m_{\alpha_t})+\partial_{\lambda_V}(V+\iota_D)(x)\},\qquad\alpha\in\{\mu,\nu\},$$
where $m_\alpha=\int\Phi\,d\alpha$. The full shifted minimum selection is Borel; it need not be continuous in position. Each finite-action PDE solution with a continuous prescribed feature moment is the pushforward by its unique characteristic map. For starts in $D\cap Q_r$, these characteristics remain in a larger $Q_R$ uniformly on compact time intervals, and their velocity is the negative full shifted minimum almost everywhere. The same construction applies directly to any continuous forcing $a(t)\in\mathcal H$ in place of $\nabla R(m(t))$. Then for all $t\in[0,T]$,
$$W_2(\mu_t,\nu_t)\le e^{(C_r-\lambda_V)t}W_2(\mu_0,\nu_0),\qquad C_r=L_rA_r^2+N_rB_r.$$
Here $A_r=\sup_{Q_r}\|d\Phi\|$, $B_r=\operatorname{Lip}_{Q_r}(d\Phi)$, $M_r=\sup_{Q_r}\|\partial V\|$ in the bounded-selection convention, and $L_r,N_r$ are respectively a Lipschitz constant and a norm bound for $dR$ on the closed convex hull of $\Phi(Q_r)$. In particular, the localized measure-valued flow is unique for each initial law. The estimate does not assume that $v_t$ is continuous in position.

## Statement references

[[def-wasserstein-gradient-flow-for-feature-energy]]

[[lem-localized-lift-subdifferential]]

[[thm-superposition-for-finite-action-continuity-equations]]

[Chizat and Bach, Proposition 2.5 and Appendix B.2.1](https://arxiv.org/pdf/1805.09545)

[Ambrosio, Gigli, and Savaré, Theorem 8.3.1](https://www2.stat.duke.edu/~sayan/ambrosio.pdf)

## Facts & Assumptions

**Given:** AC, the regularity data, and two localized continuity-equation solutions.

[F1] Each finite-action solution has a path law concentrated on absolutely continuous trajectories satisfying its velocity equation almost everywhere. [[thm-superposition-for-finite-action-continuity-equations]]

[F2] The path laws can be disintegrated conditional on their initial points and joined using any coupling of their initial marginals. [[thm-disintegration-of-a-joint-law-on-standard-borel-spaces]] [[def-standard-borel-space]] [[lem-finite-products-of-standard-borel-spaces-are-standard-borel]] [[def-measure-kernel-and-probability-kernel]] [[thm-measurability-of-integration-against-a-kernel]]

[F3] The pointwise constrained subdifferential of $V+\iota_D$ is $\lambda_V$-monotone; the smooth feature gradient has the bounds $N_rB_r$ in position and $A_rL_r$ in feature moment. [[def-feature-measure-energy]]

[F4] AC supplies the superposition and disintegration constructions. [[def-axiom-of-choice]]

[F5] Closed bounded subsets of Euclidean space are compact. [[thm-heine-borel-rn]]

[F6] A uniformly equicontinuous family of maps from a compact metric space into a proper metric space with pointwise bounded images has a uniformly converging subsequence under AC. [[cor-arzela-ascoli-subsequence-theorem-for-proper-metric-targets]]

[F7] Lipschitz paths are absolutely continuous, have derivatives almost everywhere, and obey the scalar absolutely continuous fundamental theorem of calculus. Apply this coordinatewise for Euclidean paths. [[thm-lipschitz-characterisation-within-absolutely-continuous-functions]] [[thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions]]




**Given:** AC, the data, and two solutions as in the Statement.

## Proof

1.1 Choose an optimal coupling $\gamma_0$ of $\mu_0,\nu_0$. By [F1], take path laws $\Pi_\mu,\Pi_\nu$ for the two solutions. Disintegrate each law conditional on its time-zero position, then combine the two kernels with $\gamma_0$ using [F2]. This gives a joint law of paths $(X,Y)$ with marginals $\Pi_\mu,\Pi_\nu$ and initial pair law $\gamma_0$. Set $D(t)=\mathbb E|X_t-Y_t|^2$. The path equations and the scalar chain rule show $D$ is absolutely continuous and $\displaystyle \frac12D'(t)=\mathbb E\langle X_t-Y_t,v_t^\mu(X_t)-v_t^\nu(Y_t)\rangle$ for almost every $t$. The product is integrable by Cauchy–Schwarz because both path actions and second moments are finite. [F1, F2, F4, construct]

1.2 We construct characteristics for any continuous $a:[0,T]\to\mathcal H$, with $M=\max_t\|a(t)\|$, $g(t,x)=d\Phi_x^*a(t)$, $f=V+\iota_D$ and $\lambda=\lambda_V$. The sets $Q_s$ cover $\Omega$: for $q\in Q_1$ the neighborhood condition puts $x\in\Omega$ in $Q_{1+|x-q|}$, increasing the radius slightly when necessary. Thus every bounded subset of $\Omega$ lies in a $Q_s$. Bounded supporting potential subgradients at $x,y\in Q_s$ give $|V(y)-V(x)|\le(C_1+C_2s)|y-x|+|\lambda||y-x|^2/2$. Subdivide the segment into $n$ equal pieces and let $n\to\infty$ to see that $V$ is $(C_1+C_2s)$-Lipschitz on $Q_s$. Therefore $f$ is proper, lower semicontinuous and $\lambda$-semiconvex, and its subdifferential is nonempty everywhere on $D$. Its supporting inequalities give $\langle\xi-\eta,x-y\rangle\ge\lambda|x-y|^2$. For $1+h\lambda>0$, the function $f(y)+|y-z|^2/(2h)$ is coercive and strongly convex: use a supporting inequality at a fixed point of $D$ for the quadratic lower bound. Finite-dimensional compactness gives its unique minimizer $J_hz$, and testing minimality along segments gives $(z-J_hz)/h\in\partial_\lambda f(J_hz)$. Adding two such inequalities gives $|J_hz-J_hw|\le|z-w|/(1+h\lambda)$. [F3, F4, F5, construct]


2.1 Write each full shifted selection as $d\Phi_x^*\nabla R(m_{\mu_t})+\xi_\mu(x)$ and $d\Phi_y^*\nabla R(m_{\nu_t})+\xi_\nu(y)$, with the two potential sections in $\partial_{\lambda_V}(V+\iota_D)$; they need not coincide as functions of position. Adding their supporting inequalities gives $\langle\xi_\mu(x)-\xi_\nu(y),x-y\rangle\ge\lambda_V|x-y|^2$. For the smooth terms, add and subtract $d\Phi_y^*\nabla R(m_{\mu_t})$: their difference has norm at most $N_rB_r|x-y|+A_rL_r|m_{\mu_t}-m_{\nu_t}|$. Along the joint law, $|m_{\mu_t}-m_{\nu_t}|\le A_r\mathbb E|X_t-Y_t|\le A_rD(t)^{1/2}$. Hence [F3] gives $\displaystyle \frac12D'(t)\le(C_r-\lambda_V)D(t).$ Multiplying by $e^{-2(C_r-\lambda_V)t}$ and differentiating proves $D(t)\le e^{2(C_r-\lambda_V)t}D(0)$. The time-$t$ path pair couples $\mu_t,\nu_t$, so $W_2^2(\mu_t,\nu_t)\le D(t)$; taking square roots and using optimality of $\gamma_0$ proves the stated estimate. If the initial laws agree, its right side is zero, proving uniqueness. [F1, F3, step 1.1]

2.2 For $h=T/n$, $h|\lambda|\le1/2$, define $x_0=u\in D\cap Q_r$, $x_k=J_h(x_{k-1}-hg(t_k,x_{k-1}))$, $v_k=(x_k-x_{k-1})/h$, and $\xi_k=-v_k-g(t_k,x_{k-1})\in\partial_\lambda f(x_k)$. Put $S_k=\sum_{j\le k}h|v_j|$. The neighborhood condition gives $x_k\in Q_{r+S_k}$. Compare $\xi_k$ with a supporting potential vector $\eta_{k-1}$ at $x_{k-1}$ of norm at most $C_1+C_2(r+S_{k-1})$. Monotonicity yields $(1+h\lambda)|v_k|^2\le-\langle g(t_k,x_{k-1})+\eta_{k-1},v_k\rangle$, so $|v_k|\le A+BS_{k-1}$, where $A=2(M+1)(C_1+C_2r)$ and $B=2(M+1)C_2$. Hence $S_k\le(1+hB)S_{k-1}+hA$ and $S_k\le S_*=(A/B)(e^{BT}-1)$, with $S_*=AT$ when $B=0$. All iterates and affine interpolants $X_h$ lie in $D\cap Q_R$, where $R=r+S_*+1$, and have speed at most $K=A+BS_*$. For each fixed $u$, their images lie in the compact ball $\overline B(u,KT)$ and they are uniformly Lipschitz. Arzelà–Ascoli gives a subsequence converging uniformly to a $K$-Lipschitz $D\cap Q_R$-valued path $X$. Both constant interpolants converge uniformly to $X$, $V(x_k)$ converges uniformly to $V(X)$ by step 1.2, and $g_h(t)=g(t_k,x_{k-1})$ converges uniformly to $g(t,X(t))$ by continuity of $a$ and the Lipschitz bound on $d\Phi$ on $Q_R$. [F3, F4, F5, F6, step 1.2, construct]

3.1 Write $x_h^+(t)=x_k$ on $(t_{k-1},t_k]$. The discrete supporting inequality is $\langle X_h',x_h^+-z\rangle+V(x_h^+)+\langle g_h,x_h^+-z\rangle+(\lambda/2)|x_h^+-z|^2\le V(z)$ for every $z\in D$. Replace $x_h^+$ by $X_h$ only in the derivative pairing; its error is at most $K^2h$. Integrating over any $[b,c]\subset[0,T]$ makes that pairing the exact endpoint difference $(|X_h(c)-z|^2-|X_h(b)-z|^2)/2$. All other terms converge uniformly by step 2.2, yielding $(|X(c)-z|^2-|X(b)-z|^2)/2+\int_b^c[V(X)+\langle g(t,X),X-z\rangle+(\lambda/2)|X-z|^2]dt\le(c-b)V(z)$. Choose countably many dense $z\in D$ and differentiate this interval inequality where the scalar absolutely continuous functions and coordinates of $X$ are differentiable. Outside their common null set the inequality says $-X'-g(t,X)\in\partial_\lambda f(X)$, first for these tests and then for every $z\in D$ by continuity of $V$ on bounded sets. This proves the inclusion without any continuity or convergence assertion for the nonsmooth minimum field. [F5, F7, step 1.2, step 2.2]

4.1 Two solutions $X,Y$ to the same forcing have bounded images in a common $Q_s$. Monotonicity gives $(|X-Y|^2/2)'\le(MB_s-\lambda)|X-Y|^2$, so multiplication by the scalar integrating factor proves uniqueness. Therefore all converging Euler subsequences have the same limit and compactness gives uniform convergence of the entire family. For all starts in $D\cap Q_r$, step 2.2 gives the same radius $R$ and time-Lipschitz constant $K$; the same distance estimate gives $|X(t,u)-X(t,w)|\le e^{(MB_R-\lambda)t}|u-w|$. Together these prove joint continuity in $(t,u)$ and uniform Lipschitz dependence on the initial point. Nearby starts lie in a common $Q_s$ by the neighborhood property. For different forcings $a,b$ and paths in $Q_s$, monotonicity gives $(|X-Y|^2/2)'\le c|X-Y|^2+A_s\|a-b\||X-Y|$, $c=(\max\|a\|)B_s-\lambda$. Apply this to $\sqrt{|X-Y|^2+\varepsilon^2}$ and let $\varepsilon\downarrow0$ to obtain $|X(t)-Y(t)|\le e^{ct}|X(0)-Y(0)|+A_s\int_0^t e^{c(t-q)}\|a(q)-b(q)\|dq$. This is forcing stability. All finite horizons patch uniquely. [F3, F7, step 2.2, step 3.1]

4.2 Since $V\circ X$ is Lipschitz, at a time where it and $X$ are differentiable and the inclusion holds, test any $\eta\in\partial_\lambda f(X(t))$ against $X(t+h)$ for both signs of $h$. Division by $h$ and passage to zero give $(V\circ X)'=\langle\eta,X'\rangle$ for every such $\eta$ simultaneously. For $\xi=-X'-g(t,X)$ this gives $\langle\eta-\xi,X'\rangle=0$, so $|g+\eta|^2=|-X'|^2+|\eta-\xi|^2$. Thus $-X'$ is the full shifted minimum. Its Borel measurability for fixed forcing follows directly from $q_\varepsilon(t,x)=(x-J_\varepsilon(x-\varepsilon g(t,x)))/\varepsilon$: these are continuous, and monotonicity gives $(1+\varepsilon\lambda)|q_\varepsilon|^2\le\langle g(t,x)+\eta,q_\varepsilon\rangle$ for every $\eta\in\partial_\lambda f(x)$. Therefore $q_\varepsilon$ is bounded and its prox point tends to $x$. Continuity of $V$ passes the supporting inequalities to every cluster point $q$, placing it in the shifted subdifferential; the displayed inequality becomes its minimum-norm projection inequality. All cluster points equal the unique minimum, so the entire sequence converges. The pointwise limit of the continuous $q_\varepsilon$ is Borel. [F3, F7, step 1.2, step 3.1]

5.1 For any finite-action PDE solution with this velocity and fixed continuous forcing, [F1] represents it by absolutely continuous paths. Their positions lie in closed $D$ at every rational time and hence every time. Each path solves the inclusion, so uniqueness from step 4.1 identifies it with $X(\cdot,u)$, where $u$ is its initial point. Thus $\mu_t=X(t,\cdot)_\#\mu_0$, with the same radius bound from step 2.2 whenever $\mu_0$ is concentrated on $Q_r$. This argument uses neither a backward inverse nor continuity of the minimum field. With $a(t)=\nabla R(m(t))$ it proves the characteristic assertion in the Statement; steps 1.1–2.1 prove the self-consistent law stability assertion. [F1, step 2.1, step 2.2, step 4.1, step 4.2] ∎
