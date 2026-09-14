---
id: thm-suslin-tree-regular-open-algebra-is-suslin
kind: theorem
title: "A Suslin tree has a Suslin regular-open algebra"
status: draft
origin: pipeline
deps: [def-suslin-hypothesis-and-suslin-algebra, lem-suslin-tree-forcing-is-countably-distributive, thm-forcing-preorders-have-regular-open-completions, thm-regular-open-sets-form-a-complete-boolean-algebra, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Monk, Set theory following Jech, Lemma 15.45 and complete proof, printed p. 278"
      url: https://euclid.colorado.edu/~monkd/jech.pdf
justified_by: []
forward_refs: []
---

## Statement

Let $T$ be a normal splitting Suslin tree and let $P$ be its reverse forcing order. In ZFC the regular-open completion $B=\operatorname{RO}(P)$ is a nontrivial complete atomless ccc Boolean algebra satisfying the exact diagonal countable-distributivity law. Hence $B$ is a Suslin algebra.

## Facts & Assumptions

**Given:** A normal splitting Suslin tree $T$, its reverse forcing order $P$, and AC.

[F1] A Suslin algebra is a nontrivial complete atomless ccc Boolean algebra satisfying the displayed diagonal distributive identity. [[def-suslin-hypothesis-and-suslin-algebra]]

[F2] The reverse order of a normal Suslin tree is ccc and $\aleph_1$-distributive. [[lem-suslin-tree-forcing-is-countably-distributive]]

[F3] The regular-open completion has a dense nonzero embedding $e:P\to B^+$ that preserves and reflects compatibility. [[thm-forcing-preorders-have-regular-open-completions]]

[F4] Regular open sets form a complete Boolean algebra; their order is inclusion and finite meets are intersections. [[thm-regular-open-sets-form-a-complete-boolean-algebra]]

[A1] AC supplies simultaneous representatives below arbitrary nonzero Boolean antichains. [[def-axiom-of-choice]]

## Proof

1.1 By F3-F4, $B$ is a complete Boolean algebra and each $0<b\in B$ has some tree condition $t$ with $0<e(t)\le b$. Since $P$ is nonempty, its underlying space is nonempty, so the regular-open bounds $0=\varnothing$ and $1=P$ are distinct. Thus $B$ is nontrivial. [F3, F4, given]

2.1 Let $0<b\in B$ and choose $t$ with $e(t)\le b$. Splitting supplies two distinct immediate tree successors $s,u$ of $t$. They are incompatible, so F3 gives nonzero disjoint elements $e(s),e(u)\le e(t)\le b$. Therefore $0<e(s)<b$, proving atomlessness. [F3, step 1.1, given]

2.2 Let $X\subseteq B^+$ be pairwise disjoint. By A1 and density of $e$, choose $t_b\in P$ with $e(t_b)\le b$ for every $b\in X$. If $b\ne c$, compatibility of $t_b,t_c$ would make $e(t_b)\wedge e(t_c)$ nonzero by F3, while it lies below $b\wedge c=0$. Thus the $t_b$ form a forcing antichain; they are distinct and F2 makes $X$ countable. Hence $B$ is ccc. [F2, F3, A1, step 1.1]

2.3 Fix a double sequence $(b_{n,m})_{n,m<\omega}$ in $B$ and put $c=\bigwedge_n\bigvee_mb_{n,m}$ and $r=\bigvee_{f\in\omega^\omega}\bigwedge_nb_{n,f(n)}$. Always $r\le c$. In any complete Boolean algebra, $a\wedge\bigvee X=\bigvee_{x\in X}(a\wedge x)$: the right side is below $a\wedge\bigvee X$, and if $y$ bounds all $a\wedge x$, then $\neg a\vee y$ bounds $X$, giving $a\wedge\bigvee X\le y$. Suppose $0<d=c\wedge\neg r$ and choose $p_0$ with $e(p_0)\le d$. For each $n$, let $D_n$ contain the conditions $q$ such that either $q$ is incompatible with $p_0$, or $e(q)\le b_{n,m}$ for some $m$. This set is open. It is dense: if $q$ is compatible with $p_0$, take $q'\le q,p_0$; since $e(q')\le c\le\bigvee_mb_{n,m}$, the just-proved distributive identity makes some $e(q')\wedge b_{n,m}$ nonzero, and density of $e$ plus compatibility reflection gives an actual $s\le q'$ with $e(s)\le b_{n,m}$. By F2 choose $q\le p_0$ in every $D_n$. Then incompatibility with $p_0$ is impossible. Let $f(n)$ be the least $m$ with $e(q)\le b_{n,m}$. Completeness gives $e(q)\le\bigwedge_nb_{n,f(n)}\le r$, while $e(q)\le e(p_0)\le\neg r$, a contradiction. Therefore $d=0$, so $c\le r$ and the exact diagonal law holds. [F2, F3, F4, step 1.1]

3.1 Steps 1.1-2.3 give nontriviality, completeness, atomlessness, ccc, and precisely the identity in F1. Therefore $B$ is a Suslin algebra. AC is used only at step 2.2 for a set-indexed simultaneous selection and through the already declared distributivity supplier; the regular-open construction itself is choice free. [F1, A1, step 1.1, step 2.1, step 2.2, step 2.3] ∎
