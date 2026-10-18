---
id: lem-one-mode-gaussian-weyl-average-is-rank-one
kind: lemma
title: The Gaussian Weyl average is a rank-one projection
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 3
deps:
  - def-regular-weyl-system-on-a-symplectic-vector-space
  - lem-schrodinger-weyl-system-is-regular-and-irreducible
  - def-incomplete-tensor-product-with-reference-vector
  - def-hilbert-space
  - def-complex-haar-lp-spaces-and-compactly-supported-functions
  - def-countable-choice
  - thm-l-one-fourier-inversion
  - lem-fourier-transform-of-a-gaussian
  - thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces
  - thm-gaussian-integral
  - thm-c-c-rn-is-dense-in-l-p-of-rn
  - thm-bochner-integrability-criterion
  - lem-bochner-integral-norm-inequality
  - thm-bounded-linear-maps-commute-with-bochner-integration
  - thm-holder-inequality-for-integrals
proof_strategy: direct
axiom_use: "Countable Choice is inherited only from L2 density and L1 Fourier inversion. The Gaussian integral identity and operator intertwinement are choice-free."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Roland Speicher, Mathematical Aspects of Quantum Mechanics, Lecture Notes"
      url: "https://www.uni-saarland.de/fileadmin/upload/lehrstuhl/speicher/Math_of_QM/MathematicalAspects.pdf"
    - title: "Amritanshu Prasad, An Easy Proof of the Stone-von Neumann-Mackey Theorem"
      url: "https://arxiv.org/pdf/0912.0574"
---
## Statement



In the one-mode Schrödinger Weyl system
$W(q,p)f(x)=e^{i(p x-pq/2)}f(x-q)$ on $L^2(\mathbb R)$, for $a>0$ put
$\Omega_a(x)=(a/\pi)^{1/4}e^{-ax^2/2}$. The weak Weyl average

$$A_a:=\frac1{2\pi}\int_{\mathbb R^2}e^{-aq^2/4-p^2/(4a)}W(q,p)\,dq\,dp$$
is the orthogonal projection $f\mapsto\langle f,\Omega_a\rangle\Omega_a$, and $\operatorname{span}\{W(q,p)\Omega_a:q,p\in\mathbb R\}$ is dense in $L^2(\mathbb R)$. If a bounded operator intertwines two one-mode Weyl systems with this phase, it intertwines their averages. In an incomplete tensor product of copies of this representation, $A_a$ acts on one coordinate as the rank-one projection onto $\Omega_a$ tensored with the identity on all other coordinates.

## Facts & Assumptions

**Given:** The one-mode Schrödinger Weyl system, $a>0$, $\Omega_a$, and the Lebesgue $L^2$ structure on $\mathbb R$.

[F1] The Schrödinger formula is a strongly continuous unitary Weyl system ([[lem-schrodinger-weyl-system-is-regular-and-irreducible]]).

[F2] With $\widehat f(\xi)=\int f(x)e^{-2\pi ix\xi}\,dx$, $\widehat{e^{-\pi t x^2}}(\xi)=t^{-1/2}e^{-\pi\xi^2/t}$ for $t>0$ ([[lem-fourier-transform-of-a-gaussian]]).

[F3] $C_c(\mathbb R)$ is dense in $L^2(\mathbb R)$ under Countable Choice ([[thm-c-c-rn-is-dense-in-l-p-of-rn]]).

[F4] Fubini applies to an absolutely integrable function on the Euclidean product ([[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]).

[F5] Strongly measurable Hilbert-valued functions with integrable norm have Bochner integrals; the norm is at most the integral of the norm, and bounded linear maps commute with the integral ([[thm-bochner-integrability-criterion]], [[lem-bochner-integral-norm-inequality]], [[thm-bounded-linear-maps-commute-with-bochner-integration]]).

[F6] If $h\in L^1(\mathbb R)$ and $\widehat h\in L^1$, Fourier inversion recovers $h$ almost everywhere; in particular $\widehat h=0$ implies $h=0$ almost everywhere ([[thm-l-one-fourier-inversion]]).

[F7] The Gaussian integral is $\int_{\mathbb R}e^{-x^2}\,dx=\sqrt\pi$ ([[thm-gaussian-integral]]).

[F8] Products of $L^2$ functions lie in $L^1$ by Hölder's inequality ([[thm-holder-inequality-for-integrals]]).

[A1] Countable Choice is assumed by [F3] and [F6]
([[def-countable-choice]]).

## Proof



**Proof technique:** direct.

**Given:** The one-mode formula and $a>0$.

1.1 By [F7], $\|\Omega_a\|_2^2=(a/\pi)^{1/2}\int e^{-ax^2}\,dx=1$. For fixed $f\in L^2(\mathbb R)$, the map $(q,p)\mapsto e^{-aq^2/4-p^2/(4a)}W(q,p)f$ is strongly measurable by [F1] and has integrable norm. Therefore [F5] defines a bounded operator $A_a$ by the displayed weak integral. [F1, F5, F7, given, construct]

1.2 Suppose $g\in L^2(\mathbb R)$ is orthogonal to $W(0,p)\Omega_a$ for every $p$. Then $h(x)=\Omega_a(x)\overline{g(x)}$ belongs to $L^1$ by [F8], and $\widehat h(\xi)=0$ for every $\xi$, because $\lambda=1$ in the modulation and $p$ ranges over all real numbers. By [F6], $h=0$ almost everywhere; $\Omega_a(x)>0$ everywhere, so $g=0$. Hence the modulation orbit, and therefore the full Weyl orbit, has dense linear span. [A1, F6, F8, given, algebra]

2.1 Take $f\in C_c(\mathbb R)$. Using [F4] to integrate first in $p$ and [F2] with $t=1/(4\pi a)$ gives$\int_{\mathbb R}e^{-p^2/(4a)}e^{ip(x-q/2)}\,dp=2\sqrt{\pi a}\,e^{-a(x-q/2)^2}.$Thus$A_af(x)=\sqrt{a/\pi}\int_{\mathbb R}e^{-aq^2/4-a(x-q/2)^2}f(x-q)\,dq.$The double integral is absolutely integrable: integrating $|f(x-q)|$ in $x$ gives $\|f\|_1$, and the remaining Gaussian factors are integrable. [F2, F4, step 1.1, algebra]

3.1 Set $y=x-q$. Then $q^2/4+(x-q/2)^2=(x^2+y^2)/2$, so$A_af(x)=\sqrt{a/\pi}e^{-ax^2/2}\int_{\mathbb R}e^{-ay^2/2}f(y)\,dy =\Omega_a(x)\langle f,\Omega_a\rangle.$ Both sides define bounded operators on $L^2$; by [F3] the equality extends from $C_c$ to all of $L^2$. Since $\|\Omega_a\|=1$, $A_a$ is the orthogonal projection onto $\mathbb C\Omega_a$. [F3, step 2.1, algebra]

4.1 If bounded $T$ intertwines one-mode systems $W$ and $W'$, then $TW(q,p)=W'(q,p)T$ for every $(q,p)$. The scalar weight in the integral is integrable, so [F5] lets $T$ pass through the Bochner integral of step 1.1, giving $TA_a=A'_aT$. On elementary vectors in an incomplete tensor product, the same integral acts on the selected coordinate by its one-mode average and as identity on the other coordinates; boundedness extends this identity to the completion. [F5, step 1.1, step 3.1, algebra]

5.1 Steps 1.2, 3.1, and 4.1 prove, respectively, totality of the Gaussian Weyl orbit, the rank-one projection, and its intertwiner and tensor-factor properties. [step 1.2, step 3.1, step 4.1] ∎
