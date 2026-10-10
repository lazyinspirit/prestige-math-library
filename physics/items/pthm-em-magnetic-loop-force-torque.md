---
id: "pthm-em-magnetic-loop-force-torque"
kind: "physics-theorem"
title: "Force and torque on a declared ideal thin-wire loop in a prescribed external field"
domain: physics
status: draft
origin: session
dependency_level: 20
deps: ["def-em-steady-current-regime", "def-em-magnetic-moment", "post-em-lorentz-coupling", "post-em-vacuum-maxwell", "pthm-em-magnetostatic-vector-potential", "pthm-em-biot-savart", "def-ck-euclidean-maps-and-diffeomorphisms", "def-cross-product-in-r3", "def-divergence-and-curl-of-a-c1-vector-field", "def-euclidean-inner-product", "def-riemann-integral-over-a-jordan-set", "thm-continuous-functions-on-compact-jordan-sets-are-integrable", "thm-multidimensional-integral-properties", "def-distributional-derivative", "thm-chain-rule-for-total-derivatives", "thm-ftc-second-part", "def-dirac-delta-and-its-derivatives", "def-countable-choice", thm-heine-borel-rn, thm-extreme-value-metric, thm-cauchy-schwarz-and-the-euclidean-norm]
dependency_roles:
  thm-cauchy-schwarz-and-the-euclidean-norm: mathematical-premise
  thm-extreme-value-metric: mathematical-premise
  thm-heine-borel-rn: mathematical-premise
  "def-em-steady-current-regime": "formulation-prerequisite"
  "def-em-magnetic-moment": "formulation-prerequisite"
  "post-em-lorentz-coupling": "physical-assumption"
  "post-em-vacuum-maxwell": "physical-assumption"
  "pthm-em-magnetostatic-vector-potential": "physical-result"
  "pthm-em-biot-savart": "physical-result"
  "def-ck-euclidean-maps-and-diffeomorphisms": "mathematical-premise"
  "def-cross-product-in-r3": "mathematical-premise"
  "def-divergence-and-curl-of-a-c1-vector-field": "mathematical-premise"
  "def-euclidean-inner-product": "mathematical-premise"
  "def-riemann-integral-over-a-jordan-set": "mathematical-premise"
  "thm-continuous-functions-on-compact-jordan-sets-are-integrable": "mathematical-premise"
  "thm-multidimensional-integral-properties": "mathematical-premise"
  "def-distributional-derivative": "mathematical-premise"
  "thm-chain-rule-for-total-derivatives": "mathematical-premise"
  "thm-ftc-second-part": "mathematical-premise"
  "def-dirac-delta-and-its-derivatives": "mathematical-premise"
  "def-countable-choice": "mathematical-premise"
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
proof_strategy: direct
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-10
sources:
  references:
    - title: "David J. Griffiths, Introduction to Electrodynamics, 3rd edition (Prentice Hall 1999, 596 pp.; full scanned text)"
      url: "https://www.hlevkin.com/hlevkin/90MathPhysBioBooks/Physics/Physics/Electrodynamics/David%20J.%20Griffiths%20-%20Introduction%20to%20Electrodynamics-Prentice%20Hall%20(1999).pdf"
      locator: "Section 5.1.3 printed pp. 208-214 (the force on a current-carrying wire $\\mathbf F=\\int I\\,d\\mathbf l\\times\\mathbf B$ (5.17)) and Section 6.1.2 printed pp. 255-260 (torque $\\mathbf N=\\mathbf m\\times\\mathbf B$ on a loop in a uniform field (6.1), zero net force in a uniform field, and $\\mathbf F=\\nabla(\\mathbf m\\cdot\\mathbf B)$ (6.3) for a small loop in a nonuniform field, with Problems 6.2 and 6.4); read in the stamped scanned full text."
    - title: "David Tong, Electromagnetism, University of Cambridge Part II Mathematical Tripos lecture notes (2026 printing, 236 pp.)"
      url: "https://davidtong.org/pdfs/teaching/electromagnetism/electro.pdf"
      locator: "Sections 3.4.1-3.4.2 printed pp. 57-62 (force between currents, the Taylor expansion of the field over a small localised current, and the moment manipulations that reduce the first-order force term); read in the stamped 236-page PDF."
    - title: "L. D. Landau, E. M. Lifshitz, The Classical Theory of Fields, Third Revised English Edition (Course of Theoretical Physics vol. 2, Pergamon Press 1971, 387 pp.)"
      url: "http://www.elegio.it/mc2/LandauLifshitz_TheClassicalTheoryOfFields_text.pdf"
      locator: "Section 45 printed pp. 105-106 (the average moment of the forces on a system in a constant uniform magnetic field, $K=m\\times H$ (45.1)); read in the stamped 387-page full text, re-expressed in SI."
