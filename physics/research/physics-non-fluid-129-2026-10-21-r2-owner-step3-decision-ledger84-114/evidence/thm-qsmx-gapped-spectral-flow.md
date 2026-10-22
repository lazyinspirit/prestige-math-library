---
id: thm-qsmx-gapped-spectral-flow
kind: theorem
title: Thermodynamic spectral transport along a uniformly gapped path
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: physics
deps:
  - def-countable-choice
  - def-qsmx-summable-interaction-norm
  - thm-qsmx-weighted-lieb-robinson
  - lem-qsmx-filtered-spectral-generator
  - lem-qsmx-filtered-generator-locality
  - def-qsmx-local-conditional-expectation
  - lem-qsmx-local-expectation-locality
  - def-qsm-local-spin-algebras
  - lem-qsm-local-spin-inclusions-isometric
  - def-qsm-quasilocal-spin-algebra
  - lem-qsm-quasilocal-completion
  - lem-qsm-finite-matrix-cstar-and-state-duality
  - lem-qsm-matrix-state-calculus
  - def-qsm-infinite-algebraic-state
  - lem-qsm-spin-state-compactness
dependency_roles:
  def-countable-choice: mathematical-premise
  def-qsmx-summable-interaction-norm: mathematical-premise
  thm-qsmx-weighted-lieb-robinson: mathematical-premise
  lem-qsmx-filtered-spectral-generator: mathematical-premise
  lem-qsmx-filtered-generator-locality: mathematical-premise
  def-qsmx-local-conditional-expectation: mathematical-premise
  lem-qsmx-local-expectation-locality: mathematical-premise
  def-qsm-local-spin-algebras: mathematical-premise
  lem-qsm-local-spin-inclusions-isometric: mathematical-premise
  def-qsm-quasilocal-spin-algebra: mathematical-premise
  lem-qsm-quasilocal-completion: mathematical-premise
  lem-qsm-finite-matrix-cstar-and-state-duality: mathematical-premise
  lem-qsm-matrix-state-calculus: mathematical-premise
  def-qsm-infinite-algebraic-state: mathematical-premise
  lem-qsm-spin-state-compactness: mathematical-premise
dependency_level: 4
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "S. Bachmann, S. Michalakis, B. Nachtergaele, and R. Sims, Automorphic Equivalence within Gapped Phases of Quantum Lattice Systems, §§4.4–5.2"
      url: "https://arxiv.org/pdf/1102.0842"
    - title: "Pieter Naaijkens, Quantum Spin Systems on Infinite Lattices, §§4.1–4.4"
      url: "https://arxiv.org/pdf/1311.2717"
---

## Statement

Assume Countable Choice and the finite-matrix $C^*$-identity for the local spin algebras. Let $\Phi_s$, $s\in[0,1]$, be a $C^1$ finite-range interaction path on $\mathbb Z^d$, with uniform range, support-cardinality, $F_a$-interaction norm, and $F_a$-derivative norm for some $a>0$. Let $\Lambda_n$ be any increasing finite exhaustion of $\mathbb Z^d$. Choose a positive reference energy $E_0$ and measure the interaction, Hamiltonians, and gap below in units of $E_0$, so their values are dimensionless and the filtered evolution uses $\hbar=1$; the path parameter, lattice distance, and weights are dimensionless. For each $n$, fix an integer $r_n$ with $1\le r_n<\dim\mathcal H_{\Lambda_n}$, independent of $s$, and let the selected band consist of the lowest $r_n$ eigenvalues of $H_{\Lambda_n}(s)$, counted with multiplicity. Suppose the gap between the $r_n$-th and $(r_n+1)$-st eigenvalues is at least one $\gamma>0$, uniformly in $n,s$. Thus each selected band is a locally fixed spectral cluster in the interaction-definition sense. This includes a finite-volume ground eigenspace when $r_n$ is its constant multiplicity along the path.

Write $P_n(s)$ for the spectral projection onto that band. A finite-volume band state is a positive density matrix $\rho$ on $\mathcal A_{\Lambda_n}$ with $\operatorname{Tr}_{\Lambda_n}\rho=1$ and $P_n(s)\rho P_n(s)=\rho$. Extend it to a state on the quasi-local algebra by $\omega^\Lambda_\rho(A)=\operatorname{Tr}_{\Lambda_n}(\rho E_{\Lambda_n}(A))$, where $E_{\Lambda_n}$ is the normalized-trace expectation. Let $\mathcal S(s)$ be the set of pointwise limits on the quasi-local algebra of subsequences of such band states with $n\to\infty$. If the band is exactly the finite-volume ground eigenspace, $\mathcal S(s)$ is the corresponding limiting ground-state set.

