---
id: lem-gts-tame-holomorphic-area-quantum-independent-of-domain
kind: lemma
title: Uniform area quantum and finite homology classes for closed tame holomorphic curves
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
proof_strategy: direct
deps:
  - def-axiom-of-choice
  - lem-closed-oriented-pid-manifolds-have-finitely-generated-homology
  - thm-topological-universal-coefficient-short-exact-sequence-for-cohomology
  - thm-de-rham-theorem
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  lem-closed-oriented-pid-manifolds-have-finitely-generated-homology: mathematical-premise
  thm-topological-universal-coefficient-short-exact-sequence-for-cohomology: mathematical-premise
  thm-de-rham-theorem: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
sources:
  references:
    - title: John Pardon, An Algebraic Approach to Virtual Fundamental Cycles on Moduli Spaces of Pseudo-Holomorphic Curves
      url: https://arxiv.org/pdf/1309.2370v6
      locator: Section 9.1 for the compact tame target and fixed homology class; the proof below is the elementary integral-period argument, not an imported monotonicity assertion.
dependency_level: 0
---

## Statement

Assume full AC. Let $(X,\omega)$ be a compact closed symplectic manifold. For a fixed smooth $\omega$-tame almost-complex structure $J$, or uniformly for $J$ in a compact smooth family of such structures, there is $h>0$ such that every nonconstant $J$-holomorphic map from ANY connected compact closed Riemann surface has symplectic area at least $h$. The constant is independent of the domain's genus and complex structure. The assertion applies to every nonconstant normalization component of a nodal stable map.

For each $A<\infty$, only finitely many classes in $H_2(X;\mathbb Z)$ can be represented by a $J$-holomorphic closed curve, or a finite sum of such curves, of total symplectic area at most $A$. The same finiteness is uniform in the indicated compact tame family. In particular a nodal map of area $A$ has at most $\lfloor A/h\rfloor$ nonconstant components. No boundary or inhomogeneous Floer assertion is included.

## Facts & Assumptions

**Given:** The compact symplectic target, its fixed tame $J$ or specified compact smooth tame family, and full AC. A closed domain has no boundary; energy below uses the usual conformal Dirichlet convention $\frac12\int|du|^2$.

[F1] The symplectic orientation makes $X$ a closed oriented manifold; its integral homology is finitely generated. [[lem-closed-oriented-pid-manifolds-have-finitely-generated-homology]]

[F2] The evaluation map $H^2(X;\mathbb R)\to\operatorname{Hom}(H_2(X;\mathbb Z),\mathbb R)$ is onto. [[thm-topological-universal-coefficient-short-exact-sequence-for-cohomology]]

[F3] Every such real cohomology class is represented by a smooth closed two-form, with natural evaluation by integration on a smooth closed surface. [[thm-de-rham-theorem]]

[A1] Full AC is used through [F1] and [F2]: their Poincaré-duality finite-generation and topological UCT arguments state that premise. [F3] needs only countable choice. The finite list of auxiliary forms chosen in step 1.1 adds no further choice use. [[def-axiom-of-choice]]

## Proof

1.1 Under [A1], by [F1], write $H_2(X;\mathbb Z)=\mathbb Z^r\oplus T$, with $T$ finite, and choose the dual coordinate homomorphisms $a_1,\ldots,a_r$ to $\mathbb R$. By [F2–F3], choose smooth closed forms $\eta_i$ such that $\int_u\eta_i=a_i(u_*[C])$. In particular these numbers are integers. This does not assume that the periods of $\omega$ form a discrete subgroup; those periods can be dense. There are only finitely many chosen auxiliary forms. [A1, F1, F2, F3, given, construct, algebra]

2.1 Tameness and compactness give constants $c>0$ and $M_i<\infty$ with $\omega_x(v,J_xv)\ge c|v|^2,\qquad |\eta_i(v,J_xv)|\le M_i|v|^2.$ Choose any fixed target metric. The same constants work over a compact tame family: the continuous positive function on its unit tangent sphere has a positive minimum, and each form expression has a finite maximum. Set $C_i=M_i/c$. For any $J$-holomorphic map, an oriented orthonormal domain frame $(e,je)$ gives $du(je)=Jdu(e)$, whence pointwise $|u^*\eta_i(e,je)|\le C_i u^*\omega(e,je).$ Integrating gives $|a_i(u_*[C])|\le C_i\int_Cu^*\omega$, without any restriction on the domain geometry. The same inequality adds over finitely many components. [given, step 1.1, construct, algebra]

3.1 Choose $h>0$ with $C_i h<1$ for every $i$, taking any positive $h$ if $r=0$. If a closed holomorphic map had area $0<A<h$, every integer $a_i$ would have absolute value below one and hence be zero. Its homology class would therefore be torsion. A real closed form evaluates to zero on a torsion cycle: if $m\alpha=0$, then $m\langle[\omega],\alpha\rangle=0$ in $\mathbb R$. Thus its area would be zero, a contradiction. Area zero itself forces $du=0$ pointwise by the positive tame inequality; connectedness then makes the map constant. This proves the uniform domain-independent quantum. [F3, step 1.1, step 2.1, construct, algebra]

4.1 If total area is at most $A$, step 2.1 confines every free coordinate $a_i$ to the finite integer interval $[-C_iA,C_iA]$. The torsion coordinate lies in the finite set $T$. Their product contains only finitely many integral homology classes. Every nonconstant normalization component has area at least $h$ by step 3.1, and each constant component has zero area. Summing the nonnegative component areas gives the stated component bound. These arguments also cover a disconnected target (it has finitely many components) and the case $r=0$, where no nonconstant closed tame holomorphic map exists. Boundary and inhomogeneous maps lack the closed integral two-cycle used here and have not been included. [F1, step 1.1, step 2.1, step 3.1, algebra] ∎
