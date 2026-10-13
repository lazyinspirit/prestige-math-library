---
id: ex-nrqm-approximations-two-level-finite-gap-correction
aliases: [ nrqm-approximations-two-level-finite-gap-correction ]
kind: example
domain: physics
title: "A two-level finite-gap model: exact eigenvalues, the second-order
  correction and a finite check of the cubic remainder bound"
status: draft
origin: session
dependency_level: 11
deps:
  [
    def-nrqm-approximations-framework-perturbed-family-model,
    pthm-nrqm-approximations-nondegenerate-perturbation-expansion,
    def-nrqm-framework-quantities-and-units,
    post-nrqm-framework-state-and-composition,
    post-nrqm-framework-observable-and-probability,
    post-nrqm-framework-autonomous-dynamics,
    def-nrqm-observables-framework-observable-and-outcome-law,
    def-countable-choice,
    def-axiom-of-choice
  ]
dependency_roles:
  def-nrqm-approximations-framework-perturbed-family-model: formulation-prerequisite
  pthm-nrqm-approximations-nondegenerate-perturbation-expansion: physical-result
  def-nrqm-framework-quantities-and-units: formulation-prerequisite
  post-nrqm-framework-state-and-composition: physical-assumption
  post-nrqm-framework-observable-and-probability: physical-assumption
  post-nrqm-framework-autonomous-dynamics: physical-assumption
  def-nrqm-observables-framework-observable-and-outcome-law: formulation-prerequisite
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "A conditional two-level computation inside the declared
  perturbed-family model with a finite gap: the exact eigenvalues of the family,
  its second-order coefficient, the exact quartic expansion, and a finite
  numerical check of the page's cubic remainder bound at half the perturbation
  radius. The example is a model computation in the declared finite-dimensional
  subspace; it asserts no physical system identification, no measured splitting
  and no transition."
sources:
  references:
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section 9.1
        printed pages 203-205 (PDF pages 211-213): the perturbative expansion,
        the first-order coefficient (9.6) and the second-order coefficient
        (9.11) for a non-degenerate level"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
    - title: "B. Zwiebach, MIT 8.05 Quantum Physics II (Fall 2013), Chapter 7 'Two
        State Systems', Section 5 'Ammonia molecule in an electric field'
        printed and PDF pages 11-16: the exactly solvable two-state Stark family
        with eigenvalues E0 +/- sqrt(mu^2 E^2 + Delta^2), the closed analogue of
        the check performed here"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/7c376a3b5b2\
        7e5ea586a7e37b85a05d3_MIT8_05F13_Chap_07.pdf"
verification:
  precheck: pass
---

## Example

Adopt P1, P2 and P4 for a declared **two-level system**
([[post-nrqm-framework-state-and-composition]],
[[post-nrqm-framework-observable-and-probability]],
[[post-nrqm-framework-autonomous-dynamics]]) with state space
$\mathfrak H=\mathbb C^{2}$ in the standard orthonormal basis $(e_{1},e_{2})$
and with the observable reading of
[[def-nrqm-observables-framework-observable-and-outcome-law]]; read all
energies in joules as in [[def-nrqm-framework-quantities-and-units]]. Fix
real **gap** and **coupling** parameters $g>0$ and $c>0$, and declare the
model's energy observable family by the perturbed-family model of
[[def-nrqm-approximations-framework-perturbed-family-model]] with
$$H_{0}:=\begin{pmatrix}0&0\\0&g\end{pmatrix},\qquad V:=\begin{pmatrix}0&c\\c&0\end{pmatrix},\qquad H(\lambda)=H_{0}+\lambda V\quad(\lambda\in\mathbb R).$$
Then $H_{0}$ has the isolated simple eigenvalue $E=0$ with gap $g$,
$v=\|V\|=c$, $\psi_{0}=e_{1}$, and the reduced inverse of the model clause
(c)(iii) is $S=\operatorname{diag}(0,1/g)$ on $Q_{0}\mathfrak H=\mathbb
Ce_{2}$. Then:

(a) for every real $\lambda$ the matrix $H(\lambda)$ is Hermitian with exactly
two eigenvalues
$$E_{\pm}(\lambda)=\frac{g\pm\sqrt{g^{2}+4\lambda^{2}c^{2}}}{2},$$
both simple for $\lambda\ne0$ and spanning the spectrum for every $\lambda$;
in the model's valid contour range $2|\lambda|c/g<1$, its distinguished
label is $E_{\lambda}=E_{-}(\lambda)$. The formula $E_-$ remains an exact
continuous lower spectral branch for all real couplings, even beyond that
fixed-contour range;

