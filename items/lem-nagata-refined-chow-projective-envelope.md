---
id: lem-nagata-refined-chow-projective-envelope
kind: lemma
title: A refined Chow envelope preserving a dense quasi-projective open
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 7
deps:
  - lem-nagata-quasi-domination-after-admissible-blowup
  - lem-nagata-quasi-domination-blowup-comparison
  - lem-nagata-coherent-ideal-extension-with-controlled-support
  - lem-nagata-admissible-blowups-compose
  - lem-nagata-admissible-blowup-universal-property-and-properness
  - lem-nagata-product-blowup-dominates-factor-blowups
  - lem-nagata-blowup-preserves-coherent-projectivity
  - lem-nagata-coherent-projective-bundles-are-proper
  - def-quasi-projective-morphism
proof_strategy: direct
axiom_use: No choice principle is assumed. The two quasi-domination extensions are compared by the proved blowup comparison, and a controlled coherent ideal extends the final modification to the projective envelope.
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Brian Conrad, Deligne's notes on Nagata compactifications, August 10, 2007 preprint
      url: https://math.stanford.edu/~conrad/papers/nagatafinal.pdf
      locator: Corollary2.6 and full proof around Lemma2.7, internal pp.19–21, read in full.
    - title: Pierre Deligne, Le théorème de plongement de Nagata, Kyoto Journal of Mathematics 50 (2010)
      url: https://publications.ias.edu/sites/default/files/Le%20th%C3%A9or%C3%A8me%20de%20plongement%20de%20Nagata.pdf
      locator: Corollary1.4 and Lemma1.5, printed p.666, read in full.
---

## Statement

Let $X\to S$ be separated and finite type between Noetherian schemes, and let $U\subseteq X$ be dense open and quasi-projective over $S$. There are a coherent ideal $\mathcal I$ on $X$, unit on $U$, a blowup $X'=\operatorname{Bl}_{\mathcal I}(X)$ and a dense open immersion $X'\hookrightarrow P$ over $S$, where $P$ has a global closed immersion into $\mathbb P_S(\mathcal E)$ for a coherent sheaf $\mathcal E$ on $S$, using the finite symmetric-algebra chart construction. The map $X'\to X$ is proper and is the identity over $U$, its inverse image of $U$ is exactly $U$, and $U$ is schematically dense in both $X'$ and $P$. In particular $P\to S$ is proper. If $S$ is affine, $P$ admits a closed immersion into a finite projective space over $S$.

Quasi-projective includes the library's finite-projective-space immersion convention. More generally the same assertion holds when a quasi-compact immersion of $U$ into a coherent projective bundle over $S$ is supplied as the quasi-projective presentation.

## Statement references

[[def-quasi-projective-morphism]]

