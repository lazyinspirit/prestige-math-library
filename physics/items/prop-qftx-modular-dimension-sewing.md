---
id: prop-qftx-modular-dimension-sewing
kind: proposition
title: "Modular dimensions follow from exact sewing"
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: mathematics
physical_scope: "Pure mathematics; no physical premises or physical claim."
dependency_level: 1
deps:
  - def-qftx-weighted-topological-model
  - def-modular-ribbon-category-and-hopf-link-data
  - cor-rt-torus-and-state-dimension-formula
  - thm-weighted-rt-tqft-and-factorization
  - lem-simple-ribbon-fusion-dimensions-are-nonzero
  - lem-modular-hopf-matrix-squared
  - def-axiom-of-choice
  - def-countable-choice
dependency_roles:
  def-qftx-weighted-topological-model: mathematical-premise
  def-modular-ribbon-category-and-hopf-link-data: mathematical-premise
  cor-rt-torus-and-state-dimension-formula: mathematical-premise
  thm-weighted-rt-tqft-and-factorization: mathematical-premise
  lem-simple-ribbon-fusion-dimensions-are-nonzero: mathematical-premise
  lem-modular-hopf-matrix-squared: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  def-countable-choice: mathematical-premise
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Kevin Walker, On Witten's 3-manifold Invariants"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/walker3.pdf"
      locator: "§7, Theorem 7.9 and partition-function gluing; context only."
    - title: "Pavel Etingof, Shlomo Gelaki, Dmitri Nikshych, and Victor Ostrik, Tensor Categories"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
      locator: "§§8.14–8.16, printed pp. 227–232: modular S-matrix, duality, Verlinde identity, and modular-group anomaly."
    - title: "Bojko Bakalov and Alexander Kirillov, Lectures on Tensor Categories and Modular Functors, Chapter 5"
      url: "https://ncatlab.org/nlab/files/BakalovKirillovChapter5.pdf"
      locator: "§5.5, printed pp. 117–120: modular-functor construction and the closed-genus dimension formula exercise; context only."
verification:
  precheck: pending
---

## Statement

Assume full AC and its inherited countable-choice consequences. Let $\mathcal C$ be a complex modular ribbon fusion category with simple-label set $I$, unit label $0$, simple dimensions $d_i$, Hopf-link matrix $s$, and a chosen square root $D$ of $\sum_{i\in I}d_i^2$. Put $S=s/D$ and $H=\bigoplus_{i\in I}i\otimes i^*$. In the weighted RT model, define the closed unmarked genus-$g$ state space by $V(\Sigma_g)=\operatorname{Hom}_{\mathcal C}(\mathbf1,H^{\otimes g})$. For every integer $g\ge0$,

$$\dim_{\mathbb C}V(\Sigma_g)=\sum_{i\in I}S_{0i}^{\,2-2g},$$

with no complex conjugation in this formula. The sphere state space has dimension one, and the unmarked torus has dimension $|I|$ with basis $b_i:\mathbf1\to i\otimes i^*\subset H$. For every compatible separating or nonseparating circle cut, the actual normalized RT tube map from the complete direct sum of dual-label channels to the glued state space is an isomorphism; its inverse is the complete cutting resolution, retaining all multiplicities, markings, tensor orders, and Lagrangian identifications.

For the torus convention, orient the meridian/longitude basis $(m,l)$ by $\omega(m,l)=1$ and choose reference and object Lagrangians $\alpha=\lambda=\mathbb Rm$. The positive Hopf mapping-cylinder class and positive core-twist class have respective matrices

$$s_+=\begin{pmatrix}0&1\\-1&0\end{pmatrix},\qquad t=\begin{pmatrix}1&1\\0&1\end{pmatrix},$$

with columns the images of $m,l$. Their operators are $S_{ji}=s_{ji}/D$ and $T_{ji}=\delta_{ji}\theta_i$, where $s$ is the Hopf-link matrix of $\mathcal C$. For this positive pair, $S^2=C$ and $(ST)^3=\kappa I$, with $C_{ji}=\delta_{j,i^*}$. The inverse Hopf class $s_-=s_+^{-1}$ acts by $S^{-1}$ and satisfies $(S^{-1}T)^3=\kappa C$; when labels are not all self-dual, $C$ need not be $I$.

## Statement references

[[def-qftx-weighted-topological-model]]

[[cor-rt-torus-and-state-dimension-formula]]

[[thm-weighted-rt-tqft-and-factorization]]

[[def-modular-ribbon-category-and-hopf-link-data]]

[[lem-simple-ribbon-fusion-dimensions-are-nonzero]]

[[lem-modular-hopf-matrix-squared]]

## Factorization diagram

