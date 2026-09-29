---
id: def-elementary-etale-neighbourhood
kind: definition
title: "Etale neighbourhoods and elementary etale neighbourhoods of a point"
status: draft
origin: pipeline
deps:
  - def-etale-morphism-schemes
  - def-scheme
  - def-morphism-of-schemes
  - def-scheme-over-base
  - def-residue-field-scheme-point
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "The Stacks Project, More on Morphisms, Definition 37.35.1 (tag 02LE) and Section 37.35"
      url: https://stacks.math.columbia.edu/tag/02LE
    - title: "The Stacks Project, Morphisms of Schemes, Section 29.37 (etale morphisms)"
      url: https://stacks.math.columbia.edu/download/morphisms.pdf
---

## Definition

Let $S$ be a scheme ([[def-scheme]]) and let $s\in S$ be a point, with residue
field $\kappa(s)$ ([[def-residue-field-scheme-point]]).

An **\'etale neighbourhood** of $(S,s)$ is a pair $(U,u)$ consisting of a
scheme $U$, a morphism of schemes $\varphi:U\to S$ that is \'etale
([[def-etale-morphism-schemes]]) and a point $u\in U$ with $\varphi(u)=s$. One
writes $\varphi:(U,u)\to(S,s)$. A **morphism of \'etale neighbourhoods**
$f:(V,v)\to(U,u)$ of $(S,s)$ is a morphism of $S$-schemes
([[def-scheme-over-base]]) $f:V\to U$ with $f(v)=u$.

The \'etale neighbourhood $(U,u)\to(S,s)$ is **elementary** if the canonical
map of residue fields $\kappa(s)\to\kappa(u)$ is an isomorphism, that is, if
$\kappa(u)=\kappa(s)$.

Three conventions belong to the definition. First, no affineness is required
of $U$; in the arguments on this page the neighbourhoods produced are affine
when this is useful, and the definition above is the general one of Stacks
Definition 37.35.1. Second, the point $u$ need not be closed in $U$, and the
morphism $U\to S$ is required to be \'etale as a morphism, not merely \'etale
at the point $u$; a morphism that is \'etale only on an open neighbourhood of
$u$ gives an \'etale neighbourhood after replacing $U$ by that neighbourhood.
Third, if $U\subseteq S$ is an open neighbourhood of $s$, then $(U,s)\to(S,s)$
is an \'etale neighbourhood, and it is elementary since the residue field at
$s$ is unchanged; the composition of two \'etale neighbourhoods of $(S,s)$ is
again one, and the composition of elementary ones is elementary because both
residue field maps are isomorphisms.
