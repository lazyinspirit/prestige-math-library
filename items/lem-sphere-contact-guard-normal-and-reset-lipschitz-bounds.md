---
id: lem-sphere-contact-guard-normal-and-reset-lipschitz-bounds
kind: lemma
title: "Sphere-contact guards, normals and binary resets have explicit tube bounds"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
deps:
  - def-euclidean-inner-product
  - thm-cauchy-schwarz-and-the-euclidean-norm
  - thm-chain-rule-for-total-derivatives
  - thm-algebra-of-derivatives
  - thm-continuous-partial-derivatives-imply-total-differentiability
  - thm-frictionless-sphere-binary-impact-impulse-laws
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "David E. Stewart, Dynamics with Inequalities: Impacts and Hard Constraints"
      url: https://www.scribd.com/document/1044460955/David-Stewart-Dynamics-With-Inequalities
      locator: "Section 1.1.1; the binary impulse convention is reused, and the quantitative tube estimates are derived locally."
dependency_level: 1
---

## Statement

Use the Euclidean norm on the full state $z=(q_1,\ldots,q_P,v_1,\ldots,v_P)$ of $P\ge2$ spheres in $\mathbb R^d$. Fix a pair $i<j$, positive masses $m_i,m_j$, positive radii $r_i,r_j$, and a fixed restitution coefficient $e\in[0,1]$. Put
$$d_{ij}=q_i-q_j,\quad n(z)=\frac{d_{ij}}{\|d_{ij}\|_2},\quad \gamma(z)=\|d_{ij}\|_2-r_i-r_j,$$
$$\alpha=m_i^{-1}+m_j^{-1},\quad \kappa=\frac{1+e}{\alpha},\quad \beta=\sqrt{m_i^{-2}+m_j^{-2}}.$$
Extend the binary reset formula of [[thm-frictionless-sphere-binary-impact-impulse-laws]] to every state with $d_{ij}\ne0$ by setting $J(z)=-\kappa\langle v_i-v_j,n(z)\rangle$, replacing $v_i$ by $v_i+J(z)n(z)/m_i$ and $v_j$ by $v_j-J(z)n(z)/m_j$, and leaving all other coordinates unchanged. Denote this time-independent reset extension by $R(z)$.

The functions $\gamma,n,R$ are $C^1$ on the open set $d_{ij}\ne0$. For two states $z,z'$ with both pair distances at least $\sigma>0$ and both relative velocity norms at most $V\ge0$,
$$|\gamma(z)-\gamma(z')|\le\sqrt2\|z-z'\|_2,\qquad \|n(z)-n(z')\|_2\le\frac{2\sqrt2}{\sigma}\|z-z'\|_2,$$
$$\|R(z)-R(z')\|_2\le L_R\|z-z'\|_2,\qquad L_R:=1+\sqrt2\,\beta\kappa\left(1+\frac{4V}{\sigma}\right).$$
These pairwise bounds do not require a convex collision-free state set. Along a differentiable smooth segment with $q_k'=v_k$,
$$\frac d{dt}\gamma(z(t))=\langle n(z(t)),v_i(t)-v_j(t)\rangle.$$
The normal bound $2/\sigma$ applies to differences of the relative vectors $d_{ij}$; its full-state version includes the factor $\sqrt2$. This extension does not assert that an approximate state is exactly at contact or that an event exists.

## Facts & Assumptions

**Given:** The stated pair, fixed masses/radii/restitution, two states with separated pair centers and bounded relative velocities, and the Euclidean full-state norm.

[F1] [[def-euclidean-inner-product]] fixes the bilinear inner product and squared Euclidean norm.

[F2] [[thm-cauchy-schwarz-and-the-euclidean-norm]] gives Cauchy–Schwarz, the Euclidean triangle inequality and norm homogeneity.

[F3] [[thm-frictionless-sphere-binary-impact-impulse-laws]] supplies the impulse and equal/opposite binary velocity updates at an exact incoming contact.

[F4] [[thm-chain-rule-for-total-derivatives]] and [[thm-algebra-of-derivatives]] give the chain rule and the scalar coordinate sum, product and quotient rules with nonzero denominators.

[F5] [[thm-continuous-partial-derivatives-imply-total-differentiability]]: continuous first partial derivatives on an open set give total differentiability, with its derivative given by those partials.

## Proof
1.1 Write $a=\|d_{ij}\|_2$ and $a'=\|d'_{ij}\|_2$. By [F2], $|a-a'|\le\|d_{ij}-d'_{ij}\|_2$. Also $\|d_{ij}-d'_{ij}\|_2\le\|q_i-q_i'\|_2+\|q_j-q_j'\|_2\le\sqrt2\|q-q'\|_2\le\sqrt2\|z-z'\|_2$. Subtracting the fixed radii gives the guard bound. [given, F1, F2, algebra]

2.1 The identity $n-n'=(d_{ij}-d'_{ij})/a+d'_{ij}(1/a-1/a')$ and step 1.1 give $\|n-n'\|_2\le\|d_{ij}-d'_{ij}\|_2/a+|a-a'|/a\le2\|d_{ij}-d'_{ij}\|_2/\sigma$. Applying the full-state estimate from step 1.1 gives the asserted normal bound. [given, F2, step 1.1, algebra]

3.1 Put $w=v_i-v_j$ and $w'=v_i'-v_j'$. The impulse formula in [F3], used as the stated extension, gives $$|J-J'|\le\kappa\bigl(\|w-w'\|_2+\|w'\|_2\|n-n'\|_2\bigr) \le\kappa\left(\sqrt2\|v-v'\|_2+\frac{2\sqrt2 V}{\sigma}\|q-q'\|_2\right),$$ and $|J'|\le\kappa V$. The two changed velocity increments have joint norm difference $\beta\|Jn-J'n'\|_2$, which is at most $\beta(|J-J'|+|J'|\|n-n'\|_2)$. [given, F2, F3, step 1.1, step 2.1, algebra]

4.1 Combining steps 2.1–3.1 bounds the reset-increment difference by $\sqrt2\beta\kappa(\|v-v'\|_2+4V\|q-q'\|_2/\sigma)$. Each coordinate-block norm is at most $\|z-z'\|_2$. The identity part of the reset contributes at most $\|z-z'\|_2$ by [F2], giving exactly the stated $L_R$. This argument compares the two endpoints directly and uses no connecting line segment. [given, F2, step 2.1, step 3.1, algebra]

5.1 For a nonzero vector $d$ and increment $h$, rationalization gives $$\|d+h\|_2-\|d\|_2=\frac{2\langle d,h\rangle+\|h\|_2^2}{\|d+h\|_2+\|d\|_2}.$$ The denominator tends to $2\|d\|_2>0$, so the total derivative is $h\mapsto\langle d/\|d\|_2,h\rangle$, continuously dependent on $d\ne0$. The coordinate rules in [F4] give continuous partial derivatives for the quotient defining $n$ and the products defining $R$ on this open set; [F5] makes them $C^1$. Applying [F4] along $d_{ij}'=v_i-v_j$ proves the guard derivative formula. [given, F1, F2, F4, F5, algebra] ∎
