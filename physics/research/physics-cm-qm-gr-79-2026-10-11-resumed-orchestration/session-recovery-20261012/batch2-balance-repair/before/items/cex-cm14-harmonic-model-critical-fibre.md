---
id: cex-cm14-harmonic-model-critical-fibre
kind: counterexample
title: "The zero-energy level of the harmonic model: a compact connected common level set of a completely integrable datum that is a point, not a torus"
status: draft
origin: pipeline
domain: physics
dependency_level: 26
deps: [post-cm04-harmonic-model, def-cm14-complete-integrability, def-cm14-involution, pthm-cm14-regular-tori, def-cm12-hamiltonian, pthm-cm12-mechanical-hyperregularity, def-cm12-cotangent-momentum, def-cm13-hamiltonian-field, def-cm07-action-and-mechanical-lagrangian, def-cm03-potential-and-mechanical-energy, post-cm02-force-superposition, def-cm01-configuration, def-cm01-units, def-cm02-newtonian-flow, def-ck-euclidean-maps-and-diffeomorphisms, def-injection-surjection-bijection, def-linear-independence, def-differential-rank-and-constant-rank, def-metric-topology]
dependency_roles:
  post-cm04-harmonic-model: physical-assumption
  def-cm14-complete-integrability: formulation-prerequisite
  def-cm14-involution: formulation-prerequisite
  pthm-cm14-regular-tori: physical-result
  def-cm12-hamiltonian: formulation-prerequisite
  pthm-cm12-mechanical-hyperregularity: physical-result
  def-cm12-cotangent-momentum: formulation-prerequisite
  def-cm13-hamiltonian-field: formulation-prerequisite
  def-cm07-action-and-mechanical-lagrangian: formulation-prerequisite
  def-cm03-potential-and-mechanical-energy: formulation-prerequisite
  post-cm02-force-superposition: physical-assumption
  def-cm01-configuration: formulation-prerequisite
  def-cm01-units: formulation-prerequisite
  def-cm02-newtonian-flow: formulation-prerequisite
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-injection-surjection-bijection: mathematical-premise
  def-linear-independence: mathematical-premise
  def-differential-rank-and-constant-rank: mathematical-premise
  def-metric-topology: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "A counterexample inside the declared harmonic model of the framework's force branch: the one-label harmonic datum $(H)$ on the whole Cartesian phase plane is a completely integrable datum, and its zero common level set is compact, connected and nonempty but consists of the single rest point, so it is not diffeomorphic to a torus; equivalently, the level is a critical level at which the regular-fibre hypotheses of the torus theorem fail. The item asserts no measured value and no claim about any apparatus; it shows that regularity cannot be dropped from the hypotheses."
sources:
  references:
    - title: "Ana Cannas da Silva, Lectures on Symplectic Geometry (revised January 2006), Lecture 18, Definition 18.10 and Theorem 18.12, pp. 110-111: the torus theorem for compact connected regular fibres and the essential regular-value hypothesis"
      url: "https://web.archive.org/web/20120413034139if_/http://www.math.ist.utl.pt:80/%7Eacannas/Books/symplectic.pdf"
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, January 2015 printing), Section 4.5.1, printed pages 105-107 (PDF pages 111-113): the harmonic oscillator phase flow and the rest point at the centre of the elliptic foliation"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
    - title: "K. K. Likharev, Essential Graduate Physics, Part CM: Classical Mechanics (title page last edited September 1, 2026), Section 5.1, chapter pages 1-2 (PDF pages 87-88): the harmonic oscillator with its rest point at the minimum of the potential"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
verification:
  precheck: pass
---
## Statement refuted

In a completely integrable datum of a presentation of the framework's force
branch, **every nonempty compact connected common level set of the integral
map is diffeomorphic to a torus $T^{n}=\mathbb R^{n}/\mathbb Z^{n}$.**

## Facts & Assumptions

**Given:** The one-label harmonic model of [[post-cm04-harmonic-model]] with
$m>0$, $k>0$, force law $F(x)=-kx$ and potential $U(x)=kx^{2}/2$, its
presentation of [[pthm-cm12-mechanical-hyperregularity]] with the Cartesian
phase domain $W=Q\times\mathbb R=\mathbb R^{2}$ and branch Hamiltonian
$H(x,p)=p^{2}/(2m)+kx^{2}/2$
([[def-cm12-hamiltonian]], [[def-cm12-cotangent-momentum]]).

