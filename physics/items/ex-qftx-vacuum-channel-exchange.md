---
id: ex-qftx-vacuum-channel-exchange
kind: example
title: "Vacuum-channel exchange operator on its invariant subspaces"
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
dependency_level: 2
domain: mathematics
library: mathematics
deps:
  - def-anyonic-local-channel-projector
  - def-anyonic-frobenius-schur-sign
  - lem-anyonic-vacuum-f-symbol-frobenius-schur-normalization
  - thm-anyonic-local-channel-projectors-are-orthogonal
  - prop-anyonic-vacuum-channel-projectors-satisfy-temperley-lieb
  - lem-qftx-anyonic-vacuum-reverse-adjacent-relation
  - thm-qftx-tl-hecke-braid
dependency_roles:
  def-anyonic-local-channel-projector: mathematical-premise
  def-anyonic-frobenius-schur-sign: mathematical-premise
  lem-anyonic-vacuum-f-symbol-frobenius-schur-normalization: mathematical-premise
  thm-anyonic-local-channel-projectors-are-orthogonal: mathematical-premise
  prop-anyonic-vacuum-channel-projectors-satisfy-temperley-lieb: mathematical-premise
  lem-qftx-anyonic-vacuum-reverse-adjacent-relation: mathematical-premise
  thm-qftx-tl-hecke-braid: mathematical-premise
justified_by: []
proof_strategy: direct
axiom_use: "No choice axiom is used; the proof is a decomposition into the range and kernel of one projection."
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Joshua Chen, The Temperley-Lieb categories and skein modules, ANU Honours Thesis, 2014"
      url: "https://arxiv.org/pdf/1502.06845"
      locator: "§§2.1–2.3: the cup/cap convention, loop parameter, and Temperley-Lieb projectors."
verification:
  precheck: pass
---

## Example

Let $\mathcal C$ be a unitary spherical fusion category over $\mathbb C$, and let $a,b,c$ be simple objects, with $a$ self-dual and $\dim\operatorname{Hom}_{\mathcal C}(\mathbf1,a\otimes a)=1$. For $n\ge2$, set $T_0=b$, $T_{j+1}=T_j\otimes a$, and $V=\operatorname{Hom}_{\mathcal C}(c,T_n)$. Equip $V$ with the split Hom inner product, linear in its first variable, defined by $g^\dagger f=\langle f,g\rangle\operatorname{id}_c$. Choose orthonormal split vertex bases in the fixed and pair-first trees, retaining every multiplicity coordinate, and fix $1\le i<n$. Let $P_i=P_{i,\mathbf1}=F_i^{-1}\Pi_{\mathbf1}F_i$ be the vacuum-channel projector: $F_i$ is the matrix of postcomposition by associators to the tree fusing sites $i,i+1$ first, and $\Pi_{\mathbf1}$ keeps precisely the coordinates with that pair output $\mathbf1$. This is an orthogonal projection for the stated inner product. Supply the normalized vacuum-channel self-duality datum with Frobenius–Schur sign $\kappa_a\in\{+1,-1\}$, positive dimension $d_a$, and signed loop parameter $\delta_a=\kappa_ad_a$. Suppose $q\in\mathbb C^\times$ satisfies $q+q^{-1}=\delta_a$. For $U_i=\delta_aP_i$ and $B_i=qI_V-U_i$, $B_i$ acts as $-q^{-1}I_V$ on $\operatorname{ran}P_i$ and as $qI_V$ on $\ker P_i$. If either subspace is zero, its listed scalar is not an eigenvalue contributed by that subspace. The equation gives an algebraic channel action only; it does not identify $B_i$ with an experimentally realized adiabatic exchange.

## Example references

[[def-anyonic-local-channel-projector]]

[[def-anyonic-frobenius-schur-sign]]

[[lem-anyonic-vacuum-f-symbol-frobenius-schur-normalization]]

[[thm-anyonic-local-channel-projectors-are-orthogonal]]

[[prop-anyonic-vacuum-channel-projectors-satisfy-temperley-lieb]]

[[lem-qftx-anyonic-vacuum-reverse-adjacent-relation]]

[[thm-qftx-tl-hecke-braid]]

## Diagrammatic convention

All spectator strands are omitted. The left diagram is the positive braid generator $B_i$, with the right input strand passing over the left and time running upward. The right diagram expresses its operator on the path space as $qI_V-U_i$: $I_V$ is the pair of through-strands and $U_i$ is the formal cup-cap Temperley–Lieb generator representing $\delta_aP_i$. The picture records this algebraic representation and the cup-cap orientation; it does not claim a physical particle follows a path or that a microscopic Hamiltonian realizes the crossing. The proof uses the range/kernel calculation, not the picture.

