---
id: thm-positive-energy-wigner-mackey-classification-for-connected-covers
kind: theorem
title: Positive-energy Wigner–Mackey classification for connected covers
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 3
proof_strategy: direct
axiom_use: >-
  AC is assumed by the PVM, Mackey induction, and Schur suppliers used in the
  orbit classification and descent criterion.
deps:
  - def-connected-poincare-cover-and-positive-energy
  - def-axiom-of-choice
  - lem-poincare-dual-orbits-are-regular-homogeneous-borel-spaces
  - lem-lorentz-stabilizers-and-connected-cover-preimages
  - lem-mackey-induction-classification-for-regular-euclidean-duals
  - lem-null-little-group-unitary-duals-for-all-dimensions
  - lem-central-kernel-descent-for-poincare-inductions
  - thm-unitary-induction-from-a-closed-subgroup
  - def-projection-valued-measure
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Xavier Bekaert and Nicolas Boulanger, The unitary representations of the Poincaré group in any spacetime dimension, v2 (2021)"
      url: "https://arxiv.org/pdf/hep-th/0611263"
      locator: "§3.1–§3.3, PDF pp. 9–15, and Appendix B §§B.1–B.3, PDF pp. 53–58; the local proof supplies the global-cover, zero-orbit and D=2,3 completion."
    - title: "Niklas Beisert, Quantum Field Theory I, Lecture Notes, ETH Zürich, 2025 HS"
      url: "https://people.phys.ethz.ch/~lecture/nbeisert/QFT1-25HS/QFT1-25HS-Notes.pdf"
      locator: "Chapter 4.4, printed pp. 4.13–4.16 (PDF pp. 61–64), D=4 mass-shell and little-group conventions; the local theorem handles all connected covers and dimensions."

---

## Statement

