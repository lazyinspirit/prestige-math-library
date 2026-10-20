---
id: lem-homogeneous-clarke-flow-produces-approximate-margin-kkt-points
kind: lemma
title: "Homogeneous Clarke flow produces approximate margin-KKT points"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 4
deps:
  - def-clarke-subdifferential-and-gradient-flow
  - def-homogeneous-classifier-margin-and-exponential-risk
  - def-margin-kkt-and-mfcq
  - lem-clarke-euler-identity-for-homogeneous-margins
  - lem-clarke-sum-chain-rule-for-exponential-risk
  - lem-homogeneous-clarke-flow-margin-monotonicity
  - thm-euclidean-heine-borel-pseudocompactness-and-extreme-values
justified_by: []
proof_strategy: direct
axiom_use: "No choice principle is used; for each requested tolerance the cluster-point and intermediate-value properties provide the finitely many times needed for one approximate witness."
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "Kaifeng Lyu and Jian Li, Gradient Descent Maximizes the Margin of Homogeneous Neural Networks, Appendix C.3–C.4, Lemmas C.8–C.12"
      url: "https://arxiv.org/pdf/1906.05890"
    - title: "Matus Telgarsky, Deep Learning Theory lecture notes, §§9.1 and 10.2"
      url: "https://mjt.cs.illinois.edu/dlt/"
---

## Statement

Let $N,p\ge1$ and let $q_1,\ldots,q_N:\mathbb R^p\to\mathbb R$ be locally Lipschitz functions that are positively homogeneous of common degree $L>0$ and admit the Clarke chain rule along absolutely continuous arcs. Let $\theta$ be a global Clarke gradient-flow trajectory for $\mathcal L(\theta)=\sum_i e^{-q_i(\theta)}$, and suppose $\mathcal L(\theta(t_0))<1$. Put $u(t)=\theta(t)/\|\theta(t)\|_2$ after $t_0$. A limit point $u_*$ means that for every $T\ge t_0$ and $\rho>0$, some $t>T$ satisfies $\|u(t)-u_*\|_2<\rho$. Then $q_{\min}(u_*)>0$, and, writing $\theta_*=u_*/q_{\min}(u_*)^{1/L}$, for every $\varepsilon>0$ there is a feasible $\widehat\theta$ with $\|\widehat\theta-\theta_*\|_2\le\varepsilon$ that is an $(\varepsilon,\varepsilon)$-approximate Clarke KKT point for minimizing $\frac12\|\theta\|_2^2$ subject to $q_i(\theta)\ge1$.

## Statement references

[[def-clarke-subdifferential-and-gradient-flow|Global Clarke trajectory and subdifferential conventions]]

[[def-margin-kkt-and-mfcq|Approximate margin-KKT definition]]

