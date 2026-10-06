---
id: lem-bruhat-covers-give-unique-verma-embeddings
kind: lemma
title: Bruhat covers give canonical Verma embeddings, and composites are inclusions
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [lem-dominant-integral-dot-translates-embed-in-the-verma-module, def-bgg-bruhat-verma-sum-in-degree-k, thm-verma-homomorphism-spaces-have-dimension-at-most-one, lem-a-nonzero-verma-homomorphism-is-injective]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: completed-cumulative-mathematical-review
    date: 2026-10-03
    scope: "Cumulative verification supported by existing completed mathematical readings. Original complete Step 5a reader evidence research/frontier-38-owner-30-reader-8.md, followed by completed Step 7 repair/adjudication reasoning research/frontier-38-owner-30-step7-v2/step7-v2-initial-r1-u8.json, exact post_sha256 1984dfcb4735d5f7facb1ef96f20cf49379e9d1771e6fd48c78ea931b98ea717 with publication status normalized back to draft. The later reasoning covers the substantive changes; its local repair/self-review qualifications remain applicable. This reconciliation adds no new mathematical review, independent post-repair audit, source reading or judge acceptance."
    delegated_by: "owner via tools/autopilot frontier-38-owner-30 step7-v2-initial-r1-u8 dispatch"
sources:
  references:
    - title: "A. Rocha-Caridi, Splitting criteria, Trans. AMS 262 (1980), Sec. 10, p. 353 (choice of injections)"
      url: "https://www.ams.org/journals/tran/1980-262-02/S0002-9947-1980-0586721-0/S0002-9947-1980-0586721-0.pdf"
    - title: "Fan Zhou, The classical and the functorial BGG resolutions (Columbia thesis 2021), Part I Sec. 3.2, p. 10"
      url: "https://www.math.columbia.edu/~fanzhou/files/Thesis041921.pdf"
---

## Statement

Let $\lambda\in\Lambda^+$. For every arrow $x\to y$ of the Bruhat graph (a cover $x\rhd y$) the inclusion $\iota_{x\to y}\colon M(x\circ\lambda)\hookrightarrow M(y\circ\lambda)$ of [[lem-dominant-integral-dot-translates-embed-in-the-verma-module]] is the unique-up-to-scalar nonzero $\mathfrak g$-homomorphism between these two Verma modules, and it is injective with image a proper submodule. If $x\rhd m\rhd y$ and $x\rhd m'\rhd y$ are two saturated paths, then the composites $\iota_{m\to y}\circ\iota_{x\to m}$ and $\iota_{m'\to y}\circ\iota_{x\to m'}$ are equal as maps $M(x\circ\lambda)\to M(y\circ\lambda)$: both are the inclusion of the canonical submodule $M(x\circ\lambda)\subseteq M(y\circ\lambda)\subseteq M(\lambda)$. In particular the system of inclusions is path-independent, and $\iota_{y\to z}\circ\iota_{x\to y}=\iota_{x\to z}$ whenever $x\rhd y\rhd z$ and $x>z$ (length gap two).

## Facts & Assumptions

**Given:** A dominant integral weight $\lambda\in\Lambda^+$ and arrows $x\to y$ of the Bruhat graph, i.e. covers $x\rhd y$ with $\ell(x)=\ell(y)+1$.

[F1] For $u\ge v$ in Bruhat order the unique singular-vector submodules $S_u\cong M(u\circ\lambda)$ and $S_v\cong M(v\circ\lambda)$ of $M(\lambda)$ satisfy $S_u\subseteq S_v$. A nonzero homomorphism between these Verma modules exists and is unique up to scalar ([[lem-dominant-integral-dot-translates-embed-in-the-verma-module]]).

[F2] Every nonzero homomorphism between Verma modules is injective, and $\dim\operatorname{Hom}_{\mathfrak g}(M(\mu),M(\eta))\le1$ for all weights ([[lem-a-nonzero-verma-homomorphism-is-injective]], [[thm-verma-homomorphism-spaces-have-dimension-at-most-one]]).

[F3] The arrows of the Bruhat graph are the covers, and for $\lambda\in\Lambda^+$ the weights $w\circ\lambda$ are pairwise distinct ([[def-bgg-bruhat-verma-sum-in-degree-k]]).

## Proof

1.1 For every $w\in W$, fix an embedding $j_w\colon M(w\circ\lambda)\hookrightarrow M(\lambda)$ with image $S_w$, taking $j_e$ to be the identity. There are only finitely many choices. For every comparable pair $u\ge v$, define $\iota_{u\to v}=j_v^{-1}\circ j_u$, where $j_v^{-1}$ is the inverse from $S_v$ to $M(v\circ\lambda)$; [F1] gives $S_u\subseteq S_v$, so this is well-defined and $j_v\iota_{u\to v}=j_u$. These are precisely the literal submodule inclusions transported to the abstract Verma copies. For a cover $x\rhd y$, the map is nonzero and injective and spans the one-dimensional Hom space by [F2]. Its image is proper: otherwise the two Verma modules would have the same highest weight, contradicting $x\circ\lambda\ne y\circ\lambda$ by [F3]. [F1, F2, F3, construct]

2.1 For $x\rhd m\rhd y$, the defining equations give $j_y\iota_{m\to y}\iota_{x\to m}=j_m\iota_{x\to m}=j_x=j_y\iota_{x\to y}$. Since $j_y$ is injective, $\iota_{m\to y}\iota_{x\to m}=\iota_{x\to y}$. The same argument for $m'$ shows that the two diamond composites are equal as maps, rather than merely proportional. [step 1.1, algebra]

3.1 More generally, for $x\ge y\ge z$ one has $j_z\iota_{y\to z}\iota_{x\to y}=j_y\iota_{x\to y}=j_x=j_z\iota_{x\to z}$, so injectivity of $j_z$ proves $\iota_{y\to z}\iota_{x\to y}=\iota_{x\to z}$. Iterating this equality gives path independence, including the claimed length-gap-two case. The normalization depends on the chosen $j_w$ on abstract copies; the submodules $S_w$ and their literal inclusions are canonical. Arbitrarily rescaled cover maps need not have equal diamond composites. [step 1.1, step 2.1, algebra] ∎
