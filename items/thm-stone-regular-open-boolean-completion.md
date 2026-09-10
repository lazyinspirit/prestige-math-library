---
id: thm-stone-regular-open-boolean-completion
kind: theorem
title: The regular open completion of a Boolean algebra
status: draft
origin: pipeline
deps: [thm-regular-open-sets-form-a-complete-boolean-algebra, thm-stone-clopen-representation-under-bpi]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Fremlin, Measure Theory, 314T(a) and 314U, Chapter 31, pp. 40–41; local dense-cut uniqueness proof"
      url: https://www1.essex.ac.uk/maths/people/fremlin/chap31.pdf
---

## Statement

Assume BPI over ZF. The map $i:B\to\operatorname{RO}(\operatorname{Ult}(B))$, $i(b)=[b]$, is an order-dense Boolean embedding into a complete Boolean algebra and preserves every existing supremum and infimum in $B$, including empty ones. For any two order-dense Boolean embeddings $j:B\to C$ and $k:B\to D$ into complete Boolean algebras there is exactly one Boolean isomorphism $\Phi:C\to D$ satisfying $\Phi\circ j=k$.

## Facts & Assumptions

[F1] [[thm-regular-open-sets-form-a-complete-boolean-algebra]] gives the complete regular-open algebra, with ordinary intersection as finite meet and interior of complement as Boolean complement.

[F2] [[thm-stone-clopen-representation-under-bpi]] identifies $B$ with the clopen algebra of its Stone space under BPI; the basic sets $[b]$ form a clopen basis.

## Proof

**Given:** BPI and a Boolean algebra $B$, allowing $0=1$.

1.1 Put $X=\operatorname{Ult}(B)$. Every clopen $K$ is regular open since $\operatorname{int}\overline K=K$. On clopens the operations of F1 give ordinary intersections, complements and finite unions, because these sets are already clopen. Thus F2 gives a Boolean embedding $i:B\to\operatorname{RO}(X)$, whose codomain is complete by F1. If $U\in\operatorname{RO}(X)$ is nonempty, take one $x\in U$ and a basic clopen $[b]$ with $x\in[b]\subseteq U$. This makes $0<i(b)\le U$ and proves order density. [F1, F2, algebra]

1.2 We record two consequences of order density using only Boolean laws. Let $j:B\to C$ be any order-dense Boolean embedding with $C$ complete. For $c\in C$ put $c_0=\bigvee\{j(b):j(b)\le c\}$. Then $c_0\le c$. If strict, density gives $0<j(a)\le c\wedge\neg c_0$. But $j(a)\le c$ puts $j(a)\le c_0$, a contradiction. Thus $c=c_0$. Next suppose $s=\bigvee_B A$ exists. The element $u=\bigvee_Cj[A]$ is at most $j(s)$. If $j(s)\wedge\neg u>0$, density gives $0<j(a)\le j(s)\wedge\neg u$. Order reflection implies $a\le s$ and $a\wedge b=0$ for every $b\in A$. Then $s\wedge\neg a$ is an upper bound of $A$ strictly below $s$, contradicting its least-upper-bound property. Therefore $u=j(s)$. Complements convert existing infima to suprema and show their preservation as well. The calculation includes $A=\varnothing$, since its supremum is zero and embeddings preserve bounds. [given, algebra]

2.1 Applying step 1.2 to the embedding of step 1.1 proves the claimed preservation of existing bounds. To prove uniqueness of completions, take the stated $j:B\to C$ and $k:B\to D$ and define $\Phi(c)=\bigvee\{k(b):j(b)\le c\}$. Completeness of $D$ defines this value uniquely for every $c$; monotonicity follows from inclusion of the indexing sets. If $j(b)\le c$, then $k(b)\le\Phi(c)$. Conversely suppose $j(b)\nleq c$. Choose by density $0<j(a)\le j(b)\wedge\neg c$. For every $t$ with $j(t)\le c$, $a\wedge t=0$, so $k(t)\le\neg k(a)$ and hence $\Phi(c)\le\neg k(a)$. But $0<k(a)\le k(b)$, so $k(b)\nleq\Phi(c)$. We have proved the exact cut identity $k(b)\le\Phi(c)$ iff $j(b)\le c$. [step 1.1, step 1.2, algebra]

3.1 Define symmetrically $\Psi(d)=\bigvee\{j(b):k(b)\le d\}$. The cut identity gives $\Psi(\Phi(c))=\bigvee\{j(b):j(b)\le c\}=c$ by step 1.2. Interchanging the roles of the two embeddings gives the reverse cut identity and $\Phi(\Psi(d))=d$. Both maps are monotone, so they are inverse order isomorphisms. An order isomorphism preserves bounds and least/greatest bounds: applying its inverse to any competing bound reduces the required inequality to the original least/greatest property. It therefore preserves binary joins and meets; it also preserves complements, since the image of the complement has meet zero and join one with the image element, and complements are unique in a Boolean algebra. Thus $\Phi$ is a Boolean isomorphism. For $b\in B$, every index $t$ with $j(t)\le j(b)$ satisfies $t\le b$, and $t=b$ itself is included, giving $\Phi(j(b))=k(b)$. [step 1.2, step 2.1, algebra]

4.1 Any Boolean isomorphism $\Theta:C\to D$ over $B$ is an order isomorphism and hence preserves every supremum by the bound argument of step 3.1. The dense-supremum equality of step 1.2 forces $\Theta(c)=\bigvee\{\Theta(j(b)):j(b)\le c\}=\Phi(c)$ for all $c$, proving uniqueness. If $B$ is trivial, its Stone space is empty and the regular-open algebra is trivial. Any bound-preserving embedding from this $B$ forces $0_C=1_C$ and likewise for $D$, so the uniqueness statement also holds there. The only selections in the proof are one point and one basic neighborhood or one nonzero dense element at a time; no AC is needed beyond the explicit BPI hypothesis for F2. QED. [F1, F2, step 1.2, step 3.1, algebra]
