---
id: cex-qsmx-categorification-not-spectrum
kind: counterexample
title: Equal representation structure need not fix energy
status: published
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: physics
dependency_level: 5
deps:
  - def-axiom-of-choice
  - def-nrqmx-finite-hermitian-matrix-exponential
  - def-qsmx-spin-weight-and-hall-realization
  - def-trace-of-an-endomorphism
  - thm-qsmx-exchange-lie-weight-blocks
  - thm-qsmx-klr-character-specialization
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-nrqmx-finite-hermitian-matrix-exponential: mathematical-premise
  def-qsmx-spin-weight-and-hall-realization: mathematical-premise
  def-trace-of-an-endomorphism: mathematical-premise
  thm-qsmx-exchange-lie-weight-blocks: mathematical-premise
  thm-qsmx-klr-character-specialization: mathematical-premise
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
---

## Statement refuted

Fix $W=V(1)\otimes V(1)$ with its tensor-product inner product and its diagonal
representation $\rho:\mathfrak{sl}_2(\mathbb C)\to\operatorname{End}_{\mathbb C}(W)$
from the spin convention, together with the rank-one Hall data at $q_H=2$ and
the type-$A_1$ KLR negative-half Grothendieck isomorphism over $\mathbb Q$.
Let
$$\mathscr H_\rho=\{A\in\operatorname{End}_{\mathbb C}(W):A=A^*,\ [A,\rho(X)]=0\text{ for every }X\in\mathfrak{sl}_2(\mathbb C)\},$$
where $A^*$ is the adjoint for the stated inner product. For an endomorphism
$D$ of $W$, set $\exp(D)=\sum_{r=0}^{\infty}D^r/r!$, convergent in operator
norm, and let $\operatorname{Tr}_W$ denote the basis-independent trace on
endomorphisms of $W$. For
$C\in\mathscr H_\rho$ and $\beta\geq0$, define its partition trace by
$$Z_C(\beta):=\operatorname{Tr}_W(\exp(-\beta C)).$$
The claim that the fixed algebraic data
uniquely determine the spectrum and partition trace of every member of
$\mathscr H_\rho$ means that any $A,B\in\mathscr H_\rho$ have the same
eigenvalues counted with algebraic multiplicity and satisfy
$$Z_A(\beta)=Z_B(\beta)\quad\text{for every }\beta\geq0.$$
This uniqueness claim is false. If the endomorphisms are interpreted as
energies, $\beta$ has inverse-energy units.

## Statement references

[[def-qsmx-spin-weight-and-hall-realization]]

[[thm-qsmx-exchange-lie-weight-blocks]]

[[thm-qsmx-klr-character-specialization]]

[[def-nrqmx-finite-hermitian-matrix-exponential]]

[[def-trace-of-an-endomorphism]]

## Facts & Assumptions

**Given:** Use the Hall definition at $q_H=2$, so $\nu=\sqrt2$, and the
one-vertex type-$A_1$ KLR datum $D$ over $k=\mathbb Q$ (its off-diagonal
$Q_{ij}$ family is empty). Let $W=V(1)\otimes V(1)$ with the diagonal action
from the spin definition, and let $P(v\otimes w)=w\otimes v$. Choose an
energy $J>0$ and $\beta=(\ln2)/J>0$; then $\beta J$ is dimensionless, and
$\beta$ has inverse-energy units if $J$ is interpreted as an energy.

[A1] Adopt the Axiom of Choice ([[def-axiom-of-choice]]) inherited through
the Hall/KLR supplier chain; the finite-dimensional witness uses no
additional choice.

[F1] [[def-qsmx-spin-weight-and-hall-realization]]: $V(1)$ has basis
$|\uparrow\rangle,|\downarrow\rangle$ and the global spin generators are
the sums of $E,F,H/2$ over the two tensor factors. At $q_H=2$ its one-vertex
Hall composition algebra is identified with $U_{\sqrt2}^+(\mathfrak{sl}_2)$
by $E\mapsto[S]$. This Hall identification assigns no endomorphism of $W$.

[F2] [[thm-qsmx-exchange-lie-weight-blocks]]: for $N=2$, the swap $P$
commutes with all three generators of the diagonal $\mathfrak{sl}_2$ action.

[F3] [[thm-qsmx-klr-character-specialization]]: for the stated type-$A_1$
datum $D$ over $\mathbb Q$, the canonical KLR Grothendieck isomorphism
identifies the divided-power negative half with the graded projective
Grothendieck algebra; it assigns no Hamiltonian to $W$.

[F4] [[def-nrqmx-finite-hermitian-matrix-exponential]]: for every finite
complex matrix $A$, $\exp(A)=\sum_{r\geq0}A^r/r!$ converges in operator norm.

[F5] [[def-trace-of-an-endomorphism]]: for a finite-dimensional endomorphism,
the trace is the matrix trace in any chosen basis and is independent of the
basis.

## Counterexample

1.1 In the ordered tensor basis, define
$v_{++}=|\uparrow\uparrow\rangle$,
$v_0=(|\uparrow\downarrow\rangle+|\downarrow\uparrow\rangle)/\sqrt2$,
$v_{--}=|\downarrow\downarrow\rangle$, and
$v_s=(|\uparrow\downarrow\rangle-|\downarrow\uparrow\rangle)/\sqrt2$.
These four vectors are pairwise orthonormal by the tensor-product inner
product, and they span the four-dimensional space. The swap $P$ fixes the first
three and sends $v_s$ to $-v_s$, so the same space decomposes into the
symmetric eigenspace $W_+=\ker(P-I)$ of dimension three and the antisymmetric
eigenspace $W_-=\ker(P+I)$ of dimension one. The swap is an involutive
permutation of an orthonormal basis, so $P=P^*$. By [F2], it commutes with
$\rho(X)$ for every $X\in\mathfrak{sl}_2(\mathbb C)$; hence both eigenspaces
are invariant under the action. [given, A1, F1, F2, algebra]

1.2 Let $A_0=0$ and $A_1=JP$. Both are self-adjoint because $J$ is real
and $P=P^*$, and both belong to $\mathscr H_\rho$: the zero map commutes
with every endomorphism and [F2] gives the required commutation for $P$.
The spectrum of $A_0$ is $0$ with multiplicity four; that of $A_1$ is $J$
with multiplicity three and $-J$ with multiplicity one. Therefore, by [F4]
and [F5],
$$Z_{A_0}(\beta)=\operatorname{Tr}_W(\exp(-\beta A_0))=4,\qquad Z_{A_1}(\beta)=\operatorname{Tr}_W(\exp(-\beta A_1))=3e^{-\beta J}+e^{\beta J}.$$
[given, F1, F2, F4, F5, algebra]

2.1 Since $\beta J=\ln2$, the second trace is
$3/2+2=7/2$, which differs from $4$. Hence the same spin representation
decomposition admits distinct symmetry-preserving spectra and Gibbs traces.
[given, step 1.1, step 1.2, algebra]

3.1 The Hall data in [F1] and the KLR Grothendieck isomorphism in [F3] are
fixed for both $A_0$ and $A_1$; neither specifies a selected endomorphism of
$W$. Since both operators lie in the quantified class but have different
spectra and different partition traces, they refute the stated uniqueness
claim. [given, F1, F3, step 1.1, step 1.2, step 2.1] ∎

## Remarks

The example is an exact finite-dimensional counterexample. It does not use
experimental evidence or identify the Hall or KLR categories with a
tensor-product categorification of the spin space.
