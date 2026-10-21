---
id: thm-group-convolution-equivariance
kind: theorem
title: "Group cross-correlation and compatible layers are equivariant"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 2
deps:
  - def-discrete-convolutional-layer
  - def-group-action-on-feature-maps
  - def-equivariant-neural-layer
  - def-group-convolution
  - def-pointwise-nonlinearity-and-pooling-on-group-features
  - def-p4-p4m-lattice-symmetry-groups
  - def-group-action
  - def-equivariant-map-of-group-actions
  - def-group
  - def-subgroup
  - def-coset
  - def-function
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Taco S. Cohen and Max Welling, Group Equivariant Convolutional Networks"
      url: "https://arxiv.org/pdf/1602.07576"
      locator: "§§2, 4.1–4.4, 5, 6.1–6.3, and Appendix A, especially Eqs. (8), (10)–(17), and (20)."
    - title: "Ian Goodfellow, Yoshua Bengio, and Aaron Courville, Deep Learning"
      url: "https://www.deeplearningbook.org/contents/convnets.html"
      locator: "Chapter 9 §§9.1–9.5, especially the discrete correlation, translation, pooling, stride, and padding discussions."
verification:
  precheck: pass
---

## Statement

Let $G$ be a discrete group acting on the left on the square lattice $\mathbb Z^2$, and let feature maps take values in finite-dimensional row-vector channel spaces. Assume every group or lattice sum below has finite support or converges absolutely in each output coordinate. For group-indexed features $f:G\to\mathbb R^{C_{\rm in}}$ and a matrix-valued filter $\Psi:G\to\mathbb R^{C_{\rm in}\times C_{\rm out}}$, group-to-group cross-correlation satisfies

$$
C_\Psi(L_u f)=L_u(C_\Psi f)\qquad(u\in G).
$$

For an image feature map $f:\mathbb Z^2\to\mathbb R^{C_{\rm in}}$ and a lattice filter $\Psi:\mathbb Z^2\to\mathbb R^{C_{\rm in}\times C_{\rm out}}$, the first-layer image-to-group cross-correlation also satisfies

$$
E_\Psi(L_u f)=L_u(E_\Psi f)\qquad(u\in G),
$$

where the input action is induced by the action on $\mathbb Z^2$ and the output action is the left action on maps on $G$. The bias-free sum in the ordinary full-lattice, unit-stride discrete layer with origin $a=0$ is the translation-group instance of this formula; any fixed origin shift and the layer's constant output bias preserve translation equivariance. Componentwise pointwise nonlinearities and finite-neighborhood max pooling without subsampling commute with the left action. Restricting a group feature map to a subgroup $H\le G$ preserves $H$-equivariance; for finite $H$, left-coset max pooling produces a $G$-equivariant feature map on $G/H$, and when $H=G$ is finite it is invariant. Finite compositions of equivariant layers remain equivariant.

The full p4 and p4m lattice symmetry groups are infinite because they contain all integer translations; no finiteness assumption on $G$ is made. On a finite grid, the theorem applies only when the domain, output sampling, and boundary convention respect the stated actions. Arbitrary cropping, padding, or stride need not do so. No continuous-rotation, universal-approximation, or empirical-superiority claim follows.

## Statement references

[[def-group|group axioms and inverses]]

[[def-group-action|left group actions]]

[[def-equivariant-map-of-group-actions|the generic intertwining condition]]

[[def-function|functions and declared domains/codomains]]

[[def-group-action-on-feature-maps|left actions on feature maps]]

[[def-discrete-convolutional-layer|the discrete layer and boundary conventions]]

[[def-equivariant-neural-layer|equivariant neural layers]]

[[def-group-convolution|group and image-to-group correlation]]

[[def-pointwise-nonlinearity-and-pooling-on-group-features|pointwise and pooling operators]]

[[def-subgroup|subgroups]]

[[def-coset|left cosets]]

[[def-p4-p4m-lattice-symmetry-groups|the p4 and p4m lattice groups]]

