---
id: thm-kim-sarnak-quadratic-twist-makes-weight-zero-gl2-spherical
kind: theorem
title: Odd Quadratic Twist Makes the Weight-Zero GL(2) Archimedean Component Spherical
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 4
deps:
  - def-weight-zero-maass-form-on-gamma0n
  - def-unitary-cuspidal-generic-gln-representation
  - def-standard-and-rankin-selberg-l-functions-on-gln
  - def-dirichlet-character-modulo-q
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pending
sources:
  references:
    - title: "Henry H. Kim, Functoriality for the Exterior Square of GL4 and the Symmetric Fourth of GL2, Appendix 2"
      url: "https://web.archive.org/web/20200307192400id_/https://www.ams.org/journals/jams/2003-16-01/S0894-0347-02-00410-1/S0894-0347-02-00410-1.pdf"
      locator: "Appendix 2, Proposition 2, printed pp. 176–177: spherical archimedean bound and the parity-twist reduction."
    - title: "A. Knightly and C. Li, Kuznetsov's Trace Formula and the Hecke Eigenvalues of Maass Forms"
      url: "https://arxiv.org/pdf/1202.0189v1"
      locator: "§4.1, printed pp. 26–27: weight-zero spectral parameter and parity conventions."
---

## Statement

Let $\pi$ be a unitary cuspidal generic automorphic representation of
$\mathrm{GL}_2(\mathbb A_{\mathbb Q})$. For $\epsilon\in\{0,1\}$, write
$$I(t,\epsilon)=\operatorname{Ind}_{B(\mathbb R)}^{\mathrm{GL}_2(\mathbb R)}
\bigl(|\cdot|^{it}\operatorname{sgn}^{\epsilon}\boxtimes
|\cdot|^{-it}\operatorname{sgn}^{\epsilon}\bigr)$$
for normalized induction; on an upper-triangular element with diagonal
$(a,d)$ its inducing transformation law includes $|a/d|^{1/2}$. Here
$\operatorname{sgn}$ is the real sign character. Suppose the weight-zero
archimedean component of $\pi$ is $I(t,1)$. Both inducing characters then
have odd sign parity, so the weight-zero vector is odd under an
orientation-reversing element; $I(t,0)$ has an $O(2)$-fixed vector. Let
$\chi_{-4}$ be the
quadratic Hecke character whose finite Dirichlet component is the primitive
character modulo $4$ and whose archimedean component is
$x\mapsto\operatorname{sgn}(x)$. Then
$(\pi\otimes\chi_{-4})_\infty\simeq I(t,0)$, the spherical principal series,
with the same infinitesimal character and Laplace eigenvalue as $\pi_\infty$.
At every finite prime $p\ne2$ where $\pi_p$ is unramified, twisting preserves
the absolute values of its Satake parameters. At $p=2$ the twist is ramified,
so this conclusion makes no assertion about an unramified parameter there.
Finally, at every place $v$, let $\varphi_{\pi_v}$ be the two-dimensional
standard local parameter of $\pi_v$. Then
$$\operatorname{Sym}^4(\varphi_{\pi_v}\otimes\chi_{-4,v})\simeq
\operatorname{Sym}^4(\varphi_{\pi_v}).$$

## Statement references

[Henry H. Kim, *Functoriality for the Exterior Square of GL4 and the Symmetric Fourth of GL2*, Appendix 2](https://web.archive.org/web/20200307192400id_/https://www.ams.org/journals/jams/2003-16-01/S0894-0347-02-00410-1/S0894-0347-02-00410-1.pdf)

[A. Knightly and C. Li, *Kuznetsov's Trace Formula and the Hecke Eigenvalues of Maass Forms*](https://arxiv.org/pdf/1202.0189v1)

## Facts & Assumptions

**Given:** $\pi$, the principal-series model $I(t,1)$, and the quadratic
character $\chi_{-4}$ with the finite and archimedean components specified in
the Statement.

[F1] [[def-weight-zero-maass-form-on-gamma0n]]: a weight-zero Maass eigenfunction has Laplace eigenvalue $\lambda\ge0$ with the positive-sign convention $\Delta_{\mathbb H}u=\lambda u$.

[F2] [[def-unitary-cuspidal-generic-gln-representation]]: the global representation is cuspidal and its local components are the factors of the restricted tensor product.

[F3] [[def-dirichlet-character-modulo-q]]: a Dirichlet character is a group homomorphism on the units modulo its modulus, extended by zero to nonunits.

[F4] [[def-standard-and-rankin-selberg-l-functions-on-gln]]: each local component is assigned its standard local Langlands parameter, and at unramified finite places the Satake parameters are the Frobenius eigenvalues of that parameter.

## Proof

1.1 On the diagonal torus of $B(\mathbb R)$, the character $g\mapsto\operatorname{sgn}(\det g)$ is $(a,d)\mapsto\operatorname{sgn}(a)\operatorname{sgn}(d)$. Twisting therefore toggles both inducing signs in $I(t,1)$, giving $I(t,0)$. Its $O(2)$-fixed vector makes it spherical. [given, F3, construct, algebra]

1.2 The character $\operatorname{sgn}(\det)$ is trivial on the identity component $\mathrm{GL}_2^+(\mathbb R)$, so its differential is zero. The infinitesimal character and the Casimir eigenvalue are unchanged by the twist. Since the Laplacian eigenvalue is determined by $t$ through $\lambda=1/4+t^2$, the eigenvalue is unchanged. [given, F1, step 1.1, algebra]

1.3 For each place $v$, tensoring a two-dimensional parameter by a one-dimensional character gives
$$\operatorname{Sym}^4(\varphi_{\pi_v}\otimes\chi_{-4,v})
=\operatorname{Sym}^4(\varphi_{\pi_v})\otimes\chi_{-4,v}^{\,4}
=\operatorname{Sym}^4(\varphi_{\pi_v}),$$
because $\chi_{-4,v}^2=1$. This proves the local symmetric-fourth identity. [given, F2, F3, F4, algebra]

1.4 If $p\ne2$ and $\pi_p$ is unramified, then $\chi_{-4,p}$ is unramified and has value of absolute value $1$ on Frobenius. By [F4], twisting multiplies both Satake parameters by that value, so their absolute values are unchanged. The character has conductor $4$, hence is ramified at $2$; no unramified conclusion at $2$ is inferred. [given, F3, F4, step 1.3, algebra] ∎

## Proof references

[Henry H. Kim, *Functoriality for the Exterior Square of GL4 and the Symmetric Fourth of GL2*, Appendix 2](https://web.archive.org/web/20200307192400id_/https://www.ams.org/journals/jams/2003-16-01/S0894-0347-02-00410-1/S0894-0347-02-00410-1.pdf)
