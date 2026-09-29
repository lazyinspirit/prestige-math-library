---
id: thm-geometric-braids-are-the-fundamental-group-of-unordered-configurations
kind: theorem
title: "Geometric braid classes and the unordered configuration fundamental group"
status: published
origin: pipeline
pipeline_run: frontier-36-complete
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-slicing-and-tracing-are-mutually-inverse-on-classes,
       lem-stacking-corresponds-to-loop-concatenation,
       def-braid-group-from-unordered-configurations,
       lem-interior-and-closed-disk-configuration-spaces-are-homotopy-equivalent,
       thm-geometric-braids-form-a-group,
       thm-fundamental-group-laws,
       def-based-loops-and-fundamental-group,
       def-geometric-braid-with-setwise-endpoints,
       def-motion-of-an-unordered-point-configuration,
       def-induced-homomorphism-on-fundamental-groups,
       def-group-homomorphism,
       def-injection-surjection-bijection,
       def-group-isomorphism-and-automorphism]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Juan Gonzalez-Meneses, Basic results on braid groups, §§1.1–1.3, printed pp. 3–5"
      url: https://arxiv.org/pdf/1010.0321
    - title: "Joan S. Birman and Tara E. Brendle, Braids: A Survey, §1.1, author manuscript pp. 3–4"
      url: https://www.math.columbia.edu/~jb/Handbook-21.pdf
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
---

## Statement

Fix $n\in\mathbb N$ and the explicit geometric base tuple
$Q=(q_1,\ldots,q_n)$ from
[[def-geometric-braid-with-setwise-endpoints]]. In
[[def-braid-group-from-unordered-configurations]], take its parameterized base
configuration to be this same tuple $q=Q$. Thus
$$B_n^{\mathrm{conf}}=\pi_1\bigl(C_n(D^2),[Q]\bigr).$$
Let $G_n$ be the group of geometric braid-isotopy classes based at $Q$, with
the stacking product $[\gamma][\beta]=[\gamma\star\beta]$. Let
$$\iota^C:C_n(\operatorname{int}D^2)\hookrightarrow C_n(D^2)$$
be the inclusion and let $\iota^C_*$ be its induced homomorphism at $[Q]$.
For a geometric braid $\beta$, let $S(\beta)$ be its unordered configuration
slice. Then raw slicing induces a bijection
$$S:G_n\longrightarrow\pi_1\bigl(C_n(\operatorname{int}D^2),[Q]\bigr),\qquad [\beta]\longmapsto[S(\beta)],$$
and reverses products. Consequently
$$\Phi:G_n\longrightarrow B_n^{\mathrm{conf}},\qquad [\beta]\longmapsto\bigl(\iota^C_*[S(\beta)]\bigr)^{-1}$$
is a group isomorphism. Relating this group to one based at another
configuration requires choosing a connecting path; no Artin-presentation
completeness claim is made here.

## Facts & Assumptions

**Given:** $n\in\mathbb N$, the specified tuple $Q$, its geometric braid group $G_n$, the open-to-closed configuration inclusion, and the slicing map.

[L1] The geometric motion definition fixes the same explicit tuple $Q$ and specifies that the configuration braid group is based at its orbit $[Q]$ ([[def-motion-of-an-unordered-point-configuration]]).

[L2] The geometric braid-isotopy classes based at $Q$ form a group $G_n$ with product $[\gamma][\beta]=[\gamma\star\beta]$ ([[thm-geometric-braids-form-a-group]]).

[L3] Slicing and tracing are well-defined mutually inverse bijections between geometric braid-isotopy classes at $Q$ and based path-homotopy classes in $C_n(\operatorname{int}D^2)$ at $[Q]$ ([[lem-slicing-and-tracing-are-mutually-inverse-on-classes]]).

[L4] Stacking and slicing satisfy $$[S(\gamma\star\beta)]=[S(\beta)][S(\gamma)]$$ with the library's first-loop-then-second loop product ([[lem-stacking-corresponds-to-loop-concatenation]]).

[L5] At every $q\in F_n(\operatorname{int}D^2)$, the inclusion-induced map $$\iota^C_*:\pi_1(C_n(\operatorname{int}D^2),[q])\longrightarrow\pi_1(C_n(D^2),[q])$$ is a group isomorphism ([[lem-interior-and-closed-disk-configuration-spaces-are-homotopy-equivalent]]).

[L6] The configuration braid group is $$B_n^{\mathrm{conf}}:=\pi_1(C_n(D^2),[q])$$ for the chosen base configuration $q$ ([[def-braid-group-from-unordered-configurations]]).

[L7] For a pointed continuous map $f$, the induced map sends $[\alpha]$ to $[f\circ\alpha]$ and is a group homomorphism ([[def-induced-homomorphism-on-fundamental-groups]]).

