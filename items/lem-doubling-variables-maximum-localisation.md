---
id: lem-doubling-variables-maximum-localisation
kind: lemma
title: "Doubling variables: existence, relative contacts at the maximiser and localisation"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
deps: [lem-viscosity-testing-by-first-order-jets, def-upper-and-lower-semicontinuous-envelopes, def-semicontinuity-on-euclidean-subsets, thm-heine-borel-rn, thm-euclidean-semicontinuous-extreme-value-theorem, lem-sup-epsilon, def-bounded-set]
justified_by: []
aliases: []
dependency_level: 3
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Michael G. Crandall, Hitoshi Ishii and Pierre-Louis Lions, User's guide to viscosity solutions of second order partial differential equations, Bulletin of the American Mathematical Society 27 (1992), 1--67 (complete article)"
      url: "https://arxiv.org/pdf/math/9207212"
      locator: "Proposition 3.7 and Lemma 3.1, printed pp. 15--16 and 20--21; the parabolic doubling (8.8)--(8.10), printed pp. 51--52"
    - title: "Hung Vinh Tran, Hamilton--Jacobi Equations: Theory and Applications, 2020 preliminary author manuscript of AMS Graduate Studies in Mathematics 213 (complete text)"
      url: "https://people.math.wisc.edu/~htran24/HJ-equations-Tran-AMS.pdf"
      locator: "Chapter 1 Section 6, Steps 1--2 of the proof of Theorem 1.19, printed pp. 27--28"
verification:
  precheck: pass
---

## Statement

Let $n\ge1$, $T>0$, let $u:\mathbb R^n\times[0,T]\to\mathbb R$ be bounded
above and upper semicontinuous, and let $v:\mathbb R^n\times[0,T]\to\mathbb R$
be bounded below and lower semicontinuous. Fix $\alpha,\rho>0$ and define
$$\Phi(x,y,t,s):=u(x,t)-v(y,s)-\frac{\alpha}{2}|x-y|^2-\frac{\alpha}{2}|t-s|^2-\rho\,(|x|^2+|y|^2)$$
on $\mathbb R^n\times\mathbb R^n\times[0,T]^2$, with
$M_{\alpha,\rho}:=\sup\Phi$. Then: (1) $M_{\alpha,\rho}$ is finite and
attained, and at every maximiser $(x_\alpha,y_\alpha,t_\alpha,s_\alpha)$ the
$C^1$ test functions
$$\psi_1(x,t):=\frac{\alpha}{2}|x-y_\alpha|^2+\frac{\alpha}{2}|t-s_\alpha|^2+\rho|x|^2,\qquad \psi_2(y,s):=-\frac{\alpha}{2}|x_\alpha-y|^2-\frac{\alpha}{2}|t_\alpha-s|^2-\rho|y|^2$$
satisfy: $u-\psi_1$ has a local maximum at $(x_\alpha,t_\alpha)$ and
$v-\psi_2$ has a local minimum at $(y_\alpha,s_\alpha)$, with
$$p_\alpha:=D_x\psi_1(x_\alpha)=\alpha(x_\alpha-y_\alpha)+2\rho x_\alpha,\qquad q_\alpha:=D_y\psi_2(y_\alpha)=\alpha(x_\alpha-y_\alpha)-2\rho y_\alpha,\qquad p^0_\alpha:=\partial_t\psi_1(t_\alpha)=\partial_s\psi_2(s_\alpha)=\alpha(t_\alpha-s_\alpha);$$
(2) for each fixed $\rho>0$, along any sequence of maximisers as
$\alpha\to\infty$,
$$\alpha\bigl(|x_\alpha-y_\alpha|^2+|t_\alpha-s_\alpha|^2\bigr)\longrightarrow0,\qquad (1+|p_\alpha|)\bigl(|x_\alpha-y_\alpha|+|t_\alpha-s_\alpha|\bigr)\longrightarrow0,\qquad |x_\alpha-y_\alpha|+|t_\alpha-s_\alpha|\longrightarrow0,$$
while $|q_\alpha-p_\alpha|=2\rho|x_\alpha+y_\alpha|$ is bounded by
$2\rho(|x_\alpha|+|y_\alpha|)$ and is not claimed to vanish for fixed $\rho$;
(3) at every maximiser
$$\frac{\alpha}{2}\bigl(|x_\alpha-y_\alpha|^2+|t_\alpha-s_\alpha|^2\bigr)+\rho\bigl(|x_\alpha|^2+|y_\alpha|^2\bigr)\le\sup u-\inf v-M_{\alpha,\rho},$$
so whenever the maximiser values $M_{\alpha,\rho}$ are bounded below by $m$ on
a set of parameters, the corresponding maximisers satisfy
$\rho(|x_\alpha|^2+|y_\alpha|^2)\le\sup u-\inf v-m$ and
$|q_\alpha-p_\alpha|\le2\bigl(2\rho(\sup u-\inf v-m)\bigr)^{1/2}$. No choice
principle is used.

