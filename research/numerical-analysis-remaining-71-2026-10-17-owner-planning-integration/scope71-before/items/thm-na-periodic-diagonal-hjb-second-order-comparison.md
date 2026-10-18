---
id: thm-na-periodic-diagonal-hjb-second-order-comparison
kind: theorem
title: Comparison for periodic diagonal controlled-diffusion HJB equations
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 5
deps: [def-na-periodic-diagonal-controlled-diffusion-hjb-problem, def-na-second-order-parabolic-viscosity-solution, def-viscosity-subsolution-and-supersolution, thm-na-elliptic-theorem-of-sums, lem-na-elliptic-spacetime-jets-imply-parabolic-hjb-inequalities, thm-euclidean-semicontinuous-extreme-value-theorem, thm-heine-borel-rn, cor-bolzano-weierstrass-in-rn, def-axiom-of-choice]
proof_strategy: contradiction
axiom_base: Axiom of Choice is retained from the analytic theorem-of-sums supplier and permits the countable maximizing sequences used below.
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Crandall, Ishii and Lions, User's guide to viscosity solutions
      url: https://arxiv.org/pdf/math/9207212
      locator: Section 3, Theorem 3.2, Proposition 3.7 and Example 3.6; Section 8, Remark 8.1 and proof of Theorem 8.2.
---

## Statement

Assume the Axiom of Choice and the exact finite-control coefficient hypotheses of
[[def-na-periodic-diagonal-controlled-diffusion-hjb-problem]], in any dimension
$d\ge1$. Let $u$ be bounded upper semicontinuous and $v$ bounded lower
semicontinuous on $\mathbb T^d\times(0,T)$; assume their interior
$C^{1,2}$-test inequalities are those of
[[def-na-second-order-parabolic-viscosity-solution]], using the local
maximum/minimum contact convention of
[[def-viscosity-subsolution-and-supersolution]]. Suppose the raw relaxed initial
traces are ordered at every $x\in\mathbb T^d$:
$$\limsup_{\substack{(y,t)\to(x,0)\\t>0}}u(y,t)\le\liminf_{\substack{(y,t)\to(x,0)\\t>0}}v(y,t).$$
Then $u\le v$ on $\mathbb T^d\times(0,T)$. In particular this applies to the
model's common continuous initial datum and its two relaxed initial
inequalities. Defining the values at $t=0$ by their respective raw upper and
lower envelopes gives the same order there. No continuity, spatial Lipschitz
bound, or differentiability of $u,v$ is assumed.

## Facts & Assumptions

**Given:** The exact coefficient class, bounded semicontinuous sub- and
supersolutions, ordered relaxed traces, and the Axiom of Choice.

[A1] Every family of nonempty sets has a choice function ([[def-axiom-of-choice]]).

[F1] The model has finite nonempty controls, $\alpha_j^c\ge\alpha_*>0$,
and common bounds and a common joint space-time Lipschitz constant $L$
for $\alpha,b,f$
([[def-na-periodic-diagonal-controlled-diffusion-hjb-problem]]).

[F2] At a local maximum of $w_1(z_1)+w_2(z_2)-\phi(z_1,z_2)$ for USC
functions on open Euclidean sets and $C^2$ $\phi$, for every $\mu>0$
there are closed elliptic superjets with gradients $D_i\phi$ and Hessians
$H_i$ satisfying
$\operatorname{diag}(H_1,H_2)\le D^2\phi+\mu(D^2\phi)^2$
([[thm-na-elliptic-theorem-of-sums]]).

[F3] The closed elliptic space-time jets of the subsolution and supersolution
satisfy their parabolic HJB inequalities using the time-gradient component
and spatial Hessian block
([[lem-na-elliptic-spacetime-jets-imply-parabolic-hjb-inequalities]]).

[F4] USC functions attain maxima on compact Euclidean sets. Closed bounded
sets are compact, and bounded sequences have convergent subsequences
([[thm-euclidean-semicontinuous-extreme-value-theorem]],
[[thm-heine-borel-rn]], [[cor-bolzano-weierstrass-in-rn]]). Torus compactness follows by lifting to the compact
fundamental cube and taking the quotient. The declared Axiom of Choice
permits countable maximizing-point selections ([[def-axiom-of-choice]]).

[F5] The flat unit-torus distance is $D(x,y)=\min_{k\in\mathbb Z^d}|\tilde x-\tilde y+k|$, where $\tilde x,\tilde y$ are any lifts to $\mathbb R^d$; when $D(x,y)<1/2$, the minimizing lift is locally unique and $D^2$ is smooth there.

