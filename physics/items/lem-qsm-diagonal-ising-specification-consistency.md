---
id: lem-qsm-diagonal-ising-specification-consistency
kind: lemma
title: Finite-range inhomogeneous Ising kernels form a specification
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
library: physics
deps:
  - def-qsm-diagonal-ising-interaction
  - def-csm-finite-range-lattice-interaction
  - def-csm-lattice-gibbs-specification
  - lem-csm-lattice-specification-consistency
dependency_roles:
  def-qsm-diagonal-ising-interaction: mathematical-premise
  def-csm-finite-range-lattice-interaction: mathematical-premise
  def-csm-lattice-gibbs-specification: mathematical-premise
  lem-csm-lattice-specification-consistency: mathematical-premise
dependency_level: 5
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Sascha Friedli and Yvan Velenik, Statistical Mechanics of Lattice Systems: A Concrete Mathematical Introduction, complete author PDF, revised 2017"
      url: https://www.unige.ch/math/folks/velenik/smbook/Statistical_Mechanics_of_Lattice_Systems.pdf
      locator: Chapter 6, PDF pp. 265–289; Appendix, PDF pp. 329–332.
    - title: "Junior Seminar in Mathematical Physics, Proofs from the Book: Ising, DLR, Dobrushin and Peierls sections, complete seminar notes"
      url: https://web.math.princeton.edu/~js129/PDFs/Junior_Seminar_in_Mathematical_Physics__Proofs_from_the_Book.pdf
      locator: PDF pp. 31–43, especially the specification kernels and DLR equations.
    - title: "Pieter Naaijkens, Quantum Spin Systems on Infinite Lattices, extended and corrected lecture notes, arXiv:1311.2717v2"
      url: https://arxiv.org/pdf/1311.2717
      locator: §§3.2–3.4, printed pp. 53–78.
    - title: "David Ruelle, Topics in Quantum Statistical Mechanics and Operator Algebras, complete lecture notes, arXiv:math-ph/0107009v1"
      url: https://arxiv.org/pdf/math-ph/0107009
      locator: Chapter 1 §7, printed pp. 13–14.
---

## Statement

For the model of [[def-qsm-diagonal-ising-interaction]] and every finite $\Delta\subset\mathbb Z^d$, the displayed $\gamma_\Delta$ is a finite-range proper probability kernel, and the family $(\gamma_\Delta)_{\Delta\text{ finite}}$ satisfies $\gamma_\Lambda\gamma_\Delta=\gamma_\Lambda$ whenever $\Delta\subseteq\Lambda$. Thus it is a specification in the sense of [[def-csm-lattice-gibbs-specification]], including when the bounded finite-range coefficients depend on position.

If in addition $J_{i,i+v}=J(v)=J(-v)$ is translation invariant and $h_i=h$ is constant, this specification is exactly the CSM specification obtained by taking one interaction shape $\{0\}$ for the field and one shape $\{0,v\}$ for each chosen representative $v$ of the nonzero displacement pairs $\{v,-v\}$. The latter identification uses the translated-shape convention of [[def-csm-finite-range-lattice-interaction]] and agrees with [[lem-csm-lattice-specification-consistency]].

## Facts & Assumptions

**Given:** The finite-range diagonal Ising model of [[def-qsm-diagonal-ising-interaction]] and $\beta>0$.

[F1] [[def-qsm-diagonal-ising-interaction]] defines $C_\Delta$, the conditional energy as the sum of fields inside $\Delta$ and every unordered pair term meeting $\Delta$, and $\gamma_\Delta(\sigma_\Delta\mid\eta)=e^{-\beta E_\Delta(\sigma_\Delta\mid\eta)}/Z_\Delta^\eta$.

[F2] [[def-csm-lattice-gibbs-specification]] defines a specification as proper probability kernels satisfying $\gamma_\Lambda\gamma_\Delta=\gamma_\Lambda$ for $\Delta\subseteq\Lambda$, and defines DLR measures as their fixed probability measures.

[F3] [[def-csm-finite-range-lattice-interaction]] counts each translated shape once and treats distinct shape indices as distinct terms.

[F4] [[lem-csm-lattice-specification-consistency]] states that the CSM finite-range Gibbs kernels are positive, normalized, measurable, proper, and consistent when its finite-range interaction hypotheses hold. This batch-27 carrier is a current draft with Step-1 readiness, not independent proof acceptance.

## Proof

**Proof technique:** Verify the finite kernels directly, then identify the translation-invariant subfamily with the translated-shape convention.

**Given:** [F1]–[F4], a finite range $R$, bounded coefficients, and $\beta>0$.

