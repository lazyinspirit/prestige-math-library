---
id: ex-d3-irrational-massive-spin-fails-finite-cover-descent
kind: example
title: An irrational D=3 massive spin descends to no finite cover
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 4
proof_strategy: direct
axiom_use: AC is inherited from the positive-energy classification and central-kernel descent theorem.
deps:
  - def-axiom-of-choice
  - thm-positive-energy-wigner-mackey-classification-for-connected-covers
  - lem-central-kernel-descent-for-poincare-inductions
  - lem-lorentz-stabilizers-and-connected-cover-preimages
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Xavier Bekaert and Nicolas Boulanger, The unitary representations of the Poincaré group in any spacetime dimension, v2 (2021)"
      url: "https://arxiv.org/pdf/hep-th/0611263"
      locator: "§3.2, PDF pp. 11–13; the local example verifies the descent condition for every finite D=3 cover."
    - title: "Niklas Beisert, Quantum Field Theory I, Lecture Notes, ETH Zürich, 2025 HS"
      url: "https://people.phys.ethz.ch/~lecture/nbeisert/QFT1-25HS/QFT1-25HS-Notes.pdf"
      locator: "Chapter 4.4, printed pp. 4.14–4.16 (PDF pp. 62–64), comparison with spin labels."

---

## Example

In $D=3$, take the universal Lorentz cover $K_\infty=\widetilde L$ and a future timelike momentum $p_m=me_0$, $m>0$. Its massive little group is $\mathbb R$, with coordinate $r$ normalized so the deck generator $z$ is $r=2\pi$. The character
$$
\theta_{\sqrt2}(r)=e^{i\sqrt2 r}
$$
defines an irreducible positive-energy induced Poincaré representation. It descends to no finite connected Lorentz cover $K_N=\widetilde L/\langle z^N\rangle$, $N\ge1$.

## Facts & Assumptions

**Given:** $D=3$, $m>0$, $p_m=me_0$, and the universal Lorentz cover.

[F1] [[lem-lorentz-stabilizers-and-connected-cover-preimages]]: the $D=3$ universal-cover massive stabilizer is $\mathbb R$, its deck generator has coordinate $2\pi$, and the finite connected covers are $K_N=\widetilde L/\langle z^N\rangle$.

[F2] [[thm-positive-energy-wigner-mackey-classification-for-connected-covers]]: a character of the massive little group over $p_m\in C_+$ induces an irreducible positive-energy representation.

[F3] [[lem-central-kernel-descent-for-poincare-inductions]]: descent from the universal cover to $K_N$ occurs exactly when the little-group character is trivial on $z^N$.

[A1] AC is assumed through [F2] and [F3]. [[def-axiom-of-choice]]

## Proof

**Given:** $m>0$ and the groups and character in the Example.

1.1 The map $r\mapsto e^{i\sqrt2 r}$ is a continuous one-dimensional unitary character of the additive group $\mathbb R$, so it is irreducible. The momentum $p_m$ is future timelike and lies in $C_+$. Applying [F2] gives an irreducible positive-energy induced representation on the universal cover. [F1, F2, A1, given]

2.1 By [F1], $z^N$ has little-group coordinate $2\pi N$. Its character value is $\theta_{\sqrt2}(z^N)=e^{2\pi iN\sqrt2}$. By [F3], descent to $K_N$ would require $N\sqrt2\in\mathbb Z$. [F1, F3, step 1.1]

3.1 No positive integer $N$ satisfies this condition. If $N\sqrt2=k\in\mathbb Z$, then $\sqrt2=k/N$ is rational. To recall the elementary contradiction, write $\sqrt2=a/b$ in lowest positive terms; $a^2=2b^2$ makes $a$ even, then makes $b$ even, contradicting coprimality. Thus the representation fails the descent test for every finite $N$. [step 2.1, algebra] ∎
