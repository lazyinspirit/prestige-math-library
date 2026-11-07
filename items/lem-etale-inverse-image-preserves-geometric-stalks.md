---
id: lem-etale-inverse-image-preserves-geometric-stalks
kind: lemma
title: "Inverse image of an étale sheaf preserves geometric stalks"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 3
deps:
  - def-small-etale-site-of-a-scheme
  - lem-etale-coverings-form-a-grothendieck-site
  - def-etale-sheaf-of-finite-modules
  - thm-etale-equivalent-flat-unramified-fp
  - lem-etale-residue-extensions-finite-separable
  - def-axiom-of-choice
justified_by: []
proof_strategy: direct
axiom_use: "Assume AC through the finite-residue-field supplier, which ensures that an étale covering family lifts each geometric point. The colimit comparison makes no further choices."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "The Stacks Project, Étale Cohomology, Section 59.36, Definition 59.36.1 and Lemma 59.36.2"
      url: https://stacks.math.columbia.edu/tag/03PZ
---

## Statement

Assume AC. Let $f:X\to Y$ be a morphism of schemes, let $\mathcal G$ be a sheaf of sets on $Y_{\acute e t}$, and let $\bar x:\operatorname{Spec}\Omega\to X$ be a geometric point with $\Omega$ algebraically closed. Put $\bar y=f\circ\bar x$. For an object $U\to X$ of $X_{\acute e t}$, define the presheaf
$$
P_{\mathcal G}(U)=\varinjlim_{(V,\phi)}\mathcal G(V),
$$
where $V\to Y$ ranges over étale schemes and $\phi:U\to X\times_Y V$ ranges over morphisms over $X$. An arrow from $(V,\phi)$ to $(V',\phi')$ is a morphism $h:V'\to V$ over $Y$ with $\phi'=(\operatorname{id}_X\times h)\circ\phi$; its transition map is the restriction $\mathcal G(V)\to\mathcal G(V')$. For a presheaf $P$ on a site, its plus presheaf $P^+$ has sections given by compatible families of $P$-sections on covering families, where compatibility means equality on every pairwise fiber product and presentations are identified after common covering refinements. Its associated sheaf is $P^{++}$. Define $f^{-1}\mathcal G=P_{\mathcal G}^{++}$. Its fiber-product structure maps give the cartesian square below; $\phi$ maps to the upper-left corner.

```tikzcd
\begin{tikzcd}
X\times_Y V \ar[r] \ar[d] & V \ar[d] \\
X \ar[r,"f"] & Y.
\end{tikzcd}
```
For any sheaf $\mathcal H$ on a small étale site and geometric point $\bar z:\operatorname{Spec}\Omega'\to Z$, define its geometric stalk by $\mathcal H_{\bar z}=\varinjlim_{(W,\bar w)}\mathcal H(W)$ over étale neighborhoods $(W,\bar w)$ of $\bar z$. Then there is a canonical isomorphism
$$
(f^{-1}\mathcal G)_{\bar x}\cong\mathcal G_{\bar y}.
$$

## Statement references

[The Stacks Project, Section 59.36, Definition 59.36.1 and Lemma 59.36.2](https://stacks.math.columbia.edu/tag/03PZ)

## Facts & Assumptions

**Given:** AC, $f:X\to Y$, the sheaf $\mathcal G$, and the geometric point $\bar x$ in the Statement.

[F1] [[def-small-etale-site-of-a-scheme]]: objects are étale schemes over the base, arrows are base morphisms, and fiber products are taken over their targets.

[F2] [[lem-etale-coverings-form-a-grothendieck-site]]: étale covering families are stable under base change, have fiber products, and are jointly surjective.

[F3] [[thm-etale-equivalent-flat-unramified-fp]]: under AC, an étale morphism locally of finite presentation is unramified.

[F4] [[lem-etale-residue-extensions-finite-separable]]: an unramified morphism locally of finite type induces finite separable residue-field extensions at its points.

[A1] [[def-axiom-of-choice]]: every family of nonempty sets has a choice function; AC is inherited through [F3] and [F4].

## Proof

**Given:** The inverse-image presheaf $P_{\mathcal G}$ and its sheafification from the Statement, under [A1].

1.1 For any presheaf $P$ on an étale site, a geometric stalk is unchanged by sheafification. Indeed, a section of the first plus construction $P^+(U)$ is a compatible family of $P$-sections on an étale covering family of $U$, modulo equality after a common covering refinement. A germ of such a family at $\bar x$ is represented by one member of the cover above $\bar x$, since joint surjectivity gives a point above the image of $\bar x$ and [F3]–[F4] let its finite residue extension embed in the algebraically closed field $\Omega$. Thus $P_{\bar x}\to(P^+)_{\bar x}$ is surjective. If two germs from $P$ have equal images, equality in $P^+$ holds after an étale neighborhood and then after a covering refinement; one member of that refinement lies above $\bar x$, where the original sections agree. Hence the stalk map is injective. Applying this argument twice to $P$ and $P^+$ gives $P_{\bar x}\cong(P^{++})_{\bar x}$. [F1, F2, F3, F4, A1, choose]

1.2 A germ in $(P_{\mathcal G})_{\bar x}$ is represented by an étale neighborhood $(U,\bar u)$ of $\bar x$, a pair $(V,\phi)$ with $\phi:U\to X\times_YV$, and a section $s\in\mathcal G(V)$. The geometric point $\bar v$ obtained by composing $\bar u$ with $\phi$ and projecting to $V$ lies over $\bar y$; send the represented germ to the germ of $s$ at $\bar v$. This is compatible with all restrictions and transition maps. Conversely, a germ represented by $(V,\bar v,s)$ over $\bar y$ gives such a representative by taking $U=X\times_YV$, the geometric point $\bar u=(\bar x,\bar v)$, and $\phi=\operatorname{id}_{X\times_YV}$. The projection $U\to X$ is étale by base change in [F2]. For every original representative, its map $\phi$ is a morphism of étale neighborhoods from $(U,\bar u)$ to $(X\times_YV, (\bar x,\bar v))$, so it identifies that germ with the canonical representative. The two constructions are inverse, proving $(P_{\mathcal G})_{\bar x}\cong\mathcal G_{\bar y}$. [F1, F2, given, construct]

2.1 By step 1.1 and the definition $f^{-1}\mathcal G=(P_{\mathcal G})^{++}$, its geometric stalk is $(P_{\mathcal G})_{\bar x}$. Step 1.2 identifies this stalk canonically with $\mathcal G_{\bar y}$, as required. AC is used only to lift a geometric point through the finite étale residue extensions in step 1.1. [F3, F4, A1, step 1.1, step 1.2] ∎
