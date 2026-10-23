---
id: lem-fd-gibbs-entropy-residual
kind: lemma
title: "Gibbs cancellation and entropy-production identity"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
page: fd-mf03
dependency_level: 3
proof_strategy: direct
deps:
  - def-fd-simple-fluid-state
  - lem-fd-helmholtz-chart
  - lem-fd-local-balance-equivalence
  - thm-chain-rule-for-total-derivatives
  - def-countable-choice
dependency_roles:
  def-fd-simple-fluid-state: mathematical-premise
  lem-fd-helmholtz-chart: mathematical-premise
  lem-fd-local-balance-equivalence: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  def-countable-choice: mathematical-premise
justified_by: []
aliases: []
physical_scope: null
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Rohan Abeyaratne, Continuum Mechanics, Volume II, Chapter 5 §§5.1–5.2, printed pp. 147–151"
      url: "https://web.mit.edu/abeyaratne/Volumes/RCA_Vol_II.pdf"
verification:
  precheck: pass
---

## Statement
Assume $\mathrm{AC}_\omega$: every sequence $(X_n)_{n\in\mathbb N}$ of nonempty sets has a function $f$ with $f(n)\in X_n$ for every $n$. Let $U\subset(0,\infty)\times\mathbb R$ be open and let $e:U\to\mathbb R$ have continuous total derivatives through order two. For $(v,s)\in U$, $v$ is the specific-volume coordinate, $s$ the specific-entropy coordinate, and $e(v,s)$ the specific-energy value; set $T=e_s(v,s)$ and $p=-e_v(v,s)$, with each state partial derivative holding the other coordinate fixed.

Let $I\subset\mathbb R$ be a nonempty open interval. Let $B\subset\mathbb R^3$ be a nonempty bounded open set with $C^1$ boundary, meaning that near every boundary point it is the graph of a continuously differentiable function after a rigid coordinate change. Let $N\subset\mathbb R^3$ be open with $\overline B\subset N$, and let $\chi\in C^2(I\times N,\mathbb R^3)$, where $C^r$ means that all coordinate partial derivatives through total order $r$ exist and are continuous. For each $t\in I$, assume $\chi_t(a):=\chi(t,a)$ is a bijection from $N$ onto an open set with a $C^2$ inverse and $\det D_a\chi(t,a)>0$. Define $\Omega_t:=\chi_t(B)$, $\Omega:=\{(t,x):t\in I,\ x\in\Omega_t\}$, and $u(t,x):=\partial_t\chi(t,\chi_t^{-1}(x))$; this swept set $\Omega$ is open. For a scalar or vector field $f$ on $\Omega$, set $D_tf:=\partial_tf+\sum_{j=1}^3u_j\partial_{x_j}f$ componentwise. For each nonempty bounded open $C^1$ subdomain $V$ with $\overline V\subset B$, set $P_t:=\chi_t(V)$; here a $C^1$ domain is locally on one side of a $C^1$ boundary graph.

Let $\rho,v,s,T,p,q,r,b$ be fields on $\Omega$ with continuous first partial derivatives, with $\rho>0$, $(v,s)\in U$, $v=1/\rho$, $T=e_s(v,s)>0$, and $p=-e_v(v,s)$. Let $e$ on $\Omega$ denote the composition $e(v,s)$. Let $\sigma$ be a continuously differentiable $3\times3$ stress matrix field, let $\tau$ be a continuously differentiable $3\times3$ matrix field, and suppose $\sigma=-pI+\tau$, where $I$ is the $3\times3$ identity. For a scalar field $h$, define $(\nabla h)_i:=\partial_{x_i}h$; define $L:=\nabla u$ by $L_{ij}:=\partial_{x_j}u_i$, $D:=(L+L^T)/2$, and $\theta:=\operatorname{tr}D=\sum_{i=1}^3\partial_{x_i}u_i$. Define $A:B:=\sum_{i,j=1}^3A_{ij}B_{ij}$ for matrices, $\operatorname{div}q:=\sum_i\partial_{x_i}q_i$, and $\operatorname{div}(q/T)$ componentwise. Put $a_m:=\partial_tu+(u\cdot\nabla)u$, $k:=|u|^2/2$, and $E:=e+k$. The fields $u,q,b$ are vector-valued and $r$ is scalar-valued.

