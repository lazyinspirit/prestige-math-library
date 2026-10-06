---
id: lem-the-ahss-first-differential-is-the-cellular-coboundary
kind: lemma
title: The AHSS first differential is the cellular coboundary
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [prop-reduced-and-unreduced-generalized-cohomology-theories-correspond, lem-ahss-e-one-page-is-cellular-cochains-with-theory-coefficients, prop-degree-d-sphere-maps-act-by-multiplication-by-d-in-any-generalized-theory, thm-cellular-boundary-is-the-incidence-degree-matrix, def-incidence-number-of-two-cw-cells, def-oriented-cellular-chain-group, def-exact-couple, thm-an-exact-couple-generates-a-spectral-sequence, cor-singular-cohomology-satisfies-the-eilenberg-steenrod-cohomology-axioms, prop-relative-cw-inclusions-are-cofibrations, thm-cellular-approximation-for-maps-of-cw-pairs]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Yiannis Loizides, The Atiyah–Hirzebruch Spectral Sequence, Theorem 3.2 and its diagram, printed pp. 5–6"
      url: https://math.gmu.edu/~yloizide/Atiyah-Hirzebruch.pdf
      locator: "Theorem 3.2 and its component diagram, printed pp. 5–6"
verification:
  audited: 2026-09-22
---

## Statement

Let $X$ be a finite CW complex with chosen cells and orientations, and let
$h$ be the CW-pair theory of a reduced generalized cohomology theory. Under the
identification $E_1^{p,q}\cong C^p_{\mathrm{cell}}(X;h^q(*))$ of
[[lem-ahss-e-one-page-is-cellular-cochains-with-theory-coefficients]], the first
differential of the skeletal exact couple is the cellular coboundary
$$\delta:C^p_{\mathrm{cell}}(X;h^q(*))\longrightarrow C^{p+1}_{\mathrm{cell}}(X;h^q(*))$$
of the cellular cochain complex with coefficients in the abelian group $h^q(*)$.
Consequently
$$E_2^{p,q}\cong H^p\bigl(X;h^q(*)\bigr).$$

## Facts & Assumptions

[F1] The first page is identified with cellular cochains by $E_1^{p,q}\cong\operatorname{Hom}(C_p^{\mathrm{cell}}(X),h^q(*))$, via the wedge decomposition of $X^p/X^{p-1}$ and the suspension isomorphisms ([[lem-ahss-e-one-page-is-cellular-cochains-with-theory-coefficients]]).

[F2] In the homological indexing of [[def-exact-couple]] and [[thm-an-exact-couple-generates-a-spectral-sequence]], the initial differential is $jk:E^1_{a,b}\to E^1_{a-1,b}$ and has bidegree $(-1,0)$. Under the cohomological reindexing $(p,q)=(-a,-b)$ used for the skeletal AHSS, it becomes $d_1:E_1^{p,q}\to E_1^{p+1,q}$. Concretely it sends a class on $(X^p,X^{p-1})$ first by the pair map to $h^{p+q}(X^p)$ and then by the connecting map of $(X^{p+1},X^p)$ to $h^{p+q+1}(X^{p+1},X^p)$.

[F3] For $p\ge1$, a based map $S^p\to S^p$ of degree $d$ acts by multiplication by $d$ on any reduced generalized cohomology group of $S^p$ ([[prop-degree-d-sphere-maps-act-by-multiplication-by-d-in-any-generalized-theory]]).

[F4] For $p\ge1$, the incidence number $[e^{p+1}_\tau:e^p_\sigma]$ is the degree of the attaching-sphere composite onto the $\sigma$-sphere. For $p=0$, write the chosen vertex generator as $e_v=\varepsilon_v[v]$, with canonical positive point class $[v]$ and $\varepsilon_v\in\{1,-1\}$. A compatibly oriented one-cell with endpoints $v_-,v_+$ has entry $\varepsilon_v(\mathbf 1_{\{v_+=v\}}-\mathbf 1_{\{v_-=v\}})$ at $e_v$. Canonical positive vertex generators give $+1$ at the terminal vertex and $-1$ at the initial vertex; coincident endpoints give zero. In every dimension the cellular boundary is the resulting incidence matrix ([[def-incidence-number-of-two-cw-cells]], [[thm-cellular-boundary-is-the-incidence-degree-matrix]]).

