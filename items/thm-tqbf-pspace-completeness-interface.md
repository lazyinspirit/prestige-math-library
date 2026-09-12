---
id: "thm-tqbf-pspace-completeness-interface"
kind: "theorem"
title: "TQBF is PSPACE-complete"
verification:
  audited: 2026-09-13
status: published
origin: "pipeline"
deps: ["def-boolean-formulas-cnf-and-satisfiability-interface", "def-polynomial-space-and-nondeterministic-polynomial-space", "lem-space-bounded-machine-configuration-count", "def-multitape-and-nondeterministic-machines", "def-one-step-configuration-relation", "def-turing-machine-initial-and-halting-configuration-interface", "def-polynomial-time-verifier-and-reduction-interface", "lem-tableau-to-cnf-map-has-polynomial-size-and-time"]
justified_by: []
landmark: true
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
sources:
  references:
    - title: "Arora and Barak, Computational Complexity: A Modern Approach, Theorem 4.11"
      url: https://theory.cs.princeton.edu/complexity/book.pdf
    - title: "Kabanets, CMPT 710 Lectures 12-13, TQBF PSPACE-completeness"
      url: https://www.cs.sfu.ca/~kabanets/710_2007/new_lectures/l13.pdf
proof_strategy: "direct"
---

## Statement

A quantified Boolean formula in prenex form is a finite prefix $Q_1v_1\cdots Q_rv_r$ followed by a Boolean matrix, where $Q_i\in\{\exists,\forall\}$ and the bound variable names are distinct. It is closed when every matrix variable occurs in the prefix. Existential quantification takes the OR of the two substituted truth values; universal quantification takes their AND. Encode the prefix by a unary length header, then a quantifier bit and a self-delimiting variable numeral per entry, followed by the matrix encoding. Reject duplicate names, free variables, trailing bits and malformed input. TQBF is the binary language of well-formed closed true formulas, including true variable-free matrices with an empty prefix.

TQBF is PSPACE-complete under polynomial-time many-one reductions. Its hardness reduction has polynomial output length and can be computed in polynomial time, hence polynomial workspace.

## Facts & Assumptions

**Given:** The above quantified syntax and any language $L$ in PSPACE.

[F1] Boolean formulas have an explicit polynomial parser and recursive truth semantics ([[def-boolean-formulas-cnf-and-satisfiability-interface]]).

[F2] A PSPACE machine is a fixed decider with a polynomial visited-space bound that may be enlarged to dominate the input length ([[def-polynomial-space-and-nondeterministic-polynomial-space]]).

[F3] A fixed space-bounded machine on a fixed input has exponentially many configurations with linear-size codes ([[lem-space-bounded-machine-configuration-count]]).

[L1] A deterministic $k$-tape machine reads one symbol on each of its right-infinite tapes, writes one symbol on each, and moves every head left or right in one simultaneous transition ([[def-multitape-and-nondeterministic-machines]]).

[F4] The one-tape transition relation rewrites its scanned cell and clamps a left move at zero ([[def-one-step-configuration-relation]]). For the $k$-tape variant in L1, the proof applies that same cell/head rule independently to each of the $k$ components; the cited one-tape definition is not itself a multitape transition theorem.

[F5] The one-tape interface explicitly fixes initial tape and accepting/halting states ([[def-turing-machine-initial-and-halting-configuration-interface]]). For L1 the proof uses the componentwise initial state: input on tape one, blanks on the others, and all heads at zero.

[F6] A reduction must be a total polynomial-time transducer with a membership equivalence ([[def-polynomial-time-verifier-and-reduction-interface]]).

[F7] A Boolean matrix has a polynomial-time equisatisfiable CNF with one extension variable per gate and an output unit ([[lem-tableau-to-cnf-map-has-polynomial-size-and-time]]). The stronger pointwise gate-extension property used below follows from the explicit local clauses in step 7.1, not merely from equisatisfiability.

## Proof

