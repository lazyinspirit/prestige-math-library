---
id: lem-circuit-satisfaction-is-linear-quadratic-consistency
kind: lemma
title: "Circuit satisfiability becomes linear-quadratic consistency"
status: published
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-quadratic-consistency-test, lem-quadratic-test-soundness, def-circuit-sat, def-boolean-circuit-size-depth-fanin-and-basis, def-assignment-tester-and-rejection-ratio, lem-boolean-cube-fourier-inversion-and-parseval, def-linearity-test]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-27
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
sources:
  scraped: []
  references:
    - title: "Arora and Barak, Computational Complexity: A Modern Approach, §18.4.2 QUADEQ and Step 3 of the verifier, printed pp. 382-383."
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
    - title: "Arora and Barak, Computational Complexity: A Modern Approach, §18.4.3 proof of Corollary 18.25, printed pp. 384-385."
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
---

## Statement

Let $C$ be a Boolean circuit with $s$ inputs and $m$ non-input gates over the basis $\{\text{NOT},\text{AND},\text{OR},0,1\}$ of [[def-boolean-circuit-size-depth-fanin-and-basis]], together with a list $X=(x_1,\dots,x_n)$ of $n\le s$ named input coordinates. Then there are an integer $N=s+m$ and a list of $m+1$ equations in variables $w_1,\dots,w_N$ over $\mathbb F_2$, of the form
$$q_k(w)=\sum_{1\le i\le j\le N}A_k(i,j)\,w_iw_j\;=\;b_k,\qquad A_k(i,j)\in\mathbb F_2,\quad b_k\in\mathbb F_2,$$
such that:

1. **(Input prefix and size.)** The variables $w_1,\dots,w_n$ are the named input coordinates $x_1,\dots,x_n$, the next $s-n$ variables are the other input coordinates, and there is one variable per wire of $C$; each equation has at most four nonzero coefficients $A_k(i,j)$, the total number of nonzero coefficients is $O(m+1)$, and all of them are determined by the gate list of $C$ in time polynomial in the size of that list.
2. **(Exact extension.)** For every $x\in\{0,1\}^n$, the circuit $C$ accepts $x$ if and only if there are $w_{n+1},\dots,w_N\in\mathbb F_2$ with $w_1\cdots w_n=x$ satisfying all $m+1$ equations. For each choice of all $s$ input bits, the gate equations determine a unique assignment to the gate wires, each $w_\ell$ being the value of the corresponding wire in the evaluation of $C$ on those full input bits; this assignment satisfies the additional output equation exactly when the circuit accepts that full input.
3. **(Random subsum.)** If $w\in\mathbb F_2^N$ fails at least one of the equations, then for a uniform $z\in\mathbb F_2^{m+1}$ the single combined equation
$$\sum_k z_kq_k(w)=\sum_k z_kb_k,\qquad\text{that is}\qquad A(z)\odot(w\otimes w)=b(z),$$
fails with probability at least $1/2$; here $A(z):=\sum_kz_kA_k\in\mathbb F_2^{\,N\times N}$ is the coefficient matrix placed in the coordinate pairs $(i,j)$ with $i\le j$, $b(z):=\sum_kz_kb_k$, and $\odot$ is the coordinatewise dot product of [[def-linearity-test]]. Consequently, if $g:\mathbb F_2^{\,N\times N}\to\mathbb F_2$ is the Hadamard table of $w\otimes w$, a verifier can test the subsum with the one query $g(A(z))$, which it compares with the bit $b(z)$ that it computes itself from the gate list.

## Facts & Assumptions

**Given:** a Boolean circuit $C$ with $s$ inputs, including named inputs $x_1,\dots,x_n$, and $m$ non-input gates and designated output, over the basis of [[def-boolean-circuit-size-depth-fanin-and-basis]]; the equations displayed below, in variables $w_1,\dots,w_N$ with $N=s+m$; and the tensor conventions of [[def-quadratic-consistency-test]].

[F1] The gates of $C$ are NOT, AND and OR of fan-in at most two and the constants $0,1$, and $C$ accepts the named prefix $x$ when some assignment to the other $s-n$ input coordinates makes the designated output evaluate to $1$ in the topological evaluation ([[def-circuit-sat]], [[def-boolean-circuit-size-depth-fanin-and-basis]], [[def-assignment-tester-and-rejection-ratio]]).

[F2] For $w\in\mathbb F_2^N$ the tensor $w\otimes w\in\mathbb F_2^{\,N\times N}$ has coordinate $w_iw_j$ at the pair $(i,j)$; the coordinatewise dot product against a matrix $Z$ supported on pairs with $i\le j$ evaluates to $\sum_{i\le j}Z(i,j)w_iw_j$, and for a vector $U\in\mathbb F_2^{\,N\times N}$ the Hadamard table is $g(Z)=U\odot Z$ ([[def-quadratic-consistency-test]], [[def-linearity-test]]).

[F3] If $v\in\mathbb F_2^M$ is a nonzero vector and $z$ is uniform in $\mathbb F_2^M$, then $z\cdot v=1$ with probability exactly $1/2$; equivalently, distinct linear Boolean functions differ on half the cube ([[lem-boolean-cube-fourier-inversion-and-parseval]]).

[F4] The arithmetic of $\mathbb F_2$ has $1+1=0$, so for bits $u,v$ the identities $u+u=0$, $u^2=u$, $u\vee v=u+v+uv$ and $u\wedge v=uv$ hold, and $\neg u=1+u$ ([[def-linearity-test]]).


## Proof

**Proof technique:** direct.

