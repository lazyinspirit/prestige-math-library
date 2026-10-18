---
id: ex-d4-massive-spin-and-so3-descent
kind: example
title: D=4 massive spin one-half and spin one descent
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 4
proof_strategy: direct
axiom_use: >-
  AC is inherited from the positive-energy classification and the SU(2)
  covering supplier; the explicit finite-dimensional module calculations use
  no additional choice.
deps:
  - def-axiom-of-choice
  - thm-positive-energy-wigner-mackey-classification-for-connected-covers
  - lem-central-kernel-descent-for-poincare-inductions
  - lem-lorentz-stabilizers-and-connected-cover-preimages
  - ex-su-two-to-so-three-as-a-covering-homomorphism
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Xavier Bekaert and Nicolas Boulanger, The unitary representations of the Poincaré group in any spacetime dimension, v2 (2021)"
      url: "https://arxiv.org/pdf/hep-th/0611263"
      locator: "§3.2, PDF pp. 11–13; the local example spells out the massive double-cover descent."
    - title: "Niklas Beisert, Quantum Field Theory I, Lecture Notes, ETH Zürich, 2025 HS"
      url: "https://people.phys.ethz.ch/~lecture/nbeisert/QFT1-25HS/QFT1-25HS-Notes.pdf"
      locator: "Chapter 4.4, printed p. 4.14 (PDF p. 62), massive D=4 spin convention."

---

## Example

In spacetime dimension $D=4$, take the universal Lorentz cover $\widetilde L$, so the massive little group at $p_m=me_0$, $m>0$, is $\mathrm{Spin}(3)\cong SU(2)$ and its central deck element is $z=-I$. For $m_0=1,2$, let $W_{m_0}=\operatorname{Sym}^{m_0}(\mathbb C^2)$ with the natural $SU(2)$ action, and let $\theta_{m_0}$ be that action; using the convention that highest weight $m_0$ has spin $m_0/2$, these are spin $\tfrac12$ and spin $1$. Their positive-energy Poincaré inductions
$$
\pi_{p_m,\theta_{m_0}}=\operatorname{Ind}_{\mathbb R^4\rtimes SU(2)}^{\mathbb R^4\rtimes\widetilde L}(\chi_{p_m}\otimes\theta_{m_0})
$$
are irreducible. The spin-$\tfrac12$ induction has $z$ acting by $-I$ and does not descend to the ordinary Poincaré group with Lorentz group $SO_0(3,1)$; the spin-$1$ induction has $z$ acting by $+I$ and does descend.

## Facts & Assumptions

**Given:** $D=4$, $m>0$, $p_m=me_0$, and the universal double cover of $SO_0(3,1)$.

[F1] [[thm-positive-energy-wigner-mackey-classification-for-connected-covers]]: for $p_m\in C_+$ and an irreducible representation of its stabilizer, induction gives an irreducible positive-energy representation.

[F2] [[lem-lorentz-stabilizers-and-connected-cover-preimages]]: in $D\ge4$ the massive stabilizer for the universal cover is $\mathrm{Spin}(D-1)$.

[F3] [[ex-su-two-to-so-three-as-a-covering-homomorphism]]: $SU(2)$ is the unit-quaternion group and its covering of $SO(3)$ has kernel $\{I,-I\}$.

[F4] [[lem-central-kernel-descent-for-poincare-inductions]]: an induced representation descends through a cover quotient exactly when the little-group representation is trivial on its central kernel.

[A1] AC is the choice-function principle required by [F1] and the covering supplier [F3]. [[def-axiom-of-choice]]

## Proof

**Given:** The group data and representations in the Example.

1.1 The standard $SU(2)$ action on $\mathbb C^2$ is unitary and smooth; its tensor-square action is also unitary and smooth, and its symmetric subspace $W_2=\operatorname{Sym}^2(\mathbb C^2)$ is invariant. Hence both restricted actions $\theta_1$ and $\theta_2$ are strongly continuous unitary representations. The standard action on $W_1=\mathbb C^2$ is irreducible: for every unit vector $(u,v)$, the matrix $\begin{pmatrix}u&-\overline v\\v&\overline u\end{pmatrix}\in SU(2)$ sends $e_1$ to $(u,v)$, so $SU(2)$ is transitive on the unit sphere and any nonzero invariant subspace is all of $W_1$. For $W_2$, use the basis $e_1\odot e_1,e_1\odot e_2,e_2\odot e_2$. The torus element $t=\operatorname{diag}(e^{i\pi/6},e^{-i\pi/6})$ acts with distinct eigenvalues $e^{i\pi/3},1,e^{-i\pi/3}$. If a nonzero invariant subspace contains a vector with several weight terms, Lagrange interpolation polynomials in $\theta_2(t)$ project onto its nonzero weight components, so it contains at least one basis vector. A group-invariant subspace is invariant under the differentiated $\mathfrak{su}(2)$ action because it is closed and contains each group orbit; complex-linear extension makes it invariant under $E_{12}$ and $E_{21}$ in $\mathfrak{sl}_2(\mathbb C)$. These operators send $e_2\odot e_2\mapsto2e_1\odot e_2\mapsto2e_1\odot e_1$ and $e_1\odot e_1\mapsto2e_1\odot e_2\mapsto2e_2\odot e_2$ (with nonzero coefficients), and from the middle vector they reach both endpoints. Thus every nonzero invariant subspace is all of $W_2$. The torus weights are $z,z^{-1}$ for $W_1$ and $z^2,1,z^{-2}$ for $W_2$, which give the spin labels $1/2$ and $1$ under the convention in the Example. [F2, F3, A1, given, construct]

2.1 On $W_1=\mathbb C^2$, $z=-I$ acts as $-I$. On the whole tensor square, it acts as $(-I)\otimes(-I)=I$, so its restriction to $W_2$ is also $I$. The kernel of $SU(2)\to SO(3)$ is exactly $\{I,z\}$ by [F3]. [F2, F3, step 1.1, algebra]

3.1 The momentum $p_m$ is future timelike, hence is in $C_+$. By [F1], each $\theta_{m_0}$ gives an irreducible positive-energy induction. Applying [F4] to the central kernel $\{I,z\}$, the spin-$\tfrac12$ induction fails the identity condition and cannot descend; the spin-$1$ induction satisfies it and descends to the ordinary Poincaré group. [F1, F3, F4, step 2.1, given] ∎