Fix $D\ge2$, a connected Lorentz cover $c:K\to L=SO_0(D-1,1)$, and $G=\mathbb R^D\rtimes K$ with the conventions of [[def-connected-poincare-cover-and-positive-energy]]. Assume AC. Let
$$
C_+=\{p\in\mathbb R^D:p^0\ge0,\ \eta(p,p)\le0\}.
$$
The equivalence classes of irreducible strongly continuous positive-energy unitary representations of $G$ are exactly those represented by
$$
\pi_{p,\theta}=\operatorname{Ind}_{\mathbb R^D\rtimes K_p}^{G}(\chi_p\otimes\theta),\qquad p\in C_+.
$$
Here $K_p=c^{-1}(L_p)$ and $\theta$ runs over the equivalence classes of irreducible strongly continuous unitary representations of $K_p$. Two labels $(p,\theta)$ and $(q,\theta')$ give equivalent representations exactly when $q=k\cdot p$ for some $k\in K$ and $\theta'$ is equivalent to the conjugate representation of $K_q=kK_pk^{-1}$. In particular, zero momentum has the full Lorentz-cover little group $K_0=K$; it is not restricted to the trivial representation.

The stabilizers and their covers are those of [[lem-lorentz-stabilizers-and-connected-cover-preimages]]. For $p$ future timelike, use $p_m=me_0$ with $m=\sqrt{-\eta(p,p)}>0$: $K_{p_m}$ is trivial for $D=2$, is $\mathbb R/(2\pi N\mathbb Z)$ or $\mathbb R$ for the $D=3$ cover $K_N$ or $K_\infty$, and is $SO(D-1)$ or $\mathrm{Spin}(D-1)$ for $D\ge4$. For nonzero future null $p$, the $D\ge4$ little groups and their complete unitary duals are given in [[lem-null-little-group-unitary-duals-for-all-dimensions]]; for $D=3$ they include both signs of the real null-translation character and the independent central phase; for $D=2$ the two future null rays are distinct and each has trivial stabilizer. A representation induced from $p$ also descends through any quotient of its Lorentz cover by $\Gamma\le\ker c$ exactly when $\theta(\gamma)=I$ for every $\gamma\in\Gamma$, as in [[lem-central-kernel-descent-for-poincare-inductions]].

No conclusion about parity, time reversal, spin-statistics, or quantum-field-theoretic particle interpretation is part of this classification.

## Facts & Assumptions

**Given:** $D\ge2$, a connected cover $c:K\to L$, its Poincaré semidirect product $G$, and AC.

[F1] [[def-connected-poincare-cover-and-positive-energy]]: $C_+$ is identified with the set of translation-dual characters on which the PVM $P_U$ has full mass; $U$ is positive-energy exactly when $P_U(C_+)=I$.

[F2] [[lem-poincare-dual-orbits-are-regular-homogeneous-borel-spaces]]: $p\mapsto\chi_p$ identifies the whole translation dual with momentum space; every Lorentz orbit is locally closed, the whole dual action has countably separated Borel orbits, and the orbit list includes all timelike, spacelike, null and zero cases.

[F3] [[lem-lorentz-stabilizers-and-connected-cover-preimages]]: all connected-cover stabilizers are closed and are the full inverse images of the Lorentz stabilizers; the item gives their global groups and the $D=2,3$ cover distinctions.

[F4] [[lem-mackey-induction-classification-for-regular-euclidean-duals]]: irreducible representations of $G$ are exactly the induced orbit/little-group representations; the induced translation PVM is multiplication on its homogeneous base and is concentrated on its inducing orbit, the representations are irreducible, and equivalence is exactly orbit plus little-group equivalence.

[F5] [[lem-null-little-group-unitary-duals-for-all-dimensions]]: the complete null little-group dual is as stated in this theorem, including nonzero $D\ge4$ null translations, both $D=3$ signs and central phases, and the trivial $D=2$ stabilizers.

[F6] [[lem-central-kernel-descent-for-poincare-inductions]]: an induced irreducible factors through a cover quotient by $\Gamma\le\ker c$ exactly when its little-group representation is trivial on $\Gamma$.

[F7] [[thm-unitary-induction-from-a-closed-subgroup]]: for a second-countable locally compact group, closed subgroup, and strongly continuous inducing representation, unitary induction gives a strongly continuous representation on the covariant-function Hilbert space; under the supplier's stated AC hypotheses it uses the quasi-invariant Radon measure and Radon–Nikodym cocycle.

[F8] [[def-projection-valued-measure]]: if Borel sets $A,B$ are disjoint, then $P(A)P(B)=P(\varnothing)=0$; a projection-valued measure is countably additive and satisfies $P(X)=I$ on its whole space.

[A1] AC is used by [F1], [F4], [F6] and [F7], under the cited suppliers' hypotheses. [[def-axiom-of-choice]]

## Proof

**Given:** $D\ge2$, a connected Lorentz cover $K\to L$, the group $G$, and AC.

1.1 By [F2], the dual of translations is the full momentum space, all its $K$-orbits are locally closed and countably separated, and the dual action is the stated Lorentz action because the cover is onto. For every momentum $p$, the stabilizer $K_p$ is closed by [F3]; hence $H_p=\mathbb R^D\rtimes K_p$ is a closed subgroup of the second-countable locally compact group $G$. The group $G$ is second-countable locally compact because $K$ is, and $\mathbb R^D$ is. Therefore [F4] applies and classifies every irreducible strongly continuous representation of $G$ by one orbit and one irreducible little-group representation. The inducing representations in this formula are strongly continuous by [F7]. [F2, F3, F4, F7, A1, given]

2.1 In the induced model for $\pi_{p,\theta}$, translations act by multiplication by the dual character at each base point of the orbit, and [F4] says that the translation PVM has full support on that orbit. If $p\in C_+$, Lorentz transformations preserve $C_+$, so its entire orbit lies in $C_+$; the PVM of $\pi_{p,\theta}$ is consequently concentrated on $C_+$ and the representation is positive-energy by [F1]. [F1, F2, F4, step 1.1]

2.2 Conversely, let $\pi$ be an irreducible positive-energy representation. By step 1.1 and [F4], it is equivalent to $\pi_{p,\theta}$ for some orbit $O=K\cdot p$ and an irreducible $\theta$ of $K_p$. The orbit list in [F2] shows that every Lorentz orbit either lies entirely in $C_+$ (future timelike, future null, or zero) or is disjoint from it (past timelike, spacelike, or past null; in $D=2$ the two future null rays are included in the first case and the past rays in the last). If $O$ were disjoint from $C_+$, [F4] would give $P_\pi(O)=I$, while positive energy gives $P_\pi(C_+)=I$ by [F1]. The sets are disjoint, so [F8] implies $I=P_\pi(C_+)P_\pi(O)=0$, impossible because an irreducible representation acts on a nonzero Hilbert space. Thus $O\subseteq C_+$ and its representative may be chosen there. [F1, F2, F4, F8, step 1.1]

2.3 By [F2], distinct momentum orbits give distinct translation spectral supports. Within one orbit, [F4] says equivalence holds exactly for conjugate little-group representations at the chosen representative. This proves precisely the equivalence relation in the theorem. [F2, F4, step 1.1]

3.1 The orbit list [F2] and stabilizer computation [F3] give the massive and zero-orbit cases in the statement. Applying [F5] to the nonzero null orbit gives the stated complete null representation branches in each dimension. Applying [F6] gives the separate descent condition for every central cover kernel. These deductions preserve the full zero-orbit Lorentz-cover representation and make no inference about disconnected symmetries. Steps 1.1 and 2.1–2.3 prove the asserted positive-energy classification and its stated boundaries. [F2, F3, F5, F6, step 1.1, step 2.1, step 2.2, step 2.3] ∎
