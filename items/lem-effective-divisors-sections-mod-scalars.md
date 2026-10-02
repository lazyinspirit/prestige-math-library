---
id: lem-effective-divisors-sections-mod-scalars
kind: lemma
title: "Effective divisors linearly equivalent to D are sections modulo scalars"
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - def-algebraic-curve-over-field
  - def-axiom-of-choice
  - def-divisor-smooth-proper-curve
  - def-divisor-support-positive-negative-parts
  - def-effective-cartier-divisor
  - def-invertible-sheaf-of-cartier-divisor
  - def-linear-equivalence-cartier-divisors
  - def-order-codimension-one-rational-function
  - def-riemann-roch-space-of-divisor
  - lem-global-section-effective-divisor
  - thm-cartier-weil-divisors-curves-agree
  - thm-choice-implies-dependent-implies-countable-choice
  - thm-h0-structure-sheaf-proper-curve
  - thm-line-bundle-rational-section-cartier-divisor
  - thm-local-ring-smooth-curve-dvr
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "The Stacks Project, Divisors, §§31.14-31.30"
      url: "https://stacks.math.columbia.edu/download/divisors.pdf"
    - title: "The Stacks Project, Algebraic Curves (tag 0BRV)"
      url: "https://stacks.math.columbia.edu/download/curves.pdf"
    - title: "Ravi Vakil, The Rising Sea (version of October 21, 2025), Chs. 19 and 21"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGoct2125public.pdf"
verification:
  audited: 2026-10-02
---

## Statement

Assume the Axiom of Choice. It supplies Dependent Choice by
[[thm-choice-implies-dependent-implies-countable-choice]] for the curve
Cartier-to-Weil interface. Let $k$ be a field and let $C$ be a smooth proper
geometrically integral curve over $k$, and let $D$ be a divisor on $C$. For
every nonzero $f\in L(D)$ the
divisor $\operatorname{div}(f)+D$ is an effective divisor on $C$ linearly
equivalent to $D$, and the assignment
$$f\longmapsto\operatorname{div}(f)+D$$
descends to a bijection
$$\bigl(L(D)\setminus\{0\}\bigr)/k^{\times}\;\longrightarrow\;\{\,D'\text{ effective divisor on }C: D'\text{ linearly equivalent to }D\,\}.$$
In particular $L(D)=0$ if and only if no effective divisor is linearly
equivalent to $D$.

The curve-level [[thm-cartier-weil-divisors-curves-agree]] identifies the
closed-point Weil divisors with Cartier divisors and preserves principal
divisors, so it transports linear equivalence between the two descriptions.
The current Cartier conventions are [[def-linear-equivalence-cartier-divisors]],
[[def-effective-cartier-divisor]], and
[[def-invertible-sheaf-of-cartier-divisor]]. The current
[[def-riemann-roch-space-of-divisor]] defines $L(D)$ by the displayed order
condition and identifies it with $H^0(C,\mathcal O_C(D))$; the current
[[thm-line-bundle-rational-section-cartier-divisor]] gives the Cartier divisor
and associated invertible sheaf of a nonzero rational section, while
[[lem-global-section-effective-divisor]] constructs an effective Cartier
divisor from a regular section. These are the current section/divisor
interfaces behind the bijection below.

## Facts & Assumptions

**Given:** A smooth proper geometrically integral curve $C$ over a field $k$ with function field $k(C)$, a divisor $D$ on $C$, and the space $L(D)$ of [[def-riemann-roch-space-of-divisor]]; the Axiom of Choice is assumed.

[F1] A divisor on $C$ is a finite formal $\mathbb Z$-linear combination $D=\sum_x n_x[x]$ of closed points, it is effective when all $n_x\ge0$, and the divisor of a nonzero rational function $f$ is $\operatorname{div}(f)=\sum_x\operatorname{ord}_x(f)[x]$, the order being the discrete valuation of the local ring $\mathcal O_{C,x}$, a discrete valuation ring; the order is additive, vanishes exactly on units, and $\operatorname{ord}_x(c)=0$ for $c\in k^{\times}$. ([[def-divisor-smooth-proper-curve]], [[def-divisor-support-positive-negative-parts]], [[def-order-codimension-one-rational-function]], [[thm-local-ring-smooth-curve-dvr]], [[def-algebraic-curve-over-field]])

[F2] $L(D)=\{\,f\in k(C)^{\times}:\operatorname{div}(f)+D\ge0\,\}\cup\{0\}$ is a $k$-subspace of $k(C)$, and $f\in L(D)\setminus\{0\}$ means exactly that $\operatorname{div}(f)+D$ is an effective divisor. ([[def-riemann-roch-space-of-divisor]])

