---
id: lem-continuous-functional-calculus-produces-a-regular-pvm
kind: lemma
title: Continuous functional calculus produces a regular PVM
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-continuous-functional-calculus-for-bounded-normal-operators, thm-continuous-functional-calculus-properties, lem-positive-c-zero-functionals-have-finite-regular-representing-measures, thm-riesz-representation-for-hilbert-space, thm-jordan-von-neumann-polarization, lem-weak-and-strong-additivity-of-orthogonal-projections, thm-pvm-integral-is-a-star-homomorphism, thm-bounded-borel-pvm-integral, thm-bounded-c-zero-functionals-are-regular-complex-measure-integrals, thm-rmk-uniqueness-among-radon-measures, thm-integrals-against-signed-or-complex-measures-are-bounded-by-total-variation, def-regular-complex-borel-measure-on-an-lch-space, def-regular-borel-measure-on-an-lch-space, def-c-star-algebra, def-self-adjoint-positive-unitary-and-normal-elements-of-a-c-star-algebra, thm-hilbert-adjoint-properties, def-real-and-complex-inner-product-space, def-hilbert-space, def-axiom-of-choice, def-total-variation-of-a-signed-or-complex-measure, def-projection-valued-measure, def-integration-against-a-signed-or-complex-measure, def-complex-measure]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Theo Bühler and Dietmar Salamon, Functional Analysis, Lemma 5.76 and Theorem 5.74, printed pp.283–288"
      url: "https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf"
    - title: "Dana P. Williams, Lecture Notes on the Spectral Theorem, Theorem 5.6, pp.17–20"
      url: "https://www.math.dartmouth.edu/~dana/bookspapers/ln-spec-thm.pdf"
verification:
  audited: 2026-09-22
---

## Statement

Assume AC. Let $K$ be a nonempty compact Hausdorff space, let $H$ be a nonzero
complex Hilbert space, and let $\pi:C(K;\mathbb C)\to\mathcal B(H)$ be a unital
star-homomorphism: $\pi$ is complex-linear, $\pi(1)=I$,
$\pi(fg)=\pi(f)\pi(g)$ and $\pi(\overline f)=\pi(f)^*$ for all continuous
$f,g$. Then there is a **unique** regular projection valued measure $E$ on the
Borel $\sigma$-algebra of $K$ such that

$$\pi(f)=\int f\,dE\qquad\text{for every }f\in C(K;\mathbb C),$$

where $\int f\,dE=\Phi_E(f)$ is the bounded Borel integral of
[[thm-bounded-borel-pvm-integral]] and regularity is the requirement that each
finite measure $E_x(B)=\langle E(B)x,x\rangle$ is a regular Borel measure
([[def-regular-borel-measure-on-an-lch-space]]). The PVM constructed satisfies
$\langle E(B)x,y\rangle=\mu_{x,y}(B)$ for the scalar measures $\mu_{x,y}$ built
from $\pi$ below.

## Facts & Assumptions

[A1] Hypothesis on $\pi$: $\pi$ is complex-linear and unital with $\pi(fg)=\pi(f)\pi(g)$ and $\pi(\overline f)=\pi(f)^*$ for continuous $f,g$; in particular $\pi(1)=I$, where $1$ is the constant function.

[A2] A unital star-homomorphism between complex C\*-algebras maps positive elements to positive elements: if $g=\overline hh$ in $C(K;\mathbb C)$ then $\pi(g)=\pi(h)^*\pi(h)$; for $g\ge0$ pointwise there is $h=\sqrt g$ continuous with $g=\overline hh$ ([[def-c-star-algebra]], [[def-self-adjoint-positive-unitary-and-normal-elements-of-a-c-star-algebra]]).

[A3] The pairing is linear in the first argument and conjugate-linear in the second, $\|u\|^2=\langle u,u\rangle$, and for a bounded operator $S$ one has $\langle Su,u\rangle=\langle u,S^*u\rangle$, so $\langle S^*Su,u\rangle=\|Su\|^2\ge0$ ([[thm-hilbert-adjoint-properties]], [[def-real-and-complex-inner-product-space]], [[def-hilbert-space]]).

