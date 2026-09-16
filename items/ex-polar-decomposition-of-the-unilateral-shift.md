---
id: ex-polar-decomposition-of-the-unilateral-shift
kind: example
title: Polar decomposition of the unilateral shift
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-polar-decomposition-for-bounded-operators, def-axiom-of-choice, def-square-summable-family-on-an-arbitrary-index-set, thm-hilbert-space-with-a-given-orthonormal-basis-is-ell-two-of-the-index-set, def-isometry-coisometry-and-partial-isometry, thm-hilbert-space-fourier-expansion, def-orthogonality-and-orthogonal-complement, def-hilbert-orthogonal-projection, def-absolute-value-of-a-bounded-operator, thm-hilbert-adjoint-properties]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "John B. Conway, A Course in Functional Analysis, 2nd ed., Chapter IX §3, printed pp.239–243"
      url: "https://uomustansiriyah.edu.iq/media/lectures/9/9_2017_09_30%2112_00_39_PM.pdf"
    - title: "Theo Bühler and Dietmar Salamon, Functional Analysis, §5.3, printed pp.235–245"
      url: "https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf"
---

## Example

Assume AC. On $H=\ell^2(\mathbb N_0;\mathbb C)$ let $S$ be the unilateral shift $Se_n=e_{n+1}$. Then $S^*S=I$, $SS^*=I-P$ where $P$ is the orthogonal projection onto $\mathbb Ce_0$, and $|S|=I$; the polar partial isometry of $S$ is $S$ itself, with initial space $H$ and final space $(\mathbb Ce_0)^\perp$. In particular $S$ is an isometry that is not a coisometry and not unitary.

## Facts & Assumptions

[A1] $\ell^2(\mathbb N_0;\mathbb C)$ has orthonormal basis $(e_n)$ with $\langle x,e_n\rangle=x_n$, and every $x$ is the norm limit of its finite expansions $\sum_{n<N}\langle x,e_n\rangle e_n$; the closed linear span of $\{e_n:n\ge1\}$ is exactly $(\mathbb Ce_0)^\perp$ ([[def-square-summable-family-on-an-arbitrary-index-set]], [[thm-hilbert-space-with-a-given-orthonormal-basis-is-ell-two-of-the-index-set]], [[thm-hilbert-space-fourier-expansion]], [[def-hilbert-orthogonal-projection]]).

[A2] $\langle S^*x,y\rangle=\langle x,Sy\rangle$, so $S^*S$ and $SS^*$ are determined by their values on the basis; an isometry is exactly an operator with $U^*U=I$, a coisometry has $UU^*=I$, and a partial isometry vanishes on its kernel and is isometric on the orthogonal complement of the kernel ([[thm-hilbert-adjoint-properties]], [[def-isometry-coisometry-and-partial-isometry]]).

[A3] $|S|=(S^*S)^{1/2}$ is the unique positive square root, and the polar partial isometry $U$ satisfies $S=U|S|$ and $\ker U=\ker S$, with initial space $\overline{\operatorname{ran}|S|}$ and final space $\overline{\operatorname{ran}S}$ ([[def-absolute-value-of-a-bounded-operator]], [[thm-polar-decomposition-for-bounded-operators]]).

[A4] AC is the hypothesis of the polar-decomposition and Hilbert-space suppliers ([[def-axiom-of-choice]]).

## Verification

**Proof technique:** direct.

**Given:** The shift $S$ on $\ell^2(\mathbb N_0;\mathbb C)$ defined by $Se_n=e_{n+1}$.

1.1 $S$ is a well-defined bounded linear isometry: for $x=\sum_nx_ne_n$ the series $Sx=\sum_nx_ne_{n+1}$ converges with $\|Sx\|_2^2=\sum_n|x_n|^2=\|x\|_2^2$, so $S^*S=I$ and $\|S\|=1$. [A1, A2]

2.1 $SS^*=I-P$: for the basis vectors $S^*e_0=0$ and $S^*e_{n+1}=e_n$, so $\langle SS^*e_m,e_k\rangle=\langle S^*e_m,S^*e_k\rangle$ equals $1$ for $m=k\ge1$ and $0$ otherwise; hence $SS^*$ is the identity on the closed span of $\{e_n:n\ge1\}=(\mathbb Ce_0)^\perp$ and vanishes on $\mathbb Ce_0$. [step 1.1, A1, A2]

2.2 $|S|=I$: since $S^*S=I$, the identity is positive with square $I=S^*S$, so by uniqueness of the positive square root $|S|=I$. [step 1.1, A3]

3.1 Consequently $\ker S=\{0\}$ and $\operatorname{ran}S=(\mathbb Ce_0)^\perp$, and $S$ is an isometry that is not a coisometry: $SS^*\ne I$ because $SS^*e_0=0$. [step 1.1, step 2.1]

4.1 The polar partial isometry of $S$ is $U=S$: indeed $S=S\cdot I=S|S|$, $\ker S=\{0\}=\ker U$, and $S$ is a partial isometry, being isometric on $H=(\ker S)^\perp$ and vanishing on $\ker S=\{0\}$; uniqueness in the polar decomposition identifies it. [step 3.1, step 2.2, A2, A3]

5.1 The initial space is $(\ker S)^\perp=H$ and the final space is $\overline{\operatorname{ran}S}=(\mathbb Ce_0)^\perp$, as asserted. [step 4.1, A4] ∎
