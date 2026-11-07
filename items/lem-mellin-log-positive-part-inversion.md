---
id: lem-mellin-log-positive-part-inversion
kind: lemma
title: "Mellin inversion for the positive logarithm"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - def-complex-line-integral-over-a-rectifiable-path
  - def-complex-exponential
  - def-natural-logarithm
  - thm-residue-theorem-null-homologous-cycle
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  scraped: []
  references:
    - title: "Ben Green and Terence Tao, The primes contain arbitrarily long arithmetic progressions, Annals of Mathematics 167 (2008)"
      url: "https://annals.math.princeton.edu/wp-content/uploads/annals-v167-n2-p03.pdf"
      locator: "§§3, 9–10 and Appendix A; exact passages inspected in the complete local full-text snapshot"
    - title: "Daniel A. Goldston and Cem Y. Yıldırım, Higher correlations of divisor sums related to primes III: k-correlations"
      url: "https://arxiv.org/pdf/math/0209102"
      locator: "Theorem 1.1 and §6; independent untricked correlation calculation inspected in full relevant sections"
---
## Statement

For every $c>0$ and every real $x>0$, the symmetric improper contour integral on the upward vertical line $\operatorname{Re}z=c$ converges and satisfies
$$\frac1{2\pi i}\int_{c-i\infty}^{c+i\infty}\frac{x^z}{z^2}\,dz=\max(\log x,0),$$
where $x^z:=\exp(z\log x)$.

## Statement references

[Green and Tao, Annals 2008, §§3, 9–10](https://annals.math.princeton.edu/wp-content/uploads/annals-v167-n2-p03.pdf)

[Goldston and Yıldırım, Theorem 1.1 and §6](https://arxiv.org/pdf/math/0209102)

## Facts & Assumptions

**Given:** $c>0$, $x>0$, the complex exponential, complex line integrals, and the residue theorem.

[F1] [[def-complex-exponential]]: The complex exponential is the entire function $\exp z=\sum_{n\ge0}z^n/n!$.

[F2] [[thm-residue-theorem-null-homologous-cycle]]: For a meromorphic function $f$ and an admissible cycle $\Gamma$, $\int_\Gamma f(z)\,dz=2\pi i\sum_a n(\Gamma,a)\operatorname{Res}(f,a)$, with only finitely many nonzero terms.
## Proof

1.1 Set $y=\log x$ and $f_y(z)=e^{yz}/z^2$. On $z=c+it$, $|f_y(z)|=e^{cy}/(c^2+t^2)$, so the vertical integral is absolutely convergent. On a horizontal segment with imaginary part $\pm T$ and real part in a fixed bounded interval, its absolute integral is $O(T^{-2})$ as $T\to\infty$. [F1, given, algebra]

2.1 If $y>0$, apply [F2] to the rectangle between $\operatorname{Re}z=c$ and $\operatorname{Re}z=-M$, oriented positively after taking the upward right side. Its only pole is the double pole at $0$, with residue $y$. Letting the horizontal height tend to infinity and then $M\to\infty$, the left vertical integral tends to zero because its absolute value is at most $e^{-My}\pi/M$. Thus the original upward integral is $2\pi i y$. [F2, step 1.1, algebra]

3.1 If $y<0$, shift the vertical line to $\operatorname{Re}z=M>c$; no pole is crossed. Its integral has absolute value at most $e^{My}\pi/M$, which tends to zero as $M\to\infty$, so the original integral is zero. If $y=0$, the same shift gives a bound $\pi/M\to0$. Division by $2\pi i$ yields $\max(y,0)$ in all cases. [F2, step 1.1, algebra] ∎
