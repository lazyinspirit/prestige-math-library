---
id: ex-cg-s4-bruhat-versus-weak-comparability
kind: example
title: "Bruhat versus weak comparability in S4"
status: published
origin: pipeline
pipeline_run: frontier-42-coxeter-32
dependency_level: 14
deps: [def-cg-bruhat-order-by-reflection-chains, thm-cg-bruhat-subword-characterization, def-hh-coxeter-matrix-word-group-and-length, thm-hh-parabolic-minimal-representatives-and-length-additivity, def-finite-symmetric-group-and-permutation-notation, def-inversions-inversion-number-and-sign, def-group]
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: example
proof_strategy: direct
aliases: []
landmark: false
verification:
  audited: "2026-10-08"
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
sources:
  references:
    - title: "Anders Bjorner and Francesco Brenti, Combinatorics of Coxeter Groups (Graduate Texts in Mathematics 231, Springer 2005; author-hosted complete PDF)"
      url: "https://sites.math.washington.edu/~billey/classes/reflection.groups/references/EntireBook.pdf"
      locator: "Section 3.1, printed pp. 65-66: the right and left weak orders defined by length-increasing chains of simple generators, and the basic relation with Bruhat order; neither the lattice property of Section 3.2 nor the word property of Section 3.3 is used here"
    - title: "Grant T. Barkley, Bruhat order and applications, Lecture 3 (CMND lecture notes, author-hosted)"
      url: "https://gtbarkley.org/cmnd/Lecture3Notes.pdf"
      locator: "Lecture 3, printed p. 1: the remark that weak order implies Bruhat order, with the contrast that there are usually more relations in Bruhat order, and the $S_3$ comparison table"
---

## Example

Let $W=S_4$ with $\ell$ the inversion number ([[thm-hh-parabolic-minimal-representatives-and-length-additivity]] (4)). Besides the Bruhat order ([[def-cg-bruhat-order-by-reflection-chains]]) consider the two weak relations defined by length-increasing simple multiplications: put $u\le_R v$ if there are $u_0,\dots,u_k\in W$ with $u_0=u$, $u_k=v$ and $u_{j+1}=u_js_{i_j}$ for a simple generator with $\ell(u_{j+1})>\ell(u_j)$; and $u\le_L v$ if $u_{j+1}=s_{i_j}u_j$ with the same length condition. (These are the right and left weak orders of $(W,S)$; their systematic theory belongs to a later pair of this track and is not needed for the comparisons below.)

**(i)** $u=2143$ and $v=2341$ satisfy $u\le v$ in Bruhat order but neither $u\le_R v$ nor $u\le_L v$: $u=s_1s_3$ is the subword at positions $1,3$ of $v=s_1s_2s_3$, while $\ell(v)-\ell(u)=1$ and none of the six products $us_i$, $s_iu$ ($i=1,2,3$) equals $2341$.

**(ii)** Weak comparability implies Bruhat comparability. Indeed every right- or left-weak step with increasing length is a Bruhat edge, because a simple generator is a reflection ($s=1\cdot s\cdot1^{-1}\in T$) and, for the left version, left multiplication by a reflection of increasing length is a Bruhat edge (clauses (1) and (3) of [[def-cg-bruhat-order-by-reflection-chains]]); hence $u\le_R v$ or $u\le_L v$ implies $u\le v$. For example $1234\le_R2134\le_R2314\le_R2341$, and the same chain is a Bruhat chain.

**(iii)** The converse of (ii) fails: by (i), Bruhat comparability is strictly weaker than comparability in either weak order already in $S_4$.

## Facts & Assumptions

**Given:** $W=S_4$ with generators $s_1,s_2,s_3$, the elements $u=2143$, $v=2341$ and the weak relations $\le_R$, $\le_L$ of the statement.

[F1] For type $A_{n-1}$ with $S=\{s_1,\dots,s_{n-1}\}$, the assignment $s_i\mapsto(i\ i+1)$ extends to an isomorphism $W\to S_n$ and $\ell(w)=\operatorname{inv}(\varphi(w))$; in particular a word in the $s_i$ is reduced if and only if its length equals the inversion number of its value. ([[thm-hh-parabolic-minimal-representatives-and-length-additivity]] (4))

