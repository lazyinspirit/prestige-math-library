---
id: thm-qsmx-double-hopf-structure
kind: theorem
title: Hopf-* structure of the finite-group double
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: physics
dependency_level: 1
deps:
  - def-qsmx-finite-group-double
  - def-hh-hopf-algebra-and-antipode
dependency_roles:
  def-qsmx-finite-group-double: mathematical-premise
  def-hh-hopf-algebra-and-antipode: mathematical-premise
justified_by: []
physical_scope: Pure finite-dimensional algebra over $\mathbb C$ for the displayed finite-group formulas; no physical or categorical extension is asserted.
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: A. Yu. Kitaev, Fault-tolerant quantum computation by anyons
      url: https://arxiv.org/pdf/quant-ph/9707021
      locator: "§5.1, equations (17)–(19), PDF pp. 14–15, for the D(G) algebra and adjoint; §5.2, equations (25)–(29), PDF pp. 16–18, for coproduct, counit, antipode, and Hopf-axiom conventions."
    - title: Mark de Wild Propitius and F. Alexander Bais, Discrete Gauge Theories
      url: https://arxiv.org/pdf/hep-th/9511201
      locator: "§2.1, equations (2.1.4) and (2.1.12)–(2.1.13), PDF pp. 45–47, for multiplication, coproduct, and coassociativity conventions."
    - title: Alexander Cowtan and Shahn Majid, Quantum Double Aspects of Surface Code Models
      url: https://arxiv.org/pdf/2107.04411
      locator: "§3, PDF p. 7, for the crossed-product double and antipode convention; all Hopf-* identities below are verified directly."
verification:
  precheck: pass
---

## Statement

Let $G$ be a finite group and use the basis and structure maps on $D(G)$ displayed in the preceding definition. These maps make $D(G)$ a finite-dimensional Hopf algebra over $\mathbb C$. The conjugate-linear operation $*$ is an involution reversing multiplication, preserves the coproduct and unit, and satisfies $\varepsilon(a^*)=\overline{\varepsilon(a)}$ for every $a\in D(G)$.

## Statement references

[[def-qsmx-finite-group-double]]

[A. Yu. Kitaev, “Fault-tolerant quantum computation by anyons,” §§4–5.2](https://arxiv.org/pdf/quant-ph/9707021)

[Mark de Wild Propitius and F. Alexander Bais, *Discrete Gauge Theories*, §2.1](https://arxiv.org/pdf/hep-th/9511201)

## Facts & Assumptions

**Given:** A finite group $G$, the finite-dimensional vector space with basis $d_{h,g}$, and the structure maps specified above.

[F1] [[def-qsmx-finite-group-double]]: $D(G)$ has basis $d_{h,g}$; $d_{h,g}d_{k,l}=\mathbf 1_{h=gkg^{-1}}d_{h,gl}$; $\Delta(d_{h,g})=\sum_{ab=h}d_{a,g}\otimes d_{b,g}$; $\varepsilon(d_{h,g})=\mathbf 1_{h=e}$; $1_D=\sum_h d_{h,e}$; $S(d_{h,g})=d_{g^{-1}h^{-1}g,g^{-1}}$; and $d_{h,g}^*=d_{g^{-1}hg,g^{-1}}$.

[F2] [[def-hh-hopf-algebra-and-antipode]]: a Hopf algebra is a bialgebra with a linear map $S$ satisfying $m(S\otimes\mathrm{id})\Delta=u\varepsilon=m(\mathrm{id}\otimes S)\Delta$.

## Proof

1.1 For basis elements $d_{h,g},d_{k,l},d_{m,n}$, the product $(d_{h,g}d_{k,l})d_{m,n}$ is nonzero exactly when $h=gkg^{-1}$ and $h=(gl)m(gl)^{-1}$, while $d_{h,g}(d_{k,l}d_{m,n})$ is nonzero exactly when $k=lml^{-1}$ and $h=gkg^{-1}$. These conditions are equivalent since $(gl)m(gl)^{-1}=g(lml^{-1})g^{-1}$; when they hold both products equal $d_{h,gln}$. Bilinearity gives associativity on $D(G)$. [F1, algebra]

1.2 For each $d_{h,g}$, $1_Dd_{h,g}=d_{h,g}$ because only the summand $d_{h,e}$ survives, and $d_{h,g}1_D=d_{h,g}$ because exactly the summand indexed by $g^{-1}hg$ survives. Thus $1_D$ is a two-sided unit. [F1, algebra]

1.3 Both iterated coproducts of $d_{h,g}$ are $\sum_{abc=h}d_{a,g}\otimes d_{b,g}\otimes d_{c,g}$, and applying either counit to $\Delta(d_{h,g})$ leaves $d_{h,g}$, by selecting respectively the factor indexed by $e$. Hence $\Delta$ is coassociative and $\varepsilon$ is a counit. Also $\Delta(1_D)=\sum_{a,b}d_{a,e}\otimes d_{b,e}=1_D\otimes1_D$ and $\varepsilon(1_D)=1$. [F1, algebra]

1.4 For basis elements $d_{h,g},d_{k,l}$, the product $\Delta(d_{h,g})\Delta(d_{k,l})$ is zero unless $h=gkg^{-1}$. In that case its terms correspond bijectively to factorizations $rs=k$, through $(r,s)\mapsto(grg^{-1},gsg^{-1})$, and their sum is $\Delta(d_{h,gl})=\Delta(d_{h,g}d_{k,l})$. Thus $\Delta$ preserves multiplication. Moreover $\varepsilon(d_{h,g}d_{k,l})=\varepsilon(d_{h,g})\varepsilon(d_{k,l})$: both sides equal $1$ exactly when $h=k=e$. [F1, algebra]

1.5 In $m(S\otimes\mathrm{id})\Delta(d_{h,g})$, a summand indexed by $ab=h$ is nonzero exactly when $b=a^{-1}$. This is impossible unless $h=e$; if $h=e$, the resulting sum is $\sum_a d_{g^{-1}a^{-1}g,e}=1_D$. Therefore $m(S\otimes\mathrm{id})\Delta(d_{h,g})=\varepsilon(d_{h,g})1_D$. [F1, F2, algebra]

1.6 In $m(\mathrm{id}\otimes S)\Delta(d_{h,g})$, the summand indexed by $ab=h$ is nonzero exactly when $a=b^{-1}$. Again it vanishes for $h\ne e$, and for $h=e$ it is $\sum_a d_{a,e}=1_D$. Therefore $m(\mathrm{id}\otimes S)\Delta(d_{h,g})=\varepsilon(d_{h,g})1_D$, proving the Hopf algebra assertion by [F2]. [F1, F2, algebra]

1.7 The formula in [F1] gives $(d_{h,g}^*)^*=d_{h,g}$ and $1_D^*=1_D$. On basis products, $(d_{h,g}d_{k,l})^*=d_{k,l}^*d_{h,g}^*$: both sides vanish unless $h=gkg^{-1}$, and in that case both equal $d_{l^{-1}kl,l^{-1}g^{-1}}$. Conjugate-linear extension makes $*$ an involution reversing multiplication. [F1, algebra]

2.1 The two expressions $\Delta(d_{h,g}^*)$ and $\Delta(d_{h,g})^*$ agree after the bijection $(a,b)\mapsto(g^{-1}ag,g^{-1}bg)$ between factorizations of $h$ and of $g^{-1}hg$. Also $\varepsilon(d_{h,g}^*)=\overline{\varepsilon(d_{h,g})}$. Hence the stated involution is compatible with the coproduct and counit. [F1, algebra] ∎
