---
id: "def-cup-product-sheaf-cohomology"
kind: "definition"
title: "Cup product in sheaf cohomology"
status: draft
origin: pipeline
deps: [def-topological-space, def-axiom-of-choice, def-sheaf-cohomology-derived-global-sections, lem-sheaf-cohomology-classes-as-derived-morphisms, lem-koszul-coherence-for-derived-sheaf-tensor, lem-derived-tensor-product-of-abelian-sheaves, def-tensor-product-of-abelian-sheaves, def-derived-category-of-an-abelian-category, lem-constant-sheaf-is-the-sheaf-of-locally-constant-functions, lem-morphisms-from-the-constant-sheaf-are-global-sections]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "The Stacks Project, Cohomology of Sheaves"
      url: https://stacks.math.columbia.edu/download/cohomology.pdf
      locator: "Section 28.7 (relative cup product), Section 31 (0FKU) with Lemma 31.1 (0FP2) and its footnote 3, and Section 26 (derived tensor product)"
---

## Definition

Assume the Axiom of Choice ([[def-axiom-of-choice]]) and the standing
smallness or supplied cofinal-denominator hypothesis of
[[def-derived-category-of-an-abelian-category]]. Let $X$ be a topological space
([[def-topological-space]]), let $H^q(X,-)$ be sheaf cohomology computed from the
supplied functorial injective resolution datum
([[def-sheaf-cohomology-derived-global-sections]]), let $\mathbb Z_X$ be the
constant sheaf with value $\mathbb Z$
([[lem-constant-sheaf-is-the-sheaf-of-locally-constant-functions]]), let
$\otimes^{\mathbf L}_{\mathbb Z}$ be the derived tensor product of abelian
sheaves on the bounded-above derived category, with comparison
$c_{\mathcal F,\mathcal G}:\mathcal F\otimes^{\mathbf L}_{\mathbb Z}\mathcal G
\to\mathcal F\otimes_{\mathbb Z}\mathcal G$, of clauses 2 and 4 of
[[lem-derived-tensor-product-of-abelian-sheaves]], where
$\otimes_{\mathbb Z}$ is the tensor product of abelian sheaves of
[[def-tensor-product-of-abelian-sheaves]], and let
$$\alpha\longmapsto\tilde\alpha:\qquad H^p(X,\mathcal F) \xrightarrow{\ \sim\ }\operatorname{Hom}_{D(\mathrm{Ab}(X))}\bigl(\mathbb Z_X[-p],\mathcal F\bigr)$$
be the canonical isomorphism of
[[lem-sheaf-cohomology-classes-as-derived-morphisms]], so that $\tilde\alpha$ is
the morphism of $D(\mathrm{Ab}(X))$ corresponding to a class
$\alpha\in H^p(X,\mathcal F)$; the representing morphism $\tilde\alpha$ is
uniquely determined by $\alpha$, and it is the morphism that the bijection
$\varphi\mapsto\varphi_X(1_X)$ of
[[lem-morphisms-from-the-constant-sheaf-are-global-sections]] describes in
degree zero. Write $\kappa(p,q):\mathbb Z_X[-p-q]\to
\mathbb Z_X[-p]\otimes^{\mathbf L}_{\mathbb Z}\mathbb Z_X[-q]$ for the canonical
isomorphism of clause 2 of [[lem-koszul-coherence-for-derived-sheaf-tensor]].

Let $\mathcal F,\mathcal G,\mathcal H$ be abelian sheaves on $X$ and let
$\mu:\mathcal F\otimes_{\mathbb Z}\mathcal G\to\mathcal H$ be a morphism of
abelian sheaves, called a **tensor pairing**. For $p,q\ge0$ the **cup product
with respect to $\mu$** is the pairing
$$\cup_\mu:\quad H^p(X,\mathcal F)\times H^q(X,\mathcal G)\longrightarrow H^{p+q}(X,\mathcal H)$$
that assigns to $\alpha\in H^p(X,\mathcal F)$ and
$\beta\in H^q(X,\mathcal G)$ the class $\alpha\cup_\mu\beta$ corresponding,
under the isomorphism above taken in degree $p+q$ and for the sheaf
$\mathcal H$, to the composite
$$\mathbb Z_X[-p-q] \xrightarrow{\ \kappa(p,q)\ } \mathbb Z_X[-p]\otimes^{\mathbf L}_{\mathbb Z}\mathbb Z_X[-q] \xrightarrow{\ \tilde\alpha\otimes^{\mathbf L}\tilde\beta\ } \mathcal F\otimes^{\mathbf L}_{\mathbb Z}\mathcal G \xrightarrow{\ c_{\mathcal F,\mathcal G}\ } \mathcal F\otimes_{\mathbb Z}\mathcal G \xrightarrow{\ \mu\ } \mathcal H$$
in $D(\mathrm{Ab}(X))$; here the second arrow is the derived tensor product of
the representing morphisms, which is defined because the derived tensor product
of clause 2 of [[lem-derived-tensor-product-of-abelian-sheaves]] is a bifunctor
on $D^-(\mathrm{Ab}(X))$, and the last two arrows are the comparison of clause 4
of that lemma and the pairing $\mu$.

