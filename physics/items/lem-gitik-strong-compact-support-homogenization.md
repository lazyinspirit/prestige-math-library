---
id: lem-gitik-strong-compact-support-homogenization
kind: lemma
title: Strong compactness bounds symmetric decision patterns
status: published
origin: pipeline
deps:
  - def-gitik-strongly-compact-filter-system-and-class-forcing
  - lem-gitik-restriction-amalgamation-and-prikry-property
  - lem-gitik-support-approximation-and-bounded-stage
  - thm-gitik-intermediate-model-zf-minus-power-set
  - thm-gitik-expanded-proper-class-forcing-theorem
  - cor-lc-large-cardinal-implication-ledger
  - def-axiom-of-choice
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  audited: 2026-09-14
sources:
  references:
    - title: "Schürz, Gitik's model, Lemmas 13, 15 and 16 and Theorem 17, pages 12–20"
      url: https://repositum.tuwien.at/bitstream/20.500.12708/5394/2/Schuerz%20Johannes%20Philipp%20-%202018%20-%20Gitiks%20model%20or%20a%20model%20of%20ZF%20where%20all...pdf
    - title: "Dimitriou, Symmetric Models, Theorem 2.37, Claims 1–5, pages 61–69"
      url: https://d-nb.info/1020630655/34
---

## Statement

Fix an HS name $\dot x$. There is a strongly compact $\kappa$ above the
cardinality and rank of $\operatorname{tc}(\dot x)$ and above the coordinates
in supports of $\dot x$ and its immediate subnames such that every symmetric
subset $y\subseteq x=\dot x_G$ has a canonical three-valued membership-decision
code on the set

$$D=\operatorname{dom}(\dot x)\times(P_2\restriction\kappa).$$

The code is obtained after pruning the finitely supported upper tree so that
all big-coordinate filters are $\kappa$-complete, small successor sets do not
depend on big values, every compatible small trunk is reachable, and all
membership decisions are homogeneous. Distinct symmetric subsets have
distinct codes. Each code belongs to a fixed ground/set-stage set
$3^D$, so $M[G]$ contains a set collecting all symmetric subsets of $x$.

## Facts & Assumptions

**Given:** The Gitik symmetric system, $\dot x\in\mathrm{HS}$, and $x=\dot x_G$.

[F1] [[def-gitik-strongly-compact-filter-system-and-class-forcing]]: Strongly compact cutoffs are unbounded; above a cutoff the type-1 and suitably pruned type-2 successor ultrafilters have the cutoff's completeness.

[F2] [[lem-gitik-restriction-amalgamation-and-prikry-property]]: Finite restrictions admit trunk/tree amalgamation, type-2 threshold pruning, and intersections below the completeness bound.

[F3] [[lem-gitik-support-approximation-and-bounded-stage]]: Pure membership decisions with supported parameters reduce to finite support restrictions, and all relevant names lie in set stages.

[F4] [[cor-lc-large-cardinal-implication-ledger]]: A strongly compact cardinal is inaccessible; hence fewer than $\kappa$ bounded patterns and their power sets still have size below $\kappa$.

[F5] [[thm-gitik-intermediate-model-zf-minus-power-set]]: $M[G]$ has Separation, Collection/Replacement and a definable global well-order.

[F6] [[def-axiom-of-choice]]: Ground AC chooses simultaneous homogeneous measure-one sets and least witnesses. It is used only in $M$ or $M[G]$, not asserted in $N_G$.

[F7] [[thm-gitik-expanded-proper-class-forcing-theorem]]: $G$ is an upward-closed directed filter meeting every ground-definable dense subclass, and the fixed-formula forcing predicate satisfies the truth lemma.

## Proof

1.1 Choose $\kappa$ strongly compact above $|\operatorname{tc}(\dot x)|$, $\operatorname{rank}(\dot x)$, and the supremum of fixed finite supports for $\dot x$ and every name in $\operatorname{dom}(\dot x)$. This is possible by F1. Consequently $|\operatorname{dom}(\dot x)|<\kappa$, every relevant support below $\kappa$ is bounded there, and every finite-support family of small trunks has size below $\kappa$ by inaccessibility. [F1, F4]

