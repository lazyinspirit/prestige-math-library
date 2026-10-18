---
id: ex-d3-null-signs-and-central-phases
kind: example
title: D=3 null translations have two signs and independent central phases
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 4
proof_strategy: direct
axiom_use: AC is inherited from the null little-group classification, central-kernel descent theorem, and positive-energy classification.
deps:
  - def-axiom-of-choice
  - thm-positive-energy-wigner-mackey-classification-for-connected-covers
  - lem-null-little-group-unitary-duals-for-all-dimensions
  - lem-central-kernel-descent-for-poincare-inductions
  - lem-lorentz-stabilizers-and-connected-cover-preimages
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Xavier Bekaert and Nicolas Boulanger, The unitary representations of the Poincaré group in any spacetime dimension, v2 (2021)"
      url: "https://arxiv.org/pdf/hep-th/0611263"
      locator: "§3.3 and Appendix B.2–B.3, PDF pp. 13–15 and 55–58; the local example preserves both signs and the independent deck phase."
    - title: "Niklas Beisert, Quantum Field Theory I, Lecture Notes, ETH Zürich, 2025 HS"
      url: "https://people.phys.ethz.ch/~lecture/nbeisert/QFT1-25HS/QFT1-25HS-Notes.pdf"
      locator: "Chapter 4.4, printed pp. 4.15–4.16 (PDF pp. 63–64), D=4 conventions only; the D=3 argument is proved locally."

---

## Example

For $D=3$, use the universal Lorentz cover $K_\infty=\widetilde L$. Its null little group is the direct product $\mathbb R\times\mathbb Z$, with deck generator $z=(0,1)$. For $t\in\mathbb R$ and $\alpha\in\mathbb R/\mathbb Z$, define
$$
\theta_{t,\alpha}(u,j)=e^{itu}e^{2\pi i\alpha j}.
$$
These are one-dimensional irreducible null little-group representations. For every $\rho>0$, the two signs $t=\rho$ and $t=-\rho$ are inequivalent, and $z$ acts by the independently chosen phase $e^{2\pi i\alpha}$. Thus all phases occur on $K_\infty$; on a finite cover $K_N$, the allowed phases are the $N$th roots of unity, $N\alpha\in\mathbb Z$, and either sign remains available.

## Facts & Assumptions

**Given:** $D=3$, a nonzero future null momentum, and the universal or finite connected Lorentz cover.

[F1] [[lem-lorentz-stabilizers-and-connected-cover-preimages]]: the $D=3$ null stabilizer is $\mathbb R\times\mathbb Z$ on $K_\infty$, with $z=(0,1)$; on $K_N$ it is $\mathbb R\times(\mathbb Z/N\mathbb Z)$.

[F2] [[lem-null-little-group-unitary-duals-for-all-dimensions]]: every irreducible strongly continuous unitary representation of a $D=3$ null little group is $\theta_{t,\alpha}(u,j)=e^{itu}e^{2\pi i\alpha j}$; the real parameter has both signs, and finite $N$ requires $N\alpha\in\mathbb Z$.

[F3] [[lem-central-kernel-descent-for-poincare-inductions]]: the character descends from $K_\infty$ to $K_N$ exactly when it is trivial on $z^N$, which is the condition $N\alpha\in\mathbb Z$ independent of $t$.

[F4] [[thm-positive-energy-wigner-mackey-classification-for-connected-covers]]: inducing any such irreducible null little-group character over a future null momentum gives an irreducible positive-energy representation.

[A1] AC is assumed through [F2], [F3], and [F4]. [[def-axiom-of-choice]]

## Proof

**Given:** The groups and parameters in the Example.

1.1 The displayed formula is multiplicative because $\mathbb R\times\mathbb Z$ is a direct product: $\theta_{t,\alpha}((u,j)+(v,k))=e^{it(u+v)}e^{2\pi i\alpha(j+k)}=\theta_{t,\alpha}(u,j)\theta_{t,\alpha}(v,k)$. It is continuous in $u$, and $\mathbb Z$ is discrete. A one-dimensional unitary representation is irreducible. [F1, given, algebra]

2.1 For $\rho>0$, evaluating the characters with $t=\rho$ and $t=-\rho$ at $(u,j)=(\pi/(2\rho),0)$ gives respectively $i$ and $-i$, so they are inequivalent. This is consistent with the orbit classification because the connected rotation factor is $SO(1)=\{1\}$ and cannot reverse the real translation character. [F1, F2, step 1.1, algebra]

2.2 The deck generator is $(0,1)$, so $\theta_{t,\alpha}(z)=e^{2\pi i\alpha}$ and the value is independent of $t$. As $\alpha$ ranges over $\mathbb R/\mathbb Z$, these are all of $\mathbb T$. On $K_N$, the relation $z^N=1$ forces and is forced by $e^{2\pi iN\alpha}=1$, equivalently $N\alpha\in\mathbb Z$, giving precisely the $N$ possible phases. [F1, F2, step 1.1, algebra]

3.1 For every $t=\pm\rho$ and allowed $\alpha$, [F4] gives a positive-energy irreducible Poincaré induction. The independent central-phase calculation in step 2.2 and the sign calculation in step 2.1 show that neither the finite-cover descent condition [F3] nor the phase parameter identifies the two signs. This proves the stated D=3 distinction. [F2, F3, F4, A1, step 2.1, step 2.2] ∎
