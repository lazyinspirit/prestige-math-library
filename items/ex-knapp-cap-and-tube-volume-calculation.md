---
id: ex-knapp-cap-and-tube-volume-calculation
kind: example
title: Knapp cap and dual tube volume calculation
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps:
- lem-spherical-cap-and-dual-slab-scales
- def-fourier-restriction-and-adjoint-extension-operators
- cor-complex-exponential-cartesian-form-modulus-and-eulers-identity
- cor-sine-and-cosine-are-one-lipschitz
- thm-linearity-of-the-lebesgue-integral-on-l-one
- lem-cap-wave-packet-has-dual-tube-concentration
- thm-knapp-necessary-condition-for-spherical-ltwo-restriction
generation:
  role: example
proof_strategy: direct
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-03"
    scope: "Cumulative whole-item verification: completed original Step5 full statement/definition and proof read plus the recorded later Step7 local mathematical corrections. Exact recovered original carrier and current post-correction carrier match recorded hashes; every substantive delta is covered by the cited correction reasoning. No independent audit of the local repairs and no new review round is claimed; supplier review is limited to interfaces used."
    delegated_by: "owner via tools/autopilot (frontier-38-owner-30)"
    evidence:
      - "research/frontier-38-owner-30-reader-6.md"
      - "research/frontier-38-owner-30-alpha-batch-6-5a.md"
      - "research/frontier-38-owner-30-step5-hash-6-post-5a.json"
      - "research/frontier-38-owner-30-step7-v2/step7-v2-initial-r1-u6.json"
    original_read_raw_sha256: "e94cf4b7d66fc74aa121bb3cd8ed3558fd9615e0f3e1e7fd777958102eeee1dc"
    repair_post_guard_sha256: "05a2b64947cd799094d4c6757b69a4112f9ab9e46d25920776717ebc27ab3b4b"
    content_sha256: "a6a0818d6b6c39d230d9ca501a65ad3e9582c23b1bed71eea23a9c082a8d64bb"
  precheck: pass
provenance:
  statement: ai-generated
  proof: ai-altered
sources:
  references:
  - title: K. Merz, Some notes on restriction theory
    url: https://www.iaa.tu-bs.de/konmerz/ss25/fr/material/NotesOnRestriction.pdf
    locator: '§3.2, printed p.8: spherical cap scales, dual tube and necessary exponent comparison; the exact constants and cap formula are computed locally.'
---

## Example

Assume Countable Choice, let $n\ge2$, and fix $0<c\le1/(100\sqrt{n-1})$. For $\delta\in(0,1]$ compute the two quantities whose comparison yields the Knapp condition: $\sigma(C_\delta)=\int_{|y|^2\le2\delta^2-\delta^4}(1-|y|^2)^{-1/2}\,dy$ satisfies $c_n\delta^{n-1}\le\sigma(C_\delta)\le C_n\delta^{n-1}$, while the dual slab $T_\delta=\{\xi:|\xi_n|\le c\delta^{-2},|\xi_j|\le c\delta^{-1}\ (j<n)\}$ has volume $(2c)^n\delta^{-(n+1)}$. Hence $\|\mathbf 1_{C_\delta}\|_{L^2(\sigma)}\asymp\delta^{(n-1)/2}$ and, by [[lem-cap-wave-packet-has-dual-tube-concentration]], $\|\widehat{\mathbf 1_{C_\delta}d\sigma}\|_q\gtrsim\delta^{n-1-(n+1)/q}$ for every $1\le q\le\infty$; comparing the two powers as $\delta\downarrow0$ gives the necessary condition of [[thm-knapp-necessary-condition-for-spherical-ltwo-restriction]].

## Verification

**Given:** Countable Choice, $n\ge2$, $\delta\in(0,1]$, the cap $C_\delta=\{\omega\in S^{n-1}:1-\omega\cdot e_n\le\delta^2\}$, the slab $T_\delta$ with $0<c\le1/(100\sqrt{n-1})$, and the extension $E$ of the spherical measure.

[F1] Cap and slab scales: in the graph chart $\omega=(y,\sqrt{1-|y|^2})$ the cap is $\{|y|^2\le2\delta^2-\delta^4\}$, its measure satisfies $c_n\delta^{n-1}\le\sigma(C_\delta)\le C_n\delta^{n-1}$, and $\lambda_n(T_\delta)=(2c)^n\delta^{-(n+1)}$. ([[lem-spherical-cap-and-dual-slab-scales]])

