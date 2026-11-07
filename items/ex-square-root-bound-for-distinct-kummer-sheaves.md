---
id: ex-square-root-bound-for-distinct-kummer-sheaves
kind: example
title: "Square-root correlation bound for distinct Kummer sheaves"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 11
deps:
  - def-fkm-conductor-complexity-on-the-affine-line
  - def-frobenius-trace-on-a-constructible-stalk
  - def-kummer-l-adic-sheaf-for-a-multiplicative-character
  - def-middle-extension-l-adic-sheaf-on-a-curve
  - def-pointwise-purity-and-weights-of-an-l-adic-sheaf
generation:
  role: example
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
    - title: "E. Fouvry, E. Kowalski, and Ph. Michel, Trace Functions over Finite Fields and Their Applications"
      url: https://people.math.ethz.ch/~kowalski/elements.pdf
      locator: §2.3 (Dec3,2014 draft) and introductory Theorem1.2.1 and detailed Theorem4.1.1
verification:
  precheck: pending
---

## Example

Fix an embedding $\iota:\overline{\mathbb Q}_{13}\hookrightarrow\mathbb C$. Let $p=7$, $\ell=13$, and let $\eta_1,\eta_2$ be the two distinct characters of order $3$ of $\mu_3(\mathbb F_7)=\{1,2,4\}$, with values in $\mathbb Q_{13}$. Let $\mathcal K_{\eta_i}$ be the rank-one lisse sheaf on $\mathbb G_m$ defined by the $\eta_i^{-1}$-isotypic summand of the Kummer cover $y\mapsto y^3$, whose geometric Frobenius trace at $x\ne0$ is $\eta_i(x^2)$. Let $\overline{\mathcal K}_{\eta_i}$ be its underived direct-image middle extension to $\mathbb P^1$, restricted to $\mathbb A^1$. Write $t_i(x)=\iota(\operatorname{Tr}(\operatorname{Frob}^{\mathrm{geom}}_x\mid(\overline{\mathcal K}_{\eta_i})_{\bar x}))$ for $x\in\mathbb A^1(\mathbb F_7)$, with inverse arithmetic Frobenius as the geometric convention. Then
$$\sum_{x\in\mathbb F_7}t_1(x)\overline{t_2(x)}=0.$$
Each sheaf is geometrically irreducible and pointwise pure of weight $0$, the two are geometrically nonisomorphic, and each has conductor complexity $c_i=\operatorname{rank}+|\operatorname{Sing}|+\sum\operatorname{Sw}=1+2+0=3$, where the singularities on $\mathbb P^1$ are $0,\infty$ and the Swan conductors vanish because the local inertia is tame. Thus the distinct-sheaf Deligne estimate applies with right-hand side $3c_1^2c_2^2\sqrt 7=243\sqrt 7$.

## Example references

[[def-kummer-l-adic-sheaf-for-a-multiplicative-character]]

[Fouvry–Kowalski–Michel, *Trace Functions over Finite Fields and Their Applications*, §2.3 (Dec3,2014 draft) and introductory Theorem1.2.1 and detailed Theorem4.1.1](https://people.math.ethz.ch/~kowalski/elements.pdf)

## Facts & Assumptions

**Given:** The field $\mathbb F_7$, the primes $p=7$ and $\ell=13$, and the two distinct order-three characters $\eta_1,\eta_2$ specified in the Example.

[A1] The two characters are nontrivial and have values among the cube roots of unity, so complex conjugation acts on their values by inversion.

[F1] [[def-kummer-l-adic-sheaf-for-a-multiplicative-character]]: the trace at $x\ne0$ is $\eta_i(x^2)$; the Kummer sheaf is rank one and pure of weight zero, with nontrivial tame inertia at $0$ and $\infty$ and conductor complexity $3$.

[F2] [[def-pointwise-purity-and-weights-of-an-l-adic-sheaf]]: pointwise purity of weight zero means each geometric Frobenius eigenvalue at a closed point has complex absolute value $1$.

[F3] [[def-middle-extension-l-adic-sheaf-on-a-curve]]: the middle extension on the curve is the underived direct image from the lisse open.

[F4] [[def-fkm-conductor-complexity-on-the-affine-line]]: the displayed dense-lisse middle-extension conductor formula is rank plus the number of singular points on $\mathbb P^1$ plus their Swan conductors.

## Verification

1.1 For $x\in\mathbb F_7^\times$, [F1] gives $t_i(x)=\eta_i(x^2)$. The map $x\mapsto x^2$ maps $\mathbb F_7^\times$ onto $\mu_3(\mathbb F_7)$, and $\eta_1\eta_2^{-1}$ is nontrivial. Thus $\psi(x)=t_1(x)\overline{t_2(x)}$ is a nontrivial multiplicative character of $\mathbb F_7^\times$. At $x=0$, [F1] gives a zero middle-extension stalk because the inertia character is nontrivial, so the local product is zero. [given, A1, F1, F3, algebra]

2.1 Choose $a\in\mathbb F_7^\times$ with $\psi(a)\ne1$. Multiplication by $a$ permutes $\mathbb F_7^\times$, so $S=\sum_{x\in\mathbb F_7^\times}\psi(x)=\sum_{x\in\mathbb F_7^\times}\psi(ax)=\psi(a)S$. Since $1-\psi(a)\ne0$, $S=0$. Including the zero stalk from step 1.1 gives the displayed correlation sum $0$. [given, step 1.1, algebra, choose]

3.1 Each middle extension has rank one, is singular exactly at $0$ and $\infty$, and has zero Swan conductor at each point because its local inertia is tame. Thus [F4] gives $c_1=c_2=1+2+0=3$. Their inertia characters are distinct, so the rank-one sheaves are geometrically nonisomorphic; [F1] gives geometric irreducibility and weight zero. These verify the stated distinct-sheaf estimate hypotheses. The exact sum from step 2.1 directly gives $|0|\le3\cdot3^2\cdot3^2\sqrt7=243\sqrt7$, proving the asserted instance of the bound without invoking its general theorem. [given, A1, F1, F2, F4, step 2.1, algebra] ∎
