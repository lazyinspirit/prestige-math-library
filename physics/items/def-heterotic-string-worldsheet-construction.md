---
id: def-heterotic-string-worldsheet-construction
kind: definition
title: "Heterotic String Worldsheet Construction"
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
category: string-theory
library: physics
dependency_level: 7
domain: physics
physical_scope: "Definition of the flat ten-dimensional heterotic left-moving RNS and right-moving bosonic lattice sectors for a specified rank-16 lattice. Modular invariance of the full heterotic GSO sum and the current-algebra/global-group derivation are not claimed locally."
deps:
  - post-rns-flat-worldsheet-model
  - def-rns-spin-structures-and-sectors
  - def-rns-gso-projection
  - def-positive-even-unimodular-lattice
  - def-e8-and-d16plus-rank16-lattices
  - lem-e8-d16plus-are-even-unimodular
  - pthm-rns-criticality-central-charge-cancellation
  - def-st-chiral-lattice-boson-sector
  - lem-st-chiral-lattice-boson-sector-properties
dependency_roles:
  post-rns-flat-worldsheet-model: physical-assumption
  def-rns-spin-structures-and-sectors: formulation-prerequisite
  def-rns-gso-projection: formulation-prerequisite
  def-positive-even-unimodular-lattice: mathematical-premise
  def-e8-and-d16plus-rank16-lattices: mathematical-premise
  lem-e8-d16plus-are-even-unimodular: mathematical-premise
  pthm-rns-criticality-central-charge-cancellation: physical-result
  def-st-chiral-lattice-boson-sector: mathematical-premise
  lem-st-chiral-lattice-boson-sector-properties: mathematical-premise
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Timo Weigand, Introduction to String Theory, Winter term 2011/12"
      url: "https://www.thphys.uni-heidelberg.de/courses/weigand/Strings11-12.pdf"
      locator: "§6.5, equations (6.111)–(6.114), printed p. 142: fermion parity; §6.7, pp. 145–147: GSO sectors; §6.9, p. 154: left RNS/right bosonic heterotic pairing."
    - title: "Paul Ginsparg, Applied Conformal Field Theory, Les Houches lectures, arXiv:hep-th/9108028v1"
      url: "https://arxiv.org/pdf/hep-th/9108028v1"
      locator: "Chapter 7, printed pp. 104–107: chiral fermion bosonization and E8/rank-16 even self-dual lattice sectors."
    - title: "David J. Gross, Jeffrey A. Harvey, Emil Martinec, and Ryan Rohm, Heterotic String, Physical Review Letters 54 (1985), 502–505"
      url: "https://doi.org/10.1103/PhysRevLett.54.502"
      locator: "Abstract: ten-dimensional consistency permits gauge groups Spin(32)/Z2 or E8×E8."
    - title: "Thomas Mohaupt, Selected Topics in String Theory, Liverpool PGR lecture notes (2022)"
      url: "https://pcwww.liv.ac.uk/~mohaupt/Selected_Topics_2022.pdf"
      locator: "§2.4, pp. 21–23: rank-16 lattice constructions and the association of E8×E8 and D16+ with gauge groups E8×E8 and Spin(32)/Z2."
    - title: "Brett McInnes, The Semispin Groups in String Theory, arXiv:hep-th/9906059v1"
      url: "https://arxiv.org/pdf/hep-th/9906059v1"
      locator: "§II, PDF pp. 4–8: Clifford volume element, central quotients, and the heterotic Semispin(32) convention."
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

