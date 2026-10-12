---
id: def-rational-mixed-hodge-structure
kind: definition
title: "Rational mixed Hodge structures"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-linear-basis, def-increasing-and-decreasing-filtration-of-an-object, def-associated-graded-object-of-a-filtered-object, def-internal-direct-sum, thm-modules-over-a-ring-form-an-abelian-category, def-complex-numbers-and-arithmetic, def-tensor-product-of-modules-by-generators-and-relations]
justified_by: []
aliases: []
landmark: false
dependency_level: 0
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Pierre Deligne, Theorie de Hodge II, Publ. Math. IHES 40 (1971) 5-57"
      url: "https://www.numdam.org/item/PMIHES_1971__40__5_0.pdf"
      locator: "SS2.3.1-2.3.4, printed pp. 29-30: Definition (2.3.1) of a mixed Hodge structure as three opposed finite filtrations, the morphism condition (2.3.4), Example (2.3.3) for pure structures, and (2.1.13)/(2.1.15)-(2.1.16) for the Tate object and polarizations"
    - title: "Claire Voisin, Hodge structures and the topology of algebraic varieties, author-hosted lecture notes (Harvard CMSA revision)"
      url: "https://cmsa.fas.harvard.edu/media/Voisin_HSTAVharvardrevision.pdf"
      locator: "Definition 1.22, printed p. 15: a lattice with an increasing W and a decreasing F inducing a weight-k Hodge structure on each Gr^W_k; Definition 2.6, printed p. 19: morphisms preserve W and F"
    - title: "F. El Zein, Hodge Structures and Mixed Hodge Structures, University of Pennsylvania course notes (June 24, 2010)"
      url: "https://www2.math.upenn.edu/~siegelch/Notes/ElZein.pdf"
      locator: "SS3.2, Definitions 3.3-3.5, printed pp. 4-5: the mixed Hodge datum, its morphisms and the associated graded convention"
    - title: "Andrzej Weber, Notes on Mixed Hodge Structures, Srni January 2005 (author-hosted, 15 pp.)"
      url: "https://www.mimuw.edu.pl/~aweber/ps/mhs.pdf"
      locator: "(2.1.5), printed p. 4: the Tate object Q(i) with F^{-i}=V_C and F^{-i+1}=0; (2.2.1), printed p. 6: the mixed Hodge structure datum"
---

## Definition

A **rational mixed Hodge structure** consists of a $\mathbb{Q}$-vector space $H$
with a finite basis ([[def-linear-basis]]) together with

- a finite increasing filtration $W$ of $H$, the **weight filtration**, and
- a finite decreasing filtration $F$ of
  $H_{\mathbb C}:=H\otimes_{\mathbb Q}\mathbb C$, the **Hodge filtration**
  ([[def-tensor-product-of-modules-by-generators-and-relations]]),

such that the following opposition condition holds on every weight-graded
piece. Here a filtration is **finite** when $W_aH=0$ for all sufficiently
negative $a$ and $W_aH=H$ for all sufficiently positive $a$, and dually
$F^aH_{\mathbb C}=H_{\mathbb C}$ for $a\ll0$ and $F^aH_{\mathbb C}=0$ for
$a\gg0$ ([[def-increasing-and-decreasing-filtration-of-an-object]]).

**Conjugation.** The $\mathbb{Q}$-linear involution $\sigma$ of
$H_{\mathbb C}$, defined on generators by
$\sigma(h\otimes z)=h\otimes\bar z$ and extended $\mathbb{Q}$-linearly,
satisfies $\sigma^2=\mathrm{id}$ and $\sigma(cz)=\bar c\,\sigma(z)$ for
$c\in\mathbb C$ ([[def-complex-numbers-and-arithmetic]]). It preserves the
subspace $W_aH_{\mathbb C}:=(W_aH)\otimes_{\mathbb Q}\mathbb C$ for every $a$,
so it descends to each graded piece
$\operatorname{Gr}^W_aH_{\mathbb C}:=W_aH_{\mathbb C}/W_{a-1}H_{\mathbb C}$
([[def-associated-graded-object-of-a-filtered-object]]). The **conjugate
Hodge filtration** is $\bar F^q:=\sigma(F^q)$, a finite decreasing filtration
of $H_{\mathbb C}$.