## Facts & Assumptions

**Given:** Bounded-above upper semicontinuous $u$ and bounded-below lower semicontinuous $v$ on $\mathbb R^n\times[0,T]$, parameters $\alpha,\rho>0$, and the function $\Phi$ of the statement.

[F1] Upper semicontinuity of $u$ and lower semicontinuity of $v$ mean that every superlevel set of $u$ and every sublevel set of $v$ is relatively closed; equivalently, $-v$ is upper semicontinuous ([[def-semicontinuity-on-euclidean-subsets]]).

[F2] Every upper semicontinuous real-valued function on a nonempty compact subset of $\mathbb R^n$ is bounded above and attains its maximum ([[thm-euclidean-semicontinuous-extreme-value-theorem]]).

[F3] A subset of $\mathbb R^n$ is compact if and only if it is closed and bounded ([[thm-heine-borel-rn]]).

[F4] If $S\subseteq\mathbb R$ is nonempty, bounded above and $w$ is an upper bound of $S$ with the property that for every $\varepsilon>0$ there is $s\in S$ with $w-\varepsilon<s$, then $w=\sup S$; in particular $\sup S-\varepsilon<s$ for some $s\in S$ and every $\varepsilon>0$ ([[lem-sup-epsilon]]).

## Proof

**Proof technique:** coercive weight for existence, monotonicity in $\alpha$ for the localisation, and explicit $C^1$ contacts for the two tests.

1.1 Existence and finiteness of $M_{\alpha,\rho}$. On $\mathbb R^n\times\mathbb R^n\times[0,T]^2$ the function $\Phi$ is upper semicontinuous, being $u$ plus the upper semicontinuous $-v$ plus continuous terms by [F1]; it is bounded above by $\sup u-\inf v<\infty$ because the quadratic and weight terms are nonpositive. Pick any point $p_0:=(0,0,0,0)$ and put $m_0:=\Phi(p_0)\in\mathbb R$; the superlevel set $S_0:=\{\Phi\ge m_0\}$ is nonempty, closed by upper semicontinuity, and bounded because $\rho(|x|^2+|y|^2)\le\sup u-\inf v-m_0$ on it; hence $S_0$ is compact by [F3]. On $S_0$ the restriction of $\Phi$ is real-valued and upper semicontinuous, so it attains a maximum by [F2]; that maximum is a global maximum of $\Phi$ because every point outside $S_0$ has value $<m_0\le\max_{S_0}\Phi$. Hence $M_{\alpha,\rho}$ is finite and attained. [F1, F2, F3, algebra]

2.1 The relative contacts and their derivatives. Let $(x_\alpha,y_\alpha,t_\alpha,s_\alpha)$ be a maximiser. Fixing $(y,s)=(y_\alpha,s_\alpha)$, the inequality $\Phi(x,y_\alpha,t,s_\alpha)\le\Phi(x_\alpha,y_\alpha,t_\alpha,s_\alpha)$ for all $(x,t)$ reads $u(x,t)-\psi_1(x,t)\le u(x_\alpha,t_\alpha)-\psi_1(x_\alpha,t_\alpha)$, so $u-\psi_1$ has a local maximum at $(x_\alpha,t_\alpha)$; fixing $(x,t)=(x_\alpha,t_\alpha)$ similarly gives $v(y,s)-\psi_2(y,s)\ge v(y_\alpha,s_\alpha)-\psi_2(y_\alpha,s_\alpha)$, a local minimum of $v-\psi_2$ at $(y_\alpha,s_\alpha)$. The displayed gradients and time derivatives are the derivatives of the two quadratic test functions: $D_x\psi_1=\alpha(x-y_\alpha)+2\rho x$ evaluated at $x_\alpha$ gives $p_\alpha$, $D_y\psi_2=\alpha(x_\alpha-y)-2\rho y$ evaluated at $y_\alpha$ gives $q_\alpha$, and $\partial_t\psi_1=\alpha(t-s_\alpha)$, $\partial_s\psi_2=\alpha(t_\alpha-s)$ both equal $p^0_\alpha$ at the maximiser. [step 1.1, algebra]

