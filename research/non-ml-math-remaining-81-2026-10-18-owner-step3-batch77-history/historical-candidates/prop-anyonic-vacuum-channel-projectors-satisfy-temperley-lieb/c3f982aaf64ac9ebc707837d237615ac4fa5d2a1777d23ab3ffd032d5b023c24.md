---
id: prop-anyonic-vacuum-channel-projectors-satisfy-temperley-lieb
kind: proposition
title: "Vacuum-channel anyonic projectors satisfy Temperley–Lieb relations"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 9
deps: [def-anyonic-local-channel-projector, lem-anyonic-vacuum-f-symbol-frobenius-schur-normalization, thm-anyonic-local-channel-projectors-are-orthogonal, thm-anyonic-channel-projectors-are-reparenthesization-independent]
justified_by: []
proof_strategy: direct
axiom_use: None; the proof uses finite-dimensional channel blocks and duality.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Joshua Chen, The Temperley-Lieb Categories and Skein Modules"
      url: "https://arxiv.org/pdf/1502.06845"
      locator: "§2.3, Theorem 2.3.2 and Proposition 2.3.6, PDF pp. 19–23: vacuum projector recursion and Temperley–Lieb relations."
    - title: "Shu-Heng Shao, What’s Done Cannot Be Undone: TASI Lectures on Non-Invertible Symmetries"
      url: "https://arxiv.org/pdf/2308.00747"
      locator: "§3.4.1, PDF pp. 34–35: F-move channel projections in a fusion category."
verification:
  precheck: pass
---

## Statement

Let $a$ be a self-dual simple site charge with one-dimensional vacuum fusion $a\otimes a\to\mathbf1$, and supply the normalized pivotal cup/cap datum of [[def-anyonic-frobenius-schur-sign]]. On a repeated-$a$ path space let $P_i:=P_{i,\mathbf1}$ and set $U_i:=\delta_aP_i$, where $\delta_a=\kappa_ad_a$ is the signed loop parameter of [[lem-anyonic-vacuum-f-symbol-frobenius-schur-normalization]]. Then, for all applicable interior indices,

$$U_i^2=\delta_aU_i,\qquad U_iU_{i+1}U_i=U_i,\qquad U_iU_j=U_jU_i\quad(|i-j|>1).$$

The sign $\kappa_a$ is retained; replacing it by $+1$ is justified only in examples whose self-duality datum has that sign.

For the diagram convention, each box $U_i$ has a cup at the top and a cap at the bottom on strands $i,i+1$; multiplication stacks diagrams from top to bottom, and a closed circle evaluates to $\delta_a$. In the left picture the upper box's cup and the lower box's cap remain on the outside, while the upper cap and lower cup form one closed circle. Thus the picture records $U_i^2=\delta_aU_i$; the proof below verifies this and the adjacent and distant relations algebraically, without relying on the drawing.

```tikz
\begin{tikzpicture}[baseline=(current bounding box.center),scale=.72]
  % The outer top cup and bottom cap are the remaining U_i diagram.
  \draw (0,3) .. controls (0,3.65) and (1,3.65) .. (1,3);
  \fill (0,3) circle (1.4pt); \fill (1,3) circle (1.4pt);
  \draw (0,2) .. controls (0,2.65) and (1,2.65) .. (1,2);
  \draw (0,2) .. controls (0,1.35) and (1,1.35) .. (1,2);
  \draw (0,1) .. controls (0,.35) and (1,.35) .. (1,1);
  \fill (0,1) circle (1.4pt); \fill (1,1) circle (1.4pt);
  \node at (1.45,2) {$=\delta_a$};
  \draw (3,3) .. controls (3,3.65) and (4,3.65) .. (4,3);
  \draw (3,1) .. controls (3,.35) and (4,.35) .. (4,1);
  \fill (3,3) circle (1.4pt); \fill (4,3) circle (1.4pt);
  \fill (3,1) circle (1.4pt); \fill (4,1) circle (1.4pt);
\end{tikzpicture}
```

## Facts & Assumptions

**Given:** A unitary spherical fusion category, identical simple site charge $a$, the specified self-duality datum, and a path length large enough for the displayed indices.

[F1] [[def-anyonic-local-channel-projector]]: $P_i$ is the conjugate of the vacuum-channel projection by the typed local F-move.

[F2] [[thm-anyonic-local-channel-projectors-are-orthogonal]]: each $P_i$ is an orthogonal projection.

[F3] [[lem-anyonic-vacuum-f-symbol-frobenius-schur-normalization]]: the normalized vacuum overlap is $(F^{aaa}_a)_{\mathbf1,\mathbf1}=\kappa_a/d_a$, so its squared modulus is $d_a^{-2}$ and $\delta_a^2=d_a^2$.

[F4] [[thm-anyonic-channel-projectors-are-reparenthesization-independent]]: computations in any canonical parenthesization give the same local operators.

## Proof

**Given:** The unitary category, the vacuum channel, and the operators in the Statement.

1.1 Restrict three adjacent $a$ sites to total charge $a$. The subspace where the first pair fuses to $\mathbf1$ is one-dimensional, since $N_{aa}^{\mathbf1}=1$ and $\mathbf1\otimes a\cong a$. The same holds for the subspace where the last pair fuses to $\mathbf1$. In the two orthonormal tree bases their unit vectors have overlap $(F^{aaa}_a)_{\mathbf1,\mathbf1}$. The product of rank-one projections onto unit vectors $e,f$ is $P_eP_fP_e=|\langle e,f\rangle|^2P_e$, so [F3] gives $P_iP_{i+1}P_i=d_a^{-2}P_i$ on this total-$a$ block. Outside total $a$, both vacuum-pair projections vanish because the remaining site is $a$; hence the identity holds on the full three-site space and, after tensoring with spectator identities, on the path space. [F1, F2, F3, given, algebra]

2.1 By [F2], $P_i^2=P_i$, so $U_i^2=\delta_a^2P_i=\delta_aU_i$. The adjacent relation follows from step 1.1: $U_iU_{i+1}U_i=\delta_a^3d_a^{-2}P_i=\delta_aP_i=U_i$, since $\delta_a^2=d_a^2$. [F2, F3, step 1.1, algebra]

3.1 If $|i-j|>1$, the two channel maps act on disjoint tensor factors in a strict monoidal model, so bifunctoriality gives $U_iU_j=U_jU_i$ there. Transporting this equality to the fixed parenthesization preserves it by [F4]. Thus all displayed Temperley–Lieb relations hold. [F1, F4, step 2.1, algebra] ∎
