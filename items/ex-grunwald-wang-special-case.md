---
id: ex-grunwald-wang-special-case
kind: example
title: 'The Grunwald–Wang character obstruction over $\mathbb Q_2$'
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 8
deps:
  - def-number-field
  - def-idele-group-of-a-global-field
  - def-idele-class-group-of-a-global-field
  - thm-fundamental-theorem-of-arithmetic
  - thm-multiplicative-group-of-a-finite-field-is-cyclic
  - thm-second-supplement-to-quadratic-reciprocity
  - lem-hensel-factor-lifting-over-a-complete-valued-field
  - thm-absolute-galois-group-of-finite-field-is-procyclic
  - thm-square-criterion-in-q2
proof_strategy: direct
axiom_use: The proof uses explicit finite residue calculations, finite prime factorization and the unramified Frobenius convention; no additional choice axiom is assumed.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "J. S. Milne, Class Field Theory, version 4.03"
      url: "https://www.jmilne.org/math/CourseNotes/CFT.pdf"
      locator: "Chapter VIII §2, Theorem 2.4 and the discussion following it, printed pp.231–233."
    - title: "Song Wang, An Effective Version of the Grunwald–Wang Theorem"
      url: "https://thesis.caltech.edu/6803/1/Wang_s_2002.pdf"
      locator: "Chapter 0 §0.2, special-case statement and Q,m=8 example, printed pp.7–8."
verification: {}
---

## Example

Let $K=\mathbb Q$, $m=8$, and $S=\{2\}$. Define the continuous local
character $\chi_2:\mathbb Q_2^\times\to\mathbb C^\times$ by
$\chi_2(2^r u)=\zeta_8^r$ for $r\in\mathbb Z$ and
$u\in\mathbb Z_2^\times$, where $\zeta_8$ is a primitive eighth root of
unity. It is continuous, trivial on units (the unramified condition), and
has order $8$. Under arithmetic local reciprocity, its value at the
uniformizer $2$ is its value on Frobenius. The Grunwald–Wang
special-case criterion says there is no global idèle-class character of
order $8$ restricting to $\chi_2$, while one of order $16$ exists.

## Example references

[[def-idele-group-of-a-global-field]]

[[def-idele-class-group-of-a-global-field]]

[[thm-fundamental-theorem-of-arithmetic]]

[[thm-multiplicative-group-of-a-finite-field-is-cyclic]]

[[thm-second-supplement-to-quadratic-reciprocity]]

[[lem-hensel-factor-lifting-over-a-complete-valued-field]]

[[thm-absolute-galois-group-of-finite-field-is-procyclic]]

[[thm-square-criterion-in-q2]]

