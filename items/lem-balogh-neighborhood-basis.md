---
id: lem-balogh-neighborhood-basis
kind: lemma
title: Balogh neighborhood basis
status: draft
origin: pipeline
deps: [def-balogh-continuum-topology, def-axiom-of-choice]
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
    - title: "Hart, Set-Theoretic Methods in General Topology, Chapter 5 section 2, open-set definition and Exercises 1–2, 8, printed pp. 31–32; recursive bases and closure trace proved here"
      url: https://fa.ewi.tudelft.nl/~hart/onderwijs/old-courses/settop.pdf
---

## Statement

Assume AC. The Balogh open-set rule defines a $T_1$ topology on $X$. Its $U_n$ are open and its $L_n$ are relatively discrete. Define families $\mathcal B(\alpha,n)$ recursively: $\mathcal B(\alpha,0)=\{\{(\alpha,0)\}\}$, and $\mathcal B(\alpha,n+1)$ consists of the sets

$$\{(\alpha,n+1)\}\cup\bigcup_{\beta\in F}V_\beta,\qquad F\in\mathcal F_\alpha,\quad V_\beta\in\mathcal B(\beta,n).$$

These are open neighborhood bases at the indicated points; their members lie in $U_n$ at height $n$ and meet $L_n$ in exactly that point. The family $\mathcal F_\alpha$ is closed under finite intersections and can omit any prescribed finite set. Empty members are allowed.

For every $A\subseteq\kappa$ and every $n<\omega$, the next-level closure trace is

$$\Phi(A):=\{\alpha:(\alpha,n+1)\in\overline{A\times\{n\}}\}=\{\alpha:(\forall F\in\mathcal F_\alpha)\ F\cap A\ne\varnothing\},$$

which is independent of $n$.

## Facts & Assumptions

**Given:** The displayed topology rule and families.

[F1] $F(\alpha,s,a)$ is defined by simultaneous binary equations followed by removal of $a$, and openness is the immediate-lower-level condition ([[def-balogh-continuum-topology]]).

[A1] AC supplies simultaneous choices of recursively available neighborhoods ([[def-axiom-of-choice]]).

## Proof

1.1 For any $s_1,s_2,a_1,a_2$, membership in the intersection of the two corresponding $F$ sets means satisfying both sets of binary equations and avoiding both finite excluded sets. Therefore $F(\alpha,s_1,a_1)\cap F(\alpha,s_2,a_2)=F(\alpha,s_1\cup s_2,a_1\cup a_2)$. Also $F(\alpha,\varnothing,\varnothing)=\kappa$, and enlarging $a$ omits any specified finite set. The empty open set satisfies the rule vacuously; the whole space uses $\kappa$ as each witness. At a point in a union, a witness from one containing open set is also a witness for the union. At a point in the intersection of two open sets, intersect their witnesses using the identity just proved. These checks prove arbitrary-union and finite-intersection closure, hence the topology axioms. [F1]

1.2 Each $U_n$ satisfies the open rule because the immediate preceding level of any positive-height point in it is entirely in $U_n$. The complement of a singleton $(\gamma,m)$ is open: at a remaining point of height $m+1$ use $F(\alpha,\varnothing,\{\gamma\})$; at a positive height with preceding level different from $m$ use $\kappa$. Thus the topology is $T_1$. [F1]

2.1 We verify the recursive bases by induction on the finite height. At height zero, singletons are open by F1 and contained in every neighborhood of their point. Suppose the assertions hold at height $n$. Each displayed recursive set at height $n+1$ is open: its lower points lie in one of the open $V_\beta$, and its top point has the witness $F$ because $(\beta,n)\in V_\beta$ for every $\beta\in F$. It lies in $U_{n+1}$ and has only its designated point at height $n+1$. Conversely an open set $O$ containing $(\alpha,n+1)$ has a witness $F$ by F1. Each $(\beta,n)$ for $\beta\in F$ is in $O$ and, by the induction assertion, has a member $V_\beta$ of its recursive base contained in $O$. A1 chooses these simultaneously; their union with the top point is contained in $O$. When $F=\varnothing$, there are no such choices and the top singleton itself is open. This completes the finite-height verification of the bases. [step 1.1, F1, A1]

3.1 The base in step 2.1 meets $L_n$ in only its designated point, proving that $L_n$ is discrete in its relative topology. If every $F\in\mathcal F_\alpha$ meets $A$, every open neighborhood of $(\alpha,n+1)$ has a lower-level witness meeting $A\times\{n\}$ by F1; the point is in its closure. Conversely if $F\cap A=\varnothing$ for some $F$, the set $O=\{(\alpha,n+1)\}\cup(F\times\{n\})\cup U_{n-1}$ is open. Its top has witness $F$, its height-$n$ points have the whole preceding level as witness if $n>0$, and lower points are covered by the open $U_{n-1}$ of step 1.2. When $n=0$, $U_{-1}$ is empty and height-zero points need no witness. This $O$ misses $A\times\{n\}$, proving the reverse direction of the closure formula. The formula has no remaining dependence on $n$. Together with steps 1.1, 1.2 and 2.1 these prove all conclusions. QED. [step 1.1, step 1.2, step 2.1, F1]
