---
id: lem-compact-open-subgroups-in-totally-disconnected-lca-groups
kind: lemma
title: Totally disconnected LCA groups have bases of compact open subgroups
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 0
deps: [lem-a-locally-compact-hausdorff-space-has-a-base-of-open-sets-with-compact-closure, def-compact-space, def-connected-component-and-quasicomponent, def-connected-space, def-continuous-map-top, def-generated-subgroup, def-hausdorff-space, def-locally-compact-space, def-neighbourhood-top, def-product-topology, def-subgroup, def-subspace-topology-top, def-topological-group, def-topological-space, def-totally-disconnected-and-totally-separated-spaces, lem-compactness-of-a-subspace-is-ambient, lem-topological-group-translations-and-inversion, thm-closed-subspace-of-a-compact-space-is-compact, thm-compact-hausdorff-total-disconnectedness-and-total-separatedness-agree, thm-compact-iff-fip, thm-compact-subset-of-a-hausdorff-space-is-closed, thm-subspace-closure-and-interior]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: T. W. Koerner, Topological Groups (author lecture notes)
    url: https://www.dpmms.cam.ac.uk/~twk10/Topg.pdf
    locator: 'Lemmas 14.9 and 14.10, printed p. 28: compact open sets and compact open subgroup neighbourhoods in totally disconnected locally compact groups.'
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Let $G$ be a totally disconnected ([[def-totally-disconnected-and-totally-separated-spaces]]) locally compact Hausdorff abelian topological group ([[def-locally-compact-space]], [[def-hausdorff-space]], [[def-topological-group]]). Then every neighbourhood of $0$ contains a compact open subgroup of $G$. More precisely:

(i) if $E\subseteq G$ is compact and open then there is a neighbourhood $W$ of $0$ with $W=-W$ and $E+W=E$;

(ii) if in addition $0\in E$, then $E$ contains a compact open subgroup of $G$;

(iii) such an $E$ is a finite union of open cosets of that subgroup.

No choice principle is used.

## Facts & Assumptions

**Given:** A totally disconnected locally compact Hausdorff abelian group $G$ with identity $0$.

[F1] $G$ is totally disconnected: every connected component of $G$ is a singleton, and for $x\in G$ the component $C(x)$ is the largest connected subset of $G$ containing $x$. Subsets carry the subspace topology, and connectedness of a subset is intrinsic: a subset $A$ of a subspace $Y\subseteq X$ is connected in $Y$ exactly when it is connected in $X$. ([[def-totally-disconnected-and-totally-separated-spaces]], [[def-connected-component-and-quasicomponent]], [[def-subspace-topology-top]])

[F2] In a compact Hausdorff space, total disconnectedness and total separatedness agree: distinct points are separated by a clopen set. ([[thm-compact-hausdorff-total-disconnectedness-and-total-separatedness-agree]], [[def-totally-disconnected-and-totally-separated-spaces]])

[F3] A compact Hausdorff space $X$ is compact if and only if every family of closed subsets of $X$ with the finite intersection property has nonempty total intersection. A set is clopen when it is both open and closed; finite unions and finite intersections of clopen sets are clopen, and arbitrary intersections of closed sets are closed. ([[thm-compact-iff-fip]], [[def-connected-space]], [[def-topological-space]])

[F4] In a locally compact Hausdorff space each neighbourhood contains a compact neighbourhood of its point ([[lem-a-locally-compact-hausdorff-space-has-a-base-of-open-sets-with-compact-closure]]); and a compact subset of a Hausdorff space is closed. A closed subset of a compact space is compact; compactness of a subset is a property of the ambient space. ([[def-locally-compact-space]], [[def-neighbourhood-top]], [[thm-compact-subset-of-a-hausdorff-space-is-closed]], [[thm-closed-subspace-of-a-compact-space-is-compact]], [[lem-compactness-of-a-subspace-is-ambient]])

[F5] Addition $G\times G\to G$ and inversion $G\to G$ are continuous, and for fixed $a\in G$ the translations $x\mapsto a+x$ and $x\mapsto x+a$ are homeomorphisms carrying open sets to open sets. ([[def-topological-group]], [[lem-topological-group-translations-and-inversion]], [[def-product-topology]], [[def-continuous-map-top]])

[F6] The cosets of a subgroup $F\le G$ partition $G$; a subset $E\subseteq G$ satisfying $f+E=E$ for every $f\in F$ is a union of cosets of $F$. A subgroup containing a neighbourhood of $0$ is open in $G$. ([[def-subgroup]], [[def-topological-group]])

[F7] A preimage of a closed set under a continuous map is closed; the interior of a subset is open; a set open in the subspace $N$ has the form $N\cap O$ with $O$ open in $G$. ([[def-continuous-map-top]], [[thm-subspace-closure-and-interior]], [[def-subspace-topology-top]])

[F8] If $U_1$ is open in $G$ and $U_1\subseteq N$, a set open in $N$ and contained in $U_1$ is open in $G$: if $V\subseteq N$ is open in $N$ and $V\subseteq U_1$, say $V=N\cap O$ with $O$ open in $G$, then $V=U_1\cap O$ is open in $G$. ([[def-subspace-topology-top]], [[thm-subspace-closure-and-interior]])

## Proof

