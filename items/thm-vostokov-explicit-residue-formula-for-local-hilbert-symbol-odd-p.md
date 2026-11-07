---
id: thm-vostokov-explicit-residue-formula-for-local-hilbert-symbol-odd-p
kind: theorem
title: "Vostokov explicit residue formula for the local p^n-Hilbert symbol, odd p"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 15
deps:
  - def-local-field-valuation-ring-uniformizer-and-residue-field
  - def-local-hilbert-symbol-over-field-containing-roots-of-unity
  - lem-local-hilbert-symbol-is-well-defined-and-bilinear
  - def-vostokov-residue-expression-odd-prime
  - lem-vostokov-shafarevich-basis-for-principal-units
  - lem-vostokov-residue-pairing-choice-independence
  - thm-local-class-formation-for-finite-residue-local-field
  - thm-local-artin-reciprocity-and-norm-index
  - def-axiom-of-choice
  - def-dependent-choice
proof_strategy: direct
axiom_use: >-
  The formal expression and source reduction are choice-free after local field
  data are fixed. The current local Artin/Class-formation instantiation uses
  AC and DC; the choice-independence and residue comparisons remain unresolved.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "I. B. Fesenko and S. V. Vostokov, Local Fields and Their Extensions, second edition, Chapter VI §5 and Chapter VII §§1–4"
      url: "https://ivanfesenko.org/wp-content/uploads/2021/10/vol.pdf"
      locator: "Shafarevich basis Proposition (5.2), printed pp.233–234; complete odd-p formula and proof, printed pp.255–257."
    - title: "J. S. Milne, Class Field Theory, version 4.03, Chapter III §4"
      url: "https://www.jmilne.org/math/CourseNotes/CFT.pdf"
      locator: "The local Kummer cup product and norm criterion, Theorem 4.4, printed pp.112–114."
verification: {}
---

## Statement

Assume AC and DC for the local class-formation and local Artin-reciprocity
interfaces used in the proof route below. Let $p$ be an odd prime, $n\ge1$,
and let $F/\mathbb Q_p$ be finite with a primitive $p^n$-th root of unity
$\zeta$. In a fixed algebraic closure of $\mathbb Q_p$, let
$\mathbb Q_p^{\mathrm{ur}}$ be the maximal unramified extension, put
$F_0=F\cap\mathbb Q_p^{\mathrm{ur}}$, and let $\mathcal O_0$ be its ring
of integers. Let $\widetilde{\mathcal O}$ be the ring of integers of the
completion of $\mathbb Q_p^{\mathrm{ur}}$, and let $\varphi$ be its
arithmetic Frobenius, inducing $x\mapsto x^p$ on the residue field. Fix a
uniformizer $\pi$ of $F$ and choose
$z(X)\in1+X\mathcal O_0\llbracket X\rrbracket$ with $z(\pi)=\zeta$. Define
$$
\Delta\left(\sum_i c_iX^i\right)=\sum_i\varphi(c_i)X^{pi}, \qquad \ell(f)=\frac1p\log\left(\frac{f^p}{f^\Delta}\right) \quad(f\in\widetilde{\mathcal O}((X))^\times),
$$
where $f^p/f^\Delta\in1+p\widetilde{\mathcal O}\llbracket X\rrbracket$ and $\log$
is the convergent $p$-adic logarithm. Put
$s(X)=z(X)^{p^n}-1$ and $V(X)=\frac12+s(X)^{-1}$.
Write $\mathcal O_0\{\!\{X\}\!\}$ for the $p$-adic completion of
$\mathcal O_0((X))$: its elements are two-sided series
$\sum_{i\in\mathbb Z}a_iX^i$ with $a_i\in\mathcal O_0$ and
$a_i\to0$ $p$-adically as $i\to-\infty$. Multiplication uses $p$-adically
convergent coefficientwise convolution. The inverse $s^{-1}$ is taken in
this completed ring, and residues of products are their $X^{-1}$ coefficients. For $a,b\in F^\times$,
choose Laurent-series units $A,B\in\mathcal O_0((X))^\times$ with
$A(\pi)=a$ and $B(\pi)=b$, and set
$$
\Phi_{A,B}(X)=\frac{A'(X)}{A(X)}\ell(B(X)) -\ell(A(X))\frac{(B(X)^\Delta)'}{pB(X)^\Delta}.
$$
Let $F_s$ be a separable closure and $F^{\mathrm{ab}}$ its maximal abelian
subextension. Use the local Artin map
$\operatorname{rec}_F:\widehat{F^\times}\to
\operatorname{Gal}(F^{\mathrm{ab}}/F)$ normalized so a uniformizer maps to
arithmetic Frobenius on every finite unramified extension; write $\bar a$
for the image of $a$ in the profinite completion and choose $\beta\in F_s$
with $\beta^{p^n}=b$. Define
$(a,b)_{F,p^n}=\operatorname{rec}_F(\bar a)(\beta)/\beta$. Then the
trace-residue is in $\mathbb Z_p$ and, reduced modulo $p^n$ in the exponent,
$$
(a,b)_{F,p^n} =\zeta^{\operatorname{Tr}_{F_0/\mathbb Q_p} \operatorname{res}_X\bigl(\Phi_{A,B}(X)V(X)\bigr)},
$$
where $\operatorname{res}_X$ extracts the coefficient of $X^{-1}$ and the
trace is the field trace. The equality holds for every such choice of lifts,
$z(X)$, and uniformizer.

