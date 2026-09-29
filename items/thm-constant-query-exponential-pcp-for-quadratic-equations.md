---
id: thm-constant-query-exponential-pcp-for-quadratic-equations
kind: theorem
title: "An exponential-length constant-query PCP for quadratic equations"
status: published
origin: pipeline
deps:
  - def-quadratic-equation-instance-and-tensor-code-oracles
  - def-linearity-test
  - def-walsh-hadamard-encoding-and-relative-distance
  - lem-blr-testing-supplies-nearby-linear-decoders
  - lem-tensor-consistency-test-soundness
  - lem-random-subsum-verifies-all-quadratic-equations-with-constant-error
proof_strategy: constructive
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Arora and Barak, Computational Complexity: A Modern Approach, §§18.4.1–18.4.2 proof of Theorem 18.21, Steps 1–3, printed pp. 363–367"
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
verification:
  precheck: pass
  audited: 2026-09-30
---

## Statement

For an $N$-variable, $M$-equation QUADEQ instance, represented with $N$ in
unary and its row-major coefficient matrices listed explicitly, there is a
uniform nonadaptive verifier for a fixed binary proof of length
$2^N+2^{N^2}$. It uses $O(N^2+M)$ random bits and at most six bit queries.
Satisfiable instances have perfect completeness; every proof for an
unsatisfiable instance is rejected with probability at least $1/400$.

## Facts & Assumptions

**Given:** A QUADEQ instance $(A_j,b_j)_{j=1}^M$ over $N$
variables in the explicit encoding stated above, and an arbitrary fixed binary
proof string.

[F1] The instance is satisfied by $u$ exactly when
$A_j\cdot(u\otimes u)=b_j$ for every $j$. Replacing each $A_j$ by its
canonical upper-triangular representative, with the same diagonal entries and
upper entries $A_{j,ik}+A_{j,ki}$ for $i<k$, preserves that quadratic form.
([[def-quadratic-equation-instance-and-tensor-code-oracles]])

[F2] When $M=0$ the equation list is empty and every $u$ satisfies it; when
$N=0$ the vector and tensor are empty and each equation has left-hand side
zero. ([[def-quadratic-equation-instance-and-tensor-code-oracles]])

[F3] The intended pair of truth tables has lengths $2^N$ and $2^{N^2}$, in
that order when concatenated into one proof.
([[def-quadratic-equation-instance-and-tensor-code-oracles]])

[F4] $\operatorname{WH}_n(u)$ is the truth table of $r\mapsto u\cdot r$;
when $n=0$ it is the one-entry zero table.
([[def-walsh-hadamard-encoding-and-relative-distance]])

[F5] Each BLR test samples independent uniform $x,y$, queries
$h(x),h(y),h(x+y)$, and accepts exactly when $h(x)+h(y)=h(x+y)$; its
probability is over these samples for fixed $h$.
([[def-linearity-test]])

[F6] If a table's BLR rejection probability $\epsilon<1/2$, the lemma's
lexicographically first Fourier maximizer gives a linear decoder within
distance $\epsilon$; if $\epsilon<1/4$, that nearby word is unique.
([[lem-blr-testing-supplies-nearby-linear-decoders]])

[F7] The tensor test independently samples $r,s,y,y'$ and $Y$, corrects the
three requested values with two queries each, and rejects if the corrected
$g(r\otimes s)$ differs from the product of corrected $f(r),f(s)$. It makes
six nonadaptive queries and rejects a wrong decoded tensor with probability at
least $\frac14-4\delta_f-2\delta_g$.
([[lem-tensor-consistency-test-soundness]])

[F8] The equation test samples independent uniform $z,y$, queries
$g(y),g(y+A(z))$, and rejects when their sum differs from $b(z)$. When the
decoded assignment violates an equation, its rejection probability is at
least $\frac12-2\delta_g$; it uses $M+N^2$ random bits and two queries.
([[lem-random-subsum-verifies-all-quadratic-equations-with-constant-error]])

## Proof

**Given:** Fix the input instance and the proof string before the verifier's
random bits are sampled.

