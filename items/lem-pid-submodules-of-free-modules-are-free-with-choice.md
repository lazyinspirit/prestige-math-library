---
id: lem-pid-submodules-of-free-modules-are-free-with-choice
kind: lemma
title: "Under Choice, a submodule of an arbitrary-rank free module over a PID is free"
status: draft
origin: pipeline
deps: [def-principal-ideal-domain, def-free-module-on-a-set-and-standard-basis, def-axiom-of-choice, thm-well-ordering-theorem, thm-transfinite-induction]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: "Garrett, Finitely-generated modules, §6, Theorem 6.0.1 and proof, printed pp.177–178"
      url: https://www-users.cse.umn.edu/~garrett/m/algebra/notes_2023-24/11.pdf
    - title: "Goel, Commutative Algebra, Chapter 8, footnote 2, printed p.137 (PDF index 137)"
      url: https://gdmgoel.github.io/notes/CA_Notes.pdf
---

## Statement

Assume the Axiom of Choice. If $R$ is a commutative principal ideal domain, $F$ is a free $R$-module on an arbitrary set, and $N\subseteq F$ is a submodule, then $N$ is free.

## Facts & Assumptions

**Given:** Such $R,F,N$, and AC.

[F1] In a PID every ideal is principal, and the ring is a domain: [[def-principal-ideal-domain]].

[F2] A free module has unique finite-support basis expansions, including the empty basis for zero: [[def-free-module-on-a-set-and-standard-basis]].

[F3] AC selects an element of each nonempty set in a set-indexed family: [[def-axiom-of-choice]].

[F4] Under AC every set can be well ordered: [[thm-well-ordering-theorem]].

[F5] A property on a well-order follows if its truth below any element implies its truth at that element: [[thm-transfinite-induction]].

## Proof

1.1 Fix a basis $(e_a)_{a\in I}$ of $F$ and well-order $I$. Put $F_{\leq a}=\operatorname{span}\{e_b:b\leq a\}$, $F_{<a}=\operatorname{span}\{e_b:b<a\}$, and $N_{\leq a}=N\cap F_{\leq a}$. The coordinate projection $p_a:F\to R$ is linear by uniqueness of basis expansions. [F2, F4, given]

2.1 Its image $J_a=p_a(N_{\leq a})$ is an ideal: $p_a(x)-p_a(y)=p_a(x-y)$ and $rp_a(x)=p_a(rx)$ for $x,y\in N_{\leq a}$ and $r\in R$. Write $J_a=(\rho_a)$. For each $a$ with $J_a\ne0$, the set of pairs $(\rho,u)$ with $J_a=(\rho)$, $u\in N_{\leq a}$, and $p_a(u)=\rho$ is nonempty. AC selects such a pair $(\rho_a,u_a)$ simultaneously for these indices. In particular $\rho_a\ne0$. Let $S=\{a:J_a\ne0\}$. [step 1.1, F1, F3]

3.1 We verify the hypothesis of transfinite induction for the assertion that $N_{\leq a}$ is spanned by the $u_b$ with $b\in S$, $b\leq a$. Suppose the assertion holds at every $b<a$ and take $x\in N_{\leq a}$. If $p_a(x)=0$, put $y=x$. Otherwise $a\in S$, and $p_a(x)=r\rho_a$ for some $r\in R$; put $y=x-ru_a$. In both situations $y\in N\cap F_{<a}$. If $y\ne0$, its finite support has a greatest element $b<a$, so the assertion at $b$ expresses $y$ in the required earlier generators. If $y=0$, its expression is the empty sum. Restoring $ru_a$ when present proves the assertion at $a$. [step 1.1, step 2.1, F2]

3.2 For a finite relation $\sum_{a\in E}r_au_a=0$ with distinct $a\in S$, suppose some coefficient is nonzero and take the greatest such index $a$. Every $u_b$ with $b<a$ has zero $a$ coordinate. Applying $p_a$ gives $r_a\rho_a=0$. Since $R$ is a domain and $\rho_a\ne0$, this forces $r_a=0$, contrary to its selection. Thus all coefficients vanish. [step 1.1, step 2.1, F1]

4.1 Transfinite induction now proves the assertion at every $a$. Each nonzero $x\in N$ has a greatest support index and hence belongs to one $N_{\leq a}$; therefore the $u_a$ span $N$. This also covers a limit initial segment: every one of its finite supports lies in a smaller principal initial segment, so no additional generator is needed at a limit cut. [step 3.1, F2, F5]

5.1 Spanning and independence make $(u_a)_{a\in S}$ a basis. If $N=0$, every $J_a=0$ and this is the empty basis; if $I=\varnothing$, also $F=N=0$. In rank one the same construction is simply the zero ideal or its single nonzero generator. These possibilities require no choice from an empty fiber. [step 4.1, step 3.2, F2] ∎
