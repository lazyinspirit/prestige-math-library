---
id: ex-cm05-barycentric-orbits-check
kind: example
title: "Barycentric orbits of two unequal masses on declared model data: $p_1=(m_2/M)p$, $p_2=(m_1/M)p$, semiaxes in the ratio $3:1$ and areal rates in the ratio $9:1$"
status: draft
origin: session
domain: physics
dependency_level: 18
deps: [post-cm05-central-model, post-cm05-gravity, pthm-cm05-relative-reduction, pthm-cm05-plane-area, pthm-cm05-conic, pthm-cm05-kepler-period, def-cm-central-force-trajectory, def-euclidean-inner-product, def-interval, def-countable-choice]
dependency_roles:
  post-cm05-central-model: formulation-prerequisite
  post-cm05-gravity: formulation-prerequisite
  pthm-cm05-relative-reduction: physical-result
  pthm-cm05-plane-area: physical-result
  pthm-cm05-conic: physical-result
  pthm-cm05-kepler-period: physical-result
  def-cm-central-force-trajectory: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-interval: mathematical-premise
  def-countable-choice: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "A numerical check of the barycentric reconstruction on declared model data with unequal masses: the two labels' conic parameters and semimajor axes, the common eccentricity and focus at the centre of mass, the ratio of the areal rates $(m_2/m_1)^2$ and the common period about the centre of mass. Every number is declared model data or an exact consequence of the cited items; no observation or measurement is used."
sources:
  references:
    - title: "Konstantin Likharev, Essential Graduate Physics: Classical Mechanics (title page last edited September 1, 2026), Section 3.4, Eqs. (3.33) and (3.63): the reconstruction $r_1=R+(m_2/M)r$, $r_2=R-(m_1/M)r$ and the ellipse semiaxes in the reduced problem"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
    - title: "David Tong, Classical Dynamics (University of Cambridge), Section 2.5.4, printed pp. 31-33 (PDF pp. 37-39): the centre-of-mass/separation split with reduced mass and the elliptic orbit of the separation"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
---

## Example

Declare the gravitational two-label model of [[post-cm05-gravity]] with
time window $I_0=\mathbb R$, unequal inertial masses and a declared value of the constant,
$$m_1=2\times10^{24}\ \mathrm{kg},\quad m_2=6\times10^{24}\ \mathrm{kg},\quad M=8\times10^{24}\ \mathrm{kg},\quad \mu=\frac{m_1m_2}{M}=\tfrac32\times10^{24}\ \mathrm{kg},$$
$$G_{\mathrm N}=10^{-24}\ \mathrm{m^{3}\,kg^{-1}\,s^{-2}},\qquad \kappa=G_{\mathrm N}m_1m_2=1.2\times10^{25}\ \mathrm{kg\,m^{3}\,s^{-2}},$$
with the couplings identified with the inertial masses, and suppose a motion
has relative conic data
$$J=6\times10^{27}\ \mathrm{kg\,m^{2}\,s^{-1}},\qquad p=\frac{J^{2}}{\mu\kappa}=2\times10^{6}\ \mathrm m,\qquad e=\tfrac12.$$
Assume the Axiom of Countable Choice ([[def-countable-choice]]), as in the
cited conic and period items. Then the cited items give:

1. the relative semiaxes $a=p/(1-e^{2})=\tfrac83\times10^{6}\ \mathrm m$ and
   $b=a\sqrt{1-e^{2}}=\tfrac{4\sqrt3}{3}\times10^{6}\ \mathrm m$, energy
   $E=-\kappa/(2a)=-\tfrac94\times10^{18}\ \mathrm J$, and period
   $T=2\pi\sqrt{\mu a^{3}/\kappa}=\tfrac{16\pi}{3\sqrt3}\times10^{9}\ \mathrm s$;
2. each label's orbit about the centre of mass is the scaled ellipse with
   parameters
   $$p_1=\frac{m_2}{M}p=\tfrac32\times10^{6}\ \mathrm m,\qquad p_2=\frac{m_1}{M}p=\tfrac12\times10^{6}\ \mathrm m,$$
   the same eccentricity $e=\tfrac12$, focus at the centre of mass and
   semimajor axes $a_1=\tfrac34a=2\times10^{6}\ \mathrm m$,
   $a_2=\tfrac14a=\tfrac23\times10^{6}\ \mathrm m$;
3. the areal-velocity magnitudes about the centre of mass are in the ratio
   $(m_2/m_1)^{2}=9$:
   $$\Bigl(\frac{m_2}{M}\Bigr)^{2}\frac{J}{2\mu}=1125\ \mathrm{m^{2}\,s^{-1}},\qquad \Bigl(\frac{m_1}{M}\Bigr)^{2}\frac{J}{2\mu}=125\ \mathrm{m^{2}\,s^{-1}};$$
4. both labels are periodic about the centre of mass with the common period
   $T$.

## Facts & Assumptions

**Given:** The declared data $m_1=2\times10^{24}$, $m_2=6\times10^{24}$, $M=8\times10^{24}$, $\mu=\frac32\times10^{24}$, $\kappa=1.2\times10^{25}$, $J=6\times10^{27}$, $p=2\times10^{6}$ and $e=\frac12$. Bare numbers in the arithmetic below are numerical values in the SI units declared in the Example; any explicitly unit-bearing equality is an equality of quantities.

[A1] The Axiom of Countable Choice is assumed ([[def-countable-choice]]).

