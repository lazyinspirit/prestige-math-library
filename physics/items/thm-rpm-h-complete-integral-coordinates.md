---
id: thm-rpm-h-complete-integral-coordinates
kind: theorem
title: "Complete integrals and covariant versus time Hamilton-Jacobi"
status: draft
origin: pipeline
pipeline_run: physics-td-qft-rpm-62-2026-10-14
domain: mathematics
library: physics
physical_scope: null
dependency_level: 6
deps: ["thm-rpm-h-local-hamilton-jacobi", "thm-rpm-h-temporal-shell-reduction", "thm-euclidean-inverse-function-theorem", "def-countable-choice", "thm-algebra-of-derivatives", "thm-chain-rule-for-total-derivatives"]
dependency_roles: {"thm-rpm-h-local-hamilton-jacobi": "mathematical-premise", "thm-rpm-h-temporal-shell-reduction": "mathematical-premise", "thm-euclidean-inverse-function-theorem": "mathematical-premise", "def-countable-choice": "mathematical-premise", "thm-algebra-of-derivatives": "mathematical-premise", "thm-chain-rule-for-total-derivatives": "mathematical-premise"}
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Jerrold E. Marsden and Tudor S. Ratiu, Introduction to Mechanics and Symmetry, 2nd ed., complete book PDF; §12.1 Theorem 12.1.4 pp. 393–395; §12.4 Theorem 12.4.1 pp. 412–413; §§14.2–14.3 pp. 466–473; §7.9 pp. 208–211."
      url: https://fisica.net/mecanicaclassica/introduction_to_mechanics_and_symmetry_by_jerrold_marsden.pdf
      locator: "Complete 549-page book; full relevant sections inspected."
    - title: "MIT OpenCourseWare 8.09 Classical Mechanics III, Fall 2014, complete Chapter 4 lecture notes PDF; §4.4 Hamilton–Jacobi equation and complete integrals, all 33 PDF pages inspected."
      url: https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/f00f7f68ac7ba346a0868efb7430582c_MIT8_09F14_Chapter_4.pdf
      locator: "Complete 33-page chapter; full relevant section inspected."
landmark: false
---

## Statement

Assume $\mathrm{AC}_\omega$ for the cotangent/HJ supplier chain and let $n\ge1$. Let $U_H\subset\mathbb R\times T^*\mathbb R^n$ be open and $H\in C^\infty(U_H,\mathbb R)$. Let $D_S\subset\mathbb R\times\mathbb R^n_q\times\mathbb R^n_\alpha$ be open and $S\in C^3(D_S,\mathbb R)$, with $S_t+H(t,q,S_q)=0$ wherever $(t,q,\alpha)\in D_S$ and $(t,q,S_q(t,q,\alpha))\in U_H$. If the mixed matrix $S_{q\alpha}$ is invertible at $(t,q,\alpha)$, then after restricting neighborhoods the equations $p_i=S_{q^i}$, $\beta^i=S_{\alpha_i}$ define a local $C^2$ diffeomorphism $F_t:(q,p)\mapsto(\beta,\alpha)$ at each fixed $t$. Equip the old chart $(q,p)$ with $\omega_{\rm old}=\sum_i dq^i\wedge dp_i$ and the target chart, whose position coordinates are $\beta^i$ and momentum coordinates are $\alpha_i$, with $\omega_{\rm new}=\sum_i d\beta^i\wedge d\alpha_i$. Then $F_t^*\omega_{\rm new}=\omega_{\rm old}$, so this is a local canonical transformation in the stated convention, and $\beta$ is constant along the Hamilton characteristics $\dot q=H_p$, $\dot p=-H_q$. Such a family is a complete integral only on that nonsingular local domain. In the physical interpretation, $q^i,\beta^i$ have units m, $p_i,\alpha_i$ have units kg m/s, $t$ has units s, and $S$ has units J s. $S$ is assigned action units in this interpretation.

