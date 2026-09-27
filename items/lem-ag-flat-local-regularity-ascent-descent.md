---
id: "lem-ag-flat-local-regularity-ascent-descent"
kind: "lemma"
title: "Regularity ascends and descends along a flat local homomorphism"
status: draft
origin: "pipeline"
deps: ["def-embedding-dimension-and-regular-local-ring", "def-regular-system-of-parameters", "thm-quotient-and-lifting-regularity-across-a-regular-element", "thm-faithfully-flat-ring-map-characterisations", "thm-localisation-and-flat-base-change-of-regular-sequences", "cor-regular-local-residue-field-projective-dimension-dimension", "lem-finite-local-modules-admit-minimal-free-resolutions", "def-flat-and-faithfully-flat-modules-and-ring-maps", "thm-right-exactness-of-tensor-products", "thm-projective-dimension-at-most-n-iff-the-nth-syzygy-is-projective", "thm-projective-modules-are-flat", "thm-finitely-generated-modules-over-noetherian-rings-are-noetherian", "thm-faithfully-flat-descent-of-flatness", "cor-finite-flat-noetherian-modules-are-projective", "thm-auslander-buchsbaum-serre-regularity-criterion", "cor-faithfully-flat-ring-maps-are-injective", "thm-regular-local-rings-are-domains-and-cohen-macaulay", "cor-noetherian-local-domain-dimension-zero-iff-field", "thm-proper-ideal-contained-in-maximal-ideal", "def-local-ring", "def-field", "def-axiom-of-choice"]
proof_strategy: "direct"
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Stacks Algebra 10.110.3, 10.133.4–5 (tags 00OF, 00OD, 00OE)"
      url: "https://stacks.math.columbia.edu/download/algebra.pdf"
    - title: "Vakil §26.2, pp.689–690"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf"
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let
$(R,\mathfrak m)\to(S,\mathfrak n)$ be a flat local homomorphism
([[def-flat-and-faithfully-flat-modules-and-ring-maps]]) of Noetherian local
rings, so that $S/\mathfrak mS$ is again a Noetherian local ring. Then:

1. **ascent.** if $R$ is a regular local ring and the closed fibre
   $S/\mathfrak mS$ is regular, then $S$ is regular;
2. **descent.** if $S$ is regular, then $R$ is regular.

No regularity of the closed fibre is assumed in the descent statement, and no
finiteness of the field extension $S/\mathfrak n$ over $R/\mathfrak m$ is
assumed anywhere.

## Facts & Assumptions

**Given:** A flat local homomorphism $(R,\mathfrak m)\to(S,\mathfrak n)$ of Noetherian local rings and the Axiom of Choice.

[F1] [[def-embedding-dimension-and-regular-local-ring]]: for a nonzero commutative Noetherian local ring $(R,\mathfrak m,k)$ one has $\operatorname{edim}R=\dim_k(\mathfrak m/\mathfrak m^2)$, and $R$ is regular local exactly when $\operatorname{edim}R=\dim R$.

[F2] [[def-regular-system-of-parameters]]: a regular system of parameters of a regular local ring of dimension $d$ is an ordered minimal generating tuple of its maximal ideal, of length $d$; the empty tuple when $d=0$.

[F3] [[thm-quotient-and-lifting-regularity-across-a-regular-element]]: under the Axiom of Choice, if $(R,\mathfrak m)$ is nonzero Noetherian local, $x\in\mathfrak m$ is a nonzerodivisor and $R/(x)$ is regular, then $R$ is regular.

[F4] [[thm-faithfully-flat-ring-map-characterisations]]: under the Axiom of Choice, a flat ring homomorphism $f\colon R\to S$ is faithfully flat if and only if for every proper ideal $I\subsetneq R$ the extended ideal $IS$ is proper.

[F5] [[thm-localisation-and-flat-base-change-of-regular-sequences]]: a regular sequence remains regular after faithfully flat base change.

[F6] [[cor-regular-local-residue-field-projective-dimension-dimension]]: under the Axiom of Choice, for a regular local ring $(R,\mathfrak m,k)$ of dimension $d$ one has $\operatorname{pd}_Rk=d$.

[F7] [[lem-finite-local-modules-admit-minimal-free-resolutions]]: under the Axiom of Choice, every finite module over a nonzero Noetherian local ring has a resolution by finite-rank free modules.

[F8] [[def-flat-and-faithfully-flat-modules-and-ring-maps]]: an $R$-module $M$ is flat when $-\otimes_RM$ preserves exact sequences, and a ring map is flat when the target is flat as a module over the source.

[F9] [[thm-right-exactness-of-tensor-products]]: $-\otimes_RM$ is right exact, so applying it to $R\to R/\mathfrak m\to0$ gives $(R/\mathfrak m)\otimes_RS\cong S/\mathfrak mS$.

[F10] [[thm-projective-dimension-at-most-n-iff-the-nth-syzygy-is-projective]]: for $n\ge1$ and a projective resolution $P_\bullet\to M$, one has $\operatorname{pd}(M)\le n$ if and only if the $n$-th syzygy is projective.

[F11] [[thm-projective-modules-are-flat]]: every projective module over a commutative ring is flat, with no use of the Axiom of Choice.

[F12] [[thm-finitely-generated-modules-over-noetherian-rings-are-noetherian]]: every finitely generated module over a Noetherian ring is Noetherian, so its submodules are finitely generated.

[F13] [[thm-faithfully-flat-descent-of-flatness]]: for a faithfully flat ring map $R\to S$ and an $R$-module $N$, the module $N$ is flat over $R$ if and only if $N\otimes_RS$ is flat over $S$.

[F14] [[cor-finite-flat-noetherian-modules-are-projective]]: a finite flat module over a Noetherian commutative ring is finite projective.

