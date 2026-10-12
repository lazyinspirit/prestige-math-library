---
id: ex-nrqm-framework-quantity-type-checks
kind: example
title: "Type checks: rays, density operators, mixtures, local quantities and outcome laws"
status: draft
origin: session
domain: physics
dependency_level: 5
deps: [def-nrqm-framework-quantities-and-units, post-nrqm-framework-state-and-composition, post-nrqm-framework-observable-and-probability, post-nrqm-framework-identical-particles-and-spin, lem-nrqm-composites-density-and-scalar-spectral-probability, lem-nrqm-composites-rank-one-operator-calculus, lem-nrqm-composites-bounded-tensor-maps, prop-nrqm-orbital-and-spin-finite-spin-matrices, thm-separable-hilbert-space-has-a-countable-orthonormal-basis]
dependency_roles:
  def-nrqm-framework-quantities-and-units: formulation-prerequisite
  post-nrqm-framework-state-and-composition: formulation-prerequisite
  post-nrqm-framework-observable-and-probability: formulation-prerequisite
  post-nrqm-framework-identical-particles-and-spin: formulation-prerequisite
  lem-nrqm-composites-density-and-scalar-spectral-probability: mathematical-premise
  lem-nrqm-composites-rank-one-operator-calculus: mathematical-premise
  lem-nrqm-composites-bounded-tensor-maps: mathematical-premise
  prop-nrqm-orbital-and-spin-finite-spin-matrices: mathematical-premise
  thm-separable-hilbert-space-has-a-countable-orthonormal-basis: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "Worked type checks on the smallest nontrivial instances of the framework's state and observable assumptions: a pure spin-one-half preparation as a unit ray and as a rank-one density operator, a statistical mixture of two orthogonal pure preparations, the action of a local observable on a product state of two spin factors, and the outcome law of a finite-spectrum observable as a probability measure. The item verifies the mathematical types of the adopted objects and makes no empirical claim."
sources:
  references:
    - title: "B. Zwiebach, MIT 8.05 Quantum Physics II (Fall 2013), Chapter 2 'Spin One-Half, Bras, Kets, and Operators', Sections 1-3, printed pages 1-16 (PDF pages 2-17): Stern-Gerlach preparations, spin one-half states, and Pauli-matrix algebra"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/a56c316e4ec548d8bd0a554fac9a74e8_MIT8_05F13_Chap_02.pdf"
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, Section 3.3, printed pages 92-95 (PDF files pages 104-107): probabilities from a projection-valued measure and interference of amplitudes"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
verification:
  precheck: pass
---

## Example

Check the mathematical types of the objects introduced by the postulates of
this page on explicit finite-dimensional data: the two-dimensional complex
Hilbert space $H=\mathbb C^{2}$ with its standard inner product and the
orthonormal basis $(e_{+},e_{-})$, the spin operators $S_{i}=\hbar J_{i}$ of
[[prop-nrqm-orbital-and-spin-finite-spin-matrices]] for $s=\tfrac12$, and the
composite $H\widehat\otimes H$ with the product vectors and local operators of
[[lem-nrqm-composites-bounded-tensor-maps]].

## Facts & Assumptions

**Given:** The state postulate [[post-nrqm-framework-state-and-composition]], the observable and probability postulate [[post-nrqm-framework-observable-and-probability]], the spin assignment of [[post-nrqm-framework-identical-particles-and-spin]], the Hilbert space $\mathbb C^{2}$ with orthonormal basis $(e_{+},e_{-})$ and the operators $S_{z}=\hbar J_{z}$ with $J_{z}e_{\pm}=\pm\tfrac12e_{\pm}$ of [[prop-nrqm-orbital-and-spin-finite-spin-matrices]], and the number conventions of [[def-nrqm-framework-quantities-and-units]].

[L1] Density operators and their scalar laws: a density operator is a self-adjoint positive trace-class operator with trace one; finite orthonormal expansions $\rho=\sum_{n}w_{n}T_{u_{n},u_{n}}$ with $w_{n}\ge0$, $\sum_{n}w_{n}=1$ are density operators, and for a projection-valued measure $E$ the assignment $B\mapsto\operatorname{tr}(\rho E(B))$ is a probability measure reducing to $\|E(B)\psi\|^{2}$ for the pure operator $\rho=T_{\psi,\psi}$ with $\|\psi\|=1$ ([[lem-nrqm-composites-density-and-scalar-spectral-probability]] clauses (a) and (b)).

[L2] Rank-one calculus: $T_{u,v}x=\langle x,v\rangle u$ is trace class with $\operatorname{tr}T_{u,v}=\langle u,v\rangle$, so $T_{\psi,\psi}$ is a rank-one positive operator with trace $\|\psi\|^{2}$ ([[lem-nrqm-composites-density-and-scalar-spectral-probability]], [[lem-nrqm-composites-rank-one-operator-calculus]]).

