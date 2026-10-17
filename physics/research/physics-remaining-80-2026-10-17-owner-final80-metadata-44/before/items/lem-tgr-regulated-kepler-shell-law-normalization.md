---
id: lem-tgr-regulated-kepler-shell-law-normalization
kind: lemma
title: "Finite regulated Kepler shell measure is normalized"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
deps:
  - def-tgr-regulated-kepler-shell-law
  - lem-tgr-annular-radial-integration
dependency_roles:
  def-tgr-regulated-kepler-shell-law: mathematical-premise
  lem-tgr-annular-radial-integration: mathematical-premise
justified_by: []
aliases: []
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Joseph Katz, Thermodynamics and Self-Gravitating Systems, Foundations of Physics 33 (2003), author manuscript"
      url: "https://arxiv.org/pdf/astro-ph/0212295"
    - title: "David Tong, Statistical Physics, complete author-hosted lecture notes"
      url: "https://davidtong.org/pdfs/teaching/statistical-physics/statphys.pdf"
    - title: "Terence Tao, An Introduction to Measure Theory, complete author-hosted text"
      url: "https://terrytao.wordpress.com/wp-content/uploads/2012/12/gsm-126-tao5-measure-book.pdf"
proof_strategy: direct
verification:
  precheck: pass
---

## Statement

Under [[def-tgr-regulated-kepler-shell-law]], for every $E=-e$ with $A/R<e\le A/(16r_0)$, the phase volume is finite and positive, differentiable in $E$, and the pushed-forward shell measure $\Sigma_E$ has total mass $\Omega'(E)>0$. Therefore $P_E=\Sigma_E/\Omega'(E)$ is a probability measure supported on the exact energy surface $\{(q,p):h(q,p)=E\}$.

## Facts & Assumptions

**Given:** The relative Kepler phase domain, its Lebesgue phase measure, the Hamiltonian $h(q,p)=|p|^2/(2\mu)-A/|q|$, and the energy range from the Definition.

[F1] The Definition sets $\Omega(E)=\nu_{\mathrm{rel}}\{h\le E\}$ and defines the shell pushforward using $p_*(r,E)=\sqrt{2\mu(E+A/r)}$. ([[def-tgr-regulated-kepler-shell-law]])

[F2] On a three-dimensional radial shell, $\int_{a\le|x|\le b}F(|x|)\,dx=4\pi\int_a^bF(r)r^2dr$ for continuous $F$, including $a=0$. ([[lem-tgr-annular-radial-integration]])

## Proof

1.1 The inequalities $A/R<e$ and $e\le A/(16r_0)$ imply $r_0<A/e<R$. At fixed $q$ with $r=|q|$, the momentum sublevel $h(q,p)\le-e$ is the ball $|p|\le\sqrt{2\mu(A/r-e)}$, which is nonempty exactly for $r_0\le r\le A/e$. By [F2] its momentum volume is $\frac{4\pi}{3}[2\mu(A/r-e)]^{3/2}$. Integrating the resulting radial function over $q$ by [F2], then substituting $s=er/A$, gives
$$\Omega(-e)=\frac{(4\pi)(4\pi/3)(2\mu)^{3/2}A^3}{h_*^3}e^{-3/2}J(\delta), \qquad \delta=\frac{er_0}{A}.$$
The integration interval is compact and has positive length, while the integrand is continuous and positive in its interior, so $\Omega$ is finite and strictly positive. [F1, F2, algebra]

2.1 Since $J'(\delta)=-\delta^{1/2}(1-\delta)^{3/2}$ by the fundamental theorem of calculus, differentiating the explicit formula with $E=-e$ yields
$$\Omega'(E)=\frac{(4\pi)(4\pi/3)(2\mu)^{3/2}A^3}{h_*^3}e^{-5/2} \left[\frac32J(\delta)+\delta^{3/2}(1-\delta)^{3/2}\right]>0.$$
The bracket is finite and positive, so the derivative is finite and strictly positive. [F1, step 1.1, algebra]

3.1 Integrating the defining pushforward density over its entire source gives
$$\Sigma_E(\{h=E\})=\frac{16\pi^2\mu}{h_*^3}\int_{r_0}^{A/e}r^2\sqrt{2\mu(A/r-e)}\,dr =\frac{16\pi^2\mu\sqrt{2\mu}}{h_*^3}A^3e^{-5/2} \int_\delta^1s^{3/2}(1-s)^{1/2}\,ds,$$
where [F2] supplies the spatial radial measure and $\sigma(S^2)=4\pi$ supplies the momentum-direction factor. Put $g(s)=s^{3/2}(1-s)^{3/2}$. Direct differentiation and integration on $[\delta,1]$ give
$$\frac32J(\delta)+\delta^{3/2}(1-\delta)^{3/2} =\frac32\int_\delta^1s^{3/2}(1-s)^{1/2}\,ds.$$
Since $\mu\sqrt{2\mu}=\frac12(2\mu)^{3/2}$, this identity makes the preceding shell mass exactly the $\Omega'(E)$ in step 2.1. [F1, F2, step 2.1, algebra]

4.1 Every image point has $|p|=p_*(r,E)$, hence $h=|p|^2/(2\mu)-A/r=E$. The measure is finite by step 3.1 and has total mass $\Omega'(E)>0$; division by this total therefore defines a probability supported on the energy surface. [F1, step 3.1, algebra] ∎
