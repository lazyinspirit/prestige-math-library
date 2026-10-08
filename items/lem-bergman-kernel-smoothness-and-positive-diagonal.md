---
id: lem-bergman-kernel-smoothness-and-positive-diagonal
kind: lemma
title: Smoothness of the Bergman kernel and positivity of its diagonal on bounded domains
status: draft
origin: pipeline
pipeline_run: frontier-43-complex-representation-15
dependency_level: 5
proof_strategy: direct
deps:
  - cor-euclidean-closed-balls-and-spheres-are-compact
  - cor-holomorphic-functions-in-several-variables-are-smooth
  - def-bergman-space-and-kernel
  - def-ck-and-multi-index-notation-in-several-variables
  - def-ck-euclidean-maps-and-diffeomorphisms
  - def-complex-conjugate-real-imaginary-part-and-modulus
  - def-complex-l-two-inner-product
  - def-countable-choice
  - def-integer-power
  - def-metric-ball
  - def-metric-bounded-diameter
  - def-metric-space
  - def-metric-topology
  - def-natural-logarithm
  - lem-bergman-evaluation-bound-on-compact-subsets
  - lem-derivative-of-a-power
  - lem-euclidean-balls-have-positive-finite-lebesgue-measure
  - lem-l-two-with-the-integral-pairing-is-a-hilbert-space
  - prop-measure-monotonicity
  - rem-complex-euclidean-space-dictionary
  - thm-algebra-of-continuous-functions
  - thm-algebra-of-derivatives
  - thm-bergman-reproducing-projection-and-extremal
  - thm-borel-sets-are-lebesgue-measurable
  - thm-cauchy-schwarz-in-an-inner-product-space
  - thm-ck-euclidean-maps-closed-under-algebra-and-composition
  - thm-locally-bounded-separate-holomorphy
  - thm-logarithm-derivative-and-integral
  - thm-natural-logarithm-laws
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
sources:
  references:
    - title: Zbigniew Błocki, The Bergman Kernel and Metric
      url: https://gamma.im.uj.edu.pl/~blocki/publ/ln/bergman.pdf
      locator: >-
        §1, printed p. 2 (PDF pp. 1–2): the kernel is holomorphic in its first
        variable and antiholomorphic in its second; Błocki invokes Hartogs'
        separate-analyticity theorem to conclude joint holomorphy and smoothness.
        Błocki assumes bounded domains throughout this section; the local proof below
        derives boundedness on compact products from evaluation and applies the
        library's locally bounded separate-holomorphy theorem to arbitrary open Ω.
    - title: Jiří Lebl, Tasty Bits of Several Complex Variables
      url: https://www.jirka.org/scv/scv.pdf
      locator: >-
        §5.2, Exercise 5.2.4(a), printed p. 164 (PDF p. 163): asks to show that
        the diagonal Bergman kernel is positive on a bounded domain, but gives no
        proof. The constant-function extremal witness is established locally here.
---

## Statement

Assume the Axiom of Countable Choice $\mathrm{AC}_\omega$ ([[def-countable-choice]]). Let $m\ge1$ and let $\Omega\subseteq\mathbb C^m$ be a nonempty open set. Then $K_\Omega\in C^\infty(\Omega\times\Omega)$ and $z\mapsto K_\Omega(z,z)$ is $C^\infty$ on $\Omega$. If $\Omega$ is bounded, its Lebesgue measure satisfies $0<\lambda_\Omega(\Omega)<\infty$, and for every $z\in\Omega$,

$$K_\Omega(z,z)\ge\frac{1}{\lambda_\Omega(\Omega)}>0.$$

In particular, on a bounded domain $z\mapsto\log K_\Omega(z,z)$ is $C^\infty$.

## Facts & Assumptions

[A1] The only choice principle assumed is $\mathrm{AC}_\omega$ ([[def-countable-choice]]). It is inherited through the Bergman Hilbert-space and Riesz setup, and is used by the Borel and Euclidean-ball measure suppliers below; no full Axiom of Choice is used.

[F1] Under $\mathrm{AC}_\omega$, $A^2(\Omega)$ is a closed complex Hilbert subspace of $L^2(\Omega)$ with the first-variable-linear pairing. Point evaluation has Riesz section $k_w=K_\Omega(\cdot,w)$ and reproduces evaluation. The definition also gives $A^2(\mathbb C^m)=\{0\}$ and $K_{\mathbb C^m}\equiv0$, so no positivity is asserted for every unbounded open set ([[def-bergman-space-and-kernel]], [[def-complex-l-two-inner-product]], [[lem-l-two-with-the-integral-pairing-is-a-hilbert-space]]).

