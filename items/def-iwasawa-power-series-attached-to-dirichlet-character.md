---
id: def-iwasawa-power-series-attached-to-dirichlet-character
kind: definition
title: "Iwasawa power series attached to a Dirichlet p-adic L-function"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 4
deps:
  - def-formal-power-series-and-coefficient-extraction
  - def-iwasawa-algebra-of-profinite-abelian-group
  - def-primitive-dirichlet-character-and-conductor
  - def-teichmuller-character-on-zp-units
  - lem-principal-unit-generators-of-p-adic-units
  - thm-mahler-transform-for-p-adic-measures
  - thm-chinese-remainder-theorem
  - thm-kubota-leopoldt-dirichlet-character-interpolation
  - thm-kubota-leopoldt-p-adic-zeta-interpolation
  - thm-profinite-p-adic-measures-identify-with-completed-group-algebra
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "H. Knospe, Special values of p-adic L-functions and Iwasawa λ-invariants of Dirichlet characters"
      url: "https://link.springer.com/content/pdf/10.1007/s40993-026-00762-x.pdf"
      locator: "§1, formula (1.2), printed pp. 1–2"
    - title: "J. Rodrigues Jacinto and C. Williams, An Introduction to p-adic L-functions"
      url: "https://msp.org/ent/2025/4-1/ent-v4-n1-p03-p.pdf"
      locator: "§§5.2–5.3, printed pp. 143–148"
    - title: "H. Knospe, Special values of p-adic L-functions and Iwasawa lambda-invariants of Dirichlet characters, arXiv:2401.06100v3"
      url: "https://arxiv.org/pdf/2401.06100"
      locator: "formula (1.2), arXiv v3, printed pp. 1–2"
verification: {}
---

## Definition

Let $p$ be an odd prime and let $\chi=\theta\omega^i$ be a nontrivial even Dirichlet character, meaning $\chi(-1)=1$, where $\theta$ is primitive of conductor prime to $p$, $\omega$ is the Teichmüller character, and $i\in\{0,\ldots,p-2\}$. Fix a p-adic embedding of the value field of $\theta$. For $\mathbb Z_p^\times=\mu_{p-1}\times\Gamma$, with $\mu_{p-1}=\{u\in\mathbb Z_p^\times:u^{p-1}=1\}$ and $\Gamma=1+p\mathbb Z_p$, let $\gamma=1+p$, a topological generator of $\Gamma$. Extend each finite-order character $\psi$ of $\Gamma$ trivially across $\mu_{p-1}$ and put $\zeta_\psi=\psi(\gamma)^{-1}$. For $s\in\mathbb C_p$ with $|s|_p<p^{(p-2)/(p-1)}$, set $(1+p)^s=\exp(s\log(1+p))$. The p-adic exponential converges for $|u|_p<p^{-1/(p-1)}$, and $\log(1+p)\in p\mathbb Z_p$, so this exponent is defined on the stated disc. An **Iwasawa power series attached to the branch $L_p(s,\chi)$** is a series $F_\chi(T)\in\mathcal O_\chi\llbracket T\rrbracket$ satisfying
$$F_\chi\bigl(\zeta_\psi(1+p)^s-1\bigr)=L_p(s,\chi\psi)$$
for every such $\psi$ and every $s\in\mathbb C_p$ with $|s|_p<p^{(p-2)/(p-1)}$, using the normalization $|p|_p=p^{-1}$ and writing $\mathbb C_p$ for the completion of an algebraic closure of $\mathbb Q_p$. Here $\mathcal O_\chi=\mathbb Z_p[\operatorname{im}(\chi)]$, and $L_p$ denotes the value supplied by the stated interpolation construction when available. If such a series exists, it is unique; this definition does not assert existence.

## Definition references