[A4] Every bounded complex linear functional $L$ on $C_0(X;\mathbb C)$ for LCH $X$ has a unique representation $L(f)=\int f\,d\mu$ by a finite regular complex Borel measure $\mu$, with $\|L\|=|\mu|(X)$; a positive functional's representing measure is a positive measure, and two Radon measures with equal integrals of all continuous functions coincide ([[thm-bounded-c-zero-functionals-are-regular-complex-measure-integrals]], [[lem-positive-c-zero-functionals-have-finite-regular-representing-measures]], [[thm-rmk-uniqueness-among-radon-measures]]).

[A5] A finite complex measure $\nu$ satisfies $|\int g\,d\nu|\le\|g\|_\infty|\nu|(X)$ for bounded measurable $g$, and for a measurable set $B$ and countable measurable partition $(B_j)$ of $B$ one has $|\int_{B_j}g\,d\nu|\le\int_{B_j}|g|\,d|\nu|$; a complex measure $\sigma$ with $|\sigma|\le C\rho$ for a finite regular Borel measure $\rho$ is regular, because inner and outer approximation transfer from $\rho$ to $|\sigma|$ with the factor $C$ ([[thm-integrals-against-signed-or-complex-measures-are-bounded-by-total-variation]], [[def-total-variation-of-a-signed-or-complex-measure]], [[def-regular-borel-measure-on-an-lch-space]], [[def-regular-complex-borel-measure-on-an-lch-space]]).

[A6] For $x\in H$ and a bounded conjugate-linear functional $\varphi$ on $H$ there is a unique $z\in H$ with $\varphi(y)=\langle z,y\rangle$ and $\|z\|=\|\varphi\|$ (Hilbert Riesz representation for the first-variable-linear convention; [[thm-riesz-representation-for-hilbert-space]]).

[A7] Polarization for a sesquilinear form $\Lambda$: $\Lambda(x,y)=\frac14\sum_{k=0}^{3}i^k\Lambda(x+i^ky,x+i^ky)$, and if $P$ is an orthogonal projection then $\langle Px,x\rangle=\|Px\|^2$ ([[thm-jordan-von-neumann-polarization]], [[def-projection-valued-measure]]).

[A8] For a complex measure $\nu$, $\mu\mapsto\int h\,d\mu$ is linear in $\mu$ and $\int\mathbf 1_B\,d\mu=\mu(B)$; and $E_x=\mu_{x,x}$ below is a regular measure because it is the representing measure of a bounded functional on $C(K;\mathbb C)$ ([[def-integration-against-a-signed-or-complex-measure]], [[def-complex-measure]]).

[A9] AC is the declared choice hypothesis of this page from this item onward, and it entails the Countable Choice hypothesis of the Hilbert Riesz supplier ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

**Given:** A nonempty compact Hausdorff space $K$, a nonzero complex Hilbert space $H$ and a unital star-homomorphism $\pi:C(K;\mathbb C)\to\mathcal B(H)$.

1.1 Contractivity of $\pi$: if $\|f\|_\infty\le1$ then $1-\overline ff\ge0$ pointwise, so $1-\overline ff=\overline gg$ with $g=\sqrt{1-\overline ff}$ continuous and hence $I-\pi(f)^*\pi(f)=\pi(g)^*\pi(g)$; for every $x$ this gives $\|x\|^2-\|\pi(f)x\|^2=\|\pi(g)x\|^2\ge0$, so $\|\pi(f)x\|\le\|x\|$ and $\|\pi(f)\|\le1$; for general $f\ne0$ apply this to $f/\|f\|_\infty$. [A1, A2, A3]

2.1 For all $x,y\in H$ the map $L_{x,y}(f):=\langle\pi(f)x,y\rangle$ is a bounded complex linear functional on $C(K;\mathbb C)$ with $\|L_{x,y}\|\le\|x\|\,\|y\|$, because $\pi$ is linear and $|\langle\pi(f)x,y\rangle|\le\|\pi(f)x\|\,\|y\|\le\|f\|_\infty\|x\|\,\|y\|$. [step 1.1, A3]

3.1 Since $K$ is compact, $C(K;\mathbb C)=C_0(K;\mathbb C)$, so the representation theorem applies: for each pair $x,y$ there is a unique finite regular complex Borel measure $\mu_{x,y}$ with $\langle\pi(f)x,y\rangle=\int f\,d\mu_{x,y}$ for all continuous $f$, and $|\mu_{x,y}|(K)=\|L_{x,y}\|\le\|x\|\,\|y\|$. [step 2.1, A4]

