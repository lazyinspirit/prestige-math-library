---
id: def-string-superstring-picture-changing-insertion
kind: definition
title: RNS picture-changing insertion on a local superstring chart
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
category: string-theory
library: physics
dependency_level: 10
domain: physics
physical_scope: Local RNS picture-changing operation and chiral charge count in a fixed sector/chart; no global PCO section,
  vertical integration chain, or measure is constructed.
deps:
- def-rns-physical-state-brst-cohomology
- def-rns-spin-structures-and-sectors
- def-rns-gso-projection
- def-rns-beta-gamma-superghost-picture-system
- def-string-punctured-moduli-amplitude-form
- def-cft-super-riemann-surface
- def-string-rns-bosonized-picture-charge-convention
- pthm-string-rns-picture-charge-selection-rule
dependency_roles:
  def-rns-physical-state-brst-cohomology: formulation-prerequisite
  def-rns-spin-structures-and-sectors: formulation-prerequisite
  def-rns-gso-projection: formulation-prerequisite
  def-rns-beta-gamma-superghost-picture-system: formulation-prerequisite
  def-string-punctured-moduli-amplitude-form: formulation-prerequisite
  def-cft-super-riemann-surface: mathematical-premise
  def-string-rns-bosonized-picture-charge-convention: formulation-prerequisite
  pthm-string-rns-picture-charge-selection-rule: physical-result
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
  - title: Edward Witten, Notes on Super Riemann Surfaces and Their Moduli
    url: https://arxiv.org/pdf/1209.2459v5
    locator: §§2.1–2.2 and §§6.1–6.2, PDF pp. 3–12 and 58–70, SRS data, NS/R degenerations, and supermoduli boundary behavior.
  - title: Charles Wang and Xi Yin, On the Equivalence between SRS and PCO Formulations of Superstring Perturbation Theory
    url: https://arxiv.org/pdf/2205.01106v2
    locator: §§3.1 and 5.1–5.3, PDF pp. 8 and 17–27, spurious loci, local PCO choices, and vertical-chain interpolation for
      on-shell closed Type II.
  - title: Oliver Schlotterer, Scattering amplitudes in open superstring theory
    url: https://edoc.ub.uni-muenchen.de/13381/1/Schlotterer_Oliver.pdf
    locator: §§2.3.2–2.3.6 and §3.1.6, especially Eqs. (2.3.67)–(2.3.68) and (3.1.27)–(3.1.32), picture number, local PCO, and background-charge selection.
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Definition

Fix a closed RNS model in one local supermoduli chart, with the selected spin structure, GSO projection, beta-gamma bosonization, nilpotent BRST operator, and picture grading. For this local operation additionally supply a complex super vector space $\mathcal D_L$ (the large algebraic state domain), odd endomorphisms $Q_L,\eta_0,\xi(z)$ on that common invariant domain, and the identities $Q_L^2=\eta_0^2=0$, $\eta_0Q_L+Q_L\eta_0=0$, and $\eta_0\xi(z)+\xi(z)\eta_0=I$. Products here are algebraic endomorphism compositions; a field realization may use formal Laurent coefficients or separated, smeared insertions, and must supply that realization and its invariant domain. Set $\mathcal D_S:=\ker\eta_0$ and require $Q_L|_{\mathcal D_S}=Q_B$ on the supplied small complex. This is an additional extension hypothesis, not a consequence of a differential given only on $\mathcal D_S$. Define $X_L(z):=Q_L\xi(z)+\xi(z)Q_L$ on $\mathcal D_L$ and the local small-space insertion $X(z):=X_L(z)|_{\mathcal D_S}$; the restriction is justified below.

For this operation supply a total picture grading $P$ on $\mathcal D_L$ with $Q_L$ of degree $0$, $\eta_0$ of degree $-1$ and $\xi(z)$ of degree $+1$. It agrees with the scalar exponent $p$ on $e^{p\phi}$ and assigns degrees $-1,+1$ to $\eta,\xi$, respectively; the remaining matter and $bc$ fields have degree $0$. This refines the scalar-exponent bookkeeping used in the bosonization supplier: the scalar exponent alone is not a homogeneous grading for all BRST terms. Indeed $\gamma=\eta e^\phi$ and $\beta=e^{-\phi}\partial\xi$ have total picture $0$, so the displayed BRST charge can have degree $0$. For external eigenoperators with additional $\eta,\xi$ factors, use their total $P$ eigenvalue, not just the $\phi$ exponent. The charge-neutrality assumption for this local correlator is that its total picture equals $2g-2$, extending the supplied exponential-insertion rule. When only exponential picture carriers occur externally it is precisely that rule. Compatibility with any relative or GSO restrictions must be supplied for the intended external representatives; no picture isomorphism on those restricted cohomologies is inferred. In each chiral sector, if external total pictures are $p_1,\ldots,p_n$ and
$$N_{\mathrm{PCO}}=2g-2-\sum_i p_i\in\mathbb Z_{\ge0},$$
then this is the number of local picture-changing insertions required by the charge-selection rule. The right-moving sector is counted independently. This definition does not choose insertion points, resolve collisions or spurious singularities, define a vertical integration chain, or construct a global superstring amplitude form.