[F2] The definition $K_\Omega(z,w)=k_w(z)$ makes $z\mapsto K_\Omega(z,w)$ holomorphic. Reproduction gives $K_\Omega(z,w)=\langle k_w,k_z\rangle$, so conjugate symmetry of the first-variable-linear $L^2$ pairing gives $K_\Omega(w,z)=\overline{K_\Omega(z,w)}$; hence the kernel is antiholomorphic in $w$ ([[def-bergman-space-and-kernel]], [[def-complex-l-two-inner-product]], [[lem-l-two-with-the-integral-pairing-is-a-hilbert-space]]).

[F3] On every nonempty compact $K\subseteq\Omega$, $\sup_K|f|\le C_K\|f\|_2$. The diagonal extremal identity is $K_\Omega(w,w)=\|k_w\|_2^2=\sup_{\|f\|_2\le1}|f(w)|^2$ ([[lem-bergman-evaluation-bound-on-compact-subsets]], [[thm-bergman-reproducing-projection-and-extremal]]).

[F4] The first-variable-linear Hilbert pairing satisfies $|\langle f,g\rangle|\le\|f\|_2\|g\|_2$ ([[thm-cauchy-schwarz-in-an-inner-product-space]]).

[F5] A separately holomorphic, locally bounded function on an open subset of $\mathbb C^n$ is jointly holomorphic there ([[thm-locally-bounded-separate-holomorphy]]).

[F6] A holomorphic function on an open subset of complex Euclidean space is $C^\infty$ in the underlying real coordinates ([[cor-holomorphic-functions-in-several-variables-are-smooth]]).

[F7] Complex conjugation is a real-linear coordinate map, and finite-order smooth maps are closed under composition ([[def-complex-conjugate-real-imaginary-part-and-modulus]], [[def-ck-euclidean-maps-and-diffeomorphisms]], [[thm-ck-euclidean-maps-closed-under-algebra-and-composition]]).

[F8] The complex Euclidean metric is the real Euclidean metric under $\mathbb C^m\cong\mathbb R^{2m}$. An open nonempty set contains a positive-radius ball, a bounded set is contained in some ball, and Euclidean balls have finite positive Lebesgue measure. Open sets are Borel and Lebesgue measurable, and measure is monotone ([[def-bergman-space-and-kernel]], [[rem-complex-euclidean-space-dictionary]], [[def-metric-space]], [[def-metric-topology]], [[def-metric-ball]], [[def-metric-bounded-diameter]], [[cor-euclidean-closed-balls-and-spheres-are-compact]], [[lem-euclidean-balls-have-positive-finite-lebesgue-measure]], [[thm-borel-sets-are-lebesgue-measurable]], [[prop-measure-monotonicity]]).

[F9] For $x>0$, $\log'(x)=1/x$ and $\log$ is continuous. For each integer $n\ge1$, $\frac{d}{dx}x^{-n}=-n x^{-n-1}$; products and quotients of continuous functions are continuous where their denominators are nonzero ([[def-natural-logarithm]], [[thm-logarithm-derivative-and-integral]], [[thm-natural-logarithm-laws]], [[def-integer-power]], [[lem-derivative-of-a-power]], [[thm-algebra-of-continuous-functions]], [[thm-algebra-of-derivatives]]). A real function is $C^\infty$ when all iterated coordinate partial derivatives of every finite order exist and are continuous ([[def-ck-and-multi-index-notation-in-several-variables]]).

## Proof

**Proof technique:** direct, using the Riesz sections, compact evaluation bounds and the constant-function extremal witness.

**Given:** $\mathrm{AC}_\omega$, $m\ge1$, a nonempty open $\Omega\subseteq\mathbb C^m$, its Bergman space $A^2(\Omega)$, and its Bergman kernel $K_\Omega$.

