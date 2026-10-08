---
id: thm-holder-regularity-beltrami-solutions
kind: theorem
title: "Hölder regularity and nonvanishing Jacobian of the normalized Beltrami solution"
status: published
origin: pipeline
deps:
  - def-measurable-beltrami-coefficient
  - def-weak-solution-beltrami-equation
  - thm-measurable-riemann-mapping-sphere
  - lem-nondegenerate-local-holder-beltrami-coordinates
  - lem-weak-beltrami-factorization-in-holder-coordinates
  - cor-injective-holomorphic-derivative-nonzero
  - cor-jacobian-determinant-of-a-holomorphic-map
  - def-jacobian-determinant-of-a-c-one-map
  - def-holder-spaces-c-k-alpha-and-their-scaled-norms
  - def-ck-and-multi-index-notation-in-several-variables
  - def-riemann-sphere-holomorphic-charts
  - rem-riemann-sphere-one-point-compactification
  - def-biholomorphic-map
  - thm-chain-rule-for-total-derivatives
  - thm-determinant-multiplicative
  - def-wirtinger-derivatives
  - lem-complex-conjugation-and-modulus-laws
  - def-countable-choice
  - def-axiom-of-choice
  - thm-choice-implies-dependent-implies-countable-choice
  - def-complex-domain
  - lem-euclidean-balls-have-positive-finite-lebesgue-measure
  - thm-algebra-of-derivatives
  - cor-mean-value-theorem
dependency_level: 10
axiom_use: >-
  Assume AC. It is consumed through the global measurable Riemann mapping
  theorem to obtain the normalized homeomorphic weak solution. AC implies
  Countable Choice through
  [[thm-choice-implies-dependent-implies-countable-choice]], which is required
  by the measurable coefficient, local coordinate, and weak factorization
  interfaces. No other choice principle is used.
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Kari Astala, Albert Clop, Daniel Faraco, Jarmo Jääskeläinen and Aleksis Koski, Nonlinear Beltrami operators, Schauder estimates and bounds for the Jacobian, Ann. Inst. H. Poincaré Anal. Non Linéaire 34 (2017), 1543–1559"
      url: "https://ems.press/content/serial-article-files/16835"
      locator: "Introduction, printed pp. 1543–1545 (linear-case Hölder regularity and Theorems 1.1–1.2); Lemma 3.1, printed pp. 1554–1556, and the full proof of Theorem 1.1, printed pp. 1555–1557. The linear-case exact-α regularity is cited there to other sources; this item proves the exact higher-order claim by local factorization."
    - title: "Mikhail Lyubich, Conformal Geometry and Dynamics of Quadratic Polynomials, vol. I (book draft, Stony Brook)"
      url: "https://www.math.stonybrook.edu/~mlyubich/book.pdf"
      locator: "Ch. 2 §14.4, printed pp. 196–197: the local solution for a real-analytic coefficient by complexification, characteristics and a nonsingular first integral; contextual only, not a proof of the Hölder assertion."
verification:
  audited: "2026-10-08"
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
---

## Statement

Assume the Axiom of Choice. It implies Countable Choice ([[def-axiom-of-choice]], [[thm-choice-implies-dependent-implies-countable-choice]], [[def-countable-choice]]). Let $m\ge0$ be an integer, let $0<\alpha<1$, and let $0\le\kappa<1$. Let $\mu$ be a Beltrami coefficient on the Riemann sphere with $\|\mu\|_\infty\le\kappa$ ([[def-measurable-beltrami-coefficient]]), and let $f$ be the solution normalized by $f(0)=0$, $f(1)=1$, and $f(\infty)=\infty$ ([[thm-measurable-riemann-mapping-sphere]], [[def-riemann-sphere-holomorphic-charts]], [[rem-riemann-sphere-one-point-compactification]]). Let $U\subseteq\widehat{\mathbb C}$ be open and suppose $\mu$ is of class $C^{m,\alpha}$ chartwise on $U$ ([[def-holder-spaces-c-k-alpha-and-their-scaled-norms]], [[def-riemann-sphere-holomorphic-charts]]). Then:

(i) **Regularity.** The coordinate expression of $f$ is locally of class $C^{m+1,\alpha}$: for every source and target holomorphic chart pair, the expression $\phi_t\circ f\circ\phi_s^{-1}$ is $C^{m+1,\alpha}_{\mathrm{loc}}$ wherever defined over $U$.