Let $D_n(s)$ be the filtered derivative of $P_n(s)$, in dimensionless energy units, and set $K_\rho:=\sup_{n,s}\|\Psi_{\Lambda_n}(s)\|_{F_\rho}<\infty$, using the local interaction decomposition of the filtered-generator locality lemma. Let $U_n(0)=I$ solve $U_n'(s)=iD_n(s)U_n(s)$, and set $\alpha_{n,s}(A)=U_n(s)^*AU_n(s)$. Then $\alpha_{n,s}(A)$ converges in norm for every local $A$, uniformly in $s\in[0,1]$, to a norm-continuous automorphism $\alpha_s$ of the quasi-local algebra. For disjoint finite local supports $X,Y$,

$$\|[\alpha_s(A),B]\|\le \frac{2\|A\|\|B\|}{C_{F_\rho}} \left(e^{2C_{F_\rho}K_\rho}-1\right) \sum_{x\in X,\,y\in Y}F_\rho(d_\infty(x,y)).$$

The limiting band-state sets are transported by this automorphism:

$$\mathcal S(s)=\{\omega\circ\alpha_s:\omega\in\mathcal S(0)\}.$$

## Statement references

[[def-qsmx-summable-interaction-norm]]

[[thm-qsmx-weighted-lieb-robinson]]

[[lem-qsmx-filtered-spectral-generator]]

[[lem-qsmx-filtered-generator-locality]]

[[def-qsmx-local-conditional-expectation]]

[[lem-qsmx-local-expectation-locality]]

[[def-qsm-local-spin-algebras]]

[[lem-qsm-local-spin-inclusions-isometric]]

[[def-qsm-quasilocal-spin-algebra]]

[[lem-qsm-quasilocal-completion]]

[[lem-qsm-finite-matrix-cstar-and-state-duality]]

[[lem-qsm-matrix-state-calculus]]

[[def-qsm-infinite-algebraic-state]]

[[lem-qsm-spin-state-compactness]]

## Facts & Assumptions

**Given:** Countable Choice, the finite-matrix $C^*$-identity, a $C^1$ bounded finite-range interaction path, an increasing exhaustion $\Lambda_n\uparrow\mathbb Z^d$, fixed ranks $r_n\ge1$ for the selected lowest bands, and a uniform gap after each such band.

[A1] [[def-countable-choice]]: Countable Choice is the completion hypothesis used by the quasi-local algebra and its finite-range dynamics.

[F1] [[def-qsmx-summable-interaction-norm]]: $H_{\Lambda_n}(s)$ and its derivative are finite matrix sums; a locally fixed spectral cluster with a uniform separating gap has a $C^1$ spectral projection.

[F2] [[lem-qsmx-filtered-spectral-generator]]: $P_n'(s)=i[D_n(s),P_n(s)]$, with $D_n(s)=D_n(s)^*$ norm-continuous in $s$.

[F3] [[lem-qsmx-filtered-generator-locality]]: $D_n(s)=\sum_{\varnothing\ne Z\subseteq\Lambda_n}\Psi_{\Lambda_n}(Z,s)$, each finite-volume coefficient is norm-continuous, the $F_\rho$-norms are uniformly bounded, and every fixed finite nonempty support coefficient converges uniformly in $s$.

[F4] [[thm-qsmx-weighted-lieb-robinson]]: the time-dependent finite-volume flows generated by $-\Psi_{\Lambda_n}$, and their reversed flows, satisfy the $F_\rho$-weighted commutator bound with constants uniform in $n,s$.

[F5] [[def-qsmx-local-conditional-expectation]] and [[lem-qsmx-local-expectation-locality]]: $E_{\Lambda_n}$ is a consistent unital positive contraction extending to the quasi-local algebra.

[F6] [[def-qsm-quasilocal-spin-algebra]], [[lem-qsm-local-spin-inclusions-isometric]], and [[lem-qsm-quasilocal-completion]]: isometric local inclusions make the local observables norm dense in a unital quasi-local $C^*$-algebra.

[F7] [[lem-qsm-finite-matrix-cstar-and-state-duality]]: each finite local algebra has the stated $C^*$-identity and every positive normalized functional is a trace pairing with a density matrix.

[F8] [[lem-qsm-spin-state-compactness]]: every sequence of states on the quasi-local spin algebra has a subsequence converging pointwise on every observable to a state.

[F9] [[lem-qsm-matrix-state-calculus]]: the finite trace is cyclic, so $\operatorname{Tr}(U\rho U^*C)=\operatorname{Tr}(\rho U^*CU)$.