1.2 Below any condition, first equalize the finitely many section lengths and apply the type-2 threshold pruning of F2, so every successor filter used at a coordinate at least $\kappa$ is $\kappa$-complete. For a small extendable trunk $u$, write $E_u$ for its possible next values. Work backwards through each finite high-coordinate level. At a high predecessor $r$ and fixed small trunk pattern $f$, colour each possible high successor by the resulting set $E_u\subseteq\alpha(u)<\kappa$. There are at most $2^{\alpha(u)}<\kappa$ colours, so ultrafilterhood and $\kappa$-completeness give a measure-one homogeneous successor set. Intersect over the fewer than $\kappa$ small patterns on the fixed finite support, then over the countably many finite levels. Intersecting the resulting cone trees restores the union clause. The pruned condition therefore has $\kappa$-complete big filters and satisfies $u\restriction\kappa=v\restriction\kappa\Longrightarrow E_u=E_v$ whenever the next coordinate is small. [F1, F2, F4, F6]

2.1 Say a combined trunk $q\cup s$, where $q$ is a high trunk and $s$ is a compatible small trunk, reaches an upper tree $U$ when it is in $U$, or when the high subtree of nodes extendible to a member of $U$ with small part $s$ is nonempty and has measure-one successors at every remaining high slot. Starting with the normalized condition of step 1.2, build the tree forward. Small successors prescribed by $s$ remain legal because their sets $E_u$ depend only on the small restriction. At a high node, for each compatible small $s$ take the measure-one set of successors which continue to reach $U$; there are fewer than $\kappa$ such $s$ on the fixed finite coordinate domain, so their intersection remains measure one. After intersecting cone trees to restore union coherence, every high trunk combined with every compatible small trunk reaches the new tree. [F1, F2, F4, step 1.2]

3.1 Fix a symmetric $y\subseteq x$. By the bounded-stage clause of F3, choose the least regular stage containing an HS name for $y$, then the ground-well-order least such name $\dot y$ and its least finite support in that set stage. Let $\rho<\kappa$ be the fixed regular coordinate chosen above every support occurring in $\dot x$ or in a member of $\operatorname{dom}(\dot x)$. Enlarging a support preserves support, so let $e_y$ be the finite $\operatorname{cf}'$-closure of the supports of $\dot x$ and $\dot y$ together with $\kappa_1$ and $\rho$, and put $\mu_y=\max(e_y\cap\kappa)$. Thus every occurrence name from $\operatorname{dom}(\dot x)$ has its support below $\mu_y$. By F7's truth lemma, some $a\in G$ forces $\dot y\subseteq\dot x$. Finite support extension is dense by F2, so strengthen inside $G$ to $a'\le a$ whose domain contains $e_y$. Since both names are supported by $e_y$, F3 gives $a'\restriction e_y\Vdash_3\dot y\subseteq\dot x$; this restriction is weaker than $a'$ and therefore belongs to the upward-closed filter $G$, with coordinate domain exactly $e_y$. Steps 1.2–2.1 give a dense set in the fixed-domain forcing below $a'\restriction e_y$ of conditions having the normalization and reachability properties. Its lifted preimage is dense below $a'$ in $P_3$: restrict an arbitrary refinement to $e_y$, choose the fixed-domain refinement, and use F2 to amalgamate it back with the original condition. Meet that lifted dense class with $G$ and restrict the resulting member to $e_y$. Upward closure again keeps the restriction in $G$, and its domain remains exactly $e_y$; no strengthening was claimed to delete unrelated coordinates. [F1, F2, F3, F5, F6, F7, step 1.1, step 1.2, step 2.1]

