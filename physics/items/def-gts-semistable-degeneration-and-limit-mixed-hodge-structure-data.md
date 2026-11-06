---
id: def-gts-semistable-degeneration-and-limit-mixed-hodge-structure-data
kind: definition
title: "Semistable degeneration and limit mixed Hodge structure data"
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 1
domain: mathematics
library: physics
category: string-theory
axiom_strength: "ZF for the local definition and finite logarithm calculation."
deps:
  - def-gts-polarized-variation-of-hodge-structure-and-period-map
  - def-rational-mixed-hodge-structure
  - lem-nilpotent-lefschetz-filtration-is-canonical-and-self-dual
dependency_roles:
  def-gts-polarized-variation-of-hodge-structure-and-period-map: mathematical-premise
  def-rational-mixed-hodge-structure: mathematical-premise
  lem-nilpotent-lefschetz-filtration-is-canonical-and-self-dual: mathematical-premise
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Claire Voisin, Hodge Structures and the Topology of Algebraic Varieties, Harvard CMSA revision"
      url: "https://cmsa.fas.harvard.edu/media/Voisin_HSTAVharvardrevision.pdf"
      locator: "§§3.4.3–3.5, printed pp. 48–52: monodromy, logarithmic extension and candidate limit data."
    - title: "Pierre Deligne, Théorie de Hodge II, Publications Mathématiques de l’IHÉS 40 (1971)"
      url: "https://www.numdam.org/item/PMIHES_1971__40__5_0.pdf"
      locator: "§4.2.1–§4.2.7, printed pp. 43–47: geometric Hodge variations and their algebraic setting."
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

Let $\Delta$ be a complex disk with coordinate $t$ and $\Delta^*=\Delta\setminus\{0\}$. A semistable degeneration datum consists of a proper holomorphic map $\bar\pi:\bar{\mathcal X}\to\Delta$ with smooth total space, smooth over $\Delta^*$, whose central fibre $D=\bar\pi^{-1}(0)$ is a reduced simple-normal-crossing divisor; in the algebraic/projective case require $\bar\pi$ projective. Put $\mathcal X^*:=\bar{\mathcal X}\setminus D$ and define $\pi:=\bar\pi|_{\mathcal X^*}:\mathcal X^*\to\Delta^*$. The associated local system is $\mathbb V_{\mathbb Z}=R^k\pi_*\mathbb Z/\mathrm{tors}$, with monodromy $T$ around a positively oriented loop. If after an explicitly specified finite base change the monodromy is unipotent, define
$$N=\log T=(T-I)-\tfrac12(T-I)^2+\tfrac13(T-I)^3-\cdots,$$
which is a finite sum because $T-I$ is nilpotent.

The relative logarithmic de Rham complex is
$$\Omega^\bullet_{\bar{\mathcal X}/\Delta}(\log D):=\Omega^\bullet_{\bar{\mathcal X}}(\log D)\big/\bigl(\bar\pi^*\Omega^1_\Delta(\log 0)\wedge\Omega^{\bullet-1}_{\bar{\mathcal X}}(\log D)\bigr).$$
After the specified base change, use the flat-marking convention $\Phi(z+1)=T\Phi(z)$ with $t=e^{2\pi iz}$. The **canonical logarithmic extension** is the holomorphic bundle on $\Delta$ whose frame on the universal cover is $e^{zN}e_1,\ldots,e^{zN}e_m$ for a flat basis $e_1,\ldots,e_m$; its connection has logarithmic matrix $N\,dt/(2\pi i t)$ in this frame. If the untwisted filtration $e^{-zN}\Phi(z)$ extends holomorphically across $t=0$ by subbundles of this extension, call those subbundles the **extended Hodge filtration** and denote their fibre at $0$ by $F_\infty$. Their extension is recorded only when it exists; this definition does not assert it.

For a finite-dimensional rational vector space carrying the nilpotent $N=\log T$, let $W(N)$ denote the unique finite increasing filtration satisfying $NW_j\subseteq W_{j-2}$ and such that the induced $N^\ell:\operatorname{Gr}^{W(N)}_{\ell}\to\operatorname{Gr}^{W(N)}_{-\ell}$ is an isomorphism for every $\ell\ge0$. It is centred at zero; set $W(N)[-k]_j:=W(N)_{j-k}$, centred at $k$. A candidate limit mixed-Hodge structure consists of this shifted filtration and an extended limiting Hodge filtration when the latter exists. This definition asserts neither their existence for every degeneration nor a semistable-reduction theorem.

## Definition references

[[def-gts-polarized-variation-of-hodge-structure-and-period-map]]

[[def-rational-mixed-hodge-structure]]

[[lem-nilpotent-lefschetz-filtration-is-canonical-and-self-dual]]

[Voisin, §§3.4.3–3.5](https://cmsa.fas.harvard.edu/media/Voisin_HSTAVharvardrevision.pdf)

## Facts & Assumptions

**Given:** The disk and family data in the Definition; and the supplied polarized variation of Hodge structure on the smooth locus.

[F1] A polarized variation consists of the integral/rational local system, flat bundle, filtration, polarization and transversality data defined in [[def-gts-polarized-variation-of-hodge-structure-and-period-map]].

[F2] A rational mixed Hodge structure is an increasing weight filtration and a decreasing Hodge filtration whose induced filtrations are opposed on each weight-graded piece ([[def-rational-mixed-hodge-structure]]).

## Proof

**Proof technique:** direct.

1.1 In local coordinates for a reduced SNC divisor, $D$ is given by $z_1\cdots z_r=0$ and logarithmic one-forms are generated by $dz_i/z_i$ for $i\le r$ and $dz_j$ for the remaining coordinates. Their exterior differential is again logarithmic, and $d\log t$ pulls back to a logarithmic one-form; therefore the displayed quotient is a well-defined cochain complex. [F1, given, algebra]

2.1 If $T=I+U$ with $U^m=0$, every term of the logarithm series of degree at least $m$ vanishes, so $N$ is a finite polynomial in $T-I$. The candidate filtrations are only named data; their existence as a limit MHS remains the later theorem's obligation. [F2, given, algebra] ∎

## Remarks

A proper algebraic family with reduced SNC central fibre is a geometric specialization with its own hypotheses. For a general polarized analytic variation, quasi-unipotence and the passage to unipotent monodromy must be proved separately; the word “degeneration” does not imply either conclusion.
