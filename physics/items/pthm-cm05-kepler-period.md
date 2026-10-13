---
id: pthm-cm05-kepler-period
kind: physics-theorem
title: "Kepler's third law for the gravitational two-label model: the relative period is $T=2\\pi\\mu ab/J=2\\pi\\sqrt{\\mu/\\kappa}\\,a^{3/2}$, so $T^2=4\\pi^2a^3/(G_{\\mathrm N}M)$ under the mass identification, and both labels are periodic relative to the centre of mass"
status: published
origin: session
domain: physics
dependency_level: 17
deps: [post-cm05-central-model, post-cm05-gravity, pthm-cm05-relative-reduction, pthm-cm05-plane-area, pthm-cm05-conic, def-cm-central-force-trajectory, thm-cm-kepler-orbit-period, thm-cm-kepler-ellipse-geometry, thm-substitution, def-countable-choice, def-interval]
dependency_roles:
  post-cm05-central-model: formulation-prerequisite
  post-cm05-gravity: physical-assumption
  pthm-cm05-relative-reduction: physical-result
  pthm-cm05-plane-area: physical-result
  pthm-cm05-conic: physical-result
  def-cm-central-force-trajectory: mathematical-premise
  thm-cm-kepler-orbit-period: mathematical-premise
  thm-cm-kepler-ellipse-geometry: mathematical-premise
  thm-substitution: mathematical-premise
  def-countable-choice: mathematical-premise
  def-interval: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "The period of the negative-energy gravitational relative orbit in the adopted two-label model: the relative motion is periodic, its period is $2\\pi\\mu ab/J=2\\pi\\sqrt{\\mu/\\kappa}\\,a^{3/2}$, the form $T^2=4\\pi^2a^3/(G_{\\mathrm N}M)$ holds when the gravitational couplings are identified with the inertial masses, each label is periodic about the centre of mass while its absolute motion advances by $VT$ per period, and the area swept per period is $\\pi ab$. The result is a conditional deduction from the adopted model and its declared empirical identification; it reports no observation and no measured value."
sources:
  references:
    - title: "Konstantin Likharev, Essential Graduate Physics: Classical Mechanics (title page last edited September 1, 2026), Section 3.4, Eqs. (3.64a)-(3.64b), chapter page 15 (PDF page 48): $T=\\pi ab/(L_z/2m)$ and $T=2\\pi a^{3/2}\\sqrt{m/\\alpha}$, with the third Kepler law $T\\propto a^{3/2}$ for the gravitational case"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
    - title: "David Tong, Classical Dynamics (University of Cambridge), Section 2.5.4, printed pp. 32-33 (PDF pp. 38-39): the elliptic branch of the inverse-square problem, its period and the scaling with the semimajor axis"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
    - title: "Iain Stewart, Advanced Classical Mechanics (MIT 8.09/8.309 Fall 2014 course text), Section 4.5, printed p. 81 (PDF p. 84) and Section 4.6: the closed Kepler orbit at negative energy and the period of its radial and angular motion"
      url: "https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf"
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Adopt the
two-label gravitational model of [[post-cm05-gravity]] clause (i): inertial
masses $m_1,m_2>0$, $M=m_1+m_2$, reduced mass $\mu=m_1m_2/M$, gravitational
couplings $m_1^{g},m_2^{g}>0$, $\kappa=G_{\mathrm N}m_1^{g}m_2^{g}$, and the
potential $u(\rho)=-\kappa/\rho$ on $(0,\infty)$. Let $x:I\to Q$ be a motion
on a time interval $I$ with relative coordinate $r$, angular momentum
$j=Je_3$, $J>0$, and energy
$E<0$, and let $e\in[0,1)$, $\theta_0\in\mathbb R$,
$$p=\frac{J^{2}}{\mu\kappa},\qquad a=\frac{p}{1-e^{2}}=-\frac{\kappa}{2E},\qquad b=a\sqrt{1-e^{2}}$$
be its conic data ([[pthm-cm05-conic]] clauses 1 and 3). Then:

1. **(Period of the relative motion.)** The relative motion extends uniquely
   to a central-force trajectory on all of $\mathbb R$ (as in
   [[pthm-cm05-conic]] clause 3); along that extension (with $\theta$ its
   polar angular coordinate, as supplied by the cited orbit theory), if
   $t_0\in\mathbb R$ and $T>0$ is determined by
   $\theta(t_0+T)=\theta(t_0)+2\pi$, then $r(t+T)=r(t)$ and
   $r'(t+T)=r'(t)$ for all $t\in\mathbb R$, and
   $$T=\frac{2\pi\mu ab}{J}=2\pi\sqrt{\frac{\mu}{\kappa}}\,a^{3/2}, \qquad T^{2}=\frac{4\pi^{2}\mu a^{3}}{\kappa}.$$
