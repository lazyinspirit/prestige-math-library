---
id: thm-subgroups-and-quotients-of-amenable-groups-are-amenable
kind: theorem
title: "Under the ultrafilter lemma, subgroups and quotients of amenable groups are amenable"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-left-invariant-mean-and-amenable-group, def-normal-subgroup, thm-folner-criterion-for-amenability]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
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

Assume the ultrafilter lemma. Every subgroup of an amenable group is
amenable, and every quotient of an amenable group by a normal subgroup is
amenable.

## Facts & Assumptions

**Given:** An amenable group $G$ and the ultrafilter lemma.

[L1] Amenability means existence of a left-invariant mean ([[def-left-invariant-mean-and-amenable-group]]).

[L2] Normal subgroups are the conjugation-invariant subgroups for which the quotient group is formed ([[def-normal-subgroup]]).

[L3] Under the ultrafilter lemma, amenability is equivalent to the Folner condition ([[thm-folner-criterion-for-amenability]]).

## Proof

**Proof technique:** direct.

1.1 Let $H\le G$. To show that $H$ is amenable, by [L3] it is enough to verify the Folner condition in $H$. Fix a finite subset $S\subseteq H$ and $\varepsilon>0$. If $S=\varnothing$, then $\{e\}\subseteq H$ is already an $(S,\varepsilon)$-Folner set. Assume now that $S\neq\varnothing$, and put $\delta=\varepsilon/|S|$. Since $G$ is amenable, [L3] gives a finite nonempty set $F\subseteq G$ with $|sF\triangle F|<\delta|F|$ for every $s\in S$. Write $F=\bigsqcup_{j=1}^m E_jt_j$, where the $E_j$ are the nonempty intersections of $F$ with the finitely many right $H$-cosets that meet $F$, transported back into $H$. For each $s\in S$, left translation by $s$ preserves every right $H$-coset $Ht_j$, so $sF\triangle F=\bigsqcup_{j=1}^m\bigl((sE_j)t_j\triangle E_jt_j\bigr)$ and hence $\sum_{j=1}^m |sE_j\triangle E_j|=|sF\triangle F|$. Summing over $s\in S$ gives $$\sum_{j=1}^m\sum_{s\in S}|sE_j\triangle E_j|<|S|\delta|F|=\varepsilon|F|=\varepsilon\sum_{j=1}^m|E_j|.$$ Therefore some $j$ satisfies $\sum_{s\in S}|sE_j\triangle E_j|<\varepsilon|E_j|$, and then each summand is itself $<\varepsilon|E_j|$. So $E_j$ is an $(S,\varepsilon)$-Folner set in $H$. Since $S$ and $\varepsilon$ were arbitrary, $H$ satisfies the Folner condition, and [L3] makes $H$ amenable. [L3, given, algebra]

1.2 Let $N\trianglelefteq G$, and let $q:G\to G/N$ be the quotient map from [L2]. For bounded $u:G/N\to\mathbb R$, define $m_{G/N}(u)=m(u\circ q)$ using a left-invariant mean $m$ on $G$. Then $m_{G/N}$ is a mean, and for $\bar g=gN$ one has $(\bar g\cdot u)\circ q=g\cdot(u\circ q)$, so left invariance of $m$ implies $m_{G/N}(\bar g\cdot u)=m_{G/N}(u)$. Therefore the quotient is amenable. [L1, L2, given]

2.1 Steps 1.1 and 1.2 prove the two permanence statements. [step 1.1, step 1.2] ∎