4.1 Sesquilinearity: for all $x,z,y\in H$, $\lambda\in\mathbb C$ and continuous $f$ one has $\int f\,d\mu_{x+z,y}=\langle\pi(f)(x+z),y\rangle=\int f\,d\mu_{x,y}+\int f\,d\mu_{z,y}$ and $\int f\,d\mu_{\lambda x,y}=\lambda\int f\,d\mu_{x,y}$, while $\int f\,d\mu_{x,y+z}=\int f\,d\mu_{x,y}+\int f\,d\mu_{x,z}$ and $\int f\,d\mu_{x,\lambda y}=\overline\lambda\int f\,d\mu_{x,y}$; both sides in each identity are finite regular complex measures with equal integrals against every continuous $f$, so they coincide by uniqueness in the representation theorem. [step 3.1, A4]

5.1 For a bounded Borel $h$ the form $\Lambda_h(x,y):=\int h\,d\mu_{x,y}$ is sesquilinear by the previous step, and $|\Lambda_h(x,y)|\le\|h\|_\infty|\mu_{x,y}|(K)\le\|h\|_\infty\|x\|\,\|y\|$; hence for each $x$ the map $y\mapsto\Lambda_h(x,y)$ is a bounded conjugate-linear functional and Hilbert Riesz representation gives a unique vector $E(h)x$ with $\langle E(h)x,y\rangle=\int h\,d\mu_{x,y}$ for all $y$, where $\|E(h)x\|\le\|h\|_\infty\|x\|$; the map $x\mapsto E(h)x$ is linear by sesquilinearity, so $E(h)\in\mathcal B(H)$ and $\|E(h)\|\le\|h\|_\infty$. [A5, A6, step 4.1]

6.1 For bounded Borel $h_1,h_2$ and scalars $a,b$ one has $E(ah_1+bh_2)=aE(h_1)+bE(h_2)$ because the defining pairings agree, and $E(\mathbf 1_K)=I$ because $\langle E(\mathbf 1_K)x,y\rangle=\int\mathbf 1_K\,d\mu_{x,y}=\mu_{x,y}(K)=\langle\pi(1)x,y\rangle=\langle x,y\rangle$; moreover $E(f)=\pi(f)$ for every continuous $f$, since their pairings are equal by the defining property of $\mu_{x,y}$. [step 3.1, step 5.1, A1, A8]

6.2 Conjugate symmetry of the scalar measures: for continuous $f$ one has $\int f\,d\mu_{y,x}=\langle\pi(f)y,x\rangle=\overline{\langle\pi(\overline f)x,y\rangle}=\overline{\int\overline f\,d\mu_{x,y}}=\int f\,d\overline{\mu_{x,y}}$, so $\mu_{y,x}=\overline{\mu_{x,y}}$ by uniqueness; consequently for bounded Borel $h$ and all $x,y$, $\langle E(h)^*x,y\rangle=\overline{\langle E(h)y,x\rangle}=\overline{\int h\,d\mu_{y,x}}=\overline{\int h\,d\overline{\mu_{x,y}}}=\int\overline h\,d\mu_{x,y}=\langle E(\overline h)x,y\rangle$, where the third expression inserts $\mu_{y,x}=\overline{\mu_{x,y}}$ and the fourth uses $\int h\,d\overline{\mu_{x,y}}=\overline{\int\overline h\,d\mu_{x,y}}$; hence $E(h)^*=E(\overline h)$. [step 3.1, step 5.1, A1, A4]

7.1 Multiplicativity with a continuous factor: fix continuous $f$; for the measures $\nu:=\int_\cdot f\,d\mu_{x,y}$ and $\rho:=\mu_{x,E(\overline f)y}$ and every continuous $g$ one computes $\int g\,d\nu=\int fg\,d\mu_{x,y}=\langle E(fg)x,y\rangle=\langle E(f)E(g)x,y\rangle=\langle E(g)x,E(\overline f)y\rangle=\int g\,d\rho$, where the middle identity uses $E(f)=\pi(f)$, the multiplicativity of $\pi$ and $E(g)=\pi(g)$ for continuous $g$; here $\nu$ is regular because $|\nu|\le\|f\|_\infty|\mu_{x,y}|$ and $\rho$ is regular by construction, so uniqueness in the representation theorem gives $\nu=\rho$ and hence $\int h\,d(f\mu_{x,y})=\int h\,d\mu_{x,E(\overline f)y}$ for every bounded Borel $h$; therefore $E(fh)=E(f)E(h)$ for every bounded Borel $h$. [step 3.1, step 5.1, step 6.1, A4, A5]

