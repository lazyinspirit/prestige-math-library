---
id: cor-twist-exact-sequence-effective-divisor
kind: corollary
title: "Twisting the exact sequence of an effective Cartier divisor"
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - lem-effective-cartier-divisor-exact-sequence
  - def-invertible-sheaf
  - def-invertible-sheaf-of-cartier-divisor
  - lem-cartier-divisor-addition-tensor
  - lem-invertible-sheaf-dual-tensor-inverse
  - def-sheaf-tensor-product
  - def-sheaf-hom
  - thm-unit-isomorphisms-for-module-tensor-products
  - def-exact-sequence-sheaves
  - thm-exactness-of-sheaves-stalkwise
  - def-pullback-module-ringed-spaces
  - def-direct-image-sheaf
  - def-gluing-datum-sheaves
  - thm-gluing-sheaves
  - def-sheaf-on-topological-space
  - def-closed-immersion-schemes
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-10-02
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
sources:
  references:
    - title: "The Stacks Project, Divisors, §31.15 Remark 15.11 and Lemma 15.2"
      url: "https://stacks.math.columbia.edu/download/divisors.pdf"
    - title: "Ravi Vakil, The Rising Sea, Ch. 15 §§15.2–15.3"
      url: "https://math.stanford.edu/~vakil/216blog/FOAgoct2111public.pdf"
---

## Statement

Let $X$ be a scheme, let $i:D\hookrightarrow X$ be an effective Cartier divisor
with ideal sheaf $I_D$, so that $i$ is a closed immersion,
$\mathcal O_X(-D)=I_D$ is invertible and
$0\to\mathcal O_X(-D)\to\mathcal O_X\to i_*\mathcal O_D\to0$ is exact
([[lem-effective-cartier-divisor-exact-sequence]]), and let $\mathcal L$ be an
invertible $\mathcal O_X$-module
([[def-invertible-sheaf]]). Write
$$\mathcal L(-D)=\mathcal L\otimes_{\mathcal O_X}\mathcal O_X(-D),\qquad \mathcal L|_D=i^*\mathcal L$$
for the twist of $\mathcal L$ by $-D$ and the restriction of $\mathcal L$ to
$D$ ([[def-pullback-module-ringed-spaces]]). Then there is a short exact
sequence of $\mathcal O_X$-modules
$$0\longrightarrow\mathcal L(-D)\xrightarrow{\ \alpha\ }\mathcal L\xrightarrow{\ \beta\ }i_*(\mathcal L|_D)\longrightarrow0,$$
where $\alpha=\operatorname{id}_{\mathcal L}\otimes(\text{the inclusion }
I_D\subseteq\mathcal O_X)$ and $\beta$ is the tensor product of the quotient
map $\mathcal O_X\to i_*\mathcal O_D$ with $\operatorname{id}_{\mathcal L}$,
composed with the canonical isomorphism
$\mathcal L\otimes_{\mathcal O_X}i_*\mathcal O_D\cong i_*(\mathcal L|_D)$
constructed in the proof. The twist $\mathcal L(-D)$ is again invertible.

## Facts & Assumptions

**Given:** a scheme $X$, an effective Cartier divisor $i:D\hookrightarrow X$
with ideal sheaf $I_D$, and an invertible $\mathcal O_X$-module $\mathcal L$.

[F1] The divisor $i$ is a closed immersion with
$I_D=\mathcal O_X(-D)$ invertible, and
$0\to\mathcal O_X(-D)\to\mathcal O_X\to i_*\mathcal O_D\to0$ is a short exact
sequence of $\mathcal O_X$-modules, the first map being the inclusion of the
ideal sheaf and the second the quotient map of the closed immersion
([[lem-effective-cartier-divisor-exact-sequence]],
[[def-invertible-sheaf-of-cartier-divisor]],
[[def-closed-immersion-schemes]]).

[F2] An $\mathcal O_X$-module is invertible when it is locally free of rank
one; then $X$ is covered by open sets $U$ admitting a generator, equivalently
a trivialisation $\mathcal L|_U\cong\mathcal O_U$, restriction to an open
subscheme preserves invertibility, and the tensor product, dual and inverse of
invertible sheaves are again invertible
([[def-invertible-sheaf]], [[def-sheaf-hom]]).

