---
id: thm-qc-ideal-closed-subscheme-correspondence-complete
kind: theorem
title: Quasi-coherent ideals and closed subschemes, complete route
status: published
origin: pipeline
deps:
  - def-quasi-coherent-module-scheme
  - thm-affine-quasi-coherent-equivalence
  - def-quasi-coherent-ideal-sheaf
  - def-closed-immersion-schemes
  - def-direct-image-sheaf
  - lem-closed-immersion-affine-quotient-and-base-change
  - def-axiom-of-choice
  - def-associated-sheaf-module-affine-scheme
  - thm-associated-module-sheaf-exists
  - thm-localisation-of-modules-commutes-with-quotients-and-sums
  - lem-associated-sheaf-stalk-localization
  - def-support-module-sheaf
  - thm-prime-spectrum-of-a-quotient-bijection
  - def-scheme
  - def-module-on-ringed-space
  - def-sheaf-on-topological-space
justified_by: []
landmark: true
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Schemes, §§26.5, 26.7, 26.24"
      url: "https://stacks.math.columbia.edu/download/schemes.pdf"
    - title: "Ravi Vakil, The Rising Sea, 29 August 2022, Chapters 6, 14, 17"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf"
pipeline_run: frontier-36-complete
---

## Statement

Assume the Axiom of Choice as used by the affine quotient supplier recorded
in [F6] below. Call an **ideal sheaf** on a scheme $X$ a subsheaf
$\mathcal I\subseteq\mathcal O_X$ of the structure sheaf which is an ideal in
every section ring; it is a **quasi-coherent ideal sheaf** when it is
quasi-coherent as an $\mathcal O_X$-module
([[def-quasi-coherent-module-scheme]], [[def-quasi-coherent-ideal-sheaf]]).

Then for every scheme $X$ the two constructions

$$\mathcal I\;\longmapsto\;Z_{\mathcal I}:=\bigl(V(\mathcal I),\,(\mathcal O_X/\mathcal I)|_{V(\mathcal I)}\bigr),\qquad V(\mathcal I)=\{x\in X:\mathcal I_x\neq\mathcal O_{X,x}\},$$

and, for a closed immersion $i:Z\to X$
([[def-closed-immersion-schemes]]),

$$i\;\longmapsto\;K_Z:=\ker\bigl(\mathcal O_X\to i_*\mathcal O_Z\bigr),$$

are mutually inverse bijections between

- quasi-coherent ideal sheaves $\mathcal I\subseteq\mathcal O_X$, and
- closed subschemes $Z\hookrightarrow X$, that is, isomorphism classes of
  closed immersions $i:Z\to X$,

with $Z_{\mathcal I}$ a closed subscheme of $X$, $K_Z$ a quasi-coherent ideal
sheaf, $K_{Z_{\mathcal I}}=\mathcal I$ and $Z_{K_Z}\cong Z$ over $X$. The
correspondence includes the empty subscheme: $\mathcal I=\mathcal O_X$
corresponds to $\varnothing$, and conversely the empty closed subscheme has
$K_Z=\mathcal O_X$.

The proof uses the batch-5 supplier [F6] for the affine-quotient direction and
makes no use of the published correspondence theorem or the published
affine-quotient theorem of the earlier run.

## Facts & Assumptions

**Given:** The Axiom of Choice; a scheme $X$; a quasi-coherent ideal sheaf
$\mathcal I\subseteq\mathcal O_X$; and a closed immersion $i:Z\to X$.

[F1] Affine equivalence: on an affine scheme $U=\operatorname{Spec}A$ every
quasi-coherent module is canonically the associated sheaf of its global
sections, $\mathcal F\cong\widetilde{\Gamma(U,\mathcal F)}$, and
$\operatorname{Hom}_A(M,N)\cong\operatorname{Hom}_{\mathcal O_U}(\widetilde M,\widetilde N)$
([[thm-affine-quasi-coherent-equivalence]]).

[F2] For an ideal $J\subseteq A$ localisation commutes with the quotient, so
$(A/J)_f=A_f/J_f$ for every $f\in A$; consequently
$\widetilde{A/J}=\mathcal O_U/\widetilde J$ on every distinguished open, its
stalk at $\mathfrak p$ is $A_{\mathfrak p}/J_{\mathfrak p}$, and
$\operatorname{Supp}(\widetilde{A/J})=V(J)=\{\mathfrak p:J\subseteq\mathfrak p\}$
([[thm-localisation-of-modules-commutes-with-quotients-and-sums]],
[[lem-associated-sheaf-stalk-localization]],
[[def-associated-sheaf-module-affine-scheme]],
[[thm-associated-module-sheaf-exists]], [[def-support-module-sheaf]]).

