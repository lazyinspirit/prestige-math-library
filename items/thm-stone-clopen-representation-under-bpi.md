---
id: thm-stone-clopen-representation-under-bpi
kind: theorem
title: Stone clopen representation under BPI
status: draft
origin: pipeline
deps: [def-stone-ultrafilter-space-and-clopens, thm-bpi-equivalent-to-boolean-filter-extension]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: "Tressl, Stone Duality for Boolean Algebras, 3.1.4–3.1.5, pp. 10–11"
      url: https://personalpages.manchester.ac.uk/staff/Marcus.Tressl/papers/StoneDualityBooleanAlgebras.pdf
---

## Statement

Assume BPI over ZF. For every Boolean algebra $B$, the space $\operatorname{Ult}(B)$ is compact Hausdorff, and $b\mapsto[b]$ is a Boolean isomorphism $B\to\operatorname{Clop}(\operatorname{Ult}(B))$.

## Facts & Assumptions

[F1] [[def-stone-ultrafilter-space-and-clopens]] gives the basic clopens, their Boolean identities, and the compactness and Hausdorff conventions.

[F2] [[thm-bpi-equivalent-to-boolean-filter-extension]] extends any proper Boolean filter to an ultrafilter under BPI.

## Proof

**Given:** BPI and a Boolean algebra $B$; write $X=\operatorname{Ult}(B)$.

1.1 If $b\not\le c$, the element $d=b\wedge\neg c$ is nonzero, and $\{a:d\le a\}$ is a proper filter. F2 extends it to $U$ with $b\in U$ and $c\notin U$, since otherwise $d\wedge c=0$ would belong to $U$. Thus $[b]\not\subseteq[c]$. Together with the Boolean identities in F1, this shows that $b\mapsto[b]$ is an injective Boolean homomorphism, reflecting order. [F1, F2, algebra]

1.2 If $U,V$ are distinct ultrafilters, some $b$ belongs to exactly one; the other contains $\neg b$. The disjoint open sets $[b]$ and $[\neg b]$ separate them, so $X$ is Hausdorff. [F1, algebra]

1.3 Consider a cover $\{[b]:b\in H\}$ with no finite subcover. No finite join from $H$ is $1$, since F1 would make those finitely many clopens cover $X$. Hence every finite meet from $\{\neg b:b\in H\}$ is nonzero, including the empty meet (otherwise $B$ is trivial and the empty subcover suffices). Their upward closure is a proper filter: concatenation of finite lists gives meet closure, and no witness meet is zero. F2 extends it to an ultrafilter $U$. For every $b\in H$, $\neg b\in U$ forces $U\notin[b]$, contradicting the cover. Thus every basic cover has a finite subcover. [F1, F2, algebra]

2.1 Given an arbitrary open cover $\mathcal O$, let $H$ consist of all $b$ such that $[b]\subseteq O$ for some $O\in\mathcal O$. The basis property in F1 makes these sets a cover; step 1.3 gives finitely many covering basic sets. For each of this finite list take one containing member of $\mathcal O$. These form a finite subcover, proving compactness with only finite choice. [F1, step 1.3, algebra]

3.1 For a clopen $K\subseteq X$, all basic clopens contained in $K$, together with the open set $X\setminus K$, cover $X$. Step 2.1 supplies a finite subcover; intersecting its union with $K$ gives $K=[b_1]\cup\cdots\cup[b_n]=[b_1\vee\cdots\vee b_n]$. If the finite list is empty, $K=\varnothing=[0]$. Hence the embedding in step 1.1 is onto all clopens. If $B$ is trivial, $X=\varnothing$ and both algebras have one element; the same identities and compactness conclusion hold. QED. [F1, step 1.1, step 2.1, algebra]
