---
id: ex-contractible-bimodule-complex-induces-zero-functor
kind: example
title: A contractible two-term bimodule complex induces the zero tensor functor
status: draft
origin: pipeline
pipeline_run: frontier-36-complete
deps:
  - def-bounded-complex-of-graded-bimodules-and-signed-tensor-totalization
  - def-projective-module
  - lem-bimodule-tensor-totalization-respects-differentials-and-homotopies
  - prop-homotopy-equivalent-bimodule-complexes-induce-isomorphic-tensor-functors
  - thm-a-bounded-projective-bimodule-complex-defines-a-derived-tensor-functor
  - thm-finite-graded-projectives-are-summands-of-finite-graded-free-modules
justified_by: []
landmark: false
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Mikhail Khovanov and Paul Seidel, Quivers, Floer Cohomology, and Braid Group Actions, §2c"
      url: "https://arxiv.org/pdf/math/0006056"
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: example
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
---

## Statement

Let $A$ be a graded algebra. Define the bounded complex of graded
$A$-bimodules $F$ by
$$
F^{-1}=A,\qquad F^0=A,\qquad d_F^{-1}=\operatorname{id}_A,
$$
with $F^p=0$ in every other degree. Then $F$ is contractible as a complex of
$A$-bimodules, and $F\otimes_A-$ is naturally isomorphic to the zero functor
on $K^b(\operatorname{proj}^{gr} A)$ and on $D^b(A\text{-}\mathrm{Mod})$,
including the corresponding bounded derived category of graded modules.

## Facts & Assumptions

**Given:** The regular graded $A$-bimodule and its identity map. The categories
and derived functors use the standing conventions of
[[def-bounded-complex-of-graded-bimodules-and-signed-tensor-totalization]]
and
[[thm-a-bounded-projective-bimodule-complex-defines-a-derived-tensor-functor]].

[L1] For $f\in F^p$ and $x\in X^q$, the total differential is
$D(f\otimes x)=d_F(f)\otimes x+(-1)^p f\otimes d_X(x)$
([[def-bounded-complex-of-graded-bimodules-and-signed-tensor-totalization]]).

[L2] A first-variable bimodule homotopy $k$ transfers to
$K(f\otimes x)=k(f)\otimes x$, with no second-variable sign
([[lem-bimodule-tensor-totalization-respects-differentials-and-homotopies]]).

[L3] A graded module is finite graded projective if and only if it is a
degree-zero direct summand of a finite direct sum of shifts of the regular
graded module
([[thm-finite-graded-projectives-are-summands-of-finite-graded-free-modules]]).

[L4] Projective modules have the lifting property against surjections
([[def-projective-module]]).

[L5] If each term of a bounded bimodule complex is finite graded projective on
the left and projective as an underlying right module, signed tensoring gives
a functor on the bounded projective homotopy category
([[thm-a-bounded-projective-bimodule-complex-defines-a-derived-tensor-functor]]).

[L6] Under those projectivity hypotheses, tensoring preserves quasi-isomorphisms
of bounded ordinary and graded inputs and descends to the corresponding
bounded derived categories
([[thm-a-bounded-projective-bimodule-complex-defines-a-derived-tensor-functor]]).

[L7] The descended functors are the derived tensor functors computed by the
ordinary signed totalization
([[thm-a-bounded-projective-bimodule-complex-defines-a-derived-tensor-functor]]).

[L8] The homotopy-equivalence proposition requires each term of both complexes
to be finite graded projective on the left and projective as an underlying
right module
([[prop-homotopy-equivalent-bimodule-complexes-induce-isomorphic-tensor-functors]]).

[L9] A supplied bimodule homotopy equivalence between complexes satisfying
those conditions induces mutually inverse natural isomorphisms of their tensor
functors on the bounded projective homotopy category and on ordinary and
graded bounded derived categories
([[prop-homotopy-equivalent-bimodule-complexes-induce-isomorphic-tensor-functors]]).

## Proof

