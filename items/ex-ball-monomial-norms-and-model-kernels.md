---
id: ex-ball-monomial-norms-and-model-kernels
kind: example
title: Ball monomial norms, Bergman and Szegő kernels of the ball
status: draft
origin: pipeline
pipeline_run: frontier-43-complex-representation-15
dependency_level: 6
proof_strategy: direct
deps:
  - def-balls-and-polydiscs-in-complex-euclidean-space
  - def-bergman-space-and-kernel
  - def-complex-integer-powers
  - def-complex-l-two-inner-product
  - def-countable-choice
  - def-ck-and-multi-index-notation-in-several-variables
  - def-factorial-and-falling-factorial
  - def-szego-kernel-smooth-bounded-domain
  - lem-ball-hardy-traces-and-evaluation-bound
  - lem-l-two-with-the-integral-pairing-is-a-hilbert-space
  - lem-monomial-bases-of-bergman-spaces-of-disc-ball-and-polydisc
  - lem-monomial-integrals-over-disc-ball-and-polydisc
  - lem-sphere-and-torus-monomial-integrals
  - thm-cauchy-schwarz-in-an-inner-product-space
  - thm-hilbert-space-fourier-expansion
  - thm-model-domain-bergman-and-szego-kernels
  - rem-complex-euclidean-space-dictionary
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pending
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
sources:
  references:
    - title: Jiří Lebl, Tasty Bits of Several Complex Variables
      url: https://www.jirka.org/scv/scv.pdf
      locator: >-
        §5.2, Exercises 5.2.9–5.2.10, printed pp. 164–165, ask for the ball
        monomial system and ball kernel; §5.3, Exercises 5.3.1 and 5.3.3,
        printed pp. 165–166, ask for the boundary monomial system and ball
        Szegő kernel. The local suppliers give the exact norms and the model
        kernel theorem gives the closed forms. The author's errata corrects
        Exercise 5.3.1 from “orthonormal” to “orthogonal”; normalized weights
        are stated here.
    - title: Zbigniew Błocki, The Bergman Kernel and Metric
      url: https://gamma.im.uj.edu.pl/~blocki/publ/ln/bergman.pdf
      locator: >-
        §1, printed p. 3: ball kernel formula and the ball orthonormal-monomial
        exercise. The p. 3 expansion text says “orthonormal system” without
        an explicit completeness qualification; the assigned complete-basis
        supplier supplies that hypothesis.
---

## Statement

Assume $\mathrm{AC}_\omega$ ([[def-countable-choice]]) and let $m\ge1$.
For $\alpha\in\mathbb N^m$, use $|\alpha|:=\sum_{j<m}\alpha_j$,
$\alpha!:=\prod_{j<m}\alpha_j!$, and $z^\alpha:=\prod_{j<m}z_j^{\alpha_j}$.
Write $c_\alpha:=\frac{\pi^m\alpha!}{(m+|\alpha|)!}$ and
$e_\alpha(z):=\frac{z^\alpha}{\sqrt{c_\alpha}}$.
The family $(e_\alpha)_{\alpha\in\mathbb N^m}$ is a complete orthonormal
system of $A^2(\mathbb B^m)$. With normalized polar surface measure $\sigma_1$
on $S^{2m-1}=\partial\mathbb B^m$, put
$w_\alpha:=\frac{(m-1)!\alpha!}{(m-1+|\alpha|)!}$ and
$e^\partial_\alpha(\zeta):=\frac{\zeta^\alpha}{\sqrt{w_\alpha}}$.
The $e^\partial_\alpha$ form a complete orthonormal system in the ball Hardy
space $H^2(S^{2m-1},\sigma_1)$. The corresponding kernels are
$$K_{\mathbb B^m}(z,w)=\frac{m!}{\pi^m(1-\langle z,w\rangle)^{m+1}},\qquad S_{\mathbb B^m}(z,w)=\frac{1}{(1-\langle z,w\rangle)^m}.$$
For each $\alpha$ their reproducing identities hold on $e_\alpha$ and
$e^\partial_\alpha$, respectively; completeness and bounded evaluation extend
these checks to the corresponding spaces.

## Facts & Assumptions

[A1] The only choice assumption is $\mathrm{AC}_\omega$ ([[def-countable-choice]]); it is inherited through the Bergman and Hardy Hilbert/Riesz suppliers, and no full Axiom of Choice is used.

[F1] The ball monomial squared norm is $c_\alpha=\pi^m\alpha!/(m+|\alpha|)!$, and the normalized monomials form a complete orthonormal system in $A^2(\mathbb B^m)$ ([[lem-monomial-integrals-over-disc-ball-and-polydisc]], [[lem-monomial-bases-of-bergman-spaces-of-disc-ball-and-polydisc]]).

[F2] The normalized sphere monomials have squared norms $w_\alpha=(m-1)!\alpha!/(m-1+|\alpha|)!$; they form a complete orthonormal system in $H^2(S^{2m-1},\sigma_1)$ and evaluations there are bounded ([[lem-sphere-and-torus-monomial-integrals]], [[lem-ball-hardy-traces-and-evaluation-bound]]).

[F3] The ball Bergman and Szegő kernels have the exact displayed formulas and reproduce the corresponding Bergman and Hardy spaces ([[thm-model-domain-bergman-and-szego-kernels]]).

[F4] In a Hilbert space, each vector is the norm limit of the finite-subset Fourier sums for a complete orthonormal family ([[thm-hilbert-space-fourier-expansion]]).

