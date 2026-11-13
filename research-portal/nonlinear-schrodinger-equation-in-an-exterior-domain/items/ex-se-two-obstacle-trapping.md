---
id: ex-se-two-obstacle-trapping
kind: example
domain: mathematics
title: A ray trapped between two convex obstacles
status: published
deps:
  - def-se-geometry
  - def-se-nontrapping
  - prop-se-generalized-ray-contract
  - math:ex-distance-to-a-set-is-attained-on-a-compact-set
  - math:def-convex-subset-of-euclidean-space
  - math:ex-convex-subsets-of-rn-are-path-connected
  - math:thm-parametrized-constraint-necessary-condition
  - math:thm-chain-rule-for-total-derivatives
  - math:thm-heine-borel-rn
dependency_roles:
  def-se-geometry: mathematical-premise
  def-se-nontrapping: mathematical-premise
  prop-se-generalized-ray-contract: mathematical-premise
  math:ex-distance-to-a-set-is-attained-on-a-compact-set: mathematical-premise
  math:def-convex-subset-of-euclidean-space: mathematical-premise
  math:ex-convex-subsets-of-rn-are-path-connected: mathematical-premise
  math:thm-parametrized-constraint-necessary-condition: mathematical-premise
  math:thm-chain-rule-for-total-derivatives: mathematical-premise
  math:thm-heine-borel-rn: mathematical-premise
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
sources:
  references:
    - title: Nonlinear Schrödinger equation in an exterior domain, v2
      url: https://arxiv.org/abs/2610.11968
      locator: PDF page 3, Figure 1(c) and caption; page 2, section 1.2, first
        paragraph; page 22, section 5.2(E)
      statement: Figure 1(c) depicts a ray bouncing between two strictly convex
        obstacles that never leaves the enclosing ball and therefore avoids the
        exterior observation region. The introduction and section 5.2(E) report
        linear outer-boundary controllability with derivative loss for certain
        trapping configurations, citing Burq and Burq-Zworski, with additional
        geometric assumptions specified in the introduction.
      hypotheses: Attribution to the frozen article only. Its introduction limits the
        linear comparison to certain configurations of disjoint strictly convex
        obstacles satisfying additional geometric assumptions. No such
        controllability result is asserted here for every pair of obstacles or
        used as a premise of the periodic-ray verification.
      reading_limits: Read the frozen v2 text and page images at PDF pages 2, 3 and 22
        for these passages. The cited Burq and Burq-Zworski papers were not
        independently read or verified here. The article supplies attribution
        only; the mathematical verification uses the declared independent
        suppliers and the local boundary-chart calculation.
dependency_level: 3
---

## Example

Let $n\ge2$ and let $\Theta_1,\Theta_2\subset\mathbb R^n$ be disjoint nonempty compact strictly convex bodies with smooth boundaries. A convex body is a compact convex set with nonempty interior; strict convexity means that the open segment between distinct points of the body lies in its interior. Put $\Theta=\Theta_1\cup\Theta_2$ and $\Omega=\mathbb R^n\setminus\Theta$, and suppose $\Omega$ is connected. Choose $R>0$ with $\Theta\subset B_R(0)$ and let $\omega=\{x\in\Omega:|x|>R\}$. In the reflected-ray convention of [[prop-se-generalized-ray-contract]], there is a complete periodic ray between the obstacles that stays in $B_R(0)$. Consequently $(\omega,T)$ fails the geometric control condition for every $T>0$, and $\Theta$ fails the non-trapping condition of [[def-se-nontrapping]].

## Facts & Assumptions

[F1] The geometric convention of [[def-se-geometry]] supplies the exterior, smooth boundary and enclosing-ball terminology. The sets in the example are compact and disjoint, and their exterior is assumed connected.

[F2] By [[prop-se-generalized-ray-contract]], a ray follows a straight unit-speed characteristic in the Euclidean interior and, at a hyperbolic reflection, its tangential covector is preserved while its normal covector reverses. The same supplier defines the geometric control condition as every ray meeting the observation region within the specified time.

[F3] By [[def-se-nontrapping]], non-trapping requires every complete generalized ray to leave each compact subset of Euclidean space in finite forward time.

[F4] For nonempty compact disjoint subsets $K,L$ of a metric space, the second assertion of [[math:ex-distance-to-a-set-is-attained-on-a-compact-set]] gives a point $a\in K$ with $d(a,L)=d(K,L)>0$. Its first assertion then gives a point $b\in L$ with $d(a,b)=d(a,L)$. Both assertions apply to the Euclidean metric and require no choice principle.

[F5] Convexity has the meaning of [[math:def-convex-subset-of-euclidean-space]]: a subset $C\subseteq\mathbb R^n$ contains $(1-s)u+sv$ whenever $u,v\in C$ and $s\in[0,1]$. This is the convex-set convention in the definition of a convex body in the Example.

[F6] Assertion 2 of [[math:ex-convex-subsets-of-rn-are-path-connected]] states that every ball for the Euclidean norm is convex. It applies to $B_R(0)$ because $n\ge2$ and $R>0$; no path-connectedness conclusion is needed here.

