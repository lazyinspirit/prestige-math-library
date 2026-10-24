---
id: thm-cg-heaps-classify-commutation-classes
kind: theorem
title: "Labeled linear extensions of a heap are exactly the words in its commutativity class, and heaps classify commutativity classes"
status: published
origin: pipeline
pipeline_run: frontier-42-coxeter-32
dependency_level: 2
deps: [def-cg-labeled-word-heap-and-fully-commutative-element, lem-cg-finite-poset-linear-extensions-and-connectivity, def-hh-coxeter-matrix-word-group-and-length, def-partial-order]
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "J. R. Stembridge, On the Fully Commutative Elements of Coxeter Groups, author manuscript (March 1995, minor revisions September 1995); published in J. Algebraic Combin. 5 (1996), 353-385"
      url: "https://dept.math.lsa.umich.edu/~jrs/papers/FC.pdf"
      locator: "Proposition 1.2 and the following invariance remark, PDF pp. 5-6; §1.1 immediately preceding Proposition 1.1 for the decomposition of R(w) into commutativity classes, PDF p. 4"
    - title: "C. Krattenthaler, The theory of heaps and the Cartier-Foata monoid, appendix to the electronic reedition of P. Cartier and D. Foata, Problemes combinatoires de commutation et rearrangements (2006)"
      url: "https://www.mat.univie.ac.at/~kratt/artikel/heaps.pdf"
      locator: "§3, PDF pp. 4-5: heaps correspond to equivalence classes of words modulo commuting interchanges, the inverse being given by linear extensions"
    - title: "P. Cartier and D. Foata, Problemes combinatoires de commutation et rearrangements, Lecture Notes in Mathematics 85, Springer 1969; 2005 TeX reproduction with three appendices, electronic reedition 2006"
      url: "https://www.mat.univie.ac.at/~slc/books/cartfoa.pdf"
      locator: "Chapitre premier, §§2-3, printed pp. 6-9 (equivalence classes of words and their canonical decomposition)"
verification:
  audited: "2026-10-08"
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
---

## Statement

Let $(S,m)$, $W$, $\ell$ be as in [[def-hh-coxeter-matrix-word-group-and-length]] and let heaps, labeled isomorphisms, labeled linear extensions $L(P_s,s)$ and commutativity classes $C(s)$ be as in [[def-cg-labeled-word-heap-and-fully-commutative-element]].

**(1) Linear extensions are the commutativity class.** For every word $s$ in $S$,
$$L(P_s,s)=C(s).$$

**(2) Multiplicities and injectivity.** Let $s=(s_1,\dots,s_k)$. For each $u\in S$ the positions $i$ with $s_i=u$ form a chain in $P_s$, so a linear extension of $P_s$ is determined by its labeled word; hence the map from linear extensions of $P_s$ to words is injective and the number of words in $C(s)$ equals the number of linear extensions of $P_s$. In particular $C(s)$ is finite, all its members have length $k$, and for each $u$ each member contains exactly as many occurrences of $u$ as $s$ does.

