---
id: def-primitive-subspaces-hard-lefschetz-and-hodge-riemann-signs
kind: definition
title: "Primitive subspaces, hard Lefschetz and the Hodge-Riemann signs: the dictionary of hypotheses S, hL and HR"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 3
deps: [def-reduced-soergel-module-and-dominant-lefschetz-operator, def-invariant-intersection-form-on-a-bott-samelson-bimodule, def-definiteness-inertia-and-signature-data-over-the-reals, def-bilinear-symmetric-skew-and-alternating-forms, thm-sylvesters-law-of-inertia]
justified_by: []
aliases: []
landmark: false
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  scraped: []
  references:
    - title: "Elias-Williamson, The Hodge theory of Soergel bimodules (arXiv:1212.0791v2, final version; Ann. of Math. 180 (2014) 1089-1136)"
      url: "https://arxiv.org/pdf/1212.0791v2"
      locator: "Section 1.1, Theorems 1.3 and 1.4; Section 1.2.1 (the abbreviations S, hL, HR); Section 1.2.3 (the abbreviations HR(x,s) and HRbar(x,s)); Section 2, the first five paragraphs and the definition of the Hodge-Riemann bilinear relations with the standard sign"
    - title: "Riche, La theorie de Hodge des bimodules de Soergel (d'apres Soergel et Elias-Williamson), Seminaire Bourbaki no. 1139 (arXiv:1711.02464, Octobre 2017)"
      url: "https://arxiv.org/pdf/1711.02464"
      locator: "Section 2.2 (donnees de Hodge-Riemann, theoreme de Lefschetz difficile, relations de Hodge-Riemann) and Section 2.4 (conjecture de Soergel, theoreme de Lefschetz difficile, relations HR)"
verification:
  precheck: n/a
---

## Definition

**The linear-algebraic data.** Let $H=\bigoplus_{i\in\mathbb Z}H^i$ be a
finite-dimensional graded real vector space, concentrated in a single parity
(all nonzero $H^i$ have $i\equiv j\pmod 2$ for one $j\in\{0,1\}$), equipped with
a graded symmetric bilinear form $\langle-,-\rangle$: symmetric in the sense of
[[def-bilinear-symmetric-skew-and-alternating-forms]] and graded in the sense
$\langle a,b\rangle=0$ unless $\deg a+\deg b=0$, non-degenerate in the sense that
the induced map $H\to H^*$ is an isomorphism; definiteness, inertia and
signature are used in the sense of
[[def-definiteness-inertia-and-signature-data-over-the-reals]], and Sylvester's
law [[thm-sylvesters-law-of-inertia]] supplies the uniqueness of the inertia.
Let $L:H\to H$ be a **symmetric degree-two operator**, i.e. $L(H^i)\subseteq H^{i+2}$
and $\langle La,b\rangle=\langle a,Lb\rangle$ for all $a,b$.

**Hard Lefschetz.** The operator $L$ satisfies **hard Lefschetz** (hL) when
$$L^i:H^{-i}\longrightarrow H^i$$
is an isomorphism for every $i\ge0$. Define the **primitive subspaces**
$$P_L^{-i}:=\ker\bigl(L^{i+1}|_{H^{-i}}\bigr)\subseteq H^{-i}\qquad(i\ge0),$$
and the **Lefschetz forms**
$$(a,b)_L^{-i}:=\langle a,L^ib\rangle\qquad(a,b\in H^{-i},\ i\ge0).$$
Under hL the **primitive decomposition**
$$H=\bigoplus_{i\ge0}\bigoplus_{j=0}^{i}L^jP_L^{-i}$$
holds; it is proved in the primitive-decomposition lemma later on this page,
together with the non-degeneracy of the Lefschetz forms and the signature
formula for them.

**The Hodge-Riemann sign.** Assume $H\ne0$ and let $-d$ be its lowest nonzero
degree, so $H^{-d}\ne0$ and $H^i=0$ for $i<-d$. The **standard sign** at degree
$-i$ is $(-1)^{(d-i)/2}$; when $d-i$ is odd the primitive space $P_L^{-i}$ is
declared zero and the sign is not used. The pair $(H,L,\langle-,-\rangle)$
satisfies the **Hodge-Riemann bilinear relations with the standard sign**
(HR) when hL holds and the Lefschetz form $(a,b)_L^{-i}$ on $P_L^{-i}$ is
definite of sign $(-1)^{(d-i)/2}$ for every $i\ge0$, with the bottom space
$P_L^{-d}=H^{-d}$ positive definite. **HR with global sign** $\varepsilon\in\{\pm1\}$
means that the same statement holds with $(-1)^{(d-i)/2}$ replaced by
$\varepsilon(-1)^{(d-i)/2}$; the standard sign is thus the normalization that
makes the bottom form positive.

