---
id: lem-primitive-ray-class-hecke-theta-transformation
kind: lemma
title: "Poisson transformation of finite ray-class theta sums"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 10
deps:
  - def-finite-order-ray-class-hecke-character-and-l-function
  - lem-ray-class-character-finite-part-decomposition
  - lem-primitive-ray-class-character-gauss-sum
  - lem-invertible-ideal-residue-module-is-free
  - thm-poisson-summation-for-a-full-rank-lattice
  - lem-trace-dual-of-a-fractional-ideal
  - def-trace-dual-and-codifferent-of-a-number-field
  - def-different-of-a-number-field
  - def-minkowski-embedding-of-a-number-field
  - def-axiom-of-choice
  - def-countable-choice
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Jürgen Neukirch, Algebraic Number Theory, Chapter VII §§7.6–7.7"
      url: "https://web.math.ucsb.edu/~agboola/teaching/2021/fall/225A/neukirch.pdf"
      locator: "Printed pp.489–492, decomposition of partial Hecke theta series into residue classes, lattice Poisson summation, and the finite Gauss sum reassembly."
    - title: "J. S. Milne, Class Field Theory, version 4.03"
      url: "https://www.jmilne.org/math/CourseNotes/CFT.pdf"
      locator: "Chapter VI §1, Hecke L-series and their Euler factors; the Poisson identity here is proved directly from the full-lattice theorem."

---

## Statement

Assume AC and Countable Choice. Let $K$ be a number field with $r_1$ real embeddings and $r_2$ pairs of complex-conjugate embeddings, let $R=\mathcal O_K$, let $\mathfrak m_0$ be a nonzero integral ideal, let $\mathfrak a$ be an invertible integral ideal coprime to $\mathfrak m_0$, and let $\chi_f:(R/\mathfrak m_0)^\times\to\mathbb C^\times$ be the finite residue character of a primitive ray-class character. Put $V=\mathbb R^{r_1}\times\mathbb C^{r_2}$. Choose one embedding $\tau_k$ from each complex pair and enumerate the real embeddings as $\sigma_1,\ldots,\sigma_{r_1}$; the Minkowski embedding is $\iota(x)=(\sigma_1(x),\ldots,\sigma_{r_1}(x),\tau_1(x),\ldots,\tau_{r_2}(x))$. Give $V$ the real inner product $\langle x,z\rangle=\sum_{j=1}^{r_1}x_jz_j+2\sum_{k=1}^{r_2}\operatorname{Re}(x_{r_1+k}\overline{z_{r_1+k}})$. Let $J:V\to V$ fix real coordinates and conjugate complex coordinates; then $\langle\iota(x),J\iota(y)\rangle=\operatorname{Tr}_{K/\mathbb Q}(xy)$. Let $\mathfrak D_K$ be the different ideal, characterized by $\{y\in K:\operatorname{Tr}_{K/\mathbb Q}(yR)\subseteq\mathbb Z\}=\mathfrak D_K^{-1}$. Set $\Lambda=\iota(\mathfrak a)$ and $\Lambda_0=\iota(\mathfrak m_0\mathfrak a)$. Choose $\delta\in\mathfrak a$ whose class generates the free rank-one $R/\mathfrak m_0$-module $\mathfrak a/\mathfrak m_0\mathfrak a$. For $x\in\mathfrak a$, write $x\equiv r_x\delta\pmod{\mathfrak m_0\mathfrak a}$, where $r_x\in R/\mathfrak m_0$ is unique, and extend $\chi_f$ by zero on nonunits. A Schwartz function here means a smooth $f:V\to\mathbb C$ for which every derivative decays faster than every inverse polynomial. Define
$$\Theta_{\mathfrak a,\chi_f}(f)=\sum_{x\in\mathfrak a}\chi_f(r_x)f(\iota(x)).$$
For a full-rank lattice (the $\mathbb Z$-span of a real basis of $V$) $\Gamma\subseteq V$, let $\operatorname{covol}(\Gamma)$ be the Lebesgue measure of a fundamental parallelepiped and $\Gamma^*=\{\xi\in V:\langle\lambda,\xi\rangle\in\mathbb Z\text{ for every }\lambda\in\Gamma\}$. Use the Fourier transform $\widehat f(\xi)=\int_V f(v)e^{-2\pi i\langle v,\xi\rangle}\,dv$. Then
$$\Theta_{\mathfrak a,\chi_f}(f)=\frac1{\operatorname{covol}(\Lambda_0)}\sum_{\xi\in\Lambda_0^*}\widehat f(\xi)\sum_{r\in(R/\mathfrak m_0)^\times}\chi_f(r)e^{2\pi i\langle\iota(r\delta),\xi\rangle}.$$
Under the trace-dual identification, $\Lambda_0^*=J\iota((\mathfrak m_0\mathfrak a\mathfrak D_K)^{-1})$. For $y\in(\mathfrak m_0\mathfrak a\mathfrak D_K)^{-1}$, the inner coefficient is then $\tau_{\mathfrak m_0}(\chi_f,\delta y)$; its scaling and magnitude conclusions apply under the hypotheses in the primitive Gauss-sum lemma.