1.1 Parse a TQBF input of length $N$, rejecting violations of the statement's syntax. Keep the parsed formula and a table of assigned bits. Recursively assign the next quantified variable 0, evaluate the remaining prefix, save that answer bit, then assign it 1 and evaluate again using the same child workspace. Combine with OR or AND as indicated and undo the assignment. A frame stores an input position and the saved bit; at most $N$ frames and a size-$O(N^2)$ parsed representation suffice. Matrix evaluation likewise uses at most $O(N^2)$ cells. Every recursive call decreases the remaining prefix length; the finite matrix recursion terminates. The empty prefix evaluates the variable-free matrix directly. Counting input cells as well still gives polynomial space. [F1, F2]

1.2 Fix a decider $M$ of $L$ and a known integer polynomial $S(n)\ge n+k+1$ bounding its visited cells on every input. On input $x$, represent each tape by its first $S=S(|x|)$ symbols and its head offset, together with the state. All actual configurations fit because each tape's visited prefix is at most $S$ and the complete input fits too. Use fixed-width fields and add a tag for one special accepting vertex $a_*$. Invalid state/symbol codes and head offsets outside $0,\ldots,S-1$ are excluded; the special vertex has all remaining fields zero. Choose one common bit length $m=O_M(S)$ for all these vertices. This is the explicit full-prefix variant of F3's bounded coding. There are at most $2^m$ vertices, including $a_*$. The initial vertex $s_x$ is written directly from $x$. [F2, F3, F5]