Assume there is a contact traction $t_c(t,y,n)\in\mathbb R^3$ depending on a surface only through its point $y$ and outward unit normal $n\in S^2$, continuous in $(y,n)$ and uniformly bounded near each point. Assume its local force balance $\int_{\partial P}t_c(t,y,\nu_P(y))\,dS_y+\int_P\rho(t,y)(b(t,y)-a_m(t,y))\,dy=0$ for every nonempty bounded open $C^1$ subdomain $P$ whose closure is compactly contained in $\Omega_t$. Surface integrals use Euclidean surface measure with chart area density $\sqrt{\det(DX^TDX)}$. Suppose the unique Cauchy stress supplied by this contact balance satisfies $t_c(t,y,n)=\sigma(t,y)n$ and has the stated $C^1$ regularity; the contact result alone does not imply that regularity.

Assume the pointwise continuity equation $\partial_t\rho+\operatorname{div}(\rho u)=0$ and, for every such material subdomain $V$ and every $t\in I$, the integral balances
$$\frac{d}{dt}\int_{P_t}\rho u\,dx=\int_{P_t}\rho b\,dx+\int_{\partial P_t}\sigma\nu\,dS,$$
$$\frac{d}{dt}\int_{P_t}x\times(\rho u)\,dx=\int_{P_t}x\times(\rho b)\,dx+\int_{\partial P_t}x\times(\sigma\nu)\,dS,$$
$$\frac{d}{dt}\int_{P_t}\rho E\,dx=\int_{P_t}\rho b\cdot u\,dx+\int_{\partial P_t}(\sigma\nu)\cdot u\,dS-\int_{\partial P_t}q\cdot\nu\,dS+\int_{P_t}\rho r\,dx,$$
where $\nu$ is the outward unit normal, $\times$ is the ordinary vector cross product, and all fields are continuous up to the swept closures. The angular-momentum balance gives $\sigma=\sigma^T$, and the local internal-energy equation supplied by these hypotheses is $\rho D_te=\sigma:D-\operatorname{div}q+\rho r$. Define the entropy residual $\mathcal G:=\rho D_ts+\operatorname{div}(q/T)-\rho r/T$. Then
$$\mathcal G=\frac{\tau:D}{T}-\frac{q\cdot\nabla T}{T^2}.$$
At any state with $e_{ss}>0$, a unique local $C^1$ branch $s(v,T)$ satisfies $e_s(v,s(v,T))=T$; the local Helmholtz function $a(v,T):=e(v,s(v,T))-Ts(v,T)$ then satisfies $a_T=-s$ and $a_v=-p$. The entropy identity does not assert $\mathcal G\ge0$ and makes no empirical claim. In the physical SI interpretation, $\rho$ is in $\mathrm{kg\,m^{-3}}$, $u$ in $\mathrm{m\,s^{-1}}$, $b$ in $\mathrm{m\,s^{-2}}$, $v$ in $\mathrm{m^3\,kg^{-1}}$, $e,k,E$ in $\mathrm{J\,kg^{-1}}$, $s$ in $\mathrm{J\,kg^{-1}\,K^{-1}}$, $T$ in $\mathrm K$, $p,\sigma,\tau,t_c$ in $\mathrm{Pa}$, $q$ in $\mathrm{W\,m^{-2}}$, and $r$ in $\mathrm{W\,kg^{-1}}$.

## Statement references