**Opposition.** Let $V$ be a finite-dimensional $\mathbb C$-vector space with
finite decreasing filtrations $F$ and $\bar F$, and let $n$ be an integer. The
two filtrations are **$n$-opposed** when the natural map
$$\bigoplus_{p+q=n}\bigl(F^pV\cap\bar F^qV\bigr)\longrightarrow V,\qquad (v_{p,q})_{p+q=n}\longmapsto\sum_{p+q=n}v_{p,q},$$
is an isomorphism. Applied to $V=\operatorname{Gr}^W_nH_{\mathbb C}$ this
condition is required for every $n$, with the *induced* filtrations: $F^p$
acts on $\operatorname{Gr}^W_nH_{\mathbb C}$ through the image of
$F^p\cap W_nH_{\mathbb C}$, and $\bar F^q$ through the image of
$\bar F^q\cap W_nH_{\mathbb C}$. Writing
$$H^{p,q}_n:=F^p\operatorname{Gr}^W_nH_{\mathbb C}\cap \bar F^q\operatorname{Gr}^W_nH_{\mathbb C},$$
the requirement is therefore the direct sum decomposition
$$\operatorname{Gr}^W_nH_{\mathbb C}=\bigoplus_{p+q=n}H^{p,q}_n \qquad\text{for every }n\in\mathbb Z .$$
Since $\sigma$ interchanges the induced filtrations $F^p$ and $\bar F^p$ and
preserves $W$, it maps $H^{p,q}_n$ onto $H^{q,p}_n$, so
$\overline{H^{p,q}_n}=H^{q,p}_n$. The three equivalent forms of the condition
-- the displayed decomposition, the vanishing
$\operatorname{Gr}^p_F\operatorname{Gr}^q_{\bar F}
\operatorname{Gr}^W_n=0$ for $p+q>n$, and the spanning
$F^p\operatorname{Gr}^W_n+\bar F^{n+1-p}\operatorname{Gr}^W_n
=\operatorname{Gr}^W_n$ for all $p$ -- are interchangeable; the equivalence is
the two-filtration lemma proved inside the splitting lemma below and is used
freely.

**Morphisms.** A morphism $f\colon H\to K$ of rational mixed Hodge structures
is a $\mathbb{Q}$-linear map with $f(W_aH)\subseteq W_aK$ for all $a$ and
$f_{\mathbb C}(F^pH_{\mathbb C})\subseteq F^pK_{\mathbb C}$ for all $p$, where
$f_{\mathbb C}=f\otimes\mathrm{id}$. Such an $f$ commutes with the
conjugations $\sigma$, hence also satisfies
$f_{\mathbb C}(\bar F^pH_{\mathbb C})\subseteq\bar F^pK_{\mathbb C}$.

**Substructures, pure structures, Tate.** A subspace $H'\subseteq H$ with the
induced filtrations $W_aH'=H'\cap W_aH$ and
$F^pH'_{\mathbb C}=H'_{\mathbb C}\cap F^pH_{\mathbb C}$ is a **substructure**
when the induced filtrations again satisfy the opposition condition on every
graded piece, and a quotient $H\to Q$ with the quotient filtrations is a
**quotient structure** under the same requirement; that the kernel, image and
cokernel of a morphism do carry such structures is not part of the definition
and is proved in the strictness lemma below. A structure is **pure of weight
$n$** when $W_{n-1}H=0$ and $W_nH=H$; the opposition condition then says that
$H_{\mathbb C}=\bigoplus_{p+q=n}H^{p,q}$ with
$H^{p,q}=F^p\cap\bar F^q$, and $\overline{H^{p,q}}=H^{q,p}$. The **Tate
structure** $\mathbb Q(r)$, for $r\in\mathbb Z$, is the pure structure of
weight $-2r$ with $\mathbb Q(r)_{\mathbb C}=\mathbb C$ concentrated in type
$(-r,-r)$, that is $H^{-r,-r}=\mathbb C$ and $H^{p,q}=0$ for
$(p,q)\ne(-r,-r)$.

**Tensor and dual conventions.** The tensor product $H\otimes K$ carries
$$W_a(H\otimes K)=\sum_{b+c=a}W_bH\otimes W_cK,\qquad F^p(H\otimes K)_{\mathbb C}=\sum_{b+c=p}F^bH_{\mathbb C}\otimes F^cK_{\mathbb C},$$
where the sums of subspaces are those of the complexifications, and the dual
$H^*=\operatorname{Hom}_{\mathbb Q}(H,\mathbb Q)$ carries
$$W_aH^*=\{u:u(W_{-a-1}H)=0\},\qquad F^pH^*_{\mathbb C}=\{u:u(F^{1-p}H_{\mathbb C})=0\}.$$

**Polarizability.** A pure rational Hodge structure $H$ of weight $n$ is
**polarizable** when it carries a rational bilinear form $Q$ of parity
$(-1)^n$ that pairs only complementary Hodge types, i.e.
$Q(H^{p,q},H^{p',q'})=0$ unless $p'=n-p$ and $q'=n-q$, and whose
Weil-operator Hermitian form $h(u,v):=Q(Cu,\bar v)$, where the Weil operator
$C$ acts as $i^{p-q}$ on $H^{p,q}$, is positive definite.

No mixed structure in this definition is assumed to split over $\mathbb R$ or
over $\mathbb Q$; the Deligne splitting constructed below is a decomposition
over $\mathbb C$ only.

## Source notes

Deligne II (2.3.1)-(2.3.4) is the primary source; [Voisin, Definition 1.22 and
Definition 2.6](https://cmsa.fas.harvard.edu/media/Voisin_HSTAVharvardrevision.pdf)
and [Weber, (2.1.5) and (2.2.1)](https://www.mimuw.edu.pl/~aweber/ps/mhs.pdf)
state the same datum in lattice and in vector-space form. The polarizability
clause records the Hodge-Riemann convention of Deligne II (2.1.15)-(2.1.16);
it is a convention about which structures may be called polarizable and asserts
no existence theorem. The forward mentions of the strictness lemma and of the
splitting lemma refer to the two consequences proved later on this page; they
are explanatory and create no dependency.
