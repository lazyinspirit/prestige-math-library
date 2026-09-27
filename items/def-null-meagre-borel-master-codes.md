---
id: def-null-meagre-borel-master-codes
kind: definition
title: Borel master codes for null and meagre sets
status: published
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-null-and-meagre-cardinal-invariants, def-product-topology, lem-cantor-coin-measure-from-binary-expansion, def-nowhere-dense-meagre-and-residual-subsets, def-borel-sigma-algebra, thm-continuity-from-above-for-measures, thm-finite-and-countable-subadditivity-of-measures, thm-geometric-series, def-series, def-measure, def-countable-choice, def-axiom-of-choice, def-countable, def-finite-cardinality, def-integer-power, def-generated-sigma-algebra, def-algebra-of-subsets]
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  scraped: []
  references:
    - title: "Tomek Bartoszynski, Invariants of Measure and Category, Section 3 (coding of null and meagre sets, the slalom order), printed pp.5-7"
      url: "https://arxiv.org/pdf/math/9910015"
verification:
  audited: 2026-09-27
  precheck: n/a
---

## Definition

Work in ZFC in Cantor space $\mathcal C=2^{\omega}$, the product of countably
many copies of the discrete two-point space, with the product topology
([[def-product-topology]]) and the fair-coin measure $\mu$ of
[[lem-cantor-coin-measure-from-binary-expansion]], so that $\mu$ is a Borel
probability measure with $\mu([s])=2^{-\lvert s\rvert}$ on the basic clopen
cylinders $[s]=\{x\in\mathcal C:x\upharpoonright\lvert s\rvert=s\}$
([[def-borel-sigma-algebra]]).

For this page define the Cantor-space null and meagre ideals by

$$\mathcal N_{\mathcal C}:=\{A\subseteq\mathcal C:\exists B\in\mathcal B(\mathcal C)\ (A\subseteq B\text{ and }\mu(B)=0)\},\qquad \mathcal M_{\mathcal C}:=\{A\subseteq\mathcal C:A\text{ is meagre in }\mathcal C\}.$$

Thus null membership means being contained in a Borel fair-coin null set; it
does not assign $\mu(A)$ to a possibly non-Borel set $A$. These are the
completed null ideal and the meagre ideal on $\mathcal C$. In ZFC,
$\mathcal N_{\mathcal C}$ is closed under subsets and countable unions: choose
a Borel null hull for each set in a countable family and take their Borel null
union. The same closure holds for $\mathcal M_{\mathcal C}$ by flattening the
countable nowhere-dense witnesses over $\mathbb N\times\mathbb N$; subsets
preserve meagreness by definition. The unqualified symbols $\mathcal N$ and
$\mathcal M$ in
[[def-null-and-meagre-cardinal-invariants]] denote the corresponding ideals on
$\mathbb R$.

**The fixed clopen basis.** Fix once and for all a bijection
$\mathbb N\to2^{<\mathbb N}$ from the natural numbers onto the finite binary
words, for definiteness the length-lexicographic one
$\varnothing,0,1,00,01,10,11,000,\dots$, and write $U_k:=[s_k]$ for the $k$-th basic
clopen set, so that $(U_k)_{k\in\mathbb N}$ enumerates the basic clopen sets of
$\mathcal C$ and $\mu(U_k)\to0$. Every open subset of $\mathcal C$ is a union
of basic clopen sets, since the cylinders form a base of the topology.

**Null master codes.** A **null master code** is a function $f:\mathbb N\to
\mathbb N$. Fix a second enumeration $(C_k)_{k\in\mathbb N}$ of **all clopen
subsets** of $\mathcal C$, including the empty set, by coding finite unions of
basic cylinders in length-lexicographic order. The null-code condition is

$$\mu(C_{f(n)})\le2^{-n}\qquad\text{for every } n\in\mathbb N .$$

The **null set coded** by $f$ is the limsup of the sequence of clopen sets that
$f$ selects,

$$N_f:=\bigcap_{m\in\mathbb N}\bigcup_{n\ge m}C_{f(n)} ,$$

