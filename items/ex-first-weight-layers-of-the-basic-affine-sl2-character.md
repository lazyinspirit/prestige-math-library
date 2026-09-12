---
id: ex-first-weight-layers-of-the-basic-affine-sl2-character
kind: example
title: First weight layers of the basic affine sl2 character
deps: ["thm-weyl-kac-character-formula", "def-kac-moody-integral-and-dominant-integral-weights", "lem-affine-central-coroot-from-the-transpose-null-ray", "prop-roots-of-an-untwisted-affine-lie-algebra", "prop-affine-weyl-group-is-a-coroot-lattice-semidir-product"]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Kleshchev, Sections 6.4 and 11.2
      url: https://darkwing.uoregon.edu/~klesh/teaching/IDLALN3.pdf
    - title: Perrin, Chapter 12
      url: https://lmv.math.cnrs.fr/wp-content/uploads/2019/09/km-suite.pdf
status: draft
origin: pipeline
proof_strategy: direct
---

## Example

For the basic level-one module $L(\Lambda_0)$ of untwisted affine $\mathfrak{sl}_2$, with $q=e^{-\delta}$ and $z=e^{-\alpha}$,
$$e^{-\Lambda_0}\operatorname{ch}L(\Lambda_0)=1+(z^{-1}+1+z)q+(z^{-1}+2+z)q^2+O(q^3).$$
The notation records relative loop degree; a change in the complementary value of $\Lambda_0$ cancels under normalization. The displayed coefficients are Laurent polynomials, and the remainder has degree at least three in the formal completion.

## Facts & Assumptions

**Given:** The normalized loop realization with $h=h_1$, $h_0=c-h$, $\alpha(h)=2$ and $B(h,h)=2$. Fix the basic dominant weight by its simple-coroot labels $\Lambda_0(h_0)=1$ and $\Lambda_0(h)=0$, with an arbitrary complementary Cartan value.

[F1] [[thm-weyl-kac-character-formula]] gives the normalized numerator divided by the positive-root product.

[F2] [[def-kac-moody-integral-and-dominant-integral-weights]] permits the supplied labels $1,0$ and an arbitrary complementary value. [[lem-affine-central-coroot-from-the-transpose-null-ray]] identifies the central coroot here as $c=h_0+h_1$; hence the supplied labels give $\Lambda_0(c)=1$ and level one.

[F3] [[prop-roots-of-an-untwisted-affine-lie-algebra]] gives real roots $\pm\alpha+n\delta$ of multiplicity one and imaginary roots $n\delta$ of multiplicity one here.

[F4] [[prop-affine-weyl-group-is-a-coroot-lattice-semidir-product]] gives the unique forms $t_{mh}$ and $t_{mh}s$ and displays the full translation formula in its Statement.

## Verification

1.1 Put $\lambda=\Lambda_0+\rho$. Then $\lambda(h)=1$ and $\lambda(c)=3$, by F2 and $\rho(h_0)=\rho(h)=1$ in F1. F4's translation formula, with $\nu(h)=\alpha$ and $B(mh,mh)/2=m^2$, gives $$t_{mh}\lambda-\lambda=3m\alpha-(3m^2+m)\delta,\qquad t_{mh}s\lambda-\lambda=(3m-1)\alpha-(3m^2-m)\delta.$$ Translations have sign plus, because $t_h=s_0s$ and powers have even sign; the second family has sign minus. Thus the normalized alternant in F1 is $U=\sum_{m\in\mathbb Z}(z^{-3m}q^{3m^2+m}-z^{1-3m}q^{3m^2-m})$. Only $m=0$ and the degree-two terms from $m=-1$ in the first family and $m=1$ in the second contribute below degree three. Indeed both quadratic expressions are at least four for the other nonzero choices. Hence $U=(1-z)+(z^3-z^{-2})q^2+O(q^3)$. [F1, F2, F4, algebra]

1.2 By F3 the product is $P=(1-z)\prod_{n\ge1}(1-q^n)(1-zq^n)(1-z^{-1}q^n)$. Put $S=1+z+z^{-1}$. The $n=1$ triple is $1-Sq+Sq^2-q^3$ and the $n=2$ triple is $1-Sq^2+O(q^4)$; all later triples begin at degree three or more. Thus $P=(1-z)(1-Sq+O(q^3))$, with zero coefficient at degree two inside the parentheses. [F3, algebra]

2.1 Polynomial division gives $(z^3-z^{-2})/(1-z)=-(z^{-2}+z^{-1}+1+z+z^2)=-T$. By step 1.1, $U/(1-z)=1-Tq^2+O(q^3)$. By step 1.2, the inverse of $P/(1-z)$ through degree two is $1+Sq+S^2q^2+O(q^3)$. Consequently F1 gives $U/P=1+Sq+(S^2-T)q^2+O(q^3)$. Direct multiplication gives $S^2=z^2+z^{-2}+3+2z+2z^{-1}$ and $S^2-T=2+z+z^{-1}$, proving the statement. Cancellation of $1-z=1-e^{-\alpha}$ is valid in the downward completion by its geometric inverse; division never lowers $q$ degree. At each fixed degree the numerator has finitely many terms by the quadratic bounds and the denominator has finitely many relevant positive-degree factors. This also justifies every displayed truncation without an analytic identity or AC. [F1, step 1.1, step 1.2, algebra] ∎