(ii) **Positive Jacobian and local diffeomorphism.** At every $x\in U$, the real Jacobian determinant of the coordinate expression in any such chart pair is positive. Thus its differential is invertible, and $f$ is a local $C^{m+1,\alpha}$ diffeomorphism at every point of $U$.

(iii) **Global case.** If $\mu$ is of class $C^{m,\alpha}$ chartwise on all of $\widehat{\mathbb C}$, then $f$ is a $C^{m+1,\alpha}$ diffeomorphism of the sphere chartwise, and so is $f^{-1}$.

No Sobolev bootstrap of unspecified order is asserted. For arbitrary weak solutions without the global homeomorphism hypothesis, the injectivity and positive-Jacobian conclusions do not follow from [[lem-weak-beltrami-factorization-in-holder-coordinates]].

## Facts & Assumptions

**Given:** AC; $m\ge0$ an integer; $0<\alpha<1$; $0\le\kappa<1$; a sphere Beltrami coefficient $\mu$ with $\|\mu\|_\infty\le\kappa$; its normalized global solution $f$; and an open set $U$ on which $\mu$ has chartwise class $C^{m,\alpha}$.

[F1] AC implies Countable Choice, which is required by the measurable coefficient, local coordinate, and weak factorization interfaces ([[def-axiom-of-choice]], [[thm-choice-implies-dependent-implies-countable-choice]], [[def-countable-choice]]).

[F2] The sphere coefficient and weak equation have chartwise pullback laws; in any source and target holomorphic charts, the coordinate expression of a weak solution satisfies the plane Beltrami equation with the source-chart coefficient ([[def-measurable-beltrami-coefficient]], [[def-weak-solution-beltrami-equation]], [[def-riemann-sphere-holomorphic-charts]], [[rem-riemann-sphere-one-point-compactification]], [[def-complex-domain]]).

[F3] Under AC the global theorem supplies the normalized sphere homeomorphism and its weak Beltrami equation ([[thm-measurable-riemann-mapping-sphere]]). The present proof consumes its existence, normalization, homeomorphism and weak-equation conclusions, not its separate coefficient-ratio conclusion.

[F4] A continuous chart representative with essential norm at most $\kappa$ satisfies $|\nu(z)|\le\kappa$ at every point: any strict violation would persist on an open disk of positive area. At each point, the local coordinate lemma then supplies a nondegenerate $C^{m+1,\alpha}$ Beltrami coordinate $\Phi$ whose inverse has the same regularity ([[def-measurable-beltrami-coefficient]], [[def-holder-spaces-c-k-alpha-and-their-scaled-norms]], [[lem-euclidean-balls-have-positive-finite-lebesgue-measure]], [[lem-nondegenerate-local-holder-beltrami-coordinates]]).

[F5] Every $W^{1,2}_{\mathrm{loc}}$ weak solution factors almost everywhere as $H\circ\Phi$ for a holomorphic $H$ in these coordinates and has a local $C^{m+1,\alpha}$ representative; this factorization does not itself assert injectivity or a nonzero Jacobian ([[lem-weak-beltrami-factorization-in-holder-coordinates]]).

[F6] If two continuous functions on a planar open set agree almost everywhere, then they agree everywhere: a nonzero difference at a point persists on a small open disk, which has positive area ([[lem-euclidean-balls-have-positive-finite-lebesgue-measure]]).

[F7] An injective holomorphic function on a complex domain has nowhere-zero derivative and a holomorphic inverse onto its open image ([[cor-injective-holomorphic-derivative-nonzero]], [[def-biholomorphic-map]]).

[F8] For a $C^1$ plane map $G$, expanding the Wirtinger formulas gives $\det DG=|G_z|^2-|G_{\bar z}|^2$; for holomorphic $H$, this is $|H'|^2$. The real chain rule and determinant multiplicativity give $\det D(H\circ\Phi)=(\det DH\circ\Phi)\det D\Phi$ ([[def-wirtinger-derivatives]], [[lem-complex-conjugation-and-modulus-laws]], [[cor-jacobian-determinant-of-a-holomorphic-map]], [[def-jacobian-determinant-of-a-c-one-map]], [[thm-chain-rule-for-total-derivatives]], [[thm-determinant-multiplicative]]).