[Cohen and Welling, “Group Equivariant Convolutional Networks,” §§2, 4–6 and Appendix A](https://arxiv.org/pdf/1602.07576)

[Goodfellow, Bengio, and Courville, *Deep Learning*, Chapter 9 §§9.1–9.5](https://www.deeplearningbook.org/contents/convnets.html)

## Equivariance diagram

For each $u\in G$, this square records the equation $\Phi\circ T_u=T'_u\circ\Phi$: the vertical maps act on input and output feature spaces, respectively. It is a notation summary; the convolution claims below are proved by direct reindexing.

```tikzcd
\begin{tikzcd}
X \arrow[r,"\Phi"] \arrow[d,"T_u"'] & Y \arrow[d,"T'_u"] \\
X \arrow[r,"\Phi"'] & Y
\end{tikzcd}
```

## Facts & Assumptions

**Given:** The group actions, feature maps, filters, finite-support or absolute-convergence conditions, and operators stated above. Prove the equivariance claims and the composition rule.

[F1] [[def-group-action]]: A left action satisfies $e\cdot x=x$ and $(gh)\cdot x=g\cdot(h\cdot x)$ for every $g,h$ and acted-on point $x$.

[F2] [[def-group]]: Group multiplication is associative and each element has a two-sided inverse.

[F3] [[def-group-action-on-feature-maps]]: The induced action is $(L_uf)(x)=f(u^{-1}\cdot x)$, and on group-indexed maps $(L_uF)(g)=F(u^{-1}g)$.

[F4] [[def-group-convolution]]: Group-to-group correlation is $(C_\Psi f)(g)=\sum_{h\in G}f(h)\Psi(g^{-1}h)$ when the sum is finite or absolutely convergent.

[F5] [[def-group-convolution]]: Image-to-group correlation is $(E_\Psi f)(g)=\sum_{x\in\mathbb Z^2}f(x)\Psi(g^{-1}\cdot x)$ when the sum is finite or absolutely convergent.

[F6] [[def-pointwise-nonlinearity-and-pooling-on-group-features]]: Pointwise maps act componentwise, $N_\nu F(g)_c=\nu(F(g)_c)$, and non-strided pooling is $(P_UF)(g)_c=\max_{v\in U}F(gv)_c$ for finite nonempty $U$. For a finite subgroup $H\le G$, left-coset pooling is $Q_HF:G/H\to\mathbb R^C$, where $G/H=\{gH:g\in G\}$ and $(Q_HF)(gH)_c=\max_{h\in H}F(gh)_c$; the induced left action on the index set is $a\cdot(gH)=(ag)H$.

[F7] [[def-equivariant-neural-layer]]: Equivariance between input and output actions is $\Phi(T_gx)=T'_g\Phi(x)$ for every $g$ and $x$.

[F8] [[def-discrete-convolutional-layer]]: The discrete layer uses a finite offset set $K$ and computes $y(p)=b+\sum_{\delta\in K}\widetilde x(a+s\odot p+\delta)W_\delta$ with the declared extension and stride.

[F9] [[def-p4-p4m-lattice-symmetry-groups]]: The full p4 and p4m groups contain every translation $(t,I)$ for $t\in\mathbb Z^2$ and are infinite.

[F10] [[def-equivariant-map-of-group-actions]]: An equivariant map between $G$-sets satisfies $f(g\cdot x)=g\cdot f(x)$ for every $g$ and $x$.

[F11] [[def-subgroup]]: A subgroup contains the identity and is closed under the group operation and inverses.

[F12] [[def-coset]]: The left coset of $H$ represented by $g$ is $gH=\{gh:h\in H\}$.

## Proof

1.1 For group-to-group correlation, $(C_\Psi(L_uf))(g)=\sum_{h\in G}f(u^{-1}h)\Psi(g^{-1}h)$. Reindex by the bijection $h=uk$ to obtain $\sum_{k\in G}f(k)\Psi(g^{-1}uk)$. The identity $(u^{-1}g)^{-1}=g^{-1}u$ follows because both products of $u^{-1}g$ and $g^{-1}u$ are $e$ by associativity and the two-sided inverse laws; two two-sided inverses $a,b$ of $z$ coincide since $a=a(zb)=(az)b=b$. Hence the sum is $\sum_{k\in G}f(k)\Psi((u^{-1}g)^{-1}k)=(C_\Psi f)(u^{-1}g)=(L_u(C_\Psi f))(g)$. The reindexing is valid for finite support or absolute convergence. [given, F1, F2, F3, F4, algebra]

1.2 For every channel $c$, $(N_\nu(L_uF))(g)_c=\nu(F(u^{-1}g)_c)=(L_u(N_\nu F))(g)_c$. Likewise, $(P_U(L_uF))(g)_c=\max_{v\in U}F(u^{-1}gv)_c=(P_UF)(u^{-1}g)_c=(L_u(P_UF))(g)_c$. Thus both operators commute with the left action. [given, F3, F6, algebra]

1.3 For $a\in H$ and $h\in H$, $(R_H(L_aF))(h)=F(a^{-1}h)=(L_a(R_HF))(h)$ because $a^{-1}h\in H$ by [F11]; this proves only $H$-equivariance after subgroup restriction. For finite $H$ and arbitrary $a\in G$, $(Q_H(L_aF))(gH)_c=\max_{h\in H}F(a^{-1}gh)_c=(Q_HF)((a^{-1}g)H)_c=(L_a^{G/H}(Q_HF))(gH)_c$, using the left-coset indexing in [F12] and the action stated in [F6]. If $H=G$ is finite then $G/H$ is a singleton, whose action is trivial, so the output is invariant. [given, F3, F6, F11, F12, algebra]

2.1 For the first-layer operation, $(E_\Psi(L_uf))(g)=\sum_{x\in\mathbb Z^2}f(u^{-1}\cdot x)\Psi(g^{-1}\cdot x)$. The map $x=u\cdot y$ is a bijection of $\mathbb Z^2$ with inverse $y=u^{-1}\cdot x$ by [F1], so reindexing gives $\sum_{y\in\mathbb Z^2}f(y)\Psi(g^{-1}\cdot(u\cdot y))=\sum_{y\in\mathbb Z^2}f(y)\Psi((g^{-1}u)\cdot y)=(E_\Psi f)(u^{-1}g)=(L_u(E_\Psi f))(g)$, using the inverse identity in 1.1. Absolute convergence or finite support justifies the reindexing. For $G=\mathbb Z^2$ acting by translations, $\Psi(\delta)=W_\delta$ with finite support, full-lattice input and output domains, unit stride, and origin $a=0$, setting $x=p+\delta$ identifies the sum in this formula with the cross-correlation term of the layer in [F8]. For any fixed origin $a$, that sum is instead $(E_\Psi f)(p+a)$, which remains translation-equivariant because translations of $\mathbb Z^2$ commute. The layer's output bias is constant across $p$, so the induced translation action fixes it; adding it preserves equivariance of the full layer. [given, F1, F2, F3, F5, F8, step 1.1, algebra]

3.1 If $\Phi$ and $\Psi$ are equivariant maps for compatible input, intermediate, and output actions, then $(\Psi\circ\Phi)(T_gx)=\Psi(T'_g\Phi(x))=T''_g(\Psi\circ\Phi)(x)$ by [F7] and [F10]; induction gives equivariance of any finite stack. The reindexings in steps 1.1 and 2.1 require actual group actions on the full index sets, while [F8] permits arbitrary finite-grid boundary and stride choices; therefore those choices are covered only when compatible with the actions. In particular [F9] shows no finite-group assumption was used for p4 or p4m. [given, F7, F8, F9, F10, step 1.1, step 1.2, step 1.3, step 2.1, algebra] ∎
