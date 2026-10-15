---
id: def-rpm-h-background-and-model-quantities
kind: definition
title: "Lorentz background, particle quantities and parameter units"
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 1
provenance:
  statement: ai-altered
  proof: not-applicable
deps:
  - def-countable-choice
  - def-gr-smooth-lorentzian-objects
  - def-rpm-h-cotangent-phase-space
  - def-rpm-spacetime-observer-and-worldline
physical_scope: "Classical spinless test-particle quantities on a prescribed smooth time-oriented Lorentzian four-manifold. Mass and c are primitive parameters of this model; the length functional is mentioned only for its units, and no stationary-action postulate, force law, backreaction, empirical result, or universal identification with another framework is adopted."
dependency_roles:
  def-countable-choice: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-rpm-h-cotangent-phase-space: mathematical-premise
  def-rpm-spacetime-observer-and-worldline: formulation-prerequisite
sources:
  references:
    - title: "Sean M. Carroll, Lecture Notes on General Relativity, complete lecture notes (arXiv:gr-qc/9712019v1)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
      locator: "Complete 238-page notes; Chapter 1, printed pp. 25–27, and Chapter 3, printed pp. 68–72; full relevant sections inspected."
---

## Definition

Assume countable choice ACω, as in [[def-countable-choice]], for the smooth cotangent-bundle carrier convention used by this page; no full Axiom of Choice is assumed.

Fix a prescribed smooth time-oriented Lorentzian four-manifold $(M,g,T)$ with signature $(-+++)$, as in [[def-gr-smooth-lorentzian-objects]]. Here $T$ denotes the supplied smooth timelike field selecting the future cone, called $N$ in that geometric definition. Use the distinction among a spacetime, a worldline, a pointwise observer, an observer congruence, a tetrad and a chart given in [[def-rpm-spacetime-observer-and-worldline]]. This definition does not make $g$ dynamical.

At each $x\in M$, define $v^\flat:=g_x(v,\cdot)$ for $v\in T_xM$. Nondegeneracy of $g_x$ makes $\flat_x:T_xM\to T_x^*M$ an isomorphism; write $p^\sharp:=\flat_x^{-1}(p)$ for $p\in T_x^*M$, and define $g_x^{-1}(p,r):=g_x(p^\sharp,r^\sharp)$. In a chart, if $g_{ab}:=g(\partial_a,\partial_b)$ and $(g^{ab})$ is its inverse matrix, then $p^\sharp=\sum_{a,b=0}^3g^{ab}p_b\partial_a$. A covector $p$ is **future causal** here exactly when $p^\sharp$ is a nonzero future-causal vector in the sense of [[def-gr-smooth-lorentzian-objects]].

In this relativistic-particle model, $m>0$ is a fixed **primitive mass parameter** measured in kilograms, and $c>0$ is a fixed **primitive conversion parameter** measured in metres per second. They are parameters of the adopted physical formulation, not quantities derived by this definition. Coordinates $x^a$ in an SI chart have length units. For a cotangent vector $p=p_a\,dx^a$, its components $p_a$ have momentum units $\mathrm{kg\,m\,s^{-1}}$ when all four coordinates are in metres. Thus $p$ as a one-form, and the canonical one-form $\theta=p_a\,dx^a$ on $T^*M$, have action units $\mathrm{J\,s}$, consistently with [[def-rpm-h-cotangent-phase-space]]. Let $I\subseteq\mathbb R$ be an interval with nonempty interior and let $\gamma:I\to M$ be a $C^1$ curve; let $\lambda$ be its real parameter and write $V=d\gamma/d\lambda$. When $V$ is future timelike, set $s:=\sqrt{-g(V,V)}$ and define the proper-time density by $d\tau=s\,d\lambda/c$. The tangent is then nonzero. If $\widetilde\lambda=f(\lambda)$ is an increasing $C^1$ reparametrization with $f'(\lambda)>0$, then $s_{\widetilde\lambda}=s_\lambda/f'(\lambda)$, so $s_{\widetilde\lambda}\,d\widetilde\lambda=s_\lambda\,d\lambda$. The length action $-mc\int s\,d\lambda$ has action units. For a future unit observer $n$ and future causal covector $p$, define the model normal-observer energy and spatial momentum covector by

$$E_n(p):=-c\,p(n),\qquad q_n(p):=p+p(n)n^\flat,$$

where $n^\flat=g(n,\cdot)$. We have $q_n(p)(n)=0$; write $n^\perp:=\{v\in T_xM:g_x(v,n)=0\}$. To verify the norm convention, choose a $g_x$-orthonormal basis $(e_0,e_1,e_2,e_3)$ with $e_0$ future-directed (replace $e_0$ by $-e_0$ if necessary), and write $n=n^0e_0+\sum_{i=1}^3n^ie_i$ and $v=v^0e_0+\sum_{i=1}^3v^ie_i$. Use $n_s\cdot v_s:=\sum_{i=1}^3n^iv^i$, $|n_s|^2:=\sum_{i=1}^3(n^i)^2$, and $|v_s|^2:=\sum_{i=1}^3(v^i)^2$. The future-cone convention gives $n^0>|n_s|$, and $g_x(n,n)=-1$ gives $(n^0)^2=1+|n_s|^2$. If $g_x(v,n)=0$, then $v^0=(n_s\cdot v_s)/n^0$, so

$$g_x(v,v)=|v_s|^2-\frac{(n_s\cdot v_s)^2}{(n^0)^2}\ge\frac{|v_s|^2}{(n^0)^2}.$$

Here $|n_s|^2|v_s|^2-(n_s\cdot v_s)^2=\sum_{1\le i<j\le3}(n^iv^j-n^jv^i)^2\ge0$; if $v_s=0$, orthogonality also gives $v^0=0$. Thus $g_x$ is positive definite on $n^\perp$, and the isomorphism $\sharp_x$ carries covectors annihilating $n$ onto $n^\perp$, so $g_x^{-1}$ is positive definite on that covector subspace. Define $\|q_n(p)\|_n:=\sqrt{g_x^{-1}(q_n(p),q_n(p))}$. These are quantity definitions and unit conventions; they do not identify canonical momentum with mechanical momentum, assert that an apparatus measured these values, or establish a dynamical law.