physical_scope: "Force and torque on a declared ideal thin-wire loop in a prescribed external magnetic field, under an explicitly adopted neutral-wire Lorentz coupling. Only the external field acts: self-fields, radiation reaction, mechanical support, deformation and material failure are outside the statement; no dynamics, radiation or empirical measurement is claimed, and the result is conditional on the adopted coupling (W)."
---

## Statement

Let $\gamma:[0,L]\to\mathbb R^3$ be a $C^2$ curve parametrized by arc length ($|\gamma'|\equiv1$) that is either closed ($\gamma(0)=\gamma(L)$ with matching one-sided derivatives) or a wire segment with free endpoints, let $I\in\mathbb R$, let $m=\frac I2\int_0^L\gamma(s)\times\gamma'(s)\,ds$ be the finite Riemann source moment defined by this displayed integral in the closed case. For an embedded closed loop this agrees with [[def-em-magnetic-moment]](b); embeddedness is not required for the present parametrized-curve calculation. Let $B$ be a prescribed external magnetic field, of class $C^0$ on a neighbourhood of the trace of $\gamma$ in part (a) and of class $C^2$ on an open set containing the closed ball $\overline{B_a(0)}$ in parts (b)-(d). Adopt the thin-wire coupling hypothesis (W): for a general closed parametrized curve use the stated direct neutral-wire Riemann coupling (with multiplicity of traversal retained); in the embedded closed-loop specialization its source interpretation is exactly [[def-em-steady-current-regime]](c1); for an open curve use a compact segment of a fed or closed neutral circuit, including a segment of the declared infinite wire of (c2). Adopt separately for that parametrized wire or local segment the direct external magnetic coupling $dF=I\,d\gamma\times B$ and $dN=\gamma\times dF$, as an ideal extension motivated by the smooth continuum Lorentz law [[post-em-lorentz-coupling]](ii); that smooth-source postulate does not itself include singular currents. An isolated static neutral open segment is not asserted: its standalone current satisfies $\operatorname{div}J_{\rm seg}=I(\delta_{\gamma(0)}-\delta_{\gamma(L)})$, so its endpoint feed/return cannot be suppressed in a global model. Force and torque here concern only the specified local segment under this adopted coupling. Then:

**(a) [Force and torque under (W)]**
$$F:=I\int_0^L\gamma'(s)\times B(\gamma(s))\,ds,\qquad N:=I\int_0^L\gamma(s)\times\bigl(\gamma'(s)\times B(\gamma(s))\bigr)\,ds,$$
the componentwise Riemann integrals of continuous functions on the compact interval $[0,L]$ ([[def-riemann-integral-over-a-jordan-set]], [[thm-continuous-functions-on-compact-jordan-sets-are-integrable]]).

**(b) [Constant field]** If $\gamma$ is closed and $B$ is constant on a neighbourhood of the loop, then $F=0$ and $N=m\times B$ exactly.

