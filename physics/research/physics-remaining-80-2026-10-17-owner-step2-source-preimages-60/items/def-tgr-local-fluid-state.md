---
id: def-tgr-local-fluid-state
kind: definition
title: "Rest fluid state,frame and geometric current definitions"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 0
deps:
  - def-gr-smooth-lorentzian-objects
  - def-gr-observer-and-rest-space
  - def-gr-observer-congruence-and-adapted-charts
  - def-gr-timelike-worldline-and-proper-time
  - def-gr-local-frame-and-tetrad-fields
  - thm-gr-nondegenerate-levi-civita-and-tensor-derivative
  - def-countable-choice
dependency_roles:
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-gr-observer-and-rest-space: mathematical-premise
  def-gr-observer-congruence-and-adapted-charts: mathematical-premise
  def-gr-timelike-worldline-and-proper-time: mathematical-premise
  def-gr-local-frame-and-tetrad-fields: mathematical-premise
  thm-gr-nondegenerate-levi-civita-and-tensor-derivative: mathematical-premise
  def-countable-choice: mathematical-premise
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Éric Gourgoulhon, An Introduction to Relativistic Hydrodynamics, arXiv:gr-qc/0603009v1 (2006), §§3.1–3.2 and 4.1–4.3"
      url: "https://arxiv.org/pdf/gr-qc/0603009"
    - title: "Nicolas Borghini, Elements of Hydrodynamics, University of Bielefeld lecture notes (2015), §§IX.2 and IX.4.1–IX.4.2"
      url: "https://www.physik.uni-bielefeld.de/~borghini/Teaching/Hydrodynamics15/Hydrodynamics.pdf"
---

## Definition

Use a smooth time-oriented Lorentz four-manifold $(M,g,N)$ of signature $(-,+,+,+)$, in the sense of [[def-gr-smooth-lorentzian-objects]], with the unique torsion-free metric-compatible connection $\nabla$ of [[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]]. Use length coordinates $x^0=ct$ when assigning physical units: $g$ and the components of $u$ are dimensionless, and $c>0$ has units $\mathrm{m\,s^{-1}}$. The physical reading of the geometry is not asserted here.

Let $O\subseteq M$ be a nonempty open set and let $u$ be an observer congruence on $O$ in the sense of [[def-gr-observer-congruence-and-adapted-charts]]: $u$ is a smooth vector field whose values are future-directed unit timelike observers, so $g(u,u)=-1$. Its maximal integral curves have open interval parameter domains and are smooth regular future timelike curves; no completeness, geodesic equation, or orthogonal rest-space foliation is assumed. The frame in this definition means this congruence field and its associated pointwise rest spaces. It is not an adapted chart or a tetrad field; those are distinct objects in [[def-gr-observer-congruence-and-adapted-charts]] and [[def-gr-local-frame-and-tetrad-fields]]. The physical four-velocity associated with $u$ is $U=cu$, with $g(U,U)=-c^2$.

At $x\in O$, the rest space is $u^\perp$ as in [[def-gr-observer-and-rest-space]]. Put $u_b=g_{bc}u^c$ and define the mixed rest-space endomorphism
$$\Delta^a{}_b:=\delta^a{}_b+u^a u_b,\qquad \Delta^{ab}:=g^{ac}\Delta^b{}_c.$$
For any vector $X^a$, write $\Delta X$ for $\Delta^a{}_bX^b$. This defines a tensor field; its projection properties are proved in the accompanying fluid-frame lemma.

A local material state consists of a nonempty open set $X\subset(0,\infty)\times\mathbb R$, coordinates $(v,\sigma_p)$ on $X$, and a specified $e\in C^2(X,\mathbb R)$. A **marker** is a formal counted constituent used to normalize these state quantities; calling it conserved does not impose a spacetime conservation equation. Here $v$ is the positive rest-volume-per-marker state coordinate, interpreted as volume measured in the observer's local rest space; the model selects no spatial region whose volume is being integrated. It has units $\mathrm{m^3\,marker^{-1}}$. The coordinate $\sigma_p$ is entropy per marker, with units $\mathrm{J\,K^{-1}\,marker^{-1}}$, and $e$ is energy per marker, with units $\mathrm{J\,marker^{-1}}$. For a $C^2$ state map $(v,\sigma_p):O\to X$, define
$$n:=v^{-1},\qquad s:=n\sigma_p,\qquad \varepsilon:=ne,\qquad T:=\partial_{\sigma_p}e,\qquad p:=-\partial_v e,$$
$$H:=e+pv,\qquad h:=\varepsilon+p=nH,\qquad \mu:=H-T\sigma_p.$$
Thus $n$ has units $\mathrm{marker\,m^{-3}}$, $s$ has units $\mathrm{J\,K^{-1}\,m^{-3}}$, $\varepsilon,p,h$ have units $\mathrm{J\,m^{-3}}=\mathrm{Pa}$, $T$ has units $\mathrm K$, and $H,\mu$ have units $\mathrm{J\,marker^{-1}}$. These are mathematical state maps from the supplied function $e$; no constitutive law is asserted to describe an actual material.

A geometric number current is a $C^1$ vector field $J^a$ with components of units $\mathrm{marker\,m^{-3}}$; its physical flux is $cJ$, with units $\mathrm{marker\,m^{-2}\,s^{-1}}$. Define its frame density and spatial part by
$$\nu_u:=-u_aJ^a,\qquad V^a:=\Delta^a{}_bJ^b.$$
A geometric entropy current is a $C^1$ vector field $S^a$ with components of units $\mathrm{J\,K^{-1}\,m^{-3}}$; its physical flux is $cS$, with units $\mathrm{W\,K^{-1}\,m^{-2}}$. Define
$$s_u:=-u_aS^a,\qquad \Sigma^a:=\Delta^a{}_bS^b.$$
A geometric stress-energy current is a $C^1$ symmetric contravariant tensor field $\mathsf T^{ab}$ with components of units $\mathrm{Pa}$. Define its frame projections
$$\varepsilon_u:=\mathsf T^{ab}u_a u_b,\qquad Q^a:=-\Delta^a{}_c\mathsf T^{cd}u_d,\qquad P^{ab}:=\Delta^a{}_c\Delta^b{}_d\mathsf T^{cd},$$
$$p_{\mathrm{mech}}:=\tfrac13 g_{ab}P^{ab},\qquad \pi^{ab}:=P^{ab}-p_{\mathrm{mech}}\Delta^{ab}.$$
Here $Q$ has units $\mathrm{Pa}$ and $cQ$ is physical energy flux with units $\mathrm{W\,m^{-2}}$; $P,p_{\mathrm{mech}},\pi$ have units $\mathrm{Pa}$. The thermodynamic quantities $(\varepsilon,p)$ and the tensor projections $(\varepsilon_u,p_{\mathrm{mech}})$ are not identified by this definition.

For these $C^1$ fields, $\nabla_aJ^a$ and $\nabla_aS^a$ denote scalar covariant divergences, and $\nabla_a\mathsf T^{ab}$ denotes the vector covariant divergence, using the connection fixed above. No conservation equation, perfect-fluid stress form, equality $\nu_u=n$, equality $s_u=s$, or physical interpretation is imposed.

