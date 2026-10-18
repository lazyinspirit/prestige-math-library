---
id: ex-d4-helicity-and-continuous-spin-central-parities
kind: example
title: D=4 helicity and both continuous-spin central parities
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 4
proof_strategy: direct
axiom_use: AC is inherited from the null Mackey classification, Schur's lemma, positive-energy induction, and the descent criterion.
deps:
  - def-axiom-of-choice
  - thm-positive-energy-wigner-mackey-classification-for-connected-covers
  - lem-null-little-group-unitary-duals-for-all-dimensions
  - lem-central-kernel-descent-for-poincare-inductions
  - lem-lorentz-stabilizers-and-connected-cover-preimages
  - thm-schurs-lemma-for-unitary-representations
  - lem-continuous-characters-of-the-real-line-are-exponentials
  - def-covariant-function-model-of-unitary-induction
  - lem-the-induced-action-is-unitary
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Xavier Bekaert and Nicolas Boulanger, The unitary representations of the Poincaré group in any spacetime dimension, v2 (2021)"
      url: "https://arxiv.org/pdf/hep-th/0611263"
      locator: "§3.3 and Appendix B.3, PDF pp. 13–15 and 57–58; the local example records both cover parities."
    - title: "Niklas Beisert, Quantum Field Theory I, Lecture Notes, ETH Zürich, 2025 HS"
      url: "https://people.phys.ethz.ch/~lecture/nbeisert/QFT1-25HS/QFT1-25HS-Notes.pdf"
      locator: "Chapter 4.4, printed pp. 4.15–4.16 (PDF pp. 63–64), helicity and continuous-spin branches."

---

## Example

Let $p_+=(1,0,0,1)$ be a nonzero future null momentum in $D=4$. For the base Lorentz group its null little group is $E=\mathbb R^2\rtimes SO(2)$; for the universal double cover it is $\widetilde E=\mathbb R^2\rtimes\mathrm{Spin}(2)$ with $\mathrm{Spin}(2)=\mathbb R/(4\pi\mathbb Z)$. Write $z$ for the lifted $2\pi$ rotation, the order-two deck element.

On the zero translation orbit of $\widehat{\mathbb R^2}$, the little-group representations are the helicity characters
$$
\theta_s([r])=e^{isr};\qquad s\in\mathbb Z\text{ for }SO(2),\quad s\in\tfrac12\mathbb Z\text{ for }\mathrm{Spin}(2).
$$
The universal-cover helicity induction has central value $e^{2\pi i s}$, so integer helicities descend to the base group and half-integer noninteger helicities do not.

For every $\rho>0$, the nonzero translation orbit $|\xi|=\rho$ gives a continuous-spin little-group representation. It is unique for $E$, while for $\widetilde E$ there are two representations $\theta_{\rho,\epsilon}$, $\epsilon\in\{+1,-1\}$, from the two characters of the stabilizer $\{\pm1\}$. The universal-cover Poincaré inductions have central value $\epsilon I$; the $+1$ branch descends to the base Poincaré group and the $-1$ branch does not. All these inductions are irreducible and positive-energy.

## Facts & Assumptions

**Given:** $D=4$, $p_+=(1,0,0,1)$, the base null little group, and its universal double-cover preimage.

[F1] [[lem-lorentz-stabilizers-and-connected-cover-preimages]]: the $D=4$ null preimages are $\mathbb R^2\rtimes SO(2)$ and $\mathbb R^2\rtimes\mathrm{Spin}(2)$, with $\mathrm{Spin}(2)=\mathbb R/(4\pi\mathbb Z)$; the universal Lorentz-cover kernel has order two.

[F2] [[lem-null-little-group-unitary-duals-for-all-dimensions]]: in $D=4$, the zero translation orbit gives all $SO(2)$ or $\mathrm{Spin}(2)$ representations, and each $\rho>0$ sphere gives one base representation or two double-cover representations from the stabilizer $\{\pm1\}$.

[F3] [[thm-schurs-lemma-for-unitary-representations]]: under AC, an operator commuting with an irreducible unitary representation is scalar.