1.1 In a compact Hausdorff totally disconnected space $X$, let $U$ be an open neighbourhood of $x$. Let $\mathcal C$ be the family of all clopen sets containing $x$. Total separatedness implies the open sets $X\setminus C$, $C\in\mathcal C$, cover the compact set $X\setminus U$: each $y\notin U$ is excluded by at least one such $C$. A finite subcover gives $C_1,\dots,C_n\in\mathcal C$ with $X\setminus U\subseteq\bigcup_j(X\setminus C_j)$. Thus $V=\bigcap_jC_j$ is clopen and $x\in V\subseteq U$. If the complement is empty take $V=X$. The family includes all separators, so no point-indexed choice is made. [F2, F3]

1.2 Let $E\subseteq G$ be compact and open; if $E=\varnothing$ take $W:=G$, which is symmetric and satisfies $E+W=\varnothing=E$. Assume $E\neq\varnothing$. The set $D:=\{(x,y)\in E\times G:x+y\notin E\}$ is closed in $E\times G$: it is the trace on $E\times G$ of the preimage of the closed set $G\setminus E$ under the continuous addition map $G\times G\to G$. It misses $E\times\{0\}$ because $x+0=x\in E$ for $x\in E$. Consider the family $\mathcal R$ of all pairs $(U,V)$ with $U$ open in $E$, $V$ open in $G$ containing $0$, and $U\times V$ disjoint from $D$. The product topology and continuity ensure their first coordinates cover $E$, without choosing one rectangle for each point. [F5, F7]

2.1 Compactness gives finitely many pairs $(U_j,V_j)\in\mathcal R$ whose first coordinates cover $E$. Put $W_0=\bigcap_jV_j$ and $W=W_0\cap(-W_0)$. Then $W$ is a symmetric open neighbourhood of $0$, and each $x\in E$, $w\in W$ belongs to some admissible rectangle, giving $x+w\in E$. Since $0\in W$, $E+W=E$, proving (i). Only a finite subfamily of the specified family was selected. [F5, step 1.2]

2.2 Let $U$ be a neighbourhood of $0$ in $G$. Choose an open neighbourhood $U_0\subseteq U$ of $0$ and a compact neighbourhood $N$ of $0$ with $N\subseteq U_0$. Then $N$ is a compact Hausdorff space, and it is totally disconnected: for $x\in N$ the component of $x$ in $N$ is a connected subset of $G$ containing $x$, hence is contained in the component $C(x)=\{x\}$ of $G$. Applying step 1.1 in $N$ to the relatively open set $N\cap\mathrm{int}_G(N)\cap U_0$, which contains $0$, we obtain a set $V$ that is clopen in $N$ with $0\in V\subseteq\mathrm{int}_G(N)\cap U_0$. [F1, F4, F8, step 1.1]

3.1 Now let $E$ be compact and open with $0\in E$, and let $W$ be as in step 2.1, so that $W=-W$, $0\in W$ and $E+W=E$. Put $F:=\{x\in G:x+E=E\}$. Then $F$ is a subgroup: if $x+E=E$ and $y+E=E$ then $(x+y)+E=x+(y+E)=x+E=E$ by associativity, and from $x+E=E$ we get $-x+E=-x+(x+E)=E$; certainly $0\in F$. Also $F\subseteq E$, because for $x\in F$ one has $x=x+0\in x+E=E$. Moreover $F\supseteq W$: for $w\in W$, both $E+w\subseteq E$ and $E-w\subseteq E$ hold, so $E+w=E$, so $F$ contains the neighbourhood $W$ of $0$ and is therefore open; and $F$ is closed because $\{x:x+E\subseteq E\}=\bigcap_{e\in E}(E-e)$ and $\{x:E\subseteq x+E\}=\bigcap_{e\in E}(e-E)$ are intersections of translates of the closed set $E$, hence closed, and $F$ is their intersection. Being a closed subset of the compact set $E$, the subgroup $F$ is compact. Thus $F$ is a compact open subgroup of $G$ contained in $E$, proving (ii). [F6, step 2.1]

3.2 The set $V$ of step 2.2 is compact in $G$: it is closed in $N$ and $N$ is compact. It is open in $G$: being open in $N$ it has the form $V=N\cap O$ with $O$ open in $G$, and $V\subseteq\mathrm{int}_G(N)$, so the criterion of [F8] applies with $U_1:=\mathrm{int}_G(N)$ and $V=U_1\cap O$. Thus $V$ is a compact open subset of $G$ with $0\in V\subseteq U$. [F8, step 2.2]

4.1 Since $E$ is a union of cosets of the subgroup $F$ (for $f\in F$ one has $f+E=E$) and $F$ is open, each coset is open and the cosets partition $E$; compactness of $E$ makes this open cover of $E$ finite, so $E$ is a finite union of open cosets of $F$. This proves (iii). [F6, step 3.1]

5.1 Applying step 3.1 to the compact open set $E:=V$ of step 3.2, which contains $0$ and is contained in $U$, produces a compact open subgroup $F_0\subseteq V\subseteq U$. As $U$ was an arbitrary neighbourhood of $0$, every neighbourhood of $0$ contains a compact open subgroup of $G$; together with parts (i), (ii) and (iii) proved in steps 2.1, 3.1 and 4.1 this is the statement. [step 3.2, step 3.1, step 2.1, step 4.1] ∎ 