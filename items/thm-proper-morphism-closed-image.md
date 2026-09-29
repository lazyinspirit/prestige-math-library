---
id: thm-proper-morphism-closed-image
kind: theorem
title: Proper morphisms are closed
status: draft
origin: pipeline
deps:
  - def-proper-morphism
  - def-universally-closed-morphism
  - def-base-change-morphism-schemes
  - def-fibre-product-schemes-universal-property
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
sources:
  references:
    - title: "The Stacks Project, Morphisms of Schemes, Definition 29.42.1 (tag 01W0) and Section 29.41"
      url: https://stacks.math.columbia.edu/tag/01W0
    - title: "Vakil, The Rising Sea, Proposition 11.3.2 and the discussion of properness in §11.3"
      url: https://math.stanford.edu/~vakil/216blog/FOAGoct2111public.pdf
---

## Statement

Let $f:X\to S$ be a proper morphism of schemes. Then $f$ is a closed map of
topological spaces: for every closed subset $Z\subseteq|X|$ its image $f(Z)$ is
closed in $|S|$. In particular $f(X)$ is closed. Moreover, for every $S$-scheme
$T$ the base-changed projection
$$f_T:X\times_S T\longrightarrow T$$
is closed, so the image of $X\times_S T$, and of any closed subset of it, is
closed in $|T|$.

## Facts & Assumptions

**Given:** A proper morphism $f:X\to S$ and an arbitrary morphism $T\to S$.

[F1] A morphism of schemes $f:X\to S$ is **proper** if and only if it is separated, of finite type, and universally closed. ([[def-proper-morphism]])

[F2] A morphism $f:X\to S$ is **universally closed** if for every $S$-scheme $T$ the base-changed projection $f_T:X\times_S T\to T$ is a closed map, and explicitly, for every closed subset $Z\subseteq |X_T|$, its image $f_T(|Z|)$ is closed in $|T|$. ([[def-universally-closed-morphism]])

[F3] For an $S$-scheme $f:X\to S$ and a morphism $h:S'\to S$, the **base change** is $X_{S'}=X\times_S S'$, with structure map the second projection. ([[def-base-change-morphism-schemes]])

[F4] A fibre product of $X\to S\leftarrow Y$ is a scheme $P$ with projections $p:P\to X$ and $q:P\to Y$ such that for every morphism $a:T\to X$ and $b:T\to Y$ with $fa=gb$ there is exactly one $h:T\to P$ satisfying $ph=a$ and $qh=b$. ([[def-fibre-product-schemes-universal-property]])

## Proof

**Proof technique:** direct: closedness is universal closedness read at the identity base change.

1.1 Since $f$ is proper, [F1] makes it universally closed, and in particular of finite type; only universal closedness is used below. [F1]

1.2 Take the $S$-scheme $T=S$, with structure morphism the identity, so that [F3] identifies the base-changed projection with $q:X\times_S S\to S$. By [F2] this $q$ is a closed map. The universal property [F4] applies to $f:X\to S$ and the identity $g=\operatorname{id}_S$ with test morphisms $a=\operatorname{id}_X$ and $b=f$: the required identity $f\circ a=\operatorname{id}_S\circ f$ holds, so there is a unique $u:X\to X\times_S S$ with $p\circ u=\operatorname{id}_X$ and $q\circ u=f$. The same universal property applied to $p$ and $q$ in place of $a$ and $b$ shows that $u\circ p$ and $\operatorname{id}_{X\times_S S}$ have the same composites with $p$ and $q$, hence $u\circ p$ is the identity and $u$ is an isomorphism. Therefore $f=q\circ u$ is closed, so the image of every closed $Z\subseteq|X|$ is closed in $|S|$; taking $Z=|X|$ gives that $f(X)$ is closed. [F2, F3, F4]

1.3 Now let $T\to S$ be any $S$-scheme. By [F2] the projection $f_T:X\times_S T\to T$ is closed, which by [F3] is exactly the assertion that the base change of $f$ along $T\to S$ maps closed subsets of $X\times_S T$ to closed subsets of $|T|$. In particular the image of the closed subset $X\times_S T$ itself is closed in $|T|$, and the same holds for every closed subset. [F2, F3]

If $X$ is empty, then every image is empty and closed, and if $S$ is empty the identity base-change case of step 1.2 is the empty morphism; both are covered by the same argument. No step uses a choice principle, a Noetherian hypothesis, or a separatedness hypothesis beyond the one hidden in properness. ∎