[L1] Datum and integral map ([[def-cm14-complete-integrability]],
[[def-cm14-involution]], [[def-cm13-hamiltonian-field]]): with
$\omega=\sqrt{k/m}>0$ so that $H(x,p)=\bigl(p^{2}+m^{2}\omega^{2}
x^{2}\bigr)/(2m)$, the single function $F_{1}:=H$ on $W_{0}:=W$ has empty
bracket conditions to check, is $C^{\infty}$, and has differential
$dH=(m\omega^{2}x)\,dx+(p/m)\,dp$, which vanishes exactly at $(0,0)$; hence
$F=(H)$ is a completely integrable datum of the presentation on $W_{0}$,
whose integral map is $H$ itself and whose only critical value is $0$.

[L2] Fibre and diffeomorphism vocabulary ([[def-metric-topology]],
[[def-ck-euclidean-maps-and-diffeomorphisms]],
[[def-injection-surjection-bijection]], [[def-linear-independence]]): a
diffeomorphism is in particular a bijection, so it preserves cardinality;
the one-dimensional torus $T^{1}=\mathbb R/\mathbb Z$ is an infinite set;
and the common level set of the datum at a value $b$ is
$H^{-1}(b)\subseteq W_{0}$.

[L3] The torus theorem's hypotheses ([[pthm-cm14-regular-tori]]): the
conclusion that a common level set is a torus is asserted there only for
a compact connected **regular** fibre of a regular value, among further
hypotheses; the item makes no claim about critical levels.

## Counterexample

1.1 By [L1] the datum $F=(H)$ is completely integrable on $W_{0}$ and $H^{-1}(0)=\{(0,0)\}$: indeed $H(x,p)=0$ forces $p=0$ and $x=0$ because $H$ is a sum of two squares divided by the positive number $2m$. The set $H^{-1}(0)$ is therefore nonempty, compact (a single point) and connected. [L1, given]

1.2 The point $(0,0)$ is a critical point of $H$ by [L1], so $0$ is a critical value and the fibre $H^{-1}(0)$ is a critical (not regular) fibre; the hypothesis of [L3] fails, and the torus conclusion is not available. This already shows that the regular-value hypothesis is needed, but the point of the counterexample is stronger. [L1, L3]

2.1 The fibre is not diffeomorphic to $T^{1}$: it has exactly one point, while $T^{1}$ is infinite, and a diffeomorphism is a bijection by [L2]; no bijection exists between a one-point set and an infinite set. Hence the refuted statement fails at the declared model datum. [L2, step 1.1, algebra]

2.2 The failure is confined to the critical level: for every $E>0$ the level $H^{-1}(E)$ is the ellipse $\{(x,p):p^{2}/(2m)+kx^{2}/2=E\}$, a one-dimensional compact connected manifold, the phase curve of a nonconstant harmonic motion; in the period-one chart of the companion example it is exactly the circle $I=\mathrm{const}$ of the action-angle coordinates, in agreement with the torus theorem at regular values. Thus the datum exhibits both a critical fibre that is a point and regular fibres that are circles, and the unqualified compactness/connectedness version of the torus claim is false exactly at the critical value. [L1, step 1.1, algebra]

3.1 Collecting: the common level set $H^{-1}(0)$ of the completely integrable datum $(H)$ is nonempty, compact and connected but not diffeomorphic to a torus, so the refuted statement is false; the regular values of the same datum do satisfy the torus conclusion, so no claim of [[pthm-cm14-regular-tori]] is affected. [step 1.1, step 1.2, step 2.1, step 2.2] ∎

## Remarks

- **What is refuted.** Only the version of the torus claim without the
  regularity hypothesis. The qualified theorem
  [[pthm-cm14-regular-tori]] is untouched: it assumes a regular value with
  a compact connected regular fibre, exactly the hypothesis that fails
  here.

- **No empirical content.** The model data $m,k$ are declared model
  parameters and the level computation is an identity about the model's
  Hamiltonian; the counterexample asserts no measured value and no claim
  about a real oscillator.
