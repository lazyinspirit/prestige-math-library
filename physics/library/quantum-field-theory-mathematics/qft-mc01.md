---
page: qft-mc01
title: Unital star algebra and positive normalized state
status: draft
items:
  - def-qft-involutive-algebra-state
  - lem-qft-positive-state-cauchy-schwarz
  - thm-qft-algebraic-gns-domain
  - lem-qft-state-symmetry-implementer
examples: []
---

Let $A$ be the unital complex star algebra and let $\omega:A\to\mathbb C$ be the positive normalized state of [[def-qft-involutive-algebra-state]]: $\omega$ is complex-linear, $\omega(1_A)=1$, and $\omega(a^*a)\ge0$ for every $a\in A$. No norm or completion on $A$ is assumed. The form $B(a,b):=\omega(b^*a)$ is Hermitian and positive semidefinite; its radical $N_\omega:=\{a:\omega(a^*a)=0\}$ is a left ideal, and $|\omega(b^*a)|^2\le\omega(a^*a)\omega(b^*b)$ even when either factor on the right is zero ([[lem-qft-positive-state-cauchy-schwarz]]). Under Countable Choice, the quotient $\mathcal D_\omega:=A/N_\omega$ has a Hilbert completion $H_\omega$ by [[thm-completion-of-an-inner-product-space-is-hilbert]]. Left multiplication $\pi_\omega(a)[b]=[ab]$ gives a unital representation on the common invariant dense domain $\mathcal D_\omega$; its adjoint satisfies $\mathcal D_\omega\subseteq D(\pi_\omega(a)^*)$ and $\pi_\omega(a)^*|_{\mathcal D_\omega}=\pi_\omega(a^*)$, so the graph closure of each $\pi_\omega(a)$ is a graph. The vector $\Omega_\omega=[1_A]$ has norm one, $\pi_\omega(A)\Omega_\omega=\mathcal D_\omega$, and $\omega(a)=(\pi_\omega(a)\Omega_\omega,\Omega_\omega)$. For any second unital *-representation $\rho$ on a Hilbert space $K$ with a common invariant dense domain $\mathcal D'$, if $(\rho(a)x,y)=(x,\rho(a^*)y)$, $\mathcal D'=\rho(A)\Omega'$, and $\omega(a)=(\rho(a)\Omega',\Omega')$, the GNS theorem gives a unique unitary carrying $\Omega_\omega$ to $\Omega'$ and intertwining the representations on their common domains ([[thm-qft-algebraic-gns-domain]]). Let $G$ be a group with a topology making multiplication and inversion continuous, and let $\alpha:G\to\operatorname{Aut}^*(A)$ be an action ($\alpha_e=\mathrm{id}$, $\alpha_g\alpha_h=\alpha_{gh}$) by bijective complex-linear maps preserving product, unit and involution, with $\omega\circ\alpha_g=\omega$. Then $U_g[a]=[\alpha_g(a)]$ extends to a unitary representation; if every function $g\mapsto\omega(b^*\alpha_g(a))$ is continuous at the identity, every orbit map $g\mapsto U_g\xi$ is norm-continuous ([[lem-qft-state-symmetry-implementer]]). When $a=a^*$, $\pi_\omega(a)$ is symmetric on $\mathcal D_\omega$, but this construction does not establish that its closure is self-adjoint.
