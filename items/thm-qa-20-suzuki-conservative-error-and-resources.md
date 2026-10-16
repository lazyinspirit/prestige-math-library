---
id: thm-qa-20-suzuki-conservative-error-and-resources
kind: theorem
title: Higher-order product-formula error with explicit term counts
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 17
deps:
  - alg-qa-20-suzuki-recursive-product-formula
  - lem-qa-20-suzuki-order-cancellation
  - def-qa-20-term-list-access-model
  - def-operator-norm-on-a-finite-dimensional-inner-product-space
  - cor-operator-norm-submultiplicative-and-t-star-t-identity
  - thm-qa-19-matrix-exponential-unitary-properties
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms"
      url: "https://www.cs.umd.edu/~amchilds/qa/qa.pdf"
      locator: "Chapter 27 §27.3, printed p. 135: higher-order product-formula asymptotics; no recursive cancellation proof is supplied."
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes"
      url: "https://arxiv.org/pdf/1907.09415"
      locator: "Chapter 9 §9.2, printed pp. 72–74: first-order error scaling and higher-order context; Chapter 9, Exercise 4, printed p. 79: the second-order local-error fact. No higher-order recursive proof is supplied."
---

## Statement

Let $k,m,r\ge1$, let $H_1,\ldots,H_m$ be self-adjoint endomorphisms of a finite-dimensional complex inner-product space, and put $H=\sum_jH_j$, $M=\sum_j\|H_j\|$, and $q=2k+1$. Expand one recursive segment as $S_{2k}(h)=\prod_{\nu=1}^{L}e^{-ihc_\nu H_{j_\nu}}$ in its declared order and set $B_k=\sum_{\nu=1}^{L}|c_\nu|\|H_{j_\nu}\|$. For every real $t$,
$$\left\|S_{2k}(t/r)^r-U_H(t)\right\|\le\frac{(B_k^q+M^q)|t|^q}{q!\,r^{q-1}}.$$
The expanded term count is $L=(2m-1)5^{k-1}$ per segment. If $t$ is rational with an exact finite code, a rational tolerance $\epsilon>0$ and rational upper bounds $\overline B\ge B_k$, $\overline M\ge M$ are supplied, a finite integer search for the least $r\ge1$ satisfying $r^{q-1}q!\epsilon\ge(\overline B^q+\overline M^q)|t|^q$ makes the displayed exact-call error at most $\epsilon$. For the resource claims when $t\ne0$, require the term-list input to support every actual signed call code $c_\nu t/r$ for its term $H_{j_\nu}$ in the fully expanded segment, including half-time base calls and negative central calls, and to declare an implementation and per-call cost at each such code. An inverse or time-reversed implementation must be separately declared with its own cost and error record; forward access alone does not supply it. When $t\ne0$ and term circuits are approximate, add the sum of all per-call operator-norm errors separately; to keep total error at most $\epsilon$, use $\epsilon/2$ in the integer search and require the sum of call errors over all $rL$ calls to be at most $\epsilon/2$. When $t\ne0$, the term-call contributions to query and gate costs are the sums of the declared costs at the actual signed times in one expanded word, multiplied by $r$; when $t=0$, the recursive algorithm returns the identity with no term calls. The separately declared product-composition overheads $Q_{\rm wrap}$ and $G_{\rm wrap}$ are added to those totals; coefficient, description-bit, ancilla, and classical-generation resources remain separate coordinates.

## Facts & Assumptions

**Given:** The finite term list $H_1,\ldots,H_m$, integer $k,r\ge1$, and real time $t$.

[F1] [[lem-qa-20-suzuki-order-cancellation]] proves that $S_{2k}$ and $U_H$ have matching Taylor coefficients through degree $2k$.

[F2] [[alg-qa-20-suzuki-recursive-product-formula]] expands each segment into five copies per recursion level, starting from the $2m-1$ factors of $S_2$.