[L3] Local operators act on product vectors by $S\otimes T(\psi_{A}\otimes\psi_{B})=(S\psi_{A})\otimes(T\psi_{B})$, and bounded local operators are bounded on the completed tensor product ([[lem-nrqm-composites-bounded-tensor-maps]] clause (a)).

[L4] The spectral family of $S_{z}$ is $E_{S_{z}}(\{\hbar/2\})=P_{+}$ and $E_{S_{z}}(\{-\hbar/2\})=P_{-}$, the orthogonal projections onto the lines $\mathbb Ce_{+}$ and $\mathbb Ce_{-}$, and $\sigma(S_{z})=\{\hbar/2,-\hbar/2\}$ ([[prop-nrqm-orbital-and-spin-finite-spin-matrices]] clauses (a) and (e), [[post-nrqm-framework-observable-and-probability]] clause (ii)).

## Verification

**Proof technique:** direct; compute the objects on the displayed data.

1.1 Let $\psi:=\tfrac1{\sqrt2}(e_{+}+e_{-})$, so $\|\psi\|=1$ by orthonormality. The pure preparation is the unit ray $[\psi]=\{z\psi:z\in\mathbb C\setminus\{0\}\}$: the vector $e^{i\theta}\psi$ has the same norm and defines the same ray, and the associated density operator $T_{\psi,\psi}$ satisfies $\operatorname{tr}T_{\psi,\psi}=\|\psi\|^{2}=1$ by [L2]; hence it is a density operator in the sense of [L1]. [given, L1, L2, algebra]

1.2 Let $0<w<1$ and let $\psi_{1},\psi_{2}$ be orthonormal vectors of $H$, and put $\rho:=w\,T_{\psi_{1},\psi_{1}}+(1-w)T_{\psi_{2},\psi_{2}}$. By [L1] $\rho$ is a density operator with $\operatorname{tr}\rho=w+(1-w)=1$; but $\rho^{2}=w^{2}T_{\psi_{1},\psi_{1}}+(1-w)^{2}T_{\psi_{2},\psi_{2}}$ because the cross terms vanish by orthogonality, so $\rho^{2}\psi_{1}=w^{2}\psi_{1}\ne w\psi_{1}=\rho\psi_{1}$ since $0<w<1$ and $\psi_{1}\ne0$. Hence $\rho^{2}\ne\rho$, so $\rho$ is not a rank-one projection and is not of the form $T_{\varphi,\varphi}$; the mixture of two orthogonal pure preparations is a preparation of a different type from either component. [given, L1, algebra]

1.3 On the composite $H\widehat\otimes H$ consider the product state $\Psi:=e_{+}\otimes e_{+}$ and the local observable $S_{z}\otimes I$. By [L3], $(S_{z}\otimes I)\Psi=(S_{z}e_{+})\otimes e_{+}=\tfrac{\hbar}{2}\,\Psi$, and the spectral projection of $S_{z}\otimes I$ for the value $\hbar/2$ contains the product of the spectral projection $P_{+}$ of $S_{z}$ with the identity, so the local outcome probability for the set $\{\hbar/2\}$ is $\|(P_{+}\otimes I)\Psi\|^{2}=1$ by [L4]. [given, L3, L4, algebra]

1.4 For the state $\psi=\tfrac1{\sqrt2}(e_{+}+e_{-})$ the outcome law of $S_{z}$ is $B\mapsto\mu^{S_{z}}_{\psi}(B)=\operatorname{tr}(T_{\psi,\psi}E_{S_{z}}(B))=\|E_{S_{z}}(B)\psi\|^{2}$. By [L4] the projections are $P_{\pm}$ onto the lines $\mathbb Ce_{\pm}$, so $\mu^{S_{z}}_{\psi}(\{\hbar/2\})=\|P_{+}\psi\|^{2}=\tfrac12$ and $\mu^{S_{z}}_{\psi}(\{-\hbar/2\})=\|P_{-}\psi\|^{2}=\tfrac12$, and $\mu^{S_{z}}_{\psi}$ is the probability measure $\tfrac12\delta_{\hbar/2}+\tfrac12\delta_{-\hbar/2}$ on the two-point set $\sigma(S_{z})$, of total mass one; in particular the value of $S_{z}$ in this preparation is not a number but the measure, and its mean vanishes by symmetry of the two outcomes. [given, L1, L4, algebra]

2.1 Combining steps 1.1-1.4: rays, density operators, mixtures, local tensor actions and outcome laws of the adopted postulates all have the mathematical types claimed for them, and the displayed computations are the ones the definitions and lemmas give. [step 1.1, step 1.2, step 1.3, step 1.4, algebra] ∎

## Remarks

- The checks are internal consistency checks of the adopted types: they verify that the objects named by the postulates are of the claimed mathematical kind and that the displayed computations are the ones the definitions give. They assert nothing about any laboratory preparation and record no measurement.
- The number conventions of [[def-nrqm-framework-quantities-and-units]] enter only through the reading of the outcomes $\pm\hbar/2$ as angular-momentum values and through the dimensionless character of the weights $w$, $1-w$ and of the ray parameter $e^{i\theta}$.
