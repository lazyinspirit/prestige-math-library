---
id: def-cft-r5-compact-boson-full-theory
kind: definition
title: Compact free boson as a full local CFT
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 3
domain: mathematics
library: mathematics
physical_scope: null
deps:
  - def-cft-r5-full-local-cft-data
  - def-conformal-vertex-algebra
  - def-rank-one-heisenberg-vertex-algebra
  - thm-rank-one-heisenberg-vertex-operator-algebra
  - def-cft-r5-charged-heisenberg-fock-space
  - lem-cft-r5-charged-heisenberg-fock-module
  - def-cft-r5-compact-boson-charge-lattice-and-cocycle
  - lem-cft-r5-compact-boson-lattice-is-even-self-dual-and-local
dependency_roles:
  def-cft-r5-full-local-cft-data: mathematical-premise
  def-conformal-vertex-algebra: mathematical-premise
  def-rank-one-heisenberg-vertex-algebra: mathematical-premise
  thm-rank-one-heisenberg-vertex-operator-algebra: mathematical-premise
  def-cft-r5-charged-heisenberg-fock-space: mathematical-premise
  lem-cft-r5-charged-heisenberg-fock-module: mathematical-premise
  def-cft-r5-compact-boson-charge-lattice-and-cocycle: mathematical-premise
  lem-cft-r5-compact-boson-lattice-is-even-self-dual-and-local: mathematical-premise
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: Paul Ginsparg, Applied Conformal Field Theory, Les Houches 1988, arXiv:hep-th/9108028v1
      url: https://arxiv.org/pdf/hep-th/9108028v1
      locator: Section 8.1, printed pp. 108–115, action and measure normalization, momentum-winding charges, oscillator sectors, and torus trace.
    - title: Pavel Mnev and Nicolai Reshetikhin, Lecture notes on conformal field theory
      url: https://academicweb.nd.edu/~pmnev/f22/CFT_book.pdf
      locator: Sections 6.1.5–6.1.6, printed pp. 198–200, Hamiltonian torus trace, compact-boson charge sectors, and radius duality.
    - title: Lorenz Eberhardt and Nat Levine, Classification of c=1 CFTs, arXiv:2609.16111v1
      url: https://arxiv.org/pdf/2609.16111v1
      locator: "Theorem 1.1, footnote 3: the radius conversion R=sqrt(2) r and the self-dual values R=1 and r=1/sqrt(2)."
verification:
  precheck: n/a
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Definition

Fix a connected oriented Euclidean worldsheet $\Sigma$ with a complex structure and local dimensionless coordinate $z=x+iy$. Set $\hbar=1$. For this definition the symbol $r>0$ is a dimensionless CFT coupling. The normalization label
$$S[X]=\frac{1}{2\pi}\int_\Sigma \partial X\,\bar\partial X\,d^2z,\qquad X\sim X+2\pi r$$
records the Ginsparg convention for the quadratic mode normalization. It is not a functional measure and does not identify $r$ with a dimensional target-space length. A conversion to a physical radius requires an explicit $\alpha'$ and measure convention.

On a spatial cylinder with $\sigma\sim\sigma+2\pi$, a winding sector $n\in\mathbb Z$ obeys $X(\sigma+2\pi)=X(\sigma)+2\pi rn$. The compact zero-mode coordinate has period $2\pi r$, so its momentum eigenfunctions are $e^{imX_0/r}$ with $m\in\mathbb Z$. In this normalization the left/right charges are $p_L=m/(2r)+nr$ and $p_R=m/(2r)-nr$. The charge labels and cocycle are fixed by the separate compact-boson lattice definition.

The left/right state space is the completed Hilbert direct sum
$$\mathcal H_r=\widehat{\bigoplus}_{(m,n)\in\mathbb Z^2}F_{p_L(m,n;r)}\widehat\otimes\overline{F}_{p_R(m,n;r)}.$$
The direct-sum topology is the Hilbert direct-sum norm. The algebraic finite-energy subspace consists of finite linear combinations of charge labels and oscillator monomials. Use the positive Fock inner products specified for the charged sectors. The left and right Virasoro central charges are $c_L=c_R=1$, and the joint weights are
$$h=\frac{p_L^2}{2}+N,\qquad \bar h=\frac{p_R^2}{2}+\bar N,$$
where $N,\bar N\in\mathbb Z_{\ge0}$ are oscillator levels. The vacuum is the unique oscillator vacuum in the $(m,n)=(0,0)$ sector; the correlator functional is its vacuum coefficient.

