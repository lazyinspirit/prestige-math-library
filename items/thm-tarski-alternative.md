---
id: thm-tarski-alternative
kind: theorem
title: "Under the ultrafilter lemma and a matching-extension principle, a group is amenable if and only if it is not paradoxical"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-left-invariant-mean-and-amenable-group, def-paradoxical-decomposition-of-a-group, lem-paradoxical-groups-admit-no-invariant-mean, thm-folner-criterion-for-amenability, thm-hall-marriage-finite-bipartite]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Cornelia Drutu and Michael Kapovich, Lectures on Geometric Group Theory"
      url: "https://www.math.ucdavis.edu/~kapovich/EPR/kapovich_drutu.pdf"
    - title: "C. Löh, Geometric Group Theory: An Introduction (2015 course version)"
      url: "https://loeh.app.uni-regensburg.de/teaching/ggt_ws1415/lecture_notes_old.pdf"
---

## Statement

Assume the ultrafilter lemma and the following perfect-matching extension
principle for $G$: whenever a finite set $K\subseteq G$ satisfies
$|KF|\ge2|F|$ for every finite nonempty $F\subseteq G$, the finite Hall
matchings in the bipartite graph with left vertices $G\times\{1,2\}$, right
vertices $G$, and edges $(g,r)\sim kg$ for $k\in K$ extend to a bijection
$\Phi:G\times\{1,2\}\to G$ satisfying $\Phi(g,r)\in Kg$.

Under these assumptions, $G$ is amenable if and only if it is not paradoxical.

## Facts & Assumptions

**Given:** A group $G$, the ultrafilter lemma, and the matching-extension principle stated above.

[L1] A paradoxical decomposition forbids a left-invariant mean ([[lem-paradoxical-groups-admit-no-invariant-mean]]).

[A1] Under the ultrafilter lemma, amenability is equivalent to the Folner condition ([[thm-folner-criterion-for-amenability]]).

[A2] The perfect-matching extension principle above upgrades the finite Hall
matchings coming from a doubling set $K$ to an edge-respecting bijection
$G\times\{1,2\}\to G$.

[L2] Hall's theorem saturates a finite bipartite left part exactly when every finite subfamily has enough neighbors ([[thm-hall-marriage-finite-bipartite]]).

## Proof

**Proof technique:** direct.

1.1 If $G$ is paradoxical, then [L1] says that no left-invariant mean exists, so $G$ is not amenable. This proves the forward implication of the statement. [L1, given]

1.2 Assume now that $G$ is not amenable. By contrapositive use of [A1], there is a finite set $K\subseteq G$ with $e\in K$ such that $|KF|\ge2|F|$ for every finite nonempty $F\subseteq G$. Indeed, if no such $K$ existed, then for a finite test set $S$ and $\varepsilon>0$ one could put $S_0=\{e\}\cup S\cup S^{-1}$, choose $m$ with $(1+\varepsilon/2)^m>2$, and find finite nonempty $F$ with $|S_0^mF|<2|F|$. Among the layers $F_j=S_0^jF$, some ratio $|F_{j+1}|/|F_j|$ would then be below $1+\varepsilon/2$, giving $|sF_j\triangle F_j|<\varepsilon|F_j|$ for every $s\in S$ and hence the Folner condition. [A1, given, algebra]

2.1 Form the bipartite graph from [A2]. For every finite left subset $P\subseteq G\times\{1,2\}$ with projection $Q\subseteq G$, step 1.2 gives $|N(P)|=|KQ|\ge2|Q|\ge|P|$, so [L2] produces a matching saturating $P$. By [A2], these finite matchings extend to an edge-respecting bijection $\Phi:G\times\{1,2\}\to G$. For $r\in\{1,2\}$ and $k\in K$, put
$$C_{r,k}=\{\Phi(g,r):\Phi(g,r)=kg\}.$$
The finitely many $C_{r,k}$ are pairwise disjoint and partition $G$ because $\Phi$ is bijective. For fixed $r$, the translated pieces $k^{-1}C_{r,k}$ partition $G$, because they are exactly the fibers in the domain copy $G\times\{r\}$. Thus the two subfamilies $(C_{1,k})_{k\in K}$ and $(C_{2,k})_{k\in K}$, with translators $k^{-1}$, form a paradoxical decomposition. [A2, L2, step 1.2, construct]

3.1 Steps 1.1 and 2.1 prove both directions, so $G$ is amenable exactly when it is not paradoxical. [step 1.1, step 2.1] ∎