1.1 For each $w\in\Omega$, $K_\Omega(z,w)=k_w(z)$ is holomorphic in $z$ by [F1, F2]. Reproducing evaluation at $z$ on $k_w$ gives $K_\Omega(z,w)=\langle k_w,k_z\rangle$. Conjugate symmetry then gives $K_\Omega(w,z)=\langle k_z,k_w\rangle=\overline{K_\Omega(z,w)}$. Thus $K_\Omega$ is antiholomorphic in $w$, and $F(z,\eta):=K_\Omega(z,\overline\eta)$ is separately holomorphic on $\Omega\times\Omega^*$, where $\Omega^*:=\{\eta:\overline\eta\in\Omega\}$. [A1, F1, F2, given]

1.2 Suppose $\Omega$ is bounded. Choose $a\in\Omega$; openness gives $r>0$ with $B(a,r)\subseteq\Omega$. Boundedness supplies $c\in\mathbb C^m$ and $R_0>0$ with $\Omega\subseteq B(c,R_0)$. The Euclidean triangle inequality then gives $\Omega\subseteq B(0,\|c\|+R_0+1)$. By [F8], $\Omega$ is measurable and $0<\lambda(B(a,r))\le\lambda_\Omega(\Omega)\le\lambda(B(0,\|c\|+R_0+1))<\infty$. Hence $0<\lambda_\Omega(\Omega)<\infty$. [A1, F1, F8, given]

2.1 Let $K,L\subseteq\Omega$ be nonempty compact sets. The evaluation estimate [F3] and the diagonal extremal identity [F3] give $K_\Omega(z,z)\le C_K^2$ for $z\in K$ and $K_\Omega(w,w)\le C_L^2$ for $w\in L$. Since $K_\Omega(z,w)=\langle k_w,k_z\rangle$, Cauchy–Schwarz [F4] gives $|K_\Omega(z,w)|\le C_KC_L$ on $K\times L$. Around any $z_0,w_0\in\Omega$ choose closed Euclidean ball neighborhoods $K,L$ contained in $\Omega$; they are compact by [F8]. This proves that $F$ is locally bounded on $\Omega\times\Omega^*$. [A1, F3, F4, F8, step 1.1]

2.2 Suppose $\Omega$ is bounded. For $z\in\Omega$ let $f_0:=\lambda_\Omega(\Omega)^{-1/2}$ be the constant function. By step 1.2 it lies in $A^2(\Omega)$ and has norm one. The extremal identity [F3] gives $K_\Omega(z,z)\ge|f_0(z)|^2=1/\lambda_\Omega(\Omega)>0$. [A1, F1, F3, step 1.2]

3.1 The set $\Omega^*$ is open because complex conjugation is a Euclidean isometry, so $\Omega\times\Omega^*$ is an open subset of $\mathbb C^{2m}$. By [F5], the separately holomorphic, locally bounded function $F$ is jointly holomorphic. [F5, F7, F8, step 1.1, step 2.1]

4.1 By [F6], $F$ is $C^\infty$ in real coordinates. The map $(z,w)\mapsto(z,\overline w)$ and the diagonal map $z\mapsto(z,z)$ are real-linear coordinate maps, hence smooth; [F7] makes their compositions with $F$ smooth. Therefore $K_\Omega(z,w)=F(z,\overline w)$ is $C^\infty$ on $\Omega\times\Omega$, and $z\mapsto K_\Omega(z,z)$ is $C^\infty$ on $\Omega$. [F6, F7, step 3.1]

5.1 Let $D(z):=K_\Omega(z,z)$. On a bounded $\Omega$, steps 4.1 and 2.2 give $D\in C^\infty(\Omega)$ with $D>0$. Set $\ell(x):=\log x$ for $x>0$. By [F9], $\ell'(x)=x^{-1}$, and induction using the negative-power derivative in [F9] gives $\ell^{(n)}(x)=(-1)^{n-1}(n-1)!x^{-n}$ for every $n\ge1$. These derivatives are continuous on $(0,\infty)$ by [F9], and $\ell$ itself is continuous there; hence $\ell\in C^\infty((0,\infty))$. The composition theorem [F7] now gives $\log K_\Omega(z,z)=\ell(D(z))\in C^\infty(\Omega)$. [F7, F9, step 4.1, step 2.2]

6.1 Steps 2.1 and 4.1 establish joint $C^\infty$ smoothness and the smooth diagonal for every nonempty open $\Omega$; steps 1.2, 2.2 and 5.1 establish the positive diagonal bound and smooth logarithmic potential whenever $\Omega$ is bounded. These are the two claims. [step 2.1, step 4.1, step 1.2, step 2.2, step 5.1] ∎
