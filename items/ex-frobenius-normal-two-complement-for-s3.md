---
id: ex-frobenius-normal-two-complement-for-s3
kind: example
title: "Frobenius normal two complement for S_3"
status: draft
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [ex-s3-as-a-frobenius-group, thm-frobenius-normal-p-complement-theorem, def-normal-p-complement-and-p-nilpotent-group, def-p-local-normalizer-for-normal-complement-theory, def-control-of-fusion-in-a-sylow-p-subgroup, def-sylow-p-subgroup, def-finite-symmetric-group-and-permutation-notation, lem-conjugating-a-cycle-relabels-its-entries, def-alternating-group, cor-alternating-group-is-normal-and-has-half-the-elements, def-normal-subgroup, def-subgroup, thm-lagrange, lem-subgroups-of-finite-p-groups-are-p-groups, def-finite-p-group, def-conjugacy-class-and-centralizer, thm-conjugation-is-an-automorphism]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Paul Flavell, An Introduction to Transfer and Fusion in Finite Groups, §§2–5"
      url: "https://web.mat.bham.ac.uk/P.J.Flavell/fusion.pdf"
      locator: "§§2.1–2.5, 3.1–3.8, 4.1–4.3, 5.5–5.10, PDF pp. 1–15"
    - title: "David Craven, Finite Group Theory, Lecture 3"
      url: "https://www.maths.ox.ac.uk/system/files/attachments/Lecture%203_0.pdf"
      locator: "Lecture 3, Theorem 3.8 and sheet 3 solutions, pp. 38, 83–84"
verification:
  precheck: pass
---

## Example

Let $G=S_3$ be the symmetric group on $0,1,2$ and let $p=2$
([[def-finite-symmetric-group-and-permutation-notation]]). Then:

1. $A_3=\{\operatorname{id},(0\,1\,2),(0\,2\,1)\}$ is a normal $2$-complement of
   $S_3$, so that $S_3$ is $2$-nilpotent
   ([[def-normal-p-complement-and-p-nilpotent-group]], [[def-alternating-group]]);
2. for a Sylow $2$-subgroup $P$ of $S_3$ the only nontrivial $2$-local
   normalizer $N_G(Q)$ with $1\ne Q\le P$ is $N_{S_3}(P)=P$ itself, so there is one such normalizer for fixed $P$. As $P$ varies, these
   are the three subgroups of order $2$, forming one conjugacy class ([[def-p-local-normalizer-for-normal-complement-theory]]); each is a
   finite $2$-group, hence $2$-nilpotent with trivial normal $2$-complement;
3. a Sylow $2$-subgroup of $S_3$ controls its own element fusion
   ([[def-control-of-fusion-in-a-sylow-p-subgroup]]).

Consequently all three conditions of the Frobenius normal $p$-complement theorem
hold for $(S_3,2)$, in accordance with
[[thm-frobenius-normal-p-complement-theorem]].

## Facts & Assumptions

**Given:** The symmetric group $S_3=\operatorname{Sym}(\{0,1,2\})$ and the prime $p=2$.

[F1] Elements, conjugacy classes and order-$2$ subgroups of $S_3$: one-line notation identifies the permutations of $\{0,1,2\}$ with the lists $[b_0,b_1,b_2]$ whose entries are $0,1,2$ each occurring once, so $|S_3|=3\cdot2\cdot1=6$ and $S_3=\{\operatorname{id},(0\,1),(0\,2),(1\,2),(0\,1\,2),(0\,2\,1)\}$; conjugation relabels the entries of a cycle, $g(a\,b)g^{-1}=(g(a)\,g(b))$ and $g(a\,b\,c)g^{-1}=(g(a)\,g(b)\,g(c))$, so the conjugacy classes are $\{\operatorname{id}\}$, $\{(0\,1),(0\,2),(1\,2)\}$ and $\{(0\,1\,2),(0\,2\,1)\}$; and the conjugates $\langle(0\,1)\rangle^{g}=\langle(g(0)\,g(1))\rangle$ of $\langle(0\,1)\rangle$ are exactly the three subgroups $\{\operatorname{id},(0\,1)\},\{\operatorname{id},(0\,2)\},\{\operatorname{id},(1\,2)\}$ of order $2$ ([[def-finite-symmetric-group-and-permutation-notation]], [[lem-conjugating-a-cycle-relabels-its-entries]], [[ex-s3-as-a-frobenius-group]]).

[F2] $A_3\mathrel{\trianglelefteq}S_3$ has order $3$ and $A_3=\{\operatorname{id},(0\,1\,2),(0\,2\,1)\}$ ([[def-alternating-group]], [[cor-alternating-group-is-normal-and-has-half-the-elements]], [[ex-s3-as-a-frobenius-group]], [[def-normal-subgroup]]).