[F5] The cellular cochain complex of the finite CW complex $X$ with coefficients in an abelian group $G$ is the dual of its oriented cellular chain complex ([[def-oriented-cellular-chain-group]]), so its coboundary has matrix entries $[e^{p+1}_\tau:e^p_\sigma]$. Singular cohomology with coefficients in $G$ has choice-free homotopy invariance, pair exactness, excision and the dimension axiom; it also has finite additivity without AC ([[cor-singular-cohomology-satisfies-the-eilenberg-steenrod-cohomology-axioms]]). Applied to the finite cell decomposition of $(X^m,X^{m-1})$, excision, finite additivity and the dimension axiom give $H^r(X^m,X^{m-1};G)=0$ for $r\ne m$ and identify the group in degree $m$ with the cellular $m$-cochains. Naturality of the pair connectors identifies the resulting differential with the incidence coboundary.

[F6] In the associated CW-pair theory, every connecting map is normalized by the fixed suspension as $\delta_i=q_i^*\sigma$ ([[prop-reduced-and-unreduced-generalized-cohomology-theories-correspond]]). The endpoint and disk orientation calculations are made explicitly below.

[F7] CW inclusions have the homotopy extension property, and cellular approximation with a finite relative source is choice-free ([[prop-relative-cw-inclusions-are-cofibrations]], [[thm-cellular-approximation-for-maps-of-cw-pairs]]).

## Proof

**Proof technique:** direct.

**Given:** A finite CW complex $X$ with chosen cells and orientations, integers $p,q$, and the skeletal exact couple whose first page is identified in [F1].

1.1 The differential is $d_1=j\circ k=jk$ in the exact-couple indexing: a class in $E_1^{p,q}=h^{p+q}(X^p,X^{p-1})$ is first sent by the pair map $k$ to $h^{p+q}(X^p)$, and then by the connecting map $j$ of the next pair to $h^{p+q+1}(X^{p+1},X^p)=E_1^{p+1,q}$. [F2, given]

1.2 Suppose $p\ge1$. Restricting along the characteristic map $\varphi_\tau:(D^{p+1},\partial D^{p+1})\to(X^{p+1},X^p)$ and collapsing the complement of a $p$-cell $\sigma$ exhibits the $(\tau,\sigma)$ component of $d_1$ as the map induced by $c_\sigma\circ\pi\circ\varphi_\tau|_{\partial D^{p+1}}:S^p\to S^p$. The disk-boundary connector agrees with positive suspension in these oriented coordinates: cap the oriented disk with the cone on its outward-oriented boundary. The cone has orientation $dt$ followed by the boundary orientation, so its base boundary is the negative of the disk boundary. They glue to an oriented sphere, and collapse of the disk maps the cone to the positively oriented suspension. Thus no extra sign enters the component diagram. To type the characteristic pair map, first approximate its boundary cellularly in $X^p$, extend that boundary homotopy over the disk by [F7], and approximate the disk rel its now cellular boundary. All sources are finite, and the resulting map is homotopic through pair maps to the original; cellular representatives determine the same maps on the cofiber groups by homotopy invariance. For $p\ge1$ the boundary vertex now maps into $X^0\subseteq X^{p-1}$, so the attaching-sphere composite after collapse is based. Its degree is unchanged. This is the attaching map followed by collapse onto the $\sigma$-sphere, as in the source diagram. [F1, F2, F6, F7, given]