[F2] The extension is $Eg(x)=\int e^{2\pi ix\cdot\omega}g(\omega)\,d\sigma(\omega)$. Componentwise integration commutes with real parts, $\operatorname{Re}e^{i\theta}=\cos\theta$, and $\cos\theta\ge1-|\theta|$ by the one-Lipschitz bound and $\cos0=1$. ([[def-fourier-restriction-and-adjoint-extension-operators]], [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]], [[cor-sine-and-cosine-are-one-lipschitz]], [[thm-linearity-of-the-lebesgue-integral-on-l-one]])

[F3] The comparison with the necessary condition: the extension estimate $E:L^2(S^{n-1})\to L^q$ holds only for $q\ge2(n+1)/(n-1)$, the threshold forced by the cap family as $\delta\downarrow0$. ([[thm-knapp-necessary-condition-for-spherical-ltwo-restriction]])

1.1 The cap integral. With the equator omitted at $\delta=1$ as justified in [F1], the cap condition $1-\omega\cdot e_n\le\delta^2$ is equivalent to $\sqrt{1-|y|^2}\ge1-\delta^2$, that is $|y|^2\le2\delta^2-\delta^4$, and the chart density is $(1-|y|^2)^{-1/2}$; hence $\sigma(C_\delta)=\int_{|y|^2\le2\delta^2-\delta^4}(1-|y|^2)^{-1/2}\,dy$, and by [F1] this is bounded between $c_n\delta^{n-1}$ and $C_n\delta^{n-1}$. [F1]

1.2 The slab volume. The slab is the box $[-c\delta^{-1},c\delta^{-1}]^{n-1}\times[-c\delta^{-2},c\delta^{-2}]$, a product of $n-1$ intervals of length $2c\delta^{-1}$ and one of length $2c\delta^{-2}$; its volume is their product $\lambda_n(T_\delta)=(2c)^{n-1}\delta^{-(n-1)}\cdot2c\delta^{-2}=(2c)^n\delta^{-(n+1)}$. [F1, algebra]

1.3 The explicit box concentration. For $x\in T_\delta$, $|x'|\le\sqrt{n-1}c\delta^{-1}\le\delta^{-1}/100$, while on the cap $|\omega'|\le\sqrt2\delta$ and $|\omega_n-1|\le\delta^2$. Hence $|x\cdot(\omega-e_n)|\le(\sqrt2+1)/100$, since $|x_n|\le c\delta^{-2}\le\delta^{-2}/100$. In particular $|2\pi x\cdot(\omega-e_n)|<1/2$. By [F2], $\operatorname{Re}e^{2\pi ix\cdot(\omega-e_n)}\ge1/2$. Integrating and removing the unit-modulus factor $e^{2\pi ix_n}$ gives $|E\mathbf1_{C_\delta}(x)|\ge\operatorname{Re}(e^{-2\pi ix_n}E\mathbf1_{C_\delta}(x))\ge\sigma(C_\delta)/2$. This proves the required bound for every allowed $c$, independently of the unspecified constant in the concentration lemma. [F1, F2, given, algebra]

2.1 The cap norm. By [F1], $\|\mathbf 1_{C_\delta}\|_{L^2(\sigma)}=\sigma(C_\delta)^{1/2}$ satisfies $c_n^{1/2}\delta^{(n-1)/2}\le\|\mathbf 1_{C_\delta}\|_2\le C_n^{1/2}\delta^{(n-1)/2}$, so the two quantities $\|\mathbf 1_{C_\delta}\|_2$ and $\delta^{(n-1)/2}$ are comparable with constants depending only on $n$. [F1, step 1.1]

2.2 The extension lower bound. By step 1.3 the extension of the cap data satisfies $|E\mathbf 1_{C_\delta}(x)|\ge\tfrac12\sigma(C_\delta)$ for every $x\in T_\delta$, so for $1\le q<\infty$ $$\Bigl\|\widehat{\mathbf 1_{C_\delta}d\sigma}\Bigr\|_q=\|E\mathbf 1_{C_\delta}\|_q\ge\tfrac12\sigma(C_\delta)\lambda_n(T_\delta)^{1/q}\ge\tfrac12c_n(2c)^{n/q}\delta^{n-1-(n+1)/q},$$ and for $q=\infty$ the same lower bound reads $\ge\tfrac12c_n\delta^{n-1}$, which is the limiting value of the displayed exponent. [F1, step 1.2, step 1.3, algebra]

3.1 The power comparison. Comparing the two powers of steps 2.1 and 2.2, the extension estimate with a constant uniform in $\delta$ requires $\delta^{(n-1)-(n+1)/q}\lesssim\delta^{(n-1)/2}$ as $\delta\downarrow0$, that is $(n-1)/2\le n-1-(n+1)/q$, or equivalently $q\ge2(n+1)/(n-1)$; this is exactly the necessary condition of [F3] and the conclusion of the Knapp example. [F3, step 2.1, step 2.2, algebra] ∎