[F3] For Cartier divisors $D,E$ there are canonical isomorphisms
$\mathcal O_X(D+E)\cong\mathcal O_X(D)\otimes\mathcal O_X(E)$ and
$\mathcal O_X(-D)\cong\mathcal O_X(D)^{\vee}$, and
$\mathcal O_X(0)=\mathcal O_X$
([[lem-cartier-divisor-addition-tensor]]).

[F4] For an invertible $\mathcal L$ the evaluation
$\mathcal L^{\vee}\otimes_{\mathcal O_X}\mathcal L\to\mathcal O_X$ is an
isomorphism, so $\mathcal L^{\vee}\otimes\mathcal L\cong\mathcal O_X$
canonically ([[lem-invertible-sheaf-dual-tensor-inverse]]).

[F5] The tensor product of $\mathcal O_X$-modules is the sheafification of the
objectwise tensor product, is functorial in each variable and compatible with
restriction to open subschemes; for an $\mathcal O_U$-module $\mathcal M$ the
unit map $\mathcal O_U\otimes_{\mathcal O_U}\mathcal M\to\mathcal M$ is an
isomorphism ([[def-sheaf-tensor-product]],
[[thm-unit-isomorphisms-for-module-tensor-products]]).

[F6] A sequence of sheaves of modules is exact when at each term the image
equals the kernel, and it is exact if and only if all of its stalk sequences
are exact ([[def-exact-sequence-sheaves]],
[[thm-exactness-of-sheaves-stalkwise]]).

[F7] For a morphism $f$ the pullback of an $\mathcal O_Y$-module is
$f^{*}\mathcal G=\mathcal O_X\otimes_{f^{-1}\mathcal O_Y}f^{-1}\mathcal G$,
the direct image is $(f_*\mathcal F)(V)=\mathcal F(f^{-1}V)$, and these
constructions are compatible with restriction: for an open $U\subseteq Y$ one
has $f^{*}(\mathcal G|_U)=f^{*}\mathcal G|_{f^{-1}U}$ and
$(f_*\mathcal F)|_U=f_*(\mathcal F|_{f^{-1}U})$
([[def-pullback-module-ringed-spaces]], [[def-direct-image-sheaf]]).

[F8] Local sheaves and local isomorphisms on an open cover which agree on the
overlaps, that is a gluing datum, glue to a sheaf, respectively to an
isomorphism of sheaves, uniquely
([[def-gluing-datum-sheaves]], [[thm-gluing-sheaves]],
[[def-sheaf-on-topological-space]]).

## Proof

1.1 By [F1] the ideal sheaf $I_D=\mathcal O_X(-D)$ is invertible and the sequence $0\to\mathcal O_X(-D)\to\mathcal O_X\to i_*\mathcal O_D\to0$ is exact, with the maps described there; $\mathcal L$ is invertible by hypothesis [F2]; write $\mathcal L(-D)=\mathcal L\otimes_{\mathcal O_X}\mathcal O_X(-D)$ and $\mathcal L|_D=i^*\mathcal L$. [F1, F2, F7, given]

1.2 Let $\mathcal A$ be the set of all pairs $(U,\tau)$ with $U\subseteq X$ open and $\tau:\mathcal L|_U\to\mathcal O_U$ an isomorphism of $\mathcal O_U$-modules; because $\mathcal L$ is locally free of rank one [F2], every point of $X$ lies in the first component of a member of $\mathcal A$, and $\mathcal A$ is determined by a formula, so no choice is used in indexing by it; for every member and every $\mathcal O_U$-module $\mathcal M$ the unit map $\mathcal O_U\otimes_{\mathcal O_U}\mathcal M\to\mathcal M$ is an isomorphism [F5]. [F2, F5]

2.1 Let $(U,\tau)\in\mathcal A$. Restriction commutes with tensor products and with the structure sheaf [F5], so $\tau\otimes\operatorname{id}$ identifies $(\mathcal L\otimes\mathcal O_X(-D))|_U$ with $\mathcal O_X(-D)|_U$ and $(\mathcal L\otimes i_*\mathcal O_D)|_U$ with $(i_*\mathcal O_D)|_U$, and the unit isomorphism identifies $\mathcal L|_U$ with the second term $\mathcal O_U$ of the restricted exact sequence; applying $(-)\otimes_{\mathcal O_X}\mathcal L$ to the exact sequence of step 1.1 therefore produces a sequence on $U$ isomorphic term by term, through these identifications, to the exact sequence of step 1.1 restricted to $U$, whence $0\to\mathcal L(-D)|_U\to\mathcal L|_U\to(\mathcal L\otimes i_*\mathcal O_D)|_U\to0$ is exact [F6]. [F5, F6, step 1.1]

