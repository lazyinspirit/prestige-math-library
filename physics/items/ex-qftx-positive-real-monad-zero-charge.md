---
id: ex-qftx-positive-real-monad-zero-charge
kind: example
title: Zero-charge positive real monad
status: draft
origin: pipeline
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
page: qftx-positive-real-linear-monad-normal-forms-examples
dependency_level: 8
deps:
  - thm-qftx-positive-real-adhm-monad-normal-form
  - def-qftx-adhm-linear-data-stability-and-regularity
  - lem-qftx-positive-real-monad-charge-normalization
dependency_roles:
  thm-qftx-positive-real-adhm-monad-normal-form: mathematical-premise
  def-qftx-adhm-linear-data-stability-and-regularity: mathematical-premise
  lem-qftx-positive-real-monad-charge-normalization: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Simon K. Donaldson, The ADHM construction of Yang–Mills instantons"
      url: https://arxiv.org/pdf/2205.08639
      locator: "Sections 3–4 and 6, printed pp. 4–6 and 10–11: framed linear monads and the charge interface; the zero-dimensional case is computed here."
verification:
  precheck: pending
---

## Example

Let $N\ge2$, $k=0$, $V=\mathbb C^0$, and let $W=\mathbb C^N$ with its standard
Hermitian form and fixed unitary framing. The unique maps
$B_1,B_2\in\operatorname{End}(V)$, $I:W\to V$, and $J:V\to W$ are zero.
Their ADHM moments vanish, the stability and costability conditions are
vacuous, and the raw monad is
$$0\longrightarrow W\otimes\mathcal O \longrightarrow 0.$$
Its middle cohomology is the framed trivial bundle $W\otimes\mathcal O$,
positive on every real-line section space. The normalized gauge group
$U(0)$ has one element, so no gauge or normal-form parameters remain. Its
algebraic and topological second Chern classes vanish and its Euler
characteristic is $N$.

## Example references

[[thm-qftx-positive-real-adhm-monad-normal-form]]

[[def-qftx-adhm-linear-data-stability-and-regularity]]

[[lem-qftx-positive-real-monad-charge-normalization]]

[Donaldson, Sections 3–4 and 6](https://arxiv.org/pdf/2205.08639)

## Facts & Assumptions

**Given:** $V=0$, $W=\mathbb C^N$ with $N\ge2$, and its prescribed unitary
framing.

[F1] On the zero vector space there is exactly one endomorphism and exactly
one map to or from it; stability and costability hold vacuously and
$U(0)$ is the trivial group.
[[def-qftx-adhm-linear-data-stability-and-regularity]]

[F2] The finite monad resolution has algebraic
$\operatorname{ch}(F)=N-kH_{\rm alg}^2$, topological
$c_2^{\rm top}(F)=kH_{\rm top}^2$, and $\chi(F)=N-2k$. The charge supplier
defines the twistor projection by
$\pi([v])=\operatorname{span}_{\mathbb C}(v,\jmath v)$, with fibers the real
incidence lines, and proves $\pi^*u=H_{\rm top}^2$ in the positive orientation;
its conclusion $c_2(E)=ku$ is conditional on the topological pullback
$F\cong\pi^*E$.
[[lem-qftx-positive-real-monad-charge-normalization]]

## Proof

**Given:** The zero-dimensional ADHM data and the standard Hermitian space
$W$.

1.1 Every map into or out of $V=0$ is the unique zero map. Thus both moments
are zero. Every word vector $B_{i_1}\cdots B_{i_m}I(w)$ is zero,
including the $m=0$ vectors $I(w)$ for $w\in W$, so their span is $0=V$.
No nonzero invariant subspace exists; hence stability and costability hold. Since $U(0)$ has one
element, the data have no gauge parameters.
[given, F1, algebra]

2.1 Substituting $V=0$ into the monad leaves
$0\to W\otimes\mathcal O\to0$. Its middle cohomology is canonically
$W\otimes\mathcal O$, and the identity on $W$ is the unitary framing at
infinity. The standard form on $W$ induces the same positive form on every
real-line section space. There are no end maps or hidden Euler summands.
[given, step 1.1, algebra]

3.1 Setting $k=0$ in [F2] gives
$\operatorname{ch}(F)=N$, $c_2(F)=0$, and $\chi(F)=N$. Directly,
$F=W\otimes\mathcal O$ has these same classes; if it is written as
$\pi^*E$, naturality gives $c_2(E)=0$ under the charge lemma's stated
pullback condition. Thus the example has zero charge and retains all $N$
framing directions.
[F2, step 2.1, algebra] ∎
