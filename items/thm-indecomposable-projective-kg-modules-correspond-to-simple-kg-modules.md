---
id: thm-indecomposable-projective-kg-modules-correspond-to-simple-kg-modules
kind: theorem
title: "Indecomposable projective kG-modules correspond to simple modules through taking the head"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-projective-covers-exist-and-are-unique-for-finite-dimensional-algebras, def-module-radical-socle-head-and-loewy-series, lem-radical-of-a-finite-length-module-is-superfluous]
proof_strategy: direct
verification:
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

[L1] Every finite-dimensional module has a projective cover, unique up to
isomorphism over the target ([[thm-projective-covers-exist-and-are-unique-for-finite-dimensional-algebras]]).

[F1] The head of a module is the quotient by its radical
([[def-module-radical-socle-head-and-loewy-series]]).

[L2] The radical of a finite-length module is superfluous
([[lem-radical-of-a-finite-length-module-is-superfluous]]).

## Proof

**Proof technique:** direct.

1.1 Let $\pi:P\to S$ be the projective cover of a simple module $S$. If $P=P_1\oplus P_2$, then $S=\pi(P_1)+\pi(P_2)$, so simplicity forces one summand, say $\pi(P_1)$, to equal $S$. Then $P=P_1+\ker\pi$, and because $\ker\pi$ is superfluous in a projective cover, $P=P_1$. Hence $P_2=0$, so the projective cover of a simple module is indecomposable. [L1, given, algebra]

2.1 Now let $P$ be an indecomposable finite-dimensional projective module. The quotient map $P\to\operatorname{hd}(P)$ is a projective cover because its kernel is $\operatorname{rad}(P)$, which is superfluous by [L2]. Write the semisimple head as a direct sum of simple modules $\operatorname{hd}(P)\cong S_1\oplus\cdots\oplus S_r$. Taking the direct sum of the projective covers of the $S_i$ gives another projective cover of $\operatorname{hd}(P)$. By uniqueness in [L1], that direct sum is isomorphic to $P$. Since $P$ is indecomposable, one must have $r=1$. Thus $\operatorname{hd}(P)$ is simple. [L1, L2, F1, step 1.1, algebra]

3.1 Step 1.1 constructs an indecomposable projective from each simple module, and step 2.1 shows that taking the head of an indecomposable projective returns a simple module. The two constructions are inverse up to isomorphism by uniqueness of projective covers. [L1, step 1.1, step 2.1] ∎
