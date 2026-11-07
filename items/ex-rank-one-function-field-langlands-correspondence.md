---
id: ex-rank-one-function-field-langlands-correspondence
kind: example
title: "An explicit constant-field character in the rank-one function-field correspondence"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 8
deps:
  - def-rational-function-field-places-and-degree-map
  - def-cuspidal-automorphic-representation-over-function-field
  - def-absolute-galois-group-of-a-global-field
  - def-arithmetic-frobenius-coset
  - cor-fields-of-characteristic-zero-and-finite-fields-are-perfect
  - def-axiom-of-choice
  - def-countable-choice
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
axiom_use: >-
  AC and Countable Choice are carried only because the automorphic-representation
  interface uses the adelic topology. The explicit degree computation and local
  Frobenius-factor equality are choice-free.
sources:
  references:
    - title: "Laurent Lafforgue, Chtoucas de Drinfeld et correspondance de Langlands"
      url: "https://www.laurentlafforgue.org/math/fulltext.pdf"
      locator: "Theorem VI.9, printed pp. 157–159: the rank-one case is global function-field class field theory."
    - title: "Gérard Laumon, La correspondance de Langlands sur les corps de fonctions"
      url: "https://www.numdam.org/item/SB_1999-2000__42__207_0.pdf"
      locator: "§1.3, rank-one case and the statement of the global correspondence."
---

## Example

Assume the Axiom of Choice and the Axiom of Countable Choice. Let $q=p^a$, let $m\ge1$, let $\ell\ne p$, fix a primitive $m$-th root of unity $\zeta\in\overline{\mathbb Q}_\ell$, and fix a field isomorphism $\jmath:\overline{\mathbb Q}_\ell\cong\mathbb C$. Put $F=\mathbb F_q(t)$ and fix a separable closure $F_s/F$, with absolute Galois group $G_F=\operatorname{Gal}(F_s/F)$. For a place $v$ of $F$, write $d_v$ for its degree, $F_v$ for its completion, $\mathcal O_v$ for its valuation ring, and $\operatorname{ord}_v$ for its normalized valuation. The idele group $\mathbb A_F^\times=\prod_v'F_v^\times$ is restricted with respect to $\mathcal O_v^\times$ at all places. Define
$$\chi_\zeta((a_v)_v)=\zeta^{-\sum_v d_v\operatorname{ord}_v(a_v)}.$$
The sum has finite support. The character descends to the idele class group $F^\times\backslash\mathbb A_F^\times$; put $\pi_\zeta=\jmath\circ\chi_\zeta$, which is an element of $\mathcal A_1(F)$. The constant-field quotient is the restriction map from $G_F$ to $\operatorname{Gal}(\overline{\mathbb F}_q/\mathbb F_q)\cong\widehat{\mathbb Z}$; arithmetic Frobenius is the automorphism $x\mapsto x^q$ and geometric Frobenius is its inverse. Let $\rho_\zeta:G_F\to\overline{\mathbb Q}_\ell^\times$ be the character obtained by sending arithmetic Frobenius in this quotient to $\zeta$. A character is unramified at $v$ when it is trivial on the inertia subgroup, the kernel of the local decomposition group's action on the residue separable closure. For an unramified rank-one Galois character $\rho$, define $L_v(\rho,T)=(1-\rho(\operatorname{Frob}^{\mathrm{geom}}_v)T)^{-1}$. Then $\pi_\zeta$ and $\rho_\zeta$ are finite-order unramified characters and, at every place $v$, their local standard factors agree after applying $\jmath$ to the Galois factor:
$$\jmath\!\left(L_v(\rho_\zeta,T)\right)=L_v(\pi_\zeta,T)=(1-\jmath(\zeta^{-d_v})T)^{-1},$$
where geometric Frobenius is the inverse of arithmetic Frobenius.

## Example references

