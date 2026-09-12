---
id: "thm-nondeterministic-recursive-padding-separation"
kind: "theorem"
title: "Nondeterministic recursive-padding separation"
status: published
origin: "pipeline"
deps: ["def-nondeterministic-acceptance-time-and-exact-clock", "lem-nondeterministic-two-tape-simulation-with-linear-acceptance-time", "lem-prefix-program-codes-admit-linear-nondeterministic-universal-simulation", "lem-time-controlled-self-reference-for-nondeterministic-machines", "lem-clock-cutoffs-and-unions-preserve-nondeterministic-time-bounds", "lem-no-recursive-bound-covers-all-recursive-unary-languages", "def-uniform-asymptotic-time-space-comparison"]
justified_by: []
landmark: true
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: "Seiferas, Fischer, and Meyer, Theorem 4 and Corollary 4.1, pp. 152-155"
      url: https://www.researchgate.net/publication/220430544_Separating_Nondeterministic_Time_Complexity_Classes
    - title: "Kabanets, CMPT 710 Lecture 10, Theorem 2"
      url: https://www.cs.sfu.ca/~kabanets/710_2007/new_lectures/l10.pdf
    - title: "Vadhan, CS221 Lecture 6, Theorem 6"
      url: https://people.seas.harvard.edu/~salil/cs221/fall02/scribenotes/oct2.pdf
proof_strategy: "direct"
---

## Statement

Let $T:\mathbb N\to\mathbb N$ have an exact clock and satisfy $T(n)\ge n$. There is one binary language $L\in\mathrm{NTIME}(T)$ such that for every total recursive $a\ge n$ with $a(n+1)=o(T(n))$, one has $L\notin\mathrm{NTIME}(a)$. These are the library's all-branch-halting classes with constants fixed per machine. No monotonicity of T or a is assumed.

## Facts & Assumptions

**Given:** A fixed exact clock T. All intermediate unclocked machines below are acceptors measured by shortest accepting time.

[F1] Exact clocks are positive, cutoffs are inclusive, and a T-clocked acceptor has all-branch time $O(n+T(n)+1)$ ([[def-nondeterministic-acceptance-time-and-exact-clock]]).

[F2] Fixed multitape acceptors have two-tape simulations with linear shortest-time overhead ([[lem-nondeterministic-two-tape-simulation-with-linear-acceptance-time]]).

[F3] There is a fixed prefix universal U with per-code linear acceptance bounds ([[lem-prefix-program-codes-admit-linear-nondeterministic-universal-simulation]]).

[F4] A fixed two-tape A has a code e with $L(M_e)=\{w:ew\in L(A)\}$ and shortest-time bound $O_e(|w|+\tau_A(ew)+1)$ ([[lem-time-controlled-self-reference-for-nondeterministic-machines]]).

[F5] Union and clock cutoffs have explicit fixed-constant machines ([[lem-clock-cutoffs-and-unions-preserve-nondeterministic-time-bounds]]).

[F6] No recursive bound covers all recursive unary languages even in shortest-acceptance time ([[lem-no-recursive-bound-covers-all-recursive-unary-languages]]).

[F7] Little-o means every fixed multiple is eventually bounded by the comparison function, with no monotonicity implicit ([[def-uniform-asymptotic-time-space-comparison]]).

## Proof

1.1 Define $L=L_T(U)$. The direct clocked construction in F1 halts on every branch and accepts exactly this cutoff. Since T is positive and $T(n)\ge n$, its time is $O(T(n))$, so $L\in\mathrm{NTIME}(T)$. L depends only on U and T. Fix any candidate a as in the statement and suppose an all-branch machine B recognizes L in $O(a)$. Let V be the union acceptor for B and U from F5. Because $L\subseteq L(U)$, it recognizes exactly $L(U)$. For a sufficiently large fixed integer K, whenever $z\in L$ its shortest V-time is at most $A(|z|)$, where $A(n)=K(a(n)+n+1)$. Enlarge K to cover all finitely many accepted short strings: A is positive there. Thus $A(n)\ge n+1$ and $A(n+1)=o(T(n))$, since $a(n+1)\ge n+1$. [F1, F3, F5, F7]

1.2 Fix for now an arbitrary recursive unary language R and a deterministic decider D for it. Let r(m) be D's finite running time on $1^m$. Construct a multitape acceptor H as follows. Parse its input uniquely as $e1^m0^k$ with valid prefix e; after e, take the maximal initial run of ones and then require only zeros. Reject malformed strings. Simulate D on $1^m$ for at most k steps, counting this budget by a unary copy of the zero suffix. If D halts by that instant, accept or reject according to D. Otherwise, nondeterministically extend the zero suffix to some $k'>k$ and run V on $e1^m0^{k'}$, accepting just when V does. A branch may extend forever. Parsing, bounded simulation and copying cost $O_H(m+k+|e|+1)$; in the recursive case preparation costs $O_H(m+k'+|e|+1)$ before the direct V run. No computation of the possibly enormous r(m) is needed before the bounded test. [F3, F5, construct]

