---
id: alg-qa-modular-multiplication-circuit
kind: algorithm
title: Reversible modular multiplication by a unit
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 15
deps:
  - def-qc-clean-and-dirty-ancillas
  - def-qc-dirac-notation-conversion
  - alg-qc-reversible-embedding
  - def-qc-coherent-function-oracle
  - thm-qc-reversible-xor-oracle-unitary
  - def-integers-modulo-n
  - def-addition-and-multiplication-modulo-n
  - thm-integers-modulo-n-basic-algebra
  - def-unit-group-modulo-n-and-euler-totient
  - thm-unit-criterion-modulo-n
  - def-qc-circuit-denotational-semantics
  - def-qc-register-and-computational-basis
  - def-qc-ordered-bitstring-encoding
  - def-qc-tensor-register-and-permutation
justified_by: []
axiom_use: "None; the construction is finite and uses a supplied modular inverse."
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "John Preskill, Quantum Computation, Chapter 5: Classical and Quantum Circuits"
      url: "https://www.preskill.caltech.edu/ph219/chap5_15.pdf"
      locator: "§5.2.2–§5.2.3, printed pp. 14–22; reversible arithmetic and compute-copy-uncompute"
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, arXiv:1907.09415v6"
      url: "https://arxiv.org/pdf/1907.09415"
      locator: "§2.3–§2.4, PDF pp. 15–18; reversible computation and XOR oracles"
---

## Definition

**Input.** An integer $N\ge2$, $n=\lceil\log_2N\rceil$, a one-bit control $c$, an $n$-bit data register $z$, and integers $a,a^{-1}$ with $0\le a,a^{-1}<N$ and $aa^{-1}\equiv1\pmod N$. The data encoding is valid when its unsigned value is less than $N$.

Residue addition and multiplication are in $\mathbb Z/N$ with the class operations of [[def-integers-modulo-n]], [[def-addition-and-multiplication-modulo-n]], and [[thm-integers-modulo-n-basic-algebra]]. The inverse condition says $[a]_N$ is a unit, equivalently $\gcd(a,N)=1$ by [[def-unit-group-modulo-n-and-euler-totient]] and [[thm-unit-criterion-modulo-n]]. Kets use [[def-qc-dirac-notation-conversion]]; $c,z$ are ordered computational-basis registers with the unsigned encoding of [[def-qc-register-and-computational-basis]] and [[def-qc-ordered-bitstring-encoding]], tensor order as in [[def-qc-tensor-register-and-permutation]], and circuit denotation as in [[def-qc-circuit-denotational-semantics]]. “Clean work” means initialized and returned to zero under [[def-qc-clean-and-dirty-ancillas]].

**Output.** A reversible circuit on $c,z$ and clean work registers which implements the controlled map $z\mapsto az\bmod N$ for $c=1$ and valid $z$, and is the identity on invalid encodings and when $c=0$.

**Instructions.** Define the total Boolean function on $(c,z)$ by
$$f_a(c,z)=\begin{cases}az\bmod N,&c=1\text{ and }z<N,\\z,&\text{otherwise.}\end{cases}$$
Generate the following explicit NOT/AND/OR DAG for this function. Bit arrays in the instructions below are indexed from least significant bit $0$; the input and output port lists retain the repository's most-significant-first register order. Begin with the distinct input identifiers $c,z_{n-1},\ldots,z_0$ and two constant nodes $0,1$. Every gate emission appends a fresh identifier in consecutive order, referencing only existing identifiers. A named bit below is an alias of its node identifier, never an additional gate. Expand every macro call immediately in the stated loop order.

1. Define $\operatorname{XOR}(u,v)$ by emitting, in order, $o=\operatorname{OR}(u,v)$, $h=\operatorname{AND}(u,v)$, $d=\operatorname{NOT}(h)$, and $e=\operatorname{AND}(o,d)$, returning $e$. Define $\operatorname{ADD}_w(U,V,d_0)$ by looping $i=0,\ldots,w-1$: emit $e_i=\operatorname{XOR}(U_i,V_i)$, $s_i=\operatorname{XOR}(e_i,d_i)$, $h_i=\operatorname{AND}(U_i,V_i)$, $j_i=\operatorname{AND}(e_i,d_i)$, and $d_{i+1}=\operatorname{OR}(h_i,j_i)$. Return $(s_0,\ldots,s_{w-1})$ and $d_w$. Define $\operatorname{SUB}_w(U,V)$ by first emitting $\operatorname{NOT}(V_i)$ in increasing $i$ and then calling $\operatorname{ADD}_w(U,\operatorname{NOT}(V),1)$; return its difference bits and carry bit $h$ (the no-borrow bit).
2. Define $\operatorname{SELECT}_w(h,U,V)$ by emitting $d=\operatorname{NOT}(h)$ and, for $i=0,\ldots,w-1$, $u_i=\operatorname{AND}(h,U_i)$, $v_i=\operatorname{AND}(d,V_i)$, $s_i=\operatorname{OR}(u_i,v_i)$. It returns the selected bit array $S$. Public constant arrays below refer to the shared $0,1$ nodes and are zero-padded to the displayed width.
3. Initialize a $2n$-bit accumulator $P$ with zero aliases. For $i=0,\ldots,n-1$, form a $2n$-bit row $H$: for $j=0,\ldots,n-1$, emit $H_{i+j}=\operatorname{AND}(a_i,z_j)$, where $a_i$ is the constant bit of $a$; all other row bits alias $0$. Replace $P$ by the sum output of $\operatorname{ADD}_{2n}(P,H,0)$, ignoring the carry output.
4. Initialize $R$ to $n$ zero aliases. For $\ell=2n-1,\ldots,0$, form the $(n+1)$-bit array $V$ by $V_0=P_\ell$ and $V_i=R_{i-1}$ for $1\le i\le n$. Call $\operatorname{SUB}_{n+1}(V,N)$, obtaining difference $D$ and carry $h$. Set $R$ to the low $n$ bits of $\operatorname{SELECT}_{n+1}(h,D,V)$.
5. Pad $z$ by a zero high bit, call $\operatorname{SUB}_{n+1}(z,N)$, and let $h$ be its carry. Emit $v=\operatorname{NOT}(h)$ and $g=\operatorname{AND}(c,v)$. Set $F=\operatorname{SELECT}_n(g,R,z)$. The ordered output ports are $F_{n-1},\ldots,F_0$. This completes the finite DAG and its topological order. Construct a second DAG by the identical recipe with constant $a^{-1}$ in place of $a$.

Compile each DAG to the clean-target XOR oracle of [[def-qc-coherent-function-oracle]] using [[alg-qc-reversible-embedding]], whose exact gate-emission rules apply also to repeated-source ports. Allocate an $n$-bit clean target, compute $f_a(c,z)$ into it, swap the data and target registers with three CNOT gates per bit, then apply the compiled XOR computation for $f_{a^{-1}}$ to the old-data target, using the new data as input. Each compiled XOR oracle is an involution by [[thm-qc-reversible-xor-oracle-unitary]]. Return the concatenated gate list with every compute-copy-uncompute stage included. Separate items `thm-qa-modular-multiplication-circuit-correctness` and `thm-qa-modular-arithmetic-cost` establish its basis action and gate/work bounds. No depth bound is part of this algorithm.
