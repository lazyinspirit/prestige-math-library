---
id: lem-vostokov-formal-exponential-integrality-and-inversion
kind: lemma
title: "Integrality and inversion of the formal Artin–Hasse–Shafarevich exponential"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - def-local-field-valuation-ring-uniformizer-and-residue-field
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "I. B. Fesenko and S. V. Vostokov, Local Fields and Their Extensions, second edition"
      url: "https://ivanfesenko.org/wp-content/uploads/2021/10/vol.pdf"
      locator: "VI.2.1–2.2 and first observation of VI.2.4, printed pp.215–217; the proof below uses a coefficient induction for integrality."
verification: {}
---

## Statement

Let $p$ be odd, let $K_0/\mathbb Q_p$ be a finite unramified extension,
let $R$ be its valuation ring, and let $\varphi$ be its arithmetic Frobenius.
Take as given the complete discrete valuation on $R$ with uniformizer $p$
and the $\mathbb Z_p$-automorphism $\varphi$ satisfying
$\varphi(c)\equiv c^p\pmod{pR}$ for every $c\in R$.
For series over $K_0$, define
$$
\Delta\left(\sum_i c_iX^i\right)=\sum_i\varphi(c_i)X^{pi}.
$$
All logarithms and exponentials below are formal series over $K_0$ with,
respectively, constant terms $1$ and $0$ in their arguments. For $f\in XR\lbrack\lbrack X\rbrack\rbrack$
and $g\in1+XR\lbrack\lbrack X\rbrack\rbrack$, set
$$
E_X(f)=\exp\left(\sum_{j\ge0}p^{-j}\Delta^j f\right),\qquad \ell_X(g)=\log g-p^{-1}\Delta(\log g)=p^{-1}\log\left(g^p/(\Delta g)\right).
$$
Then $E_X(f)\in1+XR\lbrack\lbrack X\rbrack\rbrack$ and $\ell_X(g)\in XR\lbrack\lbrack X\rbrack\rbrack$. These maps
are mutually inverse group isomorphisms from the additive group $XR\lbrack\lbrack X\rbrack\rbrack$
to the multiplicative group $1+XR\lbrack\lbrack X\rbrack\rbrack$; they also respect the usual
$\mathbb Z_p$-module structures. If $m\ge1$ and
$f\equiv cX^m\pmod{X^{m+1}}$, then
$E_X(f)\equiv1+cX^m\pmod{X^{m+1}}$.
For any finite extension $F/K_0$ and any uniformizer $\pi$ of $F$,
the integral series $E_X(f)$ can be evaluated at $\pi$, with value in
$1+\mathfrak m_F$. In particular, for $a\in R$ and
$s\in XR\lbrack\lbrack X\rbrack\rbrack$, $E_X(as)|_{X=\pi}$ is well defined as a principal unit.

## Statement references

[[def-local-field-valuation-ring-uniformizer-and-residue-field]]

