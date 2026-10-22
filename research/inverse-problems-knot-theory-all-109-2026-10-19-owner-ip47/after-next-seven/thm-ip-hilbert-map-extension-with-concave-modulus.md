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
  - lem-ip-concave-modulus-hilbert-ball-intersection
  - thm-zorn
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

For the EIT inverse map, if IP-45 gives $\|\gamma-\gamma_0\|_2\le C_0[\log(1/\min\{\delta,t_0\})]^{-\rho}$ for $\delta=\|\dot\Lambda_\gamma-\dot\Lambda_{\gamma_0}\|$, and the NTD kernel estimate transfers $\delta\le C_1\|\kappa_\gamma-\kappa_{\gamma_0}\|_2^{1/2}$, then after decreasing $t_0$ and, if necessary, enlarging $C_0$ the concave modulus
$$\omega_\star(0)=0,\qquad \omega_\star(s)=C_0\left[\log\!\left(\frac1{\min\{C_1\sqrt{s},t_0\}}\right)\right]^{-\rho}\quad(s>0)$$
is an admissible modulus for that inverse map and can be extended by the Hilbert same-modulus theorem.

## Statement references

[[thm-ip-calderon-logarithmic-l2-stability|The inverse stability estimate on the exact conductivity class.]]

[[lem-ip-ntd-smoothing-and-hilbert-schmidt-kernel-bound|The required NTD-kernel to DN-operator comparison.]]

[Benyamini–Lindenstrauss, Chapter 1, Theorem 1.12 and Proposition 1.13](https://doi.org/10.1090/coll/048)

## Facts & Assumptions

**Given:** the real Hilbert spaces, subset, map and modulus in the Statement, and the EIT class data when applying the second paragraph.

[F1] IP-45 states $\|\gamma-\gamma_0\|_2\le C_0\omega(\|\dot\Lambda_\gamma-\dot\Lambda_{\gamma_0}\|)$ with a saturated logarithmic modulus and $\omega(0)=0$. ([[thm-ip-calderon-logarithmic-l2-stability]])

[F2] For any concave nondecreasing modulus $\omega$ vanishing continuously at zero, source points $x_i$ and target points $y_i$ satisfying $\|y_i-y_j\|\le\omega(\|x_i-x_j\|)$ have $\bigcap_i\overline B(y_i,\omega(\|x_i-x\|))\ne\varnothing$ for every additional source point $x$. This includes arbitrary index sets and zero-radius balls. ([[lem-ip-concave-modulus-hilbert-ball-intersection]])

[F3] The actual kernel comparison is $\delta\le C_1s^{1/2}$, where $s$ is the $L^2$ kernel distance. ([[lem-ip-ntd-smoothing-and-hilbert-schmidt-kernel-bound]])

[F4] Under the Axiom of Choice, a nonempty poset whose every chain has an upper bound has a maximal element. ([[thm-zorn]])

[A1] The Axiom of Choice supplies Zorn's lemma and implies the Countable Choice used by the Hilbert-ball and EIT interfaces. ([[def-axiom-of-choice]], [[def-countable-choice]])

## Proof

**Given:** the data in the Statement.

1.1 Consider the set of pairs $(B,h)$ where $A\subseteq B\subseteq H_1$ and $h:B\to H_2$ extends $g$ and satisfies $\|h(u)-h(v)\|\le\omega_\star(\|u-v\|)$ for all $u,v\in B$. Order it by graph inclusion. It is nonempty, since $(A,g)$ is in it. Every nonempty chain has as upper bound the union of its graphs: every two of its domain points occur together in one member of the chain, so the same modulus inequality holds for their union. The empty chain has $(A,g)$ as an upper bound. By [F4] and [A1] there is a maximal pair $(B,h)$. [A1, F4, given, construct, choose]

1.2 For the EIT application first arrange $t_0\le e^{-(\rho+1)}$. If the original IP-45 constants have a larger cutoff, decrease it and enlarge $C_0$ if needed: the uniform class diameter is at most $2M|\Omega|^{1/2}$, so taking $C_0\ge2M|\Omega|^{1/2}[\log(1/t_0)]^\rho$ covers all DN distances above the new cutoff, while increasing $C_0$ preserves the old small-distance estimate. For $0<s<(t_0/C_1)^2$, put $L(s)=\log(1/(C_1\sqrt{s}))$ and $\varphi(s)=C_0L(s)^{-\rho}$. Then $\varphi'(s)=C_0\rho/(2sL(s)^{\rho+1})>0$ and $\varphi''(s)=C_0\rho[\rho+1-2L(s)]/(4s^2L(s)^{\rho+2})\le0$. At the cutoff it joins continuously to a constant and its derivative drops to zero; at zero it tends to zero. Thus the displayed $\omega_\star$ is continuous, nondecreasing and concave on the entire nonnegative half-line. [F1, given, algebra]

2.1 If $B\ne H_1$, fix $x\in H_1\setminus B$. Apply [F2] to the source family $(u)_{u\in B}$ and target family $(h(u))_{u\in B}$. It gives a point $y\in H_2$ satisfying $\|y-h(u)\|\le\omega_\star(\|x-u\|)$ for every $u\in B$. Adding $h(x)=y$ gives a strictly larger admissible graph, contradicting maximality. This also covers $B=\varnothing$, since [F2]'s empty intersection is $H_2$, which contains zero. Thus $B=H_1$ and $\widetilde g=h$ proves the full same-modulus extension theorem for arbitrary real Hilbert spaces and arbitrary subsets. [F2, step 1.1, given, choose, algebra]

3.1 For an exact conductivity pair put $s=\|\kappa_\gamma-\kappa_{\gamma_0}\|_2$. By [F1], [F3] and monotonicity, $\|\gamma-\gamma_0\|_2\le C_0[\log(1/\min\{C_1\sqrt{s},t_0\})]^{-\rho}=\omega_\star(s)$ when $s>0$; if $s=0$, [F3] gives zero DN distance and [F1] gives equal conductivities. Hence the exact-data inverse is well-defined and has this modulus. Step 2.1 applies in the real kernel and conductivity $L^2$ Hilbert spaces, with the concavity verified in step 1.2, to give its whole-space extension with EXACTLY the same modulus. [F1, F3, step 2.1, step 1.2, given, algebra] ∎
