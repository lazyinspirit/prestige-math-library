---
id: "thm-schwartz-zippel-over-finite-fields"
kind: "theorem"
title: "Schwartz zippel over finite fields"
status: "draft"
origin: "pipeline"
deps: ["def-monomials-multidegree-and-total-degree", "thm-root-bound-for-polynomials-over-a-domain", "def-field", "thm-induction-principle"]
justified_by: []
landmark: false
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  scraped: []
  references:
    - title: "Arora–Barak Appendix A, Lemma A.25, PDF p.475; nonempty-subset extension by the same counting proof"
      url: https://theory.cs.princeton.edu/complexity/book.pdf
proof_strategy: "direct"
---

## Statement

Let F be a finite field, $m\ge1$, and $f\in F[x_1,\ldots,x_m]$ a nonzero formal polynomial of total degree d. For a nonempty subset $A\subseteq F$ and independent uniform $a_i\in A$,
$$\mathbb P(f(a_1,\ldots,a_m)=0)\le\min(1,d/|A|).$$
In particular $A=F$ gives the bound $d/|F|$. A nonzero constant has zero vanishing probability. Nonzero formal polynomials can nonetheless induce the zero function on the whole finite grid when their degree is large.

## Facts & Assumptions

**Given:** The finite field, nonzero formal polynomial and nonempty A above. Uniform independent sampling gives mass $|A|^{-m}$ to each tuple.

[F1] Total degree is the largest sum of exponents of a nonzero coefficient in the unique finite monomial expansion ([[def-monomials-multidegree-and-total-degree]]).

[F2] A nonzero univariate polynomial of degree r over an integral domain has at most r roots ([[thm-root-bound-for-polynomials-over-a-domain]]).

[F3] In a field every nonzero element has a multiplicative inverse and zero is distinct from one ([[def-field]]).

[F4] Successor induction proves a property for all naturals ([[thm-induction-principle]]).

## Proof

1.1 A field is an integral domain: distributivity gives $a0=a(0+0)=a0+a0$, so additive cancellation gives $a0=0$. If $ab=0$ and $a\ne0$, multiply by $a^{-1}$ to obtain $b=0$. Thus F2 applies over F. For m=1 it gives at most d roots in A, and hence probability at most $d/|A|$ and also at most one. If d=0 in any number of variables, F1 makes f a nonzero constant, with no zero evaluations. [F1, F2, F3, given]

2.1 To pass from m-1 to m for $m>1$, suppose the asserted root-count bound holds in m-1 variables for every nonzero polynomial. Put $q=|A|>0$. If $d\ge q$ the target minimum is one and the bound is immediate from counting at most all $q^m$ tuples. It remains to consider $0<d<q$. Collect monomials by the last exponent as $f=\sum_{j=0}^r g_jx_m^j$ with $g_r\ne0$. F1 gives $\deg g_r\le d-r$, and $0\le r\le d<q$. [step 1.1, F1, given]

3.1 By the m-1 assertion the number B of base tuples in $A^{m-1}$ on which $g_r$ vanishes is at most $(d-r)q^{m-2}$. For the other $q^{m-1}-B$ tuples, specialization yields a nonzero univariate polynomial of degree exactly r, so F2 bounds its roots by r. A bad base tuple has at most q possible last coordinates, regardless of whether its specialized polynomial is zero. The total zero count is therefore $$Bq+(q^{m-1}-B)r\le Bq+q^{m-1}r\le(d-r)q^{m-1}+rq^{m-1}=dq^{m-1}.$$ For r=0 the good specializations are nonzero constants and have zero roots, exactly as this count says. Division by $q^m>0$ gives $d/q$. [step 2.1, F1, F2]

4.1 Step 1.1 supplies the one-variable base; steps 2.1–3.1 pass the root-count bound to each next number of variables, and F4 gives it for every positive m. The case $|A|=1$ is covered by the constant case or $d\ge q$, so no hidden division by q-1 occurs. To see why formal nonzero is the right hypothesis, for any finite F the formal product $\prod_{a\in F}(X-a)$ has leading coefficient one and degree $|F|$, yet vanishes at every element of F. This finite product needs no ordering choice: commuting factors give the same polynomial in any listing. Thus a vanishing polynomial function is compatible with the bound when degree is large. [step 1.1, step 2.1, step 3.1, F1, F3, F4] ∎