**(3) Labeled heaps are a complete invariant.** For words $s,s'$ one has $s\sim s'$ if and only if there is a labeled poset isomorphism $P_s\to P_{s'}$; the isomorphism carries the $j$-th occurrence of $u$ in $s$ to the $j$-th occurrence of $u$ in $s'$. Consequently the assignment $s\mapsto P_s$ induces a bijection between commutativity classes of words and labeled heaps up to labeled isomorphism, whose inverse sends a labeled heap to the set of its labeled linear extensions.

**(4) Heaps of reduced words.** If $w\in W$ and $s,s'\in\mathcal R(w)$ satisfy $s\sim s'$, then $P_s$ and $P_{s'}$ are isomorphic labeled posets. Hence, if $w$ is fully commutative, all reduced words of $w$ have pairwise isomorphic heaps, and the heap $P_w$ of $w$ is well defined up to labeled isomorphism.

## Facts & Assumptions

**Given:** A word $s=(s_1,\dots,s_k)$ in $S$, with heap $P_s=([k],\preceq_s)$.

[F1] Heaps, labeled linear extensions $L(P_s,s)$, commutation classes $C(s)$, full commutativity and the commutation $st=ts$ whenever $m(s,t)=2$ are as in [[def-cg-labeled-word-heap-and-fully-commutative-element]]: $i\prec_s j$ exactly when $i<j$ and ($s_i=s_j$ or $m(s_i,s_j)\ge3$), and $s\sim s'$ means that $s'$ is obtained from $s$ by finitely many interchanges of adjacent letters with $m=2$.

[F2] A partial order is reflexive, antisymmetric and transitive, and two elements are incomparable when neither is below the other ([[def-partial-order]]).

[F3] The Coxeter matrix has $m(s,s)=1$ and symmetric entries, with $m(s,t)\ge2$ for $s\ne t$; $W$ has relators $s^2$ and $(st)^{m(s,t)}$ for finite $m(s,t)$, and $m(s,t)$ is the order of $st$ in $W$ ([[def-hh-coxeter-matrix-word-group-and-length]]).

[F4] Any two linear extensions of a finite poset are obtained from one another by finitely many interchanges of consecutive entries that are incomparable in that poset ([[lem-cg-finite-poset-linear-extensions-and-connectivity]], clause (3)).

## Proof

**Given:** A word $s=(s_1,\dots,s_k)$ in $S$ and its heap $P_s$.

**Proof technique:** direct.

1.1 Three elementary facts about $P_s$. (i) The identity listing $(1,2,\dots,k)$ is a linear extension of $P_s$, since every generating relation $i\prec_s j$ satisfies $i<j$; its labeled word is $s$. (ii) Let $\pi$ be a linear extension of $P_s$ and let $x,y$ be consecutive entries. If $m(s_x,s_y)=2$, then the labels are distinct by $m(s,s)=1$, and neither orientation is a generating relation. If $x,y$ were comparable in the transitive closure, a generating path between them would have an intermediate position; that position must occur between $x$ and $y$ in every linear extension, a contradiction. Thus they are incomparable. Conversely, if they are comparable, orient them so $x<_{P_s}y$. Their consecutiveness in $\pi$ means no position lies strictly between them, so they form a cover. Since the order is generated by the defining relations, a cover must itself be a generating pair: a path of length at least two would have an intermediate position. Hence $s_x=s_y$ or $m(s_x,s_y)\ge3$, so $m(s_x,s_y)\ne2$. Therefore consecutive entries are incomparable exactly when their labels commute, and swapping them preserves the linear-extension property exactly in that case. (iii) If $s_i=s_j$ with $i<j$, then $i\prec_s j$, so for each $u\in S$ the positions carrying label $u$ form a chain, listed in increasing position order. [given, F1, F2, F3]

1.2 If $s'$ is obtained from $s$ by interchanging adjacent letters $s_i,s_{i+1}$ with $m(s_i,s_{i+1})=2$, transpose positions $i$ and $i+1$ and fix all others. The transposition preserves labels. It preserves every generating relation between positions outside the transposed pair because those positions lie either before both or after both; for a pair involving one transposed position and an outside position, the relative position order and the label dependence are unchanged after transporting the position. The transposed pair itself has no generating relation, and no path can relate it because the two positions are adjacent in the word. Thus the transposition preserves the generating relation in both directions, hence its reflexive transitive closure, and is a labeled poset isomorphism $P_s\to P_{s'}$. Composing these maps shows that $s\sim s'$ implies the heaps are isomorphic. [given, F1, F2]

2.1 Clause (1), the inclusion $C(s)\subseteq L(P_s,s)$. Every word of $C(s)$ is the labeled word of some linear extension of $P_s$; this is proved by induction on the number of interchanges. It holds for $s$ by 1.1(i). If $u\in C(s)$ is the labeled word of a linear extension $\pi$ of $P_s$ and $u'$ differs from $u$ by interchanging adjacent letters $u_j,u_{j+1}$ with $m(u_j,u_{j+1})=2$, then the $j$-th and $(j+1)$-st entries $x,y$ of $\pi$ are consecutive with labels $u_j,u_{j+1}$, hence are incomparable by 1.1(ii), so interchanging them in $\pi$ gives a linear extension of $P_s$ whose labeled word is $u'$. [given, F1, step 1.1]

2.2 Clause (1), the inclusion $L(P_s,s)\subseteq C(s)$. Let $\pi$ be a linear extension of $P_s$ with labeled word $u$. By [F4], $\pi$ is obtained from the identity listing by finitely many interchanges of consecutive entries incomparable in $P_s$; by 1.1(ii) each of these interchanges replaces the current labeled word by a word differing in one interchange of adjacent commuting letters, and the labeled word of the identity listing is $s$ by 1.1(i). Hence $u\sim s$, that is, $u\in C(s)$. [given, F1, F4, step 1.1]

3.1 Clause (2). Fix $u\in S$. By 1.1(iii) the positions with label $u$ form a chain of $P_s$, and a linear extension lists them in increasing position order, so the $j$-th occurrence of $u$ in the labeled word of a linear extension is the $j$-th element of that chain; two linear extensions with the same labeled word therefore coincide entry by entry, and the map from linear extensions of $P_s$ to words is injective. By 2.1 and 2.2, $L(P_s,s)=C(s)$, so the number of words of $C(s)$ equals the number of linear extensions of $P_s$; thus $C(s)$ is finite, and since every linear extension lists each position of the finite set $[k]$ exactly once, every member of $C(s)$ has length $k$ and contains each $u$ exactly as many times as the labeling $s$ does. [given, F1, step 1.1, step 2.1, step 2.2]

3.2 Clause (3), from an isomorphism to commutation equivalence. Let $\varphi:P_s\to P_{s'}$ be a labeled isomorphism of posets. Since it is a bijection, $s$ and $s'$ have the same length $k$. With labels $\lambda(i)=s_i$ and $\lambda'(j)=s'_j$, the listing $\rho:=(\varphi^{-1}(1),\varphi^{-1}(2),\dots,\varphi^{-1}(k))$ is a linear extension of $P_s$: if $x<_{P_s}y$, then $\varphi(x)<_{P_{s'}}\varphi(y)$, so $\varphi(x)$ occurs before $\varphi(y)$ in the identity listing of $P_{s'}$, and hence $x$ occurs before $y$ in $\rho$. Its labeled word is $(\lambda(\varphi^{-1}(1)),\dots,\lambda(\varphi^{-1}(k)))=(\lambda'(1),\dots,\lambda'(k))=s'$, by label preservation. Therefore $s'\in L(P_s,s)\subseteq C(s)$ by 2.2, so $s'\sim s$. [given, F1, step 2.2]

4.1 Every labeled isomorphism maps the $j$-th occurrence of each label $u$ to the $j$-th occurrence of $u$: the positions with label $u$ form a chain by 1.1(iii), and the isomorphism preserves its order. Together, steps 1.2 and 3.2 prove $s\sim s'$ exactly when $P_s$ and $P_{s'}$ are isomorphic. In particular $s\mapsto P_s$ is well defined and injective on commutativity classes. [given, F1, step 1.1, step 1.2, step 3.2]

5.1 For any labeled heap $H=(P,\preceq,\lambda)$, its labeled linear extensions are the words $(\lambda(x_1),\dots,\lambda(x_n))$ as $(x_1,\dots,x_n)$ ranges over the linear extensions of $P$. By definition of heap, choose a labeled isomorphism $H\to P_q$ for some word $q$. It transports linear extensions and preserves labels, so the labeled linear extensions of $H$ form exactly $L(P_q,q)=C(q)$ by clause (1). If another word $q'$ represents $H$, then $P_q$ and $P_{q'}$ are isomorphic, so 4.1 gives $q\sim q'$ and $C(q)=C(q')$. Thus the assignment is surjective onto labeled heaps up to isomorphism, and its inverse is the set of labeled linear extensions. [given, F1, step 2.1, step 2.2, step 4.1]

6.1 Clause (4). Let $w\in W$ and $s,s'\in\mathcal R(w)$ with $s\sim s'$. By 4.1 there is a labeled isomorphism $P_s\to P_{s'}$. If $w$ is fully commutative, then all its reduced words lie in one commutativity class, so any two of them are related by such isomorphisms. Therefore the isomorphism class of $P_s$ is independent of the reduced word $s$, defining the heap $P_w$. [given, F1, step 1.2] ∎
