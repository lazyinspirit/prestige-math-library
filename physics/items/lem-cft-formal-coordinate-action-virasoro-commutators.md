---
id: lem-cft-formal-coordinate-action-virasoro-commutators
kind: lemma
title: Finite-jet integration of positive Virasoro operators
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 0
deps: [def-conformal-vertex-algebra, def-virasoro-algebra]
justified_by: []
domain: mathematics
library: mathematics
dependency_roles:
  def-conformal-vertex-algebra: mathematical-premise
  def-virasoro-algebra: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
sources:
  references:
    - title: "Gui and Zhang, Analytic Conformal Blocks of C2-cofinite Vertex Operator Algebras I"
      url: https://arxiv.org/pdf/2305.10180v4
      locator: "Section 1.3, (1.17)-(1.18) and Theorem 1.12; finite-jet reformulation with local proof."
---

## Statement

Let $V$ be a conformal vertex algebra of CFT type and $d$ a nonnegative integer. Set $E_d=\bigoplus_{m=0}^d V_m$. Let $G_d$ be the group of truncated series $f(t)=t+\sum_{n=1}^d b_nt^{n+1}$, with composition modulo $t^{d+2}$. Every $f\in G_d$ has a unique expression $f(t)=\exp(\sum_{n=1}^d c_nt^{n+1}\partial_t)t$ modulo $t^{d+2}$. The assignment $R_d(f)=\exp(\sum_{n=1}^d c_nL(n))|_{E_d}$ is a representation of $G_d$. Its matrix entries are polynomials in $b_1,\ldots,b_d$. It is compatible with restriction from $E_{d+1}$ to $E_d$ and with truncation of jets. In particular no convergence of the formal logarithmic vector field is required.

## Statement references

[[def-conformal-vertex-algebra]]

[[def-virasoro-algebra|Virasoro algebra in the $L_m$ convention]]

## Facts & Assumptions

[F1] The grading is nonnegative integral with finite-dimensional pieces, and $[L(0),L(n)]=-nL(n)$, $[L(m),L(n)]=(m-n)L(m+n)$ for $m,n>0$, by [[def-conformal-vertex-algebra]] and [[def-virasoro-algebra|Virasoro algebra in the $L_m$ convention]]. The central term vanishes for these indices.

## Proof

**Given:** The objects and integer $d$ in the statement. All series and matrices below are truncated; $d=0$ gives the trivial group and identity operator.

1.1 Put $A_d=\mathbb C[t]/(t^{d+2})$ and $D_n=t^{n+1}\partial_t$ for $1\leq n\leq d$. These are well-defined derivations of $A_d$, and $[D_m,D_n]=(n-m)D_{m+n}$, with $D_k=0$ for $k>d$. Any product of $d+1$ such derivations is zero: each factor raises the degree of a nonconstant monomial by at least one and kills constants. Thus $\exp D$ is a finite sum for $D=\sum c_nD_n$. The repeated Leibniz identity $D^k(uv)=\sum_{j=0}^k\binom{k}{j}D^juD^{k-j}v$ implies that $\exp D$ is an algebra automorphism, with inverse $\exp(-D)$. Its image of $t$ has coefficient $c_n$ in degree $n+1$, plus a polynomial in $c_1,\ldots,c_{n-1}$, since a product of at least two derivations contributing to that degree has positive indices summing to $n$. Recursive coefficient comparison therefore gives unique $c_n$ for each $f$, polynomial in $b_1,\ldots,b_n$. The substitution operator $S_f:h\mapsto h\circ f$ consequently equals $\exp D$. [given, algebra]

2.1 On $E_d$, $L(n)$ lowers weight by $n$, so $L(n)=0$ for $n>d$ and every product of $d+1$ positive modes vanishes. Define the linear map $J(D_n)=L(n)|_{E_d}$. It reverses brackets: $J([X,Y])=-[J(X),J(Y)]$. This follows on basis elements from the commutators, including the zero terms when $m+n>d$, and extends by bilinearity. [F1, step 1.1, algebra]

3.1 We prove integration of this map directly. The coefficients $b_1,\ldots,b_d$ identify $G_d$ with $\mathbb C^d$. Along any piecewise smooth path $f(s)$ starting at the identity, set $X=S_f^{-1}\partial_s S_f$. Differentiating the multiplicativity of $S_f$ shows that $X$ is a derivation. It raises monomial degree and hence equals $\sum x_nD_n$: a derivation is determined by its value on $t$, which lies in $t^2A_d$. Define $U$ by $\partial_sU=J(X)U$, $U(0)=I$. This equation has the explicit solution $I+\sum_{k=1}^d\int_{0<s_k<\cdots<s_1<s}J(X(s_1))\cdots J(X(s_k))\,ds_k\cdots ds_1$. Differentiation verifies the equation; the same finite iteration applied to the difference of two solutions proves uniqueness. [step 1.1, step 2.1, construct, algebra]

4.1 This solution depends only on the endpoint. Indeed, take a smooth fixed-endpoint homotopy $f(s,u)$ and set $Y=S_f^{-1}\partial_u S_f$, $A=J(X)$, $B=J(Y)$. Differentiating inverses gives $\partial_uX-\partial_sY=[X,Y]$, and therefore $\partial_uA-\partial_sB=-[A,B]$. The defect $W=\partial_uU-BU$ satisfies $\partial_sW=AW$ by substitution and this last identity. At $s=0$, $Y=0$ and $U=I$, so $W=0$ there; uniqueness gives $W=0$ throughout. At $s=1$, $Y=0$, so $\partial_uU(1,u)=0$. Any two smooth paths with the same endpoints are joined by their linear interpolation in the coefficient coordinates $\mathbb C^d$; piecewise smooth paths can be reparametrized with vanishing derivatives at joins and the argument applied to the pieces. The iterated-integral solution justifies every parameter differentiation here, without any analytic ODE existence theorem. [step 3.1, step 2.1, algebra]

5.1 Write the resulting endpoint operator as $R(f)$. For $f,g\in G_d$, first follow a path from the identity to $g$, then the path $g$ to $f\circ g$ obtained from a path $f(s)$ by $f(s)\circ g$. Substitution reverses composition, so $S_{f(s)\circ g}=S_gS_{f(s)}$ and its left logarithmic derivative is exactly $S_{f(s)}^{-1}\partial_sS_{f(s)}$. The second segment consequently transports $R(g)$ to $R(f)R(g)$. Endpoint independence proves $R(f\circ g)=R(f)R(g)$. Along the path $f(s)=\exp(sD)t$, its substitution is $\exp(sD)$, so $X=D$ and the explicit solution is $\exp(sJ(D))$. Thus $R=R_d$ as stated. [step 3.1, step 4.1, algebra]

6.1 The exponential formula and the triangular polynomial recursion prove polynomial dependence on the jet coefficients. Restricting from $E_{d+1}$ kills $L(d+1)$ and leaves all other positive modes unchanged; coefficients $c_n$ with $n\leq d$ depend only on the corresponding truncated jet. Thus restrictions agree. All arguments use finite sums, finite-dimensional matrices, explicit polynomial recursions and finite integrals, so require neither convergence of the infinite vector field nor any additional choice axiom. [step 1.1, step 2.1, step 5.1] ∎
