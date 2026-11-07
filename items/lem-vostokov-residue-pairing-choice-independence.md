---
id: lem-vostokov-residue-pairing-choice-independence
kind: lemma
title: "Choice independence and uniformizer invariance of the Vostokov residue pairing"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 6
deps:
  - def-vostokov-residue-expression-odd-prime
  - lem-vostokov-shafarevich-basis-for-principal-units
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "I. B. Fesenko and S. V. Vostokov, Local Fields and Their Extensions, second edition, Chapter VII §§2.1–2.4"
      url: "https://ivanfesenko.org/wp-content/uploads/2021/10/vol.pdf"
      locator: "Propositions in §§2.1–2.4, including lift independence, bilinearity, and prime-element invariance, printed pp.241–247."
verification: {}
---

## Statement

Let $p$ be odd, $n\ge1$, and let $F/\mathbb Q_p$ be finite with a
primitive $p^n$-th root of unity $\zeta$. In a fixed algebraic closure of
$\mathbb Q_p$, let $\mathbb Q_p^{\mathrm{ur}}$ be the maximal unramified
extension, put $F_0=F\cap\mathbb Q_p^{\mathrm{ur}}$, and let $\mathcal O_0$
be its ring of integers. Let $\widetilde{\mathcal O}$ be the ring of
integers of the completion of $\mathbb Q_p^{\mathrm{ur}}$. Fix a uniformizer
$\pi$ of $F$ and choose $z(X)\in1+X\mathcal O_0\llbracket X\rrbracket$ with $z(\pi)=\zeta$.
Let $\varphi$ be arithmetic Frobenius on the unramified extension and define
$$
\Delta\!\left(\sum_i c_iX^i\right)=\sum_i\varphi(c_i)X^{pi}, \qquad \ell(f)=\frac1p\log\!\left(\frac{f^p}{f^\Delta}\right) \quad(f\in\widetilde{\mathcal O}((X))^\times),
$$
where $f^p/f^\Delta\in1+p\widetilde{\mathcal O}\llbracket X\rrbracket$ and $\log$
is the convergent $p$-adic logarithm. Put
$s(X)=z(X)^{p^n}-1$ and $V(X)=\frac12+s(X)^{-1}$.
Write $\mathcal O_0\{\!\{X\}\!\}$ for the $p$-adic completion of
$\mathcal O_0((X))$: its elements are two-sided series
$\sum_{i\in\mathbb Z}a_iX^i$ with $a_i\in\mathcal O_0$ and
$a_i\to0$ $p$-adically as $i\to-\infty$. Multiplication uses $p$-adically
convergent coefficientwise convolution. The inverse $s^{-1}$ is taken in
this completed ring, and residues of products are their $X^{-1}$ coefficients. For
$A,B\in\mathcal O_0((X))^\times$, set
$$
\Phi_{A,B}(X)=\frac{A'(X)}{A(X)}\ell(B(X)) -\ell(A(X))\frac{(B(X)^\Delta)'}{pB(X)^\Delta}, \qquad R_{\pi,z}(A,B)=\operatorname{Tr}_{F_0/\mathbb Q_p} \operatorname{res}_X\bigl(\Phi_{A,B}(X)V(X)\bigr),
$$
where $'$ is formal differentiation and $\operatorname{res}_X$ extracts the
coefficient of $X^{-1}$. For $a,b\in F^\times$, take any such lifts with
$A(\pi)=a$ and $B(\pi)=b$. The trace-residue belongs to $\mathbb Z_p$;
reducing it modulo $p^n$ defines
$$
\langle a,b\rangle_\pi=\zeta^{R_{\pi,z}(A,B)}.
$$
This value is independent of the formal Laurent-series lifts $A,B$, the
chosen series $z(X)$, and the uniformizer $\pi$. It is multiplicative in
each variable and satisfies
$\langle a,b\rangle_\pi=\langle b,a\rangle_\pi^{-1}$.

## Statement references

[[def-vostokov-residue-expression-odd-prime]]

[[lem-vostokov-shafarevich-basis-for-principal-units]]

## Facts & Assumptions

**Given:** The field, root of unity, formal-series expression, and
Shafarevich decomposition interface in the Statement.

[F1] The formal residue expression defines
$\Phi_{\alpha,\beta}$, $V$, and $R_{\pi,z}$ for specified choices.
[[def-vostokov-residue-expression-odd-prime]]

[F2] The Shafarevich coordinates for principal units are stated in the
assigned helper. [[lem-vostokov-shafarevich-basis-for-principal-units]]

## Proof

**Proof technique:** use the Frobenius-logarithm identities, then reduce
uniformizer invariance to uniformizer–unit values.

**Given:** The data above.

1.1 The formal logarithm satisfies $\ell(fg)=\ell(f)+\ell(g)$ because
$f^p/f^\Delta$ is multiplicative and the $p$-adic logarithm is additive on
its domain. Substitution in $\Phi_{\alpha,\beta}$ gives bilinearity. The sum
$\Phi_{\alpha,\beta}+\Phi_{\beta,\alpha}$ is $h'$, where
$h=\ell(\alpha)\ell(\beta)\in\mathcal O_0\llbracket X\rrbracket$.
In the completed Laurent ring,
$V'=-p^n z^{p^n-1}z's^{-2}\in p^n\mathcal O_0\{\!\{X\}\!\}$.
The residue of a derivative is zero, so
$\operatorname{res}_X(h'V)=-\operatorname{res}_X(hV')\in p^n\mathcal O_0$.
After the field trace this proves antisymmetry modulo $p^n$ for the formal
series pairing, independently of the still-unproved lift invariance. [F1, given, algebra]

1.2 The source proves that changing a lift multiplies it by a series
$1-u g(X)$ and then uses its VI.3.5–3.6 residue congruences to show that the
pairing with this factor is $1$. It also proves independence of the lift of
$\zeta$ by a residue congruence. Those congruence calculations have not yet
been reconstructed as local suppliers in this pair. [F1, step 1.1]

2.1 For uniformizers $\pi,\tau$, the source reduces invariance to
$\langle\pi,\epsilon\rangle_\pi=\langle\pi,\epsilon\rangle_\tau$ for every
principal unit $\epsilon$. Its reduction expands $\epsilon$ in the
Shafarevich basis, uses the uniformizer–generator values, and then extends by
bimultiplicativity. The basis is supplied by [F2]; the uniformizer–generator residue calculations
and the congruences in step 1.2 remain unproved. [F1, F2, step 1.1, step 1.2]