2.2 **The canonical isomorphism $\mathcal L\otimes i_*\mathcal O_D\cong i_*(\mathcal L|_D)$.** For $(U,\tau)\in\mathcal A$, restricting $\tau$ to $i^{-1}U$ and using [F7] gives trivialisations $(\mathcal L|_D)|_{i^{-1}U}\cong i^*(\mathcal L|_U)\cong\mathcal O_{i^{-1}U}$ and $(i_*\mathcal O_D)|_U\cong i_*\mathcal O_{i^{-1}U}$; define $\varphi_{(U,\tau)}$ as the composite of $\tau\otimes\operatorname{id}$, the unit isomorphism and the direct image of the inverse trivialisation, an isomorphism $(\mathcal L\otimes i_*\mathcal O_D)|_U\to i_*(\mathcal L|_D)|_U$. If $(V,\sigma)$ is a second member and $\tau=v\,\sigma$ on $U\cap V$ with $v\in\mathcal O_X^{\times}(U\cap V)$, the factors $v$ and $v^{-1}$ cancel, so $\varphi_{(U,\tau)}$ and $\varphi_{(V,\sigma)}$ agree on the overlap and, by [F8], glue to a global isomorphism $\varphi:\mathcal L\otimes_{\mathcal O_X}i_*\mathcal O_D\to i_*(\mathcal L|_D)$ independent of the chosen trivialisations. [F2, F5, F7, F8, step 1.2]

2.3 Applying $(-)\otimes_{\mathcal O_X}\mathcal L^{\vee}$ to the exact sequence of step 1.1 and using [F4] and [F3], $\mathcal L(-D)\otimes\mathcal L^{\vee}\cong(\mathcal L\otimes\mathcal L^{\vee})\otimes\mathcal O_X(-D)\cong\mathcal O_X(-D)$; as $\mathcal L$ and $\mathcal O_X(-D)$ are invertible, so is the tensor product $\mathcal L(-D)$ [F2]. [F2, F3, F4, step 1.1]

3.1 Let $\alpha=\operatorname{id}_{\mathcal L}\otimes(\text{the inclusion }I_D\subseteq\mathcal O_X)$ and let $\beta$ be the composite of $\operatorname{id}_{\mathcal L}\otimes(\text{the quotient }\mathcal O_X\to i_*\mathcal O_D)$ with $\varphi$; on a member $(U,\tau)$ of the cover these maps correspond, under the identifications of step 2.1, to the maps of the exact sequence of step 1.1 restricted to $U$, so the sequence $0\to\mathcal L(-D)\to\mathcal L\to i_*(\mathcal L|_D)\to0$ has exact restriction to every member of the cover; since every point of $X$ lies in such a $U$, all stalk sequences are exact and the sequence is exact by [F6]. [F6, step 2.1, step 2.2]

4.1 Hence the $\mathcal O_X$-modules form the short exact sequence $0\to\mathcal L(-D)\to\mathcal L\to i_*(\mathcal L|_D)\to0$ with the maps $\alpha$ and $\beta$ described, and the twist $\mathcal L(-D)$ is invertible by step 2.3. [step 2.3, step 3.1] ∎

No choice principle is used: the cover is the formula-determined set $\mathcal A$
of all trivialisations of $\mathcal L$ on opens, and the isomorphisms glue
uniquely. For the zero effective divisor $D=\varnothing$ one has
$I_D=\mathcal O_X$, $i_*\mathcal O_D=0$ and $\mathcal O_X(-D)=\mathcal O_X$, so
$\mathcal L(-D)=\mathcal L$ and the sequence reads
$0\to\mathcal L\to\mathcal L\to0\to0$; if $X=\varnothing$ all terms are the
zero sheaf and the sequence is exact. Taking $\mathcal L=\mathcal O_X$
recovers the untwisted sequence of
[[lem-effective-cartier-divisor-exact-sequence]].