1.3 Suppose $p=0$ and orient a one-cell $e^1_\tau$ from its initial endpoint $v_-$ to its terminal endpoint $v_+$. Naturality reduces its component of $d_1$ to the boundary for $(D^1,S^0)$. The cofiber of $(S^0)_+\hookrightarrow(D^1)_+$ is a graph consisting of the oriented edge and a spoke from each endpoint to the common cone tip. Its oriented cycle traverses the edge from initial to terminal, then the terminal spoke forwards, then the initial spoke backwards. Collapsing the edge gives the map to $\Sigma(S^0)_+$ with degrees $+1$ on the terminal circle and $-1$ on the initial circle. Wedge coordinates, [F3] in dimension one, and the normalized connector [F6] therefore send canonical point values to terminal value minus initial value. Under [F1], a cellular cochain $a$ is specified by $a_v=a(e_v)$ on the chosen generators $e_v=\varepsilon_v[v]$. Its canonical point value is $a([v])=\varepsilon_v a_v$, because $[v]=\varepsilon_v e_v$. Consequently the edge coordinate is $\varepsilon_{v_+}a_{v_+}-\varepsilon_{v_-}a_{v_-}$, and its coefficient at $a_v$ is $\varepsilon_v(\mathbf1_{\{v_+=v\}}-\mathbf1_{\{v_-=v\}})$, including zero for a loop. If all vertex generators are positive this is exactly $a(v_+)-a(v_-)$. The sign change of a vertex coordinate is the algebraic automorphism $-\mathrm{id}$ of the coefficient group, not a based degree-$-1$ map of $S^0$. [F2, F3, F6, given]

1.4 The cellular coboundary with coefficients $h^q(*)$ has, in the dual cell bases, the incidence entries $[e^{p+1}_\tau:e^p_\sigma]$ by duality of the cellular boundary. [F4, F5]

2.1 For $p\ge1$, the degree action [F3] says that the $(\tau,\sigma)$ component of $d_1$ is multiplication by the degree of the map in step 1.2, namely the incidence number $[e^{p+1}_\tau:e^p_\sigma]$. [F3, F4, step 1.2]

2.2 For $p=0$, step 1.3 gives the same signed incidence coefficient directly in the chosen vertex coordinates. Its endpoint signs come from the suspended interval cofiber, and changing $e_v$ to $-[v]$ negates that coefficient algebraically; neither sign is being attributed to a based degree-$-1$ self-map of $S^0$. [F4, step 1.3]

3.1 Steps 2.1 and 2.2 cover all $p\ge0$ (for $p<0$ the source is zero, so the differential is zero even when $p=-1$ and the target need not vanish). Their component matrices agree with step 1.4, so $d_1$ is the cellular coboundary under [F1]. The second page is therefore the cohomology of the cellular cochain complex. For completeness, apply the choice-free consecutive-skeleton calculation in [F5]. The pair sequences give $H^p(X^p;G)=C^p/\operatorname{im}\delta^{p-1}$ and identify $H^p(X^{p+1};G)$ with the kernel of the induced map to $C^{p+1}$; hence this is $\ker\delta^p/\operatorname{im}\delta^{p-1}$. Higher cell attachments change neither adjacent group, so finitely many restrictions give $H^p(X;G)$. The same chase starts at $X^{-1}=\varnothing$, and negative cohomology is zero. Every use of additivity here is over the finite set of cells, so there is no arbitrary family of representative or primitive choices. Taking $G=h^q(*)$ proves the asserted $E_2$ formula. [F1, F5, step 1.4, step 2.1, step 2.2]

4.1 This proves the stated identification of $d_1$ and the resulting formula for the second page. [step 3.1] ∎

## Source notes

Compare [Loizides](https://math.gmu.edu/~yloizide/Atiyah-Hirzebruch.pdf), Theorem 3.2 and its component diagram, printed pp. 5–6, where the same matrix computation identifies $d_1$ with the coboundary of cellular cohomology with coefficients $h^q$.
