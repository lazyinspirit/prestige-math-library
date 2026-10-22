---
id: ex-qftx-vacuum-channel-exchange
kind: example
title: "Vacuum-channel exchange operator on its invariant subspaces"
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
dependency_level: 1
domain: mathematics
library: mathematics
deps:
  - def-anyonic-local-channel-projector
  - def-anyonic-frobenius-schur-sign
  - lem-anyonic-vacuum-f-symbol-frobenius-schur-normalization
  - thm-anyonic-local-channel-projectors-are-orthogonal
  - prop-anyonic-vacuum-channel-projectors-satisfy-temperley-lieb
  - thm-qftx-tl-hecke-braid
dependency_roles:
  def-anyonic-local-channel-projector: mathematical-premise
  def-anyonic-frobenius-schur-sign: mathematical-premise
  lem-anyonic-vacuum-f-symbol-frobenius-schur-normalization: mathematical-premise
  thm-anyonic-local-channel-projectors-are-orthogonal: mathematical-premise
  prop-anyonic-vacuum-channel-projectors-satisfy-temperley-lieb: mathematical-premise
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
  precheck: pending
---

## Example

Let $a$ be a self-dual simple site charge in a unitary spherical fusion category, with one-dimensional vacuum fusion $a\otimes a\to\mathbf1$, and take a repeated-$a$ fusion-path space $V$ and an applicable interior index $i$. Let $P_i=P_{i,\mathbf1}$ be the orthogonal vacuum-channel projector, with the supplied normalized Frobenius–Schur sign $\kappa_a\in\{+1,-1\}$, positive dimension $d_a$, and signed loop parameter $\delta_a=\kappa_ad_a$. Suppose $q\in\mathbb C^\times$ satisfies $q+q^{-1}=\delta_a$. For $U_i=\delta_aP_i$ and $B_i=qI_V-U_i$, $B_i$ acts as $-q^{-1}I_V$ on $\operatorname{ran}P_i$ and as $qI_V$ on $\ker P_i$. If either subspace is zero, its listed scalar is not an eigenvalue contributed by that subspace. The equation gives an algebraic channel action only; it does not identify $B_i$ with an experimentally realized adiabatic exchange.

## Example references

[[def-anyonic-local-channel-projector]]

[[def-anyonic-frobenius-schur-sign]]

[[lem-anyonic-vacuum-f-symbol-frobenius-schur-normalization]]

[[thm-anyonic-local-channel-projectors-are-orthogonal]]

[[prop-anyonic-vacuum-channel-projectors-satisfy-temperley-lieb]]

[[thm-qftx-tl-hecke-braid]]

## Diagrammatic convention

All spectator strands are omitted. The left diagram is the positive braid generator $B_i$, with the right input strand passing over the left and time running upward. The right diagram expresses its operator on the path space as $qI_V-U_i$: $I_V$ is the pair of through-strands and $U_i$ is the formal cup-cap Temperley–Lieb generator representing $\delta_aP_i$. The picture records this algebraic representation and the cup-cap orientation; it does not claim a physical particle follows a path or that a microscopic Hamiltonian realizes the crossing. The proof uses the range/kernel calculation, not the picture.

