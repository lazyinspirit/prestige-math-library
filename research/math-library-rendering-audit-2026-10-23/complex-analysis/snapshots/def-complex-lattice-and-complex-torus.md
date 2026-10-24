---
id: def-complex-lattice-and-complex-torus
kind: definition
title: "Complex lattice and quotient torus"
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
landmark: true
deps:
  - def-quotient-topology
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "J. S. Milne, Modular Functions and Modular Forms, Ch. 3, pp. 41-47"
      url: https://www.jmilne.org/math/CourseNotes/MF.pdf
      locator: "Ch. 3, 'Lattices and bases' and 'The quotient C/Lambda', printed pp. 41-43."
    - title: "C. T. McMullen, Advanced Complex Analysis, Math 213a course notes, Ch. 5 §5.1, pp. 79-90"
      url: https://people.math.harvard.edu/~ctm/home/text/class/harvard/213a/10/html/home/course/course.pdf
      locator: "Ch. 5 §5.1, opening lattice and quotient definitions, printed pp. 79-80."
    - title: "NIST Digital Library of Mathematical Functions, §23.2, equations 23.2.1-23.2.17"
      url: https://dlmf.nist.gov/23.2
      locator: "§23.2(i): lattice basis and period-parallelogram conventions."
verification:
  audited: 2026-10-02
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
---

## Definition

A **full complex lattice** (briefly, a *lattice* in this pair) is a subgroup
$\Lambda\subseteq\mathbb C$ of the form

$$\Lambda=\mathbb Z\omega_1+\mathbb Z\omega_2 =\{\,m\omega_1+n\omega_2:m,n\in\mathbb Z\,\},$$

where $\omega_1,\omega_2\in\mathbb C$ are **real-linearly independent**: the only
$(a,b)\in\mathbb R^2$ with $a\omega_1+b\omega_2=0$ is $(a,b)=(0,0)$. The pair
$(\omega_1,\omega_2)$ is then a **lattice basis** of $\Lambda$, and it is
**oriented** when

$$\operatorname{Im}\!\left(\frac{\omega_2}{\omega_1}\right)>0 .$$

The **complex torus** of $\Lambda$ is the quotient

$$T_\Lambda:=\mathbb C/\Lambda=\{\,[z]:=z+\Lambda:z\in\mathbb C\,\}$$

carrying the quotient topology of the class map
$\pi_\Lambda:\mathbb C\to T_\Lambda$, $z\mapsto[z]$
([[def-quotient-topology]]): a subset $W\subseteq T_\Lambda$ is open exactly when
$\pi_\Lambda^{-1}(W)$ is open in $\mathbb C$. Since $\Lambda$ is a subgroup, the
formula

$$[z]+[w]:=[z+w]$$

is well defined — if $z'=z+\lambda$ and $w'=w+\mu$ with $\lambda,\mu\in\Lambda$,
then $z'+w'=z+w+(\lambda+\mu)$ with $\lambda+\mu\in\Lambda$ — and makes
$T_\Lambda$ an abelian group with identity $[0]$ and inverse $-[z]=[-z]$. The
class map is then a surjective group homomorphism with kernel $\Lambda$.

Real-linear independence of $\omega_1,\omega_2$ is equivalent to
$\operatorname{Im}(\omega_2/\omega_1)\ne0$: if $a\omega_1+b\omega_2=0$ with real
$(a,b)\ne(0,0)$, then $b\ne0$ (otherwise $a\omega_1=0$ forces $a=0$) and
$\omega_2/\omega_1=-a/b\in\mathbb R$; conversely $\omega_2/\omega_1=r\in\mathbb
R$ gives $\omega_2-r\omega_1=0$. Consequently every lattice admits an oriented
basis: if $\operatorname{Im}(\omega_2/\omega_1)<0$ one exchanges the two basis
vectors and uses $\operatorname{Im}(\omega_1/\omega_2)>0$.

## Remarks

**Change of basis.** If $(\omega_1,\omega_2)$ and $(\omega_1',\omega_2')$ are two
bases of the same lattice $\Lambda$, then writing $\omega_j'=\sum_k
a_{kj}\omega_k$ exhibits the **transition matrix** $A=(a_{kj})\in M_2(\mathbb
Z)$, and the same argument applied to the inverse change of basis returns the
inverse matrix, so $A\in\mathrm{GL}_2(\mathbb Z)$, that is, $\det A=\pm1$. Thus
two *oriented* bases of one lattice differ by a matrix in
$\mathrm{SL}_2(\mathbb Z)=\{A\in M_2(\mathbb Z):\det A=1\}$: this is what makes
the orientation condition, and not the particular basis, a property of the pair
$(\Lambda,\text{orientation})$.

**Dependence only on the lattice.** The quotient $T_\Lambda$, its topology, its
abelian group structure and the class map depend on $\Lambda$ alone and not on a
chosen basis: a change of basis leaves the set $\Lambda$, hence the equivalence
relation $z\sim w\iff z-w\in\Lambda$, unchanged. The oriented basis in the
definition is a bookkeeping device for the orientation convention
$\operatorname{Im}(\omega_2/\omega_1)>0$ used later when roots, half-periods and
signs are named. The complex structure that upgrades $T_\Lambda$ from a group
with a topology to a Riemann surface is constructed in the next item of this
page, where the discreteness of $\Lambda$ in $\mathbb C$ is also proved.