[Conrad, Corollary2.6, internal pp.19–21](https://math.stanford.edu/~conrad/papers/nagatafinal.pdf)

## Facts & Assumptions

**Given:** The schemes, separated finite-type morphism and dense quasi-projective open in the Statement.

[F1] An $S$-map on a dense open, with graph closed over a protected open, extends to a quasi-domination after a coherent-ideal blowup preserving the protected open. [[lem-nagata-quasi-domination-after-admissible-blowup]]

[F2] For supplied quasi-dominations in the blowup-comparison diagram, the comparison domain is exactly the blowup of the original domain along the image ideal; the resulting map is proper and has graph closed in the larger ambient product. [[lem-nagata-quasi-domination-blowup-comparison]]

[F3] Controlled coherent ideals extend from an open of a Noetherian scheme; successive admissible blowups compose to one; these blowups are proper and preserve schematic density of any unchanged schematically dense open. [[lem-nagata-coherent-ideal-extension-with-controlled-support]] [[lem-nagata-admissible-blowups-compose]] [[lem-nagata-admissible-blowup-universal-property-and-properness]] [[lem-nagata-product-blowup-dominates-factor-blowups]]

[F4] A blowup of a coherent-projective-bundle scheme over Noetherian $S$ is again globally coherent-projective-bundle projective; all these projective morphisms are proper. [[lem-nagata-blowup-preserves-coherent-projectivity]] [[lem-nagata-coherent-projective-bundles-are-proper]]

[F5] Quasi-projectivity supplies a quasi-compact immersion into finite projective space, or the coherent bundle presentation specified in the Statement. [[def-quasi-projective-morphism]]


## Proof

1.1 First blow up a coherent ideal with zero set $X\setminus U$, giving $X_0\to X$. Such an ideal is the reduced closed-subscheme ideal on a Noetherian scheme. By [F3], $U$ is now schematically dense in $X_0$ and is unchanged. The map $X_0\to S$ remains separated and finite type. By [F5], immerse $U$ in a projective bundle over $S$, and let $P_0$ be its scheme-theoretic closure. The immersion makes $U$ open in $P_0$; its kernel-ideal definition makes it schematically dense. This closure is coherent and closed in the Noetherian projective bundle, so $P_0$ is projective and proper by [F4]. Apply [F1] on the base $P_0$ with target $X_0$ and protected open equal to $U$. Obtain an admissible blowup $P_1\to P_0$, an open $V\subseteq P_1$ containing $U$ and a map $\varphi:V\to X_0$ extending its identity, with graph closed in $P_1\times_SX_0$. The scheme $P_1$ is still projective and proper by [F4], and $U$ is schematically dense in it by [F3]. Projection of the closed graph therefore makes $\varphi$ proper. [F1, F3, F4, F5, given, construct, algebra]

2.1 Apply [F1] again, now on the base $X_0$ with target $V$ and protected open $U$. This target is Noetherian, separated and finite type over $S$, since it is an open of the Noetherian finite-type $P_1$. Obtain an admissible blowup $\widetilde X\to X_0$, an open $W\subseteq\widetilde X$ containing $U$ and a quasi-domination $\psi:W\to V$. The open $U$ is schematically dense in $\widetilde X$ by [F3]. The hypotheses of [F2] apply to $\varphi$, $\psi$ and this blowup, so $\psi$ is proper and $W\cong\operatorname{Bl}_{\mathcal J\mathcal O_V}(V)$, where $\mathcal J$ is the center ideal on $X_0$. Since $\varphi$ is proper, $W\to X_0$ is proper. Its open immersion into $\widetilde X$ is proper as well: its graph is closed over the separated $\widetilde X\to X_0$, and projection is the base change of $W\to X_0$. Its image is consequently closed and contains the dense $U$, hence is all of $\widetilde X$. Thus $W=\widetilde X$. [F1, F2, F3, step 1.1, construct, algebra]

3.1 Extend the coherent ideal $\mathcal J\mathcal O_V$ from $V$ to a coherent ideal $\mathcal K$ on $P_1$, unit on $U$, using [F3] with prescribed closed support $P_1\setminus U$. Set $P=\operatorname{Bl}_{\mathcal K}(P_1)$. Its inverse image of $V$ is exactly $\operatorname{Bl}_{\mathcal J\mathcal O_V}(V)=\widetilde X$, by the fraction-chart restriction formulas. This identifies $\widetilde X$ with an open of $P$. The scheme $P$ is projective and proper over $S$ by [F4], and $U$ is schematically dense in $P$ by [F3], so this open immersion is dense. Compress $\widetilde X\to X_0\to X$ by [F3] to a single blowup $X'\to X$ with center disjoint from $U$. Transport the open immersion through that $X$-isomorphism. Its unchanged inverse image over $U$ is exactly $U$ by the blowup chart restriction. [F2, F3, F4, step 1.1, step 2.1, construct, algebra]

4.1 Finally, on an affine $S$ a coherent sheaf giving the projective-bundle embedding of $P$ has finitely many module generators. Its symmetric algebra is a quotient of a finite polynomial algebra, so its projective scheme embeds closed in finite projective space by the explicit quotient charts. This proves the last clause. Empty $X$ or $U$ is harmless: density of an empty $U$ forces empty $X$, and the empty envelope suffices. Every step preserves the given $U$, proving all stated claims at the original Noetherian scope. [F3, F4, step 3.1, construct, algebra] ∎