```tikz
\begin{tikzpicture}[baseline=(current bounding box.center),>=stealth,thick]
  \node at (0.7,3.5) {$B_i$};
  \draw (0,0) .. controls (0,1.1) and (1.4,1.9) .. (1.4,3);
  \draw[white,line width=5pt] (1.4,0) .. controls (1.4,1.1) and (0,1.9) .. (0,3);
  \draw (1.4,0) .. controls (1.4,1.1) and (0,1.9) .. (0,3);
  \node at (0, -0.35) {$X$};
  \node at (1.4, -0.35) {$X$};
  \node at (0, 3.3) {$X$};
  \node at (1.4, 3.3) {$X$};
  \draw[->] (2.1,0.2) -- (2.1,2.8) node[midway,right] {$\text{time}$};

  \node at (3.7,1.5) {$=$};
  \node at (4.5,1.5) {$q$};
  \draw (5.1,0) -- (5.1,3);
  \draw (6.1,0) -- (6.1,3);
  \fill (5.1,0) circle (1.3pt); \fill (6.1,0) circle (1.3pt);
  \fill (5.1,3) circle (1.3pt); \fill (6.1,3) circle (1.3pt);
  \node at (7.0,1.5) {$-$};
  \node at (9.1,1.5) {$U_i=\delta_aP_i$};
  \draw (8.2,3) .. controls (8.2,3.7) and (9.2,3.7) .. (9.2,3);
  \draw (8.2,0) .. controls (8.2,-.7) and (9.2,-.7) .. (9.2,0);
  \fill (8.2,3) circle (1.3pt); \fill (9.2,3) circle (1.3pt);
  \fill (8.2,0) circle (1.3pt); \fill (9.2,0) circle (1.3pt);
  \node at (8.7,4.0) {$\text{cup}$};
  \node at (8.7,-1.0) {$\text{cap}$};
\end{tikzpicture}
```

## Facts & Assumptions

**Given:** The anyonic category and normalized duality data, the repeated-charge path space, its vacuum-channel projector $P_i$, and $q\in\mathbb C^\times$ with $q+q^{-1}=\delta_a$.

[F1] [[def-anyonic-local-channel-projector]]: the local channel projector is $P_{i,s}=F_i^{-1}\Pi_sF_i$, retaining every multiplicity coordinate.

[F2] [[thm-anyonic-local-channel-projectors-are-orthogonal]]: in a unitary fusion category with orthonormal tree bases, each $P_{i,s}$ is an orthogonal projection.

[F3] [[def-anyonic-frobenius-schur-sign]]: the normalized maps are $\operatorname{coev}=\sqrt{d_a}\,v$, $\operatorname{ev}=\kappa_a\sqrt{d_a}\,v^\dagger$, and $\kappa_a\in\{+1,-1\}$; this sign is not a braiding phase.

[F4] [[lem-anyonic-vacuum-f-symbol-frobenius-schur-normalization]]: for the stated vacuum gauge, $\delta_a=\kappa_ad_a$.

[F5] [[prop-anyonic-vacuum-channel-projectors-satisfy-temperley-lieb]]: for the repeated-$a$ path space, $U_i=\delta_aP_i$ satisfies the Temperley–Lieb relations with this signed $\delta_a$.

[F6] [[thm-qftx-tl-hecke-braid]]: if $U_i$ satisfy those relations and $\delta_a=q+q^{-1}$, then $B_i=qI_V-U_i$.

## Verification

1.1 If $v\in\operatorname{ran}P_i$, then $P_iv=v$ and $B_iv=(qI_V-\delta_aP_i)v=(q-\delta_a)v=-q^{-1}v$, using $q+q^{-1}=\delta_a$. [F1, F3, F4, F6, given, algebra]

2.1 If $v\in\ker P_i$, then $P_iv=0$ and $B_iv=qv$. Since $P_i$ is an orthogonal projection by [F2], $V=\operatorname{ran}P_i\oplus\ker P_i$ orthogonally, so these two subspaces exhaust the operator's action and no absent subspace contributes an eigenvalue. [F2, F6, step 1.1, algebra]

3.1 The relation $U_i=\delta_aP_i$ and the exchange operator definition are exactly those in [F5] and [F6], with the signed $\delta_a$ from [F4]. Therefore the displayed scalars are the exchange eigenvalues on the corresponding channel subspaces; no physical transport or measurement premise is used. [F4, F5, F6, step 1.1, step 2.1] ∎

## Remarks

The sign $\kappa_a$ is retained throughout. A choice of $q$ satisfying $q+q^{-1}=\kappa_ad_a$ is a stated hypothesis; no unitarity of $q$ or physical realization is inferred.
