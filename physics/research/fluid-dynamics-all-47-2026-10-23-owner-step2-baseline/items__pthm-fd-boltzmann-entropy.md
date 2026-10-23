---
id: pthm-fd-boltzmann-entropy
kind: physics-theorem
title: Entropy production in the adopted collision model
status: draft
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
  - def-fd-physical-kinetic-observables
  - thm-fd-kinetic-h
  - pthm-fd-local-boltzmann-h-balance
  - post-fd-boltzmann-model
dependency_roles:
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
---

## Statement

Let $\Omega=\prod_{j=1}^3(\mathbb R/L_j\mathbb Z)$ be a periodic cell with $L_j>0$ in metres, and let $I$ be an open time interval in seconds. Let $f:I\times\Omega\times\mathbb R^3\to(0,\infty)$ be periodic, continuously differentiable in $t,x$, and twice continuously differentiable in $v$, with $v$ in metres per second and $f$ in $\mathrm{s^3\,m^{-6}}$. Fix $k_B>0$ in joules per kelvin, $v_*=1\,\mathrm{m\,s^{-1}}$, $\omega_3(v)=\sum_{j=0}^3(|v|/v_*)^j$, and a constant $f_{\rm ref}>0$ with the same units as $f$; put $\ell=\log(f/f_{\rm ref})$. On each compact time interval, assume integrable velocity majorants uniform in $x,t$ for each of $f\omega_3$, $f|\ell|$, $|v|f|\ell|$, $(1+|\ell|)|\partial_t f|$, and $(1+|\ell|)|v|\,|\nabla_x f|$. Define the elastic collision set

$$Q_{\rm el}=\{(v,w,v',w')\in(\mathbb R^3)^4:v+w=v'+w',\ |v|^2+|w|^2=|v'|^2+|w'|^2\}$$

with its relative Borel sigma-algebra, and let $\nu$ be the nonnegative symmetric collision-rate measure on $Q_{\rm el}$. At every $(x,t)$ assume $f(x,\cdot,t)$ belongs to the collision domain and the weak identity

$$\int_{\mathbb R^3}\psi(v)Q_\nu(f)(x,v,t)\,d^3v=\frac14\int_{Q_{\rm el}}(B-A)\bigl(\psi(v)+\psi(w)-\psi(v')-\psi(w')\bigr)\,d\nu$$

holds absolutely for $\psi=1$ and $\psi=\ell(x,\cdot,t)$, where $A=f(x,v,t)f(x,w,t)$ and $B=f(x,v',t)f(x,w',t)$. Assume the collision logarithmic production is integrable over $\Omega$ and that $f$ solves $\partial_t f+v\cdot\nabla_x f=Q_\nu(f)$.

$$A(x,v,w,t)=f(x,v,t)f(x,w,t),\qquad B(x,v',w',t)=f(x,v',t)f(x,w',t).$$

Define

$$D(x,t)=\frac14\int_{Q_{\rm el}}(A-B)\log(A/B)\,d\nu.$$

Then $D(x,t)\ge0$, and the physical kinetic entropy density and flux $s_{\rm kin}=-k_B\int f\log(f/f_{\rm ref})\,d^3v$ and $j_{\rm kin}=-k_B\int v f\log(f/f_{\rm ref})\,d^3v$ satisfy

$$\partial_t s_{\rm kin}+\nabla_x\cdot j_{\rm kin}=k_BD\ge0.$$

Consequently, on the periodic cell, $\mathcal S_{\rm kin}(t)=\int_\Omega s_{\rm kin}(x,t)\,d^3x$ is nondecreasing. This is a conditional deduction of the adopted collision model; it does not assert increase of fine-grained Hamiltonian Gibbs entropy or that the model describes nature.

## Statement references

[MIT OpenCourseWare 8.333, Lecture 9, §III.E (complete H-theorem proof)](https://ocw.mit.edu/courses/8-333-statistical-mechanics-i-statistical-mechanics-of-particles-fall-2013/ce250b44390106351cb97aafb0060ca7_MIT8_333F13_Lec9.pdf)

[David Tong, Lectures on Kinetic Theory, §2.3 (H theorem and local entropy balance)](https://www.damtp.cam.ac.uk/user/tong/kintheory/two.pdf)

## Facts & Assumptions

**Given:** The periodic-cell, positivity, regularity, absolute moment, logarithmic-test, entropy-flux, and differentiation-envelope hypotheses in the statement, together with $k_B>0$.

[F1] [[thm-fd-kinetic-h]] (current batch-25 draft carrier; its Step 1 readiness record is missing): under its positive periodic regularity, entropy-envelope, equation, and absolutely convergent collision-test hypotheses, the total entropy $H(t)=\int_\Omega\int_{\mathbb R^3}f\log(f/f_{\rm ref})\,d^3v\,d^3x$ is differentiable and $H'(t)=-D_{\rm tot}(t)\le0$, where $D_{\rm tot}$ is the spatial integral of the elastic collision production. Its current statement supplies the global identity; it does not state the local balance.

[F2] [[pthm-fd-local-boltzmann-h-balance]]: $h_t+\nabla_x\cdot J_H=-D(x,t)$ pointwise, with $D(x,t)\ge0$, under the local envelope and collision-test assumptions in the Statement.

[F3] [[def-fd-physical-kinetic-observables]]: $s_{\rm kin}=-k_Bh$ in $\mathrm{J\,m^{-3}\,K^{-1}}$ and $j_{\rm kin}=-k_BJ_H$ in $\mathrm{J\,m^{-2}\,s^{-1}\,K^{-1}}$.

[A1] [[post-fd-boltzmann-model]]: the transport equation and symmetric weak collision identity are adopted model premises, with incoming-pair factorization; they are not derived from reversible many-particle mechanics.

## Proof

1.1 By [F2], $h_t+\nabla_x\cdot J_H=-D$ with $D\ge0$. By [F3], $s_{\rm kin}=-k_Bh$ and $j_{\rm kin}=-k_BJ_H$; multiplication by $-k_B$ gives $\partial_t s_{\rm kin}+\nabla_x\cdot j_{\rm kin}=k_BD\ge0$. [given, F2, F3, algebra]

2.1 Let $D_{\rm tot}(t)=\int_\Omega D(x,t)\,d^3x$. The integrand and hypotheses defining $D_{\rm tot}$ are exactly those in [F1], and $\mathcal S_{\rm kin}(t)=-k_BH(t)$ by [F3]. Therefore [F1] gives $\frac{d}{dt}\mathcal S_{\rm kin}(t)=k_BD_{\rm tot}(t)\ge0$. The local and global statements are conditional on the adopted model [A1], not claims about fine-grained Hamiltonian entropy or empirical validity. [given, A1, F1, F2, F3, step 1.1, algebra] ∎
