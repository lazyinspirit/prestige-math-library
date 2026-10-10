---
id: ex-em-nonconserved-switched-charge
kind: example
title: "A switched point charge with no current violates the weak continuity compatibility"
domain: physics
status: draft
origin: pipeline
dependency_level: 17
deps: [pthm-em-charge-continuity,
       def-em-weak-sources,
       lem-em-point-current-continuity,
       post-em-vacuum-maxwell,
       post-em-distributional-vacuum-maxwell,
       def-distribution,
       def-distributional-derivative,
       def-test-function-space-d-of-an-open-set,
       def-dirac-delta-and-its-derivatives,
       lem-scaled-euclidean-bumps-with-compact-support-and-gradient-bound,
       def-countable-choice]
dependency_roles:
  pthm-em-charge-continuity: physical-result
  def-em-weak-sources: formulation-prerequisite
  lem-em-point-current-continuity: mathematical-premise
  post-em-vacuum-maxwell: physical-assumption
  post-em-distributional-vacuum-maxwell: physical-assumption
  def-distribution: mathematical-premise
  def-distributional-derivative: mathematical-premise
  def-test-function-space-d-of-an-open-set: mathematical-premise
  def-dirac-delta-and-its-derivatives: mathematical-premise
  lem-scaled-euclidean-bumps-with-compact-support-and-gradient-bound: mathematical-premise
  def-countable-choice: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: "A mathematical incompatibility example for the declared distributional source model: the switched charge distribution defined by <rho,psi> = q int_0^infty psi(0,t) dt for every psi in C_c^infty(U), U = R^3 x R, with zero current has div J + partial_t rho = q delta_(0,0) nonzero, so it admits no locally integrable field pair satisfying the four formal weak Maxwell residual identities and cannot be an admitted source model under the singular-source adoption. This is a statement about the declared model, not a measurement; no apparatus, uncertainty or empirical claim is involved."
sources:
  references:
    - title: "David Tong, Electromagnetism, University of Cambridge Part II Mathematical Tripos lecture notes (2026 printing, 236 pp.)"
      url: "https://davidtong.org/pdfs/teaching/electromagnetism/electro.pdf"
      locator: "Section 1.1.1 printed pp. 3-4 (local conservation of charge: charge cannot simply appear in or vanish from a region, it can only be transported by a current) and Section 4.2.1 printed pp. 79-81 (the continuity equation as the consistency condition of the Maxwell equations); read in the stamped full text."
    - title: "David J. Griffiths, Introduction to Electrodynamics, 3rd edition (Prentice Hall 1999, 596 pp.; full scanned text)"
      url: "https://www.hlevkin.com/hlevkin/90MathPhysBioBooks/Physics/Physics/Electrodynamics/David%20J.%20Griffiths%20-%20Introduction%20to%20Electrodynamics-Prentice%20Hall%20(1999).pdf"
      locator: "Section 7.3.3 printed pp. 326-328 (charge continuity as a consistency condition and the appearance of a compensating current; the charged-particle current rho v); read in the stamped scanned full text."
    - title: "L. D. Landau, E. M. Lifshitz, The Classical Theory of Fields, Third Revised English Edition (Course of Theoretical Physics vol. 2, Pergamon Press 1971, 387 pp.)"
      url: "http://www.elegio.it/mc2/LandauLifshitz_TheClassicalTheoryOfFields_text.pdf"
      locator: "Section 29 printed pp. 71-72 (continuity in integral and differential form and its role for point charges); read in the stamped full text."
proof_strategy: direct
---


## Example

Let $q\ne0$ be a real charge parameter (coulombs) and let
$U:=\mathbb R^3\times\mathbb R$ with the laboratory conventions of
[[def-em-weak-sources]]. Define a distribution $\rho$ on $U$ by

$$\langle\rho,\psi\rangle:=q\int_0^\infty\psi(0,t)\,dt,\qquad \psi\in C_c^\infty(U)$$

— an explicit switched-history distribution for $z(t)=0$ on $(0,\infty)$, with
no compensating current or source contribution at the appearance event; it does
not satisfy the proper-graph hypothesis of the zero-endpoint continuity branch
of [[def-em-weak-sources]](b) — and let $J:=0$ be the zero distribution. Then:

(a) $\partial_t\rho=q\,\delta_{(0,0)}$ and $\operatorname{div}J=0$
([[def-dirac-delta-and-its-derivatives]]), hence
$\partial_t\rho+\operatorname{div}J=q\,\delta_{(0,0)}\ne0$ in
$\mathcal D'(U)$: for every test function $\psi$,
$\langle\partial_t\rho,\psi\rangle=-q\int_0^\infty\partial_t\psi(0,t)\,dt=q\,\psi(0,0)$,
because $t\mapsto\psi(0,t)$ is smooth with compact support. In particular the
continuity identity fails at the appearance event $(0,0)$.

(b) Consequently there are no locally integrable fields $E,B$ on $U$
satisfying the four weak residual identities of [[def-em-weak-sources]](e)
with the source pair $(\rho,0)$, the $\rho$-pairing being the explicit pairing
displayed above and $J=0$: such fields would satisfy the distributional
continuity identity of [[pthm-em-charge-continuity]](b), which applies to
every distributional source pair for which the four identities hold, and (a)
contradicts it. The source pair $(\rho,0)$ is therefore incompatible with the
formal four residual identities themselves; it is not one of the declared
point sources of [[def-em-weak-sources]](b), because the properness hypothesis
fails here as recorded, and no fields turn it into an admitted singular-source
model under [[post-em-distributional-vacuum-maxwell]].

