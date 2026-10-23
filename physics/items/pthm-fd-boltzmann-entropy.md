---
id: pthm-fd-boltzmann-entropy
kind: physics-theorem
title: Entropy production in the adopted collision model
status: published
origin: pipeline
domain: physics
library: physics
dependency_level: 5
physical_scope: >-
  Conditional local and periodic-global kinetic-entropy balance for positive
  regular solutions of the adopted d=3 elastic Boltzmann model, under the
  stated moment, logarithmic-test, flux, and differentiation integrability
  hypotheses. This is not a theorem about fine-grained Hamiltonian Gibbs
  entropy or empirical validity of the model.
deps:
  - def-countable-choice
  - def-fd-physical-kinetic-observables
  - thm-fd-kinetic-h
  - pthm-fd-local-boltzmann-h-balance
  - post-fd-boltzmann-model
dependency_roles:
  def-countable-choice: mathematical-premise
  def-fd-physical-kinetic-observables: formulation-prerequisite
  thm-fd-kinetic-h: mathematical-premise
  pthm-fd-local-boltzmann-h-balance: physical-result
  post-fd-boltzmann-model: physical-assumption
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Mehran Kardar, MIT OpenCourseWare 8.333, Statistical Mechanics I, Lecture 9"
      url: "https://ocw.mit.edu/courses/8-333-statistical-mechanics-i-statistical-mechanics-of-particles-fall-2013/ce250b44390106351cb97aafb0060ca7_MIT8_333F13_Lec9.pdf"
      locator: "Section III.E, printed pp. 56–57; complete H-theorem symmetrization and sign argument."
    - title: "David Tong, Lectures on Kinetic Theory, Chapter 2"
      url: "https://www.damtp.cam.ac.uk/user/tong/kintheory/two.pdf"
      locator: "Section 2.3, printed pp. 32–35; Boltzmann H-theorem derivation and its molecular-chaos premise."
verification:
  precheck: pending
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-23
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/fluid-dynamics-all-47-2026-10-23-publication.json.
    delegated_by: owner
---

## Statement

Assume Countable Choice $\mathrm{AC}_\omega$: every $\mathbb N$-indexed family of nonempty sets has a choice function. Let $\Omega=\prod_{j=1}^3(\mathbb R/L_j\mathbb Z)$ be a periodic cell with $L_j>0$ in metres, and let $I$ be an open time interval in seconds. Let $f:I\times\Omega\times\mathbb R^3\to(0,\infty)$ be periodic, continuously differentiable in $t,x$, and twice continuously differentiable in $v$, with $v$ in metres per second and $f$ in $\mathrm{s^3\,m^{-6}}$. Fix $k_B>0$ in joules per kelvin, $v_*=1\,\mathrm{m\,s^{-1}}$, $\omega_3(v)=\sum_{j=0}^3(|v|/v_*)^j$, and a constant $f_{\rm ref}>0$ with the same units as $f$; put $\ell=\log(f/f_{\rm ref})$. On each compact time interval, assume integrable velocity majorants uniform in $x,t$ for each of $f\omega_3$, $f|\ell|$, $|v|f|\ell|$, $(1+|\ell|)|\partial_t f|$, and $(1+|\ell|)|v|\,|\nabla_x f|$. Define the elastic collision set

$$Q_{\rm el}=\{(v,w,v',w')\in(\mathbb R^3)^4:v+w=v'+w',\ |v|^2+|w|^2=|v'|^2+|w'|^2\}$$

with its relative Borel sigma-algebra, and let $\nu$ be the nonnegative symmetric collision-rate measure on $Q_{\rm el}$. At every $(x,t)$ assume $f(x,\cdot,t)$ belongs to the collision domain and the weak identity

$$\int_{\mathbb R^3}\psi(v)Q_\nu(f)(x,v,t)\,d^3v=\frac14\int_{Q_{\rm el}}(B-A)\bigl(\psi(v)+\psi(w)-\psi(v')-\psi(w')\bigr)\,d\nu$$

holds absolutely for $\psi=1$ and $\psi=\ell(x,\cdot,t)$, where $A=f(x,v,t)f(x,w,t)$ and $B=f(x,v',t)f(x,w',t)$. For each $t\in I$, assume that the map
$$x\longmapsto\int_{Q_{\rm el}}|(A-B)\log(A/B)|\,d\nu$$
is measurable and belongs to $L^1(\Omega,dx)$. Assume that $f$ solves $\partial_t f+v\cdot\nabla_x f=Q_\nu(f)$ for Lebesgue-almost every velocity at every fixed $(x,t)$. This sectionwise equality is an additional solution hypothesis beyond the adopted product-almost-everywhere equation.

$$A(x,v,w,t)=f(x,v,t)f(x,w,t),\qquad B(x,v',w',t)=f(x,v',t)f(x,w',t).$$

Define

$$D(x,t)=\frac14\int_{Q_{\rm el}}(A-B)\log(A/B)\,d\nu.$$
Under the adopted collision-rate normalization, $D$ has units
$\mathrm{m^{-3}\,s^{-1}}$.