(b) the exact perturbation coefficients are
$$E'(0)=0,\qquad E''(0)=-\frac{2c^{2}}{g},\qquad \psi'(0)=-SV\psi_{0}=-\frac{c}{g}e_{2},\qquad \psi_{0}=e_{1},$$
and the exact eigenvalue has the convergent expansion
$$E_{-}(\lambda)=-\frac{\lambda^{2}c^{2}}{g} +\frac{\lambda^{4}c^{4}}{g^{3}}-\frac{2\lambda^{6}c^{6}}{g^{5}}+O(\lambda^{8});$$

(c) the cubic remainder bound of
[[pthm-nrqm-approximations-nondegenerate-perturbation-expansion]] clause (e)
holds in this model for every $|\lambda|<R=g/(8c)$, and at the test point
$\lambda=R/2=g/(16c)$ the exact remainder and its bound are
$$E_{-}\!\left(\frac{g}{16c}\right)+\frac{g}{256} =\frac{g}{2}\Bigl(1-\frac{\sqrt{65}}{8}\Bigr)+\frac{g}{256}\approx1.51\cdot10^{-5}g \le\frac{g}{32},$$
so the finite check is satisfied with a wide margin;

(d) the exact spectrum computed in (a) is a spectral statement about the
declared two-level family; it identifies no physical system, asserts no
measured splitting, and asserts nothing about which of the two spectral
subspaces a preparation occupies (that is fixed by the preparation and the
evolution of P4, not by the perturbative expansion).

## Verification

**Given:** the declared two-level model with parameters $g,c>0$, matrices
$H_{0},V$, the family $H(\lambda)$, and the label data $E=0$, $g$, $v=c$,
$\psi_{0}=e_{1}$, $S=\operatorname{diag}(0,1/g)$; the Axiom of Countable
Choice and the Axiom of Choice as the choice hypotheses of the model's spectral suppliers
([[def-nrqm-approximations-framework-perturbed-family-model]]).

[L1] **The model's theorem.** Under the model's hypotheses with a simple
label, for every real $|\lambda|<R=g/(8v)$ the followed label $E_{\lambda}$
is the unique spectral value of $H(\lambda)$ in $|z-E|<g/2$, the coefficients
and remainder bound of clause (e) of the statement of
[[pthm-nrqm-approximations-nondegenerate-perturbation-expansion]] hold, and
$E'(0)=\langle V\psi_{0},\psi_{0}\rangle$,
$\psi'(0)=-SV\psi_{0}$,
$E''(0)=-2\langle VSV\psi_{0},\psi_{0}\rangle$
([[pthm-nrqm-approximations-nondegenerate-perturbation-expansion]] clauses
(a)-(e), [[def-nrqm-approximations-framework-perturbed-family-model]]).

[L2] **Elementary algebra used.** For real $u$, $\sqrt{u^{2}}=|u|$; the
binomial series $\sqrt{1+t}=1+\tfrac12t-\tfrac18t^{2}+\tfrac1{16}t^{3}
+O(t^{4})$ as an identity for the analytic square root near $t=0$; and for
vectors $w_{\pm}=(\lambda c,E_{\pm})$ the inner product in the standard
basis is $w_{+}\cdot\overline{w_{-}}=\lambda^{2}c^{2}+E_{+}E_{-}$, together
with $E_{+}+E_{-}=g$ and $E_{+}E_{-}=(g^{2}-(g^{2}+4\lambda^{2}c^{2}))/4
=-\lambda^{2}c^{2}$, all direct consequences of the displayed formulas.

[L3] **Spectral reading.** If a linear map on $\mathbb C^{2}$ has two
orthonormal eigenvectors $u_{1},u_{2}$ with eigenvalues $\mu_{1},\mu_{2}$,
then every $v=\alpha u_{1}+\beta u_{2}$ satisfies $Hv=\alpha\mu_{1}u_{1}
+\beta\mu_{2}u_{2}$, so $Hv=\mu v$ with $v\ne0$ forces $\mu=\mu_{1}$ or
$\mu=\mu_{2}$: the spectrum is exactly $\{\mu_{1},\mu_{2}\}$. This is
finite-dimensional linear algebra on the declared two-dimensional space
([[post-nrqm-framework-state-and-composition]]).

**Proof technique:** direct; exhibit an orthonormal eigenbasis of the
two-by-two family, read off the spectrum, expand the displayed square root
and evaluate the page's remainder bound at the test point.

**Given:** the data of the Example and [L1]-[L3].