[Wang, *An Effective Version of the Grunwald–Wang Theorem*, 0.2](https://thesis.caltech.edu/6803/1/Wang_s_2002.pdf)

## Facts & Assumptions

**Given:** The exact field, place, character and primitive eighth root in the Example.

[F1] The idèle group is a restricted product, and its class group is its quotient by the diagonal $\mathbb Q^\times$. [[def-idele-group-of-a-global-field]] [[def-idele-class-group-of-a-global-field]]

[F2] Rational numbers have unique finite prime factorizations. [[thm-fundamental-theorem-of-arithmetic]]

[F3] Finite-field multiplicative groups are cyclic, and $2$ is a square modulo an odd prime congruent to $1$ or $7$ modulo $8$. [[thm-multiplicative-group-of-a-finite-field-is-cyclic]] [[thm-second-supplement-to-quadratic-reciprocity]]

[F4] Simple residue roots lift over a complete valued field. [[lem-hensel-factor-lifting-over-a-complete-valued-field]]

[F5] The absolute Galois group of a finite field is procyclic with arithmetic Frobenius as its canonical generator; the dyadic square criterion is as stated. [[thm-absolute-galois-group-of-finite-field-is-procyclic]] [[thm-square-criterion-in-q2]]

## Proof

**Proof technique:** construct the order-sixteen global character explicitly and rule out order eight using local eighth powers of the principal element $16$.

1.1 The valuation decomposition $\mathbb Q_2^\times=2^\mathbb Z\mathbb Z_2^\times$ makes $\chi_2(2^ru)=\zeta_8^r$ a continuous unramified character of exact order $8$. The unramified local quotient has canonical arithmetic Frobenius generator by [F5], and the normalized unramified reciprocity map sends the valuation-one element $2$ to that generator by its defining normalization. Thus the Frobenius value is $\zeta_8$. [F5, given, construct, algebra]

2.1 To test the character of step 1.1, note that for every odd prime $\ell$, the element $16$ is an eighth power in $\mathbb Q_\ell^\times$. Indeed write $2=g^e$ in the cyclic group $\mathbb F_\ell^\times=\langle g\rangle$ of order $h=\ell-1$ using [F3]. If $8\nmid h$, then $\gcd(8,h)$ divides $4e$. If $8\mid h$, then $\ell\equiv1\pmod8$ and [F3] says $2$ is a square, so $e$ is even and $8$ divides $4e$. In either case there is $k$ with $8k\equiv4e\pmod h$, so $g^k$ is an eighth root of $16$ modulo $\ell$. It is a simple root of $X^8-16$ since $\ell$ is odd, and lifts by [F4]. Also $16=(\sqrt2)^8$ in $\mathbb R$. [F3, F4, step 1.1, given, construct, algebra]

3.1 Suppose a global idèle-class character $\chi$ of order $8$ restricts to $\chi_2$. Its kernel is open because its image is finite. The idèle topology in [F1] therefore gives a finite set of primes containing $2$ such that $\chi$ kills every idèle supported on units outside that set. The diagonal principal idèle $16$ can consequently be evaluated as a finite product of local character values. Every odd local value is $1$ by step 2.1, and the real value is $1$ as well, while the dyadic value is $\chi_2(16)=\zeta_8^4=-1$. This contradicts triviality on $\mathbb Q^\times$, proving that no such order-$8$ global character exists. [F1, step 1.1, step 2.1, contradiction, algebra]

4.1 To construct the extension whose order cannot be $8$ by step 3.1, choose a primitive sixteenth root $\zeta_{16}$ with $\zeta_{16}^2=\zeta_8$. In $\mathbb F_{17}^\times$, $3^8=-1$, so $3$ generates the group of order $16$; define $\theta(3)=\zeta_{16}$. Directly $3^{14}=2$, so $\theta(2)=\zeta_8^{-1}$, and $\theta(-1)=-1$. For an idèle $x=(x_v)$, write $x_{17}=17^{v_{17}(x_{17})}u_{17}$ with $u_{17}\in\mathbb Z_{17}^\times$, and define $\Psi(x)=\operatorname{sgn}(x_\infty)\,\theta(u_{17}\bmod17)\prod_{\ell\ne17}\theta(\ell\bmod17)^{-v_\ell(x_\ell)}$. The product is finite by [F1]. It is a continuous character because it is trivial on the full unit groups at all finite places except $17$, locally constant on $\mathbb R^\times$, and factors through the finite residue group at $17$. For a principal rational number, [F2] reduces triviality to the generators $-1$ and the primes: $-1$ is killed because $\theta(-1)=-1$, the prime $17$ is killed, and every other prime $\ell$ contributes the cancelling factors $\theta(\ell)$ and $\theta(\ell)^{-1}$. Thus $\Psi$ descends to $C_\mathbb Q$. On the embedded dyadic factor its value is $\theta(2)^{-v_2}=\zeta_8^{v_2}$, so its restriction is exactly $\chi_2$. On the idèle supported at $17$ with unit $3$, its value is $\zeta_{16}$, so its exact order is $16$. [F1, F2, step 3.1, given, choose, construct, algebra]

5.1 Finally $\eta_4=0$, $\eta_8=\sqrt2\notin\mathbb Q$, so $s=2$ and $a_0=2^4=16$. The rational numbers $-1,2,-2$ are nonsquares; in $\mathbb Q_2$, [F5] makes all three nonsquares as well, so $S_0=\{2\}\subseteq S$. Since $8=2^3$ with $3>s$, this is precisely the special case and its obstruction value is $\chi_2(a_0)=-1$. Steps 3.1 and 4.1 establish the stated nonexistence and existence directly, without invoking the still-held general Grunwald–Wang theorem. [F5, step 3.1, step 4.1, algebra] ∎
