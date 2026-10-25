---
id: def-minkowski-embedding-of-a-number-field
kind: definition
title: "Unscaled Minkowski embedding"
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - def-archimedean-embeddings-and-number-field-signature
  - def-number-field
  - thm-discriminant-as-an-embedding-determinant
provenance:
  statement: literature-derived
  proof: literature-derived
sources:
  references:
    - title: "J. S. Milne, Algebraic Number Theory v3.08"
      url: "https://www.jmilne.org/math/CourseNotes/ANTc.pdf"
      locator: "Ch. 4, lattices and the Minkowski embedding, p.79."
    - title: "William A. Stein, Algebraic Number Theory: A Computational Approach"
      url: "https://wstein.org/books/ant/ant.pdf"
      locator: "§7.1 p.80."
verification:
  audited: 2026-10-02
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
---

## Definition

Let $K$ be a number field ([[def-number-field]]) of degree $n=[K:\mathbb Q]$
and signature $(r_1,r_2)$, so that
$n=r_1+2r_2$ and the field has $r_1$ real embeddings
$\sigma_1,\dots,\sigma_{r_1}:K\to\mathbb R$ and $r_2$ complex-conjugate
pairs of nonreal embeddings from which one representative
$\tau_1,\dots,\tau_{r_2}$ is chosen; the notation and the count
$r_1+2r_2=n$ are those of
[[def-archimedean-embeddings-and-number-field-signature]]. The **unscaled
Minkowski embedding** of $K$ is the injective map

$$\sigma:K\longrightarrow\mathbb R^{r_1}\times\mathbb C^{r_2},\qquad \sigma(x)=\bigl(\sigma_1(x),\dots,\sigma_{r_1}(x),\tau_1(x),\dots,\tau_{r_2}(x)\bigr),$$

composed with the identification $\mathbb C^{r_2}\cong\mathbb R^{2r_2}$ that
sends $z$ to the pair $(\operatorname{Re}z,\operatorname{Im}z)$ of real
coordinates. This exhibits $\sigma$ as a map into
$\mathbb R^{r_1}\times\mathbb R^{2r_2}=\mathbb R^n$.

No factor $\sqrt2$ is inserted in the complex coordinates: each complex
coordinate contributes the two coordinates $\operatorname{Re}\tau_j(x)$ and
$\operatorname{Im}\tau_j(x)$ with equal weight. Thus the Euclidean norm of a
complex block $(z_1,\dots,z_{r_2})$ is
$\sqrt{\sum_j|z_j|^2}$, and the complex block of $\sigma(x)$ has norm
$\sqrt{\sum_j|\tau_j(x)|^2}$. All volumes, covolumes and determinants on this
item use this **unscaled** convention.

## Remarks

**Injectivity and linearity.** Since $n=r_1+2r_2\ge1$, at least one of the
listed embeddings exists. If $\sigma(x)=0$, every listed embedding sends $x$
to zero; any one of them is injective, so $x=0$. This also covers the case
$r_2=0$, when there are no complex representatives. Each embedding is
$\mathbb Q$-linear, as is the real-coordinate identification, so $\sigma$ is
$\mathbb Q$-linear. Injectivity alone does not imply that the images of a
$\mathbb Q$-basis are linearly independent over $\mathbb R$; that fact follows
from the determinant calculation below.

**Relation to the all-complex embedding determinant.** Let
$\alpha_1,\dots,\alpha_n$ be a $\mathbb Q$-basis of $K$ and let
$M=(\psi_i(\alpha_j))$ be the $n\times n$ matrix of all complex embeddings.
By [[thm-discriminant-as-an-embedding-determinant]], $\det M\ne0$ and
$\det(M)^2=\operatorname{disc}(\alpha_1,\dots,\alpha_n)$. Reorder its rows
so that each complex-conjugate pair is adjacent. For a pair $\tau,\bar\tau$,
the old rows are obtained from the real rows
$(\operatorname{Re}\tau,\operatorname{Im}\tau)$ by the transition matrix
whose determinant is $-2i$, of modulus $2$. Replacing all such pairs by their
real and imaginary rows therefore gives the real $n\times n$ matrix $A$ with
columns $\sigma(\alpha_j)$ and

$$|\det A|=2^{-r_2}\,|\det M|=2^{-r_2}\sqrt{|\operatorname{disc}(\alpha_1,\dots,\alpha_n)|}.$$

In particular, the images of every $\mathbb Q$-basis form a real basis of
$\mathbb R^n$. This factor $2^{-r_2}$ is responsible for the covolume formula
$\operatorname{covol}(\sigma(\mathfrak a))=2^{-r_2}\sqrt{|d_K|}\,N\mathfrak a$
proved later in this development.
