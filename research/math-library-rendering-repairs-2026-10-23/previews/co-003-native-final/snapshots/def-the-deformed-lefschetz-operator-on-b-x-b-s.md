---
id: def-the-deformed-lefschetz-operator-on-b-x-b-s
kind: definition
title: 'The deformed Lefschetz operator $L_\zeta$ on $B_x B_s$'
status: published
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 6
deps: [def-reduced-soergel-module-and-dominant-lefschetz-operator, def-invariant-intersection-form-on-a-bott-samelson-bimodule, def-primitive-subspaces-hard-lefschetz-and-hodge-riemann-signs]
justified_by: []
aliases: []
landmark: false
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  scraped: []
  references:
    - title: "Elias-Williamson, The Hodge theory of Soergel bimodules (arXiv:1212.0791v2, final version; Ann. of Math. 180 (2014) 1089-1136)"
      url: "https://arxiv.org/pdf/1212.0791v2"
      locator: "Section 1.2.4 (definition of L_zeta and of the zeta-deformations hL(x,s)_zeta, HR(x,s)_zeta, HRbar(x,s)_zeta) and Section 5 (the operator L_zeta on BB_s)"
    - title: "Riche, La theorie de Hodge des bimodules de Soergel (d'apres Soergel et Elias-Williamson), Seminaire Bourbaki no. 1139 (arXiv:1711.02464, Octobre 2017)"
      url: "https://arxiv.org/pdf/1711.02464"
      locator: "Section 0.3 (the deformed operator L^{y,s}_zeta) and Section 2.4"
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-11
---

## Definition

**The operator.** Fix $x\in S_n$, a simple reflection $s$, a strictly dominant
$\rho\in S_2$ ([[def-reduced-soergel-module-and-dominant-lefschetz-operator]])
and a real parameter $\zeta\ge0$. On the tensor product
$B_x^RB_s^R=B_x^R\otimes_SB_s^R$ define
$$L_\zeta:=(\rho\cdot(-))\otimes\mathrm{id}_{B_s^R}+\mathrm{id}_{B_x^R}\otimes(\zeta\,\rho\cdot(-)),$$
where the first summand is left multiplication by $\rho$ on the first factor and
the second summand is left multiplication by $\zeta\rho$ on the second factor.
Because the polynomial ring is commutative and the balanced tensor product
identifies $b r\otimes c=b\otimes rc$ for $r\in S$, the second summand equals
right multiplication by $\zeta\rho$ on the first factor; both summands are
degree-two, $S$-linear on the right, and commute, so $L_\zeta$ is a degree-two
right-$S$-linear endomorphism of $B_x^RB_s^R$. In particular $L_\zeta$ preserves
the submodule $MS_+$ for $M=B_x^RB_s^R$ and therefore descends to a degree-two
$\mathbb R$-linear endomorphism of the reduced module
$\overline{B_x^RB_s^R}$ ([[def-invariant-intersection-form-on-a-bott-samelson-bimodule]]
supplies the induced invariant form and the reduction conventions of
[[def-reduced-soergel-module-and-dominant-lefschetz-operator]] apply).

**Symmetry.** Each summand of $L_\zeta$ is multiplication by an element in the
commutative position algebra of the tensor product: the first is multiplication
by $\rho$ on the first factor, the second is right (equivalently middle)
multiplication by $\zeta\rho$, which is self-adjoint for the induced invariant
form by the invariance identities of the form. Hence $L_\zeta$ is symmetric for
the induced form, and the Lefschetz forms $(\ ,\ )^{-i}_{L_\zeta}$ and the
primitive subspaces $P^{-i}_{L_\zeta}$ are those of
[[def-primitive-subspaces-hard-lefschetz-and-hodge-riemann-signs]] for this
operator.

**The deformation statements.** Write $\mathrm{hL}(x,s)_\zeta$,
$\mathrm{HR}(x,s)_\zeta$ and $\mathrm{HRbar}(x,s)_\zeta$ for centered hard
Lefschetz, the Hodge-Riemann relations and the strong embedded-form statement on
$\overline{B_x^RB_s^R}$ for the operator $L_\zeta$, with the bottom degree
$-\ell(x)-1$ and the standard sign
$(-1)^{(\ell(x)+1-i)/2}$ of the dictionary in
[[def-primitive-subspaces-hard-lefschetz-and-hodge-riemann-signs]]; the
definitions of $\mathrm{HR}(x,s)_\zeta$ and $\mathrm{HRbar}(x,s)_\zeta$ refer to
a fixed reduced-word induced form respectively to all choices of such forms.
At $\zeta=0$ the operator $L_0=\rho\cdot(-)\otimes\mathrm{id}$ is left
multiplication by $\rho$ on the first factor, so the zero-parameter statements
$\mathrm{hL}(x,s)_0$, $\mathrm{HR}(x,s)_0$, $\mathrm{HRbar}(x,s)_0$ are exactly
the undeformed statements $\mathrm{hL}(x,s)$, $\mathrm{HR}(x,s)$,
$\mathrm{HRbar}(x,s)$ of the dictionary. For fixed data the family
$\zeta\mapsto L_\zeta$ is polynomial of degree one in $\zeta$.

**Summand stability.** Any direct summand $B\subseteq B_x^RB_s^R$ that is a
sub-bimodule is stable under $L_0$, because left multiplication by the central
element $\rho$ is a bimodule endomorphism; stability under $L_\zeta$ for
$\zeta>0$ is a separate condition, since a projector onto $B$ need not commute
with the middle-position operator. The undeformed summand implications used in
the induction of this page are supplied by the local restriction lemma later on
this page, after deforming the parameter back to $\zeta=0$; no statement of this
definition identifies a restricted positive-parameter operator with a
restriction of $L_\zeta$.

