---
id: lem-ip-stable-extension-of-the-eit-inverse-map
kind: lemma
title: Stable extension of the EIT inverse map
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 10
deps:
  - def-axiom-of-choice
  - def-countable-choice
  - lem-ip-ntd-smoothing-and-hilbert-schmidt-kernel-bound
  - def-ip-mean-zero-ntd-and-smoothed-kernel-observation
  - thm-ip-calderon-logarithmic-l2-stability
  - thm-ip-hilbert-map-extension-with-concave-modulus
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Maarten V. de Hoop, Nikola B. Kovachki, Matti Lassas and Nicholas H. Nelsen, Extension and neural operator approximation of the electrical impedance tomography inverse map"
      url: "https://arxiv.org/pdf/2511.20361"
      locator: "Propositions 3.8 and 3.9, exact-data inverse map and stable Hilbert extension, printed pp. 16–18."
---

## Statement

Assume the Axiom of Choice and Countable Choice, and let $X_d(R)$, $\kappa_\gamma$ and the concave modulus $\omega_\star$ be as in the mean-zero NTD observation and Hilbert extension statements. The exact-data inverse map
$$\Psi^\star:\{\kappa_\gamma:\gamma\in X_d(R)\}\to L^2(\Omega),\qquad \Psi^\star(\kappa_\gamma)=\gamma,$$
is well-defined and satisfies
$$\|\Psi^\star(\kappa_\gamma)-\Psi^\star(\kappa_{\gamma_0})\|_{L^2(\Omega)}\le\omega_\star(\|\kappa_\gamma-\kappa_{\gamma_0}\|_{L^2(\partial\Omega\times\partial\Omega)}).$$
Consequently the Hilbert-valued extension from the preceding theorem agrees with $\Psi^\star$ on the exact kernel image and retains this stability bound on the whole kernel Hilbert space.

## Statement references

[[def-ip-mean-zero-ntd-and-smoothed-kernel-observation|The exact NTD kernel data.]]

[[thm-ip-hilbert-map-extension-with-concave-modulus|The Hilbert extension with the same concave modulus.]]

[[thm-ip-calderon-logarithmic-l2-stability|IP-45 logarithmic stability.]]

## Facts & Assumptions

**Given:** the conductivity classes, the exact kernels, and the candidate modulus in the Statement.

[F1] The IP-45 stability theorem controls the conductivity difference by a saturated logarithmic function of the weak DN operator difference. ([[thm-ip-calderon-logarithmic-l2-stability]])

[F2] The NTD observation assigns a unique zero-mean-in-each-variable kernel by the smoothing and Hilbert–Schmidt theorem. ([[def-ip-mean-zero-ntd-and-smoothed-kernel-observation]], [[lem-ip-ntd-smoothing-and-hilbert-schmidt-kernel-bound]])

[F3] The concave same-modulus Hilbert extension agrees with the exact-data inverse map on its defining subset. ([[thm-ip-hilbert-map-extension-with-concave-modulus]])

[F4] The kernel distance $s$ controls the weak DN distance by $C_1s^{1/2}$, including at $s=0$. ([[lem-ip-ntd-smoothing-and-hilbert-schmidt-kernel-bound]])

[A1] The Axiom of Choice and Countable Choice are inherited at the weak-solution, spectral and Hilbert-extension interfaces. ([[def-axiom-of-choice]], [[def-countable-choice]])

## Proof

**Given:** the data in the Statement.

1.1 By [F2] every conductivity has its unique zero-mean kernel. If $\kappa_\gamma=\kappa_{\gamma_0}$, [F4] gives $\dot\Lambda_\gamma=\dot\Lambda_{\gamma_0}$ and [F1], with its value zero at zero, gives $\gamma=\gamma_0$ in $L^2(\Omega)$. Thus assigning $\kappa_\gamma\mapsto\gamma$ defines a function on the exact image, independently of the conductivity representative. This remains valid if that image is empty. [A1, F1, F2, F4, given, algebra]

2.1 For any exact pair, [F4] and [F1] give $\|\gamma-\gamma_0\|_2\le\omega_\star(\|\kappa_\gamma-\kappa_{\gamma_0}\|_2)$ with $\omega_\star(s)=C_0[\log(1/\min\{C_1\sqrt{s},t_0\})]^{-\rho}$ for $s>0$ and value zero at zero. Its concavity and continuity are proved in [F3]. Applying that theorem to the function established in step 1.1 gives an extension to the entire real kernel Hilbert space, with the same inequality for EVERY pair of inputs and agreement on the exact image. If the class is empty, the zero map also supplies an extension. This proves both clauses. [F1, F3, F4, step 1.1, given, algebra] ∎
