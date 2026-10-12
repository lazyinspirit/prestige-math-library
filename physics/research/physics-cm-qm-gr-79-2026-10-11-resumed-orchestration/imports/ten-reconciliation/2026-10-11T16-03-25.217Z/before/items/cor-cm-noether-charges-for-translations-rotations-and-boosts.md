---
id: cor-cm-noether-charges-for-translations-rotations-and-boosts
kind: corollary
title: "Conserved charges for translation, rotation and boost symmetries of a mechanical Lagrangian"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 5
deps: [thm-cm-point-noether-identity-with-time-reparametrization, def-cm-infinitesimal-point-symmetry, def-cm-time-dependent-lagrangian-and-action, thm-chain-rule-for-total-derivatives, thm-algebra-of-derivatives, cor-zero-derivative-implies-constant, def-cross-product-in-r3, def-euclidean-inner-product, def-jacobian-matrix-and-gradient, def-directional-and-partial-derivatives, def-matrix-product-and-identity-matrix, def-vector-valued-derivative-and-integral, def-interval]
dependency_roles:
  thm-cm-point-noether-identity-with-time-reparametrization: mathematical-premise
  def-cm-infinitesimal-point-symmetry: mathematical-premise
  def-cm-time-dependent-lagrangian-and-action: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  cor-zero-derivative-implies-constant: mathematical-premise
  def-cross-product-in-r3: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-jacobian-matrix-and-gradient: mathematical-premise
  def-directional-and-partial-derivatives: mathematical-premise
  def-matrix-product-and-identity-matrix: mathematical-premise
  def-vector-valued-derivative-and-integral: mathematical-premise
  def-interval: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "D. Cline, Variational Principles in Classical Mechanics (2nd edition, University of Rochester River Campus Libraries, open textbook, CC BY-NC-SA 4.0), Sections 7.3-7.4 (Noether's theorem; Rotational invariance and conservation of angular momentum)"
      url: "https://downloads.libretexts.org/api/v1/download/phys-9557/pdf"
    - title: "D. Tong, Classical Dynamics (University of Cambridge Part II Mathematical Tripos), Section 2.4.1 (the translation and rotation charges) and Section 1.2 (the Galilean group and boosts), printed pages 23-26 and 2-5"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
verification:
  precheck: pass
---

## Statement

Let $n\ge1$, let $m>0$, let $U\subseteq\mathbb R^n$ be open, let
$U_0:(a-\varepsilon,b+\varepsilon)\times U\to\mathbb R$ be of class $C^2$, and let

$$\mathcal L(t,q,v):=\tfrac12m|v|^2-U_0(t,q)$$

be the corresponding Lagrangian chart ([[def-cm-time-dependent-lagrangian-and-action]],
[[def-euclidean-inner-product]]). Let $q:I\to U$ be a $C^2$ Euler–Lagrange solution on an open
interval $I\supseteq[a,b]$. Then:

1. **(translation)** if $a\in\mathbb R^n$ and $a\cdot\nabla_qU_0(t,q)=0$ for every $(t,q)$, then
   $P_a(t):=m\,a\cdot q'(t)$ is constant on $I$;