For a compatible cut $\gamma$, $G_\gamma$ is the actual normalized tube-sewing map and $F_\gamma$ is its complete cutting inverse. The displayed triangle records $F_\gamma G_\gamma=\mathrm{id}$ on the direct-sum channel space; the other inverse identity $G_\gamma F_\gamma=\mathrm{id}$ holds on the glued state space. All labels and markings remain those of the supplied cut convention. The diagram records these maps and is not used as a proof.

```tikzcd
\bigoplus_{i\in I} V(\Sigma_{\mathrm{cut}};\vec W,i,i^*) \arrow[r,"G_\gamma"] \arrow[dr,"\mathrm{id}"'] & V(\Sigma_{\mathrm{glued}};\vec W) \arrow[d,"F_\gamma"] \\
& \bigoplus_{i\in I} V(\Sigma_{\mathrm{cut}};\vec W,i,i^*)
```

## Facts & Assumptions

**Given:** A complex modular ribbon fusion category, its weighted RT model, an integer $g\ge0$, and, when a cut is considered, a compatible marked separating or nonseparating circle cut.

[A1] Full AC is adopted, with countable choice retained as an inherited consequence; the weighted RT supplier states both assumptions explicitly ([[def-axiom-of-choice]], [[def-countable-choice]]).

[L1] [[def-qftx-weighted-topological-model]] defines the state spaces and the exact weighted RT functor used in this proposition, with $S=s/D$ and weight parameter $\kappa=p_+/D$.

[F1] [[def-modular-ribbon-category-and-hopf-link-data]] defines the finite set $I$, $d_i$, $s$, $D^2=\sum_i d_i^2$, and modularity by invertibility of $s$; it assumes no positivity of $d_i$ or $D$.

[F2] [[cor-rt-torus-and-state-dimension-formula]] proves the exact genus-$g$ dimension formula, with no complex conjugation, and fixes $S=s/D$, the dual-label convention $S^2=C$, and the torus basis.

[F3] [[cor-rt-torus-and-state-dimension-formula]] fixes the positive Hopf class $s_+$ and positive core-twist class $t$ relative to $\omega(m,l)=1$ and $\alpha=\lambda=\mathbb Rm$, with operators $S_{ji}=s_{ji}/D$ and $T_{ji}=\delta_{ji}\theta_i$.

[F4] [[cor-rt-torus-and-state-dimension-formula]] gives $S^2=C$ and, for the positive pair, $(ST)^3=\kappa I$; replacing the positive Hopf class by its inverse gives $(S^{-1}T)^3=\kappa C$.

[F5] [[thm-weighted-rt-tqft-and-factorization]] proves the actual weighted functor and normalized tube maps; for every compatible circle cut it supplies the complete dual-label sewing isomorphism and its composition-dual cutting inverse.

[F6] [[lem-simple-ribbon-fusion-dimensions-are-nonzero]] proves $d_i\ne0$ for each simple label $i$.

[F7] [[lem-modular-hopf-matrix-squared]] proves $D^2\ne0$ and $S^2=C$, where $C_{ij}=\delta_{i,j^*}$.

## Proof

1.1 Apply [F2] with no marked labels to the state space defined in [L1] and [F1]. It gives $\dim_{\mathbb C}V(\Sigma_g)=\sum_{i\in I}S_{0i}^{2-2g}$ for every $g\ge0$, with the specified algebraic normalization and no conjugation. The torus part of [F3] has the matched hypotheses $\omega(m,l)=1$ and $\alpha=\lambda=\mathbb Rm$; [F4] gives the anomaly-bearing relation for these positive classes and the distinct inverse-generator relation after replacing the positive Hopf class by its inverse. [A1, L1, F1, F2, F3, F4, given]

1.2 For $g=0$, [L1] gives $V(\Sigma_0)=\operatorname{Hom}_{\mathcal C}(\mathbf1,\mathbf1)$, since $H^{\otimes0}=\mathbf1$. The unit is simple over $\mathbb C$ by [F1], so this Hom space is $\mathbb C$ and the sphere state space has dimension one. For each $i\in I$, the braiding unit axioms make the double braiding with label $0$, after the canonical unit identifications, the identity of $i$. The trace convention in [F1] therefore gives $s_{0i}=d_i$, and hence $S_{0i}=d_i/D$. By [F6] and [F7], both $d_i$ and $D$ are nonzero, so every $S_{0i}$ is nonzero. Thus the $g=1$ instance of [F2] has each term $S_{0i}^{0}=1$, and the torus dimension is $|I|$. Its basis $b_i$ is the one specified by [F2]. [L1, F1, F2, F6, F7, algebra]

2.1 For any compatible cut, [F5] supplies the actual normalized tube map from the direct sum of the simple dual-label channels and its complete composition-dual cutting inverse, including separating and nonseparating cuts, all multiplicities, commuting disjoint cuts, and iterated gluing. Thus the maps in the statement are mutually inverse on the specified state spaces; the diagram only records that already-proved interface. [A1, L1, F5, step 1.1, construct] ∎