[F9] Composing a local $C^{m+1,\alpha}$ diffeomorphism with a holomorphic local diffeomorphism preserves the $C^{m+1,\alpha}$ class: repeated chain and product rules give finite sums, and the mean-value theorem makes the smooth factors locally Lipschitz so the top-order Hölder bound is preserved ([[def-holder-spaces-c-k-alpha-and-their-scaled-norms]], [[def-ck-and-multi-index-notation-in-several-variables]], [[thm-chain-rule-for-total-derivatives]], [[thm-algebra-of-derivatives]], [[cor-mean-value-theorem]]).

## Proof

**Proof technique:** factor the normalized homeomorphic solution through a nondegenerate local coordinate and use injectivity of the holomorphic factor.

1.1 Fix $x_0\in U$. By [F3], $f$ is a homeomorphism and a weak solution. Choose a source holomorphic chart $\phi_s$ around $x_0$ and a target holomorphic chart $\phi_t$ around $f(x_0)$. Continuity of $f$ lets us shrink the source neighborhood so its image lies in the target chart. In these coordinates write $F:=\phi_t\circ f\circ\phi_s^{-1}$ and let $\nu$ be the source-chart expression of $\mu$. By [F2], $F\in W^{1,2}_{\mathrm{loc}}$ solves $F_{\bar z}=\nu F_z$; it is continuous and injective, and $\nu$ is $C^{m,\alpha}$ near $z_0:=\phi_s(x_0)$. [F2, F3, given]

2.1 By [F4], choose a nondegenerate $C^{m+1,\alpha}$ coordinate $\Phi$ on a neighborhood of $z_0$. Shrink to a connected disk $D$ inside that neighborhood and the source chart domain. Applying [F5] to $F|_D$ gives a holomorphic $H$ on the complex domain $\Phi(D)$ such that $F=H\circ\Phi$ almost everywhere on $D$, and $H\circ\Phi$ is locally $C^{m+1,\alpha}$. Both $F$ and $H\circ\Phi$ are continuous. By [F6], their almost-everywhere equality is pointwise equality on $D$. This proves the local regularity in (i) near $x_0$. [F1, F4, F5, F6, step 1.1]

3.1 The pointwise identity from step 2.1, injectivity of $F$, and injectivity of $\Phi$ imply that $H$ is injective on $\Phi(D)$. By [F7], $H'$ is nowhere zero and $H^{-1}$ is holomorphic on $H(\Phi(D))$. The real chain rule and [F8] give $$J_F(z)=\det D(H\circ\Phi)(z)=|H'(\Phi(z))|^2J_\Phi(z)>0$$ for every $z\in D$, since $J_\Phi>0$ by [F4]. Hence $DF(z)$ is invertible. The local inverse is $\Phi^{-1}\circ H^{-1}$; [F4] and [F9] show it is also $C^{m+1,\alpha}$ locally. Therefore $F$ is a local $C^{m+1,\alpha}$ diffeomorphism, proving (ii) near $x_0$. [F4, F7, F8, F9, step 2.1]

4.1 The point $x_0$ and its source and target charts were arbitrary, so steps 2.1 and 3.1 prove (i) and (ii) throughout $U$, with positive Jacobian in every holomorphic chart pair. If $U=\widehat{\mathbb C}$, the same local statement holds at every point; the local inverses agree with the global inverse because $f$ is a homeomorphism. Thus $f$ and $f^{-1}$ are chartwise $C^{m+1,\alpha}$, proving (iii). [F2, F3, step 2.1, step 3.1, given] ∎

## Source notes

Astala, Clop, Faraco, Jääskeläinen and Koski, *Nonlinear Beltrami operators, Schauder estimates and bounds for the Jacobian*, was read through the full relevant passages: the Introduction's linear-case regularity statement and Theorem 1.1, Lemma 3.1, and the complete proof of Theorem 1.1. The paper's Theorem 1.1 proves positivity of the Jacobian for its broader nonlinear class under its stated Hölder/Lipschitz condition; its exact-$\alpha$ linear-case comment points to further references. This item does not substitute that source for the higher-order argument: it derives the exact $C^{m+1,\alpha}$ exponent from the local coordinate and factorization suppliers. Lyubich §14.4 was read in full and treats the real-analytic local case by characteristics; it is context only for the Hölder theorem.

## Supplier reconciliation

The stable global theorem supplies the normalized homeomorphic weak solution consumed in step 1.1, and the earlier local coordinate and factorization lemmas supply the regularity and positive-Jacobian conclusions; this proof does not consume the global theorem's separate coefficient-ratio conclusion. The local arguments above retain their own stated hypotheses; this reconciliation is separate from root mathematical decisions and full-run certification.
