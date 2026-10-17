---
id: def-tgr-regulated-kepler-shell-law
kind: definition
title: "Regulated relative Kepler phase volume and shell law"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
deps:
  - def-tgr-gravitating-phase-reference
  - lem-tgr-annular-radial-integration
dependency_roles:
  def-tgr-gravitating-phase-reference: mathematical-premise
  lem-tgr-annular-radial-integration: mathematical-premise
justified_by: ["lem-tgr-regulated-kepler-shell-law-normalization"]
aliases: []
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Joseph Katz, Thermodynamics and Self-Gravitating Systems, Foundations of Physics 33 (2003), author manuscript"
      url: "https://arxiv.org/pdf/astro-ph/0212295"
    - title: "David Tong, Statistical Physics, complete author-hosted lecture notes"
      url: "https://davidtong.org/pdfs/teaching/statistical-physics/statphys.pdf"
    - title: "Terence Tao, An Introduction to Measure Theory, complete author-hosted text"
      url: "https://terrytao.wordpress.com/wp-content/uploads/2012/12/gsm-126-tao5-measure-book.pdf"
dependency_level: 1
---
## Definition

Use SI units, positive masses $m_1,m_2$ in $\mathrm{kg}$, reduced mass $\mu=m_1m_2/(m_1+m_2)$, gravitational parameter $A=Gm_1m_2$ in $\mathrm{J\,m}$, relative position $q\in\mathbb R^3$ in $\mathrm m$, relative momentum $p\in\mathbb R^3$ in $\mathrm{kg\,m\,s^{-1}}$, and a fixed action reference $h_*>0$ in $\mathrm{J\,s}$. Assume $r_0>0$ and $R>16r_0$. The relative phase domain is
$$\Gamma_{\mathrm{rel}}=\{(q,p):r_0\le |q|\le R,\ p\in\mathbb R^3\},\qquad d\nu_{\mathrm{rel}}=\frac{d^3q\,d^3p}{h_*^3},$$
with no center-of-mass variables or factor $1/2!$. The relative Hamiltonian is
$$h(q,p)=\frac{|p|^2}{2\mu}-\frac{A}{|q|}.$$

For $E=-e<0$ with $A/R<e\le A/(16r_0)$, put $\delta=e r_0/A\in(0,1/16]$ and
$$J(\delta)=\int_\delta^1s^{1/2}(1-s)^{3/2}\,ds,\qquad \Omega(E)=\nu_{\mathrm{rel}}\{(q,p)\in\Gamma_{\mathrm{rel}}:h(q,p)\le E\}.$$
The radial integration formula of [[lem-tgr-annular-radial-integration]] gives the explicit phase volume
$$\Omega(-e)=\frac{(4\pi)(4\pi/3)(2\mu)^{3/2}A^3}{h_*^3}\,e^{-3/2}J(\delta).$$
This is finite and positive on the stated branch.

Define $S^2=\{u\in\mathbb R^3:|u|=1\}$ and $p_*(r,E)=\sqrt{2\mu(E+A/r)}$ for $r_0\le r\le A/e$. Let $d\sigma$ be the angular area measure of total mass $4\pi$ from [[lem-tgr-annular-radial-integration]]. Push the finite measure $(\mu p_*/h_*^3)d^3q\,d\sigma(u)$ on $\{r_0\le|q|\le A/e\}\times S^2$ forward by $(q,u)\mapsto(q,p_*(|q|,E)u)$; call the resulting measure $\Sigma_E$. Its candidate normalized shell law is $P_E=\Sigma_E/\Omega'(E)$. The separate result [[lem-tgr-regulated-kepler-shell-law-normalization]] proves $\Omega'(E)>0$, finite total mass, and $P_E(\{h=E\})=1$. Thus the energy-shell preparation is explicitly defined; it is not inferred from phase-volume counting alone.

The entropy convention attached to this model is Gibbs volume, $S_G(E)=k_B\log\Omega(E)$, with $1/T_G=dS_G/dE$ and $C_G=dE/dT_G$ where defined. Other finite-system entropy conventions are distinct.
