---
id: prop-np-is-contained-in-pspace-and-pspace-in-exp
kind: proposition
title: "$NP \\subseteq PSPACE \\subseteq EXP$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-np-by-verifiers, def-exp-and-nexp, def-dtime-ntime-dspace-and-nspace, def-worst-case-time-and-space-complexity, def-turing-machine-configuration, def-tape-finite-support-convention]
proof_strategy: direct
verification:
  audited: 2026-09-02
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Michael Sipser, MIT 18.404J Theory of Computation, Lecture 17: Space Complexity, PSPACE, Savitch's Theorem"
      url: "https://ocw.mit.edu/courses/18-404j-theory-of-computation-fall-2020/9b025394d997750b3cd765c7a074881f_MIT18_404f20_lec17.pdf"
    - title: "Sanjeev Arora and Boaz Barak, Computational Complexity: A Modern Approach"
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
---

## Statement

Let
$$ PSPACE:=\bigcup_{k\ge 1}\operatorname{DSPACE}(n^k). $$
Then
$$ NP\subseteq PSPACE\subseteq EXP. $$

## Facts & Assumptions

**Given:** The classes $NP$, $PSPACE$, and $EXP$.

[L1] A language in $NP$ has a polynomial-time verifier with polynomially bounded certificates, by [[def-np-by-verifiers]].

[L2] The class notation DSPACE records deterministic polynomial-space deciders, and DTIME records deterministic time-bounded deciders, by [[def-dtime-ntime-dspace-and-nspace]].

[L3] Worst-case space counts visited tape cells and worst-case time counts executed steps, by [[def-worst-case-time-and-space-complexity]].

[L4] EXP is the union of the classes $\operatorname{DTIME}(2^{n^k})$, by [[def-exp-and-nexp]].

[L5] A configuration records a machine state, head positions, and finite tape data, and tape contents have finite support, by [[def-turing-machine-configuration]] and [[def-tape-finite-support-convention]].

## Proof

**Proof technique:** direct.

1.1 To prove $NP\subseteq PSPACE$, let $L\in NP$. By [L1], choose a verifier for $L$ with runtime bounded by a polynomial $q(n)$ and certificate length bounded by a polynomial $p(n)$. A deterministic decider for $L$ can enumerate all certificates $u$ of length at most $p(|x|)$ in lexicographic order, run the verifier on $(x,u)$, and accept as soon as one certificate succeeds. It stores only the input $x$, the current certificate $u$, and the verifier workspace, so the total space used is polynomial in $|x|$. Hence $L\in PSPACE$ by [L2] and [L3]. [L1, L2, L3, given, construct]

1.2 To prove $PSPACE\subseteq EXP$, let $L\in PSPACE$. Then by definition there exists $k\ge 1$ and a deterministic machine $M$ deciding $L$ while using at most $cn^k$ tape cells on inputs of length $n$, for some constant $c$. Fix such an input length $n$. Because of [L5], a configuration of $M$ is determined by one of finitely many states, the head positions on the finitely many tapes, and the contents of at most $cn^k$ visited cells. Therefore the total number of possible configurations is at most $|Q|\cdot (cn^k+1)^d\cdot |\Gamma|^{dcn^k}=2^{O(n^k)}$ for a constant $d$ depending only on the fixed number of tapes. [L3, L5, given]

2.1 Since $M$ is deterministic and halts on every input, it cannot visit the same configuration twice on one accepting or rejecting run: a repeated configuration would force an infinite loop from that point onward. So the running time on inputs of length $n$ is bounded by the number of reachable configurations from step 1.2, hence by $2^{O(n^k)}$. Enlarging the exponent if necessary, there exists $m$ with $2^{O(n^k)}\le 2^{n^m}$ for all sufficiently large $n$. Therefore $L\in EXP$ by [L2] and [L4]. [L2, L4, step 1.2]

3.1 Steps 1.1 and 2.1 prove $NP\subseteq PSPACE\subseteq EXP$. [step 1.1, step 2.1] ∎