**(c) [Slowly varying field]** Let $\gamma$ be closed with $|\gamma(s)|\le a$ for all $s$, let $B$ be $C^2$ on an open set containing $\overline{B_a(0)}$ with constants $M_1,M_2$ such that $|B(x)-B(y)|\le M_1|x-y|$ and $|B(x)-B(0)-DB(0)x|\le\frac12M_2|x|^2$ for $|x|,|y|\le a$, and suppose $\operatorname{div}B=0$ on $B_a(0)$ (as holds for the external part of any smooth-branch vacuum field by [[post-em-vacuum-maxwell]], [[def-divergence-and-curl-of-a-c1-vector-field]]). Then
$$F=\nabla(m\cdot B)(0)+R_F,\qquad N=m\times B(0)+R_N,$$
with $|R_F|\le\frac12|I|\,L\,a^2M_2$ and $|R_N|\le|I|\,L\,a^2M_1$, where $\nabla(m\cdot B)(0)$ is the gradient at $0$ of $x\mapsto m\cdot B(x)$ for the fixed vector $m$ ([[def-euclidean-inner-product]]).

**(d) [Sufficient condition]** If the external field is the magnetostatic field of a compact smooth steady current $J_{\rm ext}\in C_c^\infty(\Omega;\mathbb R^3)$ with $\operatorname{div}J_{\rm ext}=0$ ([[pthm-em-magnetostatic-vector-potential]], [[pthm-em-biot-savart]]), then it is $C^\infty$ on $\mathbb R^3$, satisfies $\operatorname{div}B=0$, and meets the hypotheses of (c) on every ball $\overline{B_a(0)}$ with finite constants $M_1,M_2$.

**(e) [Scope]** Only the external field acts on the loop: the loop's own field, self-force, radiation reaction, mechanical support and material response are outside the statement, and no claim is made about the loop's dynamics, deformation or failure. The coupling (W) is an explicit idealisation of a neutral thin wire at rest in the laboratory frame; it is adopted, not derived, and the theorem is conditional on it. No measurement or uncertainty is involved. Parts (a)-(c), conditional on the explicit coupling (W) and the supplied curve and external field, are finite Riemann-integral calculations and use no Choice axiom. Part (d), transporting the Newtonian-potential construction, assumes Countable Choice ([[def-countable-choice]]).

## Facts & Assumptions

**Given:** The $C^2$ arc-length curve $\gamma$, the real $I$, the prescribed field $B$, the coupling (W) of the Statement, and, in parts (b)-(d), the ball containment and regularity hypotheses stated there.

[F1] Under the coupling (W), the force and torque on the parametrized wire are the componentwise Riemann integrals $F=I\int_0^L\gamma'\times B(\gamma)\,ds$ and $N=I\int_0^L\gamma\times(\gamma'\times B(\gamma))\,ds$ of the Statement; continuous integrands on the compact interval are Riemann integrable ([[def-riemann-integral-over-a-jordan-set]], [[thm-continuous-functions-on-compact-jordan-sets-are-integrable]], [[def-ck-euclidean-maps-and-diffeomorphisms]], [[def-cross-product-in-r3]]).

[F2] The cross product is $u\times v=(u_2v_3-u_3v_2,\ u_3v_1-u_1v_3,\ u_1v_2-u_2v_1)$ with $(u\times v)_i=\varepsilon_{ijk}u_jv_k$, the inner product is $\langle u,v\rangle=\sum_iu_iv_i$, and the identities $a\times(b\times c)=b(a\cdot c)-c(a\cdot b)$ and $\varepsilon_{ijk}\varepsilon_{ljp}=\delta_{il}\delta_{kp}-\delta_{ip}\delta_{kl}$ hold ([[def-cross-product-in-r3]], [[def-euclidean-inner-product]]).

[F3] The Riemann integral on a compact rectangle is linear, monotone, satisfies $|\int f|\le\int|f|$, and the integral of a constant $c$ over $[0,L]$ is $cL$; these properties are used for the remainder estimates ([[thm-multidimensional-integral-properties]], [[def-riemann-integral-over-a-jordan-set]]).

