---
id: ex-emg-electric-stress
kind: example
title: "Pure electric and magnetic observer stress"
status: draft
origin: pipeline
domain: physics
dependency_level: 4
deps:
  - lem-emg-maxwell-observer-stress
  - def-countable-choice
dependency_roles:
  lem-emg-maxwell-observer-stress: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct computation
physical_scope: "Pointwise algebraic computation of the pure-electric and pure-magnetic observer components of the adopted SI electromagnetic stress tensor, conditional on the planned stress-component lemma. It is not a global field solution or measured result."
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "David Tong, General Relativity, §4.5.3"
      url: "https://www.damtp.cam.ac.uk/user/tong/gr/gr.pdf"
    - title: "Sean M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1, Chapter 1, §1"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
---
## Example

Let $p$ be an event in an open neighborhood $U$ on which a smooth
future-directed unit timelike observer field $n$ is defined. At $p$ choose a
positively oriented orthonormal tetrad with time vector $n(p)$ and signature
$(-,+,+,+)$. Let $E_0\in\mathbb R$ have units $\mathrm{V\,m^{-1}}$ and
$B_0\in\mathbb R$ have units tesla. For the pure-electric
observer field $\mathbf E=(E_0,0,0)$, $\mathbf B=0$, the SI stress components
of [F1], with the stated Countable Choice background premise [A2], are

$$T^{00}=\frac{\epsilon_0E_0^2}{2},\qquad T^{0i}=0,\qquad (T^{ij})=\operatorname{diag}\!\left(-\frac{\epsilon_0E_0^2}{2}, \frac{\epsilon_0E_0^2}{2},\frac{\epsilon_0E_0^2}{2}\right).$$

For the pure-magnetic observer field $\mathbf E=0$,
$\mathbf B=(0,0,B_0)$, they are

$$T^{00}=\frac{B_0^2}{2\mu_0},\qquad T^{0i}=0,\qquad (T^{ij})=\operatorname{diag}\!\left(\frac{B_0^2}{2\mu_0}, \frac{B_0^2}{2\mu_0},-\frac{B_0^2}{2\mu_0}\right).$$

In each case $T^a{}_a=0$. The entries display anisotropic spatial stress in the
chosen observer frame; no perfect-fluid identification is made.

## Facts & Assumptions

**Given:** The event and smooth observer field stated in the Example, its
oriented orthonormal tetrad at $p$, real numbers $E_0,B_0$,
the two pointwise field-value choices in the Example, and Countable Choice
$\mathrm{AC}_\omega$. The fields and tensor are smooth on the surrounding model
domain, although only their values at the chosen event enter this computation.

[F1] Draft mathematical supplier [[lem-emg-maxwell-observer-stress]]:
its Statement gives, for
real observer fields $E_i$ and $B_i$, the adopted SI tensor satisfies
$T^{00}=(\epsilon_0|E|^2+\mu_0^{-1}|B|^2)/2$,
$T^{0i}=(E\times B)_i/(\mu_0c)$, and
$T^{ij}=-\epsilon_0(E_iE_j-\delta_{ij}|E|^2/2)-\mu_0^{-1}(B_iB_j-\delta_{ij}|B|^2/2)$.
Here $T^{ab}$ is a contravariant tensor with units $\mathrm{J\,m^{-3}}$,
$\epsilon_0=(\mu_0c^2)^{-1}$, and the
observer components use $F_{0i}=-E_i/c$, $F_{ij}=\varepsilon_{ijk}B_k$.
The required local-potential and circle-gluing carrier statements are present
and their interfaces match; those items remain drafts, and the circle-gluing
proof now has its typed prerequisites authored on emg-mg02. This formula remains a draft supplier use; independent proof acceptance is not asserted. Its dependency closure includes $\mathrm{AC}_\omega$.

[A2] The Axiom of Countable Choice [[def-countable-choice]] ($\mathrm{AC}_\omega$):
every sequence of nonempty sets has a choice function. It is carried by the
planned mathematical supplier closure; the exact inherited use is selecting a
countable subatlas in the tangent/tensor-bundle construction documented in
the geometry supplier record. The component arithmetic below uses no stronger
choice principle.

## Proof

1.1 For $\mathbf E=(E_0,0,0)$ and $\mathbf B=0$, [F1] gives
$T^{00}=\epsilon_0E_0^2/2$ and $T^{0i}=0$. The electric quadratic matrix
$E_iE_j-\delta_{ij}|E|^2/2$ is
$\operatorname{diag}(E_0^2/2,-E_0^2/2,-E_0^2/2)$, so the minus sign in the
spatial formula of [F1] gives the displayed spatial diagonal. Contracting with
$g_{ab}=\operatorname{diag}(-1,1,1,1)$ yields
$T^a{}_a=-\epsilon_0E_0^2/2-\epsilon_0E_0^2/2+\epsilon_0E_0^2/2+\epsilon_0E_0^2/2=0$. [given, A2, F1, algebra]

2.1 For $\mathbf E=0$ and $\mathbf B=(0,0,B_0)$, [F1] gives
$T^{00}=B_0^2/(2\mu_0)$ and $T^{0i}=0$. The magnetic quadratic matrix
$B_iB_j-\delta_{ij}|B|^2/2$ is
$\operatorname{diag}(-B_0^2/2,-B_0^2/2,B_0^2/2)$, so the spatial minus
sign in [F1] gives the displayed magnetic diagonal. Its metric trace is
$-B_0^2/(2\mu_0)+B_0^2/(2\mu_0)+B_0^2/(2\mu_0)-B_0^2/(2\mu_0)=0$.
The calculation is pointwise and supplies no global or empirical claim. [given,
A2, F1, algebra] ∎
