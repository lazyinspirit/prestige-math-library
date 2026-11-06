---
id: lem-cft-formal-coordinate-change-action
kind: lemma
title: Formal coordinate-change action of a conformal vertex algebra
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 1
deps:
  - def-conformal-vertex-algebra
  - def-vertex-algebra-state-field
  - def-virasoro-algebra
  - lem-cft-formal-coordinate-action-virasoro-commutators
justified_by: []
domain: mathematics
library: mathematics
dependency_roles:
  def-conformal-vertex-algebra: mathematical-premise
  def-vertex-algebra-state-field: mathematical-premise
  def-virasoro-algebra: mathematical-premise
  lem-cft-formal-coordinate-action-virasoro-commutators: mathematical-premise
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
verification:
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
sources:
  references:
    - title: "Bin Gui and Hao Zhang, Analytic Conformal Blocks of C2-cofinite Vertex Operator Algebras I: Propagation and Dual Fusion Products"
      url: https://arxiv.org/pdf/2305.10180v4
      locator: "§1.3, equations (1.17)–(1.19) and Theorem 1.12, PDF pp. 20–21; the source cites Huang 1997, §4.2, for the representation identity."
---

## Statement

Let $V=\bigoplus_{m\geq0}V_m$ be a conformal vertex algebra of CFT type over $\mathbb C$, with the Virasoro operators fixed in the corresponding Definition. Let $\rho(t)=a_1\exp(\sum_{n>0}c_nt^{n+1}\partial_t)t$ be a holomorphic germ at $0$ with $a_1\neq0$. The formal-coordinate operator on $V$ is
$$
U(\rho)=a_1^{L(0)}\exp\!\left(\sum_{n>0}c_nL(n)\right).
$$
On each finite weight truncation $V_{\leq d}=\bigoplus_{0\leq m\leq d}V_m$, the exponential is a finite sum on each vector because each $L(n)$ with $n>0$ lowers $L(0)$-weight. These operators satisfy $U(\rho_1\circ\rho_2)=U(\rho_1)U(\rho_2)$ and are invertible. If $\rho$ varies holomorphically with a parameter, the restrictions of $U(\rho)$ to each $V_{\leq d}$ vary holomorphically.

## Statement references

[[def-conformal-vertex-algebra]]

[[def-vertex-algebra-state-field]]

[[def-virasoro-algebra|Virasoro algebra in the $L_m$ convention]]

## Facts & Assumptions

[F1] The grading, finite-dimensional weight spaces, and Virasoro brackets are those of [[def-conformal-vertex-algebra]], [[def-vertex-algebra-state-field]] and [[def-virasoro-algebra|Virasoro algebra in the $L_m$ convention]].

[F2] The positive-mode exponential is a polynomial representation of tangent-to-identity finite jets, compatible with weight restrictions, by [[lem-cft-formal-coordinate-action-virasoro-commutators]].

## Proof

**Given:** The algebra $V$ and germs in the statement. Write $s_a(t)=at$ and let $G_d$ denote the tangent-to-identity jets modulo $t^{d+2}$.

1.1 Every germ has a unique formal factorization $\rho=s_a\circ f$, with $a=\rho'(0)\ne0$ and $f'(0)=1$. At each jet order the triangular recursion of [F2] gives the unique coefficients $c_1,\ldots,c_d$ in $f=\exp(\sum c_n t^{n+1}\partial_t)t$. The recursions are compatible as $d$ increases; this establishes the infinite formal expression. It does not assert that its logarithmic vector field converges as a holomorphic vector field. On $E_d=V_{\leq d}$ each mode with $n>d$ vanishes and every product of more than $d$ positive modes vanishes. Hence the displayed operator is well-defined there and equals $A(a)R_d(f)$, where $A(a)|_{V_m}=a^mI$. The finite restrictions agree and therefore define an operator on the algebraic direct sum $V$. [F1, F2, construct, algebra]

2.1 For $b\ne0$ put $f^{[b]}=s_b^{-1}\circ f\circ s_b$. Conjugation changes $t^{n+1}\partial_t$ to $b^nt^{n+1}\partial_t$ in the exponential expression for $f^{[b]}$. Weight lowering gives $A(b)^{-1}L(n)A(b)=b^nL(n)$, so $R_d(f)A(b)=A(b)R_d(f^{[b]})$. If $\rho_1=s_a\circ f$ and $\rho_2=s_b\circ g$, their composite is $s_{ab}\circ f^{[b]}\circ g$. Applying [F2] and this conjugation identity gives $U(\rho_1)U(\rho_2)=A(ab)R_d(f^{[b]})R_d(g)=U(\rho_1\circ\rho_2)$ on $E_d$. Compatibility proves the identity on $V$. Since $U(\mathrm{id})=I$ and a germ with nonzero derivative has an inverse germ, $U(\rho^{-1})$ is the two-sided inverse. Alternatively invertibility on each jet follows from the finite polynomial inverse and $A(a)^{-1}=A(a^{-1})$. [step 1.1, F2, algebra]

3.1 For a holomorphic family of germs, every Taylor coefficient and the nonvanishing derivative $a$ are holomorphic in the parameter. Division by $a$ gives holomorphic coefficients of $f$, and the finite triangular recursion makes every $c_n$ holomorphic. On $E_d$ the finite exponential is polynomial in $c_1,\ldots,c_d$ and $A(a)$ has entries $a^m$, $0\leq m\leq d$. Thus every matrix entry is holomorphic. No branch of $\log a$ is needed because the weights are integers. This proves all the assertions. [step 1.1, step 2.1, F1, F2] ∎
