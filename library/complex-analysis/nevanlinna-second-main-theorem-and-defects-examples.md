---
page: nevanlinna-second-main-theorem-and-defects-examples
title: "Nevanlinna's Second Main Theorem and Defects: Examples and Counterexamples"
status: draft
items: []
examples: [ex-nevanlinna-omitted-values-of-exponential,
           ex-nevanlinna-deficiencies-of-elementary-functions,
           ex-truncated-versus-full-nevanlinna-counting,
           cex-nevanlinna-error-bound-without-exceptional-radii,
           ex-sharpness-of-nevanlinna-q-minus-two,
           ex-nevanlinna-and-normal-family-picard-proofs,
           ex-five-value-bound-is-sharp]
---

These computations make the normalisations of the companion page concrete. The
exponential omits exactly the two sphere values $0$ and $\infty$, and each
nonzero value is attained at a simple arithmetic progression, so its
characteristic is $r/\pi+O(1)$, its deficiencies at $0$ and $\infty$ equal
$1$, and every other deficiency and ramification index vanishes. For the sine
the $a$-point sets split into two arithmetic progressions, double points at
$\pm1$ contribute ramification $\varepsilon(\pm1,\sin)=\tfrac12$, and the
combined defect sum is exactly $2$, meeting the defect relation.

The power map $z^d$ separates full from reduced counting:
$N(r,0;z^d)=d\log r$ against $\bar N(r,0;z^d)=\log r$ and
$N_1(r,0;z^d)=(d-1)\log r$. Sharpness is exhibited on both sides: the truncated
Second Main Theorem has asymptotic equality for $e^z$ with the three targets
$\{0,\infty,a\}$, while $e^z$ and $e^{-z}$ share four sphere values without
being equal, so five shared values are needed for the uniqueness theorem. A
lacunary power series with super-exponential exponents — the Hayman
counterexample — shows that the finite-measure exceptional set in the
logarithmic-derivative lemma cannot be removed, since $m_0(r,f'/f)$ is not
$O(\log^+T(r,f)+\log r)$ along a sequence of lacunary radii.

The final example gives a normal-family proof of the local Great Picard
theorem through the three-value exterior extension lemma.