3.1 The weight bound (3). At a maximiser, $\Phi(x_\alpha,y_\alpha,t_\alpha,s_\alpha)=M_{\alpha,\rho}$, that is $u(x_\alpha,t_\alpha)-v(y_\alpha,s_\alpha)-\frac{\alpha}{2}d_\alpha^2-\rho(|x_\alpha|^2+|y_\alpha|^2)=M_{\alpha,\rho}$; since $u(x_\alpha,t_\alpha)\le\sup u$ and $-v(y_\alpha,s_\alpha)\le-\inf v$, the sum of the two penalty terms is at most $\sup u-\inf v-M_{\alpha,\rho}$, which is (3). If in addition $M_{\alpha,\rho}\ge m$ then $\rho(|x_\alpha|^2+|y_\alpha|^2)\le\sup u-\inf v-m$, and $|q_\alpha-p_\alpha|\le2\rho(|x_\alpha|+|y_\alpha|)\le2\rho\sqrt{2(|x_\alpha|^2+|y_\alpha|^2)}\le2(2\rho(\sup u-\inf v-m))^{1/2}$. [step 2.1, algebra]

4.1 Localisation as $\alpha\to\infty$. Fix any sequence $\alpha_j\to\infty$ and any corresponding sequence of maximisers $(x_j,y_j,t_j,s_j)$; these are exactly the sequences quantified in part (2). For fixed $\rho$, $\alpha\mapsto M_{\alpha,\rho}$ is nonincreasing and bounded below by $\Phi(0,0,0,0)$, so it converges. Put $d_j^2:=|x_j-y_j|^2+|t_j-s_j|^2$. Evaluating the $\alpha_j/2$-function at this same maximiser gives $M_{\alpha_j/2,\rho}\ge M_{\alpha_j,\rho}+\frac{\alpha_j}{4}d_j^2$, hence $\alpha_jd_j^2\le4(M_{\alpha_j/2,\rho}-M_{\alpha_j,\rho})\to0$. In particular $|x_j-y_j|+|t_j-s_j|\to0$. By step 3.1, $|x_j|$ is uniformly bounded for fixed $\rho$. With $p_j=\alpha_j(x_j-y_j)+2\rho x_j$, the bounds $\alpha_j|x_j-y_j|(|x_j-y_j|+|t_j-s_j|)\le2\alpha_jd_j^2\to0$ and $2\rho|x_j|(|x_j-y_j|+|t_j-s_j|)\to0$ give $(1+|p_j|)(|x_j-y_j|+|t_j-s_j|)\to0$. Finally $q_j-p_j=-2\rho(x_j+y_j)$ and step 3.1 gives the asserted bound on $|q_j-p_j|$, which need not vanish for fixed $\rho$. The argument applies to every given sequence of maximisers and selects none. [step 2.1, step 3.1, F4, algebra]

5.1 Conclusion. Part (1) is steps 1.1 and 2.1, part (2) is step 4.1, and part (3) is step 3.1; the maximiser is obtained from the compactness of a closed bounded superlevel set and the extreme-value property for upper semicontinuous functions, and no sequence, point or index is selected in the construction. [step 1.1, step 2.1, step 3.1, step 4.1] ∎ 

## Remarks

The contacts in part (1) are relative to $\mathbb R^n\times[0,T]$. A maximiser may have $t_\alpha=0$ or $s_\alpha=0$ (for example, $u(x,t)=-t$, $v(y,s)=s$), or lie on a terminal face. The corresponding derivative belongs to the first-order superjet or subjet of [[lem-viscosity-testing-by-first-order-jets]] only when the contact time is in $(0,T)$, where the restricted domain is open. Viscosity inequalities in the interior therefore require a separate exclusion of time-boundary contacts.