2.1 Construct a Boolean formula $E(X,Y)$ for edges of this finite graph. For every possible state, scanned-symbol tuple and head-offset tuple, enumerate the finitely specified instruction of $M$, assert those source fields, the target state and the componentwise head offsets (using F4's clamped-left rule on each right-infinite tape), the prescribed written symbols, and equality of every unscanned tape cell. Conjoin validity of both endpoint codes. There are $O_M(S^k)$ cases and $O_M(S)$ field comparisons in each, with $O(\log(S+1))$ bits per offset. Thus the disjunction has polynomial encoded size and is produced by polynomial finite loops. Omit transitions leaving the represented interval. Add edges from every ordinary accepting configuration to $a_*$, and a self-loop at $a_*$. Rejecting configurations have no outgoing edges. This supplies a unique terminal target without assuming a physical tape-erasing normalization. From the initial vertex, ordinary edges are exactly M's steps; actual runs never leave the interval. Thus $a_*$ is reachable exactly when M accepts $x$. [L1, F4, F5, step 1.2]

3.1 Let $R_0(X,Y)$ be $\mathrm{Valid}(X)\wedge\mathrm{Valid}(Y)\wedge(X=Y\vee E(X,Y))$. For each next level introduce fresh $m$-bit vectors $Z,U,V$ and a fresh bit $b$. Set $G=(\neg b\wedge U=X\wedge V=Z)\vee(b\wedge U=Z\wedge V=Y)$, and define $R_{i+1}(X,Y)=\exists Z\,\forall b\,\forall U\,\forall V\,(\neg G\vee R_i(U,V))$. Here equality means conjunction of bit equalities, each expanded with AND, OR and NOT. There is just one occurrence of $R_i$. [F1, step 2.1, construct]

4.1 For all bit vectors $X,Y$, $R_i(X,Y)$ holds iff they are valid vertices joined by a path of length at most $2^i$. At level zero this follows from its definition, including the length-zero path. For the successor, a true formula supplies a midpoint $Z$. Specializing the universals to $b=0,(U,V)=(X,Z)$ and $b=1,(U,V)=(Z,Y)$ forces both shorter paths by the induction hypothesis; concatenate them. Conversely split a path of length $h\le2^{i+1}$ after $\min(h,2^i)$ edges. Both portions have length at most $2^i$, so their midpoint works. For any universal assignment either $G$ is false, making the implication true, or it selects one of these two paths. Invalid midpoints cannot pass either selected base validity condition. This proves the induction in both directions. [step 3.1]

5.1 Any reachable vertex has a path without a repeated vertex: delete the segment between two equal vertices and retain its subsequent edges, reducing the length until no repetition remains. Its length is less than $2^m$. Therefore $R_m(s_x,a_*)$ is true exactly when $x\in L$. If $s_x$ already equals a target in another instance, the equality part of $R_0$ handles it; here the distinct special tag keeps the actual initial and accepting target separate. [step 1.2, step 2.1, step 4.1]

6.1 Each recursion level introduces $3m+1$ bound bits and $O(m)$ equality/connective occurrences. Distinct variable names across $m$ levels use $O(\log(m+2))$ bits, so the total encoded size is the polynomial base size plus $O(m^2\log(m+2))$. Put the formula in prenex form without duplication: if $z$ is fresh for $A$, then $A\vee(Qz\,B)$ and $Qz(A\vee B)$ have the same truth value, for either quantifier, by checking whether $A$ is true or false and using the nonempty domain $\{0,1\}$. Apply this identity to pull each inner prefix through its outer guard. Fresh naming prevents capture. Each matrix connective remains once. Finite generation of the base cases, guards and prefix requires polynomial time and space, including substituting constant start/target bits. This proves the total reduction and, with step 1.1, PSPACE-completeness. All selections were finite enumerations or existential witnesses to a single formula; AC is unnecessary. [F6, step 3.1, step 5.1, step 1.1]

7.1 The same reduction may use a 3CNF or 3DNF matrix if desired. For each gate $v=\neg u$, use $(v\vee u)\wedge(\neg v\vee\neg u)$; for $v=u\wedge w$, use $(\neg v\vee u)\wedge(\neg v\vee w)\wedge(v\vee\neg u\vee\neg w)$; for OR, dualize the AND clauses. Pin a constant by a unit clause and require the output by a unit clause. These are clauses of width at most three. For each assignment to the old variables, a gate-by-gate induction shows that exactly one assignment to the fresh gate variables satisfies all gate equations, and it satisfies the output unit exactly when $F=1$. This proves the pointwise property rather than inferring it from F7's mere equisatisfiability. Append existential quantifiers for the fresh gate bits after the old prefix; the resulting 3CNF preserves truth through every old quantifier. Alternatively apply this construction to $\neg F$. Then $F=1$ iff every gate assignment falsifies $C_{\neg F}$. Append universal gate quantifiers and use the matrix $\neg C_{\neg F}$, a disjunction of terms each containing at most three literals by De Morgan's laws. These conversions preserve the truth of the quantified formula in both directions, including constant matrices. They do not assert a polynomial DNF for unquantified equality without extra variables. [F1, F7, step 6.1]

7.2 Here is also precise workspace accounting for generation: with read-only input and write-only output excluded from the auxiliary workspace measure, the fixed-M reduction uses $O_M(\log(n+2))$ auxiliary cells. Compute the fixed polynomial S and m in binary with a constant number of $O(\log(n+2))$-bit registers. The base edge formula is output by loops over k head offsets, finite states/symbols, tape cells and bit positions, all polynomially bounded; k is fixed, so the number of loop registers is constant. Initial-configuration bits are obtained by rescanning x with a binary position counter. Output the prenex prefix with one descending level counter; output the guards in the same order, using the current level to name its endpoint vectors, then the base formula, then the required closing symbols by a counter. The one-copy recurrence never requires storing a stack of levels. Every emitted variable name is computed from its level, vector type and bit offset, all polynomially bounded integers. [step 6.1]

8.1 If a restricted matrix is requested, generate its gate clauses using rescans of that regular unquantified matrix. Number connective occurrences by their positions. Find a node's children by scanning its prefix-encoded subtree with a pending-child counter: reading a node changes the counter by its arity minus one, and zero marks the end of the subtree. Constants have arity zero. All indices and counters are bounded by the polynomial output length. Each requested matrix symbol can be recomputed by restarting the generator of step 7.2 and counting its output; save the constant number of current position registers on separate tracks. Thus iterating over gate positions and their children uses only a constant number of logarithmic registers, with polynomial repeated-scan time. Output F7's clauses, or their De Morgan negations with the appropriate new quantifiers from step 7.1. This proves regular logspace generation under the explicitly stated input/output-excluding convention, without claiming an all-tape visited-space bound smaller than n. [F7, step 7.1, step 7.2] ∎
