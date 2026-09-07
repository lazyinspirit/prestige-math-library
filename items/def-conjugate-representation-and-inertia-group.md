---
id: "def-conjugate-representation-and-inertia-group"
kind: "definition"
title: "Inertia group and characters lying above a normal type"
status: published
origin: "pipeline"
deps: ["def-conjugate-representation-and-conjugate-character", "def-normal-subgroup", "cor-multiplicity-of-an-irreducible-summand-is-a-character-inner-product"]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Tammo tom Dieck, Representation Theory — §4.2 opening pp.53–54; Späth notation p.1 and §1 opening p.2"
      url: "https://math.uchicago.edu/~margalit/repthy/tomDieck%20Representation%20Theory.pdf"
---

## Definition

Let $G$ be finite, $N\trianglelefteq G$, and $\theta\in\operatorname{Irr}(N)$, where $\operatorname{Irr}(N)$ denotes irreducible complex characters. Using [[def-conjugate-representation-and-conjugate-character]], set
$$ {}^g\theta(n)=\theta(g^{-1}ng),\qquad I_G(\theta)=\{g\in G:{}^g\theta=\theta\}. $$
The subgroup $I_G(\theta)$ is the **inertia group**. For $N\le H\le G$, define
$$ \operatorname{Irr}(H\mid\theta)=\{\psi\in\operatorname{Irr}(H):\theta\text{ occurs in }\operatorname{Res}_N^H\psi\}. $$
Equivalently the restriction has positive inner product with $\theta$, by [[cor-multiplicity-of-an-irreducible-summand-is-a-character-inner-product]]. Such a character **lies over** $\theta$.

Normality ([[def-normal-subgroup]]) ensures that the conjugates are again characters of $N$. Twisting by an automorphism preserves irreducibility. Direct substitution gives ${}^g({}^h\theta)={} ^{gh}\theta$ and ${}^1\theta=\theta$. For $n_0\in N$, the matrices of $n_0^{-1}nn_0$ and $n$ are similar, so their traces coincide: ${}^{n_0}\theta=\theta$. Thus the action factors through $G/N$ and its stabilizer satisfies $N\le I_G(\theta)\le G$. The stabilizer is a subgroup because products and inverses preserve a fixed point. Orbit representatives are indexed by left cosets $gI_G(\theta)$.