[F4] [[lem-continuous-characters-of-the-real-line-are-exponentials]]: continuous characters of $\mathbb R$ have the form $r\mapsto e^{2\pi i\xi r}$; equivalently, they are $e^{isr}$ for $s\in\mathbb R$.

[F5] [[thm-positive-energy-wigner-mackey-classification-for-connected-covers]]: inducing from an irreducible little-group representation over $p_+\in C_+$ gives an irreducible positive-energy Poincaré representation.

[F6] [[lem-central-kernel-descent-for-poincare-inductions]]: the induced Poincaré representation descends through the universal-cover kernel exactly when that kernel acts trivially in the little-group representation.

[F7] In unitary induction from a closed subgroup $H$, covariant functions satisfy $F(xh)=\sigma(h)^{-1}F(x)$ and the induced action is $(U(g)F)(x)=D_g(xH)^{1/2}F(g^{-1}x)$ ([[def-covariant-function-model-of-unitary-induction]], [[lem-the-induced-action-is-unitary]]).

[A1] AC is the choice-function principle required by [F2], [F3], [F5], and [F6]. [[def-axiom-of-choice]]

## Proof

**Given:** The groups and $p_+$ in the Example, with AC.

1.1 The circles $SO(2)=\mathbb R/(2\pi\mathbb Z)$ and $\mathrm{Spin}(2)=\mathbb R/(4\pi\mathbb Z)$ are abelian. In an irreducible unitary representation of either circle, each operator commutes with the entire representation, so [F3] makes every operator scalar; the representation is therefore a one-dimensional continuous character. Pull it back to $\mathbb R$. By [F4] it is $e^{isr}$ for a unique real $s$. It descends to $SO(2)$ exactly when $e^{2\pi i s}=1$, i.e. $s\in\mathbb Z$, and to $\mathrm{Spin}(2)$ exactly when $e^{4\pi i s}=1$, i.e. $s\in\tfrac12\mathbb Z$. Thus the zero-translation little-group labels in the Example are exhaustive. [F1, F2, F3, F4, A1, given]

1.2 For $\rho>0$, [F2] gives a single induced little-group representation for $E$, because its point stabilizer in $SO(2)$ is trivial. For the double cover the stabilizer is $\{\pm1\}$, whose two one-dimensional characters have values $\epsilon=+1$ and $\epsilon=-1$ on $z$. Thus the two double-cover little representations are inequivalent and exhaust this orbit's unitary dual. [F1, F2, algebra]

2.1 In $\mathrm{Spin}(2)=\mathbb R/(4\pi\mathbb Z)$ the element $z=[2\pi]$ has order two. The character $\theta_s$ sends it to $e^{2\pi i s}$, which is $+1$ for integer $s$ and $-1$ for noninteger half-integer $s$. Applying [F6] to the full Poincaré induction gives precisely the stated helicity descent outcomes. [F1, F4, F6, step 1.1, algebra]

2.2 Each little representation in step 1.2 is irreducible by [F2]. In a double-cover branch it is induced from $H=\mathbb R^2\rtimes\{1,z\}$ with $\sigma=\chi_\xi\otimes\epsilon$. The element $z$ is central in $\widetilde E$ and belongs to $H$, so it fixes every quotient point; its Radon--Nikodym factor is $1$ almost everywhere. By [F7], $(\theta_{\rho,\epsilon}(z)F)(x)=F(z^{-1}x)=F(xz^{-1})=\sigma(z^{-1})^{-1}F(x)=\epsilon F(x)$, so $z$ acts on this intermediate little-group representation as $\epsilon I$ on its Hilbert completion. Now its induction to the full Poincare group is irreducible and positive-energy by [F5], and [F6] transfers this computed central value to that induction. Thus the $+1$ branch factors through the base group and the $-1$ branch fails the necessary identity condition. The base group has no cover kernel. This verifies both continuous-spin central parities and their descent. [F1, F2, F5, F6, F7, step 1.2, algebra]

3.1 The zero translation orbit ($\rho=0$) and the nonzero spheres ($\rho>0$) are disjoint and exhaust the dual by [F2]. Steps 1.1–2.2 therefore give the stated helicity and continuous-spin branches, including the distinct base and double-cover central actions. [F2, step 1.1, step 2.1, step 1.2, step 2.2] ∎
