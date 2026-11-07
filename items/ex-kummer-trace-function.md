---
id: ex-kummer-trace-function
kind: example
title: "A Multiplicative Character as a Kummer Trace Function"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 11
deps:
  - def-weight-zero-trace-function
  - lem-deligne-finite-torsor-character-line-construction
  - def-standard-etale-algebra
  - def-lisse-l-adic-sheaf-on-a-scheme
  - def-l-adic-middle-extension-sheaf-over-finite-field
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Fouvry–Kowalski–Michel, *Trace Functions over Finite Fields and Applications*, §3.1"
      url: "https://people.math.ethz.ch/~kowalski/elements.pdf"
      locator: "Dec3,2014 draft Section2.3, printed pp11-13; finite Kummer construction, general-case TODO retained"
    - title: "Fouvry–Kowalski–Michel, *Trace Functions over Finite Fields and Their Applications*, §2.3"
      url: "https://people.math.ethz.ch/~kowalski/trace-functions-pisa.pdf"
      locator: "Section3.1, printed p8; Kummer trace sheaves"
verification:
  precheck: pending
---

## Example

Let $p$ be prime, let $\ell\ne p$, fix an embedding $\iota:\overline{\mathbb Q}_\ell\hookrightarrow\mathbb C$, and let $\chi:\mathbb F_p^\times\to\mathbb C^\times$ be a multiplicative character. On $\mathbb G_{m,\mathbb F_p}$ the finite étale Kummer cover $y^{p-1}=x$ has deck group $\mathbb F_p^\times$ acting by $y\mapsto ay$. Write $\chi_\ell(a)=\iota^{-1}(\chi(a))$, and let $T_a$ act on functions on a fiber by pullback under $y\mapsto ay$. The image of $e_\chi=(p-1)^{-1}\sum_{a\in\mathbb F_p^\times}\chi_\ell(a)^{-1}T_a$ in the direct image is a rank-one lisse sheaf; its middle extension to $\mathbb P^1$ has trace function $x\mapsto\chi(x)$ on $\mathbb F_p^\times$.

## Example references

[[def-weight-zero-trace-function|Weight-zero trace function]]

[[def-lisse-l-adic-sheaf-on-a-scheme|Lisse l-adic sheaf]]

[[def-l-adic-middle-extension-sheaf-over-finite-field|ℓ-adic middle-extension sheaf]]

[[def-standard-etale-algebra|Standard étale algebra]]

[Fouvry–Kowalski–Michel, *Trace Functions over Finite Fields and Applications*, §3.1](https://people.math.ethz.ch/~kowalski/elements.pdf)

## Facts & Assumptions

**Given:** The primes $p$ and $\ell\ne p$, the embedding $\iota$, and the multiplicative character $\chi$.

[F1] [[def-weight-zero-trace-function]]: the trace function at $x$ is the trace of geometric Frobenius on the stalk; geometric Frobenius is inverse arithmetic Frobenius.

[F2] [[def-standard-etale-algebra]]: a monic polynomial quotient whose formal derivative is a unit is a standard étale algebra, hence defines an étale morphism.

[F3] [[def-l-adic-middle-extension-sheaf-over-finite-field]]: for a finite-rank lisse $\overline{\mathbb Q}_\ell$-sheaf $\mathcal L$ on $U$, its ordinary middle-extension sheaf on $X$ is $\mathcal M=j_*\mathcal L$.

[F4] [[lem-deligne-finite-torsor-character-line-construction]] constructs a compatible integral rank-one line for a specified finite torsor; its rational character projector need not be integral when the coefficient prime divides the group order.

## Verification

1.1 The coordinate algebra is free of rank $p-1$ on $1,y,\ldots,y^{p-2}$, and $y^{p-1}-x$ has unit derivative $(p-1)y^{p-2}$ on $\mathbb G_m$. Thus [F2] makes the cover finite étale; its deck group $\mathbb F_p^\times$ acts freely and transitively on each geometric fiber. The coefficient of $T_u$ in $e_\chi^2$ is $(p-1)^{-2}\sum_a\chi_\ell(a)^{-1}\chi_\ell(a^{-1}u)^{-1}=(p-1)^{-1}\chi_\ell(u)^{-1}$, so $e_\chi$ is idempotent; reindexing gives $T_d e_\chi=\chi_\ell(d)e_\chi$. Its image on a torsor fiber consists of functions with $f(dy)=\chi_\ell(d)f(y)$ and is one-dimensional. Applying [F4] with its character equal to $\chi_\ell^{-1}$ constructs the compatible integral lattice and hence the rational lisse line, including when $\ell$ divides $p-1$. [F2, F4, given, algebra]

2.1 For $x\in\mathbb F_{p^m}^\times$, arithmetic Frobenius to the $m$th power sends a root $y$ to $y^{p^m}=y x^{(p^m-1)/(p-1)}$. The factor $a=x^{(p^m-1)/(p-1)}$ lies in $\mathbb F_p^\times$. On functions, an automorphism $\sigma$ acts by $(\sigma f)(y)=f(\sigma^{-1}y)$. Geometric Frobenius is inverse arithmetic on points, so its function action is $T_a$, and the $\overline{\mathbb Q}_\ell$-eigenvalue on the idempotent line is $\chi_\ell(a)$. It is a root of unity. For $m=1$, $a=x^{(p-1)/(p-1)}=x$ and after applying $\iota$ the trace is $\chi(x)$, as stated. [F1, step 1.1, algebra]

3.1 At $0$ and $\infty$, the local parameters satisfy $x=y^{p-1}$ and $x^{-1}=(y^{-1})^{p-1}$; the ramification index $p-1$ is prime to $p$, so the local inertia action is tame and its image is the full deck group. Under the actual adic boundary-section/inertia comparison, not proved by [F3] alone, the middle-extension stalk consists of invariant local sections: it is zero for nontrivial $\chi$ and one-dimensional for trivial $\chi$. Its boundary trace is therefore zero or one, respectively. Together with the extension-field eigenvalue computation in step 2.1, these stalks satisfy the weight-zero convention of [F1]. [F1, F3, step 1.1, step 2.1, given, algebra] ∎

## Proof-chain hold

The corrected finite torsor/projector and lisse-locus Frobenius computation are local calculations. The full middle-extension boundary comparison and absolute ramification interfaces used in step3.1 remain held. Thus this example does not establish general adic boundary or weight theorems. The original positive-character projector with pullback operators instead selected the inverse character; for a cubic character over $\mathbb F_7$ this changes a nonreal value. The inverse coefficients above correct the specified sheaf while preserving the target trace $\chi(x)$.
