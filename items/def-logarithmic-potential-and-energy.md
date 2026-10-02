---
id: def-logarithmic-potential-and-energy
kind: definition
title: "Logarithmic potential and energy of a positive compactly supported measure"
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - def-radon-measure-on-an-lch-space
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "E. B. Saff, Logarithmic Potential Theory with Applications to Approximation Theory, §§1–3"
      url: "https://arxiv.org/pdf/1010.3760"
    - title: "B. Khoruzhenko, LTCC Potential Theory notes, §§3 and 5"
      url: "https://maths.qmul.ac.uk/~boris/potential_th_notes.pdf"
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
---

## Definition

Identify $\mathbb C$ with $\mathbb R^2$ and let $dA$ be area Lebesgue measure.
All measures below are positive Borel measures. The **logarithmic kernel** is

$$k(z,w):=\log\frac1{|z-w|}\qquad(z,w\in\mathbb C),$$

with the diagonal value $k(w,w):=+\infty$; here $\log$ is the natural
logarithm. The map $k$ is Borel on $\mathbb C\times\mathbb C$ and
$k(z,w)=+\infty$ exactly when $z=w$.

The kernel is used with the following two standing hypotheses, each stated
separately where it is needed.

**Potential.** Let $\mu$ be a finite positive Borel measure of compact support.
The **logarithmic potential** of $\mu$ is

$$U^\mu(z):=\int_{\mathbb C}k(z,w)\,d\mu(w)\in(-\infty,+\infty]\qquad(z\in\mathbb C).$$

The integral is the extended integral of the Borel function $w\mapsto k(z,w)$,
which is bounded below on the fixed compact set $\operatorname{supp}\mu$ and
takes the value $+\infty$ only at $w=z$. Its negative is the **subharmonic
normalisation**

$$p_\mu(z):=-U^\mu(z)=\int_{\mathbb C}\log|z-w|\,d\mu(w)\in[-\infty,+\infty).$$

For the zero measure both extended integrals are empty sums; we record the
clauses $U^0:=0$ and $p_0:=0$.

**Energy.** Let $\mu$ be a finite positive Borel measure of compact support.
Choose $R>\operatorname{diam}(\operatorname{supp}\mu)$ and put
$k_R(z,w):=k(z,w)+\log R$. Then $k_R\ge0$ on
$\operatorname{supp}\mu\times\operatorname{supp}\mu$, and the
**logarithmic energy** of $\mu$ is

$$I(\mu):=\int_{\mathbb C}\int_{\mathbb C}k_R(z,w)\,d\mu(z)\,d\mu(w)-\mu(\mathbb C)^2\log R\in(-\infty,+\infty].$$

Here the double integral of the nonnegative Borel function $k_R$ is the
iterated extended integral, well defined by
[[thm-tonelli-theorem-for-sigma-finite-product-spaces]], and the value $I(\mu)$
does not depend on the choice of $R>\operatorname{diam}(\operatorname{supp}\mu)$.
For the zero measure, whose support is empty and has no diameter, we record the
separate clause $I(0):=0$; this is also the value of the displayed formula for
every $R>0$ (both the double integral over the empty carrier and the subtracted
term $\mu(\mathbb C)^2\log R$ are $0$), so the clause is the consistent
extension of the definition and is used only to avoid mentioning
$\operatorname{diam}\varnothing$.
For bounded Borel $B$ the finiteness $\mu(B)<\infty$ is that of
[[def-radon-measure-on-an-lch-space]].

**Mixed energy.** Let $\mu,\nu$ be finite positive Borel measures of compact
support and choose $R>\operatorname{diam}(\operatorname{supp}\mu\cup
\operatorname{supp}\nu)$. The **mixed energy** of $\mu$ and $\nu$ is

$$I(\mu,\nu):=\int_{\mathbb C}\int_{\mathbb C}k_R(z,w)\,d\mu(z)\,d\nu(w)-\mu(\mathbb C)\nu(\mathbb C)\log R\in(-\infty,+\infty],$$

again independent of the choice of $R$. If $\mu=0$ or $\nu=0$ we record the
clause $I(\mu,\nu):=0$; for $\mu=0$ the displayed formula gives $0$ for every
$R>0$, and symmetrically for $\nu=0$, so this is again a consistent extension
covering the case in which $\operatorname{supp}\mu\cup\operatorname{supp}\nu=\varnothing$.
When $I(\mu)=I(\mu,\mu)$ the same symbol is used, and
$I(\mu,\nu)=I(\nu,\mu)$ because $k$ is symmetric.

## Remarks

**Why the shift is legitimate.** Since $|z-w|\le\operatorname{diam}(\operatorname{supp}\mu)<R$
on the product of the supports, the two extensions of $I(\mu)$ obtained from
two admissible radii $R<S$ agree by Tonelli: the nonnegative integrands
$k+\log R$ and $k+\log S$ differ by the constant $\log(S/R)$, whose integral
against $\mu\otimes\mu$ is $\mu(\mathbb C)^2\log(S/R)$.

**Unbounded support.** For a finite positive Borel measure $\mu$ whose support
is not compact, $U^\mu(z)$ is defined by the extended integral when
$\int\log^+|z-w|\,d\mu(w)<\infty$, so its negative part has finite integral
and $U^\mu(z)\in(-\infty,+\infty]$. For energy, put
$A:=\iint k^+\,d\mu\,d\mu$ and $B:=\iint k^-\,d\mu\,d\mu$, both
nonnegative extended integrals defined by Tonelli. When at least one of $A,B$
is finite, define $I(\mu):=A-B\in[-\infty,+\infty]$. In particular,
$A<\infty$ and $B=+\infty$ gives $I(\mu)=-\infty$; if $B<\infty$, the
value lies in $(-\infty,+\infty]$. If both parts are infinite, $I(\mu)$ is
undefined. The shifted compact-support formulas above are not used on
unbounded supports; the capacity theory of this page uses compactly supported
measures only.

**Finiteness on compact support.** If $\operatorname{diam}(\operatorname{supp}\mu)>0$,
then $k\ge-\log\operatorname{diam}(\operatorname{supp}\mu)$ on the product of
the support with itself, so $I(\mu)>-\infty$; if
$\operatorname{supp}\mu=\{a\}$ then $I(\delta_a)=+\infty$. The diagonal value
$+\infty$ is not a removable convention: for every $\mu$ with
$\mu(\{a\})>0$ the values $U^\mu(a)=+\infty$ and $I(\mu)=+\infty$ depend on
which value is assigned at $z=w$.
