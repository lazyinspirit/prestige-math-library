---
id: def-cft-r5-two-dimensional-bootstrap-system
kind: definition
title: Full 2D conformal-bootstrap data and crossing equation
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 1
domain: mathematics
library: physics
deps:
  - def-cft-r5-full-local-cft-data
  - def-virasoro-highest-weight-module
dependency_roles:
  def-cft-r5-full-local-cft-data: mathematical-premise
  def-virasoro-highest-weight-module: mathematical-premise
justified_by: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Paul Ginsparg, Applied Conformal Field Theory, Les Houches lectures (1988; published 1989), arXiv:hep-th/9108028v1"
      url: https://arxiv.org/pdf/hep-th/9108028v1
      locator: "§3.7, printed pp. 42–45: associativity, four-point crossing, chiral blocks, and the full-correlator single-valuedness/basis-independence requirements."
      source_limit: "Pedagogical lecture notes. They explain crossing as a consistency condition but do not prove convergence or existence for arbitrary CFT data."
    - title: "Stefanos R. Kousvos, Alessandro Piazza, Alessandro Vichi, Exploring Replica-Potts CFTs in Two Dimensions, arXiv:2405.19416v1 (2024-05-29)"
      url: https://arxiv.org/pdf/2405.19416v1
      locator: "§1, §§2.1–2.3, §4.4, Appendix A.7–A.9, and Appendix B: global-block crossing, symmetry channels, tensor structures, mixed-correlator sum rules, and numerical truncations."
      source_limit: "This is a source for a finite global-conformal numerical study. It does not establish full Virasoro-block convergence, a unique CFT, or existence of full local CFT data."
    - title: "Falk Rohsiepe, On Reducible but Indecomposable Representations of the Virasoro Algebra, arXiv:hep-th/9611160v1"
      url: https://arxiv.org/pdf/hep-th/9611160v1
      locator: "§2 Definitions 2.1–2.2; §3.1 Eqs. (11)–(16); §4 Lemma and Definition 4.1. The source's modes have the opposite index convention."
      source_limit: "Used to distinguish eigenvector-generated modules from generalized-weight modules with nilpotent zero-mode parts; no classification or analytic block-existence theorem is imported."
verification:
  precheck: n/a
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Definition

A full 2D bootstrap system consists of a local spectrum of left/right representations, structure constants, convergent OPE/block expansions, single-valuedness, and equality of expansions in crossed channels under explicitly stated hypotheses. It is a data package extending the full local two-dimensional CFT data package on its sphere sector; it is not a theorem that the data exist for any proposed model.

The base package fixes a connected oriented Riemann surface, its dimensionless complex coordinates, a complete Hausdorff locally convex state space, a dense common domain, two commuting left/right Virasoro actions with central charges $c_L,c_R$, a vacuum functional, a state-field correspondence, and weak local fields. Its radial OPEs have declared domains, coefficient functions, branch conventions, topology, and absolutely locally uniformly convergent matrix coefficients. Bosonic data have integral spin, single-valued correlators, and commuting fields with disjoint supports; spin data instead specify the spin structure, parity, and supercommutation rule. The base package requires equality of all iterated OPE trees on common domains and after declared analytic continuation. Those conditions are part of the data and hypotheses, not consequences of a formal crossing equation.

For the bootstrap decomposition, choose a set $\Lambda$ of joint left/right sector labels. Each label specifies the sector's two commuting Virasoro actions with scalar central charges $c_L,c_R$, its multiplicity spaces, topology, and invariant algebraic core in the common domain. Declare whether its chiral modules are ordinary highest-weight modules or generalized-weight modules as defined below. In the ordinary case specify highest weights $(h_\alpha,\bar h_\alpha)$. A highest-weight vector $v$ in a left module satisfies $L_nv=0$ for every $n>0$, $L_0v=h v$, and the central basis element acts by $c_L$; the right module satisfies the barred analogues with $c_R$. A highest-weight module is the span of finite words in Virasoro generators applied to such a vector. This convention alone asserts neither irreducibility nor unitarity.

A generalized-weight sector instead supplies an invariant core $M=\bigoplus_{(h,\bar h)\in P}M_{[h,\bar h]}$, where $P\subseteq\mathbb C^2$ is specified and $M_{[h,\bar h]}$ consists of the vectors killed by some positive powers of both $L_0-hI$ and $\bar L_0-\bar hI$. Give the complete mode actions, including all extension data, with $L_nM_{[h,\bar h]}\subseteq M_{[h-n,\bar h]}$ and $\bar L_nM_{[h,\bar h]}\subseteq M_{[h,\bar h-n]}$, interpreting absent weight spaces as zero. The commuting parts $N_L=L_0-hI$ and $N_R=\bar L_0-\bar hI$ on each joint weight space are locally nilpotent: every vector is killed by some power of each; their actions and nilpotence orders used in each block are specified. Nonzero such parts are allowed. No generation by an eigenvector is required in this alternative, and an extension is not replaced by the direct sum of its subquotients. The state space is the declared completed direct sum of the chosen sectors or a specified direct integral of them. For a direct integral, record the measurable sector family, its $\sigma$-finite measure and normalization, the measurable multiplicity fields, and the fiber construction required by the base package.