[F3] Prime ideals of $A/J$ correspond by contraction exactly to primes of $A$
containing $J$, so $\operatorname{Spec}(A/J)\to\operatorname{Spec}A$ is a
homeomorphism onto the closed set $V(J)$
([[thm-prime-spectrum-of-a-quotient-bijection]]).

[F4] The direct image of a sheaf satisfies
$(i_*\mathcal G)(V)=\mathcal G(i^{-1}(V))$, and the structure map of a closed
immersion is a surjection $\mathcal O_X\to i_*\mathcal O_Z$ whose underlying
map is a homeomorphism onto a closed subset
([[def-direct-image-sheaf]], [[def-closed-immersion-schemes]]).

[F5] A locally ringed space is a scheme as soon as every point has an open
neighbourhood isomorphic, as a locally ringed space, to an affine scheme; the
empty locally ringed space is a scheme
([[def-scheme]], [[def-sheaf-on-topological-space]],
[[def-module-on-ringed-space]]).

[F6] **Batch-5 supplier (exact statement used):** assume AC; let $i:Z\to Y$ be a
closed immersion. For every affine open $U=\operatorname{Spec}A$ of $Y$ there is
a unique ideal $I\subseteq A$ such that over $U$ one has
$i^{-1}(U)\cong\operatorname{Spec}(A/I)$; conversely every quotient map
$A\to A/I$ induces a closed immersion $\operatorname{Spec}(A/I)\to\operatorname{Spec}A$;
every base change of a closed immersion is a closed immersion; in particular
the empty subscheme of $\operatorname{Spec}A$ corresponds to $I=A$. This
supplier gives the affine quotient and its unique ideal used in step 1.2;
the empty case is used in step 4.1
([[lem-closed-immersion-affine-quotient-and-base-change]]).

[F7] The Axiom of Choice, used exactly as inherited through [F1], [F2] and
[F6]; no other choice principle is used
([[def-axiom-of-choice]]).



**Proof technique:** direct; construct the closed subscheme of a quasi-coherent ideal sheaf as the globally defined closed ringed subspace with structure sheaf $\mathcal O_X/\mathcal I$, verify it is locally affine, and invert the construction using the affine-quotient description of closed immersions from the batch-5 supplier.

## Proof

1.1 An ideal sheaf on an affine chart is associated to its global sections: let $U=\operatorname{Spec}A$ be an affine open and let $\mathcal I\subseteq\mathcal O_X$ be a quasi-coherent ideal sheaf; put $J=\Gamma(U,\mathcal I)$, which is an ideal of $A=\Gamma(U,\mathcal O_X)$ because $\mathcal I$ is an ideal in every section ring. By [F1] applied to the quasi-coherent module $\mathcal I|_U$, the canonical comparison $\widetilde J\to\mathcal I|_U$ is an isomorphism, and naturality of the comparison with respect to the inclusion $\mathcal I\subseteq\mathcal O_X$ shows that it is an isomorphism of subsheaves of $\mathcal O_U=\widetilde A$; hence $\mathcal I|_U=\widetilde J$ and, by [F2], the stalk criterion $\mathcal I_{\mathfrak p}\neq\mathcal O_{U,\mathfrak p}$ holds exactly for $\mathfrak p\in V(J)$, so $V(\mathcal I)\cap U=V(J)$ and $V(\mathcal I)$ is closed in $X$ because the affine charts cover $X$. [F1, F2]

1.2 The kernel of a closed immersion is a quasi-coherent ideal sheaf: let $i:Z\to X$ be a closed immersion and put $K=\ker(\mathcal O_X\to i_*\mathcal O_Z)$, computed as a kernel of sheaves, so that $K$ is a subsheaf of $\mathcal O_X$ and an ideal in every section ring. Let $U=\operatorname{Spec}A$ be an affine open of $X$; by the batch-5 supplier [F6] there is an ideal $J\subseteq A$ with $i^{-1}(U)\cong\operatorname{Spec}(A/J)$ and with $i|_U$ the quotient map, so over $U$ the structure map is $\widetilde A\to\widetilde{A/J}$ and [F2] identifies its kernel with $\widetilde J$; hence $K|_U=\widetilde J$ is associated, and because the affine charts cover $X$ the ideal sheaf $K$ satisfies the local definition of quasi-coherence. The uniqueness of $J$ in [F6] shows in addition that the local descriptions agree on overlaps, so $K$ is well defined independently of the charts. This is the exact point where the batch-5 supplier is consumed. [F2, F6]

