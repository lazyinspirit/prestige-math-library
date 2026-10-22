---
id: lem-scalar-totally-real-strip-boundary-winding-index
kind: lemma
title: "A rotating scalar strip boundary line has an explicit winding index"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-countable-choice
  - def-fredholm-operator-cokernel-and-index
  - lem-diagonal-strip-cauchy-riemann-fredholm-index
proof_strategy: direct
axiom_use: "Countable Choice only through the fixed-product strip index supplier. The given global scalar angle lift and explicit bounded gauge require no additional choice."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Ozsvath and Szabo, Holomorphic disks and topological invariants for closed three-manifolds, §3.2, printed pp.20–22"
      url: "https://arxiv.org/pdf/math/0101206"
    - title: "Lipshitz, A cylindrical reformulation of Heegaard Floer homology, §4.1, printed pp.972–974"
      url: "https://arxiv.org/pdf/math/0502404"
---

## Statement

Assume Countable Choice. Let $\vartheta:\mathbb R\to\mathbb R$ be a smooth real function constant at values $\vartheta_-$ and $\vartheta_+$ on the two ends, with $\vartheta_\pm\notin\pi\mathbb Z$. On $S=\mathbb R_s\times[0,1]_t$, let $X_\vartheta$ be the $H^1$ completion of smooth complex-valued maps compactly supported in $s$, with $u(s,0)\in\mathbb R$ and $u(s,1)\in e^{i\vartheta(s)}\mathbb R$. Let $A(s,t):\mathbb C\to\mathbb C$ be an essentially bounded measurable real linear map tending to zero uniformly in essential supremum on both ends. Then
$$\mathcal D=\partial_s+i\partial_t+A:X_\vartheta\longrightarrow L^2(S;\mathbb C)$$
is bounded Fredholm over $\mathbb R$, before taking any quotient by translation, and
$$\operatorname{ind}_{\mathbb R}\mathcal D=\left\lfloor\frac{\vartheta_-}\pi\right\rfloor-\left\lfloor\frac{\vartheta_+}\pi\right\rfloor.$$
The same index holds on the spaces weighted by $e^{\delta|s|}$ when $0\le\delta<\min_{\pm}\operatorname{dist}(\vartheta_\pm,\pi\mathbb Z)$. In particular, if the upper line is the same at both ends and $\vartheta_+-\vartheta_-=k\pi$, its fixed-end strip index is $-k$. This sign uses the orientation $ds\wedge dt$ and the operator $\partial_s+i\partial_t$: the oriented upper boundary runs from $s=+\infty$ to $s=-\infty$.

Componentwise the same result holds for finitely many given angle functions $\vartheta_j(s)$, the product upper boundary $\prod_j e^{i\vartheta_j(s)}\mathbb R$, and any bounded real linear matrix $A(s,t)$ tending to zero: the real index is the sum of their displayed floor differences. This is an explicit globally framed boundary-line result; it does not supply a global frame for a general geometric strip or identify its index with a Heegaard-domain expression.

## Statement references

[[def-countable-choice]]

[[def-fredholm-operator-cokernel-and-index]]

[[lem-diagonal-strip-cauchy-riemann-fredholm-index]]

## Facts & Assumptions

**Given:** Countable Choice, the given global real angle lift $\vartheta$, its nondegenerate constant end values, the stated completion $X_\vartheta$, and the decaying real linear zeroth-order term $A$.

[F1] For the fixed real product-line domain at angles $0<\theta_j<\pi$, a strip operator $D+B$ with real diagonal nondegenerate limits $b_{\pm,j}$ is Fredholm and has real index $\sum_j(\lfloor(\theta_j-b_{-,j})/\pi\rfloor-\lfloor(\theta_j-b_{+,j})/\pi\rfloor)$. Its weighted index is unchanged below the minimum limiting spectral gap ([[lem-diagonal-strip-cauchy-riemann-fredholm-index]]).

## Proof

