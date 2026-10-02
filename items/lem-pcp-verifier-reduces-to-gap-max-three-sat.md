---
id: lem-pcp-verifier-reduces-to-gap-max-three-sat
kind: lemma
title: "A constant-query PCP verifier yields constant-gap Max-3SAT"
status: draft
origin: pipeline
deps:
  - def-gap-problem-and-gap-preserving-reduction
  - thm-pcp-theorem-np-equals-pcp-log-n-o-one
  - def-pcp-class-with-completeness-and-soundness
  - def-pcp-verifier-randomness-query-and-proof-length
  - thm-three-sat-is-np-complete
  - def-axiom-of-choice
  - lem-rat-embeds-dense
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Arora and Barak, Computational Complexity: A Modern Approach, §18.2.4 Theorem 18.13 and §18.2.5 Lemma 18.15 with proof, printed pp. 358–360"
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Choice for the currently published PCP supplier proof
route. For every language $L$ in NP, the published perfect-completeness binary
PCP verifier with $q=O(1)$ nonadaptive queries, $r=O(\log n)$ fair random bits
and fixed soundness $s<1$ gives a deterministic polynomial-time map
$x\mapsto F_x$ to a 3-CNF formula $F_x$ with $M\ge1$ clauses and a fixed
$\delta>0$ such that $x\in L$ implies
$\operatorname{OPT}_{\mathrm{Max3SAT}}(F_x)=M$, while $x\notin L$ implies
$\operatorname{OPT}_{\mathrm{Max3SAT}}(F_x)\le(1-\delta)M$.

## Facts & Assumptions

**Given:** A language $L\in NP$, an input $x$ of length $n$, and the verifier supplied by the PCP theorem over the binary proof alphabet, whose proof length is bounded by a polynomial $p$.

[F1] $\mathrm{NP}=\operatorname{PCP}(\log n,O(1))$: every $L\in NP$ has a constant $s<1$, a bound $r(n)=O(\log n)$ and a constant bound $q$ with $L\in\operatorname{PCP}(r,q;1,s)$ over the binary alphabet, that is, a verifier with perfect completeness, soundness at most $s$, $O(\log n)$ random bits, a constant number of nonadaptive bit queries, and one fixed polynomial-length proof per input. ([[thm-pcp-theorem-np-equals-pcp-log-n-o-one]])

[F2] Membership $L\in\operatorname{PCP}(r,q;c,s)$ means: on every input $x$, if $x\in L$ there is one fixed proof $\pi$ with acceptance probability at least $c$, and if $x\notin L$ every fixed proof has acceptance probability at most $s$; probabilities are over the verifier's coins and the same deterministic proof is used for every coin string. ([[def-pcp-class-with-completeness-and-soundness]])

[F3] A nonadaptive verifier uses at most $r(n)$ unbiased random bits, reads the fixed proof at at most $q(n)$ locations computed from $x$ and the coins before any symbol is read, and its acceptance probability for a fixed proof is the proportion of the $2^{r(n)}$ coin strings on which it accepts; the coin set is nonempty even for $r(n)=0$. ([[def-pcp-verifier-randomness-query-and-proof-length]])

[F4] The language $3$-SAT consists of satisfiable CNF formulas with exactly three literals per clause. ([[thm-three-sat-is-np-complete]])

[F5] For Max-3SAT the scale is the number of clauses and the optimum is the maximum number of simultaneously satisfied clauses, so the no side of a gap statement is the value inequality $\operatorname{OPT}\le sM$ with no quotient. ([[def-gap-problem-and-gap-preserving-reduction]])

[F6] The Axiom of Choice states that every family of nonempty sets has a choice function. Here it is assumed solely for the currently published proof route of the PCP supplier, which reaches a published algebraic embedding-extension result whose proof invokes Zorn's lemma; the finite verifier-to-formula reduction of this lemma makes only explicit finite choices. ([[def-axiom-of-choice]])

[F7] Strictly between any two real numbers lies a rational. ([[lem-rat-embeds-dense]])

## Proof

**Proof technique:** direct.

1.1 Fix $L\in NP$ and an input $x$ of length $n$. Under the Axiom of Choice hypothesis of [F6], [F1] supplies a verifier $V$ for $L$ with perfect completeness $c=1$, fixed soundness $s_0<1$, a bound $r(n)=O(\log n)$, a constant query bound $q$, and a fixed polynomial bound $p$ on the addressable proof length. By [F7], fix a rational $s$ with $s_0<s<1$; the verifier also has soundness at most $s$. This rational constant may be hardcoded without computing $s_0$. Put $R:=2^{r(n)}$, so $R\ge1$ and $R$ is polynomially bounded in $n$. [F1, F6, F7, given, construct]

1.2 For each coin string $\sigma$, the nonadaptive verifier queries a set $Q_\sigma$ of distinct proof locations determined by $x$ and $\sigma$, with $|Q_\sigma|\le q$; let $P_\sigma\subseteq\{0,1\}^{Q_\sigma}$ be the finite set of local assignments on which $V$ rejects, $|P_\sigma|\le2^q$. If $Q_\sigma=\varnothing$, then $P_\sigma$ is either empty (the verifier accepts) or the single empty assignment (the verifier rejects). [F3, given, construct]

