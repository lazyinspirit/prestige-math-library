---
id: lem-integral-quasicoherent-algebra-finite-subalgebra-filtration
kind: lemma
title: "Integral quasi-coherent algebras over qcqs bases are unions of finite subalgebras"
status: draft
origin: pipeline
deps:
  - def-axiom-of-choice
  - def-quasi-compact-and-quasi-separated-scheme
  - def-affine-local-quasi-coherent-algebra
  - thm-localisation-of-modules-is-exact
  - lem-algebra-generated-by-finitely-many-integral-elements-is-module-finite
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
sources:
  references:
    - title: "The Stacks Project, Properties of Schemes, Lemma 28.23.13 (tag 0817) and Section 28.23"
      url: https://stacks.math.columbia.edu/tag/0817
---

## Statement

Assume the Axiom of Choice (AC). Let $S$ be a quasi-compact and
quasi-separated scheme ([[def-quasi-compact-and-quasi-separated-scheme]]) and
let $\mathcal A$ be an integral affine-local quasi-coherent
$\mathcal O_S$-algebra ([[def-affine-local-quasi-coherent-algebra]]). Then
$\mathcal A$ is the filtered union of its finite quasi-coherent
$\mathcal O_S$-subalgebras: every finite set of local sections of $\mathcal A$
over affine opens, together with finitely many monic integrality certificates
for them, is contained in a single finite quasi-coherent subalgebra once the
sections are read on a finite affine cover.

'Integral' and 'finite' are the affine-local conditions of
[[def-affine-local-quasi-coherent-algebra]]: on every affine open, the algebra
is the module-associated sheaf of an integral, respectively a module-finite,
algebra over the section ring. This is part (1) of Stacks Project, Properties
of Schemes, Lemma 28.23.13 (tag 0817). The qcqs sheaf extension argument
needed for this claim is proved explicitly below.

## Facts & Assumptions
**Given:** The data and hypotheses displayed in the Statement, with the conventions fixed there.

[F1] Assume the Axiom of Choice; it is used in this item only to choose finite affine covers and finite generating sets ([[def-axiom-of-choice]]).

[F2] $S$ is quasi-compact when every open cover has a finite subcover and quasi-separated when the intersection of two quasi-compact opens is quasi-compact; in particular a quasi-compact scheme with affine diagonal has a finite affine open cover with all pairwise intersections quasi-compact ([[def-quasi-compact-and-quasi-separated-scheme]]).

[F3] An affine-local quasi-coherent $\mathcal O_S$-algebra restricts over each affine open $U=\operatorname{Spec}R$ to the module-associated sheaf $\widetilde{B_U}$ of an $R$-algebra $B_U$, with restriction to $D(r)$ given by localisation $B_U\to B_U[\varphi(r)^{-1}]$ ([[def-affine-local-quasi-coherent-algebra]]).

[F6] If an algebra is generated over its base ring by finitely many elements each of which is integral over the base, then it is module-finite over the base ([[lem-algebra-generated-by-finitely-many-integral-elements-is-module-finite]]).

[F7] Let $V=\operatorname{Spec}R$ and let $\widetilde M,\widetilde N$ be module-associated sheaves with a sheaf map induced on sections by $\phi:M\to N$. Naturality with restriction makes its map on each $D(r)$ the localization $\phi_r:M_r\to N_r$. Exactness of localization ([[thm-localisation-of-modules-is-exact]]) gives $(\ker\phi)_r=\ker\phi_r$ and $(\operatorname{im}\phi)_r=\operatorname{im}\phi_r$; localization also commutes with finite direct sums. Therefore kernels, images and finite sums of locally module-associated sheaves are again locally module-associated, hence quasi-coherent.



## Proof

**Proof technique:** direct.

1.1 Fix a finite affine open cover $S=U_1\cup\dots\cup U_n$ with each $U_i=\operatorname{Spec}R_i$ and with all intersections $U_i\cap U_j$ quasi-compact; such a cover exists by [F2]. On $U_i$ the algebra is $\mathcal A|_{U_i}=\widetilde{A_i}$ for an integral $R_i$-algebra $A_i$ by [F3]. Keep the affine domain of each specified local section in a finite working family; on each such domain the section generates a finite-type submodule. Coefficients of monic certificates lie in the structure sheaf and belong to every $\mathcal O_S$-subalgebra. Only finitely many affine domains and choices occur. [F2, F3]

