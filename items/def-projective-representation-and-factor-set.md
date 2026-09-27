---
id: def-projective-representation-and-factor-set
kind: definition
title: "Projective representations and normalized factor sets"
status: draft
origin: pipeline
deps: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
sources:
  references:
    - title: "Britta Späth, Reduction theorems for some global-local conjectures — Definition 1.4 and Remark 1.5, printed pp. 2–3"
      url: "https://darstellungstheorie.uni-wuppertal.de/fileadmin/mathe/darstellungstheorie/LausanneBS_final.pdf"
    - title: "Tammo tom Dieck, Representation Theory — §4.2, printed pp. 54–57"
      url: "https://www.uni-math.gwdg.de/tammo/d01.pdf"
---

## Definition

Let $Q$ be a finite group and let $V$ be a nonzero finite-dimensional complex
vector space. A **normalized projective representation** of $Q$ on $V$ is a map
$$P:Q\longrightarrow\operatorname{GL}(V)$$
with $P(1)=\operatorname{id}_V$ for which there are scalars
$\alpha(q,r)\in\mathbb C^\times$ satisfying
$$P(q)P(r)=\alpha(q,r)P(qr)\qquad(q,r\in Q).$$
The function $\alpha$ is the **factor set** of $P$; in this convention the
scalar multiplies $P(qr)$, so that the relation with $\alpha\equiv1$ is the
multiplicativity of an ordinary representation. The **degree** of $P$ is
$\dim_{\mathbb C}V$.

**The factor set is determined by $P$.** If $P(q)P(r)=\alpha(q,r)P(qr)$ and
$P(q)P(r)=\beta(q,r)P(qr)$ for scalars, then $(\alpha(q,r)-\beta(q,r))P(qr)=0$
and $P(qr)$ is invertible, so $\alpha(q,r)=\beta(q,r)$. Thus a map $P$ either
has no factor set or has exactly one, and the equation is a genuine condition
on $P$: it says that the composite of $P$ with the quotient map
$\operatorname{GL}(V)\to\operatorname{PGL}(V)$ is a group homomorphism, since
$P(q)P(r)P(qr)^{-1}$ is a scalar exactly when the displayed relation holds. The
scalars are automatically nonzero, because $P(q)P(r)$ is invertible and
$P(q)P(r)=\alpha(q,r)P(qr)$. The normalization $P(1)=\operatorname{id}_V$
fixes the representative of a projective representation up to scalars; with it
the relation at $q=r=1$ forces $\alpha(1,1)=1$, and the general normalization
identities $\alpha(1,q)=\alpha(q,1)=1$ are proved in
[[lem-factor-set-is-a-normalized-two-cocycle]].

**Similarity.** Projective representations $P$ of $Q$ on $V$ and $P'$ of $Q$ on
$V'$ are **similar** when there is a $\mathbb C$-linear isomorphism
$M:V\to V'$ with
$$P'(q)=M\,P(q)\,M^{-1}\qquad(q\in Q).$$
Similar projective representations have the same factor set: multiplying
$P'(q)P'(r)=MP(q)P(r)M^{-1}=\alpha(q,r)MP(qr)M^{-1}=\alpha(q,r)P'(qr)$
identifies the factor set of $P'$ with that of $P$. Similarity is an
equivalence relation on the projective representations of $Q$ with a fixed
factor set, and it preserves the degree.

**Irreducibility.** A normalized projective representation $P$ of $Q$ on $V$ is
**reducible** when there is a subspace $W\le V$ with $0\ne W\ne V$ and
$P(q)W\subseteq W$ for every $q\in Q$, and **irreducible** otherwise. Because
every $P(q)$ is invertible, $P(q)W\subseteq W$ for all $q$ is equivalent to
$P(q)W=W$ for all $q$. A similarity $M:P\to P'$ carries $P$-invariant subspaces
bijectively onto $P'$-invariant subspaces, so reducibility and irreducibility
are similarity invariants; this is the notion of irreducibility used in
[[thm-projective-clifford-correspondence]].

## Remarks

- **Why $V\ne0$.** For the zero space the group $\operatorname{GL}(0)$ is
  trivial, so the relation $P(q)P(r)=\alpha(q,r)P(qr)$ holds for every scalar
  function $\alpha$ and no factor set is determined. The zero module reappears
  in the module dictionary of
  [[lem-projective-representations-are-twisted-group-algebra-modules]] as the
  common zero object of all twisted module categories, which is why the
  correspondence is stated for nonzero modules.

- **Conventions.** The factor set here is the map $\alpha$ of Späth,
  Definition 1.4, normalized by $P(1)=\operatorname{id}$; its cocycle equation
  and its behaviour under rephasing are recorded in
  [[lem-factor-set-is-a-normalized-two-cocycle]] and
  [[lem-rephasing-changes-the-factor-set-by-a-coboundary]]. A projective
  representation in this sense is not a representation: the scalar
  $\alpha(q,r)$ need not be $1$, and the maps $P(q)$ need not multiply.