For the relativistic specialization, take $n=3$, $m\ge0$ in kilograms and $c>0$ in metres per second, and a temporal product chart $(x^0,q)\in I_0\times\Omega$ with the selected future normal of [[thm-rpm-h-temporal-shell-reduction]]. Write its metric as $g=-N^2(dx^0)^2+h_{ij}(dq^i+b^i dx^0)(dq^j+b^j dx^0)$, where $N>0$, $b^i$ and the positive-definite symmetric matrix $h_{ij}$ are smooth; $h^{ij}$ is the inverse matrix. The notation $b^i$ denotes the shift, distinct from the integration coordinate $\beta^i$. Set $x^0=ct$ and require the Hamiltonian in this specialization to be exactly

$$H(t,q,p)=c\left(N(ct,q)\sqrt{m^2c^2+h^{ij}(ct,q)p_ip_j}-b^i(ct,q)p_i\right),$$

on $U_H=\{t:ct\in I_0\}\times T^*\Omega$ for $m>0$, or its open part $p\ne0$ for $m=0$. For each fixed $\alpha$, define the spacetime action $\mathscr S(x^0,q,\alpha):=S(x^0/c,q,\alpha)$ on the corresponding chart domain and write $S_a:=\partial_{x^a}\mathscr S$. Then the covariant equation $g^{ab}S_aS_b+m^2c^2=0$ with $(d\mathscr S)^\sharp$ future, excluding the zero covector when $m=0$, is equivalent to $S_t+H(t,q,S_q)=0$, with $p_0=S_t/c=-H/c$. The canonical-coordinate result above still applies to arbitrary $H$; the covariant-shell equivalence uses this specified reduced Hamiltonian.

## Facts & Assumptions

**Given:** $n\ge1$, the open domains and smooth Hamiltonian in the statement, a local $C^3$ HJ solution, and a point where $S_{q\alpha}$ is invertible.

[A1] [[def-countable-choice]]: assume countable choice $\mathrm{AC}_\omega$ only for the cotangent and HJ supplier chain; no full axiom of choice is used.

[L1] [[thm-rpm-h-local-hamilton-jacobi]]: for each initial point $(0,a_0,dS_0(a_0))$ lying in its open Hamiltonian domain, the local characteristic construction supplies an actual smooth HJ solution while its projection remains invertible; no continuation beyond loss of projection invertibility is asserted.

[F1] [[thm-euclidean-inverse-function-theorem]]: a $C^1$ map with invertible derivative has a local $C^1$ inverse $g$, with $Dg(y)=Df(g(y))^{-1}$. The scalar derivative algebra and total chain rule are supplied by [[thm-algebra-of-derivatives]] and [[thm-chain-rule-for-total-derivatives]].

[L2] [[thm-rpm-h-temporal-shell-reduction]]: the current H9 draft assumes a temporal product chart, $N>0$, positive spatial metric, and excludes $p_i=0$ on the massless branch; it gives $p_0=\beta^ip_i-N\sqrt{m^2c^2+h^{ij}p_ip_j}$ and $H=-cp_0$. The supplier is a mathematical deduction within its stated chart, positive-root and nonzero-null hypotheses; it introduces no physical action adoption. Here the temporal coefficients in the reduced root are evaluated at $(ct,q)$; the physical-time domain is $\{t:ct\in I\}$.

## Proof

**Proof technique:** implicit-function and generating-function identities.

**Given:** The hypotheses in the statement and exact conditional temporal-shell interface [L2].

