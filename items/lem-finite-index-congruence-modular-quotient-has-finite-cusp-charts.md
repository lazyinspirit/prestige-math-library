---
id: lem-finite-index-congruence-modular-quotient-has-finite-cusp-charts
kind: lemma
title: "Finite Cusp Charts and Compactification for a Congruence Modular Quotient"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
deps:
  - def-congruence-subgroup-of-sl2-z
  - def-congruence-modular-form-with-nebentypus
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
sources:
  references:
    - title: "J. S. Milne, Modular Functions and Modular Forms, full course notes"
      url: "https://www.jmilne.org/math/CourseNotes/MF.pdf"
      locator: "Chapter 4, Definition 4.5 and cusp conditions; Chapter 9, §§9.1–9.3, Mellin transforms and functional equations."
    - title: "Kimball Martin, Modular Forms: A Classical Introduction, full course notes"
      url: "https://kimballmartin.github.io/mfs/mfs.pdf"
      locator: "§§7.3 and 8.4; Mellin transform, functional equation and Atkin–Lehner operators."
---

## Statement

For every integer $N\ge1$, the subgroup $\Gamma_0(N)$ has finite index in $\mathrm{SL}_2(\mathbb Z)$, has finitely many orbits on $\mathbb P^1(\mathbb Q)$, and the quotient $\Gamma_0(N)\backslash\mathbb H$ has a compactification obtained by adjoining these finitely many cusps. Equivalently, a finite union of cusp neighborhoods can be removed so that the remaining quotient is compact.

## Statement references

[J. S. Milne, Modular Functions and Modular Forms, full course notes](https://www.jmilne.org/math/CourseNotes/MF.pdf)

[Kimball Martin, Modular Forms: A Classical Introduction, full course notes](https://kimballmartin.github.io/mfs/mfs.pdf)

## Facts & Assumptions

**Given:** The modular group, $\Gamma_0(N)$, and the cusp set for its action.

[F1] [[def-congruence-subgroup-of-sl2-z]]: $\Gamma(N)$ is the kernel of reduction modulo $N$, $\Gamma(N)\subseteq\Gamma_0(N)$, and $\Gamma(N)$ has finite index.

[F2] [[def-congruence-modular-form-with-nebentypus]]: the cusps are the $\Gamma_0(N)$-orbits in $\mathbb P^1(\mathbb Q)$.

## Proof

**Proof technique:** finite-index reduction to the standard modular fundamental domain.

1.1 By [F1], $\Gamma(N)$ is a finite-index subgroup of $\mathrm{SL}_2(\mathbb Z)$ contained in $\Gamma_0(N)$. The natural map $\Gamma(N)\backslash\mathrm{SL}_2(\mathbb Z)\to\Gamma_0(N)\backslash\mathrm{SL}_2(\mathbb Z)$ is surjective because $\Gamma(N)\subseteq\Gamma_0(N)$. Its source is finite by [F1], so $\Gamma_0(N)$ also has finite index. [F1, algebra]

2.1 The action of $\mathrm{SL}_2(\mathbb Z)$ on $\mathbb P^1(\mathbb Q)$ is transitive: if $a/c$ is reduced, Bezout gives integers $b,d$ with $ad-bc=1$, so the matrix with first column $(a,c)^t$ sends $\infty$ to $a/c$. Its stabilizer is $\Gamma_\infty=\{\pm\begin{pmatrix}1&n\\0&1\end{pmatrix}:n\in\mathbb Z\}$. Hence the cusp set is $\Gamma_0(N)\backslash\mathrm{SL}_2(\mathbb Z)/\Gamma_\infty$, a quotient of the finite coset set from step 1.1, and is finite. [F1, F2, step 1.1, algebra]

2.2 Put $\mathcal F=\{z\in\mathbb H:|\operatorname{Re}z|\le1/2,\ |z|\ge1\}$. Every $\mathrm{SL}_2(\mathbb Z)$-orbit meets $\mathcal F$: among the values $|cz+d|$ for primitive integer pairs $(c,d)$ there is a positive minimum, since they lie in the discrete lattice $z\mathbb Z+\mathbb Z$; the corresponding orbit point has maximal imaginary part. Translate its real part into $[-1/2,1/2]$. If its modulus were less than $1$, applying $z\mapsto-1/z$ would increase its imaginary part, a contradiction. [step 1.1, algebra]

3.1 The interiors of $\mathcal F$ and its distinct modular translates are disjoint. For $z=x+iy$ in the interior and a primitive pair $(c,d)$ with $c\ne0$, one has $|cz+d|>1$: if $|c|\ge2$, then $|cz+d|^2\ge c^2y^2\ge3$; if $|c|=1$, then $|z+d/c|>1$ by $|x|<1/2$, $|z|>1$, and the nearest-integer cases. Thus $\operatorname{Im}(\gamma z)=y/|cz+d|^2<y$ for $c\ne0$. Applying the same inequality to $\gamma^{-1}$ rules out two interior representatives. The remaining $c=0$ transformations are translations, and no nonidentity translation preserves the interior of $\mathcal F$. [step 2.2, algebra]

4.1 For $Y>1$, the closure of $\mathcal F\cap\{\operatorname{Im}z\le Y\}$ is compact. By finite index from step 1.1, finitely many translates of $\mathcal F$ cover a fundamental set for $\Gamma_0(N)$. Their truncated parts have compact closure. Their unbounded parts lie in neighborhoods of the finitely many rational cusps from step 2.1: conjugating each cusp to $\infty$ identifies its stabilizer with a finite-index subgroup of the integer translations, hence with translations by some positive width. Thus each end is a quotient of a horizontal half-strip by a positive-width translation. Removing these finitely many ends leaves a compact quotient, and adjoining one point for each end gives the claimed compactification. [F1, step 1.1, step 2.1, step 3.1, algebra]

5.1 For $N=1$, $\Gamma_0(1)=\mathrm{SL}_2(\mathbb Z)$, the cusp set is the single orbit of $\infty$, and the same fundamental-domain truncation applies. [F1, step 2.1, algebra] ∎