(c) The failure is exactly the omitted endpoint term of the point-source
construction: by the endpoint clause of [[lem-em-point-current-continuity]],
the same trajectory on a bounded interval $I_0=(a,b)$ has
$\partial_t\rho+\operatorname{div}J=q\,\delta_{\gamma(a)}-q\,\delta_{\gamma(b)}$
with $\gamma(t)=(z(t),t)$. A switched point charge with $J=0$ and no endpoint
or current term is thus inadmissible; a switched charge must be accompanied by
an explicit current or endpoint source term, which the weak equations of
[[def-em-weak-sources]] then require to satisfy continuity.

This is a mathematical incompatibility statement about a declared source
model, not a report of a measurement: no apparatus, sampling model,
uncertainty or empirical claim is involved.

## Verification

**Given:** A real $q\ne0$, the distribution $\rho$ with $\langle\rho,\psi\rangle=q\int_0^\infty\psi(0,t)\,dt$ on $U=\mathbb R^3\times\mathbb R$, and the zero distribution $J$. The ambient $\mathrm{AC}_\omega$ convention is that of [[def-em-weak-sources]].

[F1] Distributional derivatives act on tests by $\langle\partial_\mu T,\psi\rangle=-\langle T,\partial_\mu\psi\rangle$, and a test function is smooth with compact support ([[def-distributional-derivative]], [[def-distribution]], [[def-test-function-space-d-of-an-open-set]]).

[F2] The point evaluation $\delta_{(0,0)}(\psi)=\psi(0,0)$ defines the Dirac distribution at the origin, and it is nonzero ([[def-dirac-delta-and-its-derivatives]]); some compactly supported smooth test equals one at the origin ([[lem-scaled-euclidean-bumps-with-compact-support-and-gradient-bound]]).

[F3] The charge-continuity theorem states that any distributional source pair satisfying the four distributional Maxwell equations satisfies $\partial_t\rho+\operatorname{div}J=0$ in $\mathcal D'(U)$ ([[pthm-em-charge-continuity]](b)); the weak solution predicate and the source pairings are those of [[def-em-weak-sources]](b)-(e), and the singular-source adoption is [[post-em-distributional-vacuum-maxwell]]; the excluded original locally integrable branch is [[post-em-vacuum-maxwell]].

[F4] The endpoint clause of the point-current supplier gives, for a finite-endpoint $C^1$ history with finite absolute derivative integral, $\partial_t\rho_{\mathrm{pt}}+\operatorname{div}J_{\mathrm{pt}}=q\delta_{\gamma(a)}-q\delta_{\gamma(b)}$ ([[lem-em-point-current-continuity]]).

1.1 For each compact test support $K$, choose $T>0$ larger than its positive time coordinates. Then $|\langle\rho,\psi\rangle|\le|q|T\sup_K|\psi|$ for tests supported in $K$, so the displayed linear functional is a distribution. For every test $\psi$, choose such a $T$ and apply the finite-endpoint branch [F4] to the constant trajectory $z=0$ on $(0,T)$: its derivative integral is zero and both endpoint events lie in $U$. Its density agrees with the switched density on $\partial_t\psi$ because that test vanishes for $t\ge T$, and its zero current agrees with $J$. Thus $\langle\partial_t\rho,\psi\rangle=q\psi(0,0)-q\psi(0,T)=q\psi(0,0)$, the last term vanishing by the choice of $T$; hence $\partial_t\rho=q\,\delta_{(0,0)}$ as distributions, and this is nonzero because $q\ne0$ and a compactly supported smooth test equals one at the origin. The divergence of the zero distribution is zero, so $\partial_t\rho+\operatorname{div}J=q\,\delta_{(0,0)}\ne0$ in $\mathcal D'(U)$. [F1, F2, F4, given, algebra]

2.1 Suppose locally integrable fields $E,B$ on $U$ satisfied the four weak residual identities with the source pair $(\rho,0)$ in the formal residual reading of the solution predicate. The fields' regular distributions and the pair $(\rho,0)$ are then a distributional source pair satisfying the four identities, so the distributional branch of the charge-continuity theorem, which applies to every distributional source pair for which the four identities hold, would give $\partial_t\rho+\operatorname{div}J=0$ in $\mathcal D'(U)$. This contradicts step 1.1, so no such fields exist; moreover the pair is not among the declared point sources of the framework, so it cannot be admitted through the singular-source adoption either. [F3, step 1.1, given]

2.2 The failure is exactly the omitted endpoint term: the endpoint clause of the point-current supplier evaluates the same trajectory over a bounded history $I_0=(a,b)$ as $\partial_t\rho_{\mathrm{pt}}+\operatorname{div}J_{\mathrm{pt}}=q\delta_{\gamma(a)}-q\delta_{\gamma(b)}$, so a switched charge with $J=0$ and no endpoint term is precisely the case in which that endpoint contribution has been dropped; retaining continuity therefore requires an explicit current or endpoint source term, which the weak identities then force to be the continuity-compatible one. [F4, step 1.1, given]

3.1 Steps 1.1-2.2 establish: the switched-history pair has $\partial_t\rho+\operatorname{div}J=q\delta_{(0,0)}\ne0$; no locally integrable field pair satisfies the four weak identities with it; and the failing term is exactly the endpoint contribution of the declared point-source construction. The argument is a conditional computation inside the declared distributional source model and makes no empirical claim. [step 1.1, step 2.1, step 2.2, given] ∎
