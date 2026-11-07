---
id: ex-artin-schreier-trace-function
kind: example
title: "An Additive Character as an Artin–Schreier Trace Function"
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
      locator: "Dec3,2014 draft Section2.4, printed pp13-15; Artin-Schreier character construction"
    - title: "Fouvry–Kowalski–Michel, *Trace Functions over Finite Fields and Their Applications*, §2.4"
      url: "https://people.math.ethz.ch/~kowalski/trace-functions-pisa.pdf"
      locator: "Section3.1, printed p8; character trace sheaves"
verification:
  precheck: pending
---

## Example

Let $p$ be prime, let $\ell\ne p$, fix an embedding $\iota:\overline{\mathbb Q}_\ell\hookrightarrow\mathbb C$, choose a nontrivial additive character $\psi:\mathbb F_p\to\mathbb C^\times$, and choose $a\in\mathbb F_p^\times$. The Artin–Schreier cover $\pi:Y\to\mathbb A^1_{\mathbb F_p}$ given by $z^p-z=ax$ is finite étale with deck group $\mathbb F_p$ acting by $z\mapsto z+c$. Write $\psi_\ell(c)=\iota^{-1}(\psi(c))$, and let $T_c$ act on functions on a fiber by pullback under $z\mapsto z+c$. The image of the idempotent $e_\psi=p^{-1}\sum_{c\in\mathbb F_p}\psi_\ell(c)^{-1}T_c$ in $\pi_*\overline{\mathbb Q}_\ell$ is a rank-one lisse sheaf; its middle extension to $\mathbb P^1$ has trace function $x\mapsto\psi(ax)$ on $\mathbb F_p$.

## Example references

[[def-weight-zero-trace-function|Weight-zero trace function]]

[[def-lisse-l-adic-sheaf-on-a-scheme|Lisse l-adic sheaf]]

[[def-l-adic-middle-extension-sheaf-over-finite-field|ℓ-adic middle-extension sheaf]]

[[def-standard-etale-algebra|Standard étale algebra]]

[Fouvry–Kowalski–Michel, *Trace Functions over Finite Fields and Applications*, §3.1](https://people.math.ethz.ch/~kowalski/elements.pdf)

## Facts & Assumptions

**Given:** The primes $p$ and $\ell\ne p$, the embedding $\iota$, the nontrivial additive character $\psi$, and $a\in\mathbb F_p^\times$.

[F1] [[def-weight-zero-trace-function]]: the trace function at $x$ is the trace of geometric Frobenius on the stalk; geometric Frobenius is inverse arithmetic Frobenius.

[F2] [[def-standard-etale-algebra]]: a monic polynomial quotient whose formal derivative is a unit is a standard étale algebra, hence defines an étale morphism.

[F3] [[def-l-adic-middle-extension-sheaf-over-finite-field]]: for a finite-rank lisse $\overline{\mathbb Q}_\ell$-sheaf $\mathcal L$ on $U$, its ordinary middle-extension sheaf on $X$ is $\mathcal M=j_*\mathcal L$.

[F4] [[lem-deligne-finite-torsor-character-line-construction]] constructs the compatible integral character line and its rational projector for a specified finite torsor.

## Verification

1.1 The coordinate algebra is free of rank $p$ on $1,z,\ldots,z^{p-1}$, and the monic polynomial $z^p-z-ax$ has derivative $-1$, a unit. Thus [F2] makes the cover finite étale of degree $p$. Translations by $c\in\mathbb F_p$ act freely and transitively on each geometric fiber. For the displayed idempotent, the coefficient of $T_u$ in $e_\psi^2$ is $p^{-2}\sum_c\psi_\ell(c)^{-1}\psi_\ell(u-c)^{-1}=p^{-1}\psi_\ell(u)^{-1}$, so $e_\psi^2=e_\psi$; reindexing gives $T_d e_\psi=\psi_\ell(d)e_\psi$. On a torsor fiber the image consists of functions $f(z+d)=\psi_\ell(d)f(z)$ and is one-dimensional. Apply [F4] with character $\psi_\ell^{-1}$ to obtain its compatible integral lattice and rank-one rational lisse sheaf. [F2, F4, given, algebra]

2.1 For any $m\ge1$ and $x\in\mathbb F_{p^m}$, arithmetic Frobenius to the $m$th power sends $z$ to $z^{p^m}=z+\operatorname{Tr}_{\mathbb F_{p^m}/\mathbb F_p}(ax)$. On functions, $(\sigma f)(z)=f(\sigma^{-1}z)$; geometric Frobenius therefore acts by pullback under the arithmetic translation, namely $T_{\operatorname{Tr}(ax)}$, and its $\overline{\mathbb Q}_\ell$-eigenvalue on the idempotent line is $\psi_\ell(\operatorname{Tr}(ax))$. After applying $\iota$ this is $\psi(\operatorname{Tr}(ax))$. At $m=1$ this is $\psi(ax)$, proving the trace formula; for every $m$ it is a root of unity. [F1, step 1.1, algebra]

3.1 The preceding extension-field calculation shows weight zero at every closed point in $\mathbb A^1$. At infinity the equation has a pole of order $1$: if $z^p-z=ax$ had a solution in the geometric local field, a negative valuation $v(z)$ would give $v(z^p-z)=pv(z)$, which cannot equal $v(ax)=-1$. The local Artin–Schreier extension has Galois group $\mathbb F_p$; since $p$ is prime, the absence of a local root makes its inertia image the full group. Thus the nontrivial character is nontrivial on inertia. Under the actual adic boundary-section/inertia comparison, not proved by [F3] alone, its invariant boundary stalk is zero. The middle-extension boundary trace is therefore zero, so the sheaf satisfies the weight-zero convention of [F1]. [F1, F3, step 1.1, given, algebra] ∎

## Proof-chain hold

The finite torsor and corrected projector/Frobenius calculation preserve the positive trace $\psi(ax)$. The full adic boundary-section/inertia comparison in step3.1 remains held. With the original positive projector coefficients and pullback convention, the line instead has trace $\psi(-ax)$; at $p=3$ and $a=x=1$ this differs from $\psi(ax)$. No general boundary or weight theorem is adopted.