[L1] Conic data and barycentric scaling ([[pthm-cm05-conic]] clauses 1 and 3, [[pthm-cm05-relative-reduction]] clause 4, [[post-cm05-central-model]] clauses (i)-(ii), [[post-cm05-gravity]] clauses (i)-(ii), [[def-cm-central-force-trajectory]]): with the identification $m_i^{g}=m_i$ and $\kappa=G_{\mathrm N}m_1m_2$, a motion with the stated conic data has $a=p/(1-e^{2})$, $b=a\sqrt{1-e^{2}}$, and $E=(\mu\kappa^{2}/2J^{2})(e^{2}-1)=-\kappa/(2a)$; each label's trajectory about the centre of mass is the scaled conic $x_i-X=\pm\frac{m_j}{M}r$ with parameter $p_i=\frac{m_j}{M}p$, semimajor axis $a_i=\frac{m_j}{M}a$ and the same eccentricity, the centre of mass being the focus.

[L2] Period, area law and curves ([[pthm-cm05-kepler-period]] clauses 1 and 3, [[pthm-cm05-plane-area]] clauses 2 and 4, [[def-euclidean-inner-product]]): $T=2\pi\mu ab/J=2\pi\sqrt{\mu/\kappa}\,a^{3/2}$; the relative areal-velocity vector is $j/(2\mu)$ with magnitude $J/(2\mu)$; and the label $i$'s areal-velocity vector about the centre of mass is $\bigl(\frac{m_j}{M}\bigr)^{2}\omega$, of magnitude $\bigl(\frac{m_j}{M}\bigr)^{2}J/(2\mu)$, with both labels $T$-periodic about the centre of mass.

[L3] Arithmetic: $\kappa/(2a)=\bigl(1.2\times10^{25}\bigr)\big/\bigl(\tfrac{16}{3}\times10^{6}\bigr)=\tfrac94\times10^{18}$; $\mu/\kappa=\tfrac{3/2}{1.2}\times10^{-1}\ \mathrm{s^{2}\,m^{-3}}=\tfrac18\ \mathrm{s^{2}\,m^{-3}}$; $\mu a^{3}/\kappa=\tfrac{3/2}{1.2}\times10^{-1}\cdot\tfrac{512}{27}\times10^{18}\ \mathrm{s^{2}}=\tfrac{64}{27}\times10^{18}\ \mathrm{s^{2}}$; $2\pi\sqrt{64/27}\times10^{9}=\tfrac{16\pi}{3\sqrt3}\times10^{9}$; $(m_2/M)^{2}=9/16$, $(m_1/M)^{2}=1/16$ and $J/(2\mu)=2000\ \mathrm{m^{2}\,s^{-1}}$ ([[def-interval]]).

## Verification

**Proof technique:** direct.

1.1 Relative conic data: $1-e^{2}=\tfrac34$, so $a=p/(1-e^{2})=2\times10^{6}\cdot\tfrac43=\tfrac83\times10^{6}$ m and $b=\tfrac83\times10^{6}\cdot\tfrac{\sqrt3}{2}=\tfrac{4\sqrt3}{3}\times10^{6}$ m; the energy identity of [L1] gives $E=-\kappa/(2a)=-\bigl(\tfrac65\times10^{25}\bigr)\big/\bigl(\tfrac{16}{3}\times10^{6}\bigr)=-\tfrac94\times10^{18}$ J; and the period is $T=2\pi\sqrt{\mu a^{3}/\kappa}=2\pi\sqrt{\tfrac{64}{27}\times10^{18}}=\tfrac{16\pi}{3\sqrt3}\times10^{9}$ s. [given, A1, L1, L3, algebra]

2.1 Barycentric scaling: $m_2/M=\tfrac34$ and $m_1/M=\tfrac14$, so [L1] gives $p_1=\tfrac34\cdot2\times10^{6}=\tfrac32\times10^{6}$ m, $p_2=\tfrac14\cdot2\times10^{6}=\tfrac12\times10^{6}$ m, $a_1=\tfrac34\cdot\tfrac83\times10^{6}=2\times10^{6}$ m and $a_2=\tfrac14\cdot\tfrac83\times10^{6}=\tfrac23\times10^{6}$ m, with eccentricity $e=\tfrac12$ and the focus at the centre of mass for both. [step 1.1, L1, L3, algebra]

3.1 Areal rates: by [L2] the label-1 areal-velocity magnitude is $\bigl(\tfrac34\bigr)^{2}J/(2\mu)=\tfrac{9}{16}\cdot2000=1125\ \mathrm{m^{2}\,s^{-1}}$ and that of label 2 is $\bigl(\tfrac14\bigr)^{2}\cdot2000=125\ \mathrm{m^{2}\,s^{-1}}$; their ratio is $9=(m_2/m_1)^{2}$. [step 2.1, L2, L3, algebra]

4.1 Periods: by [L2] both labels are $T$-periodic about the centre of mass with the common period $T=\tfrac{16\pi}{3\sqrt3}\times10^{9}$ s from step 1.1; equivalently $T^{2}=4\pi^{2}\mu a^{3}/\kappa=\tfrac{256\pi^{2}}{27}\times10^{18}\ \mathrm{s^{2}}$ with the arithmetic of [L3]. [step 1.1, step 2.1, L2, L3, algebra] ∎

## Remarks

- **The focus is the centre of mass, not the heavier body.** Both barycentric conics have the centre of mass at a focus; the lighter label 1 has the larger orbit, in the ratio $m_2:m_1=3:1$ of the parameters and semiaxes.

- **Declared data only.** The masses, $J$, $p$, $e$ and the declared $G_{\mathrm N}$ are model data chosen for exact arithmetic; no measured constant or observation is used, and no real system is modelled.