2. **(Gravitational parameters.)** With $\mu=m_1m_2/M$ and
   $\kappa=G_{\mathrm N}m_1^{g}m_2^{g}$,
   $$T^{2}=\frac{4\pi^{2}a^{3}m_1m_2}{M\,G_{\mathrm N}\,m_1^{g}m_2^{g}};$$
   if in addition the model adopts the identification
   $m_i^{g}=m_i$ of [[post-cm05-gravity]] clause (ii), this reduces to
   $$T^{2}=\frac{4\pi^{2}a^{3}}{G_{\mathrm N}M}.$$
3. **(Both labels.)** On the global coordinate extension supplied by
   [[pthm-cm05-conic]] clause 3(a) (write it again as $x$, with centre
   of mass $X$), for each $i=1,2$ the position relative to
   the centre of mass is periodic with period $T$,
   $x_i(t+T)-X(t+T)=x_i(t)-X(t)$, while the absolute motions satisfy
   $$x_i(t+T)-x_i(t)=V\,T\qquad(t\in\mathbb R),$$
   with the constant centre-of-mass velocity $V=X'$ of
   [[pthm-cm05-relative-reduction]] clause 2; the absolute motions are
   periodic exactly when $V=0$. The restriction of this extension to the
   model time window $I_0$ is a model motion; statements about
   $x_i(t+T)$ within that model require $t,t+T\in I_0$.
4. **(Area per period.)** The area swept by the relative radius vector in one
   period is $\pi ab$, and it equals $JT/(2\mu)$; equivalently
   $T=2\pi\mu ab/J$ as in clause 1.

## Facts & Assumptions

**Given:** The gravitational two-label model with the constants $\mu,\kappa,J>0$, the motion with $E<0$ and its conic data $e,\theta_0,p,a,b$.

[A1] The Axiom of Countable Choice is assumed ([[def-countable-choice]]).

[L1] Reduction ([[pthm-cm05-relative-reduction]] clauses 2-4, [[def-cm-central-force-trajectory]], [[post-cm05-central-model]] clauses (i)-(ii)): the relative coordinate $r$ is a central-force trajectory for $(\mu,u)$ with constant $j=Je_3$ and constant energy $E<0$; the centre of mass is affine with constant $V=X'=M^{-1}P$; and $x_i-X=\pm\frac{m_j}{M}r$ for the two labels.

[L2] Orbit theory ([[pthm-cm05-conic]] clauses 1 and 3, [[thm-cm-kepler-orbit-period]], [[thm-cm-kepler-ellipse-geometry]]): for the negative-energy inverse-square trajectory of [L1], the conic data $e\in[0,1)$, $p$, $a=p/(1-e^{2})=-\kappa/(2E)$, $b=a\sqrt{1-e^{2}}$ apply; the relative trajectory and the reconstructed coordinate curves extend uniquely to all of $\mathbb R$, with the coordinate curves restricted to $I_0$ defining the extended model motion, by clause 3(a) of the cited physical theorem, and the relative trajectory is periodic with $T$ determined by $\theta(t_0+T)=\theta(t_0)+2\pi$ and satisfying $T=2\pi\mu ab/J=2\pi\sqrt{\mu/\kappa}\,a^{3/2}$, $T^{2}=4\pi^{2}\mu a^{3}/\kappa$; and the ellipse of the conic has area $\pi ab=\frac12\int_0^{2\pi}\varrho(\varphi)^2\,\mathrm d\varphi$, where $\varrho(\varphi)=p/(1+e\cos(\varphi-\theta_0))$.

[L3] Area law ([[pthm-cm05-plane-area]] clauses 2-3): the swept-area function of the reduced orbit has constant derivative $J/(2\mu)$, so the area swept over an interval of length $T$ is $JT/(2\mu)$.

[L4] Parameters ([[post-cm05-gravity]] clauses (i)-(ii)): $\kappa=G_{\mathrm N}m_1^{g}m_2^{g}$ and $\mu=m_1m_2/M$; the identification $m_i^{g}=m_i$ is an adopted empirical assumption of the model's quantitative applications; $M=m_1+m_2>0$ and $G_{\mathrm N}>0$.

