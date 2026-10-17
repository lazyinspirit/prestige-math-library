---
id: lem-tgr-perfect-fluid-projection
kind: lemma
title: "Perfect stress and particle balances with entropy identity"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 2
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
deps:
  - def-tgr-local-fluid-state
  - lem-tgr-local-gibbs-euler
  - def-gr-smooth-lorentzian-objects
  - thm-gr-nondegenerate-levi-civita-and-tensor-derivative
  - def-countable-choice
dependency_roles:
  def-tgr-local-fluid-state: mathematical-premise
  lem-tgr-local-gibbs-euler: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  thm-gr-nondegenerate-levi-civita-and-tensor-derivative: mathematical-premise
  def-countable-choice: mathematical-premise
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Eric Gourgoulhon, An Introduction to Relativistic Hydrodynamics, arXiv:gr-qc/0603009v1"
      url: "https://arxiv.org/pdf/gr-qc/0603009"
      locator: "PDF pp. 16–20, §4.3 and §§5.2–5.4: local Gibbs variables, perfect stress divergence, parallel and orthogonal projections."
    - title: "Paul Romatschke, Relativistic Viscous Fluid Dynamics and Non-Equilibrium Entropy, arXiv:0906.4787v2"
      url: "https://arxiv.org/pdf/0906.4787"
      locator: "PDF pp. 7–8, §3: stress decomposition and the Landau/Eckart frame distinction; the local balance proof here is independent."
---

## Statement

Let $(M,g,N)$ be a smooth time-oriented Lorentzian four-manifold of signature
$(-,+,+,+)$, let $\nabla$ be its metric-compatible torsion-free connection, and
let $u$ be a smooth future-directed vector field with $g(u,u)=-1$. Put
$\Delta^{ab}=g^{ab}+u^au^b$, $D=u^a\nabla_a$, $\theta=\nabla_a u^a$,
$a^b=u^a\nabla_a u^b$, and $\Delta^b{}_a=\delta^b{}_a+u^bu_a$.
Take a smooth fixed-composition state from [[def-tgr-local-fluid-state]] with
$n>0$, $T>0$, $s=n\sigma_p$, and $h=\epsilon+p=Ts+\mu n$ as in
[[lem-tgr-local-gibbs-euler]]. Define the perfect stress tensor and particle
current by

$$T^{ab}=\epsilon u^a u^b+p\Delta^{ab},\qquad J^a=nu^a.$$

For any smooth vector field $f^b$, the balance equation $\nabla_aT^{ab}=f^b$
is equivalent to the pair

$$D\epsilon+h\theta=-u_bf^b,\qquad ha^c+\Delta^{ca}\nabla_a p=\Delta^c{}_bf^b,$$

and $\nabla_aJ^a=0$ is equivalent to $Dn+n\theta=0$. Whenever both balances
hold, the exact entropy identities are

$$T\nabla_a(su^a)=-u_bf^b,\qquad nT D\sigma_p=-u_bf^b.$$

In particular, when $f=0$, the entropy current $su$ is divergence-free and
specific entropy is advected, $D\sigma_p=0$. These are conditional identities
for supplied smooth fields; they assert no solution existence or physical
applicability beyond the stated model data.

## Facts & Assumptions

**Given:** A nonempty open set $O$ in a smooth time-oriented Lorentzian
four-manifold $(M,g,N)$ of signature $(-,+,+,+)$; a smooth future unit field
$u$ on $O$; a $C^2$ state map into a nonempty open material-state domain; and
the fields and balances specified in the Statement.

[A1] The geometric and tensor-bundle construction carries Countable Choice
$\mathrm{AC}_\omega$ ([[def-countable-choice]]); no stronger choice principle is
assumed.

[F1] [[def-gr-smooth-lorentzian-objects]]: $M$ is a smooth four-manifold without
boundary, $g$ is a smooth symmetric nondegenerate metric of signature
$(-,+,+,+)$, and $N$ selects the future cone. Its stated tangent-bundle
construction assumes only $\mathrm{AC}_\omega$.

