---
id: thm-one-quasiconformal-is-conformal
kind: theorem
title: Every 1-quasiconformal homeomorphism is conformal
status: published
origin: pipeline
proof_strategy: direct
dependency_level: 6
deps: [def-complex-domain, def-geometric-quasiconformal-homeomorphism, def-acl-sobolev-quasiconformal-homeomorphism, def-beltrami-coefficient-and-maximal-dilatation, thm-geometric-and-analytic-quasiconformality-equivalent, def-wirtinger-derivatives, def-distributional-harmonicity-and-poisson-equation-in-rn, thm-weyl-lemma-for-the-laplacian, cor-locally-integrable-weakly-harmonic-functions-are-smooth, lem-weak-derivative-linearity-locality-and-commutation, thm-complex-differentiability-real-linearity-wirtinger-and-cauchy-riemann, cor-injective-holomorphic-derivative-nonzero, def-biholomorphic-map, thm-determinant-sign-detects-orientation-change, def-countable-choice, thm-extremal-length-conformal-invariance-and-monotonicity, def-axiom-of-choice, lem-smooth-orientation-sign-is-the-local-integral-homology-multiplier]
axiom_use: The Axiom of Choice is carried by the analytic ACL/Sobolev definition and the geometric/analytic equivalence; Countable Choice is included through Weyl's lemma for distributionally harmonic functions.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Mikhail Lyubich, Conformal Geometry and Dynamics of Quadratic Polynomials, vol. I (book draft, Stony Brook)"
      url: "https://www.math.stonybrook.edu/~mlyubich/book.pdf"
      locator: "Ch. 2 §13.1, printed p. 189: Weyl's lemma, concluding that a continuous locally Sobolev function with distributional $\\bar\\partial f=0$ is holomorphic."
    - title: "Christopher J. Bishop, Quasiconformal Mappings (Stony Brook Math 627 lecture notes)"
      url: "https://www.math.stonybrook.edu/~bishop/classes/math627.S18/QC.pdf"
      locator: "Ch. 2 §6, Lemma 6.3, printed p. 66: a geometrically 1-quasiconformal map is conformal; the item's analytic proof instead uses Weyl's lemma and the current Sobolev suppliers."
verification:
  audited: "2026-10-08"
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
---

## Statement

Assume the Axiom of Choice. Let $\Omega,\Omega'\subseteq\mathbb C$ be complex domains ([[def-complex-domain]]) and $f:\Omega\to\Omega'$ a homeomorphism. The following are equivalent.

(a) $f$ is $1$-quasiconformal, in either the geometric or the analytic sense ([[def-geometric-quasiconformal-homeomorphism]], [[def-acl-sobolev-quasiconformal-homeomorphism]], [[thm-geometric-and-analytic-quasiconformality-equivalent]]).

(b) $f\in W^{1,2}_{\mathrm{loc}}(\Omega)$ and its weak Wirtinger derivative satisfies $\partial_{\bar z}f=0$ almost everywhere; under this Sobolev hypothesis this is equivalent to $\mu_f=0$ almost everywhere together with $\partial_{\bar z}f=0$ almost everywhere on $\{\partial_zf=0\}$ ([[def-acl-sobolev-quasiconformal-homeomorphism]], [[def-beltrami-coefficient-and-maximal-dilatation]]).

(c) $f$ is holomorphic; equivalently, it is a biholomorphism of $\Omega$ onto $\Omega'$ ([[def-biholomorphic-map]]).

Thus the conformal maps in this library's orientation-preserving sense are exactly the $1$-quasiconformal homeomorphisms; in particular, they preserve angles.

## Facts & Assumptions

**Given:** Choice, complex domains $\Omega,\Omega'$, and a homeomorphism $f:\Omega\to\Omega'$.

[F1] The geometric and analytic definitions have the same least dilatation. In the analytic class, $K_f=1$ iff $\mu_f=0$ almost everywhere; the defining inequality then gives $f_{\bar z}=0$ almost everywhere. Conversely, if $f$ is analytic quasiconformal and $f_{\bar z}=0$ almost everywhere, then its Beltrami coefficient is zero (including the set where $f_z=0$), so $K_f=1$ ([[def-acl-sobolev-quasiconformal-homeomorphism]], [[def-beltrami-coefficient-and-maximal-dilatation]], [[thm-geometric-and-analytic-quasiconformality-equivalent]]).

