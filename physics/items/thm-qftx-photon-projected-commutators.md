---
id: thm-qftx-photon-projected-commutators
kind: theorem
title: Projected angular parts are not two independent rotation algebras
status: draft
origin: pipeline
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 4
deps:
  - def-axiom-of-choice
  - thm-qftx-photon-rotations-helicity
  - def-qftx-photon-projected-angular
  - lem-qftx-photon-rotation-test-core
  - thm-kato-rellich
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  thm-qftx-photon-rotations-helicity: mathematical-premise
  def-qftx-photon-projected-angular: mathematical-premise
  lem-qftx-photon-rotation-test-core: mathematical-premise
  thm-kato-rellich: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Konstantin Y. Bliokh, Miguel A. Alonso, Elena A. Ostrovskaya, and Andrea Aiello, Angular Momenta and Spin-Orbit Interaction of Nonparaxial Light in Free Space
      url: https://arxiv.org/pdf/1006.3876
      locator: Full 8-page article; §II equation 5 and the preceding transversality discussion. The paper sets hbar=c=1; this theorem restores hbar and proves the identities on a verified core.
    - title: Eric Palmerduca and Hong Qin, Photon topology
      url: https://arxiv.org/pdf/2308.11147v2
      locator: Full 66-page arXiv:2308.11147v2; §V.3, equations 213–228, for the total and helicity-projected vector operators and their non-so(3) commutation relations.
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
---

## Statement

Assume the Axiom of Choice and $\hbar>0$, and use the operators and domain of [[def-qftx-photon-projected-angular]] and [[thm-qftx-photon-rotations-helicity]]. The smooth transverse domain $\mathcal D$ is a common graph core for $J_i$ and $L_i'$ for $i=1,2,3$. Each $L_i'=J_i-S_i'$ is self-adjoint on the exact domain $D(J_i)$, and each $S_i'$ is bounded self-adjoint. On $\mathcal D$, with $[A,B]=AB-BA$,
$$[J_i,J_j]=i\hbar\sum_{k=1}^3\epsilon_{ijk}J_k,\qquad [S_i',S_j']=0,\qquad [L_i',S_j']=i\hbar\sum_{k=1}^3\epsilon_{ijk}S_k',\qquad [L_i',L_j']=i\hbar\sum_{k=1}^3\epsilon_{ijk}(L_k'-S_k').$$
Thus the projected spin and orbital parts are not two commuting independent $\mathfrak{so}(3)$ representations. The commutators are asserted on the common invariant core, not as identities of unrestricted products of unbounded operators.

## Statement references

[[def-qftx-photon-projected-angular]]

[[thm-qftx-photon-rotations-helicity]]

## Facts & Assumptions

**Given:** The Axiom of Choice, $\hbar>0$, the transverse Hilbert space and smooth domain, the rotation representation, and the projected operators.

[A1] Assume the Axiom of Choice. [[def-axiom-of-choice]]

[F1] For each Cartesian axis, $J_i$ is the self-adjoint Stone generator with $U(R_{e_i}(t))=e^{-itJ_i/\hbar}$. On $\mathcal D$, $J_i=L_i+\hbar S_i$, where $L_i=-i\hbar(e_i\times\mathbf k)\cdot\nabla_{\mathbf k}$ and $(S_i)_{ab}=-i\epsilon_{iab}$. [[thm-qftx-photon-rotations-helicity]]

[F2] The projected multipliers are $S_i'=M_{\hbar n_i h}$, are bounded self-adjoint with norm at most $\hbar$, preserve $\mathcal D$, and $L_i'=J_i-S_i'$ has domain $D(J_i)$. [[def-qftx-photon-projected-angular]]

[F3] $\mathcal D$ is a graph core for every $J_i$. Because $S_i'$ is bounded, the graph norms of $J_i$ and $J_i-S_i'$ are equivalent. [[lem-qftx-photon-rotation-test-core]]

[F4] Kato–Rellich: if $A$ is self-adjoint and $B$ is symmetric with relative bound less than one, then $A+B$ on $D(A)$ is self-adjoint; the theorem assumes full Choice. Its symmetry, adjoint, and self-adjointness clauses are unchanged when the Hilbert pairing is conjugated to the second-variable-linear convention used here. [[thm-kato-rellich]]

## Proof

**Given:** [A1], [F1]–[F4], $\hbar>0$, and $i,j\in\{1,2,3\}$.