[L8] The loop product $[\alpha][\eta]=[\alpha*\eta]$ traverses $\alpha$ first and $\eta$ second ([[def-based-loops-and-fundamental-group]]).

[L9] The target fundamental-group classes form a group with two-sided inverses and an identity element ([[thm-fundamental-group-laws]]).

[L10] A group homomorphism preserves products: $f(xy)=f(x)f(y)$ ([[def-group-homomorphism]]).

[L11] A function is bijective when it is both injective and surjective, and a two-sided inverse certifies those properties ([[def-injection-surjection-bijection]]).

[L12] A group isomorphism is a bijective group homomorphism ([[def-group-isomorphism-and-automorphism]]).

[L13] For $n=0$ there is exactly one empty geometric braid; for $n=1$ the geometric braid condition imposes no collision restriction ([[def-geometric-braid-with-setwise-endpoints]]).

[L14] For $n=0$, both configuration spaces are one-point spaces and there is one based motion; for $n=1$, the configuration space is canonically the disk and there is no collision condition ([[def-motion-of-an-unordered-point-configuration]]).

The tuple $Q$ and every braid coordinate path are specified. Tracing uses the unique lift from this $Q$, and no arbitrary order, representative, or connecting path is chosen. No Axiom of Choice is used.

## Proof

**Proof technique:** direct.

1.1 *Fix the common basepoint.* By [L1], the definition of $B_n^{\mathrm{conf}}$ is instantiated at $q=Q$, so the open-to-closed inclusion is based at the same orbit $[Q]$ on both sides. By [L5] and [L7], $\iota^C_*$ is a group isomorphism from the open-disk fundamental group onto $B_n^{\mathrm{conf}}$. [L1, L5, L6, L7]

1.2 *Raw slicing is a bijection.* By [L3], the class map $S:[\beta]\mapsto[S(\beta)]$ is well defined and has tracing as its inverse. It is therefore bijective, including the zero- and one-strand cases. [L3]

2.1 *Raw slicing reverses stacking.* For $[\gamma],[\beta]\in G_n$, [L2] defines their product by $[\gamma\star\beta]$, and [L4] gives $$S([\gamma][\beta])=[S(\gamma\star\beta)]=[S(\beta)][S(\gamma)].$$ This is the anti-homomorphism identity for the first-then-second loop product of [L8]. Since $S$ is bijective by step 1.2, it is an anti-isomorphism. [L2, L3, L4, L8, step 1.2]

3.1 *The inverse-loop map is multiplicative.* Write $$a:=\iota^C_*[S(\gamma)],\qquad b:=\iota^C_*[S(\beta)].$$ By step 2.1 and the homomorphism property [L7], $$\Phi([\gamma][\beta])=(ba)^{-1}.$$ In the group $B_n^{\mathrm{conf}}$, the element $a^{-1}b^{-1}$ is a two-sided inverse of $ba$: associativity gives $(ba)(a^{-1}b^{-1})=b(aa^{-1})b^{-1}=1$ and $(a^{-1}b^{-1})(ba)=a^{-1}(b^{-1}b)a=1$. Uniqueness of inverses therefore gives $(ba)^{-1}=a^{-1}b^{-1}$. Hence $$\Phi([\gamma][\beta])=\bigl(\iota^C_*[S(\gamma)]\bigr)^{-1}\bigl(\iota^C_*[S(\beta)]\bigr)^{-1}=\Phi([\gamma])\Phi([\beta]),$$ so $\Phi$ is a group homomorphism by [L10]. [L2, L4, L7, L9, L10, step 2.1]

4.1 *The map is bijective and hence an isomorphism.* The formula for $\Phi$ is the composite of the bijection $S$ from step 1.2, the isomorphism $\iota^C_*$ from step 1.1, and inversion in $B_n^{\mathrm{conf}}$. Inversion is a bijection because applying it twice returns the original element. Thus $\Phi$ is bijective by [L11]; together with step 3.1 it is a group isomorphism by [L12]. This also proves the stated anti-isomorphism property of raw slicing. [L3, L5, L9, L11, L12, step 1.1, step 1.2, step 3.1]

5.1 *Boundary cases.* When $n=0$, [L13] gives the unique empty braid and [L14] gives singleton configuration spaces and one based motion; by [L3] and [L5], the class sets and inclusion map are also singletons. When $n=1$, [L13]–[L14] give no collision condition; the same tracing/slicing bijection, based inclusion isomorphism, and product calculation above apply. These cases require no additional choice or basepoint path. [L3, L5, L9, L13, L14, step 1.1, step 1.2, step 2.1, step 3.1, step 4.1] $$\square$$