1.1 First replace each input matrix $A_j$ by its canonical upper-triangular representative: keep its diagonal entries, put $A_{j,ik}+A_{j,ki}$ in position $(i,k)$ for $i<k$, and put zero below the diagonal. By [F1] this preserves every value $A_j\cdot(u\otimes u)$ and therefore the solution set; scanning the explicit matrices costs $O(MN^2)$ time. In the rest of the proof $A_j$ denotes this canonical representative, so [F8] applies. Split the proof, using [F3], into fixed tables $f:\mathbb F_2^N\to\mathbb F_2$ and $g:\mathbb F_2^{N^2}\to\mathbb F_2$. Unless $N=M=0$, use two selector bits to choose uniformly among one BLR test on $f$, one BLR test on $g$, the six-query tensor test in [F7], and the two-query equation test in [F8]; all test coins are independent and their query locations are computed before reading answers. [F1, F3, F4, F5, F7, F8, given, construct]

1.2 If $u$ satisfies the instance, use the proof $f=\operatorname{WH}_N(u)$ and $g=\operatorname{WH}_{N^2}(u\otimes u)$. By [F4], both tables are linear, so their BLR tests always pass. For any auxiliary point $a$, $f(a)+f(a+r)=u\cdot a+u\cdot(a+r)=u\cdot r$, and similarly $g(Y)+g(Y+Z)=(u\otimes u)\cdot Z$. Hence the tensor test passes because $(u\cdot r)(u\cdot s)=(u\otimes u)\cdot(r\otimes s)$. Also $g(y)+g(y+A(z))=g(A(z))=A(z)\cdot(u\otimes u)=b(z)$ for every equation mask $z$, so the equation test passes. If $N=M=0$, this proof has $f=0$ and the deterministic dimension-zero BLR test accepts by [F2,F4]. [F1, F2, F4, F5, F7, F8, given, algebra]

1.3 For an arbitrary fixed proof, let $\epsilon_f$ and $\epsilon_g$ be the rejection probabilities of its two BLR tests in [F5]. If either is at least $1/100$, its selected branch contributes at least $(1/4)(1/100)=1/400$ to the mixture's rejection probability. [F5, given, algebra]

2.1 Otherwise both $\epsilon_f,\epsilon_g<1/100<1/4$. By [F6], the lemma's lexicographically first decoders are unique linear words $u\in\mathbb F_2^N$ and $w\in\mathbb F_2^{N^2}$ at distances $\delta_f\le\epsilon_f<1/100$ and $\delta_g\le\epsilon_g<1/100$. Reshape $w$ into the row-major matrix $V$. [F6, step 1.3, construct]

2.2 Each selected branch uses respectively $2N$, $2N^2$, $4N+N^2$, or $M+N^2$ random bits and at most $3$, $3$, $6$, or $2$ queries. Thus for $N^2+M>0$ the verifier uses at most $2+\max(2N,2N^2,4N+N^2,M+N^2)\le7(N^2+M)$ random bits and at most six queries. If $N=M=0$, the empty equation list is satisfiable by [F2]; run the deterministic dimension-zero BLR test on $f$ without selector bits, preserving completeness and using three queries. [F2, F3, F5, F7, F8, step 1.1, algebra]

3.1 If $V\ne u\otimes u$, [F7] makes the tensor branch reject with probability at least $\frac14-4\delta_f-2\delta_g>\frac14-\frac6{100}=\frac{19}{100}$. Since this branch is chosen with probability $1/4$, the mixture rejects with probability greater than $19/400$, hence at least $1/400$. [F7, step 2.1, algebra]

3.2 If $V=u\otimes u$, unsatisfiability and [F1] imply that the decoded $u$ violates at least one equation. The equation branch then rejects with probability at least $\frac12-2\delta_g>\frac12-\frac2{100}=\frac{48}{100}$. With one equation the random mask detects its failed residual with probability $1/2$; with $N=0$, the unique decoded vector is empty and the same test detects any right-hand side $b(z)=1$. Its mixture contribution is greater than $12/100$, so again the verifier rejects with probability at least $1/400$. Coincident query locations are still counted among the at most six calls. [F1, F2, F8, step 2.1, step 2.2, algebra]

4.1 Under the stated encoding, the instance length is at least $N+M+MN^2$. Computing the selected test's addresses, tensor products, and XOR-sums $A(z),b(z)$ takes polynomial time in that length; every query address is fixed from the input and random tape before an answer is read. The proof length is exactly $2^N+2^{N^2}$ by [F3], while only the selected branch's at most six bits are read. The verifier is therefore uniform and nonadaptive with the claimed resources. [F3, given, construct, discharge-construct] ∎
