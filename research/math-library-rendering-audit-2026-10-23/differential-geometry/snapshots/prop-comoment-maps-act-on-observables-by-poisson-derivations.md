---
id: prop-comoment-maps-act-on-observables-by-poisson-derivations
kind: proposition
title: Comoment maps act on observables by Poisson derivations
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 1
deps:
  - def-symplectic-comoment-map-and-hamiltonian-observable-action
  - thm-poisson-bracket-satisfies-the-jacobi-identity
  - prop-poisson-bracket-is-bilinear-skew-and-a-derivation-in-each-entry
  - def-poisson-bracket-on-a-symplectic-manifold
  - def-representation-of-a-lie-algebra
  - def-moment-map-and-component-hamiltonian
  - prop-equivariance-is-equivalent-to-the-moment-map-poisson-bracket-identity
  - prop-moment-map-components-generate-the-negative-infinitesimal-action
  - def-countable-choice
justified_by: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Ana Cannas da Silva, Lectures on Symplectic Geometry
      url: https://www.math.ist.utl.pt/~acannas/Books/symplectic.pdf
      locator: Lecture 22, §22.1, printed pp. 133–135
    - title: Eckhard Meinrenken, Symplectic Geometry
      url: https://www.math.utoronto.ca/mein/teaching/LectureNotes/symplectic.pdf
      locator: §7.3, Lemma 7.14 and its proof, printed pp. 84–85
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Statement

Let $\mathfrak g$ be a real Lie algebra, let $(M,\omega)$ be a symplectic
manifold, and let $J:\mathfrak g\to C^\infty(M,\mathbb R)$ be a comoment map
as defined in [[def-symplectic-comoment-map-and-hamiltonian-observable-action]].
Then $\rho_J(\xi)F=\{J(\xi),F\}$ defines a real Lie-algebra representation
of $\mathfrak g$ on $C^\infty(M,\mathbb R)$, and every $\rho_J(\xi)$ is a
Poisson derivation: for all $F,G\in C^\infty(M,\mathbb R)$,

$$\rho_J(\xi)(FG)=\rho_J(\xi)(F)G+F\rho_J(\xi)(G),$$

$$\rho_J(\xi)\{F,G\}=\{\rho_J(\xi)(F),G\}+\{F,\rho_J(\xi)(G)\}.$$

In the library Hamiltonian-field convention, the same observable operator is
$\rho_J(\xi)F=-X_{J(\xi)}(F)$ for every $\xi$ and $F$.

There is also the following moment-map branch. Assume $\mathrm{AC}_\omega$.
If a finite-dimensional real Lie group $G$ acts symplectically on $(M,\omega)$
and $\mu$ is an equivariant moment map in the library convention, then
$J(\xi)=\mu^\xi$ is a comoment map and
$\rho_J(\xi)F=\xi_M(F)$. This forward implication needs no connectedness
assumption on $G$. The first assertion for an arbitrary comoment map is
choice-free; this branch carries only the countable-choice assumption required
by the stated moment-map suppliers.

## Facts & Assumptions

**Given:** A real Lie algebra $\mathfrak g$, a symplectic manifold $(M,\omega)$,
and a real-linear comoment map $J$; for the final moment-map branch also
$\mathrm{AC}_\omega$, a symplectic left $G$-action, and an equivariant moment
map $\mu$.

[A1] $\mathrm{AC}_\omega$ is the Axiom of Countable Choice. It is used only in
the moment-map branch, through the cited moment-map suppliers; the general
comoment calculation makes no choice. [[def-countable-choice]]

[F1] A comoment map is real-linear and satisfies
$J([\xi,\eta])=\{J(\xi),J(\eta)\}$; its observable operator is
$\rho_J(\xi)F=\{J(\xi),F\}$. [[def-symplectic-comoment-map-and-hamiltonian-observable-action]]

[F2] The symplectic Poisson bracket satisfies the Jacobi identity. [[thm-poisson-bracket-satisfies-the-jacobi-identity]]

[F3] The bracket is real-bilinear and skew, and is a derivation in each
argument. [[prop-poisson-bracket-is-bilinear-skew-and-a-derivation-in-each-entry]]

[F4] The sign convention is $\{F,G\}=X_G(F)=-X_F(G)$, with
$\iota_{X_H}\omega=dH$. [[def-poisson-bracket-on-a-symplectic-manifold]]

[F5] Moment components $\mu^\xi=\langle\mu,\xi\rangle$ depend linearly on
$\xi$ and satisfy $d\mu^\xi=-\iota_{\xi_M}\omega$; equivariance is an
additional condition. [[def-moment-map-and-component-hamiltonian]]

[F6] For an equivariant moment map, the forward identity
$\{\mu^\xi,\mu^\eta\}=\mu^{[\xi,\eta]}$ holds for every $G$, without a
connectedness assumption. [[prop-equivariance-is-equivalent-to-the-moment-map-poisson-bracket-identity]]

[F7] For every moment-map component, $X_{\mu^\xi}=-\xi_M$.
[[prop-moment-map-components-generate-the-negative-infinitesimal-action]]

[F8] A representation of a Lie algebra is a linear Lie-algebra homomorphism
to the endomorphism algebra with its commutator. [[def-representation-of-a-lie-algebra]]

## Proof

1.1 For $a,b\in\mathbb R$ and $\xi,\eta\in\mathfrak g$, real-linearity of $J$ and bilinearity of the Poisson bracket give $\rho_J(a\xi+b\eta)=a\rho_J(\xi)+b\rho_J(\eta)$; bilinearity also makes each $\rho_J(\xi)$ a real-linear operator on $C^\infty(M,\mathbb R)$. [given, F1, F3, algebra]

1.2 The derivation rule in the second bracket entry gives $\rho_J(\xi)(FG)=\{J(\xi),FG\}=\{J(\xi),F\}G+F\{J(\xi),G\}$, which is the product rule. [given, F1, F3]

1.3 Apply Jacobi to $J(\xi),F,G$ and use skew-symmetry to obtain $\rho_J(\xi)\{F,G\}=\{J(\xi),\{F,G\}\}=\{\{J(\xi),F\},G\}+\{F,\{J(\xi),G\}\}$, the required Poisson-bracket derivation rule. [given, F1, F2, F3]

1.4 In the moment-map branch, [F5] gives linearity of $J(\xi)=\mu^\xi$ and the component moment equations, while equivariance and [F6] give $\{\mu^\xi,\mu^\eta\}=\mu^{[\xi,\eta]}$. Thus these components satisfy the comoment definition. This use of [F6] requires [A1], but does not require that $G$ be connected. [given, A1, F5, F6]

2.1 For every $F\in C^\infty(M,\mathbb R)$, Jacobi and skew-symmetry give $[\rho_J(\xi),\rho_J(\eta)]F=\{J(\xi),\{J(\eta),F\}\}-\{J(\eta),\{J(\xi),F\}\}=\{\{J(\xi),J(\eta)\},F\}=\{J([\xi,\eta]),F\}=\rho_J([\xi,\eta])F$. Together with step 1.1, this is the representation condition in [F8]. [given, F1, F2, F3, F8, step 1.1, algebra]

3.1 For any comoment map, [F1] and [F4] give $\rho_J(\xi)F=\{J(\xi),F\}=-X_{J(\xi)}(F)$, with no choice assumption. In the moment-map branch of step 1.4, substitute $J(\xi)=\mu^\xi$; under [A1], [F7] changes $-X_{\mu^\xi}(F)$ to $\xi_M(F)$. This proves both the general Hamiltonian-field sign and the stated moment-map action on observables. [given, A1, F1, F4, F7, step 1.4] ∎