[Rohan Abeyaratne, Continuum Mechanics, Volume II, Chapter 5 §§5.1–5.2, printed pp. 147–151](https://web.mit.edu/abeyaratne/Volumes/RCA_Vol_II.pdf)

## Facts & Assumptions

**Given:** The state relation, motion, fields, countable-choice premise, contact balance, continuity equation, and integral balances in the Statement.

[F1] [[def-fd-simple-fluid-state]]: $e$ has continuous total derivatives through order two, $T=e_s$, $p=-e_v$, and each state partial derivative holds the other state coordinate fixed.

[F2] [[lem-fd-helmholtz-chart]]: when $T=e_s>0$ and $e_{ss}>0$ at a state, a unique local $C^1$ chart $s(v,T)$ exists and $a(v,T)=e(v,s(v,T))-Ts(v,T)$ satisfies $a_T=-s$ and $a_v=e_v=-p$.

[F3] [[thm-chain-rule-for-total-derivatives]]: for differentiable maps on open Euclidean domains, the derivative of a composition is the composition of their derivatives.

[F4] [[def-countable-choice]]: $\mathrm{AC}_\omega$ says every sequence of nonempty sets has a choice function; it is the only choice strength assumed by the balance-equivalence input.

[L1] [[lem-fd-local-balance-equivalence]]: its current Statement assumes $\mathrm{AC}_\omega$, a time interval containing $0$, a $C^2$ orientation-preserving diffeomorphic motion of a bounded $C^1$ material region, positive $C^1$ density and fields on neighborhoods of material subdomains, the continuity equation, linear- and angular-momentum integral balances, total-energy integral balance, a Cauchy stress with $C^1$ regularity, and the stated surface-measure convention. It concludes $\sigma=\sigma^T$ and $\rho D_te=\sigma:L-\operatorname{div}q+\rho r$. Its Statement denotes pointwise contact traction by $\tau$; this item uses $t_c$ for that vector to distinguish it from its matrix $\tau$ in $\sigma=-pI+\tau$. Those hypotheses and conventions are included in this Statement; the proof translates an arbitrary nonempty open time interval to one containing $0$. The current carrier is present but its current Step 1 readiness record is missing, so this use remains conditional and escalated pending that record.

[A1] All fields have the domains and continuous first-partial regularity stated in the Statement, with $\rho>0$, $T>0$, and the specified state relation.

[A2] The local Cauchy contact balance and material-subdomain continuity, linear/angular-momentum, and total-energy balances in the Statement are hypotheses, not conclusions from a physical postulate.

[A3] Assume $\mathrm{AC}_\omega$ exactly as stated; no full Axiom of Choice is assumed.

## Proof


1.1 The stated mass equation expands to $D_t\rho+\rho\theta=0$, since $\operatorname{div}(\rho u)=\sum_i u_i\partial_{x_i}\rho+\rho\sum_i\partial_{x_i}u_i$. Because $v=1/\rho$, the chain rule gives $D_tv=-\rho^{-2}D_t\rho=v\theta$, hence $\rho D_tv=\theta$. [A1, F1, given, algebra]

2.1 By [F1] and [F3], $D_te=e_vD_tv+e_sD_ts=-pD_tv+T D_ts$. Multiplying by $\rho$ and using step 1.1 gives $\rho D_te=-p\theta+\rho T D_ts$. [A1, F1, F3, step 1.1, algebra]

3.1 Choose any $t_0\in I$ and set $I_0:=I-t_0$, an open interval containing $0$. For $t'\in I_0$, define $\widehat\chi(t',a):=\chi(t'+t_0,a)$ and define each shifted field by $\widehat f(t',x):=f(t'+t_0,x)$. The shifted motion is still $C^2$ and orientation-preserving, $\widehat P_{t'}=P_{t'+t_0}$, and its material derivative is the original one at time $t'+t_0$. Time translation preserves the stated regularity, state relations, local contact balance, continuity equation, and each material-subdomain integral balance because $d/dt'=d/dt$ under $t=t'+t_0$. Thus the actual hypotheses and interval convention of [L1] hold on $I_0$, so [L1] gives $\sigma=\sigma^T$ and $\rho D_te=\sigma:L-\operatorname{div}q+\rho r$ throughout the original interval. Since $\sigma=-pI+\tau$, symmetry of $\sigma$ implies symmetry of $\tau$; therefore $\sigma:L=\sigma:D=-p\operatorname{tr}D+\tau:D=-p\theta+\tau:D$. Equating this expression for $\rho D_te$ with step 2.1 and cancelling $-p\theta$ yields $\rho T D_ts=\tau:D-\operatorname{div}q+\rho r$. [A1, A2, A3, F4, L1, step 2.1, algebra]

4.1 Divide step 3.1 by $T>0$ and expand the product rule componentwise: $$ \operatorname{div}(q/T)=\sum_i\partial_{x_i}(q_i/T)=\frac{\operatorname{div}q}{T}-\frac{q\cdot\nabla T}{T^2}. $$ Substitution into the definition of $\mathcal G$ cancels the heat-supply and divergence terms, giving $\mathcal G=\tau:D/T-q\cdot\nabla T/T^2$. The Helmholtz-chart identities in the Statement are the conditional consequence [F2]. [A1, F2, step 3.1, algebra] ∎
