---
id: lem-countable-tower-completion-obstruction-exact-sequence
kind: lemma
title: Countable tower completion obstruction exact sequence
status: published
origin: pipeline
pipeline_run: phase-2-next-20
deps: ["def-lim-one-obstruction-to-completeness", "def-axiom-of-choice"]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: "Weibel, An Introduction to Homological Algebra, Chapter 5"
      url: "https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf"
    - title: "The Stacks Project, Homological Algebra"
      url: "https://stacks.math.columbia.edu/download/homology.pdf"
---

## Statement

Assume AC. If $G_0\supseteq G_1\supseteq\cdots$ are subgroups of an abelian group $A$, there is a natural exact sequence
$$0\longrightarrow\bigcap_mG_m\longrightarrow A\xrightarrow{\eta}\varprojlim_m A/G_m\xrightarrow{\partial}\varprojlim{}^1_mG_m\longrightarrow0.$$
Here $\eta(a)=(a+G_m)_m$, and $\varprojlim{}^1$ has the countable Delta-cokernel meaning. Consequently, for a separated filtration with $G_m=F_{-m}A$, completeness is equivalent to $\varprojlim{}^1_mG_m=0$. Naturality means homomorphisms $f:A\to A'$ with $f(G_m)\subseteq G'_m$ at every index.

## Facts & Assumptions

[F1] [[def-lim-one-obstruction-to-completeness]] defines the compatible-tuple limit and $\varprojlim{}^1G_m=(\prod_mG_m)/\Delta(\prod_mG_m)$, with $\Delta(g)_m=g_m-g_{m+1}$ for these inclusion transitions.

[F2] [[def-axiom-of-choice]] supplies a representative in each member of a countable family of nonempty cosets. This is the sole use of AC below.

## Proof

**Given:** $A$ and the descending subgroup tower. Put $L=\varprojlim_m A/G_m$ and $Q=\varprojlim{}^1_mG_m$.

1.1 For $c=(c_m)\in L$, select $a_m\in c_m$ for every $m$ using [F2]. Compatibility says $a_m-a_{m+1}\in G_m$. Thus $b=(a_m-a_{m+1})_m\in\prod_mG_m$, and set $\partial(c)=[b]\in Q$. Another representative sequence has the form $a'_m=a_m+g_m$, with $g_m\in G_m$, and gives $b'=b+\Delta(g)$. The class is therefore independent of every representative choice. Using the sequence $a_m+a'_m$ for the sum of two compatible families shows $\partial(c+c')=\partial(c)+\partial(c')$. Hence $\partial$ is a uniquely defined homomorphism, with no fixed section of any quotient included in its data. [F1, F2]

1.2 The inclusion of $\bigcap_mG_m$ in $A$ is injective. The tuple $\eta(a)$ is compatible, and $\eta(a)=0$ exactly when $a\in G_m$ for every $m$. This proves exactness at the first two nonzero terms. [F1]

2.1 If $c=\eta(a)$, use the constant representative sequence $a_m=a$, whose difference is zero; thus $\partial(c)=0$. Conversely, if $\partial(c)=0$, a representative sequence from step 1.1 has difference $\Delta(g)$ for some $g\in\prod_mG_m$. The elements $a_m-g_m$ then satisfy $a_m-g_m=a_{m+1}-g_{m+1}$ for every $m$, so all equal $a_0-g_0$. Their cosets are $c_m$, giving $c=\eta(a_0-g_0)$. This proves exactness at $L$ in both directions. [F1, step 1.1]

2.2 For any class $[b]\in Q$, take one tuple $b=(b_m)\in\prod_mG_m$ representing it. Define $a_0=0$ and $a_m=-\sum_{j<m}b_j$ for $m>0$. Then $a_m-a_{m+1}=b_m\in G_m$, so $(a_m+G_m)_m$ is compatible and maps to $[b]$. These finite sums require no choice, and a single existential representative of one quotient class requires no choice axiom. Thus $\partial$ is surjective, proving the terminal exactness. [F1, step 1.1]

3.1 If $f:A\to A'$ preserves every subgroup, it sends a compatible tuple of cosets to a compatible tuple, and sends a representative sequence $a_m$ to $f(a_m)$. Its differences are $f(a_m-a_{m+1})$. The product map also commutes with $\Delta$, so it induces the map on $Q$; the displayed sequence consequently commutes with $f$ at every term. If $\bigcap_mG_m=0$, step 1.2 makes $\eta$ injective, while steps 2.1–2.2 identify its cokernel with $Q$. Thus $\eta$ is an isomorphism exactly when $Q=0$. For $G_m=F_{-m}A$, the nonpositive indices are cofinal toward minus infinity: all other quotient components are uniquely determined by quotienting the component at zero. This limit is precisely the completion limit. [F1, step 1.1, step 1.2, step 2.1, step 2.2]

4.1 The zero group gives a zero sequence. If all $G_m=0$, then $L=A$ and $Q=0$. If all $G_m=A$, then $L=0$, the intersection is $A$, and step 2.2 shows $\Delta$ is onto, so again $Q=0$. These constant cases show why the separatedness hypothesis is needed for the final equivalence with an isomorphism. No strict inclusions, finite generation or completeness of $A$ were assumed. The only countable selection was of the coset representatives in step 1.1. [F1, step 1.1, step 1.2, step 2.2] ∎