[F4] The bounds $|B(x)-B(y)|\le M_1|x-y|$ and $|B(x)-B(0)-DB(0)x|\le\frac12M_2|x|^2$ on $\overline{B_a(0)}$ are the explicit hypotheses of (c). For (d), the coordinate FTC of [F9] applied twice to $s\mapsto B(sx)$ gives the componentwise finite-Riemann identity $B(x)-B(0)-DB(0)x=\int_0^1(1-s)D^2B(sx)[x,x]ds$. It does not require a common Lagrange point for all vector components.

[F5] The moment of [[def-em-magnetic-moment]](b) for a closed embedded arc-length loop is exactly $m=\frac I2\int_0^L\gamma\times\gamma'\,ds$; the declared ideal loop source is [[def-em-steady-current-regime]](c1) and the declared infinite wire is [[def-em-steady-current-regime]](c2) ([[def-em-magnetic-moment]], [[def-em-steady-current-regime]]).

[F6] The compact smooth current class is [[def-em-steady-current-regime]](b); its magnetostatic field construction is [[pthm-em-magnetostatic-vector-potential]] and its Biot-Savart representation is [[pthm-em-biot-savart]]: the external field of a compact smooth conserved current is $C^\infty$ on $\mathbb R^3$ with $\operatorname{div}B=0$ ([[pthm-em-magnetostatic-vector-potential]], [[pthm-em-biot-savart]]); the smooth-branch vacuum equations are [[post-em-vacuum-maxwell]] and the smooth continuum Lorentz coupling that motivates (W) is [[post-em-lorentz-coupling]](ii).

[F7] Distributional derivatives act by signed test differentiation, $\langle\partial^\alpha u,\chi\rangle=(-1)^{|\alpha|}\langle u,\partial^\alpha\chi\rangle$ ([[def-distributional-derivative]]); a $C^1$ composition $\varphi\circ\gamma$ has derivative $(\varphi\circ\gamma)'=(\nabla\varphi)(\gamma)\cdot\gamma'$ ([[thm-chain-rule-for-total-derivatives]]) and satisfies the fundamental theorem $\int_0^L(\varphi\circ\gamma)'ds=\varphi(\gamma(L))-\varphi(\gamma(0))$ ([[thm-ftc-second-part]]); the Dirac distribution at a point $p$ acts by $\delta_p(\varphi)=\varphi(p)$ ([[def-dirac-delta-and-its-derivatives]]).

[F8] $\mathrm{AC}_\omega$ is the countable-choice principle assumed in part (d) and inherited by the Newtonian-potential suppliers ([[def-countable-choice]]).

[F9] Compact closed Euclidean balls are compact ([[thm-heine-borel-rn]]); continuous real functions on a nonempty compact metric set attain finite extrema ([[thm-extreme-value-metric]]). The fundamental theorem integrates continuous derivatives on compact intervals ([[thm-ftc-second-part]]). Finite-vector Cauchy-Schwarz gives $|u\cdot v|\le|u||v|$ ([[thm-cauchy-schwarz-and-the-euclidean-norm]]); testing a vector integral against its unit direction gives the corresponding integral norm bound.

## Proof

**Proof technique:** direct evaluation of the pairings under the coupling, the antisymmetric first-moment identities for a closed curve, one Taylor expansion with an explicit remainder, and the compact-current sufficient condition.

1.1 Under the adopted coupling (W) the total force and torque of the parametrized wire are the integrals of the Statement: at arc-length parameter $s$ the element $d\gamma=\gamma'(s)ds$ carries current $I$, so $dF=I\gamma'(s)\times B(\gamma(s))ds$ and $dN=\gamma(s)\times dF$. The integrands are compositions and products of continuous maps on the compact interval $[0,L]$, hence continuous and Riemann integrable, so the componentwise integrals of [F1] are finite. This is (a). [given, F1, F2]

