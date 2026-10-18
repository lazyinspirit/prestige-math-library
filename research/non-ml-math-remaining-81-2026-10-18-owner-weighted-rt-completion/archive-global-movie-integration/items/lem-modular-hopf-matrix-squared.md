---
id: lem-modular-hopf-matrix-squared
kind: lemma
title: "The modular Hopf-link matrix squares to D² times duality"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 3
deps: [def-modular-ribbon-category-and-hopf-link-data, lem-simple-ribbon-fusion-dimensions-are-nonzero, lem-balancing-and-hopf-link-character-identity, lem-fusion-ring-character-orthogonality, def-rigid-object-and-rigid-monoidal-category]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: n/a
sources:
  references:
    - title: "Etingof, Gelaki, Nikshych, and Ostrik, Tensor Categories, Proposition 8.14.2"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
    - title: "Etingof, Nikshych, and Ostrik, On Fusion Categories, §2.2"
      url: "https://arxiv.org/pdf/math/0203060"
---

## Statement

Let $\mathcal C$ be modular under [[def-modular-ribbon-category-and-hopf-link-data]]. Let $C$ be the charge-conjugation matrix, $C_{ij}=\delta_{i,j^*}$. Then

$$s^2=D^2C.$$

In particular $D^2=\sum_i d_i^2\ne0$, so either square root $D$ gives an invertible normalized matrix $S=s/D$ with $S^2=C$.

## Facts & Assumptions

**Given:** A complex modular ribbon fusion category with the Hopf-link data of [[def-modular-ribbon-category-and-hopf-link-data]].

[F1] The characters $h_i(x)=s_{ix}/d_i$ are unital fusion-ring characters; $s_{ij}=s_{ji}$, $s_{i^*j^*}=s_{ij}$, and $d_{i^*}=d_i$ ([[lem-balancing-and-hopf-link-character-identity]]).

[F2] Distinct unital fusion-ring characters satisfy $\sum_x\chi(x)\psi(x^*)=0$ ([[lem-fusion-ring-character-orthogonality]]).

[F3] $d_i\ne0$ for every simple label, the unit has $d_0=1$, and $N_{ii^*}^0=1$ ([[lem-simple-ribbon-fusion-dimensions-are-nonzero]], [[def-modular-ribbon-category-and-hopf-link-data]], [[def-rigid-object-and-rigid-monoidal-category]]).

## Proof

**Given:** The data in the Statement.

1.1 Since $s$ is invertible, its rows are linearly independent. If $h_i=h_j$, then $s_{ix}=d_i h_i(x)$ and $s_{jx}=d_j h_j(x)$ make the two rows proportional; therefore $h_i\ne h_j$ for distinct labels. For $i\ne j^*$, use symmetry and duality from [F1] to write
$\sum_xs_{ix}s_{xj}=\sum_xs_{xi}s_{x^*j^*}=d_i d_{j^*}\sum_xh_i(x)h_{j^*}(x^*).$
The final sum is zero by [F2], since $h_i\ne h_{j^*}$. Hence $(s^2)_{ij}=0$ unless $j=i^*$. [F1, F2, F3, given, algebra]

1.2 For the remaining entries, apply the character identity in [F1] with labels $i,i^*$:
$\sum_xs_{xi}s_{x,i^*}=\sum_wN_{i,i^*}^w\sum_xd_xs_{xw}.$
Since $s_{xw}=d_w h_w(x)$, the inner sum is $d_w\sum_xh_w(x)h_0(x^*)$, using $h_0(x^*)=d_{x^*}=d_x$. By [F2] this vanishes for $w\ne0$; for $w=0$ it equals $\sum_xd_x^2=D^2$. Thus the whole sum is $N_{i,i^*}^0D^2=D^2$ by [F3]. [F1, F2, F3, step 1.1, algebra]

2.1 Steps 1.1 and 1.2 give $s^2=D^2C$. Since $C^2=I$ and $s$ is invertible, $D^2=0$ would force $s^2=0$, a contradiction. Thus $D^2\ne0$; choosing a square root gives $S=s/D$, and division of the identity by $D^2$ gives $S^2=C$. [given, step 1.1, step 1.2, algebra] ∎