2. **(rotation)** if $n=3$, $a\in\mathbb R^3$ and $(a\times q)\cdot\nabla U_0(t,q)=0$ for every
   $(t,q)$, then $J_a(t):=m\,(q(t)\times q'(t))\cdot a$ is constant on $I$;
3. **(boost)** if $a\in\mathbb R^n$ and $a\cdot\nabla_qU_0=0$ on the whole chart, then
   $K_a(t):=a\cdot\bigl(t\,m\,q'(t)-m\,q(t)\bigr)$ is constant on $I$.

## Facts & Assumptions

**Given:** The real $m>0$, the $C^2$ potential $U_0$, the Lagrangian
$\mathcal L(t,q,v)=\tfrac12m|v|^2-U_0(t,q)$, a vector $a$ (in $\mathbb R^n$ in clauses 1 and 3,
in $\mathbb R^3$ in clause 2), and a $C^2$ Euler–Lagrange solution $q:I\to U$.

[F1] The Noether theorem ([[thm-cm-point-noether-identity-with-time-reparametrization]]): if
$C^2$ data $\tau,\xi,B$ satisfy the Noether identity of that theorem, then
$C=\mathcal L_v\cdot\xi-E\tau-B$ is constant along $q$. Here
$\mathcal L_v=m\,v$ and $E=\tfrac12m|v|^2+U_0$. [given, algebraic computation of $\mathcal L_v$ and
$E$ from the definition]

[F2] The cross product is alternating and bilinear, and
$(a\times u)\cdot w=a\cdot(u\times w)$ for all $a,u,w\in\mathbb R^3$
([[def-cross-product-in-r3]], [[def-euclidean-inner-product]],
[[thm-algebra-of-derivatives]]); in particular $v\cdot(a\times v)=0$ and
$\frac{d}{dt}(a\times q)=a\times q'$ along a differentiable curve
([[thm-chain-rule-for-total-derivatives]], [[def-vector-valued-derivative-and-integral]],
[[def-interval]], [[cor-zero-derivative-implies-constant]]).

[F3] Gradients and directional derivatives: $a\cdot\nabla U_0$ is the derivative of $U_0$ in the
direction $a$ ([[def-jacobian-matrix-and-gradient]], [[def-directional-and-partial-derivatives]]),
and for the quadratic potential $U_0(q)=\tfrac12k|q|^2$ one has $\nabla U_0=kq$
([[def-euclidean-inner-product]], [[def-matrix-product-and-identity-matrix]]).

## Proof

**Proof technique:** direct; verify the Noether identity for each of the three families and read
off the charge.

1.1 **Translation.** Take $\tau=0$, $\xi(t,q):=a$ (constant) and $B=0$. Then $D_t\xi=0$ and the Noether identity reduces to $\mathcal L_q\cdot a=-a\cdot\nabla U_0=0$, which holds by hypothesis of clause 1. The charge is $C=\mathcal L_v\cdot a-E\cdot0-0=m\,a\cdot q'(t)=P_a(t)$, constant on $I$ by [F1]. [F1, F3, given]

1.2 **Rotation.** Take $n=3$, $\tau=0$, $\xi(t,q):=a\times q$ and $B=0$. Then $D_t\xi=a\times q'$, so the identity reads $\mathcal L_q\cdot(a\times q)+\mathcal L_v\cdot(a\times q')=-(a\times q)\cdot\nabla U_0+m\,q'\cdot(a\times q')$. The first term vanishes by the hypothesis of clause 2 and the second by [F2] (the scalar triple product with two equal factors $q'$ vanishes). Hence the identity holds and the charge is $$C=m\,q'\cdot(a\times q)=m\,(q\times q')\cdot a=J_a(t),$$ constant on $I$ by [F1]. [F1, F2, given]

1.3 **Boost.** Take $\tau=0$, $\xi(t,q):=t\,a$ and $B(t,q):=m\,a\cdot q$. Then $D_t\xi=a$ and $D_tB=m\,a\cdot q'$, so the identity reads $\mathcal L_q\cdot ta+\mathcal L_v\cdot a=-t\,a\cdot\nabla U_0+m\,a\cdot q'$, which equals $m\,a\cdot q'=D_tB$ by the hypothesis $a\cdot\nabla U_0=0$. Hence the identity holds with charge $$C=m\,q'(t)\cdot(ta)-m\,a\cdot q(t)=a\cdot\bigl(t\,m\,q'(t)-m\,q(t)\bigr)=K_a(t),$$ constant on $I$ by [F1]. [F1, F3, given, algebra]

2.1 **Failure for a quadratic potential.** For $U_0(q)=\frac k2|q|^2$ with $k>0$ and $a\ne0$, the hypotheses of clauses 1 and 3 fail, since $a\cdot\nabla U_0=k\,a\cdot q$ is not identically zero; so the translation and boost identities are not available, and the corollary gives no conserved $P_a$ or $K_a$ for this potential. [F3, given] ∎

## Remarks

- Clause 3 is the Galilean boost charge: it is conserved exactly when the potential is invariant
  along the boost direction, which for a translation-invariant potential means that the potential
  is constant along $a$. A confining potential such as $\tfrac k2|q|^2$ breaks the boost symmetry
  even though the Galilean charts of the framework still exist; this is the mathematical content
  of the warning that a kinematic symmetry need not be a symmetry of the chosen Lagrangian.

- All three statements are conditional deductions inside the chart model: they identify conserved
  quantities of the Euler–Lagrange equation under explicitly stated symmetry hypotheses of the
  potential. They are mathematical statements about the model and are not claims that any
  particular physical system possesses the required symmetry.
