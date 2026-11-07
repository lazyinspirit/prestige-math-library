---
id: def-smoothed-stickelberger-element-at-nonpositive-integer
kind: definition
title: Smoothed Stickelberger Element at a Nonpositive Integer
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 19
deps:
  - def-artin-l-series-for-a-linear-character
  - thm-global-artin-reciprocity-and-norm-index
  - def-global-artin-map-as-product-of-local-reciprocity-maps
  - thm-local-artin-unramified-frobenius-normalization
  - def-finite-order-ray-class-hecke-character-and-l-function
  - lem-imprimitive-ray-class-hecke-finite-euler-correction
  - cor-gamma-function-has-no-zeros
  - thm-gamma-meromorphic-continuation
  - thm-primitive-hecke-l-analytic-continuation-and-functional-equation
  - lem-character-orthogonality-for-finite-abelian-groups
  - def-group-ring
  - thm-group-ring-is-a-unital-algebra-with-basis-g
  - def-axiom-of-choice
  - def-countable-choice
  - def-dependent-choice
justified_by: []
proof_strategy: direct
axiom_use: AC, Countable Choice, and Dependent Choice are inherited from the current global Artin and Hecke-character interfaces used to define the special values.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Johnston and Nickel, An Unconditional Proof of the Abelian Equivariant Iwasawa Main Conjecture and Applications
      url: https://arxiv.org/pdf/2010.03186
      locator: §2.2 and §8.1, printed pp. 5–6 and 22–23.
verification: {}
---

## Definition

Assume AC, Countable Choice, and Dependent Choice. Let $H/F$ be a finite abelian extension of number fields, let $G=\operatorname{Gal}(H/F)$, let $r\le0$ be an integer, and let $S,T$ be finite disjoint sets of places of $F$ with $S$ containing the infinite and ramified places. For each character $\chi$ of $G$, form the meromorphically continued Artin value with the Euler factors in $S$ removed and those in $T$ inserted:
$$L_{S,T}(r,\chi)=L_S(r,\chi)\prod_{v\in T}\bigl(1-\chi(\operatorname{Frob}_v)(Nv)^{-r}\bigr),$$
where at a ramified place the local Artin factor is defined using inertia invariants. The $S,T$-smoothed Stickelberger element $\Theta_{S,T}(r)\in\mathbb C[G]$ is the unique element satisfying
$$\chi(\Theta_{S,T}(r))=L_{S,T}(r,\chi^{-1})\quad\text{for every character }\chi\text{ of }G.$$

## Definition references