## Proof

**Proof technique:** direct.

1.1 Clause 1: by [L1] the relative trajectory meets the hypotheses of [L2] with $E<0$, and [L2] supplies the unique extension to $\mathbb R$, the periodicity with $T$ determined by one full revolution of $\theta$, and the two displayed period formulas; substituting $a=p/(1-e^{2})$ and $p=J^{2}/(\mu\kappa)$ into $T=2\pi\mu ab/J$ and $T=2\pi\sqrt{\mu/\kappa}\,a^{3/2}$ is exactly [L2]. [given, A1, L1, L2, algebra]

2.1 Clause 2: substituting $\mu=m_1m_2/M$ and $\kappa=G_{\mathrm N}m_1^{g}m_2^{g}$ from [L4] into $T^{2}=4\pi^{2}\mu a^{3}/\kappa$ gives $T^{2}=4\pi^{2}a^{3}m_1m_2/\bigl(MG_{\mathrm N}m_1^{g}m_2^{g}\bigr)$; if additionally $m_i^{g}=m_i$, the numerator and denominator simplify by $m_1m_2$ to $T^{2}=4\pi^{2}a^{3}/(G_{\mathrm N}M)$. [step 1.1, L4, algebra]

2.2 Clause 3: use the global coordinate extension of [L2], which restricts to a model motion on $I_0$. By [L1], $x_i-X=\pm\frac{m_j}{M}r$, and $r$, hence $x_i-X$, is $T$-periodic by step 1.1; also $X(t+T)-X(t)=VT$ because $X$ is affine with constant derivative $V$, so $x_i(t+T)-x_i(t)=VT+\bigl(x_i(t+T)-X(t+T)\bigr)-\bigl(x_i(t)-X(t)\bigr)=VT$. If $V=0$, this proves that both absolute motions are $T$-periodic. Conversely, suppose either absolute motion $x_i$ has any positive period $S$. For every positive integer $n$, periodicity and the affine motion of $X$ give $0=x_i(t+nS)-x_i(t)=nVS\pm\frac{m_j}{M}\bigl(r(t+nS)-r(t)\bigr)$ for all $t\in\mathbb R$. By the conic bound in [L2], $\lVert r(t)\rVert_2\le p/(1-e)$ for all $t$, so $nS\lVert V\rVert_2\le2(m_j/M)p/(1-e)$ for every $n$. Since the right side is fixed and $S>0$, this forces $V=0$. Thus either label has an absolute period only if $V=0$, and when $V=0$ both are periodic. [step 1.1, L1, L2, algebra]

3.1 Clause 4: by [L2] the relative motion extends to $\mathbb R$; applying the relative areal-rate identity of [L3] to the global central-force trajectory, its swept-area function has derivative $J/(2\mu)$, so the area swept over one period is $JT/(2\mu)$. Since $\theta:[t_0,t_0+T]\to[\theta(t_0),\theta(t_0)+2\pi]$ is a strictly increasing $C^1$ bijection with $\theta'=\rho^{-2}\mu^{-1}J$ on the extension, the substitution rule gives $$A(t_0+T)-A(t_0)=\frac12\int_{t_0}^{t_0+T}\rho^{2}\theta'=\frac12\int_{\theta(t_0)}^{\theta(t_0)+2\pi}\varrho(\varphi)^{2}\,\mathrm d\varphi=\frac12\int_{0}^{2\pi}\varrho(\varphi)^{2}\,\mathrm d\varphi=\pi ab$$ by the $2\pi$-periodicity of $\varrho$ and [L2]; combining with $A(t_0+T)-A(t_0)=JT/(2\mu)$ gives $T=2\pi\mu ab/J$. [step 1.1, L2, L3, algebra] ∎

## Remarks

- **Which hypotheses carry the numerical form.** Clauses 1, 3 and 4 use only the central model and the gravitational parameters symbolically; the simplification of clause 2 to $4\pi^{2}a^{3}/(G_{\mathrm N}M)$ uses the empirical identification of [[post-cm05-gravity]] clause (ii), which is not a theorem of the framework.

- **No measured value.** $a$, $T$, the masses and $G_{\mathrm N}$ are model data or symbols; no observation, calibration or uncertainty is used here, and no numerical prediction is made.

- **Equal periods for both labels.** Clause 3 states that both labels share the relative period about the centre of mass while the centre of mass may drift; the absolute motions are periodic only in the zero-total-momentum case.
