---
id: lem-bergman-determinant-over-kernel-invariant
kind: lemma
title: "The determinant quotient $\\det g_\\Omega/K_\\Omega$ is a biholomorphic invariant"
status: published
origin: pipeline
pipeline_run: frontier-43-complex-representation-15
dependency_level: 8
proof_strategy: direct
deps:
  - def-bergman-metric-bounded-domain
  - def-countable-choice
  - def-determinant-of-a-square-matrix
  - def-levi-form-and-strict-plurisubharmonicity
  - def-matrices-over-a-commutative-ring
  - def-ring-matrix-product-identity-and-transpose
  - lem-bergman-kernel-smoothness-and-positive-diagonal
  - lem-complex-conjugation-and-modulus-laws
  - thm-bergman-kernel-biholomorphic-transformation
  - thm-bergman-metric-positivity-and-biholomorphic-invariance
  - thm-determinant-multiplicative
  - thm-determinant-of-transpose
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: "2026-10-08"
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
sources:
  references:
    - title: Zbigniew Błocki, The Bergman Kernel and Metric (lecture notes)
      url: https://gamma.im.uj.edu.pl/~blocki/publ/ln/bergman.pdf
      locator: >-
        §1, printed pp. 2–5: the transformation laws (1.2) and
        $B_\Omega(z;X)=B_D(F(z);F'(z)X)$, from which the determinant
        quotient is read off. The determinant algebra is supplied locally
        from the library's matrix conventions.
---

## Statement

Assume the Axiom of Countable Choice $\mathrm{AC}_\omega$ ([[def-countable-choice]]). Let $\Omega,\Omega'\subseteq\mathbb C^m$ be bounded domains, let $F:\Omega\to\Omega'$ be a biholomorphism with complex Jacobian $DF(z)$, and let $g_\Omega(z)$ be the matrix of the Bergman metric form in the one-based coordinate aliases of [[def-levi-form-and-strict-plurisubharmonicity]]. Then, for every $z\in\Omega$,

$$\det g_\Omega(z)=|\det DF(z)|^2\det g_{\Omega'}(F(z)),\qquad K_\Omega(z,z)=|\det DF(z)|^2K_{\Omega'}(F(z),F(z)),$$

and consequently

$$\frac{\det g_\Omega(z)}{K_\Omega(z,z)}=\frac{\det g_{\Omega'}(F(z))}{K_{\Omega'}(F(z),F(z))}\qquad(z\in\Omega).$$

If each quotient is constant on its domain, then the two constants are equal. (For $m\ge2$ these quotients are the invariants that distinguish the ball metric from the polydisc metric, but constancy is not claimed here.)

## Facts & Assumptions

[A1] The only choice assumption is $\mathrm{AC}_\omega$ ([[def-countable-choice]]), inherited through the Bergman metric, kernel and transformation suppliers; no full Axiom of Choice is used.

[F1] The Bergman metric form of a bounded domain is the Hermitian form $g_\Omega(z)(X,Y)=\sum_{j,k=1}^m(g_\Omega)_{j\bar k}(z)X_j\overline{Y_k}$ with matrix $(g_\Omega)_{j\bar k}(z)$, and $B^2_\Omega(z;X)=g_\Omega(z)(X,X)$ ([[def-bergman-metric-bounded-domain]], [[def-levi-form-and-strict-plurisubharmonicity]]).

[F2] A biholomorphism $F:\Omega\to\Omega'$ of bounded domains satisfies $g_\Omega(z)(X,Y)=g_{\Omega'}(F(z))(DF(z)X,DF(z)Y)$ for all $z,X,Y$ ([[thm-bergman-metric-positivity-and-biholomorphic-invariance]]).

[F3] A biholomorphism $F$ satisfies $K_\Omega(z,w)=J_F(z)K_{\Omega'}(F(z),F(w))\overline{J_F(w)}$ with $J_F=\det DF\ne0$; in particular the diagonal kernel law $K_\Omega(z,z)=|\det DF(z)|^2K_{\Omega'}(F(z),F(z))$ holds ([[thm-bergman-kernel-biholomorphic-transformation]]).