2.1 Apply F2 to H and F4 to its resulting two-tape acceptor. Obtain a fixed code $e_0$ and acceptor P=$M_{e_0}$ with $L(P)=\{w:e_0w\in L(H)\}$. Put $\ell=|e_0|$, $w_k=1^m0^k$, $z_k=e_0w_k$, and $N_k=\ell+m+k$. Combining the two fixed linear overheads with step 1.2 gives an integer $d\ge1$, independent of m,k,k', such that on accepted instances:
$$k\ge r(m)\ \Longrightarrow\ \tau_P(w_k)\le d(N_k+1),$$
$$k<r(m),\ k'>k,\ z_{k'}\in L(V)\ \Longrightarrow\ \tau_P(w_k)\le d(N_{k'}+1+\tau_V(z_{k'})).$$
The second inequality uses the branch which chooses that particular k'. Additive compiler constants and the input-copy terms are absorbed using $N_{k'}+1\ge1$. By F3 choose $\kappa\ge1$ with $\tau_U(z_k)\le\kappa(N_k+\tau_P(w_k)+1)$ whenever P accepts. These constants are fixed after R,D,V and $e_0$ are fixed, before any length induction. [F2, F3, F4, step 1.2]

3.1 First prove the language identity $w_k\in L(P)$ iff $1^m\in R$ for every m,k. For every $k\ge r(m)$, H's bounded D-test finishes and gives exactly R's answer. Now descend through $k=r(m)-1,\ldots,0$, assuming the identity for all larger k'. The compiler identity and H's recursive branch give $w_k\in L(P)$ iff some $z_{k'}\in L(V)$ with $k'>k$. Since $L(V)=L(U)$ and e0 is valid, this is equivalent to some $w_{k'}\in L(P)$. The induction hypothesis makes it equivalent to $1^m\in R$: if R answers yes, take $k'=r(m)$; if no, no larger k' works. This is a finite downward induction below a base range, not an inference from an ungrounded recursive call. [F3, step 1.1, step 1.2, step 2.1]

3.2 For $k<r(m)$ take $k'=k+1$ in the second estimate of step 2.1, which applies whenever $z_{k+1}\in L(V)$: $\tau_P(w_k)\le d(N_k+2+\tau_V(z_{k+1}))$. If also $\tau_V(z_{k+1})\le A(N_k+1)$, then $\tau_P(w_k)\le d(N_k+2+A(N_k+1))$, the step-down estimate used in the second induction below; since $A(N_k+1)\ge N_k+2$ by step 1.1 it is in particular at most $2dA(N_k+1)$. [step 1.1, step 2.1]

4.1 Set $B_0=\kappa(d+2)$ and choose $N_0\ge1$ such that $2B_0 A(N+1)\le T(N)$ for all $N\ge N_0$, possible by F7. Fix a yes input $1^m\in R$ with $\ell+m\ge N_0$. We prove by a second downward induction on k, starting from the entire range $k\ge r(m)$, that $\kappa(N_k+\tau_P(w_k)+1)\le T(N_k)$ and $\tau_V(z_k)\le A(N_k)$. In the base range the first expression is at most $B_0(N_k+1)\le2B_0A(N_k+1)\le T(N_k)$. Therefore U accepts $z_k$ within its exact T-cutoff, so $z_k\in L$ and the bound for V follows from step 1.1. [F7, step 1.1, step 2.1, step 3.1]

For the step from $k+1$ to $k$ the induction hypothesis gives $\tau_V(z_{k+1})\le A(N_k+1)$; hence $z_{k+1}\in L(V)$ and step 3.2 applies, so
$$\kappa(N_k+\tau_P(w_k)+1)\le B_0(N_k+2+A(N_k+1))\le2B_0A(N_k+1)\le T(N_k).$$
The middle inequality uses $A(N_k+1)\ge N_k+2$. Thus $z_k$ again lies in the actual U-cutoff L, yielding $\tau_V(z_k)\le A(N_k)$. This closes the second induction without comparing T at different arguments. In particular $\tau_P(1^m)\le T(m+\ell)$ for every sufficiently long yes input. The original zero suffix may be empty; k=0 is exactly the last induction case. [step 1.1, step 2.1, step 3.2]

4.2 Filter P's inputs to unary words by a complete scan costing $O(m+1)$, rejecting nonunary words. For a fixed threshold $m_0$ covering the preceding finite exceptions, a literal finite trie can decide all unary strings $1^m$ with $m<m_0$ by D's computed answers; on longer inputs run the filtered P. Step 3.1 proves exact recognition of R for all lengths. Now define the single positive recursive function $b(m)=m+1+\sum_{j=0}^{2m}T(j)$. It is recursive because running the fixed exact clock on each finite length computes T. For $m\ge\ell$, $T(m+\ell)\le b(m)$, without any monotonicity hypothesis. Therefore this acceptor of R has shortest acceptance $O_R(b(m))$; the finite trie costs and finitely many exceptional values are absorbed since b is everywhere positive. Crucially b depends only on T, not on the arbitrary recursive unary language R. This contradicts F6. [F1, F6, step 3.1, step 3.2]

5.1 Hence no such B exists for the fixed candidate a. Because step 1.1 chose the same cutoff L before a, this excludes the union over all the stated recursive lower bounds, not merely one separately chosen lower bound. If there are no such a, the exclusion is vacuous and the same clocked L still supplies membership. All searches, branch guesses and code constructions are finite or computable; thresholds are fixed natural witnesses to little-o and do not invoke AC. The all-branch claim is exactly the clocked membership proved in step 1.1. [step 1.1, step 4.2] ∎