[F3] The current Cartier dictionary has these interfaces. The definition [[def-linear-equivalence-cartier-divisors]] says $D\sim D'$ exactly when $D-D'=\operatorname{div}_C(u)$ for a global meromorphic unit $u$; [[def-effective-cartier-divisor]] defines effectivity by local equations that are regular sections, meaning multiplication is injective on every stalk; and [[def-invertible-sheaf-of-cartier-divisor]] defines $\mathcal O_C(D)$ by the local sheaves $f_i^{-1}\mathcal O_{U_i}$. The theorem [[thm-line-bundle-rational-section-cartier-divisor]] associates to a nonzero rational section its Cartier divisor and an isomorphism from the sheaf of that divisor carrying the canonical section to the given section; [[lem-global-section-effective-divisor]] constructs an effective Cartier divisor from a regular global section. On $C$, [[thm-cartier-weil-divisors-curves-agree]] identifies these Cartier conventions with the closed-point Weil-divisor conventions and preserves principal divisors. ([[def-linear-equivalence-cartier-divisors]], [[def-effective-cartier-divisor]], [[def-invertible-sheaf-of-cartier-divisor]], [[thm-line-bundle-rational-section-cartier-divisor]], [[lem-global-section-effective-divisor]], [[thm-cartier-weil-divisors-curves-agree]])

[F4] In ZF, AC implies DC by [[thm-choice-implies-dependent-implies-countable-choice]]. Under the stated AC assumption, the current [[thm-cartier-weil-divisors-curves-agree]] body applies with its DC premise: on $C$, every divisor is Cartier, the Cartier and Weil divisor groups are identified, and the identification is compatible with principal divisors. Thus a Weil divisor difference $D'-D$ equals $\operatorname{div}(f)$ for a nonzero rational function $f$ exactly when the corresponding Cartier divisors are linearly equivalent in the sense of [F3]. ([[thm-cartier-weil-divisors-curves-agree]], [[thm-choice-implies-dependent-implies-countable-choice]], [[def-divisor-smooth-proper-curve]])

[F5] Under AC, a proper curve over $k$ that is geometrically connected and geometrically reduced has $H^0(C,\mathcal O_C)=k$, with the map $k\to H^0(C,\mathcal O_C)$ an isomorphism ([[thm-h0-structure-sheaf-proper-curve]]). A smooth proper geometrically integral curve is such a curve; hence a rational function $h\in k(C)^{\times}$ with $\operatorname{div}(h)=0$ has no poles and lies in $H^0(C,\mathcal O_C)=k$, and $h\ne0$ gives $h\in k^{\times}$. ([[thm-h0-structure-sheaf-proper-curve]], [[def-axiom-of-choice]], [[def-divisor-smooth-proper-curve]])

## Proof

**Proof technique:** direct; the divisor of a rational function is principal and the effectivity condition is exactly membership in $L(D)$, while scalar multiples have the same divisor; injectivity uses that a rational function with zero divisor is constant on a proper curve.

1.1 The map and its scalar invariance. Let $f\in L(D)\setminus\{0\}$. By [F2] the divisor $\operatorname{div}(f)+D$ is effective, and it is linearly equivalent to $D$ because $(\operatorname{div}(f)+D)-D=\operatorname{div}(f)$ is the principal divisor of the rational function $f$, which is exactly linear equivalence on the curve $C$ by [F4]. If $c\in k^{\times}$, then $\operatorname{ord}_x(cf)=\operatorname{ord}_x(c)+\operatorname{ord}_x(f)=\operatorname{ord}_x(f)$ for every closed point $x$ by [F1], so $\operatorname{div}(cf)=\operatorname{div}(f)$ and the assignment $f\mapsto\operatorname{div}(f)+D$ is constant on $k^{\times}$-orbits; it therefore descends to a well-defined map $\Phi$ on $(L(D)\setminus\{0\})/k^{\times}$ into the effective divisors linearly equivalent to $D$. [F1, F2, F3, F4]

1.2 Injectivity. Suppose $\Phi(f)=\Phi(g)$ for $f,g\in L(D)\setminus\{0\}$, that is, $\operatorname{div}(f)=\operatorname{div}(g)$. The quotient $h=f/g\in k(C)^{\times}$ satisfies $\operatorname{div}(h)=\operatorname{div}(f)-\operatorname{div}(g)=0$ by additivity of the order [F1], so $h$ has no zeros and no poles on the variety; in particular $h\in H^0(C,\mathcal O_C)$ and $h\ne0$, so [F5] gives $h\in k^{\times}$. Hence $g=h^{-1}f$ with $h^{-1}\in k^{\times}$, so $f$ and $g$ have the same class in $(L(D)\setminus\{0\})/k^{\times}$ and $\Phi$ is injective. [F1, F5]

2.1 Surjectivity and the conclusion. Let $D'$ be an effective divisor linearly equivalent to $D$. By [F4] linear equivalence means that $D'-D=\operatorname{div}(f)$ for some nonzero rational function $f\in k(C)^{\times}$; then $\operatorname{div}(f)+D=D'$ is effective, so $f\in L(D)\setminus\{0\}$ by [F2], and $\Phi(f)=D'$. Hence $\Phi$ is surjective, and with step 1.1 and step 1.2 it is a bijection from $(L(D)\setminus\{0\})/k^{\times}$ onto the effective divisors linearly equivalent to $D$. Finally, $L(D)=0$ holds exactly when $L(D)\setminus\{0\}$ is empty, which by the bijection is exactly the assertion that there is no effective divisor linearly equivalent to $D$. The current Cartier and section/divisor interfaces of [F3] support the terminology and equivalent section reading; AC is used through [F5] and supplies the DC premise of [F4]. [F2, F3, F4, F5, step 1.1, step 1.2] ∎
