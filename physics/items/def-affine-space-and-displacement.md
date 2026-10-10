---
id: def-affine-space-and-displacement
kind: definition
title: "Affine spaces over a real vector space and displacement vectors"
status: draft
origin: session
domain: mathematics
dependency_level: 0
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-vector-space, def-linear-isomorphism-and-invertible-linear-map]
dependency_roles:
  def-vector-space: mathematical-premise
  def-linear-isomorphism-and-invertible-linear-map: mathematical-premise
sources:
  references:
    - title: "D. Margalit and J. Rabinoff, Interactive Linear Algebra, section 2.7 (affine subspaces and coordinates)"
      url: "https://textbooks.math.gatech.edu/ila/ila.pdf"
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 1 pp. 2-7 (PDF pp. 9-14)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "H. S. Reall, Part III General Relativity (Cambridge, October 12, 2022 revision), sections 2.1-2.2 pp. 25-28 (PDF pp. 26-29); Internet Archive copy of the original https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-10
---

## Definition

Let $V$ be a real vector space, with addition $+$, zero $0$, and additive
inverses ([[def-vector-space]]). An **affine space over $V$** is a nonempty set
$A$ together with a map

$$+\;:\;A\times V\longrightarrow A,\qquad (p,v)\longmapsto p+v,$$

such that

1. $(p+v)+w=p+(v+w)$ and $p+0=p$ for all $p\in A$ and $v,w\in V$; and
2. for all $p,q\in A$ there is exactly one $v\in V$ with $p+v=q$.

The map in clause 1 is the **action** of $V$ on $A$. The unique vector supplied
by clause 2 is written $q-p$ and is called the **displacement from $p$ to $q$**;
thus $q-p$ is the unique $v\in V$ with $p+v=q$. An affine space over the real
vector space $V$ is also called a **real affine space modelled on $V$**, and
then $V$ is its **space of displacements**.

The following identities are consequences of the two clauses, with the displayed
justification:

- $p+(q-p)=q$ for all $p,q\in A$: this restates the defining property of $q-p$
  in clause 2.
- $p-p=0$ for all $p\in A$: taking $q=p$ in the previous display gives
  $p+(p-p)=p=p+0$, and clause 2 applied to the pair $(p,p)$ gives
  $p-p=0$.
- $p+0=p$ for all $p\in A$: this is clause 1.
- $(q-p)+(r-q)=r-p$ for all $p,q,r\in A$:
  $p+\bigl[(q-p)+(r-q)\bigr]=\bigl[p+(q-p)\bigr]+(r-q)=q+(r-q)=r=p+(r-p)$,
  so clause 2 applied to the pair $(p,r)$ identifies the two vectors.
- For each $p\in A$ the map $V\to A$, $v\mapsto p+v$, is a bijection: for
  every $q\in A$, clause 2 supplies $v=q-p$ with $p+v=q$, proving
  surjectivity; it is injective because
  $p+v=p+w$ gives $p+(v-w)=\bigl[p+v\bigr]+(-w)=p+w-w=p=p+0$, so clause 2
  applied to $(p,p)$ gives $v-w=0$, that is, $v=w$.

**Affine coordinate systems.** Suppose $V$ is $4$-dimensional and
$E:\mathbb R^4\to V$ is a linear isomorphism ([[def-linear-isomorphism-and-invertible-linear-map]]).
For a chosen point $o\in A$, define

$$x(p):=E^{-1}(p-o),\qquad p\in A .$$

This is a bijection $x:A\to\mathbb R^4$: it is injective and surjective because
$E^{-1}$ is a bijection and $p\mapsto p-o$ is a bijection of $A$ with $V$ by the
bijection just proved, applied with that $o$. Such maps are the **affine
coordinate systems on $A$**; clause 2 is exactly what makes them well defined,
because it is clause 2 that attaches to each ordered pair $(o,p)$ a unique
displacement $p-o$.
