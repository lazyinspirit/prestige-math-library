---
id: lem-exponential-base-assignment-tester-from-quadratic-oracles
kind: lemma
title: "An exponential-size constant-query base assignment tester"
status: draft
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-assignment-tester-and-rejection-ratio, thm-linearity-test-rejects-proportionally-to-distance, lem-quadratic-test-soundness, lem-circuit-satisfaction-is-linear-quadratic-consistency, def-quadratic-consistency-test, def-self-correction-of-a-noisy-linear-function, thm-linear-self-correction, def-linearity-test, lem-boolean-cube-fourier-inversion-and-parseval]
justified_by: []
aliases: []
landmark: false
proof_strategy: constructive
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
sources:
  scraped: []
  references:
    - title: "Arora and Barak, Computational Complexity: A Modern Approach, §18.4.3 Corollary 18.25 (exponential-sized PCP of proximity), printed pp. 384-385."
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
    - title: "Irit Dinur, The PCP theorem by gap amplification, §5 Theorem 5.1, printed pp. 17-18."
      url: "https://www.cs.umd.edu/users/gasarch/TOPICS/pcp/dinur.pdf"
---

## Statement

There is an absolute constant $\rho\ge1/500$ with the following property. For every Boolean circuit $C$ with $s$ input coordinates, of which $n\le s$ are named, and $m$ non-input gates over the basis of [[def-boolean-circuit-size-depth-fanin-and-basis]], presented together with its input-coordinate list $X=(x_1,\dots,x_n)$, the construction below produces a constraint system $P(C,X)$ of arity at most $6$ over the fixed alphabet $\{0,1\}$ such that:

1. **(Input coordinates and size.)** The variables of $P(C,X)$ are the $2^N$ table coordinates of a table $f:\mathbb F_2^N\to\mathbb F_2$, the $2^{N^2}$ table coordinates of a table $g:\mathbb F_2^{\,N\times N}\to\mathbb F_2$, with $N:=s+m$, together with the $n$ named coordinates $x_1,\dots,x_n$; the number of constraints is at most $2^{q(s+m)}$ for a fixed polynomial $q$, and the whole system is enumerated by a deterministic algorithm in time polynomial in that number, using no randomness and no choices.
2. **(Assignment tester.)** $P(C,X)$ is an assignment tester with alphabet $\{0,1\}$, arity bound $6$ and rejection ratio $\rho$ in the sense of [[def-assignment-tester-and-rejection-ratio]]: every accepted input extends to a labeling with $\operatorname{UNSAT}=0$, and for every $x$ and every labeling $b$ of the non-input variables, $\operatorname{UNSAT}_{x\cup b}(P(C,X))\ge\rho\,\delta(x,\operatorname{SAT}(C))$, where the input coordinates of the system are the named coordinates $x_1,\dots,x_n$ themselves.

## Facts & Assumptions

**Given:** a Boolean circuit $C$ with $s$ inputs and $m$ non-input gates, its named input list $X=(x_1,\dots,x_n)$, and the constants $N=s+m$, $M_0=m+1$, $\varepsilon_0:=1/100$, $\rho:=1/500$.

[F1] The circuit yields, with $w_1,\dots,w_N$ the wire variables whose first $n$ entries are the named input coordinates, a list of $M_0=m+1$ equations $q_k(w)=A_k\odot(w\otimes w)=b_k$ with $A_k$ supported on coordinate pairs $i\le j$ and with at most four nonzero coefficients each; a well-formed circuit with a designated output has $N=s+m\ge1$; for every input $x$, $C$ accepts $x$ if and only if the system has a solution $w$ whose first $n$ coordinates are $x$, in which case each solution is the evaluation assignment for some completion of the named inputs, unique once all $s$ input bits are fixed; if $w$ fails an equation then a uniform $z\in\mathbb F_2^{M_0}$ has $A(z)\odot(w\otimes w)\ne b(z)$ with probability exactly $1/2$, where $A(z)=\sum_kz_kA_k$ and $b(z)=\sum_kz_kb_k$; the construction is deterministic and polynomial time in the gate list ([[lem-circuit-satisfaction-is-linear-quadratic-consistency]]).