[F15] [[thm-auslander-buchsbaum-serre-regularity-criterion]]: under the Axiom of Choice, a nonzero Noetherian local ring is regular if and only if its global dimension is finite, and then the global dimension equals the projective dimension of the residue field and equals the dimension.

[F16] [[cor-faithfully-flat-ring-maps-are-injective]]: a faithfully flat ring homomorphism is injective.

[F17] [[thm-regular-local-rings-are-domains-and-cohen-macaulay]]: under the Axiom of Choice, a regular local ring is a domain, and every regular system of parameters is a regular sequence.

[F18] [[cor-noetherian-local-domain-dimension-zero-iff-field]]: a Noetherian local domain of dimension zero is a field.

[F19] [[thm-proper-ideal-contained-in-maximal-ideal]]: under the Axiom of Choice every proper ideal of a commutative ring is contained in a maximal ideal.

[F20] [[def-local-ring]]: a local ring has a unique maximal ideal, which contains every proper ideal.

[F21] [[def-field]]: a field is a nonzero commutative ring in which every nonzero element is a unit.



## Proof

1.1 The map is faithfully flat. Since the homomorphism is local, $\mathfrak mS\subseteq\mathfrak n\subsetneq S$; for every proper ideal $I\subsetneq R$ the ideal $I$ is contained in the maximal ideal $\mathfrak m$ by [F20], so $IS\subseteq\mathfrak mS$ is proper. Hence $R\to S$ is faithfully flat by [F4]. [F4, F20]

1.2 Descent, the case $d\ge1$: setting up the resolution. Assume $S$ regular of dimension $d\ge1$ and put $k:=R/\mathfrak m$. By [F7] choose a resolution $F_\bullet\to k\to0$ by finite free $R$-modules and let $\Omega$ be its $d$-th syzygy, a finitely generated $R$-module by [F12]. Tensoring with the flat $R$-module $S$ preserves exactness by [F8], and [F9] identifies the tensor of the augmentation with $S/\mathfrak mS$, so $F_\bullet\otimes_RS\to S/\mathfrak mS\to0$ is a free resolution of the $S$-module $S/\mathfrak mS$ whose $d$-th syzygy is $\Omega\otimes_RS$. [F7, F8, F9, F12, F1, F6]

2.1 Ascent, set-up. Assume $R$ regular of dimension $d$ with regular system of parameters $y_1,\dots,y_d$, so that $(y_1,\dots,y_d)=\mathfrak m$ by [F2]; if $d=0$ then $\mathfrak m=0$ and $S=S/\mathfrak mS$ is regular by hypothesis. For $d\ge1$, the parameters are an $R$-regular sequence by [F17]; hence [F5] and the faithful flatness of step 1.1 make $y_1,\dots,y_d$ an $S$-regular sequence, and $S/(y_1,\dots,y_d)S=S/\mathfrak mS$. [F2, F5, F17, step 1.1]

2.2 Descent, the case $d=0$. Assume now that $S$ is regular of dimension $d=0$. Then $S$ is a domain by [F17] and hence a field by [F18]. Because $R\to S$ is faithfully flat by step 1.1, the extension $\mathfrak mS$ is proper by [F4], and $\mathfrak mS$ is an ideal of the field $S$, so $\mathfrak mS=0$; moreover $R\to S$ is injective by [F16], so $\mathfrak m=0$. A nonzero element $x$ of the local ring $R$ is then a unit: otherwise $(x)$ would be a proper ideal, hence would lie in a maximal ideal by [F19], necessarily the unique maximal ideal $\mathfrak m=0$, forcing $x=0$. Thus $R$ is a field by [F21], in particular regular. [F4, F16, F17, F18, F19, F21, step 1.1]

2.3 Descent, the case $d\ge1$: the syzygy is projective. Since $S$ is regular local of dimension $d$, its global dimension is $d$ by [F15], so every $S$-module, in particular $S/\mathfrak mS$, has projective dimension at most $d$; by [F10] applied to the resolution of step 1.2, the $S$-module $\Omega\otimes_RS$ is projective, hence flat over $S$ by [F11]. [F10, F11, F15, step 1.2]

3.1 Ascent, induction. For $0\le i\le d$ put $S_i:=S/(y_1,\dots,y_i)S$, a nonzero Noetherian local ring, so that $S_0=S$, $S_d=S/\mathfrak mS$ and $S_i/(y_{i+1}S_i)\cong S_{i+1}$ for $i<d$ with the image of $y_{i+1}$ a nonzerodivisor on $S_i$. If $S_{i+1}$ is regular for some $0\le i<d$, then [F3] applied to the nonzero Noetherian local ring $S_i$ and the nonzerodivisor $y_{i+1}$ makes $S_i$ regular. Since $S_d=S/\mathfrak mS$ is regular by hypothesis when $d\ge1$, downward induction gives that $S=S_0$ is regular; together with the case $d=0$ of step 2.1 this proves the ascent claim. [F3, step 2.1]

3.2 Descent, conclusion. By [F13] and the faithful flatness of step 1.1, the finite $R$-module $\Omega$ is flat over $R$, hence finite projective by [F14]. Therefore the resolution $F_\bullet\to k$ of step 1.2 has projective $d$-th syzygy, so $\operatorname{pd}_Rk\le d$ by [F10], and [F15] makes the Noetherian local ring $R$ regular. Combined with step 2.2 this proves the descent claim for every $d$. [F10, F13, F14, F15, step 1.1, step 1.2, step 2.3]

4.1 Both claims are proved: the ascent in step 3.1 and the descent in steps 2.2 and 3.2; the case $d=0$ was separated out in steps 2.2 and 3.2 because [F10] requires $n\ge1$. ∎
