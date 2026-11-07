---
id: def-b-l-s-finite-trace-certificate-data
kind: definition
title: Finite BLS Trace-Formula Certificate Data and Interval Inputs
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 10
deps:
  - alg-bls-exact-rational-interval-transcript-core
  - def-dirichlet-character-modulo-q
  - def-primitive-dirichlet-character-and-conductor
  - thm-booker-lee-strombergsson-twist-minimal-sieve
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "A. Booker, M. Lee, and A. Strömbergsson, Twist-Minimal Trace Formulas and the Selberg Eigenvalue Conjecture"
      url: "https://arxiv.org/pdf/1803.06016v2"
      locator: "§5, numerical remarks: test-function parameters, character multiplicities, class-number inputs, and interval calculations."
    - title: "A. Booker and A. Strömbergsson, Numerical Computations with the Trace Formula and the Selberg Eigenvalue Conjecture"
      url: "https://www.degruyterbrill.com/document/doi/10.1515/CRELLE.2007.047/pdf"
      locator: "§4: positive quadratic-form criterion used for finite eigenvalue verification."
---

## Definition

A finite trace-formula certificate record for a level $N$, an even minimal
Dirichlet character $\chi$ modulo $N$, and a parity $\epsilon\in\{0,1\}$
consists of:

- integers $M\ge1$ and $X\ge1$, with $\delta=X/(2M)$;
- a rational vector $(x_0,\ldots,x_{M-1})$ with $\sum_jx_j=1$, defining
  $$
h(r)=\left(\operatorname{sinc}^2\!\left(\frac{\delta r}{2}\right)\sum_{j=0}^{M-1}x_j\cos(j\delta r)\right)^2;
$$
- the exact integer
  $$
m_\chi=\#\{\psi\bmod N:\psi(-1)=1,\ \psi^2=1,\ \operatorname{cond}(\psi)\operatorname{cond}(\chi\psi)\mid N\};
$$
- a stated lower bound $n_{\chi,\epsilon}$ for the known Artin contributions;
- the finite class-number table for every quadratic field $\mathbb Q(\sqrt{t^2\pm4})$ used in the chosen trace sums;
- rational interval enclosures for every coefficient in the quadratic form
  $Q_{\chi,\epsilon}(x_0,\ldots,x_{M-1})$ obtained from the trace formula, together
  with the interval-backend record and the final enclosure for $Q_{\chi,\epsilon}(x)$.

Here $\operatorname{sinc}(u)=\sin(u)/u$ for $u\ne0$ and
$\operatorname{sinc}(0)=1$. The exact normalized quadratic form is
$$
Q_{\chi,\epsilon}(x_0,\ldots,x_{M-1})= \frac1{m_\chi}\left( \sum_{\lambda>0}\operatorname{tr}\!\left( \left.\frac12(T_1+(-1)^\epsilon T_{-1})\right|A_\lambda^{\min}(\chi)\right) h\!\left(\sqrt{\lambda-\frac14}\right) -n_{\chi,\epsilon}h(0)\right),
$$
with $T_1$ the identity and $T_{-1}f(z)=f(-\overline z)$.

Each interval is a pair of rational endpoints $[a,b]$ with $a\le b$, attached
to a named exact real quantity and a record of the interval computation that
claims to enclose it. A record is well-formed only when all lists are finite,
all endpoints are rational, the coefficient dimensions agree with $M$, and
the indicated character, parity, conductor, and level data are consistent.
The source's reported verification uses $M=200$, $X\le40$, and class numbers
through $t\le e^{20}$; these are source-specific choices, not requirements of
this general data definition. Presence of a record alone does not mean that its
intervals are valid or that any computation was accepted.

### Exact rational core representation

A core record supplies positive integers $M,X$, the rational vector $x$, a
pivot $0\le k<M$, a positive integer $m$, an $M\times M$ table of rational
coefficient intervals $C_{ij}$, and a rational interval transcript under
[[alg-bls-exact-rational-interval-transcript-core]]. Rational encodings and
transcript tags are exactly those of that algorithm. Each table cell is a
separate named leaf, indexed by its ordered pair $(i,j)$; a constant is an
exact singleton interval. The checker itself constructs the expression
$$
Q(x)=\sum_{i,j=0}^{M-1}c_{ij}x_ix_j,
$$
in lexicographic $(i,j)$ order, with initial sum zero. The table coefficients
are for the **normalized** excess $Q$ above, including the division by $m$
and the known-contribution subtraction. It does not accept an unrelated
user-declared root as that expression. An optional supplied transcript must
match this constructed expression node for node; it does not select the
expression to be proved. No symmetry of the coefficient table is required.

The finite scope labels $N,\chi,\epsilon$, known-contribution labels, class-number
rows and the asserted value $m=m_\chi$ are recorded as semantic input claims.
Their truth is not decided by the arithmetic core. In particular, checking
that a label is a finite string does not verify a character, a conductor,
a class number or a trace identity. Full character/conductor verification,
class-number certificates, analytic quadrature certificates and arbitrary
positivity/backend records remain meaningful broader certificate modes;
they still require explicit total encodings and locally proved checkers.
The exact core does not silently discharge or replace those construction
obligations. Leaf enclosures for the named normalized coefficients are
explicit soundness assumptions until their own certificates are supplied.

## Definition references

[A. Booker, M. Lee, and A. Strömbergsson, *Twist-Minimal Trace Formulas and the Selberg Eigenvalue Conjecture*](https://arxiv.org/pdf/1803.06016v2)

[A. Booker and A. Strömbergsson, *Numerical Computations with the Trace Formula and the Selberg Eigenvalue Conjecture*](https://www.degruyterbrill.com/document/doi/10.1515/CRELLE.2007.047/pdf)

## Remarks

The paper links a public numerical-code archive in its [BLS18] bibliography.
The archived index was recovered, but its linked code zip and the production
arrays/raw interval outputs have not been recovered in this run. This definition is a local
certificate-data interface for the conditional checker; it does not assert
that the authors' production schema has been recovered.
