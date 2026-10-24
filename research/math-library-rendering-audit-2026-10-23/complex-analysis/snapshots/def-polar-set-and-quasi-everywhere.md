---
id: def-polar-set-and-quasi-everywhere
kind: definition
title: "Capacity-polar sets, quasi-everywhere, and subharmonic polar sets"
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - def-logarithmic-capacity-compact-set
  - def-plane-subharmonic-function
  - def-complex-domain
  - def-logarithmic-potential-and-energy
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "E. B. Saff, Logarithmic Potential Theory with Applications to Approximation Theory, §1"
      url: "https://arxiv.org/pdf/1010.3760"
      locator: "§1, polar sets via the capacity, printed pp. 168–170"
    - title: "B. Khoruzhenko, LTCC Potential Theory notes, §3"
      url: "https://maths.qmul.ac.uk/~boris/potential_th_notes.pdf"
      locator: "§3.1, polar sets and quasi-everywhere statements"
    - title: "C. Kuehn, Introduction to Potential Theory via Applications, §2.3"
      url: "https://arxiv.org/pdf/0804.4689"
      locator: "§2.3, polar sets as −∞ loci of subharmonic functions"
verification:
  audited: 2026-10-02
  precheck: n/a
---

## Definition

Let $K\subseteq\mathbb C$ be compact; call it the **conductor** when it is fixed
as the ambient set of a quasi-everywhere statement. Capacity is the
logarithmic capacity of [[def-logarithmic-capacity-compact-set]], whose
conventions $\operatorname{cap}(\varnothing)=0$ and
$\operatorname{cap}(F)>0$ or $=0$ for nonempty compact $F$ are used verbatim.

**Capacity-polar sets.** A set $E\subseteq\mathbb C$ is **capacity-polar**
when

$$\operatorname{cap}(F)=0\qquad\text{for every compact }F\subseteq E .$$

The restriction to compact subsets is deliberate: capacity is defined here for
compact sets, so the definition tests $E$ through its compact parts, and a
capacity-polar set may be neither compact nor Borel. A compact $F$ is
capacity-polar exactly when $\operatorname{cap}(F)=0$, and
$\varnothing$ is capacity-polar by the convention $\operatorname{cap}
(\varnothing)=0$. A set $E$ is **nonpolar** when it is not capacity-polar,
that is, when it contains a compact set of positive capacity.

**Quasi-everywhere.** Let $P$ be a property of the points of a compact conductor
$K$, that is, a statement $P(z)$ for $z\in K$. One says that $P$ holds
**quasi-everywhere on $K$**, abbreviated $P$ holds q.e. on $K$, when there is a
Borel capacity-polar set $E\subseteq K$ with

$$P(z)\ \text{holds for every }z\in K\setminus E .$$

The exceptional set $E$ is required to be Borel so that the statement has a
measurable exceptional carrier; the definition itself asks nothing about the
values of $P$ on $E$. If $P$ holds everywhere on $K$ it holds q.e. on $K$, with
$E=\varnothing$. A set $N\subseteq K$ is called q.e.-negligible when it is
contained in a Borel capacity-polar subset of $K$; a property holds q.e. exactly
when it fails on a q.e.-negligible set.

**Subharmonic polar sets.** A set $E\subseteq\mathbb C$ is **subharmonically
polar** when for every $x\in E$ there are a complex domain $U_x\ni x$ and a function
$u_x$ subharmonic on $U_x$ ([[def-plane-subharmonic-function]]) with

$$E\cap U_x\ \subseteq\ \{z\in U_x:u_x(z)=-\infty\}.$$

Here a complex domain is a nonempty connected open set
([[def-complex-domain]]). Subharmonicity already requires that $u_x$ be
not identically $-\infty$ on $U_x$; the requirement in the
literature that the witness be "not identically $-\infty$" is therefore
automatic in this convention. If $E$ is contained in a single
complex domain carrying one such witness, the local condition holds with that one
function; the definition uses the local form so that unbounded or noncompact
$E$ need no global witness.

## Remarks

**The two notions are defined independently and are not identified here.**
Capacity-polar is an inner-capacity condition on compact subsets, while
subharmonically polar is a local $-\infty$-locus condition. Under Dependent Choice, for compact $E$
the two are equivalent
([[lem-compact-polar-sets-and-subharmonic-minus-infinity-loci]]), and that
equivalence is a theorem, not part of this definition. To pass from local
witnesses to the global witness in that lemma when $E$ is compact, cover $E$
by finitely many open discs whose closed discs lie in the respective local
witness domains. Each compact piece obtained by intersecting $E$ with one
of these closed discs has capacity zero by the compact converse in the lemma.
Its specified finite-union clause supplies a global subharmonic witness for
their union $E$, and its compact converse gives $\operatorname{cap}(E)=0$.
The global-to-local direction uses the same witness on each neighbourhood.
In particular, no
statement here asserts that a capacity-polar set of a compact conductor is the
$-\infty$ locus of one subharmonic function, nor that the definition extends
to arbitrary non-Borel sets.

**Polarity inherits the empty and inclusion cases.** Every subset of a
capacity-polar set is capacity-polar, since every compact subset of the subset
is a compact subset of the larger set; in particular $\varnothing$ is
capacity-polar, and a set is capacity-polar if and only if all its subsets are.
The corresponding statements for subharmonically polar sets hold by restricting
the local witnesses.

**The diagonal convention is not affected.** The exceptional sets here are
compared only through capacities and $-\infty$ loci; no change of the
logarithmic kernel on a null set is made or permitted by this definition, and
the diagonal value $+\infty$ of [[def-logarithmic-potential-and-energy]] plays
no role.

**Choice.** No choice principle is used in this definition. "Every compact
$F\subseteq E$" is a statement about a fixed collection of sets, the
exceptional Borel set is quantified rather than selected, and the local
witnesses $u_x$ are existential.
