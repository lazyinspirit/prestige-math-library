---
id: ex-qftmath-timeordered-jump
kind: example
title: Timeordered derivative jump gives iδ Green source
status: draft
origin: pipeline
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 6
deps:
  - lem-qft-free-time-ordered-kernel
dependency_roles:
  lem-qft-free-time-ordered-kernel: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: David Tong, Quantum Field Theory, author-hosted complete lecture notes, Chapter 2, §2.7.1
      url: https://www.damtp.cam.ac.uk/user/tong/qft/qfthtml/S2.html
      locator: Complete HTML Chapter 2, time-ordered two-point function and Klein–Gordon Green function, equations 2.168–2.174.
    - title: Mark Srednicki, Quantum Field Theory, author-hosted 2006 prepublication book draft, §8
      url: https://www.physics.ucsb.edu/~mark/ms-qft-DRAFT.pdf
      locator: Complete 616-page draft, §8, equations 8.11–8.15, with the source's separate prefactor-i convention.
verification:
  precheck: pass
---

## Example

Let $\mu\ge0$, $\omega_\mu(\mathbf k)=\sqrt{|\mathbf k|^2+\mu^2}$, and for a fixed $\mathbf k$ with $\omega_\mu(\mathbf k)>0$ set
$$g_{\omega_\mu}(t)=\frac{e^{-i\omega_\mu(\mathbf k)|t|}}{2\omega_\mu(\mathbf k)}.$$
This is the time-mode factor of the tempered scalar carrier in [[lem-qft-free-time-ordered-kernel]]. Its first derivative has jump $-i$ at $t=0$, giving the Green source $i\delta_0$ after applying the $(-,+,+,+)$ Klein–Gordon operator and Fourier-inverting the spatial momentum.

## Facts & Assumptions

**Given:** $\mu\ge0$, a fixed momentum with $\omega_\mu(\mathbf k)>0$, and the QFT-MF04 tempered kernel with its $(-,+,+,+)$ convention and no extra prefactor $i$.

[F1] The carrier is defined by the partial spatial Fourier factor $e^{-i\omega_\mu(\mathbf k)|t|}/(2\omega_\mu(\mathbf k))$ and satisfies $(\Box-\mu^2)H_\mu=i\delta_0$. [[lem-qft-free-time-ordered-kernel]]

## Verification

1.1 On $t>0$, $g_\omega(t)=e^{-i\omega t}/(2\omega)$ and $g_\omega'(t)=-\tfrac i2e^{-i\omega t}$, so $g_\omega'(0+)=-i/2$. On $t<0$, $g_\omega(t)=e^{i\omega t}/(2\omega)$ and $g_\omega'(t)=+\tfrac i2e^{i\omega t}$, so $g_\omega'(0-)=+i/2$. The function is continuous at $0$, and the derivative jump is $g_\omega'(0+)-g_\omega'(0-)=-i$. [given, F1, algebra]

2.1 For a compactly supported smooth test $\eta$, integrate by parts twice on each half-line. The boundary terms from $g_\omega(0+)=g_\omega(0-)$ cancel, while the derivative boundary term contributes $-i\eta(0)$; away from $0$ the ordinary equation $g_\omega''=-\omega^2g_\omega$ holds. Hence $g_\omega''+\omega^2g_\omega=-i\delta_0$ distributionally. [given, step 1.1, algebra]

3.1 In the fixed convention, $\Box-\mu^2$ acts on the spatial Fourier mode by $-(\partial_t^2+\omega_\mu(\mathbf k)^2)$. Applying it to 2.1 gives $+i\delta_0(t)$ for every $\mathbf k\ne0$ when $\mu=0$, and for every $\mathbf k$ when $\mu>0$. The omitted massless apex has measure zero and the shell density is locally integrable there; spatial Fourier inversion therefore gives $i\delta_0(t,\mathbf x)$, exactly as in [F1]. [F1, step 2.1, algebra] ∎
