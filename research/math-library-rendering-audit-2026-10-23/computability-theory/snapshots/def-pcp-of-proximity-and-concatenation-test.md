---
id: def-pcp-of-proximity-and-concatenation-test
kind: definition
title: "Two-piece PCP of proximity and concatenation check"
status: published
origin: pipeline
deps:
  - def-walsh-hadamard-encoding-and-relative-distance
  - thm-constant-query-exponential-pcp-for-quadratic-equations
  - lem-boolean-circuits-reduce-to-quadratic-equation-systems-with-a-fixed-input-prefix
  - def-self-correction-of-a-noisy-linear-function
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  scraped: []
  references:
    - title: "Arora and Barak, Computational Complexity: A Modern Approach, §18.4.3, Corollaries 18.25–18.26 and proof of Corollary 18.25, printed pp. 368–369"
      url: https://theory.cs.princeton.edu/complexity/book.pdf
verification:
  precheck: n/a
  audited: 2026-09-30
---

## Definition

Let $C$ be a Boolean circuit with $s$ primary inputs and $m$ non-input nodes.
Let $X_1,X_2$ be disjoint ordered lists of its input wires, of lengths
$n_1,n_2$, and put $n=n_1+n_2$. The named pair $(a_1,a_2)$ is **satisfying**
if some assignment to the other input wires makes $C$ output one when the
wires in $X_1,X_2$ receive $a_1,a_2$. Reorder the explicit input list by the
deterministic permutation $(X_1,X_2,\text{remaining inputs})$. The fixed-prefix
reduction [[lem-boolean-circuits-reduce-to-quadratic-equation-systems-with-a-fixed-input-prefix]] then puts the named bits in the first $n$ variables of its QUADEQ instance. Write $N=s+m$ for the number of reduced variables. The reduction says exactly that a satisfying named pair extends to a solution of that instance.

Fix an absolute constant $0<\eta\le1$ and set $\delta_0=1/100$. An
**$(\eta,\delta_0)$ two-piece PCP of proximity** for $(C,X_1,X_2)$ is a
uniform, nonadaptive verifier with a fixed proof tuple
$(\pi_1,\pi_2,\zeta)$ satisfying the following interface:

1. $\pi_i$ is a bit table on $\mathbb F_2^{n_i}$, so its length is $2^{n_i}$.
   The private string $\zeta$ has length at most $2^{p(s+m)}$ and the verifier
   uses at most $r(s+m)$ unbiased random bits for fixed polynomials $p,r$.
   It makes at most six bit queries. Query locations are determined by the
   circuit, the fixed proof tuple and the random tape, before any answer is
   read; repeated locations count toward the query bound.
2. (**Perfect completeness**) For every satisfying named pair $(a_1,a_2)$,
   there is one fixed private string $\zeta$ such that the verifier accepts
   $(\operatorname{WH}_{n_1}(a_1),\operatorname{WH}_{n_2}(a_2),\zeta)$ on every
   random tape. The Walsh–Hadamard tables use the convention in
   [[def-walsh-hadamard-encoding-and-relative-distance]].
3. (**Proximity soundness**) For every fixed proof tuple, if its rejection
   probability is less than $\eta$, there is a satisfying named pair
   $(a_1,a_2)$ for which $$\operatorname{dist}(\pi_i,\operatorname{WH}_{n_i}(a_i))\le\delta_0\qquad(i=1,2).$$

Here probability is only over the verifier's random tape; all three proof
parts are fixed first. If the circuit has no satisfying named pair, proximity
soundness therefore says that every fixed proof tuple is rejected with
probability at least $\eta$. The private string used in our construction is
the fixed QUADEQ proof from [[thm-constant-query-exponential-pcp-for-quadratic-equations]]:
it consists of tables $F=\operatorname{WH}_N(w)$ and
$G=\operatorname{WH}_{N^2}(w\otimes w)$ for a reduced-instance witness $w$.

For the input prefix, define the two coordinate injections
$$j_1(r)=(r,0^{N-n_1}),\qquad j_2(r)=(0^{n_1},r,0^{N-n})\quad(r\in\mathbb F_2^{n_i}).$$
The second piece is thus compared with the offset slice, not with the initial
coordinates. On exact linear tables the **raw concatenation check** for piece
$i$ samples uniform $r\in\mathbb F_2^{n_i}$ and compares $\pi_i(r)$ with
$F(j_i(r))$; this is the two-query check in the cited source. For arbitrary
tables, the four-query self-corrected check samples independent uniform
$r,y\in\mathbb F_2^{n_i}$ and $Y\in\mathbb F_2^N$, then compares
$$\operatorname{Corr}_{\pi_i}(r;y)=\pi_i(y)+\pi_i(y+r)$$
with
$$\operatorname{Corr}_{F}(j_i(r);Y)=F(Y)+F(Y+j_i(r)),$$
using the two-query corrector of
[[def-self-correction-of-a-noisy-linear-function]]. The check is nonadaptive.

If $n_i=0$, the mask space and short-table domain are singletons, $j_i(0)=0$,
and the self-corrected short value is $\pi_i(0)+\pi_i(0)=0$. Thus the slice
check is defined without a positive-dimension exception. The source Corollary
18.26 uses the same two named pieces and a two-query exact-codeword check; the
four-query form above is the explicit local extension used for arbitrary
fixed proof tables. Corollary 18.26 states proximity when acceptance is at
least $1/2$, which is stronger than the local $\eta$-gap interface here. The
definition records the local interface; it does not assert that every circuit
has such a verifier.