which is Borel, and null: $\mu(\bigcup_{n\ge m}C_{f(n)})\le\sum_{n\ge
m}2^{-n}=2^{1-m}$ by countable subadditivity and the geometric series, so
continuity from above along the decreasing sequence of unions gives
$\mu(N_f)=\lim_m\mu(\bigcup_{n\ge m}C_{f(n)})=0$. Thus every null master code
names a member of $\mathcal N_{\mathcal C}$, and the coded family is a family
of null Borel sets.

**Meagre master codes.** A **meagre master code** is a function
$f:\mathbb N\to\mathbb N$, read through a fixed bijection
$\mathbb N\to\mathbb N\times\mathbb N$, such that for every $n\in\mathbb N$
the open set

$$V_n(f):=\bigcup_{m\in\mathbb N}U_{f(\langle n,m\rangle)}$$

is **dense** in $\mathcal C$. The **meagre set coded** by $f$ is the complement
of the intersection of those dense open sets,

$$M_f:=\mathcal C\setminus\bigcap_{n\in\mathbb N}V_n(f)=\bigcup_{n\in\mathbb N}\bigl(\mathcal C\setminus V_n(f)\bigr),$$

and it is meagre: each complement $\mathcal C\setminus V_n(f)$ is closed
because $V_n(f)$ is open, and has empty interior because $V_n(f)$ is dense, so
each complement is nowhere dense
([[def-nowhere-dense-meagre-and-residual-subsets]]) and $M_f$ is a countable
union of closed nowhere dense sets, hence $M_f\in\mathcal M_{\mathcal C}$.

**The slalom order.** A **slalom** is a function $S$ with domain $\mathbb N$
and finite values $S(n)\subseteq\mathbb N$ ([[def-finite-cardinality]]),
subject to the summability condition
$\sum_{n\in\mathbb N}\lvert S(n)\rvert 2^{-n}<\infty$ ([[def-series]]).
Slaloms are ordered by **eventual inclusion**,

$$S\subseteq^{*}T\quad:\Longleftrightarrow\quad S(n)\subseteq T(n)\text{ for all but finitely many }n\in\mathbb N ,$$

and the space of slaloms with this preorder is written
$(\mathbb S,\subseteq^{*})$ below; it is the **slalom space** of the
master-code construction. The order is reflexive and transitive, and it is
one-sided: $S\subseteq^{*}T$ allows $S(n)\supsetneq T(n)$ for finitely many
$n$.

## Remarks

The two code families mirror each other. A null code fixes, at stage $n$, one
finite union of cylinders of measure at most $2^{-n}$, and the coded set is the set of points
falling into infinitely many stages; summability of the bounds is what makes
the limsup null. A meagre code fixes, at stage $n$, a dense open set, and the
coded set is the set of points falling *outside* at least one stage; density is
what makes each of those complements nowhere dense. Nothing in the definitions
requires the codes to be injective or the coded sets distinct: the *master*
families $\{N_f\}$ and $\{M_f\}$ are used below for their cofinality in the
respective ideals ([[lem-null-meagre-master-codes-are-cofinal]]), not for a
bijective parametrisation of the ideals.

The name "master code" records that the coding is a *presentation* of the
ideals just defined, not a parametrisation of their members. The symbols
$\mathcal N$ and $\mathcal M$ in
[[def-null-and-meagre-cardinal-invariants]] refer to the real-line ideals;
$\mathcal N_{\mathcal C}$ and $\mathcal M_{\mathcal C}$ here refer to Cantor
space. The passage of the four cardinal invariants between these spaces is a
separate matter needing separate measure and category maps
([[lem-null-meagre-ideal-transfer-cantor-real]]). Everything above is internal
to $\mathcal C$ and consists of notation and elementary estimates; the
constructions that give the master families their content — the uniform Borel
section codes and the Tukey morphisms — are the lemmas that follow.

Both coding conditions are Borel conditions on the codes, in the sense needed
for the parameterised arguments below. With the fixed enumerations of this
definition each atomic condition, $f(n)=k$ or $U_j\cap U_k\ne\varnothing$, has
a clopen truth set over the code space ${}^{\omega}\omega$, so the null-code
condition and the density condition are countable Boolean combinations of
clopen sets. Summability of $\sum_n\lvert S(n)\rvert 2^{-n}$ is Borel as well,
being the union over $L\in\mathbb N$ of the conditions that every finite
partial sum is at most $L$. No choice principle is used to code: the
enumerations are fixed once and for all, and selecting a least witness index is
a formula in the index.
