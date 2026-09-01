---
id: ex-quotient-by-the-kernel-is-isometric-to-the-range-with-the-induced-quotient-norm
kind: example
title: "The quotient by the kernel is isometric to the range with its induced quotient norm"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-bounded-linear-operator, def-kernel-and-image-of-a-linear-map,
       def-quotient-seminorm, thm-linear-kernel-image-and-injectivity,
       thm-quotient-vector-space-universal-property]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Theo Buhler and Dietmar A. Salamon, Functional Analysis"
      url: "https://www.scribd.com/document/978968885/Functional-Analysis-1st-Edition-Theo-Bhler-Dietmar-A-Salamon"
    - title: "Gerald Teschl, Topics in Real and Functional Analysis"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
pipeline_run: frontier-28
---

## Example

Let $T:X\to Y$ be a bounded linear operator between normed spaces, and write
$M:=\ker T$. The factor map

$$\overline T:X/M\to \operatorname{im}T,\qquad \overline T(x+M):=Tx,$$

is a linear isomorphism. If $\operatorname{im}T$ is equipped with the induced
quotient norm

$$\|Tx\|_{\mathrm{quot}}:=\|x+M\|_{X/M},$$

then $\overline T$ is an isometry.

## Facts & Assumptions

**Given:** A bounded linear operator $T:X\to Y$ and its kernel $M:=\ker T$.

[L1] A bounded linear operator is in particular linear ([[def-bounded-linear-operator]]).

[L2] The kernel and image are the sets $\ker T=\{x:Tx=0\}$ and $\operatorname{im}T=\{Tx:x\in X\}$ ([[def-kernel-and-image-of-a-linear-map]]).

[L3] The kernel is a linear subspace, and a linear map is injective exactly when its kernel is trivial ([[thm-linear-kernel-image-and-injectivity]]).

[L4] The quotient seminorm is the infimum over representatives ([[def-quotient-seminorm]]).

[L5] A linear map that vanishes on a subspace factors uniquely through the algebraic quotient ([[thm-quotient-vector-space-universal-property]]).

## Verification

**Proof technique:** direct.

1.1 Since $T$ is linear by [L1], the set $M=\ker T$ is a linear subspace by [L3], and certainly $M \subseteq \ker T$. Therefore [L5] gives a unique linear map $\overline T:X/M\to Y$ with $\overline T(x+M)=Tx$. Its range is exactly $\operatorname{im}T$, so we may read it as a map into $\operatorname{im}T$. [L1, L2, L3, L5]

2.1 If $\overline T(x+M)=0$, then $Tx=0$, so $x \in \ker T=M$ by [L2]. Hence $x+M=M$, the zero coset. Therefore $\overline T$ is injective by [L3]. [step 1.1, L2, L3]

2.2 If $Tx=Ty$, then $x-y \in \ker T=M$ by [L2], so $x+M=y+M$. Thus the formula $\|Tx\|_{\mathrm{quot}}:=\|x+M\|_{X/M}$ is well defined on $\operatorname{im}T$, using the quotient seminorm of [L4]. By construction, $\|\overline T(x+M)\|_{\mathrm{quot}}=\|x+M\|_{X/M}$ for every coset, so $\overline T$ is an isometry onto $\operatorname{im}T$. [step 1.1, L2, L4]

3.1 Steps 1.1, 2.1, and 2.2 show that $X/\ker T$ is linearly isomorphic to the range of $T$, and isometric once the range is given the induced quotient norm. [step 1.1, step 2.1, step 2.2] ∎
