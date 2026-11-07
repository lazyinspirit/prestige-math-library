---
id: thm-canonical-height-functional-equation-and-bounded-error
kind: theorem
title: "Canonical height functional equation and bounded error"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 6
deps:
  - def-axiom-of-choice
  - def-polarized-endomorphism-of-projective-variety
  - def-invertible-sheaf
  - def-absolute-logarithmic-weil-height-on-projective-space-over-a-number-field
  - thm-weil-height-machine-functoriality-and-additivity
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Gregory S. Call and Joseph H. Silverman, Canonical heights on varieties with morphisms"
      url: "https://www.numdam.org/article/CM_1993__89_2_163_0.pdf"
      locator: "§1, Theorem 1.1, Proposition 1.2, and Corollary 1.1.1, printed pp. 166–170"
    - title: "Joseph H. Silverman, Arithmetic and dynamical degrees on projective varieties"
      url: "https://swc-math.github.io/aws/2010/2010SilvermanNotes.pdf"
      locator: "Lecture 3, printed pp. 14–16"
verification: {}
proof_strategy: direct
---

## Statement

Assume the Axiom of Choice. Let $K$ be a number field, let $X/K$ be a projective variety, and let $(X,f,L,d)$ be a polarized dynamical system with $d>1$. Let $h_L:X(\overline K)\to\mathbb R$ be any representative of the Weil height class of $L$. Then for every $P\in X(\overline K)$ the limit
$$
\widehat h_{f,L}(P)=\lim_{n\to\infty}d^{-n}h_L(f^n(P))
$$
exists, is independent of the representative $h_L$, satisfies
$$\widehat h_{f,L}(f(P))=d\widehat h_{f,L}(P),\qquad |\widehat h_{f,L}(P)-h_L(P)|\le C_L$$
for a constant $C_L$ independent of $P$, and is the unique function with this functional equation whose difference from $h_L$ is bounded on $X(\overline K)$.

## Statement references

[[def-absolute-logarithmic-weil-height-on-projective-space-over-a-number-field]]

[[thm-weil-height-machine-functoriality-and-additivity]]

## Facts & Assumptions

**Given:** AC; a number field $K$; a projective $K$-variety $X$; an endomorphism $f$; an ample invertible sheaf $L$; an integer $d>1$; an isomorphism $f^*L\cong L^{\otimes d}$; and a representative $h_L$ of the Weil height class of $L$.

[A1] AC is assumed by the projective height machine and the absolute logarithmic height construction. ([[def-axiom-of-choice]], [[thm-weil-height-machine-functoriality-and-additivity]])

[F1] The height machine is functorial under pullback and additive under tensor product modulo bounded functions. Thus $h_L\circ f-dh_L$ is bounded on all algebraic points, uniformly in the point. ([[thm-weil-height-machine-functoriality-and-additivity]])

[F2] Isomorphic invertible sheaves have the same Weil height class, and $L^{\otimes d}$ has height class $d$ times that of $L$. ([[def-invertible-sheaf]], [[thm-weil-height-machine-functoriality-and-additivity]])

## Proof

1.1 By [F1] and [F2], there is $C\ge0$ such that $|h_L(f(Q))-d h_L(Q)|\le C$ for every $Q\in X(\overline K)$. [given, F1, F2]

2.1 For fixed $P$, put $a_n=d^{-n}h_L(f^n(P))$. Applying step 1.1 to $Q=f^n(P)$ gives $|a_{n+1}-a_n|\le C d^{-(n+1)}$. The geometric series $\sum_{n\ge0} C d^{-(n+1)}=C/(d-1)$ converges, so $(a_n)$ is Cauchy and converges; its tail also gives $|\lim a_n-h_L(P)|\le C/(d-1)$ uniformly in $P$. [given, step 1.1, algebra]

3.1 Reindexing the convergent sequence yields $\widehat h_{f,L}(f(P))=\lim_{n\to\infty}d^{-n}h_L(f^{n+1}(P))=d\widehat h_{f,L}(P)$. [given, step 2.1, algebra]

4.1 If $h'_L-h_L$ is bounded by $C'$, then $|d^{-n}h'_L(f^n(P))-d^{-n}h_L(f^n(P))|\le C'd^{-n}\to0$, proving representative independence. If $u$ is another function with $u(f(P))=du(P)$ and $u-h_L$ bounded by $C'$, then $u(P)=d^{-n}u(f^n(P))$ and its difference from $d^{-n}h_L(f^n(P))$ tends to zero; hence $u(P)=\widehat h_{f,L}(P)$. [given, step 2.1, step 3.1, algebra] ∎
