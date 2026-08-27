---
id: thm-abelian-groups-are-amenable
kind: theorem
title: "Under the ultrafilter lemma, abelian groups are amenable"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [cor-fundamental-theorem-of-finitely-generated-abelian-groups-from-pid-modules, thm-folner-criterion-for-amenability]
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

Assume the ultrafilter lemma. Every abelian group is amenable.

## Facts & Assumptions

**Given:** An abelian group $A$ and the ultrafilter lemma.

[L1] A finitely generated abelian group is isomorphic to $\mathbb Z^r\oplus T$ with $T$ finite ([[cor-fundamental-theorem-of-finitely-generated-abelian-groups-from-pid-modules]]).

[L2] Under the ultrafilter lemma, the Folner condition is equivalent to amenability ([[thm-folner-criterion-for-amenability]]).

## Proof

**Proof technique:** direct.

1.1 Suppose first that $A$ is finitely generated. By [L1], write $A\cong\mathbb Z^r\oplus T$ with $T$ finite. Let $S\subseteq A$ be finite and let $\varepsilon>0$. If $r=0$, then $A=T$ is finite and $F=A$ satisfies $sF=F$ for every $s\in S$, so the Folner condition is immediate. Assume now that $r\ge1$. Transport $S$ across the isomorphism, and let $M$ be the maximum of the $\ell^\infty$-norms of the $\mathbb Z^r$-components of the transported elements. For $n\ge1$, put $B_n=[-n,n]^r\times T$. Then every translate by an element of $S$ changes only the $M$-thick boundary layers of the box, so $|(s+B_n)\triangle B_n|=O(n^{r-1})$ uniformly in $s\in S$, while $|B_n|=(2n+1)^r|T|$. For large $n$ this gives $|(s+B_n)\triangle B_n|<\varepsilon|B_n|$ for every $s\in S$. Thus finitely generated abelian groups satisfy the Folner condition. [L1, given, algebra]

2.1 By [L2], every finitely generated abelian group is therefore amenable. [L2, step 1.1]

3.1 Now let $A$ be arbitrary. Given a finite subset $S\subseteq A$ and $\varepsilon>0$, the subgroup $\langle S\rangle$ is finitely generated and abelian, so step 2.1 makes it amenable. Applying [L2] inside $\langle S\rangle$ yields a finite nonempty set $F\subseteq\langle S\rangle$ with $|sF\triangle F|<\varepsilon|F|$ for every $s\in S$. The same set $F$ witnesses the Folner condition in $A$. Since $S$ and $\varepsilon$ were arbitrary, [L2] shows that every abelian group is amenable. [L2, step 2.1, given] ∎
