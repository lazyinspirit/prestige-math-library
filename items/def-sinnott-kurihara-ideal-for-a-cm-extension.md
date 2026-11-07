---
id: def-sinnott-kurihara-ideal-for-a-cm-extension
kind: definition
title: "Sinnott–Kurihara ideal for an abelian CM extension"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 26
deps:
  - def-smoothed-stickelberger-element-for-abelian-cm-extension
  - def-minus-pontryagin-dual-class-group
  - def-group-ring
  - thm-group-ring-is-a-unital-algebra-with-basis-g
  - def-decomposition-group-of-a-prime
  - def-inertia-group-of-a-prime
  - def-arithmetic-frobenius-coset
  - lem-number-field-extension-ramified-at-finitely-many-places
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: n/a
sources:
  references:
    - title: "Samit Dasgupta and Mahesh Kakde, On the Brumer–Stark Conjecture"
      url: "https://math.iisc.ac.in/~maheshkakde/brumerstark.pdf"
      locator: "§1.1, printed pp. 6–7: inertia idempotents, Frobenius factors, and the Sinnott–Kurihara ideal."
    - title: "Samit Dasgupta and Mahesh Kakde, On the Brumer–Stark Conjecture and Refinements"
      url: "https://sites.math.duke.edu/~dasgupta/papers/ICM.pdf"
      locator: "§5.4: the Sinnott–Kurihara ideal is a priori a fractional ideal of $\\mathbb Z[G]$."
---

## Definition

Let $H/F$ be a finite abelian extension of number fields such that $F$ is totally real and $H$ is a totally imaginary quadratic extension of $F$ (a CM extension), and put $G=\operatorname{Gal}(H/F)$. Let $S_\infty$ be the infinite places of $F$ and $S_{\mathrm{ram}}$ the finite primes of $F$ ramified in $H$. Fix a finite set $T$ of finite primes disjoint from $S_\infty\cup S_{\mathrm{ram}}$, and suppose $\Theta_{S_\infty,T}^{H/F}\in\mathbb Q[G]$. For each finite prime $v$ of $F$ ramified in $H$, choose a prime $\mathfrak P\mid v$ and let $I_v\subseteq D_v\subseteq G$ be its inertia and decomposition groups. Define the inertia norm and its averaging idempotent by

$$N I_v:=\sum_{\tau\in I_v}\tau,\qquad e_v:=|I_v|^{-1}N I_v\in\mathbb Q[G].$$

Choose $\sigma_v\in D_v$ representing the arithmetic Frobenius coset in $D_v/I_v$. The product $\sigma_v e_v$ is independent of the chosen representative: if $\sigma'_v=\sigma_v\tau$ with $\tau\in I_v$, then $\tau N I_v=N I_v$. For elements $x_1,\ldots,x_r\in\mathbb Q[G]$, write $(x_1,\ldots,x_r)_{\mathbb Z[G]}:=\sum_i\mathbb Z[G]x_i$, the fractional $\mathbb Z[G]$-module they generate. Define the Sinnott–Kurihara fractional ideal by

$$\operatorname{SKu}_T(H/F):=(\Theta_{S_\infty,T}^{\#})_{\mathbb Z[G]}\prod_{v\in S_{\mathrm{ram}}}(N I_v,1-\sigma_v e_v)_{\mathbb Z[G]}\subseteq\mathbb Q[G],$$

where $S_{\mathrm{ram}}$ is the finite set of finite primes of $F$ ramified in $H$. Its minus part is $\operatorname{SKu}_T(H/F)^-:=e^-\bigl(\mathbb Z[1/2]\operatorname{SKu}_T(H/F)\bigr)\subseteq\mathbb Q[G]^-:=e^-\mathbb Q[G]$, using the idempotent $e^-$ from the minus-part convention. In particular, the parenthesized factors are fractional $\mathbb Z[G]$-modules, not ideals of the field algebra $\mathbb Q[G]$.

## Definition references

[[def-smoothed-stickelberger-element-for-abelian-cm-extension]]

[[def-minus-pontryagin-dual-class-group]]

[[def-group-ring]]

[[thm-group-ring-is-a-unital-algebra-with-basis-g]]

[[def-decomposition-group-of-a-prime]]

[[def-inertia-group-of-a-prime]]

[[def-arithmetic-frobenius-coset]]

[[lem-number-field-extension-ramified-at-finitely-many-places]]

[Dasgupta and Kakde — §1.1, printed pp. 6–7](https://math.iisc.ac.in/~maheshkakde/brumerstark.pdf)

[Dasgupta and Kakde — ICM 2022, §5](https://sites.math.duke.edu/~dasgupta/papers/ICM.pdf)

## Facts & Assumptions

**Given:** The extension $H/F$, the finite group $G$, its complex conjugation idempotent, and the ramified primes of $F$.

[F1] For each chosen prime above $v$, the decomposition and inertia groups are $D_v$ and $I_v$, and the arithmetic Frobenius is a coset in $D_v/I_v$. [[def-decomposition-group-of-a-prime]] [[def-inertia-group-of-a-prime]] [[def-arithmetic-frobenius-coset]]

[F2] The involution $\#$ sends each group element $g$ to $g^{-1}$ and is extended linearly to the group ring. [[def-smoothed-stickelberger-element-for-abelian-cm-extension]]

[F3] Only finitely many finite primes ramify in the number-field extension $H/F$. [[lem-number-field-extension-ramified-at-finitely-many-places]]

## Proof

**Given:** The extension, the finite set $T$, the rationality hypothesis, and the group-ring conventions in the Definition.

1.1 For each inertia group $I_v$, every element of $I_v$ occurs exactly $|I_v|$ times in the product $(N I_v)^2$, so $e_v^2=e_v$. Also $\tau e_v=e_v$ for each $\tau\in I_v$, which proves that $\sigma_v e_v$ is unchanged when its representative is multiplied by an inertia element. [F1, given, algebra]

2.1 Since $G$ is abelian, conjugating a chosen prime above $v$ leaves its inertia subgroup and Frobenius coset unchanged. Thus the factor module does not depend on that prime. The rationality hypothesis places every generator in $\mathbb Q[G]$; [F3] makes the product finite, and the displayed $\mathbb Z[G]$-spans define fractional modules there. Applying $e^-$ after localizing at $2$ is well-defined. [F1, F2, F3, given, algebra] ∎
