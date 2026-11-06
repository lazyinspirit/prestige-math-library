---
id: def-gts-lagrangian-branes-and-filtered-curved-a-infinity-fukaya-operations
kind: definition
title: FOOO single-object filtered curved A-infinity algebra
status: published
origin: pipeline
domain: mathematics
library: physics
dependency_level: 10
deps:
- def-axiom-of-choice
- def-gts-symplectic-and-almost-complex-curve-data
- def-gts-relatively-spin-lagrangian-data
- def-gts-stable-j-holomorphic-disks-with-boundary-markings
- lem-gts-relative-disk-area-invariant
- lem-gts-novikov-completion-is-filtered-ring
- lem-gts-tame-j-holomorphic-area-is-dirichlet-energy
- lem-gts-geometrically-tame-disk-compactness-and-real-nodal-atlas
- thm-gts-rational-collared-disk-virtual-correspondences
- lem-gts-rational-filtered-curved-transfer-to-singular-chains
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-gts-symplectic-and-almost-complex-curve-data: mathematical-premise
  def-gts-relatively-spin-lagrangian-data: mathematical-premise
  def-gts-stable-j-holomorphic-disks-with-boundary-markings: mathematical-premise
  lem-gts-relative-disk-area-invariant: mathematical-premise
  lem-gts-novikov-completion-is-filtered-ring: mathematical-premise
  lem-gts-tame-j-holomorphic-area-is-dirichlet-energy: mathematical-premise
  lem-gts-geometrically-tame-disk-compactness-and-real-nodal-atlas: mathematical-premise
  thm-gts-rational-collared-disk-virtual-correspondences: mathematical-premise
  lem-gts-rational-filtered-curved-transfer-to-singular-chains: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
  - title: Fukaya, Oh, Ohta, and Ono, Lagrangian Floer Theory on Compact Toric Manifolds I, arXiv:0802.1703v3
    url: https://arxiv.org/pdf/0802.1703v3
    locator: §3, printed pp. 15–19, shifted bar definition, curvature, Novikov completion, disk operations and Theorem 3.8
verification:
  precheck: n/a
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Definition

For the actual rational chain model specified below, assume the Full Axiom of Choice. Its uses are the coherent sequence of finite perturbation choices across energy cutoffs and the degreewise rational Hamel splittings in the transfer to the full continuous-singular-chain complex. These are conditional construction data; they do not assert that an arbitrary pointwise-tame $J$ admits the required virtual procedure.

Fix a compact relatively spin Lagrangian $L$ in a smooth symplectic manifold $(M,\omega)$ with a chosen smooth $\omega$-tame almost-complex structure $J$. Use the relative-spin data and stable disk domains defined on this page. Take the $\mathbb Z/2$-graded source convention without the auxiliary formal degree variable $e$, over the positive-energy Novikov subring $\Lambda^0_{\nu,\mathbb Q}$ with $\Gamma=\mathbb R$ and $\nu(\lambda)=\lambda$. Let $n=\dim L$ and let $C_*(L;\mathbb Q)$ be the underlying singular chain complex generated in HOMOLOGICAL degree $r$ by continuous maps $\sigma:\Delta^r\to L$, with differential the alternating sum of face restrictions. Use the source COHOMOLOGICAL regrading $C^q(L;\mathbb Q)=C_{n-q}(L;\mathbb Q)$ before taking parity, extension of coefficients and completion; its differential has degree $+1$. Let $C$ be the resulting cohomologically graded completion after extension of coefficients to $\Lambda^0_{\nu,\mathbb Q}$ in the energy filtration, so $F^\lambda C$ consists of series whose nonzero energy terms all have exponent at least $\lambda$. The operations depend on a specified coherent orientation and chain-valued virtual procedure. In the source geometrically tame regime and admissible auxiliary almost-complex data, [[lem-gts-geometrically-tame-disk-compactness-and-real-nodal-atlas]] and [[thm-gts-rational-collared-disk-virtual-correspondences]] construct such disk correspondences. Here geometrically tame means the complete bounded-geometry metric and uniform taming bounds defined in the former supplier; it is stronger than pointwise tameness of an arbitrary chosen J. The present Definition still allows the originally specified smooth pointwise-tame J as data conditional on its chosen virtual procedure, and does not assert that every such J is admissible.