1.1 List the wires of $C$ in a topological order, starting with the $n$ named inputs $x_1,\dots,x_n$, then the $s-n$ remaining inputs, and then the $m$ non-input gates, and create one variable $w_\ell\in\mathbb F_2$ for each wire, so that the first $n$ variables are exactly the named input coordinates and $N=s+m$. Record the index of the designated output wire from the circuit description; it need not be the last wire in this order. This is a construction on the explicit gate list, and it uses no choices. [F1, construct]

2.1 For every gate, in the topological order of the wire list of step 1.1, write one equation in the variables of its input wires and its output wire, and write one further equation for the designated output; all arithmetic is in $\mathbb F_2$:

$$\text{NOT } z=\neg x:\quad z+x=1;\qquad \text{AND } z=x\wedge y:\quad z+xy=0;$$ $$\text{OR } z=x\vee y:\quad z+x+y+xy=0;\qquad \text{constant } z=\top:\quad z=1;\qquad \text{constant } z=\bot:\quad z=0;$$ $$\text{output } z=\top:\quad z=1 .$$

Each equation is of the displayed form $q_k(w)=b_k$: the linear term $w_\ell$ is the diagonal coefficient $A_k(\ell,\ell)$ (legitimate because $w_\ell^2=w_\ell$ for a bit), a product $w_iw_j$ with $i\ne j$ is the coefficient $A_k(i,j)$ at the unique pair with $i<j$, and the constant on the right side is $b_k\in\mathbb F_2$. Every gate equation has at most four nonzero coefficients (the OR equation has four), and the output equation has one, so the list has $m+1$ equations and at most $4m+1=O(m+1)$ nonzero coefficients, all read off the gate list of step 1.1 in polynomial time. [F4, given, step 1.1, construct]

3.1 Suppose $C$ accepts $x$, choose an assignment to the other $s-n$ inputs witnessing acceptance and assign to every wire variable its value in the resulting full-input evaluation of $C$. Then $w_1\cdots w_n=x$, and each equation of step 2.1 holds: for NOT, AND, OR and the constants this is exactly the evaluation rule in the identities of [F4], and the output equation holds because the designated output evaluates to $1$. Hence the system has a solution extending $x$; it is the evaluation assignment of the circuit. [F1, F4, step 1.1, step 2.1, algebra]

3.2 Conversely, suppose $w$ satisfies all $m+1$ equations and $w_1\cdots w_n=x$. We show by induction along the topological order that every wire variable equals the evaluation of its wire on the full input assignment encoded by $w_1,\dots,w_s$. The input variables do by the definition of that assignment. For a gate whose input wires are already correct, its equation determines the output variable: the NOT equation gives $z=1+x$, the AND equation $z=xy$, the OR equation $z=x+y+xy$, and the constant equations give $z=1$, $z=0$, all of which are the evaluation rules of [F4]. Thus every wire variable has its evaluated value, including the designated output wire; the additional output equation forces that value to be $1$. Hence $C$ accepts $x$ by [F1], and once all $s$ input coordinates are fixed, the extension to the gate wires is unique: two solutions with the same full input assignment agree wire by wire in the same induction. [F1, F4, step 1.1, step 2.1, algebra]

3.3 For the random subsum, fix any $w\in\mathbb F_2^N$ and put $v_k:=q_k(w)+b_k\in\mathbb F_2$, so that $v_k=0$ says the $k$-th equation is satisfied, and let $U:=w\otimes w$; by [F2] each $q_k(w)=A_k\odot U$, so $v_k=A_k\odot U+b_k$ and the combined equation of the statement holds exactly when $z\cdot v=0$. If $w$ fails at least one equation then $v\ne0$, and [F3] makes $z\cdot v=1$ with probability exactly $1/2$ over the uniform $z$; this is the claimed rejection probability, and the combined left side is $A(z)\odot U=g(A(z))$ for the Hadamard table of $U$, so the whole test costs the single table query $g(A(z))$ plus the computation of $A(z)$ and $b(z)$ from the gate list. [F2, F3, step 2.1, algebra]

4.1 Steps 3.1, 3.2 and 3.3 are the three clauses of the statement: the construction of steps 1.1 and 2.1 gives the input prefix and the size bound, the pair of inductions gives the exact extension equivalence and uniqueness conditional on the full input assignment, and the subsum argument gives the constant rejection probability of a single tensor query; the circuit-to-system translation is deterministic and polynomial time in the gate list. [step 1.1, step 2.1, step 3.1, step 3.2, step 3.3] ∎

## Remarks

- **Why diagonal coefficients are legitimate.** The equations are bilinear in the tensor $w\otimes w$, and in characteristic two the diagonal coordinate $w_\ell w_\ell$ equals $w_\ell$ for a bit; this is how the linear terms $z+x=1$ of a NOT gate and the constants are written without adding a coordinate fixed to one. The upper-triangle support $i\le j$ with the ordered-pair indexing of the tensor is the Arora-Barak convention, and it is what makes $A(z)\odot(w\otimes w)$ reproduce the quadratic form without a factor $2$, which would vanish in $\mathbb F_2$.
- **Exactness, not proximity.** Clause 2 is an exact equivalence: every solution is the evaluation assignment for some completion of the named input prefix, so the system neither creates spurious satisfying inputs nor loses the accepted ones. The approximation enters only through the tables queried by the verifier, which are handled by the tensor test of [[lem-quadratic-test-soundness]] and the linearity test of [[thm-linearity-test-rejects-proportionally-to-distance]].
- **One equation per gate plus one for the output.** Constants $0$ and $1$ are wires of the circuit and contribute their own equations, so a circuit whose output is a constant has its acceptance encoded by the output equation. A well-formed circuit has a designated output wire: when $m=0$ this must be one of the $s$ input wires, while when $s=0$ a constant or other non-input gate supplies a wire; the impossible case $s=m=0$ is not part of the domain.
