---
id: thm-folner-criterion-for-amenability
kind: theorem
title: "Under the ultrafilter lemma, the Folner condition is equivalent to amenability"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-folner-set-and-folner-condition, def-left-invariant-mean-and-amenable-group, lem-equivalent-folner-boundary-formulations, thm-hall-marriage-finite-bipartite, thm-ultrafilter-lemma]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
sources:
  scraped: []
  references:
    - title: "C. Löh, Geometric Group Theory: An Introduction (2015 course version)"
      url: "https://loeh.app.uni-regensburg.de/teaching/ggt_ws1415/lecture_notes_old.pdf"
    - title: "Cornelia Drutu and Michael Kapovich, Lectures on Geometric Group Theory"
      url: "https://www.math.ucdavis.edu/~kapovich/EPR/kapovich_drutu.pdf"
---

## Statement

Assume the ultrafilter lemma. A group $G$ is amenable if and only if it
satisfies the Folner condition.

The proof spends the ultrafilter extension twice: first to take a limit of
finite averages, and then to extend compatible finite Hall matchings when
proving the reverse implication by contradiction.

## Facts & Assumptions

**Given:** A group $G$ and the ultrafilter lemma.

[A1] Under the ultrafilter lemma, every proper filter extends to an ultrafilter ([[thm-ultrafilter-lemma]]).

[L1] Amenability means existence of a left-invariant mean ([[def-left-invariant-mean-and-amenable-group]]).

[L2] The Folner condition asks for finite nonempty sets with arbitrarily small boundary under each finite test set ([[def-folner-set-and-folner-condition]]).

[L3] One may replace symmetric differences by one-sided boundaries up to a fixed factor ([[lem-equivalent-folner-boundary-formulations]]).

[L4] Hall's theorem gives a matching saturating the finite left part of a
finite bipartite graph exactly when every subset of that left part has enough
neighbours ([[thm-hall-marriage-finite-bipartite]]).

## Proof

**Proof technique:** direct.

1.1 Assume $G$ satisfies the Folner condition. Let $D$ be the directed set of triples $(S,n,F)$ with $S\subseteq G$ finite, $n\ge1$, and $F$ an $(S,1/n)$-Folner set, ordered by enlarging $S$ and $n$. For $d=(S,n,F)$, define $m_d(f)=|F|^{-1}\sum_{x\in F}f(x)$. These $m_d$ are means, and [L3] implies that if $g\in S$ then $|m_d(g\cdot f)-m_d(f)|\le\|f\|_\infty/n$. The cofinal tails $D_{g,N}=\{(S,n,F): g\in S,\ n\ge N\}$ have the finite intersection property, so by [A1] some ultrafilter on $D$ contains all of them. The ultrafilter limit of the bounded family $(m_d(f))_{d\in D}$ is therefore a left-invariant mean on $G$. [A1, L1, L2, L3, given, construct]

1.2 Assume instead that $G$ is amenable but not Folner. Then some finite $S\subseteq G$ and $\varepsilon>0$ satisfy: for every finite nonempty $F\subseteq G$, some $s\in S$ has $|sF\triangle F|\ge\varepsilon|F|$. Put $S_0=S\cup\{e\}$ and $\delta=\varepsilon/2$. Since $|sF|=|F|$, [L3] gives $|sF\setminus F|\ge\delta|F|$ for that $s$, and hence $|S_0F|\ge(1+\delta)|F|$. [L2, L3, given, algebra]

2.1 Choose $m\ge1$ with $(1+\delta)^m\ge2$ and put $K=S_0^m$. Applying step 1.2 successively to $F,S_0F,\ldots,S_0^{m-1}F$ gives $|KF|\ge2|F|$ for every finite nonempty $F\subseteq G$. [step 1.2, construct, algebra]

3.1 Form the bipartite graph with left vertices $G\times\{1,2\}$, right vertices $G$, and edges $(g,r)\sim kg$ for $k\in K$. If $P$ is a finite set of left vertices and $Q$ is its projection to $G$, then $N(P)=KQ$ and $|P|\le2|Q|\le|KQ|$ by step 2.1. Thus [L4] gives a matching saturating every prescribed finite left set. [L4, step 2.1, construct]

4.1 Let $\mathscr M$ be the set of finite partial matchings in this graph, and for finite $P\subseteq G\times\{1,2\}$ let $X_P$ be the set of members of $\mathscr M$ whose domains contain $P$. Step 3.1 shows that the family $(X_P)$ has the finite-intersection property. By [A1], an ultrafilter $\mathcal U$ on $\mathscr M$ contains every $X_P$. For a left vertex $\ell$, the set $X_{\{\ell\}}$ is the disjoint union of the finitely many sets on which the partial matching assigns a fixed neighbour $y\in N(\ell)$. Exactly one such cell belongs to $\mathcal U$; call its neighbour $\Phi(\ell)$. If distinct left vertices had the same $\Phi$-value, the two corresponding cells would have empty intersection, contradicting closure of $\mathcal U$ under intersections. Hence $\Phi:G\times\{1,2\}\to G$ is injective and satisfies $\Phi(g,r)\in Kg$. [A1, step 3.1, construct]

5.1 Write $\Phi_r(g)=\Phi(g,r)$ and, for $r\in\{1,2\}$ and $k\in K$, put $D_{r,k}=\{g:\Phi_r(g)=kg\}$. For each fixed $r$, the sets $D_{r,k}$ partition $G$, while the sets $kD_{r,k}$ partition the range $R_r$ of $\Phi_r$; injectivity of $\Phi$ makes $R_1$ and $R_2$ disjoint. If $m_G$ is a left-invariant mean, write $m_G(E)=m_G(\mathbf1_E)$. Finite additivity and invariance give $m_G(R_r)=\sum_{k\in K}m_G(kD_{r,k})=\sum_{k\in K}m_G(D_{r,k})=m_G(G)=1$ for $r=1,2$. But $R_1\cap R_2=\varnothing$, so positivity gives $2=m_G(R_1)+m_G(R_2)=m_G(R_1\sqcup R_2)\le m_G(G)=1$, a contradiction. [L1, step 4.1, algebra, contradiction]

6.1 Therefore an amenable group cannot fail the Folner condition. Together with step 1.1, this proves the equivalence. [step 1.1, step 1.2, step 5.1, discharge-contradiction] ∎