status: published
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 6
deps: [def-reduced-soergel-module-and-dominant-lefschetz-operator, def-invariant-intersection-form-on-a-bott-samelson-bimodule, def-primitive-subspaces-hard-lefschetz-and-hodge-riemann-signs]
justified_by: []
aliases: []
landmark: false
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  scraped: []
  references:
    - title: "Elias-Williamson, The Hodge theory of Soergel bimodules (arXiv:1212.0791v2, final version; Ann. of Math. 180 (2014) 1089-1136)"
      url: "https://arxiv.org/pdf/1212.0791v2"
      locator: "Section 1.2.4 (definition of L_zeta and of the zeta-deformations hL(x,s)_zeta, HR(x,s)_zeta, HRbar(x,s)_zeta) and Section 5 (the operator L_zeta on BB_s)"
    - title: "Riche, La theorie de Hodge des bimodules de Soergel (d'apres Soergel et Elias-Williamson), Seminaire Bourbaki no. 1139 (arXiv:1711.02464, Octobre 2017)"
      url: "https://arxiv.org/pdf/1711.02464"
      locator: "Section 0.3 (the deformed operator L^{y,s}_zeta) and Section 2.4"
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-11
---

## Definition

**The operator.** Fix $x\in S_n$, a simple reflection $s$, a strictly dominant
$\rho\in S_2$ ([[def-reduced-soergel-module-and-dominant-lefschetz-operator]])
and a real parameter $\zeta\ge0$. On the tensor product
$B_x^RB_s^R=B_x^R\otimes_SB_s^R$ define
$$L_\zeta:=(\rho\cdot(-))\otimes\mathrm{id}_{B_s^R}+\mathrm{id}_{B_x^R}\otimes(\zeta\,\rho\cdot(-)),$$
where the first summand is left multiplication by $\rho$ on the first factor and
the second summand is left multiplication by $\zeta\rho$ on the second factor.
Because the polynomial ring is commutative and the balanced tensor product
identifies $b r\otimes c=b\otimes rc$ for $r\in S$, the second summand equals
right multiplication by $\zeta\rho$ on the first factor; both summands are
degree-two, $S$-linear on the right, and commute, so $L_\zeta$ is a degree-two
right-$S$-linear endomorphism of $B_x^RB_s^R$. In particular $L_\zeta$ preserves
the submodule $MS_+$ for $M=B_x^RB_s^R$ and therefore descends to a degree-two
$\mathbb R$-linear endomorphism of the reduced module
$\overline{B_x^RB_s^R}$ ([[def-invariant-intersection-form-on-a-bott-samelson-bimodule]]
supplies the induced invariant form and the reduction conventions of
[[def-reduced-soergel-module-and-dominant-lefschetz-operator]] apply).

**Symmetry.** Each summand of $L_\zeta$ is multiplication by an element in the
commutative position algebra of the tensor product: the first is multiplication
by $\rho$ on the first factor, the second is right (equivalently middle)
multiplication by $\zeta\rho$, which is self-adjoint for the induced invariant
form by the invariance identities of the form. Hence $L_\zeta$ is symmetric for
the induced form, and the Lefschetz forms $(\ ,\ )^{-i}_{L_\zeta}$ and the
primitive subspaces $P^{-i}_{L_\zeta}$ are those of
[[def-primitive-subspaces-hard-lefschetz-and-hodge-riemann-signs]] for this
operator.

**The deformation statements.** Write $\mathrm{hL}(x,s)_\zeta$,
$\mathrm{HR}(x,s)_\zeta$ and $\mathrm{HRbar}(x,s)_\zeta$ for centered hard
Lefschetz, the Hodge-Riemann relations and the strong embedded-form statement on
$\overline{B_x^RB_s^R}$ for the operator $L_\zeta$, with the bottom degree
$-\ell(x)-1$ and the standard sign
$(-1)^{(\ell(x)+1-i)/2}$ of the dictionary in
[[def-primitive-subspaces-hard-lefschetz-and-hodge-riemann-signs]]; the
definitions of $\mathrm{HR}(x,s)_\zeta$ and $\mathrm{HRbar}(x,s)_\zeta$ refer to
a fixed reduced-word induced form respectively to all choices of such forms.
At $\zeta=0$ the operator $L_0=\rho\cdot(-)\otimes\mathrm{id}$ is left
multiplication by $\rho$ on the first factor, so the zero-parameter statements
$\mathrm{hL}(x,s)_0$, $\mathrm{HR}(x,s)_0$, $\mathrm{HRbar}(x,s)_0$ are exactly
the undeformed statements $\mathrm{hL}(x,s)$, $\mathrm{HR}(x,s)$,
$\mathrm{HRbar}(x,s)$ of the dictionary. For fixed data the family
$\zeta\mapsto L_\zeta$ is polynomial of degree one in $\zeta$.

**Summand stability.** Any direct summand $B\subseteq B_x^RB_s^R$ that is a
sub-bimodule is stable under $L_0$, because left multiplication by the central
element $\rho$ is a bimodule endomorphism; stability under $L_\zeta$ for
$\zeta>0$ is a separate condition, since a projector onto $B$ need not commute
with the middle-position operator. The undeformed summand implications used in
the induction of this page are supplied by the local restriction lemma later on
this page, after deforming the parameter back to $\zeta=0$; no statement of this
definition identifies a restricted positive-parameter operator with a
restriction of $L_\zeta$.