## Statement references

[[def-finite-order-ray-class-hecke-character-and-l-function]]

[[lem-ray-class-character-finite-part-decomposition]]

[[lem-invertible-ideal-residue-module-is-free]]

[[lem-trace-dual-of-a-fractional-ideal]]

[[def-trace-dual-and-codifferent-of-a-number-field]]

[[def-different-of-a-number-field]]

## Facts & Assumptions

**Given:** The number field, ideals, primitive finite ray character, generator $\delta$, Schwartz function, and Fourier-transform convention in the Statement.

[A1] AC and Countable Choice are the assumptions under which the finite-order ray-class character and its primitive finite residue character are interpreted. [[def-finite-order-ray-class-hecke-character-and-l-function]] [[lem-ray-class-character-finite-part-decomposition]] [[def-axiom-of-choice]] [[def-countable-choice]]

[F1] The module $\mathfrak a/\mathfrak m_0\mathfrak a$ is free of rank one over $R/\mathfrak m_0$, so each class has a unique coordinate $r\in R/\mathfrak m_0$ relative to $\delta$. [[lem-invertible-ideal-residue-module-is-free]]

[F2] For a full-rank lattice $\Lambda_0$ and a Schwartz function $g$, $\sum_{\lambda\in\Lambda_0}g(\lambda+u)=\operatorname{covol}(\Lambda_0)^{-1}\sum_{\xi\in\Lambda_0^*}\widehat g(\xi)e^{2\pi i\langle u,\xi\rangle}$. [[thm-poisson-summation-for-a-full-rank-lattice]]

[F3] Under the Minkowski inner product, the dual of $\iota(\mathfrak m_0\mathfrak a)$ is $J\iota((\mathfrak m_0\mathfrak a\mathfrak D_K)^{-1})$, where $J$ fixes real coordinates and conjugates complex coordinates; for $\xi=J\iota(y)$, $\langle\iota(x),\xi\rangle=\operatorname{Tr}_{K/\mathbb Q}(xy)$. [[lem-trace-dual-of-a-fractional-ideal]] [[def-trace-dual-and-codifferent-of-a-number-field]] [[def-different-of-a-number-field]] [[def-minkowski-embedding-of-a-number-field]]

[F4] For a finite residue character $\psi$ and a dual frequency $y$ satisfying the ideal hypotheses in its statement, the finite Fourier coefficient is $\tau_{\mathfrak m_0}(\psi,y)$; for a primitive character it vanishes under nonunit scaling and has magnitude $\sqrt{N\mathfrak m_0}$ at primitive frequencies. [[lem-primitive-ray-class-character-gauss-sum]]

## Proof

**Given:** The data in the Statement.

1.1 The quotient $\mathfrak a/\mathfrak m_0\mathfrak a$ is partitioned by its residue coordinates $r\in R/\mathfrak m_0$ using [F1]. The extension of $\chi_f$ by zero makes the summands for nonunit $r$ vanish. Thus the defining theta sum is the finite sum over unit residue classes of the lattice-coset sums over $\iota(r\delta)+\Lambda_0$. [F1, given, algebra]

1.2 Apply [F2] to each of those finitely many cosets and multiply by $\chi_f(r)$. Interchanging the finite residue sum with the dual-lattice sum gives
$$\sum_{r\in(R/\mathfrak m_0)^\times}\chi_f(r)\sum_{\lambda\in\Lambda_0}f(\iota(r\delta)+\lambda)=\frac1{\operatorname{covol}(\Lambda_0)}\sum_{\xi\in\Lambda_0^*}\widehat f(\xi)\sum_{r\in(R/\mathfrak m_0)^\times}\chi_f(r)e^{2\pi i\langle\iota(r\delta),\xi\rangle}.$$
The left side is the theta sum from step 1.1, proving the identity. [F1, F2, step 1.1, algebra]

2.1 By [F3], each $\xi\in\Lambda_0^*$ has the form $J\iota(y)$ for $y\in(\mathfrak m_0\mathfrak a\mathfrak D_K)^{-1}$. Hence $\langle\iota(r\delta),\xi\rangle=\operatorname{Tr}_{K/\mathbb Q}(r\delta y)$, and the inner finite sum in step 1.2 is exactly $\tau_{\mathfrak m_0}(\chi_f,\delta y)$ by its definition. Since $\delta y\in\mathfrak m_0^{-1}\mathfrak D_K^{-1}$, this Gauss sum is defined; when it satisfies the coprimality hypothesis of [F4], the magnitude conclusion applies. [F3, F4, step 1.2, algebra] ∎