1.1 Since $\Delta$ is finite and every site couples only to sites within the fixed finite range $R$, the boundary $C_\Delta$ and the set of pairs meeting $\Delta$ are finite. Every $E_\Delta(\sigma_\Delta\mid\eta)$ is therefore real and finite. The configuration set $\{-1,+1\}^\Delta$ is nonempty and finite, so $Z_\Delta^\eta$ is a finite sum of strictly positive real numbers. When $\Delta=\varnothing$, that set has its single empty configuration, $E_\Delta=0$, $Z_\Delta^\eta=1$, and $\gamma_\Delta$ is the identity kernel. In every case, $\gamma_\Delta(\cdot\mid\eta)$ is a normalized probability distribution. [given, F1, algebra]

2.1 Write $X_{\Delta^c}=\{-1,+1\}^{\Delta^c}$ with its cylinder-generated Borel sigma-algebra, and let $r_\Delta:X\to X_{\Delta^c}$ be coordinate restriction. For a global input $x\in X$, the full-configuration kernel notation means $\gamma_\Delta(f\mid x):=\gamma_\Delta(f\mid r_\Delta x)$. For a bounded measurable $f$ on $X$, each replacement map $\eta\in X_{\Delta^c}\mapsto\sigma_\Delta\eta\in X$ is measurable and each weight in [F1] depends on only the finite boundary $C_\Delta$. Thus the finite weighted sum defining $\gamma_\Delta(f\mid\eta)$ is measurable. If $B\subseteq X$ is exterior-measurable, write $B=r_\Delta^{-1}(D)$ for a measurable $D\subseteq X_{\Delta^c}$. Since $r_\Delta(\sigma_\Delta\eta)=\eta$, one has $\mathbf1_B(\sigma_\Delta\eta)=\mathbf1_D(\eta)$ and therefore $\gamma_\Delta(\mathbf1_B\mid\eta)=\mathbf1_D(\eta)$ by normalization. Equivalently, for the full-configuration input $x$, $\gamma_\Delta(\mathbf1_B\mid x)=\mathbf1_D(r_\Delta x)=\mathbf1_B(x)$, proving properness. Its cylinder probabilities depend only on $C_\Delta$ and the finitely many coordinates named by the cylinder, so it has finite range. [F1, step 1.1, algebra]

2.2 Let $\Delta\subseteq\Lambda$ be finite. Split all interaction terms meeting $\Lambda$ into terms meeting $\Delta$ and terms disjoint from $\Delta$. For fixed spins $\xi=s_{\Lambda\setminus\Delta}$ and exterior $\eta$, the latter terms contribute a finite $C(\xi,\eta)$ independent of $s_\Delta$, so $E_\Lambda(\zeta\xi\mid\eta)=E_\Delta(\zeta\mid\xi\eta)+C(\xi,\eta)$ and $Z_\Lambda^\eta=\sum_{\xi\in\{-1,+1\}^{\Lambda\setminus\Delta}}e^{-\beta C(\xi,\eta)}Z_\Delta^{\xi\eta}$. Thus the $\gamma_\Lambda$-marginal weight of each $\xi$ is $e^{-\beta C(\xi,\eta)}Z_\Delta^{\xi\eta}/Z_\Lambda^\eta$, and applying $\gamma_\Delta$ gives $$ (\gamma_\Lambda\gamma_\Delta f)(\eta)=\frac{1}{Z_\Lambda^\eta}\sum_\xi e^{-\beta C(\xi,\eta)}\sum_{\zeta\in\{-1,+1\}^{\Delta}}f(\zeta\xi\eta)e^{-\beta E_\Delta(\zeta\mid\xi\eta)}=\frac{1}{Z_\Lambda^\eta}\sum_{\xi,\zeta}f(\zeta\xi\eta)e^{-\beta E_\Lambda(\zeta\xi\mid\eta)}=(\gamma_\Lambda f)(\eta). $$ The factor depending on $\xi$ remains in the outer sum, giving exactly the $\gamma_\Lambda$ weights. Hence $\gamma_\Lambda\gamma_\Delta=\gamma_\Lambda$. [F1, F2, step 1.1, algebra]

3.1 Steps 1.1 and 2.2 prove that the general position-dependent kernels satisfy the specification axioms of [F2]. Now assume the translation-invariant subcase in the Statement. Choose a finite set $D$ containing exactly one of $v,-v$ for each nonzero displacement pair with $J(v)\ne0$. Use the shape $\{0\}$ with potential $-h s_0$ and, for each $v\in D$, shape $\{0,v\}$ with potential $-J(v)s_0s_v$. Every field site is counted once, and every unordered interacting pair is counted once because $D$ contains one orientation per pair. The CSM finite-volume and conditional energies in [F3] are therefore exactly $H_\Lambda$ and $E_\Lambda$ in [F1], so the kernels coincide. Applying [F4] confirms that this same kernel is a valid CSM finite-range specification under the matching hypotheses. [F1, F2, F3, F4, step 1.1, step 2.2] ∎