1.1 **The gauge and its exact domains.** Choose the unique $\theta_0\in(0,\pi)$ representing $\vartheta_-$ modulo $\pi$ and put $a(s)=\vartheta(s)-\theta_0$, $U(s,t)=e^{ia(s)t}$. The functions $a,a'$ are bounded, with $a'$ compactly supported. Multiplication by $U$ is an invertible real linear map of smooth maps compactly supported in $s$. At $t=0$ it is the identity, and at $t=1$ it sends $e^{i\theta_0}\mathbb R$ to $e^{i\vartheta(s)}\mathbb R$. Its two derivatives are $U_s=i a'(s)tU$ and $U_t=i a(s)U$. Therefore the product rule gives a constant $C$ with $\|Uv\|_{H^1}\le C\|v\|_{H^1}$, and the same bound holds for $U^{-1}$ with possibly a different $C$. These maps extend by completion to mutually inverse bounded maps $H^1_{\theta_0}\leftrightarrow X_\vartheta$. They are also unitary on the real $L^2$ target. This proves the precise domain identification, including the variable boundary, without assuming any prior boundary-trivialization theorem. [given, construct, algebra]

2.1 **Conjugate the operator, retaining both zeroth-order terms.** For a smooth compactly supported $v$ in the fixed-line domain, direct differentiation gives $U^{-1}\mathcal D(Uv)=\partial_s v+i\partial_t v+Bv$, where $B=-a(s)+i a'(s)t+U^{-1}A(s,t)U$. The term $-a$ comes from $iU_t=-aU$, and the term $i a't$ comes from $U_s$; both signs are therefore fixed by the specified Cauchy–Riemann convention. The last term is a real linear endomorphism even if $A$ is not complex linear. It is bounded and tends uniformly to zero, because $U$ is pointwise unitary. Since $a'$ vanishes on the ends, the limits of $B$ are the real scalar constants $b_\pm=-(\vartheta_\pm-\theta_0)$. In particular $\theta_0-b_\pm=\vartheta_\pm\notin\pi\mathbb Z$. The identity extends to the completions by the bounds of step 1.1 and boundedness of each displayed first- and zeroth-order term. [step 1.1, construct, algebra]

3.1 **Index and endpoint normalization.** Apply [F1] to the operator in step 2.1. Its real index is $\lfloor(\theta_0-b_-)/\pi\rfloor-\lfloor(\theta_0-b_+)/\pi\rfloor=\lfloor\vartheta_-/\pi\rfloor-\lfloor\vartheta_+/\pi\rfloor$. The bounded source and target isomorphisms of step 1.1 identify kernels and ranges and induce an isomorphism of cokernels, so this is the index of $\mathcal D$ too. Changing the global lift by one constant integer multiple of $\pi$ adds the same integer to both floor terms and does not alter their difference. If the end lines coincide, their given lift difference is $k\pi$ and the result is exactly $-k$. This agrees with boundary orientation: for $ds\wedge dt$, the outward-normal-first convention gives tangent $+\partial_s$ on $t=0$ and $-\partial_s$ on $t=1$, so a lift increasing by $k\pi$ along increasing $s$ on the upper edge makes $-k$ turns in the unoriented-line circle along its oriented traversal. No translation direction has been removed from the operator's domain or index. [F1, step 1.1, step 2.1, algebra]

4.1 **Weights and the product version.** The gauge $U$ commutes with scalar multiplication by $w=e^{\delta|s|}$, and its bounded derivative estimates in step 1.1 apply to $w v$ as well. Thus it identifies the weighted variable-line domain and target with the weighted fixed-line spaces. The fixed-line limiting eigenvalues are $\pi n-\theta_0+b_\pm=\pi n-\vartheta_\pm$, whose minimum absolute value is exactly the distance stated in the claim. The weighted conclusion follows from [F1]. For finitely many components use $U=\operatorname{diag}(e^{i(\vartheta_j(s)-\theta_{0,j})t})$, with $\theta_{0,j}\in(0,\pi)$ the residue of $\vartheta_{j,-}$. The same differentiation gives real diagonal limits $b_{\pm,j}=-(\vartheta_{j,\pm}-\theta_{0,j})$ even when $A$ mixes the components and their conjugates. Apply the full real-linear version of [F1] and sum its floor differences. This proves every asserted framed strip formula under precisely Countable Choice; no general geometric Maslov identification is presumed. [F1, step 1.1, step 2.1, step 3.1, construct, algebra] ∎