[H. Knospe, *Special Values of p-adic L-functions and Iwasawa λ-invariants*, §1, formula (1.2), printed pp. 1–2](https://link.springer.com/content/pdf/10.1007/s40993-026-00762-x.pdf)

[J. Rodrigues Jacinto and C. Williams, *An Introduction to p-adic L-functions*, §§5.2–5.3, pp. 143–148](https://msp.org/ent/2025/4-1/ent-v4-n1-p03-p.pdf)

[H. Knospe, *Special values of p-adic L-functions and Iwasawa $\lambda$-invariants*, arXiv v3, §1, formula (1.2), printed pp. 1–2](https://arxiv.org/pdf/2401.06100)

## Facts & Assumptions

**Given:** $p,\chi,\Gamma,\gamma$ and the prescribed p-adic Mellin values whenever the interpolation supplier is available.

[F1] For a nontrivial primitive tame-character branch, the character interpolation theorem supplies the values at $s=1-k$ for positive integers $k\equiv i\pmod{p-1}$. [[thm-kubota-leopoldt-dirichlet-character-interpolation]]

[F2] The completed group algebra of $\Gamma\cong\mathbb Z_p$ is $\mathbb Z_p\llbracket T\rrbracket$ in the inverse-generator coordinate $\gamma^{-1}\mapsto1+T$. [[def-iwasawa-algebra-of-profinite-abelian-group]]

[F3] The measure/completed-group-algebra identification sends the group element $\gamma^{-z}$ to $(1+T)^z$ when $\gamma^{-1}\mapsto1+T$; equivalently, the measure transform in this coordinate is $F(T)=\int_\Gamma(1+T)^{-z}\,d\nu(z)$. Substituting $1+T=\psi(\gamma)^{-1}(1+p)^s$ gives the integrand $\psi(\gamma)^z(1+p)^{-sz}$, matching the finite twist and Mellin character in the stated interpolation values. [[thm-profinite-p-adic-measures-identify-with-completed-group-algebra]] [[thm-mahler-transform-for-p-adic-measures]]

[F4] For every $m\ge1$, the Chinese remainder theorem gives a positive integer $k_m>1$ with $k_m\equiv i\pmod{p-1}$ and $k_m\equiv1\pmod{p^m}$; adding multiples of $(p-1)p^m$ allows the sequence to be chosen with distinct terms. [[thm-chinese-remainder-theorem]]

[F5] The powers of $\gamma=1+p$ satisfy $\gamma^{p^m}\in1+p^{m+1}\mathbb Z_p$, and $\gamma$ has infinite order. [[lem-principal-unit-generators-of-p-adic-units]]

[F6] For odd $p$, every unit has the unique Teichmüller decomposition $x=\omega(x)\langle x\rangle$ with $\omega(x)\in\mu_{p-1}$ and $\langle x\rangle\in\Gamma$. [[def-teichmuller-character-on-zp-units]]

[A1] For trivial tame character $\theta=1$, the p-adic zeta pseudomeasure supplies the untwisted moments, but conversion to every required $\omega^i$ branch and its finite-character Mellin values still needs an explicit proof. The nontrivial tame branches are supplied by the character interpolation theorem. Thus this item's uniqueness proof is conditional on the branch values when they are not supplied; no existence is claimed for the unresolved trivial-tame branch. [[thm-kubota-leopoldt-dirichlet-character-interpolation]] [[thm-kubota-leopoldt-p-adic-zeta-interpolation]]

## Proof

1.1 By [F4], choose distinct positive integers $k_m>1$ with $k_m\equiv i\pmod{p-1}$ and $k_m\equiv1\pmod{p^m}$. Set $s_m=1-k_m$ and $t_m=(1+p)^{s_m}-1$. Since $s_m\in p^m\mathbb Z_p$, we have $|s_m|_p\le p^{-1}<p^{(p-2)/(p-1)}$, so it lies in the stated disc; [F5] gives $t_m\in p^{m+1}\mathbb Z_p$. Since $s_m\ne0$ and $\gamma$ has infinite order, $t_m\ne0$. Distinct exponents give distinct powers of $\gamma$, so these are distinct nonzero interpolation points tending to $0$. Taking $\psi=1$ in the defining condition shows that any two admissible series have the same value at every $t_m$. [F4, F5, given, algebra]

2.1 Suppose $F,G\in\mathcal O_\chi\llbracket T\rrbracket$ satisfy the same interpolation values, and put $H=F-G$. If $H\ne0$, let $d$ be the least index with coefficient $a_d\ne0$. Since coefficients lie in the ring of integers $\mathcal O_\chi$, they have absolute value at most $1$. For any nonzero $t$ with $|t|_p<|a_d|_p$, the tail has norm at most $|t|_p^{d+1}<|a_dt^d|_p$. The ultrametric inequality then gives $H(t)\ne0$. But step 1.1 gives $H(t_m)=0$ and $t_m\to0$, so for large $m$ we have $|t_m|_p<|a_d|_p$, a contradiction. Hence $F=G$. This proves uniqueness only; the existence limitations are recorded in [A1]. [A1, given, step 1.1, algebra] ∎