**Proof technique:** give the bimodule contraction, calculate the lifted
contraction on each total degree, and apply the homotopy-invariance result to
the zero bimodule complex.

1.1 The only nonzero differential of $F$ is the degree-zero bimodule map $d_F^{-1}=\operatorname{id}_A$; every composite of two consecutive differentials is zero because the next differential is zero, so $F$ is a bounded complex supported at the endpoints $-1$ and $0$. [given, algebra]

1.2 Define $k^0:F^0\to F^{-1}$ to be $\operatorname{id}_A$ and all other components to be zero; then $k^0d_F^{-1}=\operatorname{id}$ in degree $-1$ and $d_F^{-1}k^0=\operatorname{id}$ in degree $0$, hence $d_Fk+kd_F=\operatorname{id}_F$, with every component internal-degree preserving and bimodule-linear. [given, algebra]

1.3 For any bounded graded left $A$-complex $X$, the signed totalization has $T^n=(A\otimes_A X^{n+1})\oplus(A\otimes_A X^n)$; on elementary tensors $(a\otimes x,b\otimes y)$, with $x\in X^{n+1}$ and $y\in X^n$, its differential is $D^n(a\otimes x,b\otimes y)=(-a\otimes d_Xx,\ a\otimes x+b\otimes d_Xy)$, where the first sign is $(-1)^{-1}$ and the second-factor signs are $(-1)^{-1}$ and $(-1)^0$ on the two rows, and the formula extends additively to each balanced total term. [L1, algebra]

1.4 Each nonzero term $A=A\{0\}$ is a degree-zero direct summand of itself and hence finite graded projective on the left by [L3]; as a right module it is projective because, viewed as a left $A^{op}$-module, any fixed surjection $q:E\twoheadrightarrow M$ and right-linear $f:A\to M$ admit $e$ with $q(e)=f(1)$, and $\widetilde f(a)=ea$ is a right-linear lift by [L4], while zero terms are projective on both sides. Thus $F$ and the zero complex satisfy [L5] and [L8]. [L3, L4, L5, L8, algebra]

2.1 By [L2], $H^n(a\otimes x,b\otimes y)=(b\otimes y,0)$; then $D^{n-1}H^n(a\otimes x,b\otimes y)=(-b\otimes d_Xy,b\otimes y)$ and $H^{n+1}D^n(a\otimes x,b\otimes y)=(a\otimes x+b\otimes d_Xy,0)$, whose sum is $(a\otimes x,b\otimes y)$ because the mixed terms cancel, also in characteristic two. Thus $dH+Hd=\operatorname{id}_T$. [L1, L2, step 1.3, algebra]

2.2 Let $0$ be the zero bimodule complex and take the zero maps $u:F\to0$, $v:0\to F$, the homotopy $-k$ for $vu-\operatorname{id}_F=-\operatorname{id}_F$, and the zero homotopy for $uv-\operatorname{id}_0=0$; [L9] gives natural isomorphisms of their tensor functors on the bounded projective homotopy category and on ordinary and graded bounded derived categories, while [L6] and [L7] identify the latter with derived tensor and $0\otimes_A-$ is zero. [L6, L7, L9, step 1.2, step 1.4]

3.1 For every chain map $g:X\to Y$, both composites in the naturality square for $H$ send $(a\otimes x,b\otimes y)$ to $(b\otimes g(y),0)$, so the contraction is natural on bounded complexes. [step 2.1, algebra]

4.1 If $X$ is zero or has empty support, all terms and homotopy maps are zero; if $X$ is concentrated in one degree the same formula applies with missing rows zero; if $d_X=0$ the differential terms vanish but step 2.1 still gives $dH+Hd=\operatorname{id}$. If $X$ is supported in $[c,d]$, step 1.3 gives $T$ support $[c-1,d]$, and all terms and maps outside those bounded endpoints are zero. The contraction is explicit, and the projectivity argument in step 1.4 uses only one preimage for one fixed lifting square, so no Axiom of Choice is used; the example states no iff claim. [step 1.3, step 2.1, step 1.4, algebra] $\square$
