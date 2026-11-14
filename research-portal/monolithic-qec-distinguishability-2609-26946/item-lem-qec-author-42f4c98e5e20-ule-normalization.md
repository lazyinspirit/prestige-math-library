---
title: ULE kernel adjoint symmetry and rate identities
status: draft
research_item: lem-qec-author-42f4c98e5e20-ule-normalization
dependency_level: 1
---

## Prerequisites

- [def-qec-prereq-stationary-spectrum-kernel-contract](item-def-qec-prereq-stationary-spectrum-kernel-contract)
- [math:def-integrable-real-and-complex-functions-and-their-integrals](https://alphabetamath.cc/item/def-integrable-real-and-complex-functions-and-their-integrals)
- [math:prop-closure-properties-of-measurable-functions-used-by-the-integral](https://alphabetamath.cc/item/prop-closure-properties-of-measurable-functions-used-by-the-integral)
- [math:def-complex-lp-and-euclidean-test-function-conventions](https://alphabetamath.cc/item/def-complex-lp-and-euclidean-test-function-conventions)


## Statement

Use the spectral density $J$ and kernel $g$ of [def-qec-prereq-stationary-spectrum-kernel-contract](item-def-qec-prereq-stationary-spectrum-kernel-contract). Put $h(\omega)=g(\omega)$ and $h(t)=g(t)$. Then $h(\omega)=\sqrt{J(\omega)/(2\pi)}$ and $h(t)=\int h(\omega)e^{-i\omega t}\,d\omega$. Write $G=\int\|h(t)\|_{2,1}dt$ and $H=\int |t|\|h(t)\|_{2,1}dt$. For $\gamma>0$, set $\Gamma=4\gamma G^2$ and $\tau=H/G$. These quantities are finite, $G>0$, and $\Gamma\tau=4\gamma GH$. Also $h(-t)=h(t)^\dagger$.

## Facts & Assumptions

[F1] The kernel contract defines $g(\omega)^2=J(\omega)/(2\pi)$, entrywise integrals and the mixed norm, and imposes finite zeroth and first time moments. Each $g(\omega)$ is Hermitian, and each frequency entry is integrable. [def-qec-prereq-stationary-spectrum-kernel-contract](item-def-qec-prereq-stationary-spectrum-kernel-contract)

[F2] For a real integrable function $v$, the integral is $\int v=\int v^+-\int v^-$, with both terms finite. For a complex integrable function $f=u+iv$, the integral is $\int f=\int u+i\int v$. [math:def-integrable-real-and-complex-functions-and-their-integrals](https://alphabetamath.cc/item/def-integrable-real-and-complex-functions-and-their-integrals)

[F3] Real scalar multiples of measurable real-valued functions are measurable. [math:prop-closure-properties-of-measurable-functions-used-by-the-integral](https://alphabetamath.cc/item/prop-closure-properties-of-measurable-functions-used-by-the-integral)

[F4] A finite-valued complex function $f=u+iv$ on a measure space is measurable exactly when its real and imaginary parts $u,v$ are measurable. For such functions, integrability of $|f|$ is equivalent to integrability of both components. [math:def-complex-lp-and-euclidean-test-function-conventions](https://alphabetamath.cc/item/def-complex-lp-and-euclidean-test-function-conventions)

## Proof

**Given:** The kernel contract and $\gamma>0$. **Goal:** Establish the kernel and moment identities.

1.1 The positive square root and Fourier integral defining $h=g$ are those supplied by the kernel contract. Its hypotheses give $G>0$ and finite $G,H$. Thus $\tau=H/G$ and $\Gamma=4\gamma G^2$ are well-defined and finite; direct cancellation gives $\Gamma\tau=4\gamma GH$. [F1]

1.2 Let $f=u+iv$ be any complex integrable scalar function. By [F4], its real and imaginary parts $u,v$ are measurable and integrable. The function $-v$ is measurable by [F3], and $(-v)^+=v^-$ and $(-v)^-=v^+$. Thus the real-integral definition gives $\int(-v)=\int v^- -\int v^+=-\int v$. Applying the complex measurability criterion in [F4] to $u$ and $-v$ shows that $\overline f=u-iv$ is measurable. It has the same modulus as $f$, so it is integrable. The complex-integral definition now gives $\int\overline f=\int u+i\int(-v)=\int u-i\int v=\overline{\int f}$. This proves the conjugation rule from the integral definitions and the declared measurability criterion. [F2, F3, F4, algebra]

2.1 Fix real $t$ and indices $a,b$. The scalar Fourier integrand $f(\omega)=h_{ba}(\omega)e^{-i\omega t}$ is integrable: its modulus is $|h_{ba}(\omega)|$, which is integrable by [F1]. Here $A^\dagger$ means the conjugate transpose, so $(A^\dagger)_{ab}=\overline{A_{ba}}$. Apply step 1.2 to this integrand. Since $h(\omega)$ is Hermitian, $\overline{h_{ba}(\omega)}=h_{ab}(\omega)$, and hence $(h(t)^\dagger)_{ab}=\overline{\int h_{ba}(\omega)e^{-i\omega t}\,d\omega}=\int h_{ab}(\omega)e^{i\omega t}\,d\omega=h_{ab}(-t)$. This holds for every entry, proving $h(-t)=h(t)^\dagger$; the rate identities were proved in step 1.1. [F1, step 1.2, step 1.1] ∎