[Laurent Lafforgue, Theorem VI.9](https://www.laurentlafforgue.org/math/fulltext.pdf)

[Gérard Laumon, §1.3](https://www.numdam.org/item/SB_1999-2000__42__207_0.pdf)

## Facts & Assumptions

**Given:** AC and Countable Choice; $q=p^a$, $m\ge1$, $\ell\ne p$, $\zeta$ of order $m$, the fixed isomorphism $\jmath:\overline{\mathbb Q}_\ell\cong\mathbb C$, and $F=\mathbb F_q(t)$.

[A1] [[def-axiom-of-choice]]: every family of nonempty sets has a choice function.

[A2] [[def-countable-choice]]: every countable family of nonempty sets has a choice function.

[F1] [[def-rational-function-field-places-and-degree-map]]: finite places correspond to monic irreducible polynomials with degree $\deg P$; the infinity place has degree $1$ and $\operatorname{ord}_\infty(P/Q)=\deg Q-\deg P$; the idele degree is the finite sum $\sum_v d_v\operatorname{ord}_v(a_v)$.

[F2] [[def-cuspidal-automorphic-representation-over-function-field]]: for $r=1$, a continuous finite-order idele-class character is cuspidal; at an unramified place its Satake parameter is its value on a uniformizer and its local factor is $(1-z_1(\pi_v)T)^{-1}$.

[F3] [[def-absolute-galois-group-of-a-global-field]]: $G_F$ is the inverse-limit absolute Galois group of $F$ with its profinite topology.

[F4] [[def-arithmetic-frobenius-coset]]: arithmetic Frobenius acts on the residue field by $x\mapsto x^{q^{d_v}}$ at a place of degree $d_v$; geometric Frobenius is its inverse.

[F5] [[cor-fields-of-characteristic-zero-and-finite-fields-are-perfect]]: finite fields are perfect, so each irreducible polynomial over $\mathbb F_q$ is separable.

## Verification

1.1 Let $f=P/Q\in F^\times$ with coprime nonzero polynomials $P,Q$. Factoring $P$ and $Q$ into monic irreducibles gives $\sum_{v\ne\infty}d_v\operatorname{ord}_v(f)=\deg P-\deg Q$. By [F1], the infinity contribution is $\deg Q-\deg P$, so $\sum_vd_v\operatorname{ord}_v(f)=0$. Therefore the displayed idele character is trivial on the diagonal copy of $F^\times$ and descends to the quotient. [given, F1, algebra]

1.2 Valuations are additive under multiplication, so $\chi_\zeta$ is a group character. It has finite image in $\langle\zeta\rangle$; its restriction to each local unit group is trivial, so its kernel contains the open subgroup $\prod_v\mathcal O_v^\times$ of the restricted product. Hence $\chi_\zeta$ is continuous and unramified at every place. By [F2], its complex-valued transport $\pi_\zeta=\jmath\circ\chi_\zeta$ is an element of $\mathcal A_1(F)$. [A1, A2, F1, F2, step 1.1, algebra]

2.1 The constant extension $\mathbb F_{q^m}(t)/\mathbb F_q(t)$ is cyclic of degree $m$. Sending its arithmetic Frobenius generator to $\zeta$ defines a character of its finite Galois group and hence, through the constant-field quotient of [F3], a continuous finite-order character $\rho_\zeta$ of $G_F$. [F3, given, construct]

2.2 For a finite place $v_P$, [F5] implies that $P$ remains separable over $\mathbb F_{q^m}$, so if $P=\prod_i Q_i$ there, its distinct irreducible factors all occur with exponent $1$; hence every extension of $v_P$ has ramification index $1$. At infinity, the uniformizer $1/t$ remains a uniformizer. Thus the constant extension is unramified at every place, and $\rho_\zeta$ is trivial on every inertia subgroup. At a place of degree $d_v$, arithmetic Frobenius acts on constants as the $d_v$-th power of the generator; by [F4], $\rho_\zeta(\operatorname{Frob}^{\mathrm{geom}}_v)=\zeta^{-d_v}$. An idele equal to a local uniformizer at $v$ and $1$ elsewhere has degree $d_v$, so $\chi_\zeta(\varpi_v)=\zeta^{-d_v}$. The automorphic local factor is $(1-\jmath(\zeta^{-d_v})T)^{-1}$ by [F2], while the Galois local factor is $(1-\zeta^{-d_v}T)^{-1}$; applying $\jmath$ gives the claimed equality. [F1, F2, F4, F5, given, step 1.2, step 2.1, algebra] ∎