```tikz
\begin{tikzpicture}[baseline=(current bounding box.center),>=stealth,thick]
  \node at (0.7,3.5) {$B_i$};
  \draw (0,0) .. controls (0,1.1) and (1.4,1.9) .. (1.4,3);
  \draw[white,line width=5pt] (1.4,0) .. controls (1.4,1.1) and (0,1.9) .. (0,3);
  \draw (1.4,0) .. controls (1.4,1.1) and (0,1.9) .. (0,3);
  \node at (0, -0.35) {$a$};
  \node at (1.4, -0.35) {$a$};
  \node at (0, 3.3) {$a$};
  \node at (1.4, 3.3) {$a$};
  \draw[->] (2.1,0.2) -- (2.1,2.8) node[midway,right] {$\text{time}$};

  \node at (3.7,1.5) {$=$};
  \node at (4.5,1.5) {$q$};
  \draw (5.1,0) -- (5.1,3);
  \draw (6.1,0) -- (6.1,3);
  \fill (5.1,0) circle (1.3pt); \fill (6.1,0) circle (1.3pt);
  \fill (5.1,3) circle (1.3pt); \fill (6.1,3) circle (1.3pt);
  \node at (7.0,1.5) {$-$};
  \node at (9.1,1.5) {$U_i=\delta_aP_i$};
  \draw (8.2,3) .. controls (8.2,2.3) and (9.2,2.3) .. (9.2,3);
  \draw (8.2,0) .. controls (8.2,.7) and (9.2,.7) .. (9.2,0);
  \fill (8.2,3) circle (1.3pt); \fill (9.2,3) circle (1.3pt);
  \fill (8.2,0) circle (1.3pt); \fill (9.2,0) circle (1.3pt);
  \node at (8.7,4.0) {$\text{cup}$};
  \node at (8.7,-1.0) {$\text{cap}$};
\end{tikzpicture}
```

## Facts & Assumptions

**Given:** The category, normalized duality datum, split Hom path space with its stated inner product and orthonormal split vertex bases, vacuum-channel projector $P_i$, and $q\in\mathbb C^\times$ with $q+q^{-1}=\delta_a$ from the Example.

[F1] [[def-anyonic-local-channel-projector]]: the local channel projector is $P_{i,s}=F_i^{-1}\Pi_sF_i$, retaining every multiplicity coordinate.

[F2] [[thm-anyonic-local-channel-projectors-are-orthogonal]]: on $\operatorname{Hom}(c,T_n)$ with $g^\dagger f=\langle f,g\rangle\operatorname{id}_c$ and orthonormal split vertex bases in both trees, each $P_{i,s}$ is a self-adjoint idempotent.

[F3] [[def-anyonic-frobenius-schur-sign]]: the normalized maps are $\operatorname{coev}=\sqrt{d_a}\,v$, $\operatorname{ev}=\kappa_a\sqrt{d_a}\,v^\dagger$, and $\kappa_a\in\{+1,-1\}$; this sign is not a braiding phase.

[F4] [[lem-anyonic-vacuum-f-symbol-frobenius-schur-normalization]]: for the stated vacuum gauge, $\delta_a=\kappa_ad_a$.

[F5] [[prop-anyonic-vacuum-channel-projectors-satisfy-temperley-lieb]]: on the repeated-$a$ path space $U_i=\delta_aP_i$ with $\delta_a=\kappa_ad_a$; its Statement gives the square relation, $U_iU_{i+1}U_i=U_i$, and distant commutation.

[F6] [[lem-qftx-anyonic-vacuum-reverse-adjacent-relation]]: for $n\ge3$ and $1\le i\le n-2$, the reverse relation $U_{i+1}U_iU_{i+1}=U_{i+1}$ holds on this fixed-boundary repeated-charge space with its supplied normalized duality datum.

[F7] [[thm-qftx-tl-hecke-braid]]: if $U_i$ satisfy the full displayed relations and $\delta_a=q+q^{-1}$, then $B_i=qI_V-U_i$ has the stated braid and Hecke properties.

## Verification

1.1 By [F1], $P_i^2=P_i$. If $v\in\operatorname{ran}P_i$, then $P_iv=v$ and $B_iv=(qI_V-\delta_aP_i)v=(q-\delta_a)v=-q^{-1}v$, using $q+q^{-1}=\delta_a$. [F1, given, algebra]

2.1 If $v\in\ker P_i$, then $P_iv=0$ and $B_iv=qv$. Every $x\in V$ splits as $P_ix+(I_V-P_i)x$, with the second summand in $\ker P_i$ by idempotence. The range and kernel intersect trivially, and for $u=P_iy$ and $w\in\ker P_i$, self-adjointness from [F2] gives $\langle u,w\rangle=\langle y,P_iw\rangle=0$. Thus $V=\operatorname{ran}P_i\oplus\ker P_i$ orthogonally, so the two computed scalar actions exhaust $B_i$ and a zero subspace contributes no eigenvalue. [F2, step 1.1, algebra]

3.1 The source relations [F5] and, when $n\ge3$, the local reverse relation [F6] supply all Temperley–Lieb hypotheses for [F7]; for $n=2$ both adjacent relations have no indices. The signed $\delta_a=\kappa_ad_a$ from [F3]–[F4] is retained. Therefore [F7] identifies $B_i$ as the generator of the resulting braid/Hecke representation, with the scalar actions in steps 1.1–2.1 on the respective nonzero channel subspaces. No physical transport or measurement premise is used. [F3, F4, F5, F6, F7, step 1.1, step 2.1] ∎

## Remarks

The sign $\kappa_a$ is retained throughout. A choice of $q$ satisfying $q+q^{-1}=\kappa_ad_a$ is a stated hypothesis; no unitarity of $q$ or physical realization is inferred.
