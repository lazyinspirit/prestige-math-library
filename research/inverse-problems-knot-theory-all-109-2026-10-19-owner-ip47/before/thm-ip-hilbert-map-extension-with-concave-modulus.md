---
id: thm-ip-hilbert-map-extension-with-concave-modulus
kind: theorem
title: Hilbert-valued extension with a concave modulus
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 9
deps:
  - def-axiom-of-choice
  - def-countable-choice
  - lem-ip-ntd-smoothing-and-hilbert-schmidt-kernel-bound
  - thm-ip-calderon-logarithmic-l2-stability
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Yoav Benyamini and Joram Lindenstrauss, Geometric Nonlinear Functional Analysis, Volume 1"
      url: "https://doi.org/10.1090/coll/048"
      locator: "Chapter 1, Theorem 1.12 and Proposition 1.13, pp. 18–21: same-concave-modulus extension between Hilbert spaces."
    - title: "Maarten V. de Hoop, Nikola B. Kovachki, Matti Lassas and Nicholas H. Nelsen, Extension and neural operator approximation of the electrical impedance tomography inverse map"
      url: "https://arxiv.org/pdf/2511.20361"
      locator: "Proposition 3.8, Theorem 3.9 and their full proofs, printed pp. 16–18."
---

## Statement

Assume the Axiom of Choice. Let $H_1,H_2$ be real Hilbert spaces, let $A\subseteq H_1$, and let $g:A\to H_2$. If a continuous, nondecreasing, concave function $\omega_\star:[0,\infty)\to[0,\infty)$ satisfies $\omega_\star(0)=0$ and
$$\|g(x)-g(y)\|_{H_2}\le\omega_\star(\|x-y\|_{H_1})\qquad(x,y\in A),$$
then the Hilbert-valued same-modulus extension theorem asserts that there is $\widetilde g:H_1\to H_2$ extending $g$ and satisfying the same inequality for every $x,y\in H_1$.

For the EIT inverse map, if IP-45 gives $\|\gamma-\gamma_0\|_2\le C_0[\log(1/\min\{\delta,t_0\})]^{-\rho}$ for $\delta=\|\dot\Lambda_\gamma-\dot\Lambda_{\gamma_0}\|$, and the NTD kernel estimate transfers $\delta\le C_1\|\kappa_\gamma-\kappa_{\gamma_0}\|_2$, then after decreasing $t_0$ the concave modulus
$$\omega_\star(0)=0,\qquad \omega_\star(s)=C_0\left[\log\!\left(\frac1{\min\{C_1s,t_0\}}\right)\right]^{-\rho}\quad(s>0)$$
is an admissible modulus for that inverse map and can be extended by the Hilbert same-modulus theorem.

## Statement references

[[thm-ip-calderon-logarithmic-l2-stability|The inverse stability estimate on the exact conductivity class.]]

[[lem-ip-ntd-smoothing-and-hilbert-schmidt-kernel-bound|The required NTD-kernel to DN-operator comparison.]]

[Benyamini–Lindenstrauss, Chapter 1, Theorem 1.12 and Proposition 1.13](https://doi.org/10.1090/coll/048)

## Facts & Assumptions

**Given:** the real Hilbert spaces, subset, map and modulus in the Statement, and the EIT class data when applying the second paragraph.

[F1] IP-45 states $\|\gamma-\gamma_0\|_2\le C_0\omega(\|\dot\Lambda_\gamma-\dot\Lambda_{\gamma_0}\|)$ with a saturated logarithmic modulus and $\omega(0)=0$. ([[thm-ip-calderon-logarithmic-l2-stability]])

[A1] The same-modulus Hilbert extension theorem in the first paragraph still requires a complete local proof; the cited Benyamini–Lindenstrauss chapter was not fully retrieved in this run.

[A2] The kernel-to-DN comparison needed in the EIT application is not yet proved by the local smoothing carrier. ([[lem-ip-ntd-smoothing-and-hilbert-schmidt-kernel-bound]])

[A3] The Axiom of Choice is the branch needed for the maximal-extension argument in the cited Hilbert theorem. ([[def-axiom-of-choice]])

## Proof

**Given:** the data in the Statement.

1.1 For $0<s<t_0/C_1$, put $L(s)=\log(1/(C_1s))$ and $\varphi(s)=C_0L(s)^{-\rho}$. Direct differentiation gives
$$\varphi'(s)=\frac{C_0\rho}{sL(s)^{\rho+1}}>0,\qquad \varphi''(s)=\frac{C_0\rho}{s^2L(s)^{\rho+2}}(\rho+1-L(s)).$$
Choose $t_0\le e^{-(\rho+1)}$. Then $L(s)\ge\rho+1$ throughout this interval, so $\varphi''(s)\le0$. At $s=t_0/C_1$ the definition saturates to a constant; its right derivative drops from a nonnegative value to zero. Extending continuously by $\varphi(0)=0$ therefore gives a nondecreasing concave function on $[0,\infty)$. This proves the claimed concavity of $\omega_\star$. [given, algebra]

1.2 If [A2] holds, [F1], monotonicity of the saturated logarithmic modulus, and the inequality $\delta\le C_1\|\kappa_\gamma-\kappa_{\gamma_0}\|_2$ give
$$\|\gamma-\gamma_0\|_2\le C_0\left[\log\!\left(\frac1{\min\{C_1\|\kappa_\gamma-\kappa_{\gamma_0}\|_2,t_0\}}\right)\right]^{-\rho}=\omega_\star(\|\kappa_\gamma-\kappa_{\gamma_0}\|_2).$$
Thus the exact-data inverse map satisfies the modulus hypothesis in the first paragraph, provided the kernel comparison is established. [A2, F1, step 1.1, given]

2.1 Extending this map from its exact-data subset of $L^2(M\times M)$ to the whole real Hilbert kernel space with the same concave modulus is the remaining substantive claim [A1]. The full Benyamini–Lindenstrauss proof was not retrieved, and no local proof is supplied here; this item is therefore escalated at the extension step. [A1, A3]

## Proof status

The concavity calculation and the modulus transfer are explicit. Readiness is blocked by the full Hilbert-valued same-modulus extension proof and the kernel-to-DN estimate in [A2]. The source-resolution record and exact retrieval history are in the batch coverage evidence.