8.1 Measure identity for a Borel density: for every bounded Borel $f$ and all $x,y$ the finite complex measures $f\mu_{x,y}:B\mapsto\int_Bf\,d\mu_{x,y}$ and $\mu_{x,E(\overline f)y}$ are equal, because for every continuous $g$ one has $\int g\,d(f\mu_{x,y})=\int fg\,d\mu_{x,y}=\langle E(fg)x,y\rangle=\langle E(f)E(g)x,y\rangle=\langle E(g)x,E(\overline f)y\rangle=\int g\,d\mu_{x,E(\overline f)y}$, using multiplicativity with a continuous second factor, which follows from the continuous-factor case together with $E(h)^*=E(\overline h)$. [step 7.1, step 6.2, A5]

9.1 Full multiplicativity: for bounded Borel $f,h$ and all $x,y$, $\langle E(fh)x,y\rangle=\int fh\,d\mu_{x,y}=\int h\,d(f\mu_{x,y})=\int h\,d\mu_{x,E(\overline f)y}=\langle E(h)x,E(\overline f)y\rangle=\langle E(h)x,E(f)^*y\rangle=\langle E(f)E(h)x,y\rangle$, so $E(fh)=E(f)E(h)$. [step 5.1, step 6.2, step 8.1, A3]

10.1 The set function $B\mapsto E(B):=E(\mathbf 1_B)$ takes values in orthogonal projections: $E(B)^2=E(\mathbf 1_B^2)=E(\mathbf 1_B)=E(B)$ by multiplicativity and $E(B)^*=E(\mathbf 1_B)=E(B)$ by conjugation symmetry; moreover $E(\varnothing)=0$, $E(K)=I$ and $E(B\cap C)=E(B)E(C)$ for all Borel $B,C$. [step 6.1, step 6.2, step 9.1, A7]

11.1 Strong countable additivity and regularity: for pairwise disjoint Borel sets $B_n$ with union $B$ and $C_N:=\bigcup_{n\le N}B_n$ one has $E(B)-E(C_N)=E(\mathbf 1_{B\setminus C_N})$ by linearity, so $\|E(B)x-E(C_N)x\|^2=\langle E(\mathbf 1_{B\setminus C_N})x,x\rangle=\mu_{x,x}(B\setminus C_N)$; the sets $B\setminus C_N$ decrease to $\varnothing$ and $\mu_{x,x}$ is a finite complex measure, so its values on them tend to $0$, giving $E(B)x=\lim_NE(C_N)x=\sum_nE(B_n)x$ in norm; moreover $E_x(B)=\langle E(B)x,x\rangle=\mu_{x,x}(B)$ is a regular Borel measure, since $\mu_{x,x}$ is regular by construction. [step 3.1, step 6.1, step 9.1, step 10.1, A5, A7, A8]

12.1 Uniqueness: if $E'$ is a regular PVM on the Borel $\sigma$-algebra of $K$ with $\pi(f)=\int f\,dE'$ for every continuous $f$, then for each $x$ the finite regular positive measures $E_x$ and $E'_x$ have $\int f\,dE_x=\langle\pi(f)x,x\rangle=\int f\,dE'_x$ for every continuous $f$, so $E_x=E'_x$ by the uniqueness theorem for Radon measures; the polarization formula $\langle E(B)x,y\rangle=\frac14\sum_ki^kE_{x+i^ky}(B)$ for the sesquilinear form $(x,y)\mapsto\langle E(B)x,y\rangle$ then gives $\langle E(B)x,y\rangle=\langle E'(B)x,y\rangle$ for all $B,x,y$, hence $E(B)=E'(B)$. [step 10.1, step 11.1, A4, A7]

13.1 Consequently $E(B)=E(\mathbf 1_B)$ defines a regular PVM on the Borel $\sigma$-algebra of $K$ with $\int f\,dE=\pi(f)$ for every continuous $f$, and it is the unique such regular PVM; for bounded Borel $h$ the operator $\int h\,dE$ of [[thm-bounded-borel-pvm-integral]] coincides with $E(h)$, since both have the pairings $\int h\,d\mu_{x,y}$. [step 5.1, step 6.1, step 9.1, step 10.1, step 11.1, step 12.1, A9] ∎