For four external scalar primary fields $\mathcal O_i$, $i=1,2,3,4$, specify their left/right weights with $h_i=\bar h_i$, their normalization, and all left/right pairing data. “Primary” here means that each corresponding state is annihilated by every positive left and right Virasoro mode and is an eigenvector of $L_0$ and $\bar L_0$ with the declared weights. More general external fields may be used when their weights, spin or parity, and exchange factors are explicitly supplied.

In each channel, the OPE coefficient tensors, intermediate-sector pairing, and multiplicity contraction define a coefficient $A_\gamma$ for every intermediate label $\gamma$. In a diagonal multiplicity-free channel this is $A_a=C_{12,a}C_{34,a^\vee}$, where $a^\vee$ is the sector paired to $a$ by the declared two-point form. In a general spectrum, $\gamma$ includes independent left and right labels and all multiplicity indices; $A_\gamma$ is the complete contraction of the two OPE coefficient tensors with the specified pairing. If that pairing or coefficient space is infinite dimensional, its topology and contraction must be part of the data.

A chiral block for channel $s$ and label $\gamma$ is the specified holomorphic matrix-coefficient function $\mathcal F^s_\gamma(z)$ on a declared branch domain or cover, contributed by the chosen intermediate module and its descendants to the iterated chiral OPE. For ordinary intermediate highest-weight modules and external primary fields $1,2$, its reduced local expansion begins with $z^{h_\gamma-h_1-h_2}$ times a declared convergent power series; its coefficient normalization and any external-coordinate prefactor are fixed separately. For generalized-weight modules, instead specify the intermediate exponents, the finite powers of $\log z$ and their convergent coefficient series, branches, and contractions with the nilpotent parts; do not impose the ordinary pure-power expansion. The right-moving block $\widetilde{\mathcal F}^s_\gamma(\bar z)$ is specified independently, with the corresponding barred conventions; it is not assumed to be the complex conjugate unless the chosen reality and pairing conditions say so. The existence, dimension, and analytic continuation of block spaces are supplied data, not inferred from a module definition.

Place four marks on the Riemann sphere and use a fixed Möbius normalization with coordinates $0,z,1,\infty$. The $s$ channel fuses fields $1,2$ and $3,4$; the $t$ channel fuses $3,2$ and $1,4$. The coordinate factors fixed by the external weights are included in the declared channel blocks. Their full correlators are

$$\mathcal G_s(z,\bar z)=\sum_{\gamma\in\Lambda_s} A^s_\gamma\,\mathcal F^s_\gamma(z)\,\widetilde{\mathcal F}^s_\gamma(\bar z),\qquad \mathcal G_t(z,\bar z)=\sum_{\eta\in\Lambda_t} A^t_\eta\,\mathcal F^t_\eta(1-z)\,\widetilde{\mathcal F}^t_\eta(1-\bar z).$$

For a continuous spectrum, replace each sum by an integral against the exact channel measure. State the $s$- and $t$-channel convergence domains, the order or topology of summation, and any domination or integrability hypotheses needed to interchange sums, integrals, and continuation. Require absolute local uniform convergence on compact subsets of the declared domains. The crossing equation is $\mathcal G_s=\mathcal G_t$ on every common convergence domain and after the specified analytic continuation, with the field permutation and parity signs fixed. The other pairings, including $(13)(24)$, are included whenever the full local package asserts equality of all OPE trees.

The base data carry weak local fields and radial OPE expansions converging absolutely and locally uniformly on each declared domain; the bosonic case requires integral spin, single-valued correlators and commutation for disjoint supports; all iterated OPE trees give the same vacuum correlator on common domains and after the declared continuation. For diagonal multiplicity-free scalar fields, the displayed crossing equation specializes to

$$\sum_a C_{12,a}C_{34,a^\vee}\,\mathcal F_a(z)\widetilde{\mathcal F}_a(\bar z)=\sum_b C_{32,b}C_{14,b^\vee}\,\mathcal F_b(1-z)\widetilde{\mathcal F}_b(1-\bar z).$$

Unitary, reflection-positive, rational, discrete-spectrum, and continuous-spectrum flags are recorded separately. Any positivity bound must name the inner product, adjoint or reflection structure, and positive form that licenses it. Nonrational spectra must give their measures and integrability conditions. A formal solution of crossing equations without the state-space, local-field, OPE convergence, and locality data above is only a formal crossing solution; it is not, by itself, a full local CFT datum.

## Definition references

[[def-cft-r5-full-local-cft-data]]

[[def-virasoro-highest-weight-module]]

## Remarks

The planned R1 radial-convergence result is scoped to its stated unitary positive-Hilbert setup, and the R3 coinvariant definition is algebraic: its own text does not assert analytic convergence, finite rank, or equivalence with analytic blocks. This definition therefore makes analytic block functions, convergence, and channel pairings explicit data. It does not promote those planned inputs to proved suppliers or assert that any concrete nonunitary, logarithmic, or continuous-spectrum model satisfies the conditions.

The full-local package is genus zero. No higher-genus sewing, modular invariance, path-integral construction, or equivalence with OS, net, or Segal formulations is included by this definition.
