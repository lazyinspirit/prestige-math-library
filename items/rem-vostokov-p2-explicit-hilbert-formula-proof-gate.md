---
id: rem-vostokov-p2-explicit-hilbert-formula-proof-gate
kind: remark
title: "The p=2 Vostokov formula is stated, but its pairing proof remains gated"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 14
deps:
  - def-local-hilbert-symbol-over-field-containing-roots-of-unity
  - def-vostokov-residue-expression-odd-prime
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "I. B. Fesenko and S. V. Vostokov, Local Fields and Their Extensions, second edition, Chapter VII §§2.5 and 4"
      url: "https://ivanfesenko.org/wp-content/uploads/2021/10/vol.pdf"
      locator: "Corrected p=2 pairing formula and its proof obligations, printed pp.248 and 256–257; the correction series are defined in VII.2.5 and VI.3.4."
verification:
  precheck: n/a
---

## Remarks

Let $F/\mathbb Q_2$ be finite and contain a primitive $2^n$-th root of unity
$\zeta$. Work in a fixed algebraic closure of $\mathbb Q_2$; let
$\mathbb Q_2^{\mathrm{ur}}$ be its maximal unramified extension, put
$F_0=F\cap\mathbb Q_2^{\mathrm{ur}}$, let $\mathcal O_0$ be the ring of
integers of $F_0$, and let $\widetilde{\mathcal O}$ be the ring of integers
of the completion of $\mathbb Q_2^{\mathrm{ur}}$. Let $\varphi$ be
arithmetic Frobenius, and define
$$
\Delta\!\left(\sum_i c_iX^i\right)=\sum_i\varphi(c_i)X^{2i}.
$$
Let $\mathcal Q$ be the group of series
$$
\mathcal Q=\{X^m u\epsilon(X):m\in\mathbb Z,\ u\in\mathcal O_0^\times, \epsilon(X)\in1+X\mathcal O_0\llbracket X\rrbracket,\ \varphi(u)\equiv u^2\pmod{4\mathcal O_0}\}.
$$
For $f\in\mathcal Q$, put
$$
\ell_X(f)=\frac12\log\left(\frac{f^2}{f^\Delta}\right),
$$
where the quotient lies in $1+(2,X)\widetilde{\mathcal O}\llbracket X\rrbracket$ and the
logarithm is the convergent $(2,X)$-adic logarithm. Choose
$\pi\in F$ with normalized valuation $v_F(\pi)=1$ and
$z(X)\in1+X\mathcal O_0\llbracket X\rrbracket$ with $z(\pi)=\zeta$. Put
$s_j(X)=z(X)^{2^j}-1$ for $j\ge0$, and set
$V(X)=\frac12+s_n(X)^{-1}$. The inverse is in the $2$-adically completed
Laurent ring $\mathcal O_0\{\!\{X\}\!\}$, and products and residues involving
$V$ are computed in $\mathcal O_0\{\!\{X\}\!\}[1/2]$ by convergent
coefficientwise convolution. For $a,b\in F^\times$, choose $A,B\in\mathcal Q$ with
$A(\pi)=a$ and $B(\pi)=b$, and define
$$
\Phi_{A,B}=\frac{A'}A\ell_X(B)-\ell_X(A)\frac{(B^\Delta)'}{2B^\Delta},
$$
$$
\Phi^{(1)}_{A,B}= \left(\frac{A^2-A^\Delta}{2A^\Delta} \frac{B^2-B^\Delta}{2B^\Delta}\right)', \qquad \Phi^{(2)}_{A,B}=X^{-1}v_X(A)v_X(B)\ell_X(1+s_{n-1}(X)),
$$
where $'$ is formal differentiation and $v_X(\sum_i c_iX^i)$ is the
least exponent with nonzero coefficient. Let $e=v_F(2)$, where $v_F$ is
normalized by $v_F(\pi)=1$, and put
$$
h(X)=\frac{\Delta(s_{n-1}(X))-s_n(X)}{2^n}.
$$
For $f=\sum_i c_iX^i\in\mathcal O_0\llbracket X\rrbracket$, write
$f\equiv0\pmod{(2,\deg 2e)}$ when $c_{2j}\in2\mathcal O_0$ for each
integer $0\le j<e$; write $f\equiv g$ when $f-g$ satisfies this condition.
Let $r_0(X)\in X\mathcal O_0[X]$ be the unique polynomial of degree
at most $e-1$ satisfying
$$
\Delta^2r_0+\bigl(1+(2^{n-1}-1)s_{n-1}\bigr)\Delta r_0 +s_{n-1}r_0\equiv h\pmod{(2,\deg 2e)},
$$
and put $r(X)=1+2^{n-1}\Delta(Xr_0(X))$.
Use the local Artin map normalized so a uniformizer maps to arithmetic
Frobenius on each finite unramified extension,
$\operatorname{rec}_F:\widehat{F^\times}\to
\operatorname{Gal}(F^{\mathrm{ab}}/F)$, where $F^{\mathrm{ab}}$ is the maximal
abelian extension in a fixed separable closure. For $a,b\in F^\times$,
choose $\beta$ in the fixed separable closure with $\beta^{2^n}=b$ and define
$(a,b)_{F,2^n}=\operatorname{rec}_F(\bar a)(\beta)/\beta$, with $\bar a$
the image in the profinite completion. The corrected residue formula is
$$
(a,b)_{F,2^n}=\zeta^{\operatorname{Tr}_{F_0/\mathbb Q_2} \operatorname{res}_X\!\left[ \bigl(\Phi_{A,B}+\Phi^{(1)}_{A,B}+\Phi^{(2)}_{A,B}\bigr)r(X)V(X) \right]},
$$
where $\operatorname{res}_X$ extracts the coefficient of $X^{-1}$, the
trace is the field trace, the exponent is reduced modulo $2^n$, and the
formula asserts that the trace-residue is in $\mathbb Z_2$. The source states this formula but assigns
the pairing properties and prime-element invariance needed to establish it to
Exercises VII.2.2–4. This library therefore records the $p=2$ formula as a
proof gate and does not use it as a proved supplier.

## Remarks references

[[def-local-hilbert-symbol-over-field-containing-roots-of-unity]]

[[def-vostokov-residue-expression-odd-prime]]

[I. B. Fesenko and S. V. Vostokov, *Local Fields and Their Extensions*, Chapter VII §2.5, printed p.248](https://ivanfesenko.org/wp-content/uploads/2021/10/vol.pdf)

[I. B. Fesenko and S. V. Vostokov, *Local Fields and Their Extensions*, Chapter VII §4, printed pp.256–257](https://ivanfesenko.org/wp-content/uploads/2021/10/vol.pdf)
