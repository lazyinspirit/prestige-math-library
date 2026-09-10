---
id: thm-souslin-operation-preserves-the-baire-property
kind: theorem
title: "The Souslin operation preserves the Baire property"
status: published
origin: pipeline
deps: ["lem-baire-property-sigma-algebra-and-borel-regularity", "def-souslin-operation-on-set-schemes", "thm-analytic-sets-are-souslin-operations-on-closed-sets", "def-axiom-of-choice"]
justified_by: []
forward_refs: []
landmark: false
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: "direct"
verification:
  audited: 2026-09-10
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  scraped: []
  references:
    - title: "Lemma 4.21, Theorem 4.22 and Corollary 4.23, printed pp39–40; complete proofs reread 2026-09-09."
      url: "https://homepages.math.uic.edu/~marker/math512/dst.pdf"
---
## Statement

In ZFC, in a topological space X with a specified countable basis, every subset E has a Baire-property envelope H containing E such that $H\setminus D$ is meagre for every Baire-property D containing E. The Souslin operation preserves the Baire property. Consequently every analytic subset of a Polish space has the Baire property.

## Facts & Assumptions

[F1] [[lem-baire-property-sigma-algebra-and-borel-regularity]] gives the Baire-property sigma-algebra, Borel inclusion and the meagre ideal.

[F2] [[def-souslin-operation-on-set-schemes]] gives prefix normalization, including the root.

[F3] [[thm-analytic-sets-are-souslin-operations-on-closed-sets]] represents analytic sets by closed schemes.

[A1] Assume [[def-axiom-of-choice]].

## Proof

**Given:** A specified countable basis of X. X need not be a Baire space.

1.1 Given E, let U be the union of those basis opens V for which $E\cap V$ is meagre. Countability of the basis and F1 with A1 make $E\cap U$ meagre. Put $F=X\setminus U$ and $H=E\cup F$. H differs from closed F by $E\cap U$, so is Baire-property by F1. Suppose a Baire-property D contains E. Then $C=H\setminus D$ is Baire-property by F1, disjoint from E and contained in F. If C were nonmeagre, choose open O with $C\triangle O$ meagre. O is nonmeagre, for otherwise so would C be by the ideal property. Since $O\setminus C$ is meagre and C misses E, $E\cap O$ is meagre. Every basis open inside O then belongs to the union defining U; hence $O\subseteq U$ and $O\cap C=\varnothing$. This makes $O=O\setminus C$ meagre, a contradiction. Thus $H\setminus D$ is meagre as required. [F1, A1]

2.1 For a Baire-property scheme normalize it by F2 to a decreasing scheme $(A_s)$, using F1 for finite intersections. Let $E_s=\bigcup_{f\supseteq s}\bigcap_n A_{f\upharpoonright n}$. Then $E_s\subseteq A_s$ and $E_s=\bigcup_k E_{s^\frown k}$. By step 1.1 and A1 choose Baire-property envelopes H_s of E_s (a countable family of nonempty sets of subset witnesses). Define $B_s=A_s\cap\bigcap_{t\subseteq s}H_t$. These are Baire-property and decrease along extensions. Also $E_s\subseteq B_s$, because $E_s\subseteq E_t\subseteq H_t$ for every prefix t. As $B_s\subseteq H_s$, it remains an envelope of E_s. [F1, F2, A1, step 1.1]

3.1 The union $\bigcup_k B_{s^\frown k}$ is a Baire-property superset of E_s. Therefore the envelope property makes $C_s=B_s\setminus\bigcup_k B_{s^\frown k}$ meagre. The union C of C_s over all finite words is meagre by F1 and A1. For $x\in B_\varnothing\setminus C$, whenever $x\in B_s$ there is a child with x in its B-set, since $x\notin C_s$. Recursively choose the least such child index. This defines a branch f with $x\in B_{f\upharpoonright n}\subseteq A_{f\upharpoonright n}$ for every n, and hence $x\in\mathsf S(A)$ by F2. Conversely $\mathsf S(A)=E_\varnothing\subseteq B_\varnothing$. Thus the Baire-property set $B_\varnothing$ differs from $\mathsf S(A)$ by a subset of meagre C, so F1 proves the latter Baire-property. [F1, F2, A1, step 2.1]

4.1 For a Polish X, dense metric centres and positive rational radii give a countable basis. F3 with A1 represents every analytic set by a closed scheme. Its entries are Baire-property by F1; step 3.1 applies to prove the analytic assertion. Empty entries, including an empty root, require no alteration of the envelope argument. QED. [F1, F3, A1, step 3.1]
