---
id: lem-homogeneous-clarke-flow-margin-monotonicity
kind: lemma
title: "Smoothed margin monotonicity along homogeneous Clarke flow"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 3
deps:
  - def-clarke-subdifferential-and-gradient-flow
  - def-homogeneous-classifier-margin-and-exponential-risk
  - lem-clarke-euler-identity-for-homogeneous-margins
  - lem-clarke-sum-chain-rule-for-exponential-risk
  - thm-euclidean-heine-borel-pseudocompactness-and-extreme-values
justified_by: []
proof_strategy: direct
axiom_use: "No choice axiom is used; scalar limits follow from monotonicity and finite-dimensional compactness."
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "Kaifeng Lyu and Jian Li, Gradient Descent Maximizes the Margin of Homogeneous Neural Networks, Theorem 4.1 and Appendix A.7"
      url: "https://arxiv.org/pdf/1906.05890"
    - title: "Matus Telgarsky, Deep Learning Theory lecture notes, §10.2"
      url: "https://mjt.cs.illinois.edu/dlt/"
---

## Statement

Let $N,p\ge1$ and let $q_1,\ldots,q_N:\mathbb R^p\to\mathbb R$ be locally Lipschitz functions that are positively homogeneous of common degree $L>0$ and admit the Clarke chain rule along absolutely continuous arcs. Set $\mathcal L(\theta)=\sum_{i=1}^N e^{-q_i(\theta)}$. Let $\theta:[0,\infty)\to\mathbb R^p$ be a global Clarke gradient-flow trajectory for $\mathcal L$, and suppose $\mathcal L(\theta(t_0))<1$ for some $t_0\ge0$. For $t\ge t_0$, the loss is nonincreasing, the smoothed normalized margin $\widetilde\gamma(\theta(t))=-\log\mathcal L(\theta(t))/\|\theta(t)\|_2^L$ is nondecreasing, $\mathcal L(\theta(t))\to0$, and $\|\theta(t)\|_2\to\infty$. Moreover, $0\le\bar\gamma(\theta(t))-\widetilde\gamma(\theta(t))\le(\log N)/\|\theta(t)\|_2^L$, so the normalized margin and smoothed normalized margin have the same finite positive limit.

## Statement references

[[def-clarke-subdifferential-and-gradient-flow|Global Clarke trajectory convention]]

[[def-homogeneous-classifier-margin-and-exponential-risk|Homogeneous classifier margins and normalized margins]]