[F2] One-line notation lists the values of a permutation in order of the arguments, and the composition convention is $(\sigma\tau)(i)=\sigma(\tau(i))$; hence right multiplication by $s_i=(i\ i+1)$ swaps the entries in positions $i$ and $i+1$, and left multiplication swaps the values $i$ and $i+1$. ([[def-finite-symmetric-group-and-permutation-notation]])

[F3] The inversion number of $\sigma$ is $\operatorname{inv}(\sigma)=|\{(i,j):i<j,\ \sigma(i)>\sigma(j)\}|$. ([[def-inversions-inversion-number-and-sign]])

[F4] Bruhat edges: $x\to y$ if and only if $y=xt$ for some $t\in T$ with $\ell(y)>\ell(x)$; the reflections are $T=\{wsw^{-1}:w\in W,\ s\in S\}$, so every simple generator is a reflection; and if $x\in W$, $t\in T$ satisfy $\ell(tx)>\ell(x)$, then $x\to tx$. ([[def-cg-bruhat-order-by-reflection-chains]] (1), (3))

[F5] Subword criterion: for a reduced expression $v=r_1\cdots r_q$ and $x\in W$, one has $x\le v$ if and only if there are $1\le i_1<\cdots<i_k\le q$ with $x=r_{i_1}\cdots r_{i_k}$, and the indices may be chosen with $k=\ell(x)$. ([[thm-cg-bruhat-subword-characterization]] (1))

## Verification

1.1 For the Bruhat relation in (i): $u=s_1s_3$ is the value of the subword at positions $1,3$ of the word $s_1s_2s_3$, and $2341=s_1s_2s_3$ because right multiplying the identity by $s_1,s_2,s_3$ in turn gives $2134,2314,2341$ by [F2]; both words are reduced, since their lengths $2$ and $3$ equal the inversion numbers of their values $2143$ and $2341$ by [F1] and [F3]. The subword criterion [F5] therefore gives $u\le v$. [F1, F2, F3, F5]

1.2 For (ii): a right-weak step $x\to xs_i$ with $\ell(xs_i)>\ell(x)$ is a Bruhat edge because $s_i\in S\subseteq T$ by [F4]; a left-weak step $x\to s_ix$ with $\ell(s_ix)>\ell(x)$ is a Bruhat edge by the left-multiplication clause of [F4]. Chains of Bruhat edges are Bruhat chains, so $u\le_R v$ or $u\le_L v$ implies $u\le v$; in particular the chain $1234\to2134\to2314\to2341$ is a chain of $R$-steps with increasing lengths (each step applies $s_1$, $s_2$, $s_3$ in turn and raises the inversion number by $1$ by [F1], [F2], [F3]), so $1234\le_R2134\le_R2314\le_R2341$ and the same four elements form a Bruhat chain. [F3, F4]

2.1 For the weak relations in (i): a chain realizing $u\le_R v$ or $u\le_L v$ has steps of length increase at least $1$, so a chain with $k$ steps satisfies $\ell(v)\ge\ell(u)+k$, that is, $k\le\ell(v)-\ell(u)=3-2=1$; since $u\ne v$ at least one step is needed, so exactly one step occurs and $v=us_i$ (for $\le_R$) or $v=s_iu$ (for $\le_L$) with $\ell$ increasing. The six products, computed by the position- and value-swapping rules of [F2], are $us_1=1243$, $us_2=2413$, $us_3=2134$, $s_1u=1243$, $s_2u=3142$ and $s_3u=2134$, and none of them equals $2341$; hence neither $u\le_R v$ nor $u\le_L v$ holds. [F2, step 1.1]

3.1 For (iii): step 2.1 exhibits $u\le v$ in Bruhat order together with the failure of both $u\le_R v$ and $u\le_L v$, so the converse of the implication proved in step 1.2 fails, in the sharp form that Bruhat comparability does not imply comparability in either weak order already in $S_4$. All assertions are finite computations in $S_4$ and use no choice principle. [step 1.2, step 2.1] ∎