## Proof

1.1 Define $u(x,0)$ as the raw upper trace and $v(x,0)$ as the raw lower trace. Boundedness makes them finite. For example, if $x_k\to x$ and $u(x_k,0)$ approaches its limsup, the raw upper-trace definition and [A1] let us select interior $(y_k,t_k)$ with $|y_k-x_k|+t_k<1/k$ and $u(y_k,t_k)>u(x_k,0)-1/k$. Thus $y_k\to x$, $t_k\to0$, and $\limsup_k u(x_k,0)\le u(x,0)$. The lower-trace argument is dual. For a sequence with positive times tending to zero, the raw trace definition gives the USC/LSC inequalities directly; splitting a mixed sequence into positive-time and initial-edge subsequences proves the extensions are USC/LSC on the closed initial edge. The assumed order gives $u(x,0)\le v(x,0)$. Assume for contradiction that $u(x_*,t_*)-v(x_*,t_*)>0$ at some $0<t_*<T$. Choose $S$ with $t_*<S<T$, then choose $\eta,\gamma>0$ sufficiently small that $$m:=u(x_*,t_*)-v(x_*,t_*)-\eta t_*-\gamma/(S-t_*)>0.$$ Put $P(t)=\eta t+\gamma/(S-t)$. If $u(x,t)-v(y,s)-P(t)\ge0$, boundedness bounds $P(t)$ above by $\|u\|_\infty+\|v\|_\infty$, so $t\le S-c$ for some $c>0$. [A1, F4, given, choose, assume-contra]

2.1 Using [F5], define $$M_\varepsilon=\max_{x,y\in\mathbb T^d,\ 0\le t<S}\{u(x,t)-v(y,t)-P(t)-D(x,y)^2/(2\varepsilon)\}.$$ The maximum exists by step 1.1 and [F4]: the expression is USC, and its positive superlevel sets stay in a compact time interval bounded away from $S$. Also $M_\varepsilon\ge m$. Write $M_0=\max_{x,\ 0\le t<S}(u(x,t)-v(x,t)-P(t))\ge m$, also attained. At any maximizing triple $(x_\varepsilon,y_\varepsilon,t_\varepsilon)$, boundedness gives $D(x_\varepsilon,y_\varepsilon)^2=O(\varepsilon)$. Compactness and semicontinuity imply $M_\varepsilon\to M_0$: for every sequence $\varepsilon\downarrow0$, a subsequence of maximizers tends to $(x,x,t)$, and the limsup of the unpenalized expression is at most $M_0$, whereas $M_\varepsilon\ge M_0$. Moreover $$0\le D(x_\varepsilon,y_\varepsilon)^2/(4\varepsilon)\le M_{2\varepsilon}-M_\varepsilon\longrightarrow0,$$ by evaluating the $2\varepsilon$ maximum at an $\varepsilon$ maximizer. These conclusions hold uniformly over maximizing triples, by the same sequential compactness argument. No sequence of these maximizers can have $t_\varepsilon\to0$: then $x_\varepsilon,y_\varepsilon\to x$ along a subsequence and semicontinuity and the initial order give limsup of their maximum values at most $-P(0)<0$, contradicting $M_\varepsilon\ge m$. [A1, F4, F5, step 1.1, algebra]

3.1 For fixed sufficiently small $\varepsilon$, introduce independent times and maximize $$\Phi_{\varepsilon,\delta}(x,t,y,s)=u(x,t)-v(y,s)-P(t)-D(x,y)^2/(2\varepsilon)-(t-s)^2/(2\delta)$$ over $x,y\in\mathbb T^d$, $0\le t<S$, $0\le s\le S$. Maxima exist by step 1.1 and [F4] and are at least $M_\varepsilon\ge m$. Boundedness gives $|t-s|=O(\sqrt\delta)$ and $t\le S-c$ uniformly. For fixed $\varepsilon$, compactness shows that as $\delta\downarrow0$ every limit of maximizing quadruples is a synchronized maximizer of $M_\varepsilon$: the limsup of the expression without the temporal penalty is at most $M_\varepsilon$, while the maximum is at least $M_\varepsilon$. Hence the temporal penalty tends to zero too. By step 2.1 and [F5], for all sufficiently small $\varepsilon$ these limiting times are positive and the spatial distance is less than $1/2$. Consequently for each such $\varepsilon$ and all sufficiently small $\delta$, both times are strictly in $(0,S)$ and $D(x,y)^2=|r|^2$ is smooth near the maximizer in local lifts with $r=x-y$ and $|r|=D(x,y)$. Thus all contacts used next are interior in the original cylinder. [A1, F4, F5, step 1.1, step 2.1, algebra]

