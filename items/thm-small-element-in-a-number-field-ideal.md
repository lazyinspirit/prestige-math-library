---
id: thm-small-element-in-a-number-field-ideal
kind: theorem
title: "Small nonzero element in a number-field ideal"
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - cor-minkowski-convex-body-theorem-at-equality
  - thm-covolume-of-an-ideal-lattice
  - lem-archimedean-norm-bound
  - thm-field-norm-and-trace-by-embeddings
  - thm-ring-of-integers-and-ideals-are-full-lattices
  - def-minkowski-embedding-of-a-number-field
  - def-full-euclidean-lattice-and-covolume
  - def-axiom-of-choice
provenance:
  statement: literature-derived
  proof: literature-derived
proof_strategy: direct
sources:
  references:
    - title: "J. S. Milne, Algebraic Number Theory v3.08"
      url: "https://www.jmilne.org/math/CourseNotes/ANTc.pdf"
      locator: "Ch. 4 Proposition 4.27, pp.80-81."
    - title: "Brian Conrad and Aaron Landesman, Math 154 Algebraic Number Theory"
      url: "https://people.math.harvard.edu/~landesman/assets/undergraduate-number-theory.pdf"
      locator: "§27 Theorems 27.5-27.7."
verification:
  audited: 2026-10-02
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $K$ be a number
field of degree $n=[K:\mathbb Q]$ and signature $(r_1,r_2)$, and let
$\mathfrak a\subseteq\mathcal O_K$ be a nonzero integral ideal with absolute
norm $N\mathfrak a$. Then there is $0\ne\alpha\in\mathfrak a$ with

$$\bigl|N_{K/\mathbb Q}(\alpha)\bigr|\;\le\; \Bigl(\frac4\pi\Bigr)^{r_2}\frac{n!}{n^n}\sqrt{|d_K|}\cdot N\mathfrak a .$$

## Facts & Assumptions

**Given:** A number field $K$ of degree $n$ and signature $(r_1,r_2)$, so
$n=r_1+2r_2$, with ring of integers $\mathcal O_K$ and nonzero integral ideal
$\mathfrak a\subseteq\mathcal O_K$ of absolute norm $N\mathfrak a$
([[def-minkowski-embedding-of-a-number-field]]).

[F1] Minkowski convex-body theorem at equality: under the Axiom of Choice, if
$C\subseteq\mathbb R^n$ is compact, convex and centrally symmetric and
$\operatorname{vol}(C)\ge2^n\operatorname{covol}(\Lambda)$ for a full lattice
$\Lambda$, then $C$ contains a nonzero point of $\Lambda$
([[cor-minkowski-convex-body-theorem-at-equality]],
[[def-full-euclidean-lattice-and-covolume]]).

[F2] For $t>0$ the set
$X_t=\{(x,z)\in\mathbb R^{r_1}\times\mathbb C^{r_2}:\sum_i|x_i|+2\sum_j|z_j|\le t\}$
is compact, convex and centrally symmetric, has
$\operatorname{vol}(X_t)=2^{r_1}(\pi/2)^{r_2}t^n/n!$, and every point of
$X_t$ satisfies $\prod_i|x_i|\prod_j|z_j|^2\le(t/n)^n$
([[lem-archimedean-norm-bound]]).

[F3] For a nonzero integral ideal $\mathfrak a$ the image $\sigma(\mathfrak a)$
under the unscaled Minkowski embedding is a full lattice in $\mathbb R^n$ with
$\operatorname{covol}(\sigma(\mathfrak a))=2^{-r_2}\sqrt{|d_K|}\cdot N\mathfrak a$
([[thm-ring-of-integers-and-ideals-are-full-lattices]],
[[thm-covolume-of-an-ideal-lattice]]).

[F4] For $0\ne\alpha\in K$ the norm is
$N_{K/\mathbb Q}(\alpha)=\prod_{i=1}^{r_1}\sigma_i(\alpha)\prod_{j=1}^{r_2}\tau_j(\alpha)\bar\tau_j(\alpha)$,
so $|N_{K/\mathbb Q}(\alpha)|=\prod_i|\sigma_i(\alpha)|\prod_j|\tau_j(\alpha)|^2$
([[thm-field-norm-and-trace-by-embeddings]]).

## Proof

1.1 Put $t:=\bigl(n!\,(4/\pi)^{r_2}\sqrt{|d_K|}\,N\mathfrak a\bigr)^{1/n}>0$, a positive real number, and let $X_t$ be the region of [F2]. [F2, given]

2.1 By [F2] the set $X_t$ is compact, convex and centrally symmetric. [F2, step 1.1]

2.2 By [F2] and [F3], $\operatorname{vol}(X_t)=2^{r_1}(\pi/2)^{r_2}t^n/n!=2^{r_1}(\pi/2)^{r_2}(4/\pi)^{r_2}\sqrt{|d_K|}N\mathfrak a=2^{r_1}2^{r_2}\sqrt{|d_K|}N\mathfrak a=2^n\,2^{-r_2}\sqrt{|d_K|}N\mathfrak a=2^n\operatorname{covol}(\sigma(\mathfrak a))$, using $n=r_1+2r_2$. [F2, F3, step 1.1, algebra]

3.1 Applying [F1] to the compact convex centrally symmetric set $X_t$ and the full lattice $\Lambda=\sigma(\mathfrak a)$ of positive covolume, whose volume equals $2^n\operatorname{covol}(\Lambda)$ by step 2.2, gives a nonzero $\alpha\in\mathfrak a$ with $\sigma(\alpha)\in X_t$. [F1, F3, step 2.1, step 2.2]

4.1 Since $\sigma(\alpha)\in X_t$, the product bound of [F2] reads $\prod_i|\sigma_i(\alpha)|\prod_j|\tau_j(\alpha)|^2\le(t/n)^n$, and by [F4] the left side is $|N_{K/\mathbb Q}(\alpha)|$. [F2, F4, step 3.1]

5.1 Therefore $|N_{K/\mathbb Q}(\alpha)|\le(t/n)^n=\frac{n!(4/\pi)^{r_2}\sqrt{|d_K|}N\mathfrak a}{n^n}=\bigl(\frac4\pi\bigr)^{r_2}\frac{n!}{n^n}\sqrt{|d_K|}\,N\mathfrak a$, and $0\ne\alpha\in\mathfrak a$. [step 1.1, step 4.1, algebra] ∎
## Remarks

The choice of $t$ makes the volume of $X_t$ exactly $2^n$ times the covolume,
which is why the equality form of Minkowski's theorem is needed and produces
the constant $\sqrt{|d_K|}$ rather than a strict inequality. The factor
$(4/\pi)^{r_2}$ is the ratio between the volume of the $\ell^1\oplus\ell^2$
region of [F2] and the covariantly normalized volume, and it carries the
unscaled real/imaginary convention. Passing to a fractional ideal requires
multiplying by a denominator first, as recorded on the covolume theorem.