[F2] The BLR rejection probability of a table equals the fraction of violated linearity constraints of its Hadamard system and is at least its distance from the nearest linear function, with no restriction on the acceptance probability; if that distance is less than $1/4$ the nearest linear function is unique ([[thm-linearity-test-rejects-proportionally-to-distance]], [[def-linearity-test]], [[thm-linear-self-correction]]).

[F3] The ideal tensor test and its self-corrected implementation use three and six table queries respectively; if $f$ and $g$ are at distances $\delta_f,\delta_g<1/4$ from the linear tables $\ell_u$ and $\ell_w$ and $w\ne u\otimes u$, the self-corrected test rejects with probability at least $1/4-4\delta_f-2\delta_g$ ([[def-quadratic-consistency-test]], [[lem-quadratic-test-soundness]]).

[F4] A two-query self-correction of a table at distance $\delta<1/4$ from a linear function $\ell$ returns $\ell$ at the requested point with probability at least $1-2\delta$ ([[thm-linear-self-correction]], [[def-self-correction-of-a-noisy-linear-function]]).

[F5] A map from circuits to constraint systems is an assignment tester with alphabet $\Sigma_0$, arity bound $q$ and rejection ratio $\rho$ when it contains the named input coordinates and satisfies the perfect-completeness and proximity-soundness clauses; the value of a constraint system is the fraction of its listed constraints satisfied, with multiplicity ([[def-assignment-tester-and-rejection-ratio]]).

## Proof

**Proof technique:** constructive.

1.1 Apply the construction of [F1] to $(C,X)$, obtaining the wire variables $w_1,\dots,w_N$ with the $n$ named input coordinates first, followed by the other $s-n$ input coordinates, the coefficient vectors $A_k$ and right sides $b_k$ for $k=1,\dots,M_0$, and the exact extension equivalence. The output system of this step has the variables $$f(z)\ \ (z\in\mathbb F_2^N),\qquad g(Z)\ \ (Z\in\mathbb F_2^{\,N\times N}),\qquad x_1,\dots,x_n,$$ that is, one variable for every table coordinate of the two Hadamard tables together with the $n$ named input coordinates of the circuit; the intended labeling is $f=\ell_w$, $g=\ell_{w\otimes w}$, $x_i$ the $i$-th input bit, for the evaluation vector $w$ of an accepted input. [F1, construct]

2.1 List the following five families of constraints on the variables of step 1.1, each constraint being the tuple of the variables displayed together with the fixed binary relation displayed, where sums are in $\mathbb F_2$, $e_i$ is the $i$-th unit vector, and $r,s,y,y'\in\mathbb F_2^N$, $Y,Z,W\in\mathbb F_2^{\,N\times N}$, $z\in\mathbb F_2^{M_0}$, $i\in[n]$ range over all choices:

$$(\mathrm{L}_f)\quad (f(r),f(s),f(r+s)),\ \text{relation } a+b=c;$$ $$(\mathrm{L}_g)\quad (g(Z),g(W),g(Z+W)),\ \text{relation } a+b=c;$$ $$(\mathrm{T})\quad (f(y),f(r+y),f(y'),f(s+y'),g(Y),g(r\otimes s+Y)),\ \text{relation } (a_1+a_2)(b_1+b_2)=c_1+c_2;$$ $$(\mathrm{S})\quad (g(Y),g(A(z)+Y)),\ \text{relation } a+b=b(z);$$ $$(\mathrm{C})\quad (f(y),f(e_i+y),x_i),\ \text{relation } a+b=c.$$