4.1 Work below a normalized reachable condition from step 3.1. Fix $z\in\operatorname{dom}(\dot x)$ and a small trunk $s\in P_2\restriction\mu_y^+$. In the reachable high subtree compatible with $s$, colour a terminal high trunk $q$ by $0$ if some upper subtree on $q\cup s$ forces $z\notin\dot y$, by $1$ if some such subtree forces $z\in\dot y$, and by $2$ otherwise. Colours $0$ and $1$ cannot both occur at one trunk because common-trunk upper trees intersect. Work backwards through the finitely many remaining slots: at a high slot retain the unique colour on a measure-one successor set, and at a small slot use the small-pattern independence from step 1.2. Reachability from step 2.1 prevents this auxiliary tree from dying. Intersect these prunings for all fewer than $\kappa$ pairs $(z,s)$ and restore union coherence by cone intersections. The resulting upper tree is homogeneous for every such $(z,s)$, so exactly one of the three alternatives holds. This constructs a homogeneous refinement below every starting condition; hence the normalized, reachable, homogeneous conditions are dense below those forcing $\dot y\subseteq\dot x$. [F1, F2, F4, F6, step 1.1, step 1.2, step 2.1, step 3.1]

5.1 The dense class in step 4.1 is definable in the ground from the set parameter $\dot y$, so genericity supplies a member. Choose the ground-well-order least such $c_y=(p_y,U_y)\in G$. Define $f_y:D\to3$ by the unique homogeneous colour from step 4.1 when $s\in P_2\restriction\mu_y^+$ is compatible with the small part of $p_y$ (equivalently, its combined trunk reaches $U_y$), and put $f_y(z,s)=2$ both for incompatible bounded trunks and outside that bounded small-trunk domain. Step 4.1 proves uniqueness only in the compatible/reachable case, so this default is essential. All inputs—the ground name $\dot y$, the ground condition $c_y$, the forcing predicate and its ground tree—are ground sets, so Separation in $M$ forms $f_y$ as an element of the fixed ground set $3^D$. [F5, step 2.1, step 3.1, step 4.1]

6.1 Let $y_0\ne y_1$. If $\mu_{y_0}=\mu_{y_1}$, choose $w$ in their symmetric difference and an occurrence $z\in\operatorname{dom}(\dot x)$ with $z_G=w$. A common condition in $G$ below $c_{y_0},c_{y_1}$ and the occurrence condition decides the two opposite memberships. Because step 3.1 put the support of $z$ below the common $\mu$, its small restriction $s$ lies in both bounded domains; restriction and amalgamation yield witnesses for colours $1$ and $0$, so $f_{y_0}(z,s)\ne f_{y_1}(z,s)$. If, say, $\mu_{y_0}>\mu_{y_1}$, choose $w\in y_0$ when $y_0\ne\varnothing$, and otherwise choose $w\in x$; the latter exists because $y_0\ne y_1\subseteq x$. Take a condition in $G$ below $c_{y_0}$ and an occurrence condition for $w$ which forces the corresponding membership or nonmembership in $\dot y_0$. Its domain includes the support coordinate $\mu_{y_0}$, so its small restriction $s$ is in $P_2\restriction\mu_{y_0}^+$ but not in $P_2\restriction\mu_{y_1}^+$. Restriction and amalgamation make its decision witness colour $1$ or $0$ for $y_0$, while definition gives colour $2$ for $y_1$. Thus $y\mapsto f_y$ is injective in all cases. [F2, F3, step 3.1, step 4.1, step 5.1]

7.1 The class relation assigning to each symmetric $y\subseteq x$ its code is definable in $M[G]$ from the canonical name, support and condition choices. Separation in the ground set $3^D$ identifies the used codes. Collection in F5 gathers one preimage for every used code, and injectivity says the resulting set is exactly $\{y\in N_G:y\subseteq x\}$. No Power Set axiom of $M[G]$ was used, because $3^D$ is the ground set fixed in step 5.1. [F5, step 5.1, step 6.1] ∎