1.1 The domain $\mathcal D$ is invariant under each $J_i$ and $S_i'$ by their smooth differential and multiplication formulas. Write $X_i=(e_i\times\mathbf k)\cdot\nabla_{\mathbf k}$ and $C_i v=e_i\times v$, so $L_i=-i\hbar X_i$ and $\hbar S_i=i\hbar C_i$. The product rule for the linear vector fields gives $[X_i,X_j]f=(e_j\times(e_i\times\mathbf k)-e_i\times(e_j\times\mathbf k))\cdot\nabla f=-\sum_k\epsilon_{ijk}X_k f$. The vector triple-product identity gives $[C_i,C_j]=\sum_k\epsilon_{ijk}C_k$, while constant matrices commute with the scalar differential coefficients, so $[L_i,\hbar S_j]=0$. Therefore $[L_i,L_j]=i\hbar\sum_k\epsilon_{ijk}L_k$ and $[\hbar S_i,\hbar S_j]=i\hbar\sum_k\epsilon_{ijk}\hbar S_k$. Adding these identities yields $[J_i,J_j]=i\hbar\sum_k\epsilon_{ijk}J_k$ on $\mathcal D$. [F1, given, algebra]

1.2 Since $J_i$ is self-adjoint and $-S_i'$ is bounded self-adjoint, it is $J_i$-bounded with relative-bound coefficient $a=0<1$ and finite constant $b=\|S_i'\|$. Apply [F4] to $A=J_i$ and $B=-S_i'$ to conclude $L_i'=J_i-S_i'$ is self-adjoint on exactly $D(J_i)$. For every $\psi\in D(J_i)$, $\|L_i'\psi\|\le\|J_i\psi\|+\hbar\|\psi\|$ and $\|J_i\psi\|\le\|L_i'\psi\|+\hbar\|\psi\|$. These inequalities make the two graph norms equivalent. Hence [F3] implies that $\mathcal D$ is also a core for $L_i'$. [A1, F2, F3, F4, algebra]

1.3 The operators $S_i'$ are multiplication by the commuting matrix fields $\hbar n_i h(\mathbf n)$. Thus on every transverse fiber $S_i'S_j'=\hbar^2 n_i n_j h^2=S_j'S_i'$, so $[S_i',S_j']=0$ as bounded operators, in particular on $\mathcal D$. [F1, F2, algebra]

1.4 For $R\in SO(3)$, the cross-product identity $(R\mathbf n)\times(Rv)=R(\mathbf n\times v)$ gives $P(R\mathbf n)=RP(\mathbf n)R^{-1}$ and $h(R\mathbf n)=Rh(\mathbf n)R^{-1}$. Also $RS_jR^{-1}=\sum_m R_{mj}S_m$, since rotations carry $e_j$ to $\sum_mR_{mj}e_m$. Substituting these identities in $S_j'(\mathbf n)=\hbar P(\mathbf n)S_jP(\mathbf n)$ yields $U(R)S_j'U(R)^*=\sum_mR_{mj}S_m'$. For $R=R_{e_i}(t)$, differentiating the right side at zero gives $\sum_m\epsilon_{ijm}S_m'$. For $\psi\in\mathcal D$, both $\psi$ and $S_j'\psi$ lie in $D(J_i)$ by [F1]–[F2], so the product rule for the left side gives $\left.\frac{d}{dt}\right|_{0}U(R_{e_i}(t))S_j'U(R_{e_i}(t))^*\psi=-\frac{i}{\hbar}[J_i,S_j']\psi$. Equating the two derivatives proves $[J_i,S_j']=i\hbar\sum_m\epsilon_{ijm}S_m'$ on $\mathcal D$. [F1, F2, given, algebra]

2.1 Using $L_i'=J_i-S_i'$ and invariance of $\mathcal D$, expand on $\mathcal D$: $[L_i',S_j']=[J_i,S_j']-[S_i',S_j']=i\hbar\sum_k\epsilon_{ijk}S_k'$, and $[L_i',L_j']=[J_i,J_j]-[J_i,S_j']-[S_i',J_j]+[S_i',S_j']=i\hbar\sum_k\epsilon_{ijk}(J_k-2S_k')=i\hbar\sum_k\epsilon_{ijk}(L_k'-S_k')$. Here $[S_i',J_j]=-[J_j,S_i']=i\hbar\sum_k\epsilon_{ijk}S_k'$ because $\epsilon_{jik}=-\epsilon_{ijk}$. Along with step 1.3 and step 1.1, these are all stated identities. The term $-S_k'$ in the orbital commutator prevents $L_i'$ from satisfying an independent $\mathfrak{so}(3)$ algebra; the commuting $S_i'$ also do not satisfy the nonzero $\mathfrak{so}(3)$ brackets. [F1, F2, step 1.1, step 1.3, step 1.4, algebra] ∎

## Remarks

The result is conditional on the transverse one-photon Hilbert model and the stated rotation action. It proves a specific projected operator algebra, not a universal gauge-independent local spin/orbital density and not a canonical field-theory Noether/Poynting identity. Some photon-topology treatments reserve “spin” for an $\mathfrak{so}(3)$ representation and instead call $\hbar\mathbf n h$ a helicity-induced commuting vector operator; the terminology varies, while the operator formulas and their domains here are explicit.
