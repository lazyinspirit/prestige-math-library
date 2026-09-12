# Selected pure-membership U-AX encoding and checked induction plan

Date: 2026-09-12. This is support-only evidence, not an item or certification.
The executable artifacts are
[the selected encoding](support-phase-2-next-17-uax-selected-encoding.mjs) and
[the induction plan](support-phase-2-next-17-uax-induction-plan.mjs).

## 1. Literal selections

The selected pure-membership formula D(v_0) says that v_0 occurs in a value
of a finite constructible-hierarchy history. It asserts the existence of
ordinals alpha, beta=alpha+1 and theta=beta+1 and an exact set graph h on
theta. Its zero value is empty, successor values are Def of the previous
value, and nonzero limit values are unions of earlier values.

Every abbreviation is expanded to equality, membership, negation,
conjunction and existential quantification. Graph entries are Kuratowski
pairs. Ordinal, successor, exact graph, subset and union are the bounded
pure-membership formulas from the finite-word support. For nonempty A,
Def(A) is expanded using the selected internal Decode formula:

    y in Def(A) iff some canonical formula word f, arity n and
    A-valued parameter graph s decode y as the subset defined by f.

For empty A the formula uses Def(empty)={empty}. No symbol for L, Def,
satisfaction, functions, ordered pairs, ordinals or finite words remains.
The result has only v_0 free. It has 46,067 nodes, depth 263 and a
11,790,652-bit canonical formula code.

This is a concrete syntactic selection. Identifying it semantically with the
published L still requires correctness of the selected Decode/Tab formula and
uniqueness of hierarchy histories; syntax tests alone do not prove that
theorem.

The selected AC axiom is the well-ordering principle: every set admits a
strict well-order coded by Kuratowski pairs. The expansion checks exact field,
irreflexivity, transitivity, totality and a least member for every nonempty
subset. Over ZF this is equivalent to choice-function AC. It has 554 nodes and
a 141,312-bit code.

The selected GCH sentence says that for every infinite initial ordinal k,
there are its next initial ordinal l, the exact power set p of k, and a
bijection p to l. Initial ordinal, finite ordinal, successor cardinal, power
set, function and bijection are all expanded in pure membership. Together
with the selected AC sentence this is standard cardinal GCH. It has 1,953
nodes and a 497,248-bit code.

The U-certificate predicate retains the existing ZF tags:

- [0,j] for a fixed ZF axiom;
- [1,formula-code,z] for Separation;
- [2,formula-code,z,w] for Replacement.

It adds [3] for exactly the selected AC code and [4] for exactly the selected
GCH code. Swapped tags, changed sentences and malformed schema certificates
are rejected. This supplies a literal primitive-recursive E_U(a,w).

## 2. Exact endpoints without giant literals

Raw relativization duplicates the 46,066-node D formula at every quantifier.
AC has 63 quantified nodes and an exact raw endpoint of 24,318,951 tokens.
GCH has 235 quantified nodes and an exact raw endpoint of 90,712,583 tokens.

The endpoint descriptor fixes the D and source codes, the first binder used
for alpha-renaming, the quantifier count, the output token count, and the
deterministic raw-relativization algorithm. Atoms are unchanged, Boolean
constructors commute, and each existential becomes an existential whose body
conjoins the capture-safe renamed D copy with the translated child.

This is a finite program for the literal old-syntax endpoint, not a DAG-coded
alternative formula. Streaming its tokens through the sentinel encoder gives
the same natural number as eager translation whenever materialization is
practical. Source traversal, maximum-index selection, renaming, token emission
and sentinel accumulation are primitive recursive. Output size affects
runtime, not primitive recursiveness.

## 3. Mechanically checked induction trace

The plan compiler emits a numerical trace for every accepted U axiom. Its
independent checker reconstructs E_U, checks the canonical subformula
schedule, recomputes the endpoint descriptor, enforces the exact branch, and
checks every dependency is earlier.

| Branch | Ordered stages after syntax induction |
| --- | --- |
| fixed ZF | fixed L block; endpoint assembly |
| Separation | quotation; satisfaction bridge; reflection; ambient Separation; Def closure; assembly |
| Replacement | ambient Replacement; rank bound; Separation on the original image matrix; Def closure; assembly |
| AC | canonical well-order block; assembly |
| GCH | condensation/cardinality block; assembly |

Replacement deliberately calls Separation on the original matrix
exists z(z in a and phi(z,w,p)), never on an already relativized formula.

Tests accepted all six fixed-ZF branches plus arbitrary nested Separation,
arbitrary Replacement, AC and GCH. Fifty-two source, domain, certificate,
descriptor, operation-tag and dependency mutations were rejected.

The verified arithmetic prefix invariant is: after stage i, the selected
branch, source schedule, renaming state, endpoint program and dependencies
equal their recomputed values, and all dependencies are below i. Each update
is a bounded case distinction or primitive recursion on a checked finite
schedule. The plan compiler and checker are therefore primitive recursive.
The repository's numeralwise-representability theorem supplies total
single-valued PA representations, and PA proves the prefix invariant by
induction on the trace.

## 4. Fail-closed Hilbert boundary

A checked compiler trace is not a ZF derivation. Every set-theoretic plan stage
remains marked until replaced by line arrays using exactly the six logical
schemes, three rules, or certified ZF axiom tags. Consequently the executable
proof extractor currently returns zero for every plan, and zero is rejected by
the ZF checker.

This is not only a large-numeral issue. The current support lacks annotated
Hilbert expansions for:

1. the uniform quotation/satisfaction bridge for the selected D;
2. syntax-recursive reflection and arbitrary SEP-L;
3. Replacement's rank-bound and closure assembly;
4. the six fixed basic-L proofs;
5. the selected well-ordering AC proof in L; and
6. the selected condensation/cardinality GCH proof in L.

Published prose proves the corresponding standard set-theoretic claims, but
does not provide line templates or uniform checker-acceptance proofs for these
numerical selections. Treating theorem names as new axiom tags would change
the source theory.

Thus D, E_U, AC, GCH, all dispatch branches, exact endpoint programs, and the
PA coding invariant are now concrete. This support does not claim a
proof-producing U-AX map until the marked macros receive actual calculus
expansions.