1.1 [Hermiticity and the eigenbasis] Both $H_{0}$ and $V$ are real symmetric, hence $H(\lambda)$ is Hermitian for real $\lambda$. Put $$s:=\sqrt{g^{2}+4\lambda^{2}c^{2}}>0,\qquad E_{\pm}:=\frac{g\pm s}{2},$$ and, for $\lambda\ne0$, $w_{\pm}:=(\lambda c,E_{\pm})\ne0$. From $E_{\pm}^{2}-gE_{\pm}-\lambda^{2}c^{2}=0$, which follows from $E_{+}+E_{-}=g$ and $E_{+}E_{-}=-\lambda^{2}c^{2}$ by [L2], the first component equation $\lambda c\,E_{\pm}=E_{\pm}\,\lambda c$ holds identically and the second reads $\lambda c\cdot\lambda c+gE_{\pm} =\lambda^{2}c^{2}+gE_{\pm}=E_{\pm}^{2}$, so $H(\lambda)w_{\pm}=E_{\pm}w_{\pm}$; moreover $w_{+}\cdot\overline{w_{-}}=\lambda^{2}c^{2}+E_{+}E_{-}=0$ by [L2], so the normalizations $u_{\pm}:=w_{\pm}/\|w_{\pm}\|$ form an orthonormal pair. For $\lambda=0$ the vectors $u_{1}=e_{1},u_{2}=e_{2}$ are an orthonormal eigenbasis with eigenvalues $0=E_{-}(0)$ and $g=E_{+}(0)$. By [L3] the spectrum of $H(\lambda)$ is exactly $\{E_{-}(\lambda),E_{+}(\lambda)\}$ for every real $\lambda$, and the eigenvalues are simple for $\lambda\ne0$ because then $s>g$ and $E_{+}\ne E_{-}$. For $2|\lambda|c/g<1$, $s<\sqrt2g<2g$, so $|E_-|=(s-g)/2<g/2$ while $E_+\ge g>g/2$; thus the unique enclosed label is $E_-$, proving the contour identification in (a). [L2, L3, given, algebra]

1.2 [Coefficients] With $P_{0}$ the projection onto $\mathbb Ce_{1}$ and $Q_{0}$ the projection onto $\mathbb Ce_{2}$, one has $V\psi_{0}=ce_{2}$, $\langle V\psi_{0},\psi_{0}\rangle=0$, $SV\psi_{0}=(c/g)e_{2}$ and $VSV\psi_{0}=(c^{2}/g)e_{1}$; hence $E'(0)=0$, $\psi'(0)=-SV\psi_{0}=-(c/g)e_{2}$ and $E''(0)=-2\langle VSV\psi_{0},\psi_{0}\rangle=-2c^{2}/g$, as displayed. Expanding $E_{-}(\lambda)=\frac g2\bigl(1-\sqrt{1+4\lambda^{2}c^{2}/g^{2}} \bigr)$ by [L2] gives the displayed expansion. This is clause (b). [L1, L2, given, algebra]

2.1 [Finite remainder check] By [L1], the cubic estimate holds on $|\lambda|<R=g/(8c)$; at $\lambda=R/2=g/(16c)$ its bound is $Rc/4=g/32$. The exact lower energy is $E_-=(g/2)(1-\sqrt{65}/8)$ and the quadratic truncation is $-g/256$. Thus the exact remainder is $g(129-16\sqrt{65})/256=g/[256(129+16\sqrt{65})]>0$, since $129^2-(16\sqrt{65})^2=1$. It is less than $g/32768<g/32$, because $129+16\sqrt{65}>128$, proving (c) without an unsupported decimal or square-root bound. [L1, L2, step 1.2, algebra]

3.1 [Scope] The computation used only the declared two-dimensional model, its exact diagonalization and the page's theorem; the two spectral values are spectral data of $H(\lambda)$. Which spectral subspace a preparation occupies is fixed by the preparation and the evolution of P4 and is not determined by the label $E_{\lambda}$; no physical system, measured splitting or transition is asserted, which is clause (d). [step 1.1, step 2.1, L1, given] ∎

## Remarks

- **Why this is a "finite-gap" check.** The complementary subspace is
  one-dimensional with distance $g$, so the reduced inverse is the explicit
  number $1/g$ and every coefficient of the page's theorem can be compared
  against a closed-form eigenvalue. The second-order coefficient is strictly
  negative for the followed lower level, the signature of a level repulsion from the
  complementary state.
- **The cubic bound is not sharp.** The exact difference from the
  second-order truncation is $O(\lambda^{4})$, and the page's bound at the
  test point is more than three orders of magnitude larger; the check
  verifies the inequality, not optimality.
