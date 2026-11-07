---
id: lem-function-field-coefficient-ring-has-finite-ideal-class-group
kind: lemma
title: "The function-field coefficient ring has finite ideal class group"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
deps:
  - def-function-field-coefficient-ring
  - def-divisor-smooth-proper-curve
  - def-degree-divisor-proper-curve
  - def-dedekind-domain
  - def-divisor-group-of-a-dedekind-domain
  - lem-dedekind-localisation-at-nonzero-prime-is-dvr
  - def-principal-weil-divisor-and-class-group
  - thm-principal-divisor-exact-sequence
  - thm-finiteness-of-degree-zero-divisor-class-group-over-finite-field
  - def-axiom-of-choice
  - def-dependent-choice
  - thm-choice-implies-dependent-implies-countable-choice
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Bjorn Poonen, Introduction to Drinfeld Modules, §3.7"
      url: "https://math.mit.edu/~poonen/papers/drinfeld.pdf"
verification: {}
---

## Statement

Assume the Axiom of Choice. Let $k=\mathbb F_q$, let $C$ be a smooth proper geometrically integral curve over $k$, let $\infty$ be a closed point of $C$, and let $A=\Gamma(C\setminus\{\infty\},\mathcal O_C)$ be its function-field coefficient ring. Define $\operatorname{Div}(A)$ as the free abelian group on the nonzero prime ideals of $A$; for $f\in k(C)^\times$, define $\operatorname{div}_A(f)=\sum_{\mathfrak p\ne0}v_{\mathfrak p}(f)[\mathfrak p]$, where $v_{\mathfrak p}$ is the normalized valuation of the discrete valuation ring $A_{\mathfrak p}$. Let $\operatorname{Prin}(A)=\{\operatorname{div}_A(f):f\in k(C)^\times\}$ and $\operatorname{Cl}(A)=\operatorname{Div}(A)/\operatorname{Prin}(A)$. Then $\operatorname{Cl}(A)$ is finite.

## Statement references

[[def-function-field-coefficient-ring]]

[[def-divisor-group-of-a-dedekind-domain]]

[[lem-dedekind-localisation-at-nonzero-prime-is-dvr]]

[[def-principal-weil-divisor-and-class-group]]

[[thm-principal-divisor-exact-sequence]]

[[def-axiom-of-choice]]

## Divisor class quotient diagram

The proof identifies the ideal class group of $A$ with the quotient of the proper-curve divisor class group by the omitted point. The exactness is proved algebraically below; the diagram is only a summary of that map.

```tikzcd
0 \arrow[r] & \langle[\infty]\rangle \arrow[r,hook] & \operatorname{Cl}(C) \arrow[r,two heads] & \operatorname{Cl}(A) \arrow[r] & 0
```

## Facts & Assumptions

**Given:** The Axiom of Choice; a finite field $k=\mathbb F_q$; a smooth proper geometrically integral curve $C/k$; a closed point $\infty$; and $A=\Gamma(C\setminus\{\infty\},\mathcal O_C)$.

[A1] [[def-axiom-of-choice]]: AC states that every family of nonempty sets has a choice function.

[F1] [[def-function-field-coefficient-ring]]: $U=C\setminus\{\infty\}=\operatorname{Spec}(A)$, and $A$ is a Dedekind domain with fraction field $k(C)$.

[F2] [[def-divisor-smooth-proper-curve]]: $\operatorname{Div}(C)$ is the free abelian group on the closed points of $C$, with degree $\deg_k(\sum_x n_x[x])=\sum_x n_x[\kappa(x):k]$.

[F3] [[def-divisor-group-of-a-dedekind-domain]]: $\operatorname{Div}(A)$ is the free abelian group on the nonzero prime ideals of $A$.

[F4] [[lem-dedekind-localisation-at-nonzero-prime-is-dvr]]: for each nonzero prime ideal $\mathfrak p$, the local ring $A_{\mathfrak p}$ is a discrete valuation ring with a normalized valuation $v_{\mathfrak p}$.

[F5] [[def-principal-weil-divisor-and-class-group]]: under DC, $\operatorname{Cl}(C)$ is the quotient of $\operatorname{Div}(C)$ by principal divisors.

[F6] [[thm-choice-implies-dependent-implies-countable-choice]]: AC implies the prescribed-start form of DC, so the class-group definition in [F5] applies under [A1].

[F7] [[thm-finiteness-of-degree-zero-divisor-class-group-over-finite-field]]: under AC and the given curve hypotheses, degree induces $\deg:\operatorname{Cl}(C)\to\mathbb Z$ and its kernel $\operatorname{Cl}^0(C)$ is finite.

[F8] [[def-degree-divisor-proper-curve]]: the degree $m=\deg_k([\infty])=[\kappa(\infty):k]$ is a positive integer.

[F9] [[thm-principal-divisor-exact-sequence]]: under AC, the valuation divisor group of a Dedekind domain maps onto its fractional ideal class group, sending $\sum n_{\mathfrak p}[\mathfrak p]$ to the class of $\prod\mathfrak p^{n_{\mathfrak p}}$ and principal divisors to principal ideals.



**Given:** [A1] and the curve and coefficient-ring data above.

## Proof

1.1 Since $U=\operatorname{Spec}(A)$, its closed points correspond to maximal ideals of $A$; as $A$ is Dedekind, these are exactly its nonzero prime ideals. Thus [F2] and [F3] identify divisors on $U$ with $\operatorname{Div}(A)$, and the local ring at the point corresponding to $\mathfrak p$ is the discrete valuation ring $A_{\mathfrak p}$ from [F4]. [F1, F2, F3, F4, algebra]

2.1 Restriction from $C$ to $U$ deletes the coefficient at $\infty$, so $\operatorname{Div}(C)\to\operatorname{Div}(U)$ is surjective with kernel $\mathbb Z[\infty]$. For each $f\in k(C)^\times$, the order of $f$ at a closed point of $U$ is its valuation in the corresponding local ring $A_{\mathfrak p}$; therefore restriction sends its principal divisor on $C$ to its principal divisor in $\operatorname{Div}(A)$. If a divisor on $C$ restricts to a principal divisor on $U$, subtracting that same principal divisor leaves support only at $\infty$. Hence $\operatorname{Cl}(A)\cong\operatorname{Cl}(C)/\langle[\infty]\rangle$. [F1, F2, F3, F4, F5, step 1.1, algebra]

3.1 By [F7], degree on $\operatorname{Cl}(C)$ is a homomorphism. With $m>0$ from [F8], it descends through the quotient in step 2.1 to $\overline{\deg}:\operatorname{Cl}(A)\to\mathbb Z/m\mathbb Z$. A class in its kernel has a representative divisor $D$ with $\deg_k(D)=tm$ for some integer $t$, so $D-t[\infty]$ has degree zero and represents the same quotient class. Conversely every degree-zero class lies in the kernel; no nonzero multiple of $[\infty]$ has degree zero, so this identifies the kernel with $\operatorname{Cl}^0(C)$. [F5, F7, F8, step 2.1, algebra]

4.1 The kernel in step 3.1 is finite by [F7], and the image is a subgroup of the finite group $\mathbb Z/m\mathbb Z$. Each fiber is a coset of that finite kernel, so the divisor class group $\operatorname{Cl}(A)$ is finite. By [F9], this is the fractional ideal class group of the Dedekind domain $A$. [F7, F8, F9, step 3.1, algebra] ∎

## Remarks

The proof uses AC through the supplied finiteness theorem for $\operatorname{Cl}^0(C)$. DC is used only to form the principal-divisor class group and follows from AC here; no rational point on $C$ is assumed.