[Kaifeng Lyu and Jian Li, *Gradient Descent Maximizes the Margin of Homogeneous Neural Networks*, Theorem 4.1 and Appendix A.7](https://arxiv.org/pdf/1906.05890)

[Matus Telgarsky, *Deep Learning Theory* lecture notes, §10.2](https://mjt.cs.illinois.edu/dlt/)

## Facts & Assumptions

**Given:** The finite homogeneous margins, their local Lipschitz and Clarke chain-rule properties, the global Clarke flow, and a time $t_0$ with loss below one.

[F1] [[def-clarke-subdifferential-and-gradient-flow]]: a Clarke gradient-flow trajectory is locally absolutely continuous, and the subdifferential is the closed convex hull of limiting ordinary gradients, is nonempty compact convex, and has support function the Clarke generalized directional derivative.

[F2] [[def-homogeneous-classifier-margin-and-exponential-risk]]: $q_i(c\theta)=c^Lq_i(\theta)$ and $\mathcal L=\sum_i e^{-q_i}$.

[F3] [[lem-clarke-euler-identity-for-homogeneous-margins]]: every $h_i\in\partial^\circ q_i(\theta)$ satisfies $\langle\theta,h_i\rangle=Lq_i(\theta)$.

[F4] [[lem-clarke-sum-chain-rule-for-exponential-risk]]: for sample margins in a homogeneous-classifier model, along a Clarke flow, $\mathcal L'=-\|\dot\theta\|_2^2$ almost everywhere, and almost everywhere $\dot\theta=\sum_i e^{-q_i}h_i$ with $h_i\in\partial^\circ q_i(\theta)$.

[F5] [[thm-euclidean-heine-borel-pseudocompactness-and-extreme-values]]: continuous real-valued functions attain finite extrema on nonempty closed bounded subsets of finite-dimensional Euclidean space.

## Proof

**Proof technique:** use Euler's identity to differentiate the radius and exponential risk, then compare the weighted average margin with the log inverse loss.

1.1 We establish the identities of [F4] for the arbitrary margins allowed here. At any fixed parameter $x$, put $a_i=e^{-q_i(x)}$ and $f_i=e^{-q_i}$. Since $q_i=-\log f_i$, the two functions have exactly the same differentiability points, and $\nabla f_i=-e^{-q_i}\nabla q_i$ there. Taking gradient limits and closed convex hulls in [F1] gives $\partial^\circ f_i(x)=-a_i\partial^\circ q_i(x)$. Set $C=\sum_i\partial^\circ f_i(x)$, a nonempty compact convex set. For any direction $w$, the finite-sum limsup inequality and [F1] give $\mathcal L^\circ(x;w)\le\sum_i f_i^\circ(x;w)=\max_{c\in C}\langle c,w\rangle$. Thus $\partial^\circ\mathcal L(x)\subseteq C$: otherwise, for $g\in\partial^\circ\mathcal L(x)\setminus C$, let $c_0$ minimize $\|g-c\|_2$ on $C$, using [F5]. Convexity gives $\langle g-c_0,c-c_0\rangle\le0$ for every $c\in C$, whereas $\langle g,g-c_0\rangle>\langle c_0,g-c_0\rangle$, contradicting the directional bound. Consequently the flow inclusion supplies $\dot\theta=\sum_i e^{-q_i}h_i$ with $h_i\in\partial^\circ q_i(\theta)$ almost everywhere. The assumed arc chain rules give $\mathcal L'=-\langle\sum_i e^{-q_i}h_i,\dot\theta\rangle=-\|\dot\theta\|_2^2$ almost everywhere. All these compositions are locally absolutely continuous, since the margins are locally Lipschitz. No graph realization is needed. [F1, F4, F5, given, construct, algebra]

2.1 Put $\phi(t)=\mathcal L(\theta(t))$, $r(t)=\|\theta(t)\|_2$, and $z(t)=-\log\phi(t)$. By [F1], $\theta$ is locally absolutely continuous; local Lipschitz continuity of the margins makes these compositions locally absolutely continuous on each compact time interval where $r>0$. Since $\phi(t_0)<1$ and [step 1.1] gives $\phi'=-\|\dot\theta\|_2^2\le0$ almost everywhere, $\phi(t)<1$ for all $t\ge t_0$. Thus every $q_i(\theta(t))>0$. Homogeneity gives $q_i(0)=0$, so $\theta(t)\ne0$ and $r(t)>0$. [F1, F2, step 1.1, given, algebra]

3.1 At almost every $t\ge t_0$, set $a_i=e^{-q_i(\theta(t))}$, $p_i=a_i/\phi$, and $\mu=\sum_i p_iq_i(\theta(t))$. By [step 1.1], choose $h_i\in\partial^\circ q_i(\theta(t))$ with $v:=\dot\theta=\sum_i a_ih_i$. Euler's identity [F3] yields $\langle\theta,v\rangle=L\phi\mu$, hence $(\log r)'=L\phi\mu/r^2>0$. Also $q_i=z-\log p_i$, so $\mu=z-\sum_i p_i\log p_i\ge z>0$ because $p_i>0$, $\sum_i p_i=1$, and $-\log p_i\ge0$. [F3, step 1.1, step 2.1, algebra]

4.1 The chain rule in [step 1.1] gives $z'=\|v\|_2^2/\phi$. Differentiating $z/r^L$ and applying Cauchy–Schwarz, $\widetilde\gamma'=r^{-L}(\|v\|_2^2/\phi-L^2z\phi\mu/r^2)\ge L^2\phi\mu(\mu-z)/r^{L+2}\ge0$, because $\|v\|_2^2\ge\langle\theta,v\rangle^2/r^2=L^2\phi^2\mu^2/r^2$. Thus the smoothed margin is nondecreasing. [F3, step 1.1, step 3.1, algebra]

5.1 The function $u\mapsto q_{\min}(u):=\min_iq_i(u)$ is continuous on the unit sphere, so [F5] gives a finite maximum $C$. Homogeneity and $\phi\ge e^{-q_{\min}}$ imply $0<\widetilde\gamma(t_0)\le z/r^L\le\bar\gamma\le C$. Since $\widetilde\gamma$ is nondecreasing by step 4.1, it has a finite positive limit. Writing $A=\sum_i e^{-(q_i-q_{\min})}\in[1,N]$ gives $z=q_{\min}-\log A$ and $0\le\bar\gamma-z/r^L=\log A/r^L\le(\log N)/r^L$. [F2, F5, step 2.1, step 4.1, algebra]

6.1 The nonincreasing loss has a limit $\phi_\infty\ge0$. If $\phi_\infty>0$, then $z\ge z(t_0)>0$ and $(r^2)'=2L\phi\mu\ge2L\phi_\infty z(t_0)>0$ almost everywhere by step 3.1, so $r\to\infty$ while $z$ remains bounded. This forces $z/r^L\to0$, contradicting the positive lower bound in step 5.1. Hence $\phi\to0$. To show $r\to\infty$, suppose otherwise. Then some $R<\infty$ and times $t_k\to\infty$ satisfy $r(t_k)\le R$. The closed ball of radius $R$ is compact by [F5], and each continuous $q_i$ is bounded above there. Since $N\ge1$, this gives a common positive lower bound for $\phi(t_k)=\sum_i e^{-q_i(\theta(t_k))}$, contradicting $\phi(t)\to0$. Thus $r\to\infty$. The error bound in step 5.1 now tends to zero, so the normalized and smoothed margins converge to the same positive limit. [F2, F5, step 3.1, step 5.1, assume-contra, discharge-contradiction] ∎
