---
id: thm-cm-scattering-asymptotic-velocities-and-impact-parameter
kind: theorem
title: "Existence of the asymptotic velocities and the impact-parameter identity $J=\\mu b|v_-|$"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 4
deps: [def-cm-central-force-trajectory, def-cm-scattering-data, thm-cm-scattering-turning-point-and-global-branches, def-euclidean-inner-product, def-cross-product-in-r3, thm-cross-product-norm-is-the-two-vector-gram-determinant]
dependency_roles:
  def-cm-central-force-trajectory: mathematical-premise
  def-cm-scattering-data: mathematical-premise
  thm-cm-scattering-turning-point-and-global-branches: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-cross-product-in-r3: mathematical-premise
  thm-cross-product-norm-is-the-two-vector-gram-determinant: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Richard Fitzpatrick, Newtonian Dynamics (University of Texas at Austin), §6.4, Eqs. (340)-(346): the asymptotic velocity, the impact parameter and the relation $L=mvb$"
      url: "https://farside.ph.utexas.edu/teaching/336k/Newtonhtml/node51.html"
    - title: "Konstantin Likharev, Essential Graduate Physics: Classical Mechanics, §3.5, Eq. (3.66): $L_z=b(2mE)^{1/2}$ for a scattering orbit"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
---

## Statement

Let the hypotheses of
[[thm-cm-scattering-turning-point-and-global-branches]] hold, with finite-range
potential $U$, energy $E>0$, angular momentum $j=Je_3$, $J>0$, outer turning
point $r_*$, and let $r:\mathbb R\to\mathbb R^3$ be the extension of the
trajectory. Then:

1. the limits $v_\pm:=\lim_{t\to\pm\infty}r'(t)$ exist and satisfy
   $|v_+|=|v_-|=\sqrt{2E/\mu}$;
2. for every $t_2\le t_*$ with $\rho(t_2)>R$, the incoming branch is the
   straight line $\{r(t_2)+s\,v_-:s\in\mathbb R\}$; its perpendicular distance
   from the origin is
   $$b:=\frac{|r(t_2)\times v_-|}{|v_-|}=\frac{J}{\mu|v_-|}, \qquad\text{i.e.}\qquad J=\mu b|v_-| .$$

## Facts & Assumptions

**Given:** The finite-range scattering orbit with its simple outer turning point $r_*$ and its two global branches, and times $t_1\ge t_*$, $t_2\le t_*$ with $\rho(t_1),\rho(t_2)>R$.

[L1] Free tails: for $t_1\ge t_*$ with $\rho(t_1)>R$, $r(t)=r(t_1)+(t-t_1)r'(t_1)$ for all $t\ge t_1$; and symmetrically for $t_2\le t_*$ with $\rho(t_2)>R$, $r(t)=r(t_2)+(t-t_2)r'(t_2)$ for all $t\le t_2$ ([[thm-cm-scattering-turning-point-and-global-branches]]).

[L2] On the free regime $\rho>R$ the potential vanishes identically, so the constant energy is $\frac12\mu\lVert r'\rVert_2^2=E$ there ([[def-cm-central-force-trajectory]], [[def-cm-scattering-data]]).

[L3] Angular momentum: $j=\mu\,r\times r'=Je_3$ is constant with $|j|=J$ ([[def-cm-central-force-trajectory]], [[thm-cm-scattering-turning-point-and-global-branches]]).

[L4] For nonzero $u,v\in\mathbb R^3$, the perpendicular distance from the origin to the line $\{u+sv:s\in\mathbb R\}$ equals $|u\times v|/|v|$: the closest point is $u-\frac{\langle u,v\rangle}{|v|^2}v$, whose squared norm is $|u|^2-\frac{\langle u,v\rangle^2}{|v|^2}=\frac{|u\times v|^2}{|v|^2}$ by the Gram identity $|u\times v|^2=|u|^2|v|^2-\langle u,v\rangle^2$ ([[thm-cross-product-norm-is-the-two-vector-gram-determinant]], [[def-euclidean-inner-product]], [[def-cross-product-in-r3]]).


## Proof

**Proof technique:** direct.

1.1 By [L1] the velocity is constant on the outgoing tail: $r'(t)=r'(t_1)$ for all $t\ge t_1$, so $v_+:=\lim_{t\to\infty}r'(t)=r'(t_1)$ exists; symmetrically $v_-:=r'(t_2)$ is the constant velocity on the incoming tail $t\le t_2$. [given, L1]

2.1 By [L2] applied at $t_1$ and $t_2$, $\lVert r'(t_1)\rVert_2^2=\lVert r'(t_2)\rVert_2^2=2E/\mu$; hence $|v_+|=|v_-|=\sqrt{2E/\mu}$. This is clause 1. [step 1.1, L2, algebra]

2.2 The incoming line: by [L1] all points $r(t)$ with $t\le t_2$ lie on the set $\{r(t_2)+s\,v_-:s\in\mathbb R\}$, a line through $r(t_2)$ with direction $v_-\ne0$ (it has norm $\sqrt{2E/\mu}>0$). [step 1.1, given, L1, algebra]

3.1 Its perpendicular distance from the origin is, by [L4] applied to $u=r(t_2)$, $v=v_-$, $$\frac{|r(t_2)\times v_-|}{|v_-|}=\frac{|r(t_2)\times r'(t_2)|}{|v_-|}=\frac{|j|/\mu}{|v_-|}=\frac{J}{\mu|v_-|},$$ using that $j=\mu\,r(t_2)\times r'(t_2)$ and $|j|=J$ from [L3]. Defining $b$ to be this distance gives $J=\mu b|v_-|$, which is clause 2. [step 1.1, step 2.2, L3, L4, algebra] ∎
