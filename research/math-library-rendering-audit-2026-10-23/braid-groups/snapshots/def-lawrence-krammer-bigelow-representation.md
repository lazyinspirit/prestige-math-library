---
id: def-lawrence-krammer-bigelow-representation
kind: definition
title: The Lawrence-Krammer-Bigelow representation
status: published
origin: pipeline
deps: [thm-the-integral-lkb-module-is-free-of-rank-n-choose-two, lem-braids-lift-to-the-lkb-cover-and-act-lambda-linearly, def-axiom-of-choice, lem-lkb-lifted-absolute-cellular-boundary-and-fraction-field-rank]
justified_by: []
aliases: []
dependency_level: 10
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Bigelow, Braid groups are linear, J. Amer. Math. Soc. 14 (2001) 471-486"
      url: "https://web.math.ucsb.edu/~bigelow/publications/03.pdf"
      locator: "Section 1.2, printed p. 473 and Theorem 1.1: the representation as the action on H_2(C-tilde), with the normalized lifts"
    - title: "Bigelow, The Lawrence-Krammer representation, arXiv:math/0204057v1"
      url: "https://arxiv.org/pdf/math/0204057"
      locator: "Sections 2.1 and 4, printed pp. 3 and 8-13: the module H_2(C-tilde), the integral basis, and the comparison with Krammer's matrix model"
    - title: "Krammer, Braid groups are linear, Ann. of Math. 155 (2002) 131-156"
      url: "https://arxiv.org/pdf/math/0405198"
      locator: "Section 3, printed pp. 139-142: the generic fraction-field matrix model with basis x_{ij}"
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
    scope: "historical complete Step5 reader; item def-lawrence-krammer-bigelow-representation; evidence research/frontier-38-owner-30-reader-16.md, research/frontier-38-owner-30-reader-findings-16.json. Original reports retain their scope and source limitations; no recursive audit of all published prerequisites or complete bibliography is claimed. Restored from completed 2026-10-03 evidence; no new audit performed."
    delegated_by: "tools/autopilot frontier-38-owner-30 historical dispatched reader/repair lane"
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
---
## Definition

Assume AC. Let $D$ be the closed unit disk,
$P=\{p_1,\dots,p_n\}\subset\operatorname{int}D$ the puncture set in the
standard configuration, $C$ the unordered two-point configuration space of
$D\setminus P$ with its basepoint $c_0$, and $\widetilde C\to C$ the LKB cover
with basepoint lift $\tilde c_0$, deck group
$\mathbb Z^2=\langle q\rangle\oplus\langle t\rangle$ and coefficient ring
$\Lambda=\mathbb Z[q^{\pm1},t^{\pm1}]$
([[def-two-point-configuration-space-of-a-punctured-disk]],
[[def-lawrence-krammer-bigelow-cover]]).

By [[thm-braid-group-is-the-boundary-fixed-mapping-class-group-of-the-punctured-disk]]
the classical braid group $B_n$ is identified with the boundary-fixed mapping
class group $\operatorname{Mod}(D,P;\partial D)$: homeomorphisms of $D$ fixing
$\partial D$ pointwise and preserving $P$ setwise, modulo isotopy relative to
$\partial D\cup P$. Let $[\sigma]\in B_n$ and let $\sigma$ be a representative.
By [[lem-braids-lift-to-the-lkb-cover-and-act-lambda-linearly]] there is a
unique lift $\widetilde\sigma$ of $\sigma$ to $\widetilde C$ fixing
$\tilde c_0$; it commutes with every deck transformation, and its induced
automorphism
$$\widetilde\sigma_*:H_2(\widetilde C;\mathbb Z)\longrightarrow H_2(\widetilde C;\mathbb Z)$$
is $\Lambda$-linear and invertible. The assignment
$[\sigma]\mapsto\widetilde\sigma_*$ is independent of the representative and
multiplicative, so it defines a homomorphism
$$B_n\longrightarrow\operatorname{Aut}_\Lambda H_2(\widetilde C;\mathbb Z).$$

The **Lawrence-Krammer-Bigelow representation** is this homomorphism composed
with the matrix presentation of the target: fix once and for all the
$\Lambda$-basis $\{v_{i,j}:1\le i<j\le n\}$ of
$H_2(\widetilde C;\mathbb Z)$ supplied for $n\ge2$ by
[[thm-the-integral-lkb-module-is-free-of-rank-n-choose-two]].
For $n=1$ the basis is empty and $H_2=0$: the absolute cellular rank and
localization injection of [[lem-lkb-lifted-absolute-cellular-boundary-and-fraction-field-rank]]
give rank0 and therefore zero homology. They apply to the disk as well as the
plane: choose a radial collar outside all punctures and compress its boundary
strictly inward by a strictly increasing radius map fixed below the collar.
Interpolating that map with the identity keeps every two-point configuration
collision-free and gives inverse homotopies for interior inclusion. The
homotopy preserves puncture and mutual winding characters; the moving
basepoint is transported along its specified track. The open disk is
orientation-preservingly radially homeomorphic to the plane, taking real
punctures to real punctures in the same order. This transfers the absolute
cover calculation. Define
$$\rho_{\mathrm{LKB}}:B_n\longrightarrow \mathrm{GL}_{\binom n2}(\Lambda),\qquad \rho_{\mathrm{LKB}}([\sigma])=\text{the matrix of } \widetilde\sigma_* \text{ in the basis } \{v_{i,j}\}.$$
Thus $\rho_{\mathrm{LKB}}$ is the action of $B_n$ on the absolute integral
module $H_2(\widetilde C;\mathbb Z)$; the relative modules and the pairing are
not used in its definition, and the Axiom of Choice is used exactly in the
identification of $B_n$ with the boundary-fixed mapping class group, which
supplies the normalized lifts above.

Two caveats are part of the definition. First, the target is the integral
matrix group over $\Lambda$; by
[[thm-the-integral-lkb-module-is-free-of-rank-n-choose-two]] the basis
$\{v_{i,j}\}$ is not related to Krammer's matrix basis by a $B_n$-equivariant $\Lambda$-isomorphism when
$n\ge3$, and only the fraction-field models are identified. Second, the
normalization by the lift fixing $\tilde c_0$ is essential: replacing it by
another lift multiplies $\widetilde\sigma_*$ by a deck transformation, i.e. by
a monomial $q^at^b$, so the matrix of $\rho_{\mathrm{LKB}}([\sigma])$ below is
the one computed from this fixed normalization.
