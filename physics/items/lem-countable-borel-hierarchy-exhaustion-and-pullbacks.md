---
id: lem-countable-borel-hierarchy-exhaustion-and-pullbacks
kind: lemma
title: "Borel hierarchy exhaustion and preservation by continuous pullback"
status: published
origin: pipeline
deps: ["def-countable-borel-hierarchy", "thm-countable-subsets-of-omega-one-are-bounded", "def-axiom-of-choice", "thm-transfinite-induction", "def-continuous-map-top", "def-subspace-topology-top"]
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
    - title: "Lemma 2.5(i–ii), Lemma 2.6(iv), Exercise 2.8(a), printed pp14–15; local exhaustion argument fills the abbreviated sigma-algebra step"
      url: "https://homepages.math.uic.edu/~marker/math512/dst.pdf"
---
## Statement

In ZFC, for every topological space $X$,

$$\mathcal B(X)=\bigcup_{1\leq\alpha<\omega_1}\Sigma^0_\alpha(X).$$

Continuous inverse images preserve $\Sigma^0_\alpha$, $\Pi^0_\alpha$ and $\Delta^0_\alpha$ at every positive countable rank. If $Y\subseteq X$ has the subspace topology, its $\Sigma^0_\alpha$ and $\Pi^0_\alpha$ sets are exactly the traces of the corresponding classes on $X$. No trace assertion for $\Delta$ is made. The inverse-image proof uses no choice beyond the supplied representations.

## Facts & Assumptions

[F1] [[def-countable-borel-hierarchy]] defines the positive ranks and the least Borel sigma-algebra.

[F2] Under countable choice, countable subsets of $\omega_1$ have countable suprema: [[thm-countable-subsets-of-omega-one-are-bounded]].

[F3] [[def-continuous-map-top]] gives the open-neighbourhood criterion.

[F4] Opens of a subspace are traces: [[def-subspace-topology-top]].

[F5] [[thm-transfinite-induction]] permits induction over the positive countable ordinals.

[A1] Assume [[def-axiom-of-choice]], including its restriction to countable families.

## Proof

**Given:** The indicated spaces, ranks and axiom assumptions.

1.1 By F5, every rank lies in $\mathcal B(X)$: rank one consists of opens; the progressive step takes complements and countable unions of earlier Borel sets. Write $H$ for the union in the statement. If $A\in\Sigma^0_\alpha$, then $X\setminus A\in\Pi^0_\alpha\subseteq\Sigma^0_{\alpha+1}$, the latter inclusion using a constant sequence. Thus $H$ is closed under complements. [F1, F5]

1.2 Let $f:X\to Z$ be continuous. For open $U\subseteq Z$, every point of $f^{-1}[U]$ has an open neighbourhood inside that preimage by F3; their union proves it open. Induct on the rank by F5. For a represented union $A=\bigcup_n B_n$, $f^{-1}[A]=\bigcup_n f^{-1}[B_n]$, and the induction hypotheses place each preimage in its original lower $\Pi$ rank. Also $f^{-1}[Z\setminus A]=X\setminus f^{-1}[A]$. These identities prove both classes at the next rank. Membership in both gives the $\Delta$ assertion, without selecting any representations simultaneously. [F1, F3, F5]

2.1 Given $A_n\in H$, let $\alpha_n$ be its least positive $\Sigma$ rank. The preceding complement argument applied twice gives $A_n\in\Pi^0_{\alpha_n+1}$. By F2 and A1, $\delta=\sup_n(\alpha_n+2)<\omega_1$, and each $\alpha_n+1<\delta$. Hence $\bigcup_n A_n\in\Sigma^0_\delta$. The empty union is $\varnothing\in\Sigma^0_1$. Thus $H$ is a sigma-algebra containing the opens and so contains $\mathcal B(X)$ by its leastness; step 1.1 gives equality. [F1, F2, A1, step 1.1]

3.1 For the inclusion $i:Y\to X$, $i^{-1}[U]=Y\cap U$ is open by F4, so $i$ is continuous and step 1.2 gives one trace inclusion. Conversely induct by F5. Opens lift by F4. If $B=\bigcup_n B_n\in\Sigma^0_\alpha(Y)$ with lower-$\Pi$ constituents, each $B_n$ has an ambient lift in its own rank by induction. Their sets of lifts are nonempty subsets of $\mathcal P(X)$; A1 chooses lifts $C_n$. Then $\bigcup_n C_n\in\Sigma^0_\alpha(X)$ has trace $B$. If $B=Y\setminus D$ is $\Pi^0_\alpha$, lift $D$ to $C$ and use $X\setminus C$, whose trace is $B$. This proves the reverse inclusion in both classes. For $Y=\varnothing$ the same identities apply, with $\varnothing$ an available lift throughout. QED. [F1, F4, F5, A1, step 1.2]