[F3] [[thm-qa-19-matrix-exponential-unitary-properties]] gives unitarity and $U_H'(h)=-iHU_H(h)$.

[F4] [[def-operator-norm-on-a-finite-dimensional-inner-product-space]] defines the operator norm by the maximum over unit vectors (and as zero on the zero domain).

[F5] [[cor-operator-norm-submultiplicative-and-t-star-t-identity]] gives submultiplicativity of the operator norm.

[F6] [[def-qa-20-term-list-access-model]] charges each supported signed term call and separately records query, gate, coefficient, and generation costs.

[A1] For the resource claims when $t\ne0$, each actual call in the expanded word is supported at its signed time code and has a declared implementation and per-call cost; any inverse or time-reversed route is separately declared.

## Proof


1.1 The claim is immediate on the zero-dimensional space, so assume $V\ne\{0\}$. Write the expanded segment as $P(h)=F_1(h)\cdots F_L(h)$, where $F_\nu(h)=e^{-ihc_\nu H_{j_\nu}}$. Repeated differentiation gives $F_\nu^{(a)}(h)=(-ic_\nu H_{j_\nu})^aF_\nu(h)$, so [F3]–[F5] imply $\|F_\nu^{(a)}(h)\|\le |c_\nu|^a\|H_{j_\nu}\|^a$. The full multinomial sum is $\sum_{a_1+\cdots+a_L=q}\frac{q!}{a_1!\cdots a_L!}\prod_\nu(|c_\nu|\|H_{j_\nu}\|)^{a_\nu}=(\sum_\nu|c_\nu|\|H_{j_\nu}\|)^q=B_k^q$, proving $\|P^{(q)}(h)\|\le B_k^q$. Repeatedly differentiating [F3] gives $U_H^{(q)}(h)=(-iH)^qU_H(h)$. The triangle inequality from [F4] gives $\|H\|\le\sum_j\|H_j\|=M$, hence $\|U_H^{(q)}(h)\|\le M^q$. [given, F3, F4, F5, algebra]

2.1 By [F1], $P-U_H$ has zero Taylor coefficients through degree $q-1$. The integral Taylor remainder of order $q$ gives $\|P(h)-U_H(h)\|\le\int_0^{|h|}\frac{(|h|-s)^{q-1}}{(q-1)!}(B_k^q+M^q)\,ds=\frac{(B_k^q+M^q)|h|^q}{q!}$, using a change of variable when $h<0$. [step 1.1, F1, algebra]

3.1 Both $P(h)$ and $U_H(h)$ are unitary. Their operator norms and those of their inverses are one by the unit-vector definition [F4]; submultiplicativity [F5] then shows that each unitary factor preserves the norm in a telescoping expansion. Thus their $r$th-power difference is at most $r$ times the local bound in step 2.1. Substituting $h=t/r$ yields the displayed global error. [step 2.1, F3, F4, F5, algebra]

4.1 The base segment has $2m-1$ term calls by [F2]; every recursive level replaces one formula by five copies, so induction gives $L=(2m-1)5^{k-1}$. When $t\ne0$, [A1] supplies each call at signed time $c_\nu t/r$ with its query and gate costs, so $r$ identical segments multiply their term-call contributions by $r$; when $t=0$, the procedure returns the identity and makes no term calls. Add the separately declared product-composition charges $Q_{\rm wrap}$ and $G_{\rm wrap}$ to obtain total query and gate costs; coefficient, description-bit, ancilla, and classical-generation costs stay separate as required by [F6]. If the $\nu$th exact call is replaced by a unitary call with error $\eta_\nu$, expanding the difference of the two products one factor at a time and applying the norm invariance in step 3.1 bounds the total change by $\sum_\nu\eta_\nu$ over all $rL$ calls. Finally, the integer search terminates because its left side grows without bound; its inequality and the certified upper bounds make the exact-call error at most $\epsilon$. [step 3.1, F2, F3, F5, F6, algebra] ∎