2.1 The affine model of the construction: with $J=\Gamma(U,\mathcal I)$ as in step 1.1, [F2] identifies the quotient $\mathcal O_U/\mathcal I|_U=\mathcal O_U/\widetilde J$ with $\widetilde{A/J}$, and [F3] identifies $\operatorname{Spec}(A/J)$ with the closed subset $V(J)$; the sections of both structure sheaves on the distinguished open $D(\bar f)\subseteq\operatorname{Spec}(A/J)$ corresponding to $D(f)\cap V(J)$ are $(A/J)_f=A_f/J_f$, so the locally ringed space $(V(J),(\mathcal O_U/\widetilde J)|_{V(J)})$ is isomorphic to the affine scheme $\operatorname{Spec}(A/J)$. Consequently every point of $V(\mathcal I)$ has an open neighbourhood in the closed ringed subspace $Z_{\mathcal I}=(V(\mathcal I),(\mathcal O_X/\mathcal I)|_{V(\mathcal I)})$ isomorphic to an affine scheme, and by [F5] the space $Z_{\mathcal I}$ is a scheme. [F2, F3, F5, step 1.1]

2.2 The closed immersion is recovered from its kernel: with $K=K_Z$ as in step 1.2, the map $\mathcal O_X\to i_*\mathcal O_Z$ is surjective by the definition of a closed immersion, so it induces an isomorphism of sheaves of rings $\mathcal O_X/K\cong i_*\mathcal O_Z$; moreover $V(K)=\{x:K_x\neq\mathcal O_{X,x}\}=\{x:(i_*\mathcal O_Z)_x\neq0\}$ because $K_x$ is the kernel of the surjection $\mathcal O_{X,x}\to(i_*\mathcal O_Z)_x$, and this set is the image of $i$: for $x=i(z)$ the stalk $(i_*\mathcal O_Z)_x$ is the local ring $\mathcal O_{Z,z}$, which is nonzero for every point of a scheme, while for $x$ outside the closed image the stalk is $0$. Hence the canonical map $Z\to Z_{K}$ (identity on the underlying spaces, the isomorphism $\mathcal O_X/K\cong i_*\mathcal O_Z$ on structure sheaves) is an isomorphism of closed subschemes of $X$ over $X$. [F4, F5, step 1.2]

3.1 $Z_{\mathcal I}$ is a closed subscheme with kernel $\mathcal I$: the inclusion $i:Z_{\mathcal I}\to X$ is a homeomorphism onto the closed subset $V(\mathcal I)$ by construction. On each affine chart $U=\operatorname{Spec}A$, step 1.1 gives $\mathcal I|_U=\widetilde J$ and step 2.1 identifies $Z_{\mathcal I}\cap U$ with $\operatorname{Spec}(A/J)$. On every distinguished open $D(f)\subseteq U$, both $(\mathcal O_U/\widetilde J)(D(f))$ and $(i_*\mathcal O_{Z_{\mathcal I}})(D(f))$ are $(A/J)_f$ by [F2], [F4] and step 2.1. Since distinguished opens form a basis, the natural map $\mathcal O_X/\mathcal I\to i_*\mathcal O_{Z_{\mathcal I}}$ is an isomorphism of sheaves. Thus $\mathcal O_X\to i_*\mathcal O_{Z_{\mathcal I}}$ is surjective and $i$ is a closed immersion by [F4], with kernel $\mathcal I$. In the extreme case $\mathcal I=\mathcal O_X$ the quotient is the zero sheaf, whose support is $\varnothing$, giving the empty subscheme; for $\mathcal I=0$ the immersion is the identity of $X$. This constructs $\mathcal I\mapsto Z_{\mathcal I}$ with the asserted properties. [F2, F4, F5, step 1.1, step 2.1]

4.1 The two constructions are inverse bijections: starting from a quasi-coherent ideal sheaf $\mathcal I$, step 3.1 gives $K_{Z_{\mathcal I}}=\ker(\mathcal O_X\to\mathcal O_X/\mathcal I)=\mathcal I$, including $\mathcal I=\mathcal O_X$; starting from a closed immersion $i:Z\to X$, step 1.2 gives a quasi-coherent ideal sheaf $K_Z$ and step 2.2 gives $Z_{K_Z}\cong Z$ over $X$. Hence $\mathcal I\mapsto Z_{\mathcal I}$ and $Z\mapsto K_Z$ are mutually inverse bijections between quasi-coherent ideal sheaves and closed subschemes, and the empty subscheme is covered by the case $\mathcal I=\mathcal O_X$ on the one side and by the empty closed immersion, whose kernel is $\mathcal O_X$, on the other. [F6, step 3.1, step 1.2, step 2.2]

5.1 Choice accounting: the forward construction is a globally defined ringed subspace, so it involves neither a choice of charts nor a gluing; the Axiom of Choice enters only through the associated-sheaf and affine-equivalence machinery in [F1] and [F2] and through the batch-5 supplier [F6] in step 1.2, and it is stated in the hypothesis. No use is made of the published correspondence theorem or the published affine-quotient theorem of the earlier run. [F1, F2, F6, F7, step 1.2] ∎
