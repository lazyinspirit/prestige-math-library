---
id: thm-qsm-finite-kms-gibbs-characterization
kind: theorem
title: Finite KMS condition exactly determines the Gibbs density
status: published
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
library: physics
deps: [def-qsm-kms-state, lem-qsm-kms-strip-uniqueness, lem-qsm-finite-gibbs-kms, lem-qsm-matrix-state-calculus, lem-qsm-finite-matrix-cstar-and-state-duality]
dependency_roles:
  def-qsm-kms-state: mathematical-premise
  lem-qsm-kms-strip-uniqueness: mathematical-premise
  lem-qsm-finite-gibbs-kms: mathematical-premise
  lem-qsm-matrix-state-calculus: mathematical-premise
  lem-qsm-finite-matrix-cstar-and-state-duality: mathematical-premise
dependency_level: 9
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Pieter Naaijkens, Quantum Spin Systems on Infinite Lattices, §3.4, finite Gibbs/KMS discussion, pp. 76–77
      url: https://arxiv.org/pdf/1311.2717
    - title: David Ruelle, Topics in Quantum Statistical Mechanics and Operator Algebras, Chapter 1 §7 and Chapter 2 §6, pp. 13–14 and 24–25
      url: https://arxiv.org/pdf/math-ph/0107009
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
---

## Statement

Let $\mathcal H$ be a nonzero finite-dimensional complex Hilbert space, let $H=H^*$ on $\mathcal H$ with energy units J, let $\hbar>0$ have units J s, and let $\beta>0$ have units J$^{-1}$. Write $\operatorname{Tr}$ for the ordinary finite-dimensional trace. Assume the finite spectral-calculus and unital C$^*$-algebra clauses [A1]–[A2] below. Define the finite-matrix Heisenberg group

$$\alpha_t^H(X):=e^{itH/\hbar}Xe^{-itH/\hbar}\qquad(X\in\mathcal B(\mathcal H),\ t\in\mathbb R).$$

A state $\omega$ on the unital C$^*$-algebra $\mathcal B(\mathcal H)$ satisfies the $\beta$-KMS strip condition of [[def-qsm-kms-state]] for $\alpha^H$ if and only if

$$\omega(X)=\frac{\operatorname{Tr}(e^{-\beta H}X)}{\operatorname{Tr}(e^{-\beta H})}\qquad(X\in\mathcal B(\mathcal H)).$$

Here $\beta$ has units J$^{-1}$, $H$ has units J, and the physical-time strip has width $\beta\hbar$ seconds. The result is finite-dimensional and makes no infinite-volume or relaxation claim.

## Facts & Assumptions

**Given:** $\mathcal H$, $D=\dim\mathcal H\ge1$, $H=H^*$, $\hbar>0$, $\beta>0$, a state $\omega$ on $\mathcal B(\mathcal H)$, and the finite-matrix group $\alpha_t^H$.

[A1] [[lem-qsm-matrix-state-calculus]]: every finite-dimensional Hermitian matrix has an orthonormal eigenbasis with real eigenvalues, and the finite matrix trace is cyclic. Its current proof correctly normalizes rational-coordinate approximants without claiming the normalized coordinates remain rational; its Step 1 readiness is current. This is authoring readiness, not independent approval.

[A2] [[lem-qsm-finite-matrix-cstar-and-state-duality]]: for $D\ge1$, $\mathcal B(\mathcal H)$ with its ordinary operator norm is a nonzero unital complex C$^*$-algebra. The current finite-matrix carrier is a draft with a complete local proof; no independent acceptance is claimed.

[F1] [[def-qsm-kms-state]]: a $\beta$-KMS state has a bounded continuous function on the closed strip $S_{\beta\hbar}$, holomorphic inside, with lower boundary $\omega(A\alpha_t^H(B))$ and upper boundary $\omega(\alpha_t^H(B)A)$.

[F2] [[lem-qsm-kms-strip-uniqueness]]: two bounded continuous functions holomorphic inside the same strip and with the same lower edge agree throughout, including the upper edge.

[F3] [[lem-qsm-finite-gibbs-kms]]: for finite self-adjoint $H$, the normalized Gibbs trace state $X\mapsto Z^{-1}\operatorname{Tr}(e^{-\beta H}X)$ satisfies the finite KMS boundary identity with the physical-time width $\beta\hbar$.