[F10] [[def-qsm-infinite-algebraic-state]]: a state on the quasi-local algebra is a bounded positive normalized functional; its finite-region restrictions are trace pairings with consistent density matrices.

## Proof

**Proof technique:** direct.

**Given:** [A1], the finite-matrix $C^*$-identity, [F1]–[F10], and the path and gap hypotheses.

1.1 First justify positivity in [F5] on the completion. For $C\in\mathcal A$, take local $C_m\to C$. Continuity of multiplication and contractivity give $E_{\Lambda_n}(C^*C)=\lim_m E_{\Lambda_n}(C_m^*C_m)$. Each matrix on the right is positive by the local twirl; its norm limit is positive because its quadratic form on every vector is the limit of nonnegative quadratic forms. Thus $A\mapsto\operatorname{Tr}(\rho E_{\Lambda_n}(A))$ is positive for every finite density $\rho$, and is bounded and normalized by contractivity and unitality. For each $n$, [F2] gives a norm-continuous self-adjoint $D_n(s)$. The finite-dimensional matrix ODE $U_n'=iD_nU_n$, $U_n(0)=I$, has a solution by its uniformly convergent Picard series; differentiating $U_n^*U_n$ gives $U_n^*U_n=I$. Differentiate $Q_n(s):=U_n(s)^*P_n(s)U_n(s)$. Since $U_n'=iD_nU_n$, $U_n^{*'}=-iU_n^*D_n$, and $P_n'=i[D_n,P_n]$, the three terms in $Q_n'$ cancel. Hence $Q_n(s)=P_n(0)$, or $P_n(s)=U_n(s)P_n(0)U_n(s)^*$. If $\rho_0$ is a finite-volume band density at $s=0$, then $U_n\rho_0U_n^*$ is a band density at $s$. The normalized-trace expectation satisfies $E_{\Lambda_n}(U_n^*AU_n)=U_n^*E_{\Lambda_n}(A)U_n$, first on finite tensor products and then by continuity. Cyclicity [F9] therefore gives $\omega^\Lambda_{\rho_0}\circ\alpha_{n,s}=\omega^\Lambda_{U_n\rho_0U_n^*}$. The density/state correspondence [F7, F10] makes both extensions states on $\mathcal A$. Reversing $U_n$ proves equality of the finite-volume state sets in both directions. [given, F1, F2, F5, F6, F7, F9, F10, algebra]

1.2 By [F3], the generator interactions $\Psi_{\Lambda_n}$ have a common $F_\rho$-norm bound $K_\rho$ for every $\rho>d$. The path $U_n'=iD_nU_n$ is the Heisenberg flow of the interaction $-\Psi_{\Lambda_n}$ with $\hbar=1$; its inverse is the reversed path with the same norm bound. [F3, F4, algebra]

2.1 Fix a local $A\in\mathcal A_X$. For a finite ball $B_R\supset X$, let $\alpha_{n,s}^{(R)}$ be the flow generated by the restriction of $-\Psi_{\Lambda_n}$ to supports $Z\subseteq B_R$. For two finite-volume propagators $U_J,U_K$, set $F(u)=\alpha^J_{u,0}(\alpha^K_{s,u}(A))$. The composition rule gives $F(0)=\alpha^K_{s,0}(A)$ and $F(s)=\alpha^J_{s,0}(A)$. The endpoint evolution equations are $\partial_u\alpha^J_{u,0}(B)=i\alpha^J_{u,0}([J(u),B])$ and $\partial_u\alpha^K_{s,u}(A)=-i[K(u),\alpha^K_{s,u}(A)]$. Product differentiation and integration therefore give $\alpha^J_{s,0}(A)-\alpha^K_{s,0}(A) =i\int_0^s \alpha^J_{u,0}\!\left([J(u)-K(u),\alpha^K_{s,u}(A)]\right)\,du.$ Apply this with $J=-\Psi_{\Lambda_n}$ and $K=J|_{Z\subseteq B_R}$. In the Duhamel integrand, the removed terms are exactly those $\Psi_{\Lambda_n}(Z,u)$ with $Z\not\subseteq B_R$. For terms with $Z\cap X=\varnothing$, the initial supports are disjoint, so [F4] gives the commutator estimate. Their total contribution is at most $L_\rho\|A\|K_\rho\sum_{x\in X}\sum_{y\in\mathbb Z^d} F_\rho(d_\infty(x,y))\sum_{z\notin B_R}F_\rho(d_\infty(y,z)),$ where $L_\rho=2C_{F_\rho}^{-1}(e^{2C_{F_\rho}K_\rho}-1)$ is the uniform commutator coefficient from [F4]. For each removed support choose an outside site $z\in Z\setminus B_R$, sum over $y\in Z$, and use $\sum_{Z\ni y,z}\|\Psi_{\Lambda_n}(Z,u)\|\le K_\rho F_\rho(d_\infty(y,z))$. The displayed tail tends to zero by dominated convergence: for fixed $y$, the inner tail tends to zero and is bounded by the full finite lattice sum of $F_\rho$, while the outer sum is finite by [F3]. If $Z\cap X\ne\varnothing$, the disjoint-support hypothesis of [F4] is unavailable, so use $\|[\alpha^K_{s,u}(A),\Psi_{\Lambda_n}(Z,u)]\|\le2\|A\|\|\Psi_{\Lambda_n}(Z,u)\|$. Summing over $x\in Z\cap X$ and $z\in Z\setminus B_R$ bounds this contribution by $2\|A\|K_\rho\sum_{x\in X}\sum_{z\notin B_R}F_\rho(d_\infty(x,z)),$ which also tends to zero by summability. Thus the full-flow versus restricted-flow error tends to zero uniformly in $n,s$. For fixed $R$, only finitely many $Z\subseteq B_R$ occur. By [F3], their generator coefficients converge uniformly in $s$; the finite-dimensional Duhamel bound makes $\alpha_{n,s}^{(R)}(A)$ uniformly Cauchy. Combining this local convergence with the uniform tail shows $\alpha_{n,s}(A)$ is uniformly Cauchy as $n\to\infty$. Applying the same argument to the inverse paths gives a uniform pointwise limit for $\alpha_{n,s}^{-1}$. [given, F2, F3, F4, step 1.2, algebra]

3.1 Each $\alpha_{n,s}$ and inverse preserves the norm and the $C^*$-operations. Their uniform limits on the dense local algebra extend by isometry to $\mathcal A$; continuity of multiplication and adjoint passes the $C^*$-operations to the limits. Taking limits in the two composition identities on local observables shows that the two limits are inverses. Thus $\alpha_s$ is an automorphism, norm-continuous in $s$ on each local observable. Taking limits in [F4] gives the stated $F_\rho$ commutator bound, with $K_\rho$ from [F3]. [given, A1, F3, F4, F6, step 2.1, algebra]

4.1 For every $n$, the normalized projection $P_n(s)/\operatorname{Tr}P_n(s)$ is a band density, since the band is nonempty. [F5, F7, F10] extend its trace pairing to a state on $\mathcal A$, and [F8] gives at least one subsequential limit; hence each $\mathcal S(s)$ is nonempty. Let $\omega_0\in\mathcal S(0)$, witnessed by band states $\omega_k^0$ along a subsequence $n_k$. Step 1.1 gives $\omega_k^s=\omega_k^0\circ\alpha_{n_k,s}\in\mathcal S_{\Lambda_{n_k}}(s)$. For local $A$, $|\omega_k^s(A)-(\omega_0\circ\alpha_s)(A)| \le\|\alpha_{n_k,s}(A)-\alpha_s(A)\| +|\omega_k^0(\alpha_s(A))-\omega_0(\alpha_s(A))|,$ which tends to zero by pointwise convergence of the states and uniform norm convergence of the automorphisms. Density and the state norm-one bounds extend convergence to all $A\in\mathcal A$. Thus $\omega_0\circ\alpha_s\in\mathcal S(s)$. Conversely, for any $\omega_s\in\mathcal S(s)$, use the inverse finite-volume transport in step 1.1 and the convergent inverse flows from step 2.1 to obtain $\omega_s\circ\alpha_s^{-1}\in\mathcal S(0)$. Both inclusions prove the asserted set equality. [given, A1, F5, F7, F8, F10, step 1.1, step 2.1, algebra] ∎
## Remarks

For each finite volume, the unitary $U_n(s)$ restricts to a unitary from the initial band subspace onto the final band subspace. The arrows $\iota_0$ and $\iota_s$ are the inclusion maps of those subspaces into $\mathcal H_{\Lambda_n}$. The square records these inclusions and the restricted map; it commutes by the projection identity proved in step 1.1. It summarizes only finite-volume transport, while the thermodynamic limit is proved in steps 2.1–4.1.

```tikzcd
\begin{tikzcd}
\operatorname{Ran}P_n(0) \arrow[r,"U_n(s)|_{\operatorname{Ran}P_n(0)}"] \arrow[d,hook,"\iota_0"'] & \operatorname{Ran}P_n(s) \arrow[d,hook,"\iota_s"] \\
\mathcal H_{\Lambda_n} \arrow[r,"U_n(s)"'] & \mathcal H_{\Lambda_n}
\end{tikzcd}
```
