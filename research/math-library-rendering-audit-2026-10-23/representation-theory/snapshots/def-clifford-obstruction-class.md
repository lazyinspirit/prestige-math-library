---
id: def-clifford-obstruction-class
kind: definition
title: "The Clifford obstruction class of an invariant irreducible representation"
status: published
origin: pipeline
deps: ["lem-invariant-irrep-produces-a-projective-inertia-extension", "lem-rephasing-changes-the-factor-set-by-a-coboundary", "def-second-cohomology-by-factor-sets", "def-conjugate-representation-and-inertia-group"]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  audited: 2026-09-27
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
sources:
  references:
    - title: "Britta Späth, Reduction theorems for some global-local conjectures — §1.B (character triples, associated projective representations, Lemma 1.8(d)), printed pp. 3–4"
      url: "https://darstellungstheorie.uni-wuppertal.de/fileadmin/mathe/darstellungstheorie/LausanneBS_final.pdf"
    - title: "Tammo tom Dieck, Representation Theory — §4.2, printed pp. 54–57"
      url: "https://www.uni-math.gwdg.de/tammo/d01.pdf"
---

## Definition

Let $N\trianglelefteq G$ be finite groups, let $\rho:N\to\operatorname{GL}(S)$ be
an irreducible representation on a nonzero finite-dimensional complex space $S$,
let $\theta$ be its character, let $I=I_G(\theta)$ be the inertia group
([[def-conjugate-representation-and-inertia-group]]), and put $Q:=I/N$. By
[[lem-invariant-irrep-produces-a-projective-inertia-extension]] there are
operators $P(i)\in\operatorname{GL}(S)$ with $P(n)=\rho(n)$, $P(ni)=\rho(n)P(i)$,
$P(in)=P(i)\rho(n)$ and $P(i)P(j)=\alpha(iN,jN)P(ij)$, where $\alpha$ is a
normalized two-cocycle on $Q$ with values in the abelian group $\mathbb C^\times$
(trivial $Q$-action, written multiplicatively). The **Clifford obstruction** of
$\rho$ (equivalently, of $\theta$) is the cohomology class
$$[\alpha]\in H^2(Q,\mathbb C^\times)$$
in the factor-set model of [[def-second-cohomology-by-factor-sets]]. The class
vanishes precisely when the projective operators can be made multiplicative,
which by [[thm-extension-exists-iff-the-clifford-obstruction-vanishes]] is
exactly the extendibility of $\rho$ to $I$; in particular the class is a
complete obstruction to extension, not merely a necessary condition.

**The class does not depend on the operators.** If $P'$ is a second family with
the same normalization and the same three identities, then by
[[lem-invariant-irrep-produces-a-projective-inertia-extension]] there is a
function $c:Q\to\mathbb C^\times$ with $c(N)=1$ and $P'(i)=c(iN)P(i)$ for all
$i\in I$, and the factor set of $P'$ is
$\alpha'(q,r)=c(q)c(r)c(qr)^{-1}\alpha(q,r)$. Read as a one-cochain on $Q$ with
the trivial action, $c$ has coboundary $\delta c(q,r)=c(q)c(r)c(qr)^{-1}$ and
$\alpha'=(\delta c)\cdot\alpha$, so $\alpha'$ and $\alpha$ have the same class
in $H^2(Q,\mathbb C^\times)$; this is the rephasing computation of
[[lem-rephasing-changes-the-factor-set-by-a-coboundary]], applied to the
projective representation of $I$ afforded by $P$, and it is the step that makes
the class depend only on the character triple.

**Equivalent representations give the same class.** If $\rho'=\iota\rho\iota^{-1}$
for a linear isomorphism $\iota:S\to S'$, then the operators
$P'(i):=\iota P(i)\iota^{-1}$ satisfy the same identities with the same
function $\alpha$, because $P'(n)=\rho'(n)$ and all scalar identities are
unchanged by conjugation. So replacing $\rho$ by an equivalent representation,
possibly on another space, leaves the class $[\alpha]$ literally unchanged; note
that $I$ and $\theta$ are unchanged as well.

**Degenerate case $I=N$.** Here $Q$ is the trivial group, whose only normalized
two-cocycle is the constant function $1$, so $H^2(Q,\mathbb C^\times)$ is the
trivial group and the Clifford obstruction is automatically zero. This is the
trivial case of the extension criterion: $\rho$ is already a representation of
$I=N$, and indeed the identity map $\rho$ is an extension. The first interesting
case is therefore a proper invariant type, and the class measures exactly how
far the associated projective operators are from an extension.