[F3] Sylow and subgroup order facts: $|S_3|=6=2\cdot3$, so the exact power of $2$ dividing $|S_3|$ is $2$, and every subgroup of order $2$ is a Sylow $2$-subgroup; a subgroup of $S_3$ has order dividing $6$, so every $2$-subgroup of $S_3$ has order $1$ or $2$; a group of order $2$ is a finite $2$-group ([[def-sylow-p-subgroup]], [[thm-lagrange]], [[def-finite-p-group]], [[lem-subgroups-of-finite-p-groups-are-p-groups]]).

[F4] Normal $p$-complement: a normal subgroup $K\mathrel{\trianglelefteq}G$ with $p\nmid|K|$ and $[G:K]$ a power of $p$ is a normal $p$-complement of $G$; the trivial subgroup has order $1$, which is prime to every $p$, and if $G$ is a finite $p$-group then $K=\{1\}$ is a normal $p$-complement because $[G:\{1\}]=|G|$ is a power of $p$ ([[def-normal-p-complement-and-p-nilpotent-group]], [[def-sylow-p-subgroup]], [[def-finite-p-group]], [[thm-lagrange]]).

[F5] Local normalizers and fusion: for $1\ne Q\le P$ with $P\in\operatorname{Syl}_p(G)$ the normalizer $N_G(Q)$ is the local subgroup of the theory; and $P$ controls fusion in $P$ with respect to $G$ when every $G$-conjugacy between two elements of $P$ is realized by an element of $P$ ([[def-p-local-normalizer-for-normal-complement-theory]], [[def-control-of-fusion-in-a-sylow-p-subgroup]], [[def-conjugacy-class-and-centralizer]], [[thm-conjugation-is-an-automorphism]]).

[F6] Frobenius normal $p$-complement theorem: for a finite group $G$, a prime $p$ and $P\in\operatorname{Syl}_p(G)$, the conditions (a) $G$ has a normal $p$-complement, (b) every $N_G(Q)$ with $1\ne Q\le P$ has a normal $p$-complement, and (c) $P$ controls fusion in $P$, are equivalent ([[thm-frobenius-normal-p-complement-theorem]]).



## Verification

**Proof technique:** direct.

1.1 $P:=\{\operatorname{id},(0\,1)\}$ is a subgroup of $S_3$ of order $2$ by [F1], hence is a Sylow $2$-subgroup of $S_3$ by [F3]. [F1, F3]

1.2 $A_3$ is normal in $S_3$ of order $3$ by [F2], so $2\nmid|A_3|$ and $[S_3:A_3]=6/3=2=2^{1}$ is a power of $2$ by [F1] and [F3]; hence $A_3$ is a normal $2$-complement of $S_3$ by [F4]. This is assertion 1. [F1, F2, F3, F4]

2.1 Let $Q\ne\{1\}$ be a $2$-subgroup of $P$. By [F3] the order of $Q$ divides $|P|=2$, so $Q=P$; hence the only nontrivial $2$-local normalizer with respect to $P$ is $N_{S_3}(P)$. By [F1] the conjugates of $P=\langle(0\,1)\rangle$ are the three distinct subgroups of order $2$ of $S_3$, and $P^{g}=P$ means $\{g(0),g(1)\}=\{0,1\}$, which holds exactly for $g\in P$, that is $N_{S_3}(P)=P$: for this fixed $P$, condition (b) contains only $N_{S_3}(P)=P$. Varying $P$ yields three conjugate subgroups, each equal to its own normalizer. [F1, F3, F5, step 1.1]

2.2 We show that $P$ controls fusion in $P$ with respect to $S_3$. Let $x,y\in P$ and $g\in S_3$ with $y=x^{g}$. If $x=\operatorname{id}$ then $y=\operatorname{id}=x^{\operatorname{id}}$ with $\operatorname{id}\in P$. If $x\ne\operatorname{id}$ then $x=(0\,1)$ by [F1], and $y=x^{g}$ is a transposition, hence lies in the conjugacy class $\{(0\,1),(0\,2),(1\,2)\}$ of $x$ by [F1]; as $y\in P=\{\operatorname{id},(0\,1)\}$ we get $y=(0\,1)=x=x^{\operatorname{id}}$. In both cases $y$ is conjugate to $x$ by an element of $P$. This is assertion 3. [F1, F5, step 1.1]

3.1 Each of these local normalizers is a group of order $2$, hence a finite $2$-group by [F3]; therefore its trivial subgroup is a normal $2$-complement by [F4]. [F3, F4, step 2.1]

4.1 By step 1.2 condition (a) holds, by steps 2.1 and 3.1 condition (b) holds, and by step 2.2 condition (c) holds; in accordance with [F6] the three equivalent conditions of the Frobenius normal $p$-complement theorem are satisfied for $(S_3,2)$. ∎ [F6, step 1.2, step 3.1, step 2.2]
