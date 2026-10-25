---
id: cor-degree-zero-line-bundle-section-trivial
kind: corollary
title: "A degree-zero line bundle with a nonzero section is trivial"
status: published
origin: pipeline
deps:
  - def-algebraic-curve-over-field
  - def-axiom-of-choice
  - def-dependent-choice
  - def-divisor-smooth-proper-curve
  - def-global-sections-functor-sheaves
  - def-invertible-sheaf-of-cartier-divisor
  - def-invertible-sheaf
  - def-integral-scheme
  - def-principal-weil-divisor-and-class-group
  - def-sheaf-cohomology-derived-global-sections
  - lem-degree-effective-divisor-nonnegative
  - thm-cartier-weil-divisors-curves-agree
  - thm-choice-implies-dependent-implies-countable-choice
  - thm-h0-structure-sheaf-proper-curve
  - thm-line-bundle-rational-section-cartier-divisor
  - cor-degree-descends-picard-curve
justified_by: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "William Fulton, Algebraic Curves (Internet Archive copy), Chs. 8 and 6"
      url: "https://web.archive.org/web/20240102232744id_/https://dept.math.lsa.umich.edu/~wfulton/CurveBook.pdf"
    - title: "Michael Artin, MIT 18.721 Introduction to Algebraic Geometry (July 20, 2020 notes), Ch. 8"
      url: "https://math.mit.edu/classes/18.721/ag-jul20.pdf"
    - title: "The Stacks Project, Algebraic Curves (tag 0BRV)"
      url: "https://stacks.math.columbia.edu/download/curves.pdf"
pipeline_run: frontier-37-owner-30
verification:
  audited: 2026-10-02
  precheck: pass
---

## Statement

Assume the Axiom of Choice as inherited from the degree homomorphism on
$\operatorname{Pic}$ and the structure-sheaf cohomology supplier. It supplies the Dependent Choice premise of the
Cartier-to-Weil route through
[[thm-choice-implies-dependent-implies-countable-choice]]. Let $k$ be a field, let $C$ be a smooth proper
geometrically integral curve over $k$ ([[def-algebraic-curve-over-field]]) and
let $\mathcal L$ be an invertible sheaf on $C$ ([[def-invertible-sheaf]]) with
$\deg_k\mathcal L=0$. If $H^0(C,\mathcal L)\ne0$ then
$\mathcal L\cong\mathcal O_C$; equivalently, an invertible sheaf of degree
zero that is not trivial has no nonzero global section, that is
$H^0(C,\mathcal L)=0$ ([[def-sheaf-cohomology-derived-global-sections]]).

The degree, Cartier-sheaf and rational-section interfaces used here are
[[cor-degree-descends-picard-curve]],
[[def-invertible-sheaf-of-cartier-divisor]],
[[thm-line-bundle-rational-section-cartier-divisor]] and
[[thm-cartier-weil-divisors-curves-agree]]. The proof verifies that a nonzero
global section has nonzero generic germ before applying the rational-section
interface; the facts and their exact uses are recorded below.

## Facts & Assumptions

**Given:** the Axiom of Choice inherited from the degree, Cartier and structure-sheaf cohomology suppliers, with Dependent Choice supplied through [[thm-choice-implies-dependent-implies-countable-choice]]; a field $k$, a smooth proper geometrically integral curve $C$ over $k$, an invertible sheaf $\mathcal L$ on $C$ with $\deg_k\mathcal L=0$, and the hypothesis $H^0(C,\mathcal L)\ne0$.

[F1] Cohomology and global sections: $H^0(C,\mathcal L)=\Gamma(C,\mathcal L)$ is the group of global sections of the abelian sheaf $\mathcal L$, so a nonzero cohomology group gives a nonzero section $s\in\Gamma(C,\mathcal L)$; $\mathcal L$ is invertible, and $C$ is integral ([[def-sheaf-cohomology-derived-global-sections]], [[def-global-sections-functor-sheaves]], [[def-invertible-sheaf]], [[def-integral-scheme]]). Such an $s$ has nonzero generic germ. Indeed, if $s_\eta=0$, the definition of a stalk gives a nonempty open $U$ on which $s$ vanishes. On any nonempty affine open $V=\operatorname{Spec}A$ trivializing $\mathcal L$, write $s|_V=f e$ in a frame $e$. Since $C$ is integral, $A$ is a domain; since $C$ is irreducible, $U\cap V$ is a nonempty open and contains a nonempty distinguished open $D(a)$ for some $a\ne0$. The coefficient $f$ becomes zero in $A_a$. The localization map $A\to A_a$ is injective because $A$ is a domain and $a\ne0$, so $f=0$. Thus $s$ vanishes on every such $V$, hence globally, a contradiction.

[F2] The current [[thm-line-bundle-rational-section-cartier-divisor]] says that a nonzero rational section $s$ of an invertible sheaf $\mathcal L$ determines a Cartier divisor $\operatorname{div}_C(s)$ with $\mathcal O_C(\operatorname{div}_C(s))\cong\mathcal L$. By [F1] a nonzero global section has a nonzero generic germ, so this interface applies to it; its regularity makes the associated Cartier divisor effective. The current [[def-invertible-sheaf-of-cartier-divisor]] constructs $\mathcal O_C(D)$ and gives $\mathcal O_C(0)\cong\mathcal O_C$. The degree homomorphism [[cor-degree-descends-picard-curve]] satisfies $\deg_k\mathcal O_C(D)=\deg_kD$ for every divisor $D$ on the normal proper curve.