[F2] [[def-tgr-local-fluid-state]]: on a nonempty open set $O$, the observer
field is smooth and future unit timelike; a local state has a nonempty open
domain $X\subset(0,\infty)\times\mathbb R$, a specified $e\in C^2(X)$, and a
$C^2$ state map $(v,\sigma_p):O\to X$. It defines $n=v^{-1}$,
$s=n\sigma_p$, $\epsilon=ne$, $T=e_{\sigma_p}$, $p=-e_v$, $H=e+pv$,
$h=\epsilon+p=nH$, and $\mu=H-T\sigma_p$. The convention is signature
$(-,+,+,+)$ with $x^0=ct$; $c$ has units $\mathrm{m\,s^{-1}}$, $u$ is
dimensionless, $n$ has units $\mathrm{marker\,m^{-3}}$, $s$ has units
$\mathrm{J\,K^{-1}\,m^{-3}}$, $T$ has units K, $\mu$ has units
$\mathrm{J\,marker^{-1}}$, and $\epsilon,p,h$ have units Pa.

[F3] [[lem-tgr-local-gibbs-euler]] (current batch-53 draft): for this state,
$d\epsilon=T\,ds+\mu\,dn$ and $\epsilon+p=Ts+\mu n$ as identities of
differentials and state functions. The identities are used conditionally at
the current carrier's stated $C^2$ hypotheses.

[F4] [[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]]: for a smooth
nondegenerate metric, the metric-selected connection is torsion-free and
metric-compatible, and its induced tensor derivative obeys the product and
contraction rules. This is the published mathematical supplier actually
inspected here.

[A2] Define $\Delta^{ab}=g^{ab}+u^au^b$, $D=u^a\nabla_a$,
$\theta=\nabla_a u^a$, and $a^b=u^a\nabla_a u^b$. The perfect model data are
$T^{ab}=\epsilon u^a u^b+p\Delta^{ab}$, $J^a=nu^a$, and
$\nabla_aT^{ab}=f^b$, $\nabla_aJ^a=0$.
In SI, $f^a$ has units $\mathrm{N\,m^{-3}}$, $\epsilon,p,h$ have units Pa,
$n$ has units $\mathrm{marker\,m^{-3}}$, and $s$ has units
$\mathrm{J\,K^{-1}m^{-3}}$.

## Proof

1.1 Metric compatibility gives $\nabla_a\Delta^{ab}=\theta u^b+a^b$, and
$u_ba^b=0$ follows by differentiating $u_bu^b=-1$. Expanding the two terms of
$T^{ab}$ with the tensor product rule in [F4] yields
$$\nabla_aT^{ab}=(D\epsilon+h\theta)u^b+ha^b+\Delta^{ab}\nabla_a p.$$
Contracting with $u_b$ gives $-(D\epsilon+h\theta)=u_bf^b$; projecting with
$\Delta^c{}_b$ gives $ha^c+\Delta^{ca}\nabla_a p=\Delta^c{}_bf^b$. The
parallel and orthogonal projections sum to the identity, so these two equations
also imply the full balance equation. [A1, A2, F1, F4, algebra]

2.1 The product rule gives $\nabla_aJ^a=Dn+n\theta$. Along the state map,
[F3] gives $D\epsilon=T Ds+\mu Dn$ and $h=Ts+\mu n$, hence
$$D\epsilon+h\theta=T(Ds+s\theta)+\mu(Dn+n\theta) =T\nabla_a(su^a)+\mu\nabla_aJ^a.$$
Substituting the two balances proves $T\nabla_a(su^a)=-u_bf^b$. Since
$s=n\sigma_p$, the particle balance also gives
$\nabla_a(su^a)=nD\sigma_p+\sigma_p\nabla_aJ^a=nD\sigma_p$; therefore
$nT D\sigma_p=-u_bf^b$. Positivity of $n,T$ permits the isolated conclusions
when $f=0$. [A2, F2, F3, step 1.1, algebra] ∎