1.2 Let $B$ be constant on a neighbourhood of the closed curve. Then $F=I\left(\int_0^L\gamma'(s)ds\right)\times B=I(\gamma(L)-\gamma(0))\times B=0$. For the torque, $F$'s definition and [F2] give $\gamma\times(\gamma'\times B)=(\gamma\cdot B)\gamma'-(\gamma\cdot\gamma')B$, so with the matrix $M_{jl}:=\int_0^L\gamma_j\gamma'_l\,ds$ one has $N=I\int_0^L(\gamma\cdot B)\gamma'\,ds-I\left(\int_0^L\gamma\cdot\gamma'\,ds\right)B=I\,B_jM_{jl}e_l$. The scalar $\gamma\cdot\gamma'=\frac12\frac{d}{ds}|\gamma|^2$ integrates to $0$ over the closed curve, and integrating $\frac{d}{ds}(\gamma_j\gamma_l)$ over the closed curve gives $M_{jl}+M_{lj}=0$, so $M$ is antisymmetric. For antisymmetric $M$, the moment $m_p=\frac I2\varepsilon_{pab}M_{ab}$ satisfies $I M_{jl}=\varepsilon_{jlp}m_p$ because $\varepsilon_{abp}\varepsilon_{pcd}=\delta_{ac}\delta_{bd}-\delta_{ad}\delta_{bc}$ gives $\varepsilon_{abp}m_p=\frac I2(M_{ab}-M_{ba})=IM_{ab}$. Substituting, $N=\varepsilon_{jlp}m_pB_j e_l=m\times B$ by the cyclic identity of the alternating symbol, and this is (b). [given, F1, F2, F5]

1.3 Let $J_{\rm seg}$ be the standalone open-segment current defined by $\langle J_{\rm seg},\psi\rangle:=I\int_0^L\gamma'(s)\cdot\psi(\gamma(s))\,ds$ for vector tests $\psi$. With the componentwise distributional divergence pairing of [F7], $\langle\operatorname{div}J_{\rm seg},\varphi\rangle=-I\int_0^L\gamma'(s)\cdot\nabla\varphi(\gamma(s))\,ds=-I\int_0^L(\varphi\circ\gamma)'(s)\,ds=I(\varphi(\gamma(0))-\varphi(\gamma(L)))=I(\delta_{\gamma(0)}-\delta_{\gamma(L)})(\varphi)$ for every scalar test $\varphi$, the chain rule and the fundamental theorem of [F7] giving the middle equality. This is the endpoint identity asserted in the Statement, and it shows why the segment is treated as a local part of a fed or closed circuit. [given, F7]

2.1 Under the hypotheses of (c), step 1.1's formulas apply, and [F4] gives the decomposition $B(x)=B(0)+DB(0)x+R(x)$ with $|R(x)|\le\frac12M_2|x|^2$ for $|x|\le a$, together with the Lipschitz bound $|B(x)-B(y)|\le M_1|x-y|$ on the ball. [step 1.1, F4]

3.1 For the force in (c), the constant term vanishes as in step 1.2, and the linear term is $I\varepsilon_{ijk}\partial_lB_k(0)M_{lj}e_i$ with the matrix $M$ of step 1.2. Substituting $IM_{lj}=\varepsilon_{ljp}m_p$ from step 1.2 and contracting by [F2], $I\varepsilon_{ijk}\partial_lB_k(0)M_{lj}e_i=(\delta_{il}\delta_{kp}-\delta_{ip}\delta_{kl})\partial_lB_k(0)m_pe_i=\bigl(\partial_i(m\cdot B)(0)-m_i\operatorname{div}B(0)\bigr)e_i=\nabla(m\cdot B)(0)$, since $m$ is constant and $\operatorname{div}B(0)=0$. By [F3] and step 2.1 the remainder obeys $|I\int_0^L\gamma'\times R(\gamma)\,ds|\le|I|\int_0^L|\gamma'|\,|R(\gamma)|\,ds\le\frac12|I|La^2M_2$, because $|\gamma'|\equiv1$ and $|\gamma(s)|\le a$. This proves the force assertion of (c) with $|R_F|\le\frac12|I|La^2M_2$. [step 1.2, step 2.1, F2, F3]

3.2 For the torque in (c), split $B(\gamma(s))=B(0)+(B(\gamma(s))-B(0))$. The first part is the constant-field torque of step 1.2 with the constant field $B(0)$, that is $m\times B(0)$. For the remainder, [F2] gives $\gamma\times(\gamma'\times(B(\gamma)-B(0)))=\gamma'(\gamma\cdot(B(\gamma)-B(0)))-(B(\gamma)-B(0))(\gamma\cdot\gamma')$ and hence, by [F3] and step 2.1, $\left|I\int_0^L\gamma\times(\gamma'\times(B(\gamma)-B(0)))\,ds\right|\le|I|\int_0^L|\gamma|\,|\gamma'|\,|B(\gamma)-B(0)|\,ds\le|I|\,a\cdot1\cdot M_1a\cdot L$. This proves the torque assertion of (c) with $|R_N|\le|I|La^2M_1$. [step 1.2, step 2.1, F2, F3]

3.3 For (d): by [F6] the external field of a compact smooth conserved current satisfies $B=\operatorname{curl}A$, hence is $C^\infty$ on $\mathbb R^3$ with $\operatorname{div}B=0$; on the compact ball $\overline{B_a(0)}$ let $C_1,C_2$ be the maxima of the absolute coordinate first and second partial derivatives, finite by [F9], and put $M_1:=9C_1$, $M_2:=27C_2$. The coordinate sum bounds give $|DB(x)v|\le M_1|v|$ and $|D^2B(x)[v,w]|\le M_2|v||w|$. Integrating the first derivative along the segment from $x$ to $y$ gives $|B(x)-B(y)|\le M_1|x-y|$; integrating the identity of [F4] gives $|B(x)-B(0)-DB(0)x|\le\frac12M_2|x|^2$. All segments lie in the convex closed ball Hence the hypotheses of (c) are met on every such ball with finite constants. [step 2.1, F4, F6, F9]

4.1 Parts (a), (b), (c), (d) are steps 1.1, 1.2, 3.1, 3.2 and 3.3; the endpoint identity quoted in the Statement is step 1.3. The scope clause (e) records that only the external field acts, that the coupling (W) is an adopted idealisation motivated by the smooth continuum law [[post-em-lorentz-coupling]](ii) rather than derived from it, and that no self-field, self-force, radiation reaction, mechanical support, deformation or dynamical claim is made. Parts (a)-(c) are finite Riemann-integral calculations and use no Choice axiom; part (d) inherits Countable Choice only through the Newtonian-potential suppliers [F8]. The moment identity is contracted without dividing by $I$; for $I=0$ the moment, force, torque and both remainders vanish, and the algebra applies to every stated closed parametrized $C^2$ curve, including multiply traversed and self-intersecting ones, since only closure, unit speed and the finite moment integral are used. [step 1.1, step 1.2, step 1.3, step 3.1, step 3.2, step 3.3, F5, F8] ∎

## Source notes

Griffiths, Section 5.1.3, printed pp. 208-214, gives the wire force $\mathbf F=\int I\,d\mathbf l\times\mathbf B$ (5.17), and Section 6.1.2, printed pp. 255-260, gives $\mathbf N=\mathbf m\times\mathbf B$ in a uniform field (6.1), the vanishing net force in a uniform field, and $\mathbf F=\nabla(\mathbf m\cdot\mathbf B)$ for a small loop in a nonuniform field (6.3), with Problems 6.2 and 6.4; Tong, Sections 3.4.1-3.4.2, printed pp. 57-62, performs the Taylor expansion over a small localised current and the moment manipulations; Landau-Lifshitz, Section 45, printed pp. 105-106, gives the average moment $K=m\times H$ (45.1), re-expressed here in SI. The theorem above is the exact conditional version for the declared parametrized wire under the explicitly adopted coupling (W); the texts do not supply the neutral-wire hypothesis, which is stated here as an idealisation.
