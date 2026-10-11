---
id: lem-generated-in-degree-d-is-a-quotient-of-free-fi-modules
kind: lemma
title: "Generation in bounded degree presents an FI-module as a quotient of free FI-modules"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 2
deps: [def-free-fi-module-generated-by-an-sm-module,
       def-finite-generation-and-generation-degree-of-an-fi-module,
       def-module-homomorphism-kernel-image-and-cokernel,
       def-direct-sum-of-a-family-of-modules,
       def-generated-cyclic-finitely-generated-and-free-modules,
       def-fi-category-and-fi-module]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Thomas Church, Jordan S. Ellenberg and Benson Farb, “FI-modules and stability for representations of symmetric groups”, arXiv:1204.4533v4 (2014); published in Duke Math. J. 164 (2015) 1833–1910"
      url: "https://arxiv.org/pdf/1204.4533"
      locator: "Lemma 2.3.2 with the surjection following it, and Proposition 2.3.5, printed pp. 14–15: the image of the map $M(m)\\to V$ determined by $v\\in V_m$ is $\\operatorname{span}_V(v)$, and finite generation is equivalent to a surjection from a finite sum of $M(m)$'s"
    - title: "Thomas Church, Jordan S. Ellenberg, Benson Farb and Rohit Nagpal, “FI-modules over Noetherian rings”, Geom. Topol. 18 (2014) 2951–2984; author-hosted full text"
      url: "https://www.math.uchicago.edu/~farb/papers/FImodNoetherian.pdf"
      locator: "Definition 2.2 (free FI-modules, Yoneda identification) and Proposition 2.3 with proof, printed pp. 10–11"
---

## Statement

Let $V$ be an FI-module over $k$
([[def-fi-category-and-fi-module]]), with free FI-modules $M(m)$ as in
[[def-free-fi-module-generated-by-an-sm-module]] and span as in
[[def-finite-generation-and-generation-degree-of-an-fi-module]].

(a) For $v\in V_m$ the map of FI-modules $M(m)\to V$ sending the canonical
generator $\mathrm{id}_m\in M(m)_m$ to $v$ has image $\operatorname{span}_V(v)$;
more generally, for any set $\Sigma$ of elements, each lying in some $V_S$, the
canonical map $\bigoplus_{s\in\Sigma}M(S_s)\to V$ sending $\mathrm{id}_{S_s}$
to $s$ has image $\operatorname{span}_V(\Sigma)$. Here $S_s$ is the specified
supporting set of $s$, and $M(S)_T$ is the free $k$-module on injections
$S\to T$, with postcomposition as transition maps. Each $M(S)$ is
isomorphic to $M(|S|)$ after choosing a single bijection $[|S|]\to S$.

(b) $V$ is finitely generated if and only if there is a finite family
$m_1,\dots,m_r\ge0$ with a surjection

$$M(m_1)\oplus\cdots\oplus M(m_r)\twoheadrightarrow V;$$

$V$ is generated in degree $\le d$ if and only if there is a surjection
$\bigoplus_{i\in I}M(m_i)\twoheadrightarrow V$ with $m_i\le d$ for all $i$. In
particular, if $V$ is generated in degree $\le d$, then the evaluation map
$\bigoplus_{m\le d}M(V_m)\to V$, whose value on a summand $V_T$ supported on an $m$-element subset
$T\subseteq S$ is the transition map $V_T\to V_S$, is surjective.

(c) If $V$ is finitely generated, then $V_S$ is a finitely generated $k$-module
for every finite set $S$
([[def-generated-cyclic-finitely-generated-and-free-modules]]).

No choice principle is used: all maps come from a finite or explicitly indexed
set of generators, and the image computations are linear algebra on the values
at a fixed finite set.

## Facts & Assumptions

**Given:** An FI-module $V$ over $k$, a set $\Sigma$ of elements with each element lying in some $V_S$, and for each $m$ the free FI-module $M(m)$ with its canonical generator $\mathrm{id}_m$.

[F1] $M(m)_S$ has as $k$-basis the injections $[m]\hookrightarrow S$; for a map of FI-modules $F\colon M(m)\to V$ and the element $v=F(\mathrm{id}_m)\in V_m$, naturality forces $F(f)=f_*(v)$ for an injection $f\colon[m]\hookrightarrow S$; the module $M(m)$ represents the functor $V\mapsto V_m$ ([[def-free-fi-module-generated-by-an-sm-module]]).