**The hypotheses S, hL, HR for Soergel bimodules.** For $x\in S_n$ let
$B_x^R$ be the indecomposable real Soergel bimodule with its reduced module
$\overline{B_x^R}$ ([[def-reduced-soergel-module-and-dominant-lefschetz-operator]]).
The statement
$$\mathrm{S}(x):\qquad \operatorname{ch}(B_x^R)=\underline H_x$$
means that the character of $B_x^R$ is the Kazhdan-Lusztig basis element
$\underline H_x$ in the Hecke algebra of the type-A page. On $\overline{B_x^R}$
use the centered grading, the operator
$$L:=\rho\cdot(-)$$
of left multiplication by a strictly dominant $\rho$ as in
[[def-reduced-soergel-module-and-dominant-lefschetz-operator]], and the
**positively normalized intrinsic invariant form**: the unique-up-to-scalar
non-degenerate invariant form of
[[def-invariant-intersection-form-on-a-bott-samelson-bimodule]], normalized so
that the bottom Lefschetz form $\langle\rho^{\ell(x)}c_{\mathrm{bot}},c_{\mathrm{bot}}\rangle$
on the one-dimensional space $\overline{B_x^R}^{-\ell(x)}$ equals $+1$. Here
$d=\ell(x)$; $\mathrm{hL}(x)$ denotes hard Lefschetz for this operator on
$\overline{B_x^R}$, and $\mathrm{HR}(x)$ denotes the Hodge-Riemann relations
with the standard sign for this normalized form. The **embedded-form statements**
refer to a reduced expression $\underline x$ of $x$ and an embedding
$B_x^R\subseteq\!\!\bigoplus\mathrm{BS}(\underline x)$ as a direct summand: then
$\mathrm{HRbar}(x)$ requires $\mathrm{HR}(x)$ for the restriction of the
intersection form through every such embedding, and its equivalence with
$\mathrm{HR}(x)$ (the comparison scalar is positive) is the content of the
invariant-form uniqueness lemma later on this page. The strong embedded-form
statement $\mathrm{HRbar}(x)$ is formulated for the restricted forms and makes
sense without assuming $\mathrm{S}(x)$.

**The ascent and deformation packages.** Fix $xs>x$ and put
$M=B_x^RB_s^R$, whose reduced module has lowest degree $-\ell(x)-1$; the ascent
packages are read with
$$d=\ell(x)+1,\qquad L=L_0\ \text{or}\ L_\zeta,$$
and inherit hL, HR, HRbar, and the sign $(-1)^{(\ell(x)+1-i)/2}$ from the
general definition above, where $L_\zeta$ is the deformed Lefschetz operator
defined later on this page. Thus $\mathrm{hL}(x,s)$, $\mathrm{HR}(x,s)$ refer to
a fixed reduced-word induced form on $M$, while $\mathrm{HRbar}(x,s)$ requires
the statement for every choice of reduced-word embeddings and induced forms;
the subscript $\zeta$ denotes the same statements for $L_\zeta$. The local
sign hypotheses $\mathrm{S}^\pm(y,x,s)$ concern the local intersection form
$(-,-)^{x,s}_y$ on $\operatorname{Hom}^0(B_y,M)$ defined later on this page:
$\mathrm{S}^+(y,x,s)$ means $(-1)^{(\ell(x)+1-\ell(y))/2}$-definiteness of that
form and $\mathrm{S}^-(y,x,s)$ the opposite definiteness, with the parity
convention of the primitive subspaces.

**Orthogonal sums.** If $H=\bigoplus_\alpha H_\alpha$ is an orthogonal direct
sum of $L$-stable graded subspaces and $H$ has lowest degree $-d$, then HR holds
for $(H,L,\langle-,-\rangle)$ if and only if each summand satisfies hL and its
primitive Lefschetz forms are definite with the **ambient** signs
$(-1)^{(d-i)/2}$; these need not be the summand's own standard signs when the
summands have different lowest degrees. The sign bookkeeping for orthogonal
blocks is used in the tensoring lemma of this page.

## Remark

- **Parity form of the sign.** If $H$ is concentrated in parity $j$ and $i\equiv j\pmod2$, then $(-1)^{(d-i)/2}=(-1)^{(d-j)/2}(-1)^{(i-j)/2}$; the constant factor $(-1)^{(d-j)/2}$ is absorbed into the global sign $\varepsilon$, so "HR with the standard sign" is equivalent to "hL plus $\varepsilon$-definiteness with $\varepsilon$ chosen to make the bottom form positive", and no sign is imposed twice.
- **Half-integer exponents.** When $d-i$ is odd, $(-1)^{(d-i)/2}$ is not an integer power of $-1$; the convention is that the corresponding primitive space is zero. This is consistent with the parity concentration: primitive spaces occur only in degrees $\equiv d\pmod2$, and degrees of the opposite parity are zero in $H$.
- **Non-degenerate versus definite.** Non-degeneracy of the form on $H$ does not imply any definiteness of the Lefschetz forms; HR is an additional hypothesis, and in the tensoring lemma the definiteness of a multiplicity-space pairing is an input, not a consequence of non-degeneracy.
- **The zero space.** If $H=0$ there is no bottom degree; all statements hold vacuously, and this case is recorded as inapplicable in every contract of this page that quantifies over a nontrivial module.
