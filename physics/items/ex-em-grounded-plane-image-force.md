---
id: ex-em-grounded-plane-image-force
kind: example
title: "Force on a held charge above a grounded plane in the image model"
status: draft
origin: session
dependency_level: 18
domain: physics
deps: [pthm-em-image-method-certificate, pthm-em-coulomb-solution, post-em-lorentz-coupling, def-em-fields, def-em-si-conventions, def-directional-and-partial-derivatives, def-euclidean-inner-product, thm-chain-rule-for-total-derivatives, thm-real-power-continuity-and-derivatives, lem-derivative-of-a-power, thm-algebra-of-derivatives, def-ck-euclidean-maps-and-diffeomorphisms, def-metric-ball, lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric, def-countable-choice, def-em-electromagnetic-tensor]
dependency_roles:
  pthm-em-image-method-certificate: physical-result
  pthm-em-coulomb-solution: physical-result
  post-em-lorentz-coupling: physical-assumption
  def-em-fields: formulation-prerequisite
  def-em-si-conventions: formulation-prerequisite
  def-em-electromagnetic-tensor: formulation-prerequisite
  def-directional-and-partial-derivatives: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  thm-real-power-continuity-and-derivatives: mathematical-premise
  lem-derivative-of-a-power: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-metric-ball: mathematical-premise
  lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric: mathematical-premise
  def-countable-choice: mathematical-premise
physical_scope: "The external electrostatic force on an ideal point charge held at height a above an ideal grounded conducting plane, within the declared image model: the mirror field at the charge is -(q/(16 pi epsilon_0 a^2)) e_3 and the adopted external Lorentz coupling gives the attractive force -(q^2/(16 pi epsilon_0 a^2)) e_3 with self-field excluded. The item asserts no measurement, no motion, no radiation, no finite-geometry fringe corrections and no self-force. The attraction is strict for $q\\ne0$ and the force vanishes for $q=0$; holding the charge requires the opposite support force. This is the electric contribution at rest, not a sole-force trajectory solution."
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "David J. Griffiths, Introduction to Electrodynamics, 3rd edition (Prentice Hall 1999, 596 pp.; full scanned text)"
      url: https://www.hlevkin.com/hlevkin/90MathPhysBioBooks/Physics/Physics/Electrodynamics/David%20J.%20Griffiths%20-%20Introduction%20to%20Electrodynamics-Prentice%20Hall%20(1999).pdf
      locator: "Section 3.2.3 printed p. 123, Eq. (3.12) (force on the charge above a grounded conducting plane)."
    - title: "David Tong, Electromagnetism, University of Cambridge Mathematical Tripos lecture notes (Lent Term 2015, 236 PDF pages)"
      url: https://davidtong.org/pdfs/teaching/electromagnetism/electro.pdf
      locator: "Section 2.4.3 printed p. 36 (force F = -q^2/(16 pi epsilon_0 d^2) x-hat on the charge)."
verification:
  precheck: pass
---

## Example

Assume the Countable Choice convention of [[pthm-em-image-method-certificate]] and [[pthm-em-coulomb-solution]] ([[def-countable-choice]]). In the ideal grounded-plane configuration of [[pthm-em-image-method-certificate]]: vacuum half-space $H=\{x_3>0\}$, point charge parameter $q\in\mathbb R$ at $p=ae_3$ ($a>0$), field $E_I$ given by the image potential, and $E_I$ has the Coulomb singularity $(q/(4\pi\varepsilon_0))(x-p)/|x-p|^3$ of the source charge as $x\to p$ ([[pthm-em-coulomb-solution]](d), [[def-em-fields]]). Split the field near $p$ as

$$E_I(x)=E_q(x)+E_{\rm ext}(x),\qquad E_q(x):=\frac{q}{4\pi\varepsilon_0}\frac{x-p}{|x-p|^3}\quad(x\ne p),$$

the **self-field** $E_q$ of the source charge and the **external (mirror) field** $E_{\rm ext}:=E_I-E_q$, which is $C^\infty$ on a neighbourhood of $p$ (it is minus the gradient of the smooth mirror term $-q/(4\pi\varepsilon_0)|x+ae_3|^{-1}$). Then:

(a) [External field at the charge] the external field at the location of the charge is

$$E_{\rm ext}(p)=-\frac{q}{16\pi\varepsilon_0a^2}\,e_3 .$$

It is the negative gradient of the mirror term evaluated at $p$ ([[def-directional-and-partial-derivatives]], [[thm-chain-rule-for-total-derivatives]], [[thm-real-power-continuity-and-derivatives]], [[lem-derivative-of-a-power]], [[thm-algebra-of-derivatives]], [[def-euclidean-inner-product]]).

(b) [Force on the held charge] under the adopted external Lorentz coupling [[post-em-lorentz-coupling]](i) at zero velocity, a test particle of charge $q$ held at $p$ experiences the electric force

$$F=q\,E_{\rm ext}(p)=-\frac{q^2}{16\pi\varepsilon_0a^2}\,e_3,$$

