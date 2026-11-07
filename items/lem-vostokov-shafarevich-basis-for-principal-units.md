---
id: lem-vostokov-shafarevich-basis-for-principal-units
kind: lemma
title: "Shafarevich decomposition of principal units for the Vostokov formula"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 5
deps:
  - def-local-field-valuation-ring-uniformizer-and-residue-field
  - def-vostokov-residue-expression-odd-prime
  - lem-vostokov-formal-exponential-integrality-and-inversion
  - lem-vostokov-arbitrary-lift-primary-quotient-basis
  - lem-vostokov-primary-pn-trace-for-arbitrary-lift
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "I. B. Fesenko and S. V. Vostokov, Local Fields and Their Extensions, second edition, Chapter VI §5.2"
      url: "https://ivanfesenko.org/wp-content/uploads/2021/10/vol.pdf"
      locator: "Proposition (5.2), the Shafarevich basis of principal units, printed pp.233–234."
verification: {}
---

## Statement

Let $p$ be odd, let $F/\mathbb Q_p$ be finite, and suppose that $F$
contains a primitive $p^n$-th root of unity, where $n$ is maximal with this
property. Work in a fixed algebraic closure of $\mathbb Q_p$, let
$\mathbb Q_p^{\mathrm{ur}}$ be its maximal unramified extension, put
$F_0=F\cap\mathbb Q_p^{\mathrm{ur}}$, and let $\mathcal O_0$ be the ring
of integers of $F_0$. Let $\widetilde{\mathcal O}$ be the ring of integers
of the completion of $\mathbb Q_p^{\mathrm{ur}}$, and let $\varphi$ be
arithmetic Frobenius on it, restricting to $F_0$. Fix a uniformizer $\pi$
of $F$, normalize $v_F(\pi)=1$, and put $e=v_F(p)$ and $e_1=e/(p-1)$.
Choose $z(X)\in1+X\mathcal O_0\lbrack\lbrack X\rbrack\rbrack$ with $z(\pi)=\zeta$, put
$s(X)=z(X)^{p^n}-1$, and define
$$ \Delta\left(\sum_i c_iX^i\right)=\sum_i\varphi(c_i)X^{pi}, \qquad E_X(f)=\exp\left(\sum_{j\ge0}\frac{\Delta^j f}{p^j}\right) \quad(f\in X\widetilde{\mathcal O}\lbrack\lbrack X\rbrack\rbrack). $$
The displayed power series converges in the formal power-series topology.
For $a\in\mathcal O_0$, set
$\omega(a)=E_X(a\,s(X))|_{X=\pi}$, with evaluation given by convergence
at the uniformizer. A principal unit means an element of
$1+\mathfrak m_F$, where $\mathfrak m_F$ is the maximal ideal of the
valuation ring of $F$. Then for every principal unit $\epsilon$ there are
$a\in\mathcal O_0$ and coefficients $\alpha_i\in\mathcal O_0$ such that
$$ w(X)=\sum_{\substack{1\le i<pe_1\\p\nmid i}}\alpha_iX^i, \qquad \epsilon=E_X(w(X))|_{X=\pi}\,\omega(a). $$
In these coordinates, $\epsilon\in F^{\times p^n}$ if and only if
$\operatorname{Tr}_{F_0/\mathbb Q_p}(a)\equiv0\pmod{p^n}$ and every
coefficient $\alpha_i$ of $w(X)$ belongs to $p^n\mathcal O_0$.

## Statement references

[[def-local-field-valuation-ring-uniformizer-and-residue-field]]

[[def-vostokov-residue-expression-odd-prime]]