2.1 Build a CNF formula $\Phi_x$ over one Boolean variable per addressable proof location, treating each coin string $\sigma$ in exactly one of three cases. If $P_\sigma=\varnothing$, insert one tautology $w\vee\lnot w\vee w$ on a fresh bit reserved to $\sigma$. If $Q_\sigma=\varnothing$ and the verifier rejects, insert only the contradictory pair $z\vee z\vee z$ and $\lnot z\vee\lnot z\vee\lnot z$ on a fresh bit reserved to $\sigma$; do not insert an empty clause. Otherwise $Q_\sigma\ne\varnothing$: for every $\rho\in P_\sigma$ insert $C_{\sigma,\rho}=\bigvee_{i\in Q_\sigma}\ell_i(\rho)$, where $\ell_i(\rho)$ is $\lnot\pi_i$ if $\rho(i)=1$ and $\pi_i$ if $\rho(i)=0$. This clause is falsified exactly by the assignments realizing $\rho$. Every inserted clause has width between $1$ and $\max(q,3)$, and the construction is an explicit finite procedure. [F3, step 1.2, construct]

3.1 Convert each clause of width $d$ into a block of 3-clauses with fresh auxiliary bits reserved to that block: for $d=3$ keep the clause; for $d=2$ write $\ell_1\vee\ell_2\vee\ell_2$; for $d=1$ write $\ell_1\vee\ell_1\vee\ell_1$; for $d\ge4$ use fresh bits $y_1,\dots,y_{d-3}$ and the chain $\ell_1\vee\ell_2\vee y_1$, then $\lnot y_k\vee\ell_{k+2}\vee y_{k+1}$ for $1\le k\le d-4$, then $\lnot y_{d-3}\vee\ell_{d-1}\vee\ell_d$; each written clause has exactly three literal occurrences, so $F_x$ is a 3-CNF in the format of [F4], and distinct blocks share no auxiliary bit. [F4, step 2.1, construct]

4.1 For $1\le d\le3$, padding or keeping a clause preserves its truth value. For $d\ge4$, if all original literals are false, satisfying the first clause would force $y_1$ true, the intermediate clauses would force all subsequent $y_i$ true, and the last clause would then be false; thus every auxiliary assignment falsifies at least one clause. Conversely, if $\ell_k$ is true, assigning $y_i$ true for $i\le k-2$ and false for $i\ge k-1$ satisfies the whole chain. The tautology of step 2.1 is always satisfied, while its contradictory pair always has exactly one falsified clause. [step 2.1, step 3.1, algebra]

5.1 Count clause occurrences in the blocks checked in step 4.1. Each coin string contributes at least one: the always-accepting case contributes one tautology, the no-query rejecting case contributes two clauses, and every other case contributes between $1$ and $2^q$ pattern blocks, each of at most $\max(1,q-2)$ clauses. Thus $K:=(2^q+1)\max(2,q-2)$ bounds the contribution of any coin string, including $q=0$, and $R\le M\le KR$. In particular $M\ge1$ and is the scale of [F5]. [F5, step 2.1, step 3.1, step 4.1, algebra]

6.1 Suppose $x\in L$. By perfect completeness some fixed proof $\pi$ is accepted on every one of the $R$ coin strings, so for no $\sigma$ does the realized local pattern lie in $P_\sigma$; every clause $C_{\sigma,\rho}$ is therefore satisfied by the proof variables, the tautology clauses are satisfied by their fresh bits, and step 4.1 supplies auxiliary values satisfying all 3-clauses of every block. Hence all $M$ clauses can be satisfied simultaneously and $\operatorname{OPT}_{\mathrm{Max3SAT}}(F_x)=M$. [F2, step 4.1, step 5.1, choose]

6.2 Suppose $x\notin L$ and fix any assignment to all variables of $F_x$. By soundness at least $(1-s)R$ coin strings reject its fixed proof part. For each such $\sigma$ with $Q_\sigma\ne\varnothing$, the realized rejected pattern falsifies $C_{\sigma,\rho}$, so step 4.1 forces a falsified 3-clause in its block. For a rejecting $\sigma$ with $Q_\sigma=\varnothing$, its contradictory pair has a falsified clause instead. Distinct coin strings contribute distinct clause occurrences, even when the written clauses coincide, so at least $(1-s)R$ occurrences are falsified. Hence $\operatorname{OPT}_{\mathrm{Max3SAT}}(F_x)\le M-(1-s)R$. [F2, F3, step 2.1, step 4.1, step 5.1, algebra]

7.1 Set $\delta:=(1-s)/K>0$, a fixed rational constant because $s<1$ is rational and $K$ is a positive integer. From $M\le KR$ we get $R\ge M/K$, so step 6.2 gives $\operatorname{OPT}_{\mathrm{Max3SAT}}(F_x)\le M-(1-s)R\le M-(1-s)M/K=(1-\delta)M$. [step 1.1, step 5.1, step 6.2, algebra]

8.1 The map $x\mapsto F_x$ is deterministic and polynomial-time: the verifier is a uniform polynomial-time algorithm, $R=2^{O(\log n)}$ is polynomially bounded, each coin string's queries and local predicate are computed in polynomial time, and polynomially many clauses of constant width are written; $M\ge1$ by step 5.1. Therefore $x\in L$ implies $\operatorname{OPT}_{\mathrm{Max3SAT}}(F_x)=M$ and $x\notin L$ implies $\operatorname{OPT}_{\mathrm{Max3SAT}}(F_x)\le(1-\delta)M$ with the fixed $\delta>0$ of step 7.1; by [F5] these are the yes-side equality and no-side value inequality of the constant-gap Max-3SAT statement with scale $M$. [F5, step 1.1, step 6.1, step 7.1, algebra] ∎
