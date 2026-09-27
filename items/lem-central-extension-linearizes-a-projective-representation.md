---
id: lem-central-extension-linearizes-a-projective-representation
kind: lemma
title: "The cocycle central extension linearizes a projective representation"
status: published
origin: pipeline
deps: ["lem-cocycle-central-extension-is-a-group", "def-projective-representation-and-factor-set", "def-finite-dimensional-representation-of-a-group-over-a-field"]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Britta Späth, Reduction theorems for some global-local conjectures — Theorem 1.12(b), printed pp. 4–5"
      url: "https://darstellungstheorie.uni-wuppertal.de/fileadmin/mathe/darstellungstheorie/LausanneBS_final.pdf"
    - title: "Tammo tom Dieck, Representation Theory — §4.2, printed pp. 54–57"
      url: "https://www.uni-math.gwdg.de/tammo/d01.pdf"
proof_strategy: direct
verification:
  audited: 2026-09-27
---

## Statement

Let $Q$ be a group, let $\alpha:Q\times Q\to\mathbb C^\times$ be a normalized
two-cocycle, and let $E_\alpha=Q\times\mathbb C^\times$ be the group with
$(q,z)(r,w)=(qr,\alpha(q,r)zw)$ of
[[lem-cocycle-central-extension-is-a-group]]. Then the normalized projective
$Q$-representations with factor set $\alpha$ correspond to the ordinary
representations $D$ of the group $E_\alpha$ satisfying $D(1,z)=z\operatorname{id}$
for all $z\in\mathbb C^\times$, on the same space $V$, by
$$D(q,z)=zP(q)\qquad\text{and}\qquad P(q)=D(q,1).$$
The two constructions are mutually inverse on maps, and a linear map intertwines
two projective representations exactly when it intertwines the corresponding
$E_\alpha$-representations.

## Facts & Assumptions

**Given:** A group $Q$, a normalized two-cocycle $\alpha:Q\times Q\to\mathbb C^\times$, the group $E_\alpha=Q\times\mathbb C^\times$ with product $(q,z)(r,w)=(qr,\alpha(q,r)zw)$ and identity $(1,1)$, and a nonzero finite-dimensional complex vector space $V$.

[F1] $E_\alpha$ is a group with the displayed product and identity $(1,1)$, and $\alpha(1,q)=\alpha(q,1)=1$. ([[lem-cocycle-central-extension-is-a-group]]).

[F2] For finite $Q$, [[def-projective-representation-and-factor-set]] defines a normalized projective representation by $P:Q\to\operatorname{GL}(V)$, $P(1)=\operatorname{id}_V$ and $P(q)P(r)=\alpha(q,r)P(qr)$. In this lemma, for arbitrary $Q$ we use these same equations as the definition, on the given nonzero finite-dimensional complex space $V$. The constructions below verify the correspondence directly in this convention; no finiteness of $Q$ is assumed.

[F3] A representation of a group $G$ over a field $k$ is a group homomorphism $\rho:G\to\operatorname{GL}(V)$ on a finite-dimensional $k$-space $V$. ([[def-finite-dimensional-representation-of-a-group-over-a-field]]).

[A1] For $T\in\operatorname{End}(V)$ and scalars $z,w\in\mathbb C$ one has $(zT)(wS)=zw\,TS$ and $zT=Tz$, and $zT$ is invertible when $z\ne0$ and $T$ is invertible.

## Proof

**Proof technique:** direct.

1.1 Let $P$ be a normalized projective representation of $Q$ with factor set $\alpha$ and define $D(q,z):=zP(q)$ for $(q,z)\in E_\alpha$. Each $D(q,z)$ is invertible by [A1], and $D(1,z)=z\operatorname{id}_V$. For $(q,z),(r,w)\in E_\alpha$, $D(q,z)D(r,w)=zP(q)wP(r)=zwP(q)P(r)=zw\alpha(q,r)P(qr)=D(qr,\alpha(q,r)zw)=D\bigl((q,z)(r,w)\bigr)$ by [F2] and [A1], so $D$ is a homomorphism, that is, a representation of the group $E_\alpha$ in the sense of [F3]. [A1, F1, F2, F3]

1.2 Conversely let $D:E_\alpha\to\operatorname{GL}(V)$ be a representation of the group $E_\alpha$ with $D(1,z)=z\operatorname{id}_V$ for every $z\in\mathbb C^\times$, and define $P(q):=D(q,1)$. Then $P(q)$ is invertible, $P(1)=D(1,1)=\operatorname{id}_V$, and for $q,r\in Q$ one has $P(q)P(r)=D(q,1)D(r,1)=D\bigl((q,1)(r,1)\bigr)=D(qr,\alpha(q,r))$ by [F1], while $(qr,1)(1,\alpha(q,r))=(qr,\alpha(qr,1)\alpha(q,r))=(qr,\alpha(q,r))$ and hence $D(qr,\alpha(q,r))=D(qr,1)D(1,\alpha(q,r))=\alpha(q,r)P(qr)$; thus $P$ is a normalized projective representation of $Q$ with factor set $\alpha$ in the sense of [F2]. [A1, F1, F2, F3]

2.1 The two constructions are inverse. If $P$ is given and $D(q,z)=zP(q)$, then the projective representation reconstructed from $D$ is $q\mapsto D(q,1)=P(q)$. Conversely, if $D$ is given and $P(q)=D(q,1)$, then $zP(q)=D(1,z)D(q,1)=D\bigl((1,z)(q,1)\bigr)=D(q,\alpha(1,q)z)=D(q,z)$ for all $q,z$, because $(1,z)(q,1)=(q,z)$ by [F1]; this also shows that the condition $D(1,z)=z\operatorname{id}_V$ is exactly the requirement that the reconstruction be consistent, and it is automatic for the representations produced in step 1.1. [F1, step 1.1, step 1.2, algebra]

2.2 A linear map $T:V\to V'$ intertwines a projective representation $P$ with a projective representation $P'$ of $Q$, that is $TP(q)=P'(q)T$ for all $q$, if and only if it intertwines the corresponding representations $D,D'$ of $E_\alpha$: indeed $TD(q,z)=zTP(q)$ and $D'(q,z)T=zP'(q)T$ by [A1], so $TD(q,z)=D'(q,z)T$ for all $(q,z)$ is equivalent to $TP(q)=P'(q)T$ for all $q$, since $z\ne0$ may be cancelled. [A1, step 1.1, step 1.2, algebra]

3.1 Steps 1.1 and 1.2 give mutually inverse constructions between normalized projective $Q$-representations with factor set $\alpha$ and representations $D$ of the group $E_\alpha$ with $D(1,z)=z\operatorname{id}_V$, on a fixed space $V$, by the formulas $D(q,z)=zP(q)$ and $P(q)=D(q,1)$, and step 2.2 shows that they match intertwiners; consequently the projective representation theory of $Q$ with factor set $\alpha$ is the ordinary representation theory of the central extension $E_\alpha$ restricted to the representations with the prescribed central character $z\mapsto z$. [step 1.1, step 1.2, step 2.1, step 2.2] ∎
