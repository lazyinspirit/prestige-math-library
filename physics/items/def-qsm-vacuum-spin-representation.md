---
id: def-qsm-vacuum-spin-representation
kind: definition
title: Finite-excitation vacuum spin representation and normality
status: published
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
library: physics
deps:
  - def-countable-choice
  - def-qsm-local-spin-algebras
  - lem-qsm-local-spin-inclusions-isometric
  - def-qsm-quasilocal-spin-algebra
dependency_roles:
  def-countable-choice: mathematical-premise
  def-qsm-local-spin-algebras: mathematical-premise
  lem-qsm-local-spin-inclusions-isometric: mathematical-premise
  def-qsm-quasilocal-spin-algebra: mathematical-premise
dependency_level: 5
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: Pieter Naaijkens, Quantum Spin Systems on Infinite Lattices, §3.1, printed pp. 50–53 (finite-excitation spin-chain representation)
      url: https://arxiv.org/pdf/1311.2717
    - title: David Ruelle, Topics in Quantum Statistical Mechanics and Operator Algebras, Chapter 1 §5, printed p. 10 (normal states); Chapter 2 §1, pp. 17–18 (quasi-local spin algebra); Chapter 2 §5, pp. 42–44 (commutant and irreducibility)
      url: https://arxiv.org/pdf/math-ph/0107009
---

## Definition

Assume Countable Choice, written $\mathrm{AC}_\omega$, as in [[def-countable-choice]]. Let $d\ge1$, $\Gamma=\mathbb Z^d$, and let the finite on-site spin dimension be $q\ge1$, with the local matrix algebras and factor inclusions of [[def-qsm-local-spin-algebras]] and [[lem-qsm-local-spin-inclusions-isometric]]. Fix a reference basis label $0$ at each site. This is a relabeling of the local basis $\{1,\ldots,q\}$ used in [[def-qsm-local-spin-algebras]]; it changes no matrix algebra.

Define the **finite-excitation configuration set**
$$S_{\mathrm{fin}}:=\{s:\Gamma\to\{0,\ldots,q-1\}:\{x\in\Gamma:s_x\ne0\}\text{ is finite}\}.$$
This set is countable: every finite support is contained in a box $[-n,n]^d$, and each box has finitely many configurations that vanish outside it. The boxes form an explicit countable exhaustion, so the union of these finite configuration sets is countable. Thus its coordinate Hilbert space is separable.
For $s\in S_{\mathrm{fin}}$, let $e_s$ be the corresponding coordinate vector. The **vacuum spin Hilbert space** is
$$\mathcal H_{\mathrm{vac}}:=\ell^2(S_{\mathrm{fin}}),\qquad \langle\psi,\varphi\rangle:=\sum_{s\in S_{\mathrm{fin}}}\psi_s\overline{\varphi_s},$$
where the inner product is linear in its first variable. The vectors $(e_s)_{s\in S_{\mathrm{fin}}}$ form its specified orthonormal basis, and $\Omega:=e_{s^0}$, with $s^0_x=0$ for all $x$, is the reference vacuum vector.

For a finite region $\Lambda$, write
$$S_{\mathrm{fin}}(\Gamma\setminus\Lambda):=\{u:\Gamma\setminus\Lambda\to\{0,\ldots,q-1\}:\{x:u_x\ne0\}\text{ is finite}\}.$$
Restriction to $\Lambda$ and its complement gives the configuration bijection
$$S_{\mathrm{fin}}\cong\{0,\ldots,q-1\}^{\Lambda}\times S_{\mathrm{fin}}(\Gamma\setminus\Lambda)$$
induces a unitary
$$U_\Lambda:\mathcal H_{\mathrm{vac}}\to\mathcal H_\Lambda\otimes\ell^2(S_{\mathrm{fin}}(\Gamma\setminus\Lambda)).$$
For $T\in\mathcal A_\Lambda$, define
$$\pi_\Lambda(T):=U_\Lambda^{-1}\bigl(T\otimes I\bigr)U_\Lambda.$$
Under the direct-sum decomposition over outside configurations, $\pi_\Lambda(T)$ is a copy of $T$ on each block. The outside configuration set contains the all-zero configuration, so it is nonempty; the norm of this direct sum is therefore the supremum of nonempty identical block norms, namely $\|\pi_\Lambda(T)\|=\|T\|$. If $\Lambda\subseteq\Lambda'$, associativity of the configuration factorization gives $\pi_{\Lambda'}(T\otimes I)=\pi_\Lambda(T)$ on every basis vector. Thus the local maps define a unital isometric $*$-representation $\pi_{\mathrm{loc}}$ on the strictly local algebra. For a Cauchy sequence $A_n$ in that algebra, $\pi_{\mathrm{loc}}(A_n)$ is Cauchy in operator norm; its limit is independent of the chosen representative because $\|\pi_{\mathrm{loc}}(A_n-A'_n)\|=\|A_n-A'_n\|$. Completeness of $\mathcal B(\mathcal H_{\mathrm{vac}})$ follows directly: an operator-norm Cauchy sequence is pointwise Cauchy on every vector, its pointwise limits define a bounded linear operator, and the same Cauchy estimates give operator-norm convergence. The limits therefore define a unique continuous extension $\pi$ to the norm completion $\mathcal A$. Continuity of product and adjoint and the norm identity show that the extension remains an isometric $*$-representation, hence is faithful. This construction selects a particular representation; it does not identify $\mathcal A$ with all of $\mathcal B(\mathcal H_{\mathrm{vac}})$.

For a set $\mathcal S\subseteq\mathcal B(\mathcal H_{\mathrm{vac}})$, its **commutant** is
$$\mathcal S':=\{T\in\mathcal B(\mathcal H_{\mathrm{vac}}):TS=ST\text{ for every }S\in\mathcal S\},$$
and its **bicommutant** is $\mathcal S'':=(\mathcal S')'$. A **normal state** on the represented von Neumann algebra $\pi(\mathcal A)''$ means a positive normalized functional $\varphi$ that preserves suprema of bounded increasing nets of positive operators: if $0\le X_i\uparrow X$ in $\pi(\mathcal A)''$, then $\varphi(X)=\sup_i\varphi(X_i)$. Here $\pi(\mathcal A)''$ is the bicommutant in $\mathcal B(\mathcal H_{\mathrm{vac}})$; $\pi(\mathcal A)$ is a unital $*$-algebra and its bicommutant is strongly closed. The term normal is representation-dependent.

## Remarks

The stated norm-preserving extension uses the norm completion and local inclusions, not the C*-identity of the completion. The C*-structure of the current quasi-local supplier remains conditional on its separately recorded finite-matrix input. Naaijkens constructs the spin-$1/2$, one-dimensional finite-excitation representation; the finite-dimensional, $\mathbb Z^d$ definition here fixes the corresponding basis and local action explicitly.
