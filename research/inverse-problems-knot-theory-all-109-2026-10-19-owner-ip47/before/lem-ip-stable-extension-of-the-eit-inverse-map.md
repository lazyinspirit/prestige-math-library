---
id: lem-ip-stable-extension-of-the-eit-inverse-map
kind: lemma
title: Stable extension of the EIT inverse map
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 10
deps:
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

[F2] The NTD observation assigns a unique zero-mean-in-each-variable kernel whenever the smoothing and Hilbert–Schmidt claim is proved. ([[def-ip-mean-zero-ntd-and-smoothed-kernel-observation]], [[lem-ip-ntd-smoothing-and-hilbert-schmidt-kernel-bound]])

[F3] A concave same-modulus Hilbert extension, if established, agrees with the exact-data inverse map on its defining subset. ([[thm-ip-hilbert-map-extension-with-concave-modulus]])

[A1] The kernel-to-DN norm comparison required to infer injectivity and the inverse modulus is still unproved in the smoothing item.

[A2] The same-modulus Hilbert extension theorem is escalated pending its full local proof.

## Proof

**Given:** the data in the Statement.

1.1 By [F2], on the conditional smoothing and Hilbert–Schmidt existence branch each conductivity has its unique zero-mean kernel. If $\kappa_\gamma=\kappa_{\gamma_0}$, the missing comparison [A1] would imply $\dot\Lambda_\gamma=\dot\Lambda_{\gamma_0}$; [F1] would then give $\gamma=\gamma_0$. Thus well-definedness of $\Psi^\star$ depends on the precise inverse-operator estimate, which is not yet available. [F2, A1, F1, given]

2.1 If [A1] holds with $\|\dot\Lambda_\gamma-\dot\Lambda_{\gamma_0}\|\le C_1\|\kappa_\gamma-\kappa_{\gamma_0}\|_2$, then [F1] and the modulus calculation in [F3] give the displayed $\omega_\star$ bound. The Hilbert extension clause [A2] would then extend this exact-data map and preserve the same bound. Neither conditional premise is treated as proved in this item. [A1, A2, F1, F3, given]

## Proof status

The exact inverse map's well-definedness, kernel-distance stability and whole-space extension remain conditional on [A1] and [A2]. This carrier records the full planned claim and its exact missing prerequisites; it is escalated.
