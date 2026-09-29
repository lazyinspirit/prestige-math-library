---
id: thm-indecomposable-projective-kg-modules-correspond-to-simple-kg-modules
kind: theorem
title: "Indecomposable projective kG-modules correspond to simple modules through taking the head"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-projective-covers-exist-and-are-unique-for-finite-dimensional-algebras, def-module-radical-socle-head-and-loewy-series, lem-radical-of-a-finite-length-module-is-superfluous, thm-jacobson-radical-is-nilpotent-and-the-quotient-is-semisimple, def-semisimple-module]
proof_strategy: direct
verification:
  audited: 2026-09-04
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "Peter Webb, A Course in Finite Group Representation Theory (23 Feb 2016 draft)"
      url: "https://www-users.cse.umn.edu/~webb/RepBook/RepBookLatex.pdf"
---

## Statement

For a finite-dimensional algebra $A$, sending an indecomposable
finite-dimensional projective module $P$ to its head
$P/\operatorname{rad}(P)$ induces a bijection between
isomorphism classes of indecomposable finite-dimensional projective modules
and isomorphism classes of simple finite-dimensional modules. The inverse
sends a simple module $S$ to its projective cover.

## Facts & Assumptions

**Given:** A finite-dimensional algebra $A$.

[L1] Every finite-dimensional module has a projective cover, unique up to isomorphism over the target ([[thm-projective-covers-exist-and-are-unique-for-finite-dimensional-algebras]]).

[F1] The head of a module is the quotient by its radical ([[def-module-radical-socle-head-and-loewy-series]]).

[L2] The radical of a finite-length module is superfluous ([[lem-radical-of-a-finite-length-module-is-superfluous]]).

[L3] For a finite-dimensional algebra $A$, the quotient $A/J(A)$ is semisimple ([[thm-jacobson-radical-is-nilpotent-and-the-quotient-is-semisimple]]).

[F2] A semisimple module is a direct sum of simple submodules ([[def-semisimple-module]]).

## Proof

**Proof technique:** direct.

1.1 Let $\pi:P\to S$ be the projective cover of a simple module $S$. If $P=P_1\oplus P_2$, then $S=\pi(P_1)+\pi(P_2)$, so simplicity forces one summand, say $\pi(P_1)$, to equal $S$. Then $P=P_1+\ker\pi$, and because $\ker\pi$ is superfluous in a projective cover, $P=P_1$. Hence $P_2=0$, so the projective cover of a simple module is indecomposable. [L1, given, algebra]

1.2 Now let $P$ be an indecomposable finite-dimensional projective module, and put $J=J(A)$. The quotient map $P\to\operatorname{hd}(P)=P/JP$ is a projective cover: its kernel is $\operatorname{rad}(P)=JP$ by [F1], and that kernel is superfluous by [L2]. The head is nonzero, since otherwise the superfluity condition applied with the zero submodule would force $P=0$. It is a finite-dimensional module over the semisimple algebra $B=A/J$ by [L3]. Choose finitely many vector-space generators to make it a quotient of a finite sum of copies of ${}_BB$. By [L3] and [F2], that sum is a finite direct sum of simple modules. Its quotient is likewise a finite direct sum of simples: process the summands in order; the image of each is zero or simple, and either lies in the sum of earlier images or meets that sum trivially, so retain exactly the latter images. Thus $\operatorname{hd}(P)\cong S_1\oplus\cdots\oplus S_r$ for some $r\ge1$. [F1, F2, L2, L3, given, algebra]

2.1 For each $S_i$, let $\pi_i:Q_i\to S_i$ be its finite-dimensional projective cover from [L1], with kernel $K_i$. The finite direct sum $Q=\bigoplus_iQ_i$ is projective by lifting one component at a time, and $\pi=\bigoplus_i\pi_i:Q\to\bigoplus_iS_i$ is surjective with kernel $K=\bigoplus_iK_i$. Each $K_i$ is superfluous. If a maximal submodule of $Q_i$ omitted $K_i$, their sum would equal $Q_i$, a contradiction; hence $K_i\subseteq\operatorname{rad}(Q_i)=JQ_i$ by [F1]. Therefore $K\subseteq\bigoplus_iJQ_i=JQ=\operatorname{rad}(Q)$, and [L2] makes $K$ superfluous because $Q$ is finite-dimensional. Thus $\pi$ is a projective cover of the head. Uniqueness in [L1] gives $P\cong Q$. Each $Q_i\ne0$ because it surjects onto $S_i\ne0$; indecomposability of $P$ therefore forces $r=1$. Thus the head is simple. [L1, L2, F1, step 1.2, algebra]

3.1 Step 1.1 constructs an indecomposable projective from each simple module, and steps 1.2–2.1 show that taking the head of an indecomposable projective returns a simple module. The two constructions are inverse up to isomorphism by uniqueness of projective covers. [L1, step 1.1, step 1.2, step 2.1] ∎