The families have $4^N$, $4^{N^2}$, $2^{N^2+4N}$, $2^{M_0+N^2}$ and $n2^N$ constraints respectively, and every constraint has arity at most $6$ over $\{0,1\}$; each relation is an explicit table over the binary alphabet and is determined by the circuit. Put $$K:=\max\{2N,2N^2,N^2+4N,M_0+N^2,N\},\qquad L:=\max(1,n)2^K.$$ Each of the four nonempty power-of-two family sizes divides $2^K$, and when $n\ge1$ the comparison-family size $n2^N$ divides $L$ as well. Duplicate every constraint in a nonempty family $F$ exactly $L/|F|$ times. Thus every nonempty family contributes $L$ constraints; the comparison family is empty when $n=0$, and the total is then $4L$, otherwise $5L$. Since a well-formed circuit has $N\ge1$, $M_0=m+1\le N+1$ gives $K\le5N^2$ and hence $5L\le2^{6N^2+3}$. Therefore the constraint count is at most $2^{q(N)}$ for the fixed polynomial $q(t):=6t^2+3$, with $N=s+m$. Enumerating the families, the coefficient vectors $A(z)$ and the right sides $b(z)$ — computed from the gate list, not queried — takes time polynomial in that output count. [F1, F5, step 1.1, construct, algebra]

3.1 Perfect completeness. Let $x\in\operatorname{SAT}(C)$ and choose a completion of the named inputs witnessing acceptance and let $w$ be its evaluation vector from [F1], with first $n$ coordinates $x$. Label $f=\ell_w$, $g=\ell_{w\otimes w}$ and $x_i$ by the corresponding bit, so that $\operatorname{Corr}_f$ and $\operatorname{Corr}_g$ return the linear values at every point. Every $(\mathrm{L}_f)$ and $(\mathrm{L}_g)$ constraint is satisfied because linear functions satisfy the BLR equation, every $(\mathrm{T})$ constraint is satisfied by the perfect completeness of the tensor test, every $(\mathrm{S})$ constraint is satisfied because $A(z)\odot(w\otimes w)=\sum_kz_k(A_k\odot(w\otimes w))=\sum_kz_kb_k=b(z)$ as $w$ solves every equation of [F1], and every $(\mathrm{C})$ constraint is satisfied because $\operatorname{Corr}_f(e_i)=\ell_w(e_i)=w_i=x_i$. Hence $\operatorname{UNSAT}_{x\cup b}(P(C,X))=0$ for that labeling. [F1, F3, F5, step 2.1, algebra]

3.2 First soundness case: suppose the table $f$ of a labeling $b$ is at distance more than $\varepsilon_0=1/100$ from every linear function. Then the fraction of violated $(\mathrm{L}_f)$ constraints is the BLR rejection probability of $f$, which by [F2] is at least that distance, hence exceeds $\varepsilon_0$; after duplication this is still the violated fraction of the family. Since the total is at most $5L$, the system as a whole violates at least $\varepsilon_0 L/(5L)=\varepsilon_0/5=\rho$ of its constraints, and $\rho\ge\rho\,\delta(x,\operatorname{SAT}(C))$ because $\delta\le1$. The same argument applies to the table $g$ and the family $(\mathrm{L}_g)$. [F2, F5, step 2.1, algebra]