[F5] The Bergman kernel section $K_\Omega(\cdot,w)$ is the unique Riesz representer of evaluation, with $f(w)=\langle f,K_\Omega(\cdot,w)\rangle$ ([[def-bergman-space-and-kernel]]).

[F6] On a Szegő-regular pair, the extended evaluation has a unique Riesz representer $S_w$, and the Szegő kernel is $S_\sigma(z,w)=E_z(S_w)$ ([[def-szego-kernel-smooth-bounded-domain]]).

[F7] The complex $L^2$ pairing is linear in its first variable ([[def-complex-l-two-inner-product]]).

[F8] The complex $L^2$ inner product is conjugate symmetric ([[lem-l-two-with-the-integral-pairing-is-a-hilbert-space]]).

[F9] Cauchy–Schwarz makes inner products continuous in the Hilbert norm ([[thm-cauchy-schwarz-in-an-inner-product-space]]).

[F10] For a multi-index, $|\alpha|=\sum_{j<m}\alpha_j$ and $\alpha!=\prod_{j<m}\alpha_j!$ ([[def-ck-and-multi-index-notation-in-several-variables]], [[def-factorial-and-falling-factorial]]).

[F11] Complex natural powers are recursively defined, and $z^\alpha$ is the product of the coordinate powers ([[def-complex-integer-powers]], [[def-ck-and-multi-index-notation-in-several-variables]]).

[F12] The unit ball $\mathbb B^m$ is the open ball for the Euclidean norm on $\mathbb C^m$ ([[def-balls-and-polydiscs-in-complex-euclidean-space]], [[rem-complex-euclidean-space-dictionary]]).

## Proof

**Proof technique:** complete monomial systems, the exact model kernels, and finite Fourier sums.

**Given:** $\mathrm{AC}_\omega$, $m\ge1$, $\mathbb B^m$, its sphere, and normalized polar surface measure.

1.1 By [F10] and [F11], the multi-index factorials, lengths and powers in the formulas have their stated meanings. The ball moment in [F1] gives $\|z^\alpha\|_{A^2(\mathbb B^m)}^2=c_\alpha$, and [F1] gives completeness of the normalized monomials. [A1, F1, F10, F11, given]

1.2 By [F2], $\|\zeta^\alpha\|_{L^2(S,\sigma_1)}^2=w_\alpha$ and the normalized boundary monomials form a complete orthonormal system of the Hardy space; their evaluations are bounded. [A1, F2, given]

1.3 By [F12], $z,w\in\mathbb B^m$ have Euclidean norms below $1$; Cauchy–Schwarz [F9] gives $|\langle z,w\rangle|\le\|z\|\|w\|<1$, so both denominators are nonzero. The model-domain theorem [F3], with Lebesgue measure and normalized polar boundary measure, gives the displayed closed-form kernels. [A1, F3, F9, F12, given]

1.4 Fix $w\in\mathbb B^m$ and let $K_w=K_{\mathbb B^m}(\cdot,w)$. By [F4], its Fourier sums over finite $F\subset\mathbb N^m$ converge in $A^2(\mathbb B^m)$ to $K_w$. For each $\beta$, [F5] gives $\langle e_\beta,K_w\rangle=e_\beta(w)$, so conjugate symmetry [F8] makes its Fourier coefficient $\langle K_w,e_\beta\rangle=\overline{e_\beta(w)}$. If $F$ contains $\alpha$, orthonormality gives $$\left\langle e_\alpha,\sum_{\beta\in F}\overline{e_\beta(w)}e_\beta\right\rangle=\sum_{\beta\in F}e_\beta(w)\langle e_\alpha,e_\beta\rangle=e_\alpha(w).$$ Passing to the norm limit using [F9] proves $\int_{\mathbb B^m}e_\alpha(z)\overline{K_{\mathbb B^m}(z,w)}\,d\lambda(z)=e_\alpha(w)$. [A1, F1, F4, F5, F7, F8, F9]

1.5 Fix $w\in\mathbb B^m$ and let $S_w$ be the Riesz representer of the bounded Hardy evaluation at $w$. By [F4], its finite-subset Fourier sums in the complete system $e^\partial_\beta$ converge to $S_w$. By [F6], $\langle e^\partial_\beta,S_w\rangle=e^\partial_\beta(w)$, so conjugate symmetry [F8] gives Fourier coefficient $\langle S_w,e^\partial_\beta\rangle=\overline{e^\partial_\beta(w)}$. For a finite $F$ containing $\alpha$, orthonormality gives $$\left\langle e^\partial_\alpha,\sum_{\beta\in F}\overline{e^\partial_\beta(w)}e^\partial_\beta\right\rangle=e^\partial_\alpha(w).$$ Passing to the norm limit using [F9] proves $\langle e^\partial_\alpha,S_w\rangle=e^\partial_\alpha(w)$, the Hardy reproducing identity for that basis vector. This uses the boundary Hilbert-space representer $S_w$; the interior kernel is not evaluated at a boundary point. [A1, F2, F4, F6, F7, F8, F9]

2.1 The finite linear spans of the complete systems in [F1] and [F2] are dense in their respective Hilbert spaces. Bounded evaluation from [F5] and [F2], and continuity of inner products from [F9], extend the identities of steps 1.4 and 1.5 from monomials to the full Bergman and Hardy spaces. At $\alpha=0$, $c_0=\pi^m/m!$ and $w_0=1$; setting $z=0$ in the kernels gives $m!/\pi^m$ and $1$. When $m=1$, $\mathbb B^1=\mathbb D$ and the formulas specialize to the disc kernels. [A1, F1, F2, F3, F5, F6, F9, step 1.4, step 1.5] ∎