Let $H_r=1+L_0+\bar L_0$ be the positive diagonal energy operator on this Hilbert direct sum, and take the common dense domain $\mathcal D_r=\bigcap_{k\ge0}\operatorname{Dom}(H_r^k)$ with seminorms $u\mapsto\|H_r^k u\|$. Its finite-energy vectors are dense. Give each compactly supported smooth test-function space $C_c^\infty(U)$ its usual topology of uniform convergence of every derivative on each fixed compact support. The weak field smearings and the state-field bijection are part of the model data on $\mathcal D_r$; require them to preserve this common domain and satisfy the continuity, covariance, and vacuum-limit clauses of the full-local-CFT data definition cited below.

The finite-energy field labels are the span of the lattice vertex fields $V_{m,n}$ and their finite left/right Heisenberg descendants. Fix the linear identification $\sigma_r$ of this label space with the finite-energy state space by sending $V_{m,n}$ to its highest-weight charge state and the normally ordered derivative fields to the corresponding oscillator descendants. Give this label space the pulled-back seminorms $a\mapsto\|H_r^k\sigma_r(a)\|$, $k\geq0$, and define $\mathcal F_r$ to be its completion. The identification extends to the chosen state-field bijection $\sigma_r:\mathcal F_r\to\mathcal D_r$ with the common-domain topology specified above. Equivalently, $\sigma_r^{-1}$ sends each highest-weight charge state to $V_{m,n}$ and oscillator descendants to the normally ordered derivative field labels. The identity field is $V_{0,0}$, with $\sigma_r(V_{0,0})=\Omega$. The charged-mode action and oscillator VOA use the exact charged-Fock and rank-one Heisenberg results listed in Definition references.

On the charge-$q_0$ sector, $V_q$ shifts $q_0$ to $q+q_0$ with cocycle $\varepsilon(q,q_0)$. Its radial representative is the normal-ordered product of the left and right exponential operators in the compact-boson lattice definition. On $|z|>|w|$ its leading OPE term is
$$V_q(z,\bar z)V_{q'}(w,\bar w)=\varepsilon(q,q')(z-w)^{p_L(q)p_L(q')}(\bar z-\bar w)^{p_R(q)p_R(q')}V_{q+q'}(w,\bar w)+\text{descendants}.$$
Use the branch obtained by radial continuation from positive real $z-w$ and $\bar z-\bar w$. The separate lattice lemma proves the cocycle identity, locality, integral spin, OPE associativity, and local uniform convergence of the oscillator expansions on compact subsets of nested radial domains.

The weak smearings, branches, and convergent OPEs are required to satisfy all remaining conditions in the full-local-CFT data definition cited below, including absolute locally uniform convergence, bosonic locality and equality of iterated OPE channels. This item defines a CFT data package conditional on those analytic data; the formal quadratic action and oscillator expressions alone do not prove their existence. The package has discrete spectrum and positive Hilbert-space inner product. No rationality, reflection-positivity, or higher-genus sewing claim is made.

For the classification flags, take the unitary flag to be true: on the finite-energy core $a_k^*=a_{-k}$ and $\bar a_k^*=\bar a_{-k}$, and the field adjoint is the Hilbert adjoint of the displayed normally ordered distribution, with the charge-shift convention $U_{(m,n)}^*=(-1)^{mn}U_{(-m,-n)}$. Extend that adjoint to the chosen common domain as part of the analytic data. The discrete-spectrum flag is true and the continuous-spectrum flag false; rationality and reflection positivity are not asserted.

## Definition references

[[def-cft-r5-full-local-cft-data]]

[[def-conformal-vertex-algebra]]

[[def-rank-one-heisenberg-vertex-algebra]]

[[thm-rank-one-heisenberg-vertex-operator-algebra]]

[[def-cft-r5-charged-heisenberg-fock-space]]

[[lem-cft-r5-charged-heisenberg-fock-module]]

[[def-cft-r5-compact-boson-charge-lattice-and-cocycle]]

[[lem-cft-r5-compact-boson-lattice-is-even-self-dual-and-local]]

[Ginsparg, Section 8.1](https://arxiv.org/pdf/hep-th/9108028v1)

[Mnev–Reshetikhin, Sections 6.1.5–6.1.6](https://academicweb.nd.edu/~pmnev/f22/CFT_book.pdf)

[Eberhardt–Levine, Theorem 1.1, footnote 3](https://arxiv.org/pdf/2609.16111v1)

## Remarks

The compact boson is defined here as mathematical state-space/OPE data. No path-integral measure, dimensional target-space radius, higher-genus sewing theorem, or equivalence with another CFT axiom system is asserted. In Eberhardt–Levine's convention $R=\sqrt2\,r$; in Mnev–Reshetikhin's convention their radius is $r_{\mathrm{MR}}=2r$.