4.1 At such a maximizer apply [F2] to $u(t,x)$ and $-v(s,y)$ with $$\phi(t,x,s,y)=|x-y|^2/(2\varepsilon)+(t-s)^2/(2\delta)+P(t),\qquad\mu=\varepsilon.$$ It gives a closed upper jet of $u$ with gradient $(a,p)$ and Hessian $H$, and a closed lower jet of $v$ with gradient $(b,p)$ and Hessian $K$, where $$p=r/\varepsilon,\quad a=(t-s)/\delta+P'(t),\quad b=(t-s)/\delta,\quad a-b=P'(t)\ge\eta.$$ Negating the jet of $-v$ gives the lower jet of $v$ directly from its defining expansion and witnessing sequence. Let $X,Y$ be the spatial principal blocks of $H,K$. The full Hessian of $\phi$ has no space-time mixed entries. Its spatial block is $\varepsilon^{-1}B$ with $B=\begin{pmatrix}I&-I\\-I&I\end{pmatrix}$ and $B^2=2B$. Restricting the upper matrix inequality in [F2] to vectors with zero temporal components therefore gives $$\begin{pmatrix}X&0\\0&-Y\end{pmatrix}\le(3/\varepsilon)B.$$ The temporal Hessian, including $P''(t)$ and the potentially large $1/\delta$, contributes nothing to this spatial restriction. [F2, F5, step 3.1, algebra]

5.1 For each control $c$ write $G_c(x,t,p,X)=\sum_j(\alpha_j^c(x,t)X_{jj}+b_j^c(x,t)p_j)+f^c(x,t)$. By [F3], $a\le\max_cG_c(x,t,p,X)$ and $b\ge\max_cG_c(y,s,p,Y)$. Finiteness gives $$\eta\le a-b\le\max_c\{G_c(x,t,p,X)-G_c(y,s,p,Y)\}.$$ For $\sigma_j^c=\sqrt{\alpha_j^c}$, rationalization and [F1] give $$|\sigma_j^c(x,t)-\sigma_j^c(y,s)|\le\frac{L}{2\sqrt{\alpha_*}}(|r|+|t-s|).$$ Evaluate the spatial matrix inequality of step 4.1 on each vector $(\sigma_j^c(x,t)e_j,\sigma_j^c(y,s)e_j)$ and sum over $j$ to obtain $$\sum_j(\alpha_j^c(x,t)X_{jj}-\alpha_j^c(y,s)Y_{jj})\le\frac3\varepsilon\sum_j|\sigma_j^c(x,t)-\sigma_j^c(y,s)|^2\le\frac{3dL^2}{4\alpha_*\varepsilon}(|r|+|t-s|)^2.$$ The drift difference is bounded by $C(|r|+|t-s|)|r|/\varepsilon$, and the forcing difference by $L(|r|+|t-s|)$, uniformly over the finite controls, using [F1]. Hence a constant $C$ independent of $\varepsilon,\delta$ satisfies $$\eta\le C\left\{\frac{(|r|+|t-s|)^2}{\varepsilon}+\frac{(|r|+|t-s|)|r|}{\varepsilon}+|r|+|t-s|\right\}.$$ [F1, F3, step 4.1, algebra]

6.1 First let $\delta\downarrow0$ for fixed $\varepsilon$, selecting a convergent subsequence of maximizing quadruples by [A1] and [F4]. Since $\varepsilon$ is fixed, every term containing $|t-s|/\varepsilon$ vanishes. The remaining spatial pair is a maximizer of $M_\varepsilon$, so step 5.1 gives $\eta\le C'(D(x_\varepsilon,y_\varepsilon)^2/\varepsilon+D(x_\varepsilon,y_\varepsilon))$. Now let $\varepsilon\downarrow0$. Both terms vanish by step 2.1, contradicting $\eta>0$. The assumed positive gap is impossible, so $u\le v$ at every interior point. The initial-edge assertion is its assumed order. [A1, F4, step 2.1, step 3.1, step 5.1, discharge-contradiction] ∎