Then $D(x,t)\ge0$, and the physical kinetic entropy density and flux $s_{\rm kin}=-k_B\int f\log(f/f_{\rm ref})\,d^3v$ and $j_{\rm kin}=-k_B\int v f\log(f/f_{\rm ref})\,d^3v$ satisfy

$$\partial_t s_{\rm kin}+\nabla_x\cdot j_{\rm kin}=k_BD\ge0.$$

Here $s_{\rm kin}$ and $j_{\rm kin}$ have units $\mathrm{J\,m^{-3}\,K^{-1}}$
and $\mathrm{J\,m^{-2}\,s^{-1}\,K^{-1}}$, respectively.

Consequently, on the periodic cell, $\mathcal S_{\rm kin}(t)=\int_\Omega s_{\rm kin}(x,t)\,d^3x$ has units $\mathrm{J\,K^{-1}}$ and is nondecreasing. Its rate has units $\mathrm{J\,K^{-1}\,s^{-1}}$. This is a conditional deduction of the adopted collision model; it does not assert increase of fine-grained Hamiltonian Gibbs entropy or that the model describes nature.

## Statement references

[[def-countable-choice|Countable Choice inherited from the kinetic measure and Gaussian-moment conventions]]

[MIT OpenCourseWare 8.333, Lecture 9, §III.E (complete H-theorem proof)](https://ocw.mit.edu/courses/8-333-statistical-mechanics-i-statistical-mechanics-of-particles-fall-2013/ce250b44390106351cb97aafb0060ca7_MIT8_333F13_Lec9.pdf)

[David Tong, Lectures on Kinetic Theory, §2.3 (H theorem and local entropy balance)](https://www.damtp.cam.ac.uk/user/tong/kintheory/two.pdf)

## Facts & Assumptions

**Given:** Countable Choice and the periodic-cell, positivity, regularity, absolute moment, logarithmic-test, entropy-flux, sectionwise-equation, and differentiation-envelope hypotheses in the statement, together with $k_B>0$.

[F1] [[thm-fd-kinetic-h]] (current batch-25 draft carrier; authoring readiness is not proof acceptance): under its positive periodic regularity, entropy and derivative envelopes, local spacetime integrability, measurable locally integrable collision production with integrable spatial sections, adopted equation, and absolutely convergent collision tests $1$ and $\ell$, it states the local distributional balance $\partial_t h+\nabla_x\cdot J_H=-D$ and the differentiable global identity $H'(t)=-D_{\rm tot}(t)\le0$, where $H=\int_\Omega h\,dx$ and $D_{\rm tot}=\int_\Omega D\,dx$. The uniform velocity majorants in this item's Statement imply the source's moment, entropy, derivative and local spacetime integrability conditions on compact time intervals. The equation and the two weak tests give $D=-\int\ell Q_\nu(f)\,dv=-\int(1+\ell)(\partial_t f+v\cdot\nabla_xf)\,dv$; those same majorants make this a measurable locally integrable function, while the Statement separately assumes integrable spatial production sections. Proof step 2.1 below uses the global identity; the pointwise local balance used in step 1.1 is supplied by [F2] under this item's stronger velocity envelopes.

[F2] [[pthm-fd-local-boltzmann-h-balance]]: $h_t+\nabla_x\cdot J_H=-D(x,t)$ pointwise, with $D(x,t)\ge0$, under the local envelope and collision-test assumptions and the sectionwise kinetic equation in the Statement.

[F3] [[def-fd-physical-kinetic-observables]]: $s_{\rm kin}=-k_Bh$ in $\mathrm{J\,m^{-3}\,K^{-1}}$ and $j_{\rm kin}=-k_BJ_H$ in $\mathrm{J\,m^{-2}\,s^{-1}\,K^{-1}}$.

[A1] [[post-fd-boltzmann-model]]: the transport equation and symmetric weak collision identity are adopted model premises, with incoming-pair factorization; they are not derived from reversible many-particle mechanics.

[A2] [[def-countable-choice]]: Countable Choice is the inherited kinetic-measure convention of [F3]. The sectionwise equation in the Statement is separately assumed; [A1] alone supplies only the product-almost-everywhere equation.

## Proof

1.1 The sectionwise equation and envelopes in the Statement meet the hypotheses of [F2]. By [F2], $h_t+\nabla_x\cdot J_H=-D$ with $D\ge0$. By [F3], $s_{\rm kin}=-k_Bh$ and $j_{\rm kin}=-k_BJ_H$; multiplication by $-k_B$ gives $\partial_t s_{\rm kin}+\nabla_x\cdot j_{\rm kin}=k_BD\ge0$. [given, A2, F2, F3, algebra]

2.1 Let $D_{\rm tot}(t)=\int_\Omega D(x,t)\,d^3x$. The integrand and hypotheses defining $D_{\rm tot}$ are exactly those in [F1], and $\mathcal S_{\rm kin}(t)=-k_BH(t)$ by [F3]. Therefore [F1] gives $\frac{d}{dt}\mathcal S_{\rm kin}(t)=k_BD_{\rm tot}(t)\ge0$. The local and global statements are conditional on the adopted model [A1], not claims about fine-grained Hamiltonian entropy or empirical validity. [given, A1, F1, F2, F3, step 1.1, algebra] ∎