[Kaifeng Lyu and Jian Li, *Gradient Descent Maximizes the Margin of Homogeneous Neural Networks*, Appendix C.3–C.4, Lemmas C.8–C.12](https://arxiv.org/pdf/1906.05890)

[Matus Telgarsky, *Deep Learning Theory* lecture notes, §§9.1 and 10.2](https://mjt.cs.illinois.edu/dlt/)

## Facts & Assumptions

**Given:** The finite positively homogeneous margins, their Clarke chain-rule property, a global flow, and a time when its exponential loss is below one.

[F1] [[def-clarke-subdifferential-and-gradient-flow]]: Clarke subdifferentials are closed convex hulls of limiting ordinary gradients, are nonempty compact convex with the generalized directional derivative as support function, and are locally bounded with closed graph, and a global flow is locally absolutely continuous and satisfies $\dot\theta\in-\partial^\circ\mathcal L(\theta)$ almost everywhere.

[F2] [[def-homogeneous-classifier-margin-and-exponential-risk]]: $q_i(c\theta)=c^Lq_i(\theta)$, $\mathcal L=\sum_i e^{-q_i}$, and the normalized margins are $q_{\min}(\theta)/\|\theta\|_2^L$ and $-\log\mathcal L(\theta)/\|\theta\|_2^L$.

[F3] [[def-margin-kkt-and-mfcq]]: an approximate KKT witness has nonnegative multipliers, margin subgradients, stationarity residual at most $\varepsilon$, and aggregate complementarity residual at most $\delta$.

[F4] [[lem-clarke-euler-identity-for-homogeneous-margins]]: $\partial^\circ q_i(c\theta)=c^{L-1}\partial^\circ q_i(\theta)$ and $\langle\theta,h_i\rangle=Lq_i(\theta)$.

[F5] [[lem-homogeneous-clarke-flow-margin-monotonicity]]: after $t_0$, the smoothed margin is nondecreasing, loss tends to zero, radius tends to infinity, and the smoothed and normalized margins converge to the same positive limit $\gamma_\infty$.

[F6] [[thm-euclidean-heine-borel-pseudocompactness-and-extreme-values]]: nonempty closed bounded Euclidean sets are compact and continuous real-valued functions attain extrema on them; in particular, the unit sphere is compact.

[F7] [[lem-clarke-sum-chain-rule-for-exponential-risk]]: for classifier-model sample margins, almost everywhere along the flow, $v:=\dot\theta=\sum_i e^{-q_i}h_i$ for some $h_i\in\partial^\circ q_i(\theta)$.

## Proof

**Proof technique:** establish a radial-angle estimate, find one good time for each requested tolerance, and use the flow weights as approximate KKT multipliers.

1.1 The classifier restriction in [F7] is unnecessary for the following calculation, which we verify for the given margins. For $f_i=e^{-q_i}$, the smooth inverse $q_i=-\log f_i$ and ordinary differentiation give $\partial^\circ f_i(x)=-e^{-q_i(x)}\partial^\circ q_i(x)$ by the gradient-limit characterization [F1]. The finite-sum limsup inequality bounds $\mathcal L^\circ(x;w)$ by the support function of $C_x:=\sum_i\partial^\circ f_i(x)$, a nonempty compact convex set. If $g\in\partial^\circ\mathcal L(x)\setminus C_x$, choose its nearest point $c\in C_x$ using [F6]. Convexity gives $\langle g-c,b-c\rangle\le0$ for $b\in C_x$, so the direction $g-c$ strictly separates $g$ from $C_x$, contradicting that support bound. Hence $\partial^\circ\mathcal L(x)\subseteq C_x$. The flow inclusion therefore yields $\dot\theta=\sum_i e^{-q_i}h_i$ for some $h_i\in\partial^\circ q_i(\theta)$ almost everywhere. Along the locally absolutely continuous flow, the assumed margin chain rules and ordinary scalar chain rule give $\mathcal L'=-\langle\sum_i e^{-q_i}h_i,\dot\theta\rangle=-\|\dot\theta\|_2^2$ almost everywhere. [F1, F6, F7, given, construct, algebra]

1.2 For $t\ge t_0$, put $r=\|\theta\|_2$, $u=\theta/r$, $\phi=\mathcal L(\theta)$, $z=-\log\phi$, $a_i=e^{-q_i(\theta)}$, $p_i=a_i/\phi$, and $\mu=\sum_i p_iq_i(\theta)$. By [F5], $r>0$, $\phi\to0$, and $\widetilde\gamma(t)\ge\gamma_0:=\widetilde\gamma(t_0)>0$. Since $\phi<1$, every $q_i>0$ and $\mu\ge z>0$; indeed $q_i=z-\log p_i$. Homogeneity gives $q_{\min}(u)=q_{\min}(\theta)/r^L=\bar\gamma(t)\ge\gamma_0$. [F2, F5, algebra]

2.1 Local boundedness in [F1] and compactness of the unit sphere [F6] give a common bound $B$ for $\|h\|_2$ over all $u$ on that sphere, all $i$, and $h\in\partial^\circ q_i(u)$. By the scaling identity in [F4], every $h_i\in\partial^\circ q_i(\theta)$ therefore satisfies $\|h_i\|_2\le Br^{L-1}$. [F1, F4, F6, step 1.2, construct]

3.1 At almost every $t\ge t_0$, choose the flow representation from [step 1.1], put $v=\dot\theta$, and define $\beta=\langle\theta,v\rangle/(r\|v\|_2)$. Euler's identity [F4] gives $\langle\theta,v\rangle=L\phi\mu>0$, so $v\ne0$ and $0<\beta\le1$. Differentiating $\widetilde\gamma=z/r^L$ yields $\widetilde\gamma'=L(\mu/(\beta^2r^L)-z/r^L)(\log r)'\ge L\gamma_0(\beta^{-2}-1)(\log r)'$, since $\mu\ge z$ and $\mu/r^L\ge\bar\gamma\ge\gamma_0$. Also $\|u'\|_2\le\|v\|_2/r\le B\phi r^{L-2}\le[B/(L\gamma_0)](\log r)'$, because $(\log r)'=L\phi\mu/r^2$. Thus for $s<t$, $L\gamma_0\int_s^t(\beta^{-2}-1)(\log r)'\,d\tau\le\widetilde\gamma(t)-\widetilde\gamma(s)$. [F2, F4, F5, step 1.1, step 1.2, step 2.1, algebra]

4.1 The normalized margin is $\bar\gamma(t)=q_{\min}(u(t))$ and converges to $\gamma_\infty>0$ by [F5]. Continuity of $q_{\min}$ and the limit-point definition in the Statement imply $q_{\min}(u_*)=\gamma_\infty$. Fix $\varepsilon>0$. Choose an integer $k$ large enough that $B/(L\gamma_0k)<\varepsilon\gamma_0^{1/L}/4$ and $\sqrt2/(k\gamma_0^{1/L})<\varepsilon$. Then choose $T$ so that for every $t\ge T$, $\gamma_\infty-\widetilde\gamma(t)\le L\gamma_0/k^3$, $\mu(t)\ge z(t)>N/(eL\gamma_0^{2/L}\varepsilon)$, and $|\bar\gamma(t)^{-1/L}-\gamma_\infty^{-1/L}|<\varepsilon/2$. By the limit-point property, choose $s\ge T$ with $\|u(s)-u_*\|_2<\varepsilon\gamma_0^{1/L}/4$. Since [F4] and [step 1.1] give $(\log r)'=L\phi\mu/r^2>0$ almost everywhere by step 3.1, absolute continuity makes $r$ strictly increasing; [F5] gives $r\to\infty$. Thus there is a unique $s'>s$ with $\log r(s')-\log r(s)=1/k$. Step 3.1 gives $L\gamma_0\int_s^{s'}(\beta^{-2}-1)(\log r)'\,d\tau\le L\gamma_0/k^3$. Hence some nonexceptional $t\in(s,s')$ has $\beta(t)^{-2}-1\le1/k^2$; otherwise the integral would be larger. Integrating the direction bound in step 3.1 gives $\|u(t)-u_*\|_2<\varepsilon\gamma_0^{1/L}/2$. Therefore $\widehat\theta:=u(t)/\bar\gamma(t)^{1/L}$ is feasible and $\|\widehat\theta-\theta_*\|_2<\varepsilon$. [F2, F4, F5, F6, step 1.1, step 1.2, step 3.1, construct, algebra]

5.1 At this time $t$, choose $h_i$ from [step 1.1], let $q_*=q_{\min}(\theta(t))$, and put $\widehat h_i=h_i/q_*^{(L-1)/L}\in\partial^\circ q_i(\widehat\theta)$ using [F4]. Set $\lambda_i=q_*^{(L-2)/L}r a_i/\|v\|_2\ge0$. Then $\sum_i\lambda_i\widehat h_i=q_*^{-1/L}r(v/\|v\|_2)$ and $\|\widehat\theta-\sum_i\lambda_i\widehat h_i\|_2=\sqrt{2(1-\beta)}/\bar\gamma(t)^{1/L}\le\sqrt2/(k\gamma_0^{1/L})<\varepsilon$. For complementarity, set $d_i=q_i(\theta(t))-q_*\ge0$ and $A=\sum_i e^{-d_i}\ge1$; then $p_i=e^{-d_i}/A$ and $\mu-q_*=\sum_i p_id_i\le N/e$, since $x e^{-x}\le1/e$ for $x\ge0$. Direct substitution gives $\sum_i\lambda_i(q_i(\widehat\theta)-1)=\frac{\beta}{L\bar\gamma(t)^{2/L}}\frac{\mu-q_*}{\mu}\le\frac{N}{eL\gamma_0^{2/L}\mu}<\varepsilon$. This is the $(\varepsilon,\varepsilon)$-approximate KKT witness in [F3]. [F2, F3, F4, F5, step 1.1, step 3.1, step 4.1, algebra] ∎