## Proof

**Proof technique:** diagonalize $H$, use matrix units to derive the state weights from the strip edges, and invoke the finite Gibbs boundary calculation for the converse.

**Given:** [A1]–[A2], [F1]–[F3], $H$, $\beta$, $\hbar$, and $\omega$.

1.1 By [A1]–[A2], choose an orthonormal basis $u_1,\dots,u_D$ with $Hu_i=E_i u_i$ and $E_i\in\mathbb R$; [A2] puts the finite matrix algebra in the C$^*$-dynamical setting required by [[def-qsm-kms-state]]. Let $E_{ij}$ be the matrix unit that maps $u_j$ to $u_i$ and all other basis vectors to zero. Direct multiplication gives $E_{ab}E_{cd}=\delta_{bc}E_{ad}$, and the exponential action gives $\alpha_z^H(E_{ij})=e^{iz(E_i-E_j)/\hbar}E_{ij}$ for $z\in\mathbb C$. This formula is used only for finite matrices, where the exponentials and scalar entries are entire. [A1, A2, algebra]

2.1 Fix $i\ne j$ and apply [F1] to $A=E_{jj}$, $B=E_{ij}$. Since $E_{jj}E_{ij}=0$, the lower boundary of its KMS function is identically zero. By [F2] this KMS function vanishes on the whole strip. Its upper edge at $t=0$ is $\omega(E_{ij}E_{jj})=\omega(E_{ij})$, so $\omega(E_{ij})=0$ for every off-diagonal matrix unit. [A2, F1, F2, step 1.1, algebra]

2.2 For arbitrary $i,j$, set $\Delta=E_i-E_j$ and use [F1] with $A=E_{ji}$, $B=E_{ij}$. The lower edge is $e^{it\Delta/\hbar}\omega(E_{jj})$. The candidate $g(z)=e^{iz\Delta/\hbar}\omega(E_{jj})$ is entire and bounded on $0\le\operatorname{Im}z\le\beta\hbar$, since $|e^{i(t+iy)\Delta/\hbar}|=e^{-y\Delta/\hbar}$ and $y$ ranges over a compact interval. It has the same lower boundary as the KMS function, so [F2] identifies them. At the upper edge and $t=0$, the KMS identity is therefore $\omega(E_{ii})=e^{-\beta(E_i-E_j)}\omega(E_{jj})$. [A2, F1, F2, step 1.1, algebra]

3.1 The ratios in step 2.2 show that $e^{\beta E_i}\omega(E_{ii})$ is a constant $c$ independent of $i$. Since $\sum_iE_{ii}=I$ and $\omega(I)=1$, $1=c\sum_i e^{-\beta E_i}$; the sum is positive and finite, so $c=Z^{-1}$ where $Z=\operatorname{Tr}(e^{-\beta H})>0$. Thus $\omega(E_{ii})=e^{-\beta E_i}/Z$. This also covers $D=1$ and degenerate eigenvalues. [given, step 2.2, A1, algebra]

4.1 Every $X\in\mathcal B(\mathcal H)$ has a matrix-unit expansion $X=\sum_{i,j}X_{ij}E_{ij}$. By linearity, step 2.1, and step 3.1, $\omega(X)=\sum_iX_{ii}e^{-\beta E_i}/Z=Z^{-1}\operatorname{Tr}(e^{-\beta H}X)$. Therefore every finite KMS state is the Gibbs trace state. [step 2.1, step 3.1, algebra]

5.1 Conversely, [F3] supplies the entire bounded finite Gibbs correlation with the stated lower and upper edges, which is exactly [F1]'s finite-matrix KMS condition; [A2] ensures that this KMS definition applies to $\mathcal B(\mathcal H)$. The normalized Gibbs trace state is therefore KMS, proving the reverse implication. [A2, F1, F3] ∎
## Remarks

The matrix-unit ratio proof does not assume that $\omega$ is diagonal or invariant before the KMS condition is used. Equal-energy degeneracies are handled by the same ratio, and step 2.1 removes off-diagonal entries even within a degenerate eigenspace.