[Fesenko–Vostokov, VI.2](https://ivanfesenko.org/wp-content/uploads/2021/10/vol.pdf)

## Facts & Assumptions

**Given:** The finite unramified coefficient field, its valuation ring and
arithmetic Frobenius, and the formal-series conventions in the Statement.

[F1] In the prescribed coefficient-ring data, $R$ is complete with uniformizer $p$, and
$\varphi(c)\equiv c^p\pmod{pR}$ for $c\in R$. A finite extension $F$
is complete and $v_F(\pi)>0$ for its uniformizer.
The linked definition supplies the local valuation and completeness conventions;
the Frobenius is supplied in the hypotheses, not constructed by that definition.
[[def-local-field-valuation-ring-uniformizer-and-residue-field]]

## Proof

**Given:** The data in the Statement. Coefficient operations take place in
$K_0\lbrack\lbrack X\rbrack\rbrack$ until integrality has been proved.

1.1 The operator $\Delta$ is a ring endomorphism fixing $\mathbb Q_p$, and it multiplies positive $X$-orders by $p$. Thus $L(f)=\sum_{j\ge0}p^{-j}\Delta^j f$ is a well-defined formal series: each coefficient has only finitely many summands. Telescoping gives $(1-\Delta/p)L(f)=f$. Conversely, for every $h\in XK_0\lbrack\lbrack X\rbrack\rbrack$, $L((1-\Delta/p)h)=h$, by the same coefficientwise telescoping. Formal logarithm and exponential are inverse on $1+XK_0\lbrack\lbrack X\rbrack\rbrack$ and $XK_0\lbrack\lbrack X\rbrack\rbrack$: differentiating their defining series gives the inverse identities, since the constants agree and differentiation has zero kernel on positive-degree series over a characteristic-zero field. They convert products to sums and sums to products by multiplication of the formal series. They commute with $\Delta$ because their coefficients are rational. Consequently $\ell_X=(1-\Delta/p)\log$ and $E_X=\exp L$ are already inverse group maps over $K_0$. [F1, given, algebra]

2.1 We establish an integrality criterion. Suppose $H\in1+XK_0\lbrack\lbrack X\rbrack\rbrack$ and $Q=H^p/(\Delta H)\in1+pXR\lbrack\lbrack X\rbrack\rbrack$. Write $H=1+\sum_{r\ge1}h_rX^r$ and assume inductively that $h_1,\ldots,h_{m-1}\in R$. Put $T=1+\sum_{r<m}h_rX^r$. The coefficient of $X^m$ in $H^p-T^p$ is $ph_m$, whereas $\Delta H-\Delta T$ has order at least $pm>m$. From $H^p=(\Delta H)Q$ it follows that $ph_m=[X^m]\bigl((\Delta T)Q-T^p\bigr)$. All series on the right are integral. Moreover, $\Delta T\equiv T^p\pmod p$ by Frobenius on coefficients and the characteristic-$p$ binomial identity, and $Q\equiv1\pmod p$. Hence $ph_m\in pR$, so $h_m\in R$. This starts with $T=1$ for $m=1$ and proves $H\in1+XR\lbrack\lbrack X\rbrack\rbrack$. [F1, step 1.1, algebra]

3.1 Apply this criterion to $H=E_X(f)$. The identity $pL(f)-\Delta L(f)=pf$ gives $H^p/(\Delta H)=\exp(pf)$. For every $r\ge1$, the coefficient multiplier $p^r/r!$ lies in $p\mathbb Z_p$: indeed $v_p(r!)=\sum_{k\ge1}\lfloor r/p^k\rfloor\le r/(p-1)$, which is strictly less than $r$ for odd $p$ (also for $r=1$). Since $f$ has positive degree, coefficientwise this proves $\exp(pf)\in1+pXR\lbrack\lbrack X\rbrack\rbrack$. Step 2.1 proves integrality of $E_X(f)$. [F1, step 1.1, step 2.1, algebra]

4.1 For $g\in1+XR\lbrack\lbrack X\rbrack\rbrack$, coefficientwise Frobenius gives $g^p\equiv\Delta g\pmod p$. Its integral denominator has constant term $1$, so $g^p/(\Delta g)=1+pu$ for $u\in XR\lbrack\lbrack X\rbrack\rbrack$. Therefore $\ell_X(g)=\sum_{r\ge1}\frac{(-1)^{r-1}p^{r-1}}{r}u^r$. Here $r-1-v_p(r)\ge0$ for every positive integer $r$. Each coefficient has only finitely many summands, proving $\ell_X(g)\in XR\lbrack\lbrack X\rbrack\rbrack$. Together with steps 1.1 and 3.1 this gives mutually inverse group isomorphisms on the asserted integral domains. Both $L$ and $1-\Delta/p$ commute with multiplication by any $a\in\mathbb Z_p$. The ordinary power $g^a$ is the binomial series, whose coefficients are integral since $\binom ar$ is the $p$-adic limit of integer binomial coefficients, and it agrees formally with $\exp(a\log g)$. It follows that $E_X(af)=E_X(f)^a$ and $\ell_X(g^a)=a\ell_X(g)$. [F1, step 1.1, step 3.1, algebra]

5.1 If $f\equiv cX^m\pmod{X^{m+1}}$, all terms $\Delta^j f$ with $j\ge1$ have order at least $pm>m$, and powers of $L(f)$ of exponent at least $2$ have order at least $2m>m$. Hence $E_X(f)\equiv1+cX^m\pmod{X^{m+1}}$. Finally, if $E_X(f)=1+\sum_{r\ge1}b_rX^r$, step 3.1 gives $b_r\in R$, so $v_F(b_r\pi^r)\ge r\to\infty$. Completeness of $F$ gives convergence at $\pi$ and places its value in $1+\mathfrak m_F$. Taking $f=as$ proves the last assertion. [F1, step 3.1, step 4.1, algebra] ∎

## Remarks

Evaluation here is evaluation of the resulting integral series. No exchange
of evaluation with the rational formal exponential or logarithm is asserted.
This lemma does not establish the finite principal-unit basis, the primary
trace coordinate, or any residue-pairing invariance.