strictly attractive toward the plane when $q\ne0$ and zero when $q=0$, of magnitude $q^2/(16\pi\varepsilon_0a^2)$; the particle's own field is excluded from the coupling by the postulate, so the result is a two-body-style external force of the mirror field and is not a self-force.

(c) [Reading and scope] for either nonzero sign of $q$ the force is attractive (the magnitude depends on $q^2$), while $q=0$ gives zero force; the induced total plane charge is $-q$ and its distribution is concentrated under the charge; the example is the exact ideal-model result for a held point charge, an ideal grounded plane and the adopted static external force law. It asserts no measurement, no dynamics of the charge (no motion or radiation), no finite-plane or finite-conductor correction, no self-force and no claim that the pair of idealisations is realised by an apparatus; the source is the idealised stationary point charge of [[pthm-em-image-method-certificate]](e), not a declared compact-source model. Here the displayed force is the electric contribution at rest. Holding the charge at $p$ requires a balancing support force $F_{\rm support}=-F$; the held trajectory is not asserted to solve the equation with the electric Lorentz force as its sole force.

## Facts & Assumptions


**Given:** The ideal grounded-plane configuration of [[pthm-em-image-method-certificate]] with charge parameter $q$, location $p=ae_3$, $a>0$, field $E_I=-\nabla\varphi_I$ and the split $E_I=E_q+E_{\rm ext}$ of the statement.

[F1] The image certificate supplies the candidate potential and field; the mirror term $u(x):=-(q/(4\pi\varepsilon_0))|x+ae_3|^{-1}$ is $C^\infty$ on the ball $|x-p|<a$ because $|x+ae_3|\ge a>0$ there, and off the pole $E_I=-\nabla\varphi_I$ with $\varphi_I=\varphi_q^p+u$, where $\varphi_q^p=(q/\varepsilon_0)\Phi(\cdot-p)$ is the point-charge potential of the fundamental solution and $E_q=-\nabla\varphi_q^p$ ([[pthm-em-image-method-certificate]](a),(b); [[pthm-em-coulomb-solution]](d)).

[F2] Derivative calculus for the mirror term: for fixed $c\ne0$ the function $x\mapsto|x+c|^{-1}$ is $C^\infty$ on $\{|x+c|>0\}$ with $\nabla|x+c|^{-1}=-(x+c)|x+c|^{-3}$, by the chain and power rules and the Euclidean inner product ([[thm-chain-rule-for-total-derivatives]], [[thm-real-power-continuity-and-derivatives]], [[lem-derivative-of-a-power]], [[thm-algebra-of-derivatives]], [[def-directional-and-partial-derivatives]], [[def-euclidean-inner-product]], [[lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric]], [[def-ck-euclidean-maps-and-diffeomorphisms]]).

[F3] The adopted external Lorentz coupling at zero velocity: [[post-em-lorentz-coupling]](i) adopts the covariant Lorentz-force equation with a prescribed external field and excludes the particle's own field; at zero coordinate velocity the magnetic term vanishes and the coordinate force is $q$ times the external electric field, in the units of [[def-em-si-conventions]] ([[post-em-lorentz-coupling]], [[def-em-fields]], [[def-em-si-conventions]], [[def-em-electromagnetic-tensor]]).

[F4] The ball $|x-p|<a$ contains $p$ and is an open neighbourhood of $p$ ([[def-metric-ball]]).

## Verification

**Proof technique:** direct.

1.1 External field. By [F1], $E_{\rm ext}=E_I-E_q=-\nabla(\varphi_I-\varphi_q^p)=-\nabla u$ on the punctured half-space, and $u$ is $C^\infty$ on the ball $|x-p|<a$ [F1, F4]. By [F2] with $c=+ae_3$, $\nabla u(x)=+\dfrac{q}{4\pi\varepsilon_0}\dfrac{x+ae_3}{|x+ae_3|^3}$ there, so at $x=p=ae_3$ one has $\nabla u(p)=\dfrac{q}{4\pi\varepsilon_0}\dfrac{2ae_3}{(2a)^3}=\dfrac{q\,e_3}{16\pi\varepsilon_0a^2}$ and $E_{\rm ext}(p)=-\nabla u(p)=-\dfrac{q}{16\pi\varepsilon_0a^2}e_3$. This is (a). [F1, F2, F4]

2.1 Force. By [F3] applied at the instantaneous rest state of the held charge, the force is $F=qE_{\rm ext}(p)$; substituting [step 1.1] gives $F=-\dfrac{q^2}{16\pi\varepsilon_0a^2}e_3$. This is (b). [F3, step 1.1]

3.1 Signs, magnitude and scope. Since $q^2\ge0$ with equality exactly for $q=0$, the vector $F$ is a nonpositive multiple of $e_3$: for $q\ne0$ it points from $p$ toward the plane and has magnitude $q^2/(16\pi\varepsilon_0a^2)$, while $q=0$ gives $F=0$. The self-field $E_q$ is excluded from the coupling by [F3], so the computation is the external mirror force and not a self-force; the induced total plane charge $-q$ and the concentration of the induced distribution under the charge are the ideal-plane statements of [[pthm-em-image-method-certificate]](e), and the held trajectory is not claimed to solve any dynamics. This is (c). [F1, F3, given, step 2.1] ∎
