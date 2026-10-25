---
id: ex-qftx-gaga-analytic-relation-kernel
kind: example
title: "A holomorphic relation kernel on a bidisc"
status: "published"
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 3
deps:
  - def-axiom-of-choice
  - def-qftx-analytic-coherent-module
  - def-stalk-of-presheaf
  - thm-qftx-gaga-analytic-oka-coherence
  - lem-qftx-coherent-analytic-module-calculus
  - thm-exactness-of-sheaves-stalkwise
  - thm-power-series-expansion-in-several-complex-variables
  - cor-uniqueness-of-multivariable-power-series-coefficients
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-qftx-analytic-coherent-module: mathematical-premise
  def-stalk-of-presheaf: mathematical-premise
  thm-qftx-gaga-analytic-oka-coherence: mathematical-premise
  lem-qftx-coherent-analytic-module-calculus: mathematical-premise
  thm-exactness-of-sheaves-stalkwise: mathematical-premise
  thm-power-series-expansion-in-several-complex-variables: mathematical-premise
  cor-uniqueness-of-multivariable-power-series-coefficients: mathematical-premise
justified_by: []
forward_refs: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: example
sources:
  references:
    - title: "Jean-Pierre Demailly, Complex Analytic and Differential Geometry, Chapter II §3.3, Theorem 3.19 and Lemma 3.20"
      url: "https://www-fourier.univ-grenoble-alpes.fr/~demailly/manuscripts/agbook.pdf"
    - title: "Joachim Wehler, Stein Manifolds, §4.2, Theorem 4.28"
      url: "https://www.math.lmu.de/~wehler/20190530_Stein_Manifolds_script.pdf"
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-25
---

## Example

Assume the Axiom of Choice and let $D=D_1\times D_2\subset\mathbb C^2$ be a bidisc centered at the origin, with coordinate functions $z_1,z_2$. For the $\mathcal O_D$-linear map $\mu:\mathcal O_D^{\oplus2}\to\mathcal O_D$ given by $\mu(a,b)=z_1a+z_2b$, the relation sheaf is a coherent $\mathcal O_D$-module and is generated on $D$ by the section $(-z_2,z_1)$, including at the origin.

## Example references

[Demailly, Chapter II §3.3, Theorem 3.19 and Lemma 3.20](https://www-fourier.univ-grenoble-alpes.fr/~demailly/manuscripts/agbook.pdf)

[Wehler, §4.2, Theorem 4.28 (Oka coherence theorem)](https://www.math.lmu.de/~wehler/20190530_Stein_Manifolds_script.pdf)

## Facts & Assumptions

**Given:** AC; the bidisc $D$ and the map $\mu$ in the Example statement.

[A1] [[def-axiom-of-choice]]: AC is the theorem's adopted ambient assumption.

[F1] [[def-qftx-analytic-coherent-module]]: the relation sheaf is the kernel of $\mu$, and local finite generation means one finite family generates all stalks on a neighborhood.

[F6] [[def-stalk-of-presheaf]]: a stalk consists of germs of sections on neighborhoods of the point.

[F2] [[thm-qftx-gaga-analytic-oka-coherence]]: $\mathcal O_D$ is coherent and every finite tuple has a locally finite-type relation sheaf.

[F3] [[lem-qftx-coherent-analytic-module-calculus]]: kernels and finite extensions of coherent modules are coherent.

[F4] [[thm-exactness-of-sheaves-stalkwise]]: equality of the explicit generated subsheaf with the kernel sheaf is checked stalkwise.

[F5] [[thm-power-series-expansion-in-several-complex-variables]] and [[cor-uniqueness-of-multivariable-power-series-coefficients]]: holomorphic germs have convergent power series with unique coefficients, and the ring of such germs has no zero divisors by multiplying first nonzero homogeneous terms.

## Verification

1.1 Fix $x=(x_1,x_2)\in D$ with $x\ne0$. If $z_1(x)\ne0$, then $z_1$ is a unit germ and a relation $z_1a+z_2b=0$ satisfies $(a,b)=(b/z_1)(-z_2,z_1)$. If $z_1(x)=0$, then $z_2(x)\ne0$, so $z_2$ is a unit germ and $(a,b)=(-a/z_2)(-z_2,z_1)$. Thus the stated section generates every relation stalk away from the origin. [F1, F6, given, algebra]

1.2 At the origin, let $a z_1+b z_2=0$ as a holomorphic germ. Restricting to $z_1=0$ gives $z_2b(0,z_2)=0$ as a one-variable germ, so [F5] makes $b(0,z_2)=0$. Write the convergent series $b(z_1,z_2)=\sum_{m,n\ge0}c_{mn}z_1^mz_2^n$. Uniqueness of coefficients makes $c_{0n}=0$ for every $n$, so $b=z_1c$ for the holomorphic germ $c=\sum_{m\ge1,n\ge0}c_{mn}z_1^{m-1}z_2^n$. [F5, given, algebra]

2.1 Substituting $b=z_1c$ into the relation gives $z_1(a+z_2c)=0$. The germ ring is a domain by [F5], so $a=-z_2c$ and $(a,b)=c(-z_2,z_1)$. Hence the same section generates the relation stalk at the origin. [step 1.2, F5, algebra]

3.1 Steps 1.1 and 2.1 show that the generated subsheaf and $\ker\mu$ have equal stalks at every point, where a stalk is the germ module from [F6]; [F4] identifies them. Therefore the relation sheaf is locally of finite type. Under the assumed Axiom of Choice [A1], [F2] makes $\mathcal O_D$ coherent; $\mathcal O_D^{\oplus2}$ is coherent by the split short exact sequence $0\to\mathcal O_D\to\mathcal O_D^{\oplus2}\to\mathcal O_D\to0$ and [F3]. Applying [F3] to $\mu$ shows that its kernel is coherent. [A1, F2, F3, F4, F6, step 1.1, step 2.1] ∎