## Facts & Assumptions

**Given:** A fixed closed genus-$g$ RNS worldsheet and local SRS chart, chosen left/right sectors and GSO phases, external on-shell BRST representatives, the bosonized superghost convention, and a nilpotent $Q_B$ on the selected complex. Assume $N_{\mathrm{PCO}}$ is a nonnegative integer in each chirality.

[F1] [[def-rns-physical-state-brst-cohomology]]: physicality is cohomology in the declared RNS BRST complex, subject to the supplier's explicit nilpotence and relative-subspace conditions.

[F2] [[def-rns-spin-structures-and-sectors]] and [[def-rns-gso-projection]] fix the sector and projection; they do not choose PCO positions.

[F3] [[def-rns-beta-gamma-superghost-picture-system]] supplies the local commuting beta-gamma system.

[F4] [[def-cft-super-riemann-surface]] supplies the NS/R supergeometric puncture interface; its current readiness hash is stale.

[F5] [[def-string-punctured-moduli-amplitude-form]] is only a local chartwise correlator form with instance-specific picture and ghost data.

[F6] [[def-string-rns-bosonized-picture-charge-convention]] fixes the local $\phi$ picture grading by assigning charge $p$ to $e^{p\phi}$.

[F7] [[pthm-string-rns-picture-charge-selection-rule]]: for scalar-picture eigenoperators obeying $\mathcal O[\phi+a]=e^{pa}\mathcal O[\phi]$, a nonzero closed chiral correlator requires $\sum_i p_i=2g-2$ under the declared zero-mode Ward convention. Its extension to the total grading $P$ is the separate hypothesis [A1].

[A1] Supply the common-domain large-space extension, endomorphism identities, total grading and local total-picture Ward convention in the Definition. Schlotterer §3.1.6 motivates the local commutator and the exclusion of $\xi_0$ from the small space; the extension identities and domain are explicitly additional model hypotheses here. The scalar-exponent selection rule of [F7] applies directly to exponential external insertions and is extended to total eigenoperators only by this hypothesis.

## Proof

1.1 All compositions defining $X_L$ exist on the invariant domain in [A1], and $X_L$ is even. The identities give $\eta_0Q_L\xi=-Q_L\eta_0\xi=-Q_L+Q_L\xi\eta_0$ and $\eta_0\xi Q_L=Q_L-\xi\eta_0Q_L=Q_L+\xi Q_L\eta_0$. Adding yields $\eta_0X_L=X_L\eta_0$, so $X_L$ preserves $\mathcal D_S$ and its restriction is defined. Also $Q_LX_L=X_LQ_L=Q_L\xi Q_L$ by $Q_L^2=0$, so $X$ maps small BRST-closed representatives to closed representatives and exact ones to exact ones wherever the declared domain applies. The degrees in [A1] make $X$ have total picture $+1$. No relative-subcomplex or fixed GSO-sign preservation is asserted without its separate compatibility input. [given, F1, F3, F6, A1, algebra]

2.1 By the total-picture Ward convention in [A1], agreeing with [F7] for exponential external insertions, external operators with pictures $p_i$ plus $N$ insertions of $X$ must satisfy $\sum_i p_i+N=2g-2$, because each insertion carries charge $+1$ by [A1]. Solving gives $N=2g-2-\sum_i p_i$. The nonnegative-integrality clause in Given is exactly what makes this number an available count of insertions; the same derivation applies independently to the right movers. [given, F2, F4, F5, F6, F7, A1, step 1.1, algebra] ∎

## Remarks

Wang–Yin construct local closed-Type-II/on-shell PCO interpolation chains over the interior of ordinary moduli in their stated setup. Their paper explicitly sets aside ordinary-moduli boundary treatment. The present definition does not misclassify that interior result as unresolved; the remaining all-genus question about regulator-independent finite values across compactification boundary strata is stated in [[op-rns-global-superstring-amplitude-measure]].