[F7] By [[math:thm-parametrized-constraint-necessary-condition]], if a differentiable scalar function $f$ and a curve $\gamma:(-\eta,\eta)\to\mathbb R^n$ differentiable at $0$ satisfy $\gamma(0)=p$ and $f\circ\gamma$ has a local extremum at $0$, then $Df(p)\gamma'(0)=0$. The two-sided parameter interval makes $0$ an interior point.

[F8] The chain rule of [[math:thm-chain-rule-for-total-derivatives]] applies to the smooth graph functions in [F1] and differentiable curves in their open coordinate domains. In particular it differentiates $s\mapsto h(y(s))$ and the inverse rigid motion used below.

[F9] Assertion 1 of [[math:thm-heine-borel-rn]] makes every closed bounded coordinate box in Euclidean $\mathbb R^n$, $n\ge1$, compact, without a choice principle. Apply it below to $K=[-R,R]^n$ with $R>0$.

## Verification

**Given:** The two bodies, exterior and observation region in the example.

**Goal:** Construct a bounded periodic reflected ray and establish the stated failures.

1.1 Equip $\mathbb R^n$ with the Euclidean metric $d(x,y)=|x-y|$. Apply the second assertion in [F4] to the nonempty compact disjoint sets $\Theta_1,\Theta_2$ to obtain $a\in\Theta_1$ with $d(a,\Theta_2)=d(\Theta_1,\Theta_2)>0$. Apply its first assertion to the point $a$ and the nonempty compact set $\Theta_2$ to obtain $b\in\Theta_2$ with $|a-b|=d(a,\Theta_2)$. Thus the pair minimizes the distance between the bodies, and $|a-b|>0$. Both points lie on their respective boundaries: otherwise moving an interior point a short distance toward the other point would decrease the distance. The open segment from $a$ to $b$ meets neither body, since any point of it in either body would give a strictly shorter distance to the other endpoint. [F1, F4, given]

2.1 For each of the two endpoint pairs $(p,q)=(a,b)$ and $(p,q)=(b,a)$, use a smooth boundary chart from [F1], writing its rigid motion as $Q(z)=Uz+c$ with $U$ orthogonal and $Q(p)=(y_0,h(y_0))$. For $v\in\mathbb R^{n-1}$ the curve $\gamma_v(s)=Q^{-1}(y_0+sv,h(y_0+sv))$ lies in that boundary for all sufficiently small $|s|$, since the chart domains are open. It has $\gamma_v(0)=p$ and velocity $\gamma_v'(0)=U^{\mathsf T}(v,Dh(y_0)v)$ by [F8]. These velocities give exactly the boundary tangent hyperplane: any differentiable boundary curve through $p$ has chart coordinates $(y(s),h(y(s)))$, whose derivative has this form by [F8], and each such vector is realized by $\gamma_v$. For $f_q(z)=|z-q|^2$, the identity $f_q(p+w)-f_q(p)=2(p-q)\cdot w+|w|^2$ gives $Df_q(p)w=2(p-q)\cdot w$. By step 1.1, $f_q\circ\gamma_v$ has a minimum at the interior parameter $0$. Thus [F7] gives $(p-q)\cdot U^{\mathsf T}(v,Dh(y_0)v)=0$ for every $v$. Consequently $b-a$ is perpendicular to both boundary tangent hyperplanes. [F1, F7, F8, step 1.1, algebra]

3.1 Put $\ell=|b-a|$ and $e=(b-a)/\ell$. For every integer $k\in\mathbb Z$, define $x(t)=a+(t-2k\ell)e$ on $[2k\ell,(2k+1)\ell]$ and $x(t)=b-(t-(2k+1)\ell)e$ on $[(2k+1)\ell,(2k+2)\ell]$. These formulas agree at their endpoints and define a continuous $2\ell$-periodic path on all of $\mathbb R$. On the open segments use temporal covector $-1$ and spatial covector $e$ or $-e$, respectively. Incidence at each endpoint is normal and nonzero, so [F2] reverses the normal covector and preserves the zero tangential covector. Compression identifies the incoming and outgoing endpoints. The reflection times form a discrete subset of $\mathbb R$; away from them the characteristic is a straight unit-speed segment. Thus this is a complete admissible periodic ray in exactly the supplier convention, with image $[a,b]$. Both endpoints lie in $B_R(0)$; by [F6] this ball is convex, and by [F5] the whole segment $[a,b]$ therefore lies there. The box $K=[-R,R]^n$ is compact by [F9] and contains $B_R(0)$, since $|z_j|\le|z|<R$ for every coordinate of $z\in B_R(0)$. Hence the whole ray lies in $K$. The ray never meets $\omega$, so GCC fails for every $T>0$ by [F2]; it never leaves that compact set, so non-trapping fails by [F3]. [F2, F3, F5, F6, F9, step 1.1, step 2.1] ∎

## Source notes

Figure 1(c) of the article attributes the obstruction to a ray bouncing between two strictly convex obstacles. Its introduction and §5.2(E) separately report linear outer-boundary controllability with a loss of derivatives for certain trapping configurations under additional geometric assumptions, citing Burq and Burq–Zworski. That reported comparison is not used in the verification above, and is not asserted here for every pair of obstacles.
