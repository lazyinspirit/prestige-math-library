---
page: the-ip-equals-pspace-theorem
title: "The IP = PSPACE Theorem"
status: published
items: [def-qbf-arithmetization-operators, lem-quantifier-polynomials-agree-on-booleans, def-multilinearization-operator, lem-multilinearization-preserves-boolean-values, lem-ordered-arithmetization-evaluates-to-the-truth-value, lem-efficient-prime-field-for-a-polynomial-soundness-budget, def-shamir-protocol-for-tqbf, lem-honest-prover-maintains-the-claim-invariant, lem-each-round-has-polynomial-communication, lem-shamir-protocol-has-perfect-completeness, lem-first-false-claim-survives-with-root-bound-probability, lem-total-soundness-follows-by-union-bound, lem-shamir-qbf-verifier-runs-in-polynomial-time, thm-tqbf-has-a-polynomial-round-interactive-proof, thm-pspace-is-contained-in-ip, thm-ip-equals-pspace, cor-ip-is-closed-under-complement, thm-ip-can-be-given-perfect-completeness, fs-ip-equals-pspace-needs-no-degree-reduction, fs-the-verifier-trusts-the-final-field-value]
examples: []
---

This page proves $\mathrm{IP}=\mathrm{PSPACE}$ by arithmetizing quantified
Boolean formulas. A closed prenex formula is first read as a polynomial over a
prime field, with the quantifier operators $A$ and $E$ reproducing the Boolean
semantics on Boolean assignments, and with the multilinearization reductions
$R$ inserted before every quantifier operation so that each individual degree
stays at most $D=\max\{L,2\}$ through an operator list of length
$T=n(n+3)/2$. A deterministic trial-division search supplies a prime field of
polynomial bit length with $p>12TD$, which is what keeps the root bound
$2TD/p$ below $1/6$, and hence the soundness error below $1/3$.

The Shamir protocol then reverses that operator list: the prover sends the
univariate restriction at each node, the verifier checks the node identity at
$0$ and $1$, samples a fresh challenge, and finally tests the matrix value at
the accumulated point. The page proves the honest-prover invariant, the
polynomial communication and verifier-time bounds, perfect completeness, and
the round-by-round soundness estimate that a false claim becomes true with
probability at most $2D/p$; a union bound over the $T$ nodes turns this into
soundness error at most $2TD/p<1/3$. With the published inclusion
$\mathrm{IP}\subseteq\mathrm{PSPACE}$ and the reduction route through TQBF
completeness, the equality follows, together with closure under complement and
the perfect-completeness form of the theorem. False statements on this page
record what the proof uses: neither the degree reduction nor the verifier's
terminal evaluation of the matrix can be dropped.