[F3] The current Cartier-to-Weil theorem identifies Cartier divisors on the smooth proper geometrically integral curve $C$ with the divisors of [[def-divisor-smooth-proper-curve]], compatibly with principal divisors and local orders. Its local rings at closed points are DVRs and its generic local ring is a field, so $C$ is normal; the normal proper curve hypothesis of [F2] is therefore met. In particular, the effective Cartier divisor $\operatorname{div}_C(s)$ of [F2] gives an effective divisor on $C$ ([[thm-cartier-weil-divisors-curves-agree]], [[def-divisor-smooth-proper-curve]], [[def-principal-weil-divisor-and-class-group]]).

[F4] Effective divisors: for an effective divisor $D=\sum_xn_x[x]$ on a proper geometrically integral curve, $\deg_k(D)=\sum_xn_x[\kappa(x):k]$ is a nonnegative integer, and $\deg_k(D)=0$ if and only if $D=0$ ([[lem-degree-effective-divisor-nonnegative]]).

[F5] The structure sheaf: the canonical map $k\to H^0(C,\mathcal O_C)$ is an isomorphism, so $H^0(C,\mathcal O_C)\cong k\ne0$ and the structure sheaf has a nonzero global section; and $\deg_k\mathcal O_C=\deg_k(0)=0$ under the dictionary of [F2] ([[thm-h0-structure-sheaf-proper-curve]], [[def-sheaf-cohomology-derived-global-sections]]).

[F6] The Axiom of Choice is inherited through the degree, Cartier-to-Weil and structure-sheaf cohomology suppliers of [F2], [F3] and [F5]. The Cartier-to-Weil supplier requires Dependent Choice, supplied from AC by [[thm-choice-implies-dependent-implies-countable-choice]]. The proof selects one nonzero section of the given nonzero space and makes no further selection ([[def-axiom-of-choice]], [[def-dependent-choice]]).

## Proof

**Proof technique:** direct; convert a nonzero global section of $\mathcal L$ into an effective divisor of degree $\deg_k\mathcal L=0$, conclude that the divisor is zero, and read off the triviality of $\mathcal L$; the converse uses the identity section of the structure sheaf.

1.1 The nonzero section and its effective divisor. Since $H^0(C,\mathcal L)\ne0$, [F1] provides a nonzero global section $s\in\Gamma(C,\mathcal L)$ and proves its generic germ is nonzero. Thus $s$ is a nonzero rational section; by [F2] its associated Cartier divisor $\operatorname{div}_C(s)$ is effective and satisfies $\mathcal O_C(\operatorname{div}_C(s))\cong\mathcal L$. Effectiveness means that in every local frame the coefficient of $s$ is regular, so all orders of vanishing are nonnegative. [F1, F2]

2.1 The degree of the divisor is zero. By the degree homomorphism in [F2], $\deg_k\mathcal O_C(D)=\deg_kD$ for every divisor $D$; applying this to $D=\operatorname{div}_C(s)$ and using the isomorphism $\mathcal O_C(\operatorname{div}_C(s))\cong\mathcal L$ of step 1.1 gives $\deg_k\operatorname{div}_C(s)=\deg_k\mathcal O_C(\operatorname{div}_C(s))=\deg_k\mathcal L=0$, the last equality being the hypothesis. [F2, step 1.1]

3.1 The divisor vanishes. By [F3] the effective Cartier divisor $\operatorname{div}_C(s)$ corresponds to an effective divisor on $C$ of the same degree $0$ computed in step 2.1; by [F4] an effective divisor of degree zero is the zero divisor. Hence $\operatorname{div}_C(s)=0$. [F3, F4, step 2.1]

4.1 The invertible sheaf is trivial. Combining the isomorphism of step 1.1 with the vanishing $\operatorname{div}_C(s)=0$ of step 3.1 and the identity $\mathcal O_C(0)\cong\mathcal O_C$ of [F2], $$\mathcal L\cong\mathcal O_C(\operatorname{div}_C(s))=\mathcal O_C(0)\cong\mathcal O_C.$$ [F2, step 1.1, step 3.1]

5.1 The converse and the contrapositive. Conversely, if $\mathcal L\cong\mathcal O_C$ then $\deg_k\mathcal L=\deg_k\mathcal O_C=0$ by [F5], and $H^0(C,\mathcal L)\cong H^0(C,\mathcal O_C)\cong k\ne0$ by [F5]; so for invertible sheaves of degree zero the existence of a nonzero global section is equivalent to triviality. Contrapositively, if $\mathcal L$ has degree zero and is not isomorphic to $\mathcal O_C$, then $H^0(C,\mathcal L)=0$: a nonzero group would produce a nonzero section and force $\mathcal L\cong\mathcal O_C$ by steps 1.1 through 4.1. Choice is used through the current degree, Cartier-to-Weil and structure-sheaf cohomology interfaces, including the AC-to-DC route recorded in [F6]. The only selection is the single nonzero section $s$ of the given nonzero group $H^0(C,\mathcal L)$. [F1, F2, F5, F6, step 1.1, step 4.1] ∎
