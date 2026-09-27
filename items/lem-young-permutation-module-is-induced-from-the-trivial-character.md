---
id: lem-young-permutation-module-is-induced-from-the-trivial-character
kind: lemma
title: Young permutation modules are induced trivial modules
status: published
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-young-tableau-standard-tableau-and-shape, def-young-subgroup-tabloid-and-permutation-module, thm-induction-of-the-trivial-representation-is-the-permutation-representation-on-left-cosets]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Charlotte Chan, Representation Theory of Symmetric Groups - Definition 3.5, printed pp. 12-13"
      url: "https://web.math.princeton.edu/~charchan/RepresentationTheorySymmetricGroupsNotes.pdf"
    - title: "David Craven, Groups, Geometries and Representation Theory - Lemma 1.17 and Section 1.6, printed pp. 13-14"
      url: "https://web.mat.bham.ac.uk/D.A.Craven/docs/lectures/groupsgeomreptheory2013.pdf"
verification:
  audited: 2026-09-27
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
---

## Statement

For every $n\ge 0$ and every partition $\lambda\vdash n$, the Young permutation
module $M^\lambda$ is isomorphic, as a complex representation of $S_n$, to the
permutation representation of $S_n$ on the left coset set $S_n/S_\lambda$, and
hence to the induced representation
$\operatorname{Ind}_{S_\lambda}^{S_n}\mathbf 1$ of the trivial complex
representation of the standard Young subgroup $S_\lambda$. This includes the
case $n=0$, where $\lambda=\varnothing$ and $S_\varnothing=S_0=\{1\}$.

## Facts & Assumptions

**Given:** An integer $n\ge 0$, a partition $\lambda=(\lambda_1,\dots,\lambda_k)\vdash n$, the standard row-filled $\lambda$-tableau $t_0$, the standard Young subgroup $S_\lambda\le S_n$, and the Young permutation module $M^\lambda$ with tabloid basis $\Omega_\lambda$.

[L1] The tabloids are the row-equivalence classes $\{t\}=\{\rho\cdot t:\rho\in R_t\}$ of $\lambda$-tableaux, and $M^\lambda=\mathbb C^{(\Omega_\lambda)}$ is the complex vector space with the tabloids as basis, on which $S_n$ acts by $\sigma\cdot\{t\}=\{\sigma\cdot t\}$; the stabilizer of the tabloid $\{t\}$ is the row stabilizer $R_t$, the action on $\Omega_\lambda$ is transitive, and for the standard row-filled tableau $t_0$ one has $R_{t_0}=S_\lambda$, so the stabilizer of $\{t_0\}$ is $S_\lambda$ ([[def-young-subgroup-tabloid-and-permutation-module]]).

[L2] If $t\sim u$ are $\lambda$-tableaux and $\tau\in S_n$, then $\tau\cdot t\sim\tau\cdot u$; this is the well-definedness of the tabloid action in [L1] ([[def-young-subgroup-tabloid-and-permutation-module]]).

[L3] Every $\lambda$-tableau $t$ equals $\sigma\cdot t_0$ for a unique $\sigma\in S_n$, because $\sigma(t_0(i,j)):=t(i,j)$ defines a permutation of $\{1,\dots,n\}$ ([[def-young-tableau-standard-tableau-and-shape]]).

[L4] For a finite group $G$ and a subgroup $H\le G$, inducing the trivial complex representation of $H$ to $G$ gives the permutation representation of $G$ on the left coset set $G/H$; the cosets form the set $G/H=\{gH:g\in G\}$ with $G$ acting by $x\cdot(gH)=(xg)H$, and the permutation representation has these cosets as a basis ([[thm-induction-of-the-trivial-representation-is-the-permutation-representation-on-left-cosets]]).

## Proof

**Proof technique:** direct.

1.1 Define $\Phi:S_n/S_\lambda\to\Omega_\lambda$ by $\Phi(\sigma S_\lambda):=\{\sigma\cdot t_0\}$. This is well defined: if $\sigma S_\lambda=\tau S_\lambda$, then $\tau^{-1}\sigma\in S_\lambda=R_{t_0}$, so $(\tau^{-1}\sigma)\cdot t_0\sim t_0$ by [L1], and applying $\tau$ gives $\sigma\cdot t_0\sim\tau\cdot t_0$ by [L2], that is $\{\sigma\cdot t_0\}=\{\tau\cdot t_0\}$. [given, L1, L2, construct]

2.1 The map $\Phi$ is injective: if $\{\sigma\cdot t_0\}=\{\tau\cdot t_0\}$, then $\sigma\cdot t_0\sim\tau\cdot t_0$, so $\tau^{-1}\cdot(\sigma\cdot t_0)\sim\tau^{-1}\cdot(\tau\cdot t_0)=t_0$ by [L2]; hence $\tau^{-1}\sigma\cdot t_0\sim t_0$, so $\tau^{-1}\sigma\in R_{t_0}=S_\lambda$ by [L1] and therefore $\sigma S_\lambda=\tau S_\lambda$. [L1, L2, step 1.1]

2.2 The map $\Phi$ is surjective: every tabloid is $\{t\}$ for some $\lambda$-tableau $t$ by [L1], and $t=\sigma\cdot t_0$ for some $\sigma\in S_n$ by [L3], so $\{t\}=\{\sigma\cdot t_0\}=\Phi(\sigma S_\lambda)$. [L1, L3, step 1.1]

2.3 The map $\Phi$ is $S_n$-equivariant for the left actions of [L1] and [L4]: for $\tau\in S_n$ one has $\Phi(\tau\cdot\sigma S_\lambda)=\Phi((\tau\sigma)S_\lambda)=\{(\tau\sigma)\cdot t_0\}=\{\tau\cdot(\sigma\cdot t_0)\}=\tau\cdot\{\sigma\cdot t_0\}=\tau\cdot\Phi(\sigma S_\lambda)$, using that the action on tableaux and on tabloids is a left action and $\sigma\cdot\{t\}=\{\sigma\cdot t\}$. [L1, L3, L4, step 1.1, algebra]

3.1 Steps 2.1, 2.2 and 2.3 show that $\Phi$ is an isomorphism of left $S_n$-sets, hence extends to an isomorphism of complex representations $M^\lambda\cong\mathbb C[S_n/S_\lambda]$, the permutation representation of $S_n$ on the coset set $S_n/S_\lambda$; this is the first isomorphism of the statement. [step 2.1, step 2.2, step 2.3, L1]

4.1 Applying [L4] to the finite group $G=S_n$ and the subgroup $H=S_\lambda\le S_n$ identifies the permutation representation of $S_n$ on $S_n/S_\lambda$ with $\operatorname{Ind}_{S_\lambda}^{S_n}\mathbf 1$; composing with the isomorphism of step 3.1 gives $M^\lambda\cong\operatorname{Ind}_{S_\lambda}^{S_n}\mathbf 1$. [step 3.1, L4]

5.1 For $n=0$ one has $\lambda=\varnothing$ and $S_\varnothing=S_0=\{1\}$; there is exactly one $\varnothing$-tableau, the empty one, so $\Omega_\varnothing$ has one element and $M^\varnothing$ is one-dimensional with trivial action, the coset set $S_0/S_0$ is a single point, and [L4] with $G=H=S_0$ gives the same one-dimensional trivial representation as the induced module; so steps 3.1 and 4.1 hold also in this case. ∎ [step 3.1, step 4.1, L4, given]