Conventions and special cases.

1. **(Sign convention.)** The identification $\mathbb Z_X[-p-q]\cong
   \mathbb Z_X[-p]\otimes^{\mathbf L}_{\mathbb Z}\mathbb Z_X[-q]$ used in the
   definition is the one of the Stacks Project (footnote 3 to Section 31 of
   Cohomology of Sheaves), realised here by the canonical isomorphism
   $\kappa(p,q)$ of clause 2 of
   [[lem-koszul-coherence-for-derived-sheaf-tensor]]; the Koszul sign in the
   symmetry of the tensor-product total complex is the one of clause 3 of
   [[lem-koszul-structure-of-the-abelian-sheaf-tensor-product]], under which the
   hidden sign of that footnote is $+1$. Thus no further sign is inserted by
   this definition.
2. **(Identity pairing.)** For $\mu=\operatorname{id}_{\mathcal F\otimes_{\mathbb
   Z}\mathcal G}$ and $\mathcal H=\mathcal F\otimes_{\mathbb Z}\mathcal G$ the
   cup product is a pairing $H^p(X,\mathcal F)\times
   H^q(X,\mathcal G)\to H^{p+q}(X,\mathcal F\otimes_{\mathbb Z}\mathcal G)$,
   written $\alpha\cup\beta$. In degree zero, $p=q=0$, the definition reduces to
   the section pairing $a\cup_\mu b=\mu_X(a\otimes b)$, where the two
   global sections first give a section $a\otimes b$ of the tensor sheaf via
   the canonical map $\Gamma(X,\mathcal F)\otimes_{\mathbb Z}\Gamma(X,\mathcal G)\to\Gamma(X,\mathcal F\otimes_{\mathbb Z}\mathcal G)$,
   under $H^0(X,-)\cong\Gamma(X,-)$.
3. **(Sheaves of rings.)** Let $\mathcal R$ be an abelian sheaf on $X$ together
   with a morphism $\mu:\mathcal R\otimes_{\mathbb Z}\mathcal R\to\mathcal R$
   that is associative, that is, $\mu\circ(\mu\otimes\operatorname{id}) =
   \mu\circ(\operatorname{id}\otimes\mu)$ after the canonical associativity
   identifications of the tensor product of abelian sheaves, and with a unit
   section $1_{\mathcal R}\in\Gamma(X,\mathcal R)$ satisfying
   $\mu_U(s\otimes 1_{\mathcal R}|_U)=\mu_U(1_{\mathcal R}|_U\otimes s)=s$ for every
   open $U\subseteq X$ and $s\in\mathcal R(U)$; when in addition
   $\mu\circ\sigma_{\mathcal R,\mathcal R}=\mu$ for the symmetry
   $\sigma_{\mathcal R,\mathcal R}$ of clause 2 of
   [[lem-koszul-structure-of-the-abelian-sheaf-tensor-product]] we call
   $\mathcal R$ commutative. Then $\cup_\mu$ is the multiplication of the graded
   product on $H^*(X,\mathcal R)=\bigoplus_{q\ge0}H^q(X,\mathcal R)$ whose
   associativity, unitality and graded commutativity, together with the
   naturality of the cup product, are established by the cup-product theorem
   below on this page; the tensor-product form $H^p(X,\mathcal F)\otimes_{\mathbb
   Z}H^q(X,\mathcal G)\to H^{p+q}(X,\mathcal H)$ of $\cup_\mu$ is likewise
   recorded there (its clause 1), since additivity in each variable is not
   asserted by this definition.