[F4] On a bounded domain, $K_\Omega(z,z)>0$ for every $z$ ([[lem-bergman-kernel-smoothness-and-positive-diagonal]]).

[F5] For $A\in M_n(R)$ over a commutative ring, $\det(A)=\sum_{\sigma\in S_n}\operatorname{sgn}(\sigma)\prod_{i<n}a_{\sigma(i),i}$, and transposition leaves the determinant unchanged; the determinant is multiplicative: $\det(AB)=\det A\det B$ ([[def-determinant-of-a-square-matrix]], [[def-matrices-over-a-commutative-ring]], [[thm-determinant-of-transpose]], [[thm-determinant-multiplicative]]).

[F6] Complex conjugation is a field automorphism of $\mathbb C$ fixing the rationals, so it commutes with finite sums and products of complex numbers ([[lem-complex-conjugation-and-modulus-laws]]).

[F7] Matrices multiply by the usual row-column rule, and $A^{\mathsf T}$ has entries $(A^{\mathsf T})_{ji}=a_{ij}$ ([[def-ring-matrix-product-identity-and-transpose]], [[def-matrices-over-a-commutative-ring]]).

## Proof

**Proof technique:** direct, comparing Hermitian matrices by their quadratic forms and taking determinants.

**Given:** $\mathrm{AC}_\omega$, bounded domains $\Omega,\Omega'$, a biholomorphism $F$, a point $z\in\Omega$, and $J:=DF(z)$.

1.1 Put $G:=g_{\Omega'}(F(z))$ and $H:=g_\Omega(z)$, with entries $G_{lm}$ and $H_{jk}$ in the one-based aliases. By [F1] and [F2], for all $X,Y\in\mathbb C^m$, $$\sum_{j,k}H_{jk}X_j\overline{Y_k}=\sum_{l,m}G_{lm}(JX)_l\overline{(JY)_m}=\sum_{j,k}\Bigl(\sum_{l,m}\overline{J_{mk}}G_{lm}J_{lj}\Bigr)X_j\overline{Y_k}.$$ Since the Hermitian form is determined by its coefficients, $H_{jk}=\sum_{l,m}\overline{J_{mk}}G_{lm}J_{lj}$, which is the $(j,k)$ entry of $J^{\mathsf T}G\overline J$ because $(J^{\mathsf T}G\overline J)_{jk}=\sum_{l,m}J_{lj}G_{lm}\overline{J_{mk}}$ by [F7]; in matrix notation $g_\Omega(z)=J^{\mathsf T}g_{\Omega'}(F(z))\overline J$. [A1, F1, F2, F7, algebra]

1.2 Conjugation is a field automorphism of $\mathbb C$ [F6] applied entrywise to the Leibniz sum of [F5] gives $\det(\overline J)=\overline{\det J}$; since transposition leaves determinants unchanged [F5], $\det(\overline J^{\mathsf T})=\overline{\det J}$. [F5, F6, algebra]

2.1 Taking determinants in the matrix identity of step 1.1 and using multiplicativity and transposition invariance [F5] gives $\det g_\Omega(z)=\det(J)\det g_{\Omega'}(F(z))\det(\overline J)=\det J\,\det g_{\Omega'}(F(z))\,\overline{\det J}=|\det J|^2\det g_{\Omega'}(F(z))$, the first displayed identity. The second displayed identity is the diagonal kernel law of [F3] with $J=DF(z)$, whose determinant is nonzero. [F3, F5, step 1.1, step 1.2]

3.1 By [F4] the diagonal values $K_\Omega(z,z)$ and $K_{\Omega'}(F(z),F(z))$ are positive, and $|\det DF(z)|^2>0$ by [F3]; dividing the two identities of step 2.1 by each other and cancelling the common positive factor $|\det DF(z)|^2$ gives the displayed identity of the quotients for every $z\in\Omega$. If each quotient is constant on its domain, evaluating the identity at any $z$ shows the two constants are equal. [F3, F4, step 2.1] ∎