1.2 Quasi-compact open pushforward. Let $j:U\hookrightarrow S$ be a quasi-compact open immersion and $\mathcal G$ a quasi-coherent module on $U$. On any affine $V=\operatorname{Spec}R\subseteq S$, the intersection $W=U\cap V$ is quasi-compact because $S$ is quasi-separated. Choose finitely many principal opens $D(f_i)$ of $V$ covering $W$. The sheaf equalizer computes $\Gamma(W,\mathcal G)$ from the finite product of $\Gamma(D(f_i),\mathcal G)$ and the finite product of $\Gamma(D(f_if_j),\mathcal G)$. For $r\in R$, localization at $r$ is exact and commutes with these finite products; using quasi-coherence on each principal open, the localized equalizer is the equalizer for the cover $D(rf_i)$ of $W\cap D(r)$. Thus $\Gamma(W,\mathcal G)_r\cong\Gamma(W\cap D(r),\mathcal G)$. This is exactly the affine-local criterion that $j_*\mathcal G$ is quasi-coherent. [F2, F3, F7]

2.1 Extension of a quasi-coherent subsheaf. Suppose $\mathcal G\subseteq\mathcal F|_U$ with $U$ quasi-compact open and $\mathcal F$ quasi-coherent on $S$. The maps $\mathcal F\oplus j_*\mathcal G\to j_*j^*\mathcal F$, $(a,b)\mapsto a|_U-b$, are maps of quasi-coherent modules by step 1.2. Their kernel $\mathcal H$ is quasi-coherent by [F7]. Its projection to $\mathcal F$ is injective, since $j_*\mathcal G\to j_*j^*\mathcal F$ is injective, and on $U$ its image is precisely $\mathcal G$. Hence $\mathcal G$ extends to a quasi-coherent subsheaf $\mathcal H\subseteq\mathcal F$. [F7, step 1.2]

3.1 Finite-type extension. Assume $\mathcal G$ in step 2.1 is of finite type. Add one affine $V=\operatorname{Spec}R$ to $U$ at a time from a finite affine cover of $S$. Apply step 2.1 over $U\cup V$ to obtain an extension $\mathcal H\subseteq\mathcal F$. Write $\mathcal H|_V=\widetilde M$. The quasi-compact intersection $U\cap V$ has a finite principal cover $D(f_i)$. Since $\mathcal G$ is finite type there, each $M_{f_i}$ has finitely many generators; choose numerator representatives in $M$ for all of them and let $M'\subseteq M$ be the finite submodule they generate. Then $M'_{f_i}=M_{f_i}$ for each $i$, so $\widetilde{M'}$ and $\mathcal G$ agree on $U\cap V$ and glue to a finite-type quasi-coherent subsheaf of $\mathcal F$ on $U\cup V$. Finite induction over the affine cover extends $\mathcal G$ to all of $S$. [F1, F2, F3, F7, step 2.1]

4.1 Finite-type submodules and subalgebras. Any local section of a quasi-coherent module $\mathcal F$ over an affine open $U$ lies in the finite-type submodule generated by it on $U$; step 3.1 extends that submodule to a finite-type quasi-coherent subsheaf of $\mathcal F$ on $S$. Finite sums give one such subsheaf containing any finite family of local sections. For the quasi-coherent algebra $\mathcal A$, take the subalgebra generated by such a finite-type submodule and $1$: on every affine chart it has finitely many algebra generators, and localization commutes with forming the algebra generated by a module, so these chart subalgebras glue as a finite-type quasi-coherent subalgebra. Finite joins of these subalgebras are again finite type, so they form a filtered system whose union is $\mathcal A$. [F3, F7, step 3.1]

5.1 Every member of the filtered system in step 4.1 is finite over $\mathcal O_S$. Indeed, on an affine open $V=\operatorname{Spec}R$ it has finitely many algebra generators, each integral over $R$ because $\mathcal A$ is integral. By [F6] the resulting $R$-algebra is finite as an $R$-module. Thus the system is a filtered union of finite quasi-coherent subalgebras. For the finite set of sections and coefficients in the Statement, step 4.1 supplies a common finite-type subalgebra, and the preceding argument makes it finite. [F3, F6, step 4.1]

6.1 The construction works on a finite affine cover from step 1.1 and contains each specified local section and certificate by step 5.1. The empty family uses the subalgebra generated by $1$, which is finite; the zero-ring chart gives a zero algebra and causes no exception. AC enters only in selecting the finite affine covers, generators and representatives in steps 1.1–3.1 and in [F6]. No Noetherian or separated hypothesis beyond qcqs is used. [F1, F2, F6, step 1.1, step 3.1, step 5.1]

$\square$