3.3 Second soundness case: suppose both tables are at distance at most $\varepsilon_0$ from linear functions, say $f$ from $\ell_u$ and $g$ from $\ell_v$ in the unique sense of [F2], and $v\ne u\otimes u$. Then by [F3] the self-corrected tensor test rejects with probability at least $1/4-4\varepsilon_0-2\varepsilon_0=1/4-3/50=19/100$, and the $(\mathrm{T})$ constraints are exactly the outcomes of that test, one for each choice of $(r,s,y,y',Y)$; hence at least $(19/100)L$ of them are violated and the system violates at least $(19/100)/5>1/500=\rho$ of its constraints. [F3, F5, step 2.1, algebra]

3.4 Third and fourth soundness cases: suppose in addition $v=u\otimes u$. If the vector $u$ does not satisfy every equation of [F1], then the fraction of $z$ with $A(z)\odot v\ne b(z)$ is exactly $1/2$ by the random subsum clause, and for each such $z$ the fraction of auxiliary points $Y$ with $g(Y)+g(A(z)+Y)\ne b(z)$ is at least $1-2\varepsilon_0$ by [F4] applied to the two uniform points $Y$ and $A(z)+Y$; hence at least $\tfrac12(1-2\varepsilon_0)=\tfrac{49}{100}$ of the $(\mathrm{S})$ constraints are violated and the system violates at least $\tfrac{49}{500}>\rho$ of its constraints. If instead $u$ satisfies every equation, then by the exact extension equivalence of [F1] the input prefix $u_1\cdots u_n$ lies in $\operatorname{SAT}(C)$. For $n\ge1$, writing $d:=\#\{i:x_i\ne u_i\}/n$ gives $d\ge\delta(x,\operatorname{SAT}(C))$, and for each such $i$ the auxiliary point $y$ is uniform and independent of everything else, so by [F4] the fraction of $y$ with $\operatorname{Corr}_f(e_i;y)=u_i\ne x_i$ is at least $1-2\varepsilon_0$; hence at least $d(1-2\varepsilon_0)\ge\tfrac{49}{100}\delta(x,\operatorname{SAT}(C))$ of the $(\mathrm{C})$ constraints are violated, whence the system violates at least $\tfrac{49}{500}\delta(x,\operatorname{SAT}(C))$. For $n=0$, an equation-satisfying $u$ means the empty input is accepted by [F1], so $\delta=0$ and the required bound is immediate; if the empty input is rejected then every $u$ fails an equation and the preceding subsum case applies. [F1, F4, F5, step 2.1, algebra]

4.1 Steps 3.1, 3.2, 3.3 and 3.4 cover every labeling: either a table is more than $\varepsilon_0$ far from linear (step 3.2), or both are within $\varepsilon_0$ of linear tables $\ell_u,\ell_v$ with $v\ne u\otimes u$ (step 3.3), or $v=u\otimes u$ and $v$ fails an equation (step 3.4, first part), or $v=u\otimes u$ satisfies every equation and the comparison family charges the distance of $x$ from $\operatorname{SAT}(C)$ (step 3.4, second part). In each case $\operatorname{UNSAT}_{x\cup b}(P(C,X))\ge\rho\,\delta(x,\operatorname{SAT}(C))$ with $\rho=1/500$, and step 3.1 gives perfect completeness, so by [F5] the constructed system is an assignment tester with alphabet $\{0,1\}$, arity bound $6$ and rejection ratio $\rho$; its size, explicitness and construction time are those of step 2.1. [F5, step 2.1, step 3.1, step 3.2, step 3.3, step 3.4, discharge-construct] ∎

## Remarks

- **Where the exponential size is spent.** The constraints are not sampled: every random choice of every test is materialized once, so the system contains $2^N$ and $2^{N^2}$ table coordinates and $2^{O(N^2)}$ constraints, with $N=s+m$. That is exponentially larger than the circuit but still of the form $2^{\operatorname{poly}(s+m)}$, which is what this base tester asserts. A polynomial-size composition requires an additional robust input-preserving interface beyond this item.
- **Why the input coordinates are compared directly.** The comparison family $(\mathrm{C})$ reads the raw coordinate $x_i$ as a variable of the system and compares it with the self-corrected value of $f$ at $e_i$; this is the only place where the *given* input, rather than the decoded wire vector, enters, and it is what turns the exact extension equivalence of [F1] into the proximity clause of the tester. A decoding that satisfies the circuit but differs from $x$ on a fraction $d$ of the coordinates therefore forces $d(1-2\varepsilon_0)$ violated comparison constraints, the mechanism by which the rejection ratio becomes proportional to the Hamming distance rather than merely positive.
- **The constant $1/100$.** The threshold $\varepsilon_0$ is fixed before the construction and is smaller than $1/4$, so the nearest linear decoders are unique; it also leaves $1/4-3/50$ in the tensor test and $49/100$ in the subsum and comparison families, both bounded away from zero. Any smaller absolute threshold would do; the value is not optimised, only kept an absolute constant for later composition work.