[Johnston and Nickel, §2.2 and Proposition 8.1](https://arxiv.org/pdf/2010.03186)

[Dasgupta and Kakde, §1.1](https://math.iisc.ac.in/~maheshkakde/brumerstark.pdf)

[[thm-group-ring-is-a-unital-algebra-with-basis-g]]


## Facts & Assumptions

**Given:** Exactly the AC, CC, DC, finite abelian extension, integer and finite place sets in the Definition. No ray-class-field hypothesis on $H/F$ is added.

[F1] For every finite abelian extension, the actual continuous global Artin character is trivial on principal ideles and is the product of the canonical local maps. At an unramified finite place the local map sends an element to arithmetic Frobenius to its valuation power. [[thm-global-artin-reciprocity-and-norm-index]] [[def-global-artin-map-as-product-of-local-reciprocity-maps]] [[thm-local-artin-unramified-frobenius-normalization]]

[F2] A finite-order ray-class character has the stated ideal Euler series. It is induced from a primitive divisor modulus, with the displayed finite entire Euler deletion product. [[def-finite-order-ray-class-hecke-character-and-l-function]] [[lem-imprimitive-ray-class-hecke-finite-euler-correction]]

[F3] Primitive finite-order Hecke completions continue meromorphically, are entire for nontrivial characters, and for the trivial primitive character have only possible simple poles at zero and one. Gamma has no zeros and has precisely simple poles at nonpositive integers, with reciprocal zeros there. [[thm-primitive-hecke-l-analytic-continuation-and-functional-equation]] [[cor-gamma-function-has-no-zeros]] [[thm-gamma-meromorphic-continuation]]

[F4] The complex characters of a finite abelian group form an orthogonal family of size $|G|$. The group elements are a basis of its complex group ring. [[lem-character-orthogonality-for-finite-abelian-groups]] [[thm-group-ring-is-a-unital-algebra-with-basis-g]] [[def-group-ring]]

## Proof

**Proof technique:** construct the ray character from the actual general Artin map, use primitive Euler deletion, and apply finite Fourier inversion.

**Given:** The data above, with $S_f$ the finite places in $S$.

1.1 Fix a character $\chi$ of $G$. Its composition with the global Artin map in [F1] is a continuous finite-order idele character trivial on $F^\times$. Outside $S$, the extension is unramified and the local character is trivial on units by the Frobenius valuation formula. At each place in $S_f$, continuity gives a principal-unit subgroup $1+\mathfrak p^{e_\mathfrak p}$ in its kernel; increase each exponent to at least one. At real places the positive subgroup is in its kernel, since its image is finite and the positive reals are connected. Choose the modulus with these finite exponents and all real places. On ideals prime to its finite part, the character of an ideal is the product of the character values on its uniformizer ideles. A generator congruent to one and positive at the modulus has character one: its diagonal idele is killed by [F1], and its remaining local units are killed by the just-specified subgroups. Thus this is a ray-class character $\lambda_\chi$ as in [F2]. Its finite modulus has support exactly $S_f$, and at every prime outside $S_f$ its value is $\chi(\operatorname{Frob}_\mathfrak p)$. Therefore $L_S(s,\chi)=L(s,\lambda_\chi)$ in the absolutely convergent half-plane. This constructs the general abelian-to-ray-character bridge, rather than applying a theorem restricted to extensions already given as full ray class fields. [F1, F2, given, choose, construct, algebra]

2.1 By [F2], $\lambda_\chi$ is induced from a primitive $\lambda^*$. Its primitive finite modulus divides the chosen one, so all of its finite primes lie in $S_f$, and $L_S(s,\chi)$ is $L(s,\lambda^*)$ times the finite entire Euler deletion product in [F2]. The primitive ordinary L-function is holomorphic at every integer $r\le0$. Indeed its completion in [F3] is entire except for the stated trivial-character poles; dividing by its gamma factors introduces no poles, because reciprocal Gamma is entire. At $r=0$ in the trivial case, at least one real or complex gamma factor has a pole, since the number field has at least one archimedean place; its reciprocal cancels the possible simple completed pole. At negative integers the completion has no possible pole. Thus $L_S(r,\chi)$ is a finite complex number. The factors at $T$ are finite as well and are unramified because $S\cap T=\varnothing$ and $S$ contains every ramified place. They may be zero; no nonvanishing is needed. This proves that all the prescribed $L_{S,T}(r,\chi)$ exist at the full original scope. [F1, F2, F3, step 1.1, algebra]

3.1 Set $v_\chi=L_{S,T}(r,\chi^{-1})$. The finite sum $\Theta=\frac1{|G|}\sum_{\chi\in\widehat G}v_\chi\sum_{g\in G}\overline{\chi(g)}\,g$ belongs to $\mathbb C[G]$. For any character $\psi$, [F4] gives $\psi(\Theta)=v_\psi$ by orthogonality. If two elements have these values, apply the same orthogonality to their difference to recover every coefficient as zero. Hence the element exists and is unique exactly as specified. The trivial group, $r=0$, empty $T$, zero special values and zero smoothing factors are included. All choices in the ray modulus disappear because the initial Euler products agree and their meromorphic continuations are unique. No extension hypothesis or additional choice axiom has been added to the Definition. [F2, F3, F4, step 2.1, construct, algebra] ∎
