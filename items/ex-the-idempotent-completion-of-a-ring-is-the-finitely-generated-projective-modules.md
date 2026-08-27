---
id: ex-the-idempotent-completion-of-a-ring-is-the-finitely-generated-projective-modules
kind: example
title: "The idempotent completion of the matrix category gives the finitely generated projective modules"
status: draft
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-the-matrix-category-is-equivalent-to-the-finitely-generated-free-modules, def-the-idempotent-completion-of-a-preadditive-category, thm-the-idempotent-completion-is-idempotent-complete-and-its-inclusion-is-fully-faithful-and-universal, def-full-faithful-and-essentially-surjective-functor, def-projective-module, thm-free-modules-are-projective-with-choice-boundary]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Dixy Msapato, The Karoubi envelope and weak idempotent completion of an extriangulated category, Section 2.1"
      url: "https://eprints.whiterose.ac.uk/id/eprint/180476/13/Msapato2022_Article_TheKaroubiEnvelopeAndWeakIdemp.pdf"
    - title: "Kiran S. Kedlaya, Solid modules over an ordinary ring, Example 1.2.6"
      url: "https://www.kskedlaya.org/condensed/sec_solid1.html"
pipeline_run: frontier-20
---

## Example

For a commutative ring $R$, the matrix functor extends to a fully faithful
functor
$$\overline K:\operatorname{Kar}(\mathbf{Mat}_R)\longrightarrow R\text{-}\mathbf{Mod}$$
whose essential image is exactly the finitely generated projective
$R$-modules.

## Facts & Assumptions

**Given:** A commutative ring $R$.

[L1] The matrix category is equivalent to the finitely generated free
$R$-modules
([[thm-the-matrix-category-is-equivalent-to-the-finitely-generated-free-modules]]).

[L2] The Karoubi envelope adjoins splitting objects for idempotents
([[def-the-idempotent-completion-of-a-preadditive-category]],
[[thm-the-idempotent-completion-is-idempotent-complete-and-its-inclusion-is-fully-faithful-and-universal]]).

[L3] Finite free modules are projective without any choice principle, and
projective means having the lifting property against surjections
([[thm-free-modules-are-projective-with-choice-boundary]],
[[def-projective-module]]).

[L4] A functor is fully faithful when it induces a bijection on every hom-set,
and its essential image consists of the objects isomorphic to objects in its
image ([[def-full-faithful-and-essentially-surjective-functor]]).

## Verification

**Proof technique:** direct.

1.1 For an object $(n,e)$, define its splitting module $P_e:=\operatorname{im}(e:R^n\to R^n)$. [L1, L2, construct]
By [L1], $e$ is an idempotent endomorphism of $R^n$. Let
$i_e:P_e\rightarrowtail R^n$ be inclusion, and let
$p_e:R^n\twoheadrightarrow P_e$ be $e$ with codomain restricted to its
image. Then $i_ep_e=e$ and $p_ei_e=1_{P_e}$, so these maps give an actual
splitting in $R\text{-}\mathbf{Mod}$. [L1, L2, algebra]

2.1 The module $P_e$ is finitely generated and projective. [L3, step 1.1]
Since $R^n$ is projective by [L3], composing any lifting problem for $P_e$ with
$p_e$ and then restricting the resulting lift along $i_e$ proves that
$P_e$ is projective. It is finitely generated because the images under $p_e$
of the standard generators of $R^n$ generate it. [L3, step 1.1]

2.2 The object assignment $(n,e)\mapsto P_e$ and restriction on morphisms define a functor $\overline K$. [L1, L2, step 1.1, construct]
If $u:(n,e)\to(m,f)$ is a Karoubi morphism, [L2] gives $fue=u$, equivalently
$fu=u=ue$. Hence $u$ maps $P_e$ into $P_f$; define
$\overline K(u):=u|_{P_e}:P_e\to P_f$. Restrictions preserve identities and
composition, so this defines a functor. [L1, L2, step 1.1]

3.1 The functor $\overline K$ is fully faithful. [L1, L2, L4, step 1.1, step 2.2, algebra]
For objects $(n,e)$ and $(m,f)$, the map on hom-sets in step 2.2 is bijective.
Indeed, for any homomorphism $h:P_e\to P_f$, the composite
$$u:=i_fhp_e:R^n\longrightarrow R^m$$
corresponds by [L1] to a matrix and satisfies $fue=u$, so it is a Karoubi
morphism whose restriction is $h$. Conversely, $ue=u$ forces every Karoubi
morphism to equal $i_f(u|_{P_e})p_e$, proving uniqueness. Thus $\overline K$
is fully faithful by [L4]. [L1, L2, L4, step 1.1, step 2.2, algebra]

3.2 Every finitely generated projective $R$-module lies in the essential image of $\overline K$. [L2, L3, step 1.1, step 2.2]
Indeed, let $P$ be a finitely generated projective module. A finite generating
set gives a surjection $q:R^n\to P$. Projectivity from [L3] supplies
a section $s:P\to R^n$ with $qs=1_P$. Then $e:=sq$ is idempotent, and $q$
restricts to an isomorphism $P_e\to P$ with inverse $s$. Hence every finitely
generated projective module lies in the essential image of $\overline K$.
[L2, L3, step 1.1, step 2.2]

4.1 Step 2.1 and step 3.2 identify the essential image, and step 3.1 proves full faithfulness; hence the stated claim holds. [L4, step 2.1, step 3.1, step 3.2] ∎