Fix a positive-definite even self-dual rank-16 lattice $\Lambda\subset V$, with a lattice basis, in the preceding lattice and chiral-boson conventions. Work with closed oriented strings in the flat target $M=\mathbb R^{1,9}$, with metric $\eta=\operatorname{diag}(-,+,\ldots,+)$, orientation $dx^0\wedge\cdots\wedge dx^9$, and units $\hbar=c=1$, $[\alpha']=L^2$. The ten-dimensional heterotic worldsheet construction pairs the left chiral part of the adopted free RNS model with a right bosonic sector of ten noncompact target coordinates and the internal chiral lattice state space $\mathcal V_\Lambda$. The two noncompact chiral parts carry the same target momentum. Internal momenta $\lambda\in\Lambda$ are dimensionless lattice labels, with weight $\langle\lambda,\lambda\rangle/2$; all oscillator state spaces here are algebraic, with finite excitations.

Choose the following left spin sectors and GSO projection, in the RNS spin-sector and GSO conventions. On the cylinder $(\tau,\sigma)\in\mathbb R\times(\mathbb R/2\pi\mathbb Z)$ include both NS fermions, with $\psi_L^\mu(\tau,\sigma+2\pi)=-\psi_L^\mu(\tau,\sigma)$ and half-integer modes, and R fermions, with periodicity and integer modes. Their fermion Fock spaces are the exterior algebras of negative modes over the NS vacuum or a single complex irreducible ten-dimensional target Clifford module in R, as specified by the spin-sector definition. Let $F_L$ count nonzero fermionic oscillator excitations modulo two, with NS vacuum parity zero. On the Ramond ground module fix $\{\Gamma^\mu,\Gamma^\nu\}=2\eta^{\mu\nu}I$ and $\Gamma_{11}=\Gamma^0\cdots\Gamma^9$. Retain precisely the images of
$$P_{NS}=\tfrac12\bigl(I+(-1)^{F_L+1}\bigr),\qquad P_R=\tfrac12\bigl(I+\Gamma_{11}(-1)^{F_L}\bigr).$$
Thus the left sector is $NS^+\oplus R^+$, with $\epsilon_L=+1$ in the GSO definition: the NS vacuum is removed and the retained Ramond ground states have $\Gamma_{11}=+1$. Pair each retained left sector with the same right bosonic lattice sector. There is no right RNS spin sector or right RNS GSO sign. These specify sector data before physical-state constraints; they do not define a full spin-structure measure or prove modular invariance. The matter central charges are $c_L=15$ and $c_R=10+16=26$, before ghost contributions.

The inputs $E_8\oplus E_8$ and $D_{16}^+$ give the familiar source-reported connected gauge-group choices $E_8\times E_8$ and $G_{32}$, respectively. To fix the global-form notation, form the real Clifford algebra generated by an oriented orthonormal basis $e_1,\ldots,e_{32}$ with $e_ie_j+e_je_i=-2\delta_{ij}$. Its subgroup of products of an even number of unit vectors is $\operatorname{Spin}(32)$. Put $\omega=e_1\cdots e_{32}$ and define $G_{32}=\operatorname{Spin}(32)/\{1,\omega\}$. This is the semispin quotient denoted $\operatorname{Spin}(32)/\mathbb Z_2$ here; the quotient by $\{1,-1\}$ instead gives $SO(32)$. The source-reported lattice-to-group association uses the half-spin convention in which $h_{16}=(1/2,\ldots,1/2)$ labels the half-spin representation on which $\omega$ acts as $+1$. No derivation of the current algebra or global gauge group, exhaustive classification of heterotic constructions, or empirical assertion is included.

## Definition references

[Timo Weigand, Introduction to String Theory, Winter term 2011/12](https://www.thphys.uni-heidelberg.de/courses/weigand/Strings11-12.pdf)

[Paul Ginsparg, Applied Conformal Field Theory, Les Houches lectures, arXiv:hep-th/9108028v1](https://arxiv.org/pdf/hep-th/9108028v1)

[David J. Gross, Jeffrey A. Harvey, Emil Martinec, and Ryan Rohm, *Heterotic String*, Physical Review Letters 54 (1985), 502–505](https://doi.org/10.1103/PhysRevLett.54.502), abstract.

[Thomas Mohaupt, *Selected Topics in String Theory*, Liverpool PGR lecture notes (2022)](https://pcwww.liv.ac.uk/~mohaupt/Selected_Topics_2022.pdf), §2.4, pp. 21–23.

[Brett McInnes, *The Semispin Groups in String Theory*, §II](https://arxiv.org/pdf/hep-th/9906059v1).

[[post-rns-flat-worldsheet-model]]

[[def-rns-spin-structures-and-sectors]]

[[def-rns-gso-projection]]

[[def-positive-even-unimodular-lattice]]

[[def-e8-and-d16plus-rank16-lattices]]

[[lem-e8-d16plus-are-even-unimodular]]

See the lattice-sector definition and proof on this page. The right-moving internal state space is the rank-16 specialization of [[def-st-chiral-lattice-boson-sector]]; [[lem-st-chiral-lattice-boson-sector-properties]] proves its local vertex algebra, weight, and central-charge interfaces. The left matter central charge is the $D=10$ value from [[pthm-rns-criticality-central-charge-cancellation]], and the right matter central charge is 10+16=26 by the rank calculation in the lattice-sector lemma. The associations of the two named lattices to the current algebras and global gauge groups are retained as source-reported construction data; this item does not claim to derive their global forms or to classify all modular invariants.