[I. B. Fesenko and S. V. Vostokov, *Local Fields and Their Extensions*, Chapter VI §5.2](https://ivanfesenko.org/wp-content/uploads/2021/10/vol.pdf)

## Facts & Assumptions

**Given:** The local number field, root of unity, uniformizer and
Artin–Hasse–Shafarevich notation in the Statement.

[F1] The input field is complete, discretely valued, and has finite residue
field. [[def-local-field-valuation-ring-uniformizer-and-residue-field]]

[F2] The residue-expression convention supplies the associated
$\mathcal O_0$, Frobenius, and special logarithm. [[def-vostokov-residue-expression-odd-prime]]

[F3] The formal exponential is integral, additive to multiplicative,
$\mathbb Z_p$-linear, and has the specified leading term. [[lem-vostokov-formal-exponential-integrality-and-inversion]]

[F4] For any permitted lift, the principal-unit classes with prescribed
independent leading terms and one primary element of nonzero residue trace
form a basis modulo $p^n$-th powers. [[lem-vostokov-arbitrary-lift-primary-quotient-basis]]

[F5] For every permitted lift, a primary element is a $p^n$-th power
exactly when its coefficient trace is divisible by $p^n$. [[lem-vostokov-primary-pn-trace-for-arbitrary-lift]]

## Proof

**Proof technique:** use the arbitrary-lift finite quotient basis, obtain
topological generation, and compare the primary class by its trace.

**Given:** The data above.

1.1 Let $k$ have order $p^f$. Choose $\theta_1,\ldots,\theta_f\in\mathcal O_0$ whose residues form an $\mathbb F_p$-basis of $k$. They form a $\mathbb Z_p$-basis of $\mathcal O_0$: successively subtract the unique residue combination and divide by $p$, and use completeness for existence; reduction at the first nonzero digit proves uniqueness. The residue trace is nonzero, since its defining polynomial has degree less than $|k|$; lift a nonzero-trace element and divide by its unit trace to obtain $a_0\in\mathcal O_0$ with $\operatorname{Tr}(a_0)=1$. Put $g_{ij}=E_X(\theta_jX^i)|_{X=\pi}$ and $b=\omega(a_0)$. By [F3], $g_{ij}\equiv1+\theta_j\pi^i\pmod{\pi^{i+1}}$. The trace of $\bar a_0$ is nonzero, so [F4] gives a basis of $Q=U_1/U_1^{p^n}$ consisting of the classes of all $g_{ij}$ and $b$. [F1, F2, F3, F4, given, choose, construct, algebra]

2.1 The basis in step 1.1 spans $U_1/U_1^p$. Repeatedly expressing a unit as a product of generators times a $p$th power shows by finite induction that they span $U_1/U_1^{p^r}$ for every $r\ge1$. For each $m$, the successive quotients $U_j/U_{j+1}$ are the additive finite $p$-group of $k$, so $U_1/U_m$ is a finite $p$-group; for large $r$, $U_1^{p^r}\subseteq U_m$. The integer-generated subgroup of the displayed units is therefore dense in $U_1$. [F1, step 1.1, given, construct, algebra]

3.1 The product map from the finite power $\mathbb Z_p^D$ of exponent vectors to $U_1$ is continuous: on every finite quotient $U_1/U_m$, a large power of $p$ kills all classes. The domain is compact by the finite-branching $p$-adic digit construction, so its image is closed in the Hausdorff unit group. By step 2.1 the image is also dense, hence all of $U_1$. Thus any $\epsilon$ has an exact expression $\epsilon=\prod_{i,j}g_{ij}^{\beta_{ij}}b^v$ with $\beta_{ij},v\in\mathbb Z_p$. Put $\alpha_i=\sum_j\beta_{ij}\theta_j$ and $a=va_0$. The $\mathbb Z_p$-linearity and multiplicativity in [F3] give exactly $\epsilon=E_X(\sum_i\alpha_iX^i)|_{X=\pi}\,\omega(a)$. [F1, F3, step 1.1, step 2.1, given, construct, algebra]

4.1 Now consider any representation of the displayed form, with arbitrary $\alpha_i,a\in\mathcal O_0$. Write $\alpha_i=\sum_j\beta_{ij}\theta_j$ in the integral basis from step 1.1 and put $v=\operatorname{Tr}(a)$. Since $a-va_0$ has trace zero, [F5] says $\omega(a-va_0)\in F^{\times p^n}$. Both it and its quotient with $b^v$ are principal units, and a $p^n$th root of a principal unit is a principal unit: its valuation is zero and its residue has $p$-power order in $k^\times$, hence is 1. Thus $[\omega(a)]=[b]^v$ in $Q$. By the basis of step 1.1, the represented $\epsilon$ is a $p^n$th power if and only if every $\beta_{ij}$ and $v$ is divisible by $p^n$; the integral basis makes this equivalent to every $\alpha_i\in p^n\mathcal O_0$ and $\operatorname{Tr}(a)\equiv0\pmod{p^n}$. This proves the original full Statement for every permitted lift. [F3, F4, F5, step 1.1, given, algebra] ∎

## Lift-scope note

The additional assertion that $\omega(a)$ always has depth at least
$pe_1$ for every lift $z$ permitted by the Statement is false. For example,
with $p=3$, $\pi^{20}+3\pi^{10}+3=0$,
$z(X)=(1+X^{10})(1+X(3+3X^{10}+X^{20}))$, and $a=1$, the value
$z(\pi)=1+\pi^{10}$ is a primitive cube root, while $\omega(1)$ has
depth $9<30=pe_1$. The calculation and the maximality check for $n=1$ are
recorded in the batch-93 omega-trace research evidence. This refutes that
extra depth assertion, not the preserved decomposition Statement. The proof
uses the supplied quotient and trace results, which control classes modulo
the required powers rather than asserting a depth bound for arbitrary lifts.
