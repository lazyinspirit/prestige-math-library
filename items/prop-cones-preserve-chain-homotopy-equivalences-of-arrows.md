---
id: prop-cones-preserve-chain-homotopy-equivalences-of-arrows
kind: proposition
title: "Cones preserve chain-homotopy equivalences of arrows"
status: published
origin: pipeline
provenance:
  statement: ai-altered
  proof: literature-derived
deps: [def-mapping-cone-of-a-chain-map, def-cone-triangle-of-a-chain-map, def-homotopy-category-of-chain-complexes, def-chain-homotopy-equivalence, def-chain-homotopy]
proof_strategy: direct
verification:
  audited: 2026-08-31
  precheck: pass
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Section 13.9: Cones and termwise split sequences"
      url: "https://stacks.math.columbia.edu/tag/014D"
pipeline_run: frontier-26
---

## Statement

Let $f:C_\bullet\to D_\bullet$ and $g:C'_\bullet\to D'_\bullet$ be chain maps
in an abelian category $\mathcal A$.
Assume there are chain homotopy equivalences $u:C\to C'$ and $v:D\to D'$,
homotopy inverses $u'$ and $v'$, and a chain homotopy
$$t:gu\simeq vf.$$
Then the upper-triangular block map
$$\Phi_n(y,x):=(v_n(y)-t_{n-1}(x),u_{n-1}(x))$$
is a chain-homotopy equivalence
$$\operatorname{Cone}(f)\to\operatorname{Cone}(g).$$

## Facts & Assumptions

**Given:** Data as in the statement.

[L1] A chain homotopy equivalence is a chain map with a homotopy inverse ([[def-chain-homotopy-equivalence]]).

[L2] A chain homotopy satisfies the commutator identity between the two maps it connects ([[def-chain-homotopy]]).

[L3] The cone differential is
$$d(y,x)=(d^D(y)+f(x),-d^C(x))$$
for $\operatorname{Cone}(f)$, and analogously for $g$
([[def-mapping-cone-of-a-chain-map]]).

[L4] The cone of a chain map belongs to the cone triangle consisting of the
map, the canonical inclusion, and the canonical projection
([[def-cone-triangle-of-a-chain-map]]).

[L5] Morphisms in the homotopy category $K(\mathcal A)$ are homotopy classes
of chain maps ([[def-homotopy-category-of-chain-complexes]]).

[L6] The Stacks Project, Lemma 13.9.13, states that if
$(a,b,c)$ is a morphism between two cone triangles in $K(\mathcal A)$ and
$a,b$ are chain-homotopy equivalences, then $c$ is a chain-homotopy
equivalence.

## Proof

**Proof technique:** direct.

1.1 By [L2], the homotopy convention gives $gu-vf=dt+td$. Using [L3], direct expansion yields $$d^{\operatorname{Cone}(g)}\Phi(y,x)=\bigl(vd^D y-dt(x)+gu(x),-ud^C x\bigr)=\bigl(vd^D y+vf(x)+t d^C(x),-ud^C x\bigr)=\Phi d^{\operatorname{Cone}(f)}(y,x).$$ Thus $\Phi$ is a chain map. [L2, L3, given, construct, algebra]

2.1 Let $j_f,j_g$ and $q_f,q_g$ denote the inclusions and projections in the cone triangles from [L4]. The block formula gives $\Phi j_f=j_gv$ and $q_g\Phi=u[1]q_f$ strictly, while the first square commutes in $K(\mathcal A)$ because $t:gu\simeq vf$. Hence $(u,v,[\Phi])$ is a morphism from the cone triangle of $f$ to the cone triangle of $g$ in the homotopy category. [L2, L4, L5, step 1.1, algebra]

3.1 The maps $u$ and $v$ are chain-homotopy equivalences by hypothesis, so [L6] applied to the morphism of cone triangles from step 2.1 shows that $\Phi$ is a chain-homotopy equivalence. This is the asserted conclusion. [L1, L6, step 2.1] ∎
