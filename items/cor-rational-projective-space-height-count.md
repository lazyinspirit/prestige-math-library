---
id: cor-rational-projective-space-height-count
kind: corollary
title: Rational points of bounded height on projective space
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 6
deps:
  - def-axiom-of-choice
  - thm-schanuel-height-counting-in-projective-space-over-a-number-field
  - def-schanuel-constant
  - def-number-field
  - def-archimedean-embeddings-and-number-field-signature
  - def-ring-of-integers-of-a-number-field
  - cor-rational-algebraic-integers-are-integers
  - def-generated-and-principal-ideals
  - def-absolute-norm-of-an-ideal
  - def-ideal-class-group-of-a-domain
  - def-roots-of-unity-in-a-field
  - def-number-field-regulator
  - def-discriminant-of-a-number-field-basis-and-order
  - def-field-norm-and-trace
  - def-dedekind-zeta-function
  - def-riemann-zeta-function
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Stephen H. Schanuel, Heights in number fields, Bulletin de la Société Mathématique de France 107 (1979), Theorem 3 and proof, printed pp. 445–447"
      url: "https://www.numdam.org/item/BSMF_1979__107__433_0.pdf"
    - title: "Joseph H. Silverman, An Introduction to Height Functions, expanded version of lectures presented at MSRI, January 2006"
      url: "https://legacy.slmath.org/attachments/workshops/301/HtSurveyMSRIJan06.pdf"
      locator: "Full 69-page PDF; projective height definitions, printed pp. 2–3; rational projective-line count, p. 5; Schanuel theorem and constant, p. 6."
verification: {}
proof_strategy: direct
---

## Statement

Assume the Axiom of Choice. For an integer $d\ge2$, let $N_d(T)$ be the number of rational points $P\in\mathbb P^d(\mathbb Q)$ whose absolute multiplicative Weil height is at most $T$. Then, as $T\to\infty$,
$$N_d(T)=\frac{2^d}{\zeta(d+1)}T^{d+1}+O_d(T^d),$$
where $\zeta(s)=\sum_{n=1}^{\infty}n^{-s}$ for real $s>1$. For $d=1$ the exceptional error is
$$N_1(T)=\frac{2}{\zeta(2)}T^2+O(T\log T).$$

## Statement references

[[thm-schanuel-height-counting-in-projective-space-over-a-number-field]]

[[def-axiom-of-choice]]

[[def-riemann-zeta-function]]

## Facts & Assumptions

**Given:** The Axiom of Choice, an integer $d\ge1$, the rational field $\mathbb Q$, and a real height threshold $T\ge1$.

[A1] The Axiom of Choice is the assumption in the Schanuel height-counting theorem. ([[def-axiom-of-choice]])

[F1] For a number field of degree $N$ and dimension parameter $m\ge2$, the absolute-height count is $C_{K,m}T^{mN}+O(T^{mN-1})$ except when $(m,N)=(2,1)$, where it is $C_{K,m}T^2+O(T\log T)$. ([[thm-schanuel-height-counting-in-projective-space-over-a-number-field]])

[F2] The rational field has degree one, signature $(1,0)$, and ring of integers $\mathbb Z$. ([[def-number-field]], [[def-archimedean-embeddings-and-number-field-signature]], [[def-ring-of-integers-of-a-number-field]], [[cor-rational-algebraic-integers-are-integers]])

[F3] The regulator is $1$ in rank zero, the discriminant is computed from the trace matrix of an integral basis, the ideal class number is the number of ideal classes, the roots of unity are the elements of finite multiplicative order, $\kappa_{K,m}=(2^{r_1}(2\pi)^{r_2}/\sqrt{D_K})^m m^{r_1+r_2-1}$, and $C_{K,m}=h_KR_K\kappa_{K,m}/(w_K\zeta_K(m))$. ([[def-number-field-regulator]], [[def-discriminant-of-a-number-field-basis-and-order]], [[def-field-norm-and-trace]], [[def-ideal-class-group-of-a-domain]], [[def-roots-of-unity-in-a-field]], [[def-schanuel-constant]])

[F4] For $\operatorname{Re}s>1$, $\zeta_{\mathbb Q}(s)=\zeta(s)=\sum_{n=1}^{\infty}n^{-s}$, where the right side is the Riemann zeta function. ([[def-dedekind-zeta-function]], [[def-riemann-zeta-function]])

## Proof

1.1 In [F1] take $K=\mathbb Q$ and $m=d+1$. By [F2], $N=1$, $r_1=1$, and $r_2=0$. To describe the ideals of $\mathbb Z$, let $I$ be a nonzero ideal and choose its least positive element $n$; dividing any $a\in I$ by $n$ gives $a=qn+r$ with $r\in I$ and $0\le r<n$, so minimality forces $r=0$ and $I=n\mathbb Z$. The quotient has representatives $0,1,\ldots,n-1$, hence norm $n$. Thus all ideals are principal and $h_{\mathbb Q}=1$. A rational root of unity is real and has absolute value $1$, so it is $1$ or $-1$ and $w_{\mathbb Q}=2$. The unit rank is $r_1+r_2-1=0$, hence $R_{\mathbb Q}=1$ by [F3]. [F2, F3, given, algebra, choose]

2.1 The integral basis of $\mathbb Z$ is $(1)$, and its trace Gram matrix is $[\operatorname{Tr}_{\mathbb Q/\mathbb Q}(1)]=[1]$, so $D_{\mathbb Q}=1$ by [F3]. The definition of the geometric factor in [F3] gives $\kappa_{\mathbb Q,m}=2^m m^0=2^m$. Finally, the ideals $n\mathbb Z$ and their norms in step 1.1 identify the Dedekind zeta series with the Riemann zeta series in [F4]. Therefore $C_{\mathbb Q,m}=\frac{1\cdot1\cdot2^m}{2\zeta(m)}=\frac{2^{m-1}}{\zeta(m)}$. [F2, F3, F4, step 1.1, algebra]

3.1 If $d\ge2$, then $m=d+1\ge3$, so $(m,N)\ne(2,1)$. Substituting $N=1$, $m=d+1$, and $C_{\mathbb Q,m}=2^d/\zeta(d+1)$ into [F1] proves $N_d(T)=2^dT^{d+1}/\zeta(d+1)+O_d(T^d)$. [F1, step 1.1, step 2.1, algebra]

4.1 If $d=1$, then $m=2$ and $(m,N)=(2,1)$. The exceptional clause of [F1] and step 2.1 give $N_1(T)=2T^2/\zeta(2)+O(T\log T)$. The two cases prove the claim. [F1, step 2.1, step 3.1, algebra] ∎
