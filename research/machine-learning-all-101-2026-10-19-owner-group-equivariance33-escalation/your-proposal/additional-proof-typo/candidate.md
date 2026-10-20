---
id: ex-p4-and-p4m-orientation-indexed-features
kind: example
title: "p4 and p4m orientation-indexed feature maps"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 3
deps:
  - def-p4-p4m-lattice-symmetry-groups
  - def-group-action-on-feature-maps
  - def-discrete-convolutional-layer
  - def-group-convolution
  - thm-group-convolution-equivariance
proof_strategy: direct
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-altered
sources:
  references:
    - title: "Taco S. Cohen and Max Welling, Group Equivariant Convolutional Networks"
      url: "https://arxiv.org/pdf/1602.07576"
      locator: "§§4.2–4.4, 5–6.1, and Appendix A."
    - title: "Ian Goodfellow, Yoshua Bengio, and Aaron Courville, Deep Learning"
      url: "https://www.deeplearningbook.org/contents/convnets.html"
      locator: "Chapter 9 §§9.1–9.2 and §9.5."
verification:
  precheck: pass
---

## Example

Let $\rho=\begin{pmatrix}0&-1\\1&0\end{pmatrix}$ be the quarter-turn, $\sigma=\begin{pmatrix}1&0\\0&-1\end{pmatrix}$ a reflection, $e_1=(1,0)$, and $e_2=(0,1)$; define $\delta_a(x)=1$ when $x=a$ and $0$ otherwise. The ordinary planar cross-correlation $(f\star\psi)(x)=\sum_{y\in\mathbb Z^2}f(y)\psi(y-x)$ with $f=\delta_0$ and $\psi=\delta_{e_1}$ is not rotation-equivariant with a fixed filter: $L_\rho f=f$, but $f\star\psi=\delta_{-e_1}$ and $L_\rho(f\star\psi)=\delta_{-e_2}\ne\delta_{-e_1}=(L_\rho f)\star\psi$. In a p4 group layer, the feature map is indexed by pairs $(t,\rho^j)$, giving four orientation indices at each translation $t\in\mathbb Z^2$; in a p4m group layer it is indexed by $(t,\rho^j\sigma^\epsilon)$ for $\epsilon\in\{0,1\}$, giving eight. The full p4 and p4m groups remain infinite through their translations, and their group-correlation layers are equivariant for the full left action.

## Example references

[[def-p4-p4m-lattice-symmetry-groups|the p4 and p4m groups and their orientation subgroups]]

[[def-group-action-on-feature-maps|the action on spatial and group-indexed maps]]

[[def-discrete-convolutional-layer|planar cross-correlation convention]]

[[def-group-convolution|group-correlation layer]]

[[thm-group-convolution-equivariance|group-correlation equivariance]]

[Cohen and Welling, “Group Equivariant Convolutional Networks,” §§4.2–4.4, 5–6.1 and Appendix A](https://arxiv.org/pdf/1602.07576)

[Goodfellow, Bengio, and Courville, *Deep Learning*, Chapter 9 §§9.1–9.2 and §9.5](https://www.deeplearningbook.org/contents/convnets.html)

## Facts & Assumptions

**Given:** The p4/p4m groups, feature-map actions, planar correlation, and group-correlation theorem described in the Example. Verify the orientation counts, group-layer equivariance, and fixed-filter rotation failure.

[F1] [[def-p4-p4m-lattice-symmetry-groups]]: The orientation subgroups are $C_4=\{\rho^j\}$ and $D_4=\{\rho^j,\rho^j\sigma\}$; the full groups contain every translation and are infinite.

[F2] [[def-group-action-on-feature-maps]]: The action on a feature map is $(L_uf)(x)=f(u^{-1}\cdot x)$.

[F3] [[def-discrete-convolutional-layer]]: On the full lattice with unit stride, a finite receptive-field layer computes a discrete cross-correlation without kernel reversal.

[F4] [[def-group-convolution]]: Group-to-group cross-correlation uses $(C_\Psi f)(g)=\sum_{h\in G}f(h)\Psi(g^{-1}h)$.

[F5] [[thm-group-convolution-equivariance]]: Group-to-group cross-correlation commutes with the left action whenever its sum is finite or absolutely convergent.

## Verification

1.1 At a fixed translation $t$, the p4 index has the four values $\rho^j$ and p4m has the eight distinct values $\rho^j\sigma^\epsilon$, by [F1]. Distinct translations give infinitely many full group elements in each case. [given, F1, algebra]

1.2 For either full group $G=P_{C_4}$ or $P_{D_4}$, apply [F5] to the group-correlation operator in [F4]. Its input and output actions are the left actions in [F2], so every such group layer is equivariant without treating $G$ as finite. [given, F2, F4, F5]

2.1 Since $\rho(0)=0$, $L_\rho\delta_0=\delta_0$. In the displayed planar correlation, only $y=0$ contributes, and $\delta_{e_1}(e_1)=1$, so $\delta_0\star\delta_{e_1}=\delta_{-e_1}$. Therefore $L_\rho(\delta_0\star\delta_{e_1})=\delta_{\rho(-e_1)}=\delta_{-e_2}$, whereas $(L_\rho\delta_0)\star\delta_{e_1}=\delta_{-e_1}$. As $e_1\ne e_2$, these outputs differ. [given, F2, F3, algebra] ∎