## Statement references

[[def-local-field-valuation-ring-uniformizer-and-residue-field]]

[[def-local-hilbert-symbol-over-field-containing-roots-of-unity]]

[[def-vostokov-residue-expression-odd-prime]]

[[lem-vostokov-shafarevich-basis-for-principal-units]]

[[lem-vostokov-residue-pairing-choice-independence]]

[I. B. Fesenko and S. V. Vostokov, *Local Fields and Their Extensions*, Chapter VII §4](https://ivanfesenko.org/wp-content/uploads/2021/10/vol.pdf)

## Facts & Assumptions

**Given:** The finite extension, root of unity, uniformizer and formal-series
choices in the Statement, together with the supplied local reciprocity data.

[F1] The Hilbert symbol is defined by the action of local reciprocity on an
$n$-th root of its second argument. [[def-local-hilbert-symbol-over-field-containing-roots-of-unity]]

[F2] The residue expression and its $p$-adic logarithm have the definitions
given in the formal-series item. [[def-vostokov-residue-expression-odd-prime]]

[F3] For finite abelian extensions, the local Artin map has norm group as its
kernel and arithmetic Frobenius normalization. The current local Artin
carrier assumes AC and DC. [[thm-local-artin-reciprocity-and-norm-index]]

[F4] The local class-formation invariant is an isomorphism with restriction
scaling by subgroup index. Its local-unit and finite-relative-order proof
arguments are now independently accepted; the formal-residue congruence
obligations [A2] below remain unresolved.
[[thm-local-class-formation-for-finite-residue-local-field]]

[F5] A finite extension of $\mathbb Q_p$ is complete and discretely valued,
with finite residue field, a valuation ring, and a uniformizer.
[[def-local-field-valuation-ring-uniformizer-and-residue-field]]

[A1] The Shafarevich decomposition of principal units is supplied by the
assigned local lemma.
[[lem-vostokov-shafarevich-basis-for-principal-units]]

[A2] Choice independence, bilinearity and uniformizer invariance of the
formal residue pairing are an assigned local lemma; its complete congruence
proof is not yet established. [[lem-vostokov-residue-pairing-choice-independence]]

[A3] AC and DC are assumed for the local class-formation and local
Artin-reciprocity suppliers in this proof route. [[def-axiom-of-choice]]
[[def-dependent-choice]]

## Proof

**Proof technique:** compare the residue pairing with the Hilbert symbol on a
Shafarevich basis, then extend by bimultiplicativity.

**Given:** The data above.

1.1 The source proof first writes every principal unit as
$E_X(w(X))|_{X=\pi}\omega(c)$ using the Shafarevich basis [A1]. On these
generators it computes $(\pi,\omega(c))_{p^n}=\zeta^{\operatorname{Tr}(c)}$,
while the residue expression has the same value; the other basis generators
have value $1$. The local calculation of those generator values is not
reconstructed from [F3]–[F4] here, so this comparison remains an unresolved
proof obligation rather than a completed derivation. [F1, F2, F3, F4, F5, A1, A3]

1.2 To extend the comparison to arbitrary first and second arguments, the
source uses bilinearity, independence of formal-series lifts, and
uniformizer invariance of the residue pairing [A2], then decomposes each
element as a uniformizer power times a residue representative and a principal
unit. The choice-independence proof [A2] and the generator comparison remain
unresolved; this carrier records the full claim and source route but does not
assert a completed local proof. [F1, F2, F3, F4, F5, A1, A2, A3, step 1.1]