[F2] $\operatorname{span}_V(\Sigma)$ is the smallest sub-FI-module of $V$ containing $\Sigma$, and $\operatorname{span}_V(\Sigma)_T$ is the $k$-span of the elements $f_*(s)$ with $(S,s)\in\Sigma$ and $f\colon S\to T$ a morphism of $FI$; $V$ is finitely generated when $\operatorname{span}_V(\Sigma)=V$ for a finite $\Sigma$, and generated in degree $\le d$ when $\operatorname{span}_V(V_{\le d})=V$ ([[def-finite-generation-and-generation-degree-of-an-fi-module]]).

[F3] A direct summand inclusion and the coordinate maps of a direct sum are $k$-linear, and the image of a direct sum of maps is the sum of the images ([[def-direct-sum-of-a-family-of-modules]], [[def-module-homomorphism-kernel-image-and-cokernel]]).

[F4] A quotient of a finitely generated $k$-module is finitely generated, and a finitely generated free $k$-module on a finite set is finitely generated ([[def-generated-cyclic-finitely-generated-and-free-modules]]).

## Proof

**Proof technique:** direct.

1.1 For $v\in V_m$ let $F\colon M(m)\to V$ correspond to $v$ under the representing property, so $F(\mathrm{id}_m)=v$ and $F(f)=f_*(v)$ for every injection $f\colon[m]\hookrightarrow S$ [F1]. Then $\operatorname{im}(F)_S$ is the $k$-span of the elements $f_*(v)$, which is exactly $\operatorname{span}_V(v)_S$ by [F2]; hence $\operatorname{im}(F)=\operatorname{span}_V(v)$. [F1, F2, given]

2.1 More generally, the map $\bigoplus_{s\in\Sigma}M(S_s)\to V$ has image the sum of the images of its summands, and the summand indexed by $s\in V_S$ sends a basis injection $f:S\to T$ to $f_*(s)$, so has image $\operatorname{span}_V(s)$ by the same computation as step 1.1; hence the image is $\operatorname{span}_V(\Sigma)$ by [F2, F3]. [F2, F3, step 1.1]

2.2 The same argument with an arbitrary index set $I$ shows that $V$ is generated in degree $\le d$ if and only if there is a surjection $\bigoplus_{i\in I}M(m_i)\to V$ with all $m_i\le d$: the generators $v_i$ of the image lie in degrees $m_i\le d$, and conversely the skeletal generating set $V_{\le d}$ produces a surjection from the sum of the $M(m)$ indexed by $(m,v)$ with $m\le d$ and $v\in V_m$. Separately, the adjunction defining $M$ gives the evaluation map $\bigoplus_{m\le d}M(V_m)\to V$ from the FB-module which agrees with $V$ on sets of cardinality $m$ and is zero elsewhere: its $V_T$ summand maps by the inclusion $T\hookrightarrow S$. Its image consists of the transition images from degrees $\le d$ and is therefore $V$. [F1, F2, step 1.1]

3.1 If $V=\operatorname{span}_V(\Sigma)$ for a finite $\Sigma$, then the map of step 2.1 is surjective onto $V$ and the finitely many supporting sets can be transported to $[m_i]$ by finitely many bijections, giving generators $s_1,\dots,s_r$ with $s_i\in V_{m_i}$, so $M(m_1)\oplus\cdots\oplus M(m_r)\twoheadrightarrow V$. Conversely, if $\bigoplus_{i=1}^rM(m_i)\twoheadrightarrow V$ is a surjection, let $v_i$ be the image of the canonical generator of the $i$-th summand; step 2.1 identifies the image with $\operatorname{span}_V(v_1,\dots,v_r)$, so this span is $V$ and $V$ is finitely generated. [F1, F2, step 2.1]

4.1 If $V$ is finitely generated, fix a surjection $M(m_1)\oplus\cdots\oplus M(m_r)\twoheadrightarrow V$ from step 3.1. Evaluating at a finite set $S$ gives a surjection of $k$-modules $M(m_1)_S\oplus\cdots\oplus M(m_r)_S\twoheadrightarrow V_S$, and each $M(m_i)_S$ is free with the finite basis $\operatorname{Inj}([m_i],S)$ [F1]; a finite direct sum of finitely generated free modules is finitely generated, and its quotient $V_S$ is finitely generated by [F4]. This proves (c). [F1, F4, step 3.1]

5.1 Steps 1.1 and 2.1 prove (a); steps 3.1 and 2.2 prove (b), including the evaluation map; step 4.1 proves (c). [step 1.1, step 2.1, step 3.1, step 2.2, step 4.1] ∎
