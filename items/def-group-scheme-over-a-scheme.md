---
id: def-group-scheme-over-a-scheme
kind: definition
title: "Group schemes over a base scheme"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
deps:
  - def-group-scheme-over-a-field
  - def-fibre-product-schemes-universal-property
  - def-base-change-morphism-schemes
  - lem-fibre-product-unique-canonical-isomorphism
  - thm-fibre-products-of-schemes-exist
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: pass
sources:
  references:
    - title: "S. Bosch, W. Lutkebohmert, M. Raynaud, Neron Models, Ergebnisse der Mathematik und ihrer Grenzgebiete (3) 21, Springer 1990 (Chapter 1 sections 1-2, Chapter 2 section 2.5, Chapter 3 sections 3.1-3.5, Chapter 4 sections 4.2-4.4, Chapter 7 section 7.2, Chapter 8 section 8.1, Chapter 10 section 10.2)"
      url: "https://www.math.stonybrook.edu/~kamenova/homepage_files/Bosch_Raynaud_Neron_Model_tc.pdf"
    - title: "B. Edixhoven, G. van der Geer, B. Moonen, Abelian Varieties (preliminary version 2012), Chapter 6 sections 1-3 and Chapter 7 sections 1-3"
      url: "https://www.van-der-geer.nl/~gerard/AV.pdf"
    - title: "D. Lombardo, Abelian varieties, Luxembourg Summer School on Galois representations lecture notes (2018), Chapter 1 sections 1-7 and Chapter 2 sections 4-5"
      url: "https://people.dm.unipi.it/lombardo/Teaching/VarietaAbeliane1718/Notes.pdf"
---

## Definition

Let $S$ be a scheme. An **$S$-group scheme** is a group object in the category of $S$-schemes: an $S$-scheme $G$, with structure morphism $p:G\to S$, together with $S$-morphisms
$$m:G\times_SG\to G,\qquad e:S\to G,\qquad i:G\to G$$
called multiplication, unit section and inverse, such that the following identities of $S$-morphisms hold. The fibre product is the one of [[def-fibre-product-schemes-universal-property]] and exists by [[thm-fibre-products-of-schemes-exist]]; the canonical identifications $S\times_SG\cong G\cong G\times_SS$ used below are those of [[lem-fibre-product-unique-canonical-isomorphism]].

(Associativity) $m\circ(m\times_S\operatorname{id}_G)=m\circ(\operatorname{id}_G\times_Sm)$ as morphisms $G\times_SG\times_SG\to G$.

(Unit laws) $m\circ(e\times_S\operatorname{id}_G)=\operatorname{id}_G$ and $m\circ(\operatorname{id}_G\times_Se)=\operatorname{id}_G$ under the canonical identifications above.

(Inverse laws) $m\circ(\operatorname{id}_G,i)=e\circ p$ and $m\circ(i,\operatorname{id}_G)=e\circ p$ as morphisms $G\to G$, where $(\operatorname{id}_G,i):G\to G\times_SG$ and $(i,\operatorname{id}_G):G\to G\times_SG$ are induced by the universal property of the fibre product.

A **morphism of $S$-group schemes** $f:G\to H$ is an $S$-morphism with $f\circ m_G=m_H\circ(f\times_Sf)$, $f\circ e_G=e_H$ and $f\circ i_G=i_H\circ f$, where $f\times_Sf:G\times_SG\to H\times_SH$ is the induced morphism.

**Functor of points.** For an $S$-scheme $T$ put $G(T)=\operatorname{Hom}_S(T,G)$. The composites $T\xrightarrow{\Delta}T\times_ST\xrightarrow{\alpha\times_S\beta}G\times_SG\xrightarrow{m}G$, $T\to S\xrightarrow{e}G$ and $i\circ\alpha$ make $G(T)$ a group, and this structure is natural in $T$ by the universal property of the fibre product. A morphism $f:G\to H$ of $S$-group schemes induces homomorphisms $G(T)\to H(T)$ compatible with the transition maps of $T$. For $S=\operatorname{Spec}k$ and $G$ of finite type this is the notion of [[def-group-scheme-over-a-field]], and the group object diagrams above are equivalent to the requirement that each $G(T)$ be a group naturally in $T$. The definition is a condition on given data and quotes no new existence statement.

**Commutativity.** $G$ is commutative when $m=m\circ\sigma$, where $\sigma:G\times_SG\to G\times_SG$ is the exchange isomorphism; equivalently, each $G(T)$ is abelian.

**Closed subgroup schemes.** A closed subgroup scheme of $G$ is a closed immersion $j:H\to G$ for which there exist $S$-morphisms $m_H:H\times_SH\to H$, $e_H:S\to H$, $i_H:H\to H$ with $j\circ m_H=m\circ(j\times_Sj)$, $j\circ e_H=e$ and $j\circ i_H=i\circ j$; since $j$ is a monomorphism these morphisms are unique if they exist, $H$ becomes an $S$-group scheme and $j$ a morphism of $S$-group schemes. A closed subgroup scheme $H$ is **normal** when $H(T)$ is a normal subgroup of $G(T)$ for every $S$-scheme $T$; equivalently, the conjugation morphism $G\times_SH\to G$, $(\alpha,\beta)\mapsto m_G(m_G(\alpha,\beta),i_G(\alpha))$, factors through $j$.

**Kernels.** For a morphism $f:G\to H$ of $S$-group schemes, the kernel is the fibre product $K=G\times_HS$ formed with $f$ and the unit section $e_H:S\to H$, so that $K\to G$ is the base change of $e_H$ along $f$ and is a closed immersion whenever $e_H$ is one, in particular whenever $H$ is separated over $S$; the induced $S$-morphisms make $K$ an $S$-group scheme, and for every $S$-scheme $T$ the sequence $0\to K(T)\to G(T)\to H(T)$ is exact.

**Base change.** For any morphism $S'\to S$, the base change $G_{S'}=G\times_SS'$ of [[def-base-change-morphism-schemes]] carries an induced $S'$-group structure with $m_{S'},e_{S'},i_{S'}$ obtained from $m,e,i$ under the canonical isomorphism $G_{S'}\times_{S'}G_{S'}\cong(G\times_SG)\times_SS'$. It satisfies $G_{S'}(T)=G(T)$ for every $S'$-scheme $T$, regarded as an $S$-scheme via $T\to S'\to S$; this is the base-change convention used for all group schemes on this page. In particular a morphism $f:G\to H$ of $S$-group schemes base changes to a morphism $f_{S'}$ of $S'$-group schemes.