For $k\ge0$ and a relative class $\beta$, the source operation $m_{k,\beta}$ is the evaluation push-forward of the virtual-chain fiber product of the stable disk moduli $\mathcal M_{k+1}(\beta;L,J)$ with its $k$ input chains along $ev_1,\ldots,ev_k$, using $ev_0$ as output; this phrase denotes its chain-model correspondence, with an explicit choice of comparison. One actual rational choice is the finite Morse/tree virtual model from [[thm-gts-rational-collared-disk-virtual-correspondences]], followed by the rational filtered curved transfer in [[lem-gts-rational-filtered-curved-transfer-to-singular-chains]] to ALL continuous singular chains with their original boundary differential. Its transferred operations are filtered A-infinity equivalent to the geometric evaluation correspondence; literal simplexwise equality to an unspecified smooth fiber integral is not asserted. The choice of chain comparison is part of the virtual procedure. The source's relative class is defined across its stable-domain strata and supplies the energy $E_\omega(\beta)$; the fixed-domain relative-area lemma is supplemented by the explicit node-collapse homotopy of [[lem-gts-geometrically-tame-disk-compactness-and-real-nodal-atlas]], defining the global free relative disk class by oriented rooted-tree collapse and proving its homotopy compatibility across strata. Fixed-domain component annotations are retained. Its integral homology image is additive, including torsion; homotopy classes are not silently replaced by homology. Weight it by $T^{E_\omega(\beta)}$ and set $m_k=\sum_\beta m_{k,\beta}T^{E_\omega(\beta)}$, interpreted as the source's energy-filtration sum when it converges. The curvature term $m_0$ is retained. The shift is $C[1]^q=C^{q+1}$, so an element of unshifted cohomological degree $d$ has shifted degree $d-1$; it reverses parity. For insertion before the $i$th input the Koszul sign is $(-1)^{\sum_{j<i}(d_j-1)}$, equivalently $(-1)^{\sum_{j<i}d_j+i-1}$. Here $d_j$ always denotes the unshifted COHOMOLOGICAL degree, not singular-chain dimension. The shift $C[1]$ therefore uses this regrading; the bar coalgebra is the algebraic direct sum $B(C[1])=\bigoplus_{r\ge0}(C[1])^{\otimes r}$, with $B_0(C[1])=\Lambda^0_{\nu,\mathbb Q}$ and deconcatenation coproduct. The coefficient chain module $C$ is completed in the energy filtration; no completion in tensor length is asserted. On the bar coalgebra, each $m_k$ extends as the source coderivation $\widehat m_k$ of degree $1$. Define $F^{>0}C=\bigcup_{\lambda>0}F^\lambda C$. The package is a filtered curved A-infinity algebra when each $m_k$ is continuous and filtration-preserving, $m_0\in F^{>0}C[1]$, and $D=\sum_{k\ge0}\widehat m_k$ satisfies $D^2=0$.

This is a single-object algebra interface; it is not a multi-object Fukaya category. In §3 the cited article first describes its moduli and operations for a chosen compatible almost-complex structure, then Theorem 3.8 states the identity $D^2=0$ for an arbitrary compact relatively spin $L$ in an arbitrary tame symplectic manifold, without separately quantifying over every chosen tame $J$. It refers the complete proof to the FOOO trilogy. Thus the local definition permits a chosen tame $J$ as data, but it does not strengthen that source-reported theorem to every fixed tame $J$, nor assert the geometric construction for inadmissible chosen data. The attached suppliers give a local construction in that source geometrically tame regime, and the identity theorem below applies to its chosen rational comparison model.

## Definition references

[[def-gts-symplectic-and-almost-complex-curve-data]]

[[def-gts-relatively-spin-lagrangian-data]]

[[def-gts-stable-j-holomorphic-disks-with-boundary-markings]]

[[lem-gts-relative-disk-area-invariant]]

[[lem-gts-novikov-completion-is-filtered-ring]]

[[lem-gts-tame-j-holomorphic-area-is-dirichlet-energy]]

[[lem-gts-geometrically-tame-disk-compactness-and-real-nodal-atlas]]
[[thm-gts-rational-collared-disk-virtual-correspondences]]
[[lem-gts-rational-filtered-curved-transfer-to-singular-chains]]

[[def-axiom-of-choice]]