1.1 First obtain the exact finite-regularity inverse used here from [F1]. If $f$ is $C^2$, its local $C^1$ inverse $g$ satisfies $Dg=(Df\circ g)^{-1}$. The entries of $Df\circ g$ are $C^1$ by the chain rule. Matrix inversion on invertible matrices is $C^1$ entrywise by the cofactor-over-determinant formula, whose denominator is nonzero; finite products and reciprocal differentiation use the derivative algebra in [F1]. Consequently $Dg$ is $C^1$, and $g$ is $C^2$. At fixed $t$, the map $(q,\alpha)\mapsto(q,p=S_q)$ has derivative $\begin{pmatrix}I&0\\S_{qq}&S_{q\alpha}\end{pmatrix}$, which is invertible at the stated point. By [F1], after restriction it is a diffeomorphism and solves locally for $\alpha=\alpha(t,q,p)$. Keeping $t$ as an additional identity coordinate in $(t,q,\alpha)\mapsto(t,q,S_q)$ gives the same invertible block derivative and shows that the inverse $\alpha(t,q,p)$ is jointly $C^2$. Define $\beta=S_\alpha(t,q,\alpha(t,q,p))$; this gives a $C^2$ local map $(q,p)\mapsto(\beta,\alpha)$. [F1, given, algebra]

1.2 In the relativistic specialization, the chain rule gives $p_0=\partial_{x^0}\mathscr S=S_t/c$ and $p_i=\partial_{q^i}\mathscr S=S_{q^i}$. The future-shell root [L2] is $p_0=b^i(ct,q)p_i-N(ct,q)\sqrt{m^2c^2+h^{ij}(ct,q)p_ip_j}=-H(t,q,p)/c$ for the Hamiltonian explicitly required in the statement. Thus the covariant future-shell equation implies $S_t+H(t,q,S_q)=0$. Conversely, this HJ equation sets $p_0$ to precisely that root, which solves the covariant shell equation and selects its future branch; the root satisfies $p(n)=-\sqrt{m^2c^2+h^{ij}p_ip_j}<0$ for the selected future unit normal $n$. The nonzero-momentum domain when $m=0$ excludes the zero null covector. [L2, A1, given, algebra]

2.1 The map $(q,\alpha)\mapsto(\beta=S_\alpha,\alpha)$ has derivative $\begin{pmatrix}S_{\alpha q}&S_{\alpha\alpha}\\0&I\end{pmatrix}$, which is invertible because $S_{\alpha q}=(S_{q\alpha})^T$. By [F1] it has a $C^2$ local inverse solving for $q$ from $(\beta,\alpha)$; then $p=S_q$ gives the $C^2$ inverse map to the one in step 1.1. The equations therefore define the claimed local diffeomorphism. [F1, step 1.1, algebra]

2.2 Along a Hamilton characteristic, $\dot q=H_p$ and $\dot p=-H_q$. Differentiate $p=S_q(t,q,\alpha(t,q,p))$ along it, and differentiate the HJ equation in $q$ to obtain $\dot p=-H_q+S_{q\alpha}\dot\alpha$. Since $S_{q\alpha}$ is invertible, $\dot\alpha=0$. Differentiate the HJ equation with respect to $\alpha$: $S_{\alpha t}+S_{\alpha q}H_p=0$. Thus $\dot\beta=\frac d{dt}S_\alpha=S_{\alpha t}+S_{\alpha q}\dot q=0$. [L1, A1, step 1.1, algebra]

3.1 At fixed $t$, the differential in $(q,\alpha)$ is $d_{(q,\alpha)}S=p_i\,dq^i+\beta^i\,d\alpha_i$. Taking its exterior derivative gives $0=dp_i\wedge dq^i+d\beta^i\wedge d\alpha_i$, hence $\sum_i dq^i\wedge dp_i=\sum_i d\beta^i\wedge d\alpha_i$. This is exactly $F_t^*\omega_{\rm new}=\omega_{\rm old}$ for the source and target forms stated above. [given, step 1.1, step 2.1, algebra]

4.1 Under the stated SI assignments, $S$ has joule-seconds, so $p=S_q$ has kg m/s and $S_t$ has joules. Since $\alpha$ is assigned kg m/s, $\beta=S_\alpha$ has metres. Thus the HJ equation and the canonical generating identity respect the assigned action units. [given, algebra] ∎
