---
id: def-conductor-of-a-cyclotomic-field
kind: definition
title: Cyclotomic conductor of a full cyclotomic field
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - def-cyclotomic-extension
  - cor-splitting-fields-are-unique-up-to-base-isomorphism
  - thm-well-ordering-principle
justified_by: []
landmark: false
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "J. S. Milne, Algebraic Number Theory, Ch. 6, Remark 6.6"
      url: "https://www.jmilne.org/math/CourseNotes/ANT.pdf"
      locator: "Ch. 6, Remark 6.6(a)-(b), pp. 99-100: the cyclotomic fields Q(zeta_{2m}) = Q(zeta_m) for odd m and the conductor of Q(zeta_n)."
    - title: "Conrad-Landesman, Math 154 Algebraic Number Theory, Ch. 11, Remark 11.7"
      url: "https://math.stanford.edu/~conrad/154Page/handouts/undergraduate-number-theory.pdf"
      locator: "Remark 11.7, p. 60: only indices n = 2 (mod 4) have a reduced cyclotomic index; no Kronecker-Weber input."
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
---

## Definition

Let $n\ge1$ and let $K=\mathbb Q(\mu_n)$ be a cyclotomic extension of
$\mathbb Q$ of order $n$ ([[def-cyclotomic-extension]]): a splitting field of
$t^{n}-1$ over $\mathbb Q$. When a primitive $n$-th root of unity $\zeta_n$ is
fixed, $K=\mathbb Q(\zeta_n)$.

A positive integer $f$ is **admissible** for $K$ when there is a
$\mathbb Q$-algebra embedding $K\hookrightarrow F$ into a splitting field $F$ of
$t^{f}-1$ over $\mathbb Q$. The **cyclotomic conductor** of $K$ is the least
admissible positive integer,

$$\operatorname{cond}(K):=\min\{\,f\ge1\ :\ K\hookrightarrow\mathbb Q(\zeta_f)\,\}.$$

**Well-definedness.** The set is nonempty, since the identity of $K$ exhibits
$K\hookrightarrow K$ and $K=\mathbb Q(\mu_n)$ is a splitting field of
$t^{n}-1$; by the well-ordering of the positive integers it therefore has a
least element ([[thm-well-ordering-principle]]). The value depends only on the
$\mathbb Q$-isomorphism class of $K$: if $\varphi:K\to K'$ is an isomorphism of
splitting fields of $t^{n}-1$ and $K\hookrightarrow\mathbb Q(\zeta_f)$ is an
embedding, then composing with $\varphi^{-1}$ exhibits
$K'\hookrightarrow\mathbb Q(\zeta_f)$, so $K$ and $K'$ have the same admissible
integers. In particular the conductor is unchanged by the choice of splitting
field ([[cor-splitting-fields-are-unique-up-to-base-isomorphism]]).

**Conductors are compared inside a common field.** Every assertion below about
an inclusion $K\subseteq\mathbb Q(\zeta_f)$ is read inside one fixed algebraic
closure of $\mathbb Q$, in which one copy of each cyclotomic field has been
chosen; by the previous paragraph this loses no information, because
conductor statements are invariant under the $\mathbb Q$-isomorphisms relating
the choices.

**Scope.** This is a conductor of a *full* cyclotomic field only. It is not the
Artin conductor of a Dirichlet character, not a conductor assigned to an
arbitrary abelian number field, and no Kronecker-Weber premise is used or
implied: the definition does not assert that an arbitrary abelian field lies in
some $\mathbb Q(\zeta_f)$. Admissibility of $f=n$ does not make $n$ the least
admissible integer; identifying the least one is the content of
[[thm-conductor-of-a-full-cyclotomic-field]].
