---
id: ex-green-correspondence-for-a-trivial-intersection-subgroup
kind: example
title: Green correspondence for a trivial intersection subgroup
status: draft
origin: pipeline
deps: [thm-green-correspondence-with-exceptional-families, lem-green-exceptional-family-containment-and-fusion, thm-higman-criterion-for-relative-projectivity, def-relative-projectivity, thm-green-vertex-source-existence-and-conjugacy, def-axiom-of-choice, lem-relative-projectivity-mackey-intersections-for-finite-modules]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Saunders, Modular Representation Theory, Lemmas 4.18–4.19 and 4.35–4.38, Theorem 4.34
      url: https://jpsaunders.uk/ModRep/NotesWebsite.pdf
    - title: Lassueur–Farrell, Chapter 7, §29, Theorem 29.4 and proof
      url: https://www.niamhfarrell.com/uploads/6/9/2/8/69286633/upload2.pdf
proof_strategy: direct
---

## Example

Assume AC. Let $G$ be finite, $k$ a field of characteristic $p>0$, $P$ a nontrivial Sylow $p$-subgroup, and $H=N_G(P)$. Assume that $P$ is a trivial-intersection subgroup: $P\cap{}^gP=1$ whenever $g\notin N_G(P)$. If $H<G$, Green correspondence matches all nonprojective indecomposable finite-dimensional $G$- and $H$-modules, and both error modules are projective. If $H=G$, the correspondence is the identity; its restriction to nonprojective modules is also the identity.

## Facts & Assumptions

**Given:** This TI Sylow subgroup and normalizer.

[A1] AC ([[def-axiom-of-choice]]) is retained for the inherited decomposition argument and the general relative-$1$/projective comparison.

[F1] The full Green theorem gives inverse maps on $\mathcal Z$-vertex classes and the indicated error families ([[thm-green-correspondence-with-exceptional-families]]).

[F2] Exceptional containment and admissibility have the properties in [[lem-green-exceptional-family-containment-and-fusion]].

[F3] The relative trace criterion holds ([[thm-higman-criterion-for-relative-projectivity]]).

[F4] Under AC, relative $1$-projectivity is equivalent to projectivity ([[def-relative-projectivity]]).

[F5] Vertices exist and are conjugate ([[thm-green-vertex-source-existence-and-conjugacy]]).

[F6] A vertex of a relatively $B$-projective module lies in a conjugate of $B$ ([[lem-relative-projectivity-mackey-intersections-for-finite-modules]]).

## Verification

1.1 Suppose $H<G$. For every $g\notin H$, TI gives $P\cap{}^gP=1$. Also $D=H\cap{}^gP$ is a $p$-subgroup of $H$. Since $P\triangleleft H$, the image of $D$ in $H/P$ has order a power of $p$ dividing $[H:P]$, which is prime to $p$. These divisibilities follow by partitioning each finite group into cosets of the relevant subgroup. Hence that image is trivial and $D\leq P$. It follows that $D\leq P\cap{}^gP=1$. As $G\setminus H$ is nonempty, we obtain exactly $\mathcal X=\mathcal Y=\{1\}$. Their excluded conjugate-containment class consists only of the trivial subgroup, so $\mathcal Z=\{Q\leq P:Q\ne1\}$. [F1, F2, given, algebra]

1.2 For $K=G$ or $H$, the index $[K:P]$ is invertible in $k$. On any $kK$-module $V$, the relative trace of $[K:P]^{-1}\operatorname{id}_V$ is $\operatorname{id}_V$, since all its conjugates are the same scalar identity. F3 makes every such module relatively $P$-projective. For nonzero indecomposable $V$, F5 and F6 then permit a vertex lying inside $P$. [F3, F5, F6, given, algebra]

2.1 Under A1 and F4, an indecomposable module with vertex $1$ is projective. Conversely a projective indecomposable is relatively $1$-projective, so $1$ itself is a minimal inducing $p$-subgroup, hence a vertex. Thus having a nontrivial vertex is equivalent to being nonprojective. Combining 1.1–1.2, the full $\mathcal Z$-vertex domains in F1 are exactly the nonprojective indecomposables on both sides. The full theorem, not merely its fixed-P corollary, therefore gives the asserted bijection. [A1, F1, F4, step 1.1, step 1.2]

3.1 The errors in F1 are relatively $\{1\}$-projective by 1.1. Each of their finitely many indecomposable summands is projective by F4, hence the errors are projective: a finite sum of projectives lifts maps across surjections by lifting each component separately. If $H=G$, the exceptional families instead are empty, both errors vanish and F1 gives the identity correspondence. It restricts to the identity on nonprojective modules. Zero errors are allowed, but zero is outside the indecomposable domains. We make no assertion that the projective summands of an error are mutually isomorphic. [F1, F4, step 1.1, step 2.1] ∎