[F2] Distributional derivatives commute, and $\Delta=4\partial_z\partial_{\bar z}$ on distributions ([[lem-weak-derivative-linearity-locality-and-commutation]], [[def-distributional-harmonicity-and-poisson-equation-in-rn]]).

[F3] A locally integrable distribution with zero Laplacian has a smooth harmonic representative; if the original function is continuous, it equals that representative everywhere ([[thm-weyl-lemma-for-the-laplacian]], [[cor-locally-integrable-weakly-harmonic-functions-are-smooth]]).

[F4] For a smooth function, the Cauchy–Riemann equation $\partial_{\bar z}f=0$ is equivalent to holomorphy. An injective holomorphic map on a complex domain has nowhere-vanishing derivative and a holomorphic inverse onto its open image ([[thm-complex-differentiability-real-linearity-wirtinger-and-cauchy-riemann]], [[cor-injective-holomorphic-derivative-nonzero]]).

[F5] At a differentiability point, a real-linear derivative given by multiplication by a nonzero complex number has determinant $|f'(z)|^2>0$ and hence preserves the local orientation ([[def-wirtinger-derivatives]], [[thm-determinant-sign-detects-orientation-change]], [[lem-smooth-orientation-sign-is-the-local-integral-homology-multiplier]]).

[F6] A one-to-one holomorphic map preserves extremal length of every path family by conformal invariance, and thus satisfies the geometric modulus inequalities with constant $1$ ([[thm-extremal-length-conformal-invariance-and-monotonicity]], [[def-geometric-quasiconformal-homeomorphism]]).

## Proof

**Proof technique:** reduce the unit-dilatation condition to the weak Cauchy–Riemann equation, apply Weyl's lemma, and use conformal invariance for the converse.

1.1 By [F1], an analytically $1$-quasiconformal map satisfies (b) and has $\mu_f=0$ almost everywhere. If the hypothesis in (a) is geometric, the equivalence theorem first supplies the analytic condition with the same constant. Conversely, (b) is exactly the analytic $1$-quasiconformal condition, so its least constant is $1$. Under the Sobolev hypothesis, $\mu_f=0$ forces $f_{\bar z}=0$ off $\{f_z=0\}$; the additional condition on that set gives $f_{\bar z}=0$ almost everywhere, proving the coefficient reformulation in (b). [F1, given]

1.2 Assume (b). The map $f$ is continuous, hence locally integrable, and its weak Wirtinger derivative vanishes as a distribution. By [F2], $\Delta f=4\partial_z(\partial_{\bar z}f)=0$ distributionally, componentwise. [F2, given]

2.1 By [F3], $f$ agrees almost everywhere with a smooth harmonic function. The representative is actually $f$ everywhere: the difference of two continuous functions that vanishes almost everywhere must vanish everywhere, since any point where it were nonzero would have a neighborhood of positive area where it remained nonzero. Thus $f$ is smooth and harmonic. Its classical $\partial_{\bar z}f$ is continuous and represents the zero distribution, so it vanishes pointwise; [F4] gives that $f$ is holomorphic. Since $f$ is injective, [F4] also shows its inverse is holomorphic onto its open image; surjectivity identifies that image with $\Omega'$. Therefore $f$ is a biholomorphism, proving (b)$\Rightarrow$(c). [F3, F4, step 1.2, given]

3.1 Assume (c). Then $f$ is injective and holomorphic, so [F4] gives $f'(z)\ne0$ everywhere and a holomorphic inverse. By [F5], $f$ preserves orientation. By [F6], it preserves the modulus of every quadrilateral family exactly, hence is geometrically $1$-quasiconformal; the equivalence theorem in [F1] makes it analytically $1$-quasiconformal as well. This proves (c)$\Rightarrow$(a); steps 1.1 and 1.2 prove (a)$\Rightarrow$(b), and step 2.1 proves (b)$\Rightarrow$(c). [F1, F4, F5, F6, step 1.1, step 1.2, step 2.1, given] ∎
